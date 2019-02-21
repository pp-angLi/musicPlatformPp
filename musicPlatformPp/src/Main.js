import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom';

import Find from './Find';
import Mine from './Mine';
import Friends from './Friends';
import Login from './Login';

class Main extends Component {
    constructor(props) {
        super (props);

        this.state = {

        }
    }

    render() {
        return(
            <main className="main">
                <Switch>
                    <Route exact path='/' component={ Find } />
                    <Route path='/my' component={ Mine } />
                    <Route path='/friends' component={ Friends } />
                    <Route path='/login' component={ Login } />
                </Switch>
            </main>
        );
    }
}

export default Main;