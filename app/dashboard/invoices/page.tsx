import { lusitana } from '@/components/shared/fonts'
import Pagination from '@/components/shared/invoices/pagination'
import InvoicesTable from '@/components/shared/invoices/table'
import Search from '@/components/shared/search'
import { InvoicesTableSkeleton } from '@/components/shared/skeletons'
import { Button } from '@/components/ui/button'
import { fetchInvoicesPages } from '@/lib/actions/invoice.actions'
import { PlusIcon } from 'lucide-react'
import { Metadata } from 'next'
import Link from 'next/link'
import { Suspense } from 'react'

export const metadata: Metadata = {
  title: 'Invoices',
}

export default async function Page({
  searchParams,
}: {
  searchParams?: {
    query?: string
    page?: string
  }
}) {
  const query = searchParams?.query || ''
  const currentPage = Number(searchParams?.page) || 1

  const totalPages = await fetchInvoicesPages(query)

  return (
    <div className="w-full">
      <div className="flex w-full items-center justify-between">
        <h1 className={`${lusitana.className} text-2xl`}>Invoices</h1>
      </div>
      <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
        <Search placeholder="Search invoices..." />
        <Button asChild>
          <Link href="/dashboard/invoices/create">
            <span className="hidden md:block">Create Invoice</span>
            <PlusIcon className="h-5 md:ml-4" />
          </Link>
        </Button>
      </div>
      <Suspense key={query + currentPage} fallback={<InvoicesTableSkeleton />}>
        <InvoicesTable query={query} currentPage={currentPage} />
      </Suspense>
      <div className="mt-5 flex w-full justify-center">
        <Pagination totalPages={totalPages} />
      </div>
    </div>
  )
}
