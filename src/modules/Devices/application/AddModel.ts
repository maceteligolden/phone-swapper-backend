import { injectable } from 'tsyringe';
import { Request } from 'express';
import ModelRepository from '../repositories/ModelRepository';


@injectable()
export default class AddModel {
  constructor(
    private modelRepository: ModelRepository,
  ) {}

  async execute(req: Request) {
   return await this.modelRepository.addModel(req.body)
  }
}
