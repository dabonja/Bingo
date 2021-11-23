import React from 'react';

const RoundStart =(props)=>{
  const {onClick, disabled,currentNumber, round,color} = props;

  const clr = color == ''  ? 'none' : 'block';
    return(
      <div  className="item-a" style={{color:'rgba(244, 102, 255, 1)'}} data-testid="roundStart">
          <h1 className="display-4">Bingo</h1>
          <p className="lead">Round: {round}</p>
            <button onClick={onClick} disabled={disabled} type="button" className="btn btn-danger btn-lg" >Start</button>
            <div className="crr">
            <div className="outer-ball" style={{width: '100px', height: '100px',position:'relative', top:'8rem',display: clr,backgroundColor: color,boxShadow: 'rgba(0, 0, 0, 0.56) 0px 22px 70px 4px'}}>
              <div className="inner-ball" style={{color: 'black',width: '62px', height: '62px',fontSize:'36px'}}>
                {currentNumber}
              </div>
            </div>
            </div>


      </div>
    )
}

export default RoundStart
