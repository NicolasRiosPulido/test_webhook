import logo from './logo.svg';
import './App.css';

const App = () => {
  const handleclick = () => {
    console.log('Hacemos compra')
  }
  return (
    <div className="App">
      <h1>Test web hook</h1>
      <button onClick={handleclick}>Comprar</button>
    </div>
  );
}

export default App;
