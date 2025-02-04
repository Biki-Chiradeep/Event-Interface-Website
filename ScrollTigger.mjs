gsap.registerPlugin(ScrollTrigger);

// Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", () => {
    console.log("GSAP and ScrollTrigger initialized");

    // Header Animation
    gsap.from(".intro", {
        scrollTrigger: {
            trigger: ".intro",
            start: "top 80%", // When the top of the element hits 80% from the top of the viewport
            toggleActions: "play none none reverse"
        },
        
        duration: 3
    });

    // About Section Animations
    const aboutSections = [
        '.about-intro',
        '.about-mission',
        '.about-vision',
        '.about-values',
        '.about-team',
        '.about-contact'
    ];

    aboutSections.forEach(section => {
        if (document.querySelector(section)) {
            gsap.from(section, {
                scrollTrigger: {
                    trigger: section,
                    start: "top 80%",
                    toggleActions: "play none none reverse"
                },
                x: -140,
                duration: 1
            });
        } else {
            console.warn(`Element ${section} not found!`);
        }
        const sectionElement = document.querySelector(section);
        for (let i = 0; i < 5; i++) {
            const eventCard = document.createElement('div');
            eventCard.classList.add('product-container');        
            eventCard.style.backgroundPosition = "center";
            eventCard.innerHTML = `
                <p style="font-size:22px; color:white; font-weight: bold; padding:10px;">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                </p>
                <p style="color:white; font-size:14px; font-weight:200; line-height:23px; padding:5px;">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod nesciunt magni, minus eaque magnam quos tempore doloribus blanditiis, recusandae quibusdam sed, possimus consequatur saepe soluta.
                </p>`;
            sectionElement.appendChild(eventCard); // Append to the section element.
            console.log(`This is loop iteration number: ${i + 1}`);
        }
    });
});

//  Add this to index.html

// <!-- <div class="intro">Intro Section</div>
// <div class="about-intro">About Intro</div>
// <div class="about-mission">About Mission</div>
// <div class="about-vision">About Vision</div>
// <div class="about-values">About Values</div>
// <div class="about-team">About Team</div>
// <div class="about-contact">About Contact</div> -->

{/* <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.5/gsap.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.5/ScrollTrigger.min.js"></script> */}
