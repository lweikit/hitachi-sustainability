import styles from "../styles/sections/09.module.scss"

import { Row, Col } from "reactstrap"

const S09 = () => {
  return (
    <div className={styles.container}>
      <Row>
        <Col xs={{ size: 10, offset: 1 }} md={{ size: 6, offset: 3 }}>
          <h3>
            Hệ thống lưu trữ năng lượng bằng pin ở Philippines
          </h3>
          <div className="video-container">
            <iframe src="https://www.youtube-nocookie.com/embed/y7biHnt-v9k" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          </div>
          <Row>
            <Col sm={{ size: 10, offset: 1 }} md={{ size: 12, offset: 0 }}>
              <p>
                Hitachi cùng Manila Electric Co đã lắp đặt hệ thống lưu trữ năng lượng pin 2MW ở Bulacan. Có thiết kế dạng mô-đun, dễ dàng di chuyển và đặt trong các thùng chứa 40ft, các pin này mang đến sự ổn định cho nguồn năng lượng tái tạo, đặc biệt là năng lượng mặt trời, vốn là loại năng lượng biến đổi trong suốt ngày. Giải pháp này cho phép quản lý các tình huống mà nhu cầu năng lượng tăng cao điểm, giúp tăng tính ổn định cho dịch vụ và chất lượng điện, đồng thời bù đắp cho sự gián đoạn của sản xuất năng lượng tái tạo.
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