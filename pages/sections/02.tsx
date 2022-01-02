import styles from '../../styles/sections/02.module.scss'

import { Row, Col } from 'reactstrap'

const S02 = () => {
  return (
    <div className={styles.container}>
      <Row>
        <Col xs={{ size: 6, offset: 3 }}>
          <h1>
            SOUTHEAST ASIA
          </h1>
          <object type="image/svg+xml" data="sections/02/stats-1.svg"/>
        </Col>
      </Row>
    </div>
  )
}

export default S02