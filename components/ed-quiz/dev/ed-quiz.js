// src/lib/build.js
var J1 = Object.create;
var bn = Object.defineProperty;
var _1 = Object.getOwnPropertyDescriptor;
var eo = Object.getOwnPropertyNames;
var to = Object.getPrototypeOf;
var ro = Object.prototype.hasOwnProperty;
var J = (n, c) => () => (n && (c = n(n = 0)), c);
var Ta = (n, c) => () => (c || n((c = { exports: {} }).exports, c), c.exports);
var no = (n, c) => {
  for (var h in c)
    bn(n, h, { get: c[h], enumerable: true });
};
var io = (n, c, h, o) => {
  if (c && typeof c == "object" || typeof c == "function")
    for (let g of eo(c))
      !ro.call(n, g) && g !== h && bn(n, g, { get: () => c[g], enumerable: !(o = _1(c, g)) || o.enumerable });
  return n;
};
var ao = (n, c, h) => (h = n != null ? J1(to(n)) : {}, io(c || !n || !n.__esModule ? bn(h, "default", { value: n, enumerable: true }) : h, n));
function yn(n) {
  let c = "&" + n + ";";
  Ea.innerHTML = c;
  let h = Ea.textContent;
  return h.charCodeAt(h.length - 1) === 59 && n !== "semi" || h === c ? false : h;
}
var Ea;
var Da = J(() => {
  Ea = document.createElement("i");
});
var Fa = J(() => {
  Da();
});
function We(n, c, h, o) {
  let g = n.length, v = 0, d;
  if (c < 0 ? c = -c > g ? 0 : g + c : c = c > g ? g : c, h = h > 0 ? h : 0, o.length < 1e4)
    d = Array.from(o), d.unshift(c, h), n.splice(...d);
  else
    for (h && n.splice(c, h); v < o.length; )
      d = o.slice(v, v + 1e4), d.unshift(c, 0), n.splice(...d), v += 1e4, c += 1e4;
}
function je(n, c) {
  return n.length > 0 ? (We(n, n.length, 0, c), n) : c;
}
var z0 = J(() => {
});
function sr(n) {
  let c = {}, h = -1;
  for (; ++h < n.length; )
    lo(c, n[h]);
  return c;
}
function lo(n, c) {
  let h;
  for (h in c) {
    let g = (wn.call(n, h) ? n[h] : void 0) || (n[h] = {}), v = c[h], d;
    if (v)
      for (d in v) {
        wn.call(g, d) || (g[d] = []);
        let w = v[d];
        uo(g[d], Array.isArray(w) ? w : w ? [w] : []);
      }
  }
}
function uo(n, c) {
  let h = -1, o = [];
  for (; ++h < c.length; )
    (c[h].add === "after" ? n : o).push(c[h]);
  We(n, 0, 0, o);
}
function hr(n) {
  let c = {}, h = -1;
  for (; ++h < n.length; )
    oo(c, n[h]);
  return c;
}
function oo(n, c) {
  let h;
  for (h in c) {
    let g = (wn.call(n, h) ? n[h] : void 0) || (n[h] = {}), v = c[h], d;
    if (v)
      for (d in v)
        g[d] = v[d];
  }
}
var wn;
var mr = J(() => {
  z0();
  wn = {}.hasOwnProperty;
});
function Na(n, c) {
  let h = Number.parseInt(n, c);
  return h < 9 || h === 11 || h > 13 && h < 32 || h > 126 && h < 160 || h > 55295 && h < 57344 || h > 64975 && h < 65008 || (h & 65535) === 65535 || (h & 65535) === 65534 || h > 1114111 ? "\uFFFD" : String.fromCharCode(h);
}
var Ia = J(() => {
});
function cr(n) {
  return n.replace(/["&<>]/g, c);
  function c(h) {
    return "&" + so[h] + ";";
  }
}
var so;
var kn = J(() => {
  so = { '"': "quot", "&": "amp", "<": "lt", ">": "gt" };
});
function W0(n) {
  return n.replace(/[\t\n\r ]+/g, " ").replace(/^ | $/g, "").toLowerCase().toUpperCase();
}
var pr = J(() => {
});
var La;
var qa = J(() => {
  La = /[!-\/:-@\[-`\{-~\xA1\xA7\xAB\xB6\xB7\xBB\xBF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061D-\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u09FD\u0A76\u0AF0\u0C77\u0C84\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1B7D\u1B7E\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E4F\u2E52-\u2E5D\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]/;
});
function rt(n) {
  return n !== null && (n < 32 || n === 127);
}
function Z(n) {
  return n !== null && n < -2;
}
function ze(n) {
  return n !== null && (n < 0 || n === 32);
}
function se(n) {
  return n === -2 || n === -1 || n === 32;
}
function Y0(n) {
  return c;
  function c(h) {
    return h !== null && n.test(String.fromCharCode(h));
  }
}
var Xe;
var Oe;
var Oa;
var Et;
var Ra;
var Ha;
var Dt;
var j0;
var ye = J(() => {
  qa();
  Xe = Y0(/[A-Za-z]/), Oe = Y0(/[\dA-Za-z]/), Oa = Y0(/[#-'*+\--9=?A-Z^-~]/);
  Et = Y0(/\d/), Ra = Y0(/[\dA-Fa-f]/), Ha = Y0(/[!-/:-@[-`{-~]/);
  Dt = Y0(La), j0 = Y0(/\s/);
});
function nt(n, c) {
  let h = cr(ho(n || ""));
  if (!c)
    return h;
  let o = h.indexOf(":"), g = h.indexOf("?"), v = h.indexOf("#"), d = h.indexOf("/");
  return o < 0 || d > -1 && o > d || g > -1 && o > g || v > -1 && o > v || c.test(h.slice(0, o)) ? h : "";
}
function ho(n) {
  let c = [], h = -1, o = 0, g = 0;
  for (; ++h < n.length; ) {
    let v = n.charCodeAt(h), d = "";
    if (v === 37 && Oe(n.charCodeAt(h + 1)) && Oe(n.charCodeAt(h + 2)))
      g = 2;
    else if (v < 128)
      /[!#$&-;=?-Z_a-z~]/.test(String.fromCharCode(v)) || (d = String.fromCharCode(v));
    else if (v > 55295 && v < 57344) {
      let w = n.charCodeAt(h + 1);
      v < 56320 && w > 56319 && w < 57344 ? (d = String.fromCharCode(v, w), g = 1) : d = "\uFFFD";
    } else
      d = String.fromCharCode(v);
    d && (c.push(n.slice(o, h), encodeURIComponent(d)), o = h + g + 1, d = ""), g && (h += g, g = 0);
  }
  return c.join("") + n.slice(o);
}
var Sn = J(() => {
  ye();
  kn();
});
function Va(n = {}) {
  let c = true, h = {}, o = [[]], g = [], v = [], w = hr([{ enter: { blockQuote: ue, codeFenced: _, codeFencedFenceInfo: H, codeFencedFenceMeta: H, codeIndented: B, codeText: Ut, content: bt, definition: M0, definitionDestinationString: p0, definitionLabelString: H, definitionTitleString: H, emphasis: Gt, htmlFlow: Fe, htmlText: v0, image: Qe, label: H, link: E, listItemMarker: be, listItemValue: Be, listOrdered: V, listUnordered: he, paragraph: xe, reference: H, resource: ot, resourceDestinationString: Ye, resourceTitleString: H, setextHeading: Mr, strong: Vt }, exit: { atxHeading: Rt, atxHeadingSequence: yt, autolinkEmail: At, autolinkProtocol: E0, blockQuote: ve, characterEscapeValue: Q0, characterReferenceMarkerHexadecimal: t0, characterReferenceMarkerNumeric: t0, characterReferenceValue: y0, codeFenced: Ze, codeFencedFence: c0, codeFencedFenceInfo: _e, codeFencedFenceMeta: j, codeFlowValue: Er, codeIndented: Ze, codeText: K0, codeTextData: Q0, data: Q0, definition: Cr, definitionDestinationString: st, definitionLabelString: T0, definitionTitleString: Ot, emphasis: St, hardBreakEscape: kt, hardBreakTrailing: kt, htmlFlow: X, htmlFlowData: Q0, htmlText: X, htmlTextData: Q0, image: C0, label: R0, labelText: e0, lineEnding: wt, link: C0, listOrdered: q, listUnordered: Pe, paragraph: qe, reference: j, referenceString: xt, resource: j, resourceDestinationString: Z0, resourceTitleString: g0, setextHeading: Pt, setextHeadingLineSequence: Ht, setextHeadingText: Tr, strong: Dr, thematicBreak: Fr } }].concat(n.htmlExtensions || [])), D = { tightStack: v }, M = { lineEndingIfNeeded: ce, options: n, encode: de, raw: fe, tag: O, buffer: H, resume: j, setData: S, getData: Y }, N = n.defaultLineEnding;
  return T;
  function T($) {
    let ie = -1, Ke = 0, l0 = [], r0 = [], ke = [];
    for (; ++ie < $.length; )
      !N && ($[ie][1].type === "lineEnding" || $[ie][1].type === "lineEndingBlank") && (N = $[ie][2].sliceSerialize($[ie][1])), ($[ie][1].type === "listOrdered" || $[ie][1].type === "listUnordered") && ($[ie][0] === "enter" ? l0.push(ie) : C($.slice(l0.pop(), ie))), $[ie][1].type === "definition" && ($[ie][0] === "enter" ? (ke = je(ke, $.slice(Ke, ie)), Ke = ie) : (r0 = je(r0, $.slice(Ke, ie + 1)), Ke = ie + 1));
    r0 = je(r0, ke), r0 = je(r0, $.slice(Ke)), ie = -1;
    let l = r0;
    for (w.enter.null && w.enter.null.call(M); ++ie < $.length; ) {
      let m = w[l[ie][0]];
      Pa.call(m, l[ie][1].type) && m[l[ie][1].type].call(Object.assign({ sliceSerialize: l[ie][2].sliceSerialize }, M), l[ie][1]);
    }
    return w.exit.null && w.exit.null.call(M), o[0].join("");
  }
  function C($) {
    let ie = $.length, Ke = 0, l0 = 0, r0 = false, ke;
    for (; ++Ke < ie; ) {
      let l = $[Ke];
      if (l[1]._container)
        ke = void 0, l[0] === "enter" ? l0++ : l0--;
      else
        switch (l[1].type) {
          case "listItemPrefix": {
            l[0] === "exit" && (ke = true);
            break;
          }
          case "linePrefix":
            break;
          case "lineEndingBlank": {
            l[0] === "enter" && !l0 && (ke ? ke = void 0 : r0 = true);
            break;
          }
          default:
            ke = void 0;
        }
    }
    $[0][1]._loose = r0;
  }
  function S($, ie) {
    D[$] = ie;
  }
  function Y($) {
    return D[$];
  }
  function H() {
    o.push([]);
  }
  function j() {
    return o.pop().join("");
  }
  function O($) {
    c && (S("lastWasTag", true), o[o.length - 1].push($));
  }
  function fe($) {
    S("lastWasTag"), o[o.length - 1].push($);
  }
  function re() {
    fe(N || `
`);
  }
  function ce() {
    let $ = o[o.length - 1], ie = $[$.length - 1], Ke = ie ? ie.charCodeAt(ie.length - 1) : null;
    Ke === 10 || Ke === 13 || Ke === null || re();
  }
  function de($) {
    return Y("ignoreEncode") ? $ : cr($);
  }
  function V($) {
    v.push(!$._loose), ce(), O("<ol"), S("expectFirstItem", true);
  }
  function he($) {
    v.push(!$._loose), ce(), O("<ul"), S("expectFirstItem", true);
  }
  function Be($) {
    if (Y("expectFirstItem")) {
      let ie = Number.parseInt(this.sliceSerialize($), 10);
      ie !== 1 && O(' start="' + de(String(ie)) + '"');
    }
  }
  function be() {
    Y("expectFirstItem") ? O(">") : we(), ce(), O("<li>"), S("expectFirstItem"), S("lastWasTag");
  }
  function q() {
    we(), v.pop(), re(), O("</ol>");
  }
  function Pe() {
    we(), v.pop(), re(), O("</ul>");
  }
  function we() {
    Y("lastWasTag") && !Y("slurpAllLineEndings") && ce(), O("</li>"), S("slurpAllLineEndings");
  }
  function ue() {
    v.push(false), ce(), O("<blockquote>");
  }
  function ve() {
    v.pop(), ce(), O("</blockquote>"), S("slurpAllLineEndings");
  }
  function xe() {
    v[v.length - 1] || (ce(), O("<p>")), S("slurpAllLineEndings");
  }
  function qe() {
    v[v.length - 1] ? S("slurpAllLineEndings", true) : O("</p>");
  }
  function _() {
    ce(), O("<pre><code"), S("fencesCount", 0);
  }
  function _e() {
    let $ = j();
    O(' class="language-' + $ + '"');
  }
  function c0() {
    let $ = Y("fencesCount") || 0;
    $ || (O(">"), S("slurpOneLineEnding", true)), S("fencesCount", $ + 1);
  }
  function B() {
    ce(), O("<pre><code>");
  }
  function Ze() {
    let $ = Y("fencesCount");
    $ !== void 0 && $ < 2 && D.tightStack.length > 0 && !Y("lastWasTag") && re(), Y("flowCodeSeenData") && ce(), O("</code></pre>"), $ !== void 0 && $ < 2 && ce(), S("flowCodeSeenData"), S("fencesCount"), S("slurpOneLineEnding");
  }
  function Qe() {
    g.push({ image: true }), c = void 0;
  }
  function E() {
    g.push({});
  }
  function e0($) {
    g[g.length - 1].labelId = this.sliceSerialize($);
  }
  function R0() {
    g[g.length - 1].label = j();
  }
  function xt($) {
    g[g.length - 1].referenceId = this.sliceSerialize($);
  }
  function ot() {
    H(), g[g.length - 1].destination = "";
  }
  function Ye() {
    H(), S("ignoreEncode", true);
  }
  function Z0() {
    g[g.length - 1].destination = j(), S("ignoreEncode");
  }
  function g0() {
    g[g.length - 1].title = j();
  }
  function C0() {
    let $ = g.length - 1, ie = g[$], Ke = ie.referenceId || ie.labelId, l0 = ie.destination === void 0 ? h[W0(Ke)] : ie;
    for (c = true; $--; )
      if (g[$].image) {
        c = void 0;
        break;
      }
    ie.image ? (O('<img src="' + nt(l0.destination, n.allowDangerousProtocol ? void 0 : mo) + '" alt="'), fe(ie.label), O('"')) : O('<a href="' + nt(l0.destination, n.allowDangerousProtocol ? void 0 : Ga) + '"'), O(l0.title ? ' title="' + l0.title + '"' : ""), ie.image ? O(" />") : (O(">"), fe(ie.label), O("</a>")), g.pop();
  }
  function M0() {
    H(), g.push({});
  }
  function T0($) {
    j(), g[g.length - 1].labelId = this.sliceSerialize($);
  }
  function p0() {
    H(), S("ignoreEncode", true);
  }
  function st() {
    g[g.length - 1].destination = j(), S("ignoreEncode");
  }
  function Ot() {
    g[g.length - 1].title = j();
  }
  function Cr() {
    let $ = g[g.length - 1], ie = W0($.labelId);
    j(), Pa.call(h, ie) || (h[ie] = g[g.length - 1]), g.pop();
  }
  function bt() {
    S("slurpAllLineEndings", true);
  }
  function yt($) {
    Y("headingRank") || (S("headingRank", this.sliceSerialize($).length), ce(), O("<h" + Y("headingRank") + ">"));
  }
  function Mr() {
    H(), S("slurpAllLineEndings");
  }
  function Tr() {
    S("slurpAllLineEndings", true);
  }
  function Rt() {
    O("</h" + Y("headingRank") + ">"), S("headingRank");
  }
  function Ht($) {
    S("headingRank", this.sliceSerialize($).charCodeAt(0) === 61 ? 1 : 2);
  }
  function Pt() {
    let $ = j();
    ce(), O("<h" + Y("headingRank") + ">"), fe($), O("</h" + Y("headingRank") + ">"), S("slurpAllLineEndings"), S("headingRank");
  }
  function Q0($) {
    fe(de(this.sliceSerialize($)));
  }
  function wt($) {
    if (!Y("slurpAllLineEndings")) {
      if (Y("slurpOneLineEnding")) {
        S("slurpOneLineEnding");
        return;
      }
      if (Y("inCodeText")) {
        fe(" ");
        return;
      }
      fe(de(this.sliceSerialize($)));
    }
  }
  function Er($) {
    fe(de(this.sliceSerialize($))), S("flowCodeSeenData", true);
  }
  function kt() {
    O("<br />");
  }
  function Fe() {
    ce(), v0();
  }
  function X() {
    S("ignoreEncode");
  }
  function v0() {
    n.allowDangerousHtml && S("ignoreEncode", true);
  }
  function Gt() {
    O("<em>");
  }
  function Vt() {
    O("<strong>");
  }
  function Ut() {
    S("inCodeText", true), O("<code>");
  }
  function K0() {
    S("inCodeText"), O("</code>");
  }
  function St() {
    O("</em>");
  }
  function Dr() {
    O("</strong>");
  }
  function Fr() {
    ce(), O("<hr />");
  }
  function t0($) {
    S("characterReferenceType", $.type);
  }
  function y0($) {
    let ie = this.sliceSerialize($);
    ie = Y("characterReferenceType") ? Na(ie, Y("characterReferenceType") === "characterReferenceMarkerNumeric" ? 10 : 16) : yn(ie), fe(de(ie)), S("characterReferenceType");
  }
  function E0($) {
    let ie = this.sliceSerialize($);
    O('<a href="' + nt(ie, n.allowDangerousProtocol ? void 0 : Ga) + '">'), fe(de(ie)), O("</a>");
  }
  function At($) {
    let ie = this.sliceSerialize($);
    O('<a href="' + nt("mailto:" + ie) + '">'), fe(de(ie)), O("</a>");
  }
}
var Pa;
var Ga;
var mo;
var Ua = J(() => {
  Fa();
  mr();
  z0();
  Ia();
  kn();
  pr();
  Sn();
  Pa = {}.hasOwnProperty, Ga = /^(https?|ircs?|mailto|xmpp)$/i, mo = /^https?$/i;
});
function le(n, c, h, o) {
  let g = o ? o - 1 : Number.POSITIVE_INFINITY, v = 0;
  return d;
  function d(D) {
    return se(D) ? (n.enter(h), w(D)) : c(D);
  }
  function w(D) {
    return se(D) && v++ < g ? (n.consume(D), w) : (n.exit(h), c(D));
  }
}
var He = J(() => {
  ye();
});
function co(n) {
  let c = n.attempt(this.parser.constructs.contentInitial, o, g), h;
  return c;
  function o(w) {
    if (w === null) {
      n.consume(w);
      return;
    }
    return n.enter("lineEnding"), n.consume(w), n.exit("lineEnding"), le(n, c, "linePrefix");
  }
  function g(w) {
    return n.enter("paragraph"), v(w);
  }
  function v(w) {
    let D = n.enter("chunkText", { contentType: "text", previous: h });
    return h && (h.next = D), h = D, d(w);
  }
  function d(w) {
    if (w === null) {
      n.exit("chunkText"), n.exit("paragraph"), n.consume(w);
      return;
    }
    return Z(w) ? (n.consume(w), n.exit("chunkText"), v) : (n.consume(w), d);
  }
}
var Wa;
var ja = J(() => {
  He();
  ye();
  Wa = { tokenize: co };
});
function po(n) {
  let c = this, h = [], o = 0, g, v, d;
  return w;
  function w(re) {
    if (o < h.length) {
      let ce = h[o];
      return c.containerState = ce[1], n.attempt(ce[0].continuation, D, M)(re);
    }
    return M(re);
  }
  function D(re) {
    return c.containerState._closeFlow && fe(), o++, w(re);
  }
  function M(re) {
    if (o === h.length) {
      if (!g)
        return C(re);
      if (g.currentConstruct && g.currentConstruct.concrete)
        return Y(re);
      c.interrupt = true;
    }
    return c.containerState = {}, n.check(Ya, N, T)(re);
  }
  function N(re) {
    return g && fe(), O(o), C(re);
  }
  function T(re) {
    return c.parser.lazy[c.now().line] = o !== h.length, d = c.now().offset, Y(re);
  }
  function C(re) {
    return c.containerState = {}, n.attempt(Ya, S, Y)(re);
  }
  function S(re) {
    return o++, h.push([c.currentConstruct, c.containerState]), C(re);
  }
  function Y(re) {
    if (re === null) {
      g && fe(), O(0), n.consume(re);
      return;
    }
    return g = g || c.parser.flow(c.now()), n.enter("chunkFlow", { contentType: "flow", previous: v, _tokenizer: g }), H(re);
  }
  function H(re) {
    if (re === null) {
      j(n.exit("chunkFlow"), true), O(0), n.consume(re);
      return;
    }
    return Z(re) ? (n.consume(re), j(n.exit("chunkFlow")), o = 0, c.interrupt = void 0, w) : (n.consume(re), H);
  }
  function j(re, ce) {
    let de = c.sliceStream(re);
    if (ce && de.push(null), re.previous = v, v && (v.next = re), v = re, g.defineSkip(re.start), g.write(de), c.parser.lazy[re.start.line]) {
      let V = g.events.length;
      for (; V--; )
        if (g.events[V][1].start.offset < d && (!g.events[V][1].end || g.events[V][1].end.offset > d))
          return;
      let he = c.events.length, Be = he, be, q;
      for (; Be--; )
        if (c.events[Be][0] === "exit" && c.events[Be][1].type === "chunkFlow") {
          if (be) {
            q = c.events[Be][1].end;
            break;
          }
          be = true;
        }
      for (O(o), V = he; V < c.events.length; )
        c.events[V][1].end = Object.assign({}, q), V++;
      We(c.events, Be + 1, 0, c.events.slice(he)), c.events.length = V;
    }
  }
  function O(re) {
    let ce = h.length;
    for (; ce-- > re; ) {
      let de = h[ce];
      c.containerState = de[1], de[0].exit.call(c, n);
    }
    h.length = re;
  }
  function fe() {
    g.write([null]), v = void 0, g = void 0, c.containerState._closeFlow = void 0;
  }
}
function fo(n, c, h) {
  return le(n, n.attempt(this.parser.constructs.document, c, h), "linePrefix", this.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4);
}
var Xa;
var Ya;
var $a = J(() => {
  He();
  ye();
  z0();
  Xa = { tokenize: po }, Ya = { tokenize: fo };
});
function gt(n) {
  if (n === null || ze(n) || j0(n))
    return 1;
  if (Dt(n))
    return 2;
}
var An = J(() => {
  ye();
});
function X0(n, c, h) {
  let o = [], g = -1;
  for (; ++g < n.length; ) {
    let v = n[g].resolveAll;
    v && !o.includes(v) && (c = v(c, h), o.push(v));
  }
  return c;
}
var Ft = J(() => {
});
function go(n, c) {
  let h = -1, o, g, v, d, w, D, M, N;
  for (; ++h < n.length; )
    if (n[h][0] === "enter" && n[h][1].type === "attentionSequence" && n[h][1]._close) {
      for (o = h; o--; )
        if (n[o][0] === "exit" && n[o][1].type === "attentionSequence" && n[o][1]._open && c.sliceSerialize(n[o][1]).charCodeAt(0) === c.sliceSerialize(n[h][1]).charCodeAt(0)) {
          if ((n[o][1]._close || n[h][1]._open) && (n[h][1].end.offset - n[h][1].start.offset) % 3 && !((n[o][1].end.offset - n[o][1].start.offset + n[h][1].end.offset - n[h][1].start.offset) % 3))
            continue;
          D = n[o][1].end.offset - n[o][1].start.offset > 1 && n[h][1].end.offset - n[h][1].start.offset > 1 ? 2 : 1;
          let T = Object.assign({}, n[o][1].end), C = Object.assign({}, n[h][1].start);
          Za(T, -D), Za(C, D), d = { type: D > 1 ? "strongSequence" : "emphasisSequence", start: T, end: Object.assign({}, n[o][1].end) }, w = { type: D > 1 ? "strongSequence" : "emphasisSequence", start: Object.assign({}, n[h][1].start), end: C }, v = { type: D > 1 ? "strongText" : "emphasisText", start: Object.assign({}, n[o][1].end), end: Object.assign({}, n[h][1].start) }, g = { type: D > 1 ? "strong" : "emphasis", start: Object.assign({}, d.start), end: Object.assign({}, w.end) }, n[o][1].end = Object.assign({}, d.start), n[h][1].start = Object.assign({}, w.end), M = [], n[o][1].end.offset - n[o][1].start.offset && (M = je(M, [["enter", n[o][1], c], ["exit", n[o][1], c]])), M = je(M, [["enter", g, c], ["enter", d, c], ["exit", d, c], ["enter", v, c]]), M = je(M, X0(c.parser.constructs.insideSpan.null, n.slice(o + 1, h), c)), M = je(M, [["exit", v, c], ["enter", w, c], ["exit", w, c], ["exit", g, c]]), n[h][1].end.offset - n[h][1].start.offset ? (N = 2, M = je(M, [["enter", n[h][1], c], ["exit", n[h][1], c]])) : N = 0, We(n, o - 1, h - o + 3, M), h = o + M.length - N - 2;
          break;
        }
    }
  for (h = -1; ++h < n.length; )
    n[h][1].type === "attentionSequence" && (n[h][1].type = "data");
  return n;
}
function vo(n, c) {
  let h = this.parser.constructs.attentionMarkers.null, o = this.previous, g = gt(o), v;
  return d;
  function d(D) {
    return v = D, n.enter("attentionSequence"), w(D);
  }
  function w(D) {
    if (D === v)
      return n.consume(D), w;
    let M = n.exit("attentionSequence"), N = gt(D), T = !N || N === 2 && g || h.includes(D), C = !g || g === 2 && N || h.includes(o);
    return M._open = !!(v === 42 ? T : T && (g || !C)), M._close = !!(v === 42 ? C : C && (N || !T)), c(D);
  }
}
function Za(n, c) {
  n.column += c, n.offset += c, n._bufferIndex += c;
}
var Nt;
var Qa = J(() => {
  z0();
  An();
  Ft();
  Nt = { name: "attention", tokenize: vo, resolveAll: go };
});
function xo(n, c, h) {
  let o = 0;
  return g;
  function g(S) {
    return n.enter("autolink"), n.enter("autolinkMarker"), n.consume(S), n.exit("autolinkMarker"), n.enter("autolinkProtocol"), v;
  }
  function v(S) {
    return Xe(S) ? (n.consume(S), d) : M(S);
  }
  function d(S) {
    return S === 43 || S === 45 || S === 46 || Oe(S) ? (o = 1, w(S)) : M(S);
  }
  function w(S) {
    return S === 58 ? (n.consume(S), o = 0, D) : (S === 43 || S === 45 || S === 46 || Oe(S)) && o++ < 32 ? (n.consume(S), w) : (o = 0, M(S));
  }
  function D(S) {
    return S === 62 ? (n.exit("autolinkProtocol"), n.enter("autolinkMarker"), n.consume(S), n.exit("autolinkMarker"), n.exit("autolink"), c) : S === null || S === 32 || S === 60 || rt(S) ? h(S) : (n.consume(S), D);
  }
  function M(S) {
    return S === 64 ? (n.consume(S), N) : Oa(S) ? (n.consume(S), M) : h(S);
  }
  function N(S) {
    return Oe(S) ? T(S) : h(S);
  }
  function T(S) {
    return S === 46 ? (n.consume(S), o = 0, N) : S === 62 ? (n.exit("autolinkProtocol").type = "autolinkEmail", n.enter("autolinkMarker"), n.consume(S), n.exit("autolinkMarker"), n.exit("autolink"), c) : C(S);
  }
  function C(S) {
    if ((S === 45 || Oe(S)) && o++ < 63) {
      let Y = S === 45 ? C : T;
      return n.consume(S), Y;
    }
    return h(S);
  }
}
var zn;
var Ka = J(() => {
  ye();
  zn = { name: "autolink", tokenize: xo };
});
function bo(n, c, h) {
  return o;
  function o(v) {
    return se(v) ? le(n, g, "linePrefix")(v) : g(v);
  }
  function g(v) {
    return v === null || Z(v) ? c(v) : h(v);
  }
}
var $0;
var fr = J(() => {
  He();
  ye();
  $0 = { tokenize: bo, partial: true };
});
function yo(n, c, h) {
  let o = this;
  return g;
  function g(d) {
    if (d === 62) {
      let w = o.containerState;
      return w.open || (n.enter("blockQuote", { _container: true }), w.open = true), n.enter("blockQuotePrefix"), n.enter("blockQuoteMarker"), n.consume(d), n.exit("blockQuoteMarker"), v;
    }
    return h(d);
  }
  function v(d) {
    return se(d) ? (n.enter("blockQuotePrefixWhitespace"), n.consume(d), n.exit("blockQuotePrefixWhitespace"), n.exit("blockQuotePrefix"), c) : (n.exit("blockQuotePrefix"), c(d));
  }
}
function wo(n, c, h) {
  let o = this;
  return g;
  function g(d) {
    return se(d) ? le(n, v, "linePrefix", o.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(d) : v(d);
  }
  function v(d) {
    return n.attempt(dr, c, h)(d);
  }
}
function ko(n) {
  n.exit("blockQuote");
}
var dr;
var Ja = J(() => {
  He();
  ye();
  dr = { name: "blockQuote", tokenize: yo, continuation: { tokenize: wo }, exit: ko };
});
function So(n, c, h) {
  return o;
  function o(v) {
    return n.enter("characterEscape"), n.enter("escapeMarker"), n.consume(v), n.exit("escapeMarker"), g;
  }
  function g(v) {
    return Ha(v) ? (n.enter("characterEscapeValue"), n.consume(v), n.exit("characterEscapeValue"), n.exit("characterEscape"), c) : h(v);
  }
}
var gr;
var _a = J(() => {
  ye();
  gr = { name: "characterEscape", tokenize: So };
});
function tl(n) {
  let c = "&" + n + ";";
  el.innerHTML = c;
  let h = el.textContent;
  return h.charCodeAt(h.length - 1) === 59 && n !== "semi" || h === c ? false : h;
}
var el;
var rl = J(() => {
  el = document.createElement("i");
});
function Ao(n, c, h) {
  let o = this, g = 0, v, d;
  return w;
  function w(T) {
    return n.enter("characterReference"), n.enter("characterReferenceMarker"), n.consume(T), n.exit("characterReferenceMarker"), D;
  }
  function D(T) {
    return T === 35 ? (n.enter("characterReferenceMarkerNumeric"), n.consume(T), n.exit("characterReferenceMarkerNumeric"), M) : (n.enter("characterReferenceValue"), v = 31, d = Oe, N(T));
  }
  function M(T) {
    return T === 88 || T === 120 ? (n.enter("characterReferenceMarkerHexadecimal"), n.consume(T), n.exit("characterReferenceMarkerHexadecimal"), n.enter("characterReferenceValue"), v = 6, d = Ra, N) : (n.enter("characterReferenceValue"), v = 7, d = Et, N(T));
  }
  function N(T) {
    if (T === 59 && g) {
      let C = n.exit("characterReferenceValue");
      return d === Oe && !tl(o.sliceSerialize(C)) ? h(T) : (n.enter("characterReferenceMarker"), n.consume(T), n.exit("characterReferenceMarker"), n.exit("characterReference"), c);
    }
    return d(T) && g++ < v ? (n.consume(T), N) : h(T);
  }
}
var vr;
var nl = J(() => {
  rl();
  ye();
  vr = { name: "characterReference", tokenize: Ao };
});
function zo(n, c, h) {
  let o = this, g = { tokenize: de, partial: true }, v = 0, d = 0, w;
  return D;
  function D(V) {
    return M(V);
  }
  function M(V) {
    let he = o.events[o.events.length - 1];
    return v = he && he[1].type === "linePrefix" ? he[2].sliceSerialize(he[1], true).length : 0, w = V, n.enter("codeFenced"), n.enter("codeFencedFence"), n.enter("codeFencedFenceSequence"), N(V);
  }
  function N(V) {
    return V === w ? (d++, n.consume(V), N) : d < 3 ? h(V) : (n.exit("codeFencedFenceSequence"), se(V) ? le(n, T, "whitespace")(V) : T(V));
  }
  function T(V) {
    return V === null || Z(V) ? (n.exit("codeFencedFence"), o.interrupt ? c(V) : n.check(il, H, ce)(V)) : (n.enter("codeFencedFenceInfo"), n.enter("chunkString", { contentType: "string" }), C(V));
  }
  function C(V) {
    return V === null || Z(V) ? (n.exit("chunkString"), n.exit("codeFencedFenceInfo"), T(V)) : se(V) ? (n.exit("chunkString"), n.exit("codeFencedFenceInfo"), le(n, S, "whitespace")(V)) : V === 96 && V === w ? h(V) : (n.consume(V), C);
  }
  function S(V) {
    return V === null || Z(V) ? T(V) : (n.enter("codeFencedFenceMeta"), n.enter("chunkString", { contentType: "string" }), Y(V));
  }
  function Y(V) {
    return V === null || Z(V) ? (n.exit("chunkString"), n.exit("codeFencedFenceMeta"), T(V)) : V === 96 && V === w ? h(V) : (n.consume(V), Y);
  }
  function H(V) {
    return n.attempt(g, ce, j)(V);
  }
  function j(V) {
    return n.enter("lineEnding"), n.consume(V), n.exit("lineEnding"), O;
  }
  function O(V) {
    return v > 0 && se(V) ? le(n, fe, "linePrefix", v + 1)(V) : fe(V);
  }
  function fe(V) {
    return V === null || Z(V) ? n.check(il, H, ce)(V) : (n.enter("codeFlowValue"), re(V));
  }
  function re(V) {
    return V === null || Z(V) ? (n.exit("codeFlowValue"), fe(V)) : (n.consume(V), re);
  }
  function ce(V) {
    return n.exit("codeFenced"), c(V);
  }
  function de(V, he, Be) {
    let be = 0;
    return q;
    function q(xe) {
      return V.enter("lineEnding"), V.consume(xe), V.exit("lineEnding"), Pe;
    }
    function Pe(xe) {
      return V.enter("codeFencedFence"), se(xe) ? le(V, we, "linePrefix", o.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(xe) : we(xe);
    }
    function we(xe) {
      return xe === w ? (V.enter("codeFencedFenceSequence"), ue(xe)) : Be(xe);
    }
    function ue(xe) {
      return xe === w ? (be++, V.consume(xe), ue) : be >= d ? (V.exit("codeFencedFenceSequence"), se(xe) ? le(V, ve, "whitespace")(xe) : ve(xe)) : Be(xe);
    }
    function ve(xe) {
      return xe === null || Z(xe) ? (V.exit("codeFencedFence"), he(xe)) : Be(xe);
    }
  }
}
function Bo(n, c, h) {
  let o = this;
  return g;
  function g(d) {
    return d === null ? h(d) : (n.enter("lineEnding"), n.consume(d), n.exit("lineEnding"), v);
  }
  function v(d) {
    return o.parser.lazy[o.now().line] ? h(d) : c(d);
  }
}
var il;
var xr;
var al = J(() => {
  He();
  ye();
  il = { tokenize: Bo, partial: true }, xr = { name: "codeFenced", tokenize: zo, concrete: true };
});
function Mo(n, c, h) {
  let o = this;
  return g;
  function g(M) {
    return n.enter("codeIndented"), le(n, v, "linePrefix", 4 + 1)(M);
  }
  function v(M) {
    let N = o.events[o.events.length - 1];
    return N && N[1].type === "linePrefix" && N[2].sliceSerialize(N[1], true).length >= 4 ? d(M) : h(M);
  }
  function d(M) {
    return M === null ? D(M) : Z(M) ? n.attempt(Co, d, D)(M) : (n.enter("codeFlowValue"), w(M));
  }
  function w(M) {
    return M === null || Z(M) ? (n.exit("codeFlowValue"), d(M)) : (n.consume(M), w);
  }
  function D(M) {
    return n.exit("codeIndented"), c(M);
  }
}
function To(n, c, h) {
  let o = this;
  return g;
  function g(d) {
    return o.parser.lazy[o.now().line] ? h(d) : Z(d) ? (n.enter("lineEnding"), n.consume(d), n.exit("lineEnding"), g) : le(n, v, "linePrefix", 4 + 1)(d);
  }
  function v(d) {
    let w = o.events[o.events.length - 1];
    return w && w[1].type === "linePrefix" && w[2].sliceSerialize(w[1], true).length >= 4 ? c(d) : Z(d) ? g(d) : h(d);
  }
}
var It;
var Co;
var ll = J(() => {
  He();
  ye();
  It = { name: "codeIndented", tokenize: Mo }, Co = { tokenize: To, partial: true };
});
function Eo(n) {
  let c = n.length - 4, h = 3, o, g;
  if ((n[h][1].type === "lineEnding" || n[h][1].type === "space") && (n[c][1].type === "lineEnding" || n[c][1].type === "space")) {
    for (o = h; ++o < c; )
      if (n[o][1].type === "codeTextData") {
        n[h][1].type = "codeTextPadding", n[c][1].type = "codeTextPadding", h += 2, c -= 2;
        break;
      }
  }
  for (o = h - 1, c++; ++o <= c; )
    g === void 0 ? o !== c && n[o][1].type !== "lineEnding" && (g = o) : (o === c || n[o][1].type === "lineEnding") && (n[g][1].type = "codeTextData", o !== g + 2 && (n[g][1].end = n[o - 1][1].end, n.splice(g + 2, o - g - 2), c -= o - g - 2, o = g + 2), g = void 0);
  return n;
}
function Do(n) {
  return n !== 96 || this.events[this.events.length - 1][1].type === "characterEscape";
}
function Fo(n, c, h) {
  let o = this, g = 0, v, d;
  return w;
  function w(C) {
    return n.enter("codeText"), n.enter("codeTextSequence"), D(C);
  }
  function D(C) {
    return C === 96 ? (n.consume(C), g++, D) : (n.exit("codeTextSequence"), M(C));
  }
  function M(C) {
    return C === null ? h(C) : C === 32 ? (n.enter("space"), n.consume(C), n.exit("space"), M) : C === 96 ? (d = n.enter("codeTextSequence"), v = 0, T(C)) : Z(C) ? (n.enter("lineEnding"), n.consume(C), n.exit("lineEnding"), M) : (n.enter("codeTextData"), N(C));
  }
  function N(C) {
    return C === null || C === 32 || C === 96 || Z(C) ? (n.exit("codeTextData"), M(C)) : (n.consume(C), N);
  }
  function T(C) {
    return C === 96 ? (n.consume(C), v++, T) : v === g ? (n.exit("codeTextSequence"), n.exit("codeText"), c(C)) : (d.type = "codeTextData", N(C));
  }
}
var Bn;
var ul = J(() => {
  ye();
  Bn = { name: "codeText", tokenize: Fo, resolve: Eo, previous: Do };
});
function br(n) {
  let c = {}, h = -1, o, g, v, d, w, D, M;
  for (; ++h < n.length; ) {
    for (; h in c; )
      h = c[h];
    if (o = n[h], h && o[1].type === "chunkFlow" && n[h - 1][1].type === "listItemPrefix" && (D = o[1]._tokenizer.events, v = 0, v < D.length && D[v][1].type === "lineEndingBlank" && (v += 2), v < D.length && D[v][1].type === "content"))
      for (; ++v < D.length && D[v][1].type !== "content"; )
        D[v][1].type === "chunkText" && (D[v][1]._isInFirstContentOfListItem = true, v++);
    if (o[0] === "enter")
      o[1].contentType && (Object.assign(c, No(n, h)), h = c[h], M = true);
    else if (o[1]._container) {
      for (v = h, g = void 0; v-- && (d = n[v], d[1].type === "lineEnding" || d[1].type === "lineEndingBlank"); )
        d[0] === "enter" && (g && (n[g][1].type = "lineEndingBlank"), d[1].type = "lineEnding", g = v);
      g && (o[1].end = Object.assign({}, n[g][1].start), w = n.slice(g, h), w.unshift(o), We(n, g, h - g + 1, w));
    }
  }
  return !M;
}
function No(n, c) {
  let h = n[c][1], o = n[c][2], g = c - 1, v = [], d = h._tokenizer || o.parser[h.contentType](h.start), w = d.events, D = [], M = {}, N, T, C = -1, S = h, Y = 0, H = 0, j = [H];
  for (; S; ) {
    for (; n[++g][1] !== S; )
      ;
    v.push(g), S._tokenizer || (N = o.sliceStream(S), S.next || N.push(null), T && d.defineSkip(S.start), S._isInFirstContentOfListItem && (d._gfmTasklistFirstContentOfListItem = true), d.write(N), S._isInFirstContentOfListItem && (d._gfmTasklistFirstContentOfListItem = void 0)), T = S, S = S.next;
  }
  for (S = h; ++C < w.length; )
    w[C][0] === "exit" && w[C - 1][0] === "enter" && w[C][1].type === w[C - 1][1].type && w[C][1].start.line !== w[C][1].end.line && (H = C + 1, j.push(H), S._tokenizer = void 0, S.previous = void 0, S = S.next);
  for (d.events = [], S ? (S._tokenizer = void 0, S.previous = void 0) : j.pop(), C = j.length; C--; ) {
    let O = w.slice(j[C], j[C + 1]), fe = v.pop();
    D.unshift([fe, fe + O.length - 1]), We(n, fe, 2, O);
  }
  for (C = -1; ++C < D.length; )
    M[Y + D[C][0]] = Y + D[C][1], Y += D[C][1] - D[C][0] - 1;
  return M;
}
var Cn = J(() => {
  z0();
});
function Lo(n) {
  return br(n), n;
}
function qo(n, c) {
  let h;
  return o;
  function o(w) {
    return n.enter("content"), h = n.enter("chunkContent", { contentType: "content" }), g(w);
  }
  function g(w) {
    return w === null ? v(w) : Z(w) ? n.check(Io, d, v)(w) : (n.consume(w), g);
  }
  function v(w) {
    return n.exit("chunkContent"), n.exit("content"), c(w);
  }
  function d(w) {
    return n.consume(w), n.exit("chunkContent"), h.next = n.enter("chunkContent", { contentType: "content", previous: h }), h = h.next, g;
  }
}
function Oo(n, c, h) {
  let o = this;
  return g;
  function g(d) {
    return n.exit("chunkContent"), n.enter("lineEnding"), n.consume(d), n.exit("lineEnding"), le(n, v, "linePrefix");
  }
  function v(d) {
    if (d === null || Z(d))
      return h(d);
    let w = o.events[o.events.length - 1];
    return !o.parser.constructs.disable.null.includes("codeIndented") && w && w[1].type === "linePrefix" && w[2].sliceSerialize(w[1], true).length >= 4 ? c(d) : n.interrupt(o.parser.constructs.flow, h, c)(d);
  }
}
var Mn;
var Io;
var ol = J(() => {
  He();
  ye();
  Cn();
  Mn = { tokenize: qo, resolve: Lo }, Io = { tokenize: Oo, partial: true };
});
function yr(n, c, h, o, g, v, d, w, D) {
  let M = D || Number.POSITIVE_INFINITY, N = 0;
  return T;
  function T(O) {
    return O === 60 ? (n.enter(o), n.enter(g), n.enter(v), n.consume(O), n.exit(v), C) : O === null || O === 32 || O === 41 || rt(O) ? h(O) : (n.enter(o), n.enter(d), n.enter(w), n.enter("chunkString", { contentType: "string" }), H(O));
  }
  function C(O) {
    return O === 62 ? (n.enter(v), n.consume(O), n.exit(v), n.exit(g), n.exit(o), c) : (n.enter(w), n.enter("chunkString", { contentType: "string" }), S(O));
  }
  function S(O) {
    return O === 62 ? (n.exit("chunkString"), n.exit(w), C(O)) : O === null || O === 60 || Z(O) ? h(O) : (n.consume(O), O === 92 ? Y : S);
  }
  function Y(O) {
    return O === 60 || O === 62 || O === 92 ? (n.consume(O), S) : S(O);
  }
  function H(O) {
    return !N && (O === null || O === 41 || ze(O)) ? (n.exit("chunkString"), n.exit(w), n.exit(d), n.exit(o), c(O)) : N < M && O === 40 ? (n.consume(O), N++, H) : O === 41 ? (n.consume(O), N--, H) : O === null || O === 32 || O === 40 || rt(O) ? h(O) : (n.consume(O), O === 92 ? j : H);
  }
  function j(O) {
    return O === 40 || O === 41 || O === 92 ? (n.consume(O), H) : H(O);
  }
}
var Tn = J(() => {
  ye();
});
function wr(n, c, h, o, g, v) {
  let d = this, w = 0, D;
  return M;
  function M(S) {
    return n.enter(o), n.enter(g), n.consume(S), n.exit(g), n.enter(v), N;
  }
  function N(S) {
    return w > 999 || S === null || S === 91 || S === 93 && !D || S === 94 && !w && "_hiddenFootnoteSupport" in d.parser.constructs ? h(S) : S === 93 ? (n.exit(v), n.enter(g), n.consume(S), n.exit(g), n.exit(o), c) : Z(S) ? (n.enter("lineEnding"), n.consume(S), n.exit("lineEnding"), N) : (n.enter("chunkString", { contentType: "string" }), T(S));
  }
  function T(S) {
    return S === null || S === 91 || S === 93 || Z(S) || w++ > 999 ? (n.exit("chunkString"), N(S)) : (n.consume(S), D || (D = !se(S)), S === 92 ? C : T);
  }
  function C(S) {
    return S === 91 || S === 92 || S === 93 ? (n.consume(S), w++, T) : T(S);
  }
}
var En = J(() => {
  ye();
});
function kr(n, c, h, o, g, v) {
  let d;
  return w;
  function w(C) {
    return C === 34 || C === 39 || C === 40 ? (n.enter(o), n.enter(g), n.consume(C), n.exit(g), d = C === 40 ? 41 : C, D) : h(C);
  }
  function D(C) {
    return C === d ? (n.enter(g), n.consume(C), n.exit(g), n.exit(o), c) : (n.enter(v), M(C));
  }
  function M(C) {
    return C === d ? (n.exit(v), D(d)) : C === null ? h(C) : Z(C) ? (n.enter("lineEnding"), n.consume(C), n.exit("lineEnding"), le(n, M, "linePrefix")) : (n.enter("chunkString", { contentType: "string" }), N(C));
  }
  function N(C) {
    return C === d || C === null || Z(C) ? (n.exit("chunkString"), M(C)) : (n.consume(C), C === 92 ? T : N);
  }
  function T(C) {
    return C === d || C === 92 ? (n.consume(C), N) : N(C);
  }
}
var Dn = J(() => {
  He();
  ye();
});
function it(n, c) {
  let h;
  return o;
  function o(g) {
    return Z(g) ? (n.enter("lineEnding"), n.consume(g), n.exit("lineEnding"), h = true, o) : se(g) ? le(n, o, h ? "linePrefix" : "lineSuffix")(g) : c(g);
  }
}
var Fn = J(() => {
  He();
  ye();
});
function Ho(n, c, h) {
  let o = this, g;
  return v;
  function v(S) {
    return n.enter("definition"), d(S);
  }
  function d(S) {
    return wr.call(o, n, w, h, "definitionLabel", "definitionLabelMarker", "definitionLabelString")(S);
  }
  function w(S) {
    return g = W0(o.sliceSerialize(o.events[o.events.length - 1][1]).slice(1, -1)), S === 58 ? (n.enter("definitionMarker"), n.consume(S), n.exit("definitionMarker"), D) : h(S);
  }
  function D(S) {
    return ze(S) ? it(n, M)(S) : M(S);
  }
  function M(S) {
    return yr(n, N, h, "definitionDestination", "definitionDestinationLiteral", "definitionDestinationLiteralMarker", "definitionDestinationRaw", "definitionDestinationString")(S);
  }
  function N(S) {
    return n.attempt(Ro, T, T)(S);
  }
  function T(S) {
    return se(S) ? le(n, C, "whitespace")(S) : C(S);
  }
  function C(S) {
    return S === null || Z(S) ? (n.exit("definition"), o.parser.defined.push(g), c(S)) : h(S);
  }
}
function Po(n, c, h) {
  return o;
  function o(w) {
    return ze(w) ? it(n, g)(w) : h(w);
  }
  function g(w) {
    return kr(n, v, h, "definitionTitle", "definitionTitleMarker", "definitionTitleString")(w);
  }
  function v(w) {
    return se(w) ? le(n, d, "whitespace")(w) : d(w);
  }
  function d(w) {
    return w === null || Z(w) ? c(w) : h(w);
  }
}
var Nn;
var Ro;
var sl = J(() => {
  Tn();
  En();
  He();
  Dn();
  Fn();
  ye();
  pr();
  Nn = { name: "definition", tokenize: Ho }, Ro = { tokenize: Po, partial: true };
});
function Go(n, c, h) {
  return o;
  function o(v) {
    return n.enter("hardBreakEscape"), n.consume(v), g;
  }
  function g(v) {
    return Z(v) ? (n.exit("hardBreakEscape"), c(v)) : h(v);
  }
}
var In;
var hl = J(() => {
  ye();
  In = { name: "hardBreakEscape", tokenize: Go };
});
function Vo(n, c) {
  let h = n.length - 2, o = 3, g, v;
  return n[o][1].type === "whitespace" && (o += 2), h - 2 > o && n[h][1].type === "whitespace" && (h -= 2), n[h][1].type === "atxHeadingSequence" && (o === h - 1 || h - 4 > o && n[h - 2][1].type === "whitespace") && (h -= o + 1 === h ? 2 : 4), h > o && (g = { type: "atxHeadingText", start: n[o][1].start, end: n[h][1].end }, v = { type: "chunkText", start: n[o][1].start, end: n[h][1].end, contentType: "text" }, We(n, o, h - o + 1, [["enter", g, c], ["enter", v, c], ["exit", v, c], ["exit", g, c]])), n;
}
function Uo(n, c, h) {
  let o = 0;
  return g;
  function g(N) {
    return n.enter("atxHeading"), v(N);
  }
  function v(N) {
    return n.enter("atxHeadingSequence"), d(N);
  }
  function d(N) {
    return N === 35 && o++ < 6 ? (n.consume(N), d) : N === null || ze(N) ? (n.exit("atxHeadingSequence"), w(N)) : h(N);
  }
  function w(N) {
    return N === 35 ? (n.enter("atxHeadingSequence"), D(N)) : N === null || Z(N) ? (n.exit("atxHeading"), c(N)) : se(N) ? le(n, w, "whitespace")(N) : (n.enter("atxHeadingText"), M(N));
  }
  function D(N) {
    return N === 35 ? (n.consume(N), D) : (n.exit("atxHeadingSequence"), w(N));
  }
  function M(N) {
    return N === null || N === 35 || ze(N) ? (n.exit("atxHeadingText"), w(N)) : (n.consume(N), M);
  }
}
var Ln;
var ml = J(() => {
  He();
  ye();
  z0();
  Ln = { name: "headingAtx", tokenize: Uo, resolve: Vo };
});
var cl;
var qn;
var pl = J(() => {
  cl = ["address", "article", "aside", "base", "basefont", "blockquote", "body", "caption", "center", "col", "colgroup", "dd", "details", "dialog", "dir", "div", "dl", "dt", "fieldset", "figcaption", "figure", "footer", "form", "frame", "frameset", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hr", "html", "iframe", "legend", "li", "link", "main", "menu", "menuitem", "nav", "noframes", "ol", "optgroup", "option", "p", "param", "search", "section", "summary", "table", "tbody", "td", "tfoot", "th", "thead", "title", "tr", "track", "ul"], qn = ["pre", "script", "style", "textarea"];
});
function Yo(n) {
  let c = n.length;
  for (; c-- && !(n[c][0] === "enter" && n[c][1].type === "htmlFlow"); )
    ;
  return c > 1 && n[c - 2][1].type === "linePrefix" && (n[c][1].start = n[c - 2][1].start, n[c + 1][1].start = n[c - 2][1].start, n.splice(c - 2, 2)), n;
}
function Xo(n, c, h) {
  let o = this, g, v, d, w, D;
  return M;
  function M(E) {
    return N(E);
  }
  function N(E) {
    return n.enter("htmlFlow"), n.enter("htmlFlowData"), n.consume(E), T;
  }
  function T(E) {
    return E === 33 ? (n.consume(E), C) : E === 47 ? (n.consume(E), v = true, H) : E === 63 ? (n.consume(E), g = 3, o.interrupt ? c : B) : Xe(E) ? (n.consume(E), d = String.fromCharCode(E), j) : h(E);
  }
  function C(E) {
    return E === 45 ? (n.consume(E), g = 2, S) : E === 91 ? (n.consume(E), g = 5, w = 0, Y) : Xe(E) ? (n.consume(E), g = 4, o.interrupt ? c : B) : h(E);
  }
  function S(E) {
    return E === 45 ? (n.consume(E), o.interrupt ? c : B) : h(E);
  }
  function Y(E) {
    let e0 = "CDATA[";
    return E === e0.charCodeAt(w++) ? (n.consume(E), w === e0.length ? o.interrupt ? c : we : Y) : h(E);
  }
  function H(E) {
    return Xe(E) ? (n.consume(E), d = String.fromCharCode(E), j) : h(E);
  }
  function j(E) {
    if (E === null || E === 47 || E === 62 || ze(E)) {
      let e0 = E === 47, R0 = d.toLowerCase();
      return !e0 && !v && qn.includes(R0) ? (g = 1, o.interrupt ? c(E) : we(E)) : cl.includes(d.toLowerCase()) ? (g = 6, e0 ? (n.consume(E), O) : o.interrupt ? c(E) : we(E)) : (g = 7, o.interrupt && !o.parser.lazy[o.now().line] ? h(E) : v ? fe(E) : re(E));
    }
    return E === 45 || Oe(E) ? (n.consume(E), d += String.fromCharCode(E), j) : h(E);
  }
  function O(E) {
    return E === 62 ? (n.consume(E), o.interrupt ? c : we) : h(E);
  }
  function fe(E) {
    return se(E) ? (n.consume(E), fe) : q(E);
  }
  function re(E) {
    return E === 47 ? (n.consume(E), q) : E === 58 || E === 95 || Xe(E) ? (n.consume(E), ce) : se(E) ? (n.consume(E), re) : q(E);
  }
  function ce(E) {
    return E === 45 || E === 46 || E === 58 || E === 95 || Oe(E) ? (n.consume(E), ce) : de(E);
  }
  function de(E) {
    return E === 61 ? (n.consume(E), V) : se(E) ? (n.consume(E), de) : re(E);
  }
  function V(E) {
    return E === null || E === 60 || E === 61 || E === 62 || E === 96 ? h(E) : E === 34 || E === 39 ? (n.consume(E), D = E, he) : se(E) ? (n.consume(E), V) : Be(E);
  }
  function he(E) {
    return E === D ? (n.consume(E), D = null, be) : E === null || Z(E) ? h(E) : (n.consume(E), he);
  }
  function Be(E) {
    return E === null || E === 34 || E === 39 || E === 47 || E === 60 || E === 61 || E === 62 || E === 96 || ze(E) ? de(E) : (n.consume(E), Be);
  }
  function be(E) {
    return E === 47 || E === 62 || se(E) ? re(E) : h(E);
  }
  function q(E) {
    return E === 62 ? (n.consume(E), Pe) : h(E);
  }
  function Pe(E) {
    return E === null || Z(E) ? we(E) : se(E) ? (n.consume(E), Pe) : h(E);
  }
  function we(E) {
    return E === 45 && g === 2 ? (n.consume(E), qe) : E === 60 && g === 1 ? (n.consume(E), _) : E === 62 && g === 4 ? (n.consume(E), Ze) : E === 63 && g === 3 ? (n.consume(E), B) : E === 93 && g === 5 ? (n.consume(E), c0) : Z(E) && (g === 6 || g === 7) ? (n.exit("htmlFlowData"), n.check(Wo, Qe, ue)(E)) : E === null || Z(E) ? (n.exit("htmlFlowData"), ue(E)) : (n.consume(E), we);
  }
  function ue(E) {
    return n.check(jo, ve, Qe)(E);
  }
  function ve(E) {
    return n.enter("lineEnding"), n.consume(E), n.exit("lineEnding"), xe;
  }
  function xe(E) {
    return E === null || Z(E) ? ue(E) : (n.enter("htmlFlowData"), we(E));
  }
  function qe(E) {
    return E === 45 ? (n.consume(E), B) : we(E);
  }
  function _(E) {
    return E === 47 ? (n.consume(E), d = "", _e) : we(E);
  }
  function _e(E) {
    if (E === 62) {
      let e0 = d.toLowerCase();
      return qn.includes(e0) ? (n.consume(E), Ze) : we(E);
    }
    return Xe(E) && d.length < 8 ? (n.consume(E), d += String.fromCharCode(E), _e) : we(E);
  }
  function c0(E) {
    return E === 93 ? (n.consume(E), B) : we(E);
  }
  function B(E) {
    return E === 62 ? (n.consume(E), Ze) : E === 45 && g === 2 ? (n.consume(E), B) : we(E);
  }
  function Ze(E) {
    return E === null || Z(E) ? (n.exit("htmlFlowData"), Qe(E)) : (n.consume(E), Ze);
  }
  function Qe(E) {
    return n.exit("htmlFlow"), c(E);
  }
}
function $o(n, c, h) {
  let o = this;
  return g;
  function g(d) {
    return Z(d) ? (n.enter("lineEnding"), n.consume(d), n.exit("lineEnding"), v) : h(d);
  }
  function v(d) {
    return o.parser.lazy[o.now().line] ? h(d) : c(d);
  }
}
function Zo(n, c, h) {
  return o;
  function o(g) {
    return n.enter("lineEnding"), n.consume(g), n.exit("lineEnding"), n.attempt($0, c, h);
  }
}
var On;
var Wo;
var jo;
var fl = J(() => {
  ye();
  pl();
  fr();
  On = { name: "htmlFlow", tokenize: Xo, resolveTo: Yo, concrete: true }, Wo = { tokenize: Zo, partial: true }, jo = { tokenize: $o, partial: true };
});
function Qo(n, c, h) {
  let o = this, g, v, d;
  return w;
  function w(B) {
    return n.enter("htmlText"), n.enter("htmlTextData"), n.consume(B), D;
  }
  function D(B) {
    return B === 33 ? (n.consume(B), M) : B === 47 ? (n.consume(B), de) : B === 63 ? (n.consume(B), re) : Xe(B) ? (n.consume(B), Be) : h(B);
  }
  function M(B) {
    return B === 45 ? (n.consume(B), N) : B === 91 ? (n.consume(B), v = 0, Y) : Xe(B) ? (n.consume(B), fe) : h(B);
  }
  function N(B) {
    return B === 45 ? (n.consume(B), S) : h(B);
  }
  function T(B) {
    return B === null ? h(B) : B === 45 ? (n.consume(B), C) : Z(B) ? (d = T, _(B)) : (n.consume(B), T);
  }
  function C(B) {
    return B === 45 ? (n.consume(B), S) : T(B);
  }
  function S(B) {
    return B === 62 ? qe(B) : B === 45 ? C(B) : T(B);
  }
  function Y(B) {
    let Ze = "CDATA[";
    return B === Ze.charCodeAt(v++) ? (n.consume(B), v === Ze.length ? H : Y) : h(B);
  }
  function H(B) {
    return B === null ? h(B) : B === 93 ? (n.consume(B), j) : Z(B) ? (d = H, _(B)) : (n.consume(B), H);
  }
  function j(B) {
    return B === 93 ? (n.consume(B), O) : H(B);
  }
  function O(B) {
    return B === 62 ? qe(B) : B === 93 ? (n.consume(B), O) : H(B);
  }
  function fe(B) {
    return B === null || B === 62 ? qe(B) : Z(B) ? (d = fe, _(B)) : (n.consume(B), fe);
  }
  function re(B) {
    return B === null ? h(B) : B === 63 ? (n.consume(B), ce) : Z(B) ? (d = re, _(B)) : (n.consume(B), re);
  }
  function ce(B) {
    return B === 62 ? qe(B) : re(B);
  }
  function de(B) {
    return Xe(B) ? (n.consume(B), V) : h(B);
  }
  function V(B) {
    return B === 45 || Oe(B) ? (n.consume(B), V) : he(B);
  }
  function he(B) {
    return Z(B) ? (d = he, _(B)) : se(B) ? (n.consume(B), he) : qe(B);
  }
  function Be(B) {
    return B === 45 || Oe(B) ? (n.consume(B), Be) : B === 47 || B === 62 || ze(B) ? be(B) : h(B);
  }
  function be(B) {
    return B === 47 ? (n.consume(B), qe) : B === 58 || B === 95 || Xe(B) ? (n.consume(B), q) : Z(B) ? (d = be, _(B)) : se(B) ? (n.consume(B), be) : qe(B);
  }
  function q(B) {
    return B === 45 || B === 46 || B === 58 || B === 95 || Oe(B) ? (n.consume(B), q) : Pe(B);
  }
  function Pe(B) {
    return B === 61 ? (n.consume(B), we) : Z(B) ? (d = Pe, _(B)) : se(B) ? (n.consume(B), Pe) : be(B);
  }
  function we(B) {
    return B === null || B === 60 || B === 61 || B === 62 || B === 96 ? h(B) : B === 34 || B === 39 ? (n.consume(B), g = B, ue) : Z(B) ? (d = we, _(B)) : se(B) ? (n.consume(B), we) : (n.consume(B), ve);
  }
  function ue(B) {
    return B === g ? (n.consume(B), g = void 0, xe) : B === null ? h(B) : Z(B) ? (d = ue, _(B)) : (n.consume(B), ue);
  }
  function ve(B) {
    return B === null || B === 34 || B === 39 || B === 60 || B === 61 || B === 96 ? h(B) : B === 47 || B === 62 || ze(B) ? be(B) : (n.consume(B), ve);
  }
  function xe(B) {
    return B === 47 || B === 62 || ze(B) ? be(B) : h(B);
  }
  function qe(B) {
    return B === 62 ? (n.consume(B), n.exit("htmlTextData"), n.exit("htmlText"), c) : h(B);
  }
  function _(B) {
    return n.exit("htmlTextData"), n.enter("lineEnding"), n.consume(B), n.exit("lineEnding"), _e;
  }
  function _e(B) {
    return se(B) ? le(n, c0, "linePrefix", o.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(B) : c0(B);
  }
  function c0(B) {
    return n.enter("htmlTextData"), d(B);
  }
}
var Rn;
var dl = J(() => {
  He();
  ye();
  Rn = { name: "htmlText", tokenize: Qo };
});
function es(n) {
  let c = -1;
  for (; ++c < n.length; ) {
    let h = n[c][1];
    (h.type === "labelImage" || h.type === "labelLink" || h.type === "labelEnd") && (n.splice(c + 1, h.type === "labelImage" ? 4 : 2), h.type = "data", c++);
  }
  return n;
}
function ts(n, c) {
  let h = n.length, o = 0, g, v, d, w;
  for (; h--; )
    if (g = n[h][1], v) {
      if (g.type === "link" || g.type === "labelLink" && g._inactive)
        break;
      n[h][0] === "enter" && g.type === "labelLink" && (g._inactive = true);
    } else if (d) {
      if (n[h][0] === "enter" && (g.type === "labelImage" || g.type === "labelLink") && !g._balanced && (v = h, g.type !== "labelLink")) {
        o = 2;
        break;
      }
    } else
      g.type === "labelEnd" && (d = h);
  let D = { type: n[v][1].type === "labelLink" ? "link" : "image", start: Object.assign({}, n[v][1].start), end: Object.assign({}, n[n.length - 1][1].end) }, M = { type: "label", start: Object.assign({}, n[v][1].start), end: Object.assign({}, n[d][1].end) }, N = { type: "labelText", start: Object.assign({}, n[v + o + 2][1].end), end: Object.assign({}, n[d - 2][1].start) };
  return w = [["enter", D, c], ["enter", M, c]], w = je(w, n.slice(v + 1, v + o + 3)), w = je(w, [["enter", N, c]]), w = je(w, X0(c.parser.constructs.insideSpan.null, n.slice(v + o + 4, d - 3), c)), w = je(w, [["exit", N, c], n[d - 2], n[d - 1], ["exit", M, c]]), w = je(w, n.slice(d + 1)), w = je(w, [["exit", D, c]]), We(n, v, n.length, w), n;
}
function rs(n, c, h) {
  let o = this, g = o.events.length, v, d;
  for (; g--; )
    if ((o.events[g][1].type === "labelImage" || o.events[g][1].type === "labelLink") && !o.events[g][1]._balanced) {
      v = o.events[g][1];
      break;
    }
  return w;
  function w(C) {
    return v ? v._inactive ? T(C) : (d = o.parser.defined.includes(W0(o.sliceSerialize({ start: v.end, end: o.now() }))), n.enter("labelEnd"), n.enter("labelMarker"), n.consume(C), n.exit("labelMarker"), n.exit("labelEnd"), D) : h(C);
  }
  function D(C) {
    return C === 40 ? n.attempt(Ko, N, d ? N : T)(C) : C === 91 ? n.attempt(Jo, N, d ? M : T)(C) : d ? N(C) : T(C);
  }
  function M(C) {
    return n.attempt(_o, N, T)(C);
  }
  function N(C) {
    return c(C);
  }
  function T(C) {
    return v._balanced = true, h(C);
  }
}
function ns(n, c, h) {
  return o;
  function o(T) {
    return n.enter("resource"), n.enter("resourceMarker"), n.consume(T), n.exit("resourceMarker"), g;
  }
  function g(T) {
    return ze(T) ? it(n, v)(T) : v(T);
  }
  function v(T) {
    return T === 41 ? N(T) : yr(n, d, w, "resourceDestination", "resourceDestinationLiteral", "resourceDestinationLiteralMarker", "resourceDestinationRaw", "resourceDestinationString", 32)(T);
  }
  function d(T) {
    return ze(T) ? it(n, D)(T) : N(T);
  }
  function w(T) {
    return h(T);
  }
  function D(T) {
    return T === 34 || T === 39 || T === 40 ? kr(n, M, h, "resourceTitle", "resourceTitleMarker", "resourceTitleString")(T) : N(T);
  }
  function M(T) {
    return ze(T) ? it(n, N)(T) : N(T);
  }
  function N(T) {
    return T === 41 ? (n.enter("resourceMarker"), n.consume(T), n.exit("resourceMarker"), n.exit("resource"), c) : h(T);
  }
}
function is(n, c, h) {
  let o = this;
  return g;
  function g(w) {
    return wr.call(o, n, v, d, "reference", "referenceMarker", "referenceString")(w);
  }
  function v(w) {
    return o.parser.defined.includes(W0(o.sliceSerialize(o.events[o.events.length - 1][1]).slice(1, -1))) ? c(w) : h(w);
  }
  function d(w) {
    return h(w);
  }
}
function as(n, c, h) {
  return o;
  function o(v) {
    return n.enter("reference"), n.enter("referenceMarker"), n.consume(v), n.exit("referenceMarker"), g;
  }
  function g(v) {
    return v === 93 ? (n.enter("referenceMarker"), n.consume(v), n.exit("referenceMarker"), n.exit("reference"), c) : h(v);
  }
}
var at;
var Ko;
var Jo;
var _o;
var Sr = J(() => {
  Tn();
  En();
  Dn();
  Fn();
  ye();
  z0();
  pr();
  Ft();
  at = { name: "labelEnd", tokenize: rs, resolveTo: ts, resolveAll: es }, Ko = { tokenize: ns }, Jo = { tokenize: is }, _o = { tokenize: as };
});
function ls(n, c, h) {
  let o = this;
  return g;
  function g(w) {
    return n.enter("labelImage"), n.enter("labelImageMarker"), n.consume(w), n.exit("labelImageMarker"), v;
  }
  function v(w) {
    return w === 91 ? (n.enter("labelMarker"), n.consume(w), n.exit("labelMarker"), n.exit("labelImage"), d) : h(w);
  }
  function d(w) {
    return w === 94 && "_hiddenFootnoteSupport" in o.parser.constructs ? h(w) : c(w);
  }
}
var Hn;
var gl = J(() => {
  Sr();
  Hn = { name: "labelStartImage", tokenize: ls, resolveAll: at.resolveAll };
});
function us(n, c, h) {
  let o = this;
  return g;
  function g(d) {
    return n.enter("labelLink"), n.enter("labelMarker"), n.consume(d), n.exit("labelMarker"), n.exit("labelLink"), v;
  }
  function v(d) {
    return d === 94 && "_hiddenFootnoteSupport" in o.parser.constructs ? h(d) : c(d);
  }
}
var Pn;
var vl = J(() => {
  Sr();
  Pn = { name: "labelStartLink", tokenize: us, resolveAll: at.resolveAll };
});
function os(n, c) {
  return h;
  function h(o) {
    return n.enter("lineEnding"), n.consume(o), n.exit("lineEnding"), le(n, c, "linePrefix");
  }
}
var Lt;
var xl = J(() => {
  He();
  Lt = { name: "lineEnding", tokenize: os };
});
function ss(n, c, h) {
  let o = 0, g;
  return v;
  function v(M) {
    return n.enter("thematicBreak"), d(M);
  }
  function d(M) {
    return g = M, w(M);
  }
  function w(M) {
    return M === g ? (n.enter("thematicBreakSequence"), D(M)) : o >= 3 && (M === null || Z(M)) ? (n.exit("thematicBreak"), c(M)) : h(M);
  }
  function D(M) {
    return M === g ? (n.consume(M), o++, D) : (n.exit("thematicBreakSequence"), se(M) ? le(n, w, "whitespace")(M) : w(M));
  }
}
var lt;
var Gn = J(() => {
  He();
  ye();
  lt = { name: "thematicBreak", tokenize: ss };
});
function cs(n, c, h) {
  let o = this, g = o.events[o.events.length - 1], v = g && g[1].type === "linePrefix" ? g[2].sliceSerialize(g[1], true).length : 0, d = 0;
  return w;
  function w(S) {
    let Y = o.containerState.type || (S === 42 || S === 43 || S === 45 ? "listUnordered" : "listOrdered");
    if (Y === "listUnordered" ? !o.containerState.marker || S === o.containerState.marker : Et(S)) {
      if (o.containerState.type || (o.containerState.type = Y, n.enter(Y, { _container: true })), Y === "listUnordered")
        return n.enter("listItemPrefix"), S === 42 || S === 45 ? n.check(lt, h, M)(S) : M(S);
      if (!o.interrupt || S === 49)
        return n.enter("listItemPrefix"), n.enter("listItemValue"), D(S);
    }
    return h(S);
  }
  function D(S) {
    return Et(S) && ++d < 10 ? (n.consume(S), D) : (!o.interrupt || d < 2) && (o.containerState.marker ? S === o.containerState.marker : S === 41 || S === 46) ? (n.exit("listItemValue"), M(S)) : h(S);
  }
  function M(S) {
    return n.enter("listItemMarker"), n.consume(S), n.exit("listItemMarker"), o.containerState.marker = o.containerState.marker || S, n.check($0, o.interrupt ? h : N, n.attempt(hs, C, T));
  }
  function N(S) {
    return o.containerState.initialBlankLine = true, v++, C(S);
  }
  function T(S) {
    return se(S) ? (n.enter("listItemPrefixWhitespace"), n.consume(S), n.exit("listItemPrefixWhitespace"), C) : h(S);
  }
  function C(S) {
    return o.containerState.size = v + o.sliceSerialize(n.exit("listItemPrefix"), true).length, c(S);
  }
}
function ps(n, c, h) {
  let o = this;
  return o.containerState._closeFlow = void 0, n.check($0, g, v);
  function g(w) {
    return o.containerState.furtherBlankLines = o.containerState.furtherBlankLines || o.containerState.initialBlankLine, le(n, c, "listItemIndent", o.containerState.size + 1)(w);
  }
  function v(w) {
    return o.containerState.furtherBlankLines || !se(w) ? (o.containerState.furtherBlankLines = void 0, o.containerState.initialBlankLine = void 0, d(w)) : (o.containerState.furtherBlankLines = void 0, o.containerState.initialBlankLine = void 0, n.attempt(ms, c, d)(w));
  }
  function d(w) {
    return o.containerState._closeFlow = true, o.interrupt = void 0, le(n, n.attempt(Je, c, h), "linePrefix", o.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(w);
  }
}
function fs(n, c, h) {
  let o = this;
  return le(n, g, "listItemIndent", o.containerState.size + 1);
  function g(v) {
    let d = o.events[o.events.length - 1];
    return d && d[1].type === "listItemIndent" && d[2].sliceSerialize(d[1], true).length === o.containerState.size ? c(v) : h(v);
  }
}
function ds(n) {
  n.exit(this.containerState.type);
}
function gs(n, c, h) {
  let o = this;
  return le(n, g, "listItemPrefixWhitespace", o.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4 + 1);
  function g(v) {
    let d = o.events[o.events.length - 1];
    return !se(v) && d && d[1].type === "listItemPrefixWhitespace" ? c(v) : h(v);
  }
}
var Je;
var hs;
var ms;
var bl = J(() => {
  He();
  ye();
  fr();
  Gn();
  Je = { name: "list", tokenize: cs, continuation: { tokenize: ps }, exit: ds }, hs = { tokenize: gs, partial: true }, ms = { tokenize: fs, partial: true };
});
function vs(n, c) {
  let h = n.length, o, g, v;
  for (; h--; )
    if (n[h][0] === "enter") {
      if (n[h][1].type === "content") {
        o = h;
        break;
      }
      n[h][1].type === "paragraph" && (g = h);
    } else
      n[h][1].type === "content" && n.splice(h, 1), !v && n[h][1].type === "definition" && (v = h);
  let d = { type: "setextHeading", start: Object.assign({}, n[g][1].start), end: Object.assign({}, n[n.length - 1][1].end) };
  return n[g][1].type = "setextHeadingText", v ? (n.splice(g, 0, ["enter", d, c]), n.splice(v + 1, 0, ["exit", n[o][1], c]), n[o][1].end = Object.assign({}, n[v][1].end)) : n[o][1] = d, n.push(["exit", d, c]), n;
}
function xs(n, c, h) {
  let o = this, g;
  return v;
  function v(M) {
    let N = o.events.length, T;
    for (; N--; )
      if (o.events[N][1].type !== "lineEnding" && o.events[N][1].type !== "linePrefix" && o.events[N][1].type !== "content") {
        T = o.events[N][1].type === "paragraph";
        break;
      }
    return !o.parser.lazy[o.now().line] && (o.interrupt || T) ? (n.enter("setextHeadingLine"), g = M, d(M)) : h(M);
  }
  function d(M) {
    return n.enter("setextHeadingLineSequence"), w(M);
  }
  function w(M) {
    return M === g ? (n.consume(M), w) : (n.exit("setextHeadingLineSequence"), se(M) ? le(n, D, "lineSuffix")(M) : D(M));
  }
  function D(M) {
    return M === null || Z(M) ? (n.exit("setextHeadingLine"), c(M)) : h(M);
  }
}
var Ar;
var yl = J(() => {
  He();
  ye();
  Ar = { name: "setextUnderline", tokenize: xs, resolveTo: vs };
});
var Vn = J(() => {
  Qa();
  Ka();
  fr();
  Ja();
  _a();
  nl();
  al();
  ll();
  ul();
  ol();
  sl();
  hl();
  ml();
  fl();
  dl();
  Sr();
  gl();
  vl();
  xl();
  bl();
  yl();
  Gn();
});
function bs(n) {
  let c = this, h = n.attempt($0, o, n.attempt(this.parser.constructs.flowInitial, g, le(n, n.attempt(this.parser.constructs.flow, g, n.attempt(Mn, g)), "linePrefix")));
  return h;
  function o(v) {
    if (v === null) {
      n.consume(v);
      return;
    }
    return n.enter("lineEndingBlank"), n.consume(v), n.exit("lineEndingBlank"), c.currentConstruct = void 0, h;
  }
  function g(v) {
    if (v === null) {
      n.consume(v);
      return;
    }
    return n.enter("lineEnding"), n.consume(v), n.exit("lineEnding"), c.currentConstruct = void 0, h;
  }
}
var wl;
var kl = J(() => {
  Vn();
  He();
  wl = { tokenize: bs };
});
function Bl(n) {
  return { tokenize: c, resolveAll: Cl(n === "text" ? ys : void 0) };
  function c(h) {
    let o = this, g = this.parser.constructs[n], v = h.attempt(g, d, w);
    return d;
    function d(N) {
      return M(N) ? v(N) : w(N);
    }
    function w(N) {
      if (N === null) {
        h.consume(N);
        return;
      }
      return h.enter("data"), h.consume(N), D;
    }
    function D(N) {
      return M(N) ? (h.exit("data"), v(N)) : (h.consume(N), D);
    }
    function M(N) {
      if (N === null)
        return true;
      let T = g[N], C = -1;
      if (T)
        for (; ++C < T.length; ) {
          let S = T[C];
          if (!S.previous || S.previous.call(o, o.previous))
            return true;
        }
      return false;
    }
  }
}
function Cl(n) {
  return c;
  function c(h, o) {
    let g = -1, v;
    for (; ++g <= h.length; )
      v === void 0 ? h[g] && h[g][1].type === "data" && (v = g, g++) : (!h[g] || h[g][1].type !== "data") && (g !== v + 2 && (h[v][1].end = h[g - 1][1].end, h.splice(v + 2, g - v - 2), g = v + 2), v = void 0);
    return n ? n(h, o) : h;
  }
}
function ys(n, c) {
  let h = -1;
  for (; ++h <= n.length; )
    if ((h === n.length || n[h][1].type === "lineEnding") && n[h - 1][1].type === "data") {
      let o = n[h - 1][1], g = c.sliceStream(o), v = g.length, d = -1, w = 0, D;
      for (; v--; ) {
        let M = g[v];
        if (typeof M == "string") {
          for (d = M.length; M.charCodeAt(d - 1) === 32; )
            w++, d--;
          if (d)
            break;
          d = -1;
        } else if (M === -2)
          D = true, w++;
        else if (M !== -1) {
          v++;
          break;
        }
      }
      if (w) {
        let M = { type: h === n.length || D || w < 2 ? "lineSuffix" : "hardBreakTrailing", start: { line: o.end.line, column: o.end.column - w, offset: o.end.offset - w, _index: o.start._index + v, _bufferIndex: v ? d : o.start._bufferIndex + d }, end: Object.assign({}, o.end) };
        o.end = Object.assign({}, M.start), o.start.offset === o.end.offset ? Object.assign(o, M) : (n.splice(h, 0, ["enter", M, c], ["exit", M, c]), h += 2);
      }
      h++;
    }
  return n;
}
var Sl;
var Al;
var zl;
var Un = J(() => {
  Sl = { resolveAll: Cl() }, Al = Bl("string"), zl = Bl("text");
});
function Ml(n, c, h) {
  let o = Object.assign(h ? Object.assign({}, h) : { line: 1, column: 1, offset: 0 }, { _index: 0, _bufferIndex: -1 }), g = {}, v = [], d = [], w = [], D = true, M = { consume: ce, enter: de, exit: V, attempt: be(he), check: be(Be), interrupt: be(Be, { interrupt: true }) }, N = { previous: null, code: null, containerState: {}, events: [], parser: n, sliceStream: H, sliceSerialize: Y, now: j, defineSkip: O, write: S }, T = c.tokenize.call(N, M), C;
  return c.resolveAll && v.push(c), N;
  function S(ue) {
    return d = je(d, ue), fe(), d[d.length - 1] !== null ? [] : (q(c, 0), N.events = X0(v, N.events, N), N.events);
  }
  function Y(ue, ve) {
    return ks(H(ue), ve);
  }
  function H(ue) {
    return ws(d, ue);
  }
  function j() {
    return Object.assign({}, o);
  }
  function O(ue) {
    g[ue.line] = ue.column, we();
  }
  function fe() {
    let ue;
    for (; o._index < d.length; ) {
      let ve = d[o._index];
      if (typeof ve == "string")
        for (ue = o._index, o._bufferIndex < 0 && (o._bufferIndex = 0); o._index === ue && o._bufferIndex < ve.length; )
          re(ve.charCodeAt(o._bufferIndex));
      else
        re(ve);
    }
  }
  function re(ue) {
    D = void 0, C = ue, T = T(ue);
  }
  function ce(ue) {
    Z(ue) ? (o.line++, o.column = 1, o.offset += ue === -3 ? 2 : 1, we()) : ue !== -1 && (o.column++, o.offset++), o._bufferIndex < 0 ? o._index++ : (o._bufferIndex++, o._bufferIndex === d[o._index].length && (o._bufferIndex = -1, o._index++)), N.previous = ue, D = true;
  }
  function de(ue, ve) {
    let xe = ve || {};
    return xe.type = ue, xe.start = j(), N.events.push(["enter", xe, N]), w.push(xe), xe;
  }
  function V(ue) {
    let ve = w.pop();
    return ve.end = j(), N.events.push(["exit", ve, N]), ve;
  }
  function he(ue, ve) {
    q(ue, ve.from);
  }
  function Be(ue, ve) {
    ve.restore();
  }
  function be(ue, ve) {
    return xe;
    function xe(qe, _, _e) {
      let c0, B, Ze, Qe;
      return Array.isArray(qe) ? e0(qe) : "tokenize" in qe ? e0([qe]) : E(qe);
      function E(Ye) {
        return Z0;
        function Z0(g0) {
          let C0 = g0 !== null && Ye[g0], M0 = g0 !== null && Ye.null, T0 = [...Array.isArray(C0) ? C0 : C0 ? [C0] : [], ...Array.isArray(M0) ? M0 : M0 ? [M0] : []];
          return e0(T0)(g0);
        }
      }
      function e0(Ye) {
        return c0 = Ye, B = 0, Ye.length === 0 ? _e : R0(Ye[B]);
      }
      function R0(Ye) {
        return Z0;
        function Z0(g0) {
          return Qe = Pe(), Ze = Ye, Ye.partial || (N.currentConstruct = Ye), Ye.name && N.parser.constructs.disable.null.includes(Ye.name) ? ot(g0) : Ye.tokenize.call(ve ? Object.assign(Object.create(N), ve) : N, M, xt, ot)(g0);
        }
      }
      function xt(Ye) {
        return D = true, ue(Ze, Qe), _;
      }
      function ot(Ye) {
        return D = true, Qe.restore(), ++B < c0.length ? R0(c0[B]) : _e;
      }
    }
  }
  function q(ue, ve) {
    ue.resolveAll && !v.includes(ue) && v.push(ue), ue.resolve && We(N.events, ve, N.events.length - ve, ue.resolve(N.events.slice(ve), N)), ue.resolveTo && (N.events = ue.resolveTo(N.events, N));
  }
  function Pe() {
    let ue = j(), ve = N.previous, xe = N.currentConstruct, qe = N.events.length, _ = Array.from(w);
    return { restore: _e, from: qe };
    function _e() {
      o = ue, N.previous = ve, N.currentConstruct = xe, N.events.length = qe, w = _, we();
    }
  }
  function we() {
    o.line in g && o.column < 2 && (o.column = g[o.line], o.offset += g[o.line] - 1);
  }
}
function ws(n, c) {
  let h = c.start._index, o = c.start._bufferIndex, g = c.end._index, v = c.end._bufferIndex, d;
  return h === g ? d = [n[h].slice(o, v)] : (d = n.slice(h, g), o > -1 && (d[0] = d[0].slice(o)), v > 0 && d.push(n[g].slice(0, v))), d;
}
function ks(n, c) {
  let h = -1, o = [], g;
  for (; ++h < n.length; ) {
    let v = n[h], d;
    if (typeof v == "string")
      d = v;
    else
      switch (v) {
        case -5: {
          d = "\r";
          break;
        }
        case -4: {
          d = `
`;
          break;
        }
        case -3: {
          d = `\r
`;
          break;
        }
        case -2: {
          d = c ? " " : "	";
          break;
        }
        case -1: {
          if (!c && g)
            continue;
          d = " ";
          break;
        }
        default:
          d = String.fromCharCode(v);
      }
    g = v === -2, o.push(d);
  }
  return o.join("");
}
var Tl = J(() => {
  ye();
  z0();
  Ft();
});
var Wn = {};
no(Wn, { contentInitial: () => As, disable: () => Es, document: () => Ss, flow: () => Bs, flowInitial: () => zs, insideSpan: () => Ts, string: () => Cs, text: () => Ms });
var Ss;
var As;
var zs;
var Bs;
var Cs;
var Ms;
var Ts;
var Es;
var El = J(() => {
  Vn();
  Un();
  Ss = { 42: Je, 43: Je, 45: Je, 48: Je, 49: Je, 50: Je, 51: Je, 52: Je, 53: Je, 54: Je, 55: Je, 56: Je, 57: Je, 62: dr }, As = { 91: Nn }, zs = { [-2]: It, [-1]: It, 32: It }, Bs = { 35: Ln, 42: lt, 45: [Ar, lt], 60: On, 61: Ar, 95: lt, 96: xr, 126: xr }, Cs = { 38: vr, 92: gr }, Ms = { [-5]: Lt, [-4]: Lt, [-3]: Lt, 33: Hn, 38: vr, 42: Nt, 60: [zn, Rn], 91: Pn, 92: [In, gr], 93: at, 95: Nt, 96: Bn }, Ts = { null: [Nt, Sl] }, Es = { null: [] };
});
function Dl(n = {}) {
  let c = sr([Wn].concat(n.extensions || [])), h = { defined: [], lazy: {}, constructs: c, content: o(Wa), document: o(Xa), flow: o(wl), string: o(Al), text: o(zl) };
  return h;
  function o(g) {
    return v;
    function v(d) {
      return Ml(h, g, d);
    }
  }
}
var Fl = J(() => {
  mr();
  ja();
  $a();
  kl();
  Un();
  Tl();
  El();
});
function Nl(n) {
  for (; !br(n); )
    ;
  return n;
}
var Il = J(() => {
  Cn();
});
function ql() {
  let n = 1, c = "", h = true, o;
  return g;
  function g(v, d, w) {
    let D = [], M, N, T, C, S;
    for (v = c + v.toString(d), T = 0, c = "", h && (v.charCodeAt(0) === 65279 && T++, h = void 0); T < v.length; ) {
      if (Ll.lastIndex = T, M = Ll.exec(v), C = M && M.index !== void 0 ? M.index : v.length, S = v.charCodeAt(C), !M) {
        c = v.slice(T);
        break;
      }
      if (S === 10 && T === C && o)
        D.push(-3), o = void 0;
      else
        switch (o && (D.push(-5), o = void 0), T < C && (D.push(v.slice(T, C)), n += C - T), S) {
          case 0: {
            D.push(65533), n++;
            break;
          }
          case 9: {
            for (N = Math.ceil(n / 4) * 4, D.push(-2); n++ < N; )
              D.push(-1);
            break;
          }
          case 10: {
            D.push(-4), n = 1;
            break;
          }
          default:
            o = true, n = 1;
        }
      T = C + 1;
    }
    return w && (o && D.push(-5), c && D.push(c), D.push(null)), D;
  }
}
var Ll;
var Ol = J(() => {
  Ll = /[\0\t\n\r]/g;
});
var Rl;
var Hl = J(() => {
  Ua();
  Fl();
  Il();
  Ol();
  Rl = function(n, c, h) {
    return typeof c != "string" && (h = c, c = void 0), Va(h)(Nl(Dl(h).document().write(ql()(n, c, true))));
  };
});
function Ns(n, c, h) {
  let o = this, g, v;
  return d;
  function d(T) {
    return !jn(T) || !Xl.call(o, o.previous) || Xn(o.events) ? h(T) : (n.enter("literalAutolink"), n.enter("literalAutolinkEmail"), w(T));
  }
  function w(T) {
    return jn(T) ? (n.consume(T), w) : T === 64 ? (n.consume(T), D) : h(T);
  }
  function D(T) {
    return T === 46 ? n.check(Fs, N, M)(T) : T === 45 || T === 95 || Oe(T) ? (v = true, n.consume(T), D) : N(T);
  }
  function M(T) {
    return n.consume(T), g = true, D;
  }
  function N(T) {
    return v && g && Xe(o.previous) ? (n.exit("literalAutolinkEmail"), n.exit("literalAutolink"), c(T)) : h(T);
  }
}
function Is(n, c, h) {
  let o = this;
  return g;
  function g(d) {
    return d !== 87 && d !== 119 || !jl.call(o, o.previous) || Xn(o.events) ? h(d) : (n.enter("literalAutolink"), n.enter("literalAutolinkWww"), n.check(Ds, n.attempt(Pl, n.attempt(Gl, v), h), h)(d));
  }
  function v(d) {
    return n.exit("literalAutolinkWww"), n.exit("literalAutolink"), c(d);
  }
}
function Ls(n, c, h) {
  let o = this, g = "", v = false;
  return d;
  function d(T) {
    return (T === 72 || T === 104) && Yl.call(o, o.previous) && !Xn(o.events) ? (n.enter("literalAutolink"), n.enter("literalAutolinkHttp"), g += String.fromCodePoint(T), n.consume(T), w) : h(T);
  }
  function w(T) {
    if (Xe(T) && g.length < 5)
      return g += String.fromCodePoint(T), n.consume(T), w;
    if (T === 58) {
      let C = g.toLowerCase();
      if (C === "http" || C === "https")
        return n.consume(T), D;
    }
    return h(T);
  }
  function D(T) {
    return T === 47 ? (n.consume(T), v ? M : (v = true, D)) : h(T);
  }
  function M(T) {
    return T === null || rt(T) || ze(T) || j0(T) || Dt(T) ? h(T) : n.attempt(Pl, n.attempt(Gl, N), h)(T);
  }
  function N(T) {
    return n.exit("literalAutolinkHttp"), n.exit("literalAutolink"), c(T);
  }
}
function qs(n, c, h) {
  let o = 0;
  return g;
  function g(d) {
    return (d === 87 || d === 119) && o < 3 ? (o++, n.consume(d), g) : d === 46 && o === 3 ? (n.consume(d), v) : h(d);
  }
  function v(d) {
    return d === null ? h(d) : c(d);
  }
}
function Os(n, c, h) {
  let o, g, v;
  return d;
  function d(M) {
    return M === 46 || M === 95 ? n.check(Vl, D, w)(M) : M === null || ze(M) || j0(M) || M !== 45 && Dt(M) ? D(M) : (v = true, n.consume(M), d);
  }
  function w(M) {
    return M === 95 ? o = true : (g = o, o = void 0), n.consume(M), d;
  }
  function D(M) {
    return g || o || !v ? h(M) : c(M);
  }
}
function Rs(n, c) {
  let h = 0, o = 0;
  return g;
  function g(d) {
    return d === 40 ? (h++, n.consume(d), g) : d === 41 && o < h ? v(d) : d === 33 || d === 34 || d === 38 || d === 39 || d === 41 || d === 42 || d === 44 || d === 46 || d === 58 || d === 59 || d === 60 || d === 63 || d === 93 || d === 95 || d === 126 ? n.check(Vl, c, v)(d) : d === null || ze(d) || j0(d) ? c(d) : (n.consume(d), g);
  }
  function v(d) {
    return d === 41 && o++, n.consume(d), g;
  }
}
function Hs(n, c, h) {
  return o;
  function o(w) {
    return w === 33 || w === 34 || w === 39 || w === 41 || w === 42 || w === 44 || w === 46 || w === 58 || w === 59 || w === 63 || w === 95 || w === 126 ? (n.consume(w), o) : w === 38 ? (n.consume(w), v) : w === 93 ? (n.consume(w), g) : w === 60 || w === null || ze(w) || j0(w) ? c(w) : h(w);
  }
  function g(w) {
    return w === null || w === 40 || w === 91 || ze(w) || j0(w) ? c(w) : o(w);
  }
  function v(w) {
    return Xe(w) ? d(w) : h(w);
  }
  function d(w) {
    return w === 59 ? (n.consume(w), o) : Xe(w) ? (n.consume(w), d) : h(w);
  }
}
function Ps(n, c, h) {
  return o;
  function o(v) {
    return n.consume(v), g;
  }
  function g(v) {
    return Oe(v) ? h(v) : c(v);
  }
}
function jl(n) {
  return n === null || n === 40 || n === 42 || n === 95 || n === 91 || n === 93 || n === 126 || ze(n);
}
function Yl(n) {
  return !Xe(n);
}
function Xl(n) {
  return !(n === 47 || jn(n));
}
function jn(n) {
  return n === 43 || n === 45 || n === 46 || n === 95 || Oe(n);
}
function Xn(n) {
  let c = n.length, h = false;
  for (; c--; ) {
    let o = n[c][1];
    if ((o.type === "labelLink" || o.type === "labelImage") && !o._balanced) {
      h = true;
      break;
    }
    if (o._gfmAutolinkLiteralWalkedInto) {
      h = false;
      break;
    }
  }
  return n.length > 0 && !h && (n[n.length - 1][1]._gfmAutolinkLiteralWalkedInto = true), h;
}
var Ds;
var Pl;
var Gl;
var Vl;
var Fs;
var Ul;
var Wl;
var O0;
var B0;
var Yn;
var ut;
var $l = J(() => {
  ye();
  Ds = { tokenize: qs, partial: true }, Pl = { tokenize: Os, partial: true }, Gl = { tokenize: Rs, partial: true }, Vl = { tokenize: Hs, partial: true }, Fs = { tokenize: Ps, partial: true }, Ul = { tokenize: Is, previous: jl }, Wl = { tokenize: Ls, previous: Yl }, O0 = { tokenize: Ns, previous: Xl }, B0 = {}, Yn = { text: B0 }, ut = 48;
  for (; ut < 123; )
    B0[ut] = O0, ut++, ut === 58 ? ut = 65 : ut === 91 && (ut = 97);
  B0[43] = O0;
  B0[45] = O0;
  B0[46] = O0;
  B0[95] = O0;
  B0[72] = [O0, Wl];
  B0[104] = [O0, Wl];
  B0[87] = [O0, Ul];
  B0[119] = [O0, Ul];
});
function Gs(n) {
  Zn.call(this, n, "http://");
}
function Vs(n) {
  Zn.call(this, n, "mailto:");
}
function Us(n) {
  Zn.call(this, n);
}
function Zn(n, c) {
  let h = this.sliceSerialize(n);
  this.tag('<a href="' + nt((c || "") + h) + '">'), this.raw(this.encode(h)), this.tag("</a>");
}
var $n;
var Zl = J(() => {
  Sn();
  $n = { exit: { literalAutolinkEmail: Vs, literalAutolinkHttp: Us, literalAutolinkWww: Gs } };
});
var Ql = J(() => {
  $l();
  Zl();
});
var Qn;
var Kl = J(() => {
  Qn = { enter: { strikethrough() {
    this.tag("<del>");
  } }, exit: { strikethrough() {
    this.tag("</del>");
  } } };
});
function Kn(n) {
  let h = (n || {}).singleTilde, o = { tokenize: v, resolveAll: g };
  return h == null && (h = true), { text: { 126: o }, insideSpan: { null: [o] }, attentionMarkers: { null: [126] } };
  function g(d, w) {
    let D = -1;
    for (; ++D < d.length; )
      if (d[D][0] === "enter" && d[D][1].type === "strikethroughSequenceTemporary" && d[D][1]._close) {
        let M = D;
        for (; M--; )
          if (d[M][0] === "exit" && d[M][1].type === "strikethroughSequenceTemporary" && d[M][1]._open && d[D][1].end.offset - d[D][1].start.offset === d[M][1].end.offset - d[M][1].start.offset) {
            d[D][1].type = "strikethroughSequence", d[M][1].type = "strikethroughSequence";
            let N = { type: "strikethrough", start: Object.assign({}, d[M][1].start), end: Object.assign({}, d[D][1].end) }, T = { type: "strikethroughText", start: Object.assign({}, d[M][1].end), end: Object.assign({}, d[D][1].start) }, C = [["enter", N, w], ["enter", d[M][1], w], ["exit", d[M][1], w], ["enter", T, w]], S = w.parser.constructs.insideSpan.null;
            S && We(C, C.length, 0, X0(S, d.slice(M + 1, D), w)), We(C, C.length, 0, [["exit", T, w], ["enter", d[D][1], w], ["exit", d[D][1], w], ["exit", N, w]]), We(d, M - 1, D - M + 3, C), D = M + C.length - 2;
            break;
          }
      }
    for (D = -1; ++D < d.length; )
      d[D][1].type === "strikethroughSequenceTemporary" && (d[D][1].type = "data");
    return d;
  }
  function v(d, w, D) {
    let M = this.previous, N = this.events, T = 0;
    return C;
    function C(Y) {
      return M === 126 && N[N.length - 1][1].type !== "characterEscape" ? D(Y) : (d.enter("strikethroughSequenceTemporary"), S(Y));
    }
    function S(Y) {
      let H = gt(M);
      if (Y === 126)
        return T > 1 ? D(Y) : (d.consume(Y), T++, S);
      if (T < 2 && !h)
        return D(Y);
      let j = d.exit("strikethroughSequenceTemporary"), O = gt(Y);
      return j._open = !O || O === 2 && !!H, j._close = !H || H === 2 && !!O, w(Y);
    }
  }
}
var Jl = J(() => {
  z0();
  An();
  Ft();
});
var _l = J(() => {
  Kl();
  Jl();
});
function Ws(n, c) {
  return c === "|" ? c : n;
}
var Jn;
var _n;
var eu = J(() => {
  Jn = { none: "", left: ' align="left"', right: ' align="right"', center: ' align="center"' }, _n = { enter: { table(n) {
    let c = n._align;
    this.lineEndingIfNeeded(), this.tag("<table>"), this.setData("tableAlign", c);
  }, tableBody() {
    this.tag("<tbody>");
  }, tableData() {
    let n = this.getData("tableAlign"), c = this.getData("tableColumn"), h = Jn[n[c]];
    h === void 0 ? this.buffer() : (this.lineEndingIfNeeded(), this.tag("<td" + h + ">"));
  }, tableHead() {
    this.lineEndingIfNeeded(), this.tag("<thead>");
  }, tableHeader() {
    let n = this.getData("tableAlign"), c = this.getData("tableColumn"), h = Jn[n[c]];
    this.lineEndingIfNeeded(), this.tag("<th" + h + ">");
  }, tableRow() {
    this.setData("tableColumn", 0), this.lineEndingIfNeeded(), this.tag("<tr>");
  } }, exit: { codeTextData(n) {
    let c = this.sliceSerialize(n);
    this.getData("tableAlign") && (c = c.replace(/\\([\\|])/g, Ws)), this.raw(this.encode(c));
  }, table() {
    this.setData("tableAlign"), this.setData("slurpAllLineEndings"), this.lineEndingIfNeeded(), this.tag("</table>");
  }, tableBody() {
    this.lineEndingIfNeeded(), this.tag("</tbody>");
  }, tableData() {
    let n = this.getData("tableAlign"), c = this.getData("tableColumn");
    c in n ? (this.tag("</td>"), this.setData("tableColumn", c + 1)) : this.resume();
  }, tableHead() {
    this.lineEndingIfNeeded(), this.tag("</thead>");
  }, tableHeader() {
    let n = this.getData("tableColumn");
    this.tag("</th>"), this.setData("tableColumn", n + 1);
  }, tableRow() {
    let n = this.getData("tableAlign"), c = this.getData("tableColumn");
    for (; c < n.length; )
      this.lineEndingIfNeeded(), this.tag("<td" + Jn[n[c]] + "></td>"), c++;
    this.setData("tableColumn", c), this.lineEndingIfNeeded(), this.tag("</tr>");
  } } };
});
function js(n, c, h, o) {
  let g = 0;
  if (!(h === 0 && o.length === 0)) {
    for (; g < n.map.length; ) {
      if (n.map[g][0] === c) {
        n.map[g][1] += h, n.map[g][2].push(...o);
        return;
      }
      g += 1;
    }
    n.map.push([c, h, o]);
  }
}
var zr;
var tu = J(() => {
  zr = class {
    constructor() {
      this.map = [];
    }
    add(c, h, o) {
      js(this, c, h, o);
    }
    consume(c) {
      if (this.map.sort((v, d) => v[0] - d[0]), this.map.length === 0)
        return;
      let h = this.map.length, o = [];
      for (; h > 0; )
        h -= 1, o.push(c.slice(this.map[h][0] + this.map[h][1])), o.push(this.map[h][2]), c.length = this.map[h][0];
      o.push([...c]), c.length = 0;
      let g = o.pop();
      for (; g; )
        c.push(...g), g = o.pop();
      this.map.length = 0;
    }
  };
});
function ru(n, c) {
  let h = false, o = [];
  for (; c < n.length; ) {
    let g = n[c];
    if (h) {
      if (g[0] === "enter")
        g[1].type === "tableContent" && o.push(n[c + 1][1].type === "tableDelimiterMarker" ? "left" : "none");
      else if (g[1].type === "tableContent") {
        if (n[c - 1][1].type === "tableDelimiterMarker") {
          let v = o.length - 1;
          o[v] = o[v] === "left" ? "center" : "right";
        }
      } else if (g[1].type === "tableDelimiterRow")
        break;
    } else
      g[0] === "enter" && g[1].type === "tableDelimiterRow" && (h = true);
    c += 1;
  }
  return o;
}
var nu = J(() => {
});
function Ys(n, c, h) {
  let o = this, g = 0, v = 0, d;
  return w;
  function w(q) {
    let Pe = o.events.length - 1;
    for (; Pe > -1; ) {
      let ve = o.events[Pe][1].type;
      if (ve === "lineEnding" || ve === "linePrefix")
        Pe--;
      else
        break;
    }
    let we = Pe > -1 ? o.events[Pe][1].type : null, ue = we === "tableHead" || we === "tableRow" ? V : D;
    return ue === V && o.parser.lazy[o.now().line] ? h(q) : ue(q);
  }
  function D(q) {
    return n.enter("tableHead"), n.enter("tableRow"), M(q);
  }
  function M(q) {
    return q === 124 || (d = true, v += 1), N(q);
  }
  function N(q) {
    return q === null ? h(q) : Z(q) ? v > 1 ? (v = 0, o.interrupt = true, n.exit("tableRow"), n.enter("lineEnding"), n.consume(q), n.exit("lineEnding"), S) : h(q) : se(q) ? le(n, N, "whitespace")(q) : (v += 1, d && (d = false, g += 1), q === 124 ? (n.enter("tableCellDivider"), n.consume(q), n.exit("tableCellDivider"), d = true, N) : (n.enter("data"), T(q)));
  }
  function T(q) {
    return q === null || q === 124 || ze(q) ? (n.exit("data"), N(q)) : (n.consume(q), q === 92 ? C : T);
  }
  function C(q) {
    return q === 92 || q === 124 ? (n.consume(q), T) : T(q);
  }
  function S(q) {
    return o.interrupt = false, o.parser.lazy[o.now().line] ? h(q) : (n.enter("tableDelimiterRow"), d = false, se(q) ? le(n, Y, "linePrefix", o.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(q) : Y(q));
  }
  function Y(q) {
    return q === 45 || q === 58 ? j(q) : q === 124 ? (d = true, n.enter("tableCellDivider"), n.consume(q), n.exit("tableCellDivider"), H) : de(q);
  }
  function H(q) {
    return se(q) ? le(n, j, "whitespace")(q) : j(q);
  }
  function j(q) {
    return q === 58 ? (v += 1, d = true, n.enter("tableDelimiterMarker"), n.consume(q), n.exit("tableDelimiterMarker"), O) : q === 45 ? (v += 1, O(q)) : q === null || Z(q) ? ce(q) : de(q);
  }
  function O(q) {
    return q === 45 ? (n.enter("tableDelimiterFiller"), fe(q)) : de(q);
  }
  function fe(q) {
    return q === 45 ? (n.consume(q), fe) : q === 58 ? (d = true, n.exit("tableDelimiterFiller"), n.enter("tableDelimiterMarker"), n.consume(q), n.exit("tableDelimiterMarker"), re) : (n.exit("tableDelimiterFiller"), re(q));
  }
  function re(q) {
    return se(q) ? le(n, ce, "whitespace")(q) : ce(q);
  }
  function ce(q) {
    return q === 124 ? Y(q) : q === null || Z(q) ? !d || g !== v ? de(q) : (n.exit("tableDelimiterRow"), n.exit("tableHead"), c(q)) : de(q);
  }
  function de(q) {
    return h(q);
  }
  function V(q) {
    return n.enter("tableRow"), he(q);
  }
  function he(q) {
    return q === 124 ? (n.enter("tableCellDivider"), n.consume(q), n.exit("tableCellDivider"), he) : q === null || Z(q) ? (n.exit("tableRow"), c(q)) : se(q) ? le(n, he, "whitespace")(q) : (n.enter("data"), Be(q));
  }
  function Be(q) {
    return q === null || q === 124 || ze(q) ? (n.exit("data"), he(q)) : (n.consume(q), q === 92 ? be : Be);
  }
  function be(q) {
    return q === 92 || q === 124 ? (n.consume(q), Be) : Be(q);
  }
}
function Xs(n, c) {
  let h = -1, o = true, g = 0, v = [0, 0, 0, 0], d = [0, 0, 0, 0], w = false, D = 0, M, N, T, C = new zr();
  for (; ++h < n.length; ) {
    let S = n[h], Y = S[1];
    S[0] === "enter" ? Y.type === "tableHead" ? (w = false, D !== 0 && (iu(C, c, D, M, N), N = void 0, D = 0), M = { type: "table", start: Object.assign({}, Y.start), end: Object.assign({}, Y.end) }, C.add(h, 0, [["enter", M, c]])) : Y.type === "tableRow" || Y.type === "tableDelimiterRow" ? (o = true, T = void 0, v = [0, 0, 0, 0], d = [0, h + 1, 0, 0], w && (w = false, N = { type: "tableBody", start: Object.assign({}, Y.start), end: Object.assign({}, Y.end) }, C.add(h, 0, [["enter", N, c]])), g = Y.type === "tableDelimiterRow" ? 2 : N ? 3 : 1) : g && (Y.type === "data" || Y.type === "tableDelimiterMarker" || Y.type === "tableDelimiterFiller") ? (o = false, d[2] === 0 && (v[1] !== 0 && (d[0] = d[1], T = Br(C, c, v, g, void 0, T), v = [0, 0, 0, 0]), d[2] = h)) : Y.type === "tableCellDivider" && (o ? o = false : (v[1] !== 0 && (d[0] = d[1], T = Br(C, c, v, g, void 0, T)), v = d, d = [v[1], h, 0, 0])) : Y.type === "tableHead" ? (w = true, D = h) : Y.type === "tableRow" || Y.type === "tableDelimiterRow" ? (D = h, v[1] !== 0 ? (d[0] = d[1], T = Br(C, c, v, g, h, T)) : d[1] !== 0 && (T = Br(C, c, d, g, h, T)), g = 0) : g && (Y.type === "data" || Y.type === "tableDelimiterMarker" || Y.type === "tableDelimiterFiller") && (d[3] = h);
  }
  for (D !== 0 && iu(C, c, D, M, N), C.consume(c.events), h = -1; ++h < c.events.length; ) {
    let S = c.events[h];
    S[0] === "enter" && S[1].type === "table" && (S[1]._align = ru(c.events, h));
  }
  return n;
}
function Br(n, c, h, o, g, v) {
  let d = o === 1 ? "tableHeader" : o === 2 ? "tableDelimiter" : "tableData", w = "tableContent";
  h[0] !== 0 && (v.end = Object.assign({}, vt(c.events, h[0])), n.add(h[0], 0, [["exit", v, c]]));
  let D = vt(c.events, h[1]);
  if (v = { type: d, start: Object.assign({}, D), end: Object.assign({}, D) }, n.add(h[1], 0, [["enter", v, c]]), h[2] !== 0) {
    let M = vt(c.events, h[2]), N = vt(c.events, h[3]), T = { type: w, start: Object.assign({}, M), end: Object.assign({}, N) };
    if (n.add(h[2], 0, [["enter", T, c]]), o !== 2) {
      let C = c.events[h[2]], S = c.events[h[3]];
      if (C[1].end = Object.assign({}, S[1].end), C[1].type = "chunkText", C[1].contentType = "text", h[3] > h[2] + 1) {
        let Y = h[2] + 1, H = h[3] - h[2] - 1;
        n.add(Y, H, []);
      }
    }
    n.add(h[3] + 1, 0, [["exit", T, c]]);
  }
  return g !== void 0 && (v.end = Object.assign({}, vt(c.events, g)), n.add(g, 0, [["exit", v, c]]), v = void 0), v;
}
function iu(n, c, h, o, g) {
  let v = [], d = vt(c.events, h);
  g && (g.end = Object.assign({}, d), v.push(["exit", g, c])), o.end = Object.assign({}, d), v.push(["exit", o, c]), n.add(h + 1, 0, v);
}
function vt(n, c) {
  let h = n[c], o = h[0] === "enter" ? "start" : "end";
  return h[1][o];
}
var ei;
var au = J(() => {
  He();
  ye();
  tu();
  nu();
  ei = { flow: { null: { tokenize: Ys, resolveAll: Xs } } };
});
var lu = J(() => {
  eu();
  au();
});
function uu(n, c) {
  let h = this.sliceSerialize(n);
  this.options.allowDangerousHtml && (h = h.replace(c, "&lt;$1$2")), this.raw(this.encode(h));
}
var ou;
var $s;
var su;
var hu = J(() => {
  ou = /<(\/?)(iframe|noembed|noframes|plaintext|script|style|title|textarea|xmp)(?=[\t\n\f\r />])/gi, $s = new RegExp("^" + ou.source, "i"), su = { exit: { htmlFlowData(n) {
    uu.call(this, n, ou);
  }, htmlTextData(n) {
    uu.call(this, n, $s);
  } } };
});
var ti;
var mu = J(() => {
  ti = { enter: { taskListCheck() {
    this.tag('<input type="checkbox" disabled="" ');
  } }, exit: { taskListCheck() {
    this.tag("/>");
  }, taskListCheckValueChecked() {
    this.tag('checked="" ');
  } } };
});
function Qs(n, c, h) {
  let o = this;
  return g;
  function g(D) {
    return o.previous !== null || !o._gfmTasklistFirstContentOfListItem ? h(D) : (n.enter("taskListCheck"), n.enter("taskListCheckMarker"), n.consume(D), n.exit("taskListCheckMarker"), v);
  }
  function v(D) {
    return ze(D) ? (n.enter("taskListCheckValueUnchecked"), n.consume(D), n.exit("taskListCheckValueUnchecked"), d) : D === 88 || D === 120 ? (n.enter("taskListCheckValueChecked"), n.consume(D), n.exit("taskListCheckValueChecked"), d) : h(D);
  }
  function d(D) {
    return D === 93 ? (n.enter("taskListCheckMarker"), n.consume(D), n.exit("taskListCheckMarker"), n.exit("taskListCheck"), w) : h(D);
  }
  function w(D) {
    return Z(D) ? c(D) : se(D) ? n.check({ tokenize: Ks }, c, h)(D) : h(D);
  }
}
function Ks(n, c, h) {
  return le(n, o, "whitespace");
  function o(g) {
    return g === null ? h(g) : c(g);
  }
}
var Zs;
var ri;
var cu = J(() => {
  He();
  ye();
  Zs = { tokenize: Qs }, ri = { text: { 91: Zs } };
});
var pu = J(() => {
  mu();
  cu();
});
function fu(n) {
  return sr([Yn, Kn(n), ei, ri]);
}
var du;
var gu = J(() => {
  mr();
  Ql();
  _l();
  lu();
  hu();
  pu();
  du = hr([$n, Qn, _n, su, ti]);
});
function _s(n, c, h) {
  let o = this, g = o.events[o.events.length - 1], v = g && g[1].type === "linePrefix" ? g[2].sliceSerialize(g[1], true).length : 0, d = 0;
  return w;
  function w(j) {
    return n.enter("mathFlow"), n.enter("mathFlowFence"), n.enter("mathFlowFenceSequence"), D(j);
  }
  function D(j) {
    return j === 36 ? (n.consume(j), d++, D) : (n.exit("mathFlowFenceSequence"), d < 2 ? h(j) : le(n, M, "whitespace")(j));
  }
  function M(j) {
    return j === null || Z(j) ? T(j) : (n.enter("mathFlowFenceMeta"), n.enter("chunkString", { contentType: "string" }), N(j));
  }
  function N(j) {
    return j === null || Z(j) ? (n.exit("chunkString"), n.exit("mathFlowFenceMeta"), T(j)) : j === 36 ? h(j) : (n.consume(j), N);
  }
  function T(j) {
    return n.exit("mathFlowFence"), o.interrupt ? c(j) : C(j);
  }
  function C(j) {
    return j === null ? Y(j) : Z(j) ? n.attempt(Js, n.attempt({ tokenize: H, partial: true }, Y, v ? le(n, C, "linePrefix", v + 1) : C), Y)(j) : (n.enter("mathFlowValue"), S(j));
  }
  function S(j) {
    return j === null || Z(j) ? (n.exit("mathFlowValue"), C(j)) : (n.consume(j), S);
  }
  function Y(j) {
    return n.exit("mathFlow"), c(j);
  }
  function H(j, O, fe) {
    let re = 0;
    return le(j, ce, "linePrefix", 4);
    function ce(he) {
      return j.enter("mathFlowFence"), j.enter("mathFlowFenceSequence"), de(he);
    }
    function de(he) {
      return he === 36 ? (j.consume(he), re++, de) : re < d ? fe(he) : (j.exit("mathFlowFenceSequence"), le(j, V, "whitespace")(he));
    }
    function V(he) {
      return he === null || Z(he) ? (j.exit("mathFlowFence"), O(he)) : fe(he);
    }
  }
}
function e4(n, c, h) {
  let o = this;
  return g;
  function g(d) {
    return n.enter("lineEnding"), n.consume(d), n.exit("lineEnding"), v;
  }
  function v(d) {
    return o.parser.lazy[o.now().line] ? h(d) : c(d);
  }
}
var vu;
var Js;
var xu = J(() => {
  He();
  ye();
  vu = { tokenize: _s, concrete: true }, Js = { tokenize: e4, partial: true };
});
function t4(n) {
  let c = n.length - 4, h = 3, o, g;
  if ((n[h][1].type === "lineEnding" || n[h][1].type === "space") && (n[c][1].type === "lineEnding" || n[c][1].type === "space")) {
    for (o = h; ++o < c; )
      if (n[o][1].type === "mathTextData") {
        n[c][1].type = "mathTextPadding", n[h][1].type = "mathTextPadding", h += 2, c -= 2;
        break;
      }
  }
  for (o = h - 1, c++; ++o <= c; )
    g === void 0 ? o !== c && n[o][1].type !== "lineEnding" && (g = o) : (o === c || n[o][1].type === "lineEnding") && (n[g][1].type = "mathTextData", o !== g + 2 && (n[g][1].end = n[o - 1][1].end, n.splice(g + 2, o - g - 2), c -= o - g - 2, o = g + 2), g = void 0);
  return n;
}
function r4(n) {
  return n !== 36 || this.events[this.events.length - 1][1].type === "characterEscape";
}
function n4(n, c, h) {
  let o = this, g = 0, v, d;
  return w;
  function w(C) {
    return n.enter("mathText"), n.enter("mathTextSequence"), D(C);
  }
  function D(C) {
    return C === 36 ? (n.consume(C), g++, D) : (n.exit("mathTextSequence"), M(C));
  }
  function M(C) {
    return C === null ? h(C) : C === 36 ? (d = n.enter("mathTextSequence"), v = 0, T(C)) : C === 32 ? (n.enter("space"), n.consume(C), n.exit("space"), M) : Z(C) ? (n.enter("lineEnding"), n.consume(C), n.exit("lineEnding"), M) : (n.enter("mathTextData"), N(C));
  }
  function N(C) {
    return C === null || C === 32 || C === 36 || Z(C) ? (n.exit("mathTextData"), M(C)) : (n.consume(C), N);
  }
  function T(C) {
    return C === 36 ? (n.consume(C), v++, T) : v === g ? (n.exit("mathTextSequence"), n.exit("mathText"), c(C)) : (d.type = "mathTextData", N(C));
  }
}
var bu;
var yu = J(() => {
  ye();
  bu = { tokenize: n4, resolve: t4, previous: r4 };
});
var ni;
var wu = J(() => {
  xu();
  yu();
  ni = { flow: { 36: vu }, text: { 36: bu } };
});
var ku = Ta((qt, ii) => {
  (function(c, h) {
    typeof qt == "object" && typeof ii == "object" ? ii.exports = h() : typeof define == "function" && define.amd ? define([], h) : typeof qt == "object" ? qt.katex = h() : c.katex = h();
  })(typeof self < "u" ? self : qt, function() {
    return function() {
      "use strict";
      var n = {};
      (function() {
        n.d = function(s, e) {
          for (var t in e)
            n.o(e, t) && !n.o(s, t) && Object.defineProperty(s, t, { enumerable: true, get: e[t] });
        };
      })(), function() {
        n.o = function(s, e) {
          return Object.prototype.hasOwnProperty.call(s, e);
        };
      }();
      var c = {};
      n.d(c, { default: function() {
        return Y1;
      } });
      var h = function s(e, t) {
        this.position = void 0;
        var r = "KaTeX parse error: " + e, i, a = t && t.loc;
        if (a && a.start <= a.end) {
          var u = a.lexer.input;
          i = a.start;
          var p = a.end;
          i === u.length ? r += " at end of input: " : r += " at position " + (i + 1) + ": ";
          var x = u.slice(i, p).replace(/[^]/g, "$&\u0332"), y;
          i > 15 ? y = "\u2026" + u.slice(i - 15, i) : y = u.slice(0, i);
          var z;
          p + 15 < u.length ? z = u.slice(p, p + 15) + "\u2026" : z = u.slice(p), r += y + x + z;
        }
        var I = new Error(r);
        return I.name = "ParseError", I.__proto__ = s.prototype, I.position = i, I;
      };
      h.prototype.__proto__ = Error.prototype;
      var o = h, g = function(e, t) {
        return e.indexOf(t) !== -1;
      }, v = function(e, t) {
        return e === void 0 ? t : e;
      }, d = /([A-Z])/g, w = function(e) {
        return e.replace(d, "-$1").toLowerCase();
      }, D = { "&": "&amp;", ">": "&gt;", "<": "&lt;", '"': "&quot;", "'": "&#x27;" }, M = /[&><"']/g;
      function N(s) {
        return String(s).replace(M, function(e) {
          return D[e];
        });
      }
      var T = function s(e) {
        return e.type === "ordgroup" || e.type === "color" ? e.body.length === 1 ? s(e.body[0]) : e : e.type === "font" ? s(e.body) : e;
      }, C = function(e) {
        var t = T(e);
        return t.type === "mathord" || t.type === "textord" || t.type === "atom";
      }, S = function(e) {
        if (!e)
          throw new Error("Expected non-null, but got " + String(e));
        return e;
      }, Y = function(e) {
        var t = /^\s*([^\\/#]*?)(?::|&#0*58|&#x0*3a)/i.exec(e);
        return t != null ? t[1] : "_relative";
      }, H = { contains: g, deflt: v, escape: N, hyphenate: w, getBaseElem: T, isCharacterBox: C, protocolFromUrl: Y }, j = function() {
        function s(t) {
          this.displayMode = void 0, this.output = void 0, this.leqno = void 0, this.fleqn = void 0, this.throwOnError = void 0, this.errorColor = void 0, this.macros = void 0, this.minRuleThickness = void 0, this.colorIsTextColor = void 0, this.strict = void 0, this.trust = void 0, this.maxSize = void 0, this.maxExpand = void 0, this.globalGroup = void 0, t = t || {}, this.displayMode = H.deflt(t.displayMode, false), this.output = H.deflt(t.output, "htmlAndMathml"), this.leqno = H.deflt(t.leqno, false), this.fleqn = H.deflt(t.fleqn, false), this.throwOnError = H.deflt(t.throwOnError, true), this.errorColor = H.deflt(t.errorColor, "#cc0000"), this.macros = t.macros || {}, this.minRuleThickness = Math.max(0, H.deflt(t.minRuleThickness, 0)), this.colorIsTextColor = H.deflt(t.colorIsTextColor, false), this.strict = H.deflt(t.strict, "warn"), this.trust = H.deflt(t.trust, false), this.maxSize = Math.max(0, H.deflt(t.maxSize, 1 / 0)), this.maxExpand = Math.max(0, H.deflt(t.maxExpand, 1e3)), this.globalGroup = H.deflt(t.globalGroup, false);
        }
        var e = s.prototype;
        return e.reportNonstrict = function(r, i, a) {
          var u = this.strict;
          if (typeof u == "function" && (u = u(r, i, a)), !(!u || u === "ignore")) {
            if (u === true || u === "error")
              throw new o("LaTeX-incompatible input and strict mode is set to 'error': " + (i + " [" + r + "]"), a);
            u === "warn" ? typeof console < "u" && console.warn("LaTeX-incompatible input and strict mode is set to 'warn': " + (i + " [" + r + "]")) : typeof console < "u" && console.warn("LaTeX-incompatible input and strict mode is set to " + ("unrecognized '" + u + "': " + i + " [" + r + "]"));
          }
        }, e.useStrictBehavior = function(r, i, a) {
          var u = this.strict;
          if (typeof u == "function")
            try {
              u = u(r, i, a);
            } catch {
              u = "error";
            }
          return !u || u === "ignore" ? false : u === true || u === "error" ? true : u === "warn" ? (typeof console < "u" && console.warn("LaTeX-incompatible input and strict mode is set to 'warn': " + (i + " [" + r + "]")), false) : (typeof console < "u" && console.warn("LaTeX-incompatible input and strict mode is set to " + ("unrecognized '" + u + "': " + i + " [" + r + "]")), false);
        }, e.isTrusted = function(r) {
          r.url && !r.protocol && (r.protocol = H.protocolFromUrl(r.url));
          var i = typeof this.trust == "function" ? this.trust(r) : this.trust;
          return !!i;
        }, s;
      }(), O = function() {
        function s(t, r, i) {
          this.id = void 0, this.size = void 0, this.cramped = void 0, this.id = t, this.size = r, this.cramped = i;
        }
        var e = s.prototype;
        return e.sup = function() {
          return q[Pe[this.id]];
        }, e.sub = function() {
          return q[we[this.id]];
        }, e.fracNum = function() {
          return q[ue[this.id]];
        }, e.fracDen = function() {
          return q[ve[this.id]];
        }, e.cramp = function() {
          return q[xe[this.id]];
        }, e.text = function() {
          return q[qe[this.id]];
        }, e.isTight = function() {
          return this.size >= 2;
        }, s;
      }(), fe = 0, re = 1, ce = 2, de = 3, V = 4, he = 5, Be = 6, be = 7, q = [new O(fe, 0, false), new O(re, 0, true), new O(ce, 1, false), new O(de, 1, true), new O(V, 2, false), new O(he, 2, true), new O(Be, 3, false), new O(be, 3, true)], Pe = [V, he, V, he, Be, be, Be, be], we = [he, he, he, he, be, be, be, be], ue = [ce, de, V, he, Be, be, Be, be], ve = [de, de, he, he, be, be, be, be], xe = [re, re, de, de, he, he, be, be], qe = [fe, re, ce, de, ce, de, ce, de], _ = { DISPLAY: q[fe], TEXT: q[ce], SCRIPT: q[V], SCRIPTSCRIPT: q[Be] }, _e = [{ name: "latin", blocks: [[256, 591], [768, 879]] }, { name: "cyrillic", blocks: [[1024, 1279]] }, { name: "armenian", blocks: [[1328, 1423]] }, { name: "brahmic", blocks: [[2304, 4255]] }, { name: "georgian", blocks: [[4256, 4351]] }, { name: "cjk", blocks: [[12288, 12543], [19968, 40879], [65280, 65376]] }, { name: "hangul", blocks: [[44032, 55215]] }];
      function c0(s) {
        for (var e = 0; e < _e.length; e++)
          for (var t = _e[e], r = 0; r < t.blocks.length; r++) {
            var i = t.blocks[r];
            if (s >= i[0] && s <= i[1])
              return t.name;
          }
        return null;
      }
      var B = [];
      _e.forEach(function(s) {
        return s.blocks.forEach(function(e) {
          return B.push.apply(B, e);
        });
      });
      function Ze(s) {
        for (var e = 0; e < B.length; e += 2)
          if (s >= B[e] && s <= B[e + 1])
            return true;
        return false;
      }
      var Qe = 80, E = function(e, t) {
        return "M95," + (622 + e + t) + `
c-2.7,0,-7.17,-2.7,-13.5,-8c-5.8,-5.3,-9.5,-10,-9.5,-14
c0,-2,0.3,-3.3,1,-4c1.3,-2.7,23.83,-20.7,67.5,-54
c44.2,-33.3,65.8,-50.3,66.5,-51c1.3,-1.3,3,-2,5,-2c4.7,0,8.7,3.3,12,10
s173,378,173,378c0.7,0,35.3,-71,104,-213c68.7,-142,137.5,-285,206.5,-429
c69,-144,104.5,-217.7,106.5,-221
l` + e / 2.075 + " -" + e + `
c5.3,-9.3,12,-14,20,-14
H400000v` + (40 + e) + `H845.2724
s-225.272,467,-225.272,467s-235,486,-235,486c-2.7,4.7,-9,7,-19,7
c-6,0,-10,-1,-12,-3s-194,-422,-194,-422s-65,47,-65,47z
M` + (834 + e) + " " + t + "h400000v" + (40 + e) + "h-400000z";
      }, e0 = function(e, t) {
        return "M263," + (601 + e + t) + `c0.7,0,18,39.7,52,119
c34,79.3,68.167,158.7,102.5,238c34.3,79.3,51.8,119.3,52.5,120
c340,-704.7,510.7,-1060.3,512,-1067
l` + e / 2.084 + " -" + e + `
c4.7,-7.3,11,-11,19,-11
H40000v` + (40 + e) + `H1012.3
s-271.3,567,-271.3,567c-38.7,80.7,-84,175,-136,283c-52,108,-89.167,185.3,-111.5,232
c-22.3,46.7,-33.8,70.3,-34.5,71c-4.7,4.7,-12.3,7,-23,7s-12,-1,-12,-1
s-109,-253,-109,-253c-72.7,-168,-109.3,-252,-110,-252c-10.7,8,-22,16.7,-34,26
c-22,17.3,-33.3,26,-34,26s-26,-26,-26,-26s76,-59,76,-59s76,-60,76,-60z
M` + (1001 + e) + " " + t + "h400000v" + (40 + e) + "h-400000z";
      }, R0 = function(e, t) {
        return "M983 " + (10 + e + t) + `
l` + e / 3.13 + " -" + e + `
c4,-6.7,10,-10,18,-10 H400000v` + (40 + e) + `
H1013.1s-83.4,268,-264.1,840c-180.7,572,-277,876.3,-289,913c-4.7,4.7,-12.7,7,-24,7
s-12,0,-12,0c-1.3,-3.3,-3.7,-11.7,-7,-25c-35.3,-125.3,-106.7,-373.3,-214,-744
c-10,12,-21,25,-33,39s-32,39,-32,39c-6,-5.3,-15,-14,-27,-26s25,-30,25,-30
c26.7,-32.7,52,-63,76,-91s52,-60,52,-60s208,722,208,722
c56,-175.3,126.3,-397.3,211,-666c84.7,-268.7,153.8,-488.2,207.5,-658.5
c53.7,-170.3,84.5,-266.8,92.5,-289.5z
M` + (1001 + e) + " " + t + "h400000v" + (40 + e) + "h-400000z";
      }, xt = function(e, t) {
        return "M424," + (2398 + e + t) + `
c-1.3,-0.7,-38.5,-172,-111.5,-514c-73,-342,-109.8,-513.3,-110.5,-514
c0,-2,-10.7,14.3,-32,49c-4.7,7.3,-9.8,15.7,-15.5,25c-5.7,9.3,-9.8,16,-12.5,20
s-5,7,-5,7c-4,-3.3,-8.3,-7.7,-13,-13s-13,-13,-13,-13s76,-122,76,-122s77,-121,77,-121
s209,968,209,968c0,-2,84.7,-361.7,254,-1079c169.3,-717.3,254.7,-1077.7,256,-1081
l` + e / 4.223 + " -" + e + `c4,-6.7,10,-10,18,-10 H400000
v` + (40 + e) + `H1014.6
s-87.3,378.7,-272.6,1166c-185.3,787.3,-279.3,1182.3,-282,1185
c-2,6,-10,9,-24,9
c-8,0,-12,-0.7,-12,-2z M` + (1001 + e) + " " + t + `
h400000v` + (40 + e) + "h-400000z";
      }, ot = function(e, t) {
        return "M473," + (2713 + e + t) + `
c339.3,-1799.3,509.3,-2700,510,-2702 l` + e / 5.298 + " -" + e + `
c3.3,-7.3,9.3,-11,18,-11 H400000v` + (40 + e) + `H1017.7
s-90.5,478,-276.2,1466c-185.7,988,-279.5,1483,-281.5,1485c-2,6,-10,9,-24,9
c-8,0,-12,-0.7,-12,-2c0,-1.3,-5.3,-32,-16,-92c-50.7,-293.3,-119.7,-693.3,-207,-1200
c0,-1.3,-5.3,8.7,-16,30c-10.7,21.3,-21.3,42.7,-32,64s-16,33,-16,33s-26,-26,-26,-26
s76,-153,76,-153s77,-151,77,-151c0.7,0.7,35.7,202,105,604c67.3,400.7,102,602.7,104,
606zM` + (1001 + e) + " " + t + "h400000v" + (40 + e) + "H1017.7z";
      }, Ye = function(e) {
        var t = e / 2;
        return "M400000 " + e + " H0 L" + t + " 0 l65 45 L145 " + (e - 80) + " H400000z";
      }, Z0 = function(e, t, r) {
        var i = r - 54 - t - e;
        return "M702 " + (e + t) + "H400000" + (40 + e) + `
H742v` + i + `l-4 4-4 4c-.667.7 -2 1.5-4 2.5s-4.167 1.833-6.5 2.5-5.5 1-9.5 1
h-12l-28-84c-16.667-52-96.667 -294.333-240-727l-212 -643 -85 170
c-4-3.333-8.333-7.667-13 -13l-13-13l77-155 77-156c66 199.333 139 419.667
219 661 l218 661zM702 ` + t + "H400000v" + (40 + e) + "H742z";
      }, g0 = function(e, t, r) {
        t = 1e3 * t;
        var i = "";
        switch (e) {
          case "sqrtMain":
            i = E(t, Qe);
            break;
          case "sqrtSize1":
            i = e0(t, Qe);
            break;
          case "sqrtSize2":
            i = R0(t, Qe);
            break;
          case "sqrtSize3":
            i = xt(t, Qe);
            break;
          case "sqrtSize4":
            i = ot(t, Qe);
            break;
          case "sqrtTall":
            i = Z0(t, Qe, r);
        }
        return i;
      }, C0 = function(e, t) {
        switch (e) {
          case "\u239C":
            return "M291 0 H417 V" + t + " H291z M291 0 H417 V" + t + " H291z";
          case "\u2223":
            return "M145 0 H188 V" + t + " H145z M145 0 H188 V" + t + " H145z";
          case "\u2225":
            return "M145 0 H188 V" + t + " H145z M145 0 H188 V" + t + " H145z" + ("M367 0 H410 V" + t + " H367z M367 0 H410 V" + t + " H367z");
          case "\u239F":
            return "M457 0 H583 V" + t + " H457z M457 0 H583 V" + t + " H457z";
          case "\u23A2":
            return "M319 0 H403 V" + t + " H319z M319 0 H403 V" + t + " H319z";
          case "\u23A5":
            return "M263 0 H347 V" + t + " H263z M263 0 H347 V" + t + " H263z";
          case "\u23AA":
            return "M384 0 H504 V" + t + " H384z M384 0 H504 V" + t + " H384z";
          case "\u23D0":
            return "M312 0 H355 V" + t + " H312z M312 0 H355 V" + t + " H312z";
          case "\u2016":
            return "M257 0 H300 V" + t + " H257z M257 0 H300 V" + t + " H257z" + ("M478 0 H521 V" + t + " H478z M478 0 H521 V" + t + " H478z");
          default:
            return "";
        }
      }, M0 = { doubleleftarrow: `M262 157
l10-10c34-36 62.7-77 86-123 3.3-8 5-13.3 5-16 0-5.3-6.7-8-20-8-7.3
 0-12.2.5-14.5 1.5-2.3 1-4.8 4.5-7.5 10.5-49.3 97.3-121.7 169.3-217 216-28
 14-57.3 25-88 33-6.7 2-11 3.8-13 5.5-2 1.7-3 4.2-3 7.5s1 5.8 3 7.5
c2 1.7 6.3 3.5 13 5.5 68 17.3 128.2 47.8 180.5 91.5 52.3 43.7 93.8 96.2 124.5
 157.5 9.3 8 15.3 12.3 18 13h6c12-.7 18-4 18-10 0-2-1.7-7-5-15-23.3-46-52-87
-86-123l-10-10h399738v-40H218c328 0 0 0 0 0l-10-8c-26.7-20-65.7-43-117-69 2.7
-2 6-3.7 10-5 36.7-16 72.3-37.3 107-64l10-8h399782v-40z
m8 0v40h399730v-40zm0 194v40h399730v-40z`, doublerightarrow: `M399738 392l
-10 10c-34 36-62.7 77-86 123-3.3 8-5 13.3-5 16 0 5.3 6.7 8 20 8 7.3 0 12.2-.5
 14.5-1.5 2.3-1 4.8-4.5 7.5-10.5 49.3-97.3 121.7-169.3 217-216 28-14 57.3-25 88
-33 6.7-2 11-3.8 13-5.5 2-1.7 3-4.2 3-7.5s-1-5.8-3-7.5c-2-1.7-6.3-3.5-13-5.5-68
-17.3-128.2-47.8-180.5-91.5-52.3-43.7-93.8-96.2-124.5-157.5-9.3-8-15.3-12.3-18
-13h-6c-12 .7-18 4-18 10 0 2 1.7 7 5 15 23.3 46 52 87 86 123l10 10H0v40h399782
c-328 0 0 0 0 0l10 8c26.7 20 65.7 43 117 69-2.7 2-6 3.7-10 5-36.7 16-72.3 37.3
-107 64l-10 8H0v40zM0 157v40h399730v-40zm0 194v40h399730v-40z`, leftarrow: `M400000 241H110l3-3c68.7-52.7 113.7-120
 135-202 4-14.7 6-23 6-25 0-7.3-7-11-21-11-8 0-13.2.8-15.5 2.5-2.3 1.7-4.2 5.8
-5.5 12.5-1.3 4.7-2.7 10.3-4 17-12 48.7-34.8 92-68.5 130S65.3 228.3 18 247
c-10 4-16 7.7-18 11 0 8.7 6 14.3 18 17 47.3 18.7 87.8 47 121.5 85S196 441.3 208
 490c.7 2 1.3 5 2 9s1.2 6.7 1.5 8c.3 1.3 1 3.3 2 6s2.2 4.5 3.5 5.5c1.3 1 3.3
 1.8 6 2.5s6 1 10 1c14 0 21-3.7 21-11 0-2-2-10.3-6-25-20-79.3-65-146.7-135-202
 l-3-3h399890zM100 241v40h399900v-40z`, leftbrace: `M6 548l-6-6v-35l6-11c56-104 135.3-181.3 238-232 57.3-28.7 117
-45 179-50h399577v120H403c-43.3 7-81 15-113 26-100.7 33-179.7 91-237 174-2.7
 5-6 9-10 13-.7 1-7.3 1-20 1H6z`, leftbraceunder: `M0 6l6-6h17c12.688 0 19.313.3 20 1 4 4 7.313 8.3 10 13
 35.313 51.3 80.813 93.8 136.5 127.5 55.688 33.7 117.188 55.8 184.5 66.5.688
 0 2 .3 4 1 18.688 2.7 76 4.3 172 5h399450v120H429l-6-1c-124.688-8-235-61.7
-331-161C60.687 138.7 32.312 99.3 7 54L0 41V6z`, leftgroup: `M400000 80
H435C64 80 168.3 229.4 21 260c-5.9 1.2-18 0-18 0-2 0-3-1-3-3v-38C76 61 257 0
 435 0h399565z`, leftgroupunder: `M400000 262
H435C64 262 168.3 112.6 21 82c-5.9-1.2-18 0-18 0-2 0-3 1-3 3v38c76 158 257 219
 435 219h399565z`, leftharpoon: `M0 267c.7 5.3 3 10 7 14h399993v-40H93c3.3
-3.3 10.2-9.5 20.5-18.5s17.8-15.8 22.5-20.5c50.7-52 88-110.3 112-175 4-11.3 5
-18.3 3-21-1.3-4-7.3-6-18-6-8 0-13 .7-15 2s-4.7 6.7-8 16c-42 98.7-107.3 174.7
-196 228-6.7 4.7-10.7 8-12 10-1.3 2-2 5.7-2 11zm100-26v40h399900v-40z`, leftharpoonplus: `M0 267c.7 5.3 3 10 7 14h399993v-40H93c3.3-3.3 10.2-9.5
 20.5-18.5s17.8-15.8 22.5-20.5c50.7-52 88-110.3 112-175 4-11.3 5-18.3 3-21-1.3
-4-7.3-6-18-6-8 0-13 .7-15 2s-4.7 6.7-8 16c-42 98.7-107.3 174.7-196 228-6.7 4.7
-10.7 8-12 10-1.3 2-2 5.7-2 11zm100-26v40h399900v-40zM0 435v40h400000v-40z
m0 0v40h400000v-40z`, leftharpoondown: `M7 241c-4 4-6.333 8.667-7 14 0 5.333.667 9 2 11s5.333
 5.333 12 10c90.667 54 156 130 196 228 3.333 10.667 6.333 16.333 9 17 2 .667 5
 1 9 1h5c10.667 0 16.667-2 18-6 2-2.667 1-9.667-3-21-32-87.333-82.667-157.667
-152-211l-3-3h399907v-40zM93 281 H400000 v-40L7 241z`, leftharpoondownplus: `M7 435c-4 4-6.3 8.7-7 14 0 5.3.7 9 2 11s5.3 5.3 12
 10c90.7 54 156 130 196 228 3.3 10.7 6.3 16.3 9 17 2 .7 5 1 9 1h5c10.7 0 16.7
-2 18-6 2-2.7 1-9.7-3-21-32-87.3-82.7-157.7-152-211l-3-3h399907v-40H7zm93 0
v40h399900v-40zM0 241v40h399900v-40zm0 0v40h399900v-40z`, lefthook: `M400000 281 H103s-33-11.2-61-33.5S0 197.3 0 164s14.2-61.2 42.5
-83.5C70.8 58.2 104 47 142 47 c16.7 0 25 6.7 25 20 0 12-8.7 18.7-26 20-40 3.3
-68.7 15.7-86 37-10 12-15 25.3-15 40 0 22.7 9.8 40.7 29.5 54 19.7 13.3 43.5 21
 71.5 23h399859zM103 281v-40h399897v40z`, leftlinesegment: `M40 281 V428 H0 V94 H40 V241 H400000 v40z
M40 281 V428 H0 V94 H40 V241 H400000 v40z`, leftmapsto: `M40 281 V448H0V74H40V241H400000v40z
M40 281 V448H0V74H40V241H400000v40z`, leftToFrom: `M0 147h400000v40H0zm0 214c68 40 115.7 95.7 143 167h22c15.3 0 23
-.3 23-1 0-1.3-5.3-13.7-16-37-18-35.3-41.3-69-70-101l-7-8h399905v-40H95l7-8
c28.7-32 52-65.7 70-101 10.7-23.3 16-35.7 16-37 0-.7-7.7-1-23-1h-22C115.7 265.3
 68 321 0 361zm0-174v-40h399900v40zm100 154v40h399900v-40z`, longequal: `M0 50 h400000 v40H0z m0 194h40000v40H0z
M0 50 h400000 v40H0z m0 194h40000v40H0z`, midbrace: `M200428 334
c-100.7-8.3-195.3-44-280-108-55.3-42-101.7-93-139-153l-9-14c-2.7 4-5.7 8.7-9 14
-53.3 86.7-123.7 153-211 199-66.7 36-137.3 56.3-212 62H0V214h199568c178.3-11.7
 311.7-78.3 403-201 6-8 9.7-12 11-12 .7-.7 6.7-1 18-1s17.3.3 18 1c1.3 0 5 4 11
 12 44.7 59.3 101.3 106.3 170 141s145.3 54.3 229 60h199572v120z`, midbraceunder: `M199572 214
c100.7 8.3 195.3 44 280 108 55.3 42 101.7 93 139 153l9 14c2.7-4 5.7-8.7 9-14
 53.3-86.7 123.7-153 211-199 66.7-36 137.3-56.3 212-62h199568v120H200432c-178.3
 11.7-311.7 78.3-403 201-6 8-9.7 12-11 12-.7.7-6.7 1-18 1s-17.3-.3-18-1c-1.3 0
-5-4-11-12-44.7-59.3-101.3-106.3-170-141s-145.3-54.3-229-60H0V214z`, oiintSize1: `M512.6 71.6c272.6 0 320.3 106.8 320.3 178.2 0 70.8-47.7 177.6
-320.3 177.6S193.1 320.6 193.1 249.8c0-71.4 46.9-178.2 319.5-178.2z
m368.1 178.2c0-86.4-60.9-215.4-368.1-215.4-306.4 0-367.3 129-367.3 215.4 0 85.8
60.9 214.8 367.3 214.8 307.2 0 368.1-129 368.1-214.8z`, oiintSize2: `M757.8 100.1c384.7 0 451.1 137.6 451.1 230 0 91.3-66.4 228.8
-451.1 228.8-386.3 0-452.7-137.5-452.7-228.8 0-92.4 66.4-230 452.7-230z
m502.4 230c0-111.2-82.4-277.2-502.4-277.2s-504 166-504 277.2
c0 110 84 276 504 276s502.4-166 502.4-276z`, oiiintSize1: `M681.4 71.6c408.9 0 480.5 106.8 480.5 178.2 0 70.8-71.6 177.6
-480.5 177.6S202.1 320.6 202.1 249.8c0-71.4 70.5-178.2 479.3-178.2z
m525.8 178.2c0-86.4-86.8-215.4-525.7-215.4-437.9 0-524.7 129-524.7 215.4 0
85.8 86.8 214.8 524.7 214.8 438.9 0 525.7-129 525.7-214.8z`, oiiintSize2: `M1021.2 53c603.6 0 707.8 165.8 707.8 277.2 0 110-104.2 275.8
-707.8 275.8-606 0-710.2-165.8-710.2-275.8C311 218.8 415.2 53 1021.2 53z
m770.4 277.1c0-131.2-126.4-327.6-770.5-327.6S248.4 198.9 248.4 330.1
c0 130 128.8 326.4 772.7 326.4s770.5-196.4 770.5-326.4z`, rightarrow: `M0 241v40h399891c-47.3 35.3-84 78-110 128
-16.7 32-27.7 63.7-33 95 0 1.3-.2 2.7-.5 4-.3 1.3-.5 2.3-.5 3 0 7.3 6.7 11 20
 11 8 0 13.2-.8 15.5-2.5 2.3-1.7 4.2-5.5 5.5-11.5 2-13.3 5.7-27 11-41 14.7-44.7
 39-84.5 73-119.5s73.7-60.2 119-75.5c6-2 9-5.7 9-11s-3-9-9-11c-45.3-15.3-85
-40.5-119-75.5s-58.3-74.8-73-119.5c-4.7-14-8.3-27.3-11-40-1.3-6.7-3.2-10.8-5.5
-12.5-2.3-1.7-7.5-2.5-15.5-2.5-14 0-21 3.7-21 11 0 2 2 10.3 6 25 20.7 83.3 67
 151.7 139 205zm0 0v40h399900v-40z`, rightbrace: `M400000 542l
-6 6h-17c-12.7 0-19.3-.3-20-1-4-4-7.3-8.3-10-13-35.3-51.3-80.8-93.8-136.5-127.5
s-117.2-55.8-184.5-66.5c-.7 0-2-.3-4-1-18.7-2.7-76-4.3-172-5H0V214h399571l6 1
c124.7 8 235 61.7 331 161 31.3 33.3 59.7 72.7 85 118l7 13v35z`, rightbraceunder: `M399994 0l6 6v35l-6 11c-56 104-135.3 181.3-238 232-57.3
 28.7-117 45-179 50H-300V214h399897c43.3-7 81-15 113-26 100.7-33 179.7-91 237
-174 2.7-5 6-9 10-13 .7-1 7.3-1 20-1h17z`, rightgroup: `M0 80h399565c371 0 266.7 149.4 414 180 5.9 1.2 18 0 18 0 2 0
 3-1 3-3v-38c-76-158-257-219-435-219H0z`, rightgroupunder: `M0 262h399565c371 0 266.7-149.4 414-180 5.9-1.2 18 0 18
 0 2 0 3 1 3 3v38c-76 158-257 219-435 219H0z`, rightharpoon: `M0 241v40h399993c4.7-4.7 7-9.3 7-14 0-9.3
-3.7-15.3-11-18-92.7-56.7-159-133.7-199-231-3.3-9.3-6-14.7-8-16-2-1.3-7-2-15-2
-10.7 0-16.7 2-18 6-2 2.7-1 9.7 3 21 15.3 42 36.7 81.8 64 119.5 27.3 37.7 58
 69.2 92 94.5zm0 0v40h399900v-40z`, rightharpoonplus: `M0 241v40h399993c4.7-4.7 7-9.3 7-14 0-9.3-3.7-15.3-11
-18-92.7-56.7-159-133.7-199-231-3.3-9.3-6-14.7-8-16-2-1.3-7-2-15-2-10.7 0-16.7
 2-18 6-2 2.7-1 9.7 3 21 15.3 42 36.7 81.8 64 119.5 27.3 37.7 58 69.2 92 94.5z
m0 0v40h399900v-40z m100 194v40h399900v-40zm0 0v40h399900v-40z`, rightharpoondown: `M399747 511c0 7.3 6.7 11 20 11 8 0 13-.8 15-2.5s4.7-6.8
 8-15.5c40-94 99.3-166.3 178-217 13.3-8 20.3-12.3 21-13 5.3-3.3 8.5-5.8 9.5
-7.5 1-1.7 1.5-5.2 1.5-10.5s-2.3-10.3-7-15H0v40h399908c-34 25.3-64.7 57-92 95
-27.3 38-48.7 77.7-64 119-3.3 8.7-5 14-5 16zM0 241v40h399900v-40z`, rightharpoondownplus: `M399747 705c0 7.3 6.7 11 20 11 8 0 13-.8
 15-2.5s4.7-6.8 8-15.5c40-94 99.3-166.3 178-217 13.3-8 20.3-12.3 21-13 5.3-3.3
 8.5-5.8 9.5-7.5 1-1.7 1.5-5.2 1.5-10.5s-2.3-10.3-7-15H0v40h399908c-34 25.3
-64.7 57-92 95-27.3 38-48.7 77.7-64 119-3.3 8.7-5 14-5 16zM0 435v40h399900v-40z
m0-194v40h400000v-40zm0 0v40h400000v-40z`, righthook: `M399859 241c-764 0 0 0 0 0 40-3.3 68.7-15.7 86-37 10-12 15-25.3
 15-40 0-22.7-9.8-40.7-29.5-54-19.7-13.3-43.5-21-71.5-23-17.3-1.3-26-8-26-20 0
-13.3 8.7-20 26-20 38 0 71 11.2 99 33.5 0 0 7 5.6 21 16.7 14 11.2 21 33.5 21
 66.8s-14 61.2-42 83.5c-28 22.3-61 33.5-99 33.5L0 241z M0 281v-40h399859v40z`, rightlinesegment: `M399960 241 V94 h40 V428 h-40 V281 H0 v-40z
M399960 241 V94 h40 V428 h-40 V281 H0 v-40z`, rightToFrom: `M400000 167c-70.7-42-118-97.7-142-167h-23c-15.3 0-23 .3-23
 1 0 1.3 5.3 13.7 16 37 18 35.3 41.3 69 70 101l7 8H0v40h399905l-7 8c-28.7 32
-52 65.7-70 101-10.7 23.3-16 35.7-16 37 0 .7 7.7 1 23 1h23c24-69.3 71.3-125 142
-167z M100 147v40h399900v-40zM0 341v40h399900v-40z`, twoheadleftarrow: `M0 167c68 40
 115.7 95.7 143 167h22c15.3 0 23-.3 23-1 0-1.3-5.3-13.7-16-37-18-35.3-41.3-69
-70-101l-7-8h125l9 7c50.7 39.3 85 86 103 140h46c0-4.7-6.3-18.7-19-42-18-35.3
-40-67.3-66-96l-9-9h399716v-40H284l9-9c26-28.7 48-60.7 66-96 12.7-23.333 19
-37.333 19-42h-46c-18 54-52.3 100.7-103 140l-9 7H95l7-8c28.7-32 52-65.7 70-101
 10.7-23.333 16-35.7 16-37 0-.7-7.7-1-23-1h-22C115.7 71.3 68 127 0 167z`, twoheadrightarrow: `M400000 167
c-68-40-115.7-95.7-143-167h-22c-15.3 0-23 .3-23 1 0 1.3 5.3 13.7 16 37 18 35.3
 41.3 69 70 101l7 8h-125l-9-7c-50.7-39.3-85-86-103-140h-46c0 4.7 6.3 18.7 19 42
 18 35.3 40 67.3 66 96l9 9H0v40h399716l-9 9c-26 28.7-48 60.7-66 96-12.7 23.333
-19 37.333-19 42h46c18-54 52.3-100.7 103-140l9-7h125l-7 8c-28.7 32-52 65.7-70
 101-10.7 23.333-16 35.7-16 37 0 .7 7.7 1 23 1h22c27.3-71.3 75-127 143-167z`, tilde1: `M200 55.538c-77 0-168 73.953-177 73.953-3 0-7
-2.175-9-5.437L2 97c-1-2-2-4-2-6 0-4 2-7 5-9l20-12C116 12 171 0 207 0c86 0
 114 68 191 68 78 0 168-68 177-68 4 0 7 2 9 5l12 19c1 2.175 2 4.35 2 6.525 0
 4.35-2 7.613-5 9.788l-19 13.05c-92 63.077-116.937 75.308-183 76.128
-68.267.847-113-73.952-191-73.952z`, tilde2: `M344 55.266c-142 0-300.638 81.316-311.5 86.418
-8.01 3.762-22.5 10.91-23.5 5.562L1 120c-1-2-1-3-1-4 0-5 3-9 8-10l18.4-9C160.9
 31.9 283 0 358 0c148 0 188 122 331 122s314-97 326-97c4 0 8 2 10 7l7 21.114
c1 2.14 1 3.21 1 4.28 0 5.347-3 9.626-7 10.696l-22.3 12.622C852.6 158.372 751
 181.476 676 181.476c-149 0-189-126.21-332-126.21z`, tilde3: `M786 59C457 59 32 175.242 13 175.242c-6 0-10-3.457
-11-10.37L.15 138c-1-7 3-12 10-13l19.2-6.4C378.4 40.7 634.3 0 804.3 0c337 0
 411.8 157 746.8 157 328 0 754-112 773-112 5 0 10 3 11 9l1 14.075c1 8.066-.697
 16.595-6.697 17.492l-21.052 7.31c-367.9 98.146-609.15 122.696-778.15 122.696
 -338 0-409-156.573-744-156.573z`, tilde4: `M786 58C457 58 32 177.487 13 177.487c-6 0-10-3.345
-11-10.035L.15 143c-1-7 3-12 10-13l22-6.7C381.2 35 637.15 0 807.15 0c337 0 409
 177 744 177 328 0 754-127 773-127 5 0 10 3 11 9l1 14.794c1 7.805-3 13.38-9
 14.495l-20.7 5.574c-366.85 99.79-607.3 139.372-776.3 139.372-338 0-409
 -175.236-744-175.236z`, vec: `M377 20c0-5.333 1.833-10 5.5-14S391 0 397 0c4.667 0 8.667 1.667 12 5
3.333 2.667 6.667 9 10 19 6.667 24.667 20.333 43.667 41 57 7.333 4.667 11
10.667 11 18 0 6-1 10-3 12s-6.667 5-14 9c-28.667 14.667-53.667 35.667-75 63
-1.333 1.333-3.167 3.5-5.5 6.5s-4 4.833-5 5.5c-1 .667-2.5 1.333-4.5 2s-4.333 1
-7 1c-4.667 0-9.167-1.833-13.5-5.5S337 184 337 178c0-12.667 15.667-32.333 47-59
H213l-171-1c-8.667-6-13-12.333-13-19 0-4.667 4.333-11.333 13-20h359
c-16-25.333-24-45-24-59z`, widehat1: `M529 0h5l519 115c5 1 9 5 9 10 0 1-1 2-1 3l-4 22
c-1 5-5 9-11 9h-2L532 67 19 159h-2c-5 0-9-4-11-9l-5-22c-1-6 2-12 8-13z`, widehat2: `M1181 0h2l1171 176c6 0 10 5 10 11l-2 23c-1 6-5 10
-11 10h-1L1182 67 15 220h-1c-6 0-10-4-11-10l-2-23c-1-6 4-11 10-11z`, widehat3: `M1181 0h2l1171 236c6 0 10 5 10 11l-2 23c-1 6-5 10
-11 10h-1L1182 67 15 280h-1c-6 0-10-4-11-10l-2-23c-1-6 4-11 10-11z`, widehat4: `M1181 0h2l1171 296c6 0 10 5 10 11l-2 23c-1 6-5 10
-11 10h-1L1182 67 15 340h-1c-6 0-10-4-11-10l-2-23c-1-6 4-11 10-11z`, widecheck1: `M529,159h5l519,-115c5,-1,9,-5,9,-10c0,-1,-1,-2,-1,-3l-4,-22c-1,
-5,-5,-9,-11,-9h-2l-512,92l-513,-92h-2c-5,0,-9,4,-11,9l-5,22c-1,6,2,12,8,13z`, widecheck2: `M1181,220h2l1171,-176c6,0,10,-5,10,-11l-2,-23c-1,-6,-5,-10,
-11,-10h-1l-1168,153l-1167,-153h-1c-6,0,-10,4,-11,10l-2,23c-1,6,4,11,10,11z`, widecheck3: `M1181,280h2l1171,-236c6,0,10,-5,10,-11l-2,-23c-1,-6,-5,-10,
-11,-10h-1l-1168,213l-1167,-213h-1c-6,0,-10,4,-11,10l-2,23c-1,6,4,11,10,11z`, widecheck4: `M1181,340h2l1171,-296c6,0,10,-5,10,-11l-2,-23c-1,-6,-5,-10,
-11,-10h-1l-1168,273l-1167,-273h-1c-6,0,-10,4,-11,10l-2,23c-1,6,4,11,10,11z`, baraboveleftarrow: `M400000 620h-399890l3 -3c68.7 -52.7 113.7 -120 135 -202
c4 -14.7 6 -23 6 -25c0 -7.3 -7 -11 -21 -11c-8 0 -13.2 0.8 -15.5 2.5
c-2.3 1.7 -4.2 5.8 -5.5 12.5c-1.3 4.7 -2.7 10.3 -4 17c-12 48.7 -34.8 92 -68.5 130
s-74.2 66.3 -121.5 85c-10 4 -16 7.7 -18 11c0 8.7 6 14.3 18 17c47.3 18.7 87.8 47
121.5 85s56.5 81.3 68.5 130c0.7 2 1.3 5 2 9s1.2 6.7 1.5 8c0.3 1.3 1 3.3 2 6
s2.2 4.5 3.5 5.5c1.3 1 3.3 1.8 6 2.5s6 1 10 1c14 0 21 -3.7 21 -11
c0 -2 -2 -10.3 -6 -25c-20 -79.3 -65 -146.7 -135 -202l-3 -3h399890z
M100 620v40h399900v-40z M0 241v40h399900v-40zM0 241v40h399900v-40z`, rightarrowabovebar: `M0 241v40h399891c-47.3 35.3-84 78-110 128-16.7 32
-27.7 63.7-33 95 0 1.3-.2 2.7-.5 4-.3 1.3-.5 2.3-.5 3 0 7.3 6.7 11 20 11 8 0
13.2-.8 15.5-2.5 2.3-1.7 4.2-5.5 5.5-11.5 2-13.3 5.7-27 11-41 14.7-44.7 39
-84.5 73-119.5s73.7-60.2 119-75.5c6-2 9-5.7 9-11s-3-9-9-11c-45.3-15.3-85-40.5
-119-75.5s-58.3-74.8-73-119.5c-4.7-14-8.3-27.3-11-40-1.3-6.7-3.2-10.8-5.5
-12.5-2.3-1.7-7.5-2.5-15.5-2.5-14 0-21 3.7-21 11 0 2 2 10.3 6 25 20.7 83.3 67
151.7 139 205zm96 379h399894v40H0zm0 0h399904v40H0z`, baraboveshortleftharpoon: `M507,435c-4,4,-6.3,8.7,-7,14c0,5.3,0.7,9,2,11
c1.3,2,5.3,5.3,12,10c90.7,54,156,130,196,228c3.3,10.7,6.3,16.3,9,17
c2,0.7,5,1,9,1c0,0,5,0,5,0c10.7,0,16.7,-2,18,-6c2,-2.7,1,-9.7,-3,-21
c-32,-87.3,-82.7,-157.7,-152,-211c0,0,-3,-3,-3,-3l399351,0l0,-40
c-398570,0,-399437,0,-399437,0z M593 435 v40 H399500 v-40z
M0 281 v-40 H399908 v40z M0 281 v-40 H399908 v40z`, rightharpoonaboveshortbar: `M0,241 l0,40c399126,0,399993,0,399993,0
c4.7,-4.7,7,-9.3,7,-14c0,-9.3,-3.7,-15.3,-11,-18c-92.7,-56.7,-159,-133.7,-199,
-231c-3.3,-9.3,-6,-14.7,-8,-16c-2,-1.3,-7,-2,-15,-2c-10.7,0,-16.7,2,-18,6
c-2,2.7,-1,9.7,3,21c15.3,42,36.7,81.8,64,119.5c27.3,37.7,58,69.2,92,94.5z
M0 241 v40 H399908 v-40z M0 475 v-40 H399500 v40z M0 475 v-40 H399500 v40z`, shortbaraboveleftharpoon: `M7,435c-4,4,-6.3,8.7,-7,14c0,5.3,0.7,9,2,11
c1.3,2,5.3,5.3,12,10c90.7,54,156,130,196,228c3.3,10.7,6.3,16.3,9,17c2,0.7,5,1,9,
1c0,0,5,0,5,0c10.7,0,16.7,-2,18,-6c2,-2.7,1,-9.7,-3,-21c-32,-87.3,-82.7,-157.7,
-152,-211c0,0,-3,-3,-3,-3l399907,0l0,-40c-399126,0,-399993,0,-399993,0z
M93 435 v40 H400000 v-40z M500 241 v40 H400000 v-40z M500 241 v40 H400000 v-40z`, shortrightharpoonabovebar: `M53,241l0,40c398570,0,399437,0,399437,0
c4.7,-4.7,7,-9.3,7,-14c0,-9.3,-3.7,-15.3,-11,-18c-92.7,-56.7,-159,-133.7,-199,
-231c-3.3,-9.3,-6,-14.7,-8,-16c-2,-1.3,-7,-2,-15,-2c-10.7,0,-16.7,2,-18,6
c-2,2.7,-1,9.7,3,21c15.3,42,36.7,81.8,64,119.5c27.3,37.7,58,69.2,92,94.5z
M500 241 v40 H399408 v-40z M500 435 v40 H400000 v-40z` }, T0 = function() {
        function s(t) {
          this.children = void 0, this.classes = void 0, this.height = void 0, this.depth = void 0, this.maxFontSize = void 0, this.style = void 0, this.children = t, this.classes = [], this.height = 0, this.depth = 0, this.maxFontSize = 0, this.style = {};
        }
        var e = s.prototype;
        return e.hasClass = function(r) {
          return H.contains(this.classes, r);
        }, e.toNode = function() {
          for (var r = document.createDocumentFragment(), i = 0; i < this.children.length; i++)
            r.appendChild(this.children[i].toNode());
          return r;
        }, e.toMarkup = function() {
          for (var r = "", i = 0; i < this.children.length; i++)
            r += this.children[i].toMarkup();
          return r;
        }, e.toText = function() {
          var r = function(a) {
            return a.toText();
          };
          return this.children.map(r).join("");
        }, s;
      }(), p0 = { "AMS-Regular": { 32: [0, 0, 0, 0, 0.25], 65: [0, 0.68889, 0, 0, 0.72222], 66: [0, 0.68889, 0, 0, 0.66667], 67: [0, 0.68889, 0, 0, 0.72222], 68: [0, 0.68889, 0, 0, 0.72222], 69: [0, 0.68889, 0, 0, 0.66667], 70: [0, 0.68889, 0, 0, 0.61111], 71: [0, 0.68889, 0, 0, 0.77778], 72: [0, 0.68889, 0, 0, 0.77778], 73: [0, 0.68889, 0, 0, 0.38889], 74: [0.16667, 0.68889, 0, 0, 0.5], 75: [0, 0.68889, 0, 0, 0.77778], 76: [0, 0.68889, 0, 0, 0.66667], 77: [0, 0.68889, 0, 0, 0.94445], 78: [0, 0.68889, 0, 0, 0.72222], 79: [0.16667, 0.68889, 0, 0, 0.77778], 80: [0, 0.68889, 0, 0, 0.61111], 81: [0.16667, 0.68889, 0, 0, 0.77778], 82: [0, 0.68889, 0, 0, 0.72222], 83: [0, 0.68889, 0, 0, 0.55556], 84: [0, 0.68889, 0, 0, 0.66667], 85: [0, 0.68889, 0, 0, 0.72222], 86: [0, 0.68889, 0, 0, 0.72222], 87: [0, 0.68889, 0, 0, 1], 88: [0, 0.68889, 0, 0, 0.72222], 89: [0, 0.68889, 0, 0, 0.72222], 90: [0, 0.68889, 0, 0, 0.66667], 107: [0, 0.68889, 0, 0, 0.55556], 160: [0, 0, 0, 0, 0.25], 165: [0, 0.675, 0.025, 0, 0.75], 174: [0.15559, 0.69224, 0, 0, 0.94666], 240: [0, 0.68889, 0, 0, 0.55556], 295: [0, 0.68889, 0, 0, 0.54028], 710: [0, 0.825, 0, 0, 2.33334], 732: [0, 0.9, 0, 0, 2.33334], 770: [0, 0.825, 0, 0, 2.33334], 771: [0, 0.9, 0, 0, 2.33334], 989: [0.08167, 0.58167, 0, 0, 0.77778], 1008: [0, 0.43056, 0.04028, 0, 0.66667], 8245: [0, 0.54986, 0, 0, 0.275], 8463: [0, 0.68889, 0, 0, 0.54028], 8487: [0, 0.68889, 0, 0, 0.72222], 8498: [0, 0.68889, 0, 0, 0.55556], 8502: [0, 0.68889, 0, 0, 0.66667], 8503: [0, 0.68889, 0, 0, 0.44445], 8504: [0, 0.68889, 0, 0, 0.66667], 8513: [0, 0.68889, 0, 0, 0.63889], 8592: [-0.03598, 0.46402, 0, 0, 0.5], 8594: [-0.03598, 0.46402, 0, 0, 0.5], 8602: [-0.13313, 0.36687, 0, 0, 1], 8603: [-0.13313, 0.36687, 0, 0, 1], 8606: [0.01354, 0.52239, 0, 0, 1], 8608: [0.01354, 0.52239, 0, 0, 1], 8610: [0.01354, 0.52239, 0, 0, 1.11111], 8611: [0.01354, 0.52239, 0, 0, 1.11111], 8619: [0, 0.54986, 0, 0, 1], 8620: [0, 0.54986, 0, 0, 1], 8621: [-0.13313, 0.37788, 0, 0, 1.38889], 8622: [-0.13313, 0.36687, 0, 0, 1], 8624: [0, 0.69224, 0, 0, 0.5], 8625: [0, 0.69224, 0, 0, 0.5], 8630: [0, 0.43056, 0, 0, 1], 8631: [0, 0.43056, 0, 0, 1], 8634: [0.08198, 0.58198, 0, 0, 0.77778], 8635: [0.08198, 0.58198, 0, 0, 0.77778], 8638: [0.19444, 0.69224, 0, 0, 0.41667], 8639: [0.19444, 0.69224, 0, 0, 0.41667], 8642: [0.19444, 0.69224, 0, 0, 0.41667], 8643: [0.19444, 0.69224, 0, 0, 0.41667], 8644: [0.1808, 0.675, 0, 0, 1], 8646: [0.1808, 0.675, 0, 0, 1], 8647: [0.1808, 0.675, 0, 0, 1], 8648: [0.19444, 0.69224, 0, 0, 0.83334], 8649: [0.1808, 0.675, 0, 0, 1], 8650: [0.19444, 0.69224, 0, 0, 0.83334], 8651: [0.01354, 0.52239, 0, 0, 1], 8652: [0.01354, 0.52239, 0, 0, 1], 8653: [-0.13313, 0.36687, 0, 0, 1], 8654: [-0.13313, 0.36687, 0, 0, 1], 8655: [-0.13313, 0.36687, 0, 0, 1], 8666: [0.13667, 0.63667, 0, 0, 1], 8667: [0.13667, 0.63667, 0, 0, 1], 8669: [-0.13313, 0.37788, 0, 0, 1], 8672: [-0.064, 0.437, 0, 0, 1.334], 8674: [-0.064, 0.437, 0, 0, 1.334], 8705: [0, 0.825, 0, 0, 0.5], 8708: [0, 0.68889, 0, 0, 0.55556], 8709: [0.08167, 0.58167, 0, 0, 0.77778], 8717: [0, 0.43056, 0, 0, 0.42917], 8722: [-0.03598, 0.46402, 0, 0, 0.5], 8724: [0.08198, 0.69224, 0, 0, 0.77778], 8726: [0.08167, 0.58167, 0, 0, 0.77778], 8733: [0, 0.69224, 0, 0, 0.77778], 8736: [0, 0.69224, 0, 0, 0.72222], 8737: [0, 0.69224, 0, 0, 0.72222], 8738: [0.03517, 0.52239, 0, 0, 0.72222], 8739: [0.08167, 0.58167, 0, 0, 0.22222], 8740: [0.25142, 0.74111, 0, 0, 0.27778], 8741: [0.08167, 0.58167, 0, 0, 0.38889], 8742: [0.25142, 0.74111, 0, 0, 0.5], 8756: [0, 0.69224, 0, 0, 0.66667], 8757: [0, 0.69224, 0, 0, 0.66667], 8764: [-0.13313, 0.36687, 0, 0, 0.77778], 8765: [-0.13313, 0.37788, 0, 0, 0.77778], 8769: [-0.13313, 0.36687, 0, 0, 0.77778], 8770: [-0.03625, 0.46375, 0, 0, 0.77778], 8774: [0.30274, 0.79383, 0, 0, 0.77778], 8776: [-0.01688, 0.48312, 0, 0, 0.77778], 8778: [0.08167, 0.58167, 0, 0, 0.77778], 8782: [0.06062, 0.54986, 0, 0, 0.77778], 8783: [0.06062, 0.54986, 0, 0, 0.77778], 8785: [0.08198, 0.58198, 0, 0, 0.77778], 8786: [0.08198, 0.58198, 0, 0, 0.77778], 8787: [0.08198, 0.58198, 0, 0, 0.77778], 8790: [0, 0.69224, 0, 0, 0.77778], 8791: [0.22958, 0.72958, 0, 0, 0.77778], 8796: [0.08198, 0.91667, 0, 0, 0.77778], 8806: [0.25583, 0.75583, 0, 0, 0.77778], 8807: [0.25583, 0.75583, 0, 0, 0.77778], 8808: [0.25142, 0.75726, 0, 0, 0.77778], 8809: [0.25142, 0.75726, 0, 0, 0.77778], 8812: [0.25583, 0.75583, 0, 0, 0.5], 8814: [0.20576, 0.70576, 0, 0, 0.77778], 8815: [0.20576, 0.70576, 0, 0, 0.77778], 8816: [0.30274, 0.79383, 0, 0, 0.77778], 8817: [0.30274, 0.79383, 0, 0, 0.77778], 8818: [0.22958, 0.72958, 0, 0, 0.77778], 8819: [0.22958, 0.72958, 0, 0, 0.77778], 8822: [0.1808, 0.675, 0, 0, 0.77778], 8823: [0.1808, 0.675, 0, 0, 0.77778], 8828: [0.13667, 0.63667, 0, 0, 0.77778], 8829: [0.13667, 0.63667, 0, 0, 0.77778], 8830: [0.22958, 0.72958, 0, 0, 0.77778], 8831: [0.22958, 0.72958, 0, 0, 0.77778], 8832: [0.20576, 0.70576, 0, 0, 0.77778], 8833: [0.20576, 0.70576, 0, 0, 0.77778], 8840: [0.30274, 0.79383, 0, 0, 0.77778], 8841: [0.30274, 0.79383, 0, 0, 0.77778], 8842: [0.13597, 0.63597, 0, 0, 0.77778], 8843: [0.13597, 0.63597, 0, 0, 0.77778], 8847: [0.03517, 0.54986, 0, 0, 0.77778], 8848: [0.03517, 0.54986, 0, 0, 0.77778], 8858: [0.08198, 0.58198, 0, 0, 0.77778], 8859: [0.08198, 0.58198, 0, 0, 0.77778], 8861: [0.08198, 0.58198, 0, 0, 0.77778], 8862: [0, 0.675, 0, 0, 0.77778], 8863: [0, 0.675, 0, 0, 0.77778], 8864: [0, 0.675, 0, 0, 0.77778], 8865: [0, 0.675, 0, 0, 0.77778], 8872: [0, 0.69224, 0, 0, 0.61111], 8873: [0, 0.69224, 0, 0, 0.72222], 8874: [0, 0.69224, 0, 0, 0.88889], 8876: [0, 0.68889, 0, 0, 0.61111], 8877: [0, 0.68889, 0, 0, 0.61111], 8878: [0, 0.68889, 0, 0, 0.72222], 8879: [0, 0.68889, 0, 0, 0.72222], 8882: [0.03517, 0.54986, 0, 0, 0.77778], 8883: [0.03517, 0.54986, 0, 0, 0.77778], 8884: [0.13667, 0.63667, 0, 0, 0.77778], 8885: [0.13667, 0.63667, 0, 0, 0.77778], 8888: [0, 0.54986, 0, 0, 1.11111], 8890: [0.19444, 0.43056, 0, 0, 0.55556], 8891: [0.19444, 0.69224, 0, 0, 0.61111], 8892: [0.19444, 0.69224, 0, 0, 0.61111], 8901: [0, 0.54986, 0, 0, 0.27778], 8903: [0.08167, 0.58167, 0, 0, 0.77778], 8905: [0.08167, 0.58167, 0, 0, 0.77778], 8906: [0.08167, 0.58167, 0, 0, 0.77778], 8907: [0, 0.69224, 0, 0, 0.77778], 8908: [0, 0.69224, 0, 0, 0.77778], 8909: [-0.03598, 0.46402, 0, 0, 0.77778], 8910: [0, 0.54986, 0, 0, 0.76042], 8911: [0, 0.54986, 0, 0, 0.76042], 8912: [0.03517, 0.54986, 0, 0, 0.77778], 8913: [0.03517, 0.54986, 0, 0, 0.77778], 8914: [0, 0.54986, 0, 0, 0.66667], 8915: [0, 0.54986, 0, 0, 0.66667], 8916: [0, 0.69224, 0, 0, 0.66667], 8918: [0.0391, 0.5391, 0, 0, 0.77778], 8919: [0.0391, 0.5391, 0, 0, 0.77778], 8920: [0.03517, 0.54986, 0, 0, 1.33334], 8921: [0.03517, 0.54986, 0, 0, 1.33334], 8922: [0.38569, 0.88569, 0, 0, 0.77778], 8923: [0.38569, 0.88569, 0, 0, 0.77778], 8926: [0.13667, 0.63667, 0, 0, 0.77778], 8927: [0.13667, 0.63667, 0, 0, 0.77778], 8928: [0.30274, 0.79383, 0, 0, 0.77778], 8929: [0.30274, 0.79383, 0, 0, 0.77778], 8934: [0.23222, 0.74111, 0, 0, 0.77778], 8935: [0.23222, 0.74111, 0, 0, 0.77778], 8936: [0.23222, 0.74111, 0, 0, 0.77778], 8937: [0.23222, 0.74111, 0, 0, 0.77778], 8938: [0.20576, 0.70576, 0, 0, 0.77778], 8939: [0.20576, 0.70576, 0, 0, 0.77778], 8940: [0.30274, 0.79383, 0, 0, 0.77778], 8941: [0.30274, 0.79383, 0, 0, 0.77778], 8994: [0.19444, 0.69224, 0, 0, 0.77778], 8995: [0.19444, 0.69224, 0, 0, 0.77778], 9416: [0.15559, 0.69224, 0, 0, 0.90222], 9484: [0, 0.69224, 0, 0, 0.5], 9488: [0, 0.69224, 0, 0, 0.5], 9492: [0, 0.37788, 0, 0, 0.5], 9496: [0, 0.37788, 0, 0, 0.5], 9585: [0.19444, 0.68889, 0, 0, 0.88889], 9586: [0.19444, 0.74111, 0, 0, 0.88889], 9632: [0, 0.675, 0, 0, 0.77778], 9633: [0, 0.675, 0, 0, 0.77778], 9650: [0, 0.54986, 0, 0, 0.72222], 9651: [0, 0.54986, 0, 0, 0.72222], 9654: [0.03517, 0.54986, 0, 0, 0.77778], 9660: [0, 0.54986, 0, 0, 0.72222], 9661: [0, 0.54986, 0, 0, 0.72222], 9664: [0.03517, 0.54986, 0, 0, 0.77778], 9674: [0.11111, 0.69224, 0, 0, 0.66667], 9733: [0.19444, 0.69224, 0, 0, 0.94445], 10003: [0, 0.69224, 0, 0, 0.83334], 10016: [0, 0.69224, 0, 0, 0.83334], 10731: [0.11111, 0.69224, 0, 0, 0.66667], 10846: [0.19444, 0.75583, 0, 0, 0.61111], 10877: [0.13667, 0.63667, 0, 0, 0.77778], 10878: [0.13667, 0.63667, 0, 0, 0.77778], 10885: [0.25583, 0.75583, 0, 0, 0.77778], 10886: [0.25583, 0.75583, 0, 0, 0.77778], 10887: [0.13597, 0.63597, 0, 0, 0.77778], 10888: [0.13597, 0.63597, 0, 0, 0.77778], 10889: [0.26167, 0.75726, 0, 0, 0.77778], 10890: [0.26167, 0.75726, 0, 0, 0.77778], 10891: [0.48256, 0.98256, 0, 0, 0.77778], 10892: [0.48256, 0.98256, 0, 0, 0.77778], 10901: [0.13667, 0.63667, 0, 0, 0.77778], 10902: [0.13667, 0.63667, 0, 0, 0.77778], 10933: [0.25142, 0.75726, 0, 0, 0.77778], 10934: [0.25142, 0.75726, 0, 0, 0.77778], 10935: [0.26167, 0.75726, 0, 0, 0.77778], 10936: [0.26167, 0.75726, 0, 0, 0.77778], 10937: [0.26167, 0.75726, 0, 0, 0.77778], 10938: [0.26167, 0.75726, 0, 0, 0.77778], 10949: [0.25583, 0.75583, 0, 0, 0.77778], 10950: [0.25583, 0.75583, 0, 0, 0.77778], 10955: [0.28481, 0.79383, 0, 0, 0.77778], 10956: [0.28481, 0.79383, 0, 0, 0.77778], 57350: [0.08167, 0.58167, 0, 0, 0.22222], 57351: [0.08167, 0.58167, 0, 0, 0.38889], 57352: [0.08167, 0.58167, 0, 0, 0.77778], 57353: [0, 0.43056, 0.04028, 0, 0.66667], 57356: [0.25142, 0.75726, 0, 0, 0.77778], 57357: [0.25142, 0.75726, 0, 0, 0.77778], 57358: [0.41951, 0.91951, 0, 0, 0.77778], 57359: [0.30274, 0.79383, 0, 0, 0.77778], 57360: [0.30274, 0.79383, 0, 0, 0.77778], 57361: [0.41951, 0.91951, 0, 0, 0.77778], 57366: [0.25142, 0.75726, 0, 0, 0.77778], 57367: [0.25142, 0.75726, 0, 0, 0.77778], 57368: [0.25142, 0.75726, 0, 0, 0.77778], 57369: [0.25142, 0.75726, 0, 0, 0.77778], 57370: [0.13597, 0.63597, 0, 0, 0.77778], 57371: [0.13597, 0.63597, 0, 0, 0.77778] }, "Caligraphic-Regular": { 32: [0, 0, 0, 0, 0.25], 65: [0, 0.68333, 0, 0.19445, 0.79847], 66: [0, 0.68333, 0.03041, 0.13889, 0.65681], 67: [0, 0.68333, 0.05834, 0.13889, 0.52653], 68: [0, 0.68333, 0.02778, 0.08334, 0.77139], 69: [0, 0.68333, 0.08944, 0.11111, 0.52778], 70: [0, 0.68333, 0.09931, 0.11111, 0.71875], 71: [0.09722, 0.68333, 0.0593, 0.11111, 0.59487], 72: [0, 0.68333, 965e-5, 0.11111, 0.84452], 73: [0, 0.68333, 0.07382, 0, 0.54452], 74: [0.09722, 0.68333, 0.18472, 0.16667, 0.67778], 75: [0, 0.68333, 0.01445, 0.05556, 0.76195], 76: [0, 0.68333, 0, 0.13889, 0.68972], 77: [0, 0.68333, 0, 0.13889, 1.2009], 78: [0, 0.68333, 0.14736, 0.08334, 0.82049], 79: [0, 0.68333, 0.02778, 0.11111, 0.79611], 80: [0, 0.68333, 0.08222, 0.08334, 0.69556], 81: [0.09722, 0.68333, 0, 0.11111, 0.81667], 82: [0, 0.68333, 0, 0.08334, 0.8475], 83: [0, 0.68333, 0.075, 0.13889, 0.60556], 84: [0, 0.68333, 0.25417, 0, 0.54464], 85: [0, 0.68333, 0.09931, 0.08334, 0.62583], 86: [0, 0.68333, 0.08222, 0, 0.61278], 87: [0, 0.68333, 0.08222, 0.08334, 0.98778], 88: [0, 0.68333, 0.14643, 0.13889, 0.7133], 89: [0.09722, 0.68333, 0.08222, 0.08334, 0.66834], 90: [0, 0.68333, 0.07944, 0.13889, 0.72473], 160: [0, 0, 0, 0, 0.25] }, "Fraktur-Regular": { 32: [0, 0, 0, 0, 0.25], 33: [0, 0.69141, 0, 0, 0.29574], 34: [0, 0.69141, 0, 0, 0.21471], 38: [0, 0.69141, 0, 0, 0.73786], 39: [0, 0.69141, 0, 0, 0.21201], 40: [0.24982, 0.74947, 0, 0, 0.38865], 41: [0.24982, 0.74947, 0, 0, 0.38865], 42: [0, 0.62119, 0, 0, 0.27764], 43: [0.08319, 0.58283, 0, 0, 0.75623], 44: [0, 0.10803, 0, 0, 0.27764], 45: [0.08319, 0.58283, 0, 0, 0.75623], 46: [0, 0.10803, 0, 0, 0.27764], 47: [0.24982, 0.74947, 0, 0, 0.50181], 48: [0, 0.47534, 0, 0, 0.50181], 49: [0, 0.47534, 0, 0, 0.50181], 50: [0, 0.47534, 0, 0, 0.50181], 51: [0.18906, 0.47534, 0, 0, 0.50181], 52: [0.18906, 0.47534, 0, 0, 0.50181], 53: [0.18906, 0.47534, 0, 0, 0.50181], 54: [0, 0.69141, 0, 0, 0.50181], 55: [0.18906, 0.47534, 0, 0, 0.50181], 56: [0, 0.69141, 0, 0, 0.50181], 57: [0.18906, 0.47534, 0, 0, 0.50181], 58: [0, 0.47534, 0, 0, 0.21606], 59: [0.12604, 0.47534, 0, 0, 0.21606], 61: [-0.13099, 0.36866, 0, 0, 0.75623], 63: [0, 0.69141, 0, 0, 0.36245], 65: [0, 0.69141, 0, 0, 0.7176], 66: [0, 0.69141, 0, 0, 0.88397], 67: [0, 0.69141, 0, 0, 0.61254], 68: [0, 0.69141, 0, 0, 0.83158], 69: [0, 0.69141, 0, 0, 0.66278], 70: [0.12604, 0.69141, 0, 0, 0.61119], 71: [0, 0.69141, 0, 0, 0.78539], 72: [0.06302, 0.69141, 0, 0, 0.7203], 73: [0, 0.69141, 0, 0, 0.55448], 74: [0.12604, 0.69141, 0, 0, 0.55231], 75: [0, 0.69141, 0, 0, 0.66845], 76: [0, 0.69141, 0, 0, 0.66602], 77: [0, 0.69141, 0, 0, 1.04953], 78: [0, 0.69141, 0, 0, 0.83212], 79: [0, 0.69141, 0, 0, 0.82699], 80: [0.18906, 0.69141, 0, 0, 0.82753], 81: [0.03781, 0.69141, 0, 0, 0.82699], 82: [0, 0.69141, 0, 0, 0.82807], 83: [0, 0.69141, 0, 0, 0.82861], 84: [0, 0.69141, 0, 0, 0.66899], 85: [0, 0.69141, 0, 0, 0.64576], 86: [0, 0.69141, 0, 0, 0.83131], 87: [0, 0.69141, 0, 0, 1.04602], 88: [0, 0.69141, 0, 0, 0.71922], 89: [0.18906, 0.69141, 0, 0, 0.83293], 90: [0.12604, 0.69141, 0, 0, 0.60201], 91: [0.24982, 0.74947, 0, 0, 0.27764], 93: [0.24982, 0.74947, 0, 0, 0.27764], 94: [0, 0.69141, 0, 0, 0.49965], 97: [0, 0.47534, 0, 0, 0.50046], 98: [0, 0.69141, 0, 0, 0.51315], 99: [0, 0.47534, 0, 0, 0.38946], 100: [0, 0.62119, 0, 0, 0.49857], 101: [0, 0.47534, 0, 0, 0.40053], 102: [0.18906, 0.69141, 0, 0, 0.32626], 103: [0.18906, 0.47534, 0, 0, 0.5037], 104: [0.18906, 0.69141, 0, 0, 0.52126], 105: [0, 0.69141, 0, 0, 0.27899], 106: [0, 0.69141, 0, 0, 0.28088], 107: [0, 0.69141, 0, 0, 0.38946], 108: [0, 0.69141, 0, 0, 0.27953], 109: [0, 0.47534, 0, 0, 0.76676], 110: [0, 0.47534, 0, 0, 0.52666], 111: [0, 0.47534, 0, 0, 0.48885], 112: [0.18906, 0.52396, 0, 0, 0.50046], 113: [0.18906, 0.47534, 0, 0, 0.48912], 114: [0, 0.47534, 0, 0, 0.38919], 115: [0, 0.47534, 0, 0, 0.44266], 116: [0, 0.62119, 0, 0, 0.33301], 117: [0, 0.47534, 0, 0, 0.5172], 118: [0, 0.52396, 0, 0, 0.5118], 119: [0, 0.52396, 0, 0, 0.77351], 120: [0.18906, 0.47534, 0, 0, 0.38865], 121: [0.18906, 0.47534, 0, 0, 0.49884], 122: [0.18906, 0.47534, 0, 0, 0.39054], 160: [0, 0, 0, 0, 0.25], 8216: [0, 0.69141, 0, 0, 0.21471], 8217: [0, 0.69141, 0, 0, 0.21471], 58112: [0, 0.62119, 0, 0, 0.49749], 58113: [0, 0.62119, 0, 0, 0.4983], 58114: [0.18906, 0.69141, 0, 0, 0.33328], 58115: [0.18906, 0.69141, 0, 0, 0.32923], 58116: [0.18906, 0.47534, 0, 0, 0.50343], 58117: [0, 0.69141, 0, 0, 0.33301], 58118: [0, 0.62119, 0, 0, 0.33409], 58119: [0, 0.47534, 0, 0, 0.50073] }, "Main-Bold": { 32: [0, 0, 0, 0, 0.25], 33: [0, 0.69444, 0, 0, 0.35], 34: [0, 0.69444, 0, 0, 0.60278], 35: [0.19444, 0.69444, 0, 0, 0.95833], 36: [0.05556, 0.75, 0, 0, 0.575], 37: [0.05556, 0.75, 0, 0, 0.95833], 38: [0, 0.69444, 0, 0, 0.89444], 39: [0, 0.69444, 0, 0, 0.31944], 40: [0.25, 0.75, 0, 0, 0.44722], 41: [0.25, 0.75, 0, 0, 0.44722], 42: [0, 0.75, 0, 0, 0.575], 43: [0.13333, 0.63333, 0, 0, 0.89444], 44: [0.19444, 0.15556, 0, 0, 0.31944], 45: [0, 0.44444, 0, 0, 0.38333], 46: [0, 0.15556, 0, 0, 0.31944], 47: [0.25, 0.75, 0, 0, 0.575], 48: [0, 0.64444, 0, 0, 0.575], 49: [0, 0.64444, 0, 0, 0.575], 50: [0, 0.64444, 0, 0, 0.575], 51: [0, 0.64444, 0, 0, 0.575], 52: [0, 0.64444, 0, 0, 0.575], 53: [0, 0.64444, 0, 0, 0.575], 54: [0, 0.64444, 0, 0, 0.575], 55: [0, 0.64444, 0, 0, 0.575], 56: [0, 0.64444, 0, 0, 0.575], 57: [0, 0.64444, 0, 0, 0.575], 58: [0, 0.44444, 0, 0, 0.31944], 59: [0.19444, 0.44444, 0, 0, 0.31944], 60: [0.08556, 0.58556, 0, 0, 0.89444], 61: [-0.10889, 0.39111, 0, 0, 0.89444], 62: [0.08556, 0.58556, 0, 0, 0.89444], 63: [0, 0.69444, 0, 0, 0.54305], 64: [0, 0.69444, 0, 0, 0.89444], 65: [0, 0.68611, 0, 0, 0.86944], 66: [0, 0.68611, 0, 0, 0.81805], 67: [0, 0.68611, 0, 0, 0.83055], 68: [0, 0.68611, 0, 0, 0.88194], 69: [0, 0.68611, 0, 0, 0.75555], 70: [0, 0.68611, 0, 0, 0.72361], 71: [0, 0.68611, 0, 0, 0.90416], 72: [0, 0.68611, 0, 0, 0.9], 73: [0, 0.68611, 0, 0, 0.43611], 74: [0, 0.68611, 0, 0, 0.59444], 75: [0, 0.68611, 0, 0, 0.90138], 76: [0, 0.68611, 0, 0, 0.69166], 77: [0, 0.68611, 0, 0, 1.09166], 78: [0, 0.68611, 0, 0, 0.9], 79: [0, 0.68611, 0, 0, 0.86388], 80: [0, 0.68611, 0, 0, 0.78611], 81: [0.19444, 0.68611, 0, 0, 0.86388], 82: [0, 0.68611, 0, 0, 0.8625], 83: [0, 0.68611, 0, 0, 0.63889], 84: [0, 0.68611, 0, 0, 0.8], 85: [0, 0.68611, 0, 0, 0.88472], 86: [0, 0.68611, 0.01597, 0, 0.86944], 87: [0, 0.68611, 0.01597, 0, 1.18888], 88: [0, 0.68611, 0, 0, 0.86944], 89: [0, 0.68611, 0.02875, 0, 0.86944], 90: [0, 0.68611, 0, 0, 0.70277], 91: [0.25, 0.75, 0, 0, 0.31944], 92: [0.25, 0.75, 0, 0, 0.575], 93: [0.25, 0.75, 0, 0, 0.31944], 94: [0, 0.69444, 0, 0, 0.575], 95: [0.31, 0.13444, 0.03194, 0, 0.575], 97: [0, 0.44444, 0, 0, 0.55902], 98: [0, 0.69444, 0, 0, 0.63889], 99: [0, 0.44444, 0, 0, 0.51111], 100: [0, 0.69444, 0, 0, 0.63889], 101: [0, 0.44444, 0, 0, 0.52708], 102: [0, 0.69444, 0.10903, 0, 0.35139], 103: [0.19444, 0.44444, 0.01597, 0, 0.575], 104: [0, 0.69444, 0, 0, 0.63889], 105: [0, 0.69444, 0, 0, 0.31944], 106: [0.19444, 0.69444, 0, 0, 0.35139], 107: [0, 0.69444, 0, 0, 0.60694], 108: [0, 0.69444, 0, 0, 0.31944], 109: [0, 0.44444, 0, 0, 0.95833], 110: [0, 0.44444, 0, 0, 0.63889], 111: [0, 0.44444, 0, 0, 0.575], 112: [0.19444, 0.44444, 0, 0, 0.63889], 113: [0.19444, 0.44444, 0, 0, 0.60694], 114: [0, 0.44444, 0, 0, 0.47361], 115: [0, 0.44444, 0, 0, 0.45361], 116: [0, 0.63492, 0, 0, 0.44722], 117: [0, 0.44444, 0, 0, 0.63889], 118: [0, 0.44444, 0.01597, 0, 0.60694], 119: [0, 0.44444, 0.01597, 0, 0.83055], 120: [0, 0.44444, 0, 0, 0.60694], 121: [0.19444, 0.44444, 0.01597, 0, 0.60694], 122: [0, 0.44444, 0, 0, 0.51111], 123: [0.25, 0.75, 0, 0, 0.575], 124: [0.25, 0.75, 0, 0, 0.31944], 125: [0.25, 0.75, 0, 0, 0.575], 126: [0.35, 0.34444, 0, 0, 0.575], 160: [0, 0, 0, 0, 0.25], 163: [0, 0.69444, 0, 0, 0.86853], 168: [0, 0.69444, 0, 0, 0.575], 172: [0, 0.44444, 0, 0, 0.76666], 176: [0, 0.69444, 0, 0, 0.86944], 177: [0.13333, 0.63333, 0, 0, 0.89444], 184: [0.17014, 0, 0, 0, 0.51111], 198: [0, 0.68611, 0, 0, 1.04166], 215: [0.13333, 0.63333, 0, 0, 0.89444], 216: [0.04861, 0.73472, 0, 0, 0.89444], 223: [0, 0.69444, 0, 0, 0.59722], 230: [0, 0.44444, 0, 0, 0.83055], 247: [0.13333, 0.63333, 0, 0, 0.89444], 248: [0.09722, 0.54167, 0, 0, 0.575], 305: [0, 0.44444, 0, 0, 0.31944], 338: [0, 0.68611, 0, 0, 1.16944], 339: [0, 0.44444, 0, 0, 0.89444], 567: [0.19444, 0.44444, 0, 0, 0.35139], 710: [0, 0.69444, 0, 0, 0.575], 711: [0, 0.63194, 0, 0, 0.575], 713: [0, 0.59611, 0, 0, 0.575], 714: [0, 0.69444, 0, 0, 0.575], 715: [0, 0.69444, 0, 0, 0.575], 728: [0, 0.69444, 0, 0, 0.575], 729: [0, 0.69444, 0, 0, 0.31944], 730: [0, 0.69444, 0, 0, 0.86944], 732: [0, 0.69444, 0, 0, 0.575], 733: [0, 0.69444, 0, 0, 0.575], 915: [0, 0.68611, 0, 0, 0.69166], 916: [0, 0.68611, 0, 0, 0.95833], 920: [0, 0.68611, 0, 0, 0.89444], 923: [0, 0.68611, 0, 0, 0.80555], 926: [0, 0.68611, 0, 0, 0.76666], 928: [0, 0.68611, 0, 0, 0.9], 931: [0, 0.68611, 0, 0, 0.83055], 933: [0, 0.68611, 0, 0, 0.89444], 934: [0, 0.68611, 0, 0, 0.83055], 936: [0, 0.68611, 0, 0, 0.89444], 937: [0, 0.68611, 0, 0, 0.83055], 8211: [0, 0.44444, 0.03194, 0, 0.575], 8212: [0, 0.44444, 0.03194, 0, 1.14999], 8216: [0, 0.69444, 0, 0, 0.31944], 8217: [0, 0.69444, 0, 0, 0.31944], 8220: [0, 0.69444, 0, 0, 0.60278], 8221: [0, 0.69444, 0, 0, 0.60278], 8224: [0.19444, 0.69444, 0, 0, 0.51111], 8225: [0.19444, 0.69444, 0, 0, 0.51111], 8242: [0, 0.55556, 0, 0, 0.34444], 8407: [0, 0.72444, 0.15486, 0, 0.575], 8463: [0, 0.69444, 0, 0, 0.66759], 8465: [0, 0.69444, 0, 0, 0.83055], 8467: [0, 0.69444, 0, 0, 0.47361], 8472: [0.19444, 0.44444, 0, 0, 0.74027], 8476: [0, 0.69444, 0, 0, 0.83055], 8501: [0, 0.69444, 0, 0, 0.70277], 8592: [-0.10889, 0.39111, 0, 0, 1.14999], 8593: [0.19444, 0.69444, 0, 0, 0.575], 8594: [-0.10889, 0.39111, 0, 0, 1.14999], 8595: [0.19444, 0.69444, 0, 0, 0.575], 8596: [-0.10889, 0.39111, 0, 0, 1.14999], 8597: [0.25, 0.75, 0, 0, 0.575], 8598: [0.19444, 0.69444, 0, 0, 1.14999], 8599: [0.19444, 0.69444, 0, 0, 1.14999], 8600: [0.19444, 0.69444, 0, 0, 1.14999], 8601: [0.19444, 0.69444, 0, 0, 1.14999], 8636: [-0.10889, 0.39111, 0, 0, 1.14999], 8637: [-0.10889, 0.39111, 0, 0, 1.14999], 8640: [-0.10889, 0.39111, 0, 0, 1.14999], 8641: [-0.10889, 0.39111, 0, 0, 1.14999], 8656: [-0.10889, 0.39111, 0, 0, 1.14999], 8657: [0.19444, 0.69444, 0, 0, 0.70277], 8658: [-0.10889, 0.39111, 0, 0, 1.14999], 8659: [0.19444, 0.69444, 0, 0, 0.70277], 8660: [-0.10889, 0.39111, 0, 0, 1.14999], 8661: [0.25, 0.75, 0, 0, 0.70277], 8704: [0, 0.69444, 0, 0, 0.63889], 8706: [0, 0.69444, 0.06389, 0, 0.62847], 8707: [0, 0.69444, 0, 0, 0.63889], 8709: [0.05556, 0.75, 0, 0, 0.575], 8711: [0, 0.68611, 0, 0, 0.95833], 8712: [0.08556, 0.58556, 0, 0, 0.76666], 8715: [0.08556, 0.58556, 0, 0, 0.76666], 8722: [0.13333, 0.63333, 0, 0, 0.89444], 8723: [0.13333, 0.63333, 0, 0, 0.89444], 8725: [0.25, 0.75, 0, 0, 0.575], 8726: [0.25, 0.75, 0, 0, 0.575], 8727: [-0.02778, 0.47222, 0, 0, 0.575], 8728: [-0.02639, 0.47361, 0, 0, 0.575], 8729: [-0.02639, 0.47361, 0, 0, 0.575], 8730: [0.18, 0.82, 0, 0, 0.95833], 8733: [0, 0.44444, 0, 0, 0.89444], 8734: [0, 0.44444, 0, 0, 1.14999], 8736: [0, 0.69224, 0, 0, 0.72222], 8739: [0.25, 0.75, 0, 0, 0.31944], 8741: [0.25, 0.75, 0, 0, 0.575], 8743: [0, 0.55556, 0, 0, 0.76666], 8744: [0, 0.55556, 0, 0, 0.76666], 8745: [0, 0.55556, 0, 0, 0.76666], 8746: [0, 0.55556, 0, 0, 0.76666], 8747: [0.19444, 0.69444, 0.12778, 0, 0.56875], 8764: [-0.10889, 0.39111, 0, 0, 0.89444], 8768: [0.19444, 0.69444, 0, 0, 0.31944], 8771: [222e-5, 0.50222, 0, 0, 0.89444], 8773: [0.027, 0.638, 0, 0, 0.894], 8776: [0.02444, 0.52444, 0, 0, 0.89444], 8781: [222e-5, 0.50222, 0, 0, 0.89444], 8801: [222e-5, 0.50222, 0, 0, 0.89444], 8804: [0.19667, 0.69667, 0, 0, 0.89444], 8805: [0.19667, 0.69667, 0, 0, 0.89444], 8810: [0.08556, 0.58556, 0, 0, 1.14999], 8811: [0.08556, 0.58556, 0, 0, 1.14999], 8826: [0.08556, 0.58556, 0, 0, 0.89444], 8827: [0.08556, 0.58556, 0, 0, 0.89444], 8834: [0.08556, 0.58556, 0, 0, 0.89444], 8835: [0.08556, 0.58556, 0, 0, 0.89444], 8838: [0.19667, 0.69667, 0, 0, 0.89444], 8839: [0.19667, 0.69667, 0, 0, 0.89444], 8846: [0, 0.55556, 0, 0, 0.76666], 8849: [0.19667, 0.69667, 0, 0, 0.89444], 8850: [0.19667, 0.69667, 0, 0, 0.89444], 8851: [0, 0.55556, 0, 0, 0.76666], 8852: [0, 0.55556, 0, 0, 0.76666], 8853: [0.13333, 0.63333, 0, 0, 0.89444], 8854: [0.13333, 0.63333, 0, 0, 0.89444], 8855: [0.13333, 0.63333, 0, 0, 0.89444], 8856: [0.13333, 0.63333, 0, 0, 0.89444], 8857: [0.13333, 0.63333, 0, 0, 0.89444], 8866: [0, 0.69444, 0, 0, 0.70277], 8867: [0, 0.69444, 0, 0, 0.70277], 8868: [0, 0.69444, 0, 0, 0.89444], 8869: [0, 0.69444, 0, 0, 0.89444], 8900: [-0.02639, 0.47361, 0, 0, 0.575], 8901: [-0.02639, 0.47361, 0, 0, 0.31944], 8902: [-0.02778, 0.47222, 0, 0, 0.575], 8968: [0.25, 0.75, 0, 0, 0.51111], 8969: [0.25, 0.75, 0, 0, 0.51111], 8970: [0.25, 0.75, 0, 0, 0.51111], 8971: [0.25, 0.75, 0, 0, 0.51111], 8994: [-0.13889, 0.36111, 0, 0, 1.14999], 8995: [-0.13889, 0.36111, 0, 0, 1.14999], 9651: [0.19444, 0.69444, 0, 0, 1.02222], 9657: [-0.02778, 0.47222, 0, 0, 0.575], 9661: [0.19444, 0.69444, 0, 0, 1.02222], 9667: [-0.02778, 0.47222, 0, 0, 0.575], 9711: [0.19444, 0.69444, 0, 0, 1.14999], 9824: [0.12963, 0.69444, 0, 0, 0.89444], 9825: [0.12963, 0.69444, 0, 0, 0.89444], 9826: [0.12963, 0.69444, 0, 0, 0.89444], 9827: [0.12963, 0.69444, 0, 0, 0.89444], 9837: [0, 0.75, 0, 0, 0.44722], 9838: [0.19444, 0.69444, 0, 0, 0.44722], 9839: [0.19444, 0.69444, 0, 0, 0.44722], 10216: [0.25, 0.75, 0, 0, 0.44722], 10217: [0.25, 0.75, 0, 0, 0.44722], 10815: [0, 0.68611, 0, 0, 0.9], 10927: [0.19667, 0.69667, 0, 0, 0.89444], 10928: [0.19667, 0.69667, 0, 0, 0.89444], 57376: [0.19444, 0.69444, 0, 0, 0] }, "Main-BoldItalic": { 32: [0, 0, 0, 0, 0.25], 33: [0, 0.69444, 0.11417, 0, 0.38611], 34: [0, 0.69444, 0.07939, 0, 0.62055], 35: [0.19444, 0.69444, 0.06833, 0, 0.94444], 37: [0.05556, 0.75, 0.12861, 0, 0.94444], 38: [0, 0.69444, 0.08528, 0, 0.88555], 39: [0, 0.69444, 0.12945, 0, 0.35555], 40: [0.25, 0.75, 0.15806, 0, 0.47333], 41: [0.25, 0.75, 0.03306, 0, 0.47333], 42: [0, 0.75, 0.14333, 0, 0.59111], 43: [0.10333, 0.60333, 0.03306, 0, 0.88555], 44: [0.19444, 0.14722, 0, 0, 0.35555], 45: [0, 0.44444, 0.02611, 0, 0.41444], 46: [0, 0.14722, 0, 0, 0.35555], 47: [0.25, 0.75, 0.15806, 0, 0.59111], 48: [0, 0.64444, 0.13167, 0, 0.59111], 49: [0, 0.64444, 0.13167, 0, 0.59111], 50: [0, 0.64444, 0.13167, 0, 0.59111], 51: [0, 0.64444, 0.13167, 0, 0.59111], 52: [0.19444, 0.64444, 0.13167, 0, 0.59111], 53: [0, 0.64444, 0.13167, 0, 0.59111], 54: [0, 0.64444, 0.13167, 0, 0.59111], 55: [0.19444, 0.64444, 0.13167, 0, 0.59111], 56: [0, 0.64444, 0.13167, 0, 0.59111], 57: [0, 0.64444, 0.13167, 0, 0.59111], 58: [0, 0.44444, 0.06695, 0, 0.35555], 59: [0.19444, 0.44444, 0.06695, 0, 0.35555], 61: [-0.10889, 0.39111, 0.06833, 0, 0.88555], 63: [0, 0.69444, 0.11472, 0, 0.59111], 64: [0, 0.69444, 0.09208, 0, 0.88555], 65: [0, 0.68611, 0, 0, 0.86555], 66: [0, 0.68611, 0.0992, 0, 0.81666], 67: [0, 0.68611, 0.14208, 0, 0.82666], 68: [0, 0.68611, 0.09062, 0, 0.87555], 69: [0, 0.68611, 0.11431, 0, 0.75666], 70: [0, 0.68611, 0.12903, 0, 0.72722], 71: [0, 0.68611, 0.07347, 0, 0.89527], 72: [0, 0.68611, 0.17208, 0, 0.8961], 73: [0, 0.68611, 0.15681, 0, 0.47166], 74: [0, 0.68611, 0.145, 0, 0.61055], 75: [0, 0.68611, 0.14208, 0, 0.89499], 76: [0, 0.68611, 0, 0, 0.69777], 77: [0, 0.68611, 0.17208, 0, 1.07277], 78: [0, 0.68611, 0.17208, 0, 0.8961], 79: [0, 0.68611, 0.09062, 0, 0.85499], 80: [0, 0.68611, 0.0992, 0, 0.78721], 81: [0.19444, 0.68611, 0.09062, 0, 0.85499], 82: [0, 0.68611, 0.02559, 0, 0.85944], 83: [0, 0.68611, 0.11264, 0, 0.64999], 84: [0, 0.68611, 0.12903, 0, 0.7961], 85: [0, 0.68611, 0.17208, 0, 0.88083], 86: [0, 0.68611, 0.18625, 0, 0.86555], 87: [0, 0.68611, 0.18625, 0, 1.15999], 88: [0, 0.68611, 0.15681, 0, 0.86555], 89: [0, 0.68611, 0.19803, 0, 0.86555], 90: [0, 0.68611, 0.14208, 0, 0.70888], 91: [0.25, 0.75, 0.1875, 0, 0.35611], 93: [0.25, 0.75, 0.09972, 0, 0.35611], 94: [0, 0.69444, 0.06709, 0, 0.59111], 95: [0.31, 0.13444, 0.09811, 0, 0.59111], 97: [0, 0.44444, 0.09426, 0, 0.59111], 98: [0, 0.69444, 0.07861, 0, 0.53222], 99: [0, 0.44444, 0.05222, 0, 0.53222], 100: [0, 0.69444, 0.10861, 0, 0.59111], 101: [0, 0.44444, 0.085, 0, 0.53222], 102: [0.19444, 0.69444, 0.21778, 0, 0.4], 103: [0.19444, 0.44444, 0.105, 0, 0.53222], 104: [0, 0.69444, 0.09426, 0, 0.59111], 105: [0, 0.69326, 0.11387, 0, 0.35555], 106: [0.19444, 0.69326, 0.1672, 0, 0.35555], 107: [0, 0.69444, 0.11111, 0, 0.53222], 108: [0, 0.69444, 0.10861, 0, 0.29666], 109: [0, 0.44444, 0.09426, 0, 0.94444], 110: [0, 0.44444, 0.09426, 0, 0.64999], 111: [0, 0.44444, 0.07861, 0, 0.59111], 112: [0.19444, 0.44444, 0.07861, 0, 0.59111], 113: [0.19444, 0.44444, 0.105, 0, 0.53222], 114: [0, 0.44444, 0.11111, 0, 0.50167], 115: [0, 0.44444, 0.08167, 0, 0.48694], 116: [0, 0.63492, 0.09639, 0, 0.385], 117: [0, 0.44444, 0.09426, 0, 0.62055], 118: [0, 0.44444, 0.11111, 0, 0.53222], 119: [0, 0.44444, 0.11111, 0, 0.76777], 120: [0, 0.44444, 0.12583, 0, 0.56055], 121: [0.19444, 0.44444, 0.105, 0, 0.56166], 122: [0, 0.44444, 0.13889, 0, 0.49055], 126: [0.35, 0.34444, 0.11472, 0, 0.59111], 160: [0, 0, 0, 0, 0.25], 168: [0, 0.69444, 0.11473, 0, 0.59111], 176: [0, 0.69444, 0, 0, 0.94888], 184: [0.17014, 0, 0, 0, 0.53222], 198: [0, 0.68611, 0.11431, 0, 1.02277], 216: [0.04861, 0.73472, 0.09062, 0, 0.88555], 223: [0.19444, 0.69444, 0.09736, 0, 0.665], 230: [0, 0.44444, 0.085, 0, 0.82666], 248: [0.09722, 0.54167, 0.09458, 0, 0.59111], 305: [0, 0.44444, 0.09426, 0, 0.35555], 338: [0, 0.68611, 0.11431, 0, 1.14054], 339: [0, 0.44444, 0.085, 0, 0.82666], 567: [0.19444, 0.44444, 0.04611, 0, 0.385], 710: [0, 0.69444, 0.06709, 0, 0.59111], 711: [0, 0.63194, 0.08271, 0, 0.59111], 713: [0, 0.59444, 0.10444, 0, 0.59111], 714: [0, 0.69444, 0.08528, 0, 0.59111], 715: [0, 0.69444, 0, 0, 0.59111], 728: [0, 0.69444, 0.10333, 0, 0.59111], 729: [0, 0.69444, 0.12945, 0, 0.35555], 730: [0, 0.69444, 0, 0, 0.94888], 732: [0, 0.69444, 0.11472, 0, 0.59111], 733: [0, 0.69444, 0.11472, 0, 0.59111], 915: [0, 0.68611, 0.12903, 0, 0.69777], 916: [0, 0.68611, 0, 0, 0.94444], 920: [0, 0.68611, 0.09062, 0, 0.88555], 923: [0, 0.68611, 0, 0, 0.80666], 926: [0, 0.68611, 0.15092, 0, 0.76777], 928: [0, 0.68611, 0.17208, 0, 0.8961], 931: [0, 0.68611, 0.11431, 0, 0.82666], 933: [0, 0.68611, 0.10778, 0, 0.88555], 934: [0, 0.68611, 0.05632, 0, 0.82666], 936: [0, 0.68611, 0.10778, 0, 0.88555], 937: [0, 0.68611, 0.0992, 0, 0.82666], 8211: [0, 0.44444, 0.09811, 0, 0.59111], 8212: [0, 0.44444, 0.09811, 0, 1.18221], 8216: [0, 0.69444, 0.12945, 0, 0.35555], 8217: [0, 0.69444, 0.12945, 0, 0.35555], 8220: [0, 0.69444, 0.16772, 0, 0.62055], 8221: [0, 0.69444, 0.07939, 0, 0.62055] }, "Main-Italic": { 32: [0, 0, 0, 0, 0.25], 33: [0, 0.69444, 0.12417, 0, 0.30667], 34: [0, 0.69444, 0.06961, 0, 0.51444], 35: [0.19444, 0.69444, 0.06616, 0, 0.81777], 37: [0.05556, 0.75, 0.13639, 0, 0.81777], 38: [0, 0.69444, 0.09694, 0, 0.76666], 39: [0, 0.69444, 0.12417, 0, 0.30667], 40: [0.25, 0.75, 0.16194, 0, 0.40889], 41: [0.25, 0.75, 0.03694, 0, 0.40889], 42: [0, 0.75, 0.14917, 0, 0.51111], 43: [0.05667, 0.56167, 0.03694, 0, 0.76666], 44: [0.19444, 0.10556, 0, 0, 0.30667], 45: [0, 0.43056, 0.02826, 0, 0.35778], 46: [0, 0.10556, 0, 0, 0.30667], 47: [0.25, 0.75, 0.16194, 0, 0.51111], 48: [0, 0.64444, 0.13556, 0, 0.51111], 49: [0, 0.64444, 0.13556, 0, 0.51111], 50: [0, 0.64444, 0.13556, 0, 0.51111], 51: [0, 0.64444, 0.13556, 0, 0.51111], 52: [0.19444, 0.64444, 0.13556, 0, 0.51111], 53: [0, 0.64444, 0.13556, 0, 0.51111], 54: [0, 0.64444, 0.13556, 0, 0.51111], 55: [0.19444, 0.64444, 0.13556, 0, 0.51111], 56: [0, 0.64444, 0.13556, 0, 0.51111], 57: [0, 0.64444, 0.13556, 0, 0.51111], 58: [0, 0.43056, 0.0582, 0, 0.30667], 59: [0.19444, 0.43056, 0.0582, 0, 0.30667], 61: [-0.13313, 0.36687, 0.06616, 0, 0.76666], 63: [0, 0.69444, 0.1225, 0, 0.51111], 64: [0, 0.69444, 0.09597, 0, 0.76666], 65: [0, 0.68333, 0, 0, 0.74333], 66: [0, 0.68333, 0.10257, 0, 0.70389], 67: [0, 0.68333, 0.14528, 0, 0.71555], 68: [0, 0.68333, 0.09403, 0, 0.755], 69: [0, 0.68333, 0.12028, 0, 0.67833], 70: [0, 0.68333, 0.13305, 0, 0.65277], 71: [0, 0.68333, 0.08722, 0, 0.77361], 72: [0, 0.68333, 0.16389, 0, 0.74333], 73: [0, 0.68333, 0.15806, 0, 0.38555], 74: [0, 0.68333, 0.14028, 0, 0.525], 75: [0, 0.68333, 0.14528, 0, 0.76888], 76: [0, 0.68333, 0, 0, 0.62722], 77: [0, 0.68333, 0.16389, 0, 0.89666], 78: [0, 0.68333, 0.16389, 0, 0.74333], 79: [0, 0.68333, 0.09403, 0, 0.76666], 80: [0, 0.68333, 0.10257, 0, 0.67833], 81: [0.19444, 0.68333, 0.09403, 0, 0.76666], 82: [0, 0.68333, 0.03868, 0, 0.72944], 83: [0, 0.68333, 0.11972, 0, 0.56222], 84: [0, 0.68333, 0.13305, 0, 0.71555], 85: [0, 0.68333, 0.16389, 0, 0.74333], 86: [0, 0.68333, 0.18361, 0, 0.74333], 87: [0, 0.68333, 0.18361, 0, 0.99888], 88: [0, 0.68333, 0.15806, 0, 0.74333], 89: [0, 0.68333, 0.19383, 0, 0.74333], 90: [0, 0.68333, 0.14528, 0, 0.61333], 91: [0.25, 0.75, 0.1875, 0, 0.30667], 93: [0.25, 0.75, 0.10528, 0, 0.30667], 94: [0, 0.69444, 0.06646, 0, 0.51111], 95: [0.31, 0.12056, 0.09208, 0, 0.51111], 97: [0, 0.43056, 0.07671, 0, 0.51111], 98: [0, 0.69444, 0.06312, 0, 0.46], 99: [0, 0.43056, 0.05653, 0, 0.46], 100: [0, 0.69444, 0.10333, 0, 0.51111], 101: [0, 0.43056, 0.07514, 0, 0.46], 102: [0.19444, 0.69444, 0.21194, 0, 0.30667], 103: [0.19444, 0.43056, 0.08847, 0, 0.46], 104: [0, 0.69444, 0.07671, 0, 0.51111], 105: [0, 0.65536, 0.1019, 0, 0.30667], 106: [0.19444, 0.65536, 0.14467, 0, 0.30667], 107: [0, 0.69444, 0.10764, 0, 0.46], 108: [0, 0.69444, 0.10333, 0, 0.25555], 109: [0, 0.43056, 0.07671, 0, 0.81777], 110: [0, 0.43056, 0.07671, 0, 0.56222], 111: [0, 0.43056, 0.06312, 0, 0.51111], 112: [0.19444, 0.43056, 0.06312, 0, 0.51111], 113: [0.19444, 0.43056, 0.08847, 0, 0.46], 114: [0, 0.43056, 0.10764, 0, 0.42166], 115: [0, 0.43056, 0.08208, 0, 0.40889], 116: [0, 0.61508, 0.09486, 0, 0.33222], 117: [0, 0.43056, 0.07671, 0, 0.53666], 118: [0, 0.43056, 0.10764, 0, 0.46], 119: [0, 0.43056, 0.10764, 0, 0.66444], 120: [0, 0.43056, 0.12042, 0, 0.46389], 121: [0.19444, 0.43056, 0.08847, 0, 0.48555], 122: [0, 0.43056, 0.12292, 0, 0.40889], 126: [0.35, 0.31786, 0.11585, 0, 0.51111], 160: [0, 0, 0, 0, 0.25], 168: [0, 0.66786, 0.10474, 0, 0.51111], 176: [0, 0.69444, 0, 0, 0.83129], 184: [0.17014, 0, 0, 0, 0.46], 198: [0, 0.68333, 0.12028, 0, 0.88277], 216: [0.04861, 0.73194, 0.09403, 0, 0.76666], 223: [0.19444, 0.69444, 0.10514, 0, 0.53666], 230: [0, 0.43056, 0.07514, 0, 0.71555], 248: [0.09722, 0.52778, 0.09194, 0, 0.51111], 338: [0, 0.68333, 0.12028, 0, 0.98499], 339: [0, 0.43056, 0.07514, 0, 0.71555], 710: [0, 0.69444, 0.06646, 0, 0.51111], 711: [0, 0.62847, 0.08295, 0, 0.51111], 713: [0, 0.56167, 0.10333, 0, 0.51111], 714: [0, 0.69444, 0.09694, 0, 0.51111], 715: [0, 0.69444, 0, 0, 0.51111], 728: [0, 0.69444, 0.10806, 0, 0.51111], 729: [0, 0.66786, 0.11752, 0, 0.30667], 730: [0, 0.69444, 0, 0, 0.83129], 732: [0, 0.66786, 0.11585, 0, 0.51111], 733: [0, 0.69444, 0.1225, 0, 0.51111], 915: [0, 0.68333, 0.13305, 0, 0.62722], 916: [0, 0.68333, 0, 0, 0.81777], 920: [0, 0.68333, 0.09403, 0, 0.76666], 923: [0, 0.68333, 0, 0, 0.69222], 926: [0, 0.68333, 0.15294, 0, 0.66444], 928: [0, 0.68333, 0.16389, 0, 0.74333], 931: [0, 0.68333, 0.12028, 0, 0.71555], 933: [0, 0.68333, 0.11111, 0, 0.76666], 934: [0, 0.68333, 0.05986, 0, 0.71555], 936: [0, 0.68333, 0.11111, 0, 0.76666], 937: [0, 0.68333, 0.10257, 0, 0.71555], 8211: [0, 0.43056, 0.09208, 0, 0.51111], 8212: [0, 0.43056, 0.09208, 0, 1.02222], 8216: [0, 0.69444, 0.12417, 0, 0.30667], 8217: [0, 0.69444, 0.12417, 0, 0.30667], 8220: [0, 0.69444, 0.1685, 0, 0.51444], 8221: [0, 0.69444, 0.06961, 0, 0.51444], 8463: [0, 0.68889, 0, 0, 0.54028] }, "Main-Regular": { 32: [0, 0, 0, 0, 0.25], 33: [0, 0.69444, 0, 0, 0.27778], 34: [0, 0.69444, 0, 0, 0.5], 35: [0.19444, 0.69444, 0, 0, 0.83334], 36: [0.05556, 0.75, 0, 0, 0.5], 37: [0.05556, 0.75, 0, 0, 0.83334], 38: [0, 0.69444, 0, 0, 0.77778], 39: [0, 0.69444, 0, 0, 0.27778], 40: [0.25, 0.75, 0, 0, 0.38889], 41: [0.25, 0.75, 0, 0, 0.38889], 42: [0, 0.75, 0, 0, 0.5], 43: [0.08333, 0.58333, 0, 0, 0.77778], 44: [0.19444, 0.10556, 0, 0, 0.27778], 45: [0, 0.43056, 0, 0, 0.33333], 46: [0, 0.10556, 0, 0, 0.27778], 47: [0.25, 0.75, 0, 0, 0.5], 48: [0, 0.64444, 0, 0, 0.5], 49: [0, 0.64444, 0, 0, 0.5], 50: [0, 0.64444, 0, 0, 0.5], 51: [0, 0.64444, 0, 0, 0.5], 52: [0, 0.64444, 0, 0, 0.5], 53: [0, 0.64444, 0, 0, 0.5], 54: [0, 0.64444, 0, 0, 0.5], 55: [0, 0.64444, 0, 0, 0.5], 56: [0, 0.64444, 0, 0, 0.5], 57: [0, 0.64444, 0, 0, 0.5], 58: [0, 0.43056, 0, 0, 0.27778], 59: [0.19444, 0.43056, 0, 0, 0.27778], 60: [0.0391, 0.5391, 0, 0, 0.77778], 61: [-0.13313, 0.36687, 0, 0, 0.77778], 62: [0.0391, 0.5391, 0, 0, 0.77778], 63: [0, 0.69444, 0, 0, 0.47222], 64: [0, 0.69444, 0, 0, 0.77778], 65: [0, 0.68333, 0, 0, 0.75], 66: [0, 0.68333, 0, 0, 0.70834], 67: [0, 0.68333, 0, 0, 0.72222], 68: [0, 0.68333, 0, 0, 0.76389], 69: [0, 0.68333, 0, 0, 0.68056], 70: [0, 0.68333, 0, 0, 0.65278], 71: [0, 0.68333, 0, 0, 0.78472], 72: [0, 0.68333, 0, 0, 0.75], 73: [0, 0.68333, 0, 0, 0.36111], 74: [0, 0.68333, 0, 0, 0.51389], 75: [0, 0.68333, 0, 0, 0.77778], 76: [0, 0.68333, 0, 0, 0.625], 77: [0, 0.68333, 0, 0, 0.91667], 78: [0, 0.68333, 0, 0, 0.75], 79: [0, 0.68333, 0, 0, 0.77778], 80: [0, 0.68333, 0, 0, 0.68056], 81: [0.19444, 0.68333, 0, 0, 0.77778], 82: [0, 0.68333, 0, 0, 0.73611], 83: [0, 0.68333, 0, 0, 0.55556], 84: [0, 0.68333, 0, 0, 0.72222], 85: [0, 0.68333, 0, 0, 0.75], 86: [0, 0.68333, 0.01389, 0, 0.75], 87: [0, 0.68333, 0.01389, 0, 1.02778], 88: [0, 0.68333, 0, 0, 0.75], 89: [0, 0.68333, 0.025, 0, 0.75], 90: [0, 0.68333, 0, 0, 0.61111], 91: [0.25, 0.75, 0, 0, 0.27778], 92: [0.25, 0.75, 0, 0, 0.5], 93: [0.25, 0.75, 0, 0, 0.27778], 94: [0, 0.69444, 0, 0, 0.5], 95: [0.31, 0.12056, 0.02778, 0, 0.5], 97: [0, 0.43056, 0, 0, 0.5], 98: [0, 0.69444, 0, 0, 0.55556], 99: [0, 0.43056, 0, 0, 0.44445], 100: [0, 0.69444, 0, 0, 0.55556], 101: [0, 0.43056, 0, 0, 0.44445], 102: [0, 0.69444, 0.07778, 0, 0.30556], 103: [0.19444, 0.43056, 0.01389, 0, 0.5], 104: [0, 0.69444, 0, 0, 0.55556], 105: [0, 0.66786, 0, 0, 0.27778], 106: [0.19444, 0.66786, 0, 0, 0.30556], 107: [0, 0.69444, 0, 0, 0.52778], 108: [0, 0.69444, 0, 0, 0.27778], 109: [0, 0.43056, 0, 0, 0.83334], 110: [0, 0.43056, 0, 0, 0.55556], 111: [0, 0.43056, 0, 0, 0.5], 112: [0.19444, 0.43056, 0, 0, 0.55556], 113: [0.19444, 0.43056, 0, 0, 0.52778], 114: [0, 0.43056, 0, 0, 0.39167], 115: [0, 0.43056, 0, 0, 0.39445], 116: [0, 0.61508, 0, 0, 0.38889], 117: [0, 0.43056, 0, 0, 0.55556], 118: [0, 0.43056, 0.01389, 0, 0.52778], 119: [0, 0.43056, 0.01389, 0, 0.72222], 120: [0, 0.43056, 0, 0, 0.52778], 121: [0.19444, 0.43056, 0.01389, 0, 0.52778], 122: [0, 0.43056, 0, 0, 0.44445], 123: [0.25, 0.75, 0, 0, 0.5], 124: [0.25, 0.75, 0, 0, 0.27778], 125: [0.25, 0.75, 0, 0, 0.5], 126: [0.35, 0.31786, 0, 0, 0.5], 160: [0, 0, 0, 0, 0.25], 163: [0, 0.69444, 0, 0, 0.76909], 167: [0.19444, 0.69444, 0, 0, 0.44445], 168: [0, 0.66786, 0, 0, 0.5], 172: [0, 0.43056, 0, 0, 0.66667], 176: [0, 0.69444, 0, 0, 0.75], 177: [0.08333, 0.58333, 0, 0, 0.77778], 182: [0.19444, 0.69444, 0, 0, 0.61111], 184: [0.17014, 0, 0, 0, 0.44445], 198: [0, 0.68333, 0, 0, 0.90278], 215: [0.08333, 0.58333, 0, 0, 0.77778], 216: [0.04861, 0.73194, 0, 0, 0.77778], 223: [0, 0.69444, 0, 0, 0.5], 230: [0, 0.43056, 0, 0, 0.72222], 247: [0.08333, 0.58333, 0, 0, 0.77778], 248: [0.09722, 0.52778, 0, 0, 0.5], 305: [0, 0.43056, 0, 0, 0.27778], 338: [0, 0.68333, 0, 0, 1.01389], 339: [0, 0.43056, 0, 0, 0.77778], 567: [0.19444, 0.43056, 0, 0, 0.30556], 710: [0, 0.69444, 0, 0, 0.5], 711: [0, 0.62847, 0, 0, 0.5], 713: [0, 0.56778, 0, 0, 0.5], 714: [0, 0.69444, 0, 0, 0.5], 715: [0, 0.69444, 0, 0, 0.5], 728: [0, 0.69444, 0, 0, 0.5], 729: [0, 0.66786, 0, 0, 0.27778], 730: [0, 0.69444, 0, 0, 0.75], 732: [0, 0.66786, 0, 0, 0.5], 733: [0, 0.69444, 0, 0, 0.5], 915: [0, 0.68333, 0, 0, 0.625], 916: [0, 0.68333, 0, 0, 0.83334], 920: [0, 0.68333, 0, 0, 0.77778], 923: [0, 0.68333, 0, 0, 0.69445], 926: [0, 0.68333, 0, 0, 0.66667], 928: [0, 0.68333, 0, 0, 0.75], 931: [0, 0.68333, 0, 0, 0.72222], 933: [0, 0.68333, 0, 0, 0.77778], 934: [0, 0.68333, 0, 0, 0.72222], 936: [0, 0.68333, 0, 0, 0.77778], 937: [0, 0.68333, 0, 0, 0.72222], 8211: [0, 0.43056, 0.02778, 0, 0.5], 8212: [0, 0.43056, 0.02778, 0, 1], 8216: [0, 0.69444, 0, 0, 0.27778], 8217: [0, 0.69444, 0, 0, 0.27778], 8220: [0, 0.69444, 0, 0, 0.5], 8221: [0, 0.69444, 0, 0, 0.5], 8224: [0.19444, 0.69444, 0, 0, 0.44445], 8225: [0.19444, 0.69444, 0, 0, 0.44445], 8230: [0, 0.123, 0, 0, 1.172], 8242: [0, 0.55556, 0, 0, 0.275], 8407: [0, 0.71444, 0.15382, 0, 0.5], 8463: [0, 0.68889, 0, 0, 0.54028], 8465: [0, 0.69444, 0, 0, 0.72222], 8467: [0, 0.69444, 0, 0.11111, 0.41667], 8472: [0.19444, 0.43056, 0, 0.11111, 0.63646], 8476: [0, 0.69444, 0, 0, 0.72222], 8501: [0, 0.69444, 0, 0, 0.61111], 8592: [-0.13313, 0.36687, 0, 0, 1], 8593: [0.19444, 0.69444, 0, 0, 0.5], 8594: [-0.13313, 0.36687, 0, 0, 1], 8595: [0.19444, 0.69444, 0, 0, 0.5], 8596: [-0.13313, 0.36687, 0, 0, 1], 8597: [0.25, 0.75, 0, 0, 0.5], 8598: [0.19444, 0.69444, 0, 0, 1], 8599: [0.19444, 0.69444, 0, 0, 1], 8600: [0.19444, 0.69444, 0, 0, 1], 8601: [0.19444, 0.69444, 0, 0, 1], 8614: [0.011, 0.511, 0, 0, 1], 8617: [0.011, 0.511, 0, 0, 1.126], 8618: [0.011, 0.511, 0, 0, 1.126], 8636: [-0.13313, 0.36687, 0, 0, 1], 8637: [-0.13313, 0.36687, 0, 0, 1], 8640: [-0.13313, 0.36687, 0, 0, 1], 8641: [-0.13313, 0.36687, 0, 0, 1], 8652: [0.011, 0.671, 0, 0, 1], 8656: [-0.13313, 0.36687, 0, 0, 1], 8657: [0.19444, 0.69444, 0, 0, 0.61111], 8658: [-0.13313, 0.36687, 0, 0, 1], 8659: [0.19444, 0.69444, 0, 0, 0.61111], 8660: [-0.13313, 0.36687, 0, 0, 1], 8661: [0.25, 0.75, 0, 0, 0.61111], 8704: [0, 0.69444, 0, 0, 0.55556], 8706: [0, 0.69444, 0.05556, 0.08334, 0.5309], 8707: [0, 0.69444, 0, 0, 0.55556], 8709: [0.05556, 0.75, 0, 0, 0.5], 8711: [0, 0.68333, 0, 0, 0.83334], 8712: [0.0391, 0.5391, 0, 0, 0.66667], 8715: [0.0391, 0.5391, 0, 0, 0.66667], 8722: [0.08333, 0.58333, 0, 0, 0.77778], 8723: [0.08333, 0.58333, 0, 0, 0.77778], 8725: [0.25, 0.75, 0, 0, 0.5], 8726: [0.25, 0.75, 0, 0, 0.5], 8727: [-0.03472, 0.46528, 0, 0, 0.5], 8728: [-0.05555, 0.44445, 0, 0, 0.5], 8729: [-0.05555, 0.44445, 0, 0, 0.5], 8730: [0.2, 0.8, 0, 0, 0.83334], 8733: [0, 0.43056, 0, 0, 0.77778], 8734: [0, 0.43056, 0, 0, 1], 8736: [0, 0.69224, 0, 0, 0.72222], 8739: [0.25, 0.75, 0, 0, 0.27778], 8741: [0.25, 0.75, 0, 0, 0.5], 8743: [0, 0.55556, 0, 0, 0.66667], 8744: [0, 0.55556, 0, 0, 0.66667], 8745: [0, 0.55556, 0, 0, 0.66667], 8746: [0, 0.55556, 0, 0, 0.66667], 8747: [0.19444, 0.69444, 0.11111, 0, 0.41667], 8764: [-0.13313, 0.36687, 0, 0, 0.77778], 8768: [0.19444, 0.69444, 0, 0, 0.27778], 8771: [-0.03625, 0.46375, 0, 0, 0.77778], 8773: [-0.022, 0.589, 0, 0, 0.778], 8776: [-0.01688, 0.48312, 0, 0, 0.77778], 8781: [-0.03625, 0.46375, 0, 0, 0.77778], 8784: [-0.133, 0.673, 0, 0, 0.778], 8801: [-0.03625, 0.46375, 0, 0, 0.77778], 8804: [0.13597, 0.63597, 0, 0, 0.77778], 8805: [0.13597, 0.63597, 0, 0, 0.77778], 8810: [0.0391, 0.5391, 0, 0, 1], 8811: [0.0391, 0.5391, 0, 0, 1], 8826: [0.0391, 0.5391, 0, 0, 0.77778], 8827: [0.0391, 0.5391, 0, 0, 0.77778], 8834: [0.0391, 0.5391, 0, 0, 0.77778], 8835: [0.0391, 0.5391, 0, 0, 0.77778], 8838: [0.13597, 0.63597, 0, 0, 0.77778], 8839: [0.13597, 0.63597, 0, 0, 0.77778], 8846: [0, 0.55556, 0, 0, 0.66667], 8849: [0.13597, 0.63597, 0, 0, 0.77778], 8850: [0.13597, 0.63597, 0, 0, 0.77778], 8851: [0, 0.55556, 0, 0, 0.66667], 8852: [0, 0.55556, 0, 0, 0.66667], 8853: [0.08333, 0.58333, 0, 0, 0.77778], 8854: [0.08333, 0.58333, 0, 0, 0.77778], 8855: [0.08333, 0.58333, 0, 0, 0.77778], 8856: [0.08333, 0.58333, 0, 0, 0.77778], 8857: [0.08333, 0.58333, 0, 0, 0.77778], 8866: [0, 0.69444, 0, 0, 0.61111], 8867: [0, 0.69444, 0, 0, 0.61111], 8868: [0, 0.69444, 0, 0, 0.77778], 8869: [0, 0.69444, 0, 0, 0.77778], 8872: [0.249, 0.75, 0, 0, 0.867], 8900: [-0.05555, 0.44445, 0, 0, 0.5], 8901: [-0.05555, 0.44445, 0, 0, 0.27778], 8902: [-0.03472, 0.46528, 0, 0, 0.5], 8904: [5e-3, 0.505, 0, 0, 0.9], 8942: [0.03, 0.903, 0, 0, 0.278], 8943: [-0.19, 0.313, 0, 0, 1.172], 8945: [-0.1, 0.823, 0, 0, 1.282], 8968: [0.25, 0.75, 0, 0, 0.44445], 8969: [0.25, 0.75, 0, 0, 0.44445], 8970: [0.25, 0.75, 0, 0, 0.44445], 8971: [0.25, 0.75, 0, 0, 0.44445], 8994: [-0.14236, 0.35764, 0, 0, 1], 8995: [-0.14236, 0.35764, 0, 0, 1], 9136: [0.244, 0.744, 0, 0, 0.412], 9137: [0.244, 0.745, 0, 0, 0.412], 9651: [0.19444, 0.69444, 0, 0, 0.88889], 9657: [-0.03472, 0.46528, 0, 0, 0.5], 9661: [0.19444, 0.69444, 0, 0, 0.88889], 9667: [-0.03472, 0.46528, 0, 0, 0.5], 9711: [0.19444, 0.69444, 0, 0, 1], 9824: [0.12963, 0.69444, 0, 0, 0.77778], 9825: [0.12963, 0.69444, 0, 0, 0.77778], 9826: [0.12963, 0.69444, 0, 0, 0.77778], 9827: [0.12963, 0.69444, 0, 0, 0.77778], 9837: [0, 0.75, 0, 0, 0.38889], 9838: [0.19444, 0.69444, 0, 0, 0.38889], 9839: [0.19444, 0.69444, 0, 0, 0.38889], 10216: [0.25, 0.75, 0, 0, 0.38889], 10217: [0.25, 0.75, 0, 0, 0.38889], 10222: [0.244, 0.744, 0, 0, 0.412], 10223: [0.244, 0.745, 0, 0, 0.412], 10229: [0.011, 0.511, 0, 0, 1.609], 10230: [0.011, 0.511, 0, 0, 1.638], 10231: [0.011, 0.511, 0, 0, 1.859], 10232: [0.024, 0.525, 0, 0, 1.609], 10233: [0.024, 0.525, 0, 0, 1.638], 10234: [0.024, 0.525, 0, 0, 1.858], 10236: [0.011, 0.511, 0, 0, 1.638], 10815: [0, 0.68333, 0, 0, 0.75], 10927: [0.13597, 0.63597, 0, 0, 0.77778], 10928: [0.13597, 0.63597, 0, 0, 0.77778], 57376: [0.19444, 0.69444, 0, 0, 0] }, "Math-BoldItalic": { 32: [0, 0, 0, 0, 0.25], 48: [0, 0.44444, 0, 0, 0.575], 49: [0, 0.44444, 0, 0, 0.575], 50: [0, 0.44444, 0, 0, 0.575], 51: [0.19444, 0.44444, 0, 0, 0.575], 52: [0.19444, 0.44444, 0, 0, 0.575], 53: [0.19444, 0.44444, 0, 0, 0.575], 54: [0, 0.64444, 0, 0, 0.575], 55: [0.19444, 0.44444, 0, 0, 0.575], 56: [0, 0.64444, 0, 0, 0.575], 57: [0.19444, 0.44444, 0, 0, 0.575], 65: [0, 0.68611, 0, 0, 0.86944], 66: [0, 0.68611, 0.04835, 0, 0.8664], 67: [0, 0.68611, 0.06979, 0, 0.81694], 68: [0, 0.68611, 0.03194, 0, 0.93812], 69: [0, 0.68611, 0.05451, 0, 0.81007], 70: [0, 0.68611, 0.15972, 0, 0.68889], 71: [0, 0.68611, 0, 0, 0.88673], 72: [0, 0.68611, 0.08229, 0, 0.98229], 73: [0, 0.68611, 0.07778, 0, 0.51111], 74: [0, 0.68611, 0.10069, 0, 0.63125], 75: [0, 0.68611, 0.06979, 0, 0.97118], 76: [0, 0.68611, 0, 0, 0.75555], 77: [0, 0.68611, 0.11424, 0, 1.14201], 78: [0, 0.68611, 0.11424, 0, 0.95034], 79: [0, 0.68611, 0.03194, 0, 0.83666], 80: [0, 0.68611, 0.15972, 0, 0.72309], 81: [0.19444, 0.68611, 0, 0, 0.86861], 82: [0, 0.68611, 421e-5, 0, 0.87235], 83: [0, 0.68611, 0.05382, 0, 0.69271], 84: [0, 0.68611, 0.15972, 0, 0.63663], 85: [0, 0.68611, 0.11424, 0, 0.80027], 86: [0, 0.68611, 0.25555, 0, 0.67778], 87: [0, 0.68611, 0.15972, 0, 1.09305], 88: [0, 0.68611, 0.07778, 0, 0.94722], 89: [0, 0.68611, 0.25555, 0, 0.67458], 90: [0, 0.68611, 0.06979, 0, 0.77257], 97: [0, 0.44444, 0, 0, 0.63287], 98: [0, 0.69444, 0, 0, 0.52083], 99: [0, 0.44444, 0, 0, 0.51342], 100: [0, 0.69444, 0, 0, 0.60972], 101: [0, 0.44444, 0, 0, 0.55361], 102: [0.19444, 0.69444, 0.11042, 0, 0.56806], 103: [0.19444, 0.44444, 0.03704, 0, 0.5449], 104: [0, 0.69444, 0, 0, 0.66759], 105: [0, 0.69326, 0, 0, 0.4048], 106: [0.19444, 0.69326, 0.0622, 0, 0.47083], 107: [0, 0.69444, 0.01852, 0, 0.6037], 108: [0, 0.69444, 88e-4, 0, 0.34815], 109: [0, 0.44444, 0, 0, 1.0324], 110: [0, 0.44444, 0, 0, 0.71296], 111: [0, 0.44444, 0, 0, 0.58472], 112: [0.19444, 0.44444, 0, 0, 0.60092], 113: [0.19444, 0.44444, 0.03704, 0, 0.54213], 114: [0, 0.44444, 0.03194, 0, 0.5287], 115: [0, 0.44444, 0, 0, 0.53125], 116: [0, 0.63492, 0, 0, 0.41528], 117: [0, 0.44444, 0, 0, 0.68102], 118: [0, 0.44444, 0.03704, 0, 0.56666], 119: [0, 0.44444, 0.02778, 0, 0.83148], 120: [0, 0.44444, 0, 0, 0.65903], 121: [0.19444, 0.44444, 0.03704, 0, 0.59028], 122: [0, 0.44444, 0.04213, 0, 0.55509], 160: [0, 0, 0, 0, 0.25], 915: [0, 0.68611, 0.15972, 0, 0.65694], 916: [0, 0.68611, 0, 0, 0.95833], 920: [0, 0.68611, 0.03194, 0, 0.86722], 923: [0, 0.68611, 0, 0, 0.80555], 926: [0, 0.68611, 0.07458, 0, 0.84125], 928: [0, 0.68611, 0.08229, 0, 0.98229], 931: [0, 0.68611, 0.05451, 0, 0.88507], 933: [0, 0.68611, 0.15972, 0, 0.67083], 934: [0, 0.68611, 0, 0, 0.76666], 936: [0, 0.68611, 0.11653, 0, 0.71402], 937: [0, 0.68611, 0.04835, 0, 0.8789], 945: [0, 0.44444, 0, 0, 0.76064], 946: [0.19444, 0.69444, 0.03403, 0, 0.65972], 947: [0.19444, 0.44444, 0.06389, 0, 0.59003], 948: [0, 0.69444, 0.03819, 0, 0.52222], 949: [0, 0.44444, 0, 0, 0.52882], 950: [0.19444, 0.69444, 0.06215, 0, 0.50833], 951: [0.19444, 0.44444, 0.03704, 0, 0.6], 952: [0, 0.69444, 0.03194, 0, 0.5618], 953: [0, 0.44444, 0, 0, 0.41204], 954: [0, 0.44444, 0, 0, 0.66759], 955: [0, 0.69444, 0, 0, 0.67083], 956: [0.19444, 0.44444, 0, 0, 0.70787], 957: [0, 0.44444, 0.06898, 0, 0.57685], 958: [0.19444, 0.69444, 0.03021, 0, 0.50833], 959: [0, 0.44444, 0, 0, 0.58472], 960: [0, 0.44444, 0.03704, 0, 0.68241], 961: [0.19444, 0.44444, 0, 0, 0.6118], 962: [0.09722, 0.44444, 0.07917, 0, 0.42361], 963: [0, 0.44444, 0.03704, 0, 0.68588], 964: [0, 0.44444, 0.13472, 0, 0.52083], 965: [0, 0.44444, 0.03704, 0, 0.63055], 966: [0.19444, 0.44444, 0, 0, 0.74722], 967: [0.19444, 0.44444, 0, 0, 0.71805], 968: [0.19444, 0.69444, 0.03704, 0, 0.75833], 969: [0, 0.44444, 0.03704, 0, 0.71782], 977: [0, 0.69444, 0, 0, 0.69155], 981: [0.19444, 0.69444, 0, 0, 0.7125], 982: [0, 0.44444, 0.03194, 0, 0.975], 1009: [0.19444, 0.44444, 0, 0, 0.6118], 1013: [0, 0.44444, 0, 0, 0.48333], 57649: [0, 0.44444, 0, 0, 0.39352], 57911: [0.19444, 0.44444, 0, 0, 0.43889] }, "Math-Italic": { 32: [0, 0, 0, 0, 0.25], 48: [0, 0.43056, 0, 0, 0.5], 49: [0, 0.43056, 0, 0, 0.5], 50: [0, 0.43056, 0, 0, 0.5], 51: [0.19444, 0.43056, 0, 0, 0.5], 52: [0.19444, 0.43056, 0, 0, 0.5], 53: [0.19444, 0.43056, 0, 0, 0.5], 54: [0, 0.64444, 0, 0, 0.5], 55: [0.19444, 0.43056, 0, 0, 0.5], 56: [0, 0.64444, 0, 0, 0.5], 57: [0.19444, 0.43056, 0, 0, 0.5], 65: [0, 0.68333, 0, 0.13889, 0.75], 66: [0, 0.68333, 0.05017, 0.08334, 0.75851], 67: [0, 0.68333, 0.07153, 0.08334, 0.71472], 68: [0, 0.68333, 0.02778, 0.05556, 0.82792], 69: [0, 0.68333, 0.05764, 0.08334, 0.7382], 70: [0, 0.68333, 0.13889, 0.08334, 0.64306], 71: [0, 0.68333, 0, 0.08334, 0.78625], 72: [0, 0.68333, 0.08125, 0.05556, 0.83125], 73: [0, 0.68333, 0.07847, 0.11111, 0.43958], 74: [0, 0.68333, 0.09618, 0.16667, 0.55451], 75: [0, 0.68333, 0.07153, 0.05556, 0.84931], 76: [0, 0.68333, 0, 0.02778, 0.68056], 77: [0, 0.68333, 0.10903, 0.08334, 0.97014], 78: [0, 0.68333, 0.10903, 0.08334, 0.80347], 79: [0, 0.68333, 0.02778, 0.08334, 0.76278], 80: [0, 0.68333, 0.13889, 0.08334, 0.64201], 81: [0.19444, 0.68333, 0, 0.08334, 0.79056], 82: [0, 0.68333, 773e-5, 0.08334, 0.75929], 83: [0, 0.68333, 0.05764, 0.08334, 0.6132], 84: [0, 0.68333, 0.13889, 0.08334, 0.58438], 85: [0, 0.68333, 0.10903, 0.02778, 0.68278], 86: [0, 0.68333, 0.22222, 0, 0.58333], 87: [0, 0.68333, 0.13889, 0, 0.94445], 88: [0, 0.68333, 0.07847, 0.08334, 0.82847], 89: [0, 0.68333, 0.22222, 0, 0.58056], 90: [0, 0.68333, 0.07153, 0.08334, 0.68264], 97: [0, 0.43056, 0, 0, 0.52859], 98: [0, 0.69444, 0, 0, 0.42917], 99: [0, 0.43056, 0, 0.05556, 0.43276], 100: [0, 0.69444, 0, 0.16667, 0.52049], 101: [0, 0.43056, 0, 0.05556, 0.46563], 102: [0.19444, 0.69444, 0.10764, 0.16667, 0.48959], 103: [0.19444, 0.43056, 0.03588, 0.02778, 0.47697], 104: [0, 0.69444, 0, 0, 0.57616], 105: [0, 0.65952, 0, 0, 0.34451], 106: [0.19444, 0.65952, 0.05724, 0, 0.41181], 107: [0, 0.69444, 0.03148, 0, 0.5206], 108: [0, 0.69444, 0.01968, 0.08334, 0.29838], 109: [0, 0.43056, 0, 0, 0.87801], 110: [0, 0.43056, 0, 0, 0.60023], 111: [0, 0.43056, 0, 0.05556, 0.48472], 112: [0.19444, 0.43056, 0, 0.08334, 0.50313], 113: [0.19444, 0.43056, 0.03588, 0.08334, 0.44641], 114: [0, 0.43056, 0.02778, 0.05556, 0.45116], 115: [0, 0.43056, 0, 0.05556, 0.46875], 116: [0, 0.61508, 0, 0.08334, 0.36111], 117: [0, 0.43056, 0, 0.02778, 0.57246], 118: [0, 0.43056, 0.03588, 0.02778, 0.48472], 119: [0, 0.43056, 0.02691, 0.08334, 0.71592], 120: [0, 0.43056, 0, 0.02778, 0.57153], 121: [0.19444, 0.43056, 0.03588, 0.05556, 0.49028], 122: [0, 0.43056, 0.04398, 0.05556, 0.46505], 160: [0, 0, 0, 0, 0.25], 915: [0, 0.68333, 0.13889, 0.08334, 0.61528], 916: [0, 0.68333, 0, 0.16667, 0.83334], 920: [0, 0.68333, 0.02778, 0.08334, 0.76278], 923: [0, 0.68333, 0, 0.16667, 0.69445], 926: [0, 0.68333, 0.07569, 0.08334, 0.74236], 928: [0, 0.68333, 0.08125, 0.05556, 0.83125], 931: [0, 0.68333, 0.05764, 0.08334, 0.77986], 933: [0, 0.68333, 0.13889, 0.05556, 0.58333], 934: [0, 0.68333, 0, 0.08334, 0.66667], 936: [0, 0.68333, 0.11, 0.05556, 0.61222], 937: [0, 0.68333, 0.05017, 0.08334, 0.7724], 945: [0, 0.43056, 37e-4, 0.02778, 0.6397], 946: [0.19444, 0.69444, 0.05278, 0.08334, 0.56563], 947: [0.19444, 0.43056, 0.05556, 0, 0.51773], 948: [0, 0.69444, 0.03785, 0.05556, 0.44444], 949: [0, 0.43056, 0, 0.08334, 0.46632], 950: [0.19444, 0.69444, 0.07378, 0.08334, 0.4375], 951: [0.19444, 0.43056, 0.03588, 0.05556, 0.49653], 952: [0, 0.69444, 0.02778, 0.08334, 0.46944], 953: [0, 0.43056, 0, 0.05556, 0.35394], 954: [0, 0.43056, 0, 0, 0.57616], 955: [0, 0.69444, 0, 0, 0.58334], 956: [0.19444, 0.43056, 0, 0.02778, 0.60255], 957: [0, 0.43056, 0.06366, 0.02778, 0.49398], 958: [0.19444, 0.69444, 0.04601, 0.11111, 0.4375], 959: [0, 0.43056, 0, 0.05556, 0.48472], 960: [0, 0.43056, 0.03588, 0, 0.57003], 961: [0.19444, 0.43056, 0, 0.08334, 0.51702], 962: [0.09722, 0.43056, 0.07986, 0.08334, 0.36285], 963: [0, 0.43056, 0.03588, 0, 0.57141], 964: [0, 0.43056, 0.1132, 0.02778, 0.43715], 965: [0, 0.43056, 0.03588, 0.02778, 0.54028], 966: [0.19444, 0.43056, 0, 0.08334, 0.65417], 967: [0.19444, 0.43056, 0, 0.05556, 0.62569], 968: [0.19444, 0.69444, 0.03588, 0.11111, 0.65139], 969: [0, 0.43056, 0.03588, 0, 0.62245], 977: [0, 0.69444, 0, 0.08334, 0.59144], 981: [0.19444, 0.69444, 0, 0.08334, 0.59583], 982: [0, 0.43056, 0.02778, 0, 0.82813], 1009: [0.19444, 0.43056, 0, 0.08334, 0.51702], 1013: [0, 0.43056, 0, 0.05556, 0.4059], 57649: [0, 0.43056, 0, 0.02778, 0.32246], 57911: [0.19444, 0.43056, 0, 0.08334, 0.38403] }, "SansSerif-Bold": { 32: [0, 0, 0, 0, 0.25], 33: [0, 0.69444, 0, 0, 0.36667], 34: [0, 0.69444, 0, 0, 0.55834], 35: [0.19444, 0.69444, 0, 0, 0.91667], 36: [0.05556, 0.75, 0, 0, 0.55], 37: [0.05556, 0.75, 0, 0, 1.02912], 38: [0, 0.69444, 0, 0, 0.83056], 39: [0, 0.69444, 0, 0, 0.30556], 40: [0.25, 0.75, 0, 0, 0.42778], 41: [0.25, 0.75, 0, 0, 0.42778], 42: [0, 0.75, 0, 0, 0.55], 43: [0.11667, 0.61667, 0, 0, 0.85556], 44: [0.10556, 0.13056, 0, 0, 0.30556], 45: [0, 0.45833, 0, 0, 0.36667], 46: [0, 0.13056, 0, 0, 0.30556], 47: [0.25, 0.75, 0, 0, 0.55], 48: [0, 0.69444, 0, 0, 0.55], 49: [0, 0.69444, 0, 0, 0.55], 50: [0, 0.69444, 0, 0, 0.55], 51: [0, 0.69444, 0, 0, 0.55], 52: [0, 0.69444, 0, 0, 0.55], 53: [0, 0.69444, 0, 0, 0.55], 54: [0, 0.69444, 0, 0, 0.55], 55: [0, 0.69444, 0, 0, 0.55], 56: [0, 0.69444, 0, 0, 0.55], 57: [0, 0.69444, 0, 0, 0.55], 58: [0, 0.45833, 0, 0, 0.30556], 59: [0.10556, 0.45833, 0, 0, 0.30556], 61: [-0.09375, 0.40625, 0, 0, 0.85556], 63: [0, 0.69444, 0, 0, 0.51945], 64: [0, 0.69444, 0, 0, 0.73334], 65: [0, 0.69444, 0, 0, 0.73334], 66: [0, 0.69444, 0, 0, 0.73334], 67: [0, 0.69444, 0, 0, 0.70278], 68: [0, 0.69444, 0, 0, 0.79445], 69: [0, 0.69444, 0, 0, 0.64167], 70: [0, 0.69444, 0, 0, 0.61111], 71: [0, 0.69444, 0, 0, 0.73334], 72: [0, 0.69444, 0, 0, 0.79445], 73: [0, 0.69444, 0, 0, 0.33056], 74: [0, 0.69444, 0, 0, 0.51945], 75: [0, 0.69444, 0, 0, 0.76389], 76: [0, 0.69444, 0, 0, 0.58056], 77: [0, 0.69444, 0, 0, 0.97778], 78: [0, 0.69444, 0, 0, 0.79445], 79: [0, 0.69444, 0, 0, 0.79445], 80: [0, 0.69444, 0, 0, 0.70278], 81: [0.10556, 0.69444, 0, 0, 0.79445], 82: [0, 0.69444, 0, 0, 0.70278], 83: [0, 0.69444, 0, 0, 0.61111], 84: [0, 0.69444, 0, 0, 0.73334], 85: [0, 0.69444, 0, 0, 0.76389], 86: [0, 0.69444, 0.01528, 0, 0.73334], 87: [0, 0.69444, 0.01528, 0, 1.03889], 88: [0, 0.69444, 0, 0, 0.73334], 89: [0, 0.69444, 0.0275, 0, 0.73334], 90: [0, 0.69444, 0, 0, 0.67223], 91: [0.25, 0.75, 0, 0, 0.34306], 93: [0.25, 0.75, 0, 0, 0.34306], 94: [0, 0.69444, 0, 0, 0.55], 95: [0.35, 0.10833, 0.03056, 0, 0.55], 97: [0, 0.45833, 0, 0, 0.525], 98: [0, 0.69444, 0, 0, 0.56111], 99: [0, 0.45833, 0, 0, 0.48889], 100: [0, 0.69444, 0, 0, 0.56111], 101: [0, 0.45833, 0, 0, 0.51111], 102: [0, 0.69444, 0.07639, 0, 0.33611], 103: [0.19444, 0.45833, 0.01528, 0, 0.55], 104: [0, 0.69444, 0, 0, 0.56111], 105: [0, 0.69444, 0, 0, 0.25556], 106: [0.19444, 0.69444, 0, 0, 0.28611], 107: [0, 0.69444, 0, 0, 0.53056], 108: [0, 0.69444, 0, 0, 0.25556], 109: [0, 0.45833, 0, 0, 0.86667], 110: [0, 0.45833, 0, 0, 0.56111], 111: [0, 0.45833, 0, 0, 0.55], 112: [0.19444, 0.45833, 0, 0, 0.56111], 113: [0.19444, 0.45833, 0, 0, 0.56111], 114: [0, 0.45833, 0.01528, 0, 0.37222], 115: [0, 0.45833, 0, 0, 0.42167], 116: [0, 0.58929, 0, 0, 0.40417], 117: [0, 0.45833, 0, 0, 0.56111], 118: [0, 0.45833, 0.01528, 0, 0.5], 119: [0, 0.45833, 0.01528, 0, 0.74445], 120: [0, 0.45833, 0, 0, 0.5], 121: [0.19444, 0.45833, 0.01528, 0, 0.5], 122: [0, 0.45833, 0, 0, 0.47639], 126: [0.35, 0.34444, 0, 0, 0.55], 160: [0, 0, 0, 0, 0.25], 168: [0, 0.69444, 0, 0, 0.55], 176: [0, 0.69444, 0, 0, 0.73334], 180: [0, 0.69444, 0, 0, 0.55], 184: [0.17014, 0, 0, 0, 0.48889], 305: [0, 0.45833, 0, 0, 0.25556], 567: [0.19444, 0.45833, 0, 0, 0.28611], 710: [0, 0.69444, 0, 0, 0.55], 711: [0, 0.63542, 0, 0, 0.55], 713: [0, 0.63778, 0, 0, 0.55], 728: [0, 0.69444, 0, 0, 0.55], 729: [0, 0.69444, 0, 0, 0.30556], 730: [0, 0.69444, 0, 0, 0.73334], 732: [0, 0.69444, 0, 0, 0.55], 733: [0, 0.69444, 0, 0, 0.55], 915: [0, 0.69444, 0, 0, 0.58056], 916: [0, 0.69444, 0, 0, 0.91667], 920: [0, 0.69444, 0, 0, 0.85556], 923: [0, 0.69444, 0, 0, 0.67223], 926: [0, 0.69444, 0, 0, 0.73334], 928: [0, 0.69444, 0, 0, 0.79445], 931: [0, 0.69444, 0, 0, 0.79445], 933: [0, 0.69444, 0, 0, 0.85556], 934: [0, 0.69444, 0, 0, 0.79445], 936: [0, 0.69444, 0, 0, 0.85556], 937: [0, 0.69444, 0, 0, 0.79445], 8211: [0, 0.45833, 0.03056, 0, 0.55], 8212: [0, 0.45833, 0.03056, 0, 1.10001], 8216: [0, 0.69444, 0, 0, 0.30556], 8217: [0, 0.69444, 0, 0, 0.30556], 8220: [0, 0.69444, 0, 0, 0.55834], 8221: [0, 0.69444, 0, 0, 0.55834] }, "SansSerif-Italic": { 32: [0, 0, 0, 0, 0.25], 33: [0, 0.69444, 0.05733, 0, 0.31945], 34: [0, 0.69444, 316e-5, 0, 0.5], 35: [0.19444, 0.69444, 0.05087, 0, 0.83334], 36: [0.05556, 0.75, 0.11156, 0, 0.5], 37: [0.05556, 0.75, 0.03126, 0, 0.83334], 38: [0, 0.69444, 0.03058, 0, 0.75834], 39: [0, 0.69444, 0.07816, 0, 0.27778], 40: [0.25, 0.75, 0.13164, 0, 0.38889], 41: [0.25, 0.75, 0.02536, 0, 0.38889], 42: [0, 0.75, 0.11775, 0, 0.5], 43: [0.08333, 0.58333, 0.02536, 0, 0.77778], 44: [0.125, 0.08333, 0, 0, 0.27778], 45: [0, 0.44444, 0.01946, 0, 0.33333], 46: [0, 0.08333, 0, 0, 0.27778], 47: [0.25, 0.75, 0.13164, 0, 0.5], 48: [0, 0.65556, 0.11156, 0, 0.5], 49: [0, 0.65556, 0.11156, 0, 0.5], 50: [0, 0.65556, 0.11156, 0, 0.5], 51: [0, 0.65556, 0.11156, 0, 0.5], 52: [0, 0.65556, 0.11156, 0, 0.5], 53: [0, 0.65556, 0.11156, 0, 0.5], 54: [0, 0.65556, 0.11156, 0, 0.5], 55: [0, 0.65556, 0.11156, 0, 0.5], 56: [0, 0.65556, 0.11156, 0, 0.5], 57: [0, 0.65556, 0.11156, 0, 0.5], 58: [0, 0.44444, 0.02502, 0, 0.27778], 59: [0.125, 0.44444, 0.02502, 0, 0.27778], 61: [-0.13, 0.37, 0.05087, 0, 0.77778], 63: [0, 0.69444, 0.11809, 0, 0.47222], 64: [0, 0.69444, 0.07555, 0, 0.66667], 65: [0, 0.69444, 0, 0, 0.66667], 66: [0, 0.69444, 0.08293, 0, 0.66667], 67: [0, 0.69444, 0.11983, 0, 0.63889], 68: [0, 0.69444, 0.07555, 0, 0.72223], 69: [0, 0.69444, 0.11983, 0, 0.59722], 70: [0, 0.69444, 0.13372, 0, 0.56945], 71: [0, 0.69444, 0.11983, 0, 0.66667], 72: [0, 0.69444, 0.08094, 0, 0.70834], 73: [0, 0.69444, 0.13372, 0, 0.27778], 74: [0, 0.69444, 0.08094, 0, 0.47222], 75: [0, 0.69444, 0.11983, 0, 0.69445], 76: [0, 0.69444, 0, 0, 0.54167], 77: [0, 0.69444, 0.08094, 0, 0.875], 78: [0, 0.69444, 0.08094, 0, 0.70834], 79: [0, 0.69444, 0.07555, 0, 0.73611], 80: [0, 0.69444, 0.08293, 0, 0.63889], 81: [0.125, 0.69444, 0.07555, 0, 0.73611], 82: [0, 0.69444, 0.08293, 0, 0.64584], 83: [0, 0.69444, 0.09205, 0, 0.55556], 84: [0, 0.69444, 0.13372, 0, 0.68056], 85: [0, 0.69444, 0.08094, 0, 0.6875], 86: [0, 0.69444, 0.1615, 0, 0.66667], 87: [0, 0.69444, 0.1615, 0, 0.94445], 88: [0, 0.69444, 0.13372, 0, 0.66667], 89: [0, 0.69444, 0.17261, 0, 0.66667], 90: [0, 0.69444, 0.11983, 0, 0.61111], 91: [0.25, 0.75, 0.15942, 0, 0.28889], 93: [0.25, 0.75, 0.08719, 0, 0.28889], 94: [0, 0.69444, 0.0799, 0, 0.5], 95: [0.35, 0.09444, 0.08616, 0, 0.5], 97: [0, 0.44444, 981e-5, 0, 0.48056], 98: [0, 0.69444, 0.03057, 0, 0.51667], 99: [0, 0.44444, 0.08336, 0, 0.44445], 100: [0, 0.69444, 0.09483, 0, 0.51667], 101: [0, 0.44444, 0.06778, 0, 0.44445], 102: [0, 0.69444, 0.21705, 0, 0.30556], 103: [0.19444, 0.44444, 0.10836, 0, 0.5], 104: [0, 0.69444, 0.01778, 0, 0.51667], 105: [0, 0.67937, 0.09718, 0, 0.23889], 106: [0.19444, 0.67937, 0.09162, 0, 0.26667], 107: [0, 0.69444, 0.08336, 0, 0.48889], 108: [0, 0.69444, 0.09483, 0, 0.23889], 109: [0, 0.44444, 0.01778, 0, 0.79445], 110: [0, 0.44444, 0.01778, 0, 0.51667], 111: [0, 0.44444, 0.06613, 0, 0.5], 112: [0.19444, 0.44444, 0.0389, 0, 0.51667], 113: [0.19444, 0.44444, 0.04169, 0, 0.51667], 114: [0, 0.44444, 0.10836, 0, 0.34167], 115: [0, 0.44444, 0.0778, 0, 0.38333], 116: [0, 0.57143, 0.07225, 0, 0.36111], 117: [0, 0.44444, 0.04169, 0, 0.51667], 118: [0, 0.44444, 0.10836, 0, 0.46111], 119: [0, 0.44444, 0.10836, 0, 0.68334], 120: [0, 0.44444, 0.09169, 0, 0.46111], 121: [0.19444, 0.44444, 0.10836, 0, 0.46111], 122: [0, 0.44444, 0.08752, 0, 0.43472], 126: [0.35, 0.32659, 0.08826, 0, 0.5], 160: [0, 0, 0, 0, 0.25], 168: [0, 0.67937, 0.06385, 0, 0.5], 176: [0, 0.69444, 0, 0, 0.73752], 184: [0.17014, 0, 0, 0, 0.44445], 305: [0, 0.44444, 0.04169, 0, 0.23889], 567: [0.19444, 0.44444, 0.04169, 0, 0.26667], 710: [0, 0.69444, 0.0799, 0, 0.5], 711: [0, 0.63194, 0.08432, 0, 0.5], 713: [0, 0.60889, 0.08776, 0, 0.5], 714: [0, 0.69444, 0.09205, 0, 0.5], 715: [0, 0.69444, 0, 0, 0.5], 728: [0, 0.69444, 0.09483, 0, 0.5], 729: [0, 0.67937, 0.07774, 0, 0.27778], 730: [0, 0.69444, 0, 0, 0.73752], 732: [0, 0.67659, 0.08826, 0, 0.5], 733: [0, 0.69444, 0.09205, 0, 0.5], 915: [0, 0.69444, 0.13372, 0, 0.54167], 916: [0, 0.69444, 0, 0, 0.83334], 920: [0, 0.69444, 0.07555, 0, 0.77778], 923: [0, 0.69444, 0, 0, 0.61111], 926: [0, 0.69444, 0.12816, 0, 0.66667], 928: [0, 0.69444, 0.08094, 0, 0.70834], 931: [0, 0.69444, 0.11983, 0, 0.72222], 933: [0, 0.69444, 0.09031, 0, 0.77778], 934: [0, 0.69444, 0.04603, 0, 0.72222], 936: [0, 0.69444, 0.09031, 0, 0.77778], 937: [0, 0.69444, 0.08293, 0, 0.72222], 8211: [0, 0.44444, 0.08616, 0, 0.5], 8212: [0, 0.44444, 0.08616, 0, 1], 8216: [0, 0.69444, 0.07816, 0, 0.27778], 8217: [0, 0.69444, 0.07816, 0, 0.27778], 8220: [0, 0.69444, 0.14205, 0, 0.5], 8221: [0, 0.69444, 316e-5, 0, 0.5] }, "SansSerif-Regular": { 32: [0, 0, 0, 0, 0.25], 33: [0, 0.69444, 0, 0, 0.31945], 34: [0, 0.69444, 0, 0, 0.5], 35: [0.19444, 0.69444, 0, 0, 0.83334], 36: [0.05556, 0.75, 0, 0, 0.5], 37: [0.05556, 0.75, 0, 0, 0.83334], 38: [0, 0.69444, 0, 0, 0.75834], 39: [0, 0.69444, 0, 0, 0.27778], 40: [0.25, 0.75, 0, 0, 0.38889], 41: [0.25, 0.75, 0, 0, 0.38889], 42: [0, 0.75, 0, 0, 0.5], 43: [0.08333, 0.58333, 0, 0, 0.77778], 44: [0.125, 0.08333, 0, 0, 0.27778], 45: [0, 0.44444, 0, 0, 0.33333], 46: [0, 0.08333, 0, 0, 0.27778], 47: [0.25, 0.75, 0, 0, 0.5], 48: [0, 0.65556, 0, 0, 0.5], 49: [0, 0.65556, 0, 0, 0.5], 50: [0, 0.65556, 0, 0, 0.5], 51: [0, 0.65556, 0, 0, 0.5], 52: [0, 0.65556, 0, 0, 0.5], 53: [0, 0.65556, 0, 0, 0.5], 54: [0, 0.65556, 0, 0, 0.5], 55: [0, 0.65556, 0, 0, 0.5], 56: [0, 0.65556, 0, 0, 0.5], 57: [0, 0.65556, 0, 0, 0.5], 58: [0, 0.44444, 0, 0, 0.27778], 59: [0.125, 0.44444, 0, 0, 0.27778], 61: [-0.13, 0.37, 0, 0, 0.77778], 63: [0, 0.69444, 0, 0, 0.47222], 64: [0, 0.69444, 0, 0, 0.66667], 65: [0, 0.69444, 0, 0, 0.66667], 66: [0, 0.69444, 0, 0, 0.66667], 67: [0, 0.69444, 0, 0, 0.63889], 68: [0, 0.69444, 0, 0, 0.72223], 69: [0, 0.69444, 0, 0, 0.59722], 70: [0, 0.69444, 0, 0, 0.56945], 71: [0, 0.69444, 0, 0, 0.66667], 72: [0, 0.69444, 0, 0, 0.70834], 73: [0, 0.69444, 0, 0, 0.27778], 74: [0, 0.69444, 0, 0, 0.47222], 75: [0, 0.69444, 0, 0, 0.69445], 76: [0, 0.69444, 0, 0, 0.54167], 77: [0, 0.69444, 0, 0, 0.875], 78: [0, 0.69444, 0, 0, 0.70834], 79: [0, 0.69444, 0, 0, 0.73611], 80: [0, 0.69444, 0, 0, 0.63889], 81: [0.125, 0.69444, 0, 0, 0.73611], 82: [0, 0.69444, 0, 0, 0.64584], 83: [0, 0.69444, 0, 0, 0.55556], 84: [0, 0.69444, 0, 0, 0.68056], 85: [0, 0.69444, 0, 0, 0.6875], 86: [0, 0.69444, 0.01389, 0, 0.66667], 87: [0, 0.69444, 0.01389, 0, 0.94445], 88: [0, 0.69444, 0, 0, 0.66667], 89: [0, 0.69444, 0.025, 0, 0.66667], 90: [0, 0.69444, 0, 0, 0.61111], 91: [0.25, 0.75, 0, 0, 0.28889], 93: [0.25, 0.75, 0, 0, 0.28889], 94: [0, 0.69444, 0, 0, 0.5], 95: [0.35, 0.09444, 0.02778, 0, 0.5], 97: [0, 0.44444, 0, 0, 0.48056], 98: [0, 0.69444, 0, 0, 0.51667], 99: [0, 0.44444, 0, 0, 0.44445], 100: [0, 0.69444, 0, 0, 0.51667], 101: [0, 0.44444, 0, 0, 0.44445], 102: [0, 0.69444, 0.06944, 0, 0.30556], 103: [0.19444, 0.44444, 0.01389, 0, 0.5], 104: [0, 0.69444, 0, 0, 0.51667], 105: [0, 0.67937, 0, 0, 0.23889], 106: [0.19444, 0.67937, 0, 0, 0.26667], 107: [0, 0.69444, 0, 0, 0.48889], 108: [0, 0.69444, 0, 0, 0.23889], 109: [0, 0.44444, 0, 0, 0.79445], 110: [0, 0.44444, 0, 0, 0.51667], 111: [0, 0.44444, 0, 0, 0.5], 112: [0.19444, 0.44444, 0, 0, 0.51667], 113: [0.19444, 0.44444, 0, 0, 0.51667], 114: [0, 0.44444, 0.01389, 0, 0.34167], 115: [0, 0.44444, 0, 0, 0.38333], 116: [0, 0.57143, 0, 0, 0.36111], 117: [0, 0.44444, 0, 0, 0.51667], 118: [0, 0.44444, 0.01389, 0, 0.46111], 119: [0, 0.44444, 0.01389, 0, 0.68334], 120: [0, 0.44444, 0, 0, 0.46111], 121: [0.19444, 0.44444, 0.01389, 0, 0.46111], 122: [0, 0.44444, 0, 0, 0.43472], 126: [0.35, 0.32659, 0, 0, 0.5], 160: [0, 0, 0, 0, 0.25], 168: [0, 0.67937, 0, 0, 0.5], 176: [0, 0.69444, 0, 0, 0.66667], 184: [0.17014, 0, 0, 0, 0.44445], 305: [0, 0.44444, 0, 0, 0.23889], 567: [0.19444, 0.44444, 0, 0, 0.26667], 710: [0, 0.69444, 0, 0, 0.5], 711: [0, 0.63194, 0, 0, 0.5], 713: [0, 0.60889, 0, 0, 0.5], 714: [0, 0.69444, 0, 0, 0.5], 715: [0, 0.69444, 0, 0, 0.5], 728: [0, 0.69444, 0, 0, 0.5], 729: [0, 0.67937, 0, 0, 0.27778], 730: [0, 0.69444, 0, 0, 0.66667], 732: [0, 0.67659, 0, 0, 0.5], 733: [0, 0.69444, 0, 0, 0.5], 915: [0, 0.69444, 0, 0, 0.54167], 916: [0, 0.69444, 0, 0, 0.83334], 920: [0, 0.69444, 0, 0, 0.77778], 923: [0, 0.69444, 0, 0, 0.61111], 926: [0, 0.69444, 0, 0, 0.66667], 928: [0, 0.69444, 0, 0, 0.70834], 931: [0, 0.69444, 0, 0, 0.72222], 933: [0, 0.69444, 0, 0, 0.77778], 934: [0, 0.69444, 0, 0, 0.72222], 936: [0, 0.69444, 0, 0, 0.77778], 937: [0, 0.69444, 0, 0, 0.72222], 8211: [0, 0.44444, 0.02778, 0, 0.5], 8212: [0, 0.44444, 0.02778, 0, 1], 8216: [0, 0.69444, 0, 0, 0.27778], 8217: [0, 0.69444, 0, 0, 0.27778], 8220: [0, 0.69444, 0, 0, 0.5], 8221: [0, 0.69444, 0, 0, 0.5] }, "Script-Regular": { 32: [0, 0, 0, 0, 0.25], 65: [0, 0.7, 0.22925, 0, 0.80253], 66: [0, 0.7, 0.04087, 0, 0.90757], 67: [0, 0.7, 0.1689, 0, 0.66619], 68: [0, 0.7, 0.09371, 0, 0.77443], 69: [0, 0.7, 0.18583, 0, 0.56162], 70: [0, 0.7, 0.13634, 0, 0.89544], 71: [0, 0.7, 0.17322, 0, 0.60961], 72: [0, 0.7, 0.29694, 0, 0.96919], 73: [0, 0.7, 0.19189, 0, 0.80907], 74: [0.27778, 0.7, 0.19189, 0, 1.05159], 75: [0, 0.7, 0.31259, 0, 0.91364], 76: [0, 0.7, 0.19189, 0, 0.87373], 77: [0, 0.7, 0.15981, 0, 1.08031], 78: [0, 0.7, 0.3525, 0, 0.9015], 79: [0, 0.7, 0.08078, 0, 0.73787], 80: [0, 0.7, 0.08078, 0, 1.01262], 81: [0, 0.7, 0.03305, 0, 0.88282], 82: [0, 0.7, 0.06259, 0, 0.85], 83: [0, 0.7, 0.19189, 0, 0.86767], 84: [0, 0.7, 0.29087, 0, 0.74697], 85: [0, 0.7, 0.25815, 0, 0.79996], 86: [0, 0.7, 0.27523, 0, 0.62204], 87: [0, 0.7, 0.27523, 0, 0.80532], 88: [0, 0.7, 0.26006, 0, 0.94445], 89: [0, 0.7, 0.2939, 0, 0.70961], 90: [0, 0.7, 0.24037, 0, 0.8212], 160: [0, 0, 0, 0, 0.25] }, "Size1-Regular": { 32: [0, 0, 0, 0, 0.25], 40: [0.35001, 0.85, 0, 0, 0.45834], 41: [0.35001, 0.85, 0, 0, 0.45834], 47: [0.35001, 0.85, 0, 0, 0.57778], 91: [0.35001, 0.85, 0, 0, 0.41667], 92: [0.35001, 0.85, 0, 0, 0.57778], 93: [0.35001, 0.85, 0, 0, 0.41667], 123: [0.35001, 0.85, 0, 0, 0.58334], 125: [0.35001, 0.85, 0, 0, 0.58334], 160: [0, 0, 0, 0, 0.25], 710: [0, 0.72222, 0, 0, 0.55556], 732: [0, 0.72222, 0, 0, 0.55556], 770: [0, 0.72222, 0, 0, 0.55556], 771: [0, 0.72222, 0, 0, 0.55556], 8214: [-99e-5, 0.601, 0, 0, 0.77778], 8593: [1e-5, 0.6, 0, 0, 0.66667], 8595: [1e-5, 0.6, 0, 0, 0.66667], 8657: [1e-5, 0.6, 0, 0, 0.77778], 8659: [1e-5, 0.6, 0, 0, 0.77778], 8719: [0.25001, 0.75, 0, 0, 0.94445], 8720: [0.25001, 0.75, 0, 0, 0.94445], 8721: [0.25001, 0.75, 0, 0, 1.05556], 8730: [0.35001, 0.85, 0, 0, 1], 8739: [-599e-5, 0.606, 0, 0, 0.33333], 8741: [-599e-5, 0.606, 0, 0, 0.55556], 8747: [0.30612, 0.805, 0.19445, 0, 0.47222], 8748: [0.306, 0.805, 0.19445, 0, 0.47222], 8749: [0.306, 0.805, 0.19445, 0, 0.47222], 8750: [0.30612, 0.805, 0.19445, 0, 0.47222], 8896: [0.25001, 0.75, 0, 0, 0.83334], 8897: [0.25001, 0.75, 0, 0, 0.83334], 8898: [0.25001, 0.75, 0, 0, 0.83334], 8899: [0.25001, 0.75, 0, 0, 0.83334], 8968: [0.35001, 0.85, 0, 0, 0.47222], 8969: [0.35001, 0.85, 0, 0, 0.47222], 8970: [0.35001, 0.85, 0, 0, 0.47222], 8971: [0.35001, 0.85, 0, 0, 0.47222], 9168: [-99e-5, 0.601, 0, 0, 0.66667], 10216: [0.35001, 0.85, 0, 0, 0.47222], 10217: [0.35001, 0.85, 0, 0, 0.47222], 10752: [0.25001, 0.75, 0, 0, 1.11111], 10753: [0.25001, 0.75, 0, 0, 1.11111], 10754: [0.25001, 0.75, 0, 0, 1.11111], 10756: [0.25001, 0.75, 0, 0, 0.83334], 10758: [0.25001, 0.75, 0, 0, 0.83334] }, "Size2-Regular": { 32: [0, 0, 0, 0, 0.25], 40: [0.65002, 1.15, 0, 0, 0.59722], 41: [0.65002, 1.15, 0, 0, 0.59722], 47: [0.65002, 1.15, 0, 0, 0.81111], 91: [0.65002, 1.15, 0, 0, 0.47222], 92: [0.65002, 1.15, 0, 0, 0.81111], 93: [0.65002, 1.15, 0, 0, 0.47222], 123: [0.65002, 1.15, 0, 0, 0.66667], 125: [0.65002, 1.15, 0, 0, 0.66667], 160: [0, 0, 0, 0, 0.25], 710: [0, 0.75, 0, 0, 1], 732: [0, 0.75, 0, 0, 1], 770: [0, 0.75, 0, 0, 1], 771: [0, 0.75, 0, 0, 1], 8719: [0.55001, 1.05, 0, 0, 1.27778], 8720: [0.55001, 1.05, 0, 0, 1.27778], 8721: [0.55001, 1.05, 0, 0, 1.44445], 8730: [0.65002, 1.15, 0, 0, 1], 8747: [0.86225, 1.36, 0.44445, 0, 0.55556], 8748: [0.862, 1.36, 0.44445, 0, 0.55556], 8749: [0.862, 1.36, 0.44445, 0, 0.55556], 8750: [0.86225, 1.36, 0.44445, 0, 0.55556], 8896: [0.55001, 1.05, 0, 0, 1.11111], 8897: [0.55001, 1.05, 0, 0, 1.11111], 8898: [0.55001, 1.05, 0, 0, 1.11111], 8899: [0.55001, 1.05, 0, 0, 1.11111], 8968: [0.65002, 1.15, 0, 0, 0.52778], 8969: [0.65002, 1.15, 0, 0, 0.52778], 8970: [0.65002, 1.15, 0, 0, 0.52778], 8971: [0.65002, 1.15, 0, 0, 0.52778], 10216: [0.65002, 1.15, 0, 0, 0.61111], 10217: [0.65002, 1.15, 0, 0, 0.61111], 10752: [0.55001, 1.05, 0, 0, 1.51112], 10753: [0.55001, 1.05, 0, 0, 1.51112], 10754: [0.55001, 1.05, 0, 0, 1.51112], 10756: [0.55001, 1.05, 0, 0, 1.11111], 10758: [0.55001, 1.05, 0, 0, 1.11111] }, "Size3-Regular": { 32: [0, 0, 0, 0, 0.25], 40: [0.95003, 1.45, 0, 0, 0.73611], 41: [0.95003, 1.45, 0, 0, 0.73611], 47: [0.95003, 1.45, 0, 0, 1.04445], 91: [0.95003, 1.45, 0, 0, 0.52778], 92: [0.95003, 1.45, 0, 0, 1.04445], 93: [0.95003, 1.45, 0, 0, 0.52778], 123: [0.95003, 1.45, 0, 0, 0.75], 125: [0.95003, 1.45, 0, 0, 0.75], 160: [0, 0, 0, 0, 0.25], 710: [0, 0.75, 0, 0, 1.44445], 732: [0, 0.75, 0, 0, 1.44445], 770: [0, 0.75, 0, 0, 1.44445], 771: [0, 0.75, 0, 0, 1.44445], 8730: [0.95003, 1.45, 0, 0, 1], 8968: [0.95003, 1.45, 0, 0, 0.58334], 8969: [0.95003, 1.45, 0, 0, 0.58334], 8970: [0.95003, 1.45, 0, 0, 0.58334], 8971: [0.95003, 1.45, 0, 0, 0.58334], 10216: [0.95003, 1.45, 0, 0, 0.75], 10217: [0.95003, 1.45, 0, 0, 0.75] }, "Size4-Regular": { 32: [0, 0, 0, 0, 0.25], 40: [1.25003, 1.75, 0, 0, 0.79167], 41: [1.25003, 1.75, 0, 0, 0.79167], 47: [1.25003, 1.75, 0, 0, 1.27778], 91: [1.25003, 1.75, 0, 0, 0.58334], 92: [1.25003, 1.75, 0, 0, 1.27778], 93: [1.25003, 1.75, 0, 0, 0.58334], 123: [1.25003, 1.75, 0, 0, 0.80556], 125: [1.25003, 1.75, 0, 0, 0.80556], 160: [0, 0, 0, 0, 0.25], 710: [0, 0.825, 0, 0, 1.8889], 732: [0, 0.825, 0, 0, 1.8889], 770: [0, 0.825, 0, 0, 1.8889], 771: [0, 0.825, 0, 0, 1.8889], 8730: [1.25003, 1.75, 0, 0, 1], 8968: [1.25003, 1.75, 0, 0, 0.63889], 8969: [1.25003, 1.75, 0, 0, 0.63889], 8970: [1.25003, 1.75, 0, 0, 0.63889], 8971: [1.25003, 1.75, 0, 0, 0.63889], 9115: [0.64502, 1.155, 0, 0, 0.875], 9116: [1e-5, 0.6, 0, 0, 0.875], 9117: [0.64502, 1.155, 0, 0, 0.875], 9118: [0.64502, 1.155, 0, 0, 0.875], 9119: [1e-5, 0.6, 0, 0, 0.875], 9120: [0.64502, 1.155, 0, 0, 0.875], 9121: [0.64502, 1.155, 0, 0, 0.66667], 9122: [-99e-5, 0.601, 0, 0, 0.66667], 9123: [0.64502, 1.155, 0, 0, 0.66667], 9124: [0.64502, 1.155, 0, 0, 0.66667], 9125: [-99e-5, 0.601, 0, 0, 0.66667], 9126: [0.64502, 1.155, 0, 0, 0.66667], 9127: [1e-5, 0.9, 0, 0, 0.88889], 9128: [0.65002, 1.15, 0, 0, 0.88889], 9129: [0.90001, 0, 0, 0, 0.88889], 9130: [0, 0.3, 0, 0, 0.88889], 9131: [1e-5, 0.9, 0, 0, 0.88889], 9132: [0.65002, 1.15, 0, 0, 0.88889], 9133: [0.90001, 0, 0, 0, 0.88889], 9143: [0.88502, 0.915, 0, 0, 1.05556], 10216: [1.25003, 1.75, 0, 0, 0.80556], 10217: [1.25003, 1.75, 0, 0, 0.80556], 57344: [-499e-5, 0.605, 0, 0, 1.05556], 57345: [-499e-5, 0.605, 0, 0, 1.05556], 57680: [0, 0.12, 0, 0, 0.45], 57681: [0, 0.12, 0, 0, 0.45], 57682: [0, 0.12, 0, 0, 0.45], 57683: [0, 0.12, 0, 0, 0.45] }, "Typewriter-Regular": { 32: [0, 0, 0, 0, 0.525], 33: [0, 0.61111, 0, 0, 0.525], 34: [0, 0.61111, 0, 0, 0.525], 35: [0, 0.61111, 0, 0, 0.525], 36: [0.08333, 0.69444, 0, 0, 0.525], 37: [0.08333, 0.69444, 0, 0, 0.525], 38: [0, 0.61111, 0, 0, 0.525], 39: [0, 0.61111, 0, 0, 0.525], 40: [0.08333, 0.69444, 0, 0, 0.525], 41: [0.08333, 0.69444, 0, 0, 0.525], 42: [0, 0.52083, 0, 0, 0.525], 43: [-0.08056, 0.53055, 0, 0, 0.525], 44: [0.13889, 0.125, 0, 0, 0.525], 45: [-0.08056, 0.53055, 0, 0, 0.525], 46: [0, 0.125, 0, 0, 0.525], 47: [0.08333, 0.69444, 0, 0, 0.525], 48: [0, 0.61111, 0, 0, 0.525], 49: [0, 0.61111, 0, 0, 0.525], 50: [0, 0.61111, 0, 0, 0.525], 51: [0, 0.61111, 0, 0, 0.525], 52: [0, 0.61111, 0, 0, 0.525], 53: [0, 0.61111, 0, 0, 0.525], 54: [0, 0.61111, 0, 0, 0.525], 55: [0, 0.61111, 0, 0, 0.525], 56: [0, 0.61111, 0, 0, 0.525], 57: [0, 0.61111, 0, 0, 0.525], 58: [0, 0.43056, 0, 0, 0.525], 59: [0.13889, 0.43056, 0, 0, 0.525], 60: [-0.05556, 0.55556, 0, 0, 0.525], 61: [-0.19549, 0.41562, 0, 0, 0.525], 62: [-0.05556, 0.55556, 0, 0, 0.525], 63: [0, 0.61111, 0, 0, 0.525], 64: [0, 0.61111, 0, 0, 0.525], 65: [0, 0.61111, 0, 0, 0.525], 66: [0, 0.61111, 0, 0, 0.525], 67: [0, 0.61111, 0, 0, 0.525], 68: [0, 0.61111, 0, 0, 0.525], 69: [0, 0.61111, 0, 0, 0.525], 70: [0, 0.61111, 0, 0, 0.525], 71: [0, 0.61111, 0, 0, 0.525], 72: [0, 0.61111, 0, 0, 0.525], 73: [0, 0.61111, 0, 0, 0.525], 74: [0, 0.61111, 0, 0, 0.525], 75: [0, 0.61111, 0, 0, 0.525], 76: [0, 0.61111, 0, 0, 0.525], 77: [0, 0.61111, 0, 0, 0.525], 78: [0, 0.61111, 0, 0, 0.525], 79: [0, 0.61111, 0, 0, 0.525], 80: [0, 0.61111, 0, 0, 0.525], 81: [0.13889, 0.61111, 0, 0, 0.525], 82: [0, 0.61111, 0, 0, 0.525], 83: [0, 0.61111, 0, 0, 0.525], 84: [0, 0.61111, 0, 0, 0.525], 85: [0, 0.61111, 0, 0, 0.525], 86: [0, 0.61111, 0, 0, 0.525], 87: [0, 0.61111, 0, 0, 0.525], 88: [0, 0.61111, 0, 0, 0.525], 89: [0, 0.61111, 0, 0, 0.525], 90: [0, 0.61111, 0, 0, 0.525], 91: [0.08333, 0.69444, 0, 0, 0.525], 92: [0.08333, 0.69444, 0, 0, 0.525], 93: [0.08333, 0.69444, 0, 0, 0.525], 94: [0, 0.61111, 0, 0, 0.525], 95: [0.09514, 0, 0, 0, 0.525], 96: [0, 0.61111, 0, 0, 0.525], 97: [0, 0.43056, 0, 0, 0.525], 98: [0, 0.61111, 0, 0, 0.525], 99: [0, 0.43056, 0, 0, 0.525], 100: [0, 0.61111, 0, 0, 0.525], 101: [0, 0.43056, 0, 0, 0.525], 102: [0, 0.61111, 0, 0, 0.525], 103: [0.22222, 0.43056, 0, 0, 0.525], 104: [0, 0.61111, 0, 0, 0.525], 105: [0, 0.61111, 0, 0, 0.525], 106: [0.22222, 0.61111, 0, 0, 0.525], 107: [0, 0.61111, 0, 0, 0.525], 108: [0, 0.61111, 0, 0, 0.525], 109: [0, 0.43056, 0, 0, 0.525], 110: [0, 0.43056, 0, 0, 0.525], 111: [0, 0.43056, 0, 0, 0.525], 112: [0.22222, 0.43056, 0, 0, 0.525], 113: [0.22222, 0.43056, 0, 0, 0.525], 114: [0, 0.43056, 0, 0, 0.525], 115: [0, 0.43056, 0, 0, 0.525], 116: [0, 0.55358, 0, 0, 0.525], 117: [0, 0.43056, 0, 0, 0.525], 118: [0, 0.43056, 0, 0, 0.525], 119: [0, 0.43056, 0, 0, 0.525], 120: [0, 0.43056, 0, 0, 0.525], 121: [0.22222, 0.43056, 0, 0, 0.525], 122: [0, 0.43056, 0, 0, 0.525], 123: [0.08333, 0.69444, 0, 0, 0.525], 124: [0.08333, 0.69444, 0, 0, 0.525], 125: [0.08333, 0.69444, 0, 0, 0.525], 126: [0, 0.61111, 0, 0, 0.525], 127: [0, 0.61111, 0, 0, 0.525], 160: [0, 0, 0, 0, 0.525], 176: [0, 0.61111, 0, 0, 0.525], 184: [0.19445, 0, 0, 0, 0.525], 305: [0, 0.43056, 0, 0, 0.525], 567: [0.22222, 0.43056, 0, 0, 0.525], 711: [0, 0.56597, 0, 0, 0.525], 713: [0, 0.56555, 0, 0, 0.525], 714: [0, 0.61111, 0, 0, 0.525], 715: [0, 0.61111, 0, 0, 0.525], 728: [0, 0.61111, 0, 0, 0.525], 730: [0, 0.61111, 0, 0, 0.525], 770: [0, 0.61111, 0, 0, 0.525], 771: [0, 0.61111, 0, 0, 0.525], 776: [0, 0.61111, 0, 0, 0.525], 915: [0, 0.61111, 0, 0, 0.525], 916: [0, 0.61111, 0, 0, 0.525], 920: [0, 0.61111, 0, 0, 0.525], 923: [0, 0.61111, 0, 0, 0.525], 926: [0, 0.61111, 0, 0, 0.525], 928: [0, 0.61111, 0, 0, 0.525], 931: [0, 0.61111, 0, 0, 0.525], 933: [0, 0.61111, 0, 0, 0.525], 934: [0, 0.61111, 0, 0, 0.525], 936: [0, 0.61111, 0, 0, 0.525], 937: [0, 0.61111, 0, 0, 0.525], 8216: [0, 0.61111, 0, 0, 0.525], 8217: [0, 0.61111, 0, 0, 0.525], 8242: [0, 0.61111, 0, 0, 0.525], 9251: [0.11111, 0.21944, 0, 0, 0.525] } }, st = { slant: [0.25, 0.25, 0.25], space: [0, 0, 0], stretch: [0, 0, 0], shrink: [0, 0, 0], xHeight: [0.431, 0.431, 0.431], quad: [1, 1.171, 1.472], extraSpace: [0, 0, 0], num1: [0.677, 0.732, 0.925], num2: [0.394, 0.384, 0.387], num3: [0.444, 0.471, 0.504], denom1: [0.686, 0.752, 1.025], denom2: [0.345, 0.344, 0.532], sup1: [0.413, 0.503, 0.504], sup2: [0.363, 0.431, 0.404], sup3: [0.289, 0.286, 0.294], sub1: [0.15, 0.143, 0.2], sub2: [0.247, 0.286, 0.4], supDrop: [0.386, 0.353, 0.494], subDrop: [0.05, 0.071, 0.1], delim1: [2.39, 1.7, 1.98], delim2: [1.01, 1.157, 1.42], axisHeight: [0.25, 0.25, 0.25], defaultRuleThickness: [0.04, 0.049, 0.049], bigOpSpacing1: [0.111, 0.111, 0.111], bigOpSpacing2: [0.166, 0.166, 0.166], bigOpSpacing3: [0.2, 0.2, 0.2], bigOpSpacing4: [0.6, 0.611, 0.611], bigOpSpacing5: [0.1, 0.143, 0.143], sqrtRuleThickness: [0.04, 0.04, 0.04], ptPerEm: [10, 10, 10], doubleRuleSep: [0.2, 0.2, 0.2], arrayRuleWidth: [0.04, 0.04, 0.04], fboxsep: [0.3, 0.3, 0.3], fboxrule: [0.04, 0.04, 0.04] }, Ot = { \u00C5: "A", \u00D0: "D", \u00DE: "o", \u00E5: "a", \u00F0: "d", \u00FE: "o", \u0410: "A", \u0411: "B", \u0412: "B", \u0413: "F", \u0414: "A", \u0415: "E", \u0416: "K", \u0417: "3", \u0418: "N", \u0419: "N", \u041A: "K", \u041B: "N", \u041C: "M", \u041D: "H", \u041E: "O", \u041F: "N", \u0420: "P", \u0421: "C", \u0422: "T", \u0423: "y", \u0424: "O", \u0425: "X", \u0426: "U", \u0427: "h", \u0428: "W", \u0429: "W", \u042A: "B", \u042B: "X", \u042C: "B", \u042D: "3", \u042E: "X", \u042F: "R", \u0430: "a", \u0431: "b", \u0432: "a", \u0433: "r", \u0434: "y", \u0435: "e", \u0436: "m", \u0437: "e", \u0438: "n", \u0439: "n", \u043A: "n", \u043B: "n", \u043C: "m", \u043D: "n", \u043E: "o", \u043F: "n", \u0440: "p", \u0441: "c", \u0442: "o", \u0443: "y", \u0444: "b", \u0445: "x", \u0446: "n", \u0447: "n", \u0448: "w", \u0449: "w", \u044A: "a", \u044B: "m", \u044C: "a", \u044D: "e", \u044E: "m", \u044F: "r" };
      function Cr(s, e) {
        p0[s] = e;
      }
      function bt(s, e, t) {
        if (!p0[e])
          throw new Error("Font metrics not found for font: " + e + ".");
        var r = s.charCodeAt(0), i = p0[e][r];
        if (!i && s[0] in Ot && (r = Ot[s[0]].charCodeAt(0), i = p0[e][r]), !i && t === "text" && Ze(r) && (i = p0[e][77]), i)
          return { depth: i[0], height: i[1], italic: i[2], skew: i[3], width: i[4] };
      }
      var yt = {};
      function Mr(s) {
        var e;
        if (s >= 5 ? e = 0 : s >= 3 ? e = 1 : e = 2, !yt[e]) {
          var t = yt[e] = { cssEmPerMu: st.quad[e] / 18 };
          for (var r in st)
            st.hasOwnProperty(r) && (t[r] = st[r][e]);
        }
        return yt[e];
      }
      var Tr = [[1, 1, 1], [2, 1, 1], [3, 1, 1], [4, 2, 1], [5, 2, 1], [6, 3, 1], [7, 4, 2], [8, 6, 3], [9, 7, 6], [10, 8, 7], [11, 10, 9]], Rt = [0.5, 0.6, 0.7, 0.8, 0.9, 1, 1.2, 1.44, 1.728, 2.074, 2.488], Ht = function(e, t) {
        return t.size < 2 ? e : Tr[e - 1][t.size - 1];
      }, Pt = function() {
        function s(t) {
          this.style = void 0, this.color = void 0, this.size = void 0, this.textSize = void 0, this.phantom = void 0, this.font = void 0, this.fontFamily = void 0, this.fontWeight = void 0, this.fontShape = void 0, this.sizeMultiplier = void 0, this.maxSize = void 0, this.minRuleThickness = void 0, this._fontMetrics = void 0, this.style = t.style, this.color = t.color, this.size = t.size || s.BASESIZE, this.textSize = t.textSize || this.size, this.phantom = !!t.phantom, this.font = t.font || "", this.fontFamily = t.fontFamily || "", this.fontWeight = t.fontWeight || "", this.fontShape = t.fontShape || "", this.sizeMultiplier = Rt[this.size - 1], this.maxSize = t.maxSize, this.minRuleThickness = t.minRuleThickness, this._fontMetrics = void 0;
        }
        var e = s.prototype;
        return e.extend = function(r) {
          var i = { style: this.style, size: this.size, textSize: this.textSize, color: this.color, phantom: this.phantom, font: this.font, fontFamily: this.fontFamily, fontWeight: this.fontWeight, fontShape: this.fontShape, maxSize: this.maxSize, minRuleThickness: this.minRuleThickness };
          for (var a in r)
            r.hasOwnProperty(a) && (i[a] = r[a]);
          return new s(i);
        }, e.havingStyle = function(r) {
          return this.style === r ? this : this.extend({ style: r, size: Ht(this.textSize, r) });
        }, e.havingCrampedStyle = function() {
          return this.havingStyle(this.style.cramp());
        }, e.havingSize = function(r) {
          return this.size === r && this.textSize === r ? this : this.extend({ style: this.style.text(), size: r, textSize: r, sizeMultiplier: Rt[r - 1] });
        }, e.havingBaseStyle = function(r) {
          r = r || this.style.text();
          var i = Ht(s.BASESIZE, r);
          return this.size === i && this.textSize === s.BASESIZE && this.style === r ? this : this.extend({ style: r, size: i });
        }, e.havingBaseSizing = function() {
          var r;
          switch (this.style.id) {
            case 4:
            case 5:
              r = 3;
              break;
            case 6:
            case 7:
              r = 1;
              break;
            default:
              r = 6;
          }
          return this.extend({ style: this.style.text(), size: r });
        }, e.withColor = function(r) {
          return this.extend({ color: r });
        }, e.withPhantom = function() {
          return this.extend({ phantom: true });
        }, e.withFont = function(r) {
          return this.extend({ font: r });
        }, e.withTextFontFamily = function(r) {
          return this.extend({ fontFamily: r, font: "" });
        }, e.withTextFontWeight = function(r) {
          return this.extend({ fontWeight: r, font: "" });
        }, e.withTextFontShape = function(r) {
          return this.extend({ fontShape: r, font: "" });
        }, e.sizingClasses = function(r) {
          return r.size !== this.size ? ["sizing", "reset-size" + r.size, "size" + this.size] : [];
        }, e.baseSizingClasses = function() {
          return this.size !== s.BASESIZE ? ["sizing", "reset-size" + this.size, "size" + s.BASESIZE] : [];
        }, e.fontMetrics = function() {
          return this._fontMetrics || (this._fontMetrics = Mr(this.size)), this._fontMetrics;
        }, e.getColor = function() {
          return this.phantom ? "transparent" : this.color;
        }, s;
      }();
      Pt.BASESIZE = 6;
      var Q0 = Pt, wt = { pt: 1, mm: 7227 / 2540, cm: 7227 / 254, in: 72.27, bp: 803 / 800, pc: 12, dd: 1238 / 1157, cc: 14856 / 1157, nd: 685 / 642, nc: 1370 / 107, sp: 1 / 65536, px: 803 / 800 }, Er = { ex: true, em: true, mu: true }, kt = function(e) {
        return typeof e != "string" && (e = e.unit), e in wt || e in Er || e === "ex";
      }, Fe = function(e, t) {
        var r;
        if (e.unit in wt)
          r = wt[e.unit] / t.fontMetrics().ptPerEm / t.sizeMultiplier;
        else if (e.unit === "mu")
          r = t.fontMetrics().cssEmPerMu;
        else {
          var i;
          if (t.style.isTight() ? i = t.havingStyle(t.style.text()) : i = t, e.unit === "ex")
            r = i.fontMetrics().xHeight;
          else if (e.unit === "em")
            r = i.fontMetrics().quad;
          else
            throw new o("Invalid unit: '" + e.unit + "'");
          i !== t && (r *= i.sizeMultiplier / t.sizeMultiplier);
        }
        return Math.min(e.number * r, t.maxSize);
      }, X = function(e) {
        return +e.toFixed(4) + "em";
      }, v0 = function(e) {
        return e.filter(function(t) {
          return t;
        }).join(" ");
      }, Gt = function(e, t, r) {
        if (this.classes = e || [], this.attributes = {}, this.height = 0, this.depth = 0, this.maxFontSize = 0, this.style = r || {}, t) {
          t.style.isTight() && this.classes.push("mtight");
          var i = t.getColor();
          i && (this.style.color = i);
        }
      }, Vt = function(e) {
        var t = document.createElement(e);
        t.className = v0(this.classes);
        for (var r in this.style)
          this.style.hasOwnProperty(r) && (t.style[r] = this.style[r]);
        for (var i in this.attributes)
          this.attributes.hasOwnProperty(i) && t.setAttribute(i, this.attributes[i]);
        for (var a = 0; a < this.children.length; a++)
          t.appendChild(this.children[a].toNode());
        return t;
      }, Ut = function(e) {
        var t = "<" + e;
        this.classes.length && (t += ' class="' + H.escape(v0(this.classes)) + '"');
        var r = "";
        for (var i in this.style)
          this.style.hasOwnProperty(i) && (r += H.hyphenate(i) + ":" + this.style[i] + ";");
        r && (t += ' style="' + H.escape(r) + '"');
        for (var a in this.attributes)
          this.attributes.hasOwnProperty(a) && (t += " " + a + '="' + H.escape(this.attributes[a]) + '"');
        t += ">";
        for (var u = 0; u < this.children.length; u++)
          t += this.children[u].toMarkup();
        return t += "</" + e + ">", t;
      }, K0 = function() {
        function s(t, r, i, a) {
          this.children = void 0, this.attributes = void 0, this.classes = void 0, this.height = void 0, this.depth = void 0, this.width = void 0, this.maxFontSize = void 0, this.style = void 0, Gt.call(this, t, i, a), this.children = r || [];
        }
        var e = s.prototype;
        return e.setAttribute = function(r, i) {
          this.attributes[r] = i;
        }, e.hasClass = function(r) {
          return H.contains(this.classes, r);
        }, e.toNode = function() {
          return Vt.call(this, "span");
        }, e.toMarkup = function() {
          return Ut.call(this, "span");
        }, s;
      }(), St = function() {
        function s(t, r, i, a) {
          this.children = void 0, this.attributes = void 0, this.classes = void 0, this.height = void 0, this.depth = void 0, this.maxFontSize = void 0, this.style = void 0, Gt.call(this, r, a), this.children = i || [], this.setAttribute("href", t);
        }
        var e = s.prototype;
        return e.setAttribute = function(r, i) {
          this.attributes[r] = i;
        }, e.hasClass = function(r) {
          return H.contains(this.classes, r);
        }, e.toNode = function() {
          return Vt.call(this, "a");
        }, e.toMarkup = function() {
          return Ut.call(this, "a");
        }, s;
      }(), Dr = function() {
        function s(t, r, i) {
          this.src = void 0, this.alt = void 0, this.classes = void 0, this.height = void 0, this.depth = void 0, this.maxFontSize = void 0, this.style = void 0, this.alt = r, this.src = t, this.classes = ["mord"], this.style = i;
        }
        var e = s.prototype;
        return e.hasClass = function(r) {
          return H.contains(this.classes, r);
        }, e.toNode = function() {
          var r = document.createElement("img");
          r.src = this.src, r.alt = this.alt, r.className = "mord";
          for (var i in this.style)
            this.style.hasOwnProperty(i) && (r.style[i] = this.style[i]);
          return r;
        }, e.toMarkup = function() {
          var r = "<img  src='" + this.src + " 'alt='" + this.alt + "' ", i = "";
          for (var a in this.style)
            this.style.hasOwnProperty(a) && (i += H.hyphenate(a) + ":" + this.style[a] + ";");
          return i && (r += ' style="' + H.escape(i) + '"'), r += "'/>", r;
        }, s;
      }(), Fr = { \u00EE: "\u0131\u0302", \u00EF: "\u0131\u0308", \u00ED: "\u0131\u0301", \u00EC: "\u0131\u0300" }, t0 = function() {
        function s(t, r, i, a, u, p, x, y) {
          this.text = void 0, this.height = void 0, this.depth = void 0, this.italic = void 0, this.skew = void 0, this.width = void 0, this.maxFontSize = void 0, this.classes = void 0, this.style = void 0, this.text = t, this.height = r || 0, this.depth = i || 0, this.italic = a || 0, this.skew = u || 0, this.width = p || 0, this.classes = x || [], this.style = y || {}, this.maxFontSize = 0;
          var z = c0(this.text.charCodeAt(0));
          z && this.classes.push(z + "_fallback"), /[îïíì]/.test(this.text) && (this.text = Fr[this.text]);
        }
        var e = s.prototype;
        return e.hasClass = function(r) {
          return H.contains(this.classes, r);
        }, e.toNode = function() {
          var r = document.createTextNode(this.text), i = null;
          this.italic > 0 && (i = document.createElement("span"), i.style.marginRight = X(this.italic)), this.classes.length > 0 && (i = i || document.createElement("span"), i.className = v0(this.classes));
          for (var a in this.style)
            this.style.hasOwnProperty(a) && (i = i || document.createElement("span"), i.style[a] = this.style[a]);
          return i ? (i.appendChild(r), i) : r;
        }, e.toMarkup = function() {
          var r = false, i = "<span";
          this.classes.length && (r = true, i += ' class="', i += H.escape(v0(this.classes)), i += '"');
          var a = "";
          this.italic > 0 && (a += "margin-right:" + this.italic + "em;");
          for (var u in this.style)
            this.style.hasOwnProperty(u) && (a += H.hyphenate(u) + ":" + this.style[u] + ";");
          a && (r = true, i += ' style="' + H.escape(a) + '"');
          var p = H.escape(this.text);
          return r ? (i += ">", i += p, i += "</span>", i) : p;
        }, s;
      }(), y0 = function() {
        function s(t, r) {
          this.children = void 0, this.attributes = void 0, this.children = t || [], this.attributes = r || {};
        }
        var e = s.prototype;
        return e.toNode = function() {
          var r = "http://www.w3.org/2000/svg", i = document.createElementNS(r, "svg");
          for (var a in this.attributes)
            Object.prototype.hasOwnProperty.call(this.attributes, a) && i.setAttribute(a, this.attributes[a]);
          for (var u = 0; u < this.children.length; u++)
            i.appendChild(this.children[u].toNode());
          return i;
        }, e.toMarkup = function() {
          var r = '<svg xmlns="http://www.w3.org/2000/svg"';
          for (var i in this.attributes)
            Object.prototype.hasOwnProperty.call(this.attributes, i) && (r += " " + i + "='" + this.attributes[i] + "'");
          r += ">";
          for (var a = 0; a < this.children.length; a++)
            r += this.children[a].toMarkup();
          return r += "</svg>", r;
        }, s;
      }(), E0 = function() {
        function s(t, r) {
          this.pathName = void 0, this.alternate = void 0, this.pathName = t, this.alternate = r;
        }
        var e = s.prototype;
        return e.toNode = function() {
          var r = "http://www.w3.org/2000/svg", i = document.createElementNS(r, "path");
          return this.alternate ? i.setAttribute("d", this.alternate) : i.setAttribute("d", M0[this.pathName]), i;
        }, e.toMarkup = function() {
          return this.alternate ? "<path d='" + this.alternate + "'/>" : "<path d='" + M0[this.pathName] + "'/>";
        }, s;
      }(), At = function() {
        function s(t) {
          this.attributes = void 0, this.attributes = t || {};
        }
        var e = s.prototype;
        return e.toNode = function() {
          var r = "http://www.w3.org/2000/svg", i = document.createElementNS(r, "line");
          for (var a in this.attributes)
            Object.prototype.hasOwnProperty.call(this.attributes, a) && i.setAttribute(a, this.attributes[a]);
          return i;
        }, e.toMarkup = function() {
          var r = "<line";
          for (var i in this.attributes)
            Object.prototype.hasOwnProperty.call(this.attributes, i) && (r += " " + i + "='" + this.attributes[i] + "'");
          return r += "/>", r;
        }, s;
      }();
      function $(s) {
        if (s instanceof t0)
          return s;
        throw new Error("Expected symbolNode but got " + String(s) + ".");
      }
      function ie(s) {
        if (s instanceof K0)
          return s;
        throw new Error("Expected span<HtmlDomNode> but got " + String(s) + ".");
      }
      var Ke = { bin: 1, close: 1, inner: 1, open: 1, punct: 1, rel: 1 }, l0 = { "accent-token": 1, mathord: 1, "op-token": 1, spacing: 1, textord: 1 }, r0 = { math: {}, text: {} }, ke = r0;
      function l(s, e, t, r, i, a) {
        r0[s][i] = { font: e, group: t, replace: r }, a && r && (r0[s][r] = r0[s][i]);
      }
      var m = "math", U = "text", f = "main", k = "ams", Ne = "accent-token", te = "bin", n0 = "close", ht = "inner", me = "mathord", Ge = "op-token", u0 = "open", Wt = "punct", A = "rel", D0 = "spacing", F = "textord";
      l(m, f, A, "\u2261", "\\equiv", true), l(m, f, A, "\u227A", "\\prec", true), l(m, f, A, "\u227B", "\\succ", true), l(m, f, A, "\u223C", "\\sim", true), l(m, f, A, "\u22A5", "\\perp"), l(m, f, A, "\u2AAF", "\\preceq", true), l(m, f, A, "\u2AB0", "\\succeq", true), l(m, f, A, "\u2243", "\\simeq", true), l(m, f, A, "\u2223", "\\mid", true), l(m, f, A, "\u226A", "\\ll", true), l(m, f, A, "\u226B", "\\gg", true), l(m, f, A, "\u224D", "\\asymp", true), l(m, f, A, "\u2225", "\\parallel"), l(m, f, A, "\u22C8", "\\bowtie", true), l(m, f, A, "\u2323", "\\smile", true), l(m, f, A, "\u2291", "\\sqsubseteq", true), l(m, f, A, "\u2292", "\\sqsupseteq", true), l(m, f, A, "\u2250", "\\doteq", true), l(m, f, A, "\u2322", "\\frown", true), l(m, f, A, "\u220B", "\\ni", true), l(m, f, A, "\u221D", "\\propto", true), l(m, f, A, "\u22A2", "\\vdash", true), l(m, f, A, "\u22A3", "\\dashv", true), l(m, f, A, "\u220B", "\\owns"), l(m, f, Wt, ".", "\\ldotp"), l(m, f, Wt, "\u22C5", "\\cdotp"), l(m, f, F, "#", "\\#"), l(U, f, F, "#", "\\#"), l(m, f, F, "&", "\\&"), l(U, f, F, "&", "\\&"), l(m, f, F, "\u2135", "\\aleph", true), l(m, f, F, "\u2200", "\\forall", true), l(m, f, F, "\u210F", "\\hbar", true), l(m, f, F, "\u2203", "\\exists", true), l(m, f, F, "\u2207", "\\nabla", true), l(m, f, F, "\u266D", "\\flat", true), l(m, f, F, "\u2113", "\\ell", true), l(m, f, F, "\u266E", "\\natural", true), l(m, f, F, "\u2663", "\\clubsuit", true), l(m, f, F, "\u2118", "\\wp", true), l(m, f, F, "\u266F", "\\sharp", true), l(m, f, F, "\u2662", "\\diamondsuit", true), l(m, f, F, "\u211C", "\\Re", true), l(m, f, F, "\u2661", "\\heartsuit", true), l(m, f, F, "\u2111", "\\Im", true), l(m, f, F, "\u2660", "\\spadesuit", true), l(m, f, F, "\xA7", "\\S", true), l(U, f, F, "\xA7", "\\S"), l(m, f, F, "\xB6", "\\P", true), l(U, f, F, "\xB6", "\\P"), l(m, f, F, "\u2020", "\\dag"), l(U, f, F, "\u2020", "\\dag"), l(U, f, F, "\u2020", "\\textdagger"), l(m, f, F, "\u2021", "\\ddag"), l(U, f, F, "\u2021", "\\ddag"), l(U, f, F, "\u2021", "\\textdaggerdbl"), l(m, f, n0, "\u23B1", "\\rmoustache", true), l(m, f, u0, "\u23B0", "\\lmoustache", true), l(m, f, n0, "\u27EF", "\\rgroup", true), l(m, f, u0, "\u27EE", "\\lgroup", true), l(m, f, te, "\u2213", "\\mp", true), l(m, f, te, "\u2296", "\\ominus", true), l(m, f, te, "\u228E", "\\uplus", true), l(m, f, te, "\u2293", "\\sqcap", true), l(m, f, te, "\u2217", "\\ast"), l(m, f, te, "\u2294", "\\sqcup", true), l(m, f, te, "\u25EF", "\\bigcirc", true), l(m, f, te, "\u2219", "\\bullet"), l(m, f, te, "\u2021", "\\ddagger"), l(m, f, te, "\u2240", "\\wr", true), l(m, f, te, "\u2A3F", "\\amalg"), l(m, f, te, "&", "\\And"), l(m, f, A, "\u27F5", "\\longleftarrow", true), l(m, f, A, "\u21D0", "\\Leftarrow", true), l(m, f, A, "\u27F8", "\\Longleftarrow", true), l(m, f, A, "\u27F6", "\\longrightarrow", true), l(m, f, A, "\u21D2", "\\Rightarrow", true), l(m, f, A, "\u27F9", "\\Longrightarrow", true), l(m, f, A, "\u2194", "\\leftrightarrow", true), l(m, f, A, "\u27F7", "\\longleftrightarrow", true), l(m, f, A, "\u21D4", "\\Leftrightarrow", true), l(m, f, A, "\u27FA", "\\Longleftrightarrow", true), l(m, f, A, "\u21A6", "\\mapsto", true), l(m, f, A, "\u27FC", "\\longmapsto", true), l(m, f, A, "\u2197", "\\nearrow", true), l(m, f, A, "\u21A9", "\\hookleftarrow", true), l(m, f, A, "\u21AA", "\\hookrightarrow", true), l(m, f, A, "\u2198", "\\searrow", true), l(m, f, A, "\u21BC", "\\leftharpoonup", true), l(m, f, A, "\u21C0", "\\rightharpoonup", true), l(m, f, A, "\u2199", "\\swarrow", true), l(m, f, A, "\u21BD", "\\leftharpoondown", true), l(m, f, A, "\u21C1", "\\rightharpoondown", true), l(m, f, A, "\u2196", "\\nwarrow", true), l(m, f, A, "\u21CC", "\\rightleftharpoons", true), l(m, k, A, "\u226E", "\\nless", true), l(m, k, A, "\uE010", "\\@nleqslant"), l(m, k, A, "\uE011", "\\@nleqq"), l(m, k, A, "\u2A87", "\\lneq", true), l(m, k, A, "\u2268", "\\lneqq", true), l(m, k, A, "\uE00C", "\\@lvertneqq"), l(m, k, A, "\u22E6", "\\lnsim", true), l(m, k, A, "\u2A89", "\\lnapprox", true), l(m, k, A, "\u2280", "\\nprec", true), l(m, k, A, "\u22E0", "\\npreceq", true), l(m, k, A, "\u22E8", "\\precnsim", true), l(m, k, A, "\u2AB9", "\\precnapprox", true), l(m, k, A, "\u2241", "\\nsim", true), l(m, k, A, "\uE006", "\\@nshortmid"), l(m, k, A, "\u2224", "\\nmid", true), l(m, k, A, "\u22AC", "\\nvdash", true), l(m, k, A, "\u22AD", "\\nvDash", true), l(m, k, A, "\u22EA", "\\ntriangleleft"), l(m, k, A, "\u22EC", "\\ntrianglelefteq", true), l(m, k, A, "\u228A", "\\subsetneq", true), l(m, k, A, "\uE01A", "\\@varsubsetneq"), l(m, k, A, "\u2ACB", "\\subsetneqq", true), l(m, k, A, "\uE017", "\\@varsubsetneqq"), l(m, k, A, "\u226F", "\\ngtr", true), l(m, k, A, "\uE00F", "\\@ngeqslant"), l(m, k, A, "\uE00E", "\\@ngeqq"), l(m, k, A, "\u2A88", "\\gneq", true), l(m, k, A, "\u2269", "\\gneqq", true), l(m, k, A, "\uE00D", "\\@gvertneqq"), l(m, k, A, "\u22E7", "\\gnsim", true), l(m, k, A, "\u2A8A", "\\gnapprox", true), l(m, k, A, "\u2281", "\\nsucc", true), l(m, k, A, "\u22E1", "\\nsucceq", true), l(m, k, A, "\u22E9", "\\succnsim", true), l(m, k, A, "\u2ABA", "\\succnapprox", true), l(m, k, A, "\u2246", "\\ncong", true), l(m, k, A, "\uE007", "\\@nshortparallel"), l(m, k, A, "\u2226", "\\nparallel", true), l(m, k, A, "\u22AF", "\\nVDash", true), l(m, k, A, "\u22EB", "\\ntriangleright"), l(m, k, A, "\u22ED", "\\ntrianglerighteq", true), l(m, k, A, "\uE018", "\\@nsupseteqq"), l(m, k, A, "\u228B", "\\supsetneq", true), l(m, k, A, "\uE01B", "\\@varsupsetneq"), l(m, k, A, "\u2ACC", "\\supsetneqq", true), l(m, k, A, "\uE019", "\\@varsupsetneqq"), l(m, k, A, "\u22AE", "\\nVdash", true), l(m, k, A, "\u2AB5", "\\precneqq", true), l(m, k, A, "\u2AB6", "\\succneqq", true), l(m, k, A, "\uE016", "\\@nsubseteqq"), l(m, k, te, "\u22B4", "\\unlhd"), l(m, k, te, "\u22B5", "\\unrhd"), l(m, k, A, "\u219A", "\\nleftarrow", true), l(m, k, A, "\u219B", "\\nrightarrow", true), l(m, k, A, "\u21CD", "\\nLeftarrow", true), l(m, k, A, "\u21CF", "\\nRightarrow", true), l(m, k, A, "\u21AE", "\\nleftrightarrow", true), l(m, k, A, "\u21CE", "\\nLeftrightarrow", true), l(m, k, A, "\u25B3", "\\vartriangle"), l(m, k, F, "\u210F", "\\hslash"), l(m, k, F, "\u25BD", "\\triangledown"), l(m, k, F, "\u25CA", "\\lozenge"), l(m, k, F, "\u24C8", "\\circledS"), l(m, k, F, "\xAE", "\\circledR"), l(U, k, F, "\xAE", "\\circledR"), l(m, k, F, "\u2221", "\\measuredangle", true), l(m, k, F, "\u2204", "\\nexists"), l(m, k, F, "\u2127", "\\mho"), l(m, k, F, "\u2132", "\\Finv", true), l(m, k, F, "\u2141", "\\Game", true), l(m, k, F, "\u2035", "\\backprime"), l(m, k, F, "\u25B2", "\\blacktriangle"), l(m, k, F, "\u25BC", "\\blacktriangledown"), l(m, k, F, "\u25A0", "\\blacksquare"), l(m, k, F, "\u29EB", "\\blacklozenge"), l(m, k, F, "\u2605", "\\bigstar"), l(m, k, F, "\u2222", "\\sphericalangle", true), l(m, k, F, "\u2201", "\\complement", true), l(m, k, F, "\xF0", "\\eth", true), l(U, f, F, "\xF0", "\xF0"), l(m, k, F, "\u2571", "\\diagup"), l(m, k, F, "\u2572", "\\diagdown"), l(m, k, F, "\u25A1", "\\square"), l(m, k, F, "\u25A1", "\\Box"), l(m, k, F, "\u25CA", "\\Diamond"), l(m, k, F, "\xA5", "\\yen", true), l(U, k, F, "\xA5", "\\yen", true), l(m, k, F, "\u2713", "\\checkmark", true), l(U, k, F, "\u2713", "\\checkmark"), l(m, k, F, "\u2136", "\\beth", true), l(m, k, F, "\u2138", "\\daleth", true), l(m, k, F, "\u2137", "\\gimel", true), l(m, k, F, "\u03DD", "\\digamma", true), l(m, k, F, "\u03F0", "\\varkappa"), l(m, k, u0, "\u250C", "\\@ulcorner", true), l(m, k, n0, "\u2510", "\\@urcorner", true), l(m, k, u0, "\u2514", "\\@llcorner", true), l(m, k, n0, "\u2518", "\\@lrcorner", true), l(m, k, A, "\u2266", "\\leqq", true), l(m, k, A, "\u2A7D", "\\leqslant", true), l(m, k, A, "\u2A95", "\\eqslantless", true), l(m, k, A, "\u2272", "\\lesssim", true), l(m, k, A, "\u2A85", "\\lessapprox", true), l(m, k, A, "\u224A", "\\approxeq", true), l(m, k, te, "\u22D6", "\\lessdot"), l(m, k, A, "\u22D8", "\\lll", true), l(m, k, A, "\u2276", "\\lessgtr", true), l(m, k, A, "\u22DA", "\\lesseqgtr", true), l(m, k, A, "\u2A8B", "\\lesseqqgtr", true), l(m, k, A, "\u2251", "\\doteqdot"), l(m, k, A, "\u2253", "\\risingdotseq", true), l(m, k, A, "\u2252", "\\fallingdotseq", true), l(m, k, A, "\u223D", "\\backsim", true), l(m, k, A, "\u22CD", "\\backsimeq", true), l(m, k, A, "\u2AC5", "\\subseteqq", true), l(m, k, A, "\u22D0", "\\Subset", true), l(m, k, A, "\u228F", "\\sqsubset", true), l(m, k, A, "\u227C", "\\preccurlyeq", true), l(m, k, A, "\u22DE", "\\curlyeqprec", true), l(m, k, A, "\u227E", "\\precsim", true), l(m, k, A, "\u2AB7", "\\precapprox", true), l(m, k, A, "\u22B2", "\\vartriangleleft"), l(m, k, A, "\u22B4", "\\trianglelefteq"), l(m, k, A, "\u22A8", "\\vDash", true), l(m, k, A, "\u22AA", "\\Vvdash", true), l(m, k, A, "\u2323", "\\smallsmile"), l(m, k, A, "\u2322", "\\smallfrown"), l(m, k, A, "\u224F", "\\bumpeq", true), l(m, k, A, "\u224E", "\\Bumpeq", true), l(m, k, A, "\u2267", "\\geqq", true), l(m, k, A, "\u2A7E", "\\geqslant", true), l(m, k, A, "\u2A96", "\\eqslantgtr", true), l(m, k, A, "\u2273", "\\gtrsim", true), l(m, k, A, "\u2A86", "\\gtrapprox", true), l(m, k, te, "\u22D7", "\\gtrdot"), l(m, k, A, "\u22D9", "\\ggg", true), l(m, k, A, "\u2277", "\\gtrless", true), l(m, k, A, "\u22DB", "\\gtreqless", true), l(m, k, A, "\u2A8C", "\\gtreqqless", true), l(m, k, A, "\u2256", "\\eqcirc", true), l(m, k, A, "\u2257", "\\circeq", true), l(m, k, A, "\u225C", "\\triangleq", true), l(m, k, A, "\u223C", "\\thicksim"), l(m, k, A, "\u2248", "\\thickapprox"), l(m, k, A, "\u2AC6", "\\supseteqq", true), l(m, k, A, "\u22D1", "\\Supset", true), l(m, k, A, "\u2290", "\\sqsupset", true), l(m, k, A, "\u227D", "\\succcurlyeq", true), l(m, k, A, "\u22DF", "\\curlyeqsucc", true), l(m, k, A, "\u227F", "\\succsim", true), l(m, k, A, "\u2AB8", "\\succapprox", true), l(m, k, A, "\u22B3", "\\vartriangleright"), l(m, k, A, "\u22B5", "\\trianglerighteq"), l(m, k, A, "\u22A9", "\\Vdash", true), l(m, k, A, "\u2223", "\\shortmid"), l(m, k, A, "\u2225", "\\shortparallel"), l(m, k, A, "\u226C", "\\between", true), l(m, k, A, "\u22D4", "\\pitchfork", true), l(m, k, A, "\u221D", "\\varpropto"), l(m, k, A, "\u25C0", "\\blacktriangleleft"), l(m, k, A, "\u2234", "\\therefore", true), l(m, k, A, "\u220D", "\\backepsilon"), l(m, k, A, "\u25B6", "\\blacktriangleright"), l(m, k, A, "\u2235", "\\because", true), l(m, k, A, "\u22D8", "\\llless"), l(m, k, A, "\u22D9", "\\gggtr"), l(m, k, te, "\u22B2", "\\lhd"), l(m, k, te, "\u22B3", "\\rhd"), l(m, k, A, "\u2242", "\\eqsim", true), l(m, f, A, "\u22C8", "\\Join"), l(m, k, A, "\u2251", "\\Doteq", true), l(m, k, te, "\u2214", "\\dotplus", true), l(m, k, te, "\u2216", "\\smallsetminus"), l(m, k, te, "\u22D2", "\\Cap", true), l(m, k, te, "\u22D3", "\\Cup", true), l(m, k, te, "\u2A5E", "\\doublebarwedge", true), l(m, k, te, "\u229F", "\\boxminus", true), l(m, k, te, "\u229E", "\\boxplus", true), l(m, k, te, "\u22C7", "\\divideontimes", true), l(m, k, te, "\u22C9", "\\ltimes", true), l(m, k, te, "\u22CA", "\\rtimes", true), l(m, k, te, "\u22CB", "\\leftthreetimes", true), l(m, k, te, "\u22CC", "\\rightthreetimes", true), l(m, k, te, "\u22CF", "\\curlywedge", true), l(m, k, te, "\u22CE", "\\curlyvee", true), l(m, k, te, "\u229D", "\\circleddash", true), l(m, k, te, "\u229B", "\\circledast", true), l(m, k, te, "\u22C5", "\\centerdot"), l(m, k, te, "\u22BA", "\\intercal", true), l(m, k, te, "\u22D2", "\\doublecap"), l(m, k, te, "\u22D3", "\\doublecup"), l(m, k, te, "\u22A0", "\\boxtimes", true), l(m, k, A, "\u21E2", "\\dashrightarrow", true), l(m, k, A, "\u21E0", "\\dashleftarrow", true), l(m, k, A, "\u21C7", "\\leftleftarrows", true), l(m, k, A, "\u21C6", "\\leftrightarrows", true), l(m, k, A, "\u21DA", "\\Lleftarrow", true), l(m, k, A, "\u219E", "\\twoheadleftarrow", true), l(m, k, A, "\u21A2", "\\leftarrowtail", true), l(m, k, A, "\u21AB", "\\looparrowleft", true), l(m, k, A, "\u21CB", "\\leftrightharpoons", true), l(m, k, A, "\u21B6", "\\curvearrowleft", true), l(m, k, A, "\u21BA", "\\circlearrowleft", true), l(m, k, A, "\u21B0", "\\Lsh", true), l(m, k, A, "\u21C8", "\\upuparrows", true), l(m, k, A, "\u21BF", "\\upharpoonleft", true), l(m, k, A, "\u21C3", "\\downharpoonleft", true), l(m, f, A, "\u22B6", "\\origof", true), l(m, f, A, "\u22B7", "\\imageof", true), l(m, k, A, "\u22B8", "\\multimap", true), l(m, k, A, "\u21AD", "\\leftrightsquigarrow", true), l(m, k, A, "\u21C9", "\\rightrightarrows", true), l(m, k, A, "\u21C4", "\\rightleftarrows", true), l(m, k, A, "\u21A0", "\\twoheadrightarrow", true), l(m, k, A, "\u21A3", "\\rightarrowtail", true), l(m, k, A, "\u21AC", "\\looparrowright", true), l(m, k, A, "\u21B7", "\\curvearrowright", true), l(m, k, A, "\u21BB", "\\circlearrowright", true), l(m, k, A, "\u21B1", "\\Rsh", true), l(m, k, A, "\u21CA", "\\downdownarrows", true), l(m, k, A, "\u21BE", "\\upharpoonright", true), l(m, k, A, "\u21C2", "\\downharpoonright", true), l(m, k, A, "\u21DD", "\\rightsquigarrow", true), l(m, k, A, "\u21DD", "\\leadsto"), l(m, k, A, "\u21DB", "\\Rrightarrow", true), l(m, k, A, "\u21BE", "\\restriction"), l(m, f, F, "\u2018", "`"), l(m, f, F, "$", "\\$"), l(U, f, F, "$", "\\$"), l(U, f, F, "$", "\\textdollar"), l(m, f, F, "%", "\\%"), l(U, f, F, "%", "\\%"), l(m, f, F, "_", "\\_"), l(U, f, F, "_", "\\_"), l(U, f, F, "_", "\\textunderscore"), l(m, f, F, "\u2220", "\\angle", true), l(m, f, F, "\u221E", "\\infty", true), l(m, f, F, "\u2032", "\\prime"), l(m, f, F, "\u25B3", "\\triangle"), l(m, f, F, "\u0393", "\\Gamma", true), l(m, f, F, "\u0394", "\\Delta", true), l(m, f, F, "\u0398", "\\Theta", true), l(m, f, F, "\u039B", "\\Lambda", true), l(m, f, F, "\u039E", "\\Xi", true), l(m, f, F, "\u03A0", "\\Pi", true), l(m, f, F, "\u03A3", "\\Sigma", true), l(m, f, F, "\u03A5", "\\Upsilon", true), l(m, f, F, "\u03A6", "\\Phi", true), l(m, f, F, "\u03A8", "\\Psi", true), l(m, f, F, "\u03A9", "\\Omega", true), l(m, f, F, "A", "\u0391"), l(m, f, F, "B", "\u0392"), l(m, f, F, "E", "\u0395"), l(m, f, F, "Z", "\u0396"), l(m, f, F, "H", "\u0397"), l(m, f, F, "I", "\u0399"), l(m, f, F, "K", "\u039A"), l(m, f, F, "M", "\u039C"), l(m, f, F, "N", "\u039D"), l(m, f, F, "O", "\u039F"), l(m, f, F, "P", "\u03A1"), l(m, f, F, "T", "\u03A4"), l(m, f, F, "X", "\u03A7"), l(m, f, F, "\xAC", "\\neg", true), l(m, f, F, "\xAC", "\\lnot"), l(m, f, F, "\u22A4", "\\top"), l(m, f, F, "\u22A5", "\\bot"), l(m, f, F, "\u2205", "\\emptyset"), l(m, k, F, "\u2205", "\\varnothing"), l(m, f, me, "\u03B1", "\\alpha", true), l(m, f, me, "\u03B2", "\\beta", true), l(m, f, me, "\u03B3", "\\gamma", true), l(m, f, me, "\u03B4", "\\delta", true), l(m, f, me, "\u03F5", "\\epsilon", true), l(m, f, me, "\u03B6", "\\zeta", true), l(m, f, me, "\u03B7", "\\eta", true), l(m, f, me, "\u03B8", "\\theta", true), l(m, f, me, "\u03B9", "\\iota", true), l(m, f, me, "\u03BA", "\\kappa", true), l(m, f, me, "\u03BB", "\\lambda", true), l(m, f, me, "\u03BC", "\\mu", true), l(m, f, me, "\u03BD", "\\nu", true), l(m, f, me, "\u03BE", "\\xi", true), l(m, f, me, "\u03BF", "\\omicron", true), l(m, f, me, "\u03C0", "\\pi", true), l(m, f, me, "\u03C1", "\\rho", true), l(m, f, me, "\u03C3", "\\sigma", true), l(m, f, me, "\u03C4", "\\tau", true), l(m, f, me, "\u03C5", "\\upsilon", true), l(m, f, me, "\u03D5", "\\phi", true), l(m, f, me, "\u03C7", "\\chi", true), l(m, f, me, "\u03C8", "\\psi", true), l(m, f, me, "\u03C9", "\\omega", true), l(m, f, me, "\u03B5", "\\varepsilon", true), l(m, f, me, "\u03D1", "\\vartheta", true), l(m, f, me, "\u03D6", "\\varpi", true), l(m, f, me, "\u03F1", "\\varrho", true), l(m, f, me, "\u03C2", "\\varsigma", true), l(m, f, me, "\u03C6", "\\varphi", true), l(m, f, te, "\u2217", "*", true), l(m, f, te, "+", "+"), l(m, f, te, "\u2212", "-", true), l(m, f, te, "\u22C5", "\\cdot", true), l(m, f, te, "\u2218", "\\circ"), l(m, f, te, "\xF7", "\\div", true), l(m, f, te, "\xB1", "\\pm", true), l(m, f, te, "\xD7", "\\times", true), l(m, f, te, "\u2229", "\\cap", true), l(m, f, te, "\u222A", "\\cup", true), l(m, f, te, "\u2216", "\\setminus"), l(m, f, te, "\u2227", "\\land"), l(m, f, te, "\u2228", "\\lor"), l(m, f, te, "\u2227", "\\wedge", true), l(m, f, te, "\u2228", "\\vee", true), l(m, f, F, "\u221A", "\\surd"), l(m, f, u0, "\u27E8", "\\langle", true), l(m, f, u0, "\u2223", "\\lvert"), l(m, f, u0, "\u2225", "\\lVert"), l(m, f, n0, "?", "?"), l(m, f, n0, "!", "!"), l(m, f, n0, "\u27E9", "\\rangle", true), l(m, f, n0, "\u2223", "\\rvert"), l(m, f, n0, "\u2225", "\\rVert"), l(m, f, A, "=", "="), l(m, f, A, ":", ":"), l(m, f, A, "\u2248", "\\approx", true), l(m, f, A, "\u2245", "\\cong", true), l(m, f, A, "\u2265", "\\ge"), l(m, f, A, "\u2265", "\\geq", true), l(m, f, A, "\u2190", "\\gets"), l(m, f, A, ">", "\\gt", true), l(m, f, A, "\u2208", "\\in", true), l(m, f, A, "\uE020", "\\@not"), l(m, f, A, "\u2282", "\\subset", true), l(m, f, A, "\u2283", "\\supset", true), l(m, f, A, "\u2286", "\\subseteq", true), l(m, f, A, "\u2287", "\\supseteq", true), l(m, k, A, "\u2288", "\\nsubseteq", true), l(m, k, A, "\u2289", "\\nsupseteq", true), l(m, f, A, "\u22A8", "\\models"), l(m, f, A, "\u2190", "\\leftarrow", true), l(m, f, A, "\u2264", "\\le"), l(m, f, A, "\u2264", "\\leq", true), l(m, f, A, "<", "\\lt", true), l(m, f, A, "\u2192", "\\rightarrow", true), l(m, f, A, "\u2192", "\\to"), l(m, k, A, "\u2271", "\\ngeq", true), l(m, k, A, "\u2270", "\\nleq", true), l(m, f, D0, "\xA0", "\\ "), l(m, f, D0, "\xA0", "\\space"), l(m, f, D0, "\xA0", "\\nobreakspace"), l(U, f, D0, "\xA0", "\\ "), l(U, f, D0, "\xA0", " "), l(U, f, D0, "\xA0", "\\space"), l(U, f, D0, "\xA0", "\\nobreakspace"), l(m, f, D0, null, "\\nobreak"), l(m, f, D0, null, "\\allowbreak"), l(m, f, Wt, ",", ","), l(m, f, Wt, ";", ";"), l(m, k, te, "\u22BC", "\\barwedge", true), l(m, k, te, "\u22BB", "\\veebar", true), l(m, f, te, "\u2299", "\\odot", true), l(m, f, te, "\u2295", "\\oplus", true), l(m, f, te, "\u2297", "\\otimes", true), l(m, f, F, "\u2202", "\\partial", true), l(m, f, te, "\u2298", "\\oslash", true), l(m, k, te, "\u229A", "\\circledcirc", true), l(m, k, te, "\u22A1", "\\boxdot", true), l(m, f, te, "\u25B3", "\\bigtriangleup"), l(m, f, te, "\u25BD", "\\bigtriangledown"), l(m, f, te, "\u2020", "\\dagger"), l(m, f, te, "\u22C4", "\\diamond"), l(m, f, te, "\u22C6", "\\star"), l(m, f, te, "\u25C3", "\\triangleleft"), l(m, f, te, "\u25B9", "\\triangleright"), l(m, f, u0, "{", "\\{"), l(U, f, F, "{", "\\{"), l(U, f, F, "{", "\\textbraceleft"), l(m, f, n0, "}", "\\}"), l(U, f, F, "}", "\\}"), l(U, f, F, "}", "\\textbraceright"), l(m, f, u0, "{", "\\lbrace"), l(m, f, n0, "}", "\\rbrace"), l(m, f, u0, "[", "\\lbrack", true), l(U, f, F, "[", "\\lbrack", true), l(m, f, n0, "]", "\\rbrack", true), l(U, f, F, "]", "\\rbrack", true), l(m, f, u0, "(", "\\lparen", true), l(m, f, n0, ")", "\\rparen", true), l(U, f, F, "<", "\\textless", true), l(U, f, F, ">", "\\textgreater", true), l(m, f, u0, "\u230A", "\\lfloor", true), l(m, f, n0, "\u230B", "\\rfloor", true), l(m, f, u0, "\u2308", "\\lceil", true), l(m, f, n0, "\u2309", "\\rceil", true), l(m, f, F, "\\", "\\backslash"), l(m, f, F, "\u2223", "|"), l(m, f, F, "\u2223", "\\vert"), l(U, f, F, "|", "\\textbar", true), l(m, f, F, "\u2225", "\\|"), l(m, f, F, "\u2225", "\\Vert"), l(U, f, F, "\u2225", "\\textbardbl"), l(U, f, F, "~", "\\textasciitilde"), l(U, f, F, "\\", "\\textbackslash"), l(U, f, F, "^", "\\textasciicircum"), l(m, f, A, "\u2191", "\\uparrow", true), l(m, f, A, "\u21D1", "\\Uparrow", true), l(m, f, A, "\u2193", "\\downarrow", true), l(m, f, A, "\u21D3", "\\Downarrow", true), l(m, f, A, "\u2195", "\\updownarrow", true), l(m, f, A, "\u21D5", "\\Updownarrow", true), l(m, f, Ge, "\u2210", "\\coprod"), l(m, f, Ge, "\u22C1", "\\bigvee"), l(m, f, Ge, "\u22C0", "\\bigwedge"), l(m, f, Ge, "\u2A04", "\\biguplus"), l(m, f, Ge, "\u22C2", "\\bigcap"), l(m, f, Ge, "\u22C3", "\\bigcup"), l(m, f, Ge, "\u222B", "\\int"), l(m, f, Ge, "\u222B", "\\intop"), l(m, f, Ge, "\u222C", "\\iint"), l(m, f, Ge, "\u222D", "\\iiint"), l(m, f, Ge, "\u220F", "\\prod"), l(m, f, Ge, "\u2211", "\\sum"), l(m, f, Ge, "\u2A02", "\\bigotimes"), l(m, f, Ge, "\u2A01", "\\bigoplus"), l(m, f, Ge, "\u2A00", "\\bigodot"), l(m, f, Ge, "\u222E", "\\oint"), l(m, f, Ge, "\u222F", "\\oiint"), l(m, f, Ge, "\u2230", "\\oiiint"), l(m, f, Ge, "\u2A06", "\\bigsqcup"), l(m, f, Ge, "\u222B", "\\smallint"), l(U, f, ht, "\u2026", "\\textellipsis"), l(m, f, ht, "\u2026", "\\mathellipsis"), l(U, f, ht, "\u2026", "\\ldots", true), l(m, f, ht, "\u2026", "\\ldots", true), l(m, f, ht, "\u22EF", "\\@cdots", true), l(m, f, ht, "\u22F1", "\\ddots", true), l(m, f, F, "\u22EE", "\\varvdots"), l(m, f, Ne, "\u02CA", "\\acute"), l(m, f, Ne, "\u02CB", "\\grave"), l(m, f, Ne, "\xA8", "\\ddot"), l(m, f, Ne, "~", "\\tilde"), l(m, f, Ne, "\u02C9", "\\bar"), l(m, f, Ne, "\u02D8", "\\breve"), l(m, f, Ne, "\u02C7", "\\check"), l(m, f, Ne, "^", "\\hat"), l(m, f, Ne, "\u20D7", "\\vec"), l(m, f, Ne, "\u02D9", "\\dot"), l(m, f, Ne, "\u02DA", "\\mathring"), l(m, f, me, "\uE131", "\\@imath"), l(m, f, me, "\uE237", "\\@jmath"), l(m, f, F, "\u0131", "\u0131"), l(m, f, F, "\u0237", "\u0237"), l(U, f, F, "\u0131", "\\i", true), l(U, f, F, "\u0237", "\\j", true), l(U, f, F, "\xDF", "\\ss", true), l(U, f, F, "\xE6", "\\ae", true), l(U, f, F, "\u0153", "\\oe", true), l(U, f, F, "\xF8", "\\o", true), l(U, f, F, "\xC6", "\\AE", true), l(U, f, F, "\u0152", "\\OE", true), l(U, f, F, "\xD8", "\\O", true), l(U, f, Ne, "\u02CA", "\\'"), l(U, f, Ne, "\u02CB", "\\`"), l(U, f, Ne, "\u02C6", "\\^"), l(U, f, Ne, "\u02DC", "\\~"), l(U, f, Ne, "\u02C9", "\\="), l(U, f, Ne, "\u02D8", "\\u"), l(U, f, Ne, "\u02D9", "\\."), l(U, f, Ne, "\xB8", "\\c"), l(U, f, Ne, "\u02DA", "\\r"), l(U, f, Ne, "\u02C7", "\\v"), l(U, f, Ne, "\xA8", '\\"'), l(U, f, Ne, "\u02DD", "\\H"), l(U, f, Ne, "\u25EF", "\\textcircled");
      var li = { "--": true, "---": true, "``": true, "''": true };
      l(U, f, F, "\u2013", "--", true), l(U, f, F, "\u2013", "\\textendash"), l(U, f, F, "\u2014", "---", true), l(U, f, F, "\u2014", "\\textemdash"), l(U, f, F, "\u2018", "`", true), l(U, f, F, "\u2018", "\\textquoteleft"), l(U, f, F, "\u2019", "'", true), l(U, f, F, "\u2019", "\\textquoteright"), l(U, f, F, "\u201C", "``", true), l(U, f, F, "\u201C", "\\textquotedblleft"), l(U, f, F, "\u201D", "''", true), l(U, f, F, "\u201D", "\\textquotedblright"), l(m, f, F, "\xB0", "\\degree", true), l(U, f, F, "\xB0", "\\degree"), l(U, f, F, "\xB0", "\\textdegree", true), l(m, f, F, "\xA3", "\\pounds"), l(m, f, F, "\xA3", "\\mathsterling", true), l(U, f, F, "\xA3", "\\pounds"), l(U, f, F, "\xA3", "\\textsterling", true), l(m, k, F, "\u2720", "\\maltese"), l(U, k, F, "\u2720", "\\maltese");
      for (var ui = '0123456789/@."', Nr = 0; Nr < ui.length; Nr++) {
        var oi = ui.charAt(Nr);
        l(m, f, F, oi, oi);
      }
      for (var si = '0123456789!@*()-=+";:?/.,', Ir = 0; Ir < si.length; Ir++) {
        var hi = si.charAt(Ir);
        l(U, f, F, hi, hi);
      }
      for (var jt = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz", Lr = 0; Lr < jt.length; Lr++) {
        var Yt = jt.charAt(Lr);
        l(m, f, me, Yt, Yt), l(U, f, F, Yt, Yt);
      }
      l(m, k, F, "C", "\u2102"), l(U, k, F, "C", "\u2102"), l(m, k, F, "H", "\u210D"), l(U, k, F, "H", "\u210D"), l(m, k, F, "N", "\u2115"), l(U, k, F, "N", "\u2115"), l(m, k, F, "P", "\u2119"), l(U, k, F, "P", "\u2119"), l(m, k, F, "Q", "\u211A"), l(U, k, F, "Q", "\u211A"), l(m, k, F, "R", "\u211D"), l(U, k, F, "R", "\u211D"), l(m, k, F, "Z", "\u2124"), l(U, k, F, "Z", "\u2124"), l(m, f, me, "h", "\u210E"), l(U, f, me, "h", "\u210E");
      for (var pe = "", i0 = 0; i0 < jt.length; i0++) {
        var Ve = jt.charAt(i0);
        pe = String.fromCharCode(55349, 56320 + i0), l(m, f, me, Ve, pe), l(U, f, F, Ve, pe), pe = String.fromCharCode(55349, 56372 + i0), l(m, f, me, Ve, pe), l(U, f, F, Ve, pe), pe = String.fromCharCode(55349, 56424 + i0), l(m, f, me, Ve, pe), l(U, f, F, Ve, pe), pe = String.fromCharCode(55349, 56580 + i0), l(m, f, me, Ve, pe), l(U, f, F, Ve, pe), pe = String.fromCharCode(55349, 56736 + i0), l(m, f, me, Ve, pe), l(U, f, F, Ve, pe), pe = String.fromCharCode(55349, 56788 + i0), l(m, f, me, Ve, pe), l(U, f, F, Ve, pe), pe = String.fromCharCode(55349, 56840 + i0), l(m, f, me, Ve, pe), l(U, f, F, Ve, pe), pe = String.fromCharCode(55349, 56944 + i0), l(m, f, me, Ve, pe), l(U, f, F, Ve, pe), i0 < 26 && (pe = String.fromCharCode(55349, 56632 + i0), l(m, f, me, Ve, pe), l(U, f, F, Ve, pe), pe = String.fromCharCode(55349, 56476 + i0), l(m, f, me, Ve, pe), l(U, f, F, Ve, pe));
      }
      pe = String.fromCharCode(55349, 56668), l(m, f, me, "k", pe), l(U, f, F, "k", pe);
      for (var J0 = 0; J0 < 10; J0++) {
        var H0 = J0.toString();
        pe = String.fromCharCode(55349, 57294 + J0), l(m, f, me, H0, pe), l(U, f, F, H0, pe), pe = String.fromCharCode(55349, 57314 + J0), l(m, f, me, H0, pe), l(U, f, F, H0, pe), pe = String.fromCharCode(55349, 57324 + J0), l(m, f, me, H0, pe), l(U, f, F, H0, pe), pe = String.fromCharCode(55349, 57334 + J0), l(m, f, me, H0, pe), l(U, f, F, H0, pe);
      }
      for (var qr = "\xD0\xDE\xFE", Or = 0; Or < qr.length; Or++) {
        var Xt = qr.charAt(Or);
        l(m, f, me, Xt, Xt), l(U, f, F, Xt, Xt);
      }
      var $t = [["mathbf", "textbf", "Main-Bold"], ["mathbf", "textbf", "Main-Bold"], ["mathnormal", "textit", "Math-Italic"], ["mathnormal", "textit", "Math-Italic"], ["boldsymbol", "boldsymbol", "Main-BoldItalic"], ["boldsymbol", "boldsymbol", "Main-BoldItalic"], ["mathscr", "textscr", "Script-Regular"], ["", "", ""], ["", "", ""], ["", "", ""], ["mathfrak", "textfrak", "Fraktur-Regular"], ["mathfrak", "textfrak", "Fraktur-Regular"], ["mathbb", "textbb", "AMS-Regular"], ["mathbb", "textbb", "AMS-Regular"], ["", "", ""], ["", "", ""], ["mathsf", "textsf", "SansSerif-Regular"], ["mathsf", "textsf", "SansSerif-Regular"], ["mathboldsf", "textboldsf", "SansSerif-Bold"], ["mathboldsf", "textboldsf", "SansSerif-Bold"], ["mathitsf", "textitsf", "SansSerif-Italic"], ["mathitsf", "textitsf", "SansSerif-Italic"], ["", "", ""], ["", "", ""], ["mathtt", "texttt", "Typewriter-Regular"], ["mathtt", "texttt", "Typewriter-Regular"]], mi = [["mathbf", "textbf", "Main-Bold"], ["", "", ""], ["mathsf", "textsf", "SansSerif-Regular"], ["mathboldsf", "textboldsf", "SansSerif-Bold"], ["mathtt", "texttt", "Typewriter-Regular"]], Cu = function(e, t) {
        var r = e.charCodeAt(0), i = e.charCodeAt(1), a = (r - 55296) * 1024 + (i - 56320) + 65536, u = t === "math" ? 0 : 1;
        if (119808 <= a && a < 120484) {
          var p = Math.floor((a - 119808) / 26);
          return [$t[p][2], $t[p][u]];
        } else if (120782 <= a && a <= 120831) {
          var x = Math.floor((a - 120782) / 10);
          return [mi[x][2], mi[x][u]];
        } else {
          if (a === 120485 || a === 120486)
            return [$t[0][2], $t[0][u]];
          if (120486 < a && a < 120782)
            return ["", ""];
          throw new o("Unsupported character: " + e);
        }
      }, Zt = function(e, t, r) {
        return ke[r][e] && ke[r][e].replace && (e = ke[r][e].replace), { value: e, metrics: bt(e, t, r) };
      }, x0 = function(e, t, r, i, a) {
        var u = Zt(e, t, r), p = u.metrics;
        e = u.value;
        var x;
        if (p) {
          var y = p.italic;
          (r === "text" || i && i.font === "mathit") && (y = 0), x = new t0(e, p.height, p.depth, y, p.skew, p.width, a);
        } else
          typeof console < "u" && console.warn("No character metrics " + ("for '" + e + "' in style '" + t + "' and mode '" + r + "'")), x = new t0(e, 0, 0, 0, 0, 0, a);
        if (i) {
          x.maxFontSize = i.sizeMultiplier, i.style.isTight() && x.classes.push("mtight");
          var z = i.getColor();
          z && (x.style.color = z);
        }
        return x;
      }, Mu = function(e, t, r, i) {
        return i === void 0 && (i = []), r.font === "boldsymbol" && Zt(e, "Main-Bold", t).metrics ? x0(e, "Main-Bold", t, r, i.concat(["mathbf"])) : e === "\\" || ke[t][e].font === "main" ? x0(e, "Main-Regular", t, r, i) : x0(e, "AMS-Regular", t, r, i.concat(["amsrm"]));
      }, Tu = function(e, t, r, i, a) {
        return a !== "textord" && Zt(e, "Math-BoldItalic", t).metrics ? { fontName: "Math-BoldItalic", fontClass: "boldsymbol" } : { fontName: "Main-Bold", fontClass: "mathbf" };
      }, Eu = function(e, t, r) {
        var i = e.mode, a = e.text, u = ["mord"], p = i === "math" || i === "text" && t.font, x = p ? t.font : t.fontFamily;
        if (a.charCodeAt(0) === 55349) {
          var y = Cu(a, i), z = y[0], I = y[1];
          return x0(a, z, i, t, u.concat(I));
        } else if (x) {
          var R, P;
          if (x === "boldsymbol") {
            var G = Tu(a, i, t, u, r);
            R = G.fontName, P = [G.fontClass];
          } else
            p ? (R = fi[x].fontName, P = [x]) : (R = Qt(x, t.fontWeight, t.fontShape), P = [x, t.fontWeight, t.fontShape]);
          if (Zt(a, R, i).metrics)
            return x0(a, R, i, t, u.concat(P));
          if (li.hasOwnProperty(a) && R.substr(0, 10) === "Typewriter") {
            for (var Q = [], K = 0; K < a.length; K++)
              Q.push(x0(a[K], R, i, t, u.concat(P)));
            return pi(Q);
          }
        }
        if (r === "mathord")
          return x0(a, "Math-Italic", i, t, u.concat(["mathnormal"]));
        if (r === "textord") {
          var ne = ke[i][a] && ke[i][a].font;
          if (ne === "ams") {
            var ae = Qt("amsrm", t.fontWeight, t.fontShape);
            return x0(a, ae, i, t, u.concat("amsrm", t.fontWeight, t.fontShape));
          } else if (ne === "main" || !ne) {
            var oe = Qt("textrm", t.fontWeight, t.fontShape);
            return x0(a, oe, i, t, u.concat(t.fontWeight, t.fontShape));
          } else {
            var Ae = Qt(ne, t.fontWeight, t.fontShape);
            return x0(a, Ae, i, t, u.concat(Ae, t.fontWeight, t.fontShape));
          }
        } else
          throw new Error("unexpected type: " + r + " in makeOrd");
      }, Du = function(e, t) {
        if (v0(e.classes) !== v0(t.classes) || e.skew !== t.skew || e.maxFontSize !== t.maxFontSize)
          return false;
        if (e.classes.length === 1) {
          var r = e.classes[0];
          if (r === "mbin" || r === "mord")
            return false;
        }
        for (var i in e.style)
          if (e.style.hasOwnProperty(i) && e.style[i] !== t.style[i])
            return false;
        for (var a in t.style)
          if (t.style.hasOwnProperty(a) && e.style[a] !== t.style[a])
            return false;
        return true;
      }, Fu = function(e) {
        for (var t = 0; t < e.length - 1; t++) {
          var r = e[t], i = e[t + 1];
          r instanceof t0 && i instanceof t0 && Du(r, i) && (r.text += i.text, r.height = Math.max(r.height, i.height), r.depth = Math.max(r.depth, i.depth), r.italic = i.italic, e.splice(t + 1, 1), t--);
        }
        return e;
      }, Rr = function(e) {
        for (var t = 0, r = 0, i = 0, a = 0; a < e.children.length; a++) {
          var u = e.children[a];
          u.height > t && (t = u.height), u.depth > r && (r = u.depth), u.maxFontSize > i && (i = u.maxFontSize);
        }
        e.height = t, e.depth = r, e.maxFontSize = i;
      }, a0 = function(e, t, r, i) {
        var a = new K0(e, t, r, i);
        return Rr(a), a;
      }, ci = function(e, t, r, i) {
        return new K0(e, t, r, i);
      }, Nu = function(e, t, r) {
        var i = a0([e], [], t);
        return i.height = Math.max(r || t.fontMetrics().defaultRuleThickness, t.minRuleThickness), i.style.borderBottomWidth = X(i.height), i.maxFontSize = 1, i;
      }, Iu = function(e, t, r, i) {
        var a = new St(e, t, r, i);
        return Rr(a), a;
      }, pi = function(e) {
        var t = new T0(e);
        return Rr(t), t;
      }, Lu = function(e, t) {
        return e instanceof T0 ? a0([], [e], t) : e;
      }, qu = function(e) {
        if (e.positionType === "individualShift") {
          for (var t = e.children, r = [t[0]], i = -t[0].shift - t[0].elem.depth, a = i, u = 1; u < t.length; u++) {
            var p = -t[u].shift - a - t[u].elem.depth, x = p - (t[u - 1].elem.height + t[u - 1].elem.depth);
            a = a + p, r.push({ type: "kern", size: x }), r.push(t[u]);
          }
          return { children: r, depth: i };
        }
        var y;
        if (e.positionType === "top") {
          for (var z = e.positionData, I = 0; I < e.children.length; I++) {
            var R = e.children[I];
            z -= R.type === "kern" ? R.size : R.elem.height + R.elem.depth;
          }
          y = z;
        } else if (e.positionType === "bottom")
          y = -e.positionData;
        else {
          var P = e.children[0];
          if (P.type !== "elem")
            throw new Error('First child must have type "elem".');
          if (e.positionType === "shift")
            y = -P.elem.depth - e.positionData;
          else if (e.positionType === "firstBaseline")
            y = -P.elem.depth;
          else
            throw new Error("Invalid positionType " + e.positionType + ".");
        }
        return { children: e.children, depth: y };
      }, Ou = function(e, t) {
        for (var r = qu(e), i = r.children, a = r.depth, u = 0, p = 0; p < i.length; p++) {
          var x = i[p];
          if (x.type === "elem") {
            var y = x.elem;
            u = Math.max(u, y.maxFontSize, y.height);
          }
        }
        u += 2;
        var z = a0(["pstrut"], []);
        z.style.height = X(u);
        for (var I = [], R = a, P = a, G = a, Q = 0; Q < i.length; Q++) {
          var K = i[Q];
          if (K.type === "kern")
            G += K.size;
          else {
            var ne = K.elem, ae = K.wrapperClasses || [], oe = K.wrapperStyle || {}, Ae = a0(ae, [z, ne], void 0, oe);
            Ae.style.top = X(-u - G - ne.depth), K.marginLeft && (Ae.style.marginLeft = K.marginLeft), K.marginRight && (Ae.style.marginRight = K.marginRight), I.push(Ae), G += ne.height + ne.depth;
          }
          R = Math.min(R, G), P = Math.max(P, G);
        }
        var Me = a0(["vlist"], I);
        Me.style.height = X(P);
        var Ie;
        if (R < 0) {
          var Ce = a0([], []), Te = a0(["vlist"], [Ce]);
          Te.style.height = X(-R);
          var Re = a0(["vlist-s"], [new t0("\u200B")]);
          Ie = [a0(["vlist-r"], [Me, Re]), a0(["vlist-r"], [Te])];
        } else
          Ie = [a0(["vlist-r"], [Me])];
        var De = a0(["vlist-t"], Ie);
        return Ie.length === 2 && De.classes.push("vlist-t2"), De.height = P, De.depth = -R, De;
      }, Ru = function(e, t) {
        var r = a0(["mspace"], [], t), i = Fe(e, t);
        return r.style.marginRight = X(i), r;
      }, Qt = function(e, t, r) {
        var i = "";
        switch (e) {
          case "amsrm":
            i = "AMS";
            break;
          case "textrm":
            i = "Main";
            break;
          case "textsf":
            i = "SansSerif";
            break;
          case "texttt":
            i = "Typewriter";
            break;
          default:
            i = e;
        }
        var a;
        return t === "textbf" && r === "textit" ? a = "BoldItalic" : t === "textbf" ? a = "Bold" : t === "textit" ? a = "Italic" : a = "Regular", i + "-" + a;
      }, fi = { mathbf: { variant: "bold", fontName: "Main-Bold" }, mathrm: { variant: "normal", fontName: "Main-Regular" }, textit: { variant: "italic", fontName: "Main-Italic" }, mathit: { variant: "italic", fontName: "Main-Italic" }, mathnormal: { variant: "italic", fontName: "Math-Italic" }, mathbb: { variant: "double-struck", fontName: "AMS-Regular" }, mathcal: { variant: "script", fontName: "Caligraphic-Regular" }, mathfrak: { variant: "fraktur", fontName: "Fraktur-Regular" }, mathscr: { variant: "script", fontName: "Script-Regular" }, mathsf: { variant: "sans-serif", fontName: "SansSerif-Regular" }, mathtt: { variant: "monospace", fontName: "Typewriter-Regular" } }, di = { vec: ["vec", 0.471, 0.714], oiintSize1: ["oiintSize1", 0.957, 0.499], oiintSize2: ["oiintSize2", 1.472, 0.659], oiiintSize1: ["oiiintSize1", 1.304, 0.499], oiiintSize2: ["oiiintSize2", 1.98, 0.659] }, Hu = function(e, t) {
        var r = di[e], i = r[0], a = r[1], u = r[2], p = new E0(i), x = new y0([p], { width: X(a), height: X(u), style: "width:" + X(a), viewBox: "0 0 " + 1e3 * a + " " + 1e3 * u, preserveAspectRatio: "xMinYMin" }), y = ci(["overlay"], [x], t);
        return y.height = u, y.style.height = X(u), y.style.width = X(a), y;
      }, L = { fontMap: fi, makeSymbol: x0, mathsym: Mu, makeSpan: a0, makeSvgSpan: ci, makeLineSpan: Nu, makeAnchor: Iu, makeFragment: pi, wrapFragment: Lu, makeVList: Ou, makeOrd: Eu, makeGlue: Ru, staticSvg: Hu, svgData: di, tryCombineChars: Fu }, Le = { number: 3, unit: "mu" }, _0 = { number: 4, unit: "mu" }, F0 = { number: 5, unit: "mu" }, Pu = { mord: { mop: Le, mbin: _0, mrel: F0, minner: Le }, mop: { mord: Le, mop: Le, mrel: F0, minner: Le }, mbin: { mord: _0, mop: _0, mopen: _0, minner: _0 }, mrel: { mord: F0, mop: F0, mopen: F0, minner: F0 }, mopen: {}, mclose: { mop: Le, mbin: _0, mrel: F0, minner: Le }, mpunct: { mord: Le, mop: Le, mrel: F0, mopen: Le, mclose: Le, mpunct: Le, minner: Le }, minner: { mord: Le, mop: Le, mbin: _0, mrel: F0, mopen: Le, mpunct: Le, minner: Le } }, Gu = { mord: { mop: Le }, mop: { mord: Le, mop: Le }, mbin: {}, mrel: {}, mopen: {}, mclose: { mop: Le }, mpunct: {}, minner: { mop: Le } }, gi = {}, Kt = {}, Jt = {};
      function ee(s) {
        for (var e = s.type, t = s.names, r = s.props, i = s.handler, a = s.htmlBuilder, u = s.mathmlBuilder, p = { type: e, numArgs: r.numArgs, argTypes: r.argTypes, allowedInArgument: !!r.allowedInArgument, allowedInText: !!r.allowedInText, allowedInMath: r.allowedInMath === void 0 ? true : r.allowedInMath, numOptionalArgs: r.numOptionalArgs || 0, infix: !!r.infix, primitive: !!r.primitive, handler: i }, x = 0; x < t.length; ++x)
          gi[t[x]] = p;
        e && (a && (Kt[e] = a), u && (Jt[e] = u));
      }
      function et(s) {
        var e = s.type, t = s.htmlBuilder, r = s.mathmlBuilder;
        ee({ type: e, names: [], props: { numArgs: 0 }, handler: function() {
          throw new Error("Should never be called.");
        }, htmlBuilder: t, mathmlBuilder: r });
      }
      var _t = function(e) {
        return e.type === "ordgroup" && e.body.length === 1 ? e.body[0] : e;
      }, Ue = function(e) {
        return e.type === "ordgroup" ? e.body : [e];
      }, N0 = L.makeSpan, Vu = ["leftmost", "mbin", "mopen", "mrel", "mop", "mpunct"], Uu = ["rightmost", "mrel", "mclose", "mpunct"], Wu = { display: _.DISPLAY, text: _.TEXT, script: _.SCRIPT, scriptscript: _.SCRIPTSCRIPT }, ju = { mord: "mord", mop: "mop", mbin: "mbin", mrel: "mrel", mopen: "mopen", mclose: "mclose", mpunct: "mpunct", minner: "minner" }, $e = function(e, t, r, i) {
        i === void 0 && (i = [null, null]);
        for (var a = [], u = 0; u < e.length; u++) {
          var p = Se(e[u], t);
          if (p instanceof T0) {
            var x = p.children;
            a.push.apply(a, x);
          } else
            a.push(p);
        }
        if (L.tryCombineChars(a), !r)
          return a;
        var y = t;
        if (e.length === 1) {
          var z = e[0];
          z.type === "sizing" ? y = t.havingSize(z.size) : z.type === "styling" && (y = t.havingStyle(Wu[z.style]));
        }
        var I = N0([i[0] || "leftmost"], [], t), R = N0([i[1] || "rightmost"], [], t), P = r === "root";
        return vi(a, function(G, Q) {
          var K = Q.classes[0], ne = G.classes[0];
          K === "mbin" && H.contains(Uu, ne) ? Q.classes[0] = "mord" : ne === "mbin" && H.contains(Vu, K) && (G.classes[0] = "mord");
        }, { node: I }, R, P), vi(a, function(G, Q) {
          var K = Hr(Q), ne = Hr(G), ae = K && ne ? G.hasClass("mtight") ? Gu[K][ne] : Pu[K][ne] : null;
          if (ae)
            return L.makeGlue(ae, y);
        }, { node: I }, R, P), a;
      }, vi = function s(e, t, r, i, a) {
        i && e.push(i);
        for (var u = 0; u < e.length; u++) {
          var p = e[u], x = xi(p);
          if (x) {
            s(x.children, t, r, null, a);
            continue;
          }
          var y = !p.hasClass("mspace");
          if (y) {
            var z = t(p, r.node);
            z && (r.insertAfter ? r.insertAfter(z) : (e.unshift(z), u++));
          }
          y ? r.node = p : a && p.hasClass("newline") && (r.node = N0(["leftmost"])), r.insertAfter = function(I) {
            return function(R) {
              e.splice(I + 1, 0, R), u++;
            };
          }(u);
        }
        i && e.pop();
      }, xi = function(e) {
        return e instanceof T0 || e instanceof St || e instanceof K0 && e.hasClass("enclosing") ? e : null;
      }, Yu = function s(e, t) {
        var r = xi(e);
        if (r) {
          var i = r.children;
          if (i.length) {
            if (t === "right")
              return s(i[i.length - 1], "right");
            if (t === "left")
              return s(i[0], "left");
          }
        }
        return e;
      }, Hr = function(e, t) {
        return e ? (t && (e = Yu(e, t)), ju[e.classes[0]] || null) : null;
      }, zt = function(e, t) {
        var r = ["nulldelimiter"].concat(e.baseSizingClasses());
        return N0(t.concat(r));
      }, Se = function(e, t, r) {
        if (!e)
          return N0();
        if (Kt[e.type]) {
          var i = Kt[e.type](e, t);
          if (r && t.size !== r.size) {
            i = N0(t.sizingClasses(r), [i], t);
            var a = t.sizeMultiplier / r.sizeMultiplier;
            i.height *= a, i.depth *= a;
          }
          return i;
        } else
          throw new o("Got group of unknown type: '" + e.type + "'");
      };
      function er(s, e) {
        var t = N0(["base"], s, e), r = N0(["strut"]);
        return r.style.height = X(t.height + t.depth), t.depth && (r.style.verticalAlign = X(-t.depth)), t.children.unshift(r), t;
      }
      function Pr(s, e) {
        var t = null;
        s.length === 1 && s[0].type === "tag" && (t = s[0].tag, s = s[0].body);
        var r = $e(s, e, "root"), i;
        r.length === 2 && r[1].hasClass("tag") && (i = r.pop());
        for (var a = [], u = [], p = 0; p < r.length; p++)
          if (u.push(r[p]), r[p].hasClass("mbin") || r[p].hasClass("mrel") || r[p].hasClass("allowbreak")) {
            for (var x = false; p < r.length - 1 && r[p + 1].hasClass("mspace") && !r[p + 1].hasClass("newline"); )
              p++, u.push(r[p]), r[p].hasClass("nobreak") && (x = true);
            x || (a.push(er(u, e)), u = []);
          } else
            r[p].hasClass("newline") && (u.pop(), u.length > 0 && (a.push(er(u, e)), u = []), a.push(r[p]));
        u.length > 0 && a.push(er(u, e));
        var y;
        t ? (y = er($e(t, e, true)), y.classes = ["tag"], a.push(y)) : i && a.push(i);
        var z = N0(["katex-html"], a);
        if (z.setAttribute("aria-hidden", "true"), y) {
          var I = y.children[0];
          I.style.height = X(z.height + z.depth), z.depth && (I.style.verticalAlign = X(-z.depth));
        }
        return z;
      }
      function bi(s) {
        return new T0(s);
      }
      var f0 = function() {
        function s(t, r, i) {
          this.type = void 0, this.attributes = void 0, this.children = void 0, this.classes = void 0, this.type = t, this.attributes = {}, this.children = r || [], this.classes = i || [];
        }
        var e = s.prototype;
        return e.setAttribute = function(r, i) {
          this.attributes[r] = i;
        }, e.getAttribute = function(r) {
          return this.attributes[r];
        }, e.toNode = function() {
          var r = document.createElementNS("http://www.w3.org/1998/Math/MathML", this.type);
          for (var i in this.attributes)
            Object.prototype.hasOwnProperty.call(this.attributes, i) && r.setAttribute(i, this.attributes[i]);
          this.classes.length > 0 && (r.className = v0(this.classes));
          for (var a = 0; a < this.children.length; a++)
            r.appendChild(this.children[a].toNode());
          return r;
        }, e.toMarkup = function() {
          var r = "<" + this.type;
          for (var i in this.attributes)
            Object.prototype.hasOwnProperty.call(this.attributes, i) && (r += " " + i + '="', r += H.escape(this.attributes[i]), r += '"');
          this.classes.length > 0 && (r += ' class ="' + H.escape(v0(this.classes)) + '"'), r += ">";
          for (var a = 0; a < this.children.length; a++)
            r += this.children[a].toMarkup();
          return r += "</" + this.type + ">", r;
        }, e.toText = function() {
          return this.children.map(function(r) {
            return r.toText();
          }).join("");
        }, s;
      }(), Bt = function() {
        function s(t) {
          this.text = void 0, this.text = t;
        }
        var e = s.prototype;
        return e.toNode = function() {
          return document.createTextNode(this.text);
        }, e.toMarkup = function() {
          return H.escape(this.toText());
        }, e.toText = function() {
          return this.text;
        }, s;
      }(), Xu = function() {
        function s(t) {
          this.width = void 0, this.character = void 0, this.width = t, t >= 0.05555 && t <= 0.05556 ? this.character = "\u200A" : t >= 0.1666 && t <= 0.1667 ? this.character = "\u2009" : t >= 0.2222 && t <= 0.2223 ? this.character = "\u2005" : t >= 0.2777 && t <= 0.2778 ? this.character = "\u2005\u200A" : t >= -0.05556 && t <= -0.05555 ? this.character = "\u200A\u2063" : t >= -0.1667 && t <= -0.1666 ? this.character = "\u2009\u2063" : t >= -0.2223 && t <= -0.2222 ? this.character = "\u205F\u2063" : t >= -0.2778 && t <= -0.2777 ? this.character = "\u2005\u2063" : this.character = null;
        }
        var e = s.prototype;
        return e.toNode = function() {
          if (this.character)
            return document.createTextNode(this.character);
          var r = document.createElementNS("http://www.w3.org/1998/Math/MathML", "mspace");
          return r.setAttribute("width", X(this.width)), r;
        }, e.toMarkup = function() {
          return this.character ? "<mtext>" + this.character + "</mtext>" : '<mspace width="' + X(this.width) + '"/>';
        }, e.toText = function() {
          return this.character ? this.character : " ";
        }, s;
      }(), W = { MathNode: f0, TextNode: Bt, SpaceNode: Xu, newDocumentFragment: bi }, d0 = function(e, t, r) {
        return ke[t][e] && ke[t][e].replace && e.charCodeAt(0) !== 55349 && !(li.hasOwnProperty(e) && r && (r.fontFamily && r.fontFamily.substr(4, 2) === "tt" || r.font && r.font.substr(4, 2) === "tt")) && (e = ke[t][e].replace), new W.TextNode(e);
      }, Gr = function(e) {
        return e.length === 1 ? e[0] : new W.MathNode("mrow", e);
      }, Vr = function(e, t) {
        if (t.fontFamily === "texttt")
          return "monospace";
        if (t.fontFamily === "textsf")
          return t.fontShape === "textit" && t.fontWeight === "textbf" ? "sans-serif-bold-italic" : t.fontShape === "textit" ? "sans-serif-italic" : t.fontWeight === "textbf" ? "bold-sans-serif" : "sans-serif";
        if (t.fontShape === "textit" && t.fontWeight === "textbf")
          return "bold-italic";
        if (t.fontShape === "textit")
          return "italic";
        if (t.fontWeight === "textbf")
          return "bold";
        var r = t.font;
        if (!r || r === "mathnormal")
          return null;
        var i = e.mode;
        if (r === "mathit")
          return "italic";
        if (r === "boldsymbol")
          return e.type === "textord" ? "bold" : "bold-italic";
        if (r === "mathbf")
          return "bold";
        if (r === "mathbb")
          return "double-struck";
        if (r === "mathfrak")
          return "fraktur";
        if (r === "mathscr" || r === "mathcal")
          return "script";
        if (r === "mathsf")
          return "sans-serif";
        if (r === "mathtt")
          return "monospace";
        var a = e.text;
        if (H.contains(["\\imath", "\\jmath"], a))
          return null;
        ke[i][a] && ke[i][a].replace && (a = ke[i][a].replace);
        var u = L.fontMap[r].fontName;
        return bt(a, u, i) ? L.fontMap[r].variant : null;
      }, o0 = function(e, t, r) {
        if (e.length === 1) {
          var i = Ee(e[0], t);
          return r && i instanceof f0 && i.type === "mo" && (i.setAttribute("lspace", "0em"), i.setAttribute("rspace", "0em")), [i];
        }
        for (var a = [], u, p = 0; p < e.length; p++) {
          var x = Ee(e[p], t);
          if (x instanceof f0 && u instanceof f0) {
            if (x.type === "mtext" && u.type === "mtext" && x.getAttribute("mathvariant") === u.getAttribute("mathvariant")) {
              var y;
              (y = u.children).push.apply(y, x.children);
              continue;
            } else if (x.type === "mn" && u.type === "mn") {
              var z;
              (z = u.children).push.apply(z, x.children);
              continue;
            } else if (x.type === "mi" && x.children.length === 1 && u.type === "mn") {
              var I = x.children[0];
              if (I instanceof Bt && I.text === ".") {
                var R;
                (R = u.children).push.apply(R, x.children);
                continue;
              }
            } else if (u.type === "mi" && u.children.length === 1) {
              var P = u.children[0];
              if (P instanceof Bt && P.text === "\u0338" && (x.type === "mo" || x.type === "mi" || x.type === "mn")) {
                var G = x.children[0];
                G instanceof Bt && G.text.length > 0 && (G.text = G.text.slice(0, 1) + "\u0338" + G.text.slice(1), a.pop());
              }
            }
          }
          a.push(x), u = x;
        }
        return a;
      }, P0 = function(e, t, r) {
        return Gr(o0(e, t, r));
      }, Ee = function(e, t) {
        if (!e)
          return new W.MathNode("mrow");
        if (Jt[e.type]) {
          var r = Jt[e.type](e, t);
          return r;
        } else
          throw new o("Got group of unknown type: '" + e.type + "'");
      };
      function yi(s, e, t, r, i) {
        var a = o0(s, t), u;
        a.length === 1 && a[0] instanceof f0 && H.contains(["mrow", "mtable"], a[0].type) ? u = a[0] : u = new W.MathNode("mrow", a);
        var p = new W.MathNode("annotation", [new W.TextNode(e)]);
        p.setAttribute("encoding", "application/x-tex");
        var x = new W.MathNode("semantics", [u, p]), y = new W.MathNode("math", [x]);
        y.setAttribute("xmlns", "http://www.w3.org/1998/Math/MathML"), r && y.setAttribute("display", "block");
        var z = i ? "katex" : "katex-mathml";
        return L.makeSpan([z], [y]);
      }
      var wi = function(e) {
        return new Q0({ style: e.displayMode ? _.DISPLAY : _.TEXT, maxSize: e.maxSize, minRuleThickness: e.minRuleThickness });
      }, ki = function(e, t) {
        if (t.displayMode) {
          var r = ["katex-display"];
          t.leqno && r.push("leqno"), t.fleqn && r.push("fleqn"), e = L.makeSpan(r, [e]);
        }
        return e;
      }, $u = function(e, t, r) {
        var i = wi(r), a;
        if (r.output === "mathml")
          return yi(e, t, i, r.displayMode, true);
        if (r.output === "html") {
          var u = Pr(e, i);
          a = L.makeSpan(["katex"], [u]);
        } else {
          var p = yi(e, t, i, r.displayMode, false), x = Pr(e, i);
          a = L.makeSpan(["katex"], [p, x]);
        }
        return ki(a, r);
      }, Zu = function(e, t, r) {
        var i = wi(r), a = Pr(e, i), u = L.makeSpan(["katex"], [a]);
        return ki(u, r);
      }, l4 = null, Qu = { widehat: "^", widecheck: "\u02C7", widetilde: "~", utilde: "~", overleftarrow: "\u2190", underleftarrow: "\u2190", xleftarrow: "\u2190", overrightarrow: "\u2192", underrightarrow: "\u2192", xrightarrow: "\u2192", underbrace: "\u23DF", overbrace: "\u23DE", overgroup: "\u23E0", undergroup: "\u23E1", overleftrightarrow: "\u2194", underleftrightarrow: "\u2194", xleftrightarrow: "\u2194", Overrightarrow: "\u21D2", xRightarrow: "\u21D2", overleftharpoon: "\u21BC", xleftharpoonup: "\u21BC", overrightharpoon: "\u21C0", xrightharpoonup: "\u21C0", xLeftarrow: "\u21D0", xLeftrightarrow: "\u21D4", xhookleftarrow: "\u21A9", xhookrightarrow: "\u21AA", xmapsto: "\u21A6", xrightharpoondown: "\u21C1", xleftharpoondown: "\u21BD", xrightleftharpoons: "\u21CC", xleftrightharpoons: "\u21CB", xtwoheadleftarrow: "\u219E", xtwoheadrightarrow: "\u21A0", xlongequal: "=", xtofrom: "\u21C4", xrightleftarrows: "\u21C4", xrightequilibrium: "\u21CC", xleftequilibrium: "\u21CB", "\\cdrightarrow": "\u2192", "\\cdleftarrow": "\u2190", "\\cdlongequal": "=" }, Ku = function(e) {
        var t = new W.MathNode("mo", [new W.TextNode(Qu[e.replace(/^\\/, "")])]);
        return t.setAttribute("stretchy", "true"), t;
      }, Ju = { overrightarrow: [["rightarrow"], 0.888, 522, "xMaxYMin"], overleftarrow: [["leftarrow"], 0.888, 522, "xMinYMin"], underrightarrow: [["rightarrow"], 0.888, 522, "xMaxYMin"], underleftarrow: [["leftarrow"], 0.888, 522, "xMinYMin"], xrightarrow: [["rightarrow"], 1.469, 522, "xMaxYMin"], "\\cdrightarrow": [["rightarrow"], 3, 522, "xMaxYMin"], xleftarrow: [["leftarrow"], 1.469, 522, "xMinYMin"], "\\cdleftarrow": [["leftarrow"], 3, 522, "xMinYMin"], Overrightarrow: [["doublerightarrow"], 0.888, 560, "xMaxYMin"], xRightarrow: [["doublerightarrow"], 1.526, 560, "xMaxYMin"], xLeftarrow: [["doubleleftarrow"], 1.526, 560, "xMinYMin"], overleftharpoon: [["leftharpoon"], 0.888, 522, "xMinYMin"], xleftharpoonup: [["leftharpoon"], 0.888, 522, "xMinYMin"], xleftharpoondown: [["leftharpoondown"], 0.888, 522, "xMinYMin"], overrightharpoon: [["rightharpoon"], 0.888, 522, "xMaxYMin"], xrightharpoonup: [["rightharpoon"], 0.888, 522, "xMaxYMin"], xrightharpoondown: [["rightharpoondown"], 0.888, 522, "xMaxYMin"], xlongequal: [["longequal"], 0.888, 334, "xMinYMin"], "\\cdlongequal": [["longequal"], 3, 334, "xMinYMin"], xtwoheadleftarrow: [["twoheadleftarrow"], 0.888, 334, "xMinYMin"], xtwoheadrightarrow: [["twoheadrightarrow"], 0.888, 334, "xMaxYMin"], overleftrightarrow: [["leftarrow", "rightarrow"], 0.888, 522], overbrace: [["leftbrace", "midbrace", "rightbrace"], 1.6, 548], underbrace: [["leftbraceunder", "midbraceunder", "rightbraceunder"], 1.6, 548], underleftrightarrow: [["leftarrow", "rightarrow"], 0.888, 522], xleftrightarrow: [["leftarrow", "rightarrow"], 1.75, 522], xLeftrightarrow: [["doubleleftarrow", "doublerightarrow"], 1.75, 560], xrightleftharpoons: [["leftharpoondownplus", "rightharpoonplus"], 1.75, 716], xleftrightharpoons: [["leftharpoonplus", "rightharpoondownplus"], 1.75, 716], xhookleftarrow: [["leftarrow", "righthook"], 1.08, 522], xhookrightarrow: [["lefthook", "rightarrow"], 1.08, 522], overlinesegment: [["leftlinesegment", "rightlinesegment"], 0.888, 522], underlinesegment: [["leftlinesegment", "rightlinesegment"], 0.888, 522], overgroup: [["leftgroup", "rightgroup"], 0.888, 342], undergroup: [["leftgroupunder", "rightgroupunder"], 0.888, 342], xmapsto: [["leftmapsto", "rightarrow"], 1.5, 522], xtofrom: [["leftToFrom", "rightToFrom"], 1.75, 528], xrightleftarrows: [["baraboveleftarrow", "rightarrowabovebar"], 1.75, 901], xrightequilibrium: [["baraboveshortleftharpoon", "rightharpoonaboveshortbar"], 1.75, 716], xleftequilibrium: [["shortbaraboveleftharpoon", "shortrightharpoonabovebar"], 1.75, 716] }, _u = function(e) {
        return e.type === "ordgroup" ? e.body.length : 1;
      }, e1 = function(e, t) {
        function r() {
          var x = 4e5, y = e.label.substr(1);
          if (H.contains(["widehat", "widecheck", "widetilde", "utilde"], y)) {
            var z = e, I = _u(z.base), R, P, G;
            if (I > 5)
              y === "widehat" || y === "widecheck" ? (R = 420, x = 2364, G = 0.42, P = y + "4") : (R = 312, x = 2340, G = 0.34, P = "tilde4");
            else {
              var Q = [1, 1, 2, 2, 3, 3][I];
              y === "widehat" || y === "widecheck" ? (x = [0, 1062, 2364, 2364, 2364][Q], R = [0, 239, 300, 360, 420][Q], G = [0, 0.24, 0.3, 0.3, 0.36, 0.42][Q], P = y + Q) : (x = [0, 600, 1033, 2339, 2340][Q], R = [0, 260, 286, 306, 312][Q], G = [0, 0.26, 0.286, 0.3, 0.306, 0.34][Q], P = "tilde" + Q);
            }
            var K = new E0(P), ne = new y0([K], { width: "100%", height: X(G), viewBox: "0 0 " + x + " " + R, preserveAspectRatio: "none" });
            return { span: L.makeSvgSpan([], [ne], t), minWidth: 0, height: G };
          } else {
            var ae = [], oe = Ju[y], Ae = oe[0], Me = oe[1], Ie = oe[2], Ce = Ie / 1e3, Te = Ae.length, Re, De;
            if (Te === 1) {
              var s0 = oe[3];
              Re = ["hide-tail"], De = [s0];
            } else if (Te === 2)
              Re = ["halfarrow-left", "halfarrow-right"], De = ["xMinYMin", "xMaxYMin"];
            else if (Te === 3)
              Re = ["brace-left", "brace-center", "brace-right"], De = ["xMinYMin", "xMidYMin", "xMaxYMin"];
            else
              throw new Error(`Correct katexImagesData or update code here to support
                    ` + Te + " children.");
            for (var h0 = 0; h0 < Te; h0++) {
              var U0 = new E0(Ae[h0]), A0 = new y0([U0], { width: "400em", height: X(Ce), viewBox: "0 0 " + x + " " + Ie, preserveAspectRatio: De[h0] + " slice" }), m0 = L.makeSvgSpan([Re[h0]], [A0], t);
              if (Te === 1)
                return { span: m0, minWidth: Me, height: Ce };
              m0.style.height = X(Ce), ae.push(m0);
            }
            return { span: L.makeSpan(["stretchy"], ae, t), minWidth: Me, height: Ce };
          }
        }
        var i = r(), a = i.span, u = i.minWidth, p = i.height;
        return a.height = p, a.style.height = X(p), u > 0 && (a.style.minWidth = X(u)), a;
      }, t1 = function(e, t, r, i, a) {
        var u, p = e.height + e.depth + r + i;
        if (/fbox|color|angl/.test(t)) {
          if (u = L.makeSpan(["stretchy", t], [], a), t === "fbox") {
            var x = a.color && a.getColor();
            x && (u.style.borderColor = x);
          }
        } else {
          var y = [];
          /^[bx]cancel$/.test(t) && y.push(new At({ x1: "0", y1: "0", x2: "100%", y2: "100%", "stroke-width": "0.046em" })), /^x?cancel$/.test(t) && y.push(new At({ x1: "0", y1: "100%", x2: "100%", y2: "0", "stroke-width": "0.046em" }));
          var z = new y0(y, { width: "100%", height: X(p) });
          u = L.makeSvgSpan([], [z], a);
        }
        return u.height = p, u.style.height = X(p), u;
      }, I0 = { encloseSpan: t1, mathMLnode: Ku, svgSpan: e1 };
      function ge(s, e) {
        if (!s || s.type !== e)
          throw new Error("Expected node of type " + e + ", but got " + (s ? "node of type " + s.type : String(s)));
        return s;
      }
      function Ur(s) {
        var e = tr(s);
        if (!e)
          throw new Error("Expected node of symbol group type, but got " + (s ? "node of type " + s.type : String(s)));
        return e;
      }
      function tr(s) {
        return s && (s.type === "atom" || l0.hasOwnProperty(s.type)) ? s : null;
      }
      var Wr = function(e, t) {
        var r, i, a;
        e && e.type === "supsub" ? (i = ge(e.base, "accent"), r = i.base, e.base = r, a = ie(Se(e, t)), e.base = i) : (i = ge(e, "accent"), r = i.base);
        var u = Se(r, t.havingCrampedStyle()), p = i.isShifty && H.isCharacterBox(r), x = 0;
        if (p) {
          var y = H.getBaseElem(r), z = Se(y, t.havingCrampedStyle());
          x = $(z).skew;
        }
        var I = i.label === "\\c", R = I ? u.height + u.depth : Math.min(u.height, t.fontMetrics().xHeight), P;
        if (i.isStretchy)
          P = I0.svgSpan(i, t), P = L.makeVList({ positionType: "firstBaseline", children: [{ type: "elem", elem: u }, { type: "elem", elem: P, wrapperClasses: ["svg-align"], wrapperStyle: x > 0 ? { width: "calc(100% - " + X(2 * x) + ")", marginLeft: X(2 * x) } : void 0 }] }, t);
        else {
          var G, Q;
          i.label === "\\vec" ? (G = L.staticSvg("vec", t), Q = L.svgData.vec[1]) : (G = L.makeOrd({ mode: i.mode, text: i.label }, t, "textord"), G = $(G), G.italic = 0, Q = G.width, I && (R += G.depth)), P = L.makeSpan(["accent-body"], [G]);
          var K = i.label === "\\textcircled";
          K && (P.classes.push("accent-full"), R = u.height);
          var ne = x;
          K || (ne -= Q / 2), P.style.left = X(ne), i.label === "\\textcircled" && (P.style.top = ".2em"), P = L.makeVList({ positionType: "firstBaseline", children: [{ type: "elem", elem: u }, { type: "kern", size: -R }, { type: "elem", elem: P }] }, t);
        }
        var ae = L.makeSpan(["mord", "accent"], [P], t);
        return a ? (a.children[0] = ae, a.height = Math.max(ae.height, a.height), a.classes[0] = "mord", a) : ae;
      }, Si = function(e, t) {
        var r = e.isStretchy ? I0.mathMLnode(e.label) : new W.MathNode("mo", [d0(e.label, e.mode)]), i = new W.MathNode("mover", [Ee(e.base, t), r]);
        return i.setAttribute("accent", "true"), i;
      }, r1 = new RegExp(["\\acute", "\\grave", "\\ddot", "\\tilde", "\\bar", "\\breve", "\\check", "\\hat", "\\vec", "\\dot", "\\mathring"].map(function(s) {
        return "\\" + s;
      }).join("|"));
      ee({ type: "accent", names: ["\\acute", "\\grave", "\\ddot", "\\tilde", "\\bar", "\\breve", "\\check", "\\hat", "\\vec", "\\dot", "\\mathring", "\\widecheck", "\\widehat", "\\widetilde", "\\overrightarrow", "\\overleftarrow", "\\Overrightarrow", "\\overleftrightarrow", "\\overgroup", "\\overlinesegment", "\\overleftharpoon", "\\overrightharpoon"], props: { numArgs: 1 }, handler: function(e, t) {
        var r = _t(t[0]), i = !r1.test(e.funcName), a = !i || e.funcName === "\\widehat" || e.funcName === "\\widetilde" || e.funcName === "\\widecheck";
        return { type: "accent", mode: e.parser.mode, label: e.funcName, isStretchy: i, isShifty: a, base: r };
      }, htmlBuilder: Wr, mathmlBuilder: Si }), ee({ type: "accent", names: ["\\'", "\\`", "\\^", "\\~", "\\=", "\\u", "\\.", '\\"', "\\c", "\\r", "\\H", "\\v", "\\textcircled"], props: { numArgs: 1, allowedInText: true, allowedInMath: true, argTypes: ["primitive"] }, handler: function(e, t) {
        var r = t[0], i = e.parser.mode;
        return i === "math" && (e.parser.settings.reportNonstrict("mathVsTextAccents", "LaTeX's accent " + e.funcName + " works only in text mode"), i = "text"), { type: "accent", mode: i, label: e.funcName, isStretchy: false, isShifty: true, base: r };
      }, htmlBuilder: Wr, mathmlBuilder: Si }), ee({ type: "accentUnder", names: ["\\underleftarrow", "\\underrightarrow", "\\underleftrightarrow", "\\undergroup", "\\underlinesegment", "\\utilde"], props: { numArgs: 1 }, handler: function(e, t) {
        var r = e.parser, i = e.funcName, a = t[0];
        return { type: "accentUnder", mode: r.mode, label: i, base: a };
      }, htmlBuilder: function(e, t) {
        var r = Se(e.base, t), i = I0.svgSpan(e, t), a = e.label === "\\utilde" ? 0.12 : 0, u = L.makeVList({ positionType: "top", positionData: r.height, children: [{ type: "elem", elem: i, wrapperClasses: ["svg-align"] }, { type: "kern", size: a }, { type: "elem", elem: r }] }, t);
        return L.makeSpan(["mord", "accentunder"], [u], t);
      }, mathmlBuilder: function(e, t) {
        var r = I0.mathMLnode(e.label), i = new W.MathNode("munder", [Ee(e.base, t), r]);
        return i.setAttribute("accentunder", "true"), i;
      } });
      var rr = function(e) {
        var t = new W.MathNode("mpadded", e ? [e] : []);
        return t.setAttribute("width", "+0.6em"), t.setAttribute("lspace", "0.3em"), t;
      };
      ee({ type: "xArrow", names: ["\\xleftarrow", "\\xrightarrow", "\\xLeftarrow", "\\xRightarrow", "\\xleftrightarrow", "\\xLeftrightarrow", "\\xhookleftarrow", "\\xhookrightarrow", "\\xmapsto", "\\xrightharpoondown", "\\xrightharpoonup", "\\xleftharpoondown", "\\xleftharpoonup", "\\xrightleftharpoons", "\\xleftrightharpoons", "\\xlongequal", "\\xtwoheadrightarrow", "\\xtwoheadleftarrow", "\\xtofrom", "\\xrightleftarrows", "\\xrightequilibrium", "\\xleftequilibrium", "\\\\cdrightarrow", "\\\\cdleftarrow", "\\\\cdlongequal"], props: { numArgs: 1, numOptionalArgs: 1 }, handler: function(e, t, r) {
        var i = e.parser, a = e.funcName;
        return { type: "xArrow", mode: i.mode, label: a, body: t[0], below: r[0] };
      }, htmlBuilder: function(e, t) {
        var r = t.style, i = t.havingStyle(r.sup()), a = L.wrapFragment(Se(e.body, i, t), t), u = e.label.slice(0, 2) === "\\x" ? "x" : "cd";
        a.classes.push(u + "-arrow-pad");
        var p;
        e.below && (i = t.havingStyle(r.sub()), p = L.wrapFragment(Se(e.below, i, t), t), p.classes.push(u + "-arrow-pad"));
        var x = I0.svgSpan(e, t), y = -t.fontMetrics().axisHeight + 0.5 * x.height, z = -t.fontMetrics().axisHeight - 0.5 * x.height - 0.111;
        (a.depth > 0.25 || e.label === "\\xleftequilibrium") && (z -= a.depth);
        var I;
        if (p) {
          var R = -t.fontMetrics().axisHeight + p.height + 0.5 * x.height + 0.111;
          I = L.makeVList({ positionType: "individualShift", children: [{ type: "elem", elem: a, shift: z }, { type: "elem", elem: x, shift: y }, { type: "elem", elem: p, shift: R }] }, t);
        } else
          I = L.makeVList({ positionType: "individualShift", children: [{ type: "elem", elem: a, shift: z }, { type: "elem", elem: x, shift: y }] }, t);
        return I.children[0].children[0].children[1].classes.push("svg-align"), L.makeSpan(["mrel", "x-arrow"], [I], t);
      }, mathmlBuilder: function(e, t) {
        var r = I0.mathMLnode(e.label);
        r.setAttribute("minsize", e.label.charAt(0) === "x" ? "1.75em" : "3.0em");
        var i;
        if (e.body) {
          var a = rr(Ee(e.body, t));
          if (e.below) {
            var u = rr(Ee(e.below, t));
            i = new W.MathNode("munderover", [r, u, a]);
          } else
            i = new W.MathNode("mover", [r, a]);
        } else if (e.below) {
          var p = rr(Ee(e.below, t));
          i = new W.MathNode("munder", [r, p]);
        } else
          i = rr(), i = new W.MathNode("mover", [r, i]);
        return i;
      } });
      var n1 = { ">": "\\\\cdrightarrow", "<": "\\\\cdleftarrow", "=": "\\\\cdlongequal", A: "\\uparrow", V: "\\downarrow", "|": "\\Vert", ".": "no arrow" }, Ai = function() {
        return { type: "styling", body: [], mode: "math", style: "display" };
      }, zi = function(e) {
        return e.type === "textord" && e.text === "@";
      }, i1 = function(e, t) {
        return (e.type === "mathord" || e.type === "atom") && e.text === t;
      };
      function a1(s, e, t) {
        var r = n1[s];
        switch (r) {
          case "\\\\cdrightarrow":
          case "\\\\cdleftarrow":
            return t.callFunction(r, [e[0]], [e[1]]);
          case "\\uparrow":
          case "\\downarrow": {
            var i = t.callFunction("\\\\cdleft", [e[0]], []), a = { type: "atom", text: r, mode: "math", family: "rel" }, u = t.callFunction("\\Big", [a], []), p = t.callFunction("\\\\cdright", [e[1]], []), x = { type: "ordgroup", mode: "math", body: [i, u, p] };
            return t.callFunction("\\\\cdparent", [x], []);
          }
          case "\\\\cdlongequal":
            return t.callFunction("\\\\cdlongequal", [], []);
          case "\\Vert": {
            var y = { type: "textord", text: "\\Vert", mode: "math" };
            return t.callFunction("\\Big", [y], []);
          }
          default:
            return { type: "textord", text: " ", mode: "math" };
        }
      }
      function l1(s) {
        var e = [];
        for (s.gullet.beginGroup(), s.gullet.macros.set("\\cr", "\\\\\\relax"), s.gullet.beginGroup(); ; ) {
          e.push(s.parseExpression(false, "\\\\")), s.gullet.endGroup(), s.gullet.beginGroup();
          var t = s.fetch().text;
          if (t === "&" || t === "\\\\")
            s.consume();
          else if (t === "\\end") {
            e[e.length - 1].length === 0 && e.pop();
            break;
          } else
            throw new o("Expected \\\\ or \\cr or \\end", s.nextToken);
        }
        for (var r = [], i = [r], a = 0; a < e.length; a++) {
          for (var u = e[a], p = Ai(), x = 0; x < u.length; x++)
            if (!zi(u[x]))
              p.body.push(u[x]);
            else {
              r.push(p), x += 1;
              var y = Ur(u[x]).text, z = new Array(2);
              if (z[0] = { type: "ordgroup", mode: "math", body: [] }, z[1] = { type: "ordgroup", mode: "math", body: [] }, !("=|.".indexOf(y) > -1))
                if ("<>AV".indexOf(y) > -1)
                  for (var I = 0; I < 2; I++) {
                    for (var R = true, P = x + 1; P < u.length; P++) {
                      if (i1(u[P], y)) {
                        R = false, x = P;
                        break;
                      }
                      if (zi(u[P]))
                        throw new o("Missing a " + y + " character to complete a CD arrow.", u[P]);
                      z[I].body.push(u[P]);
                    }
                    if (R)
                      throw new o("Missing a " + y + " character to complete a CD arrow.", u[x]);
                  }
                else
                  throw new o('Expected one of "<>AV=|." after @', u[x]);
              var G = a1(y, z, s), Q = { type: "styling", body: [G], mode: "math", style: "display" };
              r.push(Q), p = Ai();
            }
          a % 2 === 0 ? r.push(p) : r.shift(), r = [], i.push(r);
        }
        s.gullet.endGroup(), s.gullet.endGroup();
        var K = new Array(i[0].length).fill({ type: "align", align: "c", pregap: 0.25, postgap: 0.25 });
        return { type: "array", mode: "math", body: i, arraystretch: 1, addJot: true, rowGaps: [null], cols: K, colSeparationType: "CD", hLinesBeforeRow: new Array(i.length + 1).fill([]) };
      }
      ee({ type: "cdlabel", names: ["\\\\cdleft", "\\\\cdright"], props: { numArgs: 1 }, handler: function(e, t) {
        var r = e.parser, i = e.funcName;
        return { type: "cdlabel", mode: r.mode, side: i.slice(4), label: t[0] };
      }, htmlBuilder: function(e, t) {
        var r = t.havingStyle(t.style.sup()), i = L.wrapFragment(Se(e.label, r, t), t);
        return i.classes.push("cd-label-" + e.side), i.style.bottom = X(0.8 - i.depth), i.height = 0, i.depth = 0, i;
      }, mathmlBuilder: function(e, t) {
        var r = new W.MathNode("mrow", [Ee(e.label, t)]);
        return r = new W.MathNode("mpadded", [r]), r.setAttribute("width", "0"), e.side === "left" && r.setAttribute("lspace", "-1width"), r.setAttribute("voffset", "0.7em"), r = new W.MathNode("mstyle", [r]), r.setAttribute("displaystyle", "false"), r.setAttribute("scriptlevel", "1"), r;
      } }), ee({ type: "cdlabelparent", names: ["\\\\cdparent"], props: { numArgs: 1 }, handler: function(e, t) {
        var r = e.parser;
        return { type: "cdlabelparent", mode: r.mode, fragment: t[0] };
      }, htmlBuilder: function(e, t) {
        var r = L.wrapFragment(Se(e.fragment, t), t);
        return r.classes.push("cd-vert-arrow"), r;
      }, mathmlBuilder: function(e, t) {
        return new W.MathNode("mrow", [Ee(e.fragment, t)]);
      } }), ee({ type: "textord", names: ["\\@char"], props: { numArgs: 1, allowedInText: true }, handler: function(e, t) {
        for (var r = e.parser, i = ge(t[0], "ordgroup"), a = i.body, u = "", p = 0; p < a.length; p++) {
          var x = ge(a[p], "textord");
          u += x.text;
        }
        var y = parseInt(u), z;
        if (isNaN(y))
          throw new o("\\@char has non-numeric argument " + u);
        if (y < 0 || y >= 1114111)
          throw new o("\\@char with invalid code point " + u);
        return y <= 65535 ? z = String.fromCharCode(y) : (y -= 65536, z = String.fromCharCode((y >> 10) + 55296, (y & 1023) + 56320)), { type: "textord", mode: r.mode, text: z };
      } });
      var Bi = function(e, t) {
        var r = $e(e.body, t.withColor(e.color), false);
        return L.makeFragment(r);
      }, Ci = function(e, t) {
        var r = o0(e.body, t.withColor(e.color)), i = new W.MathNode("mstyle", r);
        return i.setAttribute("mathcolor", e.color), i;
      };
      ee({ type: "color", names: ["\\textcolor"], props: { numArgs: 2, allowedInText: true, argTypes: ["color", "original"] }, handler: function(e, t) {
        var r = e.parser, i = ge(t[0], "color-token").color, a = t[1];
        return { type: "color", mode: r.mode, color: i, body: Ue(a) };
      }, htmlBuilder: Bi, mathmlBuilder: Ci }), ee({ type: "color", names: ["\\color"], props: { numArgs: 1, allowedInText: true, argTypes: ["color"] }, handler: function(e, t) {
        var r = e.parser, i = e.breakOnTokenText, a = ge(t[0], "color-token").color;
        r.gullet.macros.set("\\current@color", a);
        var u = r.parseExpression(true, i);
        return { type: "color", mode: r.mode, color: a, body: u };
      }, htmlBuilder: Bi, mathmlBuilder: Ci }), ee({ type: "cr", names: ["\\\\"], props: { numArgs: 0, numOptionalArgs: 1, argTypes: ["size"], allowedInText: true }, handler: function(e, t, r) {
        var i = e.parser, a = r[0], u = !i.settings.displayMode || !i.settings.useStrictBehavior("newLineInDisplayMode", "In LaTeX, \\\\ or \\newline does nothing in display mode");
        return { type: "cr", mode: i.mode, newLine: u, size: a && ge(a, "size").value };
      }, htmlBuilder: function(e, t) {
        var r = L.makeSpan(["mspace"], [], t);
        return e.newLine && (r.classes.push("newline"), e.size && (r.style.marginTop = X(Fe(e.size, t)))), r;
      }, mathmlBuilder: function(e, t) {
        var r = new W.MathNode("mspace");
        return e.newLine && (r.setAttribute("linebreak", "newline"), e.size && r.setAttribute("height", X(Fe(e.size, t)))), r;
      } });
      var jr = { "\\global": "\\global", "\\long": "\\\\globallong", "\\\\globallong": "\\\\globallong", "\\def": "\\gdef", "\\gdef": "\\gdef", "\\edef": "\\xdef", "\\xdef": "\\xdef", "\\let": "\\\\globallet", "\\futurelet": "\\\\globalfuture" }, Mi = function(e) {
        var t = e.text;
        if (/^(?:[\\{}$&#^_]|EOF)$/.test(t))
          throw new o("Expected a control sequence", e);
        return t;
      }, u1 = function(e) {
        var t = e.gullet.popToken();
        return t.text === "=" && (t = e.gullet.popToken(), t.text === " " && (t = e.gullet.popToken())), t;
      }, Ti = function(e, t, r, i) {
        var a = e.gullet.macros.get(r.text);
        a == null && (r.noexpand = true, a = { tokens: [r], numArgs: 0, unexpandable: !e.gullet.isExpandable(r.text) }), e.gullet.macros.set(t, a, i);
      };
      ee({ type: "internal", names: ["\\global", "\\long", "\\\\globallong"], props: { numArgs: 0, allowedInText: true }, handler: function(e) {
        var t = e.parser, r = e.funcName;
        t.consumeSpaces();
        var i = t.fetch();
        if (jr[i.text])
          return (r === "\\global" || r === "\\\\globallong") && (i.text = jr[i.text]), ge(t.parseFunction(), "internal");
        throw new o("Invalid token after macro prefix", i);
      } }), ee({ type: "internal", names: ["\\def", "\\gdef", "\\edef", "\\xdef"], props: { numArgs: 0, allowedInText: true, primitive: true }, handler: function(e) {
        var t = e.parser, r = e.funcName, i = t.gullet.popToken(), a = i.text;
        if (/^(?:[\\{}$&#^_]|EOF)$/.test(a))
          throw new o("Expected a control sequence", i);
        for (var u = 0, p, x = [[]]; t.gullet.future().text !== "{"; )
          if (i = t.gullet.popToken(), i.text === "#") {
            if (t.gullet.future().text === "{") {
              p = t.gullet.future(), x[u].push("{");
              break;
            }
            if (i = t.gullet.popToken(), !/^[1-9]$/.test(i.text))
              throw new o('Invalid argument number "' + i.text + '"');
            if (parseInt(i.text) !== u + 1)
              throw new o('Argument number "' + i.text + '" out of order');
            u++, x.push([]);
          } else {
            if (i.text === "EOF")
              throw new o("Expected a macro definition");
            x[u].push(i.text);
          }
        var y = t.gullet.consumeArg(), z = y.tokens;
        return p && z.unshift(p), (r === "\\edef" || r === "\\xdef") && (z = t.gullet.expandTokens(z), z.reverse()), t.gullet.macros.set(a, { tokens: z, numArgs: u, delimiters: x }, r === jr[r]), { type: "internal", mode: t.mode };
      } }), ee({ type: "internal", names: ["\\let", "\\\\globallet"], props: { numArgs: 0, allowedInText: true, primitive: true }, handler: function(e) {
        var t = e.parser, r = e.funcName, i = Mi(t.gullet.popToken());
        t.gullet.consumeSpaces();
        var a = u1(t);
        return Ti(t, i, a, r === "\\\\globallet"), { type: "internal", mode: t.mode };
      } }), ee({ type: "internal", names: ["\\futurelet", "\\\\globalfuture"], props: { numArgs: 0, allowedInText: true, primitive: true }, handler: function(e) {
        var t = e.parser, r = e.funcName, i = Mi(t.gullet.popToken()), a = t.gullet.popToken(), u = t.gullet.popToken();
        return Ti(t, i, u, r === "\\\\globalfuture"), t.gullet.pushToken(u), t.gullet.pushToken(a), { type: "internal", mode: t.mode };
      } });
      var Ct = function(e, t, r) {
        var i = ke.math[e] && ke.math[e].replace, a = bt(i || e, t, r);
        if (!a)
          throw new Error("Unsupported symbol " + e + " and font size " + t + ".");
        return a;
      }, Yr = function(e, t, r, i) {
        var a = r.havingBaseStyle(t), u = L.makeSpan(i.concat(a.sizingClasses(r)), [e], r), p = a.sizeMultiplier / r.sizeMultiplier;
        return u.height *= p, u.depth *= p, u.maxFontSize = a.sizeMultiplier, u;
      }, Ei = function(e, t, r) {
        var i = t.havingBaseStyle(r), a = (1 - t.sizeMultiplier / i.sizeMultiplier) * t.fontMetrics().axisHeight;
        e.classes.push("delimcenter"), e.style.top = X(a), e.height -= a, e.depth += a;
      }, o1 = function(e, t, r, i, a, u) {
        var p = L.makeSymbol(e, "Main-Regular", a, i), x = Yr(p, t, i, u);
        return r && Ei(x, i, t), x;
      }, s1 = function(e, t, r, i) {
        return L.makeSymbol(e, "Size" + t + "-Regular", r, i);
      }, Di = function(e, t, r, i, a, u) {
        var p = s1(e, t, a, i), x = Yr(L.makeSpan(["delimsizing", "size" + t], [p], i), _.TEXT, i, u);
        return r && Ei(x, i, _.TEXT), x;
      }, Xr = function(e, t, r) {
        var i;
        t === "Size1-Regular" ? i = "delim-size1" : i = "delim-size4";
        var a = L.makeSpan(["delimsizinginner", i], [L.makeSpan([], [L.makeSymbol(e, t, r)])]);
        return { type: "elem", elem: a };
      }, $r = function(e, t, r) {
        var i = p0["Size4-Regular"][e.charCodeAt(0)] ? p0["Size4-Regular"][e.charCodeAt(0)][4] : p0["Size1-Regular"][e.charCodeAt(0)][4], a = new E0("inner", C0(e, Math.round(1e3 * t))), u = new y0([a], { width: X(i), height: X(t), style: "width:" + X(i), viewBox: "0 0 " + 1e3 * i + " " + Math.round(1e3 * t), preserveAspectRatio: "xMinYMin" }), p = L.makeSvgSpan([], [u], r);
        return p.height = t, p.style.height = X(t), p.style.width = X(i), { type: "elem", elem: p };
      }, Zr = 8e-3, nr = { type: "kern", size: -1 * Zr }, h1 = ["|", "\\lvert", "\\rvert", "\\vert"], m1 = ["\\|", "\\lVert", "\\rVert", "\\Vert"], Fi = function(e, t, r, i, a, u) {
        var p, x, y, z;
        p = y = z = e, x = null;
        var I = "Size1-Regular";
        e === "\\uparrow" ? y = z = "\u23D0" : e === "\\Uparrow" ? y = z = "\u2016" : e === "\\downarrow" ? p = y = "\u23D0" : e === "\\Downarrow" ? p = y = "\u2016" : e === "\\updownarrow" ? (p = "\\uparrow", y = "\u23D0", z = "\\downarrow") : e === "\\Updownarrow" ? (p = "\\Uparrow", y = "\u2016", z = "\\Downarrow") : H.contains(h1, e) ? y = "\u2223" : H.contains(m1, e) ? y = "\u2225" : e === "[" || e === "\\lbrack" ? (p = "\u23A1", y = "\u23A2", z = "\u23A3", I = "Size4-Regular") : e === "]" || e === "\\rbrack" ? (p = "\u23A4", y = "\u23A5", z = "\u23A6", I = "Size4-Regular") : e === "\\lfloor" || e === "\u230A" ? (y = p = "\u23A2", z = "\u23A3", I = "Size4-Regular") : e === "\\lceil" || e === "\u2308" ? (p = "\u23A1", y = z = "\u23A2", I = "Size4-Regular") : e === "\\rfloor" || e === "\u230B" ? (y = p = "\u23A5", z = "\u23A6", I = "Size4-Regular") : e === "\\rceil" || e === "\u2309" ? (p = "\u23A4", y = z = "\u23A5", I = "Size4-Regular") : e === "(" || e === "\\lparen" ? (p = "\u239B", y = "\u239C", z = "\u239D", I = "Size4-Regular") : e === ")" || e === "\\rparen" ? (p = "\u239E", y = "\u239F", z = "\u23A0", I = "Size4-Regular") : e === "\\{" || e === "\\lbrace" ? (p = "\u23A7", x = "\u23A8", z = "\u23A9", y = "\u23AA", I = "Size4-Regular") : e === "\\}" || e === "\\rbrace" ? (p = "\u23AB", x = "\u23AC", z = "\u23AD", y = "\u23AA", I = "Size4-Regular") : e === "\\lgroup" || e === "\u27EE" ? (p = "\u23A7", z = "\u23A9", y = "\u23AA", I = "Size4-Regular") : e === "\\rgroup" || e === "\u27EF" ? (p = "\u23AB", z = "\u23AD", y = "\u23AA", I = "Size4-Regular") : e === "\\lmoustache" || e === "\u23B0" ? (p = "\u23A7", z = "\u23AD", y = "\u23AA", I = "Size4-Regular") : (e === "\\rmoustache" || e === "\u23B1") && (p = "\u23AB", z = "\u23A9", y = "\u23AA", I = "Size4-Regular");
        var R = Ct(p, I, a), P = R.height + R.depth, G = Ct(y, I, a), Q = G.height + G.depth, K = Ct(z, I, a), ne = K.height + K.depth, ae = 0, oe = 1;
        if (x !== null) {
          var Ae = Ct(x, I, a);
          ae = Ae.height + Ae.depth, oe = 2;
        }
        var Me = P + ne + ae, Ie = Math.max(0, Math.ceil((t - Me) / (oe * Q))), Ce = Me + Ie * oe * Q, Te = i.fontMetrics().axisHeight;
        r && (Te *= i.sizeMultiplier);
        var Re = Ce / 2 - Te, De = [];
        if (De.push(Xr(z, I, a)), De.push(nr), x === null) {
          var s0 = Ce - P - ne + 2 * Zr;
          De.push($r(y, s0, i));
        } else {
          var h0 = (Ce - P - ne - ae) / 2 + 2 * Zr;
          De.push($r(y, h0, i)), De.push(nr), De.push(Xr(x, I, a)), De.push(nr), De.push($r(y, h0, i));
        }
        De.push(nr), De.push(Xr(p, I, a));
        var U0 = i.havingBaseStyle(_.TEXT), A0 = L.makeVList({ positionType: "bottom", positionData: Re, children: De }, U0);
        return Yr(L.makeSpan(["delimsizing", "mult"], [A0], U0), _.TEXT, i, u);
      }, Qr = 80, Kr = 0.08, Jr = function(e, t, r, i, a) {
        var u = g0(e, i, r), p = new E0(e, u), x = new y0([p], { width: "400em", height: X(t), viewBox: "0 0 400000 " + r, preserveAspectRatio: "xMinYMin slice" });
        return L.makeSvgSpan(["hide-tail"], [x], a);
      }, c1 = function(e, t) {
        var r = t.havingBaseSizing(), i = qi("\\surd", e * r.sizeMultiplier, Li, r), a = r.sizeMultiplier, u = Math.max(0, t.minRuleThickness - t.fontMetrics().sqrtRuleThickness), p, x = 0, y = 0, z = 0, I;
        return i.type === "small" ? (z = 1e3 + 1e3 * u + Qr, e < 1 ? a = 1 : e < 1.4 && (a = 0.7), x = (1 + u + Kr) / a, y = (1 + u) / a, p = Jr("sqrtMain", x, z, u, t), p.style.minWidth = "0.853em", I = 0.833 / a) : i.type === "large" ? (z = (1e3 + Qr) * Mt[i.size], y = (Mt[i.size] + u) / a, x = (Mt[i.size] + u + Kr) / a, p = Jr("sqrtSize" + i.size, x, z, u, t), p.style.minWidth = "1.02em", I = 1 / a) : (x = e + u + Kr, y = e + u, z = Math.floor(1e3 * e + u) + Qr, p = Jr("sqrtTall", x, z, u, t), p.style.minWidth = "0.742em", I = 1.056), p.height = y, p.style.height = X(x), { span: p, advanceWidth: I, ruleWidth: (t.fontMetrics().sqrtRuleThickness + u) * a };
      }, Ni = ["(", "\\lparen", ")", "\\rparen", "[", "\\lbrack", "]", "\\rbrack", "\\{", "\\lbrace", "\\}", "\\rbrace", "\\lfloor", "\\rfloor", "\u230A", "\u230B", "\\lceil", "\\rceil", "\u2308", "\u2309", "\\surd"], p1 = ["\\uparrow", "\\downarrow", "\\updownarrow", "\\Uparrow", "\\Downarrow", "\\Updownarrow", "|", "\\|", "\\vert", "\\Vert", "\\lvert", "\\rvert", "\\lVert", "\\rVert", "\\lgroup", "\\rgroup", "\u27EE", "\u27EF", "\\lmoustache", "\\rmoustache", "\u23B0", "\u23B1"], Ii = ["<", ">", "\\langle", "\\rangle", "/", "\\backslash", "\\lt", "\\gt"], Mt = [0, 1.2, 1.8, 2.4, 3], f1 = function(e, t, r, i, a) {
        if (e === "<" || e === "\\lt" || e === "\u27E8" ? e = "\\langle" : (e === ">" || e === "\\gt" || e === "\u27E9") && (e = "\\rangle"), H.contains(Ni, e) || H.contains(Ii, e))
          return Di(e, t, false, r, i, a);
        if (H.contains(p1, e))
          return Fi(e, Mt[t], false, r, i, a);
        throw new o("Illegal delimiter: '" + e + "'");
      }, d1 = [{ type: "small", style: _.SCRIPTSCRIPT }, { type: "small", style: _.SCRIPT }, { type: "small", style: _.TEXT }, { type: "large", size: 1 }, { type: "large", size: 2 }, { type: "large", size: 3 }, { type: "large", size: 4 }], g1 = [{ type: "small", style: _.SCRIPTSCRIPT }, { type: "small", style: _.SCRIPT }, { type: "small", style: _.TEXT }, { type: "stack" }], Li = [{ type: "small", style: _.SCRIPTSCRIPT }, { type: "small", style: _.SCRIPT }, { type: "small", style: _.TEXT }, { type: "large", size: 1 }, { type: "large", size: 2 }, { type: "large", size: 3 }, { type: "large", size: 4 }, { type: "stack" }], v1 = function(e) {
        if (e.type === "small")
          return "Main-Regular";
        if (e.type === "large")
          return "Size" + e.size + "-Regular";
        if (e.type === "stack")
          return "Size4-Regular";
        throw new Error("Add support for delim type '" + e.type + "' here.");
      }, qi = function(e, t, r, i) {
        for (var a = Math.min(2, 3 - i.style.size), u = a; u < r.length && r[u].type !== "stack"; u++) {
          var p = Ct(e, v1(r[u]), "math"), x = p.height + p.depth;
          if (r[u].type === "small") {
            var y = i.havingBaseStyle(r[u].style);
            x *= y.sizeMultiplier;
          }
          if (x > t)
            return r[u];
        }
        return r[r.length - 1];
      }, Oi = function(e, t, r, i, a, u) {
        e === "<" || e === "\\lt" || e === "\u27E8" ? e = "\\langle" : (e === ">" || e === "\\gt" || e === "\u27E9") && (e = "\\rangle");
        var p;
        H.contains(Ii, e) ? p = d1 : H.contains(Ni, e) ? p = Li : p = g1;
        var x = qi(e, t, p, i);
        return x.type === "small" ? o1(e, x.style, r, i, a, u) : x.type === "large" ? Di(e, x.size, r, i, a, u) : Fi(e, t, r, i, a, u);
      }, x1 = function(e, t, r, i, a, u) {
        var p = i.fontMetrics().axisHeight * i.sizeMultiplier, x = 901, y = 5 / i.fontMetrics().ptPerEm, z = Math.max(t - p, r + p), I = Math.max(z / 500 * x, 2 * z - y);
        return Oi(e, I, true, i, a, u);
      }, L0 = { sqrtImage: c1, sizedDelim: f1, sizeToMaxHeight: Mt, customSizedDelim: Oi, leftRightDelim: x1 }, Ri = { "\\bigl": { mclass: "mopen", size: 1 }, "\\Bigl": { mclass: "mopen", size: 2 }, "\\biggl": { mclass: "mopen", size: 3 }, "\\Biggl": { mclass: "mopen", size: 4 }, "\\bigr": { mclass: "mclose", size: 1 }, "\\Bigr": { mclass: "mclose", size: 2 }, "\\biggr": { mclass: "mclose", size: 3 }, "\\Biggr": { mclass: "mclose", size: 4 }, "\\bigm": { mclass: "mrel", size: 1 }, "\\Bigm": { mclass: "mrel", size: 2 }, "\\biggm": { mclass: "mrel", size: 3 }, "\\Biggm": { mclass: "mrel", size: 4 }, "\\big": { mclass: "mord", size: 1 }, "\\Big": { mclass: "mord", size: 2 }, "\\bigg": { mclass: "mord", size: 3 }, "\\Bigg": { mclass: "mord", size: 4 } }, b1 = ["(", "\\lparen", ")", "\\rparen", "[", "\\lbrack", "]", "\\rbrack", "\\{", "\\lbrace", "\\}", "\\rbrace", "\\lfloor", "\\rfloor", "\u230A", "\u230B", "\\lceil", "\\rceil", "\u2308", "\u2309", "<", ">", "\\langle", "\u27E8", "\\rangle", "\u27E9", "\\lt", "\\gt", "\\lvert", "\\rvert", "\\lVert", "\\rVert", "\\lgroup", "\\rgroup", "\u27EE", "\u27EF", "\\lmoustache", "\\rmoustache", "\u23B0", "\u23B1", "/", "\\backslash", "|", "\\vert", "\\|", "\\Vert", "\\uparrow", "\\Uparrow", "\\downarrow", "\\Downarrow", "\\updownarrow", "\\Updownarrow", "."];
      function ir(s, e) {
        var t = tr(s);
        if (t && H.contains(b1, t.text))
          return t;
        throw t ? new o("Invalid delimiter '" + t.text + "' after '" + e.funcName + "'", s) : new o("Invalid delimiter type '" + s.type + "'", s);
      }
      ee({ type: "delimsizing", names: ["\\bigl", "\\Bigl", "\\biggl", "\\Biggl", "\\bigr", "\\Bigr", "\\biggr", "\\Biggr", "\\bigm", "\\Bigm", "\\biggm", "\\Biggm", "\\big", "\\Big", "\\bigg", "\\Bigg"], props: { numArgs: 1, argTypes: ["primitive"] }, handler: function(e, t) {
        var r = ir(t[0], e);
        return { type: "delimsizing", mode: e.parser.mode, size: Ri[e.funcName].size, mclass: Ri[e.funcName].mclass, delim: r.text };
      }, htmlBuilder: function(e, t) {
        return e.delim === "." ? L.makeSpan([e.mclass]) : L0.sizedDelim(e.delim, e.size, t, e.mode, [e.mclass]);
      }, mathmlBuilder: function(e) {
        var t = [];
        e.delim !== "." && t.push(d0(e.delim, e.mode));
        var r = new W.MathNode("mo", t);
        e.mclass === "mopen" || e.mclass === "mclose" ? r.setAttribute("fence", "true") : r.setAttribute("fence", "false"), r.setAttribute("stretchy", "true");
        var i = X(L0.sizeToMaxHeight[e.size]);
        return r.setAttribute("minsize", i), r.setAttribute("maxsize", i), r;
      } });
      function Hi(s) {
        if (!s.body)
          throw new Error("Bug: The leftright ParseNode wasn't fully parsed.");
      }
      ee({ type: "leftright-right", names: ["\\right"], props: { numArgs: 1, primitive: true }, handler: function(e, t) {
        var r = e.parser.gullet.macros.get("\\current@color");
        if (r && typeof r != "string")
          throw new o("\\current@color set to non-string in \\right");
        return { type: "leftright-right", mode: e.parser.mode, delim: ir(t[0], e).text, color: r };
      } }), ee({ type: "leftright", names: ["\\left"], props: { numArgs: 1, primitive: true }, handler: function(e, t) {
        var r = ir(t[0], e), i = e.parser;
        ++i.leftrightDepth;
        var a = i.parseExpression(false);
        --i.leftrightDepth, i.expect("\\right", false);
        var u = ge(i.parseFunction(), "leftright-right");
        return { type: "leftright", mode: i.mode, body: a, left: r.text, right: u.delim, rightColor: u.color };
      }, htmlBuilder: function(e, t) {
        Hi(e);
        for (var r = $e(e.body, t, true, ["mopen", "mclose"]), i = 0, a = 0, u = false, p = 0; p < r.length; p++)
          r[p].isMiddle ? u = true : (i = Math.max(r[p].height, i), a = Math.max(r[p].depth, a));
        i *= t.sizeMultiplier, a *= t.sizeMultiplier;
        var x;
        if (e.left === "." ? x = zt(t, ["mopen"]) : x = L0.leftRightDelim(e.left, i, a, t, e.mode, ["mopen"]), r.unshift(x), u)
          for (var y = 1; y < r.length; y++) {
            var z = r[y], I = z.isMiddle;
            I && (r[y] = L0.leftRightDelim(I.delim, i, a, I.options, e.mode, []));
          }
        var R;
        if (e.right === ".")
          R = zt(t, ["mclose"]);
        else {
          var P = e.rightColor ? t.withColor(e.rightColor) : t;
          R = L0.leftRightDelim(e.right, i, a, P, e.mode, ["mclose"]);
        }
        return r.push(R), L.makeSpan(["minner"], r, t);
      }, mathmlBuilder: function(e, t) {
        Hi(e);
        var r = o0(e.body, t);
        if (e.left !== ".") {
          var i = new W.MathNode("mo", [d0(e.left, e.mode)]);
          i.setAttribute("fence", "true"), r.unshift(i);
        }
        if (e.right !== ".") {
          var a = new W.MathNode("mo", [d0(e.right, e.mode)]);
          a.setAttribute("fence", "true"), e.rightColor && a.setAttribute("mathcolor", e.rightColor), r.push(a);
        }
        return Gr(r);
      } }), ee({ type: "middle", names: ["\\middle"], props: { numArgs: 1, primitive: true }, handler: function(e, t) {
        var r = ir(t[0], e);
        if (!e.parser.leftrightDepth)
          throw new o("\\middle without preceding \\left", r);
        return { type: "middle", mode: e.parser.mode, delim: r.text };
      }, htmlBuilder: function(e, t) {
        var r;
        if (e.delim === ".")
          r = zt(t, []);
        else {
          r = L0.sizedDelim(e.delim, 1, t, e.mode, []);
          var i = { delim: e.delim, options: t };
          r.isMiddle = i;
        }
        return r;
      }, mathmlBuilder: function(e, t) {
        var r = e.delim === "\\vert" || e.delim === "|" ? d0("|", "text") : d0(e.delim, e.mode), i = new W.MathNode("mo", [r]);
        return i.setAttribute("fence", "true"), i.setAttribute("lspace", "0.05em"), i.setAttribute("rspace", "0.05em"), i;
      } });
      var _r = function(e, t) {
        var r = L.wrapFragment(Se(e.body, t), t), i = e.label.substr(1), a = t.sizeMultiplier, u, p = 0, x = H.isCharacterBox(e.body);
        if (i === "sout")
          u = L.makeSpan(["stretchy", "sout"]), u.height = t.fontMetrics().defaultRuleThickness / a, p = -0.5 * t.fontMetrics().xHeight;
        else if (i === "phase") {
          var y = Fe({ number: 0.6, unit: "pt" }, t), z = Fe({ number: 0.35, unit: "ex" }, t), I = t.havingBaseSizing();
          a = a / I.sizeMultiplier;
          var R = r.height + r.depth + y + z;
          r.style.paddingLeft = X(R / 2 + y);
          var P = Math.floor(1e3 * R * a), G = Ye(P), Q = new y0([new E0("phase", G)], { width: "400em", height: X(P / 1e3), viewBox: "0 0 400000 " + P, preserveAspectRatio: "xMinYMin slice" });
          u = L.makeSvgSpan(["hide-tail"], [Q], t), u.style.height = X(R), p = r.depth + y + z;
        } else {
          /cancel/.test(i) ? x || r.classes.push("cancel-pad") : i === "angl" ? r.classes.push("anglpad") : r.classes.push("boxpad");
          var K = 0, ne = 0, ae = 0;
          /box/.test(i) ? (ae = Math.max(t.fontMetrics().fboxrule, t.minRuleThickness), K = t.fontMetrics().fboxsep + (i === "colorbox" ? 0 : ae), ne = K) : i === "angl" ? (ae = Math.max(t.fontMetrics().defaultRuleThickness, t.minRuleThickness), K = 4 * ae, ne = Math.max(0, 0.25 - r.depth)) : (K = x ? 0.2 : 0, ne = K), u = I0.encloseSpan(r, i, K, ne, t), /fbox|boxed|fcolorbox/.test(i) ? (u.style.borderStyle = "solid", u.style.borderWidth = X(ae)) : i === "angl" && ae !== 0.049 && (u.style.borderTopWidth = X(ae), u.style.borderRightWidth = X(ae)), p = r.depth + ne, e.backgroundColor && (u.style.backgroundColor = e.backgroundColor, e.borderColor && (u.style.borderColor = e.borderColor));
        }
        var oe;
        if (e.backgroundColor)
          oe = L.makeVList({ positionType: "individualShift", children: [{ type: "elem", elem: u, shift: p }, { type: "elem", elem: r, shift: 0 }] }, t);
        else {
          var Ae = /cancel|phase/.test(i) ? ["svg-align"] : [];
          oe = L.makeVList({ positionType: "individualShift", children: [{ type: "elem", elem: r, shift: 0 }, { type: "elem", elem: u, shift: p, wrapperClasses: Ae }] }, t);
        }
        return /cancel/.test(i) && (oe.height = r.height, oe.depth = r.depth), /cancel/.test(i) && !x ? L.makeSpan(["mord", "cancel-lap"], [oe], t) : L.makeSpan(["mord"], [oe], t);
      }, en = function(e, t) {
        var r = 0, i = new W.MathNode(e.label.indexOf("colorbox") > -1 ? "mpadded" : "menclose", [Ee(e.body, t)]);
        switch (e.label) {
          case "\\cancel":
            i.setAttribute("notation", "updiagonalstrike");
            break;
          case "\\bcancel":
            i.setAttribute("notation", "downdiagonalstrike");
            break;
          case "\\phase":
            i.setAttribute("notation", "phasorangle");
            break;
          case "\\sout":
            i.setAttribute("notation", "horizontalstrike");
            break;
          case "\\fbox":
            i.setAttribute("notation", "box");
            break;
          case "\\angl":
            i.setAttribute("notation", "actuarial");
            break;
          case "\\fcolorbox":
          case "\\colorbox":
            if (r = t.fontMetrics().fboxsep * t.fontMetrics().ptPerEm, i.setAttribute("width", "+" + 2 * r + "pt"), i.setAttribute("height", "+" + 2 * r + "pt"), i.setAttribute("lspace", r + "pt"), i.setAttribute("voffset", r + "pt"), e.label === "\\fcolorbox") {
              var a = Math.max(t.fontMetrics().fboxrule, t.minRuleThickness);
              i.setAttribute("style", "border: " + a + "em solid " + String(e.borderColor));
            }
            break;
          case "\\xcancel":
            i.setAttribute("notation", "updiagonalstrike downdiagonalstrike");
            break;
        }
        return e.backgroundColor && i.setAttribute("mathbackground", e.backgroundColor), i;
      };
      ee({ type: "enclose", names: ["\\colorbox"], props: { numArgs: 2, allowedInText: true, argTypes: ["color", "text"] }, handler: function(e, t, r) {
        var i = e.parser, a = e.funcName, u = ge(t[0], "color-token").color, p = t[1];
        return { type: "enclose", mode: i.mode, label: a, backgroundColor: u, body: p };
      }, htmlBuilder: _r, mathmlBuilder: en }), ee({ type: "enclose", names: ["\\fcolorbox"], props: { numArgs: 3, allowedInText: true, argTypes: ["color", "color", "text"] }, handler: function(e, t, r) {
        var i = e.parser, a = e.funcName, u = ge(t[0], "color-token").color, p = ge(t[1], "color-token").color, x = t[2];
        return { type: "enclose", mode: i.mode, label: a, backgroundColor: p, borderColor: u, body: x };
      }, htmlBuilder: _r, mathmlBuilder: en }), ee({ type: "enclose", names: ["\\fbox"], props: { numArgs: 1, argTypes: ["hbox"], allowedInText: true }, handler: function(e, t) {
        var r = e.parser;
        return { type: "enclose", mode: r.mode, label: "\\fbox", body: t[0] };
      } }), ee({ type: "enclose", names: ["\\cancel", "\\bcancel", "\\xcancel", "\\sout", "\\phase"], props: { numArgs: 1 }, handler: function(e, t) {
        var r = e.parser, i = e.funcName, a = t[0];
        return { type: "enclose", mode: r.mode, label: i, body: a };
      }, htmlBuilder: _r, mathmlBuilder: en }), ee({ type: "enclose", names: ["\\angl"], props: { numArgs: 1, argTypes: ["hbox"], allowedInText: false }, handler: function(e, t) {
        var r = e.parser;
        return { type: "enclose", mode: r.mode, label: "\\angl", body: t[0] };
      } });
      var Pi = {};
      function w0(s) {
        for (var e = s.type, t = s.names, r = s.props, i = s.handler, a = s.htmlBuilder, u = s.mathmlBuilder, p = { type: e, numArgs: r.numArgs || 0, allowedInText: false, numOptionalArgs: 0, handler: i }, x = 0; x < t.length; ++x)
          Pi[t[x]] = p;
        a && (Kt[e] = a), u && (Jt[e] = u);
      }
      function Gi(s) {
        var e = [];
        s.consumeSpaces();
        for (var t = s.fetch().text; t === "\\hline" || t === "\\hdashline"; )
          s.consume(), e.push(t === "\\hdashline"), s.consumeSpaces(), t = s.fetch().text;
        return e;
      }
      var ar = function(e) {
        var t = e.parser.settings;
        if (!t.displayMode)
          throw new o("{" + e.envName + "} can be used only in display mode.");
      };
      function G0(s, e, t) {
        var r = e.hskipBeforeAndAfter, i = e.addJot, a = e.cols, u = e.arraystretch, p = e.colSeparationType, x = e.addEqnNum, y = e.singleRow, z = e.emptySingleRow, I = e.maxNumCols, R = e.leqno;
        if (s.gullet.beginGroup(), y || s.gullet.macros.set("\\cr", "\\\\\\relax"), !u) {
          var P = s.gullet.expandMacroAsText("\\arraystretch");
          if (P == null)
            u = 1;
          else if (u = parseFloat(P), !u || u < 0)
            throw new o("Invalid \\arraystretch: " + P);
        }
        s.gullet.beginGroup();
        var G = [], Q = [G], K = [], ne = [];
        for (ne.push(Gi(s)); ; ) {
          var ae = s.parseExpression(false, y ? "\\end" : "\\\\");
          s.gullet.endGroup(), s.gullet.beginGroup(), ae = { type: "ordgroup", mode: s.mode, body: ae }, t && (ae = { type: "styling", mode: s.mode, style: t, body: [ae] }), G.push(ae);
          var oe = s.fetch().text;
          if (oe === "&") {
            if (I && G.length === I) {
              if (y || p)
                throw new o("Too many tab characters: &", s.nextToken);
              s.settings.reportNonstrict("textEnv", "Too few columns specified in the {array} column argument.");
            }
            s.consume();
          } else if (oe === "\\end") {
            G.length === 1 && ae.type === "styling" && ae.body[0].body.length === 0 && (Q.length > 1 || !z) && Q.pop(), ne.length < Q.length + 1 && ne.push([]);
            break;
          } else if (oe === "\\\\") {
            s.consume();
            var Ae = void 0;
            s.gullet.future().text !== " " && (Ae = s.parseSizeGroup(true)), K.push(Ae ? Ae.value : null), ne.push(Gi(s)), G = [], Q.push(G);
          } else
            throw new o("Expected & or \\\\ or \\cr or \\end", s.nextToken);
        }
        return s.gullet.endGroup(), s.gullet.endGroup(), { type: "array", mode: s.mode, addJot: i, arraystretch: u, body: Q, cols: a, rowGaps: K, hskipBeforeAndAfter: r, hLinesBeforeRow: ne, colSeparationType: p, addEqnNum: x, leqno: R };
      }
      function tn(s) {
        return s.substr(0, 1) === "d" ? "display" : "text";
      }
      var k0 = function(e, t) {
        var r, i, a = e.body.length, u = e.hLinesBeforeRow, p = 0, x = new Array(a), y = [], z = Math.max(t.fontMetrics().arrayRuleWidth, t.minRuleThickness), I = 1 / t.fontMetrics().ptPerEm, R = 5 * I;
        if (e.colSeparationType && e.colSeparationType === "small") {
          var P = t.havingStyle(_.SCRIPT).sizeMultiplier;
          R = 0.2778 * (P / t.sizeMultiplier);
        }
        var G = e.colSeparationType === "CD" ? Fe({ number: 3, unit: "ex" }, t) : 12 * I, Q = 3 * I, K = e.arraystretch * G, ne = 0.7 * K, ae = 0.3 * K, oe = 0;
        function Ae(Ma) {
          for (var or = 0; or < Ma.length; ++or)
            or > 0 && (oe += 0.25), y.push({ pos: oe, isDashed: Ma[or] });
        }
        for (Ae(u[0]), r = 0; r < e.body.length; ++r) {
          var Me = e.body[r], Ie = ne, Ce = ae;
          p < Me.length && (p = Me.length);
          var Te = new Array(Me.length);
          for (i = 0; i < Me.length; ++i) {
            var Re = Se(Me[i], t);
            Ce < Re.depth && (Ce = Re.depth), Ie < Re.height && (Ie = Re.height), Te[i] = Re;
          }
          var De = e.rowGaps[r], s0 = 0;
          De && (s0 = Fe(De, t), s0 > 0 && (s0 += ae, Ce < s0 && (Ce = s0), s0 = 0)), e.addJot && (Ce += Q), Te.height = Ie, Te.depth = Ce, oe += Ie, Te.pos = oe, oe += Ce + s0, x[r] = Te, Ae(u[r + 1]);
        }
        var h0 = oe / 2 + t.fontMetrics().axisHeight, U0 = e.cols || [], A0 = [], m0, ct, Sa = [];
        if (e.addEqnNum)
          for (r = 0; r < a; ++r) {
            var dn = x[r], X1 = dn.pos - h0, gn = L.makeSpan(["eqn-num"], [], t);
            gn.depth = dn.depth, gn.height = dn.height, Sa.push({ type: "elem", elem: gn, shift: X1 });
          }
        for (i = 0, ct = 0; i < p || ct < U0.length; ++i, ++ct) {
          for (var q0 = U0[ct] || {}, Aa = true; q0.type === "separator"; ) {
            if (Aa || (m0 = L.makeSpan(["arraycolsep"], []), m0.style.width = X(t.fontMetrics().doubleRuleSep), A0.push(m0)), q0.separator === "|" || q0.separator === ":") {
              var $1 = q0.separator === "|" ? "solid" : "dashed", pt = L.makeSpan(["vertical-separator"], [], t);
              pt.style.height = X(oe), pt.style.borderRightWidth = X(z), pt.style.borderRightStyle = $1, pt.style.margin = "0 " + X(-z / 2);
              var za = oe - h0;
              za && (pt.style.verticalAlign = X(-za)), A0.push(pt);
            } else
              throw new o("Invalid separator type: " + q0.separator);
            ct++, q0 = U0[ct] || {}, Aa = false;
          }
          if (!(i >= p)) {
            var ft = void 0;
            (i > 0 || e.hskipBeforeAndAfter) && (ft = H.deflt(q0.pregap, R), ft !== 0 && (m0 = L.makeSpan(["arraycolsep"], []), m0.style.width = X(ft), A0.push(m0)));
            var dt = [];
            for (r = 0; r < a; ++r) {
              var lr = x[r], ur = lr[i];
              if (ur) {
                var Z1 = lr.pos - h0;
                ur.depth = lr.depth, ur.height = lr.height, dt.push({ type: "elem", elem: ur, shift: Z1 });
              }
            }
            dt = L.makeVList({ positionType: "individualShift", children: dt }, t), dt = L.makeSpan(["col-align-" + (q0.align || "c")], [dt]), A0.push(dt), (i < p - 1 || e.hskipBeforeAndAfter) && (ft = H.deflt(q0.postgap, R), ft !== 0 && (m0 = L.makeSpan(["arraycolsep"], []), m0.style.width = X(ft), A0.push(m0)));
          }
        }
        if (x = L.makeSpan(["mtable"], A0), y.length > 0) {
          for (var Q1 = L.makeLineSpan("hline", t, z), K1 = L.makeLineSpan("hdashline", t, z), vn = [{ type: "elem", elem: x, shift: 0 }]; y.length > 0; ) {
            var Ba = y.pop(), Ca = Ba.pos - h0;
            Ba.isDashed ? vn.push({ type: "elem", elem: K1, shift: Ca }) : vn.push({ type: "elem", elem: Q1, shift: Ca });
          }
          x = L.makeVList({ positionType: "individualShift", children: vn }, t);
        }
        if (e.addEqnNum) {
          var xn = L.makeVList({ positionType: "individualShift", children: Sa }, t);
          return xn = L.makeSpan(["tag"], [xn], t), L.makeFragment([x, xn]);
        } else
          return L.makeSpan(["mord"], [x], t);
      }, y1 = { c: "center ", l: "left ", r: "right " }, S0 = function(e, t) {
        for (var r = [], i = new W.MathNode("mtd", [], ["mtr-glue"]), a = new W.MathNode("mtd", [], ["mml-eqn-num"]), u = 0; u < e.body.length; u++) {
          for (var p = e.body[u], x = [], y = 0; y < p.length; y++)
            x.push(new W.MathNode("mtd", [Ee(p[y], t)]));
          e.addEqnNum && (x.unshift(i), x.push(i), e.leqno ? x.unshift(a) : x.push(a)), r.push(new W.MathNode("mtr", x));
        }
        var z = new W.MathNode("mtable", r), I = e.arraystretch === 0.5 ? 0.1 : 0.16 + e.arraystretch - 1 + (e.addJot ? 0.09 : 0);
        z.setAttribute("rowspacing", X(I));
        var R = "", P = "";
        if (e.cols && e.cols.length > 0) {
          var G = e.cols, Q = "", K = false, ne = 0, ae = G.length;
          G[0].type === "separator" && (R += "top ", ne = 1), G[G.length - 1].type === "separator" && (R += "bottom ", ae -= 1);
          for (var oe = ne; oe < ae; oe++)
            G[oe].type === "align" ? (P += y1[G[oe].align], K && (Q += "none "), K = true) : G[oe].type === "separator" && K && (Q += G[oe].separator === "|" ? "solid " : "dashed ", K = false);
          z.setAttribute("columnalign", P.trim()), /[sd]/.test(Q) && z.setAttribute("columnlines", Q.trim());
        }
        if (e.colSeparationType === "align") {
          for (var Ae = e.cols || [], Me = "", Ie = 1; Ie < Ae.length; Ie++)
            Me += Ie % 2 ? "0em " : "1em ";
          z.setAttribute("columnspacing", Me.trim());
        } else
          e.colSeparationType === "alignat" || e.colSeparationType === "gather" ? z.setAttribute("columnspacing", "0em") : e.colSeparationType === "small" ? z.setAttribute("columnspacing", "0.2778em") : e.colSeparationType === "CD" ? z.setAttribute("columnspacing", "0.5em") : z.setAttribute("columnspacing", "1em");
        var Ce = "", Te = e.hLinesBeforeRow;
        R += Te[0].length > 0 ? "left " : "", R += Te[Te.length - 1].length > 0 ? "right " : "";
        for (var Re = 1; Re < Te.length - 1; Re++)
          Ce += Te[Re].length === 0 ? "none " : Te[Re][0] ? "dashed " : "solid ";
        return /[sd]/.test(Ce) && z.setAttribute("rowlines", Ce.trim()), R !== "" && (z = new W.MathNode("menclose", [z]), z.setAttribute("notation", R.trim())), e.arraystretch && e.arraystretch < 1 && (z = new W.MathNode("mstyle", [z]), z.setAttribute("scriptlevel", "1")), z;
      }, Vi = function(e, t) {
        e.envName.indexOf("ed") === -1 && ar(e);
        var r = [], i = e.envName.indexOf("at") > -1 ? "alignat" : "align", a = G0(e.parser, { cols: r, addJot: true, addEqnNum: e.envName === "align" || e.envName === "alignat", emptySingleRow: true, colSeparationType: i, maxNumCols: e.envName === "split" ? 2 : void 0, leqno: e.parser.settings.leqno }, "display"), u, p = 0, x = { type: "ordgroup", mode: e.mode, body: [] };
        if (t[0] && t[0].type === "ordgroup") {
          for (var y = "", z = 0; z < t[0].body.length; z++) {
            var I = ge(t[0].body[z], "textord");
            y += I.text;
          }
          u = Number(y), p = u * 2;
        }
        var R = !p;
        a.body.forEach(function(K) {
          for (var ne = 1; ne < K.length; ne += 2) {
            var ae = ge(K[ne], "styling"), oe = ge(ae.body[0], "ordgroup");
            oe.body.unshift(x);
          }
          if (R)
            p < K.length && (p = K.length);
          else {
            var Ae = K.length / 2;
            if (u < Ae)
              throw new o("Too many math in a row: " + ("expected " + u + ", but got " + Ae), K[0]);
          }
        });
        for (var P = 0; P < p; ++P) {
          var G = "r", Q = 0;
          P % 2 === 1 ? G = "l" : P > 0 && R && (Q = 1), r[P] = { type: "align", align: G, pregap: Q, postgap: 0 };
        }
        return a.colSeparationType = R ? "align" : "alignat", a;
      };
      w0({ type: "array", names: ["array", "darray"], props: { numArgs: 1 }, handler: function(e, t) {
        var r = tr(t[0]), i = r ? [t[0]] : ge(t[0], "ordgroup").body, a = i.map(function(p) {
          var x = Ur(p), y = x.text;
          if ("lcr".indexOf(y) !== -1)
            return { type: "align", align: y };
          if (y === "|")
            return { type: "separator", separator: "|" };
          if (y === ":")
            return { type: "separator", separator: ":" };
          throw new o("Unknown column alignment: " + y, p);
        }), u = { cols: a, hskipBeforeAndAfter: true, maxNumCols: a.length };
        return G0(e.parser, u, tn(e.envName));
      }, htmlBuilder: k0, mathmlBuilder: S0 }), w0({ type: "array", names: ["matrix", "pmatrix", "bmatrix", "Bmatrix", "vmatrix", "Vmatrix", "matrix*", "pmatrix*", "bmatrix*", "Bmatrix*", "vmatrix*", "Vmatrix*"], props: { numArgs: 0 }, handler: function(e) {
        var t = { matrix: null, pmatrix: ["(", ")"], bmatrix: ["[", "]"], Bmatrix: ["\\{", "\\}"], vmatrix: ["|", "|"], Vmatrix: ["\\Vert", "\\Vert"] }[e.envName.replace("*", "")], r = "c", i = { hskipBeforeAndAfter: false, cols: [{ type: "align", align: r }] };
        if (e.envName.charAt(e.envName.length - 1) === "*") {
          var a = e.parser;
          if (a.consumeSpaces(), a.fetch().text === "[") {
            if (a.consume(), a.consumeSpaces(), r = a.fetch().text, "lcr".indexOf(r) === -1)
              throw new o("Expected l or c or r", a.nextToken);
            a.consume(), a.consumeSpaces(), a.expect("]"), a.consume(), i.cols = [{ type: "align", align: r }];
          }
        }
        var u = G0(e.parser, i, tn(e.envName)), p = Math.max.apply(Math, [0].concat(u.body.map(function(x) {
          return x.length;
        })));
        return u.cols = new Array(p).fill({ type: "align", align: r }), t ? { type: "leftright", mode: e.mode, body: [u], left: t[0], right: t[1], rightColor: void 0 } : u;
      }, htmlBuilder: k0, mathmlBuilder: S0 }), w0({ type: "array", names: ["smallmatrix"], props: { numArgs: 0 }, handler: function(e) {
        var t = { arraystretch: 0.5 }, r = G0(e.parser, t, "script");
        return r.colSeparationType = "small", r;
      }, htmlBuilder: k0, mathmlBuilder: S0 }), w0({ type: "array", names: ["subarray"], props: { numArgs: 1 }, handler: function(e, t) {
        var r = tr(t[0]), i = r ? [t[0]] : ge(t[0], "ordgroup").body, a = i.map(function(p) {
          var x = Ur(p), y = x.text;
          if ("lc".indexOf(y) !== -1)
            return { type: "align", align: y };
          throw new o("Unknown column alignment: " + y, p);
        });
        if (a.length > 1)
          throw new o("{subarray} can contain only one column");
        var u = { cols: a, hskipBeforeAndAfter: false, arraystretch: 0.5 };
        if (u = G0(e.parser, u, "script"), u.body.length > 0 && u.body[0].length > 1)
          throw new o("{subarray} can contain only one column");
        return u;
      }, htmlBuilder: k0, mathmlBuilder: S0 }), w0({ type: "array", names: ["cases", "dcases", "rcases", "drcases"], props: { numArgs: 0 }, handler: function(e) {
        var t = { arraystretch: 1.2, cols: [{ type: "align", align: "l", pregap: 0, postgap: 1 }, { type: "align", align: "l", pregap: 0, postgap: 0 }] }, r = G0(e.parser, t, tn(e.envName));
        return { type: "leftright", mode: e.mode, body: [r], left: e.envName.indexOf("r") > -1 ? "." : "\\{", right: e.envName.indexOf("r") > -1 ? "\\}" : ".", rightColor: void 0 };
      }, htmlBuilder: k0, mathmlBuilder: S0 }), w0({ type: "array", names: ["align", "align*", "aligned", "split"], props: { numArgs: 0 }, handler: Vi, htmlBuilder: k0, mathmlBuilder: S0 }), w0({ type: "array", names: ["gathered", "gather", "gather*"], props: { numArgs: 0 }, handler: function(e) {
        H.contains(["gather", "gather*"], e.envName) && ar(e);
        var t = { cols: [{ type: "align", align: "c" }], addJot: true, colSeparationType: "gather", addEqnNum: e.envName === "gather", emptySingleRow: true, leqno: e.parser.settings.leqno };
        return G0(e.parser, t, "display");
      }, htmlBuilder: k0, mathmlBuilder: S0 }), w0({ type: "array", names: ["alignat", "alignat*", "alignedat"], props: { numArgs: 1 }, handler: Vi, htmlBuilder: k0, mathmlBuilder: S0 }), w0({ type: "array", names: ["equation", "equation*"], props: { numArgs: 0 }, handler: function(e) {
        ar(e);
        var t = { addEqnNum: e.envName === "equation", emptySingleRow: true, singleRow: true, maxNumCols: 1, leqno: e.parser.settings.leqno };
        return G0(e.parser, t, "display");
      }, htmlBuilder: k0, mathmlBuilder: S0 }), w0({ type: "array", names: ["CD"], props: { numArgs: 0 }, handler: function(e) {
        return ar(e), l1(e.parser);
      }, htmlBuilder: k0, mathmlBuilder: S0 }), ee({ type: "text", names: ["\\hline", "\\hdashline"], props: { numArgs: 0, allowedInText: true, allowedInMath: true }, handler: function(e, t) {
        throw new o(e.funcName + " valid only within array environment");
      } });
      var w1 = Pi, Ui = w1;
      ee({ type: "environment", names: ["\\begin", "\\end"], props: { numArgs: 1, argTypes: ["text"] }, handler: function(e, t) {
        var r = e.parser, i = e.funcName, a = t[0];
        if (a.type !== "ordgroup")
          throw new o("Invalid environment name", a);
        for (var u = "", p = 0; p < a.body.length; ++p)
          u += ge(a.body[p], "textord").text;
        if (i === "\\begin") {
          if (!Ui.hasOwnProperty(u))
            throw new o("No such environment: " + u, a);
          var x = Ui[u], y = r.parseArguments("\\begin{" + u + "}", x), z = y.args, I = y.optArgs, R = { mode: r.mode, envName: u, parser: r }, P = x.handler(R, z, I);
          r.expect("\\end", false);
          var G = r.nextToken, Q = ge(r.parseFunction(), "environment");
          if (Q.name !== u)
            throw new o("Mismatch: \\begin{" + u + "} matched by \\end{" + Q.name + "}", G);
          return P;
        }
        return { type: "environment", mode: r.mode, name: u, nameGroup: a };
      } });
      var k1 = L.makeSpan;
      function Wi(s, e) {
        var t = $e(s.body, e, true);
        return k1([s.mclass], t, e);
      }
      function ji(s, e) {
        var t, r = o0(s.body, e);
        return s.mclass === "minner" ? W.newDocumentFragment(r) : (s.mclass === "mord" ? s.isCharacterBox ? (t = r[0], t.type = "mi") : t = new W.MathNode("mi", r) : (s.isCharacterBox ? (t = r[0], t.type = "mo") : t = new W.MathNode("mo", r), s.mclass === "mbin" ? (t.attributes.lspace = "0.22em", t.attributes.rspace = "0.22em") : s.mclass === "mpunct" ? (t.attributes.lspace = "0em", t.attributes.rspace = "0.17em") : (s.mclass === "mopen" || s.mclass === "mclose") && (t.attributes.lspace = "0em", t.attributes.rspace = "0em")), t);
      }
      ee({ type: "mclass", names: ["\\mathord", "\\mathbin", "\\mathrel", "\\mathopen", "\\mathclose", "\\mathpunct", "\\mathinner"], props: { numArgs: 1, primitive: true }, handler: function(e, t) {
        var r = e.parser, i = e.funcName, a = t[0];
        return { type: "mclass", mode: r.mode, mclass: "m" + i.substr(5), body: Ue(a), isCharacterBox: H.isCharacterBox(a) };
      }, htmlBuilder: Wi, mathmlBuilder: ji });
      var rn = function(e) {
        var t = e.type === "ordgroup" && e.body.length ? e.body[0] : e;
        return t.type === "atom" && (t.family === "bin" || t.family === "rel") ? "m" + t.family : "mord";
      };
      ee({ type: "mclass", names: ["\\@binrel"], props: { numArgs: 2 }, handler: function(e, t) {
        var r = e.parser;
        return { type: "mclass", mode: r.mode, mclass: rn(t[0]), body: Ue(t[1]), isCharacterBox: H.isCharacterBox(t[1]) };
      } }), ee({ type: "mclass", names: ["\\stackrel", "\\overset", "\\underset"], props: { numArgs: 2 }, handler: function(e, t) {
        var r = e.parser, i = e.funcName, a = t[1], u = t[0], p;
        i !== "\\stackrel" ? p = rn(a) : p = "mrel";
        var x = { type: "op", mode: a.mode, limits: true, alwaysHandleSupSub: true, parentIsSupSub: false, symbol: false, suppressBaseShift: i !== "\\stackrel", body: Ue(a) }, y = { type: "supsub", mode: u.mode, base: x, sup: i === "\\underset" ? null : u, sub: i === "\\underset" ? u : null };
        return { type: "mclass", mode: r.mode, mclass: p, body: [y], isCharacterBox: H.isCharacterBox(y) };
      }, htmlBuilder: Wi, mathmlBuilder: ji });
      var Yi = function(e, t) {
        var r = e.font, i = t.withFont(r);
        return Se(e.body, i);
      }, Xi = function(e, t) {
        var r = e.font, i = t.withFont(r);
        return Ee(e.body, i);
      }, $i = { "\\Bbb": "\\mathbb", "\\bold": "\\mathbf", "\\frak": "\\mathfrak", "\\bm": "\\boldsymbol" };
      ee({ type: "font", names: ["\\mathrm", "\\mathit", "\\mathbf", "\\mathnormal", "\\mathbb", "\\mathcal", "\\mathfrak", "\\mathscr", "\\mathsf", "\\mathtt", "\\Bbb", "\\bold", "\\frak"], props: { numArgs: 1, allowedInArgument: true }, handler: function(e, t) {
        var r = e.parser, i = e.funcName, a = _t(t[0]), u = i;
        return u in $i && (u = $i[u]), { type: "font", mode: r.mode, font: u.slice(1), body: a };
      }, htmlBuilder: Yi, mathmlBuilder: Xi }), ee({ type: "mclass", names: ["\\boldsymbol", "\\bm"], props: { numArgs: 1 }, handler: function(e, t) {
        var r = e.parser, i = t[0], a = H.isCharacterBox(i);
        return { type: "mclass", mode: r.mode, mclass: rn(i), body: [{ type: "font", mode: r.mode, font: "boldsymbol", body: i }], isCharacterBox: a };
      } }), ee({ type: "font", names: ["\\rm", "\\sf", "\\tt", "\\bf", "\\it", "\\cal"], props: { numArgs: 0, allowedInText: true }, handler: function(e, t) {
        var r = e.parser, i = e.funcName, a = e.breakOnTokenText, u = r.mode, p = r.parseExpression(true, a), x = "math" + i.slice(1);
        return { type: "font", mode: u, font: x, body: { type: "ordgroup", mode: r.mode, body: p } };
      }, htmlBuilder: Yi, mathmlBuilder: Xi });
      var Zi = function(e, t) {
        var r = t;
        return e === "display" ? r = r.id >= _.SCRIPT.id ? r.text() : _.DISPLAY : e === "text" && r.size === _.DISPLAY.size ? r = _.TEXT : e === "script" ? r = _.SCRIPT : e === "scriptscript" && (r = _.SCRIPTSCRIPT), r;
      }, nn = function(e, t) {
        var r = Zi(e.size, t.style), i = r.fracNum(), a = r.fracDen(), u;
        u = t.havingStyle(i);
        var p = Se(e.numer, u, t);
        if (e.continued) {
          var x = 8.5 / t.fontMetrics().ptPerEm, y = 3.5 / t.fontMetrics().ptPerEm;
          p.height = p.height < x ? x : p.height, p.depth = p.depth < y ? y : p.depth;
        }
        u = t.havingStyle(a);
        var z = Se(e.denom, u, t), I, R, P;
        e.hasBarLine ? (e.barSize ? (R = Fe(e.barSize, t), I = L.makeLineSpan("frac-line", t, R)) : I = L.makeLineSpan("frac-line", t), R = I.height, P = I.height) : (I = null, R = 0, P = t.fontMetrics().defaultRuleThickness);
        var G, Q, K;
        r.size === _.DISPLAY.size || e.size === "display" ? (G = t.fontMetrics().num1, R > 0 ? Q = 3 * P : Q = 7 * P, K = t.fontMetrics().denom1) : (R > 0 ? (G = t.fontMetrics().num2, Q = P) : (G = t.fontMetrics().num3, Q = 3 * P), K = t.fontMetrics().denom2);
        var ne;
        if (I) {
          var oe = t.fontMetrics().axisHeight;
          G - p.depth - (oe + 0.5 * R) < Q && (G += Q - (G - p.depth - (oe + 0.5 * R))), oe - 0.5 * R - (z.height - K) < Q && (K += Q - (oe - 0.5 * R - (z.height - K)));
          var Ae = -(oe - 0.5 * R);
          ne = L.makeVList({ positionType: "individualShift", children: [{ type: "elem", elem: z, shift: K }, { type: "elem", elem: I, shift: Ae }, { type: "elem", elem: p, shift: -G }] }, t);
        } else {
          var ae = G - p.depth - (z.height - K);
          ae < Q && (G += 0.5 * (Q - ae), K += 0.5 * (Q - ae)), ne = L.makeVList({ positionType: "individualShift", children: [{ type: "elem", elem: z, shift: K }, { type: "elem", elem: p, shift: -G }] }, t);
        }
        u = t.havingStyle(r), ne.height *= u.sizeMultiplier / t.sizeMultiplier, ne.depth *= u.sizeMultiplier / t.sizeMultiplier;
        var Me;
        r.size === _.DISPLAY.size ? Me = t.fontMetrics().delim1 : r.size === _.SCRIPTSCRIPT.size ? Me = t.havingStyle(_.SCRIPT).fontMetrics().delim2 : Me = t.fontMetrics().delim2;
        var Ie, Ce;
        return e.leftDelim == null ? Ie = zt(t, ["mopen"]) : Ie = L0.customSizedDelim(e.leftDelim, Me, true, t.havingStyle(r), e.mode, ["mopen"]), e.continued ? Ce = L.makeSpan([]) : e.rightDelim == null ? Ce = zt(t, ["mclose"]) : Ce = L0.customSizedDelim(e.rightDelim, Me, true, t.havingStyle(r), e.mode, ["mclose"]), L.makeSpan(["mord"].concat(u.sizingClasses(t)), [Ie, L.makeSpan(["mfrac"], [ne]), Ce], t);
      }, an = function(e, t) {
        var r = new W.MathNode("mfrac", [Ee(e.numer, t), Ee(e.denom, t)]);
        if (!e.hasBarLine)
          r.setAttribute("linethickness", "0px");
        else if (e.barSize) {
          var i = Fe(e.barSize, t);
          r.setAttribute("linethickness", X(i));
        }
        var a = Zi(e.size, t.style);
        if (a.size !== t.style.size) {
          r = new W.MathNode("mstyle", [r]);
          var u = a.size === _.DISPLAY.size ? "true" : "false";
          r.setAttribute("displaystyle", u), r.setAttribute("scriptlevel", "0");
        }
        if (e.leftDelim != null || e.rightDelim != null) {
          var p = [];
          if (e.leftDelim != null) {
            var x = new W.MathNode("mo", [new W.TextNode(e.leftDelim.replace("\\", ""))]);
            x.setAttribute("fence", "true"), p.push(x);
          }
          if (p.push(r), e.rightDelim != null) {
            var y = new W.MathNode("mo", [new W.TextNode(e.rightDelim.replace("\\", ""))]);
            y.setAttribute("fence", "true"), p.push(y);
          }
          return Gr(p);
        }
        return r;
      };
      ee({ type: "genfrac", names: ["\\dfrac", "\\frac", "\\tfrac", "\\dbinom", "\\binom", "\\tbinom", "\\\\atopfrac", "\\\\bracefrac", "\\\\brackfrac"], props: { numArgs: 2, allowedInArgument: true }, handler: function(e, t) {
        var r = e.parser, i = e.funcName, a = t[0], u = t[1], p, x = null, y = null, z = "auto";
        switch (i) {
          case "\\dfrac":
          case "\\frac":
          case "\\tfrac":
            p = true;
            break;
          case "\\\\atopfrac":
            p = false;
            break;
          case "\\dbinom":
          case "\\binom":
          case "\\tbinom":
            p = false, x = "(", y = ")";
            break;
          case "\\\\bracefrac":
            p = false, x = "\\{", y = "\\}";
            break;
          case "\\\\brackfrac":
            p = false, x = "[", y = "]";
            break;
          default:
            throw new Error("Unrecognized genfrac command");
        }
        switch (i) {
          case "\\dfrac":
          case "\\dbinom":
            z = "display";
            break;
          case "\\tfrac":
          case "\\tbinom":
            z = "text";
            break;
        }
        return { type: "genfrac", mode: r.mode, continued: false, numer: a, denom: u, hasBarLine: p, leftDelim: x, rightDelim: y, size: z, barSize: null };
      }, htmlBuilder: nn, mathmlBuilder: an }), ee({ type: "genfrac", names: ["\\cfrac"], props: { numArgs: 2 }, handler: function(e, t) {
        var r = e.parser, i = e.funcName, a = t[0], u = t[1];
        return { type: "genfrac", mode: r.mode, continued: true, numer: a, denom: u, hasBarLine: true, leftDelim: null, rightDelim: null, size: "display", barSize: null };
      } }), ee({ type: "infix", names: ["\\over", "\\choose", "\\atop", "\\brace", "\\brack"], props: { numArgs: 0, infix: true }, handler: function(e) {
        var t = e.parser, r = e.funcName, i = e.token, a;
        switch (r) {
          case "\\over":
            a = "\\frac";
            break;
          case "\\choose":
            a = "\\binom";
            break;
          case "\\atop":
            a = "\\\\atopfrac";
            break;
          case "\\brace":
            a = "\\\\bracefrac";
            break;
          case "\\brack":
            a = "\\\\brackfrac";
            break;
          default:
            throw new Error("Unrecognized infix genfrac command");
        }
        return { type: "infix", mode: t.mode, replaceWith: a, token: i };
      } });
      var Qi = ["display", "text", "script", "scriptscript"], Ki = function(e) {
        var t = null;
        return e.length > 0 && (t = e, t = t === "." ? null : t), t;
      };
      ee({ type: "genfrac", names: ["\\genfrac"], props: { numArgs: 6, allowedInArgument: true, argTypes: ["math", "math", "size", "text", "math", "math"] }, handler: function(e, t) {
        var r = e.parser, i = t[4], a = t[5], u = _t(t[0]), p = u.type === "atom" && u.family === "open" ? Ki(u.text) : null, x = _t(t[1]), y = x.type === "atom" && x.family === "close" ? Ki(x.text) : null, z = ge(t[2], "size"), I, R = null;
        z.isBlank ? I = true : (R = z.value, I = R.number > 0);
        var P = "auto", G = t[3];
        if (G.type === "ordgroup") {
          if (G.body.length > 0) {
            var Q = ge(G.body[0], "textord");
            P = Qi[Number(Q.text)];
          }
        } else
          G = ge(G, "textord"), P = Qi[Number(G.text)];
        return { type: "genfrac", mode: r.mode, numer: i, denom: a, continued: false, hasBarLine: I, barSize: R, leftDelim: p, rightDelim: y, size: P };
      }, htmlBuilder: nn, mathmlBuilder: an }), ee({ type: "infix", names: ["\\above"], props: { numArgs: 1, argTypes: ["size"], infix: true }, handler: function(e, t) {
        var r = e.parser, i = e.funcName, a = e.token;
        return { type: "infix", mode: r.mode, replaceWith: "\\\\abovefrac", size: ge(t[0], "size").value, token: a };
      } }), ee({ type: "genfrac", names: ["\\\\abovefrac"], props: { numArgs: 3, argTypes: ["math", "size", "math"] }, handler: function(e, t) {
        var r = e.parser, i = e.funcName, a = t[0], u = S(ge(t[1], "infix").size), p = t[2], x = u.number > 0;
        return { type: "genfrac", mode: r.mode, numer: a, denom: p, continued: false, hasBarLine: x, barSize: u, leftDelim: null, rightDelim: null, size: "auto" };
      }, htmlBuilder: nn, mathmlBuilder: an });
      var Ji = function(e, t) {
        var r = t.style, i, a;
        e.type === "supsub" ? (i = e.sup ? Se(e.sup, t.havingStyle(r.sup()), t) : Se(e.sub, t.havingStyle(r.sub()), t), a = ge(e.base, "horizBrace")) : a = ge(e, "horizBrace");
        var u = Se(a.base, t.havingBaseStyle(_.DISPLAY)), p = I0.svgSpan(a, t), x;
        if (a.isOver ? (x = L.makeVList({ positionType: "firstBaseline", children: [{ type: "elem", elem: u }, { type: "kern", size: 0.1 }, { type: "elem", elem: p }] }, t), x.children[0].children[0].children[1].classes.push("svg-align")) : (x = L.makeVList({ positionType: "bottom", positionData: u.depth + 0.1 + p.height, children: [{ type: "elem", elem: p }, { type: "kern", size: 0.1 }, { type: "elem", elem: u }] }, t), x.children[0].children[0].children[0].classes.push("svg-align")), i) {
          var y = L.makeSpan(["mord", a.isOver ? "mover" : "munder"], [x], t);
          a.isOver ? x = L.makeVList({ positionType: "firstBaseline", children: [{ type: "elem", elem: y }, { type: "kern", size: 0.2 }, { type: "elem", elem: i }] }, t) : x = L.makeVList({ positionType: "bottom", positionData: y.depth + 0.2 + i.height + i.depth, children: [{ type: "elem", elem: i }, { type: "kern", size: 0.2 }, { type: "elem", elem: y }] }, t);
        }
        return L.makeSpan(["mord", a.isOver ? "mover" : "munder"], [x], t);
      }, S1 = function(e, t) {
        var r = I0.mathMLnode(e.label);
        return new W.MathNode(e.isOver ? "mover" : "munder", [Ee(e.base, t), r]);
      };
      ee({ type: "horizBrace", names: ["\\overbrace", "\\underbrace"], props: { numArgs: 1 }, handler: function(e, t) {
        var r = e.parser, i = e.funcName;
        return { type: "horizBrace", mode: r.mode, label: i, isOver: /^\\over/.test(i), base: t[0] };
      }, htmlBuilder: Ji, mathmlBuilder: S1 }), ee({ type: "href", names: ["\\href"], props: { numArgs: 2, argTypes: ["url", "original"], allowedInText: true }, handler: function(e, t) {
        var r = e.parser, i = t[1], a = ge(t[0], "url").url;
        return r.settings.isTrusted({ command: "\\href", url: a }) ? { type: "href", mode: r.mode, href: a, body: Ue(i) } : r.formatUnsupportedCmd("\\href");
      }, htmlBuilder: function(e, t) {
        var r = $e(e.body, t, false);
        return L.makeAnchor(e.href, [], r, t);
      }, mathmlBuilder: function(e, t) {
        var r = P0(e.body, t);
        return r instanceof f0 || (r = new f0("mrow", [r])), r.setAttribute("href", e.href), r;
      } }), ee({ type: "href", names: ["\\url"], props: { numArgs: 1, argTypes: ["url"], allowedInText: true }, handler: function(e, t) {
        var r = e.parser, i = ge(t[0], "url").url;
        if (!r.settings.isTrusted({ command: "\\url", url: i }))
          return r.formatUnsupportedCmd("\\url");
        for (var a = [], u = 0; u < i.length; u++) {
          var p = i[u];
          p === "~" && (p = "\\textasciitilde"), a.push({ type: "textord", mode: "text", text: p });
        }
        var x = { type: "text", mode: r.mode, font: "\\texttt", body: a };
        return { type: "href", mode: r.mode, href: i, body: Ue(x) };
      } }), ee({ type: "hbox", names: ["\\hbox"], props: { numArgs: 1, argTypes: ["text"], allowedInText: true, primitive: true }, handler: function(e, t) {
        var r = e.parser;
        return { type: "hbox", mode: r.mode, body: Ue(t[0]) };
      }, htmlBuilder: function(e, t) {
        var r = $e(e.body, t, false);
        return L.makeFragment(r);
      }, mathmlBuilder: function(e, t) {
        return new W.MathNode("mrow", o0(e.body, t));
      } }), ee({ type: "html", names: ["\\htmlClass", "\\htmlId", "\\htmlStyle", "\\htmlData"], props: { numArgs: 2, argTypes: ["raw", "original"], allowedInText: true }, handler: function(e, t) {
        var r = e.parser, i = e.funcName, a = e.token, u = ge(t[0], "raw").string, p = t[1];
        r.settings.strict && r.settings.reportNonstrict("htmlExtension", "HTML extension is disabled on strict mode");
        var x, y = {};
        switch (i) {
          case "\\htmlClass":
            y.class = u, x = { command: "\\htmlClass", class: u };
            break;
          case "\\htmlId":
            y.id = u, x = { command: "\\htmlId", id: u };
            break;
          case "\\htmlStyle":
            y.style = u, x = { command: "\\htmlStyle", style: u };
            break;
          case "\\htmlData": {
            for (var z = u.split(","), I = 0; I < z.length; I++) {
              var R = z[I].split("=");
              if (R.length !== 2)
                throw new o("Error parsing key-value for \\htmlData");
              y["data-" + R[0].trim()] = R[1].trim();
            }
            x = { command: "\\htmlData", attributes: y };
            break;
          }
          default:
            throw new Error("Unrecognized html command");
        }
        return r.settings.isTrusted(x) ? { type: "html", mode: r.mode, attributes: y, body: Ue(p) } : r.formatUnsupportedCmd(i);
      }, htmlBuilder: function(e, t) {
        var r = $e(e.body, t, false), i = ["enclosing"];
        e.attributes.class && i.push.apply(i, e.attributes.class.trim().split(/\s+/));
        var a = L.makeSpan(i, r, t);
        for (var u in e.attributes)
          u !== "class" && e.attributes.hasOwnProperty(u) && a.setAttribute(u, e.attributes[u]);
        return a;
      }, mathmlBuilder: function(e, t) {
        return P0(e.body, t);
      } }), ee({ type: "htmlmathml", names: ["\\html@mathml"], props: { numArgs: 2, allowedInText: true }, handler: function(e, t) {
        var r = e.parser;
        return { type: "htmlmathml", mode: r.mode, html: Ue(t[0]), mathml: Ue(t[1]) };
      }, htmlBuilder: function(e, t) {
        var r = $e(e.html, t, false);
        return L.makeFragment(r);
      }, mathmlBuilder: function(e, t) {
        return P0(e.mathml, t);
      } });
      var ln = function(e) {
        if (/^[-+]? *(\d+(\.\d*)?|\.\d+)$/.test(e))
          return { number: +e, unit: "bp" };
        var t = /([-+]?) *(\d+(?:\.\d*)?|\.\d+) *([a-z]{2})/.exec(e);
        if (!t)
          throw new o("Invalid size: '" + e + "' in \\includegraphics");
        var r = { number: +(t[1] + t[2]), unit: t[3] };
        if (!kt(r))
          throw new o("Invalid unit: '" + r.unit + "' in \\includegraphics.");
        return r;
      };
      ee({ type: "includegraphics", names: ["\\includegraphics"], props: { numArgs: 1, numOptionalArgs: 1, argTypes: ["raw", "url"], allowedInText: false }, handler: function(e, t, r) {
        var i = e.parser, a = { number: 0, unit: "em" }, u = { number: 0.9, unit: "em" }, p = { number: 0, unit: "em" }, x = "";
        if (r[0])
          for (var y = ge(r[0], "raw").string, z = y.split(","), I = 0; I < z.length; I++) {
            var R = z[I].split("=");
            if (R.length === 2) {
              var P = R[1].trim();
              switch (R[0].trim()) {
                case "alt":
                  x = P;
                  break;
                case "width":
                  a = ln(P);
                  break;
                case "height":
                  u = ln(P);
                  break;
                case "totalheight":
                  p = ln(P);
                  break;
                default:
                  throw new o("Invalid key: '" + R[0] + "' in \\includegraphics.");
              }
            }
          }
        var G = ge(t[0], "url").url;
        return x === "" && (x = G, x = x.replace(/^.*[\\/]/, ""), x = x.substring(0, x.lastIndexOf("."))), i.settings.isTrusted({ command: "\\includegraphics", url: G }) ? { type: "includegraphics", mode: i.mode, alt: x, width: a, height: u, totalheight: p, src: G } : i.formatUnsupportedCmd("\\includegraphics");
      }, htmlBuilder: function(e, t) {
        var r = Fe(e.height, t), i = 0;
        e.totalheight.number > 0 && (i = Fe(e.totalheight, t) - r);
        var a = 0;
        e.width.number > 0 && (a = Fe(e.width, t));
        var u = { height: X(r + i) };
        a > 0 && (u.width = X(a)), i > 0 && (u.verticalAlign = X(-i));
        var p = new Dr(e.src, e.alt, u);
        return p.height = r, p.depth = i, p;
      }, mathmlBuilder: function(e, t) {
        var r = new W.MathNode("mglyph", []);
        r.setAttribute("alt", e.alt);
        var i = Fe(e.height, t), a = 0;
        if (e.totalheight.number > 0 && (a = Fe(e.totalheight, t) - i, r.setAttribute("valign", X(-a))), r.setAttribute("height", X(i + a)), e.width.number > 0) {
          var u = Fe(e.width, t);
          r.setAttribute("width", X(u));
        }
        return r.setAttribute("src", e.src), r;
      } }), ee({ type: "kern", names: ["\\kern", "\\mkern", "\\hskip", "\\mskip"], props: { numArgs: 1, argTypes: ["size"], primitive: true, allowedInText: true }, handler: function(e, t) {
        var r = e.parser, i = e.funcName, a = ge(t[0], "size");
        if (r.settings.strict) {
          var u = i[1] === "m", p = a.value.unit === "mu";
          u ? (p || r.settings.reportNonstrict("mathVsTextUnits", "LaTeX's " + i + " supports only mu units, " + ("not " + a.value.unit + " units")), r.mode !== "math" && r.settings.reportNonstrict("mathVsTextUnits", "LaTeX's " + i + " works only in math mode")) : p && r.settings.reportNonstrict("mathVsTextUnits", "LaTeX's " + i + " doesn't support mu units");
        }
        return { type: "kern", mode: r.mode, dimension: a.value };
      }, htmlBuilder: function(e, t) {
        return L.makeGlue(e.dimension, t);
      }, mathmlBuilder: function(e, t) {
        var r = Fe(e.dimension, t);
        return new W.SpaceNode(r);
      } }), ee({ type: "lap", names: ["\\mathllap", "\\mathrlap", "\\mathclap"], props: { numArgs: 1, allowedInText: true }, handler: function(e, t) {
        var r = e.parser, i = e.funcName, a = t[0];
        return { type: "lap", mode: r.mode, alignment: i.slice(5), body: a };
      }, htmlBuilder: function(e, t) {
        var r;
        e.alignment === "clap" ? (r = L.makeSpan([], [Se(e.body, t)]), r = L.makeSpan(["inner"], [r], t)) : r = L.makeSpan(["inner"], [Se(e.body, t)]);
        var i = L.makeSpan(["fix"], []), a = L.makeSpan([e.alignment], [r, i], t), u = L.makeSpan(["strut"]);
        return u.style.height = X(a.height + a.depth), a.depth && (u.style.verticalAlign = X(-a.depth)), a.children.unshift(u), a = L.makeSpan(["thinbox"], [a], t), L.makeSpan(["mord", "vbox"], [a], t);
      }, mathmlBuilder: function(e, t) {
        var r = new W.MathNode("mpadded", [Ee(e.body, t)]);
        if (e.alignment !== "rlap") {
          var i = e.alignment === "llap" ? "-1" : "-0.5";
          r.setAttribute("lspace", i + "width");
        }
        return r.setAttribute("width", "0px"), r;
      } }), ee({ type: "styling", names: ["\\(", "$"], props: { numArgs: 0, allowedInText: true, allowedInMath: false }, handler: function(e, t) {
        var r = e.funcName, i = e.parser, a = i.mode;
        i.switchMode("math");
        var u = r === "\\(" ? "\\)" : "$", p = i.parseExpression(false, u);
        return i.expect(u), i.switchMode(a), { type: "styling", mode: i.mode, style: "text", body: p };
      } }), ee({ type: "text", names: ["\\)", "\\]"], props: { numArgs: 0, allowedInText: true, allowedInMath: false }, handler: function(e, t) {
        throw new o("Mismatched " + e.funcName);
      } });
      var _i = function(e, t) {
        switch (t.style.size) {
          case _.DISPLAY.size:
            return e.display;
          case _.TEXT.size:
            return e.text;
          case _.SCRIPT.size:
            return e.script;
          case _.SCRIPTSCRIPT.size:
            return e.scriptscript;
          default:
            return e.text;
        }
      };
      ee({ type: "mathchoice", names: ["\\mathchoice"], props: { numArgs: 4, primitive: true }, handler: function(e, t) {
        var r = e.parser;
        return { type: "mathchoice", mode: r.mode, display: Ue(t[0]), text: Ue(t[1]), script: Ue(t[2]), scriptscript: Ue(t[3]) };
      }, htmlBuilder: function(e, t) {
        var r = _i(e, t), i = $e(r, t, false);
        return L.makeFragment(i);
      }, mathmlBuilder: function(e, t) {
        var r = _i(e, t);
        return P0(r, t);
      } });
      var ea = function(e, t, r, i, a, u, p) {
        e = L.makeSpan([], [e]);
        var x = r && H.isCharacterBox(r), y, z;
        if (t) {
          var I = Se(t, i.havingStyle(a.sup()), i);
          z = { elem: I, kern: Math.max(i.fontMetrics().bigOpSpacing1, i.fontMetrics().bigOpSpacing3 - I.depth) };
        }
        if (r) {
          var R = Se(r, i.havingStyle(a.sub()), i);
          y = { elem: R, kern: Math.max(i.fontMetrics().bigOpSpacing2, i.fontMetrics().bigOpSpacing4 - R.height) };
        }
        var P;
        if (z && y) {
          var G = i.fontMetrics().bigOpSpacing5 + y.elem.height + y.elem.depth + y.kern + e.depth + p;
          P = L.makeVList({ positionType: "bottom", positionData: G, children: [{ type: "kern", size: i.fontMetrics().bigOpSpacing5 }, { type: "elem", elem: y.elem, marginLeft: X(-u) }, { type: "kern", size: y.kern }, { type: "elem", elem: e }, { type: "kern", size: z.kern }, { type: "elem", elem: z.elem, marginLeft: X(u) }, { type: "kern", size: i.fontMetrics().bigOpSpacing5 }] }, i);
        } else if (y) {
          var Q = e.height - p;
          P = L.makeVList({ positionType: "top", positionData: Q, children: [{ type: "kern", size: i.fontMetrics().bigOpSpacing5 }, { type: "elem", elem: y.elem, marginLeft: X(-u) }, { type: "kern", size: y.kern }, { type: "elem", elem: e }] }, i);
        } else if (z) {
          var K = e.depth + p;
          P = L.makeVList({ positionType: "bottom", positionData: K, children: [{ type: "elem", elem: e }, { type: "kern", size: z.kern }, { type: "elem", elem: z.elem, marginLeft: X(u) }, { type: "kern", size: i.fontMetrics().bigOpSpacing5 }] }, i);
        } else
          return e;
        var ne = [P];
        if (y && u !== 0 && !x) {
          var ae = L.makeSpan(["mspace"], [], i);
          ae.style.marginRight = X(u), ne.unshift(ae);
        }
        return L.makeSpan(["mop", "op-limits"], ne, i);
      }, ta = ["\\smallint"], mt = function(e, t) {
        var r, i, a = false, u;
        e.type === "supsub" ? (r = e.sup, i = e.sub, u = ge(e.base, "op"), a = true) : u = ge(e, "op");
        var p = t.style, x = false;
        p.size === _.DISPLAY.size && u.symbol && !H.contains(ta, u.name) && (x = true);
        var y;
        if (u.symbol) {
          var z = x ? "Size2-Regular" : "Size1-Regular", I = "";
          if ((u.name === "\\oiint" || u.name === "\\oiiint") && (I = u.name.substr(1), u.name = I === "oiint" ? "\\iint" : "\\iiint"), y = L.makeSymbol(u.name, z, "math", t, ["mop", "op-symbol", x ? "large-op" : "small-op"]), I.length > 0) {
            var R = y.italic, P = L.staticSvg(I + "Size" + (x ? "2" : "1"), t);
            y = L.makeVList({ positionType: "individualShift", children: [{ type: "elem", elem: y, shift: 0 }, { type: "elem", elem: P, shift: x ? 0.08 : 0 }] }, t), u.name = "\\" + I, y.classes.unshift("mop"), y.italic = R;
          }
        } else if (u.body) {
          var G = $e(u.body, t, true);
          G.length === 1 && G[0] instanceof t0 ? (y = G[0], y.classes[0] = "mop") : y = L.makeSpan(["mop"], G, t);
        } else {
          for (var Q = [], K = 1; K < u.name.length; K++)
            Q.push(L.mathsym(u.name[K], u.mode, t));
          y = L.makeSpan(["mop"], Q, t);
        }
        var ne = 0, ae = 0;
        return (y instanceof t0 || u.name === "\\oiint" || u.name === "\\oiiint") && !u.suppressBaseShift && (ne = (y.height - y.depth) / 2 - t.fontMetrics().axisHeight, ae = y.italic), a ? ea(y, r, i, t, p, ae, ne) : (ne && (y.style.position = "relative", y.style.top = X(ne)), y);
      }, Tt = function(e, t) {
        var r;
        if (e.symbol)
          r = new f0("mo", [d0(e.name, e.mode)]), H.contains(ta, e.name) && r.setAttribute("largeop", "false");
        else if (e.body)
          r = new f0("mo", o0(e.body, t));
        else {
          r = new f0("mi", [new Bt(e.name.slice(1))]);
          var i = new f0("mo", [d0("\u2061", "text")]);
          e.parentIsSupSub ? r = new f0("mrow", [r, i]) : r = bi([r, i]);
        }
        return r;
      }, A1 = { "\u220F": "\\prod", "\u2210": "\\coprod", "\u2211": "\\sum", "\u22C0": "\\bigwedge", "\u22C1": "\\bigvee", "\u22C2": "\\bigcap", "\u22C3": "\\bigcup", "\u2A00": "\\bigodot", "\u2A01": "\\bigoplus", "\u2A02": "\\bigotimes", "\u2A04": "\\biguplus", "\u2A06": "\\bigsqcup" };
      ee({ type: "op", names: ["\\coprod", "\\bigvee", "\\bigwedge", "\\biguplus", "\\bigcap", "\\bigcup", "\\intop", "\\prod", "\\sum", "\\bigotimes", "\\bigoplus", "\\bigodot", "\\bigsqcup", "\\smallint", "\u220F", "\u2210", "\u2211", "\u22C0", "\u22C1", "\u22C2", "\u22C3", "\u2A00", "\u2A01", "\u2A02", "\u2A04", "\u2A06"], props: { numArgs: 0 }, handler: function(e, t) {
        var r = e.parser, i = e.funcName, a = i;
        return a.length === 1 && (a = A1[a]), { type: "op", mode: r.mode, limits: true, parentIsSupSub: false, symbol: true, name: a };
      }, htmlBuilder: mt, mathmlBuilder: Tt }), ee({ type: "op", names: ["\\mathop"], props: { numArgs: 1, primitive: true }, handler: function(e, t) {
        var r = e.parser, i = t[0];
        return { type: "op", mode: r.mode, limits: false, parentIsSupSub: false, symbol: false, body: Ue(i) };
      }, htmlBuilder: mt, mathmlBuilder: Tt });
      var z1 = { "\u222B": "\\int", "\u222C": "\\iint", "\u222D": "\\iiint", "\u222E": "\\oint", "\u222F": "\\oiint", "\u2230": "\\oiiint" };
      ee({ type: "op", names: ["\\arcsin", "\\arccos", "\\arctan", "\\arctg", "\\arcctg", "\\arg", "\\ch", "\\cos", "\\cosec", "\\cosh", "\\cot", "\\cotg", "\\coth", "\\csc", "\\ctg", "\\cth", "\\deg", "\\dim", "\\exp", "\\hom", "\\ker", "\\lg", "\\ln", "\\log", "\\sec", "\\sin", "\\sinh", "\\sh", "\\tan", "\\tanh", "\\tg", "\\th"], props: { numArgs: 0 }, handler: function(e) {
        var t = e.parser, r = e.funcName;
        return { type: "op", mode: t.mode, limits: false, parentIsSupSub: false, symbol: false, name: r };
      }, htmlBuilder: mt, mathmlBuilder: Tt }), ee({ type: "op", names: ["\\det", "\\gcd", "\\inf", "\\lim", "\\max", "\\min", "\\Pr", "\\sup"], props: { numArgs: 0 }, handler: function(e) {
        var t = e.parser, r = e.funcName;
        return { type: "op", mode: t.mode, limits: true, parentIsSupSub: false, symbol: false, name: r };
      }, htmlBuilder: mt, mathmlBuilder: Tt }), ee({ type: "op", names: ["\\int", "\\iint", "\\iiint", "\\oint", "\\oiint", "\\oiiint", "\u222B", "\u222C", "\u222D", "\u222E", "\u222F", "\u2230"], props: { numArgs: 0 }, handler: function(e) {
        var t = e.parser, r = e.funcName, i = r;
        return i.length === 1 && (i = z1[i]), { type: "op", mode: t.mode, limits: false, parentIsSupSub: false, symbol: true, name: i };
      }, htmlBuilder: mt, mathmlBuilder: Tt });
      var ra = {};
      function b(s, e) {
        ra[s] = e;
      }
      var na = function(e, t) {
        var r, i, a = false, u;
        e.type === "supsub" ? (r = e.sup, i = e.sub, u = ge(e.base, "operatorname"), a = true) : u = ge(e, "operatorname");
        var p;
        if (u.body.length > 0) {
          for (var x = u.body.map(function(R) {
            var P = R.text;
            return typeof P == "string" ? { type: "textord", mode: R.mode, text: P } : R;
          }), y = $e(x, t.withFont("mathrm"), true), z = 0; z < y.length; z++) {
            var I = y[z];
            I instanceof t0 && (I.text = I.text.replace(/\u2212/, "-").replace(/\u2217/, "*"));
          }
          p = L.makeSpan(["mop"], y, t);
        } else
          p = L.makeSpan(["mop"], [], t);
        return a ? ea(p, r, i, t, t.style, 0, 0) : p;
      }, B1 = function(e, t) {
        for (var r = o0(e.body, t.withFont("mathrm")), i = true, a = 0; a < r.length; a++) {
          var u = r[a];
          if (!(u instanceof W.SpaceNode))
            if (u instanceof W.MathNode)
              switch (u.type) {
                case "mi":
                case "mn":
                case "ms":
                case "mspace":
                case "mtext":
                  break;
                case "mo": {
                  var p = u.children[0];
                  u.children.length === 1 && p instanceof W.TextNode ? p.text = p.text.replace(/\u2212/, "-").replace(/\u2217/, "*") : i = false;
                  break;
                }
                default:
                  i = false;
              }
            else
              i = false;
        }
        if (i) {
          var x = r.map(function(I) {
            return I.toText();
          }).join("");
          r = [new W.TextNode(x)];
        }
        var y = new W.MathNode("mi", r);
        y.setAttribute("mathvariant", "normal");
        var z = new W.MathNode("mo", [d0("\u2061", "text")]);
        return e.parentIsSupSub ? new W.MathNode("mrow", [y, z]) : W.newDocumentFragment([y, z]);
      };
      ee({ type: "operatorname", names: ["\\operatorname@", "\\operatornamewithlimits"], props: { numArgs: 1 }, handler: function(e, t) {
        var r = e.parser, i = e.funcName, a = t[0];
        return { type: "operatorname", mode: r.mode, body: Ue(a), alwaysHandleSupSub: i === "\\operatornamewithlimits", limits: false, parentIsSupSub: false };
      }, htmlBuilder: na, mathmlBuilder: B1 }), b("\\operatorname", "\\@ifstar\\operatornamewithlimits\\operatorname@"), et({ type: "ordgroup", htmlBuilder: function(e, t) {
        return e.semisimple ? L.makeFragment($e(e.body, t, false)) : L.makeSpan(["mord"], $e(e.body, t, true), t);
      }, mathmlBuilder: function(e, t) {
        return P0(e.body, t, true);
      } }), ee({ type: "overline", names: ["\\overline"], props: { numArgs: 1 }, handler: function(e, t) {
        var r = e.parser, i = t[0];
        return { type: "overline", mode: r.mode, body: i };
      }, htmlBuilder: function(e, t) {
        var r = Se(e.body, t.havingCrampedStyle()), i = L.makeLineSpan("overline-line", t), a = t.fontMetrics().defaultRuleThickness, u = L.makeVList({ positionType: "firstBaseline", children: [{ type: "elem", elem: r }, { type: "kern", size: 3 * a }, { type: "elem", elem: i }, { type: "kern", size: a }] }, t);
        return L.makeSpan(["mord", "overline"], [u], t);
      }, mathmlBuilder: function(e, t) {
        var r = new W.MathNode("mo", [new W.TextNode("\u203E")]);
        r.setAttribute("stretchy", "true");
        var i = new W.MathNode("mover", [Ee(e.body, t), r]);
        return i.setAttribute("accent", "true"), i;
      } }), ee({ type: "phantom", names: ["\\phantom"], props: { numArgs: 1, allowedInText: true }, handler: function(e, t) {
        var r = e.parser, i = t[0];
        return { type: "phantom", mode: r.mode, body: Ue(i) };
      }, htmlBuilder: function(e, t) {
        var r = $e(e.body, t.withPhantom(), false);
        return L.makeFragment(r);
      }, mathmlBuilder: function(e, t) {
        var r = o0(e.body, t);
        return new W.MathNode("mphantom", r);
      } }), ee({ type: "hphantom", names: ["\\hphantom"], props: { numArgs: 1, allowedInText: true }, handler: function(e, t) {
        var r = e.parser, i = t[0];
        return { type: "hphantom", mode: r.mode, body: i };
      }, htmlBuilder: function(e, t) {
        var r = L.makeSpan([], [Se(e.body, t.withPhantom())]);
        if (r.height = 0, r.depth = 0, r.children)
          for (var i = 0; i < r.children.length; i++)
            r.children[i].height = 0, r.children[i].depth = 0;
        return r = L.makeVList({ positionType: "firstBaseline", children: [{ type: "elem", elem: r }] }, t), L.makeSpan(["mord"], [r], t);
      }, mathmlBuilder: function(e, t) {
        var r = o0(Ue(e.body), t), i = new W.MathNode("mphantom", r), a = new W.MathNode("mpadded", [i]);
        return a.setAttribute("height", "0px"), a.setAttribute("depth", "0px"), a;
      } }), ee({ type: "vphantom", names: ["\\vphantom"], props: { numArgs: 1, allowedInText: true }, handler: function(e, t) {
        var r = e.parser, i = t[0];
        return { type: "vphantom", mode: r.mode, body: i };
      }, htmlBuilder: function(e, t) {
        var r = L.makeSpan(["inner"], [Se(e.body, t.withPhantom())]), i = L.makeSpan(["fix"], []);
        return L.makeSpan(["mord", "rlap"], [r, i], t);
      }, mathmlBuilder: function(e, t) {
        var r = o0(Ue(e.body), t), i = new W.MathNode("mphantom", r), a = new W.MathNode("mpadded", [i]);
        return a.setAttribute("width", "0px"), a;
      } }), ee({ type: "raisebox", names: ["\\raisebox"], props: { numArgs: 2, argTypes: ["size", "hbox"], allowedInText: true }, handler: function(e, t) {
        var r = e.parser, i = ge(t[0], "size").value, a = t[1];
        return { type: "raisebox", mode: r.mode, dy: i, body: a };
      }, htmlBuilder: function(e, t) {
        var r = Se(e.body, t), i = Fe(e.dy, t);
        return L.makeVList({ positionType: "shift", positionData: -i, children: [{ type: "elem", elem: r }] }, t);
      }, mathmlBuilder: function(e, t) {
        var r = new W.MathNode("mpadded", [Ee(e.body, t)]), i = e.dy.number + e.dy.unit;
        return r.setAttribute("voffset", i), r;
      } }), ee({ type: "rule", names: ["\\rule"], props: { numArgs: 2, numOptionalArgs: 1, argTypes: ["size", "size", "size"] }, handler: function(e, t, r) {
        var i = e.parser, a = r[0], u = ge(t[0], "size"), p = ge(t[1], "size");
        return { type: "rule", mode: i.mode, shift: a && ge(a, "size").value, width: u.value, height: p.value };
      }, htmlBuilder: function(e, t) {
        var r = L.makeSpan(["mord", "rule"], [], t), i = Fe(e.width, t), a = Fe(e.height, t), u = e.shift ? Fe(e.shift, t) : 0;
        return r.style.borderRightWidth = X(i), r.style.borderTopWidth = X(a), r.style.bottom = X(u), r.width = i, r.height = a + u, r.depth = -u, r.maxFontSize = a * 1.125 * t.sizeMultiplier, r;
      }, mathmlBuilder: function(e, t) {
        var r = Fe(e.width, t), i = Fe(e.height, t), a = e.shift ? Fe(e.shift, t) : 0, u = t.color && t.getColor() || "black", p = new W.MathNode("mspace");
        p.setAttribute("mathbackground", u), p.setAttribute("width", X(r)), p.setAttribute("height", X(i));
        var x = new W.MathNode("mpadded", [p]);
        return a >= 0 ? x.setAttribute("height", X(a)) : (x.setAttribute("height", X(a)), x.setAttribute("depth", X(-a))), x.setAttribute("voffset", X(a)), x;
      } });
      function ia(s, e, t) {
        for (var r = $e(s, e, false), i = e.sizeMultiplier / t.sizeMultiplier, a = 0; a < r.length; a++) {
          var u = r[a].classes.indexOf("sizing");
          u < 0 ? Array.prototype.push.apply(r[a].classes, e.sizingClasses(t)) : r[a].classes[u + 1] === "reset-size" + e.size && (r[a].classes[u + 1] = "reset-size" + t.size), r[a].height *= i, r[a].depth *= i;
        }
        return L.makeFragment(r);
      }
      var aa = ["\\tiny", "\\sixptsize", "\\scriptsize", "\\footnotesize", "\\small", "\\normalsize", "\\large", "\\Large", "\\LARGE", "\\huge", "\\Huge"], C1 = function(e, t) {
        var r = t.havingSize(e.size);
        return ia(e.body, r, t);
      };
      ee({ type: "sizing", names: aa, props: { numArgs: 0, allowedInText: true }, handler: function(e, t) {
        var r = e.breakOnTokenText, i = e.funcName, a = e.parser, u = a.parseExpression(false, r);
        return { type: "sizing", mode: a.mode, size: aa.indexOf(i) + 1, body: u };
      }, htmlBuilder: C1, mathmlBuilder: function(e, t) {
        var r = t.havingSize(e.size), i = o0(e.body, r), a = new W.MathNode("mstyle", i);
        return a.setAttribute("mathsize", X(r.sizeMultiplier)), a;
      } }), ee({ type: "smash", names: ["\\smash"], props: { numArgs: 1, numOptionalArgs: 1, allowedInText: true }, handler: function(e, t, r) {
        var i = e.parser, a = false, u = false, p = r[0] && ge(r[0], "ordgroup");
        if (p)
          for (var x = "", y = 0; y < p.body.length; ++y) {
            var z = p.body[y];
            if (x = z.text, x === "t")
              a = true;
            else if (x === "b")
              u = true;
            else {
              a = false, u = false;
              break;
            }
          }
        else
          a = true, u = true;
        var I = t[0];
        return { type: "smash", mode: i.mode, body: I, smashHeight: a, smashDepth: u };
      }, htmlBuilder: function(e, t) {
        var r = L.makeSpan([], [Se(e.body, t)]);
        if (!e.smashHeight && !e.smashDepth)
          return r;
        if (e.smashHeight && (r.height = 0, r.children))
          for (var i = 0; i < r.children.length; i++)
            r.children[i].height = 0;
        if (e.smashDepth && (r.depth = 0, r.children))
          for (var a = 0; a < r.children.length; a++)
            r.children[a].depth = 0;
        var u = L.makeVList({ positionType: "firstBaseline", children: [{ type: "elem", elem: r }] }, t);
        return L.makeSpan(["mord"], [u], t);
      }, mathmlBuilder: function(e, t) {
        var r = new W.MathNode("mpadded", [Ee(e.body, t)]);
        return e.smashHeight && r.setAttribute("height", "0px"), e.smashDepth && r.setAttribute("depth", "0px"), r;
      } }), ee({ type: "sqrt", names: ["\\sqrt"], props: { numArgs: 1, numOptionalArgs: 1 }, handler: function(e, t, r) {
        var i = e.parser, a = r[0], u = t[0];
        return { type: "sqrt", mode: i.mode, body: u, index: a };
      }, htmlBuilder: function(e, t) {
        var r = Se(e.body, t.havingCrampedStyle());
        r.height === 0 && (r.height = t.fontMetrics().xHeight), r = L.wrapFragment(r, t);
        var i = t.fontMetrics(), a = i.defaultRuleThickness, u = a;
        t.style.id < _.TEXT.id && (u = t.fontMetrics().xHeight);
        var p = a + u / 4, x = r.height + r.depth + p + a, y = L0.sqrtImage(x, t), z = y.span, I = y.ruleWidth, R = y.advanceWidth, P = z.height - I;
        P > r.height + r.depth + p && (p = (p + P - r.height - r.depth) / 2);
        var G = z.height - r.height - p - I;
        r.style.paddingLeft = X(R);
        var Q = L.makeVList({ positionType: "firstBaseline", children: [{ type: "elem", elem: r, wrapperClasses: ["svg-align"] }, { type: "kern", size: -(r.height + G) }, { type: "elem", elem: z }, { type: "kern", size: I }] }, t);
        if (e.index) {
          var K = t.havingStyle(_.SCRIPTSCRIPT), ne = Se(e.index, K, t), ae = 0.6 * (Q.height - Q.depth), oe = L.makeVList({ positionType: "shift", positionData: -ae, children: [{ type: "elem", elem: ne }] }, t), Ae = L.makeSpan(["root"], [oe]);
          return L.makeSpan(["mord", "sqrt"], [Ae, Q], t);
        } else
          return L.makeSpan(["mord", "sqrt"], [Q], t);
      }, mathmlBuilder: function(e, t) {
        var r = e.body, i = e.index;
        return i ? new W.MathNode("mroot", [Ee(r, t), Ee(i, t)]) : new W.MathNode("msqrt", [Ee(r, t)]);
      } });
      var la = { display: _.DISPLAY, text: _.TEXT, script: _.SCRIPT, scriptscript: _.SCRIPTSCRIPT };
      ee({ type: "styling", names: ["\\displaystyle", "\\textstyle", "\\scriptstyle", "\\scriptscriptstyle"], props: { numArgs: 0, allowedInText: true, primitive: true }, handler: function(e, t) {
        var r = e.breakOnTokenText, i = e.funcName, a = e.parser, u = a.parseExpression(true, r), p = i.slice(1, i.length - 5);
        return { type: "styling", mode: a.mode, style: p, body: u };
      }, htmlBuilder: function(e, t) {
        var r = la[e.style], i = t.havingStyle(r).withFont("");
        return ia(e.body, i, t);
      }, mathmlBuilder: function(e, t) {
        var r = la[e.style], i = t.havingStyle(r), a = o0(e.body, i), u = new W.MathNode("mstyle", a), p = { display: ["0", "true"], text: ["0", "false"], script: ["1", "false"], scriptscript: ["2", "false"] }, x = p[e.style];
        return u.setAttribute("scriptlevel", x[0]), u.setAttribute("displaystyle", x[1]), u;
      } });
      var M1 = function(e, t) {
        var r = e.base;
        if (r)
          if (r.type === "op") {
            var i = r.limits && (t.style.size === _.DISPLAY.size || r.alwaysHandleSupSub);
            return i ? mt : null;
          } else if (r.type === "operatorname") {
            var a = r.alwaysHandleSupSub && (t.style.size === _.DISPLAY.size || r.limits);
            return a ? na : null;
          } else {
            if (r.type === "accent")
              return H.isCharacterBox(r.base) ? Wr : null;
            if (r.type === "horizBrace") {
              var u = !e.sub;
              return u === r.isOver ? Ji : null;
            } else
              return null;
          }
        else
          return null;
      };
      et({ type: "supsub", htmlBuilder: function(e, t) {
        var r = M1(e, t);
        if (r)
          return r(e, t);
        var i = e.base, a = e.sup, u = e.sub, p = Se(i, t), x, y, z = t.fontMetrics(), I = 0, R = 0, P = i && H.isCharacterBox(i);
        if (a) {
          var G = t.havingStyle(t.style.sup());
          x = Se(a, G, t), P || (I = p.height - G.fontMetrics().supDrop * G.sizeMultiplier / t.sizeMultiplier);
        }
        if (u) {
          var Q = t.havingStyle(t.style.sub());
          y = Se(u, Q, t), P || (R = p.depth + Q.fontMetrics().subDrop * Q.sizeMultiplier / t.sizeMultiplier);
        }
        var K;
        t.style === _.DISPLAY ? K = z.sup1 : t.style.cramped ? K = z.sup3 : K = z.sup2;
        var ne = t.sizeMultiplier, ae = X(0.5 / z.ptPerEm / ne), oe = null;
        if (y) {
          var Ae = e.base && e.base.type === "op" && e.base.name && (e.base.name === "\\oiint" || e.base.name === "\\oiiint");
          (p instanceof t0 || Ae) && (oe = X(-p.italic));
        }
        var Me;
        if (x && y) {
          I = Math.max(I, K, x.depth + 0.25 * z.xHeight), R = Math.max(R, z.sub2);
          var Ie = z.defaultRuleThickness, Ce = 4 * Ie;
          if (I - x.depth - (y.height - R) < Ce) {
            R = Ce - (I - x.depth) + y.height;
            var Te = 0.8 * z.xHeight - (I - x.depth);
            Te > 0 && (I += Te, R -= Te);
          }
          var Re = [{ type: "elem", elem: y, shift: R, marginRight: ae, marginLeft: oe }, { type: "elem", elem: x, shift: -I, marginRight: ae }];
          Me = L.makeVList({ positionType: "individualShift", children: Re }, t);
        } else if (y) {
          R = Math.max(R, z.sub1, y.height - 0.8 * z.xHeight);
          var De = [{ type: "elem", elem: y, marginLeft: oe, marginRight: ae }];
          Me = L.makeVList({ positionType: "shift", positionData: R, children: De }, t);
        } else if (x)
          I = Math.max(I, K, x.depth + 0.25 * z.xHeight), Me = L.makeVList({ positionType: "shift", positionData: -I, children: [{ type: "elem", elem: x, marginRight: ae }] }, t);
        else
          throw new Error("supsub must have either sup or sub.");
        var s0 = Hr(p, "right") || "mord";
        return L.makeSpan([s0], [p, L.makeSpan(["msupsub"], [Me])], t);
      }, mathmlBuilder: function(e, t) {
        var r = false, i, a;
        e.base && e.base.type === "horizBrace" && (a = !!e.sup, a === e.base.isOver && (r = true, i = e.base.isOver)), e.base && (e.base.type === "op" || e.base.type === "operatorname") && (e.base.parentIsSupSub = true);
        var u = [Ee(e.base, t)];
        e.sub && u.push(Ee(e.sub, t)), e.sup && u.push(Ee(e.sup, t));
        var p;
        if (r)
          p = i ? "mover" : "munder";
        else if (e.sub)
          if (e.sup) {
            var z = e.base;
            z && z.type === "op" && z.limits && t.style === _.DISPLAY || z && z.type === "operatorname" && z.alwaysHandleSupSub && (t.style === _.DISPLAY || z.limits) ? p = "munderover" : p = "msubsup";
          } else {
            var y = e.base;
            y && y.type === "op" && y.limits && (t.style === _.DISPLAY || y.alwaysHandleSupSub) || y && y.type === "operatorname" && y.alwaysHandleSupSub && (y.limits || t.style === _.DISPLAY) ? p = "munder" : p = "msub";
          }
        else {
          var x = e.base;
          x && x.type === "op" && x.limits && (t.style === _.DISPLAY || x.alwaysHandleSupSub) || x && x.type === "operatorname" && x.alwaysHandleSupSub && (x.limits || t.style === _.DISPLAY) ? p = "mover" : p = "msup";
        }
        return new W.MathNode(p, u);
      } }), et({ type: "atom", htmlBuilder: function(e, t) {
        return L.mathsym(e.text, e.mode, t, ["m" + e.family]);
      }, mathmlBuilder: function(e, t) {
        var r = new W.MathNode("mo", [d0(e.text, e.mode)]);
        if (e.family === "bin") {
          var i = Vr(e, t);
          i === "bold-italic" && r.setAttribute("mathvariant", i);
        } else
          e.family === "punct" ? r.setAttribute("separator", "true") : (e.family === "open" || e.family === "close") && r.setAttribute("stretchy", "false");
        return r;
      } });
      var ua = { mi: "italic", mn: "normal", mtext: "normal" };
      et({ type: "mathord", htmlBuilder: function(e, t) {
        return L.makeOrd(e, t, "mathord");
      }, mathmlBuilder: function(e, t) {
        var r = new W.MathNode("mi", [d0(e.text, e.mode, t)]), i = Vr(e, t) || "italic";
        return i !== ua[r.type] && r.setAttribute("mathvariant", i), r;
      } }), et({ type: "textord", htmlBuilder: function(e, t) {
        return L.makeOrd(e, t, "textord");
      }, mathmlBuilder: function(e, t) {
        var r = d0(e.text, e.mode, t), i = Vr(e, t) || "normal", a;
        return e.mode === "text" ? a = new W.MathNode("mtext", [r]) : /[0-9]/.test(e.text) ? a = new W.MathNode("mn", [r]) : e.text === "\\prime" ? a = new W.MathNode("mo", [r]) : a = new W.MathNode("mi", [r]), i !== ua[a.type] && a.setAttribute("mathvariant", i), a;
      } });
      var un = { "\\nobreak": "nobreak", "\\allowbreak": "allowbreak" }, on = { " ": {}, "\\ ": {}, "~": { className: "nobreak" }, "\\space": {}, "\\nobreakspace": { className: "nobreak" } };
      et({ type: "spacing", htmlBuilder: function(e, t) {
        if (on.hasOwnProperty(e.text)) {
          var r = on[e.text].className || "";
          if (e.mode === "text") {
            var i = L.makeOrd(e, t, "textord");
            return i.classes.push(r), i;
          } else
            return L.makeSpan(["mspace", r], [L.mathsym(e.text, e.mode, t)], t);
        } else {
          if (un.hasOwnProperty(e.text))
            return L.makeSpan(["mspace", un[e.text]], [], t);
          throw new o('Unknown type of space "' + e.text + '"');
        }
      }, mathmlBuilder: function(e, t) {
        var r;
        if (on.hasOwnProperty(e.text))
          r = new W.MathNode("mtext", [new W.TextNode("\xA0")]);
        else {
          if (un.hasOwnProperty(e.text))
            return new W.MathNode("mspace");
          throw new o('Unknown type of space "' + e.text + '"');
        }
        return r;
      } });
      var oa = function() {
        var e = new W.MathNode("mtd", []);
        return e.setAttribute("width", "50%"), e;
      };
      et({ type: "tag", mathmlBuilder: function(e, t) {
        var r = new W.MathNode("mtable", [new W.MathNode("mtr", [oa(), new W.MathNode("mtd", [P0(e.body, t)]), oa(), new W.MathNode("mtd", [P0(e.tag, t)])])]);
        return r.setAttribute("width", "100%"), r;
      } });
      var sa = { "\\text": void 0, "\\textrm": "textrm", "\\textsf": "textsf", "\\texttt": "texttt", "\\textnormal": "textrm" }, ha = { "\\textbf": "textbf", "\\textmd": "textmd" }, T1 = { "\\textit": "textit", "\\textup": "textup" }, ma = function(e, t) {
        var r = e.font;
        return r ? sa[r] ? t.withTextFontFamily(sa[r]) : ha[r] ? t.withTextFontWeight(ha[r]) : t.withTextFontShape(T1[r]) : t;
      };
      ee({ type: "text", names: ["\\text", "\\textrm", "\\textsf", "\\texttt", "\\textnormal", "\\textbf", "\\textmd", "\\textit", "\\textup"], props: { numArgs: 1, argTypes: ["text"], allowedInArgument: true, allowedInText: true }, handler: function(e, t) {
        var r = e.parser, i = e.funcName, a = t[0];
        return { type: "text", mode: r.mode, body: Ue(a), font: i };
      }, htmlBuilder: function(e, t) {
        var r = ma(e, t), i = $e(e.body, r, true);
        return L.makeSpan(["mord", "text"], i, r);
      }, mathmlBuilder: function(e, t) {
        var r = ma(e, t);
        return P0(e.body, r);
      } }), ee({ type: "underline", names: ["\\underline"], props: { numArgs: 1, allowedInText: true }, handler: function(e, t) {
        var r = e.parser;
        return { type: "underline", mode: r.mode, body: t[0] };
      }, htmlBuilder: function(e, t) {
        var r = Se(e.body, t), i = L.makeLineSpan("underline-line", t), a = t.fontMetrics().defaultRuleThickness, u = L.makeVList({ positionType: "top", positionData: r.height, children: [{ type: "kern", size: a }, { type: "elem", elem: i }, { type: "kern", size: 3 * a }, { type: "elem", elem: r }] }, t);
        return L.makeSpan(["mord", "underline"], [u], t);
      }, mathmlBuilder: function(e, t) {
        var r = new W.MathNode("mo", [new W.TextNode("\u203E")]);
        r.setAttribute("stretchy", "true");
        var i = new W.MathNode("munder", [Ee(e.body, t), r]);
        return i.setAttribute("accentunder", "true"), i;
      } }), ee({ type: "vcenter", names: ["\\vcenter"], props: { numArgs: 1, argTypes: ["original"], allowedInText: false }, handler: function(e, t) {
        var r = e.parser;
        return { type: "vcenter", mode: r.mode, body: t[0] };
      }, htmlBuilder: function(e, t) {
        var r = Se(e.body, t), i = t.fontMetrics().axisHeight, a = 0.5 * (r.height - i - (r.depth + i));
        return L.makeVList({ positionType: "shift", positionData: a, children: [{ type: "elem", elem: r }] }, t);
      }, mathmlBuilder: function(e, t) {
        return new W.MathNode("mpadded", [Ee(e.body, t)], ["vcenter"]);
      } }), ee({ type: "verb", names: ["\\verb"], props: { numArgs: 0, allowedInText: true }, handler: function(e, t, r) {
        throw new o("\\verb ended by end of line instead of matching delimiter");
      }, htmlBuilder: function(e, t) {
        for (var r = ca(e), i = [], a = t.havingStyle(t.style.text()), u = 0; u < r.length; u++) {
          var p = r[u];
          p === "~" && (p = "\\textasciitilde"), i.push(L.makeSymbol(p, "Typewriter-Regular", e.mode, a, ["mord", "texttt"]));
        }
        return L.makeSpan(["mord", "text"].concat(a.sizingClasses(t)), L.tryCombineChars(i), a);
      }, mathmlBuilder: function(e, t) {
        var r = new W.TextNode(ca(e)), i = new W.MathNode("mtext", [r]);
        return i.setAttribute("mathvariant", "monospace"), i;
      } });
      var ca = function(e) {
        return e.body.replace(/ /g, e.star ? "\u2423" : "\xA0");
      }, E1 = gi, V0 = E1, b0 = function() {
        function s(e, t, r) {
          this.lexer = void 0, this.start = void 0, this.end = void 0, this.lexer = e, this.start = t, this.end = r;
        }
        return s.range = function(t, r) {
          return r ? !t || !t.loc || !r.loc || t.loc.lexer !== r.loc.lexer ? null : new s(t.loc.lexer, t.loc.start, r.loc.end) : t && t.loc;
        }, s;
      }(), tt = function() {
        function s(t, r) {
          this.text = void 0, this.loc = void 0, this.noexpand = void 0, this.treatAsRelax = void 0, this.text = t, this.loc = r;
        }
        var e = s.prototype;
        return e.range = function(r, i) {
          return new s(i, b0.range(this, r));
        }, s;
      }(), pa = `[ \r
	]`, D1 = "\\\\[a-zA-Z@]+", F1 = "\\\\[^\uD800-\uDFFF]", N1 = "(" + D1 + ")" + pa + "*", I1 = `\\\\(
|[ \r	]+
?)[ \r	]*`, sn = "[\u0300-\u036F]", L1 = new RegExp(sn + "+$"), q1 = "(" + pa + "+)|" + (I1 + "|") + "([!-\\[\\]-\u2027\u202A-\uD7FF\uF900-\uFFFF]" + (sn + "*") + "|[\uD800-\uDBFF][\uDC00-\uDFFF]" + (sn + "*") + "|\\\\verb\\*([^]).*?\\4|\\\\verb([^*a-zA-Z]).*?\\5" + ("|" + N1) + ("|" + F1 + ")"), fa = function() {
        function s(t, r) {
          this.input = void 0, this.settings = void 0, this.tokenRegex = void 0, this.catcodes = void 0, this.input = t, this.settings = r, this.tokenRegex = new RegExp(q1, "g"), this.catcodes = { "%": 14, "~": 13 };
        }
        var e = s.prototype;
        return e.setCatcode = function(r, i) {
          this.catcodes[r] = i;
        }, e.lex = function() {
          var r = this.input, i = this.tokenRegex.lastIndex;
          if (i === r.length)
            return new tt("EOF", new b0(this, i, i));
          var a = this.tokenRegex.exec(r);
          if (a === null || a.index !== i)
            throw new o("Unexpected character: '" + r[i] + "'", new tt(r[i], new b0(this, i, i + 1)));
          var u = a[6] || a[3] || (a[2] ? "\\ " : " ");
          if (this.catcodes[u] === 14) {
            var p = r.indexOf(`
`, this.tokenRegex.lastIndex);
            return p === -1 ? (this.tokenRegex.lastIndex = r.length, this.settings.reportNonstrict("commentAtEnd", "% comment has no terminating newline; LaTeX would fail because of commenting the end of math mode (e.g. $)")) : this.tokenRegex.lastIndex = p + 1, this.lex();
          }
          return new tt(u, new b0(this, i, this.tokenRegex.lastIndex));
        }, s;
      }(), O1 = function() {
        function s(t, r) {
          t === void 0 && (t = {}), r === void 0 && (r = {}), this.current = void 0, this.builtins = void 0, this.undefStack = void 0, this.current = r, this.builtins = t, this.undefStack = [];
        }
        var e = s.prototype;
        return e.beginGroup = function() {
          this.undefStack.push({});
        }, e.endGroup = function() {
          if (this.undefStack.length === 0)
            throw new o("Unbalanced namespace destruction: attempt to pop global namespace; please report this as a bug");
          var r = this.undefStack.pop();
          for (var i in r)
            r.hasOwnProperty(i) && (r[i] === void 0 ? delete this.current[i] : this.current[i] = r[i]);
        }, e.endGroups = function() {
          for (; this.undefStack.length > 0; )
            this.endGroup();
        }, e.has = function(r) {
          return this.current.hasOwnProperty(r) || this.builtins.hasOwnProperty(r);
        }, e.get = function(r) {
          return this.current.hasOwnProperty(r) ? this.current[r] : this.builtins[r];
        }, e.set = function(r, i, a) {
          if (a === void 0 && (a = false), a) {
            for (var u = 0; u < this.undefStack.length; u++)
              delete this.undefStack[u][r];
            this.undefStack.length > 0 && (this.undefStack[this.undefStack.length - 1][r] = i);
          } else {
            var p = this.undefStack[this.undefStack.length - 1];
            p && !p.hasOwnProperty(r) && (p[r] = this.current[r]);
          }
          this.current[r] = i;
        }, s;
      }(), R1 = ra, H1 = R1;
      b("\\noexpand", function(s) {
        var e = s.popToken();
        return s.isExpandable(e.text) && (e.noexpand = true, e.treatAsRelax = true), { tokens: [e], numArgs: 0 };
      }), b("\\expandafter", function(s) {
        var e = s.popToken();
        return s.expandOnce(true), { tokens: [e], numArgs: 0 };
      }), b("\\@firstoftwo", function(s) {
        var e = s.consumeArgs(2);
        return { tokens: e[0], numArgs: 0 };
      }), b("\\@secondoftwo", function(s) {
        var e = s.consumeArgs(2);
        return { tokens: e[1], numArgs: 0 };
      }), b("\\@ifnextchar", function(s) {
        var e = s.consumeArgs(3);
        s.consumeSpaces();
        var t = s.future();
        return e[0].length === 1 && e[0][0].text === t.text ? { tokens: e[1], numArgs: 0 } : { tokens: e[2], numArgs: 0 };
      }), b("\\@ifstar", "\\@ifnextchar *{\\@firstoftwo{#1}}"), b("\\TextOrMath", function(s) {
        var e = s.consumeArgs(2);
        return s.mode === "text" ? { tokens: e[0], numArgs: 0 } : { tokens: e[1], numArgs: 0 };
      });
      var da = { 0: 0, 1: 1, 2: 2, 3: 3, 4: 4, 5: 5, 6: 6, 7: 7, 8: 8, 9: 9, a: 10, A: 10, b: 11, B: 11, c: 12, C: 12, d: 13, D: 13, e: 14, E: 14, f: 15, F: 15 };
      b("\\char", function(s) {
        var e = s.popToken(), t, r = "";
        if (e.text === "'")
          t = 8, e = s.popToken();
        else if (e.text === '"')
          t = 16, e = s.popToken();
        else if (e.text === "`")
          if (e = s.popToken(), e.text[0] === "\\")
            r = e.text.charCodeAt(1);
          else {
            if (e.text === "EOF")
              throw new o("\\char` missing argument");
            r = e.text.charCodeAt(0);
          }
        else
          t = 10;
        if (t) {
          if (r = da[e.text], r == null || r >= t)
            throw new o("Invalid base-" + t + " digit " + e.text);
          for (var i; (i = da[s.future().text]) != null && i < t; )
            r *= t, r += i, s.popToken();
        }
        return "\\@char{" + r + "}";
      });
      var hn = function(e, t, r) {
        var i = e.consumeArg().tokens;
        if (i.length !== 1)
          throw new o("\\newcommand's first argument must be a macro name");
        var a = i[0].text, u = e.isDefined(a);
        if (u && !t)
          throw new o("\\newcommand{" + a + "} attempting to redefine " + (a + "; use \\renewcommand"));
        if (!u && !r)
          throw new o("\\renewcommand{" + a + "} when command " + a + " does not yet exist; use \\newcommand");
        var p = 0;
        if (i = e.consumeArg().tokens, i.length === 1 && i[0].text === "[") {
          for (var x = "", y = e.expandNextToken(); y.text !== "]" && y.text !== "EOF"; )
            x += y.text, y = e.expandNextToken();
          if (!x.match(/^\s*[0-9]+\s*$/))
            throw new o("Invalid number of arguments: " + x);
          p = parseInt(x), i = e.consumeArg().tokens;
        }
        return e.macros.set(a, { tokens: i, numArgs: p }), "";
      };
      b("\\newcommand", function(s) {
        return hn(s, false, true);
      }), b("\\renewcommand", function(s) {
        return hn(s, true, false);
      }), b("\\providecommand", function(s) {
        return hn(s, true, true);
      }), b("\\message", function(s) {
        var e = s.consumeArgs(1)[0];
        return console.log(e.reverse().map(function(t) {
          return t.text;
        }).join("")), "";
      }), b("\\errmessage", function(s) {
        var e = s.consumeArgs(1)[0];
        return console.error(e.reverse().map(function(t) {
          return t.text;
        }).join("")), "";
      }), b("\\show", function(s) {
        var e = s.popToken(), t = e.text;
        return console.log(e, s.macros.get(t), V0[t], ke.math[t], ke.text[t]), "";
      }), b("\\bgroup", "{"), b("\\egroup", "}"), b("~", "\\nobreakspace"), b("\\lq", "`"), b("\\rq", "'"), b("\\aa", "\\r a"), b("\\AA", "\\r A"), b("\\textcopyright", "\\html@mathml{\\textcircled{c}}{\\char`\xA9}"), b("\\copyright", "\\TextOrMath{\\textcopyright}{\\text{\\textcopyright}}"), b("\\textregistered", "\\html@mathml{\\textcircled{\\scriptsize R}}{\\char`\xAE}"), b("\u212C", "\\mathscr{B}"), b("\u2130", "\\mathscr{E}"), b("\u2131", "\\mathscr{F}"), b("\u210B", "\\mathscr{H}"), b("\u2110", "\\mathscr{I}"), b("\u2112", "\\mathscr{L}"), b("\u2133", "\\mathscr{M}"), b("\u211B", "\\mathscr{R}"), b("\u212D", "\\mathfrak{C}"), b("\u210C", "\\mathfrak{H}"), b("\u2128", "\\mathfrak{Z}"), b("\\Bbbk", "\\Bbb{k}"), b("\xB7", "\\cdotp"), b("\\llap", "\\mathllap{\\textrm{#1}}"), b("\\rlap", "\\mathrlap{\\textrm{#1}}"), b("\\clap", "\\mathclap{\\textrm{#1}}"), b("\\mathstrut", "\\vphantom{(}"), b("\\underbar", "\\underline{\\text{#1}}"), b("\\not", '\\html@mathml{\\mathrel{\\mathrlap\\@not}}{\\char"338}'), b("\\neq", "\\html@mathml{\\mathrel{\\not=}}{\\mathrel{\\char`\u2260}}"), b("\\ne", "\\neq"), b("\u2260", "\\neq"), b("\\notin", "\\html@mathml{\\mathrel{{\\in}\\mathllap{/\\mskip1mu}}}{\\mathrel{\\char`\u2209}}"), b("\u2209", "\\notin"), b("\u2258", "\\html@mathml{\\mathrel{=\\kern{-1em}\\raisebox{0.4em}{$\\scriptsize\\frown$}}}{\\mathrel{\\char`\u2258}}"), b("\u2259", "\\html@mathml{\\stackrel{\\tiny\\wedge}{=}}{\\mathrel{\\char`\u2258}}"), b("\u225A", "\\html@mathml{\\stackrel{\\tiny\\vee}{=}}{\\mathrel{\\char`\u225A}}"), b("\u225B", "\\html@mathml{\\stackrel{\\scriptsize\\star}{=}}{\\mathrel{\\char`\u225B}}"), b("\u225D", "\\html@mathml{\\stackrel{\\tiny\\mathrm{def}}{=}}{\\mathrel{\\char`\u225D}}"), b("\u225E", "\\html@mathml{\\stackrel{\\tiny\\mathrm{m}}{=}}{\\mathrel{\\char`\u225E}}"), b("\u225F", "\\html@mathml{\\stackrel{\\tiny?}{=}}{\\mathrel{\\char`\u225F}}"), b("\u27C2", "\\perp"), b("\u203C", "\\mathclose{!\\mkern-0.8mu!}"), b("\u220C", "\\notni"), b("\u231C", "\\ulcorner"), b("\u231D", "\\urcorner"), b("\u231E", "\\llcorner"), b("\u231F", "\\lrcorner"), b("\xA9", "\\copyright"), b("\xAE", "\\textregistered"), b("\uFE0F", "\\textregistered"), b("\\ulcorner", '\\html@mathml{\\@ulcorner}{\\mathop{\\char"231c}}'), b("\\urcorner", '\\html@mathml{\\@urcorner}{\\mathop{\\char"231d}}'), b("\\llcorner", '\\html@mathml{\\@llcorner}{\\mathop{\\char"231e}}'), b("\\lrcorner", '\\html@mathml{\\@lrcorner}{\\mathop{\\char"231f}}'), b("\\vdots", "\\mathord{\\varvdots\\rule{0pt}{15pt}}"), b("\u22EE", "\\vdots"), b("\\varGamma", "\\mathit{\\Gamma}"), b("\\varDelta", "\\mathit{\\Delta}"), b("\\varTheta", "\\mathit{\\Theta}"), b("\\varLambda", "\\mathit{\\Lambda}"), b("\\varXi", "\\mathit{\\Xi}"), b("\\varPi", "\\mathit{\\Pi}"), b("\\varSigma", "\\mathit{\\Sigma}"), b("\\varUpsilon", "\\mathit{\\Upsilon}"), b("\\varPhi", "\\mathit{\\Phi}"), b("\\varPsi", "\\mathit{\\Psi}"), b("\\varOmega", "\\mathit{\\Omega}"), b("\\substack", "\\begin{subarray}{c}#1\\end{subarray}"), b("\\colon", "\\nobreak\\mskip2mu\\mathpunct{}\\mathchoice{\\mkern-3mu}{\\mkern-3mu}{}{}{:}\\mskip6mu"), b("\\boxed", "\\fbox{$\\displaystyle{#1}$}"), b("\\iff", "\\DOTSB\\;\\Longleftrightarrow\\;"), b("\\implies", "\\DOTSB\\;\\Longrightarrow\\;"), b("\\impliedby", "\\DOTSB\\;\\Longleftarrow\\;");
      var ga = { ",": "\\dotsc", "\\not": "\\dotsb", "+": "\\dotsb", "=": "\\dotsb", "<": "\\dotsb", ">": "\\dotsb", "-": "\\dotsb", "*": "\\dotsb", ":": "\\dotsb", "\\DOTSB": "\\dotsb", "\\coprod": "\\dotsb", "\\bigvee": "\\dotsb", "\\bigwedge": "\\dotsb", "\\biguplus": "\\dotsb", "\\bigcap": "\\dotsb", "\\bigcup": "\\dotsb", "\\prod": "\\dotsb", "\\sum": "\\dotsb", "\\bigotimes": "\\dotsb", "\\bigoplus": "\\dotsb", "\\bigodot": "\\dotsb", "\\bigsqcup": "\\dotsb", "\\And": "\\dotsb", "\\longrightarrow": "\\dotsb", "\\Longrightarrow": "\\dotsb", "\\longleftarrow": "\\dotsb", "\\Longleftarrow": "\\dotsb", "\\longleftrightarrow": "\\dotsb", "\\Longleftrightarrow": "\\dotsb", "\\mapsto": "\\dotsb", "\\longmapsto": "\\dotsb", "\\hookrightarrow": "\\dotsb", "\\doteq": "\\dotsb", "\\mathbin": "\\dotsb", "\\mathrel": "\\dotsb", "\\relbar": "\\dotsb", "\\Relbar": "\\dotsb", "\\xrightarrow": "\\dotsb", "\\xleftarrow": "\\dotsb", "\\DOTSI": "\\dotsi", "\\int": "\\dotsi", "\\oint": "\\dotsi", "\\iint": "\\dotsi", "\\iiint": "\\dotsi", "\\iiiint": "\\dotsi", "\\idotsint": "\\dotsi", "\\DOTSX": "\\dotsx" };
      b("\\dots", function(s) {
        var e = "\\dotso", t = s.expandAfterFuture().text;
        return t in ga ? e = ga[t] : (t.substr(0, 4) === "\\not" || t in ke.math && H.contains(["bin", "rel"], ke.math[t].group)) && (e = "\\dotsb"), e;
      });
      var mn = { ")": true, "]": true, "\\rbrack": true, "\\}": true, "\\rbrace": true, "\\rangle": true, "\\rceil": true, "\\rfloor": true, "\\rgroup": true, "\\rmoustache": true, "\\right": true, "\\bigr": true, "\\biggr": true, "\\Bigr": true, "\\Biggr": true, $: true, ";": true, ".": true, ",": true };
      b("\\dotso", function(s) {
        var e = s.future().text;
        return e in mn ? "\\ldots\\," : "\\ldots";
      }), b("\\dotsc", function(s) {
        var e = s.future().text;
        return e in mn && e !== "," ? "\\ldots\\," : "\\ldots";
      }), b("\\cdots", function(s) {
        var e = s.future().text;
        return e in mn ? "\\@cdots\\," : "\\@cdots";
      }), b("\\dotsb", "\\cdots"), b("\\dotsm", "\\cdots"), b("\\dotsi", "\\!\\cdots"), b("\\dotsx", "\\ldots\\,"), b("\\DOTSI", "\\relax"), b("\\DOTSB", "\\relax"), b("\\DOTSX", "\\relax"), b("\\tmspace", "\\TextOrMath{\\kern#1#3}{\\mskip#1#2}\\relax"), b("\\,", "\\tmspace+{3mu}{.1667em}"), b("\\thinspace", "\\,"), b("\\>", "\\mskip{4mu}"), b("\\:", "\\tmspace+{4mu}{.2222em}"), b("\\medspace", "\\:"), b("\\;", "\\tmspace+{5mu}{.2777em}"), b("\\thickspace", "\\;"), b("\\!", "\\tmspace-{3mu}{.1667em}"), b("\\negthinspace", "\\!"), b("\\negmedspace", "\\tmspace-{4mu}{.2222em}"), b("\\negthickspace", "\\tmspace-{5mu}{.277em}"), b("\\enspace", "\\kern.5em "), b("\\enskip", "\\hskip.5em\\relax"), b("\\quad", "\\hskip1em\\relax"), b("\\qquad", "\\hskip2em\\relax"), b("\\tag", "\\@ifstar\\tag@literal\\tag@paren"), b("\\tag@paren", "\\tag@literal{({#1})}"), b("\\tag@literal", function(s) {
        if (s.macros.get("\\df@tag"))
          throw new o("Multiple \\tag");
        return "\\gdef\\df@tag{\\text{#1}}";
      }), b("\\bmod", "\\mathchoice{\\mskip1mu}{\\mskip1mu}{\\mskip5mu}{\\mskip5mu}\\mathbin{\\rm mod}\\mathchoice{\\mskip1mu}{\\mskip1mu}{\\mskip5mu}{\\mskip5mu}"), b("\\pod", "\\allowbreak\\mathchoice{\\mkern18mu}{\\mkern8mu}{\\mkern8mu}{\\mkern8mu}(#1)"), b("\\pmod", "\\pod{{\\rm mod}\\mkern6mu#1}"), b("\\mod", "\\allowbreak\\mathchoice{\\mkern18mu}{\\mkern12mu}{\\mkern12mu}{\\mkern12mu}{\\rm mod}\\,\\,#1"), b("\\pmb", "\\html@mathml{\\@binrel{#1}{\\mathrlap{#1}\\kern0.5px#1}}{\\mathbf{#1}}"), b("\\newline", "\\\\\\relax"), b("\\TeX", "\\textrm{\\html@mathml{T\\kern-.1667em\\raisebox{-.5ex}{E}\\kern-.125emX}{TeX}}");
      var va = X(p0["Main-Regular"]["T".charCodeAt(0)][1] - 0.7 * p0["Main-Regular"]["A".charCodeAt(0)][1]);
      b("\\LaTeX", "\\textrm{\\html@mathml{" + ("L\\kern-.36em\\raisebox{" + va + "}{\\scriptstyle A}") + "\\kern-.15em\\TeX}{LaTeX}}"), b("\\KaTeX", "\\textrm{\\html@mathml{" + ("K\\kern-.17em\\raisebox{" + va + "}{\\scriptstyle A}") + "\\kern-.15em\\TeX}{KaTeX}}"), b("\\hspace", "\\@ifstar\\@hspacer\\@hspace"), b("\\@hspace", "\\hskip #1\\relax"), b("\\@hspacer", "\\rule{0pt}{0pt}\\hskip #1\\relax"), b("\\ordinarycolon", ":"), b("\\vcentcolon", "\\mathrel{\\mathop\\ordinarycolon}"), b("\\dblcolon", '\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-.9mu}\\vcentcolon}}{\\mathop{\\char"2237}}'), b("\\coloneqq", '\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-1.2mu}=}}{\\mathop{\\char"2254}}'), b("\\Coloneqq", '\\html@mathml{\\mathrel{\\dblcolon\\mathrel{\\mkern-1.2mu}=}}{\\mathop{\\char"2237\\char"3d}}'), b("\\coloneq", '\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-1.2mu}\\mathrel{-}}}{\\mathop{\\char"3a\\char"2212}}'), b("\\Coloneq", '\\html@mathml{\\mathrel{\\dblcolon\\mathrel{\\mkern-1.2mu}\\mathrel{-}}}{\\mathop{\\char"2237\\char"2212}}'), b("\\eqqcolon", '\\html@mathml{\\mathrel{=\\mathrel{\\mkern-1.2mu}\\vcentcolon}}{\\mathop{\\char"2255}}'), b("\\Eqqcolon", '\\html@mathml{\\mathrel{=\\mathrel{\\mkern-1.2mu}\\dblcolon}}{\\mathop{\\char"3d\\char"2237}}'), b("\\eqcolon", '\\html@mathml{\\mathrel{\\mathrel{-}\\mathrel{\\mkern-1.2mu}\\vcentcolon}}{\\mathop{\\char"2239}}'), b("\\Eqcolon", '\\html@mathml{\\mathrel{\\mathrel{-}\\mathrel{\\mkern-1.2mu}\\dblcolon}}{\\mathop{\\char"2212\\char"2237}}'), b("\\colonapprox", '\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-1.2mu}\\approx}}{\\mathop{\\char"3a\\char"2248}}'), b("\\Colonapprox", '\\html@mathml{\\mathrel{\\dblcolon\\mathrel{\\mkern-1.2mu}\\approx}}{\\mathop{\\char"2237\\char"2248}}'), b("\\colonsim", '\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-1.2mu}\\sim}}{\\mathop{\\char"3a\\char"223c}}'), b("\\Colonsim", '\\html@mathml{\\mathrel{\\dblcolon\\mathrel{\\mkern-1.2mu}\\sim}}{\\mathop{\\char"2237\\char"223c}}'), b("\u2237", "\\dblcolon"), b("\u2239", "\\eqcolon"), b("\u2254", "\\coloneqq"), b("\u2255", "\\eqqcolon"), b("\u2A74", "\\Coloneqq"), b("\\ratio", "\\vcentcolon"), b("\\coloncolon", "\\dblcolon"), b("\\colonequals", "\\coloneqq"), b("\\coloncolonequals", "\\Coloneqq"), b("\\equalscolon", "\\eqqcolon"), b("\\equalscoloncolon", "\\Eqqcolon"), b("\\colonminus", "\\coloneq"), b("\\coloncolonminus", "\\Coloneq"), b("\\minuscolon", "\\eqcolon"), b("\\minuscoloncolon", "\\Eqcolon"), b("\\coloncolonapprox", "\\Colonapprox"), b("\\coloncolonsim", "\\Colonsim"), b("\\simcolon", "\\mathrel{\\sim\\mathrel{\\mkern-1.2mu}\\vcentcolon}"), b("\\simcoloncolon", "\\mathrel{\\sim\\mathrel{\\mkern-1.2mu}\\dblcolon}"), b("\\approxcolon", "\\mathrel{\\approx\\mathrel{\\mkern-1.2mu}\\vcentcolon}"), b("\\approxcoloncolon", "\\mathrel{\\approx\\mathrel{\\mkern-1.2mu}\\dblcolon}"), b("\\notni", "\\html@mathml{\\not\\ni}{\\mathrel{\\char`\u220C}}"), b("\\limsup", "\\DOTSB\\operatorname*{lim\\,sup}"), b("\\liminf", "\\DOTSB\\operatorname*{lim\\,inf}"), b("\\injlim", "\\DOTSB\\operatorname*{inj\\,lim}"), b("\\projlim", "\\DOTSB\\operatorname*{proj\\,lim}"), b("\\varlimsup", "\\DOTSB\\operatorname*{\\overline{lim}}"), b("\\varliminf", "\\DOTSB\\operatorname*{\\underline{lim}}"), b("\\varinjlim", "\\DOTSB\\operatorname*{\\underrightarrow{lim}}"), b("\\varprojlim", "\\DOTSB\\operatorname*{\\underleftarrow{lim}}"), b("\\gvertneqq", "\\html@mathml{\\@gvertneqq}{\u2269}"), b("\\lvertneqq", "\\html@mathml{\\@lvertneqq}{\u2268}"), b("\\ngeqq", "\\html@mathml{\\@ngeqq}{\u2271}"), b("\\ngeqslant", "\\html@mathml{\\@ngeqslant}{\u2271}"), b("\\nleqq", "\\html@mathml{\\@nleqq}{\u2270}"), b("\\nleqslant", "\\html@mathml{\\@nleqslant}{\u2270}"), b("\\nshortmid", "\\html@mathml{\\@nshortmid}{\u2224}"), b("\\nshortparallel", "\\html@mathml{\\@nshortparallel}{\u2226}"), b("\\nsubseteqq", "\\html@mathml{\\@nsubseteqq}{\u2288}"), b("\\nsupseteqq", "\\html@mathml{\\@nsupseteqq}{\u2289}"), b("\\varsubsetneq", "\\html@mathml{\\@varsubsetneq}{\u228A}"), b("\\varsubsetneqq", "\\html@mathml{\\@varsubsetneqq}{\u2ACB}"), b("\\varsupsetneq", "\\html@mathml{\\@varsupsetneq}{\u228B}"), b("\\varsupsetneqq", "\\html@mathml{\\@varsupsetneqq}{\u2ACC}"), b("\\imath", "\\html@mathml{\\@imath}{\u0131}"), b("\\jmath", "\\html@mathml{\\@jmath}{\u0237}"), b("\\llbracket", "\\html@mathml{\\mathopen{[\\mkern-3.2mu[}}{\\mathopen{\\char`\u27E6}}"), b("\\rrbracket", "\\html@mathml{\\mathclose{]\\mkern-3.2mu]}}{\\mathclose{\\char`\u27E7}}"), b("\u27E6", "\\llbracket"), b("\u27E7", "\\rrbracket"), b("\\lBrace", "\\html@mathml{\\mathopen{\\{\\mkern-3.2mu[}}{\\mathopen{\\char`\u2983}}"), b("\\rBrace", "\\html@mathml{\\mathclose{]\\mkern-3.2mu\\}}}{\\mathclose{\\char`\u2984}}"), b("\u2983", "\\lBrace"), b("\u2984", "\\rBrace"), b("\\minuso", "\\mathbin{\\html@mathml{{\\mathrlap{\\mathchoice{\\kern{0.145em}}{\\kern{0.145em}}{\\kern{0.1015em}}{\\kern{0.0725em}}\\circ}{-}}}{\\char`\u29B5}}"), b("\u29B5", "\\minuso"), b("\\darr", "\\downarrow"), b("\\dArr", "\\Downarrow"), b("\\Darr", "\\Downarrow"), b("\\lang", "\\langle"), b("\\rang", "\\rangle"), b("\\uarr", "\\uparrow"), b("\\uArr", "\\Uparrow"), b("\\Uarr", "\\Uparrow"), b("\\N", "\\mathbb{N}"), b("\\R", "\\mathbb{R}"), b("\\Z", "\\mathbb{Z}"), b("\\alef", "\\aleph"), b("\\alefsym", "\\aleph"), b("\\Alpha", "\\mathrm{A}"), b("\\Beta", "\\mathrm{B}"), b("\\bull", "\\bullet"), b("\\Chi", "\\mathrm{X}"), b("\\clubs", "\\clubsuit"), b("\\cnums", "\\mathbb{C}"), b("\\Complex", "\\mathbb{C}"), b("\\Dagger", "\\ddagger"), b("\\diamonds", "\\diamondsuit"), b("\\empty", "\\emptyset"), b("\\Epsilon", "\\mathrm{E}"), b("\\Eta", "\\mathrm{H}"), b("\\exist", "\\exists"), b("\\harr", "\\leftrightarrow"), b("\\hArr", "\\Leftrightarrow"), b("\\Harr", "\\Leftrightarrow"), b("\\hearts", "\\heartsuit"), b("\\image", "\\Im"), b("\\infin", "\\infty"), b("\\Iota", "\\mathrm{I}"), b("\\isin", "\\in"), b("\\Kappa", "\\mathrm{K}"), b("\\larr", "\\leftarrow"), b("\\lArr", "\\Leftarrow"), b("\\Larr", "\\Leftarrow"), b("\\lrarr", "\\leftrightarrow"), b("\\lrArr", "\\Leftrightarrow"), b("\\Lrarr", "\\Leftrightarrow"), b("\\Mu", "\\mathrm{M}"), b("\\natnums", "\\mathbb{N}"), b("\\Nu", "\\mathrm{N}"), b("\\Omicron", "\\mathrm{O}"), b("\\plusmn", "\\pm"), b("\\rarr", "\\rightarrow"), b("\\rArr", "\\Rightarrow"), b("\\Rarr", "\\Rightarrow"), b("\\real", "\\Re"), b("\\reals", "\\mathbb{R}"), b("\\Reals", "\\mathbb{R}"), b("\\Rho", "\\mathrm{P}"), b("\\sdot", "\\cdot"), b("\\sect", "\\S"), b("\\spades", "\\spadesuit"), b("\\sub", "\\subset"), b("\\sube", "\\subseteq"), b("\\supe", "\\supseteq"), b("\\Tau", "\\mathrm{T}"), b("\\thetasym", "\\vartheta"), b("\\weierp", "\\wp"), b("\\Zeta", "\\mathrm{Z}"), b("\\argmin", "\\DOTSB\\operatorname*{arg\\,min}"), b("\\argmax", "\\DOTSB\\operatorname*{arg\\,max}"), b("\\plim", "\\DOTSB\\mathop{\\operatorname{plim}}\\limits"), b("\\bra", "\\mathinner{\\langle{#1}|}"), b("\\ket", "\\mathinner{|{#1}\\rangle}"), b("\\braket", "\\mathinner{\\langle{#1}\\rangle}"), b("\\Bra", "\\left\\langle#1\\right|"), b("\\Ket", "\\left|#1\\right\\rangle"), b("\\angln", "{\\angl n}"), b("\\blue", "\\textcolor{##6495ed}{#1}"), b("\\orange", "\\textcolor{##ffa500}{#1}"), b("\\pink", "\\textcolor{##ff00af}{#1}"), b("\\red", "\\textcolor{##df0030}{#1}"), b("\\green", "\\textcolor{##28ae7b}{#1}"), b("\\gray", "\\textcolor{gray}{#1}"), b("\\purple", "\\textcolor{##9d38bd}{#1}"), b("\\blueA", "\\textcolor{##ccfaff}{#1}"), b("\\blueB", "\\textcolor{##80f6ff}{#1}"), b("\\blueC", "\\textcolor{##63d9ea}{#1}"), b("\\blueD", "\\textcolor{##11accd}{#1}"), b("\\blueE", "\\textcolor{##0c7f99}{#1}"), b("\\tealA", "\\textcolor{##94fff5}{#1}"), b("\\tealB", "\\textcolor{##26edd5}{#1}"), b("\\tealC", "\\textcolor{##01d1c1}{#1}"), b("\\tealD", "\\textcolor{##01a995}{#1}"), b("\\tealE", "\\textcolor{##208170}{#1}"), b("\\greenA", "\\textcolor{##b6ffb0}{#1}"), b("\\greenB", "\\textcolor{##8af281}{#1}"), b("\\greenC", "\\textcolor{##74cf70}{#1}"), b("\\greenD", "\\textcolor{##1fab54}{#1}"), b("\\greenE", "\\textcolor{##0d923f}{#1}"), b("\\goldA", "\\textcolor{##ffd0a9}{#1}"), b("\\goldB", "\\textcolor{##ffbb71}{#1}"), b("\\goldC", "\\textcolor{##ff9c39}{#1}"), b("\\goldD", "\\textcolor{##e07d10}{#1}"), b("\\goldE", "\\textcolor{##a75a05}{#1}"), b("\\redA", "\\textcolor{##fca9a9}{#1}"), b("\\redB", "\\textcolor{##ff8482}{#1}"), b("\\redC", "\\textcolor{##f9685d}{#1}"), b("\\redD", "\\textcolor{##e84d39}{#1}"), b("\\redE", "\\textcolor{##bc2612}{#1}"), b("\\maroonA", "\\textcolor{##ffbde0}{#1}"), b("\\maroonB", "\\textcolor{##ff92c6}{#1}"), b("\\maroonC", "\\textcolor{##ed5fa6}{#1}"), b("\\maroonD", "\\textcolor{##ca337c}{#1}"), b("\\maroonE", "\\textcolor{##9e034e}{#1}"), b("\\purpleA", "\\textcolor{##ddd7ff}{#1}"), b("\\purpleB", "\\textcolor{##c6b9fc}{#1}"), b("\\purpleC", "\\textcolor{##aa87ff}{#1}"), b("\\purpleD", "\\textcolor{##7854ab}{#1}"), b("\\purpleE", "\\textcolor{##543b78}{#1}"), b("\\mintA", "\\textcolor{##f5f9e8}{#1}"), b("\\mintB", "\\textcolor{##edf2df}{#1}"), b("\\mintC", "\\textcolor{##e0e5cc}{#1}"), b("\\grayA", "\\textcolor{##f6f7f7}{#1}"), b("\\grayB", "\\textcolor{##f0f1f2}{#1}"), b("\\grayC", "\\textcolor{##e3e5e6}{#1}"), b("\\grayD", "\\textcolor{##d6d8da}{#1}"), b("\\grayE", "\\textcolor{##babec2}{#1}"), b("\\grayF", "\\textcolor{##888d93}{#1}"), b("\\grayG", "\\textcolor{##626569}{#1}"), b("\\grayH", "\\textcolor{##3b3e40}{#1}"), b("\\grayI", "\\textcolor{##21242c}{#1}"), b("\\kaBlue", "\\textcolor{##314453}{#1}"), b("\\kaGreen", "\\textcolor{##71B307}{#1}");
      var xa = { "\\relax": true, "^": true, _: true, "\\limits": true, "\\nolimits": true }, P1 = function() {
        function s(t, r, i) {
          this.settings = void 0, this.expansionCount = void 0, this.lexer = void 0, this.macros = void 0, this.stack = void 0, this.mode = void 0, this.settings = r, this.expansionCount = 0, this.feed(t), this.macros = new O1(H1, r.macros), this.mode = i, this.stack = [];
        }
        var e = s.prototype;
        return e.feed = function(r) {
          this.lexer = new fa(r, this.settings);
        }, e.switchMode = function(r) {
          this.mode = r;
        }, e.beginGroup = function() {
          this.macros.beginGroup();
        }, e.endGroup = function() {
          this.macros.endGroup();
        }, e.endGroups = function() {
          this.macros.endGroups();
        }, e.future = function() {
          return this.stack.length === 0 && this.pushToken(this.lexer.lex()), this.stack[this.stack.length - 1];
        }, e.popToken = function() {
          return this.future(), this.stack.pop();
        }, e.pushToken = function(r) {
          this.stack.push(r);
        }, e.pushTokens = function(r) {
          var i;
          (i = this.stack).push.apply(i, r);
        }, e.scanArgument = function(r) {
          var i, a, u;
          if (r) {
            if (this.consumeSpaces(), this.future().text !== "[")
              return null;
            i = this.popToken();
            var p = this.consumeArg(["]"]);
            u = p.tokens, a = p.end;
          } else {
            var x = this.consumeArg();
            u = x.tokens, i = x.start, a = x.end;
          }
          return this.pushToken(new tt("EOF", a.loc)), this.pushTokens(u), i.range(a, "");
        }, e.consumeSpaces = function() {
          for (; ; ) {
            var r = this.future();
            if (r.text === " ")
              this.stack.pop();
            else
              break;
          }
        }, e.consumeArg = function(r) {
          var i = [], a = r && r.length > 0;
          a || this.consumeSpaces();
          var u = this.future(), p, x = 0, y = 0;
          do {
            if (p = this.popToken(), i.push(p), p.text === "{")
              ++x;
            else if (p.text === "}") {
              if (--x, x === -1)
                throw new o("Extra }", p);
            } else if (p.text === "EOF")
              throw new o("Unexpected end of input in a macro argument, expected '" + (r && a ? r[y] : "}") + "'", p);
            if (r && a)
              if ((x === 0 || x === 1 && r[y] === "{") && p.text === r[y]) {
                if (++y, y === r.length) {
                  i.splice(-y, y);
                  break;
                }
              } else
                y = 0;
          } while (x !== 0 || a);
          return u.text === "{" && i[i.length - 1].text === "}" && (i.pop(), i.shift()), i.reverse(), { tokens: i, start: u, end: p };
        }, e.consumeArgs = function(r, i) {
          if (i) {
            if (i.length !== r + 1)
              throw new o("The length of delimiters doesn't match the number of args!");
            for (var a = i[0], u = 0; u < a.length; u++) {
              var p = this.popToken();
              if (a[u] !== p.text)
                throw new o("Use of the macro doesn't match its definition", p);
            }
          }
          for (var x = [], y = 0; y < r; y++)
            x.push(this.consumeArg(i && i[y + 1]).tokens);
          return x;
        }, e.expandOnce = function(r) {
          var i = this.popToken(), a = i.text, u = i.noexpand ? null : this._getExpansion(a);
          if (u == null || r && u.unexpandable) {
            if (r && u == null && a[0] === "\\" && !this.isDefined(a))
              throw new o("Undefined control sequence: " + a);
            return this.pushToken(i), i;
          }
          if (this.expansionCount++, this.expansionCount > this.settings.maxExpand)
            throw new o("Too many expansions: infinite loop or need to increase maxExpand setting");
          var p = u.tokens, x = this.consumeArgs(u.numArgs, u.delimiters);
          if (u.numArgs) {
            p = p.slice();
            for (var y = p.length - 1; y >= 0; --y) {
              var z = p[y];
              if (z.text === "#") {
                if (y === 0)
                  throw new o("Incomplete placeholder at end of macro body", z);
                if (z = p[--y], z.text === "#")
                  p.splice(y + 1, 1);
                else if (/^[1-9]$/.test(z.text)) {
                  var I;
                  (I = p).splice.apply(I, [y, 2].concat(x[+z.text - 1]));
                } else
                  throw new o("Not a valid argument number", z);
              }
            }
          }
          return this.pushTokens(p), p;
        }, e.expandAfterFuture = function() {
          return this.expandOnce(), this.future();
        }, e.expandNextToken = function() {
          for (; ; ) {
            var r = this.expandOnce();
            if (r instanceof tt)
              if (r.text === "\\relax" || r.treatAsRelax)
                this.stack.pop();
              else
                return this.stack.pop();
          }
          throw new Error();
        }, e.expandMacro = function(r) {
          return this.macros.has(r) ? this.expandTokens([new tt(r)]) : void 0;
        }, e.expandTokens = function(r) {
          var i = [], a = this.stack.length;
          for (this.pushTokens(r); this.stack.length > a; ) {
            var u = this.expandOnce(true);
            u instanceof tt && (u.treatAsRelax && (u.noexpand = false, u.treatAsRelax = false), i.push(this.stack.pop()));
          }
          return i;
        }, e.expandMacroAsText = function(r) {
          var i = this.expandMacro(r);
          return i && i.map(function(a) {
            return a.text;
          }).join("");
        }, e._getExpansion = function(r) {
          var i = this.macros.get(r);
          if (i == null)
            return i;
          if (r.length === 1) {
            var a = this.lexer.catcodes[r];
            if (a != null && a !== 13)
              return;
          }
          var u = typeof i == "function" ? i(this) : i;
          if (typeof u == "string") {
            var p = 0;
            if (u.indexOf("#") !== -1)
              for (var x = u.replace(/##/g, ""); x.indexOf("#" + (p + 1)) !== -1; )
                ++p;
            for (var y = new fa(u, this.settings), z = [], I = y.lex(); I.text !== "EOF"; )
              z.push(I), I = y.lex();
            z.reverse();
            var R = { tokens: z, numArgs: p };
            return R;
          }
          return u;
        }, e.isDefined = function(r) {
          return this.macros.has(r) || V0.hasOwnProperty(r) || ke.math.hasOwnProperty(r) || ke.text.hasOwnProperty(r) || xa.hasOwnProperty(r);
        }, e.isExpandable = function(r) {
          var i = this.macros.get(r);
          return i != null ? typeof i == "string" || typeof i == "function" || !i.unexpandable : V0.hasOwnProperty(r) && !V0[r].primitive;
        }, s;
      }(), cn = { "\u0301": { text: "\\'", math: "\\acute" }, "\u0300": { text: "\\`", math: "\\grave" }, "\u0308": { text: '\\"', math: "\\ddot" }, "\u0303": { text: "\\~", math: "\\tilde" }, "\u0304": { text: "\\=", math: "\\bar" }, "\u0306": { text: "\\u", math: "\\breve" }, "\u030C": { text: "\\v", math: "\\check" }, "\u0302": { text: "\\^", math: "\\hat" }, "\u0307": { text: "\\.", math: "\\dot" }, "\u030A": { text: "\\r", math: "\\mathring" }, "\u030B": { text: "\\H" }, "\u0327": { text: "\\c" } }, ba = { \u00E1: "a\u0301", \u00E0: "a\u0300", \u00E4: "a\u0308", \u01DF: "a\u0308\u0304", \u00E3: "a\u0303", \u0101: "a\u0304", \u0103: "a\u0306", \u1EAF: "a\u0306\u0301", \u1EB1: "a\u0306\u0300", \u1EB5: "a\u0306\u0303", \u01CE: "a\u030C", \u00E2: "a\u0302", \u1EA5: "a\u0302\u0301", \u1EA7: "a\u0302\u0300", \u1EAB: "a\u0302\u0303", \u0227: "a\u0307", \u01E1: "a\u0307\u0304", \u00E5: "a\u030A", \u01FB: "a\u030A\u0301", \u1E03: "b\u0307", \u0107: "c\u0301", \u1E09: "c\u0327\u0301", \u010D: "c\u030C", \u0109: "c\u0302", \u010B: "c\u0307", \u00E7: "c\u0327", \u010F: "d\u030C", \u1E0B: "d\u0307", \u1E11: "d\u0327", \u00E9: "e\u0301", \u00E8: "e\u0300", \u00EB: "e\u0308", \u1EBD: "e\u0303", \u0113: "e\u0304", \u1E17: "e\u0304\u0301", \u1E15: "e\u0304\u0300", \u0115: "e\u0306", \u1E1D: "e\u0327\u0306", \u011B: "e\u030C", \u00EA: "e\u0302", \u1EBF: "e\u0302\u0301", \u1EC1: "e\u0302\u0300", \u1EC5: "e\u0302\u0303", \u0117: "e\u0307", \u0229: "e\u0327", \u1E1F: "f\u0307", \u01F5: "g\u0301", \u1E21: "g\u0304", \u011F: "g\u0306", \u01E7: "g\u030C", \u011D: "g\u0302", \u0121: "g\u0307", \u0123: "g\u0327", \u1E27: "h\u0308", \u021F: "h\u030C", \u0125: "h\u0302", \u1E23: "h\u0307", \u1E29: "h\u0327", \u00ED: "i\u0301", \u00EC: "i\u0300", \u00EF: "i\u0308", \u1E2F: "i\u0308\u0301", \u0129: "i\u0303", \u012B: "i\u0304", \u012D: "i\u0306", \u01D0: "i\u030C", \u00EE: "i\u0302", \u01F0: "j\u030C", \u0135: "j\u0302", \u1E31: "k\u0301", \u01E9: "k\u030C", \u0137: "k\u0327", \u013A: "l\u0301", \u013E: "l\u030C", \u013C: "l\u0327", \u1E3F: "m\u0301", \u1E41: "m\u0307", \u0144: "n\u0301", \u01F9: "n\u0300", \u00F1: "n\u0303", \u0148: "n\u030C", \u1E45: "n\u0307", \u0146: "n\u0327", \u00F3: "o\u0301", \u00F2: "o\u0300", \u00F6: "o\u0308", \u022B: "o\u0308\u0304", \u00F5: "o\u0303", \u1E4D: "o\u0303\u0301", \u1E4F: "o\u0303\u0308", \u022D: "o\u0303\u0304", \u014D: "o\u0304", \u1E53: "o\u0304\u0301", \u1E51: "o\u0304\u0300", \u014F: "o\u0306", \u01D2: "o\u030C", \u00F4: "o\u0302", \u1ED1: "o\u0302\u0301", \u1ED3: "o\u0302\u0300", \u1ED7: "o\u0302\u0303", \u022F: "o\u0307", \u0231: "o\u0307\u0304", \u0151: "o\u030B", \u1E55: "p\u0301", \u1E57: "p\u0307", \u0155: "r\u0301", \u0159: "r\u030C", \u1E59: "r\u0307", \u0157: "r\u0327", \u015B: "s\u0301", \u1E65: "s\u0301\u0307", \u0161: "s\u030C", \u1E67: "s\u030C\u0307", \u015D: "s\u0302", \u1E61: "s\u0307", \u015F: "s\u0327", \u1E97: "t\u0308", \u0165: "t\u030C", \u1E6B: "t\u0307", \u0163: "t\u0327", \u00FA: "u\u0301", \u00F9: "u\u0300", \u00FC: "u\u0308", \u01D8: "u\u0308\u0301", \u01DC: "u\u0308\u0300", \u01D6: "u\u0308\u0304", \u01DA: "u\u0308\u030C", \u0169: "u\u0303", \u1E79: "u\u0303\u0301", \u016B: "u\u0304", \u1E7B: "u\u0304\u0308", \u016D: "u\u0306", \u01D4: "u\u030C", \u00FB: "u\u0302", \u016F: "u\u030A", \u0171: "u\u030B", \u1E7D: "v\u0303", \u1E83: "w\u0301", \u1E81: "w\u0300", \u1E85: "w\u0308", \u0175: "w\u0302", \u1E87: "w\u0307", \u1E98: "w\u030A", \u1E8D: "x\u0308", \u1E8B: "x\u0307", \u00FD: "y\u0301", \u1EF3: "y\u0300", \u00FF: "y\u0308", \u1EF9: "y\u0303", \u0233: "y\u0304", \u0177: "y\u0302", \u1E8F: "y\u0307", \u1E99: "y\u030A", \u017A: "z\u0301", \u017E: "z\u030C", \u1E91: "z\u0302", \u017C: "z\u0307", \u00C1: "A\u0301", \u00C0: "A\u0300", \u00C4: "A\u0308", \u01DE: "A\u0308\u0304", \u00C3: "A\u0303", \u0100: "A\u0304", \u0102: "A\u0306", \u1EAE: "A\u0306\u0301", \u1EB0: "A\u0306\u0300", \u1EB4: "A\u0306\u0303", \u01CD: "A\u030C", \u00C2: "A\u0302", \u1EA4: "A\u0302\u0301", \u1EA6: "A\u0302\u0300", \u1EAA: "A\u0302\u0303", \u0226: "A\u0307", \u01E0: "A\u0307\u0304", \u00C5: "A\u030A", \u01FA: "A\u030A\u0301", \u1E02: "B\u0307", \u0106: "C\u0301", \u1E08: "C\u0327\u0301", \u010C: "C\u030C", \u0108: "C\u0302", \u010A: "C\u0307", \u00C7: "C\u0327", \u010E: "D\u030C", \u1E0A: "D\u0307", \u1E10: "D\u0327", \u00C9: "E\u0301", \u00C8: "E\u0300", \u00CB: "E\u0308", \u1EBC: "E\u0303", \u0112: "E\u0304", \u1E16: "E\u0304\u0301", \u1E14: "E\u0304\u0300", \u0114: "E\u0306", \u1E1C: "E\u0327\u0306", \u011A: "E\u030C", \u00CA: "E\u0302", \u1EBE: "E\u0302\u0301", \u1EC0: "E\u0302\u0300", \u1EC4: "E\u0302\u0303", \u0116: "E\u0307", \u0228: "E\u0327", \u1E1E: "F\u0307", \u01F4: "G\u0301", \u1E20: "G\u0304", \u011E: "G\u0306", \u01E6: "G\u030C", \u011C: "G\u0302", \u0120: "G\u0307", \u0122: "G\u0327", \u1E26: "H\u0308", \u021E: "H\u030C", \u0124: "H\u0302", \u1E22: "H\u0307", \u1E28: "H\u0327", \u00CD: "I\u0301", \u00CC: "I\u0300", \u00CF: "I\u0308", \u1E2E: "I\u0308\u0301", \u0128: "I\u0303", \u012A: "I\u0304", \u012C: "I\u0306", \u01CF: "I\u030C", \u00CE: "I\u0302", \u0130: "I\u0307", \u0134: "J\u0302", \u1E30: "K\u0301", \u01E8: "K\u030C", \u0136: "K\u0327", \u0139: "L\u0301", \u013D: "L\u030C", \u013B: "L\u0327", \u1E3E: "M\u0301", \u1E40: "M\u0307", \u0143: "N\u0301", \u01F8: "N\u0300", \u00D1: "N\u0303", \u0147: "N\u030C", \u1E44: "N\u0307", \u0145: "N\u0327", \u00D3: "O\u0301", \u00D2: "O\u0300", \u00D6: "O\u0308", \u022A: "O\u0308\u0304", \u00D5: "O\u0303", \u1E4C: "O\u0303\u0301", \u1E4E: "O\u0303\u0308", \u022C: "O\u0303\u0304", \u014C: "O\u0304", \u1E52: "O\u0304\u0301", \u1E50: "O\u0304\u0300", \u014E: "O\u0306", \u01D1: "O\u030C", \u00D4: "O\u0302", \u1ED0: "O\u0302\u0301", \u1ED2: "O\u0302\u0300", \u1ED6: "O\u0302\u0303", \u022E: "O\u0307", \u0230: "O\u0307\u0304", \u0150: "O\u030B", \u1E54: "P\u0301", \u1E56: "P\u0307", \u0154: "R\u0301", \u0158: "R\u030C", \u1E58: "R\u0307", \u0156: "R\u0327", \u015A: "S\u0301", \u1E64: "S\u0301\u0307", \u0160: "S\u030C", \u1E66: "S\u030C\u0307", \u015C: "S\u0302", \u1E60: "S\u0307", \u015E: "S\u0327", \u0164: "T\u030C", \u1E6A: "T\u0307", \u0162: "T\u0327", \u00DA: "U\u0301", \u00D9: "U\u0300", \u00DC: "U\u0308", \u01D7: "U\u0308\u0301", \u01DB: "U\u0308\u0300", \u01D5: "U\u0308\u0304", \u01D9: "U\u0308\u030C", \u0168: "U\u0303", \u1E78: "U\u0303\u0301", \u016A: "U\u0304", \u1E7A: "U\u0304\u0308", \u016C: "U\u0306", \u01D3: "U\u030C", \u00DB: "U\u0302", \u016E: "U\u030A", \u0170: "U\u030B", \u1E7C: "V\u0303", \u1E82: "W\u0301", \u1E80: "W\u0300", \u1E84: "W\u0308", \u0174: "W\u0302", \u1E86: "W\u0307", \u1E8C: "X\u0308", \u1E8A: "X\u0307", \u00DD: "Y\u0301", \u1EF2: "Y\u0300", \u0178: "Y\u0308", \u1EF8: "Y\u0303", \u0232: "Y\u0304", \u0176: "Y\u0302", \u1E8E: "Y\u0307", \u0179: "Z\u0301", \u017D: "Z\u030C", \u1E90: "Z\u0302", \u017B: "Z\u0307", \u03AC: "\u03B1\u0301", \u1F70: "\u03B1\u0300", \u1FB1: "\u03B1\u0304", \u1FB0: "\u03B1\u0306", \u03AD: "\u03B5\u0301", \u1F72: "\u03B5\u0300", \u03AE: "\u03B7\u0301", \u1F74: "\u03B7\u0300", \u03AF: "\u03B9\u0301", \u1F76: "\u03B9\u0300", \u03CA: "\u03B9\u0308", \u0390: "\u03B9\u0308\u0301", \u1FD2: "\u03B9\u0308\u0300", \u1FD1: "\u03B9\u0304", \u1FD0: "\u03B9\u0306", \u03CC: "\u03BF\u0301", \u1F78: "\u03BF\u0300", \u03CD: "\u03C5\u0301", \u1F7A: "\u03C5\u0300", \u03CB: "\u03C5\u0308", \u03B0: "\u03C5\u0308\u0301", \u1FE2: "\u03C5\u0308\u0300", \u1FE1: "\u03C5\u0304", \u1FE0: "\u03C5\u0306", \u03CE: "\u03C9\u0301", \u1F7C: "\u03C9\u0300", \u038E: "\u03A5\u0301", \u1FEA: "\u03A5\u0300", \u03AB: "\u03A5\u0308", \u1FE9: "\u03A5\u0304", \u1FE8: "\u03A5\u0306", \u038F: "\u03A9\u0301", \u1FFA: "\u03A9\u0300" }, ya = function() {
        function s(t, r) {
          this.mode = void 0, this.gullet = void 0, this.settings = void 0, this.leftrightDepth = void 0, this.nextToken = void 0, this.mode = "math", this.gullet = new P1(t, r, this.mode), this.settings = r, this.leftrightDepth = 0;
        }
        var e = s.prototype;
        return e.expect = function(r, i) {
          if (i === void 0 && (i = true), this.fetch().text !== r)
            throw new o("Expected '" + r + "', got '" + this.fetch().text + "'", this.fetch());
          i && this.consume();
        }, e.consume = function() {
          this.nextToken = null;
        }, e.fetch = function() {
          return this.nextToken == null && (this.nextToken = this.gullet.expandNextToken()), this.nextToken;
        }, e.switchMode = function(r) {
          this.mode = r, this.gullet.switchMode(r);
        }, e.parse = function() {
          this.settings.globalGroup || this.gullet.beginGroup(), this.settings.colorIsTextColor && this.gullet.macros.set("\\color", "\\textcolor");
          try {
            var r = this.parseExpression(false);
            return this.expect("EOF"), this.settings.globalGroup || this.gullet.endGroup(), r;
          } finally {
            this.gullet.endGroups();
          }
        }, e.parseExpression = function(r, i) {
          for (var a = []; ; ) {
            this.mode === "math" && this.consumeSpaces();
            var u = this.fetch();
            if (s.endOfExpression.indexOf(u.text) !== -1 || i && u.text === i || r && V0[u.text] && V0[u.text].infix)
              break;
            var p = this.parseAtom(i);
            if (p) {
              if (p.type === "internal")
                continue;
            } else
              break;
            a.push(p);
          }
          return this.mode === "text" && this.formLigatures(a), this.handleInfixNodes(a);
        }, e.handleInfixNodes = function(r) {
          for (var i = -1, a, u = 0; u < r.length; u++)
            if (r[u].type === "infix") {
              if (i !== -1)
                throw new o("only one infix operator per group", r[u].token);
              i = u, a = r[u].replaceWith;
            }
          if (i !== -1 && a) {
            var p, x, y = r.slice(0, i), z = r.slice(i + 1);
            y.length === 1 && y[0].type === "ordgroup" ? p = y[0] : p = { type: "ordgroup", mode: this.mode, body: y }, z.length === 1 && z[0].type === "ordgroup" ? x = z[0] : x = { type: "ordgroup", mode: this.mode, body: z };
            var I;
            return a === "\\\\abovefrac" ? I = this.callFunction(a, [p, r[i], x], []) : I = this.callFunction(a, [p, x], []), [I];
          } else
            return r;
        }, e.handleSupSubscript = function(r) {
          var i = this.fetch(), a = i.text;
          this.consume(), this.consumeSpaces();
          var u = this.parseGroup(r);
          if (!u)
            throw new o("Expected group after '" + a + "'", i);
          return u;
        }, e.formatUnsupportedCmd = function(r) {
          for (var i = [], a = 0; a < r.length; a++)
            i.push({ type: "textord", mode: "text", text: r[a] });
          var u = { type: "text", mode: this.mode, body: i }, p = { type: "color", mode: this.mode, color: this.settings.errorColor, body: [u] };
          return p;
        }, e.parseAtom = function(r) {
          var i = this.parseGroup("atom", r);
          if (this.mode === "text")
            return i;
          for (var a, u; ; ) {
            this.consumeSpaces();
            var p = this.fetch();
            if (p.text === "\\limits" || p.text === "\\nolimits") {
              if (i && i.type === "op") {
                var x = p.text === "\\limits";
                i.limits = x, i.alwaysHandleSupSub = true;
              } else if (i && i.type === "operatorname")
                i.alwaysHandleSupSub && (i.limits = p.text === "\\limits");
              else
                throw new o("Limit controls must follow a math operator", p);
              this.consume();
            } else if (p.text === "^") {
              if (a)
                throw new o("Double superscript", p);
              a = this.handleSupSubscript("superscript");
            } else if (p.text === "_") {
              if (u)
                throw new o("Double subscript", p);
              u = this.handleSupSubscript("subscript");
            } else if (p.text === "'") {
              if (a)
                throw new o("Double superscript", p);
              var y = { type: "textord", mode: this.mode, text: "\\prime" }, z = [y];
              for (this.consume(); this.fetch().text === "'"; )
                z.push(y), this.consume();
              this.fetch().text === "^" && z.push(this.handleSupSubscript("superscript")), a = { type: "ordgroup", mode: this.mode, body: z };
            } else
              break;
          }
          return a || u ? { type: "supsub", mode: this.mode, base: i, sup: a, sub: u } : i;
        }, e.parseFunction = function(r, i) {
          var a = this.fetch(), u = a.text, p = V0[u];
          if (!p)
            return null;
          if (this.consume(), i && i !== "atom" && !p.allowedInArgument)
            throw new o("Got function '" + u + "' with no arguments" + (i ? " as " + i : ""), a);
          if (this.mode === "text" && !p.allowedInText)
            throw new o("Can't use function '" + u + "' in text mode", a);
          if (this.mode === "math" && p.allowedInMath === false)
            throw new o("Can't use function '" + u + "' in math mode", a);
          var x = this.parseArguments(u, p), y = x.args, z = x.optArgs;
          return this.callFunction(u, y, z, a, r);
        }, e.callFunction = function(r, i, a, u, p) {
          var x = { funcName: r, parser: this, token: u, breakOnTokenText: p }, y = V0[r];
          if (y && y.handler)
            return y.handler(x, i, a);
          throw new o("No function handler for " + r);
        }, e.parseArguments = function(r, i) {
          var a = i.numArgs + i.numOptionalArgs;
          if (a === 0)
            return { args: [], optArgs: [] };
          for (var u = [], p = [], x = 0; x < a; x++) {
            var y = i.argTypes && i.argTypes[x], z = x < i.numOptionalArgs;
            (i.primitive && y == null || i.type === "sqrt" && x === 1 && p[0] == null) && (y = "primitive");
            var I = this.parseGroupOfType("argument to '" + r + "'", y, z);
            if (z)
              p.push(I);
            else if (I != null)
              u.push(I);
            else
              throw new o("Null argument, please report this as a bug");
          }
          return { args: u, optArgs: p };
        }, e.parseGroupOfType = function(r, i, a) {
          switch (i) {
            case "color":
              return this.parseColorGroup(a);
            case "size":
              return this.parseSizeGroup(a);
            case "url":
              return this.parseUrlGroup(a);
            case "math":
            case "text":
              return this.parseArgumentGroup(a, i);
            case "hbox": {
              var u = this.parseArgumentGroup(a, "text");
              return u != null ? { type: "styling", mode: u.mode, body: [u], style: "text" } : null;
            }
            case "raw": {
              var p = this.parseStringGroup("raw", a);
              return p != null ? { type: "raw", mode: "text", string: p.text } : null;
            }
            case "primitive": {
              if (a)
                throw new o("A primitive argument cannot be optional");
              var x = this.parseGroup(r);
              if (x == null)
                throw new o("Expected group as " + r, this.fetch());
              return x;
            }
            case "original":
            case null:
            case void 0:
              return this.parseArgumentGroup(a);
            default:
              throw new o("Unknown group type as " + r, this.fetch());
          }
        }, e.consumeSpaces = function() {
          for (; this.fetch().text === " "; )
            this.consume();
        }, e.parseStringGroup = function(r, i) {
          var a = this.gullet.scanArgument(i);
          if (a == null)
            return null;
          for (var u = "", p; (p = this.fetch()).text !== "EOF"; )
            u += p.text, this.consume();
          return this.consume(), a.text = u, a;
        }, e.parseRegexGroup = function(r, i) {
          for (var a = this.fetch(), u = a, p = "", x; (x = this.fetch()).text !== "EOF" && r.test(p + x.text); )
            u = x, p += u.text, this.consume();
          if (p === "")
            throw new o("Invalid " + i + ": '" + a.text + "'", a);
          return a.range(u, p);
        }, e.parseColorGroup = function(r) {
          var i = this.parseStringGroup("color", r);
          if (i == null)
            return null;
          var a = /^(#[a-f0-9]{3}|#?[a-f0-9]{6}|[a-z]+)$/i.exec(i.text);
          if (!a)
            throw new o("Invalid color: '" + i.text + "'", i);
          var u = a[0];
          return /^[0-9a-f]{6}$/i.test(u) && (u = "#" + u), { type: "color-token", mode: this.mode, color: u };
        }, e.parseSizeGroup = function(r) {
          var i, a = false;
          if (this.gullet.consumeSpaces(), !r && this.gullet.future().text !== "{" ? i = this.parseRegexGroup(/^[-+]? *(?:$|\d+|\d+\.\d*|\.\d*) *[a-z]{0,2} *$/, "size") : i = this.parseStringGroup("size", r), !i)
            return null;
          !r && i.text.length === 0 && (i.text = "0pt", a = true);
          var u = /([-+]?) *(\d+(?:\.\d*)?|\.\d+) *([a-z]{2})/.exec(i.text);
          if (!u)
            throw new o("Invalid size: '" + i.text + "'", i);
          var p = { number: +(u[1] + u[2]), unit: u[3] };
          if (!kt(p))
            throw new o("Invalid unit: '" + p.unit + "'", i);
          return { type: "size", mode: this.mode, value: p, isBlank: a };
        }, e.parseUrlGroup = function(r) {
          this.gullet.lexer.setCatcode("%", 13), this.gullet.lexer.setCatcode("~", 12);
          var i = this.parseStringGroup("url", r);
          if (this.gullet.lexer.setCatcode("%", 14), this.gullet.lexer.setCatcode("~", 13), i == null)
            return null;
          var a = i.text.replace(/\\([#$%&~_^{}])/g, "$1");
          return { type: "url", mode: this.mode, url: a };
        }, e.parseArgumentGroup = function(r, i) {
          var a = this.gullet.scanArgument(r);
          if (a == null)
            return null;
          var u = this.mode;
          i && this.switchMode(i), this.gullet.beginGroup();
          var p = this.parseExpression(false, "EOF");
          this.expect("EOF"), this.gullet.endGroup();
          var x = { type: "ordgroup", mode: this.mode, loc: a.loc, body: p };
          return i && this.switchMode(u), x;
        }, e.parseGroup = function(r, i) {
          var a = this.fetch(), u = a.text, p;
          if (u === "{" || u === "\\begingroup") {
            this.consume();
            var x = u === "{" ? "}" : "\\endgroup";
            this.gullet.beginGroup();
            var y = this.parseExpression(false, x), z = this.fetch();
            this.expect(x), this.gullet.endGroup(), p = { type: "ordgroup", mode: this.mode, loc: b0.range(a, z), body: y, semisimple: u === "\\begingroup" || void 0 };
          } else if (p = this.parseFunction(i, r) || this.parseSymbol(), p == null && u[0] === "\\" && !xa.hasOwnProperty(u)) {
            if (this.settings.throwOnError)
              throw new o("Undefined control sequence: " + u, a);
            p = this.formatUnsupportedCmd(u), this.consume();
          }
          return p;
        }, e.formLigatures = function(r) {
          for (var i = r.length - 1, a = 0; a < i; ++a) {
            var u = r[a], p = u.text;
            p === "-" && r[a + 1].text === "-" && (a + 1 < i && r[a + 2].text === "-" ? (r.splice(a, 3, { type: "textord", mode: "text", loc: b0.range(u, r[a + 2]), text: "---" }), i -= 2) : (r.splice(a, 2, { type: "textord", mode: "text", loc: b0.range(u, r[a + 1]), text: "--" }), i -= 1)), (p === "'" || p === "`") && r[a + 1].text === p && (r.splice(a, 2, { type: "textord", mode: "text", loc: b0.range(u, r[a + 1]), text: p + p }), i -= 1);
          }
        }, e.parseSymbol = function() {
          var r = this.fetch(), i = r.text;
          if (/^\\verb[^a-zA-Z]/.test(i)) {
            this.consume();
            var a = i.slice(5), u = a.charAt(0) === "*";
            if (u && (a = a.slice(1)), a.length < 2 || a.charAt(0) !== a.slice(-1))
              throw new o(`\\verb assertion failed --
                    please report what input caused this bug`);
            return a = a.slice(1, -1), { type: "verb", mode: "text", body: a, star: u };
          }
          ba.hasOwnProperty(i[0]) && !ke[this.mode][i[0]] && (this.settings.strict && this.mode === "math" && this.settings.reportNonstrict("unicodeTextInMathMode", 'Accented Unicode text character "' + i[0] + '" used in math mode', r), i = ba[i[0]] + i.substr(1));
          var p = L1.exec(i);
          p && (i = i.substring(0, p.index), i === "i" ? i = "\u0131" : i === "j" && (i = "\u0237"));
          var x;
          if (ke[this.mode][i]) {
            this.settings.strict && this.mode === "math" && qr.indexOf(i) >= 0 && this.settings.reportNonstrict("unicodeTextInMathMode", 'Latin-1/Unicode text character "' + i[0] + '" used in math mode', r);
            var y = ke[this.mode][i].group, z = b0.range(r), I;
            if (Ke.hasOwnProperty(y)) {
              var R = y;
              I = { type: "atom", mode: this.mode, family: R, loc: z, text: i };
            } else
              I = { type: y, mode: this.mode, loc: z, text: i };
            x = I;
          } else if (i.charCodeAt(0) >= 128)
            this.settings.strict && (Ze(i.charCodeAt(0)) ? this.mode === "math" && this.settings.reportNonstrict("unicodeTextInMathMode", 'Unicode text character "' + i[0] + '" used in math mode', r) : this.settings.reportNonstrict("unknownSymbol", 'Unrecognized Unicode character "' + i[0] + '"' + (" (" + i.charCodeAt(0) + ")"), r)), x = { type: "textord", mode: "text", loc: b0.range(r), text: i };
          else
            return null;
          if (this.consume(), p)
            for (var P = 0; P < p[0].length; P++) {
              var G = p[0][P];
              if (!cn[G])
                throw new o("Unknown accent ' " + G + "'", r);
              var Q = cn[G][this.mode] || cn[G].text;
              if (!Q)
                throw new o("Accent " + G + " unsupported in " + this.mode + " mode", r);
              x = { type: "accent", mode: this.mode, loc: b0.range(r), label: Q, isStretchy: false, isShifty: true, base: x };
            }
          return x;
        }, s;
      }();
      ya.endOfExpression = ["}", "\\endgroup", "\\end", "\\right", "&"];
      var G1 = function(e, t) {
        if (!(typeof e == "string" || e instanceof String))
          throw new TypeError("KaTeX can only parse string typed expression");
        var r = new ya(e, t);
        delete r.gullet.macros.current["\\df@tag"];
        var i = r.parse();
        if (delete r.gullet.macros.current["\\current@color"], delete r.gullet.macros.current["\\color"], r.gullet.macros.get("\\df@tag")) {
          if (!t.displayMode)
            throw new o("\\tag works only in display equations");
          r.gullet.feed("\\df@tag"), i = [{ type: "tag", mode: "text", body: i, tag: r.parse() }];
        }
        return i;
      }, pn = G1, wa = function(e, t, r) {
        t.textContent = "";
        var i = fn(e, r).toNode();
        t.appendChild(i);
      };
      typeof document < "u" && document.compatMode !== "CSS1Compat" && (typeof console < "u" && console.warn("Warning: KaTeX doesn't work in quirks mode. Make sure your website has a suitable doctype."), wa = function() {
        throw new o("KaTeX doesn't work in quirks mode.");
      });
      var V1 = function(e, t) {
        var r = fn(e, t).toMarkup();
        return r;
      }, U1 = function(e, t) {
        var r = new j(t);
        return pn(e, r);
      }, ka = function(e, t, r) {
        if (r.throwOnError || !(e instanceof o))
          throw e;
        var i = L.makeSpan(["katex-error"], [new t0(t)]);
        return i.setAttribute("title", e.toString()), i.setAttribute("style", "color:" + r.errorColor), i;
      }, fn = function(e, t) {
        var r = new j(t);
        try {
          var i = pn(e, r);
          return $u(i, e, r);
        } catch (a) {
          return ka(a, e, r);
        }
      }, W1 = function(e, t) {
        var r = new j(t);
        try {
          var i = pn(e, r);
          return Zu(i, e, r);
        } catch (a) {
          return ka(a, e, r);
        }
      }, j1 = { version: "0.13.24", render: wa, renderToString: V1, ParseError: o, __parse: U1, __renderToDomTree: fn, __renderToHTMLTree: W1, __setFontMetrics: Cr, __defineSymbol: l, __defineMacro: b, __domTree: { Span: K0, Anchor: St, SymbolNode: t0, SvgNode: y0, PathNode: E0, LineNode: At } }, Y1 = j1;
      return c = c.default, c;
    }();
  });
});
function ai(n) {
  return { enter: { mathFlow() {
    this.lineEndingIfNeeded(), this.tag('<div class="math math-display">');
  }, mathFlowFenceMeta() {
    this.buffer();
  }, mathText() {
    this.tag('<span class="math math-inline">'), this.buffer();
  } }, exit: { mathFlow() {
    let h = this.resume();
    this.tag(c(h.replace(/(?:\r?\n|\r)$/, ""), true)), this.tag("</div>"), this.setData("mathFlowOpen"), this.setData("slurpOneLineEnding");
  }, mathFlowFence() {
    this.getData("mathFlowOpen") || (this.setData("mathFlowOpen", true), this.setData("slurpOneLineEnding", true), this.buffer());
  }, mathFlowFenceMeta() {
    this.resume();
  }, mathFlowValue(h) {
    this.raw(this.sliceSerialize(h));
  }, mathText() {
    let h = this.resume();
    this.tag(c(h, false)), this.tag("</span>");
  }, mathTextData(h) {
    this.raw(this.sliceSerialize(h));
  } } };
  function c(h, o) {
    return Su.default.renderToString(h, Object.assign({}, n, { displayMode: o }));
  }
}
var Su;
var Au = J(() => {
  Su = ao(ku(), 1);
});
var zu = J(() => {
  wu();
  Au();
});
var a4 = Ta((k5, Bu) => {
  Hl();
  gu();
  zu();
  Bu.exports = i4;
  function i4(n) {
    return Rl(n, { allowDangerousHtml: true, extensions: [fu(), ni], htmlExtensions: [du, ai({ output: "mathml" })] });
  }
});
var build_default = a4();

// src/ed-progress-bar.js
var template = document.createElement("template");
template.innerHTML = `
  <style>
    :host {
      display: block;
      border-radius: 0.3em;
    }
    #wrapper {
      display: flex;
      font: bold 1.1em var(--font-sans-serif, sans-serif);
      margin: 0.3em 0;      
    }
    #label {
      padding-left: 0.3em;
      padding-right:0.5em ;
      min-width: 7ch;
    }
    #progress {
            background-color: rgb(192, 192, 192);
            border-radius: 0.25em;
            display: flex;
            font-size: .75rem;
            width: 100%;
        }
 
    #progress-bar {
            animation: 1s linear infinite progress-bar-stripes;
            background-image: linear-gradient(45deg,rgba(255,255,255,.15) 25%,transparent 25%,transparent 50%,rgba(255,255,255,.15) 50%,rgba(255,255,255,.15) 75%,transparent 75%,transparent);
            background-size: 1em 1em;
            border-radius: 0.3em;
            display: flex;
            flex-direction: column;
            font-size: .75rem;
            justify-content: center;
            color: #fff;
            text-align: center;
            white-space: nowrap;
            transition: width .6s ease;
    }
    @keyframes progress-bar-stripes {
            0% {
                background-position-x:1rem
                }
    }
    
  </style>
  <div id="wrapper">
      <div id="label"></div>
      <div id="progress">
          <div id="progress-bar" role="progressbar" aria-valuemin="0" aria-valuemax="100"></div>
      </div>
  </div>
  `;
var EdProgressBar = class extends HTMLElement {
  constructor() {
    super();
    this.percent = 0;
    this.attachShadow({ mode: "open" });
  }
  connectedCallback() {
    this.shadowRoot.appendChild(template.content.cloneNode(true));
    this.shadowRoot.querySelector("#label").innerHTML = this.label ? this.label : "";
    this.shadowRoot.querySelector("#progress-bar").style.backgroundColor = this.style.backgroundColor;
  }
  static get observedAttributes() {
    return ["percent", "label"];
  }
  attributeChangedCallback(name, oldValue, newValue) {
    if (oldValue !== newValue) {
      this[name] = newValue;
    }
    switch (name) {
      case "percent":
        this.updateProgress();
        break;
      default:
        break;
    }
  }
  get percent() {
    return this.getAttribute("percent");
  }
  set percent(value) {
    this.setAttribute("percent", value);
  }
  async updateProgress() {
    const percent = this.percent;
    const progress = this.shadowRoot.querySelector("#progress-bar");
    progress.innerHTML = `&nbsp;${percent}&nbsp;%`;
    progress.style.width = `${percent}%`;
    progress.setAttribute("aria-valuenow", percent);
  }
};
customElements.define("ed-progress-bar", EdProgressBar);

// src/ed-quiz.ts
var xmlns = "http://www.w3.org/2000/svg";
var template2 = document.createElement("template");
template2.innerHTML = `
  <style>
    article {
      font-family: var(--font-sans, system-ui,-apple-system,Segoe UI,Roboto,Ubuntu,Cantarell,Noto Sans,sans-serif);
      margin-top: 1rem;
      margin-bottom: 1rem;
      border-style: solid;
      border-color: rgb(192, 192, 192);
      border-radius: 2em;
      padding: 0em 1em;
    }
    
    #progress {
      position: sticky;
      backdrop-filter: blur(23px);
      top: 0;
      z-index: 10;
    }

    h1 {
      font-size: calc(1.425rem + 2.1vw);
      font-weight: 300;
      line-height: 1.1;
    }
    
    h2 {
      font-size: calc(1.375rem + 1.5vw);
      font-weight: 300;
      line-height: 1.1;
    }

    input {
      /* remove the checkbox from flow */
      position: absolute;
  
      /* hide it visually */
      opacity: 0.00001;
  
      /* tweak size and position if needed */
      width: 1.9em;
      height: 1.9em;

      z-index: 10;

    }
    

    input:disabled {
      cursor: not-allowed;
    }
    
    li.answer {
      font-size: 1.1em;
      left: -2em;
      line-height: 1.6;
      list-style-type: none;
      position: relative;
    }
    
    svg {
      display: inline;
      width: 1.3em;
      height: 1.3em;
      color: black;
      position: relative;
      top: 0.3em;
      position: middle;
    }
    .box {
      stroke-dasharray: 320;
      stroke-dashoffset: 0;
      /*fill: white;*/
      transition: stroke-dashoffset 0.3s linear;
    }
    input:checked + svg .box {
      stroke-dashoffset: 320;
    }
    .check {
      color: var(--green-7, #37b24d);
      stroke-dasharray: 95;
      stroke-dashoffset: 95;
      fill: none;
      transition: stroke-dashoffset 0.3s linear;
    }
    .check {
      stroke-dasharray: 95;
      stroke-dashoffset: 95;
      fill: none;
      transition: stroke-dashoffset 0.3s linear;
    }
    li.good-answer input:checked + svg .check {
      color: var(--green-7, g#37b24d);
      stroke-dashoffset: 0;
    }
    li.bad-answer input:checked + svg .check  {
      color: var(--red-7, #f03e3e);
      stroke-dashoffset: 0;
    }
    .cross {
      color: var(--red-7, #f03e3e);
      fill: none;
      transition: stroke-dashoffset 0.3s linear;
    }
    li.bad-answer input:checked + svg .cross{
      stroke-dashoffset: 0;
    }
    li.bad-answer {
      text-decoration-line: line-through;
    }
    #note {
      scroll-margin: 195px;
    }
    .math-inline {
      font-size: 1.3em;
    }
    .math-display {
      font-size: 1.5em;
    }
  </style>
  <article id="quiz">
    <section id="progress">
      <h1 id="title"></h1>
      <ed-progress-bar id="bar-progress" label="Avanc\xE9e" percent="0" style="display: block;background-color: var(--blue-7, #1c7ed6);"></ed-progress-bar>
      <ed-progress-bar id="bar-results" label="R\xE9ussite" percent="0" style="display: block;background-color: var(--green-7, #37b24d);"></ed-progress-bar>
      <hr>
    </section>
    <section id="content">
    </section>
    <section id="results">
    <a href="#results"><hr></a>
    <h2>R\xE9sultat&nbsp;<span id="note"></span></h2>
    </section>
  </article>
  `;
var EdQuiz = class _EdQuiz extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.goodAnswers = [];
    this.answers = [];
    this.checkAnswer = this.checkAnswer.bind(this);
  }
  async connectedCallback() {
    this.style.display = "block";
    let contents = _EdQuiz.dedentText(this.textContent);
    contents = await build_default(contents);
    const fragment = template2.content;
    fragment.querySelector("#content").innerHTML = contents.trim();
    fragment.querySelector("#title").innerHTML = this.title ? this.title : "Quiz";
    let nQue = 0;
    fragment.querySelectorAll("ol > li").forEach((q) => {
      let nAns = 0;
      nQue++;
      q.className = "question";
      q.id = `quest-${nQue}`;
      q.dataset.nque = nQue;
      q.querySelectorAll("ul > li").forEach((a) => {
        nAns++;
        a.className = "answer";
        a.dataset.nque = nQue;
        a.dataset.nans = nAns;
        const input = a.querySelector("input");
        input.removeAttribute("disabled");
        if (input.checked) {
          this.goodAnswers.push(nAns);
          input.removeAttribute("checked");
          try {
            if (this.goodAnswers.length !== nQue) {
              throw new Error(
                "md-quizz error there's must be only one valid answer per question"
              );
            }
          } catch (error) {
            console.error(error);
          }
        }
        const svgInput = document.createElementNS(xmlns, "svg");
        svgInput.setAttributeNS(null, "viewBox", "0 0 100 100");
        svgInput.setAttributeNS(null, "stroke-linecap", "round");
        const box = document.createElementNS(xmlns, "path");
        box.setAttributeNS(null, "class", "box");
        box.setAttributeNS(
          null,
          "d",
          "M82,89H18c-3.87,0-7-3.13-7-7V18c0-3.87,3.13-7,7-7h64c3.87,0,7,3.13,7,7v64C89,85.87,85.87,89,82,89z"
        );
        box.setAttributeNS(null, "fill", "none");
        box.setAttributeNS(null, "stroke", "currentColor");
        box.setAttributeNS(null, "stroke-width", "9px");
        svgInput.appendChild(box);
        const check = document.createElementNS(xmlns, "polyline");
        check.setAttributeNS(null, "class", "check");
        check.setAttributeNS(null, "points", "20,53.5 40,75 80,25");
        check.setAttributeNS(null, "fill", "currentColor");
        check.setAttributeNS(null, "stroke", "currentColor");
        check.setAttributeNS(null, "stroke-width", 13);
        svgInput.appendChild(check);
        const cross = document.createElementNS(xmlns, "path");
        cross.setAttributeNS(null, "class", "cross");
        cross.setAttributeNS(null, "d", "M10,90L90,10M10,10L90,90");
        cross.setAttributeNS(null, "fill", "currentColor");
        cross.setAttributeNS(null, "stroke", "currentColor");
        cross.setAttributeNS(null, "stroke-width", 13);
        const crossPathLength = cross.getTotalLength();
        cross.setAttributeNS(null, "stroke-dasharray", crossPathLength);
        cross.setAttributeNS(null, "stroke-dashoffset", crossPathLength);
        svgInput.appendChild(cross);
        input.insertAdjacentElement("afterend", svgInput);
      });
    });
    this.shadowRoot.appendChild(fragment.cloneNode(true));
    this.answers = this.goodAnswers.map(() => -1);
    this.shadowRoot.querySelectorAll("li.answer").forEach((ans) => {
      const nQue2 = ans.dataset.nque;
      const nAns = ans.dataset.nans;
      ans.querySelectorAll("input").forEach((input) => {
        input.dataset.nque = nQue2;
        input.dataset.nans = nAns;
        input.addEventListener("click", this.checkAnswer);
      });
    });
  }
  static get observedAttributes() {
    return ["title"];
  }
  get title() {
    return this.getAttribute("title");
  }
  set title(value) {
    this.setAttribute("title", value);
  }
  attributeChangedCallback(name, oldValue, newValue) {
    if (oldValue !== newValue) {
      this[name] = newValue;
    }
  }
  checkAnswer(evt) {
    const el2 = evt.target;
    const nQue = Number(el2.dataset.nque);
    const nAns = Number(el2.dataset.nans);
    this.answers[nQue - 1] = nAns;
    this.updateBars();
    this.shadowRoot.querySelectorAll(`#quest-${nQue} li`).forEach((li, i) => {
      const input = li.querySelector("input");
      input.setAttribute("disabled", "");
      input.removeEventListener("click", this.checkAnswer);
      const goodAnswer = this.goodAnswers[nQue - 1];
      if (i === goodAnswer - 1) {
        li.setAttribute("class", "answer good-answer");
        if (i !== nAns - 1) {
          const cross = li.querySelector(".cross");
          cross.setAttribute("stroke-dashoffset", 0);
          el2.parentNode.setAttribute("class", "answer bad-answer");
        }
      }
    });
    if (this.answers.indexOf(-1) < 0) {
      const note = this.shadowRoot.querySelector("#note");
      const result = Math.round(
        this.shadowRoot.querySelector("#bar-results").percent / 5
      );
      note.innerHTML = `${result}/20`;
      note.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "center"
      });
    }
  }
  updateBars() {
    let score = 0;
    let answered = 0;
    const nAnswers = this.answers.length;
    for (let i = 0; i < nAnswers; i++) {
      const ans = this.answers[i];
      score += ans === this.goodAnswers[i];
      answered += ans !== -1 ? 1 : 0;
    }
    this.shadowRoot.querySelector("#bar-progress").percent = Math.round(
      100 * answered / nAnswers
    );
    this.shadowRoot.querySelector("#bar-results").percent = Math.round(
      100 * score / nAnswers
    );
  }
  /**
   * De-dents the code by getting the padding from the first line,
   * then removes the same indent amount padding from the rest of the lines
   *
   * @param {string} text - the text to dedent
   * @returns {string} the dedented text
   */
  static dedentText(text) {
    const lines = text.split("\n");
    if (lines[0] === "")
      lines.splice(0, 1);
    const initline = lines[0];
    let fwdPad = 0;
    const usingTabs = initline[0] === "	";
    const checkChar = usingTabs ? "	" : " ";
    while (true) {
      if (initline[fwdPad] === checkChar) {
        fwdPad += 1;
      } else {
        break;
      }
    }
    const fixedLines = [];
    for (const line of lines) {
      let fixedLine = line;
      for (let i = 0; i < fwdPad; i++) {
        if (fixedLine[0] === checkChar) {
          fixedLine = fixedLine.substring(1);
        } else {
          break;
        }
      }
      fixedLines.push(fixedLine);
    }
    if (fixedLines[fixedLines.length - 1] === "") {
      fixedLines.splice(fixedLines.length - 1, 1);
    }
    return fixedLines.join("\n");
  }
};
customElements.define("ed-quiz", EdQuiz);
export {
  EdQuiz
};
