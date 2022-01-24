import styles from "../styles/sections/11.module.scss"

import { Row, Col } from "reactstrap"
import CaseCard from "../components/CaseCard"

const S11 = () => {
  return (
    <div className={styles.container}>
      <Row>
        <Col xs={{ size: 10, offset: 1 }} md={{ size: 6, offset: 3 }}>
          <h3>
            Want to find out more?
          </h3>
          <CaseCard 
            number={'01'}
            description={'Vehicle-sharing Service in Thailand'}
            href={'https://www.eqmagpro.com/meralco-hitachi-set-up-2-mw-battery-energy-storage-system/'}
            img={'sections/11/vehicle-sharing-TH.png'}
          />
          <CaseCard 
            number={'02'}
            description={'Battery Energy Storage System in the Philippines'}
            href={'https://www.eqmagpro.com/meralco-hitachi-set-up-2-mw-battery-energy-storage-system/'}
            img={'sections/11/battery-energy-storage-PH.png'}
          />
          <CaseCard 
            number={'03'}
            description={'Big Data Analytics in Singapore'}
            href={'https://social-innovation.hitachi/en-sg/innovationhub/businessinnovations/'}
            img={'sections/11/big-data-analytics-SG.png'}
          />
          <a href="./references/references.pdf">
            References
          </a>
        </Col>
      </Row>
    </div>
  )
}

export default S11