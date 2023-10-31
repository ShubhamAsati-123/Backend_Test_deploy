import express from "express";
import cors from "cors";

const app = express();
const port = process.env.PORT ?? 3000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/submit", (req, res) => {
  const { data } = req.body;

  console.log("Received data:", data);

  res.json({ message: "Data received successfully", receivedData: data });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
