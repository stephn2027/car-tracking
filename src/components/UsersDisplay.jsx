import React from 'react'

export default function UsersDisplay({operator,deleteOperator,handleEditClick,i}) {
    return (
        <tr>
        <td>{i + 1}</td>
        <td>{operator.name}</td>
        <td>{operator.email}</td>
        <td style={{ fontStyle: 'italic' }}>
          {operator.password !== ''
            ? operator.password
            : 'not yet assigned'}
        </td>

        <td>
          <button
            className="btn btn-danger"
            onClick={() => deleteOperator(operator.id)}
          >
            Delete
          </button>
        </td>
        <td>
          <button
            className="btn btn-info"
            onClick={() => handleEditClick(operator.id)}
          >
            Edit
          </button>
        </td>
      </tr>
    )
}
