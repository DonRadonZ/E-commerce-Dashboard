import React from 'react'
import Table from '../../Components/UI/Table/Table'
import Pagination from '../../Components/utils/Pagination'

export default function CustomerTable({count}) {
  return (
    <Table columns="2.4fr 2.4fr 1.4fr 1.2fr 3.2rem">
        <Table.Header>
            <div>Name</div>
            <div>Category</div>
            <div>Amount</div>
            <div>Status</div>
        </Table.Header>

        <Table.Footer>
            <Pagination count={count}/>
        </Table.Footer>
    </Table>
  )
}