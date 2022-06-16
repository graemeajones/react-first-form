import PropTypes from 'prop-types';
import { Card } from './Card.js';
import { ActionTray } from './Actions.js';
import './Modal.css';


Modal.propTypes = {
  title: PropTypes.string.isRequired
};


export default function Modal({ title, children, actions }) {
  // Validation ----------------------------------
  // Properties ----------------------------------
  // Hooks ---------------------------------------
  // Context -------------------------------------
  // Methods -------------------------------------
  // View ----------------------------------------
  return (
    <div className="ModalOverlay">
      <main className="ModalPane">
        <Card>
          <header>
            <p>{title}</p>
          </header>
          <main className="ModalContent">
            {children}
          </main>
          <div className="ModalActions">
            <ActionTray>
              { actions && actions.map(action => action) }
            </ActionTray>
          </div>
        </Card>
      </main>
    </div>
  );
}
