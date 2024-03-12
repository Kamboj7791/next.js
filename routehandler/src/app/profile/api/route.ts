import { type NextRequest } from "next/server";
import { headers, cookies } from "next/headers";

export async function GET(request: NextRequest) {
  const Header = new Headers(request.headers);
  const newHeader = headers();
  cookies().set("requestPerPage", "23");

  const theme = request.cookies.get("theme");
  console.log(Header.get("Authorization"));
  console.log(newHeader.get("Authorization"));
  console.log(theme);
  console.log(cookies().get("requestPerPage"));
  return new Response("<h1>api profile data</h1>", {
    headers: {
      "content-type": "text/html",
      "set-Cookie": "theme = dark",
    },
  });
}
