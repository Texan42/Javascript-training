import './app.css';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Home from './pages/Home.js';
import Login from './pages/Login.js';
import Signup from './pages/Signup.js';
import Redirectpage from './pages/RedirectPage.js';
import Payment from './pages/Payment.js';

function App() {
  return (
    <div>
     <Router>
       <Switch>
         <Route exact path="/" component={Home} />
         <Route path="/login" component={Login} />
         <Route path="/signup" component={Signup} />
         <Route path="/redirect" component={Redirectpage} />
         <Route path="/payment" component={Payment} />
       </Switch>
     </Router>
    </div>
  );
}

export default App;
