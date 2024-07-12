import db from '@/db/drizzle'
import { customers, invoices, revenue } from '@/db/schema'
import { count, sql } from 'drizzle-orm'
import { formatCurrency } from '../utils'

export async function fetchCardData() {
  try {
    const invoiceCountPromise = db.select({ count: count() }).from(invoices)
    const customerCountPromise = db.select({ count: count() }).from(customers)
    const invoiceStatusPromise = db
      .select({
        paid: sql<number>`SUM(CASE WHEN status = 'paid' THEN amount ELSE 0 END)`,
        pending: sql<number>`SUM(CASE WHEN status = 'pending' THEN amount ELSE 0 END)`,
      })
      .from(invoices)

    const data = await Promise.all([
      invoiceCountPromise,
      customerCountPromise,
      invoiceStatusPromise,
    ])

    const numberOfInvoices = Number(data[0][0].count ?? '0')
    const numberOfCustomers = Number(data[1][0].count ?? '0')
    const totalPaidInvoices = formatCurrency(data[2][0].paid ?? '0')
    const totalPendingInvoices = formatCurrency(data[2][0].pending ?? '0')

    return {
      numberOfCustomers,
      numberOfInvoices,
      totalPaidInvoices,
      totalPendingInvoices,
    }
  } catch (error) {
    console.error('Database Error:', error)
    throw new Error('Failed to fetch card data.')
  }
}

export async function fetchRevenue() {
  try {
    const data = await db.select().from(revenue)
    return data
  } catch (error) {
    console.error('Database Error:', error)
    throw new Error('Failed to fetch the revenues.')
  }
}
