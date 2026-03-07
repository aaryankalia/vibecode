// 
// ==============================================
// INTERACTIONS & LOGIC
// ==============================================

document.addEventListener('DOMContentLoaded', () => {

    /* --- Navigation Active States --- */
    const navItems = document.querySelectorAll('.nav-item');
    const sections = document.querySelectorAll('section');

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.4 // 40% of the section needs to be visible
    };

    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = entry.target.getAttribute('id');
                // Remove active class from all
                navItems.forEach(item => {
                    item.classList.remove('active');
                    if (item.getAttribute('href') === `#${id}`) {
                        item.classList.add('active');
                    }
                });
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        sectionObserver.observe(section);
    });

    /* --- Nav Hover Expand Logic --- */
    navItems.forEach(item => {
        if (item.classList.contains('search-trigger')) return;
        item.addEventListener('mouseenter', () => {
            navItems.forEach(other => {
                if (other !== item) other.classList.remove('expanded');
            });
            item.classList.add('expanded');
        });
        item.addEventListener('mouseleave', () => {
            item.classList.remove('expanded');
        });
    });

    /* --- Fade-Up Scroll Animation --- */
    const fadeElements = document.querySelectorAll('.fade-up');
    const fadeOptions = {
        root: null,
        rootMargin: '0px 0px -50px 0px', // Trigger slightly before it comes into full view
        threshold: 0.1
    };

    const fadeObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                // Staggered effect
                setTimeout(() => {
                    entry.target.classList.add('visible');
                }, index * 80); // 80ms stagger
                observer.unobserve(entry.target); // Only animate once
            }
        });
    }, fadeOptions);

    fadeElements.forEach(el => {
        fadeObserver.observe(el);
    });

    /* --- Cmd+K Search Modal Logic --- */
    const searchModal = document.getElementById('search-modal');
    const searchInput = document.getElementById('search-input');
    const closeSearchBtns = document.querySelectorAll('.close-search, .search-trigger');
    const suggestionLinks = document.querySelectorAll('.search-suggestions a');

    // Toggle Modal function
    const toggleSearchModal = (e) => {
        if (e) e.preventDefault();
        const isActive = searchModal.classList.contains('active');

        if (isActive) {
            searchModal.classList.remove('active');
            document.body.style.overflow = ''; // Restore scroll
        } else {
            searchModal.classList.add('active');
            document.body.style.overflow = 'hidden'; // Prevent scroll
            setTimeout(() => {
                searchInput.focus();
            }, 100);
        }
    };

    // Listeners for triggers and close buttons
    closeSearchBtns.forEach(btn => {
        btn.addEventListener('click', toggleSearchModal);
    });

    // Close on overlay click
    searchModal.addEventListener('click', (e) => {
        if (e.target === searchModal) {
            toggleSearchModal();
        }
    });

    // Close when clicking a result
    suggestionLinks.forEach(link => {
        link.addEventListener('click', () => {
            toggleSearchModal();
        });
    });

    // Keyboard shortcut (Cmd+K or Ctrl+K)
    document.addEventListener('keydown', (e) => {
        if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
            e.preventDefault();
            toggleSearchModal();
        }

        // ESC to close
        if (e.key === 'Escape' && searchModal.classList.contains('active')) {
            toggleSearchModal();
        }
    });

    /* --- Project Card Hover Interactions --- */
    const projectCards = document.querySelectorAll('.project-card:not(.placeholder-card)');

    // Create Custom Cursor Element
    const cursor = document.createElement('div');
    cursor.id = 'custom-cursor';
    cursor.innerHTML = 'View Project';
    document.body.appendChild(cursor);

    let cursorActive = false;

    // Follows cursor in real time with zero lag
    document.addEventListener('mousemove', (e) => {
        if (cursorActive) {
            cursor.style.left = `${e.clientX}px`;
            cursor.style.top = `${e.clientY}px`;
        }
    });

    // Card Specific Interactions
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', (e) => {
            cursorActive = true;
            cursor.classList.add('active');
            cursor.style.left = `${e.clientX}px`;
            cursor.style.top = `${e.clientY}px`;
        });

        card.addEventListener('mouseleave', () => {
            cursorActive = false;
            cursor.classList.remove('active');
        });
    });
});
