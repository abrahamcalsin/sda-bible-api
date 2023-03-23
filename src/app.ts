import express from "express";
import cors from "cors";

import booksRouter from "./routes/books";
import chaptersRouter from "./routes/chapters";
import versesRouter from "./routes/verses";

const app = express();

// const PORT = process.env.PORT || 8000;

app.use(
  cors({
    origin: "*",
  })
);

app.use("/api/bible/books", booksRouter);
app.use("/api/bible/books", chaptersRouter);
app.use("/api/bible/books", versesRouter);

app.get("/api", (_req, res) => {
  const apiInfo = {
    message: "Welcome to the SDA Bible - API",
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

  return res.json(apiInfo);
});

app.get("/api/hello", (_req, res) => {
  return res.send("Hello WOrld");
});

// app.listen(PORT, () => {
//   console.log(`Server listening on http://localhost:${PORT}`);
// });

export default app;
