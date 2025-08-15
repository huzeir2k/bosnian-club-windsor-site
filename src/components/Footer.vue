<template>
  <footer class="footer">
    <div class="footer-container">
      <!-- Navigation Links -->
      <div class="footer-links">
        <div class="footer-column">
          <h3>Navigation</h3>
          <ul>
            <li><router-link to="/">Home</router-link></li>
            <li><router-link to="/about">About</router-link></li>
            <li><router-link to="/events">Events</router-link></li>
            <li><router-link to="/gallery">Gallery</router-link></li>
          </ul>
        </div>

        <div class="footer-column">
          <h3>Get Involved</h3>
          <ul>
            <li><router-link to="/membership">Membership</router-link></li>
            <li><router-link to="/donate">Donate</router-link></li>
            <li><router-link to="/resources">Resources</router-link></li>
            <li><router-link to="/contact">Contact</router-link></li>
          </ul>
        </div>
      </div>

      <!-- Contact Card -->
      <div class="contact-card">
        <h3>Contact Us</h3>
        <p><strong>Address:</strong> 123 Main St, Windsor, ON</p>
        <p><strong>Phone:</strong> (555) 123-4567</p>
        <p><strong>Email:</strong> info@example.com</p>
      </div>
    </div>

    <!-- Copyright -->
    <div class="footer-bottom">
      &copy; {{ currentYear }} Your Organization Name. All Rights Reserved.
    </div>
  </footer>
</template>

<script>
export default {
  name: "AppFooter",
  data() {
    return {
      currentYear: new Date().getFullYear(),
    };
  },
};
</script>

<style scoped>
.footer {
  background-color: #fff;
  color: #000;
  font-family: 'Georgia', serif;
  border-top: 2px solid #003897;
}

.footer-container {
  display: flex;
  flex-wrap: wrap;
  max-width: 1200px;
  margin: auto;
  padding: 40px 20px;
  gap: 40px;
}

.footer-links {
  display: flex;
  flex: 2;
  gap: 60px;
}

.footer-column h3 {
  color: #003897;
  margin-bottom: 15px;
  font-size: 1.2rem;
  font-weight: bold;
}

.footer-column ul {
  list-style: none;
  padding: 0;
}

.footer-column ul li {
  margin-bottom: 10px;
}

.footer-column ul li a {
  display: inline-block;
  padding: 6px 12px;
  color: #000;
  text-decoration: none;
  border-radius: 20px;
  transition: all 0.3s ease;
}

.footer-column ul li a:hover {
  background-color: #003897;
  color: #fff;
}

.contact-card {
  background-color: #fbc11d;
  padding: 20px;
  border-radius: 8px;
  flex: 1;
  min-width: 250px;
  color: #000;
}

.contact-card h3 {
  margin-bottom: 10px;
}

.footer-bottom {
  background-color: #003897;
  color: #fff;
  text-align: center;
  padding: 15px;
  font-size: 0.9rem;
  margin-top: 20px;
}

@media (max-width: 768px) {
  .footer-container {
    flex-direction: column;
    gap: 30px;
  }
  .footer-links {
    flex-direction: column;
    gap: 20px;
  }
}
</style>

