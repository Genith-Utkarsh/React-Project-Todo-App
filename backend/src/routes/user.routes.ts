import { Router } from 'express';
import { userSignIn, userSignUp } from '../controllers/user.controller.js';

const userRouter = Router();

userRouter.post('/signup', userSignUp);
userRouter.post('/signin', userSignIn);

export default userRouter;
