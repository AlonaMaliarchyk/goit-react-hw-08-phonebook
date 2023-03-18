import { Provider } from "react-redux";
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from "./redux/store";
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from 'components/App';
import './index.css';
import { BrowserRouter } from "react-router-dom";
import 'semantic-ui-css/semantic.min.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
          <BrowserRouter basename="goit-react-hw-08-phonebooks">
           <App />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
