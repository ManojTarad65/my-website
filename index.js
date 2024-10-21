// Smooth Scrolling Function
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Active Navigation Link Highlight on Scroll
window.addEventListener('scroll', () => {
    let sections = document.querySelectorAll('section');
    let scrollPos = window.scrollY || document.documentElement.scrollTop;

    sections.forEach(section => {
        if (scrollPos >= section.offsetTop - 50 && scrollPos < section.offsetTop + section.offsetHeight - 50) {
            let id = section.getAttribute('id');
            document.querySelectorAll('nav ul li a').forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${id}`) {
                    link.classList.add('active');
                }
            });
        }
    });
});

// Hover Effect for Category Cards
const categoryCards = document.querySelectorAll('.category');

categoryCards.forEach(card => {
    card.addEventListener('mouseover', () => {
        card.style.transform = 'scale(1.05)';
        card.style.boxShadow = '0 8px 16px rgba(0, 0, 0, 0.2)';
    });

    card.addEventListener('mouseout', () => {
        card.style.transform = 'scale(1)';
        card.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
    });
});

// // Optional: Popup message for Contact Us page


// const contactLink = document.querySelector('nav a[href="contact.html"]');
// contactLink.addEventListener('click', (e) => {
//     e.preventDefault();
//     alert('The Contact Us page is under construction. Please check back later.');
// });

