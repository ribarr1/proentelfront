import React, { Component } from 'react';
import CityLayout from '../components/CityLayout.jsx';
import ListCities from '../components/ListCities.jsx';
import CityService from '../../../services/geography/CityService';

export default class CitiesContainer extends Component {
  state = {
    data: [],
  }
  
  componentDidMount = () => {
    this.getAllCities();  
  }

  getAllCities = () => {
    CityService.getAll()
    .then(
      cities => {
       // console.log(cities);
        this.setState({
        data:cities,
      })
    }
    )
    
    .catch(
      err => console.log("Ocurrió un error",err)
    )
  } 

  render() {
    return (
      <CityLayout>
        <h1> Listado de Ciudades </h1>

        <ListCities
          data={this.state.data}
        />
        
      </CityLayout>
    );
  }
}