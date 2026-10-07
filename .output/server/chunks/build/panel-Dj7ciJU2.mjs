import { c } from './classnames-ryN3v2bf.mjs';
import { B as BaseStyle } from '../virtual/entry.mjs';
import { s as script$2 } from './basecomponent-xyj7Pl8r.mjs';
import { R as Ripple } from './ripple-Bhb3fhdC.mjs';
import { n as script$1 } from './button-C40_yBwc.mjs';
import { d } from './minus-CqPHusYq.mjs';
import { d as d$1 } from './plus-CKEOzfFI.mjs';
import { resolveComponent, openBlock, createElementBlock, mergeProps, createElementVNode, renderSlot, normalizeClass, toDisplayString, createCommentVNode, createVNode, withCtx, createBlock, resolveDynamicComponent, normalizeProps, guardReactiveProps, Transition, withDirectives, vShow } from 'vue';
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
import './rolldown-runtime-D7D4PA-g.mjs';
import './spinner-DV-Ha3dz.mjs';
import './core-aCRgtkIU.mjs';
import './badge-DMTHnEO9.mjs';

//#endregion
//#region node_modules/.pnpm/primevue@5.0.2_vue@3.5.43/node_modules/primevue/panel/style/index.mjs
var PanelStyle = BaseStyle.extend({
	name: "panel",
	style: "\n    .p-panel {\n        display: block;\n        border: 1px solid dt('panel.border.color');\n        border-radius: dt('panel.border.radius');\n        background: dt('panel.background');\n        color: dt('panel.color');\n    }\n\n    .p-panel-header {\n        display: flex;\n        justify-content: space-between;\n        align-items: center;\n        padding: dt('panel.header.padding');\n        background: dt('panel.header.background');\n        color: dt('panel.header.color');\n        border-style: solid;\n        border-width: dt('panel.header.border.width');\n        border-color: dt('panel.header.border.color');\n        border-radius: dt('panel.header.border.radius');\n    }\n\n    .p-panel-toggleable .p-panel-header {\n        padding: dt('panel.toggleable.header.padding');\n    }\n\n    .p-panel-title {\n        font-weight: dt('panel.title.font.weight');\n        font-size: dt('panel.title.font.size');\n    }\n\n    .p-panel-content-container {\n        display: grid;\n        grid-template-rows: 1fr;\n    }\n\n    .p-panel-content-wrapper {\n        min-height: 0;\n    }\n\n    .p-panel-content {\n        padding: dt('panel.content.padding');\n    }\n\n    .p-panel-footer {\n        padding: dt('panel.footer.padding');\n    }\n\n    .p-panel-trigger {\n        cursor: pointer;\n    }\n",
	classes: {
		root: function root(_ref) {
			return ["p-panel p-component", { "p-panel-toggleable": _ref.props.toggleable }];
		},
		header: "p-panel-header",
		title: "p-panel-title",
		headerActions: "p-panel-header-actions",
		pcToggleButton: "p-panel-toggle-button",
		contentContainer: "p-panel-content-container",
		contentWrapper: "p-panel-content-wrapper",
		content: "p-panel-content",
		footer: "p-panel-footer"
	}
});
//#endregion
//#region node_modules/.pnpm/primevue@5.0.2_vue@3.5.43/node_modules/primevue/panel/index.mjs
var script = {
	name: "Panel",
	"extends": {
		name: "BasePanel",
		"extends": script$2,
		props: {
			header: String,
			toggleable: Boolean,
			collapsed: Boolean,
			toggleButtonProps: {
				type: Object,
				"default": function _default() {
					return {
						severity: "secondary",
						text: true,
						rounded: true,
						iconOnly: true
					};
				}
			}
		},
		style: PanelStyle,
		provide: function provide() {
			return {
				$pcPanel: this,
				$parentInstance: this
			};
		}
	},
	inheritAttrs: false,
	emits: ["update:collapsed", "toggle"],
	data: function data() {
		return { d_collapsed: this.collapsed };
	},
	watch: { collapsed: function collapsed(newValue) {
		this.d_collapsed = newValue;
	} },
	methods: {
		toggle: function toggle(event) {
			this.d_collapsed = !this.d_collapsed;
			this.$emit("update:collapsed", this.d_collapsed);
			this.$emit("toggle", {
				originalEvent: event,
				value: this.d_collapsed
			});
		},
		onKeyDown: function onKeyDown(event) {
			if (event.code === "Enter" || event.code === "NumpadEnter" || event.code === "Space") {
				this.toggle(event);
				event.preventDefault();
			}
		}
	},
	computed: {
		buttonAriaLabel: function buttonAriaLabel() {
			return this.toggleButtonProps && this.toggleButtonProps.ariaLabel ? this.toggleButtonProps.ariaLabel : this.header;
		},
		dataP: function dataP() {
			return c({ toggleable: this.toggleable });
		}
	},
	components: {
		Plus: d$1,
		Minus: d,
		Button: script$1
	},
	directives: { ripple: Ripple }
};
var _hoisted_1 = ["data-p"];
var _hoisted_2 = ["data-p"];
var _hoisted_3 = ["id"];
var _hoisted_4 = ["id", "aria-labelledby"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
	var _component_Button = resolveComponent("Button");
	return openBlock(), createElementBlock("div", mergeProps({
		"class": _ctx.cx("root"),
		"data-p": $options.dataP
	}, _ctx.ptmi("root")), [createElementVNode("div", mergeProps({
		"class": _ctx.cx("header"),
		"data-p": $options.dataP
	}, _ctx.ptm("header")), [renderSlot(_ctx.$slots, "header", {
		id: _ctx.$id + "_header",
		"class": normalizeClass(_ctx.cx("title")),
		collapsed: $data.d_collapsed
	}, function() {
		return [_ctx.header ? (openBlock(), createElementBlock("span", mergeProps({
			key: 0,
			id: _ctx.$id + "_header",
			"class": _ctx.cx("title")
		}, _ctx.ptm("title")), toDisplayString(_ctx.header), 17, _hoisted_3)) : createCommentVNode("", true)];
	}), createElementVNode("div", mergeProps({ "class": _ctx.cx("headerActions") }, _ctx.ptm("headerActions")), [renderSlot(_ctx.$slots, "icons"), _ctx.toggleable ? renderSlot(_ctx.$slots, "togglebutton", {
		collapsed: $data.d_collapsed,
		toggleCallback: function toggleCallback(event) {
			return $options.toggle(event);
		},
		keydownCallback: function keydownCallback(event) {
			return $options.onKeyDown(event);
		}
	}, function() {
		return [createVNode(_component_Button, mergeProps({
			id: _ctx.$id + "_header",
			"class": _ctx.cx("pcToggleButton"),
			"aria-label": $options.buttonAriaLabel,
			"aria-controls": _ctx.$id + "_content",
			"aria-expanded": !$data.d_collapsed,
			unstyled: _ctx.unstyled,
			onClick: _cache[0] || (_cache[0] = function($event) {
				return $options.toggle($event);
			}),
			onKeydown: _cache[1] || (_cache[1] = function($event) {
				return $options.onKeyDown($event);
			})
		}, _ctx.toggleButtonProps, { pt: _ctx.ptm("pcToggleButton") }), {
			"default": withCtx(function() {
				return [renderSlot(_ctx.$slots, "toggleicon", { collapsed: $data.d_collapsed }, function() {
					return [(openBlock(), createBlock(resolveDynamicComponent($data.d_collapsed ? "Plus" : "Minus"), normalizeProps(guardReactiveProps(_ctx.ptm("pcToggleButton")["icon"])), null, 16))];
				})];
			}),
			_: 3
		}, 16, [
			"id",
			"class",
			"aria-label",
			"aria-controls",
			"aria-expanded",
			"unstyled",
			"pt"
		])];
	}, void 0, 0) : createCommentVNode("", true)], 16)], 16, _hoisted_2), createVNode(Transition, mergeProps({ name: "p-collapsible" }, _ctx.ptm("transition")), {
		"default": withCtx(function() {
			return [withDirectives(createElementVNode("div", mergeProps({
				id: _ctx.$id + "_content",
				"class": _ctx.cx("contentContainer"),
				role: "region",
				"aria-labelledby": _ctx.$id + "_header"
			}, _ctx.ptm("contentContainer")), [createElementVNode("div", mergeProps({ "class": _ctx.cx("contentWrapper") }, _ctx.ptm("contentWrapper")), [createElementVNode("div", mergeProps({ "class": _ctx.cx("content") }, _ctx.ptm("content")), [renderSlot(_ctx.$slots, "default")], 16), _ctx.$slots.footer ? (openBlock(), createElementBlock("div", mergeProps({
				key: 0,
				"class": _ctx.cx("footer")
			}, _ctx.ptm("footer")), [renderSlot(_ctx.$slots, "footer")], 16)) : createCommentVNode("", true)], 16)], 16, _hoisted_4), [[vShow, !$data.d_collapsed]])];
		}),
		_: 3
	}, 16)], 16, _hoisted_1);
}
script.render = render;

export { script as default };
//# sourceMappingURL=panel-Dj7ciJU2.mjs.map
