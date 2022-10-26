import { open } from "sqlite";
import sqlite3 from "sqlite3";

async function getDBHandler() {
  try {
    const dbHandler = await open({
      filename: "./todoDB/todoDb.db",
      driver: sqlite3.Database,
    });

    if (!dbHandler) throw new TypeError(`DB Handler expected got ${dbHandler}`);

    return dbHandler;
  } catch (error) {
    console.error(
      `Something went wrong when trying to create the DB Handler: ${error.message}`
    );
  }
}

export { getDBHandler };