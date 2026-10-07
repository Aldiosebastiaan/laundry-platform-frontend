import { A as at } from '../virtual/entry.mjs';
import { renderSlot, openBlock, createBlock, Teleport, createCommentVNode } from 'vue';

//#region node_modules/.pnpm/primevue@5.0.2_vue@3.5.43/node_modules/primevue/portal/index.mjs
var script = {
	name: "Portal",
	props: {
		appendTo: {
			type: [String, Object],
			"default": "body"
		},
		disabled: {
			type: Boolean,
			"default": false
		}
	},
	data: function data() {
		return { mounted: false };
	},
	mounted: function mounted() {
		this.mounted = at();
	},
	computed: { inline: function inline() {
		return this.disabled || this.appendTo === "self";
	} }
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
	return $options.inline ? renderSlot(_ctx.$slots, "default", {}, void 0, void 0, 0) : $data.mounted ? (openBlock(), createBlock(Teleport, {
		key: 1,
		to: $props.appendTo
	}, [renderSlot(_ctx.$slots, "default")], 8, ["to"])) : createCommentVNode("", true);
}
script.render = render;

export { script as s };
//# sourceMappingURL=portal-BlowhyOz.mjs.map
