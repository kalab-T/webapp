<template>
  <main class="mobile-screen">
    <header class="topbar">
      <div>
        <p class="app-title">CBE Mobile Banking</p>
        <p class="app-subtitle">Review status</p>
      </div>

      <div class="topbar-actions" aria-label="Quick actions">
        <button class="icon-button" type="button" aria-label="Notifications">
          <span class="bell-icon" />
        </button>
        <button class="lang-pill" type="button" aria-label="Current language">
          EN
        </button>
      </div>
    </header>

    <section class="hero-card">
      <div class="logo-wrap" aria-label="Commercial Bank of Ethiopia logo">
        <img class="logo-image" src="/logo.svg" alt="Commercial Bank of Ethiopia logo">
      </div>

      <div class="hero-copy">
        <h1>Pending Review</h1>
        <p class="brand-name">Your verification is under review</p>
        <p class="greeting">Expected review time: within 5 hours</p>
      </div>

      <p class="helper-text">
        Your request has been received successfully and is currently pending for review. You will be contacted after the review window is complete.
      </p>

      <div class="summary-card">
        <p><strong>Phone:</strong> {{ displayPhone }}</p>
        <p><strong>Reference:</strong> {{ displayReference }}</p>
        <p><strong>Status:</strong> 3,445,000birr is under Pending review</p>
      </div>

      <button class="secondary-link" type="button" @click="navigateTo('/')">
        Return to home
      </button>
    </section>

    <footer class="bottom-panel">
      <div class="chat-row">
        <span>Need help with review status?</span>
        <button class="chat-pill" type="button">Support</button>
      </div>

      <button class="service-button" type="button">
        <span class="service-icon">◌</span>
        <span>Review Services</span>
      </button>

      <p class="copyright">Copyright © Commercial Bank Of Ethiopia</p>
    </footer>
  </main>
</template>

<script setup lang="ts">
const route = useRoute()

const displayPhone = computed(() => {
  const phone = route.query.phone
  return typeof phone === 'string' && phone.trim() ? phone : 'not provided'
})

const displayReference = computed(() => {
  const reference = route.query.reference
  return typeof reference === 'string' && reference.trim() ? reference : 'not provided'
})
</script>
