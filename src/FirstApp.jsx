import { Fragment } from 'react'
import PropTypes from 'prop-types'
const newMessage = "jose manuel";

const suma=(a,b)=>{
    return a+b;
}

export const FirstApp =({title,subtitle})=>{
    return (
        <Fragment>
            <h1>Hola soy {title}</h1>
            <h3>Mi numero {subtitle}</h3>
            <h2>{newMessage} primer componte FristApp </h2>
            <p>mi primer introducion a React</p>
            <p>Suma de 100+435= { suma(100,435)}</p>
        </Fragment>
    );
}

FirstApp.prototypes={
    title:PropTypes.string.isRequired,
    subtitle:PropTypes.number.isRequired
}

FirstApp.defaultProps={
    title:'No hay titulo',
    subtitle:456,
    name:"Maria Jose"
}