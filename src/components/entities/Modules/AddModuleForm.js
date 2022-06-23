import { useState, useEffect } from 'react';
import { apiRequest }  from '../../api/apiRequest.js';
import { Form, FormItem, useFormState } from '../../UI/Form.js';


export default function AddModuleForm({ onSubmit, onCancel }) {
  // Properties ----------------------------------
  const initialModule = {
    ModuleName: "",
    ModuleCode: "",
    ModuleLevel: 0,
    ModuleLeaderID: 0,
    ModuleImage: ""
  };

  const API_URL = 'https://my.api.mockaroo.com/';
  const API_KEY = '?key=bb6adbc0';
  
  // Hooks ---------------------------------------
  const [loadingMessage, setLoadingMessage] = useState("Loading records ...");
  const [users, setUsers] = useState(undefined);
  useEffect(() => { fetchUsers() }, []);

  // Methods -------------------------------------
  const fetchUsers = async () => {
    const outcome = await apiRequest(API_URL, 'Users', API_KEY);
    if (outcome.success) setUsers(outcome.response);
    else setLoadingMessage(`Error ${outcome.response.status}: Users could not be found.`);
  }

  // Hooks ---------------------------------------
  const [module, handleChange, errors, updateErrors] = useFormState(initialModule);
  
  // Methods -------------------------------------
  const handleSubmit = (event) => {
    event.preventDefault();

    const isValidName = isValidateModuleName();
    const isValidCode = isValidateModuleCode();
    const isValidYear = isValidateModuleLevel();
    const isValidLead = isValidateModuleLeader();
    const isValidImage = isValidateModuleImage();

    updateErrors({
      ModuleName: isValidName ? null : "Module name is too short",
      ModuleCode: isValidCode ? null : "Module code is not a valid format",
      ModuleLevel: isValidYear ? null : "Invalid module level",
      ModuleLeaderID: isValidLead ? null : "No module leader has been selected",
      ModuleImage: isValidImage ? null : "Module image is not a valid URL"
    });

    if (isValidName && isValidCode && isValidYear && isValidLead && isValidImage) onSubmit(module);
  }

  const isValidateModuleName = () => module.ModuleName.length > 8 ? true : false;
  const isValidateModuleCode = () => isValidModuleCode(module.ModuleCode) ? true : false;
  const isValidateModuleLevel = () => ((module.ModuleLevel > 2) && (module.ModuleLevel < 8)) ? true : false;
  const isValidateModuleLeader = () => parseInt(module.ModuleLeaderID) ? true : false;
  const isValidateModuleImage = () => isValidURL(module.ModuleImage) ? true : false;
  const isValidModuleCode = (value) => (/\D{2}\d{4}/.test(value));
  const isValidURL = (value) => (/^(http|https):\/\/(([a-zA-Z0-9$\-_.+!*'(),;:&=]|%[0-9a-fA-F]{2})+@)?(((25[0-5]|2[0-4][0-9]|[0-1][0-9][0-9]|[1-9][0-9]|[0-9])(\.(25[0-5]|2[0-4][0-9]|[0-1][0-9][0-9]|[1-9][0-9]|[0-9])){3})|localhost|([a-zA-Z0-9\-\u00C0-\u017F]+\.)+([a-zA-Z]{2,}))(:[0-9]+)?(\/(([a-zA-Z0-9$\-_.+!*'(),;:@&=]|%[0-9a-fA-F]{2})*(\/([a-zA-Z0-9$\-_.+!*'(),;:@&=]|%[0-9a-fA-F]{2})*)*)?(\?([a-zA-Z0-9$\-_.+!*'(),;:@&=/?]|%[0-9a-fA-F]{2})*)?(#([a-zA-Z0-9$\-_.+!*'(),;:@&=/?]|%[0-9a-fA-F]{2})*)?)?$/.test(value));

  // View ----------------------------------------
  return (
    <Form onSubmit={handleSubmit} onChange={handleChange} onCancel={onCancel} >
      <FormItem
        label="Module name"
        error={errors.ModuleName}
      >
        <input
          type="text"
          name="ModuleName"
          placeholder="Please enter the module name"
          value={module.ModuleName}
        />
      </FormItem>
      
      <FormItem
        label="Module code"
        error={errors.ModuleCode}
      >
        <input
          type="text"
          name="ModuleCode"
          placeholder="Please enter the module code"
          value={module.ModuleCode}
        />
      </FormItem>

      <FormItem
        label="Module level"
        advice="Choose a level between 3 and 7 inclusive"
        error={errors.ModuleLevel}
      >
        <input
          type="number"
          name="ModuleLevel"
          value={module.ModuleLevel}
        />
      </FormItem>

      <FormItem
        label="Module leader"
        error={errors.ModuleLeaderID}
      >
        {
          !users
            ? <p>{loadingMessage}</p>
            : users.length === 0
              ? <p>No users found</p>
              : <select
                  name="ModuleLeaderID"
                  value={module.ModuleLeaderID}
                >
                  <option value="0">Select module leader ...</option>
                  {
                    users.map((user) => 
                      <option key={user.UserID} value={user.UserID} >
                        {user.UserLastname}, {user.UserFirstname}
                      </option>
                    )
                  }
                </select>
        }
      </FormItem>

      <FormItem
        label="Module image URL"
        advice="Provide the URL of an image"
        error={errors.ModuleImage}
      >
        <input
          type="text"
          name="ModuleImage"
          value={module.ModuleImage}
        />
      </FormItem>

    </Form>
  );
}
