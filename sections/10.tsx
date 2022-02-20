import styles from "../styles/sections/10.module.scss"

import { Row, Col } from "reactstrap"

const S10 = () => {
  return (
    <div className={styles.container}>
      <Row>
        <Col xs={{ size: 10, offset: 1 }} md={{ size: 6, offset: 3 }}>
          <h3>
            Sử dụng phân tích dữ liệu lớn ở Singapore
          </h3>
          <div className="video-container">
            <iframe src="https://www.youtube-nocookie.com/embed/J-Myvrbz0f8" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          </div>
          <Row>
            <Col sm={{ size: 10, offset: 1 }} md={{ size: 12, offset: 0 }}>
              <p>
                Chính phủ Singapore đã đặt ra tầm nhìn dài hạn là đạt mức phát thải bằng không, trong đó có bao gồm việc giảm ô nhiễm từ giao thông vận tải. Đây là lĩnh vực hiện chiếm đến 15% tổng lượng khí thải cacbon của cả nước.
              </p>
              <p>
                Go-Ahead Singapore đã tiến thêm một bước khi tận dụng phân tích dữ liệu lớn để tối ưu hóa hoạt động triển khai.Hitachi đã hỗ trợ Go-Ahead Singapore trong việc đo lường và nâng cao hiệu quả vận hành xe buýt thông qua việc phát triển và duy trì một cổng thông tin điện tử phân tích dữ liệu lớn tùy chỉnh.Cổng này cho phép nhân viên lập lịch trình nhanh chóng xác định các sự cố và giải quyết chúng kịp thời.Kết hợp với dữ liệu giao thông chính xác, Go-Ahead có thể triển khai đội xe buýt của mình hiệu quả hơn. Nhờ đó làm giảm thời gian chạy không tải của xe buýt trên những con phố tắc nghẽn và giảm lượng khí thải của xe.
              </p>
              <Row>
                <Col xs={{ size: 8, offset: 2 }}>
                  <object type="image/svg+xml" data="sections/10/case-3.svg"/>
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  )
}

export default S10