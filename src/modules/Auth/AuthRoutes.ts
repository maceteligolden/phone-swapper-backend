import { Router } from 'express';
import AuthController from './controller/AuthController';
import { container } from 'tsyringe';

const authRouter = Router();
const authController = container.resolve(AuthController);

authRouter.post('/register', (req, res) => authController.register(req, res));
authRouter.post('/login', (req, res) => authController.Login(req, res));

export default authRouter;
