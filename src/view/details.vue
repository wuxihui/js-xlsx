<template>
<!-- eslint-disable -->
    <div class="details">
        信息
        {{$route.query.id}}
        <ul>
            <li v-for="item in 300" :key='item'>
                {{item}}
            </li>
        </ul>
    </div>
</template>
<!-- eslint-disable -->
<script>
export default {
    name: 'Details',
    data() {
        return  {
            list: [],
            test: 'hhhh'
        }
    },
    created() {
        console.log(23523);
        console.log(this.$route.query.id);
    }
}
</script>


<style scoped>
li {
    width: 100%;
    height: 25px;
    background: black;
    margin: 5px 0;
    line-height: 25px;
    color: white;
}
</style>