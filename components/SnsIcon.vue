<template lang="pug">
  ul.sns-icons
    li.sns-icons__list(v-for="(item, index) of snsArray" :key="item")
      a.sns-icons__link(:href="item.url")
        img.sns-icons__image(:src="item.icon" alt="")
</template>

<script>
import facebookIcon from '../assets/img/facebook.png'
import instagramIcon from '../assets/img/instagram.png'
import twitterIcon from '../assets/img/twitter.png'

import Parsonal from '~/components/Parsonal.vue'

export default {
  components: {
    Parsonal,
  },
    props: {
    fbUrl: String,
    instaUrl: String
  },
  data() {
    return {
      snsArray: [
        {url: this.fbUrl, icon: facebookIcon},
        {url: this.instaUrl, icon: instagramIcon},
      ]
    }
  }
}
</script>

<style lang="scss">
.sns-icons {
  margin: 2vh 0 0 0;
  padding: 0;
  list-style-type: none;
  display: flex;
  justify-content: center;
  flex-basis: 40%;

    &__list {
      margin: 0 5vw 0 0;
        &:last-child {
          margin: 0;
        }
    }

    &__link {
      width: 100%;
      height: 100%;
      display: block;
    }

    &__image {
    width: 10vw;
    vertical-align: bottom;
  }
}

</style>