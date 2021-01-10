import Swal from 'sweetalert2';
import {types} from "../types/types";
import {firebase, googleAuthProvider} from "../firebase/firebase-config";
import {uiFinishLoading, uiStartLoading} from "./ui";

export const startLoginEmailPassword = (email,password) => {
    return (dispatch) => {
        dispatch(uiStartLoading());
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then( ({user}) => {

                dispatch(
                    login(user.uid, user.displayName)
                )

                dispatch(uiFinishLoading());
            }).catch(error => {
                Swal.fire(
                    'Error',
                    error.message,
                    'error'
                );
                dispatch(uiFinishLoading());
        })
    }
}

export const startRegisterWithEmailPasswordName = (email, password, name) => {
    return (dispatch) => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(async ({user}) => {
                await  user.updateProfile({displayName: name});
                dispatch(
                    login(user.uid, user.displayName)
                )
            })
            .catch(e => {
                Swal.fire(
                    'Error',
                    e.message,
                    'error'
                );
            })
    }
}

export const startGoogleLogin = () => {
    return (dispatch) => {
        firebase.auth().signInWithPopup(googleAuthProvider)
            .then(({user}) => {
                dispatch(
                    login(user.uid, user.displayName)
                )
            });
    }
}

export const login = (uid, displayName) => {
    return {
        type: types.LOGIN,
        payload: {
            uid,
            displayName
        }
    }
}

export const startLogout = () => {
    return async (dispatch) => {
        await firebase.auth().signOut()
        dispatch(logout());
    }
}

export const logout = () => {
    return {
        type: types.LOGOUT
    }
}