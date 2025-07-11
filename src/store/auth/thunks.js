import { logoutFirebase, registerUserWithEmailPassword, signInUserWithEmailPassword, signInWithGoogle } from "../../firebase/providers"
import { clearNotesOnLogout } from "../journal"
import { checkingCredentials, login, logout } from "./"

export const checkingAuthentication = () => {
  return async (dispatch) => {
    dispatch(checkingCredentials())
  }
}

export const startGoogleSignIn = () => {
  return async (dispatch) => {
    dispatch(checkingCredentials())

    const result = await signInWithGoogle()

    if (!result.ok) return dispatch(logout(result.errorMessage))

    dispatch(login(result))
  }
}

export const startUserLogin = ({ email, password }) => {
  return async (dispatch) => {
    dispatch(checkingCredentials())

    const result = await signInUserWithEmailPassword({ email, password })

    if (!result.ok) return dispatch(logout(result))

    dispatch(login(result))
  }
}

export const startUserRegister = ({ email, password, displayName }) => {
  return async (dispatch) => {
    dispatch(checkingCredentials())

    const { ok, uid, photoURL, errorMessage } = await registerUserWithEmailPassword({ email, password, displayName })

    if (!ok) return dispatch(logout({ errorMessage }))

    dispatch(login({ uid, photoURL, email, displayName }))
  }
}

export const startLogout = () => {
  return async (dispatch) => {
    await logoutFirebase()
    dispatch(clearNotesOnLogout())
    dispatch(logout())
  }
}