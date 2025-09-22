import React from "react";
import Home from "./component/Home";
import MenuCard from "./component/MenuContainer/MainMenuCard";
import bg from "./assets/assets/bg.png";
import { Suspense } from "react";

const App = () => {
  return (
    <div
      style={{
        background: ` linear-gradient(0deg,rgba(255, 255, 255, 1) 0%, rgba(255, 250, 250, 0.85) 100%), url(${bg})`,
        backgroundSize: "400px",
        backgroundPosition: "center",
        backgroundRepeat: "repeat",
        backgroundAttachment: "fixed",
      }}
      className="min-h-screen"
    >
      <Home />

      <MenuCard />
    </div>
  );
};

export default App;
