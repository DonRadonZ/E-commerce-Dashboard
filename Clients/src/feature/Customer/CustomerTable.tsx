import React from 'react'
import Table from '../../Components/UI/Table/Table'
import Pagination from '../../Components/utils/Pagination'

export default function CustomerTable() {
  return (
    <Table columns="0.6fr 2fr 2.4fr 1.4fr 1fr 3.2rem">
        <Table.Header>
            <div>Registeration Date</div>
            <div>Name</div>
            <div>E-mail</div>
            <div>Total Buy</div>
        </Table.Header>

        <Table.Footer>
            <Pagination count={count}/>
        </Table.Footer>
    </Table>
  )
}
