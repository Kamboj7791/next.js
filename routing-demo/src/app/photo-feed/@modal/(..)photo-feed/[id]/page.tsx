import imgarr, { anime } from "@/app/photo-feed/anime";
import Modal from "@/components/modal";
import Image from "next/image";
export default function PhotoModal({
  params: { id },
}: {
  params: { id: string };
}) {
  const photo: anime = imgarr.find((p) => p.id === id)!;
  return (
    <>
      <Modal>
        <Image
          alt={photo.name}
          src={photo.src}
          className="w-full object-cover aspect-square"
        />

        <div className="bg-white p-4">
          <h2 className="text-xl font-semibold">{photo.name}</h2>
          <h3>{photo.name}</h3>
          <h3>{photo.creator}</h3>
        </div>
      </Modal>
    </>
  );
}
