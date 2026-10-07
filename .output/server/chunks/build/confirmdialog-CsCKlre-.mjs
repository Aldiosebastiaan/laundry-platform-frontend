import { h as c, as as ConfirmationEventBus, B as BaseStyle } from '../virtual/entry.mjs';
import { s as script$3 } from './basecomponent-xyj7Pl8r.mjs';
import { n as script$1 } from './button-C40_yBwc.mjs';
import script$2 from './dialog-CIp_iE_t.mjs';
import { toRaw, resolveComponent, openBlock, createBlock, normalizeClass, createSlots, withCtx, createElementBlock, Fragment, renderSlot, resolveDynamicComponent, mergeProps, createCommentVNode, createElementVNode, toDisplayString, createVNode, createTextVNode } from 'vue';
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
import './classnames-ryN3v2bf.mjs';
import './ripple-Bhb3fhdC.mjs';
import './basedirective-BlCM3Le7.mjs';
import './uuid-Dh44iNNj.mjs';
import './spinner-DV-Ha3dz.mjs';
import './core-aCRgtkIU.mjs';
import './badge-DMTHnEO9.mjs';
import './zindex-BQqkRR0M.mjs';
import './times-DSptPruj.mjs';
import './portal-BlowhyOz.mjs';
import './utils-zX3cgdNm.mjs';
import './focustrap-Bn6Qigj7.mjs';

//#endregion
//#region node_modules/.pnpm/primevue@5.0.2_vue@3.5.43/node_modules/primevue/confirmdialog/style/index.mjs
var ConfirmDialogStyle = BaseStyle.extend({
	name: "confirmdialog",
	style: "\n    .p-confirmdialog .p-dialog-content {\n        display: flex;\n        align-items: center;\n        gap: dt('confirmdialog.content.gap');\n    }\n\n    .p-confirmdialog-icon {\n        color: dt('confirmdialog.icon.color');\n        font-size: dt('confirmdialog.icon.size');\n        width: dt('confirmdialog.icon.size');\n        height: dt('confirmdialog.icon.size');\n    }\n\n    .p-confirmdialog-message {\n        color: dt('confirmdialog.message.color');\n        font-weight: dt('confirmdialog.message.font.weight');\n        font-size: dt('confirmdialog.message.font.size');\n    }\n",
	classes: {
		root: "p-confirmdialog",
		icon: "p-confirmdialog-icon",
		message: "p-confirmdialog-message",
		pcRejectButton: "p-confirmdialog-reject-button",
		pcAcceptButton: "p-confirmdialog-accept-button"
	}
});
//#endregion
//#region node_modules/.pnpm/primevue@5.0.2_vue@3.5.43/node_modules/primevue/confirmdialog/index.mjs
var script = {
	name: "ConfirmDialog",
	"extends": {
		name: "BaseConfirmDialog",
		"extends": script$3,
		props: {
			group: String,
			breakpoints: {
				type: Object,
				"default": null
			},
			draggable: {
				type: Boolean,
				"default": true
			}
		},
		style: ConfirmDialogStyle,
		provide: function provide() {
			return {
				$pcConfirmDialog: this,
				$parentInstance: this
			};
		}
	},
	confirmListener: null,
	closeListener: null,
	data: function data() {
		return {
			visible: false,
			confirmation: null
		};
	},
	mounted: function mounted() {
		var _this = this;
		this.confirmListener = function(options) {
			if (!options) return;
			if (options.group === _this.group) {
				_this.confirmation = options;
				if (_this.confirmation.onShow) _this.confirmation.onShow();
				_this.visible = true;
			}
		};
		this.closeListener = function() {
			_this.visible = false;
			_this.confirmation = null;
		};
		ConfirmationEventBus.on("confirm", this.confirmListener);
		ConfirmationEventBus.on("close", this.closeListener);
	},
	beforeUnmount: function beforeUnmount() {
		ConfirmationEventBus.off("confirm", this.confirmListener);
		ConfirmationEventBus.off("close", this.closeListener);
	},
	methods: {
		accept: function accept() {
			if (!this.visible) return;
			this.visible = false;
			if (this.confirmation.accept) this.confirmation.accept();
		},
		reject: function reject() {
			if (!this.visible) return;
			this.visible = false;
			if (this.confirmation.reject) this.confirmation.reject();
		},
		onHide: function onHide() {
			if (this.confirmation.onHide) this.confirmation.onHide();
			this.visible = false;
		},
		resolveIcon: function resolveIcon(icon) {
			return c(icon) ? icon : toRaw(icon);
		},
		isComponentIcon: function isComponentIcon(icon) {
			return !!icon && !c(icon);
		}
	},
	computed: {
		appendTo: function appendTo() {
			return this.confirmation ? this.confirmation.appendTo : "body";
		},
		target: function target() {
			return this.confirmation ? this.confirmation.target : null;
		},
		modal: function modal() {
			return this.confirmation ? this.confirmation.modal == null ? true : this.confirmation.modal : true;
		},
		header: function header() {
			return this.confirmation ? this.confirmation.header : null;
		},
		message: function message() {
			return this.confirmation ? this.confirmation.message : null;
		},
		blockScroll: function blockScroll() {
			return this.confirmation ? this.confirmation.blockScroll : true;
		},
		position: function position() {
			return this.confirmation ? this.confirmation.position : null;
		},
		acceptLabel: function acceptLabel() {
			if (this.confirmation) {
				var _confirmation$acceptP;
				var confirmation = this.confirmation;
				return confirmation.acceptLabel || ((_confirmation$acceptP = confirmation.acceptProps) === null || _confirmation$acceptP === void 0 ? void 0 : _confirmation$acceptP.label) || this.$primevue.config.locale.accept;
			}
			return this.$primevue.config.locale.accept;
		},
		rejectLabel: function rejectLabel() {
			if (this.confirmation) {
				var _confirmation$rejectP;
				var confirmation = this.confirmation;
				return confirmation.rejectLabel || ((_confirmation$rejectP = confirmation.rejectProps) === null || _confirmation$rejectP === void 0 ? void 0 : _confirmation$rejectP.label) || this.$primevue.config.locale.reject;
			}
			return this.$primevue.config.locale.reject;
		},
		acceptIcon: function acceptIcon() {
			var _this$confirmation;
			return this.confirmation ? this.confirmation.acceptIcon : (_this$confirmation = this.confirmation) !== null && _this$confirmation !== void 0 && _this$confirmation.acceptProps ? this.confirmation.acceptProps.icon : null;
		},
		rejectIcon: function rejectIcon() {
			var _this$confirmation2;
			return this.confirmation ? this.confirmation.rejectIcon : (_this$confirmation2 = this.confirmation) !== null && _this$confirmation2 !== void 0 && _this$confirmation2.rejectProps ? this.confirmation.rejectProps.icon : null;
		},
		autoFocusAccept: function autoFocusAccept() {
			return this.confirmation.defaultFocus === void 0 || this.confirmation.defaultFocus === "accept" ? true : false;
		},
		autoFocusReject: function autoFocusReject() {
			return this.confirmation.defaultFocus === "reject" ? true : false;
		},
		closeOnEscape: function closeOnEscape() {
			return this.confirmation ? this.confirmation.closeOnEscape : true;
		}
	},
	components: {
		Dialog: script$2,
		Button: script$1
	}
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
	var _component_Button = resolveComponent("Button");
	var _component_Dialog = resolveComponent("Dialog");
	return openBlock(), createBlock(_component_Dialog, {
		visible: $data.visible,
		"onUpdate:visible": [_cache[2] || (_cache[2] = function($event) {
			return $data.visible = $event;
		}), $options.onHide],
		role: "alertdialog",
		"class": normalizeClass(_ctx.cx("root")),
		modal: $options.modal,
		header: $options.header,
		blockScroll: $options.blockScroll,
		appendTo: $options.appendTo,
		position: $options.position,
		breakpoints: _ctx.breakpoints,
		closeOnEscape: $options.closeOnEscape,
		draggable: _ctx.draggable,
		pt: _ctx.pt,
		unstyled: _ctx.unstyled
	}, createSlots({
		"default": withCtx(function() {
			return [!_ctx.$slots.container ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [!_ctx.$slots.message ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [renderSlot(_ctx.$slots, "icon", {}, function() {
				return [_ctx.$slots.icon ? (openBlock(), createBlock(resolveDynamicComponent(_ctx.$slots.icon), {
					key: 0,
					"class": normalizeClass(_ctx.cx("icon"))
				}, null, 8, ["class"])) : $options.isComponentIcon($data.confirmation.icon) ? (openBlock(), createBlock(resolveDynamicComponent($options.resolveIcon($data.confirmation.icon)), mergeProps({
					key: 1,
					"class": _ctx.cx("icon")
				}, _ctx.ptm("icon")), null, 16, ["class"])) : $data.confirmation.icon ? (openBlock(), createElementBlock("span", mergeProps({
					key: 2,
					"class": [$data.confirmation.icon, _ctx.cx("icon")]
				}, _ctx.ptm("icon")), null, 16)) : createCommentVNode("", true)];
			}), createElementVNode("span", mergeProps({ "class": _ctx.cx("message") }, _ctx.ptm("message")), toDisplayString($options.message), 17)], 64)) : (openBlock(), createBlock(resolveDynamicComponent(_ctx.$slots.message), {
				key: 1,
				message: $data.confirmation,
				icon: $data.confirmation.icon ? $options.resolveIcon($data.confirmation.icon) : void 0
			}, null, 8, ["message", "icon"]))], 64)) : createCommentVNode("", true)];
		}),
		_: 2
	}, [_ctx.$slots.container ? {
		name: "container",
		fn: withCtx(function(slotProps) {
			return [renderSlot(_ctx.$slots, "container", {
				message: $data.confirmation,
				closeCallback: slotProps.closeCallback,
				acceptCallback: $options.accept,
				rejectCallback: $options.reject,
				initDragCallback: slotProps.initDragCallback
			})];
		}),
		key: "0"
	} : void 0, !_ctx.$slots.container ? {
		name: "footer",
		fn: withCtx(function() {
			var _$data$confirmation$r;
			return [createVNode(_component_Button, mergeProps({
				"class": [_ctx.cx("pcRejectButton"), $data.confirmation.rejectClass],
				autofocus: $options.autoFocusReject,
				unstyled: _ctx.unstyled,
				text: ((_$data$confirmation$r = $data.confirmation.rejectProps) === null || _$data$confirmation$r === void 0 ? void 0 : _$data$confirmation$r.text) || false,
				onClick: _cache[0] || (_cache[0] = function($event) {
					return $options.reject();
				})
			}, $data.confirmation.rejectProps, { pt: _ctx.ptm("pcRejectButton") }), {
				"default": withCtx(function() {
					return [$options.rejectIcon || _ctx.$slots.rejecticon ? renderSlot(_ctx.$slots, "rejecticon", {}, function() {
						return [createElementVNode("span", mergeProps({ "class": $options.rejectIcon }, _ctx.ptm("pcRejectButton")["icon"], { "data-pc-section": "rejectbuttonicon" }), null, 16)];
					}, void 0, 0) : createCommentVNode("", true), createTextVNode(" " + toDisplayString($options.rejectLabel), 1)];
				}),
				_: 3
			}, 16, [
				"class",
				"autofocus",
				"unstyled",
				"text",
				"pt"
			]), createVNode(_component_Button, mergeProps({
				"class": [_ctx.cx("pcAcceptButton"), $data.confirmation.acceptClass],
				autofocus: $options.autoFocusAccept,
				unstyled: _ctx.unstyled,
				onClick: _cache[1] || (_cache[1] = function($event) {
					return $options.accept();
				})
			}, $data.confirmation.acceptProps, { pt: _ctx.ptm("pcAcceptButton") }), {
				"default": withCtx(function() {
					return [$options.acceptIcon || _ctx.$slots.accepticon ? renderSlot(_ctx.$slots, "accepticon", {}, function() {
						return [createElementVNode("span", mergeProps({ "class": $options.acceptIcon }, _ctx.ptm("pcAcceptButton")["icon"], { "data-pc-section": "acceptbuttonicon" }), null, 16)];
					}, void 0, 0) : createCommentVNode("", true), createTextVNode(" " + toDisplayString($options.acceptLabel), 1)];
				}),
				_: 3
			}, 16, [
				"class",
				"autofocus",
				"unstyled",
				"pt"
			])];
		}),
		key: "1"
	} : void 0]), 1032, [
		"visible",
		"class",
		"modal",
		"header",
		"blockScroll",
		"appendTo",
		"position",
		"breakpoints",
		"closeOnEscape",
		"draggable",
		"onUpdate:visible",
		"pt",
		"unstyled"
	]);
}
script.render = render;

export { script as default };
//# sourceMappingURL=confirmdialog-CsCKlre-.mjs.map
