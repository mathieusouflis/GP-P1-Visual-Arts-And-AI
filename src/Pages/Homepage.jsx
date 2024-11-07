import { Title } from "../components/typography";

const Homepage = () => {
  return (
    <>
      <div className="w-screen h-screen flex items-center justify-center">
        <div className="flex flex-col items-start">
          <Title className="ml-20">Benchmark</Title>
          <Title>Research</Title>
          <Title>Tutorial</Title>
          <Title className="ml-20">Exploration</Title>
        </div>
      </div>
    </>
  );
};

export default Homepage;
