import React, {Fragment} from "react";
import Logo from "../components/Logo";
import Navigation from "../components/Navigation";

const Home = () => {
    return(
        <Fragment>
            <div className="home">
                <Navigation />
                <Logo />
                <h1>Acceuil</h1>
            </div>
        </Fragment>
    )
}

export default Home;