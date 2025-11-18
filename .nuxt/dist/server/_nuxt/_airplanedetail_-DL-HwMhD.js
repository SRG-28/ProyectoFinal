import { _ as __nuxt_component_0 } from "./nuxt-link-DsAR1V4Z.js";
import _sfc_main$1 from "./Utterances-CjQUSrPk.js";
import { withAsyncContext, mergeProps, unref, withCtx, createTextVNode, createVNode, createBlock, openBlock, toDisplayString, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderAttr, ssrInterpolate, ssrRenderComponent, ssrRenderList } from "vue/server-renderer";
import { useRoute } from "vue-router";
import { q as queryContent } from "./query-Di4GCsIC.js";
import { _ as _export_sfc, c as createError } from "../server.mjs";
import "D:/sofia/ProyectoFinal/node_modules/ufo/dist/index.mjs";
import "D:/sofia/ProyectoFinal/node_modules/ohash/dist/index.mjs";
import "D:/sofia/ProyectoFinal/node_modules/klona/dist/index.mjs";
import "./preview-D7rRPZcp.js";
import "D:/sofia/ProyectoFinal/node_modules/nuxt/node_modules/cookie-es/dist/index.mjs";
import "D:/sofia/ProyectoFinal/node_modules/h3/dist/index.mjs";
import "D:/sofia/ProyectoFinal/node_modules/destr/dist/index.mjs";
import "D:/sofia/ProyectoFinal/node_modules/nuxt/node_modules/ohash/dist/index.mjs";
import "ofetch";
import "#internal/nuxt/paths";
import "D:/sofia/ProyectoFinal/node_modules/hookable/dist/index.mjs";
import "D:/sofia/ProyectoFinal/node_modules/unctx/dist/index.mjs";
import "D:/sofia/ProyectoFinal/node_modules/radix3/dist/index.mjs";
import "D:/sofia/ProyectoFinal/node_modules/defu/dist/defu.mjs";
const _sfc_main = {
  __name: "[airplanedetail]",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const route = useRoute();
    const airplaneId = route.params.airplanedetail;
    const airplane = ([__temp, __restore] = withAsyncContext(() => queryContent("/airplanes").where({ id: airplaneId }).findOne()), __temp = await __temp, __restore(), __temp);
    if (!airplane) throw createError({ statusCode: 404, statusMessage: "Avión no encontrado" });
    const allAirlines = ([__temp, __restore] = withAsyncContext(() => queryContent("/airlines").find()), __temp = await __temp, __restore(), __temp);
    const airlines = allAirlines.filter((a) => airplane.aerolineas_ids.includes(a.id));
    function formatPrice(value) {
      if (!value) return "No disponible";
      return new Intl.NumberFormat("es-ES", {
        style: "currency",
        currency: "USD",
        maximumFractionDigits: 0
      }).format(value);
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      const _component_Utterances = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "p-8 container mx-auto relative" }, _attrs))} data-v-467184f8>`);
      if (unref(airplane).imagen) {
        _push(`<div class="absolute inset-0 w-full h-full overflow-hidden -z-10" data-v-467184f8><img${ssrRenderAttr("src", unref(airplane).imagen)} alt="Fondo avión" class="w-full h-full object-cover opacity-30 blur-sm" data-v-467184f8><div class="absolute inset-0 bg-white/60" data-v-467184f8></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="relative z-10 flex flex-col md:flex-row items-start gap-10 bg-white bg-opacity-90 rounded-3xl shadow-xl p-6" data-v-467184f8><div class="flex-shrink-0" data-v-467184f8>`);
      if (unref(airplane).imagen) {
        _push(`<img${ssrRenderAttr("src", unref(airplane).imagen)}${ssrRenderAttr("alt", unref(airplane).modelo)} class="w-72 h-auto rounded-2xl shadow-lg border border-gray-200" data-v-467184f8>`);
      } else {
        _push(`<div class="w-72 h-80 flex items-center justify-center bg-gray-100 rounded-2xl shadow border border-gray-200" data-v-467184f8><span class="text-gray-400 italic" data-v-467184f8>Sin imagen</span></div>`);
      }
      _push(`</div><div class="flex-1 text-left space-y-4" data-v-467184f8><h1 class="text-4xl font-extrabold bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent animate-text" data-v-467184f8> ✈️ ${ssrInterpolate(unref(airplane).modelo)}</h1><p class="text-lg text-gray-700" data-v-467184f8><strong data-v-467184f8>Año de introducción:</strong> ${ssrInterpolate(unref(airplane).anho_introduccion)}</p><p class="text-lg text-gray-700" data-v-467184f8><strong data-v-467184f8>Tipo:</strong> ${ssrInterpolate(unref(airplane).tipo)}</p><p class="text-lg text-gray-700" data-v-467184f8><strong data-v-467184f8>Capacidad:</strong> ${ssrInterpolate(unref(airplane).capacidad_pasajeros)} pasajeros</p><p class="text-lg text-gray-700" data-v-467184f8><strong data-v-467184f8>Alcance:</strong> ${ssrInterpolate(unref(airplane).alcance_km)} km</p><p class="text-lg text-gray-700" data-v-467184f8><strong data-v-467184f8>Precio:</strong> ${ssrInterpolate(formatPrice(unref(airplane).precio))}</p><p class="text-lg text-gray-700 leading-relaxed" data-v-467184f8><strong data-v-467184f8>Descripción:</strong> ${ssrInterpolate(unref(airplane).descripcion)}</p>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: `/airplanemanufacturer/${unref(airplane).fabricante_id}`,
        class: "mt-4 inline-block px-5 py-2 bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-full shadow-lg hover:from-blue-600 hover:to-indigo-600 transition font-semibold"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Ver Fabricante `);
          } else {
            return [
              createTextVNode(" Ver Fabricante ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><div class="mt-12 relative z-10" data-v-467184f8><h2 class="text-2xl font-bold mb-6 text-gray-800" data-v-467184f8>🛫 Aerolíneas que operan este avión</h2>`);
      if (unref(airlines).length > 0) {
        _push(`<div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6" data-v-467184f8><!--[-->`);
        ssrRenderList(unref(airlines), (airline) => {
          _push(ssrRenderComponent(_component_NuxtLink, {
            key: airline.id,
            to: `/airline/${airline.id}`,
            class: "group relative flex flex-col items-center p-4 rounded-2xl shadow-lg bg-white hover:scale-105 transition transform"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<div class="w-20 h-20 mb-2" data-v-467184f8${_scopeId}>`);
                if (airline.imagen) {
                  _push2(`<img${ssrRenderAttr("src", airline.imagen)}${ssrRenderAttr("alt", airline.nombre)} class="w-full h-full object-contain rounded-xl" data-v-467184f8${_scopeId}>`);
                } else {
                  _push2(`<div class="w-full h-full flex items-center justify-center bg-gray-100 rounded-xl" data-v-467184f8${_scopeId}><span class="text-gray-400 italic text-sm" data-v-467184f8${_scopeId}>Sin logo</span></div>`);
                }
                _push2(`</div><p class="text-sm font-semibold text-gray-700 text-center" data-v-467184f8${_scopeId}>${ssrInterpolate(airline.nombre)}</p>`);
              } else {
                return [
                  createVNode("div", { class: "w-20 h-20 mb-2" }, [
                    airline.imagen ? (openBlock(), createBlock("img", {
                      key: 0,
                      src: airline.imagen,
                      alt: airline.nombre,
                      class: "w-full h-full object-contain rounded-xl"
                    }, null, 8, ["src", "alt"])) : (openBlock(), createBlock("div", {
                      key: 1,
                      class: "w-full h-full flex items-center justify-center bg-gray-100 rounded-xl"
                    }, [
                      createVNode("span", { class: "text-gray-400 italic text-sm" }, "Sin logo")
                    ]))
                  ]),
                  createVNode("p", { class: "text-sm font-semibold text-gray-700 text-center" }, toDisplayString(airline.nombre), 1)
                ];
              }
            }),
            _: 2
          }, _parent));
        });
        _push(`<!--]--></div>`);
      } else {
        _push(`<p class="text-gray-500 italic mt-2" data-v-467184f8>No hay aerolíneas registradas para este avión.</p>`);
      }
      _push(`</div><div class="mt-16 relative z-10" data-v-467184f8>`);
      _push(ssrRenderComponent(_component_Utterances, {
        repo: "SRG-28/ProyectoFinal",
        "issue-term": "pathname",
        label: "airplane-comments",
        theme: "github-light"
      }, null, _parent));
      _push(`</div><div class="text-center mt-12 relative z-10" data-v-467184f8>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/",
        class: "inline-block px-8 py-3 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-white rounded-full shadow-lg hover:from-pink-600 hover:via-purple-600 hover:to-indigo-600 transition font-semibold"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` ← Volver al Catálogo `);
          } else {
            return [
              createTextVNode(" ← Volver al Catálogo ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/airplane/[airplanedetail].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _airplanedetail_ = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-467184f8"]]);
export {
  _airplanedetail_ as default
};
//# sourceMappingURL=_airplanedetail_-DL-HwMhD.js.map
