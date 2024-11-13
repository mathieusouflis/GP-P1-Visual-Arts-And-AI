import { useState } from "react";

import BasePage from "../components/Basepage";
import DropHover from "../components/DropHover";
import DropHoverLine from "../components/DropHoverLine";

const Benchmark = () => {
  const [selected, setSelected] = useState("");

  const mouseEnterEvent = (e) => {
    console.log(e.target.innerText.toLowerCase().replace(" ", ""));
    setSelected(e.target.innerText.toLowerCase().replace(" ", ""));
  };

  const props = {
    mouseEnterEvent: mouseEnterEvent,
    mouseLeaveEvent: () => setSelected(""),
  };

  return (
    <>
      <BasePage title={"Benchmark"} blur={selected !== "" ? true : false}>
        <div className="h-full w-full flex flex-col gap-32 justify-center">
          <DropHoverLine>
            <DropHover
              title="Night Cafe"
              description={[
                "Capable de générer des images peu comme très stylisés.",
                "Sa grande variété de modèle et de différents paramètres, permettent d’ajuster au mieux le résultat de la génération d’image pour pouvoir répondre aux attentes.",
                " De plus, son respect minutieux du prompt ainsi que sa facilité d’utilisation en font un très bon site de génération d’images.",
                "Cependant, malgré une certaine gratuité quotidienne, un apport financier est nécessaire pour l’utilisation complète du site.",
              ]}
              className={`transition-all  ${selected === "" || selected === "nightcafe" ? "opacity-100" : "opacity-0"}`}
              {...props}
            />
            <DropHover
              title="Kling AI"
              description={[
                "En termes de réalisme, cette IA est surement une des plus performantes ; ses images sont quasiment photographiques, les détails et précisions sont au rendez-vous !",
                " Elle respecte le prompt, voire au-delà des attentes.",
                "Elle est aussi capable d’utiliser le image to image pour générer ses images.",
                " Malheureusement, l'IA a du mal dans la génération d'images dans un style peu realiste, plutôt enfantin ou cartoon ( elle génére des images beaucoup trop réaliste malgré la demande ), et comme beaucoup de très bon site, les performances gratuites sont limitées.",
              ]}
              className={`transition-all  ${selected === "" || selected === "klingai" ? "opacity-100" : "opacity-0"}`}
              {...props}
            />
            <DropHover
              title="ArtBreeder"
              description={[
                "IA rapide et efficace ; la génération d’images peut se faire rapidement grâce à de petits prompts assez simple à respecter, sans le besoin de détailler énormément.",
                "Toutefois, cela peut nuire à la précision de certaines images.",
                "De plus ce manque de précision engendre souvent une création excessive d’images similaires.",
                "Système de crédits pour utilisation gratuite limité.",
              ]}
              className={`transition-all  ${selected === "" || selected === "artbreeder" ? "opacity-100" : "opacity-0"}`}
              {...props}
            />
          </DropHoverLine>
          <DropHoverLine>
            <DropHover
              title="Runway"
              description={[
                "Cette ia reste bonne dans l’ensemble, mais de notre expérience, il ne fait clairement pas partie des têtes d’affiche.",
                "En effet la prise en main reste assez compliquée, mais peut avoir un bon potentiel avec une approche sérieuse travaillée.",
                "Le gros point faible réside dans le fait que la génération se fait uniquement grâce au système du image to image, sans pouvoir générer uniquement grâce à un prompt.",
                "Enfin son coût ne l’avantage dans le rapport qualité prix.",
              ]}
              className={`z-10 transition-all  ${selected === "" || selected === "runway" ? "opacity-100" : "opacity-0"}`}
              {...props}
            />
            <DropHover
              title="StarryIA"
              description={[
                "Une IA avec du potentiel, car son fonctionnement est simple.",
                "Sa force principale réside dans sa qualité de génération grâce au image to image.",
                "Elle est capable d’améliorer les images grâce à des apports qualitatifs (par exemple étendre une image).",
                "Cependant sans l’apport d’une autre image, la précision de sa génération reste floue et éloignées des attentes.",
                "Ajouter à une limite de création niveau prix, elle a du mal à faire face à ses concurrentes.",
              ]}
              className={`z-10 transition-all  ${selected === "" || selected === "starryia" ? "opacity-100" : "opacity-0"}`}
              {...props}
            />
          </DropHoverLine>
        </div>
      </BasePage>
    </>
  );
};

export default Benchmark;
