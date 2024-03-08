import { Comments } from "../data";

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const comment = Comments.find(
    (comment) => comment.id === parseInt(params.id)
  );
  return Response.json(comment);
}
