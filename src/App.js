import logo from './logo.svg';
import './App.css';
import LandingPage from './LandingPage';
import './landingpage.css'
import { BrowserRouter,Route,Link,Switch} from 'react-router-dom';
import Postview from './Postview';

function App() {
  
  return (
    <BrowserRouter>
    <div className="App">
    <Link to='/'></Link>
    <Link to="/Postview"></Link>
    <Switch>
    <Route exact path="/" component={LandingPage}></Route>
    <Route exact path="/Postview" component={Postview}></Route>
    </Switch>
    
    
    

      </div>
    </BrowserRouter>
  )
}

export default App;
