import { createSlice } from '@reduxjs/toolkit';

export const journalSlice = createSlice({
  name: 'journal',
  initialState: {
    isSaving: false,
    messageSaved: '',
    notes: [],
    activeNote: null,
    // activeNote: {
    //   id: '123ABC',
    //   title: '',
    //   body: '',
    //   date: 1234567,
    //   imageUrls: []
    // }
  },
  reducers: {
    savingNewNote: (state) => {
      state.isSaving = true
    },
    addNewEmptyNote: (state, { payload }) => {
      state.notes.push(payload)
      state.isSaving = false
    },
    setActiveNote: (state, { payload }) => {
      state.activeNote = payload
    },
    setNotes: (state, { payload }) => {
      state.notes = payload
    },
    setSaving: (state) => {
      state.isSaving = true
      // TODO: error or success message
    },
    updateNote: (state, { payload }) => {
      state.isSaving = false
      state.notes = state.notes.map(note => {
        if (note.id === payload.id) return payload
        return note
      })

      // TODO: Show update message
    },
    deleteNoteById: (state, action) => {

    },
  },
});

export const {
  addNewEmptyNote,
  deleteNoteById,
  savingNewNote,
  setActiveNote,
  setNotes,
  setSaving,
  updateNote,
} = journalSlice.actions;
