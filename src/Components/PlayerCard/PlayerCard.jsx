import { toast } from "react-toastify";
import icon from "../../assets/Group.png";
import icon2 from "../../assets/Group1.png";
const PlayerCard = ({
  player,
  availableBalance,
  setAvailableBalance,
  setPurchasedPlayers,
  purchasedPlayers,
}) => {
  const {
    name,
    image,
    country,
    price,
    rating,
    role,
    bowlingStyle,
    battingStyle,
  } = player;
  // const [isSelected, setIsSelected] = useState(false);

  const isSelected = purchasedPlayers.some((p) => p.id === player.id);
  const handleSelected = (player) => {
    if (isSelected) {
      return;
    }
    const playerPrice = parseInt(price.split(",").join(""));
    if (availableBalance < playerPrice) {
      toast("not enough money");
      return;
    }
    setAvailableBalance(availableBalance - playerPrice);
    setPurchasedPlayers([...purchasedPlayers, player]);
  };

  return (
    <div className="card bg-base-100 shadow-sm p-4">
      <figure>
        <img
          className="h-60 w-full rounded-2xl object-cover"
          src={image}
          alt="Shoes"
        />
      </figure>
      <div className="mt-4">
        <div className="flex items-center">
          <a href="">
            <img src={icon} alt="" className="h-5 w-5 mr-2" />
          </a>
          <h2 className="font-semibold">{name}</h2>
        </div>
        <div className="flex items-center justify-between border-b border-gray-200 pb-3 mt-2">
          <div className="flex items-center">
            <img src={icon2} alt="" className="h-4 mr-2" />
            <h2>{country}</h2>
          </div>
          <button className="btn rounded-xl">{role}</button>
        </div>
        <div className="flex justify-between font-bold mt-2">
          <span>rating</span>
          <span>{rating}</span>
        </div>
        <div className="flex justify-between mt-2">
          <span className="font-semibold">{battingStyle}</span>
          <span>{bowlingStyle ? bowlingStyle : ""}</span>
        </div>
        <div className="flex items-center justify-between mt-2">
          <p className="font-semibold">Price: ${price}</p>
          <button
            disabled={isSelected}
            onClick={() => {
              handleSelected(player);
            }}
            className="btn rounded-xl text-center"
          >
            {isSelected ? "Selected" : "Choose Player"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default PlayerCard;
