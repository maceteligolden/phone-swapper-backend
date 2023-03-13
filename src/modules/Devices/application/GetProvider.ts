import { injectable } from 'tsyringe';
import ProviderRepository from '../repositories/ProviderRepository';


@injectable()
export default class GetProvider {
  constructor(
    private providerRepository: ProviderRepository,
  ) {}

  async execute() {
   return await this.providerRepository.getProviders({})
  }
}
