import { addNewEmptyNote, deleteNoteById, savingNewNote, setActiveNote, setNotes, setPhotosToActiveNote, setSaving, updateNote } from "./"
import { createEmptyNote, deleteNote, fileUpload, loadNotes, saveNote } from "./helpers"

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

export const startUploadingFiles = (files = []) => {
  return async (dispatch) => {
    dispatch(setSaving())

    const fileUploadPromises = []

    for (const file of files) {
      fileUploadPromises.push(fileUpload(file))
    }

    const photosURls = await Promise.all(fileUploadPromises)

    dispatch(setPhotosToActiveNote(photosURls))
  }
}

export const startDeletingNote = () => {
  return async (dispatch, getState) => {
    dispatch(setSaving())

    const { uid } = getState().auth
    const { activeNote } = getState().journal

    await deleteNote(uid, activeNote.id)

    console.log('vamos a borrar la nota', uid, activeNote)

    dispatch(deleteNoteById(activeNote.id))

  }
}