import { addNewEmptyNote, savingNewNote, setActiveNote, setNotes } from "./"
import { createEmptyNote, loadNotes } from "./helpers"

export const startNewNote = () => {
  return async (dispatch, getState) => {

    dispatch(savingNewNote())

    const { uid } = getState().auth

    const newNote = await createEmptyNote(uid)

    dispatch(addNewEmptyNote(newNote))
    dispatch(setActiveNote(newNote))
  }
}

export const startLoadingNotes = () => {
  return async (dispatch, getState) => {
    const { uid } = getState().auth

    const notes = await loadNotes(uid)

    dispatch(setNotes(notes))
  }
}