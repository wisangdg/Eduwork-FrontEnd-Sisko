<template>
  <hero class="hero-container">
    <div class="hero">
      <img src="../../public/HeroSection.jpg" class="hero-img" />
    </div>
    <div class="ads-banner">
      <div class="ads">
        <img src="../../public/ads.jpg" class="ads-img" />
      </div>
      <div class="ads">
        <img src="../../public/ads2.jpg" class="ads-img" />
      </div>
      <div class="ads">
        <img src="../../public/ads3.jpg" class="ads-img" />
      </div>
    </div>
  </hero>
</template>

<script></script>

<style scoped>
.hero-container {
  margin: 0;
  padding: 0;
  width: 100%;
}

.hero {
  margin: 0;
  padding: 0;
  width: 100%;
}

.hero-img {
  width: 100%;
  height: 600px;
  object-fit: cover;
  padding: 0;
  margin: 0;
}

.ads-banner {
  justify-content: center;
  display: flex;
  width: 95%;
  margin: 0 auto;
  padding: 0;
}

.ads {
  margin: 0 20px;
  padding: 0;
  width: 33, 33%;
}

.ads-img {
  flex-direction: column;
  height: 320px;
  width: 100%;
  object-fit: cover;
  margin-top: 80px;
  cursor: pointer;
}
</style>
