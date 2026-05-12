export default async function handler(request: any, response: any) {
  if (request.method !== 'POST') {
    return response.status(405).json({ error: 'Method not allowed' });
  }

  if (!process.env.SUPABASE_SERVICE_ROLE_KEY) {
    return response.status(501).json({ error: 'Supabase server credentials are not configured.' });
  }

  // TODO: Insert booking request with the Supabase service role key after production table policies are created.
  return response.status(202).json({ ok: true, message: 'Booking API placeholder is ready for Supabase integration.' });
}
