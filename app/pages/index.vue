<template>
    <div class="page-home container">
        <!-- Hero Section -->
        <section class="hero-section" data-theme="light">
            <div class="hero-container">
                <div class="hero-content">
                    <h1 class="hero-title blur-load">
                        Building the <span class="highlight">future</span> <br>
                        with data & code.
                    </h1>

                    <p class="hero-subtitle blur-load delay-100">
                        {{ resume?.basics?.label }} based in {{ resume?.basics?.location?.city }}. <br>
                        Welcome to my digital garden.
                    </p>

                    <div class="cta-group blur-load delay-200">
                        <NuxtLink to="/projects" class="btn btn-primary">View Projects</NuxtLink>
                        <NuxtLink to="/experience" class="btn btn-secondary">My Experience</NuxtLink>
                    </div>
                </div>
                <!-- Hero Image -->
                <div class="hero-image blur-load delay-300">
                    <img src="/hero-image.png" alt="Work from home setup" />
                </div>
            </div>
        </section>

        <!-- Stats Section -->
        <section class="content-section" style="animation-delay: 0.6s" data-theme="light">
            <div class="stats-grid">
                <div class="stat-card blur-load delay-100">
                    <span class="stat-number">{{ resume?.basics?.stats?.age }}+</span>
                    <span class="stat-label">years old</span>
                </div>
                <div class="stat-card blur-load delay-200">
                    <span class="stat-number">{{ resume?.basics?.stats?.experience }}+</span>
                    <span class="stat-label">years experience creating digital products</span>
                </div>
                <div class="stat-card blur-load delay-300">
                    <span class="stat-number">{{ resume?.basics?.stats?.projects }}+</span>
                    <span class="stat-label">digital products launched since inception</span>
                </div>
                <div class="stat-card blur-load delay-400">
                    <span class="stat-number">{{ resume?.basics?.stats?.industries }}+</span>
                    <span class="stat-label">industries worked across</span>
                </div>
            </div>
        </section>

        <!-- Purpose Section -->
        <section class="content-section" style="animation-delay: 0.7s" data-theme="light">
            <div class="passion-layout">
                <div class="passion-title blur-load">
                    {{ resume?.basics?.purpose?.headline }}
                </div>
                <div class="passion-content blur-load delay-100">
                    <p>{{ resume?.basics?.purpose?.description }}</p>
                </div>
            </div>
        </section>
    </div>
</template>

<script setup lang="ts">
const { resume } = useResume();
</script>

<style scoped>
.page-home {
    min-height: 100vh;
    padding-top: 80px;
    padding-bottom: 4rem;
    display: flex;
    flex-direction: column;
    gap: 6rem;
    background-color: #ffffff;
    color: #0a0a0a;
}

.hero-section {
    min-height: 70vh;
    display: flex;
    align-items: center;
    justify-content: center;
}

.hero-container {
    display: grid;
    grid-template-columns: 1.2fr 0.8fr;
    gap: 4rem;
    align-items: center;
    width: 100%;
}

.hero-content {
    text-align: left;
    padding: 2rem 0;
}

.hero-image {
    width: 100%;
    border-radius: 2rem;
    overflow: hidden;
    /* transform: rotate(2deg); */
    transition: transform 0.3s ease;
}

.hero-image:hover {
    transform: rotate(0deg) scale(1.02);
}

.hero-image img {
    width: 100%;
    height: auto;
    display: block;
    border-radius: 2rem;
}

.hero-title {
    font-size: clamp(3.5rem, 7vw, 6rem);
    font-weight: 400;
    line-height: 1.2;
    margin-bottom: 2.5rem;
    letter-spacing: -0.02em;
    color: #0a0a0a;
}

.highlight {
    display: inline-block;
    padding: 0 0.4em;
    line-height: 1;
    font-weight: 400;
    margin: 0 0.1em;
    position: relative;
    top: 0.1em;

    /* Gradient Text */
    background: var(--accent-gradient);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    color: transparent;
}

.highlight::before {
    content: "";
    position: absolute;
    inset: 0;
    border-radius: 100px;
    padding: 1px;
    background: var(--accent-gradient);
    -webkit-mask:
        linear-gradient(#fff 0 0) content-box,
        linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask:
        linear-gradient(#fff 0 0) content-box,
        linear-gradient(#fff 0 0);
    mask-composite: exclude;
    pointer-events: none;
}

.hero-subtitle {
    font-size: 1.5rem;
    color: #555555;
    line-height: 1.5;
    margin-bottom: 3rem;
    max-width: 800px;
    font-weight: 400;
}

.cta-group {
    display: flex;
    gap: 1.5rem;
    align-items: center;
}

.btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 0.8rem 1.5rem;
    border-radius: 2rem;
    font-size: 0.9rem;
    font-weight: 500;
    letter-spacing: 0.02em;
    transition: all 0.3s ease;
    text-decoration: none;
    cursor: pointer;
}

.btn-primary {
    background: #000;
    color: #fff;
    border: 1px solid #000;
}

.btn-primary:hover {
    background: #333;
    border-color: #333;
    transform: translateY(-2px);
}

.btn-secondary {
    background: transparent;
    color: #0a0a0a;
    border: 1px solid transparent;
    padding-left: 0;
    padding-right: 0;
    text-decoration: underline;
    text-underline-offset: 4px;
}

.btn-secondary:hover {
    background: var(--accent-gradient);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
}

/* Stats Section */
.stats-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 1.5rem;
    padding: 2rem 0;
}

.stat-card {
    background: #F8F5F0;
    /* Cream/Beige background */
    border-radius: 1.5rem;
    padding: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: 250px;
    transition: transform 0.3s ease;
}

.stat-card:hover {
    transform: translateY(-5px);
}

.stat-number {
    font-size: 3.5rem;
    font-weight: 300;
    line-height: 1;
    color: #1a1a1a;
    margin-bottom: 2rem;
}

.stat-label {
    font-size: 0.95rem;
    color: #4a4a4a;
    line-height: 1.4;
    max-width: 80%;
}

/* Passion Section (Now Purpose) */
.passion-layout {
    display: flex;
    flex-direction: column;
    gap: 4rem;
    /* Spacing between title and content */
    padding: 4rem 0;
}

.passion-title {
    font-size: clamp(3rem, 6vw, 4rem);
    /* Increased size for impact */
    line-height: 1.1;
    color: #0a0a0a;
    font-weight: 400;
}

.passion-content {
    max-width: 800px;
    align-self: flex-end;
    /* Aligns content to right */
    text-align: left;
}

.passion-content p {
    font-size: 1.2rem;
    /* Slightly larger for readability */
    line-height: 1.8;
    color: #444444;
}

/* Content Sections */
.content-section {
    padding: 2rem 0;
}

@media (max-width: 768px) {
    .hero-container {
        grid-template-columns: 1fr;
        gap: 2rem;
    }

    .hero-image {
        order: -1;
    }

    .hero-content {
        text-align: center;
    }

    .cta-group {
        justify-content: center;
    }

    .stats-grid {
        grid-template-columns: 1fr;
    }

    .passion-layout {
        grid-template-columns: 1fr;
        gap: 2rem;
    }

    .hero-title {
        font-size: clamp(2.5rem, 8vw, 4rem);
    }

    .stat-card {
        min-height: auto;
        padding: 1.5rem;
    }
}
</style>
