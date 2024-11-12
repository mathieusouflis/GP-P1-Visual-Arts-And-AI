import { Link } from "react-router-dom";
import { Title } from "./typography";
import { generateAfterSlide } from "../utils/functions.js";
import classNames from "classnames";

const BasePage = ({ title, blur = false, scrollable = false, children }) => {
  return (
    <div
      className={classNames("w-full min-h-screen h-screen flex flex-col px-4", {
        "overflow-visible": scrollable,
        "overflow-hidden": !scrollable,
      })}
    >
      <div className={`flex flex-row justify-between `}>
        <Title className={`transition-all ${blur ? "blur-sm" : ""}`}>
          {title}
        </Title>
        <nav
          className={`flex flex-row gap-4 fixed top-0 right-4 transition-all ${blur ? "blur-sm" : ""}`}
        >
          <Link to="/" relative="path" className="overflow-hidden">
            <Title
              className={"after:content-['HOME']" + generateAfterSlide("HOME")}
            >
              HOME
            </Title>
          </Link>
        </nav>
      </div>
      <div className="block h-fit min-h-[calc(100vh-8rem)]">{children}</div>
    </div>
  );
};

export default BasePage;
