<template lang="pug">
  div.thumbnail
    img.thumbnail__image(:src="imageUrl" alt="")
</template>

<script>
import Parsonal from '~/components/Parsonal.vue'

export default {
  components: {
    Parsonal,
  },
  props: {
    imageUrl: String
  }
}
</script>

<style lang="scss">
.thumbnail {
  text-align: center;
  flex-basis: 50%;

    &__image {
      width: 40vw;
      vertical-align: bottom;
    }
}
</style>