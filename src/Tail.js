import React, {Component}  from 'react';
import TailIm from '../src/tail.jpg'; 
import './Tail.css';
// let tailImage = 'https://tinyurl.com/react-coin-tails-jpg';


class tail extends Component{

    render(){
        return(
            <div className = "Tail">
                <img src = {TailIm} className = "Tail__img" alt = "tail" />
                {/* <img src = {tailImage}/ > */}
            </div>
        )
    }
}
export default tail;