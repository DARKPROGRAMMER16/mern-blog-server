import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import Connection from "./database/db.js";
import dotenv from "dotenv";
import Router from "./routes/route.js";

dotenv.config();

const PORT = process.env.PORT || 8080;
const app = express();

// app.use(express.json());
app.use(cors());
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/", Router);

app.listen(PORT, () => {
  console.log(`the server is listning at port : ${PORT}`);
});

const db_url = process.env.DBURL;

Connection(db_url);
