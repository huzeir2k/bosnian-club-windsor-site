<template>
    <div class="membership-page">
        <Header />
        
        <main class="membership-content">
            <h1>Become a Member</h1>
            
            <section class="membership-process">
                <h2>How to Become a Member</h2>
                <div class="process-steps">
                    <div class="step">
                        <h3>Step 1: Initial Contact</h3>
                        <p>Contact our club president to express your interest in becoming a member. They will provide you with initial information and guidance.</p>
                    </div>
                    
                    <div class="step">
                        <h3>Step 2: Registration Form</h3>
                        <p>Fill out the membership registration form with your personal information and contact details.</p>
                    </div>
                    
                    <div class="step">
                        <h3>Step 3: Review Process</h3>
                        <p>Your application will be reviewed by the club's board. This typically takes 1-2 weeks.</p>
                    </div>
                    
                    <div class="step">
                        <h3>Step 4: Membership Approval</h3>
                        <p>Upon approval, you'll receive official confirmation and information about membership fees.</p>
                    </div>
                </div>
            </section>

            <section class="contact-info">
                <h2>Contact Information</h2>
                <p>To start your membership process, please contact:</p>
                <div class="contact-details">
                    <p>Club President</p>
                    <p>Email: president@bosnianclubwindsor.ca</p>
                    <p>Phone: (519) XXX-XXXX</p>
                </div>
            </section>
        </main>

        <Footer />
    </div>
</template>

<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'

export default {
    name: 'MembershipPage',
    components: {
        Header,
        Footer
    }
}
</script>

<style scoped>
.membership-page {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
}

.membership-content {
    flex: 1;
    max-width: 1200px;
    margin: 2rem auto;
    padding: 0 1rem;
}

h1 {
    text-align: center;
    color: #333;
    margin-bottom: 2rem;
}

.process-steps {
    display: grid;
    gap: 2rem;
    margin: 2rem 0;
}

.step {
    background: #f5f5f5;
    padding: 1.5rem;
    border-radius: 8px;
}

.step h3 {
    color: #2c3e50;
    margin-bottom: 1rem;
}

.contact-info {
    margin-top: 3rem;
    padding: 2rem;
    background: #f8f9fa;
    border-radius: 8px;
}

.contact-details {
    margin-top: 1rem;
}

@media (min-width: 768px) {
    .process-steps {
        grid-template-columns: repeat(2, 1fr);
    }
}
</style>
