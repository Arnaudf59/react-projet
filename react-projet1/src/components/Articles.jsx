import React, {Fragment} from 'react';

const Articles = ({ article }) => {

    const dateParser = (date) => {
        let newDate = new Date(date).toLocaleDateString('fr-FR', {
            year: "numeric",
            month: "long",
            day: "numeric",
            hour: "numeric",
            minute: "numeric",
        })
        return newDate;
    }

    return (
        <Fragment>
            <div className="article">
                <div className="card-header">
                    <h3>{article.author}</h3>
                    <em>Posté le {dateParser(article.date)}</em>
                </div>
                <p>{article.content}</p>
                <div className="btn-container">
                    <button>Modifier</button>
                    <button>Supprimer</button>
                </div>
            </div>
        </Fragment>
    );
};

export default Articles;