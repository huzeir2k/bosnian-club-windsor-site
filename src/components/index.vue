<template>
  <div>

    <LanguageToggle @language-change="changeLanguage" />

    <!-- Header Component -->
    <Header />
    
    <!-- Navigation Bar -->
    <nav>
      <ul>
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/events">Events</router-link></li>
        <li><router-link to="/about">About</router-link></li>
        <!-- Add more navigation links as needed -->
      </ul>
    </nav>

    <!-- Main Content Area -->
    <div class="main-content">
      <router-view></router-view>
    </div>

    <!-- Footer Component -->
    <Footer />
  </div>
</template>

<script>
import Header from './components/Header.vue'; // Import the Header component
import Footer from './components/Footer.vue'; // Import the Footer component
import LanguageToggle from './components/LanguageToggle.vue'; // Import the LanguageToggle component

export default {
  name: 'Index',
  components: {
    Header,
    Footer
  }
}
</script>

<style scoped>
/* Add your custom styles here */
nav {
  background-color: #333;
  color: #fff;
  padding: 10px;
}

nav ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
}

nav ul li {
  display: inline;
  margin-right: 20px;
}

nav ul li a {
  color: #fff;
  text-decoration: none;
}
</style>
