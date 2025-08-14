<template>
    <div class="resources-page">
        <Header />
        
        <main class="container mx-auto px-4 py-8">
            <h1 class="text-3xl font-bold mb-8">Community Resources in Windsor</h1>
            
            <section class="mb-8">
                <h2 class="text-2xl font-semibold mb-4">Employment Resources</h2>
                <ul class="list-disc pl-6 space-y-2">
                    <li><a href="https://www.citywindsor.ca/residents/Employment/Pages/Employment.aspx" target="_blank" class="text-blue-600 hover:underline">City of Windsor Employment Opportunities</a></li>
                    <li><a href="https://www.wetech-alliance.com/" target="_blank" class="text-blue-600 hover:underline">WEtech Alliance - Career Resources</a></li>
                    <li><a href="https://www.workforcewindsoressex.com/" target="_blank" class="text-blue-600 hover:underline">Workforce WindsorEssex</a></li>
                </ul>
            </section>

            <section class="mb-8">
                <h2 class="text-2xl font-semibold mb-4">Cultural Events & Festivals</h2>
                <ul class="list-disc pl-6 space-y-2">
                    <li><a href="https://www.citywindsor.ca/residents/Culture/Pages/Culture.aspx" target="_blank" class="text-blue-600 hover:underline">Windsor Culture & Events</a></li>
                    <li><a href="https://www.summerfestwindsor.org/" target="_blank" class="text-blue-600 hover:underline">Windsor Summer Festival</a></li>
                    <li><a href="https://www.multiculturalfestival.org/" target="_blank" class="text-blue-600 hover:underline">Carrousel of the Nations</a></li>
                </ul>
            </section>

            <section class="mb-8">
                <h2 class="text-2xl font-semibold mb-4">Community Services</h2>
                <ul class="list-disc pl-6 space-y-2">
                    <li><a href="https://www.citywindsor.ca/residents/Recreation/Pages/Recreation.aspx" target="_blank" class="text-blue-600 hover:underline">Recreation & Parks</a></li>
                    <li><a href="https://www.wechu.org/" target="_blank" class="text-blue-600 hover:underline">Windsor-Essex County Health Unit</a></li>
                    <li><a href="https://www.citywindsor.ca/residents/transitwindsor/" target="_blank" class="text-blue-600 hover:underline">Transit Windsor</a></li>
                </ul>
            </section>
        </main>

        <Footer />
    </div>
</template>

<script>
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'

export default {
    name: 'ResourcesPage',
    components: {
        Header,
        Footer
    }
}
</script>

<style scoped>
.resources-page {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
}

main {
    flex: 1;
}
</style>
