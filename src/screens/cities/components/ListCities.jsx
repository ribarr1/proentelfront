import React from 'react';
import TableRow from './TableRow';

const ListCities = (props) => 
{
    const handleEdit = (city) => {
        // aquí colocas el código para editar una ciudad
      };
    
      const handleDelete = (city) => {
        // aquí colocas el código para eliminar una ciudad
      };
      return (
  <table>
    <thead>
      <tr>
        <th>Code</th>
        <th>Name</th>
        <th>Code State</th>
        <th>Edit</th>
        <th>Delete</th>
      </tr>
    </thead>
    <tbody>
      {props.data.data && props.data.data.length > 0 
        ? props.data.data.map((city, index) => (
            <TableRow key={index} city={city} handleEdit={handleEdit}  handleDelete={handleDelete}  />
          ))
        : <tr><td colSpan="3"> No tengo Ciudades aún! </td></tr>
      }
    </tbody>
  </table>
);
};

export default ListCities;