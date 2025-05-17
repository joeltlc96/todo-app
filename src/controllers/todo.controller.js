import { dbClient } from "../db.js";
import {TODOS} from "../constantes/constantes.js";

export const getTodos = async (req, res) => {

    const { rows } = await dbClient.query(
        `SELECT * FROM todos`,
    );
    res.status(200).json(rows);
};

export const getTodoByIdSample = (req, res) => {
    const { id } = req.params;
    const resultadoBusqueda = TODOS.filter( x => x.id == id);

    if(resultadoBusqueda.length > 0){
        res.status(200).json(resultadoBusqueda[0]);
    }else {
        res.status(404).json({
            mensaje: `No se encontro producto con id ${id}`
        });
    }
};

export const getTodoById = async (req, res) => {
    const { id } = req.params;

    const { rows } = await dbClient.query(
        `SELECT * FROM todos WHERE id = $1`,
        [id]
    );

    if(rows.length > 0){
        res.status(200).json(rows[0]);
    }else {
        res.status(404).json({
            mensaje: `No se encontro producto con id ${id}`
        });
    }
};

export const CompleteTodo = async (req, res) => {
    const { id } = req.params;

    const { rows } = await dbClient.query(
        `update todos set complete = '1' WHERE id = $1 RETURNING *`,
        [id]
    );

    if(rows.length > 0){
        res.status(200).json(rows[0]);
    }else {
        res.status(404).json({
            mensaje: `Todo no existe`
        });
    }
};

export const DeleteTodo = async (req, res) => {
    const { id } = req.params;

    const { rows } = await dbClient.query(
        `DELETE from todos WHERE id = $1 RETURNING *`,
        [id]
    );

    if(rows.length > 0){
        res.status(200).json(rows[0]);
    }else {
        res.status(404).json({
            mensaje: `Todo no existe`
        });
    }
};

export const CreateTodo  = async (req, res) => {
    try{
        const { name, description } = req.body;
        const complete = 0;

        const { rows } = await dbClient.query(
            "INSERT INTO todos (name, description, complete) VALUES ($1, $2, $3) RETURNING *",
            [name, description, complete]
        );
        console.log(rows[0]);

        res.status(201).json({
            mensaje: "Todo creado correctamente",
        });
    }
    catch(error)
    {
        res.status(500).json({
            mensaje: error.message
        });
    }
};