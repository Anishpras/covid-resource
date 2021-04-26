import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Medicines from "./routes/Medicines";
import Oxygen from "./routes/Oxygen";
import Plasma from "./routes/Plasma";
import ResourcePage from "./routes/ResourcePage";
import HospitalBed from "./routes/HospitalBed";
import Remdesivir from "./routes/Remdesivir";
import Tocilizumab from "./routes/Tocilizumab";
import Fabiffue from "./routes/Fabiffue";
function App() {
  return (
    <Router>
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

        <Route path="/remdesivir">
          <Remdesivir />
        </Route>

        <Route path="/tocilizumab">
          <Tocilizumab />
        </Route>

        <Route path="/fablifue">
          <Fabiffue />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
