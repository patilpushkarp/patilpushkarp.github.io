export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.hook('app:mounted', () => {
        const observerOptions = {
            root: null, // viewport
            rootMargin: '0px',
            threshold: 0.1, // trigger when 10% visible
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('loaded');
                    observer.unobserve(entry.target); // Run once
                }
            });
        }, observerOptions);

        // Function to observe elements
        const observeElements = () => {
            const hiddenElements = document.querySelectorAll('.blur-load');
            hiddenElements.forEach((el) => observer.observe(el));
        };

        // Initial observation
        observeElements();

        // Re-observe when route changes (for Nuxt page transitions)
        nuxtApp.hook('page:finish', () => {
            // meaningful delay to ensure DOM is ready after transition
            setTimeout(observeElements, 100);
        });
    });
});
