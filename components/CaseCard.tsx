import styled from 'styled-components';
import styles from '../styles/components/CaseCard.module.scss'

interface Props { 
  number?: string, 
  description: string, 
  href: string, 
  img: string 
}

export default function CaseCard({
  number,
  description, 
  href, 
  img
}: Props) {
  return (
    // <CaseCardStyled>
      <CaseCardStyled 
        href={href}
        target="_blank">
        <ContentWrap background={img}>
          <Description>
            {description}
          </Description>
        </ContentWrap>
      </CaseCardStyled>
  )
}

const CaseCardStyled = styled.a`
  display: flex;
  width: 100%;
  height: 300px;
`;

const ContentWrap = styled.div<{ background: string }>`
  position: relative;
  display: flex;
  width: 100%;
  height: 100%;
  background-color: utils.$c_green_99;
  background-image: ${({ background }) => `url(${background})`};
  background-repeat: no-repeat;
  background-size: cover;
  transition: 0.5s ease-out;
`;

const Description = styled.span`
  position: absolute;
  bottom: 30px;

`;