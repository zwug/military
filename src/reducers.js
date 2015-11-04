const {combineReducers} = require('redux');
const {POPUP_TOGGLE} = require('./actions');

function PopupToggle(state = false, action) {
  switch (action.type) {
    case POPUP_TOGGLE:
      return !state;
    default:
      return state;
  }
}

const militaryApp = combineReducers({
  PopupToggle
});

module.exports = militaryApp;
