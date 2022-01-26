import styled from 'styled-components'

interface Props { 
  description: string, 
  href: string, 
  img: string 
}

export default function CaseCard({
  description, 
  href, 
  img 
}: Props) {
  return (
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
  width: 100%;
  height: 300px;
  display: flex;
`;

const ContentWrap = styled.div<{ background: string }>`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  background-image: ${({ background }) => `url(${background})`};
  background-repeat: no-repeat;
  background-size: cover;
  transition: 0.5s ease-out;
`;

const Description = styled.span`
  font-weight: 700;
  font-size: 24px;
  line-height: 28pt;
`; 