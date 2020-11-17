import { Switch, Route } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Signin from './Pages/Signin';
import Notfoud from './Pages/Notfoud';

function Routers() {
    return (
        <Switch>
            <Route exact path="/">
                <Home />
            </Route>
            <Route exact path="/about">
                <About />
            </Route>
            <Route exact path="/signin">
                <Signin />
            </Route>
            <Route>
                <Notfoud />
            </Route>
        </Switch>
    )
}

export default Routers;