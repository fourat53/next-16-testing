import { NextResponse } from "next/server";

export default function proxy(req: Request) {
  return NextResponse.next();
}

export const config = {
  matcher: ["/"],
};
