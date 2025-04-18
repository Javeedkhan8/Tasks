const express = require("express");
const cors = require("cors")
const connectDB = require("./config/config")
const JobRoutes = require("./routes/jobRoutes");

require("dotenv").config();

connectDB();

const app = express();
app.use(express.json());
app.use(cors())

app.use("/api/job",JobRoutes);

const port = process.env.PORT

app.listen(port, () => {
    console.log(`server running on ${port}`)
})