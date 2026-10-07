import { B as BaseStyle } from '../virtual/entry.mjs';
import { s as script$2 } from './basecomponent-xyj7Pl8r.mjs';
import script$1 from './carouselindicator-DMewD1nf.mjs';
import { mergeProps, resolveComponent, openBlock, createBlock, resolveDynamicComponent, withCtx, renderSlot, createElementBlock, Fragment, renderList, normalizeClass } from 'vue';
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

//#region node_modules/.pnpm/primevue@5.0.2_vue@3.5.43/node_modules/primevue/carouselindicators/style/index.mjs
var CarouselIndicatorsStyle = BaseStyle.extend({
	name: "carouselindicators",
	classes: { root: "p-carousel-indicator-list" }
});
//#endregion
//#region node_modules/.pnpm/primevue@5.0.2_vue@3.5.43/node_modules/primevue/carouselindicators/index.mjs
var script = {
	name: "CarouselIndicators",
	"extends": {
		name: "BaseCarouselIndicators",
		"extends": script$2,
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
		style: CarouselIndicatorsStyle,
		provide: function provide() {
			return {
				$pcCarouselIndicators: this,
				$parentInstance: this
			};
		}
	},
	inheritAttrs: false,
	inject: ["$pcCarousel"],
	computed: {
		pageCount: function pageCount() {
			var _this$$pcCarousel, _this$$pcCarousel2;
			return ((_this$$pcCarousel = this.$pcCarousel) === null || _this$$pcCarousel === void 0 || (_this$$pcCarousel = _this$$pcCarousel.snapPoints) === null || _this$$pcCarousel === void 0 ? void 0 : _this$$pcCarousel.size) || ((_this$$pcCarousel2 = this.$pcCarousel) === null || _this$$pcCarousel2 === void 0 ? void 0 : _this$$pcCarousel2.totalIndicators) || 0;
		},
		attrs: function attrs() {
			return mergeProps(this.a11yAttrs, this.ptmi("root"));
		},
		a11yAttrs: function a11yAttrs() {
			var _this$$pcCarousel3, _this$$pcCarousel4, _this$$pcCarousel5, _this$$pcCarousel6, _this$$pcCarousel7;
			return {
				"data-pc-name": "carouselindicators",
				"data-pc-section": "root",
				"data-orientation": (_this$$pcCarousel3 = this.$pcCarousel) === null || _this$$pcCarousel3 === void 0 ? void 0 : _this$$pcCarousel3.orientation,
				"data-align": (_this$$pcCarousel4 = this.$pcCarousel) === null || _this$$pcCarousel4 === void 0 ? void 0 : _this$$pcCarousel4.align,
				"data-page": (_this$$pcCarousel5 = this.$pcCarousel) === null || _this$$pcCarousel5 === void 0 ? void 0 : _this$$pcCarousel5.d_page,
				"data-swiping": (_this$$pcCarousel6 = this.$pcCarousel) !== null && _this$$pcCarousel6 !== void 0 && _this$$pcCarousel6.swiping ? "" : void 0,
				onKeydown: (_this$$pcCarousel7 = this.$pcCarousel) === null || _this$$pcCarousel7 === void 0 ? void 0 : _this$$pcCarousel7.onIndicatorKeydown
			};
		}
	},
	components: { CarouselIndicator: script$1 }
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
	var _component_CarouselIndicator = resolveComponent("CarouselIndicator");
	return !_ctx.asChild ? (openBlock(), createBlock(resolveDynamicComponent(_ctx.as), mergeProps({
		key: 0,
		"class": _ctx.cx("root")
	}, $options.attrs), {
		"default": withCtx(function() {
			return [renderSlot(_ctx.$slots, "default", { pageCount: $options.pageCount }, function() {
				return [(openBlock(true), createElementBlock(Fragment, null, renderList($options.pageCount, function(i) {
					return openBlock(), createBlock(_component_CarouselIndicator, {
						key: i,
						page: i - 1
					}, null, 8, ["page"]);
				}), 128))];
			})];
		}),
		_: 3
	}, 16, ["class"])) : renderSlot(_ctx.$slots, "default", {
		a11yAttrs: $options.a11yAttrs,
		"class": normalizeClass(_ctx.cx("root")),
		pageCount: $options.pageCount
	}, void 0, void 0, 1);
}
script.render = render;

export { script as default };
//# sourceMappingURL=carouselindicators-Df7FKEZi.mjs.map
