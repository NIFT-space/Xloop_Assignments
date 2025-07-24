import { NextResponse } from "next/server";
import dbConnect from "@/Util/db";
import FormSubmission from "@/model/FormSubmit";

export async function GET() {
  await dbConnect();
  const items = await FormSubmission.find().sort({ createdAt: -1 }).lean();
  return NextResponse.json({ items });
}

export async function POST(req) {
  const { name, email, message } = await req.json();

  if (!name || !email || !message) {
    return NextResponse.json(
      { success: false, message: "All fields are required" },
      { status: 400 }
    );
  }

  await dbConnect();

  const newItem = await FormSubmission.create({ name, email, message });

  return NextResponse.json({
    success: true,
    message: "Feedback submitted successfully",
    item: newItem,
  });
}
