import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export function middleware(request: NextRequest) {
  const hostname = request.headers.get("host") || ""
  const pathname = request.nextUrl.pathname

  // 跳过静态文件和API路由
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.startsWith("/static") ||
    pathname.includes(".") ||
    pathname === "/favicon.ico"
  ) {
    return NextResponse.next()
  }

  // 检查是否是中文子域名
  if (hostname.includes("cn.etrikefox.com")) {
    // 如果已经有 /zh 前缀，直接继续
    if (pathname.startsWith("/zh")) {
      return NextResponse.next()
    }
    // 如果没有 /zh 前缀，重写到中文路径
    const url = request.nextUrl.clone()
    url.pathname = `/zh${pathname}`
    return NextResponse.rewrite(url)
  }

  // 对于主域名 (etrikefox.com)，不做任何重写
  // 直接返回原始请求
  return NextResponse.next()
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public files (images, etc.)
     */
    "/((?!api|_next/static|_next/image|favicon.ico|.*\\.).*)",
  ],
}
