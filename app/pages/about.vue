<template>
    <div class="page-about" data-theme="light">
        <div class="container section">
            <!-- Header -->
            <div class="header">
                <h1 class="title-large blur-load">Hey, I am <span class="italic-serif">Pushkar</span>.</h1>
                <div class="pill-badge blur-load delay-100">Story & Background</div>
            </div>

            <!-- Profile Image -->
            <div class="profile-image-container blur-load delay-200">
                <img src="/profile.png" alt="Pushkar Patil in the Himalayas" class="profile-image" />
            </div>



            <!-- Main Content Flow -->
            <div class="content-flow">

                <!-- 1. Bio Section (Who I Am) -->
                <div class="bio-section" style="animation-delay: 0.1s">

                    <div class="who-i-am-grid">
                        <!-- Left: Narrative -->
                        <div class="bio-text blur-load">
                            <p v-for="(para, index) in resume?.basics?.about_me" :key="index">
                                {{ para }}
                            </p>
                        </div>

                        <!-- Right: Connect Cards -->
                        <div class="connect-cards">
                            <!-- Email -->
                            <a :href="`mailto:${resume?.basics?.email}`" class="connect-card blur-load delay-100">
                                <div class="card-dot blue"></div>
                                <div class="card-info">
                                    <span class="card-title">Email</span>
                                    <span class="card-desc">Drop me a line</span>
                                </div>
                                <div class="card-arrow">↗</div>
                            </a>

                            <!-- LinkedIn -->
                            <a v-if="resume?.basics?.profiles?.find(p => p.network === 'LinkedIn')"
                                :href="resume?.basics?.profiles?.find(p => p.network === 'LinkedIn')?.url"
                                target="_blank" class="connect-card blur-load delay-200">
                                <div class="card-dot orange"></div>
                                <div class="card-info">
                                    <span class="card-title">LinkedIn</span>
                                    <span class="card-desc">Let's connect</span>
                                </div>
                                <div class="card-arrow">↗</div>
                            </a>

                            <!-- GitHub -->
                            <a v-if="resume?.basics?.profiles?.find(p => p.network === 'Github')"
                                :href="resume?.basics?.profiles?.find(p => p.network === 'Github')?.url" target="_blank"
                                class="connect-card blur-load delay-300">
                                <div class="card-dot black"></div>
                                <div class="card-info">
                                    <span class="card-title">GitHub</span>
                                    <span class="card-desc">Check my code</span>
                                </div>
                                <div class="card-arrow">↗</div>
                            </a>
                        </div>
                    </div>
                </div>

                <!-- 2. Education Section (Sticky Cards) -->
                <div class="education-section">
                    <h2 class="section-title blur-load">Education <span class="italic-serif">& Alma Mater</span></h2>
                    <div class="education-stack">
                        <div v-for="(edu, index) in resume?.education" :key="index" class="education-card blur-load"
                            :style="getCardStyle(index, edu.institution)">
                            <div class="card-content">
                                <div class="edu-header">
                                    <h3 class="edu-institution">{{ edu.institution }}</h3>
                                    <div class="edu-date">{{ edu.startDate }} — {{ edu.endDate }}</div>
                                </div>
                                <div class="edu-body">
                                    <div class="edu-degree">{{ edu.area }}</div>
                                    <div class="edu-score" v-if="edu.score">Score: {{ edu.score }}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>



                <!-- BOTTOM CONTACT SECTION REMOVED as per new design -->

            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
const { resume } = useResume();

const getSchoolImage = (institution: string) => {
    if (institution.includes('IIM')) return '/schools/iim.jpg';
    if (institution.includes('VJTI')) return '/schools/vjti.jpg';
    return '';
};

// const getCardStyle = (index: number, institution: string) => {
//     // Reduced gap: ~120px (heading height ~80px + padding/border ~40px)
//     const topValue = 150 + (index * 120);
//     return {
//         top: `${topValue}px`,
//         zIndex: index + 1,
//         backgroundImage: `linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.2)), url(${getSchoolImage(institution)})`
//     };
// };
const getCardStyle = (index: number, institution: string) => {
    const headerHeight = 120;  // Your .edu-header height
    return {
        top: `${150 + (index * headerHeight)}px`,  // Each card sticks below previous header
        zIndex: index + 1,
        backgroundImage: `linear-gradient(rgba(0,0,0,0.25), rgba(0,0,0,0.25)), url(${getSchoolImage(institution)})`
    };
};

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
    /* max-width: 1000px; Removed to allow 80vw cards */
    margin: 0 auto;
    padding: 0 2rem;
}

/* Header */
.header {
    margin-bottom: 6rem;
    padding-top: 4rem;
    text-align: left;
    max-width: 1000px;
    /* Constrain header/bio text, not the cards */
    margin-left: 20rem;
    margin-right: auto;
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

/* Content Flow */
.content-flow {
    display: flex;
    flex-direction: column;
    gap: 8rem;
    /* Large gap between major sections */
}

/* Profile Image */
.profile-image-container {
    width: 90%;
    aspect-ratio: 16/9;
    margin: 0 auto 6rem auto;
    border-radius: 1.5rem;
    overflow: hidden;
    position: relative;
}

.profile-image {
    width: 100%;
    height: 100%;
    display: block;
    object-fit: cover;
    object-position: center bottom;
    /* Anchor to bottom to keep subject visible if standing */
}



/* Bio Styles */
.bio-section {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
}

.who-i-am-grid {
    display: grid;
    grid-template-columns: 1.5fr 1fr;
    gap: 6rem;
    align-items: start;
}

.bio-text p {
    font-family: var(--font-sans);
    font-size: 1.25rem;
    line-height: 1.8;
    color: #444;
    margin-bottom: 2rem;
}

/* Connect Cards */
.connect-cards {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
}

.connect-card {
    display: flex;
    align-items: center;
    background: #fff;
    padding: 1.5rem 2rem;
    border-radius: 12px;
    border: 1px solid rgba(0, 0, 0, 0.08);
    text-decoration: none;
    transition: all 0.2s ease;
    cursor: pointer;
}

.connect-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.05);
}

.card-dot {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    margin-right: 1.5rem;
}

.card-dot.blue {
    background-color: #3b82f6;
}

.card-dot.orange {
    background-color: #f97316;
}

.card-dot.black {
    background-color: #000;
}

.card-dot.green {
    background-color: #22c55e;
}

.card-info {
    flex: 1;
    display: flex;
    flex-direction: column;
}

.card-title {
    font-family: var(--font-sans);
    font-size: 1.1rem;
    font-weight: 500;
    color: #000;
}

.card-desc {
    font-family: var(--font-sans);
    font-size: 0.9rem;
    color: #666;
    margin-top: 0.2rem;
}

.card-arrow {
    font-size: 1.2rem;
    color: #999;
    transition: transform 0.2s ease;
}

.connect-card:hover .card-arrow {
    transform: translate(4px, -4px);
    color: #000;
}

/* Education Stack */
.education-stack {
    position: relative;
    height: 250vh;
}

.education-card {
    position: sticky;
    width: 80vw;
    height: 70vh;
    margin: 0 auto 16vh auto;
    /* Less space = more body coverage */
    background: #fbfbfb;
    background-size: cover;
    border-radius: 1.5rem;
    padding: 3rem;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
    color: #fff;
}

/* Hover effect */
.education-card:hover {
    transform: translateY(-5px);
}

.card-content {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
}

.edu-header {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    flex-wrap: wrap;
    gap: 1rem;
    padding-bottom: 1.5rem;
    border-bottom: 1px solid rgba(0, 0, 0, 0.05);
}

.edu-institution {
    font-family: var(--font-display);
    font-size: 2rem;
    color: #fff;
    margin: 0;
    line-height: 1.2;
}

.edu-date {
    font-family: var(--font-mono);
    font-size: 0.9rem;
    color: #eee;
    text-transform: uppercase;
    letter-spacing: 0.05em;
}

.edu-degree {
    font-family: var(--font-sans);
    font-size: 1.3rem;
    color: #ddd;
    margin-bottom: 0.5rem;
}

.edu-score {
    display: inline-block;
    padding: 0.5rem 1rem;
    background: #000;
    color: #fff;
    font-size: 0.9rem;
    border-radius: 6px;
    font-family: var(--font-mono);
}

/* Animation */


/* Responsive */
@media (max-width: 1024px) {
    .who-i-am-grid {
        grid-template-columns: 1fr;
        gap: 4rem;
    }

    .connect-cards {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
        gap: 1rem;
    }
}

@media (max-width: 768px) {
    .header {
        padding-top: 2rem;
        margin-bottom: 4rem;
    }

    .title-large {
        font-size: 3rem;
    }

    .section-title {
        font-size: 2rem;
    }

    .bio-title {
        font-size: 3rem;
    }

    .who-i-am-grid {
        gap: 3rem;
    }

    .edu-header {
        flex-direction: column;
        align-items: flex-start;
        gap: 0.5rem;
    }

    .education-card {
        padding: 2rem;
    }
}
</style>
