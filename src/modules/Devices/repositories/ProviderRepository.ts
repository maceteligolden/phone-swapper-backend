import { injectable } from 'tsyringe';
import ProviderSchema from '../../../infrastruture/schemas/ProviderSchema';
import { createData, deleteData, readData, readsingleData, updateData } from '../../../infrastruture/utils';

@injectable()
export default class ProviderRepository {
  constructor() {}

  async addProvider(payload: any) {
    const Provider = await createData(ProviderSchema, payload);
    return Provider;
  }

  async getProviders(payload: any) {
    const Providers = await readData(ProviderSchema, payload);
    return Providers;
  }

  async getProvider(payload: any, select?: any) {
    const Provider = await readsingleData(ProviderSchema, payload, select);
    return Provider;
  }

  async updateProvider(keyword: any, data: any) {
    const Provider = await updateData(ProviderSchema, keyword, data);
    return Provider;
  }

  async deleteProvider(id: string) {
    const Provider = await deleteData(ProviderSchema, { _id: id });
    return Provider;
  }
}
