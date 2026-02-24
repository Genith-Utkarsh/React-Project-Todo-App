import type { Request, Response } from 'express';
import { Todo } from '../db/todo.js';

export const getTodos = async (req: Request, res: Response) => {};

export const createTodo = async (req: Request, res: Response) => {
  try {
    const { title, description } = req.body;
    const todo  = await Todo.create({
      title,
      description
    })

    res.status(200).json({
      msg : "Todo created successfully.",
      todo : todo
    })
  } catch (err) {
    res.status(500).json({
      msg : "Error while creating the todo"
    })
  }
};


export const deleteTodo = async(req:Request, res : Response) => {

}

export const updateTodo = async(req : Request, res : Response) => {
  
}
