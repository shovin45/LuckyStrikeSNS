<template lang="pug">
  div.name-text
    h2.name-text__title {{ nameText }}
</template>

<script>
import Parsonal from '~/components/Parsonal.vue'

export default {
  components: {
    Parsonal,
  },
  props: {
    nameText: String
  }

}
</script>

<style lang="scss">
  .name-text__title {
    font-size: 5vw;
    text-align: center;
  }
</style>