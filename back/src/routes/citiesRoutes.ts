import { Router } from 'express';

import { citiesController } from '@controllers/citiesController';

class citiesRoutes {
  public router: Router = Router();

  constructor() {
    this.config();
  }

  config(): void {
    this.router.get('/', citiesController.getCities);
  }
}

const routes = new citiesRoutes();
export default routes.router;