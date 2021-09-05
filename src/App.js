import './App.css';
import Home from './pages/Home';
import {Route,Switch} from 'react-router-dom';
import NotFound from './pages/404NotFound';
import Projects from './pages/Projects';
import About from './pages/About';
import Knowledge from './pages/Knowledge';
import Experiance from './pages/Experiance';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/projects" component={Projects}/>
        <Route exact path="/about" component={About}/>
        <Route exact path="/knowledge" component={Knowledge}/>
        <Route exact path="/experiance" component={Experiance}/>
        <Route path="*" component={NotFound}/>
      </Switch>
    </div>
  );
}

export default App;

