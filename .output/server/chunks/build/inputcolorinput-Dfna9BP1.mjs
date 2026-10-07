import { c } from './classnames-ryN3v2bf.mjs';
import { B as BaseStyle } from '../virtual/entry.mjs';
import { s as script$1 } from './basecomponent-xyj7Pl8r.mjs';
import { n as script$2 } from './inputtext-KfOCVfNN.mjs';
import { withKeys, mergeProps, openBlock, createBlock, resolveDynamicComponent, renderSlot, normalizeClass } from 'vue';
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
import './rolldown-runtime-D7D4PA-g.mjs';
import './baseinput-CsveNdCW.mjs';
import './baseeditableholder-CSsjvX-h.mjs';

//#region node_modules/.pnpm/primevue@5.0.2_vue@3.5.43/node_modules/primevue/inputcolorinput/style/index.mjs
var InputColorInputStyle = BaseStyle.extend({
	name: "inputcolorinput",
	classes: { root: "p-inputcolor-input" }
});
//#endregion
//#region node_modules/.pnpm/primevue@5.0.2_vue@3.5.43/node_modules/primevue/inputcolorinput/index.mjs
var script = {
	name: "InputColorInput",
	"extends": {
		name: "BaseInputColorInput",
		"extends": script$1,
		props: {
			channel: {
				type: String,
				"default": "hex"
			},
			as: {
				type: [
					String,
					Object,
					Function
				],
				"default": function _default() {
					return script$2;
				}
			},
			asChild: {
				type: Boolean,
				"default": false
			}
		},
		style: InputColorInputStyle,
		provide: function provide() {
			return {
				$pcInputColorInput: this,
				$parentInstance: this
			};
		}
	},
	inheritAttrs: false,
	inject: ["$pcInputColor"],
	data: function data() {
		return { pendingValue: null };
	},
	methods: {
		updateInputValue: function updateInputValue(value) {
			return this.$pcInputColor.updateChannel(this.channel, value);
		},
		flushPendingValue: function flushPendingValue(event) {
			if (this.pendingValue === null || !event || !event.target) return false;
			var value = this.pendingValue;
			this.pendingValue = null;
			return this.updateInputValue(value);
		},
		emitInputValueChangeEnd: function emitInputValueChangeEnd(event) {
			if (this.flushPendingValue(event)) this.$pcInputColor.emitValueChangeEnd(event);
		},
		onInput: function onInput(event) {
			if (!event || !event.target) return;
			this.pendingValue = event.target.value;
			if (!this.isTextChannel) this.flushPendingValue(event);
		},
		onChange: function onChange(event) {
			if (this.isTextChannel) return;
			this.$pcInputColor.emitValueChangeEnd(event);
		},
		onBlur: function onBlur(event) {
			if (this.isTextChannel) this.emitInputValueChangeEnd(event);
		},
		onKeyDown: function onKeyDown(event) {
			if (event.defaultPrevented) return;
			event.preventDefault();
			if (this.isTextChannel) this.emitInputValueChangeEnd(event);
			else this.$pcInputColor.emitValueChangeEnd(event);
		}
	},
	computed: {
		isTextChannel: function isTextChannel() {
			return this.channel === "hex" || this.channel === "css";
		},
		resolvedType: function resolvedType() {
			return this.isTextChannel ? "text" : "number";
		},
		displayValue: function displayValue() {
			if (this.$pcInputColor.d_value == null || this.$pcInputColor.d_value == void 0) return "";
			return this.$pcInputColor.getInputChannelValue(this.channel);
		},
		range: function range() {
			var _this$$pcInputColor$g;
			return (_this$$pcInputColor$g = this.$pcInputColor.getInputChannelRange(this.channel)) !== null && _this$$pcInputColor$g !== void 0 ? _this$$pcInputColor$g : {};
		},
		attrs: function attrs() {
			return mergeProps(this.a11yAttrs, this.ptmi("root"));
		},
		a11yAttrs: function a11yAttrs() {
			return {
				type: this.resolvedType,
				defaultValue: this.displayValue,
				min: this.range.min,
				max: this.range.max,
				step: this.range.step,
				"aria-label": this.channel,
				"data-channel": this.channel,
				"data-p": this.dataP,
				disabled: this.$pcInputColor.disabled || void 0,
				autocomplete: "off",
				spellcheck: false,
				onInput: this.onInput,
				onChange: this.onChange,
				onBlur: this.onBlur,
				onKeydown: withKeys(this.onKeyDown, ["enter"])
			};
		},
		dataP: function dataP() {
			return c({
				disabled: this.$pcInputColor.disabled,
				text: this.isTextChannel,
				numeric: !this.isTextChannel
			});
		}
	}
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
	return !_ctx.asChild ? (openBlock(), createBlock(resolveDynamicComponent(_ctx.as), mergeProps({
		key: 0,
		"class": _ctx.cx("root")
	}, $options.attrs), null, 16, ["class"])) : renderSlot(_ctx.$slots, "default", {
		a11yAttrs: $options.a11yAttrs,
		"class": normalizeClass(_ctx.cx("root"))
	}, void 0, void 0, 1);
}
script.render = render;

export { script as default };
//# sourceMappingURL=inputcolorinput-Dfna9BP1.mjs.map
