import { flowchart } from './flow-chart-java.mjs';
// document.addEventListener("DOMContentLoaded", flowchart.initializeFlowChart());

function generateUniqueId() {
    return 'id' + Math.random().toString(36).substr(2, 9);
}
// const course = [
//     { image: 'icon/01.png'},
//     { image: 'icon/02.png'},
//     { image: 'icon/03.png'},
//     { image: 'icon/04.png'},
//     { image: 'icon/05.png'},
//     { image: 'icon/06.png'},
//     { image: 'icon/07.png'},
//     { image: 'icon/08.png'},
//     { image: 'icon/09.png'},
//     { image: 'icon/10.png'},
// ]

// Call this function whenever you need to reload the script





async function scrollAndReveal(container,  delay) {
  // container.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'start' });
  // Get the parent scrollable container

  return new Promise((resolve) => {    
    setTimeout(() => {
          resolve();      
     }, delay); 
    });
}


async function handleCourseImages(course , animeID, parentId) {
         const uniqueId1 = parentId +'_dropdown';
         var containerInitial2 = document.createElement("div");
        //  containerInitial.className = "image-container";
         containerInitial2.id = uniqueId1;
         containerInitial2.classList.add("node", "child" );
        containerInitial2.setAttribute("data-parent", parentId);
        const anime = document.getElementById(animeID);
        anime.appendChild(containerInitial2);
        const scrollChild = document.getElementById(uniqueId1);
        const scrollChildParent = document.getElementById(parentId);
        scrollChildParent.scrollIntoView({ behavior: 'smooth', block: 'end', inline: 'end' });

 
        for (const event of course) {   
        // Conforemed 
                    var uniqueId = generateUniqueId();
                    var containerInitial = document.createElement("div");
                    containerInitial.className = "image-container";
                    containerInitial.id = uniqueId +  '-image-container'; 
                    const anime = document.getElementById(scrollChild.id);
                    anime.appendChild(containerInitial);
                    const container= document.getElementById(uniqueId +  '-image-container'); 
                    flowchart.initializeFlowChart();

                     if(container){ 
                        let img = new Image();
                        // img.src = 'icon/52.png';  // Replace with your image path
                        img.src = event.image;  
                        img.onload = async function() {
                          // console.log("Image width: " + img.width);
                          // console.log("Image height: " + img.height);
                          const handContainer = document.getElementById('hand-container');
                          // Set the container dimensions based on image dimensions
                          const containerWidth = img.width * 0.2;
                          const containerHeight = img.height* 0.2 ;
                        
                          container.style.width = `${containerWidth}px`  ;
                          container.style.height = `${containerHeight}px` ;
                        
                          // Define the number of rows and columns for the grid
                          const rows = 4;  // 8 rows
                          const cols = 4;  // 8 columns
                        
                          const pieceWidth = containerWidth / cols;
                          const pieceHeight = containerHeight / rows;
                        
                          // Create the image pieces
                          function createImagePieces() {
                            for (let row = 0; row < rows; row++) {
                              for (let col = 0; col < cols; col++) {
                                // Create a new piece (div)
                                const piece = document.createElement('div');
                                piece.classList.add(uniqueId +'-image-piece');
                                piece.classList.add('image-piece');
                                // Set the background image for the piece
                                piece.style.backgroundImage = `url(${img.src})`;
                                piece.style.backgroundSize = `${containerWidth}px ${containerHeight}px`;
                                piece.style.backgroundPosition = `-${col * pieceWidth}px -${row * pieceHeight}px`;  // Corrected positioning
                            
                                // Append the piece to the container
                                container.appendChild(piece);
                                
                                container.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'end' });
                              }
                            }
                          }
                          // Reveal the pieces one by one with animation
                          async function revealPieces() {
                            const pieces = document.querySelectorAll('.' + uniqueId +'-image-piece');
                            let handPosition = 0; // To track which piece the hand is on
                            pieces.forEach(async (piece, index) => {
                                    const speed = event.speed
                                    setTimeout(() => {
                                      piece.classList.add('visible');
                                      // Move the hand container to the current piece
                                      const pieceRect = piece.getBoundingClientRect();
                                      handContainer.style.top = `${pieceRect.top + window.scrollY}px`;
                                      handContainer.style.left = `${pieceRect.left + window.scrollX}px`;
                                    }, index * speed);  // Delay for each piece                            
                                
                                    // Make sure the hand always moves after the piece starts revealing
                                    handPosition = index; 
                                    
                            });
                          }
                      
                          // Initialize the image pieces and trigger animation
                          createImagePieces();
                          await revealPieces();
                        };
                     }
            const delay = event.delay
          
            await scrollAndReveal(anime, delay);
            await new Promise(resolve => setTimeout(resolve, 200));
        }
}
// handleCourseImages(course);
export const ui = {
    handleCourseImages,
};