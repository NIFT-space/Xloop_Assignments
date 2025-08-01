// app/api/login/route.js
import dbConnect from "@/Util/db";
import User from "@/model/User";
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import cookie from 'cookie';

export async function POST(req) {
  try {
    const { email, password } = await req.json();

    // Connect to MongoDB
    await dbConnect();

    // Find the user by email
    const user = await User.findOne({ email });
    if (!user) {
      return new Response(
        JSON.stringify({ message: 'Invalid credentials. User not found.' }),
        { status: 400 }
      );
    }

    // Compare the password with the hashed password stored in the database
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return new Response(
        JSON.stringify({ message: 'Invalid credentials. Incorrect password.' }),
        { status: 400 }
      );
    }

    // Create JWT token with role information
    const token = jwt.sign(
      { id: user._id, email: user.email, role: user.role }, // Include role in token
      process.env.JWT_SECRET_KEY, // Add this in .env.local
      { expiresIn: '1h' } // Token expiry time
    );

    // Set the token as a cookie
    const serialized = cookie.serialize('auth_token1', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      maxAge: 60 * 60, // 1 hour
      path: '/',
    });

    // Return the response with the cookie set
    return new Response(
      JSON.stringify({ message: 'Login successful!' }),
      {
        status: 200,
        headers: {
          'Set-Cookie': serialized,
        },
      }
    );
  } catch (error) {
    console.error('Error in login API:', error);
    return new Response(
      JSON.stringify({ message: 'Something went wrong. Please try again later.' }),
      { status: 500 }
    );
  }
}
