import{B as e,It as t,L as n,O as r,X as i,f as a,p as o,r as s,u as c}from"./BQHyKCNA.js";import{a as l}from"./DhGtpQ-w.js";import{it as u,n as d}from"./4XRHhTMS.js";import{t as f}from"./B-GjYb7s.js";var p=u(),m=d.extend({name:`terminal`,style:`
    .p-terminal {
        display: block;
        height: dt('terminal.height');
        overflow: auto;
        background: dt('terminal.background');
        color: dt('terminal.color');
        border: 1px solid dt('terminal.border.color');
        padding: dt('terminal.padding');
        border-radius: dt('terminal.border.radius');
        font-weight: dt('terminal.font.weight');
        font-size: dt('terminal.font.size');
    }

    .p-terminal-prompt {
        display: flex;
        align-items: center;
    }

    .p-terminal-prompt-value {
        flex: 1 1 auto;
        border: 0 none;
        background: transparent;
        color: inherit;
        padding: 0;
        outline: 0 none;
        font-family: inherit;
        font-feature-settings: inherit;
        font-size: 1rem;
    }

    .p-terminal-prompt-label {
        margin-inline-end: dt('terminal.prompt.gap');
    }

    .p-terminal-input::-ms-clear {
        display: none;
    }

    .p-terminal-command-response {
        margin: dt('terminal.command.response.margin');
    }
`,classes:{root:`p-terminal p-component`,welcomeMessage:`p-terminal-welcome-message`,commandList:`p-terminal-command-list`,command:`p-terminal-command`,commandValue:`p-terminal-command-value`,commandResponse:`p-terminal-command-response`,prompt:`p-terminal-prompt`,promptLabel:`p-terminal-prompt-label`,promptValue:`p-terminal-prompt-value`}}),h={name:`Terminal`,extends:{name:`BaseTerminal`,extends:f,props:{welcomeMessage:{type:String,default:null},prompt:{type:String,default:null}},style:m,provide:function(){return{$pcTerminal:this,$parentInstance:this}}},inheritAttrs:!1,data:function(){return{commandText:null,commands:[]}},mounted:function(){p.on(`response`,this.responseListener),this.$refs.input.focus()},updated:function(){this.$el.scrollTop=this.$el.scrollHeight},beforeUnmount:function(){p.off(`response`,this.responseListener)},methods:{onClick:function(){this.$refs.input.focus()},onKeydown:function(e){e.key===`Enter`&&this.commandText&&(this.commands.push({text:this.commandText}),p.emit(`command`,this.commandText),this.commandText=``)},responseListener:function(e){this.commands[this.commands.length-1].response=e}}};function g(u,d,f,p,m,h){return n(),o(`div`,r({class:u.cx(`root`),onClick:d[2]||=function(){return h.onClick&&h.onClick.apply(h,arguments)}},u.ptmi(`root`)),[u.welcomeMessage?(n(),o(`div`,r({key:0,class:u.cx(`welcomeMessage`)},u.ptm(`welcomeMessage`)),t(u.welcomeMessage),17)):a(``,!0),c(`div`,r({class:u.cx(`commandList`)},u.ptm(`content`)),[(n(!0),o(s,null,e(m.commands,function(e,i){return n(),o(`div`,r({key:e.text+i.toString(),class:u.cx(`command`)},{ref_for:!0},u.ptm(`commands`)),[c(`span`,r({class:u.cx(`promptLabel`)},{ref_for:!0},u.ptm(`prompt`)),t(u.prompt),17),c(`span`,r({class:u.cx(`commandValue`)},{ref_for:!0},u.ptm(`command`)),t(e.text),17),c(`div`,r({class:u.cx(`commandResponse`),"aria-live":`polite`},{ref_for:!0},u.ptm(`response`)),t(e.response),17)],16)}),128))],16),c(`div`,r({class:u.cx(`prompt`)},u.ptm(`container`)),[c(`span`,r({class:u.cx(`promptLabel`)},u.ptm(`prompt`)),t(u.prompt),17),i(c(`input`,r({ref:`input`,"onUpdate:modelValue":d[0]||=function(e){return m.commandText=e},class:u.cx(`promptValue`),type:`text`,autocomplete:`off`,onKeydown:d[1]||=function(){return h.onKeydown&&h.onKeydown.apply(h,arguments)}},u.ptm(`commandText`)),null,16),[[l,m.commandText]])],16)],16)}h.render=g;export{h as default};