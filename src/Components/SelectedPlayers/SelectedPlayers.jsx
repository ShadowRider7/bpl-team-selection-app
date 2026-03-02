import React from "react";
import SelectedCard from "../SelectedCard/SelectedCard";

const SelectedPlayers = ({ purchasedPlayers, removePlayer }) => {
  return (
    <div className="mx-auto w-300">
      {purchasedPlayers.map((player) => (
        <SelectedCard
          removePlayer={removePlayer}
          key={player.id}
          player={player}
        ></SelectedCard>
      ))}
    </div>
  );
};

export default SelectedPlayers;
