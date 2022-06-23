import { useState, useEffect } from 'react';
import { apiRequest }  from '../api/apiRequest.js';
import { CardContainer } from '../UI/Card.js';
import ModuleCard from '../entities/Modules/ModuleCard.js';
import AddModuleForm from '../entities/Modules/AddModuleForm.js';
import { ActionTray, ActionAdd } from '../UI/Actions.js';
import Modal from '../UI/Modal.js';


export default function MyModules({ handleSubmit, handleCancel }) {
  // Properties ----------------------------------
  const API_URL = 'https://my.api.mockaroo.com/';
  const API_KEY = '?key=bb6adbc0';
  
  // Hooks ---------------------------------------
  const [loadingMessage, setLoadingMessage] = useState("Loading records ...");
  const [modules, setModules] = useState(undefined);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => { fetchModules() }, []);

  // Methods -------------------------------------
  const fetchModules = async () => {
    const outcome = await apiRequest(API_URL, 'Modules', API_KEY);
    if (outcome.success) setModules(outcome.response);
    else setLoadingMessage(`Error ${outcome.response.status}: Modules could not be found.`);
  }

  const handleAdd = () => setShowModal(true);
  //const handleCancel = () => setShowModal(false);
  handleCancel = () => setShowModal(false);
  //const handleSubmit = (newModule) => {
  handleSubmit = (newModule) => {
    newModule.ModuleLevel = parseInt(newModule.ModuleLevel);
    newModule.ModuleLeader = parseInt(newModule.ModuleLeader);
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
            <AddModuleForm onSubmit={handleSubmit} onCancel={handleCancel} />
          </Modal>
      }
    </>
  );
}
