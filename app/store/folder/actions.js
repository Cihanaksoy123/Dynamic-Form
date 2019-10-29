import * as types from './actionTypes';
//import firebaseService from '../../services/firebase'
export const ClickFolder = (folder) => {
  return dispatch => {
    //dispatch(setStatusBackButton(false))
    dispatch(clickFolder(folder));
  };
};
export const GetToPreviousFolder = () => {
  return dispatch => {
    dispatch(getToPreviousFolder());
  };
};

export const GetToNextFolder = (email, password) => {
  return dispatch => {
    //dispatch()
    dispatch(getToNextFolder());
  };
};

const clickFolder = (folder) => ({
  type: types.CLICK_FOLDER,
  folder
});

const getToPreviousFolder = () => ({
  type: types.GET_TO_PREVIOUS_FOLDER,
});

const getToNextFolder = () => ({
  type: types.GET_TO_NEXT_FOLDER,
});

const setStatusNextButton = isPassive => ({
  type: types.SET_STATUS_NEXT_BUTTON,
});

const setStatusBackButton = isPassive => ({
  type: types.SET_STATUS_BACK_BUTTON,
});
