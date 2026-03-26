<template>
  <div class="screen-shell">
    <NuxtRouteAnnouncer />
    <NuxtPage />
  </div>
</template>

<style>
body {
  margin: 0;
  font-family: "Trebuchet MS", "Segoe UI", sans-serif;
  background: linear-gradient(180deg, #f5f2f8 0%, #f4f1f7 100%);
  color: #3d3446;
}

* {
  box-sizing: border-box;
}

#__nuxt,
.screen-shell {
  min-height: 100vh;
}

.mobile-screen {
  position: relative;
  min-height: 100vh;
  max-width: 430px;
  margin: 0 auto;
  padding: 1.1rem 1rem 1.2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow: hidden;
}

.topbar,
.hero-card,
.bottom-panel {
  position: relative;
  z-index: 1;
}

.topbar {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 1rem;
  margin-bottom: 1.2rem;
}

.app-title {
  margin: 0;
  font-size: 1.3rem;
  font-weight: 700;
  color: #251d2d;
}

.app-subtitle {
  margin: 0.25rem 0 0;
  font-size: 0.72rem;
  color: #9d93a8;
}

.topbar-actions {
  display: flex;
  align-items: center;
  gap: 0.45rem;
}

.icon-button,
.lang-pill,
.chat-pill,
.service-button,
.continue-button,
.secondary-link {
  border: 0;
  cursor: pointer;
}

.icon-button,
.lang-pill {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 2.4rem;
  height: 2.4rem;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.72);
  box-shadow: 0 10px 24px rgba(127, 63, 152, 0.08);
}

.lang-pill {
  padding: 0 0.85rem;
  font-size: 0.78rem;
  font-weight: 700;
  color: #7e2f94;
}

.bell-icon {
  position: relative;
  width: 0.92rem;
  height: 1rem;
  border: 2px solid #7e2f94;
  border-bottom: 0;
  border-radius: 0.7rem 0.7rem 0.35rem 0.35rem;
}

.bell-icon::before,
.bell-icon::after {
  content: "";
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
}

.bell-icon::before {
  width: 0.22rem;
  height: 0.22rem;
  bottom: -0.28rem;
  border-radius: 50%;
  background: #7e2f94;
}

.bell-icon::after {
  width: 0.65rem;
  height: 0.12rem;
  bottom: -0.08rem;
  border-radius: 999px;
  background: #7e2f94;
}

.hero-card {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding-top: 1.15rem;
}

.logo-wrap {
  position: relative;
  width: 9rem;
  height: 9rem;
  display: grid;
  place-items: center;
  margin-top: 0.25rem;
}

.logo-image {
  position: relative;
  width: 5rem;
  height: 5rem;
  object-fit: contain;
}

.hero-copy {
  text-align: center;
  margin-top: 0.05rem;
}

.hero-copy h1 {
  margin: 0;
  font-size: 2rem;
  line-height: 1.1;
  color: #842f95;
}

.brand-name {
  margin: 0.65rem 0 0;
  font-size: 1.15rem;
  color: #9449a1;
}

.greeting {
  margin: 0.45rem 0 0;
  font-size: 0.98rem;
  color: #92899d;
}

.helper-text {
  max-width: 21rem;
  margin: 1.25rem auto 0;
  text-align: center;
  font-size: 0.95rem;
  line-height: 1.55;
  color: #7a7186;
}

.input-block {
  width: 100%;
  margin-top: 1rem;
}

.input-block:first-of-type {
  margin-top: 2rem;
}

.input-block input {
  width: 100%;
  height: 3.65rem;
  border: 1px solid rgba(145, 129, 164, 0.13);
  border-radius: 999px;
  padding: 0 1.4rem;
  background: rgba(255, 255, 255, 0.92);
  box-shadow:
    inset 0 1px 0 rgba(255, 255, 255, 0.95),
    0 14px 34px rgba(88, 69, 112, 0.08);
  text-align: center;
  font-size: 1rem;
  color: #64576f;
  outline: none;
}

.input-block input::placeholder {
  color: #c1bac9;
}

.input-block input:focus {
  border-color: rgba(139, 72, 155, 0.35);
  box-shadow:
    inset 0 1px 0 rgba(255, 255, 255, 0.95),
    0 0 0 4px rgba(139, 72, 155, 0.08),
    0 18px 36px rgba(88, 69, 112, 0.1);
}

.continue-button {
  display: grid;
  place-items: center;
  width: 4.15rem;
  height: 4.15rem;
  margin-top: 1.2rem;
  border-radius: 50%;
  background:
    linear-gradient(135deg, #bb8e2f 0%, #d8ae56 54%, #bf8720 100%);
  box-shadow:
    inset 0 1px 0 rgba(255, 245, 214, 0.7),
    0 14px 26px rgba(184, 138, 47, 0.3);
}

.continue-button:disabled {
  opacity: 0.7;
  cursor: wait;
}

.arrow-icon {
  width: 0.85rem;
  height: 0.85rem;
  border-top: 3px solid #fff;
  border-right: 3px solid #fff;
  transform: rotate(45deg) translate(-1px, 1px);
}

.status-text {
  margin: 0.85rem 0 0;
  text-align: center;
  font-size: 0.88rem;
  color: #8b3798;
}

.summary-card {
  width: 100%;
  margin-top: 1.5rem;
  padding: 1rem 1.15rem;
  border-radius: 1.2rem;
  background: rgba(255, 255, 255, 0.84);
  box-shadow:
    inset 0 1px 0 rgba(255, 255, 255, 0.95),
    0 14px 34px rgba(88, 69, 112, 0.08);
}

.summary-card p {
  margin: 0.45rem 0;
  text-align: center;
  font-size: 0.95rem;
  color: #6b6076;
}

.secondary-link {
  margin-top: 0.9rem;
  padding: 0;
  background: transparent;
  font-size: 0.88rem;
  color: #8e8398;
  text-decoration: underline;
}

.bottom-panel {
  padding-top: 1rem;
  border-top: 1px solid rgba(212, 205, 219, 0.55);
  background: rgba(248, 245, 250, 0.55);
}

.chat-row {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.55rem;
  flex-wrap: wrap;
  font-size: 0.92rem;
  color: #8e8398;
}

.chat-pill {
  padding: 0.48rem 0.82rem;
  border-radius: 0.65rem;
  background: rgba(255, 255, 255, 0.88);
  color: #8b3798;
  font-size: 0.8rem;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.05rem;
  box-shadow: 0 10px 24px rgba(127, 63, 152, 0.08);
}

.service-button {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  margin-top: 1.1rem;
  padding: 1rem 1.1rem;
  border-radius: 999px;
  background: linear-gradient(90deg, #b5862a 0%, #c89d3a 52%, #b98520 100%);
  color: #fffef6;
  font-size: 1.02rem;
  font-weight: 700;
  box-shadow:
    inset 0 1px 0 rgba(255, 246, 213, 0.35),
    0 16px 28px rgba(185, 133, 32, 0.24);
}

.service-icon {
  display: inline-grid;
  place-items: center;
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.18);
  font-size: 1.1rem;
}

.copyright {
  margin: 0.9rem 0 0;
  text-align: center;
  font-size: 0.84rem;
  color: #938a9d;
}

.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}

@media (max-width: 380px) {
  .mobile-screen {
    padding-inline: 0.8rem;
  }

  .app-title {
    font-size: 1.1rem;
  }

  .hero-copy h1 {
    font-size: 1.75rem;
  }

  .brand-name {
    font-size: 1rem;
  }

  .service-button {
    font-size: 0.93rem;
  }
}
</style>
