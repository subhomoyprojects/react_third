import React, { useContext } from "react";
import NoteContex from "./Context";

export default function About() {
  const data = useContext(NoteContex);
  console.log(data, "data");
  return (
    <div>
      <h1>about page</h1>
      <h1>{data?.name}</h1>
    </div>
  );
}
