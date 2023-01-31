import "./App.css";
import React from "react";

//Components for App

import Navbar from "./navbar/Navbar";
import ItemListContainer from "./ItemListContainer/ItemListContainer";

const App = () => {
  return (
    <>
      <Navbar nombre={"Dj's Seventh House"} />
      <ItemListContainer greeting={"Hola"} />
    </>
  );
};

export default App;
