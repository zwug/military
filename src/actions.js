export const POPUP_TOGGLE = 'POPUP_TOGGLE';
export const POPUP_UPDATE = 'POPUP_UPDATE';

export function popupToggle() {
  return {
    type: POPUP_TOGGLE
  };
}

export function popupUpdate(content) {
  return {
    type: POPUP_UPDATE,
    content
  };
}
