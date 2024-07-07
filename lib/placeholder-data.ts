import { hashSync } from 'bcryptjs'

const users = [
  {
    id: '410544b2-4001-4271-9855-fec4b6a6442a',
    name: 'User',
    email: 'user@nextmail.com',
    password: hashSync('123456', 10),
  },
]

export { users }
