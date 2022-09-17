import { Fragment } from 'react'
import PropTypes from 'prop-types'
const newMessage = "jose manuel";

const suma=(a,b)=>{
    return a+b;
}

export const FirstApp =({title,subtitle})=>{
    return (
        <Fragment>
            <h1 data-testid="test-title">{ title }</h1>
            <h3>{ subtitle }</h3>
            <h2>{ newMessage } </h2>
            <p>Suma de 100+435= { suma(100,435)}</p>
        </Fragment>
    );
}

FirstApp.prototypes={
    title:PropTypes.string.isRequired,
    subtitle:PropTypes.number.isRequired
}

FirstApp.defaultProps={
    //title:'No hay titulo',
    subtitle:456,
    name:"Maria Jose"
}