//#region node_modules/.pnpm/@primeuix+utils@0.8.2/node_modules/@primeuix/utils/dist/uuid/index.mjs
var t = {};
function s(n = "pui_id_") {
	return Object.hasOwn(t, n) || (t[n] = 0), t[n]++, `${n}${t[n]}`;
}

export { s };
//# sourceMappingURL=uuid-Dh44iNNj.mjs.map
