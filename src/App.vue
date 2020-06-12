<template>
  <div>
    <p>Project name: <%= name %></p>
    <p>Description: <%= description %></p>
    <p>Author: <%= author %></p>
    <p>Language: <%= language %></p>
    <p>Framework: <%= framework %></p>
    <p>Islint: <%= isLint %></p>
    <h1>当前时间：{{ time }}</h1>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        time: new Date(),
      };
    },
    mounted() {
      setInterval(() => {
        this.time = new Date();
      }, 1000);
    },
  };
</script>
<style scoped lang="scss">
  h1 {
    color: #78f;
  }
</style>
