import React from 'react'

export const Form = props => {

        return (
            <>
               <div  style={{textAlign: 'center'}}>
               <h1>Weather App</h1>
                   <form onSubmit ={props.inputLocation} >
                       <input type="text" name="city" placeholder="City"/>
                       <button  style={{marginLeft: '10px',marginRight: '10px'}}>search</button>
                       <button onClick={props.geoLocation}>my location</button>
                   </form>
               </div>
            </>
        )
}
