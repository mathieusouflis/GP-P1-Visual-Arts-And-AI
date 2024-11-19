import { Link } from "react-router-dom";

import { Title } from "../components/typography";

import { generateAfterSlide } from "../utils/functions";

const Homepage = () => {
  return (
    <>
      <div className="w-screen h-screen flex items-center justify-center">
        <div className="flex flex-col items-start">
          <Link
            to="/benchmark"
            relative="path"
            className="relative overflow-hidden"
          >
            <Title
              className={
                "ml-20 after:content-['BENCHMARK']" +
                generateAfterSlide("BENCHMARK")
              }
            >
              Benchmark
            </Title>
          </Link>
          <Link
            className="relative overflow-hidden"
            to="/research"
            relative="path"
          >
            <Title
              className={
                "after:content-['RESEARCH']" + generateAfterSlide("RESEARCH")
              }
            >
              Research
            </Title>
          </Link>
          <Link
            className="relative overflow-hidden"
            to="/tutorial"
            relative="path"
          >
            <Title
              className={
                "after:content-['TUTORIAL']" + generateAfterSlide("TUTORIAL")
              }
            >
              Tutorial
            </Title>
          </Link>

          <Link
            className="relative overflow-hidden"
            to="/exploration"
            relative="path"
          >
            <Title
              className={
                "after:content-['EXPLORATION']" +
                generateAfterSlide("EXPLORATION")
              }
            >
              Exploration
            </Title>
          </Link>
          <Link className="relative overflow-hidden" to="/team" relative="path">
            <Title
              className={
                "ml-20 after:content-['TEAM-MEMBERS']" +
                generateAfterSlide("TEAM-MEMBERS")
              }
            >
              team-members
            </Title>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Homepage;
