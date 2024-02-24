"use client";
import { useRouter } from "next/navigation";
export default function OrderProduct() {
  const router = useRouter();
  const handleOrder = () => {
    console.log("your order is placed");
    router.push("/");
  };
  return (
    <>
      <h1>order product</h1>
      <button onClick={handleOrder}>place order</button>
    </>
  );
}
