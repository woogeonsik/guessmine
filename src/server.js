import express from "express";

const PORT = 5000;
const app = express();

const handleListening = () =>
  console.log(`✅ Server runniung: http://localhost:${PORT}`);

app.listen(PORT, handleListening);
