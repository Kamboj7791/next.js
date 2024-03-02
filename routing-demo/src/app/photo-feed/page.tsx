import Link from "next/link";
import imgarr from "./anime";
import Image from "next/image";
import { wrap } from "module";
export default function AnimePage() {
  return (
    <>
      <main className="container mx-auto">
        <h1 style={{ textAlign: "center" }}>anime page</h1>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "space-around",
          }}>
          {imgarr.map(({ src, id, name }) => (
            <Link key={id} href={`/photo-feed /${id}`}>
              <Image
                alt={name}
                src={src}
                style={{ width: "400px", height: "200px" }}
              />
            </Link>
          ))}
        </div>
      </main>
    </>
  );
}
