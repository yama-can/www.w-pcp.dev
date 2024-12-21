import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {

	const response = NextResponse.next(request);

	const cacheType = [
		"font/ttf",
		"font/woff",
		"font/woff2",
		"image/png",
		"image/jpeg",
		"image/webp",
		"image/svg+xml",
		"image/gif",
		...(process.env.NODE_ENV == "production" ? ["application/javascript"] : []),
	]

	if (cacheType.includes(response.headers.get("Content-Type") || "type/unknown")) {

		response.headers.set("Cache-Control", "public, max-age=31536000");

	}

	return response;

}