import React, { useContext } from "react";
import { formIIContext } from "./formContext";

export default function InputFieldII({ name }) {
  const { formIIState, setFormIIState } = useContext(formIIContext);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormIIState((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };

  return (
    <div className="field">
      <label htmlFor={name}>{name}</label>
      {name && (
        <div key={formIIState[name]} className="input-box">
          <input
            type="text"
            placeholder={name}
            name={name}
            defaultValue={formIIState[name]}
            onInput={handleChange}
            autoFocus
          />
        </div>
      )}
    </div>
  );
}
