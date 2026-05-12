export async function startCheckout(packageId: string) {
  const response = await fetch('/api/create-checkout-session', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ packageId }),
  });

  if (!response.ok) {
    throw new Error('Stripe Checkout is not configured yet.');
  }

  return response.json() as Promise<{ url?: string }>;
}
