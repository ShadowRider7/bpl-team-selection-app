import navImg from "../../assets/logo.png";
import currency from "../../assets/Currency.png";
const Navbar = ({ availableBalance }) => {
  return (
    <div className="navbar max-w-300 mx-auto">
      <div className="flex-1">
        <a className="" href="">
          <img src={navImg} alt="" className="w-15 h-15" />
        </a>
      </div>
      <div className="flex items-center gap-1">
        <span>{availableBalance}</span>
        <span>coin</span>
        <span>
          <img src={currency} alt="" />
        </span>
      </div>
    </div>
  );
};

export default Navbar;
