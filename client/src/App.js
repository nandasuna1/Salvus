import './App.css';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom'
import Home from "./pages/Home"
import Login from './pages/Login';
import Cadastro from './pages/Cadastro';
import Lista from './pages/Lista';
import Page404 from './pages/Page404';


function App() {
  return (
    <div className="App">

         <Router>
          <div className="navbar">
            <a href="https://www.salvus.me" target="_blank" rel="noreferrer"><img src="https://www.salvus.me/_next/static/images/COMMON-salvus_logo_x-7ea80535a910c67245458d6e722fdefb.svg" alt="" /></a>
            <Link to="/lista" className="verProf">Profissionais Cadastrados</Link>
          </div>
          <Switch>
            <Route path="/homepage/:id" exact component={Home}/>
            <Route path="/cadastro" exact component={Cadastro}/>
            <Route path="/lista" exact component={Lista}/>
            <Route path="/" exact component={Login}/>
            <Route path="/*" exact component={Page404}/>
          </Switch>
               </Router>

    </div>
  );
}

export default App;
