import express from 'express';
import routerTodos from './routes/todos.rotes.js';

const app =express();
app.use(routerTodos);


app.listen(3000, ()=> console.log(`Listening on port 3000.`));