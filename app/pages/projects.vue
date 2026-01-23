<template>
    <div class="page-projects" data-theme="light">
        <div class="container section">
            <!-- Header -->
            <div class="header fade-in-up">
                <h1 class="title-large">Selected <span class="italic-serif">Works</span>.</h1>
                <div class="pill-badge">Portfolio</div>
            </div>

            <!-- Projects Grid -->
            <div class="projects-grid" v-if="resume?.projects">
                <div class="project-card fade-in-up" v-for="(project, index) in resume.projects" :key="index"
                    :style="{ animationDelay: `${index * 0.1}s` }">
                    <div class="card-content">
                        <div class="project-header">
                            <h2 class="project-title">{{ project.name }}</h2>
                            <span class="project-date">{{ project.startDate }} - {{ project.endDate }}</span>
                        </div>
                        <p class="project-description">{{ project.description }}</p>
                        <div class="card-footer">
                            <span class="view-link">View Details <span class="arrow">&rarr;</span></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
const { resume } = useResume();
</script>

<style scoped>
.page-projects {
    width: 100%;
    min-height: 100vh;
    padding-top: var(--nav-height);
    background-color: var(--bg-primary);
    color: var(--text-primary);
    position: relative;
    padding-bottom: 5rem;
}

.section {
    position: relative;
    z-index: 1;
    width: 100%;
    max-width: 1400px;
    margin: 0 auto;
    padding: 0 2rem;
}

/* Header */
.header {
    margin-bottom: 4rem;
    padding-top: 4rem;
    text-align: left;
}

.title-large {
    font-family: var(--font-sans);
    font-size: clamp(3rem, 6vw, 5.5rem);
    color: #000;
    line-height: 1.1;
    margin-bottom: 2rem;
    font-weight: 300;
}

.italic-serif {
    font-family: var(--font-display);
    font-style: italic;
    font-weight: 400;
}

.pill-badge {
    display: inline-block;
    padding: 0.75rem 1.5rem;
    background: #000;
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 100px;
    font-family: var(--font-sans);
    font-size: 0.9rem;
    color: #fff;
    letter-spacing: 0.02em;
}

/* Projects Grid */
.projects-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
    margin-top: 2rem;
}

.project-card {
    background: #F8F5F0;
    /* Cream/Beige background, consistent with site */
    border-radius: 1.5rem;
    overflow: hidden;
    transition: transform 0.3s ease;
    display: flex;
    flex-direction: column;
    min-height: 250px;
}

.project-card:hover {
    transform: translateY(-5px);
}

.card-content {
    padding: 2.5rem;
    display: flex;
    flex-direction: column;
    height: 100%;
}

.project-header {
    margin-bottom: 1.5rem;
}

.project-title {
    font-family: var(--font-display);
    font-size: 2rem;
    color: #000;
    margin-bottom: 0.5rem;
    line-height: 1.2;
}

.project-date {
    font-family: var(--font-sans);
    font-size: 0.9rem;
    color: #666;
    display: block;
    margin-top: 0.5rem;
}

.project-description {
    font-family: var(--font-sans);
    font-size: 1.1rem;
    color: #444;
    line-height: 1.6;
    margin-bottom: 2rem;
    flex-grow: 1;
}

.card-footer {
    margin-top: auto;
}

.view-link {
    font-family: var(--font-sans);
    font-size: 0.95rem;
    color: #000;
    font-weight: 500;
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    cursor: pointer;
    transition: gap 0.2s ease;
}

.view-link:hover {
    gap: 0.8rem;
    text-decoration: underline;
    text-underline-offset: 4px;
}

/* Animation */
.fade-in-up {
    opacity: 0;
    animation: fadeInUp 0.8s ease forwards;
}

@keyframes fadeInUp {
    from {
        opacity: 0;
        transform: translateY(30px);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }
}

/* Responsive */
@media (max-width: 1024px) {
    .projects-grid {
        gap: 1.5rem;
    }
}

@media (max-width: 768px) {
    .header {
        padding-top: 2rem;
        margin-bottom: 3rem;
    }

    .title-large {
        font-size: 3rem;
    }

    .projects-grid {
        grid-template-columns: 1fr;
    }

    .project-card {
        min-height: auto;
    }

    .card-content {
        padding: 2rem;
    }

    .project-title {
        font-size: 1.75rem;
    }
}
</style>
