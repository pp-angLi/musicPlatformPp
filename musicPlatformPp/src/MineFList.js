import React, { Component } from 'react';

class MineFList extends Component {
    constructor(props){
        super(props);

        this.state = {

        }
    }

    render() {
        return (
            <li className="mine_f_list">
                <div>
                    <div className="mine_f_list_left">
                    </div>
                    <div className="mine_f_list_mid">
                        <h3>{this.props.name}</h3>
                        <div>
                            <p className="mine_f_list_mid_a">动态
                                <small>{this.props.news}</small>
                            </p>
                            <small className="show">&nbsp;|&nbsp;</small>
                            <p className="mine_f_list_mid_a">关注
                                <small>{this.props.fouce}</small>
                            </p>
                            <small className="show">&nbsp;|&nbsp;</small>
                            <p className="mine_f_list_mid_a">粉丝
                                <small>{this.props.fans}</small>
                            </p>
                        </div>
                        <small className="mine_f_list_mid_inscription">{this.props.inscription}</small>
                    </div>
                    <div className="mine_f_list_right">
                        <button>私信</button>
                        <button>{this.props.stateF}</button>
                    </div>
                </div>
            </li>
        )
    }
}

export default MineFList;