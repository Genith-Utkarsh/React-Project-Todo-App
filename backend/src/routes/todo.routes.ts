import { Router } from 'express';
import { createTodo, deleteTodo, getTodos, updateTodo } from '../controllers/todo.controller.js';

const todoRouter = Router();

todoRouter.get('/todos', getTodos);
todoRouter.post('/create', createTodo);
todoRouter.delete('/delete/:todoId', deleteTodo);
todoRouter.put('/update/:todoId', updateTodo);

export default todoRouter;
