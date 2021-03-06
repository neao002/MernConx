import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavTop from "./components/Nav_top";
import AllPlant from "./components/All_plant";
import AddNew from "./components/Add_new";
import User from "./components/user";
import Searchall from "./components/searchplant";

function App() {
  return (
    <Router>
      <div className="App">
        <Container>
          <NavTop />
          <Switch>
            <Route exact path="/">
              <h1>Landing page only</h1>
            </Route>
            <Route path="/add_new">
              <AddNew />
            </Route>
            <Route path="/all_plant">
              <AllPlant />
            </Route>
            <Route path="/user">
              <User />
            </Route>
            <Route>
              <Searchall path="searchplants" />
            </Route>
          </Switch>
        </Container>
      </div>
    </Router>
  );
}

export default App;
