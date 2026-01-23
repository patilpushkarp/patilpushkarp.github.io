<template>
    <footer class="footer">
        <div class="container footer-content">
            <div class="footer-grid">
                <!-- Column 1: Let's work together -->
                <div class="footer-column">
                    <h3 class="footer-heading">Let's work together</h3>
                    <div class="column-content">
                        <p class="location">Pune, Maharashtra</p>

                        <div class="contact-info">
                            <p v-if="resume?.basics?.phone" class="phone">{{ resume.basics.phone }}</p>
                            <a v-else href="tel:18884374258" class="phone">1 888 437 4258</a>

                            <a v-if="resume?.basics?.email" :href="'mailto:' + resume.basics.email" class="email-link">
                                {{ resume.basics.email }}
                            </a>
                            <a v-else href="mailto:info@mirego.com" class="email-link">info@mirego.com</a>

                            <a href="https://www.linkedin.com/in/patilpushkarp/" target="_blank"
                                class="email-link">LinkedIn</a>
                        </div>
                    </div>
                </div>

                <!-- Column 2: Navigate this site -->
                <div class="footer-column">
                    <h3 class="footer-heading">Navigate this site</h3>
                    <div class="column-content">
                        <ul class="footer-links">
                            <li>
                                <NuxtLink to="/about" class="footer-link">About</NuxtLink>
                            </li>
                            <li>
                                <NuxtLink to="/experience" class="footer-link">Experience</NuxtLink>
                            </li>
                            <li>
                                <NuxtLink to="/resume" class="footer-link">Resume</NuxtLink>
                            </li>
                        </ul>

                        <div class="socials-pill-container" v-if="resume?.basics?.profiles">
                            <div class="socials-pills">
                                <a v-for="profile in resume.basics.profiles" :key="profile.network" :href="profile.url"
                                    target="_blank" class="social-pill">
                                    {{ profile.network }}
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Column 3: Join our team -->
                <div class="footer-column">
                    <h3 class="footer-heading">Collaboration is Key</h3>
                    <div class="column-content">

                        <div class="language-selector">
                            <span class="globe-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"
                                    fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
                                    stroke-linejoin="round">
                                    <circle cx="12" cy="12" r="10"></circle>
                                    <line x1="2" y1="12" x2="22" y2="12"></line>
                                    <path
                                        d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z">
                                    </path>
                                </svg>
                            </span>
                            <span>IN</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Wave Animation -->
        <div class="footer-wave-container">
            <svg class="wave-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 300" preserveAspectRatio="none">
                <path class="wave-path"
                    d="M0,250 C120,250 120,50 240,50 C360,50 360,250 480,250 C600,250 600,50 720,50 C840,50 840,250 960,250 C1080,250 1080,50 1200,50 C1320,50 1320,250 1440,250 V300 H0 Z"
                    fill="none" stroke="#F3EFE0" stroke-width="15" stroke-linecap="round" />
            </svg>
        </div>
    </footer>
</template>

<script setup lang="ts">
const { resume } = useResume();
</script>

<style scoped>
.footer {
    background-color: #000;
    color: #fff;
    padding-top: 5rem;
    padding-bottom: 0;
    position: relative;
    overflow: hidden;
    font-family: sans-serif;
    /* Fallback, assumes global font is set or will be inherited */
    border-top-left-radius: 4rem;
    border-top-right-radius: 4rem;
    border-top: 1px solid #333;
}

.footer-content {
    position: relative;
    z-index: 10;
    padding-bottom: 8rem;
    /* Space for the wave */
}

.footer-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 3rem;
}

@media (min-width: 768px) {
    .footer-grid {
        grid-template-columns: repeat(3, 1fr);
    }
}

.footer-column {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
}

.footer-heading {
    font-size: 1.5rem;
    font-weight: 500;
    margin-bottom: 0.5rem;
    color: #fff;
}

.column-content {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

.location {
    color: #ccc;
    font-size: 1rem;
    margin: 0;
}

.contact-info {
    margin-top: 2rem;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
}

.phone,
.email-link {
    color: #fff;
    text-decoration: none;
    font-size: 1rem;
    border-bottom: 1px solid transparent;
    /* For hover effect */
    width: fit-content;
}

.email-link {
    text-decoration: underline;
    text-underline-offset: 4px;
}

.footer-links {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

.footer-link {
    color: #ccc;
    text-decoration: none;
    font-size: 1rem;
    transition: color 0.3s ease;
}

.footer-link:hover {
    color: #fff;
}

.socials-pill-container {
    margin-top: 2rem;
}

.socials-pills {
    display: flex;
    flex-wrap: wrap;
    gap: 0.75rem;
}

.social-pill {
    border: 1px solid #fff;
    border-radius: 9999px;
    padding: 0.5rem 1rem;
    font-size: 0.85rem;
    color: #fff;
    text-decoration: none;
    transition: all 0.3s ease;
}

.social-pill:hover {
    background-color: #fff;
    color: #000;
}

.language-selector {
    margin-top: 3rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: #ccc;
    cursor: pointer;
}

.globe-icon {
    display: flex;
    align-items: center;
}

/* Wave Animation */
.footer-wave-container {
    width: 100%;
    overflow: hidden;
    line-height: 0;
    /* Position absolute bottom could be an option, but flow might be better */
    margin-top: -50px;
    /* Overlap slightly if needed */
}

.wave-svg {
    display: block;
    width: 100%;
    height: auto;
    min-height: 150px;
}



/* Add custom font if available via global CSS, otherwise rely on inheritance */
</style>
