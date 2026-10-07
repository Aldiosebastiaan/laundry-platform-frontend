import{C as e,H as t,It as n,L as r,Nt as i,O as a,Pt as o,V as s,W as c,X as l,Y as u,d,f,p,u as m,y as h}from"./BQHyKCNA.js";import{o as g,t as _}from"./DhGtpQ-w.js";import{n as v}from"./4XRHhTMS.js";import{t as y}from"./CEAV8Kzl.js";import{t as b}from"./B-GjYb7s.js";import{t as x}from"./DIdo_cGh.js";import{n as S}from"./_cFRa2an.js";import{t as C}from"./sF1FGblM.js";import{t as w}from"./D4UDorhB.js";var T=v.extend({name:`panel`,style:`
    .p-panel {
        display: block;
        border: 1px solid dt('panel.border.color');
        border-radius: dt('panel.border.radius');
        background: dt('panel.background');
        color: dt('panel.color');
    }

    .p-panel-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: dt('panel.header.padding');
        background: dt('panel.header.background');
        color: dt('panel.header.color');
        border-style: solid;
        border-width: dt('panel.header.border.width');
        border-color: dt('panel.header.border.color');
        border-radius: dt('panel.header.border.radius');
    }

    .p-panel-toggleable .p-panel-header {
        padding: dt('panel.toggleable.header.padding');
    }

    .p-panel-title {
        font-weight: dt('panel.title.font.weight');
        font-size: dt('panel.title.font.size');
    }

    .p-panel-content-container {
        display: grid;
        grid-template-rows: 1fr;
    }

    .p-panel-content-wrapper {
        min-height: 0;
    }

    .p-panel-content {
        padding: dt('panel.content.padding');
    }

    .p-panel-footer {
        padding: dt('panel.footer.padding');
    }

    .p-panel-trigger {
        cursor: pointer;
    }
`,classes:{root:function(e){return[`p-panel p-component`,{"p-panel-toggleable":e.props.toggleable}]},header:`p-panel-header`,title:`p-panel-title`,headerActions:`p-panel-header-actions`,pcToggleButton:`p-panel-toggle-button`,contentContainer:`p-panel-content-container`,contentWrapper:`p-panel-content-wrapper`,content:`p-panel-content`,footer:`p-panel-footer`}}),E={name:`Panel`,extends:{name:`BasePanel`,extends:b,props:{header:String,toggleable:Boolean,collapsed:Boolean,toggleButtonProps:{type:Object,default:function(){return{severity:`secondary`,text:!0,rounded:!0,iconOnly:!0}}}},style:T,provide:function(){return{$pcPanel:this,$parentInstance:this}}},inheritAttrs:!1,emits:[`update:collapsed`,`toggle`],data:function(){return{d_collapsed:this.collapsed}},watch:{collapsed:function(e){this.d_collapsed=e}},methods:{toggle:function(e){this.d_collapsed=!this.d_collapsed,this.$emit(`update:collapsed`,this.d_collapsed),this.$emit(`toggle`,{originalEvent:e,value:this.d_collapsed})},onKeyDown:function(e){(e.code===`Enter`||e.code===`NumpadEnter`||e.code===`Space`)&&(this.toggle(e),e.preventDefault())}},computed:{buttonAriaLabel:function(){return this.toggleButtonProps&&this.toggleButtonProps.ariaLabel?this.toggleButtonProps.ariaLabel:this.header},dataP:function(){return y({toggleable:this.toggleable})}},components:{Plus:w,Minus:C,Button:S},directives:{ripple:x}},D=[`data-p`],O=[`data-p`],k=[`id`],A=[`id`,`aria-labelledby`];function j(v,y,b,x,S,C){var w=t(`Button`);return r(),p(`div`,a({class:v.cx(`root`),"data-p":C.dataP},v.ptmi(`root`)),[m(`div`,a({class:v.cx(`header`),"data-p":C.dataP},v.ptm(`header`)),[s(v.$slots,`header`,{id:v.$id+`_header`,class:i(v.cx(`title`)),collapsed:S.d_collapsed},function(){return[v.header?(r(),p(`span`,a({key:0,id:v.$id+`_header`,class:v.cx(`title`)},v.ptm(`title`)),n(v.header),17,k)):f(``,!0)]}),m(`div`,a({class:v.cx(`headerActions`)},v.ptm(`headerActions`)),[s(v.$slots,`icons`),v.toggleable?s(v.$slots,`togglebutton`,{collapsed:S.d_collapsed,toggleCallback:function(e){return C.toggle(e)},keydownCallback:function(e){return C.onKeyDown(e)}},function(){return[h(w,a({id:v.$id+`_header`,class:v.cx(`pcToggleButton`),"aria-label":C.buttonAriaLabel,"aria-controls":v.$id+`_content`,"aria-expanded":!S.d_collapsed,unstyled:v.unstyled,onClick:y[0]||=function(e){return C.toggle(e)},onKeydown:y[1]||=function(e){return C.onKeyDown(e)}},v.toggleButtonProps,{pt:v.ptm(`pcToggleButton`)}),{default:u(function(){return[s(v.$slots,`toggleicon`,{collapsed:S.d_collapsed},function(){return[(r(),d(c(S.d_collapsed?`Plus`:`Minus`),o(e(v.ptm(`pcToggleButton`).icon)),null,16))]})]}),_:3},16,[`id`,`class`,`aria-label`,`aria-controls`,`aria-expanded`,`unstyled`,`pt`])]},void 0,0):f(``,!0)],16)],16,O),h(_,a({name:`p-collapsible`},v.ptm(`transition`)),{default:u(function(){return[l(m(`div`,a({id:v.$id+`_content`,class:v.cx(`contentContainer`),role:`region`,"aria-labelledby":v.$id+`_header`},v.ptm(`contentContainer`)),[m(`div`,a({class:v.cx(`contentWrapper`)},v.ptm(`contentWrapper`)),[m(`div`,a({class:v.cx(`content`)},v.ptm(`content`)),[s(v.$slots,`default`)],16),v.$slots.footer?(r(),p(`div`,a({key:0,class:v.cx(`footer`)},v.ptm(`footer`)),[s(v.$slots,`footer`)],16)):f(``,!0)],16)],16,A),[[g,!S.d_collapsed]])]}),_:3},16)],16,D)}E.render=j;export{E as default};