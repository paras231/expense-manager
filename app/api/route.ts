import { NextResponse,NextRequest } from "next/server";

export async function GET() {
  const res = "user";

  return NextResponse.json({ res });
}
