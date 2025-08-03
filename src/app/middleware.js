import jwt from 'jsonwebtoken';
import cookie from 'cookie';

export function middleware(req) {
  const cookies = cookie.parse(req.headers.get('cookie') || ''); // Parse cookies from the request
  const token = cookies.auth_token;

  // If there's no token, redirect to the login page
  if (!token) {
    return Response.redirect(new URL('/login', req.url), 302); // Use Response.redirect for redirection
  }

  try {
    // Verify the token using the secret key
    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);

    // Check if the user has an 'admin' role
    if (decoded.role !== 'admin') {
      return Response.redirect(new URL('/login', req.url), 302); // Redirect to login if not admin
    }

    return; // Continue with the request if the token is valid and user is admin
  } catch (error) {
    console.error('Invalid token or expired token', error);
    return Response.redirect(new URL('/login', req.url), 302); // Redirect to login if token is invalid
  }
}

// Protect the admin route
export const config = {
  matcher: ['/admin', '/admin/**'], // Protect the /admin route and its sub-routes
};
