import logo from './logo.svg';
import './App.css';
import Grid from './components/Grid_system/Grid.js'

function App() {
  return (
    <div className="App position-relative">
      <Grid  Nx={10} Ny={10}/>
    </div>
  );
}

export default App;
