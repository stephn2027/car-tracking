import React from 'react'

export default function Operator({user, logout}) {
    return (
        <div className="operator-dashboard">
        <h2>
          welcome, <span>{user.name}</span>
        </h2>
        <button className='btn btn-outline-dark' onClick={logout}>Logout</button>
      </div>
    )
}
