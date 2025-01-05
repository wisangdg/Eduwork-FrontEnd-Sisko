<template>
  <header>
    <div class="header-container">
      <img src="../../public/logo.jpg" class="logo" alt="Hijja Logo" />
      <div class="header">
        <div class="header-top">
          <h1>Hijja Indonesia</h1>
          <div class="header-icons">
            <i class="fas fa-search"></i>
            <p class="separator">|</p>
            <i class="fas fa-shopping-cart"></i>
          </div>
        </div>
        <nav>
          <ul>
            <li>
              <router-link to="/"><span class="home">HOME</span></router-link>
            </li>
            <li>
              <router-link to="/brand">BRAND</router-link>
            </li>
            <li>
              <router-link to="/information">INFORMATION</router-link>
            </li>
            <li>
              <router-link to="/blog">BLOG</router-link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "HeaderApp",
  data() {
    return {
      title: "My App",
    };
  },
};
</script>

<style scoped>
@import url(https://db.onlinewebfonts.com/c/652abdd0c4a7b4d92278d981ff2d9d67?family=Dear+Prudence+Regular);
@import url("https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap");
@import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css");

.header-container {
  display: flex;
  align-items: flex-start;
  padding: 0px;
  background-color: #fff;
  margin-bottom: auto;
  margin-top: -50px;
  padding: 0;
}

.logo {
  width: auto;
  height: 90px;
  margin-top: 0;
  margin-right: 30px;
  margin-left: 95px;
}

.header {
  flex: 1;
  padding: 30px;
  margin-top: -30px;
}

.header-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
  border-bottom: 1px solid #ddd;
  width: 95%;
}

.header-icons {
  display: flex;
  gap: 20px;
  align-items: center;
}

.header-icons i {
  font-size: 30px;
  cursor: pointer;
  color: #333;
}

.separator {
  font-size: 30px; /* Adjust to match icon size */
  color: #333;
  margin: 0;
  line-height: 1;
  font-weight: 100;
}

.montserrat-regular {
  font-family: "Montserrat", serif;
  font-optical-sizing: auto;
  font-weight: 100;
  font-style: normal;
}

h1 {
  margin-top: 0;
  font-family: "Dear Prudence Regular";
  font-size: 25px;
  margin-bottom: 0;
}

.home {
  color: #c99947;
}

nav ul {
  display: flex;
  list-style: none;
  padding: 0;
  margin: 0;
}

nav li {
  margin-right: 60px;
  font-family: Montserrat;
  font-size: 15px;
  cursor: pointer;
  padding-top: 20px;
}

nav li:last-child {
  margin-right: 0;
}

router-link {
  text-decoration: none;
  color: #333;
  transition: color 0.3s ease;
}

router-link:hover {
  color: #666;
}
</style>
