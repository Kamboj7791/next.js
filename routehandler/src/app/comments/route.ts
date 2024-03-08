import { NextRequest } from "next/server";
import { Comments } from "./data";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const query = searchParams.get("query");
  const filterComments = query
    ? Comments.filter((comment) => comment.text.includes(query))
    : Comments;
  return Response.json(filterComments);
}
export async function POST(request: Request) {
  let comment = await request.json();
  const newComment = {
    id: Comments.length + 1,
    text: comment.text,
  };
  Comments.push(newComment);
  return new Response(JSON.stringify(newComment), {
    headers: {
      "Content-Type": "application/json",
    },
    status: 201,
  });
}
