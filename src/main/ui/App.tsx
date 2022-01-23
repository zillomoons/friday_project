import React, { useEffect } from "react";
import "./App.css";
import { Main } from "./Main";
import { useDispatch } from "react-redux";
import { authMe } from "../bll/reducers/auth-reducer";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(authMe());
  }, [dispatch]);

  return (
    <div className="App">
      <Main />
    </div>
  );
}

export default App;
