"use client";
import { notFound } from "next/navigation";
function getRandomFirst(count: number) {
  return Math.floor(Math.random() * count);
}
export default function ReviewDetails({
  params,
}: {
  params: {
    productId: string;
    reviewsId: string;
  };
}) {
  if (parseInt(params.reviewsId) > 1000) {
    notFound();
  }
  const random = getRandomFirst(2);
  if (random === 1) {
    throw new Error("error loading problem");
  }
  return (
    <>
      <h1>
        {" "}
        review {params.reviewsId} for product {params.productId}
      </h1>
    </>
  );
}
