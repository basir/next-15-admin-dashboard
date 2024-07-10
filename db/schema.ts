import {
  pgTable,
  uuid,
  varchar,
  unique,
  integer,
  text,
  date,
} from 'drizzle-orm/pg-core'
import { sql } from 'drizzle-orm'

export const customers = pgTable('customers', {
  id: uuid('id')
    .default(sql`uuid_generate_v4()`)
    .primaryKey()
    .notNull(),
  name: varchar('name', { length: 255 }).notNull(),
  email: varchar('email', { length: 255 }).notNull(),
  image_url: varchar('image_url', { length: 255 }).notNull(),
})

export const revenue = pgTable(
  'revenue',
  {
    month: varchar('month', { length: 4 }).notNull(),
    revenue: integer('revenue').notNull(),
  },
  (table) => {
    return {
      revenue_month_key: unique('revenue_month_key').on(table.month),
    }
  }
)

export const users = pgTable(
  'users',
  {
    id: uuid('id')
      .default(sql`uuid_generate_v4()`)
      .primaryKey()
      .notNull(),
    name: varchar('name', { length: 255 }).notNull(),
    email: text('email').notNull(),
    password: text('password').notNull(),
  },
  (table) => {
    return {
      users_email_key: unique('users_email_key').on(table.email),
    }
  }
)

export const invoices = pgTable('invoices', {
  id: uuid('id')
    .default(sql`uuid_generate_v4()`)
    .primaryKey()
    .notNull(),
  customer_id: uuid('customer_id').notNull(),
  amount: integer('amount').notNull(),
  status: varchar('status', { length: 255 }).notNull(),
  date: date('date').notNull(),
})
