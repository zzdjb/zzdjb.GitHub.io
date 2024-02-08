const http = require("http");
const fs = require("fs").promises;
const qs = require("querystring");

const HOST = "localhost";
const PORT = 5500;
const SERVE_URL = `http://${HOST}:${PORT}`;

const requestListener = function (req, res) {
  if (req.method === "POST") {
    if (req.url === "/") {
      const chunks = []; /* turn the chunks variable into an empty array, which will immediately be populated by the information broadcast by the Save plugin once it runs */


req
   .on("data", (data) => chunks.push(data)) /* append data to the chunks variable */
    .on("end", () => {
       const buf = Buffer.concat(chunks); /* The buffer class transforms data into a binary stream. We then want to connect the parts together with a concatenate function.*/
       const decoded = decodeURIComponent(buf); /* get the decoded version of the buffered integers */
      const parsed = qs.parse(decoded); /* This is the querystream working - it decodes the buffer stream */

       fs.writeFile(__dirname + "/saved-content.html", parsed.content)
             .then(() => {
            res.writeHead(301, {
             "Content-Type": "text/html",
            Location: SERVE_URL,
             });
             res.end("");


if (req.method === "GET") { /* Load the homepage from the file system. */
   if (req.url === "/") {
      fs.readFile(__dirname + "/index.html")
        .then((contents) => {
          res.writeHead(200, {
            "Content-Type": "text/html",
          });
          res.end(contents);
        })


/* directly after the “res.end(""); })” line */
.catch((error) => {
              console.error(error);
             res.writeHead(500, {
                "Content-Type": "text/html",
              });
              res.end(error.toString());
            });

/* directly after the “res.end(""); })” line */
.catch((error) => {
              console.error(error);
             res.writeHead(500, {
                "Content-Type": "text/html",
              });
              res.end(error.toString());
            });

if (req.method !== "GET" && req.method !== "POST") {
  res.writeHead(404);
  res.end("Not Found");
}


const server = http.createServer(requestListener);

server.listen(PORT, HOST, () => {
  console.log(`Server is running on ${SERVE_URL}`);
});