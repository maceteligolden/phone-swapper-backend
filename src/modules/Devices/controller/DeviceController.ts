import { injectable } from 'tsyringe';
import { Request, Response } from 'express';
import { Http } from '../../../infrastruture/utils';
import GetStorage from '../application/GetStorage';
import GetProvider from '../application/GetProvider';
import GetModel from '../application/GetModel';
import AddDevice from '../application/AddDevice';
import Search from '../application/Search';
import AddStorage from '../application/AddStorage';
import AddProvider from '../application/AddProvider';
import AddModel from '../application/AddModel';


@injectable()
export default class DeviceController {
  constructor(
    private getStorage: GetStorage,
    private getProvider: GetProvider,
    private getModel: GetModel,
    private getResult: Search,
    private addDevice: AddDevice,
    private addStorage: AddStorage,
    private addModel: AddModel,
    private addProvider: AddProvider,
    
  ) { }

  async fetchStorage(req: Request, res: Response) {
    try {
      const logs = await this.getStorage.execute(req);

      new Http().Response({
        res: res,
        statuscode: 200,
        message: 'Storage retrieved',
        data: logs,
      });
    } catch (err: any) {
      new Http().Response({
        res: res,
        statuscode: 500,
        message: err.message,
      });
    }
  }

  async fetchProvider(req: Request, res: Response) {
    try {
      const logs = await this.getProvider.execute();

      new Http().Response({
        res: res,
        statuscode: 200,
        message: 'Provider retrieved',
        data: logs,
      });
    } catch (err: any) {
      new Http().Response({
        res: res,
        statuscode: 500,
        message: err.message,
      });
    }
  }

  async fetchModel(req: Request, res: Response) {
    try {
      const logs = await this.getModel.execute(req);

      new Http().Response({
        res: res,
        statuscode: 200,
        message: 'Model retrieved',
        data: logs,
      });
    } catch (err: any) {
      new Http().Response({
        res: res,
        statuscode: 500,
        message: err.message,
      });
    }
  }

  async fetchResult(req: Request, res: Response) {
    try {
      const logs = await this.getResult.execute(req);

      new Http().Response({
        res: res,
        statuscode: 200,
        message: 'Result retrieved',
        data: logs,
      });
    } catch (err: any) {
      new Http().Response({
        res: res,
        statuscode: 500,
        message: err.message,
      });
    }
  }

  async createStorage(req: Request, res: Response) {
    try {
      const result = await this.addStorage.execute(req);

      new Http().Response({
        res: res,
        statuscode: 200,
        message: 'Storage created',
        data: result,
      });
    } catch (err: any) {
      new Http().Response({
        res: res,
        statuscode: 500,
        message: err.message,
      });
    }
  }

  async createModel(req: Request, res: Response) {
    try {
      const result = await this.addModel.execute(req);

      new Http().Response({
        res: res,
        statuscode: 200,
        message: 'Model created',
        data: result,
      });
    } catch (err: any) {
      new Http().Response({
        res: res,
        statuscode: 500,
        message: err.message,
      });
    }
  }

  async createProvider(req: Request, res: Response) {
    try {
      const result = await this.addProvider.execute(req);

      new Http().Response({
        res: res,
        statuscode: 200,
        message: 'Provider created',
        data: result,
      });
    } catch (err: any) {
      new Http().Response({
        res: res,
        statuscode: 500,
        message: err.message,
      });
    }
  }

  async createDevice(req: Request, res: Response) {
    try {
      const result = await this.addDevice.execute(req);

      new Http().Response({
        res: res,
        statuscode: 200,
        message: 'Device created',
        data: result,
      });
    } catch (err: any) {
      new Http().Response({
        res: res,
        statuscode: 500,
        message: err.message,
      });
    }
  }
}
