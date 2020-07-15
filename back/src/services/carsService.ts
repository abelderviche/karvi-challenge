import cars from '@store/data.json';
import { Filters } from '@shared/interfaces';

export default class CarsService {

  static getCars(filters: Filters) {

    let filtered = cars;
    
    if (filters.city) filtered = filtered.filter(car => car.city.cityCode.toLowerCase().includes(filters.city.toLowerCase()));
    
    return {
      "availableFilters": this.getAvailableFilters(filtered),
      "items": filtered,
      "totalCount": filtered.length,
      "pageSize": 20, //valor que puede salir de una config
      "totalPages": 1 
    };
  }

  //obtengo todos los filtros disponibles, seteados en alguna config
  static getAvailableFilters(carsArray: Array<any>){

    const priceLimits = {
      "min": carsArray.reduce((min, b) => Math.min(min, b.minPrice), carsArray[0].minPrice),
      "max":  carsArray.reduce((min, b) => Math.max(min, b.minPrice), carsArray[0].minPrice)
    } 
    const brands = [...new Set(carsArray.map(m=>m.brand.id) )]
    const segments = [...new Set(carsArray.map(m=>m.segment.id) )]
    const fuelTypes = [...new Set(carsArray.map(m=>m.fuelTypeId) )]
    const transmissionTypes = [...new Set(carsArray.map(m=>m.transmisionTypeId) )]

    return {
      "priceLimits": priceLimits,
      "brands": brands,
      "segments": segments,
      "fuelTypes": fuelTypes,
      "transmissionTypes": transmissionTypes
  }
  }


}
