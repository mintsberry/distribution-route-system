<template>
  <div class="home">
    <header>
      <HomeHeader @clickCacl = "cacl"/>
    </header>
    <div class="container">
      <aside>
        <HomeSider/>
      </aside>
      <main>
        <HomeCanvas/>
      </main>
    </div>
    <Drawer ref="drawer"></Drawer>
  </div>
</template>

<script>
import HomeHeader from '../components/homehader/HomeHeader.vue'
import HomeSider from '../components/homesider/HomeSider.vue'
import HomeCanvas from '../components/homecanvas/HomeCanvas.vue'
import Drawer from '../components/drawer/Drawer.vue'
import { mapActions } from 'vuex'
export default {
  components: {
    HomeHeader,
    HomeSider,
    HomeCanvas,
    Drawer
  },
  methods: {
    cacl () {
      this.caclPath()
      this.$refs.drawer.show()
    },
    ...mapActions([
      'caclPath'
    ])
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
      width: 260px;
      flex: 0 0 260px;
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
