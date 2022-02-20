import styles from "../styles/sections/08.module.scss"

import { Row, Col } from "reactstrap"

const S08 = () => {
  return (
    <div className={styles.container}>
      <Row>
        <Col xs={{ size: 10, offset: 1 }} md={{ size: 6, offset: 3 }}>
          <h3>
            Layanan ojek online di Thailand
          </h3>
          <div className="video-container">
            <iframe src="https://www.youtube-nocookie.com/embed/6TXWI5k06nw" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          </div>
          <Row>
            <Col sm={{ size: 10, offset: 1 }} md={{ size: 12, offset: 0 }}>
              <p className={styles.description}>
                Pasar pengantaran di Thailand diproyeksikan akan tumbuh sebesar 35% pada tahun 2020 berkat pertumbuhan e-commerce yang cepat. Pertumbuhan yang secepat itu memiliki implikasi serius pada upaya keberlanjutan, karena sektor transportasi menyumbang emisi gas rumah kaca kedua terbesar. Untuk mengurangi dampak lingkungan, Hitachi telah meluncurkan layanan ojek online di Thailand. Peluncuran sistem pelacakan langsungnya akan membuat perusahaan mampu mencari dan mereservasi kendaraan guna mengurangi jumlah truk kosong di jalanan Thailand. Optimalisasi sistem logistik membuat emisi karbon menjadi lebih rendah di Thailand, sebuah kontribusi langsung bagi sasaran dekarbonisasi COP26.
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