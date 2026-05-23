import express from "express";

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
// app.use("/api/websiteRouter");

app.listen(port, () => {
  console.log("Server started");
});
