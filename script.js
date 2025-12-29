// Automatically apply the animation class to all elements you want to animate on scroll
  const animatedTags = document.querySelectorAll('h1, h2, h3, h4, h5, h6, p, span, li, blockquote, .quote-box, .values-item');

  animatedTags.forEach(el => {
    el.classList.add('pop-up-scroll');
  });

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        // Stop observing the element once it's visible
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1
  });

  // Observe all elements with the 'pop-up-scroll' class
  document.querySelectorAll('.pop-up-scroll').forEach(el => {
    observer.observe(el);
  });