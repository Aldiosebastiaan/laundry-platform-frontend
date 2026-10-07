import { c } from './classnames-ryN3v2bf.mjs';
import { q as ot$1, a8 as q, a9 as V$1, aa as j$1, B as BaseStyle } from '../virtual/entry.mjs';
import { s as script$2 } from './baseeditableholder-CSsjvX-h.mjs';
import { openBlock, createElementBlock, mergeProps, createElementVNode, createCommentVNode } from 'vue';
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
import './basecomponent-xyj7Pl8r.mjs';

//#region node_modules/.pnpm/@primeuix+styles@3.0.1/node_modules/@primeuix/styles/dist/slider/index.mjs
var style = "\n    .p-slider {\n        display: flex;\n        align-items: center;\n        width: 100%;\n    }\n\n    .p-slider-track {\n        background: dt('slider.track.background');\n        border-radius: dt('slider.track.border.radius');\n    }\n\n    .p-slider-handle {\n        cursor: grab;\n        touch-action: none;\n        user-select: none;\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        height: dt('slider.handle.height');\n        width: dt('slider.handle.width');\n        background: dt('slider.handle.background');\n        border-radius: dt('slider.handle.border.radius');\n        transition:\n            background dt('slider.transition.duration'),\n            color dt('slider.transition.duration'),\n            border-color dt('slider.transition.duration'),\n            box-shadow dt('slider.transition.duration'),\n            outline-color dt('slider.transition.duration');\n        outline-color: transparent;\n    }\n\n    .p-slider-handle::before {\n        content: '';\n        width: dt('slider.handle.content.width');\n        height: dt('slider.handle.content.height');\n        display: block;\n        background: dt('slider.handle.content.background');\n        border-radius: dt('slider.handle.content.border.radius');\n        box-shadow: dt('slider.handle.content.shadow');\n        transition: background dt('slider.transition.duration');\n    }\n\n    .p-slider:not(.p-disabled) .p-slider-handle:hover {\n        background: dt('slider.handle.hover.background');\n    }\n\n    .p-slider:not(.p-disabled) .p-slider-handle:hover::before {\n        background: dt('slider.handle.content.hover.background');\n    }\n\n    .p-slider-handle:has(.p-slider-input:focus-visible){\n        box-shadow: dt('slider.handle.focus.ring.shadow');\n        outline: dt('slider.handle.focus.ring.width') dt('slider.handle.focus.ring.style') dt('slider.handle.focus.ring.color');\n        outline-offset: dt('slider.handle.focus.ring.offset');\n    }\n\n    .p-slider-range {\n        display: block;\n        background: dt('slider.range.background');\n        border-radius: dt('slider.track.border.radius');\n    }\n\n    .p-slider.p-slider-horizontal {\n        height: dt('slider.handle.height');\n    }\n\n    .p-slider.p-slider-horizontal .p-slider-track {\n        height: dt('slider.track.size');\n    }\n\n    .p-slider-horizontal .p-slider-range {\n        height: 100%;\n    }\n\n    .p-slider-vertical {\n        flex-direction: column;\n        width: dt('slider.handle.width');\n    }\n        \n    .p-slider-vertical .p-slider-track {\n        min-height: 100px;\n        width: dt('slider.track.size');\n    }\n\n    .p-slider-vertical .p-slider-range {\n        width: 100%;\n    }\n\n    .p-slider-input {\n        clip-path:inset(50%);\n        overflow:hidden;\n        white-space:nowrap;\n        border:0;\n        padding:0;\n        width:100%;\n        height:100%;\n        margin:-1px;\n        position:fixed;top:0;left:0;\n    }\n";
//#endregion
//#region node_modules/.pnpm/primevue@5.0.2_vue@3.5.43/node_modules/primevue/slider/style/index.mjs
function _typeof$1(o) {
	"@babel/helpers - typeof";
	return _typeof$1 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o) {
		return typeof o;
	} : function(o) {
		return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
	}, _typeof$1(o);
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
			_defineProperty$1(e, r, t[r]);
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function(r) {
			Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
		});
	}
	return e;
}
function _defineProperty$1(e, r, t) {
	return (r = _toPropertyKey$1(r)) in e ? Object.defineProperty(e, r, {
		value: t,
		enumerable: true,
		configurable: true,
		writable: true
	}) : e[r] = t, e;
}
function _toPropertyKey$1(t) {
	var i = _toPrimitive$1(t, "string");
	return "symbol" == _typeof$1(i) ? i : i + "";
}
function _toPrimitive$1(t, r) {
	if ("object" != _typeof$1(t) || !t) return t;
	var e = t[Symbol.toPrimitive];
	if (void 0 !== e) {
		var i = e.call(t, r);
		if ("object" != _typeof$1(i)) return i;
		throw new TypeError("@@toPrimitive must return a primitive value.");
	}
	return ("string" === r ? String : Number)(t);
}
var SliderStyle = BaseStyle.extend({
	name: "slider",
	style,
	classes: {
		root: function root(_ref5) {
			var props = _ref5.props;
			return ["p-slider p-component", {
				"p-disabled": props.disabled,
				"p-slider-horizontal": props.orientation === "horizontal",
				"p-slider-vertical": props.orientation === "vertical"
			}];
		},
		track: "p-slider-track",
		range: "p-slider-range",
		handle: "p-slider-handle",
		input: "p-slider-input"
	},
	inlineStyles: {
		root: {
			display: "flex",
			position: "relative",
			"touch-action": "none"
		},
		track: {
			display: "block",
			"flex-grow": 1,
			position: "relative"
		},
		range: function range(_ref) {
			var instance = _ref.instance;
			if (instance.isRange()) {
				var _instance$values;
				var vals = (_instance$values = instance.values()) !== null && _instance$values !== void 0 ? _instance$values : [0, 0];
				var startPercent = instance.getValuePercent(Math.min(vals[0], vals[1]));
				var endPercent = instance.getValuePercent(Math.max(vals[0], vals[1]));
				var sizePercent = Math.max(endPercent - startPercent, 0);
				if (instance.isHorizontal()) return {
					position: "absolute",
					"inset-inline-start": startPercent + "%",
					width: sizePercent + "%"
				};
				else return {
					position: "absolute",
					bottom: startPercent + "%",
					height: sizePercent + "%"
				};
			} else {
				var percent = instance.getValuePercent(instance.getHandleValue(0));
				if (instance.isHorizontal()) return {
					position: "absolute",
					width: percent + "%"
				};
				else return {
					position: "absolute",
					bottom: "0",
					height: percent + "%"
				};
			}
		},
		handle: function handle(_ref2) {
			var instance = _ref2.instance, index = _ref2.index;
			var i = index !== null && index !== void 0 ? index : 0;
			var handleValue = instance.getHandleValue(i);
			var percent = instance.getValuePercent(handleValue);
			var base = instance.isHandleDisabled(i) ? {
				cursor: "default",
				"pointer-events": "none"
			} : {};
			if (instance.isHorizontal()) return _objectSpread(_objectSpread({}, base), {}, {
				position: "absolute",
				"inset-inline-start": percent + "%",
				translate: "-50% 0"
			});
			else return _objectSpread(_objectSpread({}, base), {}, {
				position: "absolute",
				bottom: percent + "%",
				translate: "0 50%"
			});
		},
		startHandler: function startHandler(_ref3) {
			var instance = _ref3.instance;
			var handleValue = instance.getHandleValue(0);
			var percent = instance.getValuePercent(handleValue);
			var base = instance.isHandleDisabled(0) ? {
				cursor: "default",
				"pointer-events": "none"
			} : {};
			if (instance.isHorizontal()) return _objectSpread(_objectSpread({}, base), {}, {
				position: "absolute",
				"inset-inline-start": percent + "%",
				translate: "-50% 0"
			});
			else return _objectSpread(_objectSpread({}, base), {}, {
				position: "absolute",
				bottom: percent + "%",
				translate: "0 50%"
			});
		},
		endHandler: function endHandler(_ref4) {
			var instance = _ref4.instance;
			var handleValue = instance.getHandleValue(1);
			var percent = instance.getValuePercent(handleValue);
			var base = instance.isHandleDisabled(1) ? {
				cursor: "default",
				"pointer-events": "none"
			} : {};
			if (instance.isHorizontal()) return _objectSpread(_objectSpread({}, base), {}, {
				position: "absolute",
				"inset-inline-start": percent + "%",
				translate: "-50% 0"
			});
			else return _objectSpread(_objectSpread({}, base), {}, {
				position: "absolute",
				bottom: percent + "%",
				translate: "0 50%"
			});
		}
	}
});
//#endregion
//#region node_modules/.pnpm/primevue@5.0.2_vue@3.5.43/node_modules/primevue/slider/index.mjs
var script$1 = {
	name: "BaseSlider",
	"extends": script$2,
	props: {
		min: {
			type: Number,
			"default": 0
		},
		max: {
			type: Number,
			"default": 100
		},
		orientation: {
			type: String,
			"default": "horizontal"
		},
		step: {
			type: Number,
			"default": null
		},
		range: {
			type: Boolean,
			"default": false
		},
		readonly: {
			type: Boolean,
			"default": false
		},
		disabledMinHandle: {
			type: Boolean,
			"default": false
		},
		disabledMaxHandle: {
			type: Boolean,
			"default": false
		},
		minStepsBetweenHandles: {
			type: Number,
			"default": 0
		},
		inputId: {
			type: String,
			"default": null
		},
		inputClass: {
			type: [
				String,
				Object,
				Array
			],
			"default": null
		},
		inputStyle: {
			type: Object,
			"default": null
		},
		tabindex: {
			type: Number,
			"default": 0
		},
		ariaLabelledby: {
			type: String,
			"default": null
		},
		ariaLabel: {
			type: String,
			"default": null
		}
	},
	style: SliderStyle,
	provide: function provide() {
		return {
			$pcSlider: this,
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
var script = {
	name: "Slider",
	"extends": script$1,
	inheritAttrs: false,
	emits: ["change", "slideend"],
	handleIndex: null,
	initX: null,
	initY: null,
	barWidth: null,
	barHeight: null,
	dragListener: null,
	dragEndListener: null,
	data: function data() {
		return {
			d_dragging: false,
			d_focusedIndex: null
		};
	},
	beforeUnmount: function beforeUnmount() {
		this.unbindDragListeners();
	},
	methods: {
		updateDomData: function updateDomData() {
			var rect = this.$el.getBoundingClientRect();
			this.initX = rect.left + V$1();
			this.initY = rect.top + j$1();
			this.barWidth = this.$el.offsetWidth;
			this.barHeight = this.$el.offsetHeight;
		},
		setValue: function setValue(event) {
			var handleValue;
			var pageX = event.touches ? event.touches[0].pageX : event.pageX;
			var pageY = event.touches ? event.touches[0].pageY : event.pageY;
			if (this.orientation === "horizontal") {
				if (q(this.$el)) handleValue = (this.initX + this.barWidth - pageX) * 100 / this.barWidth;
				else handleValue = (pageX - this.initX) * 100 / this.barWidth;
			} else handleValue = (this.initY + this.barHeight - pageY) * 100 / this.barHeight;
			var newValue = (this.max - this.min) * (handleValue / 100) + this.min;
			if (!this.step) newValue = Math.floor(newValue);
			this.updateModel(event, newValue);
		},
		clamp: function clamp(value, minValue, maxValue) {
			return Math.min(Math.max(value, minValue), maxValue);
		},
		getPrecision: function getPrecision(stepValue) {
			var stepString = stepValue.toString();
			if (stepString.includes("e-")) return Number(stepString.split("e-")[1] || 0);
			var dotIndex = stepString.indexOf(".");
			return dotIndex >= 0 ? stepString.length - dotIndex - 1 : 0;
		},
		roundToStep: function roundToStep(value, stepValue, minValue) {
			if (!stepValue) return value;
			var precision = this.getPrecision(stepValue);
			var rounded = Math.round((value - minValue) / stepValue) * stepValue + minValue;
			return Number(rounded.toFixed(precision));
		},
		updateModel: function updateModel(event, value) {
			var newValue = this.step ? this.roundToStep(value, this.step, this.min) : Math.round(value * 100) / 100;
			var modelValue;
			if (this.range) {
				modelValue = this.value ? _toConsumableArray(this.value) : [];
				var gap = Math.max((this.minStepsBetweenHandles || 0) * (this.step || 1), 0);
				if (this.handleIndex == 0) {
					var upperBound = modelValue[1] !== void 0 ? modelValue[1] - gap : this.max;
					newValue = this.clamp(newValue, this.min, upperBound);
					modelValue[0] = newValue;
				} else {
					var lowerBound = modelValue[0] !== void 0 ? modelValue[0] + gap : this.min;
					newValue = this.clamp(newValue, lowerBound, this.max);
					modelValue[1] = newValue;
				}
			} else {
				newValue = this.clamp(newValue, this.min, this.max);
				modelValue = newValue;
			}
			this.writeValue(modelValue, event);
			this.$emit("change", modelValue);
		},
		onDragStart: function onDragStart(event, index) {
			var _event$currentTarget, _event$currentTarget$, _input$focus;
			if (this.disabled || this.readonly) return;
			if (this.range && this.isHandleDisabled(index)) return;
			this.d_dragging = true;
			this.updateDomData();
			if (this.range && this.value[0] === this.max) this.handleIndex = 0;
			else this.handleIndex = index;
			var input = (_event$currentTarget = event.currentTarget) === null || _event$currentTarget === void 0 || (_event$currentTarget$ = _event$currentTarget.querySelector) === null || _event$currentTarget$ === void 0 ? void 0 : _event$currentTarget$.call(_event$currentTarget, ".p-slider-input");
			input === null || input === void 0 || (_input$focus = input.focus) === null || _input$focus === void 0 || _input$focus.call(input);
		},
		onDrag: function onDrag(event) {
			if (this.d_dragging) this.setValue(event);
		},
		onDragEnd: function onDragEnd(event) {
			if (this.d_dragging) {
				this.d_dragging = false;
				this.$emit("slideend", {
					originalEvent: event,
					value: this.value
				});
			}
		},
		onBarClick: function onBarClick(event) {
			if (this.disabled || this.readonly) return;
			if (ot$1(event.target, "data-pc-section") !== "handle") {
				this.updateDomData();
				this.setValue(event);
			}
		},
		onMouseDown: function onMouseDown(event, index) {
			this.bindDragListeners();
			this.onDragStart(event, index);
		},
		onInputChange: function onInputChange(event, index) {
			if (this.disabled || this.readonly) return;
			if (this.range && this.isHandleDisabled(index)) return;
			this.handleIndex = index;
			var newValue = parseFloat(event.target.value);
			if (Number.isNaN(newValue)) return;
			this.updateModel(event, newValue);
			this.$emit("slideend", {
				originalEvent: event,
				value: this.value
			});
		},
		onInputFocus: function onInputFocus(event, index) {
			this.d_focusedIndex = index;
		},
		onInputBlur: function onInputBlur(event, index) {
			var _this$formField$onBlu, _this$formField;
			if (this.d_focusedIndex === index) this.d_focusedIndex = null;
			(_this$formField$onBlu = (_this$formField = this.formField).onBlur) === null || _this$formField$onBlu === void 0 || _this$formField$onBlu.call(_this$formField, event);
			this.$emit("slideend", {
				originalEvent: event,
				value: this.value
			});
		},
		bindDragListeners: function bindDragListeners() {
			if (!this.dragListener) {
				this.dragListener = this.onDrag.bind(this);
				(void 0).addEventListener("mousemove", this.dragListener);
			}
			if (!this.dragEndListener) {
				this.dragEndListener = this.onDragEnd.bind(this);
				(void 0).addEventListener("mouseup", this.dragEndListener);
			}
		},
		unbindDragListeners: function unbindDragListeners() {
			if (this.dragListener) {
				(void 0).removeEventListener("mousemove", this.dragListener);
				this.dragListener = null;
			}
			if (this.dragEndListener) {
				(void 0).removeEventListener("mouseup", this.dragEndListener);
				this.dragEndListener = null;
			}
		},
		isRange: function isRange() {
			return this.range;
		},
		isHorizontal: function isHorizontal() {
			return this.orientation === "horizontal";
		},
		values: function values() {
			var _this$d_value3;
			if (this.range) {
				var _this$d_value$, _this$d_value, _this$d_value$2, _this$d_value2;
				return [(_this$d_value$ = (_this$d_value = this.d_value) === null || _this$d_value === void 0 ? void 0 : _this$d_value[0]) !== null && _this$d_value$ !== void 0 ? _this$d_value$ : this.min, (_this$d_value$2 = (_this$d_value2 = this.d_value) === null || _this$d_value2 === void 0 ? void 0 : _this$d_value2[1]) !== null && _this$d_value$2 !== void 0 ? _this$d_value$2 : this.max];
			}
			return [(_this$d_value3 = this.d_value) !== null && _this$d_value3 !== void 0 ? _this$d_value3 : this.min];
		},
		getHandleValue: function getHandleValue(index) {
			var _vals$index;
			return (_vals$index = this.values()[index]) !== null && _vals$index !== void 0 ? _vals$index : this.min;
		},
		isHandleDisabled: function isHandleDisabled(index) {
			if (this.disabled) return true;
			if (this.range) {
				if (index === 0 && this.disabledMinHandle) return true;
				if (index === 1 && this.disabledMaxHandle) return true;
			}
			return false;
		},
		getValuePercent: function getValuePercent(val) {
			var range = this.max - this.min;
			if (!range) return 0;
			return Math.min(Math.max((val - this.min) / range * 100, 0), 100);
		}
	},
	computed: {
		value: function value() {
			var _this$d_value6;
			if (this.range) {
				var _this$d_value$3, _this$d_value4, _this$d_value$4, _this$d_value5;
				return [(_this$d_value$3 = (_this$d_value4 = this.d_value) === null || _this$d_value4 === void 0 ? void 0 : _this$d_value4[0]) !== null && _this$d_value$3 !== void 0 ? _this$d_value$3 : this.min, (_this$d_value$4 = (_this$d_value5 = this.d_value) === null || _this$d_value5 === void 0 ? void 0 : _this$d_value5[1]) !== null && _this$d_value$4 !== void 0 ? _this$d_value$4 : this.max];
			}
			return (_this$d_value6 = this.d_value) !== null && _this$d_value6 !== void 0 ? _this$d_value6 : this.min;
		},
		horizontal: function horizontal() {
			return this.orientation === "horizontal";
		},
		vertical: function vertical() {
			return this.orientation === "vertical";
		},
		handlePosition: function handlePosition() {
			return this.getValuePercent(this.getHandleValue(0));
		},
		rangeStartPosition: function rangeStartPosition() {
			if (this.value && this.value[0] !== void 0) return this.getValuePercent(this.value[0]);
			return 0;
		},
		rangeEndPosition: function rangeEndPosition() {
			if (this.value && this.value.length === 2 && this.value[1] !== void 0) return this.getValuePercent(this.value[1]);
			return 100;
		},
		dataP: function dataP() {
			return c(_defineProperty({}, this.orientation, this.orientation));
		}
	}
};
var _hoisted_1 = [
	"data-p",
	"data-orientation",
	"data-disabled",
	"data-invalid",
	"data-dragging"
];
var _hoisted_2 = [
	"data-orientation",
	"data-disabled",
	"data-invalid",
	"data-dragging"
];
var _hoisted_3 = [
	"data-p",
	"data-orientation",
	"data-disabled",
	"data-invalid",
	"data-dragging"
];
var _hoisted_4 = [
	"data-p",
	"data-orientation",
	"data-disabled",
	"data-invalid",
	"data-dragging"
];
var _hoisted_5 = [
	"id",
	"name",
	"min",
	"max",
	"step",
	"value",
	"disabled",
	"readonly",
	"tabindex",
	"aria-valuemin",
	"aria-valuenow",
	"aria-valuemax",
	"aria-labelledby",
	"aria-label",
	"aria-orientation"
];
var _hoisted_6 = [
	"data-p",
	"data-orientation",
	"data-disabled",
	"data-invalid",
	"data-dragging"
];
var _hoisted_7 = [
	"id",
	"name",
	"min",
	"max",
	"step",
	"value",
	"disabled",
	"readonly",
	"tabindex",
	"aria-valuemin",
	"aria-valuenow",
	"aria-valuemax",
	"aria-labelledby",
	"aria-label",
	"aria-orientation"
];
var _hoisted_8 = [
	"data-p",
	"data-orientation",
	"data-disabled",
	"data-invalid",
	"data-dragging"
];
var _hoisted_9 = [
	"name",
	"min",
	"max",
	"step",
	"value",
	"disabled",
	"readonly",
	"tabindex",
	"aria-valuemin",
	"aria-valuenow",
	"aria-valuemax",
	"aria-labelledby",
	"aria-label",
	"aria-orientation"
];
function render(_ctx, _cache, $props, $setup, $data, $options) {
	var _ctx$step, _ctx$step2, _ctx$step3;
	return openBlock(), createElementBlock("div", mergeProps({
		"class": _ctx.cx("root"),
		style: _ctx.sx("root"),
		onClick: _cache[24] || (_cache[24] = function() {
			return $options.onBarClick && $options.onBarClick.apply($options, arguments);
		})
	}, _ctx.ptmi("root"), {
		"data-p": $options.dataP,
		"data-orientation": _ctx.orientation,
		"data-disabled": _ctx.disabled ? "" : void 0,
		"data-invalid": _ctx.$invalid ? "" : void 0,
		"data-dragging": $data.d_dragging ? "" : void 0
	}), [
		createElementVNode("div", mergeProps({
			"class": _ctx.cx("track"),
			style: _ctx.sx("track")
		}, _ctx.ptm("track"), {
			"data-orientation": _ctx.orientation,
			"data-disabled": _ctx.disabled ? "" : void 0,
			"data-invalid": _ctx.$invalid ? "" : void 0,
			"data-dragging": $data.d_dragging ? "" : void 0
		}), [createElementVNode("span", mergeProps({
			"class": _ctx.cx("range"),
			style: _ctx.sx("range")
		}, _ctx.ptm("range"), {
			"data-p": $options.dataP,
			"data-orientation": _ctx.orientation,
			"data-disabled": _ctx.disabled ? "" : void 0,
			"data-invalid": _ctx.$invalid ? "" : void 0,
			"data-dragging": $data.d_dragging ? "" : void 0
		}), null, 16, _hoisted_3)], 16, _hoisted_2),
		!_ctx.range ? (openBlock(), createElementBlock("span", mergeProps({
			key: 0,
			"class": _ctx.cx("handle"),
			style: _ctx.sx("handle"),
			onTouchstartPassive: _cache[4] || (_cache[4] = function($event) {
				return $options.onDragStart($event);
			}),
			onTouchmovePassive: _cache[5] || (_cache[5] = function($event) {
				return $options.onDrag($event);
			}),
			onTouchend: _cache[6] || (_cache[6] = function($event) {
				return $options.onDragEnd($event);
			}),
			onMousedown: _cache[7] || (_cache[7] = function($event) {
				return $options.onMouseDown($event);
			})
		}, _ctx.ptm("handle"), {
			"data-p": $options.dataP,
			"data-index": 0,
			"data-orientation": _ctx.orientation,
			"data-disabled": _ctx.disabled ? "" : void 0,
			"data-invalid": _ctx.$invalid ? "" : void 0,
			"data-dragging": $data.d_dragging ? "" : void 0
		}), [createElementVNode("input", mergeProps({
			id: _ctx.inputId,
			type: "range",
			"class": [_ctx.cx("input"), _ctx.inputClass],
			style: _ctx.inputStyle,
			name: _ctx.name,
			min: _ctx.min,
			max: _ctx.max,
			step: (_ctx$step = _ctx.step) !== null && _ctx$step !== void 0 ? _ctx$step : 1,
			value: $options.getHandleValue(0),
			disabled: _ctx.disabled,
			readonly: _ctx.readonly,
			tabindex: _ctx.disabled ? -1 : _ctx.tabindex,
			"aria-valuemin": _ctx.min,
			"aria-valuenow": $options.getHandleValue(0),
			"aria-valuemax": _ctx.max,
			"aria-labelledby": _ctx.ariaLabelledby,
			"aria-label": _ctx.ariaLabel,
			"aria-orientation": _ctx.orientation,
			onInput: _cache[0] || (_cache[0] = function($event) {
				return $options.onInputChange($event, 0);
			}),
			onChange: _cache[1] || (_cache[1] = function($event) {
				return $options.onInputChange($event, 0);
			}),
			onFocus: _cache[2] || (_cache[2] = function($event) {
				return $options.onInputFocus($event, 0);
			}),
			onBlur: _cache[3] || (_cache[3] = function($event) {
				return $options.onInputBlur($event, 0);
			})
		}, _ctx.ptm("input")), null, 16, _hoisted_5)], 16, _hoisted_4)) : createCommentVNode("", true),
		_ctx.range ? (openBlock(), createElementBlock("span", mergeProps({
			key: 1,
			"class": _ctx.cx("handle"),
			style: _ctx.sx("startHandler"),
			onTouchstartPassive: _cache[12] || (_cache[12] = function($event) {
				return $options.onDragStart($event, 0);
			}),
			onTouchmovePassive: _cache[13] || (_cache[13] = function($event) {
				return $options.onDrag($event);
			}),
			onTouchend: _cache[14] || (_cache[14] = function($event) {
				return $options.onDragEnd($event);
			}),
			onMousedown: _cache[15] || (_cache[15] = function($event) {
				return $options.onMouseDown($event, 0);
			})
		}, _ctx.ptm("startHandler"), {
			"data-p": $options.dataP,
			"data-index": 0,
			"data-orientation": _ctx.orientation,
			"data-disabled": $options.isHandleDisabled(0) ? "" : void 0,
			"data-invalid": _ctx.$invalid ? "" : void 0,
			"data-dragging": $data.d_dragging ? "" : void 0
		}), [createElementVNode("input", mergeProps({
			id: _ctx.inputId,
			type: "range",
			"class": [_ctx.cx("input"), _ctx.inputClass],
			style: _ctx.inputStyle,
			name: _ctx.name,
			min: _ctx.min,
			max: _ctx.max,
			step: (_ctx$step2 = _ctx.step) !== null && _ctx$step2 !== void 0 ? _ctx$step2 : 1,
			value: $options.getHandleValue(0),
			disabled: $options.isHandleDisabled(0),
			readonly: _ctx.readonly,
			tabindex: $options.isHandleDisabled(0) ? -1 : _ctx.tabindex,
			"aria-valuemin": _ctx.min,
			"aria-valuenow": $options.getHandleValue(0),
			"aria-valuemax": _ctx.max,
			"aria-labelledby": _ctx.ariaLabelledby,
			"aria-label": _ctx.ariaLabel,
			"aria-orientation": _ctx.orientation,
			onInput: _cache[8] || (_cache[8] = function($event) {
				return $options.onInputChange($event, 0);
			}),
			onChange: _cache[9] || (_cache[9] = function($event) {
				return $options.onInputChange($event, 0);
			}),
			onFocus: _cache[10] || (_cache[10] = function($event) {
				return $options.onInputFocus($event, 0);
			}),
			onBlur: _cache[11] || (_cache[11] = function($event) {
				return $options.onInputBlur($event, 0);
			})
		}, _ctx.ptm("input")), null, 16, _hoisted_7)], 16, _hoisted_6)) : createCommentVNode("", true),
		_ctx.range ? (openBlock(), createElementBlock("span", mergeProps({
			key: 2,
			"class": _ctx.cx("handle"),
			style: _ctx.sx("endHandler"),
			onTouchstartPassive: _cache[20] || (_cache[20] = function($event) {
				return $options.onDragStart($event, 1);
			}),
			onTouchmovePassive: _cache[21] || (_cache[21] = function($event) {
				return $options.onDrag($event);
			}),
			onTouchend: _cache[22] || (_cache[22] = function($event) {
				return $options.onDragEnd($event);
			}),
			onMousedown: _cache[23] || (_cache[23] = function($event) {
				return $options.onMouseDown($event, 1);
			})
		}, _ctx.ptm("endHandler"), {
			"data-p": $options.dataP,
			"data-index": 1,
			"data-orientation": _ctx.orientation,
			"data-disabled": $options.isHandleDisabled(1) ? "" : void 0,
			"data-invalid": _ctx.$invalid ? "" : void 0,
			"data-dragging": $data.d_dragging ? "" : void 0
		}), [createElementVNode("input", mergeProps({
			type: "range",
			"class": [_ctx.cx("input"), _ctx.inputClass],
			style: _ctx.inputStyle,
			name: _ctx.name,
			min: _ctx.min,
			max: _ctx.max,
			step: (_ctx$step3 = _ctx.step) !== null && _ctx$step3 !== void 0 ? _ctx$step3 : 1,
			value: $options.getHandleValue(1),
			disabled: $options.isHandleDisabled(1),
			readonly: _ctx.readonly,
			tabindex: $options.isHandleDisabled(1) ? -1 : _ctx.tabindex,
			"aria-valuemin": _ctx.min,
			"aria-valuenow": $options.getHandleValue(1),
			"aria-valuemax": _ctx.max,
			"aria-labelledby": _ctx.ariaLabelledby,
			"aria-label": _ctx.ariaLabel,
			"aria-orientation": _ctx.orientation,
			onInput: _cache[16] || (_cache[16] = function($event) {
				return $options.onInputChange($event, 1);
			}),
			onChange: _cache[17] || (_cache[17] = function($event) {
				return $options.onInputChange($event, 1);
			}),
			onFocus: _cache[18] || (_cache[18] = function($event) {
				return $options.onInputFocus($event, 1);
			}),
			onBlur: _cache[19] || (_cache[19] = function($event) {
				return $options.onInputBlur($event, 1);
			})
		}, _ctx.ptm("input")), null, 16, _hoisted_9)], 16, _hoisted_8)) : createCommentVNode("", true)
	], 16, _hoisted_1);
}
script.render = render;

export { script as default };
//# sourceMappingURL=slider-DVlzmmTg.mjs.map
