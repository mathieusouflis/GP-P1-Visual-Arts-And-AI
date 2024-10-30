import "./App.css";
import { Clasical, Title } from "./components/typography";
import { Benchmark } from "./components/benchmark";
import { useRef } from "react";

function App() {
  const page2Ref = useRef(null);

  const scrollPage2 = () => {
    page2Ref.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <div className="slide1 h-screen w-screen flex justify-center items-center">
        <div className="titleBox">
          <Title>Visual art</Title>
          <Title>and AI</Title>
        </div>
        <div
          onClick={scrollPage2}
          className="flex flex-col items-center content-center absolute bottom-9 w-14 left-[calc(50%-28px)] animate-bounce cursor-pointer"
        >
          <Clasical>Scroll</Clasical>
          <svg
            width="15"
            height="25"
            viewBox="0 0 15 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.79289 24.7071C7.18342 25.0976 7.81658 25.0976 8.20711 24.7071L14.5711 18.3431C14.9616 17.9526 14.9616 17.3195 14.5711 16.9289C14.1805 16.5384 13.5474 16.5384 13.1569 16.9289L7.5 22.5858L1.84315 16.9289C1.45262 16.5384 0.819457 16.5384 0.428933 16.9289C0.0384086 17.3195 0.0384086 17.9526 0.428933 18.3431L6.79289 24.7071ZM6.5 4.37114e-08L6.5 24L8.5 24L8.5 -4.37114e-08L6.5 4.37114e-08Z"
              fill="black"
            />
          </svg>
        </div>
      </div>
      <div ref={page2Ref} className="flex justify-center h-screen items-center">
        <Benchmark />
      </div>
    </>
  );
}

export default App;
