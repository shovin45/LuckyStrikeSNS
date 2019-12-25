<template lang="pug">
  div.parsonal
    thumbnail(:image-url="datas[n].imageUrl")
    div.name-sns
      name-text(:name-text="datas[n].name")
      sns-icon(:fb-url="datas[n].fbUrl" :insta-url="datas[n].instaUrl")
</template>

<script>
import Thumbnail from '~/components/Thumbnail.vue'
import NameText from '~/components/NameText.vue'
import SnsIcon from '~/components/SnsIcon.vue'

import Sary from '~/assets/img/prof-sary.png'
import Yusuke from '~/assets/img/prof-yusuke.png'
import Tomoki from '~/assets/img/prof-tomoki.png'
import Nakkun from '~/assets/img/prof-nakun.png'
import shovin from '~/assets/img/prof-shovin.png'

export default {
  components: {
    Thumbnail,
    NameText,
    SnsIcon,
  },
    data() {
      return {
        datas: [
        {
          name: 'SARY',
          imageUrl: Sary,
          fbUrl: 'https://www.facebook.com/yuya.s.asato',
          instaUrl: 'https://www.instagram.com/sary_luckystrike/',
        },
        {
          name: 'YUSUKE',
          imageUrl: Yusuke,
          fbUrl: 'https://www.facebook.com/yusuke.hara.792',
          instaUrl: 'https://www.instagram.com/yu_abandon/',
        },

        {
          name: 'TOMOKI',
          imageUrl: Tomoki,
          fbUrl: 'https://www.facebook.com/tomokitoyuzu',
          instaUrl: 'https://www.instagram.com/fukuda_tomoki_abandon/',
        },
        {
          name: 'なっくん',
          imageUrl: Nakkun,
          fbUrl: 'https://www.facebook.com/CourseK08',
          instaUrl: 'https://www.instagram.com/coursek08/',
        },
        {
          name: 'shovin',
          imageUrl: shovin,
          fbUrl: 'https://www.facebook.com/shogo.yasumura',
          instaUrl: 'https://www.instagram.com/shovin_45/',
        },
      ]
      }
  },
  props: {
    n: Number
  }

}
</script>

<style lang="scss">
.parsonal {
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 5vh 0 0 0;
}
.name-sns {
  flex-basis: 50%;
}
</style>