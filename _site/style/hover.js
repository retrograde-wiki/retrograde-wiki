// Hover sound effect for all links
(function() {
  // Create audio element
  const hoverSound = new Audio('https://file.garden/aBb6prPw8QkQxICV/website/sound/HOVER.mp3');
  hoverSound.volume = 0.5; // Adjust volume as needed (0.0 to 1.0)

  // Function to play hover sound
  function playHoverSound() {
    // Clone and play to allow overlapping sounds
    const sound = hoverSound.cloneNode();
    sound.volume = hoverSound.volume;
    sound.play().catch(err => console.log('Audio play failed:', err));
  }

  // Function to add hover sound to links
  function addHoverSounds() {
    // Get all links in header and throughout the page
    const links = document.querySelectorAll('header a, .header-links a, nav a, .menu a');
    
    links.forEach(link => {
      // Remove existing listener if any to avoid duplicates
      link.removeEventListener('mouseenter', playHoverSound);
      // Add hover sound effect
      link.addEventListener('mouseenter', playHoverSound);
    });
  }

  // Run when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', addHoverSounds);
  } else {
    addHoverSounds();
  }

  // Also run when header is dynamically loaded (if using header.js)
  // You can call this after header content is inserted
  window.initHoverSounds = addHoverSounds;
})();
// Hover sound effect for all links
(function() {
  // Create audio element
  const hoverSound = new Audio('https://file.garden/aBb6prPw8QkQxICV/website/sound/HOVER.mp3');
  hoverSound.volume = 0.5; // Adjust volume as needed (0.0 to 1.0)

  // Function to play hover sound
  function playHoverSound() {
    // Clone and play to allow overlapping sounds
    const sound = hoverSound.cloneNode();
    sound.volume = hoverSound.volume;
    sound.play().catch(err => console.log('Audio play failed:', err));
  }

  // Function to add hover sound to links
  function addHoverSounds() {
    // Get all links in header and throughout the page
    const links = document.querySelectorAll('header a, .header-links a, nav a, .menu a');
    
    links.forEach(link => {
      // Remove existing listener if any to avoid duplicates
      link.removeEventListener('mouseenter', playHoverSound);
      // Add hover sound effect
      link.addEventListener('mouseenter', playHoverSound);
    });
  }

  // Run when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', addHoverSounds);
  } else {
    addHoverSounds();
  }

  // Also run when header is dynamically loaded (if using header.js)
  // You can call this after header content is inserted
  window.initHoverSounds = addHoverSounds;
})();
