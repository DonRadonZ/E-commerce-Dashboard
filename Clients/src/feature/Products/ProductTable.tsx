import React from 'react'
import Table from '../../Components/UI/Table/Table'

export default function ProductTable() {
    return (
        <Table columns="0.6fr 1.8fr 2.2fr 1fr 1fr 1fr">
            <Table.Header>
                <div></div>
                <div>Menu</div>
                <div>Category</div>
                <div>Price</div>
                <div>Discount</div>
                <div></div>
            </Table.Header>
            
        </Table>
    )
}
