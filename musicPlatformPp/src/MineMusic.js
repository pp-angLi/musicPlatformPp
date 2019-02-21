import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import MineLove from './MineLove';
import MineList from './MineList';
import MineFouce from './MineFouce';
import MineFans from './MineFans';

class MineMusic extends Component {
    constructor (props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
                <Switch>
                    <Route exact path='/my' component={ MineLove }></Route>
                    <Route path='/my/list' component={ MineList }></Route>
                    <Route path='/my/fouce' component={ MineFouce }></Route>
                    <Route path='/my/fans' component={ MineFans }></Route>
                </Switch>
        );
    }
}

export default MineMusic;