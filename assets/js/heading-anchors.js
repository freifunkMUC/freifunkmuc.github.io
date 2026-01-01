// Add clickable anchor links to all headings
(function() {
  'use strict';
  
  function initHeadingAnchors() {
    // Find all headings in the content area
    const content = document.querySelector('.page__content') || document.querySelector('main');
    if (!content) return;
    
    const headings = content.querySelectorAll('h1, h2, h3, h4, h5, h6');
    
    headings.forEach(function(heading) {
      // Create ID if it doesn't exist
      if (!heading.id) {
        const text = heading.textContent.trim();
        heading.id = text
          .toLowerCase()
          .replace(/[^\w\s-]/g, '')
          .replace(/\s+/g, '-')
          .replace(/-+/g, '-');
      }
      
      // Make heading clickable
      heading.style.cursor = 'pointer';
      heading.setAttribute('title', 'Click to get link to this section');
      
      // Add click handler
      heading.addEventListener('click', function(e) {
        e.preventDefault();
        const id = this.id;
        if (id) {
          // Update URL
          const newUrl = window.location.pathname + window.location.search + '#' + id;
          window.history.pushState({}, '', newUrl);
          
          // Scroll to heading smoothly
          this.scrollIntoView({ behavior: 'smooth', block: 'start' });
          
          // Copy to clipboard (silent)
          if (navigator.clipboard) {
            navigator.clipboard.writeText(window.location.href).catch(function() {});
          }
        }
      });
    });
  }
  
  // Run when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initHeadingAnchors);
  } else {
    initHeadingAnchors();
  }
})();
