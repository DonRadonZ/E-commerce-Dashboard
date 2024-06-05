import styled from "styled-components";

const StyledDashboardLayout = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: auto 34rem auto;
    gap: 2.4rem;
`

export default function DashboardLayout() {
    
    return (
        <StyledDashboardLayout>
            <div>Total Sales</div>
            <div>Sale</div>
            <div>New Customers</div>
            <div>Growth Rate</div>
        </StyledDashboardLayout>
    )
}