import { DataSource } from 'typeorm'
import { SnakeNamingStrategy } from 'typeorm-naming-strategies'
import { betterAuth } from 'better-auth'

const AppDataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: Number(process.env.MAIN_VITE_DB_PORT),
  username: 'postgres',
  password: process.env.MAIN_VITE_DB_PASSWORD,
  database: process.env.MAIN_VITE_DB_DATABASE,
  synchronize: true,
  namingStrategy: new SnakeNamingStrategy()
})

export const auth = betterAuth({
  secret: process.env.AUTH_SECRET || 'secret-key',
  email: {
    // sendCode: async ({ email, code }) => {
    //   console.log(`📩 인증코드 ${code} → ${email}`)
    // }
  }
})
