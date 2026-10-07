import{B as e,H as t,It as n,L as r,Nt as i,O as a,U as o,V as s,W as c,X as l,Y as u,d,f,lt as p,p as m,r as h,u as g,y as _}from"./BQHyKCNA.js";import{o as v,t as y}from"./DhGtpQ-w.js";import{H as b,K as x,N as S,gt as C,ht as w,kt as T,n as E,pt as D,ut as O,wt as k,xt as A}from"./4XRHhTMS.js";import{t as j}from"./B-GjYb7s.js";import{t as M}from"./B2qXdBnq.js";import{t as N}from"./DIdo_cGh.js";import{t as P}from"./2K5YFpmr.js";var F=E.extend({name:`panelmenu`,style:`
    .p-panelmenu {
        display: flex;
        flex-direction: column;
        gap: dt('panelmenu.gap');
    }

    .p-panelmenu-panel {
        background: dt('panelmenu.panel.background');
        border-width: dt('panelmenu.panel.border.width');
        border-style: solid;
        border-color: dt('panelmenu.panel.border.color');
        color: dt('panelmenu.panel.color');
        border-radius: dt('panelmenu.panel.border.radius');
        padding: dt('panelmenu.panel.padding');
    }

    .p-panelmenu-panel:first-child {
        border-width: dt('panelmenu.panel.first.border.width');
        border-start-start-radius: dt('panelmenu.panel.first.top.border.radius');
        border-start-end-radius: dt('panelmenu.panel.first.top.border.radius');
    }

    .p-panelmenu-panel:last-child {
        border-width: dt('panelmenu.panel.last.border.width');
        border-end-start-radius: dt('panelmenu.panel.last.bottom.border.radius');
        border-end-end-radius: dt('panelmenu.panel.last.bottom.border.radius');
    }

    .p-panelmenu-header {
        outline: 0 none;
    }

    .p-panelmenu-header-content {
        border-radius: dt('panelmenu.item.border.radius');
        transition:
            background dt('panelmenu.transition.duration'),
            color dt('panelmenu.transition.duration'),
            outline-color dt('panelmenu.transition.duration'),
            box-shadow dt('panelmenu.transition.duration');
        outline-color: transparent;
        color: dt('panelmenu.item.color');
    }

    .p-panelmenu-header-link {
        display: flex;
        gap: dt('panelmenu.item.gap');
        padding: dt('panelmenu.item.padding');
        align-items: center;
        user-select: none;
        cursor: pointer;
        position: relative;
        text-decoration: none;
        color: inherit;
    }

    .p-panelmenu-header-icon,
    .p-panelmenu-item-icon {
        color: dt('panelmenu.item.icon.color');
        font-size: dt('panelmenu.item.icon.size');
        width: dt('panelmenu.item.icon.size');
        height: dt('panelmenu.item.icon.size');
    }

    .p-panelmenu-submenu-icon {
        color: dt('panelmenu.submenu.icon.color');
    }

    .p-panelmenu-submenu-icon:dir(rtl) {
        transform: rotate(180deg);
    }

    .p-panelmenu-header:not(.p-disabled):focus-visible .p-panelmenu-header-content {
        background: dt('panelmenu.item.focus.background');
        color: dt('panelmenu.item.focus.color');
    }

    .p-panelmenu-header:not(.p-disabled):focus-visible .p-panelmenu-header-content .p-panelmenu-header-icon {
        color: dt('panelmenu.item.icon.focus.color');
    }

    .p-panelmenu-header:not(.p-disabled):focus-visible .p-panelmenu-header-content .p-panelmenu-submenu-icon {
        color: dt('panelmenu.submenu.icon.focus.color');
    }

    .p-panelmenu-header:not(.p-disabled) .p-panelmenu-header-content:hover {
        background: dt('panelmenu.item.focus.background');
        color: dt('panelmenu.item.focus.color');
    }

    .p-panelmenu-header:not(.p-disabled) .p-panelmenu-header-content:hover .p-panelmenu-header-icon {
        color: dt('panelmenu.item.icon.focus.color');
    }

    .p-panelmenu-header:not(.p-disabled) .p-panelmenu-header-content:hover .p-panelmenu-submenu-icon {
        color: dt('panelmenu.submenu.icon.focus.color');
    }

    .p-panelmenu-submenu {
        margin: 0;
        padding: 0 0 0 dt('panelmenu.submenu.indent');
        outline: 0;
        list-style: none;
    }

    .p-panelmenu-submenu:dir(rtl) {
        padding: 0 dt('panelmenu.submenu.indent') 0 0;
    }

    .p-panelmenu-item-link {
        display: flex;
        gap: dt('panelmenu.item.gap');
        padding: dt('panelmenu.item.padding');
        align-items: center;
        user-select: none;
        cursor: pointer;
        text-decoration: none;
        color: inherit;
        position: relative;
        overflow: hidden;
    }

    .p-panelmenu-item-label {
        font-weight: dt('panelmenu.item.label.font.weight');
        font-size: dt('panelmenu.item.label.font.size');
    }

    .p-panelmenu-item-content {
        border-radius: dt('panelmenu.item.border.radius');
        transition:
            background dt('panelmenu.transition.duration'),
            color dt('panelmenu.transition.duration'),
            outline-color dt('panelmenu.transition.duration'),
            box-shadow dt('panelmenu.transition.duration');
        color: dt('panelmenu.item.color');
        outline-color: transparent;
    }

    .p-panelmenu-item.p-focus > .p-panelmenu-item-content {
        background: dt('panelmenu.item.focus.background');
        color: dt('panelmenu.item.focus.color');
    }

    .p-panelmenu-item.p-focus > .p-panelmenu-item-content .p-panelmenu-item-icon {
        color: dt('panelmenu.item.focus.color');
    }

    .p-panelmenu-item.p-focus > .p-panelmenu-item-content .p-panelmenu-submenu-icon {
        color: dt('panelmenu.submenu.icon.focus.color');
    }

    .p-panelmenu-item:not(.p-disabled) > .p-panelmenu-item-content:hover {
        background: dt('panelmenu.item.focus.background');
        color: dt('panelmenu.item.focus.color');
    }

    .p-panelmenu-item:not(.p-disabled) > .p-panelmenu-item-content:hover .p-panelmenu-item-icon {
        color: dt('panelmenu.item.icon.focus.color');
    }

    .p-panelmenu-item:not(.p-disabled) > .p-panelmenu-item-content:hover .p-panelmenu-submenu-icon {
        color: dt('panelmenu.submenu.icon.focus.color');
    }

    .p-panelmenu-content-container {
        display: grid;
        grid-template-rows: 1fr;
    }

    .p-panelmenu-content-wrapper {
        min-height: 0;
    }
`,classes:{root:`p-panelmenu p-component`,panel:`p-panelmenu-panel`,header:function(e){var t=e.instance,n=e.item;return[`p-panelmenu-header`,{"p-panelmenu-header-active":t.isItemActive(n)&&!!n.items,"p-disabled":t.isItemDisabled(n)}]},headerContent:`p-panelmenu-header-content`,headerLink:`p-panelmenu-header-link`,headerIcon:`p-panelmenu-header-icon`,headerLabel:`p-panelmenu-header-label`,contentContainer:`p-panelmenu-content-container`,contentWrapper:`p-panelmenu-content-wrapper`,content:`p-panelmenu-content`,rootList:`p-panelmenu-root-list`,item:function(e){var t=e.instance,n=e.processedItem;return[`p-panelmenu-item`,{"p-focus":t.isItemFocused(n),"p-disabled":t.isItemDisabled(n)}]},itemContent:`p-panelmenu-item-content`,itemLink:`p-panelmenu-item-link`,itemIcon:`p-panelmenu-item-icon`,itemLabel:`p-panelmenu-item-label`,submenuIcon:`p-panelmenu-submenu-icon`,submenu:`p-panelmenu-submenu`,separator:`p-menuitem-separator`}}),I={name:`BasePanelMenu`,extends:j,props:{model:{type:Array,default:null},expandedKeys:{type:Object,default:null},multiple:{type:Boolean,default:!1},tabindex:{type:Number,default:0}},style:F,provide:function(){return{$pcPanelMenu:this,$parentInstance:this}}},L={name:`PanelMenuSub`,hostName:`PanelMenu`,extends:j,emits:[`item-toggle`,`item-mousemove`],props:{panelId:{type:String,default:null},focusedItemId:{type:String,default:null},items:{type:Array,default:null},level:{type:Number,default:0},templates:{type:Object,default:null},activeItemPath:{type:Object,default:null},tabindex:{type:Number,default:-1}},methods:{getItemId:function(e){return`${this.panelId}_${e.key}`},getItemKey:function(e){return this.getItemId(e)},getItemProp:function(e,t,n){return e&&e.item?T(e.item[t],n):void 0},getItemLabel:function(e){return this.getItemProp(e,`label`)},getPTOptions:function(e,t,n){return this.ptm(e,{context:{item:t.item,index:n,active:this.isItemActive(t),focused:this.isItemFocused(t),disabled:this.isItemDisabled(t)}})},isItemActive:function(e){return this.activeItemPath.some(function(t){return t.key===e.key})},isItemVisible:function(e){return this.getItemProp(e,`visible`)!==!1},isItemDisabled:function(e){return this.getItemProp(e,`disabled`)},isItemFocused:function(e){return this.focusedItemId===this.getItemId(e)},isItemGroup:function(e){return A(e.items)},onItemClick:function(e,t){this.getItemProp(t,`command`,{originalEvent:e,item:t.item}),this.$emit(`item-toggle`,{processedItem:t,expanded:!this.isItemActive(t)})},onItemToggle:function(e){this.$emit(`item-toggle`,e)},onItemMouseMove:function(e,t){this.$emit(`item-mousemove`,{originalEvent:e,processedItem:t})},getAriaSetSize:function(){var e=this;return this.items.filter(function(t){return e.isItemVisible(t)&&!e.getItemProp(t,`separator`)}).length},getAriaPosInset:function(e){var t=this;return e-this.items.slice(0,e).filter(function(e){return t.isItemVisible(e)&&t.getItemProp(e,`separator`)}).length+1},getMenuItemProps:function(e,t){return{action:a({class:this.cx(`itemLink`),tabindex:-1},this.getPTOptions(`itemLink`,e,t)),icon:a({class:[this.cx(`itemIcon`),C(this.getItemProp(e,`icon`))?this.getItemProp(e,`icon`):void 0]},this.getPTOptions(`itemIcon`,e,t)),label:a({class:this.cx(`itemLabel`)},this.getPTOptions(`itemLabel`,e,t)),submenuicon:a({class:this.cx(`submenuIcon`)},this.getPTOptions(`submenuicon`,e,t))}},resolveIcon:function(e){return C(e)?e:p(e)},isComponentIcon:function(e){return!!e&&!C(e)}},components:{ChevronRight:P,ChevronDown:M},directives:{ripple:N}},ee=[`tabindex`],R=[`id`,`aria-label`,`aria-expanded`,`aria-level`,`aria-setsize`,`aria-posinset`,`data-p-focused`,`data-p-disabled`],z=[`onClick`,`onMousemove`],B=[`href`,`target`];function V(s,p,b,x,S,C){var w=t(`PanelMenuSub`,!0),T=o(`ripple`);return r(),m(`ul`,{class:i(s.cx(`submenu`)),tabindex:b.tabindex},[(r(!0),m(h,null,e(b.items,function(e,t){return r(),m(h,{key:C.getItemKey(e)},[C.isItemVisible(e)&&!C.getItemProp(e,`separator`)?(r(),m(`li`,a({key:0,id:C.getItemId(e),class:[s.cx(`item`,{processedItem:e}),C.getItemProp(e,`class`)],style:C.getItemProp(e,`style`),role:`treeitem`,"aria-label":C.getItemLabel(e),"aria-expanded":C.isItemGroup(e)?C.isItemActive(e):void 0,"aria-level":b.level+1,"aria-setsize":C.getAriaSetSize(),"aria-posinset":C.getAriaPosInset(t)},{ref_for:!0},C.getPTOptions(`item`,e,t),{"data-p-focused":C.isItemFocused(e),"data-p-disabled":C.isItemDisabled(e)}),[g(`div`,a({class:s.cx(`itemContent`),onClick:function(t){return C.onItemClick(t,e)},onMousemove:function(t){return C.onItemMouseMove(t,e)}},{ref_for:!0},C.getPTOptions(`itemContent`,e,t)),[b.templates.item?(r(),d(c(b.templates.item),{key:1,item:e.item,icon:C.getItemProp(e,`icon`)?C.resolveIcon(C.getItemProp(e,`icon`)):void 0,root:!1,active:C.isItemActive(e),hasSubmenu:C.isItemGroup(e),label:C.getItemLabel(e),props:C.getMenuItemProps(e,t)},null,8,[`item`,`icon`,`active`,`hasSubmenu`,`label`,`props`])):l((r(),m(`a`,a({key:0,href:C.getItemProp(e,`url`),class:s.cx(`itemLink`),target:C.getItemProp(e,`target`),tabindex:`-1`},{ref_for:!0},C.getPTOptions(`itemLink`,e,t)),[C.isItemGroup(e)?(r(),m(h,{key:0},[b.templates.submenuicon?(r(),d(c(b.templates.submenuicon),a({key:0,class:s.cx(`submenuIcon`),active:C.isItemActive(e)},{ref_for:!0},C.getPTOptions(`submenuIcon`,e,t)),null,16,[`class`,`active`])):(r(),d(c(C.isItemActive(e)?`ChevronDown`:`ChevronRight`),a({key:1,class:s.cx(`submenuIcon`)},{ref_for:!0},C.getPTOptions(`submenuIcon`,e,t)),null,16,[`class`]))],64)):f(``,!0),b.templates.itemicon?(r(),d(c(b.templates.itemicon),{key:1,item:e.item,class:i(s.cx(`itemIcon`))},null,8,[`item`,`class`])):C.isComponentIcon(C.getItemProp(e,`icon`))?(r(),d(c(C.resolveIcon(C.getItemProp(e,`icon`))),a({key:2,class:s.cx(`itemIcon`)},{ref_for:!0},C.getPTOptions(`itemIcon`,e,t)),null,16,[`class`])):C.getItemProp(e,`icon`)?(r(),m(`span`,a({key:3,class:[s.cx(`itemIcon`),C.getItemProp(e,`icon`)]},{ref_for:!0},C.getPTOptions(`itemIcon`,e,t)),null,16)):f(``,!0),g(`span`,a({class:s.cx(`itemLabel`)},{ref_for:!0},C.getPTOptions(`itemLabel`,e,t)),n(C.getItemLabel(e)),17)],16,B)),[[T]])],16,z),_(y,a({name:`p-collapsible`},{ref_for:!0},s.ptm(`transition`)),{default:u(function(){return[l(g(`div`,a({class:s.cx(`contentContainer`)},{ref_for:!0},s.ptm(`contentContainer`)),[g(`div`,a({class:s.cx(`contentWrapper`)},{ref_for:!0},s.ptm(`contentWrapper`)),[C.isItemVisible(e)&&C.isItemGroup(e)?(r(),d(w,a({key:0,id:C.getItemId(e)+`_list`,role:`group`,panelId:b.panelId,focusedItemId:b.focusedItemId,items:e.items,level:b.level+1,templates:b.templates,activeItemPath:b.activeItemPath,onItemToggle:C.onItemToggle,onItemMousemove:p[0]||=function(e){return s.$emit(`item-mousemove`,e)},pt:s.pt,unstyled:s.unstyled},{ref_for:!0},s.ptm(`submenu`)),null,16,[`id`,`panelId`,`focusedItemId`,`items`,`level`,`templates`,`activeItemPath`,`onItemToggle`,`pt`,`unstyled`])):f(``,!0)],16)],16),[[v,C.isItemActive(e)]])]}),_:2},1040)],16,R)):f(``,!0),C.isItemVisible(e)&&C.getItemProp(e,`separator`)?(r(),m(`li`,a({key:1,style:C.getItemProp(e,`style`),class:[s.cx(`separator`),C.getItemProp(e,`class`)],role:`separator`},{ref_for:!0},s.ptm(`separator`)),null,16)):f(``,!0)],64)}),128))],10,ee)}L.render=V;function H(e,t){return q(e)||K(e,t)||W(e,t)||U()}function U(){throw TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function W(e,t){if(e){if(typeof e==`string`)return G(e,t);var n={}.toString.call(e).slice(8,-1);return n===`Object`&&e.constructor&&(n=e.constructor.name),n===`Map`||n===`Set`?Array.from(e):n===`Arguments`||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?G(e,t):void 0}}function G(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}function K(e,t){var n=e==null?null:typeof Symbol<`u`&&e[Symbol.iterator]||e[`@@iterator`];if(n!=null){var r,i,a,o,s=[],c=!0,l=!1;try{if(a=(n=n.call(e)).next,t!==0)for(;!(c=(r=a.call(n)).done)&&(s.push(r.value),s.length!==t);c=!0);}catch(e){l=!0,i=e}finally{try{if(!c&&n.return!=null&&(o=n.return(),Object(o)!==o))return}finally{if(l)throw i}}return s}}function q(e){if(Array.isArray(e))return e}var J={name:`PanelMenuList`,hostName:`PanelMenu`,extends:j,emits:[`item-toggle`,`header-focus`],props:{panelId:{type:String,default:null},items:{type:Array,default:null},templates:{type:Object,default:null},expandedKeys:{type:Object,default:null}},searchTimeout:null,searchValue:null,data:function(){return{focused:!1,focusedItem:null,activeItemPath:[]}},watch:{expandedKeys:function(e){this.autoUpdateActiveItemPath(e)}},created:function(){this.autoUpdateActiveItemPath(this.expandedKeys)},methods:{getItemProp:function(e,t){return e&&e.item?T(e.item[t]):void 0},getItemLabel:function(e){return this.getItemProp(e,`label`)},isItemVisible:function(e){return this.getItemProp(e,`visible`)!==!1},isItemDisabled:function(e){return this.getItemProp(e,`disabled`)},isItemActive:function(e){return this.activeItemPath.some(function(t){return t.key===e.parentKey})},isItemGroup:function(e){return A(e.items)},onFocus:function(e){this.focused=!0,this.focusedItem=this.focusedItem||(this.isElementInPanel(e,e.relatedTarget)?this.findFirstItem():this.findLastItem())},onBlur:function(){this.focused=!1,this.focusedItem=null,this.searchValue=``},onKeyDown:function(e){var t=e.metaKey||e.ctrlKey;switch(e.code){case`ArrowDown`:this.onArrowDownKey(e);break;case`ArrowUp`:this.onArrowUpKey(e);break;case`ArrowLeft`:this.onArrowLeftKey(e);break;case`ArrowRight`:this.onArrowRightKey(e);break;case`Home`:this.onHomeKey(e);break;case`End`:this.onEndKey(e);break;case`Space`:this.onSpaceKey(e);break;case`Enter`:case`NumpadEnter`:this.onEnterKey(e);break;case`Escape`:case`Tab`:case`PageDown`:case`PageUp`:case`Backspace`:case`ShiftLeft`:case`ShiftRight`:break;default:!t&&O(e.key)&&this.searchItems(e,e.key)}},onArrowDownKey:function(e){var t=A(this.focusedItem)?this.findNextItem(this.focusedItem):this.findFirstItem();this.changeFocusedItem({originalEvent:e,processedItem:t,focusOnNext:!0}),e.preventDefault()},onArrowUpKey:function(e){var t=A(this.focusedItem)?this.findPrevItem(this.focusedItem):this.findLastItem();this.changeFocusedItem({originalEvent:e,processedItem:t,selfCheck:!0}),e.preventDefault()},onArrowLeftKey:function(e){var t=this;A(this.focusedItem)&&(this.activeItemPath.some(function(e){return e.key===t.focusedItem.key})?this.activeItemPath=this.activeItemPath.filter(function(e){return e.key!==t.focusedItem.key}):this.focusedItem=A(this.focusedItem.parent)?this.focusedItem.parent:this.focusedItem,e.preventDefault())},onArrowRightKey:function(e){var t=this;A(this.focusedItem)&&(this.isItemGroup(this.focusedItem)&&(this.activeItemPath.some(function(e){return e.key===t.focusedItem.key})?this.onArrowDownKey(e):(this.activeItemPath=this.activeItemPath.filter(function(e){return e.parentKey!==t.focusedItem.parentKey}),this.activeItemPath.push(this.focusedItem))),e.preventDefault())},onHomeKey:function(e){this.changeFocusedItem({originalEvent:e,processedItem:this.findFirstItem(),allowHeaderFocus:!1}),e.preventDefault()},onEndKey:function(e){this.changeFocusedItem({originalEvent:e,processedItem:this.findLastItem(),focusOnNext:!0,allowHeaderFocus:!1}),e.preventDefault()},onEnterKey:function(e){if(A(this.focusedItem)){var t=S(this.$el,`li[id="${`${this.focusedItemId}`}"]`),n=t&&(S(t,`[data-pc-section="itemlink"]`)||S(t,`a,button`));n?n.click():t&&t.click()}e.preventDefault()},onSpaceKey:function(e){this.onEnterKey(e)},onItemToggle:function(e){var t=e.processedItem,n=e.expanded;this.expandedKeys?this.$emit(`item-toggle`,{item:t.item,expanded:n}):(this.activeItemPath=this.activeItemPath.filter(function(e){return e.parentKey!==t.parentKey}),n&&this.activeItemPath.push(t)),this.focusedItem=t,b(this.$el)},onItemMouseMove:function(e){this.focused&&(this.focusedItem=e.processedItem)},isElementInPanel:function(e,t){var n=e.currentTarget.closest(`[data-pc-section="panel"]`);return n&&n.contains(t)},isItemMatched:function(e){return this.isValidItem(e)&&this.getItemLabel(e)?.toLocaleLowerCase(this.searchLocale).startsWith(this.searchValue.toLocaleLowerCase(this.searchLocale))},isVisibleItem:function(e){return!!e&&(e.level===0||this.isItemActive(e))&&this.isItemVisible(e)},isValidItem:function(e){return!!e&&!this.isItemDisabled(e)&&!this.getItemProp(e,`separator`)},findFirstItem:function(){var e=this;return this.visibleItems.find(function(t){return e.isValidItem(t)})},findLastItem:function(){var e=this;return D(this.visibleItems,function(t){return e.isValidItem(t)})},findNextItem:function(e){var t=this,n=this.visibleItems.findIndex(function(t){return t.key===e.key});return(n<this.visibleItems.length-1?this.visibleItems.slice(n+1).find(function(e){return t.isValidItem(e)}):void 0)||e},findPrevItem:function(e){var t=this,n=this.visibleItems.findIndex(function(t){return t.key===e.key});return(n>0?D(this.visibleItems.slice(0,n),function(e){return t.isValidItem(e)}):void 0)||e},searchItems:function(e,t){var n=this;this.searchValue=(this.searchValue||``)+t;var r,i=!1;if(A(this.focusedItem)){var a=this.visibleItems.findIndex(function(e){return e.key===n.focusedItem.key});r=this.visibleItems.slice(a).find(function(e){return n.isItemMatched(e)}),r=k(r)?this.visibleItems.slice(0,a).find(function(e){return n.isItemMatched(e)}):r}else r=this.visibleItems.find(function(e){return n.isItemMatched(e)});return A(r)&&(i=!0),k(r)&&k(this.focusedItem)&&(r=this.findFirstItem()),A(r)&&this.changeFocusedItem({originalEvent:e,processedItem:r,allowHeaderFocus:!1}),this.searchTimeout&&clearTimeout(this.searchTimeout),this.searchTimeout=setTimeout(function(){n.searchValue=``,n.searchTimeout=null},500),i},changeFocusedItem:function(e){var t=e.originalEvent,n=e.processedItem,r=e.focusOnNext,i=e.selfCheck,a=e.allowHeaderFocus,o=a===void 0||a;A(this.focusedItem)&&this.focusedItem.key!==n.key?(this.focusedItem=n,this.scrollInView()):o&&this.$emit(`header-focus`,{originalEvent:t,focusOnNext:r,selfCheck:i})},scrollInView:function(){var e=S(this.$el,`li[id="${`${this.focusedItemId}`}"]`);e&&e.scrollIntoView&&e.scrollIntoView({block:`nearest`,inline:`start`})},autoUpdateActiveItemPath:function(e){var t=this;this.activeItemPath=Object.entries(e||{}).reduce(function(e,n){var r=H(n,2),i=r[0];if(r[1]){var a=t.findProcessedItemByItemKey(i);a&&e.push(a)}return e},[])},findProcessedItemByItemKey:function(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:0;if(t||=n===0&&this.processedItems,!t)return null;for(var r=0;r<t.length;r++){var i=t[r];if(this.getItemProp(i,`key`)===e)return i;var a=this.findProcessedItemByItemKey(e,i.items,n+1);if(a)return a}},createProcessedItems:function(e){var t=this,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},i=arguments.length>3&&arguments[3]!==void 0?arguments[3]:``,a=[];return e&&e.forEach(function(e,o){var s=(i===``?``:i+`_`)+o,c={item:e,index:o,level:n,key:s,parent:r,parentKey:i};c.items=t.createProcessedItems(e.items,n+1,c,s),a.push(c)}),a},flatItems:function(e){var t=this,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[];return e&&e.forEach(function(e){t.isVisibleItem(e)&&(n.push(e),t.flatItems(e.items,n))}),n}},computed:{processedItems:function(){return this.createProcessedItems(this.items||[])},visibleItems:function(){return this.flatItems(this.processedItems)},focusedItemId:function(){return A(this.focusedItem)?`${this.panelId}_${this.focusedItem.key}`:null}},components:{PanelMenuSub:L}};function Y(e,n,i,o,s,c){var l=t(`PanelMenuSub`);return r(),d(l,a({id:i.panelId+`_list`,class:e.cx(`rootList`),role:`tree`,tabindex:-1,"aria-activedescendant":s.focused?c.focusedItemId:void 0,panelId:i.panelId,focusedItemId:s.focused?c.focusedItemId:void 0,items:c.processedItems,templates:i.templates,activeItemPath:s.activeItemPath,onFocus:c.onFocus,onBlur:c.onBlur,onKeydown:c.onKeyDown,onItemToggle:c.onItemToggle,onItemMousemove:c.onItemMouseMove,pt:e.pt,unstyled:e.unstyled},e.ptm(`rootList`)),null,16,[`id`,`class`,`aria-activedescendant`,`panelId`,`focusedItemId`,`items`,`templates`,`activeItemPath`,`onFocus`,`onBlur`,`onKeydown`,`onItemToggle`,`onItemMousemove`,`pt`,`unstyled`])}J.render=Y;function X(e){"@babel/helpers - typeof";return X=typeof Symbol==`function`&&typeof Symbol.iterator==`symbol`?function(e){return typeof e}:function(e){return e&&typeof Symbol==`function`&&e.constructor===Symbol&&e!==Symbol.prototype?`symbol`:typeof e},X(e)}function Z(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function Q(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]==null?{}:arguments[t];t%2?Z(Object(n),!0).forEach(function(t){te(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Z(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function te(e,t,n){return(t=ne(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function ne(e){var t=re(e,`string`);return X(t)==`symbol`?t:t+``}function re(e,t){if(X(e)!=`object`||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(X(r)!=`object`)return r;throw TypeError(`@@toPrimitive must return a primitive value.`)}return(t===`string`?String:Number)(e)}var $={name:`PanelMenu`,extends:I,inheritAttrs:!1,emits:[`update:expandedKeys`,`panel-open`,`panel-close`],data:function(){return{activeItem:null,activeItems:[]}},methods:{getItemProp:function(e,t){return e?T(e[t]):void 0},getItemLabel:function(e){return this.getItemProp(e,`label`)},getPTOptions:function(e,t,n){return this.ptm(e,{context:{index:n,active:this.isItemActive(t),focused:this.isItemFocused(t),disabled:this.isItemDisabled(t)}})},isItemActive:function(e){return this.expandedKeys?this.expandedKeys[this.getItemProp(e,`key`)]:this.multiple?this.activeItems.some(function(t){return w(e,t)}):w(e,this.activeItem)},isItemVisible:function(e){return this.getItemProp(e,`visible`)!==!1},isItemDisabled:function(e){return this.getItemProp(e,`disabled`)},isItemFocused:function(e){return w(e,this.activeItem)},isItemGroup:function(e){return A(e.items)},getPanelId:function(e){return`${this.$id}_${e}`},getPanelKey:function(e){return this.getPanelId(e)},getHeaderId:function(e){return`${this.getPanelId(e)}_header`},getContentId:function(e){return`${this.getPanelId(e)}_content`},onHeaderClick:function(e,t){if(this.isItemDisabled(t)){e.preventDefault();return}t.command&&t.command({originalEvent:e,item:t}),this.changeActiveItem(e,t),b(e.currentTarget)},onHeaderKeyDown:function(e,t){switch(e.code){case`ArrowDown`:this.onHeaderArrowDownKey(e);break;case`ArrowUp`:this.onHeaderArrowUpKey(e);break;case`Home`:this.onHeaderHomeKey(e);break;case`End`:this.onHeaderEndKey(e);break;case`Enter`:case`NumpadEnter`:case`Space`:this.onHeaderEnterKey(e,t)}},onHeaderArrowDownKey:function(e){var t=x(e.currentTarget,`data-p-active`)===!0?S(e.currentTarget.nextElementSibling,`[data-pc-section="rootlist"]`):null;t?b(t):this.updateFocusedHeader({originalEvent:e,focusOnNext:!0}),e.preventDefault()},onHeaderArrowUpKey:function(e){var t=this.findPrevHeader(e.currentTarget.parentElement)||this.findLastHeader(),n=x(t,`data-p-active`)===!0?S(t.nextElementSibling,`[data-pc-section="rootlist"]`):null;n?b(n):this.updateFocusedHeader({originalEvent:e,focusOnNext:!1}),e.preventDefault()},onHeaderHomeKey:function(e){this.changeFocusedHeader(e,this.findFirstHeader()),e.preventDefault()},onHeaderEndKey:function(e){this.changeFocusedHeader(e,this.findLastHeader()),e.preventDefault()},onHeaderEnterKey:function(e,t){var n=S(e.currentTarget,`[data-pc-section="headerlink"]`);n?n.click():this.onHeaderClick(e,t),e.preventDefault()},findNextHeader:function(e){var t=arguments.length>1&&arguments[1]!==void 0&&arguments[1]?e:e.nextElementSibling,n=S(t,`[data-pc-section="header"]`);return n?x(n,`data-p-disabled`)?this.findNextHeader(n.parentElement):n:null},findPrevHeader:function(e){var t=arguments.length>1&&arguments[1]!==void 0&&arguments[1]?e:e.previousElementSibling,n=S(t,`[data-pc-section="header"]`);return n?x(n,`data-p-disabled`)?this.findPrevHeader(n.parentElement):n:null},findFirstHeader:function(){return this.findNextHeader(this.$el.firstElementChild,!0)},findLastHeader:function(){return this.findPrevHeader(this.$el.lastElementChild,!0)},updateFocusedHeader:function(e){var t=e.originalEvent,n=e.focusOnNext,r=e.selfCheck,i=t.currentTarget.closest(`[data-pc-section="panel"]`),a=r?S(i,`[data-pc-section="header"]`):n?this.findNextHeader(i):this.findPrevHeader(i);a?this.changeFocusedHeader(t,a):n?this.onHeaderHomeKey(t):this.onHeaderEndKey(t)},changeActiveItem:function(e,t){var n=arguments.length>2&&arguments[2]!==void 0&&arguments[2];if(!this.isItemDisabled(t)){var r=this.isItemActive(t),i=r?`panel-close`:`panel-open`;this.activeItem=n?t:this.activeItem&&w(t,this.activeItem)?null:t,this.multiple&&(this.activeItems.some(function(e){return w(t,e)})?this.activeItems=this.activeItems.filter(function(e){return!w(t,e)}):this.activeItems.push(t)),this.changeExpandedKeys({item:t,expanded:!r}),this.$emit(i,{originalEvent:e,item:t})}},changeExpandedKeys:function(e){var t=e.item,n=e.expanded,r=n!==void 0&&n;if(this.expandedKeys){var i=Q({},this.expandedKeys);r?i[t.key]=!0:delete i[t.key],this.$emit(`update:expandedKeys`,i)}},changeFocusedHeader:function(e,t){t&&b(t)},getMenuItemProps:function(e,t){return{icon:a({class:[this.cx(`headerIcon`),C(this.getItemProp(e,`icon`))?this.getItemProp(e,`icon`):void 0]},this.getPTOptions(`headerIcon`,e,t)),label:a({class:this.cx(`headerLabel`)},this.getPTOptions(`headerLabel`,e,t))}},resolveIcon:function(e){return C(e)?e:p(e)},isComponentIcon:function(e){return!!e&&!C(e)}},components:{PanelMenuList:J,ChevronRight:P,ChevronDown:M}},ie=[`id`],ae=[`id`,`tabindex`,`aria-label`,`aria-expanded`,`aria-controls`,`aria-disabled`,`onClick`,`onKeydown`,`data-p-active`,`data-p-disabled`],oe=[`href`],se=[`id`,`aria-labelledby`];function ce(o,p,b,x,S,C){var w=t(`PanelMenuList`);return r(),m(`div`,a({id:o.$id,class:o.cx(`root`)},o.ptmi(`root`)),[(r(!0),m(h,null,e(o.model,function(e,t){return r(),m(h,{key:C.getPanelKey(t)},[C.isItemVisible(e)?(r(),m(`div`,a({key:0,style:C.getItemProp(e,`style`),class:[o.cx(`panel`),C.getItemProp(e,`class`)]},{ref_for:!0},o.ptm(`panel`)),[g(`div`,a({id:C.getHeaderId(t),class:[o.cx(`header`,{item:e}),C.getItemProp(e,`headerClass`)],tabindex:C.isItemDisabled(e)?-1:o.tabindex,role:`button`,"aria-label":C.getItemLabel(e),"aria-expanded":C.isItemActive(e),"aria-controls":C.getContentId(t),"aria-disabled":C.isItemDisabled(e),onClick:function(t){return C.onHeaderClick(t,e)},onKeydown:function(t){return C.onHeaderKeyDown(t,e)}},{ref_for:!0},C.getPTOptions(`header`,e,t),{"data-p-active":C.isItemActive(e),"data-p-disabled":C.isItemDisabled(e)}),[g(`div`,a({class:o.cx(`headerContent`)},{ref_for:!0},C.getPTOptions(`headerContent`,e,t)),[o.$slots.item?(r(),d(c(o.$slots.item),{key:1,item:e,icon:C.getItemProp(e,`icon`)?C.resolveIcon(C.getItemProp(e,`icon`)):void 0,root:!0,active:C.isItemActive(e),hasSubmenu:C.isItemGroup(e),label:C.getItemLabel(e),props:C.getMenuItemProps(e,t)},null,8,[`item`,`icon`,`active`,`hasSubmenu`,`label`,`props`])):(r(),m(`a`,a({key:0,href:C.getItemProp(e,`url`),class:o.cx(`headerLink`),tabindex:-1},{ref_for:!0},C.getPTOptions(`headerLink`,e,t)),[C.getItemProp(e,`items`)?s(o.$slots,`submenuicon`,{active:C.isItemActive(e)},function(){return[(r(),d(c(C.isItemActive(e)?`ChevronDown`:`ChevronRight`),a({class:o.cx(`submenuIcon`)},{ref_for:!0},C.getPTOptions(`submenuIcon`,e,t)),null,16,[`class`]))]},void 0,0):f(``,!0),o.$slots.headericon?(r(),d(c(o.$slots.headericon),{key:1,item:e,class:i(o.cx(`headerIcon`))},null,8,[`item`,`class`])):C.isComponentIcon(C.getItemProp(e,`icon`))?(r(),d(c(C.resolveIcon(C.getItemProp(e,`icon`))),a({key:2,class:o.cx(`headerIcon`)},{ref_for:!0},C.getPTOptions(`headerIcon`,e,t)),null,16,[`class`])):C.getItemProp(e,`icon`)?(r(),m(`span`,a({key:3,class:[o.cx(`headerIcon`),C.getItemProp(e,`icon`)]},{ref_for:!0},C.getPTOptions(`headerIcon`,e,t)),null,16)):f(``,!0),g(`span`,a({class:o.cx(`headerLabel`)},{ref_for:!0},C.getPTOptions(`headerLabel`,e,t)),n(C.getItemLabel(e)),17)],16,oe))],16)],16,ae),_(y,a({name:`p-collapsible`},{ref_for:!0},o.ptm(`transition`)),{default:u(function(){return[l(g(`div`,a({id:C.getContentId(t),class:o.cx(`contentContainer`),role:`region`,"aria-labelledby":C.getHeaderId(t)},{ref_for:!0},o.ptm(`contentContainer`)),[g(`div`,a({class:o.cx(`contentWrapper`)},{ref_for:!0},o.ptm(`contentWrapper`)),[C.getItemProp(e,`items`)?(r(),m(`div`,a({key:0,class:o.cx(`content`)},{ref_for:!0},o.ptm(`content`)),[_(w,{panelId:C.getPanelId(t),items:C.getItemProp(e,`items`),templates:o.$slots,expandedKeys:o.expandedKeys,onItemToggle:C.changeExpandedKeys,onHeaderFocus:C.updateFocusedHeader,pt:o.pt,unstyled:o.unstyled},null,8,[`panelId`,`items`,`templates`,`expandedKeys`,`onItemToggle`,`onHeaderFocus`,`pt`,`unstyled`])],16)):f(``,!0)],16)],16,se),[[v,C.isItemActive(e)]])]}),_:2},1040)],16)):f(``,!0)],64)}),128))],16,ie)}$.render=ce;export{$ as default};