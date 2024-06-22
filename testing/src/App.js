import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from "./Components/Header";
import Futter from "./Components/Futter";
import Home from "./Components/Home";


function App() {
  return (

    <div>
      <Header/>
        <Home/>
      <Futter/>
    </div>
  );
}

export default App;
