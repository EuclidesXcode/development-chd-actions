import './App.css';
import FormComponent from '../src/components/home'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <FormComponent />
      </header>
      <div style={{marginTop: -50}}>
        <p>CHD tools - versão: 1.0.2</p>
      </div>
    </div>
  );
}

export default App;
