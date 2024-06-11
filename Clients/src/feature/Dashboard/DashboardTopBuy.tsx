
import styled from 'styled-components';
import Heading from '../../Components/layout/Header/Heading';
import { PieChart, ResponsiveContainer } from 'recharts';

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

export default function DashboardTopBuy() {
  return (
    <StyledTopBuy>
        <Heading as="h2">Top product Buy</Heading>
        <ResponsiveContainer width="100%" height={240}>
            <PieChart>
                
            </PieChart>
        </ResponsiveContainer>
    </StyledTopBuy>
  )
}
