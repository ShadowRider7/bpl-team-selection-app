import { Suspense, useState } from "react";

import "./App.css";
import AvailablePlayers from "./Components/AvailablePlayers/AvailablePlayers";
import Navbar from "./Components/Navbar/Navbar";
import SelectedPlayers from "./Components/SelectedPlayers/SelectedPlayers";
import { ToastContainer } from "react-toastify";

const fetchPlayers = async () => {
  const res = await fetch("/players.json");
  return res.json();
};

const playersPromise = fetchPlayers();

function App() {
  const [toggle, setToggle] = useState(true);
  const [availableBalance, setAvailableBalance] = useState(600000);
  const [purchasedPlayers, setPurchasedPlayers] = useState([]);

  const removePlayer = (p) => {
    const newPlayer = purchasedPlayers.filter((ply) => ply.id !== p.id);
    setPurchasedPlayers(newPlayer);
    setAvailableBalance(
      availableBalance + parseInt(p.price.split(",").join("")),
    );
  };
  return (
    <>
      <Navbar availableBalance={availableBalance}></Navbar>
      <div className="justify-between flex w-300 mx-auto">
        <h2 className="font-bold text-2xl">
          {toggle
            ? "Available Players"
            : `Selected Player (${purchasedPlayers.length}/6)`}
        </h2>
        <div>
          <button
            onClick={() => {
              setToggle(true);
            }}
            className={`btn border-gray-200 py-2 px-4 border-r-0 rounded-l-2xl rounded-r-none ${toggle === true ? " bg-[#E7FE29]" : ""} font-bold`}
          >
            Available
          </button>
          <button
            onClick={() => {
              setToggle(false);
            }}
            className={`btn  border-gray-200 py-2 px-4 border-l-0 rounded-r-2xl rounded-l-none ${toggle === false ? " bg-[#E7FE29]" : ""} font-bold`}
          >
            Selected ({purchasedPlayers.length})
          </button>
        </div>
      </div>
      {toggle === true ? (
        <Suspense
          fallback={<span className="loading loading-dots loading-xl"></span>}
        >
          <AvailablePlayers
            purchasedPlayers={purchasedPlayers}
            setPurchasedPlayers={setPurchasedPlayers}
            availableBalance={availableBalance}
            setAvailableBalance={setAvailableBalance}
            playersPromise={playersPromise}
          ></AvailablePlayers>
        </Suspense>
      ) : (
        <SelectedPlayers
          setToggle={setToggle}
          removePlayer={removePlayer}
          purchasedPlayers={purchasedPlayers}
        ></SelectedPlayers>
      )}
      <ToastContainer />
    </>
  );
}

export default App;
