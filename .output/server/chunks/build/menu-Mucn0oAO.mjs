import { c } from './classnames-ryN3v2bf.mjs';
import { x } from './zindex-BQqkRR0M.mjs';
import { r as re$1, g as z, L as L$1, C as C$1, t as tt, e as et, k as kt, h as c$1, B as BaseStyle } from '../virtual/entry.mjs';
import { s as script$5 } from './basecomponent-xyj7Pl8r.mjs';
import { h as h$1 } from './chevron-down-3cVYzQrF.mjs';
import { R as Ripple } from './ripple-Bhb3fhdC.mjs';
import { C as ConnectedOverlayScrollHandler } from './utils-CwiYQ8nb.mjs';
import { O as OverlayEventBus } from './overlayeventbus-CuL2f427.mjs';
import { s as script$4 } from './portal-BlowhyOz.mjs';
import { toRaw, mergeProps, resolveComponent, resolveDirective, openBlock, createElementBlock, withModifiers, createElementVNode, withDirectives, createBlock, resolveDynamicComponent, normalizeClass, createCommentVNode, toDisplayString, Fragment, renderSlot, renderList, createTextVNode, createVNode, createSlots, withCtx, Transition } from 'vue';
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

//#endregion
//#region node_modules/.pnpm/primevue@5.0.2_vue@3.5.43/node_modules/primevue/menu/style/index.mjs
var MenuStyle = BaseStyle.extend({
	name: "menu",
	style: "\n    .p-menu {\n        background: dt('menu.background');\n        color: dt('menu.color');\n        border: 1px solid dt('menu.border.color');\n        border-radius: dt('menu.border.radius');\n        min-width: 12.5rem;\n    }\n\n    .p-menu-list,\n    .p-menu-submenu-list {\n        margin: 0;\n        padding: dt('menu.list.padding');\n        outline: 0 none;\n        list-style: none;\n        display: flex;\n        flex-direction: column;\n        gap: dt('menu.list.gap');\n    }\n\n     .p-menu-submenu-list {\n        padding-inline-start: 1rem;\n        padding-inline-end: 0;\n     }\n\n    .p-menu-item-content {\n        transition:\n            background dt('menu.transition.duration'),\n            color dt('menu.transition.duration');\n        border-radius: dt('menu.item.border.radius');\n        color: dt('menu.item.color');\n        overflow: hidden;\n    }\n\n    .p-menu-item-link {\n        cursor: pointer;\n        display: flex;\n        align-items: center;\n        text-decoration: none;\n        overflow: hidden;\n        position: relative;\n        color: inherit;\n        padding: dt('menu.item.padding');\n        gap: dt('menu.item.gap');\n        user-select: none;\n        outline: 0 none;\n    }\n\n    .p-menu-item-label {\n        font-weight: dt('menu.item.label.font.weight');\n        font-size: dt('menu.item.label.font.size');\n    }\n\n    .p-menu-item-icon {\n        color: dt('menu.item.icon.color');\n        font-size: dt('menu.item.icon.size');\n        width: dt('menu.item.icon.size');\n        height: dt('menu.item.icon.size');\n    }\n\n    .p-menu-item.p-focus > .p-menu-item-content {\n        color: dt('menu.item.focus.color');\n        background: dt('menu.item.focus.background');\n    }\n\n    .p-menu-item.p-focus > .p-menu-item-content .p-menu-item-icon {\n        color: dt('menu.item.icon.focus.color');\n    }\n\n    .p-menu-item:not(.p-disabled) > .p-menu-item-content:hover {\n        color: dt('menu.item.focus.color');\n        background: dt('menu.item.focus.background');\n    }\n\n    .p-menu-item:not(.p-disabled) > .p-menu-item-content:hover .p-menu-item-icon {\n        color: dt('menu.item.icon.focus.color');\n    }\n\n    .p-menu-overlay {\n        box-shadow: dt('menu.shadow');\n        will-change: transform;\n    }\n\n    .p-menu-submenu-label {\n        background: dt('menu.submenu.label.background');\n        padding: dt('menu.submenu.label.padding');\n        color: dt('menu.submenu.label.color');\n        font-weight: dt('menu.submenu.label.font.weight');\n        font-size: dt('menu.submenu.label.font.size');\n    }\n\n    .p-menu-separator {\n        border-block-start: 1px solid dt('menu.separator.border.color');\n    }\n\n    .p-menu-item-submenu-icon {\n        margin-inline-start: auto;\n        color: dt('menu.submenu.icon.color');\n        font-size: dt('menu.submenu.icon.size');\n        width: dt('menu.submenu.icon.size');\n        height: dt('menu.submenu.icon.size');\n        flex-shrink: 0;\n        transition: transform 0.2s;\n    }\n\n    .p-menu-item-submenu-icon[data-expanded] {\n        transform: rotate(180deg);\n    }\n\n    .p-menu-item:not(.p-disabled) > .p-menu-item-content:hover .p-menu-item-submenu-icon,\n    .p-menu-item.p-focus > .p-menu-item-content .p-menu-item-submenu-icon {\n        color: dt('menu.submenu.icon.focus.color');\n    }\n",
	classes: {
		root: function root(_ref) {
			return ["p-menu p-component", { "p-menu-overlay": _ref.props.popup }];
		},
		start: "p-menu-start",
		list: "p-menu-list",
		submenuLabel: "p-menu-submenu-label",
		submenuList: "p-menu-submenu-list",
		separator: "p-menu-separator",
		end: "p-menu-end",
		item: function item(_ref2) {
			var instance = _ref2.instance;
			return ["p-menu-item", {
				"p-menu-item-toggleable": instance.toggleable,
				"p-focus": instance.id === instance.focusedOptionId,
				"p-disabled": instance.disabled()
			}];
		},
		itemContent: "p-menu-item-content",
		itemLink: "p-menu-item-link",
		itemIcon: "p-menu-item-icon",
		itemLabel: "p-menu-item-label",
		itemSubmenuIcon: "p-menu-item-submenu-icon"
	}
});
//#endregion
//#region node_modules/.pnpm/primevue@5.0.2_vue@3.5.43/node_modules/primevue/menu/index.mjs
var script$3 = {
	name: "BaseMenu",
	"extends": script$5,
	props: {
		popup: {
			type: Boolean,
			"default": false
		},
		model: {
			type: Array,
			"default": null
		},
		expandedKeys: {
			type: Object,
			"default": void 0
		},
		appendTo: {
			type: [String, Object],
			"default": "body"
		},
		autoZIndex: {
			type: Boolean,
			"default": true
		},
		baseZIndex: {
			type: Number,
			"default": 0
		},
		tabindex: {
			type: Number,
			"default": 0
		},
		ariaLabel: {
			type: String,
			"default": null
		},
		ariaLabelledby: {
			type: String,
			"default": null
		}
	},
	style: MenuStyle,
	provide: function provide() {
		return {
			$pcMenu: this,
			$parentInstance: this
		};
	}
};
var script$2 = {
	name: "Menuitem",
	hostName: "Menu",
	"extends": script$5,
	inheritAttrs: false,
	emits: ["item-click", "item-mousemove"],
	props: {
		item: null,
		templates: null,
		id: null,
		focusedOptionId: null,
		index: null,
		toggleable: {
			type: Boolean,
			"default": false
		},
		expanded: {
			type: Boolean,
			"default": false
		},
		depth: {
			type: Number,
			"default": 0
		}
	},
	inject: { $pcMenu: { "default": null } },
	methods: {
		getPTOptions: function getPTOptions(key) {
			return this.ptm(key, { context: {
				item: this.item,
				index: this.index,
				focused: this.isItemFocused(),
				disabled: this.disabled()
			} });
		},
		isItemFocused: function isItemFocused() {
			return this.focusedOptionId === this.id;
		},
		onItemClick: function onItemClick(event) {
			if (this.disabled()) return;
			if (this.toggleable) {
				var _this$$pcMenu, _this$$pcMenu2, _this$$pcMenu3;
				event.preventDefault();
				(_this$$pcMenu = this.$pcMenu) === null || _this$$pcMenu === void 0 || _this$$pcMenu.setFocusedOptionId(this.id);
				(_this$$pcMenu2 = this.$pcMenu) === null || _this$$pcMenu2 === void 0 || _this$$pcMenu2.focusMenuList();
				(_this$$pcMenu3 = this.$pcMenu) === null || _this$$pcMenu3 === void 0 || _this$$pcMenu3.toggleSubmenu(this.id);
				return;
			}
			this.$emit("item-click", {
				originalEvent: event,
				item: this.item,
				id: this.id
			});
		},
		onItemMouseMove: function onItemMouseMove(event) {
			this.$emit("item-mousemove", {
				originalEvent: event,
				item: this.item,
				id: this.id
			});
		},
		onItemMousedown: function onItemMousedown(event) {
			if (this.toggleable) event.preventDefault();
		},
		visible: function visible() {
			var _this$$pcMenu4;
			return !!((_this$$pcMenu4 = this.$pcMenu) !== null && _this$$pcMenu4 !== void 0 && _this$$pcMenu4.visible(this.item));
		},
		disabled: function disabled() {
			var _this$$pcMenu5;
			return (_this$$pcMenu5 = this.$pcMenu) === null || _this$$pcMenu5 === void 0 ? void 0 : _this$$pcMenu5.disabled(this.item);
		},
		label: function label() {
			var _this$$pcMenu6;
			return (_this$$pcMenu6 = this.$pcMenu) === null || _this$$pcMenu6 === void 0 ? void 0 : _this$$pcMenu6.label(this.item);
		},
		getMenuItemProps: function getMenuItemProps(item) {
			return {
				action: mergeProps({
					"class": this.cx("itemLink"),
					tabindex: "-1"
				}, this.getPTOptions("itemLink")),
				icon: mergeProps({ "class": [this.cx("itemIcon"), c$1(item.icon) ? item.icon : void 0] }, this.getPTOptions("itemIcon")),
				label: mergeProps({ "class": this.cx("itemLabel") }, this.getPTOptions("itemLabel"))
			};
		},
		resolveIcon: function resolveIcon(icon) {
			return c$1(icon) ? icon : toRaw(icon);
		},
		isComponentIcon: function isComponentIcon(icon) {
			return !!icon && !c$1(icon);
		}
	},
	computed: {
		dataP: function dataP() {
			return c({
				focus: this.isItemFocused(),
				disabled: this.disabled()
			});
		},
		ariaMeta: function ariaMeta() {
			var _this$$pcMenu7;
			return ((_this$$pcMenu7 = this.$pcMenu) === null || _this$$pcMenu7 === void 0 || (_this$$pcMenu7 = _this$$pcMenu7.ariaMetaMap) === null || _this$$pcMenu7 === void 0 ? void 0 : _this$$pcMenu7.get(this.item)) || {};
		}
	},
	directives: { ripple: Ripple },
	components: { ChevronDownIcon: h$1 }
};
var _hoisted_1$2 = [
	"id",
	"aria-label",
	"aria-disabled",
	"aria-haspopup",
	"aria-expanded",
	"aria-level",
	"aria-posinset",
	"aria-setsize",
	"data-focused",
	"data-disabled",
	"data-toggleable",
	"data-depth",
	"data-p"
];
var _hoisted_2$1 = ["data-p"];
var _hoisted_3 = ["href", "target"];
var _hoisted_4 = ["data-p"];
var _hoisted_5 = ["data-p"];
function render$2(_ctx, _cache, $props, $setup, $data, $options) {
	var _component_ChevronDownIcon = resolveComponent("ChevronDownIcon");
	var _directive_ripple = resolveDirective("ripple");
	return $options.visible() ? (openBlock(), createElementBlock("li", mergeProps({
		key: 0,
		id: $props.id,
		"class": [_ctx.cx("item"), $props.item["class"]],
		role: "menuitem",
		style: $props.item.style,
		"aria-label": $options.label(),
		"aria-disabled": $options.disabled(),
		"aria-haspopup": $props.toggleable ? "true" : void 0,
		"aria-expanded": $props.toggleable ? $props.expanded : void 0,
		"aria-level": $options.ariaMeta.level,
		"aria-posinset": $options.ariaMeta.posinset,
		"aria-setsize": $options.ariaMeta.setsize,
		"data-focused": $options.isItemFocused(),
		"data-disabled": $options.disabled() || false,
		"data-toggleable": $props.toggleable || void 0,
		"data-depth": $props.toggleable ? $props.depth : void 0,
		"data-p": $options.dataP,
		onClick: _cache[2] || (_cache[2] = withModifiers(function($event) {
			return $options.onItemClick($event);
		}, ["self"])),
		onMousedown: _cache[3] || (_cache[3] = function($event) {
			return $options.onItemMousedown($event);
		})
	}, $options.getPTOptions("item")), [createElementVNode("div", mergeProps({
		"class": _ctx.cx("itemContent"),
		onClick: _cache[0] || (_cache[0] = function($event) {
			return $options.onItemClick($event);
		}),
		onMousemove: _cache[1] || (_cache[1] = function($event) {
			return $options.onItemMouseMove($event);
		}),
		"data-p": $options.dataP
	}, $options.getPTOptions("itemContent")), [!$props.templates.item ? withDirectives((openBlock(), createElementBlock("a", mergeProps({
		key: 0,
		href: $props.item.url,
		"class": _ctx.cx("itemLink"),
		target: $props.item.target,
		tabindex: "-1"
	}, $options.getPTOptions("itemLink")), [
		$props.templates.itemicon ? (openBlock(), createBlock(resolveDynamicComponent($props.templates.itemicon), {
			key: 0,
			item: $props.item,
			"class": normalizeClass(_ctx.cx("itemIcon"))
		}, null, 8, ["item", "class"])) : $options.isComponentIcon($props.item.icon) ? (openBlock(), createBlock(resolveDynamicComponent($options.resolveIcon($props.item.icon)), mergeProps({
			key: 1,
			"class": _ctx.cx("itemIcon"),
			"data-p": $options.dataP
		}, $options.getPTOptions("itemIcon")), null, 16, ["class", "data-p"])) : $props.item.icon ? (openBlock(), createElementBlock("span", mergeProps({
			key: 2,
			"class": [_ctx.cx("itemIcon"), $props.item.icon],
			"data-p": $options.dataP
		}, $options.getPTOptions("itemIcon")), null, 16, _hoisted_4)) : createCommentVNode("", true),
		createElementVNode("span", mergeProps({
			"class": _ctx.cx("itemLabel"),
			"data-p": $options.dataP
		}, $options.getPTOptions("itemLabel")), toDisplayString($options.label()), 17, _hoisted_5),
		$props.toggleable ? (openBlock(), createElementBlock(Fragment, { key: 3 }, [$props.templates && $props.templates.submenuicon ? (openBlock(), createBlock(resolveDynamicComponent($props.templates.submenuicon), {
			key: 0,
			item: $props.item,
			"class": normalizeClass(_ctx.cx("itemSubmenuIcon")),
			"data-expanded": $props.expanded || void 0
		}, null, 8, [
			"item",
			"class",
			"data-expanded"
		])) : (openBlock(), createBlock(_component_ChevronDownIcon, mergeProps({
			key: 1,
			"class": _ctx.cx("itemSubmenuIcon"),
			"data-expanded": $props.expanded || void 0
		}, $options.getPTOptions("itemSubmenuIcon")), null, 16, ["class", "data-expanded"]))], 64)) : createCommentVNode("", true)
	], 16, _hoisted_3)), [[_directive_ripple]]) : $props.templates.item ? (openBlock(), createBlock(resolveDynamicComponent($props.templates.item), {
		key: 1,
		item: $props.item,
		label: $options.label(),
		icon: $props.item.icon ? $options.resolveIcon($props.item.icon) : void 0,
		props: $options.getMenuItemProps($props.item)
	}, null, 8, [
		"item",
		"label",
		"icon",
		"props"
	])) : createCommentVNode("", true)], 16, _hoisted_2$1), $props.toggleable && $props.expanded ? (openBlock(), createElementBlock("ul", mergeProps({
		key: 0,
		"class": _ctx.cx("submenuList"),
		role: "menu"
	}, _ctx.ptm("submenuList")), [renderSlot(_ctx.$slots, "submenu")], 16)) : createCommentVNode("", true)], 16, _hoisted_1$2)) : createCommentVNode("", true);
}
script$2.render = render$2;
var script$1 = {
	name: "MenuSub",
	hostName: "Menu",
	"extends": script$5,
	inheritAttrs: false,
	emits: ["item-click", "item-mousemove"],
	props: {
		items: {
			type: Array,
			"default": null
		},
		depth: {
			type: Number,
			"default": 0
		},
		parentId: {
			type: String,
			"default": null
		},
		templates: {
			type: Object,
			"default": null
		},
		focusedOptionId: {
			type: String,
			"default": null
		}
	},
	inject: { $pcMenu: { "default": null } },
	methods: {
		itemId: function itemId(item, i) {
			return (item === null || item === void 0 ? void 0 : item.key) != null ? String(item.key) : "".concat(this.parentId, "_").concat(i);
		},
		toggleable: function toggleable(item) {
			var _this$$pcMenu;
			return !!((_this$$pcMenu = this.$pcMenu) !== null && _this$$pcMenu !== void 0 && _this$$pcMenu.isItemToggleable(item, this.depth));
		},
		expanded: function expanded(item, i) {
			var _this$$pcMenu2;
			if (!this.toggleable(item)) return true;
			return !!((_this$$pcMenu2 = this.$pcMenu) !== null && _this$$pcMenu2 !== void 0 && _this$$pcMenu2.isSubmenuExpanded(this.itemId(item, i)));
		},
		label: function label(item) {
			var _this$$pcMenu3;
			return (_this$$pcMenu3 = this.$pcMenu) === null || _this$$pcMenu3 === void 0 ? void 0 : _this$$pcMenu3.label(item);
		},
		visible: function visible(item) {
			var _this$$pcMenu4;
			return !!((_this$$pcMenu4 = this.$pcMenu) !== null && _this$$pcMenu4 !== void 0 && _this$$pcMenu4.visible(item));
		}
	},
	components: { Menuitem: script$2 }
};
var _hoisted_1$1 = ["id"];
function render$1(_ctx, _cache, $props, $setup, $data, $options) {
	var _component_MenuSub = resolveComponent("MenuSub", true);
	var _component_Menuitem = resolveComponent("Menuitem");
	return openBlock(true), createElementBlock(Fragment, null, renderList($props.items, function(item, i) {
		return openBlock(), createElementBlock(Fragment, { key: $options.itemId(item, i) }, [item.separator && $options.visible(item) ? (openBlock(), createElementBlock("li", mergeProps({
			key: 0,
			"class": [_ctx.cx("separator"), item["class"]],
			style: item.style,
			role: "separator"
		}, { ref_for: true }, _ctx.ptm("separator")), null, 16)) : item.items && $options.visible(item) && !$options.toggleable(item) ? (openBlock(), createElementBlock(Fragment, { key: 1 }, [createElementVNode("li", mergeProps({
			id: $options.itemId(item, i),
			"class": [_ctx.cx("submenuLabel"), item["class"]],
			role: "none"
		}, { ref_for: true }, _ctx.ptm("submenuLabel")), [$props.templates && $props.templates.submenulabel ? (openBlock(), createBlock(resolveDynamicComponent($props.templates.submenulabel), {
			key: 0,
			item
		}, null, 8, ["item"])) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [createTextVNode(toDisplayString($options.label(item)), 1)], 64))], 16, _hoisted_1$1), createVNode(_component_MenuSub, {
			items: item.items,
			depth: $props.depth + 1,
			parentId: $options.itemId(item, i),
			templates: $props.templates,
			focusedOptionId: $props.focusedOptionId,
			unstyled: _ctx.unstyled,
			onItemClick: _cache[0] || (_cache[0] = function($event) {
				return _ctx.$emit("item-click", $event);
			}),
			onItemMousemove: _cache[1] || (_cache[1] = function($event) {
				return _ctx.$emit("item-mousemove", $event);
			}),
			pt: _ctx.pt
		}, null, 8, [
			"items",
			"depth",
			"parentId",
			"templates",
			"focusedOptionId",
			"unstyled",
			"pt"
		])], 64)) : $options.visible(item) && !item.separator ? (openBlock(), createBlock(_component_Menuitem, {
			key: 2,
			id: $options.itemId(item, i),
			item,
			index: i,
			templates: $props.templates,
			focusedOptionId: $props.focusedOptionId,
			toggleable: !!item.items && $options.toggleable(item),
			expanded: $options.expanded(item, i),
			depth: $props.depth,
			unstyled: _ctx.unstyled,
			onItemClick: _cache[4] || (_cache[4] = function($event) {
				return _ctx.$emit("item-click", $event);
			}),
			onItemMousemove: _cache[5] || (_cache[5] = function($event) {
				return _ctx.$emit("item-mousemove", $event);
			}),
			pt: _ctx.pt
		}, createSlots({ _: 2 }, [!!item.items && $options.toggleable(item) ? {
			name: "submenu",
			fn: withCtx(function() {
				return [createVNode(_component_MenuSub, {
					items: item.items,
					depth: $props.depth + 1,
					parentId: $options.itemId(item, i),
					templates: $props.templates,
					focusedOptionId: $props.focusedOptionId,
					unstyled: _ctx.unstyled,
					onItemClick: _cache[2] || (_cache[2] = function($event) {
						return _ctx.$emit("item-click", $event);
					}),
					onItemMousemove: _cache[3] || (_cache[3] = function($event) {
						return _ctx.$emit("item-mousemove", $event);
					}),
					pt: _ctx.pt
				}, null, 8, [
					"items",
					"depth",
					"parentId",
					"templates",
					"focusedOptionId",
					"unstyled",
					"pt"
				])];
			}),
			key: "0"
		} : void 0]), 1032, [
			"id",
			"item",
			"index",
			"templates",
			"focusedOptionId",
			"toggleable",
			"expanded",
			"depth",
			"unstyled",
			"pt"
		])) : createCommentVNode("", true)], 64);
	}), 128);
}
script$1.render = render$1;
function _typeof(o) {
	"@babel/helpers - typeof";
	return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o) {
		return typeof o;
	} : function(o) {
		return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
	}, _typeof(o);
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
			_defineProperty(e, r, t[r]);
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function(r) {
			Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
		});
	}
	return e;
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
var FOCUSABLE_SELECTOR = "[data-pc-section=\"item\"][data-disabled=\"false\"]";
var script = {
	name: "Menu",
	"extends": script$3,
	inheritAttrs: false,
	emits: [
		"show",
		"hide",
		"focus",
		"blur",
		"update:expandedKeys"
	],
	data: function data() {
		return {
			overlayVisible: false,
			focused: false,
			focusedOptionId: null,
			d_expandedKeys: {}
		};
	},
	target: null,
	outsideClickListener: null,
	scrollHandler: null,
	resizeListener: null,
	container: null,
	list: null,
	mounted: function mounted() {
		if (!this.popup) {
			this.bindResizeListener();
			this.bindOutsideClickListener();
		}
	},
	beforeUnmount: function beforeUnmount() {
		this.unbindResizeListener();
		this.unbindOutsideClickListener();
		if (this.scrollHandler) {
			this.scrollHandler.destroy();
			this.scrollHandler = null;
		}
		this.target = null;
		if (this.container && this.autoZIndex) x.clear(this.container);
		this.container = null;
	},
	methods: {
		itemClick: function itemClick(event) {
			var item = event.item;
			if (this.disabled(item)) return;
			if (item.command) item.command(event);
			if (this.overlayVisible) this.hide();
			if (!this.popup && this.focusedOptionId !== event.id) this.setFocusedOptionId(event.id);
		},
		itemMouseMove: function itemMouseMove(event) {
			if (this.focused) this.setFocusedOptionId(event.id);
		},
		setFocusedOptionId: function setFocusedOptionId(id) {
			this.focusedOptionId = id;
		},
		focusMenuList: function focusMenuList() {
			this.list && kt(this.list);
		},
		onListFocus: function onListFocus(event) {
			this.focused = true;
			if (!this.popup && !this.focusedOptionId) this.changeFocusedOptionIndex(0);
			this.$emit("focus", event);
		},
		onListBlur: function onListBlur(event) {
			this.focused = false;
			this.setFocusedOptionId(null);
			this.$emit("blur", event);
		},
		onListKeyDown: function onListKeyDown(event) {
			switch (event.code) {
				case "ArrowDown":
					this.onArrowDownKey(event);
					break;
				case "ArrowUp":
					this.onArrowUpKey(event);
					break;
				case "Home":
					this.onHomeKey(event);
					break;
				case "End":
					this.onEndKey(event);
					break;
				case "Enter":
				case "NumpadEnter":
					this.onEnterKey(event);
					break;
				case "Space":
					this.onSpaceKey(event);
					break;
				case "Escape":
					if (this.popup) {
						kt(this.target);
						this.hide();
					}
					break;
				case "Tab": this.onTabKey();
			}
		},
		onArrowDownKey: function onArrowDownKey(event) {
			var optionIndex = this.findNextOptionIndex(this.focusedOptionId);
			this.changeFocusedOptionIndex(optionIndex);
			event.preventDefault();
		},
		onArrowUpKey: function onArrowUpKey(event) {
			if (event.altKey && this.popup) {
				kt(this.target);
				this.hide();
				event.preventDefault();
			} else {
				var optionIndex = this.findPrevOptionIndex(this.focusedOptionId);
				this.changeFocusedOptionIndex(optionIndex);
				event.preventDefault();
			}
		},
		onTabKey: function onTabKey() {
			if (!this.overlayVisible) return;
			kt(this.target);
			this.hide();
		},
		onHomeKey: function onHomeKey(event) {
			this.changeFocusedOptionIndex(0);
			event.preventDefault();
		},
		onEndKey: function onEndKey(event) {
			this.changeFocusedOptionIndex(tt(this.container, FOCUSABLE_SELECTOR).length - 1);
			event.preventDefault();
		},
		onEnterKey: function onEnterKey(event) {
			event.preventDefault();
			var element = et(this.list, "[id=\"".concat(this.focusedOptionId, "\"]"));
			if (!element) return;
			if (element.getAttribute("data-toggleable") === "true") {
				(et(element, "[data-pc-section=\"itemcontent\"]") || element).click();
				return;
			}
			var anchorElement = et(element, "a[data-pc-section=\"itemlink\"]");
			this.popup && kt(this.target);
			(anchorElement || element).click();
		},
		onSpaceKey: function onSpaceKey(event) {
			this.onEnterKey(event);
		},
		findNextOptionIndex: function findNextOptionIndex(id) {
			var matchedOptionIndex = _toConsumableArray(tt(this.container, FOCUSABLE_SELECTOR)).findIndex(function(link) {
				return link.id === id;
			});
			return matchedOptionIndex > -1 ? matchedOptionIndex + 1 : 0;
		},
		findPrevOptionIndex: function findPrevOptionIndex(id) {
			var matchedOptionIndex = _toConsumableArray(tt(this.container, FOCUSABLE_SELECTOR)).findIndex(function(link) {
				return link.id === id;
			});
			return matchedOptionIndex > -1 ? matchedOptionIndex - 1 : 0;
		},
		changeFocusedOptionIndex: function changeFocusedOptionIndex(index) {
			var links = tt(this.container, FOCUSABLE_SELECTOR);
			var order = index >= links.length ? links.length - 1 : index < 0 ? 0 : index;
			order > -1 && this.setFocusedOptionId(links[order].getAttribute("id"));
		},
		toggle: function toggle(event, target) {
			if (this.overlayVisible) this.hide();
			else this.show(event, target);
		},
		show: function show(event, target) {
			this.overlayVisible = true;
			this.target = target !== null && target !== void 0 ? target : event.currentTarget;
		},
		hide: function hide() {
			this.overlayVisible = false;
			this.target = null;
		},
		onEnter: function onEnter(el) {
			C$1(el, {
				position: "absolute",
				top: "0"
			});
			this.alignOverlay();
			this.bindOutsideClickListener();
			this.bindResizeListener();
			this.bindScrollListener();
			if (this.autoZIndex) x.set("menu", el, this.baseZIndex || this.$primevue.config.zIndex.menu);
			if (this.popup) this.focusMenuList();
			this.$emit("show");
		},
		onLeave: function onLeave() {
			this.unbindOutsideClickListener();
			this.unbindResizeListener();
			this.unbindScrollListener();
			this.$emit("hide");
		},
		onAfterLeave: function onAfterLeave(el) {
			if (this.autoZIndex) x.clear(el);
		},
		alignOverlay: function alignOverlay() {
			z(this.container, this.target);
			if (L$1(this.target) > L$1(this.container)) this.container.style.minWidth = L$1(this.target) + "px";
		},
		bindOutsideClickListener: function bindOutsideClickListener() {
			var _this = this;
			if (!this.outsideClickListener) {
				this.outsideClickListener = function(event) {
					var isOutsideContainer = _this.container && !_this.container.contains(event.target);
					var isOutsideTarget = !(_this.target && (_this.target === event.target || _this.target.contains(event.target)));
					if (_this.overlayVisible && isOutsideContainer && isOutsideTarget) _this.hide();
					else if (!_this.popup && isOutsideContainer && isOutsideTarget) _this.setFocusedOptionId(null);
				};
				(void 0).addEventListener("click", this.outsideClickListener, true);
			}
		},
		unbindOutsideClickListener: function unbindOutsideClickListener() {
			if (this.outsideClickListener) {
				(void 0).removeEventListener("click", this.outsideClickListener, true);
				this.outsideClickListener = null;
			}
		},
		bindScrollListener: function bindScrollListener() {
			var _this2 = this;
			if (!this.scrollHandler) this.scrollHandler = new ConnectedOverlayScrollHandler(this.target, function() {
				if (_this2.overlayVisible) _this2.hide();
			});
			this.scrollHandler.bindScrollListener();
		},
		unbindScrollListener: function unbindScrollListener() {
			if (this.scrollHandler) this.scrollHandler.unbindScrollListener();
		},
		bindResizeListener: function bindResizeListener() {
			var _this3 = this;
			if (!this.resizeListener) {
				this.resizeListener = function() {
					if (_this3.overlayVisible && !re$1()) _this3.hide();
				};
				(void 0).addEventListener("resize", this.resizeListener);
			}
		},
		unbindResizeListener: function unbindResizeListener() {
			if (this.resizeListener) {
				(void 0).removeEventListener("resize", this.resizeListener);
				this.resizeListener = null;
			}
		},
		visible: function visible(item) {
			return typeof (item === null || item === void 0 ? void 0 : item.visible) === "function" ? item.visible() : (item === null || item === void 0 ? void 0 : item.visible) !== false;
		},
		disabled: function disabled(item) {
			return typeof (item === null || item === void 0 ? void 0 : item.disabled) === "function" ? item.disabled() : item === null || item === void 0 ? void 0 : item.disabled;
		},
		label: function label(item) {
			return typeof (item === null || item === void 0 ? void 0 : item.label) === "function" ? item.label() : item === null || item === void 0 ? void 0 : item.label;
		},
		isItemToggleable: function isItemToggleable(item, depth) {
			return (item === null || item === void 0 ? void 0 : item.toggleable) !== void 0 ? item.toggleable : depth > 0;
		},
		isSubmenuExpanded: function isSubmenuExpanded(id) {
			var _this$currentExpanded;
			return !!((_this$currentExpanded = this.currentExpandedKeys) !== null && _this$currentExpanded !== void 0 && _this$currentExpanded[id]);
		},
		toggleSubmenu: function toggleSubmenu(id) {
			var next = _objectSpread(_objectSpread({}, this.currentExpandedKeys || {}), {}, _defineProperty({}, id, !this.isSubmenuExpanded(id)));
			if (this.expandedKeys !== void 0) this.$emit("update:expandedKeys", next);
			else this.d_expandedKeys = next;
		},
		onOverlayClick: function onOverlayClick(event) {
			OverlayEventBus.emit("overlay-click", {
				originalEvent: event,
				target: this.target
			});
		},
		containerRef: function containerRef(el) {
			this.container = el;
		},
		listRef: function listRef(el) {
			this.list = el;
		}
	},
	computed: {
		dataP: function dataP() {
			return c({ popup: this.popup });
		},
		currentExpandedKeys: function currentExpandedKeys() {
			return this.expandedKeys !== void 0 ? this.expandedKeys : this.d_expandedKeys;
		},
		/**
		* Maps each visible menuitem to { level, posinset, setsize }.
		*
		* ARIA rules for Menu:
		*   - role="none" labels (non-toggleable group headers) are invisible to AT
		*     so their children are siblings of the group's peers.
		*   - role="menu" scopes are created only by toggleable submenu <ul>'s —
		*     those start a new aria-level.
		*
		* Implementation:
		*   1. collectSiblings(items, depth): returns the flat list of aria-siblings
		*      that live in the SAME role=menu scope — non-toggleable groups are
		*      inlined so their children bubble up.
		*   2. assign(items, level, depth): for each sibling in the current scope,
		*      stores its level/posinset/setsize; for siblings that are themselves
		*      toggleable submenu headers, recurses into their items with level + 1.
		*/
		ariaMetaMap: function ariaMetaMap() {
			var _this4 = this;
			var map = /* @__PURE__ */ new Map();
			var _collectSiblings = function collectSiblings(items, depth) {
				var siblings = [];
				(items || []).forEach(function(item) {
					if (!_this4.visible(item) || item.separator) return;
					if (item.items && !_this4.isItemToggleable(item, depth)) siblings.push.apply(siblings, _toConsumableArray(_collectSiblings(item.items, depth + 1)));
					else siblings.push(item);
				});
				return siblings;
			};
			var _assign = function assign(items, level, depth) {
				var siblings = _collectSiblings(items, depth);
				siblings.forEach(function(item, idx) {
					map.set(item, {
						level,
						posinset: idx + 1,
						setsize: siblings.length
					});
					if (item.items) _assign(item.items, level + 1, depth + 1);
				});
			};
			_assign(this.model || [], 1, 0);
			return map;
		}
	},
	components: {
		MenuSub: script$1,
		Portal: script$4
	}
};
var _hoisted_1 = ["id", "data-p"];
var _hoisted_2 = [
	"id",
	"tabindex",
	"aria-activedescendant",
	"aria-label",
	"aria-labelledby"
];
function render(_ctx, _cache, $props, $setup, $data, $options) {
	var _component_MenuSub = resolveComponent("MenuSub");
	var _component_Portal = resolveComponent("Portal");
	return openBlock(), createBlock(_component_Portal, {
		appendTo: _ctx.appendTo,
		disabled: !_ctx.popup
	}, {
		"default": withCtx(function() {
			return [createVNode(Transition, mergeProps({
				name: "p-anchored-overlay",
				onEnter: $options.onEnter,
				onLeave: $options.onLeave,
				onAfterLeave: $options.onAfterLeave
			}, _ctx.ptm("transition")), {
				"default": withCtx(function() {
					return [(_ctx.popup ? $data.overlayVisible : true) ? (openBlock(), createElementBlock("div", mergeProps({
						key: 0,
						ref: $options.containerRef,
						id: _ctx.$id,
						"class": _ctx.cx("root"),
						onClick: _cache[3] || (_cache[3] = function() {
							return $options.onOverlayClick && $options.onOverlayClick.apply($options, arguments);
						}),
						"data-p": $options.dataP
					}, _ctx.ptmi("root")), [
						_ctx.$slots.start ? (openBlock(), createElementBlock("div", mergeProps({
							key: 0,
							"class": _ctx.cx("start")
						}, _ctx.ptm("start")), [renderSlot(_ctx.$slots, "start")], 16)) : createCommentVNode("", true),
						createElementVNode("ul", mergeProps({
							ref: $options.listRef,
							id: _ctx.$id + "_list",
							"class": _ctx.cx("list"),
							role: "menu",
							tabindex: _ctx.tabindex,
							"aria-activedescendant": $data.focused ? $data.focusedOptionId : void 0,
							"aria-label": _ctx.ariaLabel,
							"aria-labelledby": _ctx.ariaLabelledby,
							onFocus: _cache[0] || (_cache[0] = function() {
								return $options.onListFocus && $options.onListFocus.apply($options, arguments);
							}),
							onBlur: _cache[1] || (_cache[1] = function() {
								return $options.onListBlur && $options.onListBlur.apply($options, arguments);
							}),
							onKeydown: _cache[2] || (_cache[2] = function() {
								return $options.onListKeyDown && $options.onListKeyDown.apply($options, arguments);
							})
						}, _ctx.ptm("list")), [createVNode(_component_MenuSub, {
							items: _ctx.model,
							depth: 0,
							parentId: _ctx.$id,
							templates: _ctx.$slots,
							focusedOptionId: $data.focusedOptionId,
							unstyled: _ctx.unstyled,
							onItemClick: $options.itemClick,
							onItemMousemove: $options.itemMouseMove,
							pt: _ctx.pt
						}, null, 8, [
							"items",
							"parentId",
							"templates",
							"focusedOptionId",
							"unstyled",
							"onItemClick",
							"onItemMousemove",
							"pt"
						])], 16, _hoisted_2),
						_ctx.$slots.end ? (openBlock(), createElementBlock("div", mergeProps({
							key: 1,
							"class": _ctx.cx("end")
						}, _ctx.ptm("end")), [renderSlot(_ctx.$slots, "end")], 16)) : createCommentVNode("", true)
					], 16, _hoisted_1)) : createCommentVNode("", true)];
				}),
				_: 3
			}, 16, [
				"onEnter",
				"onLeave",
				"onAfterLeave"
			])];
		}),
		_: 3
	}, 8, ["appendTo", "disabled"]);
}
script.render = render;

export { script as default };
//# sourceMappingURL=menu-Mucn0oAO.mjs.map
