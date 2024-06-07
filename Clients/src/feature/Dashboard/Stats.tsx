
import Stat from './Stat'
import { HiMiniReceiptPercent, HiMiniUserPlus, HiOutlineBanknotes, HiOutlineChartBar } from 'react-icons/hi2'
// import { formatCurrency } from '../../utils/helper'

export default function Stats() {
  return (
    <>
    <Stat
        title="Product Sold"
        color="teal"
        icon={<HiMiniReceiptPercent />}
        // value={numProducts}
    />
    <Stat
        title="Sales"
        color="green"
        icon={<HiOutlineBanknotes/>}
        // value={formatCurrency(sales)}
    />
    <Stat
        title="New Customer"
        color="sky"
        icon={<HiMiniUserPlus />}
        // value={numCustomers}
    />
    <Stat
        title="Occupancy rate"
        color="amber"
        icon={<HiOutlineChartBar/>}
        // value={Math.round(occupation * 100)+"%"}
    />

    </>
  )
}
