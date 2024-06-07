import styled from "styled-components";
import DashboardBox from "./DashboardBox";

const StyledSalesChart = styled(DashboardBox)`
    grid-column: 1/-1;

    & .recharts-cartesian-grid-horizontal line,
    & .recharts-cartesian-grid-vertical line {
        stroke: var(--color-gray-300)
    }
`