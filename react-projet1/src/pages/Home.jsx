import React, {Fragment} from "react";
import Countries from "../components/Countries";
import Logo from "../components/Logo";
import Navigation from "../components/Navigation";

const Home = () => {
    return(
        <Fragment>
            <div className="home">
                <Navigation />
                <Logo />
                <Countries />
            </div>
        </Fragment>
    )
}

export default Home;