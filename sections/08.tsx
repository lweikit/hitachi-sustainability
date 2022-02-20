import styles from "../styles/sections/08.module.scss"

import { Row, Col } from "reactstrap"

const S08 = () => {
  return (
    <div className={styles.container}>
      <Row>
        <Col xs={{ size: 10, offset: 1 }} md={{ size: 6, offset: 3 }}>
          <h3>
            Dịch vụ đi chung xe ở Thái Lan
          </h3>
          <div className="video-container">
            <iframe src="https://www.youtube-nocookie.com/embed/6TXWI5k06nw" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          </div>
          <Row>
            <Col sm={{ size: 10, offset: 1 }} md={{ size: 12, offset: 0 }}>
              <p className={styles.description}>
                Thị trường giao hàng của Thái Lan đã được dự báo tăng trưởng 35% trong năm 2020 nhờ vào tốc độ tăng trưởng nhanh chóng của mảng thương mại điện tử. Tốc độ tăng trưởng nhanh chóng này đã tạo ra tác động nghiêm trọng đối với các hoạt động bền vững khi mà mảng vận tải đứng thứ hai về mức phát thải khí nhà kính. Để giảm thiểu tác động môi trường, Hitachi đã ra mắt dịch vụ đi chung xe ở Thái Lan. Hệ thống theo dõi phương tiện trực tiếp sẽ cho phép các công ty định vị và đặt trước xe để giảm thiểu số xe tải trống chạy trên đường phố Thái Lan. Một hệ thống vận tải tối ưu đồng nghĩa sẽ giảm phát thải cacbon cho Thái Lan, điều đó đóng góp trực tiếp vào mục tiêu khử cacbon của COP26.
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