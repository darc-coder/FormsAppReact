import React, { useContext } from "react";
import { formContext } from "./formContext";

export default function InputField({ name }) {
  const { formState, setFormState } = useContext(formContext);

  const handleChange = (e) => {
    const { name, value } = e.target;
    const index = e.target.getAttribute("index");

    setFormState((prevState) => {
      prevState[name][index] = value;
      return {
        ...prevState,
      };
    });
  };

  const addValue = (name) => {
    formState[name].push("");

    setTimeout(() => {
      setFormState((prevState) => {
        return {
          ...prevState,
        };
      });
    }, 200);
  };

  const deleteValue = (name, value) => {
    const index = formState[name].indexOf(value);
    if (index !== -1) formState[name].splice(index, 1);

    setFormState((prevState) => {
      return {
        ...prevState,
      };
    });

    console.log(index, name, value, formState);
  };

  const inputTypeMap = { Email: "email", Contact: "tel" };

  return (
    <div className="field">
      <label htmlFor={name}>{name}</label>
      {name &&
        formState[name]?.map((val, index) => (
          <div key={val + index} className="input-box">
            <input
              type={inputTypeMap[name] ? inputTypeMap[name] : "text"}
              placeholder={name}
              name={name}
              defaultValue={val}
              index={index}
              onInput={handleChange}
              autoFocus
            />
            <button type="button" onClick={() => deleteValue(name, val)}>
              -
            </button>
          </div>
        ))}
      <button
        type="button"
        onClick={() => {
          addValue(name);
        }}
      >
        +
      </button>
    </div>
  );
}
