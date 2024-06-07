import { FiCoffee } from 'react-icons/fi';
import { HiOutlineCube, HiOutlineHome, HiOutlinePresentationChartLine, HiOutlineUserGroup } from 'react-icons/hi2';
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

        color: var(--color-gray-600);
        font-size: 1.6rem;
        font-weight: 500;
        padding: 1.2rem 2.4rem;
        transition: all 0.3s;
    }

    &:hover,
    &:active,
    &.active:link,
    &.active.visited {
        color: var(--color-gray-800);
        background-color: var(--color-gray-50);
        border-radius: var(--border-radius-sm);
    }

    & svg {
        width: 2.4rem;
        height: 2.4rem;
        color: var(--color-gray-400);
        transition: all 0.3s;
    }

    &:hover svg,
    &:active svg,
    &.active:link svg,
    &.active:visited svg {
        color: var(--color-brand-600);
    }   
`;

export default function MainNav() {
  return (
    <nav>
        <NavList>
            <li>
                <StyledNavLink to="/dashboard">
                    <HiOutlineHome/>
                <span>Home</span>
                </StyledNavLink>
            </li>
            <li>
                <StyledNavLink to="/salesreport">
                <HiOutlinePresentationChartLine />
                    <span>Sales Report</span>
                </StyledNavLink>
              </li>
              <li>
                  <StyledNavLink to="/product">
                      <FiCoffee />
                      <span>Product</span>
                  </StyledNavLink>
              </li>
            <li>
                <StyledNavLink to="/inventory">
                <HiOutlineCube />
                    <span>Inventory</span>
                </StyledNavLink>
            </li>
            <li>
                <StyledNavLink to="/customer">
                    <HiOutlineUserGroup />
                    <span>Customer</span>
                </StyledNavLink>
            </li>

        </NavList>
    </nav>
  )
}
