import React from 'react'

export default function Admin({user,logout}) {
    return (
        <div className="admin-dashboard">
        <h2>
          welcome, Admin <span>{user.name}</span>
        </h2>
        <button onClick={logout}>Logout</button>
      </div>
    )
}
