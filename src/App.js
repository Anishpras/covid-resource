import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Medicines from "./routes/Medicines";
import Oxygen from "./routes/Oxygen";
import Plasma from "./routes/Plasma";
import ResourcePage from "./routes/ResourcePage";
import HospitalBed from "./routes/HospitalBed";
import './Styles/App.css'
function App() {
  return (
    <Router>
    <div className="app">
      <Switch>
        <Route path="/" exact>
          <ResourcePage />
        </Route>
        <Route path="/beds">
          <HospitalBed />
        </Route>

        <Route path="/plasma">
          <Plasma />
        </Route>

        <Route path="/oxygen">
          <Oxygen />
        </Route>

        <Route path="/medicines">
          <Medicines />
        </Route>
      </Switch>
      </div>
    </Router>
  );
}

export default App;
