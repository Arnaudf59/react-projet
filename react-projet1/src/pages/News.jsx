import React, {Fragment, useEffect, useState} from 'react';
import Logo from '../components/Logo';
import Navigation from '../components/Navigation';
import axios from 'axios';
import Articles from '../components/Articles';

const News = () => {

    const [newsData, setNewsData] = useState([])

    useEffect(() => {
        getData();
    }, []);

    const getData = () => {
        axios.get('http://localhost:3003/articles').then((res) => setNewsData(res.data));
    }

    return (
        <Fragment>
            <div className="news-container">
                <Navigation />
                <Logo />
                <h1>News</h1>
                <form>
                    <input type="text" placeholder="Nom" />
                    <textarea placeholder="Message"></textarea>
                    <input type="submit" value="Envoyer" />
                </form>
                <ul>
                    {newsData
                    .sort((a,b) => b.date - a.date)
                    .map((article) => (
                        <Articles key={article.id} article={article}/>
                    ))}
                </ul>
            </div>    
        </Fragment>
    );
};

export default News;