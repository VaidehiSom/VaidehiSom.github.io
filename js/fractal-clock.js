/**
 * Fractal Clock Animation
 * Inspired by the Fractal Clock concept
 */

// Lightweight Fractal Clock Implementation
document.addEventListener("DOMContentLoaded", function() {
  console.log("Lightweight Fractal Clock Loading...");
  
  // Remove any existing clock to prevent duplicate clocks
  const existingClock = document.getElementById('fractal-clock-container');
  if (existingClock) {
    existingClock.remove();
  }
  
  // Create container with a fixed z-index that won't conflict with other elements
  const container = document.createElement('div');
  container.id = 'fractal-clock-container';
  container.style.position = 'fixed';
  container.style.top = '0';
  container.style.left = '0';
  container.style.width = '100%';
  container.style.height = '100%';
  container.style.zIndex = '0';
  container.style.pointerEvents = 'none';
  container.style.opacity = '0.6';
  
  // Create single initial clock hand
  const hourHand = document.createElement('div');
  hourHand.className = 'hand rotate-hour hour';
  
  // Append the hour hand to the container
  container.appendChild(hourHand);
  
  // Add to body at the beginning to ensure it's behind other content
  document.body.insertBefore(container, document.body.firstChild);
  
  // Configuration for fractal generation
  const total = 7; // Number of fractal levels
  const minOpacity = 0.1;
  const maxOpacity = 0.5;
  const colorFloor = 190; // This ensures bright pastel colors
  
  // Generate the fractal structure - one time operation
  console.log("Generating lightweight fractal structure");
  
  // Create the hands
  for (let i = 0; i < total; i++) {
    // Calculate opacity based on level
    const opacity = minOpacity + (maxOpacity - minOpacity) * ((total - i) / total);
    
    // Generate random colors in the pink range
    const red = 230 + Math.floor(Math.random() * 25); // High red for pink
    const green = 100 + Math.floor(Math.random() * 90); // Medium green for pink
    const blue = 140 + Math.floor(Math.random() * 60); // Medium-high blue for pink
    
    // Create the style string
    const style = `style="background-color: rgba(${red}, ${green}, ${blue}, ${opacity})"`;
    
    // Apply to empty hands
    document.querySelectorAll('.hand:empty').forEach(n => {
      n.innerHTML = `<div class="hand rotate-minute" ${style}></div><div class="hand rotate-second" ${style}></div>`;
    });
  }
  
  // Add animation delay based on current time
  const css = document.createElement('style');
  css.type = 'text/css';
  const now = new Date();
  const hours = now.getHours() % 12;
  const minutes = now.getMinutes();
  const seconds = now.getSeconds() + (60 * minutes) + (60 * 60 * hours);
  const styles = `.hand { animation-delay: ${seconds * -1}s; }`;
  
  if (css.styleSheet) css.styleSheet.cssText = styles;
  else css.appendChild(document.createTextNode(styles));
  
  document.getElementsByTagName("head")[0].appendChild(css);
  
  console.log("Lightweight fractal clock initialized");
});
