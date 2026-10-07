import { c } from './classnames-ryN3v2bf.mjs';
import { B as BaseStyle } from '../virtual/entry.mjs';
import { s as script$4 } from './basecomponent-xyj7Pl8r.mjs';
import script$1 from './inputcolorsliderhandle-DuNCzqlC.mjs';
import script$2 from './inputcolorslidertrack-BQjkJ8G0.mjs';
import script$3 from './inputcolortransparencygrid-CJiJ4B-t.mjs';
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

//#region node_modules/.pnpm/primevue@5.0.2_vue@3.5.43/node_modules/primevue/inputcolorslider/style/index.mjs
var InputColorSliderStyle = BaseStyle.extend({
	name: "inputcolorslider",
	classes: { root: function root(context) {
		return ["p-inputcolor-slider", context.orientation === "horizontal" ? "p-inputcolor-slider-horizontal" : "p-inputcolor-slider-vertical"];
	} }
});
//#endregion
//#region node_modules/.pnpm/primevue@5.0.2_vue@3.5.43/node_modules/primevue/inputcolorslider/index.mjs
var script = {
	name: "InputColorSlider",
	"extends": {
		name: "BaseInputColorSlider",
		"extends": script$4,
		props: {
			channel: {
				type: String,
				"default": "hue"
			},
			orientation: {
				type: String,
				"default": "horizontal"
			},
			disabled: {
				type: Boolean,
				"default": false
			},
			as: {
				type: [
					String,
					Object,
					Function
				],
				"default": "DIV"
			},
			asChild: {
				type: Boolean,
				"default": false
			}
		},
		style: InputColorSliderStyle,
		provide: function provide() {
			return {
				$pcInputColorSlider: this,
				$parentInstance: this
			};
		}
	},
	inheritAttrs: false,
	inject: ["$pcInputColor"],
	data: function data() {
		return { isSliderDragging: false };
	},
	methods: {
		updateSliderValue: function updateSliderValue(x, y, element) {
			if (!element || this.$pcInputColor.disabled || this.disabled) return;
			var rect = element.getBoundingClientRect();
			var rel = this.orientation === "horizontal" ? (x - rect.left) / rect.width : 1 - (y - rect.top) / rect.height;
			var clamped = Math.max(0, Math.min(1, rel));
			var _this$range = this.range, min = _this$range.min;
			var value = min + clamped * (_this$range.max - min);
			this.$pcInputColor.updateChannel(this.channel, value, null);
		},
		onSliderPointerDown: function onSliderPointerDown(event) {
			var _event$currentTarget$, _event$currentTarget;
			if (event.button !== 0 || this.$pcInputColor.disabled || this.disabled) return;
			(_event$currentTarget$ = (_event$currentTarget = event.currentTarget).setPointerCapture) === null || _event$currentTarget$ === void 0 || _event$currentTarget$.call(_event$currentTarget, event.pointerId);
			this.isSliderDragging = true;
			this.updateSliderValue(event.clientX, event.clientY, event.currentTarget);
		},
		onSliderPointerMove: function onSliderPointerMove(event) {
			if (!this.isSliderDragging) return;
			this.updateSliderValue(event.clientX, event.clientY, event.currentTarget);
		},
		onSliderPointerUp: function onSliderPointerUp(event) {
			var _event$currentTarget$2, _event$currentTarget2;
			if (!this.isSliderDragging) return;
			(_event$currentTarget$2 = (_event$currentTarget2 = event.currentTarget).releasePointerCapture) === null || _event$currentTarget$2 === void 0 || _event$currentTarget$2.call(_event$currentTarget2, event.pointerId);
			this.isSliderDragging = false;
			this.$pcInputColor.emitValueChangeEnd(event);
		},
		onSliderKeyDown: function onSliderKeyDown(event) {
			if (this.$pcInputColor.disabled || this.disabled) return;
			var isVertical = this.orientation === "vertical";
			if (!(isVertical ? ["ArrowUp", "ArrowDown"] : ["ArrowLeft", "ArrowRight"]).includes(event.key)) return;
			event.preventDefault();
			var _this$range2 = this.range, step = _this$range2.step, min = _this$range2.min, max = _this$range2.max;
			var direction = isVertical ? event.key === "ArrowUp" ? 1 : -1 : event.key === "ArrowRight" ? 1 : -1;
			var next = Math.min(Math.max(this.currentValue + direction * step, min), max);
			this.$pcInputColor.updateChannel(this.channel, next, event);
			this.$pcInputColor.emitValueChangeEnd(event);
		}
	},
	computed: {
		workingValue: function workingValue() {
			return this.$pcInputColor.getChannelColorValue(this.channel);
		},
		range: function range() {
			return this.workingValue.getChannelRange(this.channel);
		},
		currentValue: function currentValue() {
			return this.workingValue.getChannelValue(this.channel);
		},
		handlePercent: function handlePercent() {
			var _this$range3 = this.range, min = _this$range3.min, max = _this$range3.max;
			if (max === min) return 0;
			return (this.currentValue - min) / (max - min) * 100;
		},
		handleStyle: function handleStyle() {
			return this.orientation === "vertical" ? {
				left: "50%",
				bottom: "".concat(this.handlePercent, "%"),
				transform: "translate(-50%, 50%)"
			} : {
				top: "50%",
				left: "".concat(this.handlePercent, "%"),
				transform: "translate(-50%, -50%)"
			};
		},
		cssVars: function cssVars() {
			return {
				"--px-slider-background": this.$pcInputColor.getChannelGradient(this.channel, this.orientation),
				"--px-slider-handle-background": this.$pcInputColor.getChannelColor(this.channel).toString("css")
			};
		},
		attrs: function attrs() {
			return mergeProps(this.a11yAttrs, this.ptmi("root"));
		},
		a11yAttrs: function a11yAttrs() {
			return {
				style: this.cssVars,
				"data-channel": this.channel,
				"data-orientation": this.orientation,
				"data-p": this.dataP,
				onPointerdown: this.onSliderPointerDown,
				onPointermove: this.onSliderPointerMove,
				onPointerup: this.onSliderPointerUp
			};
		},
		dataP: function dataP() {
			return c({
				disabled: this.$pcInputColor.disabled || this.disabled,
				dragging: this.isSliderDragging,
				horizontal: this.orientation === "horizontal",
				vertical: this.orientation === "vertical"
			});
		}
	},
	components: {
		InputColorTransparencyGrid: script$3,
		InputColorSliderTrack: script$2,
		InputColorSliderHandle: script$1
	}
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
	return !_ctx.asChild ? (openBlock(), createBlock(resolveDynamicComponent(_ctx.as), mergeProps({
		key: 0,
		"class": _ctx.cx("root", { orientation: _ctx.orientation })
	}, $options.attrs), {
		"default": withCtx(function() {
			return [renderSlot(_ctx.$slots, "default")];
		}),
		_: 3
	}, 16, ["class"])) : renderSlot(_ctx.$slots, "default", {
		a11yAttrs: $options.a11yAttrs,
		"class": normalizeClass(_ctx.cx("root", { orientation: _ctx.orientation }))
	}, void 0, void 0, 1);
}
script.render = render;

export { script as default };
//# sourceMappingURL=inputcolorslider-CKq004Zt.mjs.map
