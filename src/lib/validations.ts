import { z } from 'zod';

const phoneRegex = /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/;

export const leadSchema = z.object({
  fullName: z.string().min(2, 'Enter your full name.'),
  email: z.string().email('Enter a valid email address.'),
  phone: z.string().regex(phoneRegex, 'Enter a valid phone number.'),
  eventType: z.string().min(1, 'Select an event type.'),
  eventDate: z.string().refine((value) => {
    const date = new Date(value);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return !Number.isNaN(date.getTime()) && date >= today;
  }, 'Choose a future event date.'),
  eventStartTime: z.string().min(1, 'Select a start time.'),
  eventDuration: z.coerce.number().min(2, 'Minimum rental duration is 2 hours.').max(8, 'For events over 8 hours, request a custom quote.'),
  venue: z.string().min(2, 'Enter the venue or event location.'),
  guestCount: z.coerce.number().min(1, 'Enter the expected guest count.'),
  packageSelection: z.string().min(1, 'Select a package.'),
  addOns: z.array(z.string()).default([]),
  message: z.string().max(1000, 'Keep your message under 1000 characters.').optional(),
});

export type LeadFormValues = z.infer<typeof leadSchema>;
