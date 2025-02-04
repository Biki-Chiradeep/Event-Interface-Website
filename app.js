import { ui } from './ui.mjs';
const dropDowns = document.querySelectorAll('.dropDown');
const overlay = document.querySelector('.overlay');
dropDowns.forEach(dropDown => {
  dropDown.addEventListener('click', () => {
    const containerId = dropDown.getAttribute('data-container-id');
    ui.toggleForm(containerId);
  });
});
overlay.addEventListener('click', (event) => {
    if (event.target === overlay) {
      ui.closetab();
    }
});
const side_bar_icon = document.querySelector('.side-bar-icon');
side_bar_icon.addEventListener('click', () => {
console.log('SIde Bar Icon Clicked' );
    const containerId = side_bar_icon.getAttribute('data-container-id');
    console.log('containerId:', containerId);
    ui.toggleForm(containerId);
       
});
//togle form ends here
//product data section starts here  
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
//product data section ends here 

// Load events for lanch products and upcomming products start here 
function loadEvents() {
    // console.log('loadEvents function called');  
    const LanchedProductsContainer = document.getElementById('lanched-products-container');
    const UpcomingProductsContainer = document.getElementById('upcoming-products-container');
    lanchedproducts.forEach(event => {
        const eventCard = document.createElement('div');
        eventCard.classList.add('product-container');        
        eventCard.style.backgroundPosition = "center";
        eventCard.innerHTML = `<P style="font-size:22px; font-weight: bold; color:#383636; padding:10px;">${event.name}</p><p style="color:#535353; font-size:14px; font-weight:200; line-height: 23px; padding:5px">${event.dsc}</p>`;
        LanchedProductsContainer.appendChild(eventCard);
    });
    upcomingproducts.forEach(event => {
        const eventCard = document.createElement('div');
        eventCard.classList.add('product-container');        
        eventCard.style.backgroundPosition = "center";eventCard.innerHTML = `<P style="font-size:22px; font-weight: bold; color:#383636; padding:10px;">${event.name}</p><p style="color:#535353; font-size:14px; font-weight:200; line-height: 23px; padding:5px;">${event.dsc}</p>`;
        UpcomingProductsContainer.appendChild(eventCard);
    });
}
// Load all events on page load
document.addEventListener('DOMContentLoaded', loadEvents);


// Define the function to speak text
function speakText() {
    console.log('speakText function called');
    var textToSpeak = document.getElementById('textToSpeak').innerText;
    var elementsWithPromptTextClass = document.getElementsByClassName('prompttext');

// Assuming you want the first element with the class 'prompttext'
    if (elementsWithPromptTextClass.length > 0) {
    var textToSpeak = [];
    
            for (var i = 0; i < elementsWithPromptTextClass.length; i++) {
                textToSpeak.push(elementsWithPromptTextClass[i].innerText);
            }
    // console.log(textToSpeak);
    }
    // Check if the SpeechSynthesis API is supported by the browser
    if ('speechSynthesis' in window) {
        var synthesis = window.speechSynthesis;
        var utterance = new SpeechSynthesisUtterance(textToSpeak);
        utterance.rate = 0.8;
        utterance.volume = 0.5;
        utterance.pitch = 1.5;

        // Optionally, you can set voice and other properties here
        // utterance.voice = ...

        synthesis.speak(utterance);
    } else {
        console.error('SpeechSynthesis not supported in this browser.');
    }
}
window.speakText = speakText;

// // Define the windowLoadHandler function
// function windowLoadHandler() {
//     // speakText();
//     setTimeout(scrollToFooter, 200);

// }
// window.addEventListener("load", windowLoadHandler, false);


function stopspeakText() {
    window.speechSynthesis.cancel();
}

window.stopspeakText = stopspeakText;




function createPromptContainer(text) {
    console.log(' create prompt contianer called');
    var uniqueId = generateUniqueId();
    var container = document.createElement("div");
    container.className = "promptcontainer";
    container.id = uniqueId; 
    container.innerHTML = `
    <div class="prompt_title">
        <a class="Prompt_Logo" href="http://www.eventinterface.in/"><img src="EI_LOGO_V2.png" alt="Event Interface Logo"></a>
        <p class="prompt_brand_name"style="font-weight: bold; font-size: 1.2rem;"> Event Interface .in </p>    
    </div>
    <p class='prompttext' id="${uniqueId}_textToSpeak">${text}</p>
    
    <div class="prompt_ending">
            <button class='output_prompt_Speaker'  onclick="speakText2('${uniqueId}')">                
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="18"
                        viewBox="2 0 22 22"
                        fill="none"
                        stroke="#8a8a8a"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    >
                    <path opacity="0.15" d="M13 3L7 8H5C3.89543 8 3 8.89543 3 10V14C3 15.1046 3.89543 16 5 16H7L13 21V3Z" fill="#8a8a8a"/>
                    <path d="M16 8.99998C16.5 9.49999 17 10.5 17 12C17 13.5 16.5 14.5 16 15M19 6C20.5 7.5 21 10 21 12C21 14 20.5 16.5 19 18M13 3L7 8H5C3.89543 8 3 8.89543 3 10V14C3 15.1046 3.89543 16 5 16H7L13 21V3Z" stroke="#8a8a8a" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
            </button>
            <button class='output_prompt_Speaker'  onclick="stopspeakText()">
                    <svg 
                    class="crossSVG" xmlns="http://www.w3.org/2000/svg" 
                    width="20"
                    height="14"
                    viewBox="2 0 22 22" 
                    fill="none" 
                    stroke="#8a8a8a" 
                    stroke-width="3" 
                    stroke-linecap="round" 
                    stroke-linejoin="round" 
                    style="display: inline; background-color: transparent;"
                    >                    
                        <line x1="21" y1="3" x2="3" y2="21"></line>
                        <line x1="3" y1="3" x2="21" y2="21"></line>
                    </svg>
            </button>
    </div>        
                           
    `;
    var productsContainer = document.querySelector('.products');
    if (productsContainer) {
        productsContainer.appendChild(container);
        setTimeout(scrollToFooter, 200);
        speakText2(uniqueId);
    } else {
        console.error('Products container not found.');
    }

}









function generateText() {
    // Replace this with your generative text logic
    const text2=["Please Click the Audio Button to continue the course."];
    return ` ${text2}`;
}
function generateText0() {
    // Replace this with your generative text logic
    const text2=["Please Click the Audio Button to continue the course."];
    return ` ${text2}`;
}


function nextText() {
    // Generate and display the next text with a different greeting
    createPromptContainer(generateText0());
}
function scrollToFooter() {
    var footerTab = document.getElementById('chatend');
    // var footerTab = document.getElementById(id);
    if (footerTab) {
        footerTab.scrollIntoView({ behavior: 'smooth', block: 'end', inline: 'nearest' });
    } else {
        console.error('Footer tab not found.');
    }
}



function speakText2(id) {
    console.log('speakText2 function called'); // Corrected function name
    console.log(id); // Corrected function name
    var elementWithPromptText = document.getElementById(id + '_textToSpeak');

    if (elementWithPromptText) {
        var textToSpeak = elementWithPromptText.innerText;
        if ('speechSynthesis' in window) {
            var synthesis = window.speechSynthesis;
            var utterance = new SpeechSynthesisUtterance(textToSpeak);
            utterance.rate = 0.8;
            utterance.volume = 0.5;
            utterance.pitch = 1.5;
            synthesis.speak(utterance);
        } else {
            console.error('SpeechSynthesis not supported in this browser.');
        }
    } else {
        console.error('Element with ID not found: ' + id + '_textToSpeak');
    }
}
window.speakText2 = speakText2;


function generateUniqueId() {
    return 'id' + Math.random().toString(36).substr(2, 9);
}



function createPromptContainer2(text) {
    console.log(' create prompt contianer called');
    var uniqueId = generateUniqueId();
    var container = document.createElement("div");
    container.className = "promptcontainer2";
    container.id = uniqueId; 
    container.innerHTML = `
    <div class="prompt_title">
        <p class="prompt_brand_name" style="font-weight: bold; font-size: 1.2rem;"> User </p>
    </div>
        <p class='prompttext' id="${uniqueId}_textToSpeak">${text}</p>
    <div class="prompt_ending">
        <button class='output_prompt_Speaker'  onclick="speakText2('${uniqueId}')"> 
                    <svg
                     xmlns="http://www.w3.org/2000/svg"
                     width="24"
                     height="18"
                     viewBox="2 0 22 22"
                     fill="none"
                     stroke="#8a8a8a"
                     stroke-width="2"
                     stroke-linecap="round"
                     stroke-linejoin="round"
                    >
                    <path opacity="0.15" d="M13 3L7 8H5C3.89543 8 3 8.89543 3 10V14C3 15.1046 3.89543 16 5 16H7L13 21V3Z" fill="#8a8a8a"/>
                    <path d="M16 8.99998C16.5 9.49999 17 10.5 17 12C17 13.5 16.5 14.5 16 15M19 6C20.5 7.5 21 10 21 12C21 14 20.5 16.5 19 18M13 3L7 8H5C3.89543 8 3 8.89543 3 10V14C3 15.1046 3.89543 16 5 16H7L13 21V3Z" stroke="#8a8a8a" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
            </button>
            <button class='output_prompt_Speaker'  onclick="stopspeakText()">
                    <svg 
                    class="crossSVG" xmlns="http://www.w3.org/2000/svg" 
                    width="20"
                    height="14"
                    viewBox="2 0 22 22" 
                    fill="none" 
                    stroke="#8a8a8a" 
                    stroke-width="3" 
                    stroke-linecap="round" 
                    stroke-linejoin="round" 
                    style="display: inline; background-color: transparent;"
                    >
                        <line x1="21" y1="3" x2="3" y2="21"></line>
                        <line x1="3" y1="3" x2="21" y2="21"></line>
                    </svg>
            </button>
    </div>        
                           
    `;

    // Check if the "products" container exists before appending the new container
    var productsContainer = document.querySelector('.products');
    if (productsContainer) {
        productsContainer.appendChild(container);
        console.log(' child appended');
        // container.scrollIntoView({ behavior: 'smooth', block: 'end', inline: 'nearest' });
        setTimeout(scrollToFooter, 200);        
        
    } else {
        console.error('Products container not found.');
    }
}

document.addEventListener("DOMContentLoaded", function() {
    try {
        var slideCount = document.querySelectorAll('.post-wrapper .post').length;
        // console.log('Slide count:', slideCount);

        var slideWidth = document.querySelector('.post').offsetWidth;
        console.log('Slide width:', slideWidth);

        var sliderUlWidth = slideCount * slideWidth;

        document.querySelector('.post-wrapper').style.width = sliderUlWidth + ((slideCount + 1) * 20) + 'px';

        function moveLeft() {
            var postWrapper = document.querySelector('.post-wrapper');
            postWrapper.style.transition = 'transform 0.5s ease';
            postWrapper.style.transform = 'translateX(-' + (slideWidth + 20) + 'px)';
            setTimeout(function() {
                postWrapper.appendChild(postWrapper.firstElementChild);
                postWrapper.style.transition = 'none';
                postWrapper.style.transform = 'translateX(0)';
            }, 500); // Adjusted delay to 700ms
        }

        function moveRight() {
            var postWrapper = document.querySelector('.post-wrapper');
            postWrapper.style.transition = 'transform 0.5s ease';
            postWrapper.style.transform = 'translateX(' + (slideWidth + 20) + 'px)';
            setTimeout(function() {
                postWrapper.insertBefore(postWrapper.lastElementChild, postWrapper.firstElementChild);
                postWrapper.style.transition = 'none';
                postWrapper.style.transform = 'translateX(0)';
            }, 500); // Adjusted delay to 700ms
        }

        document.querySelector('.prev').addEventListener('click', function() {
            moveRight();
        });

        document.querySelector('.next').addEventListener('click', function() {
            moveLeft();
        });
    } catch (error) {
        console.error('An error occurred:', error);
    }
});
const textarea = document.getElementById('queryInput');

textarea.addEventListener('input', function () {
    this.style.height = 'auto'; // Reset height to auto to recalculate
    this.style.height = this.scrollHeight + 'px'; // Set height to scrollHeight
});

// .............................................
document.getElementById('submitButton').addEventListener('click', function() {
                var InputPromptText = document.getElementById('queryInput').value;
                createPromptContainer2(InputPromptText);
                console.log(InputPromptText); // Debugging line

                if (InputPromptText.toLowerCase() == "start") {
                    createPromptContainer(generateText());   
                } else {
                    createPromptContainer(generateText0());   
                }
                textarea.value = "";
                textarea.style.height = 'auto'; // Call the submit function
                textarea.focus();
});


//....................21.121
document.addEventListener('DOMContentLoaded', function () {
    var textarea = document.getElementById('queryInput');
    
    // Handle Enter key press in the textarea
    textarea.addEventListener('keydown', function (event) {
        if (event.keyCode === 13) { // Enter key
                event.preventDefault(); // Prevent new line in textarea
                var InputPromptText = document.getElementById('queryInput').value;
                createPromptContainer2(InputPromptText);
                console.log(InputPromptText); // Debugging line

                if (InputPromptText.toLowerCase() == "start") {
                    createPromptContainer(generateText());   
                } else {
                    createPromptContainer(generateText0());   
                }
                textarea.value = ""; 
                textarea.style.height = 'auto'; // Call the submit function
                textarea.focus();
                }
    });

});



const course = [
    { title: "Topics", dsc: "•	AI Fundamentals: Learn how AI is transforming industries and how you can build intelligent systems.•	Machine Learning Techniques: Discover how to create predictive models and algorithms that learn from data.•	Data Analytics Mastery: Uncover the power of data visualization, cleaning, and analysis to make data-driven decisions.•	Neural Networks & Deep Learning: Inspired by the human brain, enable AI systems to recognize patterns, make decisions, and solve complex problems through multi-layered deep learning architectures.", audio: "voice/IntroVoice3.mp3" },
    { title: "Remarks", dsc: "By combining these technologies, AI has the power to build any type of software in the world—from intelligent automation systems to self-learning applications, advanced predictive models, and human-like decision-making systems.Mastering AI means unlocking unlimited possibilities, shaping the future of innovation, and driving transformation across industries. Let’s dive deeper into how these technologies work together!", audio: "voice/IntroVoice4.mp3" },
    { title: "Introduction to Artificial Intelligence (AI)", dsc: "Artificial Intelligence (AI) is a field that aims to replicate human-like intelligence in machines. But before diving into AI, it’s important to understand the concepts of intelligence and artificial, and how they combine to form AI.To begin, let’s explore the foundational idea behind intelligence and the meaning of artificial—these two concepts are key to understanding what makes AI possible and how it operates.", audio: "voice/IntroVoice5.mp3" },
    { title: "What is Intelligence?", dsc: "Intelligence can be understood as the ability for critical thinking, problem-solving, and the capacity to make decisions based on information. It is the ability of your brain to acquire knowledge, learn, understand complex ideas, and apply knowledge to solve problems.", audio: "voice/IntroVoice6.mp3" },
    { title: "Highlights", dsc: "1.	Learning: The ability to gain knowledge or skills through study, teaching, or experience.2.	Reasoning: Making decisions based on available information or the capacity to think logically and make sense of information.3.	Problem-solving: Identifying and resolving complex problems.", audio: "voice/IntroVoice7.mp3" },
    { title: "Why Artificial?", dsc: "The term Artificial in AI emphasizes that these intelligent systems are created by humans, using artificial means, such as algorithms, computer programs, and data. This distinction highlights the difference between natural intelligence (human intelligence) and artificial intelligence (machine intelligence). Examples of artificial systems:•	Machines: Devices like computers, mobiles or robots that perform tasks.•	Software:  Algorithms or Step-by-step procedures or rules designed to solve problems or perform computations.•	Data: Information stored digitally in storage devices in the form of 0s and 1s,", audio: "voice/IntroVoice8.mp3" },
    { title: "How Artificial Intelligence is created?", dsc: "AI's are mainly a software or a code, made by combining the Data, Mathematical Algorithm or logics which mimics the human intelligence and with the computational capabilities of machines.   Together, this combinations allows AI systems to perform tasks that typically require human intelligence such as analyzing data, and solve complex problems. However, to truly understand how AI functions, we first need to understand the foundation it is built upon—software. To dive deeper into AI, we must first explore the core aspects of software:•	What is software?•	How does it work?•	What are the components of software?•	How does software become AI software?", audio: "voice/IntroVoice9.mp3" },
    { title: "1. What is Software?", dsc: "Software is a set of instructions, programs, or data that tell a computer what to do. Unlike hardware, which is the physical parts that we can touch, software operates digitally and tells the hardware how to work.1.	Physical hardware components like the CPU, RAM, and hard drive, pen drive, SD cards, monitor, Key pad, mouse.2.	Application software (e.g., web browsers, games, or mobile apps) and system software (e.g., operating systems like Windows or Linux, Android) and application software (e.g., web browsers, games, or mobile apps, calculator, paintings, ).", audio: "voice/IntroVoice10.mp3" },
    { title: "2. How Does Software Work?", dsc: "•	Software works by following a set of instructions (code) written in programming languages like Python, Java, or C++.•	These instructions are processed by the computer's hardware, such as the CPU, memory, and storage.•	The process involves:1.	Input: Receiving data or commands from the user. (e.g., Pressing the like button on some selfie photo.)2.	Processing: Executing the instructions to perform calculations, manipulate data, or make decisions.(Understand the user want to Like that selfie photo)3.	Output: Delivering the results to the user or another system (e.g., It reflects that you like the picture along with your user name and increases the like count on the post.)", audio: "voice/IntroVoice11.mp3" },
    { title: "3. What Are the Components of Software?", dsc: "Software is made up of several key components that allow it to function effectively:•	User Interface (UI) for Input: The visual and interactive elements through which users interact with the software (monitor, touch-screen of a mobile, microphone, keyboard, mouse, etc.).•	Data: Stores the information (like a photo) that you input through the UI in the form of data, which is stored in some storage devices, like hard disks, pen drives, SD cards, etc.•	Code or Software: Step-by-step instructions for solving problems or performing tasks. These steps are written as mathematical algorithms or logics in some programming language that a computer can understand. These are called the software. (Code or software are also stored in some storage devices.)•	CPU: Now the processing happens in the Central Processing Unit (CPU). The CPU uses the stored data from storage devices and follows the step-by-step instructions (software) to generate the output. (This is called processing or computing.)•	User Interface (UI) for Output: The visual and interactive elements through which the software interacts with the user. (Monitor, display of a mobile, speakers, etc.).", audio: "voice/IntroVoice12.mp3" },
    { title: "4. How Does Software Become AI Software?", dsc: "4. How Does Software Become AI Software?For software to become AI software, it must integrate certain additional components and processes:•	Automation: AI software is designed to automate tasks that usually require human intelligence, like analyzing data, recognizing patterns, and making decisions based on inputs.•	Machine Learning Algorithms: Unlike traditional software that follows fixed instructions, AI software uses algorithms to learn from data, identify patterns, and make predictions or decisions.•	Data Input: AI software requires large datasets to learn and improve its performance. These datasets are the foundation for training machine learning models.•	Training and Testing: The software must be trained on datasets to improve its accuracy and performance, and then tested to ensure it works as intended.•	AI Models: Pre-trained or custom models, such as neural networks, are used to perform tasks like language processing, image recognition, or decision-making.", audio: "voice/IntroVoice13.mp3" },
    { title: "Learn How an AI Model Works on the Internet  Step by Step", dsc: "Today’s AI models are mostly using the Internet for their operation. So we need to learn the overview of how AI software or any software is deployed on the Internet so that we can access those software. We will first learn how some popular software is working right now, like:•	Google (Search): Finds and organizes vast information across the web.•	YouTube: Streams videos to billions of users daily.•	Facebook, WhatsApp (Social Media): Connect people and allow real-time sharing of posts, photos, and chats.•	Zomato, Swiggy (Online Food Delivery): Help users order food online by connecting them to restaurants.•	Ola, Uber (Online Car Rental): Provide transportation services by connecting riders and drivers.•	Zerodha, Groww (Online Trading Platform): Allow people to trade stocks and mutual funds online.•	Paytm, Google Pay (Online Payment Applications): Enable secure digital transactions for various purposes.•	Gmail, Yahoo Mail (Email): Offer fast, reliable email services.•	Amazon, Flipkart, Zepto, Blinkit (E-commerce): Let users shop online and get products delivered to their homes.•	ChatGPT, Gemini, DeepSeek (AI Software): Demonstrate how artificial intelligence can help in conversations, information search, and more.", audio: "voice/IntroVoice14.mp3" },
    { title: "How Software Works on the Internet", dsc: "Every software, to run, needs a computer or a device with the same functionality that a computer has: 1.	CPU: To process tasks and perform operations.2.	Storage Device: To save the software files and data.3.	Internet Connection: To make it accessible online and communicate with users.Similarly, current large software has the same requirements, but on a larger scale. In technical terms, they use:•	1. Server for CPU: For example, Google’s search engine requires thousands of servers to process billions of queries every day.•	2. Large Data Warehouse or Data Center for Storage Devices: Facebook stores billions of photos, videos, and posts in its data centers.•	3. High-Speed Internet: Apps like WhatsApp or Uber require fast Internet to provide real-time communication or driver-location updates.", audio: "voice/IntroVoice15.mp3" },
    { title: "How Software is Deployed on the Internet", dsc: "Let’s break it into steps to understand how software is made available online:1.	Development: Every software is first created and tested on computers during the development phase. For instance, Zomato's team creates the app features and tests them internally.2.	Hosting on Servers: After testing, the software is uploaded to servers. Servers are powerful computers that handle requests from users. Popular hosting services include AWS (Amazon Web Services), Google Cloud, and Microsoft Azure.3.	Storage Setup: Data storage systems (like large data warehouses) are connected to store user data. For example, Uber stores user trip history and payment details securely in its data centers.4.	Domain Name and Accessibility: A domain name (like google.com or amazon.in) is assigned so that users can access the software via the Internet.", audio: "voice/IntroVoice16.mp3" },
    { title: "AI-Specific Deployment", dsc: "AI software, like ChatGPT or DeepSeek, follows the same process but requires additional steps:•	Specialized Hardware: For example, GPUs (Graphics Processing Units) or TPUs (Tensor Processing Units) are used to process AI tasks like training models and generating responses.•	Model Hosting: Once an AI model is trained, it is hosted on servers optimized for handling AI-related tasks. For instance, ChatGPT processes user queries and generates responses instantly using such servers.•	Real-Time Data Processing: AI software often requires real-time data processing. For example, Google Pay uses AI to detect fraudulent transactions while maintaining transaction speed.In conclusion, whether it’s AI software like ChatGPT, social media like Facebook, or food delivery apps like Swiggy, all software depends on servers, data centers, and high-speed Internet to operate. The only difference is the scale and complexity of these components.", audio: "voice/IntroVoice17.mp3" },
    { title: "From Learning to Coding: How to Code a Real AI Software in Practice", dsc: "We have already learned the overview of how software works, how it is deployed on the Internet to make it accessible, and what makes a software an AI software.Now, it’s time to learn how to code a real AI software in practice. As we know, the main difference between simple software and AI software is the level of complexity. To make the learning process easier, we will start by coding simple software, ignoring complexity, just to understand the basic steps involved. Later, we will gradually move to coding AI software.", audio: "voice/IntroVoice18.mp3" },
    { title: "How Machines Understand Instructions", dsc: "Machines only understand machine language, which uses binary code:•	‘1’ for On State•	‘0’ for Off StateWe can actually code software using only 1 and 0. Some of the early software for computers was created entirely with this type of binary code. Examples of early computers include: •	ENIAC (Electronic Numerical Integrator and Computer): Used manual switches to input binary code.•	Colossus: One of the first programmable computers, used to decrypt codes during World War II.As technology advanced, the following developments replaced manual coding:1.	Vacuum Tubes: Replaced manual switches and allowed faster processing.2.	Semiconductor Transistors: Replaced vacuum tubes, making computers smaller and more efficient.3.	Field Effect Transistors (FET): Enabled billions of transistors to fit onto a single silicon chip, which we now call a Processor (CPU).Even though machines still only understand On-Off states (1s and 0s), we don’t need to code directly in binary anymore. As coding complex tasks using On and Off switches is not practical.(Today, such binary-level coding is primarily used by engineers who design and build processors, where they program intricate logic gates and circuits that enable modern CPUs to function efficiently.)", audio: "voice/IntroVoice19.mp3" },
    { title: "Writing Code in Human Language", dsc: "Imagine if we could write software in natural languages like English, Hindi, Bengali, French, Urdu, or German. What if another software could convert these instructions into machine language?Today, software development achieves this with tools and processes that simplify writing instructions for machines. The process involves the following:•	Text Editor Software: We use this to write the steps or instructions in English, with some limitations or predefined rules. These predefined rules create a structured way to write code, which eventually led to what we now call coding languages or programming languages  (e.g., Python, C++, Java).•	Compiler: The compiler translates these instructions from the structured language (human-readable) into machine language (binary: 0s and 1s).•	CPU: The CPU processes the machine language to execute the instructions, complete tasks, or solve problems.", audio: "voice/IntroVoice20.mp3" },
    { title: "The Limitations of Current Coding", dsc: "Even though tools and coding languages have made programming easier, they still have limitations:•	Technology is not yet smart enough to fully understand human languages as we use them in everyday communication.•	There are specific rules and syntax we need to follow to write code, which can make the process challenging for beginners.", audio: "voice/IntroVoice21.mp3" },
    { title: "Role of AI in Coding", dsc: "This is where AI comes into play. AI aims to remove the complexity involved in coding by making the process more natural.For example, imagine an AI tool that can understand your spoken or written instructions in English and automatically translate them into a working program. AI is already simplifying coding through tools like:•	GitHub Copilot: Assists developers by suggesting code snippets and automating repetitive tasks.•	AutoML: Allows users to create machine learning models without deep coding knowledge.", audio: "voice/IntroVoice22.mp3" },
    { title: "The Key Difference Between Simple Software and Artificial Software", dsc: "•	Simple Software: Follows pre-defined instructions written using coding languages or programming languages  by a human programmer.•	Artificial Software (AI Software): Goes beyond pre-defined instructions. It can:o	Understand human language.o	Solve complex problems.o	Learn and improve through study or experience, just like humans.Modern Large Language Models (LLMs), such as ChatGPT, Gemini, DeepSeek Grock AI, Meta AI are examples of AI software capable of performing tasks that require understanding and generating human-like text.", audio: "voice/IntroVoice23.mp3" },
    { title: "Conclusion", dsc: "Congratulations on completing the Free Overview! We hope you found this free overview insightful and inspiring! While this module provides a solid introduction, there’s so much more to explore. To take your learning to the next level, we invite you to enroll in our Full Paid Course , where you’ll gain access to: •	Learn the basic rules and syntax for writing code.•	Create simple programs to understand the coding process step by step.•	Gradually move toward coding AI software, building on the foundational concepts.•	In-depth lessons and advanced topics involving AI algorithms. •	Step-by-step guidance on building real-world projects. •	Exclusive resources, including code templates, datasets, and expert mentorship. Don’t miss this opportunity to transform your knowledge and career prospects. Click below to purchase the full course and unlock the power of AI, ML, and Data Analytics today! ", audio: "voice/IntroVoice24.mp3" },
    { title: "Conclusion", dsc: "Invest in your future—because the world of tomorrow belongs to those who prepare for it today! ", audio: "voice/IntroVoice25.mp3" },
    
];

async function createPromptContainer20() {
    console.log('createPromptContainer called');

    // Helper function to play audio and wait for it to finish
    function playAudio(audioElement) {
        return new Promise((resolve) => {
            audioElement.addEventListener("ended", () => {
                console.log("Audio has finished playing.");
                resolve();
            });

            // Start playing the audio
            audioElement.play().catch(error => {
                console.error("Audio playback failed:", error);
                resolve(); // Resolve even if playback fails to avoid blocking the loop
            });
        });
    }

    // Iterate over the course array
    for (const event of course) {
        var uniqueId = generateUniqueId();
        var container = document.createElement("div");
        container.className = "promptcontainer";
        container.id = uniqueId;
        container.innerHTML = `
            <div class="prompt_title">
                <p style="font-weight: bold; font-size: 1.2rem;">${event.title}</p>    
            </div>
            <p class='prompttext' id="${uniqueId}_textToSpeak">${event.dsc}</p>
            <div class="prompt_ending">
                <audio id="${uniqueId}_audio" controls playsinline>
                    <source src="${event.audio}" type="audio/mpeg">
                </audio>
            </div>        
        `;
        var indexTab = document.createElement("div");
        indexTab.className = "side_bar_item";
        var indexTabID = uniqueId + "_indexTabID"; 
        indexTab.id = indexTabID;
        indexTab.innerHTML = `            
        ${event.title}
        `;


        var productsContainer = document.querySelector('.products');
        var sideBar = document.getElementById('indexTab');
        if (productsContainer) {
            productsContainer.appendChild(container);
            sideBar.appendChild(indexTab);
            const audioElement = document.getElementById(`${uniqueId}_audio`);
            console.log("Audio element found:", audioElement);

            // Scroll the audio element into view
            audioElement.scrollIntoView({ behavior: 'smooth', block: 'end', inline: 'nearest' });

            // Wait for the scroll to finish
            await new Promise((resolve) => {
                window.addEventListener('scrollend', function onScrollEnd() {
                    window.removeEventListener('scrollend', onScrollEnd); // Remove listener after it's triggered once
                    window.scrollBy({ top: 50, left: 0, behavior: 'smooth' }); // Scroll 50px more after reaching the element
                    resolve();
                });
            });

            // Play the audio and wait for it to finish
            await playAudio(audioElement);
        } else {
            console.error('Products container not found.');
        }
    }
}
//  Optional Play Button for Audio
function playAudio() {
    var audioElement = document.getElementById("myAudio");
    console.log("000 Audio element Found ", audioElement );
    audioElement.play(); // Play the audio
    audioElement.scrollIntoView({ behavior: 'smooth', block: 'end', inline: 'nearest' }); // Close modal if it's open
    window.addEventListener('scrollend', function onScrollEnd() {
        window.removeEventListener('scrollend', onScrollEnd); // Remove listener after it's triggered once
        window.scrollBy({ top: 50, left: 0, behavior: 'smooth' }); // Scroll 50px more after reaching the element
    });
}
window.playAudio = playAudio;

//Audio MAnipulation
const audio = document.getElementById("myAudio");
 // Event when audio ends
 audio.addEventListener("ended", function() {     
     console.log("Audio has finished playing.");
     createPromptContainer20();
     
 });