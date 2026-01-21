const express = require("express")
const urlRoute = require('./Routes/url')
const connectDB = require('./connection')
const staticRoute = require("./Routes/staticRoute")
const path  = require("path")
require("dotenv").config(); // missing

const app = express();
const PORT = 8000;

console.log(process.env.MONGO_URI);

connectDB(process.env.MONGO_URI)
.then(()=>{
    console.log("Database Connected.")
})
.catch((err)=> console.log(err))

app.use(express.json())
app.use(express.urlencoded({extended : false}))
app.use("/", staticRoute)
app.use('/url', urlRoute)
app.set("view engine", "ejs")
app.set("views", path.resolve("./Views"))
app.listen(PORT, ()=>{
    console.log(`Server started at ${PORT}`)
})