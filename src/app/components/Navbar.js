import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <h5>Practical Resources Network</h5>
        <NavLink
          to="/admin"
          className={({ isActive }) => (isActive ? "link active" : "link")}
        >
          Admin
        </NavLink>
        <NavLink
          to="/client"
          className={({ isActive }) => (isActive ? "link active" : "link")}
        >
          Client
        </NavLink>
        <NavLink
          to="/clinician"
          className={({ isActive }) => (isActive ? "link active" : "link")}
        >
          Clinician
        </NavLink>

        <NavLink
          to="/events"
          className={({ isActive }) => (isActive ? "link active" : "link")}
        >
          ClinicianCalendar
        </NavLink>
      </nav>
    </>
  );
};
export default Navbar;
