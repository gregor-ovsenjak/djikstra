import logo from './logo.svg';
import './App.css';
import Grid from './components/Grid_system/Grid.js'
import Navigator from './components/Grid_system/Navigator.js'
function App() {
  return (
    <>
    <Navigator />
    <div className="App position-relative">
      <Grid  Nx={36} Ny={36}/>
    </div>
    </>
  );
}

export default App;
