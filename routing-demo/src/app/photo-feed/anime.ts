import { StaticImageData } from "next/image";
import img1 from "./photos/img1.jpg";
import img2 from "./photos/img2.jpg";
import img3 from "./photos/img3.jpg";
import img4 from "./photos/img4.jpg";
import img5 from "./photos/img5.jpg";
import img6 from "./photos/img6.jpg";
import img7 from "./photos/img7.jpg";

export type anime = {
  id: string;
  name: string;
  src: StaticImageData;
  creator: string;
};
const imgarr: anime[] = [
  {
    id: "1",
    name: "abc",
    src: img1,
    creator: "abc",
  },
  { id: "2", name: "abc", src: img2, creator: "abc" },
  { id: "3", src: img3, name: "abc", creator: "abc" },
  { id: "4", src: img4, name: "abc", creator: "abc" },
  { id: "5", src: img5, name: "abc", creator: "abc" },
  { id: "6", src: img6, name: "abc", creator: "abc" },
  { id: "7", src: img7, name: "abc", creator: "abc" },
];
export default imgarr;
