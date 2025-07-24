import { NextResponse } from "next/server";

const items = [];

export function GET() {
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

  const newItem = {
    id: items.length + 1,
    name,
    email,
    message,
    timestamp: new Date().toISOString(),
  };

  items.push(newItem);

  return NextResponse.json({
    success: true,
    message: "Feedback submitted successfully",
    item: newItem,
  });
}
