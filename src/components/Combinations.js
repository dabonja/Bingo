import React from 'react'

const Combinations =(props)=>{
  const {playerCombinations,round} = props;

    return(
      <div className="combinations-container" >Combinations:
      <ul className="styled-list" data-testid ="combosList">
          {
              playerCombinations && playerCombinations.map((item, idx) => {
                if(item.roundNumber == round ){
                    return <li key={idx} >{ `Combination ID: ${idx} --> (${item.numbers})`}</li>
                }
              })
          }
      </ul>
      </div>

    )
}

export default Combinations
