import process from 'node:process';globalThis._importMeta_=globalThis._importMeta_||{url:"file:///_entry.js",env:process.env};import http, { Server as Server$1 } from 'node:http';
import https, { Server } from 'node:https';
import { EventEmitter } from 'node:events';
import { Buffer as Buffer$1 } from 'node:buffer';
import { promises, existsSync } from 'node:fs';
import { resolve as resolve$1, dirname as dirname$1, join } from 'node:path';
import { createHash } from 'node:crypto';
import BaseStyle from '@primevue/core/base/style';
import BaseComponentStyle from '@primevue/core/basecomponent/style';
import { style as style$2 } from '@primeuix/styles/autocomplete';
import { isNotEmpty, isEmpty } from '@primeuix/utils/object';
import { style as style$3 } from '@primeuix/styles/cascadeselect';
import { style as style$4 } from '@primeuix/styles/checkbox';
import { style as style$5 } from '@primeuix/styles/checkboxgroup';
import { style as style$6 } from '@primeuix/styles/colorpicker';
import { style as style$7 } from '@primeuix/styles/datepicker';
import { style as style$8 } from '@primeuix/styles/floatlabel';
import { style as style$9 } from '@primeuix/styles/iconfield';
import { style as style$a } from '@primeuix/styles/iftalabel';
import { style as style$b } from '@primeuix/styles/inputcolor';
import { style as style$c } from '@primeuix/styles/inputgroup';
import { style as style$d } from '@primeuix/styles/inputnumber';
import { style as style$e } from '@primeuix/styles/inputotp';
import { style as style$f } from '@primeuix/styles/inputtags';
import { style as style$g } from '@primeuix/styles/inputtext';
import { style as style$h } from '@primeuix/styles/knob';
import { style as style$i } from '@primeuix/styles/label';
import { style as style$j } from '@primeuix/styles/listbox';
import { style as style$k } from '@primeuix/styles/multiselect';
import { style as style$l } from '@primeuix/styles/password';
import { style as style$m } from '@primeuix/styles/radiobutton';
import { style as style$n } from '@primeuix/styles/radiobuttongroup';
import { style as style$o } from '@primeuix/styles/rating';
import { style as style$p } from '@primeuix/styles/select';
import { style as style$q } from '@primeuix/styles/selectbutton';
import { style as style$r } from '@primeuix/styles/slider';
import { style as style$s } from '@primeuix/styles/textarea';
import { style as style$t } from '@primeuix/styles/togglebutton';
import { style as style$u } from '@primeuix/styles/toggleswitch';
import { style as style$v } from '@primeuix/styles/treeselect';
import { style as style$w } from '@primeuix/styles/button';
import { style as style$x } from '@primeuix/styles/buttongroup';
import { style as style$y } from '@primeuix/styles/speeddial';
import { style as style$z } from '@primeuix/styles/splitbutton';
import { style as style$A } from '@primeuix/styles/datatable';
import { style as style$B } from '@primeuix/styles/dataview';
import { style as style$C } from '@primeuix/styles/orderlist';
import { style as style$D } from '@primeuix/styles/organizationchart';
import { style as style$E } from '@primeuix/styles/paginator';
import { style as style$F } from '@primeuix/styles/picklist';
import { style as style$G } from '@primeuix/styles/tree';
import { style as style$H } from '@primeuix/styles/treetable';
import { style as style$I } from '@primeuix/styles/timeline';
import { style as style$J } from '@primeuix/styles/virtualscroller';
import { style as style$K } from '@primeuix/styles/accordion';
import { style as style$L } from '@primeuix/styles/card';
import { style as style$M } from '@primeuix/styles/divider';
import { style as style$N } from '@primeuix/styles/fieldset';
import { style as style$O } from '@primeuix/styles/panel';
import { style as style$P } from '@primeuix/styles/scrollarea';
import { style as style$Q } from '@primeuix/styles/scrollpanel';
import { style as style$R } from '@primeuix/styles/splitter';
import { style as style$S } from '@primeuix/styles/stepper';
import { style as style$T } from '@primeuix/styles/tabs';
import { style as style$U } from '@primeuix/styles/toolbar';
import { style as style$V } from '@primeuix/styles/confirmdialog';
import { style as style$W } from '@primeuix/styles/confirmpopup';
import { style as style$X } from '@primeuix/styles/dialog';
import { style as style$Y } from '@primeuix/styles/drawer';
import { style as style$Z } from '@primeuix/styles/popover';
import { style as style$_ } from '@primeuix/styles/fileupload';
import { style as style$$ } from '@primeuix/styles/breadcrumb';
import { style as style$10 } from '@primeuix/styles/commandmenu';
import { style as style$11 } from '@primeuix/styles/contextmenu';
import { style as style$12 } from '@primeuix/styles/dock';
import { style as style$13 } from '@primeuix/styles/menu';
import { style as style$14 } from '@primeuix/styles/menubar';
import { style as style$15 } from '@primeuix/styles/megamenu';
import { style as style$16 } from '@primeuix/styles/panelmenu';
import { style as style$17 } from '@primeuix/styles/sidebar';
import { style as style$18 } from '@primeuix/styles/steps';
import { style as style$19 } from '@primeuix/styles/tieredmenu';
import { style as style$1a } from '@primeuix/styles/message';
import { style as style$1b } from '@primeuix/styles/toast';
import { style as style$1c } from '@primeuix/styles/carousel';
import { style as style$1d } from '@primeuix/styles/galleria';
import { style as style$1e } from '@primeuix/styles/gallery';
import { style as style$1f } from '@primeuix/styles/compare';
import { style as style$1g } from '@primeuix/styles/image';
import { style as style$1h } from '@primeuix/styles/imagecompare';
import { style as style$1i } from '@primeuix/styles/avatar';
import { style as style$1j } from '@primeuix/styles/badge';
import { style as style$1k } from '@primeuix/styles/blockui';
import { style as style$1l } from '@primeuix/styles/chip';
import { style as style$1m } from '@primeuix/styles/inplace';
import { style as style$1n } from '@primeuix/styles/metergroup';
import { style as style$1o } from '@primeuix/styles/overlaybadge';
import { style as style$1p } from '@primeuix/styles/scrolltop';
import { style as style$1q } from '@primeuix/styles/skeleton';
import { style as style$1r } from '@primeuix/styles/progressbar';
import { style as style$1s } from '@primeuix/styles/tag';
import { style as style$1t } from '@primeuix/styles/terminal';
import FormStyle from '@primevue/forms/form/style';
import FormFieldStyle from '@primevue/forms/formfield/style';
import { style as style$1u } from '@primeuix/styles/tooltip';
import { style as style$1v } from '@primeuix/styles/ripple';
import { Theme } from '@primeuix/styled';
import { fileURLToPath } from 'node:url';
import { getIcons } from '@iconify/utils';
import { consola } from 'consola';

const suspectProtoRx$1 = /"(?:_|\\u0{2}5[Ff]){2}(?:p|\\u0{2}70)(?:r|\\u0{2}72)(?:o|\\u0{2}6[Ff])(?:t|\\u0{2}74)(?:o|\\u0{2}6[Ff])(?:_|\\u0{2}5[Ff]){2}"\s*:/;
const suspectConstructorRx$1 = /"(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)"\s*:/;
const JsonSigRx$1 = /^\s*["[{]|^\s*-?\d{1,16}(\.\d{1,17})?([Ee][+-]?\d+)?\s*$/;
function jsonParseTransform$1(key, value) {
  if (key === "__proto__" || key === "constructor" && value && typeof value === "object" && "prototype" in value) {
    warnKeyDropped$1(key);
    return;
  }
  return value;
}
function warnKeyDropped$1(key) {
  console.warn(`[destr] Dropping "${key}" key to prevent prototype pollution.`);
}
function destr$1(value, options = {}) {
  if (typeof value !== "string") {
    return value;
  }
  if (value[0] === '"' && value[value.length - 1] === '"' && value.indexOf("\\") === -1) {
    return value.slice(1, -1);
  }
  const _value = value.trim();
  if (_value.length <= 9) {
    switch (_value.toLowerCase()) {
      case "true": {
        return true;
      }
      case "false": {
        return false;
      }
      case "undefined": {
        return void 0;
      }
      case "null": {
        return null;
      }
      case "nan": {
        return Number.NaN;
      }
      case "infinity": {
        return Number.POSITIVE_INFINITY;
      }
      case "-infinity": {
        return Number.NEGATIVE_INFINITY;
      }
    }
  }
  if (!JsonSigRx$1.test(value)) {
    if (options.strict) {
      throw new SyntaxError("[destr] Invalid JSON");
    }
    return value;
  }
  try {
    if (suspectProtoRx$1.test(value) || suspectConstructorRx$1.test(value)) {
      if (options.strict) {
        throw new Error("[destr] Possible prototype pollution");
      }
      return JSON.parse(value, jsonParseTransform$1);
    }
    return JSON.parse(value);
  } catch (error) {
    if (options.strict) {
      throw error;
    }
    return value;
  }
}

const HASH_RE = /#/g;
const AMPERSAND_RE = /&/g;
const SLASH_RE = /\//g;
const EQUAL_RE = /=/g;
const IM_RE = /\?/g;
const PLUS_RE = /\+/g;
const ENC_CARET_RE = /%5e/gi;
const ENC_BACKTICK_RE = /%60/gi;
const ENC_PIPE_RE = /%7c/gi;
const ENC_SPACE_RE = /%20/gi;
const ENC_SLASH_RE = /%2f/gi;
const ENC_ENC_SLASH_RE = /%252f/gi;
function encode(text) {
  return encodeURI("" + text).replace(ENC_PIPE_RE, "|");
}
function encodeQueryValue(input) {
  return encode(typeof input === "string" ? input : JSON.stringify(input)).replace(PLUS_RE, "%2B").replace(ENC_SPACE_RE, "+").replace(HASH_RE, "%23").replace(AMPERSAND_RE, "%26").replace(ENC_BACKTICK_RE, "`").replace(ENC_CARET_RE, "^").replace(SLASH_RE, "%2F");
}
function encodeQueryKey(text) {
  return encodeQueryValue(text).replace(EQUAL_RE, "%3D");
}
function encodePath(text) {
  return encode(text).replace(HASH_RE, "%23").replace(IM_RE, "%3F").replace(ENC_ENC_SLASH_RE, "%2F").replace(AMPERSAND_RE, "%26").replace(PLUS_RE, "%2B");
}
function decode(text = "") {
  try {
    return decodeURIComponent("" + text);
  } catch {
    return "" + text;
  }
}
function decodePath(text) {
  return decode(text.replace(ENC_SLASH_RE, "%252F"));
}
function decodeQueryKey(text) {
  return decode(text.replace(PLUS_RE, " "));
}
function decodeQueryValue(text) {
  return decode(text.replace(PLUS_RE, " "));
}

function parseQuery(parametersString = "") {
  const object = /* @__PURE__ */ Object.create(null);
  if (parametersString[0] === "?") {
    parametersString = parametersString.slice(1);
  }
  for (const parameter of parametersString.split("&")) {
    const s = parameter.match(/([^=]+)=?(.*)/) || [];
    if (s.length < 2) {
      continue;
    }
    const key = decodeQueryKey(s[1]);
    if (key === "__proto__" || key === "constructor") {
      continue;
    }
    const value = decodeQueryValue(s[2] || "");
    if (object[key] === void 0) {
      object[key] = value;
    } else if (Array.isArray(object[key])) {
      object[key].push(value);
    } else {
      object[key] = [object[key], value];
    }
  }
  return object;
}
function encodeQueryItem(key, value) {
  if (typeof value === "number" || typeof value === "boolean") {
    value = String(value);
  }
  if (!value) {
    return encodeQueryKey(key);
  }
  if (Array.isArray(value)) {
    return value.map(
      (_value) => `${encodeQueryKey(key)}=${encodeQueryValue(_value)}`
    ).join("&");
  }
  return `${encodeQueryKey(key)}=${encodeQueryValue(value)}`;
}
function stringifyQuery(query) {
  return Object.keys(query).filter((k) => query[k] !== void 0).map((k) => encodeQueryItem(k, query[k])).filter(Boolean).join("&");
}

const PROTOCOL_STRICT_REGEX = /^[\s\w\0+.-]{2,}:([/\\]{1,2})/;
const PROTOCOL_REGEX = /^[\s\w\0+.-]{2,}:([/\\]{2})?/;
const PROTOCOL_RELATIVE_REGEX = /^([/\\]\s*){2,}[^/\\]/;
const PROTOCOL_SCRIPT_RE = /^[\s\0]*(blob|data|javascript|vbscript):$/i;
const TRAILING_SLASH_RE = /\/$|\/\?|\/#/;
const JOIN_LEADING_SLASH_RE = /^\.?\//;
function hasProtocol(inputString, opts = {}) {
  if (typeof opts === "boolean") {
    opts = { acceptRelative: opts };
  }
  if (opts.strict) {
    return PROTOCOL_STRICT_REGEX.test(inputString);
  }
  return PROTOCOL_REGEX.test(inputString) || (opts.acceptRelative ? PROTOCOL_RELATIVE_REGEX.test(inputString) : false);
}
function isScriptProtocol(protocol) {
  return !!protocol && PROTOCOL_SCRIPT_RE.test(protocol);
}
function hasTrailingSlash(input = "", respectQueryAndFragment) {
  if (!respectQueryAndFragment) {
    return input.endsWith("/");
  }
  return TRAILING_SLASH_RE.test(input);
}
function withoutTrailingSlash(input = "", respectQueryAndFragment) {
  if (!respectQueryAndFragment) {
    return (hasTrailingSlash(input) ? input.slice(0, -1) : input) || "/";
  }
  if (!hasTrailingSlash(input, true)) {
    return input || "/";
  }
  let path = input;
  let fragment = "";
  const fragmentIndex = input.indexOf("#");
  if (fragmentIndex !== -1) {
    path = input.slice(0, fragmentIndex);
    fragment = input.slice(fragmentIndex);
  }
  const [s0, ...s] = path.split("?");
  const cleanPath = s0.endsWith("/") ? s0.slice(0, -1) : s0;
  return (cleanPath || "/") + (s.length > 0 ? `?${s.join("?")}` : "") + fragment;
}
function withTrailingSlash(input = "", respectQueryAndFragment) {
  if (!respectQueryAndFragment) {
    return input.endsWith("/") ? input : input + "/";
  }
  if (hasTrailingSlash(input, true)) {
    return input || "/";
  }
  let path = input;
  let fragment = "";
  const fragmentIndex = input.indexOf("#");
  if (fragmentIndex !== -1) {
    path = input.slice(0, fragmentIndex);
    fragment = input.slice(fragmentIndex);
    if (!path) {
      return fragment;
    }
  }
  const [s0, ...s] = path.split("?");
  return s0 + "/" + (s.length > 0 ? `?${s.join("?")}` : "") + fragment;
}
function hasLeadingSlash(input = "") {
  return input.startsWith("/");
}
function withLeadingSlash(input = "") {
  return hasLeadingSlash(input) ? input : "/" + input;
}
function withBase(input, base) {
  if (isEmptyURL(base) || hasProtocol(input)) {
    return input;
  }
  const _base = withoutTrailingSlash(base);
  if (input.startsWith(_base)) {
    const nextChar = input[_base.length];
    if (!nextChar || nextChar === "/" || nextChar === "?") {
      return input;
    }
  }
  return joinURL(_base, input);
}
function withoutBase(input, base) {
  if (isEmptyURL(base)) {
    return input;
  }
  const _base = withoutTrailingSlash(base);
  if (!input.startsWith(_base)) {
    return input;
  }
  const nextChar = input[_base.length];
  if (nextChar && nextChar !== "/" && nextChar !== "?") {
    return input;
  }
  const trimmed = input.slice(_base.length).replace(/^\/+/, "");
  return "/" + trimmed;
}
function withQuery(input, query) {
  const parsed = parseURL(input);
  const mergedQuery = { ...parseQuery(parsed.search), ...query };
  parsed.search = stringifyQuery(mergedQuery);
  return stringifyParsedURL(parsed);
}
function getQuery$1(input) {
  return parseQuery(parseURL(input).search);
}
function isEmptyURL(url) {
  return !url || url === "/";
}
function isNonEmptyURL(url) {
  return url && url !== "/";
}
function joinURL(base, ...input) {
  let url = base || "";
  for (const segment of input.filter((url2) => isNonEmptyURL(url2))) {
    if (url) {
      const _segment = segment.replace(JOIN_LEADING_SLASH_RE, "");
      url = withTrailingSlash(url) + _segment;
    } else {
      url = segment;
    }
  }
  return url;
}
function joinRelativeURL(..._input) {
  const JOIN_SEGMENT_SPLIT_RE = /\/(?!\/)/;
  const input = _input.filter(Boolean);
  const segments = [];
  let segmentsDepth = 0;
  for (const i of input) {
    if (!i || i === "/") {
      continue;
    }
    for (const [sindex, s] of i.split(JOIN_SEGMENT_SPLIT_RE).entries()) {
      if (!s || s === ".") {
        continue;
      }
      if (s === "..") {
        if (segments.length === 1 && hasProtocol(segments[0])) {
          continue;
        }
        segments.pop();
        segmentsDepth--;
        continue;
      }
      if (sindex === 1 && segments[segments.length - 1]?.endsWith(":/")) {
        segments[segments.length - 1] += "/" + s;
        continue;
      }
      segments.push(s);
      segmentsDepth++;
    }
  }
  let url = segments.join("/");
  if (segmentsDepth >= 0) {
    if (input[0]?.startsWith("/") && !url.startsWith("/")) {
      url = "/" + url;
    } else if (input[0]?.startsWith("./") && !url.startsWith("./")) {
      url = "./" + url;
    }
  } else {
    url = "../".repeat(-1 * segmentsDepth) + url;
  }
  if (input[input.length - 1]?.endsWith("/") && !url.endsWith("/")) {
    url += "/";
  }
  return url;
}

const protocolRelative = Symbol.for("ufo:protocolRelative");
function parseURL(input = "", defaultProto) {
  const _specialProtoMatch = input.match(
    /^[\s\0]*(blob:|data:|javascript:|vbscript:)(.*)/i
  );
  if (_specialProtoMatch) {
    const [, _proto, _pathname = ""] = _specialProtoMatch;
    return {
      protocol: _proto.toLowerCase(),
      pathname: _pathname,
      href: _proto + _pathname,
      auth: "",
      host: "",
      search: "",
      hash: ""
    };
  }
  if (!hasProtocol(input, { acceptRelative: true })) {
    return parsePath(input);
  }
  const [, protocol = "", auth, hostAndPath = ""] = input.replace(/\\/g, "/").match(/^[\s\0]*([\w+.-]{2,}:)?\/\/([^/@]+@)?(.*)/) || [];
  let [, host = "", path = ""] = hostAndPath.match(/([^#/?]*)(.*)?/) || [];
  if (protocol === "file:") {
    path = path.replace(/\/(?=[A-Za-z]:)/, "");
  }
  const { pathname, search, hash } = parsePath(path);
  return {
    protocol: protocol.toLowerCase(),
    auth: auth ? auth.slice(0, Math.max(0, auth.length - 1)) : "",
    host,
    pathname,
    search,
    hash,
    [protocolRelative]: !protocol
  };
}
function parsePath(input = "") {
  const [pathname = "", search = "", hash = ""] = (input.match(/([^#?]*)(\?[^#]*)?(#.*)?/) || []).splice(1);
  return {
    pathname,
    search,
    hash
  };
}
function stringifyParsedURL(parsed) {
  const pathname = parsed.pathname || "";
  const search = parsed.search ? (parsed.search.startsWith("?") ? "" : "?") + parsed.search : "";
  const hash = parsed.hash || "";
  const auth = parsed.auth ? parsed.auth + "@" : "";
  const host = parsed.host || "";
  const proto = parsed.protocol || parsed[protocolRelative] ? (parsed.protocol || "") + "//" : "";
  return proto + auth + host + pathname + search + hash;
}

const NODE_TYPES = {
  NORMAL: 0,
  WILDCARD: 1,
  PLACEHOLDER: 2
};

function createRouter$1(options = {}) {
  const ctx = {
    options,
    rootNode: createRadixNode(),
    staticRoutesMap: {}
  };
  const normalizeTrailingSlash = (p) => options.strictTrailingSlash ? p : p.replace(/\/$/, "") || "/";
  if (options.routes) {
    for (const path in options.routes) {
      insert(ctx, normalizeTrailingSlash(path), options.routes[path]);
    }
  }
  return {
    ctx,
    lookup: (path) => lookup(ctx, normalizeTrailingSlash(path)),
    insert: (path, data) => insert(ctx, normalizeTrailingSlash(path), data),
    remove: (path) => remove(ctx, normalizeTrailingSlash(path))
  };
}
function lookup(ctx, path) {
  const staticPathNode = ctx.staticRoutesMap[path];
  if (staticPathNode) {
    return staticPathNode.data;
  }
  const sections = path.split("/");
  const params = {};
  let paramsFound = false;
  let wildcardNode = null;
  let node = ctx.rootNode;
  let wildCardParam = null;
  for (let i = 0; i < sections.length; i++) {
    const section = sections[i];
    if (node.wildcardChildNode !== null) {
      wildcardNode = node.wildcardChildNode;
      wildCardParam = sections.slice(i).join("/");
    }
    const nextNode = node.children.get(section);
    if (nextNode === void 0) {
      if (node && node.placeholderChildren.length > 1) {
        const remaining = sections.length - i;
        node = node.placeholderChildren.find((c) => c.maxDepth === remaining) || null;
      } else {
        node = node.placeholderChildren[0] || null;
      }
      if (!node) {
        break;
      }
      if (node.paramName) {
        params[node.paramName] = section;
      }
      paramsFound = true;
    } else {
      node = nextNode;
    }
  }
  if ((node === null || node.data === null) && wildcardNode !== null) {
    node = wildcardNode;
    params[node.paramName || "_"] = wildCardParam;
    paramsFound = true;
  }
  if (!node) {
    return null;
  }
  if (paramsFound) {
    return {
      ...node.data,
      params: paramsFound ? params : void 0
    };
  }
  return node.data;
}
function insert(ctx, path, data) {
  let isStaticRoute = true;
  const sections = path.split("/");
  let node = ctx.rootNode;
  let _unnamedPlaceholderCtr = 0;
  const matchedNodes = [node];
  for (const section of sections) {
    let childNode;
    if (childNode = node.children.get(section)) {
      node = childNode;
    } else {
      const type = getNodeType(section);
      childNode = createRadixNode({ type, parent: node });
      node.children.set(section, childNode);
      if (type === NODE_TYPES.PLACEHOLDER) {
        childNode.paramName = section === "*" ? `_${_unnamedPlaceholderCtr++}` : section.slice(1);
        node.placeholderChildren.push(childNode);
        isStaticRoute = false;
      } else if (type === NODE_TYPES.WILDCARD) {
        node.wildcardChildNode = childNode;
        childNode.paramName = section.slice(
          3
          /* "**:" */
        ) || "_";
        isStaticRoute = false;
      }
      matchedNodes.push(childNode);
      node = childNode;
    }
  }
  for (const [depth, node2] of matchedNodes.entries()) {
    node2.maxDepth = Math.max(matchedNodes.length - depth, node2.maxDepth || 0);
  }
  node.data = data;
  if (isStaticRoute === true) {
    ctx.staticRoutesMap[path] = node;
  }
  return node;
}
function remove(ctx, path) {
  let success = false;
  const sections = path.split("/");
  let node = ctx.rootNode;
  for (const section of sections) {
    node = node.children.get(section);
    if (!node) {
      return success;
    }
  }
  if (node.data) {
    const lastSection = sections.at(-1) || "";
    node.data = null;
    if (Object.keys(node.children).length === 0 && node.parent) {
      node.parent.children.delete(lastSection);
      node.parent.wildcardChildNode = null;
      node.parent.placeholderChildren = [];
    }
    success = true;
  }
  return success;
}
function createRadixNode(options = {}) {
  return {
    type: options.type || NODE_TYPES.NORMAL,
    maxDepth: 0,
    parent: options.parent || null,
    children: /* @__PURE__ */ new Map(),
    data: options.data || null,
    paramName: options.paramName || null,
    wildcardChildNode: null,
    placeholderChildren: []
  };
}
function getNodeType(str) {
  if (str.startsWith("**")) {
    return NODE_TYPES.WILDCARD;
  }
  if (str[0] === ":" || str === "*") {
    return NODE_TYPES.PLACEHOLDER;
  }
  return NODE_TYPES.NORMAL;
}

function toRouteMatcher(router) {
  const table = _routerNodeToTable("", router.ctx.rootNode);
  return _createMatcher(table, router.ctx.options.strictTrailingSlash);
}
function _createMatcher(table, strictTrailingSlash) {
  return {
    ctx: { table },
    matchAll: (path) => _matchRoutes(path, table, strictTrailingSlash)
  };
}
function _createRouteTable() {
  return {
    static: /* @__PURE__ */ new Map(),
    wildcard: /* @__PURE__ */ new Map(),
    dynamic: /* @__PURE__ */ new Map()
  };
}
function _matchRoutes(path, table, strictTrailingSlash) {
  if (strictTrailingSlash !== true && path.endsWith("/")) {
    path = path.slice(0, -1) || "/";
  }
  const matches = [];
  for (const [key, value] of _sortRoutesMap(table.wildcard)) {
    if (path === key || path.startsWith(key + "/")) {
      matches.push(value);
    }
  }
  for (const [key, value] of _sortRoutesMap(table.dynamic)) {
    if (path.startsWith(key + "/")) {
      const subPath = "/" + path.slice(key.length).split("/").splice(2).join("/");
      matches.push(..._matchRoutes(subPath, value));
    }
  }
  const staticMatch = table.static.get(path);
  if (staticMatch) {
    matches.push(staticMatch);
  }
  return matches.filter(Boolean);
}
function _sortRoutesMap(m) {
  return [...m.entries()].sort((a, b) => a[0].length - b[0].length);
}
function _routerNodeToTable(initialPath, initialNode) {
  const table = _createRouteTable();
  function _addNode(path, node) {
    if (path) {
      if (node.type === NODE_TYPES.NORMAL && !(path.includes("*") || path.includes(":"))) {
        if (node.data) {
          table.static.set(path, node.data);
        }
      } else if (node.type === NODE_TYPES.WILDCARD) {
        table.wildcard.set(path.replace("/**", ""), node.data);
      } else if (node.type === NODE_TYPES.PLACEHOLDER) {
        const subTable = _routerNodeToTable("", node);
        if (node.data) {
          subTable.static.set("/", node.data);
        }
        table.dynamic.set(path.replace(/\/\*|\/:\w+/, ""), subTable);
        return;
      }
    }
    for (const [childPath, child] of node.children.entries()) {
      _addNode(`${path}/${childPath}`.replace("//", "/"), child);
    }
  }
  _addNode(initialPath, initialNode);
  return table;
}

function isPlainObject$1(value) {
  if (value === null || typeof value !== "object") {
    return false;
  }
  const prototype = Object.getPrototypeOf(value);
  if (prototype !== null && prototype !== Object.prototype && Object.getPrototypeOf(prototype) !== null) {
    return false;
  }
  if (Symbol.iterator in value) {
    return false;
  }
  if (Symbol.toStringTag in value) {
    return Object.prototype.toString.call(value) === "[object Module]";
  }
  return true;
}

function _defu$1(baseObject, defaults, namespace = ".", merger) {
  if (!isPlainObject$1(defaults)) {
    return _defu$1(baseObject, {}, namespace, merger);
  }
  const object = { ...defaults };
  for (const key of Object.keys(baseObject)) {
    if (key === "__proto__" || key === "constructor") {
      continue;
    }
    const value = baseObject[key];
    if (value === null || value === void 0) {
      continue;
    }
    if (merger && merger(object, key, value, namespace)) {
      continue;
    }
    if (Array.isArray(value) && Array.isArray(object[key])) {
      object[key] = [...value, ...object[key]];
    } else if (isPlainObject$1(value) && isPlainObject$1(object[key])) {
      object[key] = _defu$1(
        value,
        object[key],
        (namespace ? `${namespace}.` : "") + key.toString(),
        merger
      );
    } else {
      object[key] = value;
    }
  }
  return object;
}
function createDefu$1(merger) {
  return (...arguments_) => (
    // eslint-disable-next-line unicorn/no-array-reduce
    arguments_.reduce((p, c) => _defu$1(p, c, "", merger), {})
  );
}
const defu$1 = createDefu$1();

function o(n){throw new Error(`${n} is not implemented yet!`)}let i$1 = class i extends EventEmitter{__unenv__={};readableEncoding=null;readableEnded=true;readableFlowing=false;readableHighWaterMark=0;readableLength=0;readableObjectMode=false;readableAborted=false;readableDidRead=false;closed=false;errored=null;readable=false;destroyed=false;static from(e,t){return new i(t)}constructor(e){super();}_read(e){}read(e){}setEncoding(e){return this}pause(){return this}resume(){return this}isPaused(){return  true}unpipe(e){return this}unshift(e,t){}wrap(e){return this}push(e,t){return  false}_destroy(e,t){this.removeAllListeners();}destroy(e){return this.destroyed=true,this._destroy(e),this}pipe(e,t){return {}}compose(e,t){throw new Error("Method not implemented.")}[Symbol.asyncDispose](){return this.destroy(),Promise.resolve()}async*[Symbol.asyncIterator](){throw o("Readable.asyncIterator")}iterator(e){throw o("Readable.iterator")}map(e,t){throw o("Readable.map")}filter(e,t){throw o("Readable.filter")}forEach(e,t){throw o("Readable.forEach")}reduce(e,t,r){throw o("Readable.reduce")}find(e,t){throw o("Readable.find")}findIndex(e,t){throw o("Readable.findIndex")}some(e,t){throw o("Readable.some")}toArray(e){throw o("Readable.toArray")}every(e,t){throw o("Readable.every")}flatMap(e,t){throw o("Readable.flatMap")}drop(e,t){throw o("Readable.drop")}take(e,t){throw o("Readable.take")}asIndexedPairs(e){throw o("Readable.asIndexedPairs")}};let l$1 = class l extends EventEmitter{__unenv__={};writable=true;writableEnded=false;writableFinished=false;writableHighWaterMark=0;writableLength=0;writableObjectMode=false;writableCorked=0;closed=false;errored=null;writableNeedDrain=false;writableAborted=false;destroyed=false;_data;_encoding="utf8";constructor(e){super();}pipe(e,t){return {}}_write(e,t,r){if(this.writableEnded){r&&r();return}if(this._data===void 0)this._data=e;else {const s=typeof this._data=="string"?Buffer$1.from(this._data,this._encoding||t||"utf8"):this._data,a=typeof e=="string"?Buffer$1.from(e,t||this._encoding||"utf8"):e;this._data=Buffer$1.concat([s,a]);}this._encoding=t,r&&r();}_writev(e,t){}_destroy(e,t){}_final(e){}write(e,t,r){const s=typeof t=="string"?this._encoding:"utf8",a=typeof t=="function"?t:typeof r=="function"?r:void 0;return this._write(e,s,a),true}setDefaultEncoding(e){return this}end(e,t,r){const s=typeof e=="function"?e:typeof t=="function"?t:typeof r=="function"?r:void 0;if(this.writableEnded)return s&&s(),this;const a=e===s?void 0:e;if(a){const u=t===s?void 0:t;this.write(a,u);}return this.writableEnded=true,this.writableFinished=true,this.emit("close"),this.emit("finish"),s&&s(),this}cork(){}uncork(){}destroy(e){return this.destroyed=true,delete this._data,this.removeAllListeners(),this}compose(e,t){throw new Error("Method not implemented.")}[Symbol.asyncDispose](){return Promise.resolve()}};const c=class{allowHalfOpen=true;_destroy;constructor(e=new i$1,t=new l$1){Object.assign(this,e),Object.assign(this,t),this._destroy=m(e._destroy,t._destroy);}};function _(){return Object.assign(c.prototype,i$1.prototype),Object.assign(c.prototype,l$1.prototype),c}function m(...n){return function(...e){for(const t of n)t(...e);}}const g=_();class A extends g{__unenv__={};bufferSize=0;bytesRead=0;bytesWritten=0;connecting=false;destroyed=false;pending=false;localAddress="";localPort=0;remoteAddress="";remoteFamily="";remotePort=0;autoSelectFamilyAttemptedAddresses=[];readyState="readOnly";constructor(e){super();}write(e,t,r){return  false}connect(e,t,r){return this}end(e,t,r){return this}setEncoding(e){return this}pause(){return this}resume(){return this}setTimeout(e,t){return this}setNoDelay(e){return this}setKeepAlive(e,t){return this}address(){return {}}unref(){return this}ref(){return this}destroySoon(){this.destroy();}resetAndDestroy(){const e=new Error("ERR_SOCKET_CLOSED");return e.code="ERR_SOCKET_CLOSED",this.destroy(e),this}}class y extends i$1{aborted=false;httpVersion="1.1";httpVersionMajor=1;httpVersionMinor=1;complete=true;connection;socket;headers={};trailers={};method="GET";url="/";statusCode=200;statusMessage="";closed=false;errored=null;readable=false;constructor(e){super(),this.socket=this.connection=e||new A;}get rawHeaders(){const e=this.headers,t=[];for(const r in e)if(Array.isArray(e[r]))for(const s of e[r])t.push(r,s);else t.push(r,e[r]);return t}get rawTrailers(){return []}setTimeout(e,t){return this}get headersDistinct(){return p(this.headers)}get trailersDistinct(){return p(this.trailers)}}function p(n){const e={};for(const[t,r]of Object.entries(n))t&&(e[t]=(Array.isArray(r)?r:[r]).filter(Boolean));return e}class w extends l$1{statusCode=200;statusMessage="";upgrading=false;chunkedEncoding=false;shouldKeepAlive=false;useChunkedEncodingByDefault=false;sendDate=false;finished=false;headersSent=false;strictContentLength=false;connection=null;socket=null;req;_headers={};constructor(e){super(),this.req=e;}assignSocket(e){e._httpMessage=this,this.socket=e,this.connection=e,this.emit("socket",e),this._flush();}_flush(){this.flushHeaders();}detachSocket(e){}writeContinue(e){}writeHead(e,t,r){e&&(this.statusCode=e),typeof t=="string"&&(this.statusMessage=t,t=void 0);const s=r||t;if(s&&!Array.isArray(s))for(const a in s)this.setHeader(a,s[a]);return this.headersSent=true,this}writeProcessing(){}setTimeout(e,t){return this}appendHeader(e,t){e=e.toLowerCase();const r=this._headers[e],s=[...Array.isArray(r)?r:[r],...Array.isArray(t)?t:[t]].filter(Boolean);return this._headers[e]=s.length>1?s:s[0],this}setHeader(e,t){return this._headers[e.toLowerCase()]=t,this}setHeaders(e){for(const[t,r]of Object.entries(e))this.setHeader(t,r);return this}getHeader(e){return this._headers[e.toLowerCase()]}getHeaders(){return this._headers}getHeaderNames(){return Object.keys(this._headers)}hasHeader(e){return e.toLowerCase()in this._headers}removeHeader(e){delete this._headers[e.toLowerCase()];}addTrailers(e){}flushHeaders(){}writeEarlyHints(e,t){typeof t=="function"&&t();}}const E=(()=>{const n=function(){};return n.prototype=Object.create(null),n})();function R(n={}){const e=new E,t=Array.isArray(n)||H(n)?n:Object.entries(n);for(const[r,s]of t)if(s){if(e[r]===void 0){e[r]=s;continue}e[r]=[...Array.isArray(e[r])?e[r]:[e[r]],...Array.isArray(s)?s:[s]];}return e}function H(n){return typeof n?.entries=="function"}function v(n={}){if(n instanceof Headers)return n;const e=new Headers;for(const[t,r]of Object.entries(n))if(r!==void 0){if(Array.isArray(r)){for(const s of r)e.append(t,String(s));continue}e.set(t,String(r));}return e}const S=new Set([101,204,205,304]);async function b(n,e){const t=new y,r=new w(t);t.url=e.url?.toString()||"/";let s;if(!t.url.startsWith("/")){const d=new URL(t.url);s=d.host,t.url=d.pathname+d.search+d.hash;}t.method=e.method||"GET",t.headers=R(e.headers||{}),t.headers.host||(t.headers.host=e.host||s||"localhost"),t.connection.encrypted=t.connection.encrypted||e.protocol==="https",t.body=e.body||null,t.__unenv__=e.context,await n(t,r);let a=r._data;(S.has(r.statusCode)||t.method.toUpperCase()==="HEAD")&&(a=null,delete r._headers["content-length"]);const u={status:r.statusCode,statusText:r.statusMessage,headers:r._headers,body:a};return t.destroy(),r.destroy(),u}async function C(n,e,t={}){try{const r=await b(n,{url:e,...t});return new Response(r.body,{status:r.status,statusText:r.statusText,headers:v(r.headers)})}catch(r){return new Response(r.toString(),{status:Number.parseInt(r.statusCode||r.code)||500,statusText:r.statusText})}}

function hasProp(obj, prop) {
  try {
    return prop in obj;
  } catch {
    return false;
  }
}

class H3Error extends Error {
  static __h3_error__ = true;
  statusCode = 500;
  fatal = false;
  unhandled = false;
  statusMessage;
  data;
  cause;
  constructor(message, opts = {}) {
    super(message, opts);
    if (opts.cause && !this.cause) {
      this.cause = opts.cause;
    }
  }
  toJSON() {
    const obj = {
      message: this.message,
      statusCode: sanitizeStatusCode(this.statusCode, 500)
    };
    if (this.statusMessage) {
      obj.statusMessage = sanitizeStatusMessage(this.statusMessage);
    }
    if (this.data !== void 0) {
      obj.data = this.data;
    }
    return obj;
  }
}
function createError$1(input) {
  if (typeof input === "string") {
    return new H3Error(input);
  }
  if (isError(input)) {
    return input;
  }
  const err = new H3Error(input.message ?? input.statusMessage ?? "", {
    cause: input.cause || input
  });
  if (hasProp(input, "stack")) {
    try {
      Object.defineProperty(err, "stack", {
        get() {
          return input.stack;
        }
      });
    } catch {
      try {
        err.stack = input.stack;
      } catch {
      }
    }
  }
  if (input.data) {
    err.data = input.data;
  }
  if (input.statusCode) {
    err.statusCode = sanitizeStatusCode(input.statusCode, err.statusCode);
  } else if (input.status) {
    err.statusCode = sanitizeStatusCode(input.status, err.statusCode);
  }
  if (input.statusMessage) {
    err.statusMessage = input.statusMessage;
  } else if (input.statusText) {
    err.statusMessage = input.statusText;
  }
  if (err.statusMessage) {
    const originalMessage = err.statusMessage;
    const sanitizedMessage = sanitizeStatusMessage(err.statusMessage);
    if (sanitizedMessage !== originalMessage) {
      console.warn(
        "[h3] Please prefer using `message` for longer error messages instead of `statusMessage`. In the future, `statusMessage` will be sanitized by default."
      );
    }
  }
  if (input.fatal !== void 0) {
    err.fatal = input.fatal;
  }
  if (input.unhandled !== void 0) {
    err.unhandled = input.unhandled;
  }
  return err;
}
function sendError(event, error, debug) {
  if (event.handled) {
    return;
  }
  const h3Error = isError(error) ? error : createError$1(error);
  const responseBody = {
    statusCode: h3Error.statusCode,
    statusMessage: h3Error.statusMessage,
    stack: [],
    data: h3Error.data
  };
  if (debug) {
    responseBody.stack = (h3Error.stack || "").split("\n").map((l) => l.trim());
  }
  if (event.handled) {
    return;
  }
  const _code = Number.parseInt(h3Error.statusCode);
  setResponseStatus(event, _code, h3Error.statusMessage);
  event.node.res.setHeader("content-type", MIMES.json);
  event.node.res.end(JSON.stringify(responseBody, void 0, 2));
}
function isError(input) {
  return input?.constructor?.__h3_error__ === true;
}

function getQuery(event) {
  return getQuery$1(event.path || "");
}
function isMethod(event, expected, allowHead) {
  if (typeof expected === "string") {
    if (event.method === expected) {
      return true;
    }
  } else if (expected.includes(event.method)) {
    return true;
  }
  return false;
}
function assertMethod(event, expected, allowHead) {
  if (!isMethod(event, expected)) {
    throw createError$1({
      statusCode: 405,
      statusMessage: "HTTP method is not allowed."
    });
  }
}
function getRequestHeaders(event) {
  const _headers = {};
  for (const key in event.node.req.headers) {
    const val = event.node.req.headers[key];
    _headers[key] = Array.isArray(val) ? val.filter(Boolean).join(", ") : val;
  }
  return _headers;
}
function getRequestHeader(event, name) {
  const headers = getRequestHeaders(event);
  const value = headers[name.toLowerCase()];
  return value;
}
function getRequestHost(event, opts = {}) {
  if (opts.xForwardedHost) {
    const _header = event.node.req.headers["x-forwarded-host"];
    const xForwardedHost = (_header || "").split(",").shift()?.trim();
    if (xForwardedHost) {
      return xForwardedHost;
    }
  }
  return event.node.req.headers.host || "localhost";
}
function getRequestProtocol(event, opts = {}) {
  if (opts.xForwardedProto !== false && event.node.req.headers["x-forwarded-proto"] === "https") {
    return "https";
  }
  return event.node.req.connection?.encrypted ? "https" : "http";
}
function getRequestURL(event, opts = {}) {
  const host = getRequestHost(event, opts);
  const protocol = getRequestProtocol(event, opts);
  const path = (event.node.req.originalUrl || event.path).replace(
    /^[/\\]+/g,
    "/"
  );
  return new URL(path, `${protocol}://${host}`);
}

const RawBodySymbol = Symbol.for("h3RawBody");
const PayloadMethods$1 = ["PATCH", "POST", "PUT", "DELETE"];
function readRawBody(event, encoding = "utf8") {
  assertMethod(event, PayloadMethods$1);
  const _rawBody = event._requestBody || event.web?.request?.body || event.node.req[RawBodySymbol] || event.node.req.rawBody || event.node.req.body;
  if (_rawBody) {
    const promise2 = Promise.resolve(_rawBody).then((_resolved) => {
      if (Buffer.isBuffer(_resolved)) {
        return _resolved;
      }
      if (typeof _resolved.pipeTo === "function") {
        return new Promise((resolve, reject) => {
          const chunks = [];
          _resolved.pipeTo(
            new WritableStream({
              write(chunk) {
                chunks.push(chunk);
              },
              close() {
                resolve(Buffer.concat(chunks));
              },
              abort(reason) {
                reject(reason);
              }
            })
          ).catch(reject);
        });
      } else if (typeof _resolved.pipe === "function") {
        return new Promise((resolve, reject) => {
          const chunks = [];
          _resolved.on("data", (chunk) => {
            chunks.push(chunk);
          }).on("end", () => {
            resolve(Buffer.concat(chunks));
          }).on("error", reject);
        });
      }
      if (_resolved.constructor === Object) {
        return Buffer.from(JSON.stringify(_resolved));
      }
      if (_resolved instanceof URLSearchParams) {
        return Buffer.from(_resolved.toString());
      }
      if (_resolved instanceof FormData) {
        return new Response(_resolved).bytes().then((uint8arr) => Buffer.from(uint8arr));
      }
      return Buffer.from(_resolved);
    });
    return encoding ? promise2.then((buff) => buff.toString(encoding)) : promise2;
  }
  if (!Number.parseInt(event.node.req.headers["content-length"] || "") && !/\bchunked\b/i.test(
    String(event.node.req.headers["transfer-encoding"] ?? "")
  )) {
    return Promise.resolve(void 0);
  }
  const promise = event.node.req[RawBodySymbol] = new Promise(
    (resolve, reject) => {
      const bodyData = [];
      event.node.req.on("error", (err) => {
        reject(err);
      }).on("data", (chunk) => {
        bodyData.push(chunk);
      }).on("end", () => {
        resolve(Buffer.concat(bodyData));
      });
    }
  );
  const result = encoding ? promise.then((buff) => buff.toString(encoding)) : promise;
  return result;
}
function getRequestWebStream(event) {
  if (!PayloadMethods$1.includes(event.method)) {
    return;
  }
  const bodyStream = event.web?.request?.body || event._requestBody;
  if (bodyStream) {
    return bodyStream;
  }
  const _hasRawBody = RawBodySymbol in event.node.req || "rawBody" in event.node.req || "body" in event.node.req || "__unenv__" in event.node.req;
  if (_hasRawBody) {
    return new ReadableStream({
      async start(controller) {
        const _rawBody = await readRawBody(event, false);
        if (_rawBody) {
          controller.enqueue(_rawBody);
        }
        controller.close();
      }
    });
  }
  return new ReadableStream({
    start: (controller) => {
      event.node.req.on("data", (chunk) => {
        controller.enqueue(chunk);
      });
      event.node.req.on("end", () => {
        controller.close();
      });
      event.node.req.on("error", (err) => {
        controller.error(err);
      });
    }
  });
}

function handleCacheHeaders(event, opts) {
  const cacheControls = ["public", ...opts.cacheControls || []];
  let cacheMatched = false;
  if (opts.maxAge !== void 0) {
    cacheControls.push(`max-age=${+opts.maxAge}`, `s-maxage=${+opts.maxAge}`);
  }
  if (opts.modifiedTime) {
    const modifiedTime = new Date(opts.modifiedTime);
    const ifModifiedSince = event.node.req.headers["if-modified-since"];
    event.node.res.setHeader("last-modified", modifiedTime.toUTCString());
    if (ifModifiedSince && new Date(ifModifiedSince) >= modifiedTime) {
      cacheMatched = true;
    }
  }
  if (opts.etag) {
    event.node.res.setHeader("etag", opts.etag);
    const ifNonMatch = event.node.req.headers["if-none-match"];
    if (ifNonMatch === opts.etag) {
      cacheMatched = true;
    }
  }
  event.node.res.setHeader("cache-control", cacheControls.join(", "));
  if (cacheMatched) {
    event.node.res.statusCode = 304;
    if (!event.handled) {
      event.node.res.end();
    }
    return true;
  }
  return false;
}

const MIMES = {
  html: "text/html",
  json: "application/json"
};

const DISALLOWED_STATUS_CHARS = /[^\u0009\u0020-\u007E]/g;
function sanitizeStatusMessage(statusMessage = "") {
  return statusMessage.replace(DISALLOWED_STATUS_CHARS, "");
}
function sanitizeStatusCode(statusCode, defaultStatusCode = 200) {
  if (!statusCode) {
    return defaultStatusCode;
  }
  if (typeof statusCode === "string") {
    statusCode = Number.parseInt(statusCode, 10);
  }
  if (statusCode < 100 || statusCode > 999) {
    return defaultStatusCode;
  }
  return statusCode;
}
function splitCookiesString(cookiesString) {
  if (Array.isArray(cookiesString)) {
    return cookiesString.flatMap((c) => splitCookiesString(c));
  }
  if (typeof cookiesString !== "string") {
    return [];
  }
  const cookiesStrings = [];
  let pos = 0;
  let start;
  let ch;
  let lastComma;
  let nextStart;
  let cookiesSeparatorFound;
  const skipWhitespace = () => {
    while (pos < cookiesString.length && /\s/.test(cookiesString.charAt(pos))) {
      pos += 1;
    }
    return pos < cookiesString.length;
  };
  const notSpecialChar = () => {
    ch = cookiesString.charAt(pos);
    return ch !== "=" && ch !== ";" && ch !== ",";
  };
  while (pos < cookiesString.length) {
    start = pos;
    cookiesSeparatorFound = false;
    while (skipWhitespace()) {
      ch = cookiesString.charAt(pos);
      if (ch === ",") {
        lastComma = pos;
        pos += 1;
        skipWhitespace();
        nextStart = pos;
        while (pos < cookiesString.length && notSpecialChar()) {
          pos += 1;
        }
        if (pos < cookiesString.length && cookiesString.charAt(pos) === "=") {
          cookiesSeparatorFound = true;
          pos = nextStart;
          cookiesStrings.push(cookiesString.slice(start, lastComma));
          start = pos;
        } else {
          pos = lastComma + 1;
        }
      } else {
        pos += 1;
      }
    }
    if (!cookiesSeparatorFound || pos >= cookiesString.length) {
      cookiesStrings.push(cookiesString.slice(start));
    }
  }
  return cookiesStrings;
}

const defer = typeof setImmediate === "undefined" ? (fn) => fn() : setImmediate;
function send(event, data, type) {
  if (type) {
    defaultContentType(event, type);
  }
  return new Promise((resolve) => {
    defer(() => {
      if (!event.handled) {
        event.node.res.end(data);
      }
      resolve();
    });
  });
}
function sendNoContent(event, code) {
  if (event.handled) {
    return;
  }
  if (!code && event.node.res.statusCode !== 200) {
    code = event.node.res.statusCode;
  }
  const _code = sanitizeStatusCode(code, 204);
  if (_code === 204) {
    event.node.res.removeHeader("content-length");
  }
  event.node.res.writeHead(_code);
  event.node.res.end();
}
function setResponseStatus(event, code, text) {
  if (code) {
    event.node.res.statusCode = sanitizeStatusCode(
      code,
      event.node.res.statusCode
    );
  }
  if (text) {
    event.node.res.statusMessage = sanitizeStatusMessage(text);
  }
}
function getResponseStatus(event) {
  return event.node.res.statusCode;
}
function getResponseStatusText(event) {
  return event.node.res.statusMessage;
}
function defaultContentType(event, type) {
  if (type && event.node.res.statusCode !== 304 && !event.node.res.getHeader("content-type")) {
    event.node.res.setHeader("content-type", type);
  }
}
function sendRedirect(event, location, code = 302) {
  event.node.res.statusCode = sanitizeStatusCode(
    code,
    event.node.res.statusCode
  );
  event.node.res.setHeader("location", location);
  const encodedLoc = location.replace(/"/g, "%22");
  const html = `<!DOCTYPE html><html><head><meta http-equiv="refresh" content="0; url=${encodedLoc}"></head></html>`;
  return send(event, html, MIMES.html);
}
function getResponseHeader(event, name) {
  return event.node.res.getHeader(name);
}
function setResponseHeaders(event, headers) {
  for (const [name, value] of Object.entries(headers)) {
    event.node.res.setHeader(
      name,
      value
    );
  }
}
const setHeaders = setResponseHeaders;
function setResponseHeader(event, name, value) {
  event.node.res.setHeader(name, value);
}
function appendResponseHeader(event, name, value) {
  let current = event.node.res.getHeader(name);
  if (!current) {
    event.node.res.setHeader(name, value);
    return;
  }
  if (!Array.isArray(current)) {
    current = [current.toString()];
  }
  event.node.res.setHeader(name, [...current, value]);
}
function removeResponseHeader(event, name) {
  return event.node.res.removeHeader(name);
}
function isStream(data) {
  if (!data || typeof data !== "object") {
    return false;
  }
  if (typeof data.pipe === "function") {
    if (typeof data._read === "function") {
      return true;
    }
    if (typeof data.abort === "function") {
      return true;
    }
  }
  if (typeof data.pipeTo === "function") {
    return true;
  }
  return false;
}
function isWebResponse(data) {
  return typeof Response !== "undefined" && data instanceof Response;
}
function sendStream(event, stream) {
  if (!stream || typeof stream !== "object") {
    throw new Error("[h3] Invalid stream provided.");
  }
  event.node.res._data = stream;
  if (!event.node.res.socket) {
    event._handled = true;
    return Promise.resolve();
  }
  if (hasProp(stream, "pipeTo") && typeof stream.pipeTo === "function") {
    return stream.pipeTo(
      new WritableStream({
        write(chunk) {
          event.node.res.write(chunk);
        }
      })
    ).then(() => {
      event.node.res.end();
    });
  }
  if (hasProp(stream, "pipe") && typeof stream.pipe === "function") {
    return new Promise((resolve, reject) => {
      stream.pipe(event.node.res);
      if (stream.on) {
        stream.on("end", () => {
          event.node.res.end();
          resolve();
        });
        stream.on("error", (error) => {
          reject(error);
        });
      }
      event.node.res.on("close", () => {
        if (stream.abort) {
          stream.abort();
        }
      });
    });
  }
  throw new Error("[h3] Invalid or incompatible stream provided.");
}
function sendWebResponse(event, response) {
  for (const [key, value] of response.headers) {
    if (key === "set-cookie") {
      event.node.res.appendHeader(key, splitCookiesString(value));
    } else {
      event.node.res.setHeader(key, value);
    }
  }
  if (response.status) {
    event.node.res.statusCode = sanitizeStatusCode(
      response.status,
      event.node.res.statusCode
    );
  }
  if (response.statusText) {
    event.node.res.statusMessage = sanitizeStatusMessage(response.statusText);
  }
  if (response.redirected) {
    event.node.res.setHeader("location", response.url);
  }
  if (!response.body) {
    event.node.res.end();
    return;
  }
  return sendStream(event, response.body);
}

const PayloadMethods = /* @__PURE__ */ new Set(["PATCH", "POST", "PUT", "DELETE"]);
const ignoredHeaders = /* @__PURE__ */ new Set([
  "transfer-encoding",
  "accept-encoding",
  "connection",
  "keep-alive",
  "upgrade",
  "expect",
  "host",
  "accept"
]);
async function proxyRequest(event, target, opts = {}) {
  let body;
  let duplex;
  if (PayloadMethods.has(event.method)) {
    if (opts.streamRequest) {
      body = getRequestWebStream(event);
      duplex = "half";
    } else {
      body = await readRawBody(event, false).catch(() => void 0);
    }
  }
  const method = opts.fetchOptions?.method || event.method;
  const fetchHeaders = mergeHeaders$1(
    getProxyRequestHeaders(event, { host: target.startsWith("/") }),
    opts.fetchOptions?.headers,
    opts.headers
  );
  return sendProxy(event, target, {
    ...opts,
    fetchOptions: {
      method,
      body,
      duplex,
      ...opts.fetchOptions,
      headers: fetchHeaders
    }
  });
}
async function sendProxy(event, target, opts = {}) {
  let response;
  try {
    response = await _getFetch(opts.fetch)(target, {
      headers: opts.headers,
      ignoreResponseError: true,
      // make $ofetch.raw transparent
      ...opts.fetchOptions
    });
  } catch (error) {
    throw createError$1({
      status: 502,
      statusMessage: "Bad Gateway",
      cause: error
    });
  }
  event.node.res.statusCode = sanitizeStatusCode(
    response.status,
    event.node.res.statusCode
  );
  event.node.res.statusMessage = sanitizeStatusMessage(response.statusText);
  const cookies = [];
  for (const [key, value] of response.headers.entries()) {
    if (key === "content-encoding") {
      continue;
    }
    if (key === "content-length") {
      continue;
    }
    if (key === "set-cookie") {
      cookies.push(...splitCookiesString(value));
      continue;
    }
    event.node.res.setHeader(key, value);
  }
  if (cookies.length > 0) {
    event.node.res.setHeader(
      "set-cookie",
      cookies.map((cookie) => {
        if (opts.cookieDomainRewrite) {
          cookie = rewriteCookieProperty(
            cookie,
            opts.cookieDomainRewrite,
            "domain"
          );
        }
        if (opts.cookiePathRewrite) {
          cookie = rewriteCookieProperty(
            cookie,
            opts.cookiePathRewrite,
            "path"
          );
        }
        return cookie;
      })
    );
  }
  if (opts.onResponse) {
    await opts.onResponse(event, response);
  }
  if (response._data !== void 0) {
    return response._data;
  }
  if (event.handled) {
    return;
  }
  if (opts.sendStream === false) {
    const data = new Uint8Array(await response.arrayBuffer());
    return event.node.res.end(data);
  }
  if (response.body) {
    for await (const chunk of response.body) {
      event.node.res.write(chunk);
    }
  }
  return event.node.res.end();
}
function getProxyRequestHeaders(event, opts) {
  const headers = /* @__PURE__ */ Object.create(null);
  const reqHeaders = getRequestHeaders(event);
  for (const name in reqHeaders) {
    if (!ignoredHeaders.has(name) || name === "host" && opts?.host) {
      headers[name] = reqHeaders[name];
    }
  }
  return headers;
}
function fetchWithEvent(event, req, init, options) {
  return _getFetch(options?.fetch)(req, {
    ...init,
    context: init?.context || event.context,
    headers: {
      ...getProxyRequestHeaders(event, {
        host: typeof req === "string" && req.startsWith("/")
      }),
      ...init?.headers
    }
  });
}
function _getFetch(_fetch) {
  if (_fetch) {
    return _fetch;
  }
  if (globalThis.fetch) {
    return globalThis.fetch;
  }
  throw new Error(
    "fetch is not available. Try importing `node-fetch-native/polyfill` for Node.js."
  );
}
function rewriteCookieProperty(header, map, property) {
  const _map = typeof map === "string" ? { "*": map } : map;
  return header.replace(
    new RegExp(`(;\\s*${property}=)([^;]+)`, "gi"),
    (match, prefix, previousValue) => {
      let newValue;
      if (previousValue in _map) {
        newValue = _map[previousValue];
      } else if ("*" in _map) {
        newValue = _map["*"];
      } else {
        return match;
      }
      return newValue ? prefix + newValue : "";
    }
  );
}
function mergeHeaders$1(defaults, ...inputs) {
  const _inputs = inputs.filter(Boolean);
  if (_inputs.length === 0) {
    return defaults;
  }
  const merged = new Headers(defaults);
  for (const input of _inputs) {
    const entries = Array.isArray(input) ? input : typeof input.entries === "function" ? input.entries() : Object.entries(input);
    for (const [key, value] of entries) {
      if (value !== void 0) {
        merged.set(key, value);
      }
    }
  }
  return merged;
}

class H3Event {
  "__is_event__" = true;
  // Context
  node;
  // Node
  web;
  // Web
  context = {};
  // Shared
  // Request
  _method;
  _path;
  _headers;
  _requestBody;
  // Response
  _handled = false;
  // Hooks
  _onBeforeResponseCalled;
  _onAfterResponseCalled;
  constructor(req, res) {
    this.node = { req, res };
  }
  // --- Request ---
  get method() {
    if (!this._method) {
      this._method = (this.node.req.method || "GET").toUpperCase();
    }
    return this._method;
  }
  get path() {
    return this._path || this.node.req.url || "/";
  }
  get headers() {
    if (!this._headers) {
      this._headers = _normalizeNodeHeaders(this.node.req.headers);
    }
    return this._headers;
  }
  // --- Respoonse ---
  get handled() {
    return this._handled || this.node.res.writableEnded || this.node.res.headersSent;
  }
  respondWith(response) {
    return Promise.resolve(response).then(
      (_response) => sendWebResponse(this, _response)
    );
  }
  // --- Utils ---
  toString() {
    return `[${this.method}] ${this.path}`;
  }
  toJSON() {
    return this.toString();
  }
  // --- Deprecated ---
  /** @deprecated Please use `event.node.req` instead. */
  get req() {
    return this.node.req;
  }
  /** @deprecated Please use `event.node.res` instead. */
  get res() {
    return this.node.res;
  }
}
function isEvent(input) {
  return hasProp(input, "__is_event__");
}
function createEvent(req, res) {
  return new H3Event(req, res);
}
function _normalizeNodeHeaders(nodeHeaders) {
  const headers = new Headers();
  for (const [name, value] of Object.entries(nodeHeaders)) {
    if (Array.isArray(value)) {
      for (const item of value) {
        headers.append(name, item);
      }
    } else if (value) {
      headers.set(name, value);
    }
  }
  return headers;
}

function defineEventHandler(handler) {
  if (typeof handler === "function") {
    handler.__is_handler__ = true;
    return handler;
  }
  const _hooks = {
    onRequest: _normalizeArray(handler.onRequest),
    onBeforeResponse: _normalizeArray(handler.onBeforeResponse)
  };
  const _handler = (event) => {
    return _callHandler(event, handler.handler, _hooks);
  };
  _handler.__is_handler__ = true;
  _handler.__resolve__ = handler.handler.__resolve__;
  _handler.__websocket__ = handler.websocket;
  return _handler;
}
function _normalizeArray(input) {
  return input ? Array.isArray(input) ? input : [input] : void 0;
}
async function _callHandler(event, handler, hooks) {
  if (hooks.onRequest) {
    for (const hook of hooks.onRequest) {
      await hook(event);
      if (event.handled) {
        return;
      }
    }
  }
  const body = await handler(event);
  const response = { body };
  if (hooks.onBeforeResponse) {
    for (const hook of hooks.onBeforeResponse) {
      await hook(event, response);
    }
  }
  return response.body;
}
const eventHandler = defineEventHandler;
function isEventHandler(input) {
  return hasProp(input, "__is_handler__");
}
function toEventHandler(input, _, _route) {
  return input;
}
function defineLazyEventHandler(factory) {
  let _promise;
  let _resolved;
  const resolveHandler = () => {
    if (_resolved) {
      return Promise.resolve(_resolved);
    }
    if (!_promise) {
      _promise = Promise.resolve(factory()).then((r) => {
        const handler2 = r.default || r;
        if (typeof handler2 !== "function") {
          throw new TypeError(
            "Invalid lazy handler result. It should be a function:",
            handler2
          );
        }
        _resolved = { handler: toEventHandler(r.default || r) };
        return _resolved;
      });
    }
    return _promise;
  };
  const handler = eventHandler((event) => {
    if (_resolved) {
      return _resolved.handler(event);
    }
    return resolveHandler().then((r) => r.handler(event));
  });
  handler.__resolve__ = resolveHandler;
  return handler;
}
const lazyEventHandler = defineLazyEventHandler;

function createApp(options = {}) {
  const stack = [];
  const handler = createAppEventHandler(stack, options);
  const resolve = createResolver(stack);
  handler.__resolve__ = resolve;
  const getWebsocket = cachedFn(() => websocketOptions(resolve, options));
  const app = {
    // @ts-expect-error
    use: (arg1, arg2, arg3) => use(app, arg1, arg2, arg3),
    resolve,
    handler,
    stack,
    options,
    get websocket() {
      return getWebsocket();
    }
  };
  return app;
}
function use(app, arg1, arg2, arg3) {
  if (Array.isArray(arg1)) {
    for (const i of arg1) {
      use(app, i, arg2, arg3);
    }
  } else if (Array.isArray(arg2)) {
    for (const i of arg2) {
      use(app, arg1, i, arg3);
    }
  } else if (typeof arg1 === "string") {
    app.stack.push(
      normalizeLayer({ ...arg3, route: arg1, handler: arg2 })
    );
  } else if (typeof arg1 === "function") {
    app.stack.push(normalizeLayer({ ...arg2, handler: arg1 }));
  } else {
    app.stack.push(normalizeLayer({ ...arg1 }));
  }
  return app;
}
function createAppEventHandler(stack, options) {
  const spacing = options.debug ? 2 : void 0;
  return eventHandler(async (event) => {
    event.node.req.originalUrl = event.node.req.originalUrl || event.node.req.url || "/";
    const _rawReqUrl = event.node.req.url || "/";
    const _reqPath = _decodePath(event._path || _rawReqUrl);
    event._path = _reqPath;
    const _needsRawUrl = _reqPath !== _rawReqUrl;
    let _layerPath;
    if (options.onRequest) {
      await options.onRequest(event);
    }
    for (const layer of stack) {
      if (layer.route.length > 1) {
        if (!_reqPath.startsWith(layer.route)) {
          continue;
        }
        _layerPath = _reqPath.slice(layer.route.length) || "/";
      } else {
        _layerPath = _reqPath;
      }
      if (layer.match && !layer.match(_layerPath, event)) {
        continue;
      }
      event._path = _layerPath;
      event.node.req.url = _needsRawUrl ? layer.route.length > 1 ? _rawReqUrl.slice(layer.route.length) || "/" : _rawReqUrl : _layerPath;
      const val = await layer.handler(event);
      const _body = val === void 0 ? void 0 : await val;
      if (_body !== void 0) {
        const _response = { body: _body };
        if (options.onBeforeResponse) {
          event._onBeforeResponseCalled = true;
          await options.onBeforeResponse(event, _response);
        }
        await handleHandlerResponse(event, _response.body, spacing);
        if (options.onAfterResponse) {
          event._onAfterResponseCalled = true;
          await options.onAfterResponse(event, _response);
        }
        return;
      }
      if (event.handled) {
        if (options.onAfterResponse) {
          event._onAfterResponseCalled = true;
          await options.onAfterResponse(event, void 0);
        }
        return;
      }
    }
    if (!event.handled) {
      throw createError$1({
        statusCode: 404,
        statusMessage: `Cannot find any path matching ${event.path || "/"}.`
      });
    }
    if (options.onAfterResponse) {
      event._onAfterResponseCalled = true;
      await options.onAfterResponse(event, void 0);
    }
  });
}
function createResolver(stack) {
  return async (path) => {
    let _layerPath;
    for (const layer of stack) {
      if (layer.route === "/" && !layer.handler.__resolve__) {
        continue;
      }
      if (!path.startsWith(layer.route)) {
        continue;
      }
      _layerPath = path.slice(layer.route.length) || "/";
      if (layer.match && !layer.match(_layerPath, void 0)) {
        continue;
      }
      let res = { route: layer.route, handler: layer.handler };
      if (res.handler.__resolve__) {
        const _res = await res.handler.__resolve__(_layerPath);
        if (!_res) {
          continue;
        }
        res = {
          ...res,
          ..._res,
          route: joinURL(res.route || "/", _res.route || "/")
        };
      }
      return res;
    }
  };
}
function normalizeLayer(input) {
  let handler = input.handler;
  if (handler.handler) {
    handler = handler.handler;
  }
  if (input.lazy) {
    handler = lazyEventHandler(handler);
  } else if (!isEventHandler(handler)) {
    handler = toEventHandler(handler, void 0, input.route);
  }
  return {
    route: withoutTrailingSlash(input.route),
    match: input.match,
    handler
  };
}
function handleHandlerResponse(event, val, jsonSpace) {
  if (val === null) {
    return sendNoContent(event);
  }
  if (val) {
    if (isWebResponse(val)) {
      return sendWebResponse(event, val);
    }
    if (isStream(val)) {
      return sendStream(event, val);
    }
    if (val.buffer) {
      return send(event, val);
    }
    if (val.arrayBuffer && typeof val.arrayBuffer === "function") {
      return val.arrayBuffer().then((arrayBuffer) => {
        return send(event, Buffer.from(arrayBuffer), val.type);
      });
    }
    if (val instanceof Error) {
      throw createError$1(val);
    }
    if (typeof val.end === "function") {
      return true;
    }
  }
  const valType = typeof val;
  if (valType === "string") {
    return send(event, val, MIMES.html);
  }
  if (valType === "object" || valType === "boolean" || valType === "number") {
    return send(event, JSON.stringify(val, void 0, jsonSpace), MIMES.json);
  }
  if (valType === "bigint") {
    return send(event, val.toString(), MIMES.json);
  }
  throw createError$1({
    statusCode: 500,
    statusMessage: `[h3] Cannot send ${valType} as response.`
  });
}
function cachedFn(fn) {
  let cache;
  return () => {
    if (!cache) {
      cache = fn();
    }
    return cache;
  };
}
function _decodePath(url) {
  const qIndex = url.indexOf("?");
  const path = qIndex === -1 ? url : url.slice(0, qIndex);
  const query = qIndex === -1 ? "" : url.slice(qIndex);
  const decodedPath = path.includes("%25") ? decodePath(path.replace(/%25/g, "%2525")) : decodePath(path);
  return decodedPath + query;
}
function websocketOptions(evResolver, appOptions) {
  return {
    ...appOptions.websocket,
    async resolve(info) {
      const url = info.request?.url || info.url || "/";
      const { pathname } = typeof url === "string" ? parseURL(url) : url;
      const resolved = await evResolver(pathname);
      return resolved?.handler?.__websocket__ || {};
    }
  };
}

const RouterMethods = [
  "connect",
  "delete",
  "get",
  "head",
  "options",
  "post",
  "put",
  "trace",
  "patch"
];
function createRouter(opts = {}) {
  const _router = createRouter$1({});
  const routes = {};
  let _matcher;
  const router = {};
  const addRoute = (path, handler, method) => {
    let route = routes[path];
    if (!route) {
      routes[path] = route = { path, handlers: {} };
      _router.insert(path, route);
    }
    if (Array.isArray(method)) {
      for (const m of method) {
        addRoute(path, handler, m);
      }
    } else {
      route.handlers[method] = toEventHandler(handler);
    }
    return router;
  };
  router.use = router.add = (path, handler, method) => addRoute(path, handler, method || "all");
  for (const method of RouterMethods) {
    router[method] = (path, handle) => router.add(path, handle, method);
  }
  const matchHandler = (path = "/", method = "get") => {
    const qIndex = path.indexOf("?");
    if (qIndex !== -1) {
      path = path.slice(0, Math.max(0, qIndex));
    }
    const matched = _router.lookup(path);
    if (!matched || !matched.handlers) {
      return {
        error: createError$1({
          statusCode: 404,
          name: "Not Found",
          statusMessage: `Cannot find any route matching ${path || "/"}.`
        })
      };
    }
    let handler = matched.handlers[method] || matched.handlers.all;
    if (!handler) {
      if (!_matcher) {
        _matcher = toRouteMatcher(_router);
      }
      const _matches = _matcher.matchAll(path).reverse();
      for (const _match of _matches) {
        if (_match.handlers[method]) {
          handler = _match.handlers[method];
          matched.handlers[method] = matched.handlers[method] || handler;
          break;
        }
        if (_match.handlers.all) {
          handler = _match.handlers.all;
          matched.handlers.all = matched.handlers.all || handler;
          break;
        }
      }
    }
    if (!handler) {
      return {
        error: createError$1({
          statusCode: 405,
          name: "Method Not Allowed",
          statusMessage: `Method ${method} is not allowed on this route.`
        })
      };
    }
    return { matched, handler };
  };
  const isPreemptive = opts.preemptive || opts.preemtive;
  router.handler = eventHandler((event) => {
    const match = matchHandler(
      event.path,
      event.method.toLowerCase()
    );
    if ("error" in match) {
      if (isPreemptive) {
        throw match.error;
      } else {
        return;
      }
    }
    event.context.matchedRoute = match.matched;
    const params = match.matched.params || {};
    event.context.params = params;
    return Promise.resolve(match.handler(event)).then((res) => {
      if (res === void 0 && isPreemptive) {
        return null;
      }
      return res;
    });
  });
  router.handler.__resolve__ = async (path) => {
    path = withLeadingSlash(path);
    const match = matchHandler(path);
    if ("error" in match) {
      return;
    }
    let res = {
      route: match.matched.path,
      handler: match.handler
    };
    if (match.handler.__resolve__) {
      const _res = await match.handler.__resolve__(path);
      if (!_res) {
        return;
      }
      res = { ...res, ..._res };
    }
    return res;
  };
  return router;
}
function toNodeListener(app) {
  const toNodeHandle = async function(req, res) {
    const event = createEvent(req, res);
    try {
      await app.handler(event);
    } catch (_error) {
      const error = createError$1(_error);
      if (!isError(_error)) {
        error.unhandled = true;
      }
      setResponseStatus(event, error.statusCode, error.statusMessage);
      if (app.options.onError) {
        await app.options.onError(error, event);
      }
      if (event.handled) {
        return;
      }
      if (error.unhandled || error.fatal) {
        console.error("[h3]", error.fatal ? "[fatal]" : "[unhandled]", error);
      }
      if (app.options.onBeforeResponse && !event._onBeforeResponseCalled) {
        await app.options.onBeforeResponse(event, { body: error });
      }
      await sendError(event, error, !!app.options.debug);
      if (app.options.onAfterResponse && !event._onAfterResponseCalled) {
        await app.options.onAfterResponse(event, { body: error });
      }
    }
  };
  return toNodeHandle;
}

function flatHooks(configHooks, hooks = {}, parentName) {
  for (const key in configHooks) {
    const subHook = configHooks[key];
    const name = parentName ? `${parentName}:${key}` : key;
    if (typeof subHook === "object" && subHook !== null) {
      flatHooks(subHook, hooks, name);
    } else if (typeof subHook === "function") {
      hooks[name] = subHook;
    }
  }
  return hooks;
}
const defaultTask = { run: (function_) => function_() };
const _createTask = () => defaultTask;
const createTask = typeof console.createTask !== "undefined" ? console.createTask : _createTask;
function serialTaskCaller(hooks, args) {
  const name = args.shift();
  const task = createTask(name);
  return hooks.reduce(
    (promise, hookFunction) => promise.then(() => task.run(() => hookFunction(...args))),
    Promise.resolve()
  );
}
function parallelTaskCaller(hooks, args) {
  const name = args.shift();
  const task = createTask(name);
  return Promise.all(hooks.map((hook) => task.run(() => hook(...args))));
}
function callEachWith(callbacks, arg0) {
  for (const callback of [...callbacks]) {
    callback(arg0);
  }
}

class Hookable {
  constructor() {
    this._hooks = {};
    this._before = void 0;
    this._after = void 0;
    this._deprecatedMessages = void 0;
    this._deprecatedHooks = {};
    this.hook = this.hook.bind(this);
    this.callHook = this.callHook.bind(this);
    this.callHookWith = this.callHookWith.bind(this);
  }
  hook(name, function_, options = {}) {
    if (!name || typeof function_ !== "function") {
      return () => {
      };
    }
    const originalName = name;
    let dep;
    while (this._deprecatedHooks[name]) {
      dep = this._deprecatedHooks[name];
      name = dep.to;
    }
    if (dep && !options.allowDeprecated) {
      let message = dep.message;
      if (!message) {
        message = `${originalName} hook has been deprecated` + (dep.to ? `, please use ${dep.to}` : "");
      }
      if (!this._deprecatedMessages) {
        this._deprecatedMessages = /* @__PURE__ */ new Set();
      }
      if (!this._deprecatedMessages.has(message)) {
        console.warn(message);
        this._deprecatedMessages.add(message);
      }
    }
    if (!function_.name) {
      try {
        Object.defineProperty(function_, "name", {
          get: () => "_" + name.replace(/\W+/g, "_") + "_hook_cb",
          configurable: true
        });
      } catch {
      }
    }
    this._hooks[name] = this._hooks[name] || [];
    this._hooks[name].push(function_);
    return () => {
      if (function_) {
        this.removeHook(name, function_);
        function_ = void 0;
      }
    };
  }
  hookOnce(name, function_) {
    let _unreg;
    let _function = (...arguments_) => {
      if (typeof _unreg === "function") {
        _unreg();
      }
      _unreg = void 0;
      _function = void 0;
      return function_(...arguments_);
    };
    _unreg = this.hook(name, _function);
    return _unreg;
  }
  removeHook(name, function_) {
    if (this._hooks[name]) {
      const index = this._hooks[name].indexOf(function_);
      if (index !== -1) {
        this._hooks[name].splice(index, 1);
      }
      if (this._hooks[name].length === 0) {
        delete this._hooks[name];
      }
    }
  }
  deprecateHook(name, deprecated) {
    this._deprecatedHooks[name] = typeof deprecated === "string" ? { to: deprecated } : deprecated;
    const _hooks = this._hooks[name] || [];
    delete this._hooks[name];
    for (const hook of _hooks) {
      this.hook(name, hook);
    }
  }
  deprecateHooks(deprecatedHooks) {
    Object.assign(this._deprecatedHooks, deprecatedHooks);
    for (const name in deprecatedHooks) {
      this.deprecateHook(name, deprecatedHooks[name]);
    }
  }
  addHooks(configHooks) {
    const hooks = flatHooks(configHooks);
    const removeFns = Object.keys(hooks).map(
      (key) => this.hook(key, hooks[key])
    );
    return () => {
      for (const unreg of removeFns.splice(0, removeFns.length)) {
        unreg();
      }
    };
  }
  removeHooks(configHooks) {
    const hooks = flatHooks(configHooks);
    for (const key in hooks) {
      this.removeHook(key, hooks[key]);
    }
  }
  removeAllHooks() {
    for (const key in this._hooks) {
      delete this._hooks[key];
    }
  }
  callHook(name, ...arguments_) {
    arguments_.unshift(name);
    return this.callHookWith(serialTaskCaller, name, ...arguments_);
  }
  callHookParallel(name, ...arguments_) {
    arguments_.unshift(name);
    return this.callHookWith(parallelTaskCaller, name, ...arguments_);
  }
  callHookWith(caller, name, ...arguments_) {
    const event = this._before || this._after ? { name, args: arguments_, context: {} } : void 0;
    if (this._before) {
      callEachWith(this._before, event);
    }
    const result = caller(
      name in this._hooks ? [...this._hooks[name]] : [],
      arguments_
    );
    if (result instanceof Promise) {
      return result.finally(() => {
        if (this._after && event) {
          callEachWith(this._after, event);
        }
      });
    }
    if (this._after && event) {
      callEachWith(this._after, event);
    }
    return result;
  }
  beforeEach(function_) {
    this._before = this._before || [];
    this._before.push(function_);
    return () => {
      if (this._before !== void 0) {
        const index = this._before.indexOf(function_);
        if (index !== -1) {
          this._before.splice(index, 1);
        }
      }
    };
  }
  afterEach(function_) {
    this._after = this._after || [];
    this._after.push(function_);
    return () => {
      if (this._after !== void 0) {
        const index = this._after.indexOf(function_);
        if (index !== -1) {
          this._after.splice(index, 1);
        }
      }
    };
  }
}
function createHooks() {
  return new Hookable();
}

const s=globalThis.Headers,i=globalThis.AbortController,l=globalThis.fetch||(()=>{throw new Error("[node-fetch-native] Failed to fetch: `globalThis.fetch` is not available!")});

class FetchError extends Error {
  constructor(message, opts) {
    super(message, opts);
    this.name = "FetchError";
    if (opts?.cause && !this.cause) {
      this.cause = opts.cause;
    }
  }
}
function createFetchError(ctx) {
  const errorMessage = ctx.error?.message || ctx.error?.toString() || "";
  const method = ctx.request?.method || ctx.options?.method || "GET";
  const url = ctx.request?.url || String(ctx.request) || "/";
  const requestStr = `[${method}] ${JSON.stringify(url)}`;
  const statusStr = ctx.response ? `${ctx.response.status} ${ctx.response.statusText}` : "<no response>";
  const message = `${requestStr}: ${statusStr}${errorMessage ? ` ${errorMessage}` : ""}`;
  const fetchError = new FetchError(
    message,
    ctx.error ? { cause: ctx.error } : void 0
  );
  for (const key of ["request", "options", "response"]) {
    Object.defineProperty(fetchError, key, {
      get() {
        return ctx[key];
      }
    });
  }
  for (const [key, refKey] of [
    ["data", "_data"],
    ["status", "status"],
    ["statusCode", "status"],
    ["statusText", "statusText"],
    ["statusMessage", "statusText"]
  ]) {
    Object.defineProperty(fetchError, key, {
      get() {
        return ctx.response && ctx.response[refKey];
      }
    });
  }
  return fetchError;
}

const payloadMethods = new Set(
  Object.freeze(["PATCH", "POST", "PUT", "DELETE"])
);
function isPayloadMethod(method = "GET") {
  return payloadMethods.has(method.toUpperCase());
}
function isJSONSerializable(value) {
  if (value === void 0) {
    return false;
  }
  const t = typeof value;
  if (t === "string" || t === "number" || t === "boolean" || t === null) {
    return true;
  }
  if (t !== "object") {
    return false;
  }
  if (Array.isArray(value)) {
    return true;
  }
  if (value.buffer) {
    return false;
  }
  if (value instanceof FormData || value instanceof URLSearchParams) {
    return false;
  }
  return value.constructor && value.constructor.name === "Object" || typeof value.toJSON === "function";
}
const textTypes = /* @__PURE__ */ new Set([
  "image/svg",
  "application/xml",
  "application/xhtml",
  "application/html"
]);
const JSON_RE = /^application\/(?:[\w!#$%&*.^`~-]*\+)?json(;.+)?$/i;
function detectResponseType(_contentType = "") {
  if (!_contentType) {
    return "json";
  }
  const contentType = _contentType.split(";").shift() || "";
  if (JSON_RE.test(contentType)) {
    return "json";
  }
  if (contentType === "text/event-stream") {
    return "stream";
  }
  if (textTypes.has(contentType) || contentType.startsWith("text/")) {
    return "text";
  }
  return "blob";
}
function resolveFetchOptions(request, input, defaults, Headers) {
  const headers = mergeHeaders(
    input?.headers ?? request?.headers,
    defaults?.headers,
    Headers
  );
  let query;
  if (defaults?.query || defaults?.params || input?.params || input?.query) {
    query = {
      ...defaults?.params,
      ...defaults?.query,
      ...input?.params,
      ...input?.query
    };
  }
  return {
    ...defaults,
    ...input,
    query,
    params: query,
    headers
  };
}
function mergeHeaders(input, defaults, Headers) {
  if (!defaults) {
    return new Headers(input);
  }
  const headers = new Headers(defaults);
  if (input) {
    for (const [key, value] of Symbol.iterator in input || Array.isArray(input) ? input : new Headers(input)) {
      headers.set(key, value);
    }
  }
  return headers;
}
async function callHooks(context, hooks) {
  if (hooks) {
    if (Array.isArray(hooks)) {
      for (const hook of hooks) {
        await hook(context);
      }
    } else {
      await hooks(context);
    }
  }
}

const retryStatusCodes = /* @__PURE__ */ new Set([
  408,
  // Request Timeout
  409,
  // Conflict
  425,
  // Too Early (Experimental)
  429,
  // Too Many Requests
  500,
  // Internal Server Error
  502,
  // Bad Gateway
  503,
  // Service Unavailable
  504
  // Gateway Timeout
]);
const nullBodyResponses = /* @__PURE__ */ new Set([101, 204, 205, 304]);
function createFetch(globalOptions = {}) {
  const {
    fetch = globalThis.fetch,
    Headers = globalThis.Headers,
    AbortController = globalThis.AbortController
  } = globalOptions;
  async function onError(context) {
    const isAbort = context.error && context.error.name === "AbortError" && !context.options.timeout || false;
    if (context.options.retry !== false && !isAbort) {
      let retries;
      if (typeof context.options.retry === "number") {
        retries = context.options.retry;
      } else {
        retries = isPayloadMethod(context.options.method) ? 0 : 1;
      }
      const responseCode = context.response && context.response.status || 500;
      if (retries > 0 && (Array.isArray(context.options.retryStatusCodes) ? context.options.retryStatusCodes.includes(responseCode) : retryStatusCodes.has(responseCode))) {
        const retryDelay = typeof context.options.retryDelay === "function" ? context.options.retryDelay(context) : context.options.retryDelay || 0;
        if (retryDelay > 0) {
          await new Promise((resolve) => setTimeout(resolve, retryDelay));
        }
        return $fetchRaw(context.request, {
          ...context.options,
          retry: retries - 1
        });
      }
    }
    const error = createFetchError(context);
    if (Error.captureStackTrace) {
      Error.captureStackTrace(error, $fetchRaw);
    }
    throw error;
  }
  const $fetchRaw = async function $fetchRaw2(_request, _options = {}) {
    const context = {
      request: _request,
      options: resolveFetchOptions(
        _request,
        _options,
        globalOptions.defaults,
        Headers
      ),
      response: void 0,
      error: void 0
    };
    if (context.options.method) {
      context.options.method = context.options.method.toUpperCase();
    }
    if (context.options.onRequest) {
      await callHooks(context, context.options.onRequest);
      if (!(context.options.headers instanceof Headers)) {
        context.options.headers = new Headers(
          context.options.headers || {}
          /* compat */
        );
      }
    }
    if (typeof context.request === "string") {
      if (context.options.baseURL) {
        context.request = withBase(context.request, context.options.baseURL);
      }
      if (context.options.query) {
        context.request = withQuery(context.request, context.options.query);
        delete context.options.query;
      }
      if ("query" in context.options) {
        delete context.options.query;
      }
      if ("params" in context.options) {
        delete context.options.params;
      }
    }
    if (context.options.body && isPayloadMethod(context.options.method)) {
      if (isJSONSerializable(context.options.body)) {
        const contentType = context.options.headers.get("content-type");
        if (typeof context.options.body !== "string") {
          context.options.body = contentType === "application/x-www-form-urlencoded" ? new URLSearchParams(
            context.options.body
          ).toString() : JSON.stringify(context.options.body);
        }
        if (!contentType) {
          context.options.headers.set("content-type", "application/json");
        }
        if (!context.options.headers.has("accept")) {
          context.options.headers.set("accept", "application/json");
        }
      } else if (
        // ReadableStream Body
        "pipeTo" in context.options.body && typeof context.options.body.pipeTo === "function" || // Node.js Stream Body
        typeof context.options.body.pipe === "function"
      ) {
        if (!("duplex" in context.options)) {
          context.options.duplex = "half";
        }
      }
    }
    let abortTimeout;
    if (!context.options.signal && context.options.timeout) {
      const controller = new AbortController();
      abortTimeout = setTimeout(() => {
        const error = new Error(
          "[TimeoutError]: The operation was aborted due to timeout"
        );
        error.name = "TimeoutError";
        error.code = 23;
        controller.abort(error);
      }, context.options.timeout);
      context.options.signal = controller.signal;
    }
    try {
      context.response = await fetch(
        context.request,
        context.options
      );
    } catch (error) {
      context.error = error;
      if (context.options.onRequestError) {
        await callHooks(
          context,
          context.options.onRequestError
        );
      }
      return await onError(context);
    } finally {
      if (abortTimeout) {
        clearTimeout(abortTimeout);
      }
    }
    const hasBody = (context.response.body || // https://github.com/unjs/ofetch/issues/324
    // https://github.com/unjs/ofetch/issues/294
    // https://github.com/JakeChampion/fetch/issues/1454
    context.response._bodyInit) && !nullBodyResponses.has(context.response.status) && context.options.method !== "HEAD";
    if (hasBody) {
      const responseType = (context.options.parseResponse ? "json" : context.options.responseType) || detectResponseType(context.response.headers.get("content-type") || "");
      switch (responseType) {
        case "json": {
          const data = await context.response.text();
          const parseFunction = context.options.parseResponse || destr$1;
          context.response._data = parseFunction(data);
          break;
        }
        case "stream": {
          context.response._data = context.response.body || context.response._bodyInit;
          break;
        }
        default: {
          context.response._data = await context.response[responseType]();
        }
      }
    }
    if (context.options.onResponse) {
      await callHooks(
        context,
        context.options.onResponse
      );
    }
    if (!context.options.ignoreResponseError && context.response.status >= 400 && context.response.status < 600) {
      if (context.options.onResponseError) {
        await callHooks(
          context,
          context.options.onResponseError
        );
      }
      return await onError(context);
    }
    return context.response;
  };
  const $fetch = async function $fetch2(request, options) {
    const r = await $fetchRaw(request, options);
    return r._data;
  };
  $fetch.raw = $fetchRaw;
  $fetch.native = (...args) => fetch(...args);
  $fetch.create = (defaultOptions = {}, customGlobalOptions = {}) => createFetch({
    ...globalOptions,
    ...customGlobalOptions,
    defaults: {
      ...globalOptions.defaults,
      ...customGlobalOptions.defaults,
      ...defaultOptions
    }
  });
  return $fetch;
}

function createNodeFetch() {
  const useKeepAlive = JSON.parse(process.env.FETCH_KEEP_ALIVE || "false");
  if (!useKeepAlive) {
    return l;
  }
  const agentOptions = { keepAlive: true };
  const httpAgent = new http.Agent(agentOptions);
  const httpsAgent = new https.Agent(agentOptions);
  const nodeFetchOptions = {
    agent(parsedURL) {
      return parsedURL.protocol === "http:" ? httpAgent : httpsAgent;
    }
  };
  return function nodeFetchWithKeepAlive(input, init) {
    return l(input, { ...nodeFetchOptions, ...init });
  };
}
const fetch$1 = globalThis.fetch ? (...args) => globalThis.fetch(...args) : createNodeFetch();
const Headers$1 = globalThis.Headers || s;
const AbortController = globalThis.AbortController || i;
createFetch({ fetch: fetch$1, Headers: Headers$1, AbortController });

const storageKeyProperties = [
  "has",
  "hasItem",
  "get",
  "getItem",
  "getItemRaw",
  "set",
  "setItem",
  "setItemRaw",
  "del",
  "remove",
  "removeItem",
  "getMeta",
  "setMeta",
  "removeMeta",
  "getKeys",
  "clear",
  "mount",
  "unmount"
];
function prefixStorage(storage, base) {
  base = normalizeBaseKey$1(base);
  if (!base) {
    return storage;
  }
  const nsStorage = { ...storage };
  for (const property of storageKeyProperties) {
    nsStorage[property] = (key = "", ...args) => (
      // @ts-ignore
      storage[property](base + key, ...args)
    );
  }
  nsStorage.getKeys = (key = "", ...arguments_) => storage.getKeys(base + key, ...arguments_).then((keys) => keys.map((key2) => key2.slice(base.length)));
  nsStorage.keys = nsStorage.getKeys;
  nsStorage.getItems = async (items, commonOptions) => {
    const prefixedItems = items.map(
      (item) => typeof item === "string" ? base + item : { ...item, key: base + item.key }
    );
    const results = await storage.getItems(prefixedItems, commonOptions);
    return results.map((entry) => ({
      key: entry.key.slice(base.length),
      value: entry.value
    }));
  };
  nsStorage.setItems = async (items, commonOptions) => {
    const prefixedItems = items.map((item) => ({
      key: base + item.key,
      value: item.value,
      options: item.options
    }));
    return storage.setItems(prefixedItems, commonOptions);
  };
  return nsStorage;
}
function normalizeKey$2(key) {
  if (!key) {
    return "";
  }
  return key.split("?")[0]?.replace(/[/\\]/g, ":").replace(/:+/g, ":").replace(/^:|:$/g, "") || "";
}
function normalizeBaseKey$1(base) {
  base = normalizeKey$2(base);
  return base ? base + ":" : "";
}

const suspectProtoRx = /"(?:_|\\u0{2}5[Ff]){2}(?:p|\\u0{2}70)(?:r|\\u0{2}72)(?:o|\\u0{2}6[Ff])(?:t|\\u0{2}74)(?:o|\\u0{2}6[Ff])(?:_|\\u0{2}5[Ff]){2}"\s*:/;
const suspectConstructorRx = /"(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)"\s*:/;
const JsonSigRx = /^\s*["[{]|^\s*-?\d{1,16}(\.\d{1,17})?([Ee][+-]?\d+)?\s*$/;
function jsonParseTransform(key, value) {
  if (key === "__proto__" || key === "constructor" && value && typeof value === "object" && "prototype" in value) {
    warnKeyDropped(key);
    return;
  }
  return value;
}
function warnKeyDropped(key) {
  console.warn(`[destr] Dropping "${key}" key to prevent prototype pollution.`);
}
function destr(value, options = {}) {
  if (typeof value !== "string") {
    return value;
  }
  if (value[0] === '"' && value[value.length - 1] === '"' && value.indexOf("\\") === -1) {
    return value.slice(1, -1);
  }
  const _value = value.trim();
  if (_value.length <= 9) {
    switch (_value.toLowerCase()) {
      case "true": {
        return true;
      }
      case "false": {
        return false;
      }
      case "undefined": {
        return void 0;
      }
      case "null": {
        return null;
      }
      case "nan": {
        return Number.NaN;
      }
      case "infinity": {
        return Number.POSITIVE_INFINITY;
      }
      case "-infinity": {
        return Number.NEGATIVE_INFINITY;
      }
    }
  }
  if (!JsonSigRx.test(value)) {
    if (options.strict) {
      throw new SyntaxError("[destr] Invalid JSON");
    }
    return value;
  }
  try {
    if (suspectProtoRx.test(value) || suspectConstructorRx.test(value)) {
      if (options.strict) {
        throw new Error("[destr] Possible prototype pollution");
      }
      return JSON.parse(value, jsonParseTransform);
    }
    return JSON.parse(value);
  } catch (error) {
    if (options.strict) {
      throw error;
    }
    return value;
  }
}

function wrapToPromise(value) {
  if (!value || typeof value.then !== "function") {
    return Promise.resolve(value);
  }
  return value;
}
function asyncCall(function_, ...arguments_) {
  try {
    return wrapToPromise(function_(...arguments_));
  } catch (error) {
    return Promise.reject(error);
  }
}
function isPrimitive(value) {
  const type = typeof value;
  return value === null || type !== "object" && type !== "function";
}
function isPureObject(value) {
  const proto = Object.getPrototypeOf(value);
  return !proto || proto.isPrototypeOf(Object);
}
function stringify(value) {
  if (isPrimitive(value)) {
    return String(value);
  }
  if (isPureObject(value) || Array.isArray(value)) {
    return JSON.stringify(value);
  }
  if (typeof value.toJSON === "function") {
    return stringify(value.toJSON());
  }
  throw new Error("[unstorage] Cannot stringify value!");
}
const BASE64_PREFIX = "base64:";
function serializeRaw(value) {
  if (typeof value === "string") {
    return value;
  }
  return BASE64_PREFIX + base64Encode(value);
}
function deserializeRaw(value) {
  if (typeof value !== "string") {
    return value;
  }
  if (!value.startsWith(BASE64_PREFIX)) {
    return value;
  }
  return base64Decode(value.slice(BASE64_PREFIX.length));
}
function base64Decode(input) {
  if (globalThis.Buffer) {
    return Buffer.from(input, "base64");
  }
  return Uint8Array.from(
    globalThis.atob(input),
    (c) => c.codePointAt(0)
  );
}
function base64Encode(input) {
  if (globalThis.Buffer) {
    return Buffer.from(input).toString("base64");
  }
  return globalThis.btoa(String.fromCodePoint(...input));
}
function normalizeKey$1(key) {
  if (!key) {
    return "";
  }
  return key.split("?")[0]?.replace(/[/\\]/g, ":").replace(/:+/g, ":").replace(/^:|:$/g, "") || "";
}
function joinKeys(...keys) {
  return normalizeKey$1(keys.join(":"));
}
function normalizeBaseKey(base) {
  base = normalizeKey$1(base);
  return base ? base + ":" : "";
}
function filterKeyByDepth(key, depth) {
  if (depth === void 0) {
    return true;
  }
  let substrCount = 0;
  let index = key.indexOf(":");
  while (index > -1) {
    substrCount++;
    index = key.indexOf(":", index + 1);
  }
  return substrCount <= depth;
}
function filterKeyByBase(key, base) {
  if (base) {
    return key.startsWith(base) && key[key.length - 1] !== "$";
  }
  return key[key.length - 1] !== "$";
}

function defineDriver$1(factory) {
  return factory;
}

const DRIVER_NAME$1 = "memory";
const memory = defineDriver$1(() => {
  const data = /* @__PURE__ */ new Map();
  return {
    name: DRIVER_NAME$1,
    getInstance: () => data,
    hasItem(key) {
      return data.has(key);
    },
    getItem(key) {
      return data.get(key) ?? null;
    },
    getItemRaw(key) {
      return data.get(key) ?? null;
    },
    setItem(key, value) {
      data.set(key, value);
    },
    setItemRaw(key, value) {
      data.set(key, value);
    },
    removeItem(key) {
      data.delete(key);
    },
    getKeys() {
      return [...data.keys()];
    },
    clear() {
      data.clear();
    },
    dispose() {
      data.clear();
    }
  };
});

function createStorage(options = {}) {
  const context = {
    mounts: { "": options.driver || memory() },
    mountpoints: [""],
    watching: false,
    watchListeners: [],
    unwatch: {}
  };
  const getMount = (key) => {
    for (const base of context.mountpoints) {
      if (key.startsWith(base)) {
        return {
          base,
          relativeKey: key.slice(base.length),
          driver: context.mounts[base]
        };
      }
    }
    return {
      base: "",
      relativeKey: key,
      driver: context.mounts[""]
    };
  };
  const getMounts = (base, includeParent) => {
    return context.mountpoints.filter(
      (mountpoint) => mountpoint.startsWith(base) || includeParent && base.startsWith(mountpoint)
    ).map((mountpoint) => ({
      relativeBase: base.length > mountpoint.length ? base.slice(mountpoint.length) : void 0,
      mountpoint,
      driver: context.mounts[mountpoint]
    }));
  };
  const onChange = (event, key) => {
    if (!context.watching) {
      return;
    }
    key = normalizeKey$1(key);
    for (const listener of context.watchListeners) {
      listener(event, key);
    }
  };
  const startWatch = async () => {
    if (context.watching) {
      return;
    }
    context.watching = true;
    for (const mountpoint in context.mounts) {
      context.unwatch[mountpoint] = await watch(
        context.mounts[mountpoint],
        onChange,
        mountpoint
      );
    }
  };
  const stopWatch = async () => {
    if (!context.watching) {
      return;
    }
    for (const mountpoint in context.unwatch) {
      await context.unwatch[mountpoint]();
    }
    context.unwatch = {};
    context.watching = false;
  };
  const runBatch = (items, commonOptions, cb) => {
    const batches = /* @__PURE__ */ new Map();
    const getBatch = (mount) => {
      let batch = batches.get(mount.base);
      if (!batch) {
        batch = {
          driver: mount.driver,
          base: mount.base,
          items: []
        };
        batches.set(mount.base, batch);
      }
      return batch;
    };
    for (const item of items) {
      const isStringItem = typeof item === "string";
      const key = normalizeKey$1(isStringItem ? item : item.key);
      const value = isStringItem ? void 0 : item.value;
      const options2 = isStringItem || !item.options ? commonOptions : { ...commonOptions, ...item.options };
      const mount = getMount(key);
      getBatch(mount).items.push({
        key,
        value,
        relativeKey: mount.relativeKey,
        options: options2
      });
    }
    return Promise.all([...batches.values()].map((batch) => cb(batch))).then(
      (r) => r.flat()
    );
  };
  const storage = {
    // Item
    hasItem(key, opts = {}) {
      key = normalizeKey$1(key);
      const { relativeKey, driver } = getMount(key);
      return asyncCall(driver.hasItem, relativeKey, opts);
    },
    getItem(key, opts = {}) {
      key = normalizeKey$1(key);
      const { relativeKey, driver } = getMount(key);
      return asyncCall(driver.getItem, relativeKey, opts).then(
        (value) => destr(value)
      );
    },
    getItems(items, commonOptions = {}) {
      return runBatch(items, commonOptions, (batch) => {
        if (batch.driver.getItems) {
          return asyncCall(
            batch.driver.getItems,
            batch.items.map((item) => ({
              key: item.relativeKey,
              options: item.options
            })),
            commonOptions
          ).then(
            (r) => r.map((item) => ({
              key: joinKeys(batch.base, item.key),
              value: destr(item.value)
            }))
          );
        }
        return Promise.all(
          batch.items.map((item) => {
            return asyncCall(
              batch.driver.getItem,
              item.relativeKey,
              item.options
            ).then((value) => ({
              key: item.key,
              value: destr(value)
            }));
          })
        );
      });
    },
    getItemRaw(key, opts = {}) {
      key = normalizeKey$1(key);
      const { relativeKey, driver } = getMount(key);
      if (driver.getItemRaw) {
        return asyncCall(driver.getItemRaw, relativeKey, opts);
      }
      return asyncCall(driver.getItem, relativeKey, opts).then(
        (value) => deserializeRaw(value)
      );
    },
    async setItem(key, value, opts = {}) {
      if (value === void 0) {
        return storage.removeItem(key);
      }
      key = normalizeKey$1(key);
      const { relativeKey, driver } = getMount(key);
      if (!driver.setItem) {
        return;
      }
      await asyncCall(driver.setItem, relativeKey, stringify(value), opts);
      if (!driver.watch) {
        onChange("update", key);
      }
    },
    async setItems(items, commonOptions) {
      await runBatch(items, commonOptions, async (batch) => {
        if (batch.driver.setItems) {
          return asyncCall(
            batch.driver.setItems,
            batch.items.map((item) => ({
              key: item.relativeKey,
              value: stringify(item.value),
              options: item.options
            })),
            commonOptions
          );
        }
        if (!batch.driver.setItem) {
          return;
        }
        await Promise.all(
          batch.items.map((item) => {
            return asyncCall(
              batch.driver.setItem,
              item.relativeKey,
              stringify(item.value),
              item.options
            );
          })
        );
      });
    },
    async setItemRaw(key, value, opts = {}) {
      if (value === void 0) {
        return storage.removeItem(key, opts);
      }
      key = normalizeKey$1(key);
      const { relativeKey, driver } = getMount(key);
      if (driver.setItemRaw) {
        await asyncCall(driver.setItemRaw, relativeKey, value, opts);
      } else if (driver.setItem) {
        await asyncCall(driver.setItem, relativeKey, serializeRaw(value), opts);
      } else {
        return;
      }
      if (!driver.watch) {
        onChange("update", key);
      }
    },
    async removeItem(key, opts = {}) {
      if (typeof opts === "boolean") {
        opts = { removeMeta: opts };
      }
      key = normalizeKey$1(key);
      const { relativeKey, driver } = getMount(key);
      if (!driver.removeItem) {
        return;
      }
      await asyncCall(driver.removeItem, relativeKey, opts);
      if (opts.removeMeta || opts.removeMata) {
        await asyncCall(driver.removeItem, relativeKey + "$", opts);
      }
      if (!driver.watch) {
        onChange("remove", key);
      }
    },
    // Meta
    async getMeta(key, opts = {}) {
      if (typeof opts === "boolean") {
        opts = { nativeOnly: opts };
      }
      key = normalizeKey$1(key);
      const { relativeKey, driver } = getMount(key);
      const meta = /* @__PURE__ */ Object.create(null);
      if (driver.getMeta) {
        Object.assign(meta, await asyncCall(driver.getMeta, relativeKey, opts));
      }
      if (!opts.nativeOnly) {
        const value = await asyncCall(
          driver.getItem,
          relativeKey + "$",
          opts
        ).then((value_) => destr(value_));
        if (value && typeof value === "object") {
          if (typeof value.atime === "string") {
            value.atime = new Date(value.atime);
          }
          if (typeof value.mtime === "string") {
            value.mtime = new Date(value.mtime);
          }
          Object.assign(meta, value);
        }
      }
      return meta;
    },
    setMeta(key, value, opts = {}) {
      return this.setItem(key + "$", value, opts);
    },
    removeMeta(key, opts = {}) {
      return this.removeItem(key + "$", opts);
    },
    // Keys
    async getKeys(base, opts = {}) {
      base = normalizeBaseKey(base);
      const mounts = getMounts(base, true);
      let maskedMounts = [];
      const allKeys = [];
      let allMountsSupportMaxDepth = true;
      for (const mount of mounts) {
        if (!mount.driver.flags?.maxDepth) {
          allMountsSupportMaxDepth = false;
        }
        const rawKeys = await asyncCall(
          mount.driver.getKeys,
          mount.relativeBase,
          opts
        );
        for (const key of rawKeys) {
          const fullKey = mount.mountpoint + normalizeKey$1(key);
          if (!maskedMounts.some((p) => fullKey.startsWith(p))) {
            allKeys.push(fullKey);
          }
        }
        maskedMounts = [
          mount.mountpoint,
          ...maskedMounts.filter((p) => !p.startsWith(mount.mountpoint))
        ];
      }
      const shouldFilterByDepth = opts.maxDepth !== void 0 && !allMountsSupportMaxDepth;
      return allKeys.filter(
        (key) => (!shouldFilterByDepth || filterKeyByDepth(key, opts.maxDepth)) && filterKeyByBase(key, base)
      );
    },
    // Utils
    async clear(base, opts = {}) {
      base = normalizeBaseKey(base);
      await Promise.all(
        getMounts(base, false).map(async (m) => {
          if (m.driver.clear) {
            return asyncCall(m.driver.clear, m.relativeBase, opts);
          }
          if (m.driver.removeItem) {
            const keys = await m.driver.getKeys(m.relativeBase || "", opts);
            return Promise.all(
              keys.map((key) => m.driver.removeItem(key, opts))
            );
          }
        })
      );
    },
    async dispose() {
      await Promise.all(
        Object.values(context.mounts).map((driver) => dispose(driver))
      );
    },
    async watch(callback) {
      await startWatch();
      context.watchListeners.push(callback);
      return async () => {
        context.watchListeners = context.watchListeners.filter(
          (listener) => listener !== callback
        );
        if (context.watchListeners.length === 0) {
          await stopWatch();
        }
      };
    },
    async unwatch() {
      context.watchListeners = [];
      await stopWatch();
    },
    // Mount
    mount(base, driver) {
      base = normalizeBaseKey(base);
      if (base && context.mounts[base]) {
        throw new Error(`already mounted at ${base}`);
      }
      if (base) {
        context.mountpoints.push(base);
        context.mountpoints.sort((a, b) => b.length - a.length);
      }
      context.mounts[base] = driver;
      if (context.watching) {
        Promise.resolve(watch(driver, onChange, base)).then((unwatcher) => {
          context.unwatch[base] = unwatcher;
        }).catch(console.error);
      }
      return storage;
    },
    async unmount(base, _dispose = true) {
      base = normalizeBaseKey(base);
      if (!base || !context.mounts[base]) {
        return;
      }
      if (context.watching && base in context.unwatch) {
        context.unwatch[base]?.();
        delete context.unwatch[base];
      }
      if (_dispose) {
        await dispose(context.mounts[base]);
      }
      context.mountpoints = context.mountpoints.filter((key) => key !== base);
      delete context.mounts[base];
    },
    getMount(key = "") {
      key = normalizeKey$1(key) + ":";
      const m = getMount(key);
      return {
        driver: m.driver,
        base: m.base
      };
    },
    getMounts(base = "", opts = {}) {
      base = normalizeKey$1(base);
      const mounts = getMounts(base, opts.parents);
      return mounts.map((m) => ({
        driver: m.driver,
        base: m.mountpoint
      }));
    },
    // Aliases
    keys: (base, opts = {}) => storage.getKeys(base, opts),
    get: (key, opts = {}) => storage.getItem(key, opts),
    set: (key, value, opts = {}) => storage.setItem(key, value, opts),
    has: (key, opts = {}) => storage.hasItem(key, opts),
    del: (key, opts = {}) => storage.removeItem(key, opts),
    remove: (key, opts = {}) => storage.removeItem(key, opts)
  };
  return storage;
}
function watch(driver, onChange, base) {
  return driver.watch ? driver.watch((event, key) => onChange(event, base + key)) : () => {
  };
}
async function dispose(driver) {
  if (typeof driver.dispose === "function") {
    await asyncCall(driver.dispose);
  }
}

const _assets = {

};

const normalizeKey = function normalizeKey(key) {
  if (!key) {
    return "";
  }
  return key.split("?")[0]?.replace(/[/\\]/g, ":").replace(/:+/g, ":").replace(/^:|:$/g, "") || "";
};

const assets$1 = {
  getKeys() {
    return Promise.resolve(Object.keys(_assets))
  },
  hasItem (id) {
    id = normalizeKey(id);
    return Promise.resolve(id in _assets)
  },
  getItem (id) {
    id = normalizeKey(id);
    return Promise.resolve(_assets[id] ? _assets[id].import() : null)
  },
  getMeta (id) {
    id = normalizeKey(id);
    return Promise.resolve(_assets[id] ? _assets[id].meta : {})
  }
};

function defineDriver(factory) {
  return factory;
}
function createError(driver, message, opts) {
  const err = new Error(`[unstorage] [${driver}] ${message}`, opts);
  if (Error.captureStackTrace) {
    Error.captureStackTrace(err, createError);
  }
  return err;
}
function createRequiredError(driver, name) {
  if (Array.isArray(name)) {
    return createError(
      driver,
      `Missing some of the required options ${name.map((n) => "`" + n + "`").join(", ")}`
    );
  }
  return createError(driver, `Missing required option \`${name}\`.`);
}

function ignoreNotfound(err) {
  return err.code === "ENOENT" || err.code === "EISDIR" ? null : err;
}
function ignoreExists(err) {
  return err.code === "EEXIST" ? null : err;
}
async function writeFile(path, data, encoding) {
  await ensuredir(dirname$1(path));
  return promises.writeFile(path, data, encoding);
}
function readFile(path, encoding) {
  return promises.readFile(path, encoding).catch(ignoreNotfound);
}
function unlink(path) {
  return promises.unlink(path).catch(ignoreNotfound);
}
function readdir(dir) {
  return promises.readdir(dir, { withFileTypes: true }).catch(ignoreNotfound).then((r) => r || []);
}
async function ensuredir(dir) {
  if (existsSync(dir)) {
    return;
  }
  await ensuredir(dirname$1(dir)).catch(ignoreExists);
  await promises.mkdir(dir).catch(ignoreExists);
}
async function readdirRecursive(dir, ignore, maxDepth) {
  if (ignore && ignore(dir)) {
    return [];
  }
  const entries = await readdir(dir);
  const files = [];
  await Promise.all(
    entries.map(async (entry) => {
      const entryPath = resolve$1(dir, entry.name);
      if (entry.isDirectory()) {
        if (maxDepth === void 0 || maxDepth > 0) {
          const dirFiles = await readdirRecursive(
            entryPath,
            ignore,
            maxDepth === void 0 ? void 0 : maxDepth - 1
          );
          files.push(...dirFiles.map((f) => entry.name + "/" + f));
        }
      } else {
        if (!(ignore && ignore(entry.name))) {
          files.push(entry.name);
        }
      }
    })
  );
  return files;
}
async function rmRecursive(dir) {
  const entries = await readdir(dir);
  await Promise.all(
    entries.map((entry) => {
      const entryPath = resolve$1(dir, entry.name);
      if (entry.isDirectory()) {
        return rmRecursive(entryPath).then(() => promises.rmdir(entryPath));
      } else {
        return promises.unlink(entryPath);
      }
    })
  );
}

const PATH_TRAVERSE_RE = /\.\.:|\.\.$/;
const DRIVER_NAME = "fs-lite";
const unstorage_47drivers_47fs_45lite = defineDriver((opts = {}) => {
  if (!opts.base) {
    throw createRequiredError(DRIVER_NAME, "base");
  }
  opts.base = resolve$1(opts.base);
  const r = (key) => {
    if (PATH_TRAVERSE_RE.test(key)) {
      throw createError(
        DRIVER_NAME,
        `Invalid key: ${JSON.stringify(key)}. It should not contain .. segments`
      );
    }
    const resolved = join(opts.base, key.replace(/:/g, "/"));
    return resolved;
  };
  return {
    name: DRIVER_NAME,
    options: opts,
    flags: {
      maxDepth: true
    },
    hasItem(key) {
      return existsSync(r(key));
    },
    getItem(key) {
      return readFile(r(key), "utf8");
    },
    getItemRaw(key) {
      return readFile(r(key));
    },
    async getMeta(key) {
      const { atime, mtime, size, birthtime, ctime } = await promises.stat(r(key)).catch(() => ({}));
      return { atime, mtime, size, birthtime, ctime };
    },
    setItem(key, value) {
      if (opts.readOnly) {
        return;
      }
      return writeFile(r(key), value, "utf8");
    },
    setItemRaw(key, value) {
      if (opts.readOnly) {
        return;
      }
      return writeFile(r(key), value);
    },
    removeItem(key) {
      if (opts.readOnly) {
        return;
      }
      return unlink(r(key));
    },
    getKeys(_base, topts) {
      return readdirRecursive(r("."), opts.ignore, topts?.maxDepth);
    },
    async clear() {
      if (opts.readOnly || opts.noClear) {
        return;
      }
      await rmRecursive(r("."));
    }
  };
});

const storage = createStorage({});

storage.mount('/assets', assets$1);

storage.mount('data', unstorage_47drivers_47fs_45lite({"driver":"fsLite","base":"./.data/kv"}));

function useStorage(base = "") {
  return base ? prefixStorage(storage, base) : storage;
}

function serialize$1(input) {
	if (typeof input === "string") return `'${input}'`;
	return new Serializer().serialize(input);
}
const asciiOrder = " _-,;:!?.'\"()[]{}@*/\\&#%`^+<=>|~$0123456789abcdefghijklmnopqrstuvwxyz";
const asciiWeights = /*@__PURE__*/ (function() {
	const weights = /* @__PURE__ */ new Uint8Array(128);
	for (let i = 0; i < 69; i++) weights[asciiOrder.charCodeAt(i)] = i + 1;
	for (let code = 65; code <= 90; code++) weights[code] = weights[code + 32];
	return weights;
})();
function compareStrings(a, b) {
	if (a === b) return 0;
	const length = Math.min(a.length, b.length);
	let tieBreaker = 0;
	for (let i = 0; i < length; i++) {
		const codeA = a.charCodeAt(i);
		const codeB = b.charCodeAt(i);
		if (codeA === codeB) continue;
		const weightA = codeA < 128 && asciiWeights[codeA] ? asciiWeights[codeA] : codeA + 128;
		const weightB = codeB < 128 && asciiWeights[codeB] ? asciiWeights[codeB] : codeB + 128;
		if (weightA !== weightB) return weightA < weightB ? -1 : 1;
		if (tieBreaker === 0) tieBreaker = codeA > codeB ? -1 : 1;
	}
	if (a.length !== b.length) return a.length < b.length ? -1 : 1;
	return tieBreaker;
}
const Serializer = /*@__PURE__*/ (function() {
	class Serializer {
		#context = /* @__PURE__ */ new Map();
		compare(a, b) {
			const typeA = typeof a;
			const typeB = typeof b;
			if (typeA === "string" && typeB === "string") return compareStrings(a, b);
			if (typeA === "number" && typeB === "number") return a - b;
			return compareStrings(this.serialize(a, true), this.serialize(b, true));
		}
		serialize(value, noQuotes) {
			if (value === null) return "null";
			switch (typeof value) {
				case "string": return noQuotes ? value : `'${value}'`;
				case "bigint": return `${value}n`;
				case "object": return this.$object(value);
				case "function": return this.$function(value);
			}
			return String(value);
		}
		serializeObject(object) {
			const objString = Object.prototype.toString.call(object);
			if (objString !== "[object Object]") return this.serializeBuiltInType(objString.length < 10 ? `unknown:${objString}` : objString.slice(8, -1), object);
			const constructor = object.constructor;
			const objName = constructor === Object || constructor === void 0 ? "" : constructor.name;
			if (objName !== "" && globalThis[objName] === constructor) return this.serializeBuiltInType(objName, object);
			if ("toJSON" in object && typeof object.toJSON === "function") {
				const json = object.toJSON();
				return objName + (json !== null && typeof json === "object" ? this.$object(json) : `(${this.serialize(json)})`);
			}
			const keys = Object.keys(object).sort(compareStrings);
			let content = `${objName}{`;
			for (let i = 0; i < keys.length; i++) {
				const key = keys[i];
				content += `${key}:${this.serialize(object[key])}`;
				if (i < keys.length - 1) content += ",";
			}
			return content + "}";
		}
		serializeBuiltInType(type, object) {
			const handler = this["$" + type];
			if (handler) return handler.call(this, object);
			if (typeof object.entries === "function") return this.serializeObjectEntries(type, object.entries());
			throw new Error(`Cannot serialize ${type}`);
		}
		serializeObjectEntries(type, entries) {
			const sortedEntries = Array.from(entries).sort((a, b) => this.compare(a[0], b[0]));
			let content = `${type}{`;
			for (let i = 0; i < sortedEntries.length; i++) {
				const [key, value] = sortedEntries[i];
				content += `${this.serialize(key, true)}:${this.serialize(value)}`;
				if (i < sortedEntries.length - 1) content += ",";
			}
			return content + "}";
		}
		$object(object) {
			let content = this.#context.get(object);
			if (content === void 0) {
				this.#context.set(object, `#${this.#context.size}`);
				content = this.serializeObject(object);
				this.#context.set(object, content);
			}
			return content;
		}
		$function(fn) {
			const fnStr = Function.prototype.toString.call(fn);
			if (fnStr.slice(-15) === "[native code] }") return `${fn.name || ""}()[native]`;
			return `${fn.name}(${fn.length})${fnStr.replace(/\s*\n\s*/g, "")}`;
		}
		$Array(arr) {
			let content = "[";
			for (let i = 0; i < arr.length; i++) {
				content += this.serialize(arr[i]);
				if (i < arr.length - 1) content += ",";
			}
			return content + "]";
		}
		$Date(date) {
			try {
				return `Date(${date.toISOString()})`;
			} catch {
				return `Date(null)`;
			}
		}
		$ArrayBuffer(arr) {
			return `ArrayBuffer[${new Uint8Array(arr).join(",")}]`;
		}
		$Set(set) {
			return `Set${this.$Array(Array.from(set).sort((a, b) => this.compare(a, b)))}`;
		}
		$Map(map) {
			return this.serializeObjectEntries("Map", map.entries());
		}
	}
	for (const type of [
		"Error",
		"RegExp",
		"URL"
	]) Serializer.prototype["$" + type] = function(val) {
		return `${type}(${val})`;
	};
	for (const type of [
		"Int8Array",
		"Uint8Array",
		"Uint8ClampedArray",
		"Int16Array",
		"Uint16Array",
		"Int32Array",
		"Uint32Array",
		"Float32Array",
		"Float64Array"
	]) Serializer.prototype["$" + type] = function(arr) {
		return `${type}[${arr.join(",")}]`;
	};
	for (const type of ["BigInt64Array", "BigUint64Array"]) Serializer.prototype["$" + type] = function(arr) {
		return `${type}[${arr.join("n,")}${arr.length > 0 ? "n" : ""}]`;
	};
	return Serializer;
})();

const fastHash = /*@__PURE__*/ (() => globalThis.process?.getBuiltinModule?.("crypto")?.hash)();
const algorithm = "sha256";
const encoding = "base64url";
function digest(data) {
	if (fastHash) return fastHash(algorithm, data, encoding);
	const h = createHash(algorithm).update(data);
	return globalThis.process?.versions?.webcontainer ? h.digest().toString(encoding) : h.digest(encoding);
}

function hash$1(input) {
	return digest(serialize$1(input));
}

const Hasher = /* @__PURE__ */ (() => {
  class Hasher2 {
    buff = "";
    #context = /* @__PURE__ */ new Map();
    write(str) {
      this.buff += str;
    }
    dispatch(value) {
      const type = value === null ? "null" : typeof value;
      return this[type](value);
    }
    object(object) {
      if (object && typeof object.toJSON === "function") {
        return this.object(object.toJSON());
      }
      const objString = Object.prototype.toString.call(object);
      let objType = "";
      const objectLength = objString.length;
      objType = objectLength < 10 ? "unknown:[" + objString + "]" : objString.slice(8, objectLength - 1);
      objType = objType.toLowerCase();
      let objectNumber = null;
      if ((objectNumber = this.#context.get(object)) === void 0) {
        this.#context.set(object, this.#context.size);
      } else {
        return this.dispatch("[CIRCULAR:" + objectNumber + "]");
      }
      if (typeof Buffer !== "undefined" && Buffer.isBuffer && Buffer.isBuffer(object)) {
        this.write("buffer:");
        return this.write(object.toString("utf8"));
      }
      if (objType !== "object" && objType !== "function" && objType !== "asyncfunction") {
        if (this[objType]) {
          this[objType](object);
        } else {
          this.unknown(object, objType);
        }
      } else {
        const keys = Object.keys(object).sort();
        const extraKeys = [];
        this.write("object:" + (keys.length + extraKeys.length) + ":");
        const dispatchForKey = (key) => {
          this.dispatch(key);
          this.write(":");
          this.dispatch(object[key]);
          this.write(",");
        };
        for (const key of keys) {
          dispatchForKey(key);
        }
        for (const key of extraKeys) {
          dispatchForKey(key);
        }
      }
    }
    array(arr, unordered) {
      unordered = unordered === void 0 ? false : unordered;
      this.write("array:" + arr.length + ":");
      if (!unordered || arr.length <= 1) {
        for (const entry of arr) {
          this.dispatch(entry);
        }
        return;
      }
      const contextAdditions = /* @__PURE__ */ new Map();
      const entries = arr.map((entry) => {
        const hasher = new Hasher2();
        hasher.dispatch(entry);
        for (const [key, value] of hasher.#context) {
          contextAdditions.set(key, value);
        }
        return hasher.toString();
      });
      this.#context = contextAdditions;
      entries.sort();
      return this.array(entries, false);
    }
    date(date) {
      return this.write("date:" + date.toJSON());
    }
    symbol(sym) {
      return this.write("symbol:" + sym.toString());
    }
    unknown(value, type) {
      this.write(type);
      if (!value) {
        return;
      }
      this.write(":");
      if (value && typeof value.entries === "function") {
        return this.array(
          [...value.entries()],
          true
          /* ordered */
        );
      }
    }
    error(err) {
      return this.write("error:" + err.toString());
    }
    boolean(bool) {
      return this.write("bool:" + bool);
    }
    string(string) {
      this.write("string:" + string.length + ":");
      this.write(string);
    }
    function(fn) {
      this.write("fn:");
      if (isNativeFunction(fn)) {
        this.dispatch("[native]");
      } else {
        this.dispatch(fn.toString());
      }
    }
    number(number) {
      return this.write("number:" + number);
    }
    null() {
      return this.write("Null");
    }
    undefined() {
      return this.write("Undefined");
    }
    regexp(regex) {
      return this.write("regex:" + regex.toString());
    }
    arraybuffer(arr) {
      this.write("arraybuffer:");
      return this.dispatch(new Uint8Array(arr));
    }
    url(url) {
      return this.write("url:" + url.toString());
    }
    map(map) {
      this.write("map:");
      const arr = [...map];
      return this.array(arr, false);
    }
    set(set) {
      this.write("set:");
      const arr = [...set];
      return this.array(arr, false);
    }
    bigint(number) {
      return this.write("bigint:" + number.toString());
    }
  }
  for (const type of [
    "uint8array",
    "uint8clampedarray",
    "unt8array",
    "uint16array",
    "unt16array",
    "uint32array",
    "unt32array",
    "float32array",
    "float64array"
  ]) {
    Hasher2.prototype[type] = function(arr) {
      this.write(type + ":");
      return this.array([...arr], false);
    };
  }
  function isNativeFunction(f) {
    if (typeof f !== "function") {
      return false;
    }
    return Function.prototype.toString.call(f).slice(
      -15
      /* "[native code] }".length */
    ) === "[native code] }";
  }
  return Hasher2;
})();
function serialize(object) {
  const hasher = new Hasher();
  hasher.dispatch(object);
  return hasher.buff;
}
function hash(value) {
  return digest(typeof value === "string" ? value : serialize(value)).replace(/[-_]/g, "").slice(0, 10);
}

function defaultCacheOptions() {
  return {
    name: "_",
    base: "/cache",
    swr: true,
    maxAge: 1
  };
}
function defineCachedFunction(fn, opts = {}) {
  opts = { ...defaultCacheOptions(), ...opts };
  const pending = {};
  const group = opts.group || "nitro/functions";
  const name = opts.name || fn.name || "_";
  const integrity = opts.integrity || hash([fn, opts]);
  const validate = opts.validate || ((entry) => entry.value !== void 0);
  async function get(key, resolver, shouldInvalidateCache, event) {
    const cacheKey = [opts.base, group, name, key + ".json"].filter(Boolean).join(":").replace(/:\/$/, ":index");
    let entry = await useStorage().getItem(cacheKey).catch((error) => {
      console.error(`[cache] Cache read error.`, error);
      useNitroApp().captureError(error, { event, tags: ["cache"] });
    }) || {};
    if (typeof entry !== "object") {
      entry = {};
      const error = new Error("Malformed data read from cache.");
      console.error("[cache]", error);
      useNitroApp().captureError(error, { event, tags: ["cache"] });
    }
    const ttl = (opts.maxAge ?? 0) * 1e3;
    if (ttl) {
      entry.expires = Date.now() + ttl;
    }
    const expired = shouldInvalidateCache || entry.integrity !== integrity || ttl && Date.now() - (entry.mtime || 0) > ttl || validate(entry) === false;
    const _resolve = async () => {
      const isPending = pending[key];
      if (!isPending) {
        if (entry.value !== void 0 && (opts.staleMaxAge || 0) >= 0 && opts.swr === false) {
          entry.value = void 0;
          entry.integrity = void 0;
          entry.mtime = void 0;
          entry.expires = void 0;
        }
        pending[key] = Promise.resolve(resolver());
      }
      try {
        entry.value = await pending[key];
      } catch (error) {
        if (!isPending) {
          delete pending[key];
        }
        throw error;
      }
      if (!isPending) {
        entry.mtime = Date.now();
        entry.integrity = integrity;
        delete pending[key];
        if (validate(entry) !== false) {
          let setOpts;
          if (opts.maxAge && !opts.swr) {
            setOpts = { ttl: opts.maxAge };
          }
          const promise = useStorage().setItem(cacheKey, entry, setOpts).catch((error) => {
            console.error(`[cache] Cache write error.`, error);
            useNitroApp().captureError(error, { event, tags: ["cache"] });
          });
          if (event?.waitUntil) {
            event.waitUntil(promise);
          }
        }
      }
    };
    const _resolvePromise = expired ? _resolve() : Promise.resolve();
    if (entry.value === void 0) {
      await _resolvePromise;
    } else if (expired && event && event.waitUntil) {
      event.waitUntil(_resolvePromise);
    }
    if (opts.swr && validate(entry) !== false) {
      _resolvePromise.catch((error) => {
        console.error(`[cache] SWR handler error.`, error);
        useNitroApp().captureError(error, { event, tags: ["cache"] });
      });
      return entry;
    }
    return _resolvePromise.then(() => entry);
  }
  return async (...args) => {
    const shouldBypassCache = await opts.shouldBypassCache?.(...args);
    if (shouldBypassCache) {
      return fn(...args);
    }
    const key = await (opts.getKey || getKey)(...args);
    const shouldInvalidateCache = await opts.shouldInvalidateCache?.(...args);
    const entry = await get(
      key,
      () => fn(...args),
      shouldInvalidateCache,
      args[0] && isEvent(args[0]) ? args[0] : void 0
    );
    let value = entry.value;
    if (opts.transform) {
      value = await opts.transform(entry, ...args) || value;
    }
    return value;
  };
}
function cachedFunction(fn, opts = {}) {
  return defineCachedFunction(fn, opts);
}
function getKey(...args) {
  return args.length > 0 ? hash(args) : "";
}
function escapeKey(key) {
  return String(key).replace(/\W/g, "");
}
function defineCachedEventHandler(handler, opts = defaultCacheOptions()) {
  const variableHeaderNames = (opts.varies || []).filter(Boolean).map((h) => h.toLowerCase()).sort();
  const _opts = {
    ...opts,
    getKey: async (event) => {
      const customKey = await opts.getKey?.(event);
      if (customKey) {
        return escapeKey(customKey);
      }
      const _path = event.node.req.originalUrl || event.node.req.url || event.path;
      let _pathname;
      try {
        _pathname = escapeKey(decodeURI(parseURL(_path).pathname)).slice(0, 16) || "index";
      } catch {
        _pathname = "-";
      }
      const _hashedPath = `${_pathname}.${hash(_path)}`;
      const _headers = variableHeaderNames.map((header) => [header, event.node.req.headers[header]]).map(([name, value]) => `${escapeKey(name)}.${hash(value)}`);
      return [_hashedPath, ..._headers].join(":");
    },
    validate: (entry) => {
      if (!entry.value) {
        return false;
      }
      if (entry.value.code >= 400) {
        return false;
      }
      if (entry.value.body === void 0) {
        return false;
      }
      if (entry.value.headers.etag === "undefined" || entry.value.headers["last-modified"] === "undefined") {
        return false;
      }
      return true;
    },
    group: opts.group || "nitro/handlers",
    integrity: opts.integrity || hash([handler, opts])
  };
  const _cachedHandler = cachedFunction(
    async (incomingEvent) => {
      const variableHeaders = {};
      for (const header of variableHeaderNames) {
        const value = incomingEvent.node.req.headers[header];
        if (value !== void 0) {
          variableHeaders[header] = value;
        }
      }
      const reqProxy = cloneWithProxy(incomingEvent.node.req, {
        headers: variableHeaders
      });
      const resHeaders = {};
      let _resSendBody;
      const resProxy = cloneWithProxy(incomingEvent.node.res, {
        statusCode: 200,
        writableEnded: false,
        writableFinished: false,
        headersSent: false,
        closed: false,
        getHeader(name) {
          return resHeaders[name];
        },
        setHeader(name, value) {
          resHeaders[name] = value;
          return this;
        },
        getHeaderNames() {
          return Object.keys(resHeaders);
        },
        hasHeader(name) {
          return name in resHeaders;
        },
        removeHeader(name) {
          delete resHeaders[name];
        },
        getHeaders() {
          return resHeaders;
        },
        end(chunk, arg2, arg3) {
          if (typeof chunk === "string") {
            _resSendBody = chunk;
          }
          if (typeof arg2 === "function") {
            arg2();
          }
          if (typeof arg3 === "function") {
            arg3();
          }
          return this;
        },
        write(chunk, arg2, arg3) {
          if (typeof chunk === "string") {
            _resSendBody = chunk;
          }
          if (typeof arg2 === "function") {
            arg2(void 0);
          }
          if (typeof arg3 === "function") {
            arg3();
          }
          return true;
        },
        writeHead(statusCode, headers2) {
          this.statusCode = statusCode;
          if (headers2) {
            if (Array.isArray(headers2) || typeof headers2 === "string") {
              throw new TypeError("Raw headers  is not supported.");
            }
            for (const header in headers2) {
              const value = headers2[header];
              if (value !== void 0) {
                this.setHeader(
                  header,
                  value
                );
              }
            }
          }
          return this;
        }
      });
      const event = createEvent(reqProxy, resProxy);
      event.fetch = (url, fetchOptions) => fetchWithEvent(event, url, fetchOptions, {
        fetch: useNitroApp().localFetch
      });
      event.$fetch = (url, fetchOptions) => fetchWithEvent(event, url, fetchOptions, {
        fetch: globalThis.$fetch
      });
      event.waitUntil = incomingEvent.waitUntil;
      event.context = incomingEvent.context;
      event.context.cache = {
        options: _opts
      };
      const body = await handler(event) || _resSendBody;
      const headers = event.node.res.getHeaders();
      headers.etag = String(
        headers.Etag || headers.etag || `W/"${hash(body)}"`
      );
      headers["last-modified"] = String(
        headers["Last-Modified"] || headers["last-modified"] || (/* @__PURE__ */ new Date()).toUTCString()
      );
      const cacheControl = [];
      if (opts.swr) {
        if (opts.maxAge) {
          cacheControl.push(`s-maxage=${opts.maxAge}`);
        }
        if (opts.staleMaxAge) {
          cacheControl.push(`stale-while-revalidate=${opts.staleMaxAge}`);
        } else {
          cacheControl.push("stale-while-revalidate");
        }
      } else if (opts.maxAge) {
        cacheControl.push(`max-age=${opts.maxAge}`);
      }
      if (cacheControl.length > 0) {
        headers["cache-control"] = cacheControl.join(", ");
      }
      const cacheEntry = {
        code: event.node.res.statusCode,
        headers,
        body
      };
      return cacheEntry;
    },
    _opts
  );
  return defineEventHandler(async (event) => {
    if (opts.headersOnly) {
      if (handleCacheHeaders(event, { maxAge: opts.maxAge })) {
        return;
      }
      return handler(event);
    }
    const response = await _cachedHandler(
      event
    );
    if (event.node.res.headersSent || event.node.res.writableEnded) {
      return response.body;
    }
    if (handleCacheHeaders(event, {
      modifiedTime: new Date(response.headers["last-modified"]),
      etag: response.headers.etag,
      maxAge: opts.maxAge
    })) {
      return;
    }
    event.node.res.statusCode = response.code;
    for (const name in response.headers) {
      const value = response.headers[name];
      if (name === "set-cookie") {
        event.node.res.appendHeader(
          name,
          splitCookiesString(value)
        );
      } else {
        if (value !== void 0) {
          event.node.res.setHeader(name, value);
        }
      }
    }
    return response.body;
  });
}
function cloneWithProxy(obj, overrides) {
  return new Proxy(obj, {
    get(target, property, receiver) {
      if (property in overrides) {
        return overrides[property];
      }
      return Reflect.get(target, property, receiver);
    },
    set(target, property, value, receiver) {
      if (property in overrides) {
        overrides[property] = value;
        return true;
      }
      return Reflect.set(target, property, value, receiver);
    }
  });
}
const cachedEventHandler = defineCachedEventHandler;

function klona(x) {
	if (typeof x !== 'object') return x;

	var k, tmp, str=Object.prototype.toString.call(x);

	if (str === '[object Object]') {
		if (x.constructor !== Object && typeof x.constructor === 'function') {
			tmp = new x.constructor();
			for (k in x) {
				if (x.hasOwnProperty(k) && tmp[k] !== x[k]) {
					tmp[k] = klona(x[k]);
				}
			}
		} else {
			tmp = {}; // null
			for (k in x) {
				if (k === '__proto__') {
					Object.defineProperty(tmp, k, {
						value: klona(x[k]),
						configurable: true,
						enumerable: true,
						writable: true,
					});
				} else {
					tmp[k] = klona(x[k]);
				}
			}
		}
		return tmp;
	}

	if (str === '[object Array]') {
		k = x.length;
		for (tmp=Array(k); k--;) {
			tmp[k] = klona(x[k]);
		}
		return tmp;
	}

	if (str === '[object Set]') {
		tmp = new Set;
		x.forEach(function (val) {
			tmp.add(klona(val));
		});
		return tmp;
	}

	if (str === '[object Map]') {
		tmp = new Map;
		x.forEach(function (val, key) {
			tmp.set(klona(key), klona(val));
		});
		return tmp;
	}

	if (str === '[object Date]') {
		return new Date(+x);
	}

	if (str === '[object RegExp]') {
		tmp = new RegExp(x.source, x.flags);
		tmp.lastIndex = x.lastIndex;
		return tmp;
	}

	if (str === '[object DataView]') {
		return new x.constructor( klona(x.buffer) );
	}

	if (str === '[object ArrayBuffer]') {
		return x.slice(0);
	}

	// ArrayBuffer.isView(x)
	// ~> `new` bcuz `Buffer.slice` => ref
	if (str.slice(-6) === 'Array]') {
		return new x.constructor(x);
	}

	return x;
}

function isPlainObject(value) {
  if (value === null || typeof value !== "object") {
    return false;
  }
  const prototype = Object.getPrototypeOf(value);
  if (prototype !== null && prototype !== Object.prototype && Object.getPrototypeOf(prototype) !== null) {
    return false;
  }
  if (Symbol.iterator in value) {
    return false;
  }
  if (Symbol.toStringTag in value) {
    return Object.prototype.toString.call(value) === "[object Module]";
  }
  return true;
}

function _defu(baseObject, defaults, namespace = ".", merger) {
  if (!isPlainObject(defaults)) {
    return _defu(baseObject, {}, namespace, merger);
  }
  const object = { ...defaults };
  for (const key of Object.keys(baseObject)) {
    if (key === "__proto__" || key === "constructor") {
      continue;
    }
    const value = baseObject[key];
    if (value === null || value === void 0) {
      continue;
    }
    if (merger && merger(object, key, value, namespace)) {
      continue;
    }
    if (Array.isArray(value) && Array.isArray(object[key])) {
      object[key] = [...value, ...object[key]];
    } else if (isPlainObject(value) && isPlainObject(object[key])) {
      object[key] = _defu(
        value,
        object[key],
        (namespace ? `${namespace}.` : "") + key.toString(),
        merger
      );
    } else {
      object[key] = value;
    }
  }
  return object;
}
function createDefu(merger) {
  return (...arguments_) => (
    // eslint-disable-next-line unicorn/no-array-reduce
    arguments_.reduce((p, c) => _defu(p, c, "", merger), {})
  );
}
const defu = createDefu();
const defuFn = createDefu((object, key, currentValue) => {
  if (object[key] !== void 0 && typeof currentValue === "function") {
    object[key] = currentValue(object[key]);
    return true;
  }
});

const inlineAppConfig = {};



const appConfig = defuFn(inlineAppConfig);

const NUMBER_CHAR_RE = /\d/;
const STR_SPLITTERS = ["-", "_", "/", "."];
function isUppercase(char = "") {
  if (NUMBER_CHAR_RE.test(char)) {
    return void 0;
  }
  return char !== char.toLowerCase();
}
function splitByCase(str, separators) {
  const splitters = STR_SPLITTERS;
  const parts = [];
  if (!str || typeof str !== "string") {
    return parts;
  }
  let buff = "";
  let previousUpper;
  let previousSplitter;
  for (const char of str) {
    const isSplitter = splitters.includes(char);
    if (isSplitter === true) {
      parts.push(buff);
      buff = "";
      previousUpper = void 0;
      continue;
    }
    const isUpper = isUppercase(char);
    if (previousSplitter === false) {
      if (previousUpper === false && isUpper === true) {
        parts.push(buff);
        buff = char;
        previousUpper = isUpper;
        continue;
      }
      if (previousUpper === true && isUpper === false && buff.length > 1) {
        const lastChar = buff.at(-1);
        parts.push(buff.slice(0, Math.max(0, buff.length - 1)));
        buff = lastChar + char;
        previousUpper = isUpper;
        continue;
      }
    }
    buff += char;
    previousUpper = isUpper;
    previousSplitter = isSplitter;
  }
  parts.push(buff);
  return parts;
}
function kebabCase(str, joiner) {
  return str ? (Array.isArray(str) ? str : splitByCase(str)).map((p) => p.toLowerCase()).join(joiner) : "";
}
function snakeCase(str) {
  return kebabCase(str || "", "_");
}

function getEnv(key, opts) {
  const envKey = snakeCase(key).toUpperCase();
  return destr$1(
    process.env[opts.prefix + envKey] ?? process.env[opts.altPrefix + envKey]
  );
}
function _isObject(input) {
  return typeof input === "object" && !Array.isArray(input);
}
function applyEnv(obj, opts, parentKey = "") {
  for (const key in obj) {
    const subKey = parentKey ? `${parentKey}_${key}` : key;
    const envValue = getEnv(subKey, opts);
    if (_isObject(obj[key])) {
      if (_isObject(envValue)) {
        obj[key] = { ...obj[key], ...envValue };
        applyEnv(obj[key], opts, subKey);
      } else if (envValue === void 0) {
        applyEnv(obj[key], opts, subKey);
      } else {
        obj[key] = envValue ?? obj[key];
      }
    } else {
      obj[key] = envValue ?? obj[key];
    }
    if (opts.envExpansion && typeof obj[key] === "string") {
      obj[key] = _expandFromEnv(obj[key]);
    }
  }
  return obj;
}
const envExpandRx = /\{\{([^{}]*)\}\}/g;
function _expandFromEnv(value) {
  return value.replace(envExpandRx, (match, key) => {
    return process.env[key] || match;
  });
}

const _inlineRuntimeConfig = {
  "app": {
    "baseURL": "/",
    "buildId": "a8edaca5-7afe-4c3f-b4cb-e624b16143e7",
    "buildAssetsDir": "/_nuxt/",
    "cdnURL": ""
  },
  "nitro": {
    "envPrefix": "NUXT_",
    "routeRules": {
      "/__nuxt_error": {
        "cache": false
      },
      "/_nuxt/builds/meta/**": {
        "headers": {
          "cache-control": "public, max-age=31536000, immutable"
        }
      },
      "/_nuxt/builds/**": {
        "headers": {
          "cache-control": "public, max-age=1, immutable"
        }
      },
      "/_nuxt/**": {
        "headers": {
          "cache-control": "public, max-age=31536000, immutable"
        }
      }
    }
  },
  "public": {
    "primevue": {
      "usePrimeVue": true,
      "autoImport": true,
      "resolvePath": "",
      "importPT": "",
      "importTheme": "",
      "loadStyles": true,
      "options": {
        "ripple": true,
        "theme": {
          "preset": {
            "primitive": {
              "borderRadius": {
                "none": "0",
                "xs": "2px",
                "sm": "4px",
                "md": "6px",
                "lg": "8px",
                "xl": "12px"
              },
              "emerald": {
                "50": "#ecfdf5",
                "100": "#d1fae5",
                "200": "#a7f3d0",
                "300": "#6ee7b7",
                "400": "#34d399",
                "500": "#10b981",
                "600": "#059669",
                "700": "#047857",
                "800": "#065f46",
                "900": "#064e3b",
                "950": "#022c22"
              },
              "green": {
                "50": "#f0fdf4",
                "100": "#dcfce7",
                "200": "#bbf7d0",
                "300": "#86efac",
                "400": "#4ade80",
                "500": "#22c55e",
                "600": "#16a34a",
                "700": "#15803d",
                "800": "#166534",
                "900": "#14532d",
                "950": "#052e16"
              },
              "lime": {
                "50": "#f7fee7",
                "100": "#ecfccb",
                "200": "#d9f99d",
                "300": "#bef264",
                "400": "#a3e635",
                "500": "#84cc16",
                "600": "#65a30d",
                "700": "#4d7c0f",
                "800": "#3f6212",
                "900": "#365314",
                "950": "#1a2e05"
              },
              "red": {
                "50": "#fef2f2",
                "100": "#fee2e2",
                "200": "#fecaca",
                "300": "#fca5a5",
                "400": "#f87171",
                "500": "#ef4444",
                "600": "#dc2626",
                "700": "#b91c1c",
                "800": "#991b1b",
                "900": "#7f1d1d",
                "950": "#450a0a"
              },
              "orange": {
                "50": "#fff7ed",
                "100": "#ffedd5",
                "200": "#fed7aa",
                "300": "#fdba74",
                "400": "#fb923c",
                "500": "#f97316",
                "600": "#ea580c",
                "700": "#c2410c",
                "800": "#9a3412",
                "900": "#7c2d12",
                "950": "#431407"
              },
              "amber": {
                "50": "#fffbeb",
                "100": "#fef3c7",
                "200": "#fde68a",
                "300": "#fcd34d",
                "400": "#fbbf24",
                "500": "#f59e0b",
                "600": "#d97706",
                "700": "#b45309",
                "800": "#92400e",
                "900": "#78350f",
                "950": "#451a03"
              },
              "yellow": {
                "50": "#fefce8",
                "100": "#fef9c3",
                "200": "#fef08a",
                "300": "#fde047",
                "400": "#facc15",
                "500": "#eab308",
                "600": "#ca8a04",
                "700": "#a16207",
                "800": "#854d0e",
                "900": "#713f12",
                "950": "#422006"
              },
              "teal": {
                "50": "#f0fdfa",
                "100": "#ccfbf1",
                "200": "#99f6e4",
                "300": "#5eead4",
                "400": "#2dd4bf",
                "500": "#14b8a6",
                "600": "#0d9488",
                "700": "#0f766e",
                "800": "#115e59",
                "900": "#134e4a",
                "950": "#042f2e"
              },
              "cyan": {
                "50": "#ecfeff",
                "100": "#cffafe",
                "200": "#a5f3fc",
                "300": "#67e8f9",
                "400": "#22d3ee",
                "500": "#06b6d4",
                "600": "#0891b2",
                "700": "#0e7490",
                "800": "#155e75",
                "900": "#164e63",
                "950": "#083344"
              },
              "sky": {
                "50": "#f0f9ff",
                "100": "#e0f2fe",
                "200": "#bae6fd",
                "300": "#7dd3fc",
                "400": "#38bdf8",
                "500": "#0ea5e9",
                "600": "#0284c7",
                "700": "#0369a1",
                "800": "#075985",
                "900": "#0c4a6e",
                "950": "#082f49"
              },
              "blue": {
                "50": "#eff6ff",
                "100": "#dbeafe",
                "200": "#bfdbfe",
                "300": "#93c5fd",
                "400": "#60a5fa",
                "500": "#3b82f6",
                "600": "#2563eb",
                "700": "#1d4ed8",
                "800": "#1e40af",
                "900": "#1e3a8a",
                "950": "#172554"
              },
              "indigo": {
                "50": "#eef2ff",
                "100": "#e0e7ff",
                "200": "#c7d2fe",
                "300": "#a5b4fc",
                "400": "#818cf8",
                "500": "#6366f1",
                "600": "#4f46e5",
                "700": "#4338ca",
                "800": "#3730a3",
                "900": "#312e81",
                "950": "#1e1b4b"
              },
              "violet": {
                "50": "#f5f3ff",
                "100": "#ede9fe",
                "200": "#ddd6fe",
                "300": "#c4b5fd",
                "400": "#a78bfa",
                "500": "#8b5cf6",
                "600": "#7c3aed",
                "700": "#6d28d9",
                "800": "#5b21b6",
                "900": "#4c1d95",
                "950": "#2e1065"
              },
              "purple": {
                "50": "#faf5ff",
                "100": "#f3e8ff",
                "200": "#e9d5ff",
                "300": "#d8b4fe",
                "400": "#c084fc",
                "500": "#a855f7",
                "600": "#9333ea",
                "700": "#7e22ce",
                "800": "#6b21a8",
                "900": "#581c87",
                "950": "#3b0764"
              },
              "fuchsia": {
                "50": "#fdf4ff",
                "100": "#fae8ff",
                "200": "#f5d0fe",
                "300": "#f0abfc",
                "400": "#e879f9",
                "500": "#d946ef",
                "600": "#c026d3",
                "700": "#a21caf",
                "800": "#86198f",
                "900": "#701a75",
                "950": "#4a044e"
              },
              "pink": {
                "50": "#fdf2f8",
                "100": "#fce7f3",
                "200": "#fbcfe8",
                "300": "#f9a8d4",
                "400": "#f472b6",
                "500": "#ec4899",
                "600": "#db2777",
                "700": "#be185d",
                "800": "#9d174d",
                "900": "#831843",
                "950": "#500724"
              },
              "rose": {
                "50": "#fff1f2",
                "100": "#ffe4e6",
                "200": "#fecdd3",
                "300": "#fda4af",
                "400": "#fb7185",
                "500": "#f43f5e",
                "600": "#e11d48",
                "700": "#be123c",
                "800": "#9f1239",
                "900": "#881337",
                "950": "#4c0519"
              },
              "slate": {
                "50": "#f8fafc",
                "100": "#f1f5f9",
                "200": "#e2e8f0",
                "300": "#cbd5e1",
                "400": "#94a3b8",
                "500": "#64748b",
                "600": "#475569",
                "700": "#334155",
                "800": "#1e293b",
                "900": "#0f172a",
                "950": "#020617"
              },
              "gray": {
                "50": "#f9fafb",
                "100": "#f3f4f6",
                "200": "#e5e7eb",
                "300": "#d1d5db",
                "400": "#9ca3af",
                "500": "#6b7280",
                "600": "#4b5563",
                "700": "#374151",
                "800": "#1f2937",
                "900": "#111827",
                "950": "#030712"
              },
              "zinc": {
                "50": "#fafafa",
                "100": "#f4f4f5",
                "200": "#e4e4e7",
                "300": "#d4d4d8",
                "400": "#a1a1aa",
                "500": "#71717a",
                "600": "#52525b",
                "700": "#3f3f46",
                "800": "#27272a",
                "900": "#18181b",
                "950": "#09090b"
              },
              "neutral": {
                "50": "#fafafa",
                "100": "#f5f5f5",
                "200": "#e5e5e5",
                "300": "#d4d4d4",
                "400": "#a3a3a3",
                "500": "#737373",
                "600": "#525252",
                "700": "#404040",
                "800": "#262626",
                "900": "#171717",
                "950": "#0a0a0a"
              },
              "stone": {
                "50": "#fafaf9",
                "100": "#f5f5f4",
                "200": "#e7e5e4",
                "300": "#d6d3d1",
                "400": "#a8a29e",
                "500": "#78716c",
                "600": "#57534e",
                "700": "#44403c",
                "800": "#292524",
                "900": "#1c1917",
                "950": "#0c0a09"
              }
            },
            "semantic": {
              "typography": {
                "lineHeight": "1.5",
                "fontFamily": "inherit",
                "fontWeight": "normal",
                "fontSize": "0.875rem"
              },
              "transitionDuration": "0.2s",
              "focusRing": {
                "width": "1px",
                "style": "solid",
                "color": "{primary.color}",
                "offset": "2px",
                "shadow": "none"
              },
              "disabledOpacity": "0.6",
              "iconSize": "0.875rem",
              "anchorGutter": "2px",
              "primary": {
                "50": "{emerald.50}",
                "100": "{emerald.100}",
                "200": "{emerald.200}",
                "300": "{emerald.300}",
                "400": "{emerald.400}",
                "500": "{emerald.500}",
                "600": "{emerald.600}",
                "700": "{emerald.700}",
                "800": "{emerald.800}",
                "900": "{emerald.900}",
                "950": "{emerald.950}",
                "color": "light-dark({primary.500}, {primary.400})",
                "contrastColor": "light-dark(#ffffff, {surface.900})",
                "hoverColor": "light-dark({primary.600}, {primary.300})",
                "activeColor": "light-dark({primary.700}, {primary.200})"
              },
              "formField": {
                "fontWeight": "{typography.font.weight}",
                "fontSize": "{typography.font.size}",
                "paddingX": "0.625rem",
                "paddingY": "0.375rem",
                "sm": {
                  "fontSize": "0.75rem",
                  "paddingX": "0.5rem",
                  "paddingY": "0.25rem"
                },
                "lg": {
                  "fontSize": "1rem",
                  "paddingX": "0.75rem",
                  "paddingY": "0.5rem"
                },
                "borderRadius": "{border.radius.md}",
                "focusRing": {
                  "width": "0",
                  "style": "none",
                  "color": "transparent",
                  "offset": "0",
                  "shadow": "none"
                },
                "transitionDuration": "{transition.duration}",
                "background": "light-dark({surface.0}, {surface.950})",
                "disabledBackground": "light-dark({surface.200}, {surface.700})",
                "filledBackground": "light-dark({surface.50}, {surface.800})",
                "filledHoverBackground": "light-dark({surface.50}, {surface.800})",
                "filledFocusBackground": "light-dark({surface.50}, {surface.800})",
                "borderColor": "light-dark({surface.300}, {surface.600})",
                "hoverBorderColor": "light-dark({surface.400}, {surface.500})",
                "focusBorderColor": "{primary.color}",
                "invalidBorderColor": "light-dark({red.400}, {red.300})",
                "color": "light-dark({surface.700}, {surface.0})",
                "disabledColor": "light-dark({surface.500}, {surface.400})",
                "placeholderColor": "light-dark({surface.500}, {surface.400})",
                "invalidPlaceholderColor": "light-dark({red.600}, {red.400})",
                "floatLabelColor": "light-dark({surface.500}, {surface.400})",
                "floatLabelFocusColor": "light-dark({primary.600}, {primary.color})",
                "floatLabelActiveColor": "light-dark({surface.500}, {surface.400})",
                "floatLabelInvalidColor": "{form.field.invalid.placeholder.color}",
                "iconColor": "{surface.400}",
                "shadow": "0 0 #0000, 0 0 #0000, 0 1px 2px 0 rgba(18, 18, 23, 0.05)"
              },
              "list": {
                "padding": "0.25rem 0.25rem",
                "gap": "2px",
                "header": {
                  "padding": "0.5rem 0.875rem 0.125rem 0.875rem"
                },
                "option": {
                  "padding": "0.25rem 0.625rem",
                  "borderRadius": "{border.radius.sm}",
                  "fontWeight": "{typography.font.weight}",
                  "fontSize": "{typography.font.size}",
                  "transitionDuration": "0s",
                  "focusBackground": "light-dark({surface.100}, {surface.800})",
                  "selectedBackground": "{highlight.background}",
                  "selectedFocusBackground": "{highlight.focus.background}",
                  "color": "{text.color}",
                  "focusColor": "{text.hover.color}",
                  "selectedColor": "{highlight.color}",
                  "selectedFocusColor": "{highlight.focus.color}",
                  "selectedFontWeight": "{typography.font.weight}",
                  "icon": {
                    "color": "light-dark({surface.400}, {surface.500})",
                    "focusColor": "light-dark({surface.500}, {surface.400})"
                  }
                },
                "optionGroup": {
                  "padding": "0.25rem 0.625rem",
                  "fontWeight": "600",
                  "fontSize": "{typography.font.size}",
                  "background": "transparent",
                  "color": "{text.muted.color}"
                }
              },
              "content": {
                "borderRadius": "{border.radius.md}",
                "background": "light-dark({surface.0}, {surface.900})",
                "hoverBackground": "light-dark({surface.100}, {surface.800})",
                "borderColor": "light-dark({surface.200}, {surface.700})",
                "color": "{text.color}",
                "hoverColor": "{text.hover.color}"
              },
              "mask": {
                "transitionDuration": "0.3s",
                "background": "light-dark(rgba(0,0,0,0.4), rgba(0,0,0,0.6))",
                "color": "{surface.200}"
              },
              "navigation": {
                "list": {
                  "padding": "0.25rem 0.25rem",
                  "gap": "2px"
                },
                "item": {
                  "padding": "0.25rem 0.625rem",
                  "borderRadius": "{border.radius.sm}",
                  "gap": "0.5rem",
                  "focusBackground": "light-dark({surface.100}, {surface.800})",
                  "activeBackground": "light-dark({surface.100}, {surface.800})",
                  "color": "{text.color}",
                  "focusColor": "{text.hover.color}",
                  "activeColor": "{text.hover.color}",
                  "icon": {
                    "size": "{icon.size}",
                    "color": "light-dark({surface.400}, {surface.500})",
                    "focusColor": "light-dark({surface.500}, {surface.400})",
                    "activeColor": "light-dark({surface.500}, {surface.400})"
                  },
                  "label": {
                    "fontWeight": "{typography.font.weight}",
                    "fontSize": "{typography.font.size}"
                  },
                  "transitionDuration": "0s"
                },
                "submenuLabel": {
                  "padding": "0.25rem 0.625rem",
                  "fontWeight": "600",
                  "fontSize": "{typography.font.size}",
                  "background": "transparent",
                  "color": "{text.muted.color}"
                },
                "submenuIcon": {
                  "size": "0.75rem",
                  "color": "light-dark({surface.400}, {surface.500})",
                  "focusColor": "light-dark({surface.500}, {surface.400})",
                  "activeColor": "light-dark({surface.500}, {surface.400})"
                }
              },
              "overlay": {
                "select": {
                  "borderRadius": "{border.radius.md}",
                  "shadow": "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)",
                  "background": "light-dark({surface.0}, {surface.900})",
                  "borderColor": "light-dark({surface.200}, {surface.700})",
                  "color": "{text.color}"
                },
                "popover": {
                  "borderRadius": "{border.radius.md}",
                  "padding": "0.625rem",
                  "shadow": "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)",
                  "background": "light-dark({surface.0}, {surface.900})",
                  "borderColor": "light-dark({surface.200}, {surface.700})",
                  "color": "{text.color}"
                },
                "modal": {
                  "borderRadius": "{border.radius.xl}",
                  "padding": "1.125rem",
                  "shadow": "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)",
                  "background": "light-dark({surface.0}, {surface.900})",
                  "borderColor": "light-dark({surface.200}, {surface.700})",
                  "color": "{text.color}"
                },
                "navigation": {
                  "shadow": "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)"
                }
              },
              "surface": {
                "0": "#ffffff",
                "50": "light-dark({slate.50}, {zinc.50})",
                "100": "light-dark({slate.100}, {zinc.100})",
                "200": "light-dark({slate.200}, {zinc.200})",
                "300": "light-dark({slate.300}, {zinc.300})",
                "400": "light-dark({slate.400}, {zinc.400})",
                "500": "light-dark({slate.500}, {zinc.500})",
                "600": "light-dark({slate.600}, {zinc.600})",
                "700": "light-dark({slate.700}, {zinc.700})",
                "800": "light-dark({slate.800}, {zinc.800})",
                "900": "light-dark({slate.900}, {zinc.900})",
                "950": "light-dark({slate.950}, {zinc.950})"
              },
              "highlight": {
                "background": "light-dark({primary.50}, color-mix(in srgb, {primary.400}, transparent 84%))",
                "focusBackground": "light-dark({primary.100}, color-mix(in srgb, {primary.400}, transparent 76%))",
                "color": "light-dark({primary.700}, rgba(255,255,255,.87))",
                "focusColor": "light-dark({primary.800}, rgba(255,255,255,.87))"
              },
              "text": {
                "color": "light-dark({surface.700}, {surface.0})",
                "hoverColor": "light-dark({surface.800}, {surface.0})",
                "mutedColor": "light-dark({surface.500}, {surface.400})",
                "hoverMutedColor": "light-dark({surface.600}, {surface.300})"
              }
            },
            "components": {
              "accordion": {
                "root": {
                  "transitionDuration": "{transition.duration}"
                },
                "panel": {
                  "borderWidth": "0 0 1px 0",
                  "borderColor": "{content.border.color}"
                },
                "header": {
                  "color": "{text.muted.color}",
                  "hoverColor": "{text.color}",
                  "activeColor": "{text.color}",
                  "activeHoverColor": "{text.color}",
                  "padding": "1rem",
                  "fontWeight": "600",
                  "fontSize": "{typography.font.size}",
                  "borderRadius": "0",
                  "borderWidth": "0",
                  "borderColor": "{content.border.color}",
                  "background": "{content.background}",
                  "hoverBackground": "{content.background}",
                  "activeBackground": "{content.background}",
                  "activeHoverBackground": "{content.background}",
                  "focusRing": {
                    "width": "{focus.ring.width}",
                    "style": "{focus.ring.style}",
                    "color": "{focus.ring.color}",
                    "offset": "-1px",
                    "shadow": "{focus.ring.shadow}"
                  },
                  "toggleIcon": {
                    "color": "{text.muted.color}",
                    "hoverColor": "{text.color}",
                    "activeColor": "{text.color}",
                    "activeHoverColor": "{text.color}"
                  },
                  "first": {
                    "topBorderRadius": "{content.border.radius}",
                    "borderWidth": "0"
                  },
                  "last": {
                    "bottomBorderRadius": "{content.border.radius}",
                    "activeBottomBorderRadius": "0"
                  }
                },
                "content": {
                  "borderWidth": "0",
                  "borderColor": "{content.border.color}",
                  "background": "{content.background}",
                  "color": "{text.color}",
                  "padding": "0 1rem 1rem 1rem"
                }
              },
              "autocomplete": {
                "root": {
                  "background": "{form.field.background}",
                  "disabledBackground": "{form.field.disabled.background}",
                  "filledBackground": "{form.field.filled.background}",
                  "filledHoverBackground": "{form.field.filled.hover.background}",
                  "filledFocusBackground": "{form.field.filled.focus.background}",
                  "borderColor": "{form.field.border.color}",
                  "hoverBorderColor": "{form.field.hover.border.color}",
                  "focusBorderColor": "{form.field.focus.border.color}",
                  "invalidBorderColor": "{form.field.invalid.border.color}",
                  "color": "{form.field.color}",
                  "disabledColor": "{form.field.disabled.color}",
                  "placeholderColor": "{form.field.placeholder.color}",
                  "invalidPlaceholderColor": "{form.field.invalid.placeholder.color}",
                  "shadow": "{form.field.shadow}",
                  "paddingX": "{form.field.padding.x}",
                  "paddingY": "{form.field.padding.y}",
                  "borderRadius": "{form.field.border.radius}",
                  "focusRing": {
                    "width": "{form.field.focus.ring.width}",
                    "style": "{form.field.focus.ring.style}",
                    "color": "{form.field.focus.ring.color}",
                    "offset": "{form.field.focus.ring.offset}",
                    "shadow": "{form.field.focus.ring.shadow}"
                  },
                  "transitionDuration": "{form.field.transition.duration}"
                },
                "overlay": {
                  "background": "{overlay.select.background}",
                  "borderColor": "{overlay.select.border.color}",
                  "borderRadius": "{overlay.select.border.radius}",
                  "color": "{overlay.select.color}",
                  "shadow": "{overlay.select.shadow}"
                },
                "list": {
                  "padding": "{list.padding}",
                  "gap": "{list.gap}"
                },
                "option": {
                  "focusBackground": "{list.option.focus.background}",
                  "selectedBackground": "{list.option.selected.background}",
                  "selectedFocusBackground": "{list.option.selected.focus.background}",
                  "color": "{list.option.color}",
                  "focusColor": "{list.option.focus.color}",
                  "selectedColor": "{list.option.selected.color}",
                  "selectedFocusColor": "{list.option.selected.focus.color}",
                  "padding": "{list.option.padding}",
                  "borderRadius": "{list.option.border.radius}",
                  "fontWeight": "{list.option.font.weight}",
                  "fontSize": "{list.option.font.size}"
                },
                "optionGroup": {
                  "background": "{list.option.group.background}",
                  "color": "{list.option.group.color}",
                  "fontWeight": "{list.option.group.font.weight}",
                  "fontSize": "{list.option.group.font.size}",
                  "padding": "{list.option.group.padding}"
                },
                "dropdown": {
                  "width": "2.25rem",
                  "sm": {
                    "width": "1.75rem"
                  },
                  "lg": {
                    "width": "2.625rem"
                  },
                  "background": "light-dark({surface.100}, {surface.800})",
                  "hoverBackground": "light-dark({surface.200}, {surface.700})",
                  "activeBackground": "light-dark({surface.300}, {surface.600})",
                  "borderColor": "{form.field.border.color}",
                  "hoverBorderColor": "{form.field.border.color}",
                  "activeBorderColor": "{form.field.border.color}",
                  "color": "light-dark({surface.600}, {surface.300})",
                  "hoverColor": "light-dark({surface.700}, {surface.200})",
                  "activeColor": "light-dark({surface.800}, {surface.100})",
                  "borderRadius": "{form.field.border.radius}",
                  "focusRing": {
                    "width": "{focus.ring.width}",
                    "style": "{focus.ring.style}",
                    "color": "{focus.ring.color}",
                    "offset": "{focus.ring.offset}",
                    "shadow": "{focus.ring.shadow}"
                  }
                },
                "chip": {
                  "borderRadius": "{border.radius.sm}",
                  "focusBackground": "light-dark({surface.200}, {surface.700})",
                  "focusColor": "light-dark({surface.800}, {surface.0})"
                },
                "emptyMessage": {
                  "padding": "{list.option.padding}"
                }
              },
              "avatar": {
                "root": {
                  "width": "1.75rem",
                  "height": "1.75rem",
                  "fontWeight": "{typography.font.weight}",
                  "fontSize": "{typography.font.size}",
                  "background": "{content.border.color}",
                  "color": "{content.color}",
                  "borderRadius": "{content.border.radius}"
                },
                "icon": {
                  "size": "0.875rem"
                },
                "group": {
                  "borderColor": "{content.background}",
                  "offset": "-0.625rem"
                },
                "lg": {
                  "width": "2.625rem",
                  "height": "2.625rem",
                  "fontSize": "1.25rem",
                  "icon": {
                    "size": "1.25rem"
                  },
                  "group": {
                    "offset": "-0.875rem"
                  }
                },
                "xl": {
                  "width": "3.5rem",
                  "height": "3.5rem",
                  "fontSize": "1.75rem",
                  "icon": {
                    "size": "1.75rem"
                  },
                  "group": {
                    "offset": "-1.25rem"
                  }
                }
              },
              "badge": {
                "root": {
                  "borderRadius": "{border.radius.md}",
                  "padding": "0 0.375rem",
                  "fontSize": "0.625rem",
                  "fontWeight": "700",
                  "minWidth": "1.25rem",
                  "height": "1.25rem"
                },
                "dot": {
                  "size": "0.5rem"
                },
                "sm": {
                  "fontSize": "0.5rem",
                  "minWidth": "1.125rem",
                  "height": "1.125rem"
                },
                "lg": {
                  "fontSize": "0.75rem",
                  "minWidth": "1.5rem",
                  "height": "1.5rem"
                },
                "xl": {
                  "fontSize": "0.875rem",
                  "minWidth": "1.75rem",
                  "height": "1.75rem"
                },
                "primary": {
                  "background": "{primary.color}",
                  "color": "{primary.contrast.color}"
                },
                "secondary": {
                  "background": "light-dark({surface.100}, {surface.800})",
                  "color": "light-dark({surface.600}, {surface.300})"
                },
                "success": {
                  "background": "light-dark({green.500}, {green.400})",
                  "color": "light-dark({surface.0}, {green.950})"
                },
                "info": {
                  "background": "light-dark({sky.500}, {sky.400})",
                  "color": "light-dark({surface.0}, {sky.950})"
                },
                "warn": {
                  "background": "light-dark({orange.500}, {orange.400})",
                  "color": "light-dark({surface.0}, {orange.950})"
                },
                "danger": {
                  "background": "light-dark({red.500}, {red.400})",
                  "color": "light-dark({surface.0}, {red.950})"
                },
                "contrast": {
                  "background": "light-dark({surface.950}, {surface.0})",
                  "color": "light-dark({surface.0}, {surface.950})"
                }
              },
              "blockui": {
                "root": {
                  "borderRadius": "{content.border.radius}"
                }
              },
              "breadcrumb": {
                "root": {
                  "padding": "0.875rem",
                  "background": "{content.background}",
                  "gap": "0.5rem",
                  "transitionDuration": "{transition.duration}"
                },
                "item": {
                  "color": "{text.muted.color}",
                  "hoverColor": "{text.color}",
                  "borderRadius": "{content.border.radius}",
                  "gap": "{navigation.item.gap}",
                  "icon": {
                    "color": "{navigation.item.icon.color}",
                    "hoverColor": "{navigation.item.icon.focus.color}",
                    "size": "{navigation.item.icon.size}"
                  },
                  "label": {
                    "fontWeight": "{navigation.item.label.font.weight}",
                    "fontSize": "{navigation.item.label.font.size}"
                  },
                  "focusRing": {
                    "width": "{focus.ring.width}",
                    "style": "{focus.ring.style}",
                    "color": "{focus.ring.color}",
                    "offset": "{focus.ring.offset}",
                    "shadow": "{focus.ring.shadow}"
                  }
                },
                "separator": {
                  "color": "{navigation.item.icon.color}"
                }
              },
              "button": {
                "root": {
                  "borderRadius": "{form.field.border.radius}",
                  "roundedBorderRadius": "2rem",
                  "gap": "0.5rem",
                  "paddingX": "{form.field.padding.x}",
                  "paddingY": "{form.field.padding.y}",
                  "iconOnlyWidth": "2.25rem",
                  "fontSize": "{form.field.font.size}",
                  "sm": {
                    "fontSize": "{form.field.sm.font.size}",
                    "paddingX": "{form.field.sm.padding.x}",
                    "paddingY": "{form.field.sm.padding.y}",
                    "iconOnlyWidth": "1.75rem"
                  },
                  "lg": {
                    "fontSize": "{form.field.lg.font.size}",
                    "paddingX": "{form.field.lg.padding.x}",
                    "paddingY": "{form.field.lg.padding.y}",
                    "iconOnlyWidth": "2.625rem"
                  },
                  "label": {
                    "fontWeight": "500"
                  },
                  "raisedShadow": "0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12)",
                  "focusRing": {
                    "width": "{focus.ring.width}",
                    "style": "{focus.ring.style}",
                    "offset": "{focus.ring.offset}"
                  },
                  "badgeSize": "1rem",
                  "transitionDuration": "{form.field.transition.duration}",
                  "primary": {
                    "background": "{primary.color}",
                    "hoverBackground": "{primary.hover.color}",
                    "activeBackground": "{primary.active.color}",
                    "borderColor": "{primary.color}",
                    "hoverBorderColor": "{primary.hover.color}",
                    "activeBorderColor": "{primary.active.color}",
                    "color": "{primary.contrast.color}",
                    "hoverColor": "{primary.contrast.color}",
                    "activeColor": "{primary.contrast.color}",
                    "focusRing": {
                      "color": "{primary.color}",
                      "shadow": "none"
                    }
                  },
                  "secondary": {
                    "background": "light-dark({surface.100}, {surface.800})",
                    "hoverBackground": "light-dark({surface.200}, {surface.700})",
                    "activeBackground": "light-dark({surface.300}, {surface.600})",
                    "borderColor": "light-dark({surface.100}, {surface.800})",
                    "hoverBorderColor": "light-dark({surface.200}, {surface.700})",
                    "activeBorderColor": "light-dark({surface.300}, {surface.600})",
                    "color": "light-dark({surface.600}, {surface.300})",
                    "hoverColor": "light-dark({surface.700}, {surface.200})",
                    "activeColor": "light-dark({surface.800}, {surface.100})",
                    "focusRing": {
                      "color": "light-dark({surface.600}, {surface.300})",
                      "shadow": "none"
                    }
                  },
                  "info": {
                    "background": "light-dark({sky.500}, {sky.400})",
                    "hoverBackground": "light-dark({sky.600}, {sky.300})",
                    "activeBackground": "light-dark({sky.700}, {sky.200})",
                    "borderColor": "light-dark({sky.500}, {sky.400})",
                    "hoverBorderColor": "light-dark({sky.600}, {sky.300})",
                    "activeBorderColor": "light-dark({sky.700}, {sky.200})",
                    "color": "light-dark(#ffffff, {sky.950})",
                    "hoverColor": "light-dark(#ffffff, {sky.950})",
                    "activeColor": "light-dark(#ffffff, {sky.950})",
                    "focusRing": {
                      "color": "light-dark({sky.500}, {sky.400})",
                      "shadow": "none"
                    }
                  },
                  "success": {
                    "background": "light-dark({green.500}, {green.400})",
                    "hoverBackground": "light-dark({green.600}, {green.300})",
                    "activeBackground": "light-dark({green.700}, {green.200})",
                    "borderColor": "light-dark({green.500}, {green.400})",
                    "hoverBorderColor": "light-dark({green.600}, {green.300})",
                    "activeBorderColor": "light-dark({green.700}, {green.200})",
                    "color": "light-dark(#ffffff, {green.950})",
                    "hoverColor": "light-dark(#ffffff, {green.950})",
                    "activeColor": "light-dark(#ffffff, {green.950})",
                    "focusRing": {
                      "color": "light-dark({green.500}, {green.400})",
                      "shadow": "none"
                    }
                  },
                  "warn": {
                    "background": "light-dark({orange.500}, {orange.400})",
                    "hoverBackground": "light-dark({orange.600}, {orange.300})",
                    "activeBackground": "light-dark({orange.700}, {orange.200})",
                    "borderColor": "light-dark({orange.500}, {orange.400})",
                    "hoverBorderColor": "light-dark({orange.600}, {orange.300})",
                    "activeBorderColor": "light-dark({orange.700}, {orange.200})",
                    "color": "light-dark(#ffffff, {orange.950})",
                    "hoverColor": "light-dark(#ffffff, {orange.950})",
                    "activeColor": "light-dark(#ffffff, {orange.950})",
                    "focusRing": {
                      "color": "light-dark({orange.500}, {orange.400})",
                      "shadow": "none"
                    }
                  },
                  "help": {
                    "background": "light-dark({purple.500}, {purple.400})",
                    "hoverBackground": "light-dark({purple.600}, {purple.300})",
                    "activeBackground": "light-dark({purple.700}, {purple.200})",
                    "borderColor": "light-dark({purple.500}, {purple.400})",
                    "hoverBorderColor": "light-dark({purple.600}, {purple.300})",
                    "activeBorderColor": "light-dark({purple.700}, {purple.200})",
                    "color": "light-dark(#ffffff, {purple.950})",
                    "hoverColor": "light-dark(#ffffff, {purple.950})",
                    "activeColor": "light-dark(#ffffff, {purple.950})",
                    "focusRing": {
                      "color": "light-dark({purple.500}, {purple.400})",
                      "shadow": "none"
                    }
                  },
                  "danger": {
                    "background": "light-dark({red.500}, {red.400})",
                    "hoverBackground": "light-dark({red.600}, {red.300})",
                    "activeBackground": "light-dark({red.700}, {red.200})",
                    "borderColor": "light-dark({red.500}, {red.400})",
                    "hoverBorderColor": "light-dark({red.600}, {red.300})",
                    "activeBorderColor": "light-dark({red.700}, {red.200})",
                    "color": "light-dark(#ffffff, {red.950})",
                    "hoverColor": "light-dark(#ffffff, {red.950})",
                    "activeColor": "light-dark(#ffffff, {red.950})",
                    "focusRing": {
                      "color": "light-dark({red.500}, {red.400})",
                      "shadow": "none"
                    }
                  },
                  "contrast": {
                    "background": "light-dark({surface.950}, {surface.0})",
                    "hoverBackground": "light-dark({surface.900}, {surface.100})",
                    "activeBackground": "light-dark({surface.800}, {surface.200})",
                    "borderColor": "light-dark({surface.950}, {surface.0})",
                    "hoverBorderColor": "light-dark({surface.900}, {surface.100})",
                    "activeBorderColor": "light-dark({surface.800}, {surface.200})",
                    "color": "light-dark({surface.0}, {surface.950})",
                    "hoverColor": "light-dark({surface.0}, {surface.950})",
                    "activeColor": "light-dark({surface.0}, {surface.950})",
                    "focusRing": {
                      "color": "light-dark({surface.950}, {surface.0})",
                      "shadow": "none"
                    }
                  }
                },
                "outlined": {
                  "primary": {
                    "hoverBackground": "light-dark({primary.50}, color-mix(in srgb, {primary.color}, transparent 96%))",
                    "activeBackground": "light-dark({primary.100}, color-mix(in srgb, {primary.color}, transparent 84%))",
                    "borderColor": "light-dark({primary.200}, {primary.700})",
                    "color": "{primary.color}"
                  },
                  "secondary": {
                    "hoverBackground": "light-dark({surface.50}, rgba(255,255,255,0.04))",
                    "activeBackground": "light-dark({surface.100}, rgba(255,255,255,0.16))",
                    "borderColor": "light-dark({surface.200}, {surface.700})",
                    "color": "light-dark({surface.500}, {surface.400})"
                  },
                  "success": {
                    "hoverBackground": "light-dark({green.50}, color-mix(in srgb, {green.400}, transparent 96%))",
                    "activeBackground": "light-dark({green.100}, color-mix(in srgb, {green.400}, transparent 84%))",
                    "borderColor": "light-dark({green.200}, {green.700})",
                    "color": "light-dark({green.500}, {green.400})"
                  },
                  "info": {
                    "hoverBackground": "light-dark({sky.50}, color-mix(in srgb, {sky.400}, transparent 96%))",
                    "activeBackground": "light-dark({sky.100}, color-mix(in srgb, {sky.400}, transparent 84%))",
                    "borderColor": "light-dark({sky.200}, {sky.700})",
                    "color": "light-dark({sky.500}, {sky.400})"
                  },
                  "warn": {
                    "hoverBackground": "light-dark({orange.50}, color-mix(in srgb, {orange.400}, transparent 96%))",
                    "activeBackground": "light-dark({orange.100}, color-mix(in srgb, {orange.400}, transparent 84%))",
                    "borderColor": "light-dark({orange.200}, {orange.700})",
                    "color": "light-dark({orange.500}, {orange.400})"
                  },
                  "help": {
                    "hoverBackground": "light-dark({purple.50}, color-mix(in srgb, {purple.400}, transparent 96%))",
                    "activeBackground": "light-dark({purple.100}, color-mix(in srgb, {purple.400}, transparent 84%))",
                    "borderColor": "light-dark({purple.200}, {purple.700})",
                    "color": "light-dark({purple.500}, {purple.400})"
                  },
                  "danger": {
                    "hoverBackground": "light-dark({red.50}, color-mix(in srgb, {red.400}, transparent 96%))",
                    "activeBackground": "light-dark({red.100}, color-mix(in srgb, {red.400}, transparent 84%))",
                    "borderColor": "light-dark({red.200}, {red.700})",
                    "color": "light-dark({red.500}, {red.400})"
                  },
                  "contrast": {
                    "hoverBackground": "light-dark({surface.50}, {surface.800})",
                    "activeBackground": "light-dark({surface.100}, {surface.700})",
                    "borderColor": "light-dark({surface.700}, {surface.500})",
                    "color": "light-dark({surface.950}, {surface.0})"
                  },
                  "plain": {
                    "hoverBackground": "light-dark({surface.50}, {surface.800})",
                    "activeBackground": "light-dark({surface.100}, {surface.700})",
                    "borderColor": "light-dark({surface.200}, {surface.600})",
                    "color": "light-dark({surface.700}, {surface.0})"
                  }
                },
                "text": {
                  "primary": {
                    "hoverBackground": "light-dark({primary.50}, color-mix(in srgb, {primary.color}, transparent 96%))",
                    "activeBackground": "light-dark({primary.100}, color-mix(in srgb, {primary.color}, transparent 84%))",
                    "color": "{primary.color}"
                  },
                  "secondary": {
                    "hoverBackground": "light-dark({surface.50}, {surface.800})",
                    "activeBackground": "light-dark({surface.100}, {surface.700})",
                    "color": "light-dark({surface.500}, {surface.400})"
                  },
                  "success": {
                    "hoverBackground": "light-dark({green.50}, color-mix(in srgb, {green.400}, transparent 96%))",
                    "activeBackground": "light-dark({green.100}, color-mix(in srgb, {green.400}, transparent 84%))",
                    "color": "light-dark({green.500}, {green.400})"
                  },
                  "info": {
                    "hoverBackground": "light-dark({sky.50}, color-mix(in srgb, {sky.400}, transparent 96%))",
                    "activeBackground": "light-dark({sky.100}, color-mix(in srgb, {sky.400}, transparent 84%))",
                    "color": "light-dark({sky.500}, {sky.400})"
                  },
                  "warn": {
                    "hoverBackground": "light-dark({orange.50}, color-mix(in srgb, {orange.400}, transparent 96%))",
                    "activeBackground": "light-dark({orange.100}, color-mix(in srgb, {orange.400}, transparent 84%))",
                    "color": "light-dark({orange.500}, {orange.400})"
                  },
                  "help": {
                    "hoverBackground": "light-dark({purple.50}, color-mix(in srgb, {purple.400}, transparent 96%))",
                    "activeBackground": "light-dark({purple.100}, color-mix(in srgb, {purple.400}, transparent 84%))",
                    "color": "light-dark({purple.500}, {purple.400})"
                  },
                  "danger": {
                    "hoverBackground": "light-dark({red.50}, color-mix(in srgb, {red.400}, transparent 96%))",
                    "activeBackground": "light-dark({red.100}, color-mix(in srgb, {red.400}, transparent 84%))",
                    "color": "light-dark({red.500}, {red.400})"
                  },
                  "contrast": {
                    "hoverBackground": "light-dark({surface.50}, {surface.800})",
                    "activeBackground": "light-dark({surface.100}, {surface.700})",
                    "color": "light-dark({surface.950}, {surface.0})"
                  },
                  "plain": {
                    "hoverBackground": "light-dark({surface.50}, {surface.800})",
                    "activeBackground": "light-dark({surface.100}, {surface.700})",
                    "color": "light-dark({surface.700}, {surface.0})"
                  }
                },
                "link": {
                  "color": "{primary.color}",
                  "hoverColor": "{primary.color}",
                  "activeColor": "{primary.color}"
                }
              },
              "card": {
                "root": {
                  "background": "{content.background}",
                  "borderRadius": "{border.radius.xl}",
                  "color": "{content.color}",
                  "shadow": "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1)"
                },
                "body": {
                  "padding": "1.125rem",
                  "gap": "0.5rem"
                },
                "caption": {
                  "gap": "0.5rem"
                },
                "title": {
                  "fontSize": "1.125rem",
                  "fontWeight": "500"
                },
                "subtitle": {
                  "color": "{text.muted.color}",
                  "fontSize": "1rem",
                  "fontWeight": "{typography.font.weight}"
                }
              },
              "carousel": {
                "root": {
                  "transitionDuration": "{transition.duration}"
                },
                "content": {
                  "gap": "0.25rem"
                },
                "indicatorList": {
                  "padding": "1rem",
                  "gap": "0.5rem"
                },
                "indicator": {
                  "width": "1.75rem",
                  "height": "0.5rem",
                  "borderRadius": "{content.border.radius}",
                  "background": "light-dark({surface.200}, {surface.700})",
                  "hoverBackground": "light-dark({surface.300}, {surface.600})",
                  "activeBackground": "{primary.color}",
                  "focusRing": {
                    "width": "{focus.ring.width}",
                    "style": "{focus.ring.style}",
                    "color": "{focus.ring.color}",
                    "offset": "{focus.ring.offset}",
                    "shadow": "{focus.ring.shadow}"
                  }
                }
              },
              "cascadeselect": {
                "root": {
                  "background": "{form.field.background}",
                  "disabledBackground": "{form.field.disabled.background}",
                  "filledBackground": "{form.field.filled.background}",
                  "filledHoverBackground": "{form.field.filled.hover.background}",
                  "filledFocusBackground": "{form.field.filled.focus.background}",
                  "borderColor": "{form.field.border.color}",
                  "hoverBorderColor": "{form.field.hover.border.color}",
                  "focusBorderColor": "{form.field.focus.border.color}",
                  "invalidBorderColor": "{form.field.invalid.border.color}",
                  "color": "{form.field.color}",
                  "disabledColor": "{form.field.disabled.color}",
                  "placeholderColor": "{form.field.placeholder.color}",
                  "invalidPlaceholderColor": "{form.field.invalid.placeholder.color}",
                  "shadow": "{form.field.shadow}",
                  "paddingX": "{form.field.padding.x}",
                  "paddingY": "{form.field.padding.y}",
                  "borderRadius": "{form.field.border.radius}",
                  "focusRing": {
                    "width": "{form.field.focus.ring.width}",
                    "style": "{form.field.focus.ring.style}",
                    "color": "{form.field.focus.ring.color}",
                    "offset": "{form.field.focus.ring.offset}",
                    "shadow": "{form.field.focus.ring.shadow}"
                  },
                  "transitionDuration": "{form.field.transition.duration}",
                  "sm": {
                    "fontSize": "{form.field.sm.font.size}",
                    "paddingX": "{form.field.sm.padding.x}",
                    "paddingY": "{form.field.sm.padding.y}"
                  },
                  "lg": {
                    "fontSize": "{form.field.lg.font.size}",
                    "paddingX": "{form.field.lg.padding.x}",
                    "paddingY": "{form.field.lg.padding.y}"
                  },
                  "fontWeight": "{form.field.font.weight}",
                  "fontSize": "{form.field.font.size}"
                },
                "dropdown": {
                  "width": "2.25rem",
                  "color": "{form.field.icon.color}"
                },
                "overlay": {
                  "background": "{overlay.select.background}",
                  "borderColor": "{overlay.select.border.color}",
                  "borderRadius": "{overlay.select.border.radius}",
                  "color": "{overlay.select.color}",
                  "shadow": "{overlay.select.shadow}"
                },
                "list": {
                  "padding": "{list.padding}",
                  "gap": "{list.gap}",
                  "mobileIndent": "1rem"
                },
                "option": {
                  "focusBackground": "{list.option.focus.background}",
                  "selectedBackground": "{list.option.selected.background}",
                  "selectedFocusBackground": "{list.option.selected.focus.background}",
                  "color": "{list.option.color}",
                  "focusColor": "{list.option.focus.color}",
                  "selectedColor": "{list.option.selected.color}",
                  "selectedFocusColor": "{list.option.selected.focus.color}",
                  "selectedFontWeight": "{list.option.selected.font.weight}",
                  "padding": "{list.option.padding}",
                  "borderRadius": "{list.option.border.radius}",
                  "icon": {
                    "color": "{list.option.icon.color}",
                    "focusColor": "{list.option.icon.focus.color}",
                    "size": "0.75rem"
                  },
                  "fontWeight": "{list.option.font.weight}",
                  "fontSize": "{list.option.font.size}"
                },
                "clearIcon": {
                  "color": "{form.field.icon.color}"
                }
              },
              "checkbox": {
                "root": {
                  "borderRadius": "{border.radius.sm}",
                  "width": "1.125rem",
                  "height": "1.125rem",
                  "background": "{form.field.background}",
                  "checkedBackground": "{primary.color}",
                  "checkedHoverBackground": "{primary.hover.color}",
                  "disabledBackground": "{form.field.disabled.background}",
                  "filledBackground": "{form.field.filled.background}",
                  "borderColor": "{form.field.border.color}",
                  "hoverBorderColor": "{form.field.hover.border.color}",
                  "focusBorderColor": "{form.field.border.color}",
                  "checkedBorderColor": "{primary.color}",
                  "checkedHoverBorderColor": "{primary.hover.color}",
                  "checkedFocusBorderColor": "{primary.color}",
                  "checkedDisabledBorderColor": "{form.field.border.color}",
                  "invalidBorderColor": "{form.field.invalid.border.color}",
                  "shadow": "{form.field.shadow}",
                  "focusRing": {
                    "width": "{focus.ring.width}",
                    "style": "{focus.ring.style}",
                    "color": "{focus.ring.color}",
                    "offset": "{focus.ring.offset}",
                    "shadow": "{focus.ring.shadow}"
                  },
                  "transitionDuration": "{form.field.transition.duration}",
                  "sm": {
                    "width": "0.875rem",
                    "height": "0.875rem"
                  },
                  "lg": {
                    "width": "1.25rem",
                    "height": "1.25rem"
                  }
                },
                "icon": {
                  "size": "0.75rem",
                  "color": "{form.field.color}",
                  "checkedColor": "{primary.contrast.color}",
                  "checkedHoverColor": "{primary.contrast.color}",
                  "disabledColor": "{form.field.disabled.color}",
                  "sm": {
                    "size": "0.625rem"
                  },
                  "lg": {
                    "size": "0.875rem"
                  }
                }
              },
              "chip": {
                "root": {
                  "borderRadius": "1rem",
                  "paddingX": "0.625rem",
                  "paddingY": "0.375rem",
                  "gap": "0.375rem",
                  "transitionDuration": "{transition.duration}",
                  "background": "light-dark({surface.100}, {surface.800})",
                  "focusBackground": "light-dark({surface.200}, {surface.700})",
                  "color": "light-dark({surface.800}, {surface.0})"
                },
                "image": {
                  "width": "1.75rem",
                  "height": "1.75rem"
                },
                "icon": {
                  "size": "0.875rem",
                  "color": "light-dark({surface.800}, {surface.0})"
                },
                "label": {
                  "fontWeight": "{typography.font.weight}",
                  "fontSize": "0.75rem"
                },
                "removeIcon": {
                  "size": "0.875rem",
                  "color": "light-dark({surface.800}, {surface.0})",
                  "focusRing": {
                    "width": "{focus.ring.width}",
                    "style": "{focus.ring.style}",
                    "color": "{focus.ring.color}",
                    "offset": "{focus.ring.offset}",
                    "shadow": "{form.field.focus.ring.shadow}"
                  }
                }
              },
              "colorpicker": {
                "root": {
                  "transitionDuration": "{transition.duration}"
                },
                "preview": {
                  "width": "1.375rem",
                  "height": "1.375rem",
                  "borderRadius": "{form.field.border.radius}",
                  "focusRing": {
                    "width": "{focus.ring.width}",
                    "style": "{focus.ring.style}",
                    "color": "{focus.ring.color}",
                    "offset": "{focus.ring.offset}",
                    "shadow": "{focus.ring.shadow}"
                  }
                },
                "panel": {
                  "shadow": "{overlay.popover.shadow}",
                  "borderRadius": "{overlay.popover.borderRadius}",
                  "background": "light-dark({surface.800}, {surface.900})",
                  "borderColor": "light-dark({surface.900}, {surface.700})"
                },
                "handle": {
                  "color": "{surface.0}"
                }
              },
              "commandmenu": {
                "root": {
                  "background": "{content.background}",
                  "borderColor": "{content.border.color}",
                  "borderRadius": "{content.border.radius}",
                  "height": "25rem"
                },
                "header": {
                  "padding": "0.375rem 1.125rem",
                  "background": "{content.background}",
                  "borderColor": "{content.border.color}"
                },
                "input": {
                  "padding": "0.375rem 0",
                  "fontSize": "1rem",
                  "fontWeight": "{typography.font.weight}",
                  "color": "{form.field.color}",
                  "placeholderColor": "{form.field.placeholder.color}"
                },
                "list": {
                  "padding": "0.375rem"
                },
                "empty": {
                  "padding": "2rem 0",
                  "color": "{content.color}"
                },
                "footer": {
                  "padding": "0.625rem 1.125rem",
                  "background": "{content.background}",
                  "borderColor": "{content.border.color}"
                }
              },
              "compare": {
                "root": {
                  "borderRadius": "{content.border.radius}"
                },
                "handle": {
                  "background": "{content.background}",
                  "size": "1px"
                },
                "indicator": {
                  "size": "1.5rem",
                  "background": "{content.background}",
                  "borderRadius": "{content.border.radius}",
                  "focusRing": {
                    "width": "2px",
                    "style": "solid",
                    "color": "{content.background}",
                    "offset": "2px"
                  },
                  "icon": {
                    "color": "{text.muted.color}",
                    "size": "{icon.size}"
                  }
                }
              },
              "confirmdialog": {
                "icon": {
                  "size": "1.5rem",
                  "color": "{overlay.modal.color}"
                },
                "content": {
                  "gap": "0.875rem"
                },
                "message": {
                  "color": "{content.color}",
                  "fontWeight": "{typography.font.weight}",
                  "fontSize": "{typography.font.size}"
                }
              },
              "confirmpopup": {
                "root": {
                  "background": "{overlay.popover.background}",
                  "borderColor": "{overlay.popover.border.color}",
                  "color": "{overlay.popover.color}",
                  "borderRadius": "{overlay.popover.border.radius}",
                  "shadow": "{overlay.popover.shadow}",
                  "gutter": "10px",
                  "arrowOffset": "1.125rem"
                },
                "content": {
                  "padding": "{overlay.popover.padding}",
                  "gap": "0.5rem"
                },
                "icon": {
                  "size": "1.25rem",
                  "color": "{overlay.popover.color}"
                },
                "message": {
                  "color": "{content.color}",
                  "fontWeight": "{typography.font.weight}",
                  "fontSize": "{typography.font.size}"
                },
                "footer": {
                  "gap": "0.375rem",
                  "padding": "0 {overlay.popover.padding} {overlay.popover.padding} {overlay.popover.padding}"
                }
              },
              "contextmenu": {
                "root": {
                  "background": "{content.background}",
                  "borderColor": "{content.border.color}",
                  "color": "{content.color}",
                  "borderRadius": "{content.border.radius}",
                  "shadow": "{overlay.navigation.shadow}",
                  "transitionDuration": "{navigation.item.transition.duration}"
                },
                "list": {
                  "padding": "{navigation.list.padding}",
                  "gap": "{navigation.list.gap}"
                },
                "item": {
                  "focusBackground": "{navigation.item.focus.background}",
                  "activeBackground": "{navigation.item.active.background}",
                  "color": "{navigation.item.color}",
                  "focusColor": "{navigation.item.focus.color}",
                  "activeColor": "{navigation.item.active.color}",
                  "padding": "{navigation.item.padding}",
                  "borderRadius": "{navigation.item.border.radius}",
                  "gap": "{navigation.item.gap}",
                  "icon": {
                    "color": "{navigation.item.icon.color}",
                    "focusColor": "{navigation.item.icon.focus.color}",
                    "activeColor": "{navigation.item.icon.active.color}",
                    "size": "{navigation.item.icon.size}"
                  },
                  "label": {
                    "fontWeight": "{navigation.item.label.font.weight}",
                    "fontSize": "{navigation.item.label.font.size}"
                  }
                },
                "submenu": {
                  "mobileIndent": "1rem"
                },
                "submenuLabel": {
                  "padding": "{navigation.submenu.label.padding}",
                  "fontWeight": "{navigation.submenu.label.font.weight}",
                  "fontSize": "{navigation.submenu.label.font.size}",
                  "background": "{navigation.submenu.label.background}",
                  "color": "{navigation.submenu.label.color}"
                },
                "submenuIcon": {
                  "size": "{navigation.submenu.icon.size}",
                  "color": "{navigation.submenu.icon.color}",
                  "focusColor": "{navigation.submenu.icon.focus.color}",
                  "activeColor": "{navigation.submenu.icon.active.color}"
                },
                "separator": {
                  "borderColor": "{content.border.color}"
                }
              },
              "datatable": {
                "root": {
                  "transitionDuration": "0s",
                  "borderColor": "light-dark({content.border.color}, {surface.800})"
                },
                "header": {
                  "background": "{content.background}",
                  "borderColor": "{datatable.border.color}",
                  "color": "{content.color}",
                  "borderWidth": "0 0 1px 0",
                  "padding": "0.5rem 0.875rem",
                  "sm": {
                    "padding": "0.125rem 0.375rem"
                  },
                  "lg": {
                    "padding": "0.75rem 1.125rem"
                  }
                },
                "headerCell": {
                  "background": "{content.background}",
                  "hoverBackground": "{content.hover.background}",
                  "selectedBackground": "{content.background}",
                  "borderColor": "{datatable.border.color}",
                  "color": "{content.color}",
                  "hoverColor": "{content.hover.color}",
                  "selectedColor": "{content.color}",
                  "gap": "0.5rem",
                  "padding": "0.5rem 0.875rem",
                  "focusRing": {
                    "width": "{focus.ring.width}",
                    "style": "{focus.ring.style}",
                    "color": "{focus.ring.color}",
                    "offset": "-1px",
                    "shadow": "{focus.ring.shadow}"
                  },
                  "sm": {
                    "padding": "0.125rem 0.375rem"
                  },
                  "lg": {
                    "padding": "0.75rem 1.125rem"
                  }
                },
                "columnTitle": {
                  "fontWeight": "600",
                  "fontSize": "{typography.font.size}"
                },
                "row": {
                  "background": "{content.background}",
                  "hoverBackground": "{content.hover.background}",
                  "selectedBackground": "{highlight.background}",
                  "color": "{content.color}",
                  "hoverColor": "{content.hover.color}",
                  "selectedColor": "{highlight.color}",
                  "stripedBackground": "light-dark({surface.50}, {surface.950})",
                  "focusRing": {
                    "width": "{focus.ring.width}",
                    "style": "{focus.ring.style}",
                    "color": "{focus.ring.color}",
                    "offset": "-1px",
                    "shadow": "{focus.ring.shadow}"
                  }
                },
                "bodyCell": {
                  "borderColor": "{datatable.border.color}",
                  "padding": "0.5rem 0.875rem",
                  "fontWeight": "{typography.font.size}",
                  "fontSize": "{typography.font.size}",
                  "selectedBorderColor": "light-dark({primary.100}, {primary.900})",
                  "sm": {
                    "padding": "0.125rem 0.375rem"
                  },
                  "lg": {
                    "padding": "0.75rem 1.125rem"
                  }
                },
                "footerCell": {
                  "background": "{content.background}",
                  "borderColor": "{datatable.border.color}",
                  "color": "{content.color}",
                  "padding": "0.5rem 0.875rem",
                  "sm": {
                    "padding": "0.125rem 0.375rem"
                  },
                  "lg": {
                    "padding": "0.75rem 1.125rem"
                  }
                },
                "columnFooter": {
                  "fontWeight": "600",
                  "fontSize": "{typography.font.size}"
                },
                "footer": {
                  "background": "{content.background}",
                  "borderColor": "{datatable.border.color}",
                  "color": "{content.color}",
                  "borderWidth": "0 0 1px 0",
                  "padding": "0.5rem 0.875rem",
                  "sm": {
                    "padding": "0.125rem 0.375rem"
                  },
                  "lg": {
                    "padding": "0.75rem 1.125rem"
                  }
                },
                "dropPoint": {
                  "color": "{primary.color}"
                },
                "columnResizer": {
                  "width": "0.5rem"
                },
                "resizeIndicator": {
                  "width": "1px",
                  "color": "{primary.color}"
                },
                "sortIcon": {
                  "color": "{text.muted.color}",
                  "hoverColor": "{text.hover.muted.color}",
                  "size": "0.75rem"
                },
                "loadingIcon": {
                  "size": "1.75rem"
                },
                "rowToggleButton": {
                  "hoverBackground": "{content.hover.background}",
                  "selectedHoverBackground": "{content.background}",
                  "color": "{text.muted.color}",
                  "hoverColor": "{text.color}",
                  "selectedHoverColor": "{primary.color}",
                  "size": "1.5rem",
                  "borderRadius": "50%",
                  "focusRing": {
                    "width": "{focus.ring.width}",
                    "style": "{focus.ring.style}",
                    "color": "{focus.ring.color}",
                    "offset": "{focus.ring.offset}",
                    "shadow": "{focus.ring.shadow}"
                  }
                },
                "filter": {
                  "inlineGap": "0.5rem",
                  "overlaySelect": {
                    "background": "{overlay.select.background}",
                    "borderColor": "{overlay.select.border.color}",
                    "borderRadius": "{overlay.select.border.radius}",
                    "color": "{overlay.select.color}",
                    "shadow": "{overlay.select.shadow}"
                  },
                  "overlayPopover": {
                    "background": "{overlay.popover.background}",
                    "borderColor": "{overlay.popover.border.color}",
                    "borderRadius": "{overlay.popover.border.radius}",
                    "color": "{overlay.popover.color}",
                    "shadow": "{overlay.popover.shadow}",
                    "padding": "{overlay.popover.padding}",
                    "gap": "0.5rem"
                  },
                  "rule": {
                    "borderColor": "{content.border.color}"
                  },
                  "constraintList": {
                    "padding": "{list.padding}",
                    "gap": "{list.gap}"
                  },
                  "constraint": {
                    "focusBackground": "{list.option.focus.background}",
                    "selectedBackground": "{list.option.selected.background}",
                    "selectedFocusBackground": "{list.option.selected.focus.background}",
                    "color": "{list.option.color}",
                    "focusColor": "{list.option.focus.color}",
                    "selectedColor": "{list.option.selected.color}",
                    "selectedFocusColor": "{list.option.selected.focus.color}",
                    "separator": {
                      "borderColor": "{content.border.color}"
                    },
                    "padding": "{list.option.padding}",
                    "borderRadius": "{list.option.border.radius}"
                  }
                },
                "paginatorTop": {
                  "borderColor": "{datatable.border.color}",
                  "borderWidth": "0 0 1px 0"
                },
                "paginatorBottom": {
                  "borderColor": "{datatable.border.color}",
                  "borderWidth": "0 0 1px 0"
                },
                "css": "\n    .p-datatable-mask.p-overlay-mask {\n        --px-mask-background: light-dark(rgba(255,255,255,0.5),rgba(0,0,0,0.3));\n    }\n"
              },
              "dataview": {
                "root": {
                  "borderColor": "transparent",
                  "borderWidth": "0",
                  "borderRadius": "0",
                  "padding": "0"
                },
                "header": {
                  "background": "{content.background}",
                  "color": "{content.color}",
                  "borderColor": "{content.border.color}",
                  "borderWidth": "0 0 1px 0",
                  "padding": "0.625rem 0.875rem",
                  "borderRadius": "0"
                },
                "content": {
                  "background": "{content.background}",
                  "color": "{content.color}",
                  "borderColor": "transparent",
                  "borderWidth": "0",
                  "padding": "0",
                  "borderRadius": "0"
                },
                "footer": {
                  "background": "{content.background}",
                  "color": "{content.color}",
                  "borderColor": "{content.border.color}",
                  "borderWidth": "1px 0 0 0",
                  "padding": "0.625rem 0.875rem",
                  "borderRadius": "0"
                },
                "paginatorTop": {
                  "borderColor": "{content.border.color}",
                  "borderWidth": "0 0 1px 0"
                },
                "paginatorBottom": {
                  "borderColor": "{content.border.color}",
                  "borderWidth": "1px 0 0 0"
                }
              },
              "datepicker": {
                "root": {
                  "transitionDuration": "{transition.duration}"
                },
                "panel": {
                  "background": "{content.background}",
                  "borderColor": "{content.border.color}",
                  "color": "{content.color}",
                  "borderRadius": "{content.border.radius}",
                  "shadow": "{overlay.popover.shadow}",
                  "padding": "{overlay.popover.padding}"
                },
                "header": {
                  "background": "{content.background}",
                  "borderColor": "{content.border.color}",
                  "color": "{content.color}",
                  "padding": "0 0 0.5rem 0"
                },
                "title": {
                  "gap": "0.5rem",
                  "fontWeight": "500",
                  "fontSize": "{typography.font.size}"
                },
                "dropdown": {
                  "width": "2.25rem",
                  "sm": {
                    "width": "1.75rem"
                  },
                  "lg": {
                    "width": "2.625rem"
                  },
                  "background": "light-dark({surface.100}, {surface.800})",
                  "hoverBackground": "light-dark({surface.200}, {surface.700})",
                  "activeBackground": "light-dark({surface.300}, {surface.600})",
                  "borderColor": "{form.field.border.color}",
                  "hoverBorderColor": "{form.field.border.color}",
                  "activeBorderColor": "{form.field.border.color}",
                  "color": "light-dark({surface.600}, {surface.300})",
                  "hoverColor": "light-dark({surface.700}, {surface.200})",
                  "activeColor": "light-dark({surface.800}, {surface.100})",
                  "borderRadius": "{form.field.border.radius}",
                  "focusRing": {
                    "width": "{focus.ring.width}",
                    "style": "{focus.ring.style}",
                    "color": "{focus.ring.color}",
                    "offset": "{focus.ring.offset}",
                    "shadow": "{focus.ring.shadow}"
                  }
                },
                "inputIcon": {
                  "color": "{form.field.icon.color}"
                },
                "selectMonth": {
                  "hoverBackground": "{content.hover.background}",
                  "color": "{content.color}",
                  "hoverColor": "{content.hover.color}",
                  "padding": "0.25rem 0.5rem",
                  "borderRadius": "{content.border.radius}",
                  "fontWeight": "500",
                  "fontSize": "{typography.font.size}"
                },
                "selectYear": {
                  "hoverBackground": "{content.hover.background}",
                  "color": "{content.color}",
                  "hoverColor": "{content.hover.color}",
                  "padding": "0.25rem 0.5rem",
                  "borderRadius": "{content.border.radius}",
                  "fontWeight": "500",
                  "fontSize": "{typography.font.size}"
                },
                "group": {
                  "borderColor": "{content.border.color}",
                  "gap": "{overlay.popover.padding}"
                },
                "dayView": {
                  "margin": "0.5rem 0 0 0"
                },
                "weekDay": {
                  "padding": "0.25rem",
                  "fontWeight": "500",
                  "fontSize": "{typography.font.size}",
                  "color": "{content.color}"
                },
                "date": {
                  "fontWeight": "{typography.font.weight}",
                  "fontSize": "{typography.font.size}",
                  "hoverBackground": "{content.hover.background}",
                  "selectedBackground": "{primary.color}",
                  "rangeSelectedBackground": "{highlight.background}",
                  "color": "{content.color}",
                  "hoverColor": "{content.hover.color}",
                  "selectedColor": "{primary.contrast.color}",
                  "rangeSelectedColor": "{highlight.color}",
                  "width": "1.75rem",
                  "height": "1.75rem",
                  "borderRadius": "50%",
                  "padding": "0.25rem",
                  "focusRing": {
                    "width": "{focus.ring.width}",
                    "style": "{focus.ring.style}",
                    "color": "{focus.ring.color}",
                    "offset": "{focus.ring.offset}",
                    "shadow": "{focus.ring.shadow}"
                  }
                },
                "monthView": {
                  "margin": "0.5rem 0 0 0"
                },
                "month": {
                  "padding": "0.25rem",
                  "borderRadius": "{content.border.radius}"
                },
                "yearView": {
                  "margin": "0.5rem 0 0 0"
                },
                "year": {
                  "padding": "0.25rem",
                  "borderRadius": "{content.border.radius}"
                },
                "buttonbar": {
                  "padding": "0.5rem 0 0 0",
                  "borderColor": "{content.border.color}"
                },
                "timePicker": {
                  "padding": "0.5rem 0 0 0",
                  "borderColor": "{content.border.color}",
                  "gap": "0.5rem",
                  "buttonGap": "0.125rem",
                  "color": "{content.color}",
                  "fontWeight": "{typography.font.weight}",
                  "fontSize": "{typography.font.size}"
                },
                "today": {
                  "background": "light-dark({surface.200}, {surface.700})",
                  "color": "light-dark({surface.900}, {surface.0})"
                }
              },
              "dialog": {
                "root": {
                  "background": "{overlay.modal.background}",
                  "borderColor": "{overlay.modal.border.color}",
                  "color": "{overlay.modal.color}",
                  "borderRadius": "{overlay.modal.border.radius}",
                  "shadow": "{overlay.modal.shadow}"
                },
                "header": {
                  "padding": "{overlay.modal.padding}",
                  "gap": "0.5rem"
                },
                "title": {
                  "fontSize": "1.125rem",
                  "fontWeight": "600"
                },
                "content": {
                  "padding": "0 {overlay.modal.padding} {overlay.modal.padding} {overlay.modal.padding}"
                },
                "footer": {
                  "padding": "0 {overlay.modal.padding} {overlay.modal.padding} {overlay.modal.padding}",
                  "gap": "0.375rem"
                }
              },
              "divider": {
                "root": {
                  "borderColor": "{content.border.color}"
                },
                "content": {
                  "background": "{content.background}",
                  "color": "{text.color}"
                },
                "horizontal": {
                  "margin": "0.875rem 0",
                  "padding": "0 0.875rem",
                  "content": {
                    "padding": "0 0.375rem"
                  }
                },
                "vertical": {
                  "margin": "0 0.875rem",
                  "padding": "0.375rem 0",
                  "content": {
                    "padding": "0.375rem 0"
                  }
                }
              },
              "dock": {
                "root": {
                  "background": "rgba(255, 255, 255, 0.1)",
                  "borderColor": "rgba(255, 255, 255, 0.2)",
                  "padding": "0.5rem",
                  "borderRadius": "{border.radius.xl}"
                },
                "item": {
                  "borderRadius": "{content.border.radius}",
                  "padding": "0.5rem",
                  "size": "2.625rem",
                  "focusRing": {
                    "width": "{focus.ring.width}",
                    "style": "{focus.ring.style}",
                    "color": "{focus.ring.color}",
                    "offset": "{focus.ring.offset}",
                    "shadow": "{focus.ring.shadow}"
                  }
                }
              },
              "drawer": {
                "root": {
                  "background": "{overlay.modal.background}",
                  "borderColor": "{overlay.modal.border.color}",
                  "color": "{overlay.modal.color}",
                  "shadow": "{overlay.modal.shadow}"
                },
                "header": {
                  "padding": "{overlay.modal.padding}"
                },
                "title": {
                  "fontSize": "1.125rem",
                  "fontWeight": "600"
                },
                "content": {
                  "padding": "0 {overlay.modal.padding} {overlay.modal.padding} {overlay.modal.padding}"
                },
                "footer": {
                  "padding": "{overlay.modal.padding}"
                }
              },
              "editor": {
                "toolbar": {
                  "background": "{content.background}",
                  "borderColor": "{content.border.color}",
                  "borderRadius": "{content.border.radius}"
                },
                "toolbarItem": {
                  "color": "{text.muted.color}",
                  "hoverColor": "{text.color}",
                  "activeColor": "{primary.color}"
                },
                "overlay": {
                  "background": "{overlay.select.background}",
                  "borderColor": "{overlay.select.border.color}",
                  "borderRadius": "{overlay.select.border.radius}",
                  "color": "{overlay.select.color}",
                  "shadow": "{overlay.select.shadow}",
                  "padding": "{list.padding}"
                },
                "overlayOption": {
                  "focusBackground": "{list.option.focus.background}",
                  "color": "{list.option.color}",
                  "focusColor": "{list.option.focus.color}",
                  "padding": "{list.option.padding}",
                  "borderRadius": "{list.option.border.radius}"
                },
                "content": {
                  "background": "{content.background}",
                  "borderColor": "{content.border.color}",
                  "color": "{content.color}",
                  "borderRadius": "{content.border.radius}"
                }
              },
              "fieldset": {
                "root": {
                  "background": "{content.background}",
                  "borderColor": "{content.border.color}",
                  "borderRadius": "{content.border.radius}",
                  "color": "{content.color}",
                  "padding": "0 1rem 1rem 1rem",
                  "transitionDuration": "{transition.duration}"
                },
                "legend": {
                  "background": "{content.background}",
                  "hoverBackground": "{content.hover.background}",
                  "color": "{content.color}",
                  "hoverColor": "{content.hover.color}",
                  "borderRadius": "{content.border.radius}",
                  "borderWidth": "1px",
                  "borderColor": "transparent",
                  "padding": ".375rem 0.625rem",
                  "gap": "0.5rem",
                  "fontWeight": "600",
                  "fontSize": "{typography.font.size}",
                  "focusRing": {
                    "width": "{focus.ring.width}",
                    "style": "{focus.ring.style}",
                    "color": "{focus.ring.color}",
                    "offset": "{focus.ring.offset}",
                    "shadow": "{focus.ring.shadow}"
                  }
                },
                "toggleIcon": {
                  "color": "{text.muted.color}",
                  "hoverColor": "{text.hover.muted.color}"
                },
                "content": {
                  "padding": "0"
                }
              },
              "fileupload": {
                "root": {
                  "background": "{content.background}",
                  "borderColor": "{content.border.color}",
                  "color": "{content.color}",
                  "borderRadius": "{content.border.radius}",
                  "transitionDuration": "{transition.duration}"
                },
                "header": {
                  "background": "transparent",
                  "color": "{text.color}",
                  "padding": "1rem",
                  "borderColor": "unset",
                  "borderWidth": "0",
                  "borderRadius": "0",
                  "gap": "0.5rem"
                },
                "content": {
                  "highlightBorderColor": "{primary.color}",
                  "padding": "0 1rem 1rem 1rem",
                  "gap": "0.875rem"
                },
                "file": {
                  "padding": "0.875rem",
                  "gap": "0.875rem",
                  "borderColor": "{content.border.color}",
                  "info": {
                    "gap": "0.125rem"
                  }
                },
                "fileName": {
                  "color": "{text.color}",
                  "fontWeight": "{typography.font.weight}",
                  "fontSize": "{typography.font.size}"
                },
                "fileSize": {
                  "color": "{text.muted.color}",
                  "fontWeight": "{typography.font.weight}",
                  "fontSize": "0.75rem"
                },
                "fileList": {
                  "gap": "0.5rem"
                },
                "progressbar": {
                  "height": "0.25rem"
                },
                "basic": {
                  "gap": "0.5rem"
                }
              },
              "floatlabel": {
                "root": {
                  "color": "{form.field.float.label.color}",
                  "focusColor": "{form.field.float.label.focus.color}",
                  "activeColor": "{form.field.float.label.active.color}",
                  "invalidColor": "{form.field.float.label.invalid.color}",
                  "transitionDuration": "0.2s",
                  "positionX": "{form.field.padding.x}",
                  "positionY": "{form.field.padding.y}",
                  "fontWeight": "{form.field.font.weight}",
                  "fontSize": "{form.field.font.size}",
                  "active": {
                    "fontSize": "0.625rem",
                    "fontWeight": "400"
                  }
                },
                "over": {
                  "active": {
                    "top": "-1.125rem"
                  }
                },
                "in": {
                  "input": {
                    "paddingTop": "1.125rem",
                    "paddingBottom": "{form.field.padding.y}"
                  },
                  "active": {
                    "top": "{form.field.padding.y}"
                  }
                },
                "on": {
                  "borderRadius": "{border.radius.xs}",
                  "active": {
                    "background": "{form.field.background}",
                    "padding": "0 0.125rem"
                  }
                }
              },
              "galleria": {
                "root": {
                  "borderWidth": "1px",
                  "borderColor": "{content.border.color}",
                  "borderRadius": "{content.border.radius}",
                  "transitionDuration": "{transition.duration}"
                },
                "navButton": {
                  "background": "rgba(255, 255, 255, 0.1)",
                  "hoverBackground": "rgba(255, 255, 255, 0.2)",
                  "color": "{surface.100}",
                  "hoverColor": "{surface.0}",
                  "size": "2.625rem",
                  "gutter": "0.5rem",
                  "prev": {
                    "borderRadius": "50%"
                  },
                  "next": {
                    "borderRadius": "50%"
                  },
                  "focusRing": {
                    "width": "{focus.ring.width}",
                    "style": "{focus.ring.style}",
                    "color": "{focus.ring.color}",
                    "offset": "{focus.ring.offset}",
                    "shadow": "{focus.ring.shadow}"
                  }
                },
                "navIcon": {
                  "size": "1.25rem"
                },
                "thumbnailsContent": {
                  "background": "{content.background}",
                  "padding": "0.875rem 0.25rem"
                },
                "thumbnailNavButton": {
                  "size": "1.75rem",
                  "borderRadius": "{content.border.radius}",
                  "gutter": "0.5rem",
                  "hoverBackground": "light-dark({surface.100}, {surface.700})",
                  "color": "light-dark({surface.600}, {surface.400})",
                  "hoverColor": "light-dark({surface.700}, {surface.0})",
                  "focusRing": {
                    "width": "{focus.ring.width}",
                    "style": "{focus.ring.style}",
                    "color": "{focus.ring.color}",
                    "offset": "{focus.ring.offset}",
                    "shadow": "{focus.ring.shadow}"
                  }
                },
                "thumbnailNavButtonIcon": {
                  "size": "0.875rem"
                },
                "caption": {
                  "background": "rgba(0, 0, 0, 0.5)",
                  "color": "{surface.100}",
                  "padding": "0.875rem"
                },
                "indicatorList": {
                  "gap": "0.5rem",
                  "padding": "0.875rem"
                },
                "indicatorButton": {
                  "width": "0.875rem",
                  "height": "0.875rem",
                  "background": "light-dark({surface.200}, {surface.700})",
                  "hoverBackground": "light-dark({surface.300}, {surface.600})",
                  "activeBackground": "{primary.color}",
                  "borderRadius": "50%",
                  "focusRing": {
                    "width": "{focus.ring.width}",
                    "style": "{focus.ring.style}",
                    "color": "{focus.ring.color}",
                    "offset": "{focus.ring.offset}",
                    "shadow": "{focus.ring.shadow}"
                  }
                },
                "insetIndicatorList": {
                  "background": "rgba(0, 0, 0, 0.5)"
                },
                "insetIndicatorButton": {
                  "background": "rgba(255, 255, 255, 0.4)",
                  "hoverBackground": "rgba(255, 255, 255, 0.6)",
                  "activeBackground": "rgba(255, 255, 255, 0.9)"
                },
                "closeButton": {
                  "size": "2.625rem",
                  "gutter": "0.5rem",
                  "background": "rgba(255, 255, 255, 0.1)",
                  "hoverBackground": "rgba(255, 255, 255, 0.2)",
                  "color": "{surface.50}",
                  "hoverColor": "{surface.0}",
                  "borderRadius": "50%",
                  "focusRing": {
                    "width": "{focus.ring.width}",
                    "style": "{focus.ring.style}",
                    "color": "{focus.ring.color}",
                    "offset": "{focus.ring.offset}",
                    "shadow": "{focus.ring.shadow}"
                  }
                },
                "closeButtonIcon": {
                  "size": "1.25rem"
                }
              },
              "gallery": {
                "backdrop": {
                  "background": "{surface.950}"
                },
                "header": {
                  "padding": "0.75rem 1rem",
                  "background": "{surface.950}"
                },
                "footer": {
                  "padding": "0.25rem 0",
                  "background": "{surface.950}",
                  "borderColor": "{surface.800}"
                },
                "item": {
                  "transitionDuration": "0.3s"
                },
                "action": {
                  "size": "2.25rem",
                  "borderRadius": "50%",
                  "color": "{surface.400}",
                  "hoverBackground": "{surface.800}",
                  "hoverColor": "{surface.0}",
                  "disabledOpacity": "{disabled.opacity}",
                  "transitionDuration": "{transition.duration}",
                  "icon": {
                    "size": "1rem"
                  }
                },
                "navigation": {
                  "background": "color-mix(in srgb, {surface.800}, transparent 40%)",
                  "size": "2.25rem",
                  "borderRadius": "50%",
                  "color": "{surface.400}",
                  "hoverBackground": "{surface.800}",
                  "hoverColor": "{surface.0}",
                  "offset": "0.5rem",
                  "transitionDuration": "{transition.duration}",
                  "icon": {
                    "size": "1rem"
                  }
                },
                "thumbnail": {
                  "size": "5rem",
                  "padding": "0.25rem",
                  "background": "{surface.800}",
                  "borderRadius": "0.25rem",
                  "borderWidth": "3px",
                  "hoverBorderColor": "{surface.700}",
                  "activeBorderColor": "{primary.color}",
                  "activeScale": "0.85",
                  "transitionDuration": "{transition.duration}"
                },
                "thumbnailContent": {
                  "padding": "0.25rem 0"
                }
              },
              "iconfield": {
                "icon": {
                  "color": "{form.field.icon.color}"
                }
              },
              "iftalabel": {
                "root": {
                  "color": "{form.field.float.label.color}",
                  "focusColor": "{form.field.float.label.focus.color}",
                  "invalidColor": "{form.field.float.label.invalid.color}",
                  "transitionDuration": "0.2s",
                  "positionX": "{form.field.padding.x}",
                  "top": "{form.field.padding.y}",
                  "fontWeight": "{form.field.font.weight}",
                  "fontSize": "0.625rem"
                },
                "input": {
                  "paddingTop": "1.125rem",
                  "paddingBottom": "{form.field.padding.y}"
                }
              },
              "image": {
                "root": {
                  "transitionDuration": "{transition.duration}"
                },
                "preview": {
                  "icon": {
                    "size": "1.25rem"
                  },
                  "mask": {
                    "background": "{mask.background}",
                    "color": "{mask.color}"
                  }
                },
                "toolbar": {
                  "position": {
                    "left": "auto",
                    "right": "1rem",
                    "top": "1rem",
                    "bottom": "auto"
                  },
                  "blur": "8px",
                  "background": "rgba(255,255,255,0.1)",
                  "borderColor": "rgba(255,255,255,0.2)",
                  "borderWidth": "1px",
                  "borderRadius": "30px",
                  "padding": ".5rem",
                  "gap": "0.5rem"
                },
                "action": {
                  "hoverBackground": "rgba(255,255,255,0.1)",
                  "color": "{surface.50}",
                  "hoverColor": "{surface.0}",
                  "size": "2.625rem",
                  "iconSize": "1.25rem",
                  "borderRadius": "50%",
                  "focusRing": {
                    "width": "{focus.ring.width}",
                    "style": "{focus.ring.style}",
                    "color": "{focus.ring.color}",
                    "offset": "{focus.ring.offset}",
                    "shadow": "{focus.ring.shadow}"
                  }
                }
              },
              "imagecompare": {
                "handle": {
                  "size": "15px",
                  "hoverSize": "30px",
                  "background": "rgba(255,255,255,0.3)",
                  "hoverBackground": "rgba(255,255,255,0.3)",
                  "borderColor": "unset",
                  "hoverBorderColor": "unset",
                  "borderWidth": "0",
                  "borderRadius": "50%",
                  "transitionDuration": "{transition.duration}",
                  "focusRing": {
                    "width": "{focus.ring.width}",
                    "style": "{focus.ring.style}",
                    "color": "rgba(255,255,255,0.3)",
                    "offset": "{focus.ring.offset}",
                    "shadow": "{focus.ring.shadow}"
                  }
                }
              },
              "inlinemessage": {
                "root": {
                  "padding": "{form.field.padding.y} {form.field.padding.x}",
                  "borderRadius": "{content.border.radius}",
                  "gap": "0.5rem"
                },
                "text": {
                  "fontWeight": "500"
                },
                "icon": {
                  "size": "1rem"
                },
                "info": {
                  "background": "light-dark(color-mix(in srgb, {blue.50}, transparent 5%), color-mix(in srgb, {blue.500}, transparent 84%))",
                  "borderColor": "light-dark({blue.200}, color-mix(in srgb, {blue.700}, transparent 64%))",
                  "color": "light-dark({blue.600}, {blue.500})",
                  "shadow": "0px 4px 8px 0px color-mix(in srgb, {blue.500}, transparent 96%)"
                },
                "success": {
                  "background": "light-dark(color-mix(in srgb, {green.50}, transparent 5%), color-mix(in srgb, {green.500}, transparent 84%))",
                  "borderColor": "light-dark({green.200}, color-mix(in srgb, {green.700}, transparent 64%))",
                  "color": "light-dark({green.600}, {green.500})",
                  "shadow": "0px 4px 8px 0px color-mix(in srgb, {green.500}, transparent 96%)"
                },
                "warn": {
                  "background": "light-dark(color-mix(in srgb, {yellow.50}, transparent 5%), color-mix(in srgb, {yellow.500}, transparent 84%))",
                  "borderColor": "light-dark({yellow.200}, color-mix(in srgb, {yellow.700}, transparent 64%))",
                  "color": "light-dark({yellow.600}, {yellow.500})",
                  "shadow": "0px 4px 8px 0px color-mix(in srgb, {yellow.500}, transparent 96%)"
                },
                "error": {
                  "background": "light-dark(color-mix(in srgb, {red.50}, transparent 5%), color-mix(in srgb, {red.500}, transparent 84%))",
                  "borderColor": "light-dark({red.200}, color-mix(in srgb, {red.700}, transparent 64%))",
                  "color": "light-dark({red.600}, {red.500})",
                  "shadow": "0px 4px 8px 0px color-mix(in srgb, {red.500}, transparent 96%)"
                },
                "secondary": {
                  "background": "light-dark({surface.100}, {surface.800})",
                  "borderColor": "light-dark({surface.200}, {surface.700})",
                  "color": "light-dark({surface.600}, {surface.300})",
                  "shadow": "0px 4px 8px 0px color-mix(in srgb, {surface.500}, transparent 96%)"
                },
                "contrast": {
                  "background": "light-dark({surface.900}, {surface.0})",
                  "borderColor": "light-dark({surface.950}, {surface.100})",
                  "color": "light-dark({surface.50}, {surface.950})",
                  "shadow": "0px 4px 8px 0px color-mix(in srgb, {surface.950}, transparent 96%)"
                }
              },
              "inplace": {
                "root": {
                  "padding": "{form.field.padding.y} {form.field.padding.x}",
                  "borderRadius": "{content.border.radius}",
                  "focusRing": {
                    "width": "{focus.ring.width}",
                    "style": "{focus.ring.style}",
                    "color": "{focus.ring.color}",
                    "offset": "{focus.ring.offset}",
                    "shadow": "{focus.ring.shadow}"
                  },
                  "transitionDuration": "{transition.duration}"
                },
                "display": {
                  "hoverBackground": "{content.hover.background}",
                  "hoverColor": "{content.hover.color}"
                }
              },
              "inputchips": {
                "root": {
                  "background": "{form.field.background}",
                  "disabledBackground": "{form.field.disabled.background}",
                  "filledBackground": "{form.field.filled.background}",
                  "filledFocusBackground": "{form.field.filled.focus.background}",
                  "borderColor": "{form.field.border.color}",
                  "hoverBorderColor": "{form.field.hover.border.color}",
                  "focusBorderColor": "{form.field.focus.border.color}",
                  "invalidBorderColor": "{form.field.invalid.border.color}",
                  "color": "{form.field.color}",
                  "disabledColor": "{form.field.disabled.color}",
                  "placeholderColor": "{form.field.placeholder.color}",
                  "shadow": "{form.field.shadow}",
                  "paddingX": "{form.field.padding.x}",
                  "paddingY": "{form.field.padding.y}",
                  "borderRadius": "{form.field.border.radius}",
                  "focusRing": {
                    "width": "{form.field.focus.ring.width}",
                    "style": "{form.field.focus.ring.style}",
                    "color": "{form.field.focus.ring.color}",
                    "offset": "{form.field.focus.ring.offset}",
                    "shadow": "{form.field.focus.ring.shadow}"
                  },
                  "transitionDuration": "{form.field.transition.duration}"
                },
                "chip": {
                  "borderRadius": "{border.radius.sm}",
                  "focusBackground": "light-dark({surface.200}, {surface.700})",
                  "color": "light-dark({surface.800}, {surface.0})"
                }
              },
              "inputcolor": {
                "root": {
                  "borderColor": "{content.border.color}"
                },
                "area": {
                  "borderRadius": "{content.border.radius}"
                },
                "slider": {
                  "borderRadius": "{content.border.radius}",
                  "size": "1rem"
                },
                "handle": {
                  "size": "1rem",
                  "borderColor": "#ffffff",
                  "borderWidth": "3px",
                  "shadow": "0px 0.5px 0px 0px rgba(0, 0, 0, 0.08), 0px 1px 1px 0px rgba(0, 0, 0, 0.14)",
                  "transitionDuration": "{transition.duration}",
                  "focusRing": {
                    "borderWidth": "2px",
                    "borderColor": "#ffffff",
                    "outlineWidth": "2px",
                    "outlineColor": "rgba(255, 255, 255, 0.3)",
                    "outlineOffset": "2px"
                  }
                },
                "transparencyGrid": {
                  "color": "{surface.100}",
                  "background": "#ffffff",
                  "tileSize": "0.5rem"
                },
                "swatch": {
                  "size": "2.25rem",
                  "borderRadius": "{content.border.radius}"
                }
              },
              "inputgroup": {
                "addon": {
                  "background": "{form.field.background}",
                  "borderColor": "{form.field.border.color}",
                  "color": "{form.field.icon.color}",
                  "borderRadius": "{form.field.border.radius}",
                  "padding": "0 0.5rem",
                  "minWidth": "2.25rem",
                  "fontWeight": "{form.field.font.weight}",
                  "fontSize": "{form.field.font.size}"
                }
              },
              "inputnumber": {
                "root": {
                  "transitionDuration": "{transition.duration}"
                },
                "button": {
                  "width": "2.25rem",
                  "borderRadius": "{form.field.border.radius}",
                  "verticalPadding": "{form.field.padding.y}",
                  "background": "transparent",
                  "hoverBackground": "light-dark({surface.100}, {surface.800})",
                  "activeBackground": "light-dark({surface.200}, {surface.700})",
                  "borderColor": "{form.field.border.color}",
                  "hoverBorderColor": "{form.field.border.color}",
                  "activeBorderColor": "{form.field.border.color}",
                  "color": "{surface.400}",
                  "hoverColor": "light-dark({surface.500}, {surface.300})",
                  "activeColor": "light-dark({surface.600}, {surface.200})"
                }
              },
              "inputotp": {
                "root": {
                  "gap": "0.5rem"
                },
                "input": {
                  "width": "2.25rem",
                  "sm": {
                    "width": "1.75rem"
                  },
                  "lg": {
                    "width": "2.625rem"
                  }
                }
              },
              "inputtags": {
                "root": {
                  "background": "{form.field.background}",
                  "disabledBackground": "{form.field.disabled.background}",
                  "filledBackground": "{form.field.filled.background}",
                  "filledHoverBackground": "{form.field.filled.hover.background}",
                  "filledFocusBackground": "{form.field.filled.focus.background}",
                  "borderColor": "{form.field.border.color}",
                  "hoverBorderColor": "{form.field.hover.border.color}",
                  "focusBorderColor": "{form.field.focus.border.color}",
                  "invalidBorderColor": "{form.field.invalid.border.color}",
                  "color": "{form.field.color}",
                  "disabledColor": "{form.field.disabled.color}",
                  "shadow": "{form.field.shadow}",
                  "paddingX": "{form.field.padding.x}",
                  "paddingY": "{form.field.padding.y}",
                  "borderRadius": "{form.field.border.radius}",
                  "focusRing": {
                    "width": "{form.field.focus.ring.width}",
                    "style": "{form.field.focus.ring.style}",
                    "color": "{form.field.focus.ring.color}",
                    "offset": "{form.field.focus.ring.offset}",
                    "shadow": "{form.field.focus.ring.shadow}"
                  },
                  "transitionDuration": "{form.field.transition.duration}",
                  "gap": "0.25rem"
                },
                "item": {
                  "borderRadius": "{form.field.border.radius}"
                }
              },
              "inputtext": {
                "root": {
                  "fontSize": "{form.field.font.size}",
                  "fontWeight": "{form.field.font.weight}",
                  "background": "{form.field.background}",
                  "disabledBackground": "{form.field.disabled.background}",
                  "filledBackground": "{form.field.filled.background}",
                  "filledHoverBackground": "{form.field.filled.hover.background}",
                  "filledFocusBackground": "{form.field.filled.focus.background}",
                  "borderColor": "{form.field.border.color}",
                  "hoverBorderColor": "{form.field.hover.border.color}",
                  "focusBorderColor": "{form.field.focus.border.color}",
                  "invalidBorderColor": "{form.field.invalid.border.color}",
                  "color": "{form.field.color}",
                  "disabledColor": "{form.field.disabled.color}",
                  "placeholderColor": "{form.field.placeholder.color}",
                  "invalidPlaceholderColor": "{form.field.invalid.placeholder.color}",
                  "shadow": "{form.field.shadow}",
                  "paddingX": "{form.field.padding.x}",
                  "paddingY": "{form.field.padding.y}",
                  "borderRadius": "{form.field.border.radius}",
                  "focusRing": {
                    "width": "{form.field.focus.ring.width}",
                    "style": "{form.field.focus.ring.style}",
                    "color": "{form.field.focus.ring.color}",
                    "offset": "{form.field.focus.ring.offset}",
                    "shadow": "{form.field.focus.ring.shadow}"
                  },
                  "transitionDuration": "{form.field.transition.duration}",
                  "sm": {
                    "fontSize": "{form.field.sm.font.size}",
                    "paddingX": "{form.field.sm.padding.x}",
                    "paddingY": "{form.field.sm.padding.y}"
                  },
                  "lg": {
                    "fontSize": "{form.field.lg.font.size}",
                    "paddingX": "{form.field.lg.padding.x}",
                    "paddingY": "{form.field.lg.padding.y}"
                  }
                }
              },
              "knob": {
                "root": {
                  "transitionDuration": "{transition.duration}",
                  "focusRing": {
                    "width": "{focus.ring.width}",
                    "style": "{focus.ring.style}",
                    "color": "{focus.ring.color}",
                    "offset": "{focus.ring.offset}",
                    "shadow": "{focus.ring.shadow}"
                  }
                },
                "value": {
                  "background": "{primary.color}"
                },
                "range": {
                  "background": "{content.border.color}"
                },
                "text": {
                  "color": "{text.muted.color}",
                  "fontSize": "1.125rem",
                  "fontWeight": "normal"
                }
              },
              "label": {
                "root": {
                  "gap": "0.375rem",
                  "fontSize": "{typography.font.size}",
                  "fontWeight": "500",
                  "textColor": "{text.color}",
                  "disabledOpacity": "{disabled.opacity}"
                }
              },
              "listbox": {
                "root": {
                  "background": "{form.field.background}",
                  "disabledBackground": "{form.field.disabled.background}",
                  "borderColor": "{form.field.border.color}",
                  "invalidBorderColor": "{form.field.invalid.border.color}",
                  "color": "{form.field.color}",
                  "disabledColor": "{form.field.disabled.color}",
                  "shadow": "{form.field.shadow}",
                  "borderRadius": "{form.field.border.radius}",
                  "transitionDuration": "{form.field.transition.duration}"
                },
                "list": {
                  "padding": "{list.padding}",
                  "gap": "{list.gap}",
                  "header": {
                    "padding": "{list.header.padding}"
                  }
                },
                "option": {
                  "fontWeight": "{list.option.font.weight}",
                  "fontSize": "{list.option.font.size}",
                  "focusBackground": "{list.option.focus.background}",
                  "selectedBackground": "{list.option.selected.background}",
                  "selectedFocusBackground": "{list.option.selected.focus.background}",
                  "color": "{list.option.color}",
                  "focusColor": "{list.option.focus.color}",
                  "selectedColor": "{list.option.selected.color}",
                  "selectedFocusColor": "{list.option.selected.focus.color}",
                  "selectedFontWeight": "{list.option.selected.font.weight}",
                  "padding": "{list.option.padding}",
                  "borderRadius": "{list.option.border.radius}",
                  "stripedBackground": "light-dark({surface.50}, {surface.900})"
                },
                "optionGroup": {
                  "background": "{list.option.group.background}",
                  "color": "{list.option.group.color}",
                  "padding": "{list.option.group.padding}",
                  "fontWeight": "{list.option.group.font.weight}",
                  "fontSize": "{list.option.group.font.size}"
                },
                "checkmark": {
                  "color": "{list.option.color}",
                  "gutterStart": "-0.25rem",
                  "gutterEnd": "0.25rem"
                },
                "emptyMessage": {
                  "padding": "{list.option.padding}"
                }
              },
              "megamenu": {
                "root": {
                  "background": "{content.background}",
                  "borderColor": "{content.border.color}",
                  "borderRadius": "{content.border.radius}",
                  "color": "{content.color}",
                  "gap": "0.5rem",
                  "verticalOrientation": {
                    "padding": "{navigation.list.padding}",
                    "gap": "{navigation.list.gap}"
                  },
                  "horizontalOrientation": {
                    "padding": "0.375rem 0.625rem",
                    "gap": "0.5rem"
                  },
                  "transitionDuration": "{navigation.item.transition.duration}"
                },
                "baseItem": {
                  "borderRadius": "{content.border.radius}",
                  "padding": "{navigation.item.padding}"
                },
                "item": {
                  "focusBackground": "{navigation.item.focus.background}",
                  "activeBackground": "{navigation.item.active.background}",
                  "color": "{navigation.item.color}",
                  "focusColor": "{navigation.item.focus.color}",
                  "activeColor": "{navigation.item.active.color}",
                  "padding": "{navigation.item.padding}",
                  "borderRadius": "{navigation.item.border.radius}",
                  "gap": "{navigation.item.gap}",
                  "icon": {
                    "color": "{navigation.item.icon.color}",
                    "focusColor": "{navigation.item.icon.focus.color}",
                    "activeColor": "{navigation.item.icon.active.color}",
                    "size": "{navigation.item.icon.size}"
                  },
                  "label": {
                    "fontWeight": "{navigation.item.label.font.weight}",
                    "fontSize": "{navigation.item.label.font.size}"
                  }
                },
                "overlay": {
                  "padding": "0",
                  "background": "{content.background}",
                  "borderColor": "{content.border.color}",
                  "borderRadius": "{content.border.radius}",
                  "color": "{content.color}",
                  "shadow": "{overlay.navigation.shadow}",
                  "gap": "0.5rem"
                },
                "submenu": {
                  "padding": "{navigation.list.padding}",
                  "gap": "{navigation.list.gap}"
                },
                "submenuLabel": {
                  "padding": "{navigation.submenu.label.padding}",
                  "fontWeight": "{navigation.submenu.label.font.weight}",
                  "fontSize": "{navigation.submenu.label.font.size}",
                  "background": "{navigation.submenu.label.background}",
                  "color": "{navigation.submenu.label.color}"
                },
                "submenuIcon": {
                  "size": "{navigation.submenu.icon.size}",
                  "color": "{navigation.submenu.icon.color}",
                  "focusColor": "{navigation.submenu.icon.focus.color}",
                  "activeColor": "{navigation.submenu.icon.active.color}"
                },
                "separator": {
                  "borderColor": "{content.border.color}"
                },
                "mobileButton": {
                  "borderRadius": "50%",
                  "size": "1.5rem",
                  "color": "{text.muted.color}",
                  "hoverColor": "{text.hover.muted.color}",
                  "hoverBackground": "{content.hover.background}",
                  "focusRing": {
                    "width": "{focus.ring.width}",
                    "style": "{focus.ring.style}",
                    "color": "{focus.ring.color}",
                    "offset": "{focus.ring.offset}",
                    "shadow": "{focus.ring.shadow}"
                  }
                }
              },
              "menu": {
                "root": {
                  "background": "{content.background}",
                  "borderColor": "{content.border.color}",
                  "color": "{content.color}",
                  "borderRadius": "{content.border.radius}",
                  "shadow": "{overlay.navigation.shadow}",
                  "transitionDuration": "{navigation.item.transition.duration}"
                },
                "list": {
                  "padding": "{navigation.list.padding}",
                  "gap": "{navigation.list.gap}"
                },
                "item": {
                  "focusBackground": "{navigation.item.focus.background}",
                  "color": "{navigation.item.color}",
                  "focusColor": "{navigation.item.focus.color}",
                  "padding": "{navigation.item.padding}",
                  "borderRadius": "{navigation.item.border.radius}",
                  "gap": "{navigation.item.gap}",
                  "icon": {
                    "color": "{navigation.item.icon.color}",
                    "focusColor": "{navigation.item.icon.focus.color}",
                    "size": "{navigation.item.icon.size}"
                  },
                  "label": {
                    "fontWeight": "{navigation.item.label.font.weight}",
                    "fontSize": "{navigation.item.label.font.size}"
                  }
                },
                "submenuLabel": {
                  "padding": "{navigation.submenu.label.padding}",
                  "fontWeight": "{navigation.submenu.label.font.weight}",
                  "fontSize": "{navigation.submenu.label.font.size}",
                  "background": "{navigation.submenu.label.background}",
                  "color": "{navigation.submenu.label.color}"
                },
                "submenuIcon": {
                  "size": "{navigation.submenu.icon.size}",
                  "color": "{navigation.submenu.icon.color}",
                  "focusColor": "{navigation.submenu.icon.focus.color}"
                },
                "separator": {
                  "borderColor": "{content.border.color}"
                }
              },
              "menubar": {
                "root": {
                  "background": "{content.background}",
                  "borderColor": "{content.border.color}",
                  "borderRadius": "{content.border.radius}",
                  "color": "{content.color}",
                  "gap": "0.5rem",
                  "padding": "0.375rem 0.625rem",
                  "transitionDuration": "{navigation.item.transition.duration}"
                },
                "baseItem": {
                  "borderRadius": "{content.border.radius}",
                  "padding": "{navigation.item.padding}"
                },
                "item": {
                  "focusBackground": "{navigation.item.focus.background}",
                  "activeBackground": "{navigation.item.active.background}",
                  "color": "{navigation.item.color}",
                  "focusColor": "{navigation.item.focus.color}",
                  "activeColor": "{navigation.item.active.color}",
                  "padding": "{navigation.item.padding}",
                  "borderRadius": "{navigation.item.border.radius}",
                  "gap": "{navigation.item.gap}",
                  "icon": {
                    "color": "{navigation.item.icon.color}",
                    "focusColor": "{navigation.item.icon.focus.color}",
                    "activeColor": "{navigation.item.icon.active.color}",
                    "size": "{navigation.item.icon.size}"
                  },
                  "label": {
                    "fontWeight": "{navigation.item.label.font.weight}",
                    "fontSize": "{navigation.item.label.font.size}"
                  }
                },
                "submenu": {
                  "padding": "{navigation.list.padding}",
                  "gap": "{navigation.list.gap}",
                  "background": "{content.background}",
                  "borderColor": "{content.border.color}",
                  "borderRadius": "{content.border.radius}",
                  "shadow": "{overlay.navigation.shadow}",
                  "mobileIndent": "0.875rem",
                  "icon": {
                    "size": "{navigation.submenu.icon.size}",
                    "color": "{navigation.submenu.icon.color}",
                    "focusColor": "{navigation.submenu.icon.focus.color}",
                    "activeColor": "{navigation.submenu.icon.active.color}"
                  }
                },
                "separator": {
                  "borderColor": "{content.border.color}"
                },
                "mobileButton": {
                  "borderRadius": "50%",
                  "size": "1.5rem",
                  "color": "{text.muted.color}",
                  "hoverColor": "{text.hover.muted.color}",
                  "hoverBackground": "{content.hover.background}",
                  "focusRing": {
                    "width": "{focus.ring.width}",
                    "style": "{focus.ring.style}",
                    "color": "{focus.ring.color}",
                    "offset": "{focus.ring.offset}",
                    "shadow": "{focus.ring.shadow}"
                  }
                }
              },
              "message": {
                "root": {
                  "borderRadius": "{content.border.radius}",
                  "borderWidth": "1px",
                  "transitionDuration": "{transition.duration}"
                },
                "content": {
                  "padding": "0.375rem 0.625rem",
                  "gap": "0.5rem",
                  "sm": {
                    "padding": "0.25rem 0.5rem"
                  },
                  "lg": {
                    "padding": "0.5rem 0.75rem"
                  }
                },
                "text": {
                  "fontSize": "{typography.font.size}",
                  "fontWeight": "500",
                  "sm": {
                    "fontSize": "0.75rem"
                  },
                  "lg": {
                    "fontSize": "1rem"
                  }
                },
                "icon": {
                  "size": "1rem",
                  "sm": {
                    "size": "0.875rem"
                  },
                  "lg": {
                    "size": "1.125rem"
                  }
                },
                "closeButton": {
                  "width": "1.5rem",
                  "height": "1.5rem",
                  "borderRadius": "50%",
                  "focusRing": {
                    "width": "{focus.ring.width}",
                    "style": "{focus.ring.style}",
                    "offset": "{focus.ring.offset}"
                  }
                },
                "closeIcon": {
                  "size": "0.875rem",
                  "sm": {
                    "size": "0.75rem"
                  },
                  "lg": {
                    "size": "1rem"
                  }
                },
                "outlined": {
                  "root": {
                    "borderWidth": "1px"
                  }
                },
                "simple": {
                  "content": {
                    "padding": "0"
                  }
                },
                "info": {
                  "background": "light-dark(color-mix(in srgb, {blue.50}, transparent 5%), color-mix(in srgb, {blue.500}, transparent 84%))",
                  "borderColor": "light-dark({blue.200}, color-mix(in srgb, {blue.700}, transparent 64%))",
                  "color": "light-dark({blue.600}, {blue.500})",
                  "shadow": "0px 4px 8px 0px color-mix(in srgb, {blue.500}, transparent 96%)",
                  "closeButton": {
                    "hoverBackground": "light-dark({blue.100}, rgba(255, 255, 255, 0.05))",
                    "focusRing": {
                      "color": "light-dark({blue.600}, {blue.500})",
                      "shadow": "none"
                    }
                  },
                  "outlined": {
                    "color": "light-dark({blue.600}, {blue.500})",
                    "borderColor": "light-dark({blue.600}, {blue.500})"
                  },
                  "simple": {
                    "color": "light-dark({blue.600}, {blue.500})"
                  }
                },
                "success": {
                  "background": "light-dark(color-mix(in srgb, {green.50}, transparent 5%), color-mix(in srgb, {green.500}, transparent 84%))",
                  "borderColor": "light-dark({green.200}, color-mix(in srgb, {green.700}, transparent 64%))",
                  "color": "light-dark({green.600}, {green.500})",
                  "shadow": "0px 4px 8px 0px color-mix(in srgb, {green.500}, transparent 96%)",
                  "closeButton": {
                    "hoverBackground": "light-dark({green.100}, rgba(255, 255, 255, 0.05))",
                    "focusRing": {
                      "color": "light-dark({green.600}, {green.500})",
                      "shadow": "none"
                    }
                  },
                  "outlined": {
                    "color": "light-dark({green.600}, {green.500})",
                    "borderColor": "light-dark({green.600}, {green.500})"
                  },
                  "simple": {
                    "color": "light-dark({green.600}, {green.500})"
                  }
                },
                "warn": {
                  "background": "light-dark(color-mix(in srgb, {yellow.50}, transparent 5%), color-mix(in srgb, {yellow.500}, transparent 84%))",
                  "borderColor": "light-dark({yellow.200}, color-mix(in srgb, {yellow.700}, transparent 64%))",
                  "color": "light-dark({yellow.600}, {yellow.500})",
                  "shadow": "0px 4px 8px 0px color-mix(in srgb, {yellow.500}, transparent 96%)",
                  "closeButton": {
                    "hoverBackground": "light-dark({yellow.100}, rgba(255, 255, 255, 0.05))",
                    "focusRing": {
                      "color": "light-dark({yellow.600}, {yellow.500})",
                      "shadow": "none"
                    }
                  },
                  "outlined": {
                    "color": "light-dark({yellow.600}, {yellow.500})",
                    "borderColor": "light-dark({yellow.600}, {yellow.500})"
                  },
                  "simple": {
                    "color": "light-dark({yellow.600}, {yellow.500})"
                  }
                },
                "error": {
                  "background": "light-dark(color-mix(in srgb, {red.50}, transparent 5%), color-mix(in srgb, {red.500}, transparent 84%))",
                  "borderColor": "light-dark({red.200}, color-mix(in srgb, {red.700}, transparent 64%))",
                  "color": "light-dark({red.600}, {red.500})",
                  "shadow": "0px 4px 8px 0px color-mix(in srgb, {red.500}, transparent 96%)",
                  "closeButton": {
                    "hoverBackground": "light-dark({red.100}, rgba(255, 255, 255, 0.05))",
                    "focusRing": {
                      "color": "light-dark({red.600}, {red.500})",
                      "shadow": "none"
                    }
                  },
                  "outlined": {
                    "color": "light-dark({red.600}, {red.500})",
                    "borderColor": "light-dark({red.600}, {red.500})"
                  },
                  "simple": {
                    "color": "light-dark({red.600}, {red.500})"
                  }
                },
                "secondary": {
                  "background": "light-dark({surface.100}, {surface.800})",
                  "borderColor": "light-dark({surface.200}, {surface.700})",
                  "color": "light-dark({surface.600}, {surface.300})",
                  "shadow": "0px 4px 8px 0px color-mix(in srgb, {surface.500}, transparent 96%)",
                  "closeButton": {
                    "hoverBackground": "light-dark({surface.200}, {surface.700})",
                    "focusRing": {
                      "color": "light-dark({surface.600}, {surface.300})",
                      "shadow": "none"
                    }
                  },
                  "outlined": {
                    "color": "light-dark({surface.500}, {surface.400})",
                    "borderColor": "light-dark({surface.500}, {surface.400})"
                  },
                  "simple": {
                    "color": "light-dark({surface.500}, {surface.400})"
                  }
                },
                "contrast": {
                  "background": "light-dark({surface.900}, {surface.0})",
                  "borderColor": "light-dark({surface.950}, {surface.100})",
                  "color": "light-dark({surface.50}, {surface.950})",
                  "shadow": "0px 4px 8px 0px color-mix(in srgb, {surface.950}, transparent 96%)",
                  "closeButton": {
                    "hoverBackground": "light-dark({surface.800}, {surface.100})",
                    "focusRing": {
                      "color": "light-dark({surface.50}, {surface.950})",
                      "shadow": "none"
                    }
                  },
                  "outlined": {
                    "color": "light-dark({surface.950}, {surface.0})",
                    "borderColor": "light-dark({surface.950}, {surface.0})"
                  },
                  "simple": {
                    "color": "light-dark({surface.950}, {surface.0})"
                  }
                }
              },
              "metergroup": {
                "root": {
                  "borderRadius": "{content.border.radius}",
                  "gap": "0.875rem"
                },
                "meters": {
                  "background": "{content.border.color}",
                  "size": "0.375rem"
                },
                "label": {
                  "gap": "0.375rem"
                },
                "labelMarker": {
                  "size": "0.375rem"
                },
                "labelText": {
                  "fontWeight": "{typography.font.weight}",
                  "fontSize": "{typography.font.size}"
                },
                "labelIcon": {
                  "size": "0.875rem"
                },
                "labelList": {
                  "verticalGap": "0.375rem",
                  "horizontalGap": "0.875rem"
                }
              },
              "multiselect": {
                "root": {
                  "fontSize": "{form.field.font.size}",
                  "fontWeight": "{form.field.font.weight}",
                  "background": "{form.field.background}",
                  "disabledBackground": "{form.field.disabled.background}",
                  "filledBackground": "{form.field.filled.background}",
                  "filledHoverBackground": "{form.field.filled.hover.background}",
                  "filledFocusBackground": "{form.field.filled.focus.background}",
                  "borderColor": "{form.field.border.color}",
                  "hoverBorderColor": "{form.field.hover.border.color}",
                  "focusBorderColor": "{form.field.focus.border.color}",
                  "invalidBorderColor": "{form.field.invalid.border.color}",
                  "color": "{form.field.color}",
                  "disabledColor": "{form.field.disabled.color}",
                  "placeholderColor": "{form.field.placeholder.color}",
                  "invalidPlaceholderColor": "{form.field.invalid.placeholder.color}",
                  "shadow": "{form.field.shadow}",
                  "paddingX": "{form.field.padding.x}",
                  "paddingY": "{form.field.padding.y}",
                  "borderRadius": "{form.field.border.radius}",
                  "focusRing": {
                    "width": "{form.field.focus.ring.width}",
                    "style": "{form.field.focus.ring.style}",
                    "color": "{form.field.focus.ring.color}",
                    "offset": "{form.field.focus.ring.offset}",
                    "shadow": "{form.field.focus.ring.shadow}"
                  },
                  "transitionDuration": "{form.field.transition.duration}",
                  "sm": {
                    "fontSize": "{form.field.sm.font.size}",
                    "paddingX": "{form.field.sm.padding.x}",
                    "paddingY": "{form.field.sm.padding.y}"
                  },
                  "lg": {
                    "fontSize": "{form.field.lg.font.size}",
                    "paddingX": "{form.field.lg.padding.x}",
                    "paddingY": "{form.field.lg.padding.y}"
                  }
                },
                "dropdown": {
                  "width": "2.25rem",
                  "color": "{form.field.icon.color}"
                },
                "overlay": {
                  "background": "{overlay.select.background}",
                  "borderColor": "{overlay.select.border.color}",
                  "borderRadius": "{overlay.select.border.radius}",
                  "color": "{overlay.select.color}",
                  "shadow": "{overlay.select.shadow}"
                },
                "list": {
                  "padding": "{list.padding}",
                  "gap": "{list.gap}",
                  "header": {
                    "padding": "0.5rem 0.5rem 0.125rem 0.875rem"
                  }
                },
                "option": {
                  "fontSize": "{list.option.font.size}",
                  "fontWeight": "{list.option.font.weight}",
                  "focusBackground": "{list.option.focus.background}",
                  "selectedBackground": "transparent",
                  "selectedFocusBackground": "transparent",
                  "color": "{list.option.color}",
                  "focusColor": "{list.option.color}",
                  "selectedColor": "{list.option.color}",
                  "selectedFocusColor": "{list.option.color}",
                  "selectedFontWeight": "{list.option.selected.font.weight}",
                  "padding": "{list.option.padding}",
                  "borderRadius": "{list.option.border.radius}",
                  "gap": "0.5rem"
                },
                "optionGroup": {
                  "background": "{list.option.group.background}",
                  "color": "{list.option.group.color}",
                  "fontWeight": "{list.option.group.font.weight}",
                  "fontSize": "{list.option.group.font.size}",
                  "padding": "{list.option.group.padding}"
                },
                "chip": {
                  "borderRadius": "{border.radius.sm}"
                },
                "clearIcon": {
                  "color": "{form.field.icon.color}"
                },
                "emptyMessage": {
                  "padding": "{list.option.padding}"
                }
              },
              "navigationmenu": {
                "root": {
                  "padding": "0.375rem 0.625rem",
                  "gap": "0.25rem"
                },
                "baseItem": {
                  "padding": "{navigation.item.padding}",
                  "borderRadius": "{content.border.radius}",
                  "gap": "{navigation.item.gap}",
                  "fontSize": "{navigation.item.label.font.size}",
                  "fontWeight": "500",
                  "color": "{navigation.item.color}",
                  "focusColor": "{navigation.item.focus.color}",
                  "focusBackground": "{navigation.item.focus.background}",
                  "activeColor": "{navigation.item.active.color}",
                  "activeBackground": "{navigation.item.active.background}",
                  "transitionDuration": "{navigation.item.transition.duration}"
                }
              },
              "orderlist": {
                "root": {
                  "gap": "1rem"
                },
                "controls": {
                  "gap": "0.5rem"
                }
              },
              "organizationchart": {
                "root": {
                  "gutter": "0.625rem",
                  "transitionDuration": "{transition.duration}"
                },
                "node": {
                  "background": "{content.background}",
                  "hoverBackground": "{content.hover.background}",
                  "selectedBackground": "{highlight.background}",
                  "borderColor": "{content.border.color}",
                  "color": "{content.color}",
                  "selectedColor": "{highlight.color}",
                  "hoverColor": "{content.hover.color}",
                  "padding": "0.625rem 0.875rem",
                  "toggleablePadding": "0.625rem 0.875rem 1.125rem 0.875rem",
                  "borderRadius": "{content.border.radius}",
                  "fontSize": "{typography.font.size}",
                  "fontWeight": "{typography.font.weight}",
                  "focusRing": {
                    "width": "{focus.ring.width}",
                    "style": "{focus.ring.style}",
                    "color": "{focus.ring.color}",
                    "offset": "{focus.ring.offset}",
                    "shadow": "{focus.ring.shadow}"
                  }
                },
                "nodeToggleButton": {
                  "background": "{content.background}",
                  "hoverBackground": "{content.hover.background}",
                  "borderColor": "{content.border.color}",
                  "color": "{text.muted.color}",
                  "hoverColor": "{text.color}",
                  "size": "1.25rem",
                  "borderRadius": "50%",
                  "focusRing": {
                    "width": "{focus.ring.width}",
                    "style": "{focus.ring.style}",
                    "color": "{focus.ring.color}",
                    "offset": "{focus.ring.offset}",
                    "shadow": "{focus.ring.shadow}"
                  },
                  "icon": {
                    "size": "0.75rem"
                  }
                },
                "connector": {
                  "color": "{content.border.color}",
                  "borderRadius": "{content.border.radius}",
                  "height": "24px"
                }
              },
              "overlaybadge": {
                "root": {
                  "outline": {
                    "width": "2px",
                    "color": "{content.background}"
                  }
                }
              },
              "paginator": {
                "root": {
                  "padding": "0.375rem 0.875rem",
                  "gap": "0.25rem",
                  "borderRadius": "{content.border.radius}",
                  "background": "{content.background}",
                  "color": "{content.color}",
                  "transitionDuration": "{transition.duration}"
                },
                "navButton": {
                  "background": "transparent",
                  "hoverBackground": "{content.hover.background}",
                  "selectedBackground": "{highlight.background}",
                  "color": "{text.muted.color}",
                  "hoverColor": "{text.hover.muted.color}",
                  "selectedColor": "{highlight.color}",
                  "width": "2.25rem",
                  "height": "2.25rem",
                  "borderRadius": "50%",
                  "fontWeight": "{typography.font.weight}",
                  "fontSize": "{typography.font.size}",
                  "focusRing": {
                    "width": "{focus.ring.width}",
                    "style": "{focus.ring.style}",
                    "color": "{focus.ring.color}",
                    "offset": "{focus.ring.offset}",
                    "shadow": "{focus.ring.shadow}"
                  }
                },
                "currentPageReport": {
                  "color": "{text.muted.color}",
                  "fontWeight": "{typography.font.weight}",
                  "fontSize": "{typography.font.size}"
                },
                "jumpToPageInput": {
                  "maxWidth": "2.25rem"
                }
              },
              "panel": {
                "root": {
                  "background": "{content.background}",
                  "borderColor": "{content.border.color}",
                  "color": "{content.color}",
                  "borderRadius": "{content.border.radius}"
                },
                "header": {
                  "background": "transparent",
                  "color": "{text.color}",
                  "padding": "1rem",
                  "borderColor": "{content.border.color}",
                  "borderWidth": "0",
                  "borderRadius": "0"
                },
                "toggleableHeader": {
                  "padding": "0.375rem 1rem"
                },
                "title": {
                  "fontWeight": "600",
                  "fontSize": "{typography.font.size}"
                },
                "content": {
                  "padding": "0 1rem 1rem 1rem"
                },
                "footer": {
                  "padding": "0 1rem 1rem 1rem"
                }
              },
              "panelmenu": {
                "root": {
                  "gap": "0.5rem",
                  "transitionDuration": "{navigation.item.transition.duration}"
                },
                "panel": {
                  "background": "{content.background}",
                  "borderColor": "{content.border.color}",
                  "borderWidth": "1px",
                  "color": "{content.color}",
                  "padding": "0.25rem 0.25rem",
                  "borderRadius": "{content.border.radius}",
                  "first": {
                    "borderWidth": "1px",
                    "topBorderRadius": "{content.border.radius}"
                  },
                  "last": {
                    "borderWidth": "1px",
                    "bottomBorderRadius": "{content.border.radius}"
                  }
                },
                "item": {
                  "focusBackground": "{navigation.item.focus.background}",
                  "color": "{navigation.item.color}",
                  "focusColor": "{navigation.item.focus.color}",
                  "gap": "0.5rem",
                  "padding": "{navigation.item.padding}",
                  "borderRadius": "{content.border.radius}",
                  "icon": {
                    "color": "{navigation.item.icon.color}",
                    "focusColor": "{navigation.item.icon.focus.color}",
                    "size": "{navigation.item.icon.size}"
                  },
                  "label": {
                    "fontWeight": "{navigation.item.label.font.weight}",
                    "fontSize": "{navigation.item.label.font.size}"
                  }
                },
                "submenu": {
                  "indent": "1rem"
                },
                "submenuIcon": {
                  "color": "{navigation.submenu.icon.color}",
                  "focusColor": "{navigation.submenu.icon.focus.color}"
                }
              },
              "password": {
                "meter": {
                  "background": "{content.border.color}",
                  "borderRadius": "{content.border.radius}",
                  "height": "0.625rem"
                },
                "icon": {
                  "color": "{form.field.icon.color}"
                },
                "overlay": {
                  "background": "{overlay.popover.background}",
                  "borderColor": "{overlay.popover.border.color}",
                  "borderRadius": "{overlay.popover.border.radius}",
                  "color": "{overlay.popover.color}",
                  "padding": "{overlay.popover.padding}",
                  "shadow": "{overlay.popover.shadow}"
                },
                "content": {
                  "gap": "0.5rem"
                },
                "meterText": {
                  "fontSize": "{typography.font.size}",
                  "fontWeight": "{typography.font.weight}"
                },
                "strength": {
                  "weakBackground": "light-dark({red.500}, {red.400})",
                  "mediumBackground": "light-dark({amber.500}, {amber.400})",
                  "strongBackground": "light-dark({green.500}, {green.400})"
                }
              },
              "picklist": {
                "root": {
                  "gap": "1rem"
                },
                "controls": {
                  "gap": "0.5rem"
                }
              },
              "popover": {
                "root": {
                  "background": "{overlay.popover.background}",
                  "borderColor": "{overlay.popover.border.color}",
                  "color": "{overlay.popover.color}",
                  "borderRadius": "{overlay.popover.border.radius}",
                  "shadow": "{overlay.popover.shadow}",
                  "gutter": "10px",
                  "arrowOffset": "1.125rem"
                },
                "content": {
                  "padding": "{overlay.popover.padding}"
                }
              },
              "progressbar": {
                "root": {
                  "background": "{content.border.color}",
                  "borderRadius": "{content.border.radius}",
                  "height": "1.125rem"
                },
                "value": {
                  "background": "{primary.color}"
                },
                "label": {
                  "color": "{primary.contrast.color}",
                  "fontSize": "0.625rem",
                  "fontWeight": "600"
                }
              },
              "progressspinner": {
                "root": {
                  "colorOne": "light-dark({red.500}, {red.400})",
                  "colorTwo": "light-dark({blue.500}, {blue.400})",
                  "colorThree": "light-dark({green.500}, {green.400})",
                  "colorFour": "light-dark({yellow.500}, {yellow.400})"
                }
              },
              "radiobutton": {
                "root": {
                  "width": "1.125rem",
                  "height": "1.125rem",
                  "background": "{form.field.background}",
                  "checkedBackground": "{primary.color}",
                  "checkedHoverBackground": "{primary.hover.color}",
                  "disabledBackground": "{form.field.disabled.background}",
                  "filledBackground": "{form.field.filled.background}",
                  "borderColor": "{form.field.border.color}",
                  "hoverBorderColor": "{form.field.hover.border.color}",
                  "focusBorderColor": "{form.field.border.color}",
                  "checkedBorderColor": "{primary.color}",
                  "checkedHoverBorderColor": "{primary.hover.color}",
                  "checkedFocusBorderColor": "{primary.color}",
                  "checkedDisabledBorderColor": "{form.field.border.color}",
                  "invalidBorderColor": "{form.field.invalid.border.color}",
                  "shadow": "{form.field.shadow}",
                  "focusRing": {
                    "width": "{focus.ring.width}",
                    "style": "{focus.ring.style}",
                    "color": "{focus.ring.color}",
                    "offset": "{focus.ring.offset}",
                    "shadow": "{focus.ring.shadow}"
                  },
                  "transitionDuration": "{form.field.transition.duration}",
                  "sm": {
                    "width": "0.875rem",
                    "height": "0.875rem"
                  },
                  "lg": {
                    "width": "1.25rem",
                    "height": "1.25rem"
                  }
                },
                "icon": {
                  "size": "0.625rem",
                  "checkedColor": "{primary.contrast.color}",
                  "checkedHoverColor": "{primary.contrast.color}",
                  "disabledColor": "{form.field.disabled.color}",
                  "sm": {
                    "size": "0.5rem"
                  },
                  "lg": {
                    "size": "0.75rem"
                  }
                }
              },
              "rating": {
                "root": {
                  "gap": "0.25rem",
                  "transitionDuration": "{transition.duration}",
                  "focusRing": {
                    "width": "{focus.ring.width}",
                    "style": "{focus.ring.style}",
                    "color": "{focus.ring.color}",
                    "offset": "{focus.ring.offset}",
                    "shadow": "{focus.ring.shadow}"
                  }
                },
                "icon": {
                  "size": "1rem",
                  "color": "{text.muted.color}",
                  "hoverColor": "{primary.color}",
                  "activeColor": "{primary.color}"
                }
              },
              "ripple": {
                "root": {
                  "background": "light-dark(rgba(0,0,0,0.1), rgba(255,255,255,0.3))"
                }
              },
              "scrollarea": {
                "root": {
                  "background": "{content.background}",
                  "borderColor": "{content.border.color}",
                  "borderRadius": "{content.border.radius}",
                  "focusRing": {
                    "width": "{focus.ring.width}",
                    "style": "{focus.ring.style}",
                    "color": "{focus.ring.color}",
                    "offset": "{focus.ring.offset}",
                    "shadow": "{focus.ring.shadow}"
                  }
                },
                "viewport": {
                  "padding": "1rem"
                },
                "scrollbar": {
                  "background": "transparent",
                  "margin": "0.25rem",
                  "size": "0.25rem",
                  "transitionDuration": "{transition.duration}"
                },
                "handle": {
                  "background": "{content.border.color}"
                },
                "mask": {
                  "fadeSize": "40px"
                }
              },
              "scrollpanel": {
                "root": {
                  "transitionDuration": "{transition.duration}"
                },
                "bar": {
                  "size": "9px",
                  "borderRadius": "{border.radius.sm}",
                  "background": "light-dark({surface.100}, {surface.800})",
                  "focusRing": {
                    "width": "{focus.ring.width}",
                    "style": "{focus.ring.style}",
                    "color": "{focus.ring.color}",
                    "offset": "{focus.ring.offset}",
                    "shadow": "{focus.ring.shadow}"
                  }
                }
              },
              "select": {
                "root": {
                  "fontSize": "{form.field.font.size}",
                  "fontWeight": "{form.field.font.weight}",
                  "background": "{form.field.background}",
                  "disabledBackground": "{form.field.disabled.background}",
                  "filledBackground": "{form.field.filled.background}",
                  "filledHoverBackground": "{form.field.filled.hover.background}",
                  "filledFocusBackground": "{form.field.filled.focus.background}",
                  "borderColor": "{form.field.border.color}",
                  "hoverBorderColor": "{form.field.hover.border.color}",
                  "focusBorderColor": "{form.field.focus.border.color}",
                  "invalidBorderColor": "{form.field.invalid.border.color}",
                  "color": "{form.field.color}",
                  "disabledColor": "{form.field.disabled.color}",
                  "placeholderColor": "{form.field.placeholder.color}",
                  "invalidPlaceholderColor": "{form.field.invalid.placeholder.color}",
                  "shadow": "{form.field.shadow}",
                  "paddingX": "{form.field.padding.x}",
                  "paddingY": "{form.field.padding.y}",
                  "borderRadius": "{form.field.border.radius}",
                  "focusRing": {
                    "width": "{form.field.focus.ring.width}",
                    "style": "{form.field.focus.ring.style}",
                    "color": "{form.field.focus.ring.color}",
                    "offset": "{form.field.focus.ring.offset}",
                    "shadow": "{form.field.focus.ring.shadow}"
                  },
                  "transitionDuration": "{form.field.transition.duration}",
                  "sm": {
                    "fontSize": "{form.field.sm.font.size}",
                    "paddingX": "{form.field.sm.padding.x}",
                    "paddingY": "{form.field.sm.padding.y}"
                  },
                  "lg": {
                    "fontSize": "{form.field.lg.font.size}",
                    "paddingX": "{form.field.lg.padding.x}",
                    "paddingY": "{form.field.lg.padding.y}"
                  }
                },
                "dropdown": {
                  "width": "2.25rem",
                  "color": "{form.field.icon.color}"
                },
                "overlay": {
                  "background": "{overlay.select.background}",
                  "borderColor": "{overlay.select.border.color}",
                  "borderRadius": "{overlay.select.border.radius}",
                  "color": "{overlay.select.color}",
                  "shadow": "{overlay.select.shadow}"
                },
                "list": {
                  "padding": "{list.padding}",
                  "gap": "{list.gap}",
                  "header": {
                    "padding": "{list.header.padding}"
                  }
                },
                "option": {
                  "fontSize": "{list.option.font.size}",
                  "fontWeight": "{list.option.font.weight}",
                  "focusBackground": "{list.option.focus.background}",
                  "selectedBackground": "{list.option.selected.background}",
                  "selectedFocusBackground": "{list.option.selected.focus.background}",
                  "color": "{list.option.color}",
                  "focusColor": "{list.option.focus.color}",
                  "selectedColor": "{list.option.selected.color}",
                  "selectedFocusColor": "{list.option.selected.focus.color}",
                  "selectedFontWeight": "{list.option.selected.font.weight}",
                  "padding": "{list.option.padding}",
                  "borderRadius": "{list.option.border.radius}"
                },
                "optionGroup": {
                  "background": "{list.option.group.background}",
                  "color": "{list.option.group.color}",
                  "fontWeight": "{list.option.group.font.weight}",
                  "fontSize": "{list.option.group.font.size}",
                  "padding": "{list.option.group.padding}"
                },
                "clearIcon": {
                  "color": "{form.field.icon.color}"
                },
                "checkmark": {
                  "color": "{list.option.color}",
                  "gutterStart": "-0.25rem",
                  "gutterEnd": "0.25rem"
                },
                "emptyMessage": {
                  "padding": "{list.option.padding}"
                }
              },
              "selectbutton": {
                "root": {
                  "borderRadius": "{form.field.border.radius}",
                  "invalidBorderColor": "{form.field.invalid.border.color}"
                }
              },
              "sidebar": {
                "root": {
                  "borderColor": "{content.border.color}",
                  "focusRing": {
                    "width": "{focus.ring.width}",
                    "style": "{focus.ring.style}",
                    "color": "{focus.ring.color}",
                    "offset": "{focus.ring.offset}",
                    "shadow": "{focus.ring.shadow}"
                  }
                },
                "layout": {
                  "background": "light-dark({surface.50}, {surface.900})"
                },
                "header": {
                  "padding": "0.5rem",
                  "gap": "0.5rem"
                },
                "footer": {
                  "padding": "0.5rem",
                  "gap": "0.5rem"
                },
                "content": {
                  "gap": "0.125rem"
                },
                "aside": {
                  "padding": "0.5rem"
                },
                "panel": {
                  "background": "{content.background}",
                  "color": "{content.color}",
                  "floatingBorderRadius": "{content.border.radius}",
                  "floatingShadow": "0 1px 2px 0 rgb(0 0 0 / 0.05)"
                },
                "group": {
                  "padding": "0.5rem"
                },
                "groupLabel": {
                  "padding": "0 0.5rem",
                  "height": "2rem",
                  "borderRadius": "{content.border.radius}",
                  "fontSize": "0.75rem",
                  "fontWeight": "500",
                  "color": "{text.muted.color}"
                },
                "groupAction": {
                  "top": "0.875rem",
                  "right": "0.75rem",
                  "size": "1.25rem",
                  "borderRadius": "{content.border.radius}",
                  "color": "{navigation.item.icon.color}",
                  "focusColor": "{navigation.item.icon.focus.color}",
                  "focusBackground": "{navigation.item.focus.background}",
                  "icon": {
                    "size": "{navigation.item.icon.size}"
                  }
                },
                "menu": {
                  "gap": "{navigation.list.gap}"
                },
                "menuButton": {
                  "padding": "0.25rem 0.625rem",
                  "gap": "{navigation.item.gap}",
                  "height": "2rem",
                  "borderRadius": "{navigation.item.border.radius}",
                  "fontSize": "{navigation.item.label.font.size}",
                  "fontWeight": "{navigation.item.label.font.weight}",
                  "color": "{navigation.item.color}",
                  "focusBackground": "{navigation.item.focus.background}",
                  "focusColor": "{navigation.item.focus.color}",
                  "activeBackground": "{navigation.item.active.background}",
                  "activeColor": "{navigation.item.active.color}",
                  "iconOnlyWidth": "2rem",
                  "withActionPaddingEnd": "2rem",
                  "icon": {
                    "color": "{navigation.item.icon.color}",
                    "focusColor": "{navigation.item.icon.focus.color}",
                    "size": "{navigation.item.icon.size}"
                  }
                },
                "menuAction": {
                  "top": "0.375rem",
                  "right": "0.25rem",
                  "width": "1.25rem",
                  "borderRadius": "{content.border.radius}",
                  "color": "{navigation.item.icon.color}",
                  "focusColor": "{navigation.item.icon.focus.color}",
                  "focusBackground": "{navigation.item.focus.background}",
                  "icon": {
                    "size": "{navigation.item.icon.size}"
                  }
                },
                "menuBadge": {
                  "top": "0.375rem",
                  "right": "0.25rem",
                  "height": "1.25rem",
                  "minWidth": "1.25rem",
                  "borderRadius": "0.375rem",
                  "padding": "0 0.25rem",
                  "fontSize": "0.75rem",
                  "fontWeight": "500",
                  "background": "{content.hover.background}",
                  "borderColor": "{content.border.color}",
                  "color": "{text.muted.color}"
                },
                "menuSub": {
                  "paddingBlock": "0.125rem",
                  "gap": "0.125rem",
                  "indentMargin": "0.875rem",
                  "indentPadding": "0.625rem",
                  "collapsibleIndent": "1.5rem",
                  "collapsibleTopMargin": "0.125rem",
                  "collapsibleBorderRadius": "0.375rem"
                },
                "menuSubButton": {
                  "padding": "{navigation.item.padding}",
                  "gap": "{navigation.item.gap}",
                  "height": "2rem",
                  "borderRadius": "{navigation.item.border.radius}",
                  "fontSize": "{navigation.item.label.font.size}",
                  "fontWeight": "{navigation.item.label.font.weight}",
                  "color": "{navigation.item.color}",
                  "focusBackground": "{navigation.item.focus.background}",
                  "focusColor": "{navigation.item.focus.color}",
                  "activeBackground": "{navigation.item.active.background}",
                  "activeColor": "{navigation.item.active.color}",
                  "icon": {
                    "color": "{navigation.item.icon.color}",
                    "focusColor": "{navigation.item.icon.focus.color}",
                    "size": "{navigation.item.icon.size}"
                  }
                },
                "main": {
                  "background": "light-dark({surface.50}, {surface.900})",
                  "floatingBackground": "light-dark({surface.50}, {surface.900})",
                  "insetBackground": "light-dark({surface.0}, {surface.950})",
                  "margin": "0.5rem",
                  "borderRadius": "{content.border.radius}",
                  "shadow": "0 1px 2px 0 rgb(0 0 0 / 0.05)"
                }
              },
              "skeleton": {
                "root": {
                  "borderRadius": "{content.border.radius}",
                  "background": "light-dark({surface.200}, rgba(255, 255, 255, 0.06))",
                  "animationBackground": "light-dark(rgba(255,255,255,0.4), rgba(255, 255, 255, 0.04))"
                }
              },
              "slider": {
                "root": {
                  "transitionDuration": "{transition.duration}"
                },
                "track": {
                  "background": "{content.border.color}",
                  "borderRadius": "{content.border.radius}",
                  "size": "3px"
                },
                "range": {
                  "background": "{primary.color}"
                },
                "handle": {
                  "width": "20px",
                  "height": "20px",
                  "borderRadius": "50%",
                  "background": "{content.border.color}",
                  "hoverBackground": "{content.border.color}",
                  "content": {
                    "borderRadius": "50%",
                    "background": "light-dark({surface.0}, {surface.950})",
                    "hoverBackground": "{content.background}",
                    "width": "16px",
                    "height": "16px",
                    "shadow": "0px 0.5px 0px 0px rgba(0, 0, 0, 0.08), 0px 1px 1px 0px rgba(0, 0, 0, 0.14)"
                  },
                  "focusRing": {
                    "width": "{focus.ring.width}",
                    "style": "{focus.ring.style}",
                    "color": "{focus.ring.color}",
                    "offset": "{focus.ring.offset}",
                    "shadow": "{focus.ring.shadow}"
                  }
                }
              },
              "speeddial": {
                "root": {
                  "gap": "0.5rem",
                  "transitionDuration": "{transition.duration}"
                }
              },
              "splitbutton": {
                "root": {
                  "borderRadius": "{form.field.border.radius}",
                  "roundedBorderRadius": "2rem",
                  "raisedShadow": "0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12)"
                }
              },
              "splitter": {
                "root": {
                  "background": "{content.background}",
                  "borderColor": "{content.border.color}",
                  "color": "{content.color}",
                  "transitionDuration": "{transition.duration}"
                },
                "gutter": {
                  "background": "{content.border.color}"
                },
                "handle": {
                  "size": "24px",
                  "background": "transparent",
                  "borderRadius": "{content.border.radius}",
                  "focusRing": {
                    "width": "{focus.ring.width}",
                    "style": "{focus.ring.style}",
                    "color": "{focus.ring.color}",
                    "offset": "{focus.ring.offset}",
                    "shadow": "{focus.ring.shadow}"
                  }
                }
              },
              "stepper": {
                "root": {
                  "transitionDuration": "{transition.duration}"
                },
                "separator": {
                  "background": "{content.border.color}",
                  "activeBackground": "{primary.color}",
                  "margin": "0 0 0 1.375rem",
                  "size": "2px"
                },
                "step": {
                  "padding": "0.375rem",
                  "gap": "0.875rem"
                },
                "stepHeader": {
                  "padding": "0",
                  "borderRadius": "{content.border.radius}",
                  "focusRing": {
                    "width": "{focus.ring.width}",
                    "style": "{focus.ring.style}",
                    "color": "{focus.ring.color}",
                    "offset": "{focus.ring.offset}",
                    "shadow": "{focus.ring.shadow}"
                  },
                  "gap": "0.5rem"
                },
                "stepTitle": {
                  "color": "{text.muted.color}",
                  "activeColor": "{primary.color}",
                  "fontWeight": "500",
                  "fontSize": "{typography.font.size}"
                },
                "stepNumber": {
                  "background": "{content.background}",
                  "activeBackground": "{content.background}",
                  "borderColor": "{content.border.color}",
                  "activeBorderColor": "{content.border.color}",
                  "color": "{text.muted.color}",
                  "activeColor": "{primary.color}",
                  "size": "2rem",
                  "fontSize": "1rem",
                  "fontWeight": "500",
                  "borderRadius": "50%",
                  "shadow": "0px 0.5px 0px 0px rgba(0, 0, 0, 0.06), 0px 1px 1px 0px rgba(0, 0, 0, 0.12)"
                },
                "steppanels": {
                  "padding": "0.75rem 0.375rem 1rem 0.375rem"
                },
                "steppanel": {
                  "background": "{content.background}",
                  "color": "{content.color}",
                  "padding": "0",
                  "indent": "0.875rem"
                }
              },
              "steps": {
                "root": {
                  "transitionDuration": "{transition.duration}"
                },
                "separator": {
                  "background": "{content.border.color}"
                },
                "itemLink": {
                  "borderRadius": "{content.border.radius}",
                  "focusRing": {
                    "width": "{focus.ring.width}",
                    "style": "{focus.ring.style}",
                    "color": "{focus.ring.color}",
                    "offset": "{focus.ring.offset}",
                    "shadow": "{focus.ring.shadow}"
                  },
                  "gap": "0.5rem"
                },
                "itemLabel": {
                  "color": "{text.muted.color}",
                  "activeColor": "{primary.color}",
                  "fontWeight": "500"
                },
                "itemNumber": {
                  "background": "{content.background}",
                  "activeBackground": "{content.background}",
                  "borderColor": "{content.border.color}",
                  "activeBorderColor": "{content.border.color}",
                  "color": "{text.muted.color}",
                  "activeColor": "{primary.color}",
                  "size": "2rem",
                  "fontSize": "1.143rem",
                  "fontWeight": "500",
                  "borderRadius": "50%",
                  "shadow": "0px 0.5px 0px 0px rgba(0, 0, 0, 0.06), 0px 1px 1px 0px rgba(0, 0, 0, 0.12)"
                }
              },
              "tabmenu": {
                "root": {
                  "transitionDuration": "{transition.duration}"
                },
                "tablist": {
                  "borderWidth": "0 0 1px 0",
                  "background": "{content.background}",
                  "borderColor": "{content.border.color}"
                },
                "item": {
                  "background": "transparent",
                  "hoverBackground": "transparent",
                  "activeBackground": "transparent",
                  "borderWidth": "0 0 1px 0",
                  "borderColor": "{content.border.color}",
                  "hoverBorderColor": "{content.border.color}",
                  "activeBorderColor": "{primary.color}",
                  "color": "{text.muted.color}",
                  "hoverColor": "{text.color}",
                  "activeColor": "{primary.color}",
                  "padding": "1rem 1.125rem",
                  "fontWeight": "600",
                  "margin": "0 0 -1px 0",
                  "gap": "0.5rem",
                  "focusRing": {
                    "width": "{focus.ring.width}",
                    "style": "{focus.ring.style}",
                    "color": "{focus.ring.color}",
                    "offset": "{focus.ring.offset}",
                    "shadow": "{focus.ring.shadow}"
                  }
                },
                "itemIcon": {
                  "color": "{text.muted.color}",
                  "hoverColor": "{text.color}",
                  "activeColor": "{primary.color}"
                },
                "activeBar": {
                  "height": "1px",
                  "bottom": "-1px",
                  "background": "{primary.color}"
                }
              },
              "tabs": {
                "root": {
                  "transitionDuration": "{transition.duration}"
                },
                "tablist": {
                  "borderWidth": "0 0 1px 0",
                  "background": "{content.background}",
                  "borderColor": "{content.border.color}"
                },
                "tab": {
                  "background": "transparent",
                  "hoverBackground": "transparent",
                  "activeBackground": "transparent",
                  "borderWidth": "0",
                  "borderColor": "transparent",
                  "hoverBorderColor": "transparent",
                  "activeBorderColor": "transparent",
                  "color": "{text.muted.color}",
                  "hoverColor": "{text.color}",
                  "activeColor": "{primary.color}",
                  "padding": "0.875rem 1rem",
                  "fontWeight": "600",
                  "fontSize": "{typography.font.size}",
                  "margin": "0",
                  "gap": "0.5rem",
                  "focusRing": {
                    "width": "{focus.ring.width}",
                    "style": "{focus.ring.style}",
                    "color": "{focus.ring.color}",
                    "offset": "-1px",
                    "shadow": "{focus.ring.shadow}"
                  }
                },
                "tabpanel": {
                  "background": "{content.background}",
                  "color": "{content.color}",
                  "padding": "0.75rem 1rem 1rem 1rem",
                  "focusRing": {
                    "width": "{focus.ring.width}",
                    "style": "{focus.ring.style}",
                    "color": "{focus.ring.color}",
                    "offset": "{focus.ring.offset}",
                    "shadow": "inset {focus.ring.shadow}"
                  }
                },
                "navButton": {
                  "background": "{content.background}",
                  "color": "{text.muted.color}",
                  "hoverColor": "{text.color}",
                  "width": "2.25rem",
                  "shadow": "0px 0px 10px 50px light-dark(rgba(255, 255, 255, 0.6), color-mix(in srgb, {content.background}, transparent 50%))",
                  "focusRing": {
                    "width": "{focus.ring.width}",
                    "style": "{focus.ring.style}",
                    "color": "{focus.ring.color}",
                    "offset": "-1px",
                    "shadow": "{focus.ring.shadow}"
                  }
                },
                "activeBar": {
                  "height": "1px",
                  "bottom": "0",
                  "background": "{primary.color}"
                }
              },
              "tabview": {
                "root": {
                  "transitionDuration": "{transition.duration}"
                },
                "tabList": {
                  "background": "{content.background}",
                  "borderColor": "{content.border.color}"
                },
                "tab": {
                  "borderColor": "{content.border.color}",
                  "activeBorderColor": "{primary.color}",
                  "color": "{text.muted.color}",
                  "hoverColor": "{text.color}",
                  "activeColor": "{primary.color}"
                },
                "tabPanel": {
                  "background": "{content.background}",
                  "color": "{content.color}"
                },
                "navButton": {
                  "background": "{content.background}",
                  "color": "{text.muted.color}",
                  "hoverColor": "{text.color}",
                  "shadow": "0px 0px 10px 50px light-dark(rgba(255, 255, 255, 0.6), color-mix(in srgb, {content.background}, transparent 50%))"
                }
              },
              "tag": {
                "root": {
                  "fontSize": "0.75rem",
                  "fontWeight": "700",
                  "padding": "0.125rem 0.375rem",
                  "gap": "0.25rem",
                  "borderRadius": "{content.border.radius}",
                  "roundedBorderRadius": "{border.radius.xl}"
                },
                "icon": {
                  "size": "0.625rem"
                },
                "primary": {
                  "background": "light-dark({primary.100}, color-mix(in srgb, {primary.500}, transparent 84%))",
                  "color": "light-dark({primary.700}, {primary.300})"
                },
                "secondary": {
                  "background": "light-dark({surface.100}, {surface.800})",
                  "color": "light-dark({surface.600}, {surface.300})"
                },
                "success": {
                  "background": "light-dark({green.100}, color-mix(in srgb, {green.500}, transparent 84%))",
                  "color": "light-dark({green.700}, {green.300})"
                },
                "info": {
                  "background": "light-dark({sky.100}, color-mix(in srgb, {sky.500}, transparent 84%))",
                  "color": "light-dark({sky.700}, {sky.300})"
                },
                "warn": {
                  "background": "light-dark({orange.100}, color-mix(in srgb, {orange.500}, transparent 84%))",
                  "color": "light-dark({orange.700}, {orange.300})"
                },
                "danger": {
                  "background": "light-dark({red.100}, color-mix(in srgb, {red.500}, transparent 84%))",
                  "color": "light-dark({red.700}, {red.300})"
                },
                "contrast": {
                  "background": "light-dark({surface.950}, {surface.0})",
                  "color": "light-dark({surface.0}, {surface.950})"
                }
              },
              "terminal": {
                "root": {
                  "background": "{form.field.background}",
                  "borderColor": "{form.field.border.color}",
                  "color": "{form.field.color}",
                  "height": "16rem",
                  "padding": "{form.field.padding.y} {form.field.padding.x}",
                  "borderRadius": "{form.field.border.radius}",
                  "fontWeight": "{typography.font.weight}",
                  "fontSize": "{typography.font.size}"
                },
                "prompt": {
                  "gap": "0.25rem"
                },
                "commandResponse": {
                  "margin": "2px 0"
                }
              },
              "textarea": {
                "root": {
                  "fontSize": "{form.field.font.size}",
                  "fontWeight": "{form.field.font.weight}",
                  "background": "{form.field.background}",
                  "disabledBackground": "{form.field.disabled.background}",
                  "filledBackground": "{form.field.filled.background}",
                  "filledHoverBackground": "{form.field.filled.hover.background}",
                  "filledFocusBackground": "{form.field.filled.focus.background}",
                  "borderColor": "{form.field.border.color}",
                  "hoverBorderColor": "{form.field.hover.border.color}",
                  "focusBorderColor": "{form.field.focus.border.color}",
                  "invalidBorderColor": "{form.field.invalid.border.color}",
                  "color": "{form.field.color}",
                  "disabledColor": "{form.field.disabled.color}",
                  "placeholderColor": "{form.field.placeholder.color}",
                  "invalidPlaceholderColor": "{form.field.invalid.placeholder.color}",
                  "shadow": "{form.field.shadow}",
                  "paddingX": "{form.field.padding.x}",
                  "paddingY": "{form.field.padding.y}",
                  "borderRadius": "{form.field.border.radius}",
                  "focusRing": {
                    "width": "{form.field.focus.ring.width}",
                    "style": "{form.field.focus.ring.style}",
                    "color": "{form.field.focus.ring.color}",
                    "offset": "{form.field.focus.ring.offset}",
                    "shadow": "{form.field.focus.ring.shadow}"
                  },
                  "transitionDuration": "{form.field.transition.duration}",
                  "sm": {
                    "fontSize": "{form.field.sm.font.size}",
                    "paddingX": "{form.field.sm.padding.x}",
                    "paddingY": "{form.field.sm.padding.y}"
                  },
                  "lg": {
                    "fontSize": "{form.field.lg.font.size}",
                    "paddingX": "{form.field.lg.padding.x}",
                    "paddingY": "{form.field.lg.padding.y}"
                  }
                }
              },
              "tieredmenu": {
                "root": {
                  "background": "{content.background}",
                  "borderColor": "{content.border.color}",
                  "color": "{content.color}",
                  "borderRadius": "{content.border.radius}",
                  "shadow": "{overlay.navigation.shadow}",
                  "transitionDuration": "{navigation.item.transition.duration}"
                },
                "list": {
                  "padding": "{navigation.list.padding}",
                  "gap": "{navigation.list.gap}"
                },
                "item": {
                  "focusBackground": "{navigation.item.focus.background}",
                  "activeBackground": "{navigation.item.active.background}",
                  "color": "{navigation.item.color}",
                  "focusColor": "{navigation.item.focus.color}",
                  "activeColor": "{navigation.item.active.color}",
                  "padding": "{navigation.item.padding}",
                  "borderRadius": "{navigation.item.border.radius}",
                  "gap": "{navigation.item.gap}",
                  "icon": {
                    "color": "{navigation.item.icon.color}",
                    "focusColor": "{navigation.item.icon.focus.color}",
                    "activeColor": "{navigation.item.icon.active.color}",
                    "size": "{navigation.item.icon.size}"
                  },
                  "label": {
                    "fontWeight": "{navigation.item.label.font.weight}",
                    "fontSize": "{navigation.item.label.font.size}"
                  }
                },
                "submenu": {
                  "mobileIndent": "0.875rem"
                },
                "submenuIcon": {
                  "size": "{navigation.submenu.icon.size}",
                  "color": "{navigation.submenu.icon.color}",
                  "focusColor": "{navigation.submenu.icon.focus.color}",
                  "activeColor": "{navigation.submenu.icon.active.color}"
                },
                "separator": {
                  "borderColor": "{content.border.color}"
                }
              },
              "timeline": {
                "event": {
                  "minHeight": "4.5rem"
                },
                "horizontal": {
                  "eventContent": {
                    "padding": "0.875rem 0"
                  }
                },
                "vertical": {
                  "eventContent": {
                    "padding": "0 0.875rem"
                  }
                },
                "eventMarker": {
                  "size": "1rem",
                  "borderRadius": "50%",
                  "borderWidth": "2px",
                  "background": "{content.background}",
                  "borderColor": "{content.border.color}",
                  "content": {
                    "borderRadius": "50%",
                    "size": "0.375rem",
                    "background": "{primary.color}",
                    "insetShadow": "0px 0.5px 0px 0px rgba(0, 0, 0, 0.06), 0px 1px 1px 0px rgba(0, 0, 0, 0.12)"
                  }
                },
                "eventConnector": {
                  "color": "{content.border.color}",
                  "size": "2px"
                }
              },
              "toast": {
                "root": {
                  "width": "22rem",
                  "borderRadius": "{content.border.radius}",
                  "borderWidth": "1px",
                  "transitionDuration": "0.3s",
                  "blur": "10px",
                  "focusRing": {
                    "width": "{focus.ring.width}",
                    "style": "{focus.ring.style}",
                    "color": "{focus.ring.color}",
                    "offset": "{focus.ring.offset}",
                    "shadow": "{focus.ring.shadow}"
                  }
                },
                "icon": {
                  "size": "1rem",
                  "margin": "1px 0 0 0"
                },
                "content": {
                  "padding": "{overlay.popover.padding}",
                  "gap": "0.5rem"
                },
                "text": {
                  "gap": "0.25rem"
                },
                "summary": {
                  "fontWeight": "500",
                  "fontSize": "{typography.font.size}"
                },
                "detail": {
                  "fontWeight": "500",
                  "fontSize": "0.75rem"
                },
                "closeButton": {
                  "width": "1.5rem",
                  "height": "1.5rem",
                  "borderRadius": "50%",
                  "focusRing": {
                    "width": "{focus.ring.width}",
                    "style": "{focus.ring.style}",
                    "offset": "{focus.ring.offset}"
                  }
                },
                "closeIcon": {
                  "size": "0.875rem"
                },
                "normal": {
                  "background": "{content.background}",
                  "borderColor": "{content.border.color}",
                  "color": "{text.color}",
                  "detailColor": "{text.muted.color}",
                  "shadow": "{overlay.popover.shadow}",
                  "closeButton": {
                    "hoverBackground": "{content.hover.background}",
                    "focusRing": {
                      "color": "{focus.ring.color}",
                      "shadow": "none"
                    }
                  }
                },
                "info": {
                  "background": "light-dark(color-mix(in srgb, {blue.50}, transparent 5%), color-mix(in srgb, {blue.500}, transparent 84%))",
                  "borderColor": "light-dark({blue.200}, color-mix(in srgb, {blue.700}, transparent 64%))",
                  "color": "light-dark({blue.600}, {blue.500})",
                  "detailColor": "light-dark({surface.700}, {surface.0})",
                  "shadow": "0px 4px 8px 0px color-mix(in srgb, {blue.500}, transparent 96%)",
                  "closeButton": {
                    "hoverBackground": "light-dark({blue.100}, rgba(255, 255, 255, 0.05))",
                    "focusRing": {
                      "color": "light-dark({blue.600}, {blue.500})",
                      "shadow": "none"
                    }
                  }
                },
                "success": {
                  "background": "light-dark(color-mix(in srgb, {green.50}, transparent 5%), color-mix(in srgb, {green.500}, transparent 84%))",
                  "borderColor": "light-dark({green.200}, color-mix(in srgb, {green.700}, transparent 64%))",
                  "color": "light-dark({green.600}, {green.500})",
                  "detailColor": "light-dark({surface.700}, {surface.0})",
                  "shadow": "0px 4px 8px 0px color-mix(in srgb, {green.500}, transparent 96%)",
                  "closeButton": {
                    "hoverBackground": "light-dark({green.100}, rgba(255, 255, 255, 0.05))",
                    "focusRing": {
                      "color": "light-dark({green.600}, {green.500})",
                      "shadow": "none"
                    }
                  }
                },
                "warn": {
                  "background": "light-dark(color-mix(in srgb, {yellow.50}, transparent 5%), color-mix(in srgb, {yellow.500}, transparent 84%))",
                  "borderColor": "light-dark({yellow.200}, color-mix(in srgb, {yellow.700}, transparent 64%))",
                  "color": "light-dark({yellow.600}, {yellow.500})",
                  "detailColor": "light-dark({surface.700}, {surface.0})",
                  "shadow": "0px 4px 8px 0px color-mix(in srgb, {yellow.500}, transparent 96%)",
                  "closeButton": {
                    "hoverBackground": "light-dark({yellow.100}, rgba(255, 255, 255, 0.05))",
                    "focusRing": {
                      "color": "light-dark({yellow.600}, {yellow.500})",
                      "shadow": "none"
                    }
                  }
                },
                "error": {
                  "background": "light-dark(color-mix(in srgb, {red.50}, transparent 5%), color-mix(in srgb, {red.500}, transparent 84%))",
                  "borderColor": "light-dark({red.200}, color-mix(in srgb, {red.700}, transparent 64%))",
                  "color": "light-dark({red.600}, {red.500})",
                  "detailColor": "light-dark({surface.700}, {surface.0})",
                  "shadow": "0px 4px 8px 0px color-mix(in srgb, {red.500}, transparent 96%)",
                  "closeButton": {
                    "hoverBackground": "light-dark({red.100}, rgba(255, 255, 255, 0.05))",
                    "focusRing": {
                      "color": "light-dark({red.600}, {red.500})",
                      "shadow": "none"
                    }
                  }
                },
                "secondary": {
                  "background": "light-dark({surface.100}, {surface.800})",
                  "borderColor": "light-dark({surface.200}, {surface.700})",
                  "color": "light-dark({surface.600}, {surface.300})",
                  "detailColor": "light-dark({surface.700}, {surface.0})",
                  "shadow": "0px 4px 8px 0px color-mix(in srgb, {surface.500}, transparent 96%)",
                  "closeButton": {
                    "hoverBackground": "light-dark({surface.200}, {surface.700})",
                    "focusRing": {
                      "color": "light-dark({surface.600}, {surface.300})",
                      "shadow": "none"
                    }
                  }
                },
                "contrast": {
                  "background": "light-dark({surface.900}, {surface.0})",
                  "borderColor": "light-dark({surface.950}, {surface.100})",
                  "color": "light-dark({surface.50}, {surface.950})",
                  "detailColor": "light-dark({surface.0}, {surface.950})",
                  "shadow": "0px 4px 8px 0px color-mix(in srgb, {surface.950}, transparent 96%)",
                  "closeButton": {
                    "hoverBackground": "light-dark({surface.800}, {surface.100})",
                    "focusRing": {
                      "color": "light-dark({surface.50}, {surface.950})",
                      "shadow": "none"
                    }
                  }
                }
              },
              "togglebutton": {
                "root": {
                  "padding": "0.25rem",
                  "borderRadius": "{content.border.radius}",
                  "gap": "0.5rem",
                  "fontWeight": "500",
                  "fontSize": "{form.field.font.size}",
                  "background": "light-dark({surface.100}, {surface.950})",
                  "checkedBackground": "light-dark({surface.100}, {surface.950})",
                  "hoverBackground": "light-dark({surface.100}, {surface.950})",
                  "borderColor": "light-dark({surface.100}, {surface.950})",
                  "color": "light-dark({surface.500}, {surface.400})",
                  "hoverColor": "light-dark({surface.700}, {surface.300})",
                  "checkedColor": "light-dark({surface.900}, {surface.0})",
                  "checkedBorderColor": "light-dark({surface.100}, {surface.950})",
                  "disabledBackground": "{form.field.disabled.background}",
                  "disabledBorderColor": "{form.field.disabled.background}",
                  "disabledColor": "{form.field.disabled.color}",
                  "invalidBorderColor": "{form.field.invalid.border.color}",
                  "focusRing": {
                    "width": "{focus.ring.width}",
                    "style": "{focus.ring.style}",
                    "color": "{focus.ring.color}",
                    "offset": "{focus.ring.offset}",
                    "shadow": "{focus.ring.shadow}"
                  },
                  "transitionDuration": "{form.field.transition.duration}",
                  "sm": {
                    "fontSize": "{form.field.sm.font.size}",
                    "padding": "0.25rem"
                  },
                  "lg": {
                    "fontSize": "{form.field.lg.font.size}",
                    "padding": "0.25rem"
                  }
                },
                "icon": {
                  "color": "light-dark({surface.500}, {surface.400})",
                  "hoverColor": "light-dark({surface.700}, {surface.300})",
                  "checkedColor": "light-dark({surface.900}, {surface.0})",
                  "disabledColor": "{form.field.disabled.color}"
                },
                "content": {
                  "padding": "0.125rem 0.625rem",
                  "borderRadius": "{content.border.radius}",
                  "checkedBackground": "light-dark({surface.0}, {surface.800})",
                  "checkedShadow": "0px 1px 2px 0px rgba(0, 0, 0, 0.02), 0px 1px 2px 0px rgba(0, 0, 0, 0.04)",
                  "sm": {
                    "padding": "0.125rem 0.625rem"
                  },
                  "lg": {
                    "padding": "0.125rem 0.625rem"
                  }
                }
              },
              "toggleswitch": {
                "root": {
                  "width": "2.25rem",
                  "height": "1.375rem",
                  "borderRadius": "30px",
                  "gap": "0.25rem",
                  "shadow": "{form.field.shadow}",
                  "focusRing": {
                    "width": "{focus.ring.width}",
                    "style": "{focus.ring.style}",
                    "color": "{focus.ring.color}",
                    "offset": "{focus.ring.offset}",
                    "shadow": "{focus.ring.shadow}"
                  },
                  "borderWidth": "1px",
                  "borderColor": "transparent",
                  "hoverBorderColor": "transparent",
                  "checkedBorderColor": "transparent",
                  "checkedHoverBorderColor": "transparent",
                  "invalidBorderColor": "{form.field.invalid.border.color}",
                  "transitionDuration": "{form.field.transition.duration}",
                  "slideDuration": "0.2s",
                  "background": "light-dark({surface.300}, {surface.700})",
                  "disabledBackground": "light-dark({form.field.disabled.background}, {surface.600})",
                  "hoverBackground": "light-dark({surface.400}, {surface.600})",
                  "checkedBackground": "{primary.color}",
                  "checkedHoverBackground": "{primary.hover.color}"
                },
                "handle": {
                  "borderRadius": "50%",
                  "size": "0.875rem",
                  "background": "light-dark({surface.0}, {surface.400})",
                  "disabledBackground": "light-dark({form.field.disabled.color}, {surface.900})",
                  "hoverBackground": "light-dark({surface.0}, {surface.300})",
                  "checkedBackground": "light-dark({surface.0}, {surface.900})",
                  "checkedHoverBackground": "light-dark({surface.0}, {surface.900})",
                  "color": "light-dark({text.muted.color}, {surface.900})",
                  "hoverColor": "light-dark({text.color}, {surface.800})",
                  "checkedColor": "{primary.color}",
                  "checkedHoverColor": "{primary.hover.color}"
                }
              },
              "toolbar": {
                "root": {
                  "background": "{content.background}",
                  "borderColor": "{content.border.color}",
                  "borderRadius": "{content.border.radius}",
                  "color": "{content.color}",
                  "gap": "0.5rem",
                  "padding": "0.625rem"
                }
              },
              "tooltip": {
                "root": {
                  "maxWidth": "12.5rem",
                  "gutter": "0.25rem",
                  "shadow": "{overlay.popover.shadow}",
                  "padding": "0.375rem 0.625rem",
                  "borderRadius": "{overlay.popover.border.radius}",
                  "fontWeight": "{typography.font.weight}",
                  "fontSize": "0.75rem",
                  "background": "{surface.700}",
                  "color": "{surface.0}"
                }
              },
              "tree": {
                "root": {
                  "background": "{content.background}",
                  "color": "{content.color}",
                  "padding": "0.875rem",
                  "gap": "2px",
                  "indent": "0.875rem",
                  "transitionDuration": "0s"
                },
                "node": {
                  "padding": "0.25rem 0.5rem",
                  "borderRadius": "{content.border.radius}",
                  "hoverBackground": "{content.hover.background}",
                  "selectedBackground": "{highlight.background}",
                  "color": "{text.color}",
                  "hoverColor": "{text.hover.color}",
                  "selectedColor": "{highlight.color}",
                  "focusRing": {
                    "width": "{focus.ring.width}",
                    "style": "{focus.ring.style}",
                    "color": "{focus.ring.color}",
                    "offset": "-1px",
                    "shadow": "{focus.ring.shadow}"
                  },
                  "gap": "0.375rem"
                },
                "nodeIcon": {
                  "color": "{text.muted.color}",
                  "hoverColor": "{text.hover.muted.color}",
                  "selectedColor": "{highlight.color}"
                },
                "nodeLabel": {
                  "fontWeight": "{typography.font.weight}",
                  "selectedFontWeight": "{list.option.selected.font.weight}",
                  "fontSize": "{typography.font.size}"
                },
                "nodeToggleButton": {
                  "borderRadius": "50%",
                  "size": "1.5rem",
                  "hoverBackground": "{content.hover.background}",
                  "selectedHoverBackground": "{content.background}",
                  "color": "{text.muted.color}",
                  "hoverColor": "{text.hover.muted.color}",
                  "selectedHoverColor": "{primary.color}",
                  "focusRing": {
                    "width": "{focus.ring.width}",
                    "style": "{focus.ring.style}",
                    "color": "{focus.ring.color}",
                    "offset": "{focus.ring.offset}",
                    "shadow": "{focus.ring.shadow}"
                  }
                },
                "loadingIcon": {
                  "size": "1.75rem"
                },
                "filter": {
                  "margin": "0 0 0.5rem 0"
                },
                "css": "\n    .p-tree-mask.p-overlay-mask {\n        --px-mask-background: light-dark(rgba(255,255,255,0.5),rgba(0,0,0,0.3));\n    }\n"
              },
              "treeselect": {
                "root": {
                  "fontSize": "{form.field.font.size}",
                  "fontWeight": "{form.field.font.weight}",
                  "background": "{form.field.background}",
                  "disabledBackground": "{form.field.disabled.background}",
                  "filledBackground": "{form.field.filled.background}",
                  "filledHoverBackground": "{form.field.filled.hover.background}",
                  "filledFocusBackground": "{form.field.filled.focus.background}",
                  "borderColor": "{form.field.border.color}",
                  "hoverBorderColor": "{form.field.hover.border.color}",
                  "focusBorderColor": "{form.field.focus.border.color}",
                  "invalidBorderColor": "{form.field.invalid.border.color}",
                  "color": "{form.field.color}",
                  "disabledColor": "{form.field.disabled.color}",
                  "placeholderColor": "{form.field.placeholder.color}",
                  "invalidPlaceholderColor": "{form.field.invalid.placeholder.color}",
                  "shadow": "{form.field.shadow}",
                  "paddingX": "{form.field.padding.x}",
                  "paddingY": "{form.field.padding.y}",
                  "borderRadius": "{form.field.border.radius}",
                  "focusRing": {
                    "width": "{form.field.focus.ring.width}",
                    "style": "{form.field.focus.ring.style}",
                    "color": "{form.field.focus.ring.color}",
                    "offset": "{form.field.focus.ring.offset}",
                    "shadow": "{form.field.focus.ring.shadow}"
                  },
                  "transitionDuration": "{form.field.transition.duration}",
                  "sm": {
                    "fontSize": "{form.field.sm.font.size}",
                    "paddingX": "{form.field.sm.padding.x}",
                    "paddingY": "{form.field.sm.padding.y}"
                  },
                  "lg": {
                    "fontSize": "{form.field.lg.font.size}",
                    "paddingX": "{form.field.lg.padding.x}",
                    "paddingY": "{form.field.lg.padding.y}"
                  }
                },
                "dropdown": {
                  "width": "2.25rem",
                  "color": "{form.field.icon.color}"
                },
                "overlay": {
                  "background": "{overlay.select.background}",
                  "borderColor": "{overlay.select.border.color}",
                  "borderRadius": "{overlay.select.border.radius}",
                  "color": "{overlay.select.color}",
                  "shadow": "{overlay.select.shadow}"
                },
                "tree": {
                  "padding": "{list.padding}"
                },
                "emptyMessage": {
                  "padding": "{list.option.padding}"
                },
                "chip": {
                  "borderRadius": "{border.radius.sm}"
                },
                "clearIcon": {
                  "color": "{form.field.icon.color}"
                }
              },
              "treetable": {
                "root": {
                  "transitionDuration": "0s",
                  "borderColor": "light-dark({content.border.color}, {surface.800})"
                },
                "header": {
                  "background": "{content.background}",
                  "borderColor": "{treetable.border.color}",
                  "color": "{content.color}",
                  "borderWidth": "0 0 1px 0",
                  "padding": "0.5rem 0.875rem"
                },
                "headerCell": {
                  "background": "{content.background}",
                  "hoverBackground": "{content.hover.background}",
                  "selectedBackground": "{highlight.background}",
                  "borderColor": "{treetable.border.color}",
                  "color": "{content.color}",
                  "hoverColor": "{content.hover.color}",
                  "selectedColor": "{highlight.color}",
                  "gap": "0.5rem",
                  "padding": "0.5rem 0.875rem",
                  "focusRing": {
                    "width": "{focus.ring.width}",
                    "style": "{focus.ring.style}",
                    "color": "{focus.ring.color}",
                    "offset": "-1px",
                    "shadow": "{focus.ring.shadow}"
                  }
                },
                "columnTitle": {
                  "fontWeight": "600",
                  "fontSize": "{typography.font.size}"
                },
                "row": {
                  "background": "{content.background}",
                  "hoverBackground": "{content.hover.background}",
                  "selectedBackground": "{highlight.background}",
                  "color": "{content.color}",
                  "hoverColor": "{content.hover.color}",
                  "selectedColor": "{highlight.color}",
                  "focusRing": {
                    "width": "{focus.ring.width}",
                    "style": "{focus.ring.style}",
                    "color": "{focus.ring.color}",
                    "offset": "-1px",
                    "shadow": "{focus.ring.shadow}"
                  }
                },
                "bodyCell": {
                  "borderColor": "{treetable.border.color}",
                  "padding": "0.5rem 0.875rem",
                  "gap": "0.5rem",
                  "fontWeight": "{typography.font.size}",
                  "fontSize": "{typography.font.size}",
                  "selectedBorderColor": "light-dark({primary.100}, {primary.900})"
                },
                "footerCell": {
                  "background": "{content.background}",
                  "borderColor": "{treetable.border.color}",
                  "color": "{content.color}",
                  "padding": "0.5rem 0.875rem"
                },
                "columnFooter": {
                  "fontWeight": "600",
                  "fontSize": "{typography.font.size}"
                },
                "footer": {
                  "background": "{content.background}",
                  "borderColor": "{treetable.border.color}",
                  "color": "{content.color}",
                  "borderWidth": "0 0 1px 0",
                  "padding": "0.5rem 0.875rem"
                },
                "columnResizer": {
                  "width": "0.5rem"
                },
                "resizeIndicator": {
                  "width": "1px",
                  "color": "{primary.color}"
                },
                "sortIcon": {
                  "color": "{text.muted.color}",
                  "hoverColor": "{text.hover.muted.color}",
                  "size": "0.75rem"
                },
                "loadingIcon": {
                  "size": "1.75rem"
                },
                "nodeToggleButton": {
                  "hoverBackground": "{content.hover.background}",
                  "selectedHoverBackground": "{content.background}",
                  "color": "{text.muted.color}",
                  "hoverColor": "{text.color}",
                  "selectedHoverColor": "{primary.color}",
                  "size": "1.5rem",
                  "borderRadius": "50%",
                  "focusRing": {
                    "width": "{focus.ring.width}",
                    "style": "{focus.ring.style}",
                    "color": "{focus.ring.color}",
                    "offset": "{focus.ring.offset}",
                    "shadow": "{focus.ring.shadow}"
                  }
                },
                "paginatorTop": {
                  "borderColor": "{content.border.color}",
                  "borderWidth": "0 0 1px 0"
                },
                "paginatorBottom": {
                  "borderColor": "{content.border.color}",
                  "borderWidth": "0 0 1px 0"
                },
                "css": "\n    .p-treetable-mask.p-overlay-mask {\n        --px-mask-background: light-dark(rgba(255,255,255,0.5),rgba(0,0,0,0.3));\n    }\n"
              },
              "virtualscroller": {
                "loader": {
                  "mask": {
                    "background": "{content.background}",
                    "color": "{text.muted.color}"
                  },
                  "icon": {
                    "size": "1.75rem"
                  }
                }
              }
            },
            "css": "\n"
          },
          "options": {
            "darkModeSelector": ".dark"
          }
        }
      },
      "components": [
        {
          "name": "AutoComplete",
          "as": "AutoComplete",
          "from": "primevue/autocomplete",
          "export": "default",
          "filePath": "primevue/autocomplete",
          "global": true,
          "mode": "all"
        },
        {
          "name": "CascadeSelect",
          "as": "CascadeSelect",
          "from": "primevue/cascadeselect",
          "export": "default",
          "filePath": "primevue/cascadeselect",
          "global": true,
          "mode": "all"
        },
        {
          "name": "Checkbox",
          "as": "Checkbox",
          "from": "primevue/checkbox",
          "export": "default",
          "filePath": "primevue/checkbox",
          "global": true,
          "mode": "all"
        },
        {
          "name": "CheckboxGroup",
          "as": "CheckboxGroup",
          "from": "primevue/checkboxgroup",
          "export": "default",
          "filePath": "primevue/checkboxgroup",
          "global": true,
          "mode": "all"
        },
        {
          "name": "ColorPicker",
          "as": "ColorPicker",
          "from": "primevue/colorpicker",
          "export": "default",
          "filePath": "primevue/colorpicker",
          "global": true,
          "mode": "all"
        },
        {
          "name": "DatePicker",
          "as": "DatePicker",
          "from": "primevue/datepicker",
          "export": "default",
          "filePath": "primevue/datepicker",
          "global": true,
          "mode": "all"
        },
        {
          "name": "FloatLabel",
          "as": "FloatLabel",
          "from": "primevue/floatlabel",
          "export": "default",
          "filePath": "primevue/floatlabel",
          "global": true,
          "mode": "all"
        },
        {
          "name": "Fluid",
          "as": "Fluid",
          "from": "primevue/fluid",
          "export": "default",
          "filePath": "primevue/fluid",
          "global": true,
          "mode": "all"
        },
        {
          "name": "IconField",
          "as": "IconField",
          "from": "primevue/iconfield",
          "export": "default",
          "filePath": "primevue/iconfield",
          "global": true,
          "mode": "all"
        },
        {
          "name": "IftaLabel",
          "as": "IftaLabel",
          "from": "primevue/iftalabel",
          "export": "default",
          "filePath": "primevue/iftalabel",
          "global": true,
          "mode": "all"
        },
        {
          "name": "InputColor",
          "as": "InputColor",
          "from": "primevue/inputcolor",
          "export": "default",
          "filePath": "primevue/inputcolor",
          "global": true,
          "mode": "all"
        },
        {
          "name": "InputColorArea",
          "as": "InputColorArea",
          "from": "primevue/inputcolorarea",
          "export": "default",
          "filePath": "primevue/inputcolorarea",
          "global": true,
          "mode": "all"
        },
        {
          "name": "InputColorAreaBackground",
          "as": "InputColorAreaBackground",
          "from": "primevue/inputcolorareabackground",
          "export": "default",
          "filePath": "primevue/inputcolorareabackground",
          "global": true,
          "mode": "all"
        },
        {
          "name": "InputColorAreaHandle",
          "as": "InputColorAreaHandle",
          "from": "primevue/inputcolorareahandle",
          "export": "default",
          "filePath": "primevue/inputcolorareahandle",
          "global": true,
          "mode": "all"
        },
        {
          "name": "InputColorEyeDropper",
          "as": "InputColorEyeDropper",
          "from": "primevue/inputcoloreyedropper",
          "export": "default",
          "filePath": "primevue/inputcoloreyedropper",
          "global": true,
          "mode": "all"
        },
        {
          "name": "InputColorInput",
          "as": "InputColorInput",
          "from": "primevue/inputcolorinput",
          "export": "default",
          "filePath": "primevue/inputcolorinput",
          "global": true,
          "mode": "all"
        },
        {
          "name": "InputColorSlider",
          "as": "InputColorSlider",
          "from": "primevue/inputcolorslider",
          "export": "default",
          "filePath": "primevue/inputcolorslider",
          "global": true,
          "mode": "all"
        },
        {
          "name": "InputColorSliderHandle",
          "as": "InputColorSliderHandle",
          "from": "primevue/inputcolorsliderhandle",
          "export": "default",
          "filePath": "primevue/inputcolorsliderhandle",
          "global": true,
          "mode": "all"
        },
        {
          "name": "InputColorSliderTrack",
          "as": "InputColorSliderTrack",
          "from": "primevue/inputcolorslidertrack",
          "export": "default",
          "filePath": "primevue/inputcolorslidertrack",
          "global": true,
          "mode": "all"
        },
        {
          "name": "InputColorSwatch",
          "as": "InputColorSwatch",
          "from": "primevue/inputcolorswatch",
          "export": "default",
          "filePath": "primevue/inputcolorswatch",
          "global": true,
          "mode": "all"
        },
        {
          "name": "InputColorSwatchBackground",
          "as": "InputColorSwatchBackground",
          "from": "primevue/inputcolorswatchbackground",
          "export": "default",
          "filePath": "primevue/inputcolorswatchbackground",
          "global": true,
          "mode": "all"
        },
        {
          "name": "InputColorTransparencyGrid",
          "as": "InputColorTransparencyGrid",
          "from": "primevue/inputcolortransparencygrid",
          "export": "default",
          "filePath": "primevue/inputcolortransparencygrid",
          "global": true,
          "mode": "all"
        },
        {
          "name": "InputGroup",
          "as": "InputGroup",
          "from": "primevue/inputgroup",
          "export": "default",
          "filePath": "primevue/inputgroup",
          "global": true,
          "mode": "all"
        },
        {
          "name": "InputGroupAddon",
          "as": "InputGroupAddon",
          "from": "primevue/inputgroupaddon",
          "export": "default",
          "filePath": "primevue/inputgroupaddon",
          "global": true,
          "mode": "all"
        },
        {
          "name": "InputIcon",
          "as": "InputIcon",
          "from": "primevue/inputicon",
          "export": "default",
          "filePath": "primevue/inputicon",
          "global": true,
          "mode": "all"
        },
        {
          "name": "InputMask",
          "as": "InputMask",
          "from": "primevue/inputmask",
          "export": "default",
          "filePath": "primevue/inputmask",
          "global": true,
          "mode": "all"
        },
        {
          "name": "InputNumber",
          "as": "InputNumber",
          "from": "primevue/inputnumber",
          "export": "default",
          "filePath": "primevue/inputnumber",
          "global": true,
          "mode": "all"
        },
        {
          "name": "InputOtp",
          "as": "InputOtp",
          "from": "primevue/inputotp",
          "export": "default",
          "filePath": "primevue/inputotp",
          "global": true,
          "mode": "all"
        },
        {
          "name": "InputPassword",
          "as": "InputPassword",
          "from": "primevue/inputpassword",
          "export": "default",
          "filePath": "primevue/inputpassword",
          "global": true,
          "mode": "all"
        },
        {
          "name": "InputTags",
          "as": "InputTags",
          "from": "primevue/inputtags",
          "export": "default",
          "filePath": "primevue/inputtags",
          "global": true,
          "mode": "all"
        },
        {
          "name": "InputText",
          "as": "InputText",
          "from": "primevue/inputtext",
          "export": "default",
          "filePath": "primevue/inputtext",
          "global": true,
          "mode": "all"
        },
        {
          "name": "Knob",
          "as": "Knob",
          "from": "primevue/knob",
          "export": "default",
          "filePath": "primevue/knob",
          "global": true,
          "mode": "all"
        },
        {
          "name": "Label",
          "as": "Label",
          "from": "primevue/label",
          "export": "default",
          "filePath": "primevue/label",
          "global": true,
          "mode": "all"
        },
        {
          "name": "Listbox",
          "as": "Listbox",
          "from": "primevue/listbox",
          "export": "default",
          "filePath": "primevue/listbox",
          "global": true,
          "mode": "all"
        },
        {
          "name": "MultiSelect",
          "as": "MultiSelect",
          "from": "primevue/multiselect",
          "export": "default",
          "filePath": "primevue/multiselect",
          "global": true,
          "mode": "all"
        },
        {
          "name": "Password",
          "as": "Password",
          "from": "primevue/password",
          "export": "default",
          "filePath": "primevue/password",
          "global": true,
          "mode": "all"
        },
        {
          "name": "RadioButton",
          "as": "RadioButton",
          "from": "primevue/radiobutton",
          "export": "default",
          "filePath": "primevue/radiobutton",
          "global": true,
          "mode": "all"
        },
        {
          "name": "RadioButtonGroup",
          "as": "RadioButtonGroup",
          "from": "primevue/radiobuttongroup",
          "export": "default",
          "filePath": "primevue/radiobuttongroup",
          "global": true,
          "mode": "all"
        },
        {
          "name": "Rating",
          "as": "Rating",
          "from": "primevue/rating",
          "export": "default",
          "filePath": "primevue/rating",
          "global": true,
          "mode": "all"
        },
        {
          "name": "Select",
          "as": "Select",
          "from": "primevue/select",
          "export": "default",
          "filePath": "primevue/select",
          "global": true,
          "mode": "all"
        },
        {
          "name": "SelectButton",
          "as": "SelectButton",
          "from": "primevue/selectbutton",
          "export": "default",
          "filePath": "primevue/selectbutton",
          "global": true,
          "mode": "all"
        },
        {
          "name": "Slider",
          "as": "Slider",
          "from": "primevue/slider",
          "export": "default",
          "filePath": "primevue/slider",
          "global": true,
          "mode": "all"
        },
        {
          "name": "Textarea",
          "as": "Textarea",
          "from": "primevue/textarea",
          "export": "default",
          "filePath": "primevue/textarea",
          "global": true,
          "mode": "all"
        },
        {
          "name": "ToggleButton",
          "as": "ToggleButton",
          "from": "primevue/togglebutton",
          "export": "default",
          "filePath": "primevue/togglebutton",
          "global": true,
          "mode": "all"
        },
        {
          "name": "ToggleSwitch",
          "as": "ToggleSwitch",
          "from": "primevue/toggleswitch",
          "export": "default",
          "filePath": "primevue/toggleswitch",
          "global": true,
          "mode": "all"
        },
        {
          "name": "TreeSelect",
          "as": "TreeSelect",
          "from": "primevue/treeselect",
          "export": "default",
          "filePath": "primevue/treeselect",
          "global": true,
          "mode": "all"
        },
        {
          "name": "Button",
          "as": "Button",
          "from": "primevue/button",
          "export": "default",
          "filePath": "primevue/button",
          "global": true,
          "mode": "all"
        },
        {
          "name": "ButtonGroup",
          "as": "ButtonGroup",
          "from": "primevue/buttongroup",
          "export": "default",
          "filePath": "primevue/buttongroup",
          "global": true,
          "mode": "all"
        },
        {
          "name": "SpeedDial",
          "as": "SpeedDial",
          "from": "primevue/speeddial",
          "export": "default",
          "filePath": "primevue/speeddial",
          "global": true,
          "mode": "all"
        },
        {
          "name": "SplitButton",
          "as": "SplitButton",
          "from": "primevue/splitbutton",
          "export": "default",
          "filePath": "primevue/splitbutton",
          "global": true,
          "mode": "all"
        },
        {
          "name": "Column",
          "as": "Column",
          "from": "primevue/column",
          "export": "default",
          "filePath": "primevue/column",
          "global": true,
          "mode": "all"
        },
        {
          "name": "Row",
          "as": "Row",
          "from": "primevue/row",
          "export": "default",
          "filePath": "primevue/row",
          "global": true,
          "mode": "all"
        },
        {
          "name": "ColumnGroup",
          "as": "ColumnGroup",
          "from": "primevue/columngroup",
          "export": "default",
          "filePath": "primevue/columngroup",
          "global": true,
          "mode": "all"
        },
        {
          "name": "DataTable",
          "as": "DataTable",
          "from": "primevue/datatable",
          "export": "default",
          "filePath": "primevue/datatable",
          "global": true,
          "mode": "all"
        },
        {
          "name": "DataView",
          "as": "DataView",
          "from": "primevue/dataview",
          "export": "default",
          "filePath": "primevue/dataview",
          "global": true,
          "mode": "all"
        },
        {
          "name": "OrderList",
          "as": "OrderList",
          "from": "primevue/orderlist",
          "export": "default",
          "filePath": "primevue/orderlist",
          "global": true,
          "mode": "all"
        },
        {
          "name": "OrganizationChart",
          "as": "OrganizationChart",
          "from": "primevue/organizationchart",
          "export": "default",
          "filePath": "primevue/organizationchart",
          "global": true,
          "mode": "all"
        },
        {
          "name": "Paginator",
          "as": "Paginator",
          "from": "primevue/paginator",
          "export": "default",
          "filePath": "primevue/paginator",
          "global": true,
          "mode": "all"
        },
        {
          "name": "PickList",
          "as": "PickList",
          "from": "primevue/picklist",
          "export": "default",
          "filePath": "primevue/picklist",
          "global": true,
          "mode": "all"
        },
        {
          "name": "Tree",
          "as": "Tree",
          "from": "primevue/tree",
          "export": "default",
          "filePath": "primevue/tree",
          "global": true,
          "mode": "all"
        },
        {
          "name": "TreeTable",
          "as": "TreeTable",
          "from": "primevue/treetable",
          "export": "default",
          "filePath": "primevue/treetable",
          "global": true,
          "mode": "all"
        },
        {
          "name": "Timeline",
          "as": "Timeline",
          "from": "primevue/timeline",
          "export": "default",
          "filePath": "primevue/timeline",
          "global": true,
          "mode": "all"
        },
        {
          "name": "VirtualScroller",
          "as": "VirtualScroller",
          "from": "primevue/virtualscroller",
          "export": "default",
          "filePath": "primevue/virtualscroller",
          "global": true,
          "mode": "all"
        },
        {
          "name": "Accordion",
          "as": "Accordion",
          "from": "primevue/accordion",
          "export": "default",
          "filePath": "primevue/accordion",
          "global": true,
          "mode": "all"
        },
        {
          "name": "AccordionPanel",
          "as": "AccordionPanel",
          "from": "primevue/accordionpanel",
          "export": "default",
          "filePath": "primevue/accordionpanel",
          "global": true,
          "mode": "all"
        },
        {
          "name": "AccordionHeader",
          "as": "AccordionHeader",
          "from": "primevue/accordionheader",
          "export": "default",
          "filePath": "primevue/accordionheader",
          "global": true,
          "mode": "all"
        },
        {
          "name": "AccordionContent",
          "as": "AccordionContent",
          "from": "primevue/accordioncontent",
          "export": "default",
          "filePath": "primevue/accordioncontent",
          "global": true,
          "mode": "all"
        },
        {
          "name": "Card",
          "as": "Card",
          "from": "primevue/card",
          "export": "default",
          "filePath": "primevue/card",
          "global": true,
          "mode": "all"
        },
        {
          "name": "DeferredContent",
          "as": "DeferredContent",
          "from": "primevue/deferredcontent",
          "export": "default",
          "filePath": "primevue/deferredcontent",
          "global": true,
          "mode": "all"
        },
        {
          "name": "Divider",
          "as": "Divider",
          "from": "primevue/divider",
          "export": "default",
          "filePath": "primevue/divider",
          "global": true,
          "mode": "all"
        },
        {
          "name": "Fieldset",
          "as": "Fieldset",
          "from": "primevue/fieldset",
          "export": "default",
          "filePath": "primevue/fieldset",
          "global": true,
          "mode": "all"
        },
        {
          "name": "Panel",
          "as": "Panel",
          "from": "primevue/panel",
          "export": "default",
          "filePath": "primevue/panel",
          "global": true,
          "mode": "all"
        },
        {
          "name": "ScrollArea",
          "as": "ScrollArea",
          "from": "primevue/scrollarea",
          "export": "default",
          "filePath": "primevue/scrollarea",
          "global": true,
          "mode": "all"
        },
        {
          "name": "ScrollAreaContent",
          "as": "ScrollAreaContent",
          "from": "primevue/scrollareacontent",
          "export": "default",
          "filePath": "primevue/scrollareacontent",
          "global": true,
          "mode": "all"
        },
        {
          "name": "ScrollAreaCorner",
          "as": "ScrollAreaCorner",
          "from": "primevue/scrollareacorner",
          "export": "default",
          "filePath": "primevue/scrollareacorner",
          "global": true,
          "mode": "all"
        },
        {
          "name": "ScrollAreaHandle",
          "as": "ScrollAreaHandle",
          "from": "primevue/scrollareahandle",
          "export": "default",
          "filePath": "primevue/scrollareahandle",
          "global": true,
          "mode": "all"
        },
        {
          "name": "ScrollAreaScrollbar",
          "as": "ScrollAreaScrollbar",
          "from": "primevue/scrollareascrollbar",
          "export": "default",
          "filePath": "primevue/scrollareascrollbar",
          "global": true,
          "mode": "all"
        },
        {
          "name": "ScrollAreaViewport",
          "as": "ScrollAreaViewport",
          "from": "primevue/scrollareaviewport",
          "export": "default",
          "filePath": "primevue/scrollareaviewport",
          "global": true,
          "mode": "all"
        },
        {
          "name": "ScrollPanel",
          "as": "ScrollPanel",
          "from": "primevue/scrollpanel",
          "export": "default",
          "filePath": "primevue/scrollpanel",
          "global": true,
          "mode": "all"
        },
        {
          "name": "Splitter",
          "as": "Splitter",
          "from": "primevue/splitter",
          "export": "default",
          "filePath": "primevue/splitter",
          "global": true,
          "mode": "all"
        },
        {
          "name": "SplitterPanel",
          "as": "SplitterPanel",
          "from": "primevue/splitterpanel",
          "export": "default",
          "filePath": "primevue/splitterpanel",
          "global": true,
          "mode": "all"
        },
        {
          "name": "Stepper",
          "as": "Stepper",
          "from": "primevue/stepper",
          "export": "default",
          "filePath": "primevue/stepper",
          "global": true,
          "mode": "all"
        },
        {
          "name": "StepList",
          "as": "StepList",
          "from": "primevue/steplist",
          "export": "default",
          "filePath": "primevue/steplist",
          "global": true,
          "mode": "all"
        },
        {
          "name": "Step",
          "as": "Step",
          "from": "primevue/step",
          "export": "default",
          "filePath": "primevue/step",
          "global": true,
          "mode": "all"
        },
        {
          "name": "StepItem",
          "as": "StepItem",
          "from": "primevue/stepitem",
          "export": "default",
          "filePath": "primevue/stepitem",
          "global": true,
          "mode": "all"
        },
        {
          "name": "StepPanels",
          "as": "StepPanels",
          "from": "primevue/steppanels",
          "export": "default",
          "filePath": "primevue/steppanels",
          "global": true,
          "mode": "all"
        },
        {
          "name": "StepPanel",
          "as": "StepPanel",
          "from": "primevue/steppanel",
          "export": "default",
          "filePath": "primevue/steppanel",
          "global": true,
          "mode": "all"
        },
        {
          "name": "Tabs",
          "as": "Tabs",
          "from": "primevue/tabs",
          "export": "default",
          "filePath": "primevue/tabs",
          "global": true,
          "mode": "all"
        },
        {
          "name": "TabList",
          "as": "TabList",
          "from": "primevue/tablist",
          "export": "default",
          "filePath": "primevue/tablist",
          "global": true,
          "mode": "all"
        },
        {
          "name": "Tab",
          "as": "Tab",
          "from": "primevue/tab",
          "export": "default",
          "filePath": "primevue/tab",
          "global": true,
          "mode": "all"
        },
        {
          "name": "TabPanels",
          "as": "TabPanels",
          "from": "primevue/tabpanels",
          "export": "default",
          "filePath": "primevue/tabpanels",
          "global": true,
          "mode": "all"
        },
        {
          "name": "TabPanel",
          "as": "TabPanel",
          "from": "primevue/tabpanel",
          "export": "default",
          "filePath": "primevue/tabpanel",
          "global": true,
          "mode": "all"
        },
        {
          "name": "Toolbar",
          "as": "Toolbar",
          "from": "primevue/toolbar",
          "export": "default",
          "filePath": "primevue/toolbar",
          "global": true,
          "mode": "all"
        },
        {
          "name": "ConfirmDialog",
          "use": {
            "as": "ConfirmationService"
          },
          "as": "ConfirmDialog",
          "from": "primevue/confirmdialog",
          "export": "default",
          "filePath": "primevue/confirmdialog",
          "global": true,
          "mode": "all"
        },
        {
          "name": "ConfirmPopup",
          "use": {
            "as": "ConfirmationService"
          },
          "as": "ConfirmPopup",
          "from": "primevue/confirmpopup",
          "export": "default",
          "filePath": "primevue/confirmpopup",
          "global": true,
          "mode": "all"
        },
        {
          "name": "Dialog",
          "as": "Dialog",
          "from": "primevue/dialog",
          "export": "default",
          "filePath": "primevue/dialog",
          "global": true,
          "mode": "all"
        },
        {
          "name": "Drawer",
          "as": "Drawer",
          "from": "primevue/drawer",
          "export": "default",
          "filePath": "primevue/drawer",
          "global": true,
          "mode": "all"
        },
        {
          "name": "DynamicDialog",
          "use": {
            "as": "DialogService"
          },
          "as": "DynamicDialog",
          "from": "primevue/dynamicdialog",
          "export": "default",
          "filePath": "primevue/dynamicdialog",
          "global": true,
          "mode": "all"
        },
        {
          "name": "Popover",
          "as": "Popover",
          "from": "primevue/popover",
          "export": "default",
          "filePath": "primevue/popover",
          "global": true,
          "mode": "all"
        },
        {
          "name": "FileUpload",
          "as": "FileUpload",
          "from": "primevue/fileupload",
          "export": "default",
          "filePath": "primevue/fileupload",
          "global": true,
          "mode": "all"
        },
        {
          "name": "Breadcrumb",
          "as": "Breadcrumb",
          "from": "primevue/breadcrumb",
          "export": "default",
          "filePath": "primevue/breadcrumb",
          "global": true,
          "mode": "all"
        },
        {
          "name": "CommandMenu",
          "as": "CommandMenu",
          "from": "primevue/commandmenu",
          "export": "default",
          "filePath": "primevue/commandmenu",
          "global": true,
          "mode": "all"
        },
        {
          "name": "ContextMenu",
          "as": "ContextMenu",
          "from": "primevue/contextmenu",
          "export": "default",
          "filePath": "primevue/contextmenu",
          "global": true,
          "mode": "all"
        },
        {
          "name": "Dock",
          "as": "Dock",
          "from": "primevue/dock",
          "export": "default",
          "filePath": "primevue/dock",
          "global": true,
          "mode": "all"
        },
        {
          "name": "Menu",
          "as": "Menu",
          "from": "primevue/menu",
          "export": "default",
          "filePath": "primevue/menu",
          "global": true,
          "mode": "all"
        },
        {
          "name": "Menubar",
          "as": "Menubar",
          "from": "primevue/menubar",
          "export": "default",
          "filePath": "primevue/menubar",
          "global": true,
          "mode": "all"
        },
        {
          "name": "MegaMenu",
          "as": "MegaMenu",
          "from": "primevue/megamenu",
          "export": "default",
          "filePath": "primevue/megamenu",
          "global": true,
          "mode": "all"
        },
        {
          "name": "PanelMenu",
          "as": "PanelMenu",
          "from": "primevue/panelmenu",
          "export": "default",
          "filePath": "primevue/panelmenu",
          "global": true,
          "mode": "all"
        },
        {
          "name": "Sidebar",
          "as": "Sidebar",
          "from": "primevue/sidebar",
          "export": "default",
          "filePath": "primevue/sidebar",
          "global": true,
          "mode": "all"
        },
        {
          "name": "SidebarAside",
          "as": "SidebarAside",
          "from": "primevue/sidebaraside",
          "export": "default",
          "filePath": "primevue/sidebaraside",
          "global": true,
          "mode": "all"
        },
        {
          "name": "SidebarBackdrop",
          "as": "SidebarBackdrop",
          "from": "primevue/sidebarbackdrop",
          "export": "default",
          "filePath": "primevue/sidebarbackdrop",
          "global": true,
          "mode": "all"
        },
        {
          "name": "SidebarContent",
          "as": "SidebarContent",
          "from": "primevue/sidebarcontent",
          "export": "default",
          "filePath": "primevue/sidebarcontent",
          "global": true,
          "mode": "all"
        },
        {
          "name": "SidebarFooter",
          "as": "SidebarFooter",
          "from": "primevue/sidebarfooter",
          "export": "default",
          "filePath": "primevue/sidebarfooter",
          "global": true,
          "mode": "all"
        },
        {
          "name": "SidebarGroup",
          "as": "SidebarGroup",
          "from": "primevue/sidebargroup",
          "export": "default",
          "filePath": "primevue/sidebargroup",
          "global": true,
          "mode": "all"
        },
        {
          "name": "SidebarGroupAction",
          "as": "SidebarGroupAction",
          "from": "primevue/sidebargroupaction",
          "export": "default",
          "filePath": "primevue/sidebargroupaction",
          "global": true,
          "mode": "all"
        },
        {
          "name": "SidebarGroupContent",
          "as": "SidebarGroupContent",
          "from": "primevue/sidebargroupcontent",
          "export": "default",
          "filePath": "primevue/sidebargroupcontent",
          "global": true,
          "mode": "all"
        },
        {
          "name": "SidebarGroupLabel",
          "as": "SidebarGroupLabel",
          "from": "primevue/sidebargrouplabel",
          "export": "default",
          "filePath": "primevue/sidebargrouplabel",
          "global": true,
          "mode": "all"
        },
        {
          "name": "SidebarHeader",
          "as": "SidebarHeader",
          "from": "primevue/sidebarheader",
          "export": "default",
          "filePath": "primevue/sidebarheader",
          "global": true,
          "mode": "all"
        },
        {
          "name": "SidebarLayout",
          "as": "SidebarLayout",
          "from": "primevue/sidebarlayout",
          "export": "default",
          "filePath": "primevue/sidebarlayout",
          "global": true,
          "mode": "all"
        },
        {
          "name": "SidebarMain",
          "as": "SidebarMain",
          "from": "primevue/sidebarmain",
          "export": "default",
          "filePath": "primevue/sidebarmain",
          "global": true,
          "mode": "all"
        },
        {
          "name": "SidebarMenu",
          "as": "SidebarMenu",
          "from": "primevue/sidebarmenu",
          "export": "default",
          "filePath": "primevue/sidebarmenu",
          "global": true,
          "mode": "all"
        },
        {
          "name": "SidebarMenuAction",
          "as": "SidebarMenuAction",
          "from": "primevue/sidebarmenuaction",
          "export": "default",
          "filePath": "primevue/sidebarmenuaction",
          "global": true,
          "mode": "all"
        },
        {
          "name": "SidebarMenuBadge",
          "as": "SidebarMenuBadge",
          "from": "primevue/sidebarmenubadge",
          "export": "default",
          "filePath": "primevue/sidebarmenubadge",
          "global": true,
          "mode": "all"
        },
        {
          "name": "SidebarMenuButton",
          "as": "SidebarMenuButton",
          "from": "primevue/sidebarmenubutton",
          "export": "default",
          "filePath": "primevue/sidebarmenubutton",
          "global": true,
          "mode": "all"
        },
        {
          "name": "SidebarMenuItem",
          "as": "SidebarMenuItem",
          "from": "primevue/sidebarmenuitem",
          "export": "default",
          "filePath": "primevue/sidebarmenuitem",
          "global": true,
          "mode": "all"
        },
        {
          "name": "SidebarMenuSub",
          "as": "SidebarMenuSub",
          "from": "primevue/sidebarmenusub",
          "export": "default",
          "filePath": "primevue/sidebarmenusub",
          "global": true,
          "mode": "all"
        },
        {
          "name": "SidebarMenuSubButton",
          "as": "SidebarMenuSubButton",
          "from": "primevue/sidebarmenusubbutton",
          "export": "default",
          "filePath": "primevue/sidebarmenusubbutton",
          "global": true,
          "mode": "all"
        },
        {
          "name": "SidebarMenuSubItem",
          "as": "SidebarMenuSubItem",
          "from": "primevue/sidebarmenusubitem",
          "export": "default",
          "filePath": "primevue/sidebarmenusubitem",
          "global": true,
          "mode": "all"
        },
        {
          "name": "SidebarPanel",
          "as": "SidebarPanel",
          "from": "primevue/sidebarpanel",
          "export": "default",
          "filePath": "primevue/sidebarpanel",
          "global": true,
          "mode": "all"
        },
        {
          "name": "SidebarRail",
          "as": "SidebarRail",
          "from": "primevue/sidebarrail",
          "export": "default",
          "filePath": "primevue/sidebarrail",
          "global": true,
          "mode": "all"
        },
        {
          "name": "SidebarSpacer",
          "as": "SidebarSpacer",
          "from": "primevue/sidebarspacer",
          "export": "default",
          "filePath": "primevue/sidebarspacer",
          "global": true,
          "mode": "all"
        },
        {
          "name": "SidebarTrigger",
          "as": "SidebarTrigger",
          "from": "primevue/sidebartrigger",
          "export": "default",
          "filePath": "primevue/sidebartrigger",
          "global": true,
          "mode": "all"
        },
        {
          "name": "Steps",
          "as": "Steps",
          "from": "primevue/steps",
          "export": "default",
          "filePath": "primevue/steps",
          "global": true,
          "mode": "all"
        },
        {
          "name": "TieredMenu",
          "as": "TieredMenu",
          "from": "primevue/tieredmenu",
          "export": "default",
          "filePath": "primevue/tieredmenu",
          "global": true,
          "mode": "all"
        },
        {
          "name": "Message",
          "as": "Message",
          "from": "primevue/message",
          "export": "default",
          "filePath": "primevue/message",
          "global": true,
          "mode": "all"
        },
        {
          "name": "Toast",
          "use": {
            "as": "ToastService"
          },
          "as": "Toast",
          "from": "primevue/toast",
          "export": "default",
          "filePath": "primevue/toast",
          "global": true,
          "mode": "all"
        },
        {
          "name": "Carousel",
          "as": "Carousel",
          "from": "primevue/carousel",
          "export": "default",
          "filePath": "primevue/carousel",
          "global": true,
          "mode": "all"
        },
        {
          "name": "CarouselContent",
          "as": "CarouselContent",
          "from": "primevue/carouselcontent",
          "export": "default",
          "filePath": "primevue/carouselcontent",
          "global": true,
          "mode": "all"
        },
        {
          "name": "CarouselIndicator",
          "as": "CarouselIndicator",
          "from": "primevue/carouselindicator",
          "export": "default",
          "filePath": "primevue/carouselindicator",
          "global": true,
          "mode": "all"
        },
        {
          "name": "CarouselIndicators",
          "as": "CarouselIndicators",
          "from": "primevue/carouselindicators",
          "export": "default",
          "filePath": "primevue/carouselindicators",
          "global": true,
          "mode": "all"
        },
        {
          "name": "CarouselItem",
          "as": "CarouselItem",
          "from": "primevue/carouselitem",
          "export": "default",
          "filePath": "primevue/carouselitem",
          "global": true,
          "mode": "all"
        },
        {
          "name": "CarouselNext",
          "as": "CarouselNext",
          "from": "primevue/carouselnext",
          "export": "default",
          "filePath": "primevue/carouselnext",
          "global": true,
          "mode": "all"
        },
        {
          "name": "CarouselPrev",
          "as": "CarouselPrev",
          "from": "primevue/carouselprev",
          "export": "default",
          "filePath": "primevue/carouselprev",
          "global": true,
          "mode": "all"
        },
        {
          "name": "Galleria",
          "as": "Galleria",
          "from": "primevue/galleria",
          "export": "default",
          "filePath": "primevue/galleria",
          "global": true,
          "mode": "all"
        },
        {
          "name": "Gallery",
          "as": "Gallery",
          "from": "primevue/gallery",
          "export": "default",
          "filePath": "primevue/gallery",
          "global": true,
          "mode": "all"
        },
        {
          "name": "GalleryBackdrop",
          "as": "GalleryBackdrop",
          "from": "primevue/gallerybackdrop",
          "export": "default",
          "filePath": "primevue/gallerybackdrop",
          "global": true,
          "mode": "all"
        },
        {
          "name": "GalleryContent",
          "as": "GalleryContent",
          "from": "primevue/gallerycontent",
          "export": "default",
          "filePath": "primevue/gallerycontent",
          "global": true,
          "mode": "all"
        },
        {
          "name": "GalleryDownload",
          "as": "GalleryDownload",
          "from": "primevue/gallerydownload",
          "export": "default",
          "filePath": "primevue/gallerydownload",
          "global": true,
          "mode": "all"
        },
        {
          "name": "GalleryFlipX",
          "as": "GalleryFlipX",
          "from": "primevue/galleryflipx",
          "export": "default",
          "filePath": "primevue/galleryflipx",
          "global": true,
          "mode": "all"
        },
        {
          "name": "GalleryFlipY",
          "as": "GalleryFlipY",
          "from": "primevue/galleryflipy",
          "export": "default",
          "filePath": "primevue/galleryflipy",
          "global": true,
          "mode": "all"
        },
        {
          "name": "GalleryFooter",
          "as": "GalleryFooter",
          "from": "primevue/galleryfooter",
          "export": "default",
          "filePath": "primevue/galleryfooter",
          "global": true,
          "mode": "all"
        },
        {
          "name": "GalleryFullScreen",
          "as": "GalleryFullScreen",
          "from": "primevue/galleryfullscreen",
          "export": "default",
          "filePath": "primevue/galleryfullscreen",
          "global": true,
          "mode": "all"
        },
        {
          "name": "GalleryHeader",
          "as": "GalleryHeader",
          "from": "primevue/galleryheader",
          "export": "default",
          "filePath": "primevue/galleryheader",
          "global": true,
          "mode": "all"
        },
        {
          "name": "GalleryItem",
          "as": "GalleryItem",
          "from": "primevue/galleryitem",
          "export": "default",
          "filePath": "primevue/galleryitem",
          "global": true,
          "mode": "all"
        },
        {
          "name": "GalleryNext",
          "as": "GalleryNext",
          "from": "primevue/gallerynext",
          "export": "default",
          "filePath": "primevue/gallerynext",
          "global": true,
          "mode": "all"
        },
        {
          "name": "GalleryPrev",
          "as": "GalleryPrev",
          "from": "primevue/galleryprev",
          "export": "default",
          "filePath": "primevue/galleryprev",
          "global": true,
          "mode": "all"
        },
        {
          "name": "GalleryRotateLeft",
          "as": "GalleryRotateLeft",
          "from": "primevue/galleryrotateleft",
          "export": "default",
          "filePath": "primevue/galleryrotateleft",
          "global": true,
          "mode": "all"
        },
        {
          "name": "GalleryRotateRight",
          "as": "GalleryRotateRight",
          "from": "primevue/galleryrotateright",
          "export": "default",
          "filePath": "primevue/galleryrotateright",
          "global": true,
          "mode": "all"
        },
        {
          "name": "GalleryThumbnail",
          "as": "GalleryThumbnail",
          "from": "primevue/gallerythumbnail",
          "export": "default",
          "filePath": "primevue/gallerythumbnail",
          "global": true,
          "mode": "all"
        },
        {
          "name": "GalleryThumbnailContent",
          "as": "GalleryThumbnailContent",
          "from": "primevue/gallerythumbnailcontent",
          "export": "default",
          "filePath": "primevue/gallerythumbnailcontent",
          "global": true,
          "mode": "all"
        },
        {
          "name": "GalleryThumbnailItem",
          "as": "GalleryThumbnailItem",
          "from": "primevue/gallerythumbnailitem",
          "export": "default",
          "filePath": "primevue/gallerythumbnailitem",
          "global": true,
          "mode": "all"
        },
        {
          "name": "GalleryZoomIn",
          "as": "GalleryZoomIn",
          "from": "primevue/galleryzoomin",
          "export": "default",
          "filePath": "primevue/galleryzoomin",
          "global": true,
          "mode": "all"
        },
        {
          "name": "GalleryZoomOut",
          "as": "GalleryZoomOut",
          "from": "primevue/galleryzoomout",
          "export": "default",
          "filePath": "primevue/galleryzoomout",
          "global": true,
          "mode": "all"
        },
        {
          "name": "GalleryZoomToggle",
          "as": "GalleryZoomToggle",
          "from": "primevue/galleryzoomtoggle",
          "export": "default",
          "filePath": "primevue/galleryzoomtoggle",
          "global": true,
          "mode": "all"
        },
        {
          "name": "Compare",
          "as": "Compare",
          "from": "primevue/compare",
          "export": "default",
          "filePath": "primevue/compare",
          "global": true,
          "mode": "all"
        },
        {
          "name": "CompareHandle",
          "as": "CompareHandle",
          "from": "primevue/comparehandle",
          "export": "default",
          "filePath": "primevue/comparehandle",
          "global": true,
          "mode": "all"
        },
        {
          "name": "CompareIndicator",
          "as": "CompareIndicator",
          "from": "primevue/compareindicator",
          "export": "default",
          "filePath": "primevue/compareindicator",
          "global": true,
          "mode": "all"
        },
        {
          "name": "CompareItem",
          "as": "CompareItem",
          "from": "primevue/compareitem",
          "export": "default",
          "filePath": "primevue/compareitem",
          "global": true,
          "mode": "all"
        },
        {
          "name": "Image",
          "as": "Image",
          "from": "primevue/image",
          "export": "default",
          "filePath": "primevue/image",
          "global": true,
          "mode": "all"
        },
        {
          "name": "ImageCompare",
          "as": "ImageCompare",
          "from": "primevue/imagecompare",
          "export": "default",
          "filePath": "primevue/imagecompare",
          "global": true,
          "mode": "all"
        },
        {
          "name": "Avatar",
          "as": "Avatar",
          "from": "primevue/avatar",
          "export": "default",
          "filePath": "primevue/avatar",
          "global": true,
          "mode": "all"
        },
        {
          "name": "AvatarGroup",
          "as": "AvatarGroup",
          "from": "primevue/avatargroup",
          "export": "default",
          "filePath": "primevue/avatargroup",
          "global": true,
          "mode": "all"
        },
        {
          "name": "Badge",
          "as": "Badge",
          "from": "primevue/badge",
          "export": "default",
          "filePath": "primevue/badge",
          "global": true,
          "mode": "all"
        },
        {
          "name": "BlockUI",
          "as": "BlockUI",
          "from": "primevue/blockui",
          "export": "default",
          "filePath": "primevue/blockui",
          "global": true,
          "mode": "all"
        },
        {
          "name": "Chip",
          "as": "Chip",
          "from": "primevue/chip",
          "export": "default",
          "filePath": "primevue/chip",
          "global": true,
          "mode": "all"
        },
        {
          "name": "Inplace",
          "as": "Inplace",
          "from": "primevue/inplace",
          "export": "default",
          "filePath": "primevue/inplace",
          "global": true,
          "mode": "all"
        },
        {
          "name": "MeterGroup",
          "as": "MeterGroup",
          "from": "primevue/metergroup",
          "export": "default",
          "filePath": "primevue/metergroup",
          "global": true,
          "mode": "all"
        },
        {
          "name": "OverlayBadge",
          "as": "OverlayBadge",
          "from": "primevue/overlaybadge",
          "export": "default",
          "filePath": "primevue/overlaybadge",
          "global": true,
          "mode": "all"
        },
        {
          "name": "ScrollTop",
          "as": "ScrollTop",
          "from": "primevue/scrolltop",
          "export": "default",
          "filePath": "primevue/scrolltop",
          "global": true,
          "mode": "all"
        },
        {
          "name": "Skeleton",
          "as": "Skeleton",
          "from": "primevue/skeleton",
          "export": "default",
          "filePath": "primevue/skeleton",
          "global": true,
          "mode": "all"
        },
        {
          "name": "ProgressBar",
          "as": "ProgressBar",
          "from": "primevue/progressbar",
          "export": "default",
          "filePath": "primevue/progressbar",
          "global": true,
          "mode": "all"
        },
        {
          "name": "ProgressSpinner",
          "as": "ProgressSpinner",
          "from": "primevue/progressspinner",
          "export": "default",
          "filePath": "primevue/progressspinner",
          "global": true,
          "mode": "all"
        },
        {
          "name": "Tag",
          "as": "Tag",
          "from": "primevue/tag",
          "export": "default",
          "filePath": "primevue/tag",
          "global": true,
          "mode": "all"
        },
        {
          "name": "Terminal",
          "as": "Terminal",
          "from": "primevue/terminal",
          "export": "default",
          "filePath": "primevue/terminal",
          "global": true,
          "mode": "all"
        },
        {
          "name": "Form",
          "from": "@primevue/forms/form",
          "as": "Form",
          "export": "default",
          "filePath": "@primevue/forms/form",
          "global": true,
          "mode": "all"
        },
        {
          "name": "FormField",
          "from": "@primevue/forms/formfield",
          "as": "FormField",
          "export": "default",
          "filePath": "@primevue/forms/formfield",
          "global": true,
          "mode": "all"
        }
      ],
      "directives": [
        {
          "name": "tooltip",
          "as": "Tooltip",
          "from": "primevue/tooltip"
        },
        {
          "name": "ripple",
          "as": "Ripple",
          "from": "primevue/ripple"
        },
        {
          "name": "styleclass",
          "as": "StyleClass",
          "from": "primevue/styleclass"
        },
        {
          "name": "focustrap",
          "as": "FocusTrap",
          "from": "primevue/focustrap"
        },
        {
          "name": "animateonscroll",
          "as": "AnimateOnScroll",
          "from": "primevue/animateonscroll"
        },
        {
          "name": "keyfilter",
          "as": "KeyFilter",
          "from": "primevue/keyfilter"
        },
        {
          "name": "mask",
          "as": "Mask",
          "from": "primevue/mask"
        }
      ],
      "composables": [
        {
          "name": "usePrimeVue",
          "as": "usePrimeVue",
          "from": "primevue/config"
        },
        {
          "name": "useStyle",
          "as": "useStyle",
          "from": "primevue/usestyle"
        },
        {
          "name": "useConfirm",
          "as": "useConfirm",
          "from": "primevue/useconfirm"
        },
        {
          "name": "useToast",
          "as": "useToast",
          "from": "primevue/usetoast"
        },
        {
          "name": "useDialog",
          "as": "useDialog",
          "from": "primevue/usedialog"
        }
      ],
      "config": [
        {
          "name": "PrimeVue",
          "as": "PrimeVue",
          "from": "primevue/config"
        }
      ],
      "services": [
        {
          "name": "ConfirmationService",
          "as": "ConfirmationService",
          "from": "primevue/confirmationservice"
        },
        {
          "name": "DialogService",
          "as": "DialogService",
          "from": "primevue/dialogservice"
        },
        {
          "name": "ToastService",
          "as": "ToastService",
          "from": "primevue/toastservice"
        }
      ],
      "styles": [
        {
          "name": "BaseStyle",
          "as": "BaseStyle",
          "from": "@primevue/core/base/style"
        },
        {
          "name": "BaseComponentStyle",
          "as": "BaseComponentStyle",
          "from": "@primevue/core/basecomponent/style"
        },
        {
          "name": "AutoCompleteStyle",
          "as": "AutoCompleteStyle",
          "from": "primevue/autocomplete/style"
        },
        {
          "name": "CascadeSelectStyle",
          "as": "CascadeSelectStyle",
          "from": "primevue/cascadeselect/style"
        },
        {
          "name": "CheckboxStyle",
          "as": "CheckboxStyle",
          "from": "primevue/checkbox/style"
        },
        {
          "name": "CheckboxGroupStyle",
          "as": "CheckboxGroupStyle",
          "from": "primevue/checkboxgroup/style"
        },
        {
          "name": "ColorPickerStyle",
          "as": "ColorPickerStyle",
          "from": "primevue/colorpicker/style"
        },
        {
          "name": "DatePickerStyle",
          "as": "DatePickerStyle",
          "from": "primevue/datepicker/style"
        },
        {
          "name": "FloatLabelStyle",
          "as": "FloatLabelStyle",
          "from": "primevue/floatlabel/style"
        },
        {
          "name": "FluidStyle",
          "as": "FluidStyle",
          "from": "primevue/fluid/style"
        },
        {
          "name": "IconFieldStyle",
          "as": "IconFieldStyle",
          "from": "primevue/iconfield/style"
        },
        {
          "name": "IftaLabelStyle",
          "as": "IftaLabelStyle",
          "from": "primevue/iftalabel/style"
        },
        {
          "name": "InputColorStyle",
          "as": "InputColorStyle",
          "from": "primevue/inputcolor/style"
        },
        {
          "name": "InputColorAreaStyle",
          "as": "InputColorAreaStyle",
          "from": "primevue/inputcolorarea/style"
        },
        {
          "name": "InputColorAreaBackgroundStyle",
          "as": "InputColorAreaBackgroundStyle",
          "from": "primevue/inputcolorareabackground/style"
        },
        {
          "name": "InputColorAreaHandleStyle",
          "as": "InputColorAreaHandleStyle",
          "from": "primevue/inputcolorareahandle/style"
        },
        {
          "name": "InputColorEyeDropperStyle",
          "as": "InputColorEyeDropperStyle",
          "from": "primevue/inputcoloreyedropper/style"
        },
        {
          "name": "InputColorInputStyle",
          "as": "InputColorInputStyle",
          "from": "primevue/inputcolorinput/style"
        },
        {
          "name": "InputColorSliderStyle",
          "as": "InputColorSliderStyle",
          "from": "primevue/inputcolorslider/style"
        },
        {
          "name": "InputColorSliderHandleStyle",
          "as": "InputColorSliderHandleStyle",
          "from": "primevue/inputcolorsliderhandle/style"
        },
        {
          "name": "InputColorSliderTrackStyle",
          "as": "InputColorSliderTrackStyle",
          "from": "primevue/inputcolorslidertrack/style"
        },
        {
          "name": "InputColorSwatchStyle",
          "as": "InputColorSwatchStyle",
          "from": "primevue/inputcolorswatch/style"
        },
        {
          "name": "InputColorSwatchBackgroundStyle",
          "as": "InputColorSwatchBackgroundStyle",
          "from": "primevue/inputcolorswatchbackground/style"
        },
        {
          "name": "InputColorTransparencyGridStyle",
          "as": "InputColorTransparencyGridStyle",
          "from": "primevue/inputcolortransparencygrid/style"
        },
        {
          "name": "InputGroupStyle",
          "as": "InputGroupStyle",
          "from": "primevue/inputgroup/style"
        },
        {
          "name": "InputGroupAddonStyle",
          "as": "InputGroupAddonStyle",
          "from": "primevue/inputgroupaddon/style"
        },
        {
          "name": "InputIconStyle",
          "as": "InputIconStyle",
          "from": "primevue/inputicon/style"
        },
        {
          "name": "InputMaskStyle",
          "as": "InputMaskStyle",
          "from": "primevue/inputmask/style"
        },
        {
          "name": "InputNumberStyle",
          "as": "InputNumberStyle",
          "from": "primevue/inputnumber/style"
        },
        {
          "name": "InputOtpStyle",
          "as": "InputOtpStyle",
          "from": "primevue/inputotp/style"
        },
        {
          "name": "InputPasswordStyle",
          "as": "InputPasswordStyle",
          "from": "primevue/inputpassword/style"
        },
        {
          "name": "InputTagsStyle",
          "as": "InputTagsStyle",
          "from": "primevue/inputtags/style"
        },
        {
          "name": "InputTextStyle",
          "as": "InputTextStyle",
          "from": "primevue/inputtext/style"
        },
        {
          "name": "KnobStyle",
          "as": "KnobStyle",
          "from": "primevue/knob/style"
        },
        {
          "name": "LabelStyle",
          "as": "LabelStyle",
          "from": "primevue/label/style"
        },
        {
          "name": "ListboxStyle",
          "as": "ListboxStyle",
          "from": "primevue/listbox/style"
        },
        {
          "name": "MultiSelectStyle",
          "as": "MultiSelectStyle",
          "from": "primevue/multiselect/style"
        },
        {
          "name": "PasswordStyle",
          "as": "PasswordStyle",
          "from": "primevue/password/style"
        },
        {
          "name": "RadioButtonStyle",
          "as": "RadioButtonStyle",
          "from": "primevue/radiobutton/style"
        },
        {
          "name": "RadioButtonGroupStyle",
          "as": "RadioButtonGroupStyle",
          "from": "primevue/radiobuttongroup/style"
        },
        {
          "name": "RatingStyle",
          "as": "RatingStyle",
          "from": "primevue/rating/style"
        },
        {
          "name": "SelectStyle",
          "as": "SelectStyle",
          "from": "primevue/select/style"
        },
        {
          "name": "SelectButtonStyle",
          "as": "SelectButtonStyle",
          "from": "primevue/selectbutton/style"
        },
        {
          "name": "SliderStyle",
          "as": "SliderStyle",
          "from": "primevue/slider/style"
        },
        {
          "name": "TextareaStyle",
          "as": "TextareaStyle",
          "from": "primevue/textarea/style"
        },
        {
          "name": "ToggleButtonStyle",
          "as": "ToggleButtonStyle",
          "from": "primevue/togglebutton/style"
        },
        {
          "name": "ToggleSwitchStyle",
          "as": "ToggleSwitchStyle",
          "from": "primevue/toggleswitch/style"
        },
        {
          "name": "TreeSelectStyle",
          "as": "TreeSelectStyle",
          "from": "primevue/treeselect/style"
        },
        {
          "name": "ButtonStyle",
          "as": "ButtonStyle",
          "from": "primevue/button/style"
        },
        {
          "name": "ButtonGroupStyle",
          "as": "ButtonGroupStyle",
          "from": "primevue/buttongroup/style"
        },
        {
          "name": "SpeedDialStyle",
          "as": "SpeedDialStyle",
          "from": "primevue/speeddial/style"
        },
        {
          "name": "SplitButtonStyle",
          "as": "SplitButtonStyle",
          "from": "primevue/splitbutton/style"
        },
        {
          "name": "ColumnStyle",
          "as": "ColumnStyle",
          "from": "primevue/column/style"
        },
        {
          "name": "RowStyle",
          "as": "RowStyle",
          "from": "primevue/row/style"
        },
        {
          "name": "ColumnGroupStyle",
          "as": "ColumnGroupStyle",
          "from": "primevue/columngroup/style"
        },
        {
          "name": "DataTableStyle",
          "as": "DataTableStyle",
          "from": "primevue/datatable/style"
        },
        {
          "name": "DataViewStyle",
          "as": "DataViewStyle",
          "from": "primevue/dataview/style"
        },
        {
          "name": "OrderListStyle",
          "as": "OrderListStyle",
          "from": "primevue/orderlist/style"
        },
        {
          "name": "OrganizationChartStyle",
          "as": "OrganizationChartStyle",
          "from": "primevue/organizationchart/style"
        },
        {
          "name": "PaginatorStyle",
          "as": "PaginatorStyle",
          "from": "primevue/paginator/style"
        },
        {
          "name": "PickListStyle",
          "as": "PickListStyle",
          "from": "primevue/picklist/style"
        },
        {
          "name": "TreeStyle",
          "as": "TreeStyle",
          "from": "primevue/tree/style"
        },
        {
          "name": "TreeTableStyle",
          "as": "TreeTableStyle",
          "from": "primevue/treetable/style"
        },
        {
          "name": "TimelineStyle",
          "as": "TimelineStyle",
          "from": "primevue/timeline/style"
        },
        {
          "name": "VirtualScrollerStyle",
          "as": "VirtualScrollerStyle",
          "from": "primevue/virtualscroller/style"
        },
        {
          "name": "AccordionStyle",
          "as": "AccordionStyle",
          "from": "primevue/accordion/style"
        },
        {
          "name": "AccordionPanelStyle",
          "as": "AccordionPanelStyle",
          "from": "primevue/accordionpanel/style"
        },
        {
          "name": "AccordionHeaderStyle",
          "as": "AccordionHeaderStyle",
          "from": "primevue/accordionheader/style"
        },
        {
          "name": "AccordionContentStyle",
          "as": "AccordionContentStyle",
          "from": "primevue/accordioncontent/style"
        },
        {
          "name": "CardStyle",
          "as": "CardStyle",
          "from": "primevue/card/style"
        },
        {
          "name": "DeferredContentStyle",
          "as": "DeferredContentStyle",
          "from": "primevue/deferredcontent/style"
        },
        {
          "name": "DividerStyle",
          "as": "DividerStyle",
          "from": "primevue/divider/style"
        },
        {
          "name": "FieldsetStyle",
          "as": "FieldsetStyle",
          "from": "primevue/fieldset/style"
        },
        {
          "name": "PanelStyle",
          "as": "PanelStyle",
          "from": "primevue/panel/style"
        },
        {
          "name": "ScrollAreaStyle",
          "as": "ScrollAreaStyle",
          "from": "primevue/scrollarea/style"
        },
        {
          "name": "ScrollAreaContentStyle",
          "as": "ScrollAreaContentStyle",
          "from": "primevue/scrollareacontent/style"
        },
        {
          "name": "ScrollAreaCornerStyle",
          "as": "ScrollAreaCornerStyle",
          "from": "primevue/scrollareacorner/style"
        },
        {
          "name": "ScrollAreaHandleStyle",
          "as": "ScrollAreaHandleStyle",
          "from": "primevue/scrollareahandle/style"
        },
        {
          "name": "ScrollAreaScrollbarStyle",
          "as": "ScrollAreaScrollbarStyle",
          "from": "primevue/scrollareascrollbar/style"
        },
        {
          "name": "ScrollAreaViewportStyle",
          "as": "ScrollAreaViewportStyle",
          "from": "primevue/scrollareaviewport/style"
        },
        {
          "name": "ScrollPanelStyle",
          "as": "ScrollPanelStyle",
          "from": "primevue/scrollpanel/style"
        },
        {
          "name": "SplitterStyle",
          "as": "SplitterStyle",
          "from": "primevue/splitter/style"
        },
        {
          "name": "SplitterPanelStyle",
          "as": "SplitterPanelStyle",
          "from": "primevue/splitterpanel/style"
        },
        {
          "name": "StepperStyle",
          "as": "StepperStyle",
          "from": "primevue/stepper/style"
        },
        {
          "name": "StepListStyle",
          "as": "StepListStyle",
          "from": "primevue/steplist/style"
        },
        {
          "name": "StepStyle",
          "as": "StepStyle",
          "from": "primevue/step/style"
        },
        {
          "name": "StepItemStyle",
          "as": "StepItemStyle",
          "from": "primevue/stepitem/style"
        },
        {
          "name": "StepPanelsStyle",
          "as": "StepPanelsStyle",
          "from": "primevue/steppanels/style"
        },
        {
          "name": "StepPanelStyle",
          "as": "StepPanelStyle",
          "from": "primevue/steppanel/style"
        },
        {
          "name": "TabsStyle",
          "as": "TabsStyle",
          "from": "primevue/tabs/style"
        },
        {
          "name": "TabListStyle",
          "as": "TabListStyle",
          "from": "primevue/tablist/style"
        },
        {
          "name": "TabStyle",
          "as": "TabStyle",
          "from": "primevue/tab/style"
        },
        {
          "name": "TabPanelsStyle",
          "as": "TabPanelsStyle",
          "from": "primevue/tabpanels/style"
        },
        {
          "name": "TabPanelStyle",
          "as": "TabPanelStyle",
          "from": "primevue/tabpanel/style"
        },
        {
          "name": "ToolbarStyle",
          "as": "ToolbarStyle",
          "from": "primevue/toolbar/style"
        },
        {
          "name": "ConfirmDialogStyle",
          "as": "ConfirmDialogStyle",
          "from": "primevue/confirmdialog/style"
        },
        {
          "name": "ConfirmPopupStyle",
          "as": "ConfirmPopupStyle",
          "from": "primevue/confirmpopup/style"
        },
        {
          "name": "DialogStyle",
          "as": "DialogStyle",
          "from": "primevue/dialog/style"
        },
        {
          "name": "DrawerStyle",
          "as": "DrawerStyle",
          "from": "primevue/drawer/style"
        },
        {
          "name": "DynamicDialogStyle",
          "as": "DynamicDialogStyle",
          "from": "primevue/dynamicdialog/style"
        },
        {
          "name": "PopoverStyle",
          "as": "PopoverStyle",
          "from": "primevue/popover/style"
        },
        {
          "name": "FileUploadStyle",
          "as": "FileUploadStyle",
          "from": "primevue/fileupload/style"
        },
        {
          "name": "BreadcrumbStyle",
          "as": "BreadcrumbStyle",
          "from": "primevue/breadcrumb/style"
        },
        {
          "name": "CommandMenuStyle",
          "as": "CommandMenuStyle",
          "from": "primevue/commandmenu/style"
        },
        {
          "name": "ContextMenuStyle",
          "as": "ContextMenuStyle",
          "from": "primevue/contextmenu/style"
        },
        {
          "name": "DockStyle",
          "as": "DockStyle",
          "from": "primevue/dock/style"
        },
        {
          "name": "MenuStyle",
          "as": "MenuStyle",
          "from": "primevue/menu/style"
        },
        {
          "name": "MenubarStyle",
          "as": "MenubarStyle",
          "from": "primevue/menubar/style"
        },
        {
          "name": "MegaMenuStyle",
          "as": "MegaMenuStyle",
          "from": "primevue/megamenu/style"
        },
        {
          "name": "PanelMenuStyle",
          "as": "PanelMenuStyle",
          "from": "primevue/panelmenu/style"
        },
        {
          "name": "SidebarStyle",
          "as": "SidebarStyle",
          "from": "primevue/sidebar/style"
        },
        {
          "name": "SidebarAsideStyle",
          "as": "SidebarAsideStyle",
          "from": "primevue/sidebaraside/style"
        },
        {
          "name": "SidebarBackdropStyle",
          "as": "SidebarBackdropStyle",
          "from": "primevue/sidebarbackdrop/style"
        },
        {
          "name": "SidebarContentStyle",
          "as": "SidebarContentStyle",
          "from": "primevue/sidebarcontent/style"
        },
        {
          "name": "SidebarFooterStyle",
          "as": "SidebarFooterStyle",
          "from": "primevue/sidebarfooter/style"
        },
        {
          "name": "SidebarGroupStyle",
          "as": "SidebarGroupStyle",
          "from": "primevue/sidebargroup/style"
        },
        {
          "name": "SidebarGroupActionStyle",
          "as": "SidebarGroupActionStyle",
          "from": "primevue/sidebargroupaction/style"
        },
        {
          "name": "SidebarGroupContentStyle",
          "as": "SidebarGroupContentStyle",
          "from": "primevue/sidebargroupcontent/style"
        },
        {
          "name": "SidebarGroupLabelStyle",
          "as": "SidebarGroupLabelStyle",
          "from": "primevue/sidebargrouplabel/style"
        },
        {
          "name": "SidebarHeaderStyle",
          "as": "SidebarHeaderStyle",
          "from": "primevue/sidebarheader/style"
        },
        {
          "name": "SidebarLayoutStyle",
          "as": "SidebarLayoutStyle",
          "from": "primevue/sidebarlayout/style"
        },
        {
          "name": "SidebarMainStyle",
          "as": "SidebarMainStyle",
          "from": "primevue/sidebarmain/style"
        },
        {
          "name": "SidebarMenuStyle",
          "as": "SidebarMenuStyle",
          "from": "primevue/sidebarmenu/style"
        },
        {
          "name": "SidebarMenuActionStyle",
          "as": "SidebarMenuActionStyle",
          "from": "primevue/sidebarmenuaction/style"
        },
        {
          "name": "SidebarMenuBadgeStyle",
          "as": "SidebarMenuBadgeStyle",
          "from": "primevue/sidebarmenubadge/style"
        },
        {
          "name": "SidebarMenuButtonStyle",
          "as": "SidebarMenuButtonStyle",
          "from": "primevue/sidebarmenubutton/style"
        },
        {
          "name": "SidebarMenuItemStyle",
          "as": "SidebarMenuItemStyle",
          "from": "primevue/sidebarmenuitem/style"
        },
        {
          "name": "SidebarMenuSubStyle",
          "as": "SidebarMenuSubStyle",
          "from": "primevue/sidebarmenusub/style"
        },
        {
          "name": "SidebarMenuSubButtonStyle",
          "as": "SidebarMenuSubButtonStyle",
          "from": "primevue/sidebarmenusubbutton/style"
        },
        {
          "name": "SidebarMenuSubItemStyle",
          "as": "SidebarMenuSubItemStyle",
          "from": "primevue/sidebarmenusubitem/style"
        },
        {
          "name": "SidebarPanelStyle",
          "as": "SidebarPanelStyle",
          "from": "primevue/sidebarpanel/style"
        },
        {
          "name": "SidebarRailStyle",
          "as": "SidebarRailStyle",
          "from": "primevue/sidebarrail/style"
        },
        {
          "name": "SidebarSpacerStyle",
          "as": "SidebarSpacerStyle",
          "from": "primevue/sidebarspacer/style"
        },
        {
          "name": "SidebarTriggerStyle",
          "as": "SidebarTriggerStyle",
          "from": "primevue/sidebartrigger/style"
        },
        {
          "name": "StepsStyle",
          "as": "StepsStyle",
          "from": "primevue/steps/style"
        },
        {
          "name": "TieredMenuStyle",
          "as": "TieredMenuStyle",
          "from": "primevue/tieredmenu/style"
        },
        {
          "name": "MessageStyle",
          "as": "MessageStyle",
          "from": "primevue/message/style"
        },
        {
          "name": "ToastStyle",
          "as": "ToastStyle",
          "from": "primevue/toast/style"
        },
        {
          "name": "CarouselStyle",
          "as": "CarouselStyle",
          "from": "primevue/carousel/style"
        },
        {
          "name": "CarouselContentStyle",
          "as": "CarouselContentStyle",
          "from": "primevue/carouselcontent/style"
        },
        {
          "name": "CarouselIndicatorStyle",
          "as": "CarouselIndicatorStyle",
          "from": "primevue/carouselindicator/style"
        },
        {
          "name": "CarouselIndicatorsStyle",
          "as": "CarouselIndicatorsStyle",
          "from": "primevue/carouselindicators/style"
        },
        {
          "name": "CarouselItemStyle",
          "as": "CarouselItemStyle",
          "from": "primevue/carouselitem/style"
        },
        {
          "name": "CarouselNextStyle",
          "as": "CarouselNextStyle",
          "from": "primevue/carouselnext/style"
        },
        {
          "name": "CarouselPrevStyle",
          "as": "CarouselPrevStyle",
          "from": "primevue/carouselprev/style"
        },
        {
          "name": "GalleriaStyle",
          "as": "GalleriaStyle",
          "from": "primevue/galleria/style"
        },
        {
          "name": "GalleryStyle",
          "as": "GalleryStyle",
          "from": "primevue/gallery/style"
        },
        {
          "name": "GalleryBackdropStyle",
          "as": "GalleryBackdropStyle",
          "from": "primevue/gallerybackdrop/style"
        },
        {
          "name": "GalleryContentStyle",
          "as": "GalleryContentStyle",
          "from": "primevue/gallerycontent/style"
        },
        {
          "name": "GalleryDownloadStyle",
          "as": "GalleryDownloadStyle",
          "from": "primevue/gallerydownload/style"
        },
        {
          "name": "GalleryFlipXStyle",
          "as": "GalleryFlipXStyle",
          "from": "primevue/galleryflipx/style"
        },
        {
          "name": "GalleryFlipYStyle",
          "as": "GalleryFlipYStyle",
          "from": "primevue/galleryflipy/style"
        },
        {
          "name": "GalleryFooterStyle",
          "as": "GalleryFooterStyle",
          "from": "primevue/galleryfooter/style"
        },
        {
          "name": "GalleryFullScreenStyle",
          "as": "GalleryFullScreenStyle",
          "from": "primevue/galleryfullscreen/style"
        },
        {
          "name": "GalleryHeaderStyle",
          "as": "GalleryHeaderStyle",
          "from": "primevue/galleryheader/style"
        },
        {
          "name": "GalleryItemStyle",
          "as": "GalleryItemStyle",
          "from": "primevue/galleryitem/style"
        },
        {
          "name": "GalleryNextStyle",
          "as": "GalleryNextStyle",
          "from": "primevue/gallerynext/style"
        },
        {
          "name": "GalleryPrevStyle",
          "as": "GalleryPrevStyle",
          "from": "primevue/galleryprev/style"
        },
        {
          "name": "GalleryRotateLeftStyle",
          "as": "GalleryRotateLeftStyle",
          "from": "primevue/galleryrotateleft/style"
        },
        {
          "name": "GalleryRotateRightStyle",
          "as": "GalleryRotateRightStyle",
          "from": "primevue/galleryrotateright/style"
        },
        {
          "name": "GalleryThumbnailStyle",
          "as": "GalleryThumbnailStyle",
          "from": "primevue/gallerythumbnail/style"
        },
        {
          "name": "GalleryThumbnailContentStyle",
          "as": "GalleryThumbnailContentStyle",
          "from": "primevue/gallerythumbnailcontent/style"
        },
        {
          "name": "GalleryThumbnailItemStyle",
          "as": "GalleryThumbnailItemStyle",
          "from": "primevue/gallerythumbnailitem/style"
        },
        {
          "name": "GalleryZoomInStyle",
          "as": "GalleryZoomInStyle",
          "from": "primevue/galleryzoomin/style"
        },
        {
          "name": "GalleryZoomOutStyle",
          "as": "GalleryZoomOutStyle",
          "from": "primevue/galleryzoomout/style"
        },
        {
          "name": "GalleryZoomToggleStyle",
          "as": "GalleryZoomToggleStyle",
          "from": "primevue/galleryzoomtoggle/style"
        },
        {
          "name": "CompareStyle",
          "as": "CompareStyle",
          "from": "primevue/compare/style"
        },
        {
          "name": "CompareHandleStyle",
          "as": "CompareHandleStyle",
          "from": "primevue/comparehandle/style"
        },
        {
          "name": "CompareIndicatorStyle",
          "as": "CompareIndicatorStyle",
          "from": "primevue/compareindicator/style"
        },
        {
          "name": "CompareItemStyle",
          "as": "CompareItemStyle",
          "from": "primevue/compareitem/style"
        },
        {
          "name": "ImageStyle",
          "as": "ImageStyle",
          "from": "primevue/image/style"
        },
        {
          "name": "ImageCompareStyle",
          "as": "ImageCompareStyle",
          "from": "primevue/imagecompare/style"
        },
        {
          "name": "AvatarStyle",
          "as": "AvatarStyle",
          "from": "primevue/avatar/style"
        },
        {
          "name": "AvatarGroupStyle",
          "as": "AvatarGroupStyle",
          "from": "primevue/avatargroup/style"
        },
        {
          "name": "BadgeStyle",
          "as": "BadgeStyle",
          "from": "primevue/badge/style"
        },
        {
          "name": "BlockUIStyle",
          "as": "BlockUIStyle",
          "from": "primevue/blockui/style"
        },
        {
          "name": "ChipStyle",
          "as": "ChipStyle",
          "from": "primevue/chip/style"
        },
        {
          "name": "InplaceStyle",
          "as": "InplaceStyle",
          "from": "primevue/inplace/style"
        },
        {
          "name": "MeterGroupStyle",
          "as": "MeterGroupStyle",
          "from": "primevue/metergroup/style"
        },
        {
          "name": "OverlayBadgeStyle",
          "as": "OverlayBadgeStyle",
          "from": "primevue/overlaybadge/style"
        },
        {
          "name": "ScrollTopStyle",
          "as": "ScrollTopStyle",
          "from": "primevue/scrolltop/style"
        },
        {
          "name": "SkeletonStyle",
          "as": "SkeletonStyle",
          "from": "primevue/skeleton/style"
        },
        {
          "name": "ProgressBarStyle",
          "as": "ProgressBarStyle",
          "from": "primevue/progressbar/style"
        },
        {
          "name": "ProgressSpinnerStyle",
          "as": "ProgressSpinnerStyle",
          "from": "primevue/progressspinner/style"
        },
        {
          "name": "TagStyle",
          "as": "TagStyle",
          "from": "primevue/tag/style"
        },
        {
          "name": "TerminalStyle",
          "as": "TerminalStyle",
          "from": "primevue/terminal/style"
        },
        {
          "name": "FormStyle",
          "as": "FormStyle",
          "from": "@primevue/forms/form/style"
        },
        {
          "name": "FormFieldStyle",
          "as": "FormFieldStyle",
          "from": "@primevue/forms/formfield/style"
        },
        {
          "name": "TooltipStyle",
          "as": "TooltipStyle",
          "from": "primevue/tooltip/style"
        },
        {
          "name": "RippleStyle",
          "as": "RippleStyle",
          "from": "primevue/ripple/style"
        },
        {
          "name": "StyleClassStyle",
          "as": "StyleClassStyle",
          "from": "primevue/styleclass/style"
        },
        {
          "name": "FocusTrapStyle",
          "as": "FocusTrapStyle",
          "from": "primevue/focustrap/style"
        },
        {
          "name": "AnimateOnScrollStyle",
          "as": "AnimateOnScrollStyle",
          "from": "primevue/animateonscroll/style"
        },
        {
          "name": "KeyFilterStyle",
          "as": "KeyFilterStyle",
          "from": "primevue/keyfilter/style"
        },
        {
          "name": "MaskStyle",
          "as": "MaskStyle",
          "from": "primevue/mask/style"
        }
      ],
      "injectStylesAsString": [],
      "injectStylesAsStringToTop": [
        ""
      ]
    }
  },
  "icon": {
    "serverKnownCssClasses": []
  }
};
const envOptions = {
  prefix: "NITRO_",
  altPrefix: _inlineRuntimeConfig.nitro.envPrefix ?? process.env.NITRO_ENV_PREFIX ?? "_",
  envExpansion: _inlineRuntimeConfig.nitro.envExpansion ?? process.env.NITRO_ENV_EXPANSION ?? false
};
const _sharedRuntimeConfig = _deepFreeze(
  applyEnv(klona(_inlineRuntimeConfig), envOptions)
);
function useRuntimeConfig(event) {
  if (!event) {
    return _sharedRuntimeConfig;
  }
  if (event.context.nitro.runtimeConfig) {
    return event.context.nitro.runtimeConfig;
  }
  const runtimeConfig = klona(_inlineRuntimeConfig);
  applyEnv(runtimeConfig, envOptions);
  event.context.nitro.runtimeConfig = runtimeConfig;
  return runtimeConfig;
}
_deepFreeze(klona(appConfig));
function _deepFreeze(object) {
  const propNames = Object.getOwnPropertyNames(object);
  for (const name of propNames) {
    const value = object[name];
    if (value && typeof value === "object") {
      _deepFreeze(value);
    }
  }
  return Object.freeze(object);
}
new Proxy(/* @__PURE__ */ Object.create(null), {
  get: (_, prop) => {
    console.warn(
      "Please use `useRuntimeConfig()` instead of accessing config directly."
    );
    const runtimeConfig = useRuntimeConfig();
    if (prop in runtimeConfig) {
      return runtimeConfig[prop];
    }
    return void 0;
  }
});

function createContext(opts = {}) {
  let currentInstance;
  let isSingleton = false;
  const checkConflict = (instance) => {
    if (currentInstance && currentInstance !== instance) {
      throw new Error("Context conflict");
    }
  };
  let als;
  if (opts.asyncContext) {
    const _AsyncLocalStorage = opts.AsyncLocalStorage || globalThis.AsyncLocalStorage;
    if (_AsyncLocalStorage) {
      als = new _AsyncLocalStorage();
    } else {
      console.warn("[unctx] `AsyncLocalStorage` is not provided.");
    }
  }
  const _getCurrentInstance = () => {
    if (als) {
      const instance = als.getStore();
      if (instance !== void 0) {
        return instance;
      }
    }
    return currentInstance;
  };
  return {
    use: () => {
      const _instance = _getCurrentInstance();
      if (_instance === void 0) {
        throw new Error("Context is not available");
      }
      return _instance;
    },
    tryUse: () => {
      return _getCurrentInstance();
    },
    set: (instance, replace) => {
      if (!replace) {
        checkConflict(instance);
      }
      currentInstance = instance;
      isSingleton = true;
    },
    unset: () => {
      currentInstance = void 0;
      isSingleton = false;
    },
    call: (instance, callback) => {
      checkConflict(instance);
      currentInstance = instance;
      try {
        return als ? als.run(instance, callback) : callback();
      } finally {
        if (!isSingleton) {
          currentInstance = void 0;
        }
      }
    },
    async callAsync(instance, callback) {
      currentInstance = instance;
      const onRestore = () => {
        currentInstance = instance;
      };
      const onLeave = () => currentInstance === instance ? onRestore : void 0;
      asyncHandlers.add(onLeave);
      try {
        const r = als ? als.run(instance, callback) : callback();
        if (!isSingleton) {
          currentInstance = void 0;
        }
        return await r;
      } finally {
        asyncHandlers.delete(onLeave);
      }
    }
  };
}
function createNamespace(defaultOpts = {}) {
  const contexts = {};
  return {
    get(key, opts = {}) {
      if (!contexts[key]) {
        contexts[key] = createContext({ ...defaultOpts, ...opts });
      }
      return contexts[key];
    }
  };
}
const _globalThis = typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : typeof global !== "undefined" ? global : {};
const globalKey = "__unctx__";
const defaultNamespace = _globalThis[globalKey] || (_globalThis[globalKey] = createNamespace());
const getContext = (key, opts = {}) => defaultNamespace.get(key, opts);
const asyncHandlersKey = "__unctx_async_handlers__";
const asyncHandlers = _globalThis[asyncHandlersKey] || (_globalThis[asyncHandlersKey] = /* @__PURE__ */ new Set());

getContext("nitro-app", {
  asyncContext: false,
  AsyncLocalStorage: void 0
});

function isPathInScope(pathname, base) {
  let canonical;
  try {
    const pre = pathname.replace(/%2f/gi, "/").replace(/%5c/gi, "\\");
    canonical = new URL(pre, "http://_").pathname;
  } catch {
    return false;
  }
  return !base || canonical === base || canonical.startsWith(base + "/");
}

const config$1 = useRuntimeConfig();
const _routeRulesMatcher = toRouteMatcher(
  createRouter$1({ routes: config$1.nitro.routeRules })
);
function createRouteRulesHandler(ctx) {
  return eventHandler((event) => {
    const routeRules = getRouteRules(event);
    if (routeRules.headers) {
      setHeaders(event, routeRules.headers);
    }
    if (routeRules.redirect) {
      let target = routeRules.redirect.to;
      if (target.endsWith("/**")) {
        let targetPath = event.path;
        const strpBase = routeRules.redirect._redirectStripBase;
        if (strpBase) {
          if (!isPathInScope(event.path.split("?")[0], strpBase)) {
            throw createError$1({ statusCode: 400 });
          }
          targetPath = withoutBase(targetPath, strpBase);
        } else if (targetPath.startsWith("//")) {
          targetPath = targetPath.replace(/^\/+/, "/");
        }
        target = joinURL(target.slice(0, -3), targetPath);
      } else if (event.path.includes("?")) {
        const query = getQuery$1(event.path);
        target = withQuery(target, query);
      }
      return sendRedirect(event, target, routeRules.redirect.statusCode);
    }
    if (routeRules.proxy) {
      let target = routeRules.proxy.to;
      if (target.endsWith("/**")) {
        let targetPath = event.path;
        const strpBase = routeRules.proxy._proxyStripBase;
        if (strpBase) {
          if (!isPathInScope(event.path.split("?")[0], strpBase)) {
            throw createError$1({ statusCode: 400 });
          }
          targetPath = withoutBase(targetPath, strpBase);
        } else if (targetPath.startsWith("//")) {
          targetPath = targetPath.replace(/^\/+/, "/");
        }
        target = joinURL(target.slice(0, -3), targetPath);
      } else if (event.path.includes("?")) {
        const query = getQuery$1(event.path);
        target = withQuery(target, query);
      }
      return proxyRequest(event, target, {
        fetch: ctx.localFetch,
        ...routeRules.proxy
      });
    }
  });
}
function getRouteRules(event) {
  event.context._nitro = event.context._nitro || {};
  if (!event.context._nitro.routeRules) {
    event.context._nitro.routeRules = getRouteRulesForPath(
      withoutBase(event.path.split("?")[0], useRuntimeConfig().app.baseURL)
    );
  }
  return event.context._nitro.routeRules;
}
function getRouteRulesForPath(path) {
  return defu$1({}, ..._routeRulesMatcher.matchAll(path).reverse());
}

function _captureError(error, type) {
  console.error(`[${type}]`, error);
  useNitroApp().captureError(error, { tags: [type] });
}
function trapUnhandledNodeErrors() {
  process.on(
    "unhandledRejection",
    (error) => _captureError(error, "unhandledRejection")
  );
  process.on(
    "uncaughtException",
    (error) => _captureError(error, "uncaughtException")
  );
}
function joinHeaders(value) {
  return Array.isArray(value) ? value.join(", ") : String(value);
}
function normalizeFetchResponse(response) {
  if (!response.headers.has("set-cookie")) {
    return response;
  }
  return new Response(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers: normalizeCookieHeaders(response.headers)
  });
}
function normalizeCookieHeader(header = "") {
  return splitCookiesString(joinHeaders(header));
}
function normalizeCookieHeaders(headers) {
  const outgoingHeaders = new Headers();
  for (const [name, header] of headers) {
    if (name === "set-cookie") {
      for (const cookie of normalizeCookieHeader(header)) {
        outgoingHeaders.append("set-cookie", cookie);
      }
    } else {
      outgoingHeaders.set(name, joinHeaders(header));
    }
  }
  return outgoingHeaders;
}

//#region src/runtime/utils/error.ts
/**
* Nitro internal functions extracted from https://github.com/nitrojs/nitro/blob/v2/src/runtime/internal/utils.ts
*/
function isJsonRequest(event) {
	if (hasReqHeader(event, "accept", "text/html")) return false;
	return hasReqHeader(event, "accept", "application/json") || hasReqHeader(event, "user-agent", "curl/") || hasReqHeader(event, "user-agent", "httpie/") || hasReqHeader(event, "sec-fetch-mode", "cors") || event.path.startsWith("/api/") || event.path.endsWith(".json");
}
function hasReqHeader(event, name, includes) {
	const value = getRequestHeader(event, name);
	return !!(value && typeof value === "string" && value.toLowerCase().includes(includes));
}

//#region src/runtime/handlers/error.ts
var error_default = async function errorhandler(error, event, { defaultHandler }) {
	if (event.handled || isJsonRequest(event)) return;
	const defaultRes = await defaultHandler(error, event, { json: true });
	const status = error.status || error.statusCode || 500;
	if (status === 404 && defaultRes.status === 302) {
		setResponseHeaders(event, defaultRes.headers);
		setResponseStatus(event, defaultRes.status, defaultRes.statusText);
		return send(event, JSON.stringify(defaultRes.body, null, 2));
	}
	const errorObject = defaultRes.body;
	const url = new URL(errorObject.url);
	errorObject.url = withoutBase(url.pathname, useRuntimeConfig(event).app.baseURL) + url.search + url.hash;
	errorObject.message = error.unhandled ? errorObject.message || "Server Error" : error.message || errorObject.message || "Server Error";
	errorObject.data ||= error.data;
	errorObject.statusText ||= error.statusText || error.statusMessage;
	delete defaultRes.headers["content-type"];
	delete defaultRes.headers["content-security-policy"];
	setResponseHeaders(event, defaultRes.headers);
	const reqHeaders = getRequestHeaders(event);
	const res = event.path.startsWith("/__nuxt_error") || !!reqHeaders["x-nuxt-error"] ? null : await useNitroApp().localFetch(withQuery(joinURL(useRuntimeConfig(event).app.baseURL, "/__nuxt_error"), errorObject), {
		headers: {
			...reqHeaders,
			"x-nuxt-error": "true"
		},
		redirect: "manual"
	}).catch(() => null);
	if (event.handled) return;
	if (!res) {
		const { template } = await import('../_/error-500.mjs');
		setResponseHeader(event, "Content-Type", "text/html;charset=UTF-8");
		return send(event, template(errorObject));
	}
	const html = await res.text();
	for (const [header, value] of res.headers.entries()) {
		if (header === "set-cookie") {
			appendResponseHeader(event, header, value);
			continue;
		}
		setResponseHeader(event, header, value);
	}
	setResponseStatus(event, res.status && res.status !== 200 ? res.status : defaultRes.status, res.statusText || defaultRes.statusText);
	return send(event, html);
};

function defineNitroErrorHandler(handler) {
  return handler;
}

const errorHandler$1 = defineNitroErrorHandler(
  function defaultNitroErrorHandler(error, event) {
    const res = defaultHandler(error, event);
    setResponseHeaders(event, res.headers);
    setResponseStatus(event, res.status, res.statusText);
    return send(event, JSON.stringify(res.body, null, 2));
  }
);
function defaultHandler(error, event, opts) {
  const isSensitive = error.unhandled || error.fatal;
  const statusCode = error.statusCode || 500;
  const statusMessage = error.statusMessage || "Server Error";
  const url = getRequestURL(event, { xForwardedHost: true, xForwardedProto: true });
  if (statusCode === 404) {
    const baseURL = "/";
    if (/^\/[^/]/.test(baseURL) && !url.pathname.startsWith(baseURL)) {
      const redirectTo = `${baseURL}${url.pathname.slice(1)}${url.search}`;
      return {
        status: 302,
        statusText: "Found",
        headers: { location: redirectTo },
        body: `Redirecting...`
      };
    }
  }
  if (isSensitive && !opts?.silent) {
    const tags = [error.unhandled && "[unhandled]", error.fatal && "[fatal]"].filter(Boolean).join(" ");
    console.error(`[request error] ${tags} [${event.method}] ${url}
`, error);
  }
  const headers = {
    "content-type": "application/json",
    // Prevent browser from guessing the MIME types of resources.
    "x-content-type-options": "nosniff",
    // Prevent error page from being embedded in an iframe
    "x-frame-options": "DENY",
    // Prevent browsers from sending the Referer header
    "referrer-policy": "no-referrer",
    // Disable the execution of any js
    "content-security-policy": "script-src 'none'; frame-ancestors 'none';"
  };
  setResponseStatus(event, statusCode, statusMessage);
  if (statusCode === 404 || !getResponseHeader(event, "cache-control")) {
    headers["cache-control"] = "no-cache";
  }
  const body = {
    error: true,
    url: url.href,
    statusCode,
    statusMessage,
    message: isSensitive ? "Server Error" : error.message,
    data: isSensitive ? void 0 : error.data
  };
  return {
    status: statusCode,
    statusText: statusMessage,
    headers,
    body
  };
}

const errorHandlers = [error_default, errorHandler$1];

async function errorHandler(error, event) {
  for (const handler of errorHandlers) {
    try {
      await handler(error, event, { defaultHandler });
      if (event.handled) {
        return; // Response handled
      }
    } catch(error) {
      // Handler itself thrown, log and continue
      console.error(error);
    }
  }
  // H3 will handle fallback
}

function defineRenderHandler(render) {
  const runtimeConfig = useRuntimeConfig();
  return eventHandler(async (event) => {
    const nitroApp = useNitroApp();
    const ctx = { event, render, response: void 0 };
    await nitroApp.hooks.callHook("render:before", ctx);
    if (!ctx.response) {
      if (event.path === `${runtimeConfig.app.baseURL}favicon.ico`) {
        setResponseHeader(event, "Content-Type", "image/x-icon");
        return send(
          event,
          "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
        );
      }
      ctx.response = await ctx.render(event);
      if (!ctx.response) {
        const _currentStatus = getResponseStatus(event);
        setResponseStatus(event, _currentStatus === 200 ? 500 : _currentStatus);
        return send(
          event,
          "No response returned from render handler: " + event.path
        );
      }
    }
    await nitroApp.hooks.callHook("render:response", ctx.response, ctx);
    if (ctx.response.headers) {
      setResponseHeaders(event, ctx.response.headers);
    }
    if (ctx.response.statusCode || ctx.response.statusMessage) {
      setResponseStatus(
        event,
        ctx.response.statusCode,
        ctx.response.statusMessage
      );
    }
    return ctx.response.body;
  });
}

//#region src/runtime/utils/paths.ts
function baseURL() {
	return useRuntimeConfig().app.baseURL;
}
function buildAssetsDir() {
	return useRuntimeConfig().app.buildAssetsDir;
}
function buildAssetsURL(...path) {
	return joinRelativeURL(publicAssetsURL(), buildAssetsDir(), ...path);
}
function publicAssetsURL(...path) {
	const app = useRuntimeConfig().app;
	const publicBase = app.cdnURL || app.baseURL;
	return path.length ? joinRelativeURL(publicBase, ...path) : publicBase;
}

var inlineStyles$o = {
  root: {
    position: 'relative'
  }
};
var classes$2O = {
  root: function root(_ref) {
    var instance = _ref.instance;
    return ['p-autocomplete p-component p-inputwrapper', {
      'p-invalid': instance.$invalid,
      'p-focus': instance.focused,
      'p-inputwrapper-filled': instance.$filled || isNotEmpty(instance.inputValue),
      'p-inputwrapper-focus': instance.focused,
      'p-autocomplete-open': instance.overlayVisible,
      'p-autocomplete-fluid': instance.$fluid
    }];
  },
  pcInputText: 'p-autocomplete-input',
  inputMultiple: function inputMultiple(_ref2) {
    var instance = _ref2.instance,
      props = _ref2.props;
    return ['p-autocomplete-input-multiple', {
      'p-variant-filled': instance.$variant === 'filled',
      'p-disabled': props.disabled
    }];
  },
  clearIcon: 'p-autocomplete-clear-icon',
  chipItem: function chipItem(_ref3) {
    var instance = _ref3.instance,
      i = _ref3.i;
    return ['p-autocomplete-chip-item', {
      'p-focus': instance.focusedMultipleOptionIndex === i
    }];
  },
  pcChip: 'p-autocomplete-chip',
  chipIcon: 'p-autocomplete-chip-icon',
  inputChip: 'p-autocomplete-input-chip',
  loader: 'p-autocomplete-loader',
  dropdown: 'p-autocomplete-dropdown',
  overlay: 'p-autocomplete-overlay p-component',
  listContainer: 'p-autocomplete-list-container',
  list: 'p-autocomplete-list',
  optionGroup: 'p-autocomplete-option-group',
  option: function option(_ref4) {
    var instance = _ref4.instance,
      _option = _ref4.option,
      i = _ref4.i,
      getItemOptions = _ref4.getItemOptions;
    return ['p-autocomplete-option', {
      'p-autocomplete-option-selected': instance.isSelected(_option),
      'p-focus': instance.focusedOptionIndex === instance.getOptionIndex(i, getItemOptions),
      'p-disabled': instance.isOptionDisabled(_option)
    }];
  },
  emptyMessage: 'p-autocomplete-empty-message'
};
var AutoCompleteStyle = BaseStyle.extend({
  name: 'autocomplete',
  style: style$2,
  classes: classes$2O,
  inlineStyles: inlineStyles$o
});

var inlineStyles$n = {
  root: function root(_ref) {
    var props = _ref.props;
    return {
      position: props.appendTo === 'self' ? 'relative' : undefined
    };
  }
};
var classes$2N = {
  root: function root(_ref2) {
    var instance = _ref2.instance,
      props = _ref2.props;
    return ['p-cascadeselect p-component p-inputwrapper', {
      'p-cascadeselect-mobile': instance.queryMatches,
      'p-disabled': props.disabled,
      'p-invalid': instance.$invalid,
      'p-variant-filled': instance.$variant === 'filled',
      'p-focus': instance.focused,
      'p-inputwrapper-filled': instance.$filled,
      'p-inputwrapper-focus': instance.focused || instance.overlayVisible,
      'p-cascadeselect-open': instance.overlayVisible,
      'p-cascadeselect-fluid': instance.$fluid,
      'p-cascadeselect-sm p-inputfield-sm': props.size === 'small',
      'p-cascadeselect-lg p-inputfield-lg': props.size === 'large'
    }];
  },
  label: function label(_ref3) {
    var _instance$label;
    var instance = _ref3.instance,
      props = _ref3.props;
    return ['p-cascadeselect-label', {
      'p-placeholder': instance.label === props.placeholder,
      'p-cascadeselect-label-empty': !instance.$slots['value'] && (instance.label === 'p-emptylabel' || ((_instance$label = instance.label) === null || _instance$label === void 0 ? void 0 : _instance$label.length) === 0)
    }];
  },
  clearIcon: 'p-cascadeselect-clear-icon',
  dropdown: 'p-cascadeselect-dropdown',
  loadingIcon: 'p-cascadeselect-loading-icon',
  dropdownIcon: 'p-cascadeselect-dropdown-icon',
  overlay: function overlay(_ref4) {
    var instance = _ref4.instance;
    return ['p-cascadeselect-overlay p-component', {
      'p-cascadeselect-mobile-active': instance.queryMatches
    }];
  },
  listContainer: 'p-cascadeselect-list-container',
  list: 'p-cascadeselect-list',
  option: function option(_ref5) {
    var instance = _ref5.instance,
      processedOption = _ref5.processedOption;
    return ['p-cascadeselect-option', {
      'p-cascadeselect-option-active': instance.isOptionActive(processedOption),
      'p-cascadeselect-option-selected': instance.isOptionSelected(processedOption),
      'p-focus': instance.isOptionFocused(processedOption),
      'p-disabled': instance.isOptionDisabled(processedOption)
    }];
  },
  optionContent: 'p-cascadeselect-option-content',
  optionText: 'p-cascadeselect-option-text',
  groupIconContainer: 'p-cascadeselect-group-icon-container',
  groupIcon: 'p-cascadeselect-group-icon',
  optionList: 'p-cascadeselect-overlay p-cascadeselect-option-list'
};
var CascadeSelectStyle = BaseStyle.extend({
  name: 'cascadeselect',
  style: style$3,
  classes: classes$2N,
  inlineStyles: inlineStyles$n
});

var classes$2M = {
  root: function root(_ref) {
    var instance = _ref.instance,
      props = _ref.props;
    return ['p-checkbox p-component', {
      'p-checkbox-checked': instance.checked,
      'p-disabled': props.disabled,
      'p-invalid': instance.$pcCheckboxGroup ? instance.$pcCheckboxGroup.$invalid : instance.$invalid,
      'p-variant-filled': instance.$variant === 'filled',
      'p-checkbox-sm p-inputfield-sm': props.size === 'small',
      'p-checkbox-lg p-inputfield-lg': props.size === 'large'
    }];
  },
  box: 'p-checkbox-box',
  indicator: 'p-checkbox-indicator',
  input: 'p-checkbox-input',
  icon: 'p-checkbox-icon'
};
var CheckboxStyle = BaseStyle.extend({
  name: 'checkbox',
  style: style$4,
  classes: classes$2M
});

var classes$2L = {
  root: 'p-checkbox-group p-component'
};
var CheckboxGroupStyle = BaseStyle.extend({
  name: 'checkboxgroup',
  style: style$5,
  classes: classes$2L
});

var classes$2K = {
  root: 'p-colorpicker p-component',
  preview: function preview(_ref) {
    var props = _ref.props;
    return ['p-colorpicker-preview', {
      'p-disabled': props.disabled
    }];
  },
  panel: function panel(_ref2) {
    var instance = _ref2.instance,
      props = _ref2.props;
    return ['p-colorpicker-panel', {
      'p-colorpicker-panel-inline': props.inline,
      'p-disabled': props.disabled,
      'p-invalid': instance.$invalid
    }];
  },
  colorSelector: 'p-colorpicker-color-selector',
  colorBackground: 'p-colorpicker-color-background',
  colorHandle: 'p-colorpicker-color-handle',
  hue: 'p-colorpicker-hue',
  hueHandle: 'p-colorpicker-hue-handle'
};
var ColorPickerStyle = BaseStyle.extend({
  name: 'colorpicker',
  style: style$6,
  classes: classes$2K
});

var inlineStyles$m = {
  root: function root(_ref) {
    var props = _ref.props;
    return {
      position: props.appendTo === 'self' || props.showClear ? 'relative' : undefined
    };
  }
};
var classes$2J = {
  root: function root(_ref2) {
    var instance = _ref2.instance,
      state = _ref2.state;
    return ['p-datepicker p-component p-inputwrapper', {
      'p-invalid': instance.$invalid,
      'p-inputwrapper-filled': instance.$filled,
      'p-inputwrapper-focus': state.focused || state.overlayVisible,
      'p-focus': state.focused || state.overlayVisible,
      'p-datepicker-fluid': instance.$fluid
    }];
  },
  pcInputText: 'p-datepicker-input',
  clearIcon: 'p-datepicker-clear-icon',
  dropdown: 'p-datepicker-dropdown',
  inputIconContainer: 'p-datepicker-input-icon-container',
  inputIcon: 'p-datepicker-input-icon',
  panel: function panel(_ref3) {
    var props = _ref3.props;
    return ['p-datepicker-panel p-component', {
      'p-datepicker-panel-inline': props.inline,
      'p-disabled': props.disabled,
      'p-datepicker-timeonly': props.timeOnly
    }];
  },
  calendarContainer: 'p-datepicker-calendar-container',
  calendar: 'p-datepicker-calendar',
  header: 'p-datepicker-header',
  pcPrevButton: 'p-datepicker-prev-button',
  title: 'p-datepicker-title',
  selectMonth: 'p-datepicker-select-month',
  selectYear: 'p-datepicker-select-year',
  decade: 'p-datepicker-decade',
  pcNextButton: 'p-datepicker-next-button',
  dayView: 'p-datepicker-day-view',
  weekHeader: 'p-datepicker-weekheader p-disabled',
  weekNumber: 'p-datepicker-weeknumber',
  weekLabelContainer: 'p-datepicker-weeklabel-container p-disabled',
  weekDayCell: 'p-datepicker-weekday-cell',
  weekDay: 'p-datepicker-weekday',
  dayCell: function dayCell(_ref4) {
    var date = _ref4.date;
    return ['p-datepicker-day-cell', {
      'p-datepicker-other-month': date.otherMonth,
      'p-datepicker-today': date.today
    }];
  },
  day: function day(_ref5) {
    var instance = _ref5.instance,
      props = _ref5.props,
      state = _ref5.state,
      date = _ref5.date;
    var selectedDayClass = '';
    if (instance.isRangeSelection() && instance.isSelected(date) && date.selectable) {
      var start = typeof state.rawValue[0] === 'string' ? instance.parseValue(state.rawValue[0])[0] : state.rawValue[0];
      var end = typeof state.rawValue[1] === 'string' ? instance.parseValue(state.rawValue[1])[0] : state.rawValue[1];
      selectedDayClass = instance.isDateEquals(start, date) || instance.isDateEquals(end, date) ? 'p-datepicker-day-selected' : 'p-datepicker-day-selected-range';
    }
    return ['p-datepicker-day', {
      'p-datepicker-day-selected': !instance.isRangeSelection() && instance.isSelected(date) && date.selectable,
      'p-disabled': props.disabled || !date.selectable
    }, selectedDayClass];
  },
  monthView: 'p-datepicker-month-view',
  month: function month(_ref6) {
    var instance = _ref6.instance,
      props = _ref6.props,
      _month = _ref6.month,
      index = _ref6.index;
    return ['p-datepicker-month', {
      'p-datepicker-month-selected': instance.isMonthSelected(index),
      'p-disabled': props.disabled || !_month.selectable
    }];
  },
  yearView: 'p-datepicker-year-view',
  year: function year(_ref7) {
    var instance = _ref7.instance,
      props = _ref7.props,
      _year = _ref7.year;
    return ['p-datepicker-year', {
      'p-datepicker-year-selected': instance.isYearSelected(_year.value),
      'p-disabled': props.disabled || !_year.selectable
    }];
  },
  timePicker: 'p-datepicker-time-picker',
  hourPicker: 'p-datepicker-hour-picker',
  pcIncrementButton: 'p-datepicker-increment-button',
  pcDecrementButton: 'p-datepicker-decrement-button',
  separator: 'p-datepicker-separator',
  minutePicker: 'p-datepicker-minute-picker',
  secondPicker: 'p-datepicker-second-picker',
  ampmPicker: 'p-datepicker-ampm-picker',
  buttonbar: 'p-datepicker-buttonbar',
  pcTodayButton: 'p-datepicker-today-button',
  pcClearButton: 'p-datepicker-clear-button'
};
var DatePickerStyle = BaseStyle.extend({
  name: 'datepicker',
  style: style$7,
  classes: classes$2J,
  inlineStyles: inlineStyles$m
});

var classes$2I = {
  root: function root(_ref) {
    var props = _ref.props;
    return ['p-floatlabel', {
      'p-floatlabel-over': props.variant === 'over',
      'p-floatlabel-on': props.variant === 'on',
      'p-floatlabel-in': props.variant === 'in'
    }];
  }
};
var FloatLabelStyle = BaseStyle.extend({
  name: 'floatlabel',
  style: style$8,
  classes: classes$2I
});

var classes$2H = {
  root: 'p-fluid'
};
var FluidStyle = BaseStyle.extend({
  name: 'fluid',
  classes: classes$2H
});

var classes$2G = {
  root: 'p-iconfield'
};
var IconFieldStyle = BaseStyle.extend({
  name: 'iconfield',
  style: style$9,
  classes: classes$2G
});

var classes$2F = {
  root: 'p-iftalabel'
};
var IftaLabelStyle = BaseStyle.extend({
  name: 'iftalabel',
  style: style$a,
  classes: classes$2F
});

var InputColorStyle = BaseStyle.extend({
  name: 'inputcolor',
  style: style$b
});

var classes$2E = {
  root: 'p-inputcolor-area'
};
var InputColorAreaStyle = BaseStyle.extend({
  name: 'inputcolorarea',
  classes: classes$2E
});

var classes$2D = {
  root: 'p-inputcolor-area-background'
};
var InputColorAreaBackgroundStyle = BaseStyle.extend({
  name: 'inputcolorareabackground',
  classes: classes$2D
});

var classes$2C = {
  root: 'p-inputcolor-area-handle'
};
var InputColorAreaHandleStyle = BaseStyle.extend({
  name: 'inputcolorareahandle',
  classes: classes$2C
});

var classes$2B = {
  root: 'p-inputcolor-eye-dropper'
};
var InputColorEyeDropperStyle = BaseStyle.extend({
  name: 'inputcoloreyedropper',
  classes: classes$2B
});

var classes$2A = {
  root: 'p-inputcolor-input'
};
var InputColorInputStyle = BaseStyle.extend({
  name: 'inputcolorinput',
  classes: classes$2A
});

var classes$2z = {
  root: function root(context) {
    return ['p-inputcolor-slider', context.orientation === 'horizontal' ? 'p-inputcolor-slider-horizontal' : 'p-inputcolor-slider-vertical'];
  }
};
var InputColorSliderStyle = BaseStyle.extend({
  name: 'inputcolorslider',
  classes: classes$2z
});

var classes$2y = {
  root: 'p-inputcolor-slider-handle'
};
var InputColorSliderHandleStyle = BaseStyle.extend({
  name: 'inputcolorsliderhandle',
  classes: classes$2y
});

var classes$2x = {
  root: 'p-inputcolor-slider-track'
};
var InputColorSliderTrackStyle = BaseStyle.extend({
  name: 'inputcolorslidertrack',
  classes: classes$2x
});

var classes$2w = {
  root: 'p-inputcolor-swatch'
};
var InputColorSwatchStyle = BaseStyle.extend({
  name: 'inputcolorswatch',
  classes: classes$2w
});

var classes$2v = {
  root: 'p-inputcolor-swatch-background'
};
var InputColorSwatchBackgroundStyle = BaseStyle.extend({
  name: 'inputcolorswatchbackground',
  classes: classes$2v
});

var classes$2u = {
  root: 'p-inputcolor-transparency-grid'
};
var InputColorTransparencyGridStyle = BaseStyle.extend({
  name: 'inputcolortransparencygrid',
  classes: classes$2u
});

var classes$2t = {
  root: 'p-inputgroup'
};
var InputGroupStyle = BaseStyle.extend({
  name: 'inputgroup',
  style: style$c,
  classes: classes$2t
});

var classes$2s = {
  root: 'p-inputgroupaddon'
};
var InputGroupAddonStyle = BaseStyle.extend({
  name: 'inputgroupaddon',
  classes: classes$2s
});

var classes$2r = {
  root: 'p-inputicon'
};
var InputIconStyle = BaseStyle.extend({
  name: 'inputicon',
  classes: classes$2r
});

var classes$2q = {
  root: function root(_ref) {
    var instance = _ref.instance;
    return ['p-inputmask', {
      'p-filled': instance.$filled
    }];
  }
};
var InputMaskStyle = BaseStyle.extend({
  name: 'inputmask',
  classes: classes$2q
});

var classes$2p = {
  root: function root(_ref) {
    var instance = _ref.instance,
      props = _ref.props;
    return ['p-inputnumber p-component p-inputwrapper', {
      'p-invalid': instance.$invalid,
      'p-inputwrapper-filled': instance.$filled || props.allowEmpty === false,
      'p-inputwrapper-focus': instance.focused,
      'p-inputnumber-stacked': props.showButtons && props.buttonLayout === 'stacked',
      'p-inputnumber-horizontal': props.showButtons && props.buttonLayout === 'horizontal',
      'p-inputnumber-vertical': props.showButtons && props.buttonLayout === 'vertical',
      'p-inputnumber-fluid': instance.$fluid
    }];
  },
  pcInputText: 'p-inputnumber-input',
  clearIcon: 'p-inputnumber-clear-icon',
  buttonGroup: 'p-inputnumber-button-group',
  incrementButton: function incrementButton(_ref2) {
    var instance = _ref2.instance,
      props = _ref2.props;
    return ['p-inputnumber-button p-inputnumber-increment-button', {
      'p-disabled': props.showButtons && props.max !== null && instance.maxBoundry()
    }];
  },
  decrementButton: function decrementButton(_ref3) {
    var instance = _ref3.instance,
      props = _ref3.props;
    return ['p-inputnumber-button p-inputnumber-decrement-button', {
      'p-disabled': props.showButtons && props.min !== null && instance.minBoundry()
    }];
  }
};
var InputNumberStyle = BaseStyle.extend({
  name: 'inputnumber',
  style: style$d,
  classes: classes$2p
});

var classes$2o = {
  root: 'p-inputotp p-component',
  pcInputText: 'p-inputotp-input'
};
var InputOtpStyle = BaseStyle.extend({
  name: 'inputotp',
  style: style$e,
  classes: classes$2o
});

var classes$2n = {
  root: 'p-inputpassword p-component'
};
var InputPasswordStyle = BaseStyle.extend({
  name: 'inputpassword',
  classes: classes$2n
});

var classes$2m = {
  root: function root(_ref) {
    var instance = _ref.instance,
      props = _ref.props;
    return ['p-inputtags p-component p-inputwrapper', {
      'p-disabled': props.disabled,
      'p-invalid': instance.$invalid,
      'p-focus': instance.focused,
      'p-inputwrapper-filled': instance.$filled,
      'p-inputwrapper-focus': instance.focused,
      'p-inputtags-fluid': instance.$fluid,
      'p-variant-filled': instance.$variant === 'filled'
    }];
  },
  item: function item(_ref2) {
    var instance = _ref2.instance,
      i = _ref2.i;
    return ['p-inputtags-item', {
      'p-focus': instance.focusedItemIndex === i
    }];
  },
  chipIcon: 'p-inputtags-chip-icon',
  pcAutoComplete: 'p-inputtags-autocomplete'
};
var InputTagsStyle = BaseStyle.extend({
  name: 'inputtags',
  style: style$f,
  classes: classes$2m
});

var classes$2l = {
  root: function root(_ref) {
    var instance = _ref.instance,
      props = _ref.props;
    return ['p-inputtext p-component', {
      'p-filled': instance.$filled,
      'p-inputtext-sm p-inputfield-sm': props.size === 'small',
      'p-inputtext-lg p-inputfield-lg': props.size === 'large',
      'p-invalid': instance.$invalid,
      'p-variant-filled': instance.$variant === 'filled',
      'p-inputtext-fluid': instance.$fluid
    }];
  }
};
var InputTextStyle = BaseStyle.extend({
  name: 'inputtext',
  style: style$g,
  classes: classes$2l
});

var classes$2k = {
  root: function root(_ref) {
    var instance = _ref.instance,
      props = _ref.props;
    return ['p-knob p-component', {
      'p-disabled': props.disabled,
      'p-invalid': instance.$invalid
    }];
  },
  range: 'p-knob-range',
  value: 'p-knob-value',
  text: 'p-knob-text'
};
var KnobStyle = BaseStyle.extend({
  name: 'knob',
  style: style$h,
  classes: classes$2k
});

var classes$2j = {
  root: 'p-label p-component'
};
var LabelStyle = BaseStyle.extend({
  name: 'label',
  style: style$i,
  classes: classes$2j
});

var classes$2i = {
  root: function root(_ref) {
    var instance = _ref.instance,
      props = _ref.props;
    return ['p-listbox p-component', {
      'p-listbox-striped': props.striped,
      'p-disabled': props.disabled,
      'p-listbox-fluid': props.fluid,
      'p-invalid': instance.$invalid
    }];
  },
  header: 'p-listbox-header',
  pcFilter: 'p-listbox-filter',
  listContainer: 'p-listbox-list-container',
  list: 'p-listbox-list',
  optionGroup: 'p-listbox-option-group',
  option: function option(_ref2) {
    var instance = _ref2.instance,
      props = _ref2.props,
      _option = _ref2.option,
      index = _ref2.index,
      getItemOptions = _ref2.getItemOptions;
    return ['p-listbox-option', {
      'p-listbox-option-selected': instance.isSelected(_option) && props.highlightOnSelect,
      'p-focus': instance.focusedOptionIndex === instance.getOptionIndex(index, getItemOptions),
      'p-disabled': instance.isOptionDisabled(_option)
    }];
  },
  optionCheckIcon: 'p-listbox-option-check-icon',
  optionBlankIcon: 'p-listbox-option-blank-icon',
  emptyMessage: 'p-listbox-empty-message'
};
var ListboxStyle = BaseStyle.extend({
  name: 'listbox',
  style: style$j,
  classes: classes$2i
});

var inlineStyles$l = {
  root: function root(_ref) {
    var props = _ref.props;
    return {
      position: props.appendTo === 'self' ? 'relative' : undefined
    };
  }
};
var classes$2h = {
  root: function root(_ref2) {
    var instance = _ref2.instance,
      props = _ref2.props;
    return ['p-multiselect p-component p-inputwrapper', {
      'p-multiselect-display-chip': props.display === 'chip',
      'p-disabled': props.disabled,
      'p-invalid': instance.$invalid,
      'p-variant-filled': instance.$variant === 'filled',
      'p-focus': instance.focused,
      'p-inputwrapper-filled': instance.$filled,
      'p-inputwrapper-focus': instance.focused || instance.overlayVisible,
      'p-multiselect-open': instance.overlayVisible,
      'p-multiselect-fluid': instance.$fluid,
      'p-multiselect-sm p-inputfield-sm': props.size === 'small',
      'p-multiselect-lg p-inputfield-lg': props.size === 'large'
    }];
  },
  labelContainer: 'p-multiselect-label-container',
  label: function label(_ref3) {
    var instance = _ref3.instance,
      props = _ref3.props;
    return ['p-multiselect-label', {
      'p-placeholder': instance.label === props.placeholder,
      'p-multiselect-label-empty': !props.placeholder && !instance.$filled
    }];
  },
  clearIcon: 'p-multiselect-clear-icon',
  chipItem: 'p-multiselect-chip-item',
  pcChip: 'p-multiselect-chip',
  chipIcon: 'p-multiselect-chip-icon',
  dropdown: 'p-multiselect-dropdown',
  loadingIcon: 'p-multiselect-loading-icon',
  dropdownIcon: 'p-multiselect-dropdown-icon',
  overlay: 'p-multiselect-overlay p-component',
  header: 'p-multiselect-header',
  pcFilterContainer: 'p-multiselect-filter-container',
  pcFilter: 'p-multiselect-filter',
  listContainer: 'p-multiselect-list-container',
  list: 'p-multiselect-list',
  optionGroup: 'p-multiselect-option-group',
  option: function option(_ref4) {
    var instance = _ref4.instance,
      _option = _ref4.option,
      index = _ref4.index,
      getItemOptions = _ref4.getItemOptions,
      props = _ref4.props;
    return ['p-multiselect-option', {
      'p-multiselect-option-selected': instance.isSelected(_option) && props.highlightOnSelect,
      'p-focus': instance.focusedOptionIndex === instance.getOptionIndex(index, getItemOptions),
      'p-disabled': instance.isOptionDisabled(_option)
    }];
  },
  emptyMessage: 'p-multiselect-empty-message'
};
var MultiSelectStyle = BaseStyle.extend({
  name: 'multiselect',
  style: style$k,
  classes: classes$2h,
  inlineStyles: inlineStyles$l
});

var inlineStyles$k = {
  root: function root(_ref) {
    var props = _ref.props;
    return {
      position: props.appendTo === 'self' ? 'relative' : undefined
    };
  }
};
var classes$2g = {
  root: function root(_ref2) {
    var instance = _ref2.instance;
    return ['p-password p-component p-inputwrapper', {
      'p-inputwrapper-filled': instance.$filled,
      'p-inputwrapper-focus': instance.focused,
      'p-password-fluid': instance.$fluid
    }];
  },
  pcInputText: 'p-password-input',
  maskIcon: 'p-password-toggle-mask-icon p-password-mask-icon',
  unmaskIcon: 'p-password-toggle-mask-icon p-password-unmask-icon',
  clearIcon: 'p-password-clear-icon',
  overlay: 'p-password-overlay p-component',
  content: 'p-password-content',
  meter: 'p-password-meter',
  meterLabel: function meterLabel(_ref3) {
    var instance = _ref3.instance;
    return "p-password-meter-label ".concat(instance.meter ? 'p-password-meter-' + instance.meter.strength : '');
  },
  meterText: 'p-password-meter-text'
};
var PasswordStyle = BaseStyle.extend({
  name: 'password',
  style: style$l,
  classes: classes$2g,
  inlineStyles: inlineStyles$k
});

var classes$2f = {
  root: function root(_ref) {
    var instance = _ref.instance,
      props = _ref.props;
    return ['p-radiobutton p-component', {
      'p-radiobutton-checked': instance.checked,
      'p-disabled': props.disabled,
      'p-invalid': instance.$pcRadioButtonGroup ? instance.$pcRadioButtonGroup.$invalid : instance.$invalid,
      'p-variant-filled': instance.$variant === 'filled',
      'p-radiobutton-sm p-inputfield-sm': props.size === 'small',
      'p-radiobutton-lg p-inputfield-lg': props.size === 'large'
    }];
  },
  box: 'p-radiobutton-box',
  input: 'p-radiobutton-input',
  icon: 'p-radiobutton-icon'
};
var RadioButtonStyle = BaseStyle.extend({
  name: 'radiobutton',
  style: style$m,
  classes: classes$2f
});

var classes$2e = {
  root: 'p-radiobutton-group p-component'
};
var RadioButtonGroupStyle = BaseStyle.extend({
  name: 'radiobuttongroup',
  style: style$n,
  classes: classes$2e
});

var classes$2d = {
  root: function root(_ref) {
    var props = _ref.props;
    return ['p-rating p-component', {
      'p-disabled': props.disabled,
      'p-readonly': props.readonly
    }];
  },
  option: 'p-rating-option',
  onIcon: 'p-rating-on-icon',
  offIcon: 'p-rating-off-icon'
};
var RatingStyle = BaseStyle.extend({
  name: 'rating',
  style: style$o,
  classes: classes$2d
});

var classes$2c = {
  root: function root(_ref) {
    var instance = _ref.instance,
      props = _ref.props,
      state = _ref.state;
    return ['p-select p-component p-inputwrapper', {
      'p-disabled': props.disabled,
      'p-invalid': instance.$invalid,
      'p-variant-filled': instance.$variant === 'filled',
      'p-focus': state.focused,
      'p-inputwrapper-filled': instance.$filled,
      'p-inputwrapper-focus': state.focused || state.overlayVisible,
      'p-select-open': state.overlayVisible,
      'p-select-fluid': instance.$fluid,
      'p-select-sm p-inputfield-sm': props.size === 'small',
      'p-select-lg p-inputfield-lg': props.size === 'large'
    }];
  },
  label: function label(_ref2) {
    var _instance$label;
    var instance = _ref2.instance,
      props = _ref2.props;
    return ['p-select-label', {
      'p-placeholder': !props.editable && instance.label === props.placeholder,
      'p-select-label-empty': !props.editable && !instance.$slots['value'] && (instance.label === 'p-emptylabel' || ((_instance$label = instance.label) === null || _instance$label === void 0 ? void 0 : _instance$label.length) === 0)
    }];
  },
  clearIcon: 'p-select-clear-icon',
  dropdown: 'p-select-dropdown',
  loadingicon: 'p-select-loading-icon',
  dropdownIcon: 'p-select-dropdown-icon',
  overlay: 'p-select-overlay p-component',
  header: 'p-select-header',
  pcFilter: 'p-select-filter',
  listContainer: 'p-select-list-container',
  list: 'p-select-list',
  optionGroup: 'p-select-option-group',
  optionGroupLabel: 'p-select-option-group-label',
  option: function option(_ref3) {
    var instance = _ref3.instance,
      props = _ref3.props,
      state = _ref3.state,
      _option = _ref3.option,
      focusedOption = _ref3.focusedOption;
    return ['p-select-option', {
      'p-select-option-selected': instance.isSelected(_option) && props.highlightOnSelect && !props.multiple && !props.checkmark,
      'p-focus': state.focusedOptionIndex === focusedOption,
      'p-disabled': instance.isOptionDisabled(_option)
    }];
  },
  optionLabel: 'p-select-option-label',
  optionCheckIcon: 'p-select-option-check-icon',
  optionBlankIcon: 'p-select-option-blank-icon',
  emptyMessage: 'p-select-empty-message'
};
var SelectStyle = BaseStyle.extend({
  name: 'select',
  style: style$p,
  classes: classes$2c
});

var classes$2b = {
  root: function root(_ref) {
    var props = _ref.props,
      instance = _ref.instance;
    return ['p-selectbutton p-component', {
      'p-invalid': instance.$invalid,
      // @todo: check
      'p-selectbutton-fluid': props.fluid
    }];
  }
};
var SelectButtonStyle = BaseStyle.extend({
  name: 'selectbutton',
  style: style$q,
  classes: classes$2b
});

function _typeof$4(o) { "@babel/helpers - typeof"; return _typeof$4 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof$4(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), true).forEach(function (r) { _defineProperty$4(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty$4(e, r, t) { return (r = _toPropertyKey$4(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: true, configurable: true, writable: true }) : e[r] = t, e; }
function _toPropertyKey$4(t) { var i = _toPrimitive$4(t, "string"); return "symbol" == _typeof$4(i) ? i : i + ""; }
function _toPrimitive$4(t, r) { if ("object" != _typeof$4(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r); if ("object" != _typeof$4(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var inlineStyles$j = {
  root: {
    display: 'flex',
    position: 'relative',
    'touch-action': 'none'
  },
  track: {
    display: 'block',
    'flex-grow': 1,
    position: 'relative'
  },
  range: function range(_ref) {
    var instance = _ref.instance;
    if (instance.isRange()) {
      var _instance$values;
      var vals = (_instance$values = instance.values()) !== null && _instance$values !== void 0 ? _instance$values : [0, 0];
      var startPercent = instance.getValuePercent(Math.min(vals[0], vals[1]));
      var endPercent = instance.getValuePercent(Math.max(vals[0], vals[1]));
      var sizePercent = Math.max(endPercent - startPercent, 0);
      if (instance.isHorizontal()) {
        return {
          position: 'absolute',
          'inset-inline-start': startPercent + '%',
          width: sizePercent + '%'
        };
      } else {
        return {
          position: 'absolute',
          bottom: startPercent + '%',
          height: sizePercent + '%'
        };
      }
    } else {
      var percent = instance.getValuePercent(instance.getHandleValue(0));
      if (instance.isHorizontal()) {
        return {
          position: 'absolute',
          width: percent + '%'
        };
      } else {
        return {
          position: 'absolute',
          bottom: '0',
          height: percent + '%'
        };
      }
    }
  },
  handle: function handle(_ref2) {
    var instance = _ref2.instance,
      index = _ref2.index;
    var i = index !== null && index !== void 0 ? index : 0;
    var handleValue = instance.getHandleValue(i);
    var percent = instance.getValuePercent(handleValue);
    var disabled = instance.isHandleDisabled(i);
    var base = disabled ? {
      cursor: 'default',
      'pointer-events': 'none'
    } : {};
    if (instance.isHorizontal()) {
      return _objectSpread(_objectSpread({}, base), {}, {
        position: 'absolute',
        'inset-inline-start': percent + '%',
        translate: '-50% 0'
      });
    } else {
      return _objectSpread(_objectSpread({}, base), {}, {
        position: 'absolute',
        bottom: percent + '%',
        translate: '0 50%'
      });
    }
  },
  startHandler: function startHandler(_ref3) {
    var instance = _ref3.instance;
    var handleValue = instance.getHandleValue(0);
    var percent = instance.getValuePercent(handleValue);
    var disabled = instance.isHandleDisabled(0);
    var base = disabled ? {
      cursor: 'default',
      'pointer-events': 'none'
    } : {};
    if (instance.isHorizontal()) {
      return _objectSpread(_objectSpread({}, base), {}, {
        position: 'absolute',
        'inset-inline-start': percent + '%',
        translate: '-50% 0'
      });
    } else {
      return _objectSpread(_objectSpread({}, base), {}, {
        position: 'absolute',
        bottom: percent + '%',
        translate: '0 50%'
      });
    }
  },
  endHandler: function endHandler(_ref4) {
    var instance = _ref4.instance;
    var handleValue = instance.getHandleValue(1);
    var percent = instance.getValuePercent(handleValue);
    var disabled = instance.isHandleDisabled(1);
    var base = disabled ? {
      cursor: 'default',
      'pointer-events': 'none'
    } : {};
    if (instance.isHorizontal()) {
      return _objectSpread(_objectSpread({}, base), {}, {
        position: 'absolute',
        'inset-inline-start': percent + '%',
        translate: '-50% 0'
      });
    } else {
      return _objectSpread(_objectSpread({}, base), {}, {
        position: 'absolute',
        bottom: percent + '%',
        translate: '0 50%'
      });
    }
  }
};
var classes$2a = {
  root: function root(_ref5) {
    var props = _ref5.props;
    return ['p-slider p-component', {
      'p-disabled': props.disabled,
      'p-slider-horizontal': props.orientation === 'horizontal',
      'p-slider-vertical': props.orientation === 'vertical'
    }];
  },
  track: 'p-slider-track',
  range: 'p-slider-range',
  handle: 'p-slider-handle',
  input: 'p-slider-input'
};
var SliderStyle = BaseStyle.extend({
  name: 'slider',
  style: style$r,
  classes: classes$2a,
  inlineStyles: inlineStyles$j
});

var classes$29 = {
  root: function root(_ref) {
    var instance = _ref.instance,
      props = _ref.props;
    return ['p-textarea p-component', {
      'p-filled': instance.$filled,
      'p-textarea-resizable ': props.autoResize,
      'p-textarea-sm p-inputfield-sm': props.size === 'small',
      'p-textarea-lg p-inputfield-lg': props.size === 'large',
      'p-invalid': instance.$invalid,
      'p-variant-filled': instance.$variant === 'filled',
      'p-textarea-fluid': instance.$fluid
    }];
  }
};
var TextareaStyle = BaseStyle.extend({
  name: 'textarea',
  style: style$s,
  classes: classes$29
});

var classes$28 = {
  root: function root(_ref) {
    var instance = _ref.instance,
      props = _ref.props;
    return ['p-togglebutton p-component', {
      'p-togglebutton-checked': instance.active,
      'p-invalid': instance.$invalid,
      'p-togglebutton-fluid': props.fluid,
      'p-togglebutton-sm p-inputfield-sm': props.size === 'small',
      'p-togglebutton-lg p-inputfield-lg': props.size === 'large'
    }];
  },
  content: 'p-togglebutton-content',
  icon: 'p-togglebutton-icon',
  label: 'p-togglebutton-label'
};
var ToggleButtonStyle = BaseStyle.extend({
  name: 'togglebutton',
  style: style$t,
  classes: classes$28
});

var inlineStyles$i = {
  root: {
    position: 'relative'
  }
};
var classes$27 = {
  root: function root(_ref) {
    var instance = _ref.instance,
      props = _ref.props;
    return ['p-toggleswitch p-component', {
      'p-toggleswitch-checked': instance.checked,
      'p-disabled': props.disabled,
      'p-invalid': instance.$invalid
    }];
  },
  input: 'p-toggleswitch-input',
  slider: 'p-toggleswitch-slider',
  handle: 'p-toggleswitch-handle'
};
var ToggleSwitchStyle = BaseStyle.extend({
  name: 'toggleswitch',
  style: style$u,
  classes: classes$27,
  inlineStyles: inlineStyles$i
});

var inlineStyles$h = {
  root: function root(_ref) {
    var props = _ref.props;
    return {
      position: props.appendTo === 'self' ? 'relative' : undefined
    };
  }
};
var classes$26 = {
  root: function root(_ref2) {
    var instance = _ref2.instance,
      props = _ref2.props;
    return ['p-treeselect p-component p-inputwrapper', {
      'p-treeselect-display-chip': props.display === 'chip',
      'p-disabled': props.disabled,
      'p-invalid': instance.$invalid,
      'p-focus': instance.focused,
      'p-variant-filled': instance.$variant === 'filled',
      'p-inputwrapper-filled': instance.$filled,
      'p-inputwrapper-focus': instance.focused || instance.overlayVisible,
      'p-treeselect-open': instance.overlayVisible,
      'p-treeselect-fluid': instance.$fluid,
      'p-treeselect-sm p-inputfield-sm': props.size === 'small',
      'p-treeselect-lg p-inputfield-lg': props.size === 'large'
    }];
  },
  labelContainer: 'p-treeselect-label-container',
  label: function label(_ref3) {
    var instance = _ref3.instance,
      props = _ref3.props;
    return ['p-treeselect-label', {
      'p-placeholder': instance.label === props.placeholder,
      'p-treeselect-label-empty': !props.placeholder && instance.emptyValue
    }];
  },
  clearIcon: 'p-treeselect-clear-icon',
  chip: 'p-treeselect-chip-item',
  pcChip: 'p-treeselect-chip',
  dropdown: 'p-treeselect-dropdown',
  dropdownIcon: 'p-treeselect-dropdown-icon',
  panel: 'p-treeselect-overlay p-component',
  treeContainer: 'p-treeselect-tree-container',
  emptyMessage: 'p-treeselect-empty-message'
};
var TreeSelectStyle = BaseStyle.extend({
  name: 'treeselect',
  style: style$v,
  classes: classes$26,
  inlineStyles: inlineStyles$h
});

function _typeof$3(o) { "@babel/helpers - typeof"; return _typeof$3 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof$3(o); }
function _defineProperty$3(e, r, t) { return (r = _toPropertyKey$3(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: true, configurable: true, writable: true }) : e[r] = t, e; }
function _toPropertyKey$3(t) { var i = _toPrimitive$3(t, "string"); return "symbol" == _typeof$3(i) ? i : i + ""; }
function _toPrimitive$3(t, r) { if ("object" != _typeof$3(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r); if ("object" != _typeof$3(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var classes$25 = {
  root: function root(_ref) {
    var instance = _ref.instance,
      props = _ref.props;
    return ['p-button p-component', _defineProperty$3(_defineProperty$3(_defineProperty$3(_defineProperty$3(_defineProperty$3(_defineProperty$3(_defineProperty$3(_defineProperty$3({
      'p-button-icon-only': props.iconOnly || instance.hasIcon && !props.label && !props.badge,
      'p-button-vertical': (props.iconPos === 'top' || props.iconPos === 'bottom') && props.label,
      'p-button-loading': props.loading,
      'p-button-link': props.link || props.variant === 'link'
    }, "p-button-".concat(props.severity), props.severity), 'p-button-raised', props.raised), 'p-button-rounded', props.rounded), 'p-button-text', props.text || props.variant === 'text'), 'p-button-outlined', props.outlined || props.variant === 'outlined'), 'p-button-sm', props.size === 'small'), 'p-button-lg', props.size === 'large'), 'p-button-fluid', instance.hasFluid)];
  },
  loadingIcon: 'p-button-loading-icon',
  icon: function icon(_ref3) {
    var props = _ref3.props;
    return ['p-button-icon', _defineProperty$3({}, "p-button-icon-".concat(props.iconPos), props.label)];
  },
  label: 'p-button-label'
};
var ButtonStyle = BaseStyle.extend({
  name: 'button',
  style: style$w,
  classes: classes$25
});

var classes$24 = {
  root: 'p-buttongroup p-component'
};
var ButtonGroupStyle = BaseStyle.extend({
  name: 'buttongroup',
  style: style$x,
  classes: classes$24
});

function _typeof$2(o) { "@babel/helpers - typeof"; return _typeof$2 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof$2(o); }
function _defineProperty$2(e, r, t) { return (r = _toPropertyKey$2(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: true, configurable: true, writable: true }) : e[r] = t, e; }
function _toPropertyKey$2(t) { var i = _toPrimitive$2(t, "string"); return "symbol" == _typeof$2(i) ? i : i + ""; }
function _toPrimitive$2(t, r) { if ("object" != _typeof$2(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r); if ("object" != _typeof$2(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

/* Direction */
var inlineStyles$g = {
  root: function root(_ref) {
    var props = _ref.props;
    return {
      alignItems: (props.direction === 'up' || props.direction === 'down') && 'center',
      justifyContent: (props.direction === 'left' || props.direction === 'right') && 'center',
      flexDirection: props.direction === 'up' ? 'column-reverse' : props.direction === 'down' ? 'column' : props.direction === 'left' ? 'row-reverse' : props.direction === 'right' ? 'row' : null
    };
  },
  list: function list(_ref2) {
    var props = _ref2.props;
    return {
      flexDirection: props.direction === 'up' ? 'column-reverse' : props.direction === 'down' ? 'column' : props.direction === 'left' ? 'row-reverse' : props.direction === 'right' ? 'row' : null
    };
  }
};
var classes$23 = {
  root: function root(_ref3) {
    var instance = _ref3.instance,
      props = _ref3.props;
    return ["p-speeddial p-component p-speeddial-".concat(props.type), _defineProperty$2(_defineProperty$2(_defineProperty$2({}, "p-speeddial-direction-".concat(props.direction), props.type !== 'circle'), 'p-speeddial-open', instance.d_visible), 'p-disabled', props.disabled)];
  },
  pcButton: function pcButton(_ref5) {
    var props = _ref5.props;
    return ['p-speeddial-button', {
      'p-speeddial-rotate': props.rotateAnimation && !props.hideIcon
    }];
  },
  list: 'p-speeddial-list',
  item: function item(_ref6) {
    var _item = _ref6.item;
    return ['p-speeddial-item', {
      'p-disabled': _item && (typeof _item.disabled === 'function' ? _item.disabled() : _item.disabled)
    }];
  },
  action: 'p-speeddial-action',
  actionIcon: 'p-speeddial-action-icon',
  mask: 'p-speeddial-mask p-overlay-mask'
};
var SpeedDialStyle = BaseStyle.extend({
  name: 'speeddial',
  style: style$y,
  classes: classes$23,
  inlineStyles: inlineStyles$g
});

var classes$22 = {
  root: function root(_ref) {
    var instance = _ref.instance,
      props = _ref.props;
    return ['p-splitbutton p-component', {
      'p-splitbutton-raised': props.raised,
      'p-splitbutton-rounded': props.rounded,
      'p-splitbutton-fluid': instance.hasFluid
    }];
  },
  pcButton: 'p-splitbutton-button',
  pcDropdown: 'p-splitbutton-dropdown'
};
var SplitButtonStyle = BaseStyle.extend({
  name: 'splitbutton',
  style: style$z,
  classes: classes$22
});

var ColumnStyle = BaseStyle.extend({
  name: 'column'
});

var RowStyle = BaseStyle.extend({
  name: 'row'
});

var ColumnGroupStyle = BaseStyle.extend({
  name: 'columngroup'
});

var classes$21 = {
  root: function root(_ref) {
    var props = _ref.props;
    return ['p-datatable p-component', {
      'p-datatable-hoverable': props.rowHover || props.selectionMode,
      'p-datatable-resizable': props.resizableColumns,
      'p-datatable-resizable-fit': props.resizableColumns && props.columnResizeMode === 'fit',
      'p-datatable-scrollable': props.scrollable,
      'p-datatable-flex-scrollable': props.scrollable && props.scrollHeight === 'flex',
      'p-datatable-striped': props.stripedRows,
      'p-datatable-gridlines': props.showGridlines,
      'p-datatable-sm': props.size === 'small',
      'p-datatable-lg': props.size === 'large'
    }];
  },
  mask: 'p-datatable-mask p-overlay-mask',
  loadingIcon: 'p-datatable-loading-icon',
  header: 'p-datatable-header',
  pcPaginator: function pcPaginator(_ref2) {
    var position = _ref2.position;
    return 'p-datatable-paginator-' + position;
  },
  tableContainer: 'p-datatable-table-container',
  table: function table(_ref3) {
    var props = _ref3.props;
    return ['p-datatable-table', {
      'p-datatable-scrollable-table': props.scrollable,
      'p-datatable-resizable-table': props.resizableColumns,
      'p-datatable-resizable-table-fit': props.resizableColumns && props.columnResizeMode === 'fit'
    }];
  },
  thead: 'p-datatable-thead',
  headerCell: function headerCell(_ref4) {
    var instance = _ref4.instance,
      props = _ref4.props,
      column = _ref4.column;
    return column && !instance.columnProp('hidden') && (props.rowGroupMode !== 'subheader' || props.groupRowsBy !== instance.columnProp(column, 'field')) ? ['p-datatable-header-cell', {
      'p-datatable-frozen-column': instance.columnProp('frozen')
    }] : ['p-datatable-header-cell', {
      'p-datatable-sortable-column': instance.columnProp('sortable'),
      'p-datatable-resizable-column': instance.resizableColumns,
      'p-datatable-column-sorted': instance.isColumnSorted(),
      'p-datatable-frozen-column': instance.columnProp('frozen'),
      'p-datatable-reorderable-column': props.reorderableColumns
    }];
  },
  columnResizer: 'p-datatable-column-resizer',
  columnHeaderContent: 'p-datatable-column-header-content',
  columnTitle: 'p-datatable-column-title',
  columnFooter: 'p-datatable-column-footer',
  sortIcon: 'p-datatable-sort-icon',
  pcSortBadge: 'p-datatable-sort-badge',
  filter: function filter(_ref5) {
    var props = _ref5.props;
    return ['p-datatable-filter', {
      'p-datatable-inline-filter': props.display === 'row',
      'p-datatable-popover-filter': props.display === 'menu'
    }];
  },
  filterElementContainer: 'p-datatable-filter-element-container',
  pcColumnFilterButton: 'p-datatable-column-filter-button',
  pcColumnFilterClearButton: 'p-datatable-column-filter-clear-button',
  filterOverlay: function filterOverlay(_ref6) {
    var props = _ref6.props;
    return ['p-datatable-filter-overlay p-component', {
      'p-datatable-filter-overlay-popover': props.display === 'menu'
    }];
  },
  filterConstraintList: 'p-datatable-filter-constraint-list',
  filterConstraint: function filterConstraint(_ref7) {
    var instance = _ref7.instance,
      matchMode = _ref7.matchMode;
    return ['p-datatable-filter-constraint', {
      'p-datatable-filter-constraint-selected': matchMode && instance.isRowMatchModeSelected(matchMode.value)
    }];
  },
  filterConstraintSeparator: 'p-datatable-filter-constraint-separator',
  filterOperator: 'p-datatable-filter-operator',
  pcFilterOperatorDropdown: 'p-datatable-filter-operator-dropdown',
  filterRuleList: 'p-datatable-filter-rule-list',
  filterRule: 'p-datatable-filter-rule',
  pcFilterConstraintDropdown: 'p-datatable-filter-constraint-dropdown',
  pcFilterRemoveRuleButton: 'p-datatable-filter-remove-rule-button',
  pcFilterAddRuleButton: 'p-datatable-filter-add-rule-button',
  filterButtonbar: 'p-datatable-filter-buttonbar',
  pcFilterClearButton: 'p-datatable-filter-clear-button',
  pcFilterApplyButton: 'p-datatable-filter-apply-button',
  tbody: function tbody(_ref8) {
    var props = _ref8.props;
    return props.frozenRow ? 'p-datatable-tbody p-datatable-frozen-tbody' : 'p-datatable-tbody';
  },
  rowGroupHeader: 'p-datatable-row-group-header',
  rowToggleButton: 'p-datatable-row-toggle-button',
  rowToggleIcon: 'p-datatable-row-toggle-icon',
  row: function row(_ref9) {
    var instance = _ref9.instance,
      props = _ref9.props,
      index = _ref9.index,
      columnSelectionMode = _ref9.columnSelectionMode;
    var rowStyleClass = [];
    if (props.selectionMode) {
      rowStyleClass.push('p-datatable-selectable-row');
    }
    rowStyleClass.push({
      'p-datatable-row-selected': columnSelectionMode ? instance.selected && instance.$parentInstance.$parentInstance.highlightOnSelect : instance.selected,
      'p-datatable-contextmenu-row-selected': instance.contextMenuSelected
    });
    rowStyleClass.push(index % 2 === 0 ? 'p-row-even' : 'p-row-odd');
    return rowStyleClass;
  },
  rowExpansion: 'p-datatable-row-expansion',
  rowGroupFooter: 'p-datatable-row-group-footer',
  emptyMessage: 'p-datatable-empty-message',
  bodyCell: function bodyCell(_ref0) {
    var instance = _ref0.instance;
    return [{
      'p-datatable-frozen-column': instance.columnProp('frozen')
    }];
  },
  reorderableRowHandle: 'p-datatable-reorderable-row-handle',
  pcRowEditorInit: 'p-datatable-row-editor-init',
  pcRowEditorSave: 'p-datatable-row-editor-save',
  pcRowEditorCancel: 'p-datatable-row-editor-cancel',
  tfoot: 'p-datatable-tfoot',
  footerCell: function footerCell(_ref1) {
    var instance = _ref1.instance;
    return [{
      'p-datatable-frozen-column': instance.columnProp('frozen')
    }];
  },
  virtualScrollerSpacer: 'p-datatable-virtualscroller-spacer',
  footer: 'p-datatable-footer',
  columnResizeIndicator: 'p-datatable-column-resize-indicator',
  rowReorderIndicatorUp: 'p-datatable-row-reorder-indicator-up',
  rowReorderIndicatorDown: 'p-datatable-row-reorder-indicator-down'
};
var inlineStyles$f = {
  tableContainer: {
    overflow: 'auto'
  },
  thead: {
    position: 'sticky'
  },
  tfoot: {
    position: 'sticky'
  }
};
var DataTableStyle = BaseStyle.extend({
  name: 'datatable',
  style: style$A,
  classes: classes$21,
  inlineStyles: inlineStyles$f
});

var classes$20 = {
  root: function root(_ref) {
    var props = _ref.props;
    return ['p-dataview p-component', {
      'p-dataview-list': props.layout === 'list',
      'p-dataview-grid': props.layout === 'grid'
    }];
  },
  header: 'p-dataview-header',
  pcPaginator: function pcPaginator(_ref2) {
    var position = _ref2.position;
    return 'p-dataview-paginator-' + position;
  },
  content: 'p-dataview-content',
  emptyMessage: 'p-dataview-empty-message',
  footer: 'p-dataview-footer'
};
var DataViewStyle = BaseStyle.extend({
  name: 'dataview',
  style: style$B,
  classes: classes$20
});

var classes$1$ = {
  root: 'p-orderlist p-component',
  controls: 'p-orderlist-controls'
};
var OrderListStyle = BaseStyle.extend({
  name: 'orderlist',
  style: style$C,
  classes: classes$1$
});

var extendedStyle = /*css*/"\n    ".concat(style$D, "\n\n    /* For PrimeVue */\n    .p-organizationchart-node-content {\n        gap: 0.5rem;\n    }\n");
var classes$1_ = {
  root: 'p-organizationchart p-component',
  tree: 'p-organizationchart-tree',
  subtree: function subtree(_ref) {
    var root = _ref.root;
    return ['p-organizationchart-subtree', {
      'p-organizationchart-subtree-root': root
    }];
  },
  node: 'p-organizationchart-node',
  content: 'p-organizationchart-node-content',
  label: 'p-organizationchart-node-label',
  toggle: 'p-organizationchart-node-toggle-button',
  toggleIndicator: 'p-organizationchart-node-toggle-button-icon'
};
var OrganizationChartStyle = BaseStyle.extend({
  name: 'organizationchart',
  style: extendedStyle,
  classes: classes$1_
});

function _typeof$1(o) { "@babel/helpers - typeof"; return _typeof$1 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof$1(o); }
function _defineProperty$1(e, r, t) { return (r = _toPropertyKey$1(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: true, configurable: true, writable: true }) : e[r] = t, e; }
function _toPropertyKey$1(t) { var i = _toPrimitive$1(t, "string"); return "symbol" == _typeof$1(i) ? i : i + ""; }
function _toPrimitive$1(t, r) { if ("object" != _typeof$1(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r); if ("object" != _typeof$1(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var classes$1Z = {
  paginator: function paginator(_ref) {
    var instance = _ref.instance,
      key = _ref.key;
    return ['p-paginator p-component', _defineProperty$1({
      'p-paginator-default': !instance.hasBreakpoints()
    }, "p-paginator-".concat(key), instance.hasBreakpoints())];
  },
  content: 'p-paginator-content',
  contentStart: 'p-paginator-content-start',
  contentEnd: 'p-paginator-content-end',
  first: function first(_ref3) {
    var instance = _ref3.instance;
    return ['p-paginator-first', {
      'p-disabled': instance.$attrs.disabled
    }];
  },
  firstIcon: 'p-paginator-first-icon',
  prev: function prev(_ref4) {
    var instance = _ref4.instance;
    return ['p-paginator-prev', {
      'p-disabled': instance.$attrs.disabled
    }];
  },
  prevIcon: 'p-paginator-prev-icon',
  next: function next(_ref5) {
    var instance = _ref5.instance;
    return ['p-paginator-next', {
      'p-disabled': instance.$attrs.disabled
    }];
  },
  nextIcon: 'p-paginator-next-icon',
  last: function last(_ref6) {
    var instance = _ref6.instance;
    return ['p-paginator-last', {
      'p-disabled': instance.$attrs.disabled
    }];
  },
  lastIcon: 'p-paginator-last-icon',
  pages: 'p-paginator-pages',
  page: function page(_ref7) {
    var props = _ref7.props,
      pageLink = _ref7.pageLink;
    return ['p-paginator-page', {
      'p-paginator-page-selected': pageLink - 1 === props.page
    }];
  },
  current: 'p-paginator-current',
  pcRowPerPageDropdown: 'p-paginator-rpp-dropdown',
  pcJumpToPageDropdown: 'p-paginator-jtp-dropdown',
  pcJumpToPageInputText: 'p-paginator-jtp-input'
};
var PaginatorStyle = BaseStyle.extend({
  name: 'paginator',
  style: style$E,
  classes: classes$1Z
});

var classes$1Y = {
  root: 'p-picklist p-component',
  sourceControls: 'p-picklist-controls p-picklist-source-controls',
  sourceListContainer: 'p-picklist-list-container p-picklist-source-list-container',
  transferControls: 'p-picklist-controls p-picklist-transfer-controls',
  targetListContainer: 'p-picklist-list-container p-picklist-target-list-container',
  targetControls: 'p-picklist-controls p-picklist-target-controls'
};
var PickListStyle = BaseStyle.extend({
  name: 'picklist',
  style: style$F,
  classes: classes$1Y
});

var classes$1X = {
  root: function root(_ref) {
    var props = _ref.props,
      state = _ref.state;
    return ['p-tree p-component', {
      'p-tree-selectable': props.selectionMode != null,
      'p-tree-loading': props.loading,
      'p-tree-flex-scrollable': props.scrollHeight === 'flex',
      'p-tree-node-dragover': state.dragHover
    }];
  },
  mask: 'p-tree-mask p-overlay-mask',
  loadingIcon: 'p-tree-loading-icon',
  pcFilterContainer: 'p-tree-filter',
  pcFilterInput: 'p-tree-filter-input',
  wrapper: 'p-tree-root',
  rootChildren: 'p-tree-root-children',
  node: function node(_ref2) {
    var instance = _ref2.instance;
    return ['p-tree-node', {
      'p-tree-node-leaf': instance.leaf
    }];
  },
  nodeContent: function nodeContent(_ref3) {
    var instance = _ref3.instance;
    return ['p-tree-node-content', instance.node.styleClass, {
      'p-tree-node-selectable': instance.selectable,
      'p-tree-node-selected': instance.checkboxMode && instance.$parentInstance.highlightOnSelect ? instance.checked : instance.selected,
      'p-tree-node-dragover': instance.isNodeDropActive
    }];
  },
  nodeToggleButton: 'p-tree-node-toggle-button',
  nodeToggleIcon: 'p-tree-node-toggle-icon',
  nodeCheckbox: 'p-tree-node-checkbox',
  nodeIcon: 'p-tree-node-icon',
  nodeLabel: 'p-tree-node-label',
  nodeChildren: 'p-tree-node-children',
  emptyMessage: 'p-tree-empty-message',
  dropPoint: 'p-tree-node-drop-point'
};
var TreeStyle = BaseStyle.extend({
  name: 'tree',
  style: style$G,
  classes: classes$1X
});

var classes$1W = {
  root: function root(_ref) {
    var instance = _ref.instance,
      props = _ref.props;
    return ['p-treetable p-component', {
      'p-treetable-hoverable': props.rowHover || instance.rowSelectionMode,
      'p-treetable-resizable': props.resizableColumns,
      'p-treetable-resizable-fit': props.resizableColumns && props.columnResizeMode === 'fit',
      'p-treetable-scrollable': props.scrollable,
      'p-treetable-flex-scrollable': props.scrollable && props.scrollHeight === 'flex',
      'p-treetable-gridlines': props.showGridlines,
      'p-treetable-sm': props.size === 'small',
      'p-treetable-lg': props.size === 'large'
    }];
  },
  loading: 'p-treetable-loading',
  //TODO: required?
  mask: 'p-treetable-mask p-overlay-mask',
  loadingIcon: 'p-treetable-loading-icon',
  header: 'p-treetable-header',
  paginator: function paginator(_ref2) {
    var position = _ref2.position;
    return 'p-treetable-paginator-' + position;
  },
  tableContainer: 'p-treetable-table-container',
  table: function table(_ref3) {
    var props = _ref3.props;
    return ['p-treetable-table', {
      'p-treetable-scrollable-table': props.scrollable,
      'p-treetable-resizable-table': props.resizableColumns,
      'p-treetable-resizable-table-fit': props.resizableColumns && props.columnResizeMode === 'fit'
    }];
  },
  thead: 'p-treetable-thead',
  headerCell: function headerCell(_ref4) {
    var instance = _ref4.instance,
      props = _ref4.props;
    return ['p-treetable-header-cell', {
      'p-treetable-sortable-column': instance.columnProp('sortable'),
      'p-treetable-resizable-column': props.resizableColumns,
      'p-treetable-column-sorted': instance.columnProp('sortable') ? instance.isColumnSorted() : false,
      'p-treetable-frozen-column': instance.columnProp('frozen')
    }];
  },
  columnResizer: 'p-treetable-column-resizer',
  columnHeaderContent: 'p-treetable-column-header-content',
  columnTitle: 'p-treetable-column-title',
  sortIcon: 'p-treetable-sort-icon',
  pcSortBadge: 'p-treetable-sort-badge',
  tbody: 'p-treetable-tbody',
  row: function row(_ref5) {
    var props = _ref5.props,
      instance = _ref5.instance;
    return [{
      'p-treetable-selectable-row': instance.$parentInstance.rowSelectionMode,
      'p-treetable-row-selected': instance.selected,
      'p-treetable-contextmenu-row-selected': props.contextMenuSelection && instance.isSelectedWithContextMenu
    }];
  },
  bodyCell: function bodyCell(_ref6) {
    var instance = _ref6.instance;
    return [{
      'p-treetable-frozen-column': instance.columnProp('frozen')
    }];
  },
  bodyCellContent: function bodyCellContent(_ref7) {
    var instance = _ref7.instance;
    return ['p-treetable-body-cell-content', {
      'p-treetable-body-cell-content-expander': instance.columnProp('expander')
    }];
  },
  nodeToggleButton: 'p-treetable-node-toggle-button',
  nodeToggleIcon: 'p-treetable-node-toggle-icon',
  pcNodeCheckbox: 'p-treetable-node-checkbox',
  emptyMessage: 'p-treetable-empty-message',
  tfoot: 'p-treetable-tfoot',
  footerCell: function footerCell(_ref8) {
    var instance = _ref8.instance;
    return [{
      'p-treetable-frozen-column': instance.columnProp('frozen')
    }];
  },
  footer: 'p-treetable-footer',
  columnResizeIndicator: 'p-treetable-column-resize-indicator'
};
var inlineStyles$e = {
  tableContainer: {
    overflow: 'auto'
  },
  thead: {
    position: 'sticky'
  },
  tfoot: {
    position: 'sticky'
  }
};
var TreeTableStyle = BaseStyle.extend({
  name: 'treetable',
  style: style$H,
  classes: classes$1W,
  inlineStyles: inlineStyles$e
});

var classes$1V = {
  root: function root(_ref) {
    var props = _ref.props;
    return ['p-timeline p-component', 'p-timeline-' + props.align, 'p-timeline-' + props.layout];
  },
  event: 'p-timeline-event',
  eventOpposite: 'p-timeline-event-opposite',
  eventSeparator: 'p-timeline-event-separator',
  eventMarker: 'p-timeline-event-marker',
  eventConnector: 'p-timeline-event-connector',
  eventContent: 'p-timeline-event-content'
};
var TimelineStyle = BaseStyle.extend({
  name: 'timeline',
  style: style$I,
  classes: classes$1V
});

var css = "\n.p-virtualscroller {\n    position: relative;\n    overflow: auto;\n    contain: strict;\n    transform: translateZ(0);\n    will-change: scroll-position;\n    outline: 0 none;\n}\n\n.p-virtualscroller-content {\n    position: absolute;\n    top: 0;\n    left: 0;\n    min-height: 100%;\n    min-width: 100%;\n    will-change: transform;\n}\n\n.p-virtualscroller-spacer {\n    position: absolute;\n    top: 0;\n    left: 0;\n    height: 1px;\n    width: 1px;\n    transform-origin: 0 0;\n    pointer-events: none;\n}\n\n.p-virtualscroller-loader {\n    position: sticky;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n}\n\n.p-virtualscroller-loader-mask {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n.p-virtualscroller-horizontal > .p-virtualscroller-content {\n    display: flex;\n}\n\n.p-virtualscroller-inline .p-virtualscroller-content {\n    position: static;\n}\n\n.p-virtualscroller .p-virtualscroller-loading {\n    transform: none !important;\n    min-height: 0;\n    position: sticky;\n    inset-block-start: 0;\n    inset-inline-start: 0;\n}\n";
var VirtualScrollerStyle = BaseStyle.extend({
  name: 'virtualscroller',
  css: css,
  style: style$J
});

var classes$1U = {
  root: 'p-accordion p-component'
};
var AccordionStyle = BaseStyle.extend({
  name: 'accordion',
  style: style$K,
  classes: classes$1U
});

var classes$1T = {
  root: function root(_ref) {
    var instance = _ref.instance,
      props = _ref.props;
    return ['p-accordionpanel', {
      'p-accordionpanel-active': instance.active,
      'p-disabled': props.disabled
    }];
  }
};
var AccordionPanelStyle = BaseStyle.extend({
  name: 'accordionpanel',
  classes: classes$1T
});

var classes$1S = {
  root: 'p-accordionheader',
  toggleicon: 'p-accordionheader-toggle-icon'
};
var AccordionHeaderStyle = BaseStyle.extend({
  name: 'accordionheader',
  classes: classes$1S
});

var classes$1R = {
  root: 'p-accordioncontent',
  contentWrapper: 'p-accordioncontent-wrapper',
  content: 'p-accordioncontent-content'
};
var AccordionContentStyle = BaseStyle.extend({
  name: 'accordioncontent',
  classes: classes$1R
});

var classes$1Q = {
  root: 'p-card p-component',
  header: 'p-card-header',
  body: 'p-card-body',
  caption: 'p-card-caption',
  title: 'p-card-title',
  subtitle: 'p-card-subtitle',
  content: 'p-card-content',
  footer: 'p-card-footer'
};
var CardStyle = BaseStyle.extend({
  name: 'card',
  style: style$L,
  classes: classes$1Q
});

var DeferredContentStyle = BaseStyle.extend({
  name: 'deferredcontent'
});

/* Position */
var inlineStyles$d = {
  root: function root(_ref) {
    var props = _ref.props;
    return {
      justifyContent: props.layout === 'horizontal' ? props.align === 'center' || props.align === null ? 'center' : props.align === 'left' ? 'flex-start' : props.align === 'right' ? 'flex-end' : null : null,
      alignItems: props.layout === 'vertical' ? props.align === 'center' || props.align === null ? 'center' : props.align === 'top' ? 'flex-start' : props.align === 'bottom' ? 'flex-end' : null : null
    };
  }
};
var classes$1P = {
  root: function root(_ref2) {
    var props = _ref2.props;
    return ['p-divider p-component', 'p-divider-' + props.layout, 'p-divider-' + props.type, {
      'p-divider-left': props.layout === 'horizontal' && (!props.align || props.align === 'left')
    }, {
      'p-divider-center': props.layout === 'horizontal' && props.align === 'center'
    }, {
      'p-divider-right': props.layout === 'horizontal' && props.align === 'right'
    }, {
      'p-divider-top': props.layout === 'vertical' && props.align === 'top'
    }, {
      'p-divider-center': props.layout === 'vertical' && (!props.align || props.align === 'center')
    }, {
      'p-divider-bottom': props.layout === 'vertical' && props.align === 'bottom'
    }];
  },
  content: 'p-divider-content'
};
var DividerStyle = BaseStyle.extend({
  name: 'divider',
  style: style$M,
  classes: classes$1P,
  inlineStyles: inlineStyles$d
});

var classes$1O = {
  root: function root(_ref) {
    var props = _ref.props;
    return ['p-fieldset p-component', {
      'p-fieldset-toggleable': props.toggleable
    }];
  },
  legend: 'p-fieldset-legend',
  legendLabel: 'p-fieldset-legend-label',
  toggleButton: 'p-fieldset-toggle-button',
  toggleIcon: 'p-fieldset-toggle-icon',
  contentContainer: 'p-fieldset-content-container',
  contentWrapper: 'p-fieldset-content-wrapper',
  content: 'p-fieldset-content'
};
var FieldsetStyle = BaseStyle.extend({
  name: 'fieldset',
  style: style$N,
  classes: classes$1O
});

var classes$1N = {
  root: function root(_ref) {
    var props = _ref.props;
    return ['p-panel p-component', {
      'p-panel-toggleable': props.toggleable
    }];
  },
  header: 'p-panel-header',
  title: 'p-panel-title',
  headerActions: 'p-panel-header-actions',
  pcToggleButton: 'p-panel-toggle-button',
  contentContainer: 'p-panel-content-container',
  contentWrapper: 'p-panel-content-wrapper',
  content: 'p-panel-content',
  footer: 'p-panel-footer'
};
var PanelStyle = BaseStyle.extend({
  name: 'panel',
  style: style$O,
  classes: classes$1N
});

var inlineStyles$c = {
  root: {
    position: 'relative'
  }
};
var classes$1M = {
  root: function root(_ref) {
    var props = _ref.props;
    return ['p-scrollarea p-component', {
      'p-scrollarea-mask': props.mask
    }];
  }
};
var ScrollAreaStyle = BaseStyle.extend({
  name: 'scrollarea',
  style: style$P,
  classes: classes$1M,
  inlineStyles: inlineStyles$c
});

var classes$1L = {
  root: 'p-scrollarea-content'
};
var ScrollAreaContentStyle = BaseStyle.extend({
  name: 'scrollareacontent',
  classes: classes$1L
});

var classes$1K = {
  root: 'p-scrollarea-corner'
};
var inlineStyles$b = {
  root: {
    position: 'absolute',
    bottom: '0',
    insetInlineEnd: '0'
  }
};
var ScrollAreaCornerStyle = BaseStyle.extend({
  name: 'scrollareacorner',
  classes: classes$1K,
  inlineStyles: inlineStyles$b
});

var classes$1J = {
  root: 'p-scrollarea-handle'
};
var ScrollAreaHandleStyle = BaseStyle.extend({
  name: 'scrollareahandle',
  classes: classes$1J
});

var classes$1I = {
  root: 'p-scrollarea-scrollbar'
};
var inlineStyles$a = {
  root: function root(_ref) {
    var props = _ref.props;
    return {
      position: 'absolute',
      touchAction: 'none',
      userSelect: 'none',
      WebkitUserSelect: 'none',
      top: props.orientation === 'vertical' ? 0 : undefined,
      bottom: props.orientation === 'horizontal' ? 0 : 'var(--px-corner-height)',
      insetInlineEnd: props.orientation === 'vertical' ? 0 : 'var(--px-corner-width)',
      insetInlineStart: props.orientation === 'horizontal' ? 0 : undefined
    };
  }
};
var ScrollAreaScrollbarStyle = BaseStyle.extend({
  name: 'scrollareascrollbar',
  classes: classes$1I,
  inlineStyles: inlineStyles$a
});

var classes$1H = {
  root: 'p-scrollarea-viewport'
};
var inlineStyles$9 = {
  root: {
    overflow: 'scroll',
    scrollbarWidth: 'none'
  }
};
var ScrollAreaViewportStyle = BaseStyle.extend({
  name: 'scrollareaviewport',
  classes: classes$1H,
  inlineStyles: inlineStyles$9
});

var classes$1G = {
  root: 'p-scrollpanel p-component',
  contentContainer: 'p-scrollpanel-content-container',
  content: 'p-scrollpanel-content',
  barX: 'p-scrollpanel-bar p-scrollpanel-bar-x',
  barY: 'p-scrollpanel-bar p-scrollpanel-bar-y'
};
var ScrollPanelStyle = BaseStyle.extend({
  name: 'scrollpanel',
  style: style$Q,
  classes: classes$1G
});

var classes$1F = {
  root: function root(_ref) {
    var props = _ref.props;
    return ['p-splitter p-component', 'p-splitter-' + props.layout];
  },
  gutter: 'p-splitter-gutter',
  gutterHandle: 'p-splitter-gutter-handle'
};
var SplitterStyle = BaseStyle.extend({
  name: 'splitter',
  style: style$R,
  classes: classes$1F
});

var classes$1E = {
  root: function root(_ref) {
    var instance = _ref.instance;
    return ['p-splitter-panel', {
      'p-splitter-panel-nested': instance.isNested
    }];
  }
};
var SplitterPanelStyle = BaseStyle.extend({
  name: 'splitterpanel',
  classes: classes$1E
});

var classes$1D = {
  root: function root(_ref) {
    var props = _ref.props;
    return ['p-stepper p-component', {
      'p-readonly': props.linear
    }];
  },
  separator: 'p-stepper-separator'
};
var StepperStyle = BaseStyle.extend({
  name: 'stepper',
  style: style$S,
  classes: classes$1D
});

var classes$1C = {
  root: 'p-steplist'
};
var StepListStyle = BaseStyle.extend({
  name: 'steplist',
  classes: classes$1C
});

var classes$1B = {
  root: function root(_ref) {
    var instance = _ref.instance;
    return ['p-step', {
      'p-step-active': instance.active,
      'p-disabled': instance.isStepDisabled
    }];
  },
  header: 'p-step-header',
  number: 'p-step-number',
  title: 'p-step-title'
};
var StepStyle = BaseStyle.extend({
  name: 'step',
  classes: classes$1B
});

var classes$1A = {
  root: function root(_ref) {
    var instance = _ref.instance;
    return ['p-stepitem', {
      'p-stepitem-active': instance.isActive
    }];
  }
};
var StepItemStyle = BaseStyle.extend({
  name: 'stepitem',
  classes: classes$1A
});

var classes$1z = {
  root: 'p-steppanels'
};
var StepPanelsStyle = BaseStyle.extend({
  name: 'steppanels',
  classes: classes$1z
});

var classes$1y = {
  root: function root(_ref) {
    var instance = _ref.instance;
    return ['p-steppanel', {
      'p-steppanel-active': instance.isVertical && instance.active
    }];
  },
  contentWrapper: 'p-steppanel-content-wrapper',
  content: 'p-steppanel-content'
};
var StepPanelStyle = BaseStyle.extend({
  name: 'steppanel',
  classes: classes$1y
});

var classes$1x = {
  root: 'p-tabs p-component'
};
var TabsStyle = BaseStyle.extend({
  name: 'tabs',
  style: style$T,
  classes: classes$1x
});

var classes$1w = {
  root: 'p-tablist',
  content: 'p-tablist-content',
  activeBar: 'p-tablist-active-bar',
  prevButton: 'p-tablist-prev-button p-tablist-nav-button',
  nextButton: 'p-tablist-next-button p-tablist-nav-button'
};
var TabListStyle = BaseStyle.extend({
  name: 'tablist',
  classes: classes$1w
});

var classes$1v = {
  root: function root(_ref) {
    var instance = _ref.instance,
      props = _ref.props;
    return ['p-tab', {
      'p-tab-active': instance.active,
      'p-disabled': props.disabled
    }];
  }
};
var TabStyle = BaseStyle.extend({
  name: 'tab',
  classes: classes$1v
});

var classes$1u = {
  root: 'p-tabpanels'
};
var TabPanelsStyle = BaseStyle.extend({
  name: 'tabpanels',
  classes: classes$1u
});

var classes$1t = {
  root: function root(_ref) {
    var instance = _ref.instance;
    return ['p-tabpanel', {
      'p-tabpanel-active': instance.active
    }];
  }
};
var TabPanelStyle = BaseStyle.extend({
  name: 'tabpanel',
  classes: classes$1t
});

var classes$1s = {
  root: 'p-toolbar p-component',
  start: 'p-toolbar-start',
  center: 'p-toolbar-center',
  end: 'p-toolbar-end'
};
var ToolbarStyle = BaseStyle.extend({
  name: 'toolbar',
  style: style$U,
  classes: classes$1s
});

var classes$1r = {
  root: 'p-confirmdialog',
  icon: 'p-confirmdialog-icon',
  message: 'p-confirmdialog-message',
  pcRejectButton: 'p-confirmdialog-reject-button',
  pcAcceptButton: 'p-confirmdialog-accept-button'
};
var ConfirmDialogStyle = BaseStyle.extend({
  name: 'confirmdialog',
  style: style$V,
  classes: classes$1r
});

var classes$1q = {
  root: 'p-confirmpopup p-component',
  content: 'p-confirmpopup-content',
  icon: 'p-confirmpopup-icon',
  message: 'p-confirmpopup-message',
  footer: 'p-confirmpopup-footer',
  pcRejectButton: 'p-confirmpopup-reject-button',
  pcAcceptButton: 'p-confirmpopup-accept-button'
};
var ConfirmPopupStyle = BaseStyle.extend({
  name: 'confirmpopup',
  style: style$W,
  classes: classes$1q
});

/* Position */
var inlineStyles$8 = {
  mask: function mask(_ref) {
    var position = _ref.position,
      modal = _ref.modal;
    return {
      position: 'fixed',
      height: '100%',
      width: '100%',
      left: 0,
      top: 0,
      display: 'flex',
      justifyContent: position === 'left' || position === 'topleft' || position === 'bottomleft' ? 'flex-start' : position === 'right' || position === 'topright' || position === 'bottomright' ? 'flex-end' : 'center',
      alignItems: position === 'top' || position === 'topleft' || position === 'topright' ? 'flex-start' : position === 'bottom' || position === 'bottomleft' || position === 'bottomright' ? 'flex-end' : 'center',
      pointerEvents: modal ? 'auto' : 'none'
    };
  },
  root: {
    display: 'flex',
    flexDirection: 'column',
    pointerEvents: 'auto'
  }
};
var classes$1p = {
  mask: function mask(_ref2) {
    var props = _ref2.props;
    var positions = ['left', 'right', 'top', 'topleft', 'topright', 'bottom', 'bottomleft', 'bottomright'];
    var pos = positions.find(function (item) {
      return item === props.position;
    });
    return ['p-dialog-mask', {
      'p-overlay-mask p-overlay-mask-enter-active': props.modal
    }, pos ? "p-dialog-".concat(pos) : ''];
  },
  root: function root(_ref3) {
    var props = _ref3.props,
      instance = _ref3.instance;
    return ['p-dialog p-component', {
      'p-dialog-maximized': props.maximizable && instance.maximized
    }];
  },
  header: 'p-dialog-header',
  title: 'p-dialog-title',
  headerActions: 'p-dialog-header-actions',
  pcMaximizeButton: 'p-dialog-maximize-button',
  pcCloseButton: 'p-dialog-close-button',
  content: 'p-dialog-content',
  footer: 'p-dialog-footer'
};
var DialogStyle = BaseStyle.extend({
  name: 'dialog',
  style: style$X,
  classes: classes$1p,
  inlineStyles: inlineStyles$8
});

var inlineStyles$7 = {
  mask: function mask(_ref) {
    var position = _ref.position,
      modal = _ref.modal;
    return {
      position: 'fixed',
      height: '100%',
      width: '100%',
      left: 0,
      top: 0,
      display: 'flex',
      justifyContent: position === 'left' ? 'flex-start' : position === 'right' ? 'flex-end' : 'center',
      alignItems: position === 'top' ? 'flex-start' : position === 'bottom' ? 'flex-end' : 'center',
      pointerEvents: modal ? 'auto' : 'none'
    };
  },
  root: {
    pointerEvents: 'auto'
  }
};
var classes$1o = {
  mask: function mask(_ref2) {
    var instance = _ref2.instance,
      props = _ref2.props;
    var positions = ['left', 'right', 'top', 'bottom'];
    var pos = positions.find(function (item) {
      return item === props.position;
    });
    return ['p-drawer-mask', {
      'p-overlay-mask p-overlay-mask-enter-active': props.modal,
      'p-drawer-open': instance.containerVisible,
      'p-drawer-full': instance.fullScreen
    }, pos ? "p-drawer-".concat(pos) : ''];
  },
  root: function root(_ref3) {
    var instance = _ref3.instance;
    return ['p-drawer p-component', {
      'p-drawer-full': instance.fullScreen
    }];
  },
  header: 'p-drawer-header',
  title: 'p-drawer-title',
  pcCloseButton: 'p-drawer-close-button',
  content: 'p-drawer-content',
  footer: 'p-drawer-footer'
};
var DrawerStyle = BaseStyle.extend({
  name: 'drawer',
  style: style$Y,
  classes: classes$1o,
  inlineStyles: inlineStyles$7
});

var DynamicDialogStyle = BaseStyle.extend({
  name: 'dynamicdialog'
});

var classes$1n = {
  root: 'p-popover p-component',
  content: 'p-popover-content'
};
var PopoverStyle = BaseStyle.extend({
  name: 'popover',
  style: style$Z,
  classes: classes$1n
});

var classes$1m = {
  root: function root(_ref) {
    var props = _ref.props;
    return ["p-fileupload p-fileupload-".concat(props.mode, " p-component")];
  },
  header: 'p-fileupload-header',
  pcChooseButton: 'p-fileupload-choose-button',
  pcUploadButton: 'p-fileupload-upload-button',
  pcCancelButton: 'p-fileupload-cancel-button',
  content: 'p-fileupload-content',
  fileList: 'p-fileupload-file-list',
  file: 'p-fileupload-file',
  fileThumbnail: 'p-fileupload-file-thumbnail',
  fileInfo: 'p-fileupload-file-info',
  fileName: 'p-fileupload-file-name',
  fileSize: 'p-fileupload-file-size',
  pcFileBadge: 'p-fileupload-file-badge',
  fileActions: 'p-fileupload-file-actions',
  pcFileRemoveButton: 'p-fileupload-file-remove-button',
  basicContent: 'p-fileupload-basic-content'
};
var FileUploadStyle = BaseStyle.extend({
  name: 'fileupload',
  style: style$_,
  classes: classes$1m
});

var classes$1l = {
  root: 'p-breadcrumb p-component',
  list: 'p-breadcrumb-list',
  homeItem: 'p-breadcrumb-home-item',
  separator: 'p-breadcrumb-separator',
  separatorIcon: 'p-breadcrumb-separator-icon',
  item: function item(_ref) {
    var instance = _ref.instance;
    return ['p-breadcrumb-item', {
      'p-disabled': instance.disabled()
    }];
  },
  itemLink: 'p-breadcrumb-item-link',
  itemIcon: 'p-breadcrumb-item-icon',
  itemLabel: 'p-breadcrumb-item-label'
};
var BreadcrumbStyle = BaseStyle.extend({
  name: 'breadcrumb',
  style: style$$,
  classes: classes$1l
});

var classes$1k = {
  root: 'p-commandmenu p-component',
  header: 'p-commandmenu-header',
  input: 'p-commandmenu-input',
  list: 'p-commandmenu-list',
  emptyMessage: 'p-commandmenu-empty-message',
  footer: 'p-commandmenu-footer'
};
var CommandMenuStyle = BaseStyle.extend({
  name: 'commandmenu',
  style: style$10,
  classes: classes$1k
});

var classes$1j = {
  root: function root(_ref) {
    var instance = _ref.instance;
    return ['p-contextmenu p-component', {
      'p-contextmenu-mobile': instance.queryMatches
    }];
  },
  rootList: 'p-contextmenu-root-list',
  item: function item(_ref2) {
    var instance = _ref2.instance,
      processedItem = _ref2.processedItem;
    return ['p-contextmenu-item', {
      'p-contextmenu-item-active': instance.isItemActive(processedItem),
      'p-focus': instance.isItemFocused(processedItem),
      'p-disabled': instance.isItemDisabled(processedItem)
    }];
  },
  itemContent: 'p-contextmenu-item-content',
  itemLink: 'p-contextmenu-item-link',
  itemIcon: 'p-contextmenu-item-icon',
  itemLabel: 'p-contextmenu-item-label',
  submenuIcon: 'p-contextmenu-submenu-icon',
  submenu: 'p-contextmenu-submenu',
  separator: 'p-contextmenu-separator'
};
var ContextMenuStyle = BaseStyle.extend({
  name: 'contextmenu',
  style: style$11,
  classes: classes$1j
});

var classes$1i = {
  root: function root(_ref) {
    var instance = _ref.instance,
      props = _ref.props;
    return ['p-dock p-component', "p-dock-".concat(props.position), {
      'p-dock-mobile': instance.queryMatches
    }];
  },
  listContainer: 'p-dock-list-container',
  list: 'p-dock-list',
  item: function item(_ref2) {
    var instance = _ref2.instance,
      processedItem = _ref2.processedItem,
      id = _ref2.id;
    return ['p-dock-item', {
      'p-focus': instance.isItemActive(id),
      'p-disabled': instance.disabled(processedItem)
    }];
  },
  itemContent: 'p-dock-item-content',
  itemLink: 'p-dock-item-link',
  itemIcon: 'p-dock-item-icon'
};
var DockStyle = BaseStyle.extend({
  name: 'dock',
  style: style$12,
  classes: classes$1i
});

var classes$1h = {
  root: function root(_ref) {
    var props = _ref.props;
    return ['p-menu p-component', {
      'p-menu-overlay': props.popup
    }];
  },
  start: 'p-menu-start',
  list: 'p-menu-list',
  submenuLabel: 'p-menu-submenu-label',
  submenuList: 'p-menu-submenu-list',
  separator: 'p-menu-separator',
  end: 'p-menu-end',
  item: function item(_ref2) {
    var instance = _ref2.instance;
    return ['p-menu-item', {
      'p-menu-item-toggleable': instance.toggleable,
      'p-focus': instance.id === instance.focusedOptionId,
      'p-disabled': instance.disabled()
    }];
  },
  itemContent: 'p-menu-item-content',
  itemLink: 'p-menu-item-link',
  itemIcon: 'p-menu-item-icon',
  itemLabel: 'p-menu-item-label',
  itemSubmenuIcon: 'p-menu-item-submenu-icon'
};
var MenuStyle = BaseStyle.extend({
  name: 'menu',
  style: style$13,
  classes: classes$1h
});

var inlineStyles$6 = {
  submenu: function submenu(_ref) {
    var instance = _ref.instance,
      processedItem = _ref.processedItem;
    return {
      display: instance.isItemActive(processedItem) ? 'flex' : 'none'
    };
  }
};
var classes$1g = {
  root: function root(_ref2) {
    var instance = _ref2.instance;
    return ['p-menubar p-component', {
      'p-menubar-mobile': instance.queryMatches,
      'p-menubar-mobile-active': instance.mobileActive
    }];
  },
  start: 'p-menubar-start',
  button: 'p-menubar-button',
  rootList: 'p-menubar-root-list',
  item: function item(_ref3) {
    var instance = _ref3.instance,
      processedItem = _ref3.processedItem;
    return ['p-menubar-item', {
      'p-menubar-item-active': instance.isItemActive(processedItem),
      'p-focus': instance.isItemFocused(processedItem),
      'p-disabled': instance.isItemDisabled(processedItem)
    }];
  },
  itemContent: 'p-menubar-item-content',
  itemLink: 'p-menubar-item-link',
  itemIcon: 'p-menubar-item-icon',
  itemLabel: 'p-menubar-item-label',
  submenuIcon: 'p-menubar-submenu-icon',
  submenu: 'p-menubar-submenu',
  separator: 'p-menubar-separator',
  end: 'p-menubar-end'
};
var MenubarStyle = BaseStyle.extend({
  name: 'menubar',
  style: style$14,
  classes: classes$1g,
  inlineStyles: inlineStyles$6
});

var inlineStyles$5 = {
  rootList: function rootList(_ref) {
    var props = _ref.props;
    return {
      'max-height': props.scrollHeight,
      overflow: 'auto'
    };
  }
};
var classes$1f = {
  root: function root(_ref2) {
    var instance = _ref2.instance;
    return ['p-megamenu p-component', {
      'p-megamenu-mobile': instance.queryMatches,
      'p-megamenu-mobile-active': instance.mobileActive,
      'p-megamenu-horizontal': instance.horizontal,
      'p-megamenu-vertical': instance.vertical
    }];
  },
  start: 'p-megamenu-start',
  button: 'p-megamenu-button',
  rootList: 'p-megamenu-root-list',
  submenuLabel: function submenuLabel(_ref3) {
    var instance = _ref3.instance,
      processedItem = _ref3.processedItem;
    return ['p-megamenu-submenu-label', {
      'p-disabled': instance.isItemDisabled(processedItem)
    }];
  },
  item: function item(_ref4) {
    var instance = _ref4.instance,
      processedItem = _ref4.processedItem;
    return ['p-megamenu-item', {
      'p-megamenu-item-active': instance.isItemActive(processedItem),
      'p-focus': instance.isItemFocused(processedItem),
      'p-disabled': instance.isItemDisabled(processedItem)
    }];
  },
  itemContent: 'p-megamenu-item-content',
  itemLink: 'p-megamenu-item-link',
  itemIcon: 'p-megamenu-item-icon',
  itemLabel: 'p-megamenu-item-label',
  submenuIcon: 'p-megamenu-submenu-icon',
  overlay: 'p-megamenu-overlay',
  grid: 'p-megamenu-grid',
  column: function column(_ref5) {
    var instance = _ref5.instance,
      processedItem = _ref5.processedItem;
    var length = instance.isItemGroup(processedItem) ? processedItem.items.length : 0;
    var columnClass;
    if (instance.$parentInstance.queryMatches) columnClass = 'p-megamenu-col-12';else {
      switch (length) {
        case 2:
          columnClass = 'p-megamenu-col-6';
          break;
        case 3:
          columnClass = 'p-megamenu-col-4';
          break;
        case 4:
          columnClass = 'p-megamenu-col-3';
          break;
        case 6:
          columnClass = 'p-megamenu-col-2';
          break;
        default:
          columnClass = 'p-megamenu-col-12';
          break;
      }
    }
    return columnClass;
  },
  submenu: 'p-megamenu-submenu',
  separator: 'p-megamenu-separator',
  end: 'p-megamenu-end'
};
var MegaMenuStyle = BaseStyle.extend({
  name: 'megamenu',
  style: style$15,
  classes: classes$1f,
  inlineStyles: inlineStyles$5
});

var classes$1e = {
  root: 'p-panelmenu p-component',
  panel: 'p-panelmenu-panel',
  header: function header(_ref) {
    var instance = _ref.instance,
      item = _ref.item;
    return ['p-panelmenu-header', {
      'p-panelmenu-header-active': instance.isItemActive(item) && !!item.items,
      'p-disabled': instance.isItemDisabled(item)
    }];
  },
  headerContent: 'p-panelmenu-header-content',
  headerLink: 'p-panelmenu-header-link',
  headerIcon: 'p-panelmenu-header-icon',
  headerLabel: 'p-panelmenu-header-label',
  contentContainer: 'p-panelmenu-content-container',
  contentWrapper: 'p-panelmenu-content-wrapper',
  content: 'p-panelmenu-content',
  rootList: 'p-panelmenu-root-list',
  item: function item(_ref2) {
    var instance = _ref2.instance,
      processedItem = _ref2.processedItem;
    return ['p-panelmenu-item', {
      'p-focus': instance.isItemFocused(processedItem),
      'p-disabled': instance.isItemDisabled(processedItem)
    }];
  },
  itemContent: 'p-panelmenu-item-content',
  itemLink: 'p-panelmenu-item-link',
  itemIcon: 'p-panelmenu-item-icon',
  itemLabel: 'p-panelmenu-item-label',
  submenuIcon: 'p-panelmenu-submenu-icon',
  submenu: 'p-panelmenu-submenu',
  separator: 'p-menuitem-separator'
};
var PanelMenuStyle = BaseStyle.extend({
  name: 'panelmenu',
  style: style$16,
  classes: classes$1e
});

var style$1 = /*css*/"\n".concat(style$17, "\n\n/* For PrimeVue */\n.p-sidebar-menu-button:focus-visible,\n.p-sidebar-menu-sub-button:focus-visible {\n    outline-offset: 0px;\n}\n\n.p-sidebar-menu-sub-enter-from,\n.p-sidebar-menu-sub-leave-to {\n    height: 0 !important;\n    opacity: 0;\n}\n\n.p-sidebar-menu-sub-enter-to,\n.p-sidebar-menu-sub-leave-from {\n    height: var(--px-sidebar-menu-sub-height, auto);\n    opacity: 1;\n}\n\n.p-sidebar-menu-sub-enter-active,\n.p-sidebar-menu-sub-leave-active {\n    transition: height 200ms ease-out, opacity 200ms ease-out;\n    overflow: hidden;\n}\n");
var classes$1d = {
  root: 'p-sidebar p-component'
};
var SidebarStyle = BaseStyle.extend({
  name: 'sidebar',
  style: style$1,
  classes: classes$1d
});

var classes$1c = {
  root: 'p-sidebar-aside'
};
var SidebarAsideStyle = BaseStyle.extend({
  name: 'sidebaraside',
  classes: classes$1c
});

var classes$1b = {
  root: 'p-sidebar-backdrop p-overlay-mask'
};
var SidebarBackdropStyle = BaseStyle.extend({
  name: 'sidebarbackdrop',
  classes: classes$1b
});

var classes$1a = {
  root: 'p-sidebar-content'
};
var SidebarContentStyle = BaseStyle.extend({
  name: 'sidebarcontent',
  classes: classes$1a
});

var classes$19 = {
  root: 'p-sidebar-footer'
};
var SidebarFooterStyle = BaseStyle.extend({
  name: 'sidebarfooter',
  classes: classes$19
});

var classes$18 = {
  root: 'p-sidebar-group'
};
var SidebarGroupStyle = BaseStyle.extend({
  name: 'sidebargroup',
  classes: classes$18
});

var classes$17 = {
  root: 'p-sidebar-group-action'
};
var SidebarGroupActionStyle = BaseStyle.extend({
  name: 'sidebargroupaction',
  classes: classes$17
});

var classes$16 = {
  root: 'p-sidebar-group-content'
};
var SidebarGroupContentStyle = BaseStyle.extend({
  name: 'sidebargroupcontent',
  classes: classes$16
});

var classes$15 = {
  root: 'p-sidebar-group-label'
};
var SidebarGroupLabelStyle = BaseStyle.extend({
  name: 'sidebargrouplabel',
  classes: classes$15
});

var classes$14 = {
  root: 'p-sidebar-header'
};
var SidebarHeaderStyle = BaseStyle.extend({
  name: 'sidebarheader',
  classes: classes$14
});

var classes$13 = {
  root: 'p-sidebar-layout'
};
var SidebarLayoutStyle = BaseStyle.extend({
  name: 'sidebarlayout',
  classes: classes$13
});

var classes$12 = {
  root: 'p-sidebar-main'
};
var SidebarMainStyle = BaseStyle.extend({
  name: 'sidebarmain',
  classes: classes$12
});

var classes$11 = {
  root: 'p-sidebar-menu'
};
var SidebarMenuStyle = BaseStyle.extend({
  name: 'sidebarmenu',
  classes: classes$11
});

var classes$10 = {
  root: 'p-sidebar-menu-action'
};
var SidebarMenuActionStyle = BaseStyle.extend({
  name: 'sidebarmenuaction',
  classes: classes$10
});

var classes$$ = {
  root: 'p-sidebar-menu-badge'
};
var SidebarMenuBadgeStyle = BaseStyle.extend({
  name: 'sidebarmenubadge',
  classes: classes$$
});

var classes$_ = {
  root: 'p-sidebar-menu-button'
};
var SidebarMenuButtonStyle = BaseStyle.extend({
  name: 'sidebarmenubutton',
  classes: classes$_
});

var classes$Z = {
  root: 'p-sidebar-menu-item'
};
var SidebarMenuItemStyle = BaseStyle.extend({
  name: 'sidebarmenuitem',
  classes: classes$Z
});

var classes$Y = {
  root: 'p-sidebar-menu-sub'
};
var SidebarMenuSubStyle = BaseStyle.extend({
  name: 'sidebarmenusub',
  classes: classes$Y
});

var classes$X = {
  root: 'p-sidebar-menu-sub-button'
};
var SidebarMenuSubButtonStyle = BaseStyle.extend({
  name: 'sidebarmenusubbutton',
  classes: classes$X
});

var classes$W = {
  root: 'p-sidebar-menu-sub-item'
};
var SidebarMenuSubItemStyle = BaseStyle.extend({
  name: 'sidebarmenusubitem',
  classes: classes$W
});

var classes$V = {
  root: 'p-sidebar-panel'
};
var SidebarPanelStyle = BaseStyle.extend({
  name: 'sidebarpanel',
  classes: classes$V
});

var classes$U = {
  root: 'p-sidebar-rail'
};
var SidebarRailStyle = BaseStyle.extend({
  name: 'sidebarrail',
  classes: classes$U
});

var classes$T = {
  root: 'p-sidebar-spacer'
};
var SidebarSpacerStyle = BaseStyle.extend({
  name: 'sidebarspacer',
  classes: classes$T
});

var classes$S = {
  root: 'p-sidebar-trigger'
};
var SidebarTriggerStyle = BaseStyle.extend({
  name: 'sidebartrigger',
  classes: classes$S
});

var classes$R = {
  root: function root(_ref) {
    var props = _ref.props;
    return ['p-steps p-component', {
      'p-readonly': props.readonly
    }];
  },
  list: 'p-steps-list',
  item: function item(_ref2) {
    var instance = _ref2.instance,
      _item = _ref2.item,
      index = _ref2.index;
    return ['p-steps-item', {
      'p-steps-item-active': instance.isActive(index),
      'p-disabled': instance.isItemDisabled(_item, index)
    }];
  },
  itemLink: 'p-steps-item-link',
  itemNumber: 'p-steps-item-number',
  itemLabel: 'p-steps-item-label'
};
var StepsStyle = BaseStyle.extend({
  name: 'steps',
  style: style$18,
  classes: classes$R
});

var inlineStyles$4 = {
  submenu: function submenu(_ref) {
    var instance = _ref.instance,
      processedItem = _ref.processedItem;
    return {
      display: instance.isItemActive(processedItem) ? 'flex' : 'none'
    };
  }
};
var classes$Q = {
  root: function root(_ref2) {
    var props = _ref2.props,
      instance = _ref2.instance;
    return ['p-tieredmenu p-component', {
      'p-tieredmenu-overlay': props.popup,
      'p-tieredmenu-mobile': instance.queryMatches
    }];
  },
  start: 'p-tieredmenu-start',
  rootList: 'p-tieredmenu-root-list',
  item: function item(_ref3) {
    var instance = _ref3.instance,
      processedItem = _ref3.processedItem;
    return ['p-tieredmenu-item', {
      'p-tieredmenu-item-active': instance.isItemActive(processedItem),
      'p-focus': instance.isItemFocused(processedItem),
      'p-disabled': instance.isItemDisabled(processedItem)
    }];
  },
  itemContent: 'p-tieredmenu-item-content',
  itemLink: 'p-tieredmenu-item-link',
  itemIcon: 'p-tieredmenu-item-icon',
  itemLabel: 'p-tieredmenu-item-label',
  submenuIcon: 'p-tieredmenu-submenu-icon',
  submenu: 'p-tieredmenu-submenu',
  separator: 'p-tieredmenu-separator',
  end: 'p-tieredmenu-end'
};
var TieredMenuStyle = BaseStyle.extend({
  name: 'tieredmenu',
  style: style$19,
  classes: classes$Q,
  inlineStyles: inlineStyles$4
});

var classes$P = {
  root: function root(_ref) {
    var props = _ref.props;
    return ['p-message p-component p-message-' + props.severity, {
      'p-message-outlined': props.variant === 'outlined',
      'p-message-simple': props.variant === 'simple',
      'p-message-sm': props.size === 'small',
      'p-message-lg': props.size === 'large'
    }];
  },
  contentWrapper: 'p-message-content-wrapper',
  content: 'p-message-content',
  icon: 'p-message-icon',
  text: 'p-message-text',
  closeButton: 'p-message-close-button',
  closeIcon: 'p-message-close-icon'
};
var MessageStyle = BaseStyle.extend({
  name: 'message',
  style: style$1a,
  classes: classes$P
});

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: true, configurable: true, writable: true }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

// Position
var inlineStyles$3 = {
  root: function root(_ref) {
    var position = _ref.position;
    return {
      position: 'fixed',
      top: position === 'top-right' || position === 'top-left' || position === 'top-center' ? '20px' : position === 'center' ? '50%' : null,
      right: (position === 'top-right' || position === 'bottom-right') && '20px',
      bottom: (position === 'bottom-left' || position === 'bottom-right' || position === 'bottom-center') && '20px',
      left: position === 'top-left' || position === 'bottom-left' ? '20px' : position === 'center' || position === 'top-center' || position === 'bottom-center' ? '50%' : null
    };
  }
};
var classes$O = {
  root: function root(_ref2) {
    var props = _ref2.props;
    return ['p-toast p-component', 'p-toast-' + props.position];
  },
  message: function message(_ref3) {
    var props = _ref3.props;
    return ['p-toast-message', {
      'p-toast-message-normal': props.message.severity === 'normal' || props.message.severity === undefined,
      'p-toast-message-info': props.message.severity === 'info',
      'p-toast-message-warn': props.message.severity === 'warn',
      'p-toast-message-error': props.message.severity === 'error',
      'p-toast-message-success': props.message.severity === 'success',
      'p-toast-message-secondary': props.message.severity === 'secondary',
      'p-toast-message-contrast': props.message.severity === 'contrast'
    }];
  },
  messageContent: 'p-toast-message-content',
  messageIcon: function messageIcon(_ref4) {
    var props = _ref4.props;
    return ['p-toast-message-icon', _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty({}, props.infoIcon, props.message.severity === 'info'), props.warnIcon, props.message.severity === 'warn'), props.errorIcon, props.message.severity === 'error'), props.successIcon, props.message.severity === 'success'), props.secondaryIcon, props.message.severity === 'secondary'), props.contrastIcon, props.message.severity === 'contrast')];
  },
  messageText: 'p-toast-message-text',
  summary: 'p-toast-summary',
  detail: 'p-toast-detail',
  closeButton: 'p-toast-close-button',
  closeIcon: 'p-toast-close-icon'
};
var ToastStyle = BaseStyle.extend({
  name: 'toast',
  style: style$1b,
  classes: classes$O,
  inlineStyles: inlineStyles$3
});

var classes$N = {
  root: function root(_ref) {
    var instance = _ref.instance;
    return ['p-carousel p-component', {
      'p-carousel-vertical': instance.isVertical(),
      'p-carousel-horizontal': !instance.isVertical()
    }];
  },
  header: 'p-carousel-header',
  contentContainer: 'p-carousel-content-container',
  content: 'p-carousel-content',
  pcPrevButton: function pcPrevButton(_ref2) {
    var instance = _ref2.instance;
    return ['p-carousel-prev-button', {
      'p-disabled': instance.backwardIsDisabled
    }];
  },
  viewport: 'p-carousel-viewport',
  itemList: 'p-carousel-item-list',
  itemClone: function itemClone(_ref3) {
    var index = _ref3.index,
      value = _ref3.value,
      totalShiftedItems = _ref3.totalShiftedItems,
      d_numVisible = _ref3.d_numVisible;
    return ['p-carousel-item p-carousel-item-clone', {
      'p-carousel-item-active': totalShiftedItems * -1 === value.length + d_numVisible,
      'p-carousel-item-start': index === 0,
      'p-carousel-item-end': value.slice(-1 * d_numVisible).length - 1 === index
    }];
  },
  item: function item(_ref4) {
    var instance = _ref4.instance,
      index = _ref4.index;
    return ['p-carousel-item', {
      'p-carousel-item-active': instance.firstIndex() <= index && instance.lastIndex() >= index,
      'p-carousel-item-start': instance.firstIndex() === index,
      'p-carousel-item-end': instance.lastIndex() === index
    }];
  },
  pcNextButton: function pcNextButton(_ref5) {
    var instance = _ref5.instance;
    return ['p-carousel-next-button', {
      'p-disabled': instance.forwardIsDisabled
    }];
  },
  indicatorList: 'p-carousel-indicator-list',
  indicator: function indicator(_ref6) {
    var instance = _ref6.instance,
      index = _ref6.index;
    return ['p-carousel-indicator', {
      'p-carousel-indicator-active': instance.d_page === index
    }];
  },
  indicatorButton: 'p-carousel-indicator-button',
  footer: 'p-carousel-footer'
};
var CarouselStyle = BaseStyle.extend({
  name: 'carousel',
  style: style$1c,
  classes: classes$N
});

var classes$M = {
  root: function root(_ref) {
    var _instance$$pcCarousel;
    var instance = _ref.instance;
    return ['p-carousel-content', ((_instance$$pcCarousel = instance.$pcCarousel) === null || _instance$$pcCarousel === void 0 ? void 0 : _instance$$pcCarousel.orientation) === 'vertical' ? 'p-carousel-content-vertical' : 'p-carousel-content-horizontal'];
  }
};
var inlineStyles$2 = {
  root: function root(_ref2) {
    var _c$resolveSnapType;
    var instance = _ref2.instance;
    var c = instance.$pcCarousel;
    var isVertical = (c === null || c === void 0 ? void 0 : c.orientation) === 'vertical';
    return {
      '--px-slides-per-page': c === null || c === void 0 ? void 0 : c.slidesPerPage,
      '--px-spacing-items': (c === null || c === void 0 ? void 0 : c.spacing) + 'px',
      '--px-scroll-snap-type': c === null || c === void 0 || (_c$resolveSnapType = c.resolveSnapType) === null || _c$resolveSnapType === void 0 ? void 0 : _c$resolveSnapType.call(c),
      position: 'relative',
      scrollbarWidth: 'none',
      display: 'flex',
      flexDirection: isVertical ? 'column' : 'row',
      overflowX: isVertical ? undefined : 'scroll',
      overflowY: isVertical ? 'scroll' : undefined,
      overscrollBehaviorX: isVertical ? undefined : 'contain',
      overscrollBehaviorY: isVertical ? 'contain' : undefined,
      gap: 'var(--px-spacing-items)',
      scrollSnapType: 'var(--px-scroll-snap-type)'
    };
  }
};
var CarouselContentStyle = BaseStyle.extend({
  name: 'carouselcontent',
  classes: classes$M,
  inlineStyles: inlineStyles$2
});

var classes$L = {
  root: function root(_ref) {
    var instance = _ref.instance;
    return ['p-carousel-indicator-button', instance.active ? 'p-carousel-indicator-active' : ''];
  }
};
var CarouselIndicatorStyle = BaseStyle.extend({
  name: 'carouselindicator',
  classes: classes$L
});

var classes$K = {
  root: 'p-carousel-indicator-list'
};
var CarouselIndicatorsStyle = BaseStyle.extend({
  name: 'carouselindicators',
  classes: classes$K
});

var classes$J = {
  root: 'p-carousel-item'
};
var inlineStyles$1 = {
  root: function root(_ref) {
    var instance = _ref.instance;
    var c = instance.$pcCarousel;
    return {
      flexGrow: 0,
      flexShrink: 0,
      minWidth: 0,
      flexBasis: c !== null && c !== void 0 && c.autoSize ? 'auto' : 'calc(100% / var(--px-slides-per-page) - var(--px-spacing-items) * (var(--px-slides-per-page) - 1) / var(--px-slides-per-page))',
      scrollSnapAlign: c === null || c === void 0 ? void 0 : c.align
    };
  }
};
var CarouselItemStyle = BaseStyle.extend({
  name: 'carouselitem',
  classes: classes$J,
  inlineStyles: inlineStyles$1
});

var classes$I = {
  root: function root(_ref) {
    var instance = _ref.instance;
    return ['p-carousel-next', {
      'p-disabled': instance.effectiveDisabled
    }];
  }
};
var CarouselNextStyle = BaseStyle.extend({
  name: 'carouselnext',
  classes: classes$I
});

var classes$H = {
  root: function root(_ref) {
    var instance = _ref.instance;
    return ['p-carousel-prev', {
      'p-disabled': instance.effectiveDisabled
    }];
  }
};
var CarouselPrevStyle = BaseStyle.extend({
  name: 'carouselprev',
  classes: classes$H
});

var classes$G = {
  mask: 'p-galleria-mask p-overlay-mask p-overlay-mask-enter-active',
  root: function root(_ref) {
    var instance = _ref.instance;
    var thumbnailsPosClass = instance.$attrs.showThumbnails && instance.getPositionClass('p-galleria-thumbnails', instance.$attrs.thumbnailsPosition);
    var indicatorPosClass = instance.$attrs.showIndicators && instance.getPositionClass('p-galleria-indicators', instance.$attrs.indicatorsPosition);
    return ['p-galleria p-component', {
      'p-galleria-fullscreen': instance.$attrs.fullScreen,
      'p-galleria-inset-indicators': instance.$attrs.showIndicatorsOnItem,
      'p-galleria-hover-navigators': instance.$attrs.showItemNavigatorsOnHover && !instance.$attrs.fullScreen
    }, thumbnailsPosClass, indicatorPosClass];
  },
  closeButton: 'p-galleria-close-button',
  closeIcon: 'p-galleria-close-icon',
  header: 'p-galleria-header',
  content: 'p-galleria-content',
  footer: 'p-galleria-footer',
  itemsContainer: 'p-galleria-items-container',
  items: 'p-galleria-items',
  prevButton: function prevButton(_ref2) {
    var instance = _ref2.instance;
    return ['p-galleria-prev-button p-galleria-nav-button', {
      'p-disabled': instance.isNavBackwardDisabled
    }];
  },
  prevIcon: 'p-galleria-prev-icon',
  item: 'p-galleria-item',
  nextButton: function nextButton(_ref3) {
    var instance = _ref3.instance;
    return ['p-galleria-next-button p-galleria-nav-button', {
      'p-disabled': instance.isNavForwardDisabled
    }];
  },
  nextIcon: 'p-galleria-next-icon',
  caption: 'p-galleria-caption',
  indicatorList: 'p-galleria-indicator-list',
  indicator: function indicator(_ref4) {
    var instance = _ref4.instance,
      index = _ref4.index;
    return ['p-galleria-indicator', {
      'p-galleria-indicator-active': instance.isIndicatorItemActive(index)
    }];
  },
  indicatorButton: 'p-galleria-indicator-button',
  thumbnails: 'p-galleria-thumbnails',
  thumbnailContent: 'p-galleria-thumbnails-content',
  thumbnailPrevButton: function thumbnailPrevButton(_ref5) {
    var instance = _ref5.instance;
    return ['p-galleria-thumbnail-prev-button p-galleria-thumbnail-nav-button', {
      'p-disabled': instance.isNavBackwardDisabled
    }];
  },
  thumbnailPrevIcon: 'p-galleria-thumbnail-prev-icon',
  thumbnailsViewport: 'p-galleria-thumbnails-viewport',
  thumbnailItems: 'p-galleria-thumbnail-items',
  thumbnailItem: function thumbnailItem(_ref6) {
    var instance = _ref6.instance,
      index = _ref6.index,
      activeIndex = _ref6.activeIndex;
    return ['p-galleria-thumbnail-item', {
      'p-galleria-thumbnail-item-current': activeIndex === index,
      'p-galleria-thumbnail-item-active': instance.isItemActive(index),
      'p-galleria-thumbnail-item-start': instance.firstItemAciveIndex() === index,
      'p-galleria-thumbnail-item-end': instance.lastItemActiveIndex() === index
    }];
  },
  thumbnail: 'p-galleria-thumbnail',
  thumbnailNextButton: function thumbnailNextButton(_ref7) {
    var instance = _ref7.instance;
    return ['p-galleria-thumbnail-next-button p-galleria-thumbnail-nav-button', {
      'p-disabled': instance.isNavForwardDisabled
    }];
  },
  thumbnailNextIcon: 'p-galleria-thumbnail-next-icon'
};
var GalleriaStyle = BaseStyle.extend({
  name: 'galleria',
  style: style$1d,
  classes: classes$G
});

var classes$F = {
  root: 'p-gallery p-component'
};
var GalleryStyle = BaseStyle.extend({
  name: 'gallery',
  style: style$1e,
  classes: classes$F
});

var classes$E = {
  root: 'p-gallery-backdrop'
};
var GalleryBackdropStyle = BaseStyle.extend({
  name: 'gallerybackdrop',
  classes: classes$E
});

var classes$D = {
  root: 'p-gallery-content'
};
var GalleryContentStyle = BaseStyle.extend({
  name: 'gallerycontent',
  classes: classes$D
});

var classes$C = {
  root: 'p-gallery-download p-gallery-action'
};
var GalleryDownloadStyle = BaseStyle.extend({
  name: 'gallerydownload',
  classes: classes$C
});

var classes$B = {
  root: 'p-gallery-flip-x p-gallery-action'
};
var GalleryFlipXStyle = BaseStyle.extend({
  name: 'galleryflipx',
  classes: classes$B
});

var classes$A = {
  root: 'p-gallery-flip-y p-gallery-action'
};
var GalleryFlipYStyle = BaseStyle.extend({
  name: 'galleryflipy',
  classes: classes$A
});

var classes$z = {
  root: 'p-gallery-footer'
};
var GalleryFooterStyle = BaseStyle.extend({
  name: 'galleryfooter',
  classes: classes$z
});

var classes$y = {
  root: 'p-gallery-fullscreen p-gallery-action'
};
var GalleryFullScreenStyle = BaseStyle.extend({
  name: 'galleryfullscreen',
  classes: classes$y
});

var classes$x = {
  root: 'p-gallery-header'
};
var GalleryHeaderStyle = BaseStyle.extend({
  name: 'galleryheader',
  classes: classes$x
});

var classes$w = {
  root: 'p-gallery-item'
};
var GalleryItemStyle = BaseStyle.extend({
  name: 'galleryitem',
  classes: classes$w
});

var classes$v = {
  root: 'p-gallery-next'
};
var GalleryNextStyle = BaseStyle.extend({
  name: 'gallerynext',
  classes: classes$v
});

var classes$u = {
  root: 'p-gallery-prev'
};
var GalleryPrevStyle = BaseStyle.extend({
  name: 'galleryprev',
  classes: classes$u
});

var classes$t = {
  root: 'p-gallery-rotate-left p-gallery-action'
};
var GalleryRotateLeftStyle = BaseStyle.extend({
  name: 'galleryrotateleft',
  classes: classes$t
});

var classes$s = {
  root: 'p-gallery-rotate-right p-gallery-action'
};
var GalleryRotateRightStyle = BaseStyle.extend({
  name: 'galleryrotateright',
  classes: classes$s
});

var classes$r = {
  root: 'p-gallery-thumbnail'
};
var GalleryThumbnailStyle = BaseStyle.extend({
  name: 'gallerythumbnail',
  classes: classes$r
});

var classes$q = {
  root: 'p-gallery-thumbnail-content'
};
var GalleryThumbnailContentStyle = BaseStyle.extend({
  name: 'gallerythumbnailcontent',
  classes: classes$q
});

var classes$p = {
  root: 'p-gallery-thumbnail-item'
};
var GalleryThumbnailItemStyle = BaseStyle.extend({
  name: 'gallerythumbnailitem',
  classes: classes$p
});

var classes$o = {
  root: 'p-gallery-zoom-in p-gallery-action'
};
var GalleryZoomInStyle = BaseStyle.extend({
  name: 'galleryzoomin',
  classes: classes$o
});

var classes$n = {
  root: 'p-gallery-zoom-out p-gallery-action'
};
var GalleryZoomOutStyle = BaseStyle.extend({
  name: 'galleryzoomout',
  classes: classes$n
});

var classes$m = {
  root: 'p-gallery-zoom-toggle p-gallery-action'
};
var GalleryZoomToggleStyle = BaseStyle.extend({
  name: 'galleryzoomtoggle',
  classes: classes$m
});

var classes$l = {
  root: 'p-compare p-component',
  input: 'p-compare-input'
};
var CompareStyle = BaseStyle.extend({
  name: 'compare',
  style: style$1f,
  classes: classes$l
});

var classes$k = {
  root: 'p-compare-handle'
};
var CompareHandleStyle = BaseStyle.extend({
  name: 'comparehandle',
  classes: classes$k
});

var classes$j = {
  root: 'p-compare-indicator'
};
var CompareIndicatorStyle = BaseStyle.extend({
  name: 'compareindicator',
  classes: classes$j
});

var classes$i = {
  root: 'p-compare-item'
};
var CompareItemStyle = BaseStyle.extend({
  name: 'compareitem',
  classes: classes$i
});

var classes$h = {
  root: function root(_ref) {
    var props = _ref.props;
    return ['p-image p-component', {
      'p-image-preview': props.preview
    }];
  },
  previewMask: 'p-image-preview-mask',
  previewIcon: 'p-image-preview-icon',
  mask: 'p-image-mask p-overlay-mask p-overlay-mask-enter-active',
  toolbar: 'p-image-toolbar',
  rotateRightButton: 'p-image-action p-image-rotate-right-button',
  rotateLeftButton: 'p-image-action p-image-rotate-left-button',
  zoomOutButton: function zoomOutButton(_ref2) {
    var instance = _ref2.instance;
    return ['p-image-action p-image-zoom-out-button', {
      'p-disabled': instance.isZoomOutDisabled
    }];
  },
  zoomInButton: function zoomInButton(_ref3) {
    var instance = _ref3.instance;
    return ['p-image-action p-image-zoom-in-button', {
      'p-disabled': instance.isZoomInDisabled
    }];
  },
  closeButton: 'p-image-action p-image-close-button',
  original: 'p-image-original'
};
var ImageStyle = BaseStyle.extend({
  name: 'image',
  style: style$1g,
  classes: classes$h
});

var classes$g = {
  root: 'p-imagecompare',
  slider: 'p-imagecompare-slider'
};
var ImageCompareStyle = BaseStyle.extend({
  name: 'imagecompare',
  style: style$1h,
  classes: classes$g
});

var classes$f = {
  root: function root(_ref) {
    var props = _ref.props;
    return ['p-avatar p-component', {
      'p-avatar-image': props.image != null,
      'p-avatar-circle': props.shape === 'circle',
      'p-avatar-lg': props.size === 'large',
      'p-avatar-xl': props.size === 'xlarge'
    }];
  },
  label: 'p-avatar-label',
  icon: 'p-avatar-icon'
};
var AvatarStyle = BaseStyle.extend({
  name: 'avatar',
  style: style$1i,
  classes: classes$f
});

var classes$e = {
  root: 'p-avatar-group p-component'
};
var AvatarGroupStyle = BaseStyle.extend({
  name: 'avatargroup',
  classes: classes$e
});

var classes$d = {
  root: function root(_ref) {
    var props = _ref.props,
      instance = _ref.instance;
    return ['p-badge p-component', {
      'p-badge-circle': isNotEmpty(props.value) && String(props.value).length === 1,
      'p-badge-dot': isEmpty(props.value) && !instance.$slots["default"],
      'p-badge-sm': props.size === 'small',
      'p-badge-lg': props.size === 'large',
      'p-badge-xl': props.size === 'xlarge',
      'p-badge-info': props.severity === 'info',
      'p-badge-success': props.severity === 'success',
      'p-badge-warn': props.severity === 'warn',
      'p-badge-danger': props.severity === 'danger',
      'p-badge-secondary': props.severity === 'secondary',
      'p-badge-contrast': props.severity === 'contrast'
    }];
  }
};
var BadgeStyle = BaseStyle.extend({
  name: 'badge',
  style: style$1j,
  classes: classes$d
});

var classes$c = {
  root: 'p-blockui'
};
var BlockUIStyle = BaseStyle.extend({
  name: 'blockui',
  style: style$1k,
  classes: classes$c
});

var classes$b = {
  root: 'p-chip p-component',
  image: 'p-chip-image',
  icon: 'p-chip-icon',
  label: 'p-chip-label',
  removeIcon: 'p-chip-remove-icon'
};
var ChipStyle = BaseStyle.extend({
  name: 'chip',
  style: style$1l,
  classes: classes$b
});

var classes$a = {
  root: 'p-inplace p-component',
  display: function display(_ref) {
    var props = _ref.props;
    return ['p-inplace-display', {
      'p-disabled': props.disabled
    }];
  },
  content: 'p-inplace-content'
};
var InplaceStyle = BaseStyle.extend({
  name: 'inplace',
  style: style$1m,
  classes: classes$a
});

var classes$9 = {
  root: function root(_ref) {
    var props = _ref.props;
    return ['p-metergroup p-component', {
      'p-metergroup-horizontal': props.orientation === 'horizontal',
      'p-metergroup-vertical': props.orientation === 'vertical'
    }];
  },
  meters: 'p-metergroup-meters',
  meter: 'p-metergroup-meter',
  labelList: function labelList(_ref2) {
    var props = _ref2.props;
    return ['p-metergroup-label-list', {
      'p-metergroup-label-list-vertical': props.labelOrientation === 'vertical',
      'p-metergroup-label-list-horizontal': props.labelOrientation === 'horizontal'
    }];
  },
  label: 'p-metergroup-label',
  labelIcon: 'p-metergroup-label-icon',
  labelMarker: 'p-metergroup-label-marker',
  labelText: 'p-metergroup-label-text'
};
var MeterGroupStyle = BaseStyle.extend({
  name: 'metergroup',
  style: style$1n,
  classes: classes$9
});

var classes$8 = {
  root: 'p-overlaybadge'
};
var OverlayBadgeStyle = BaseStyle.extend({
  name: 'overlaybadge',
  style: style$1o,
  classes: classes$8
});

var classes$7 = {
  root: function root(_ref) {
    var props = _ref.props;
    return ['p-scrolltop', {
      'p-scrolltop-sticky': props.target !== 'window'
    }];
  },
  icon: 'p-scrolltop-icon'
};
var ScrollTopStyle = BaseStyle.extend({
  name: 'scrolltop',
  style: style$1p,
  classes: classes$7
});

var inlineStyles = {
  root: {
    position: 'relative'
  }
};
var classes$6 = {
  root: function root(_ref) {
    var props = _ref.props;
    return ['p-skeleton p-component', {
      'p-skeleton-circle': props.shape === 'circle',
      'p-skeleton-animation-none': props.animation === 'none'
    }];
  }
};
var SkeletonStyle = BaseStyle.extend({
  name: 'skeleton',
  style: style$1q,
  classes: classes$6,
  inlineStyles: inlineStyles
});

var classes$5 = {
  root: function root(_ref) {
    var instance = _ref.instance;
    return ['p-progressbar p-component', {
      'p-progressbar-determinate': instance.determinate,
      'p-progressbar-indeterminate': instance.indeterminate
    }];
  },
  value: 'p-progressbar-value',
  label: 'p-progressbar-label'
};
var ProgressBarStyle = BaseStyle.extend({
  name: 'progressbar',
  style: style$1r,
  classes: classes$5
});

var style = /*css*/"\n.p-progressspinner {\n    position: relative;\n    display: inline-flex;\n    align-items: center;\n    justify-content: center;\n    width: 100px;\n    height: 100px;\n}\n\n.p-progressspinner-circle {\n    width: 100%;\n    height: 100%;\n}\n\n.p-progressspinner-circle-track {\n    stroke: dt('content.border.color');\n}\n\n.p-progressspinner-circle-range {\n    stroke: dt('progressspinner.color.one');\n    stroke-linecap: round;\n    transition: stroke-dashoffset 0.3s;\n}\n\n[data-state=\"determinate\"] .p-progressspinner-circle-range {\n    transform: rotate(-90deg);\n    transform-origin: center;\n}\n\n[data-state=\"indeterminate\"] .p-progressspinner-circle {\n    animation: p-progressspinner-rotate 2s linear infinite;\n    transform-origin: center;\n}\n\n[data-state=\"indeterminate\"] .p-progressspinner-circle-range {\n    stroke-dasharray: 1, 302;\n    stroke-dashoffset: 0;\n    animation:\n        p-progressspinner-dash 1.5s ease-in-out infinite,\n        p-progressspinner-color 6s ease-in-out infinite;\n}\n\n.p-progressspinner-value {\n    fill: dt('text.muted.color');\n}\n\n@keyframes p-progressspinner-rotate {\n    100% {\n        transform: rotate(360deg);\n    }\n}\n\n@keyframes p-progressspinner-dash {\n    0% {\n        stroke-dasharray: 1, 302;\n        stroke-dashoffset: 0;\n    }\n    50% {\n        stroke-dasharray: 136, 302;\n        stroke-dashoffset: -54px;\n    }\n    100% {\n        stroke-dasharray: 1, 302;\n        stroke-dashoffset: -302px;\n    }\n}\n\n@keyframes p-progressspinner-color {\n    100%,\n    0% {\n        stroke: dt('progressspinner.color.one');\n    }\n    40% {\n        stroke: dt('progressspinner.color.two');\n    }\n    66% {\n        stroke: dt('progressspinner.color.three');\n    }\n    80%,\n    90% {\n        stroke: dt('progressspinner.color.four');\n    }\n}\n";
var classes$4 = {
  root: 'p-progressspinner',
  circle: 'p-progressspinner-circle',
  circleTrack: 'p-progressspinner-circle-track',
  circleRange: 'p-progressspinner-circle-range',
  value: 'p-progressspinner-value'
};
var ProgressSpinnerStyle = BaseStyle.extend({
  name: 'progressspinner',
  style: style,
  classes: classes$4
});

var classes$3 = {
  root: function root(_ref) {
    var props = _ref.props;
    return ['p-tag p-component', {
      'p-tag-info': props.severity === 'info',
      'p-tag-success': props.severity === 'success',
      'p-tag-warn': props.severity === 'warn',
      'p-tag-danger': props.severity === 'danger',
      'p-tag-secondary': props.severity === 'secondary',
      'p-tag-contrast': props.severity === 'contrast',
      'p-tag-rounded': props.rounded
    }];
  },
  icon: 'p-tag-icon',
  label: 'p-tag-label'
};
var TagStyle = BaseStyle.extend({
  name: 'tag',
  style: style$1s,
  classes: classes$3
});

var classes$2 = {
  root: 'p-terminal p-component',
  welcomeMessage: 'p-terminal-welcome-message',
  commandList: 'p-terminal-command-list',
  command: 'p-terminal-command',
  commandValue: 'p-terminal-command-value',
  commandResponse: 'p-terminal-command-response',
  prompt: 'p-terminal-prompt',
  promptLabel: 'p-terminal-prompt-label',
  promptValue: 'p-terminal-prompt-value'
};
var TerminalStyle = BaseStyle.extend({
  name: 'terminal',
  style: style$1t,
  classes: classes$2
});

var classes$1 = {
  root: 'p-tooltip p-component',
  arrow: 'p-tooltip-arrow',
  text: 'p-tooltip-text'
};
var TooltipStyle = BaseStyle.extend({
  name: 'tooltip-directive',
  style: style$1u,
  classes: classes$1
});

var classes = {
  root: 'p-ink'
};
var RippleStyle = BaseStyle.extend({
  name: 'ripple-directive',
  style: style$1v,
  classes: classes
});

var StyleClassStyle = BaseStyle.extend({
  name: 'styleclass-directive'
});

var FocusTrapStyle = BaseStyle.extend({
  name: 'focustrap-directive'
});

var AnimateOnScrollStyle = BaseStyle.extend({
  name: 'animateonscroll-directive'
});

var KeyFilterStyle = BaseStyle.extend({
  name: 'keyfilter-directive'
});

var MaskStyle = BaseStyle.extend({
  name: 'mask-directive'
});

const runtimeConfig = useRuntimeConfig();
const config = runtimeConfig?.public?.primevue ?? {};
const { options: options$1 = {} } = config;

const stylesToTop = [].join('');
const styleProps = {
    
};

Theme.setTheme(options$1?.theme);

const styles = [
    ,
    BaseStyle && BaseStyle.getStyleSheet ? BaseStyle.getStyleSheet(undefined, styleProps) : '',BaseComponentStyle && BaseComponentStyle.getStyleSheet ? BaseComponentStyle.getStyleSheet(undefined, styleProps) : '',AutoCompleteStyle && AutoCompleteStyle.getStyleSheet ? AutoCompleteStyle.getStyleSheet(undefined, styleProps) : '',CascadeSelectStyle && CascadeSelectStyle.getStyleSheet ? CascadeSelectStyle.getStyleSheet(undefined, styleProps) : '',CheckboxStyle && CheckboxStyle.getStyleSheet ? CheckboxStyle.getStyleSheet(undefined, styleProps) : '',CheckboxGroupStyle && CheckboxGroupStyle.getStyleSheet ? CheckboxGroupStyle.getStyleSheet(undefined, styleProps) : '',ColorPickerStyle && ColorPickerStyle.getStyleSheet ? ColorPickerStyle.getStyleSheet(undefined, styleProps) : '',DatePickerStyle && DatePickerStyle.getStyleSheet ? DatePickerStyle.getStyleSheet(undefined, styleProps) : '',FloatLabelStyle && FloatLabelStyle.getStyleSheet ? FloatLabelStyle.getStyleSheet(undefined, styleProps) : '',FluidStyle && FluidStyle.getStyleSheet ? FluidStyle.getStyleSheet(undefined, styleProps) : '',IconFieldStyle && IconFieldStyle.getStyleSheet ? IconFieldStyle.getStyleSheet(undefined, styleProps) : '',IftaLabelStyle && IftaLabelStyle.getStyleSheet ? IftaLabelStyle.getStyleSheet(undefined, styleProps) : '',InputColorStyle && InputColorStyle.getStyleSheet ? InputColorStyle.getStyleSheet(undefined, styleProps) : '',InputColorAreaStyle && InputColorAreaStyle.getStyleSheet ? InputColorAreaStyle.getStyleSheet(undefined, styleProps) : '',InputColorAreaBackgroundStyle && InputColorAreaBackgroundStyle.getStyleSheet ? InputColorAreaBackgroundStyle.getStyleSheet(undefined, styleProps) : '',InputColorAreaHandleStyle && InputColorAreaHandleStyle.getStyleSheet ? InputColorAreaHandleStyle.getStyleSheet(undefined, styleProps) : '',InputColorEyeDropperStyle && InputColorEyeDropperStyle.getStyleSheet ? InputColorEyeDropperStyle.getStyleSheet(undefined, styleProps) : '',InputColorInputStyle && InputColorInputStyle.getStyleSheet ? InputColorInputStyle.getStyleSheet(undefined, styleProps) : '',InputColorSliderStyle && InputColorSliderStyle.getStyleSheet ? InputColorSliderStyle.getStyleSheet(undefined, styleProps) : '',InputColorSliderHandleStyle && InputColorSliderHandleStyle.getStyleSheet ? InputColorSliderHandleStyle.getStyleSheet(undefined, styleProps) : '',InputColorSliderTrackStyle && InputColorSliderTrackStyle.getStyleSheet ? InputColorSliderTrackStyle.getStyleSheet(undefined, styleProps) : '',InputColorSwatchStyle && InputColorSwatchStyle.getStyleSheet ? InputColorSwatchStyle.getStyleSheet(undefined, styleProps) : '',InputColorSwatchBackgroundStyle && InputColorSwatchBackgroundStyle.getStyleSheet ? InputColorSwatchBackgroundStyle.getStyleSheet(undefined, styleProps) : '',InputColorTransparencyGridStyle && InputColorTransparencyGridStyle.getStyleSheet ? InputColorTransparencyGridStyle.getStyleSheet(undefined, styleProps) : '',InputGroupStyle && InputGroupStyle.getStyleSheet ? InputGroupStyle.getStyleSheet(undefined, styleProps) : '',InputGroupAddonStyle && InputGroupAddonStyle.getStyleSheet ? InputGroupAddonStyle.getStyleSheet(undefined, styleProps) : '',InputIconStyle && InputIconStyle.getStyleSheet ? InputIconStyle.getStyleSheet(undefined, styleProps) : '',InputMaskStyle && InputMaskStyle.getStyleSheet ? InputMaskStyle.getStyleSheet(undefined, styleProps) : '',InputNumberStyle && InputNumberStyle.getStyleSheet ? InputNumberStyle.getStyleSheet(undefined, styleProps) : '',InputOtpStyle && InputOtpStyle.getStyleSheet ? InputOtpStyle.getStyleSheet(undefined, styleProps) : '',InputPasswordStyle && InputPasswordStyle.getStyleSheet ? InputPasswordStyle.getStyleSheet(undefined, styleProps) : '',InputTagsStyle && InputTagsStyle.getStyleSheet ? InputTagsStyle.getStyleSheet(undefined, styleProps) : '',InputTextStyle && InputTextStyle.getStyleSheet ? InputTextStyle.getStyleSheet(undefined, styleProps) : '',KnobStyle && KnobStyle.getStyleSheet ? KnobStyle.getStyleSheet(undefined, styleProps) : '',LabelStyle && LabelStyle.getStyleSheet ? LabelStyle.getStyleSheet(undefined, styleProps) : '',ListboxStyle && ListboxStyle.getStyleSheet ? ListboxStyle.getStyleSheet(undefined, styleProps) : '',MultiSelectStyle && MultiSelectStyle.getStyleSheet ? MultiSelectStyle.getStyleSheet(undefined, styleProps) : '',PasswordStyle && PasswordStyle.getStyleSheet ? PasswordStyle.getStyleSheet(undefined, styleProps) : '',RadioButtonStyle && RadioButtonStyle.getStyleSheet ? RadioButtonStyle.getStyleSheet(undefined, styleProps) : '',RadioButtonGroupStyle && RadioButtonGroupStyle.getStyleSheet ? RadioButtonGroupStyle.getStyleSheet(undefined, styleProps) : '',RatingStyle && RatingStyle.getStyleSheet ? RatingStyle.getStyleSheet(undefined, styleProps) : '',SelectStyle && SelectStyle.getStyleSheet ? SelectStyle.getStyleSheet(undefined, styleProps) : '',SelectButtonStyle && SelectButtonStyle.getStyleSheet ? SelectButtonStyle.getStyleSheet(undefined, styleProps) : '',SliderStyle && SliderStyle.getStyleSheet ? SliderStyle.getStyleSheet(undefined, styleProps) : '',TextareaStyle && TextareaStyle.getStyleSheet ? TextareaStyle.getStyleSheet(undefined, styleProps) : '',ToggleButtonStyle && ToggleButtonStyle.getStyleSheet ? ToggleButtonStyle.getStyleSheet(undefined, styleProps) : '',ToggleSwitchStyle && ToggleSwitchStyle.getStyleSheet ? ToggleSwitchStyle.getStyleSheet(undefined, styleProps) : '',TreeSelectStyle && TreeSelectStyle.getStyleSheet ? TreeSelectStyle.getStyleSheet(undefined, styleProps) : '',ButtonStyle && ButtonStyle.getStyleSheet ? ButtonStyle.getStyleSheet(undefined, styleProps) : '',ButtonGroupStyle && ButtonGroupStyle.getStyleSheet ? ButtonGroupStyle.getStyleSheet(undefined, styleProps) : '',SpeedDialStyle && SpeedDialStyle.getStyleSheet ? SpeedDialStyle.getStyleSheet(undefined, styleProps) : '',SplitButtonStyle && SplitButtonStyle.getStyleSheet ? SplitButtonStyle.getStyleSheet(undefined, styleProps) : '',ColumnStyle && ColumnStyle.getStyleSheet ? ColumnStyle.getStyleSheet(undefined, styleProps) : '',RowStyle && RowStyle.getStyleSheet ? RowStyle.getStyleSheet(undefined, styleProps) : '',ColumnGroupStyle && ColumnGroupStyle.getStyleSheet ? ColumnGroupStyle.getStyleSheet(undefined, styleProps) : '',DataTableStyle && DataTableStyle.getStyleSheet ? DataTableStyle.getStyleSheet(undefined, styleProps) : '',DataViewStyle && DataViewStyle.getStyleSheet ? DataViewStyle.getStyleSheet(undefined, styleProps) : '',OrderListStyle && OrderListStyle.getStyleSheet ? OrderListStyle.getStyleSheet(undefined, styleProps) : '',OrganizationChartStyle && OrganizationChartStyle.getStyleSheet ? OrganizationChartStyle.getStyleSheet(undefined, styleProps) : '',PaginatorStyle && PaginatorStyle.getStyleSheet ? PaginatorStyle.getStyleSheet(undefined, styleProps) : '',PickListStyle && PickListStyle.getStyleSheet ? PickListStyle.getStyleSheet(undefined, styleProps) : '',TreeStyle && TreeStyle.getStyleSheet ? TreeStyle.getStyleSheet(undefined, styleProps) : '',TreeTableStyle && TreeTableStyle.getStyleSheet ? TreeTableStyle.getStyleSheet(undefined, styleProps) : '',TimelineStyle && TimelineStyle.getStyleSheet ? TimelineStyle.getStyleSheet(undefined, styleProps) : '',VirtualScrollerStyle && VirtualScrollerStyle.getStyleSheet ? VirtualScrollerStyle.getStyleSheet(undefined, styleProps) : '',AccordionStyle && AccordionStyle.getStyleSheet ? AccordionStyle.getStyleSheet(undefined, styleProps) : '',AccordionPanelStyle && AccordionPanelStyle.getStyleSheet ? AccordionPanelStyle.getStyleSheet(undefined, styleProps) : '',AccordionHeaderStyle && AccordionHeaderStyle.getStyleSheet ? AccordionHeaderStyle.getStyleSheet(undefined, styleProps) : '',AccordionContentStyle && AccordionContentStyle.getStyleSheet ? AccordionContentStyle.getStyleSheet(undefined, styleProps) : '',CardStyle && CardStyle.getStyleSheet ? CardStyle.getStyleSheet(undefined, styleProps) : '',DeferredContentStyle && DeferredContentStyle.getStyleSheet ? DeferredContentStyle.getStyleSheet(undefined, styleProps) : '',DividerStyle && DividerStyle.getStyleSheet ? DividerStyle.getStyleSheet(undefined, styleProps) : '',FieldsetStyle && FieldsetStyle.getStyleSheet ? FieldsetStyle.getStyleSheet(undefined, styleProps) : '',PanelStyle && PanelStyle.getStyleSheet ? PanelStyle.getStyleSheet(undefined, styleProps) : '',ScrollAreaStyle && ScrollAreaStyle.getStyleSheet ? ScrollAreaStyle.getStyleSheet(undefined, styleProps) : '',ScrollAreaContentStyle && ScrollAreaContentStyle.getStyleSheet ? ScrollAreaContentStyle.getStyleSheet(undefined, styleProps) : '',ScrollAreaCornerStyle && ScrollAreaCornerStyle.getStyleSheet ? ScrollAreaCornerStyle.getStyleSheet(undefined, styleProps) : '',ScrollAreaHandleStyle && ScrollAreaHandleStyle.getStyleSheet ? ScrollAreaHandleStyle.getStyleSheet(undefined, styleProps) : '',ScrollAreaScrollbarStyle && ScrollAreaScrollbarStyle.getStyleSheet ? ScrollAreaScrollbarStyle.getStyleSheet(undefined, styleProps) : '',ScrollAreaViewportStyle && ScrollAreaViewportStyle.getStyleSheet ? ScrollAreaViewportStyle.getStyleSheet(undefined, styleProps) : '',ScrollPanelStyle && ScrollPanelStyle.getStyleSheet ? ScrollPanelStyle.getStyleSheet(undefined, styleProps) : '',SplitterStyle && SplitterStyle.getStyleSheet ? SplitterStyle.getStyleSheet(undefined, styleProps) : '',SplitterPanelStyle && SplitterPanelStyle.getStyleSheet ? SplitterPanelStyle.getStyleSheet(undefined, styleProps) : '',StepperStyle && StepperStyle.getStyleSheet ? StepperStyle.getStyleSheet(undefined, styleProps) : '',StepListStyle && StepListStyle.getStyleSheet ? StepListStyle.getStyleSheet(undefined, styleProps) : '',StepStyle && StepStyle.getStyleSheet ? StepStyle.getStyleSheet(undefined, styleProps) : '',StepItemStyle && StepItemStyle.getStyleSheet ? StepItemStyle.getStyleSheet(undefined, styleProps) : '',StepPanelsStyle && StepPanelsStyle.getStyleSheet ? StepPanelsStyle.getStyleSheet(undefined, styleProps) : '',StepPanelStyle && StepPanelStyle.getStyleSheet ? StepPanelStyle.getStyleSheet(undefined, styleProps) : '',TabsStyle && TabsStyle.getStyleSheet ? TabsStyle.getStyleSheet(undefined, styleProps) : '',TabListStyle && TabListStyle.getStyleSheet ? TabListStyle.getStyleSheet(undefined, styleProps) : '',TabStyle && TabStyle.getStyleSheet ? TabStyle.getStyleSheet(undefined, styleProps) : '',TabPanelsStyle && TabPanelsStyle.getStyleSheet ? TabPanelsStyle.getStyleSheet(undefined, styleProps) : '',TabPanelStyle && TabPanelStyle.getStyleSheet ? TabPanelStyle.getStyleSheet(undefined, styleProps) : '',ToolbarStyle && ToolbarStyle.getStyleSheet ? ToolbarStyle.getStyleSheet(undefined, styleProps) : '',ConfirmDialogStyle && ConfirmDialogStyle.getStyleSheet ? ConfirmDialogStyle.getStyleSheet(undefined, styleProps) : '',ConfirmPopupStyle && ConfirmPopupStyle.getStyleSheet ? ConfirmPopupStyle.getStyleSheet(undefined, styleProps) : '',DialogStyle && DialogStyle.getStyleSheet ? DialogStyle.getStyleSheet(undefined, styleProps) : '',DrawerStyle && DrawerStyle.getStyleSheet ? DrawerStyle.getStyleSheet(undefined, styleProps) : '',DynamicDialogStyle && DynamicDialogStyle.getStyleSheet ? DynamicDialogStyle.getStyleSheet(undefined, styleProps) : '',PopoverStyle && PopoverStyle.getStyleSheet ? PopoverStyle.getStyleSheet(undefined, styleProps) : '',FileUploadStyle && FileUploadStyle.getStyleSheet ? FileUploadStyle.getStyleSheet(undefined, styleProps) : '',BreadcrumbStyle && BreadcrumbStyle.getStyleSheet ? BreadcrumbStyle.getStyleSheet(undefined, styleProps) : '',CommandMenuStyle && CommandMenuStyle.getStyleSheet ? CommandMenuStyle.getStyleSheet(undefined, styleProps) : '',ContextMenuStyle && ContextMenuStyle.getStyleSheet ? ContextMenuStyle.getStyleSheet(undefined, styleProps) : '',DockStyle && DockStyle.getStyleSheet ? DockStyle.getStyleSheet(undefined, styleProps) : '',MenuStyle && MenuStyle.getStyleSheet ? MenuStyle.getStyleSheet(undefined, styleProps) : '',MenubarStyle && MenubarStyle.getStyleSheet ? MenubarStyle.getStyleSheet(undefined, styleProps) : '',MegaMenuStyle && MegaMenuStyle.getStyleSheet ? MegaMenuStyle.getStyleSheet(undefined, styleProps) : '',PanelMenuStyle && PanelMenuStyle.getStyleSheet ? PanelMenuStyle.getStyleSheet(undefined, styleProps) : '',SidebarStyle && SidebarStyle.getStyleSheet ? SidebarStyle.getStyleSheet(undefined, styleProps) : '',SidebarAsideStyle && SidebarAsideStyle.getStyleSheet ? SidebarAsideStyle.getStyleSheet(undefined, styleProps) : '',SidebarBackdropStyle && SidebarBackdropStyle.getStyleSheet ? SidebarBackdropStyle.getStyleSheet(undefined, styleProps) : '',SidebarContentStyle && SidebarContentStyle.getStyleSheet ? SidebarContentStyle.getStyleSheet(undefined, styleProps) : '',SidebarFooterStyle && SidebarFooterStyle.getStyleSheet ? SidebarFooterStyle.getStyleSheet(undefined, styleProps) : '',SidebarGroupStyle && SidebarGroupStyle.getStyleSheet ? SidebarGroupStyle.getStyleSheet(undefined, styleProps) : '',SidebarGroupActionStyle && SidebarGroupActionStyle.getStyleSheet ? SidebarGroupActionStyle.getStyleSheet(undefined, styleProps) : '',SidebarGroupContentStyle && SidebarGroupContentStyle.getStyleSheet ? SidebarGroupContentStyle.getStyleSheet(undefined, styleProps) : '',SidebarGroupLabelStyle && SidebarGroupLabelStyle.getStyleSheet ? SidebarGroupLabelStyle.getStyleSheet(undefined, styleProps) : '',SidebarHeaderStyle && SidebarHeaderStyle.getStyleSheet ? SidebarHeaderStyle.getStyleSheet(undefined, styleProps) : '',SidebarLayoutStyle && SidebarLayoutStyle.getStyleSheet ? SidebarLayoutStyle.getStyleSheet(undefined, styleProps) : '',SidebarMainStyle && SidebarMainStyle.getStyleSheet ? SidebarMainStyle.getStyleSheet(undefined, styleProps) : '',SidebarMenuStyle && SidebarMenuStyle.getStyleSheet ? SidebarMenuStyle.getStyleSheet(undefined, styleProps) : '',SidebarMenuActionStyle && SidebarMenuActionStyle.getStyleSheet ? SidebarMenuActionStyle.getStyleSheet(undefined, styleProps) : '',SidebarMenuBadgeStyle && SidebarMenuBadgeStyle.getStyleSheet ? SidebarMenuBadgeStyle.getStyleSheet(undefined, styleProps) : '',SidebarMenuButtonStyle && SidebarMenuButtonStyle.getStyleSheet ? SidebarMenuButtonStyle.getStyleSheet(undefined, styleProps) : '',SidebarMenuItemStyle && SidebarMenuItemStyle.getStyleSheet ? SidebarMenuItemStyle.getStyleSheet(undefined, styleProps) : '',SidebarMenuSubStyle && SidebarMenuSubStyle.getStyleSheet ? SidebarMenuSubStyle.getStyleSheet(undefined, styleProps) : '',SidebarMenuSubButtonStyle && SidebarMenuSubButtonStyle.getStyleSheet ? SidebarMenuSubButtonStyle.getStyleSheet(undefined, styleProps) : '',SidebarMenuSubItemStyle && SidebarMenuSubItemStyle.getStyleSheet ? SidebarMenuSubItemStyle.getStyleSheet(undefined, styleProps) : '',SidebarPanelStyle && SidebarPanelStyle.getStyleSheet ? SidebarPanelStyle.getStyleSheet(undefined, styleProps) : '',SidebarRailStyle && SidebarRailStyle.getStyleSheet ? SidebarRailStyle.getStyleSheet(undefined, styleProps) : '',SidebarSpacerStyle && SidebarSpacerStyle.getStyleSheet ? SidebarSpacerStyle.getStyleSheet(undefined, styleProps) : '',SidebarTriggerStyle && SidebarTriggerStyle.getStyleSheet ? SidebarTriggerStyle.getStyleSheet(undefined, styleProps) : '',StepsStyle && StepsStyle.getStyleSheet ? StepsStyle.getStyleSheet(undefined, styleProps) : '',TieredMenuStyle && TieredMenuStyle.getStyleSheet ? TieredMenuStyle.getStyleSheet(undefined, styleProps) : '',MessageStyle && MessageStyle.getStyleSheet ? MessageStyle.getStyleSheet(undefined, styleProps) : '',ToastStyle && ToastStyle.getStyleSheet ? ToastStyle.getStyleSheet(undefined, styleProps) : '',CarouselStyle && CarouselStyle.getStyleSheet ? CarouselStyle.getStyleSheet(undefined, styleProps) : '',CarouselContentStyle && CarouselContentStyle.getStyleSheet ? CarouselContentStyle.getStyleSheet(undefined, styleProps) : '',CarouselIndicatorStyle && CarouselIndicatorStyle.getStyleSheet ? CarouselIndicatorStyle.getStyleSheet(undefined, styleProps) : '',CarouselIndicatorsStyle && CarouselIndicatorsStyle.getStyleSheet ? CarouselIndicatorsStyle.getStyleSheet(undefined, styleProps) : '',CarouselItemStyle && CarouselItemStyle.getStyleSheet ? CarouselItemStyle.getStyleSheet(undefined, styleProps) : '',CarouselNextStyle && CarouselNextStyle.getStyleSheet ? CarouselNextStyle.getStyleSheet(undefined, styleProps) : '',CarouselPrevStyle && CarouselPrevStyle.getStyleSheet ? CarouselPrevStyle.getStyleSheet(undefined, styleProps) : '',GalleriaStyle && GalleriaStyle.getStyleSheet ? GalleriaStyle.getStyleSheet(undefined, styleProps) : '',GalleryStyle && GalleryStyle.getStyleSheet ? GalleryStyle.getStyleSheet(undefined, styleProps) : '',GalleryBackdropStyle && GalleryBackdropStyle.getStyleSheet ? GalleryBackdropStyle.getStyleSheet(undefined, styleProps) : '',GalleryContentStyle && GalleryContentStyle.getStyleSheet ? GalleryContentStyle.getStyleSheet(undefined, styleProps) : '',GalleryDownloadStyle && GalleryDownloadStyle.getStyleSheet ? GalleryDownloadStyle.getStyleSheet(undefined, styleProps) : '',GalleryFlipXStyle && GalleryFlipXStyle.getStyleSheet ? GalleryFlipXStyle.getStyleSheet(undefined, styleProps) : '',GalleryFlipYStyle && GalleryFlipYStyle.getStyleSheet ? GalleryFlipYStyle.getStyleSheet(undefined, styleProps) : '',GalleryFooterStyle && GalleryFooterStyle.getStyleSheet ? GalleryFooterStyle.getStyleSheet(undefined, styleProps) : '',GalleryFullScreenStyle && GalleryFullScreenStyle.getStyleSheet ? GalleryFullScreenStyle.getStyleSheet(undefined, styleProps) : '',GalleryHeaderStyle && GalleryHeaderStyle.getStyleSheet ? GalleryHeaderStyle.getStyleSheet(undefined, styleProps) : '',GalleryItemStyle && GalleryItemStyle.getStyleSheet ? GalleryItemStyle.getStyleSheet(undefined, styleProps) : '',GalleryNextStyle && GalleryNextStyle.getStyleSheet ? GalleryNextStyle.getStyleSheet(undefined, styleProps) : '',GalleryPrevStyle && GalleryPrevStyle.getStyleSheet ? GalleryPrevStyle.getStyleSheet(undefined, styleProps) : '',GalleryRotateLeftStyle && GalleryRotateLeftStyle.getStyleSheet ? GalleryRotateLeftStyle.getStyleSheet(undefined, styleProps) : '',GalleryRotateRightStyle && GalleryRotateRightStyle.getStyleSheet ? GalleryRotateRightStyle.getStyleSheet(undefined, styleProps) : '',GalleryThumbnailStyle && GalleryThumbnailStyle.getStyleSheet ? GalleryThumbnailStyle.getStyleSheet(undefined, styleProps) : '',GalleryThumbnailContentStyle && GalleryThumbnailContentStyle.getStyleSheet ? GalleryThumbnailContentStyle.getStyleSheet(undefined, styleProps) : '',GalleryThumbnailItemStyle && GalleryThumbnailItemStyle.getStyleSheet ? GalleryThumbnailItemStyle.getStyleSheet(undefined, styleProps) : '',GalleryZoomInStyle && GalleryZoomInStyle.getStyleSheet ? GalleryZoomInStyle.getStyleSheet(undefined, styleProps) : '',GalleryZoomOutStyle && GalleryZoomOutStyle.getStyleSheet ? GalleryZoomOutStyle.getStyleSheet(undefined, styleProps) : '',GalleryZoomToggleStyle && GalleryZoomToggleStyle.getStyleSheet ? GalleryZoomToggleStyle.getStyleSheet(undefined, styleProps) : '',CompareStyle && CompareStyle.getStyleSheet ? CompareStyle.getStyleSheet(undefined, styleProps) : '',CompareHandleStyle && CompareHandleStyle.getStyleSheet ? CompareHandleStyle.getStyleSheet(undefined, styleProps) : '',CompareIndicatorStyle && CompareIndicatorStyle.getStyleSheet ? CompareIndicatorStyle.getStyleSheet(undefined, styleProps) : '',CompareItemStyle && CompareItemStyle.getStyleSheet ? CompareItemStyle.getStyleSheet(undefined, styleProps) : '',ImageStyle && ImageStyle.getStyleSheet ? ImageStyle.getStyleSheet(undefined, styleProps) : '',ImageCompareStyle && ImageCompareStyle.getStyleSheet ? ImageCompareStyle.getStyleSheet(undefined, styleProps) : '',AvatarStyle && AvatarStyle.getStyleSheet ? AvatarStyle.getStyleSheet(undefined, styleProps) : '',AvatarGroupStyle && AvatarGroupStyle.getStyleSheet ? AvatarGroupStyle.getStyleSheet(undefined, styleProps) : '',BadgeStyle && BadgeStyle.getStyleSheet ? BadgeStyle.getStyleSheet(undefined, styleProps) : '',BlockUIStyle && BlockUIStyle.getStyleSheet ? BlockUIStyle.getStyleSheet(undefined, styleProps) : '',ChipStyle && ChipStyle.getStyleSheet ? ChipStyle.getStyleSheet(undefined, styleProps) : '',InplaceStyle && InplaceStyle.getStyleSheet ? InplaceStyle.getStyleSheet(undefined, styleProps) : '',MeterGroupStyle && MeterGroupStyle.getStyleSheet ? MeterGroupStyle.getStyleSheet(undefined, styleProps) : '',OverlayBadgeStyle && OverlayBadgeStyle.getStyleSheet ? OverlayBadgeStyle.getStyleSheet(undefined, styleProps) : '',ScrollTopStyle && ScrollTopStyle.getStyleSheet ? ScrollTopStyle.getStyleSheet(undefined, styleProps) : '',SkeletonStyle && SkeletonStyle.getStyleSheet ? SkeletonStyle.getStyleSheet(undefined, styleProps) : '',ProgressBarStyle && ProgressBarStyle.getStyleSheet ? ProgressBarStyle.getStyleSheet(undefined, styleProps) : '',ProgressSpinnerStyle && ProgressSpinnerStyle.getStyleSheet ? ProgressSpinnerStyle.getStyleSheet(undefined, styleProps) : '',TagStyle && TagStyle.getStyleSheet ? TagStyle.getStyleSheet(undefined, styleProps) : '',TerminalStyle && TerminalStyle.getStyleSheet ? TerminalStyle.getStyleSheet(undefined, styleProps) : '',FormStyle && FormStyle.getStyleSheet ? FormStyle.getStyleSheet(undefined, styleProps) : '',FormFieldStyle && FormFieldStyle.getStyleSheet ? FormFieldStyle.getStyleSheet(undefined, styleProps) : '',TooltipStyle && TooltipStyle.getStyleSheet ? TooltipStyle.getStyleSheet(undefined, styleProps) : '',RippleStyle && RippleStyle.getStyleSheet ? RippleStyle.getStyleSheet(undefined, styleProps) : '',StyleClassStyle && StyleClassStyle.getStyleSheet ? StyleClassStyle.getStyleSheet(undefined, styleProps) : '',FocusTrapStyle && FocusTrapStyle.getStyleSheet ? FocusTrapStyle.getStyleSheet(undefined, styleProps) : '',AnimateOnScrollStyle && AnimateOnScrollStyle.getStyleSheet ? AnimateOnScrollStyle.getStyleSheet(undefined, styleProps) : '',KeyFilterStyle && KeyFilterStyle.getStyleSheet ? KeyFilterStyle.getStyleSheet(undefined, styleProps) : '',MaskStyle && MaskStyle.getStyleSheet ? MaskStyle.getStyleSheet(undefined, styleProps) : ''
].join('');

const themes = 
[
    BaseStyle && BaseStyle.getCommonThemeStyleSheet ? BaseStyle.getCommonThemeStyleSheet(undefined, styleProps) : '',
    BaseStyle && BaseStyle.getThemeStyleSheet ? BaseStyle.getThemeStyleSheet(undefined, styleProps) : '',BaseComponentStyle && BaseComponentStyle.getThemeStyleSheet ? BaseComponentStyle.getThemeStyleSheet(undefined, styleProps) : '',AutoCompleteStyle && AutoCompleteStyle.getThemeStyleSheet ? AutoCompleteStyle.getThemeStyleSheet(undefined, styleProps) : '',CascadeSelectStyle && CascadeSelectStyle.getThemeStyleSheet ? CascadeSelectStyle.getThemeStyleSheet(undefined, styleProps) : '',CheckboxStyle && CheckboxStyle.getThemeStyleSheet ? CheckboxStyle.getThemeStyleSheet(undefined, styleProps) : '',CheckboxGroupStyle && CheckboxGroupStyle.getThemeStyleSheet ? CheckboxGroupStyle.getThemeStyleSheet(undefined, styleProps) : '',ColorPickerStyle && ColorPickerStyle.getThemeStyleSheet ? ColorPickerStyle.getThemeStyleSheet(undefined, styleProps) : '',DatePickerStyle && DatePickerStyle.getThemeStyleSheet ? DatePickerStyle.getThemeStyleSheet(undefined, styleProps) : '',FloatLabelStyle && FloatLabelStyle.getThemeStyleSheet ? FloatLabelStyle.getThemeStyleSheet(undefined, styleProps) : '',FluidStyle && FluidStyle.getThemeStyleSheet ? FluidStyle.getThemeStyleSheet(undefined, styleProps) : '',IconFieldStyle && IconFieldStyle.getThemeStyleSheet ? IconFieldStyle.getThemeStyleSheet(undefined, styleProps) : '',IftaLabelStyle && IftaLabelStyle.getThemeStyleSheet ? IftaLabelStyle.getThemeStyleSheet(undefined, styleProps) : '',InputColorStyle && InputColorStyle.getThemeStyleSheet ? InputColorStyle.getThemeStyleSheet(undefined, styleProps) : '',InputColorAreaStyle && InputColorAreaStyle.getThemeStyleSheet ? InputColorAreaStyle.getThemeStyleSheet(undefined, styleProps) : '',InputColorAreaBackgroundStyle && InputColorAreaBackgroundStyle.getThemeStyleSheet ? InputColorAreaBackgroundStyle.getThemeStyleSheet(undefined, styleProps) : '',InputColorAreaHandleStyle && InputColorAreaHandleStyle.getThemeStyleSheet ? InputColorAreaHandleStyle.getThemeStyleSheet(undefined, styleProps) : '',InputColorEyeDropperStyle && InputColorEyeDropperStyle.getThemeStyleSheet ? InputColorEyeDropperStyle.getThemeStyleSheet(undefined, styleProps) : '',InputColorInputStyle && InputColorInputStyle.getThemeStyleSheet ? InputColorInputStyle.getThemeStyleSheet(undefined, styleProps) : '',InputColorSliderStyle && InputColorSliderStyle.getThemeStyleSheet ? InputColorSliderStyle.getThemeStyleSheet(undefined, styleProps) : '',InputColorSliderHandleStyle && InputColorSliderHandleStyle.getThemeStyleSheet ? InputColorSliderHandleStyle.getThemeStyleSheet(undefined, styleProps) : '',InputColorSliderTrackStyle && InputColorSliderTrackStyle.getThemeStyleSheet ? InputColorSliderTrackStyle.getThemeStyleSheet(undefined, styleProps) : '',InputColorSwatchStyle && InputColorSwatchStyle.getThemeStyleSheet ? InputColorSwatchStyle.getThemeStyleSheet(undefined, styleProps) : '',InputColorSwatchBackgroundStyle && InputColorSwatchBackgroundStyle.getThemeStyleSheet ? InputColorSwatchBackgroundStyle.getThemeStyleSheet(undefined, styleProps) : '',InputColorTransparencyGridStyle && InputColorTransparencyGridStyle.getThemeStyleSheet ? InputColorTransparencyGridStyle.getThemeStyleSheet(undefined, styleProps) : '',InputGroupStyle && InputGroupStyle.getThemeStyleSheet ? InputGroupStyle.getThemeStyleSheet(undefined, styleProps) : '',InputGroupAddonStyle && InputGroupAddonStyle.getThemeStyleSheet ? InputGroupAddonStyle.getThemeStyleSheet(undefined, styleProps) : '',InputIconStyle && InputIconStyle.getThemeStyleSheet ? InputIconStyle.getThemeStyleSheet(undefined, styleProps) : '',InputMaskStyle && InputMaskStyle.getThemeStyleSheet ? InputMaskStyle.getThemeStyleSheet(undefined, styleProps) : '',InputNumberStyle && InputNumberStyle.getThemeStyleSheet ? InputNumberStyle.getThemeStyleSheet(undefined, styleProps) : '',InputOtpStyle && InputOtpStyle.getThemeStyleSheet ? InputOtpStyle.getThemeStyleSheet(undefined, styleProps) : '',InputPasswordStyle && InputPasswordStyle.getThemeStyleSheet ? InputPasswordStyle.getThemeStyleSheet(undefined, styleProps) : '',InputTagsStyle && InputTagsStyle.getThemeStyleSheet ? InputTagsStyle.getThemeStyleSheet(undefined, styleProps) : '',InputTextStyle && InputTextStyle.getThemeStyleSheet ? InputTextStyle.getThemeStyleSheet(undefined, styleProps) : '',KnobStyle && KnobStyle.getThemeStyleSheet ? KnobStyle.getThemeStyleSheet(undefined, styleProps) : '',LabelStyle && LabelStyle.getThemeStyleSheet ? LabelStyle.getThemeStyleSheet(undefined, styleProps) : '',ListboxStyle && ListboxStyle.getThemeStyleSheet ? ListboxStyle.getThemeStyleSheet(undefined, styleProps) : '',MultiSelectStyle && MultiSelectStyle.getThemeStyleSheet ? MultiSelectStyle.getThemeStyleSheet(undefined, styleProps) : '',PasswordStyle && PasswordStyle.getThemeStyleSheet ? PasswordStyle.getThemeStyleSheet(undefined, styleProps) : '',RadioButtonStyle && RadioButtonStyle.getThemeStyleSheet ? RadioButtonStyle.getThemeStyleSheet(undefined, styleProps) : '',RadioButtonGroupStyle && RadioButtonGroupStyle.getThemeStyleSheet ? RadioButtonGroupStyle.getThemeStyleSheet(undefined, styleProps) : '',RatingStyle && RatingStyle.getThemeStyleSheet ? RatingStyle.getThemeStyleSheet(undefined, styleProps) : '',SelectStyle && SelectStyle.getThemeStyleSheet ? SelectStyle.getThemeStyleSheet(undefined, styleProps) : '',SelectButtonStyle && SelectButtonStyle.getThemeStyleSheet ? SelectButtonStyle.getThemeStyleSheet(undefined, styleProps) : '',SliderStyle && SliderStyle.getThemeStyleSheet ? SliderStyle.getThemeStyleSheet(undefined, styleProps) : '',TextareaStyle && TextareaStyle.getThemeStyleSheet ? TextareaStyle.getThemeStyleSheet(undefined, styleProps) : '',ToggleButtonStyle && ToggleButtonStyle.getThemeStyleSheet ? ToggleButtonStyle.getThemeStyleSheet(undefined, styleProps) : '',ToggleSwitchStyle && ToggleSwitchStyle.getThemeStyleSheet ? ToggleSwitchStyle.getThemeStyleSheet(undefined, styleProps) : '',TreeSelectStyle && TreeSelectStyle.getThemeStyleSheet ? TreeSelectStyle.getThemeStyleSheet(undefined, styleProps) : '',ButtonStyle && ButtonStyle.getThemeStyleSheet ? ButtonStyle.getThemeStyleSheet(undefined, styleProps) : '',ButtonGroupStyle && ButtonGroupStyle.getThemeStyleSheet ? ButtonGroupStyle.getThemeStyleSheet(undefined, styleProps) : '',SpeedDialStyle && SpeedDialStyle.getThemeStyleSheet ? SpeedDialStyle.getThemeStyleSheet(undefined, styleProps) : '',SplitButtonStyle && SplitButtonStyle.getThemeStyleSheet ? SplitButtonStyle.getThemeStyleSheet(undefined, styleProps) : '',ColumnStyle && ColumnStyle.getThemeStyleSheet ? ColumnStyle.getThemeStyleSheet(undefined, styleProps) : '',RowStyle && RowStyle.getThemeStyleSheet ? RowStyle.getThemeStyleSheet(undefined, styleProps) : '',ColumnGroupStyle && ColumnGroupStyle.getThemeStyleSheet ? ColumnGroupStyle.getThemeStyleSheet(undefined, styleProps) : '',DataTableStyle && DataTableStyle.getThemeStyleSheet ? DataTableStyle.getThemeStyleSheet(undefined, styleProps) : '',DataViewStyle && DataViewStyle.getThemeStyleSheet ? DataViewStyle.getThemeStyleSheet(undefined, styleProps) : '',OrderListStyle && OrderListStyle.getThemeStyleSheet ? OrderListStyle.getThemeStyleSheet(undefined, styleProps) : '',OrganizationChartStyle && OrganizationChartStyle.getThemeStyleSheet ? OrganizationChartStyle.getThemeStyleSheet(undefined, styleProps) : '',PaginatorStyle && PaginatorStyle.getThemeStyleSheet ? PaginatorStyle.getThemeStyleSheet(undefined, styleProps) : '',PickListStyle && PickListStyle.getThemeStyleSheet ? PickListStyle.getThemeStyleSheet(undefined, styleProps) : '',TreeStyle && TreeStyle.getThemeStyleSheet ? TreeStyle.getThemeStyleSheet(undefined, styleProps) : '',TreeTableStyle && TreeTableStyle.getThemeStyleSheet ? TreeTableStyle.getThemeStyleSheet(undefined, styleProps) : '',TimelineStyle && TimelineStyle.getThemeStyleSheet ? TimelineStyle.getThemeStyleSheet(undefined, styleProps) : '',VirtualScrollerStyle && VirtualScrollerStyle.getThemeStyleSheet ? VirtualScrollerStyle.getThemeStyleSheet(undefined, styleProps) : '',AccordionStyle && AccordionStyle.getThemeStyleSheet ? AccordionStyle.getThemeStyleSheet(undefined, styleProps) : '',AccordionPanelStyle && AccordionPanelStyle.getThemeStyleSheet ? AccordionPanelStyle.getThemeStyleSheet(undefined, styleProps) : '',AccordionHeaderStyle && AccordionHeaderStyle.getThemeStyleSheet ? AccordionHeaderStyle.getThemeStyleSheet(undefined, styleProps) : '',AccordionContentStyle && AccordionContentStyle.getThemeStyleSheet ? AccordionContentStyle.getThemeStyleSheet(undefined, styleProps) : '',CardStyle && CardStyle.getThemeStyleSheet ? CardStyle.getThemeStyleSheet(undefined, styleProps) : '',DeferredContentStyle && DeferredContentStyle.getThemeStyleSheet ? DeferredContentStyle.getThemeStyleSheet(undefined, styleProps) : '',DividerStyle && DividerStyle.getThemeStyleSheet ? DividerStyle.getThemeStyleSheet(undefined, styleProps) : '',FieldsetStyle && FieldsetStyle.getThemeStyleSheet ? FieldsetStyle.getThemeStyleSheet(undefined, styleProps) : '',PanelStyle && PanelStyle.getThemeStyleSheet ? PanelStyle.getThemeStyleSheet(undefined, styleProps) : '',ScrollAreaStyle && ScrollAreaStyle.getThemeStyleSheet ? ScrollAreaStyle.getThemeStyleSheet(undefined, styleProps) : '',ScrollAreaContentStyle && ScrollAreaContentStyle.getThemeStyleSheet ? ScrollAreaContentStyle.getThemeStyleSheet(undefined, styleProps) : '',ScrollAreaCornerStyle && ScrollAreaCornerStyle.getThemeStyleSheet ? ScrollAreaCornerStyle.getThemeStyleSheet(undefined, styleProps) : '',ScrollAreaHandleStyle && ScrollAreaHandleStyle.getThemeStyleSheet ? ScrollAreaHandleStyle.getThemeStyleSheet(undefined, styleProps) : '',ScrollAreaScrollbarStyle && ScrollAreaScrollbarStyle.getThemeStyleSheet ? ScrollAreaScrollbarStyle.getThemeStyleSheet(undefined, styleProps) : '',ScrollAreaViewportStyle && ScrollAreaViewportStyle.getThemeStyleSheet ? ScrollAreaViewportStyle.getThemeStyleSheet(undefined, styleProps) : '',ScrollPanelStyle && ScrollPanelStyle.getThemeStyleSheet ? ScrollPanelStyle.getThemeStyleSheet(undefined, styleProps) : '',SplitterStyle && SplitterStyle.getThemeStyleSheet ? SplitterStyle.getThemeStyleSheet(undefined, styleProps) : '',SplitterPanelStyle && SplitterPanelStyle.getThemeStyleSheet ? SplitterPanelStyle.getThemeStyleSheet(undefined, styleProps) : '',StepperStyle && StepperStyle.getThemeStyleSheet ? StepperStyle.getThemeStyleSheet(undefined, styleProps) : '',StepListStyle && StepListStyle.getThemeStyleSheet ? StepListStyle.getThemeStyleSheet(undefined, styleProps) : '',StepStyle && StepStyle.getThemeStyleSheet ? StepStyle.getThemeStyleSheet(undefined, styleProps) : '',StepItemStyle && StepItemStyle.getThemeStyleSheet ? StepItemStyle.getThemeStyleSheet(undefined, styleProps) : '',StepPanelsStyle && StepPanelsStyle.getThemeStyleSheet ? StepPanelsStyle.getThemeStyleSheet(undefined, styleProps) : '',StepPanelStyle && StepPanelStyle.getThemeStyleSheet ? StepPanelStyle.getThemeStyleSheet(undefined, styleProps) : '',TabsStyle && TabsStyle.getThemeStyleSheet ? TabsStyle.getThemeStyleSheet(undefined, styleProps) : '',TabListStyle && TabListStyle.getThemeStyleSheet ? TabListStyle.getThemeStyleSheet(undefined, styleProps) : '',TabStyle && TabStyle.getThemeStyleSheet ? TabStyle.getThemeStyleSheet(undefined, styleProps) : '',TabPanelsStyle && TabPanelsStyle.getThemeStyleSheet ? TabPanelsStyle.getThemeStyleSheet(undefined, styleProps) : '',TabPanelStyle && TabPanelStyle.getThemeStyleSheet ? TabPanelStyle.getThemeStyleSheet(undefined, styleProps) : '',ToolbarStyle && ToolbarStyle.getThemeStyleSheet ? ToolbarStyle.getThemeStyleSheet(undefined, styleProps) : '',ConfirmDialogStyle && ConfirmDialogStyle.getThemeStyleSheet ? ConfirmDialogStyle.getThemeStyleSheet(undefined, styleProps) : '',ConfirmPopupStyle && ConfirmPopupStyle.getThemeStyleSheet ? ConfirmPopupStyle.getThemeStyleSheet(undefined, styleProps) : '',DialogStyle && DialogStyle.getThemeStyleSheet ? DialogStyle.getThemeStyleSheet(undefined, styleProps) : '',DrawerStyle && DrawerStyle.getThemeStyleSheet ? DrawerStyle.getThemeStyleSheet(undefined, styleProps) : '',DynamicDialogStyle && DynamicDialogStyle.getThemeStyleSheet ? DynamicDialogStyle.getThemeStyleSheet(undefined, styleProps) : '',PopoverStyle && PopoverStyle.getThemeStyleSheet ? PopoverStyle.getThemeStyleSheet(undefined, styleProps) : '',FileUploadStyle && FileUploadStyle.getThemeStyleSheet ? FileUploadStyle.getThemeStyleSheet(undefined, styleProps) : '',BreadcrumbStyle && BreadcrumbStyle.getThemeStyleSheet ? BreadcrumbStyle.getThemeStyleSheet(undefined, styleProps) : '',CommandMenuStyle && CommandMenuStyle.getThemeStyleSheet ? CommandMenuStyle.getThemeStyleSheet(undefined, styleProps) : '',ContextMenuStyle && ContextMenuStyle.getThemeStyleSheet ? ContextMenuStyle.getThemeStyleSheet(undefined, styleProps) : '',DockStyle && DockStyle.getThemeStyleSheet ? DockStyle.getThemeStyleSheet(undefined, styleProps) : '',MenuStyle && MenuStyle.getThemeStyleSheet ? MenuStyle.getThemeStyleSheet(undefined, styleProps) : '',MenubarStyle && MenubarStyle.getThemeStyleSheet ? MenubarStyle.getThemeStyleSheet(undefined, styleProps) : '',MegaMenuStyle && MegaMenuStyle.getThemeStyleSheet ? MegaMenuStyle.getThemeStyleSheet(undefined, styleProps) : '',PanelMenuStyle && PanelMenuStyle.getThemeStyleSheet ? PanelMenuStyle.getThemeStyleSheet(undefined, styleProps) : '',SidebarStyle && SidebarStyle.getThemeStyleSheet ? SidebarStyle.getThemeStyleSheet(undefined, styleProps) : '',SidebarAsideStyle && SidebarAsideStyle.getThemeStyleSheet ? SidebarAsideStyle.getThemeStyleSheet(undefined, styleProps) : '',SidebarBackdropStyle && SidebarBackdropStyle.getThemeStyleSheet ? SidebarBackdropStyle.getThemeStyleSheet(undefined, styleProps) : '',SidebarContentStyle && SidebarContentStyle.getThemeStyleSheet ? SidebarContentStyle.getThemeStyleSheet(undefined, styleProps) : '',SidebarFooterStyle && SidebarFooterStyle.getThemeStyleSheet ? SidebarFooterStyle.getThemeStyleSheet(undefined, styleProps) : '',SidebarGroupStyle && SidebarGroupStyle.getThemeStyleSheet ? SidebarGroupStyle.getThemeStyleSheet(undefined, styleProps) : '',SidebarGroupActionStyle && SidebarGroupActionStyle.getThemeStyleSheet ? SidebarGroupActionStyle.getThemeStyleSheet(undefined, styleProps) : '',SidebarGroupContentStyle && SidebarGroupContentStyle.getThemeStyleSheet ? SidebarGroupContentStyle.getThemeStyleSheet(undefined, styleProps) : '',SidebarGroupLabelStyle && SidebarGroupLabelStyle.getThemeStyleSheet ? SidebarGroupLabelStyle.getThemeStyleSheet(undefined, styleProps) : '',SidebarHeaderStyle && SidebarHeaderStyle.getThemeStyleSheet ? SidebarHeaderStyle.getThemeStyleSheet(undefined, styleProps) : '',SidebarLayoutStyle && SidebarLayoutStyle.getThemeStyleSheet ? SidebarLayoutStyle.getThemeStyleSheet(undefined, styleProps) : '',SidebarMainStyle && SidebarMainStyle.getThemeStyleSheet ? SidebarMainStyle.getThemeStyleSheet(undefined, styleProps) : '',SidebarMenuStyle && SidebarMenuStyle.getThemeStyleSheet ? SidebarMenuStyle.getThemeStyleSheet(undefined, styleProps) : '',SidebarMenuActionStyle && SidebarMenuActionStyle.getThemeStyleSheet ? SidebarMenuActionStyle.getThemeStyleSheet(undefined, styleProps) : '',SidebarMenuBadgeStyle && SidebarMenuBadgeStyle.getThemeStyleSheet ? SidebarMenuBadgeStyle.getThemeStyleSheet(undefined, styleProps) : '',SidebarMenuButtonStyle && SidebarMenuButtonStyle.getThemeStyleSheet ? SidebarMenuButtonStyle.getThemeStyleSheet(undefined, styleProps) : '',SidebarMenuItemStyle && SidebarMenuItemStyle.getThemeStyleSheet ? SidebarMenuItemStyle.getThemeStyleSheet(undefined, styleProps) : '',SidebarMenuSubStyle && SidebarMenuSubStyle.getThemeStyleSheet ? SidebarMenuSubStyle.getThemeStyleSheet(undefined, styleProps) : '',SidebarMenuSubButtonStyle && SidebarMenuSubButtonStyle.getThemeStyleSheet ? SidebarMenuSubButtonStyle.getThemeStyleSheet(undefined, styleProps) : '',SidebarMenuSubItemStyle && SidebarMenuSubItemStyle.getThemeStyleSheet ? SidebarMenuSubItemStyle.getThemeStyleSheet(undefined, styleProps) : '',SidebarPanelStyle && SidebarPanelStyle.getThemeStyleSheet ? SidebarPanelStyle.getThemeStyleSheet(undefined, styleProps) : '',SidebarRailStyle && SidebarRailStyle.getThemeStyleSheet ? SidebarRailStyle.getThemeStyleSheet(undefined, styleProps) : '',SidebarSpacerStyle && SidebarSpacerStyle.getThemeStyleSheet ? SidebarSpacerStyle.getThemeStyleSheet(undefined, styleProps) : '',SidebarTriggerStyle && SidebarTriggerStyle.getThemeStyleSheet ? SidebarTriggerStyle.getThemeStyleSheet(undefined, styleProps) : '',StepsStyle && StepsStyle.getThemeStyleSheet ? StepsStyle.getThemeStyleSheet(undefined, styleProps) : '',TieredMenuStyle && TieredMenuStyle.getThemeStyleSheet ? TieredMenuStyle.getThemeStyleSheet(undefined, styleProps) : '',MessageStyle && MessageStyle.getThemeStyleSheet ? MessageStyle.getThemeStyleSheet(undefined, styleProps) : '',ToastStyle && ToastStyle.getThemeStyleSheet ? ToastStyle.getThemeStyleSheet(undefined, styleProps) : '',CarouselStyle && CarouselStyle.getThemeStyleSheet ? CarouselStyle.getThemeStyleSheet(undefined, styleProps) : '',CarouselContentStyle && CarouselContentStyle.getThemeStyleSheet ? CarouselContentStyle.getThemeStyleSheet(undefined, styleProps) : '',CarouselIndicatorStyle && CarouselIndicatorStyle.getThemeStyleSheet ? CarouselIndicatorStyle.getThemeStyleSheet(undefined, styleProps) : '',CarouselIndicatorsStyle && CarouselIndicatorsStyle.getThemeStyleSheet ? CarouselIndicatorsStyle.getThemeStyleSheet(undefined, styleProps) : '',CarouselItemStyle && CarouselItemStyle.getThemeStyleSheet ? CarouselItemStyle.getThemeStyleSheet(undefined, styleProps) : '',CarouselNextStyle && CarouselNextStyle.getThemeStyleSheet ? CarouselNextStyle.getThemeStyleSheet(undefined, styleProps) : '',CarouselPrevStyle && CarouselPrevStyle.getThemeStyleSheet ? CarouselPrevStyle.getThemeStyleSheet(undefined, styleProps) : '',GalleriaStyle && GalleriaStyle.getThemeStyleSheet ? GalleriaStyle.getThemeStyleSheet(undefined, styleProps) : '',GalleryStyle && GalleryStyle.getThemeStyleSheet ? GalleryStyle.getThemeStyleSheet(undefined, styleProps) : '',GalleryBackdropStyle && GalleryBackdropStyle.getThemeStyleSheet ? GalleryBackdropStyle.getThemeStyleSheet(undefined, styleProps) : '',GalleryContentStyle && GalleryContentStyle.getThemeStyleSheet ? GalleryContentStyle.getThemeStyleSheet(undefined, styleProps) : '',GalleryDownloadStyle && GalleryDownloadStyle.getThemeStyleSheet ? GalleryDownloadStyle.getThemeStyleSheet(undefined, styleProps) : '',GalleryFlipXStyle && GalleryFlipXStyle.getThemeStyleSheet ? GalleryFlipXStyle.getThemeStyleSheet(undefined, styleProps) : '',GalleryFlipYStyle && GalleryFlipYStyle.getThemeStyleSheet ? GalleryFlipYStyle.getThemeStyleSheet(undefined, styleProps) : '',GalleryFooterStyle && GalleryFooterStyle.getThemeStyleSheet ? GalleryFooterStyle.getThemeStyleSheet(undefined, styleProps) : '',GalleryFullScreenStyle && GalleryFullScreenStyle.getThemeStyleSheet ? GalleryFullScreenStyle.getThemeStyleSheet(undefined, styleProps) : '',GalleryHeaderStyle && GalleryHeaderStyle.getThemeStyleSheet ? GalleryHeaderStyle.getThemeStyleSheet(undefined, styleProps) : '',GalleryItemStyle && GalleryItemStyle.getThemeStyleSheet ? GalleryItemStyle.getThemeStyleSheet(undefined, styleProps) : '',GalleryNextStyle && GalleryNextStyle.getThemeStyleSheet ? GalleryNextStyle.getThemeStyleSheet(undefined, styleProps) : '',GalleryPrevStyle && GalleryPrevStyle.getThemeStyleSheet ? GalleryPrevStyle.getThemeStyleSheet(undefined, styleProps) : '',GalleryRotateLeftStyle && GalleryRotateLeftStyle.getThemeStyleSheet ? GalleryRotateLeftStyle.getThemeStyleSheet(undefined, styleProps) : '',GalleryRotateRightStyle && GalleryRotateRightStyle.getThemeStyleSheet ? GalleryRotateRightStyle.getThemeStyleSheet(undefined, styleProps) : '',GalleryThumbnailStyle && GalleryThumbnailStyle.getThemeStyleSheet ? GalleryThumbnailStyle.getThemeStyleSheet(undefined, styleProps) : '',GalleryThumbnailContentStyle && GalleryThumbnailContentStyle.getThemeStyleSheet ? GalleryThumbnailContentStyle.getThemeStyleSheet(undefined, styleProps) : '',GalleryThumbnailItemStyle && GalleryThumbnailItemStyle.getThemeStyleSheet ? GalleryThumbnailItemStyle.getThemeStyleSheet(undefined, styleProps) : '',GalleryZoomInStyle && GalleryZoomInStyle.getThemeStyleSheet ? GalleryZoomInStyle.getThemeStyleSheet(undefined, styleProps) : '',GalleryZoomOutStyle && GalleryZoomOutStyle.getThemeStyleSheet ? GalleryZoomOutStyle.getThemeStyleSheet(undefined, styleProps) : '',GalleryZoomToggleStyle && GalleryZoomToggleStyle.getThemeStyleSheet ? GalleryZoomToggleStyle.getThemeStyleSheet(undefined, styleProps) : '',CompareStyle && CompareStyle.getThemeStyleSheet ? CompareStyle.getThemeStyleSheet(undefined, styleProps) : '',CompareHandleStyle && CompareHandleStyle.getThemeStyleSheet ? CompareHandleStyle.getThemeStyleSheet(undefined, styleProps) : '',CompareIndicatorStyle && CompareIndicatorStyle.getThemeStyleSheet ? CompareIndicatorStyle.getThemeStyleSheet(undefined, styleProps) : '',CompareItemStyle && CompareItemStyle.getThemeStyleSheet ? CompareItemStyle.getThemeStyleSheet(undefined, styleProps) : '',ImageStyle && ImageStyle.getThemeStyleSheet ? ImageStyle.getThemeStyleSheet(undefined, styleProps) : '',ImageCompareStyle && ImageCompareStyle.getThemeStyleSheet ? ImageCompareStyle.getThemeStyleSheet(undefined, styleProps) : '',AvatarStyle && AvatarStyle.getThemeStyleSheet ? AvatarStyle.getThemeStyleSheet(undefined, styleProps) : '',AvatarGroupStyle && AvatarGroupStyle.getThemeStyleSheet ? AvatarGroupStyle.getThemeStyleSheet(undefined, styleProps) : '',BadgeStyle && BadgeStyle.getThemeStyleSheet ? BadgeStyle.getThemeStyleSheet(undefined, styleProps) : '',BlockUIStyle && BlockUIStyle.getThemeStyleSheet ? BlockUIStyle.getThemeStyleSheet(undefined, styleProps) : '',ChipStyle && ChipStyle.getThemeStyleSheet ? ChipStyle.getThemeStyleSheet(undefined, styleProps) : '',InplaceStyle && InplaceStyle.getThemeStyleSheet ? InplaceStyle.getThemeStyleSheet(undefined, styleProps) : '',MeterGroupStyle && MeterGroupStyle.getThemeStyleSheet ? MeterGroupStyle.getThemeStyleSheet(undefined, styleProps) : '',OverlayBadgeStyle && OverlayBadgeStyle.getThemeStyleSheet ? OverlayBadgeStyle.getThemeStyleSheet(undefined, styleProps) : '',ScrollTopStyle && ScrollTopStyle.getThemeStyleSheet ? ScrollTopStyle.getThemeStyleSheet(undefined, styleProps) : '',SkeletonStyle && SkeletonStyle.getThemeStyleSheet ? SkeletonStyle.getThemeStyleSheet(undefined, styleProps) : '',ProgressBarStyle && ProgressBarStyle.getThemeStyleSheet ? ProgressBarStyle.getThemeStyleSheet(undefined, styleProps) : '',ProgressSpinnerStyle && ProgressSpinnerStyle.getThemeStyleSheet ? ProgressSpinnerStyle.getThemeStyleSheet(undefined, styleProps) : '',TagStyle && TagStyle.getThemeStyleSheet ? TagStyle.getThemeStyleSheet(undefined, styleProps) : '',TerminalStyle && TerminalStyle.getThemeStyleSheet ? TerminalStyle.getThemeStyleSheet(undefined, styleProps) : '',FormStyle && FormStyle.getThemeStyleSheet ? FormStyle.getThemeStyleSheet(undefined, styleProps) : '',FormFieldStyle && FormFieldStyle.getThemeStyleSheet ? FormFieldStyle.getThemeStyleSheet(undefined, styleProps) : '',TooltipStyle && TooltipStyle.getThemeStyleSheet ? TooltipStyle.getThemeStyleSheet(undefined, styleProps) : '',RippleStyle && RippleStyle.getThemeStyleSheet ? RippleStyle.getThemeStyleSheet(undefined, styleProps) : '',StyleClassStyle && StyleClassStyle.getThemeStyleSheet ? StyleClassStyle.getThemeStyleSheet(undefined, styleProps) : '',FocusTrapStyle && FocusTrapStyle.getThemeStyleSheet ? FocusTrapStyle.getThemeStyleSheet(undefined, styleProps) : '',AnimateOnScrollStyle && AnimateOnScrollStyle.getThemeStyleSheet ? AnimateOnScrollStyle.getThemeStyleSheet(undefined, styleProps) : '',KeyFilterStyle && KeyFilterStyle.getThemeStyleSheet ? KeyFilterStyle.getThemeStyleSheet(undefined, styleProps) : '',MaskStyle && MaskStyle.getThemeStyleSheet ? MaskStyle.getThemeStyleSheet(undefined, styleProps) : ''
].join('');

const defineNitroPlugin = (def) => def;
const _Xf6LxdGI5v5EUpcvqbogJhuqrJ8IMwzNuX5ktX6a6E = defineNitroPlugin(async (nitroApp) => {
  nitroApp.hooks.hook("render:html", (html) => {
    html.head.unshift(stylesToTop);
    html.head.push(styles);
    html.head.push(themes);
  });
});

const plugins = [
  _Xf6LxdGI5v5EUpcvqbogJhuqrJ8IMwzNuX5ktX6a6E
];

const assets = {
  "/favicon.ico": {
    "type": "image/vnd.microsoft.icon",
    "etag": "\"10be-n8egyE9tcb7sKGr/pYCaQ4uWqxI\"",
    "mtime": "2026-10-06T14:13:00.186Z",
    "size": 4286,
    "path": "../public/favicon.ico"
  },
  "/robots.txt": {
    "type": "text/plain; charset=utf-8",
    "etag": "\"18-j8OIsL9qGDmNZ+lHhp2tyH4XtaE\"",
    "mtime": "2026-10-06T14:13:00.186Z",
    "size": 24,
    "path": "../public/robots.txt"
  },
  "/_nuxt/-TGyhmPe.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"2f4-fdaUNgb4tNlqNkDPiYYJzQdTpKA\"",
    "mtime": "2026-10-06T14:13:00.179Z",
    "size": 756,
    "path": "../public/_nuxt/-TGyhmPe.js"
  },
  "/_nuxt/1d7j-Dyg.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"1b0-jLLykDDYwy68iu2M/ketf8FzBeY\"",
    "mtime": "2026-10-06T14:13:00.163Z",
    "size": 432,
    "path": "../public/_nuxt/1d7j-Dyg.js"
  },
  "/_nuxt/2AZWj03E.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"59d-tdIjBU63/CuLwDsNQrLvXdvVJpE\"",
    "mtime": "2026-10-06T14:13:00.163Z",
    "size": 1437,
    "path": "../public/_nuxt/2AZWj03E.js"
  },
  "/_nuxt/2K5YFpmr.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"336-kV4Ovdrp2mxjlFQf6dTABcPqPk8\"",
    "mtime": "2026-10-06T14:13:00.164Z",
    "size": 822,
    "path": "../public/_nuxt/2K5YFpmr.js"
  },
  "/_nuxt/32f1XSsY.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"1e7d-BIC+VOEnaPVYqUiQrLXEnZt0gW8\"",
    "mtime": "2026-10-06T14:13:00.164Z",
    "size": 7805,
    "path": "../public/_nuxt/32f1XSsY.js"
  },
  "/_nuxt/3Xh9r-GF.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"a3e-QEOpJsc+5TuphTmIfJP6F15xrQ0\"",
    "mtime": "2026-10-06T14:13:00.163Z",
    "size": 2622,
    "path": "../public/_nuxt/3Xh9r-GF.js"
  },
  "/_nuxt/3rBkAHgE.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"2d50-loJjc7CwZV8nNJWPGG3XDqIOcd8\"",
    "mtime": "2026-10-06T14:13:00.163Z",
    "size": 11600,
    "path": "../public/_nuxt/3rBkAHgE.js"
  },
  "/_nuxt/4XRHhTMS.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"c769-834SafUAIb6apxu5kRNAF6gBpoQ\"",
    "mtime": "2026-10-06T14:13:00.163Z",
    "size": 51049,
    "path": "../public/_nuxt/4XRHhTMS.js"
  },
  "/_nuxt/4pMxy5nF.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"2452-C8KYco9H37qCqZLmgdsqfdZ9Aw8\"",
    "mtime": "2026-10-06T14:13:00.163Z",
    "size": 9298,
    "path": "../public/_nuxt/4pMxy5nF.js"
  },
  "/_nuxt/6KhtkY5Z.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"e8e-K3XvkNqSPZuWdLO0wiYpZupcU1E\"",
    "mtime": "2026-10-06T14:13:00.163Z",
    "size": 3726,
    "path": "../public/_nuxt/6KhtkY5Z.js"
  },
  "/_nuxt/6QZPN6FE.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"3053-a/hERC2mMApHFgDLALR0kq2B1Vo\"",
    "mtime": "2026-10-06T14:13:00.163Z",
    "size": 12371,
    "path": "../public/_nuxt/6QZPN6FE.js"
  },
  "/_nuxt/8Hkt0xEj.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"6ac9-DnEUvFkxLz5xhzqCeRLiRhFH2Dg\"",
    "mtime": "2026-10-06T14:13:00.164Z",
    "size": 27337,
    "path": "../public/_nuxt/8Hkt0xEj.js"
  },
  "/_nuxt/8qBZeOza.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"9b3-8u7VQFzaadyugSzTQQkas7icBcs\"",
    "mtime": "2026-10-06T14:13:00.164Z",
    "size": 2483,
    "path": "../public/_nuxt/8qBZeOza.js"
  },
  "/_nuxt/9Yx_l0vA.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"321-u5TIsmVbhXTozOJ8FvZZmA1UOvU\"",
    "mtime": "2026-10-06T14:13:00.164Z",
    "size": 801,
    "path": "../public/_nuxt/9Yx_l0vA.js"
  },
  "/_nuxt/Ai1Q0rxC.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"3ea-cAzDmeQCFDVXfaZnQ/0kM+9R/+E\"",
    "mtime": "2026-10-06T14:13:00.164Z",
    "size": 1002,
    "path": "../public/_nuxt/Ai1Q0rxC.js"
  },
  "/_nuxt/27A3YmEE.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"c6d0-icnx3QOEZPfgn6V3wuMYdBrfgDA\"",
    "mtime": "2026-10-06T14:13:00.163Z",
    "size": 50896,
    "path": "../public/_nuxt/27A3YmEE.js"
  },
  "/_nuxt/B-GjYb7s.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"36fd-n/3i18jlf09eXQzuphtMKxMVYjs\"",
    "mtime": "2026-10-06T14:13:00.164Z",
    "size": 14077,
    "path": "../public/_nuxt/B-GjYb7s.js"
  },
  "/_nuxt/B2qXdBnq.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"330-u++zH6sSLrZzeqMcdONYz2+iGc4\"",
    "mtime": "2026-10-06T14:13:00.164Z",
    "size": 816,
    "path": "../public/_nuxt/B2qXdBnq.js"
  },
  "/_nuxt/B6-NeqfX.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"122f-/TLzSrfjKzIKOKIHjKBdcAD6atQ\"",
    "mtime": "2026-10-06T14:13:00.164Z",
    "size": 4655,
    "path": "../public/_nuxt/B6-NeqfX.js"
  },
  "/_nuxt/B8b7P_dF.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"486-LCvjOhS00ebKCdLp/AQ+81bBg+I\"",
    "mtime": "2026-10-06T14:13:00.164Z",
    "size": 1158,
    "path": "../public/_nuxt/B8b7P_dF.js"
  },
  "/_nuxt/B9GLOj7E.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"2e96-twYDj+tx2VmOPjFJtIUYeT9fymA\"",
    "mtime": "2026-10-06T14:13:00.164Z",
    "size": 11926,
    "path": "../public/_nuxt/B9GLOj7E.js"
  },
  "/_nuxt/B9KxkHq5.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"1c32-JgXDW2l/uEdRmuBtGRSApvdpFCQ\"",
    "mtime": "2026-10-06T14:13:00.164Z",
    "size": 7218,
    "path": "../public/_nuxt/B9KxkHq5.js"
  },
  "/_nuxt/B5zFj5xH.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"ab8e-h72ZuDg9EuXM3v8TIK3aEgc5FO8\"",
    "mtime": "2026-10-06T14:13:00.164Z",
    "size": 43918,
    "path": "../public/_nuxt/B5zFj5xH.js"
  },
  "/_nuxt/BABTGu1o.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"4d7-MTKWNSMT79m9V3D4tpZBiSCZd5s\"",
    "mtime": "2026-10-06T14:13:00.164Z",
    "size": 1239,
    "path": "../public/_nuxt/BABTGu1o.js"
  },
  "/_nuxt/BAFt0Ddh.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"47fc-juvuWPsh63pAzLB1lBvxL5bRckI\"",
    "mtime": "2026-10-06T14:13:00.165Z",
    "size": 18428,
    "path": "../public/_nuxt/BAFt0Ddh.js"
  },
  "/_nuxt/BAwjCkUn.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"2d65-yGzEV1pj1UrReDI+nSQyFGjqnvo\"",
    "mtime": "2026-10-06T14:13:00.164Z",
    "size": 11621,
    "path": "../public/_nuxt/BAwjCkUn.js"
  },
  "/_nuxt/BAJc2r96.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"7ed-lq17MSV7vhasBOloNyApwyCaJa4\"",
    "mtime": "2026-10-06T14:13:00.164Z",
    "size": 2029,
    "path": "../public/_nuxt/BAJc2r96.js"
  },
  "/_nuxt/BB6lrM_H.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"2e4-as8PJ6DW+6k1vKANCnJIRMgc6K0\"",
    "mtime": "2026-10-06T14:13:00.165Z",
    "size": 740,
    "path": "../public/_nuxt/BB6lrM_H.js"
  },
  "/_nuxt/BCS_YQlv.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"5ae8-8QHmkxJeslvVO7bPastKOOS/Pv8\"",
    "mtime": "2026-10-06T14:13:00.165Z",
    "size": 23272,
    "path": "../public/_nuxt/BCS_YQlv.js"
  },
  "/_nuxt/BD3ibWyF.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"3c9-Ynh/AYLlEGEfGocHBAKcx5CQ3sY\"",
    "mtime": "2026-10-06T14:13:00.165Z",
    "size": 969,
    "path": "../public/_nuxt/BD3ibWyF.js"
  },
  "/_nuxt/BD-WTor-.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"abe8-w/o9HCb119XzH4xFxKljsf4vtxI\"",
    "mtime": "2026-10-06T14:13:00.165Z",
    "size": 44008,
    "path": "../public/_nuxt/BD-WTor-.js"
  },
  "/_nuxt/BDHPSf3U.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"3932-0RTviKuBnkkmrkCM855oPskViYI\"",
    "mtime": "2026-10-06T14:13:00.165Z",
    "size": 14642,
    "path": "../public/_nuxt/BDHPSf3U.js"
  },
  "/_nuxt/BGIUXlOV.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"39e-E1lTnaVikqpiMWRxnooTCEe0kxA\"",
    "mtime": "2026-10-06T14:13:00.165Z",
    "size": 926,
    "path": "../public/_nuxt/BGIUXlOV.js"
  },
  "/_nuxt/BDNMzG2s.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"54-MasMfSk/A98C3Gn9uIOxtFxkWNw\"",
    "mtime": "2026-10-06T14:13:00.165Z",
    "size": 84,
    "path": "../public/_nuxt/BDNMzG2s.js"
  },
  "/_nuxt/BI-1mX7O.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"3f0-6wf14kFPGYswlXs/PL1Oxb6ivNM\"",
    "mtime": "2026-10-06T14:13:00.165Z",
    "size": 1008,
    "path": "../public/_nuxt/BI-1mX7O.js"
  },
  "/_nuxt/BIafRibp.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"3fd-3fFD8tFq+zby6iasFanAYry2aV8\"",
    "mtime": "2026-10-06T14:13:00.165Z",
    "size": 1021,
    "path": "../public/_nuxt/BIafRibp.js"
  },
  "/_nuxt/BK7Vrwt2.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"3c3-c9km/f9HllzRy/iVRHPZxBHRPSg\"",
    "mtime": "2026-10-06T14:13:00.166Z",
    "size": 963,
    "path": "../public/_nuxt/BK7Vrwt2.js"
  },
  "/_nuxt/BO2fcqvY.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"14d-kLfYnLClGbOY2kbkmHg+7kFOs98\"",
    "mtime": "2026-10-06T14:13:00.165Z",
    "size": 333,
    "path": "../public/_nuxt/BO2fcqvY.js"
  },
  "/_nuxt/BRGYsUqS.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"47c-xLyQifvMkruK61t93QhMb7hRyCM\"",
    "mtime": "2026-10-06T14:13:00.166Z",
    "size": 1148,
    "path": "../public/_nuxt/BRGYsUqS.js"
  },
  "/_nuxt/BQHyKCNA.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"134d9-BgMKbj1e+RbcdyGSXtdQTQS0wp4\"",
    "mtime": "2026-10-06T14:13:00.165Z",
    "size": 79065,
    "path": "../public/_nuxt/BQHyKCNA.js"
  },
  "/_nuxt/BQTyL26E.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"105-0HdO+vp2hpjOpmn3AirREO0GcLY\"",
    "mtime": "2026-10-06T14:13:00.165Z",
    "size": 261,
    "path": "../public/_nuxt/BQTyL26E.js"
  },
  "/_nuxt/BRiSMFgs.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"1365-yX7xxgU59BPd650VvXj82IzwG3o\"",
    "mtime": "2026-10-06T14:13:00.166Z",
    "size": 4965,
    "path": "../public/_nuxt/BRiSMFgs.js"
  },
  "/_nuxt/BSYycVJn.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"c5d-cePu7yEhMTnMOHOVJqn3Rsx90H8\"",
    "mtime": "2026-10-06T14:13:00.166Z",
    "size": 3165,
    "path": "../public/_nuxt/BSYycVJn.js"
  },
  "/_nuxt/BPDcmZKj.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"3a4-S7B9Is32o+NGIoafZs/ggQ7gydo\"",
    "mtime": "2026-10-06T14:13:00.165Z",
    "size": 932,
    "path": "../public/_nuxt/BPDcmZKj.js"
  },
  "/_nuxt/BSrhwhUp.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"328-/WJxtgYSXKThBM07PXfoe3quyqA\"",
    "mtime": "2026-10-06T14:13:00.166Z",
    "size": 808,
    "path": "../public/_nuxt/BSrhwhUp.js"
  },
  "/_nuxt/BTlVwI3e.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"5a8-4dnu+l21Q/NkH6gI6LHT+Gj6sME\"",
    "mtime": "2026-10-06T14:13:00.166Z",
    "size": 1448,
    "path": "../public/_nuxt/BTlVwI3e.js"
  },
  "/_nuxt/BVRPY_IK.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"7bbd-NNNUt7q5FLk60uvX59drBTNJsfw\"",
    "mtime": "2026-10-06T14:13:00.166Z",
    "size": 31677,
    "path": "../public/_nuxt/BVRPY_IK.js"
  },
  "/_nuxt/BW3bHof2.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"4eaa-MxyfdE4yrZa3AYWRReGrcQlZk3w\"",
    "mtime": "2026-10-06T14:13:00.166Z",
    "size": 20138,
    "path": "../public/_nuxt/BW3bHof2.js"
  },
  "/_nuxt/BZKIF3MB.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"3e0-vCUTizXEmTLxekc/8MEHbz/nieM\"",
    "mtime": "2026-10-06T14:13:00.166Z",
    "size": 992,
    "path": "../public/_nuxt/BZKIF3MB.js"
  },
  "/_nuxt/BX3-mSPg.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"6ea-F8y8DtTmGFcbX7GRq2XWdFWhv+g\"",
    "mtime": "2026-10-06T14:13:00.166Z",
    "size": 1770,
    "path": "../public/_nuxt/BX3-mSPg.js"
  },
  "/_nuxt/BYNh-JeG.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"1294-rbZCggy5Q7xZoUAzl3Mbno9xwIk\"",
    "mtime": "2026-10-06T14:13:00.166Z",
    "size": 4756,
    "path": "../public/_nuxt/BYNh-JeG.js"
  },
  "/_nuxt/Bb9-CyCm.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"d4d-/ixeE48S2LhyXl5IAFquK+LXCX4\"",
    "mtime": "2026-10-06T14:13:00.166Z",
    "size": 3405,
    "path": "../public/_nuxt/Bb9-CyCm.js"
  },
  "/_nuxt/BclLqHJ4.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"602-4dgdfLLPCZEGF+gIZnPjyu/WZwk\"",
    "mtime": "2026-10-06T14:13:00.166Z",
    "size": 1538,
    "path": "../public/_nuxt/BclLqHJ4.js"
  },
  "/_nuxt/Bba4GzG_.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"ee4-d5PvIkySgA0RQGWsuy6joiiIZ1o\"",
    "mtime": "2026-10-06T14:13:00.166Z",
    "size": 3812,
    "path": "../public/_nuxt/Bba4GzG_.js"
  },
  "/_nuxt/BfJ0qPlZ.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"ff0-d4qwRJyllRLP9mCQHeHX8zqX5M8\"",
    "mtime": "2026-10-06T14:13:00.166Z",
    "size": 4080,
    "path": "../public/_nuxt/BfJ0qPlZ.js"
  },
  "/_nuxt/BdflTM14.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"a7e-CUFi5WvOQ9GeTn0I/DjtgjKwiJE\"",
    "mtime": "2026-10-06T14:13:00.166Z",
    "size": 2686,
    "path": "../public/_nuxt/BdflTM14.js"
  },
  "/_nuxt/BfYlNOJL.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"11e3-RqIBudWU9vX6UkD9kHtQeDKUjBY\"",
    "mtime": "2026-10-06T14:13:00.167Z",
    "size": 4579,
    "path": "../public/_nuxt/BfYlNOJL.js"
  },
  "/_nuxt/BbBaSecd.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"30815-f0tvZiRLgkr9jrCircPozgqGyus\"",
    "mtime": "2026-10-06T14:13:00.167Z",
    "size": 198677,
    "path": "../public/_nuxt/BbBaSecd.js"
  },
  "/_nuxt/BfK0JgQ4.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"1ce-N1s6+YtRuMgj0qzEe2fCbtEhu7c\"",
    "mtime": "2026-10-06T14:13:00.166Z",
    "size": 462,
    "path": "../public/_nuxt/BfK0JgQ4.js"
  },
  "/_nuxt/BhUWwlJR.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"36a-RJNwNSFycXVXCWS4xLits1xWWlU\"",
    "mtime": "2026-10-06T14:13:00.166Z",
    "size": 874,
    "path": "../public/_nuxt/BhUWwlJR.js"
  },
  "/_nuxt/Bj1nBh_m.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"7e8a-IQxtnnu/e8Jda1aHoi5fLgDZ0Io\"",
    "mtime": "2026-10-06T14:13:00.167Z",
    "size": 32394,
    "path": "../public/_nuxt/Bj1nBh_m.js"
  },
  "/_nuxt/BmnuvI5l.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"4ec-RQ1giieH2ROs3a2yn6z1ntUKhzk\"",
    "mtime": "2026-10-06T14:13:00.167Z",
    "size": 1260,
    "path": "../public/_nuxt/BmnuvI5l.js"
  },
  "/_nuxt/BoVEqxmZ.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"911-UrbAWRnP+22Hx/tLMEn+SUp8k00\"",
    "mtime": "2026-10-06T14:13:00.167Z",
    "size": 2321,
    "path": "../public/_nuxt/BoVEqxmZ.js"
  },
  "/_nuxt/BqbeWP03.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"4178-8AMW6eT7YbMCKi4wpbMcDFym0Wg\"",
    "mtime": "2026-10-06T14:13:00.167Z",
    "size": 16760,
    "path": "../public/_nuxt/BqbeWP03.js"
  },
  "/_nuxt/Bkbwti1F.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"589-0DmuUDygjvrf24NVIZOXz0NVjTI\"",
    "mtime": "2026-10-06T14:13:00.167Z",
    "size": 1417,
    "path": "../public/_nuxt/Bkbwti1F.js"
  },
  "/_nuxt/BtAlto23.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"2c33-kcproutuCNnCjeL5Jr6qdxylkpE\"",
    "mtime": "2026-10-06T14:13:00.167Z",
    "size": 11315,
    "path": "../public/_nuxt/BtAlto23.js"
  },
  "/_nuxt/BtWj3kus.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"832-GlXWWFJ3pl0quuTF0K9k+73Qz70\"",
    "mtime": "2026-10-06T14:13:00.167Z",
    "size": 2098,
    "path": "../public/_nuxt/BtWj3kus.js"
  },
  "/_nuxt/BovFuCw6.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"2f4-XHyQhSX1UQBQD/PIz2xDHRWeETg\"",
    "mtime": "2026-10-06T14:13:00.167Z",
    "size": 756,
    "path": "../public/_nuxt/BovFuCw6.js"
  },
  "/_nuxt/Bu0VvdFA.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"2a60-Wm0VY/hzxpI+h8GjDP9aJgl83ac\"",
    "mtime": "2026-10-06T14:13:00.167Z",
    "size": 10848,
    "path": "../public/_nuxt/Bu0VvdFA.js"
  },
  "/_nuxt/BvwDvLD3.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"29c-C0m5L4wzFDHxUARir9fyjlnWhJQ\"",
    "mtime": "2026-10-06T14:13:00.167Z",
    "size": 668,
    "path": "../public/_nuxt/BvwDvLD3.js"
  },
  "/_nuxt/BwnGnwnP.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"352d-nsATfwaghu+HEZh6jcrx7Wyjyw0\"",
    "mtime": "2026-10-06T14:13:00.167Z",
    "size": 13613,
    "path": "../public/_nuxt/BwnGnwnP.js"
  },
  "/_nuxt/ByLQPlXJ.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"42e-JuzouLWAGTadyPnzrEzj17UJAo0\"",
    "mtime": "2026-10-06T14:13:00.167Z",
    "size": 1070,
    "path": "../public/_nuxt/ByLQPlXJ.js"
  },
  "/_nuxt/C0x5dMPj.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"4288-Y2ZHKM0XtLYee3ThfxptOWahWBA\"",
    "mtime": "2026-10-06T14:13:00.167Z",
    "size": 17032,
    "path": "../public/_nuxt/C0x5dMPj.js"
  },
  "/_nuxt/C2o8auKZ.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"e54-SBYiocjZqbSZRx4Hl5slozYKXUM\"",
    "mtime": "2026-10-06T14:13:00.168Z",
    "size": 3668,
    "path": "../public/_nuxt/C2o8auKZ.js"
  },
  "/_nuxt/C4wPuROT.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"951-kpMVsruSO9PRI7FiRbCtxXEn6is\"",
    "mtime": "2026-10-06T14:13:00.168Z",
    "size": 2385,
    "path": "../public/_nuxt/C4wPuROT.js"
  },
  "/_nuxt/C5STy1Vp.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"64-Ougs4OcLaoqD+fbnoeGz4/iVSDc\"",
    "mtime": "2026-10-06T14:13:00.168Z",
    "size": 100,
    "path": "../public/_nuxt/C5STy1Vp.js"
  },
  "/_nuxt/C4HYJ37J.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"16c8-JV0ab6ZTfvlKWkQ9LtGV477XiLQ\"",
    "mtime": "2026-10-06T14:13:00.168Z",
    "size": 5832,
    "path": "../public/_nuxt/C4HYJ37J.js"
  },
  "/_nuxt/C6URRqMY.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"bbf7-QpR84kMwxL2QAZAClZcDYIvMeMg\"",
    "mtime": "2026-10-06T14:13:00.168Z",
    "size": 48119,
    "path": "../public/_nuxt/C6URRqMY.js"
  },
  "/_nuxt/C8uYo8hH.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"3797-W1P1WaFeZ6VD34YCIpRfN7eiPZQ\"",
    "mtime": "2026-10-06T14:13:00.168Z",
    "size": 14231,
    "path": "../public/_nuxt/C8uYo8hH.js"
  },
  "/_nuxt/C8Hnu47z.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"11c9-1la8xDBbwsvhXTcUdvkUNpjDupw\"",
    "mtime": "2026-10-06T14:13:00.168Z",
    "size": 4553,
    "path": "../public/_nuxt/C8Hnu47z.js"
  },
  "/_nuxt/CC--VpxQ.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"5acf-X6BkE9hfKwV/6YmArcqCx39uv5s\"",
    "mtime": "2026-10-06T14:13:00.168Z",
    "size": 23247,
    "path": "../public/_nuxt/CC--VpxQ.js"
  },
  "/_nuxt/CEAV8Kzl.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"13b-tOvC+FqwXrY5+C+yf7DzkeV9t8c\"",
    "mtime": "2026-10-06T14:13:00.168Z",
    "size": 315,
    "path": "../public/_nuxt/CEAV8Kzl.js"
  },
  "/_nuxt/CGmxNWSn.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"2b6e-AhWjpruvsc6gVQFQeSrza1Pg34c\"",
    "mtime": "2026-10-06T14:13:00.169Z",
    "size": 11118,
    "path": "../public/_nuxt/CGmxNWSn.js"
  },
  "/_nuxt/CDH9PLmQ.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"18e-AnPx9c/hH3PdLy9V+qUq3t16BkI\"",
    "mtime": "2026-10-06T14:13:00.169Z",
    "size": 398,
    "path": "../public/_nuxt/CDH9PLmQ.js"
  },
  "/_nuxt/C9cToUx3.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"a460-7esthGKgLi2/fXeNBdI9dpTmWdg\"",
    "mtime": "2026-10-06T14:13:00.169Z",
    "size": 42080,
    "path": "../public/_nuxt/C9cToUx3.js"
  },
  "/_nuxt/CGywU2eY.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"1b15-bCws1/r/FueaWVJgutI+RbgXPpo\"",
    "mtime": "2026-10-06T14:13:00.168Z",
    "size": 6933,
    "path": "../public/_nuxt/CGywU2eY.js"
  },
  "/_nuxt/CIYSSfIx.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"1f9-4oOSLTXsZt6kKNneStefrEbCDP0\"",
    "mtime": "2026-10-06T14:13:00.168Z",
    "size": 505,
    "path": "../public/_nuxt/CIYSSfIx.js"
  },
  "/_nuxt/C2k51jzD.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"2775-I/X1nmzD+HLjOCdro9aZ8NSO76Y\"",
    "mtime": "2026-10-06T14:13:00.168Z",
    "size": 10101,
    "path": "../public/_nuxt/C2k51jzD.js"
  },
  "/_nuxt/CIqO-HNJ.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"139d-HazggKFjH+uBTHvYGfpX8HC4jNE\"",
    "mtime": "2026-10-06T14:13:00.169Z",
    "size": 5021,
    "path": "../public/_nuxt/CIqO-HNJ.js"
  },
  "/_nuxt/CGyz3Xbb.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"22b4-JYE8w+/QOzTx9KciEUUjWI18AZY\"",
    "mtime": "2026-10-06T14:13:00.169Z",
    "size": 8884,
    "path": "../public/_nuxt/CGyz3Xbb.js"
  },
  "/_nuxt/CKCqiJVy.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"2ec-+wbGCgjFoL7ePaO5fwAA5Poo+Ao\"",
    "mtime": "2026-10-06T14:13:00.169Z",
    "size": 748,
    "path": "../public/_nuxt/CKCqiJVy.js"
  },
  "/_nuxt/CKICZ9Kr.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"f91-yMgKw+gQ6q3oPCSbnf9mUuN6MaE\"",
    "mtime": "2026-10-06T14:13:00.169Z",
    "size": 3985,
    "path": "../public/_nuxt/CKICZ9Kr.js"
  },
  "/_nuxt/CIbCGcbu.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"8ae-w+1D1Y3hbyzWeafb1Av5WODqF44\"",
    "mtime": "2026-10-06T14:13:00.169Z",
    "size": 2222,
    "path": "../public/_nuxt/CIbCGcbu.js"
  },
  "/_nuxt/CL1W5OJf.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"3f7-YWWVvCxecvE2l1KoXxuu9vfyG2c\"",
    "mtime": "2026-10-06T14:13:00.169Z",
    "size": 1015,
    "path": "../public/_nuxt/CL1W5OJf.js"
  },
  "/_nuxt/CM7al4j3.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"290a-ck7RCdS2h2D5g94CNEuDatVvBAs\"",
    "mtime": "2026-10-06T14:13:00.169Z",
    "size": 10506,
    "path": "../public/_nuxt/CM7al4j3.js"
  },
  "/_nuxt/CLHqXPoT.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"4145-r23XENmy1m2wuDqobRJu+Y0eSAo\"",
    "mtime": "2026-10-06T14:13:00.169Z",
    "size": 16709,
    "path": "../public/_nuxt/CLHqXPoT.js"
  },
  "/_nuxt/CNCjCpM9.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"891-b0VOJ3Z5F1nh4X98KD/5aKmlgyE\"",
    "mtime": "2026-10-06T14:13:00.170Z",
    "size": 2193,
    "path": "../public/_nuxt/CNCjCpM9.js"
  },
  "/_nuxt/CN0kei36.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"45d-0R60vvl4r6WwXQiL8OZY12JJ/O4\"",
    "mtime": "2026-10-06T14:13:00.169Z",
    "size": 1117,
    "path": "../public/_nuxt/CN0kei36.js"
  },
  "/_nuxt/CNu1ZmKq.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"1d0c-yA5qFAqgkROZIaBD8pgB8vuG9jg\"",
    "mtime": "2026-10-06T14:13:00.169Z",
    "size": 7436,
    "path": "../public/_nuxt/CNu1ZmKq.js"
  },
  "/_nuxt/COVH-mNy.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"799-ZgPPF7sPSiaAa4hYXF0Fz7sbcTA\"",
    "mtime": "2026-10-06T14:13:00.169Z",
    "size": 1945,
    "path": "../public/_nuxt/COVH-mNy.js"
  },
  "/_nuxt/CRQH9uzD.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"1f1a-MPUR1BcXCtLmfYAnQRmDI7jZMaE\"",
    "mtime": "2026-10-06T14:13:00.170Z",
    "size": 7962,
    "path": "../public/_nuxt/CRQH9uzD.js"
  },
  "/_nuxt/CSyHKS9z.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"19a8-25CVR9RCLe/fLB3PAvsVWnlJDGs\"",
    "mtime": "2026-10-06T14:13:00.170Z",
    "size": 6568,
    "path": "../public/_nuxt/CSyHKS9z.js"
  },
  "/_nuxt/CP45WM8D.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"1284f-HUNDOK7SCbKiREmetIfG877Zc9o\"",
    "mtime": "2026-10-06T14:13:00.169Z",
    "size": 75855,
    "path": "../public/_nuxt/CP45WM8D.js"
  },
  "/_nuxt/CTNas-46.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"60d-E7KbZenjevQCTJhbWVCiz7FR4AI\"",
    "mtime": "2026-10-06T14:13:00.170Z",
    "size": 1549,
    "path": "../public/_nuxt/CTNas-46.js"
  },
  "/_nuxt/CUB9j8_P.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"5635-nlbH7lw63rYhz7LnGyF8otw3U0s\"",
    "mtime": "2026-10-06T14:13:00.170Z",
    "size": 22069,
    "path": "../public/_nuxt/CUB9j8_P.js"
  },
  "/_nuxt/CUb8Vvyd.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"658-4TrZAOSM/FsqlKskRtKbAFb6e50\"",
    "mtime": "2026-10-06T14:13:00.170Z",
    "size": 1624,
    "path": "../public/_nuxt/CUb8Vvyd.js"
  },
  "/_nuxt/CUfpdUed.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"b5f9-CtwsEyZ0BPOf7au5qHR1NNJeNzE\"",
    "mtime": "2026-10-06T14:13:00.170Z",
    "size": 46585,
    "path": "../public/_nuxt/CUfpdUed.js"
  },
  "/_nuxt/CUjZLPbq.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"3bd-5m63G7FP4n4MjEtJDlc5xFuayyQ\"",
    "mtime": "2026-10-06T14:13:00.170Z",
    "size": 957,
    "path": "../public/_nuxt/CUjZLPbq.js"
  },
  "/_nuxt/CVFtVfHg.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"428-OYHVQW7F87YbYGc6qqd650tffJU\"",
    "mtime": "2026-10-06T14:13:00.170Z",
    "size": 1064,
    "path": "../public/_nuxt/CVFtVfHg.js"
  },
  "/_nuxt/CVOON2Hj.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"48f-BsvmfulYp+MPA4XcfqtAL3KldvI\"",
    "mtime": "2026-10-06T14:13:00.170Z",
    "size": 1167,
    "path": "../public/_nuxt/CVOON2Hj.js"
  },
  "/_nuxt/CWqwKAIp.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"1248-hSzHjmtk+AhL3rotEFegaNlqAQE\"",
    "mtime": "2026-10-06T14:13:00.170Z",
    "size": 4680,
    "path": "../public/_nuxt/CWqwKAIp.js"
  },
  "/_nuxt/CXs7-q2G.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"d42-+OQXfUebbVRXQAzF/qjTWSuUjNM\"",
    "mtime": "2026-10-06T14:13:00.170Z",
    "size": 3394,
    "path": "../public/_nuxt/CXs7-q2G.js"
  },
  "/_nuxt/CYN56Lvp.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"2fcb-BaveW0H5GL2xHCrB/3puHc6JbCE\"",
    "mtime": "2026-10-06T14:13:00.170Z",
    "size": 12235,
    "path": "../public/_nuxt/CYN56Lvp.js"
  },
  "/_nuxt/CYZd9xvq.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"f54-S+akvn0sQmbbGuh+0FYtssOZ7HM\"",
    "mtime": "2026-10-06T14:13:00.170Z",
    "size": 3924,
    "path": "../public/_nuxt/CYZd9xvq.js"
  },
  "/_nuxt/CaEMd0c8.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"353-Q0mV98swxS6xmjthFZHd3UG8fI8\"",
    "mtime": "2026-10-06T14:13:00.170Z",
    "size": 851,
    "path": "../public/_nuxt/CaEMd0c8.js"
  },
  "/_nuxt/CaQLJCsQ.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"7ef0-LdJ6+RNDGj3IKb2J/DhHfYUAqsY\"",
    "mtime": "2026-10-06T14:13:00.171Z",
    "size": 32496,
    "path": "../public/_nuxt/CaQLJCsQ.js"
  },
  "/_nuxt/CbCNi-jq.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"3a4-MsvLABcjR4trCf0KPrjyIwxJYD4\"",
    "mtime": "2026-10-06T14:13:00.171Z",
    "size": 932,
    "path": "../public/_nuxt/CbCNi-jq.js"
  },
  "/_nuxt/CbahrEM-.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"790-rrlosY5Q8japi3tfqzuzAZolWz0\"",
    "mtime": "2026-10-06T14:13:00.171Z",
    "size": 1936,
    "path": "../public/_nuxt/CbahrEM-.js"
  },
  "/_nuxt/CcuGjGvk.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"50b-BzFbalCeS3z2b/P+Vcy/EcBDGIE\"",
    "mtime": "2026-10-06T14:13:00.171Z",
    "size": 1291,
    "path": "../public/_nuxt/CcuGjGvk.js"
  },
  "/_nuxt/CdhCrau_.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"49f-5xuFo7C0EvQAWMRBPZhrSoRVplw\"",
    "mtime": "2026-10-06T14:13:00.171Z",
    "size": 1183,
    "path": "../public/_nuxt/CdhCrau_.js"
  },
  "/_nuxt/CesjeGNX.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"1193-6benruM4HqYaWIuM+b6oNV+PKrA\"",
    "mtime": "2026-10-06T14:13:00.171Z",
    "size": 4499,
    "path": "../public/_nuxt/CesjeGNX.js"
  },
  "/_nuxt/CfOolcty.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"200-z4HGNwuiwXPKJu7MTpGiw4Acwsg\"",
    "mtime": "2026-10-06T14:13:00.171Z",
    "size": 512,
    "path": "../public/_nuxt/CfOolcty.js"
  },
  "/_nuxt/Ci356aBk.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"fa9-oGowtusL0TWGtxVJWsdUFajrEvU\"",
    "mtime": "2026-10-06T14:13:00.171Z",
    "size": 4009,
    "path": "../public/_nuxt/Ci356aBk.js"
  },
  "/_nuxt/ClY_cTjh.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"6b4e-WjbGIW6XyUTzZTZxQ46yroCJIUs\"",
    "mtime": "2026-10-06T14:13:00.171Z",
    "size": 27470,
    "path": "../public/_nuxt/ClY_cTjh.js"
  },
  "/_nuxt/CjwWmZxp.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"39e-X8OobQ3ziakREfuXXcuZ/9pDUTk\"",
    "mtime": "2026-10-06T14:13:00.171Z",
    "size": 926,
    "path": "../public/_nuxt/CjwWmZxp.js"
  },
  "/_nuxt/ClfTYnLG.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"2efa-y50P7bwRqycGbFxA6sNGvvXm6PQ\"",
    "mtime": "2026-10-06T14:13:00.171Z",
    "size": 12026,
    "path": "../public/_nuxt/ClfTYnLG.js"
  },
  "/_nuxt/CpwtrzAZ.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"1dd-+Qfdl4a1PRGTueJkd3DvjfJyIwg\"",
    "mtime": "2026-10-06T14:13:00.171Z",
    "size": 477,
    "path": "../public/_nuxt/CpwtrzAZ.js"
  },
  "/_nuxt/CrS-sqv4.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"31a-vJL59NiTARMEvGR8AwwdenODbAE\"",
    "mtime": "2026-10-06T14:13:00.171Z",
    "size": 794,
    "path": "../public/_nuxt/CrS-sqv4.js"
  },
  "/_nuxt/CmaWy5vs.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"97d-dkohbVQ3Pvy5zhlgBTjBXY1sO2M\"",
    "mtime": "2026-10-06T14:13:00.171Z",
    "size": 2429,
    "path": "../public/_nuxt/CmaWy5vs.js"
  },
  "/_nuxt/Cuq8g12x.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"45d-EpPWCFQpr7Y3Y35DaMp25064tl0\"",
    "mtime": "2026-10-06T14:13:00.171Z",
    "size": 1117,
    "path": "../public/_nuxt/Cuq8g12x.js"
  },
  "/_nuxt/CtkdzQSB.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"f43-JlTlr/zhLc3jwGL0XKfCDl2VGjk\"",
    "mtime": "2026-10-06T14:13:00.171Z",
    "size": 3907,
    "path": "../public/_nuxt/CtkdzQSB.js"
  },
  "/_nuxt/CwWTfcVa.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"292-J8y+rjxAf5q4tOPkZmut+/l9kMk\"",
    "mtime": "2026-10-06T14:13:00.172Z",
    "size": 658,
    "path": "../public/_nuxt/CwWTfcVa.js"
  },
  "/_nuxt/CqfqSCa0.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"3263-FWNlwkQztWoYrRmzTRsoaz4mTLQ\"",
    "mtime": "2026-10-06T14:13:00.171Z",
    "size": 12899,
    "path": "../public/_nuxt/CqfqSCa0.js"
  },
  "/_nuxt/CxIxyNWn.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"215d-BurktZ1GuQ0Wt7alhCLl5vR1Y5U\"",
    "mtime": "2026-10-06T14:13:00.172Z",
    "size": 8541,
    "path": "../public/_nuxt/CxIxyNWn.js"
  },
  "/_nuxt/CxK2ihzk.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"524-yKn8z/zxZf07N0Jv0cLSl1a8750\"",
    "mtime": "2026-10-06T14:13:00.172Z",
    "size": 1316,
    "path": "../public/_nuxt/CxK2ihzk.js"
  },
  "/_nuxt/CzZy66vu.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"14f1-usStxjQJc8F1Q9S1Plnfy6z+mbo\"",
    "mtime": "2026-10-06T14:13:00.172Z",
    "size": 5361,
    "path": "../public/_nuxt/CzZy66vu.js"
  },
  "/_nuxt/D3NYqORp.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"5cd-9DoXEmjEpyxfamczoCZ1CsvbP1s\"",
    "mtime": "2026-10-06T14:13:00.172Z",
    "size": 1485,
    "path": "../public/_nuxt/D3NYqORp.js"
  },
  "/_nuxt/D4d5-HUX.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"11b4-jdcT9/5maZlyu/D/63ZCkKZys4s\"",
    "mtime": "2026-10-06T14:13:00.172Z",
    "size": 4532,
    "path": "../public/_nuxt/D4d5-HUX.js"
  },
  "/_nuxt/D4UDorhB.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"317-LvXYFeXHMghcMIEstfl/n5fdEMQ\"",
    "mtime": "2026-10-06T14:13:00.172Z",
    "size": 791,
    "path": "../public/_nuxt/D4UDorhB.js"
  },
  "/_nuxt/D6CJuJwd.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"4a9-jxzMtVIHy/VXUaaONlH4lKhk4sk\"",
    "mtime": "2026-10-06T14:13:00.172Z",
    "size": 1193,
    "path": "../public/_nuxt/D6CJuJwd.js"
  },
  "/_nuxt/D8AXWDn-.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"60c-J+ePnJ81ZcZoOCLOv2FJvfCe9tA\"",
    "mtime": "2026-10-06T14:13:00.172Z",
    "size": 1548,
    "path": "../public/_nuxt/D8AXWDn-.js"
  },
  "/_nuxt/D8b17Ul9.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"1cb5-dEq5Wz8j0ceE4WsV5LFCkZmb9UE\"",
    "mtime": "2026-10-06T14:13:00.172Z",
    "size": 7349,
    "path": "../public/_nuxt/D8b17Ul9.js"
  },
  "/_nuxt/DC0RN5nS.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"158d-yzh2du9I1jMASWQAjrK3IWmx5Pw\"",
    "mtime": "2026-10-06T14:13:00.172Z",
    "size": 5517,
    "path": "../public/_nuxt/DC0RN5nS.js"
  },
  "/_nuxt/DCKI0AgP.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"1ff-xojquYHA+oV5sC7SbqH5T9La0W8\"",
    "mtime": "2026-10-06T14:13:00.172Z",
    "size": 511,
    "path": "../public/_nuxt/DCKI0AgP.js"
  },
  "/_nuxt/DDttFU0J.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"142c-9bFyIJbcI7Z9FA6gvVGABwiMPLQ\"",
    "mtime": "2026-10-06T14:13:00.172Z",
    "size": 5164,
    "path": "../public/_nuxt/DDttFU0J.js"
  },
  "/_nuxt/DFSkUlhO.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"437-ikliuwkvEXWU2xh0Hk+GExjFziw\"",
    "mtime": "2026-10-06T14:13:00.173Z",
    "size": 1079,
    "path": "../public/_nuxt/DFSkUlhO.js"
  },
  "/_nuxt/DDjRD_dL.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"2c73d-7dq6A8yFT8Zhr6NO2QRYBV0Nzo0\"",
    "mtime": "2026-10-06T14:13:00.172Z",
    "size": 182077,
    "path": "../public/_nuxt/DDjRD_dL.js"
  },
  "/_nuxt/DHCu7uJ4.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"11a9-4JequZsLTFnPNHp7yAtDiFD89zA\"",
    "mtime": "2026-10-06T14:13:00.173Z",
    "size": 4521,
    "path": "../public/_nuxt/DHCu7uJ4.js"
  },
  "/_nuxt/DIdo_cGh.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"fce-TK58zmFmS7i1jlAN5nPGx73ItvQ\"",
    "mtime": "2026-10-06T14:13:00.173Z",
    "size": 4046,
    "path": "../public/_nuxt/DIdo_cGh.js"
  },
  "/_nuxt/DIykyBgz.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"7ab5-X787aOHdN/rxrRwmpvTB/I6ntr8\"",
    "mtime": "2026-10-06T14:13:00.173Z",
    "size": 31413,
    "path": "../public/_nuxt/DIykyBgz.js"
  },
  "/_nuxt/DK3Fl9T5.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"9e-/3ZreeJJ1QByVcY6NKPe1BzCjpo\"",
    "mtime": "2026-10-06T14:13:00.173Z",
    "size": 158,
    "path": "../public/_nuxt/DK3Fl9T5.js"
  },
  "/_nuxt/DK31WujN.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"4923-372VwEDcutg1OFKUCPAgfsI5ii8\"",
    "mtime": "2026-10-06T14:13:00.173Z",
    "size": 18723,
    "path": "../public/_nuxt/DK31WujN.js"
  },
  "/_nuxt/DKlGQFkL.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"773-iwWZfKLpQDYLKC60/NZR9WCkK84\"",
    "mtime": "2026-10-06T14:13:00.173Z",
    "size": 1907,
    "path": "../public/_nuxt/DKlGQFkL.js"
  },
  "/_nuxt/DLJp9Ds3.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"23d1-HotfIscmgECXBJO0/Q2bwWVuWQ8\"",
    "mtime": "2026-10-06T14:13:00.173Z",
    "size": 9169,
    "path": "../public/_nuxt/DLJp9Ds3.js"
  },
  "/_nuxt/DM-nIL3H.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"339-tzRg4xXjyS2nLbh+HxkVTF+KLrs\"",
    "mtime": "2026-10-06T14:13:00.173Z",
    "size": 825,
    "path": "../public/_nuxt/DM-nIL3H.js"
  },
  "/_nuxt/DJrNQw7Q.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"602-HJv+G/4xc6/J0Q9UnwwreiyF2Bg\"",
    "mtime": "2026-10-06T14:13:00.173Z",
    "size": 1538,
    "path": "../public/_nuxt/DJrNQw7Q.js"
  },
  "/_nuxt/DNXc0-Df.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"395-P6K4KqjUX4izEQfXm0y/FC7+IfM\"",
    "mtime": "2026-10-06T14:13:00.173Z",
    "size": 917,
    "path": "../public/_nuxt/DNXc0-Df.js"
  },
  "/_nuxt/DOGJqJh5.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"550-+ucMpR09utObJO2a8gcadvsil1w\"",
    "mtime": "2026-10-06T14:13:00.173Z",
    "size": 1360,
    "path": "../public/_nuxt/DOGJqJh5.js"
  },
  "/_nuxt/DQGbELwc.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"65ee-PXP1SdujEPWN9xvcczI9RG2Y4Mo\"",
    "mtime": "2026-10-06T14:13:00.173Z",
    "size": 26094,
    "path": "../public/_nuxt/DQGbELwc.js"
  },
  "/_nuxt/DQOOWGGk.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"3cd-xIWc/SYfY2zvQhiymEkjXZ5FOcg\"",
    "mtime": "2026-10-06T14:13:00.173Z",
    "size": 973,
    "path": "../public/_nuxt/DQOOWGGk.js"
  },
  "/_nuxt/DR2h77DM.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"1298-6SRRzOENq3O3jWoqyVDHiu3PR/Y\"",
    "mtime": "2026-10-06T14:13:00.173Z",
    "size": 4760,
    "path": "../public/_nuxt/DR2h77DM.js"
  },
  "/_nuxt/DRTp4Jib.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"1c2-dT/Q5Ov0QNsyx8qdWXBmDB6I2Hg\"",
    "mtime": "2026-10-06T14:13:00.174Z",
    "size": 450,
    "path": "../public/_nuxt/DRTp4Jib.js"
  },
  "/_nuxt/DRteJccr.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"f90-nviAiuojV6moCk7dtZuHo2Fi9Cw\"",
    "mtime": "2026-10-06T14:13:00.173Z",
    "size": 3984,
    "path": "../public/_nuxt/DRteJccr.js"
  },
  "/_nuxt/DS7r6QfH.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"656-FNg/Y/vv7krmnXYE8THmygP9M2A\"",
    "mtime": "2026-10-06T14:13:00.173Z",
    "size": 1622,
    "path": "../public/_nuxt/DS7r6QfH.js"
  },
  "/_nuxt/DULnhC4e.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"c0a-Ef90xOCQujae+XJKPwXnnird5fU\"",
    "mtime": "2026-10-06T14:13:00.174Z",
    "size": 3082,
    "path": "../public/_nuxt/DULnhC4e.js"
  },
  "/_nuxt/DX_F0joL.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"37-NUMZ4QtoCG67YOHfYguIutTEKAU\"",
    "mtime": "2026-10-06T14:13:00.174Z",
    "size": 55,
    "path": "../public/_nuxt/DX_F0joL.js"
  },
  "/_nuxt/DTWP8ddk.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"4664-MBmIR9XWpKR0LLshzQjFggIuH5Y\"",
    "mtime": "2026-10-06T14:13:00.173Z",
    "size": 18020,
    "path": "../public/_nuxt/DTWP8ddk.js"
  },
  "/_nuxt/DYTv2ePn.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"afa-B6Jy2jSQaOi0iluxtdRXhbnc8U8\"",
    "mtime": "2026-10-06T14:13:00.174Z",
    "size": 2810,
    "path": "../public/_nuxt/DYTv2ePn.js"
  },
  "/_nuxt/DaAjJYut.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"3aa-A1NPc9y5xrS/Gca61ioq1HPIh3M\"",
    "mtime": "2026-10-06T14:13:00.174Z",
    "size": 938,
    "path": "../public/_nuxt/DaAjJYut.js"
  },
  "/_nuxt/DXx-N61Q.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"47e-sGDKSIp5qk3jxVVg5sefswrDV4w\"",
    "mtime": "2026-10-06T14:13:00.174Z",
    "size": 1150,
    "path": "../public/_nuxt/DXx-N61Q.js"
  },
  "/_nuxt/D_YPmNqg.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"2fe-aOi3mpeJE+EMPsSe1Sb6luN2gOA\"",
    "mtime": "2026-10-06T14:13:00.174Z",
    "size": 766,
    "path": "../public/_nuxt/D_YPmNqg.js"
  },
  "/_nuxt/DcoW2Wa8.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"c0c-deeMyoFVnfGHBE5hApweW0kYhjU\"",
    "mtime": "2026-10-06T14:13:00.174Z",
    "size": 3084,
    "path": "../public/_nuxt/DcoW2Wa8.js"
  },
  "/_nuxt/DbRbo7Sw.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"5bad-MPlg7c3VWd6poVi/sXxG43aXRWo\"",
    "mtime": "2026-10-06T14:13:00.174Z",
    "size": 23469,
    "path": "../public/_nuxt/DbRbo7Sw.js"
  },
  "/_nuxt/DdWLPh-Y.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"397-WNV+nhhk83uHT5mwXaiJ6E1e9Mw\"",
    "mtime": "2026-10-06T14:13:00.174Z",
    "size": 919,
    "path": "../public/_nuxt/DdWLPh-Y.js"
  },
  "/_nuxt/DdarXQZj.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"47b-ax86pZ0PO2FH5rr1D4VsELf1abQ\"",
    "mtime": "2026-10-06T14:13:00.174Z",
    "size": 1147,
    "path": "../public/_nuxt/DdarXQZj.js"
  },
  "/_nuxt/Ddvtiy3t.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"b53-Ls1UZdFCRSeDVUqwQ/Ih3WY72gI\"",
    "mtime": "2026-10-06T14:13:00.174Z",
    "size": 2899,
    "path": "../public/_nuxt/Ddvtiy3t.js"
  },
  "/_nuxt/DcqtxjsZ.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"19f1-a4V9NR6UpXoqkm7OaTBNf8PIZ6c\"",
    "mtime": "2026-10-06T14:13:00.174Z",
    "size": 6641,
    "path": "../public/_nuxt/DcqtxjsZ.js"
  },
  "/_nuxt/Dfw1sMLM.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"9e90-QOg7BnvB7nG/x+s4dkJaLmkIge4\"",
    "mtime": "2026-10-06T14:13:00.174Z",
    "size": 40592,
    "path": "../public/_nuxt/Dfw1sMLM.js"
  },
  "/_nuxt/Dgm3FbQg.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"39e-I2K1QpyOjsPREtgcMuTDSV3ifeE\"",
    "mtime": "2026-10-06T14:13:00.174Z",
    "size": 926,
    "path": "../public/_nuxt/Dgm3FbQg.js"
  },
  "/_nuxt/DgZ4OGpb.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"3043-8zWGIJR1d/J95WZD7cGQIXnn4zM\"",
    "mtime": "2026-10-06T14:13:00.174Z",
    "size": 12355,
    "path": "../public/_nuxt/DgZ4OGpb.js"
  },
  "/_nuxt/DgxY6U1-.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"3cd-KJR3wSjpemgYoe3xr5WbGLh/gws\"",
    "mtime": "2026-10-06T14:13:00.174Z",
    "size": 973,
    "path": "../public/_nuxt/DgxY6U1-.js"
  },
  "/_nuxt/Dh8Otlp0.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"38a-nWSMXbDNQYabcenmwyLjMiGXNfM\"",
    "mtime": "2026-10-06T14:13:00.174Z",
    "size": 906,
    "path": "../public/_nuxt/Dh8Otlp0.js"
  },
  "/_nuxt/DhGtpQ-w.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"33d4-MyrgatlMNl5JfHCUGf90xH57Xxo\"",
    "mtime": "2026-10-06T14:13:00.175Z",
    "size": 13268,
    "path": "../public/_nuxt/DhGtpQ-w.js"
  },
  "/_nuxt/DiZ2_BEh.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"656-jtF52iGSkkO0QpNtDv/C+ecUPCo\"",
    "mtime": "2026-10-06T14:13:00.175Z",
    "size": 1622,
    "path": "../public/_nuxt/DiZ2_BEh.js"
  },
  "/_nuxt/DkbzJ340.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"1dde-jmHMeeOsacei6vktq0kGfWigNrA\"",
    "mtime": "2026-10-06T14:13:00.175Z",
    "size": 7646,
    "path": "../public/_nuxt/DkbzJ340.js"
  },
  "/_nuxt/DnTspVEG.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"1027-eY93skUeqKcYUTpLzQ6AO5Ip3EE\"",
    "mtime": "2026-10-06T14:13:00.175Z",
    "size": 4135,
    "path": "../public/_nuxt/DnTspVEG.js"
  },
  "/_nuxt/Dn_iTt60.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"218e-6+BlgPGmn7bv6asy8mD7f9Ebmyo\"",
    "mtime": "2026-10-06T14:13:00.175Z",
    "size": 8590,
    "path": "../public/_nuxt/Dn_iTt60.js"
  },
  "/_nuxt/Dofm3Pkp.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"1c75-2oEf7dCDkoEOsMfd4jziaTBXxdI\"",
    "mtime": "2026-10-06T14:13:00.175Z",
    "size": 7285,
    "path": "../public/_nuxt/Dofm3Pkp.js"
  },
  "/_nuxt/DqvsrYSM.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"335-Qu9aKHrXLdCBZkNEVX0HVSeLklY\"",
    "mtime": "2026-10-06T14:13:00.175Z",
    "size": 821,
    "path": "../public/_nuxt/DqvsrYSM.js"
  },
  "/_nuxt/DrjK9N7x.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"525-D/D0LN81afvKP++E7C1dJuL4qbE\"",
    "mtime": "2026-10-06T14:13:00.175Z",
    "size": 1317,
    "path": "../public/_nuxt/DrjK9N7x.js"
  },
  "/_nuxt/Drw1k5zO.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"83d9-xmLb6KjNwshktSHkeuguQWIsVAY\"",
    "mtime": "2026-10-06T14:13:00.175Z",
    "size": 33753,
    "path": "../public/_nuxt/Drw1k5zO.js"
  },
  "/_nuxt/DsX0SZfZ.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"395-HQ4pl1MPCyV1sm8GtXZRR4NkVU8\"",
    "mtime": "2026-10-06T14:13:00.175Z",
    "size": 917,
    "path": "../public/_nuxt/DsX0SZfZ.js"
  },
  "/_nuxt/DsxCfoMA.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"65a-cy5B4qA47VASKPP6qmwwSzLDelY\"",
    "mtime": "2026-10-06T14:13:00.175Z",
    "size": 1626,
    "path": "../public/_nuxt/DsxCfoMA.js"
  },
  "/_nuxt/Du0udnvW.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"683-RpUoP5FPkuoIYq2JX4dsROwr9Pg\"",
    "mtime": "2026-10-06T14:13:00.175Z",
    "size": 1667,
    "path": "../public/_nuxt/Du0udnvW.js"
  },
  "/_nuxt/DuUhOt8E.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"376-fQ5oYngpmJ76+zYOFs+Wq3SjZ6A\"",
    "mtime": "2026-10-06T14:13:00.176Z",
    "size": 886,
    "path": "../public/_nuxt/DuUhOt8E.js"
  },
  "/_nuxt/Dut4pjqo.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"1f70-nE6BRZzGg30nMEbeUyDcAwue8Xo\"",
    "mtime": "2026-10-06T14:13:00.175Z",
    "size": 8048,
    "path": "../public/_nuxt/Dut4pjqo.js"
  },
  "/_nuxt/DviHk4hr.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"2376-v3gIfsZsMy4bAbc0efKdT19Cqso\"",
    "mtime": "2026-10-06T14:13:00.175Z",
    "size": 9078,
    "path": "../public/_nuxt/DviHk4hr.js"
  },
  "/_nuxt/DvHUsLKY.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"79c6-yhcRMV0m8sRhykDRx80flilYYm4\"",
    "mtime": "2026-10-06T14:13:00.175Z",
    "size": 31174,
    "path": "../public/_nuxt/DvHUsLKY.js"
  },
  "/_nuxt/DwA7sCR5.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"3a4-V+Ed2x39ojMGc6skAVIQqGNm4nM\"",
    "mtime": "2026-10-06T14:13:00.176Z",
    "size": 932,
    "path": "../public/_nuxt/DwA7sCR5.js"
  },
  "/_nuxt/Ek11cyfv.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"bf7-Ko70nvmG4zC6tPwSyjoIlRi0s7o\"",
    "mtime": "2026-10-06T14:13:00.176Z",
    "size": 3063,
    "path": "../public/_nuxt/Ek11cyfv.js"
  },
  "/_nuxt/FWxg9KPQ.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"475-bmak2J84aAhg2FUQgtnpzMYkbHk\"",
    "mtime": "2026-10-06T14:13:00.176Z",
    "size": 1141,
    "path": "../public/_nuxt/FWxg9KPQ.js"
  },
  "/_nuxt/GSombnXj.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"1b5d-KEyX6lKwPvw6VWoTu3Um/XY1AB0\"",
    "mtime": "2026-10-06T14:13:00.176Z",
    "size": 7005,
    "path": "../public/_nuxt/GSombnXj.js"
  },
  "/_nuxt/JkFHFvK9.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"2d3-Wid6qm65pHqvZb8x0m6tpf7gy5E\"",
    "mtime": "2026-10-06T14:13:00.176Z",
    "size": 723,
    "path": "../public/_nuxt/JkFHFvK9.js"
  },
  "/_nuxt/M9KGcLyR.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"16db-frOpsi7LczUOyfWSSDuRwl7Bg98\"",
    "mtime": "2026-10-06T14:13:00.176Z",
    "size": 5851,
    "path": "../public/_nuxt/M9KGcLyR.js"
  },
  "/_nuxt/MGWznZaV.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"3790-0ncD6Aw756resFiJuf+/V8DitqE\"",
    "mtime": "2026-10-06T14:13:00.176Z",
    "size": 14224,
    "path": "../public/_nuxt/MGWznZaV.js"
  },
  "/_nuxt/NEO1H7Sz.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"1f20-YdHB5x7sHZbNz3GB3Go4IIaNb7c\"",
    "mtime": "2026-10-06T14:13:00.176Z",
    "size": 7968,
    "path": "../public/_nuxt/NEO1H7Sz.js"
  },
  "/_nuxt/S3mrMlXj.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"3d0-DjQz4Auza7vHEG7LzQsgBYi+Eek\"",
    "mtime": "2026-10-06T14:13:00.176Z",
    "size": 976,
    "path": "../public/_nuxt/S3mrMlXj.js"
  },
  "/_nuxt/NdgdJp5k.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"684c-nKsLlMeX4O6oGtPvAE77kV05jOo\"",
    "mtime": "2026-10-06T14:13:00.176Z",
    "size": 26700,
    "path": "../public/_nuxt/NdgdJp5k.js"
  },
  "/_nuxt/U9R9kBQn.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"32e-w9sWrkGOUFGGKatpIKX8l5L/lCs\"",
    "mtime": "2026-10-06T14:13:00.176Z",
    "size": 814,
    "path": "../public/_nuxt/U9R9kBQn.js"
  },
  "/_nuxt/UncsMXdF.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"1227-xDvJlxDBynDLhLV4JdnyD6+9lZ0\"",
    "mtime": "2026-10-06T14:13:00.176Z",
    "size": 4647,
    "path": "../public/_nuxt/UncsMXdF.js"
  },
  "/_nuxt/WFWeYHGn.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"224-IRTwK9o/62yXL1w9KWiixlGrFgQ\"",
    "mtime": "2026-10-06T14:13:00.176Z",
    "size": 548,
    "path": "../public/_nuxt/WFWeYHGn.js"
  },
  "/_nuxt/Y7mqYPyj.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"209-MQ13PonZGnRhoJ5AJSWmZZ9Xm9c\"",
    "mtime": "2026-10-06T14:13:00.177Z",
    "size": 521,
    "path": "../public/_nuxt/Y7mqYPyj.js"
  },
  "/_nuxt/_KZEr5Wq.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"1097-qbgkNQ0m8sy8hR75n58zSeLaQBk\"",
    "mtime": "2026-10-06T14:13:00.176Z",
    "size": 4247,
    "path": "../public/_nuxt/_KZEr5Wq.js"
  },
  "/_nuxt/_cFRa2an.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"6bda-eRazu38lDEZP5mvgLLefp4Q1TfQ\"",
    "mtime": "2026-10-06T14:13:00.177Z",
    "size": 27610,
    "path": "../public/_nuxt/_cFRa2an.js"
  },
  "/_nuxt/bzlQWGhd.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"4cca-PbX7T+In/piShegQ9Z6MjWu0fSI\"",
    "mtime": "2026-10-06T14:13:00.177Z",
    "size": 19658,
    "path": "../public/_nuxt/bzlQWGhd.js"
  },
  "/_nuxt/eL7M8g0y.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"45d-XIkiaTOBtxAtrC+d7fRtEkKXUNU\"",
    "mtime": "2026-10-06T14:13:00.177Z",
    "size": 1117,
    "path": "../public/_nuxt/eL7M8g0y.js"
  },
  "/_nuxt/error-404.DScsraWb.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"97d-VQOihydj+P1+6g1N+CVObCU4f4Q\"",
    "mtime": "2026-10-06T14:13:00.177Z",
    "size": 2429,
    "path": "../public/_nuxt/error-404.DScsraWb.css"
  },
  "/_nuxt/error-500.Dk9qu7JW.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"772-Z/hbRPHptebmEyKmXRQV50AzFDM\"",
    "mtime": "2026-10-06T14:13:00.177Z",
    "size": 1906,
    "path": "../public/_nuxt/error-500.Dk9qu7JW.css"
  },
  "/_nuxt/entry.B_lu2JGa.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"8858-FyPpAQt/514yFjk4119h7XKAjgk\"",
    "mtime": "2026-10-06T14:13:00.177Z",
    "size": 34904,
    "path": "../public/_nuxt/entry.B_lu2JGa.css"
  },
  "/_nuxt/fcu-QBFv.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"885-3bd13uTGMGV3bXjB7VCP7aHnVM8\"",
    "mtime": "2026-10-06T14:13:00.177Z",
    "size": 2181,
    "path": "../public/_nuxt/fcu-QBFv.js"
  },
  "/_nuxt/gJ1mRomp.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"3bd-0ScB02RnoB2CnYJxZnL5HfNQHmA\"",
    "mtime": "2026-10-06T14:13:00.177Z",
    "size": 957,
    "path": "../public/_nuxt/gJ1mRomp.js"
  },
  "/_nuxt/k2Bd2QhF.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"17cf-OaOUJ8h/4hYWGZAZUXUaXbYDu8A\"",
    "mtime": "2026-10-06T14:13:00.177Z",
    "size": 6095,
    "path": "../public/_nuxt/k2Bd2QhF.js"
  },
  "/_nuxt/kQ8qXba0.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"17aea-MJtp7fEl84EFGM+mwRS9w18EkfU\"",
    "mtime": "2026-10-06T14:13:00.177Z",
    "size": 97002,
    "path": "../public/_nuxt/kQ8qXba0.js"
  },
  "/_nuxt/mZ67cHJo.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"1e7-myBA/EcXVVXxRL5+NYX5mqBQpMo\"",
    "mtime": "2026-10-06T14:13:00.177Z",
    "size": 487,
    "path": "../public/_nuxt/mZ67cHJo.js"
  },
  "/_nuxt/n8t_OeVt.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"1dcd-WtWgZmSrUq1mWDksht2Tcbn22Fw\"",
    "mtime": "2026-10-06T14:13:00.178Z",
    "size": 7629,
    "path": "../public/_nuxt/n8t_OeVt.js"
  },
  "/_nuxt/l3Zwk1us.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"e61-P9ucrKbWLqLbyLYpV1cp4LwkfOw\"",
    "mtime": "2026-10-06T14:13:00.177Z",
    "size": 3681,
    "path": "../public/_nuxt/l3Zwk1us.js"
  },
  "/_nuxt/nHB1B3Tm.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"3b7-m1FxlX10gQYEaXpoQUSoKJbB534\"",
    "mtime": "2026-10-06T14:13:00.177Z",
    "size": 951,
    "path": "../public/_nuxt/nHB1B3Tm.js"
  },
  "/_nuxt/msF9WOH9.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"b4b-Okh7zq2J+f4Pdni8UWvIpvU8Xis\"",
    "mtime": "2026-10-06T14:13:00.177Z",
    "size": 2891,
    "path": "../public/_nuxt/msF9WOH9.js"
  },
  "/_nuxt/primeicons.BvM4qbWp.woff2": {
    "type": "font/woff2",
    "etag": "\"7f34-l9HaYS1M5LiEPS6ejgTaLb40sjs\"",
    "mtime": "2026-10-06T14:13:00.178Z",
    "size": 32564,
    "path": "../public/_nuxt/primeicons.BvM4qbWp.woff2"
  },
  "/_nuxt/primeicons.BZF8q66I.eot": {
    "type": "application/vnd.ms-fontobject",
    "etag": "\"159ac-+j2rjKe3VCNTDQQXedI34BALAs8\"",
    "mtime": "2026-10-06T14:13:00.178Z",
    "size": 88492,
    "path": "../public/_nuxt/primeicons.BZF8q66I.eot"
  },
  "/_nuxt/primeicons.vaISzP8W.ttf": {
    "type": "font/ttf",
    "etag": "\"158fc-zRR3PC/ztVSgKYqUID0YXYbJJoM\"",
    "mtime": "2026-10-06T14:13:00.178Z",
    "size": 88316,
    "path": "../public/_nuxt/primeicons.vaISzP8W.ttf"
  },
  "/_nuxt/primeicons.qgkbr2_s.woff": {
    "type": "font/woff",
    "etag": "\"15948-W1Y8nqrREOx04N8eMlwq+AIGjn8\"",
    "mtime": "2026-10-06T14:13:00.178Z",
    "size": 88392,
    "path": "../public/_nuxt/primeicons.qgkbr2_s.woff"
  },
  "/_nuxt/pvFG9511.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"385-ORSx1xa3gSyI35YQS+JlffMS1hI\"",
    "mtime": "2026-10-06T14:13:00.178Z",
    "size": 901,
    "path": "../public/_nuxt/pvFG9511.js"
  },
  "/_nuxt/ptSuY9Eu.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"a53-vjn78LzHv4C3NmxYns0aY1IRqOo\"",
    "mtime": "2026-10-06T14:13:00.178Z",
    "size": 2643,
    "path": "../public/_nuxt/ptSuY9Eu.js"
  },
  "/_nuxt/qQGA2op3.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"544-+wspDn/TXv13MBMTx9q0bsFUpDM\"",
    "mtime": "2026-10-06T14:13:00.179Z",
    "size": 1348,
    "path": "../public/_nuxt/qQGA2op3.js"
  },
  "/_nuxt/primeicons.BmvFdQzO.svg": {
    "type": "image/svg+xml",
    "etag": "\"518ce-R7yoyVTaDCG5G0krVjlwM6Eq6pA\"",
    "mtime": "2026-10-06T14:13:00.178Z",
    "size": 334030,
    "path": "../public/_nuxt/primeicons.BmvFdQzO.svg"
  },
  "/_nuxt/ql2-utRM.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"338-/ce7xlG/fUcdCWTjIDvhrJGeU2U\"",
    "mtime": "2026-10-06T14:13:00.178Z",
    "size": 824,
    "path": "../public/_nuxt/ql2-utRM.js"
  },
  "/_nuxt/r9Gn0w1c.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"6c7-QnhLxaDRUUQTUGFY1mQBocPCp10\"",
    "mtime": "2026-10-06T14:13:00.178Z",
    "size": 1735,
    "path": "../public/_nuxt/r9Gn0w1c.js"
  },
  "/_nuxt/sF1FGblM.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"279-ROOdgq7ZbKkQSyQVFdLVlt5aFTM\"",
    "mtime": "2026-10-06T14:13:00.178Z",
    "size": 633,
    "path": "../public/_nuxt/sF1FGblM.js"
  },
  "/_nuxt/sdbL7ZE9.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"3b41-dwsOSyNTksA/fCV0retnLchqBlQ\"",
    "mtime": "2026-10-06T14:13:00.179Z",
    "size": 15169,
    "path": "../public/_nuxt/sdbL7ZE9.js"
  },
  "/_nuxt/vkuVO3ym.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"32d-bSJkDudncsDU/g8lc1Bm0ORQZBM\"",
    "mtime": "2026-10-06T14:13:00.179Z",
    "size": 813,
    "path": "../public/_nuxt/vkuVO3ym.js"
  },
  "/_nuxt/wZxbBgZT.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"8455-69ZvaDH8Wkupk0FB8AR+rR+GRDY\"",
    "mtime": "2026-10-06T14:13:00.179Z",
    "size": 33877,
    "path": "../public/_nuxt/wZxbBgZT.js"
  },
  "/_nuxt/rmdds0c1.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"5104-bSFkw8MUOm7Cn6U57LVxeFRLLlg\"",
    "mtime": "2026-10-06T14:13:00.178Z",
    "size": 20740,
    "path": "../public/_nuxt/rmdds0c1.js"
  },
  "/_nuxt/builds/latest.json": {
    "type": "application/json",
    "etag": "\"47-YSJOg8A5DYVkwBDoRaxB5HN6QYU\"",
    "mtime": "2026-10-06T14:13:00.135Z",
    "size": 71,
    "path": "../public/_nuxt/builds/latest.json"
  },
  "/_nuxt/xl60AiBq.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"616f-gR98tcg+zuMwRToUVDZ6i6RLHLA\"",
    "mtime": "2026-10-06T14:13:00.179Z",
    "size": 24943,
    "path": "../public/_nuxt/xl60AiBq.js"
  },
  "/_nuxt/yejgYq4B.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"b8-FcJX0dMDK7zDyW4JsKjK80JROOc\"",
    "mtime": "2026-10-06T14:13:00.179Z",
    "size": 184,
    "path": "../public/_nuxt/yejgYq4B.js"
  },
  "/_nuxt/builds/meta/a8edaca5-7afe-4c3f-b4cb-e624b16143e7.json": {
    "type": "application/json",
    "etag": "\"58-JbTPQUJwbuFDmwuCYHz9Jh2/57k\"",
    "mtime": "2026-10-06T14:13:00.132Z",
    "size": 88,
    "path": "../public/_nuxt/builds/meta/a8edaca5-7afe-4c3f-b4cb-e624b16143e7.json"
  }
};

const _DRIVE_LETTER_START_RE = /^[A-Za-z]:\//;
function normalizeWindowsPath(input = "") {
  if (!input) {
    return input;
  }
  return input.replace(/\\/g, "/").replace(_DRIVE_LETTER_START_RE, (r) => r.toUpperCase());
}
const _IS_ABSOLUTE_RE = /^[/\\](?![/\\])|^[/\\]{2}(?!\.)|^[A-Za-z]:[/\\]/;
const _DRIVE_LETTER_RE = /^[A-Za-z]:$/;
function cwd() {
  if (typeof process !== "undefined" && typeof process.cwd === "function") {
    return process.cwd().replace(/\\/g, "/");
  }
  return "/";
}
const resolve = function(...arguments_) {
  arguments_ = arguments_.map((argument) => normalizeWindowsPath(argument));
  let resolvedPath = "";
  let resolvedAbsolute = false;
  for (let index = arguments_.length - 1; index >= -1 && !resolvedAbsolute; index--) {
    const path = index >= 0 ? arguments_[index] : cwd();
    if (!path || path.length === 0) {
      continue;
    }
    resolvedPath = `${path}/${resolvedPath}`;
    resolvedAbsolute = isAbsolute(path);
  }
  resolvedPath = normalizeString(resolvedPath, !resolvedAbsolute);
  if (resolvedAbsolute && !isAbsolute(resolvedPath)) {
    return `/${resolvedPath}`;
  }
  return resolvedPath.length > 0 ? resolvedPath : ".";
};
function normalizeString(path, allowAboveRoot) {
  let res = "";
  let lastSegmentLength = 0;
  let lastSlash = -1;
  let dots = 0;
  let char = null;
  for (let index = 0; index <= path.length; ++index) {
    if (index < path.length) {
      char = path[index];
    } else if (char === "/") {
      break;
    } else {
      char = "/";
    }
    if (char === "/") {
      if (lastSlash === index - 1 || dots === 1) ; else if (dots === 2) {
        if (res.length < 2 || lastSegmentLength !== 2 || res[res.length - 1] !== "." || res[res.length - 2] !== ".") {
          if (res.length > 2) {
            const lastSlashIndex = res.lastIndexOf("/");
            if (lastSlashIndex === -1) {
              res = "";
              lastSegmentLength = 0;
            } else {
              res = res.slice(0, lastSlashIndex);
              lastSegmentLength = res.length - 1 - res.lastIndexOf("/");
            }
            lastSlash = index;
            dots = 0;
            continue;
          } else if (res.length > 0) {
            res = "";
            lastSegmentLength = 0;
            lastSlash = index;
            dots = 0;
            continue;
          }
        }
        if (allowAboveRoot) {
          res += res.length > 0 ? "/.." : "..";
          lastSegmentLength = 2;
        }
      } else {
        if (res.length > 0) {
          res += `/${path.slice(lastSlash + 1, index)}`;
        } else {
          res = path.slice(lastSlash + 1, index);
        }
        lastSegmentLength = index - lastSlash - 1;
      }
      lastSlash = index;
      dots = 0;
    } else if (char === "." && dots !== -1) {
      ++dots;
    } else {
      dots = -1;
    }
  }
  return res;
}
const isAbsolute = function(p) {
  return _IS_ABSOLUTE_RE.test(p);
};
const dirname = function(p) {
  const segments = normalizeWindowsPath(p).replace(/\/$/, "").split("/").slice(0, -1);
  if (segments.length === 1 && _DRIVE_LETTER_RE.test(segments[0])) {
    segments[0] += "/";
  }
  return segments.join("/") || (isAbsolute(p) ? "/" : ".");
};

function readAsset (id) {
  const serverDir = dirname(fileURLToPath(globalThis._importMeta_.url));
  return promises.readFile(resolve(serverDir, assets[id].path))
}

const publicAssetBases = {"/_nuxt/builds/meta/":{"maxAge":31536000},"/_nuxt/builds/":{"maxAge":1},"/_nuxt/":{"maxAge":31536000}};

function isPublicAssetURL(id = '') {
  if (assets[id]) {
    return true
  }
  for (const base in publicAssetBases) {
    if (id.startsWith(base)) { return true }
  }
  return false
}

function getAsset (id) {
  return assets[id]
}

const METHODS = /* @__PURE__ */ new Set(["HEAD", "GET"]);
const EncodingMap = { gzip: ".gz", br: ".br" };
const _a4WIFI = eventHandler((event) => {
  if (event.method && !METHODS.has(event.method)) {
    return;
  }
  let id = decodePath(
    withLeadingSlash(withoutTrailingSlash(parseURL(event.path).pathname))
  );
  let asset;
  const encodingHeader = String(
    getRequestHeader(event, "accept-encoding") || ""
  );
  const encodings = [
    ...encodingHeader.split(",").map((e) => EncodingMap[e.trim()]).filter(Boolean).sort(),
    ""
  ];
  for (const encoding of encodings) {
    for (const _id of [id + encoding, joinURL(id, "index.html" + encoding)]) {
      const _asset = getAsset(_id);
      if (_asset) {
        asset = _asset;
        id = _id;
        break;
      }
    }
  }
  if (!asset) {
    if (isPublicAssetURL(id)) {
      removeResponseHeader(event, "Cache-Control");
      throw createError$1({ statusCode: 404 });
    }
    return;
  }
  if (asset.encoding !== void 0) {
    appendResponseHeader(event, "Vary", "Accept-Encoding");
  }
  const ifNotMatch = getRequestHeader(event, "if-none-match") === asset.etag;
  if (ifNotMatch) {
    setResponseStatus(event, 304, "Not Modified");
    return "";
  }
  const ifModifiedSinceH = getRequestHeader(event, "if-modified-since");
  const mtimeDate = new Date(asset.mtime);
  if (ifModifiedSinceH && asset.mtime && new Date(ifModifiedSinceH) >= mtimeDate) {
    setResponseStatus(event, 304, "Not Modified");
    return "";
  }
  if (asset.type && !getResponseHeader(event, "Content-Type")) {
    setResponseHeader(event, "Content-Type", asset.type);
  }
  if (asset.etag && !getResponseHeader(event, "ETag")) {
    setResponseHeader(event, "ETag", asset.etag);
  }
  if (asset.mtime && !getResponseHeader(event, "Last-Modified")) {
    setResponseHeader(event, "Last-Modified", mtimeDate.toUTCString());
  }
  if (asset.encoding && !getResponseHeader(event, "Content-Encoding")) {
    setResponseHeader(event, "Content-Encoding", asset.encoding);
  }
  if (asset.size > 0 && !getResponseHeader(event, "Content-Length")) {
    setResponseHeader(event, "Content-Length", asset.size);
  }
  return readAsset(id);
});

const options = {"iconifyApiEndpoint":"https://api.iconify.design"};

const collections = {
};

const _ZZEnju = defineCachedEventHandler(async (event) => {
  const collectionName = event.context.params?.collection?.replace(/\.json$/, "");
  const collection = collectionName && Object.hasOwn(collections, collectionName) ? await collections[collectionName]?.() : null;
  const apiEndPoint = options.iconifyApiEndpoint;
  const icons = String(parseQuery(parsePath(event.path).search).icons || "").split(",");
  if (!collectionName) return createError$1({ status: 400, message: "No collection specified" });
  if (!icons.length) return createError$1({ status: 400, message: "No icons specified" });
  if (collection) {
    const data = getIcons(
      collection,
      icons
    );
    consola.debug(`[Icon] serving ${icons.map((i) => "`" + collectionName + ":" + i + "`").join(",")} from bundled collection`);
    return data;
  }
  {
    const apiUrl = new URL(`./${collectionName}.json?icons=${icons.join(",")}`, apiEndPoint);
    consola.debug(`[Icon] fetching ${icons.map((i) => "`" + collectionName + ":" + i + "`").join(",")} from iconify api`);
    if (apiUrl.host !== new URL(apiEndPoint).host) {
      return createError$1({ status: 400, message: "Invalid icon request" });
    }
    try {
      const response = await fetch(apiUrl);
      if (!response.ok) {
        return response.status === 404 ? createError$1({ status: 404 }) : createError$1({ status: 500, message: "Failed to fetch fallback icon" });
      }
      return response.json();
    } catch (e) {
      consola.error(e);
      return createError$1({ status: 500, message: "Failed to fetch fallback icon" });
    }
  }
  return createError$1({ status: 404 });
}, {
  group: "nuxt",
  name: "icon",
  getKey(event) {
    const collection = event.context.params?.collection?.replace(/\.json$/, "") || "unknown";
    const icons = String(parseQuery(parsePath(event.path).search).icons || "").split(",");
    return `${collection}_${icons[0]}_${icons.length}_${hash$1(icons.join(","))}`;
  },
  swr: true,
  maxAge: 60 * 60 * 24 * 7
  // 1 week
});

const _SxA8c9 = defineEventHandler(() => {});

const _lazy_Pz8JOw = () => import('../routes/renderer.mjs').then(function (n) { return n.r; });

const handlers = [
  { route: '', handler: _a4WIFI, lazy: false, middleware: true, method: undefined },
  { route: '/__nuxt_error', handler: _lazy_Pz8JOw, lazy: true, middleware: false, method: undefined },
  { route: '/api/_nuxt_icon/:collection', handler: _ZZEnju, lazy: false, middleware: false, method: undefined },
  { route: '/__nuxt_island/**', handler: _SxA8c9, lazy: false, middleware: false, method: undefined },
  { route: '/**', handler: _lazy_Pz8JOw, lazy: true, middleware: false, method: undefined }
];

function createNitroApp() {
  const config = useRuntimeConfig();
  const hooks = createHooks();
  const captureError = (error, context = {}) => {
    const promise = hooks.callHookParallel("error", error, context).catch((error_) => {
      console.error("Error while capturing another error", error_);
    });
    if (context.event && isEvent(context.event)) {
      const errors = context.event.context.nitro?.errors;
      if (errors) {
        errors.push({ error, context });
      }
      if (context.event.waitUntil) {
        context.event.waitUntil(promise);
      }
    }
  };
  const h3App = createApp({
    debug: destr$1(false),
    onError: (error, event) => {
      captureError(error, { event, tags: ["request"] });
      return errorHandler(error, event);
    },
    onRequest: async (event) => {
      event.context.nitro = event.context.nitro || { errors: [] };
      const fetchContext = event.node.req?.__unenv__;
      if (fetchContext?._platform) {
        event.context = {
          _platform: fetchContext?._platform,
          // #3335
          ...fetchContext._platform,
          ...event.context
        };
      }
      if (!event.context.waitUntil && fetchContext?.waitUntil) {
        event.context.waitUntil = fetchContext.waitUntil;
      }
      event.fetch = (req, init) => fetchWithEvent(event, req, init, { fetch: localFetch });
      event.$fetch = (req, init) => fetchWithEvent(event, req, init, {
        fetch: $fetch
      });
      event.waitUntil = (promise) => {
        if (!event.context.nitro._waitUntilPromises) {
          event.context.nitro._waitUntilPromises = [];
        }
        event.context.nitro._waitUntilPromises.push(promise);
        if (event.context.waitUntil) {
          event.context.waitUntil(promise);
        }
      };
      event.captureError = (error, context) => {
        captureError(error, { event, ...context });
      };
      await nitroApp$1.hooks.callHook("request", event).catch((error) => {
        captureError(error, { event, tags: ["request"] });
      });
    },
    onBeforeResponse: async (event, response) => {
      await nitroApp$1.hooks.callHook("beforeResponse", event, response).catch((error) => {
        captureError(error, { event, tags: ["request", "response"] });
      });
    },
    onAfterResponse: async (event, response) => {
      await nitroApp$1.hooks.callHook("afterResponse", event, response).catch((error) => {
        captureError(error, { event, tags: ["request", "response"] });
      });
    }
  });
  const router = createRouter({
    preemptive: true
  });
  const nodeHandler = toNodeListener(h3App);
  const localCall = (aRequest) => b(
    nodeHandler,
    aRequest
  );
  const localFetch = (input, init) => {
    if (!input.toString().startsWith("/")) {
      return globalThis.fetch(input, init);
    }
    return C(
      nodeHandler,
      input,
      init
    ).then((response) => normalizeFetchResponse(response));
  };
  const $fetch = createFetch({
    fetch: localFetch,
    Headers: Headers$1,
    defaults: { baseURL: config.app.baseURL }
  });
  globalThis.$fetch = $fetch;
  h3App.use(createRouteRulesHandler({ localFetch }));
  for (const h of handlers) {
    let handler = h.lazy ? lazyEventHandler(h.handler) : h.handler;
    if (h.middleware || !h.route) {
      const middlewareBase = (config.app.baseURL + (h.route || "/")).replace(
        /\/+/g,
        "/"
      );
      h3App.use(middlewareBase, handler);
    } else {
      const routeRules = getRouteRulesForPath(
        h.route.replace(/:\w+|\*\*/g, "_")
      );
      if (routeRules.cache) {
        handler = cachedEventHandler(handler, {
          group: "nitro/routes",
          ...routeRules.cache
        });
      }
      router.use(h.route, handler, h.method);
    }
  }
  h3App.use(config.app.baseURL, router.handler);
  const app = {
    hooks,
    h3App,
    router,
    localCall,
    localFetch,
    captureError
  };
  return app;
}
function runNitroPlugins(nitroApp2) {
  for (const plugin of plugins) {
    try {
      plugin(nitroApp2);
    } catch (error) {
      nitroApp2.captureError(error, { tags: ["plugin"] });
      throw error;
    }
  }
}
const nitroApp$1 = createNitroApp();
function useNitroApp() {
  return nitroApp$1;
}
runNitroPlugins(nitroApp$1);

const debug = (...args) => {
};
function GracefulShutdown(server, opts) {
  opts = opts || {};
  const options = Object.assign(
    {
      signals: "SIGINT SIGTERM",
      timeout: 3e4,
      development: false,
      forceExit: true,
      onShutdown: (signal) => Promise.resolve(signal),
      preShutdown: (signal) => Promise.resolve(signal)
    },
    opts
  );
  let isShuttingDown = false;
  const connections = {};
  let connectionCounter = 0;
  const secureConnections = {};
  let secureConnectionCounter = 0;
  let failed = false;
  let finalRun = false;
  function onceFactory() {
    let called = false;
    return (emitter, events, callback) => {
      function call() {
        if (!called) {
          called = true;
          return Reflect.apply(callback, this, arguments);
        }
      }
      for (const e of events) {
        emitter.on(e, call);
      }
    };
  }
  const signals = options.signals.split(" ").map((s) => s.trim()).filter((s) => s.length > 0);
  const once = onceFactory();
  once(process, signals, (signal) => {
    debug("received shut down signal", signal);
    shutdown(signal).then(() => {
      if (options.forceExit) {
        process.exit(failed ? 1 : 0);
      }
    }).catch((error) => {
      debug("server shut down error occurred", error);
      process.exit(1);
    });
  });
  function isFunction(functionToCheck) {
    const getType = Object.prototype.toString.call(functionToCheck);
    return /^\[object\s([A-Za-z]+)?Function]$/.test(getType);
  }
  function destroy(socket, force = false) {
    if (socket._isIdle && isShuttingDown || force) {
      socket.destroy();
      if (socket.server instanceof http.Server) {
        delete connections[socket._connectionId];
      } else {
        delete secureConnections[socket._connectionId];
      }
    }
  }
  function destroyAllConnections(force = false) {
    debug("Destroy Connections : " + (force ? "forced close" : "close"));
    let counter = 0;
    let secureCounter = 0;
    for (const key of Object.keys(connections)) {
      const socket = connections[key];
      const serverResponse = socket._httpMessage;
      if (serverResponse && !force) {
        if (!serverResponse.headersSent) {
          serverResponse.setHeader("connection", "close");
        }
      } else {
        counter++;
        destroy(socket);
      }
    }
    debug("Connections destroyed : " + counter);
    debug("Connection Counter    : " + connectionCounter);
    for (const key of Object.keys(secureConnections)) {
      const socket = secureConnections[key];
      const serverResponse = socket._httpMessage;
      if (serverResponse && !force) {
        if (!serverResponse.headersSent) {
          serverResponse.setHeader("connection", "close");
        }
      } else {
        secureCounter++;
        destroy(socket);
      }
    }
    debug("Secure Connections destroyed : " + secureCounter);
    debug("Secure Connection Counter    : " + secureConnectionCounter);
  }
  server.on("request", (req, res) => {
    req.socket._isIdle = false;
    if (isShuttingDown && !res.headersSent) {
      res.setHeader("connection", "close");
    }
    res.on("finish", () => {
      req.socket._isIdle = true;
      destroy(req.socket);
    });
  });
  server.on("connection", (socket) => {
    if (isShuttingDown) {
      socket.destroy();
    } else {
      const id = connectionCounter++;
      socket._isIdle = true;
      socket._connectionId = id;
      connections[id] = socket;
      socket.once("close", () => {
        delete connections[socket._connectionId];
      });
    }
  });
  server.on("secureConnection", (socket) => {
    if (isShuttingDown) {
      socket.destroy();
    } else {
      const id = secureConnectionCounter++;
      socket._isIdle = true;
      socket._connectionId = id;
      secureConnections[id] = socket;
      socket.once("close", () => {
        delete secureConnections[socket._connectionId];
      });
    }
  });
  process.on("close", () => {
    debug("closed");
  });
  function shutdown(sig) {
    function cleanupHttp() {
      destroyAllConnections();
      debug("Close http server");
      return new Promise((resolve, reject) => {
        server.close((err) => {
          if (err) {
            return reject(err);
          }
          return resolve(true);
        });
      });
    }
    debug("shutdown signal - " + sig);
    if (options.development) {
      debug("DEV-Mode - immediate forceful shutdown");
      return process.exit(0);
    }
    function finalHandler() {
      if (!finalRun) {
        finalRun = true;
        if (options.finally && isFunction(options.finally)) {
          debug("executing finally()");
          options.finally();
        }
      }
      return Promise.resolve();
    }
    function waitForReadyToShutDown(totalNumInterval) {
      debug(`waitForReadyToShutDown... ${totalNumInterval}`);
      if (totalNumInterval === 0) {
        debug(
          `Could not close connections in time (${options.timeout}ms), will forcefully shut down`
        );
        return Promise.resolve(true);
      }
      const allConnectionsClosed = Object.keys(connections).length === 0 && Object.keys(secureConnections).length === 0;
      if (allConnectionsClosed) {
        debug("All connections closed. Continue to shutting down");
        return Promise.resolve(false);
      }
      debug("Schedule the next waitForReadyToShutdown");
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(waitForReadyToShutDown(totalNumInterval - 1));
        }, 250);
      });
    }
    if (isShuttingDown) {
      return Promise.resolve();
    }
    debug("shutting down");
    return options.preShutdown(sig).then(() => {
      isShuttingDown = true;
      cleanupHttp();
    }).then(() => {
      const pollIterations = options.timeout ? Math.round(options.timeout / 250) : 0;
      return waitForReadyToShutDown(pollIterations);
    }).then((force) => {
      debug("Do onShutdown now");
      if (force) {
        destroyAllConnections(force);
      }
      return options.onShutdown(sig);
    }).then(finalHandler).catch((error) => {
      const errString = typeof error === "string" ? error : JSON.stringify(error);
      debug(errString);
      failed = true;
      throw errString;
    });
  }
  function shutdownManual() {
    return shutdown("manual");
  }
  return shutdownManual;
}

function getGracefulShutdownConfig() {
  return {
    disabled: !!process.env.NITRO_SHUTDOWN_DISABLED,
    signals: (process.env.NITRO_SHUTDOWN_SIGNALS || "SIGTERM SIGINT").split(" ").map((s) => s.trim()),
    timeout: Number.parseInt(process.env.NITRO_SHUTDOWN_TIMEOUT || "", 10) || 3e4,
    forceExit: !process.env.NITRO_SHUTDOWN_NO_FORCE_EXIT
  };
}
function setupGracefulShutdown(listener, nitroApp) {
  const shutdownConfig = getGracefulShutdownConfig();
  if (shutdownConfig.disabled) {
    return;
  }
  GracefulShutdown(listener, {
    signals: shutdownConfig.signals.join(" "),
    timeout: shutdownConfig.timeout,
    forceExit: shutdownConfig.forceExit,
    onShutdown: async () => {
      await new Promise((resolve) => {
        const timeout = setTimeout(() => {
          console.warn("Graceful shutdown timeout, force exiting...");
          resolve();
        }, shutdownConfig.timeout);
        nitroApp.hooks.callHook("close").catch((error) => {
          console.error(error);
        }).finally(() => {
          clearTimeout(timeout);
          resolve();
        });
      });
    }
  });
}

const cert = process.env.NITRO_SSL_CERT;
const key = process.env.NITRO_SSL_KEY;
const nitroApp = useNitroApp();
const server = cert && key ? new Server({ key, cert }, toNodeListener(nitroApp.h3App)) : new Server$1(toNodeListener(nitroApp.h3App));
const port = destr$1(process.env.NITRO_PORT || process.env.PORT) || 3e3;
const host = process.env.NITRO_HOST || process.env.HOST;
const path = process.env.NITRO_UNIX_SOCKET;
const listener = server.listen(path ? { path } : { port, host }, (err) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  const protocol = cert && key ? "https" : "http";
  const addressInfo = listener.address();
  if (typeof addressInfo === "string") {
    console.log(`Listening on unix socket ${addressInfo}`);
    return;
  }
  const baseURL = (useRuntimeConfig().app.baseURL || "").replace(/\/$/, "");
  const url = `${protocol}://${addressInfo.family === "IPv6" ? `[${addressInfo.address}]` : addressInfo.address}:${addressInfo.port}${baseURL}`;
  console.log(`Listening on ${url}`);
});
trapUnhandledNodeErrors();
setupGracefulShutdown(listener, nitroApp);
const nodeServer = {};

export { withoutTrailingSlash as A, sanitizeStatusCode as B, baseURL as C, klona as D, defuFn as E, hash$1 as F, nodeServer as G, destr$1 as a, buildAssetsURL as b, createError$1 as c, defineRenderHandler as d, encodePath as e, getRouteRules as f, getQuery as g, getResponseStatusText as h, getResponseStatus as i, joinURL as j, useNitroApp as k, destr as l, i as m, l as n, defu$1 as o, publicAssetsURL as p, defu as q, hasProtocol as r, s, parseQuery as t, useRuntimeConfig as u, parseURL as v, decodePath as w, isScriptProtocol as x, withQuery as y, withTrailingSlash as z };
//# sourceMappingURL=nitro.mjs.map
