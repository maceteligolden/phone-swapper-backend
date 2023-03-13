import { injectable } from 'tsyringe';
import { Request } from 'express';
import ProviderRepository from '../repositories/ProviderRepository';


@injectable()
export default class AddProvider {
  constructor(
    private providerRepository: ProviderRepository,
  ) {}

  async execute(req: Request) {
   return await this.providerRepository.addProvider(req.body)
  }
}
