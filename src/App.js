import logo from './logo.svg';
import './App.css';
import Grid from './components/Grid_system/Grid.js'

function App() {
  return (
    <div className="App position-relative">
      <Grid  Nx={12} Ny={12}/>
    </div>
  );
}

export default App;
