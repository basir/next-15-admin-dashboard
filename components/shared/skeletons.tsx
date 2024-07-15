import { Card, CardContent, CardHeader } from '../ui/card'
import { Skeleton } from '../ui/skeleton'

export function CardSkeleton() {
  return (
    <Card>
      <CardHeader className="flex flex-row  space-y-0 space-x-3">
        <Skeleton className="w-6 h-6 rounded-full" />
        <Skeleton className="w-20 h-6" />
      </CardHeader>
      <CardContent>
        <Skeleton className="h-10 w-full" />
      </CardContent>
    </Card>
  )
}

export function CardsSkeleton() {
  return (
    <>
      <CardSkeleton />
      <CardSkeleton />
      <CardSkeleton />
      <CardSkeleton />
    </>
  )
}

export function RevenueChartSkeleton() {
  return (
    <Card className="w-full md:col-span-4">
      <CardHeader>
        <Skeleton className="w-36 h-6 mb-4" />
      </CardHeader>
      <CardContent>
        <Skeleton className="sm:grid-cols-13 mt-0 grid h-[450px] grid-cols-12 items-end gap-2 rounded-md   p-4 md:gap-4" />
      </CardContent>
    </Card>
  )
}

export function InvoiceSkeleton() {
  return (
    <div className="flex flex-row items-center justify-between border-b   py-4">
      <div className="flex items-center space-x-4">
        <Skeleton className="w-6 h-6 rounded-full" />
        <div className="min-w-0 space-y-2">
          <Skeleton className="w-20 h-6" />
          <Skeleton className="w-20 h-6" />
        </div>
      </div>
      <Skeleton className="w-20 h-6" />
    </div>
  )
}

export function LatestInvoicesSkeleton() {
  return (
    <Card className="flex w-full flex-col md:col-span-4">
      <CardHeader>
        <Skeleton className="w-36 h-6 mb-4" />
      </CardHeader>
      <CardContent>
        <div>
          <InvoiceSkeleton />
          <InvoiceSkeleton />
          <InvoiceSkeleton />
          <InvoiceSkeleton />
          <InvoiceSkeleton />
        </div>
      </CardContent>
    </Card>
  )
}

export default function DashboardSkeleton() {
  return (
    <>
      <Skeleton className="w-36 h-6 mb-4" />
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <CardSkeleton />
        <CardSkeleton />
        <CardSkeleton />
        <CardSkeleton />
      </div>
      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
        <RevenueChartSkeleton />
        <LatestInvoicesSkeleton />
      </div>
    </>
  )
}

export function InvoicesMobileSkeleton() {
  return (
    <div className="mb-2 w-full rounded-md  p-4">
      <div className="flex items-center justify-between border-b   pb-8">
        <div className="flex items-center">
          <Skeleton className="w-6 h-6 rounded-full" />
          <Skeleton className="w-16 h-6" />
        </div>
        <Skeleton className="w-16 h-6" />
      </div>
      <div className="flex w-full items-center justify-between pt-4">
        <div>
          <Skeleton className="w-16 h-6" />
          <Skeleton className="mt-2 h-6 w-24 rounded" />
          <Skeleton className="mt-2 h-6 w-24 rounded" />
        </div>
        <div className="flex justify-end gap-2">
          <Skeleton className="w-10 h-10" />
          <Skeleton className="w-10 h-10" />
        </div>
      </div>
    </div>
  )
}

export function TableRowSkeleton() {
  return (
    <tr className="w-full border-b   last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg">
      {/* Customer Name and Image */}
      <td className="relative overflow-hidden whitespace-nowrap py-3 pl-6 pr-3">
        <div className="flex items-center gap-3">
          <Skeleton className="h-8 w-8 rounded-full" />
          <Skeleton className="h-6 w-24" />
        </div>
      </td>
      {/* Email */}
      <td className="whitespace-nowrap px-3 py-3">
        <Skeleton className="h-6 w-32" />
      </td>
      {/* Amount */}
      <td className="whitespace-nowrap px-3 py-3">
        <Skeleton className="h-6 w-16" />
      </td>
      {/* Date */}
      <td className="whitespace-nowrap px-3 py-3">
        <Skeleton className="h-6 w-16" />
      </td>
      {/* Status */}
      <td className="whitespace-nowrap px-3 py-3">
        <Skeleton className="h-6 w-16" />
      </td>
      {/* Actions */}
      <td className="whitespace-nowrap py-3 pl-6 pr-3">
        <div className="flex justify-end gap-3">
          <Skeleton className="h-[38px] w-[38px]" />
          <Skeleton className="h-[38px] w-[38px]" />
        </div>
      </td>
    </tr>
  )
}

export function InvoicesTableSkeleton() {
  return (
    <div className="mt-6 flow-root">
      <div className="inline-block min-w-full align-middle">
        <div className="rounded-lg   p-2 md:pt-0">
          <div className="md:hidden">
            <InvoicesMobileSkeleton />
            <InvoicesMobileSkeleton />
            <InvoicesMobileSkeleton />
            <InvoicesMobileSkeleton />
            <InvoicesMobileSkeleton />
            <InvoicesMobileSkeleton />
          </div>
          <table className="hidden min-w-full md:table">
            <thead className="rounded-lg text-left text-sm font-normal">
              <tr>
                <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                  Customer
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Email
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Amount
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Date
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Status
                </th>
                <th
                  scope="col"
                  className="relative pb-4 pl-3 pr-6 pt-2 sm:pr-6"
                >
                  <span className="sr-only">Edit</span>
                </th>
              </tr>
            </thead>
            <tbody>
              <TableRowSkeleton />
              <TableRowSkeleton />
              <TableRowSkeleton />
              <TableRowSkeleton />
              <TableRowSkeleton />
              <TableRowSkeleton />
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
