import React from "react";
import express from "express";
import compression from "compression";

const app = express();

const router = express.Router();

app.use(compression());
app.use(express.static("public"));

router.get("*", async (req, res) => {
  const theHtml = `
  <html>
  <head></head>
  <body>
  <h1>My First Server Side Render</h1>
  <div id="reactele"></div>
  <script src="/app.js" charset="utf-8"></script>
  <script src="/vendor.js" charset="utf-8"></script>
  </body>
  </html>
  `;
  res.send(theHtml);
});

app.use('/', router)

const port = process.env.PORT || 3030;
app.listen(port, function listenHandler() {
  console.info(`Running on ${port}...`);
});