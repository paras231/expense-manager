import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const res = await request.json(); // it contains req.body;
  return NextResponse.json(res);
}
