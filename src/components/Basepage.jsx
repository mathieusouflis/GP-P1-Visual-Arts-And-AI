import { Link } from "react-router-dom";
import { Title } from "./typography";

const BasePage = ({ title, nav, blur = false, children }) => {
  const getPathFromLetter = (letter) => {
    return letter === "B"
      ? "benchmark"
      : letter === "R"
        ? "research"
        : letter === "T"
          ? "tutorial"
          : letter === "E"
            ? "exploration"
            : "";
  };

  return (
    <div className="w-screen h-screen flex flex-col px-4 overflow-hidden">
      <div
        className={`transition-all flex flex-row justify-between ${blur ? "blur-sm" : ""}`}
      >
        <Title>{title}</Title>
        <nav className="flex row gap-4">
          <Link path={getPathFromLetter(nav[0])} relative="path">
            <Title>{nav[0]}</Title>
          </Link>
          <Link path={getPathFromLetter(nav[1])} relative="path">
            <Title>{nav[1]}</Title>
          </Link>
          <Link path={getPathFromLetter(nav[2])} relative="path">
            <Title>{nav[2]}</Title>
          </Link>
        </nav>
      </div>
      <div className="h-full">{children}</div>
      <footer
        className={`flex w-full justify-end h-fit ${blur ? "blur-sm" : ""}`}
      >
        <Link to="/" relative="path">
          <Title>HOME</Title>
        </Link>
      </footer>
    </div>
  );
};

export default BasePage;
