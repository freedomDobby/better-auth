// import { DataSource } from 'typeorm'
import { betterAuth } from "better-auth";
import { Pool } from "pg";
import dotenv from 'dotenv';

dotenv.config();


export const pool = new Pool({
  host: 'localhost',
  user: 'postgres',
  port: Number(process.env.MAIN_VITE_DB_PORT),
  password: process.env.MAIN_VITE_DB_PASSWORD,
  database: process.env.MAIN_VITE_DB_DATABASE,
});

export const auth = betterAuth({
  database: pool,
  emailAndPassword: {
    enabled: true,
    disableSignUp: false,
    requireEmailVerification: true,
    minPasswordLength: 8,
    maxPasswordLength: 128,
    autoSignIn: true,
  },
});

// const AppDataSource = new DataSource({
//   type: 'postgres',
//   host: 'localhost',
//   port: Number(process.env.MAIN_VITE_DB_PORT),
//   username: 'postgres',
//   password: process.env.MAIN_VITE_DB_PASSWORD,
//   database: process.env.MAIN_VITE_DB_DATABASE,
//   entities: [User],
//   synchronize: true,
//   namingStrategy: new SnakeNamingStrategy()
// })

// export const initializeDataSource = async () => {
//   try {
//     await AppDataSource.initialize()
//     console.log('✅ Data Source has been initialized!')
//   } catch (err) {
//     console.error('❌ Error during Data Source initialization', err)
//   }
// }

