import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { CheckCircle2 } from 'lucide-react';
import { Button } from '@/app/components/ui/button';
import { Input } from '@/app/components/ui/input';
import { Label } from '@/app/components/ui/label';
import { Textarea } from '@/app/components/ui/textarea';
import { Card } from '@/app/components/ui/card';
import { leadSchema, type LeadFormValues } from '@/lib/validations';
import { submitQuote } from '@/lib/formSubmission';
import { trackFormStart, trackFormSubmit } from '@/lib/analytics';
import { packages } from '@/data/packages';

const defaultValues: LeadFormValues = {
  fullName: '',
  email: '',
  phone: '',
  eventType: '',
  eventDate: '',
  eventStartTime: '',
  eventDuration: 3,
  venue: '',
  guestCount: 100,
  packageSelection: '',
  addOns: [],
  message: '',
};

const QUICK_BOOKING_STORAGE_KEY = 'opbeQuickBooking';

type QuickBookingDetails = {
  eventDate?: string;
  eventType?: string;
  guestCount?: string;
};

const eventTypeLabels: Record<string, string> = {
  wedding: 'Wedding',
  birthday: 'Birthday',
  corporate: 'Corporate event',
  quinceanera: 'Quinceanera',
  graduation: 'Graduation',
  other: 'Other',
};

function readQuickBookingDetails(): QuickBookingDetails {
  if (typeof window === 'undefined') return {};

  try {
    const saved = window.localStorage.getItem(QUICK_BOOKING_STORAGE_KEY);
    if (!saved) return {};

    const parsed = JSON.parse(saved) as QuickBookingDetails;

    return {
      eventDate: parsed.eventDate || '',
      eventType: parsed.eventType || '',
      guestCount: parsed.guestCount || '',
    };
  } catch {
    return {};
  }
}

function formatQuickBookingDate(value?: string) {
  if (!value) return 'Not selected';

  const date = new Date(`${value}T00:00:00`);
  if (Number.isNaN(date.getTime())) return value;

  return date.toLocaleDateString(undefined, {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });
}

function formatGuestCount(value?: string) {
  if (!value) return 'Not selected';

  if (value === '50') return 'Up to 50 guests';
  if (value === '100') return '50-100 guests';
  if (value === '200') return '100-200 guests';
  if (Number(value) >= 250) return '200+ guests';

  return `${value} guests`;
}

export function QuoteForm({ formName = 'quote' }: { formName?: string }) {
  const [quickBookingDetails] = useState(() => (
    formName === 'booking' ? readQuickBookingDetails() : {}
  ));
  const [result, setResult] = useState<{ ok: boolean; message: string; demoMode?: boolean } | null>(null);
  const { register, handleSubmit, formState: { errors, isSubmitting }, setValue, watch } = useForm<any>({
    resolver: zodResolver(leadSchema),
    defaultValues: {
      ...defaultValues,
      eventDate: quickBookingDetails.eventDate || defaultValues.eventDate,
      eventType: quickBookingDetails.eventType || defaultValues.eventType,
      guestCount: quickBookingDetails.guestCount
        ? Number(quickBookingDetails.guestCount)
        : defaultValues.guestCount,
    },
  });
  const packageSelection = watch('packageSelection');
  const hasQuickBookingDetails = Boolean(
    quickBookingDetails.eventDate || quickBookingDetails.eventType || quickBookingDetails.guestCount,
  );
  const errorMessage = (name: string) => String(errors[name]?.message || '');

  useEffect(() => {
    if (formName !== 'booking') return;

    const savedDetails = readQuickBookingDetails();

    if (savedDetails.eventDate) {
      setValue('eventDate', savedDetails.eventDate, { shouldDirty: false, shouldValidate: false });
    }

    if (savedDetails.eventType) {
      setValue('eventType', savedDetails.eventType, { shouldDirty: false, shouldValidate: false });
    }

    if (savedDetails.guestCount) {
      setValue('guestCount', Number(savedDetails.guestCount), { shouldDirty: false, shouldValidate: false });
    }
  }, [formName, setValue]);

  async function onSubmit(values: LeadFormValues) {
    const response = await submitQuote(values as LeadFormValues);
    setResult(response);
    if (response.ok) trackFormSubmit(formName);
  }

  const errorClass = 'mt-1 text-sm text-[#F7E7B4]';

  return (
    <Card className="opbe-premium-card p-6 md:p-8 rounded-3xl backdrop-blur-xl">
      {result?.ok ? (
        <div className="text-center py-8">
          <CheckCircle2 className="w-14 h-14 text-[#F5D76E] mx-auto mb-4 drop-shadow-[0_0_18px_rgba(245,215,110,0.28)]" />
          <h2 className="text-2xl text-white mb-3">Quote request ready</h2>
          <p className="text-white/70 max-w-xl mx-auto">{result.message}</p>
          {result.demoMode && <p className="text-yellow-200/80 text-sm mt-4">Production note: connect Supabase env variables to store leads automatically.</p>}
        </div>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)} onFocus={() => trackFormStart(formName)} className="space-y-6" noValidate>
          {hasQuickBookingDetails && (
            <div className="rounded-2xl border border-[#D4AF37]/25 bg-[#D4AF37]/10 p-4 sm:p-5">
              <p className="mb-3 text-sm uppercase tracking-[0.18em] text-[#F7E7B4]/80">
                Selected from Quick Booking
              </p>
              <div className="grid gap-3 text-sm sm:grid-cols-3">
                <div>
                  <p className="text-white/50">Event date</p>
                  <p className="mt-1 text-white">{formatQuickBookingDate(quickBookingDetails.eventDate)}</p>
                </div>
                <div>
                  <p className="text-white/50">Event type</p>
                  <p className="mt-1 text-white">
                    {quickBookingDetails.eventType
                      ? eventTypeLabels[quickBookingDetails.eventType] || quickBookingDetails.eventType
                      : 'Not selected'}
                  </p>
                </div>
                <div>
                  <p className="text-white/50">Guest count</p>
                  <p className="mt-1 text-white">{formatGuestCount(quickBookingDetails.guestCount)}</p>
                </div>
              </div>
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <Label htmlFor="fullName" className="text-white">Full name</Label>
              <Input id="fullName" {...register('fullName')} aria-invalid={Boolean(errors.fullName)} className="mt-2 bg-white/5 border-white/10 text-white" placeholder="Your name" />
              {errors.fullName && <p className={errorClass}>{errorMessage('fullName')}</p>}
            </div>
            <div>
              <Label htmlFor="email" className="text-white">Email</Label>
              <Input id="email" type="email" {...register('email')} aria-invalid={Boolean(errors.email)} className="mt-2 bg-white/5 border-white/10 text-white" placeholder="you@example.com" />
              {errors.email && <p className={errorClass}>{errorMessage('email')}</p>}
            </div>
            <div>
              <Label htmlFor="phone" className="text-white">Phone</Label>
              <Input id="phone" type="tel" {...register('phone')} aria-invalid={Boolean(errors.phone)} className="mt-2 bg-white/5 border-white/10 text-white" placeholder="(407) 555-2668" />
              {errors.phone && <p className={errorClass}>{errorMessage('phone')}</p>}
            </div>
            <div>
              <Label htmlFor="eventType" className="text-white">Event type</Label>
              <select id="eventType" {...register('eventType')} className="mt-2 h-10 w-full rounded-md bg-white/5 border border-white/10 px-3 text-white">
                <option value="">Select event</option>
                <option value="wedding">Wedding</option>
                <option value="birthday">Birthday</option>
                <option value="corporate">Corporate event</option>
                <option value="quinceanera">Quinceanera</option>
                <option value="graduation">Graduation</option>
                <option value="other">Other</option>
              </select>
              {errors.eventType && <p className={errorClass}>{errorMessage('eventType')}</p>}
            </div>
            <div>
              <Label htmlFor="eventDate" className="text-white">Event date</Label>
              <Input id="eventDate" type="date" {...register('eventDate')} aria-invalid={Boolean(errors.eventDate)} className="mt-2 bg-white/5 border-white/10 text-white" />
              {errors.eventDate && <p className={errorClass}>{errorMessage('eventDate')}</p>}
            </div>
            <div>
              <Label htmlFor="eventStartTime" className="text-white">Start time</Label>
              <Input id="eventStartTime" type="time" {...register('eventStartTime')} aria-invalid={Boolean(errors.eventStartTime)} className="mt-2 bg-white/5 border-white/10 text-white" />
              {errors.eventStartTime && <p className={errorClass}>{errorMessage('eventStartTime')}</p>}
            </div>
            <div>
              <Label htmlFor="eventDuration" className="text-white">Duration in hours</Label>
              <Input id="eventDuration" type="number" min="2" max="8" {...register('eventDuration')} aria-invalid={Boolean(errors.eventDuration)} className="mt-2 bg-white/5 border-white/10 text-white" />
              {errors.eventDuration && <p className={errorClass}>{errorMessage('eventDuration')}</p>}
            </div>
            <div>
              <Label htmlFor="guestCount" className="text-white">Guest count</Label>
              <Input id="guestCount" type="number" min="1" {...register('guestCount')} aria-invalid={Boolean(errors.guestCount)} className="mt-2 bg-white/5 border-white/10 text-white" />
              {errors.guestCount && <p className={errorClass}>{errorMessage('guestCount')}</p>}
            </div>
          </div>

          <div>
            <Label htmlFor="venue" className="text-white">Venue or event location</Label>
            <Input id="venue" {...register('venue')} aria-invalid={Boolean(errors.venue)} className="mt-2 bg-white/5 border-white/10 text-white" placeholder="Orlando venue, hotel, home, or event address" />
            {errors.venue && <p className={errorClass}>{errorMessage('venue')}</p>}
          </div>

          <div>
            <Label className="text-white">Package interest</Label>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mt-2">
              {packages.map((pkg) => (
                <button key={pkg.id} type="button" onClick={() => setValue('packageSelection', pkg.id, { shouldValidate: true })} className={`rounded-2xl border p-4 text-left transition ${packageSelection === pkg.id ? 'border-[#D4AF37] bg-[#D4AF37]/15 shadow-[0_0_24px_rgba(212,175,55,0.14)]' : 'border-[rgba(212,175,55,0.18)] bg-white/5 hover:border-[rgba(245,215,110,0.34)] hover:bg-[rgba(212,175,55,0.07)]'}`}>
                  <span className="block text-white text-sm">{pkg.name}</span>
                  <span className="text-white/50 text-xs">{pkg.duration}</span>
                </button>
              ))}
            </div>
            {errors.packageSelection && <p className={errorClass}>{errorMessage('packageSelection')}</p>}
          </div>

          <div>
            <Label htmlFor="message" className="text-white">Special requests</Label>
            <Textarea id="message" {...register('message')} className="mt-2 bg-white/5 border-white/10 text-white min-h-28" placeholder="Tell us about your venue, theme, backdrop, branding, or must-have moments." />
            {errors.message && <p className={errorClass}>{errorMessage('message')}</p>}
          </div>

          {result && !result.ok && <p className="text-[#F5D76E] text-sm">{result.message}</p>}

          <Button disabled={isSubmitting} className="w-full opbe-btn-primary py-6 text-lg">
            {isSubmitting ? 'Sending request...' : 'Request My Free Quote'}
          </Button>
        </form>
      )}
    </Card>
  );
}
