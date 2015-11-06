const {combineReducers} = require('redux');
const {POPUP_TOGGLE, POPUP_UPDATE} = require('./actions');

const PopupInitialState = {
  src: '',
  text: '',
  title: ''
};

function showPopup(state = false, action) {
  switch (action.type) {
    case POPUP_TOGGLE:
      return !state;
    default:
      return state;
  }
}

function popupContent(state = PopupInitialState, action) {
  switch (action.type) {
    case POPUP_UPDATE:
      return action.content;
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  showPopup,
  popupContent
});

module.exports = rootReducer;
