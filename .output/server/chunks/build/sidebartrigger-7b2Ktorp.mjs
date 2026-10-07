import { B as BaseStyle } from '../virtual/entry.mjs';
import { s as script$2 } from './basecomponent-xyj7Pl8r.mjs';
import { n as script$3 } from './button-C40_yBwc.mjs';
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
import './rolldown-runtime-D7D4PA-g.mjs';
import './classnames-ryN3v2bf.mjs';
import './ripple-Bhb3fhdC.mjs';
import './basedirective-BlCM3Le7.mjs';
import './uuid-Dh44iNNj.mjs';
import './spinner-DV-Ha3dz.mjs';
import './core-aCRgtkIU.mjs';
import './badge-DMTHnEO9.mjs';

//#region node_modules/.pnpm/primevue@5.0.2_vue@3.5.43/node_modules/primevue/sidebartrigger/style/index.mjs
var SidebarTriggerStyle = BaseStyle.extend({
	name: "sidebartrigger",
	classes: { root: "p-sidebar-trigger" }
});
//#endregion
//#region node_modules/.pnpm/primevue@5.0.2_vue@3.5.43/node_modules/primevue/sidebartrigger/index.mjs
var script$1 = {
	name: "BaseSidebarTrigger",
	"extends": script$2,
	props: {
		target: {
			type: String,
			"default": void 0
		},
		as: {
			type: [
				String,
				Object,
				Function
			],
			"default": function _default() {
				return script$3;
			}
		},
		asChild: {
			type: Boolean,
			"default": false
		}
	},
	style: SidebarTriggerStyle,
	provide: function provide() {
		return {
			$pcSidebarTrigger: this,
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
var script = {
	name: "SidebarTrigger",
	"extends": script$1,
	inheritAttrs: false,
	inject: {
		$pcSidebar: { "default": null },
		$pcSidebarLayout: { "default": null }
	},
	methods: { onClick: function onClick(event) {
		var _this$$pcSidebarLayou, _this$$pcSidebarLayou2;
		(_this$$pcSidebarLayou = this.$pcSidebarLayout) === null || _this$$pcSidebarLayou === void 0 || (_this$$pcSidebarLayou2 = _this$$pcSidebarLayou.notifyTriggerClick) === null || _this$$pcSidebarLayou2 === void 0 || _this$$pcSidebarLayou2.call(_this$$pcSidebarLayou, event);
		if (this.$pcSidebar) {
			this.$pcSidebar.toggle(event);
			return;
		}
		if (this.$pcSidebarLayout) this.$pcSidebarLayout.toggleSidebar(this.target, event);
	} },
	computed: {
		controlled: function controlled() {
			var _this$$pcSidebarLayou3, _this$$pcSidebarLayou4, _this$target;
			if (this.$pcSidebar) return {
				id: this.$pcSidebar.id,
				open: this.$pcSidebar.d_open
			};
			var registry = (_this$$pcSidebarLayou3 = this.$pcSidebarLayout) === null || _this$$pcSidebarLayou3 === void 0 || (_this$$pcSidebarLayou4 = _this$$pcSidebarLayou3.getSidebarEntries) === null || _this$$pcSidebarLayou4 === void 0 ? void 0 : _this$$pcSidebarLayou4.call(_this$$pcSidebarLayou3);
			if (!registry) return null;
			var id = (_this$target = this.target) !== null && _this$target !== void 0 ? _this$target : registry.keys().next().value;
			var entry = registry.get(id);
			return entry ? {
				id,
				open: entry.open
			} : null;
		},
		a11yAttrs: function a11yAttrs() {
			var _this$$pcSidebar$getS, _this$$pcSidebar, _this$controlled;
			return _objectSpread(_objectSpread({}, (_this$$pcSidebar$getS = (_this$$pcSidebar = this.$pcSidebar) === null || _this$$pcSidebar === void 0 ? void 0 : _this$$pcSidebar.getSectionAttrs("trigger")) !== null && _this$$pcSidebar$getS !== void 0 ? _this$$pcSidebar$getS : {}), {}, {
				"data-pc-name": "sidebartrigger",
				"data-pc-section": "root",
				"aria-expanded": this.controlled ? this.controlled.open ? "true" : "false" : void 0,
				"aria-controls": (_this$controlled = this.controlled) === null || _this$controlled === void 0 ? void 0 : _this$controlled.id
			});
		},
		attrs: function attrs() {
			return mergeProps(this.$attrs, this.a11yAttrs, this.ptmi("root"));
		}
	}
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
	return !_ctx.asChild ? (openBlock(), createBlock(resolveDynamicComponent(_ctx.as), mergeProps({
		key: 0,
		"class": _ctx.cx("root"),
		type: _ctx.as === "BUTTON" || _ctx.as === "button" ? "button" : void 0
	}, $options.attrs, { onClick: $options.onClick }), {
		"default": withCtx(function() {
			return [renderSlot(_ctx.$slots, "default")];
		}),
		_: 3
	}, 16, [
		"class",
		"type",
		"onClick"
	])) : renderSlot(_ctx.$slots, "default", {
		a11yAttrs: $options.a11yAttrs,
		"class": normalizeClass(_ctx.cx("root")),
		onClick: $options.onClick
	}, void 0, void 0, 1);
}
script.render = render;

export { script as default };
//# sourceMappingURL=sidebartrigger-7b2Ktorp.mjs.map
