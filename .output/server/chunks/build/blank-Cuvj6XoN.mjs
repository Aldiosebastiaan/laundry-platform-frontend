import { b } from './core-aCRgtkIU.mjs';
import { defineComponent, openBlock, createBlock, unref, normalizeProps, guardReactiveProps } from 'vue';

//#region node_modules/.pnpm/@primeicons+core@8.0.2/node_modules/@primeicons/core/dist/esm/icons/blank.mjs
var t = {
	name: "blank",
	svg: {
		xmlns: "http://www.w3.org/2000/svg",
		width: 20,
		height: 20,
		viewBox: "0 0 20 20",
		fill: "none"
	},
	nodes: [["rect", {
		width: "1",
		height: "1",
		fill: "currentColor",
		fillOpacity: "0",
		key: "dqty8v"
	}]]
};
//#endregion
//#region node_modules/.pnpm/@primeicons+vue@8.0.2_vue@3.5.43/node_modules/@primeicons/vue/dist/esm/icons/blank.mjs
var k = /* @__PURE__ */ defineComponent({
	name: "Blank",
	inheritAttrs: false,
	__name: "blank",
	setup(l) {
		const { Icon: e } = b(t);
		return (r, i) => (openBlock(), createBlock(unref(e), normalizeProps(guardReactiveProps(r.$attrs)), null, 16));
	}
});

export { k };
//# sourceMappingURL=blank-Cuvj6XoN.mjs.map
