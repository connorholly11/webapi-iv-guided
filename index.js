require("dotenv").config();
const server = require("./api/server.js");
const defaults = require("./api/configs/defaults");

server.listen(defaults.port, () => {
  console.log(
    `\n*** Server Running on http://localhost:${defaults.port} ***\n`
  );
});
