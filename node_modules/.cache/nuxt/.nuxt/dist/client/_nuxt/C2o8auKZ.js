import{H as e,L as t,Nt as n,O as r,V as i,W as a,Y as o,d as s,f as c}from"./BQHyKCNA.js";import{t as l}from"./DhGtpQ-w.js";import{n as u,z as d}from"./4XRHhTMS.js";import{t as f}from"./1d7j-Dyg.js";import{t as p}from"./B-GjYb7s.js";import{t as m}from"./ql2-utRM.js";import{n as h}from"./_cFRa2an.js";var g=u.extend({name:`scrolltop`,style:`
    .p-scrolltop.p-button {
        position: fixed !important;
        inset-block-end: 20px;
        inset-inline-end: 20px;
    }

    .p-scrolltop-sticky.p-button {
        position: sticky !important;
        display: flex;
        margin-inline-start: auto;
    }

    .p-scrolltop-enter-from {
        opacity: 0;
    }

    .p-scrolltop-enter-active {
        transition: opacity 300ms;
    }

    .p-scrolltop-leave-to {
        opacity: 0;
    }

    .p-scrolltop-leave-active {
        transition: opacity 300ms;
    }
`,classes:{root:function(e){return[`p-scrolltop`,{"p-scrolltop-sticky":e.props.target!==`window`}]},icon:`p-scrolltop-icon`}}),_={name:`ScrollTop`,extends:{name:`BaseScrollTop`,extends:p,props:{target:{type:String,default:`window`},threshold:{type:Number,default:400},icon:{type:String,default:void 0},behavior:{type:String,default:`smooth`},buttonProps:{type:Object,default:function(){return{rounded:!0,iconOnly:!0}}}},style:g,provide:function(){return{$pcScrollTop:this,$parentInstance:this}}},inheritAttrs:!1,scrollListener:null,container:null,data:function(){return{visible:!1}},mounted:function(){this.target===`window`?this.bindDocumentScrollListener():this.target===`parent`&&this.bindParentScrollListener()},beforeUnmount:function(){this.target===`window`?this.unbindDocumentScrollListener():this.target===`parent`&&this.unbindParentScrollListener(),this.container&&(f.clear(this.container),this.overlay=null)},methods:{onClick:function(){(this.target===`window`?window:this.$el.parentElement).scroll({top:0,behavior:this.behavior})},checkVisibility:function(e){this.visible=e>this.threshold},bindParentScrollListener:function(){var e=this;this.scrollListener=function(){e.checkVisibility(e.$el.parentElement.scrollTop)},this.$el.parentElement.addEventListener(`scroll`,this.scrollListener)},bindDocumentScrollListener:function(){var e=this;this.scrollListener=function(){e.checkVisibility(d())},window.addEventListener(`scroll`,this.scrollListener)},unbindParentScrollListener:function(){this.scrollListener&&=(this.$el.parentElement.removeEventListener(`scroll`,this.scrollListener),null)},unbindDocumentScrollListener:function(){this.scrollListener&&=(window.removeEventListener(`scroll`,this.scrollListener),null)},onEnter:function(e){f.set(`overlay`,e,this.$primevue.config.zIndex.overlay)},onAfterLeave:function(e){f.clear(e)},containerRef:function(e){this.container=e?e.$el:void 0}},computed:{scrollTopAriaLabel:function(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.scrollTop:void 0}},components:{ChevronUp:m,Button:h}};function v(u,d,f,p,m,h){var g=e(`Button`);return t(),s(l,r({name:`p-scrolltop`,appear:``,onEnter:h.onEnter,onAfterLeave:h.onAfterLeave},u.ptm(`transition`)),{default:o(function(){return[m.visible?(t(),s(g,r({key:0,ref:h.containerRef,class:u.cx(`root`),onClick:h.onClick,"aria-label":h.scrollTopAriaLabel,unstyled:u.unstyled},u.buttonProps,{pt:u.ptm(`root`)}),{default:o(function(){return[i(u.$slots,`icon`,{class:n(u.cx(`icon`))},function(){return[(t(),s(a(u.icon?`span`:`ChevronUp`),r({class:[u.cx(`icon`),u.icon]},u.ptm(`root`).icon,{"data-pc-section":`icon`}),null,16,[`class`]))]})]}),_:3},16,[`class`,`onClick`,`aria-label`,`unstyled`,`pt`])):c(``,!0)]}),_:3},16,[`onEnter`,`onAfterLeave`])}_.render=v;export{_ as default};