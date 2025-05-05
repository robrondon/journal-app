import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
  //nombre del slice con el que se vincula al store
  name: 'auth',
  //declaracion del estado inicial de las variables
  initialState: {
    status: 'checking', // not-authenticated, 'authenticated
    uid: null,
    email: null,
    displayName: null,
    photoURL: null,
    errorMessage: null
  },
  reducers: {
    login: (state, action) => {

    },
    logout: (logout, payload) => {

    },
    checkingCredentials: (state) => {

    }
  },
});

export const { login, logout, checkingCredentials } = authSlice.actions;
