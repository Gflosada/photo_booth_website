export default async function handler(request: any, response: any) {
  if (request.method !== 'POST') {
    return response.status(405).json({ error: 'Method not allowed' });
  }

  if (!process.env.RESEND_API_KEY) {
    return response.status(501).json({ error: 'Email provider is not configured.' });
  }

  // TODO: Send booking/quote notifications with Resend after email templates are approved.
  return response.status(202).json({ ok: true, message: 'Email API placeholder is ready for Resend integration.' });
}
