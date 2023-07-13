import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="h-screen w-full flex justify-center items-center">
      <div className="bg-[#FF4957] p-16 rounded-lg">
        {/* Counter Display */}
        <div className="text-center text-3xl text-white font-semibold mb-16">
          {count}
        </div>
        {/* Controls */}
        <div className="flex gap-6">
          <button
            className="bg-white p-4"
            onClick={() => {
              setCount(count + 1);
            }}
          >
            Increment
          </button>
          <button
            className="bg-white p-4"
            onClick={() => {
              setCount(count - 1);
            }}
          >
            Decrement
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
