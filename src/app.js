const express = require("express");
const booksRouter = require("./routes/books");
const chaptersRouter = require("./routes/chapters");
const versesRouter = require("./routes/verses");

const app = express();

const PORT = 8000;

app.use("/api/bible/books", booksRouter);
app.use("/api/bible/books", chaptersRouter);
app.use("/api/bible/books", versesRouter);

app.get("/", (req, res) => {
  const apiInfo = {
    message: "Welcome to the API of SDA - OBS Bible",
    endpoints: [
      {
        path: "/bible",
        description: "Get all the data from the Bible",
        queryParameters: [
          {
            name: "/book/:bookId",
            description: "Filter chapters and verses by book(optional)",
            type: "string",
          },
        ],
      },
    ],
  };
  res.json(apiInfo);
});

app.listen(PORT, (res) => {
  console.log(`Server listening on http://localhost:${PORT}`);
});
