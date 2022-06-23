import PropTypes from 'prop-types';
import { IconCross, IconList, IconPen, IconPlus, IconRedHeart, IconTick, IconTrash } from './Icons.js';
import './Actions.css';

// -----------------------------------------
// Action Tray /////////////////////////////
// -----------------------------------------

ActionTray.propTypes = {
  children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node
  ]).isRequired
}

export function ActionTray({children}) {
  return (
    <div className="ActionTray">
      { children }
    </div>
  );
}

// -----------------------------------------
// Actions /////////////////////////////////
// -----------------------------------------

const ActionPropTypes = {
  onClick: PropTypes.func.isRequired,
  withText: PropTypes.bool
};

ActionAdd.propTypes = ActionPropTypes;

export function ActionAdd({ onClick, withText=false }) {
  return (
    <button className="Action" onClick={onClick}>
      <IconPlus /> {withText && <p>Add</p>}
    </button>
  );
}

ActionClose.propTypes = ActionPropTypes;

export function ActionClose({ onClick, withText=false }) {
  return (
    <button className="Action" onClick={onClick}>
      <IconCross /> {withText && <p>Close</p>}
    </button>
  );
}

ActionDelete.propTypes = ActionPropTypes;

export function ActionDelete({ onClick, withText=false }) {
  return (
    <button className="Action" onClick={onClick}>
      <IconTrash /> {withText && <p>Delete</p>}
    </button>
  );
}

ActionDismiss.propTypes = ActionPropTypes;

export function ActionDismiss({ onClick, withText=false }) {
  return (
    <button className="Action" onClick={onClick}>
      <IconCross /> {withText && <p>Dismiss</p>}
    </button>
  );
}

ActionFavourites.propTypes = ActionPropTypes;

export function ActionFavourites({ onClick, withText=false }) {
  return (
    <button className="Action" onClick={onClick}>
      <IconRedHeart /> {withText && <p>List favourites</p>}
    </button>
  );
}

ActionListAll.propTypes = ActionPropTypes;

export function ActionListAll({ onClick, withText=false }) {
  return (
    <button className="Action" onClick={onClick}>
      <IconList /> {withText && <p>List all</p>}
    </button>
  );
}

ActionModify.propTypes = ActionPropTypes;

export function ActionModify({ onClick, withText=false }) {
  return (
    <button className="Action" onClick={onClick}>
      <IconPen /> {withText && <p>Modify</p>}
    </button>
  );
}

ActionNo.propTypes = ActionPropTypes;

export function ActionNo({ onClick, withText=false }) {
  return (
    <button className="Action" onClick={onClick}>
      <IconCross /> {withText && <p>No</p>}
    </button>
  );
}

ActionSubmit.propTypes = ActionPropTypes;

export function ActionSubmit({ onClick, withText=false }) {
  return (
    <button className="Action" onClick={onClick} type="submit">
      <IconTick /> {withText && <p>Submit</p>}
    </button>
  );
}

ActionSubscribe.propTypes = ActionPropTypes;

export function ActionSubscribe({ onClick, withText=false }) {
  return (
    <button className="Action" onClick={onClick}>
      <IconTick /> {withText && <p>Subscribe</p>}
    </button>
  );
}

ActionYes.propTypes = ActionPropTypes;

export function ActionYes({ onClick, withText=false }) {
  return (
    <button className="Action" onClick={onClick}>
      <IconTick /> {withText && <p>Yes</p>}
    </button>
  );
}

ActionUnsubscribe.propTypes = ActionPropTypes;

export function ActionUnsubscribe({ onClick, withText=false }) {
  return (
    <button className="Action" onClick={onClick}>
      <IconCross /> {withText && <p>Unsubscribe</p>}
    </button>
  );
}
