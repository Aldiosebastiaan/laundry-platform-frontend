import{B as e,C as t,H as n,It as r,L as i,O as a,Pt as o,U as s,W as c,X as l,Y as ee,d as u,f as d,lt as f,p,pt as m,r as h,u as g,x as _}from"./BQHyKCNA.js";import{M as v,gt as y,n as te,wt as ne}from"./4XRHhTMS.js";import{t as b}from"./CEAV8Kzl.js";import{t as x}from"./1d7j-Dyg.js";import{a as S}from"#entry";import{t as C}from"./B-GjYb7s.js";import{t as w}from"./BhUWwlJR.js";import{t as T}from"./DIdo_cGh.js";import{t as re}from"./S3mrMlXj.js";import{t as E}from"./BmnuvI5l.js";import{t as D}from"./WFWeYHGn.js";import{t as O}from"./CrS-sqv4.js";var ie=`
    .p-toast {
        width: dt('toast.width');
        white-space: pre-line;
        word-break: break-word;
    }

    .p-toast-message {
        --px-offset-y: calc(var(--px-swipe-amount-y) + (var(--px-toast-offset) + var(--px-toast-index) * var(--px-gap)) * var(--px-raise-factor));
        --px-offset-x: var(--px-swipe-amount-x);
        width: 100%;
        outline: none;
        position: absolute;
        touch-action: none;
        opacity: 0;
        transform: translateX(var(--px-offset-x)) translateY(calc(100% * var(--px-raise-factor) * -1));
        z-index: var(--px-toast-z-index);
        transition: transform dt('toast.transition.duration'), opacity dt('toast.transition.duration'), height dt('toast.transition.duration');
    }

    .p-toast-message:focus-visible {
        box-shadow: dt('toast.focus.ring.shadow');
        outline: dt('toast.focus.ring.width') dt('toast.focus.ring.style') dt('focus.ring.color');
        outline-offset: dt('toast.focus.ring.offset');
    }

    .p-toast-message[data-mounted] {
        opacity: 1;
        transform: translateY(0);
    }

    .p-toast-message:not([data-expanded]):not([data-front]) {
        overflow: hidden;
        height: var(--px-front-toast-height);
        transform: translateX(var(--px-offset-x)) translateY(calc(var(--px-raise-factor) * var(--px-toast-index) * var(--px-gap))) scale(calc(var(--px-toast-index) * -0.05 + 1));
    }

    .p-toast-message[data-mounted][data-expanded] {
        height: var(--px-initial-height);
        transform: translateX(var(--px-offset-x)) translateY(var(--px-offset-y));
    }

    .p-toast-message[data-expanded]::after {
        content: "";
        position: absolute;
        left: 0;
        height: calc(var(--px-gap) + 1px);
        width: 100%;
        bottom: 100%;
    }

    .p-toast-message:not([data-visible]) {
        opacity: 0;
        pointer-events: none;
        user-select: none;
    }

    .p-toast-message[data-removed][data-front]:not([data-swipe-out]) {
        opacity: 0;
        transform: translateX(var(--px-offset-x)) translateY(calc(var(--px-raise-factor) * -100%));
    }

    .p-toast-message[data-removed]:not([data-front]):not([data-swipe-out])[data-expanded] {
        opacity: 0;
        transform: translateX(var(--px-offset-x)) translateY(calc((var(--px-offset-y)) + (var(--px-raise-factor) * -100%)));
    }

    .p-toast-message[data-removed]:not([data-front]):not([data-swipe-out]):not([data-expanded]) {
        opacity: 0;
        transform: translateX(var(--px-offset-x)) translateY(calc(var(--px-raise-factor) * 40% * -1));
        transition:
            transform 500ms,
            opacity 200ms;
    }

    .p-toast-message[data-swiping] {
        transition: none;
        transform: translateX(var(--px-offset-x)) translateY(var(--px-offset-y)) !important;
    }

    .p-toast-message[data-swiped] {
        -webkit-user-select: none;
        user-select: none;
    }

    .p-toast-message[data-swipe-out][data-swipe-direction="up"] {
        opacity: 0;
        transform: translateX(var(--px-offset-x)) translateY(calc(var(--px-offset-y) - 100%)) !important;
    }

    .p-toast-message[data-swipe-out][data-swipe-direction="down"] {
        opacity: 0;
        transform: translateX(var(--px-offset-x)) translateY(calc(var(--px-offset-y) + 100%)) !important;
    }

    .p-toast-message[data-swipe-out][data-swipe-direction="left"] {
        opacity: 0;
        transform: translateX(calc(var(--px-offset-x) - 100%)) translateY(var(--px-offset-y)) !important;
    }

    .p-toast-message[data-swipe-out][data-swipe-direction="right"] {
        opacity: 0;
        transform: translateX(calc(var(--px-offset-x) + 100%)) translateY(var(--px-offset-y)) !important;
        transition:
            transform 500ms,
            opacity 200ms;
    }

    .p-toast-message-icon,
    .p-toast-message-icon svg,
    .p-toast-message-icon i {
        flex-shrink: 0;
        font-size: dt('toast.icon.size');
        width: dt('toast.icon.size');
        height: dt('toast.icon.size');
        margin: dt('toast.icon.margin');
    }

    .p-toast-message-content {
        display: flex;
        align-items: flex-start;
        padding: dt('toast.content.padding');
        gap: dt('toast.content.gap');
        min-height: 0;
        overflow: hidden;
        transition: padding 250ms ease-in;
    }

    .p-toast-message-text {
        flex: 1 1 auto;
        display: flex;
        flex-direction: column;
        gap: dt('toast.text.gap');
    }

    .p-toast-summary {
        font-weight: dt('toast.summary.font.weight');
        font-size: dt('toast.summary.font.size');
    }

    .p-toast-detail {
        font-weight: dt('toast.detail.font.weight');
        font-size: dt('toast.detail.font.size');
    }

    .p-toast-close-button {
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        position: absolute;
        cursor: pointer;
        background: transparent;
        transition:
            background dt('toast.transition.duration'),
            color dt('toast.transition.duration'),
            outline-color dt('toast.transition.duration'),
            box-shadow dt('toast.transition.duration');
        outline-color: transparent;
        color: inherit;
        width: dt('toast.close.button.width');
        height: dt('toast.close.button.height');
        border-radius: dt('toast.close.button.border.radius');
        margin: 0;
        top: 0.25rem;
        right: 0.25rem;
        padding: 0;
        border: none;
        user-select: none;
    }

    .p-toast-close-button:dir(rtl) {
        left: 0.25rem;
        right: auto;
    }

    .p-toast-message-normal,
    .p-toast-message-info,
    .p-toast-message-success,
    .p-toast-message-warn,
    .p-toast-message-error,
    .p-toast-message-secondary,
    .p-toast-message-contrast {
        border-width: dt('toast.border.width');
        border-style: solid;
        backdrop-filter: blur(dt('toast.blur'));
        border-radius: dt('toast.border.radius');
    }

    .p-toast-close-icon,
    .p-toast-close-icon svg,
    .p-toast-close-icon i {
        font-size: dt('toast.close.icon.size');
        width: dt('toast.close.icon.size');
        height: dt('toast.close.icon.size');
    }

    .p-toast-close-button:focus-visible {
        outline-width: dt('focus.ring.width');
        outline-style: dt('focus.ring.style');
        outline-offset: dt('focus.ring.offset');
    }

    .p-toast-message-normal {
        background: dt('toast.normal.background');
        border-color: dt('toast.normal.border.color');
        color: dt('toast.normal.color');
        box-shadow: dt('toast.normal.shadow');
    }

    .p-toast-message-normal .p-toast-detail {
        color: dt('toast.normal.detail.color');
    }

    .p-toast-message-normal .p-toast-close-button:focus-visible {
        outline-color: dt('toast.normal.close.button.focus.ring.color');
        box-shadow: dt('toast.normal.close.button.focus.ring.shadow');
    }

    .p-toast-message-normal .p-toast-close-button:hover {
        background: dt('toast.normal.close.button.hover.background');
    }

    .p-toast-message-info {
        background: dt('toast.info.background');
        border-color: dt('toast.info.border.color');
        color: dt('toast.info.color');
        box-shadow: dt('toast.info.shadow');
    }

    .p-toast-message-info .p-toast-detail {
        color: dt('toast.info.detail.color');
    }

    .p-toast-message-info .p-toast-close-button:focus-visible {
        outline-color: dt('toast.info.close.button.focus.ring.color');
        box-shadow: dt('toast.info.close.button.focus.ring.shadow');
    }

    .p-toast-message-info .p-toast-close-button:hover {
        background: dt('toast.info.close.button.hover.background');
    }

    .p-toast-message-success {
        background: dt('toast.success.background');
        border-color: dt('toast.success.border.color');
        color: dt('toast.success.color');
        box-shadow: dt('toast.success.shadow');
    }

    .p-toast-message-success .p-toast-detail {
        color: dt('toast.success.detail.color');
    }

    .p-toast-message-success .p-toast-close-button:focus-visible {
        outline-color: dt('toast.success.close.button.focus.ring.color');
        box-shadow: dt('toast.success.close.button.focus.ring.shadow');
    }

    .p-toast-message-success .p-toast-close-button:hover {
        background: dt('toast.success.close.button.hover.background');
    }

    .p-toast-message-warn {
        background: dt('toast.warn.background');
        border-color: dt('toast.warn.border.color');
        color: dt('toast.warn.color');
        box-shadow: dt('toast.warn.shadow');
    }

    .p-toast-message-warn .p-toast-detail {
        color: dt('toast.warn.detail.color');
    }

    .p-toast-message-warn .p-toast-close-button:focus-visible {
        outline-color: dt('toast.warn.close.button.focus.ring.color');
        box-shadow: dt('toast.warn.close.button.focus.ring.shadow');
    }

    .p-toast-message-warn .p-toast-close-button:hover {
        background: dt('toast.warn.close.button.hover.background');
    }

    .p-toast-message-error {
        background: dt('toast.error.background');
        border-color: dt('toast.error.border.color');
        color: dt('toast.error.color');
        box-shadow: dt('toast.error.shadow');
    }

    .p-toast-message-error .p-toast-detail {
        color: dt('toast.error.detail.color');
    }

    .p-toast-message-error .p-toast-close-button:focus-visible {
        outline-color: dt('toast.error.close.button.focus.ring.color');
        box-shadow: dt('toast.error.close.button.focus.ring.shadow');
    }

    .p-toast-message-error .p-toast-close-button:hover {
        background: dt('toast.error.close.button.hover.background');
    }

    .p-toast-message-secondary {
        background: dt('toast.secondary.background');
        border-color: dt('toast.secondary.border.color');
        color: dt('toast.secondary.color');
        box-shadow: dt('toast.secondary.shadow');
    }

    .p-toast-message-secondary .p-toast-detail {
        color: dt('toast.secondary.detail.color');
    }

    .p-toast-message-secondary .p-toast-close-button:focus-visible {
        outline-color: dt('toast.secondary.close.button.focus.ring.color');
        box-shadow: dt('toast.secondary.close.button.focus.ring.shadow');
    }

    .p-toast-message-secondary .p-toast-close-button:hover {
        background: dt('toast.secondary.close.button.hover.background');
    }

    .p-toast-message-contrast {
        background: dt('toast.contrast.background');
        border-color: dt('toast.contrast.border.color');
        color: dt('toast.contrast.color');
        box-shadow: dt('toast.contrast.shadow');
    }
    
    .p-toast-message-contrast .p-toast-detail {
        color: dt('toast.contrast.detail.color');
    }

    .p-toast-message-contrast .p-toast-close-button:focus-visible {
        outline-color: dt('toast.contrast.close.button.focus.ring.color');
        box-shadow: dt('toast.contrast.close.button.focus.ring.shadow');
    }

    .p-toast-message-contrast .p-toast-close-button:hover {
        background: dt('toast.contrast.close.button.hover.background');
    }

    .p-toast {
        position: fixed;
        width: 18.75rem;
        z-index: 2000;
    }

    .p-toast-center {
        left: 50%;
        transform: translateX(-50%) translateY(-50%);
        top: 50%;
    }

    .p-toast-bottom-right {
        right: 2rem;
        bottom: 2rem;
    }

    .p-toast-bottom-center {
        bottom: 2rem;
        left: 50%;
        transform: translateX(-50%);
    }

    .p-toast-bottom-left {
        left: 2rem;
        bottom: 2rem;
    }

    .p-toast-top-right {
        right: 2rem;
        top: 2rem;
    }

    .p-toast-top-center {
        left: 50%;
        transform: translateX(-50%);
        top: 2rem;
    }

    .p-toast-top-left {
        left: 2rem;
        top: 2rem;
    }

    .p-toast-bottom-right .p-toast-message{
        --px-raise-factor: -1;
        bottom: 0;
        right: 0;
    }

    .p-toast-bottom-center .p-toast-message{
        --px-raise-factor: -1;
        bottom: 0;
    }

    .p-toast[data-position="bottom-left"] .p-toast-message{
        --px-raise-factor: -1;
        bottom: 0;
        left: 0;
    }

    .p-toast[data-position="top-right"] .p-toast-message{
        --px-raise-factor: 1;
        top: 0;
        right: 0;
    }

    .p-toast[data-position="top-center"] .p-toast-message{
        --px-raise-factor: 1;
        top: 0;
    }

    .p-toast[data-position="top-left"] .p-toast-message{
        --px-raise-factor: 1;
        top: 0;
        left: 0;
    }

    .p-toast[data-position="center"] .p-toast-message{
        --px-raise-factor: 1;
        top: 0;
    }
`;function k(e){"@babel/helpers - typeof";return k=typeof Symbol==`function`&&typeof Symbol.iterator==`symbol`?function(e){return typeof e}:function(e){return e&&typeof Symbol==`function`&&e.constructor===Symbol&&e!==Symbol.prototype?`symbol`:typeof e},k(e)}function A(e,t,n){return(t=j(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function j(e){var t=M(e,`string`);return k(t)==`symbol`?t:t+``}function M(e,t){if(k(e)!=`object`||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(k(r)!=`object`)return r;throw TypeError(`@@toPrimitive must return a primitive value.`)}return(t===`string`?String:Number)(e)}var ae=te.extend({name:`toast`,style:ie,classes:{root:function(e){return[`p-toast p-component`,`p-toast-`+e.props.position]},message:function(e){var t=e.props;return[`p-toast-message`,{"p-toast-message-normal":t.message.severity===`normal`||t.message.severity===void 0,"p-toast-message-info":t.message.severity===`info`,"p-toast-message-warn":t.message.severity===`warn`,"p-toast-message-error":t.message.severity===`error`,"p-toast-message-success":t.message.severity===`success`,"p-toast-message-secondary":t.message.severity===`secondary`,"p-toast-message-contrast":t.message.severity===`contrast`}]},messageContent:`p-toast-message-content`,messageIcon:function(e){var t=e.props;return[`p-toast-message-icon`,A(A(A(A(A(A({},t.infoIcon,t.message.severity===`info`),t.warnIcon,t.message.severity===`warn`),t.errorIcon,t.message.severity===`error`),t.successIcon,t.message.severity===`success`),t.secondaryIcon,t.message.severity===`secondary`),t.contrastIcon,t.message.severity===`contrast`)]},messageText:`p-toast-message-text`,summary:`p-toast-summary`,detail:`p-toast-detail`,closeButton:`p-toast-close-button`,closeIcon:`p-toast-close-icon`},inlineStyles:{root:function(e){var t=e.position;return{position:`fixed`,top:t===`top-right`||t===`top-left`||t===`top-center`?`20px`:t===`center`?`50%`:null,right:(t===`top-right`||t===`bottom-right`)&&`20px`,bottom:(t===`bottom-left`||t===`bottom-right`||t===`bottom-center`)&&`20px`,left:t===`top-left`||t===`bottom-left`?`20px`:t===`center`||t===`top-center`||t===`bottom-center`?`50%`:null}}}}),oe={name:`exclamation-triangle`,meta:{tags:[`exclamation-triangle`,`warning`,`alert`,`danger`,`caution`]},svg:{xmlns:`http://www.w3.org/2000/svg`,width:20,height:20,viewBox:`0 0 20 20`,fill:`none`},nodes:[[`path`,{d:`M10 2.25C10.2691 2.25005 10.5179 2.39429 10.6514 2.62793L18.6514 16.6279C18.7839 16.8599 18.7825 17.1448 18.6485 17.376C18.5143 17.6072 18.2673 17.75 18 17.75H2C1.73266 17.75 1.48576 17.6072 1.35156 17.376C1.21753 17.1448 1.21609 16.86 1.34863 16.6279L9.34864 2.62793C9.48218 2.39428 9.73089 2.25 10 2.25ZM3.29297 16.25H16.7071L10 4.51172L3.29297 16.25ZM10 13.25C10.4142 13.2501 10.75 13.5858 10.75 14V14.5C10.75 14.9142 10.4142 15.2499 10 15.25C9.5858 15.25 9.25001 14.9142 9.25001 14.5V14C9.25001 13.5858 9.5858 13.25 10 13.25ZM10 7.25C10.4142 7.25007 10.75 7.58583 10.75 8V11.5C10.75 11.9142 10.4142 12.2499 10 12.25C9.5858 12.25 9.25001 11.9142 9.25001 11.5V8C9.25001 7.58579 9.5858 7.25 10 7.25Z`,fill:`currentColor`,key:`dk1648`}]]},N=_({name:`ExclamationTriangle`,inheritAttrs:!1,__name:`exclamation-triangle`,setup(e){let{Icon:n}=w(oe);return(e,r)=>(i(),u(m(n),o(t(e.$attrs)),null,16))}}),se={name:`info-circle`,meta:{tags:[`info-circle`,`information`,`help`,`details`]},svg:{xmlns:`http://www.w3.org/2000/svg`,width:20,height:20,viewBox:`0 0 20 20`,fill:`none`},nodes:[[`path`,{d:`M10 1C14.9706 1 19 5.02944 19 10C19 14.9706 14.9706 19 10 19C5.02944 19 1 14.9706 1 10C1 5.02944 5.02944 1 10 1ZM10 2.5C5.85786 2.5 2.5 5.85786 2.5 10C2.5 14.1421 5.85786 17.5 10 17.5C14.1421 17.5 17.5 14.1421 17.5 10C17.5 5.85786 14.1421 2.5 10 2.5ZM10 8.25C10.4142 8.25 10.75 8.58579 10.75 9V14C10.75 14.4142 10.4142 14.75 10 14.75C9.58579 14.75 9.25 14.4142 9.25 14V9C9.25 8.58579 9.58579 8.25 10 8.25ZM10 5.25C10.4142 5.25 10.75 5.58579 10.75 6V6.5C10.75 6.91421 10.4142 7.25 10 7.25C9.58579 7.25 9.25 6.91421 9.25 6.5V6C9.25 5.58579 9.58579 5.25 10 5.25Z`,fill:`currentColor`,key:`l9ro38`}]]},P=_({name:`InfoCircle`,inheritAttrs:!1,__name:`info-circle`,setup(e){let{Icon:n}=w(se);return(e,r)=>(i(),u(m(n),o(t(e.$attrs)),null,16))}}),ce={name:`BaseToast`,extends:C,props:{group:{type:String,default:null},position:{type:String,default:`top-right`},mode:{type:String,default:`stacked`},gap:{type:Number,default:12},limit:{type:Number,default:3},autoZIndex:{type:Boolean,default:!0},baseZIndex:{type:Number,default:0},breakpoints:{type:Object,default:null},closeIcon:{type:String,default:void 0},infoIcon:{type:String,default:void 0},warnIcon:{type:String,default:void 0},errorIcon:{type:String,default:void 0},successIcon:{type:String,default:void 0},secondaryIcon:{type:String,default:void 0},contrastIcon:{type:String,default:void 0},closeButtonProps:{type:null,default:null},onMouseEnter:{type:Function,default:void 0},onMouseLeave:{type:Function,default:void 0},onClick:{type:Function,default:void 0}},style:ae,provide:function(){return{$pcToast:this,$parentInstance:this}}};function F(e){"@babel/helpers - typeof";return F=typeof Symbol==`function`&&typeof Symbol.iterator==`symbol`?function(e){return typeof e}:function(e){return e&&typeof Symbol==`function`&&e.constructor===Symbol&&e!==Symbol.prototype?`symbol`:typeof e},F(e)}function I(e,t,n){return(t=L(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function L(e){var t=R(e,`string`);return F(t)==`symbol`?t:t+``}function R(e,t){if(F(e)!=`object`||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(F(r)!=`object`)return r;throw TypeError(`@@toPrimitive must return a primitive value.`)}return(t===`string`?String:Number)(e)}var z=50,B=.11,V=500,H={name:`ToastMessage`,hostName:`Toast`,extends:C,emits:[`close`],props:{message:{type:null,default:null},templates:{type:Object,default:null},closeIcon:{type:String,default:null},infoIcon:{type:String,default:null},warnIcon:{type:String,default:null},errorIcon:{type:String,default:null},successIcon:{type:String,default:null},secondaryIcon:{type:String,default:null},contrastIcon:{type:String,default:null},closeButtonProps:{type:null,default:null},onMouseEnter:{type:Function,default:void 0},onMouseLeave:{type:Function,default:void 0},onClick:{type:Function,default:void 0},index:{type:Number,default:0}},inject:[`$pcToast`],closeTimeout:null,closeRaf:null,remainingTime:0,timerStartTime:0,pointerStartPosition:null,swipeStartTime:0,data:function(){return{isMounted:!1,measuredHeight:0,removed:!1,offsetBeforeRemove:0,swiping:!1,isSwiped:!1,swipeOut:!1,swipeDirection:null,swipeOutDirection:null,swipeAmountX:0,swipeAmountY:0}},watch:{shouldPauseTimer:function(e){this.removed||(e?this.pauseTimer():this.startTimer())}},mounted:function(){var e,t;this.measureHeight(),this.isMounted=!0,(e=this.$pcToast)==null||(t=e.onEnter)==null||t.call(e),this.shouldPauseTimer||this.startTimer()},beforeUnmount:function(){var e,t;this.clearCloseTimeout(),(e=this.$pcToast)==null||(t=e.onLeave)==null||t.call(e)},unmounted:function(){if(this.removed){var e,t;(e=this.$pcToast)==null||(t=e.onAfterLeave)==null||t.call(e)}},methods:{measureHeight:function(){var e,t,n=this.$refs.messageEl;if(n){var r=n.style.height;n.style.height=`auto`;var i=n.getBoundingClientRect().height;n.style.height=r,this.measuredHeight=i,(e=this.$pcToast)==null||(t=e.onItemHeightChange)==null||t.call(e,{index:this.index,height:i})}},startTimer:function(){var e=this;if(this.clearCloseTimeout(),!this.message.sticky){if(!this.remainingTime||this.remainingTime<=0){if(!this.message.life)return;this.remainingTime=this.message.life}this.timerStartTime=Date.now(),this.closeTimeout=setTimeout(function(){e.onMessageRemoveFocus(),e.closeStack()},this.remainingTime)}},pauseTimer:function(){if(this.timerStartTime>0&&this.closeTimeout){var e=Date.now()-this.timerStartTime;this.remainingTime=Math.max(0,this.remainingTime-e)}this.clearCloseTimeout()},markRemoved:function(){var e,t;this.offsetBeforeRemove=this.offset,this.removed=!0,(e=this.$pcToast)==null||(t=e.onItemHeightChange)==null||t.call(e,{index:this.index,height:0,removed:!0})},isDismissible:function(){return this.message?.closable!==!1},onPointerDown:function(e){if(e.button===0&&this.isDismissible()){this.swipeStartTime=Date.now(),this.offsetBeforeRemove=this.offset;try{e.target.setPointerCapture(e.pointerId)}catch{}this.swiping=!0,this.pointerStartPosition={x:e.clientX,y:e.clientY}}},onPointerMove:function(e){if(this.pointerStartPosition&&this.isDismissible()&&!((window.getSelection()?.toString().length??0)>0)){var t=e.clientY-this.pointerStartPosition.y,n=e.clientX-this.pointerStartPosition.x,r=Math.abs(n)>1||Math.abs(t)>1,i=(this.$pcToast?.position??`top-right`).split(`-`),a=i[0],o=i[1];!this.swipeDirection&&r&&(this.swipeDirection=Math.abs(n)>Math.abs(t)?`x`:`y`);var s=0,c=0;this.swipeDirection===`x`?s=o===`left`&&n<0||o===`right`&&n>0?n:this.applyDampening(n):this.swipeDirection===`y`&&(c=a===`top`&&t<0||a===`bottom`&&t>0?t:this.applyDampening(t)),(Math.abs(s)>0||Math.abs(c)>0)&&(this.isSwiped=!0),this.swipeAmountX=s,this.swipeAmountY=c}},onPointerUp:function(){if(!this.swipeOut&&this.isDismissible()){this.swiping=!1,this.pointerStartPosition=null;var e=this.swipeDirection===`x`?this.swipeAmountX:this.swipeAmountY,t=Date.now()-(this.swipeStartTime||Date.now()),n=t>0?Math.abs(e)/t:0;if(Math.abs(e)>=z||n>B){this.offsetBeforeRemove=this.offset,this.swipeOutDirection=this.swipeDirection===`x`?this.swipeAmountX>0?`right`:`left`:this.swipeAmountY>0?`down`:`up`,this.swipeOut=!0,this.markRemoved(),this.scheduleSwipeOutClose();return}this.swipeAmountX=0,this.swipeAmountY=0,this.isSwiped=!1,this.swipeDirection=null}},onDragEnd:function(){this.swiping=!1,this.swipeDirection=null,this.pointerStartPosition=null},applyDampening:function(e){var t=e*(1/(1.5+Math.abs(e)/20));return Math.abs(t)<Math.abs(e)?t:e},scheduleSwipeOutClose:function(){var e=this;this.clearCloseTimeout(),this.closeTimeout=setTimeout(function(){e.close({message:e.message,type:`close`})},V)},scheduleClose:function(e){var t=this;this.clearCloseTimeout(),this.closeRaf=requestAnimationFrame(function(){t.closeRaf=null;var n=t.$refs.messageEl,r=n?(parseFloat(getComputedStyle(n).transitionDuration)||0)*1e3:0;t.closeTimeout=setTimeout(function(){t.close({message:t.message,type:e})},r||V)})},closeStack:function(){this.markRemoved(),this.scheduleClose(`life-end`)},close:function(e){this.$emit(`close`,e)},onCloseClick:function(){this.clearCloseTimeout(),this.onMessageRemoveFocus(),this.markRemoved(),this.scheduleClose(`close`)},onMessageRemoveFocus:function(){var e=this.$refs.messageEl;if(e){var t=document.activeElement;if(e.contains(t)){var n=`[data-pc-section="closebutton"]:not([tabindex="-1"])`,r=e.nextElementSibling?.querySelector(n),i=e.previousElementSibling?.querySelector(n);requestAnimationFrame(function(){r?r.focus({preventScroll:!0}):i&&i.focus({preventScroll:!0})})}}},clearCloseTimeout:function(){this.closeTimeout&&=(clearTimeout(this.closeTimeout),null),this.closeRaf&&=(cancelAnimationFrame(this.closeRaf),null)},onMessageClick:function(e){var t;(t=this.onClick)==null||t.call(this,{originalEvent:e,message:this.message})},onMessageMouseEnter:function(e){var t;(t=this.onMouseEnter)==null||t.call(this,{originalEvent:e,message:this.message})},onMessageMouseLeave:function(e){var t;(t=this.onMouseLeave)==null||t.call(this,{originalEvent:e,message:this.message})},resolveIcon:function(e){return y(e)?e:f(e)},isComponentIcon:function(e){return!!e&&!y(e)}},computed:{isExpanded:function(){return this.$pcToast?.isExpanded??!1},toastCount:function(){var e;return((e=this.$pcToast)==null||(e=e.messages)==null?void 0:e.length)??0},isVisible:function(){var e,t;return((e=this.$pcToast)==null||(t=e.getIsVisible)==null?void 0:t.call(e,this.index))??!1},stackExpanded:function(){return this.$pcToast?.expanded??!1},visibleIndex:function(){var e,t;return((e=this.$pcToast)==null||(t=e.getVisibleIndex)==null?void 0:t.call(e,this.index))??0},offset:function(){var e,t;return((e=this.$pcToast)==null||(t=e.getOffset)==null?void 0:t.call(e,this.index))??0},isInteracting:function(){return this.$pcToast?.isInteracting??!1},shouldPauseTimer:function(){return this.stackExpanded||this.isInteracting||this.swiping},isAriaHidden:function(){return!this.isVisible&&!this.removed?`true`:null},isTabbable:function(){return!this.removed&&this.isVisible},stackStyles:function(){return{"--px-toast-index":this.removed?this.index:this.visibleIndex,"--px-toast-z-index":this.toastCount-this.visibleIndex,"--px-initial-height":this.measuredHeight?`${this.measuredHeight}px`:void 0,"--px-toast-offset":`${this.removed?this.offsetBeforeRemove:this.offset}px`,"--px-swipe-amount-x":`${this.swipeAmountX}px`,"--px-swipe-amount-y":`${this.swipeAmountY}px`,"z-index":this.toastCount-this.visibleIndex}},iconComponent:function(){return{info:this.infoIcon?`span`:P,success:this.successIcon?`span`:O,warn:this.warnIcon?`span`:N,error:this.errorIcon?`span`:E,secondary:this.secondaryIcon?`span`:P,contrast:this.contrastIcon?`span`:P}[this.message.severity]},closeAriaLabel:function(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.close:void 0},dataP:function(){return b(I({},this.message.severity,this.message.severity))}},components:{Times:re,InfoCircle:P,Check:O,ExclamationTriangle:N,TimesCircle:E},directives:{ripple:T}};function U(e){"@babel/helpers - typeof";return U=typeof Symbol==`function`&&typeof Symbol.iterator==`symbol`?function(e){return typeof e}:function(e){return e&&typeof Symbol==`function`&&e.constructor===Symbol&&e!==Symbol.prototype?`symbol`:typeof e},U(e)}function W(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function G(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]==null?{}:arguments[t];t%2?W(Object(n),!0).forEach(function(t){le(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):W(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function le(e,t,n){return(t=ue(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function ue(e){var t=de(e,`string`);return U(t)==`symbol`?t:t+``}function de(e,t){if(U(e)!=`object`||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(U(r)!=`object`)return r;throw TypeError(`@@toPrimitive must return a primitive value.`)}return(t===`string`?String:Number)(e)}var fe=[`aria-hidden`,`data-p`,`data-id`,`data-index`,`data-mounted`,`data-removed`,`data-front`,`data-expanded`,`data-visible`,`data-swiping`,`data-swiped`,`data-swipe-out`,`data-swipe-direction`,`data-dismissible`],K=[`data-p`],pe=[`data-p`],me=[`data-p`],he=[`aria-label`,`tabindex`,`data-p`];function ge(e,t,n,ee,f,m){var _=s(`ripple`);return i(),p(`div`,a({ref:`messageEl`,class:[e.cx(`message`),n.message.styleClass],role:`alert`,"aria-live":`assertive`,"aria-atomic":`true`,"aria-hidden":m.isAriaHidden,"data-p":m.dataP,"data-id":n.message?.id,"data-index":n.index,"data-stack":``,"data-mounted":f.isMounted?``:void 0,"data-removed":f.removed?``:void 0,"data-front":m.visibleIndex===0?``:void 0,"data-expanded":m.isExpanded?``:void 0,"data-visible":m.isVisible?``:void 0,"data-swiping":f.swiping?``:void 0,"data-swiped":f.isSwiped?``:void 0,"data-swipe-out":f.swipeOut?``:void 0,"data-swipe-direction":f.swipeOutDirection?f.swipeOutDirection:void 0,"data-dismissible":String(m.isDismissible()),style:m.stackStyles},e.ptm(`message`),{onClick:t[1]||=function(){return m.onMessageClick&&m.onMessageClick.apply(m,arguments)},onMouseenter:t[2]||=function(){return m.onMessageMouseEnter&&m.onMessageMouseEnter.apply(m,arguments)},onMouseleave:t[3]||=function(){return m.onMessageMouseLeave&&m.onMessageMouseLeave.apply(m,arguments)},onPointerdown:t[4]||=function(){return m.onPointerDown&&m.onPointerDown.apply(m,arguments)},onPointermove:t[5]||=function(){return m.onPointerMove&&m.onPointerMove.apply(m,arguments)},onPointerup:t[6]||=function(){return m.onPointerUp&&m.onPointerUp.apply(m,arguments)},onDragend:t[7]||=function(){return m.onDragEnd&&m.onDragEnd.apply(m,arguments)}}),[n.templates.container?(i(),u(c(n.templates.container),{key:0,message:n.message,closeCallback:m.onCloseClick},null,8,[`message`,`closeCallback`])):(i(),p(`div`,a({key:1,class:[e.cx(`messageContent`),n.message.contentStyleClass]},e.ptm(`messageContent`)),[n.templates.message?(i(),u(c(n.templates.message),{key:1,message:n.message},null,8,[`message`])):(i(),p(h,{key:0},[n.templates.messageicon?(i(),u(c(n.templates.messageicon),a({key:0,message:n.message,class:e.cx(`messageIcon`)},e.ptm(`messageIcon`)),null,16,[`message`,`class`])):m.isComponentIcon(n.message.icon)?(i(),u(c(m.resolveIcon(n.message.icon)),a({key:1,class:e.cx(`messageIcon`)},e.ptm(`messageIcon`)),null,16,[`class`])):n.message.icon?(i(),p(`span`,a({key:2,class:[e.cx(`messageIcon`),n.message.icon]},e.ptm(`messageIcon`)),null,16)):m.iconComponent?(i(),u(c(m.iconComponent),a({key:3,class:e.cx(`messageIcon`)},e.ptm(`messageIcon`)),null,16,[`class`])):d(``,!0),g(`div`,a({class:e.cx(`messageText`),"data-p":m.dataP},e.ptm(`messageText`)),[g(`span`,a({class:e.cx(`summary`),"data-p":m.dataP},e.ptm(`summary`)),r(n.message.summary),17,pe),n.message.detail?(i(),p(`div`,a({key:0,class:e.cx(`detail`),"data-p":m.dataP},e.ptm(`detail`)),r(n.message.detail),17,me)):d(``,!0)],16,K)],64)),n.message.closable===!1?d(``,!0):(i(),p(`div`,o(a({key:2},e.ptm(`buttonContainer`))),[l((i(),p(`button`,a({class:e.cx(`closeButton`),type:`button`,"aria-label":m.closeAriaLabel,tabindex:m.isTabbable?null:-1,onClick:t[0]||=function(){return m.onCloseClick&&m.onCloseClick.apply(m,arguments)},"data-p":m.dataP},G(G({},n.closeButtonProps),e.ptm(`closeButton`))),[(i(),u(c(n.templates.closeicon||`Times`),a({class:[e.cx(`closeIcon`),n.closeIcon]},e.ptm(`closeIcon`)),null,16,[`class`]))],16,he)),[[_]])],16))],16))],16,fe)}H.render=ge;function q(e){"@babel/helpers - typeof";return q=typeof Symbol==`function`&&typeof Symbol.iterator==`symbol`?function(e){return typeof e}:function(e){return e&&typeof Symbol==`function`&&e.constructor===Symbol&&e!==Symbol.prototype?`symbol`:typeof e},q(e)}function J(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function Y(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]==null?{}:arguments[t];t%2?J(Object(n),!0).forEach(function(t){X(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):J(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function X(e,t,n){return(t=_e(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function _e(e){var t=ve(e,`string`);return q(t)==`symbol`?t:t+``}function ve(e,t){if(q(e)!=`object`||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(q(r)!=`object`)return r;throw TypeError(`@@toPrimitive must return a primitive value.`)}return(t===`string`?String:Number)(e)}function Z(e){return Se(e)||xe(e)||be(e)||ye()}function ye(){throw TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function be(e,t){if(e){if(typeof e==`string`)return Q(e,t);var n={}.toString.call(e).slice(8,-1);return n===`Object`&&e.constructor&&(n=e.constructor.name),n===`Map`||n===`Set`?Array.from(e):n===`Arguments`||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Q(e,t):void 0}}function xe(e){if(typeof Symbol<`u`&&e[Symbol.iterator]!=null||e[`@@iterator`]!=null)return Array.from(e)}function Se(e){if(Array.isArray(e))return Q(e)}function Q(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}var Ce=0,$={name:`Toast`,extends:ce,inheritAttrs:!1,emits:[`close`,`life-end`],data:function(){return{messages:[],expanded:!1,removingCount:0,heights:[],isInteracting:!1}},styleElement:null,zIndexClearTimeout:null,mounted:function(){S.on(`add`,this.onAdd),S.on(`remove`,this.onRemove),S.on(`remove-group`,this.onRemoveGroup),S.on(`remove-all-groups`,this.onRemoveAllGroups),this.breakpoints&&this.createStyle()},beforeUnmount:function(){this.destroyStyle(),this.zIndexClearTimeout&&=(clearTimeout(this.zIndexClearTimeout),null),this.$refs.container&&this.autoZIndex&&x.clear(this.$refs.container),S.off(`add`,this.onAdd),S.off(`remove`,this.onRemove),S.off(`remove-group`,this.onRemoveGroup),S.off(`remove-all-groups`,this.onRemoveAllGroups)},methods:{add:function(e){e.id??=Ce++,this.messages=[].concat(Z(this.messages),[e])},remove:function(e){var t=this.messages.findIndex(function(t){return t.id===e.message.id});t!==-1&&(this.messages.splice(t,1),this.heights=this.heights.filter(function(e){return e.index!==t}).map(function(e){return e.index>t?Y(Y({},e),{},{index:e.index-1}):e}),this.messages.length<=1&&(this.expanded=!1),this.$emit(e.type,{message:e.message}))},onAdd:function(e){this.group==e.group&&this.add(e)},onRemove:function(e){this.remove({message:e,type:`close`})},onRemoveGroup:function(e){this.group===e&&(this.messages=[],this.heights=[],this.removingCount=0,this.expanded=!1,this.isInteracting=!1)},onRemoveAllGroups:function(){var e=this,t=this.messages;this.messages=[],this.heights=[],this.removingCount=0,this.expanded=!1,this.isInteracting=!1,t.forEach(function(t){return e.$emit(`close`,{message:t})})},onEnter:function(){this.autoZIndex&&this.$refs.container&&this.$refs.container.style.zIndex===``&&x.set(`modal`,this.$refs.container,this.baseZIndex||this.$primevue.config.zIndex.modal)},onLeave:function(){var e=this;this.$refs.container&&this.autoZIndex&&ne(this.messages)&&(this.zIndexClearTimeout&&clearTimeout(this.zIndexClearTimeout),this.zIndexClearTimeout=setTimeout(function(){x.clear(e.$refs.container),e.zIndexClearTimeout=null},200))},onAfterLeave:function(){this.removingCount=Math.max(0,this.removingCount-1)},onContainerMouseEnter:function(){this.expanded=!0},onContainerMouseLeave:function(e){this.isInteracting||this.isPointerOrFocusInside(e.relatedTarget)||(this.expanded=!1)},onContainerFocusIn:function(){this.expanded=!0},onContainerFocusOut:function(e){this.isInteracting||this.isPointerOrFocusInside(e.relatedTarget)||(this.expanded=!1)},onContainerPointerDown:function(e){var t=e.target;t instanceof HTMLElement&&t.closest(`[data-dismissible="false"]`)||(this.isInteracting=!0)},onContainerPointerUp:function(){this.isInteracting=!1},isPointerOrFocusInside:function(e){var t=this.$refs.container;return!!(e&&t&&t.contains(e))},onItemHeightChange:function(e){if(e.removed){this.heights=this.heights.filter(function(t){return t.index!==e.index}),this.removingCount+=1;return}var t=this.heights.findIndex(function(t){return t.index===e.index});if(t>=0){var n=Z(this.heights);n[t]={index:e.index,height:e.height},this.heights=n}else this.heights=[].concat(Z(this.heights),[{index:e.index,height:e.height}]).sort(function(e,t){return e.index-t.index})},getVisibleIndex:function(e){return this.visibleIndexMap.get(e)??this.messages.length-1-e},getOffset:function(e){var t=this.visibleIndexMap.get(e)??0;return this.offsets[t]??0},getIsVisible:function(e){return this.visibleDomIndices.has(e)},createStyle:function(){if(!this.styleElement&&!this.isUnstyled){var e;this.styleElement=document.createElement(`style`),this.styleElement.type=`text/css`,v(this.styleElement,`nonce`,(e=this.$primevue)==null||(e=e.config)==null||(e=e.csp)==null?void 0:e.nonce),document.head.appendChild(this.styleElement);var t=``;for(var n in this.breakpoints){var r=``;for(var i in this.breakpoints[n])r+=i+`:`+this.breakpoints[n][i]+`!important;`;t+=`
                        @media screen and (max-width: ${n}) {
                            .p-toast[${this.$attrSelector}] {
                                ${r}
                            }
                        }
                    `}this.styleElement.innerHTML=t}},destroyStyle:function(){this.styleElement&&=(document.head.removeChild(this.styleElement),null)}},computed:{isExpanded:function(){return this.mode===`expanded`||this.expanded},sortedHeights:function(){return Z(this.heights).sort(function(e,t){return t.index-e.index})},frontToastHeight:function(){return this.sortedHeights[0]?.height??0},offsets:function(){for(var e=this.sortedHeights,t=[0],n=1;n<e.length;n++)t[n]=t[n-1]+e[n-1].height;return t},visibleIndexMap:function(){var e=new Map;return this.sortedHeights.forEach(function(t,n){return e.set(t.index,n)}),e},visibleDomIndices:function(){return new Set(this.sortedHeights.slice(0,this.limit).map(function(e){return e.index}))},raiseFactor:function(){return(this.position||``).startsWith(`bottom`)?-1:1},hostDataExpanded:function(){return this.isExpanded?``:null},containerStyle:function(){return[this.sx(`root`,!0,{position:this.position}),{"--px-gap":`${this.gap}px`,"--px-front-toast-height":`${this.frontToastHeight}px`,"--px-raise-factor":this.raiseFactor}]},dataP:function(){return b(X({},this.position,this.position))}},components:{ToastMessage:H,Portal:D}},we=[`data-p`,`data-position`,`data-expanded`];function Te(t,r,o,s,c,l){var d=n(`ToastMessage`),f=n(`Portal`);return i(),u(f,null,{default:ee(function(){return[g(`div`,a({ref:`container`,class:t.cx(`root`),style:l.containerStyle,"data-p":l.dataP,"data-position":t.position,"data-expanded":l.hostDataExpanded},t.ptmi(`root`),{onMouseenter:r[1]||=function(){return l.onContainerMouseEnter&&l.onContainerMouseEnter.apply(l,arguments)},onMouseleave:r[2]||=function(){return l.onContainerMouseLeave&&l.onContainerMouseLeave.apply(l,arguments)},onFocusin:r[3]||=function(){return l.onContainerFocusIn&&l.onContainerFocusIn.apply(l,arguments)},onFocusout:r[4]||=function(){return l.onContainerFocusOut&&l.onContainerFocusOut.apply(l,arguments)},onPointerdown:r[5]||=function(){return l.onContainerPointerDown&&l.onContainerPointerDown.apply(l,arguments)},onPointerup:r[6]||=function(){return l.onContainerPointerUp&&l.onContainerPointerUp.apply(l,arguments)}}),[(i(!0),p(h,null,e(c.messages,function(e,n){return i(),u(d,{key:e.id,index:n,message:e,templates:t.$slots,closeIcon:t.closeIcon,infoIcon:t.infoIcon,warnIcon:t.warnIcon,errorIcon:t.errorIcon,successIcon:t.successIcon,secondaryIcon:t.secondaryIcon,contrastIcon:t.contrastIcon,closeButtonProps:t.closeButtonProps,onMouseEnter:t.onMouseEnter,onMouseLeave:t.onMouseLeave,onClick:t.onClick,unstyled:t.unstyled,onClose:r[0]||=function(e){return l.remove(e)},pt:t.pt},null,8,[`index`,`message`,`templates`,`closeIcon`,`infoIcon`,`warnIcon`,`errorIcon`,`successIcon`,`secondaryIcon`,`contrastIcon`,`closeButtonProps`,`onMouseEnter`,`onMouseLeave`,`onClick`,`unstyled`,`pt`])}),128))],16,we)]}),_:1})}$.render=Te;export{$ as default};