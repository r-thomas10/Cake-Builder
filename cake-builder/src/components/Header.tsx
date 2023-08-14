import "./../styles/Header.css";
import menuImg from "./../images/menu.png";

function Header() {
  return (
    <div className="Header">
      <div>
        <img src={menuImg} alt="menuBar" />
      </div>
      <div>
        <h1>Welcome to the Bakery</h1>
      </div>
    </div>
  );
}

export default Header;
