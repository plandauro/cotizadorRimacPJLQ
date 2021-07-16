import "./App.scss";
import { HelmetProvider } from "react-helmet-async";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./render/Home";
import Armador from "./render/Armador";

function App() {
  return (
    <HelmetProvider>
      <Router>
        <Switch>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>

      <Router>
        <Switch>
          <Route path="Armador">
            <Armador />
          </Route>
        </Switch>
      </Router>

    </HelmetProvider>
  ); 
}

export default App;
