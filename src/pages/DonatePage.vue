<template>
    <div class="donate-page">
        <Header />
        
        <main class="container mx-auto px-4 py-8">
            <h1 class="text-3xl font-bold text-center mb-8">Support Our Community</h1>
            
            <div class="max-w-md mx-auto bg-white p-6 rounded-lg shadow-lg">
                <form @submit.prevent="handleSubmit">
                    <div class="mb-4">
                        <label class="block text-gray-700 mb-2">Donation Amount</label>
                        <select v-model="amount" class="w-full p-2 border rounded">
                            <option value="10">$10</option>
                            <option value="25">$25</option>
                            <option value="50">$50</option>
                            <option value="100">$100</option>
                            <option value="custom">Custom Amount</option>
                        </select>
                    </div>

                    <div v-if="amount === 'custom'" class="mb-4">
                        <input
                            type="number"
                            v-model="customAmount"
                            placeholder="Enter amount"
                            class="w-full p-2 border rounded"
                            min="1"
                        />
                    </div>

                    <div id="card-element" class="mb-4">
                        <!-- Stripe Card Element will be inserted here -->
                    </div>

                    <button
                        type="submit"
                        class="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
                        :disabled="processing"
                    >
                        {{ processing ? 'Processing...' : 'Donate Now' }}
                    </button>
                </form>

                <div class="mt-4 flex justify-center space-x-4">
                    <button @click="handlePayPal" class="p-2 border rounded">
                        Pay with PayPal
                    </button>
                    <button @click="handleGooglePay" class="p-2 border rounded">
                        Pay with Google Pay
                    </button>
                </div>
            </div>
        </main>

        <Footer />
    </div>
</template>

<script>
import { ref, onMounted } from 'vue'
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'

export default {
    name: 'DonatePage',
    components: {
        Header,
        Footer
    },
    setup() {
        const stripe = ref(null)
        const card = ref(null)
        const amount = ref('25')
        const customAmount = ref('')
        const processing = ref(false)

        onMounted(() => {
            // Initialize Stripe - replace with your publishable key
            stripe.value = Stripe('your-publishable-key')
            const elements = stripe.value.elements()
            card.value = elements.create('card')
            card.value.mount('#card-element')
        })

        const handleSubmit = async () => {
            try {
                processing.value = true
                const finalAmount = amount.value === 'custom' ? customAmount.value : amount.value
                
                // Add your Stripe payment processing logic here
                // This would typically involve creating a payment intent on your backend
                // and then confirming it here
                
                processing.value = false
            } catch (error) {
                console.error('Payment failed:', error)
                processing.value = false
            }
        }

        const handlePayPal = () => {
            // Implement PayPal integration
            console.log('PayPal payment initiated')
        }

        const handleGooglePay = () => {
            // Implement Google Pay integration
            console.log('Google Pay payment initiated')
        }

        return {
            amount,
            customAmount,
            processing,
            handleSubmit,
            handlePayPal,
            handleGooglePay
        }
    }
}
</script>

<style scoped>
.donate-page {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
}

main {
    flex: 1;
}
</style>