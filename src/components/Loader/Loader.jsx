import { selectIsLoading } from "redux/selector";
import { BallTriangle } from 'react-loader-spinner';
import { useSelector } from "react-redux";
import css from "./Loader.module.css";

const Loader = () => {
     const isLoading = useSelector(selectIsLoading);
    return (
        <div className={css.spinner}>
         {isLoading && <BallTriangle className="loading"
              height={100}
              width={100}
              radius={5}
              color="#4fa94d"
              ariaLabel="ball-triangle-loading"
              wrapperClass={{}}
              wrapperStyle=""
              visible={true}
        />}   
    </div> 
    )
}
export default Loader;