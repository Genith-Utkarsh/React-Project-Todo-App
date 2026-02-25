import type { Request, Response } from 'express';
import { Todo } from '../db/todo.js';
import type mongoose from 'mongoose';

interface CustomRequest extends Request {
  userId?: mongoose.Schema.Types.ObjectId;
}

export const getTodos = async (req: Request, res: Response) => {};

export const createTodo = async (req: CustomRequest, res: Response) => {
  
  const userId = req.userId;

  if (!userId) {
    res.status(400).json({ msg: 'User ID is missing' });
    return;
  }

  try {
    const { title, description } = req.body;
    const todo = await Todo.create({
      title,
      description,
      userId,
    });

    res.status(200).json({
      msg: 'Todo created successfully.',
      todo: todo,
    });
  } catch (err) {
    res.status(500).json({
      msg: 'Error while creating the todo',
    });
  }
};

export const deleteTodo = async (req: Request, res: Response) => {};

export const updateTodo = async (req: Request, res: Response) => {};
