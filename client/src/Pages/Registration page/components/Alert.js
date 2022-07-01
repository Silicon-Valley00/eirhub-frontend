import React from 'react'


const Alert = ({show,msg})=>{
    console.log(show,msg)

    return(
        <div className='show'>
            <p>{msg}</p>
        </div>
    )

}

export default Alert