import { Request, Response, NextFunction } from 'express';

import carService from '@services/carsService';

class CarsController {
  
  public getCars(req: Request, res: Response, next: NextFunction) {
    try {
      res.json(carService.getCars(req.query));
    } catch (err) {
      next(err);
    }
  }
}

export const carsController = new CarsController();