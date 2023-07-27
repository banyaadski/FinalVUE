<template>
  <div id="app">
    <div class="header package">
      <div class="header_left">
        <a href="#"><img src="../src/assets/img/Logo.svg" alt="logo"></a>
        <a class="header_left_logoText" href="#">Interno</a>
      </div>
      <div class="header_right">
        <a class="header_right_naviText" href="#">Home</a>
        <a class="header_right_naviText" href="#">Project</a>
        <a class="header_right_naviText" href="#">Blog</a>
        
        
      </div>
    </div>
    <div class="banner package">
      <img src="../src/assets/img/Banner ourProj.jpg" alt="">
      

      
    </div>
    <nav>

      <router-link class="btn" to="/kitchen">Kitchen</router-link>
      <router-link class="btn" to="/guestroom">Guestroom</router-link>
      <router-link class="btn" to="/bedroom">Bedroom</router-link>
      <router-link class="btn" to="/bathroom">Bathroom</router-link>
    </nav>
    <router-view />
    <div class="basement package">
      <div class="basement_section_left">
        <div class="basement_section_text">
          <img src="../src/assets/img/Logo.svg" alt="logo">
          <h1 class="basement_section_infoText">Interno</h1>
        </div>
        <p class="basement_section_description">It is a long established fact that a reader will be distracted
          lookings.</p>
        <div class="basement_section_network">
          <a class="basement_section_network_link" href="#"><img src="../src/assets/img/twit.svg" alt="twitter"></a>
          <a class="basement_section_network_link" href="#"><img src="../src/assets/img/in.svg" alt="in"></a>
        </div>
      </div>
      <div class="basement_section_centre">
        <h3 class="basement_section_infoText_add">Pages</h3>
        <a class="basement_section_link" href="#">Home</a>
        <a class="basement_section_link" href="#">Project</a>
        <a class="basement_section_link" href="#">Blog</a>

      </div>
      <div class="basement_section_right">
        <h3 class="basement_section_infoText_add">
          Contact
        </h3>
        <p class="basement_section_adress">55 East Birchwood Ave. Brooklyn, New York 11201</p>
        <p class="basement_section_adress">contact@interno.com</p>
        <p class="basement_section_adress">(123) 456 - 7890</p>

      </div>
    </div>


  </div>
</template>

<script>


export default {
  name: 'App',
  components: {

  },
  data() {

  },
  created() {
    this.$route.push({ name: 'Kitchen' })
  }
}
</script>

<style lang="scss">
.package {
  padding-left: calc(50% - 570px);
  padding-right: calc(50% - 570px);
}

* {
  margin: 0;
  padding: 0;
}

a {
  text-decoration: none;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.btn {
  width: 219px;
  height: 75px;
  padding: 9px 30px 9px 30px;
  border-radius: 18px;
  gap: 10px;
  font-family: Jost;
  font-size: 18px;
  font-weight: 600;
  line-height: 23px;
  letter-spacing: 0.02em;
  text-align: center;
  background-color: #CDA274;
  color: #FFFFFF;

}

.header {
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  top: 53px;
  margin-bottom: 90px;

  &_left {
    position: relative;
    width: 133px;
    height: 50px;
    top: 0px;
    display: flex;
    justify-content: space-between;

    &_logoText {
      font-family: 'DM Serif Display';
      font-style: normal;
      font-weight: 400;
      font-size: 40px;
      line-height: 125%;
      color: #292F36;
      padding-left: 10px;

    }
  }

  &_right {
    position: relative;
    width: 243px;
    height: 25px;
    // left: 53px;
    top: 0px;
    display: flex;
    justify-content: space-between;

    &_naviText {
      font-family: 'Jost';
      font-style: normal;
      font-weight: 400;
      font-size: 20px;
      line-height: 125%;
      color: #292F36;
    }
  }
}

.banner {
  display: flex;
  justify-content: space-evenly;
  margin-bottom: 100px;
}

.basement {
  display: flex;
  justify-content: space-between;

  &_section {
    &_left {
      display: flex;
      flex-direction: column;
      gap: 30px;
    }

    &_description {
      width: 393px;
      height: 66px;
      color: #4D5053;
      font-family: 'Jost';
      font-style: normal;
      font-weight: 400;
      font-size: 22px;
    }

    &_text {
      display: flex;
      align-items: center;
      flex-direction: row;
      gap: 10px;
    }

    &_infoText {
      width: 133px;
      height: 50px;
      left: 44px;
      top: 0px;

      font-family: 'DM Serif Display';
      font-style: normal;
      font-weight: 400;
      font-size: 40px;

      &_add {
        width: 87px;
        height: 31px;

        font-family: 'DM Serif Display';
        font-style: normal;
        font-weight: 400;
        font-size: 25px;
      }
    }

    &_link {
      width: 72px;
      height: 198px;
      color: #4D5053;
      font-family: 'Jost';
      font-style: normal;
      font-weight: 400;
      font-size: 22px;
    }

    &_adress {
      width: 258px;
      // height: 215px;
      color: #4D5053;
      font-family: 'Jost';
      font-style: normal;
      font-weight: 400;
      font-size: 22px;
    }

    &_right {
      display: flex;
      flex-direction: column;
      gap: 15px;
    }
  }

}
</style>
