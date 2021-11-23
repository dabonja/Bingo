import React from 'react';

const CustomList = ({children})=>{
  return(
        <ul className="list-inline styled-list">
        {children}
        </ul>
  )
}

export default CustomList
