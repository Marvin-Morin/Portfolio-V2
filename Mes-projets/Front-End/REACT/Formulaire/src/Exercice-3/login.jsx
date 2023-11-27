import { useContext, useState } from "react"
import styles from '../App.css'
import { ContextConnect } from "./Context"

//APPARAIT SI JE NE SUIS PAS CONNECTER
export const Login = () => {

    //STATE POUR SUIVRE L'EVOLUTION DES INPUTS MAIL ET PASSSWORD
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    //ICI, JE RECUPERE LA FONCTION SETCONNECTED PAR DESTRUCTURATION DE L'OBJET RENVOYER PAR USECONTEXT
    const {setConnected} = useContext(ContextConnect)

    //JE PASSE CONNECTED A TRUE LORS DE L'ENVOIE DU FORMULAIRE CAR PAR DEFAUT IL EST A FALSE
    const handleSubmit = e => {
        e.preventDefault();
        setConnected(current => !current)
    }

    //RENDER
    return (

        <form onSubmit={handleSubmit}>
            <input type={"email"} required value={email} onChange={e => setEmail(e.target.value)} placeholder='Entrez votre adresse mail'/>
            <input type={"password"} required value={password} onChange={e => setPassword(e.target.password)} placeholder='Entrez un mot de passe'/>
            <input type={"submit"} />
        </form>

    )
    
}