import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Productos from "./components/Servicios";
import Elegirnos from "./components/Elegirnos";
import Nosotros from "./components/Nosotros";
import Contactanos from "./components/Contactanos";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Switch>
          <Route path="/servicios">
            <Productos />
          </Route>
          <Route path="/elegirnos">
            <Elegirnos />
          </Route>
          <Route path="/nosotros">
            <Nosotros />
          </Route>
          <Route path="/contactanos">
            <Contactanos />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
