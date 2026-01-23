<template>
    <div class="page-home container">
        <!-- Hero Section -->
        <section class="hero-section" data-theme="light">
            <div class="hero-content">
                <h1 class="hero-title fade-in">
                    Building the <span class="highlight">future</span> <br>
                    with data & code.
                </h1>

                <p class="hero-subtitle fade-in" style="animation-delay: 0.2s">
                    {{ resume?.basics?.label }} based in {{ resume?.basics?.location?.city }}. <br>
                    Welcome to my digital garden.
                </p>

                <div class="cta-group fade-in" style="animation-delay: 0.4s">
                    <NuxtLink to="/projects" class="btn btn-primary">View Projects</NuxtLink>
                    <NuxtLink to="/experience" class="btn btn-secondary">My Experience</NuxtLink>
                </div>
            </div>
        </section>

        <!-- Stats Section -->
        <section class="content-section fade-in" style="animation-delay: 0.6s" data-theme="light">
            <div class="stats-grid">
                <div class="stat-card">
                    <span class="stat-number">{{ resume?.basics?.stats?.age }}+</span>
                    <span class="stat-label">years old</span>
                </div>
                <div class="stat-card">
                    <span class="stat-number">{{ resume?.basics?.stats?.experience }}+</span>
                    <span class="stat-label">years experience creating digital products</span>
                </div>
                <div class="stat-card">
                    <span class="stat-number">{{ resume?.basics?.stats?.projects }}+</span>
                    <span class="stat-label">digital products launched since inception</span>
                </div>
                <div class="stat-card">
                    <span class="stat-number">{{ resume?.basics?.stats?.industries }}+</span>
                    <span class="stat-label">industries worked across</span>
                </div>
            </div>
        </section>

        <!-- Passion Section -->
        <section class="content-section fade-in" style="animation-delay: 0.7s" data-theme="light">
            <div class="passion-layout">
                <div class="passion-title">
                    Driven by <span class="serif-italic">strategy</span>
                </div>
                <div class="passion-content">
                    <p>{{ resume?.basics?.summary }}</p>
                </div>
            </div>
        </section>

        <!-- Highlights Section -->
        <section class="content-section fade-in" style="animation-delay: 0.8s" data-theme="light">
            <div class="grid-2">
                <!-- Experience Gist -->
                <div class="glass-card">
                    <h2 class="section-title">Experience</h2>
                    <div class="info-list">
                        <div v-for="(job, index) in resume?.work?.slice(0, 2)" :key="index" class="info-item">
                            <span class="item-role">{{ job.position }}</span>
                            <span class="item-subtitle">{{ job.company }}</span>
                            <span class="item-date">{{ job.startDate }} - {{ job.endDate }}</span>
                        </div>
                    </div>
                    <NuxtLink to="/experience" class="view-all-link">View Full Experience &rarr;</NuxtLink>
                </div>

                <!-- Education Gist -->
                <div class="glass-card">
                    <h2 class="section-title">Education</h2>
                    <div class="info-list">
                        <div v-for="(edu, index) in resume?.education?.slice(0, 2)" :key="index" class="info-item">
                            <span class="item-role">{{ edu.area }}</span>
                            <span class="item-subtitle">{{ edu.institution }}</span>
                            <span class="item-date">{{ edu.startDate }} - {{ edu.endDate }}</span>
                        </div>
                    </div>
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
    justify-content: flex-start;
}

.hero-content {
    max-width: 900px;
    text-align: left;
    padding: 2rem 0;
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
    border: 1px solid var(--accent-color);
    border-radius: 100px;
    padding: 0 0.4em;
    line-height: 1;
    color: var(--accent-color);
    font-weight: 400;
    margin: 0 0.1em;
    position: relative;
    top: 0.1em;
}

.highlight::after {
    content: none;
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
    color: var(--accent-color);
    background: transparent;
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

/* Passion Section */
.passion-layout {
    display: flex;
    flex-direction: column;
    gap: 4rem;
    /* Spacing between title and content */
    padding: 4rem 0;
}

.passion-title {
    font-size: clamp(3rem, 6vw, 5rem);
    /* Increased size for impact */
    line-height: 1.1;
    color: #0a0a0a;
    font-weight: 300;
}

.serif-italic {
    font-family: 'Playfair Display', serif;
    font-style: italic;
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

.section-title {
    font-size: 2rem;
    margin-bottom: 2rem;
    font-weight: 600;
    letter-spacing: -0.02em;
    color: #0a0a0a;
}

/* Glass Cards */
.glass-card {
    background: rgba(0, 0, 0, 0.02);
    border: 1px solid rgba(0, 0, 0, 0.05);
    backdrop-filter: blur(10px);
    border-radius: 1rem;
    padding: 2rem;
    transition: transform 0.3s ease, background 0.3s ease;
}

.glass-card:hover {
    background: rgba(0, 0, 0, 0.04);
    transform: translateY(-2px);
}

/* Grid Layouts */
.grid-2 {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
}

.info-list {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
}

.info-item {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
}

.item-role {
    font-size: 1.1rem;
    color: #0a0a0a;
    font-weight: 500;
}

.item-subtitle {
    font-size: 0.9rem;
    color: #666666;
}

.item-date {
    font-size: 0.8rem;
    color: #888888;
}

.view-all-link {
    display: inline-block;
    margin-top: 1rem;
    color: var(--accent-color);
    text-decoration: none;
    font-size: 0.9rem;
    transition: opacity 0.3s;
}

.view-all-link:hover {
    opacity: 0.8;
}

@media (max-width: 768px) {
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

    .grid-2 {
        grid-template-columns: 1fr;
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
