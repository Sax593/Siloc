import { slide as Menu } from "react-burger-menu";
import "./BurgerMenu.scss";

export default function Geolocation() {
  const showSettings = (event) => {
    event.preventDefault();
  };
  return (
    <Menu width={"75%"}>
      <a id="carDashboard" className="menu-item" href="/carDashboard">
        Car Dashboard
      </a>
      <a id="about" className="menu-item" href="/cartransfert">
        Car Transfert
      </a>
      <a id="contact" className="menu-item" href="/storageDashboard">
        My silo
      </a>
      <a onClick={showSettings} className="menu-item--small" href="">
        Settings
      </a>
    </Menu>
  );
}
