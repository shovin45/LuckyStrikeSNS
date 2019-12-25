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
  .name-text{
    &__title {
    font-size: 5vw;
    text-align: center;
    font-family: 'Lato', 'M PLUS Rounded 1c', sans-serif ;
    font-weight:200;
    font-style: normal;
  }
  }
</style>