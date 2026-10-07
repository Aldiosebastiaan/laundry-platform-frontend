import { c } from './classnames-ryN3v2bf.mjs';
import { s as zt, e as et, a8 as q, B as BaseStyle } from '../virtual/entry.mjs';
import { s as script$1 } from './basecomponent-xyj7Pl8r.mjs';
import { R as Ripple } from './ripple-Bhb3fhdC.mjs';
import { _ } from './chevron-right-Ckgvln66.mjs';
import { h as h$1 } from './chevron-left-Cvt9p-si.mjs';
import { resolveDirective, openBlock, createElementBlock, mergeProps, withDirectives, createBlock, resolveDynamicComponent, createCommentVNode, createElementVNode, renderSlot } from 'vue';
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
import './core-aCRgtkIU.mjs';

//#region node_modules/.pnpm/primevue@5.0.2_vue@3.5.43/node_modules/primevue/tablist/style/index.mjs
var TabListStyle = BaseStyle.extend({
	name: "tablist",
	classes: {
		root: "p-tablist",
		content: "p-tablist-content",
		activeBar: "p-tablist-active-bar",
		prevButton: "p-tablist-prev-button p-tablist-nav-button",
		nextButton: "p-tablist-next-button p-tablist-nav-button"
	}
});
//#endregion
//#region node_modules/.pnpm/primevue@5.0.2_vue@3.5.43/node_modules/primevue/tablist/index.mjs
var script = {
	name: "TabList",
	"extends": {
		name: "BaseTabList",
		"extends": script$1,
		props: {},
		style: TabListStyle,
		provide: function provide() {
			return {
				$pcTabList: this,
				$parentInstance: this
			};
		}
	},
	inheritAttrs: false,
	inject: ["$pcTabs"],
	data: function data() {
		return {
			isPrevButtonEnabled: false,
			isNextButtonEnabled: true
		};
	},
	resizeObserver: void 0,
	inkBarObserver: void 0,
	mountTimer: null,
	watch: {
		showNavigators: function showNavigators(newValue) {
			newValue ? this.bindResizeObserver() : this.unbindResizeObserver();
		},
		activeValue: {
			flush: "post",
			handler: function handler() {
				this.updateInkBar();
				this.bindInkBarObserver();
				var content = this.$refs.content;
				var activeTab = content ? et(content, "[data-pc-name=\"tab\"][data-p-active=\"true\"]") : null;
				if (content && activeTab) this.$pcTabs.scrollToActiveTab(content, activeTab);
			}
		}
	},
	mounted: function mounted() {
		var _this = this;
		this.mountTimer = setTimeout(function() {
			_this.mountTimer = null;
			_this.updateInkBar();
			_this.bindInkBarObserver();
		}, 150);
		if (this.showNavigators) {
			this.updateButtonState();
			this.bindResizeObserver();
		}
	},
	updated: function updated() {
		this.showNavigators && this.updateButtonState();
	},
	beforeUnmount: function beforeUnmount() {
		if (this.mountTimer) {
			clearTimeout(this.mountTimer);
			this.mountTimer = null;
		}
		this.unbindResizeObserver();
		this.unbindInkBarObserver();
	},
	methods: {
		onScroll: function onScroll(event) {
			this.showNavigators && this.updateButtonState();
			event.preventDefault();
		},
		onPrevButtonClick: function onPrevButtonClick() {
			var content = this.$refs.content;
			var buttonWidths = this.getVisibleButtonWidths();
			var width = zt(content) - buttonWidths;
			var targetScrollLeft = Math.abs(content.scrollLeft) - width * .8;
			var scrollLeft = Math.max(targetScrollLeft, 0);
			content.scrollLeft = q(content) ? -1 * scrollLeft : scrollLeft;
		},
		onNextButtonClick: function onNextButtonClick() {
			var content = this.$refs.content;
			var buttonWidths = this.getVisibleButtonWidths();
			var width = zt(content) - buttonWidths;
			var targetScrollLeft = Math.abs(content.scrollLeft) + width * .8;
			var maxScrollLeft = content.scrollWidth - width;
			var scrollLeft = Math.min(targetScrollLeft, maxScrollLeft);
			content.scrollLeft = q(content) ? -1 * scrollLeft : scrollLeft;
		},
		bindResizeObserver: function bindResizeObserver() {
			var _this2 = this;
			this.resizeObserver = new ResizeObserver(function() {
				return _this2.updateButtonState();
			});
			this.resizeObserver.observe(this.$refs.list);
		},
		unbindResizeObserver: function unbindResizeObserver() {
			var _this$resizeObserver;
			(_this$resizeObserver = this.resizeObserver) === null || _this$resizeObserver === void 0 || _this$resizeObserver.unobserve(this.$refs.list);
			this.resizeObserver = void 0;
		},
		bindInkBarObserver: function bindInkBarObserver() {
			var _this3 = this;
			this.unbindInkBarObserver();
			var content = this.$refs.content;
			var activeTab = et(content, "[data-pc-name=\"tab\"][data-p-active=\"true\"]");
			if (activeTab) {
				this.inkBarObserver = new ResizeObserver(function() {
					return _this3.updateInkBar();
				});
				this.inkBarObserver.observe(activeTab);
			}
		},
		unbindInkBarObserver: function unbindInkBarObserver() {
			var _this$inkBarObserver;
			(_this$inkBarObserver = this.inkBarObserver) === null || _this$inkBarObserver === void 0 || _this$inkBarObserver.disconnect();
			this.inkBarObserver = void 0;
		},
		updateInkBar: function updateInkBar() {
			var _this$$refs = this.$refs, content = _this$$refs.content, inkbar = _this$$refs.inkbar;
			if (!inkbar) return;
			var activeTab = et(content, "[data-pc-name=\"tab\"][data-p-active=\"true\"]");
			if (!activeTab) return;
			inkbar.style.setProperty("--px-active-bar-width", activeTab.offsetWidth + "px");
			inkbar.style.setProperty("--px-active-bar-height", activeTab.offsetHeight + "px");
			inkbar.style.setProperty("--px-active-bar-left", activeTab.offsetLeft + "px");
			inkbar.style.setProperty("--px-active-bar-top", activeTab.offsetTop + "px");
		},
		updateButtonState: function updateButtonState() {
			var _this$$refs2 = this.$refs, list = _this$$refs2.list, content = _this$$refs2.content;
			var scrollWidth = content.scrollWidth, offsetWidth = content.offsetWidth;
			var scrollLeft = Math.abs(content.scrollLeft);
			var width = zt(content);
			this.isPrevButtonEnabled = scrollLeft !== 0;
			this.isNextButtonEnabled = list.offsetWidth >= offsetWidth && parseInt(scrollLeft) !== scrollWidth - width;
		},
		getVisibleButtonWidths: function getVisibleButtonWidths() {
			var _this$$refs3 = this.$refs, prevButton = _this$$refs3.prevButton, nextButton = _this$$refs3.nextButton;
			var width = 0;
			if (this.showNavigators) width = ((prevButton === null || prevButton === void 0 ? void 0 : prevButton.offsetWidth) || 0) + ((nextButton === null || nextButton === void 0 ? void 0 : nextButton.offsetWidth) || 0);
			return width;
		}
	},
	computed: {
		templates: function templates() {
			return this.$pcTabs.$slots;
		},
		activeValue: function activeValue() {
			return this.$pcTabs.d_value;
		},
		showNavigators: function showNavigators() {
			return this.$pcTabs.showNavigators;
		},
		prevButtonAriaLabel: function prevButtonAriaLabel() {
			return this.$primevue.config.locale.aria ? this.$primevue.config.locale.aria.previous : void 0;
		},
		nextButtonAriaLabel: function nextButtonAriaLabel() {
			return this.$primevue.config.locale.aria ? this.$primevue.config.locale.aria.next : void 0;
		},
		dataP: function dataP() {
			return c({ scrollable: this.$pcTabs.scrollable });
		}
	},
	components: {
		ChevronLeft: h$1,
		ChevronRight: _
	},
	directives: { ripple: Ripple }
};
var _hoisted_1 = ["data-p"];
var _hoisted_2 = ["aria-label", "tabindex"];
var _hoisted_3 = ["aria-label", "tabindex"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
	var _directive_ripple = resolveDirective("ripple");
	return openBlock(), createElementBlock("div", mergeProps({
		ref: "list",
		"class": _ctx.cx("root"),
		"data-p": $options.dataP
	}, _ctx.ptmi("root")), [
		$options.showNavigators && $data.isPrevButtonEnabled ? withDirectives((openBlock(), createElementBlock("button", mergeProps({
			key: 0,
			ref: "prevButton",
			type: "button",
			"class": _ctx.cx("prevButton"),
			"aria-label": $options.prevButtonAriaLabel,
			tabindex: $options.$pcTabs.tabindex,
			onClick: _cache[0] || (_cache[0] = function() {
				return $options.onPrevButtonClick && $options.onPrevButtonClick.apply($options, arguments);
			})
		}, _ctx.ptm("prevButton"), { "data-pc-group-section": "navigator" }), [(openBlock(), createBlock(resolveDynamicComponent($options.templates.previcon || "ChevronLeft"), mergeProps({ "aria-hidden": "true" }, _ctx.ptm("prevIcon")), null, 16))], 16, _hoisted_2)), [[_directive_ripple]]) : createCommentVNode("", true),
		createElementVNode("div", mergeProps({
			ref: "content",
			"class": _ctx.cx("content"),
			role: "tablist",
			"aria-orientation": "horizontal",
			onScroll: _cache[1] || (_cache[1] = function() {
				return $options.onScroll && $options.onScroll.apply($options, arguments);
			})
		}, _ctx.ptm("content")), [renderSlot(_ctx.$slots, "default"), createElementVNode("span", mergeProps({
			ref: "inkbar",
			"class": _ctx.cx("activeBar"),
			role: "presentation",
			"aria-hidden": "true"
		}, _ctx.ptm("activeBar")), null, 16)], 16),
		$options.showNavigators && $data.isNextButtonEnabled ? withDirectives((openBlock(), createElementBlock("button", mergeProps({
			key: 1,
			ref: "nextButton",
			type: "button",
			"class": _ctx.cx("nextButton"),
			"aria-label": $options.nextButtonAriaLabel,
			tabindex: $options.$pcTabs.tabindex,
			onClick: _cache[2] || (_cache[2] = function() {
				return $options.onNextButtonClick && $options.onNextButtonClick.apply($options, arguments);
			})
		}, _ctx.ptm("nextButton"), { "data-pc-group-section": "navigator" }), [(openBlock(), createBlock(resolveDynamicComponent($options.templates.nexticon || "ChevronRight"), mergeProps({ "aria-hidden": "true" }, _ctx.ptm("nextIcon")), null, 16))], 16, _hoisted_3)), [[_directive_ripple]]) : createCommentVNode("", true)
	], 16, _hoisted_1);
}
script.render = render;

export { script as default };
//# sourceMappingURL=tablist-DmD_Gp7j.mjs.map
