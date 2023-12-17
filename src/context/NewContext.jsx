import React, { Children } from "react";
import NoteContex from "./Context";

const Notestate = (props) => {
  const state = {
    name: "Nill Bhai",
    email: "mailto:nill@gmail.com",
    phone: "9853257789",
  };
  return (
    <>
      <NoteContex.Provider value={state}>{props.children}</NoteContex.Provider>
    </>
  );
};

export default Notestate;
