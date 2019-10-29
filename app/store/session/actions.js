import * as types from './actionTypes';
import { loginRequest } from '../../services/Api';
import { Actions } from 'react-native-router-flux';
import { ToastActionsCreators } from 'react-native-redux-toast';
export const restoreSession = () => {
  return dispatch => {
    dispatch(sessionRestoring());
    // let unsubscribe = firebaseService.auth()
    //   .onAuthStateChanged(user => {
    //     if (user) {
    //       dispatch(sessionSuccess(user))
    //       unsubscribe()
    //     } else {
    //       dispatch(sessionLogout())
    //       unsubscribe()
    //     }
    //   })
  };
};

export const loginUser = (userName, passWord) => {
  return dispatch => {
    dispatch(sessionLoading());
    if (userName == '' && passWord == '') {
      dispatch(
        ToastActionsCreators.displayError('Lütfen boş alanları doldurunuz !!'),
      );
      dispatch(sessionError('Boş alan'));
    } else {
      if (passWord != 123) {
        dispatch(ToastActionsCreators.displayError('invalid Username or Password!!'));
        dispatch(sessionError('invalid Username or Password!!'));
      }
      else {
        let user = { user: userName, token: 'res.token' };
        Actions.Home();
        dispatch(sessionSuccess(user));
      }
      // loginRequest(userName, passWord)
      //   .then(res => res.json())
      //   .then(res => {
      //     if (res.result) {
      //       let user = {user: res.user[0], token: 'res.token'};
      //       Actions.Home();
      //       dispatch(sessionSuccess(user));
      //     } else {
      //       dispatch(ToastActionsCreators.displayError(res.message));
      //       dispatch(sessionError(res.message));
      //     }
      //   })
      //   .catch(err => {
      //     sessionError('HATA');
      //   });
    }
  };
};

export const signupUser = (email, password) => {
  return dispatch => {
    dispatch(sessionLoading());

    // firebaseService.auth()
    //   .createUserWithEmailAndPassword(email, password)
    //   .catch(error => {
    //     dispatch(sessionError(error.message));
    //   })

    // let unsubscribe = firebaseService.auth()
    //   .onAuthStateChanged(user => {
    //     if (user) {
    //       dispatch(sessionSuccess(user))
    //       unsubscribe()
    //     }
    //   })
  };
};

export const logoutUser = () => {
  return dispatch => {
    dispatch(sessionLoading());

    // firebaseService.auth()
    //   .signOut()
    //   .then(() => {
    //     dispatch(sessionLogout())
    //   })
    //   .catch(error => {
    //     dispatch(sessionError(error.message))
    //   })
  };
};

const sessionRestoring = () => ({
  type: types.SESSION_RESTORING,
});

const sessionLoading = () => ({
  type: types.SESSION_LOADING,
});

const sessionSuccess = user => ({
  type: types.SESSION_SUCCESS,
  user,
});

const sessionError = error => ({
  type: types.SESSION_ERROR,
  error,
});

const sessionLogout = () => ({
  type: types.SESSION_LOGOUT,
});
