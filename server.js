const express = require("express");
const cors = require("cors");
require("dotenv").config();
const schoolRoutes = require("./routes/schoolRoutes");
const { exec } = require("child_process");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.use("/api", schoolRoutes);

// Run Prisma migrations before starting the server
exec("npx prisma migrate deploy", (err, stdout, stderr) => {
  if (err) {
    console.error(`Migration error: ${stderr}`);
    process.exit(1); // Stop server if migration fails
  }
  console.log(`Migration output: ${stdout}`);

  // Start the server after migrations are applied
  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
});

// Health check route for Render
app.get("/healthz", (req, res) => {
  res.status(200).send("OK");
});
