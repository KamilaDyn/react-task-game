import { ChangeEvent, FormEvent } from 'react'
import { useDispatch } from 'react-redux'
import { Input } from 'components/atoms'
import { useGetGames } from 'hook/useGetGames'
import { setGameName } from 'store/formReducer'

import styles from './SearchGameForm.module.css'

function SearchGameForm() {
  const { fetchGames, gameName } = useGetGames()
  const dispatch = useDispatch()

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch(setGameName(event.target.value))
  }

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault()
    fetchGames()
  }

  return (
    <form className={styles.form}>
      <Input
        onChange={handleChange}
        value={gameName}
        isValid={''}
        onSubmit={handleSubmit}
        type='text'
        placeholder='game name'
      />
    </form>
  )
}

export default SearchGameForm
