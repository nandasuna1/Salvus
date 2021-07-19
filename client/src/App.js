import './App.css';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom'
import Home from "./pages/Home"
import Login from './pages/Login';
import Cadastro from './pages/Cadastro';


function App() {




  return (
    <div className="App">
       <Router> 
        <div className="navbar">
          <Link to="/">Login</Link>
          <Link to="/cadastro">Cadastro</Link>
        </div>
        <Switch>
          <Route path="/homepage/:id" exact component={Home}/>
          <Route path="/cadastro" exact component={Cadastro}/>
          <Route path="/" exact component={Login}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
