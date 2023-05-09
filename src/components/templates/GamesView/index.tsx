import { Card, SearchByPageForm } from 'components/molecules'
import { useGetGames } from 'hook/useGetGames'

import styles from './GamesView.module.css'

function GamesView() {
  const { games } = useGetGames()

  return (
    <div className={styles.wrapper}>
      <div className={styles.cards}>
        {games.length ? (
          games?.map(({ background_image, id, name, parent_platforms }) => (
            <Card key={id} image={background_image} name={name} platforms={parent_platforms} />
          ))
        ) : (
          <p className={styles.no_element}>To see games, add your api key</p>
        )}
      </div>
      {games.length && (
        <div className={styles.inputContainer}>
          <SearchByPageForm />
        </div>
      )}
    </div>
  )
}

export default GamesView
