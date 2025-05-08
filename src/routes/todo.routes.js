import {Router} from "express";
import { getTodos, getTodoById, CreateTodo, completeTodo, deleteTodo } from "../controllers/todo.controller.js";

const routerTODOS = Router();

routerTODOS.get('/todos', getTodos);

routerTODOS.get('/todos/:id', getTodoById);

routerTODOS.post('/todos', CreateTodo);

routerTODOS.post('/completeTodos/:id', completeTodo);

routerTODOS.delete('/deleteTodos/:id', deleteTodo);

export default routerTODOS;
