import React from "react";

const SelectedCard = ({ player, removePlayer }) => {
  const handleRemove = () => {
    removePlayer(player);
  };
  return (
    <div className="border-gray-400 border rounded-xl mt-4 py-3 px-4 flex justify-between items-center">
      <div className="flex justify-center items-center">
        <div>
          <img className="h-15 w-15 rounded-xl" src={player.image} alt="" />
        </div>
        <div className="ml-3">
          <h2 className="font-bold">{player.name}</h2>
          <p className="text-sm text-gray-500">{player.role}</p>
        </div>
      </div>
      <div onClick={handleRemove}>
        <img src="https://i.ibb.co.com/hJpv0FBy/Vector.png" alt="" />
      </div>
    </div>
  );
};

export default SelectedCard;
