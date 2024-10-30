import { ClasicalBold, Clasical } from "./typography";

const Element = ({ type, border, left, children }) => {
  const style = type === "header" ? "py-2" : "py-2.5";
  return (
    <>
      <div
        className={`flex items-center min-w-28  px-2.5 ${style} ${left ? "justify-start" : "justify-center"} ${border === "false" ? "" : "border-b border-black"}`}
      >
        {children}
      </div>
    </>
  );
};

const Line = ({ colored, children }) => {
  return (
    <>
      <div className={`flex flex-col ${colored ? "bg-slate-100" : ""}`}>
        {children}
      </div>
    </>
  );
};

export const Benchmark = () => {
  return (
    <>
      <div className="flex flex-row h-fit">
        <Line colored left="true">
          <Element left type="header">
            <ClasicalBold>Feature</ClasicalBold>
          </Element>
          <Element left>
            <Clasical>Accessibilité</Clasical>
          </Element>
          <Element left>
            <Clasical>Précision</Clasical>
          </Element>
          <Element left>
            <Clasical>Gratuit</Clasical>
          </Element>
          <Element left border="false">
            <Clasical>Capacité à respecter le prompt</Clasical>
          </Element>
        </Line>
        <Line>
          <Element type="header">
            <ClasicalBold>NightCoffee</ClasicalBold>
          </Element>
          <Element>
            <Clasical>Icon</Clasical>
          </Element>
          <Element>
            <Clasical>Icon</Clasical>
          </Element>
          <Element>
            <Clasical>Icon</Clasical>
          </Element>
          <Element border="false">
            <Clasical>Icon</Clasical>
          </Element>
        </Line>
        <Line colored>
          <Element type="header">
            <ClasicalBold>DeepAI</ClasicalBold>
          </Element>
          <Element>
            <Clasical>Icon</Clasical>
          </Element>
          <Element>
            <Clasical>Icon</Clasical>
          </Element>
          <Element>
            <Clasical>Icon</Clasical>
          </Element>
          <Element border="false">
            <Clasical>Icon</Clasical>
          </Element>
        </Line>
        <Line>
          <Element type="header">
            <ClasicalBold>Craiyon</ClasicalBold>
          </Element>
          <Element>
            <Clasical>Icon</Clasical>
          </Element>
          <Element>
            <Clasical>Icon</Clasical>
          </Element>
          <Element>
            <Clasical>Icon</Clasical>
          </Element>
          <Element border="false">
            <Clasical>Icon</Clasical>
          </Element>
        </Line>
        <Line colored>
          <Element type="header">
            <ClasicalBold>RunwayML</ClasicalBold>
          </Element>
          <Element>
            <Clasical>Icon</Clasical>
          </Element>
          <Element>
            <Clasical>Icon</Clasical>
          </Element>
          <Element>
            <Clasical>Icon</Clasical>
          </Element>
          <Element border="false">
            <Clasical>Icon</Clasical>
          </Element>
        </Line>
        <Line>
          <Element type="header">
            <ClasicalBold>StarryAI</ClasicalBold>
          </Element>
          <Element>
            <Clasical>Icon</Clasical>
          </Element>
          <Element>
            <Clasical>Icon</Clasical>
          </Element>
          <Element>
            <Clasical>Icon</Clasical>
          </Element>
          <Element border="false">
            <Clasical>Icon</Clasical>
          </Element>
        </Line>
      </div>
    </>
  );
};
