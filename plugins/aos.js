import Vue from 'vue'
import AOS from 'aos'
import 'aos/dist/aos.css'

export default ({ app }) => {
  app.AOS = new AOS.init({
    duration: 800
  })
}

Vue.mixin({
  watch: {
    '$route.path': function () {
      setTimeout(() => {
        AOS.refresh()
      }, 500)
    }
  }
})