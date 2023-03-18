import { NavLink, Outlet } from "react-router-dom";
import items from "./items";
import NavbarAuth from "./NavbarAuth/NavbarAuth";
import NavbarUser from "./NavbarUser/NavbarUser";
import { useSelector } from "react-redux";
import { isUserLogIn } from "../../redux/auth/selectorAuth";
import css from "./Navbar.module.css";

const NavBar = () => {
    const isLogin = useSelector(isUserLogIn);

    const menuItems = !isLogin ? items.filter(item => !item.private) : items;

    const element = menuItems.map(({ id, text, link, icon }) =>
        <li className={css.item} key={id}>
          <NavLink to={link}>
            <i aria-hidden="true" className={icon}></i>
            {text}
          </NavLink>
        </li>)
    return (
        <>
            <div className={css.container}>
                <ul className={css.list}>
                    {element}
                </ul>
                <div className={css.wrapAuth}>
                  {!isLogin && <NavbarAuth />}
                  {isLogin && <NavbarUser />}
                </div>

            </div>
                <Outlet />
        </>
    )
}
export default NavBar;
