<template>

    <div class="brief-intro">
        <p class="greeting">Hey, I am </p>
        <p class="name text">{{ myData.name }}</p>
        <div class="brief">{{ myData.brief }}</div>
    </div>

</template>

<script>
import aboutData from "./../data/about.json"

export default {
    data() {
        return {
            myData: aboutData
        };
    }
}

</script>

<style scoped>

.brief-intro{
    height: 100vh;
}

.greeting{
    padding-top: 5%;
    padding-left: 10%;
    font-size: 1.5vw;
}

.name {
    padding-left:10%;
    font-size: 5vw;
    font-weight: 900;
}

.brief {
    width: 50%;
    font-size: 2vw;
    font-weight: 300;
    float: right;
    padding-right: 5%;
}
</style>