import { slide as Menu } from "react-burger-menu";
import "./BurgerMenu.scss";

export default function Geolocation() {
  return (
    <Menu width="75%">
      <a id="carDashboard" className="menu-item" href="/carDashboard">
        Car Dashboard
      </a>
      <a id="about" className="menu-item" href="/cartransfert">
        Car Transfert
      </a>
      <a id="contact" className="menu-item" href="/storageDashboard">
        My silo
      </a>
    </Menu>
  );
}
