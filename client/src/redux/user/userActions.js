import UserActionTypes from './userTypes';

// export const setCurrentUser = (user) => ({
//   type: UserActionTypes.SET_CURRENT_USER,
//   payload: user,
// });

//For Google SignIn
export const googleSignInStart = () => ({
  type: UserActionTypes.GOOGLE_SIGN_IN_START,
});

export const signInSuccess = (user) => ({
  type: UserActionTypes.SIGN_IN_SUCCESS,
  payload: user,
});

export const signInFailure = (error) => ({
  type: UserActionTypes.SIGN_IN_FAILURE,
  payload: error,
});

//For Email-Pass SignIn
export const emailSignInStart = (emailAndPassword) => ({
  type: UserActionTypes.EMAIL_SIGN_IN_START,
  payload: emailAndPassword,
});

// export const emailSignInSuccess = (user) => ({
//   type: UserActionTypes.EMAIL_SIGN_IN_SUCCESS,
//   payload: user,
// });

// export const emailSignInFailure = (error) => ({
//   type: UserActionTypes.EMAIL_SIGN_IN_FAILURE,
//   payload: error,
// });

/*------PERSISTING USER SESSION--------*/

export const checkUserSession = () => ({
  type: UserActionTypes.CHECK_USER_SESSION,
});

/*---------SIGNING OUT USER-----------*/

export const signOutStart = () => ({
  type: UserActionTypes.SIGN_OUT_START,
});

export const signOutSuccess = () => ({
  type: UserActionTypes.SIGN_OUT_SUCCESS,
});

export const signOutFailure = (error) => ({
  type: UserActionTypes.SIGN_OUT_FAILURE,
  payload: error,
});

/*---------SIGNING UP USER-----------*/

export const signUpStart = (userCredentials) => ({
  //email, password and displayName
  type: UserActionTypes.SIGN_UP_START,
  payload: userCredentials,
});

export const signUpSuccess = ({ user, additionalData }) => ({
  type: UserActionTypes.SIGN_UP_SUCCESS,
  payload: { user, additionalData },
});

export const signUpFailure = (error) => ({
  type: UserActionTypes.SIGN_UP_FAILURE,
  payload: error,
});
