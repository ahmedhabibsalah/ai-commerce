import React from "react";
import TextStyle from "./TextStyle";

function Hero() {
  return (
    <div className="flex flex-col items-center justify-center gap-2 my-8 px-4">
      <TextStyle
        text="Our Priority is your Shopping Experience"
        coloredIndices={[1]}
      />
      <p className="text-lg" style={{ color: "#001524" }}>
        Voice commerce allows customers to make purchases using voice commands
        by Using Ai Chatbot
      </p>
    </div>
  );
}

export default Hero;
