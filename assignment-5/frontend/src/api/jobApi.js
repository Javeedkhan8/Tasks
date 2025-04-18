import axios from "axios";

const API = axios.create({
    baseURL : "http://localhost:2002/api/job"
})

export const createJob = (jobData) => API.post("/create-company",jobData);

export const getJobs = () => API.get("/companies")
