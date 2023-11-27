const img = document.querySelector('img');


function rotation() {
    
    const input = document.querySelector('input').value;
    img.style.transform = `rotate(${input}deg)`;
    
    if (input > 361) {
        alert('Le nombre que vous avez choisis est trop grand !')
        img.style.transform = `rotate(0deg)`;
        
    }
    
    if (input < -361) {
        alert('Le nombre que vous avez choisis est trop petit !')
        img.style.transform = `rotate(0deg)`;
    };
    
};

document.addEventListener('keyup', click, (event) => {

    if (keyCode === 13) {
        alert('cc')
    }
});