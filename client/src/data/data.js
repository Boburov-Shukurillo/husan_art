import dataimg1 from "../data/img/img (1).jpg";
import dataimg2 from "../data/img/img (2).jpg";
import dataimg3 from "../data/img/img (3).jpg";
import dataimg4 from "../data/img/img (4).jpg";

export const project = [
  {
    id: 0,
    art_Name: "Van Gog in Tashkent",
    imgUrl: dataimg1,
    description: "Made on plain paper and watercolor",
    time: "2023-13-04",
    rate: 5,
  },
  {
    id: 1,
    art_Name: "Siren",
    imgUrl: dataimg2,
    description: `Painted in acrylic in the style of Monet and Van Gogh`,
    time: "2024-03-11",
    rate: 5,
  },
  {
    id: 2,
    art_Name: "Van Gog and Kitten Prince",
    description: "Made on plain paper and watercolor",
    imgUrl: dataimg3,
    time: "2022-23-04",
    rate: 5,
  },
  {
    id: 3,
    art_Name: "Night",
    imgUrl: dataimg4,
    time: "2021-21-01",
    description: "Made on plain paper and watercolor",
    rate: 5,
  },
];

export const imgurl = "../assets/img.jpg";
import img from "../assets/img.jpg";

export const homeSlide = [
  {
    id: 0,
    img: img,
    img_2: dataimg2,
  },
  {
    id: 2,
    img: dataimg2,
    img_2: dataimg1,
  },
  {
    id: 3,
    img: img,
    img_2: dataimg3,
  },
  {
    id: 4,
    img: img,
    img_2: dataimg2,
  },
  {
    id: 5,
    img: img,
    img_2: dataimg3,
  },
  {
    id: 6,
    img: img,
    img_2: dataimg2,
  },
];

export const scrollFromTo = (e) => {
  window.scrollTo({ top: parseInt(e), behavior: "smooth", left: 0 });
};
