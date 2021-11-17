import { Fragment } from "react";
import PropTypes from 'prop-types';
// hooks
import { useState } from 'react';

const CounterApp = ({title="Counter App", value = 0}) =>{

    const [ counter, setCounter ] = useState( 0 )
    

    //buttons functions 
    const handleAdd = (e) => {
        setCounter( counter + 1)
    }

    const handleRes = (e) => {
        setCounter( counter - 1)
    }

    const handleReste = (e) => {
        setCounter( value)
    }

    return (
        <Fragment>
            <h1>{title}</h1>
            <h2>{ counter }</h2>
            <button onClick={ handleRes }> -1 </button>
            <button onClick={handleReste}> Reset </button>
            <button onClick={ handleAdd }> +1 </button>
        </Fragment>
    );
}



export default CounterApp;

CounterApp.propTypes = {
    value: PropTypes.number.isRequired,
}