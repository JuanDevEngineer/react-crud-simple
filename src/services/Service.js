import requestApi from './config';

export class Service {
  static _instanceService = null;
  constructor() {}

  static getInstance() {
    if (Service._instanceService === null) {
      this._instanceService = new Service();
    }
    return this._instanceService;
  }

  async fetchService(endpoint, method = 'GET', data = {}) {
    let response;
    if (method === 'GET') {
      try {
        response = await requestApi.get(`${endpoint}`);
        return response;
      } catch (error) {
        console.log(error);
      }
    }

    if (method !== 'GET') {
      try {
        response = await requestApi.request(`${endpoint}`, {
          method: method,
          data: Object.keys(data).length !== 0 ? data : {},
        });
        return response;
      } catch (error) {
        console.log(error);
      }
    }
  }
}
