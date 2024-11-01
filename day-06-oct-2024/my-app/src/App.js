import logo from './logo.svg';
import './App.css';
import Welcome from './components/Welcome';
import Greeting from './components/Greeting';
import DefaultComponent, { FirstComponent, SecondComponent } from './components/MyComponents';
import HelloWorld from './components/HelloWorld';
import Student from './components/Student';

function App() {
  // const student = {
  //   firstName: "Gorakh",
  //   lastName: "Gupta",
  //   email: "gorakh@gmail.com",
  // }

  const skills = ['HTML', 'CSS', 'JavaScript']
  return (
    <div className="App">
      {/* <Welcome name = "Ramesh"/>
      <Welcome name = "Gorakh"/> */}
      {/* <Greeting name='Gorakh'/>
      <Greeting name='Ramesh'/> */}
      {/* <FirstComponent/>
      <SecondComponent/>
      <DefaultComponent/> */}

      {/* <HelloWorld/> */}
      <Student
        data = {skills}
      />
      {/* <Student
       firstName = "Gorakh"
       lastName = "Gupta"
       email = "gorakh@gmail.com"
      />
      <Student
       firstName = "Umesh"
       lastName = "Rao"
       email = "umesh@gmail.com"
      /> */}

      
    </div>
  );
}

export default App;
