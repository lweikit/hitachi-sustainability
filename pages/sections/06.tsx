import styles from '../../styles/sections/06.module.scss'

import { Row, Col } from 'reactstrap'

const S06 = () => {
  return (
    <div className={styles.container}>
      <Row>
        <Col xs={{ size: 4, offset: 4 }}>
          <h1>
            ASEAN
          </h1>
          pledges to secure 23% of the region’s primary energy from renewable sources by 2025
        </Col>
      </Row>
    </div>
  )
}

export default S06