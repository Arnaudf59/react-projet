import React, {Fragment} from 'react';
import Logo from '../components/Logo';
import Navigation from '../components/Navigation';

const NotFound = () => {
    return (
        <Fragment>
            <div className="notfound">
                <Navigation />
                <Logo />
                <h1>Erreur 404: Not Found</h1>
            </div>
        </Fragment>
    );
};

export default NotFound;