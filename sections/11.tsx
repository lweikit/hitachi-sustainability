import styles from "../styles/sections/11.module.scss"

import CaseCard from "../components/CaseCard"

const S11 = () => {
  return (
    <div className={styles.container}>
      <h3>
        Want to find out more?
      </h3>
      <div className={styles.cardWrap}>
      {
        caseConfigs.map((card, index) => (
          <CaseCard
            key={`case-card-${index}`}
            description={card.description}
            href={card.href}
            img={card.img}
          />
        ))
      }
      </div>
      <a href="./references/references.pdf">
        References
      </a>
    </div>
  )
}

const caseConfigs = [
  {
    description: 'Vehicle-sharing Service in Thailand',
    href: 'https://www.eqmagpro.com/meralco-hitachi-set-up-2-mw-battery-energy-storage-system/',
    img: 'sections/11/vehicle-sharing-TH.png'
  },
  {
    description: 'Battery Energy Storage System in the Philippines',
    href: 'https://www.eqmagpro.com/meralco-hitachi-set-up-2-mw-battery-energy-storage-system/',
    img: 'sections/11/battery-energy-storage-PH.png'
  },
  {
    description: 'Big Data Analytics in Singapore',
    href: 'https://social-innovation.hitachi/en-sg/innovationhub/businessinnovations/',
    img: 'sections/11/big-data-analytics-SG.png'
  },
]

export default S11