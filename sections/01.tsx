import styles from "../styles/sections/01.module.scss"

import { Row, Col } from "reactstrap"

const S01 = () => {
  return (
    <div className={styles.container}>
      <Row>
        <Col xs={{ size: 10, offset: 1 }}>
          <object type="image/svg+xml" data="sections/01/above-H1.svg"/>
        </Col>
        <Col xs={{ size: 10, offset: 1 }} md={{ size: 8, offset: 2 }}>
          <h1>
            Vấn đề phát triển bền vững ở Đông Nam Á
          </h1>
          <br/>
          <Row>
            <Col md={{ size: 10, offset: 1 }}>
              <p>
                Đông Nam Á đã và đang là một trong những khu vực tăng trưởng nhanh nhất thế giới. Tuy nhiên, đi kèm với tốc độ tăng trưởng nhanh chóng này là nhu cầu phải phát triển sao cho bền vững có xét đến các nhu cầu về môi trường.
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
                Thách thức biến đổi khí hậu ở Đông Nam Á
              </h2>
            </Col>
            <Col xs={{ size: 12 }} md={{ size: 6 }}>
              <p>
                Đông Nam Á chiếm khoảng 20% đa dạng sinh học và 10% dân số thế giới. Với đà tăng tưởng vẫn đạt mức 4,8% trong năm 2021 bất chấp đại dịch COVID-19, Đông Nam Á tiếp tục duy trì sức hấp dẫn của mình với tư cách là một trong những khu vực tăng trưởng nhanh nhất trên thế giới.
              </p>
              <p>
                Dù vậy, tốc độ tăng trưởng này đi kèm với một tình hình đáng báo động. Mức tiêu thụ năng lượng của Đông Nam Á đã tăng vọt thêm hơn 80% kể từ năm 2000 và dự kiến sẽ tăng gấp đôi vào trước năm 2040. Các kết quả dự báo cho thấy mức phát thải khí carbon dioxide (CO2) sẽ tăng khoảng 60% tính đến thời điểm đó.
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