import styled from 'styled-components'
import styles from "../styles/sections/11.module.scss"

import { Row, Col } from "reactstrap"
import CaseCard from "../components/CaseCard"

const S11 = () => {
  return (
    // <div className={styles.container}>
    //   <Row>
    //     <Col xs={{ size: 10, offset: 1 }} md={{ size: 6, offset: 3 }}>
    //       <h3>
    //         Want to find out more?
    //       </h3>
    //       <CaseCard 
    //         description="Vehicle-sharing Service in Thailand"
    //         href={'https://www.eqmagpro.com/meralco-hitachi-set-up-2-mw-battery-energy-storage-system/'}
    //         img={'sections/11/vehicle-sharing-TH.png'}
    //       />
    //       <CaseCard 
    //         description={'Battery Energy Storage System in the Philippines'}
    //         href={'https://www.eqmagpro.com/meralco-hitachi-set-up-2-mw-battery-energy-storage-system/'}
    //         img={'sections/11/battery-energy-storage-PH.png'}
    //       />
    //       <CaseCard 
    //         number={'03'}
    //         description={'Big Data Analytics in Singapore'}
    //         href={'https://social-innovation.hitachi/en-sg/innovationhub/businessinnovations/'}
    //         img={'sections/11/big-data-analytics-SG.png'}
    //       />
    //       <a href="./references/references.pdf">
    //         References
    //       </a>
    //     </Col>
    //   </Row>
    // </div>
    <LayoutStyled>
      <Title>Want to find out more?</Title>
      <CardWrap>
        {cardsConfig.map((card, index) => (
          <CaseCard  
            key={`case-card-${index}`}
            description={card.description}
            href={card.href} 
            img={card.img}  
          />
        ))}
      </CardWrap>


    </LayoutStyled>
  )
}

const cardsConfig = [
  {
    description: 'Vehicle-sharing Service in Thailand',
    href: 'https://www.eqmagpro.com/meralco-hitachi-set-up-2-mw-battery-energy-storage-system/',
    img: 'sections/11/vehicle-sharing-TH.png'
  },
  {
    description: 'Vehicle-sharing Service in Thailand',
    href: 'https://www.eqmagpro.com/meralco-hitachi-set-up-2-mw-battery-energy-storage-system/',
    img: 'sections/11/vehicle-sharing-TH.png'
  },
  {
    description: 'Vehicle-sharing Service in Thailand',
    href: 'https://www.eqmagpro.com/meralco-hitachi-set-up-2-mw-battery-energy-storage-system/',
    img: 'sections/11/vehicle-sharing-TH.png'
  }
];

const LayoutStyled = styled.div`
  display: flex;
  width: 100%;
  padding: 40px 20px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h3`
  
`

const CardWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 480px;
  row-gap: 20px;

  @media only screen and (max-width: 480px) {
    width: 100% !important;
  }
`

export default S11