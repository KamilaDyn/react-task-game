import { ChangeEvent, KeyboardEvent, FormEvent } from 'react'

import styles from './Input.module.css'

function Input({
  onChange,
  value,
  isValid,
  onSubmit,
  type,
  placeholder,
  dataTest,
}: {
  onChange: (event: ChangeEvent<HTMLInputElement>) => void
  value: string
  isValid: string
  onSubmit: (event: FormEvent) => void
  type: string
  placeholder: string
  dataTest?: string
}): JSX.Element {
  const handleKeyPress = (event: KeyboardEvent) => {
    if (event.key === 'Enter') {
      onSubmit(event)
    }
  }
  return (
    <>
      <input
        className={styles.input}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onKeyDown={handleKeyPress}
        data-testid={dataTest}
      />
      {isValid.trim() !== '' && <span className={styles.not_valid}> {isValid}</span>}
    </>
  )
}

export default Input
