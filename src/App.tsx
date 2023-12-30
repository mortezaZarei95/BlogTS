import React from 'react';
import './App.css'
import * as ReactDOM from "react-dom/client";
import "./index.css";
import Router from './Router/Router';
import SnackBarProvider from './components/hooks/useSnackBar/UseSnackBar';

const App = (): void => {
  return ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
      <SnackBarProvider>
        <Router />
      </SnackBarProvider>
    </React.StrictMode>
  );
};

export default App
