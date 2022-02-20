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
                Hitachi cam kết hỗ trợ các nỗ lực hướng đến sự bền vững của khu vực Đông Nam Á
              </h2>
              <Row>
                <Col xs={{ size: 6 }}>
                  <object type="image/svg+xml" data="sections/07/hands.svg"/>
                </Col>
              </Row>
            </Col>
            <Col xs={{ size: 12 }} md={{ size: 6 }} className={styles.spacing}>
              <p>
                Hitachi tin vào đổi mới xã hội, không ngừng nỗ lực nâng cao chất lượng cuộc sống của con người thông qua các giải pháp công nghệ tân tiến. Hitachi cũng là Đối tác chính của Hội nghị thượng đỉnh về biến đổi khí hậu của Liên Hợp Quốc 2021 (COP26). Để hỗ trợ cho hoạt động hướng đến một xã hội xanh trong khu vực, Hitachi sẽ đóng vai trò là lực lượng tiên phong dẫn đầu.
              </p>
              <p>
                Dưới đây là ba ví dụ trong đó những giải pháp và sản phẩm của Hitachi đã giúp làm nên những thay đổi trong xã hội:
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