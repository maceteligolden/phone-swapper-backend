import { injectable } from 'tsyringe';
import DeviceSchema from '../../../infrastruture/schemas/DeviceSchema';
import { createData, deleteData, readData, readsingleData, updateData } from '../../../infrastruture/utils';

@injectable()
export default class DeviceRepository {
  constructor() {}

  async addDevice(payload: any) {
    const Device = await createData(DeviceSchema, payload);
    return Device;
  }

  async getDevices(payload: any) {
    const Devices = await readData(DeviceSchema, payload).populate(['model', 'provider', 'vendor']);
    return Devices;
  }

  async getDevice(payload: any, select?: any) {
    const Device = await readsingleData(DeviceSchema, payload, select).populate(['model', 'provider', 'vendor']);
    return Device;
  }

  async updateDevice(keyword: any, data: any) {
    const Device = await updateData(DeviceSchema, keyword, data).populate(['model', 'provider', 'vendor']);
    return Device;
  }

  async deleteDevice(id: string) {
    const Device = await deleteData(DeviceSchema, { _id: id });
    return Device;
  }
}
