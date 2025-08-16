<template>
  <main class="home" role="main" aria-labelledby="home-heading">
    <section class="hero">
      <div class="hero-inner container">
        <img
          v-if="logoSrc"
          :src="logoSrc"
          alt="Bosnian Club of Windsor logo"
          class="logo"
        />
        <h1 id="home-heading">Bosnian Club of Windsor</h1>
        <p class="tagline">
          Celebrating Bosnian culture, community, and remembrance in Windsor.
        </p>

        <p class="lead">
          We host events, fundraisers, and memorials that strengthen ties between
          people of Bosnian heritage and the wider Windsor community.
        </p>

        <div class="cta-row" role="region" aria-label="Primary actions">
          <a class="btn btn-primary" href="#about" @click.prevent="scrollToAbout">
            Learn about the club
          </a>

          <a
            class="btn btn-outline"
            :href="donateUrl"
            target="_blank"
            rel="noopener noreferrer"
          >
            Donate
          </a>
        </div>
      </div>
    </section>

    <section id="about" class="about container" aria-labelledby="about-heading">
      <h2 id="about-heading">A short introduction</h2>
      <p>
        The Bosnian Club of Windsor preserves and promotes Bosnian cultural
        heritage through community gatherings, cultural programming, and
        charitable activities. This single-page site is a portfolio piece
        showing a simple, modern presentation of the club's public identity.
      </p>

      <ul class="quick-list" aria-hidden="false">
        <li><strong>Community</strong>: Cultural meetups and social gatherings</li>
        <li><strong>Support</strong>: Fundraisers that help community causes</li>
        <li><strong>Remembrance</strong>: Memorials that honour those we remember</li>
      </ul>
    </section>

    <footer class="home-footer container" role="contentinfo">
      <small>
        © Bosnian Club of Windsor — All rights reserved.
      </small>
    </footer>
  </main>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const logoSrc = ref<string | null>(null);
/*
  [Optional]
  If you have a logo image, set logoSrc.value = '/assets/logo.png'
  or import it: import logo from '@/assets/logo.png'; logoSrc.value = logo;
*/

const donateUrl = '/#'; // [Optional] replace with real donate link if you have one

function scrollToAbout() {
  const el = document.getElementById('about');
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
}
</script>

<style scoped>
.home {
  padding-bottom: 60px;
  color: var(--color-letter);
  background: var(--color-background);
}

/* HERO */
.hero {
  padding: 64px 0;
  background: linear-gradient(180deg, rgba(4,60,147,0.06), transparent 60%);
  border-bottom: 1px solid rgba(55,86,124,0.06);
}

.hero-inner {
  text-align: left;
  display: grid;
  gap: 18px;
  align-items: center;
}

.logo {
  width: 96px;
  height: auto;
  border-radius: 8px;
  box-shadow: 0 6px 20px rgba(4,60,147,0.08);
  margin-bottom: 6px;
}

/* Typography */
h1 {
  font-size: 2.25rem;
  margin: 0;
  color: var(--color-primary);
  letter-spacing: -0.02em;
}

.tagline {
  margin: 6px 0 0;
  font-size: 1rem;
  color: var(--color-letter);
  opacity: 0.95;
  font-weight: 600;
}

.lead {
  margin-top: 12px;
  color: var(--color-letter);
  font-size: 1.05rem;
  max-width: 70ch;
}

/* CTA */
.cta-row {
  margin-top: 18px;
  display: flex;
  gap: 12px;
  align-items: center;
}

.btn {
  display: inline-block;
  padding: 10px 16px;
  border-radius: 10px;
  font-weight: 700;
  font-size: 0.95rem;
  text-decoration: none;
}

.btn-primary {
  background-color: var(--color-primary);
  color: var(--color-background);
  box-shadow: 0 6px 18px rgba(4,60,147,0.12);
}

.btn-outline {
  background: transparent;
  color: var(--color-primary);
  border: 2px solid var(--color-primary);
}

.btn-outline:hover,
.btn-primary:hover {
  transform: translateY(-2px);
  transition: transform 160ms ease;
}

/* ABOUT */
.about {
  padding: 48px 0;
}

.about h2 {
  color: var(--color-primary);
  margin-bottom: 12px;
  font-size: 1.5rem;
}

.quick-list {
  margin-top: 12px;
  padding-left: 18px;
  color: var(--color-letter);
  list-style: none;
}

.quick-list li {
  padding: 6px 0;
  position: relative;
  padding-left: 18px;
}

/* subtle bullet using secondary color */
.quick-list li::before {
  content: '';
  width: 8px;
  height: 8px;
  background: var(--color-secondary);
  border-radius: 2px;
  display: inline-block;
  position: absolute;
  left: 0;
  top: 9px;
}

/* Footer */
.home-footer {
  padding-top: 24px;
  color: rgba(55,86,124,0.7);
  border-top: 1px solid rgba(55,86,124,0.06);
  margin-top: 24px;
  padding-bottom: 24px;
  text-align: left;
}

@media (min-width: 900px) {
  .hero-inner {
    grid-template-columns: 1fr 420px;
    align-items: start;
  }
  .lead {
    margin-top: 6px;
  }
}
</style>
