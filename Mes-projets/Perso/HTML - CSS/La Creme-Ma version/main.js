const ButtonContact = document.querySelector('#ButtonContact')
const SectionContact = document.querySelector('#Contact')
const MenuFooter = document.querySelector('#MenuFooter')
const Submit = document.querySelector('#Submit')



ButtonContact.addEventListener('click', () => {
    MenuFooter.style.display = "none";
    SectionContact.style.display = "flex";
});


Submit.addEventListener('click', () => {
    MenuFooter.style.display = "flex";
    SectionContact.style.display = "none";
})