import { Router } from 'express';

import carsRoutes from '@routes/carsRoutes';
import citiesRoutes from '@routes/citiesRoutes';

class indexRoutes {
  public router: Router = Router();

  constructor() {
    this.config();
  }

  config(): void {
    this.router.get('/api-status', (req, res) => res.json({ status: 'ok', msg: 'Api funcionando correctamente...' }));
    this.router.use('/cars', carsRoutes);
    this.router.use('/cities', citiesRoutes);
  }
}

const routes = new indexRoutes();
export default routes.router;