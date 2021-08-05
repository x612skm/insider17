import Home from "./pages/homepage/Home";
import Login from "./pages/login/Login";
import Profile from "./pages/profile/Profile";
import Register from "./pages/register/Register";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path = "/"> {/*exact path defines the as stated in the word exact*/}
          <Home />
        </Route>
        <Route path = "/login">
          <Login />
        </Route>
        <Route path = "/register">
          <Register />
        </Route>
        <Route path = "/profile/:username">
          <Profile />
        </Route>
        
      </Switch>
    </Router>
  )
}

export default App;
