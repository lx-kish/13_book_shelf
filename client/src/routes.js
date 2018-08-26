import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './components/Home/home';
import BookView from './components/Books';
import Layout from './hoc/layout';

const Routes = () => {
    return (
        <Layout>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/book/:id" exact component={BookView} />
            </Switch>
        </Layout>
    );
};

export default Routes;