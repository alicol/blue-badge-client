import React, { useEffect, useState } from 'react';
import Auth from "./auth/auth";
import RecipeIndex from "./home/RecipeIndex";
import {BrowserRouter as Router} from 'react-router-dom';

import './App.css';

function App() {
  const [sessionToken, setSessionToken] = useState("");

  useEffect(() => {
    if (localStorage.getItem("token")) {
      setSessionToken(localStorage.getItem("token"));
    }
  }, []);

  const updateToken = (newToken) => {
    localStorage.setItem("token", newToken);
    setSessionToken(newToken);
    console.log(sessionToken);
  }

  const clearToken = () => {
    localStorage.clear();
    setSessionToken("");
  };

  const protectedViews = () => {
    return sessionToken === localStorage.getItem("token") ? (<RecipeIndex token={sessionToken} clickLogout={clearToken} />) :
    ( <Auth updateToken={updateToken} /> );
  };
  
  return (
    <div>
      {/* <Auth /> */}
      {protectedViews()}
    </div>
  );
}

export default App;
