import { Metadata } from "next";
export const generateMetadata = async ({
  params,
}: props): Promise<Metadata> => {
  const title = await new Promise((resolve) => {
    setTimeout(() => {
      resolve(`iphone ${params.productId}`);
    }, 100);
  });
  return {
    title: `product ${title}`,
  };
};
type props = {
  params: {
    productId: string;
  };
};

export default function ProductDetails({ params }: props) {
  return (
    <>
      <h1>product details about {params.productId}</h1>
    </>
  );
}
