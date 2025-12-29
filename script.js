// // Automatically apply the animation class to all elements you want to animate on scroll
//   const animatedTags = document.querySelectorAll('h1, h2, h3, h4, h5, h6, p, span, li, blockquote, .quote-box, .values-item');

//   animatedTags.forEach(el => {
//     el.classList.add('pop-up-scroll');
//   });

//   const observer = new IntersectionObserver((entries) => {
//     entries.forEach(entry => {
//       if (entry.isIntersecting) {
//         entry.target.classList.add('visible');
//         // Stop observing the element once it's visible
//         observer.unobserve(entry.target);
//       }
//     });
//   }, {
//     threshold: 0.1
//   });

//   // Observe all elements with the 'pop-up-scroll' class
//   document.querySelectorAll('.pop-up-scroll').forEach(el => {
//     observer.observe(el);
//   });

  document.addEventListener('DOMContentLoaded', () => {
    // 1. Hamburger Menu Toggle Logic
    const menuToggle = document.getElementById('mobile-menu');
    const navLinks = document.querySelector('.nav-links');

    if (menuToggle) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            // Optional: Toggle icon between bars and X
            const icon = menuToggle.querySelector('i');
            icon.classList.toggle('fa-bars');
            icon.classList.toggle('fa-times');
        });
    }

    // Close menu when a link is clicked (useful for one-page navigation)
    document.querySelectorAll('.nav-links li a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            const icon = menuToggle.querySelector('i');
            icon.classList.add('fa-bars');
            icon.classList.remove('fa-times');
        });
    });

    // 2. Scroll Animation Logic (Your existing code)
    const animatedTags = document.querySelectorAll('h1, h2, h3, h4, h5, h6, p, span, li, blockquote, .values-item');

    animatedTags.forEach(el => {
        el.classList.add('pop-up-scroll');
    });

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });

    document.querySelectorAll('.pop-up-scroll').forEach(el => {
        observer.observe(el);
    });
});