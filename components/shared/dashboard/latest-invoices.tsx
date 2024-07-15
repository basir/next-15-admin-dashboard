import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { fetchLatestInvoices } from '@/lib/actions/invoice.actions'
import { lusitana } from '../fonts'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import { RefreshCcw } from 'lucide-react'

export default async function LatestInvoices() {
  const latestInvoices = await fetchLatestInvoices()

  return (
    <Card className="flex w-full flex-col md:col-span-4">
      <CardHeader>
        <h2 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
          Latest Invoices
        </h2>
      </CardHeader>
      <CardContent>
        <div>
          <div>
            {latestInvoices.map((invoice, i) => {
              return (
                <div
                  key={invoice.id}
                  className={cn(
                    'flex flex-row items-center justify-between py-4',
                    {
                      'border-t': i !== 0,
                    }
                  )}
                >
                  <div className="flex items-center">
                    <Image
                      src={invoice.image_url}
                      alt={`${invoice.name}'s profile picture`}
                      className="mr-4 rounded-full"
                      width={32}
                      height={32}
                    />
                    <div className="min-w-0">
                      <p className="truncate text-sm font-semibold md:text-base">
                        {invoice.name}
                      </p>
                      <p className="hidden text-sm text-gray-500 sm:block">
                        {invoice.email}
                      </p>
                    </div>
                  </div>
                  <p
                    className={`${lusitana.className} truncate text-sm font-medium md:text-base`}
                  >
                    {invoice.amount}
                  </p>
                </div>
              )
            })}
          </div>
          <div className="flex items-center pb-2 pt-6">
            <RefreshCcw className="h-5 w-5 text-gray-500" />
            <h3 className="ml-2 text-sm text-gray-500 ">Updated just now</h3>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
