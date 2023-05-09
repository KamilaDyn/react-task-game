import IconGameController from 'assets/game-controller.png'
import styles from './Logo.module.css'
function Logo() {
  return (
    <div className={styles.logo}>
      <img className={styles.image} src={IconGameController} alt='icon game controller' />
      <h1>Games DB</h1>
    </div>
  )
}

export default Logo
