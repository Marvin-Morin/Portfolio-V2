import { useState } from "react"
import { ContextConnect } from "./Context"
import { Home } from "./Home"
import { Login } from "./login"


// Composant de base qui permet de rediriger vers le bon composant si l'utilisteur est connecter. Cette page, je la vois comme  un paramètre de notre site : elle ne sera jamais affiché ni vu par l'utilisateur.

export const App = () => {

    // IL ME FAUT CREER UN ETAT POUR SUIVRE SI JE SUIS CONNECTER.
    // DE BASE, PAR DEFAUT : JE NE SUIS PAS CONNECTER : (false)
    const [connected, setConnected] = useState(false)


    return (

        // Ici j'import mon composant ContextConnect qui va créer un context pour connected et setConnected.
        // Provider est une propriete de React pour chaque context (voir definition en bas de la page).
        <ContextConnect.Provider value={{ connected, setConnected}}>

            {/* 
            
            Je passe le state "connected" a mon context pour qu'il puisse être utiliser dans Home et login *
            
            Si je suis connecté, j'afiche le composant Home, sinon je retourne le composant Login 
            
            */}
        
             {connected ? <Home/> : <Login/>}

        </ContextConnect.Provider>

    )
    // NB = (Note à ne pas oublié)

    // NB: POUR EVITER DE PASSER LES PROPS A NOS COMPOSANTS AINSI QU'A LEURS ENFANTS (PROPS DRILLING) NOUS ALLONS UTILISER UN CONTEXTE QUE L'ON VA IMPORTER.
}


/**
 
DEFINITION DE Provider :



 * Chaque objet Contexte est livré avec un composant React Provider qui permet aux composants consommateurs de s’abonner aux mises à jour du contexte.

Il accepte une prop value à transmettre aux composants consommateurs descendants de ce Provider(plus bas dans l’arbre, donc). Un Provider peut être connecté à plusieurs consommateurs. Les Provider peuvent être imbriqués pour remplacer leur valeur plus profondément dans l’arbre.

Tous les consommateurs qui sont descendants d’un Provider se rafraîchiront lorsque la prop value du Provider change. La propagation du Provider vers ses consommateurs descendants (y compris .contextType et useContext) n’est pas assujettie à la méthode shouldComponentUpdate, de sorte que le consommateur est mis à jour même lorsqu’un composant ancêtre saute sa mise à jour.


 */