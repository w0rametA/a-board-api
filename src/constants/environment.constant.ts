import * as dotenv from 'dotenv'
dotenv.config()

export const env = {
  port: process.env.PORT || 4000,
  version: process.env.npm_package_version,
  database: {
    host: process.env.DB_HOST,
    port: +(process.env.DB_PORT || 5432),
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    dbname: process.env.DB_DATABASE,
    sync: !!process.env.DB_SYNC,
  },
}
