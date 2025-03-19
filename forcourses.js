import { ui } from './forcourses-anime.mjs';
//Nav Bar JS starts here(Positiion FIxed Control on Scroll)
window.addEventListener("scroll", function () {
    let navbar = document.querySelector(".navbar");
    if (window.scrollY > 50) { // Adjust this value as needed
        navbar.classList.add("fixed-nav");
    } else {
        navbar.classList.remove("fixed-nav");
    }
}, { passive: true }); // Improves performance

//Nav Bar JS edns here 
let beforeParent = '';

// Define the function to speak text
function speakText() {
    // console.log('speakText function called');
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
        container.scrollIntoView({ behavior: 'smooth', block: 'end', inline: 'nearest' });
        // setTimeout(scrollToFooter, 200);
        speakText2(uniqueId);
    } else {
        console.error('Products container not found.');
    }

}









function generateText() {
    // Replace this with your generative text logic
    const text2=["Please play the audio in the respective node to continue the course."];
    return ` ${text2}`;
}
function generateText0() {
    // Replace this with your generative text logic
    const text2=["Please play the audio in the respective node to continue the course."];
    return ` ${text2}`;
}


function nextText() {
    // Generate and display the next text with a different greeting
    createPromptContainer(generateText0());
    }
function scrollToFooter() {
    var footerTab = document.getElementById('chatend');
    // var footerTab = document.getElementById(id);
    // if (footerTab) {
    //     footerTab.scrollIntoView({ behavior: 'smooth', block: 'end', inline: 'nearest' });
    // } else {
    //     console.error('Footer tab not found.');
    // }
    }



function speakText2(id) {
    // console.log('speakText2 function called'); // Corrected function name
    // console.log(id); // Corrected function name
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
    // console.log(' create prompt contianer called');
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
        // console.log(' child appended');
        container.scrollIntoView({ behavior: 'smooth', block: 'end', inline: 'nearest' });
        // setTimeout(scrollToFooter, 200);        
        
    } else {
        console.error('Products container not found.');
    }
}

document.addEventListener("DOMContentLoaded", function() {
    try {
        var slideCount = document.querySelectorAll('.post-wrapper .post').length;
        // console.log('Slide count:', slideCount);

        var slideWidth = document.querySelector('.post').offsetWidth;
        // console.log('Slide width:', slideWidth);

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
                // console.log(InputPromptText); // Debugging line

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
                // console.log(InputPromptText); // Debugging line

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
    { title: "Topics", dsc: "•	<b>AI Fundamentals:</b> Learn how AI is transforming industries and how you can build intelligent systems.<br><b>•	Machine Learning Techniques:</b> Discover how to create predictive models and algorithms that learn from data. <br>•	<b>Data Analytics Mastery:</b> Uncover the power of data visualization, cleaning, and analysis to make data-driven decisions.<br>•	<b>Neural Networks & Deep Learning:</b> Inspired by the human brain, enable AI systems to recognize patterns, make decisions, and solve complex problems through multi-layered deep learning architectures.", audio: "voice/IntroVoice3.mp3" },
    { title: "Remarks", dsc: "By combining these technologies, AI has the power to build any type of software in the world—from intelligent automation systems to <b>self-learning</b> applications, advanced <b>predictive</b> models, and human-like <b>decision-making</b> systems. <br>Mastering AI means unlocking unlimited possibilities, shaping the future of innovation, and driving transformation across industries. Let’s dive deeper into how these technologies work together!", audio: "voice/IntroVoice4.mp3" },
    { title: "Introduction to Artificial Intelligence (AI)", dsc: "<b>Artificial Intelligence (AI)</b> is a field that aims to replicate human-like intelligence in machines. But before diving into AI, it’s important to understand the concepts of <b>intelligence</b> and <b>artificial</b>, and how they combine to form AI.To begin, let’s explore the foundational idea behind intelligence and the meaning of artificial—these two concepts are key to understanding what makes AI possible and how it operates.", audio: "voice/IntroVoice5.mp3" },
    { title: "What is Intelligence?", dsc: "Intelligence can be understood as the <b>ability for critical thinking, problem-solving, and the capacity to make decisions</b> based on information. It is the ability of your brain to acquire knowledge, learn, understand complex ideas, and apply knowledge to solve problems.", audio: "voice/IntroVoice6.mp3" },
    { title: "Highlights", dsc: "1.	<b>Learning:</b> The ability to gain knowledge or skills through study, teaching, or experience.<br>2.	<b>Reasoning:</b> Making decisions based on available information or the capacity to think logically and make sense of information.<br>3.	<b>Problem-solving:</b> Identifying and resolving complex problems.", audio: "voice/IntroVoice7.mp3" },
    { title: "Why Artificial?", dsc: "The term <b>Artificial</b> in AI emphasizes that these intelligent systems are created by humans, using artificial means, such as <b>algorithms, computer programs, and data</b>. This distinction highlights the <b>difference</b> between natural intelligence <b>(human intelligence)</b> and artificial intelligence <b>(machine intelligence)</b>. Examples of artificial systems:<br>•	<b>Machines:</b> Devices like computers, mobiles or robots that perform tasks.<br>•	<b>Software:</b>  Algorithms or Step-by-step procedures or rules designed to solve problems or perform computations.<br>•	<b>Data:</b> Information stored digitally in storage devices in the form of 0s and 1s,", audio: "voice/IntroVoice8.mp3" },
    { title: "How Artificial Intelligence is created?", dsc: "AI's are mainly a <b>software</b> or a code, made by combining the Data, Mathematical Algorithm or logics which mimics the human intelligence and with the computational capabilities of machines.   Together, this combinations allows AI systems to perform tasks that typically require human intelligence such as analyzing data, and solve complex problems. However, to truly understand how AI functions, we first need to understand the foundation it is <b>built upon—software.</b> To dive deeper into AI, we must first explore the core aspects of software:<br><b>•	What is software?<br>•	How does it work?<br>•	What are the components of software?<br>•	How does software become AI software?</b>", audio: "voice/IntroVoice9.mp3" },
    { title: "1. What is Software?", dsc: "Software is a <b>set of instructions</b>, programs, or data that tell a computer what to do. Unlike hardware, which is the physical parts that we can touch, software operates digitally and tells the hardware how to work.<br>1.	<b>Physical hardware</b> components like the CPU, RAM, and hard drive, pen drive, SD cards, monitor, Key pad, mouse.<br>2.	<b>Application software</b> (e.g., web browsers, games, or mobile apps) and <b>system software</b> (e.g., operating systems like Windows or Linux, Android) and application software (e.g., web browsers, games, or mobile apps, calculator, paintings, ).", audio: "voice/IntroVoice10.mp3" },
    { title: "2. How Does Software Work?", dsc: "Software works by following a <b>set of instructions (code)</b> written in <b>programming languages</b> like Python, Java, or C++.<br>•	These instructions are <b>processed</b> by the computer's hardware, such as the CPU, memory, and storage.<br>•	The process involves:<br>1.	<b>Input:</b> Receiving data or commands from the user. (e.g., Pressing the like button on some selfie photo.)<br>2.	<b>Processing:</b> Executing the instructions to perform calculations, manipulate data, or make decisions.(Understand the user want to Like that selfie photo)<br>3.	<b>Output:</b> Delivering the results to the user or another system (e.g., It reflects that you like the picture along with your user name and increases the like count on the post.)", audio: "voice/IntroVoice11.mp3" },
    { title: "3. What Are the Components of Software?", dsc: "Software is made up of several key components that allow it to function effectively: <br>•	<b>User Interface (UI)</b> for <b>Input:</b> The visual and interactive elements through which users <b>interact</b> with the software (monitor, touch-screen of a mobile, microphone, keyboard, mouse, etc.).<br>•	<b>Data:</b> Stores the information (like a photo) that you input through the UI in the form of data, which is stored in some <b>storage devices</b>, like hard disks, pen drives, SD cards, etc.<br>•	<b>Code or Software:</b> Step-by-step instructions for solving problems or performing tasks. These steps are written as <b>mathematical algorithms or logics</b> in some <b>programming language</b> that a computer can understand. These are called the software. (Code or software are also stored in some storage devices.)<br>•	<b>CPU:</b> Now the processing happens in the Central Processing Unit (CPU). The CPU <b>uses</b> the stored data from storage devices and <b>follows</b> the step-by-step instructions (software) to generate the output. (This is called processing or computing.)<br>•	<b>User Interface (UI)</b> for <b>Output:</b> The visual and interactive elements through which the <b>software interacts</b> with the user. (Monitor, display of a mobile, speakers, etc.).", audio: "voice/IntroVoice12.mp3" },
    { title: "4. How Does Software Become AI Software?", dsc: "For software to <b>become</b> AI software, it must integrate certain additional components and processes:<br>•	<b>Automation:</b> AI software is designed to automate tasks that usually require human intelligence, like analyzing data, recognizing patterns, and making decisions based on inputs.<br>•	<b>Machine Learning Algorithms:</b> Unlike traditional software that follows fixed instructions, AI software uses algorithms to <b>learn from data</b>, identify patterns, and make predictions or decisions.<br>•	<b>Data Input:</b> AI software requires <b>large datasets</b> to learn and improve its performance. These datasets are the foundation for training machine learning models.<br>•	<b>Training and Testing:</b> The software must be <b>trained on datasets</b> to improve its accuracy and performance, and then tested to ensure it works as intended.<br>•	<b>AI Models:</b> Models are <b>Pre-trained<b>or custom build, such as neural networks, are used to perform tasks like language processing, image recognition, or decision-making.", audio: "voice/IntroVoice13.mp3" },
    { title: "Learn How an AI Model Works on the Internet  Step by Step", dsc: "<b>Today’s</b> AI models are mostly using the <b>Internet</b> for their operation. So we need to learn the overview of how AI software or any software is <b>deployed on the Internet</b> so that we can access those software. We will first learn how some popular software is working right now, like:<br>•	<b>Google</b> (Search): Finds and organizes vast information across the web.<br>•	<b>YouTube:</b> Streams videos to billions of users daily.<br>•	<b>Facebook, WhatsApp</b> (Social Media): Connect people and allow real-time sharing of posts, photos, and chats.<br>•	<b>Zomato, Swiggy</b> (Online Food Delivery): Help users order food online by connecting them to restaurants.<br>•	<b>Ola, Uber</b> (Online Car Rental): Provide transportation services by connecting riders and drivers.<br>•	<b>Zerodha, Groww</b> (Online Trading Platform): Allow people to trade stocks and mutual funds online.<br>•	<b>Paytm, Google Pay</b> (Online Payment Applications): Enable secure digital transactions for various purposes.<br>•	<b>Gmail, Yahoo Mail</b> (Email): Offer fast, reliable email services.<br>•	<b>Amazon, Flipkart, Zepto, Blinkit</b> (E-commerce): Let users shop online and get products delivered to their homes.<br>•	<b>ChatGPT, Gemini, DeepSeek</b> (AI Software): Demonstrate how artificial intelligence can help in conversations, information search, and more.", audio: "voice/IntroVoice14.mp3" },
    { title: "How Software Works on the Internet", dsc: "Every software, to run, needs a <b>computer</b> or a device with the <b>same</b> functionality that a computer has: <br>1.	<b>CPU:</b> To process tasks and perform operations.<br>2.	<b>Storage Device:</b> To save the software files and data.<br>3.	<b>Internet Connection:</b> To make it accessible online and communicate with users.<br>Similarly, current large software has the <b>same requirements</b>, but on a <b>larger scale</b>. In technical terms, they use:<br>•	1. <b>Server for CPU:</b> For example, Google’s search engine requires thousands of servers to process billions of queries every day.<br>•	2. <b>Large Data Warehouse or Data Center</b> for <b>Storage Devices:</b> Facebook stores billions of photos, videos, and posts in its data centers.<br>•	3. <b>High-Speed Internet:</b> Apps like WhatsApp or Uber require fast Internet to provide real-time communication or driver-location updates.", audio: "voice/IntroVoice15.mp3" },
    { title: "How Software is Deployed on the Internet", dsc: "Let’s break it into steps to understand how software is made available online:<br>1.	<b>Development:</b> Every software is first created and <b>tested on computers</b> during the development phase. For instance, Zomato's team creates the app features and tests them internally.<br>2.	<b>Hosting on Servers:</b> After testing, the software is uploaded to servers. Servers are powerful computers that handle requests from users. Popular hosting services include AWS (Amazon Web Services), Google Cloud, and Microsoft Azure.<br>3.	<b>Storage Setup:</b> Data storage systems (like large data warehouses) are connected to store user data. For example, Uber stores user trip history and payment details securely in its data centers.<br>4.	<b>Domain Name and Accessibility:</b> A domain name (like google.com or amazon.in) is assigned so that users can access the software via the Internet.", audio: "voice/IntroVoice16.mp3" },
    { title: "AI-Specific Deployment", dsc: "AI software, like ChatGPT or DeepSeek, follows the same process but requires additional steps:<br>•	<b>Specialized Hardware:</b> For example, GPUs (Graphics Processing Units) or TPUs (Tensor Processing Units) are used to process AI tasks like training models and generating responses.<br>•	<b>Model Hosting:</b> Once an AI model is trained, it is hosted on servers optimized for handling AI-related tasks. For instance, ChatGPT processes user queries and generates responses instantly using such servers.<br>•	<b>Real-Time Data Processing:</b> AI software often requires real-time data processing. For example, Google Pay uses AI to detect fraudulent transactions while maintaining transaction speed.In conclusion, whether it’s AI software like ChatGPT, social media like Facebook, or food delivery apps like Swiggy, all software depends on servers, data centers, and high-speed Internet to operate. The only difference is the scale and complexity of these components.", audio: "voice/IntroVoice17.mp3" },
    { title: "From Learning to Coding: How to Code a Real AI Software in Practice", dsc: "We have already learned the overview of <b>how software works,</b> how it is <b>deployed on the Internet</b> to make it accessible, and what makes a <b>software an AI software</b>. <br>Now, it’s time to learn how to <b>code</b> a real AI software in practice. As we know, the main difference between simple software and AI software is the <b>level of complexity.</b> To make the learning process easier, we will start by <b>coding simple</b> software, ignoring complexity, just to understand the basic steps involved. Later, we will gradually move to coding AI software.", audio: "voice/IntroVoice18.mp3" },
    { title: "How Machines Understand Instructions", dsc: "Machines only understand machine language, which uses binary code:<b><br>•	‘1’ for On State<br>•	‘0’ for Off State. </b><br>We can actually code software using only 1 and 0. Some of the early software for computers was created entirely with this type of binary code. Examples of early computers include:<br> •	<b>ENIAC (Electronic Numerical Integrator and Computer):</b> Used manual switches to input binary code.<br>•	<b>Colossus:</b> One of the first programmable computers, used to decrypt codes during World War II.<br>As technology advanced, the following developments replaced manual coding:<br>1.	<b>Vacuum Tubes:</b> Replaced <b>manual switches</b> and allowed faster processing. <br>2.	<b>Semiconductor Transistors:</b> Replaced vacuum tubes, making computers smaller and more efficient.<br>3.	<b>Field Effect Transistors (FET):</b> Enabled <b>billions of transistors</b> to fit onto a single silicon chip, which we now call a Processor (CPU).<br> Even though machines still only understand On-Off states (1s and 0s), we <b>don’t need to code</b> directly in <b>binary anymore.</b> As coding complex tasks using On and Off switches is not practical.<br>(<b>Today,</b> such binary-level coding is primarily used by engineers who design and build processors, where they program intricate logic gates and circuits that enable modern CPUs to function efficiently.)", audio: "voice/IntroVoice19.mp3" },
    { title: "Writing Code in Human Language", dsc: "Imagine if we could write software in <b>natural languages</b> like English, Hindi, Bengali, French, Urdu, or German.<br> What if another software could convert these instructions into <b>machine language</b>?<br><b>Today,</b> software development achieves this with tools and processes that simplify writing instructions for machines. The process involves the following:<br>•	<b>Text Editor Software:</b> We use this to write the steps or instructions in English, with some limitations or <b>predefined rules.</b> These predefined rules create a <b>structured way</b> to write code, which eventually led to what we now call <b>coding languages</b> or <b>programming languages</b>  (e.g., Python, C++, Java).<br>•	<b>Compiler:</b> The compiler translates these instructions from the structured language (human-readable) into machine language (binary: 0s and 1s). <br>•	<b>CPU:</b> The CPU processes the machine language to execute the instructions, complete tasks, or solve problems.", audio: "voice/IntroVoice20.mp3" },
    { title: "The Limitations of Current Coding", dsc: "Even though tools and coding languages have made programming easier, they still have <b>limitations:</b> <br>•	Technology is not yet smart enough to fully understand <b>human languages</b> as we use them in everyday communication.<br>•	There are specific <b>rules and syntax</b> we need to follow to write code, which can make the process challenging for beginners.", audio: "voice/IntroVoice21.mp3" },
    { title: "Role of AI in Coding", dsc: "This is where AI comes into play. AI aims to remove the complexity involved in coding by making the process more natural.For example, imagine an AI tool that can understand your spoken or written instructions in English and automatically translate them into a working program. AI is already simplifying coding through tools like:<br>•	<b>GitHub Copilot:</b> Assists developers by suggesting code snippets and automating repetitive tasks.<br>•	<b>AutoML:</b> Allows users to create machine learning models without deep coding knowledge.", audio: "voice/IntroVoice22.mp3" },
    { title: "The Key Difference Between Simple Software and Artificial Software", dsc: "<b>•	Simple Software:</b> Follows <b>pre-defined</b> instructions written using <b>coding languages</b> or <b>programming languages </b> by a human programmer.<br>•	<b>Artificial Software (AI Software): </b>Goes beyond pre-defined instructions. It can:<br><b>o	Understand human language. <br>o	Solve complex problems.<br>o	Learn and improve through study or experience, just like humans.<br>Modern Large Language Models (LLMs), such as ChatGPT, Gemini, DeepSeek Grock AI, Meta AI are examples of AI software capable of performing tasks that require understanding and generating human-like text.", audio: "voice/IntroVoice23.mp3" },
    { title: "Conclusion", dsc: "Congratulations on completing the <b>Free Overview!</b> We hope you found this free overview insightful and inspiring! While this module provides a solid introduction, there’s so much more to explore. To take your learning to the next level, we invite you to enroll in our Full Paid Course , where you’ll gain access to:<b><br> •	Learn the basic rules and syntax for writing code.<br>•	Create simple programs to understand the coding process step by step.<br>•	Gradually move toward coding AI software, building on the foundational concepts.<br>•	In-depth lessons and advanced topics involving AI algorithms.<br> •	Step-by-step guidance on building real-world projects.<br> •	Exclusive resources, including code templates, datasets, and expert mentorship.</b> <br>Don’t miss this opportunity to transform your knowledge and career prospects. Click below to purchase the full course and unlock the power of AI, ML, and Data Analytics today! ", audio: "voice/IntroVoice24.mp3" },
    
];
async function createPromptContainer20() {
    // console.log('createPromptContainer called');

    // Helper function to play audio and wait for it to finish
    function playAudio(audioElement) {
        // console.log('12345 called');
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
        var uniqueId = event.title;
        var container = document.createElement("div");
        container.className = "promptcontainer3";
        container.id = uniqueId;
        container.innerHTML = `
            <div id= "${uniqueId}_anime" class="anime_box"> </div>
            <div class="prompt_title">
                <p style="font-weight: bold; font-size: 1.2rem;">${event.title}</p>    
            </div>
            <p class='prompttext' id="${uniqueId}_textToSpeak">${event.dsc}</p>
            <div class="prompt_ending">
                <audio class="audio-element" id="${uniqueId}_audio_2" controls playsinline>
                    <source src="${event.audio}" type="audio/mpeg">
                </audio>
            </div>        
        `;
        // var indexTab = document.createElement("div");
        // indexTab.className = "side_bar_item";
        // var indexTabID = uniqueId + "_indexTabID"; 
        // indexTab.id = indexTabID;
        // indexTab.innerHTML = `            
        // ${event.title} 
        //         <audio class="audio-element" id="${uniqueId}_audio_2" controls playsinline>
        //             <source src="${event.audio}" type="audio/mpeg">
        //         </audio>
        // `;
        var indexTab = document.createElement("audio");
        indexTab.id = uniqueId + "_audio";
        indexTab.classList.add("audio-element");  
        indexTab.controls = true;
        indexTab.playsInline = true;
        var source = document.createElement("source");
        source.src = event.audio; // Ensure 'event.audio' has a valid MP3 URL
        source.type = "audio/mpeg";
        indexTab.appendChild(source);













        var productsContainer = document.querySelector('.products');
        var sideBar = document.getElementById(uniqueId + '_id');
        //  console.log(sideBar + 'for audio called');
        //  console.log(sideBar + 'for audio called');
        if (productsContainer) {
            productsContainer.appendChild(container);
            sideBar.appendChild(indexTab);         
            const audioElement = document.getElementById(`${uniqueId}_audio`);
            const audioElement2 = document.getElementById(`${uniqueId}_audio_2`);
            // console.log("Audio element found:", audioElement);


            // Scroll the audio element into view
            // audioElement.scrollIntoView({ behavior: 'smooth', block: 'end', inline: 'nearest' });
            // audioElement2.scrollIntoView({ behavior: 'smooth', block: 'end', inline: 'nearest' });

            // Wait for the scroll to finish
            // await new Promise((resolve) => {
            //     console.log('check Point  3   ');
            //     window.addEventListener('scrollend', function onScrollEnd() {
            //         console.log('check Point1');
            //         window.removeEventListener('scrollend', onScrollEnd); // Remove listener after it's triggered once
            //         window.scrollBy({ top: 50, left: 0, behavior: 'smooth' }); // Scroll 50px more after reaching the element
            //         resolve();
            //     });
            // });

            // Play the audio and wait for it to finish

            const course = [
                    { image: 'icon/01.png', delay: '3400', speed: '200'},
                    { image: 'icon/02.png', delay: '3400', speed: '200'},
                    { image: 'icon/03.png', delay: '3400', speed: '200'},
                    { image: 'icon/04.png', delay: '3400', speed: '200'},
                    // { image: 'icon/05.png', delay: '3400', speed: '200'},
                    // { image: 'icon/06.png', delay: '3400', speed: '200'},
                    // { image: 'icon/07.png', delay: '3400', speed: '200'},
                    // { image: 'icon/08.png', delay: '3400', speed: '200'},
                    // { image: 'icon/09.png', delay: '3400', speed: '200'},
                    // { image: 'icon/10.png', delay: '3400', speed: '200'},
                ]   
            const parentId = uniqueId + '_id';
            const animeBoxId = 'flowchart-container';
            ui.handleCourseImages(course , animeBoxId, parentId );
            console.log("Higibigi Chhana1 ");
                console.log(beforeParent);
            if (beforeParent) {
                const beforeElement = document.getElementById(beforeParent + '_dropdown');
                console.log("Higibigi Chhana ");
                console.log(beforeElement );
                beforeElement.remove();            
            }
            beforeParent = parentId;


            // beforeElement.classList.add('hide');
            await playAudio(audioElement);
        } else {
            console.error('Products container not found.');
        }
    }
}
//  Optional Play Button for Audio
function playAudio() {
    var audioElement = document.getElementById("myAudio");
    audioElement.play(); // Play the audio
    audioElement.scrollIntoView({ behavior: 'smooth', block: 'end', inline: 'nearest' }); 
    // window.addEventListener('scrollend', function onScrollEnd() {
    //     window.removeEventListener('scrollend', onScrollEnd);  
    // });
}
window.playAudio = playAudio;

//Audio MAnipulation
const audio = document.getElementById("myAudio");
 // Event when audio ends
 audio.addEventListener("ended", function() {     
     console.log("Audio has finished playing.");
     createPromptContainer20();
 });
//Audio MAnipulation
const audio2 = document.getElementById("myAudio2");
 // Event when audio ends
 audio2.addEventListener("ended", function() {     
     console.log("Audio has finished playing.");
     createPromptContainer20();
 });


 
 course.forEach((event, index) => {
    const flowChart = document.getElementById('flowchart-container');
    const eachNode = document.createElement('div');
    eachNode.className = 'node';
    eachNode.id = event.title + '_id';

    // Get the next node's ID, if available
    const nextNode = course[index + 1] ? course[index + 1].title + '_id' : '';

    // Set data-next attribute to the next node's ID or empty string if last
    eachNode.setAttribute('data-next', nextNode);

    // console.log(index + ' is the node index');

    // Display the node's index and title
    eachNode.innerHTML = `${index + 2}.&emsp;${event.title}`;

    flowChart.appendChild(eachNode);
});





