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
                Nỗ lực vì sự bền vững ở Đông Nam Á
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
                Nhận định biến đổi khí hậu là mối đe dọa của cả khu vực, tất cả các quốc gia ASEAN đều đã ký kết Hiệp định Paris. ASEAN tiếp tục đặt mục tiêu nâng tỷ trọng năng lượng chính có nguồn gốc từ tài nguyên tái tạo lên 23% vào trước 2025.
              </p>
              <p>
                Nhiều kết quả tích cực đang chờ đón khi khu vực Đông Nam Á bắt đầu đi theo hướng phát triển bền vững hơn. Các nền kinh tế ở khu vực Đông Nam Á mỗi năm có thể sẽ thu về các cơ hội kinh tế trị giá 1 nghìn tỷ USD vào trước năm 2030 từ những lĩnh vực tăng trưởng bền vững mới.
              </p>
              <p>
                Có nhiều cách thức để khai phá nền kinh tế xanh của khu vực. Chuyển dịch từ năng lượng không tái tạo sang tài nguyên bền vững là một nỗ lực không ngừng. Trong kế hoạch phát triển mới đây nhất, chính phủ các nước Đông Nam Á đã ưu tiên triển khai năng lượng mặt trời để thay thế nhiên liệu hóa thạch – mà cụ thể là năng lượng mặt trời đặt trên mái nhà.
              </p>
            </Col>
            <Col xs={{ size: 12 }} md={{ size: 6 }} className={styles.spacing}>
              <p>
                Việc nâng cao hoạt động hiệu quả hơn trong lĩnh vực vận tải của các quốc gia cũng đóng một vai trò quan trọng. Chuỗi cung ứng kỹ thuật số, kết hợp với tự động hóa và phân tích, có thể giúp giảm lượng phát thải cacbon.
              </p>
              <p>
                Việc sử dụng dữ liệu lớn để tái cấu trúc tạo nên các thành phố xanh và kết nối cũng đóng vai trò quan trọng, tạo nên động lực phát triển bền vững cho khu vực.Đông Nam Á đang phát triển mạnh mẽ trên lĩnh vực này, với nhiều thành phố thông minh phát triển nhanh chóng ở Singapore, Việt Nam và Indonesia.
              </p>
              <p>
                Các sáng kiến này đòi hỏi sự cam kết lâu dài từ khu vực công lẫn khu vực tư nhân. Chiến dịch thúc đẩy phát triển bền vững này là một mục tiêu có khả năng đoàn kết toàn bộ khu vực để cùng chung tay nâng cao đời sống cho tất cả người dân trong những thập kỷ tới.
              </p>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  )
}

export default S05