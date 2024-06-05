import DashboardLayout from "../feature/Dashboard/DashboardLayout"
import Heading from "../ui/Header/Heading"



import Row from "../ui/Row"



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
