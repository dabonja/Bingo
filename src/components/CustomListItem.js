import React from 'react'

const CustomListItem =({color,number })=>{
  return(
    <>
    <li className="list-inline-item">
        <div className="outer-ball" style={{backgroundColor: color}}>
          <div  className="inner-ball">
          {number}
          </div>
        </div>
    </li>
    </>
  )
}

export default CustomListItem
