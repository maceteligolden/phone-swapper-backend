import { injectable } from 'tsyringe';
import { Request } from 'express';
import DeviceRepository from '../repositories/DeviceRepository';


@injectable()
export default class Search {
  constructor(
    private deviceRepository: DeviceRepository,
  ) {}

  async execute(req: Request) {
    const { provider, model, size, city, state, type, desired_provider, swap_cost, budget } = req.body;
    
    const devices = await this.deviceRepository.getDevices({});

    // estimate device
    let estimateNumerator = 0;

    let vendorCount = 0;

    devices.map((device: any) => {
      if (device.provider.name === provider && device.vendor.city === (city) && device.model.model === model && device.storage_size.size === size) {
        estimateNumerator += device.price;
        vendorCount += 1;
      }
    });

    const estimate = estimateNumerator / vendorCount;

    // find available deals
    if (type === 'Upgrade') {
      
      const filteredResult = devices.filter((device: any) => {
        return device.vendor.city === (city) && device.provider.name === desired_provider && device.swap_cost <= (estimate + budget)
      })

      return { result: filteredResult };

    } else {
      const filteredResult = devices.filter((device: any) => {
        return device.vendor.city === city && device.provider.name === desired_provider && device.swap_cost <= estimate 
      })

      return { result: filteredResult };
    }
    
  }
}
