import{B as e,H as t,It as n,L as r,Nt as i,O as a,V as o,W as s,d as c,f as l,lt as u,p as d,r as f,u as p,y as m}from"./BQHyKCNA.js";import{gt as h,n as g}from"./4XRHhTMS.js";import{t as _}from"./CEAV8Kzl.js";import{t as v}from"./B-GjYb7s.js";var y=g.extend({name:`metergroup`,style:`
    .p-metergroup {
        display: flex;
        gap: dt('metergroup.gap');
    }

    .p-metergroup-meters {
        display: flex;
        background: dt('metergroup.meters.background');
        border-radius: dt('metergroup.border.radius');
    }

    .p-metergroup-label-list {
        display: flex;
        flex-wrap: wrap;
        margin: 0;
        padding: 0;
        list-style-type: none;
    }

    .p-metergroup-label {
        display: inline-flex;
        align-items: center;
        gap: dt('metergroup.label.gap');
    }

    .p-metergroup-label-marker {
        display: inline-flex;
        width: dt('metergroup.label.marker.size');
        height: dt('metergroup.label.marker.size');
        border-radius: 100%;
    }

    .p-metergroup-label-text {
        font-weight: dt('metergroup.label.text.font.weight');
        font-size: dt('metergroup.label.text.font.size');
    }

    .p-metergroup-label-icon {
        font-size: dt('metergroup.label.icon.size');
        width: dt('metergroup.label.icon.size');
        height: dt('metergroup.label.icon.size');
    }

    .p-metergroup-horizontal {
        flex-direction: column;
    }

    .p-metergroup-label-list-horizontal {
        gap: dt('metergroup.label.list.horizontal.gap');
    }

    .p-metergroup-horizontal .p-metergroup-meters {
        height: dt('metergroup.meters.size');
    }

    .p-metergroup-horizontal .p-metergroup-meter:first-of-type {
        border-start-start-radius: dt('metergroup.border.radius');
        border-end-start-radius: dt('metergroup.border.radius');
    }

    .p-metergroup-horizontal .p-metergroup-meter:last-of-type {
        border-start-end-radius: dt('metergroup.border.radius');
        border-end-end-radius: dt('metergroup.border.radius');
    }

    .p-metergroup-vertical {
        flex-direction: row;
    }

    .p-metergroup-label-list-vertical {
        flex-direction: column;
        gap: dt('metergroup.label.list.vertical.gap');
    }

    .p-metergroup-vertical .p-metergroup-meters {
        flex-direction: column;
        width: dt('metergroup.meters.size');
        height: 100%;
    }

    .p-metergroup-vertical .p-metergroup-label-list {
        align-items: flex-start;
    }

    .p-metergroup-vertical .p-metergroup-meter:first-of-type {
        border-start-start-radius: dt('metergroup.border.radius');
        border-start-end-radius: dt('metergroup.border.radius');
    }

    .p-metergroup-vertical .p-metergroup-meter:last-of-type {
        border-end-start-radius: dt('metergroup.border.radius');
        border-end-end-radius: dt('metergroup.border.radius');
    }
`,classes:{root:function(e){var t=e.props;return[`p-metergroup p-component`,{"p-metergroup-horizontal":t.orientation===`horizontal`,"p-metergroup-vertical":t.orientation===`vertical`}]},meters:`p-metergroup-meters`,meter:`p-metergroup-meter`,labelList:function(e){var t=e.props;return[`p-metergroup-label-list`,{"p-metergroup-label-list-vertical":t.labelOrientation===`vertical`,"p-metergroup-label-list-horizontal":t.labelOrientation===`horizontal`}]},label:`p-metergroup-label`,labelIcon:`p-metergroup-label-icon`,labelMarker:`p-metergroup-label-marker`,labelText:`p-metergroup-label-text`}}),b={name:`MeterGroup`,extends:v,props:{value:{type:Array,default:null},min:{type:Number,default:0},max:{type:Number,default:100},orientation:{type:String,default:`horizontal`},labelPosition:{type:String,default:`end`},labelOrientation:{type:String,default:`horizontal`}},style:y,provide:function(){return{$pcMeterGroup:this,$parentInstance:this}}};function x(e){"@babel/helpers - typeof";return x=typeof Symbol==`function`&&typeof Symbol.iterator==`symbol`?function(e){return typeof e}:function(e){return e&&typeof Symbol==`function`&&e.constructor===Symbol&&e!==Symbol.prototype?`symbol`:typeof e},x(e)}function S(e,t,n){return(t=C(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function C(e){var t=w(e,`string`);return x(t)==`symbol`?t:t+``}function w(e,t){if(x(e)!=`object`||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(x(r)!=`object`)return r;throw TypeError(`@@toPrimitive must return a primitive value.`)}return(t===`string`?String:Number)(e)}var T={name:`MeterGroupLabel`,hostName:`MeterGroup`,extends:v,inheritAttrs:!1,props:{value:{type:Array,default:null},labelPosition:{type:String,default:`end`},labelOrientation:{type:String,default:`horizontal`}},inject:[`$pcMeterGroup`],methods:{resolveIcon:function(e){return h(e)?e:u(e)},isComponentIcon:function(e){return!!e&&!h(e)}},computed:{dataP:function(){return _(S({},this.$pcMeterGroup.labelOrientation,this.$pcMeterGroup.labelOrientation))}}},E=[`data-p`];function D(t,l,u,m,h,g){return r(),d(`ol`,a({class:t.cx(`labelList`),"data-p":g.dataP},t.ptm(`labelList`)),[(r(!0),d(f,null,e(u.value,function(e,l){return r(),d(`li`,a({key:l+`_label`,class:t.cx(`label`)},{ref_for:!0},t.ptm(`label`)),[o(t.$slots,`icon`,{value:e,class:i(t.cx(`labelIcon`))},function(){return[g.isComponentIcon(e.icon)?(r(),c(s(g.resolveIcon(e.icon)),a({key:0,class:t.cx(`labelIcon`),style:{color:e.color}},{ref_for:!0},t.ptm(`labelIcon`)),null,16,[`class`,`style`])):e.icon?(r(),d(`i`,a({key:1,class:[e.icon,t.cx(`labelIcon`)],style:{color:e.color}},{ref_for:!0},t.ptm(`labelIcon`)),null,16)):(r(),d(`span`,a({key:2,class:t.cx(`labelMarker`),style:{backgroundColor:e.color}},{ref_for:!0},t.ptm(`labelMarker`)),null,16))]}),p(`span`,a({class:t.cx(`labelText`)},{ref_for:!0},t.ptm(`labelText`)),n(e.label)+` (`+n(t.$parentInstance.percentValue(e.value))+`)`,17)],16)}),128))],16,E)}T.render=D;function O(e){"@babel/helpers - typeof";return O=typeof Symbol==`function`&&typeof Symbol.iterator==`symbol`?function(e){return typeof e}:function(e){return e&&typeof Symbol==`function`&&e.constructor===Symbol&&e!==Symbol.prototype?`symbol`:typeof e},O(e)}function k(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function A(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]==null?{}:arguments[t];t%2?k(Object(n),!0).forEach(function(t){j(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):k(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function j(e,t,n){return(t=M(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function M(e){var t=N(e,`string`);return O(t)==`symbol`?t:t+``}function N(e,t){if(O(e)!=`object`||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(O(r)!=`object`)return r;throw TypeError(`@@toPrimitive must return a primitive value.`)}return(t===`string`?String:Number)(e)}var P={name:`MeterGroup`,extends:b,inheritAttrs:!1,methods:{getPTOptions:function(e,t,n){return this.ptm(e,{context:{value:t,index:n}})},percent:function(){var e=((arguments.length>0&&arguments[0]!==void 0?arguments[0]:0)-this.min)/(this.max-this.min)*100;return Math.max(0,Math.min(100,e))},roundedPercent:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:0;return Math.round(this.percent(e))},percentValue:function(e){return this.roundedPercent(e)+`%`},meterCalculatedStyles:function(e){return{backgroundColor:e.color,width:this.orientation===`horizontal`&&this.percent(e.value)+`%`,height:this.orientation===`vertical`&&this.percent(e.value)+`%`}},resolveIcon:function(e){return h(e)?e:u(e)},isComponentIcon:function(e){return!!e&&!h(e)}},computed:{labelValue:function(){var e=this;return Array.isArray(this.value)?this.value.map(function(t){return t!=null&&t.icon?A(A({},t),{},{icon:e.resolveIcon(t.icon)}):t}):this.value},totalPercent:function(){return this.roundedPercent(this.value.reduce(function(e,t){return e+t.value},0))},percentages:function(){var e=0,t=[];return this.value.forEach(function(n){e+=n.value,t.push(e)}),t},dataP:function(){return _(j({},this.orientation,this.orientation))}},components:{MeterGroupLabel:T}},F=[`aria-valuemin`,`aria-valuemax`,`aria-valuenow`,`data-p`],I=[`data-p`],L=[`data-p`];function R(n,s,c,u,h,g){var _=t(`MeterGroupLabel`);return r(),d(`div`,a({class:n.cx(`root`),role:`meter`,"aria-valuemin":n.min,"aria-valuemax":n.max,"aria-valuenow":g.totalPercent,"data-p":g.dataP},n.ptmi(`root`)),[n.labelPosition===`start`?o(n.$slots,`label`,{value:g.labelValue,totalPercent:g.totalPercent,percentages:g.percentages},function(){return[m(_,{value:n.value,labelPosition:n.labelPosition,labelOrientation:n.labelOrientation,unstyled:n.unstyled,pt:n.pt},null,8,[`value`,`labelPosition`,`labelOrientation`,`unstyled`,`pt`])]},void 0,0):l(``,!0),o(n.$slots,`start`,{value:n.value,totalPercent:g.totalPercent,percentages:g.percentages}),p(`div`,a({class:n.cx(`meters`),"data-p":g.dataP},n.ptm(`meters`)),[(r(!0),d(f,null,e(n.value,function(e,t){return o(n.$slots,`meter`,{value:e,index:t,class:i(n.cx(`meter`)),orientation:n.orientation,size:g.percentValue(e.value),totalPercent:g.totalPercent},function(){return[g.roundedPercent(e.value)?(r(),d(`span`,a({key:0,class:n.cx(`meter`),style:g.meterCalculatedStyles(e),"data-p":g.dataP},{ref_for:!0},g.getPTOptions(`meter`,e,t)),null,16,L)):l(``,!0)]},void 0,t)}),128))],16,I),o(n.$slots,`end`,{value:n.value,totalPercent:g.totalPercent,percentages:g.percentages}),n.labelPosition===`end`?o(n.$slots,`label`,{value:g.labelValue,totalPercent:g.totalPercent,percentages:g.percentages},function(){return[m(_,{value:n.value,labelPosition:n.labelPosition,labelOrientation:n.labelOrientation,unstyled:n.unstyled,pt:n.pt},null,8,[`value`,`labelPosition`,`labelOrientation`,`unstyled`,`pt`])]},void 0,1):l(``,!0)],16,F)}P.render=R;export{P as default};