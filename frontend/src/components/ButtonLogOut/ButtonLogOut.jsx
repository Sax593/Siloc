import { RiLogoutCircleLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import "./style.scss";

export default function ButtonLogOut() {
  return (
    <Link to="/">
      <button type="button" id="logoutButton">
        <RiLogoutCircleLine className="iconLogout" />
      </button>
    </Link>
  );
}
