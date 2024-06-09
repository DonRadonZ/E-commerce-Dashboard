import React from 'react'
import Table from '../../Components/UI/Table/Table'
import Pagination from '../../Components/utils/Pagination'

export default function SalesReportTable({count}) {
  return (
    <Table columns="0.4fr 1.4fr 2fr 1.2fr 1.4fr 1.2fr ">
        <Table.Header>
            <div></div>
            <div>Menu</div>
            <div>Category</div>
            <div>Amount Sale</div>
            <div>Circulation</div>
        </Table.Header>

        <Table.Footer>
            <Pagination count={count}/>
        </Table.Footer>
    </Table>
  )
}