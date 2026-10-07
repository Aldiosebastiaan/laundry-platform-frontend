import { x } from './zindex-BQqkRR0M.mjs';
import { aa as j$1, B as BaseStyle } from '../virtual/entry.mjs';
import { s as script$2 } from './basecomponent-xyj7Pl8r.mjs';
import { h as h$1 } from './chevron-up-Cgy2W7UM.mjs';
import { n as script$1 } from './button-C40_yBwc.mjs';
import { resolveComponent, openBlock, createBlock, Transition, mergeProps, withCtx, renderSlot, normalizeClass, resolveDynamicComponent, createCommentVNode } from 'vue';
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
import './core-aCRgtkIU.mjs';
import './rolldown-runtime-D7D4PA-g.mjs';
import './classnames-ryN3v2bf.mjs';
import './ripple-Bhb3fhdC.mjs';
import './basedirective-BlCM3Le7.mjs';
import './uuid-Dh44iNNj.mjs';
import './spinner-DV-Ha3dz.mjs';
import './badge-DMTHnEO9.mjs';

//#endregion
//#region node_modules/.pnpm/primevue@5.0.2_vue@3.5.43/node_modules/primevue/scrolltop/style/index.mjs
var ScrollTopStyle = BaseStyle.extend({
	name: "scrolltop",
	style: "\n    .p-scrolltop.p-button {\n        position: fixed !important;\n        inset-block-end: 20px;\n        inset-inline-end: 20px;\n    }\n\n    .p-scrolltop-sticky.p-button {\n        position: sticky !important;\n        display: flex;\n        margin-inline-start: auto;\n    }\n\n    .p-scrolltop-enter-from {\n        opacity: 0;\n    }\n\n    .p-scrolltop-enter-active {\n        transition: opacity 300ms;\n    }\n\n    .p-scrolltop-leave-to {\n        opacity: 0;\n    }\n\n    .p-scrolltop-leave-active {\n        transition: opacity 300ms;\n    }\n",
	classes: {
		root: function root(_ref) {
			return ["p-scrolltop", { "p-scrolltop-sticky": _ref.props.target !== "window" }];
		},
		icon: "p-scrolltop-icon"
	}
});
//#endregion
//#region node_modules/.pnpm/primevue@5.0.2_vue@3.5.43/node_modules/primevue/scrolltop/index.mjs
var script = {
	name: "ScrollTop",
	"extends": {
		name: "BaseScrollTop",
		"extends": script$2,
		props: {
			target: {
				type: String,
				"default": "window"
			},
			threshold: {
				type: Number,
				"default": 400
			},
			icon: {
				type: String,
				"default": void 0
			},
			behavior: {
				type: String,
				"default": "smooth"
			},
			buttonProps: {
				type: Object,
				"default": function _default() {
					return {
						rounded: true,
						iconOnly: true
					};
				}
			}
		},
		style: ScrollTopStyle,
		provide: function provide() {
			return {
				$pcScrollTop: this,
				$parentInstance: this
			};
		}
	},
	inheritAttrs: false,
	scrollListener: null,
	container: null,
	data: function data() {
		return { visible: false };
	},
	mounted: function mounted() {
		if (this.target === "window") this.bindDocumentScrollListener();
		else if (this.target === "parent") this.bindParentScrollListener();
	},
	beforeUnmount: function beforeUnmount() {
		if (this.target === "window") this.unbindDocumentScrollListener();
		else if (this.target === "parent") this.unbindParentScrollListener();
		if (this.container) {
			x.clear(this.container);
			this.overlay = null;
		}
	},
	methods: {
		onClick: function onClick() {
			(this.target === "window" ? void 0 : this.$el.parentElement).scroll({
				top: 0,
				behavior: this.behavior
			});
		},
		checkVisibility: function checkVisibility(scrollY) {
			if (scrollY > this.threshold) this.visible = true;
			else this.visible = false;
		},
		bindParentScrollListener: function bindParentScrollListener() {
			var _this = this;
			this.scrollListener = function() {
				_this.checkVisibility(_this.$el.parentElement.scrollTop);
			};
			this.$el.parentElement.addEventListener("scroll", this.scrollListener);
		},
		bindDocumentScrollListener: function bindDocumentScrollListener() {
			var _this2 = this;
			this.scrollListener = function() {
				_this2.checkVisibility(j$1());
			};
			(void 0).addEventListener("scroll", this.scrollListener);
		},
		unbindParentScrollListener: function unbindParentScrollListener() {
			if (this.scrollListener) {
				this.$el.parentElement.removeEventListener("scroll", this.scrollListener);
				this.scrollListener = null;
			}
		},
		unbindDocumentScrollListener: function unbindDocumentScrollListener() {
			if (this.scrollListener) {
				(void 0).removeEventListener("scroll", this.scrollListener);
				this.scrollListener = null;
			}
		},
		onEnter: function onEnter(el) {
			x.set("overlay", el, this.$primevue.config.zIndex.overlay);
		},
		onAfterLeave: function onAfterLeave(el) {
			x.clear(el);
		},
		containerRef: function containerRef(el) {
			this.container = el ? el.$el : void 0;
		}
	},
	computed: { scrollTopAriaLabel: function scrollTopAriaLabel() {
		return this.$primevue.config.locale.aria ? this.$primevue.config.locale.aria.scrollTop : void 0;
	} },
	components: {
		ChevronUp: h$1,
		Button: script$1
	}
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
	var _component_Button = resolveComponent("Button");
	return openBlock(), createBlock(Transition, mergeProps({
		name: "p-scrolltop",
		appear: "",
		onEnter: $options.onEnter,
		onAfterLeave: $options.onAfterLeave
	}, _ctx.ptm("transition")), {
		"default": withCtx(function() {
			return [$data.visible ? (openBlock(), createBlock(_component_Button, mergeProps({
				key: 0,
				ref: $options.containerRef,
				"class": _ctx.cx("root"),
				onClick: $options.onClick,
				"aria-label": $options.scrollTopAriaLabel,
				unstyled: _ctx.unstyled
			}, _ctx.buttonProps, { pt: _ctx.ptm("root") }), {
				"default": withCtx(function() {
					return [renderSlot(_ctx.$slots, "icon", { "class": normalizeClass(_ctx.cx("icon")) }, function() {
						return [(openBlock(), createBlock(resolveDynamicComponent(_ctx.icon ? "span" : "ChevronUp"), mergeProps({ "class": [_ctx.cx("icon"), _ctx.icon] }, _ctx.ptm("root")["icon"], { "data-pc-section": "icon" }), null, 16, ["class"]))];
					})];
				}),
				_: 3
			}, 16, [
				"class",
				"onClick",
				"aria-label",
				"unstyled",
				"pt"
			])) : createCommentVNode("", true)];
		}),
		_: 3
	}, 16, ["onEnter", "onAfterLeave"]);
}
script.render = render;

export { script as default };
//# sourceMappingURL=scrolltop-xE0NQwsA.mjs.map
