import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { fetchCardData } from '@/lib/actions/invoice.actions'
import { BanknoteIcon, ClockIcon, InboxIcon, UsersIcon } from 'lucide-react'
import { lusitana } from '../fonts'

const iconMap = {
  collected: BanknoteIcon,
  customers: UsersIcon,
  pending: ClockIcon,
  invoices: InboxIcon,
}

export default async function StatCardsWrapper() {
  const {
    numberOfInvoices,
    numberOfCustomers,
    totalPaidInvoices,
    totalPendingInvoices,
  } = await fetchCardData()

  return (
    <>
      <StatCard title="Collected" value={totalPaidInvoices} type="collected" />
      <StatCard title="Pending" value={totalPendingInvoices} type="pending" />
      <StatCard
        title="Total Invoices"
        value={numberOfInvoices}
        type="invoices"
      />
      <StatCard
        title="Total Customers"
        value={numberOfCustomers}
        type="customers"
      />
    </>
  )
}

export function StatCard({
  title,
  value,
  type,
}: {
  title: string
  value: number | string
  type: 'invoices' | 'customers' | 'pending' | 'collected'
}) {
  const Icon = iconMap[type]

  return (
    <Card>
      <CardHeader className="flex flex-row  space-y-0 space-x-3 ">
        {Icon ? <Icon className="h-5 w-5" /> : null}
        <h3 className="ml-2 text-sm font-medium">{title}</h3>
      </CardHeader>
      <CardContent>
        <p
          className={`${lusitana.className}
               truncate rounded-xl   p-4  text-2xl`}
        >
          {value}
        </p>
      </CardContent>
    </Card>
  )
}
