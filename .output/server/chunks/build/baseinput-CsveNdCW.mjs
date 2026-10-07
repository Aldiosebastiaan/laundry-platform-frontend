import { s as script$1 } from './baseeditableholder-CSsjvX-h.mjs';

//#region node_modules/.pnpm/@primevue+core@5.0.2_vue@3.5.43/node_modules/@primevue/core/baseinput/index.mjs
var script = {
	name: "BaseInput",
	"extends": script$1,
	props: {
		size: {
			type: String,
			"default": null
		},
		fluid: {
			type: Boolean,
			"default": null
		},
		variant: {
			type: String,
			"default": null
		}
	},
	inject: {
		$parentInstance: { "default": void 0 },
		$pcFluid: { "default": void 0 }
	},
	computed: {
		$variant: function $variant() {
			var _this$variant;
			return (_this$variant = this.variant) !== null && _this$variant !== void 0 ? _this$variant : this.$primevue.config.inputVariant;
		},
		$fluid: function $fluid() {
			var _this$fluid;
			return (_this$fluid = this.fluid) !== null && _this$fluid !== void 0 ? _this$fluid : !!this.$pcFluid;
		}
	}
};

export { script as s };
//# sourceMappingURL=baseinput-CsveNdCW.mjs.map
