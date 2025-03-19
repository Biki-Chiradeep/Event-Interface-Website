// function toggleForm(containerClass) {
     
//     const form = document.getElementById(containerClass);
//     const otherForms = document.querySelectorAll('.other-forms' );
//     const overlay = document.querySelector('.overlay');
//     otherForms.forEach(formElement => {
//         console.log('hello');
//         if (formElement.id !== containerClass) {
//                 formElement.classList.remove('show');
//             }
//         });
//         form.classList.toggle('show');
//         overlay.classList.add('show');  
// };

// function closetab() {
//     const form = document.querySelectorAll('.other-forms');
//     console.log(form);
//     const closeOverlay = document.querySelector('.overlay'); 
//     closeOverlay.classList.toggle('show');
//     form.forEach((form) =>{
//         console.log(form);
//         form.classList.toggle('show');
//     });   
    
// };
// export const ui = {
//     toggleForm,
//     closetab,
// };