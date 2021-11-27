import React from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'


export default class City extends React.Component{

    constructor(props){
        super(props)
        console.log(props)
        
        this.state ={

        }
    }
    componentDidMount(){
        axios.get(`http://localhost:4000/api/ciudades/${this.props.params.city}`)
        .then(res => this.setState({ ciudad : res.data.respuesta }))
    }
    componentDidUpdate(){
        console.log(this.state)
    }

    render()
    {
        return(
            <>
                <div className=" text-center">
                    {this.state.ciudad && <img src={`/assets/images/C${this.state.ciudad.imagen}.jpg`} alt={this.state.ciudad.ciudad} width="500" />}
                    { this.state.ciudad && <h1>{this.state.ciudad.ciudad}</h1>}
                </div>
                <h2 className=" text-center">under construction</h2>
                <Link to="/cities" >cities</Link>
            </>
            )
    }
    

}


