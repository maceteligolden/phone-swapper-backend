import { injectable } from 'tsyringe';
import { Request, Response } from 'express';
import { Http } from '../../../infrastruture/utils';
import Register, { IRegister } from '../application/Register';
import Login from '../application/Login';


@injectable()
export default class AuthController {
  constructor(
    private addUser: Register,
    private login: Login,
  ) {}

  //Register investor
  async register(req: Request, res: Response) {
    try {
      const payload: IRegister = {
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        password: req.body.password,
        email: req.body.email,
        phone: req.body.phone,
        address: req.body.address,
        state: req.body.state,
        city: req.body.city,
        vendor_name: req.body.vendor_name
      };

      const createuser = await this.addUser.execute(payload);

      if (createuser === 'emailExist') {
        return new Http().Response({
          res: res,
          statuscode: 401,
          message: 'Email already taken',
        });
      }

      if (createuser === 'phoneExist') {
        return new Http().Response({
          res: res,
          statuscode: 402,
          message: 'Phone already taken',
        });
      }

      new Http().Response({
        res: res,
        statuscode: 200,
        message: 'User account created',
        data: createuser,
      });
    } catch (err: any) {
      new Http().Response({
        res: res,
        statuscode: 500,
        message: err.message,
      });
    }
  }

  //login investor
  async Login(req: Request, res: Response) {
    try {
      const { email, password } = req.body;

      const token = await this.login.execute(email, password);
      console.log(token);
      if (token === false) {
        return new Http().Response({
          res: res,
          statuscode: 401,
          message: 'User not authorized',
        });
      }

      new Http().Response({
        res: res,
        statuscode: 200,
        message: 'User authorized',
        data: token,
      });
    } catch (err: any) {
      new Http().Response({
        res: res,
        statuscode: 500,
        message: err.message,
      });
    }
  }
}
