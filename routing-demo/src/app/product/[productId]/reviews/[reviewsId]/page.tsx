import { notFound } from "next/navigation"
export default function ReviewDetails({ params }: {
  params: {
    productId: string;
    reviewsId: string;
  }
}) {
  if(parseInt(params.reviewsId)>1000){
    notFound();
  }
  return <>
  
    <h1> review {params.reviewsId} for product {params.productId}</h1>
  </>
}