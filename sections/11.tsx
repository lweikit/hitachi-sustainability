import styles from "../styles/sections/11.module.scss"

import CaseCard from "../components/CaseCard"

const S11 = () => {
  return (
    <div className={styles.container}>
      <h3>
        ค้นหาเพิ่มเติม
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
        อ้างอิง
      </a>
    </div>
  )
}

const caseConfigs = [
  {
    description: 'การบริการแบ่งยานพาหนะในประเทศไทย',
    href: 'https://social-innovation.hitachi/en-sg/innovationhub/reduce-carbon-emissions',
    img: 'sections/11/vehicle-sharing-TH.png'
  },
  {
    description: 'ระบบกักเก็บพลังงานแบตเตอรี่ในประเทศฟิลิปปินส์',
    href: 'https://social-innovation.hitachi/en-sg/solutions/energy/',
    img: 'sections/11/battery-energy-storage-PH.png'
  },
  {
    description: 'การใช้ระบบวิเคราะห์ Big Dataในประเทศสิงคโปร์',
    href: 'https://social-innovation.hitachi/en-sg/innovationhub/businessinnovations/',
    img: 'sections/11/big-data-analytics-SG.png'
  },
]

export default S11