import { NavLink } from "react-router-dom";

import GitHubIcon from "@mui/icons-material/GitHub";
import StorageIcon from "@mui/icons-material/Storage";
export default function Header() {
  return (
    <>
      <div className="logo">Events</div>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/volunteer">Volunteers</NavLink>
        <NavLink to="/events">Events</NavLink>
        <NavLink
          to="https://github.com/ShamiKantMourya/Volunteer-Management-System"
          target="_blank"
        >
          <GitHubIcon />
        </NavLink>
        <NavLink
          to="https://replit.com/@shamiMourya/Volunteer-Management-APIs-1"
          target="_blank"
        >
          <StorageIcon />
        </NavLink>
      </nav>
    </>
  );
}
