import { injectable } from 'tsyringe';
import StorageSchema from '../../../infrastruture/schemas/StorageSchema';
import { createData, deleteData, readData, readsingleData, updateData } from '../../../infrastruture/utils';

@injectable()
export default class StorageRepository {
  constructor() {}

  async addStorage(payload: any) {
    const Storage = await createData(StorageSchema, payload);
    return Storage;
  }

  async getStorages(payload: any) {
    const Storages = await readData(StorageSchema, payload).populate('model');
    return Storages;
  }

  async getStorage(payload: any, select?: any) {
    const Storage = await readsingleData(StorageSchema, payload, select).populate('model');
    return Storage;
  }

  async updateStorage(keyword: any, data: any) {
    const Storage = await updateData(StorageSchema, keyword, data).populate('model');
    return Storage;
  }

  async deleteStorage(id: string) {
    const Storage = await deleteData(StorageSchema, { _id: id });
    return Storage;
  }
}
