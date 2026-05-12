import Stripe from 'stripe';

export default async function handler(request: any, response: any) {
  if (request.method !== 'POST') {
    return response.status(405).json({ error: 'Method not allowed' });
  }

  if (!process.env.STRIPE_SECRET_KEY) {
    return response.status(501).json({ error: 'Stripe is not configured.' });
  }

  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

  // TODO: Replace placeholder line items with configured Stripe Price IDs for deposits/packages.
  const session = await stripe.checkout.sessions.create({
    mode: 'payment',
    success_url: `${process.env.VITE_PUBLIC_SITE_URL || 'https://www.lumeabooth.com'}/thank-you`,
    cancel_url: `${process.env.VITE_PUBLIC_SITE_URL || 'https://www.lumeabooth.com'}/booking`,
    line_items: [
      {
        price_data: {
          currency: 'usd',
          product_data: { name: 'Lumea Booth Event Deposit' },
          unit_amount: 5000,
        },
        quantity: 1,
      },
    ],
  });

  return response.status(200).json({ url: session.url });
}
