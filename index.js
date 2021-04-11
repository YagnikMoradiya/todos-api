require("dotenv").config();
const app = require("./src/app.js");
const pool = require("./src/pool.js");

const port = process.env.PORT || 3005;

const proConfig = {
  connectionString: process.env.DATABASE_URL,
};

pool
  .connect(proConfig)
  .then(() => {
    app().listen(port, () =>
      console.log(`Listining on http://localhost:${port}`)
    );
  })
  .catch((err) => console.log(err));
