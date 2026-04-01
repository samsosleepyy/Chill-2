import { NextResponse } from "next/server";

/**
 * Keep sensitive values on the server side only.
 * Put real secret data in environment variables, not in client code.
 */
export async function GET() {
  const response = {
    features: {
      enableLockSystem: true,
      enableObfuscation: true,
      enableHairPhysics: true,
    },
    // Example: read from env to avoid exposing raw secret logic in browser source.
    buildSaltExists: Boolean(process.env.BUILD_SALT),
  };

  return NextResponse.json(response, {
    headers: {
      "Cache-Control": "no-store",
      "X-Content-Type-Options": "nosniff",
    },
  });
}
