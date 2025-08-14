<template>
    <header class="header">
        <nav class="nav-container">
            <router-link to="/" class="logo">
                Bosnian Club Windsor
            </router-link>

            <div class="nav-links">
                <router-link to="/" class="nav-link">
                    {{ $t('nav.home') }}
                </router-link>
                <router-link to="/about" class="nav-link">
                    {{ $t('nav.about') }}
                </router-link>
                <router-link to="/contact" class="nav-link">
                    {{ $t('nav.contact') }}
                </router-link>
                <router-link to="/donate" class="nav-link">
                    {{ $t('nav.donate') }}
                </router-link>
                <router-link to="/events" class="nav-link">
                    {{ $t('nav.events') }}
                </router-link>
                <router-link to="/gallery" class="nav-link">
                    {{ $t('nav.gallery') }}
                </router-link>
                <router-link to="/membership" class="nav-link">
                    {{ $t('nav.membership') }}
                </router-link>
                <router-link to="/resources" class="nav-link">
                    {{ $t('nav.resources') }}
                </router-link>
            </div>

            <!-- <LanguageToggle /> -->
        </nav>
    </header>
</template>

<script>
// import LanguageToggle from './LanguageToggle.vue'

export default {
    name: 'Header',
    components: {
        // LanguageToggle
    }
}
</script>

<style scoped>
.header {
    padding: 1rem;
    background-color: #fff;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.nav-container {
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.logo {
    font-size: 1.5rem;
    font-weight: bold;
    text-decoration: none;
    color: #333;
}

.nav-links {
    display: flex;
    gap: 2rem;
}

.nav-link {
    text-decoration: none;
    color: #333;
    font-weight: 500;
    transition: color 0.2s;
}

.nav-link:hover {
    color: #007bff;
}

@media (max-width: 768px) {
    .nav-container {
        flex-direction: column;
        gap: 1rem;
    }
    
    .nav-links {
        flex-direction: column;
        align-items: center;
        gap: 1rem;
    }
}
</style>