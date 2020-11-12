import { Switch, Route } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';

function Routers() {
    return (
        <Switch>
            <Route exact path="/">
                <Home />
            </Route>
            <Route exact path="/about">
                <About />
            </Route>
        </Switch>
    )
}

export default Routers;