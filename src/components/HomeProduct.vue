<template>
  <div class="main-container">
    <div class="breadcrumb">
      <h1><span class="breadcrumb__home">Home</span> / Categories</h1>
    </div>

    <section class="products">
      <div class="products__grid">
        <div class="product-card" v-for="post in posts" :key="post.id">
          <img :src="post.photo" :alt="post.name" class="product-card__image" />
          <h2 class="product-card__name">{{ post.name.toUpperCase() }}</h2>
          <p class="product-card__price">Rp.{{ post.price }}</p>
          <h3 class="product-card_addCart">ADD TO CART</h3>
        </div>
      </div>
    </section>
    <div>
      <h3 class="product-more">load more</h3>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      posts: [],
    };
  },
  created() {
    this.fetchData();
  },
  methods: {
    async fetchData() {
      try {
        const response = await fetch(
          "https://sistemtoko.com/public/demo/product?page=1&sorting=Lates&categories=all&search_name=none"
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        this.posts = data.aaData;
      } catch (error) {
        console.error("Terjadi kesalahan:", error);
      }
    },
  },
};
</script>

<style scoped>
.main-container {
  max-width: 1450px;
  margin: 0 auto;
  padding: 0;
}

.breadcrumb {
  display: flex;
  align-items: center;
  background-color: #f5f5f5;
  padding: 1rem 2rem;
  margin: 1.25rem 0;
  border-radius: 4px;
}

.breadcrumb h1 {
  font-size: 0.9rem;
  font-weight: 400;
  margin: 0;
}

.breadcrumb__home {
  color: #2c3e50;
  font-weight: 500;
  cursor: pointer;
  transition: color 0.2s ease;
}

.breadcrumb__home:hover {
  color: #42b983;
}

.products {
  margin-top: 2rem;
}

.products__grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
  padding: 1rem 0;
}

.product-card {
  display: flex;
  flex-direction: column;
  transition: transform 0.2s ease;
  overflow: hidden;
}

.product-card:hover {
  transform: translateY(-5px);
}

.product-card__image {
  width: 100%;
  height: 330px;
  object-fit: cover;
}

.product-card__name {
  font-size: 0.9rem;
  font-weight: 500;
  margin: 0.75rem;
  color: #2c3e50;
}

.product-card__price {
  font-size: 1rem;
  font-family: "Montserrat", sans-serif;
  margin: 0 0.75rem 0.75rem;
}

.product-card_addCart {
  font-size: 12px;
  font-weight: 500;
  width: 40%;
  font-family: "Montserrat", sans-serif;
  margin: 10px auto;
  padding: 1rem 0.8rem;
  background-color: black;
  color: #fff;
  cursor: pointer;
}

.product-more {
  background-color: #cb9d4e;
  font-size: 0.75rem;
  font-weight: 100;
  color: #fff;
  padding: 10px 50px;
  margin: 20px auto;
  width: 5%;
  border-radius: 25px;
  cursor: pointer;
}

@media (max-width: 768px) {
  .products__grid {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 1rem;
  }

  .product-card__image {
    height: 250px;
  }
}
</style>
