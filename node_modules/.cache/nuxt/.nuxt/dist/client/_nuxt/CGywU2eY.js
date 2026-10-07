import{B as e,H as t,It as n,L as r,Nt as i,O as a,V as o,W as s,d as c,f as l,lt as u,p as d,r as f,u as p,y as m}from"./BQHyKCNA.js";import{gt as h,n as g}from"./4XRHhTMS.js";import{t as _}from"./B-GjYb7s.js";import{t as v}from"./2K5YFpmr.js";var y=g.extend({name:`breadcrumb`,style:`
    .p-breadcrumb {
        background: dt('breadcrumb.background');
        padding: dt('breadcrumb.padding');
        overflow-x: auto;
    }

    .p-breadcrumb-list {
        margin: 0;
        padding: 0;
        list-style-type: none;
        display: flex;
        align-items: center;
        flex-wrap: nowrap;
        gap: dt('breadcrumb.gap');
    }

    .p-breadcrumb-separator {
        display: flex;
        align-items: center;
        color: dt('breadcrumb.separator.color');
    }

    .p-breadcrumb-separator-icon:dir(rtl) {
        transform: rotate(180deg);
    }

    .p-breadcrumb::-webkit-scrollbar {
        display: none;
    }

    .p-breadcrumb-item-link {
        text-decoration: none;
        display: flex;
        align-items: center;
        gap: dt('breadcrumb.item.gap');
        transition:
            background dt('breadcrumb.transition.duration'),
            color dt('breadcrumb.transition.duration'),
            outline-color dt('breadcrumb.transition.duration'),
            box-shadow dt('breadcrumb.transition.duration');
        border-radius: dt('breadcrumb.item.border.radius');
        outline-color: transparent;
        color: dt('breadcrumb.item.color');
        font-weight: dt('breadcrumb.item.label.font.weight');
        font-size: dt('breadcrumb.item.label.font.size');
    }

    .p-breadcrumb-item-link:focus-visible {
        box-shadow: dt('breadcrumb.item.focus.ring.shadow');
        outline: dt('breadcrumb.item.focus.ring.width') dt('breadcrumb.item.focus.ring.style') dt('breadcrumb.item.focus.ring.color');
        outline-offset: dt('breadcrumb.item.focus.ring.offset');
    }

    .p-breadcrumb-item-link:hover,
    .p-breadcrumb-item-link:hover .p-breadcrumb-item-label {
        color: dt('breadcrumb.item.hover.color');
    }

    .p-breadcrumb-item-label {
        transition: inherit;
        font-weight: dt('breadcrumb.item.label.font.weight');
        font-size: dt('breadcrumb.item.label.font.size');
    }

    .p-breadcrumb-item-icon,
    .p-breadcrumb-item-link svg,
    .p-breadcrumb-item-link i {
        color: dt('breadcrumb.item.icon.color');
        width: dt('breadcrumb.item.icon.size');
        height: dt('breadcrumb.item.icon.size');
        transition: inherit;
    }

    .p-breadcrumb-item-link i {
        font-size: dt('breadcrumb.item.icon.size');
    }

    .p-breadcrumb-item-link:hover .p-breadcrumb-item-icon,
    .p-breadcrumb-item-link:hover svg,
    .p-breadcrumb-item-link:hover i {
        color: dt('breadcrumb.item.icon.hover.color');
    }

    .p-breadcrumb-ellipsis {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        color: dt('breadcrumb.item.icon.color');
    }
`,classes:{root:`p-breadcrumb p-component`,list:`p-breadcrumb-list`,homeItem:`p-breadcrumb-home-item`,separator:`p-breadcrumb-separator`,separatorIcon:`p-breadcrumb-separator-icon`,item:function(e){return[`p-breadcrumb-item`,{"p-disabled":e.instance.disabled()}]},itemLink:`p-breadcrumb-item-link`,itemIcon:`p-breadcrumb-item-icon`,itemLabel:`p-breadcrumb-item-label`}}),b={name:`BaseBreadcrumb`,extends:_,props:{model:{type:Array,default:null},home:{type:null,default:null}},style:y,provide:function(){return{$pcBreadcrumb:this,$parentInstance:this}}},x={name:`BreadcrumbItem`,hostName:`Breadcrumb`,extends:_,props:{item:null,templates:null,index:null},methods:{onClick:function(e){this.item.command&&this.item.command({originalEvent:e,item:this.item})},visible:function(){return typeof this.item.visible==`function`?this.item.visible():this.item.visible!==!1},disabled:function(){return typeof this.item.disabled==`function`?this.item.disabled():this.item.disabled},label:function(){return typeof this.item.label==`function`?this.item.label():this.item.label},isCurrentUrl:function(){var e=this.item,t=e.to,n=e.url,r=typeof window<`u`?window.location.pathname:``;return t===r||n===r?`page`:void 0},resolveIcon:function(e){return h(e)?e:u(e)},isComponentIcon:function(e){return!!e&&!h(e)}},computed:{ptmOptions:function(){return{context:{item:this.item,index:this.index}}},getMenuItemProps:function(){var e=this;return{action:a({class:this.cx(`itemLink`),"aria-current":this.isCurrentUrl(),onClick:function(t){return e.onClick(t)}},this.ptm(`itemLink`,this.ptmOptions)),icon:a({class:[this.cx(`itemIcon`),h(this.item.icon)?this.item.icon:void 0]},this.ptm(`itemIcon`,this.ptmOptions)),label:a({class:this.cx(`itemLabel`)},this.ptm(`itemLabel`,this.ptmOptions))}}}},S=[`href`,`target`,`aria-current`];function C(e,t,o,u,f,p){return p.visible()?(r(),d(`li`,a({key:0,class:[e.cx(`item`),o.item.class]},e.ptm(`item`,p.ptmOptions)),[o.templates.item?(r(),c(s(o.templates.item),{key:1,item:o.item,label:p.label(),icon:o.item.icon?p.resolveIcon(o.item.icon):void 0,props:p.getMenuItemProps},null,8,[`item`,`label`,`icon`,`props`])):(r(),d(`a`,a({key:0,href:o.item.url||`#`,class:e.cx(`itemLink`),target:o.item.target,"aria-current":p.isCurrentUrl(),onClick:t[0]||=function(){return p.onClick&&p.onClick.apply(p,arguments)}},e.ptm(`itemLink`,p.ptmOptions)),[o.templates&&o.templates.itemicon?(r(),c(s(o.templates.itemicon),{key:0,item:o.item,class:i(e.cx(`itemIcon`,p.ptmOptions))},null,8,[`item`,`class`])):p.isComponentIcon(o.item.icon)?(r(),c(s(p.resolveIcon(o.item.icon)),a({key:1,class:e.cx(`itemIcon`)},e.ptm(`itemIcon`,p.ptmOptions)),null,16,[`class`])):o.item.icon?(r(),d(`span`,a({key:2,class:[e.cx(`itemIcon`),o.item.icon]},e.ptm(`itemIcon`,p.ptmOptions)),null,16)):l(``,!0),o.item.label?(r(),d(`span`,a({key:3,class:e.cx(`itemLabel`)},e.ptm(`itemLabel`,p.ptmOptions)),n(p.label()),17)):l(``,!0)],16,S))],16)):l(``,!0)}x.render=C;var w={name:`Breadcrumb`,extends:b,inheritAttrs:!1,components:{BreadcrumbItem:x,ChevronRight:v}};function T(n,i,s,u,h,g){var _=t(`BreadcrumbItem`),v=t(`ChevronRight`);return r(),d(`nav`,a({class:n.cx(`root`)},n.ptmi(`root`)),[p(`ol`,a({class:n.cx(`list`)},n.ptm(`list`)),[n.home?(r(),c(_,a({key:0,item:n.home,class:n.cx(`homeItem`),templates:n.$slots,pt:n.pt,unstyled:n.unstyled},n.ptm(`homeItem`)),null,16,[`item`,`class`,`templates`,`pt`,`unstyled`])):l(``,!0),(r(!0),d(f,null,e(n.model,function(e,t){return r(),d(f,{key:e.label+`_`+t},[n.home||t!==0?(r(),d(`li`,a({key:0,class:n.cx(`separator`)},{ref_for:!0},n.ptm(`separator`)),[o(n.$slots,`separator`,{},function(){return[m(v,a({"aria-hidden":`true`,class:n.cx(`separatorIcon`)},{ref_for:!0},n.ptm(`separatorIcon`)),null,16,[`class`])]})],16)):l(``,!0),m(_,{item:e,index:t,templates:n.$slots,pt:n.pt,unstyled:n.unstyled},null,8,[`item`,`index`,`templates`,`pt`,`unstyled`])],64)}),128))],16)],16)}w.render=T;export{w as default};