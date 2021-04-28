import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Medicines from "./routes/Medicines";
import Oxygen from "./routes/Oxygen";
import Plasma from "./routes/Plasma";
import ResourcePage from "./routes/ResourcePage";
import HospitalBed from "./routes/HospitalBed";
import Remdesivir from "./routes/Remdesivir";
import Tocilizumab from "./routes/Tocilizumab";
import Fabiffue from "./routes/Fabiffue";
import NavBar from "./components/NavBar";
import Doctors from "./routes/Doctors";
import Food from "./routes/Food";
import "./Styles/App.css";
import Every from "./routes/Every";
import ExtraResource from "./routes/ExtraResource";
function App() {
  return (
    <Router>
      <NavBar />
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
        <Route path="/doctors">
          <Doctors />
        </Route>
        <Route path="/food">
          <Food />
        </Route>
        <Route path="/every">
          <Every />
        </Route>
        <Route path="/extra">
          <ExtraResource />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
