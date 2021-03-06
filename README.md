# react-projet

## React c'est quoi?
React.Js, est une techno Javascript, mais il ne s’agit pas d’un framework à proprement parler.</br> 
En fait, il s’agit plus d’une librairie open source qui permet de construire des interfaces utilisateur dynamique. </br>
Et, de plus, cette librairie est maintenue un grand nombres de développeurs indépendants.</br>
Pour coder en React, vous devez avoir de bonnes bases en javascript, bien évidemment. 
</br>
C’est par ailleurs une techno très appréciée par développeurs web ces derniers temps. Elle permet de réaliser des applications web cross platform et ultra-performantes. 
</br>
Ce sont les équipes de Facebook qui sont à l’origine de cette plateforme. En effet, c’est en 2013 qu’est né React. 

## Créer et lancer un projet react

Pour créer un nouveau projet react, il faut dans un terminal, faire la commande:
```shell
create-react-app nom-projet
```
Après l'instalation, on peut lancer notre projet avec la commande:
```shell
npm start
```
Pour compiler un projet react, on utilise la commande 
```shell
npm run build
```
## Structure d'un fichier react - Le composant basique
![composant basique](/img-readme/composantBasique.PNG)

Tous les composant se resemble, il sont composé comme ceci:
- D'abord, il y a l'import de toutes nos bibliothéques
- Ensuite, on a **un composant** (**``retenir qu'un composant = une fonction``**)
- Ensuite on déclare **nos variable**
- Puis on déclare de **la logique**, autrement dit des fonction de notre composant
- Puis on renvoie notre **rendu visuel** (en **``JSX``**)
- Et enfin, on **export notre composant**
## Installation utile pour notre projet
```shel
npm i -save react-dom react-router-dom node-sass@4.14.1
```
- ``react-dom``: Le module react-dom fournit des méthodes spécifiques au DOM que vous pouvez utiliser au niveau racine de votre appli et comme échappatoire pour travailler hors du modèle React si vous en avez besoin.
- ``react-router-dom``: React Router est une extension a React qui permet de gérer les routes d'une application coté client. Il permet de synchroniser (d'associer) des composants graphiques React à des urls.
- ``node-sass@4.14.1``(@numéro de la version, permet de choisir la version à installer):Le langage SASS est un préprocesseur CSS capable de gérer vos projets CSS en générant des feuilles de styles (fichier . css). Le CSS3, est un langage en soi que les navigateurs interprètent.
## Explication d'un projet react
Un projet react, et de 3 gros dossier:
- Les ``node_modules``: c'est l'ensemble des bibliothéque utiliser dans notre projet
- Le dossier ``public``: contient tous nos fichier static. Nos images, et notre **``index.html``**

Le fichier index.html qui va contenir notre projet react.

Toute notre application est contenu dans le body, dans la div d'id root
```html
<div id="root"></div>
```
- Et enfin, le fichier ``src``: On va y trouver nos fichier css, nos composant, nos pages, nos fichiers ***index.js*** 

L'index.js est le fichier par lequelle on a accès dans notre appli. il est le fichier qui dans la balise d'id ``root`` va placer notre composant ``App``
## Création d'un composant la bonne pratique
Supprimer app.js, app.css, app.html dans index .js retirer l'import à app puis créer un dossier **composant** et créer un fichier ***App.jsx***
```jsx
import React, {Fragment} from "react";

export class App extends React.Component {

    render(){
        return (
            <Fragment>
                <h1>Hello React</h1>
            </Fragment>
        )
    }
};
export default App;
```
### La balise fragment 
La balise Fragment permet d'englober les balises JSX d'une manière plus propre :

JSX avec Fragment:
```jsx
import React, { Fragment } from 'react';
import './App.css';
const App = () => {
    return (
        <Fragment>
            <p className="App">Simple Page</p>
            <p className="App">Exemple</p>
        </Fragment>
    );
}
```
Cette balise n'apparaitra pas dans le navigateur.
## Test de fonctionnement

Dans le fichier App.js, on peut supprimer tout le rendu et y mettre:
```jsx
function App() {
  return (
    <div className="App">
      <h1>Hello React</h1>
    </div>
  );
}
export default App;
```
resultat:</br>
![Hello React](./img-readme/helloReact.PNG)
 ## Création de notre première page
Dans un dossier ``pages``, on va créer notre page Home -> ``Home.jsx``.

```jsx
import React, {Fragment} from "react";

const Home = () => {
    return(
        <Fragment>
            <h1>Acceuil</h1>
        </Fragment>
    )
}
export default Home;
```
Et pour afficher notre composant, dans le fichier App.jsx, on appelle notre page:
```jsx
import React, {Fragment} from "react";
import Home from "../pages/Home"; 

export class App extends React.Component {

    render(){
        return (
            <Fragment>
                <h1>Hello React</h1>
                <Home />
            </Fragment>
        )
    }
};
export default App;
```
resultat:</br>
![Resultat composant home](/img-readme/acceuil.PNG)

Sur visual studio code, on peut installer les pluggins ***``Reactjs code snippets``*** et ***``Simple React Snippets``*** pour nous faciliter la création de composant react et des imports

## Reactjs code snippets et Simple React Snippets
A le création d'un composant, dans le fichier écrire ``rsc`` et le composant va se créer tous seul:
```jsx
rsc
```
resultat:
```jsx
import React from 'react';

const Composant = () => {
    return (
        <div>
            
        </div>
    );
};

export default Composant;
```
## Rooting et Navigation
### Rooting
D'abord, on va créer une deuxieme pages: la page ``About``
```jsx
import React, {Fragment} from 'react';

const About = () => {
    return (
        <Fragment>
            <h1>À propos</h1>
            <br />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur placeat veniam quidem, dolorem unde optio doloremque tempore minima aliquam reprehenderit. Autem, tempore fugiat! Hic, qui reiciendis odio tempore molestiae quos.</p>
            <br />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed dicta sequi doloribus consectetur, praesentium, ex sapiente laboriosam natus modi repudiandae omnis maiores ut et, ratione inventore beatae? Nesciunt molestias consectetur sapiente, ab tenetur unde odit ipsum officia perferendis non, corporis modi? Doloribus expedita atque, aliquid sed dignissimos, animi suscipit accusantium nulla consectetur quibusdam ipsa. Officia ea perferendis veritatis numquam cum?</p>
        </Fragment>
    );
};
export default About;
```
et une page 404 au cas ou
```jsx
import React, {Fragment} from 'react';

const NotFound = () => {
    return (
        <Fragment>
            <h1>Erreur 404: Not Found</h1>
        </Fragment>
    );
};
export default NotFound;
```
Maintenant, on a notre arborescence de notre application, du coup, on va pouvoir faire notre navigation.

Dans notre fichier ``App.jsx`` on va d'abords importer des modules
```jsx
import { BrowserRouter, Switch, Route} from "react-router-dom"
```
Puis, on va créer notre premiere route vers la page home
```jsx
<Fragment>
    <BrowserRouter>
        <Switch>
            <Route path="/" component={Home}/>
        </Switch>
    </BrowserRouter>
</Fragment>
```
- ``BrowserRouter``: Il englobe toute notre application
- ``Switch``: Test toutes les routes et si elle n'existent pas, nous redirige vers notre page 404
- ``Route``: Nos route disponible
Notre fonction, cependant si dans l'url, on ecrit n'importe quoi, on arrive toujours sur la page Home. 

Pour corriger cela, on va rajouter le mot clé ``exact`` pour lui dire qui faut le nom exact de la page pour y accéder
```jsx
<Fragment>
    <BrowserRouter>
        <Switch>
            <Route path="/" exact component={Home}/>
        </Switch>
    </BrowserRouter>
</Fragment>
```
Pour la redirection vers notre page 404, a la fin de la liste des route, on va rajouter:
```jsx
<Route component={NotFound}/>
```
Cela permet à react de comprendre que si l'url ne correspond a aucune page, la redirection sa fait vers la page 404.

Notre navigation fina, resemble donc à:
```jsx
<Fragment>
    <BrowserRouter>
        <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/about" exact component={About}/>
            <Route component={NotFound}/>
        </Switch>
    </BrowserRouter>
</Fragment>
```
### Navigation
Pour ce créer une navigation, on va devoir se créer un *composant* *``Navigation``* utilisable partout. Pour cela il va falloir importer un nouveau module de ``react-router-link`` qui s'appelle ``NavLink``

NavLink: module qui va nous permettre en cliquant dessus d'aller de page en page
```jsx
import React, {Fragment} from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
        <Fragment>
            <div className="navigation">

            </div>
        </Fragment>
    );
};
export default Navigation;
```
Puis on va utiliser NavLink, pour bouger d'url en url
```jsx
<Fragment>
    <div className="navigation">
        <NavLink exact to="/">
            Acceuil
        </NavLink>
        <NavLink exact to="/about">
            À propos
        </NavLink>
    </div>
</Fragment>
```
Ce composant, il faut l'appeler dans toutes les pages qui va avoir besoin de ce composant:
```jsx
const Home = () => {
    return(
        <Fragment>
            <Navigation />
            <h1>Acceuil</h1>
        </Fragment>
    )
}
```
Il est possible de mettre du CSS à notre module NavLink:
```jsx
<NavLink exact to="/" activeClassName="nav-active">
```
ici, on lui dit que lorsque que le lien est actif, il à la classe ``nav-active``

## Le Style
On créer un dossier styles, puis un fichier ``index.scss`` que l'on va appeller dans notre fichier index, qui va nous permettre d'importer nos fichiers de style:
```js
import "./styles/index.scss";
```
Ensuite, on va créer un fichier ``_settings.scss`` (le ``_`` permet de montrer que ce n'est pas le fichier mettre), c'est le fichier ou on a nos variable, nos couleurs, et les réglages global.

Ensuite, on va créer un dossier components, qui va comprendre tous les style de nos composants, puis le fichier ``_navigation.scss`` pour le style de notre navigation.

Dans ce fichier, on va pouvoir créer une classe navigation, qui va contenir tout le style de navigation
```scss
.navigation{
    margin: 20px;
    display: flex;

    a {
        margin: 10px;
        padding: 10px;
        position: relative;
    }
}
```
On va pouvoir aussi changer la classe nav-active (la class de nos NavLink)
```scss
.navigation{
    margin: 20px;
    display: flex;

    a {
        margin: 10px;
        padding: 10px;
        position: relative;
    }

    .nav-active {
        &::after {
            content: '';
            width: 85%;
            height: 5px;
            background: $color-1;
            position: absolute;
            bottom: 1px;
            left: 60%;
            transform: translate(-50px);
        }
    }
}
```

## Les images
Pour notre log, on va créer un composant Logo, qui va contenir notre image, et que l'on appelera dans chaque pages
```jsx
import React, {Fragment} from 'react';

const Logo = () => {
    return (
        <Fragment>
            <div className="logo">
                <img src="./logo192.png" alt="logo" />
                <h3>React World</h3>
            </div>
        </Fragment>
    );
};
export default Logo;
```
Puis on va l'appeller dans nos pages
```jsx
<Fragment>
    <div className="home">
        <Navigation />
        <Logo />
        <h1>Acceuil</h1>
    </div>
</Fragment>
```
**``Attention :``** Lorsque l'on recherche une image dans un fichier jsx, on commence notre arborescence à la racine du dossier ``public``

## Les hooks
Les Hooks sont une nouveauté de React 16.8. Ils permettent de bénéficier d’un état local et d’autres fonctionnalités de React sans avoir à écrire de classes.

Pour la demo, on va créer un composant ``country`` que l'on va afficher sur la home
```jsx
import React, {Fragment} from 'react';

const Countries = () => {
    return (
        <Fragment>
            <div className="countries">
                <h1>pays</h1>
            </div>
        </Fragment>
    );
};

export default Countries;
```

Ensuite, pour l'exemple, on va créer une constante pour gerer nos données grace au ``state``
```jsx
const [data, setData] = useState("hello")
```
Cette variable posséde un nom (ici *data*) et un deuxieme éléments qui est l'élément par lequel on passera pour modifier nos données</br>
Maintenant, si dans notre composant on affiche ***data***, il va nous afficher la valeur stocker dans notre constance
```jsx
<Fragment>
    <div className="countries">
        <h1>{data}</h1>
    </div>
</Fragment>
```
resultat:</br>
![data-hello](/img-readme/data.PNG)

---

Sur Google chrome, on peut utiliser le pluggin ***``React Developer Tools``*** pour avoir des information sur notre projet react

![Pluggin Chrome](/img-readme/googlePluggin.PNG)

---

Cette variable data, on peut la faire évoluer en utilisant notre ``setData``, pour cela, on peut créer une fonction:
```jsx
const sayGoodBye = () =>{
    setData("GoodBye");
}
```
et pour l'appeller, on va créer un bouton, lorsque l'on va cliquer dessus, il changera l'etat de notre constante data
```jsx
<button onClick={sayGoodBye}>Dire au revoir</button>
```
## L'api restcountries

[Liste des pays](https://api.countrylayer.com/v2/all?access_key=0b61456a39c2d96e9af0e3dfdf6c1148)

Pour aller chercher les donner avec react, on va installer un nouvelle bibliotheque de react, ``axios`` qui va nous permettre de faire un fetch.
```shell
npm i -s axios
```
Gràce a cette bibliotheque, on peut recuperer les donner de notre api, et grace a notre ``setData``, inserer dans notre data, la reponse obtenue
```jsx
axios.get(
        'https://api.countrylayer.com/v2/all?access_key=0b61456a39c2d96e9af0e3dfdf6c1148'
    ).then((res) => setData(res.data))
```
### Le useEffect
**Que fait useEffect ?** On utilise ce Hook pour indiquer à React que notre composant doit exécuter quelque chose après chaque affichage. React enregistre la fonction passée en argument (que nous appellerons « effet »), et l’appellera plus tard, après avoir mis à jour le DOM. 

```jsx
useEffect(() => {
    axios.get(
    'https://api.countrylayer.com/v2/all?access_key=APY_KEY'
    ).then((res) => setData(res.data))
}, [])
```
Puis, on peut donc l'afficher dans notre composant
```jsx
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
```
#### Rappel .map() Javascript
La méthode **``map()``** crée un nouveau tableau avec les résultats de l'appel d'une fonction fournie sur chaque élément du tableau appelant.
```js
const array1 = [1, 4, 9, 16];

// pass a function to map
const map1 = array1.map(x => x * 2);

console.log(map1);
// expected output: Array [2, 8, 18, 32]
```
## Les props
Après avoir récupéré les données avec l'api, on va maintenant créer un composant qui va récupérer de ``Countries.jsx`` c'est données pour les afficher.

Une fois ce comosant créer, on va devoir l'importer pour pouvoir l'utiliser dans countries
```jsx
import Card from './Card';
```
```jsx
<Fragment>
    <div className="countries">
        <ul className="countries-list">
            {data.map((country) => {
                <li>
                    <Card />
                </li>
            })}
        </ul>
    </div>
</Fragment>
```
Ensuite, dans notre composant Cards, on va maintenant lui passer nos données, pour cela, on va créer une **``props``** dans le composant ``Countries`` et pour lui passer notre variable dans le composant ``Cars``;
```jsx
<ul className="countries-list">
    {data.map((country) => {
        <li>
            <Cards country={country}/>
        </li>
    })}
</ul>
```
et Dans cars, pour les recupérer:
```jsx
const Cards = (props) => {

    console.log(props);
}
```
Attention, en React, il faut mettre une clé unique au props pour les différencier
```jsx
<Cards country={country} key={country.name}/>
```
**Le destructuring:**

 En javascript, et notamment en react, on peut facilité l'appel des props.

En effet, au lieu de toujours faire:
```jsx
props.country.name
``` 
Et de toujours devoir mettre le mots ``props``, on peut **``Destructurer``** notre variable pour ne pas l'écrire
```jsx
const { country } = props;
```
Grace à cette methode, on peut acceder au donnée directement:
```jsx
<Fragment>
    <li className="cards">
        <img src={country.flag} alt="flag" />
        <div className="data-container">
            <ul>
                <li>{country.name}</li>
                <li>{country.capital}</li>
                <li>Pop. {country.population}</li>
            </ul>
        </div>
    </li>
</Fragment>
```
Après avoir fait le style ect.., on va maintenant créer une fonction pour séparrer les milliers et avoir un affichage du nombres de population plus claire

Dans ``Cards.jsx``:
```jsx
const numberFormat = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}
```
Puis, dans notre création de card, on peut l'appeler pour avoir un nombre bien structurer
```jsx
<ul>
    <li>{country.name}</li>
    <li>{country.capital}</li>
    <li>Pop. {numberFormat(country.population)}</li>
</ul>
```
## Trier les données & Input range
### Trier les données
On va d'abord trier nos pays par ordre de population, pour cela on va d'abord créer une variable qui récupérera nos pays trier
```jsx
const [sortedData, setSortedData] = useState([]);
```
Dans le useEffect, on va se créer une fonction pour trier nos pays, pour cela, il va falloir transformer notre data en objet pour pouvoir utiliser la fonction ``sort()`` pour trier nos pays et ensuite modifier notre variable ``sortedData`` pour récupérer nos pays trier
```jsx
const sortedCountry = () => {
    const countryObj = Object.keys(data).map((i) => data[i]);
    const sortedArray = countryObj.sort((a,b) => {
        return b.population - a.population
    });
    setSortedData(sortedArray)
}
```
Nous pouvons remarquer un problème, en effet, comme **le javascript est un language asynchrone**, notre objet est vide. Car, on utilise notre fonction avant que notre data ne soit remplie.

Pour pallier a ce problème, on va dire a notre useEffect de s'utiliser lorsque data et mis à jours
```jsx
useEffect(() => {
    axios.get(
        'https://api.countrylayer.com/v2/all?access_key=API_KEY'
    ).then((res) => setData(res.data)) 
    const sortedCountry = () => {
        const countryObj = Object.keys(data).map((i) => data[i]);
        const sortedArray = countryObj.sort((a,b) => {
            return b.population - a.population
        });
        setSortedData(sortedArray)
    }
    sortedCountry();
}, [data])
```
Deuxieme erreur, comme a chaque utilisation du useEffect, on actualise data, cela créer une boucle infinie. Pour empécher cela, il faut executer ***le fetch*** qu'une seule fois.

On va donc créer une nouvelle variable qui sera un *Boolean* et qui nous permettra de savoir si oui on non, le fetch a deejà etait utilisé
```jsx
const [playOnce, setPalayOnce] = useState(true);
```
Puis on modifie notre useEffect pour retirer notre boucle infinie
```jsx
if(playOnce) {
    axios.get(
        'https://api.countrylayer.com/v2/all?access_key=API_KEY'
    ).then((res) => {
        setData(res.data);
        setPalayOnce(false)
    }) 
}
```
Enfin, pour avoir les pays trier, il faut modifier l'envoi des props vers notre conposant card
```jsx
 <ul className="countries-list">
    {sortedData.map((country) => {
        <li>
            <Cards country={country} key={country.name}/>
        </li>
    })}
</ul>
```
### Les input range
Maintenant, on créer notre imput pour permettre de choisir le nombre de pays que l'on veux afficher. 

D'abbord on va créer un variable pour mettre une valaur par default du nombre de pays que l'on veut, ici pour l'exemple, on affiche 40 pays
```jsx
const [rangeValue, setRangeValue] = useState(40);
```
Puis dans notre fonction on va dire, le nombre de sortie du tableau pays que l'on doit recuperer
```jsx
onst sortedCountry = () => {
    const countryObj = Object.keys(data).map((i) => data[i]);
    const sortedArray = countryObj.sort((a,b) => {
        return b.population - a.population
    });
    // On lui dit que la taille de notre tableau et de la valeur de 'rangeValue'
    sortedArray.lenght = rangeValue;
    setSortedData(sortedArray)
}
```
Ensuite, on va créer notre ``input range``:
```jsx
<Fragment>
    <div className="countries">
        <div className="sort-container">
            <input type="range" min="1" max="250" value={rangeValue} />
        </div>
        <ul className="countries-list">
            {sortedData.map((country) => {
                <li>
                    <Cards country={country} key={country.name}/>
                </li>
            })}
        </ul>
    </div>
</Fragment>
```
Pour changer la valeur de ``rangeValue``, in faut utiliser *l'event* ***onChange*** et la fonction ***setRangeValue*** pour mettre à jour notre variable
```jsx
<input type="range" min="1" max="250" value={rangeValue} onChange={(e) => setRangeValue(e.target.value)} />
```
et on oublie pas de relancer le useEffect à chaque modification de la valeur ``rangeValue``
```jsx
useEffect(() => {
    // Code du useEffect
    ...
}, [data, rangeValue, playOnce])
```
## Input Radio
Pour l'exemple des boutons radio, on va faire un trie des pays par continent.

On va d'abord créer nos boutons radio, pour cela, au lieu de créer 5 boutons radio en html et d'avoir du code répétitif, on va créer un tableau pour pouvoir le mappé et ainsi créer un bouton radio pour chaque entrée du tableau
```jsx
const [selectedRadio, setSelectedRadio] = useState('');
const radios = ["Afrique", "Amérique", "Asie", "Europe", "Océanie"]
```
Une premier constante pour savoir si notre bouton est selectionnée, ou non, et une deuxieme constantes qui est notre tableau de continant. 

Ensuite, on va mappé notre tableau pour créer nos bouton
```jsx
<ul>
    {radios.map((radio) => {
        return(
            <li key={radio}>
                <input type="radio" value={radio} id={radio} checked={radio == selectedRadio} onChange={(e) => setSelectedRadio(e.target.value)}/>
                <label htmlFor={radio}>{radio}</label>
            </li>
        )
    })}
</ul>
```
Ici, pour chaque continent, on créait un bouton radio qui a pour valeur et id le nom du contionent, l'attribut ``checked`` qui permet de voir si le bouton est selectionner grace à la variable selectedRadio, *``checked={radio == selectedRadio}``*, et un fonction onChange pour mettre à jour le bouton selectionner *``onChange={(e) => setSelectedRadio(e.target.value)}``*

Il ne restent plus qu'à faire un bouton pour annuler la recherche selectionner
```jsx
<div className="cancel">
    <h5 onClick={() => setSelectedRadio("")}>Annuler recherche</h5>
</div>
```
Il est posssible d'afficher ce bouton uniquement si un bouton radio à était séléctionné, pour cela, on dispose de la variable ``selectedRadio``. 

En React, on peut ecrire ça comme cela:
```jsx
<div className="cancel">
    {selectedRadio && <h5 onClick={() => setSelectedRadio("")}>Annuler recherche</h5>}
</div>
```
Cela correspond à Si selectedRadio est ``Vrai``, alors on affiche le **``<h5>``**

## Page News
On va d'abord créer une page ``News``, pour faciliter la saisie du *jsx*, il existe un module VScode qui s'appelle Mithril Emmet. Pour l'utiliser, il faut modifier le fichier **``settings.json``** (cliquer sur F1 et le rechercher) et rajouter le code
```json
"emmet.includelanguages": {
    "javascript": "javascriptreact"
},
"emmet.triggerExpansionOnTab": true,
```
Après avoir créer notre page, on va aller dans le composant app pour lui rajouter une route
```jsx
<Route path="/news" exact component={News} />
```
puis on le rajoute aussi dans le ``Navigatuon.jsx`` pour bouger directement du projet.

Et on va rajouter les composants, ``Navigation`` et ``Logo`` pour permettre la navigation et l'entête de notre page.
```jsx
<Fragment>
    <div className="news-container">
        <Navigation />
        <Logo />
        <h1>News</h1>
    </div>    
</Fragment>
```
### Le formulaire

On va créer notre formulaire en html classique
```jsx
<form>
    <input type="text" placeholder="Nom" />
    <textarea placeholder="Message"></textarea>
    <input type="submit" value="Envoyer" />
</form>
```

### Json-server

[Télécharger le fichier db.json](./react-projet1/src/assets/db.json)

dans un terminal,installer json-server:
```shell
npm install -g json-server 
```

Json server nous permet simuler un back, pour le lancer, il faut le lancer et lui donner le fichier json à utiliser:
```shell
json-server --w src/assets/db.json --port 3003
```
- json-server: on demander à la dépendance json-server
- --w: watch (surveiller)
- src/assets/db.json: le fichier à surveiller
- --port 3003: le port utiliser

Au lieu de devoir saisir tout le temps cette ligne, on peut créer un script dans les ``package.json`` pour le lancer plus simplement:
```json
"server": "json-server --w src/assets/db.json --port 3003"
```
Du coup, maintenant dans le terminal, on peut saisir cette commande pour lancer le server:
```shell
npm run server
``` 
### Récupérer et afficher nos données
#### Récupérer les données
Pour cela, on va une nouvelle fois utiliser ``axios``, et pointer l'url vers notre serveur json
```jsx
const getData = () => {
    axios.get('http://localhost:3003/articles').then((res) => console.log(res));
}
```
Pour appeler correctement notre fonction, on va utiliser le **``useEffect``** pour l'appeler quand on arrive sur la page
```jsx
useEffect(() => {
    getData();
}, []);
```
Pour recupérer la reponse de ce get, on va utiliser un useState, pour créer une variable et ainsi récupérer nos articles
```jsx
const [newsData, setNewsData] = useState([])
```
et dans notre fonction ``getData()``, on va utiliser notre **setNewsData** pour actualiser notre variavle **newsData**:
```jsx
const getData = () => {
    axios.get('http://localhost:3003/articles').then((res) => setNewsData(res.data));
}
```
#### Afficher les données
Pour récupérer nos articles, on va d'abords créer un composant ``Articles`` basique pour le moment:
```jsx
import React, {Fragment} from 'react';

const Articles = () => {
    return (
        <Fragment>
            <h2>
                Articles
            </h2>
        </Fragment>
    );
};

export default Articles;
```
Et comme pour les pays précédement, on va faire un ``.map()`` pour afficher notre compossant 
```jsx
<ul>
    {newsData.map((article) => (
        <Articles key={article.id}/>
    ))}
</ul>
```
Résultat:
![Affichage des articles](./img-readme/articles.PNG)

Ensuite, il va falloir envoyer les données de News vers Article avec les props pour récupérer les données dans le bon composant
```jsx
{newsData.map((article) => (
    <Articles key={article.id} article={article}/>
))}
```
Puis dans le composant article on peut les récupérer, et on peut le destructurer directement pour recupérer directeùment les article sans devoir mettre props.article a chaque fois
```jsx
const Articles = ({ article }) => {

    console.log(article) 

    return (
        <Fragment>
            <h2>
                Articles
            </h2>
        </Fragment>
    );
};
```
Grace au props, on peut maintenant utiliser nos données dans le composant Artocles pour les afficher
```jsx
<Fragment>
    <div className="articles">
        <div className="card-header">
            <h3>{article.author}</h3>
            <em>Posté le {article.date}</em>
        </div>
        <p>{article.content}</p>
        <div className="btn-container">
            <button>Modifier</button>
            <button>Supprimer</button>
        </div>
    </div>
</Fragment>
```
---
#### Formatage de la date
Fonction classique pour modifier la date:
```js
const dateParser = (date) => {
        let newDate = new Date(date).toLocaleDateString('fr-FR')
        return newDate;
    }
```
Resultat:</br>
![Date format 1](./img-readme/Date1.PNG)

On peut aussi transformer cette fonction en objet et lui donner des arguments pour modifier l'affichage:
```js
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
```
Resultat:</br>
![Format date 2](./img-readme/Date2.PNG)

---
### Création d'un article
Pour créer un article, on va d'abord devoir jouer avec le ``submit du formulaire``. 

Lorsque l'on envoi notre formulaire, on peut activé une fonction pour sauvegarder nos données grâce à l'événement ``onSubmit``
```jsx
<form onSubmit={handleSubmit}>
```
```jsx
const handleSubmit = () => {
    console.log('ok');
}
```
Attention, comme Javascript et un language asynchrone et surtout multi-traide, il ne faut pas oublie de mettre le ``preventDefault()`` pour éviter un rechargement de page.
```jsx
const handleSubmit = (e) => {
    console.log("ok");
    e.preventDefault();
}
```
#### Axios: la methode post
Après avoir vu le ``get`` avec axios, on va maintenant voir la methode ``post`` pour envoyer des données vers notre base:
```jsx
axios.post("http://localhost:3003/articles", {
    author: "Denis",
    content: "test",
    date: Date.now()
});
```
Ici, on envoi des données static a notre base lorsque l'on envoi notre formulaire.

Maintenant, on va récupérer les données de notre formulaire pour les envoyer à notre base. 

Pour cela, on va construire des constantes pour récupérer nos valeurs.
```jsx
const [author, setAuthor] = useState("");
const [content, setContent] = useState("");
```
Et pour modifier sa valeur, on vas mettre un evenement sur notre input pour voir les changements.
```jsx
<input type="text" placeholder="Nom" onChange={(e) => setAuthor(e.target.value)}/>
<textarea placeholder="Message" onChange={(e) => setContent(e.target.value)}></textarea>
```
Maintenant que l'on dispose de variavle contenant le champs de nos formulaire, on va pouvoir les utiliser pour les envoyer dans notre base
```jsx
axios.post("http://localhost:3003/articles", {
    author: author,
    content: content,
    date: Date.now()
});
```
Après avoir envoyer les données, on va rendre notre formulaire plus optimiser

### Optimisation du formulaire
#### 1. Remettre les champs vide
Après l'envoi de nos données, on va vider notre formulaire pour le rendre réutilisable directement pour l'utilisateur.

Pour cela,on va d'abord remettre les valeurs à zéro.
```jsx
axios.post("http://localhost:3003/articles", {
    author: author,
    content: content,
    date: Date.now()
}).then(() => {
    setAuthor("");
    setContent("");
});
```
Puis, on va dire que nos imput on pour valeur les constantes respective
```jsx
<input type="text" placeholder="Nom" onChange={(e) => setAuthor(e.target.value)} value={author}/>
<textarea placeholder="Message" onChange={(e) => setContent(e.target.value)} value={content}></textarea>
```
#### 2. Mettre a jour le fil d'actualité
Pour mettre à jour notre affichage, rien de plus facile. 

On va juste utiliser notre fonction ``getData()`` après notre post pour injecter dans nos données le nouvelles élément
```jsx
axios.post("http://localhost:3003/articles", {
    author: author,
    content: content,
    date: Date.now()
}).then(() => {
    setAuthor("");
    setContent("");
    getData();
});
```
#### 3. Gestion des erreurs
Pour l'exemple, on va prendre pour regle le fait que le texte dé l'article dois impérativement faire 140 carractères. 

Pour cela, on va créer une constante ``error`` pour savoir si après notre controle,  on a une erreur ou pas.
```jsx
const [error, setError] = useState(false);
```
Puis, on controle si on a atteint notre nombre de caractère
```jsx
const handleSubmit = (e) => {
    if(content.length < 140){
       setError(true);
    }else{
        axios.post("http://localhost:3003/articles", {
            author: author,
            content: content,
            date: Date.now()
        }).then(() => {
            setAuthor("");
            setContent("");
            getData();
        });
    }   
    e.preventDefault();
}
```
Puis on modifie notre textarea pour indiqué à l'utilisateur qu'il y a une erreur, pour cela, on va utiliser l'attribut **``style``** avec un ternaire
```jsx
<textarea
    style={{border: error ? "1px solid red" : "1px solid #61dafb"}} 
    placeholder="Message" 
    onChange={(e) => setContent(e.target.value)} value={content}
>
</textarea>
```
On peut ensuite rajouter un texte pour expliquer l'erreur qui ne s'affiche que si l'erreur est à *true* 
```jsx
{error && <p>Veuillez écrire un minimun de 140 caractères</p>}
```
Enfin, il ne faut pas oublier de repasser l'erreur à false si jamais il n'y a pu d'erreur.
```jsx
axios.post("http://localhost:3003/articles", {
    author: author,
    content: content,
    date: Date.now()
}).then(() => {
    setAuthor("");
    setContent("");
    setError(false)
    getData();
});
```
### Editer le texte
Dans le composant *Article*, on va devoir encore une fois créer une constante pour savoir si l'on à cliquer sur le bouton édition ou pas, et on va denouveau utiliser l'évement ``onClick`` pour modifier sa valeur lorsque l'on clique sur le bouton
```jsx
const [isEditing, setIsEditing] = useState(false);
```
```jsx
<button onClick={() => setIsEditing(true)}>Modifier</button>
```
Après cela, il nous suffit de mettre une condition en fonction de la valeur de cette variable, pour permettre soit d'afficher le texte, soit de le rendre éditable.
```jsx
{isEditing ? (
    <textarea autoFocus defaultValue={article.content}></textarea>
) : (
    <p>{article.content}</p>
)}
``` 
Ensuite, il faut modifier notre bouton en fonction de cette même variable, soit pour éditer l'article, soit pour sauvegarder les modifications
```jsx
{isEditing ? (
    <button onClick={handleEdit}>Valider</button>
) : (
    <button onClick={() => setIsEditing(true)}>Modifier</button>
)}
```
La fonction ``handleEdit`` va nous permettre de sauvegarder les modification, ainsi que de modifier la valeur de ``isEditing``
```jsx
const handleEdit = () => {

    const data = {
        author: article.author,
        content : "nouveau texte",
        date: article.date
    }

    axios.put(`http://localhost:3003/articles/${article.id}`, data);
    setIsEditing(false);
}
```
Ici, on créer un objet data qui correspond a se que l'on envoie dans la base de données

Ensuite, on utilise la methode ``put`` de ***axios*** pour l'envoyer

**Attention:** La methode ``put`` a besoin de deux arguments pour fonctionner, l'idée du champs à modifier et l'objet data qui corresponds à notre modification

Ensuite, il suffit de créer une constante pour récupérer la valeur du textarea et le mettre dans notre objet data, enfin, avec un *onChange* on va venir changer cette valeur
```jsx
const [editContent, setEditContent] = useState("");
```
```jsx
<textarea onChange={(e) => setEditContent(e.target.value)} autoFocus defaultValue={article.content}></textarea>
```
```jsx
const data = {
    author: article.author,
    content : editContent,
    date: article.date
}
```
Ensuite, il ne reste plus qu'a mettre à jour. Un composant enfant ne peut pas utiliser les fonctions de son parent. Du coup il y a deux autres méthodes, soit utiliser ``Redux``, soit en verifiant la variable modifier
```jsx
<p>{editContent ? editContent : article.content}</p>
```
***Attention:*** il faut aussi changer la ``defaultValue`` du textarea pour afficher la bonne valeur lors de la modification
```jsx
<textarea onChange={(e) => setEditContent(e.target.value)} autoFocus defaultValue={editContent ? editContent : article.content}></textarea>
```
### Supprimer un article
Pour la suppression, on va pouvoir faire ça dans un nouveau composant car c'est plus facile à apprender que la ``modification``.
```jsx
import React, {Fragment} from 'react';

const DeleteArticle = () => {
    return (
        <Fragment>
            <h1>Delete</h1>
        </Fragment>
    );
};

export default DeleteArticle;
```
Et dans article, on va appeler ce nouveau composant. La seule donnée dont a besoin la fonction ``delete``, c'est l'id de l'élément à supprimer
```jsx
<DeleteArticle id={article.id}/>
```
Grace à cette ``props``, on peut recuperer l'id dans le composant delete
```jsx
const DeleteArticle = (id) => {}
```
Dans notre composant ``DeleteArticle``, on va maintenant créer notre bouton, sauf qu'avant de supprimer un objet, on va d'abords demmander confirmation à l'utilisateur, pour cela on va utiliser la fonction **``window.confirm()``**, si l'utilisateur clique sur le bouton ``ok``, alors on supprime notre donner
```jsx
<button onClick={() => {
    if(window.confirm('Voulez vous supprimer cet article ?')) {
        handleDelete();
    }
}}>Supprimer</button>
```
```jsx
const handleDelete = () =>{
    axios.delete(`http://localhost:3003/articles/${id}`);
    window.location.reload();
}
```






