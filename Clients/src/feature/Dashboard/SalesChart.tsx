import styled from "styled-components";
import DashboardBox from "./DashboardBox";
import Heading from "../../Components/layout/Header/Heading";
import {
    ResponsiveContainer
} from "recharts";
import { format } from "date-fns";

const StyledSalesChart = styled(DashboardBox)`
    grid-column: 1/-1;

    & .recharts-cartesian-grid-horizontal line,
    & .recharts-cartesian-grid-vertical line {
        stroke: var(--color-gray-300)
    }
`

function SalesChart(){
    return(
        <StyledSalesChart>
            <Heading as="h2">
                Sales from {format(allDates.at(0) as any, "MMM dd yyyy")}{" "}
                &mdash; {format(allDates.at(-1) as any, "MMM dd yyyy")}{" "}
            </Heading>
        <ResponsiveContainer height={300} width="100%">

        </ResponsiveContainer>
        </StyledSalesChart>
    )
}

export default SalesChart;