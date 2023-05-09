import styles from './Card.module.css'
interface Platforms {
  platform: {
    id: number
    name: string
    slug: string
  }
}
function Card({
  image,
  name,
  platforms,
}: {
  image: string
  name: string
  platforms: Platforms[]
}): JSX.Element {
  return (
    <div className={styles.card}>
      <img className={styles.card_img} src={image} alt='image title' />
      <div className={styles.card_content}>
        <h2 className={styles.card_title}>{name}</h2>
        <p>{platforms.map(({ platform }) => platform.name).join(', ')}</p>
      </div>
    </div>
  )
}

export default Card
