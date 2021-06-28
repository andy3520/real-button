import { useState } from "react";

const Button = ({ onClick }) => {
  const [isMouseDown, setIsMouseDown] = useState(false);

  return (
    <div
      className="relative z-0 h-0"
      style={{
        width: "30%",
        paddingBottom: "30%",
      }}
      onClick={() => onClick()}
      onPointerDown={() => setIsMouseDown(true)}
      onPointerUp={() => setIsMouseDown(false)}
    >
      <div className="absolute inset-0 z-0">
        <button
          className="z-10 flex flex-col flex-wrap items-center justify-center w-full h-full bg-red-500 rounded-full"
          style={{
            boxShadow: isMouseDown
              ? ""
              : "rgb(0 0 0 / 40%) 5px -5px 8px -2px inset, rgb(255 255 255 / 20%) -5px 5px 8px -1px inset",
          }}
        >
          <div className="flex w-1/2">
            <div
              className="w-full"
              style={{
                padding: "10%",
              }}
            >
              <Hole isMouseDown={isMouseDown} />
            </div>
            <div
              className="w-full"
              style={{
                padding: "10%",
              }}
            >
              <Hole isMouseDown={isMouseDown} />
            </div>
          </div>
          <div className="flex w-1/2">
            <div
              className="w-full"
              style={{
                padding: "10%",
              }}
            >
              <Hole isMouseDown={isMouseDown} />
            </div>
            <div
              className="w-full"
              style={{
                padding: "10%",
              }}
            >
              <Hole isMouseDown={isMouseDown} />
            </div>
          </div>
        </button>
      </div>
    </div>
  );
};

const Hole = (isMouseDown) => {
  return (
    <div
      className="relative h-0"
      style={{
        width: "100%",
        paddingBottom: "100%",
      }}
    >
      <div className="absolute inset-0">
        <div
          className="w-full h-full bg-white rounded-full shadow"
          style={{
            boxShadow: isMouseDown
              ? ""
              : "rgb(0 0 0 / 40%) -10px 10px 20px -5px inset, rgb(255 255 255) -5px 4px 16px -5px inset",
          }}
        ></div>
      </div>
    </div>
  );
};

export default Button;
