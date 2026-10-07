import { B as BaseStyle } from '../virtual/entry.mjs';
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

//#region node_modules/.pnpm/primevue@5.0.2_vue@3.5.43/node_modules/primevue/carouselindicator/style/index.mjs
var CarouselIndicatorStyle = BaseStyle.extend({
	name: "carouselindicator",
	classes: { root: function root(_ref) {
		return ["p-carousel-indicator-button", _ref.instance.active ? "p-carousel-indicator-active" : ""];
	} }
});
//#endregion
//#region node_modules/.pnpm/primevue@5.0.2_vue@3.5.43/node_modules/primevue/carouselindicator/index.mjs
var script = {
	name: "CarouselIndicator",
	"extends": {
		name: "BaseCarouselIndicator",
		"extends": script$1,
		props: {
			as: {
				type: [String, Object],
				"default": "BUTTON"
			},
			asChild: {
				type: Boolean,
				"default": false
			},
			page: {
				type: Number,
				"default": null
			}
		},
		style: CarouselIndicatorStyle,
		provide: function provide() {
			return {
				$pcCarouselIndicator: this,
				$parentInstance: this
			};
		}
	},
	inheritAttrs: false,
	inject: ["$pcCarousel"],
	methods: { onClick: function onClick(event) {
		var _this$$pcCarousel;
		(_this$$pcCarousel = this.$pcCarousel) === null || _this$$pcCarousel === void 0 || _this$$pcCarousel.scrollToPage(this.page);
		if (event !== null && event !== void 0 && event.cancelable) event.preventDefault();
	} },
	computed: {
		active: function active() {
			var _this$$pcCarousel2;
			return ((_this$$pcCarousel2 = this.$pcCarousel) === null || _this$$pcCarousel2 === void 0 ? void 0 : _this$$pcCarousel2.d_page) === this.page;
		},
		attrs: function attrs() {
			return mergeProps(this.asAttrs, this.a11yAttrs, this.ptmi("root"));
		},
		asAttrs: function asAttrs() {
			return this.as === "BUTTON" ? { type: "button" } : void 0;
		},
		a11yAttrs: function a11yAttrs() {
			var _this$$pcCarousel3, _this$$pcCarousel3$ar, _this$$pcCarousel4, _this$$pcCarousel5, _this$$pcCarousel6, _this$$pcCarousel7;
			return {
				"aria-label": (_this$$pcCarousel3 = this.$pcCarousel) === null || _this$$pcCarousel3 === void 0 || (_this$$pcCarousel3$ar = _this$$pcCarousel3.ariaPageLabel) === null || _this$$pcCarousel3$ar === void 0 ? void 0 : _this$$pcCarousel3$ar.call(_this$$pcCarousel3, this.page + 1),
				"aria-current": this.active ? "page" : void 0,
				"data-pc-name": "carouselindicator",
				"data-pc-section": "root",
				"data-orientation": (_this$$pcCarousel4 = this.$pcCarousel) === null || _this$$pcCarousel4 === void 0 ? void 0 : _this$$pcCarousel4.orientation,
				"data-align": (_this$$pcCarousel5 = this.$pcCarousel) === null || _this$$pcCarousel5 === void 0 ? void 0 : _this$$pcCarousel5.align,
				"data-page": (_this$$pcCarousel6 = this.$pcCarousel) === null || _this$$pcCarousel6 === void 0 ? void 0 : _this$$pcCarousel6.d_page,
				"data-active": this.active ? "" : void 0,
				"data-swiping": (_this$$pcCarousel7 = this.$pcCarousel) !== null && _this$$pcCarousel7 !== void 0 && _this$$pcCarousel7.swiping ? "" : void 0,
				onClick: this.onClick
			};
		}
	}
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
	return !_ctx.asChild ? (openBlock(), createBlock(resolveDynamicComponent(_ctx.as), mergeProps({
		key: 0,
		"class": _ctx.cx("root")
	}, $options.attrs), {
		"default": withCtx(function() {
			return [renderSlot(_ctx.$slots, "default")];
		}),
		_: 3
	}, 16, ["class"])) : renderSlot(_ctx.$slots, "default", {
		a11yAttrs: $options.a11yAttrs,
		"class": normalizeClass(_ctx.cx("root")),
		active: $options.active,
		onClick: $options.onClick
	}, void 0, void 0, 1);
}
script.render = render;

export { script as default };
//# sourceMappingURL=carouselindicator-DMewD1nf.mjs.map
