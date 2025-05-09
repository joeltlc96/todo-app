import express from "express";
import morgan from "morgan";
import routerTODOS from "./routes/todo.routes.js";
import cors from "cors";


const app = express();
app.use(cors());
app.use(express.json());

app.use(morgan("dev"));

app.use(routerTODOS);

app.listen(3000, () => console.log("Server is running on port ",3000));