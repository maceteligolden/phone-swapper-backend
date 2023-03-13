import { injectable } from 'tsyringe';
import UserSchema from '../../../infrastruture/schemas/UserSchema';
import { createData, deleteData, readData, readsingleData, updateData } from '../../../infrastruture/utils';

@injectable()
export default class UserRepository {
  constructor() {}

  async addUser(payload: any) {
    const User = await createData(UserSchema, payload);
    return User;
  }

  async getUsers(payload: any) {
    const Users = await readData(UserSchema, payload).populate('wallet');
    return Users;
  }

  async getUser(payload: any) {
    const User = await readsingleData(UserSchema, payload).populate('wallet');
    return User;
  }

  async updateUser(keyword: any, data: any) {
    const User = await updateData(UserSchema, keyword, data);
    return User;
  }

  async deleteUser(id: string) {
    const User = await deleteData(UserSchema, { _id: id });
    return User;
  }
}
