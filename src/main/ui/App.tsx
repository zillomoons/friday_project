import React, { useEffect } from 'react';
import './App.css';
import {HashRouter} from "react-router-dom";
import { Main } from './Main';
import store from "../bll/store/store";
import {Provider} from "react-redux";

function App() {
useEffect(()=>{
    
}, [])
  return (
      <div className='App'>
          <HashRouter>
              <Provider store={store}>
                  <Main />
              </Provider>
          </HashRouter>

      </div>

  );
}

export default App;
