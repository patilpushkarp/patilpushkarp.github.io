<template>
    <div class="scribble-wrapper">
        <p class="name text">Scribbles</p>
        <div class="scribbles">
            <div v-for="(scribble_topic_list, scribble_topic, index) in scribbles" :key=index class="scribbles-topic">
                <h1 class="topic-heading">{{ scribble_topic }}</h1>
                <hr>
                <div v-for="(value, key, indexlower) in scribble_topic_list" :key=indexlower class="scribbles-list">
                    <NuxtLink class="scribbles-heading-link" :to="value['link']">
                        <p class="scribbles-heading">{{ value["name"] }}</p>
                    </NuxtLink>
                    <hr>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
import scribblesData from "./../data/scribbles.json"

export default {
    data() {
        return {
            scribbles: scribblesData
        };
    }
}
</script>

<style scoped>
.scribble-wrapper {
    min-height: 100vh;
    /* height: 35vh; */
}

.name {
    padding: 5% 10%;
    font-size: 5vw;
    font-weight: 900;
}

.scribbles {
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
}

.scribbles-topic {
    width: 80%;
}

.topic-heading {
    font-size: 3vw;
    font-weight: 700;
}

.scribbles-heading-link {
    text-decoration: none;
    color: inherit;
}

.scribbles-heading {
    font-size: 1.5vw;
    font-weight: 400;
    padding: 1% 3%;
}
</style>