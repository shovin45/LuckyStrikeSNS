<template lang="pug">
  header.header
      //h1.header__title Lucky Strike
      img.header__title(src="~/assets/svg/lucky-beer.svg" alt="")
      img.header__image(src="../assets/img/lucky-strike_main.png" alt="")
</template>

<script>
export default {
  
}
</script>

<style lang="scss">
.header {
  width: 100%;
  position: relative;

    &__title {
    position: absolute;
    top: 3vh;
    right: 3vw;
    color: #fff;
    font-size: 12vw;
    font-family: 'Londrina Sketch', cursive;
    letter-spacing: 0.6vw;
    width: 42%;
    transform: rotate(30deg);
    }

    &__image {
      width: 100%;
      vertical-align: bottom;
    }
}


</style>