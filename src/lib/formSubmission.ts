import { supabase, isSupabaseConfigured } from './supabase';
import { type LeadFormValues } from './validations';

export type SubmissionResult = {
  ok: boolean;
  message: string;
  demoMode?: boolean;
};

async function insertLead(table: 'booking_requests' | 'quote_requests' | 'contact_messages', values: LeadFormValues): Promise<SubmissionResult> {
  if (!isSupabaseConfigured || !supabase) {
    return {
      ok: true,
      demoMode: true,
      message: 'Request captured locally. Connect Supabase environment variables to submit leads in production.',
    };
  }

  const { error } = await supabase.from(table).insert({
    full_name: values.fullName,
    email: values.email,
    phone: values.phone,
    event_type: values.eventType,
    event_date: values.eventDate,
    event_start_time: values.eventStartTime,
    event_duration: values.eventDuration,
    venue: values.venue,
    guest_count: values.guestCount,
    package_id: values.packageSelection,
    add_ons: values.addOns,
    message: values.message,
    status: 'new',
  });

  if (error) {
    return { ok: false, message: 'We could not submit your request. Please call or email ORLANDO PHOTO BOOTH EVENTS directly.' };
  }

  return { ok: true, message: 'Your request was sent. ORLANDO PHOTO BOOTH EVENTS will follow up with availability and pricing.' };
}

export const submitBooking = (values: LeadFormValues) => insertLead('booking_requests', values);
export const submitQuote = (values: LeadFormValues) => insertLead('quote_requests', values);

export async function sendEmailConfirmation() {
  // TODO: Implement with Resend in a Vercel serverless function using RESEND_API_KEY.
  return { ok: false, message: 'Email provider is not configured yet.' };
}

export async function sendSMSConfirmation() {
  // TODO: Implement with Twilio in a serverless function using private Twilio credentials.
  return { ok: false, message: 'SMS provider is not configured yet.' };
}

export async function createStripeCheckoutSession() {
  // TODO: Call /api/create-checkout-session after Stripe products/prices are configured.
  return { ok: false, message: 'Stripe Checkout is not configured yet.' };
}

export async function trackLeadConversion() {
  return { ok: true };
}
