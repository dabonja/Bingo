import React from 'react'

const BingoForma = React.forwardRef((props,ref) => {
    const { onSubmit, onChange, onClick,disabled} = props;

    return (
        <div className="form-container">
        <h3 style={{color:'rgba(9, 92, 245, 0.79)'}}>Enter numbers</h3>
        <form onSubmit={onSubmit} className="forma" >
            <input ref={ref} type="number" onChange={onChange} pattern="\d{2}" /><br/>
            <button  disabled ={disabled} type="submit" className="btn btn-primary mt-3 mb-3"> Add number</button>
        </form>
        <div>
  <button  disabled ={disabled}  onClick={onClick} className="btn btn-primary btn_potvrdi ">Confirm combination</button>
        </div>

        </div>
    )
}
)
export default BingoForma
