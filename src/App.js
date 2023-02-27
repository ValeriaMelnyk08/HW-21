
import logo from './logo.svg';
import './CSS/main.css';

import { HashRouter } from "react-router-dom";
import Routes from "../src/routes/routes";




function App() {

  return (
    
    <div className="App">
      
      <HashRouter>
        <Routes />
      </HashRouter>
    </div>


    
  );
  
  
  
}

export default App;
