import styles from "../styles/sections/06.module.scss"

import { Row, Col } from "reactstrap"

const S06 = () => {
  return (
    <div className={styles.container}>
      <div className={styles.bg}/>
      <Row>
        <Col xs={{ size: 8, offset: 2 }} md={{ size: 4, offset: 4 }}>
          <h1 className={styles.header}>
            ภูมิภาคอาเซียน
          </h1>
          <p className={styles.description}>
            ให้คำมั่นที่จะเพิ่มแหล่งพลังงานหลักของภูมิภาคจากพลังงานหมุนเวียน เป็นร้อยละ 20 ภายในปีพ.ศ. 2568 
          </p>
        </Col>
      </Row>
    </div>
  )
}

export default S06