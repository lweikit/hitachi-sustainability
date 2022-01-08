import styles from "../styles/sections/05.module.scss"

import { Row, Col } from "reactstrap"

const S05 = () => {
  return (
    <div className={styles.container}>
      <Row>
        <Col xs={{ size: 10, offset: 1 }} md={{ size: 8, offset: 2 }}>
          <Row>
            <Col xs={{ size: 12 }} md={{ size: 6 }} className={styles.spacing}>
              <h2>
                Efforts for sustainability in Southeast Asia
              </h2>
            </Col>
            <Col xs={{ size: 12 }} md={{ size: 6 }} className={styles.spacing}>
              <Row>
                <Col xs={{ size: 6 }}>
                  <object type="image/svg+xml" data="sections/05/plug.svg"/>
                </Col>
              </Row>
            </Col>
          </Row>
          <Row>
            <Col xs={{ size: 12 }} md={{ size: 6 }} className={styles.spacing}>
              <p>
                Having recognised climate change as a regional threat, all ASEAN nations signed the Paris Agreement. ASEAN followed up with a target of securing 23% of the region’s primary energy from renewable sources by 2025.
              </p>
              <p>
                Large payoffs await the region as it pivots to a more sustainable approach. Southeast Asian economies could experience up to US$1 trillion in annual economic opportunities by 2030 from new growth areas for sustainability.
              </p>
              <p>
                There are multiple ways to unlock the region’s green economy. Transitioning from non-renewable energy into sustainable sources is an ongoing endeavour. Governments in Southeast Asia have prioritised solar power to displace fossil fuel in the most recent development plans – in particular, with rooftop solar power.
              </p>
            </Col>
            <Col xs={{ size: 12 }} md={{ size: 6 }} className={styles.spacing}>
              <p>
                Improving a nation’s logistics sector to become more efficient plays a key role as well. Digital supply chains, paired with automation and analytics, can help to lower carbon footprints.
              </p>
              <p>
                Using big data to re-invent a city into a green and connected sanctuary plays an important role in the region’s drive for sustainable growth. Southeast Asia is progressing well on this front, with smart cities flourishing in Singapore, Vietnam and Indonesia.
              </p>
              <p>
                These initiatives require long term commitment from the public sector as well as the private sector. This push for sustainable growth is a goal that can unite the entire region to improve lives for everyone for decades to come.
              </p>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  )
}

export default S05