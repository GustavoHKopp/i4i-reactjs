import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom"
import { HomePage } from "./pages/Home/HomePage";
import { Login } from "./pages/Login/Login";

export const Routes = () => {

    return <Router>
        <Switch>
            <Route exact path="/">
                <HomePage />
            </Route>
            <Route path="/login">
                <Login />
            </Route>

        </Switch>
    </Router>
}