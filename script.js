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
        threshold: 0.5 // 50% of the section needs to be visible
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
    cursor.innerHTML = 'View<br>Project';
    document.body.appendChild(cursor);

    // Custom Cursor tracking logic - with requestAnimationFrame for smooth lag
    let mouseX = 0;
    let mouseY = 0;
    let cursorX = 0;
    let cursorY = 0;
    let cursorActive = false;

    // 80ms lag approximation in easing (0.15 is roughly 80ms feel at 60fps)
    const easing = 0.15;

    // Update global mouse position
    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;

        if (!cursorActive) {
            cursorX = mouseX;
            cursorY = mouseY;
        }
    });

    const animateCursor = () => {
        if (cursorActive) {
            // Calculate distance and apply easing for lag
            cursorX += (mouseX - cursorX) * easing;
            cursorY += (mouseY - cursorY) * easing;

            cursor.style.left = `${cursorX}px`;
            cursor.style.top = `${cursorY}px`;
        }
        requestAnimationFrame(animateCursor);
    };

    // Start animation loop
    animateCursor();

    // Card Specific Interactions
    projectCards.forEach(card => {

        // 1. Custom Circular Cursor visibility
        card.addEventListener('mouseenter', () => {
            cursorActive = true;
            cursor.classList.add('active');

            // Snap quickly on enter to avoid long travel distance
            cursorX = mouseX;
            cursorY = mouseY;
            cursor.style.left = `${cursorX}px`;
            cursor.style.top = `${cursorY}px`;
        });

        card.addEventListener('mouseleave', () => {
            cursorActive = false;
            cursor.classList.remove('active');
        });

        // 2. Glow burn effect tracking
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            // Calculate mouse position relative to card boundaries
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            // Update CSS variables for radial gradient
            card.style.setProperty('--mouse-x', `${x}px`);
            card.style.setProperty('--mouse-y', `${y}px`);
        });
    });
});
