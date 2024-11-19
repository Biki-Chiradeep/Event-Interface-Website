// Sample data for events
const upcomingEvents = [
    { name: "Soulful Sunday", date: "Sun 24th Nov, 2024", Location:"Hard Rock Cafe Kolkata",image: "02.avif" },
    { name: "Timezone South City Mall", date: "Mon 18th Nov, 2024", Location:"Timezone South City Mall Kolkata",image: "03.avif"  },
    { name: "Nicco Park", date: "Tue 19th Nov, 2024 Onwards", Location:"Nicco Park Kolkata",image: "04.avif"  },
    { name: "Upside Down", date: "Mon 18th Nov, 2024 Onwards", Location:"Upside Down House Kolkata",image: "05.avif"  },
    { name: "Aquatica", date: "Mon 18th Nov, 2024 Onwards", Location:"Aquatica Kolkata",image: "06.avif"  },
    { name: "Pottery Painting Workshop", date: "Sun 24th Nov, 2024 Onwards", Location:"Multiple Venues Kolkata",image: "07.avif"  },
    { name: "Small World Canvas Painting", date: "Sun 24th Nov, 2024 Onwards", Location:"Multiple Venues Kolkata",image: "08.avif"  },
    { name: "Acrylic Painting", date: "Sun 24th Nov, 2024 Onwards", Location:"Multiple Venues Kolkata",image: "10.avif"  },
];

const pastEvents = [
    { name: "Soulful Sunday", date: "Sun 24th Nov, 2024", Location:"Hard Rock Cafe Kolkata",image: "02.avif" },
    { name: "Timezone South City Mall", date: "Mon 18th Nov, 2024", Location:"Timezone South City Mall Kolkata",image: "03.avif"  },
    { name: "Nicco Park", date: "Tue 19th Nov, 2024 Onwards", Location:"Nicco Park Kolkata",image: "04.avif"  },
    { name: "Upside Down", date: "Mon 18th Nov, 2024 Onwards", Location:"Upside Down House Kolkata",image: "05.avif"  },
    { name: "Aquatica", date: "Mon 18th Nov, 2024 Onwards", Location:"Aquatica Kolkata",image: "06.avif"  },
    { name: "Pottery Painting Workshop", date: "Sun 24th Nov, 2024 Onwards", Location:"Multiple Venues Kolkata",image: "07.avif"  },
    { name: "Small World Canvas Painting", date: "Sun 24th Nov, 2024 Onwards", Location:"Multiple Venues Kolkata",image: "08.avif"  },
    { name: "Acrylic Painting", date: "Sun 24th Nov, 2024 Onwards", Location:"Multiple Venues Kolkata",image: "10.avif"  },
];
const highlites = [
    { name: "Soulful Sunday", date: "Sun 24th Nov, 2024", Location:"Hard Rock Cafe Kolkata",image: "02.avif" },
    { name: "Timezone South City Mall", date: "Mon 18th Nov, 2024", Location:"Timezone South City Mall Kolkata",image: "03.avif"  },
    { name: "Nicco Park", date: "Tue 19th Nov, 2024 Onwards", Location:"Nicco Park Kolkata",image: "04.avif"  },
    { name: "Upside Down", date: "Mon 18th Nov, 2024 Onwards", Location:"Upside Down House Kolkata",image: "05.avif"  },
    { name: "Aquatica", date: "Mon 18th Nov, 2024 Onwards", Location:"Aquatica Kolkata",image: "06.avif"  },
    { name: "Pottery Painting Workshop", date: "Sun 24th Nov, 2024 Onwards", Location:"Multiple Venues Kolkata",image: "07.avif"  },
    { name: "Small World Canvas Painting", date: "Sun 24th Nov, 2024 Onwards", Location:"Multiple Venues Kolkata",image: "08.avif"  },
    { name: "Acrylic Painting", date: "Sun 24th Nov, 2024 Onwards", Location:"Multiple Venues Kolkata",image: "10.avif"  },
];

// Load events
function loadEvents() {
    const upcomingEventsContainer = document.getElementById('upcoming-events-container');
    const pastEventsContainer = document.getElementById('past-events-container');
    const highlitesContainer = document.getElementById('highlites-container');

    upcomingEvents.forEach(event => {
        const eventCard = document.createElement('div');
        eventCard.classList.add('product-container');
        eventCard.innerHTML = `<img src=${event.image}><h3>${event.name}</h3><p> ${event.date}</p><p>${event.Location}</p>`;
        upcomingEventsContainer.appendChild(eventCard);
    });

    pastEvents.forEach(event => {
        const eventCard = document.createElement('div');
        eventCard.classList.add('product-container');
        eventCard.style.backgroundPosition = "center";eventCard.innerHTML = `<img src=${event.image}><h3>${event.name}</h3><p>${event.Location}</p>`;
        pastEventsContainer.appendChild(eventCard);
    });

    highlites.forEach(event => {
        const eventCard = document.createElement('div');
        eventCard.classList.add('product-container');        
        eventCard.style.backgroundPosition = "center";eventCard.innerHTML = `<img src=${event.image}><h3>${event.name}</h3><p>${event.Location}</p>`;
        highlitesContainer.appendChild(eventCard);
    });
}

// Chatbot functionality
document.getElementById('chatbot-toggle').addEventListener('click', () => {
    document.getElementById('chatbox').classList.toggle('visible');
});

document.getElementById('send-chat').addEventListener('click', () => {
    const chatInput = document.getElementById('chat-input');
    const chatContent = document.getElementById('chat-content');
    if (chatInput.value) {
        const userMessage = `<p><strong>You:</strong> ${chatInput.value}</p>`;
        chatContent.innerHTML += userMessage;
        chatInput.value = '';
    }
});

// Load all events on page load
document.addEventListener('DOMContentLoaded', loadEvents);
// animated Back ground 
// JavaScript for additional control
//const images = ['pexels-benjaminfarren-21790478.jpg', 'pexels-bertellifotografia-16120220.jpg', 'pexels-bertellifotografia-16120232.jpg','pexels-bertellifotografia-16120259.jpg', 'pexels-noland-26447524.jpg','pexels-noland-26447526.jpg'];
//let currentIndex = 0;
// const backgroundDiv = document.querySelector('.animated-background');

// function changeBackground() {
//   backgroundDiv.style.backgroundImage = `url(${images[currentIndex]})`;
//   currentIndex = (currentIndex + 1) % images.length;
// }

// // Change image every 5 seconds
// setInterval(changeBackground, 5000);




// // image transition smoothaning 
// function changeImageSmoothly(imgElement, newSrc) {
//     // Add the 'hidden' class to trigger the fade-out transition
//     imgElement.classList.add('hidden');
    
//     // Wait for the fade-out transition to finish before changing the image
//     setTimeout(() => {
//         // Change the image source after fade-out
//         imgElement.src = newSrc;

//         // Remove the 'hidden' class after a short delay to trigger fade-in
//         setTimeout(() => {
//             imgElement.classList.remove('hidden');
//         }, 50); // Slight delay to ensure the new image is loaded before fading in
//     }, 500); // This delay should match the CSS transition time (0.5s in this case)
// }


// // 2nd image transition 
// // Select all images and container elements
// const images = ['pexels-benjaminfarren-21790478.jpg', 'pexels-bertellifotografia-16120220.jpg', 'pexels-bertellifotografia-16120232.jpg','pexels-bertellifotografia-16120259.jpg', 'pexels-noland-26447524.jpg','pexels-noland-26447526.jpg'];
// const container = document.querySelector('.animated-background');

// // Initially set all images to be fully visible and apply transition styles
// images.forEach(image => {
//   image.style.transition = 'opacity 0.3s ease-in-out, transform 0.3s ease-in-out'; // Apply smooth transition
//   image.style.opacity = '1'; // Ensure images start fully visible
// });

// // Function to show a new image with smooth transition
// function showImage(index) {
//   // Hide all images first
//   images.forEach(image => {
//     image.style.opacity = '0';  // Fade out
//     image.style.transform = 'scale(0.95)'; // Optional: apply a slight zoom out
//   });

//   // Show the selected image
//   images[index].style.opacity = '1';  // Fade in
//   images[index].style.transform = 'scale(1)'; // Reset zoom to normal
// }

// // Example usage: Change image every 3 seconds
// // let currentIndex = 0;
// setInterval(() => {
//   currentIndex = (currentIndex + 1) % images.length; // Cycle through images
//   showImage(currentIndex);
// }, 3000);

const images = [
    'pexels-benjaminfarren-21790478.jpg',
    'pexels-bertellifotografia-16120220.jpg',
    'pexels-bertellifotografia-16120232.jpg',
    'pexels-bertellifotografia-16120259.jpg',
    'pexels-noland-26447524.jpg',
    'pexels-noland-26447526.jpg'
];

const imgElement = document.querySelector('.animated-background .fade-image');
let currentIndex = 0;

// Function to show a new image with multiple transitions
function showImage(index) {
    // Trigger fade-out, zoom, and translation by adding the 'hidden' class
    imgElement.classList.add('hidden');
    
    // After the fade-out completes, update the image source
    setTimeout(() => {
        imgElement.src = images[index];
        
        // After updating the source, apply the entry animation by removing 'hidden'
        setTimeout(() => {
            imgElement.classList.remove('hidden');
            imgElement.style.transform = 'scale(1) translate(0, 0)'; // Reset transform for the entry effect
        }, 70); // Slight delay to create a smooth transition
    }, 400); // Match with CSS transition duration
}

// Automatically cycle through images every 5 seconds
setInterval(() => {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
}, 6000);
