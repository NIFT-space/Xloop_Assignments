import { NextResponse } from "next/server";

const items = [{
    id:1 , name :"hijack"
}];

export function GET(){
    return NextResponse.json({items});
}

export async function POST(req) {
  const item = await req.json();

  if (!item.name) {
    return NextResponse.json({ success: false, message: "Name is required" });
  }

  // Assign a new ID and push the item
  item.id = items.length + 1;
  items.push(item);

  return NextResponse.json({ success: true, message: "Saved successfully", item });
}