import { a5 as p, B as BaseStyle } from '../virtual/entry.mjs';
import { s as script$2 } from './basecomponent-xyj7Pl8r.mjs';
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

//#region node_modules/.pnpm/primevue@5.0.2_vue@3.5.43/node_modules/primevue/scrollareascrollbar/style/index.mjs
var ScrollAreaScrollbarStyle = BaseStyle.extend({
	name: "scrollareascrollbar",
	classes: { root: "p-scrollarea-scrollbar" },
	inlineStyles: { root: function root(_ref) {
		var props = _ref.props;
		return {
			position: "absolute",
			touchAction: "none",
			userSelect: "none",
			WebkitUserSelect: "none",
			top: props.orientation === "vertical" ? 0 : void 0,
			bottom: props.orientation === "horizontal" ? 0 : "var(--px-corner-height)",
			insetInlineEnd: props.orientation === "vertical" ? 0 : "var(--px-corner-width)",
			insetInlineStart: props.orientation === "horizontal" ? 0 : void 0
		};
	} }
});
//#endregion
//#region node_modules/.pnpm/primevue@5.0.2_vue@3.5.43/node_modules/primevue/scrollareascrollbar/index.mjs
var script$1 = {
	name: "BaseScrollAreaScrollbar",
	"extends": script$2,
	props: {
		orientation: {
			type: String,
			"default": "vertical"
		},
		as: {
			type: [String, Object],
			"default": "DIV"
		},
		asChild: {
			type: Boolean,
			"default": false
		}
	},
	style: ScrollAreaScrollbarStyle,
	provide: function provide() {
		return {
			$pcScrollAreaScrollbar: this,
			$parentInstance: this
		};
	}
};
function _typeof(o) {
	"@babel/helpers - typeof";
	return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o) {
		return typeof o;
	} : function(o) {
		return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
	}, _typeof(o);
}
function ownKeys(e, r) {
	var t = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var o = Object.getOwnPropertySymbols(e);
		r && (o = o.filter(function(r) {
			return Object.getOwnPropertyDescriptor(e, r).enumerable;
		})), t.push.apply(t, o);
	}
	return t;
}
function _objectSpread(e) {
	for (var r = 1; r < arguments.length; r++) {
		var t = null != arguments[r] ? arguments[r] : {};
		r % 2 ? ownKeys(Object(t), true).forEach(function(r) {
			_defineProperty(e, r, t[r]);
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function(r) {
			Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
		});
	}
	return e;
}
function _defineProperty(e, r, t) {
	return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, {
		value: t,
		enumerable: true,
		configurable: true,
		writable: true
	}) : e[r] = t, e;
}
function _toPropertyKey(t) {
	var i = _toPrimitive(t, "string");
	return "symbol" == _typeof(i) ? i : i + "";
}
function _toPrimitive(t, r) {
	if ("object" != _typeof(t) || !t) return t;
	var e = t[Symbol.toPrimitive];
	if (void 0 !== e) {
		var i = e.call(t, r);
		if ("object" != _typeof(i)) return i;
		throw new TypeError("@@toPrimitive must return a primitive value.");
	}
	return ("string" === r ? String : Number)(t);
}
var script = {
	name: "ScrollAreaScrollbar",
	"extends": script$1,
	inheritAttrs: false,
	inject: ["$pcScrollArea"],
	beforeUnmount: function beforeUnmount() {
		var _this$$pcScrollArea;
		(_this$$pcScrollArea = this.$pcScrollArea) === null || _this$$pcScrollArea === void 0 || _this$$pcScrollArea.setScrollbarEl(null, this.orientation);
	},
	methods: {
		setRef: function setRef(el) {
			var _el$$el, _this$$pcScrollArea2;
			var dom = p(el) ? el : (_el$$el = el === null || el === void 0 ? void 0 : el.$el) !== null && _el$$el !== void 0 ? _el$$el : null;
			(_this$$pcScrollArea2 = this.$pcScrollArea) === null || _this$$pcScrollArea2 === void 0 || _this$$pcScrollArea2.setScrollbarEl(dom, this.orientation);
		},
		onPointerdown: function onPointerdown(event) {
			var _this$$pcScrollArea3;
			(_this$$pcScrollArea3 = this.$pcScrollArea) === null || _this$$pcScrollArea3 === void 0 || _this$$pcScrollArea3.onScrollbarPointerDown(event, this.orientation);
		},
		onPointermove: function onPointermove(event) {
			var _this$$pcScrollArea4;
			(_this$$pcScrollArea4 = this.$pcScrollArea) === null || _this$$pcScrollArea4 === void 0 || _this$$pcScrollArea4.onScrollbarPointerMove(event);
		},
		onPointerup: function onPointerup(event) {
			var _this$$pcScrollArea5;
			(_this$$pcScrollArea5 = this.$pcScrollArea) === null || _this$$pcScrollArea5 === void 0 || _this$$pcScrollArea5.onScrollbarPointerUp(event);
		},
		onWheel: function onWheel(event) {
			var _this$$pcScrollArea6;
			(_this$$pcScrollArea6 = this.$pcScrollArea) === null || _this$$pcScrollArea6 === void 0 || _this$$pcScrollArea6.onScrollbarWheel(event, this.orientation);
		}
	},
	computed: {
		isVertical: function isVertical() {
			return this.orientation === "vertical";
		},
		hovering: function hovering() {
			var _this$$pcScrollArea7;
			return !!((_this$$pcScrollArea7 = this.$pcScrollArea) !== null && _this$$pcScrollArea7 !== void 0 && _this$$pcScrollArea7.hovering);
		},
		scrolling: function scrolling() {
			var _this$$pcScrollArea8, _this$$pcScrollArea9;
			return this.isVertical ? !!((_this$$pcScrollArea8 = this.$pcScrollArea) !== null && _this$$pcScrollArea8 !== void 0 && _this$$pcScrollArea8.scrollingY) : !!((_this$$pcScrollArea9 = this.$pcScrollArea) !== null && _this$$pcScrollArea9 !== void 0 && _this$$pcScrollArea9.scrollingX);
		},
		hidden: function hidden() {
			var _this$$pcScrollArea0;
			var scrollMeta = (_this$$pcScrollArea0 = this.$pcScrollArea) === null || _this$$pcScrollArea0 === void 0 ? void 0 : _this$$pcScrollArea0.scrollMeta;
			return this.isVertical ? !!(scrollMeta !== null && scrollMeta !== void 0 && scrollMeta.hiddenY) : !!(scrollMeta !== null && scrollMeta !== void 0 && scrollMeta.hiddenX);
		},
		scrollbarStyle: function scrollbarStyle() {
			var base = { display: this.hidden ? "none" : void 0 };
			if (this.isVertical) return _objectSpread(_objectSpread({}, base), {}, { bottom: "var(--px-corner-height)" });
			return _objectSpread(_objectSpread({}, base), {}, { insetInlineEnd: "var(--px-corner-width)" });
		},
		attrs: function attrs() {
			return mergeProps(this.a11yAttrs, this.ptmi("root"));
		},
		a11yAttrs: function a11yAttrs() {
			return {
				ref: this.setRef,
				"data-orientation": this.orientation,
				"data-hovering": this.hovering ? "" : void 0,
				"data-scrolling": this.scrolling ? "" : void 0,
				"data-hidden": this.hidden ? "" : void 0,
				style: this.scrollbarStyle,
				onPointerdown: this.onPointerdown,
				onPointermove: this.onPointermove,
				onPointerup: this.onPointerup,
				onWheel: this.onWheel
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
//# sourceMappingURL=scrollareascrollbar-C1SMGWet.mjs.map
