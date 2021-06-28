import { useState } from "react";
import Button from "./components/button/Button";

function App() {
  const [counter, setCounter] = useState(
    () => +localStorage.getItem("counter") || 0
  );

  const onClick = () => {
    setCounter((counter) => {
      counter++;
      localStorage.setItem("counter", counter);
      return counter;
    });
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 min-w-screen">
      <Button onClick={onClick}></Button>
      <h1
        className="text-gray-600"
        style={{
          fontSize: "7vw",
        }}
      >
        Button clicked: {counter}
      </h1>
    </div>
  );
}

export default App;
