import { Fragment } from "react";
//to request some props as a must use proptype 
import PropTypes from 'prop-types';

const PrimeraApp = ( {wave} ) =>{
    // -------------- to request some props as a must ------------------------
    // if(!wave){
    //     throw new Error('the wave is has been required')
    // }
    // const saludo = 'Hola Mundo'
    // ----------------------------------------------------------------------
    return(
        <Fragment>
            <h1> {wave} </h1>
            <p>Mi primera App</p>

        </Fragment>
    )
}

export default PrimeraApp;