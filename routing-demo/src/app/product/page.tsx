import Link from "next/link";

export default function ProductList() {
  const productId = 100;
  return (
    <>
      <Link href="./">home</Link>
      <h1> Product List</h1>
      <h1>
        <Link href="./product/1">product 1</Link>
      </h1>
      <h1>
        <Link href="./product/2">product 2</Link>
      </h1>
      <h1>
        <Link href="./product/3" replace>
          product 3
        </Link>
      </h1>
      <h1>
        <Link href="./product/4">product 4</Link>
      </h1>
      <h1>
        <Link href={`./product/${productId}`}>product {productId}</Link>
      </h1>
    </>
  );
}
