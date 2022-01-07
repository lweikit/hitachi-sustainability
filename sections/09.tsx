import styles from '../styles/sections/09.module.scss'

import { Row, Col } from 'reactstrap'

const S09 = () => {
  return (
    <div className={styles.container}>
      <Row>
        <Col xs={{ size: 10, offset: 1 }} md={{ size: 6, offset: 3 }}>
          <h3>
            Battery-Energy Storage in the Philippines
          </h3>
          <div className="video-container">
            <iframe src="https://www.youtube-nocookie.com/embed/jXPTUd_l5YU" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          </div>
          <Row>
            <Col sm={{ size: 10, offset: 1 }} md={{ size: 12, offset: 0 }}>
              <p>
                Hitachi and Manila Electric Co have installed a 2MW battery-energy storage system in Bulacan. Modular and movable in 40ft containers, these batteries offer stability for renewable energy sources, especially solar energy, which by nature, fluctuate throughout the day. This allows for the management of peak demand and energy, improved service reliability and power quality, and compensates for the intermittency of renewable energy generation.
              </p>
              <Row>
                <Col xs={{ size: 8, offset: 2 }}>
                  <object type="image/svg+xml" data="sections/09/case-2.svg"/>
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  )
}

export default S09