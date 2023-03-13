import { Router } from 'express';
import DeviceController from './controller/DeviceController';
import { container } from 'tsyringe';

const deviceRouter = Router();
const deviceController = container.resolve(DeviceController);

deviceRouter.get('/storages/:id', (req, res) => deviceController.fetchStorage(req, res));
deviceRouter.get('/providers', (req, res) => deviceController.fetchProvider(req, res));
deviceRouter.get('/model/:id', (req, res) => deviceController.fetchModel(req, res));
deviceRouter.post('/search', (req, res) => deviceController.fetchResult(req, res));
deviceRouter.post('/create-storage', (req, res) => deviceController.createStorage(req, res));
deviceRouter.post('/create-model', (req, res) => deviceController.createModel(req, res));
deviceRouter.post('/create-provider', (req, res) => deviceController.createProvider(req, res));
deviceRouter.post('/create-device', (req, res) => deviceController.createDevice(req, res));

export default deviceRouter;
