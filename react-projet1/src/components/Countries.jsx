import React, {Fragment, useEffect, useState} from 'react';
import axios from 'axios'

const Countries = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get(
            'https://restcountries.eu/rest/v2/all?fields=name;population;region;capital;flag'
        ).then((res) => setData(res.data)) 
    }, [])
    
    return (
        <Fragment>
            <div className="countries">
                <ul className="countries-list">
                    {data.map((country) => {
                        <li>
                            {country.name}
                        </li>
                    })}
                </ul>
            </div>
        </Fragment>
    );
};

export default Countries;