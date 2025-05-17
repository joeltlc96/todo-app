import {Router} from "express";
import { GetTodos, GetTodoById, CreateTodo, CompleteTodo, DeleteTodo }
    from "../controllers/todo.controller.js";

const routerTODOS = Router();

routerTODOS.get('/todos', GetTodos);

routerTODOS.get('/todos/:id', GetTodoById);

routerTODOS.post('/todos', CreateTodo);

routerTODOS.post('/CompleteTodo/:id', CompleteTodo);

routerTODOS.delete('/DeleteTodos/:id', DeleteTodo);

export default routerTODOS;
