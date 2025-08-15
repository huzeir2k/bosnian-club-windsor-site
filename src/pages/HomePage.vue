<template>
  <div class="club-page">

    <!-- Language Toggle -->
    <LanguageToggle @language-change="changeLanguage" />

    <!-- Header -->
    <Header />

    <!-- Hero Section -->
    <section class="hero">
      <div class="hero-content">
        <h1>Welcome to Our Club</h1>
        <p>Experience elegance, tradition, and community like never before.</p>
        <router-link to="/membership" class="cta-btn">Join Us</router-link>
      </div>
    </section>

    <!-- Main Content -->
    <div class="main-content">
      <router-view></router-view>
    </div>

    <!-- Footer -->
    <Footer />
  </div>
</template>

<script>
import Header from '../components/Header.vue';
import Footer from '../components/Footer.vue';
import LanguageToggle from '../components/LanguageToggle.vue';

export default {
  name: 'Index',
  components: {
    Header,
    Footer,
    LanguageToggle
  }
}
</script>

<style scoped>
.club-page {
  background-color: #fff;
  font-family: 'Georgia', serif;
  color: #000;
}

/* Nav Bar */
.nav-bar {
  background-color: #003897;
  padding: 15px 0;
  text-align: center;
}
.nav-bar ul {
  list-style: none;
  padding: 0;
  margin: 0;
}
.nav-bar li {
  display: inline-block;
  margin: 0 15px;
}
.nav-bar a {
  color: #fff;
  text-decoration: none;
  font-weight: bold;
  position: relative;
  padding-bottom: 4px;
}
.nav-bar a::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: 0;
  width: 0%;
  height: 2px;
  background-color: #FBC11D;
  transition: width 0.3s ease;
}
.nav-bar a:hover::after {
  width: 100%;
}

/* Hero Section */
.hero {
  background: linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)),
              url('/images/club-hero.jpg') center/cover no-repeat;
  color: white;
  text-align: center;
  padding: 120px 20px;
}
.hero h1 {
  font-size: 3rem;
  margin-bottom: 15px;
  color: #FBC11D;
}
.hero p {
  font-size: 1.25rem;
  max-width: 700px;
  margin: 0 auto 25px;
}
.cta-btn {
  background-color: #FBC11D;
  color: #000;
  padding: 12px 28px;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 1px;
  text-decoration: none;
  transition: background 0.3s ease;
}
.cta-btn:hover {
  background-color: #d4a514;
}

/* Main Content */
.main-content {
  padding: 40px 20px;
}

/* Responsive */
@media (max-width: 768px) {
  .nav-bar li {
    display: block;
    margin: 10px 0;
  }
  .hero h1 {
    font-size: 2rem;
  }
}
</style>
