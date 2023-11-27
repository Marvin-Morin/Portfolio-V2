import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App'
// import { Formulaire } from './Exercice-1/Formulaire/formulaire'
// import { Home } from './Exercice-2/Home'
// import { Home } from './Exercice-1/Home/home'
// import { Home } from './Exercice-3/Home'
// import { Login } from './Exercice-3/login'
import { App } from './Exercice-3/App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

  <App/>

  </React.StrictMode>
)


/**
 
import { Home as Bibi } from './Exercice-2/Home'
 * as Bibi permet de renomer son composent et importer deux composents du même nom

* Un fichier.jsx est un fichier qui permets d'imorter des composants


 */