<template>
    <div class="gallery-page">
        <Header />
        <main class="gallery-container">
            <h1>Photo Gallery</h1>
            <div class="photo-grid">
                <div v-for="(photo, index) in photos" :key="index" class="photo-item">
                    <a :href="photo.fbLink" target="_blank" rel="noopener noreferrer">
                        <img :src="photo.imageUrl" :alt="photo.description" loading="lazy">
                        <p class="photo-description">{{ photo.description }}</p>
                    </a>
                </div>
            </div>
        </main>
        <Footer />
    </div>
</template>

<script setup>
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'

const photos = [
    {
        imageUrl: '/gallery/event1.jpg',
        description: 'Annual Bosnian Festival 2023',
        fbLink: 'https://facebook.com/bosnianclubwindsor/posts/123'
    },
    {
        imageUrl: '/gallery/event2.jpg',
        description: 'Community Gathering',
        fbLink: 'https://facebook.com/bosnianclubwindsor/posts/124'
    },
    // Add more photos as needed
]
</script>

<style scoped>
.gallery-container {
    max-width: 1200px;
    margin: 2rem auto;
    padding: 0 1rem;
}

.photo-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 2rem;
    padding: 2rem 0;
}

.photo-item {
    transition: transform 0.3s ease;
}

.photo-item:hover {
    transform: scale(1.05);
}

.photo-item img {
    width: 100%;
    height: 250px;
    object-fit: cover;
    border-radius: 8px;
}

.photo-description {
    margin-top: 0.5rem;
    text-align: center;
    color: #333;
}

h1 {
    text-align: center;
    color: #333;
    margin-bottom: 2rem;
}
</style>