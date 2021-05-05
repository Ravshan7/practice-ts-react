import React, {useState} from 'react'
import {Navbar} from "./components/Navbar";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import {TodoPage} from "./pages/TodoPage";
import AboutPage from "./pages/AboutPage";






export const App: React.FC = () => {
    return (
        <BrowserRouter>
            <Navbar/>
            <div className="container">
                <Switch>
                    <Route path="/" exact render={() => <TodoPage /> } />
                    <Route path="/about" exact render={() => <AboutPage /> } />
                </Switch>
            </div>
        </BrowserRouter>
    )
}