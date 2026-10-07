import { B as BaseStyle } from '../virtual/entry.mjs';
import { s as script$1 } from './basecomponent-xyj7Pl8r.mjs';
import { openBlock, createElementBlock, mergeProps, createElementVNode, renderSlot, createTextVNode, toDisplayString, createCommentVNode } from 'vue';
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

//#region node_modules/.pnpm/primevue@5.0.2_vue@3.5.43/node_modules/primevue/progressspinner/style/index.mjs
var ProgressSpinnerStyle = BaseStyle.extend({
	name: "progressspinner",
	style: "\n.p-progressspinner {\n    position: relative;\n    display: inline-flex;\n    align-items: center;\n    justify-content: center;\n    width: 100px;\n    height: 100px;\n}\n\n.p-progressspinner-circle {\n    width: 100%;\n    height: 100%;\n}\n\n.p-progressspinner-circle-track {\n    stroke: dt('content.border.color');\n}\n\n.p-progressspinner-circle-range {\n    stroke: dt('progressspinner.color.one');\n    stroke-linecap: round;\n    transition: stroke-dashoffset 0.3s;\n}\n\n[data-state=\"determinate\"] .p-progressspinner-circle-range {\n    transform: rotate(-90deg);\n    transform-origin: center;\n}\n\n[data-state=\"indeterminate\"] .p-progressspinner-circle {\n    animation: p-progressspinner-rotate 2s linear infinite;\n    transform-origin: center;\n}\n\n[data-state=\"indeterminate\"] .p-progressspinner-circle-range {\n    stroke-dasharray: 1, 302;\n    stroke-dashoffset: 0;\n    animation:\n        p-progressspinner-dash 1.5s ease-in-out infinite,\n        p-progressspinner-color 6s ease-in-out infinite;\n}\n\n.p-progressspinner-value {\n    fill: dt('text.muted.color');\n}\n\n@keyframes p-progressspinner-rotate {\n    100% {\n        transform: rotate(360deg);\n    }\n}\n\n@keyframes p-progressspinner-dash {\n    0% {\n        stroke-dasharray: 1, 302;\n        stroke-dashoffset: 0;\n    }\n    50% {\n        stroke-dasharray: 136, 302;\n        stroke-dashoffset: -54px;\n    }\n    100% {\n        stroke-dasharray: 1, 302;\n        stroke-dashoffset: -302px;\n    }\n}\n\n@keyframes p-progressspinner-color {\n    100%,\n    0% {\n        stroke: dt('progressspinner.color.one');\n    }\n    40% {\n        stroke: dt('progressspinner.color.two');\n    }\n    66% {\n        stroke: dt('progressspinner.color.three');\n    }\n    80%,\n    90% {\n        stroke: dt('progressspinner.color.four');\n    }\n}\n",
	classes: {
		root: "p-progressspinner",
		circle: "p-progressspinner-circle",
		circleTrack: "p-progressspinner-circle-track",
		circleRange: "p-progressspinner-circle-range",
		value: "p-progressspinner-value"
	}
});
//#endregion
//#region node_modules/.pnpm/primevue@5.0.2_vue@3.5.43/node_modules/primevue/progressspinner/index.mjs
var script = {
	name: "ProgressSpinner",
	"extends": {
		name: "BaseProgressSpinner",
		"extends": script$1,
		props: {
			value: {
				type: Number,
				"default": null
			},
			strokeWidth: {
				type: Number,
				"default": 4
			},
			animationDuration: {
				type: String,
				"default": "2s"
			},
			min: {
				type: Number,
				"default": 0
			},
			max: {
				type: Number,
				"default": 100
			}
		},
		style: ProgressSpinnerStyle,
		provide: function provide() {
			return {
				$pcProgressSpinner: this,
				$parentInstance: this
			};
		}
	},
	inheritAttrs: false,
	computed: {
		isDeterminate: function isDeterminate() {
			return Number.isFinite(this.value);
		},
		determinateState: function determinateState() {
			return this.isDeterminate ? "determinate" : "indeterminate";
		},
		validRange: function validRange() {
			return Number.isFinite(this.min) && Number.isFinite(this.max) && this.max > this.min;
		},
		clampedValue: function clampedValue() {
			if (!this.isDeterminate) return 0;
			if (!this.validRange) return Number.isFinite(this.min) ? this.min : 0;
			var value = Number.isFinite(this.value) ? this.value : this.min;
			return Math.min(Math.max(value, this.min), this.max);
		},
		percent: function percent() {
			return !this.isDeterminate || !this.validRange ? 0 : (this.clampedValue - this.min) / (this.max - this.min) * 100;
		},
		roundedPercent: function roundedPercent() {
			return Math.round(this.percent);
		},
		radius: function radius() {
			return (100 - this.strokeWidth) / 2;
		},
		circumference: function circumference() {
			return 2 * Math.PI * this.radius;
		},
		dashOffset: function dashOffset() {
			return this.circumference - this.percent / 100 * this.circumference;
		},
		svgStyle: function svgStyle() {
			return { "animation-duration": this.animationDuration };
		}
	}
};
var _hoisted_1 = [
	"aria-valuemin",
	"aria-valuemax",
	"aria-valuenow",
	"data-state",
	"data-value"
];
var _hoisted_2 = ["r", "stroke-width"];
var _hoisted_3 = [
	"r",
	"stroke-width",
	"stroke-dasharray",
	"stroke-dashoffset"
];
function render(_ctx, _cache, $props, $setup, $data, $options) {
	return openBlock(), createElementBlock("div", mergeProps({
		"class": _ctx.cx("root"),
		role: "progressbar",
		"aria-valuemin": _ctx.min,
		"aria-valuemax": _ctx.max,
		"aria-valuenow": $options.isDeterminate ? $options.clampedValue : void 0,
		"data-state": $options.determinateState,
		"data-value": $options.isDeterminate ? $options.clampedValue : void 0
	}, _ctx.ptmi("root")), [(openBlock(), createElementBlock("svg", mergeProps({
		"class": _ctx.cx("circle"),
		viewBox: "0 0 100 100",
		style: $options.svgStyle
	}, _ctx.ptm("circle")), [
		createElementVNode("circle", mergeProps({
			"class": _ctx.cx("circleTrack"),
			cx: "50",
			cy: "50",
			r: $options.radius,
			fill: "none",
			"stroke-width": _ctx.strokeWidth
		}, _ctx.ptm("circleTrack")), null, 16, _hoisted_2),
		createElementVNode("circle", mergeProps({
			"class": _ctx.cx("circleRange"),
			cx: "50",
			cy: "50",
			r: $options.radius,
			fill: "none",
			"stroke-width": _ctx.strokeWidth,
			"stroke-dasharray": $options.isDeterminate ? $options.circumference : void 0,
			"stroke-dashoffset": $options.isDeterminate ? $options.dashOffset : void 0
		}, _ctx.ptm("circleRange")), null, 16, _hoisted_3),
		$options.isDeterminate ? (openBlock(), createElementBlock("text", mergeProps({
			key: 0,
			"class": _ctx.cx("value"),
			x: "50",
			y: "50",
			"text-anchor": "middle",
			"dominant-baseline": "central"
		}, _ctx.ptm("value")), [renderSlot(_ctx.$slots, "default", {
			value: $options.clampedValue,
			percent: $options.roundedPercent
		}, function() {
			return [createTextVNode(toDisplayString($options.roundedPercent) + "%", 1)];
		})], 16)) : createCommentVNode("", true)
	], 16))], 16, _hoisted_1);
}
script.render = render;

export { script as default };
//# sourceMappingURL=progressspinner-CQh4AC6N.mjs.map
