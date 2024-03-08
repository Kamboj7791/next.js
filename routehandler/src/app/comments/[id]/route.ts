import { Comments } from "../data";
import { redirect } from "next/navigation";

export async function GET(
  _request: Request,
  { params }: { params: { id: string } }
) {
  if (parseInt(params.id) > Comments.length) {
    redirect("/comments");
  }
  const comment = Comments.find(
    (comment) => comment.id === parseInt(params.id)
  );
  return Response.json(comment);
}
export async function PATCH(
  request: Request,
  { params }: { params: { id: string } }
) {
  const body = await request.json();
  const { text } = body;
  const index = Comments.findIndex(
    (comment) => comment.id === parseInt(params.id)
  );
  Comments[index].text = text;
  return Response.json(Comments[index]);
}

export async function DELETE(
  _request: Request,
  { params }: { params: { id: string } }
) {
  const index = Comments.findIndex(
    (comment) => comment.id === parseInt(params.id)
  );
  const deleteComment = Comments[index];
  Comments.splice(index, 1);
  return Response.json(deleteComment);
}
