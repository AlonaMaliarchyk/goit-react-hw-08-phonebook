import { NavLink } from "react-router-dom";
import css from "./NavbarAuth.module.css";

const NavbarAuth = () => {
    return (
        <div >
            <NavLink className={css.link} to="/register">
              <i aria-hidden="true" className="address card outline icon"></i>
              Register
            </NavLink> |
            <NavLink className={css.link} to ="/login">
              <i aria-hidden="true" className="user circle icon"></i>
              Login
            </NavLink>
        </div>
    )
}
export default NavbarAuth;
