import { store } from "../redux/store";
import { Provider, useSelector } from "react-redux";
import css from './App.module.css';
import { selectIsLoading } from "../redux/selector";
// import { BallTriangle } from 'react-loader-spinner';
import NavBar from "./NavBar/NavBar";
import UserRouter from "./UserRouter";
import AuthLayout from "./AuthLayout/AuthLayout";
import Loader from "./Loader/Loader";



const App = () => {

  const isLoading = useSelector(selectIsLoading);
  return (
      <Provider store={store}>
        <Loader/>
        <AuthLayout>
         <div className={css.wrap} style={{ opacity: isLoading ? '0.2' : '1' }}>
              <NavBar />
          <hr/>
          <div className={css.container}>
              <UserRouter/>  
          </div>
         
          </div>
        </AuthLayout>
      
      </Provider>
    );
}

export default App;
