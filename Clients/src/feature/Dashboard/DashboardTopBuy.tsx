
import styled from 'styled-components';
import Heading from '../../Components/layout/Header/Heading';
import { formatCurrency } from '../../utils/helper';



const StyledTopBuy = styled.div`
  /* Box */
  background-color: var(--color-gray-0);
  border: 1px solid var(--color-gray-100);
  border-radius: var(--border-radius-md);

  padding: 3.2rem;
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
  grid-column: 1 / span 2;
  padding-top: 2.4rem;
`;

const TopList = styled.ul`
    overflow: scroll;
    overflow-x: hidden;

    /* Removing scrollbars for webkit, firefox, and ms, respectively */
    &::-webkit-scrollbar {
        width: 0 !important;
    }
    scrollbar-width: none;
    -ms-overflow-style: none;
`;

const StyledTopItem = styled.li`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 1.6rem;
    align-items: center;

    font-size: 1.4rem;
    padding: 0.8rem 0;
    border-bottom: 1px solid var(--color-grey-100);

    &:first-child {
        border-top: 1px solid var(--color-grey-100);
    }
`

const StyledProduct = styled.div`
 display: flex;
 font-size: 2rem;
`

const Price = styled.div`
 font-size: 2rem;
 font-family: 'Sarabun';
`

// const fakeData = [
//   {
//     "id": 1,
//     "name":"Matcha Espresso",
//     "circulation": 13125,
//   },
//   {
//     "id": 2,
//     "name":"Matcha Latte",
//     "circulation": 7500
//   },
//   {
//     "id": 3,
//     "name":"Matcha Latte Hot",
//     "circulation": 5000
//   },
//   {
//     "id": 4,
//     "name":"Matcha Strawberry Short Cake",
//     "circulation": 4950
//   },
//   {
//     "id": 5,
//     "name":"Matcha Lava Cake",
//     "circulation": 3000
//   }
// ]

export default function DashboardTopBuy() {
  return (
    <StyledTopBuy>
        <Heading as="h2">Top product Buy</Heading>
        <TopList>
            <StyledTopItem>
              <StyledProduct>
              <div>🥇</div>
              <div>Matcha Espresso</div>
              </StyledProduct>
              <Price>{formatCurrency(13125)}</Price>
            </StyledTopItem>
            <StyledTopItem>
              <StyledProduct>
              <div>🥈</div>
              <div>Matcha Latte</div>
              </StyledProduct>
              <Price>{formatCurrency(7500)}</Price>
            </StyledTopItem>
            
            <StyledTopItem>
              <StyledProduct>
              <div>🥉</div>
              <div>Matcha Strawberry Short Cake</div>
              </StyledProduct>
              <Price>{formatCurrency(5000)}</Price>
            </StyledTopItem>
            
            <StyledTopItem>
              <StyledProduct>
              <div>4.</div>
              <div>Matcha Espresso</div>
              </StyledProduct>
              <Price>{formatCurrency(4950)}</Price>
            </StyledTopItem>
            
            <StyledTopItem>
              <StyledProduct>
              <div>5.</div>
              <div>Matcha Lava Cake</div>
              </StyledProduct>
              <Price>{formatCurrency(3000)}</Price>
            </StyledTopItem>
            
            
          
        </TopList>
        
    </StyledTopBuy>
  )
}
