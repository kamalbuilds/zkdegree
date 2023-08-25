import { NextResponse } from "next/server"

console.log("hey kamal")
export async function GET() {
  return NextResponse.json({ "message": 'Hello, Next.js!' })
}