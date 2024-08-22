<template>
    <div class="main">
        <div class="menu-list">
            <ul>
                <div class="intro">{{ myData.intro }}</div>
                <li>
                    <NuxtLink to="/about"><button class="menu-button">About</button></NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/scribbles"><button class="menu-button">Scribbles</button></NuxtLink>
                </li>
            </ul>
        </div>
        <div class="greetings-name">
            <div class="greetings inter-font-500">Namaskar 🙏🏼 (Hello, there 👋🏼), I am </div>
            <div class="name inter-font-900">
                <p class="text">{{ myData.name }}</p>
            </div>
        </div>
    </div>
</template>

<script>
import aboutData from "./../data/about.json"

definePageMeta({
    layout: "home"
})

export default {
    data() {
        return {
            myData: aboutData
        };
    }
}

</script>

<style scoped>
.main {
    height: 98vh;
}

.intro {
    font-size: 2vw;
    margin: 2%;
    width: 60%;
    float: right;
}

.greetings-name {
    height: 50%;
    display: flex;
    flex-flow: column;
    justify-content: flex-end;
    position: relative;
    z-index: 0;
}

.greetings {
    font-size: 3vw;
    margin: 2%;
}

.name {
    font-size: 10vw;
    margin: 2%;
}

.menu-list {
    max-width: 60%;
    height: 50%;
    display: block;
    margin-left: auto;
    padding-top: 3%;
    position: relative;
    z-index: 1;
    margin-bottom: -3%;
}

ul {
    height: 100%;
    display: flex;
    flex-flow: column nowrap;
    justify-content: flex-end;
    align-items: flex-end;
    margin-right: 5%;
}

li {
    list-style: none;
    margin-right: 7%;
}

.menu-button {
    background-image: linear-gradient(to right bottom, #004E9A, #EA4492);
    color: white;
    padding: 5%;
    margin: 7% 0% 7% auto;
    width: 30vb;
    font-size: 1.2vw;
    border-radius: 40px;
    border: none;
    font-size: 1.5vw;
}
</style>