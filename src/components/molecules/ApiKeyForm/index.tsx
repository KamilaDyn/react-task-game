import { ChangeEvent, FormEvent } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from 'store'
import { setValue, setErrorMessage } from 'store/formReducer'
import { Input } from 'components/atoms'
import { useGetGames } from 'hook/useGetGames'

import styles from './ApiKeyForm.module.css'

export enum FormActionTypes {
  SET_VALUE = 'SET_VALUE',
  SET_ERROR_MESSAGE = 'SET_ERROR_MESSAGE',
}

function ApiKeyForm() {
  const dispatch = useDispatch()
  const apiKeyValue = useSelector((state: RootState) => state.form.value)

  const { fetchGames } = useGetGames()
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch(setValue({ value: event.target.value, isValidValue: true }))
  }
  const errorMessage = useSelector((state: RootState) => state.form.errorMessage)

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault()
    if (apiKeyValue.trim() === '') {
      event.preventDefault()
      dispatch(setErrorMessage('Input value is not valid'))
    } else {
      fetchGames()
    }
  }
  return (
    <form className={styles.form}>
      <Input
        onChange={handleChange}
        value={apiKeyValue}
        isValid={errorMessage}
        onSubmit={handleSubmit}
        type='text'
        placeholder='api key'
        dataTest='api-key'
      />
    </form>
  )
}

export default ApiKeyForm
