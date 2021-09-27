import { Container, Grid } from "@material-ui/core";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Profile from "./components/Profile/Profile";
import Portfolio from "./pages/Portfolio/Portfolio";
import Resume from "./pages/Resume/Resume";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Container>
        <Grid container>
          <Grid item xs={12} sm={12} md={4} lg={3}>
            <Profile />
          </Grid>
          <Grid item xs style={{ backgroundColor: "red" }}>
            <Header></Header>
            <Router>
              <Switch>
                <Route path="/portfolio">
                  <Portfolio />
                </Route>
                <Route path="/">
                  <Resume />
                </Route>
              </Switch>
            </Router>
            <Footer />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default App;
