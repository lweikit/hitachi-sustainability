import styles from '../../styles/sections/11.module.scss'

import { Row, Col } from 'reactstrap'

const S11 = () => {
  return (
    <div className={styles.container}>
      <Row>
        <Col xs={{ size: 10, offset: 1 }} md={{ size: 6, offset: 3 }}>
          <h3>
            Want to find out more?
          </h3>
          <div className={styles.box}></div>
          <div className={styles.box}></div>
          <div className={styles.box}></div>
          <a>References</a>
        </Col>
      </Row>
    </div>
  )
}

export default S11