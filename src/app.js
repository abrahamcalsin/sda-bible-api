const express = require("express");
const bibleRouter = require("./routes/bible");
const bookRouter = require("./routes/book");

const app = express();

const PORT = 3000;

app.use("/api/bible", bibleRouter);
app.use("/api/bible/book", bookRouter);

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
