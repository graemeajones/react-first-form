import { useState, useEffect } from 'react';
import { apiRequest }  from '../api/apiRequest.js';
import { CardContainer } from '../UI/Card.js';
import ModuleCard from '../UI/ModuleCard.js';
import { ActionTray, ActionAdd, ActionSubmit, ActionDismiss } from '../UI/Actions.js';
import Modal from '../UI/Modal.js';

export default function MyModules() {
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
  const handleDismiss = () => setShowModal(false);
  const handleSubmit = () => console.log('Add');

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
          <Modal
            title="Add new module"
            actions={[ <ActionDismiss key="ActionDismiss" withText onClick={handleDismiss} /> ]}
          >
            <form onSubmit={handleSubmit}>
              <label>Module name
                <input type="text" value="Some string" />
              </label>
              <ActionSubmit onClick={handleSubmit} withText />
            </form>
          </Modal>
      }
    </>
  );
}
