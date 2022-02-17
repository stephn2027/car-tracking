import React from 'react'

export default function Operator({user, logout}) {
    return (
        <div className="operator-dashboard">
        <h2>
          welcome, Operator <span>{user.name}</span>
        </h2>
        <button onClick={logout}>Logout</button>
      </div>
    )
}
