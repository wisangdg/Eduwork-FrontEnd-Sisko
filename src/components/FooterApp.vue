<template>
  <footer class="footer-container">
    <div class="footer-section footer-contact">
      <h1 class="section-title">Talk to Us Now !</h1>
      <h2 class="section-heading">CONTACT US</h2>
      <h3 class="section-text">
        Jl. Palagan km 10 Rejodani, Ngaglik Sleman<br />
        Yogyakarta
      </h3>
      <p class="contact-phone">0877-3821-0660</p>
    </div>

    <div class="footer-section footer-services">
      <h1 class="section-title">Talk to Us Now !</h1>
      <h2 class="section-heading">OUR SERVICES</h2>
      <h3 class="section-text">CARA PEMBELIAN</h3>
      <h3 class="section-text">FAQ</h3>
      <h3 class="section-text">KONFIRMASI PEMBAYARAN</h3>
      <h3 class="section-text">TENTANG HIJJA</h3>
      <h3 class="section-text">SYARAT & KETENTUAN</h3>
      <h3 class="section-text">PENGAMBILAN DAN PENUKARAN</h3>
      <p class="copyright">
        supported by <span class="highlight">www.sistemtoko.com</span> Allright
        reserved
      </p>
    </div>

    <div class="footer-section footer-social">
      <h1 class="section-title">Talk to Us Now !</h1>
      <h2 class="section-heading">FOLLOW US</h2>
      <div class="social-icons">
        <a href="#" class="social-link">
          <i class="fab fa-facebook-f" id="icon"></i>
        </a>
        <a href="#" class="social-link">
          <i class="fab fa-twitter" id="icon"></i>
        </a>
        <a href="#" class="social-link">
          <i class="fab fa-instagram" id="icon"></i>
        </a>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "FooterApp",
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap");

.footer-container {
  display: flex;
  justify-content: space-between; /* Mengubah dari space-evenly ke space-between */
  background-color: black;
  width: 100%;
  font-family: "Montserrat", sans-serif;
  padding: 40px 80px; /* Menambah padding container untuk spacing yang lebih baik */
  box-sizing: border-box; /* Memastikan padding tidak menambah width */
}

.footer-section {
  display: flex;
  flex-direction: column;
  flex: 1; /* Membuat setiap section memiliki lebar yang sama */
  max-width: 300px; /* Membatasi lebar maksimal */
  padding: 0 20px; /* Padding horizontal untuk spacing antar section */
  color: white;
}

.section-title {
  font-size: 14px;
  font-style: italic;
  color: #c99947;
  font-weight: 400;
  margin: 0 0 15px 0; /* Menyesuaikan margin */
}

.section-heading {
  font-size: 18px;
  font-weight: 400;
  color: white;
  margin: 0 0 20px 0; /* Menyesuaikan margin */
}

.section-text {
  font-size: 14px;
  font-weight: 400;
  color: #888888;
  margin: 8px 0; /* Menyeragamkan margin antar text */
  transition: color 0.3s ease; /* Animasi hover */
}

.section-text:hover {
  color: #c99947; /* Efek hover */
  cursor: pointer;
}

.contact-phone,
.copyright {
  color: #888888;
  margin: 8px 0; /* Menyeragamkan margin */
}
.contact-phone {
  color: #fff;
  font-size: 20px;
}

.copyright {
  margin-top: 50px;
  font-size: 11px;
}

.highlight {
  color: #c99947;
}
.social-icons {
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-top: 10px;
}

#icon {
  margin: 10px;
}

.social-link {
  color: #010101;
  font-size: 30px;
  text-decoration: none;
  transition: color 0.3s ease;
  background-color: white;
  width: 50px;
  height: 50px;
  border-radius: 50%;
}

.social-link:hover {
  color: #c99947;
}

/* Responsive Design */
@media screen and (max-width: 768px) {
  .footer-container {
    flex-direction: column;
    align-items: center;
    padding: 40px 20px; /* Mengurangi padding di mobile */
  }

  .footer-section {
    margin: 0 0 40px 0; /* Spacing antar section di mobile */
    padding: 0;
    text-align: center;
    max-width: 100%; /* Full width di mobile */
  }

  .footer-section:last-child {
    margin-bottom: 0; /* Menghilangkan margin bottom di section terakhir */
  }
}
</style>
