import React, { useState } from "react";

export const formContext = React.createContext();
export const formIIContext = React.createContext();

function FormContext({ children }) {
  const saved = localStorage.getItem("savedForm");
  let Data = {};

  if (saved) Data = JSON.parse(saved);

  const [formState, setFormState] = useState(
    Data.data1 || {
      Name: [""],
      Contact: [""],
      Email: [""],
      Address: [""],
    }
  );

  const [formIIState, setFormIIState] = useState(
    Data.data2 || {
      Field_1: "",
      Field_2: "",
    }
  );

  return (
    <formContext.Provider value={{ formState, setFormState }}>
      <formIIContext.Provider value={{ formIIState, setFormIIState }}>
        {children}
      </formIIContext.Provider>
    </formContext.Provider>
  );
}

export default FormContext;
