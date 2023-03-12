import express from "express";
import cors from "cors";

import booksRouter from "./routes/books";
import chaptersRouter from "./routes/chapters";
import versesRouter from "./routes/verses";

const app = express();

const PORT = 8000;

app.use(
  cors({
    origin: "*",
  })
);

app.use("/api/bible/books", booksRouter);
app.use("/api/bible/books", chaptersRouter);
app.use("/api/bible/books", versesRouter);

app.get("/", (_req, res) => {
  const apiInfo = {
    message: "Welcome to the API of SDA - OBS Bible",
    endpoints: [
      {
        path: "/api/books",
        description: "Get all the books from the Bible",
        queryParameters: [
          {
            name: "/:bookName/chapters",
            description: "Filter chapters by book name",
            type: "string",
          },
          {
            name: "/:bookName/chapters/:chapter/verses",
            description: "Filter verses by book name and chapter",
            type: "string",
          },
        ],
      },
    ],
  };

  res.json(apiInfo);
});

app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});
