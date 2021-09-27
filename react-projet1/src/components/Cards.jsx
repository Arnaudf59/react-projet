import React, {Fragment} from 'react';

const Cards = (props) => {

    const { country } = props;

    const numberFormat = (x) => {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    }

    return (
        <Fragment>
            <li className="card">
                <img src={country.flag} alt="flag" />
                <div className="data-container">
                    <ul>
                        <li>{country.name}</li>
                        <li>{country.capital}</li>
                        <li>Pop. {numberFormat(country.population)}</li>
                    </ul>
                </div>
            </li>
        </Fragment>
    );
};

export default Cards;