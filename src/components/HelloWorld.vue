<template>
<!-- eslint-disable -->
  <div class="hello">
    hhh
    <input type="text" v-model="str">
    <h2>{{ word }}</h2>
  </div>
</template>

<script>
/*eslint-disable*/
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      str: ''
    }
  },
  props: {
    word: ''
  },
  watch: {
    str: function(newVal) {
      this.$emit('update:word', newVal)
    }
  },
  mounted() {
    console.log(process.env.NODE_TETS);
  },
 
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
