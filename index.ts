import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";

// Fix __dirname for ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const port = process.env.PORT || 3000;

// Serve static files from the "client" folder
app.use(express.static(path.join(__dirname, "../client")));

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});