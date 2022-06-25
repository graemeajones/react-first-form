import { useState } from 'react';
import useFetch  from '../api/useFetch.js';
import { CardContainer } from '../UI/Card.js';
import ModuleCard from '../entities/Modules/ModuleCard.js';
import ModuleForm from '../entities/Modules/ModuleForm.js';
import { ActionTray, ActionAdd } from '../UI/Actions.js';
import Modal from '../UI/Modal.js';


export default function MyModules({ handleSubmit, handleCancel }) {
  // Properties ----------------------------------
  const endpoint = "Modules";
  const method = "GET";

  // State ---------------------------------------
  const [showModal, setShowModal] = useState(false);
  const [modules, setModules, loadingMessage] = useFetch(endpoint,method);
  
  // Methods -------------------------------------
  
  const handleAdd = () => setShowModal(true);
  handleCancel = () => setShowModal(false);
  handleSubmit = (newModule) => {
    newModule.ModuleID = modules.length+1;
    setModules([...modules, newModule]);
    setShowModal(false);
  }

  // View ----------------------------------------
  return (
    <>
      <h1>My Modules</h1>

      <ActionTray>
        <ActionAdd withText onClick={handleAdd} />
      </ActionTray>

      {
        !modules
          ? <p>{loadingMessage}</p>
          : modules.length === 0
              ? <p>No modules found</p>
            : <CardContainer>
                {
                  modules.map((module) =>
                    <ModuleCard key={module.ModuleID} module={module} />
                  )
                }
              </CardContainer>
      }

      {
        showModal &&
          <Modal title="Add new module">
            <ModuleForm onSubmit={handleSubmit} onCancel={handleCancel} />
          </Modal>
      }
    </>
  );
}
