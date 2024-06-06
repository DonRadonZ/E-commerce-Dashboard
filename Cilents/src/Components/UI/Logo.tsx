import styled from "styled-components"

const StyledLogo = styled.div`
    text-align: center;
`;

const Img = styled.img`
height: 9.6rem;
width: auto;
`

const src = 'Tea_Time_Shop.png'

export default function Logo() {
  return (
    <StyledLogo>
        <Img src={src} alt="Logo"/>
    </StyledLogo>
  )
}
