import { t as tt, e as et, B as BaseStyle } from '../virtual/entry.mjs';
import { s as script$1 } from './basecomponent-xyj7Pl8r.mjs';
import { mergeProps, openBlock, createElementBlock, createElementVNode, Fragment, renderList, toDisplayString, createBlock, resolveDynamicComponent, createCommentVNode } from 'vue';
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
//#region node_modules/.pnpm/primevue@5.0.2_vue@3.5.43/node_modules/primevue/steps/style/index.mjs
var StepsStyle = BaseStyle.extend({
	name: "steps",
	style: "\n    .p-steps {\n        position: relative;\n    }\n\n    .p-steps-list {\n        padding: 0;\n        margin: 0;\n        list-style-type: none;\n        display: flex;\n    }\n\n    .p-steps-item {\n        position: relative;\n        display: flex;\n        justify-content: center;\n        flex: 1 1 auto;\n    }\n\n    .p-steps-item.p-disabled,\n    .p-steps-item.p-disabled * {\n        opacity: 1;\n        pointer-events: auto;\n        user-select: auto;\n        cursor: auto;\n    }\n\n    .p-steps-item:before {\n        content: ' ';\n        border-top: 2px solid dt('steps.separator.background');\n        width: 100%;\n        top: 50%;\n        left: 0;\n        display: block;\n        position: absolute;\n        margin-top: calc(-1rem + 1px);\n    }\n\n    .p-steps-item:first-child::before {\n        width: calc(50% + 1rem);\n        transform: translateX(100%);\n    }\n\n    .p-steps-item:last-child::before {\n        width: 50%;\n    }\n\n    .p-steps-item-link {\n        display: inline-flex;\n        flex-direction: column;\n        align-items: center;\n        overflow: hidden;\n        text-decoration: none;\n        transition:\n            outline-color dt('steps.transition.duration'),\n            box-shadow dt('steps.transition.duration');\n        border-radius: dt('steps.item.link.border.radius');\n        outline-color: transparent;\n        gap: dt('steps.item.link.gap');\n    }\n\n    .p-steps-item-link:not(.p-disabled):focus-visible {\n        box-shadow: dt('steps.item.link.focus.ring.shadow');\n        outline: dt('steps.item.link.focus.ring.width') dt('steps.item.link.focus.ring.style') dt('steps.item.link.focus.ring.color');\n        outline-offset: dt('steps.item.link.focus.ring.offset');\n    }\n\n    .p-steps-item-label {\n        white-space: nowrap;\n        overflow: hidden;\n        text-overflow: ellipsis;\n        max-width: 100%;\n        color: dt('steps.item.label.color');\n        display: block;\n        font-weight: dt('steps.item.label.font.weight');\n    }\n\n    .p-steps-item-number {\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        color: dt('steps.item.number.color');\n        border: 2px solid dt('steps.item.number.border.color');\n        background: dt('steps.item.number.background');\n        min-width: dt('steps.item.number.size');\n        height: dt('steps.item.number.size');\n        line-height: dt('steps.item.number.size');\n        font-size: dt('steps.item.number.font.size');\n        z-index: 1;\n        border-radius: dt('steps.item.number.border.radius');\n        position: relative;\n        font-weight: dt('steps.item.number.font.weight');\n    }\n\n    .p-steps-item-number::after {\n        content: ' ';\n        position: absolute;\n        width: 100%;\n        height: 100%;\n        border-radius: dt('steps.item.number.border.radius');\n        box-shadow: dt('steps.item.number.shadow');\n    }\n\n    .p-steps:not(.p-readonly) .p-steps-item {\n        cursor: pointer;\n    }\n\n    .p-steps-item-active .p-steps-item-number {\n        background: dt('steps.item.number.active.background');\n        border-color: dt('steps.item.number.active.border.color');\n        color: dt('steps.item.number.active.color');\n    }\n\n    .p-steps-item-active .p-steps-item-label {\n        color: dt('steps.item.label.active.color');\n    }\n",
	classes: {
		root: function root(_ref) {
			return ["p-steps p-component", { "p-readonly": _ref.props.readonly }];
		},
		list: "p-steps-list",
		item: function item(_ref2) {
			var instance = _ref2.instance, _item = _ref2.item, index = _ref2.index;
			return ["p-steps-item", {
				"p-steps-item-active": instance.isActive(index),
				"p-disabled": instance.isItemDisabled(_item, index)
			}];
		},
		itemLink: "p-steps-item-link",
		itemNumber: "p-steps-item-number",
		itemLabel: "p-steps-item-label"
	}
});
//#endregion
//#region node_modules/.pnpm/primevue@5.0.2_vue@3.5.43/node_modules/primevue/steps/index.mjs
var script = {
	name: "Steps",
	"extends": {
		name: "BaseSteps",
		"extends": script$1,
		props: {
			id: { type: String },
			model: {
				type: Array,
				"default": null
			},
			readonly: {
				type: Boolean,
				"default": true
			},
			activeStep: {
				type: Number,
				"default": 0
			}
		},
		style: StepsStyle,
		provide: function provide() {
			return {
				$pcSteps: this,
				$parentInstance: this
			};
		}
	},
	inheritAttrs: false,
	emits: ["update:activeStep", "step-change"],
	data: function data() {
		return { d_activeStep: this.activeStep };
	},
	watch: { activeStep: function activeStep(newValue) {
		this.d_activeStep = newValue;
	} },
	mounted: function mounted() {
		var firstItem = this.findFirstItem();
		firstItem && (firstItem.tabIndex = "0");
	},
	methods: {
		getPTOptions: function getPTOptions(key, item, index) {
			return this.ptm(key, { context: {
				item,
				index,
				active: this.isActive(index),
				disabled: this.isItemDisabled(item, index)
			} });
		},
		onItemClick: function onItemClick(event, item, index) {
			if (this.disabled(item) || this.readonly) {
				event.preventDefault();
				return;
			}
			if (item.command) item.command({
				originalEvent: event,
				item
			});
			if (index !== this.d_activeStep) {
				this.d_activeStep = index;
				this.$emit("update:activeStep", this.d_activeStep);
			}
			this.$emit("step-change", {
				originalEvent: event,
				index
			});
		},
		onItemKeydown: function onItemKeydown(event, item) {
			switch (event.code) {
				case "ArrowRight":
					this.navigateToNextItem(event.target);
					event.preventDefault();
					break;
				case "ArrowLeft":
					this.navigateToPrevItem(event.target);
					event.preventDefault();
					break;
				case "Home":
					this.navigateToFirstItem(event.target);
					event.preventDefault();
					break;
				case "End":
					this.navigateToLastItem(event.target);
					event.preventDefault();
					break;
				case "Tab": break;
				case "Enter":
				case "NumpadEnter":
				case "Space":
					this.onItemClick(event, item);
					event.preventDefault();
			}
		},
		navigateToNextItem: function navigateToNextItem(target) {
			var nextItem = this.findNextItem(target);
			nextItem && this.setFocusToMenuitem(target, nextItem);
		},
		navigateToPrevItem: function navigateToPrevItem(target) {
			var prevItem = this.findPrevItem(target);
			prevItem && this.setFocusToMenuitem(target, prevItem);
		},
		navigateToFirstItem: function navigateToFirstItem(target) {
			var firstItem = this.findFirstItem(target);
			firstItem && this.setFocusToMenuitem(target, firstItem);
		},
		navigateToLastItem: function navigateToLastItem(target) {
			var lastItem = this.findLastItem(target);
			lastItem && this.setFocusToMenuitem(target, lastItem);
		},
		findNextItem: function findNextItem(item) {
			var nextItem = item.parentElement.nextElementSibling;
			return nextItem ? nextItem.children[0] : null;
		},
		findPrevItem: function findPrevItem(item) {
			var prevItem = item.parentElement.previousElementSibling;
			return prevItem ? prevItem.children[0] : null;
		},
		findFirstItem: function findFirstItem() {
			var firstSibling = et(this.$refs.list, "[data-pc-section=\"item\"]");
			return firstSibling ? firstSibling.children[0] : null;
		},
		findLastItem: function findLastItem() {
			var siblings = tt(this.$refs.list, "[data-pc-section=\"item\"]");
			return siblings ? siblings[siblings.length - 1].children[0] : null;
		},
		setFocusToMenuitem: function setFocusToMenuitem(target, focusableItem) {
			target.tabIndex = "-1";
			focusableItem.tabIndex = "0";
			focusableItem.focus();
		},
		isActive: function isActive(index) {
			return index === this.d_activeStep;
		},
		isItemDisabled: function isItemDisabled(item, index) {
			return this.disabled(item) || this.readonly && !this.isActive(index);
		},
		visible: function visible(item) {
			return typeof item.visible === "function" ? item.visible() : item.visible !== false;
		},
		disabled: function disabled(item) {
			return typeof item.disabled === "function" ? item.disabled() : item.disabled;
		},
		label: function label(item) {
			return typeof item.label === "function" ? item.label() : item.label;
		},
		getMenuItemProps: function getMenuItemProps(item, index) {
			var _this = this;
			return {
				action: mergeProps({
					"class": this.cx("itemLink"),
					onClick: function onClick($event) {
						return _this.onItemClick($event, item);
					},
					onKeyDown: function onKeyDown($event) {
						return _this.onItemKeydown($event, item);
					}
				}, this.getPTOptions("itemLink", item, index)),
				step: mergeProps({ "class": this.cx("itemNumber") }, this.getPTOptions("itemNumber", item, index)),
				label: mergeProps({ "class": this.cx("itemLabel") }, this.getPTOptions("itemLabel", item, index))
			};
		}
	}
};
var _hoisted_1 = ["id"];
var _hoisted_2 = [
	"aria-current",
	"onClick",
	"onKeydown",
	"data-p-active",
	"data-p-disabled"
];
function render(_ctx, _cache, $props, $setup, $data, $options) {
	return openBlock(), createElementBlock("nav", mergeProps({
		id: _ctx.id,
		"class": _ctx.cx("root")
	}, _ctx.ptmi("root")), [createElementVNode("ol", mergeProps({
		ref: "list",
		"class": _ctx.cx("list")
	}, _ctx.ptm("list")), [(openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.model, function(item, index) {
		return openBlock(), createElementBlock(Fragment, { key: $options.label(item) + "_" + index.toString() }, [$options.visible(item) ? (openBlock(), createElementBlock("li", mergeProps({
			key: 0,
			"class": [_ctx.cx("item", {
				item,
				index
			}), item["class"]],
			style: item.style,
			"aria-current": $options.isActive(index) ? "step" : void 0,
			onClick: function onClick($event) {
				return $options.onItemClick($event, item, index);
			},
			onKeydown: function onKeydown($event) {
				return $options.onItemKeydown($event, item, index);
			}
		}, { ref_for: true }, $options.getPTOptions("item", item, index), {
			"data-p-active": $options.isActive(index),
			"data-p-disabled": $options.isItemDisabled(item, index)
		}), [!_ctx.$slots.item ? (openBlock(), createElementBlock("span", mergeProps({
			key: 0,
			"class": _ctx.cx("itemLink")
		}, { ref_for: true }, $options.getPTOptions("itemLink", item, index)), [createElementVNode("span", mergeProps({ "class": _ctx.cx("itemNumber") }, { ref_for: true }, $options.getPTOptions("itemNumber", item, index)), toDisplayString(index + 1), 17), createElementVNode("span", mergeProps({ "class": _ctx.cx("itemLabel") }, { ref_for: true }, $options.getPTOptions("itemLabel", item, index)), toDisplayString($options.label(item)), 17)], 16)) : (openBlock(), createBlock(resolveDynamicComponent(_ctx.$slots.item), {
			key: 1,
			item,
			index,
			active: index === $data.d_activeStep,
			label: $options.label(item),
			props: $options.getMenuItemProps(item, index)
		}, null, 8, [
			"item",
			"index",
			"active",
			"label",
			"props"
		]))], 16, _hoisted_2)) : createCommentVNode("", true)], 64);
	}), 128))], 16)], 16, _hoisted_1);
}
script.render = render;

export { script as default };
//# sourceMappingURL=steps-Dt6IjQgA.mjs.map
