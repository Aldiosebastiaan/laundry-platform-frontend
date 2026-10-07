import { a8 as q, B as BaseStyle } from '../virtual/entry.mjs';
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

//#endregion
//#region node_modules/.pnpm/primevue@5.0.2_vue@3.5.43/node_modules/primevue/compare/style/index.mjs
var CompareStyle = BaseStyle.extend({
	name: "compare",
	style: "\n    .p-compare {\n        display: block;\n        position: relative;\n        border-radius: dt('compare.border.radius');\n        overflow: hidden;\n    }\n\n    .p-compare-item {\n        display: block;\n    }\n\n    .p-compare-handle {\n        display: block;\n        background: dt('compare.handle.background');\n    }\n\n    .p-compare-handle[data-orientation=\"horizontal\"] {\n        width: dt('compare.handle.size');\n        height: 100%;\n    }\n\n    .p-compare-handle[data-orientation=\"vertical\"] {\n        width: 100%;\n        height: dt('compare.handle.size');\n    }\n\n    .p-compare-indicator {\n        position: absolute;\n        top: 50%;\n        left: 50%;\n        width: dt('compare.indicator.size');\n        height: dt('compare.indicator.size');\n        transform: translate(-50%, -50%);\n        background: dt('compare.indicator.background');\n        color: dt('compare.indicator.icon.color');\n        cursor: pointer;\n        border-radius: dt('compare.indicator.border.radius');\n    }\n\n    .p-compare-indicator svg,\n    .p-compare-indicator i {\n        font-size: dt('compare.indicator.icon.size');\n        width: dt('compare.indicator.icon.size');\n        height: dt('compare.indicator.icon.size');\n    }\n\n    .p-compare-input {\n        clip-path: inset(50%);\n        overflow: hidden;\n        white-space: nowrap;\n        border: 0;\n        padding: 0;\n        width: 100%;\n        height: 100%;\n        margin: -1px;\n        position: fixed;\n        top: 0;\n        left: 0;\n    }\n\n    .p-compare-handle:has(.p-compare-input:focus-visible) .p-compare-indicator {\n        outline: dt('compare.indicator.focus.ring.width') dt('compare.indicator.focus.ring.style') dt('compare.indicator.focus.ring.color');\n        outline-offset: dt('compare.indicator.focus.ring.offset');\n    }\n",
	classes: {
		root: "p-compare p-component",
		input: "p-compare-input"
	}
});
//#endregion
//#region node_modules/.pnpm/primevue@5.0.2_vue@3.5.43/node_modules/primevue/compare/index.mjs
var script = {
	name: "Compare",
	"extends": {
		name: "BaseCompare",
		"extends": script$1,
		props: {
			modelValue: {
				type: Number,
				"default": void 0
			},
			min: {
				type: Number,
				"default": 0
			},
			max: {
				type: Number,
				"default": 100
			},
			step: {
				type: Number,
				"default": 1
			},
			orientation: {
				type: String,
				"default": "horizontal"
			},
			slideOnHover: {
				type: Boolean,
				"default": false
			},
			disabled: {
				type: Boolean,
				"default": false
			},
			readonly: {
				type: Boolean,
				"default": false
			},
			invalid: {
				type: Boolean,
				"default": false
			},
			tabindex: {
				type: Number,
				"default": void 0
			},
			ariaLabel: {
				type: String,
				"default": void 0
			},
			ariaLabelledby: {
				type: String,
				"default": void 0
			},
			name: {
				type: String,
				"default": void 0
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
		style: CompareStyle,
		provide: function provide() {
			return {
				$pcCompare: this,
				$parentInstance: this
			};
		}
	},
	inheritAttrs: false,
	emits: [
		"update:modelValue",
		"value-change-end",
		"focus",
		"blur"
	],
	data: function data() {
		var _this$modelValue;
		return {
			d_value: this.normalizeValue((_this$modelValue = this.modelValue) !== null && _this$modelValue !== void 0 ? _this$modelValue : (this.min + this.max) / 2),
			isDragging: false,
			isHandlePointerDown: false,
			dragOffsetPx: 0
		};
	},
	watch: {
		modelValue: function modelValue(newValue) {
			if (newValue !== void 0) this.d_value = this.normalizeValue(newValue);
		},
		min: function min() {
			this.updateValue(this.d_value);
		},
		max: function max() {
			this.updateValue(this.d_value);
		},
		step: function step() {
			this.updateValue(this.d_value);
		}
	},
	methods: {
		clamp: function clamp(value, minValue, maxValue) {
			return Math.min(Math.max(value, minValue), maxValue);
		},
		getPrecision: function getPrecision(stepValue) {
			var stepString = String(stepValue);
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
		normalizeValue: function normalizeValue(value) {
			return this.clamp(this.roundToStep(Number(value !== null && value !== void 0 ? value : this.min), this.step, this.min), this.min, this.max);
		},
		getValuePercent: function getValuePercent(value) {
			var range = this.max - this.min;
			if (!range) return 0;
			return this.clamp((value - this.min) / range * 100, 0, 100);
		},
		getValueFromPointer: function getValueFromPointer(event) {
			var offsetPx = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
			var rootElement = event.currentTarget;
			var rect = rootElement.getBoundingClientRect();
			var size = this.isHorizontal ? rect.width : rect.height;
			if (!size) return this.min;
			var position = ((this.isHorizontal ? event.clientX - rect.left : event.clientY - rect.top) - offsetPx) / size;
			var clampedPosition = this.clamp(position, 0, 1);
			var orientedPosition = this.isHorizontal ? q(rootElement) ? 1 - clampedPosition : clampedPosition : 1 - clampedPosition;
			var value = this.min + orientedPosition * (this.max - this.min);
			return this.normalizeValue(value);
		},
		updateValue: function updateValue(nextValue) {
			var value = this.normalizeValue(nextValue);
			if (value === this.d_value) return value;
			this.d_value = value;
			this.$emit("update:modelValue", value);
			return value;
		},
		updateValueFromPointer: function updateValueFromPointer(event) {
			this.dragOffsetPx = 0;
			this.updateValue(this.getValueFromPointer(event, 0));
		},
		resetPointerState: function resetPointerState() {
			this.isDragging = false;
			this.isHandlePointerDown = false;
			this.dragOffsetPx = 0;
		},
		onPointerDown: function onPointerDown(event) {
			var _event$currentTarget$, _event$currentTarget;
			if (this.disabled || this.readonly) return;
			if (event.pointerType === "mouse" && event.button !== 0) return;
			event.preventDefault();
			(_event$currentTarget$ = (_event$currentTarget = event.currentTarget).setPointerCapture) === null || _event$currentTarget$ === void 0 || _event$currentTarget$.call(_event$currentTarget, event.pointerId);
			this.isDragging = true;
			if (this.isHandlePointerDown) {
				this.isHandlePointerDown = false;
				return;
			}
			this.dragOffsetPx = 0;
			this.updateValueFromPointer(event);
		},
		onPointerMove: function onPointerMove(event) {
			if (this.disabled || this.readonly) return;
			if (this.slideOnHover) {
				this.updateValueFromPointer(event);
				return;
			}
			if (!this.isDragging) return;
			event.preventDefault();
			this.updateValue(this.getValueFromPointer(event, this.dragOffsetPx));
		},
		onPointerUp: function onPointerUp(event) {
			var _event$currentTarget$2, _event$currentTarget2;
			if (this.disabled || this.readonly) return;
			if (!this.isDragging) return;
			event.preventDefault();
			if ((_event$currentTarget$2 = (_event$currentTarget2 = event.currentTarget).hasPointerCapture) !== null && _event$currentTarget$2 !== void 0 && _event$currentTarget$2.call(_event$currentTarget2, event.pointerId)) event.currentTarget.releasePointerCapture(event.pointerId);
			this.resetPointerState();
			this.$emit("value-change-end", {
				originalEvent: event,
				value: this.d_value
			});
		},
		onPointerCancel: function onPointerCancel(event) {
			if (this.isDragging) this.$emit("value-change-end", {
				originalEvent: event,
				value: this.d_value
			});
			this.resetPointerState();
		},
		onLostPointerCapture: function onLostPointerCapture(event) {
			if (this.isDragging) this.$emit("value-change-end", {
				originalEvent: event,
				value: this.d_value
			});
			this.resetPointerState();
		},
		onHandlePointerDown: function onHandlePointerDown(event) {
			if (this.disabled || this.readonly) return;
			if (event.pointerType === "mouse" && event.button !== 0) return;
			event.preventDefault();
			var handle = event.currentTarget;
			if (handle) {
				var handleRect = handle.getBoundingClientRect();
				var handleCenter = this.isHorizontal ? handleRect.left + handleRect.width / 2 : handleRect.top + handleRect.height / 2;
				var pointerAxis = this.isHorizontal ? event.clientX : event.clientY;
				this.dragOffsetPx = pointerAxis - handleCenter;
			} else this.dragOffsetPx = 0;
			this.isHandlePointerDown = true;
		},
		onInputInput: function onInputInput(event) {
			if (this.disabled || this.readonly) return;
			this.updateValue(Number(event.target.value));
		},
		onInputChange: function onInputChange(event) {
			if (this.disabled || this.readonly) return;
			var value = this.updateValue(Number(event.target.value));
			this.$emit("value-change-end", {
				originalEvent: event,
				value
			});
		},
		onInputFocus: function onInputFocus(event) {
			if (this.disabled || this.readonly) return;
			this.$emit("focus", event);
		},
		onInputBlur: function onInputBlur(event) {
			if (this.disabled || this.readonly) return;
			this.$emit("blur", event);
		}
	},
	computed: {
		isHorizontal: function isHorizontal() {
			return this.orientation === "horizontal";
		},
		attrs: function attrs() {
			return mergeProps(this.a11yAttrs, this.ptmi("root"));
		},
		a11yAttrs: function a11yAttrs() {
			return {
				"data-pc-section": "root",
				"data-orientation": this.orientation,
				"data-disabled": this.disabled ? "" : void 0,
				"data-invalid": this.invalid ? "" : void 0,
				"data-dragging": this.isDragging ? "" : void 0,
				onPointerdown: this.onPointerDown,
				onPointermove: this.onPointerMove,
				onPointerup: this.onPointerUp,
				onPointercancel: this.onPointerCancel,
				onLostpointercapture: this.onLostPointerCapture
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
			return [renderSlot(_ctx.$slots, "default", {
				value: $data.d_value,
				isDragging: $data.isDragging
			})];
		}),
		_: 3
	}, 16, ["class"])) : renderSlot(_ctx.$slots, "default", {
		"class": normalizeClass(_ctx.cx("root")),
		a11yAttrs: $options.a11yAttrs,
		value: $data.d_value,
		isDragging: $data.isDragging
	}, void 0, void 0, 1);
}
script.render = render;

export { script as default };
//# sourceMappingURL=compare-BHIjFMAC.mjs.map
