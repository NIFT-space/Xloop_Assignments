// middleware.js
import jwt from 'jsonwebtoken';
import cookie from 'cookie';

export function middleware(req) {
  const { cookies } = req;
  const token = cookies.auth_token;

  // If there's no token, redirect to the login page
  if (!token) {
    return new Response(
      JSON.stringify({ message: 'Unauthorized' }),
      { status: 401, headers: { Location: '/login' } }
    );
  }

  try {
    // Verify the token using the secret key
    jwt.verify(token, process.env.JWT_SECRET_KEY);
    return; // Continue with the request if the token is valid
  } catch (error) {
    return new Response(
      JSON.stringify({ message: 'Invalid or expired token' }),
      { status: 401, headers: { Location: '/login' } }
    );
  }
}

// Apply this middleware to protect the Home page and any other pages you want
export const config = {
  matcher: ['/home', '/dashboard'], // Apply to these routes
};
