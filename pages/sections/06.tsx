import styles from '../../styles/sections/06.module.scss'

import { Row, Col } from 'reactstrap'

const S06 = () => {
  return (
    <div className={styles.container}>
      <Row>
        <Col xs={{ size: 4, offset: 4 }}>
          <h1 className={styles.header}>
            ASEAN
          </h1>
          <Row>
            <Col xs={{ size: 12 }} md={{ size: 8, offset: 2 }}>
              <p>
                pledges to secure 23% of the region’s primary energy from renewable sources by 2025
              </p>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  )
}

export default S06