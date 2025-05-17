import {Router} from "express";
import { getTodos, getTodoById, CreateTodo, CompleteTodo, DeleteTodo } from "../controllers/todo.controller.js";

const routerTODOS = Router();

routerTODOS.get('/todos', getTodos);

routerTODOS.get('/todos/:id', getTodoById);

routerTODOS.post('/todos', CreateTodo);

routerTODOS.post('/CompleteTodo/:id', CompleteTodo);

routerTODOS.delete('/DeleteTodos/:id', DeleteTodo);

export default routerTODOS;
