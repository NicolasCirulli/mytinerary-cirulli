import React from 'react'
import {Spinner} from 'react-bootstrap'

const Loader = () => {
    return (
        <>
            <div className="loader">
                <div className="loader-body">
                    <Spinner animation="grow" className="texto-naranja"/>
                    <Spinner animation="grow" className="texto-naranja"/>
                    <Spinner animation="grow" className="texto-naranja"/>
                </div>
            </div>
        </>
    )
}

export default Loader
