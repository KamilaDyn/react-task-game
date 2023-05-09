import { useDispatch } from 'react-redux'
import { ChangeEvent, FormEvent, useState } from 'react'
import { useGetGames } from 'hook/useGetGames'
import { isStringOnlyNumbers } from 'helpers/utils'
import { Input } from 'components/atoms'
import { setPageNumber } from 'store/formReducer'

import styles from './SearchByPageForm.module.css'

function SearchByPageForm() {
  const [isValidInput, setIsValidInput] = useState('')
  const { fetchGames, pageNumber, limitPages } = useGetGames()
  const dispatch = useDispatch()

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value
    if (!isStringOnlyNumbers(inputValue)) {
      setIsValidInput('Write number pages min 1')
    } else if (Number(inputValue) > limitPages) {
      event.preventDefault()
      setIsValidInput(`There is limit pages to ${limitPages}`)
    } else {
      setIsValidInput('')
    }
    dispatch(setPageNumber(event.target.value))
  }

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault()
    if (pageNumber.length && !isValidInput) {
      fetchGames()
    }
  }

  return (
    <form className={styles.form}>
      <Input
        onChange={handleChange}
        value={pageNumber}
        isValid={isValidInput}
        onSubmit={handleSubmit}
        type='number'
        placeholder='page number'
        dataTest='page-number'
      />
    </form>
  )
}

export default SearchByPageForm
