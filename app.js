
const lanchedproducts = [
    { name: "Software Development", dsc: "Our expert developers create responsive, visually stunning, and user-friendly websites that are optimized for all devices, ensuring a smooth browsing experience for your visitors.", image: "44.jpg" },
    { name: "Website Development", dsc: "Our expert developers create responsive, visually stunning, and user-friendly websites that are optimized for all devices, ensuring a smooth browsing experience for your visitors.", image: "45.jpg" },
    { name: "Database Management", dsc: "We offer advanced database management solutions that guarantee security, scalability, and performance, allowing you to manage your data with ease and confidence.", image: "46.jpg" },
    { name: "Data Analysis", dsc: "Unlock insights from your data with our powerful data analysis tools. We provide actionable analytics to help you make informed decisions, improve processes, and drive growth.", image: "47.jpg" },
    { name: "AI Applications", dsc: "Leverage the power of artificial intelligence to automate tasks, enhance user experience, and deliver personalized solutions that adapt to changing needs.", image: "48.jpg" },
    { name: "Mobile App Development", dsc: "We develop feature-rich mobile applications for iOS and Android that provide engaging, intuitive, and seamless experiences on any device.", image: "49.jpg" },
];
const upcomingproducts = [
    { name: "Advanced Robotics", dsc: "We design and deploy robotic systems that can perform complex tasks with precision and efficiency, transforming industries from manufacturing to logistics and beyond. Our robots are adaptable, scalable, and built to meet the specific needs of your business.", image: "47.jpg" },
    { name: "Automation Systems", dsc: "Our automation solutions simplify and accelerate processes by reducing human intervention. From robotic arms to software-based task automation, we help businesses save time, minimize errors, and scale operations seamlessly.", image: "44.jpg" },
    { name: "AI-Driven Automation", dsc: "Leveraging artificial intelligence, our automation systems are capable of making real-time decisions and adapting to dynamic environments, improving efficiency, and ensuring smarter outcomes.", image: "49.jpg" },
    { name: "Remote Sensing", dsc: "We use state-of-the-art remote sensing technologies to gather, analyze, and interpret data from various sources. Whether it's satellite imagery, sensors, or geographic data, our remote sensing solutions provide valuable insights that drive decision-making in industries like agriculture, environment monitoring, and urban planning.", image: "47.jpg" },
    { name: "Networking Solutions", dsc: "We offer cutting-edge networking solutions that ensure high-performance, secure, and scalable connectivity for your organization. From designing efficient local area networks (LAN) to global network infrastructure, our solutions optimize data transfer, improve communication, and support seamless collaboration.", image: "45.jpg" },
    { name: "Server Solutions", dsc: "Our server management services guarantee optimal performance, security, and uptime for your on-premise or cloud-based systems. We handle everything from server installation, configuration, and maintenance to providing secure data storage and backup solutions.", image: "46.jpg" },
    { name: "Cloud Server Solutions", dsc: "Embrace the flexibility and scalability of cloud computing with our cloud server solutions. We provide secure, high-performance cloud infrastructure that grows with your business, offering reliable hosting, enhanced security, and easy scalability. Our cloud servers support business continuity and enable access to data and applications from anywhere, at any time.", image: "48.jpg" },
    
];

// Load events
function loadEvents() {
    const LanchedProductsContainer = document.getElementById('lanched-products-container');
    const UpcomingProductsContainer = document.getElementById('upcoming-products-container');

    lanchedproducts.forEach(event => {
        const eventCard = document.createElement('div');
        eventCard.classList.add('product-container');        
        eventCard.style.backgroundPosition = "center";eventCard.innerHTML = `<P style="font-size:22px; font-weight: bold; color:white; padding:10px;">${event.name}</p><p style="color:white; font-size:14px; font-weight:200; line-height: 23px; padding:5px">${event.dsc}</p>`;
        LanchedProductsContainer.appendChild(eventCard);
    });

    upcomingproducts.forEach(event => {
        const eventCard = document.createElement('div');
        eventCard.classList.add('product-container');        
        eventCard.style.backgroundPosition = "center";eventCard.innerHTML = `<P style="font-size:22px; font-weight: bold; color:white; padding:10px;">${event.name}</p><p style="color:white; font-size:14px; font-weight:200; line-height: 23px; padding:5px;">${event.dsc}</p>`;
        UpcomingProductsContainer.appendChild(eventCard);
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
