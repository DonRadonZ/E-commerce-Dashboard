import DashboardLayout from "../feature/Dashboard/DashboardLayout"
import Heading from "../Components/layout/Header/Heading"



import Row from "../Components/layout/Row"



export default function Dashboard() {
  return (
    <>
    <Row type="horizontal">
      <Heading as="h1">Dashboard</Heading>
    </Row>
    <DashboardLayout />
    </>
  )
}
