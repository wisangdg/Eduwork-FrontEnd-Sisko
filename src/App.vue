<template>
  <HeaderApp />
  <HeroSection />
  <HomeProduct />
  <FooterApp />
</template>

<script>
import HeaderApp from "./components/HeaderApp.vue";
import HeroSection from "./components/HeroSection.vue";
import HomeProduct from "./components/HomeProduct.vue";
import FooterApp from "./components/FooterApp.vue";

export default {
  name: "App",
  components: {
    HeaderApp,
    HeroSection,
    HomeProduct,
    FooterApp,
  },
};
</script>

<style>
body,
html {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
