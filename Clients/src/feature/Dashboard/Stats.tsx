
import Stat from './Stat'
import { HiMiniReceiptPercent, HiMiniUserPlus, HiOutlineBanknotes, HiOutlineChartBar } from 'react-icons/hi2'
import { formatCurrency } from '../../utils/helper'

export default function Stats() {
  return (
    <>
    <Stat
        title="Product Sold"
        color="teal"
        icon={<HiMiniReceiptPercent />}
        value={340}
    />
    <Stat
        title="Sales"
        color="green"
        icon={<HiOutlineBanknotes/>}
        value={formatCurrency(39775)}
    />
    <Stat
        title="New Customer"
        color="sky"
        icon={<HiMiniUserPlus />}
        value={5}
    />
    <Stat
        title="Growth rate"
        color="amber"
        icon={<HiOutlineChartBar/>}
        value={Math.round(0.12001 * 100)+"%"}
    />

    </>
  )
}
