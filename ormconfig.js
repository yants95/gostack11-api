require("dotenv").config();

module.exports = {
    type: "postgres",
    host: process.env.TYPEORM_HOST,
    port: parseInt(process.env.TYPEORM_PORT, 10) || 5432,
    username: process.env.TYPEORM_USERNAME,
    password: process.env.TYPEORM_PASSWORD,
    database: process.env.DB_NAME,
    migrations: ["./src/database/migrations/*.ts"],
    cli: {
        migrationsDir: "./src/database/migrations"
    },
    migrationsRun: true,
    logging: true,
    entities: ["./src/models/*.ts"]
};
