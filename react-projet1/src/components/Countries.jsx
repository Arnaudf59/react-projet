import React, {Fragment, useEffect, useState} from 'react';
import axios from 'axios';
import Cards from './Cards';

const Countries = () => {

    const [data, setData] = useState([]);
    const [sortedData, setSortedData] = useState([]);
    const [playOnce, setPalayOnce] = useState(true);
    const [rangeValue, setRangeValue] = useState(40);
    const [selectedRadio, setSelectedRadio] = useState('');
    const radios = ["Afrique", "Amérique", "Asie", "Europe", "Océanie"]

    useEffect(() => {
        if(playOnce) {
            axios.get(
                'https://api.countrylayer.com/v2/all?access_key=0b61456a39c2d96e9af0e3dfdf6c1148'
            ).then((res) => {
                setData(res.data);
                setPalayOnce(false)
            }) 
        }

        const sortedCountry = () => {
            const countryObj = Object.keys(data).map((i) => data[i]);
            const sortedArray = countryObj.sort((a,b) => {
                return b.population - a.population
            });
            sortedArray.lenght = rangeValue;
            setSortedData(sortedArray)
        }
        sortedCountry();
    }, [data, rangeValue, playOnce])
    
    return (
        <Fragment>
            <div className="countries">
                <div className="sort-container">
                    <input type="range" min="1" max="250" value={rangeValue} onChange={(e) => setRangeValue(e.target.value)}/>
                    <ul>
                        {radios.map((radio) => {
                            return(
                                <li key={radio}>
                                    <input type="radio" value={radio} id={radio} checked={radio === selectedRadio} onChange={(e) => setSelectedRadio(e.target.value)}/>
                                    <label htmlFor={radio}>{radio}</label>
                                </li>
                            )
                        })}
                    </ul>
                </div>
                <div className="cancel">
                    {selectedRadio && <h5 onClick={() => setSelectedRadio("")}>Annuler recherche</h5>}
                </div>
                <ul className="countries-list">
                    {sortedData
                    .filter((country) => country.region.includes(selectedRadio))
                    .map((country) => {
                        <li>
                            <Cards country={country} key={country.name}/>
                        </li>
                    })}
                </ul>
            </div>
        </Fragment>
    );
};

export default Countries;