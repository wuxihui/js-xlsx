<template>
<!-- eslint-disable -->
    <div>
        <ul>
            <li v-for="item in 100" :key="item" @click="handleDetails(item)">
                {{item}}
            </li>
        </ul>
    </div>
</template>
<!-- eslint-disable -->
<script>
export default {
    name: 'scrollbar',
    data() {
        return  {
            list: []
        }
    },
    activated () {
        console.log("activated");
    },
    deactivated () {
        console.log("deactivated");
    },
    methods: {
        handleDetails (item) {
            this.$router.push({
                path: '/details',
                query: {id: item}
            })
        }
    }
}
</script>


<style scoped>
li {
    width: 100%;
    height: 25px;
    background: green;
    margin: 5px 0;
    line-height: 25px;
}
</style>