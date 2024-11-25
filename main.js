/*let aBox = document.querySelector('#boxy');
let leftHand = document.querySelector('#leftHand');
let rightHand = document.querySelector('#rightHand');
//aBox.emit('physicscollided', {collidingEntity: rightHand}, true);
aBox.addEventListener('physicscollided', function (event) {
  //console.log('Entity collided with', event.detail.collidingEntity);
  aBox.setAttribute('color', '#eb4034');
});*/


const rainbowColors = [
  '#FF0000', // Red
  '#FF7F00', // Orange
  '#FFFF00', // Yellow
  '#00FF00', // Green
  '#0000FF', // Blue
  '#4B0082', // Indigo
  '#8B00FF'  // Violet
];

let currentColorIndex = 0;

function fadeEdges() {
  // Select all edge planes
  const edges = document.querySelectorAll('#top-edge, #bottom-edge, #left-edge, #right-edge');

  // Change color to the next one in the rainbow
  const newColor = rainbowColors[currentColorIndex];
  currentColorIndex = (currentColorIndex + 1) % rainbowColors.length; // Cycle through colors

  // Apply fade-in and color change
  edges.forEach(edge => {
    // Remove previous animations to reset them
    edge.removeAttribute('animation__fadein');
    edge.removeAttribute('animation__color');
    edge.removeAttribute('animation__fadeout');

    // Apply new fade-in animation
    edge.setAttribute('animation__fadein', {
      property: 'material.opacity',
      from: 0,
      to: 0.7,
      dur: 500, // Fade in over 0.5 seconds
      easing: 'easeInOutQuad'
    });

    // Apply new color transition animation
    edge.setAttribute('animation__color', {
      property: 'material.color',
      from: edge.getAttribute('color'),  // Use the current color
      to: newColor,                      // Transition to the new color
      dur: 500,                           // Fade color over 0.5 seconds
      easing: 'easeInOutQuad'
    });

    // Apply new fade-out animation after the fade-in
    setTimeout(() => {
      edge.setAttribute('animation__fadeout', {
        property: 'material.opacity',
        from: 0.7,
        to: 0,
        dur: 500, // Fade out over 0.5 seconds
        easing: 'easeInOutQuad'
      });
    }, 1000); // Start fade-out after 1 second
  });
}

// Trigger the fade effect every 3 seconds
setInterval(fadeEdges, 3000);