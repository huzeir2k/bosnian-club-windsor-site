<template>
  <main class="contact container" role="main" aria-labelledby="contact-heading">
    <h1 id="contact-heading">Contact Us</h1>

    <p class="blurb">
      Reach out to the Bosnian Club of Windsor for membership, volunteering,
      event questions, or general inquiries.
    </p>

    <ul class="contact-list" role="list">
      <li class="contact-item">
        <span class="label">Facebook</span>
        <a :href="facebookUrl" target="_blank" rel="noopener noreferrer" class="link">
          Visit our Facebook page
        </a>
      </li>

      <li class="contact-item">
        <span class="label">Phone</span>
        <a :href="`tel:${phoneRaw}`" class="link">{{ phoneDisplay }}</a>
      </li>

      <li class="contact-item">
        <span class="label">Email</span>
        <a :href="`mailto:${email}`" class="link">{{ email }}</a>
      </li>
    </ul>

    <footer class="home-footer container" role="contentinfo">
      <small>
        © Bosnian Club of Windsor — All rights reserved.
      </small>
    </footer>
  </main>
</template>

<script setup lang="ts">
import { ref } from 'vue';

/*
  [Unverified] Replace these placeholder values with the club's verified details.
  - facebookUrl: full URL to Facebook page
  - phoneRaw: digits-only string for tel: (e.g., "15195551234")
  - phoneDisplay: human readable (e.g., "(519) 555-1234")
  - email: public club email (e.g., "info@bosnianclubwindsor.org")
*/
const facebookUrl = ref<string>('https://www.facebook.com/bhklub'); // placeholder
const phoneRaw = ref<string>('123456789'); // placeholder digits only
const phoneDisplay = ref<string>('(519) 456-7890'); // placeholder display
const email = ref<string>('bosnianclubwindsor@gmail.com'); // placeholder
</script>

<style scoped>
.contact {
  padding: 48px 0;
  color: var(--color-letter);
  background: var(--color-background);
}

h1 {
  margin: 0 0 12px 0;
  color: var(--color-primary);
  font-size: 2rem;
}

.blurb {
  margin: 0 0 18px 0;
  color: var(--color-letter);
}

.contact-list {
  list-style: none;
  padding: 0;
  margin: 0 0 16px 0;
  display: grid;
  gap: 12px;
  max-width: 520px;
}

.contact-item {
  display: flex;
  gap: 12px;
  align-items: baseline;
  padding: 12px;
  border-radius: 10px;
  background: #fff;
  border: 1px solid rgba(55,86,124,0.06);
  box-shadow: 0 6px 18px rgba(4,60,147,0.03);
}

.label {
  min-width: 80px;
  font-weight: 700;
  color: var(--color-primary);
}

.link {
  color: var(--color-primary);
  text-decoration: none;
  font-weight: 600;
}

.link:hover {
  color: var(--color-secondary);
  text-decoration: underline;
}

.note {
  margin-top: 12px;
  font-size: 0.9rem;
  color: rgba(55,86,124,0.75);
}
</style>
