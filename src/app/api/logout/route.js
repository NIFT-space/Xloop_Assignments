import cookie from 'cookie';

export async function GET(req) {
  // Clear the auth_token cookie by setting its expiry to the past
  const serialized = cookie.serialize('auth_token', '', {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'strict',
    expires: new Date(0), // Expire the cookie immediately
    path: '/',
  });

  return new Response(
    JSON.stringify({ message: 'Logged out successfully' }),
    {
      status: 200,
      headers: {
        'Set-Cookie': serialized,
      },
    }
  );
}
