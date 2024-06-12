// import { useNavigate } from "react-router-dom"
import { HiArrowRightOnRectangle, HiOutlineMoon, HiOutlineUser } from "react-icons/hi2"
import styled from "styled-components"
import ButtonIcon from "../../UI/Button/ButtonIcon"

const StyledHeaderMenu = styled.ul`
  display: flex;
  gap: 0.4rem;
`

export default function HeaderMenu() {
  // const navigate = useNavigate();
  return (
    <StyledHeaderMenu>
      <li>
        <ButtonIcon>
        <HiOutlineUser/>
        </ButtonIcon>
      </li>
      <li>
        <ButtonIcon>
        <HiOutlineMoon/>
        </ButtonIcon>
      </li>
      <li>
        <ButtonIcon>
        <HiArrowRightOnRectangle/>
        </ButtonIcon>
      </li>
    </StyledHeaderMenu>
  )
}
