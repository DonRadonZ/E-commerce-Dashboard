import Heading from "../Components/layout/Header/Heading";
import Row from "../Components/layout/Row";
import SalesReportTable from "../feature/SalesReport/SalesReportTable";
import SalesReportTableOperations from "../feature/SalesReport/SalesReportTableOperations";


export default function SalesReport() {
  return (
    <>
    <Row type="horizontal">
      <Heading as="h1">Sales Report</Heading>
      
      <SalesReportTableOperations/>
      </Row>
      <Row>
        <SalesReportTable/>
      </Row>
    </>
  )
}
