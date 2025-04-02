import { migrate } from "drizzle-orm/node-postgres/migrator";
import { db } from "./db";

// Run migrations
async function main() {
  console.log("Running migrations...");
  await migrate(db, { migrationsFolder: "./migrations" });
  console.log("Migrations completed successfully");
  process.exit(0);
}

main().catch((err) => {
  console.error("Error running migrations:", err);
  process.exit(1);
});