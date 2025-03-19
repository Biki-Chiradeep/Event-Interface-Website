// common.js contains the core JavaScript functions shared across all subpages of the website.

//function no 1 -- scroll bar 
window.addEventListener("scroll", function () {
    let navbar = document.querySelector(".navbar");
    if (window.scrollY > 10) { 
        navbar.classList.add("fixed-nav");
    } else {
        navbar.classList.remove("fixed-nav");
    }
}, { passive: true });

//function no 2 -- opening of the Account Access Boxes
const dropDown= document.querySelectorAll('.dropDown');
dropDown.forEach((forEach)=>{
    forEach.addEventListener('click',()=>{
        console.log('Drop Down Clickrd');
        const containerId = forEach.getAttribute('data-container-id');
        const element = document.getElementById(containerId);
        console.log(element);
        element.classList.toggle('show');
        element.scrollIntoView({ behavior: 'smooth', block: 'end', inline: 'nearest' });
        const overlay = document.querySelector('.overlay');
        const allForms = document.querySelectorAll('.common-forms-class');
        const isAnyFormVisible = Array.from(allForms).some(form => form.classList.contains('show'));

        if (isAnyFormVisible) {
            overlay.classList.add('show');
        } else {
            overlay.classList.remove('show');
        }
         
});
});


//function no 3 -- close Tick operation
const closeTick = document.querySelectorAll('.closeTick');
closeTick.forEach((closeTick) => {
        closeTick.addEventListener('click',()=>{
            console.log('Overlay Clicked');
                const allForms = document.querySelectorAll('.common-forms-class');
                allForms.forEach((form) => {
                    form.classList.remove('show');
                });
        });
    });


  