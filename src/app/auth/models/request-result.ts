export class RequestResult<T> {

    isSuccess: boolean;
    message: string;
    errors: string[];
    data: T | undefined;
  
    constructor() {
      this.isSuccess = false;
      this.message = '';
      this.errors = [];
      // this.data = null;
    }
  }