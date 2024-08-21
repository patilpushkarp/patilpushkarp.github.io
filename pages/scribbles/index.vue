<template>
    <div class="scribble-wrapper">
        <p class="name">Scribbles</p>
    </div>

    <div class="scribbles">
        <div v-for="(scribble_topic_list, scribble_topic, index) in scribbles" :key=index class="scribbles-topic">
            <h1>{{ scribble_topic }}</h1>
            <hr>
            <div v-for="(value, key, indexlower) in scribble_topic_list" :key=indexlower class="scribbles-list">
                <NuxtLink :to="value['link']"><p class="scribbles-heading">{{ value["name"] }}</p></NuxtLink>
                <hr>
            </div>
        </div>
    </div>

    <!-- <ContentDoc path="example" /> -->
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
    height: 35vh;
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

.scribbles-heading {
    padding: 1% 3%;
    font-size: 1.5vw;
    font-weight: 400;
}
</style>