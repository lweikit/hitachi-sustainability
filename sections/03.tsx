import styles from "../styles/sections/03.module.scss"

import { Row, Col } from "reactstrap"

const S03 = () => {
  return (
    <div className={styles.container}>
      <Row>
        <Col xs={{ size: 8, offset: 2 }} md={{ size: 6, offset: 3 }}>
          <object type="image/svg+xml" data="sections/03/water.svg" className={styles.svg}/>
          <p>
            Tất cả cho thấy một thực trạng phát triển đáng lo ngại, đặc biệt khi khu vực này lệ thuộc nặng nề vào nguồn tài nguyên không tái tạo làm nguồn cấp năng lượng chính. 
          </p>
          <p>
            Người dân Đông Nam Á đã và đang trực tiếp phải đối mặt với nguy cơ biến đổi khí hậu và môi trường xuống cấp với hàng loạt các cơn lũ lụt đe dọa sinh kế đã xảy ra trong năm 2021. Nếu không có những sự thay đổi đáng kể nào trong thập kỷ tới, các quốc gia Đông Nam Á sẽ phải chịu thiệt hại tương đương ở mức 22,5 tỷ USD trong GDP do hậu quả của lũ lụt.
          </p>
        </Col>
      </Row>
    </div>
  )
}

export default S03