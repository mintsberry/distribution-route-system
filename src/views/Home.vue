<template>
  <div class="home">
    <header>
      <HomeHeader/>
    </header>
    <div class="container">
      <aside>
        <HomeSider/>
      </aside>
      <main>
        <HomeCanvas/>
      </main>
    </div>
  </div>
</template>

<script>
import HomeHeader from '../components/homehader/HomeHeader.vue'
import HomeSider from '../components/homesider/HomeSider.vue'
import HomeCanvas from '../components/homecanvas/HomeCanvas.vue'
export default {
  components: {
    HomeHeader,
    HomeSider,
    HomeCanvas
  }
}
</script>
<style lang="scss" scoped>
.home {
  header {
    height: 64px;
    // background-color: lightblue;
  }
  .container {
    position: fixed;
    top: 64px;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    aside {
      width: 240px;
      flex: 0 0 240px;
      height: 100%;
    }
    main {
      flex: 1;
      background-color: #FCFBFE;
      height: 100%;
    }
  }
}
</style>
