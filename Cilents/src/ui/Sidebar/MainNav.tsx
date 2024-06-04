import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

const NavList = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
`

const StyledNavLink = styled(NavLink)`
    &:link,
    &:visited {
        display: flex;
        align-items: center;
        gap: 1.2rem;

        color: var(--color-grey-600);
        font-size: 1.6rem;
        font-weight: 500;
        padding: 1.2rem 2.4rem;
        transition: all 0.3s;
    }
    
`

export default function MainNav() {
  return (
    <nav>
        <NavList>
            <li>
                <StyledNavLink to="/dashboard">
                <span>Home</span>
                </StyledNavLink>
            </li>

        </NavList>
    </nav>
  )
}
