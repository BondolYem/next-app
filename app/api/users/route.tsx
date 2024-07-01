import { NextRequest, NextResponse } from "next/server";
import schema from "./schema";

// GET
export function GET(request: NextRequest) {
  return NextResponse.json([
    { id: 1, name: "Alice" },
    { id: 2, name: "Solida" },
    { id: 3, name: "Dara" },
  ]);
}

// POST
export async function POST(request: NextRequest) {
  const body = await request.json();
  const validation = schema.safeParse(body);
  if (!validation.success)
    return NextResponse.json(validation.error.errors, { status: 400 });
  return NextResponse.json({ id: 1, name: body.name }, { status: 201 });
}
