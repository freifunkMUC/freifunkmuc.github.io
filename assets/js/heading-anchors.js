// Add clickable anchor links to headings in article content only
(function() {
  'use strict';
  
  function initHeadingAnchors() {
    // Only target headings inside single article content, not on homepage
    const articleContent = document.querySelector('.page__content .page__inner-wrap');
    const isSinglePost = document.body.classList.contains('layout--single');
    
    // Skip if not a single post/page or can't find content
    if (!isSinglePost || !articleContent) return;
    
    const headings = articleContent.querySelectorAll('h1, h2, h3, h4, h5, h6');
    
    headings.forEach(function(heading) {
      // Skip if heading is a link already (like article titles)
      if (heading.querySelector('a') || heading.closest('.archive__item')) return;
      
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
