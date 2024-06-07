import styled from "styled-components";
import Stats from "./Stats";

const StyledDashboardLayout = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: auto 34rem auto;
    gap: 2.4rem;
`

export default function DashboardLayout() {
    
    return (
        <StyledDashboardLayout>
            <Stats/>
            <div>Top Sale</div>
            <div>Most buy</div>
            <div>Graph buy</div>
        </StyledDashboardLayout>
    )
}