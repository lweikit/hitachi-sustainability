import styles from "../styles/sections/10.module.scss"

import { Row, Col } from "reactstrap"

const S10 = () => {
  return (
    <div className={styles.container}>
      <Row>
        <Col xs={{ size: 10, offset: 1 }} md={{ size: 6, offset: 3 }}>
          <h3>
            Menggunakan analitik data besar di Singapura
          </h3>
          <div className="video-container">
            <iframe src="https://www.youtube-nocookie.com/embed/J-Myvrbz0f8" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          </div>
          <Row>
            <Col sm={{ size: 10, offset: 1 }} md={{ size: 12, offset: 0 }}>
              <p>
                Pemerintah Singapura telah menetapkan visi jangka panjang untuk mencapai emisi nol bersih, yang mencakup pengurangan polusi dari transportasi. Sektor ini saat ini menghasilkan 15% dari total emisi karbon negara ini.
              </p>
              <p>
                Go-Ahead Singapore telah melangkah lebih jauh dengan beralih ke analitik data besar untuk mengoptimalkan operasinya.Hitachi mendukung Go-Ahead Singapore dalam mengukur dan meningkatkan efisiensi operasi busnya melalui pengembangan dan pemeliharaan portal web analitik data besar yang disesuaikan.Dengan demikian penjadwalan staf dapat dilakukan untuk dengan cepat mengidentifikasi masalah dan menyelesaikannya secara cepat.Disertai dengan data lalu lintas yang akurat, Go-Ahead mampu mengerahkan bus mereka dengan lebih efektif dan efisien. Hal ini mengurangi waktu idle bus di jalanan yang padat serta menurunkan emisi gas buang kendaraan.
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