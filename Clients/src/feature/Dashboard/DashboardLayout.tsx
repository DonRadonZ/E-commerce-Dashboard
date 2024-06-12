import styled from "styled-components";
import Stats from "./Stats";
import useProducts from "../../hooks/Products/useProducts";
import Spinner from "../../Components/UI/Spinner/Spinner";
import SalesChart from "./SalesChart";
import DashboardTopBuy from "./DashboardTopBuy";
import TypeBuyChart from "../Customer/TypeBuyChart";

const StyledDashboardLayout = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: auto 34rem auto;
    gap: 2.4rem;
`

export default function DashboardLayout() {
    const {isPending: isPending1} = useProducts();

    if(isPending1) return <Spinner/>

    return (
        <StyledDashboardLayout>
            <Stats/>
            <DashboardTopBuy/>
            <TypeBuyChart/>
            <SalesChart/>
        </StyledDashboardLayout>
    )
}