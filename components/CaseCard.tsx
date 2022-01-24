import styles from '../styles/components/CaseCard.module.scss'

export default function CaseCard({ number, description, href, img }) {
  return (
    <div className={styles.container}>
      <div className={styles.image}>
        <img src={img}/>
      </div>
      <div className={styles.cover}>
        { number }
      </div>
      <div className={styles.overlay}>
        <div className={styles.description}>
          { description }
        </div>
        <div>
          <a href={href} target="_blank">
            Learn More 
          </a>
        </div>
      </div>
    </div>
  )
}