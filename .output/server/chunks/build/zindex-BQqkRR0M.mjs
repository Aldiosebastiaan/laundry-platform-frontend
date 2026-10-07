//#region node_modules/.pnpm/@primeuix+utils@0.8.2/node_modules/@primeuix/utils/dist/zindex/index.mjs
function g() {
	let r = [], i = (e, n, t = 999) => {
		let s = u(e, n, t), o = s.value + (s.key === e ? 0 : t) + 1;
		return r.push({
			key: e,
			value: o
		}), o;
	}, d = (e) => {
		r = r.filter((n) => n.value !== e);
	}, a = (e, n) => u(e, n).value, u = (e, n, t = 0) => [...r].reverse().find((s) => n ? true : s.key === e) || {
		key: e,
		value: t
	}, l = (e) => e && parseInt(e.style.zIndex, 10) || 0;
	return {
		get: l,
		set: (e, n, t) => {
			n && (n.style.zIndex = String(i(e, true, t)));
		},
		clear: (e) => {
			e && (d(l(e)), e.style.zIndex = "");
		},
		getCurrent: (e) => a(e, false)
	};
}
var x = g();

export { x };
//# sourceMappingURL=zindex-BQqkRR0M.mjs.map
