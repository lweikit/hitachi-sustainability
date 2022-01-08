import styles from "../styles/sections/08.module.scss"

import { Row, Col } from "reactstrap"

const S08 = () => {
  return (
    <div className={styles.container}>
      <Row>
        <Col xs={{ size: 10, offset: 1 }} md={{ size: 6, offset: 3 }}>
          <h3>
            Vehicle sharing service in Thailand
          </h3>
          <div className="video-container">
            <iframe src="https://www.youtube-nocookie.com/embed/jXPTUd_l5YU" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          </div>
          <Row>
            <Col sm={{ size: 10, offset: 1 }} md={{ size: 12, offset: 0 }}>
              <p className={styles.description}>
                Thailand’s delivery market was projected to grow by 35% in 2020 due to the rapid growth of e-commerce. Such rapid growth has serious implications for sustainability efforts, as the transport sector accounts for the second largest emission of greenhouse gases. To mitigate the environmental impacts, Hitachi has launched a vehicle sharing service in Thailand. The launch of its live-tracking system will enable companies to locate and reserve vehicles to reduce the number of empty trucks on Thai roads. An optimised logistics system means lower carbon emissions in Thailand, a direct contribution to the decarbonisation goals of COP26.
              </p>
              <Row>
                <Col xs={{ size: 8, offset: 2 }}>
                  <object type="image/svg+xml" data="sections/08/case-1.svg"/>
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  )
}

export default S08