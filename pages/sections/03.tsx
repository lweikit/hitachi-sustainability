import styles from '../../styles/sections/03.module.scss'

import { Row, Col } from 'reactstrap'

const S03 = () => {
  return (
    <div className={styles.container}>
      <Row>
        <Col xs={{ size: 6, offset: 3 }}>
          <p>
            This is a worrying development given the region’s overwhelming dependence on non-renewable sources for primary energy supply.
          </p>
          <p>
            The people of Southeast Asia have seen first-hand the threat of climate change and environmental degradation, as multiple floods threatened livelihoods in 2021. Without significant changes in the next decade, Southeast Asian nations will incur a loss equivalent to US$22.5 billion in GDP as a result of flooding.
          </p>
        </Col>
      </Row>
    </div>
  )
}

export default S03