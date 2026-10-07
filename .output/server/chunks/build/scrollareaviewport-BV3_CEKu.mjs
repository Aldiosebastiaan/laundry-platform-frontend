import { a5 as p, B as BaseStyle } from '../virtual/entry.mjs';
import { s as script$1 } from './basecomponent-xyj7Pl8r.mjs';
import { mergeProps, openBlock, createBlock, resolveDynamicComponent, withCtx, renderSlot, normalizeClass } from 'vue';
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

//#region node_modules/.pnpm/primevue@5.0.2_vue@3.5.43/node_modules/primevue/scrollareaviewport/style/index.mjs
var ScrollAreaViewportStyle = BaseStyle.extend({
	name: "scrollareaviewport",
	classes: { root: "p-scrollarea-viewport" },
	inlineStyles: { root: {
		overflow: "scroll",
		scrollbarWidth: "none"
	} }
});
//#endregion
//#region node_modules/.pnpm/primevue@5.0.2_vue@3.5.43/node_modules/primevue/scrollareaviewport/index.mjs
var script = {
	name: "ScrollAreaViewport",
	"extends": {
		name: "BaseScrollAreaViewport",
		"extends": script$1,
		props: {
			as: {
				type: [String, Object],
				"default": "DIV"
			},
			asChild: {
				type: Boolean,
				"default": false
			}
		},
		style: ScrollAreaViewportStyle,
		provide: function provide() {
			return {
				$pcScrollAreaViewport: this,
				$parentInstance: this
			};
		}
	},
	inheritAttrs: false,
	inject: ["$pcScrollArea"],
	beforeUnmount: function beforeUnmount() {
		var _this$$pcScrollArea;
		(_this$$pcScrollArea = this.$pcScrollArea) === null || _this$$pcScrollArea === void 0 || _this$$pcScrollArea.setViewportEl(null);
	},
	methods: {
		setRef: function setRef(el) {
			var _el$$el, _this$$pcScrollArea2;
			var dom = p(el) ? el : (_el$$el = el === null || el === void 0 ? void 0 : el.$el) !== null && _el$$el !== void 0 ? _el$$el : null;
			(_this$$pcScrollArea2 = this.$pcScrollArea) === null || _this$$pcScrollArea2 === void 0 || _this$$pcScrollArea2.setViewportEl(dom);
		},
		onScroll: function onScroll(event) {
			var _this$$pcScrollArea3;
			(_this$$pcScrollArea3 = this.$pcScrollArea) === null || _this$$pcScrollArea3 === void 0 || _this$$pcScrollArea3.onScroll(event);
		}
	},
	computed: {
		scrollMeta: function scrollMeta() {
			var _this$$pcScrollArea$s, _this$$pcScrollArea4;
			return (_this$$pcScrollArea$s = (_this$$pcScrollArea4 = this.$pcScrollArea) === null || _this$$pcScrollArea4 === void 0 ? void 0 : _this$$pcScrollArea4.scrollMeta) !== null && _this$$pcScrollArea$s !== void 0 ? _this$$pcScrollArea$s : {};
		},
		attrs: function attrs() {
			return mergeProps(this.a11yAttrs, this.ptmi("root"));
		},
		a11yAttrs: function a11yAttrs() {
			var _this$$pcScrollArea5, _this$$pcScrollArea6, _this$$pcScrollArea$t, _this$$pcScrollArea7;
			return {
				ref: this.setRef,
				tabindex: (_this$$pcScrollArea5 = this.$pcScrollArea) !== null && _this$$pcScrollArea5 !== void 0 && _this$$pcScrollArea5.hasOverflowX || (_this$$pcScrollArea6 = this.$pcScrollArea) !== null && _this$$pcScrollArea6 !== void 0 && _this$$pcScrollArea6.hasOverflowY ? (_this$$pcScrollArea$t = (_this$$pcScrollArea7 = this.$pcScrollArea) === null || _this$$pcScrollArea7 === void 0 ? void 0 : _this$$pcScrollArea7.tabIndex) !== null && _this$$pcScrollArea$t !== void 0 ? _this$$pcScrollArea$t : 0 : void 0,
				"data-scroll-x-before": this.scrollMeta.xBefore ? "" : void 0,
				"data-scroll-x-after": this.scrollMeta.xAfter ? "" : void 0,
				"data-scroll-y-before": this.scrollMeta.yBefore ? "" : void 0,
				"data-scroll-y-after": this.scrollMeta.yAfter ? "" : void 0,
				onScroll: this.onScroll
			};
		}
	}
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
	return !_ctx.asChild ? (openBlock(), createBlock(resolveDynamicComponent(_ctx.as), mergeProps({
		key: 0,
		"class": _ctx.cx("root"),
		style: _ctx.sx("root")
	}, $options.attrs), {
		"default": withCtx(function() {
			return [renderSlot(_ctx.$slots, "default")];
		}),
		_: 3
	}, 16, ["class", "style"])) : renderSlot(_ctx.$slots, "default", {
		"class": normalizeClass(_ctx.cx("root")),
		a11yAttrs: $options.a11yAttrs
	}, void 0, void 0, 1);
}
script.render = render;

export { script as default };
//# sourceMappingURL=scrollareaviewport-BV3_CEKu.mjs.map
