export default function ReviewDetails({params}:{
  params:{
    productId:string,
    reviewsId:string
  }
}){
  return <>
  <h1> review {params.reviewsId} for product {params.productId}</h1>
  </>
}