import {Navigate, Outlet} from "react-router-dom";
import { useSelector } from "react-redux";
import { getAuth } from "redux/auth/selectorAuth";
import Loader from "components/Loader/Loader";

const PrivetRoute = () => {
    const { isLogin, token } = useSelector(getAuth);
    if (!isLogin && token) {
        return <Loader/>
    }
    if (!isLogin && !token) {
        return <Navigate to="/login"/>
    }
    return <Outlet/>
}
export default PrivetRoute;