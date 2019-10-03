require("dotenv").config();
const server = require("./api/server.js");
const defaults = require("./api/configs/defaults");

console.log(defaults.port);

server.listen(defaults.port, () => {
  console.log(
    `\n*** Server Running on http://localhost:${defaults.port} ***\n`
  );
});
