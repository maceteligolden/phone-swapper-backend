import { injectable } from 'tsyringe';
import { Request } from 'express';
import DeviceRepository from '../repositories/DeviceRepository';


@injectable()
export default class AddDevice {
  constructor(
    private deviceRepository: DeviceRepository,
  ) {}

  async execute(req: Request) {
   return await this.deviceRepository.addDevice(req.body)
  }
}
