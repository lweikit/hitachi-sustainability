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
                Upaya menuju keberlanjutan di Asia Tenggara
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
                Setelah mengakui adanya perubahan iklim sebagai ancaman regional, semua bangsa di ASEAN menandatangani Perjanjian Paris. ASEAN menindaklanjutinya dengan target mengamankan 23% dari energi primer di kawasan ini dari sumber-sumber terbarukan pada tahun 2025.
              </p>
              <p>
                Imbalan besar menanti kawasan ini karena berporos ke pendekatan yang lebih berkelanjutan. Ekonomi Asia Tenggara dapat merasakan kesempatan ekonomi tahunan hingga US$1 triliun pada tahun 2030 dari area-area pertumbuhan baru untuk keberlanjutan.
              </p>
              <p>
                Ada beberapa cara untuk membuka ekonomi hijau di kawasan ini. Upaya transisi dari energi tidak terbarukan menuju sumber-sumber berkelanjutan tengah berlangsung. Pemerintah di Asia Tenggara telah memprioritaskan tenaga surya untuk menggantikan bahan bakar fosil dalam rencana pembangunan terkininya – khususnya, dengan tenaga surya di atas atap.
              </p>
            </Col>
            <Col xs={{ size: 12 }} md={{ size: 6 }} className={styles.spacing}>
              <p>
                Peningkatan sektor logistik negara agar menjadi lebih efisien juga memainkan peran penting. Rantai suplai digital, disertai dengan otomatisasi dan analitik, dapat membantu menurunkan emisi karbon.
              </p>
              <p>
                Penggunaan data besar untuk ciptakan sebuah kota menjadi tempat perlindungan yang hijau dan terhubung berperan penting dalam mendorong pertumbuhan berkelanjutan di kawasan ini. Asia Tenggara mengalami kemajuan yang baik di bidang ini, dengan menjamurnya kota-kota pintar di Singapura, Vietnam, dan Indonesia.
              </p>
              <p>
                Inisiatif ini memerlukan komitmen jangka panjang dari sektor publik maupun sektor swasta. Dorongan menuju pertumbuhan berkelanjutan ini merupakan sasaran yang dapat menyatukan seluruh kawasan untuk meningkatkan kehidupan bagi setiap orang dalam beberapa dekade ke depan.
              </p>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  )
}

export default S05