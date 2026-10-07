import { a5 as p, m as ce$1, o as G$1, an as oe$2, t as tt, e as et, q as ot$1, R as R$1, W, B as BaseStyle } from '../virtual/entry.mjs';
import { s as script$3 } from './basecomponent-xyj7Pl8r.mjs';
import { h as h$1$2 } from './chevron-down-3cVYzQrF.mjs';
import { h as h$1 } from './chevron-up-Cgy2W7UM.mjs';
import { R as Ripple } from './ripple-Bhb3fhdC.mjs';
import { _ } from './chevron-right-Ckgvln66.mjs';
import { n as script$2 } from './button-C40_yBwc.mjs';
import { h as h$1$1 } from './chevron-left-Cvt9p-si.mjs';
import { resolveComponent, openBlock, createBlock, resolveDynamicComponent, mergeProps, withCtx, createElementBlock, Fragment, renderSlot, createCommentVNode, createElementVNode, normalizeProps, guardReactiveProps, renderList, createTextVNode, toDisplayString } from 'vue';
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
import './basedirective-BlCM3Le7.mjs';
import './uuid-Dh44iNNj.mjs';
import './rolldown-runtime-D7D4PA-g.mjs';
import './classnames-ryN3v2bf.mjs';
import './spinner-DV-Ha3dz.mjs';
import './badge-DMTHnEO9.mjs';

//#endregion
//#region node_modules/.pnpm/primevue@5.0.2_vue@3.5.43/node_modules/primevue/carousel/style/index.mjs
var CarouselStyle = BaseStyle.extend({
	name: "carousel",
	style: "\n    .p-carousel {\n        display: flex;\n        flex-direction: column;\n    }\n\n    .p-carousel-content-container {\n        display: flex;\n        flex-direction: column;\n        overflow: auto;\n    }\n\n    .p-carousel-content {\n        display: flex;\n        flex-direction: row;\n        gap: dt('carousel.content.gap');\n    }\n\n    .p-carousel-content:dir(rtl) {\n        flex-direction: row-reverse;\n    }\n\n    .p-carousel-viewport {\n        overflow: hidden;\n        width: 100%;\n    }\n\n    .p-carousel-item-list {\n        display: flex;\n        flex-direction: row;\n    }\n\n    .p-carousel-item-list:dir(rtl) {\n        flex-direction: row-reverse;\n    }\n\n    .p-carousel-item {\n        display: block;\n    }\n\n    .p-carousel-prev-button,\n    .p-carousel-next-button {\n        align-self: center;\n        flex-shrink: 0;\n    }\n\n    .p-carousel-indicator-list {\n        display: flex;\n        flex-direction: row;\n        justify-content: center;\n        flex-wrap: wrap;\n        padding: dt('carousel.indicator.list.padding');\n        gap: dt('carousel.indicator.list.gap');\n        margin: 0;\n        list-style: none;\n    }\n\n    .p-carousel-indicator-button {\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        background: dt('carousel.indicator.background');\n        width: dt('carousel.indicator.width');\n        height: dt('carousel.indicator.height');\n        border: 0 none;\n        transition:\n            background dt('carousel.transition.duration'),\n            color dt('carousel.transition.duration'),\n            outline-color dt('carousel.transition.duration'),\n            box-shadow dt('carousel.transition.duration');\n        outline-color: transparent;\n        border-radius: dt('carousel.indicator.border.radius');\n        padding: 0;\n        margin: 0;\n        user-select: none;\n        cursor: pointer;\n    }\n\n    .p-carousel-indicator-button:focus-visible {\n        box-shadow: dt('carousel.indicator.focus.ring.shadow');\n        outline: dt('carousel.indicator.focus.ring.width') dt('carousel.indicator.focus.ring.style') dt('carousel.indicator.focus.ring.color');\n        outline-offset: dt('carousel.indicator.focus.ring.offset');\n    }\n\n    .p-carousel-indicator-button:hover {\n        background: dt('carousel.indicator.hover.background');\n    }\n\n    .p-carousel-indicator-active .p-carousel-indicator-button,\n    .p-carousel-indicator-active.p-carousel-indicator-button {\n        background: dt('carousel.indicator.active.background');\n    }\n\n    .p-carousel-vertical .p-carousel-content {\n        flex-direction: column;\n    }\n\n    .p-carousel-vertical .p-carousel-item-list {\n        flex-direction: column;\n        height: 100%;\n    }\n\n    .p-items-hidden .p-carousel-item {\n        visibility: hidden;\n    }\n\n    .p-items-hidden .p-carousel-item.p-carousel-item-active {\n        visibility: visible;\n    }\n",
	classes: {
		root: function root(_ref) {
			var instance = _ref.instance;
			return ["p-carousel p-component", {
				"p-carousel-vertical": instance.isVertical(),
				"p-carousel-horizontal": !instance.isVertical()
			}];
		},
		header: "p-carousel-header",
		contentContainer: "p-carousel-content-container",
		content: "p-carousel-content",
		pcPrevButton: function pcPrevButton(_ref2) {
			return ["p-carousel-prev-button", { "p-disabled": _ref2.instance.backwardIsDisabled }];
		},
		viewport: "p-carousel-viewport",
		itemList: "p-carousel-item-list",
		itemClone: function itemClone(_ref3) {
			var index = _ref3.index, value = _ref3.value, totalShiftedItems = _ref3.totalShiftedItems, d_numVisible = _ref3.d_numVisible;
			return ["p-carousel-item p-carousel-item-clone", {
				"p-carousel-item-active": totalShiftedItems * -1 === value.length + d_numVisible,
				"p-carousel-item-start": index === 0,
				"p-carousel-item-end": value.slice(-1 * d_numVisible).length - 1 === index
			}];
		},
		item: function item(_ref4) {
			var instance = _ref4.instance, index = _ref4.index;
			return ["p-carousel-item", {
				"p-carousel-item-active": instance.firstIndex() <= index && instance.lastIndex() >= index,
				"p-carousel-item-start": instance.firstIndex() === index,
				"p-carousel-item-end": instance.lastIndex() === index
			}];
		},
		pcNextButton: function pcNextButton(_ref5) {
			return ["p-carousel-next-button", { "p-disabled": _ref5.instance.forwardIsDisabled }];
		},
		indicatorList: "p-carousel-indicator-list",
		indicator: function indicator(_ref6) {
			var instance = _ref6.instance, index = _ref6.index;
			return ["p-carousel-indicator", { "p-carousel-indicator-active": instance.d_page === index }];
		},
		indicatorButton: "p-carousel-indicator-button",
		footer: "p-carousel-footer"
	}
});
//#endregion
//#region node_modules/.pnpm/primevue@5.0.2_vue@3.5.43/node_modules/primevue/carousel/index.mjs
var script$1 = {
	name: "BaseCarousel",
	"extends": script$3,
	props: {
		value: null,
		page: {
			type: Number,
			"default": null
		},
		numVisible: {
			type: Number,
			"default": 1
		},
		numScroll: {
			type: Number,
			"default": 1
		},
		responsiveOptions: Array,
		orientation: {
			type: String,
			"default": "horizontal"
		},
		verticalViewPortHeight: {
			type: String,
			"default": "300px"
		},
		contentClass: String,
		containerClass: String,
		indicatorsContentClass: String,
		circular: {
			type: Boolean,
			"default": false
		},
		autoplayInterval: {
			type: Number,
			"default": 0
		},
		showNavigators: {
			type: Boolean,
			"default": true
		},
		showIndicators: {
			type: Boolean,
			"default": true
		},
		prevButtonProps: {
			type: Object,
			"default": function _default() {
				return {
					severity: "secondary",
					text: true,
					rounded: true,
					iconOnly: true
				};
			}
		},
		nextButtonProps: {
			type: Object,
			"default": function _default() {
				return {
					severity: "secondary",
					text: true,
					rounded: true,
					iconOnly: true
				};
			}
		},
		as: {
			type: [String, Object],
			"default": "DIV"
		},
		align: {
			type: String,
			"default": "start"
		},
		loop: {
			type: Boolean,
			"default": false
		},
		snapType: {
			type: String,
			"default": "mandatory"
		},
		spacing: {
			type: Number,
			"default": 16
		},
		autoSize: {
			type: Boolean,
			"default": false
		},
		slidesPerPage: {
			type: Number,
			"default": 1
		},
		slide: {
			type: Number,
			"default": null
		}
	},
	style: CarouselStyle,
	provide: function provide() {
		return {
			$pcCarousel: this,
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
function _createForOfIteratorHelper(r, e) {
	var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
	if (!t) {
		if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e) {
			t && (r = t);
			var _n = 0, F = function F() {};
			return {
				s: F,
				n: function n() {
					return _n >= r.length ? { done: true } : {
						done: false,
						value: r[_n++]
					};
				},
				e: function e(r) {
					throw r;
				},
				f: F
			};
		}
		throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
	}
	var o, a = true, u = false;
	return {
		s: function s() {
			t = t.call(r);
		},
		n: function n() {
			var r = t.next();
			return a = r.done, r;
		},
		e: function e(r) {
			u = true, o = r;
		},
		f: function f() {
			try {
				a || null == t["return"] || t["return"]();
			} finally {
				if (u) throw o;
			}
		}
	};
}
function _toConsumableArray(r) {
	return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread();
}
function _nonIterableSpread() {
	throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray(r, a) {
	if (r) {
		if ("string" == typeof r) return _arrayLikeToArray(r, a);
		var t = {}.toString.call(r).slice(8, -1);
		return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0;
	}
}
function _iterableToArray(r) {
	if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r);
}
function _arrayWithoutHoles(r) {
	if (Array.isArray(r)) return _arrayLikeToArray(r);
}
function _arrayLikeToArray(r, a) {
	(null == a || a > r.length) && (a = r.length);
	for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
	return n;
}
var SWIPE_THRESHOLD = 20;
var POINTER_SWIPE_DISTANCE = 6;
var WHEEL_DEBOUNCE_MS = 80;
var SCROLL_DEBOUNCE_MS = 80;
var INTERSECTION_THRESHOLD = .6;
var TRANSITION_DURATION_MS = 500;
var script = {
	name: "Carousel",
	"extends": script$1,
	inheritAttrs: false,
	emits: ["update:page", "update:slide"],
	isRemainingItemsAdded: false,
	mutationObserver: null,
	intersectionObserver: null,
	resizeObserver: null,
	scrollTimeout: null,
	wheelTimeout: null,
	onScrollHandler: null,
	data: function data() {
		var _this$page, _this$page2;
		return {
			remainingItems: 0,
			d_numVisible: this.numVisible,
			d_numScroll: this.numScroll,
			d_oldNumScroll: 0,
			d_oldNumVisible: 0,
			d_oldValue: [],
			d_page: (_this$page = this.page) !== null && _this$page !== void 0 ? _this$page : 0,
			totalShiftedItems: ((_this$page2 = this.page) !== null && _this$page2 !== void 0 ? _this$page2 : 0) * this.numScroll * -1,
			allowAutoplay: !!this.autoplayInterval,
			d_circular: this.circular || this.allowAutoplay,
			swiping: false,
			isNextDisabled: false,
			isPrevDisabled: false,
			snapPoints: /* @__PURE__ */ new Set(),
			scrollSnaps: [],
			initialPageApplied: false,
			initialControlledScroll: false,
			swipeStartPoint: {
				x: 0,
				y: 0
			},
			startPos: null,
			isRealSwipe: false,
			contentEl: null
		};
	},
	watch: {
		page: function page(newValue) {
			if (newValue == null) return;
			if (this.snapPoints.size > 0) {
				if (this.slide != null) return;
				var instant = !this.initialControlledScroll;
				this.initialControlledScroll = true;
				this.scrollToPage(newValue, instant);
			} else {
				if (newValue > this.d_page) this.navForward({}, newValue);
				else if (newValue < this.d_page) this.navBackward({}, newValue);
				this.d_page = newValue;
			}
		},
		circular: function circular(newValue) {
			this.d_circular = newValue || !!this.autoplayInterval;
		},
		autoplayInterval: function autoplayInterval(newValue) {
			this.allowAutoplay = !!newValue;
			this.d_circular = this.circular || !!newValue;
			if (!newValue) this.stopAutoplay();
		},
		numVisible: function numVisible(newValue, oldValue) {
			this.d_numVisible = newValue;
			this.d_oldNumVisible = oldValue;
		},
		numScroll: function numScroll(newValue, oldValue) {
			this.d_oldNumScroll = oldValue;
			this.d_numScroll = newValue;
		},
		value: function value(newValue, oldValue) {
			this.d_oldValue = oldValue || [];
			if (!(newValue !== null && newValue !== void 0 && newValue.length)) this.remainingItems = 0;
		},
		contentEl: function contentEl(newEl, oldEl) {
			if (oldEl && oldEl !== newEl) {
				this.unbindResizeObserver();
				this.unbindMutationObserver();
				this.unbindIntersectionObserver();
				this.unbindContentScrollListener();
			}
			if (newEl) {
				this.bindResizeObserver();
				this.bindMutationObserver();
				this.bindIntersectionObserver();
				this.bindContentScrollListener();
				this.computeSnapPoints();
				this.updateNavigationState();
			} else {
				this.unbindResizeObserver();
				this.unbindMutationObserver();
				this.unbindIntersectionObserver();
				this.unbindContentScrollListener();
			}
		},
		snapPoints: function snapPoints(newSet, oldSet) {
			if (!(newSet !== null && newSet !== void 0 && newSet.size)) {
				this.updateNavigationState();
				return;
			}
			var page = Math.max(0, Math.min(this.d_page, newSet.size - 1));
			this.updateNavigationState(page);
			if (!this.initialPageApplied && (!oldSet || oldSet.size === 0)) {
				this.initialPageApplied = true;
				if (this.slide != null) {
					this.initialControlledScroll = true;
					this.scrollToSlide(this.slide, true);
				} else if (this.page != null) {
					this.initialControlledScroll = true;
					this.scrollToPage(this.page, true);
				} else this.d_page = page;
			}
		},
		slide: function slide(newSlide) {
			if (newSlide == null) return;
			if (this.snapPoints.size === 0) return;
			var instant = !this.initialControlledScroll;
			this.initialControlledScroll = true;
			this.scrollToSlide(newSlide, instant);
		}
	},
	mounted: function mounted() {
		if (!this.hasCarouselValue) return;
		if (this.empty) return;
		var stateChanged = false;
		this.initializeLegacyCarousel();
		if (this.isCircular()) {
			var totalShiftedItems = this.totalShiftedItems;
			if (this.d_page === 0) totalShiftedItems = -1 * this.d_numVisible;
			else if (totalShiftedItems === 0) {
				totalShiftedItems = -1 * this.value.length;
				if (this.remainingItems > 0) this.isRemainingItemsAdded = true;
			}
			if (totalShiftedItems !== this.totalShiftedItems) {
				this.totalShiftedItems = totalShiftedItems;
				stateChanged = true;
			}
		}
		if (!stateChanged && this.isAutoplay()) this.startAutoplay();
	},
	updated: function updated() {
		if (!this.hasCarouselValue) return;
		if (this.$refs.itemsContainer && !this.carouselStyle) this.initializeLegacyCarousel();
		if (!this.empty) {
			var isCircular = this.isCircular();
			var stateChanged = false;
			var totalShiftedItems = this.totalShiftedItems;
			if (this.autoplayInterval) this.stopAutoplay();
			if (this.d_oldNumScroll !== this.d_numScroll || this.d_oldNumVisible !== this.d_numVisible || this.d_oldValue.length !== this.value.length) {
				this.remainingItems = (this.value.length - this.d_numVisible) % this.d_numScroll;
				var page = this.d_page;
				if (this.totalIndicators !== 0 && page >= this.totalIndicators) {
					page = this.totalIndicators - 1;
					this.$emit("update:page", page);
					this.d_page = page;
					stateChanged = true;
				}
				totalShiftedItems = page * this.d_numScroll * -1;
				if (isCircular) totalShiftedItems -= this.d_numVisible;
				if (page === this.totalIndicators - 1 && this.remainingItems > 0) {
					totalShiftedItems += -1 * this.remainingItems + this.d_numScroll;
					this.isRemainingItemsAdded = true;
				} else this.isRemainingItemsAdded = false;
				if (totalShiftedItems !== this.totalShiftedItems) {
					this.totalShiftedItems = totalShiftedItems;
					stateChanged = true;
				}
				this.d_oldNumScroll = this.d_numScroll;
				this.d_oldNumVisible = this.d_numVisible;
				this.d_oldValue = this.value;
				this.$refs.itemsContainer.style.transform = this.isVertical() ? "translate3d(0, ".concat(totalShiftedItems * (100 / this.d_numVisible), "%, 0)") : "translate3d(".concat(totalShiftedItems * (100 / this.d_numVisible), "%, 0, 0)");
			}
			if (isCircular) {
				if (this.d_page === 0) totalShiftedItems = -1 * this.d_numVisible;
				else if (totalShiftedItems === 0) {
					totalShiftedItems = -1 * this.value.length;
					if (this.remainingItems > 0) this.isRemainingItemsAdded = true;
				}
				if (totalShiftedItems !== this.totalShiftedItems) {
					this.totalShiftedItems = totalShiftedItems;
					stateChanged = true;
				}
			}
			if (!stateChanged && this.isAutoplay()) this.startAutoplay();
		}
	},
	beforeUnmount: function beforeUnmount() {
		if (this.responsiveOptions) this.unbindDocumentListeners();
		if (this.autoplayInterval) this.stopAutoplay();
		this.unbindResizeObserver();
		this.unbindMutationObserver();
		this.unbindIntersectionObserver();
		this.unbindContentScrollListener();
		if (this.carouselStyle) {
			this.carouselStyle.remove();
			this.carouselStyle = null;
		}
	},
	methods: {
		initializeLegacyCarousel: function initializeLegacyCarousel() {
			if (!this.carouselStyle) this.createStyle();
			this.calculatePosition();
			if (this.responsiveOptions && !this.documentResizeListener) this.bindDocumentListeners();
		},
		getIndicatorPTOptions: function getIndicatorPTOptions(key, index) {
			return this.ptm(key, { context: { highlighted: index === this.d_page } });
		},
		getItemPTOptions: function getItemPTOptions(key, index) {
			return this.ptm(key, { context: {
				index,
				active: this.firstIndex() <= index && this.lastIndex() >= index,
				start: this.firstIndex() === index,
				end: this.lastIndex() === index
			} });
		},
		updateNavigationState: function updateNavigationState() {
			var page = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : this.d_page;
			var pageCount = this.snapPoints.size;
			if (!pageCount) {
				this.isPrevDisabled = true;
				this.isNextDisabled = true;
				return;
			}
			if (this.loop) {
				this.isPrevDisabled = false;
				this.isNextDisabled = false;
				return;
			}
			this.isPrevDisabled = page <= 0;
			this.isNextDisabled = page >= pageCount - 1;
		},
		step: function step(dir, page) {
			var totalShiftedItems = this.totalShiftedItems;
			var isCircular = this.isCircular();
			if (page != null) {
				totalShiftedItems = this.d_numScroll * page * -1;
				if (isCircular) totalShiftedItems -= this.d_numVisible;
				this.isRemainingItemsAdded = false;
			} else {
				totalShiftedItems += this.d_numScroll * dir;
				if (this.isRemainingItemsAdded) {
					totalShiftedItems += this.remainingItems - this.d_numScroll * dir;
					this.isRemainingItemsAdded = false;
				}
				var originalShiftedItems = isCircular ? totalShiftedItems + this.d_numVisible : totalShiftedItems;
				page = Math.abs(Math.floor(originalShiftedItems / this.d_numScroll));
			}
			if (isCircular && this.d_page === this.totalIndicators - 1 && dir === -1) {
				totalShiftedItems = -1 * (this.value.length + this.d_numVisible);
				page = 0;
			} else if (isCircular && this.d_page === 0 && dir === 1) {
				totalShiftedItems = 0;
				page = this.totalIndicators - 1;
			} else if (page === this.totalIndicators - 1 && this.remainingItems > 0) {
				totalShiftedItems += this.remainingItems * -1 - this.d_numScroll * dir;
				this.isRemainingItemsAdded = true;
			}
			if (this.$refs.itemsContainer) {
				!this.isUnstyled && W(this.$refs.itemsContainer, "p-items-hidden");
				this.$refs.itemsContainer.style.transform = this.isVertical() ? "translate3d(0, ".concat(totalShiftedItems * (100 / this.d_numVisible), "%, 0)") : "translate3d(".concat(totalShiftedItems * (100 / this.d_numVisible), "%, 0, 0)");
				this.$refs.itemsContainer.style.transition = "transform ".concat(TRANSITION_DURATION_MS, "ms ease 0s");
			}
			this.totalShiftedItems = totalShiftedItems;
			this.$emit("update:page", page);
			this.d_page = page;
		},
		calculatePosition: function calculatePosition() {
			if (this.$refs.itemsContainer && this.responsiveOptions) {
				var windowWidth = (void 0).innerWidth;
				var matchedResponsiveOptionsData = {
					numVisible: this.numVisible,
					numScroll: this.numScroll
				};
				for (var i = 0; i < this.responsiveOptions.length; i++) {
					var res = this.responsiveOptions[i];
					if (parseInt(res.breakpoint, 10) >= windowWidth) matchedResponsiveOptionsData = res;
				}
				if (this.d_numScroll !== matchedResponsiveOptionsData.numScroll) {
					var page = this.d_page;
					page = parseInt(page * this.d_numScroll / matchedResponsiveOptionsData.numScroll);
					this.totalShiftedItems = matchedResponsiveOptionsData.numScroll * page * -1;
					if (this.isCircular()) this.totalShiftedItems -= matchedResponsiveOptionsData.numVisible;
					this.d_numScroll = matchedResponsiveOptionsData.numScroll;
					this.$emit("update:page", page);
					this.d_page = page;
				}
				if (this.d_numVisible !== matchedResponsiveOptionsData.numVisible) this.d_numVisible = matchedResponsiveOptionsData.numVisible;
			}
		},
		navBackward: function navBackward(e, index) {
			if (this.d_circular || this.d_page !== 0) this.step(1, index);
			this.allowAutoplay = false;
			if (e.cancelable) e.preventDefault();
		},
		navForward: function navForward(e, index) {
			if (this.d_circular || this.d_page < this.totalIndicators - 1) this.step(-1, index);
			this.allowAutoplay = false;
			if (e.cancelable) e.preventDefault();
		},
		onIndicatorClick: function onIndicatorClick(e, index) {
			var page = this.d_page;
			if (index > page) this.navForward(e, index);
			else if (index < page) this.navBackward(e, index);
		},
		onTransitionEnd: function onTransitionEnd() {
			if (this.$refs.itemsContainer) {
				!this.isUnstyled && R$1(this.$refs.itemsContainer, "p-items-hidden");
				this.$refs.itemsContainer.style.transition = "";
				if ((this.d_page === 0 || this.d_page === this.totalIndicators - 1) && this.isCircular()) this.$refs.itemsContainer.style.transform = this.isVertical() ? "translate3d(0, ".concat(this.totalShiftedItems * (100 / this.d_numVisible), "%, 0)") : "translate3d(".concat(this.totalShiftedItems * (100 / this.d_numVisible), "%, 0, 0)");
			}
		},
		onTouchStart: function onTouchStart(e) {
			var touchobj = e.changedTouches[0];
			this.startPos = {
				x: touchobj.pageX,
				y: touchobj.pageY
			};
		},
		onTouchMove: function onTouchMove(e) {
			var touchobj = e.changedTouches[0];
			var diff = this.isVertical() ? touchobj.pageY - this.startPos.y : touchobj.pageX - this.startPos.x;
			if (Math.abs(diff) > SWIPE_THRESHOLD && e.cancelable) e.preventDefault();
		},
		onTouchEnd: function onTouchEnd(e) {
			var touchobj = e.changedTouches[0];
			if (this.isVertical()) this.changePageOnTouch(e, touchobj.pageY - this.startPos.y);
			else this.changePageOnTouch(e, touchobj.pageX - this.startPos.x);
		},
		changePageOnTouch: function changePageOnTouch(e, diff) {
			if (Math.abs(diff) > SWIPE_THRESHOLD) {
				if (diff < 0) this.navForward(e);
				else this.navBackward(e);
			}
		},
		onIndicatorKeydown: function onIndicatorKeydown(event) {
			switch (event.code) {
				case "ArrowRight":
					this.onRightKey();
					break;
				case "ArrowLeft":
					this.onLeftKey();
					break;
				case "Home":
					this.onHomeKey();
					event.preventDefault();
					break;
				case "End":
					this.onEndKey();
					event.preventDefault();
					break;
				case "ArrowUp":
				case "ArrowDown":
				case "PageUp":
				case "PageDown":
					event.preventDefault();
					break;
				case "Tab": this.onTabKey();
			}
		},
		onRightKey: function onRightKey() {
			var indicators = _toConsumableArray(tt(this.$refs.indicatorContent, "[data-pc-section=\"indicator\"]"));
			var activeIndex = this.findFocusedIndicatorIndex();
			this.changedFocusedIndicator(activeIndex, activeIndex + 1 === indicators.length ? indicators.length - 1 : activeIndex + 1);
		},
		onLeftKey: function onLeftKey() {
			var activeIndex = this.findFocusedIndicatorIndex();
			this.changedFocusedIndicator(activeIndex, activeIndex - 1 <= 0 ? 0 : activeIndex - 1);
		},
		onHomeKey: function onHomeKey() {
			var activeIndex = this.findFocusedIndicatorIndex();
			this.changedFocusedIndicator(activeIndex, 0);
		},
		onEndKey: function onEndKey() {
			var indicators = _toConsumableArray(tt(this.$refs.indicatorContent, "[data-pc-section=\"indicator\"]"));
			var activeIndex = this.findFocusedIndicatorIndex();
			this.changedFocusedIndicator(activeIndex, indicators.length - 1);
		},
		onTabKey: function onTabKey() {
			var indicators = _toConsumableArray(tt(this.$refs.indicatorContent, "[data-pc-section=\"indicator\"]"));
			var highlightedIndex = indicators.findIndex(function(ind) {
				return ot$1(ind, "data-p-active") === true;
			});
			var activeIndicator = et(this.$refs.indicatorContent, "[data-pc-section=\"indicator\"] > button[tabindex=\"0\"]");
			var activeIndex = indicators.findIndex(function(ind) {
				return ind === activeIndicator.parentElement;
			});
			indicators[activeIndex].children[0].tabIndex = "-1";
			indicators[highlightedIndex].children[0].tabIndex = "0";
		},
		findFocusedIndicatorIndex: function findFocusedIndicatorIndex() {
			var indicators = _toConsumableArray(tt(this.$refs.indicatorContent, "[data-pc-section=\"indicator\"]"));
			var activeIndicator = et(this.$refs.indicatorContent, "[data-pc-section=\"indicator\"] > button[tabindex=\"0\"]");
			return indicators.findIndex(function(ind) {
				return ind === activeIndicator.parentElement;
			});
		},
		changedFocusedIndicator: function changedFocusedIndicator(prevInd, nextInd) {
			var indicators = _toConsumableArray(tt(this.$refs.indicatorContent, "[data-pc-section=\"indicator\"]"));
			indicators[prevInd].children[0].tabIndex = "-1";
			indicators[nextInd].children[0].tabIndex = "0";
			indicators[nextInd].children[0].focus();
		},
		bindDocumentListeners: function bindDocumentListeners() {
			var _this = this;
			if (!this.documentResizeListener) {
				this.documentResizeListener = function(e) {
					_this.calculatePosition(e);
				};
				(void 0).addEventListener("resize", this.documentResizeListener);
			}
		},
		unbindDocumentListeners: function unbindDocumentListeners() {
			if (this.documentResizeListener) {
				(void 0).removeEventListener("resize", this.documentResizeListener);
				this.documentResizeListener = null;
			}
		},
		startAutoplay: function startAutoplay() {
			var _this2 = this;
			this.interval = setInterval(function() {
				if (_this2.d_page === _this2.totalIndicators - 1) _this2.step(-1, 0);
				else _this2.step(-1, _this2.d_page + 1);
			}, this.autoplayInterval);
		},
		stopAutoplay: function stopAutoplay() {
			if (this.interval) {
				clearInterval(this.interval);
				this.interval = null;
			}
		},
		createStyle: function createStyle() {
			if (!this.carouselStyle) {
				var _this$$primevue;
				this.carouselStyle = (void 0).createElement("style");
				this.carouselStyle.type = "text/css";
				ce$1(this.carouselStyle, "nonce", (_this$$primevue = this.$primevue) === null || _this$$primevue === void 0 || (_this$$primevue = _this$$primevue.config) === null || _this$$primevue === void 0 || (_this$$primevue = _this$$primevue.csp) === null || _this$$primevue === void 0 ? void 0 : _this$$primevue.nonce);
				(void 0).body.appendChild(this.carouselStyle);
			}
			var innerHTML = "\n                .p-carousel[".concat(this.$attrSelector, "] .p-carousel-item {\n                    flex: 1 0 ").concat(100 / this.d_numVisible, "%\n                }\n            ");
			if (this.responsiveOptions && !this.isUnstyled) {
				var _responsiveOptions = _toConsumableArray(this.responsiveOptions);
				var comparer = G$1();
				_responsiveOptions.sort(function(data1, data2) {
					var value1 = data1.breakpoint;
					var value2 = data2.breakpoint;
					return oe$2(value1, value2, -1, comparer);
				});
				for (var i = 0; i < _responsiveOptions.length; i++) {
					var res = _responsiveOptions[i];
					innerHTML += "\n                        @media screen and (max-width: ".concat(res.breakpoint, ") {\n                            .p-carousel[").concat(this.$attrSelector, "] .p-carousel-item {\n                                flex: 1 0 ").concat(100 / res.numVisible, "%\n                            }\n                        }\n                    ");
				}
			}
			this.carouselStyle.innerHTML = innerHTML;
		},
		isVertical: function isVertical() {
			return this.orientation === "vertical";
		},
		hasValidItemCount: function hasValidItemCount() {
			return this.value && this.value.length > this.d_numVisible;
		},
		isCircular: function isCircular() {
			return this.hasValidItemCount() && this.d_circular;
		},
		isAutoplay: function isAutoplay() {
			return this.hasValidItemCount() && this.autoplayInterval && this.allowAutoplay;
		},
		firstIndex: function firstIndex() {
			return this.isCircular() ? -1 * (this.totalShiftedItems + this.d_numVisible) : this.totalShiftedItems * -1;
		},
		lastIndex: function lastIndex() {
			return this.firstIndex() + this.d_numVisible - 1;
		},
		ariaSlideNumber: function ariaSlideNumber(value) {
			return this.$primevue.config.locale.aria ? this.$primevue.config.locale.aria.slideNumber.replace(/{slideNumber}/g, value) : void 0;
		},
		ariaPageLabel: function ariaPageLabel(value) {
			return this.$primevue.config.locale.aria ? this.$primevue.config.locale.aria.pageLabel.replace(/{page}/g, value) : void 0;
		},
		resolveSnapType: function resolveSnapType() {
			var _this$snapType;
			var axis = this.orientation === "vertical" ? "y" : "x";
			return "".concat(axis, " ").concat((_this$snapType = this.snapType) !== null && _this$snapType !== void 0 ? _this$snapType : "mandatory");
		},
		areSetsEqual: function areSetsEqual(a, b) {
			if (a.size !== b.size) return false;
			var _iterator = _createForOfIteratorHelper(a), _step;
			try {
				for (_iterator.s(); !(_step = _iterator.n()).done;) {
					var value = _step.value;
					if (!b.has(value)) return false;
				}
			} catch (err) {
				_iterator.e(err);
			} finally {
				_iterator.f();
			}
			return true;
		},
		observeResizeItems: function observeResizeItems() {
			var _this3 = this;
			if (!this.resizeObserver) return;
			this.contentEl.querySelectorAll("[data-pc-name=\"carouselitem\"]").forEach(function(item) {
				return _this3.resizeObserver.observe(item);
			});
		},
		observeIntersectionItems: function observeIntersectionItems() {
			var _this4 = this;
			if (!this.intersectionObserver) return;
			this.contentEl.querySelectorAll("[data-pc-name=\"carouselitem\"]").forEach(function(item) {
				return _this4.intersectionObserver.observe(item);
			});
		},
		computeSnapPoints: function computeSnapPoints() {
			var _this5 = this;
			var content = this.contentEl;
			var isHorizontal = this.orientation !== "vertical";
			var trackSize = isHorizontal ? content.clientWidth : content.clientHeight;
			var maxOffset = Math.max(0, isHorizontal ? content.scrollWidth - trackSize : content.scrollHeight - trackSize);
			var snaps = [];
			content.querySelectorAll("[data-pc-name=\"carouselitem\"]").forEach(function(item) {
				var offset = isHorizontal ? item.offsetLeft : item.offsetTop;
				var size = isHorizontal ? item.clientWidth : item.clientHeight;
				var snapPoint = offset;
				if (_this5.align === "center") snapPoint = offset - (trackSize - size) / 2;
				else if (_this5.align === "end") snapPoint = offset - (trackSize - size);
				var clamped = Math.max(0, Math.min(snapPoint, maxOffset));
				snaps.push(clamped);
			});
			var newSnapPoints = new Set(snaps.map(Number));
			if (this.areSetsEqual(this.snapPoints, newSnapPoints)) return;
			this.snapPoints = newSnapPoints;
			this.scrollSnaps = snaps;
		},
		setPage: function setPage(page) {
			var slideOverride = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
			this.updateNavigationState(page);
			this.d_page = page;
			this.$emit("update:page", page);
			var snap = Array.from(this.snapPoints)[page];
			var slide = slideOverride !== null && slideOverride !== void 0 ? slideOverride : this.scrollSnaps.indexOf(snap);
			if (slide != null && slide !== -1) this.$emit("update:slide", slide);
		},
		setToClosest: function setToClosest() {
			if (this.snapPoints.size === 0) return;
			var scrollPos = this.orientation === "horizontal" ? this.contentEl.scrollLeft : this.contentEl.scrollTop;
			var closestSnapPoint = Array.from(this.snapPoints).reduce(function(closest, point) {
				return Math.abs(point - scrollPos) < Math.abs(closest - scrollPos) ? point : closest;
			}, Infinity);
			var index = Array.from(this.snapPoints).indexOf(closestSnapPoint);
			this.setPage(index);
			return index;
		},
		scrollToPage: function scrollToPage(page) {
			var instant = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
			if (this.snapPoints.size === 0) return;
			var target = page !== null && page !== void 0 ? page : this.d_page;
			var clampedPage = this.loop ? (target + this.snapPoints.size) % this.snapPoints.size : Math.max(0, Math.min(target, this.snapPoints.size - 1));
			this.setPage(clampedPage);
			this.scrollToInternal(Array.from(this.snapPoints)[clampedPage], instant);
		},
		next: function next() {
			this.scrollToPage(this.d_page + 1);
		},
		prev: function prev() {
			this.scrollToPage(this.d_page - 1);
		},
		scrollToInternal: function scrollToInternal(snapPoint) {
			var instant = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
			this.contentEl.scrollTo(_defineProperty(_defineProperty({}, this.orientation === "horizontal" ? "left" : "top", snapPoint), "behavior", instant ? "instant" : "smooth"));
		},
		scrollToSlide: function scrollToSlide(slide) {
			var instant = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
			if (this.snapPoints.size === 0 || this.scrollSnaps.length === 0) return;
			var clampedSlide = Math.max(0, Math.min(slide, this.scrollSnaps.length - 1));
			var snap = this.scrollSnaps[clampedSlide];
			this.scrollToInternal(snap, instant);
			var page = Array.from(this.snapPoints).indexOf(snap);
			this.setPage(page, clampedSlide);
		},
		onContentPointerDown: function onContentPointerDown(e) {
			if (e.button !== 0) return;
			if (e.pointerType === "touch") return;
			this.swiping = true;
			this.swipeStartPoint = {
				x: e.clientX,
				y: e.clientY
			};
			this.isRealSwipe = false;
		},
		onContentPointerMove: function onContentPointerMove(e) {
			var _window$getSelection$, _window$getSelection;
			if (!this.swiping || e.pointerType === "touch") return;
			var deltaX = e.clientX - this.swipeStartPoint.x;
			var deltaY = e.clientY - this.swipeStartPoint.y;
			if (Math.abs(deltaX) + Math.abs(deltaY) < POINTER_SWIPE_DISTANCE) return;
			if (((_window$getSelection$ = (_window$getSelection = (void 0).getSelection()) === null || _window$getSelection === void 0 ? void 0 : _window$getSelection.toString().length) !== null && _window$getSelection$ !== void 0 ? _window$getSelection$ : 0) > 0) return;
			e.currentTarget.setPointerCapture(e.pointerId);
			this.contentEl.style.userSelect = "none";
			this.isRealSwipe = true;
			this.contentEl.style.scrollSnapType = "none";
			this.contentEl.scrollBy({
				left: -e.movementX,
				top: -e.movementY,
				behavior: "instant"
			});
			e.preventDefault();
		},
		onContentPointerUp: function onContentPointerUp(e) {
			var _e$currentTarget$hasP, _e$currentTarget, _this6 = this;
			this.swiping = false;
			if ((_e$currentTarget$hasP = (_e$currentTarget = e.currentTarget).hasPointerCapture) !== null && _e$currentTarget$hasP !== void 0 && _e$currentTarget$hasP.call(_e$currentTarget, e.pointerId)) e.currentTarget.releasePointerCapture(e.pointerId);
			if (!this.isRealSwipe) return;
			this.contentEl.style.userSelect = "";
			var scrollPos = this.orientation === "horizontal" ? this.contentEl.scrollLeft : this.contentEl.scrollTop;
			var points = this.snapPoints;
			if (points.size === 0) return;
			var closestSnapPoint = Array.from(points).reduce(function(closest, point) {
				return Math.abs(point - scrollPos) < Math.abs(closest - scrollPos) ? point : closest;
			}, Infinity);
			var index = Array.from(points).indexOf(closestSnapPoint);
			requestAnimationFrame(function() {
				if (closestSnapPoint !== void 0) _this6.scrollToPage(index);
				requestAnimationFrame(function() {
					_this6.contentEl.style.scrollSnapType = _this6.resolveSnapType();
				});
			});
		},
		onContentWheel: function onContentWheel(e) {
			var _this7 = this;
			if (this.wheelTimeout) clearTimeout(this.wheelTimeout);
			this.wheelTimeout = setTimeout(function() {
				var primaryDelta = _this7.orientation === "horizontal" ? e.deltaX || e.deltaY : e.deltaY || e.deltaX;
				if (primaryDelta > 0 && _this7.isNextDisabled) return;
				if (primaryDelta < 0 && _this7.isPrevDisabled) return;
				_this7.setToClosest();
			}, WHEEL_DEBOUNCE_MS);
		},
		setContentEl: function setContentEl(el) {
			this.contentEl = p(el) ? el : null;
		},
		bindResizeObserver: function bindResizeObserver() {
			var _this8 = this;
			this.resizeObserver = new ResizeObserver(function() {
				if (!_this8.contentEl) return;
				_this8.computeSnapPoints();
				var closest = _this8.setToClosest();
				_this8.scrollToPage(closest !== null && closest !== void 0 ? closest : _this8.d_page, true);
			});
			this.resizeObserver.observe(this.contentEl);
			this.observeResizeItems();
		},
		unbindResizeObserver: function unbindResizeObserver() {
			if (this.resizeObserver) {
				this.resizeObserver.disconnect();
				this.resizeObserver = null;
			}
		},
		bindMutationObserver: function bindMutationObserver() {
			var _this9 = this;
			this.mutationObserver = new MutationObserver(function() {
				if (!_this9.contentEl) return;
				_this9.computeSnapPoints();
				_this9.observeResizeItems();
				_this9.observeIntersectionItems();
				requestAnimationFrame(function() {
					if (!_this9.contentEl) return;
					var closest = _this9.setToClosest();
					_this9.scrollToPage(closest !== null && closest !== void 0 ? closest : _this9.d_page, true);
				});
			});
			this.mutationObserver.observe(this.contentEl, {
				childList: true,
				subtree: true
			});
		},
		unbindMutationObserver: function unbindMutationObserver() {
			if (this.mutationObserver) {
				this.mutationObserver.disconnect();
				this.mutationObserver = null;
			}
		},
		bindIntersectionObserver: function bindIntersectionObserver() {
			this.intersectionObserver = new IntersectionObserver(function(entries) {
				entries.forEach(function(entry) {
					entry.target.setAttribute("data-inview", entry.isIntersecting ? "true" : "false");
					entry.target.setAttribute("aria-hidden", entry.isIntersecting ? "false" : "true");
				});
			}, {
				root: this.contentEl,
				threshold: INTERSECTION_THRESHOLD
			});
			this.observeIntersectionItems();
		},
		unbindIntersectionObserver: function unbindIntersectionObserver() {
			if (this.intersectionObserver) {
				this.intersectionObserver.disconnect();
				this.intersectionObserver = null;
			}
		},
		bindContentScrollListener: function bindContentScrollListener() {
			var _this0 = this;
			this.onScrollHandler = function() {
				if (_this0.scrollTimeout) clearTimeout(_this0.scrollTimeout);
				_this0.scrollTimeout = setTimeout(function() {
					_this0.setToClosest();
				}, SCROLL_DEBOUNCE_MS);
			};
			this.contentEl.addEventListener("scroll", this.onScrollHandler, { passive: true });
		},
		unbindContentScrollListener: function unbindContentScrollListener() {
			if (this.scrollTimeout) {
				clearTimeout(this.scrollTimeout);
				this.scrollTimeout = null;
			}
			if (this.wheelTimeout) {
				clearTimeout(this.wheelTimeout);
				this.wheelTimeout = null;
			}
			if (this.contentEl && this.onScrollHandler) this.contentEl.removeEventListener("scroll", this.onScrollHandler);
			this.onScrollHandler = null;
		}
	},
	computed: {
		hasCarouselValue: function hasCarouselValue() {
			return !this.$slots["default"];
		},
		totalIndicators: function totalIndicators() {
			return this.value ? Math.max(Math.ceil((this.value.length - this.d_numVisible) / this.d_numScroll) + 1, 0) : 0;
		},
		backwardIsDisabled: function backwardIsDisabled() {
			return this.value && (!this.circular || this.value.length < this.d_numVisible) && this.d_page === 0;
		},
		forwardIsDisabled: function forwardIsDisabled() {
			return this.value && (!this.circular || this.value.length < this.d_numVisible) && (this.d_page === this.totalIndicators - 1 || this.totalIndicators === 0);
		},
		ariaSlideLabel: function ariaSlideLabel() {
			return this.$primevue.config.locale.aria ? this.$primevue.config.locale.aria.slide : void 0;
		},
		ariaPrevButtonLabel: function ariaPrevButtonLabel() {
			return this.$primevue.config.locale.aria ? this.$primevue.config.locale.aria.prevPageLabel : void 0;
		},
		ariaNextButtonLabel: function ariaNextButtonLabel() {
			return this.$primevue.config.locale.aria ? this.$primevue.config.locale.aria.nextPageLabel : void 0;
		},
		empty: function empty() {
			return !this.value || this.value.length === 0;
		},
		emptyMessageText: function emptyMessageText() {
			var _this$$primevue$confi;
			return ((_this$$primevue$confi = this.$primevue.config) === null || _this$$primevue$confi === void 0 || (_this$$primevue$confi = _this$$primevue$confi.locale) === null || _this$$primevue$confi === void 0 ? void 0 : _this$$primevue$confi.emptyMessage) || "";
		}
	},
	components: {
		Button: script$2,
		ChevronRight: _,
		ChevronDown: h$1$2,
		ChevronLeft: h$1$1,
		ChevronUp: h$1
	},
	directives: { ripple: Ripple }
};
var _hoisted_1 = ["aria-live"];
var _hoisted_2 = [
	"data-p-carousel-item-active",
	"data-p-carousel-item-start",
	"data-p-carousel-item-end"
];
var _hoisted_3 = [
	"aria-hidden",
	"aria-label",
	"aria-roledescription",
	"data-p-carousel-item-active",
	"data-p-carousel-item-start",
	"data-p-carousel-item-end"
];
var _hoisted_4 = ["data-p-active"];
var _hoisted_5 = [
	"tabindex",
	"aria-label",
	"aria-current",
	"onClick"
];
function render(_ctx, _cache, $props, $setup, $data, $options) {
	var _component_Button = resolveComponent("Button");
	return openBlock(), createBlock(resolveDynamicComponent(_ctx.as), mergeProps({
		"class": _ctx.cx("root"),
		style: _ctx.sx("root"),
		"data-orientation": _ctx.orientation,
		"data-align": _ctx.align,
		"data-page": $data.d_page,
		"data-swiping": $data.swiping ? "" : void 0,
		"data-autosize": _ctx.autoSize ? "" : void 0,
		role: "region"
	}, _ctx.ptmi("root")), {
		"default": withCtx(function() {
			return [$options.hasCarouselValue ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
				_ctx.$slots.header ? (openBlock(), createElementBlock("div", mergeProps({
					key: 0,
					"class": _ctx.cx("header")
				}, _ctx.ptm("header")), [renderSlot(_ctx.$slots, "header")], 16)) : createCommentVNode("", true),
				!$options.empty ? (openBlock(), createElementBlock("div", mergeProps({
					key: 1,
					"class": [_ctx.cx("contentContainer"), _ctx.containerClass]
				}, _ctx.ptm("contentContainer")), [createElementVNode("div", mergeProps({
					"class": [_ctx.cx("content"), _ctx.contentClass],
					"aria-live": $options.isAutoplay() ? "off" : "polite"
				}, _ctx.ptm("content")), [
					_ctx.showNavigators ? (openBlock(), createBlock(_component_Button, mergeProps({
						key: 0,
						"class": _ctx.cx("pcPrevButton"),
						disabled: $options.backwardIsDisabled,
						"aria-label": $options.ariaPrevButtonLabel,
						unstyled: _ctx.unstyled,
						onClick: $options.navBackward
					}, _ctx.prevButtonProps, {
						pt: _ctx.ptm("pcPrevButton"),
						"data-pc-group-section": "navigator"
					}), {
						"default": withCtx(function() {
							return [renderSlot(_ctx.$slots, "previcon", {}, function() {
								return [(openBlock(), createBlock(resolveDynamicComponent($options.isVertical() ? "ChevronUp" : "ChevronLeft"), normalizeProps(guardReactiveProps(_ctx.ptm("pcPrevButton")["icon"])), null, 16))];
							})];
						}),
						_: 3
					}, 16, [
						"class",
						"disabled",
						"aria-label",
						"unstyled",
						"onClick",
						"pt"
					])) : createCommentVNode("", true),
					createElementVNode("div", mergeProps({
						"class": _ctx.cx("viewport"),
						style: [{ height: $options.isVertical() ? _ctx.verticalViewPortHeight : "auto" }],
						onTouchend: _cache[1] || (_cache[1] = function() {
							return $options.onTouchEnd && $options.onTouchEnd.apply($options, arguments);
						}),
						onTouchstart: _cache[2] || (_cache[2] = function() {
							return $options.onTouchStart && $options.onTouchStart.apply($options, arguments);
						}),
						onTouchmove: _cache[3] || (_cache[3] = function() {
							return $options.onTouchMove && $options.onTouchMove.apply($options, arguments);
						})
					}, _ctx.ptm("viewport")), [createElementVNode("div", mergeProps({
						ref: "itemsContainer",
						"class": _ctx.cx("itemList"),
						onTransitionend: _cache[0] || (_cache[0] = function() {
							return $options.onTransitionEnd && $options.onTransitionEnd.apply($options, arguments);
						})
					}, _ctx.ptm("itemList")), [
						$options.isCircular() ? (openBlock(true), createElementBlock(Fragment, { key: 0 }, renderList(_ctx.value.slice(-1 * $data.d_numVisible), function(item, index) {
							return openBlock(), createElementBlock("div", mergeProps({
								key: index + "_scloned",
								"class": _ctx.cx("itemClone", {
									index,
									value: _ctx.value,
									totalShiftedItems: $data.totalShiftedItems,
									d_numVisible: $data.d_numVisible
								})
							}, { ref_for: true }, _ctx.ptm("itemClone"), {
								"data-p-carousel-item-active": $data.totalShiftedItems * -1 === _ctx.value.length + $data.d_numVisible,
								"data-p-carousel-item-start": index === 0,
								"data-p-carousel-item-end": _ctx.value.slice(-1 * $data.d_numVisible).length - 1 === index
							}), [renderSlot(_ctx.$slots, "item", {
								data: item,
								index
							})], 16, _hoisted_2);
						}), 128)) : createCommentVNode("", true),
						(openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.value, function(item, index) {
							return openBlock(), createElementBlock("div", mergeProps({
								key: index,
								"class": _ctx.cx("item", { index }),
								role: "group",
								"aria-hidden": $options.firstIndex() > index || $options.lastIndex() < index ? true : void 0,
								"aria-label": $options.ariaSlideNumber(index),
								"aria-roledescription": $options.ariaSlideLabel
							}, { ref_for: true }, $options.getItemPTOptions("item", index), {
								"data-p-carousel-item-active": $options.firstIndex() <= index && $options.lastIndex() >= index,
								"data-p-carousel-item-start": $options.firstIndex() === index,
								"data-p-carousel-item-end": $options.lastIndex() === index
							}), [renderSlot(_ctx.$slots, "item", {
								data: item,
								index
							})], 16, _hoisted_3);
						}), 128)),
						$options.isCircular() ? (openBlock(true), createElementBlock(Fragment, { key: 1 }, renderList(_ctx.value.slice(0, $data.d_numVisible), function(item, index) {
							return openBlock(), createElementBlock("div", mergeProps({
								key: index + "_fcloned",
								"class": _ctx.cx("itemClone", {
									index,
									value: _ctx.value,
									totalShiftedItems: $data.totalShiftedItems,
									d_numVisible: $data.d_numVisible
								})
							}, { ref_for: true }, _ctx.ptm("itemClone")), [renderSlot(_ctx.$slots, "item", {
								data: item,
								index
							})], 16);
						}), 128)) : createCommentVNode("", true)
					], 16)], 16),
					_ctx.showNavigators ? (openBlock(), createBlock(_component_Button, mergeProps({
						key: 1,
						"class": _ctx.cx("pcNextButton"),
						disabled: $options.forwardIsDisabled,
						"aria-label": $options.ariaNextButtonLabel,
						unstyled: _ctx.unstyled,
						onClick: $options.navForward
					}, _ctx.nextButtonProps, {
						pt: _ctx.ptm("pcNextButton"),
						"data-pc-group-section": "navigator"
					}), {
						"default": withCtx(function() {
							return [renderSlot(_ctx.$slots, "nexticon", {}, function() {
								return [(openBlock(), createBlock(resolveDynamicComponent($options.isVertical() ? "ChevronDown" : "ChevronRight"), normalizeProps(guardReactiveProps(_ctx.ptm("pcNextButton")["icon"])), null, 16))];
							})];
						}),
						_: 3
					}, 16, [
						"class",
						"disabled",
						"aria-label",
						"unstyled",
						"onClick",
						"pt"
					])) : createCommentVNode("", true)
				], 16, _hoisted_1), $options.totalIndicators >= 0 && _ctx.showIndicators ? (openBlock(), createElementBlock("ul", mergeProps({
					key: 0,
					ref: "indicatorContent",
					"class": [_ctx.cx("indicatorList"), _ctx.indicatorsContentClass],
					onKeydown: _cache[4] || (_cache[4] = function() {
						return $options.onIndicatorKeydown && $options.onIndicatorKeydown.apply($options, arguments);
					})
				}, _ctx.ptm("indicatorList")), [(openBlock(true), createElementBlock(Fragment, null, renderList($options.totalIndicators, function(indicator, i) {
					return openBlock(), createElementBlock("li", mergeProps({
						key: "p-carousel-indicator-" + i.toString(),
						"class": _ctx.cx("indicator", { index: i })
					}, { ref_for: true }, $options.getIndicatorPTOptions("indicator", i), { "data-p-active": $data.d_page === i }), [createElementVNode("button", mergeProps({
						"class": _ctx.cx("indicatorButton"),
						type: "button",
						tabindex: $data.d_page === i ? "0" : "-1",
						"aria-label": $options.ariaPageLabel(i + 1),
						"aria-current": $data.d_page === i ? "page" : void 0,
						onClick: function onClick($event) {
							return $options.onIndicatorClick($event, i);
						}
					}, { ref_for: true }, $options.getIndicatorPTOptions("indicatorButton", i)), null, 16, _hoisted_5)], 16, _hoisted_4);
				}), 128))], 16)) : createCommentVNode("", true)], 16)) : renderSlot(_ctx.$slots, "empty", {}, function() {
					return [createTextVNode(toDisplayString($options.emptyMessageText), 1)];
				}, void 0, 2),
				_ctx.$slots.footer ? (openBlock(), createElementBlock("div", mergeProps({
					key: 3,
					"class": _ctx.cx("footer")
				}, _ctx.ptm("footer")), [renderSlot(_ctx.$slots, "footer")], 16)) : createCommentVNode("", true)
			], 64)) : renderSlot(_ctx.$slots, "default", {}, void 0, void 0, 1)];
		}),
		_: 3
	}, 16, [
		"class",
		"style",
		"data-orientation",
		"data-align",
		"data-page",
		"data-swiping",
		"data-autosize"
	]);
}
script.render = render;

export { script as default };
//# sourceMappingURL=carousel-Dw1bQC0J.mjs.map
