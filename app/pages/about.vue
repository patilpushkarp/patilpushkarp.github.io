<template>
    <div class="page-about" data-theme="light">
        <div class="container section">
            <!-- Header -->
            <div class="header fade-in-up">
                <h1 class="title-large">About <span class="italic-serif">Me</span>.</h1>
                <div class="pill-badge">Story & Skills</div>
            </div>

            <!-- Bio Section -->
            <div class="content-grid">
                <div class="bio-column fade-in-up" style="animation-delay: 0.1s">
                    <h2 class="section-title">Who I <span class="italic-serif">Am</span></h2>
                    <div class="bio-text">
                        <p>{{ resume?.basics?.summary }}</p>
                    </div>

                    <div class="contact-card">
                        <h3 class="card-title">Get in Touch</h3>
                        <div class="contact-item">
                            <span class="label">Email</span>
                            <span class="value">{{ resume?.basics?.email }}</span>
                        </div>
                        <div class="contact-item">
                            <span class="label">Phone</span>
                            <span class="value">{{ resume?.basics?.phone }}</span>
                        </div>
                        <div class="contact-item">
                            <span class="label">Location</span>
                            <span class="value">{{ resume?.basics?.location?.city }}, {{
                                resume?.basics?.location?.country }}</span>
                        </div>
                    </div>
                </div>

                <!-- Skills Section -->
                <div class="skills-column fade-in-up" style="animation-delay: 0.2s" v-if="resume?.skills">
                    <h2 class="section-title">Technical <span class="italic-serif">Expertise</span></h2>

                    <div class="skill-group">
                        <h3 class="group-title">Languages & Softwares</h3>
                        <div class="skill-tags">
                            <span v-for="skill in resume.skills.languagesAndSoftwares" :key="skill" class="skill-pill">
                                {{ skill }}
                            </span>
                        </div>
                    </div>

                    <div class="skill-group">
                        <h3 class="group-title">Frameworks & Libraries</h3>
                        <div class="skill-tags">
                            <span v-for="skill in resume.skills.frameworksAndLibraries" :key="skill" class="skill-pill">
                                {{ skill }}
                            </span>
                        </div>
                    </div>

                    <div class="skill-group">
                        <h3 class="group-title">Cloud & DevOps</h3>
                        <div class="skill-tags">
                            <span v-for="skill in resume.skills.cloudServices" :key="skill" class="skill-pill">
                                {{ skill }}
                            </span>
                            <span v-for="skill in resume.skills.sdlc" :key="skill" class="skill-pill">
                                {{ skill }}
                            </span>
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
.page-about {
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

/* Content Layout */
.content-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 4rem;
    margin-top: 2rem;
}

.section-title {
    font-family: var(--font-sans);
    font-size: 2.5rem;
    color: #000;
    margin-bottom: 2rem;
    font-weight: 400;
}

/* Bio Styles */
.bio-text p {
    font-family: var(--font-sans);
    font-size: 1.1rem;
    line-height: 1.8;
    color: #444;
    margin-bottom: 2rem;
}

.contact-card {
    background: #F8F5F0;
    /* Cream/Beige background consistent with Home stats */
    padding: 2rem;
    border-radius: 1.5rem;
    margin-top: 3rem;
}

.card-title {
    font-family: var(--font-display);
    font-size: 1.5rem;
    margin-bottom: 1.5rem;
    color: #000;
}

.contact-item {
    display: flex;
    flex-direction: column;
    margin-bottom: 1.2rem;
}

.contact-item:last-child {
    margin-bottom: 0;
}

.contact-item .label {
    font-size: 0.85rem;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    color: #666;
    margin-bottom: 0.3rem;
}

.contact-item .value {
    font-size: 1.1rem;
    color: #000;
    font-weight: 500;
}

/* Skills Styles */
.skills-column {
    display: flex;
    flex-direction: column;
    gap: 3rem;
}

.skill-group {
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    padding-bottom: 2rem;
}

.skill-group:last-child {
    border-bottom: none;
    padding-bottom: 0;
}

.group-title {
    font-family: var(--font-sans);
    font-size: 1.1rem;
    font-weight: 500;
    color: #000;
    margin-bottom: 1.5rem;
    text-transform: uppercase;
    letter-spacing: 0.05em;
}

.skill-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 0.8rem;
}

.skill-pill {
    font-family: var(--font-sans);
    font-size: 0.95rem;
    color: #333;
    background: transparent;
    border: 1px solid rgba(0, 0, 0, 0.15);
    padding: 0.6rem 1.2rem;
    border-radius: 100px;
    transition: all 0.2s ease;
}

.skill-pill:hover {
    background: #000;
    color: #fff;
    border-color: #000;
    transform: translateY(-2px);
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
    .content-grid {
        grid-template-columns: 1fr;
        gap: 3rem;
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

    .section-title {
        font-size: 2rem;
    }
}
</style>
