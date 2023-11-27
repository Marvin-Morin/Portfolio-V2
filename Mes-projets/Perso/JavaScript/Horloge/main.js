setInterval(function () {

    var date = new Date();
    var heure = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();

    document.getElementById('time').innerText =
        [
            heure < 10 ? '0' + heure : heure,
            minutes < 10 ? '0' + minutes : minutes,
            seconds < 10 ? '0' + seconds : seconds,

        ].join(':');

}, 1000);

const boule = document.querySelector('#after')

setTimeout(() => {

    after.style.display='block';
    
}, 1000);
