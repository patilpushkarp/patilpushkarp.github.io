<template>
    <div class="page-resume container section" data-theme="dark">

        <div class="resume-page container" data-theme="light">
            <div class="resume-actions">
                <a :href="resumePdfLink" download class="download-btn">
                    <span class="icon">⬇</span> Download PDF
                </a>
            </div>

            <div class="resume-paper blur-load" v-if="resume" data-theme="light">
                <!-- Header -->
                <header class="resume-header">
                    <h1 class="name">{{ resume.basics.name }}</h1>
                    <p class="role">{{ resume.basics.label }}</p>
                    <div class="contact-details">
                        <span>{{ resume.basics.email }}</span>
                        <span>{{ resume.basics.phone }}</span>
                        <span>{{ resume.basics.location.city }}, {{ resume.basics.location.country }}</span>
                    </div>
                </header>

                <section class="resume-section blur-load delay-100">
                    <h3>Summary</h3>
                    <p>{{ resume.basics.summary }}</p>
                </section>

                <section class="resume-section blur-load delay-200">
                    <h3>Education</h3>
                    <div v-for="(edu, idx) in resume.education" :key="idx" class="resume-item">
                        <div class="item-header">
                            <h4>{{ edu.institution }}</h4>
                            <span>{{ edu.startDate }} - {{ edu.endDate }}</span>
                        </div>
                        <p>{{ edu.area }}</p>
                        <small>Score: {{ edu.score }}</small>
                    </div>
                </section>

                <section class="resume-section blur-load delay-300">
                    <h3>Experience</h3>
                    <div v-for="(job, idx) in resume.work" :key="idx" class="resume-item">
                        <div class="item-header">
                            <h4>{{ job.company }} - {{ job.position }}</h4>
                            <span>{{ job.startDate }} - {{ job.endDate }}</span>
                        </div>
                        <ul>
                            <li v-for="(detail, i) in job.highlights" :key="i">{{ detail }}</li>
                        </ul>
                    </div>
                </section>

                <section class="resume-section blur-load delay-400">
                    <h3>Skills</h3>
                    <div class="skills-list">
                        <p><strong>Languages:</strong> {{ resume.skills.languagesAndSoftwares.join(', ') }}</p>
                        <p><strong>Frameworks:</strong> {{ resume.skills.frameworksAndLibraries.join(', ') }}</p>
                        <p><strong>Cloud:</strong> {{ resume.skills.cloudServices.join(', ') }}</p>
                    </div>
                </section>

            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
const { resume } = useResume();

// Set white background for resume page specifically if needed, 
// but we'll stick to a "paper" look on the dark background for the UI
</script>

<style scoped>
.page-resume {
    padding-top: var(--spacing-lg);
    display: flex;
    flex-direction: column;
    align-items: center;
}

.resume-actions {
    width: 100%;
    max-width: 800px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 2rem;
}

.resume-paper {
    background: white;
    color: #333;
    width: 100%;
    max-width: 800px;
    padding: 4rem;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
    font-family: 'Times New Roman', Times, serif;
    /* Classic resume font or keep Inter */
    font-family: var(--font-sans);
}

.resume-header {
    border-bottom: 2px solid #333;
    padding-bottom: 1.5rem;
    margin-bottom: 2rem;
}

.resume-header h1 {
    font-size: 2.5rem;
    color: #000;
    margin-bottom: 0.5rem;
}

.resume-header h2 {
    font-size: 1.2rem;
    color: #666;
    font-weight: 400;
    margin-bottom: 1rem;
}

.contact-details {
    display: flex;
    gap: 1.5rem;
    font-size: 0.9rem;
    color: #666;
}

.resume-section {
    margin-bottom: 2rem;
}

.resume-section h3 {
    font-size: 1.1rem;
    border-bottom: 1px solid #ddd;
    padding-bottom: 0.5rem;
    margin-bottom: 1rem;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    color: #333;
}

.resume-item {
    margin-bottom: 1.5rem;
}

.item-header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 0.5rem;
    font-weight: 600;
}

.resume-item ul {
    padding-left: 1.2rem;
    margin-top: 0.5rem;
}

.resume-item li {
    margin-bottom: 0.3rem;
    font-size: 0.95rem;
    line-height: 1.5;
}

.skills-list p {
    margin-bottom: 0.5rem;
}

@media (max-width: 768px) {
    .resume-paper {
        padding: 2rem;
    }
}
</style>
