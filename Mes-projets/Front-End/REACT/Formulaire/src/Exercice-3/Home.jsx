// On va voir les contaxtes

import { useContext } from "react"
import { ContextConnect } from "./Context"

//Composant / PAGE QUI APPARAIT LORS DE LA CONEXION
export const Home = () => {

    //JE RECUPERE LE SETTER DE CONNECTED DEPUIS MON CONTEXT(ContextConnect) grâce au useContext

    //CECI
    const { setConnected } = useContext(ContextConnect)
    //ET CELA C'EST PAREIL :
    // const { setConnected : setConnected } = useContext(ContextConnect)

    // : car c'est un objet et propriete = valeur grâce au deux petits points (:)
    //Donc la propriétée setConnected corespond à la valeur de setConnected.

    //Ici, je modifie la valeur de connected qui est de base a false :
    const handleLougout = () => {
        //Ici je modifie le setter et je le mets à true au clique sur notre bouton
        setConnected(current => !current)
    }

    //RENDER
    return (
        <>
            <h1>VOUS ETES LOGUER</h1>
            <button onClick={handleLougout}>LOGOUT</button>
        </>
    )
}