import "./App.css";
import { useRef } from "react";

function App() {
  const page2Ref = useRef(null);

  const scrollPage2 = () => {
    page2Ref.current.scrollIntoView({ behavior: "smooth" });
  };

  return <></>;
}

export default App;
