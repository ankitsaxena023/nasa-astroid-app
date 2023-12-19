import astroidContext from "./astroidContext";
import React, { useState } from "react";

const AstroidContextProvider = ({ children }) => {
  const [astroidData, setAstroidData] = useState({
    id: "",
    name: "",
    astroidUrl: "",
    isHazardous: "",
  });

  const [inputValue, setInputValue] = useState("2000433");

  return (
    <astroidContext.Provider
      value={{
        astroidData,
        setAstroidData,
        inputValue,
        setInputValue,
      }}
    >
      {children}
    </astroidContext.Provider>
  );
};

export default AstroidContextProvider;
