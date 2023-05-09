import { Logo } from 'components/atoms'
import { ApiKeyForm, SearchGameForm } from 'components/molecules'

import styles from './Header.module.css'
function Header() {
  return (
    <header className={styles.header}>
      <Logo />
      <SearchGameForm />
      <ApiKeyForm />
    </header>
  )
}

export default Header
