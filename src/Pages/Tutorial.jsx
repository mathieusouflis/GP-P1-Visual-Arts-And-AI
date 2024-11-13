import { useEffect, useState } from "react";

import BasePage from "../components/Basepage";

import modelVideo from "../assets/tutorial/MODEL.mp4";
import promptVideo from "../assets/tutorial/PROMPT.mp4";
import styleVideo from "../assets/tutorial/STYLES.mp4";
import settingsVideo from "../assets/tutorial/SETTINGS.mp4";
import createVideo from "../assets/tutorial/CREATE.mp4";
import upscaleVideo from "../assets/tutorial/UPSCALE.mp4";

import modelAudio from "../assets/sounds/MODEL.mp3";
import promptAudio from "../assets/sounds/PROMPT.mp3";
import styleAudio from "../assets/sounds/STYLES.mp3";
import settingsAudio from "../assets/sounds/SETTINGS.mp3";
import createAudio from "../assets/sounds/CREATE.mp3";
import upscaleAudio from "../assets/sounds/UPSCALE.mp3";

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
      "Premièrement, nous allons choisir un modèle qui sera la base de notre inspiration, inspirera son univers.",
      "Une fois fait, validez votre choix en appuyant sur le bouton marqué 'done'.",
    ],
    [
      "Une fois le modèle sélectionné, il faudra écrire votre prompt sur la barre dédiée.",
      "Votre prompt doit, dans l'idéal, contenir des détails pour que l'image soit plus précise.",
    ],
    [
      "Vous pouvez sélectionner un style qui apportera des précisions sur le style de l'image générée.",
      "N'oubliez pas d'appuyer sur 'done' pour valider votre sélection.",
    ],
    [
      "Vous pourrez aussi régler certains paramètres tels que le nombre d'images générées, la durée de la génération ainsi que le format de l'image.",
    ],
    ["Appuyez sur 'CREATE' pour générer l'image voulue ! 🎉"],
    [
      "L'image to image est une manière de générer des images à l'aide d'une création de référence et d'un prompt (optionnel mais conseillé) sur lesquels s'appuyer.",
      "Vous pouvez aussi upscaler une image afin d'améliorer sa résolution et/ou changer le format de celle-ci.",
    ],
  ];

  const modelAudioo = new Audio(modelAudio);
  const promptAudioo = new Audio(promptAudio);
  const styleAudioo = new Audio(styleAudio);
  const settingsAudioo = new Audio(settingsAudio);
  const createAudioo = new Audio(createAudio);
  const upscaleAudioo = new Audio(upscaleAudio);

  useEffect(() => {
    const audioMap = {
      0: modelAudioo,
      1: promptAudioo,
      2: styleAudioo,
      3: settingsAudioo,
      4: createAudioo,
      5: upscaleAudioo,
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
      <div className="-z-50 fixed w-screen h-screen flex items-center justify-center">
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
                    ? settingsVideo
                    : step === 4
                      ? createVideo
                      : step === 5
                        ? upscaleVideo
                        : ""
          }
          className={` w-[64vw] h-[64vh] rounded-md object-cover transition-all duration-300 opacity-1 ${videoHidden ? "opacity-0" : ""} `}
        />
      </div>
      <BasePage title={"Tutorial"} blur={false}>
        <div className="flex flex-row w-full h-full">
          <div
            className="flex h-full w-full"
            onClick={async () => {
              setVideoHidden(true);
              await sleep(300);
              setStep((old) => (old === 5 ? 0 : (old += 1)));
              setVideoHidden(false);
            }}
          >
            <div
              className={`flex flex-col gap-2 self-end bg-black bg-opacity-55 p-1 max-w-80 transition-all opacity-1 mb-4 ${videoHidden ? "opacity-0" : ""}`}
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
            <Step name="Settings" close={step !== 3} />
            <Step name="Create" close={step !== 4} />
            <Step name="Upscale" close={step !== 5} />
          </div>
        </div>
      </BasePage>
    </>
  );
};

export default Tutorial;
