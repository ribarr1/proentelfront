import API from '../config';

const CITIES_ENDPOINTS = {
  LIST_CITIES: "proentel.geography.be.api/v1/city", //URI para llamar a todas las ciudades
  CITY_DETAIL: "proentel.geography.be.api/v1/city/" //URI para llamar a una ciudad en especifico.
}

const CityService = { //Objeto City Service
  getAll: () => new Promise(
    (resolve,reject) => {
      API.get(CITIES_ENDPOINTS.LIST_CITIES)
      .then(
        res => res
      )
      .then(
        data => resolve(data)
      )
      .catch(
        err => reject(err)
      )
    }
  ), // Funcion que nos devolverá el valor de todas las ciudades
  get: (id) => new Promise(
    (resolve,reject) => {
      API.get(CITIES_ENDPOINTS.CITY_DETAIL+id)
      .then(
        res => res.data.data.city
      )
      .then(
        data => resolve(data)
      )
      .catch(
        err => reject(err)
      )      
    }
  ), //Funcion que nos devolverá el valor de una ciudad, la cual buscaremos via ID.

}

export default CityService;