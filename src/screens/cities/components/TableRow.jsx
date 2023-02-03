import React from 'react';
import './TableRow.css';

const TableRow = (props) => {
  const { code, name, code_state } = props.city;

  return (
    <tr className="table-row">
      <td>{code}</td>
      <td>{name}</td>
      <td>{code_state}</td>
      <td>
        <button onClick={() => props.handleEdit(props.city)}>Edit</button>
      </td>
      <td>
        <button onClick={() => props.handleDelete(props.city)}>Delete</button>
      </td>
    </tr>
  );
};

export default TableRow;