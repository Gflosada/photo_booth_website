export default async function handler(request: any, response: any) {
  if (request.method !== 'POST') {
    return response.status(405).json({ error: 'Method not allowed' });
  }

  if (!process.env.SUPABASE_SERVICE_ROLE_KEY) {
    return response.status(501).json({ error: 'Supabase server credentials are not configured.' });
  }

  // TODO: Store contact submissions in Supabase and trigger notification email.
  return response.status(202).json({ ok: true, message: 'Contact API placeholder is ready for Supabase integration.' });
}
