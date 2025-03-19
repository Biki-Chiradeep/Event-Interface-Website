    function initializeFlowChart() {


    

    
    const nodes = document.querySelectorAll('.node');
    const container = document.getElementById('flowchart-container');
    const svgContainer = document.getElementById('svg-container'); // Get SVG container
    let isDragging = false;
    let currentDraggingNode = null;
    let offsetX, offsetY;

    function createLineWithArrow(startNode, endNode, isChild = false) {
        const linePath = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        const startDot = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
        const endDot = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
    
        linePath.classList.add('line');
        startDot.classList.add('line-dot');
        endDot.classList.add('line-dot');
    
        svgContainer.appendChild(linePath);
        svgContainer.appendChild(startDot);
        svgContainer.appendChild(endDot);
    
        function updateLinePosition() {
            const startRect = startNode.getBoundingClientRect();
            const endRect = endNode.getBoundingClientRect();
            const containerRect = container.getBoundingClientRect();
    
            // let x1 = startRect.left + startRect.width / 2 - containerRect.left + container.scrollLeft;
            // let y1 = startRect.bottom - containerRect.top + container.scrollTop;
            // let x2 = endRect.left + endRect.width / 2 - containerRect.left + container.scrollLeft;
            // let y2 = endRect.top - containerRect.top + container.scrollTop;
            let x1, y1, x2, y2;
            if (isChild) {
                // Connect from right of parent to left of child (Horizontal connection)
                x1 = startRect.right - containerRect.left + container.scrollLeft;
                y1 = startRect.top + startRect.height / 2 - containerRect.top + container.scrollTop;
                x2 = endRect.left - containerRect.left + container.scrollLeft;
                y2 = endRect.top + endRect.height / 2 - containerRect.top + container.scrollTop;
            } else {
                // Original vertical connection
                x1 = startRect.left + startRect.width / 2 - containerRect.left + container.scrollLeft;
                y1 = startRect.bottom - containerRect.top + container.scrollTop;
                x2 = endRect.left + endRect.width / 2 - containerRect.left + container.scrollLeft;
                y2 = endRect.top - containerRect.top + container.scrollTop;
            }
        
            let pathData = '';
            if (isChild) {
                // Horizontal S-curve for child nodes
                const controlPointOffset = 30;
                pathData = `M ${x1} ${y1} C ${x1 + controlPointOffset} ${y1}, ${x2 - controlPointOffset} ${y2}, ${x2} ${y2}`;
            } else {
                pathData = `M ${x1} ${y1} C ${x1} ${y1 + 20}, ${x2} ${y2 - 20}, ${x2} ${y2}`;
            }
            linePath.setAttribute('d', pathData);
            linePath.setAttribute('fill', 'none');
            linePath.setAttribute('stroke', '#bebebe');
            linePath.setAttribute('stroke-width', 2);
            linePath.style.zIndex = -1;
    
            startDot.setAttribute('cx', x1);
            startDot.setAttribute('cy', y1);
            startDot.setAttribute('r', 4);
            startDot.setAttribute('fill', '#bebebe');
    
            endDot.setAttribute('cx', x2);
            endDot.setAttribute('cy', y2);
            endDot.setAttribute('r', 4);
            endDot.setAttribute('fill', '#bebebe');
        }
    
        // Update position initially and on scroll
        updateLinePosition();
        container.addEventListener('scroll', updateLinePosition);
    }
    

    
    function updateSVGSize() {
        const nodes = document.querySelectorAll('.node');
        let maxX = 0, maxY = 0;
    
        nodes.forEach(node => {
            const rect = node.getBoundingClientRect();
            const containerRect = container.getBoundingClientRect();
    
            // Calculate max dimensions based on node positions
            maxX = Math.max(maxX, rect.right - containerRect.left + container.scrollLeft + rect.width);
            maxY = Math.max(maxY, rect.bottom - containerRect.top + container.scrollTop);
        });
    
        // Set SVG size to the maximum required area
        svgContainer.setAttribute('width', maxX);
        svgContainer.setAttribute('height', maxY);
    }
    
    // Call the function whenever content changes
    function redrawLines() {
        svgContainer.innerHTML = ''; // Clear existing lines
        updateSVGSize(); // Resize SVG to fit content
    
        nodes.forEach(node => {
            const nextId = node.getAttribute('data-next');
            if (nextId) {
                const nextNode = document.getElementById(nextId);
                if (nextNode) {
                    createLineWithArrow(node, nextNode);
                }
            }
    
            const parentId = node.getAttribute('data-parent');
            if (parentId) {
                const parentNode = document.getElementById(parentId);
                if (parentNode) {
                    const parentRect = parentNode.getBoundingClientRect();

                    // Find all child nodes of this parent
                    const siblings = Array.from(document.querySelectorAll(`[data-parent="${parentId}"]`));

                    // Set position for each child and draw its line
                    const gap = 20; // 1em in pixels (16px)
                    siblings.forEach((child, index) => {
                        // Only set the position if it's not already moved by dragging
                        if (!child.hasAttribute('data-moved')) {
                            child.style.position = 'absolute';
                            child.style.left = `${parentRect.right + index * (child.offsetWidth + gap) + container.scrollLeft }px`;
                            child.style.top = `${parentRect.top + container.scrollTop- 200}px`;
                            const childRect = child.getBoundingClientRect();
                            const scrollLeft = childRect.left + container.scrollLeft;
                            const scrollTop = childRect.top + 2000;
                            // child.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'center'});
                        }
                        createLineWithArrow(parentNode, node, true);
                    });
                }
            }
        });
    }
    
    // Update SVG size when scrolling, resizing, or dragging
    container.addEventListener('scroll', updateSVGSize);
    window.addEventListener('resize', updateSVGSize);
    document.addEventListener('mousemove', () => {
        if (isDragging) updateSVGSize();
    });
    
    let verticalPos = 10; // Initial vertical position for parent nodes
    const verticalGap = 80; // Vertical gap between parent nodes

    nodes.forEach(node => {
        // **FORCE ABSOLUTE POSITIONING FOR ALL NODES**
        node.style.position = 'absolute';

        // Initial positioning for PARENT nodes (mimic vertical flex layout)
        if (!node.classList.contains('child')) { // If it's a parent node
            node.style.left = '15%'; // Horizontally centered in container
            node.style.top = `${verticalPos}px`;
            node.style.transform = 'translateX(-50%)'; // Center horizontally precisely
            verticalPos += (node.offsetHeight + verticalGap); // Increment vertical position for next parent node
        }


        node.addEventListener('mousedown', (e) => {
            isDragging = true;
            currentDraggingNode = node;
        
            // Get precise position considering scroll
            const nodeRect = node.getBoundingClientRect();
            const containerRect = container.getBoundingClientRect();
        
            offsetX = e.clientX - (nodeRect.left - containerRect.left + container.scrollLeft + (nodeRect.width / 2)) ;
            offsetY = e.clientY - (nodeRect.top - containerRect.top + container.scrollTop);
        
            node.style.cursor = 'grabbing';
        });
        

        // Position child nodes to the right of parent
        const parentId = node.getAttribute('data-parent');
        if (parentId) {
            const parentNode = document.getElementById(parentId);
            if (parentNode) {
                const parentRect = parentNode.getBoundingClientRect();
                node.style.left = `${parentRect.right + 50}px`;
                node.style.top = `${parentRect.top}px`;
            }
        }
    });

    document.addEventListener('mouseup', () => {
        isDragging = false;
        if (currentDraggingNode) {
            currentDraggingNode.style.cursor = 'pointer';
            currentDraggingNode = null;
        }
    });
    document.addEventListener('mousemove', (e) => {
        if (!isDragging || !currentDraggingNode) return;
    
        const containerRect = container.getBoundingClientRect();
        const nodeRect = currentDraggingNode.getBoundingClientRect();
    
        // Adjust position based on whether the node is in a scrolled area or not
        const newX = e.clientX - offsetX;
        const newY = e.clientY - offsetY;
    
        // Limit movement within the container (optional for boundary enforcement)
        const clampedX = Math.max(0, Math.min(container.scrollWidth - currentDraggingNode.offsetWidth, newX));
        const clampedY = Math.max(0, Math.min(container.scrollHeight - currentDraggingNode.offsetHeight, newY));
    
        currentDraggingNode.style.left = `${clampedX}px`;
        currentDraggingNode.style.top = `${clampedY}px`;
    
        // Re-draw lines on movement
        redrawLines();
    });


    // Initial drawing of lines
    redrawLines();

    // Redraw lines on window resize
    window.addEventListener('resize', redrawLines);
};

document.addEventListener("DOMContentLoaded", initializeFlowChart);

export const flowchart = {
 initializeFlowChart 
};