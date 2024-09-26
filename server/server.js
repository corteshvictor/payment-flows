import express from "express";
import jwt from "jsonwebtoken";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors());

const { PORT = "3000", SECRET_KEY } = process.env;
const port = Number(PORT) || 3000;

app.get("/", (_req, res) => {
  res.send({ message: "Server is running" });
});

app.get("/generate-token", (_req, res) => {
  const token = jwt.sign({ user: "app01" }, SECRET_KEY, { expiresIn: "1h" });
  res.json({ token });
});

app.get("/validate-token", (req, res) => {
  const token = req.query.token;
  try {
    const decoded = jwt.verify(token, SECRET_KEY);
    res.json({ valid: true, decoded });
  } catch (error) {
    res.json({ valid: false, error: error.message });
  }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
