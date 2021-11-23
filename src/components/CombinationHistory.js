import React from 'react';

const CombinationHistory =(props)=>{
  const {history} = props;
    //filtriraj po rundi da izbacuje kombinacije
    /*

        const filteredByRound = history.filter( item =>{

        })
    */
  return(
    <div className="history-container">
    <h3>Combinations history</h3>
      <ul className="styled-list list-inline ">
      {
        history && history.map( (item,idx) =>(
          <li key={idx}>{`Runda:( ${item.roundNumber}), kombinacije: ${item.numbers}`}</li>
        ))
      }
      </ul>
    </div>
  )
}

export default CombinationHistory
