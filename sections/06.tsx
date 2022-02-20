import styles from "../styles/sections/06.module.scss"

import { Row, Col } from "reactstrap"

const S06 = () => {
  return (
    <div className={styles.container}>
      <div className={styles.bg}/>
      <Row>
        <Col xs={{ size: 8, offset: 2 }} md={{ size: 4, offset: 4 }}>
          <h1 className={styles.header}>
            ASEAN
          </h1>
          <p className={styles.description}>
            cam kết nâng tỷ trọng năng lượng chính có nguồn gốc từ năng lượng tái tạo của khu vực lên 23% trước năm 2025 
          </p>
        </Col>
      </Row>
    </div>
  )
}

export default S06