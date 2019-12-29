<template lang="pug">
  div.continer
    the-header
    parsonal(v-for="(section, index) of 5" :key="section" :n="index" data-aos="fade")
</template>

<script>
import TheHeader from '~/components/TheHeader.vue'
import Parsonal from '~/components/Parsonal.vue'

export default {
  components: {
    TheHeader,
    Parsonal,
  },
  data(){
    return {
    }
  },
}
</script>

<style lang="scss">
body {
  animation: 1s appear;
}

.continer {
  overflow: hidden;
}

@keyframes body {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
