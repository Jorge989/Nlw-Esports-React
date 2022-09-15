import "./styles/main.css";
import { useEffect, useState } from "react";
import logoImg from "./assets/Logo.svg";
import { GameBanner } from "./components/GameBanner";
import { CreateAdBanner } from "./components/CreateAdBanner";
function App() {
  const [games, setGames] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3333/games")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      });
  }, []);
  return (
    <div className="max-w-[1244px] mx-auto flex flex-col items-center my-20">
      <img src={logoImg} alt="logo" className="logo" />
      <h1 className="text-5xl text-white font-black mt-20">
        Seu{" "}
        <span className="bg-nlw-gradient text-transparent bg-clip-text">
          duo
        </span>{" "}
        está aqui.
      </h1>
      <div className="grid grid-cols-6 gap-6 mt-16 ">
        <GameBanner
          bannerUrl="/Game1.png"
          title="League of Legeneds"
          adsCount={5}
        />
      </div>
      <CreateAdBanner />
    </div>
  );
}

export default App;
