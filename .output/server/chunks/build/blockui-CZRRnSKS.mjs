import { x } from './zindex-BQqkRR0M.mjs';
import { R as R$1, aD as _t, Z, B as BaseStyle } from '../virtual/entry.mjs';
import { s as script$1 } from './basecomponent-xyj7Pl8r.mjs';
import { u as unblockBodyScroll, b as blockBodyScroll } from './utils-zX3cgdNm.mjs';
import { openBlock, createElementBlock, mergeProps, renderSlot } from 'vue';
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
import 'vue/server-renderer';
import 'unhead/utils';
import '../routes/renderer.mjs';
import 'unhead/server';
import 'unhead/legacy';
import 'unhead/plugins';
import 'vue-bundle-renderer/runtime';
import 'devalue';

//#endregion
//#region node_modules/.pnpm/primevue@5.0.2_vue@3.5.43/node_modules/primevue/blockui/style/index.mjs
var BlockUIStyle = BaseStyle.extend({
	name: "blockui",
	style: "\n    .p-blockui {\n        position: relative;\n    }\n\n    .p-blockui-mask {\n        border-radius: dt('blockui.border.radius');\n    }\n\n    .p-blockui-mask.p-overlay-mask {\n        position: absolute;\n    }\n\n    .p-blockui-mask-document.p-overlay-mask {\n        position: fixed;\n    }\n",
	classes: { root: "p-blockui" }
});
//#endregion
//#region node_modules/.pnpm/primevue@5.0.2_vue@3.5.43/node_modules/primevue/blockui/index.mjs
var script = {
	name: "BlockUI",
	"extends": {
		name: "BaseBlockUI",
		"extends": script$1,
		props: {
			blocked: {
				type: Boolean,
				"default": false
			},
			fullScreen: {
				type: Boolean,
				"default": false
			},
			baseZIndex: {
				type: Number,
				"default": 0
			},
			autoZIndex: {
				type: Boolean,
				"default": true
			}
		},
		style: BlockUIStyle,
		provide: function provide() {
			return {
				$pcBlockUI: this,
				$parentInstance: this
			};
		}
	},
	inheritAttrs: false,
	emits: ["block", "unblock"],
	mask: null,
	data: function data() {
		return { isBlocked: false };
	},
	watch: { blocked: function blocked(newValue) {
		if (newValue === true) this.block();
		else this.unblock();
	} },
	mounted: function mounted() {
		if (this.blocked) this.block();
	},
	methods: {
		block: function block() {
			var styleClass = "p-blockui-mask p-overlay-mask p-overlay-mask-enter-active";
			if (this.fullScreen) {
				styleClass += " p-blockui-mask-document";
				this.mask = Z("div", {
					style: {
						position: "fixed",
						top: "0",
						left: "0",
						width: "100%",
						height: "100%"
					},
					"class": !this.isUnstyled && styleClass,
					"p-bind": this.ptm("mask")
				});
				(void 0).body.appendChild(this.mask);
				blockBodyScroll();
				(void 0).activeElement.blur();
			} else {
				this.mask = Z("div", {
					style: {
						position: "absolute",
						top: "0",
						left: "0",
						width: "100%",
						height: "100%"
					},
					"class": !this.isUnstyled && styleClass,
					"p-bind": this.ptm("mask")
				});
				this.$refs.container.appendChild(this.mask);
			}
			if (this.autoZIndex && this.fullScreen) x.set("modal", this.mask, this.baseZIndex || this.$primevue.config.zIndex.modal);
			this.isBlocked = true;
			this.$emit("block");
		},
		unblock: function unblock() {
			var _this = this;
			if (this.mask) {
				!this.isUnstyled && R$1(this.mask, "p-overlay-mask-leave-active");
				var _handleAnimationEnd = function handleAnimationEnd() {
					clearTimeout(fallbackTimer);
					_this.mask.removeEventListener("animationend", _handleAnimationEnd);
					_this.mask.removeEventListener("webkitAnimationEnd", _handleAnimationEnd);
					_this.removeMask();
				};
				var fallbackTimer = setTimeout(function() {
					_this.removeMask();
				}, 300);
				if (_t(this.mask) > 0) {
					this.mask.addEventListener("animationend", _handleAnimationEnd);
					this.mask.addEventListener("webkitAnimationEnd", _handleAnimationEnd);
				}
			} else this.removeMask();
		},
		removeMask: function removeMask() {
			if (!this.mask) return;
			x.clear(this.mask);
			if (this.fullScreen) {
				(void 0).body.removeChild(this.mask);
				unblockBodyScroll();
			} else {
				var _this$$refs$container;
				(_this$$refs$container = this.$refs.container) === null || _this$$refs$container === void 0 || _this$$refs$container.removeChild(this.mask);
			}
			this.mask = null;
			this.isBlocked = false;
			this.$emit("unblock");
		}
	}
};
var _hoisted_1 = ["aria-busy"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
	return openBlock(), createElementBlock("div", mergeProps({
		ref: "container",
		"class": _ctx.cx("root"),
		"aria-busy": $data.isBlocked
	}, _ctx.ptmi("root")), [renderSlot(_ctx.$slots, "default")], 16, _hoisted_1);
}
script.render = render;

export { script as default };
//# sourceMappingURL=blockui-CZRRnSKS.mjs.map
