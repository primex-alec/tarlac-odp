import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const token = req.cookies.get("authToken")?.value;
  const role = req.cookies.get("userRole")?.value;
  const url = req.nextUrl.clone();

  // Protect /dashboard → only admins
  if (url.pathname.startsWith("/dashboard")) {
    if (!token || role !== "admin") {
      url.pathname = "/contribute";
      return NextResponse.redirect(url);
    }
  }

  return NextResponse.next();
}

// Apply middleware to specific routes
export const config = {
  matcher: ["/dashboard/:path*", "/contribute/:path*"],
};
