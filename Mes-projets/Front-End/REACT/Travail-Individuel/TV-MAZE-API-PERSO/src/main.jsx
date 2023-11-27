import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Nav } from './components/Navbar/nav'
import { Home } from './components/Home/home'
import { Result } from './components/reslutats-recherche/rechercheForm'
import { SerieCliquer } from './components/SerieCliquer/detailSerie'
import { Season } from './components/Season/Season'
import { InfoActor } from './components/Info-Acteur/infoActeur'
import './index.css'
// import { BarreDeRecherche } from './components/barre-recherche/barrerecherche'

ReactDOM.createRoot(document.getElementById('root')).render(
  
  <React.StrictMode>
    <BrowserRouter>
      <Nav/>
        <Routes>

            {/* Pour indiquer qu'il s'agisse de ma page d'accueil */}
            <Route path='/' element={<Home/>} />
            {/* Ma route pour aller sur la page d'accueil des 10 résultats maximum de la barre de recherche au submit du form */}
            <Route path='/series-recherchées' element={<Result/>}/>
            {/* Ma route pour aller voir les infos d'une série cliquée sur les 10 propositions maximum */}
            <Route path='/resultat-serie-cliquer' element={<SerieCliquer/>}/>
            {/* Pour afficher les informations d'un acteur qui a joué dans une série */}
            <Route path='/info-actor' element={<InfoActor/>} />
            {/* Pour afficher les détailes des saisons  */}
            <Route path='/info-season' element={<Season/>} ></Route>
            
        </Routes>
    </BrowserRouter>
  </React.StrictMode>

)