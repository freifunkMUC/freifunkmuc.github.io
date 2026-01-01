// Add clickable anchor links to headings in article content
(function() {
  'use strict';
  
  function initHeadingAnchors() {
    // Get all headings on the page
    const allHeadings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
    
    allHeadings.forEach(function(heading) {
      // Skip headings that are:
      // - Already links
      // - Inside archive items (homepage article listings)
      // - Inside the page hero
      // - Inside navigation
      if (heading.querySelector('a') || 
          heading.closest('.archive__item') ||
          heading.closest('.page__hero') ||
          heading.closest('.greedy-nav')) {
        return;
      }
      
      // Create ID if it doesn't exist
      if (!heading.id) {
        const text = heading.textContent.trim();
        heading.id = text
          .toLowerCase()
          .replace(/[^\w\s-äöüß]/g, '')
          .replace(/\s+/g, '-')
          .replace(/-+/g, '-');
      }
      
      // Make heading clickable
      heading.style.cursor = 'pointer';
      heading.setAttribute('title', 'Klicken um Link zu diesem Abschnitt zu erhalten');
      
      // Add click handler
      heading.addEventListener('click', function(e) {
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
