<template>
    <div class="page-experience" data-theme="light">

        <div class="container section">
            <!-- Header -->
            <div class="header fade-in-up">
                <h1 class="title-large">Building <span class="italic-serif">digital products</span>.</h1>
                <div class="pill-badge">Professional Journey</div>
            </div>

            <!-- Experience List -->
            <div class="experience-list" v-if="resume?.work">
                <section class="full-width-card fade-in-up" v-for="(job, index) in resume.work" :key="index">

                    <div class="card-header">
                        <div class="header-content">
                            <h3 class="company-name">{{ job.company }}</h3>
                            <span class="role-badge">{{ job.position }}</span>
                        </div>
                        <span class="period" v-if="!isMobile">{{ job.startDate }} - {{ job.endDate }}</span>
                    </div>

                    <div class="card-content">
                        <!-- Nested Categories Grid -->
                        <div class="categories-grid">
                            <div class="category-card" v-for="(cat, cIndex) in job.categories" :key="cIndex">
                                <h4 class="category-title">{{ cat.name }}</h4>
                                <ul class="category-items">
                                    <li v-for="(item, i) in cat.items" :key="i">{{ item }}</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

            <!-- Skills Section -->
            <div class="skills-section fade-in-up" v-if="resume?.skills">
                <h2 class="section-title">Technical <span class="italic-serif">Arsenal</span></h2>
                <div class="skills-grid">
                    <div class="skill-card" v-for="(category, index) in skillCategories" :key="index">
                        <h3 class="skill-title">{{ category.title }}</h3>
                        <div class="skill-tags">
                            <span class="skill-pill" v-for="skill in category.items" :key="skill">{{ skill }}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
const { resume } = useResume();
const isMobile = ref(false);

const skillCategories = computed(() => {
    if (!resume.value?.skills) return [];
    return [
        { title: 'Languages & Software', items: resume.value.skills.languagesAndSoftwares },
        { title: 'Frameworks & Libraries', items: resume.value.skills.frameworksAndLibraries },
        { title: 'Cloud Services', items: resume.value.skills.cloudServices },
        { title: 'SDLC & Tools', items: resume.value.skills.sdlc }
    ];
});

onMounted(() => {
    checkMobile();
    window.addEventListener('resize', checkMobile);
});

onUnmounted(() => {
    window.removeEventListener('resize', checkMobile);
});

function checkMobile() {
    isMobile.value = window.innerWidth <= 768;
}
</script>

<style scoped>
.page-experience {
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
    max-width: nonebox;
    margin: 0;
    padding: 0;
}

.header {
    height: 50vh;
    margin-bottom: 4rem;
    padding-left: 10rem;
    padding-right: 2rem;
    text-align: left;
    max-width: 100%;
    margin-left: auto;
    margin-right: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
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

/* Experience List */
.experience-list {
    display: flex;
    flex-direction: column;
    width: 100%;
}

.full-width-card {
    width: 100%;
    margin-bottom: -40px;
    /* Overlap to hide corners */
    background: #000;
    border-radius: 40px 40px 0 0;
    overflow: hidden;
    position: relative;
    box-shadow: none;
    padding-bottom: 40px;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
}

.full-width-card:last-child {
    margin-bottom: 0;
    border-radius: 40px 40px 0 0;
    padding-bottom: 5rem;
}

.card-header {
    background: transparent;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    padding: 3rem 4rem;
    min-height: 120px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.header-content {
    display: flex;
    align-items: center;
    gap: 2rem;
    flex-wrap: wrap;
}

.company-name {
    font-family: var(--font-display);
    font-size: 2.5rem;
    color: #fff;
    margin: 0;
}

.role-badge {
    background: rgba(255, 255, 255, 0.1);
    padding: 0.5rem 1.2rem;
    border-radius: 50px;
    font-size: 0.9rem;
    color: rgba(255, 255, 255, 0.9);
    font-family: var(--font-sans);
}

.period {
    font-family: var(--font-sans);
    color: rgba(255, 255, 255, 0.6);
    font-size: 1.1rem;
}

.card-content {
    padding: 4rem 4rem;
    background: #000;
}

/* Nested Categories Grid - Bento Layout */
.categories-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 1.5rem;
    padding: 0 2rem;
}

.category-card {
    background: rgba(255, 255, 255, 0.03);
    border: 1px solid rgba(255, 255, 255, 0.05);
    border-radius: 20px;
    padding: 2rem;
    transition: background 0.3s ease;
    height: 100%;
    display: flex;
    flex-direction: column;
}

/* Layout Logic for 4 items */
/* Row 1: Equal Width (50% each) */
.category-card:nth-child(4n+1),
.category-card:nth-child(4n+2) {
    grid-column: span 2;
}

/* Row 2: GenAI (75%) + Data Ops (25%) */
.category-card:nth-child(4n+3) {
    grid-column: span 3;
}

.category-card:nth-child(4n+4) {
    grid-column: span 1;
}

.category-card:hover {
    background: rgba(255, 255, 255, 0.06);
}

.category-title {
    font-family: var(--font-sans);
    font-size: 1.4rem;
    color: #fff;
    margin-bottom: 1.5rem;
    font-weight: 500;
}

.category-items {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    flex-grow: 1;
}

.category-items li {
    font-family: var(--font-sans);
    font-size: 0.95rem;
    color: rgba(255, 255, 255, 0.8);
    line-height: 1.6;
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(255, 255, 255, 0.05);
    border-radius: 12px;
    padding: 1.2rem;
    transition: transform 0.2s ease, background 0.2s ease;
}

.category-items li:hover {
    transform: translateY(-2px);
    background: rgba(255, 255, 255, 0.08);
    border-color: rgba(255, 255, 255, 0.1);
}

.category-items li::before {
    display: none;
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

/* Mobile Adjustments */
@media (max-width: 1024px) {

    /* Tablet: 2 columns */
    .categories-grid {
        grid-template-columns: repeat(2, 1fr);
    }

    /* Reset spans for tablet simple 2x2 */
    .category-card:nth-child(n) {
        grid-column: span 1 !important;
    }
}

@media (max-width: 768px) {
    .header {
        max-width: 100%;
        padding-left: 1rem;
        padding-right: 1rem;
    }

    .full-width-card {
        border-radius: 24px 24px 0 0;
        padding-bottom: 2rem;
    }

    .card-header {
        padding: 2rem;
        flex-direction: column;
        align-items: flex-start;
        gap: 1rem;
    }

    .header-content {
        flex-direction: column;
        align-items: flex-start;
        gap: 0.5rem;
    }

    .card-content {
        padding: 2rem 1.5rem;
    }

    .title-large {
        font-size: 3rem;
    }

    .categories-grid {
        grid-template-columns: 1fr;
        padding: 0 1rem;
    }
}

/* Skills Section */
.skills-section {
    margin-top: 8rem;
    padding: 0 2rem;
    max-width: 1400px;
    margin-left: auto;
    margin-right: auto;
}

.section-title {
    font-family: var(--font-sans);
    font-size: 3rem;
    color: #000;
    margin-bottom: 4rem;
    text-align: left;
}

.skills-grid {
    display: flex;
    flex-direction: column;
    gap: 3rem;
}

.skill-card {
    display: flex;
    align-items: flex-start;
    padding-bottom: 3rem;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    background: transparent;
    border-radius: 0;
    padding: 0 0 3rem 0;
}

.skill-card:last-child {
    border-bottom: none;
}

.skill-card:hover {
    transform: none;
    border-color: rgba(0, 0, 0, 0.1);
}

.skill-title {
    font-family: var(--font-display);
    font-size: 1.8rem;
    color: #000;
    margin: 0;
    width: 30%;
    flex-shrink: 0;
    padding-right: 2rem;
}

.skill-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 0.8rem;
    width: 70%;
}

.skill-pill {
    font-family: var(--font-sans);
    font-size: 1rem;
    color: rgba(0, 0, 0, 0.8);
    background: transparent;
    border: 1px solid rgba(0, 0, 0, 0.2);
    padding: 0.6rem 1.5rem;
    border-radius: 100px;
    transition: all 0.2s ease;
}

.skill-pill:hover {
    background: #000;
    color: #fff;
    border-color: #000;
    transform: translateY(-2px);
}

@media (max-width: 768px) {
    .skills-section {
        padding: 0 1rem;
        margin-top: 5rem;
    }

    .section-title {
        font-size: 2.5rem;
        margin-bottom: 2rem;
    }

    .skill-card {
        flex-direction: column;
        gap: 1.5rem;
        padding-bottom: 2rem;
    }

    .skill-title {
        width: 100%;
        margin-bottom: 0;
    }

    .skill-tags {
        width: 100%;
    }
}
</style>
