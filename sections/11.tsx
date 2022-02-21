import styles from "../styles/sections/11.module.scss"

import CaseCard from "../components/CaseCard"

const S11 = () => {
  return (
    <div className={styles.container}>
      <h3>
        Ingin tahu lebih banyak?
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
        Referensi
      </a>
    </div>
  )
}

const caseConfigs = [
  {
    description: 'Layanan berbagi kendaraan di Thailand',
    href: 'https://social-innovation.hitachi/en-sg/innovationhub/reduce-carbon-emissions',
    img: 'sections/11/vehicle-sharing-TH.png'
  },
  {
    description: 'Sistem Penyimpanan Energi Baterai di Filipina',
    href: 'https://social-innovation.hitachi/en-sg/solutions/energy/',
    img: 'sections/11/battery-energy-storage-PH.png'
  },
  {
    description: 'Analisis Data Besar di Singapura',
    href: 'https://social-innovation.hitachi/en-sg/innovationhub/businessinnovations/',
    img: 'sections/11/big-data-analytics-SG.png'
  },
]

export default S11