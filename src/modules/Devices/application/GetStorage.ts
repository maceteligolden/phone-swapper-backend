import { injectable } from 'tsyringe';
import { Request } from 'express';
import StorageRepository from '../repositories/StorageRepository';


@injectable()
export default class GetStorage {
  constructor(
    private storageRepository: StorageRepository,
  ) {}

  async execute(req: Request) {
   return await this.storageRepository.getStorages({model: req.params.id})
  }
}
