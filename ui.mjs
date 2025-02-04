function toggleForm(containerClass) {
     
    const form = document.getElementById(containerClass);
    const otherForms = document.querySelectorAll('.account-access-box, .side-bar' );
    const overlay = document.querySelector('.overlay');
    otherForms.forEach(Other => {

        console.log("Other FOrms");
        console.log(Other);
    })
    otherForms.forEach(formElement => {
        if (formElement.id !== containerClass) {
                formElement.classList.remove('show');
            }
        });
        console.log('the 1');
        console.log(form);
        form.classList.toggle('show');
        overlay.classList.add('show');  
}

function closetab() {
    const form = document.querySelectorAll('.account-access-box, .side-bar');
    const closeOverlay = document.querySelector('.overlay'); 
    closeOverlay.classList.remove('show');
    form.classList.remove('show');
    
}
export const ui = {
    toggleForm,
    closetab,
};