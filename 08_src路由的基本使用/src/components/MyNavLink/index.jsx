import React, {Component} from 'react';
import {NavLink} from "react-router-dom";

class MyNavLink extends Component {
    render() {
        return (
            <div>
                <NavLink activeClassName="demo" className="list-group-item active" {...this.props}/>
            </div>
        );
    }
}

export default MyNavLink;