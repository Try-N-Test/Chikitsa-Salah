const express = require("express");
const next = require("next");

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });

const handleRequest = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();
  const DB_Connection = require("@/db/connection");
  // Handle requests to the API route
  server.get("/api/getDoctors", async (req, res) => {
    const Doctors = await getDoctors(req, res);

    // Return the doctors to the client
    res.json(Doctors);
  });

  server.post("/api/recommendedDoctors",async(req,res)=>{
    const Doctors = await recommendedDoctors(req,res);

    res.json(Doctors);
  });

  server.all("*", (req, res) => {
    return handleRequest(req, res);
  });

  server.listen(8000, () => {
    console.log(`Server is running on port 8000`);
  });
});
