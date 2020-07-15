import { Router } from 'express';

import { carsController } from '@controllers/carsController';

class carsRoutes {
  public router: Router = Router();

  constructor() {
    this.config();
  }

  config(): void {
    this.router.get('/', carsController.getCars);
  }
}

const routes = new carsRoutes();
export default routes.router;