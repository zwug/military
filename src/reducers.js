const {combineReducers} = require('redux');
const {POPUP_TOGGLE} = require('./actions');

function showPopup(state = false, action) {
  switch (action.type) {
    case POPUP_TOGGLE:
      return !state;
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  showPopup
});

module.exports = rootReducer;
