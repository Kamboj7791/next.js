import { anime } from "../../anime";
import Image from "next/image";
import imgarr from "../../anime";
import Modal from "@/components/modal";

export default function Id({ params: { id } }: { params: { id: string } }) {
  const photo: anime = imgarr.find((p) => p.id === id)!;
  return (
    <>
      <Modal>
        <div className="container">
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
            }}>
            <div>
              <Image alt={photo.name} src={photo.src} />
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}>
              <h1
                style={{
                  fontWeight: "bold",
                  color: "darkgreen",
                }}>
                {photo.name}
              </h1>
              <h2
                style={{
                  fontWeight: "200",
                  color: "darkblue",
                }}>
                {photo.creator}
              </h2>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
}
