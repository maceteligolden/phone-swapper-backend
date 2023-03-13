import { injectable } from 'tsyringe';
import { generateToken, hash } from '../../../infrastruture/utils';
import UserRepository from '../repositories/UsersRepository';

export interface IRegister {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
  phone: string;
  address: string,
  state: string,
  city: string,
  vendor_name: string,
}

@injectable()
export default class Register {
  constructor(
    private userRepository: UserRepository,
  ) {}

  async execute(args: IRegister) {
    //check if user email exists
    const user = await this.userRepository.getUser({ email: args.email });

    //if user email exists
    if (user !== null) {
      return 'emailExist';
    }

    //check if user phone exists
    const userphone = await this.userRepository.getUser({ phone: args.phone });

    //if user phone exists
    if (userphone !== null) {
      return 'phoneExist';
    }

    //encrypt password
    const encryptpassword = await hash(args.password);

    //register user
    const userdata = {
      firstname: args.firstname.toLowerCase(),
      lastname: args.lastname.toLowerCase(),
      password: encryptpassword,
      email: args.email.toLowerCase(),
      phone: args.phone,
      role: 'VENDOR',
      vendor_name: args.vendor_name,
      address: args.address,
      city: args.city,
      state: args.state
    };

    const createuser = await this.userRepository.addUser(userdata);

    const someuserdata = {
      firstname: createuser.firstname,
      id: createuser._id,
      email: createuser.email,
      verified: createuser.verified,
    };

    const Token = await generateToken(someuserdata, 'vy73fhurf7r9g83hfenuvfnji029f3r8w7gbfru33yfg7r9ffh893fcr4');

    return {
      token: Token,
      user: someuserdata,
    };
  }
}
