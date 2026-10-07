import { E as fe } from '../virtual/entry.mjs';
import { defineComponent, computed, h } from 'vue';

//#region node_modules/.pnpm/@primeicons+core@8.0.2/node_modules/@primeicons/core/dist/esm/utils.mjs
function a(n) {
	if (!(n == null || n === "")) return typeof n == "number" || /^\d+(\.\d+)?$/.test(n) ? `${n}px` : `${n}`;
}
//#endregion
//#region node_modules/.pnpm/@primeicons+vue@8.0.2_vue@3.5.43/node_modules/@primeicons/vue/dist/esm/core/index.mjs
var d = ([t, o]) => {
	const { key: i, ...e } = o, n = {};
	for (const [r, s] of Object.entries(e)) n[fe(r)] = s;
	return h(t, {
		key: i,
		...n
	});
};
var b = (t) => {
	const o = {
		size: {
			type: [Number, String],
			default: void 0
		},
		color: {
			type: String,
			default: void 0
		},
		spin: {
			type: Boolean,
			default: false
		}
	};
	return {
		Icon: defineComponent({
			name: t.name.split("-").map((e) => e.charAt(0).toUpperCase() + e.slice(1)).join(""),
			props: o,
			setup(e, { attrs: n }) {
				const r = computed(() => e.size ?? 20), s = computed(() => ({
					...a(e.size) && { "--px-icon-size": a(e.size) },
					...e.color && { color: e.color }
				})), m = computed(() => [
					"p-icon",
					`p-icon-${t.name}`,
					e.spin && "p-icon-spin"
				].filter(Boolean));
				return () => h("svg", {
					...t.svg,
					width: r.value,
					height: r.value,
					"aria-hidden": "true",
					...n,
					style: s.value,
					class: m.value
				}, t.nodes.map(d));
			}
		}),
		props: o
	};
};

export { b };
//# sourceMappingURL=core-aCRgtkIU.mjs.map
