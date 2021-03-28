require("dotenv").config();
const app = require("./src/app.js");
const pool = require("./src/pool.js");

const port = process.env.PORT || 3005;

const devConfig = {
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  database: process.env.DB_NAME,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
};

const proConfig = {
  connectionString: process.env.DATABASE_URL,
};

pool
  .connect(process.env.NODE_ENV === "production" ? proConfig : devConfig)
  .then(() => {
    app().listen(port, () =>
      console.log(`Listining on http://localhost:${port}`)
    );
  })
  .catch((err) => console.log(err));
