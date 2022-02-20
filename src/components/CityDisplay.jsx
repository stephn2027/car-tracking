import React from 'react'

export default function CityDisplay({city,handleDelete,handleChange,index}) {
    return (
        
        <tr>
                 
                 <td>{index + 1}</td>
                 <td>{city.city}</td>
                 <td>{city.admin_name}</td>
                 <td style={{fontStyle:"italic"}}>{city.car!==''?city.car:"Vacant"}</td>
                 <td style={{fontStyle:"italic"}}>{city.operator!==''?city.operator:"Vacant"}</td>
                 <td>
                   <button className="btn btn-danger" onClick={()=>handleDelete(city)}>Delete</button>
                 </td>
                 <td>
                   <button className="btn btn-info" onClick={()=>handleChange(city.id)}>Edit</button>
                 </td>
        </tr>
            
      
    )
}
