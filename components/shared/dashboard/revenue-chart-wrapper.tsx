import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { fetchRevenue } from '@/lib/actions/invoice.actions'
import { lusitana } from '../fonts'
import RevenueChart from './revenue-chart'

export default async function RevenueChartWrapper() {
  const revenue = await fetchRevenue()
  return (
    <Card className="w-full md:col-span-4">
      <CardHeader>
        <h2 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
          Recent Revenue
        </h2>
      </CardHeader>
      <CardContent className="p-0">
        <RevenueChart revenue={revenue} />
      </CardContent>
    </Card>
  )
}
