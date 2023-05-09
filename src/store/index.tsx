import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { formReducer } from './formReducer'

const rootReducer = combineReducers({
  form: formReducer,
})

const store = configureStore({
  reducer: rootReducer,
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store
