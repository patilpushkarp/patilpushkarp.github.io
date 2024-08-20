<template>
    <p class="name">{{ myData.name }}</p>
    <div class="brief">{{ myData.brief }}</div>
</template>

<script>
import aboutData from "./../data/about.json"

export default{
    data(){
        return {
            myData: aboutData
        };
    }
}

</script>

<style scoped>
.name{
    padding: 5% 10%;
    font-size: 5vw;
    font-weight: 900;
}

.brief{
    width: 50%;
    font-size: 2vw;
    font-weight: 300;
    float: right;
    padding-right: 5%;
}
</style>