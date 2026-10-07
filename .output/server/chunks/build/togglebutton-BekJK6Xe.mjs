import { c } from './classnames-ryN3v2bf.mjs';
import { l, B as BaseStyle } from '../virtual/entry.mjs';
import { R as Ripple } from './ripple-Bhb3fhdC.mjs';
import { s as script$2 } from './baseeditableholder-CSsjvX-h.mjs';
import { resolveDirective, withDirectives, openBlock, createElementBlock, mergeProps, createElementVNode, renderSlot, normalizeClass, createCommentVNode, toDisplayString } from 'vue';
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
import './basedirective-BlCM3Le7.mjs';
import './uuid-Dh44iNNj.mjs';
import './basecomponent-xyj7Pl8r.mjs';

//#endregion
//#region node_modules/.pnpm/primevue@5.0.2_vue@3.5.43/node_modules/primevue/togglebutton/style/index.mjs
var ToggleButtonStyle = BaseStyle.extend({
	name: "togglebutton",
	style: "\n    .p-togglebutton {\n        display: inline-flex;\n        cursor: pointer;\n        user-select: none;\n        overflow: hidden;\n        position: relative;\n        color: dt('togglebutton.color');\n        background: dt('togglebutton.background');\n        border: 1px solid dt('togglebutton.border.color');\n        padding: dt('togglebutton.padding');\n        transition:\n            background dt('togglebutton.transition.duration'),\n            color dt('togglebutton.transition.duration'),\n            border-color dt('togglebutton.transition.duration'),\n            outline-color dt('togglebutton.transition.duration'),\n            box-shadow dt('togglebutton.transition.duration');\n        border-radius: dt('togglebutton.border.radius');\n        outline-color: transparent;\n        font-size: dt('togglebutton.font.size');\n        font-weight: dt('togglebutton.font.weight');\n    }\n\n    .p-togglebutton-content {\n        display: inline-flex;\n        flex: 1 1 auto;\n        align-items: center;\n        justify-content: center;\n        gap: dt('togglebutton.gap');\n        padding: dt('togglebutton.content.padding');\n        background: transparent;\n        border-radius: dt('togglebutton.content.border.radius');\n        transition:\n            background dt('togglebutton.transition.duration'),\n            color dt('togglebutton.transition.duration'),\n            border-color dt('togglebutton.transition.duration'),\n            outline-color dt('togglebutton.transition.duration'),\n            box-shadow dt('togglebutton.transition.duration');\n    }\n\n    .p-togglebutton:not(:disabled):not(.p-togglebutton-checked):hover {\n        background: dt('togglebutton.hover.background');\n        color: dt('togglebutton.hover.color');\n    }\n\n    .p-togglebutton.p-togglebutton-checked {\n        background: dt('togglebutton.checked.background');\n        border-color: dt('togglebutton.checked.border.color');\n        color: dt('togglebutton.checked.color');\n    }\n\n    .p-togglebutton-checked .p-togglebutton-content {\n        background: dt('togglebutton.content.checked.background');\n        box-shadow: dt('togglebutton.content.checked.shadow');\n    }\n\n    .p-togglebutton:focus-visible {\n        box-shadow: dt('togglebutton.focus.ring.shadow');\n        outline: dt('togglebutton.focus.ring.width') dt('togglebutton.focus.ring.style') dt('togglebutton.focus.ring.color');\n        outline-offset: dt('togglebutton.focus.ring.offset');\n    }\n\n    .p-togglebutton.p-invalid {\n        border-color: dt('togglebutton.invalid.border.color');\n    }\n\n    .p-togglebutton:disabled {\n        opacity: 1;\n        cursor: default;\n        background: dt('togglebutton.disabled.background');\n        border-color: dt('togglebutton.disabled.border.color');\n        color: dt('togglebutton.disabled.color');\n    }\n\n    .p-togglebutton-label,\n    .p-togglebutton-icon {\n        position: relative;\n        transition: none;\n    }\n\n    .p-togglebutton-icon {\n        color: dt('togglebutton.icon.color');\n    }\n\n    .p-togglebutton:not(:disabled):not(.p-togglebutton-checked):hover .p-togglebutton-icon {\n        color: dt('togglebutton.icon.hover.color');\n    }\n\n    .p-togglebutton.p-togglebutton-checked .p-togglebutton-icon {\n        color: dt('togglebutton.icon.checked.color');\n    }\n\n    .p-togglebutton:disabled .p-togglebutton-icon {\n        color: dt('togglebutton.icon.disabled.color');\n    }\n\n    .p-togglebutton-sm {\n        padding: dt('togglebutton.sm.padding');\n        font-size: dt('togglebutton.sm.font.size');\n    }\n\n    .p-togglebutton-sm .p-togglebutton-content {\n        padding: dt('togglebutton.content.sm.padding');\n    }\n\n    .p-togglebutton-lg {\n        padding: dt('togglebutton.lg.padding');\n        font-size: dt('togglebutton.lg.font.size');\n    }\n\n    .p-togglebutton-lg .p-togglebutton-content {\n        padding: dt('togglebutton.content.lg.padding');\n    }\n\n    .p-togglebutton-fluid {\n        width: 100%;\n    }\n\n    .p-togglebutton-content .p-icon,\n    .p-togglebutton-content .pi {\n        line-height: dt('typography.line.height')\n    }\n",
	classes: {
		root: function root(_ref) {
			var instance = _ref.instance, props = _ref.props;
			return ["p-togglebutton p-component", {
				"p-togglebutton-checked": instance.active,
				"p-invalid": instance.$invalid,
				"p-togglebutton-fluid": props.fluid,
				"p-togglebutton-sm p-inputfield-sm": props.size === "small",
				"p-togglebutton-lg p-inputfield-lg": props.size === "large"
			}];
		},
		content: "p-togglebutton-content",
		icon: "p-togglebutton-icon",
		label: "p-togglebutton-label"
	}
});
//#endregion
//#region node_modules/.pnpm/primevue@5.0.2_vue@3.5.43/node_modules/primevue/togglebutton/index.mjs
var script$1 = {
	name: "BaseToggleButton",
	"extends": script$2,
	props: {
		onIcon: String,
		offIcon: String,
		onLabel: {
			type: String,
			"default": "Yes"
		},
		offLabel: {
			type: String,
			"default": "No"
		},
		readonly: {
			type: Boolean,
			"default": false
		},
		tabindex: {
			type: Number,
			"default": null
		},
		ariaLabelledby: {
			type: String,
			"default": null
		},
		ariaLabel: {
			type: String,
			"default": null
		},
		size: {
			type: String,
			"default": null
		},
		fluid: {
			type: Boolean,
			"default": null
		}
	},
	style: ToggleButtonStyle,
	provide: function provide() {
		return {
			$pcToggleButton: this,
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
var script = {
	name: "ToggleButton",
	"extends": script$1,
	inheritAttrs: false,
	emits: ["change"],
	methods: {
		getPTOptions: function getPTOptions(key) {
			return (key === "root" ? this.ptmi : this.ptm)(key, { context: {
				active: this.active,
				disabled: this.disabled
			} });
		},
		onChange: function onChange(event) {
			if (!this.disabled && !this.readonly) {
				this.writeValue(!this.d_value, event);
				this.$emit("change", event);
			}
		},
		onBlur: function onBlur(event) {
			var _this$formField$onBlu, _this$formField;
			(_this$formField$onBlu = (_this$formField = this.formField).onBlur) === null || _this$formField$onBlu === void 0 || _this$formField$onBlu.call(_this$formField, event);
		}
	},
	computed: {
		active: function active() {
			return this.d_value === true;
		},
		hasLabel: function hasLabel() {
			return l(this.onLabel) && l(this.offLabel);
		},
		label: function label() {
			return this.hasLabel ? this.d_value ? this.onLabel : this.offLabel : "\xA0";
		},
		dataP: function dataP() {
			return c(_defineProperty({
				checked: this.active,
				invalid: this.$invalid
			}, this.size, this.size));
		}
	},
	directives: { ripple: Ripple }
};
var _hoisted_1 = [
	"tabindex",
	"disabled",
	"aria-pressed",
	"aria-label",
	"aria-labelledby",
	"data-p-checked",
	"data-p-disabled",
	"data-p"
];
var _hoisted_2 = ["data-p"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
	var _directive_ripple = resolveDirective("ripple");
	return withDirectives((openBlock(), createElementBlock("button", mergeProps({
		type: "button",
		"class": _ctx.cx("root"),
		tabindex: _ctx.tabindex,
		disabled: _ctx.disabled,
		"aria-pressed": _ctx.d_value,
		onClick: _cache[0] || (_cache[0] = function() {
			return $options.onChange && $options.onChange.apply($options, arguments);
		}),
		onBlur: _cache[1] || (_cache[1] = function() {
			return $options.onBlur && $options.onBlur.apply($options, arguments);
		})
	}, $options.getPTOptions("root"), {
		"aria-label": _ctx.ariaLabel,
		"aria-labelledby": _ctx.ariaLabelledby,
		"data-p-checked": $options.active,
		"data-p-disabled": _ctx.disabled,
		"data-p": $options.dataP
	}), [createElementVNode("span", mergeProps({ "class": _ctx.cx("content") }, $options.getPTOptions("content"), { "data-p": $options.dataP }), [renderSlot(_ctx.$slots, "default", {}, function() {
		return [renderSlot(_ctx.$slots, "icon", {
			value: _ctx.d_value,
			"class": normalizeClass(_ctx.cx("icon"))
		}, function() {
			return [_ctx.onIcon || _ctx.offIcon ? (openBlock(), createElementBlock("span", mergeProps({
				key: 0,
				"class": [_ctx.cx("icon"), _ctx.d_value ? _ctx.onIcon : _ctx.offIcon]
			}, $options.getPTOptions("icon")), null, 16)) : createCommentVNode("", true)];
		}), createElementVNode("span", mergeProps({ "class": _ctx.cx("label") }, $options.getPTOptions("label")), toDisplayString($options.label), 17)];
	})], 16, _hoisted_2)], 16, _hoisted_1)), [[_directive_ripple]]);
}
script.render = render;

export { script as default };
//# sourceMappingURL=togglebutton-BekJK6Xe.mjs.map
