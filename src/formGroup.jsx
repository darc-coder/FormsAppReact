import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";

import { formContext, formIIContext } from "./formContext";
import InputField from "./inputField";
import InputFieldII from "./inputField2";

export default function FormGroup({ page }) {
  const { formState, setFormState } = useContext(formContext);
  const { formIIState, setFormIIState } = useContext(formIIContext);

  return (
    <div className="formGroup">
      <h4>Form title - Page {page}</h4>

      <div className="form">
        <form action="#" onSubmit={() => false}>
          {page != 2 &&
            Object.keys(formState).map((f) => <InputField key={f} name={f} />)}
          {page == 2 &&
            Object.keys(formIIState).map((f) => (
              <InputFieldII key={f} name={f} />
            ))}
        </form>
      </div>
      <Link to={page == 1 ? "/wizard/page-2" : "/wizard/page-1"}>
        <button type="button">{page == 1 ? "Next" : "Back"}</button>
      </Link>
      {page == 2 && (
        <button
          className="primary"
          type="button"
          onClick={() =>
            localStorage.setItem(
              "savedForm",
              JSON.stringify({ data1: formState, data2: formIIState })
            )
          }
        >
          Save
        </button>
      )}
    </div>
  );
}
