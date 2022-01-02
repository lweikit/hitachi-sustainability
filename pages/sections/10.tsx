import styles from '../../styles/sections/10.module.scss'

import { Row, Col } from 'reactstrap'

const S10 = () => {
  return (
    <div className={styles.container}>
      <Row>
        <Col xs={{ size: 6, offset: 3 }}>
          <h1>
            Using big data analytics in Singapore
          </h1>
          <div className="video-container">
            <iframe src="https://www.youtube-nocookie.com/embed/jXPTUd_l5YU" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          </div>
          <p>
            The Singapore government has set on a long-term vision of achieving net-zero emissions, which includes reducing pollution from transport. The sector currently accounts for up to 15% of the country’s total carbon emissions.
          </p>
          <p>
            Go-Ahead Singapore has stepped up by turning to big data analytics to optimise its operations. Hitachi supported Go-Ahead Singapore in measuring and improving their bus operation efficiency through the development and maintenance of a customised big data analytics web portal. This enabled scheduling staff to swiftly identify issues and resolve them promptly. Paired with accurate traffic data, Go-Ahead is able to deploy their buses more effectively. This reduces bus idling time in congested streets and lower vehicle exhaust emissions.
          </p>
          <div>
            Animation
          </div>
        </Col>
      </Row>
    </div>
  )
}

export default S10