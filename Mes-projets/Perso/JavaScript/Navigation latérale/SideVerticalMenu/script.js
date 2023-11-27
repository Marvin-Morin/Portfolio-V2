const sections = [...document.querySelectorAll(".content-section")]
const navLinks = [...document.querySelectorAll("nav a")]
const documentationContainer = document.querySelector(".documentation-content")

window.addEventListener("load", () => {
  let data = sections.map(section => section.offsetTop)
  console.log(data);

  // Resize Observer
  const resizeObserver = new ResizeObserver(handleResize)
  resizeObserver.observe(documentationContainer)

  let firstLoad = true;
  function handleResize(){
    if(!firstLoad)  data = sections.map(section => section.offsetTop)
    firstLoad = false;
  }

  // Intersection Observer
  const intersectionObserver = new IntersectionObserver(startWatching, {rootMargin: "10% 0px"}) 
  intersectionObserver.observe(documentationContainer)

  function startWatching(entries) {
    if(entries[0].isIntersecting) {
      window.addEventListener("scroll", handleScroll)
    } else if (!entries[0].isIntersecting) {
      const elToClean = navLinks.find(navLink => navLink.className.includes("marked"))
      if(elToClean) elToClean.classList.remove("marked")
      savedIndex = undefined;
      window.removeEventListener('scroll', handleScroll)
    }
  }

  navLinks.forEach((navLink, index) => {
    navLink.addEventListener("click", e => {
      e.preventDefault()

      window.scrollTo({
        top: data[index],
        behavior: "smooth"
      })
    })
  })

  // window.addEventListener("scroll", handleScroll)

  let savedIndex;
  function handleScroll(){

    const trigger = window.scrollY + (window.innerHeight/2)

    for(const i of data) {
      const index = data.indexOf(i)

      if(trigger >= data[index] && trigger < data[index +1]){
        if(index !== savedIndex) {
          savedIndex = index;
          addClassAndClear(index)
        }
        break;
      }

      if(index === data.length - 1 && trigger >= data[index]) {
        if(index !== savedIndex) {
          savedIndex = index;
          addClassAndClear(index)
        }
      }
    }
  }
  handleScroll()

  function addClassAndClear(index) {
    const elToClean = navLinks.find(navLink => navLink.className.includes("marked"))
    if(elToClean) elToClean.classList.remove("marked")
    navLinks[index].classList.add("marked")
  }
})