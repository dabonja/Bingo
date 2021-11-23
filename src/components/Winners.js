import React from 'react';
import CustomList from './CustomList'
import CustomListItem from './CustomListItem'
const Winners =(props)=>{
  const {winnerCombos}= props;

  return(
    <div className="winners " data-testid="winnersList">
    <h1>Winner combinations</h1>
      <ul style={{width: '80%'}}>
      {
        winnerCombos && winnerCombos.map( (item,idx) => (
          <li key={idx}><span>{`[${item}]`}</span></li>
        ))
      }
      </ul>
    </div>
  )
}

export default Winners;
