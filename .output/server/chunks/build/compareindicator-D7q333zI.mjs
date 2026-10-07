import { c } from './classnames-ryN3v2bf.mjs';
import { B as BaseStyle } from '../virtual/entry.mjs';
import { s as script$1 } from './basecomponent-xyj7Pl8r.mjs';
import { mergeProps, openBlock, createBlock, resolveDynamicComponent, withCtx, createElementVNode, renderSlot, normalizeClass } from 'vue';
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

//#region node_modules/.pnpm/primevue@5.0.2_vue@3.5.43/node_modules/primevue/compareindicator/style/index.mjs
var CompareIndicatorStyle = BaseStyle.extend({
	name: "compareindicator",
	classes: { root: "p-compare-indicator" }
});
//#endregion
//#region node_modules/.pnpm/primevue@5.0.2_vue@3.5.43/node_modules/primevue/compareindicator/index.mjs
var script = {
	name: "CompareIndicator",
	"extends": {
		name: "BaseCompareIndicator",
		"extends": script$1,
		props: {
			as: {
				type: [String, Object],
				"default": "SPAN"
			},
			asChild: {
				type: Boolean,
				"default": false
			},
			inputId: {
				type: String,
				"default": void 0
			},
			inputStyle: {
				type: [
					String,
					Object,
					Array
				],
				"default": void 0
			},
			inputClass: {
				type: [
					String,
					Object,
					Array
				],
				"default": void 0
			}
		},
		style: CompareIndicatorStyle,
		provide: function provide() {
			return {
				$pcCompareIndicator: this,
				$parentInstance: this
			};
		}
	},
	inheritAttrs: false,
	inject: ["$pcCompare"],
	methods: { getInputAttrs: function getInputAttrs() {
		var _compare$tabindex;
		var compare = this.$pcCompare;
		if (!compare) return {};
		return {
			name: compare.name,
			type: "range",
			min: compare.min,
			max: compare.max,
			step: compare.step,
			value: compare.d_value,
			disabled: compare.disabled,
			readonly: compare.readonly,
			tabindex: compare.disabled ? -1 : (_compare$tabindex = compare.tabindex) !== null && _compare$tabindex !== void 0 ? _compare$tabindex : 0,
			"aria-valuemin": compare.min,
			"aria-valuemax": compare.max,
			"aria-valuenow": compare.d_value,
			"aria-orientation": compare.orientation,
			"aria-readonly": compare.readonly ? "true" : void 0,
			"aria-labelledby": compare.ariaLabelledby,
			"aria-label": compare.ariaLabel,
			onInput: compare.onInputInput,
			onChange: compare.onInputChange,
			onFocus: compare.onInputFocus,
			onBlur: compare.onInputBlur
		};
	} },
	computed: {
		attrs: function attrs() {
			var _this$$pcCompare;
			return mergeProps(this.a11yAttrs, (_this$$pcCompare = this.$pcCompare) === null || _this$$pcCompare === void 0 ? void 0 : _this$$pcCompare.ptm("indicator"), this.ptmi("root"));
		},
		a11yAttrs: function a11yAttrs() {
			var compare = this.$pcCompare;
			if (!compare) return {};
			return {
				"data-pc-section": "root",
				"data-orientation": compare.orientation,
				"data-disabled": compare.disabled ? "" : void 0,
				"data-invalid": compare.invalid ? "" : void 0,
				"data-dragging": compare.isDragging ? "" : void 0
			};
		},
		inputAttrs: function inputAttrs() {
			var _this$$pcCompare2;
			return mergeProps({
				id: this.inputId,
				style: this.inputStyle
			}, ((_this$$pcCompare2 = this.$pcCompare) === null || _this$$pcCompare2 === void 0 ? void 0 : _this$$pcCompare2.ptm("input")) || {}, this.getInputAttrs());
		},
		inputClassValue: function inputClassValue() {
			var _this$$pcCompare3;
			return c((_this$$pcCompare3 = this.$pcCompare) === null || _this$$pcCompare3 === void 0 ? void 0 : _this$$pcCompare3.cx("input"), this.inputClass);
		}
	}
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
	return !_ctx.asChild ? (openBlock(), createBlock(resolveDynamicComponent(_ctx.as), mergeProps({
		key: 0,
		"class": _ctx.cx("root")
	}, $options.attrs), {
		"default": withCtx(function() {
			return [createElementVNode("input", mergeProps({ "class": $options.inputClassValue }, $options.inputAttrs), null, 16), renderSlot(_ctx.$slots, "default")];
		}),
		_: 3
	}, 16, ["class"])) : renderSlot(_ctx.$slots, "default", {
		"class": normalizeClass(_ctx.cx("root")),
		a11yAttrs: $options.a11yAttrs
	}, void 0, void 0, 1);
}
script.render = render;

export { script as default };
//# sourceMappingURL=compareindicator-D7q333zI.mjs.map
