import { useSelector, useDispatch } from "react-redux";
import { getUser } from "redux/auth/selectorAuth";
import { logout } from "redux/auth/operationAuth";
import css from "./NavBarUser.module.css"

const NavbarUser = () => {
    const { email } = useSelector(getUser);
    const dispatch = useDispatch();

    const onLogout = () => {
      dispatch(logout());
    }
    return (
        <div className={css.wrap}>
           {email} <button className={css.btn} onClick={onLogout}>
          <i aria-hidden="true" className="log out icon"></i>
          Log out</button>
        </div>
    )
}
export default NavbarUser;
