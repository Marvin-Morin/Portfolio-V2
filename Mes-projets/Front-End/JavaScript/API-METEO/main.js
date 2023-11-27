/**
 * Récuperer la ville avec un formulaire
 * Passser la ville en paramêtre de la fonction qui envoie la requête à l'API
 * // http://api.openweathermap.org/geo/1.0/direct?q=Saint-Malo&limit=1&appid=43cceaf558b7f341b3ac4d5ca1175c8c
 */

// Le protocole
const protocol = 'https://';

// Le end point (L'adress de l'API) :
const endPoint = 'api.openweathermap.org/'

// Les routes () :
// La route pour le service de geolocalisation :
const routeGeoLoc = 'geo/1.0/direct?';

//On créer une route pour la météo
const laRouteMeteoActuel = 'data/2.5/weather?';

// La clef de l'API :
const apiKey = `0b8a69a3c6d430c4f5969fd480af1cc4`;

// On construit une fonction qui prendra deux paramêtres :
// ville pour la ville
// limit, pour le nombre de retour
// On l'appelle au moment du click sur l'input type submit
const getGeolocFromPlaceName = (ville, limit) => {
    // On construit le début de la requete
    let myRequest = `${protocol}${endPoint}${routeGeoLoc}`;
    // On rajoute le parametre place
    let qVille = `q=${ville}`;
    myRequest += qVille;
    //Puis le paramêtre limit =
    let qlimit = `&limit=${limit}`;
    // Puis l'apikey
    let qAPI = `&appid=${apiKey}`;
    myRequest += qAPI;

    fetch(myRequest)

        .then(
            // Attendre que les fichiers soit téléchargées, puis Transformer les données en json :
            response => response.json()
        )
        // On traite les données :
        .then(
            // On appelle la fonction getGeolocFromPlaceName qui va traiter les données et appeller la route pour la meteo
            data => recupererLaMeteoActeulleDeGeoLoc(data)
        )

        .catch(
            error => console.log(error)
        )
};

// La fonction qui appelle la route pour la meteo et qui prendra en paramètre le JSON récupéré dans getGeolocFromPlaceName qui correspond au deuxieme then du fetch
const recupererLaMeteoActeulleDeGeoLoc = (data) => {
    console.log(data);

    // On va créer une variable pour extraire la latitude du JSON passé en paramètre
    let maLatitude = data[0].lat;

    // Même chose pour la longitude
    let maLongitutde = data[0].lon;

    // On va construire les Query parameters pour la route current weathet
    // q = pour indiquer qu'il s'agisse d'un query parameters
    let qLat = `lat=${maLatitude}`;
    let qLon = `lon=${maLongitutde}`;
    let qUnitees = `units=metric`;
    let qLang = `lang=fr`;

    // On crée la requete :
    let myRequest = `${protocol}${endPoint}${laRouteMeteoActuel}`;
    myRequest = `${myRequest}${qLat}&${qLon}&${qUnitees}&${qLang}&appid=${apiKey}`;

    fetch(myRequest)

        // Attendre que les fichiers soit téléchargées, puis Transformer les données en json :
        .then(
            transformEnJson => transformEnJson.json()
        )
        .then(
            traiterData => montrerLaMeteoDeLapi(traiterData)
        )

        .catch(
            error => console.log(error)
        )
};

// Je créer la fonction montrerLaMeteoDeLapi à la ligne 84 qui qui traite le json de l'api currentweather
// Et affiche les données dans le HTML
// Elle prend en paramètre un JSON

const montrerLaMeteoDeLapi = (data) => {
    console.log(data);
    // On cible la span ville pour afficher la propriétée name de json
    const truc = document.querySelector('#truc');
    // On ajoute la ville à l'intérieur
    truc.innerHTML = data.name;
    const resume = document.querySelector('#resume');
    resume.innerHTML = data.weather[0].description.charAt(0).toLocaleUpperCase() +  data.weather[0].description.substring(1);
    const temps = document.querySelector('#temps');
    temps.innerHTML = Math.trunc(data.main.temp) + '°C';
    const tempsressentis = document.querySelector('#tempsressentis');
    tempsressentis.innerHTML = Math.trunc(data.main.feels_like) + '°C';
    const tempsminimum = document.querySelector('#temp_min');
    tempsminimum.innerHTML = Math.trunc(data.main.temp_min) + '°C';
    const temp_max = document.querySelector('#temp_max');
    temp_max.innerHTML = Math.trunc(data.main.temp_max) + '°C';
    const vent = document.querySelector('#vent');
    vent.innerHTML = data.wind.speed + ' km/h';


    const ciel = document.querySelector('#ciel');
    ciel.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`;

}



// je créer une référence vers mon formulaire
const monFormulaire = document.forms.mavilleform;
const meteo = document.querySelector('#meteo');
// Je créer un un écouteur d'évènement sur le formulaire pour appeler la fonction getGeolocFromPlaceName quand le formulaire est envoyé
monFormulaire.addEventListener('submit', (donneeDuFormulaire) => {

    //Pour enmpêcher le rechargement de la page pour pouvoir garder les données du formulaire :
    donneeDuFormulaire.preventDefault();

    //Créer une variable pour recuperer la value du champs ville
    let value = monFormulaire.ville.value;
    // On vérifie que value n'est pas vide :
    if (value != '') {
        //On appelle notre fonction en lui passent la variable pvalue en paramètre
        getGeolocFromPlaceName(value, 1);
        // On met ma div meteo en display flex :
        meteo.style = `display:flex;`;
    } else {
        meteo.style = `display:none;`;
    }
});