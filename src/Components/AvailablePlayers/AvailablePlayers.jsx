import React, { use } from "react";
import PlayerCard from "../PlayerCard/PlayerCard";

const AvailablePlayers = ({
  playersPromise,
  setAvailableBalance,
  availableBalance,
  setPurchasedPlayers,
  purchasedPlayers,
}) => {
  const playersData = use(playersPromise);

  return (
    <div className="max-w-300 mx-auto my-5">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {playersData.map((player) => (
          <PlayerCard
            setAvailableBalance={setAvailableBalance}
            availableBalance={availableBalance}
            purchasedPlayers={purchasedPlayers}
            setPurchasedPlayers={setPurchasedPlayers}
            key={player.id}
            player={player}
          ></PlayerCard>
        ))}
      </div>
    </div>
  );
};

export default AvailablePlayers;
