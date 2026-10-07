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

//#region node_modules/.pnpm/primevue@5.0.2_vue@3.5.43/node_modules/primevue/carouselcontent/style/index.mjs
var CarouselContentStyle = BaseStyle.extend({
	name: "carouselcontent",
	classes: { root: function root(_ref) {
		var _instance$$pcCarousel;
		return ["p-carousel-content", ((_instance$$pcCarousel = _ref.instance.$pcCarousel) === null || _instance$$pcCarousel === void 0 ? void 0 : _instance$$pcCarousel.orientation) === "vertical" ? "p-carousel-content-vertical" : "p-carousel-content-horizontal"];
	} },
	inlineStyles: { root: function root(_ref2) {
		var _c$resolveSnapType;
		var c = _ref2.instance.$pcCarousel;
		var isVertical = (c === null || c === void 0 ? void 0 : c.orientation) === "vertical";
		return {
			"--px-slides-per-page": c === null || c === void 0 ? void 0 : c.slidesPerPage,
			"--px-spacing-items": (c === null || c === void 0 ? void 0 : c.spacing) + "px",
			"--px-scroll-snap-type": c === null || c === void 0 || (_c$resolveSnapType = c.resolveSnapType) === null || _c$resolveSnapType === void 0 ? void 0 : _c$resolveSnapType.call(c),
			position: "relative",
			scrollbarWidth: "none",
			display: "flex",
			flexDirection: isVertical ? "column" : "row",
			overflowX: isVertical ? void 0 : "scroll",
			overflowY: isVertical ? "scroll" : void 0,
			overscrollBehaviorX: isVertical ? void 0 : "contain",
			overscrollBehaviorY: isVertical ? "contain" : void 0,
			gap: "var(--px-spacing-items)",
			scrollSnapType: "var(--px-scroll-snap-type)"
		};
	} }
});
//#endregion
//#region node_modules/.pnpm/primevue@5.0.2_vue@3.5.43/node_modules/primevue/carouselcontent/index.mjs
var script = {
	name: "CarouselContent",
	"extends": {
		name: "BaseCarouselContent",
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
		style: CarouselContentStyle,
		provide: function provide() {
			return {
				$pcCarouselContent: this,
				$parentInstance: this
			};
		}
	},
	inheritAttrs: false,
	inject: ["$pcCarousel"],
	methods: { setContentElRef: function setContentElRef(el) {
		var _this$$pcCarousel, _el$$el;
		(_this$$pcCarousel = this.$pcCarousel) === null || _this$$pcCarousel === void 0 || _this$$pcCarousel.setContentEl((_el$$el = el === null || el === void 0 ? void 0 : el.$el) !== null && _el$$el !== void 0 ? _el$$el : el);
	} },
	computed: {
		attrs: function attrs() {
			return mergeProps(this.a11yAttrs, this.ptmi("root"));
		},
		a11yAttrs: function a11yAttrs() {
			var _this$$pcCarousel2, _this$$pcCarousel3, _this$$pcCarousel4, _this$$pcCarousel5, _this$$pcCarousel6, _this$$pcCarousel7, _this$$pcCarousel7$is, _this$$pcCarousel8, _this$$pcCarousel9, _this$$pcCarousel0, _this$$pcCarousel1;
			return {
				ref: this.setContentElRef,
				"data-pc-name": "carouselcontent",
				"data-pc-section": "root",
				style: this.sx("root"),
				"data-orientation": (_this$$pcCarousel2 = this.$pcCarousel) === null || _this$$pcCarousel2 === void 0 ? void 0 : _this$$pcCarousel2.orientation,
				"data-align": (_this$$pcCarousel3 = this.$pcCarousel) === null || _this$$pcCarousel3 === void 0 ? void 0 : _this$$pcCarousel3.align,
				"data-page": (_this$$pcCarousel4 = this.$pcCarousel) === null || _this$$pcCarousel4 === void 0 ? void 0 : _this$$pcCarousel4.d_page,
				"data-swiping": (_this$$pcCarousel5 = this.$pcCarousel) !== null && _this$$pcCarousel5 !== void 0 && _this$$pcCarousel5.swiping ? "" : void 0,
				"data-autosize": (_this$$pcCarousel6 = this.$pcCarousel) !== null && _this$$pcCarousel6 !== void 0 && _this$$pcCarousel6.autoSize ? "" : void 0,
				"aria-live": (_this$$pcCarousel7 = this.$pcCarousel) !== null && _this$$pcCarousel7 !== void 0 && (_this$$pcCarousel7$is = _this$$pcCarousel7.isAutoplay) !== null && _this$$pcCarousel7$is !== void 0 && _this$$pcCarousel7$is.call(_this$$pcCarousel7) ? "off" : "polite",
				onPointerdown: (_this$$pcCarousel8 = this.$pcCarousel) === null || _this$$pcCarousel8 === void 0 ? void 0 : _this$$pcCarousel8.onContentPointerDown,
				onPointermove: (_this$$pcCarousel9 = this.$pcCarousel) === null || _this$$pcCarousel9 === void 0 ? void 0 : _this$$pcCarousel9.onContentPointerMove,
				onPointerup: (_this$$pcCarousel0 = this.$pcCarousel) === null || _this$$pcCarousel0 === void 0 ? void 0 : _this$$pcCarousel0.onContentPointerUp,
				onWheel: (_this$$pcCarousel1 = this.$pcCarousel) === null || _this$$pcCarousel1 === void 0 ? void 0 : _this$$pcCarousel1.onContentWheel
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
		"class": normalizeClass(_ctx.cx("root"))
	}, void 0, void 0, 1);
}
script.render = render;

export { script as default };
//# sourceMappingURL=carouselcontent-COilnHEc.mjs.map
