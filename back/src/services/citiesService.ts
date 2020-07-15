import cars from '@store/data.json';

export default class CitiesService {

  static getCities() {
    let cities:any[] = []
    cars.forEach(car => {
      if(cities.find(city=>city.id === car.city.id) === undefined){
        cities.push(car.city)  
      }
    })
    return cities

  }

}
