import React, {Fragment, useEffect, useState} from 'react';
import axios from 'axios'

const Countries = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get(
            'https://api.countrylayer.com/v2/all?access_key=0b61456a39c2d96e9af0e3dfdf6c1148'
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