import { B as BaseStyle } from '../virtual/entry.mjs';
import { s as script$1 } from './basecomponent-xyj7Pl8r.mjs';
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

//#region node_modules/.pnpm/primevue@5.0.2_vue@3.5.43/node_modules/primevue/sidebarlayout/style/index.mjs
var SidebarLayoutStyle = BaseStyle.extend({
	name: "sidebarlayout",
	classes: { root: "p-sidebar-layout" }
});
//#endregion
//#region node_modules/.pnpm/primevue@5.0.2_vue@3.5.43/node_modules/primevue/sidebarlayout/index.mjs
var script = {
	name: "SidebarLayout",
	"extends": {
		name: "BaseSidebarLayout",
		"extends": script$1,
		props: {
			as: {
				type: [String, Object],
				"default": "DIV"
			},
			asChild: {
				type: Boolean,
				"default": false
			}
		},
		style: SidebarLayoutStyle,
		provide: function provide() {
			return {
				$pcSidebarLayout: this,
				$parentInstance: this
			};
		}
	},
	inheritAttrs: false,
	triggerEvent: null,
	data: function data() {
		return { registryMap: /* @__PURE__ */ new Map() };
	},
	methods: {
		registerSidebar: function registerSidebar(id, entry) {
			this.registryMap.set(id, entry);
		},
		unregisterSidebar: function unregisterSidebar(id) {
			this.registryMap["delete"](id);
		},
		getSidebarEntry: function getSidebarEntry(id) {
			return this.registryMap.get(id);
		},
		getSidebarEntries: function getSidebarEntries() {
			return this.registryMap;
		},
		toggleSidebar: function toggleSidebar(target, event) {
			if (target) {
				var _this$registryMap$get;
				(_this$registryMap$get = this.registryMap.get(target)) === null || _this$registryMap$get === void 0 || _this$registryMap$get.toggle(event);
				return;
			}
			if (this.registryMap.size >= 1) {
				var _this$registryMap$val;
				(_this$registryMap$val = this.registryMap.values().next().value) === null || _this$registryMap$val === void 0 || _this$registryMap$val.toggle(event);
			}
		},
		collapseSidebar: function collapseSidebar(target, event) {
			if (typeof target === "string") {
				var entry = this.registryMap.get(target);
				if (entry !== null && entry !== void 0 && entry.open) entry.toggle(event);
				return;
			}
			var originalEvent = event !== null && event !== void 0 ? event : target;
			this.registryMap.forEach(function(entry) {
				if (entry.open && entry.dismissable) entry.toggle(originalEvent);
			});
		},
		notifyTriggerClick: function notifyTriggerClick(event) {
			this.triggerEvent = event;
		},
		onMainClick: function onMainClick(event) {
			if (event && this.triggerEvent === event) {
				this.triggerEvent = null;
				return;
			}
			this.registryMap.forEach(function(entry) {
				if (entry.open && entry.overlay && entry.hideOnOutsideClick) entry.toggle(event);
			});
		},
		isAnySidebarOpen: function isAnySidebarOpen() {
			var open = false;
			this.registryMap.forEach(function(entry) {
				if (entry.open) open = true;
			});
			return open;
		}
	},
	computed: {
		a11yAttrs: function a11yAttrs() {
			return {
				"data-pc-name": "sidebarlayout",
				"data-pc-section": "root"
			};
		},
		attrs: function attrs() {
			return mergeProps(this.a11yAttrs, this.ptmi("root"));
		}
	}
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
	return !_ctx.asChild ? (openBlock(), createBlock(resolveDynamicComponent(_ctx.as), mergeProps({
		key: 0,
		"class": _ctx.cx("root")
	}, $options.attrs), {
		"default": withCtx(function() {
			return [renderSlot(_ctx.$slots, "default")];
		}),
		_: 3
	}, 16, ["class"])) : renderSlot(_ctx.$slots, "default", {
		a11yAttrs: $options.a11yAttrs,
		"class": normalizeClass(_ctx.cx("root"))
	}, void 0, void 0, 1);
}
script.render = render;

export { script as default };
//# sourceMappingURL=sidebarlayout-DKNbRy5J.mjs.map
