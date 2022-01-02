import styles from '../../styles/sections/07.module.scss'

import { Row, Col } from 'reactstrap'

const S07 = () => {
  return (
    <div className={styles.container}>
      <Row>
        <Col xs={{ size: 6, offset: 3 }}>
          <Row>
            <Col>
              <h1>
                Hitachi is commited to supporting Southeast Asia’s sustainability efforts
              </h1>
            </Col>
            <Col>
              <p>
                Hitachi believes in social innovation, continually striving to improve people’s quality of life through innovative technological solutions. It is also the Principal Partner of the 2021 United Nations Climate Change Conference (COP26). In support of the region’s march towards a green society, Hitachi is leading the way from the front.
              </p>
              <p>
                Below are three examples of how Hitachi’s technological offerings make difference:
              </p> 
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  )
}

export default S07