<template>
    <div class="page-contact" data-theme="light">
        <div class="container section">
            <div class="contact-grid">
                <!-- Left Column: Info -->
                <div class="contact-info fade-in-up">
                    <h1 class="title-large">Let’s talk!</h1>

                    <div class="contact-description">
                        <p>
                            Tell me about your project and goals or send an email to
                            <br>
                            <a :href="`mailto:${email}`" class="email-link">{{ email }}</a>
                        </p>
                    </div>

                    <div class="social-section">
                        <p class="social-label">You can also find me at</p>
                        <div class="social-links-grid">
                            <a v-for="profile in socialProfiles" :key="profile.network" :href="profile.url"
                                target="_blank" class="social-link">
                                {{ profile.network }}
                            </a>
                        </div>
                    </div>
                </div>

                <!-- Right Column: Image (Replaced Form) -->
                <div class="image-wrapper fade-in-up" style="animation-delay: 0.1s">
                    <div class="image-container">
                        <!-- Generated image V4 (Black shirt, office window) -->
                        <img src="/contact-phone-v4.png" alt="Pushkar looking into phone" class="contact-image" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
const { resume } = useResume()

// Extract email and social profiles from resume data
const email = computed(() => resume.value?.basics?.email || 'hello@example.com')
const socialProfiles = computed(() => {
    const profiles = resume.value?.basics?.profiles || []
    return profiles
})
</script>

<style scoped>
.page-contact {
    min-height: 100vh;
    padding-top: var(--nav-height);
    background-color: var(--bg-primary);
    /* Default to theme bg first */
    background-color: #f1f1f1;
    /* Override with manual light grey match */
    color: #000;
}

.container {
    max-width: 1400px;
}

.contact-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 6rem;
    /* Increased gap for better separation between text and image */
    padding-top: 4rem;
    align-items: center;
    /* Center image vertically with text */
}

/* Left Column */
.title-large {
    font-size: clamp(3rem, 5vw, 5rem);
    font-family: var(--font-display);
    font-weight: 500;
    margin-bottom: 2rem;
    line-height: 1.1;
    color: #000;
}

.contact-description {
    font-size: 1.5rem;
    line-height: 1.5;
    color: #333;
    max-width: 500px;
    margin-bottom: 4rem;
}

.email-link {
    color: #000;
    font-weight: 600;
    text-decoration: none;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
    transition: all 0.2s ease;
}

.email-link:hover {
    border-bottom-color: #000;
}

.social-section {
    margin-top: 4rem;
}

.social-label {
    color: #888;
    margin-bottom: 1.5rem;
    font-size: 1rem;
}

.social-links-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
    max-width: 300px;
}

.social-link {
    font-size: 1.1rem;
    font-weight: 600;
    color: #000;
    text-decoration: none;
    transition: opacity 0.2s;
}

.social-link:hover {
    opacity: 0.6;
}

/* Right Column: Image */
.image-wrapper {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.image-container {
    width: 100%;
    max-width: 600px;
    /* Constrain max width */
    aspect-ratio: 4/5;
    /* Portrait aspect ratio suited for "looking at phone" */
    overflow: hidden;
    border-radius: 12px;
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
}

.contact-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    filter: grayscale(100%);
    /* Optional: adds to the classy/premium vibe, remove if user wants color */
    transition: filter 0.3s ease;
}

.contact-image:hover {
    filter: grayscale(0%);
    /* Reveal color on hover */
}

/* Animations */
.fade-in-up {
    opacity: 0;
    animation: fadeInUp 0.8s ease forwards;
}

@keyframes fadeInUp {
    from {
        opacity: 0;
        transform: translateY(20px);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }
}

/* Responsive */
@media (max-width: 900px) {
    .contact-grid {
        grid-template-columns: 1fr;
        gap: 3rem;
        padding-top: 2rem;
    }

    .contact-description {
        margin-bottom: 2rem;
    }

    .social-section {
        margin-top: 2rem;
    }

    .title-large {
        font-size: 3.5rem;
    }

    .image-container {
        aspect-ratio: 16/9;
        /* Wider on mobile? Or keep portrait? Let's keep portrait or square-ish */
        aspect-ratio: 1;
        max-width: 100%;
    }
}
</style>
