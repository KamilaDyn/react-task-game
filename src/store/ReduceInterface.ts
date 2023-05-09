import { PayloadAction } from '@reduxjs/toolkit'
import { Games } from '../interfaces/GameInterfaces'

export enum FormActionTypes {
  SET_VALUE = 'SET_VALUE',
  SET_ERROR_MESSAGE = 'SET_ERROR_MESSAGE',
}

interface SetValueAction extends PayloadAction<{ value: string; isValidValue: boolean }> {
  type: FormActionTypes.SET_VALUE
}
export interface FormState {
  value: string
  isValidValue: boolean
  errorMessage: string
  games: Games[]
  count: number
  pageNumber: string
  gameName: string
}

interface SetErrorMessageAction extends PayloadAction<{ errorMessage: string }> {
  type: FormActionTypes.SET_ERROR_MESSAGE
}

export type FormAction = SetValueAction | SetErrorMessageAction
export interface FormErrorMessage {
  errorMessage: string
}
export interface FormApiKey {
  value: string
  isValidValue: boolean
}
export interface GamesData {
  games: Games[]
  count: number
}
