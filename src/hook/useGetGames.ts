import { useSelector, useDispatch } from 'react-redux'
import axios, { AxiosResponse } from 'axios'
import { setGames, setErrorMessage } from 'store/formReducer'
import { RootState } from 'store'
import { apiUrl } from 'apiUrl'
import { GamesData } from 'interfaces/GameInterfaces'

export function useGetGames() {
  const dispatch = useDispatch()
  const apiKeyValue = useSelector((state: RootState) => state.form.value)
  const games = useSelector((state: RootState) => state.form.games)
  const limitPages = useSelector((state: RootState) => state.form.count)
  const errorMessage = useSelector((state: RootState) => state.form.errorMessage)
  const pageNumber = useSelector((state: RootState) => state.form.pageNumber)
  const gameName = useSelector((state: RootState) => state.form.gameName)

  const fetchGames = () => {
    axios
      .get(`${apiUrl}${pageNumber}&${gameName.length && `search=${gameName}`}&key=${apiKeyValue}`)
      .then((response: AxiosResponse<GamesData>) => {
        if (response?.data?.results?.length > 0) {
          dispatch(setGames({ games: response?.data?.results, count: response?.data?.count }))
          dispatch(setErrorMessage(''))
        }
      })
      .catch((error: { message: string }) => {
        dispatch(setErrorMessage(`Invalid key ${error.message}`))
        dispatch(setGames({ games: [], count: 0 }))
      })
  }

  return {
    fetchGames,
    games,
    pageNumber,
    gameName,
    limitPages,
    errorMessage,
  }
}
