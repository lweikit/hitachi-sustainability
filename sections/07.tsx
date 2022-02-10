import styles from "../styles/sections/07.module.scss"

import { Row, Col } from "reactstrap"

const S07 = () => {
  return (
    <div className={styles.container}>
      <Row>
        <Col xs={{ size: 10, offset: 1 }} md={{ size: 8, offset: 2 }}>
          <Row>
            <Col xs={{ size: 12 }} md={{ size: 6 }} className={styles.spacing}>
              <h2>
                Hitachi Is Committed to Supporting Southeast Asia’s Sustainability Efforts
              </h2>
              <Row>
                <Col xs={{ size: 6 }}>
                  <object type="image/svg+xml" data="sections/07/hands.svg"/>
                </Col>
              </Row>
            </Col>
            <Col xs={{ size: 12 }} md={{ size: 6 }} className={styles.spacing}>
              <p>
                Hitachi believes in social innovation, continually striving to improve people’s quality of life through innovative technological solutions. It is also the Principal Partner of the 2021 United Nations Climate Change Conference (COP26). In support of the region’s march towards a green society, Hitachi is leading the way from the front.
              </p>
              <p>
                Below are three examples of how Hitachi’s technological offerings make difference:
              </p>
              <Row>
                <Col xs={{ size: 3 }}>
                  <object type="image/svg+xml" data="sections/07/arrows.svg"/> 
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  )
}

export default S07