import styles from '../../styles/sections/02.module.scss'

import { Row, Col } from 'reactstrap'

const S02 = () => {
  return (
    <div className={styles.container}>
      <Row>
        <h1 className={styles.header}>
          SOUTHEAST ASIA
        </h1>
        <Col xs={{ size: 8, offset: 2 }}>
          <object type="image/svg+xml" data="sections/02/stats-1.svg"/>
        </Col>
      </Row>
    </div>
  )
}

export default S02