import React from 'react';
import './App.css'
import * as ReactDOM from "react-dom/client";
import "./index.css";
import Router from './Router/Router';




const App =():void => {


  return (
    ReactDOM.createRoot(document.getElementById("root")!).render(
      <React.StrictMode>
       <Router />
      </React.StrictMode>
    )
  )
}

export default App
