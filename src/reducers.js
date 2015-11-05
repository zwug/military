const {combineReducers} = require('redux');
const {POPUP_TOGGLE} = require('./actions');

function showPopup(state = false, action) {
  console.log('POPUP_TOGGLE', state);
  switch (action.type) {
    case POPUP_TOGGLE:
      return !state;
    default:
      return state;
  }
}

const militaryApp = combineReducers({
  showPopup
});

module.exports = militaryApp;
