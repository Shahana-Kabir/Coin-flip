import React, {Component}  from 'react';
import './Head.css';
let headImage = 'https://tinyurl.com/react-coin-heads-jpg';

// let tailImage = 'http://www.pcgscoinfacts.com/UserImages/71009269r.jpg';

class Head extends Component{

    render(){
        return(
            <div className = "Head">
                <img src = {headImage} className = "Head__img" alt = "shanu"/>
                {/* <img src = {tailImage}/ > */}
            </div>
        )
    }
}
export default Head;