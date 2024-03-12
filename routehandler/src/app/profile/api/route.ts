import { type NextRequest } from "next/server";
import { headers } from "next/headers";

export async function GET(request: NextRequest) {
  const Header = new Headers(request.headers);
  const newHeader = headers();
  console.log(Header.get("Authorization"));
  console.log(newHeader.get("Authorization"));
  return new Response("<h1>api profile data</h1>", {
    headers: {
      "content-type": "text/html",
    },
  });
}
