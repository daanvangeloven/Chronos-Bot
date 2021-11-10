import { DB } from "https://deno.land/x/sqlite/mod.ts"; // Import SQLite

const db = new DB("metis.db");

static class DBController{

    InitializeDatabase = () => {
        db.query(`
        CREATE TABLE Events (
            ID integer PRIMARY KEY AUTOINCREMENT,
            DateTime datetime,
            Title varchar,
            Description blob,
            Image varchar,
            Host varchar
        );
        
        
        CREATE TABLE Signups (
            ID integer,
            Event integer,
            Member integer
        );
        
    `);
    // Close connection
    db.close();
    }
}

