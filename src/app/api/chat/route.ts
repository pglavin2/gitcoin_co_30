import { NextResponse } from "next/server";

export async function POST() {
  return NextResponse.json(
    { error: "Chat not available in preview" },
    { status: 501 }
  );
}
