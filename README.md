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
![composant basique](/img-readme/composantBasique.png)

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

Dans le fichier App; js, on peut supprimer tout le rendu et y mettre:
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
resultat:
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
![Resultat composant home](/img-readme/acceuil.png)

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


