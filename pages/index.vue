<template lang="pug">
  div
    the-header
    parsonal(v-for="(section, index) of 5" :key="section" :n="index")
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

</style>
