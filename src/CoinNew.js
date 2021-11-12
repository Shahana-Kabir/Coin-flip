import React, {Component}  from 'react';
import './Head.css';
let headImage = 'https://tinyurl.com/react-coin-heads-jpg';

// let tailImage = 'http://www.pcgscoinfacts.com/UserImages/71009269r.jpg';

class CoinNew extends Component{

    render(){
        return(
            <div className = "Head">
                <img src = {this.props.info.imgSrc} className = "Head__img" alt = {this.props.info.side}/>
                {/* <img src = {tailImage}/ > */}
            </div>
        )
    }
}
export default CoinNew;