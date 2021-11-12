import Navbar from './components/Navbar';
import Home from './components/Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Docs from './components/Docs';
import VersionDetails from './components/VersionDetails';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/docs">
              <Docs />
            </Route>
            <Route path="/versions/:id">
              <VersionDetails />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
