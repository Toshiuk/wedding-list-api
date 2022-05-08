const jsonServer = require("json-server");
const cors = require("cors");
const server = jsonServer.create();
const router = jsonServer.router("db.json");

const middlewares = jsonServer.defaults({});

server.use(middlewares);

const port = process.env.PORT || 4848;

var corsOptions = {
  credentials: true,
  origin: "*",
  methods: ["GET", "PUT", "POST", "PATCH", "DELETE"],
  allowedHeaders: "accept, content-type",
};

server.use(cors(corsOptions));

server.use(router);

server.listen(port, () => {
  console.log(`JSON Server is running on port ${port}`);
});
