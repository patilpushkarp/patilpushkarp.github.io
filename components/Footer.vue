<template>
    <div class="row footer">
        <div class="col-7">
            <div class="footer-intro">
                <h2 class="chat-heading">Fancy a chat?</h2>
                <p>I am always open to exploring new and exciting opportunities. Whether you want to collaborate on a
                    project, or you have a cool event you think I might bring value to, or just want to chat about the
                    industry related stuff, please ping me on linkedin and I will get back to you as soon as I can.</p>
            </div>
        </div>

        <div class="col-5">
            <div class="footer-links">
                <div class="link-wrapper">
                    <NuxtLink href="https://www.linkedin.com/in/patilpushkarp/" target=”_blank”><button
                            class="footer-link">LinkedIn</button></NuxtLink>
                </div>
                <div class="link-wrapper">
                    <NuxtLink href="mailto:patilpushkarp@live.com/"><button class="footer-link">Mail</button></NuxtLink>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.footer {
    height: 100vh;
    display: flex;
    justify-content: center;
    align-content: center;
    text-align: justify;
    background-color: #041B2d;
    color: white;
}

.chat-heading {
    padding: 5% 0%;
    background: radial-gradient(farthest-corner at 10% 10%,
            #FF9CDA 20%,
            #428CD4 70%);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
}

.footer-intro {
    padding: 0% 10%;
}

.footer-links {
    text-align: center;
}

.link-wrapper {
    padding: 5% 0%;
}

.footer-link {
    min-width: 30%;
    border-radius: 30px;
    color: #041B2d;
    padding: 2% 0%;
    font-size: 1vw;
    background-image: linear-gradient(to right bottom, #FF9CDA, #EA4492);
    border: none;
}
</style>