const express = require("express");
const {createCompany,getCompaines} = require("../controller/JobController");

const router = express.Router();

router.post("/create-company",createCompany);
router.get("/companies",getCompaines);

module.exports = router