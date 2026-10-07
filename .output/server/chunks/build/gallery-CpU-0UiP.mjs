import { a5 as p, B as BaseStyle } from '../virtual/entry.mjs';
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

//#endregion
//#region node_modules/.pnpm/primevue@5.0.2_vue@3.5.43/node_modules/primevue/gallery/style/index.mjs
var GalleryStyle = BaseStyle.extend({
	name: "gallery",
	style: "\n    .p-gallery {\n        width: 100%;\n        height: 100%;\n        position: relative;\n        overflow: hidden;\n        display: flex;\n        flex-direction: column;\n    }\n\n    .p-gallery-backdrop {\n        position: absolute;\n        inset: 0;\n        z-index: 0;\n        background-color: dt('gallery.backdrop.background');\n    }\n\n    .p-gallery-header {\n        position: relative;\n        z-index: 2;\n        display: flex;\n        align-items: center;\n        padding: dt('gallery.header.padding');\n        background-color: dt('gallery.header.background');\n    }\n\n    .p-gallery-footer {\n        position: relative;\n        z-index: 2;\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        padding: dt('gallery.footer.padding');\n        background-color: dt('gallery.footer.background');\n        border-top: 1px solid dt('gallery.footer.border.color');\n        transition: transform 0.2s ease, opacity 0.2s ease;\n    }\n\n    .p-gallery-content {\n        position: relative;\n        z-index: 1;\n        flex: 1;\n        min-height: 0;\n    }\n\n    .p-gallery-item {\n        --px-position-x: 0px;\n        --px-position-y: 0px;\n        --px-scale: 1;\n        --px-rotation: 0deg;\n        --px-flip-x: 1;\n        --px-flip-y: 1;\n        position: absolute;\n        top: 50%;\n        left: 50%;\n        transform-origin: center;\n        user-select: none;\n        touch-action: none;\n        align-items: center;\n        justify-content: center;\n        transform: translate(calc(-50% + var(--px-position-x)), calc(-50% + var(--px-position-y))) scale(var(--px-scale)) rotate(calc(var(--px-rotation))) scaleX(var(--px-flip-x)) scaleY(var(--px-flip-y));\n        opacity: 0;\n        pointer-events: none;\n        visibility: hidden;\n        z-index: 0;\n        display: none;\n        cursor: pointer;\n        transition: transform dt('gallery.item.transition.duration') ease, opacity dt('gallery.item.transition.duration') ease;\n    }\n\n    .p-gallery-item[data-active] {\n        opacity: 1;\n        pointer-events: auto;\n        visibility: visible;\n        z-index: 1;\n        display: flex;\n        cursor: zoom-in;\n        will-change: transform;\n    }\n\n    .p-gallery-item[data-rotating] {\n        transition: none !important;\n    }\n\n    .p-gallery-action {\n        cursor: pointer;\n        background: transparent;\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        width: dt('gallery.action.size');\n        height: dt('gallery.action.size');\n        border-radius: dt('gallery.action.border.radius');\n        color: dt('gallery.action.color');\n        transition: background-color dt('gallery.action.transition.duration') ease, color dt('gallery.action.transition.duration') ease;\n    }\n\n    .p-gallery-action svg,\n    .p-gallery-action i {\n        font-size: dt('gallery.action.icon.size');\n        width: dt('gallery.action.icon.size');\n        height: dt('gallery.action.icon.size');\n    }\n\n    .p-gallery-action:hover {\n        background: dt('gallery.action.hover.background');\n        color: dt('gallery.action.hover.color');\n    }\n\n    .p-gallery-action:disabled,\n    .p-gallery-action[disabled] {\n        opacity: dt('gallery.action.disabled.opacity');\n        cursor: default;\n        pointer-events: none;\n    }\n\n    .p-gallery-next,\n    .p-gallery-prev {\n        position: absolute;\n        top: 50%;\n        transform: translateY(-50%);\n        z-index: 3;\n        cursor: pointer;\n        background: dt('gallery.navigation.background');\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        width: dt('gallery.navigation.size');\n        height: dt('gallery.navigation.size');\n        border-radius: dt('gallery.navigation.border.radius');\n        color: dt('gallery.navigation.color');\n        transition: background-color dt('gallery.navigation.transition.duration') ease, color dt('gallery.navigation.transition.duration') ease;\n    }\n\n    .p-gallery-next:hover,\n    .p-gallery-prev:hover {\n        background: dt('gallery.navigation.hover.background');\n        color: dt('gallery.navigation.hover.color');\n    }\n\n    .p-gallery-next {\n        right: dt('gallery.navigation.offset');\n    }\n\n    .p-gallery-prev {\n        left: dt('gallery.navigation.offset');\n    }\n\n    .p-gallery-next svg,\n    .p-gallery-next i,\n    .p-gallery-prev svg,\n    .p-gallery-prev i {\n        font-size: dt('gallery.navigation.icon.size');\n        width: dt('gallery.navigation.icon.size');\n        height: dt('gallery.navigation.icon.size');\n    }\n\n    .p-gallery-thumbnail {\n        width: 100%;\n        height: 100%;\n        position: relative;\n        z-index: 2;\n    }\n\n    .p-gallery-thumbnail-content {\n        padding: dt('gallery.thumbnail.content.padding');\n    }\n\n    .p-gallery-thumbnail-item {\n        aspect-ratio: 1 / 1;\n        cursor: pointer;\n        overflow: hidden;\n        display: flex;\n        background-color: dt('gallery.thumbnail.background');\n        padding: dt('gallery.thumbnail.padding');\n        height: dt('gallery.thumbnail.size');\n        width: dt('gallery.thumbnail.size');\n        border-radius: dt('gallery.thumbnail.border.radius');\n        transition: scale dt('gallery.thumbnail.transition.duration') ease;\n    }\n\n    .p-gallery-thumbnail-item img {\n        border-radius: dt('gallery.thumbnail.border.radius');\n    }\n\n    .p-gallery-thumbnail-item:hover {\n        outline: dt('gallery.thumbnail.border.width') solid dt('gallery.thumbnail.hover.border.color');\n    }\n\n    .p-gallery-thumbnail-item[data-active] {\n        outline: dt('gallery.thumbnail.border.width') solid dt('gallery.thumbnail.active.border.color');\n        scale: dt('gallery.thumbnail.active.scale');\n    }\n\n    .p-gallery[data-zoomed] .p-gallery-footer {\n        transform: translateY(100%);\n        opacity: 0;\n        pointer-events: none;\n    }\n\n    .p-gallery[data-zoomed] .p-gallery-next,\n    .p-gallery[data-zoomed] .p-gallery-prev {\n        opacity: 0;\n        pointer-events: none;\n    }\n\n    .p-gallery[data-fullscreen]:not(:fullscreen) {\n        position: fixed;\n        inset: 0;\n        width: 100dvw;\n        height: 100dvh;\n        z-index: 9999;\n    }\n\n    .p-gallery-item[data-rotating] {\n        transition:\n            transform 0.3s ease,\n            width 0.3s ease,\n            height 0.3s ease,\n            opacity 0.3s ease !important;\n    }\n\n    .p-gallery-item[data-rotating] > * {\n        transition:\n            width 0.3s ease,\n            height 0.3s ease;\n    }\n",
	classes: { root: "p-gallery p-component" }
});
//#endregion
//#region node_modules/.pnpm/primevue@5.0.2_vue@3.5.43/node_modules/primevue/gallery/index.mjs
var script = {
	name: "Gallery",
	"extends": {
		name: "BaseGallery",
		"extends": script$1,
		props: {
			activeIndex: {
				type: Number,
				"default": 0
			},
			as: {
				type: [String, Object],
				"default": "DIV"
			},
			asChild: {
				type: Boolean,
				"default": false
			},
			fullscreen: {
				type: Boolean,
				"default": void 0
			},
			closeOnEscape: {
				type: Boolean,
				"default": true
			}
		},
		style: GalleryStyle,
		provide: function provide() {
			return {
				$pcGallery: this,
				$parentInstance: this
			};
		}
	},
	inheritAttrs: false,
	emits: [
		"update:activeIndex",
		"update:fullscreen",
		"zoom-change",
		"rotate-change",
		"flip-change"
	],
	fullscreenResizeTimeout: null,
	rootEl: null,
	prevReported: null,
	data: function data() {
		var _this$activeIndex;
		return {
			d_activeIndex: (_this$activeIndex = this.activeIndex) !== null && _this$activeIndex !== void 0 ? _this$activeIndex : 0,
			isFullscreenInternal: false,
			pendingAction: null,
			activeItemTransform: {
				zoomed: false,
				rotated: false,
				flipped: false
			},
			contentEl: null,
			registeredItemCount: 0
		};
	},
	watch: {
		activeIndex: function activeIndex(newValue) {
			if (newValue == null) return;
			this.d_activeIndex = newValue;
		},
		fullscreen: function fullscreen(newValue) {
			if (newValue == null) return;
			this.setFullScreen(newValue);
		}
	},
	mounted: function mounted() {
		var _this = this;
		if (this.fullscreen) this.$nextTick(function() {
			return _this.setFullScreen(true);
		});
	},
	beforeUnmount: function beforeUnmount() {
		this.registeredItemCount = 0;
		if (this.fullscreenResizeTimeout) {
			clearTimeout(this.fullscreenResizeTimeout);
			this.fullscreenResizeTimeout = null;
		}
	},
	methods: {
		setRef: function setRef(el) {
			var _el$$el;
			var resolved = p(el) ? el : (_el$$el = el === null || el === void 0 ? void 0 : el.$el) !== null && _el$$el !== void 0 ? _el$$el : null;
			this.rootEl = p(resolved) ? resolved : null;
		},
		setContentEl: function setContentEl(el) {
			this.contentEl = p(el) ? el : null;
		},
		getItemCount: function getItemCount() {
			return this.registeredItemCount;
		},
		registerItem: function registerItem(currentIndex) {
			if (currentIndex !== null && currentIndex !== void 0) {
				if (currentIndex >= this.registeredItemCount) this.registeredItemCount = currentIndex + 1;
				return currentIndex;
			}
			var newIndex = this.registeredItemCount;
			this.registeredItemCount += 1;
			return newIndex;
		},
		handleNext: function handleNext() {
			var count = this.registeredItemCount;
			if (count <= 0) return;
			var newIndex = (this.d_activeIndex + 1) % count;
			this.updateActiveIndex(newIndex);
		},
		handlePrev: function handlePrev() {
			var count = this.registeredItemCount;
			if (count <= 0) return;
			var newIndex = (this.d_activeIndex - 1 + count) % count;
			this.updateActiveIndex(newIndex);
		},
		selectItem: function selectItem(index) {
			var count = this.registeredItemCount;
			if (index < 0 || index >= count) return;
			this.updateActiveIndex(index);
		},
		updateActiveIndex: function updateActiveIndex(value) {
			this.d_activeIndex = value;
			this.$emit("update:activeIndex", value);
		},
		dispatchAction: function dispatchAction(type) {
			this.pendingAction = {
				type,
				timestamp: Date.now()
			};
		},
		clearPendingAction: function clearPendingAction() {
			this.pendingAction = null;
		},
		reportItemState: function reportItemState(itemState) {
			this.activeItemTransform = {
				zoomed: itemState.zoomed,
				rotated: itemState.rotated,
				flipped: itemState.flipped
			};
			var prev = this.prevReported;
			if (!prev || prev.scale !== itemState.scale) this.$emit("zoom-change", itemState.scale);
			if (!prev || prev.rotation !== itemState.rotation) this.$emit("rotate-change", itemState.rotation);
			if (!prev || prev.flip.x !== itemState.flip.x || prev.flip.y !== itemState.flip.y) this.$emit("flip-change", itemState.flip);
			this.prevReported = {
				scale: itemState.scale,
				rotation: itemState.rotation,
				flip: itemState.flip
			};
		},
		isItemActive: function isItemActive(index) {
			return this.d_activeIndex === index;
		},
		setFullScreen: function setFullScreen(value) {},
		toggleFullScreen: function toggleFullScreen() {
			this.setFullScreen(!this.isFullscreen);
		},
		onDocumentFullscreenChange: function onDocumentFullscreenChange() {
			var _this2 = this;
			var active = false;
			if (active !== this.isFullscreenInternal) {
				this.isFullscreenInternal = active;
				this.$emit("update:fullscreen", active);
			}
			if (this.fullscreenResizeTimeout) clearTimeout(this.fullscreenResizeTimeout);
			this.fullscreenResizeTimeout = setTimeout(function() {
				_this2.fullscreenResizeTimeout = null;
			}, 100);
		},
		onClickAction: function onClickAction(action) {
			var _this3 = this;
			var map = {
				zoomIn: function zoomIn() {
					return _this3.dispatchAction("zoom-in");
				},
				zoomOut: function zoomOut() {
					return _this3.dispatchAction("zoom-out");
				},
				rotateLeft: function rotateLeft() {
					return _this3.dispatchAction("rotate-left");
				},
				rotateRight: function rotateRight() {
					return _this3.dispatchAction("rotate-right");
				},
				flipX: function flipX() {
					return _this3.dispatchAction("flip-x");
				},
				flipY: function flipY() {
					return _this3.dispatchAction("flip-y");
				},
				download: function download() {
					return _this3.dispatchAction("download");
				},
				next: function next() {
					return _this3.handleNext();
				},
				prev: function prev() {
					return _this3.handlePrev();
				},
				toggleFullScreen: function toggleFullScreen() {
					return _this3.toggleFullScreen();
				}
			};
			if (action && map[action]) map[action]();
		},
		onKeyDown: function onKeyDown(event) {
			if (event.key === "ArrowRight") {
				event.preventDefault();
				this.handleNext();
			} else if (event.key === "ArrowLeft") {
				event.preventDefault();
				this.handlePrev();
			} else if (event.key === "Escape" && this.closeOnEscape && this.isFullscreen) {
				event.preventDefault();
				this.toggleFullScreen();
			}
		}
	},
	computed: {
		attrs: function attrs() {
			return mergeProps(this.a11yAttrs, this.ptmi("root"));
		},
		isFullscreen: function isFullscreen() {
			var _this$fullscreen;
			return (_this$fullscreen = this.fullscreen) !== null && _this$fullscreen !== void 0 ? _this$fullscreen : this.isFullscreenInternal;
		},
		a11yAttrs: function a11yAttrs() {
			return {
				ref: this.setRef,
				tabindex: 0,
				"data-pc-name": "gallery",
				"data-fullscreen": this.isFullscreen ? "" : void 0,
				"data-zoomed": this.activeItemTransform.zoomed ? "" : void 0,
				"data-rotated": this.activeItemTransform.rotated ? "" : void 0,
				"data-flipped": this.activeItemTransform.flipped ? "" : void 0,
				onKeydown: this.onKeyDown
			};
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
//# sourceMappingURL=gallery-CpU-0UiP.mjs.map
