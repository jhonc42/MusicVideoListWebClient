import { RoleTypeEnum } from '../enums/role-type.enum';
export class UserToken {

    name: string;
    email: string;
    token: string;
    role: RoleTypeEnum;
  
    constructor() {
      this.name = '';
      this.email = '';
      this.token = '';
      this.role = RoleTypeEnum.Customer;
    }
  }