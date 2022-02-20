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
            Keberlanjutan adalah Hal Penting di Asia Tenggara
          </h1>
          <br/>
          <Row>
            <Col md={{ size: 10, offset: 1 }}>
              <p>
                Asia Tenggara masih siap menjadi salah satu kawasan dengan pertumbuhan tercepat di dunia. Akan tetapi, dengan kemajuan secepat itu, penting halnya untuk dengan cermat menyesuaikan pertumbuhannya secara berkelanjutan guna mempertimbangkan tuntutan lingkungan.
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
                Tantangan perubahan iklim di Asia Tenggara
              </h2>
            </Col>
            <Col xs={{ size: 12 }} md={{ size: 6 }}>
              <p>
                Asia Tenggara membentuk sekitar 20% dari keragaman hayati dunia dan 10% dari penduduknya. Tetap di jalurnya menuju tingkat pertumbuhan 4,8% di tahun 2021 meskipun ada krisis COVID-19, kawasan ini mempertahankan daya tariknya sebagai salah satu kawasan dengan pertumbuhan tercepat di dunia.
              </p>
              <p>
                Namun, pertumbuhan ini disertai dengan sebuah peringatan. Konsumsi energi Asia Tenggara telah melonjak lebih dari 80% sejak tahun 2000 dan diperkirakan naik dua kali lipat pada tahun 2040. Berbagai proyeksi mengungkap peningkatan dalam emisi karbon dioksida sekitar 60% pada saat itu.
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