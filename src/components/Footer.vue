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
  background-color: #1a1a1a;
  color: #cccccc;
  border-top: 1px solid #333;
  font-family: Arial, sans-serif;
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
  gap: 40px;
}

.footer-column h3 {
  color: #ffffff;
  margin-bottom: 10px;
  font-size: 1.2rem;
}

.footer-column ul {
  list-style: none;
  padding: 0;
}

.footer-column ul li {
  margin-bottom: 8px;
}

.footer-column ul li a {
  color: #cccccc;
  text-decoration: none;
  transition: color 0.2s ease-in-out;
}

.footer-column ul li a:hover {
  color: #ffffff;
}

.contact-card {
  background-color: #262626;
  padding: 20px;
  border-radius: 6px;
  flex: 1;
  min-width: 250px;
}

.contact-card h3 {
  color: #ffffff;
  margin-bottom: 10px;
}

.footer-bottom {
  background-color: #111111;
  color: #777777;
  text-align: center;
  padding: 15px;
  font-size: 0.9rem;
  border-top: 1px solid #222;
}

@media (max-width: 768px) {
  .footer-container {
    flex-direction: column;
  }
  .footer-links {
    flex-direction: column;
  }
}
</style>
