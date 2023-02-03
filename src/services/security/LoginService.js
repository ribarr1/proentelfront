import API from '../config';

const LOGIN_ENDPOINTS = {
  LOGIN: "proentel.security.be.api/v1/user/login" //URI para llamar a todas las ciudades
  
}

const LoginService = { //Objeto City Service
  post: (data) => new Promise(
    (resolve,reject) => {
      API.post(LOGIN_ENDPOINTS.LOGIN, data)
      .then(
        res => res.data
      )
      .then(
        data => resolve(data)
      )
      .catch(
        err => reject(err)
      )
    }
  ), 

}

export default LoginService;