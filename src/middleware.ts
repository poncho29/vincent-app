import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const authToken = request.cookies.get("authToken")?.value;

  if (request.nextUrl.pathname === "/admin" && !authToken) {
    return NextResponse.redirect(new URL("/auth/login", request.url));
  }

  if (request.nextUrl.pathname === "/admin") {
    return NextResponse.redirect(new URL("/admin/mascotas", request.url));
  }

  if (request.nextUrl.pathname.startsWith("/admin") && !authToken) {
    const response = NextResponse.redirect(new URL("/auth/login", request.url));
    response.cookies.delete("authToken");
    return response;
  }

  if (authToken && request.nextUrl.pathname.startsWith("/auth/login")) {
    return NextResponse.redirect(new URL("/admin", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/auth/login", "/admin/:path*"]
}
