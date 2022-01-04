import styles from '../../styles/sections/02.module.scss'

import { Row, Col } from 'reactstrap'
import { Parallax } from 'react-parallax'

const S02 = () => {
  return (
    <div className={styles.container}>
      {/* <Parallax
        style={{
          height: '13030px',
        }}
        renderLayer={percentage => {
          // stats-1 [25%-50%]
          // console.log(percentage);
          let mapSize = Math.min(percentage**10, 1);
          let stats1 = Math.sqrt(
            (1 <= percentage && percentage <= 1.15 || 0) && 
            ((percentage - 1) / .15) ||
            (1.15 <= percentage && percentage <= 1.30 || 0) &&
            (.15 / (percentage - 1))
          );
          let stats2 = Math.sqrt(
            (1.30 <= percentage && percentage <= 1.45 || 0) && 
            ((percentage - 1.3) / .15) ||
            (1.45 <= percentage && percentage <= 1.60 || 0) &&
            (.15 / (percentage - 1.3))
          );
          let stats3 = Math.sqrt(
            (1.60 <= percentage && percentage <= 2 || 0) && 
            ((percentage - 1.6) / .15)
          );
          console.log(mapSize);
          // console.log(stats1);
          // console.log(stats2);
          // console.log(stats3);
          return (
            <div>
              <object
                type="image/svg+xml"
                data="sections/02/map-full-size.svg"
                style={{
                  position: 'absolute',
                  // left: '50%',
                  width: `${mapSize * 100}%`
                  // transform: `translate(0%, ${50+(percentage-1)*2037}%)`,
                  // opacity: stats1,
                }}
              />
              <object
                type="image/svg+xml"
                data="sections/02/stats-1.svg"
                style={{
                  position: 'absolute',
                  transform: `translate(0%, ${50+(percentage-1)*2037}%)`,
                  opacity: stats1,
                }}
              />
              <object
                type="image/svg+xml"
                data="sections/02/stats-2.svg"
                style={{
                  position: 'absolute',
                  transform: `translate(0%, ${50+(percentage-1)*2037}%)`,
                  opacity: stats2,
                  // opacity: 0,
                }}
              />
              <object
                type="image/svg+xml"
                data="sections/02/stats-3.svg"
                style={{
                  position: 'absolute',
                  transform: `translate(0%, ${50+(percentage-1)*2037}%)`,
                  opacity: stats3,
                  // opacity: 0,
                }}
              />
            </div>
          )
        }}
      /> */}

      <div className={styles.stats1}></div>
      <div className={styles.stats2}></div>
      <div className={styles.stats3}></div>

      {/* <Row>
        <h1 className={styles.header}>
          SOUTHEAST ASIA
        </h1>
        <Col xs={{ size: 8, offset: 2 }}>
        </Col>
      </Row> */}
    </div>
  )
}

export default S02