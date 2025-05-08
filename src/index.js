import express from "express";
import routerTODOS from "./routes/todo.routes.js";

const app = express();
app.use(express.json());
app.use(routerTODOS);

app.listen(3000, () => console.log("Server is running on port ",3000));