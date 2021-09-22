import React, {Fragment} from "react";
import Home from "../pages/Home"; 
import NotFound from "../pages/NotFound"; 
import About from "../pages/About"; 
import { BrowserRouter, Switch, Route} from "react-router-dom"

export class App extends React.Component {

    render(){
        return (
            <Fragment>
                <BrowserRouter>
                    <Switch>
                        <Route path="/" exact component={Home}/>
                        <Route path="/about" exact component={About}/>
                        <Route component={NotFound}/>
                    </Switch>
                </BrowserRouter>
            </Fragment>
        )
    }
};

export default App;