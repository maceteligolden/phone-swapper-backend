import { injectable } from 'tsyringe';
import ModelSchema from '../../../infrastruture/schemas/ModelSchema';
import { createData, deleteData, readData, readsingleData, updateData } from '../../../infrastruture/utils';

@injectable()
export default class ModelRepository {
  constructor() {}

  async addModel(payload: any) {
    const Model = await createData(ModelSchema, payload);
    return Model;
  }

  async getModels(payload: any) {
    const Models = await readData(ModelSchema, payload).populate('provider');
    return Models;
  }

  async getModel(payload: any, select?: any) {
    const Model = await readsingleData(ModelSchema, payload, select).populate('provider');
    return Model;
  }

  async updateModel(keyword: any, data: any) {
    const Model = await updateData(ModelSchema, keyword, data).populate('provider');
    return Model;
  }

  async deleteModel(id: string) {
    const Model = await deleteData(ModelSchema, { _id: id });
    return Model;
  }
}
