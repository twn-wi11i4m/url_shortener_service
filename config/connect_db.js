const Client = require("pg").Client;
const config = require("config");

const postgreSQLConfig = config.get("postgreSQL");

const client = new Client({
  host: postgreSQLConfig.host,
  port: postgreSQLConfig.port,
  database: postgreSQLConfig.database,
  user: postgreSQLConfig.user,
  password: postgreSQLConfig.password,
});

const connectDB = async () => {
  try {
    await client.connect();

    console.log("PostgreSQL Connected...");
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

module.exports = { connectDB, client };
