import logo from './logo.svg';
import './App.css';
import Head from './Head';
import Tail from './Tail';
import Coin from './Coin';
let tailImage = 'https://tinyurl.com/react-coin-tails-jpg';

function App() {
  return (
    <div className="App">
      <Coin />
      {/* <Tail  /> */}
    </div>
  );
}

export default App;
