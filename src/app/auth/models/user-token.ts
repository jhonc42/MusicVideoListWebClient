import { RoleTypeEnum } from '../enums/role-type.enum';
export class UserToken {

    id: string;
    name: string;
    email: string;
    token: string;
    role: RoleTypeEnum;
  
    constructor() {
      this.id = '';
      this.name = '';
      this.email = '';
      this.token = '';
      this.role = RoleTypeEnum.Customer;
    }
  }