import styles from "../styles/sections/11.module.scss"

import CaseCard from "../components/CaseCard"

const S11 = () => {
  return (
    <div className={styles.container}>
      <h3>
        Bạn muốn tìm hiểu thêm?
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
        Người giới thiệu
      </a>
    </div>
  )
}

const caseConfigs = [
  {
    description: 'Dịch vụ chia sẻ phương tiện ở Thái Lan',
    href: 'https://social-innovation.hitachi/en-sg/innovationhub/reduce-carbon-emissions',
    img: 'sections/11/vehicle-sharing-TH.png'
  },
  {
    description: 'Hệ thống lưu trữ năng lượng pin ở Philippines',
    href: 'https://social-innovation.hitachi/en-sg/solutions/energy/',
    img: 'sections/11/battery-energy-storage-PH.png'
  },
  {
    description: 'Phân tích dữ liệu lớn ở Singapore',
    href: 'https://social-innovation.hitachi/en-sg/innovationhub/businessinnovations/',
    img: 'sections/11/big-data-analytics-SG.png'
  },
]

export default S11