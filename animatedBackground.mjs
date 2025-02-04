// const images = [
//     'pexels-benjaminfarren-21790478.jpg',
//     'pexels-bertellifotografia-16120220.jpg',
//     'pexels-bertellifotografia-16120232.jpg',
//     'pexels-bertellifotografia-16120259.jpg',
//     'pexels-noland-26447524.jpg',
//     'pexels-noland-26447526.jpg'
// ];

// const imgElement = document.querySelector('.animated-background .fade-image');
// let currentIndex = 0;

// // Function to show a new image with multiple transitions
// function showImage(index) {
//     // Trigger fade-out, zoom, and translation by adding the 'hidden' class
//     imgElement.classList.add('hidden');
    
//     // After the fade-out completes, update the image source
//     setTimeout(() => {
//         imgElement.src = images[index];
        
//         // After updating the source, apply the entry animation by removing 'hidden'
//         setTimeout(() => {
//             imgElement.classList.remove('hidden');
//             imgElement.style.transform = 'scale(1) translate(0, 0)'; // Reset transform for the entry effect
//         }, 70); // Slight delay to create a smooth transition
//     }, 400); // Match with CSS transition duration
// }

// // Automatically cycle through images every 5 seconds
// setInterval(() => {
//     currentIndex = (currentIndex + 1) % images.length;
//     showImage(currentIndex);
// }, 6000);
// Ensure GSAP ScrollTrigger is registered


// Add this to index.html

// <!-- 
// <div class="animated-background">
//     <img src="pexels-benjaminfarren-21790478.jpg" class="fade-image" alt="Background Image">
// </div> -->