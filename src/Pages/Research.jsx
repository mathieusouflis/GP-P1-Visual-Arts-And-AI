import { useState } from "react";
import BasePage from "../components/Basepage";
import DropHover from "../components/DropHover";
import DropHoverLine from "../components/DropHoverLine";
import { Clasical, Title } from "../components/typography";

const Research = () => {
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
      <Clasical className={"absolute left-1/2 top-10"}>
        Si le scroll marche pas, faut refresh
      </Clasical>
      <BasePage title="Research" scrollable={true} blur={selected !== ""}>
        <div className="flex flex-col gap-96">
          <div className="min-h-[calc(100vh-8rem)] w-full flex flex-col">a</div>
          <div className="h-screen flex flex-col w-full">
            <Title blur={selected !== ""} className={"text-3xl font-black"}>
              L'IA
            </Title>
            <div className="h-full w-full flex flex-col gap-32 justify-center">
              <DropHoverLine>
                <DropHover
                  title={"Définition"}
                  description={[
                    "L’intelligence artificielle (ou IA, est une branche de l’informatique qui regroupe des méthodes et des outils permettant de créer des machines capables de reproduire plusieurs tâches, dans l’optique de résoudre des problèmes aussi simples que complexes.",
                    "L’IA peut effectuer des tâches liées à l’intelligence humaine, telle que la compréhension de la langue, la vision, le raisonnement, la prise de décision ainsi que des problèmes plus complexes comme les codes.",
                  ]}
                  className={`transition-all  ${selected === "" || selected === "définition" ? "opacity-100" : "opacity-0"}`}
                  {...props}
                />
                <DropHover
                  title={"Fonctionnement"}
                  description={[
                    "Elle fonction grâce à des modèles d'apprentissages automatiques (machine learning), et de réseaux de neurones (deep learning).",
                    "Ces techniques permettent l’apprentissage en fonction de l’expérience, en analysant de grandes quantités de données pour reconnaitre les motifs et prendre des décisions.",
                  ]}
                  className={`transition-all  ${selected === "" || selected === "fonctionnement" ? "opacity-100" : "opacity-0"}`}
                  {...props}
                />
                <DropHover
                  title={"Types d'IA"}
                  description={[
                    "Les différentes IA se distinguent en fonction de leur complexité et de leurs capacités :",
                    "IA faible : Elle est utilisée pour des taches spécifiques définies (ex : siri, alexa, …).",
                    "L’IA forte : Elle se repose un modèle de réflexion humaine, en s’appuyant sun réseau neuronale, cherchant toujours la réponse la plus complète et précise pour répondre au besoin de l’utilisateur (chatgpt, copilot, …).",
                    "Super IA : Elle a avec des capacités augmentées, mais qui reste encore une hypothèse future.",
                  ]}
                  className={`transition-all  ${selected === "" || selected === "typesd'ia" ? "opacity-100" : "opacity-0"}`}
                  {...props}
                />
              </DropHoverLine>
              <DropHoverLine className="z-10">
                <DropHover
                  title={"Applications"}
                  description={[
                    "Il existe de nombreuses applications de utilisant l'IA, notamment :",
                    "Analyse et génération d’images : Création artistique, diagnostics médicaux via l’imagerie, reconnaissance faciale.",
                    "Traitement de la parole et du langage naturel : Assistants vocaux (Siri, Alexa), traduction automatique, chatbots.",
                    "Robotique : Automatisation industrielle, drones, robots ménagers.",
                    "Systèmes de recommandation : Suggestions personnalisées sur Netflix, Amazon, Spotify.",
                  ]}
                  className={`transition-all  ${selected === "" || selected === "applications" ? "opacity-100" : "opacity-0"}`}
                  {...props}
                />
                <DropHover
                  title={"Prompt Negatif"}
                  description={[
                    "Éléments à éviter : Spécifiez les éléments que vous ne voulez pas voir dans l'image. Ces exclusions permettent de clarifier ce qui pourrait distraire ou altérer votre vision.",
                  ]}
                  className={`transition-all  ${selected === "" || selected === "promptnegatif" ? "opacity-100" : "opacity-0"}`}
                  {...props}
                />
              </DropHoverLine>
            </div>
          </div>
          <div className="h-screen w-full flex justify-center items-center">
            <Title>Les Prompts</Title>
          </div>
          <div className="h-screen flex flex-col w-full">
            <Title blur={selected !== ""} className={"text-3xl font-black"}>
              Composition
            </Title>
            <div className="h-full w-full flex flex-col gap-32 justify-center">
              <DropHoverLine>
                <DropHover
                  title={"Description"}
                  description={[
                    "Sujet : Identifiez l'objet ou la scène centrale de l'image.",
                    "Détails visuels : Ajoutez des caractéristiques spécifiques du sujet pour enrichir l'image. Ce sont des descriptions qui aident à préciser les éléments uniques du sujet.",
                  ]}
                  className={`transition-all  ${selected === "" || selected === "description" ? "opacity-100" : "opacity-0"}`}
                  {...props}
                />
                <DropHover
                  title={"Contexte"}
                  description={[
                    "Environnement : Décrivez le décor ou l'arrière-plan dans lequel se déroule la scène. Cela place le sujet dans un contexte visuel clair.",
                    "Ambiance : Précisez l'atmosphère que vous souhaitez transmettre. Ce détail guide l'IA pour adapter les effets de lumière et les couleurs à l'ambiance voulue.",
                  ]}
                  className={`transition-all  ${selected === "" || selected === "contexte" ? "opacity-100" : "opacity-0"}`}
                  {...props}
                />
                <DropHover
                  title={"Styles"}
                  description={[
                    "Type d'art : Indiquez le style dans lequel l'image doit être rendue. Cela permet à l'IA de choisir les techniques visuelles appropriées.",
                    "Références d'artistes ou styles : Parfois, faire référence à un artiste ou à un style spécifique peut guider l'IA. Si vous recherchez une touche particulière, cela aide à façonner le résultat.",
                  ]}
                  className={`transition-all  ${selected === "" || selected === "styles" ? "opacity-100" : "opacity-0"}`}
                  {...props}
                />
              </DropHoverLine>
              <DropHoverLine className="z-10">
                <DropHover
                  title={"Détails"}
                  description={[
                    "Couleurs dominantes : Mentionnez les couleurs que vous souhaitez voir prédominer. Cela aide à harmoniser les couleurs de l'image.",
                    "Composition : Donnez des instructions sur l'agencement ou la mise en page de l'image. Ces indications orientent la manière dont l'IA dispose les éléments dans l'image.",
                  ]}
                  className={`transition-all  ${selected === "" || selected === "détails" ? "opacity-100" : "opacity-0"}`}
                  {...props}
                />
                <DropHover
                  title={"Prompt Negatif"}
                  description={[
                    "Éléments à éviter : Spécifiez les éléments que vous ne voulez pas voir dans l'image. Ces exclusions permettent de clarifier ce qui pourrait distraire ou altérer votre vision.",
                  ]}
                  className={`transition-all  ${selected === "" || selected === "promptnegatif" ? "opacity-100" : "opacity-0"}`}
                  {...props}
                />
              </DropHoverLine>
            </div>
          </div>
          <div className="h-screen flex flex-col w-full">
            <Title blur={selected !== ""} className={"text-3xl font-black"}>
              Compréhension
              <br />
              Du Prompt
            </Title>
            <div className="h-full w-full flex flex-col gap-32 justify-center">
              <DropHoverLine>
                <DropHover
                  title={"Tokenisation"}
                  description={[
                    "Décomposition : L'IA commence par diviser le texte du prompt en unités plus petites appelées tokens. Un token peut être un mot entier, une partie d'un mot ou un caractère, selon la façon dont le modèle est entraîné.",
                    "Conversion en vecteurs : Chaque token est converti en un vecteur numérique (représentation mathématique) qui permet au modèle de les traiter de manière compréhensible.",
                  ]}
                  className={`transition-all  ${selected === "" || selected === "tokenisation" ? "opacity-100" : "opacity-0"}`}
                  {...props}
                />
                <DropHover
                  title={"Représentation Contextuelle"}
                  description={[
                    "Mots dans le contexte : Contrairement aux anciennes approches qui traitaient chaque mot de façon isolée, les modèles modernes, comme ceux basés sur les transformers (par exemple, BERT ou GPT), tiennent compte du contexte global dans lequel les mots apparaissent.",
                    "Encodage contextuel : Le mécanisme d'attention du transformer permet à l'IA de pondérer l'importance de chaque mot par rapport aux autres dans le texte. Ainsi, elle comprend comment les mots interagissent entre eux et quelles parties du texte sont les plus importantes pour la signification globale.",
                  ]}
                  className={`transition-all  ${selected === "" || selected === "représentationcontextuelle" ? "opacity-100" : "opacity-0"}`}
                  {...props}
                />
                <DropHover
                  title={"Mécanisme d'Attention"}
                  description={[
                    "Focus sur les éléments pertinents : Les transformers utilisent un mécanisme appelé self-attention, qui permet au modèle de 'porter attention' à certaines parties du texte plus qu'à d'autres pour mieux comprendre le contexte.",
                    "Poids des connexions : Le modèle attribue des poids aux connexions entre les mots pour hiérarchiser l'information.",
                  ]}
                  className={`transition-all  ${selected === "" || selected === "mécanismed'attention" ? "opacity-100" : "opacity-0"}`}
                  {...props}
                />
              </DropHoverLine>
              <DropHoverLine className="z-10">
                <DropHover
                  title={"Apprentissage"}
                  description={[
                    "Entraînement préalable : L'IA a été préalablement entraînée sur des milliards de phrases et de textes tirés de diverses sources (livres, articles, sites web, etc.). Cela lui permet d'apprendre les structures grammaticales, les relations sémantiques et les nuances de la langue.",
                    "Compréhension implicite : Grâce à cet entraînement, l'IA développe une 'compréhension' statistique du langage, où elle peut prédire la probabilité de mots ou de phrases suivant un contexte donné.",
                  ]}
                  className={`transition-all  ${selected === "" || selected === "apprentissage" ? "opacity-100" : "opacity-0"}`}
                  {...props}
                />
                <DropHover
                  title={"Traitement & Résultats"}
                  description={[
                    "Analyse de la cohérence : Une fois le texte analysé, le modèle utilise ses connaissances pour interpréter la signification du prompt et produire une réponse ou une action en conséquence.",
                    "Adaptabilité : L'IA peut s'adapter aux variations de la langue, comprendre des phrases complexes, des métaphores et des nuances subtiles.",
                  ]}
                  className={`transition-all  ${selected === "" || selected === "traitement& résultats" ? "opacity-100" : "opacity-0"}`}
                  {...props}
                />
              </DropHoverLine>
            </div>
          </div>
        </div>
      </BasePage>
    </>
  );
};

export default Research;
