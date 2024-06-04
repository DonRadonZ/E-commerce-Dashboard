import React from 'react';
import Header from './Header/Header';
import Sidebar from './Sidebar/Sidebar';
import styled from 'styled-components';
import { Outlet } from 'react-router-dom';

const StyledAppLayout = styled.div`
    display: grid;
    grid-template-columns: 26rem 1fr;
    grid-template-rows: auto 1fr;
    height: 100vh;
`;

const Main = styled.main`
    background-color: var(--color-gray-50);
    padding: 4rem 4.8rem 6.4rem;
    /* overflow: scroll; */
`
const Container = styled.div`
    max-width: 120rem;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 3.2rem;
`



export default function AppLayout() {
  return (
    <StyledAppLayout>
    <Header/>
    <Sidebar/>
    <Main>
        <Container>
            <Outlet/>
        </Container>
    </Main>
    </StyledAppLayout>
  )
}
