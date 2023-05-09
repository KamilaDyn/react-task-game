import Header from './components/organism/Header'
import { GamesView } from './components/templates'

import styles from './App.module.css'

function App() {
  return (
    <div className={styles.app}>
      <Header />
      <main className={styles.main}>
        <GamesView />
      </main>
    </div>
  )
}

export default App
