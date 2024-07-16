import db from '@/db/drizzle'
import { customers, invoices } from '@/db/schema'
import { asc, eq, ilike, or, sql } from 'drizzle-orm'
import { formatCurrency } from '../utils'

export async function fetchCustomers() {
  try {
    const data = await db
      .select({
        id: customers.id,
        name: customers.name,
      })
      .from(customers)
      .orderBy(customers.name)
    return data
  } catch (err) {
    console.error('Database Error:', err)
    throw new Error('Failed to fetch all customers.')
  }
}

export async function fetchFilteredCustomers(query: string) {
  const data = await db
    .select({
      id: customers.id,
      name: customers.name,
      email: customers.email,
      image_url: customers.image_url,
      total_invoices: sql<number>`count(${invoices.id})`,
      total_pending: sql<number>`SUM(CASE WHEN ${invoices.status} = 'pending' THEN  ${invoices.amount} ELSE 0 END)`,
      total_paid: sql<number>`SUM(CASE WHEN  ${invoices.status} = 'paid' THEN  ${invoices.amount} ELSE 0 END)`,
    })
    .from(customers)
    .leftJoin(invoices, eq(customers.id, invoices.customer_id))
    .where(
      or(
        ilike(customers.name, sql`${`%${query}%`}`),
        ilike(customers.email, sql`${`%${query}%`}`)
      )
    )
    .groupBy(customers.id, customers.name, customers.email, customers.image_url)
    .orderBy(asc(customers.id))
  return data.map((row) => ({
    ...row,
    total_invoices: row.total_invoices ?? 0,
    total_pending: formatCurrency(row.total_pending ?? 0),
    total_paid: formatCurrency(row.total_paid ?? 0),
  }))
}
