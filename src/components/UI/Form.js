import React from 'react';
import { useState } from 'react';
import { ActionTray, ActionSubmit, ActionDismiss } from '../UI/Actions.js';
import toCamelCase from '../utils/toCamelCase.js';
import './Form.scss';


export default function Form({ children, onSubmit, onChange, onCancel }) {
  // Properties ----------------------------------
  // Hooks ---------------------------------------
  // Context -------------------------------------
  // Methods -------------------------------------
  // View ----------------------------------------
  return (
    <form onSubmit={onSubmit} className="Form Bordered">
      <div className="FormTray">
        {
          // children.map((item) => item)
          React.Children.map(children, (child) => {
            return React.cloneElement(child, { onChange: onChange });
           })
        }
      </div>
      <ActionTray>
        <ActionSubmit key="ActionSubmit" withText onClick={onSubmit} />
        <ActionDismiss key="ActionDismiss" withText onClick={onCancel} />
      </ActionTray>
    </form>
  );
}

function FormItem({ children, label, advice=null, error=null, onChange }) {
  // Properties ----------------------------------
  // Hooks ---------------------------------------
  // Context -------------------------------------
  // Methods -------------------------------------
  // View ----------------------------------------
  const htmlFor = toCamelCase(label);
  return (
    <div className="FormItem">
      <label className="FormLabel" htmlFor={htmlFor}>{label}</label>
      {
        advice && <p className="FormAdvice">{advice}</p>
      }
      {
        React.cloneElement(children, {
          id: htmlFor,
          className: "FormInput " + (error && "FormError"),
          onChange: onChange
        })
      }
      {
        error && <p className="FormError">{error}</p>
      }
    </div>
  );
}

const useFormState = (initialFormObject) => {

  if (!initialFormObject || (initialFormObject === {}))
    throw new Error("[useFormState] An initial form object must be provided");
    
  // Form State ----------------------------------
  const [formObject, setFormObject] = useState(initialFormObject);
  const [errorObject, setErrorObject] = useState(
    Object.keys(initialFormObject).reduce((accum, key) => ({ ...accum, [key]: null }), {}));

  // State Modifier ------------------------------
  const handleChange = (event) => setFormObject({ ...formObject, [event.target.name]: event.target.value });
  
  // Return --------------------------------------
  return [formObject, handleChange, errorObject, setErrorObject ];
}


Form.FormItem = FormItem;
Form.useFormState = useFormState;
