import React from 'react';
import {useEffect} from 'react';
import CustomList from './CustomList'
import CustomListItem from './CustomListItem';


const BingoList = (props) => {
    const { numbers , currentNumber} = props;

    useEffect(()=>{

    },[])

    return (
        <div className="list-grid-container">
        <CustomList>
          {
             numbers && numbers.map( (item,idx) => (
                   <CustomListItem key={idx} data-testid={`bingo-${idx}`} color={item.color} number={item.number} />
             ))
          }
        </CustomList>
        </div>
    )


}

export default BingoList;
//, borderRadius:'50%'

/*
   <div id="currentBall" class="valign-wrapper">
      <div id="ballGraphic">
      <span id="ballText"></span>
      </div>
      <span id="callNumber">
      </span>
      </div>
*/
