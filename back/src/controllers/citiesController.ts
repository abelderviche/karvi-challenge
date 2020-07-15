import { Request, Response, NextFunction } from 'express';

import citiesService from '@services/citiesService';

class CitiesController {
  
  public getCities(req: Request, res: Response, next: NextFunction) {
    try {
      res.json(citiesService.getCities());
    } catch (err) {
      next(err);
    }
  }
}

export const citiesController = new CitiesController();