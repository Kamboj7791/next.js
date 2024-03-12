import { type NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const Header = new Headers(request.headers);
  console.log(Header.get("Authorization"));
  return new Response("api profile data");
}
