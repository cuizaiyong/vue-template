<template>
  <div>
    <h1>{{ time }}</h1>
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
