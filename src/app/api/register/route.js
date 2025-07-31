// app/api/register/route.js
import dbConnect from "@/Util/db";
import User from "@/model/User";
import bcrypt from 'bcryptjs';

export async function POST(req) {
  try {
    const { name, email, password } = await req.json();

    // Connect to MongoDB
    await dbConnect();

    // Check if the user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return new Response(
        JSON.stringify({ message: 'This email is already registered.' }),
        { status: 400 }
      );
    }

    // Hash the password before saving
    const hashedPassword = await bcrypt.hash(password, 12);

    // Create a new user
    const newUser = new User({ name, email, password: hashedPassword });
    await newUser.save();

    return new Response(
      JSON.stringify({ message: 'Registration successful! You can now log in.' }),
      { status: 201 }
    );
  } catch (error) {
    console.error('Error in register API:', error);
    return new Response(
      JSON.stringify({ message: 'Something went wrong. Please try again later.' }),
      { status: 500 }
    );
  }
}
