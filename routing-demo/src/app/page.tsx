import Link from "next/link";

export default function home() {
  return (
    <>
      <h1>welcome home page!</h1>
      <Link href="./blogs">blog</Link>
      <Link href="./product">products</Link>
    </>
  );
}
