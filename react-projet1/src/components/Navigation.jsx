import React, {Fragment} from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
        <Fragment>
            <div className="navigation">
                <NavLink exact to="/" activeClassName="nav-active">
                    Acceuil
                </NavLink>
                <NavLink exact to="/about" activeClassName="nav-active">
                    À propos
                </NavLink>
            </div>
        </Fragment>
    );
};
export default Navigation;