const http = require("http");
const server = http.createServer();

const users = [
  {
    id: 1,
    name: "Rebekah Johnson",
    email: "Glover12345@gmail.com",
    password: "123qwe",
  },
  {
    id: 2,
    name: "Fabian Predovic",
    email: "Connell29@gmail.com",
    password: "password",
  },
];

const posts = [
  {
    id: 1,
    title: "간단한 HTTP API 개발 시작!",
    content: "Node.js에 내장되어 있는 http 모듈을 사용해서 HTTP server를 구현.",
    userId: 1,
  },
  {
    id: 2,
    title: "HTTP의 특성",
    content: "Request/Response와 Stateless!!",
    userId: 2,
  },
];

const signUpListener = function (request, response) {
  const { url, method } = request;
  if (method === "POST") {
    if (url === "/users") {
      let body = "";
      request.on("data", (data) => {
        body += data;
      });

      request.on("end", () => {
        users.push({
          id: users.id,
          name: users.name,
          email: users.email,
          password: users.password,
        });
        response.end(JSON.stringify({ message: "userCreated" }));
      });
    }
  }
};

server.on("request", signUpListener);

server.listen(8000, "127.0.0.1", function () {
  console.log("Listening to requests on port 8000");
});

