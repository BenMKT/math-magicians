import Calculator from './components/Calculator';
import DisplayQuote from './components/Quote';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>A Simple Calculator</h1>
        <p>Using React</p>
      </header>
      <Calculator />
      <DisplayQuote />
    </div>
  );
}

export default App;
