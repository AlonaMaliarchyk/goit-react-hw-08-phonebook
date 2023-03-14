import { store } from "../redux/store";
import { Provider } from "react-redux";
import css from './App.module.css';
import { useSelector } from "react-redux";
import { selectIsLoading } from "../redux/selector";
import { BallTriangle } from 'react-loader-spinner';
import NavBar from "./NavBar/NavBar";
import UserRouter from "./UserRouter";

const App = () => {
  const isLoading = useSelector(selectIsLoading);
  return (
      <Provider store={store}>
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
          <div className={css.wrap} style={{ opacity: isLoading ? '0.2' : '1' }}>
          <NavBar />
          <UserRouter/>
          </div>
      </Provider>
    );
}

export default App;
