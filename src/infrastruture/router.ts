import { Application } from 'express';
import authRouter from '../modules/Auth/AuthRoutes';
import deviceRouter from '../modules/Devices/DeviceRouter';


export default function setModuleRouters(app: Application): void {
  app.use('/api/v1/auth', authRouter);
  app.use('/api/v1/devices', deviceRouter);
}
