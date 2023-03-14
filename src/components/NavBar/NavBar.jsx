import { NavLink, Outlet } from "react-router-dom";
import items from "./items";
import NavbarAuth from "./NavbarAuth/NavbarAuth";
import NavbarUser from "./NavbarUser/NavbarUser";
const NavBar = () => {
    const element = items.map(({ id, text, link }) =>
        <li key={id}> <NavLink to={link}>{text}</NavLink></li>)
    return (
        <>
            <ul>
                {element}
            </ul>
            <NavbarAuth />
            <NavbarUser/>
            <Outlet/>
        </>
    )
}
export default NavBar;