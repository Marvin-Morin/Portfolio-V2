// let magnifyng_area = document.getElementById('magnifyng_area')
// let magnifyng_img = document.getElementById('magnifyng_img')

// magnifyng_area.addEventListener('mousemove', function() {

//     clientX = event.clientX - magnifyng_area.offsetLeft
//     clientY = event.clientY - magnifyng_area.offsetLeft

//     mWidth = magnifyng_area.offsetWidth
//     mHeight = magnifyng_area.offsetHeight


//     clientX = clientX / mWidth*100
//     clientY = clientY / mHeight*100



//     magnifyng_img.style.transform = 'translate(-'+clientX+'%, -'+clientY+'%) scale(2)'
// });





// magnifyng_area.addEventListener('mouseleave', function(event) {

    

//     magnifyng_img.style.transform = 'translate(-50%,-50%) scale(1)'
// })






































document.body.onmousemove=function(event) {
    zoom=2;
    loupe=document.getElementById("loupe");
    loupe.style.left=event.clientX+"px";
    loupe.style.top=event.clientY+"px";
    loupe.style.backgroundSize=(1500*zoom)+"px";
    loupe.style.backgroundPosition=(-loupe.offsetLeft*zoom-150)+"px"+(-loupe.offsetTop*zoom-150)+"px"
};