import React from "react";
import SelectedCard from "../SelectedCard/SelectedCard";

const SelectedPlayers = ({ purchasedPlayers, removePlayer, setToggle }) => {
  return (
    <div className="mx-auto w-300">
      {purchasedPlayers.map((player) => (
        <SelectedCard
          removePlayer={removePlayer}
          key={player.id}
          player={player}
        ></SelectedCard>
      ))}
      <div
        onClick={() => setToggle(true)}
        className="btn border border-gray-300 bg-[#E7FE29] mt-5 rounded-xl p-4"
      >
        Add More Player
      </div>
    </div>
  );
};

export default SelectedPlayers;
