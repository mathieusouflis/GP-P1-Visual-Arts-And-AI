import { useEffect, useState } from "react";
import BasePage from "../components/Basepage";
import modelVideo from "../assets/videos/rain.mp4";
import promptVideo from "../assets/videos/rain2.mp4";
import styleVideo from "../assets/videos/rain.mp4";
import filtersVideo from "../assets/videos/rain2.mp4";
import dispositionVideo from "../assets/videos/rain.mp4";
import remixVideo from "../assets/videos/rain2.mp4";
import upscaleVideo from "../assets/videos/rain.mp4";
import modelAudio from "../assets/audios/modelAudio.mp3";
import promptAudio from "../assets/audios/promptAudio.mp3";
import styleAudio from "../assets/audios/styleAudio.mp3";
import filtersAudio from "../assets/audios/filtersAudio.mp3";
import dispositionAudio from "../assets/audios/dispositionAudio.mp3";
import upscaleAudio from "../assets/audios/upscaleAudio.mp3";

import { Clasical } from "../components/typography";
const sleep = (miliseconds) =>
  new Promise((resolve) => setTimeout(resolve, miliseconds));

const Step = ({ name, close = false }) => {
  return (
    <div
      className={`bg-black h-6 group ${close ? "max-w-6" : "max-w-full px-2"} transition-all rounded-full flex items-center justify-center overflow-hidden`}
    >
      <Clasical
        className={`text-white font-bold transition-all transform ${close ? "scale-x-0 opacity-0" : ""}`}
      >
        {name}
      </Clasical>
    </div>
  );
};

const Tutorial = () => {
  const [step, setStep] = useState(0);
  const [videoHidden, setVideoHidden] = useState(false);

  const text = [
    [
      "Lorem ipsum dolor sit amet.",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam quas pariatur et vero. Modi veniam fugiat, dolores in unde nemo.",
    ],
    [
      "Lorem ipsum dolor sit amet.",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam quas pariatur et vero. Modi veniam fugiat, dolores in unde nemo.",
    ],
    [
      "Lorem ipsum dolor sit amet.",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam quas pariatur et vero. Modi veniam fugiat, dolores in unde nemo.",
    ],
    [
      "Lorem ipsum dolor sit amet.",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam quas pariatur et vero. Modi veniam fugiat, dolores in unde nemo.",
    ],
  ];

  const modelAudioo = new Audio(modelAudio);
  const promptAudioo = new Audio(promptAudio);
  const styleAudioo = new Audio(styleAudio);
  const filtersAudioo = new Audio(filtersAudio);
  const dispositionAudioo = new Audio(dispositionAudio);
  const upscaleAudioo = new Audio(upscaleAudio);

  useEffect(() => {
    const audioMap = {
      0: modelAudioo,
      1: promptAudioo,
      2: styleAudioo,
      3: filtersAudioo,
      4: dispositionAudioo,
      5: modelAudioo,
      6: upscaleAudioo,
    };

    const audio = audioMap[step];

    Object.values(audioMap).forEach((aud) => {
      if (aud !== audio) {
        aud.pause();
        aud.currentTime = 0;
      }
    });

    if (audio) {
      audio.play();
    }

    return () => {
      if (audio) {
        audio.pause();
        audio.currentTime = 0;
      }
    };
  }, [step]);

  return (
    <>
      <video
        autoPlay
        muted
        loop
        id="myVideo"
        src={
          step === 0
            ? modelVideo
            : step === 1
              ? promptVideo
              : step === 2
                ? styleVideo
                : step === 3
                  ? filtersVideo
                  : step === 4
                    ? dispositionVideo
                    : step === 5
                      ? remixVideo
                      : step === 6
                        ? upscaleVideo
                        : ""
        }
        className={`-z-50 fixed ring-0 bottom-0 w-screen h-screen object-cover transition-all duration-300 opacity-1 ${videoHidden ? "opacity-0" : ""} `}
      />
      <BasePage title={"Tutorial"} blur={false}>
        <div className="flex flex-row w-full h-full">
          <div
            className="flex h-full w-full"
            onClick={async () => {
              setVideoHidden(true);
              await sleep(300);
              setStep((old) => (old === 6 ? 0 : (old += 1)));
              setVideoHidden(false);
            }}
          >
            <div
              className={`flex flex-col gap-2 self-end bg-black bg-opacity-45 p-1 max-w-80 transition-all opacity-1 mb-4 ${videoHidden ? "opacity-0" : ""}`}
            >
              {text[step]?.map((value, index) => (
                <>
                  <Clasical key={index} className="text-white">
                    {value}
                  </Clasical>
                </>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-10 h-full justify-center items-end">
            <Step name="Modèle" close={step !== 0} />
            <Step name="Prompt" close={step !== 1} />
            <Step name="Style" close={step !== 2} />
            <Step name="Filtres" close={step !== 3} />
            <Step name="Disposition" close={step !== 4} />
            <Step name="Remix" close={step !== 5} />
            <Step name="Upscale" close={step !== 6} />
          </div>
        </div>
      </BasePage>
    </>
  );
};

export default Tutorial;
