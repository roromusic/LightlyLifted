import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';

const Main = (props) => (
    <main>
        <Switch>
            <Route exact path="/" render={() => (
                <Home scrollToBottom = {props.scrollToBottom} />
            )} />
        </Switch>
    </main>
);

export default Main;