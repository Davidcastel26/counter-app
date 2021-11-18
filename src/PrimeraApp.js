import { Fragment } from "react";
//to request some props as a must use proptype 
import PropTypes from 'prop-types';
// import CounterApp from "./CounterApp";

const PrimeraApp = ( {wave, subTitle} ) =>{
    // -------------- to request some props as a must ------------------------
    // if(!wave){
    //     throw new Error('the wave is has been required')
    // }
    // const saludo = 'Hola Mundo'
    // ----------------------------------------------------------------------
    return(
        <Fragment>
            <h1>{wave}</h1>
            <p>{subTitle}</p>
            {/* <CounterApp value={23}  /> */}
        </Fragment>
    )
}

PrimeraApp.propTypes = {
    wave: PropTypes.string.isRequired,
    subTitle: PropTypes.string
}

PrimeraApp.defaultProps = {
    subTitle: "I wish you the best!",
}

export default PrimeraApp;