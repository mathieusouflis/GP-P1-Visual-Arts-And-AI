import { Link } from "react-router-dom";
import { Title } from "../components/typography";

const Homepage = () => {
  return (
    <>
      <div className="w-screen h-screen flex items-center justify-center">
        <div className="flex flex-col items-start">
          <Link to="/benchmark" relative="path">
            <Title className="ml-20">Benchmark</Title>
          </Link>
          <Link to="/research" relative="path">
            <Title>Research</Title>
          </Link>
          <Link to="/tutorial" relative="path">
            <Title>Tutorial</Title>
          </Link>
          <Link to="/exploration" relative="path">
            <Title className="ml-20">Exploration</Title>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Homepage;
