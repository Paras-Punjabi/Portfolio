import {drizzle} from 'drizzle-orm/postgres-js'
import postgres from "postgres";
import 'dotenv/config'

const client = postgres(process.env.NEXT_PUBLIC_POSTGRES_DB_URL!,{prepare:false})

export const dbConnection = drizzle(client)