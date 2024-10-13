import logo from './logo.svg';
import './App.css';
import Welcome from './components/Welcome';
import Greeting from './components/Greeting';
import DefaultComponent, { FirstComponent, SecondComponent } from './components/MyComponents';

function App() {
  return (
    <div className="App">
      {/* <Welcome name = "Ramesh"/>
      <Welcome name = "Gorakh"/> */}
      {/* <Greeting name='Gorakh'/>
      <Greeting name='Ramesh'/> */}
      <FirstComponent/>
      <SecondComponent/>
      <DefaultComponent/>

      
    </div>
  );
}

export default App;
