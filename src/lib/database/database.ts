import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import config from "../config/config";

const connectionString = config.SB_DATABASE_URL;
const client = postgres(connectionString, { prepare: false });
const database = drizzle(client);

export default database;
