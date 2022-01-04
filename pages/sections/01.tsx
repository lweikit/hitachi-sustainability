import styles from '../../styles/sections/01.module.scss'

import { Row, Col } from 'reactstrap'
import { cp } from 'fs'

const S01 = () => {
  return (
    <div className={styles.container}>
      <Row>
        <Col xs={{ size: 10, offset: 1 }}>
          <object type="image/svg+xml" data="sections/01/above-H1.svg"/>
        </Col>
        <Col xs={{ size: 10, offset: 1 }} md={{ size: 8, offset: 2 }}>
          <h1>
            SUSTAINABILITY MATTERS IN SOUTHEAST ASIA
          </h1>
          <Row>
            <Col md={{ size: 10, offset: 1 }}>
              <p>
                Southeast Asia remains poised to be one of the fastest-growing regions in the world. However, with such rapid progress comes the need to carefully calibrate this growth sustainably by taking into account the needs of the environment.
              </p>
            </Col>
          </Row>
        </Col>
        <Col xs={{ size: 10, offset: 1 }}>
          <object type="image/svg+xml" data="sections/01/below-H1.svg"/>
        </Col>

        <div className={styles.line}/>

        <Col xs={{ size: 10, offset: 1 }} md={{ size: 8, offset: 2 }}>
          <Row className={styles.containerText}>
            <Col xs={{ size: 12 }} md={{ size: 6 }}>
              <Row>
                <Col xs={{ size: 6 }}>
                  <object type="image/svg+xml" data="sections/01/trees.svg"/>
                </Col>
              </Row>
              <h2>
                Climate change challenges of Southeast Asia
              </h2>
            </Col>
            <Col xs={{ size: 12 }} md={{ size: 6 }}>
              <p>
                Southeast Asia makes up about 20% of the world’s biodiversity and 10% of its population. Remaining on course for 4.8% growth in 2021 despite COVID-19, it retains its allure as one of the fastest-growing regions in the world.
              </p>
              <p>
                This growth however, comes with a warning. Southeast Asia’s energy consumption has jumped by more than 80% since 2000 and is expected to double by 2040. Projections reveal an increase in carbon dioxide emissions of about 60% by then.
              </p>
              <Row>
                <Col xs={{ size: 3 }}>
                  <object type="image/svg+xml" data="sections/01/arrows.svg"/>
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  )
}

export default S01