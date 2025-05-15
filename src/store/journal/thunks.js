import { addNewEmptyNote, savingNewNote, setActiveNote, setNotes, setSaving, updateNote } from "./"
import { createEmptyNote, loadNotes, saveNote } from "./helpers"

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

export const startSaveNote = () => {
  return async (dispatch, getState) => {

    dispatch(setSaving())

    const { uid } = getState().auth
    const { activeNote } = getState().journal

    await saveNote(uid, activeNote)

    dispatch(updateNote(activeNote))
  }
}