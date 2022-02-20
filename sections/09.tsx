import styles from "../styles/sections/09.module.scss"

import { Row, Col } from "reactstrap"

const S09 = () => {
  return (
    <div className={styles.container}>
      <Row>
        <Col xs={{ size: 10, offset: 1 }} md={{ size: 6, offset: 3 }}>
          <h3>
            Sistem Penyimpanan Energi Baterai di Filipina
          </h3>
          <div className="video-container">
            <iframe src="https://www.youtube-nocookie.com/embed/y7biHnt-v9k" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          </div>
          <Row>
            <Col sm={{ size: 10, offset: 1 }} md={{ size: 12, offset: 0 }}>
              <p>
                Hitachi dan Manila Electric Co telah memasang sistem penyimpanan energi baterai 2MW di Bulacan. Bersifat modular dan dapat dipindahkan dalam kontainer 40ft, baterai ini menawarkan stabilitas sumber energi, khususnya energi surya, yang secara alami berfluktuasi sepanjang hari. Dengan demikian, manajemen permintaan puncak dan energi dapat dilakukan, yang meningkatkan keandalan layanan dan kualitas daya, serta mengompensasi terputus-putusnya energi terbarukan yang dihasilkan.
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