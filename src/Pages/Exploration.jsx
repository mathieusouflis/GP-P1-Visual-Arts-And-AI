import { useState } from "react";

import BasePage from "../components/Basepage";
import { Clasical } from "../components/typography";

import image1 from "../assets/pictures/Image 1.png";
import image2 from "../assets/pictures/Image 2.png";
import image3 from "../assets/pictures/Image 3.png";
import image4 from "../assets/pictures/Image 4.png";
import image5 from "../assets/pictures/Image 5.png";

const Line = ({
  id,
  ia,
  category,
  prompt,
  hidden,
  className,
  active = false,
  clicable = true,
  onMouseEnter,
  onMouseLeave,
}) => {
  const textClassname = `h-fit transition-all duration-300 ${active ? "bg-black bg-opacity-50 text-white" : ""}`;

  return (
    <div
      className={`w-full opacity-1 transition-all duration-300 flex justify-between py-1  ${clicable ? "cursor-default" : ""}  ${className ? className : ""} ${hidden ? "opacity-0" : ""}`}
    >
      <span className="w-72 flex">
        <Clasical
          className={textClassname}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
        >
          {id}
        </Clasical>
      </span>
      <span className="w-80 flex">
        <Clasical
          className={textClassname}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
        >
          {category}
        </Clasical>
      </span>
      <span className="w-[40rem] flex">
        <Clasical
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
          className={`${textClassname}  ${active ? "" : "whitespace-nowrap overflow-hidden text-ellipsis"} `}
        >
          {prompt}
        </Clasical>
      </span>
      <span className="w-80 flex">
        <Clasical
          className={textClassname}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
        >
          {ia}
        </Clasical>
      </span>
    </div>
  );
};

const Exploration = () => {
  const [activeImage, setActiveImage] = useState(null);
  const [imageHidden, setImageHidden] = useState(true);

  const enterEvent = async (num) => {
    setActiveImage(num);
    setImageHidden(false);
  };

  const leaveEvent = async () => {
    setImageHidden(true);
    setActiveImage(null);
  };

  const imagesData = [
    {
      className: "font-bold",
      category: "Category",
      id: "#ID",
      ia: "IA",
      prompt: "Prompt",
      clicable: false,
      imageId: null,
    },
    {
      category: "Image Moins réaliste",
      id: "001",
      ia: "NightCafe",
      prompt:
        "Tony Stark wearing a black suit, sitting at his desk in his office. An Iron Man helmet is placed next to him on the desk. Behind him, a large blue holographic screen displays J.A.R.V.I.S., adding a technological and futuristic atmosphere. The scene is in a modern cartoonish style, with clean lines, vibrant colors, and detailed elements similar to modern cartoon",
      clicable: true,
      imageId: 1,
    },
    {
      category: "Image Un peu plus réaliste",
      id: "002",
      ia: "NightCafe",
      prompt:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet atque vero voluptates unde consequatur officia iure non sit saepe amet?",
      clicable: true,
      imageId: 2,
    },
    {
      category: "Image Réaliste Stylisée",
      id: "003",
      ia: "NightCafe",
      prompt:
        "An Iron Man helmet, damaged and partially disassembled, resting on a cluttered workbench in a workshop. Various mechanical parts, tools, wires, and electronic components are scattered around. The interior of the helmet is visible, showing exposed circuits and gears. The lighting is soft, casting shadows across the desk, creating a nighttime, meticulous work atmosphere. The style is detailed and realistic, with slightly saturated colors for an immersive effect",
      clicable: true,
      imageId: 3,
    },
    {
      category: "Image Réaliste",
      id: "004",
      ia: "KlingAI",
      prompt:
        "A realistic digital painting of Tony Stark, wearing a formal suit with a white shirt and tie, looking thoughtfully into the distance. His expression is serious and intense, with subtle details like a short beard and styled hair. The background is minimalist and blurred in gray tones, focusing attention on his facial features. The style is realistic with smooth shading and detailed textures, capturing a modern, polished look",
      clicable: true,
      imageId: 4,
    },
    {
      category: "Image Hyper Réaliste",
      id: "005",
      ia: "KlingAI",
      prompt:
        "A close-up of an Iron Man helmet placed on a table in a high-rise, industrial-style room with large windows in the background. The metallic helmet reflects the soft daylight filtering through the windows, casting realistic reflections and shadows. The cityscape outside is slightly blurred, adding depth to the scene. The helmet’s surface shows detailed engravings and a mix of red, gold, and silver tones, emphasizing a polished, futuristic design. The overall atmosphere is calm and atmospheric, with a touch of realism",
      clicable: true,
      imageId: 5,
    },
  ];

  return (
    <>
      <img
        src={
          activeImage === 1
            ? image1
            : activeImage === 2
              ? image2
              : activeImage === 3
                ? image3
                : activeImage === 4
                  ? image4
                  : activeImage === 5
                    ? image5
                    : ""
        }
        className={`-z-50 fixed right-0 bottom-0 w-screen h-screen object-cover transition-all duration-300 opacity-1 ${activeImage === null ? "hidden" : ""} ${imageHidden ? "opacity-0" : ""} `}
      />
      <BasePage title={"Exploration"} blur={activeImage !== null}>
        <div className="w-full flex flex-col mt-40">
          {imagesData.map((data, index) => (
            <Line
              key={index}
              className={
                data.imageId === null
                  ? data.className
                  : activeImage !== data.imageId && activeImage !== null
                    ? "opacity-0"
                    : ""
              }
              category={data.category}
              id={data.id}
              ia={data.ia}
              prompt={data.prompt}
              active={
                data.imageId === null
                  ? activeImage !== null
                  : activeImage === data.imageId
              }
              onMouseEnter={() =>
                data.imageId === null ? null : enterEvent(data.imageId)
              }
              onMouseLeave={() => (data.imageId === null ? null : leaveEvent())}
            />
          ))}
        </div>
      </BasePage>
    </>
  );
};

export default Exploration;
