import { useState } from 'react';
import PropTypes from 'prop-types';


//Cuando se cambia el estado (setCounter) el componente se vuelve a ejecutar, pero el useState mantiene ese valor
export const CounterApp = ({ value }) => {

    //Este hook cambia el estado y luego vuelve a renderizar el componente, solo se actualiza la línea de código
    //a la que se le cambia el estado (h2)
    const [ counter, setCounter ] = useState( value );
    //Se usa setCounter para cambiar el estado de ese valor (segunda función)

    const handleAdd = () => {
        //console.log( event );

        //Primer forma usando COUNTER
        //setCounter( counter + 1);

        //Segunda forma sin usar el COUNTER
        //valor actual del counter + 1
        setCounter( (c) => c + 1 ); //Si tenemos una función que regrese el nuevo valor del counter, (c) contiene el valor el valor actual del counter 
    }

    const handleSub = () => setCounter( (c) => c - 1);

    const handleRes = () => setCounter( value );

  return (
    <>
        <h1>CounterApp</h1>
        <h2> { counter } </h2>

        <button onClick={ handleAdd }> +1 </button>
        <button onClick={ handleSub }> -1 </button>
        <button aria-label="btn-reset" onClick={ handleRes }> Reset </button>
    </>
  )
}


CounterApp.propTypes = {
    value: PropTypes.number.isRequired,
}
