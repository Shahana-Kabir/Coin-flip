import React, {Component}  from 'react';
import Head from './Head';
// let headImage = 'https://tinyurl.com/react-coin-heads-jpg';
import './Coin.css';
import {choice} from './helpers';
import CoinNew from './CoinNew';
import TailIm from '../src/tail.jpg'; 

class Coin extends Component{
    static defaultProps = {
        coins: [
            {side: "heads", imgSrc: "https://tinyurl.com/react-coin-heads-jpg"},
            {side: "tails", imgSrc: "https://tinyurl.com/react-coin-tails-jpg"},
        ]
    };

    constructor(props){
        super(props);
        this.state = {
            curCoin: null,
            nFlips: 0,
            nHeads: 0,
            nTails: 0, 
         };
        
    }
    flipCoin = ()=>{
        const newCoin = choice(this.props.coins);
        console.log(newCoin);
        this.setState(st => {
            return {
                curCoin: newCoin,
                nFlips: st.nFlips +1,
                nHeads: st.nHeads + (newCoin.side === "heads"? 1 : 0),
                nTails: st.nTails + (newCoin.side === "tails"? 1 : 0)
            }
        }
                   )     
    }

     handleClick = (e)=> {
         this.flipCoin();                     
    }

        render(){
        return(
            <div className = "Coin">
                <h1>
                    Let's flip a coin!
                </h1>
                
        <button onClick = {this.handleClick} className = "Coin__button"> Flip me!</button>
         {this.state.curCoin && <CoinNew info = {this.state.curCoin} />}
                <p>
                   Out of {this.state.nFlips} flips, there has been {this.state.nHeads} heads and {this.state.nTails} tails. 
                </p>
        
          
            </div>
        )
    }
}
export default Coin;