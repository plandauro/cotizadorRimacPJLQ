import "./App.scss";
import { HelmetProvider } from "react-helmet-async";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./render/Home";
import Armador from "./render/Armador";
import Finalizado from "./render/Finalizado";

function App() {
  return (
    <HelmetProvider>
      <Router>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/armador">
            <Armador />
          </Route>
          <Route path="/finalizado">
            <Finalizado />
          </Route>
        </Switch>
      </Router>
    </HelmetProvider>
  );
}

export default App;
