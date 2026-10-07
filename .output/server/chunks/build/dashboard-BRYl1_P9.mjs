import { N as NuxtLink } from '../virtual/entry.mjs';
import { u as useBuilderStore, a as useAuthStore } from './auth-C1jbcpNZ.mjs';
import { defineComponent, ref, mergeProps, withCtx, createVNode, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderClass, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
import 'nostics';
import 'nostics/formatters/ansi';
import '../nitro/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import '@primevue/core/base/style';
import '@primevue/core/basecomponent/style';
import '@primeuix/styles/autocomplete';
import '@primeuix/utils/object';
import '@primeuix/styles/cascadeselect';
import '@primeuix/styles/checkbox';
import '@primeuix/styles/checkboxgroup';
import '@primeuix/styles/colorpicker';
import '@primeuix/styles/datepicker';
import '@primeuix/styles/floatlabel';
import '@primeuix/styles/iconfield';
import '@primeuix/styles/iftalabel';
import '@primeuix/styles/inputcolor';
import '@primeuix/styles/inputgroup';
import '@primeuix/styles/inputnumber';
import '@primeuix/styles/inputotp';
import '@primeuix/styles/inputtags';
import '@primeuix/styles/inputtext';
import '@primeuix/styles/knob';
import '@primeuix/styles/label';
import '@primeuix/styles/listbox';
import '@primeuix/styles/multiselect';
import '@primeuix/styles/password';
import '@primeuix/styles/radiobutton';
import '@primeuix/styles/radiobuttongroup';
import '@primeuix/styles/rating';
import '@primeuix/styles/select';
import '@primeuix/styles/selectbutton';
import '@primeuix/styles/slider';
import '@primeuix/styles/textarea';
import '@primeuix/styles/togglebutton';
import '@primeuix/styles/toggleswitch';
import '@primeuix/styles/treeselect';
import '@primeuix/styles/button';
import '@primeuix/styles/buttongroup';
import '@primeuix/styles/speeddial';
import '@primeuix/styles/splitbutton';
import '@primeuix/styles/datatable';
import '@primeuix/styles/dataview';
import '@primeuix/styles/orderlist';
import '@primeuix/styles/organizationchart';
import '@primeuix/styles/paginator';
import '@primeuix/styles/picklist';
import '@primeuix/styles/tree';
import '@primeuix/styles/treetable';
import '@primeuix/styles/timeline';
import '@primeuix/styles/virtualscroller';
import '@primeuix/styles/accordion';
import '@primeuix/styles/card';
import '@primeuix/styles/divider';
import '@primeuix/styles/fieldset';
import '@primeuix/styles/panel';
import '@primeuix/styles/scrollarea';
import '@primeuix/styles/scrollpanel';
import '@primeuix/styles/splitter';
import '@primeuix/styles/stepper';
import '@primeuix/styles/tabs';
import '@primeuix/styles/toolbar';
import '@primeuix/styles/confirmdialog';
import '@primeuix/styles/confirmpopup';
import '@primeuix/styles/dialog';
import '@primeuix/styles/drawer';
import '@primeuix/styles/popover';
import '@primeuix/styles/fileupload';
import '@primeuix/styles/breadcrumb';
import '@primeuix/styles/commandmenu';
import '@primeuix/styles/contextmenu';
import '@primeuix/styles/dock';
import '@primeuix/styles/menu';
import '@primeuix/styles/menubar';
import '@primeuix/styles/megamenu';
import '@primeuix/styles/panelmenu';
import '@primeuix/styles/sidebar';
import '@primeuix/styles/steps';
import '@primeuix/styles/tieredmenu';
import '@primeuix/styles/message';
import '@primeuix/styles/toast';
import '@primeuix/styles/carousel';
import '@primeuix/styles/galleria';
import '@primeuix/styles/gallery';
import '@primeuix/styles/compare';
import '@primeuix/styles/image';
import '@primeuix/styles/imagecompare';
import '@primeuix/styles/avatar';
import '@primeuix/styles/badge';
import '@primeuix/styles/blockui';
import '@primeuix/styles/chip';
import '@primeuix/styles/inplace';
import '@primeuix/styles/metergroup';
import '@primeuix/styles/overlaybadge';
import '@primeuix/styles/scrolltop';
import '@primeuix/styles/skeleton';
import '@primeuix/styles/progressbar';
import '@primeuix/styles/tag';
import '@primeuix/styles/terminal';
import '@primevue/forms/form/style';
import '@primevue/forms/formfield/style';
import '@primeuix/styles/tooltip';
import '@primeuix/styles/ripple';
import '@primeuix/styled';
import 'node:url';
import '@iconify/utils';
import 'consola';
import 'vue-router';
import '@vue/shared';
import 'pinia';
import '@iconify/vue';
import 'unhead/utils';
import '../routes/renderer.mjs';
import 'unhead/server';
import 'unhead/legacy';
import 'unhead/plugins';
import 'vue-bundle-renderer/runtime';
import 'devalue';

//#region app/pages/dashboard.vue?vue&type=script&setup=true&lang.ts
var dashboard_vue_vue_type_script_setup_true_lang_default = /*@__PURE__*/ defineComponent({
	__name: "dashboard",
	__ssrInlineRender: true,
	setup(__props) {
		const builderStore = useBuilderStore();
		useAuthStore();
		const stats = ref([
			{
				id: "stat-orders",
				title: "Order Masuk Hari Ini",
				value: "48 Order",
				subtext: "Total bobot 142.5 Kg",
				icon: "pi-shopping-bag",
				trend: "+12% vs kemarin",
				trendPositive: true
			},
			{
				id: "stat-revenue",
				title: "Omset Hari Ini",
				value: "Rp 1.845.000",
				subtext: "34 Lunas, 14 Belum Lunas",
				icon: "pi-wallet",
				trend: "+18% vs kemarin",
				trendPositive: true
			},
			{
				id: "stat-ready",
				title: "Siap Diambil / Diantar",
				value: "12 Order",
				subtext: "8 paket menunggu serah terima",
				icon: "pi-check-circle",
				trend: "SLA Tepat Waktu 98%",
				trendPositive: true
			},
			{
				id: "stat-active-wash",
				title: "Sedang Dikerjakan",
				value: "13 Order",
				subtext: "8 Antrian Cuci, 5 Setrika",
				icon: "pi-sync",
				trend: "Kapasitas Mesin 80%",
				trendPositive: false
			}
		]);
		const recentOrders = ref([
			{
				id: "LND-2026-1048",
				customer: "Ibu Ratna Sari",
				service: "Kiloan Reguler (Cuci + Setrika)",
				weight: "4.8 Kg",
				total: "Rp 48.000",
				status: "SEDANG_CUCI",
				statusLabel: "Pencucian",
				statusColor: "bg-sky-50 text-sky-700 border-sky-200",
				time: "15 menit lalu"
			},
			{
				id: "LND-2026-1047",
				customer: "Bpk. Hendra Gunawan",
				service: "Express 3 Jam",
				weight: "3.2 Kg",
				total: "Rp 64.000",
				status: "SEDANG_SETRIKA",
				statusLabel: "Penyetrikaan",
				statusColor: "bg-amber-50 text-amber-700 border-amber-200",
				time: "42 menit lalu"
			},
			{
				id: "LND-2026-1046",
				customer: "Sdr. Kevin Wijaya",
				service: "Dry Clean Jas 2 Pcs",
				weight: "2 Pcs",
				total: "Rp 90.000",
				status: "SIAP_DIAMBIL",
				statusLabel: "Siap Diambil",
				statusColor: "bg-emerald-50 text-emerald-700 border-emerald-200",
				time: "1 jam lalu"
			},
			{
				id: "LND-2026-1045",
				customer: "Ibu Maya Lestari",
				service: "Bedcover King + Kiloan",
				weight: "7.5 Kg",
				total: "Rp 85.000",
				status: "MENUNGGU_CUCI",
				statusLabel: "Antrian Cuci",
				statusColor: "bg-slate-100 text-slate-700 border-slate-200",
				time: "1.5 jam lalu"
			}
		]);
		return (_ctx, _push, _parent, _attrs) => {
			const _component_NuxtLink = NuxtLink;
			_push(`<div${ssrRenderAttrs(mergeProps({ class: "space-y-6" }, _attrs))}><div class="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between"><div><div class="flex items-center gap-2"><h1 class="text-2xl font-bold tracking-tight text-slate-900 font-sans"> Dashboard Operasional </h1><span class="rounded-full bg-primary-50 px-2.5 py-0.5 text-xs font-semibold text-primary"> Hari Ini </span></div><p class="text-sm text-slate-500 mt-1"> Pantau volume cucian, pergerakan antrian SOP, dan pendapatan harian outlet laundry. </p></div><div class="flex items-center gap-2.5">`);
			_push(ssrRenderComponent(_component_NuxtLink, {
				to: "/kasir",
				class: "flex items-center gap-2 rounded-xl bg-primary px-4 py-2.5 text-xs font-bold text-white shadow-sm hover:bg-primary-600 transition-colors"
			}, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(`<i class="pi pi-plus"${_scopeId}></i><span${_scopeId}>+ Order Baru (Kasir)</span>`);
					else return [createVNode("i", { class: "pi pi-plus" }), createVNode("span", null, "+ Order Baru (Kasir)")];
				}),
				_: 1
			}, _parent));
			_push(ssrRenderComponent(_component_NuxtLink, {
				to: "/daily-activity",
				class: "flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-3.5 py-2.5 text-xs font-semibold text-slate-700 shadow-sm hover:bg-slate-50 transition-colors"
			}, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(`<i class="pi pi-calendar text-slate-500"${_scopeId}></i><span${_scopeId}>Daily Activity</span>`);
					else return [createVNode("i", { class: "pi pi-calendar text-slate-500" }), createVNode("span", null, "Daily Activity")];
				}),
				_: 1
			}, _parent));
			_push(`</div></div><div class="${ssrRenderClass([[unref(builderStore).isEditMode ? "rounded-2xl border-2 border-dashed border-primary/40 bg-primary-50/20 p-3" : ""], "relative transition-all"])}">`);
			if (unref(builderStore).isEditMode) _push(`<div class="mb-3 flex items-center justify-between rounded-lg bg-white px-3 py-1.5 shadow-sm border border-slate-200"><div class="flex items-center gap-2"><i class="pi pi-th-large text-primary text-xs"></i><span class="text-xs font-bold text-slate-700">Blok: KPI Stat Grid</span></div><div class="flex items-center gap-1.5"><button type="button" class="rounded px-2 py-0.5 text-[11px] font-semibold text-slate-600 hover:bg-slate-100"><i class="pi pi-sliders-h mr-1"></i> Konfigurasi Grid </button><button type="button" class="rounded px-2 py-0.5 text-[11px] font-semibold text-primary hover:bg-primary-50"> + Tambah Kartu </button></div></div>`);
			else _push(`<!---->`);
			_push(`<div class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4"><!--[-->`);
			ssrRenderList(unref(stats), (stat) => {
				_push(`<div class="relative overflow-hidden rounded-2xl border border-slate-200/90 bg-white p-5 shadow-sm transition-all hover:shadow-md"><div class="flex items-center justify-between"><span class="text-xs font-semibold uppercase tracking-wider text-slate-500">${ssrInterpolate(stat.title)}</span><div class="flex h-10 w-10 items-center justify-center rounded-xl bg-primary-50 text-primary"><i class="${ssrRenderClass([stat.icon, "pi text-base"])}"></i></div></div><div class="mt-3"><div class="text-2xl font-bold tracking-tight text-slate-900 font-sans">${ssrInterpolate(stat.value)}</div><p class="mt-0.5 text-xs text-slate-500">${ssrInterpolate(stat.subtext)}</p></div><div class="mt-4 flex items-center gap-1.5 border-t border-slate-100 pt-3 text-[11px]"><span class="${ssrRenderClass([stat.trendPositive ? "text-emerald-600" : "text-slate-600", "font-semibold"])}">${ssrInterpolate(stat.trend)}</span></div></div>`);
			});
			_push(`<!--]--></div></div><div class="${ssrRenderClass([[unref(builderStore).isEditMode ? "rounded-2xl border-2 border-dashed border-primary/40 bg-primary-50/20 p-3" : ""], "relative transition-all"])}">`);
			if (unref(builderStore).isEditMode) _push(`<div class="mb-3 flex items-center justify-between rounded-lg bg-white px-3 py-1.5 shadow-sm border border-slate-200"><div class="flex items-center gap-2"><i class="pi pi-table text-primary text-xs"></i><span class="text-xs font-bold text-slate-700">Blok: Tabel Antrian Cucian &amp; Workflow</span></div><div class="flex items-center gap-1.5"><button type="button" class="rounded px-2 py-0.5 text-[11px] font-semibold text-slate-600 hover:bg-slate-100"><i class="pi pi-filter mr-1"></i> Filter Status </button></div></div>`);
			else _push(`<!---->`);
			_push(`<div class="rounded-2xl border border-slate-200 bg-white shadow-sm overflow-hidden"><div class="flex items-center justify-between border-b border-slate-100 px-6 py-4"><div><h2 class="text-base font-bold text-slate-900 font-sans"> Antrian Pengerjaan &amp; Alur Cucian Terkini </h2><p class="text-xs text-slate-500"> Status real-time setiap nota cucian yang sedang diproses staf. </p></div>`);
			_push(ssrRenderComponent(_component_NuxtLink, {
				to: "/antrian-cuci",
				class: "text-xs font-bold text-primary hover:text-primary-700 flex items-center gap-1"
			}, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(`<span${_scopeId}>Semua Antrian</span><i class="pi pi-arrow-right text-[10px]"${_scopeId}></i>`);
					else return [createVNode("span", null, "Semua Antrian"), createVNode("i", { class: "pi pi-arrow-right text-[10px]" })];
				}),
				_: 1
			}, _parent));
			_push(`</div><div class="overflow-x-auto"><table class="w-full text-left text-xs"><thead class="border-b border-slate-100 bg-slate-50/80 font-bold uppercase tracking-wider text-slate-500 text-[11px]"><tr><th class="px-6 py-3.5">No. Nota</th><th class="px-6 py-3.5">Pelanggan</th><th class="px-6 py-3.5">Layanan</th><th class="px-6 py-3.5">Bobot</th><th class="px-6 py-3.5">Total Biaya</th><th class="px-6 py-3.5">Tahap Alur Kerja</th><th class="px-6 py-3.5 text-right">Aksi</th></tr></thead><tbody class="divide-y divide-slate-100 text-slate-700"><!--[-->`);
			ssrRenderList(unref(recentOrders), (order) => {
				_push(`<tr class="hover:bg-slate-50/60 transition-colors"><td class="px-6 py-4 font-mono font-bold text-primary">${ssrInterpolate(order.id)}</td><td class="px-6 py-4 font-medium text-slate-900">${ssrInterpolate(order.customer)}</td><td class="px-6 py-4 text-slate-600">${ssrInterpolate(order.service)}</td><td class="px-6 py-4 font-semibold text-slate-800">${ssrInterpolate(order.weight)}</td><td class="px-6 py-4 font-bold text-slate-900">${ssrInterpolate(order.total)}</td><td class="px-6 py-4"><span class="${ssrRenderClass([order.statusColor, "inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 text-[11px] font-semibold"])}"><span class="h-1.5 w-1.5 rounded-full bg-current"></span> ${ssrInterpolate(order.statusLabel)}</span></td><td class="px-6 py-4 text-right"><button type="button" class="rounded-lg border border-slate-200 px-3 py-1 font-semibold text-slate-700 hover:bg-slate-50 hover:text-primary transition-colors text-[11px]"> Detail Alur </button></td></tr>`);
			});
			_push(`<!--]--></tbody></table></div></div></div></div>`);
		};
	}
});
//#endregion
//#region app/pages/dashboard.vue
var _sfc_setup = dashboard_vue_vue_type_script_setup_true_lang_default.setup;
dashboard_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/dashboard.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var dashboard_default = dashboard_vue_vue_type_script_setup_true_lang_default;

export { dashboard_default as default };
//# sourceMappingURL=dashboard-BRYl1_P9.mjs.map
