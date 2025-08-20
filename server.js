require('dotenv').config();
const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;
const MESSAGE = process.env.MESSAGE || "Hello from Render (fixed version)!";

app.get('/', (req, res) => {
  res.send(`<h1>${MESSAGE}</h1><p>Running on port ${PORT}</p>`);
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});
