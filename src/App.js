import React from "react";

import "./App.css";
import CakeContainer from "./components/CakeContainer";
import { Provider } from "react-redux";
import store from "./redux/store";
import IcecreamContainer from "./components/IcecreamContainer";
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <IcecreamContainer />
        <CakeContainer />
      </div>
    </Provider>
  );
}

export default App;
