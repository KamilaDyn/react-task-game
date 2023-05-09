import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Reducer } from 'redux'
import { GamesData, FormAction, FormApiKey, FormState } from './ReduceInterface'

const initialState: FormState = {
  value: '',
  isValidValue: true,
  errorMessage: '',
  games: [],
  count: 0,
  pageNumber: '1',
  gameName: '',
}

export const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    setValue: (state, action: PayloadAction<FormApiKey>) => {
      state.value = action.payload.value
      state.isValidValue = action.payload.value.trim() !== ''
    },
    setErrorMessage: (state, action: PayloadAction<string>) => {
      state.errorMessage = action.payload
    },
    setGames: (state, actions: PayloadAction<GamesData>) => {
      state.games = actions.payload.games
      state.count = Math.ceil(actions.payload.count / 10)
    },
    setPageNumber: (state, actions: PayloadAction<string>) => {
      state.pageNumber = actions.payload
    },
    setGameName: (state, actions: PayloadAction<string>) => {
      state.gameName = actions.payload
    },
  },
})

export const { setValue, setErrorMessage, setGames, setPageNumber, setGameName } = formSlice.actions
export const formReducer: Reducer<FormState, FormAction> = formSlice.reducer
