// src/lib/build.js
var uo = Object.create;
var rr = Object.defineProperty;
var oo = Object.getOwnPropertyDescriptor;
var so = Object.getOwnPropertyNames;
var mo = Object.getPrototypeOf;
var ho = Object.prototype.hasOwnProperty;
var qa = (n) => rr(n, "__esModule", { value: true });
var J = (n, c) => () => (n && (c = n(n = 0)), c);
var dn = (n, c) => () => (c || n((c = { exports: {} }).exports, c), c.exports);
var co = (n, c) => {
  qa(n);
  for (var h in c)
    rr(n, h, { get: c[h], enumerable: true });
};
var po = (n, c, h) => {
  if (c && typeof c == "object" || typeof c == "function")
    for (let m of so(c))
      !ho.call(n, m) && m !== "default" && rr(n, m, { get: () => c[m], enumerable: !(h = oo(c, m)) || h.enumerable });
  return n;
};
var Oa = (n) => po(qa(rr(n != null ? uo(mo(n)) : {}, "default", n && n.__esModule && "default" in n ? { get: () => n.default, enumerable: true } : { value: n, enumerable: true })), n);
var Ra = dn((g4, gn) => {
  (function () {
    var n;
    typeof gn != "undefined" ? n = gn.exports = m : n = function () {
      return this || (0, eval)("this");
    }(), n.format = m, n.vsprintf = h, typeof console != "undefined" && typeof console.log == "function" && (n.printf = c);
    function c() {
      console.log(m.apply(null, arguments));
    }
    function h(d, v) {
      return m.apply(null, [d].concat(v));
    }
    function m(d) {
      for (var v = 1, g = [].slice.call(arguments), w = 0, z = d.length, N = "", A, P = false, D, T, F = false, H, j = function () {
        return g[v++];
      }, O = function () {
        for (var _ = ""; /\d/.test(d[w]);)
          _ += d[w++], A = d[w];
        return _.length > 0 ? parseInt(_) : null;
      }; w < z; ++w)
        if (A = d[w], P)
          switch (P = false, A == "." ? (F = false, A = d[++w]) : A == "0" && d[w + 1] == "." ? (F = true, w += 2, A = d[w]) : F = true, H = O(), A) {
            case "b":
              N += parseInt(j(), 10).toString(2);
              break;
            case "c":
              D = j(), typeof D == "string" || D instanceof String ? N += D : N += String.fromCharCode(parseInt(D, 10));
              break;
            case "d":
              N += parseInt(j(), 10);
              break;
            case "f":
              T = String(parseFloat(j()).toFixed(H || 6)), N += F ? T : T.replace(/^0/, "");
              break;
            case "j":
              N += JSON.stringify(j());
              break;
            case "o":
              N += "0" + parseInt(j(), 10).toString(8);
              break;
            case "s":
              N += j();
              break;
            case "x":
              N += "0x" + parseInt(j(), 10).toString(16);
              break;
            case "X":
              N += "0x" + parseInt(j(), 10).toString(16).toUpperCase();
              break;
            default:
              N += A;
              break;
          }
        else
          A === "%" ? P = true : N += A;
      return N;
    }
  })();
});
function _t(n) {
  return c.displayName = n.displayName || n.name, c;
  function c(h, ...m) {
    var d = h && (0, Ha.default)(h, ...m);
    return new n(d);
  }
}
var Ha;
var A0;
var Pa = J(() => {
  Ha = Oa(Ra()), A0 = Object.assign(_t(Error), { eval: _t(EvalError), range: _t(RangeError), reference: _t(ReferenceError), syntax: _t(SyntaxError), type: _t(TypeError), uri: _t(URIError) });
});
function ir(n = "yaml") {
  let c = [], h = -1;
  for (Array.isArray(n) || (n = [n]); ++h < n.length;)
    c[h] = fo(n[h]);
  return c;
}
function fo(n) {
  let c = n;
  if (typeof c == "string") {
    if (!nr.call(ja, c))
      throw A0("Missing matter definition for `%s`", c);
    c = { type: c, marker: ja[c] };
  } else if (typeof c != "object")
    throw A0("Expected matter to be an object, not `%j`", c);
  if (!nr.call(c, "type"))
    throw A0("Missing `type` in matter `%j`", c);
  if (!nr.call(c, "fence") && !nr.call(c, "marker"))
    throw A0("Missing `marker` or `fence` in matter `%j`", c);
  return c;
}
var nr;
var ja;
var vn = J(() => {
  Pa();
  nr = {}.hasOwnProperty, ja = { yaml: "-", toml: "+" };
});
function xn(n) {
  let c = ir(n), h = {}, m = {}, d = -1;
  for (; ++d < c.length;) {
    let w = c[d].type;
    h[w] = v, m[w] = g;
  }
  return { enter: h, exit: m };
  function v() {
    this.buffer();
  }
  function g() {
    this.resume(), this.setData("slurpOneLineEnding", true);
  }
}
var Va = J(() => {
  vn();
});
var Ua;
var Ga = J(() => {
  Ua = /[!-/:-@[-`{-~\u00A1\u00A7\u00AB\u00B6\u00B7\u00BB\u00BF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061E\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u09FD\u0A76\u0AF0\u0C77\u0C84\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E4F\u2E52\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]/;
});
function jt(n) {
  return n !== null && (n < 32 || n === 127);
}
function Ae(n) {
  return n !== null && (n < 0 || n === 32);
}
function X(n) {
  return n !== null && n < -2;
}
function pe(n) {
  return n === -2 || n === -1 || n === 32;
}
function Vt(n) {
  return c;
  function c(h) {
    return h !== null && n.test(String.fromCharCode(h));
  }
}
var Ke;
var e0;
var Wa;
var He;
var Ya;
var bn;
var z0;
var C0;
var ve = J(() => {
  Ga();
  Ke = Vt(/[A-Za-z]/), e0 = Vt(/\d/), Wa = Vt(/[\dA-Fa-f]/), He = Vt(/[\dA-Za-z]/), Ya = Vt(/[!-/:-@[-`{-~]/), bn = Vt(/[#-'*+\--9=?A-Z^-~]/);
  z0 = Vt(/\s/), C0 = Vt(Ua);
});
function yn(n) {
  let c = ir(n), h = {}, m = -1, d, v;
  for (; ++m < c.length;)
    d = c[m], v = kn(d, "open").charCodeAt(0), v in h ? h[v].push(Xa(d)) : h[v] = [Xa(d)];
  return { flow: h };
}
function Xa(n) {
  let c = n.type, h = n.anywhere, m = c + "Value", d = c + "Fence", v = d + "Sequence", g = { tokenize: N, partial: true }, w;
  return { tokenize: z, concrete: true };
  function z(A, P, D) {
    let T = this;
    return F;
    function F(re) {
      let ce = T.now();
      return ce.column !== 1 || !h && ce.line !== 1 ? D(re) : (A.enter(c), w = kn(n, "open"), A.attempt(g, H, D)(re));
    }
    function H(re) {
      return w = kn(n, "close"), _(re);
    }
    function j(re) {
      return re === null || X(re) ? _(re) : (A.enter(m), O(re));
    }
    function O(re) {
      return re === null || X(re) ? (A.exit(m), _(re)) : (A.consume(re), O);
    }
    function _(re) {
      return re === null ? D(re) : (A.enter("lineEnding"), A.consume(re), A.exit("lineEnding"), A.attempt(g, te, j));
    }
    function te(re) {
      return A.exit(c), P(re);
    }
  }
  function N(A, P, D) {
    let T = 0;
    return F;
    function F(_) {
      return _ === w.charCodeAt(T) ? (A.enter(d), A.enter(v), H(_)) : D(_);
    }
    function H(_) {
      return T === w.length ? (A.exit(v), pe(_) ? (A.enter("whitespace"), j(_)) : O(_)) : _ === w.charCodeAt(T++) ? (A.consume(_), H) : D(_);
    }
    function j(_) {
      return pe(_) ? (A.consume(_), j) : (A.exit("whitespace"), O(_));
    }
    function O(_) {
      return _ === null || X(_) ? (A.exit(d), P(_)) : D(_);
    }
  }
}
function kn(n, c) {
  return n.marker ? $a(n.marker, c).repeat(3) : $a(n.fence, c);
}
function $a(n, c) {
  return typeof n == "string" ? n : n[c];
}
var Za = J(() => {
  ve();
  vn();
});
var Qa = J(() => {
  Va();
  Za();
});
function lr(n) {
  var c = "&" + n + ";", h;
  return ar = ar || document.createElement("i"), ar.innerHTML = c, h = ar.textContent, h.charCodeAt(h.length - 1) === go && n !== "semi" || h === c ? false : h;
}
var go;
var ar;
var wn = J(() => {
  go = 59;
});
function Ge(n, c, h, m) {
  let d = n.length, v = 0, g;
  if (c < 0 ? c = -c > d ? 0 : d + c : c = c > d ? d : c, h = h > 0 ? h : 0, m.length < 1e4)
    g = Array.from(m), g.unshift(c, h), [].splice.apply(n, g);
  else
    for (h && [].splice.apply(n, [c, h]); v < m.length;)
      g = m.slice(v, v + 1e4), g.unshift(c, 0), [].splice.apply(n, g), v += 1e4, c += 1e4;
}
function We(n, c) {
  return n.length > 0 ? (Ge(n, n.length, 0, c), n) : c;
}
var kt = J(() => {
});
function ur(n) {
  let c = {}, h = -1;
  for (; ++h < n.length;)
    vo(c, n[h]);
  return c;
}
function vo(n, c) {
  let h;
  for (h in c) {
    let d = (Sn.call(n, h) ? n[h] : void 0) || (n[h] = {}), v = c[h], g;
    for (g in v) {
      Sn.call(d, g) || (d[g] = []);
      let w = v[g];
      xo(d[g], Array.isArray(w) ? w : w ? [w] : []);
    }
  }
}
function xo(n, c) {
  let h = -1, m = [];
  for (; ++h < c.length;)
    (c[h].add === "after" ? n : m).push(c[h]);
  Ge(n, 0, 0, m);
}
function or(n) {
  let c = {}, h = -1;
  for (; ++h < n.length;)
    bo(c, n[h]);
  return c;
}
function bo(n, c) {
  let h;
  for (h in c) {
    let d = (Sn.call(n, h) ? n[h] : void 0) || (n[h] = {}), v = c[h], g;
    if (v)
      for (g in v)
        d[g] = v[g];
  }
}
var Sn;
var sr = J(() => {
  kt();
  Sn = {}.hasOwnProperty;
});
function Ka(n, c) {
  let h = Number.parseInt(n, c);
  return h < 9 || h === 11 || h > 13 && h < 32 || h > 126 && h < 160 || h > 55295 && h < 57344 || h > 64975 && h < 65008 || (h & 65535) == 65535 || (h & 65535) == 65534 || h > 1114111 ? "\uFFFD" : String.fromCharCode(h);
}
var Ja = J(() => {
});
function mr(n) {
  return n.replace(/["&<>]/g, c);
  function c(h) {
    return "&" + yo[h] + ";";
  }
}
var yo;
var An = J(() => {
  yo = { '"': "quot", "&": "amp", "<": "lt", ">": "gt" };
});
function Ut(n) {
  return n.replace(/[\t\n\r ]+/g, " ").replace(/^ | $/g, "").toLowerCase().toUpperCase();
}
var hr = J(() => {
});
function t0(n, c) {
  let h = mr(ko(n || ""));
  if (!c)
    return h;
  let m = h.indexOf(":"), d = h.indexOf("?"), v = h.indexOf("#"), g = h.indexOf("/");
  return m < 0 || g > -1 && m > g || d > -1 && m > d || v > -1 && m > v || c.test(h.slice(0, m)) ? h : "";
}
function ko(n) {
  let c = [], h = -1, m = 0, d = 0;
  for (; ++h < n.length;) {
    let v = n.charCodeAt(h), g = "";
    if (v === 37 && He(n.charCodeAt(h + 1)) && He(n.charCodeAt(h + 2)))
      d = 2;
    else if (v < 128)
      /[!#$&-;=?-Z_a-z~]/.test(String.fromCharCode(v)) || (g = String.fromCharCode(v));
    else if (v > 55295 && v < 57344) {
      let w = n.charCodeAt(h + 1);
      v < 56320 && w > 56319 && w < 57344 ? (g = String.fromCharCode(v, w), d = 1) : g = "\uFFFD";
    } else
      g = String.fromCharCode(v);
    g && (c.push(n.slice(m, h), encodeURIComponent(g)), m = h + d + 1, g = ""), d && (h += d, d = 0);
  }
  return c.join("") + n.slice(m);
}
var zn = J(() => {
  ve();
  An();
});
function tl(n = {}) {
  let c = true, h = {}, m = [[]], d = [], v = [], w = or([{ enter: { blockQuote: ie, codeFenced: ne, codeFencedFenceInfo: H, codeFencedFenceMeta: H, codeIndented: Te, codeText: Cr, content: $t, definition: zt, definitionDestinationString: ft, definitionLabelString: H, definitionTitleString: H, emphasis: v0, htmlFlow: l0, htmlText: q0, image: B, label: H, link: ut, listItemMarker: fe, listItemValue: ze, listOrdered: Y, listUnordered: me, paragraph: Oe, reference: H, resource: mt, resourceDestinationString: Ye, resourceTitleString: H, setextHeading: Sr, strong: x0 }, exit: { atxHeading: _e, atxHeadingSequence: d0, autolinkEmail: f, autolinkProtocol: U, blockQuote: ge, characterEscapeValue: Tt, characterReferenceMarkerHexadecimal: l, characterReferenceMarkerNumeric: l, characterReferenceValue: s, codeFenced: M, codeFencedFence: Xe, codeFencedFenceInfo: q, codeFencedFenceMeta: j, codeFlowValue: zr, codeIndented: M, codeText: Br, codeTextData: Tt, data: Tt, definition: I0, definitionDestinationString: F0, definitionLabelString: Ct, definitionTitleString: N0, emphasis: Tr, hardBreakEscape: rt, hardBreakTrailing: rt, htmlFlow: g0, htmlFlowData: Tt, htmlText: g0, htmlTextData: Tt, image: At, label: Lt, labelText: St, lineEnding: L0, link: At, listOrdered: we, listUnordered: xe, paragraph: je, reference: j, referenceString: Yt, resource: j, resourceDestinationString: Xt, resourceTitleString: ht, setextHeading: Bt, setextHeadingLineSequence: dt, setextHeadingText: Ar, strong: u0, thematicBreak: Ne } }].concat(n.htmlExtensions || [])), z = { tightStack: v }, N = { lineEndingIfNeeded: re, options: n, encode: ce, raw: _, tag: O, buffer: H, resume: j, setData: T, getData: F }, A = n.defaultLineEnding;
  return P;
  function P(y) {
    let Z = -1, $ = 0, Me = [], $e = [], le = [];
    for (; ++Z < y.length;)
      !A && (y[Z][1].type === "lineEnding" || y[Z][1].type === "lineEndingBlank") && (A = y[Z][2].sliceSerialize(y[Z][1])), (y[Z][1].type === "listOrdered" || y[Z][1].type === "listUnordered") && (y[Z][0] === "enter" ? Me.push(Z) : D(y.slice(Me.pop(), Z))), y[Z][1].type === "definition" && (y[Z][0] === "enter" ? (le = We(le, y.slice($, Z)), $ = Z) : ($e = We($e, y.slice($, Z + 1)), $ = Z + 1));
    $e = We($e, le), $e = We($e, y.slice($)), Z = -1;
    let ke = $e;
    for (w.enter.null && w.enter.null.call(N); ++Z < y.length;) {
      let Qe = w[ke[Z][0]];
      _a.call(Qe, ke[Z][1].type) && Qe[ke[Z][1].type].call(Object.assign({ sliceSerialize: ke[Z][2].sliceSerialize }, N), ke[Z][1]);
    }
    return w.exit.null && w.exit.null.call(N), m[0].join("");
  }
  function D(y) {
    let Z = y.length, $ = 0, Me = 0, $e = false, le;
    for (; ++$ < Z;) {
      let ke = y[$];
      if (ke[1]._container)
        le = void 0, ke[0] === "enter" ? Me++ : Me--;
      else
        switch (ke[1].type) {
          case "listItemPrefix": {
            ke[0] === "exit" && (le = true);
            break;
          }
          case "linePrefix":
            break;
          case "lineEndingBlank": {
            ke[0] === "enter" && !Me && (le ? le = void 0 : $e = true);
            break;
          }
          default:
            le = void 0;
        }
    }
    y[0][1]._loose = $e;
  }
  function T(y, Z) {
    z[y] = Z;
  }
  function F(y) {
    return z[y];
  }
  function H() {
    m.push([]);
  }
  function j() {
    return m.pop().join("");
  }
  function O(y) {
    !c || (T("lastWasTag", true), m[m.length - 1].push(y));
  }
  function _(y) {
    T("lastWasTag"), m[m.length - 1].push(y);
  }
  function te() {
    _(A || `
`);
  }
  function re() {
    let y = m[m.length - 1], Z = y[y.length - 1], $ = Z ? Z.charCodeAt(Z.length - 1) : null;
    $ === 10 || $ === 13 || $ === null || te();
  }
  function ce(y) {
    return F("ignoreEncode") ? y : mr(y);
  }
  function Y(y) {
    v.push(!y._loose), re(), O("<ol"), T("expectFirstItem", true);
  }
  function me(y) {
    v.push(!y._loose), re(), O("<ul"), T("expectFirstItem", true);
  }
  function ze(y) {
    if (F("expectFirstItem")) {
      let Z = Number.parseInt(this.sliceSerialize(y), 10);
      Z !== 1 && O(' start="' + ce(String(Z)) + '"');
    }
  }
  function fe() {
    F("expectFirstItem") ? O(">") : Fe(), re(), O("<li>"), T("expectFirstItem"), T("lastWasTag");
  }
  function we() {
    Fe(), v.pop(), te(), O("</ol>");
  }
  function xe() {
    Fe(), v.pop(), te(), O("</ul>");
  }
  function Fe() {
    F("lastWasTag") && !F("slurpAllLineEndings") && re(), O("</li>"), T("slurpAllLineEndings");
  }
  function ie() {
    v.push(false), re(), O("<blockquote>");
  }
  function ge() {
    v.pop(), re(), O("</blockquote>"), T("slurpAllLineEndings");
  }
  function Oe() {
    v[v.length - 1] || (re(), O("<p>")), T("slurpAllLineEndings");
  }
  function je() {
    v[v.length - 1] ? T("slurpAllLineEndings", true) : O("</p>");
  }
  function ne() {
    re(), O("<pre><code"), T("fencesCount", 0);
  }
  function q() {
    let y = j();
    O(' class="language-' + y + '"');
  }
  function Xe() {
    let y = F("fencesCount") || 0;
    y || (O(">"), T("slurpOneLineEnding", true)), T("fencesCount", y + 1);
  }
  function Te() {
    re(), O("<pre><code>");
  }
  function M() {
    let y = F("fencesCount");
    y !== void 0 && y < 2 && z.tightStack.length > 0 && !F("lastWasTag") && te(), F("flowCodeSeenData") && re(), O("</code></pre>"), y !== void 0 && y < 2 && re(), T("flowCodeSeenData"), T("fencesCount"), T("slurpOneLineEnding");
  }
  function B() {
    d.push({ image: true }), c = void 0;
  }
  function ut() {
    d.push({});
  }
  function St(y) {
    d[d.length - 1].labelId = this.sliceSerialize(y);
  }
  function Lt() {
    d[d.length - 1].label = j();
  }
  function Yt(y) {
    d[d.length - 1].referenceId = this.sliceSerialize(y);
  }
  function mt() {
    H(), d[d.length - 1].destination = "";
  }
  function Ye() {
    H(), T("ignoreEncode", true);
  }
  function Xt() {
    d[d.length - 1].destination = j(), T("ignoreEncode");
  }
  function ht() {
    d[d.length - 1].title = j();
  }
  function At() {
    let y = d.length - 1, Z = d[y], $ = Z.referenceId || Z.labelId, Me = Z.destination === void 0 ? h[Ut($)] : Z;
    for (c = true; y--;)
      if (d[y].image) {
        c = void 0;
        break;
      }
    Z.image ? (O('<img src="' + t0(Me.destination, n.allowDangerousProtocol ? void 0 : wo) + '" alt="'), _(Z.label), O('"')) : O('<a href="' + t0(Me.destination, n.allowDangerousProtocol ? void 0 : el) + '"'), O(Me.title ? ' title="' + Me.title + '"' : ""), Z.image ? O(" />") : (O(">"), _(Z.label), O("</a>")), d.pop();
  }
  function zt() {
    H(), d.push({});
  }
  function Ct(y) {
    j(), d[d.length - 1].labelId = this.sliceSerialize(y);
  }
  function ft() {
    H(), T("ignoreEncode", true);
  }
  function F0() {
    d[d.length - 1].destination = j(), T("ignoreEncode");
  }
  function N0() {
    d[d.length - 1].title = j();
  }
  function I0() {
    let y = d[d.length - 1], Z = Ut(y.labelId);
    j(), _a.call(h, Z) || (h[Z] = d[d.length - 1]), d.pop();
  }
  function $t() {
    T("slurpAllLineEndings", true);
  }
  function d0(y) {
    F("headingRank") || (T("headingRank", this.sliceSerialize(y).length), re(), O("<h" + F("headingRank") + ">"));
  }
  function Sr() {
    H(), T("slurpAllLineEndings");
  }
  function Ar() {
    T("slurpAllLineEndings", true);
  }
  function _e() {
    O("</h" + F("headingRank") + ">"), T("headingRank");
  }
  function dt(y) {
    T("headingRank", this.sliceSerialize(y).charCodeAt(0) === 61 ? 1 : 2);
  }
  function Bt() {
    let y = j();
    re(), O("<h" + F("headingRank") + ">"), _(y), O("</h" + F("headingRank") + ">"), T("slurpAllLineEndings"), T("headingRank");
  }
  function Tt(y) {
    _(ce(this.sliceSerialize(y)));
  }
  function L0(y) {
    if (!F("slurpAllLineEndings")) {
      if (F("slurpOneLineEnding")) {
        T("slurpOneLineEnding");
        return;
      }
      if (F("inCodeText")) {
        _(" ");
        return;
      }
      _(ce(this.sliceSerialize(y)));
    }
  }
  function zr(y) {
    _(ce(this.sliceSerialize(y))), T("flowCodeSeenData", true);
  }
  function rt() {
    O("<br />");
  }
  function l0() {
    re(), q0();
  }
  function g0() {
    T("ignoreEncode");
  }
  function q0() {
    n.allowDangerousHtml && T("ignoreEncode", true);
  }
  function v0() {
    O("<em>");
  }
  function x0() {
    O("<strong>");
  }
  function Cr() {
    T("inCodeText", true), O("<code>");
  }
  function Br() {
    T("inCodeText"), O("</code>");
  }
  function Tr() {
    O("</em>");
  }
  function u0() {
    O("</strong>");
  }
  function Ne() {
    re(), O("<hr />");
  }
  function l(y) {
    T("characterReferenceType", y.type);
  }
  function s(y) {
    let Z = this.sliceSerialize(y);
    Z = F("characterReferenceType") ? Ka(Z, F("characterReferenceType") === "characterReferenceMarkerNumeric" ? 10 : 16) : lr(Z), _(ce(Z)), T("characterReferenceType");
  }
  function U(y) {
    let Z = this.sliceSerialize(y);
    O('<a href="' + t0(Z, n.allowDangerousProtocol ? void 0 : el) + '">'), _(ce(Z)), O("</a>");
  }
  function f(y) {
    let Z = this.sliceSerialize(y);
    O('<a href="' + t0("mailto:" + Z) + '">'), _(ce(Z)), O("</a>");
  }
}
var _a;
var el;
var wo;
var rl = J(() => {
  wn();
  sr();
  kt();
  Ja();
  An();
  hr();
  zn();
  _a = {}.hasOwnProperty, el = /^(https?|ircs?|mailto|xmpp)$/i, wo = /^https?$/i;
});
function oe(n, c, h, m) {
  let d = m ? m - 1 : Number.POSITIVE_INFINITY, v = 0;
  return g;
  function g(z) {
    return pe(z) ? (n.enter(h), w(z)) : c(z);
  }
  function w(z) {
    return pe(z) && v++ < d ? (n.consume(z), w) : (n.exit(h), c(z));
  }
}
var Pe = J(() => {
  ve();
});
function So(n) {
  let c = n.attempt(this.parser.constructs.contentInitial, m, d), h;
  return c;
  function m(w) {
    if (w === null) {
      n.consume(w);
      return;
    }
    return n.enter("lineEnding"), n.consume(w), n.exit("lineEnding"), oe(n, c, "linePrefix");
  }
  function d(w) {
    return n.enter("paragraph"), v(w);
  }
  function v(w) {
    let z = n.enter("chunkText", { contentType: "text", previous: h });
    return h && (h.next = z), h = z, g(w);
  }
  function g(w) {
    if (w === null) {
      n.exit("chunkText"), n.exit("paragraph"), n.consume(w);
      return;
    }
    return X(w) ? (n.consume(w), n.exit("chunkText"), v) : (n.consume(w), g);
  }
}
var nl;
var il = J(() => {
  Pe();
  ve();
  nl = { tokenize: So };
});
function Ao(n) {
  let c = this, h = [], m = 0, d, v, g;
  return w;
  function w(te) {
    if (m < h.length) {
      let re = h[m];
      return c.containerState = re[1], n.attempt(re[0].continuation, z, N)(te);
    }
    return N(te);
  }
  function z(te) {
    return c.containerState._closeFlow && _(), m++, w(te);
  }
  function N(te) {
    if (m === h.length) {
      if (!d)
        return D(te);
      if (d.currentConstruct && d.currentConstruct.concrete)
        return F(te);
      c.interrupt = true;
    }
    return c.containerState = {}, n.check(ll, A, P)(te);
  }
  function A(te) {
    return d && _(), O(m), D(te);
  }
  function P(te) {
    return c.parser.lazy[c.now().line] = m !== h.length, g = c.now().offset, F(te);
  }
  function D(te) {
    return c.containerState = {}, n.attempt(ll, T, F)(te);
  }
  function T(te) {
    return m++, h.push([c.currentConstruct, c.containerState]), D(te);
  }
  function F(te) {
    if (te === null) {
      d && _(), O(0), n.consume(te);
      return;
    }
    return d = d || c.parser.flow(c.now()), n.enter("chunkFlow", { contentType: "flow", previous: v, _tokenizer: d }), H(te);
  }
  function H(te) {
    if (te === null) {
      j(n.exit("chunkFlow"), true), O(0), n.consume(te);
      return;
    }
    return X(te) ? (n.consume(te), j(n.exit("chunkFlow")), m = 0, c.interrupt = void 0, w) : (n.consume(te), H);
  }
  function j(te, re) {
    let ce = c.sliceStream(te);
    if (re && ce.push(null), te.previous = v, v && (v.next = te), v = te, d.defineSkip(te.start), d.write(ce), c.parser.lazy[te.start.line]) {
      let Y = d.events.length;
      for (; Y--;)
        if (d.events[Y][1].start.offset < g && (!d.events[Y][1].end || d.events[Y][1].end.offset > g))
          return;
      let me = c.events.length, ze = me, fe, we;
      for (; ze--;)
        if (c.events[ze][0] === "exit" && c.events[ze][1].type === "chunkFlow") {
          if (fe) {
            we = c.events[ze][1].end;
            break;
          }
          fe = true;
        }
      for (O(m), Y = me; Y < c.events.length;)
        c.events[Y][1].end = Object.assign({}, we), Y++;
      Ge(c.events, ze + 1, 0, c.events.slice(me)), c.events.length = Y;
    }
  }
  function O(te) {
    let re = h.length;
    for (; re-- > te;) {
      let ce = h[re];
      c.containerState = ce[1], ce[0].exit.call(c, n);
    }
    h.length = te;
  }
  function _() {
    d.write([null]), v = void 0, d = void 0, c.containerState._closeFlow = void 0;
  }
}
function zo(n, c, h) {
  return oe(n, n.attempt(this.parser.constructs.document, c, h), "linePrefix", this.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4);
}
var al;
var ll;
var ul = J(() => {
  Pe();
  ve();
  kt();
  al = { tokenize: Ao }, ll = { tokenize: zo };
});
function p0(n) {
  if (n === null || Ae(n) || z0(n))
    return 1;
  if (C0(n))
    return 2;
}
var Cn = J(() => {
  ve();
});
function Gt(n, c, h) {
  let m = [], d = -1;
  for (; ++d < n.length;) {
    let v = n[d].resolveAll;
    v && !m.includes(v) && (c = v(c, h), m.push(v));
  }
  return c;
}
var B0 = J(() => {
});
function Co(n, c) {
  let h = -1, m, d, v, g, w, z, N, A;
  for (; ++h < n.length;)
    if (n[h][0] === "enter" && n[h][1].type === "attentionSequence" && n[h][1]._close) {
      for (m = h; m--;)
        if (n[m][0] === "exit" && n[m][1].type === "attentionSequence" && n[m][1]._open && c.sliceSerialize(n[m][1]).charCodeAt(0) === c.sliceSerialize(n[h][1]).charCodeAt(0)) {
          if ((n[m][1]._close || n[h][1]._open) && (n[h][1].end.offset - n[h][1].start.offset) % 3 && !((n[m][1].end.offset - n[m][1].start.offset + n[h][1].end.offset - n[h][1].start.offset) % 3))
            continue;
          z = n[m][1].end.offset - n[m][1].start.offset > 1 && n[h][1].end.offset - n[h][1].start.offset > 1 ? 2 : 1;
          let P = Object.assign({}, n[m][1].end), D = Object.assign({}, n[h][1].start);
          ol(P, -z), ol(D, z), g = { type: z > 1 ? "strongSequence" : "emphasisSequence", start: P, end: Object.assign({}, n[m][1].end) }, w = { type: z > 1 ? "strongSequence" : "emphasisSequence", start: Object.assign({}, n[h][1].start), end: D }, v = { type: z > 1 ? "strongText" : "emphasisText", start: Object.assign({}, n[m][1].end), end: Object.assign({}, n[h][1].start) }, d = { type: z > 1 ? "strong" : "emphasis", start: Object.assign({}, g.start), end: Object.assign({}, w.end) }, n[m][1].end = Object.assign({}, g.start), n[h][1].start = Object.assign({}, w.end), N = [], n[m][1].end.offset - n[m][1].start.offset && (N = We(N, [["enter", n[m][1], c], ["exit", n[m][1], c]])), N = We(N, [["enter", d, c], ["enter", g, c], ["exit", g, c], ["enter", v, c]]), N = We(N, Gt(c.parser.constructs.insideSpan.null, n.slice(m + 1, h), c)), N = We(N, [["exit", v, c], ["enter", w, c], ["exit", w, c], ["exit", d, c]]), n[h][1].end.offset - n[h][1].start.offset ? (A = 2, N = We(N, [["enter", n[h][1], c], ["exit", n[h][1], c]])) : A = 0, Ge(n, m - 1, h - m + 3, N), h = m + N.length - A - 2;
          break;
        }
    }
  for (h = -1; ++h < n.length;)
    n[h][1].type === "attentionSequence" && (n[h][1].type = "data");
  return n;
}
function Bo(n, c) {
  let h = p0(this.previous), m;
  return d;
  function d(g) {
    return n.enter("attentionSequence"), m = g, v(g);
  }
  function v(g) {
    if (g === m)
      return n.consume(g), v;
    let w = n.exit("attentionSequence"), z = p0(g), N = !z || z === 2 && h, A = !h || h === 2 && z;
    return w._open = Boolean(m === 42 ? N : N && (h || !A)), w._close = Boolean(m === 42 ? A : A && (z || !N)), c(g);
  }
}
function ol(n, c) {
  n.column += c, n.offset += c, n._bufferIndex += c;
}
var T0;
var sl = J(() => {
  kt();
  Cn();
  B0();
  T0 = { name: "attention", tokenize: Bo, resolveAll: Co };
});
function To(n, c, h) {
  let m = 1;
  return d;
  function d(F) {
    return n.enter("autolink"), n.enter("autolinkMarker"), n.consume(F), n.exit("autolinkMarker"), n.enter("autolinkProtocol"), v;
  }
  function v(F) {
    return Ke(F) ? (n.consume(F), g) : bn(F) ? N(F) : h(F);
  }
  function g(F) {
    return F === 43 || F === 45 || F === 46 || He(F) ? w(F) : N(F);
  }
  function w(F) {
    return F === 58 ? (n.consume(F), z) : (F === 43 || F === 45 || F === 46 || He(F)) && m++ < 32 ? (n.consume(F), w) : N(F);
  }
  function z(F) {
    return F === 62 ? (n.exit("autolinkProtocol"), T(F)) : F === null || F === 32 || F === 60 || jt(F) ? h(F) : (n.consume(F), z);
  }
  function N(F) {
    return F === 64 ? (n.consume(F), m = 0, A) : bn(F) ? (n.consume(F), N) : h(F);
  }
  function A(F) {
    return He(F) ? P(F) : h(F);
  }
  function P(F) {
    return F === 46 ? (n.consume(F), m = 0, A) : F === 62 ? (n.exit("autolinkProtocol").type = "autolinkEmail", T(F)) : D(F);
  }
  function D(F) {
    return (F === 45 || He(F)) && m++ < 63 ? (n.consume(F), F === 45 ? D : P) : h(F);
  }
  function T(F) {
    return n.enter("autolinkMarker"), n.consume(F), n.exit("autolinkMarker"), n.exit("autolink"), c;
  }
}
var Bn;
var ml = J(() => {
  ve();
  Bn = { name: "autolink", tokenize: To };
});
function Mo(n, c, h) {
  return oe(n, m, "linePrefix");
  function m(d) {
    return d === null || X(d) ? c(d) : h(d);
  }
}
var Wt;
var cr = J(() => {
  Pe();
  ve();
  Wt = { tokenize: Mo, partial: true };
});
function Eo(n, c, h) {
  let m = this;
  return d;
  function d(g) {
    if (g === 62) {
      let w = m.containerState;
      return w.open || (n.enter("blockQuote", { _container: true }), w.open = true), n.enter("blockQuotePrefix"), n.enter("blockQuoteMarker"), n.consume(g), n.exit("blockQuoteMarker"), v;
    }
    return h(g);
  }
  function v(g) {
    return pe(g) ? (n.enter("blockQuotePrefixWhitespace"), n.consume(g), n.exit("blockQuotePrefixWhitespace"), n.exit("blockQuotePrefix"), c) : (n.exit("blockQuotePrefix"), c(g));
  }
}
function Do(n, c, h) {
  return oe(n, n.attempt(pr, c, h), "linePrefix", this.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4);
}
function Fo(n) {
  n.exit("blockQuote");
}
var pr;
var hl = J(() => {
  Pe();
  ve();
  pr = { name: "blockQuote", tokenize: Eo, continuation: { tokenize: Do }, exit: Fo };
});
function No(n, c, h) {
  return m;
  function m(v) {
    return n.enter("characterEscape"), n.enter("escapeMarker"), n.consume(v), n.exit("escapeMarker"), d;
  }
  function d(v) {
    return Ya(v) ? (n.enter("characterEscapeValue"), n.consume(v), n.exit("characterEscapeValue"), n.exit("characterEscape"), c) : h(v);
  }
}
var fr;
var cl = J(() => {
  ve();
  fr = { name: "characterEscape", tokenize: No };
});
function Io(n, c, h) {
  let m = this, d = 0, v, g;
  return w;
  function w(P) {
    return n.enter("characterReference"), n.enter("characterReferenceMarker"), n.consume(P), n.exit("characterReferenceMarker"), z;
  }
  function z(P) {
    return P === 35 ? (n.enter("characterReferenceMarkerNumeric"), n.consume(P), n.exit("characterReferenceMarkerNumeric"), N) : (n.enter("characterReferenceValue"), v = 31, g = He, A(P));
  }
  function N(P) {
    return P === 88 || P === 120 ? (n.enter("characterReferenceMarkerHexadecimal"), n.consume(P), n.exit("characterReferenceMarkerHexadecimal"), n.enter("characterReferenceValue"), v = 6, g = Wa, A) : (n.enter("characterReferenceValue"), v = 7, g = e0, A(P));
  }
  function A(P) {
    let D;
    return P === 59 && d ? (D = n.exit("characterReferenceValue"), g === He && !lr(m.sliceSerialize(D)) ? h(P) : (n.enter("characterReferenceMarker"), n.consume(P), n.exit("characterReferenceMarker"), n.exit("characterReference"), c)) : g(P) && d++ < v ? (n.consume(P), A) : h(P);
  }
}
var dr;
var pl = J(() => {
  wn();
  ve();
  dr = { name: "characterReference", tokenize: Io };
});
function Lo(n, c, h) {
  let m = this, d = { tokenize: ce, partial: true }, v = { tokenize: re, partial: true }, g = this.events[this.events.length - 1], w = g && g[1].type === "linePrefix" ? g[2].sliceSerialize(g[1], true).length : 0, z = 0, N;
  return A;
  function A(Y) {
    return n.enter("codeFenced"), n.enter("codeFencedFence"), n.enter("codeFencedFenceSequence"), N = Y, P(Y);
  }
  function P(Y) {
    return Y === N ? (n.consume(Y), z++, P) : (n.exit("codeFencedFenceSequence"), z < 3 ? h(Y) : oe(n, D, "whitespace")(Y));
  }
  function D(Y) {
    return Y === null || X(Y) ? j(Y) : (n.enter("codeFencedFenceInfo"), n.enter("chunkString", { contentType: "string" }), T(Y));
  }
  function T(Y) {
    return Y === null || Ae(Y) ? (n.exit("chunkString"), n.exit("codeFencedFenceInfo"), oe(n, F, "whitespace")(Y)) : Y === 96 && Y === N ? h(Y) : (n.consume(Y), T);
  }
  function F(Y) {
    return Y === null || X(Y) ? j(Y) : (n.enter("codeFencedFenceMeta"), n.enter("chunkString", { contentType: "string" }), H(Y));
  }
  function H(Y) {
    return Y === null || X(Y) ? (n.exit("chunkString"), n.exit("codeFencedFenceMeta"), j(Y)) : Y === 96 && Y === N ? h(Y) : (n.consume(Y), H);
  }
  function j(Y) {
    return n.exit("codeFencedFence"), m.interrupt ? c(Y) : O(Y);
  }
  function O(Y) {
    return Y === null ? te(Y) : X(Y) ? n.attempt(v, n.attempt(d, te, w ? oe(n, O, "linePrefix", w + 1) : O), te)(Y) : (n.enter("codeFlowValue"), _(Y));
  }
  function _(Y) {
    return Y === null || X(Y) ? (n.exit("codeFlowValue"), O(Y)) : (n.consume(Y), _);
  }
  function te(Y) {
    return n.exit("codeFenced"), c(Y);
  }
  function re(Y, me, ze) {
    let fe = this;
    return we;
    function we(Fe) {
      return Y.enter("lineEnding"), Y.consume(Fe), Y.exit("lineEnding"), xe;
    }
    function xe(Fe) {
      return fe.parser.lazy[fe.now().line] ? ze(Fe) : me(Fe);
    }
  }
  function ce(Y, me, ze) {
    let fe = 0;
    return oe(Y, we, "linePrefix", this.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4);
    function we(ie) {
      return Y.enter("codeFencedFence"), Y.enter("codeFencedFenceSequence"), xe(ie);
    }
    function xe(ie) {
      return ie === N ? (Y.consume(ie), fe++, xe) : fe < z ? ze(ie) : (Y.exit("codeFencedFenceSequence"), oe(Y, Fe, "whitespace")(ie));
    }
    function Fe(ie) {
      return ie === null || X(ie) ? (Y.exit("codeFencedFence"), me(ie)) : ze(ie);
    }
  }
}
var gr;
var fl = J(() => {
  Pe();
  ve();
  gr = { name: "codeFenced", tokenize: Lo, concrete: true };
});
function Oo(n, c, h) {
  let m = this;
  return d;
  function d(N) {
    return n.enter("codeIndented"), oe(n, v, "linePrefix", 4 + 1)(N);
  }
  function v(N) {
    let A = m.events[m.events.length - 1];
    return A && A[1].type === "linePrefix" && A[2].sliceSerialize(A[1], true).length >= 4 ? g(N) : h(N);
  }
  function g(N) {
    return N === null ? z(N) : X(N) ? n.attempt(qo, g, z)(N) : (n.enter("codeFlowValue"), w(N));
  }
  function w(N) {
    return N === null || X(N) ? (n.exit("codeFlowValue"), g(N)) : (n.consume(N), w);
  }
  function z(N) {
    return n.exit("codeIndented"), c(N);
  }
}
function Ro(n, c, h) {
  let m = this;
  return d;
  function d(g) {
    return m.parser.lazy[m.now().line] ? h(g) : X(g) ? (n.enter("lineEnding"), n.consume(g), n.exit("lineEnding"), d) : oe(n, v, "linePrefix", 4 + 1)(g);
  }
  function v(g) {
    let w = m.events[m.events.length - 1];
    return w && w[1].type === "linePrefix" && w[2].sliceSerialize(w[1], true).length >= 4 ? c(g) : X(g) ? d(g) : h(g);
  }
}
var M0;
var qo;
var dl = J(() => {
  Pe();
  ve();
  M0 = { name: "codeIndented", tokenize: Oo }, qo = { tokenize: Ro, partial: true };
});
function Ho(n) {
  let c = n.length - 4, h = 3, m, d;
  if ((n[h][1].type === "lineEnding" || n[h][1].type === "space") && (n[c][1].type === "lineEnding" || n[c][1].type === "space")) {
    for (m = h; ++m < c;)
      if (n[m][1].type === "codeTextData") {
        n[h][1].type = "codeTextPadding", n[c][1].type = "codeTextPadding", h += 2, c -= 2;
        break;
      }
  }
  for (m = h - 1, c++; ++m <= c;)
    d === void 0 ? m !== c && n[m][1].type !== "lineEnding" && (d = m) : (m === c || n[m][1].type === "lineEnding") && (n[d][1].type = "codeTextData", m !== d + 2 && (n[d][1].end = n[m - 1][1].end, n.splice(d + 2, m - d - 2), c -= m - d - 2, m = d + 2), d = void 0);
  return n;
}
function Po(n) {
  return n !== 96 || this.events[this.events.length - 1][1].type === "characterEscape";
}
function jo(n, c, h) {
  let m = this, d = 0, v, g;
  return w;
  function w(D) {
    return n.enter("codeText"), n.enter("codeTextSequence"), z(D);
  }
  function z(D) {
    return D === 96 ? (n.consume(D), d++, z) : (n.exit("codeTextSequence"), N(D));
  }
  function N(D) {
    return D === null ? h(D) : D === 96 ? (g = n.enter("codeTextSequence"), v = 0, P(D)) : D === 32 ? (n.enter("space"), n.consume(D), n.exit("space"), N) : X(D) ? (n.enter("lineEnding"), n.consume(D), n.exit("lineEnding"), N) : (n.enter("codeTextData"), A(D));
  }
  function A(D) {
    return D === null || D === 32 || D === 96 || X(D) ? (n.exit("codeTextData"), N(D)) : (n.consume(D), A);
  }
  function P(D) {
    return D === 96 ? (n.consume(D), v++, P) : v === d ? (n.exit("codeTextSequence"), n.exit("codeText"), c(D)) : (g.type = "codeTextData", A(D));
  }
}
var Tn;
var gl = J(() => {
  ve();
  Tn = { name: "codeText", tokenize: jo, resolve: Ho, previous: Po };
});
function vr(n) {
  let c = {}, h = -1, m, d, v, g, w, z, N;
  for (; ++h < n.length;) {
    for (; h in c;)
      h = c[h];
    if (m = n[h], h && m[1].type === "chunkFlow" && n[h - 1][1].type === "listItemPrefix" && (z = m[1]._tokenizer.events, v = 0, v < z.length && z[v][1].type === "lineEndingBlank" && (v += 2), v < z.length && z[v][1].type === "content"))
      for (; ++v < z.length && z[v][1].type !== "content";)
        z[v][1].type === "chunkText" && (z[v][1]._isInFirstContentOfListItem = true, v++);
    if (m[0] === "enter")
      m[1].contentType && (Object.assign(c, Vo(n, h)), h = c[h], N = true);
    else if (m[1]._container) {
      for (v = h, d = void 0; v-- && (g = n[v], g[1].type === "lineEnding" || g[1].type === "lineEndingBlank");)
        g[0] === "enter" && (d && (n[d][1].type = "lineEndingBlank"), g[1].type = "lineEnding", d = v);
      d && (m[1].end = Object.assign({}, n[d][1].start), w = n.slice(d, h), w.unshift(m), Ge(n, d, h - d + 1, w));
    }
  }
  return !N;
}
function Vo(n, c) {
  let h = n[c][1], m = n[c][2], d = c - 1, v = [], g = h._tokenizer || m.parser[h.contentType](h.start), w = g.events, z = [], N = {}, A, P, D = -1, T = h, F = 0, H = 0, j = [H];
  for (; T;) {
    for (; n[++d][1] !== T;)
      ;
    v.push(d), T._tokenizer || (A = m.sliceStream(T), T.next || A.push(null), P && g.defineSkip(T.start), T._isInFirstContentOfListItem && (g._gfmTasklistFirstContentOfListItem = true), g.write(A), T._isInFirstContentOfListItem && (g._gfmTasklistFirstContentOfListItem = void 0)), P = T, T = T.next;
  }
  for (T = h; ++D < w.length;)
    w[D][0] === "exit" && w[D - 1][0] === "enter" && w[D][1].type === w[D - 1][1].type && w[D][1].start.line !== w[D][1].end.line && (H = D + 1, j.push(H), T._tokenizer = void 0, T.previous = void 0, T = T.next);
  for (g.events = [], T ? (T._tokenizer = void 0, T.previous = void 0) : j.pop(), D = j.length; D--;) {
    let O = w.slice(j[D], j[D + 1]), _ = v.pop();
    z.unshift([_, _ + O.length - 1]), Ge(n, _, 2, O);
  }
  for (D = -1; ++D < z.length;)
    N[F + z[D][0]] = F + z[D][1], F += z[D][1] - z[D][0] - 1;
  return N;
}
var Mn = J(() => {
  kt();
});
function Go(n) {
  return vr(n), n;
}
function Wo(n, c) {
  let h;
  return m;
  function m(w) {
    return n.enter("content"), h = n.enter("chunkContent", { contentType: "content" }), d(w);
  }
  function d(w) {
    return w === null ? v(w) : X(w) ? n.check(Uo, g, v)(w) : (n.consume(w), d);
  }
  function v(w) {
    return n.exit("chunkContent"), n.exit("content"), c(w);
  }
  function g(w) {
    return n.consume(w), n.exit("chunkContent"), h.next = n.enter("chunkContent", { contentType: "content", previous: h }), h = h.next, d;
  }
}
function Yo(n, c, h) {
  let m = this;
  return d;
  function d(g) {
    return n.exit("chunkContent"), n.enter("lineEnding"), n.consume(g), n.exit("lineEnding"), oe(n, v, "linePrefix");
  }
  function v(g) {
    if (g === null || X(g))
      return h(g);
    let w = m.events[m.events.length - 1];
    return !m.parser.constructs.disable.null.includes("codeIndented") && w && w[1].type === "linePrefix" && w[2].sliceSerialize(w[1], true).length >= 4 ? c(g) : n.interrupt(m.parser.constructs.flow, h, c)(g);
  }
}
var En;
var Uo;
var vl = J(() => {
  Pe();
  ve();
  Mn();
  En = { tokenize: Wo, resolve: Go }, Uo = { tokenize: Yo, partial: true };
});
function xr(n, c, h, m, d, v, g, w, z) {
  let N = z || Number.POSITIVE_INFINITY, A = 0;
  return P;
  function P(O) {
    return O === 60 ? (n.enter(m), n.enter(d), n.enter(v), n.consume(O), n.exit(v), D) : O === null || O === 41 || jt(O) ? h(O) : (n.enter(m), n.enter(g), n.enter(w), n.enter("chunkString", { contentType: "string" }), H(O));
  }
  function D(O) {
    return O === 62 ? (n.enter(v), n.consume(O), n.exit(v), n.exit(d), n.exit(m), c) : (n.enter(w), n.enter("chunkString", { contentType: "string" }), T(O));
  }
  function T(O) {
    return O === 62 ? (n.exit("chunkString"), n.exit(w), D(O)) : O === null || O === 60 || X(O) ? h(O) : (n.consume(O), O === 92 ? F : T);
  }
  function F(O) {
    return O === 60 || O === 62 || O === 92 ? (n.consume(O), T) : T(O);
  }
  function H(O) {
    return O === 40 ? ++A > N ? h(O) : (n.consume(O), H) : O === 41 ? A-- ? (n.consume(O), H) : (n.exit("chunkString"), n.exit(w), n.exit(g), n.exit(m), c(O)) : O === null || Ae(O) ? A ? h(O) : (n.exit("chunkString"), n.exit(w), n.exit(g), n.exit(m), c(O)) : jt(O) ? h(O) : (n.consume(O), O === 92 ? j : H);
  }
  function j(O) {
    return O === 40 || O === 41 || O === 92 ? (n.consume(O), H) : H(O);
  }
}
var Dn = J(() => {
  ve();
});
function br(n, c, h, m, d, v) {
  let g = this, w = 0, z;
  return N;
  function N(T) {
    return n.enter(m), n.enter(d), n.consume(T), n.exit(d), n.enter(v), A;
  }
  function A(T) {
    return T === null || T === 91 || T === 93 && !z || T === 94 && !w && "_hiddenFootnoteSupport" in g.parser.constructs || w > 999 ? h(T) : T === 93 ? (n.exit(v), n.enter(d), n.consume(T), n.exit(d), n.exit(m), c) : X(T) ? (n.enter("lineEnding"), n.consume(T), n.exit("lineEnding"), A) : (n.enter("chunkString", { contentType: "string" }), P(T));
  }
  function P(T) {
    return T === null || T === 91 || T === 93 || X(T) || w++ > 999 ? (n.exit("chunkString"), A(T)) : (n.consume(T), z = z || !pe(T), T === 92 ? D : P);
  }
  function D(T) {
    return T === 91 || T === 92 || T === 93 ? (n.consume(T), w++, P) : P(T);
  }
}
var Fn = J(() => {
  ve();
});
function yr(n, c, h, m, d, v) {
  let g;
  return w;
  function w(D) {
    return n.enter(m), n.enter(d), n.consume(D), n.exit(d), g = D === 40 ? 41 : D, z;
  }
  function z(D) {
    return D === g ? (n.enter(d), n.consume(D), n.exit(d), n.exit(m), c) : (n.enter(v), N(D));
  }
  function N(D) {
    return D === g ? (n.exit(v), z(g)) : D === null ? h(D) : X(D) ? (n.enter("lineEnding"), n.consume(D), n.exit("lineEnding"), oe(n, N, "linePrefix")) : (n.enter("chunkString", { contentType: "string" }), A(D));
  }
  function A(D) {
    return D === g || D === null || X(D) ? (n.exit("chunkString"), N(D)) : (n.consume(D), D === 92 ? P : A);
  }
  function P(D) {
    return D === g || D === 92 ? (n.consume(D), A) : A(D);
  }
}
var Nn = J(() => {
  Pe();
  ve();
});
function r0(n, c) {
  let h;
  return m;
  function m(d) {
    return X(d) ? (n.enter("lineEnding"), n.consume(d), n.exit("lineEnding"), h = true, m) : pe(d) ? oe(n, m, h ? "linePrefix" : "lineSuffix")(d) : c(d);
  }
}
var In = J(() => {
  Pe();
  ve();
});
function $o(n, c, h) {
  let m = this, d;
  return v;
  function v(z) {
    return n.enter("definition"), br.call(m, n, g, h, "definitionLabel", "definitionLabelMarker", "definitionLabelString")(z);
  }
  function g(z) {
    return d = Ut(m.sliceSerialize(m.events[m.events.length - 1][1]).slice(1, -1)), z === 58 ? (n.enter("definitionMarker"), n.consume(z), n.exit("definitionMarker"), r0(n, xr(n, n.attempt(Xo, oe(n, w, "whitespace"), oe(n, w, "whitespace")), h, "definitionDestination", "definitionDestinationLiteral", "definitionDestinationLiteralMarker", "definitionDestinationRaw", "definitionDestinationString"))) : h(z);
  }
  function w(z) {
    return z === null || X(z) ? (n.exit("definition"), m.parser.defined.includes(d) || m.parser.defined.push(d), c(z)) : h(z);
  }
}
function Zo(n, c, h) {
  return m;
  function m(g) {
    return Ae(g) ? r0(n, d)(g) : h(g);
  }
  function d(g) {
    return g === 34 || g === 39 || g === 40 ? yr(n, oe(n, v, "whitespace"), h, "definitionTitle", "definitionTitleMarker", "definitionTitleString")(g) : h(g);
  }
  function v(g) {
    return g === null || X(g) ? c(g) : h(g);
  }
}
var Ln;
var Xo;
var xl = J(() => {
  Dn();
  Fn();
  Pe();
  Nn();
  In();
  hr();
  ve();
  Ln = { name: "definition", tokenize: $o }, Xo = { tokenize: Zo, partial: true };
});
function Qo(n, c, h) {
  return m;
  function m(v) {
    return n.enter("hardBreakEscape"), n.enter("escapeMarker"), n.consume(v), d;
  }
  function d(v) {
    return X(v) ? (n.exit("escapeMarker"), n.exit("hardBreakEscape"), c(v)) : h(v);
  }
}
var qn;
var bl = J(() => {
  ve();
  qn = { name: "hardBreakEscape", tokenize: Qo };
});
function Ko(n, c) {
  let h = n.length - 2, m = 3, d, v;
  return n[m][1].type === "whitespace" && (m += 2), h - 2 > m && n[h][1].type === "whitespace" && (h -= 2), n[h][1].type === "atxHeadingSequence" && (m === h - 1 || h - 4 > m && n[h - 2][1].type === "whitespace") && (h -= m + 1 === h ? 2 : 4), h > m && (d = { type: "atxHeadingText", start: n[m][1].start, end: n[h][1].end }, v = { type: "chunkText", start: n[m][1].start, end: n[h][1].end, contentType: "text" }, Ge(n, m, h - m + 1, [["enter", d, c], ["enter", v, c], ["exit", v, c], ["exit", d, c]])), n;
}
function Jo(n, c, h) {
  let m = this, d = 0;
  return v;
  function v(A) {
    return n.enter("atxHeading"), n.enter("atxHeadingSequence"), g(A);
  }
  function g(A) {
    return A === 35 && d++ < 6 ? (n.consume(A), g) : A === null || Ae(A) ? (n.exit("atxHeadingSequence"), m.interrupt ? c(A) : w(A)) : h(A);
  }
  function w(A) {
    return A === 35 ? (n.enter("atxHeadingSequence"), z(A)) : A === null || X(A) ? (n.exit("atxHeading"), c(A)) : pe(A) ? oe(n, w, "whitespace")(A) : (n.enter("atxHeadingText"), N(A));
  }
  function z(A) {
    return A === 35 ? (n.consume(A), z) : (n.exit("atxHeadingSequence"), w(A));
  }
  function N(A) {
    return A === null || A === 35 || Ae(A) ? (n.exit("atxHeadingText"), w(A)) : (n.consume(A), N);
  }
}
var On;
var yl = J(() => {
  Pe();
  ve();
  kt();
  On = { name: "headingAtx", tokenize: Jo, resolve: Ko };
});
var kl;
var Rn;
var wl = J(() => {
  kl = ["address", "article", "aside", "base", "basefont", "blockquote", "body", "caption", "center", "col", "colgroup", "dd", "details", "dialog", "dir", "div", "dl", "dt", "fieldset", "figcaption", "figure", "footer", "form", "frame", "frameset", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hr", "html", "iframe", "legend", "li", "link", "main", "menu", "menuitem", "nav", "noframes", "ol", "optgroup", "option", "p", "param", "section", "source", "summary", "table", "tbody", "td", "tfoot", "th", "thead", "title", "tr", "track", "ul"], Rn = ["pre", "script", "style", "textarea"];
});
function es(n) {
  let c = n.length;
  for (; c-- && !(n[c][0] === "enter" && n[c][1].type === "htmlFlow");)
    ;
  return c > 1 && n[c - 2][1].type === "linePrefix" && (n[c][1].start = n[c - 2][1].start, n[c + 1][1].start = n[c - 2][1].start, n.splice(c - 2, 2)), n;
}
function ts(n, c, h) {
  let m = this, d, v, g, w, z;
  return N;
  function N(B) {
    return n.enter("htmlFlow"), n.enter("htmlFlowData"), n.consume(B), A;
  }
  function A(B) {
    return B === 33 ? (n.consume(B), P) : B === 47 ? (n.consume(B), F) : B === 63 ? (n.consume(B), d = 3, m.interrupt ? c : Xe) : Ke(B) ? (n.consume(B), g = String.fromCharCode(B), v = true, H) : h(B);
  }
  function P(B) {
    return B === 45 ? (n.consume(B), d = 2, D) : B === 91 ? (n.consume(B), d = 5, g = "CDATA[", w = 0, T) : Ke(B) ? (n.consume(B), d = 4, m.interrupt ? c : Xe) : h(B);
  }
  function D(B) {
    return B === 45 ? (n.consume(B), m.interrupt ? c : Xe) : h(B);
  }
  function T(B) {
    return B === g.charCodeAt(w++) ? (n.consume(B), w === g.length ? m.interrupt ? c : xe : T) : h(B);
  }
  function F(B) {
    return Ke(B) ? (n.consume(B), g = String.fromCharCode(B), H) : h(B);
  }
  function H(B) {
    return B === null || B === 47 || B === 62 || Ae(B) ? B !== 47 && v && Rn.includes(g.toLowerCase()) ? (d = 1, m.interrupt ? c(B) : xe(B)) : kl.includes(g.toLowerCase()) ? (d = 6, B === 47 ? (n.consume(B), j) : m.interrupt ? c(B) : xe(B)) : (d = 7, m.interrupt && !m.parser.lazy[m.now().line] ? h(B) : v ? _(B) : O(B)) : B === 45 || He(B) ? (n.consume(B), g += String.fromCharCode(B), H) : h(B);
  }
  function j(B) {
    return B === 62 ? (n.consume(B), m.interrupt ? c : xe) : h(B);
  }
  function O(B) {
    return pe(B) ? (n.consume(B), O) : fe(B);
  }
  function _(B) {
    return B === 47 ? (n.consume(B), fe) : B === 58 || B === 95 || Ke(B) ? (n.consume(B), te) : pe(B) ? (n.consume(B), _) : fe(B);
  }
  function te(B) {
    return B === 45 || B === 46 || B === 58 || B === 95 || He(B) ? (n.consume(B), te) : re(B);
  }
  function re(B) {
    return B === 61 ? (n.consume(B), ce) : pe(B) ? (n.consume(B), re) : _(B);
  }
  function ce(B) {
    return B === null || B === 60 || B === 61 || B === 62 || B === 96 ? h(B) : B === 34 || B === 39 ? (n.consume(B), z = B, Y) : pe(B) ? (n.consume(B), ce) : (z = null, me(B));
  }
  function Y(B) {
    return B === null || X(B) ? h(B) : B === z ? (n.consume(B), ze) : (n.consume(B), Y);
  }
  function me(B) {
    return B === null || B === 34 || B === 39 || B === 60 || B === 61 || B === 62 || B === 96 || Ae(B) ? re(B) : (n.consume(B), me);
  }
  function ze(B) {
    return B === 47 || B === 62 || pe(B) ? _(B) : h(B);
  }
  function fe(B) {
    return B === 62 ? (n.consume(B), we) : h(B);
  }
  function we(B) {
    return pe(B) ? (n.consume(B), we) : B === null || X(B) ? xe(B) : h(B);
  }
  function xe(B) {
    return B === 45 && d === 2 ? (n.consume(B), Oe) : B === 60 && d === 1 ? (n.consume(B), je) : B === 62 && d === 4 ? (n.consume(B), Te) : B === 63 && d === 3 ? (n.consume(B), Xe) : B === 93 && d === 5 ? (n.consume(B), q) : X(B) && (d === 6 || d === 7) ? n.check(_o, Te, Fe)(B) : B === null || X(B) ? Fe(B) : (n.consume(B), xe);
  }
  function Fe(B) {
    return n.exit("htmlFlowData"), ie(B);
  }
  function ie(B) {
    return B === null ? M(B) : X(B) ? n.attempt({ tokenize: ge, partial: true }, ie, M)(B) : (n.enter("htmlFlowData"), xe(B));
  }
  function ge(B, ut, St) {
    return Lt;
    function Lt(mt) {
      return B.enter("lineEnding"), B.consume(mt), B.exit("lineEnding"), Yt;
    }
    function Yt(mt) {
      return m.parser.lazy[m.now().line] ? St(mt) : ut(mt);
    }
  }
  function Oe(B) {
    return B === 45 ? (n.consume(B), Xe) : xe(B);
  }
  function je(B) {
    return B === 47 ? (n.consume(B), g = "", ne) : xe(B);
  }
  function ne(B) {
    return B === 62 && Rn.includes(g.toLowerCase()) ? (n.consume(B), Te) : Ke(B) && g.length < 8 ? (n.consume(B), g += String.fromCharCode(B), ne) : xe(B);
  }
  function q(B) {
    return B === 93 ? (n.consume(B), Xe) : xe(B);
  }
  function Xe(B) {
    return B === 62 ? (n.consume(B), Te) : xe(B);
  }
  function Te(B) {
    return B === null || X(B) ? (n.exit("htmlFlowData"), M(B)) : (n.consume(B), Te);
  }
  function M(B) {
    return n.exit("htmlFlow"), c(B);
  }
}
function rs(n, c, h) {
  return m;
  function m(d) {
    return n.exit("htmlFlowData"), n.enter("lineEndingBlank"), n.consume(d), n.exit("lineEndingBlank"), n.attempt(Wt, c, h);
  }
}
var Hn;
var _o;
var Sl = J(() => {
  ve();
  wl();
  cr();
  Hn = { name: "htmlFlow", tokenize: ts, resolveTo: es, concrete: true }, _o = { tokenize: rs, partial: true };
});
function ns(n, c, h) {
  let m = this, d, v, g, w;
  return z;
  function z(M) {
    return n.enter("htmlText"), n.enter("htmlTextData"), n.consume(M), N;
  }
  function N(M) {
    return M === 33 ? (n.consume(M), A) : M === 47 ? (n.consume(M), me) : M === 63 ? (n.consume(M), ce) : Ke(M) ? (n.consume(M), we) : h(M);
  }
  function A(M) {
    return M === 45 ? (n.consume(M), P) : M === 91 ? (n.consume(M), v = "CDATA[", g = 0, j) : Ke(M) ? (n.consume(M), re) : h(M);
  }
  function P(M) {
    return M === 45 ? (n.consume(M), D) : h(M);
  }
  function D(M) {
    return M === null || M === 62 ? h(M) : M === 45 ? (n.consume(M), T) : F(M);
  }
  function T(M) {
    return M === null || M === 62 ? h(M) : F(M);
  }
  function F(M) {
    return M === null ? h(M) : M === 45 ? (n.consume(M), H) : X(M) ? (w = F, q(M)) : (n.consume(M), F);
  }
  function H(M) {
    return M === 45 ? (n.consume(M), Te) : F(M);
  }
  function j(M) {
    return M === v.charCodeAt(g++) ? (n.consume(M), g === v.length ? O : j) : h(M);
  }
  function O(M) {
    return M === null ? h(M) : M === 93 ? (n.consume(M), _) : X(M) ? (w = O, q(M)) : (n.consume(M), O);
  }
  function _(M) {
    return M === 93 ? (n.consume(M), te) : O(M);
  }
  function te(M) {
    return M === 62 ? Te(M) : M === 93 ? (n.consume(M), te) : O(M);
  }
  function re(M) {
    return M === null || M === 62 ? Te(M) : X(M) ? (w = re, q(M)) : (n.consume(M), re);
  }
  function ce(M) {
    return M === null ? h(M) : M === 63 ? (n.consume(M), Y) : X(M) ? (w = ce, q(M)) : (n.consume(M), ce);
  }
  function Y(M) {
    return M === 62 ? Te(M) : ce(M);
  }
  function me(M) {
    return Ke(M) ? (n.consume(M), ze) : h(M);
  }
  function ze(M) {
    return M === 45 || He(M) ? (n.consume(M), ze) : fe(M);
  }
  function fe(M) {
    return X(M) ? (w = fe, q(M)) : pe(M) ? (n.consume(M), fe) : Te(M);
  }
  function we(M) {
    return M === 45 || He(M) ? (n.consume(M), we) : M === 47 || M === 62 || Ae(M) ? xe(M) : h(M);
  }
  function xe(M) {
    return M === 47 ? (n.consume(M), Te) : M === 58 || M === 95 || Ke(M) ? (n.consume(M), Fe) : X(M) ? (w = xe, q(M)) : pe(M) ? (n.consume(M), xe) : Te(M);
  }
  function Fe(M) {
    return M === 45 || M === 46 || M === 58 || M === 95 || He(M) ? (n.consume(M), Fe) : ie(M);
  }
  function ie(M) {
    return M === 61 ? (n.consume(M), ge) : X(M) ? (w = ie, q(M)) : pe(M) ? (n.consume(M), ie) : xe(M);
  }
  function ge(M) {
    return M === null || M === 60 || M === 61 || M === 62 || M === 96 ? h(M) : M === 34 || M === 39 ? (n.consume(M), d = M, Oe) : X(M) ? (w = ge, q(M)) : pe(M) ? (n.consume(M), ge) : (n.consume(M), d = void 0, ne);
  }
  function Oe(M) {
    return M === d ? (n.consume(M), je) : M === null ? h(M) : X(M) ? (w = Oe, q(M)) : (n.consume(M), Oe);
  }
  function je(M) {
    return M === 62 || M === 47 || Ae(M) ? xe(M) : h(M);
  }
  function ne(M) {
    return M === null || M === 34 || M === 39 || M === 60 || M === 61 || M === 96 ? h(M) : M === 62 || Ae(M) ? xe(M) : (n.consume(M), ne);
  }
  function q(M) {
    return n.exit("htmlTextData"), n.enter("lineEnding"), n.consume(M), n.exit("lineEnding"), oe(n, Xe, "linePrefix", m.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4);
  }
  function Xe(M) {
    return n.enter("htmlTextData"), w(M);
  }
  function Te(M) {
    return M === 62 ? (n.consume(M), n.exit("htmlTextData"), n.exit("htmlText"), c) : h(M);
  }
}
var Pn;
var Al = J(() => {
  Pe();
  ve();
  Pn = { name: "htmlText", tokenize: ns };
});
function us(n) {
  let c = -1, h;
  for (; ++c < n.length;)
    h = n[c][1], (h.type === "labelImage" || h.type === "labelLink" || h.type === "labelEnd") && (n.splice(c + 1, h.type === "labelImage" ? 4 : 2), h.type = "data", c++);
  return n;
}
function os(n, c) {
  let h = n.length, m = 0, d, v, g, w;
  for (; h--;)
    if (d = n[h][1], v) {
      if (d.type === "link" || d.type === "labelLink" && d._inactive)
        break;
      n[h][0] === "enter" && d.type === "labelLink" && (d._inactive = true);
    } else if (g) {
      if (n[h][0] === "enter" && (d.type === "labelImage" || d.type === "labelLink") && !d._balanced && (v = h, d.type !== "labelLink")) {
        m = 2;
        break;
      }
    } else
      d.type === "labelEnd" && (g = h);
  let z = { type: n[v][1].type === "labelLink" ? "link" : "image", start: Object.assign({}, n[v][1].start), end: Object.assign({}, n[n.length - 1][1].end) }, N = { type: "label", start: Object.assign({}, n[v][1].start), end: Object.assign({}, n[g][1].end) }, A = { type: "labelText", start: Object.assign({}, n[v + m + 2][1].end), end: Object.assign({}, n[g - 2][1].start) };
  return w = [["enter", z, c], ["enter", N, c]], w = We(w, n.slice(v + 1, v + m + 3)), w = We(w, [["enter", A, c]]), w = We(w, Gt(c.parser.constructs.insideSpan.null, n.slice(v + m + 4, g - 3), c)), w = We(w, [["exit", A, c], n[g - 2], n[g - 1], ["exit", N, c]]), w = We(w, n.slice(g + 1)), w = We(w, [["exit", z, c]]), Ge(n, v, n.length, w), n;
}
function ss(n, c, h) {
  let m = this, d = m.events.length, v, g;
  for (; d--;)
    if ((m.events[d][1].type === "labelImage" || m.events[d][1].type === "labelLink") && !m.events[d][1]._balanced) {
      v = m.events[d][1];
      break;
    }
  return w;
  function w(A) {
    return v ? v._inactive ? N(A) : (g = m.parser.defined.includes(Ut(m.sliceSerialize({ start: v.end, end: m.now() }))), n.enter("labelEnd"), n.enter("labelMarker"), n.consume(A), n.exit("labelMarker"), n.exit("labelEnd"), z) : h(A);
  }
  function z(A) {
    return A === 40 ? n.attempt(is, c, g ? c : N)(A) : A === 91 ? n.attempt(as, c, g ? n.attempt(ls, c, N) : N)(A) : g ? c(A) : N(A);
  }
  function N(A) {
    return v._balanced = true, h(A);
  }
}
function ms(n, c, h) {
  return m;
  function m(z) {
    return n.enter("resource"), n.enter("resourceMarker"), n.consume(z), n.exit("resourceMarker"), r0(n, d);
  }
  function d(z) {
    return z === 41 ? w(z) : xr(n, v, h, "resourceDestination", "resourceDestinationLiteral", "resourceDestinationLiteralMarker", "resourceDestinationRaw", "resourceDestinationString", 3)(z);
  }
  function v(z) {
    return Ae(z) ? r0(n, g)(z) : w(z);
  }
  function g(z) {
    return z === 34 || z === 39 || z === 40 ? yr(n, r0(n, w), h, "resourceTitle", "resourceTitleMarker", "resourceTitleString")(z) : w(z);
  }
  function w(z) {
    return z === 41 ? (n.enter("resourceMarker"), n.consume(z), n.exit("resourceMarker"), n.exit("resource"), c) : h(z);
  }
}
function hs(n, c, h) {
  let m = this;
  return d;
  function d(g) {
    return br.call(m, n, v, h, "reference", "referenceMarker", "referenceString")(g);
  }
  function v(g) {
    return m.parser.defined.includes(Ut(m.sliceSerialize(m.events[m.events.length - 1][1]).slice(1, -1))) ? c(g) : h(g);
  }
}
function cs(n, c, h) {
  return m;
  function m(v) {
    return n.enter("reference"), n.enter("referenceMarker"), n.consume(v), n.exit("referenceMarker"), d;
  }
  function d(v) {
    return v === 93 ? (n.enter("referenceMarker"), n.consume(v), n.exit("referenceMarker"), n.exit("reference"), c) : h(v);
  }
}
var n0;
var is;
var as;
var ls;
var kr = J(() => {
  Dn();
  Fn();
  Nn();
  In();
  ve();
  kt();
  hr();
  B0();
  n0 = { name: "labelEnd", tokenize: ss, resolveTo: os, resolveAll: us }, is = { tokenize: ms }, as = { tokenize: hs }, ls = { tokenize: cs };
});
function ps(n, c, h) {
  let m = this;
  return d;
  function d(w) {
    return n.enter("labelImage"), n.enter("labelImageMarker"), n.consume(w), n.exit("labelImageMarker"), v;
  }
  function v(w) {
    return w === 91 ? (n.enter("labelMarker"), n.consume(w), n.exit("labelMarker"), n.exit("labelImage"), g) : h(w);
  }
  function g(w) {
    return w === 94 && "_hiddenFootnoteSupport" in m.parser.constructs ? h(w) : c(w);
  }
}
var jn;
var zl = J(() => {
  kr();
  jn = { name: "labelStartImage", tokenize: ps, resolveAll: n0.resolveAll };
});
function fs(n, c, h) {
  let m = this;
  return d;
  function d(g) {
    return n.enter("labelLink"), n.enter("labelMarker"), n.consume(g), n.exit("labelMarker"), n.exit("labelLink"), v;
  }
  function v(g) {
    return g === 94 && "_hiddenFootnoteSupport" in m.parser.constructs ? h(g) : c(g);
  }
}
var Vn;
var Cl = J(() => {
  kr();
  Vn = { name: "labelStartLink", tokenize: fs, resolveAll: n0.resolveAll };
});
function ds(n, c) {
  return h;
  function h(m) {
    return n.enter("lineEnding"), n.consume(m), n.exit("lineEnding"), oe(n, c, "linePrefix");
  }
}
var E0;
var Bl = J(() => {
  Pe();
  E0 = { name: "lineEnding", tokenize: ds };
});
function gs(n, c, h) {
  let m = 0, d;
  return v;
  function v(z) {
    return n.enter("thematicBreak"), d = z, g(z);
  }
  function g(z) {
    return z === d ? (n.enter("thematicBreakSequence"), w(z)) : pe(z) ? oe(n, g, "whitespace")(z) : m < 3 || z !== null && !X(z) ? h(z) : (n.exit("thematicBreak"), c(z));
  }
  function w(z) {
    return z === d ? (n.consume(z), m++, w) : (n.exit("thematicBreakSequence"), g(z));
  }
}
var i0;
var Un = J(() => {
  Pe();
  ve();
  i0 = { name: "thematicBreak", tokenize: gs };
});
function bs(n, c, h) {
  let m = this, d = m.events[m.events.length - 1], v = d && d[1].type === "linePrefix" ? d[2].sliceSerialize(d[1], true).length : 0, g = 0;
  return w;
  function w(T) {
    let F = m.containerState.type || (T === 42 || T === 43 || T === 45 ? "listUnordered" : "listOrdered");
    if (F === "listUnordered" ? !m.containerState.marker || T === m.containerState.marker : e0(T)) {
      if (m.containerState.type || (m.containerState.type = F, n.enter(F, { _container: true })), F === "listUnordered")
        return n.enter("listItemPrefix"), T === 42 || T === 45 ? n.check(i0, h, N)(T) : N(T);
      if (!m.interrupt || T === 49)
        return n.enter("listItemPrefix"), n.enter("listItemValue"), z(T);
    }
    return h(T);
  }
  function z(T) {
    return e0(T) && ++g < 10 ? (n.consume(T), z) : (!m.interrupt || g < 2) && (m.containerState.marker ? T === m.containerState.marker : T === 41 || T === 46) ? (n.exit("listItemValue"), N(T)) : h(T);
  }
  function N(T) {
    return n.enter("listItemMarker"), n.consume(T), n.exit("listItemMarker"), m.containerState.marker = m.containerState.marker || T, n.check(Wt, m.interrupt ? h : A, n.attempt(vs, D, P));
  }
  function A(T) {
    return m.containerState.initialBlankLine = true, v++, D(T);
  }
  function P(T) {
    return pe(T) ? (n.enter("listItemPrefixWhitespace"), n.consume(T), n.exit("listItemPrefixWhitespace"), D) : h(T);
  }
  function D(T) {
    return m.containerState.size = v + m.sliceSerialize(n.exit("listItemPrefix"), true).length, c(T);
  }
}
function ys(n, c, h) {
  let m = this;
  return m.containerState._closeFlow = void 0, n.check(Wt, d, v);
  function d(w) {
    return m.containerState.furtherBlankLines = m.containerState.furtherBlankLines || m.containerState.initialBlankLine, oe(n, c, "listItemIndent", m.containerState.size + 1)(w);
  }
  function v(w) {
    return m.containerState.furtherBlankLines || !pe(w) ? (m.containerState.furtherBlankLines = void 0, m.containerState.initialBlankLine = void 0, g(w)) : (m.containerState.furtherBlankLines = void 0, m.containerState.initialBlankLine = void 0, n.attempt(xs, c, g)(w));
  }
  function g(w) {
    return m.containerState._closeFlow = true, m.interrupt = void 0, oe(n, n.attempt(Je, c, h), "linePrefix", m.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(w);
  }
}
function ks(n, c, h) {
  let m = this;
  return oe(n, d, "listItemIndent", m.containerState.size + 1);
  function d(v) {
    let g = m.events[m.events.length - 1];
    return g && g[1].type === "listItemIndent" && g[2].sliceSerialize(g[1], true).length === m.containerState.size ? c(v) : h(v);
  }
}
function ws(n) {
  n.exit(this.containerState.type);
}
function Ss(n, c, h) {
  let m = this;
  return oe(n, d, "listItemPrefixWhitespace", m.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4 + 1);
  function d(v) {
    let g = m.events[m.events.length - 1];
    return !pe(v) && g && g[1].type === "listItemPrefixWhitespace" ? c(v) : h(v);
  }
}
var Je;
var vs;
var xs;
var Tl = J(() => {
  Pe();
  ve();
  cr();
  Un();
  Je = { name: "list", tokenize: bs, continuation: { tokenize: ys }, exit: ws }, vs = { tokenize: Ss, partial: true }, xs = { tokenize: ks, partial: true };
});
function As(n, c) {
  let h = n.length, m, d, v;
  for (; h--;)
    if (n[h][0] === "enter") {
      if (n[h][1].type === "content") {
        m = h;
        break;
      }
      n[h][1].type === "paragraph" && (d = h);
    } else
      n[h][1].type === "content" && n.splice(h, 1), !v && n[h][1].type === "definition" && (v = h);
  let g = { type: "setextHeading", start: Object.assign({}, n[d][1].start), end: Object.assign({}, n[n.length - 1][1].end) };
  return n[d][1].type = "setextHeadingText", v ? (n.splice(d, 0, ["enter", g, c]), n.splice(v + 1, 0, ["exit", n[m][1], c]), n[m][1].end = Object.assign({}, n[v][1].end)) : n[m][1] = g, n.push(["exit", g, c]), n;
}
function zs(n, c, h) {
  let m = this, d = m.events.length, v, g;
  for (; d--;)
    if (m.events[d][1].type !== "lineEnding" && m.events[d][1].type !== "linePrefix" && m.events[d][1].type !== "content") {
      g = m.events[d][1].type === "paragraph";
      break;
    }
  return w;
  function w(A) {
    return !m.parser.lazy[m.now().line] && (m.interrupt || g) ? (n.enter("setextHeadingLine"), n.enter("setextHeadingLineSequence"), v = A, z(A)) : h(A);
  }
  function z(A) {
    return A === v ? (n.consume(A), z) : (n.exit("setextHeadingLineSequence"), oe(n, N, "lineSuffix")(A));
  }
  function N(A) {
    return A === null || X(A) ? (n.exit("setextHeadingLine"), c(A)) : h(A);
  }
}
var wr;
var Ml = J(() => {
  Pe();
  ve();
  wr = { name: "setextUnderline", tokenize: zs, resolveTo: As };
});
var Gn = J(() => {
  sl();
  ml();
  cr();
  hl();
  cl();
  pl();
  fl();
  dl();
  gl();
  vl();
  xl();
  bl();
  yl();
  Sl();
  Al();
  kr();
  zl();
  Cl();
  Bl();
  Tl();
  Ml();
  Un();
});
function Cs(n) {
  let c = this, h = n.attempt(Wt, m, n.attempt(this.parser.constructs.flowInitial, d, oe(n, n.attempt(this.parser.constructs.flow, d, n.attempt(En, d)), "linePrefix")));
  return h;
  function m(v) {
    if (v === null) {
      n.consume(v);
      return;
    }
    return n.enter("lineEndingBlank"), n.consume(v), n.exit("lineEndingBlank"), c.currentConstruct = void 0, h;
  }
  function d(v) {
    if (v === null) {
      n.consume(v);
      return;
    }
    return n.enter("lineEnding"), n.consume(v), n.exit("lineEnding"), c.currentConstruct = void 0, h;
  }
}
var El;
var Dl = J(() => {
  Gn();
  Pe();
  El = { tokenize: Cs };
});
function Ll(n) {
  return { tokenize: c, resolveAll: ql(n === "text" ? Bs : void 0) };
  function c(h) {
    let m = this, d = this.parser.constructs[n], v = h.attempt(d, g, w);
    return g;
    function g(A) {
      return N(A) ? v(A) : w(A);
    }
    function w(A) {
      if (A === null) {
        h.consume(A);
        return;
      }
      return h.enter("data"), h.consume(A), z;
    }
    function z(A) {
      return N(A) ? (h.exit("data"), v(A)) : (h.consume(A), z);
    }
    function N(A) {
      if (A === null)
        return true;
      let P = d[A], D = -1;
      if (P)
        for (; ++D < P.length;) {
          let T = P[D];
          if (!T.previous || T.previous.call(m, m.previous))
            return true;
        }
      return false;
    }
  }
}
function ql(n) {
  return c;
  function c(h, m) {
    let d = -1, v;
    for (; ++d <= h.length;)
      v === void 0 ? h[d] && h[d][1].type === "data" && (v = d, d++) : (!h[d] || h[d][1].type !== "data") && (d !== v + 2 && (h[v][1].end = h[d - 1][1].end, h.splice(v + 2, d - v - 2), d = v + 2), v = void 0);
    return n ? n(h, m) : h;
  }
}
function Bs(n, c) {
  let h = -1;
  for (; ++h <= n.length;)
    if ((h === n.length || n[h][1].type === "lineEnding") && n[h - 1][1].type === "data") {
      let m = n[h - 1][1], d = c.sliceStream(m), v = d.length, g = -1, w = 0, z;
      for (; v--;) {
        let N = d[v];
        if (typeof N == "string") {
          for (g = N.length; N.charCodeAt(g - 1) === 32;)
            w++, g--;
          if (g)
            break;
          g = -1;
        } else if (N === -2)
          z = true, w++;
        else if (N !== -1) {
          v++;
          break;
        }
      }
      if (w) {
        let N = { type: h === n.length || z || w < 2 ? "lineSuffix" : "hardBreakTrailing", start: { line: m.end.line, column: m.end.column - w, offset: m.end.offset - w, _index: m.start._index + v, _bufferIndex: v ? g : m.start._bufferIndex + g }, end: Object.assign({}, m.end) };
        m.end = Object.assign({}, N.start), m.start.offset === m.end.offset ? Object.assign(m, N) : (n.splice(h, 0, ["enter", N, c], ["exit", N, c]), h += 2);
      }
      h++;
    }
  return n;
}
var Fl;
var Nl;
var Il;
var Wn = J(() => {
  Fl = { resolveAll: ql() }, Nl = Ll("string"), Il = Ll("text");
});
function Ol(n, c, h) {
  let m = Object.assign(h ? Object.assign({}, h) : { line: 1, column: 1, offset: 0 }, { _index: 0, _bufferIndex: -1 }), d = {}, v = [], g = [], w = [], z = true, N = { consume: re, enter: ce, exit: Y, attempt: fe(me), check: fe(ze), interrupt: fe(ze, { interrupt: true }) }, A = { previous: null, code: null, containerState: {}, events: [], parser: n, sliceStream: H, sliceSerialize: F, now: j, defineSkip: O, write: T }, P = c.tokenize.call(A, N), D;
  return c.resolveAll && v.push(c), A;
  function T(ie) {
    return g = We(g, ie), _(), g[g.length - 1] !== null ? [] : (we(c, 0), A.events = Gt(v, A.events, A), A.events);
  }
  function F(ie, ge) {
    return Ms(H(ie), ge);
  }
  function H(ie) {
    return Ts(g, ie);
  }
  function j() {
    return Object.assign({}, m);
  }
  function O(ie) {
    d[ie.line] = ie.column, Fe();
  }
  function _() {
    let ie;
    for (; m._index < g.length;) {
      let ge = g[m._index];
      if (typeof ge == "string")
        for (ie = m._index, m._bufferIndex < 0 && (m._bufferIndex = 0); m._index === ie && m._bufferIndex < ge.length;)
          te(ge.charCodeAt(m._bufferIndex));
      else
        te(ge);
    }
  }
  function te(ie) {
    z = void 0, D = ie, P = P(ie);
  }
  function re(ie) {
    X(ie) ? (m.line++, m.column = 1, m.offset += ie === -3 ? 2 : 1, Fe()) : ie !== -1 && (m.column++, m.offset++), m._bufferIndex < 0 ? m._index++ : (m._bufferIndex++, m._bufferIndex === g[m._index].length && (m._bufferIndex = -1, m._index++)), A.previous = ie, z = true;
  }
  function ce(ie, ge) {
    let Oe = ge || {};
    return Oe.type = ie, Oe.start = j(), A.events.push(["enter", Oe, A]), w.push(Oe), Oe;
  }
  function Y(ie) {
    let ge = w.pop();
    return ge.end = j(), A.events.push(["exit", ge, A]), ge;
  }
  function me(ie, ge) {
    we(ie, ge.from);
  }
  function ze(ie, ge) {
    ge.restore();
  }
  function fe(ie, ge) {
    return Oe;
    function Oe(je, ne, q) {
      let Xe, Te, M, B;
      return Array.isArray(je) ? St(je) : "tokenize" in je ? St([je]) : ut(je);
      function ut(Ye) {
        return Xt;
        function Xt(ht) {
          let At = ht !== null && Ye[ht], zt = ht !== null && Ye.null, Ct = [...Array.isArray(At) ? At : At ? [At] : [], ...Array.isArray(zt) ? zt : zt ? [zt] : []];
          return St(Ct)(ht);
        }
      }
      function St(Ye) {
        return Xe = Ye, Te = 0, Ye.length === 0 ? q : Lt(Ye[Te]);
      }
      function Lt(Ye) {
        return Xt;
        function Xt(ht) {
          return B = xe(), M = Ye, Ye.partial || (A.currentConstruct = Ye), Ye.name && A.parser.constructs.disable.null.includes(Ye.name) ? mt(ht) : Ye.tokenize.call(ge ? Object.assign(Object.create(A), ge) : A, N, Yt, mt)(ht);
        }
      }
      function Yt(Ye) {
        return z = true, ie(M, B), ne;
      }
      function mt(Ye) {
        return z = true, B.restore(), ++Te < Xe.length ? Lt(Xe[Te]) : q;
      }
    }
  }
  function we(ie, ge) {
    ie.resolveAll && !v.includes(ie) && v.push(ie), ie.resolve && Ge(A.events, ge, A.events.length - ge, ie.resolve(A.events.slice(ge), A)), ie.resolveTo && (A.events = ie.resolveTo(A.events, A));
  }
  function xe() {
    let ie = j(), ge = A.previous, Oe = A.currentConstruct, je = A.events.length, ne = Array.from(w);
    return { restore: q, from: je };
    function q() {
      m = ie, A.previous = ge, A.currentConstruct = Oe, A.events.length = je, w = ne, Fe();
    }
  }
  function Fe() {
    m.line in d && m.column < 2 && (m.column = d[m.line], m.offset += d[m.line] - 1);
  }
}
function Ts(n, c) {
  let h = c.start._index, m = c.start._bufferIndex, d = c.end._index, v = c.end._bufferIndex, g;
  return h === d ? g = [n[h].slice(m, v)] : (g = n.slice(h, d), m > -1 && (g[0] = g[0].slice(m)), v > 0 && g.push(n[d].slice(0, v))), g;
}
function Ms(n, c) {
  let h = -1, m = [], d;
  for (; ++h < n.length;) {
    let v = n[h], g;
    if (typeof v == "string")
      g = v;
    else
      switch (v) {
        case -5: {
          g = "\r";
          break;
        }
        case -4: {
          g = `
`;
          break;
        }
        case -3: {
          g = `\r
`;
          break;
        }
        case -2: {
          g = c ? " " : "	";
          break;
        }
        case -1: {
          if (!c && d)
            continue;
          g = " ";
          break;
        }
        default:
          g = String.fromCharCode(v);
      }
    d = v === -2, m.push(g);
  }
  return m.join("");
}
var Rl = J(() => {
  ve();
  kt();
  B0();
});
var Yn = {};
co(Yn, { contentInitial: () => Ds, disable: () => Os, document: () => Es, flow: () => Ns, flowInitial: () => Fs, insideSpan: () => qs, string: () => Is, text: () => Ls });
var Es;
var Ds;
var Fs;
var Ns;
var Is;
var Ls;
var qs;
var Os;
var Hl = J(() => {
  Gn();
  Wn();
  Es = { [42]: Je, [43]: Je, [45]: Je, [48]: Je, [49]: Je, [50]: Je, [51]: Je, [52]: Je, [53]: Je, [54]: Je, [55]: Je, [56]: Je, [57]: Je, [62]: pr }, Ds = { [91]: Ln }, Fs = { [-2]: M0, [-1]: M0, [32]: M0 }, Ns = { [35]: On, [42]: i0, [45]: [wr, i0], [60]: Hn, [61]: wr, [95]: i0, [96]: gr, [126]: gr }, Is = { [38]: dr, [92]: fr }, Ls = { [-5]: E0, [-4]: E0, [-3]: E0, [33]: jn, [38]: dr, [42]: T0, [60]: [Bn, Pn], [91]: Vn, [92]: [qn, fr], [93]: n0, [95]: T0, [96]: Tn }, qs = { null: [T0, Fl] }, Os = { null: [] };
});
function Pl(n = {}) {
  let c = ur([Yn].concat(n.extensions || [])), h = { defined: [], lazy: {}, constructs: c, content: m(nl), document: m(al), flow: m(El), string: m(Nl), text: m(Il) };
  return h;
  function m(d) {
    return v;
    function v(g) {
      return Ol(h, d, g);
    }
  }
}
var jl = J(() => {
  sr();
  il();
  ul();
  Dl();
  Wn();
  Rl();
  Hl();
});
function Vl(n) {
  for (; !vr(n);)
    ;
  return n;
}
var Ul = J(() => {
  Mn();
});
function Wl() {
  let n = 1, c = "", h = true, m;
  return d;
  function d(v, g, w) {
    let z = [], N, A, P, D, T;
    for (v = c + v.toString(g), P = 0, c = "", h && (v.charCodeAt(0) === 65279 && P++, h = void 0); P < v.length;) {
      if (Gl.lastIndex = P, N = Gl.exec(v), D = N && N.index !== void 0 ? N.index : v.length, T = v.charCodeAt(D), !N) {
        c = v.slice(P);
        break;
      }
      if (T === 10 && P === D && m)
        z.push(-3), m = void 0;
      else
        switch (m && (z.push(-5), m = void 0), P < D && (z.push(v.slice(P, D)), n += D - P), T) {
          case 0: {
            z.push(65533), n++;
            break;
          }
          case 9: {
            for (A = Math.ceil(n / 4) * 4, z.push(-2); n++ < A;)
              z.push(-1);
            break;
          }
          case 10: {
            z.push(-4), n = 1;
            break;
          }
          default:
            m = true, n = 1;
        }
      P = D + 1;
    }
    return w && (m && z.push(-5), c && z.push(c), z.push(null)), z;
  }
}
var Gl;
var Yl = J(() => {
  Gl = /[\0\t\n\r]/g;
});
var Xl;
var $l = J(() => {
  rl();
  jl();
  Ul();
  Yl();
  Xl = function (n, c, h) {
    return typeof c != "string" && (h = c, c = void 0), tl(h)(Vl(Pl(h).document().write(Wl()(n, c, true))));
  };
});
function Hs(n, c, h) {
  let m = this, d, v;
  return g;
  function g(T) {
    return !tu(T) || !nu(m.previous) || Qn(m.events) ? h(T) : (n.enter("literalAutolink"), n.enter("literalAutolinkEmail"), w(T));
  }
  function w(T) {
    return tu(T) ? (n.consume(T), w) : T === 64 ? (n.consume(T), z) : h(T);
  }
  function z(T) {
    return T === 46 ? n.check(f0, D, N)(T) : T === 45 || T === 95 ? n.check(f0, h, A)(T) : He(T) ? (!v && e0(T) && (v = true), n.consume(T), z) : D(T);
  }
  function N(T) {
    return n.consume(T), d = true, v = void 0, z;
  }
  function A(T) {
    return n.consume(T), P;
  }
  function P(T) {
    return T === 46 ? n.check(f0, h, N)(T) : z(T);
  }
  function D(T) {
    return d && !v ? (n.exit("literalAutolinkEmail"), n.exit("literalAutolink"), c(T)) : h(T);
  }
}
function Ps(n, c, h) {
  let m = this;
  return d;
  function d(g) {
    return g !== 87 && g !== 119 || !ru(m.previous) || Qn(m.events) ? h(g) : (n.enter("literalAutolink"), n.enter("literalAutolinkWww"), n.check(Rs, n.attempt(Zl, n.attempt(Ql, v), h), h)(g));
  }
  function v(g) {
    return n.exit("literalAutolinkWww"), n.exit("literalAutolink"), c(g);
  }
}
function js(n, c, h) {
  let m = this;
  return d;
  function d(F) {
    return F !== 72 && F !== 104 || !Zn(m.previous) || Qn(m.events) ? h(F) : (n.enter("literalAutolink"), n.enter("literalAutolinkHttp"), n.consume(F), v);
  }
  function v(F) {
    return F === 84 || F === 116 ? (n.consume(F), g) : h(F);
  }
  function g(F) {
    return F === 84 || F === 116 ? (n.consume(F), w) : h(F);
  }
  function w(F) {
    return F === 80 || F === 112 ? (n.consume(F), z) : h(F);
  }
  function z(F) {
    return F === 83 || F === 115 ? (n.consume(F), N) : N(F);
  }
  function N(F) {
    return F === 58 ? (n.consume(F), A) : h(F);
  }
  function A(F) {
    return F === 47 ? (n.consume(F), P) : h(F);
  }
  function P(F) {
    return F === 47 ? (n.consume(F), D) : h(F);
  }
  function D(F) {
    return F === null || jt(F) || z0(F) || C0(F) ? h(F) : n.attempt(Zl, n.attempt(Ql, T), h)(F);
  }
  function T(F) {
    return n.exit("literalAutolinkHttp"), n.exit("literalAutolink"), c(F);
  }
}
function Vs(n, c, h) {
  return m;
  function m(z) {
    return n.consume(z), d;
  }
  function d(z) {
    return z === 87 || z === 119 ? (n.consume(z), v) : h(z);
  }
  function v(z) {
    return z === 87 || z === 119 ? (n.consume(z), g) : h(z);
  }
  function g(z) {
    return z === 46 ? (n.consume(z), w) : h(z);
  }
  function w(z) {
    return z === null || X(z) ? h(z) : c(z);
  }
}
function Us(n, c, h) {
  let m, d;
  return v;
  function v(z) {
    return z === 38 ? n.check(Kl, w, g)(z) : z === 46 || z === 95 ? n.check(f0, w, g)(z) : z === null || jt(z) || z0(z) || z !== 45 && C0(z) ? w(z) : (n.consume(z), v);
  }
  function g(z) {
    return z === 46 ? (d = m, m = void 0, n.consume(z), v) : (z === 95 && (m = true), n.consume(z), v);
  }
  function w(z) {
    return !d && !m ? c(z) : h(z);
  }
}
function Gs(n, c) {
  let h = 0;
  return m;
  function m(g) {
    return g === 38 ? n.check(Kl, c, d)(g) : (g === 40 && h++, g === 41 ? n.check(f0, v, d)(g) : $n(g) ? c(g) : eu(g) ? n.check(f0, c, d)(g) : (n.consume(g), m));
  }
  function d(g) {
    return n.consume(g), m;
  }
  function v(g) {
    return h--, h < 0 ? c(g) : d(g);
  }
}
function Ws(n, c, h) {
  return m;
  function m(g) {
    return n.consume(g), d;
  }
  function d(g) {
    return Ke(g) ? (n.consume(g), d) : g === 59 ? (n.consume(g), v) : h(g);
  }
  function v(g) {
    return $n(g) ? c(g) : h(g);
  }
}
function Ys(n, c, h) {
  return m;
  function m(v) {
    return n.consume(v), d;
  }
  function d(v) {
    return eu(v) ? (n.consume(v), d) : $n(v) ? c(v) : h(v);
  }
}
function eu(n) {
  return n === 33 || n === 34 || n === 39 || n === 41 || n === 42 || n === 44 || n === 46 || n === 58 || n === 59 || n === 60 || n === 63 || n === 95 || n === 126;
}
function $n(n) {
  return n === null || n === 60 || Ae(n);
}
function tu(n) {
  return n === 43 || n === 45 || n === 46 || n === 95 || He(n);
}
function ru(n) {
  return n === null || n === 40 || n === 42 || n === 95 || n === 126 || Ae(n);
}
function Zn(n) {
  return n === null || !Ke(n);
}
function nu(n) {
  return n !== 47 && Zn(n);
}
function Qn(n) {
  let c = n.length, h = false;
  for (; c--;) {
    let m = n[c][1];
    if ((m.type === "labelLink" || m.type === "labelImage") && !m._balanced) {
      h = true;
      break;
    }
    if (m._gfmAutolinkLiteralWalkedInto) {
      h = false;
      break;
    }
  }
  return n.length > 0 && !h && (n[n.length - 1][1]._gfmAutolinkLiteralWalkedInto = true), h;
}
var Rs;
var Zl;
var Ql;
var f0;
var Kl;
var Jl;
var _l;
var It;
var wt;
var Xn;
var a0;
var iu = J(() => {
  ve();
  Rs = { tokenize: Vs, partial: true }, Zl = { tokenize: Us, partial: true }, Ql = { tokenize: Gs, partial: true }, f0 = { tokenize: Ys, partial: true }, Kl = { tokenize: Ws, partial: true }, Jl = { tokenize: Ps, previous: ru }, _l = { tokenize: js, previous: Zn }, It = { tokenize: Hs, previous: nu }, wt = {}, Xn = { text: wt }, a0 = 48;
  for (; a0 < 123;)
    wt[a0] = It, a0++, a0 === 58 ? a0 = 65 : a0 === 91 && (a0 = 97);
  wt[43] = It;
  wt[45] = It;
  wt[46] = It;
  wt[95] = It;
  wt[72] = [It, _l];
  wt[104] = [It, _l];
  wt[87] = [It, Jl];
  wt[119] = [It, Jl];
});
function Xs(n) {
  Jn.call(this, n, "http://");
}
function $s(n) {
  Jn.call(this, n, "mailto:");
}
function Zs(n) {
  Jn.call(this, n);
}
function Jn(n, c) {
  let h = this.sliceSerialize(n);
  this.tag('<a href="' + t0((c || "") + h) + '">'), this.raw(this.encode(h)), this.tag("</a>");
}
var Kn;
var au = J(() => {
  zn();
  Kn = { exit: { literalAutolinkEmail: $s, literalAutolinkHttp: Zs, literalAutolinkWww: Xs } };
});
var lu = J(() => {
  iu();
  au();
});
var _n;
var uu = J(() => {
  _n = {
    enter: {
      strikethrough() {
        this.tag("<del>");
      }
    }, exit: {
      strikethrough() {
        this.tag("</del>");
      }
    }
  };
});
function ei(n = {}) {
  let c = n.singleTilde, h = { tokenize: d, resolveAll: m };
  return c == null && (c = true), { text: { [126]: h }, insideSpan: { null: [h] } };
  function m(v, g) {
    let w = -1, z, N, A, P;
    for (; ++w < v.length;)
      if (v[w][0] === "enter" && v[w][1].type === "strikethroughSequenceTemporary" && v[w][1]._close) {
        for (A = w; A--;)
          if (v[A][0] === "exit" && v[A][1].type === "strikethroughSequenceTemporary" && v[A][1]._open && v[w][1].end.offset - v[w][1].start.offset == v[A][1].end.offset - v[A][1].start.offset) {
            v[w][1].type = "strikethroughSequence", v[A][1].type = "strikethroughSequence", z = { type: "strikethrough", start: Object.assign({}, v[A][1].start), end: Object.assign({}, v[w][1].end) }, N = { type: "strikethroughText", start: Object.assign({}, v[A][1].end), end: Object.assign({}, v[w][1].start) }, P = [["enter", z, g], ["enter", v[A][1], g], ["exit", v[A][1], g], ["enter", N, g]], Ge(P, P.length, 0, Gt(g.parser.constructs.insideSpan.null, v.slice(A + 1, w), g)), Ge(P, P.length, 0, [["exit", N, g], ["enter", v[w][1], g], ["exit", v[w][1], g], ["exit", z, g]]), Ge(v, A - 1, w - A + 3, P), w = A + P.length - 2;
            break;
          }
      }
    for (w = -1; ++w < v.length;)
      v[w][1].type === "strikethroughSequenceTemporary" && (v[w][1].type = "data");
    return v;
  }
  function d(v, g, w) {
    let z = this.previous, N = this.events, A = 0;
    return P;
    function P(T) {
      return T !== 126 || z === 126 && N[N.length - 1][1].type !== "characterEscape" ? w(T) : (v.enter("strikethroughSequenceTemporary"), D(T));
    }
    function D(T) {
      let F = p0(z);
      if (T === 126)
        return A > 1 ? w(T) : (v.consume(T), A++, D);
      if (A < 2 && !c)
        return w(T);
      let H = v.exit("strikethroughSequenceTemporary"), j = p0(T);
      return H._open = !j || j === 2 && Boolean(F), H._close = !F || F === 2 && Boolean(j), g(T);
    }
  }
}
var ou = J(() => {
  kt();
  Cn();
  B0();
});
var su = J(() => {
  uu();
  ou();
});
function Qs(n, c) {
  return c === "|" ? c : n;
}
var ti;
var ri;
var mu = J(() => {
  ti = { null: "", left: ' align="left"', right: ' align="right"', center: ' align="center"' }, ri = {
    enter: {
      table(n) {
        this.lineEndingIfNeeded(), this.tag("<table>"), this.setData("tableAlign", n._align);
      }, tableBody() {
        this.setData("slurpOneLineEnding"), this.tag("<tbody>");
      }, tableData() {
        let n = ti[this.getData("tableAlign")[this.getData("tableColumn")]];
        n === void 0 ? this.buffer() : (this.lineEndingIfNeeded(), this.tag("<td" + n + ">"));
      }, tableHead() {
        this.lineEndingIfNeeded(), this.tag("<thead>");
      }, tableHeader() {
        this.lineEndingIfNeeded(), this.tag("<th" + ti[this.getData("tableAlign")[this.getData("tableColumn")]] + ">");
      }, tableRow() {
        this.setData("tableColumn", 0), this.lineEndingIfNeeded(), this.tag("<tr>");
      }
    }, exit: {
      codeTextData(n) {
        let c = this.sliceSerialize(n);
        this.getData("tableAlign") && (c = c.replace(/\\([\\|])/g, Qs)), this.raw(this.encode(c));
      }, table() {
        this.setData("tableAlign"), this.setData("slurpAllLineEndings"), this.lineEndingIfNeeded(), this.tag("</table>");
      }, tableBody() {
        this.lineEndingIfNeeded(), this.tag("</tbody>");
      }, tableData() {
        let n = this.getData("tableColumn");
        n in this.getData("tableAlign") ? (this.tag("</td>"), this.setData("tableColumn", n + 1)) : this.resume();
      }, tableHead() {
        this.lineEndingIfNeeded(), this.tag("</thead>"), this.setData("slurpOneLineEnding", true);
      }, tableHeader() {
        this.tag("</th>"), this.setData("tableColumn", this.getData("tableColumn") + 1);
      }, tableRow() {
        let n = this.getData("tableAlign"), c = this.getData("tableColumn");
        for (; c < n.length;)
          this.lineEndingIfNeeded(), this.tag("<td" + ti[n[c]] + "></td>"), c++;
        this.setData("tableColumn", c), this.lineEndingIfNeeded(), this.tag("</tr>");
      }
    }
  };
});
function Js(n, c) {
  let h = -1, m, d, v, g, w, z, N, A, P, D;
  for (; ++h < n.length;)
    m = n[h][1], g && (m.type === "temporaryTableCellContent" && (A = A || h, P = h), (m.type === "tableCellDivider" || m.type === "tableRow") && P && (z = { type: "tableContent", start: n[A][1].start, end: n[P][1].end }, N = { type: "chunkText", start: z.start, end: z.end, contentType: "text" }, n.splice(A, P - A + 1, ["enter", z, c], ["enter", N, c], ["exit", N, c], ["exit", z, c]), h -= P - A - 3, A = void 0, P = void 0)), n[h][0] === "exit" && D && D + 1 < h && (m.type === "tableCellDivider" || m.type === "tableRow" && (D + 3 < h || n[D][1].type !== "whitespace")) && (w = { type: v ? "tableDelimiter" : d ? "tableHeader" : "tableData", start: n[D][1].start, end: n[h][1].end }, n.splice(h + (m.type === "tableCellDivider" ? 1 : 0), 0, ["exit", w, c]), n.splice(D, 0, ["enter", w, c]), h += 2, D = h + 1), m.type === "tableRow" && (g = n[h][0] === "enter", g && (D = h + 1)), m.type === "tableDelimiterRow" && (v = n[h][0] === "enter", v && (D = h + 1)), m.type === "tableHead" && (d = n[h][0] === "enter");
  return n;
}
function _s(n, c, h) {
  let m = this, d = [], v = 0, g, w;
  return z;
  function z(q) {
    return n.enter("table")._align = d, n.enter("tableHead"), n.enter("tableRow"), q === 124 ? N(q) : (v++, n.enter("temporaryTableCellContent"), D(q));
  }
  function N(q) {
    return n.enter("tableCellDivider"), n.consume(q), n.exit("tableCellDivider"), g = true, A;
  }
  function A(q) {
    return q === null || X(q) ? F(q) : pe(q) ? (n.enter("whitespace"), n.consume(q), P) : (g && (g = void 0, v++), q === 124 ? N(q) : (n.enter("temporaryTableCellContent"), D(q)));
  }
  function P(q) {
    return pe(q) ? (n.consume(q), P) : (n.exit("whitespace"), A(q));
  }
  function D(q) {
    return q === null || q === 124 || Ae(q) ? (n.exit("temporaryTableCellContent"), A(q)) : (n.consume(q), q === 92 ? T : D);
  }
  function T(q) {
    return q === 92 || q === 124 ? (n.consume(q), D) : D(q);
  }
  function F(q) {
    return q === null ? h(q) : (n.exit("tableRow"), n.exit("tableHead"), n.attempt({ tokenize: ne, partial: true }, H, h)(q));
  }
  function H(q) {
    return n.check(Ks, h, oe(n, j, "linePrefix", 4))(q);
  }
  function j(q) {
    return q === null || Ae(q) ? h(q) : (n.enter("tableDelimiterRow"), O(q));
  }
  function O(q) {
    return q === null || X(q) ? Y(q) : pe(q) ? (n.enter("whitespace"), n.consume(q), _) : q === 45 ? (n.enter("tableDelimiterFiller"), n.consume(q), w = true, d.push(null), te) : q === 58 ? (n.enter("tableDelimiterAlignment"), n.consume(q), n.exit("tableDelimiterAlignment"), d.push("left"), re) : q === 124 ? (n.enter("tableCellDivider"), n.consume(q), n.exit("tableCellDivider"), O) : h(q);
  }
  function _(q) {
    return pe(q) ? (n.consume(q), _) : (n.exit("whitespace"), O(q));
  }
  function te(q) {
    return q === 45 ? (n.consume(q), te) : (n.exit("tableDelimiterFiller"), q === 58 ? (n.enter("tableDelimiterAlignment"), n.consume(q), n.exit("tableDelimiterAlignment"), d[d.length - 1] = d[d.length - 1] === "left" ? "center" : "right", ce) : O(q));
  }
  function re(q) {
    return q === 45 ? (n.enter("tableDelimiterFiller"), n.consume(q), w = true, te) : h(q);
  }
  function ce(q) {
    return q === null || X(q) ? Y(q) : pe(q) ? (n.enter("whitespace"), n.consume(q), _) : q === 124 ? (n.enter("tableCellDivider"), n.consume(q), n.exit("tableCellDivider"), O) : h(q);
  }
  function Y(q) {
    return n.exit("tableDelimiterRow"), !w || v !== d.length ? h(q) : q === null ? me(q) : n.check(hu, me, n.attempt({ tokenize: ne, partial: true }, oe(n, ze, "linePrefix", 4), me))(q);
  }
  function me(q) {
    return n.exit("table"), c(q);
  }
  function ze(q) {
    return n.enter("tableBody"), fe(q);
  }
  function fe(q) {
    return n.enter("tableRow"), q === 124 ? we(q) : (n.enter("temporaryTableCellContent"), ie(q));
  }
  function we(q) {
    return n.enter("tableCellDivider"), n.consume(q), n.exit("tableCellDivider"), xe;
  }
  function xe(q) {
    return q === null || X(q) ? Oe(q) : pe(q) ? (n.enter("whitespace"), n.consume(q), Fe) : q === 124 ? we(q) : (n.enter("temporaryTableCellContent"), ie(q));
  }
  function Fe(q) {
    return pe(q) ? (n.consume(q), Fe) : (n.exit("whitespace"), xe(q));
  }
  function ie(q) {
    return q === null || q === 124 || Ae(q) ? (n.exit("temporaryTableCellContent"), xe(q)) : (n.consume(q), q === 92 ? ge : ie);
  }
  function ge(q) {
    return q === 92 || q === 124 ? (n.consume(q), ie) : ie(q);
  }
  function Oe(q) {
    return n.exit("tableRow"), q === null ? je(q) : n.check(hu, je, n.attempt({ tokenize: ne, partial: true }, oe(n, fe, "linePrefix", 4), je))(q);
  }
  function je(q) {
    return n.exit("tableBody"), me(q);
  }
  function ne(q, Xe, Te) {
    return M;
    function M(ut) {
      return q.enter("lineEnding"), q.consume(ut), q.exit("lineEnding"), B;
    }
    function B(ut) {
      return m.parser.lazy[m.now().line] ? Te(ut) : Xe(ut);
    }
  }
}
function e4(n, c, h) {
  return m;
  function m(g) {
    return g !== 45 ? h(g) : (n.enter("setextUnderline"), d(g));
  }
  function d(g) {
    return g === 45 ? (n.consume(g), d) : v(g);
  }
  function v(g) {
    return g === null || X(g) ? c(g) : pe(g) ? (n.consume(g), v) : h(g);
  }
}
function t4(n, c, h) {
  let m = 0;
  return d;
  function d(g) {
    return n.enter("check"), n.consume(g), v;
  }
  function v(g) {
    return g === -1 || g === 32 ? (n.consume(g), m++, m === 4 ? c : v) : g === null || Ae(g) ? c(g) : h(g);
  }
}
var ni;
var Ks;
var hu;
var cu = J(() => {
  Pe();
  ve();
  ni = { flow: { null: { tokenize: _s, resolve: Js } } }, Ks = { tokenize: e4, partial: true }, hu = { tokenize: t4, partial: true };
});
var pu = J(() => {
  mu();
  cu();
});
function gu(n, c) {
  let h = this.sliceSerialize(n);
  this.options.allowDangerousHtml && (h = h.replace(c, "&lt;$1$2")), this.raw(this.encode(h));
}
var fu;
var r4;
var du;
var vu = J(() => {
  fu = /<(\/?)(iframe|noembed|noframes|plaintext|script|style|title|textarea|xmp)(?=[\t\n\f\r />])/gi, r4 = new RegExp("^" + fu.source, "i"), du = {
    exit: {
      htmlFlowData(n) {
        gu.call(this, n, fu);
      }, htmlTextData(n) {
        gu.call(this, n, r4);
      }
    }
  };
});
var ii;
var xu = J(() => {
  ii = {
    enter: {
      taskListCheck() {
        this.tag("<input ");
      }
    }, exit: {
      taskListCheck() {
        this.tag('disabled="" type="checkbox">');
      }, taskListCheckValueChecked() {
        this.tag('checked="" ');
      }
    }
  };
});
function i4(n, c, h) {
  let m = this;
  return d;
  function d(w) {
    return m.previous !== null || !m._gfmTasklistFirstContentOfListItem ? h(w) : (n.enter("taskListCheck"), n.enter("taskListCheckMarker"), n.consume(w), n.exit("taskListCheckMarker"), v);
  }
  function v(w) {
    return pe(w) ? (n.enter("taskListCheckValueUnchecked"), n.consume(w), n.exit("taskListCheckValueUnchecked"), g) : w === 88 || w === 120 ? (n.enter("taskListCheckValueChecked"), n.consume(w), n.exit("taskListCheckValueChecked"), g) : h(w);
  }
  function g(w) {
    return w === 93 ? (n.enter("taskListCheckMarker"), n.consume(w), n.exit("taskListCheckMarker"), n.exit("taskListCheck"), n.check({ tokenize: a4 }, c, h)) : h(w);
  }
}
function a4(n, c, h) {
  let m = this;
  return oe(n, d, "whitespace");
  function d(v) {
    let g = m.events[m.events.length - 1];
    return g && g[1].type === "whitespace" && v !== null && !Ae(v) ? c(v) : h(v);
  }
}
var n4;
var ai;
var bu = J(() => {
  Pe();
  ve();
  n4 = { tokenize: i4 }, ai = { text: { [91]: n4 } };
});
var yu = J(() => {
  xu();
  bu();
});
function ku(n) {
  return ur([Xn, ei(n), ni, ai]);
}
var wu;
var Su = J(() => {
  sr();
  lu();
  su();
  pu();
  vu();
  yu();
  wu = or([Kn, _n, ri, du, ii]);
});
function u4(n, c, h) {
  let m = this, d = m.events[m.events.length - 1], v = d && d[1].type === "linePrefix" ? d[2].sliceSerialize(d[1], true).length : 0, g = 0;
  return w;
  function w(j) {
    return n.enter("mathFlow"), n.enter("mathFlowFence"), n.enter("mathFlowFenceSequence"), z(j);
  }
  function z(j) {
    return j === 36 ? (n.consume(j), g++, z) : (n.exit("mathFlowFenceSequence"), g < 2 ? h(j) : oe(n, N, "whitespace")(j));
  }
  function N(j) {
    return j === null || X(j) ? P(j) : (n.enter("mathFlowFenceMeta"), n.enter("chunkString", { contentType: "string" }), A(j));
  }
  function A(j) {
    return j === null || X(j) ? (n.exit("chunkString"), n.exit("mathFlowFenceMeta"), P(j)) : j === 36 ? h(j) : (n.consume(j), A);
  }
  function P(j) {
    return n.exit("mathFlowFence"), m.interrupt ? c(j) : D(j);
  }
  function D(j) {
    return j === null ? F(j) : X(j) ? n.attempt(l4, n.attempt({ tokenize: H, partial: true }, F, v ? oe(n, D, "linePrefix", v + 1) : D), F)(j) : (n.enter("mathFlowValue"), T(j));
  }
  function T(j) {
    return j === null || X(j) ? (n.exit("mathFlowValue"), D(j)) : (n.consume(j), T);
  }
  function F(j) {
    return n.exit("mathFlow"), c(j);
  }
  function H(j, O, _) {
    let te = 0;
    return oe(j, re, "linePrefix", 4);
    function re(me) {
      return j.enter("mathFlowFence"), j.enter("mathFlowFenceSequence"), ce(me);
    }
    function ce(me) {
      return me === 36 ? (j.consume(me), te++, ce) : te < g ? _(me) : (j.exit("mathFlowFenceSequence"), oe(j, Y, "whitespace")(me));
    }
    function Y(me) {
      return me === null || X(me) ? (j.exit("mathFlowFence"), O(me)) : _(me);
    }
  }
}
function o4(n, c, h) {
  let m = this;
  return d;
  function d(g) {
    return n.enter("lineEnding"), n.consume(g), n.exit("lineEnding"), v;
  }
  function v(g) {
    return m.parser.lazy[m.now().line] ? h(g) : c(g);
  }
}
var Au;
var l4;
var zu = J(() => {
  Pe();
  ve();
  Au = { tokenize: u4, concrete: true }, l4 = { tokenize: o4, partial: true };
});
function s4(n) {
  let c = n.length - 4, h = 3, m, d;
  if ((n[h][1].type === "lineEnding" || n[h][1].type === "space") && (n[c][1].type === "lineEnding" || n[c][1].type === "space")) {
    for (m = h; ++m < c;)
      if (n[m][1].type === "mathTextData") {
        n[c][1].type = "mathTextPadding", n[h][1].type = "mathTextPadding", h += 2, c -= 2;
        break;
      }
  }
  for (m = h - 1, c++; ++m <= c;)
    d === void 0 ? m !== c && n[m][1].type !== "lineEnding" && (d = m) : (m === c || n[m][1].type === "lineEnding") && (n[d][1].type = "mathTextData", m !== d + 2 && (n[d][1].end = n[m - 1][1].end, n.splice(d + 2, m - d - 2), c -= m - d - 2, m = d + 2), d = void 0);
  return n;
}
function m4(n) {
  return n !== 36 || this.events[this.events.length - 1][1].type === "characterEscape";
}
function h4(n, c, h) {
  let m = this, d = 0, v, g;
  return w;
  function w(D) {
    return n.enter("mathText"), n.enter("mathTextSequence"), z(D);
  }
  function z(D) {
    return D === 36 ? (n.consume(D), d++, z) : (n.exit("mathTextSequence"), N(D));
  }
  function N(D) {
    return D === null ? h(D) : D === 36 ? (g = n.enter("mathTextSequence"), v = 0, P(D)) : D === 32 ? (n.enter("space"), n.consume(D), n.exit("space"), N) : X(D) ? (n.enter("lineEnding"), n.consume(D), n.exit("lineEnding"), N) : (n.enter("mathTextData"), A(D));
  }
  function A(D) {
    return D === null || D === 32 || D === 36 || X(D) ? (n.exit("mathTextData"), N(D)) : (n.consume(D), A);
  }
  function P(D) {
    return D === 36 ? (n.consume(D), v++, P) : v === d ? (n.exit("mathTextSequence"), n.exit("mathText"), c(D)) : (g.type = "mathTextData", A(D));
  }
}
var Cu;
var Bu = J(() => {
  ve();
  Cu = { tokenize: h4, resolve: s4, previous: m4 };
});
var li;
var Tu = J(() => {
  zu();
  Bu();
  li = { flow: { [36]: Au }, text: { [36]: Cu } };
});
var Mu = dn((D0, ui) => {
  (function (c, h) {
    typeof D0 == "object" && typeof ui == "object" ? ui.exports = h() : typeof define == "function" && define.amd ? define([], h) : typeof D0 == "object" ? D0.katex = h() : c.katex = h();
  })(typeof self != "undefined" ? self : D0, function () {
    return function () {
      "use strict";
      var n = {};
      (function () {
        n.d = function (o, e) {
          for (var t in e)
            n.o(e, t) && !n.o(o, t) && Object.defineProperty(o, t, { enumerable: true, get: e[t] });
        };
      })(), function () {
        n.o = function (o, e) {
          return Object.prototype.hasOwnProperty.call(o, e);
        };
      }();
      var c = {};
      n.d(c, {
        default: function () {
          return to;
        }
      });
      var h = function o(e, t) {
        this.position = void 0;
        var r = "KaTeX parse error: " + e, i, a = t && t.loc;
        if (a && a.start <= a.end) {
          var u = a.lexer.input;
          i = a.start;
          var p = a.end;
          i === u.length ? r += " at end of input: " : r += " at position " + (i + 1) + ": ";
          var x = u.slice(i, p).replace(/[^]/g, "$&\u0332"), k;
          i > 15 ? k = "\u2026" + u.slice(i - 15, i) : k = u.slice(0, i);
          var C;
          p + 15 < u.length ? C = u.slice(p, p + 15) + "\u2026" : C = u.slice(p), r += k + x + C;
        }
        var I = new Error(r);
        return I.name = "ParseError", I.__proto__ = o.prototype, I.position = i, I;
      };
      h.prototype.__proto__ = Error.prototype;
      var m = h, d = function (e, t) {
        return e.indexOf(t) !== -1;
      }, v = function (e, t) {
        return e === void 0 ? t : e;
      }, g = /([A-Z])/g, w = function (e) {
        return e.replace(g, "-$1").toLowerCase();
      }, z = { "&": "&amp;", ">": "&gt;", "<": "&lt;", '"': "&quot;", "'": "&#x27;" }, N = /[&><"']/g;
      function A(o) {
        return String(o).replace(N, function (e) {
          return z[e];
        });
      }
      var P = function o(e) {
        return e.type === "ordgroup" || e.type === "color" ? e.body.length === 1 ? o(e.body[0]) : e : e.type === "font" ? o(e.body) : e;
      }, D = function (e) {
        var t = P(e);
        return t.type === "mathord" || t.type === "textord" || t.type === "atom";
      }, T = function (e) {
        if (!e)
          throw new Error("Expected non-null, but got " + String(e));
        return e;
      }, F = function (e) {
        var t = /^\s*([^\\/#]*?)(?::|&#0*58|&#x0*3a)/i.exec(e);
        return t != null ? t[1] : "_relative";
      }, H = { contains: d, deflt: v, escape: A, hyphenate: w, getBaseElem: P, isCharacterBox: D, protocolFromUrl: F }, j = function () {
        function o(t) {
          this.displayMode = void 0, this.output = void 0, this.leqno = void 0, this.fleqn = void 0, this.throwOnError = void 0, this.errorColor = void 0, this.macros = void 0, this.minRuleThickness = void 0, this.colorIsTextColor = void 0, this.strict = void 0, this.trust = void 0, this.maxSize = void 0, this.maxExpand = void 0, this.globalGroup = void 0, t = t || {}, this.displayMode = H.deflt(t.displayMode, false), this.output = H.deflt(t.output, "htmlAndMathml"), this.leqno = H.deflt(t.leqno, false), this.fleqn = H.deflt(t.fleqn, false), this.throwOnError = H.deflt(t.throwOnError, true), this.errorColor = H.deflt(t.errorColor, "#cc0000"), this.macros = t.macros || {}, this.minRuleThickness = Math.max(0, H.deflt(t.minRuleThickness, 0)), this.colorIsTextColor = H.deflt(t.colorIsTextColor, false), this.strict = H.deflt(t.strict, "warn"), this.trust = H.deflt(t.trust, false), this.maxSize = Math.max(0, H.deflt(t.maxSize, 1 / 0)), this.maxExpand = Math.max(0, H.deflt(t.maxExpand, 1e3)), this.globalGroup = H.deflt(t.globalGroup, false);
        }
        var e = o.prototype;
        return e.reportNonstrict = function (r, i, a) {
          var u = this.strict;
          if (typeof u == "function" && (u = u(r, i, a)), !(!u || u === "ignore")) {
            if (u === true || u === "error")
              throw new m("LaTeX-incompatible input and strict mode is set to 'error': " + (i + " [" + r + "]"), a);
            u === "warn" ? typeof console != "undefined" && console.warn("LaTeX-incompatible input and strict mode is set to 'warn': " + (i + " [" + r + "]")) : typeof console != "undefined" && console.warn("LaTeX-incompatible input and strict mode is set to " + ("unrecognized '" + u + "': " + i + " [" + r + "]"));
          }
        }, e.useStrictBehavior = function (r, i, a) {
          var u = this.strict;
          if (typeof u == "function")
            try {
              u = u(r, i, a);
            } catch (p) {
              u = "error";
            }
          return !u || u === "ignore" ? false : u === true || u === "error" ? true : u === "warn" ? (typeof console != "undefined" && console.warn("LaTeX-incompatible input and strict mode is set to 'warn': " + (i + " [" + r + "]")), false) : (typeof console != "undefined" && console.warn("LaTeX-incompatible input and strict mode is set to " + ("unrecognized '" + u + "': " + i + " [" + r + "]")), false);
        }, e.isTrusted = function (r) {
          r.url && !r.protocol && (r.protocol = H.protocolFromUrl(r.url));
          var i = typeof this.trust == "function" ? this.trust(r) : this.trust;
          return Boolean(i);
        }, o;
      }(), O = function () {
        function o(t, r, i) {
          this.id = void 0, this.size = void 0, this.cramped = void 0, this.id = t, this.size = r, this.cramped = i;
        }
        var e = o.prototype;
        return e.sup = function () {
          return we[xe[this.id]];
        }, e.sub = function () {
          return we[Fe[this.id]];
        }, e.fracNum = function () {
          return we[ie[this.id]];
        }, e.fracDen = function () {
          return we[ge[this.id]];
        }, e.cramp = function () {
          return we[Oe[this.id]];
        }, e.text = function () {
          return we[je[this.id]];
        }, e.isTight = function () {
          return this.size >= 2;
        }, o;
      }(), _ = 0, te = 1, re = 2, ce = 3, Y = 4, me = 5, ze = 6, fe = 7, we = [new O(_, 0, false), new O(te, 0, true), new O(re, 1, false), new O(ce, 1, true), new O(Y, 2, false), new O(me, 2, true), new O(ze, 3, false), new O(fe, 3, true)], xe = [Y, me, Y, me, ze, fe, ze, fe], Fe = [me, me, me, me, fe, fe, fe, fe], ie = [re, ce, Y, me, ze, fe, ze, fe], ge = [ce, ce, me, me, fe, fe, fe, fe], Oe = [te, te, ce, ce, me, me, fe, fe], je = [_, te, re, ce, re, ce, re, ce], ne = { DISPLAY: we[_], TEXT: we[re], SCRIPT: we[Y], SCRIPTSCRIPT: we[ze] }, q = [{ name: "latin", blocks: [[256, 591], [768, 879]] }, { name: "cyrillic", blocks: [[1024, 1279]] }, { name: "armenian", blocks: [[1328, 1423]] }, { name: "brahmic", blocks: [[2304, 4255]] }, { name: "georgian", blocks: [[4256, 4351]] }, { name: "cjk", blocks: [[12288, 12543], [19968, 40879], [65280, 65376]] }, { name: "hangul", blocks: [[44032, 55215]] }];
      function Xe(o) {
        for (var e = 0; e < q.length; e++)
          for (var t = q[e], r = 0; r < t.blocks.length; r++) {
            var i = t.blocks[r];
            if (o >= i[0] && o <= i[1])
              return t.name;
          }
        return null;
      }
      var Te = [];
      q.forEach(function (o) {
        return o.blocks.forEach(function (e) {
          return Te.push.apply(Te, e);
        });
      });
      function M(o) {
        for (var e = 0; e < Te.length; e += 2)
          if (o >= Te[e] && o <= Te[e + 1])
            return true;
        return false;
      }
      var B = 80, ut = function (e, t) {
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
      }, St = function (e, t) {
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
      }, Lt = function (e, t) {
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
      }, Yt = function (e, t) {
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
      }, mt = function (e, t) {
        return "M473," + (2713 + e + t) + `
c339.3,-1799.3,509.3,-2700,510,-2702 l` + e / 5.298 + " -" + e + `
c3.3,-7.3,9.3,-11,18,-11 H400000v` + (40 + e) + `H1017.7
s-90.5,478,-276.2,1466c-185.7,988,-279.5,1483,-281.5,1485c-2,6,-10,9,-24,9
c-8,0,-12,-0.7,-12,-2c0,-1.3,-5.3,-32,-16,-92c-50.7,-293.3,-119.7,-693.3,-207,-1200
c0,-1.3,-5.3,8.7,-16,30c-10.7,21.3,-21.3,42.7,-32,64s-16,33,-16,33s-26,-26,-26,-26
s76,-153,76,-153s77,-151,77,-151c0.7,0.7,35.7,202,105,604c67.3,400.7,102,602.7,104,
606zM` + (1001 + e) + " " + t + "h400000v" + (40 + e) + "H1017.7z";
      }, Ye = function (e) {
        var t = e / 2;
        return "M400000 " + e + " H0 L" + t + " 0 l65 45 L145 " + (e - 80) + " H400000z";
      }, Xt = function (e, t, r) {
        var i = r - 54 - t - e;
        return "M702 " + (e + t) + "H400000" + (40 + e) + `
H742v` + i + `l-4 4-4 4c-.667.7 -2 1.5-4 2.5s-4.167 1.833-6.5 2.5-5.5 1-9.5 1
h-12l-28-84c-16.667-52-96.667 -294.333-240-727l-212 -643 -85 170
c-4-3.333-8.333-7.667-13 -13l-13-13l77-155 77-156c66 199.333 139 419.667
219 661 l218 661zM702 ` + t + "H400000v" + (40 + e) + "H742z";
      }, ht = function (e, t, r) {
        t = 1e3 * t;
        var i = "";
        switch (e) {
          case "sqrtMain":
            i = ut(t, B);
            break;
          case "sqrtSize1":
            i = St(t, B);
            break;
          case "sqrtSize2":
            i = Lt(t, B);
            break;
          case "sqrtSize3":
            i = Yt(t, B);
            break;
          case "sqrtSize4":
            i = mt(t, B);
            break;
          case "sqrtTall":
            i = Xt(t, B, r);
        }
        return i;
      }, At = function (e, t) {
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
      }, zt = {
        doubleleftarrow: `M262 157
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
M500 241 v40 H399408 v-40z M500 435 v40 H400000 v-40z` }, Ct = function () {
          function o(t) {
            this.children = void 0, this.classes = void 0, this.height = void 0, this.depth = void 0, this.maxFontSize = void 0, this.style = void 0, this.children = t, this.classes = [], this.height = 0, this.depth = 0, this.maxFontSize = 0, this.style = {};
          }
          var e = o.prototype;
          return e.hasClass = function (r) {
            return H.contains(this.classes, r);
          }, e.toNode = function () {
            for (var r = document.createDocumentFragment(), i = 0; i < this.children.length; i++)
              r.appendChild(this.children[i].toNode());
            return r;
          }, e.toMarkup = function () {
            for (var r = "", i = 0; i < this.children.length; i++)
              r += this.children[i].toMarkup();
            return r;
          }, e.toText = function () {
            var r = function (a) {
              return a.toText();
            };
            return this.children.map(r).join("");
          }, o;
        }(), ft = function (e) {
          return e.filter(function (t) {
            return t;
          }).join(" ");
        }, F0 = function (e, t, r) {
          if (this.classes = e || [], this.attributes = {}, this.height = 0, this.depth = 0, this.maxFontSize = 0, this.style = r || {}, t) {
            t.style.isTight() && this.classes.push("mtight");
            var i = t.getColor();
            i && (this.style.color = i);
          }
        }, N0 = function (e) {
          var t = document.createElement(e);
          t.className = ft(this.classes);
          for (var r in this.style)
            this.style.hasOwnProperty(r) && (t.style[r] = this.style[r]);
          for (var i in this.attributes)
            this.attributes.hasOwnProperty(i) && t.setAttribute(i, this.attributes[i]);
          for (var a = 0; a < this.children.length; a++)
            t.appendChild(this.children[a].toNode());
          return t;
        }, I0 = function (e) {
          var t = "<" + e;
          this.classes.length && (t += ' class="' + H.escape(ft(this.classes)) + '"');
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
        }, $t = function () {
          function o(t, r, i, a) {
            this.children = void 0, this.attributes = void 0, this.classes = void 0, this.height = void 0, this.depth = void 0, this.width = void 0, this.maxFontSize = void 0, this.style = void 0, F0.call(this, t, i, a), this.children = r || [];
          }
          var e = o.prototype;
          return e.setAttribute = function (r, i) {
            this.attributes[r] = i;
          }, e.hasClass = function (r) {
            return H.contains(this.classes, r);
          }, e.toNode = function () {
            return N0.call(this, "span");
          }, e.toMarkup = function () {
            return I0.call(this, "span");
          }, o;
        }(), d0 = function () {
          function o(t, r, i, a) {
            this.children = void 0, this.attributes = void 0, this.classes = void 0, this.height = void 0, this.depth = void 0, this.maxFontSize = void 0, this.style = void 0, F0.call(this, r, a), this.children = i || [], this.setAttribute("href", t);
          }
          var e = o.prototype;
          return e.setAttribute = function (r, i) {
            this.attributes[r] = i;
          }, e.hasClass = function (r) {
            return H.contains(this.classes, r);
          }, e.toNode = function () {
            return N0.call(this, "a");
          }, e.toMarkup = function () {
            return I0.call(this, "a");
          }, o;
        }(), Sr = function () {
          function o(t, r, i) {
            this.src = void 0, this.alt = void 0, this.classes = void 0, this.height = void 0, this.depth = void 0, this.maxFontSize = void 0, this.style = void 0, this.alt = r, this.src = t, this.classes = ["mord"], this.style = i;
          }
          var e = o.prototype;
          return e.hasClass = function (r) {
            return H.contains(this.classes, r);
          }, e.toNode = function () {
            var r = document.createElement("img");
            r.src = this.src, r.alt = this.alt, r.className = "mord";
            for (var i in this.style)
              this.style.hasOwnProperty(i) && (r.style[i] = this.style[i]);
            return r;
          }, e.toMarkup = function () {
            var r = "<img  src='" + this.src + " 'alt='" + this.alt + "' ", i = "";
            for (var a in this.style)
              this.style.hasOwnProperty(a) && (i += H.hyphenate(a) + ":" + this.style[a] + ";");
            return i && (r += ' style="' + H.escape(i) + '"'), r += "'/>", r;
          }, o;
        }(), Ar = { \u00EE: "\u0131\u0302", \u00EF: "\u0131\u0308", \u00ED: "\u0131\u0301", \u00EC: "\u0131\u0300" }, _e = function () {
          function o(t, r, i, a, u, p, x, k) {
            this.text = void 0, this.height = void 0, this.depth = void 0, this.italic = void 0, this.skew = void 0, this.width = void 0, this.maxFontSize = void 0, this.classes = void 0, this.style = void 0, this.text = t, this.height = r || 0, this.depth = i || 0, this.italic = a || 0, this.skew = u || 0, this.width = p || 0, this.classes = x || [], this.style = k || {}, this.maxFontSize = 0;
            var C = Xe(this.text.charCodeAt(0));
            C && this.classes.push(C + "_fallback"), /[îïíì]/.test(this.text) && (this.text = Ar[this.text]);
          }
          var e = o.prototype;
          return e.hasClass = function (r) {
            return H.contains(this.classes, r);
          }, e.toNode = function () {
            var r = document.createTextNode(this.text), i = null;
            this.italic > 0 && (i = document.createElement("span"), i.style.marginRight = this.italic + "em"), this.classes.length > 0 && (i = i || document.createElement("span"), i.className = ft(this.classes));
            for (var a in this.style)
              this.style.hasOwnProperty(a) && (i = i || document.createElement("span"), i.style[a] = this.style[a]);
            return i ? (i.appendChild(r), i) : r;
          }, e.toMarkup = function () {
            var r = false, i = "<span";
            this.classes.length && (r = true, i += ' class="', i += H.escape(ft(this.classes)), i += '"');
            var a = "";
            this.italic > 0 && (a += "margin-right:" + this.italic + "em;");
            for (var u in this.style)
              this.style.hasOwnProperty(u) && (a += H.hyphenate(u) + ":" + this.style[u] + ";");
            a && (r = true, i += ' style="' + H.escape(a) + '"');
            var p = H.escape(this.text);
            return r ? (i += ">", i += p, i += "</span>", i) : p;
          }, o;
        }(), dt = function () {
          function o(t, r) {
            this.children = void 0, this.attributes = void 0, this.children = t || [], this.attributes = r || {};
          }
          var e = o.prototype;
          return e.toNode = function () {
            var r = "http://www.w3.org/2000/svg", i = document.createElementNS(r, "svg");
            for (var a in this.attributes)
              Object.prototype.hasOwnProperty.call(this.attributes, a) && i.setAttribute(a, this.attributes[a]);
            for (var u = 0; u < this.children.length; u++)
              i.appendChild(this.children[u].toNode());
            return i;
          }, e.toMarkup = function () {
            var r = "<svg";
            for (var i in this.attributes)
              Object.prototype.hasOwnProperty.call(this.attributes, i) && (r += " " + i + "='" + this.attributes[i] + "'");
            r += ">";
            for (var a = 0; a < this.children.length; a++)
              r += this.children[a].toMarkup();
            return r += "</svg>", r;
          }, o;
        }(), Bt = function () {
          function o(t, r) {
            this.pathName = void 0, this.alternate = void 0, this.pathName = t, this.alternate = r;
          }
          var e = o.prototype;
          return e.toNode = function () {
            var r = "http://www.w3.org/2000/svg", i = document.createElementNS(r, "path");
            return this.alternate ? i.setAttribute("d", this.alternate) : i.setAttribute("d", zt[this.pathName]), i;
          }, e.toMarkup = function () {
            return this.alternate ? "<path d='" + this.alternate + "'/>" : "<path d='" + zt[this.pathName] + "'/>";
          }, o;
        }(), Tt = function () {
          function o(t) {
            this.attributes = void 0, this.attributes = t || {};
          }
          var e = o.prototype;
          return e.toNode = function () {
            var r = "http://www.w3.org/2000/svg", i = document.createElementNS(r, "line");
            for (var a in this.attributes)
              Object.prototype.hasOwnProperty.call(this.attributes, a) && i.setAttribute(a, this.attributes[a]);
            return i;
          }, e.toMarkup = function () {
            var r = "<line";
            for (var i in this.attributes)
              Object.prototype.hasOwnProperty.call(this.attributes, i) && (r += " " + i + "='" + this.attributes[i] + "'");
            return r += "/>", r;
          }, o;
        }();
      function L0(o) {
        if (o instanceof _e)
          return o;
        throw new Error("Expected symbolNode but got " + String(o) + ".");
      }
      function zr(o) {
        if (o instanceof $t)
          return o;
        throw new Error("Expected span<HtmlDomNode> but got " + String(o) + ".");
      }
      var rt = { "AMS-Regular": { "32": [0, 0, 0, 0, 0.25], "65": [0, 0.68889, 0, 0, 0.72222], "66": [0, 0.68889, 0, 0, 0.66667], "67": [0, 0.68889, 0, 0, 0.72222], "68": [0, 0.68889, 0, 0, 0.72222], "69": [0, 0.68889, 0, 0, 0.66667], "70": [0, 0.68889, 0, 0, 0.61111], "71": [0, 0.68889, 0, 0, 0.77778], "72": [0, 0.68889, 0, 0, 0.77778], "73": [0, 0.68889, 0, 0, 0.38889], "74": [0.16667, 0.68889, 0, 0, 0.5], "75": [0, 0.68889, 0, 0, 0.77778], "76": [0, 0.68889, 0, 0, 0.66667], "77": [0, 0.68889, 0, 0, 0.94445], "78": [0, 0.68889, 0, 0, 0.72222], "79": [0.16667, 0.68889, 0, 0, 0.77778], "80": [0, 0.68889, 0, 0, 0.61111], "81": [0.16667, 0.68889, 0, 0, 0.77778], "82": [0, 0.68889, 0, 0, 0.72222], "83": [0, 0.68889, 0, 0, 0.55556], "84": [0, 0.68889, 0, 0, 0.66667], "85": [0, 0.68889, 0, 0, 0.72222], "86": [0, 0.68889, 0, 0, 0.72222], "87": [0, 0.68889, 0, 0, 1], "88": [0, 0.68889, 0, 0, 0.72222], "89": [0, 0.68889, 0, 0, 0.72222], "90": [0, 0.68889, 0, 0, 0.66667], "107": [0, 0.68889, 0, 0, 0.55556], "160": [0, 0, 0, 0, 0.25], "165": [0, 0.675, 0.025, 0, 0.75], "174": [0.15559, 0.69224, 0, 0, 0.94666], "240": [0, 0.68889, 0, 0, 0.55556], "295": [0, 0.68889, 0, 0, 0.54028], "710": [0, 0.825, 0, 0, 2.33334], "732": [0, 0.9, 0, 0, 2.33334], "770": [0, 0.825, 0, 0, 2.33334], "771": [0, 0.9, 0, 0, 2.33334], "989": [0.08167, 0.58167, 0, 0, 0.77778], "1008": [0, 0.43056, 0.04028, 0, 0.66667], "8245": [0, 0.54986, 0, 0, 0.275], "8463": [0, 0.68889, 0, 0, 0.54028], "8487": [0, 0.68889, 0, 0, 0.72222], "8498": [0, 0.68889, 0, 0, 0.55556], "8502": [0, 0.68889, 0, 0, 0.66667], "8503": [0, 0.68889, 0, 0, 0.44445], "8504": [0, 0.68889, 0, 0, 0.66667], "8513": [0, 0.68889, 0, 0, 0.63889], "8592": [-0.03598, 0.46402, 0, 0, 0.5], "8594": [-0.03598, 0.46402, 0, 0, 0.5], "8602": [-0.13313, 0.36687, 0, 0, 1], "8603": [-0.13313, 0.36687, 0, 0, 1], "8606": [0.01354, 0.52239, 0, 0, 1], "8608": [0.01354, 0.52239, 0, 0, 1], "8610": [0.01354, 0.52239, 0, 0, 1.11111], "8611": [0.01354, 0.52239, 0, 0, 1.11111], "8619": [0, 0.54986, 0, 0, 1], "8620": [0, 0.54986, 0, 0, 1], "8621": [-0.13313, 0.37788, 0, 0, 1.38889], "8622": [-0.13313, 0.36687, 0, 0, 1], "8624": [0, 0.69224, 0, 0, 0.5], "8625": [0, 0.69224, 0, 0, 0.5], "8630": [0, 0.43056, 0, 0, 1], "8631": [0, 0.43056, 0, 0, 1], "8634": [0.08198, 0.58198, 0, 0, 0.77778], "8635": [0.08198, 0.58198, 0, 0, 0.77778], "8638": [0.19444, 0.69224, 0, 0, 0.41667], "8639": [0.19444, 0.69224, 0, 0, 0.41667], "8642": [0.19444, 0.69224, 0, 0, 0.41667], "8643": [0.19444, 0.69224, 0, 0, 0.41667], "8644": [0.1808, 0.675, 0, 0, 1], "8646": [0.1808, 0.675, 0, 0, 1], "8647": [0.1808, 0.675, 0, 0, 1], "8648": [0.19444, 0.69224, 0, 0, 0.83334], "8649": [0.1808, 0.675, 0, 0, 1], "8650": [0.19444, 0.69224, 0, 0, 0.83334], "8651": [0.01354, 0.52239, 0, 0, 1], "8652": [0.01354, 0.52239, 0, 0, 1], "8653": [-0.13313, 0.36687, 0, 0, 1], "8654": [-0.13313, 0.36687, 0, 0, 1], "8655": [-0.13313, 0.36687, 0, 0, 1], "8666": [0.13667, 0.63667, 0, 0, 1], "8667": [0.13667, 0.63667, 0, 0, 1], "8669": [-0.13313, 0.37788, 0, 0, 1], "8672": [-0.064, 0.437, 0, 0, 1.334], "8674": [-0.064, 0.437, 0, 0, 1.334], "8705": [0, 0.825, 0, 0, 0.5], "8708": [0, 0.68889, 0, 0, 0.55556], "8709": [0.08167, 0.58167, 0, 0, 0.77778], "8717": [0, 0.43056, 0, 0, 0.42917], "8722": [-0.03598, 0.46402, 0, 0, 0.5], "8724": [0.08198, 0.69224, 0, 0, 0.77778], "8726": [0.08167, 0.58167, 0, 0, 0.77778], "8733": [0, 0.69224, 0, 0, 0.77778], "8736": [0, 0.69224, 0, 0, 0.72222], "8737": [0, 0.69224, 0, 0, 0.72222], "8738": [0.03517, 0.52239, 0, 0, 0.72222], "8739": [0.08167, 0.58167, 0, 0, 0.22222], "8740": [0.25142, 0.74111, 0, 0, 0.27778], "8741": [0.08167, 0.58167, 0, 0, 0.38889], "8742": [0.25142, 0.74111, 0, 0, 0.5], "8756": [0, 0.69224, 0, 0, 0.66667], "8757": [0, 0.69224, 0, 0, 0.66667], "8764": [-0.13313, 0.36687, 0, 0, 0.77778], "8765": [-0.13313, 0.37788, 0, 0, 0.77778], "8769": [-0.13313, 0.36687, 0, 0, 0.77778], "8770": [-0.03625, 0.46375, 0, 0, 0.77778], "8774": [0.30274, 0.79383, 0, 0, 0.77778], "8776": [-0.01688, 0.48312, 0, 0, 0.77778], "8778": [0.08167, 0.58167, 0, 0, 0.77778], "8782": [0.06062, 0.54986, 0, 0, 0.77778], "8783": [0.06062, 0.54986, 0, 0, 0.77778], "8785": [0.08198, 0.58198, 0, 0, 0.77778], "8786": [0.08198, 0.58198, 0, 0, 0.77778], "8787": [0.08198, 0.58198, 0, 0, 0.77778], "8790": [0, 0.69224, 0, 0, 0.77778], "8791": [0.22958, 0.72958, 0, 0, 0.77778], "8796": [0.08198, 0.91667, 0, 0, 0.77778], "8806": [0.25583, 0.75583, 0, 0, 0.77778], "8807": [0.25583, 0.75583, 0, 0, 0.77778], "8808": [0.25142, 0.75726, 0, 0, 0.77778], "8809": [0.25142, 0.75726, 0, 0, 0.77778], "8812": [0.25583, 0.75583, 0, 0, 0.5], "8814": [0.20576, 0.70576, 0, 0, 0.77778], "8815": [0.20576, 0.70576, 0, 0, 0.77778], "8816": [0.30274, 0.79383, 0, 0, 0.77778], "8817": [0.30274, 0.79383, 0, 0, 0.77778], "8818": [0.22958, 0.72958, 0, 0, 0.77778], "8819": [0.22958, 0.72958, 0, 0, 0.77778], "8822": [0.1808, 0.675, 0, 0, 0.77778], "8823": [0.1808, 0.675, 0, 0, 0.77778], "8828": [0.13667, 0.63667, 0, 0, 0.77778], "8829": [0.13667, 0.63667, 0, 0, 0.77778], "8830": [0.22958, 0.72958, 0, 0, 0.77778], "8831": [0.22958, 0.72958, 0, 0, 0.77778], "8832": [0.20576, 0.70576, 0, 0, 0.77778], "8833": [0.20576, 0.70576, 0, 0, 0.77778], "8840": [0.30274, 0.79383, 0, 0, 0.77778], "8841": [0.30274, 0.79383, 0, 0, 0.77778], "8842": [0.13597, 0.63597, 0, 0, 0.77778], "8843": [0.13597, 0.63597, 0, 0, 0.77778], "8847": [0.03517, 0.54986, 0, 0, 0.77778], "8848": [0.03517, 0.54986, 0, 0, 0.77778], "8858": [0.08198, 0.58198, 0, 0, 0.77778], "8859": [0.08198, 0.58198, 0, 0, 0.77778], "8861": [0.08198, 0.58198, 0, 0, 0.77778], "8862": [0, 0.675, 0, 0, 0.77778], "8863": [0, 0.675, 0, 0, 0.77778], "8864": [0, 0.675, 0, 0, 0.77778], "8865": [0, 0.675, 0, 0, 0.77778], "8872": [0, 0.69224, 0, 0, 0.61111], "8873": [0, 0.69224, 0, 0, 0.72222], "8874": [0, 0.69224, 0, 0, 0.88889], "8876": [0, 0.68889, 0, 0, 0.61111], "8877": [0, 0.68889, 0, 0, 0.61111], "8878": [0, 0.68889, 0, 0, 0.72222], "8879": [0, 0.68889, 0, 0, 0.72222], "8882": [0.03517, 0.54986, 0, 0, 0.77778], "8883": [0.03517, 0.54986, 0, 0, 0.77778], "8884": [0.13667, 0.63667, 0, 0, 0.77778], "8885": [0.13667, 0.63667, 0, 0, 0.77778], "8888": [0, 0.54986, 0, 0, 1.11111], "8890": [0.19444, 0.43056, 0, 0, 0.55556], "8891": [0.19444, 0.69224, 0, 0, 0.61111], "8892": [0.19444, 0.69224, 0, 0, 0.61111], "8901": [0, 0.54986, 0, 0, 0.27778], "8903": [0.08167, 0.58167, 0, 0, 0.77778], "8905": [0.08167, 0.58167, 0, 0, 0.77778], "8906": [0.08167, 0.58167, 0, 0, 0.77778], "8907": [0, 0.69224, 0, 0, 0.77778], "8908": [0, 0.69224, 0, 0, 0.77778], "8909": [-0.03598, 0.46402, 0, 0, 0.77778], "8910": [0, 0.54986, 0, 0, 0.76042], "8911": [0, 0.54986, 0, 0, 0.76042], "8912": [0.03517, 0.54986, 0, 0, 0.77778], "8913": [0.03517, 0.54986, 0, 0, 0.77778], "8914": [0, 0.54986, 0, 0, 0.66667], "8915": [0, 0.54986, 0, 0, 0.66667], "8916": [0, 0.69224, 0, 0, 0.66667], "8918": [0.0391, 0.5391, 0, 0, 0.77778], "8919": [0.0391, 0.5391, 0, 0, 0.77778], "8920": [0.03517, 0.54986, 0, 0, 1.33334], "8921": [0.03517, 0.54986, 0, 0, 1.33334], "8922": [0.38569, 0.88569, 0, 0, 0.77778], "8923": [0.38569, 0.88569, 0, 0, 0.77778], "8926": [0.13667, 0.63667, 0, 0, 0.77778], "8927": [0.13667, 0.63667, 0, 0, 0.77778], "8928": [0.30274, 0.79383, 0, 0, 0.77778], "8929": [0.30274, 0.79383, 0, 0, 0.77778], "8934": [0.23222, 0.74111, 0, 0, 0.77778], "8935": [0.23222, 0.74111, 0, 0, 0.77778], "8936": [0.23222, 0.74111, 0, 0, 0.77778], "8937": [0.23222, 0.74111, 0, 0, 0.77778], "8938": [0.20576, 0.70576, 0, 0, 0.77778], "8939": [0.20576, 0.70576, 0, 0, 0.77778], "8940": [0.30274, 0.79383, 0, 0, 0.77778], "8941": [0.30274, 0.79383, 0, 0, 0.77778], "8994": [0.19444, 0.69224, 0, 0, 0.77778], "8995": [0.19444, 0.69224, 0, 0, 0.77778], "9416": [0.15559, 0.69224, 0, 0, 0.90222], "9484": [0, 0.69224, 0, 0, 0.5], "9488": [0, 0.69224, 0, 0, 0.5], "9492": [0, 0.37788, 0, 0, 0.5], "9496": [0, 0.37788, 0, 0, 0.5], "9585": [0.19444, 0.68889, 0, 0, 0.88889], "9586": [0.19444, 0.74111, 0, 0, 0.88889], "9632": [0, 0.675, 0, 0, 0.77778], "9633": [0, 0.675, 0, 0, 0.77778], "9650": [0, 0.54986, 0, 0, 0.72222], "9651": [0, 0.54986, 0, 0, 0.72222], "9654": [0.03517, 0.54986, 0, 0, 0.77778], "9660": [0, 0.54986, 0, 0, 0.72222], "9661": [0, 0.54986, 0, 0, 0.72222], "9664": [0.03517, 0.54986, 0, 0, 0.77778], "9674": [0.11111, 0.69224, 0, 0, 0.66667], "9733": [0.19444, 0.69224, 0, 0, 0.94445], "10003": [0, 0.69224, 0, 0, 0.83334], "10016": [0, 0.69224, 0, 0, 0.83334], "10731": [0.11111, 0.69224, 0, 0, 0.66667], "10846": [0.19444, 0.75583, 0, 0, 0.61111], "10877": [0.13667, 0.63667, 0, 0, 0.77778], "10878": [0.13667, 0.63667, 0, 0, 0.77778], "10885": [0.25583, 0.75583, 0, 0, 0.77778], "10886": [0.25583, 0.75583, 0, 0, 0.77778], "10887": [0.13597, 0.63597, 0, 0, 0.77778], "10888": [0.13597, 0.63597, 0, 0, 0.77778], "10889": [0.26167, 0.75726, 0, 0, 0.77778], "10890": [0.26167, 0.75726, 0, 0, 0.77778], "10891": [0.48256, 0.98256, 0, 0, 0.77778], "10892": [0.48256, 0.98256, 0, 0, 0.77778], "10901": [0.13667, 0.63667, 0, 0, 0.77778], "10902": [0.13667, 0.63667, 0, 0, 0.77778], "10933": [0.25142, 0.75726, 0, 0, 0.77778], "10934": [0.25142, 0.75726, 0, 0, 0.77778], "10935": [0.26167, 0.75726, 0, 0, 0.77778], "10936": [0.26167, 0.75726, 0, 0, 0.77778], "10937": [0.26167, 0.75726, 0, 0, 0.77778], "10938": [0.26167, 0.75726, 0, 0, 0.77778], "10949": [0.25583, 0.75583, 0, 0, 0.77778], "10950": [0.25583, 0.75583, 0, 0, 0.77778], "10955": [0.28481, 0.79383, 0, 0, 0.77778], "10956": [0.28481, 0.79383, 0, 0, 0.77778], "57350": [0.08167, 0.58167, 0, 0, 0.22222], "57351": [0.08167, 0.58167, 0, 0, 0.38889], "57352": [0.08167, 0.58167, 0, 0, 0.77778], "57353": [0, 0.43056, 0.04028, 0, 0.66667], "57356": [0.25142, 0.75726, 0, 0, 0.77778], "57357": [0.25142, 0.75726, 0, 0, 0.77778], "57358": [0.41951, 0.91951, 0, 0, 0.77778], "57359": [0.30274, 0.79383, 0, 0, 0.77778], "57360": [0.30274, 0.79383, 0, 0, 0.77778], "57361": [0.41951, 0.91951, 0, 0, 0.77778], "57366": [0.25142, 0.75726, 0, 0, 0.77778], "57367": [0.25142, 0.75726, 0, 0, 0.77778], "57368": [0.25142, 0.75726, 0, 0, 0.77778], "57369": [0.25142, 0.75726, 0, 0, 0.77778], "57370": [0.13597, 0.63597, 0, 0, 0.77778], "57371": [0.13597, 0.63597, 0, 0, 0.77778] }, "Caligraphic-Regular": { "32": [0, 0, 0, 0, 0.25], "65": [0, 0.68333, 0, 0.19445, 0.79847], "66": [0, 0.68333, 0.03041, 0.13889, 0.65681], "67": [0, 0.68333, 0.05834, 0.13889, 0.52653], "68": [0, 0.68333, 0.02778, 0.08334, 0.77139], "69": [0, 0.68333, 0.08944, 0.11111, 0.52778], "70": [0, 0.68333, 0.09931, 0.11111, 0.71875], "71": [0.09722, 0.68333, 0.0593, 0.11111, 0.59487], "72": [0, 0.68333, 965e-5, 0.11111, 0.84452], "73": [0, 0.68333, 0.07382, 0, 0.54452], "74": [0.09722, 0.68333, 0.18472, 0.16667, 0.67778], "75": [0, 0.68333, 0.01445, 0.05556, 0.76195], "76": [0, 0.68333, 0, 0.13889, 0.68972], "77": [0, 0.68333, 0, 0.13889, 1.2009], "78": [0, 0.68333, 0.14736, 0.08334, 0.82049], "79": [0, 0.68333, 0.02778, 0.11111, 0.79611], "80": [0, 0.68333, 0.08222, 0.08334, 0.69556], "81": [0.09722, 0.68333, 0, 0.11111, 0.81667], "82": [0, 0.68333, 0, 0.08334, 0.8475], "83": [0, 0.68333, 0.075, 0.13889, 0.60556], "84": [0, 0.68333, 0.25417, 0, 0.54464], "85": [0, 0.68333, 0.09931, 0.08334, 0.62583], "86": [0, 0.68333, 0.08222, 0, 0.61278], "87": [0, 0.68333, 0.08222, 0.08334, 0.98778], "88": [0, 0.68333, 0.14643, 0.13889, 0.7133], "89": [0.09722, 0.68333, 0.08222, 0.08334, 0.66834], "90": [0, 0.68333, 0.07944, 0.13889, 0.72473], "160": [0, 0, 0, 0, 0.25] }, "Fraktur-Regular": { "32": [0, 0, 0, 0, 0.25], "33": [0, 0.69141, 0, 0, 0.29574], "34": [0, 0.69141, 0, 0, 0.21471], "38": [0, 0.69141, 0, 0, 0.73786], "39": [0, 0.69141, 0, 0, 0.21201], "40": [0.24982, 0.74947, 0, 0, 0.38865], "41": [0.24982, 0.74947, 0, 0, 0.38865], "42": [0, 0.62119, 0, 0, 0.27764], "43": [0.08319, 0.58283, 0, 0, 0.75623], "44": [0, 0.10803, 0, 0, 0.27764], "45": [0.08319, 0.58283, 0, 0, 0.75623], "46": [0, 0.10803, 0, 0, 0.27764], "47": [0.24982, 0.74947, 0, 0, 0.50181], "48": [0, 0.47534, 0, 0, 0.50181], "49": [0, 0.47534, 0, 0, 0.50181], "50": [0, 0.47534, 0, 0, 0.50181], "51": [0.18906, 0.47534, 0, 0, 0.50181], "52": [0.18906, 0.47534, 0, 0, 0.50181], "53": [0.18906, 0.47534, 0, 0, 0.50181], "54": [0, 0.69141, 0, 0, 0.50181], "55": [0.18906, 0.47534, 0, 0, 0.50181], "56": [0, 0.69141, 0, 0, 0.50181], "57": [0.18906, 0.47534, 0, 0, 0.50181], "58": [0, 0.47534, 0, 0, 0.21606], "59": [0.12604, 0.47534, 0, 0, 0.21606], "61": [-0.13099, 0.36866, 0, 0, 0.75623], "63": [0, 0.69141, 0, 0, 0.36245], "65": [0, 0.69141, 0, 0, 0.7176], "66": [0, 0.69141, 0, 0, 0.88397], "67": [0, 0.69141, 0, 0, 0.61254], "68": [0, 0.69141, 0, 0, 0.83158], "69": [0, 0.69141, 0, 0, 0.66278], "70": [0.12604, 0.69141, 0, 0, 0.61119], "71": [0, 0.69141, 0, 0, 0.78539], "72": [0.06302, 0.69141, 0, 0, 0.7203], "73": [0, 0.69141, 0, 0, 0.55448], "74": [0.12604, 0.69141, 0, 0, 0.55231], "75": [0, 0.69141, 0, 0, 0.66845], "76": [0, 0.69141, 0, 0, 0.66602], "77": [0, 0.69141, 0, 0, 1.04953], "78": [0, 0.69141, 0, 0, 0.83212], "79": [0, 0.69141, 0, 0, 0.82699], "80": [0.18906, 0.69141, 0, 0, 0.82753], "81": [0.03781, 0.69141, 0, 0, 0.82699], "82": [0, 0.69141, 0, 0, 0.82807], "83": [0, 0.69141, 0, 0, 0.82861], "84": [0, 0.69141, 0, 0, 0.66899], "85": [0, 0.69141, 0, 0, 0.64576], "86": [0, 0.69141, 0, 0, 0.83131], "87": [0, 0.69141, 0, 0, 1.04602], "88": [0, 0.69141, 0, 0, 0.71922], "89": [0.18906, 0.69141, 0, 0, 0.83293], "90": [0.12604, 0.69141, 0, 0, 0.60201], "91": [0.24982, 0.74947, 0, 0, 0.27764], "93": [0.24982, 0.74947, 0, 0, 0.27764], "94": [0, 0.69141, 0, 0, 0.49965], "97": [0, 0.47534, 0, 0, 0.50046], "98": [0, 0.69141, 0, 0, 0.51315], "99": [0, 0.47534, 0, 0, 0.38946], "100": [0, 0.62119, 0, 0, 0.49857], "101": [0, 0.47534, 0, 0, 0.40053], "102": [0.18906, 0.69141, 0, 0, 0.32626], "103": [0.18906, 0.47534, 0, 0, 0.5037], "104": [0.18906, 0.69141, 0, 0, 0.52126], "105": [0, 0.69141, 0, 0, 0.27899], "106": [0, 0.69141, 0, 0, 0.28088], "107": [0, 0.69141, 0, 0, 0.38946], "108": [0, 0.69141, 0, 0, 0.27953], "109": [0, 0.47534, 0, 0, 0.76676], "110": [0, 0.47534, 0, 0, 0.52666], "111": [0, 0.47534, 0, 0, 0.48885], "112": [0.18906, 0.52396, 0, 0, 0.50046], "113": [0.18906, 0.47534, 0, 0, 0.48912], "114": [0, 0.47534, 0, 0, 0.38919], "115": [0, 0.47534, 0, 0, 0.44266], "116": [0, 0.62119, 0, 0, 0.33301], "117": [0, 0.47534, 0, 0, 0.5172], "118": [0, 0.52396, 0, 0, 0.5118], "119": [0, 0.52396, 0, 0, 0.77351], "120": [0.18906, 0.47534, 0, 0, 0.38865], "121": [0.18906, 0.47534, 0, 0, 0.49884], "122": [0.18906, 0.47534, 0, 0, 0.39054], "160": [0, 0, 0, 0, 0.25], "8216": [0, 0.69141, 0, 0, 0.21471], "8217": [0, 0.69141, 0, 0, 0.21471], "58112": [0, 0.62119, 0, 0, 0.49749], "58113": [0, 0.62119, 0, 0, 0.4983], "58114": [0.18906, 0.69141, 0, 0, 0.33328], "58115": [0.18906, 0.69141, 0, 0, 0.32923], "58116": [0.18906, 0.47534, 0, 0, 0.50343], "58117": [0, 0.69141, 0, 0, 0.33301], "58118": [0, 0.62119, 0, 0, 0.33409], "58119": [0, 0.47534, 0, 0, 0.50073] }, "Main-Bold": { "32": [0, 0, 0, 0, 0.25], "33": [0, 0.69444, 0, 0, 0.35], "34": [0, 0.69444, 0, 0, 0.60278], "35": [0.19444, 0.69444, 0, 0, 0.95833], "36": [0.05556, 0.75, 0, 0, 0.575], "37": [0.05556, 0.75, 0, 0, 0.95833], "38": [0, 0.69444, 0, 0, 0.89444], "39": [0, 0.69444, 0, 0, 0.31944], "40": [0.25, 0.75, 0, 0, 0.44722], "41": [0.25, 0.75, 0, 0, 0.44722], "42": [0, 0.75, 0, 0, 0.575], "43": [0.13333, 0.63333, 0, 0, 0.89444], "44": [0.19444, 0.15556, 0, 0, 0.31944], "45": [0, 0.44444, 0, 0, 0.38333], "46": [0, 0.15556, 0, 0, 0.31944], "47": [0.25, 0.75, 0, 0, 0.575], "48": [0, 0.64444, 0, 0, 0.575], "49": [0, 0.64444, 0, 0, 0.575], "50": [0, 0.64444, 0, 0, 0.575], "51": [0, 0.64444, 0, 0, 0.575], "52": [0, 0.64444, 0, 0, 0.575], "53": [0, 0.64444, 0, 0, 0.575], "54": [0, 0.64444, 0, 0, 0.575], "55": [0, 0.64444, 0, 0, 0.575], "56": [0, 0.64444, 0, 0, 0.575], "57": [0, 0.64444, 0, 0, 0.575], "58": [0, 0.44444, 0, 0, 0.31944], "59": [0.19444, 0.44444, 0, 0, 0.31944], "60": [0.08556, 0.58556, 0, 0, 0.89444], "61": [-0.10889, 0.39111, 0, 0, 0.89444], "62": [0.08556, 0.58556, 0, 0, 0.89444], "63": [0, 0.69444, 0, 0, 0.54305], "64": [0, 0.69444, 0, 0, 0.89444], "65": [0, 0.68611, 0, 0, 0.86944], "66": [0, 0.68611, 0, 0, 0.81805], "67": [0, 0.68611, 0, 0, 0.83055], "68": [0, 0.68611, 0, 0, 0.88194], "69": [0, 0.68611, 0, 0, 0.75555], "70": [0, 0.68611, 0, 0, 0.72361], "71": [0, 0.68611, 0, 0, 0.90416], "72": [0, 0.68611, 0, 0, 0.9], "73": [0, 0.68611, 0, 0, 0.43611], "74": [0, 0.68611, 0, 0, 0.59444], "75": [0, 0.68611, 0, 0, 0.90138], "76": [0, 0.68611, 0, 0, 0.69166], "77": [0, 0.68611, 0, 0, 1.09166], "78": [0, 0.68611, 0, 0, 0.9], "79": [0, 0.68611, 0, 0, 0.86388], "80": [0, 0.68611, 0, 0, 0.78611], "81": [0.19444, 0.68611, 0, 0, 0.86388], "82": [0, 0.68611, 0, 0, 0.8625], "83": [0, 0.68611, 0, 0, 0.63889], "84": [0, 0.68611, 0, 0, 0.8], "85": [0, 0.68611, 0, 0, 0.88472], "86": [0, 0.68611, 0.01597, 0, 0.86944], "87": [0, 0.68611, 0.01597, 0, 1.18888], "88": [0, 0.68611, 0, 0, 0.86944], "89": [0, 0.68611, 0.02875, 0, 0.86944], "90": [0, 0.68611, 0, 0, 0.70277], "91": [0.25, 0.75, 0, 0, 0.31944], "92": [0.25, 0.75, 0, 0, 0.575], "93": [0.25, 0.75, 0, 0, 0.31944], "94": [0, 0.69444, 0, 0, 0.575], "95": [0.31, 0.13444, 0.03194, 0, 0.575], "97": [0, 0.44444, 0, 0, 0.55902], "98": [0, 0.69444, 0, 0, 0.63889], "99": [0, 0.44444, 0, 0, 0.51111], "100": [0, 0.69444, 0, 0, 0.63889], "101": [0, 0.44444, 0, 0, 0.52708], "102": [0, 0.69444, 0.10903, 0, 0.35139], "103": [0.19444, 0.44444, 0.01597, 0, 0.575], "104": [0, 0.69444, 0, 0, 0.63889], "105": [0, 0.69444, 0, 0, 0.31944], "106": [0.19444, 0.69444, 0, 0, 0.35139], "107": [0, 0.69444, 0, 0, 0.60694], "108": [0, 0.69444, 0, 0, 0.31944], "109": [0, 0.44444, 0, 0, 0.95833], "110": [0, 0.44444, 0, 0, 0.63889], "111": [0, 0.44444, 0, 0, 0.575], "112": [0.19444, 0.44444, 0, 0, 0.63889], "113": [0.19444, 0.44444, 0, 0, 0.60694], "114": [0, 0.44444, 0, 0, 0.47361], "115": [0, 0.44444, 0, 0, 0.45361], "116": [0, 0.63492, 0, 0, 0.44722], "117": [0, 0.44444, 0, 0, 0.63889], "118": [0, 0.44444, 0.01597, 0, 0.60694], "119": [0, 0.44444, 0.01597, 0, 0.83055], "120": [0, 0.44444, 0, 0, 0.60694], "121": [0.19444, 0.44444, 0.01597, 0, 0.60694], "122": [0, 0.44444, 0, 0, 0.51111], "123": [0.25, 0.75, 0, 0, 0.575], "124": [0.25, 0.75, 0, 0, 0.31944], "125": [0.25, 0.75, 0, 0, 0.575], "126": [0.35, 0.34444, 0, 0, 0.575], "160": [0, 0, 0, 0, 0.25], "163": [0, 0.69444, 0, 0, 0.86853], "168": [0, 0.69444, 0, 0, 0.575], "172": [0, 0.44444, 0, 0, 0.76666], "176": [0, 0.69444, 0, 0, 0.86944], "177": [0.13333, 0.63333, 0, 0, 0.89444], "184": [0.17014, 0, 0, 0, 0.51111], "198": [0, 0.68611, 0, 0, 1.04166], "215": [0.13333, 0.63333, 0, 0, 0.89444], "216": [0.04861, 0.73472, 0, 0, 0.89444], "223": [0, 0.69444, 0, 0, 0.59722], "230": [0, 0.44444, 0, 0, 0.83055], "247": [0.13333, 0.63333, 0, 0, 0.89444], "248": [0.09722, 0.54167, 0, 0, 0.575], "305": [0, 0.44444, 0, 0, 0.31944], "338": [0, 0.68611, 0, 0, 1.16944], "339": [0, 0.44444, 0, 0, 0.89444], "567": [0.19444, 0.44444, 0, 0, 0.35139], "710": [0, 0.69444, 0, 0, 0.575], "711": [0, 0.63194, 0, 0, 0.575], "713": [0, 0.59611, 0, 0, 0.575], "714": [0, 0.69444, 0, 0, 0.575], "715": [0, 0.69444, 0, 0, 0.575], "728": [0, 0.69444, 0, 0, 0.575], "729": [0, 0.69444, 0, 0, 0.31944], "730": [0, 0.69444, 0, 0, 0.86944], "732": [0, 0.69444, 0, 0, 0.575], "733": [0, 0.69444, 0, 0, 0.575], "915": [0, 0.68611, 0, 0, 0.69166], "916": [0, 0.68611, 0, 0, 0.95833], "920": [0, 0.68611, 0, 0, 0.89444], "923": [0, 0.68611, 0, 0, 0.80555], "926": [0, 0.68611, 0, 0, 0.76666], "928": [0, 0.68611, 0, 0, 0.9], "931": [0, 0.68611, 0, 0, 0.83055], "933": [0, 0.68611, 0, 0, 0.89444], "934": [0, 0.68611, 0, 0, 0.83055], "936": [0, 0.68611, 0, 0, 0.89444], "937": [0, 0.68611, 0, 0, 0.83055], "8211": [0, 0.44444, 0.03194, 0, 0.575], "8212": [0, 0.44444, 0.03194, 0, 1.14999], "8216": [0, 0.69444, 0, 0, 0.31944], "8217": [0, 0.69444, 0, 0, 0.31944], "8220": [0, 0.69444, 0, 0, 0.60278], "8221": [0, 0.69444, 0, 0, 0.60278], "8224": [0.19444, 0.69444, 0, 0, 0.51111], "8225": [0.19444, 0.69444, 0, 0, 0.51111], "8242": [0, 0.55556, 0, 0, 0.34444], "8407": [0, 0.72444, 0.15486, 0, 0.575], "8463": [0, 0.69444, 0, 0, 0.66759], "8465": [0, 0.69444, 0, 0, 0.83055], "8467": [0, 0.69444, 0, 0, 0.47361], "8472": [0.19444, 0.44444, 0, 0, 0.74027], "8476": [0, 0.69444, 0, 0, 0.83055], "8501": [0, 0.69444, 0, 0, 0.70277], "8592": [-0.10889, 0.39111, 0, 0, 1.14999], "8593": [0.19444, 0.69444, 0, 0, 0.575], "8594": [-0.10889, 0.39111, 0, 0, 1.14999], "8595": [0.19444, 0.69444, 0, 0, 0.575], "8596": [-0.10889, 0.39111, 0, 0, 1.14999], "8597": [0.25, 0.75, 0, 0, 0.575], "8598": [0.19444, 0.69444, 0, 0, 1.14999], "8599": [0.19444, 0.69444, 0, 0, 1.14999], "8600": [0.19444, 0.69444, 0, 0, 1.14999], "8601": [0.19444, 0.69444, 0, 0, 1.14999], "8636": [-0.10889, 0.39111, 0, 0, 1.14999], "8637": [-0.10889, 0.39111, 0, 0, 1.14999], "8640": [-0.10889, 0.39111, 0, 0, 1.14999], "8641": [-0.10889, 0.39111, 0, 0, 1.14999], "8656": [-0.10889, 0.39111, 0, 0, 1.14999], "8657": [0.19444, 0.69444, 0, 0, 0.70277], "8658": [-0.10889, 0.39111, 0, 0, 1.14999], "8659": [0.19444, 0.69444, 0, 0, 0.70277], "8660": [-0.10889, 0.39111, 0, 0, 1.14999], "8661": [0.25, 0.75, 0, 0, 0.70277], "8704": [0, 0.69444, 0, 0, 0.63889], "8706": [0, 0.69444, 0.06389, 0, 0.62847], "8707": [0, 0.69444, 0, 0, 0.63889], "8709": [0.05556, 0.75, 0, 0, 0.575], "8711": [0, 0.68611, 0, 0, 0.95833], "8712": [0.08556, 0.58556, 0, 0, 0.76666], "8715": [0.08556, 0.58556, 0, 0, 0.76666], "8722": [0.13333, 0.63333, 0, 0, 0.89444], "8723": [0.13333, 0.63333, 0, 0, 0.89444], "8725": [0.25, 0.75, 0, 0, 0.575], "8726": [0.25, 0.75, 0, 0, 0.575], "8727": [-0.02778, 0.47222, 0, 0, 0.575], "8728": [-0.02639, 0.47361, 0, 0, 0.575], "8729": [-0.02639, 0.47361, 0, 0, 0.575], "8730": [0.18, 0.82, 0, 0, 0.95833], "8733": [0, 0.44444, 0, 0, 0.89444], "8734": [0, 0.44444, 0, 0, 1.14999], "8736": [0, 0.69224, 0, 0, 0.72222], "8739": [0.25, 0.75, 0, 0, 0.31944], "8741": [0.25, 0.75, 0, 0, 0.575], "8743": [0, 0.55556, 0, 0, 0.76666], "8744": [0, 0.55556, 0, 0, 0.76666], "8745": [0, 0.55556, 0, 0, 0.76666], "8746": [0, 0.55556, 0, 0, 0.76666], "8747": [0.19444, 0.69444, 0.12778, 0, 0.56875], "8764": [-0.10889, 0.39111, 0, 0, 0.89444], "8768": [0.19444, 0.69444, 0, 0, 0.31944], "8771": [222e-5, 0.50222, 0, 0, 0.89444], "8776": [0.02444, 0.52444, 0, 0, 0.89444], "8781": [222e-5, 0.50222, 0, 0, 0.89444], "8801": [222e-5, 0.50222, 0, 0, 0.89444], "8804": [0.19667, 0.69667, 0, 0, 0.89444], "8805": [0.19667, 0.69667, 0, 0, 0.89444], "8810": [0.08556, 0.58556, 0, 0, 1.14999], "8811": [0.08556, 0.58556, 0, 0, 1.14999], "8826": [0.08556, 0.58556, 0, 0, 0.89444], "8827": [0.08556, 0.58556, 0, 0, 0.89444], "8834": [0.08556, 0.58556, 0, 0, 0.89444], "8835": [0.08556, 0.58556, 0, 0, 0.89444], "8838": [0.19667, 0.69667, 0, 0, 0.89444], "8839": [0.19667, 0.69667, 0, 0, 0.89444], "8846": [0, 0.55556, 0, 0, 0.76666], "8849": [0.19667, 0.69667, 0, 0, 0.89444], "8850": [0.19667, 0.69667, 0, 0, 0.89444], "8851": [0, 0.55556, 0, 0, 0.76666], "8852": [0, 0.55556, 0, 0, 0.76666], "8853": [0.13333, 0.63333, 0, 0, 0.89444], "8854": [0.13333, 0.63333, 0, 0, 0.89444], "8855": [0.13333, 0.63333, 0, 0, 0.89444], "8856": [0.13333, 0.63333, 0, 0, 0.89444], "8857": [0.13333, 0.63333, 0, 0, 0.89444], "8866": [0, 0.69444, 0, 0, 0.70277], "8867": [0, 0.69444, 0, 0, 0.70277], "8868": [0, 0.69444, 0, 0, 0.89444], "8869": [0, 0.69444, 0, 0, 0.89444], "8900": [-0.02639, 0.47361, 0, 0, 0.575], "8901": [-0.02639, 0.47361, 0, 0, 0.31944], "8902": [-0.02778, 0.47222, 0, 0, 0.575], "8968": [0.25, 0.75, 0, 0, 0.51111], "8969": [0.25, 0.75, 0, 0, 0.51111], "8970": [0.25, 0.75, 0, 0, 0.51111], "8971": [0.25, 0.75, 0, 0, 0.51111], "8994": [-0.13889, 0.36111, 0, 0, 1.14999], "8995": [-0.13889, 0.36111, 0, 0, 1.14999], "9651": [0.19444, 0.69444, 0, 0, 1.02222], "9657": [-0.02778, 0.47222, 0, 0, 0.575], "9661": [0.19444, 0.69444, 0, 0, 1.02222], "9667": [-0.02778, 0.47222, 0, 0, 0.575], "9711": [0.19444, 0.69444, 0, 0, 1.14999], "9824": [0.12963, 0.69444, 0, 0, 0.89444], "9825": [0.12963, 0.69444, 0, 0, 0.89444], "9826": [0.12963, 0.69444, 0, 0, 0.89444], "9827": [0.12963, 0.69444, 0, 0, 0.89444], "9837": [0, 0.75, 0, 0, 0.44722], "9838": [0.19444, 0.69444, 0, 0, 0.44722], "9839": [0.19444, 0.69444, 0, 0, 0.44722], "10216": [0.25, 0.75, 0, 0, 0.44722], "10217": [0.25, 0.75, 0, 0, 0.44722], "10815": [0, 0.68611, 0, 0, 0.9], "10927": [0.19667, 0.69667, 0, 0, 0.89444], "10928": [0.19667, 0.69667, 0, 0, 0.89444], "57376": [0.19444, 0.69444, 0, 0, 0] }, "Main-BoldItalic": { "32": [0, 0, 0, 0, 0.25], "33": [0, 0.69444, 0.11417, 0, 0.38611], "34": [0, 0.69444, 0.07939, 0, 0.62055], "35": [0.19444, 0.69444, 0.06833, 0, 0.94444], "37": [0.05556, 0.75, 0.12861, 0, 0.94444], "38": [0, 0.69444, 0.08528, 0, 0.88555], "39": [0, 0.69444, 0.12945, 0, 0.35555], "40": [0.25, 0.75, 0.15806, 0, 0.47333], "41": [0.25, 0.75, 0.03306, 0, 0.47333], "42": [0, 0.75, 0.14333, 0, 0.59111], "43": [0.10333, 0.60333, 0.03306, 0, 0.88555], "44": [0.19444, 0.14722, 0, 0, 0.35555], "45": [0, 0.44444, 0.02611, 0, 0.41444], "46": [0, 0.14722, 0, 0, 0.35555], "47": [0.25, 0.75, 0.15806, 0, 0.59111], "48": [0, 0.64444, 0.13167, 0, 0.59111], "49": [0, 0.64444, 0.13167, 0, 0.59111], "50": [0, 0.64444, 0.13167, 0, 0.59111], "51": [0, 0.64444, 0.13167, 0, 0.59111], "52": [0.19444, 0.64444, 0.13167, 0, 0.59111], "53": [0, 0.64444, 0.13167, 0, 0.59111], "54": [0, 0.64444, 0.13167, 0, 0.59111], "55": [0.19444, 0.64444, 0.13167, 0, 0.59111], "56": [0, 0.64444, 0.13167, 0, 0.59111], "57": [0, 0.64444, 0.13167, 0, 0.59111], "58": [0, 0.44444, 0.06695, 0, 0.35555], "59": [0.19444, 0.44444, 0.06695, 0, 0.35555], "61": [-0.10889, 0.39111, 0.06833, 0, 0.88555], "63": [0, 0.69444, 0.11472, 0, 0.59111], "64": [0, 0.69444, 0.09208, 0, 0.88555], "65": [0, 0.68611, 0, 0, 0.86555], "66": [0, 0.68611, 0.0992, 0, 0.81666], "67": [0, 0.68611, 0.14208, 0, 0.82666], "68": [0, 0.68611, 0.09062, 0, 0.87555], "69": [0, 0.68611, 0.11431, 0, 0.75666], "70": [0, 0.68611, 0.12903, 0, 0.72722], "71": [0, 0.68611, 0.07347, 0, 0.89527], "72": [0, 0.68611, 0.17208, 0, 0.8961], "73": [0, 0.68611, 0.15681, 0, 0.47166], "74": [0, 0.68611, 0.145, 0, 0.61055], "75": [0, 0.68611, 0.14208, 0, 0.89499], "76": [0, 0.68611, 0, 0, 0.69777], "77": [0, 0.68611, 0.17208, 0, 1.07277], "78": [0, 0.68611, 0.17208, 0, 0.8961], "79": [0, 0.68611, 0.09062, 0, 0.85499], "80": [0, 0.68611, 0.0992, 0, 0.78721], "81": [0.19444, 0.68611, 0.09062, 0, 0.85499], "82": [0, 0.68611, 0.02559, 0, 0.85944], "83": [0, 0.68611, 0.11264, 0, 0.64999], "84": [0, 0.68611, 0.12903, 0, 0.7961], "85": [0, 0.68611, 0.17208, 0, 0.88083], "86": [0, 0.68611, 0.18625, 0, 0.86555], "87": [0, 0.68611, 0.18625, 0, 1.15999], "88": [0, 0.68611, 0.15681, 0, 0.86555], "89": [0, 0.68611, 0.19803, 0, 0.86555], "90": [0, 0.68611, 0.14208, 0, 0.70888], "91": [0.25, 0.75, 0.1875, 0, 0.35611], "93": [0.25, 0.75, 0.09972, 0, 0.35611], "94": [0, 0.69444, 0.06709, 0, 0.59111], "95": [0.31, 0.13444, 0.09811, 0, 0.59111], "97": [0, 0.44444, 0.09426, 0, 0.59111], "98": [0, 0.69444, 0.07861, 0, 0.53222], "99": [0, 0.44444, 0.05222, 0, 0.53222], "100": [0, 0.69444, 0.10861, 0, 0.59111], "101": [0, 0.44444, 0.085, 0, 0.53222], "102": [0.19444, 0.69444, 0.21778, 0, 0.4], "103": [0.19444, 0.44444, 0.105, 0, 0.53222], "104": [0, 0.69444, 0.09426, 0, 0.59111], "105": [0, 0.69326, 0.11387, 0, 0.35555], "106": [0.19444, 0.69326, 0.1672, 0, 0.35555], "107": [0, 0.69444, 0.11111, 0, 0.53222], "108": [0, 0.69444, 0.10861, 0, 0.29666], "109": [0, 0.44444, 0.09426, 0, 0.94444], "110": [0, 0.44444, 0.09426, 0, 0.64999], "111": [0, 0.44444, 0.07861, 0, 0.59111], "112": [0.19444, 0.44444, 0.07861, 0, 0.59111], "113": [0.19444, 0.44444, 0.105, 0, 0.53222], "114": [0, 0.44444, 0.11111, 0, 0.50167], "115": [0, 0.44444, 0.08167, 0, 0.48694], "116": [0, 0.63492, 0.09639, 0, 0.385], "117": [0, 0.44444, 0.09426, 0, 0.62055], "118": [0, 0.44444, 0.11111, 0, 0.53222], "119": [0, 0.44444, 0.11111, 0, 0.76777], "120": [0, 0.44444, 0.12583, 0, 0.56055], "121": [0.19444, 0.44444, 0.105, 0, 0.56166], "122": [0, 0.44444, 0.13889, 0, 0.49055], "126": [0.35, 0.34444, 0.11472, 0, 0.59111], "160": [0, 0, 0, 0, 0.25], "168": [0, 0.69444, 0.11473, 0, 0.59111], "176": [0, 0.69444, 0, 0, 0.94888], "184": [0.17014, 0, 0, 0, 0.53222], "198": [0, 0.68611, 0.11431, 0, 1.02277], "216": [0.04861, 0.73472, 0.09062, 0, 0.88555], "223": [0.19444, 0.69444, 0.09736, 0, 0.665], "230": [0, 0.44444, 0.085, 0, 0.82666], "248": [0.09722, 0.54167, 0.09458, 0, 0.59111], "305": [0, 0.44444, 0.09426, 0, 0.35555], "338": [0, 0.68611, 0.11431, 0, 1.14054], "339": [0, 0.44444, 0.085, 0, 0.82666], "567": [0.19444, 0.44444, 0.04611, 0, 0.385], "710": [0, 0.69444, 0.06709, 0, 0.59111], "711": [0, 0.63194, 0.08271, 0, 0.59111], "713": [0, 0.59444, 0.10444, 0, 0.59111], "714": [0, 0.69444, 0.08528, 0, 0.59111], "715": [0, 0.69444, 0, 0, 0.59111], "728": [0, 0.69444, 0.10333, 0, 0.59111], "729": [0, 0.69444, 0.12945, 0, 0.35555], "730": [0, 0.69444, 0, 0, 0.94888], "732": [0, 0.69444, 0.11472, 0, 0.59111], "733": [0, 0.69444, 0.11472, 0, 0.59111], "915": [0, 0.68611, 0.12903, 0, 0.69777], "916": [0, 0.68611, 0, 0, 0.94444], "920": [0, 0.68611, 0.09062, 0, 0.88555], "923": [0, 0.68611, 0, 0, 0.80666], "926": [0, 0.68611, 0.15092, 0, 0.76777], "928": [0, 0.68611, 0.17208, 0, 0.8961], "931": [0, 0.68611, 0.11431, 0, 0.82666], "933": [0, 0.68611, 0.10778, 0, 0.88555], "934": [0, 0.68611, 0.05632, 0, 0.82666], "936": [0, 0.68611, 0.10778, 0, 0.88555], "937": [0, 0.68611, 0.0992, 0, 0.82666], "8211": [0, 0.44444, 0.09811, 0, 0.59111], "8212": [0, 0.44444, 0.09811, 0, 1.18221], "8216": [0, 0.69444, 0.12945, 0, 0.35555], "8217": [0, 0.69444, 0.12945, 0, 0.35555], "8220": [0, 0.69444, 0.16772, 0, 0.62055], "8221": [0, 0.69444, 0.07939, 0, 0.62055] }, "Main-Italic": { "32": [0, 0, 0, 0, 0.25], "33": [0, 0.69444, 0.12417, 0, 0.30667], "34": [0, 0.69444, 0.06961, 0, 0.51444], "35": [0.19444, 0.69444, 0.06616, 0, 0.81777], "37": [0.05556, 0.75, 0.13639, 0, 0.81777], "38": [0, 0.69444, 0.09694, 0, 0.76666], "39": [0, 0.69444, 0.12417, 0, 0.30667], "40": [0.25, 0.75, 0.16194, 0, 0.40889], "41": [0.25, 0.75, 0.03694, 0, 0.40889], "42": [0, 0.75, 0.14917, 0, 0.51111], "43": [0.05667, 0.56167, 0.03694, 0, 0.76666], "44": [0.19444, 0.10556, 0, 0, 0.30667], "45": [0, 0.43056, 0.02826, 0, 0.35778], "46": [0, 0.10556, 0, 0, 0.30667], "47": [0.25, 0.75, 0.16194, 0, 0.51111], "48": [0, 0.64444, 0.13556, 0, 0.51111], "49": [0, 0.64444, 0.13556, 0, 0.51111], "50": [0, 0.64444, 0.13556, 0, 0.51111], "51": [0, 0.64444, 0.13556, 0, 0.51111], "52": [0.19444, 0.64444, 0.13556, 0, 0.51111], "53": [0, 0.64444, 0.13556, 0, 0.51111], "54": [0, 0.64444, 0.13556, 0, 0.51111], "55": [0.19444, 0.64444, 0.13556, 0, 0.51111], "56": [0, 0.64444, 0.13556, 0, 0.51111], "57": [0, 0.64444, 0.13556, 0, 0.51111], "58": [0, 0.43056, 0.0582, 0, 0.30667], "59": [0.19444, 0.43056, 0.0582, 0, 0.30667], "61": [-0.13313, 0.36687, 0.06616, 0, 0.76666], "63": [0, 0.69444, 0.1225, 0, 0.51111], "64": [0, 0.69444, 0.09597, 0, 0.76666], "65": [0, 0.68333, 0, 0, 0.74333], "66": [0, 0.68333, 0.10257, 0, 0.70389], "67": [0, 0.68333, 0.14528, 0, 0.71555], "68": [0, 0.68333, 0.09403, 0, 0.755], "69": [0, 0.68333, 0.12028, 0, 0.67833], "70": [0, 0.68333, 0.13305, 0, 0.65277], "71": [0, 0.68333, 0.08722, 0, 0.77361], "72": [0, 0.68333, 0.16389, 0, 0.74333], "73": [0, 0.68333, 0.15806, 0, 0.38555], "74": [0, 0.68333, 0.14028, 0, 0.525], "75": [0, 0.68333, 0.14528, 0, 0.76888], "76": [0, 0.68333, 0, 0, 0.62722], "77": [0, 0.68333, 0.16389, 0, 0.89666], "78": [0, 0.68333, 0.16389, 0, 0.74333], "79": [0, 0.68333, 0.09403, 0, 0.76666], "80": [0, 0.68333, 0.10257, 0, 0.67833], "81": [0.19444, 0.68333, 0.09403, 0, 0.76666], "82": [0, 0.68333, 0.03868, 0, 0.72944], "83": [0, 0.68333, 0.11972, 0, 0.56222], "84": [0, 0.68333, 0.13305, 0, 0.71555], "85": [0, 0.68333, 0.16389, 0, 0.74333], "86": [0, 0.68333, 0.18361, 0, 0.74333], "87": [0, 0.68333, 0.18361, 0, 0.99888], "88": [0, 0.68333, 0.15806, 0, 0.74333], "89": [0, 0.68333, 0.19383, 0, 0.74333], "90": [0, 0.68333, 0.14528, 0, 0.61333], "91": [0.25, 0.75, 0.1875, 0, 0.30667], "93": [0.25, 0.75, 0.10528, 0, 0.30667], "94": [0, 0.69444, 0.06646, 0, 0.51111], "95": [0.31, 0.12056, 0.09208, 0, 0.51111], "97": [0, 0.43056, 0.07671, 0, 0.51111], "98": [0, 0.69444, 0.06312, 0, 0.46], "99": [0, 0.43056, 0.05653, 0, 0.46], "100": [0, 0.69444, 0.10333, 0, 0.51111], "101": [0, 0.43056, 0.07514, 0, 0.46], "102": [0.19444, 0.69444, 0.21194, 0, 0.30667], "103": [0.19444, 0.43056, 0.08847, 0, 0.46], "104": [0, 0.69444, 0.07671, 0, 0.51111], "105": [0, 0.65536, 0.1019, 0, 0.30667], "106": [0.19444, 0.65536, 0.14467, 0, 0.30667], "107": [0, 0.69444, 0.10764, 0, 0.46], "108": [0, 0.69444, 0.10333, 0, 0.25555], "109": [0, 0.43056, 0.07671, 0, 0.81777], "110": [0, 0.43056, 0.07671, 0, 0.56222], "111": [0, 0.43056, 0.06312, 0, 0.51111], "112": [0.19444, 0.43056, 0.06312, 0, 0.51111], "113": [0.19444, 0.43056, 0.08847, 0, 0.46], "114": [0, 0.43056, 0.10764, 0, 0.42166], "115": [0, 0.43056, 0.08208, 0, 0.40889], "116": [0, 0.61508, 0.09486, 0, 0.33222], "117": [0, 0.43056, 0.07671, 0, 0.53666], "118": [0, 0.43056, 0.10764, 0, 0.46], "119": [0, 0.43056, 0.10764, 0, 0.66444], "120": [0, 0.43056, 0.12042, 0, 0.46389], "121": [0.19444, 0.43056, 0.08847, 0, 0.48555], "122": [0, 0.43056, 0.12292, 0, 0.40889], "126": [0.35, 0.31786, 0.11585, 0, 0.51111], "160": [0, 0, 0, 0, 0.25], "168": [0, 0.66786, 0.10474, 0, 0.51111], "176": [0, 0.69444, 0, 0, 0.83129], "184": [0.17014, 0, 0, 0, 0.46], "198": [0, 0.68333, 0.12028, 0, 0.88277], "216": [0.04861, 0.73194, 0.09403, 0, 0.76666], "223": [0.19444, 0.69444, 0.10514, 0, 0.53666], "230": [0, 0.43056, 0.07514, 0, 0.71555], "248": [0.09722, 0.52778, 0.09194, 0, 0.51111], "338": [0, 0.68333, 0.12028, 0, 0.98499], "339": [0, 0.43056, 0.07514, 0, 0.71555], "710": [0, 0.69444, 0.06646, 0, 0.51111], "711": [0, 0.62847, 0.08295, 0, 0.51111], "713": [0, 0.56167, 0.10333, 0, 0.51111], "714": [0, 0.69444, 0.09694, 0, 0.51111], "715": [0, 0.69444, 0, 0, 0.51111], "728": [0, 0.69444, 0.10806, 0, 0.51111], "729": [0, 0.66786, 0.11752, 0, 0.30667], "730": [0, 0.69444, 0, 0, 0.83129], "732": [0, 0.66786, 0.11585, 0, 0.51111], "733": [0, 0.69444, 0.1225, 0, 0.51111], "915": [0, 0.68333, 0.13305, 0, 0.62722], "916": [0, 0.68333, 0, 0, 0.81777], "920": [0, 0.68333, 0.09403, 0, 0.76666], "923": [0, 0.68333, 0, 0, 0.69222], "926": [0, 0.68333, 0.15294, 0, 0.66444], "928": [0, 0.68333, 0.16389, 0, 0.74333], "931": [0, 0.68333, 0.12028, 0, 0.71555], "933": [0, 0.68333, 0.11111, 0, 0.76666], "934": [0, 0.68333, 0.05986, 0, 0.71555], "936": [0, 0.68333, 0.11111, 0, 0.76666], "937": [0, 0.68333, 0.10257, 0, 0.71555], "8211": [0, 0.43056, 0.09208, 0, 0.51111], "8212": [0, 0.43056, 0.09208, 0, 1.02222], "8216": [0, 0.69444, 0.12417, 0, 0.30667], "8217": [0, 0.69444, 0.12417, 0, 0.30667], "8220": [0, 0.69444, 0.1685, 0, 0.51444], "8221": [0, 0.69444, 0.06961, 0, 0.51444], "8463": [0, 0.68889, 0, 0, 0.54028] }, "Main-Regular": { "32": [0, 0, 0, 0, 0.25], "33": [0, 0.69444, 0, 0, 0.27778], "34": [0, 0.69444, 0, 0, 0.5], "35": [0.19444, 0.69444, 0, 0, 0.83334], "36": [0.05556, 0.75, 0, 0, 0.5], "37": [0.05556, 0.75, 0, 0, 0.83334], "38": [0, 0.69444, 0, 0, 0.77778], "39": [0, 0.69444, 0, 0, 0.27778], "40": [0.25, 0.75, 0, 0, 0.38889], "41": [0.25, 0.75, 0, 0, 0.38889], "42": [0, 0.75, 0, 0, 0.5], "43": [0.08333, 0.58333, 0, 0, 0.77778], "44": [0.19444, 0.10556, 0, 0, 0.27778], "45": [0, 0.43056, 0, 0, 0.33333], "46": [0, 0.10556, 0, 0, 0.27778], "47": [0.25, 0.75, 0, 0, 0.5], "48": [0, 0.64444, 0, 0, 0.5], "49": [0, 0.64444, 0, 0, 0.5], "50": [0, 0.64444, 0, 0, 0.5], "51": [0, 0.64444, 0, 0, 0.5], "52": [0, 0.64444, 0, 0, 0.5], "53": [0, 0.64444, 0, 0, 0.5], "54": [0, 0.64444, 0, 0, 0.5], "55": [0, 0.64444, 0, 0, 0.5], "56": [0, 0.64444, 0, 0, 0.5], "57": [0, 0.64444, 0, 0, 0.5], "58": [0, 0.43056, 0, 0, 0.27778], "59": [0.19444, 0.43056, 0, 0, 0.27778], "60": [0.0391, 0.5391, 0, 0, 0.77778], "61": [-0.13313, 0.36687, 0, 0, 0.77778], "62": [0.0391, 0.5391, 0, 0, 0.77778], "63": [0, 0.69444, 0, 0, 0.47222], "64": [0, 0.69444, 0, 0, 0.77778], "65": [0, 0.68333, 0, 0, 0.75], "66": [0, 0.68333, 0, 0, 0.70834], "67": [0, 0.68333, 0, 0, 0.72222], "68": [0, 0.68333, 0, 0, 0.76389], "69": [0, 0.68333, 0, 0, 0.68056], "70": [0, 0.68333, 0, 0, 0.65278], "71": [0, 0.68333, 0, 0, 0.78472], "72": [0, 0.68333, 0, 0, 0.75], "73": [0, 0.68333, 0, 0, 0.36111], "74": [0, 0.68333, 0, 0, 0.51389], "75": [0, 0.68333, 0, 0, 0.77778], "76": [0, 0.68333, 0, 0, 0.625], "77": [0, 0.68333, 0, 0, 0.91667], "78": [0, 0.68333, 0, 0, 0.75], "79": [0, 0.68333, 0, 0, 0.77778], "80": [0, 0.68333, 0, 0, 0.68056], "81": [0.19444, 0.68333, 0, 0, 0.77778], "82": [0, 0.68333, 0, 0, 0.73611], "83": [0, 0.68333, 0, 0, 0.55556], "84": [0, 0.68333, 0, 0, 0.72222], "85": [0, 0.68333, 0, 0, 0.75], "86": [0, 0.68333, 0.01389, 0, 0.75], "87": [0, 0.68333, 0.01389, 0, 1.02778], "88": [0, 0.68333, 0, 0, 0.75], "89": [0, 0.68333, 0.025, 0, 0.75], "90": [0, 0.68333, 0, 0, 0.61111], "91": [0.25, 0.75, 0, 0, 0.27778], "92": [0.25, 0.75, 0, 0, 0.5], "93": [0.25, 0.75, 0, 0, 0.27778], "94": [0, 0.69444, 0, 0, 0.5], "95": [0.31, 0.12056, 0.02778, 0, 0.5], "97": [0, 0.43056, 0, 0, 0.5], "98": [0, 0.69444, 0, 0, 0.55556], "99": [0, 0.43056, 0, 0, 0.44445], "100": [0, 0.69444, 0, 0, 0.55556], "101": [0, 0.43056, 0, 0, 0.44445], "102": [0, 0.69444, 0.07778, 0, 0.30556], "103": [0.19444, 0.43056, 0.01389, 0, 0.5], "104": [0, 0.69444, 0, 0, 0.55556], "105": [0, 0.66786, 0, 0, 0.27778], "106": [0.19444, 0.66786, 0, 0, 0.30556], "107": [0, 0.69444, 0, 0, 0.52778], "108": [0, 0.69444, 0, 0, 0.27778], "109": [0, 0.43056, 0, 0, 0.83334], "110": [0, 0.43056, 0, 0, 0.55556], "111": [0, 0.43056, 0, 0, 0.5], "112": [0.19444, 0.43056, 0, 0, 0.55556], "113": [0.19444, 0.43056, 0, 0, 0.52778], "114": [0, 0.43056, 0, 0, 0.39167], "115": [0, 0.43056, 0, 0, 0.39445], "116": [0, 0.61508, 0, 0, 0.38889], "117": [0, 0.43056, 0, 0, 0.55556], "118": [0, 0.43056, 0.01389, 0, 0.52778], "119": [0, 0.43056, 0.01389, 0, 0.72222], "120": [0, 0.43056, 0, 0, 0.52778], "121": [0.19444, 0.43056, 0.01389, 0, 0.52778], "122": [0, 0.43056, 0, 0, 0.44445], "123": [0.25, 0.75, 0, 0, 0.5], "124": [0.25, 0.75, 0, 0, 0.27778], "125": [0.25, 0.75, 0, 0, 0.5], "126": [0.35, 0.31786, 0, 0, 0.5], "160": [0, 0, 0, 0, 0.25], "163": [0, 0.69444, 0, 0, 0.76909], "167": [0.19444, 0.69444, 0, 0, 0.44445], "168": [0, 0.66786, 0, 0, 0.5], "172": [0, 0.43056, 0, 0, 0.66667], "176": [0, 0.69444, 0, 0, 0.75], "177": [0.08333, 0.58333, 0, 0, 0.77778], "182": [0.19444, 0.69444, 0, 0, 0.61111], "184": [0.17014, 0, 0, 0, 0.44445], "198": [0, 0.68333, 0, 0, 0.90278], "215": [0.08333, 0.58333, 0, 0, 0.77778], "216": [0.04861, 0.73194, 0, 0, 0.77778], "223": [0, 0.69444, 0, 0, 0.5], "230": [0, 0.43056, 0, 0, 0.72222], "247": [0.08333, 0.58333, 0, 0, 0.77778], "248": [0.09722, 0.52778, 0, 0, 0.5], "305": [0, 0.43056, 0, 0, 0.27778], "338": [0, 0.68333, 0, 0, 1.01389], "339": [0, 0.43056, 0, 0, 0.77778], "567": [0.19444, 0.43056, 0, 0, 0.30556], "710": [0, 0.69444, 0, 0, 0.5], "711": [0, 0.62847, 0, 0, 0.5], "713": [0, 0.56778, 0, 0, 0.5], "714": [0, 0.69444, 0, 0, 0.5], "715": [0, 0.69444, 0, 0, 0.5], "728": [0, 0.69444, 0, 0, 0.5], "729": [0, 0.66786, 0, 0, 0.27778], "730": [0, 0.69444, 0, 0, 0.75], "732": [0, 0.66786, 0, 0, 0.5], "733": [0, 0.69444, 0, 0, 0.5], "915": [0, 0.68333, 0, 0, 0.625], "916": [0, 0.68333, 0, 0, 0.83334], "920": [0, 0.68333, 0, 0, 0.77778], "923": [0, 0.68333, 0, 0, 0.69445], "926": [0, 0.68333, 0, 0, 0.66667], "928": [0, 0.68333, 0, 0, 0.75], "931": [0, 0.68333, 0, 0, 0.72222], "933": [0, 0.68333, 0, 0, 0.77778], "934": [0, 0.68333, 0, 0, 0.72222], "936": [0, 0.68333, 0, 0, 0.77778], "937": [0, 0.68333, 0, 0, 0.72222], "8211": [0, 0.43056, 0.02778, 0, 0.5], "8212": [0, 0.43056, 0.02778, 0, 1], "8216": [0, 0.69444, 0, 0, 0.27778], "8217": [0, 0.69444, 0, 0, 0.27778], "8220": [0, 0.69444, 0, 0, 0.5], "8221": [0, 0.69444, 0, 0, 0.5], "8224": [0.19444, 0.69444, 0, 0, 0.44445], "8225": [0.19444, 0.69444, 0, 0, 0.44445], "8230": [0, 0.12, 0, 0, 1.172], "8242": [0, 0.55556, 0, 0, 0.275], "8407": [0, 0.71444, 0.15382, 0, 0.5], "8463": [0, 0.68889, 0, 0, 0.54028], "8465": [0, 0.69444, 0, 0, 0.72222], "8467": [0, 0.69444, 0, 0.11111, 0.41667], "8472": [0.19444, 0.43056, 0, 0.11111, 0.63646], "8476": [0, 0.69444, 0, 0, 0.72222], "8501": [0, 0.69444, 0, 0, 0.61111], "8592": [-0.13313, 0.36687, 0, 0, 1], "8593": [0.19444, 0.69444, 0, 0, 0.5], "8594": [-0.13313, 0.36687, 0, 0, 1], "8595": [0.19444, 0.69444, 0, 0, 0.5], "8596": [-0.13313, 0.36687, 0, 0, 1], "8597": [0.25, 0.75, 0, 0, 0.5], "8598": [0.19444, 0.69444, 0, 0, 1], "8599": [0.19444, 0.69444, 0, 0, 1], "8600": [0.19444, 0.69444, 0, 0, 1], "8601": [0.19444, 0.69444, 0, 0, 1], "8614": [0.011, 0.511, 0, 0, 1], "8617": [0.011, 0.511, 0, 0, 1.126], "8618": [0.011, 0.511, 0, 0, 1.126], "8636": [-0.13313, 0.36687, 0, 0, 1], "8637": [-0.13313, 0.36687, 0, 0, 1], "8640": [-0.13313, 0.36687, 0, 0, 1], "8641": [-0.13313, 0.36687, 0, 0, 1], "8652": [0.011, 0.671, 0, 0, 1], "8656": [-0.13313, 0.36687, 0, 0, 1], "8657": [0.19444, 0.69444, 0, 0, 0.61111], "8658": [-0.13313, 0.36687, 0, 0, 1], "8659": [0.19444, 0.69444, 0, 0, 0.61111], "8660": [-0.13313, 0.36687, 0, 0, 1], "8661": [0.25, 0.75, 0, 0, 0.61111], "8704": [0, 0.69444, 0, 0, 0.55556], "8706": [0, 0.69444, 0.05556, 0.08334, 0.5309], "8707": [0, 0.69444, 0, 0, 0.55556], "8709": [0.05556, 0.75, 0, 0, 0.5], "8711": [0, 0.68333, 0, 0, 0.83334], "8712": [0.0391, 0.5391, 0, 0, 0.66667], "8715": [0.0391, 0.5391, 0, 0, 0.66667], "8722": [0.08333, 0.58333, 0, 0, 0.77778], "8723": [0.08333, 0.58333, 0, 0, 0.77778], "8725": [0.25, 0.75, 0, 0, 0.5], "8726": [0.25, 0.75, 0, 0, 0.5], "8727": [-0.03472, 0.46528, 0, 0, 0.5], "8728": [-0.05555, 0.44445, 0, 0, 0.5], "8729": [-0.05555, 0.44445, 0, 0, 0.5], "8730": [0.2, 0.8, 0, 0, 0.83334], "8733": [0, 0.43056, 0, 0, 0.77778], "8734": [0, 0.43056, 0, 0, 1], "8736": [0, 0.69224, 0, 0, 0.72222], "8739": [0.25, 0.75, 0, 0, 0.27778], "8741": [0.25, 0.75, 0, 0, 0.5], "8743": [0, 0.55556, 0, 0, 0.66667], "8744": [0, 0.55556, 0, 0, 0.66667], "8745": [0, 0.55556, 0, 0, 0.66667], "8746": [0, 0.55556, 0, 0, 0.66667], "8747": [0.19444, 0.69444, 0.11111, 0, 0.41667], "8764": [-0.13313, 0.36687, 0, 0, 0.77778], "8768": [0.19444, 0.69444, 0, 0, 0.27778], "8771": [-0.03625, 0.46375, 0, 0, 0.77778], "8773": [-0.022, 0.589, 0, 0, 1], "8776": [-0.01688, 0.48312, 0, 0, 0.77778], "8781": [-0.03625, 0.46375, 0, 0, 0.77778], "8784": [-0.133, 0.67, 0, 0, 0.778], "8801": [-0.03625, 0.46375, 0, 0, 0.77778], "8804": [0.13597, 0.63597, 0, 0, 0.77778], "8805": [0.13597, 0.63597, 0, 0, 0.77778], "8810": [0.0391, 0.5391, 0, 0, 1], "8811": [0.0391, 0.5391, 0, 0, 1], "8826": [0.0391, 0.5391, 0, 0, 0.77778], "8827": [0.0391, 0.5391, 0, 0, 0.77778], "8834": [0.0391, 0.5391, 0, 0, 0.77778], "8835": [0.0391, 0.5391, 0, 0, 0.77778], "8838": [0.13597, 0.63597, 0, 0, 0.77778], "8839": [0.13597, 0.63597, 0, 0, 0.77778], "8846": [0, 0.55556, 0, 0, 0.66667], "8849": [0.13597, 0.63597, 0, 0, 0.77778], "8850": [0.13597, 0.63597, 0, 0, 0.77778], "8851": [0, 0.55556, 0, 0, 0.66667], "8852": [0, 0.55556, 0, 0, 0.66667], "8853": [0.08333, 0.58333, 0, 0, 0.77778], "8854": [0.08333, 0.58333, 0, 0, 0.77778], "8855": [0.08333, 0.58333, 0, 0, 0.77778], "8856": [0.08333, 0.58333, 0, 0, 0.77778], "8857": [0.08333, 0.58333, 0, 0, 0.77778], "8866": [0, 0.69444, 0, 0, 0.61111], "8867": [0, 0.69444, 0, 0, 0.61111], "8868": [0, 0.69444, 0, 0, 0.77778], "8869": [0, 0.69444, 0, 0, 0.77778], "8872": [0.249, 0.75, 0, 0, 0.867], "8900": [-0.05555, 0.44445, 0, 0, 0.5], "8901": [-0.05555, 0.44445, 0, 0, 0.27778], "8902": [-0.03472, 0.46528, 0, 0, 0.5], "8904": [5e-3, 0.505, 0, 0, 0.9], "8942": [0.03, 0.9, 0, 0, 0.278], "8943": [-0.19, 0.31, 0, 0, 1.172], "8945": [-0.1, 0.82, 0, 0, 1.282], "8968": [0.25, 0.75, 0, 0, 0.44445], "8969": [0.25, 0.75, 0, 0, 0.44445], "8970": [0.25, 0.75, 0, 0, 0.44445], "8971": [0.25, 0.75, 0, 0, 0.44445], "8994": [-0.14236, 0.35764, 0, 0, 1], "8995": [-0.14236, 0.35764, 0, 0, 1], "9136": [0.244, 0.744, 0, 0, 0.412], "9137": [0.244, 0.744, 0, 0, 0.412], "9651": [0.19444, 0.69444, 0, 0, 0.88889], "9657": [-0.03472, 0.46528, 0, 0, 0.5], "9661": [0.19444, 0.69444, 0, 0, 0.88889], "9667": [-0.03472, 0.46528, 0, 0, 0.5], "9711": [0.19444, 0.69444, 0, 0, 1], "9824": [0.12963, 0.69444, 0, 0, 0.77778], "9825": [0.12963, 0.69444, 0, 0, 0.77778], "9826": [0.12963, 0.69444, 0, 0, 0.77778], "9827": [0.12963, 0.69444, 0, 0, 0.77778], "9837": [0, 0.75, 0, 0, 0.38889], "9838": [0.19444, 0.69444, 0, 0, 0.38889], "9839": [0.19444, 0.69444, 0, 0, 0.38889], "10216": [0.25, 0.75, 0, 0, 0.38889], "10217": [0.25, 0.75, 0, 0, 0.38889], "10222": [0.244, 0.744, 0, 0, 0.412], "10223": [0.244, 0.744, 0, 0, 0.412], "10229": [0.011, 0.511, 0, 0, 1.609], "10230": [0.011, 0.511, 0, 0, 1.638], "10231": [0.011, 0.511, 0, 0, 1.859], "10232": [0.024, 0.525, 0, 0, 1.609], "10233": [0.024, 0.525, 0, 0, 1.638], "10234": [0.024, 0.525, 0, 0, 1.858], "10236": [0.011, 0.511, 0, 0, 1.638], "10815": [0, 0.68333, 0, 0, 0.75], "10927": [0.13597, 0.63597, 0, 0, 0.77778], "10928": [0.13597, 0.63597, 0, 0, 0.77778], "57376": [0.19444, 0.69444, 0, 0, 0] }, "Math-BoldItalic": { "32": [0, 0, 0, 0, 0.25], "48": [0, 0.44444, 0, 0, 0.575], "49": [0, 0.44444, 0, 0, 0.575], "50": [0, 0.44444, 0, 0, 0.575], "51": [0.19444, 0.44444, 0, 0, 0.575], "52": [0.19444, 0.44444, 0, 0, 0.575], "53": [0.19444, 0.44444, 0, 0, 0.575], "54": [0, 0.64444, 0, 0, 0.575], "55": [0.19444, 0.44444, 0, 0, 0.575], "56": [0, 0.64444, 0, 0, 0.575], "57": [0.19444, 0.44444, 0, 0, 0.575], "65": [0, 0.68611, 0, 0, 0.86944], "66": [0, 0.68611, 0.04835, 0, 0.8664], "67": [0, 0.68611, 0.06979, 0, 0.81694], "68": [0, 0.68611, 0.03194, 0, 0.93812], "69": [0, 0.68611, 0.05451, 0, 0.81007], "70": [0, 0.68611, 0.15972, 0, 0.68889], "71": [0, 0.68611, 0, 0, 0.88673], "72": [0, 0.68611, 0.08229, 0, 0.98229], "73": [0, 0.68611, 0.07778, 0, 0.51111], "74": [0, 0.68611, 0.10069, 0, 0.63125], "75": [0, 0.68611, 0.06979, 0, 0.97118], "76": [0, 0.68611, 0, 0, 0.75555], "77": [0, 0.68611, 0.11424, 0, 1.14201], "78": [0, 0.68611, 0.11424, 0, 0.95034], "79": [0, 0.68611, 0.03194, 0, 0.83666], "80": [0, 0.68611, 0.15972, 0, 0.72309], "81": [0.19444, 0.68611, 0, 0, 0.86861], "82": [0, 0.68611, 421e-5, 0, 0.87235], "83": [0, 0.68611, 0.05382, 0, 0.69271], "84": [0, 0.68611, 0.15972, 0, 0.63663], "85": [0, 0.68611, 0.11424, 0, 0.80027], "86": [0, 0.68611, 0.25555, 0, 0.67778], "87": [0, 0.68611, 0.15972, 0, 1.09305], "88": [0, 0.68611, 0.07778, 0, 0.94722], "89": [0, 0.68611, 0.25555, 0, 0.67458], "90": [0, 0.68611, 0.06979, 0, 0.77257], "97": [0, 0.44444, 0, 0, 0.63287], "98": [0, 0.69444, 0, 0, 0.52083], "99": [0, 0.44444, 0, 0, 0.51342], "100": [0, 0.69444, 0, 0, 0.60972], "101": [0, 0.44444, 0, 0, 0.55361], "102": [0.19444, 0.69444, 0.11042, 0, 0.56806], "103": [0.19444, 0.44444, 0.03704, 0, 0.5449], "104": [0, 0.69444, 0, 0, 0.66759], "105": [0, 0.69326, 0, 0, 0.4048], "106": [0.19444, 0.69326, 0.0622, 0, 0.47083], "107": [0, 0.69444, 0.01852, 0, 0.6037], "108": [0, 0.69444, 88e-4, 0, 0.34815], "109": [0, 0.44444, 0, 0, 1.0324], "110": [0, 0.44444, 0, 0, 0.71296], "111": [0, 0.44444, 0, 0, 0.58472], "112": [0.19444, 0.44444, 0, 0, 0.60092], "113": [0.19444, 0.44444, 0.03704, 0, 0.54213], "114": [0, 0.44444, 0.03194, 0, 0.5287], "115": [0, 0.44444, 0, 0, 0.53125], "116": [0, 0.63492, 0, 0, 0.41528], "117": [0, 0.44444, 0, 0, 0.68102], "118": [0, 0.44444, 0.03704, 0, 0.56666], "119": [0, 0.44444, 0.02778, 0, 0.83148], "120": [0, 0.44444, 0, 0, 0.65903], "121": [0.19444, 0.44444, 0.03704, 0, 0.59028], "122": [0, 0.44444, 0.04213, 0, 0.55509], "160": [0, 0, 0, 0, 0.25], "915": [0, 0.68611, 0.15972, 0, 0.65694], "916": [0, 0.68611, 0, 0, 0.95833], "920": [0, 0.68611, 0.03194, 0, 0.86722], "923": [0, 0.68611, 0, 0, 0.80555], "926": [0, 0.68611, 0.07458, 0, 0.84125], "928": [0, 0.68611, 0.08229, 0, 0.98229], "931": [0, 0.68611, 0.05451, 0, 0.88507], "933": [0, 0.68611, 0.15972, 0, 0.67083], "934": [0, 0.68611, 0, 0, 0.76666], "936": [0, 0.68611, 0.11653, 0, 0.71402], "937": [0, 0.68611, 0.04835, 0, 0.8789], "945": [0, 0.44444, 0, 0, 0.76064], "946": [0.19444, 0.69444, 0.03403, 0, 0.65972], "947": [0.19444, 0.44444, 0.06389, 0, 0.59003], "948": [0, 0.69444, 0.03819, 0, 0.52222], "949": [0, 0.44444, 0, 0, 0.52882], "950": [0.19444, 0.69444, 0.06215, 0, 0.50833], "951": [0.19444, 0.44444, 0.03704, 0, 0.6], "952": [0, 0.69444, 0.03194, 0, 0.5618], "953": [0, 0.44444, 0, 0, 0.41204], "954": [0, 0.44444, 0, 0, 0.66759], "955": [0, 0.69444, 0, 0, 0.67083], "956": [0.19444, 0.44444, 0, 0, 0.70787], "957": [0, 0.44444, 0.06898, 0, 0.57685], "958": [0.19444, 0.69444, 0.03021, 0, 0.50833], "959": [0, 0.44444, 0, 0, 0.58472], "960": [0, 0.44444, 0.03704, 0, 0.68241], "961": [0.19444, 0.44444, 0, 0, 0.6118], "962": [0.09722, 0.44444, 0.07917, 0, 0.42361], "963": [0, 0.44444, 0.03704, 0, 0.68588], "964": [0, 0.44444, 0.13472, 0, 0.52083], "965": [0, 0.44444, 0.03704, 0, 0.63055], "966": [0.19444, 0.44444, 0, 0, 0.74722], "967": [0.19444, 0.44444, 0, 0, 0.71805], "968": [0.19444, 0.69444, 0.03704, 0, 0.75833], "969": [0, 0.44444, 0.03704, 0, 0.71782], "977": [0, 0.69444, 0, 0, 0.69155], "981": [0.19444, 0.69444, 0, 0, 0.7125], "982": [0, 0.44444, 0.03194, 0, 0.975], "1009": [0.19444, 0.44444, 0, 0, 0.6118], "1013": [0, 0.44444, 0, 0, 0.48333], "57649": [0, 0.44444, 0, 0, 0.39352], "57911": [0.19444, 0.44444, 0, 0, 0.43889] }, "Math-Italic": { "32": [0, 0, 0, 0, 0.25], "48": [0, 0.43056, 0, 0, 0.5], "49": [0, 0.43056, 0, 0, 0.5], "50": [0, 0.43056, 0, 0, 0.5], "51": [0.19444, 0.43056, 0, 0, 0.5], "52": [0.19444, 0.43056, 0, 0, 0.5], "53": [0.19444, 0.43056, 0, 0, 0.5], "54": [0, 0.64444, 0, 0, 0.5], "55": [0.19444, 0.43056, 0, 0, 0.5], "56": [0, 0.64444, 0, 0, 0.5], "57": [0.19444, 0.43056, 0, 0, 0.5], "65": [0, 0.68333, 0, 0.13889, 0.75], "66": [0, 0.68333, 0.05017, 0.08334, 0.75851], "67": [0, 0.68333, 0.07153, 0.08334, 0.71472], "68": [0, 0.68333, 0.02778, 0.05556, 0.82792], "69": [0, 0.68333, 0.05764, 0.08334, 0.7382], "70": [0, 0.68333, 0.13889, 0.08334, 0.64306], "71": [0, 0.68333, 0, 0.08334, 0.78625], "72": [0, 0.68333, 0.08125, 0.05556, 0.83125], "73": [0, 0.68333, 0.07847, 0.11111, 0.43958], "74": [0, 0.68333, 0.09618, 0.16667, 0.55451], "75": [0, 0.68333, 0.07153, 0.05556, 0.84931], "76": [0, 0.68333, 0, 0.02778, 0.68056], "77": [0, 0.68333, 0.10903, 0.08334, 0.97014], "78": [0, 0.68333, 0.10903, 0.08334, 0.80347], "79": [0, 0.68333, 0.02778, 0.08334, 0.76278], "80": [0, 0.68333, 0.13889, 0.08334, 0.64201], "81": [0.19444, 0.68333, 0, 0.08334, 0.79056], "82": [0, 0.68333, 773e-5, 0.08334, 0.75929], "83": [0, 0.68333, 0.05764, 0.08334, 0.6132], "84": [0, 0.68333, 0.13889, 0.08334, 0.58438], "85": [0, 0.68333, 0.10903, 0.02778, 0.68278], "86": [0, 0.68333, 0.22222, 0, 0.58333], "87": [0, 0.68333, 0.13889, 0, 0.94445], "88": [0, 0.68333, 0.07847, 0.08334, 0.82847], "89": [0, 0.68333, 0.22222, 0, 0.58056], "90": [0, 0.68333, 0.07153, 0.08334, 0.68264], "97": [0, 0.43056, 0, 0, 0.52859], "98": [0, 0.69444, 0, 0, 0.42917], "99": [0, 0.43056, 0, 0.05556, 0.43276], "100": [0, 0.69444, 0, 0.16667, 0.52049], "101": [0, 0.43056, 0, 0.05556, 0.46563], "102": [0.19444, 0.69444, 0.10764, 0.16667, 0.48959], "103": [0.19444, 0.43056, 0.03588, 0.02778, 0.47697], "104": [0, 0.69444, 0, 0, 0.57616], "105": [0, 0.65952, 0, 0, 0.34451], "106": [0.19444, 0.65952, 0.05724, 0, 0.41181], "107": [0, 0.69444, 0.03148, 0, 0.5206], "108": [0, 0.69444, 0.01968, 0.08334, 0.29838], "109": [0, 0.43056, 0, 0, 0.87801], "110": [0, 0.43056, 0, 0, 0.60023], "111": [0, 0.43056, 0, 0.05556, 0.48472], "112": [0.19444, 0.43056, 0, 0.08334, 0.50313], "113": [0.19444, 0.43056, 0.03588, 0.08334, 0.44641], "114": [0, 0.43056, 0.02778, 0.05556, 0.45116], "115": [0, 0.43056, 0, 0.05556, 0.46875], "116": [0, 0.61508, 0, 0.08334, 0.36111], "117": [0, 0.43056, 0, 0.02778, 0.57246], "118": [0, 0.43056, 0.03588, 0.02778, 0.48472], "119": [0, 0.43056, 0.02691, 0.08334, 0.71592], "120": [0, 0.43056, 0, 0.02778, 0.57153], "121": [0.19444, 0.43056, 0.03588, 0.05556, 0.49028], "122": [0, 0.43056, 0.04398, 0.05556, 0.46505], "160": [0, 0, 0, 0, 0.25], "915": [0, 0.68333, 0.13889, 0.08334, 0.61528], "916": [0, 0.68333, 0, 0.16667, 0.83334], "920": [0, 0.68333, 0.02778, 0.08334, 0.76278], "923": [0, 0.68333, 0, 0.16667, 0.69445], "926": [0, 0.68333, 0.07569, 0.08334, 0.74236], "928": [0, 0.68333, 0.08125, 0.05556, 0.83125], "931": [0, 0.68333, 0.05764, 0.08334, 0.77986], "933": [0, 0.68333, 0.13889, 0.05556, 0.58333], "934": [0, 0.68333, 0, 0.08334, 0.66667], "936": [0, 0.68333, 0.11, 0.05556, 0.61222], "937": [0, 0.68333, 0.05017, 0.08334, 0.7724], "945": [0, 0.43056, 37e-4, 0.02778, 0.6397], "946": [0.19444, 0.69444, 0.05278, 0.08334, 0.56563], "947": [0.19444, 0.43056, 0.05556, 0, 0.51773], "948": [0, 0.69444, 0.03785, 0.05556, 0.44444], "949": [0, 0.43056, 0, 0.08334, 0.46632], "950": [0.19444, 0.69444, 0.07378, 0.08334, 0.4375], "951": [0.19444, 0.43056, 0.03588, 0.05556, 0.49653], "952": [0, 0.69444, 0.02778, 0.08334, 0.46944], "953": [0, 0.43056, 0, 0.05556, 0.35394], "954": [0, 0.43056, 0, 0, 0.57616], "955": [0, 0.69444, 0, 0, 0.58334], "956": [0.19444, 0.43056, 0, 0.02778, 0.60255], "957": [0, 0.43056, 0.06366, 0.02778, 0.49398], "958": [0.19444, 0.69444, 0.04601, 0.11111, 0.4375], "959": [0, 0.43056, 0, 0.05556, 0.48472], "960": [0, 0.43056, 0.03588, 0, 0.57003], "961": [0.19444, 0.43056, 0, 0.08334, 0.51702], "962": [0.09722, 0.43056, 0.07986, 0.08334, 0.36285], "963": [0, 0.43056, 0.03588, 0, 0.57141], "964": [0, 0.43056, 0.1132, 0.02778, 0.43715], "965": [0, 0.43056, 0.03588, 0.02778, 0.54028], "966": [0.19444, 0.43056, 0, 0.08334, 0.65417], "967": [0.19444, 0.43056, 0, 0.05556, 0.62569], "968": [0.19444, 0.69444, 0.03588, 0.11111, 0.65139], "969": [0, 0.43056, 0.03588, 0, 0.62245], "977": [0, 0.69444, 0, 0.08334, 0.59144], "981": [0.19444, 0.69444, 0, 0.08334, 0.59583], "982": [0, 0.43056, 0.02778, 0, 0.82813], "1009": [0.19444, 0.43056, 0, 0.08334, 0.51702], "1013": [0, 0.43056, 0, 0.05556, 0.4059], "57649": [0, 0.43056, 0, 0.02778, 0.32246], "57911": [0.19444, 0.43056, 0, 0.08334, 0.38403] }, "SansSerif-Bold": { "32": [0, 0, 0, 0, 0.25], "33": [0, 0.69444, 0, 0, 0.36667], "34": [0, 0.69444, 0, 0, 0.55834], "35": [0.19444, 0.69444, 0, 0, 0.91667], "36": [0.05556, 0.75, 0, 0, 0.55], "37": [0.05556, 0.75, 0, 0, 1.02912], "38": [0, 0.69444, 0, 0, 0.83056], "39": [0, 0.69444, 0, 0, 0.30556], "40": [0.25, 0.75, 0, 0, 0.42778], "41": [0.25, 0.75, 0, 0, 0.42778], "42": [0, 0.75, 0, 0, 0.55], "43": [0.11667, 0.61667, 0, 0, 0.85556], "44": [0.10556, 0.13056, 0, 0, 0.30556], "45": [0, 0.45833, 0, 0, 0.36667], "46": [0, 0.13056, 0, 0, 0.30556], "47": [0.25, 0.75, 0, 0, 0.55], "48": [0, 0.69444, 0, 0, 0.55], "49": [0, 0.69444, 0, 0, 0.55], "50": [0, 0.69444, 0, 0, 0.55], "51": [0, 0.69444, 0, 0, 0.55], "52": [0, 0.69444, 0, 0, 0.55], "53": [0, 0.69444, 0, 0, 0.55], "54": [0, 0.69444, 0, 0, 0.55], "55": [0, 0.69444, 0, 0, 0.55], "56": [0, 0.69444, 0, 0, 0.55], "57": [0, 0.69444, 0, 0, 0.55], "58": [0, 0.45833, 0, 0, 0.30556], "59": [0.10556, 0.45833, 0, 0, 0.30556], "61": [-0.09375, 0.40625, 0, 0, 0.85556], "63": [0, 0.69444, 0, 0, 0.51945], "64": [0, 0.69444, 0, 0, 0.73334], "65": [0, 0.69444, 0, 0, 0.73334], "66": [0, 0.69444, 0, 0, 0.73334], "67": [0, 0.69444, 0, 0, 0.70278], "68": [0, 0.69444, 0, 0, 0.79445], "69": [0, 0.69444, 0, 0, 0.64167], "70": [0, 0.69444, 0, 0, 0.61111], "71": [0, 0.69444, 0, 0, 0.73334], "72": [0, 0.69444, 0, 0, 0.79445], "73": [0, 0.69444, 0, 0, 0.33056], "74": [0, 0.69444, 0, 0, 0.51945], "75": [0, 0.69444, 0, 0, 0.76389], "76": [0, 0.69444, 0, 0, 0.58056], "77": [0, 0.69444, 0, 0, 0.97778], "78": [0, 0.69444, 0, 0, 0.79445], "79": [0, 0.69444, 0, 0, 0.79445], "80": [0, 0.69444, 0, 0, 0.70278], "81": [0.10556, 0.69444, 0, 0, 0.79445], "82": [0, 0.69444, 0, 0, 0.70278], "83": [0, 0.69444, 0, 0, 0.61111], "84": [0, 0.69444, 0, 0, 0.73334], "85": [0, 0.69444, 0, 0, 0.76389], "86": [0, 0.69444, 0.01528, 0, 0.73334], "87": [0, 0.69444, 0.01528, 0, 1.03889], "88": [0, 0.69444, 0, 0, 0.73334], "89": [0, 0.69444, 0.0275, 0, 0.73334], "90": [0, 0.69444, 0, 0, 0.67223], "91": [0.25, 0.75, 0, 0, 0.34306], "93": [0.25, 0.75, 0, 0, 0.34306], "94": [0, 0.69444, 0, 0, 0.55], "95": [0.35, 0.10833, 0.03056, 0, 0.55], "97": [0, 0.45833, 0, 0, 0.525], "98": [0, 0.69444, 0, 0, 0.56111], "99": [0, 0.45833, 0, 0, 0.48889], "100": [0, 0.69444, 0, 0, 0.56111], "101": [0, 0.45833, 0, 0, 0.51111], "102": [0, 0.69444, 0.07639, 0, 0.33611], "103": [0.19444, 0.45833, 0.01528, 0, 0.55], "104": [0, 0.69444, 0, 0, 0.56111], "105": [0, 0.69444, 0, 0, 0.25556], "106": [0.19444, 0.69444, 0, 0, 0.28611], "107": [0, 0.69444, 0, 0, 0.53056], "108": [0, 0.69444, 0, 0, 0.25556], "109": [0, 0.45833, 0, 0, 0.86667], "110": [0, 0.45833, 0, 0, 0.56111], "111": [0, 0.45833, 0, 0, 0.55], "112": [0.19444, 0.45833, 0, 0, 0.56111], "113": [0.19444, 0.45833, 0, 0, 0.56111], "114": [0, 0.45833, 0.01528, 0, 0.37222], "115": [0, 0.45833, 0, 0, 0.42167], "116": [0, 0.58929, 0, 0, 0.40417], "117": [0, 0.45833, 0, 0, 0.56111], "118": [0, 0.45833, 0.01528, 0, 0.5], "119": [0, 0.45833, 0.01528, 0, 0.74445], "120": [0, 0.45833, 0, 0, 0.5], "121": [0.19444, 0.45833, 0.01528, 0, 0.5], "122": [0, 0.45833, 0, 0, 0.47639], "126": [0.35, 0.34444, 0, 0, 0.55], "160": [0, 0, 0, 0, 0.25], "168": [0, 0.69444, 0, 0, 0.55], "176": [0, 0.69444, 0, 0, 0.73334], "180": [0, 0.69444, 0, 0, 0.55], "184": [0.17014, 0, 0, 0, 0.48889], "305": [0, 0.45833, 0, 0, 0.25556], "567": [0.19444, 0.45833, 0, 0, 0.28611], "710": [0, 0.69444, 0, 0, 0.55], "711": [0, 0.63542, 0, 0, 0.55], "713": [0, 0.63778, 0, 0, 0.55], "728": [0, 0.69444, 0, 0, 0.55], "729": [0, 0.69444, 0, 0, 0.30556], "730": [0, 0.69444, 0, 0, 0.73334], "732": [0, 0.69444, 0, 0, 0.55], "733": [0, 0.69444, 0, 0, 0.55], "915": [0, 0.69444, 0, 0, 0.58056], "916": [0, 0.69444, 0, 0, 0.91667], "920": [0, 0.69444, 0, 0, 0.85556], "923": [0, 0.69444, 0, 0, 0.67223], "926": [0, 0.69444, 0, 0, 0.73334], "928": [0, 0.69444, 0, 0, 0.79445], "931": [0, 0.69444, 0, 0, 0.79445], "933": [0, 0.69444, 0, 0, 0.85556], "934": [0, 0.69444, 0, 0, 0.79445], "936": [0, 0.69444, 0, 0, 0.85556], "937": [0, 0.69444, 0, 0, 0.79445], "8211": [0, 0.45833, 0.03056, 0, 0.55], "8212": [0, 0.45833, 0.03056, 0, 1.10001], "8216": [0, 0.69444, 0, 0, 0.30556], "8217": [0, 0.69444, 0, 0, 0.30556], "8220": [0, 0.69444, 0, 0, 0.55834], "8221": [0, 0.69444, 0, 0, 0.55834] }, "SansSerif-Italic": { "32": [0, 0, 0, 0, 0.25], "33": [0, 0.69444, 0.05733, 0, 0.31945], "34": [0, 0.69444, 316e-5, 0, 0.5], "35": [0.19444, 0.69444, 0.05087, 0, 0.83334], "36": [0.05556, 0.75, 0.11156, 0, 0.5], "37": [0.05556, 0.75, 0.03126, 0, 0.83334], "38": [0, 0.69444, 0.03058, 0, 0.75834], "39": [0, 0.69444, 0.07816, 0, 0.27778], "40": [0.25, 0.75, 0.13164, 0, 0.38889], "41": [0.25, 0.75, 0.02536, 0, 0.38889], "42": [0, 0.75, 0.11775, 0, 0.5], "43": [0.08333, 0.58333, 0.02536, 0, 0.77778], "44": [0.125, 0.08333, 0, 0, 0.27778], "45": [0, 0.44444, 0.01946, 0, 0.33333], "46": [0, 0.08333, 0, 0, 0.27778], "47": [0.25, 0.75, 0.13164, 0, 0.5], "48": [0, 0.65556, 0.11156, 0, 0.5], "49": [0, 0.65556, 0.11156, 0, 0.5], "50": [0, 0.65556, 0.11156, 0, 0.5], "51": [0, 0.65556, 0.11156, 0, 0.5], "52": [0, 0.65556, 0.11156, 0, 0.5], "53": [0, 0.65556, 0.11156, 0, 0.5], "54": [0, 0.65556, 0.11156, 0, 0.5], "55": [0, 0.65556, 0.11156, 0, 0.5], "56": [0, 0.65556, 0.11156, 0, 0.5], "57": [0, 0.65556, 0.11156, 0, 0.5], "58": [0, 0.44444, 0.02502, 0, 0.27778], "59": [0.125, 0.44444, 0.02502, 0, 0.27778], "61": [-0.13, 0.37, 0.05087, 0, 0.77778], "63": [0, 0.69444, 0.11809, 0, 0.47222], "64": [0, 0.69444, 0.07555, 0, 0.66667], "65": [0, 0.69444, 0, 0, 0.66667], "66": [0, 0.69444, 0.08293, 0, 0.66667], "67": [0, 0.69444, 0.11983, 0, 0.63889], "68": [0, 0.69444, 0.07555, 0, 0.72223], "69": [0, 0.69444, 0.11983, 0, 0.59722], "70": [0, 0.69444, 0.13372, 0, 0.56945], "71": [0, 0.69444, 0.11983, 0, 0.66667], "72": [0, 0.69444, 0.08094, 0, 0.70834], "73": [0, 0.69444, 0.13372, 0, 0.27778], "74": [0, 0.69444, 0.08094, 0, 0.47222], "75": [0, 0.69444, 0.11983, 0, 0.69445], "76": [0, 0.69444, 0, 0, 0.54167], "77": [0, 0.69444, 0.08094, 0, 0.875], "78": [0, 0.69444, 0.08094, 0, 0.70834], "79": [0, 0.69444, 0.07555, 0, 0.73611], "80": [0, 0.69444, 0.08293, 0, 0.63889], "81": [0.125, 0.69444, 0.07555, 0, 0.73611], "82": [0, 0.69444, 0.08293, 0, 0.64584], "83": [0, 0.69444, 0.09205, 0, 0.55556], "84": [0, 0.69444, 0.13372, 0, 0.68056], "85": [0, 0.69444, 0.08094, 0, 0.6875], "86": [0, 0.69444, 0.1615, 0, 0.66667], "87": [0, 0.69444, 0.1615, 0, 0.94445], "88": [0, 0.69444, 0.13372, 0, 0.66667], "89": [0, 0.69444, 0.17261, 0, 0.66667], "90": [0, 0.69444, 0.11983, 0, 0.61111], "91": [0.25, 0.75, 0.15942, 0, 0.28889], "93": [0.25, 0.75, 0.08719, 0, 0.28889], "94": [0, 0.69444, 0.0799, 0, 0.5], "95": [0.35, 0.09444, 0.08616, 0, 0.5], "97": [0, 0.44444, 981e-5, 0, 0.48056], "98": [0, 0.69444, 0.03057, 0, 0.51667], "99": [0, 0.44444, 0.08336, 0, 0.44445], "100": [0, 0.69444, 0.09483, 0, 0.51667], "101": [0, 0.44444, 0.06778, 0, 0.44445], "102": [0, 0.69444, 0.21705, 0, 0.30556], "103": [0.19444, 0.44444, 0.10836, 0, 0.5], "104": [0, 0.69444, 0.01778, 0, 0.51667], "105": [0, 0.67937, 0.09718, 0, 0.23889], "106": [0.19444, 0.67937, 0.09162, 0, 0.26667], "107": [0, 0.69444, 0.08336, 0, 0.48889], "108": [0, 0.69444, 0.09483, 0, 0.23889], "109": [0, 0.44444, 0.01778, 0, 0.79445], "110": [0, 0.44444, 0.01778, 0, 0.51667], "111": [0, 0.44444, 0.06613, 0, 0.5], "112": [0.19444, 0.44444, 0.0389, 0, 0.51667], "113": [0.19444, 0.44444, 0.04169, 0, 0.51667], "114": [0, 0.44444, 0.10836, 0, 0.34167], "115": [0, 0.44444, 0.0778, 0, 0.38333], "116": [0, 0.57143, 0.07225, 0, 0.36111], "117": [0, 0.44444, 0.04169, 0, 0.51667], "118": [0, 0.44444, 0.10836, 0, 0.46111], "119": [0, 0.44444, 0.10836, 0, 0.68334], "120": [0, 0.44444, 0.09169, 0, 0.46111], "121": [0.19444, 0.44444, 0.10836, 0, 0.46111], "122": [0, 0.44444, 0.08752, 0, 0.43472], "126": [0.35, 0.32659, 0.08826, 0, 0.5], "160": [0, 0, 0, 0, 0.25], "168": [0, 0.67937, 0.06385, 0, 0.5], "176": [0, 0.69444, 0, 0, 0.73752], "184": [0.17014, 0, 0, 0, 0.44445], "305": [0, 0.44444, 0.04169, 0, 0.23889], "567": [0.19444, 0.44444, 0.04169, 0, 0.26667], "710": [0, 0.69444, 0.0799, 0, 0.5], "711": [0, 0.63194, 0.08432, 0, 0.5], "713": [0, 0.60889, 0.08776, 0, 0.5], "714": [0, 0.69444, 0.09205, 0, 0.5], "715": [0, 0.69444, 0, 0, 0.5], "728": [0, 0.69444, 0.09483, 0, 0.5], "729": [0, 0.67937, 0.07774, 0, 0.27778], "730": [0, 0.69444, 0, 0, 0.73752], "732": [0, 0.67659, 0.08826, 0, 0.5], "733": [0, 0.69444, 0.09205, 0, 0.5], "915": [0, 0.69444, 0.13372, 0, 0.54167], "916": [0, 0.69444, 0, 0, 0.83334], "920": [0, 0.69444, 0.07555, 0, 0.77778], "923": [0, 0.69444, 0, 0, 0.61111], "926": [0, 0.69444, 0.12816, 0, 0.66667], "928": [0, 0.69444, 0.08094, 0, 0.70834], "931": [0, 0.69444, 0.11983, 0, 0.72222], "933": [0, 0.69444, 0.09031, 0, 0.77778], "934": [0, 0.69444, 0.04603, 0, 0.72222], "936": [0, 0.69444, 0.09031, 0, 0.77778], "937": [0, 0.69444, 0.08293, 0, 0.72222], "8211": [0, 0.44444, 0.08616, 0, 0.5], "8212": [0, 0.44444, 0.08616, 0, 1], "8216": [0, 0.69444, 0.07816, 0, 0.27778], "8217": [0, 0.69444, 0.07816, 0, 0.27778], "8220": [0, 0.69444, 0.14205, 0, 0.5], "8221": [0, 0.69444, 316e-5, 0, 0.5] }, "SansSerif-Regular": { "32": [0, 0, 0, 0, 0.25], "33": [0, 0.69444, 0, 0, 0.31945], "34": [0, 0.69444, 0, 0, 0.5], "35": [0.19444, 0.69444, 0, 0, 0.83334], "36": [0.05556, 0.75, 0, 0, 0.5], "37": [0.05556, 0.75, 0, 0, 0.83334], "38": [0, 0.69444, 0, 0, 0.75834], "39": [0, 0.69444, 0, 0, 0.27778], "40": [0.25, 0.75, 0, 0, 0.38889], "41": [0.25, 0.75, 0, 0, 0.38889], "42": [0, 0.75, 0, 0, 0.5], "43": [0.08333, 0.58333, 0, 0, 0.77778], "44": [0.125, 0.08333, 0, 0, 0.27778], "45": [0, 0.44444, 0, 0, 0.33333], "46": [0, 0.08333, 0, 0, 0.27778], "47": [0.25, 0.75, 0, 0, 0.5], "48": [0, 0.65556, 0, 0, 0.5], "49": [0, 0.65556, 0, 0, 0.5], "50": [0, 0.65556, 0, 0, 0.5], "51": [0, 0.65556, 0, 0, 0.5], "52": [0, 0.65556, 0, 0, 0.5], "53": [0, 0.65556, 0, 0, 0.5], "54": [0, 0.65556, 0, 0, 0.5], "55": [0, 0.65556, 0, 0, 0.5], "56": [0, 0.65556, 0, 0, 0.5], "57": [0, 0.65556, 0, 0, 0.5], "58": [0, 0.44444, 0, 0, 0.27778], "59": [0.125, 0.44444, 0, 0, 0.27778], "61": [-0.13, 0.37, 0, 0, 0.77778], "63": [0, 0.69444, 0, 0, 0.47222], "64": [0, 0.69444, 0, 0, 0.66667], "65": [0, 0.69444, 0, 0, 0.66667], "66": [0, 0.69444, 0, 0, 0.66667], "67": [0, 0.69444, 0, 0, 0.63889], "68": [0, 0.69444, 0, 0, 0.72223], "69": [0, 0.69444, 0, 0, 0.59722], "70": [0, 0.69444, 0, 0, 0.56945], "71": [0, 0.69444, 0, 0, 0.66667], "72": [0, 0.69444, 0, 0, 0.70834], "73": [0, 0.69444, 0, 0, 0.27778], "74": [0, 0.69444, 0, 0, 0.47222], "75": [0, 0.69444, 0, 0, 0.69445], "76": [0, 0.69444, 0, 0, 0.54167], "77": [0, 0.69444, 0, 0, 0.875], "78": [0, 0.69444, 0, 0, 0.70834], "79": [0, 0.69444, 0, 0, 0.73611], "80": [0, 0.69444, 0, 0, 0.63889], "81": [0.125, 0.69444, 0, 0, 0.73611], "82": [0, 0.69444, 0, 0, 0.64584], "83": [0, 0.69444, 0, 0, 0.55556], "84": [0, 0.69444, 0, 0, 0.68056], "85": [0, 0.69444, 0, 0, 0.6875], "86": [0, 0.69444, 0.01389, 0, 0.66667], "87": [0, 0.69444, 0.01389, 0, 0.94445], "88": [0, 0.69444, 0, 0, 0.66667], "89": [0, 0.69444, 0.025, 0, 0.66667], "90": [0, 0.69444, 0, 0, 0.61111], "91": [0.25, 0.75, 0, 0, 0.28889], "93": [0.25, 0.75, 0, 0, 0.28889], "94": [0, 0.69444, 0, 0, 0.5], "95": [0.35, 0.09444, 0.02778, 0, 0.5], "97": [0, 0.44444, 0, 0, 0.48056], "98": [0, 0.69444, 0, 0, 0.51667], "99": [0, 0.44444, 0, 0, 0.44445], "100": [0, 0.69444, 0, 0, 0.51667], "101": [0, 0.44444, 0, 0, 0.44445], "102": [0, 0.69444, 0.06944, 0, 0.30556], "103": [0.19444, 0.44444, 0.01389, 0, 0.5], "104": [0, 0.69444, 0, 0, 0.51667], "105": [0, 0.67937, 0, 0, 0.23889], "106": [0.19444, 0.67937, 0, 0, 0.26667], "107": [0, 0.69444, 0, 0, 0.48889], "108": [0, 0.69444, 0, 0, 0.23889], "109": [0, 0.44444, 0, 0, 0.79445], "110": [0, 0.44444, 0, 0, 0.51667], "111": [0, 0.44444, 0, 0, 0.5], "112": [0.19444, 0.44444, 0, 0, 0.51667], "113": [0.19444, 0.44444, 0, 0, 0.51667], "114": [0, 0.44444, 0.01389, 0, 0.34167], "115": [0, 0.44444, 0, 0, 0.38333], "116": [0, 0.57143, 0, 0, 0.36111], "117": [0, 0.44444, 0, 0, 0.51667], "118": [0, 0.44444, 0.01389, 0, 0.46111], "119": [0, 0.44444, 0.01389, 0, 0.68334], "120": [0, 0.44444, 0, 0, 0.46111], "121": [0.19444, 0.44444, 0.01389, 0, 0.46111], "122": [0, 0.44444, 0, 0, 0.43472], "126": [0.35, 0.32659, 0, 0, 0.5], "160": [0, 0, 0, 0, 0.25], "168": [0, 0.67937, 0, 0, 0.5], "176": [0, 0.69444, 0, 0, 0.66667], "184": [0.17014, 0, 0, 0, 0.44445], "305": [0, 0.44444, 0, 0, 0.23889], "567": [0.19444, 0.44444, 0, 0, 0.26667], "710": [0, 0.69444, 0, 0, 0.5], "711": [0, 0.63194, 0, 0, 0.5], "713": [0, 0.60889, 0, 0, 0.5], "714": [0, 0.69444, 0, 0, 0.5], "715": [0, 0.69444, 0, 0, 0.5], "728": [0, 0.69444, 0, 0, 0.5], "729": [0, 0.67937, 0, 0, 0.27778], "730": [0, 0.69444, 0, 0, 0.66667], "732": [0, 0.67659, 0, 0, 0.5], "733": [0, 0.69444, 0, 0, 0.5], "915": [0, 0.69444, 0, 0, 0.54167], "916": [0, 0.69444, 0, 0, 0.83334], "920": [0, 0.69444, 0, 0, 0.77778], "923": [0, 0.69444, 0, 0, 0.61111], "926": [0, 0.69444, 0, 0, 0.66667], "928": [0, 0.69444, 0, 0, 0.70834], "931": [0, 0.69444, 0, 0, 0.72222], "933": [0, 0.69444, 0, 0, 0.77778], "934": [0, 0.69444, 0, 0, 0.72222], "936": [0, 0.69444, 0, 0, 0.77778], "937": [0, 0.69444, 0, 0, 0.72222], "8211": [0, 0.44444, 0.02778, 0, 0.5], "8212": [0, 0.44444, 0.02778, 0, 1], "8216": [0, 0.69444, 0, 0, 0.27778], "8217": [0, 0.69444, 0, 0, 0.27778], "8220": [0, 0.69444, 0, 0, 0.5], "8221": [0, 0.69444, 0, 0, 0.5] }, "Script-Regular": { "32": [0, 0, 0, 0, 0.25], "65": [0, 0.7, 0.22925, 0, 0.80253], "66": [0, 0.7, 0.04087, 0, 0.90757], "67": [0, 0.7, 0.1689, 0, 0.66619], "68": [0, 0.7, 0.09371, 0, 0.77443], "69": [0, 0.7, 0.18583, 0, 0.56162], "70": [0, 0.7, 0.13634, 0, 0.89544], "71": [0, 0.7, 0.17322, 0, 0.60961], "72": [0, 0.7, 0.29694, 0, 0.96919], "73": [0, 0.7, 0.19189, 0, 0.80907], "74": [0.27778, 0.7, 0.19189, 0, 1.05159], "75": [0, 0.7, 0.31259, 0, 0.91364], "76": [0, 0.7, 0.19189, 0, 0.87373], "77": [0, 0.7, 0.15981, 0, 1.08031], "78": [0, 0.7, 0.3525, 0, 0.9015], "79": [0, 0.7, 0.08078, 0, 0.73787], "80": [0, 0.7, 0.08078, 0, 1.01262], "81": [0, 0.7, 0.03305, 0, 0.88282], "82": [0, 0.7, 0.06259, 0, 0.85], "83": [0, 0.7, 0.19189, 0, 0.86767], "84": [0, 0.7, 0.29087, 0, 0.74697], "85": [0, 0.7, 0.25815, 0, 0.79996], "86": [0, 0.7, 0.27523, 0, 0.62204], "87": [0, 0.7, 0.27523, 0, 0.80532], "88": [0, 0.7, 0.26006, 0, 0.94445], "89": [0, 0.7, 0.2939, 0, 0.70961], "90": [0, 0.7, 0.24037, 0, 0.8212], "160": [0, 0, 0, 0, 0.25] }, "Size1-Regular": { "32": [0, 0, 0, 0, 0.25], "40": [0.35001, 0.85, 0, 0, 0.45834], "41": [0.35001, 0.85, 0, 0, 0.45834], "47": [0.35001, 0.85, 0, 0, 0.57778], "91": [0.35001, 0.85, 0, 0, 0.41667], "92": [0.35001, 0.85, 0, 0, 0.57778], "93": [0.35001, 0.85, 0, 0, 0.41667], "123": [0.35001, 0.85, 0, 0, 0.58334], "125": [0.35001, 0.85, 0, 0, 0.58334], "160": [0, 0, 0, 0, 0.25], "710": [0, 0.72222, 0, 0, 0.55556], "732": [0, 0.72222, 0, 0, 0.55556], "770": [0, 0.72222, 0, 0, 0.55556], "771": [0, 0.72222, 0, 0, 0.55556], "8214": [-99e-5, 0.601, 0, 0, 0.77778], "8593": [1e-5, 0.6, 0, 0, 0.66667], "8595": [1e-5, 0.6, 0, 0, 0.66667], "8657": [1e-5, 0.6, 0, 0, 0.77778], "8659": [1e-5, 0.6, 0, 0, 0.77778], "8719": [0.25001, 0.75, 0, 0, 0.94445], "8720": [0.25001, 0.75, 0, 0, 0.94445], "8721": [0.25001, 0.75, 0, 0, 1.05556], "8730": [0.35001, 0.85, 0, 0, 1], "8739": [-599e-5, 0.606, 0, 0, 0.33333], "8741": [-599e-5, 0.606, 0, 0, 0.55556], "8747": [0.30612, 0.805, 0.19445, 0, 0.47222], "8748": [0.306, 0.805, 0.19445, 0, 0.47222], "8749": [0.306, 0.805, 0.19445, 0, 0.47222], "8750": [0.30612, 0.805, 0.19445, 0, 0.47222], "8896": [0.25001, 0.75, 0, 0, 0.83334], "8897": [0.25001, 0.75, 0, 0, 0.83334], "8898": [0.25001, 0.75, 0, 0, 0.83334], "8899": [0.25001, 0.75, 0, 0, 0.83334], "8968": [0.35001, 0.85, 0, 0, 0.47222], "8969": [0.35001, 0.85, 0, 0, 0.47222], "8970": [0.35001, 0.85, 0, 0, 0.47222], "8971": [0.35001, 0.85, 0, 0, 0.47222], "9168": [-99e-5, 0.601, 0, 0, 0.66667], "10216": [0.35001, 0.85, 0, 0, 0.47222], "10217": [0.35001, 0.85, 0, 0, 0.47222], "10752": [0.25001, 0.75, 0, 0, 1.11111], "10753": [0.25001, 0.75, 0, 0, 1.11111], "10754": [0.25001, 0.75, 0, 0, 1.11111], "10756": [0.25001, 0.75, 0, 0, 0.83334], "10758": [0.25001, 0.75, 0, 0, 0.83334] }, "Size2-Regular": { "32": [0, 0, 0, 0, 0.25], "40": [0.65002, 1.15, 0, 0, 0.59722], "41": [0.65002, 1.15, 0, 0, 0.59722], "47": [0.65002, 1.15, 0, 0, 0.81111], "91": [0.65002, 1.15, 0, 0, 0.47222], "92": [0.65002, 1.15, 0, 0, 0.81111], "93": [0.65002, 1.15, 0, 0, 0.47222], "123": [0.65002, 1.15, 0, 0, 0.66667], "125": [0.65002, 1.15, 0, 0, 0.66667], "160": [0, 0, 0, 0, 0.25], "710": [0, 0.75, 0, 0, 1], "732": [0, 0.75, 0, 0, 1], "770": [0, 0.75, 0, 0, 1], "771": [0, 0.75, 0, 0, 1], "8719": [0.55001, 1.05, 0, 0, 1.27778], "8720": [0.55001, 1.05, 0, 0, 1.27778], "8721": [0.55001, 1.05, 0, 0, 1.44445], "8730": [0.65002, 1.15, 0, 0, 1], "8747": [0.86225, 1.36, 0.44445, 0, 0.55556], "8748": [0.862, 1.36, 0.44445, 0, 0.55556], "8749": [0.862, 1.36, 0.44445, 0, 0.55556], "8750": [0.86225, 1.36, 0.44445, 0, 0.55556], "8896": [0.55001, 1.05, 0, 0, 1.11111], "8897": [0.55001, 1.05, 0, 0, 1.11111], "8898": [0.55001, 1.05, 0, 0, 1.11111], "8899": [0.55001, 1.05, 0, 0, 1.11111], "8968": [0.65002, 1.15, 0, 0, 0.52778], "8969": [0.65002, 1.15, 0, 0, 0.52778], "8970": [0.65002, 1.15, 0, 0, 0.52778], "8971": [0.65002, 1.15, 0, 0, 0.52778], "10216": [0.65002, 1.15, 0, 0, 0.61111], "10217": [0.65002, 1.15, 0, 0, 0.61111], "10752": [0.55001, 1.05, 0, 0, 1.51112], "10753": [0.55001, 1.05, 0, 0, 1.51112], "10754": [0.55001, 1.05, 0, 0, 1.51112], "10756": [0.55001, 1.05, 0, 0, 1.11111], "10758": [0.55001, 1.05, 0, 0, 1.11111] }, "Size3-Regular": { "32": [0, 0, 0, 0, 0.25], "40": [0.95003, 1.45, 0, 0, 0.73611], "41": [0.95003, 1.45, 0, 0, 0.73611], "47": [0.95003, 1.45, 0, 0, 1.04445], "91": [0.95003, 1.45, 0, 0, 0.52778], "92": [0.95003, 1.45, 0, 0, 1.04445], "93": [0.95003, 1.45, 0, 0, 0.52778], "123": [0.95003, 1.45, 0, 0, 0.75], "125": [0.95003, 1.45, 0, 0, 0.75], "160": [0, 0, 0, 0, 0.25], "710": [0, 0.75, 0, 0, 1.44445], "732": [0, 0.75, 0, 0, 1.44445], "770": [0, 0.75, 0, 0, 1.44445], "771": [0, 0.75, 0, 0, 1.44445], "8730": [0.95003, 1.45, 0, 0, 1], "8968": [0.95003, 1.45, 0, 0, 0.58334], "8969": [0.95003, 1.45, 0, 0, 0.58334], "8970": [0.95003, 1.45, 0, 0, 0.58334], "8971": [0.95003, 1.45, 0, 0, 0.58334], "10216": [0.95003, 1.45, 0, 0, 0.75], "10217": [0.95003, 1.45, 0, 0, 0.75] }, "Size4-Regular": { "32": [0, 0, 0, 0, 0.25], "40": [1.25003, 1.75, 0, 0, 0.79167], "41": [1.25003, 1.75, 0, 0, 0.79167], "47": [1.25003, 1.75, 0, 0, 1.27778], "91": [1.25003, 1.75, 0, 0, 0.58334], "92": [1.25003, 1.75, 0, 0, 1.27778], "93": [1.25003, 1.75, 0, 0, 0.58334], "123": [1.25003, 1.75, 0, 0, 0.80556], "125": [1.25003, 1.75, 0, 0, 0.80556], "160": [0, 0, 0, 0, 0.25], "710": [0, 0.825, 0, 0, 1.8889], "732": [0, 0.825, 0, 0, 1.8889], "770": [0, 0.825, 0, 0, 1.8889], "771": [0, 0.825, 0, 0, 1.8889], "8730": [1.25003, 1.75, 0, 0, 1], "8968": [1.25003, 1.75, 0, 0, 0.63889], "8969": [1.25003, 1.75, 0, 0, 0.63889], "8970": [1.25003, 1.75, 0, 0, 0.63889], "8971": [1.25003, 1.75, 0, 0, 0.63889], "9115": [0.64502, 1.155, 0, 0, 0.875], "9116": [1e-5, 0.6, 0, 0, 0.875], "9117": [0.64502, 1.155, 0, 0, 0.875], "9118": [0.64502, 1.155, 0, 0, 0.875], "9119": [1e-5, 0.6, 0, 0, 0.875], "9120": [0.64502, 1.155, 0, 0, 0.875], "9121": [0.64502, 1.155, 0, 0, 0.66667], "9122": [-99e-5, 0.601, 0, 0, 0.66667], "9123": [0.64502, 1.155, 0, 0, 0.66667], "9124": [0.64502, 1.155, 0, 0, 0.66667], "9125": [-99e-5, 0.601, 0, 0, 0.66667], "9126": [0.64502, 1.155, 0, 0, 0.66667], "9127": [1e-5, 0.9, 0, 0, 0.88889], "9128": [0.65002, 1.15, 0, 0, 0.88889], "9129": [0.90001, 0, 0, 0, 0.88889], "9130": [0, 0.3, 0, 0, 0.88889], "9131": [1e-5, 0.9, 0, 0, 0.88889], "9132": [0.65002, 1.15, 0, 0, 0.88889], "9133": [0.90001, 0, 0, 0, 0.88889], "9143": [0.88502, 0.915, 0, 0, 1.05556], "10216": [1.25003, 1.75, 0, 0, 0.80556], "10217": [1.25003, 1.75, 0, 0, 0.80556], "57344": [-499e-5, 0.605, 0, 0, 1.05556], "57345": [-499e-5, 0.605, 0, 0, 1.05556], "57680": [0, 0.12, 0, 0, 0.45], "57681": [0, 0.12, 0, 0, 0.45], "57682": [0, 0.12, 0, 0, 0.45], "57683": [0, 0.12, 0, 0, 0.45] }, "Typewriter-Regular": { "32": [0, 0, 0, 0, 0.525], "33": [0, 0.61111, 0, 0, 0.525], "34": [0, 0.61111, 0, 0, 0.525], "35": [0, 0.61111, 0, 0, 0.525], "36": [0.08333, 0.69444, 0, 0, 0.525], "37": [0.08333, 0.69444, 0, 0, 0.525], "38": [0, 0.61111, 0, 0, 0.525], "39": [0, 0.61111, 0, 0, 0.525], "40": [0.08333, 0.69444, 0, 0, 0.525], "41": [0.08333, 0.69444, 0, 0, 0.525], "42": [0, 0.52083, 0, 0, 0.525], "43": [-0.08056, 0.53055, 0, 0, 0.525], "44": [0.13889, 0.125, 0, 0, 0.525], "45": [-0.08056, 0.53055, 0, 0, 0.525], "46": [0, 0.125, 0, 0, 0.525], "47": [0.08333, 0.69444, 0, 0, 0.525], "48": [0, 0.61111, 0, 0, 0.525], "49": [0, 0.61111, 0, 0, 0.525], "50": [0, 0.61111, 0, 0, 0.525], "51": [0, 0.61111, 0, 0, 0.525], "52": [0, 0.61111, 0, 0, 0.525], "53": [0, 0.61111, 0, 0, 0.525], "54": [0, 0.61111, 0, 0, 0.525], "55": [0, 0.61111, 0, 0, 0.525], "56": [0, 0.61111, 0, 0, 0.525], "57": [0, 0.61111, 0, 0, 0.525], "58": [0, 0.43056, 0, 0, 0.525], "59": [0.13889, 0.43056, 0, 0, 0.525], "60": [-0.05556, 0.55556, 0, 0, 0.525], "61": [-0.19549, 0.41562, 0, 0, 0.525], "62": [-0.05556, 0.55556, 0, 0, 0.525], "63": [0, 0.61111, 0, 0, 0.525], "64": [0, 0.61111, 0, 0, 0.525], "65": [0, 0.61111, 0, 0, 0.525], "66": [0, 0.61111, 0, 0, 0.525], "67": [0, 0.61111, 0, 0, 0.525], "68": [0, 0.61111, 0, 0, 0.525], "69": [0, 0.61111, 0, 0, 0.525], "70": [0, 0.61111, 0, 0, 0.525], "71": [0, 0.61111, 0, 0, 0.525], "72": [0, 0.61111, 0, 0, 0.525], "73": [0, 0.61111, 0, 0, 0.525], "74": [0, 0.61111, 0, 0, 0.525], "75": [0, 0.61111, 0, 0, 0.525], "76": [0, 0.61111, 0, 0, 0.525], "77": [0, 0.61111, 0, 0, 0.525], "78": [0, 0.61111, 0, 0, 0.525], "79": [0, 0.61111, 0, 0, 0.525], "80": [0, 0.61111, 0, 0, 0.525], "81": [0.13889, 0.61111, 0, 0, 0.525], "82": [0, 0.61111, 0, 0, 0.525], "83": [0, 0.61111, 0, 0, 0.525], "84": [0, 0.61111, 0, 0, 0.525], "85": [0, 0.61111, 0, 0, 0.525], "86": [0, 0.61111, 0, 0, 0.525], "87": [0, 0.61111, 0, 0, 0.525], "88": [0, 0.61111, 0, 0, 0.525], "89": [0, 0.61111, 0, 0, 0.525], "90": [0, 0.61111, 0, 0, 0.525], "91": [0.08333, 0.69444, 0, 0, 0.525], "92": [0.08333, 0.69444, 0, 0, 0.525], "93": [0.08333, 0.69444, 0, 0, 0.525], "94": [0, 0.61111, 0, 0, 0.525], "95": [0.09514, 0, 0, 0, 0.525], "96": [0, 0.61111, 0, 0, 0.525], "97": [0, 0.43056, 0, 0, 0.525], "98": [0, 0.61111, 0, 0, 0.525], "99": [0, 0.43056, 0, 0, 0.525], "100": [0, 0.61111, 0, 0, 0.525], "101": [0, 0.43056, 0, 0, 0.525], "102": [0, 0.61111, 0, 0, 0.525], "103": [0.22222, 0.43056, 0, 0, 0.525], "104": [0, 0.61111, 0, 0, 0.525], "105": [0, 0.61111, 0, 0, 0.525], "106": [0.22222, 0.61111, 0, 0, 0.525], "107": [0, 0.61111, 0, 0, 0.525], "108": [0, 0.61111, 0, 0, 0.525], "109": [0, 0.43056, 0, 0, 0.525], "110": [0, 0.43056, 0, 0, 0.525], "111": [0, 0.43056, 0, 0, 0.525], "112": [0.22222, 0.43056, 0, 0, 0.525], "113": [0.22222, 0.43056, 0, 0, 0.525], "114": [0, 0.43056, 0, 0, 0.525], "115": [0, 0.43056, 0, 0, 0.525], "116": [0, 0.55358, 0, 0, 0.525], "117": [0, 0.43056, 0, 0, 0.525], "118": [0, 0.43056, 0, 0, 0.525], "119": [0, 0.43056, 0, 0, 0.525], "120": [0, 0.43056, 0, 0, 0.525], "121": [0.22222, 0.43056, 0, 0, 0.525], "122": [0, 0.43056, 0, 0, 0.525], "123": [0.08333, 0.69444, 0, 0, 0.525], "124": [0.08333, 0.69444, 0, 0, 0.525], "125": [0.08333, 0.69444, 0, 0, 0.525], "126": [0, 0.61111, 0, 0, 0.525], "127": [0, 0.61111, 0, 0, 0.525], "160": [0, 0, 0, 0, 0.525], "176": [0, 0.61111, 0, 0, 0.525], "184": [0.19445, 0, 0, 0, 0.525], "305": [0, 0.43056, 0, 0, 0.525], "567": [0.22222, 0.43056, 0, 0, 0.525], "711": [0, 0.56597, 0, 0, 0.525], "713": [0, 0.56555, 0, 0, 0.525], "714": [0, 0.61111, 0, 0, 0.525], "715": [0, 0.61111, 0, 0, 0.525], "728": [0, 0.61111, 0, 0, 0.525], "730": [0, 0.61111, 0, 0, 0.525], "770": [0, 0.61111, 0, 0, 0.525], "771": [0, 0.61111, 0, 0, 0.525], "776": [0, 0.61111, 0, 0, 0.525], "915": [0, 0.61111, 0, 0, 0.525], "916": [0, 0.61111, 0, 0, 0.525], "920": [0, 0.61111, 0, 0, 0.525], "923": [0, 0.61111, 0, 0, 0.525], "926": [0, 0.61111, 0, 0, 0.525], "928": [0, 0.61111, 0, 0, 0.525], "931": [0, 0.61111, 0, 0, 0.525], "933": [0, 0.61111, 0, 0, 0.525], "934": [0, 0.61111, 0, 0, 0.525], "936": [0, 0.61111, 0, 0, 0.525], "937": [0, 0.61111, 0, 0, 0.525], "8216": [0, 0.61111, 0, 0, 0.525], "8217": [0, 0.61111, 0, 0, 0.525], "8242": [0, 0.61111, 0, 0, 0.525], "9251": [0.11111, 0.21944, 0, 0, 0.525] } }, l0 = { slant: [0.25, 0.25, 0.25], space: [0, 0, 0], stretch: [0, 0, 0], shrink: [0, 0, 0], xHeight: [0.431, 0.431, 0.431], quad: [1, 1.171, 1.472], extraSpace: [0, 0, 0], num1: [0.677, 0.732, 0.925], num2: [0.394, 0.384, 0.387], num3: [0.444, 0.471, 0.504], denom1: [0.686, 0.752, 1.025], denom2: [0.345, 0.344, 0.532], sup1: [0.413, 0.503, 0.504], sup2: [0.363, 0.431, 0.404], sup3: [0.289, 0.286, 0.294], sub1: [0.15, 0.143, 0.2], sub2: [0.247, 0.286, 0.4], supDrop: [0.386, 0.353, 0.494], subDrop: [0.05, 0.071, 0.1], delim1: [2.39, 1.7, 1.98], delim2: [1.01, 1.157, 1.42], axisHeight: [0.25, 0.25, 0.25], defaultRuleThickness: [0.04, 0.049, 0.049], bigOpSpacing1: [0.111, 0.111, 0.111], bigOpSpacing2: [0.166, 0.166, 0.166], bigOpSpacing3: [0.2, 0.2, 0.2], bigOpSpacing4: [0.6, 0.611, 0.611], bigOpSpacing5: [0.1, 0.143, 0.143], sqrtRuleThickness: [0.04, 0.04, 0.04], ptPerEm: [10, 10, 10], doubleRuleSep: [0.2, 0.2, 0.2], arrayRuleWidth: [0.04, 0.04, 0.04], fboxsep: [0.3, 0.3, 0.3], fboxrule: [0.04, 0.04, 0.04] }, g0 = { \u00C5: "A", \u00C7: "C", \u00D0: "D", \u00DE: "o", \u00E5: "a", \u00E7: "c", \u00F0: "d", \u00FE: "o", \u0410: "A", \u0411: "B", \u0412: "B", \u0413: "F", \u0414: "A", \u0415: "E", \u0416: "K", \u0417: "3", \u0418: "N", \u0419: "N", \u041A: "K", \u041B: "N", \u041C: "M", \u041D: "H", \u041E: "O", \u041F: "N", \u0420: "P", \u0421: "C", \u0422: "T", \u0423: "y", \u0424: "O", \u0425: "X", \u0426: "U", \u0427: "h", \u0428: "W", \u0429: "W", \u042A: "B", \u042B: "X", \u042C: "B", \u042D: "3", \u042E: "X", \u042F: "R", \u0430: "a", \u0431: "b", \u0432: "a", \u0433: "r", \u0434: "y", \u0435: "e", \u0436: "m", \u0437: "e", \u0438: "n", \u0439: "n", \u043A: "n", \u043B: "n", \u043C: "m", \u043D: "n", \u043E: "o", \u043F: "n", \u0440: "p", \u0441: "c", \u0442: "o", \u0443: "y", \u0444: "b", \u0445: "x", \u0446: "n", \u0447: "n", \u0448: "w", \u0449: "w", \u044A: "a", \u044B: "m", \u044C: "a", \u044D: "e", \u044E: "m", \u044F: "r" };
      function q0(o, e) {
        rt[o] = e;
      }
      function v0(o, e, t) {
        if (!rt[e])
          throw new Error("Font metrics not found for font: " + e + ".");
        var r = o.charCodeAt(0), i = rt[e][r];
        if (!i && o[0] in g0 && (r = g0[o[0]].charCodeAt(0), i = rt[e][r]), !i && t === "text" && M(r) && (i = rt[e][77]), i)
          return { depth: i[0], height: i[1], italic: i[2], skew: i[3], width: i[4] };
      }
      var x0 = {};
      function Cr(o) {
        var e;
        if (o >= 5 ? e = 0 : o >= 3 ? e = 1 : e = 2, !x0[e]) {
          var t = x0[e] = { cssEmPerMu: l0.quad[e] / 18 };
          for (var r in l0)
            l0.hasOwnProperty(r) && (t[r] = l0[r][e]);
        }
        return x0[e];
      }
      var Br = { bin: 1, close: 1, inner: 1, open: 1, punct: 1, rel: 1 }, Tr = { "accent-token": 1, mathord: 1, "op-token": 1, spacing: 1, textord: 1 }, u0 = { math: {}, text: {} }, Ne = u0;
      function l(o, e, t, r, i, a) {
        u0[o][i] = { font: e, group: t, replace: r }, a && r && (u0[o][r] = u0[o][i]);
      }
      var s = "math", U = "text", f = "main", y = "ams", Z = "accent-token", $ = "bin", Me = "close", $e = "inner", le = "mathord", ke = "op-token", Qe = "open", O0 = "punct", S = "rel", Mt = "spacing", E = "textord";
      l(s, f, S, "\u2261", "\\equiv", true), l(s, f, S, "\u227A", "\\prec", true), l(s, f, S, "\u227B", "\\succ", true), l(s, f, S, "\u223C", "\\sim", true), l(s, f, S, "\u22A5", "\\perp"), l(s, f, S, "\u2AAF", "\\preceq", true), l(s, f, S, "\u2AB0", "\\succeq", true), l(s, f, S, "\u2243", "\\simeq", true), l(s, f, S, "\u2223", "\\mid", true), l(s, f, S, "\u226A", "\\ll", true), l(s, f, S, "\u226B", "\\gg", true), l(s, f, S, "\u224D", "\\asymp", true), l(s, f, S, "\u2225", "\\parallel"), l(s, f, S, "\u22C8", "\\bowtie", true), l(s, f, S, "\u2323", "\\smile", true), l(s, f, S, "\u2291", "\\sqsubseteq", true), l(s, f, S, "\u2292", "\\sqsupseteq", true), l(s, f, S, "\u2250", "\\doteq", true), l(s, f, S, "\u2322", "\\frown", true), l(s, f, S, "\u220B", "\\ni", true), l(s, f, S, "\u221D", "\\propto", true), l(s, f, S, "\u22A2", "\\vdash", true), l(s, f, S, "\u22A3", "\\dashv", true), l(s, f, S, "\u220B", "\\owns"), l(s, f, O0, ".", "\\ldotp"), l(s, f, O0, "\u22C5", "\\cdotp"), l(s, f, E, "#", "\\#"), l(U, f, E, "#", "\\#"), l(s, f, E, "&", "\\&"), l(U, f, E, "&", "\\&"), l(s, f, E, "\u2135", "\\aleph", true), l(s, f, E, "\u2200", "\\forall", true), l(s, f, E, "\u210F", "\\hbar", true), l(s, f, E, "\u2203", "\\exists", true), l(s, f, E, "\u2207", "\\nabla", true), l(s, f, E, "\u266D", "\\flat", true), l(s, f, E, "\u2113", "\\ell", true), l(s, f, E, "\u266E", "\\natural", true), l(s, f, E, "\u2663", "\\clubsuit", true), l(s, f, E, "\u2118", "\\wp", true), l(s, f, E, "\u266F", "\\sharp", true), l(s, f, E, "\u2662", "\\diamondsuit", true), l(s, f, E, "\u211C", "\\Re", true), l(s, f, E, "\u2661", "\\heartsuit", true), l(s, f, E, "\u2111", "\\Im", true), l(s, f, E, "\u2660", "\\spadesuit", true), l(s, f, E, "\xA7", "\\S", true), l(U, f, E, "\xA7", "\\S"), l(s, f, E, "\xB6", "\\P", true), l(U, f, E, "\xB6", "\\P"), l(s, f, E, "\u2020", "\\dag"), l(U, f, E, "\u2020", "\\dag"), l(U, f, E, "\u2020", "\\textdagger"), l(s, f, E, "\u2021", "\\ddag"), l(U, f, E, "\u2021", "\\ddag"), l(U, f, E, "\u2021", "\\textdaggerdbl"), l(s, f, Me, "\u23B1", "\\rmoustache", true), l(s, f, Qe, "\u23B0", "\\lmoustache", true), l(s, f, Me, "\u27EF", "\\rgroup", true), l(s, f, Qe, "\u27EE", "\\lgroup", true), l(s, f, $, "\u2213", "\\mp", true), l(s, f, $, "\u2296", "\\ominus", true), l(s, f, $, "\u228E", "\\uplus", true), l(s, f, $, "\u2293", "\\sqcap", true), l(s, f, $, "\u2217", "\\ast"), l(s, f, $, "\u2294", "\\sqcup", true), l(s, f, $, "\u25EF", "\\bigcirc", true), l(s, f, $, "\u2219", "\\bullet"), l(s, f, $, "\u2021", "\\ddagger"), l(s, f, $, "\u2240", "\\wr", true), l(s, f, $, "\u2A3F", "\\amalg"), l(s, f, $, "&", "\\And"), l(s, f, S, "\u27F5", "\\longleftarrow", true), l(s, f, S, "\u21D0", "\\Leftarrow", true), l(s, f, S, "\u27F8", "\\Longleftarrow", true), l(s, f, S, "\u27F6", "\\longrightarrow", true), l(s, f, S, "\u21D2", "\\Rightarrow", true), l(s, f, S, "\u27F9", "\\Longrightarrow", true), l(s, f, S, "\u2194", "\\leftrightarrow", true), l(s, f, S, "\u27F7", "\\longleftrightarrow", true), l(s, f, S, "\u21D4", "\\Leftrightarrow", true), l(s, f, S, "\u27FA", "\\Longleftrightarrow", true), l(s, f, S, "\u21A6", "\\mapsto", true), l(s, f, S, "\u27FC", "\\longmapsto", true), l(s, f, S, "\u2197", "\\nearrow", true), l(s, f, S, "\u21A9", "\\hookleftarrow", true), l(s, f, S, "\u21AA", "\\hookrightarrow", true), l(s, f, S, "\u2198", "\\searrow", true), l(s, f, S, "\u21BC", "\\leftharpoonup", true), l(s, f, S, "\u21C0", "\\rightharpoonup", true), l(s, f, S, "\u2199", "\\swarrow", true), l(s, f, S, "\u21BD", "\\leftharpoondown", true), l(s, f, S, "\u21C1", "\\rightharpoondown", true), l(s, f, S, "\u2196", "\\nwarrow", true), l(s, f, S, "\u21CC", "\\rightleftharpoons", true), l(s, y, S, "\u226E", "\\nless", true), l(s, y, S, "\uE010", "\\@nleqslant"), l(s, y, S, "\uE011", "\\@nleqq"), l(s, y, S, "\u2A87", "\\lneq", true), l(s, y, S, "\u2268", "\\lneqq", true), l(s, y, S, "\uE00C", "\\@lvertneqq"), l(s, y, S, "\u22E6", "\\lnsim", true), l(s, y, S, "\u2A89", "\\lnapprox", true), l(s, y, S, "\u2280", "\\nprec", true), l(s, y, S, "\u22E0", "\\npreceq", true), l(s, y, S, "\u22E8", "\\precnsim", true), l(s, y, S, "\u2AB9", "\\precnapprox", true), l(s, y, S, "\u2241", "\\nsim", true), l(s, y, S, "\uE006", "\\@nshortmid"), l(s, y, S, "\u2224", "\\nmid", true), l(s, y, S, "\u22AC", "\\nvdash", true), l(s, y, S, "\u22AD", "\\nvDash", true), l(s, y, S, "\u22EA", "\\ntriangleleft"), l(s, y, S, "\u22EC", "\\ntrianglelefteq", true), l(s, y, S, "\u228A", "\\subsetneq", true), l(s, y, S, "\uE01A", "\\@varsubsetneq"), l(s, y, S, "\u2ACB", "\\subsetneqq", true), l(s, y, S, "\uE017", "\\@varsubsetneqq"), l(s, y, S, "\u226F", "\\ngtr", true), l(s, y, S, "\uE00F", "\\@ngeqslant"), l(s, y, S, "\uE00E", "\\@ngeqq"), l(s, y, S, "\u2A88", "\\gneq", true), l(s, y, S, "\u2269", "\\gneqq", true), l(s, y, S, "\uE00D", "\\@gvertneqq"), l(s, y, S, "\u22E7", "\\gnsim", true), l(s, y, S, "\u2A8A", "\\gnapprox", true), l(s, y, S, "\u2281", "\\nsucc", true), l(s, y, S, "\u22E1", "\\nsucceq", true), l(s, y, S, "\u22E9", "\\succnsim", true), l(s, y, S, "\u2ABA", "\\succnapprox", true), l(s, y, S, "\u2246", "\\ncong", true), l(s, y, S, "\uE007", "\\@nshortparallel"), l(s, y, S, "\u2226", "\\nparallel", true), l(s, y, S, "\u22AF", "\\nVDash", true), l(s, y, S, "\u22EB", "\\ntriangleright"), l(s, y, S, "\u22ED", "\\ntrianglerighteq", true), l(s, y, S, "\uE018", "\\@nsupseteqq"), l(s, y, S, "\u228B", "\\supsetneq", true), l(s, y, S, "\uE01B", "\\@varsupsetneq"), l(s, y, S, "\u2ACC", "\\supsetneqq", true), l(s, y, S, "\uE019", "\\@varsupsetneqq"), l(s, y, S, "\u22AE", "\\nVdash", true), l(s, y, S, "\u2AB5", "\\precneqq", true), l(s, y, S, "\u2AB6", "\\succneqq", true), l(s, y, S, "\uE016", "\\@nsubseteqq"), l(s, y, $, "\u22B4", "\\unlhd"), l(s, y, $, "\u22B5", "\\unrhd"), l(s, y, S, "\u219A", "\\nleftarrow", true), l(s, y, S, "\u219B", "\\nrightarrow", true), l(s, y, S, "\u21CD", "\\nLeftarrow", true), l(s, y, S, "\u21CF", "\\nRightarrow", true), l(s, y, S, "\u21AE", "\\nleftrightarrow", true), l(s, y, S, "\u21CE", "\\nLeftrightarrow", true), l(s, y, S, "\u25B3", "\\vartriangle"), l(s, y, E, "\u210F", "\\hslash"), l(s, y, E, "\u25BD", "\\triangledown"), l(s, y, E, "\u25CA", "\\lozenge"), l(s, y, E, "\u24C8", "\\circledS"), l(s, y, E, "\xAE", "\\circledR"), l(U, y, E, "\xAE", "\\circledR"), l(s, y, E, "\u2221", "\\measuredangle", true), l(s, y, E, "\u2204", "\\nexists"), l(s, y, E, "\u2127", "\\mho"), l(s, y, E, "\u2132", "\\Finv", true), l(s, y, E, "\u2141", "\\Game", true), l(s, y, E, "\u2035", "\\backprime"), l(s, y, E, "\u25B2", "\\blacktriangle"), l(s, y, E, "\u25BC", "\\blacktriangledown"), l(s, y, E, "\u25A0", "\\blacksquare"), l(s, y, E, "\u29EB", "\\blacklozenge"), l(s, y, E, "\u2605", "\\bigstar"), l(s, y, E, "\u2222", "\\sphericalangle", true), l(s, y, E, "\u2201", "\\complement", true), l(s, y, E, "\xF0", "\\eth", true), l(U, f, E, "\xF0", "\xF0"), l(s, y, E, "\u2571", "\\diagup"), l(s, y, E, "\u2572", "\\diagdown"), l(s, y, E, "\u25A1", "\\square"), l(s, y, E, "\u25A1", "\\Box"), l(s, y, E, "\u25CA", "\\Diamond"), l(s, y, E, "\xA5", "\\yen", true), l(U, y, E, "\xA5", "\\yen", true), l(s, y, E, "\u2713", "\\checkmark", true), l(U, y, E, "\u2713", "\\checkmark"), l(s, y, E, "\u2136", "\\beth", true), l(s, y, E, "\u2138", "\\daleth", true), l(s, y, E, "\u2137", "\\gimel", true), l(s, y, E, "\u03DD", "\\digamma", true), l(s, y, E, "\u03F0", "\\varkappa"), l(s, y, Qe, "\u250C", "\\@ulcorner", true), l(s, y, Me, "\u2510", "\\@urcorner", true), l(s, y, Qe, "\u2514", "\\@llcorner", true), l(s, y, Me, "\u2518", "\\@lrcorner", true), l(s, y, S, "\u2266", "\\leqq", true), l(s, y, S, "\u2A7D", "\\leqslant", true), l(s, y, S, "\u2A95", "\\eqslantless", true), l(s, y, S, "\u2272", "\\lesssim", true), l(s, y, S, "\u2A85", "\\lessapprox", true), l(s, y, S, "\u224A", "\\approxeq", true), l(s, y, $, "\u22D6", "\\lessdot"), l(s, y, S, "\u22D8", "\\lll", true), l(s, y, S, "\u2276", "\\lessgtr", true), l(s, y, S, "\u22DA", "\\lesseqgtr", true), l(s, y, S, "\u2A8B", "\\lesseqqgtr", true), l(s, y, S, "\u2251", "\\doteqdot"), l(s, y, S, "\u2253", "\\risingdotseq", true), l(s, y, S, "\u2252", "\\fallingdotseq", true), l(s, y, S, "\u223D", "\\backsim", true), l(s, y, S, "\u22CD", "\\backsimeq", true), l(s, y, S, "\u2AC5", "\\subseteqq", true), l(s, y, S, "\u22D0", "\\Subset", true), l(s, y, S, "\u228F", "\\sqsubset", true), l(s, y, S, "\u227C", "\\preccurlyeq", true), l(s, y, S, "\u22DE", "\\curlyeqprec", true), l(s, y, S, "\u227E", "\\precsim", true), l(s, y, S, "\u2AB7", "\\precapprox", true), l(s, y, S, "\u22B2", "\\vartriangleleft"), l(s, y, S, "\u22B4", "\\trianglelefteq"), l(s, y, S, "\u22A8", "\\vDash", true), l(s, y, S, "\u22AA", "\\Vvdash", true), l(s, y, S, "\u2323", "\\smallsmile"), l(s, y, S, "\u2322", "\\smallfrown"), l(s, y, S, "\u224F", "\\bumpeq", true), l(s, y, S, "\u224E", "\\Bumpeq", true), l(s, y, S, "\u2267", "\\geqq", true), l(s, y, S, "\u2A7E", "\\geqslant", true), l(s, y, S, "\u2A96", "\\eqslantgtr", true), l(s, y, S, "\u2273", "\\gtrsim", true), l(s, y, S, "\u2A86", "\\gtrapprox", true), l(s, y, $, "\u22D7", "\\gtrdot"), l(s, y, S, "\u22D9", "\\ggg", true), l(s, y, S, "\u2277", "\\gtrless", true), l(s, y, S, "\u22DB", "\\gtreqless", true), l(s, y, S, "\u2A8C", "\\gtreqqless", true), l(s, y, S, "\u2256", "\\eqcirc", true), l(s, y, S, "\u2257", "\\circeq", true), l(s, y, S, "\u225C", "\\triangleq", true), l(s, y, S, "\u223C", "\\thicksim"), l(s, y, S, "\u2248", "\\thickapprox"), l(s, y, S, "\u2AC6", "\\supseteqq", true), l(s, y, S, "\u22D1", "\\Supset", true), l(s, y, S, "\u2290", "\\sqsupset", true), l(s, y, S, "\u227D", "\\succcurlyeq", true), l(s, y, S, "\u22DF", "\\curlyeqsucc", true), l(s, y, S, "\u227F", "\\succsim", true), l(s, y, S, "\u2AB8", "\\succapprox", true), l(s, y, S, "\u22B3", "\\vartriangleright"), l(s, y, S, "\u22B5", "\\trianglerighteq"), l(s, y, S, "\u22A9", "\\Vdash", true), l(s, y, S, "\u2223", "\\shortmid"), l(s, y, S, "\u2225", "\\shortparallel"), l(s, y, S, "\u226C", "\\between", true), l(s, y, S, "\u22D4", "\\pitchfork", true), l(s, y, S, "\u221D", "\\varpropto"), l(s, y, S, "\u25C0", "\\blacktriangleleft"), l(s, y, S, "\u2234", "\\therefore", true), l(s, y, S, "\u220D", "\\backepsilon"), l(s, y, S, "\u25B6", "\\blacktriangleright"), l(s, y, S, "\u2235", "\\because", true), l(s, y, S, "\u22D8", "\\llless"), l(s, y, S, "\u22D9", "\\gggtr"), l(s, y, $, "\u22B2", "\\lhd"), l(s, y, $, "\u22B3", "\\rhd"), l(s, y, S, "\u2242", "\\eqsim", true), l(s, f, S, "\u22C8", "\\Join"), l(s, y, S, "\u2251", "\\Doteq", true), l(s, y, $, "\u2214", "\\dotplus", true), l(s, y, $, "\u2216", "\\smallsetminus"), l(s, y, $, "\u22D2", "\\Cap", true), l(s, y, $, "\u22D3", "\\Cup", true), l(s, y, $, "\u2A5E", "\\doublebarwedge", true), l(s, y, $, "\u229F", "\\boxminus", true), l(s, y, $, "\u229E", "\\boxplus", true), l(s, y, $, "\u22C7", "\\divideontimes", true), l(s, y, $, "\u22C9", "\\ltimes", true), l(s, y, $, "\u22CA", "\\rtimes", true), l(s, y, $, "\u22CB", "\\leftthreetimes", true), l(s, y, $, "\u22CC", "\\rightthreetimes", true), l(s, y, $, "\u22CF", "\\curlywedge", true), l(s, y, $, "\u22CE", "\\curlyvee", true), l(s, y, $, "\u229D", "\\circleddash", true), l(s, y, $, "\u229B", "\\circledast", true), l(s, y, $, "\u22C5", "\\centerdot"), l(s, y, $, "\u22BA", "\\intercal", true), l(s, y, $, "\u22D2", "\\doublecap"), l(s, y, $, "\u22D3", "\\doublecup"), l(s, y, $, "\u22A0", "\\boxtimes", true), l(s, y, S, "\u21E2", "\\dashrightarrow", true), l(s, y, S, "\u21E0", "\\dashleftarrow", true), l(s, y, S, "\u21C7", "\\leftleftarrows", true), l(s, y, S, "\u21C6", "\\leftrightarrows", true), l(s, y, S, "\u21DA", "\\Lleftarrow", true), l(s, y, S, "\u219E", "\\twoheadleftarrow", true), l(s, y, S, "\u21A2", "\\leftarrowtail", true), l(s, y, S, "\u21AB", "\\looparrowleft", true), l(s, y, S, "\u21CB", "\\leftrightharpoons", true), l(s, y, S, "\u21B6", "\\curvearrowleft", true), l(s, y, S, "\u21BA", "\\circlearrowleft", true), l(s, y, S, "\u21B0", "\\Lsh", true), l(s, y, S, "\u21C8", "\\upuparrows", true), l(s, y, S, "\u21BF", "\\upharpoonleft", true), l(s, y, S, "\u21C3", "\\downharpoonleft", true), l(s, f, S, "\u22B6", "\\origof", true), l(s, f, S, "\u22B7", "\\imageof", true), l(s, y, S, "\u22B8", "\\multimap", true), l(s, y, S, "\u21AD", "\\leftrightsquigarrow", true), l(s, y, S, "\u21C9", "\\rightrightarrows", true), l(s, y, S, "\u21C4", "\\rightleftarrows", true), l(s, y, S, "\u21A0", "\\twoheadrightarrow", true), l(s, y, S, "\u21A3", "\\rightarrowtail", true), l(s, y, S, "\u21AC", "\\looparrowright", true), l(s, y, S, "\u21B7", "\\curvearrowright", true), l(s, y, S, "\u21BB", "\\circlearrowright", true), l(s, y, S, "\u21B1", "\\Rsh", true), l(s, y, S, "\u21CA", "\\downdownarrows", true), l(s, y, S, "\u21BE", "\\upharpoonright", true), l(s, y, S, "\u21C2", "\\downharpoonright", true), l(s, y, S, "\u21DD", "\\rightsquigarrow", true), l(s, y, S, "\u21DD", "\\leadsto"), l(s, y, S, "\u21DB", "\\Rrightarrow", true), l(s, y, S, "\u21BE", "\\restriction"), l(s, f, E, "\u2018", "`"), l(s, f, E, "$", "\\$"), l(U, f, E, "$", "\\$"), l(U, f, E, "$", "\\textdollar"), l(s, f, E, "%", "\\%"), l(U, f, E, "%", "\\%"), l(s, f, E, "_", "\\_"), l(U, f, E, "_", "\\_"), l(U, f, E, "_", "\\textunderscore"), l(s, f, E, "\u2220", "\\angle", true), l(s, f, E, "\u221E", "\\infty", true), l(s, f, E, "\u2032", "\\prime"), l(s, f, E, "\u25B3", "\\triangle"), l(s, f, E, "\u0393", "\\Gamma", true), l(s, f, E, "\u0394", "\\Delta", true), l(s, f, E, "\u0398", "\\Theta", true), l(s, f, E, "\u039B", "\\Lambda", true), l(s, f, E, "\u039E", "\\Xi", true), l(s, f, E, "\u03A0", "\\Pi", true), l(s, f, E, "\u03A3", "\\Sigma", true), l(s, f, E, "\u03A5", "\\Upsilon", true), l(s, f, E, "\u03A6", "\\Phi", true), l(s, f, E, "\u03A8", "\\Psi", true), l(s, f, E, "\u03A9", "\\Omega", true), l(s, f, E, "A", "\u0391"), l(s, f, E, "B", "\u0392"), l(s, f, E, "E", "\u0395"), l(s, f, E, "Z", "\u0396"), l(s, f, E, "H", "\u0397"), l(s, f, E, "I", "\u0399"), l(s, f, E, "K", "\u039A"), l(s, f, E, "M", "\u039C"), l(s, f, E, "N", "\u039D"), l(s, f, E, "O", "\u039F"), l(s, f, E, "P", "\u03A1"), l(s, f, E, "T", "\u03A4"), l(s, f, E, "X", "\u03A7"), l(s, f, E, "\xAC", "\\neg", true), l(s, f, E, "\xAC", "\\lnot"), l(s, f, E, "\u22A4", "\\top"), l(s, f, E, "\u22A5", "\\bot"), l(s, f, E, "\u2205", "\\emptyset"), l(s, y, E, "\u2205", "\\varnothing"), l(s, f, le, "\u03B1", "\\alpha", true), l(s, f, le, "\u03B2", "\\beta", true), l(s, f, le, "\u03B3", "\\gamma", true), l(s, f, le, "\u03B4", "\\delta", true), l(s, f, le, "\u03F5", "\\epsilon", true), l(s, f, le, "\u03B6", "\\zeta", true), l(s, f, le, "\u03B7", "\\eta", true), l(s, f, le, "\u03B8", "\\theta", true), l(s, f, le, "\u03B9", "\\iota", true), l(s, f, le, "\u03BA", "\\kappa", true), l(s, f, le, "\u03BB", "\\lambda", true), l(s, f, le, "\u03BC", "\\mu", true), l(s, f, le, "\u03BD", "\\nu", true), l(s, f, le, "\u03BE", "\\xi", true), l(s, f, le, "\u03BF", "\\omicron", true), l(s, f, le, "\u03C0", "\\pi", true), l(s, f, le, "\u03C1", "\\rho", true), l(s, f, le, "\u03C3", "\\sigma", true), l(s, f, le, "\u03C4", "\\tau", true), l(s, f, le, "\u03C5", "\\upsilon", true), l(s, f, le, "\u03D5", "\\phi", true), l(s, f, le, "\u03C7", "\\chi", true), l(s, f, le, "\u03C8", "\\psi", true), l(s, f, le, "\u03C9", "\\omega", true), l(s, f, le, "\u03B5", "\\varepsilon", true), l(s, f, le, "\u03D1", "\\vartheta", true), l(s, f, le, "\u03D6", "\\varpi", true), l(s, f, le, "\u03F1", "\\varrho", true), l(s, f, le, "\u03C2", "\\varsigma", true), l(s, f, le, "\u03C6", "\\varphi", true), l(s, f, $, "\u2217", "*"), l(s, f, $, "+", "+"), l(s, f, $, "\u2212", "-"), l(s, f, $, "\u22C5", "\\cdot", true), l(s, f, $, "\u2218", "\\circ"), l(s, f, $, "\xF7", "\\div", true), l(s, f, $, "\xB1", "\\pm", true), l(s, f, $, "\xD7", "\\times", true), l(s, f, $, "\u2229", "\\cap", true), l(s, f, $, "\u222A", "\\cup", true), l(s, f, $, "\u2216", "\\setminus"), l(s, f, $, "\u2227", "\\land"), l(s, f, $, "\u2228", "\\lor"), l(s, f, $, "\u2227", "\\wedge", true), l(s, f, $, "\u2228", "\\vee", true), l(s, f, E, "\u221A", "\\surd"), l(s, f, Qe, "\u27E8", "\\langle", true), l(s, f, Qe, "\u2223", "\\lvert"), l(s, f, Qe, "\u2225", "\\lVert"), l(s, f, Me, "?", "?"), l(s, f, Me, "!", "!"), l(s, f, Me, "\u27E9", "\\rangle", true), l(s, f, Me, "\u2223", "\\rvert"), l(s, f, Me, "\u2225", "\\rVert"), l(s, f, S, "=", "="), l(s, f, S, ":", ":"), l(s, f, S, "\u2248", "\\approx", true), l(s, f, S, "\u2245", "\\cong", true), l(s, f, S, "\u2265", "\\ge"), l(s, f, S, "\u2265", "\\geq", true), l(s, f, S, "\u2190", "\\gets"), l(s, f, S, ">", "\\gt", true), l(s, f, S, "\u2208", "\\in", true), l(s, f, S, "\uE020", "\\@not"), l(s, f, S, "\u2282", "\\subset", true), l(s, f, S, "\u2283", "\\supset", true), l(s, f, S, "\u2286", "\\subseteq", true), l(s, f, S, "\u2287", "\\supseteq", true), l(s, y, S, "\u2288", "\\nsubseteq", true), l(s, y, S, "\u2289", "\\nsupseteq", true), l(s, f, S, "\u22A8", "\\models"), l(s, f, S, "\u2190", "\\leftarrow", true), l(s, f, S, "\u2264", "\\le"), l(s, f, S, "\u2264", "\\leq", true), l(s, f, S, "<", "\\lt", true), l(s, f, S, "\u2192", "\\rightarrow", true), l(s, f, S, "\u2192", "\\to"), l(s, y, S, "\u2271", "\\ngeq", true), l(s, y, S, "\u2270", "\\nleq", true), l(s, f, Mt, "\xA0", "\\ "), l(s, f, Mt, "\xA0", "\\space"), l(s, f, Mt, "\xA0", "\\nobreakspace"), l(U, f, Mt, "\xA0", "\\ "), l(U, f, Mt, "\xA0", " "), l(U, f, Mt, "\xA0", "\\space"), l(U, f, Mt, "\xA0", "\\nobreakspace"), l(s, f, Mt, null, "\\nobreak"), l(s, f, Mt, null, "\\allowbreak"), l(s, f, O0, ",", ","), l(s, f, O0, ";", ";"), l(s, y, $, "\u22BC", "\\barwedge", true), l(s, y, $, "\u22BB", "\\veebar", true), l(s, f, $, "\u2299", "\\odot", true), l(s, f, $, "\u2295", "\\oplus", true), l(s, f, $, "\u2297", "\\otimes", true), l(s, f, E, "\u2202", "\\partial", true), l(s, f, $, "\u2298", "\\oslash", true), l(s, y, $, "\u229A", "\\circledcirc", true), l(s, y, $, "\u22A1", "\\boxdot", true), l(s, f, $, "\u25B3", "\\bigtriangleup"), l(s, f, $, "\u25BD", "\\bigtriangledown"), l(s, f, $, "\u2020", "\\dagger"), l(s, f, $, "\u22C4", "\\diamond"), l(s, f, $, "\u22C6", "\\star"), l(s, f, $, "\u25C3", "\\triangleleft"), l(s, f, $, "\u25B9", "\\triangleright"), l(s, f, Qe, "{", "\\{"), l(U, f, E, "{", "\\{"), l(U, f, E, "{", "\\textbraceleft"), l(s, f, Me, "}", "\\}"), l(U, f, E, "}", "\\}"), l(U, f, E, "}", "\\textbraceright"), l(s, f, Qe, "{", "\\lbrace"), l(s, f, Me, "}", "\\rbrace"), l(s, f, Qe, "[", "\\lbrack", true), l(U, f, E, "[", "\\lbrack", true), l(s, f, Me, "]", "\\rbrack", true), l(U, f, E, "]", "\\rbrack", true), l(s, f, Qe, "(", "\\lparen", true), l(s, f, Me, ")", "\\rparen", true), l(U, f, E, "<", "\\textless", true), l(U, f, E, ">", "\\textgreater", true), l(s, f, Qe, "\u230A", "\\lfloor", true), l(s, f, Me, "\u230B", "\\rfloor", true), l(s, f, Qe, "\u2308", "\\lceil", true), l(s, f, Me, "\u2309", "\\rceil", true), l(s, f, E, "\\", "\\backslash"), l(s, f, E, "\u2223", "|"), l(s, f, E, "\u2223", "\\vert"), l(U, f, E, "|", "\\textbar", true), l(s, f, E, "\u2225", "\\|"), l(s, f, E, "\u2225", "\\Vert"), l(U, f, E, "\u2225", "\\textbardbl"), l(U, f, E, "~", "\\textasciitilde"), l(U, f, E, "\\", "\\textbackslash"), l(U, f, E, "^", "\\textasciicircum"), l(s, f, S, "\u2191", "\\uparrow", true), l(s, f, S, "\u21D1", "\\Uparrow", true), l(s, f, S, "\u2193", "\\downarrow", true), l(s, f, S, "\u21D3", "\\Downarrow", true), l(s, f, S, "\u2195", "\\updownarrow", true), l(s, f, S, "\u21D5", "\\Updownarrow", true), l(s, f, ke, "\u2210", "\\coprod"), l(s, f, ke, "\u22C1", "\\bigvee"), l(s, f, ke, "\u22C0", "\\bigwedge"), l(s, f, ke, "\u2A04", "\\biguplus"), l(s, f, ke, "\u22C2", "\\bigcap"), l(s, f, ke, "\u22C3", "\\bigcup"), l(s, f, ke, "\u222B", "\\int"), l(s, f, ke, "\u222B", "\\intop"), l(s, f, ke, "\u222C", "\\iint"), l(s, f, ke, "\u222D", "\\iiint"), l(s, f, ke, "\u220F", "\\prod"), l(s, f, ke, "\u2211", "\\sum"), l(s, f, ke, "\u2A02", "\\bigotimes"), l(s, f, ke, "\u2A01", "\\bigoplus"), l(s, f, ke, "\u2A00", "\\bigodot"), l(s, f, ke, "\u222E", "\\oint"), l(s, f, ke, "\u222F", "\\oiint"), l(s, f, ke, "\u2230", "\\oiiint"), l(s, f, ke, "\u2A06", "\\bigsqcup"), l(s, f, ke, "\u222B", "\\smallint"), l(U, f, $e, "\u2026", "\\textellipsis"), l(s, f, $e, "\u2026", "\\mathellipsis"), l(U, f, $e, "\u2026", "\\ldots", true), l(s, f, $e, "\u2026", "\\ldots", true), l(s, f, $e, "\u22EF", "\\@cdots", true), l(s, f, $e, "\u22F1", "\\ddots", true), l(s, f, E, "\u22EE", "\\varvdots"), l(s, f, Z, "\u02CA", "\\acute"), l(s, f, Z, "\u02CB", "\\grave"), l(s, f, Z, "\xA8", "\\ddot"), l(s, f, Z, "~", "\\tilde"), l(s, f, Z, "\u02C9", "\\bar"), l(s, f, Z, "\u02D8", "\\breve"), l(s, f, Z, "\u02C7", "\\check"), l(s, f, Z, "^", "\\hat"), l(s, f, Z, "\u20D7", "\\vec"), l(s, f, Z, "\u02D9", "\\dot"), l(s, f, Z, "\u02DA", "\\mathring"), l(s, f, le, "\uE131", "\\@imath"), l(s, f, le, "\uE237", "\\@jmath"), l(s, f, E, "\u0131", "\u0131"), l(s, f, E, "\u0237", "\u0237"), l(U, f, E, "\u0131", "\\i", true), l(U, f, E, "\u0237", "\\j", true), l(U, f, E, "\xDF", "\\ss", true), l(U, f, E, "\xE6", "\\ae", true), l(U, f, E, "\u0153", "\\oe", true), l(U, f, E, "\xF8", "\\o", true), l(U, f, E, "\xC6", "\\AE", true), l(U, f, E, "\u0152", "\\OE", true), l(U, f, E, "\xD8", "\\O", true), l(U, f, Z, "\u02CA", "\\'"), l(U, f, Z, "\u02CB", "\\`"), l(U, f, Z, "\u02C6", "\\^"), l(U, f, Z, "\u02DC", "\\~"), l(U, f, Z, "\u02C9", "\\="), l(U, f, Z, "\u02D8", "\\u"), l(U, f, Z, "\u02D9", "\\."), l(U, f, Z, "\u02DA", "\\r"), l(U, f, Z, "\u02C7", "\\v"), l(U, f, Z, "\xA8", '\\"'), l(U, f, Z, "\u02DD", "\\H"), l(U, f, Z, "\u25EF", "\\textcircled");
      var si = { "--": true, "---": true, "``": true, "''": true };
      l(U, f, E, "\u2013", "--", true), l(U, f, E, "\u2013", "\\textendash"), l(U, f, E, "\u2014", "---", true), l(U, f, E, "\u2014", "\\textemdash"), l(U, f, E, "\u2018", "`", true), l(U, f, E, "\u2018", "\\textquoteleft"), l(U, f, E, "\u2019", "'", true), l(U, f, E, "\u2019", "\\textquoteright"), l(U, f, E, "\u201C", "``", true), l(U, f, E, "\u201C", "\\textquotedblleft"), l(U, f, E, "\u201D", "''", true), l(U, f, E, "\u201D", "\\textquotedblright"), l(s, f, E, "\xB0", "\\degree", true), l(U, f, E, "\xB0", "\\degree"), l(U, f, E, "\xB0", "\\textdegree", true), l(s, f, E, "\xA3", "\\pounds"), l(s, f, E, "\xA3", "\\mathsterling", true), l(U, f, E, "\xA3", "\\pounds"), l(U, f, E, "\xA3", "\\textsterling", true), l(s, y, E, "\u2720", "\\maltese"), l(U, y, E, "\u2720", "\\maltese");
      for (var mi = '0123456789/@."', Mr = 0; Mr < mi.length; Mr++) {
        var hi = mi.charAt(Mr);
        l(s, f, E, hi, hi);
      }
      for (var ci = '0123456789!@*()-=+";:?/.,', Er = 0; Er < ci.length; Er++) {
        var pi = ci.charAt(Er);
        l(U, f, E, pi, pi);
      }
      for (var R0 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz", Dr = 0; Dr < R0.length; Dr++) {
        var H0 = R0.charAt(Dr);
        l(s, f, le, H0, H0), l(U, f, E, H0, H0);
      }
      l(s, y, E, "C", "\u2102"), l(U, y, E, "C", "\u2102"), l(s, y, E, "H", "\u210D"), l(U, y, E, "H", "\u210D"), l(s, y, E, "N", "\u2115"), l(U, y, E, "N", "\u2115"), l(s, y, E, "P", "\u2119"), l(U, y, E, "P", "\u2119"), l(s, y, E, "Q", "\u211A"), l(U, y, E, "Q", "\u211A"), l(s, y, E, "R", "\u211D"), l(U, y, E, "R", "\u211D"), l(s, y, E, "Z", "\u2124"), l(U, y, E, "Z", "\u2124"), l(s, f, le, "h", "\u210E"), l(U, f, le, "h", "\u210E");
      for (var he = "", et = 0; et < R0.length; et++) {
        var Ve = R0.charAt(et);
        he = String.fromCharCode(55349, 56320 + et), l(s, f, le, Ve, he), l(U, f, E, Ve, he), he = String.fromCharCode(55349, 56372 + et), l(s, f, le, Ve, he), l(U, f, E, Ve, he), he = String.fromCharCode(55349, 56424 + et), l(s, f, le, Ve, he), l(U, f, E, Ve, he), he = String.fromCharCode(55349, 56580 + et), l(s, f, le, Ve, he), l(U, f, E, Ve, he), he = String.fromCharCode(55349, 56736 + et), l(s, f, le, Ve, he), l(U, f, E, Ve, he), he = String.fromCharCode(55349, 56788 + et), l(s, f, le, Ve, he), l(U, f, E, Ve, he), he = String.fromCharCode(55349, 56840 + et), l(s, f, le, Ve, he), l(U, f, E, Ve, he), he = String.fromCharCode(55349, 56944 + et), l(s, f, le, Ve, he), l(U, f, E, Ve, he), et < 26 && (he = String.fromCharCode(55349, 56632 + et), l(s, f, le, Ve, he), l(U, f, E, Ve, he), he = String.fromCharCode(55349, 56476 + et), l(s, f, le, Ve, he), l(U, f, E, Ve, he));
      }
      he = String.fromCharCode(55349, 56668), l(s, f, le, "k", he), l(U, f, E, "k", he);
      for (var Zt = 0; Zt < 10; Zt++) {
        var qt = Zt.toString();
        he = String.fromCharCode(55349, 57294 + Zt), l(s, f, le, qt, he), l(U, f, E, qt, he), he = String.fromCharCode(55349, 57314 + Zt), l(s, f, le, qt, he), l(U, f, E, qt, he), he = String.fromCharCode(55349, 57324 + Zt), l(s, f, le, qt, he), l(U, f, E, qt, he), he = String.fromCharCode(55349, 57334 + Zt), l(s, f, le, qt, he), l(U, f, E, qt, he);
      }
      for (var Fr = "\xC7\xD0\xDE\xE7\xFE", Nr = 0; Nr < Fr.length; Nr++) {
        var P0 = Fr.charAt(Nr);
        l(s, f, le, P0, P0), l(U, f, E, P0, P0);
      }
      var j0 = [["mathbf", "textbf", "Main-Bold"], ["mathbf", "textbf", "Main-Bold"], ["mathnormal", "textit", "Math-Italic"], ["mathnormal", "textit", "Math-Italic"], ["boldsymbol", "boldsymbol", "Main-BoldItalic"], ["boldsymbol", "boldsymbol", "Main-BoldItalic"], ["mathscr", "textscr", "Script-Regular"], ["", "", ""], ["", "", ""], ["", "", ""], ["mathfrak", "textfrak", "Fraktur-Regular"], ["mathfrak", "textfrak", "Fraktur-Regular"], ["mathbb", "textbb", "AMS-Regular"], ["mathbb", "textbb", "AMS-Regular"], ["", "", ""], ["", "", ""], ["mathsf", "textsf", "SansSerif-Regular"], ["mathsf", "textsf", "SansSerif-Regular"], ["mathboldsf", "textboldsf", "SansSerif-Bold"], ["mathboldsf", "textboldsf", "SansSerif-Bold"], ["mathitsf", "textitsf", "SansSerif-Italic"], ["mathitsf", "textitsf", "SansSerif-Italic"], ["", "", ""], ["", "", ""], ["mathtt", "texttt", "Typewriter-Regular"], ["mathtt", "texttt", "Typewriter-Regular"]], fi = [["mathbf", "textbf", "Main-Bold"], ["", "", ""], ["mathsf", "textsf", "SansSerif-Regular"], ["mathboldsf", "textboldsf", "SansSerif-Bold"], ["mathtt", "texttt", "Typewriter-Regular"]], Iu = function (e, t) {
        var r = e.charCodeAt(0), i = e.charCodeAt(1), a = (r - 55296) * 1024 + (i - 56320) + 65536, u = t === "math" ? 0 : 1;
        if (119808 <= a && a < 120484) {
          var p = Math.floor((a - 119808) / 26);
          return [j0[p][2], j0[p][u]];
        } else if (120782 <= a && a <= 120831) {
          var x = Math.floor((a - 120782) / 10);
          return [fi[x][2], fi[x][u]];
        } else {
          if (a === 120485 || a === 120486)
            return [j0[0][2], j0[0][u]];
          if (120486 < a && a < 120782)
            return ["", ""];
          throw new m("Unsupported character: " + e);
        }
      }, Lu = [[1, 1, 1], [2, 1, 1], [3, 1, 1], [4, 2, 1], [5, 2, 1], [6, 3, 1], [7, 4, 2], [8, 6, 3], [9, 7, 6], [10, 8, 7], [11, 10, 9]], di = [0.5, 0.6, 0.7, 0.8, 0.9, 1, 1.2, 1.44, 1.728, 2.074, 2.488], gi = function (e, t) {
        return t.size < 2 ? e : Lu[e - 1][t.size - 1];
      }, vi = function () {
        function o(t) {
          this.style = void 0, this.color = void 0, this.size = void 0, this.textSize = void 0, this.phantom = void 0, this.font = void 0, this.fontFamily = void 0, this.fontWeight = void 0, this.fontShape = void 0, this.sizeMultiplier = void 0, this.maxSize = void 0, this.minRuleThickness = void 0, this._fontMetrics = void 0, this.style = t.style, this.color = t.color, this.size = t.size || o.BASESIZE, this.textSize = t.textSize || this.size, this.phantom = !!t.phantom, this.font = t.font || "", this.fontFamily = t.fontFamily || "", this.fontWeight = t.fontWeight || "", this.fontShape = t.fontShape || "", this.sizeMultiplier = di[this.size - 1], this.maxSize = t.maxSize, this.minRuleThickness = t.minRuleThickness, this._fontMetrics = void 0;
        }
        var e = o.prototype;
        return e.extend = function (r) {
          var i = { style: this.style, size: this.size, textSize: this.textSize, color: this.color, phantom: this.phantom, font: this.font, fontFamily: this.fontFamily, fontWeight: this.fontWeight, fontShape: this.fontShape, maxSize: this.maxSize, minRuleThickness: this.minRuleThickness };
          for (var a in r)
            r.hasOwnProperty(a) && (i[a] = r[a]);
          return new o(i);
        }, e.havingStyle = function (r) {
          return this.style === r ? this : this.extend({ style: r, size: gi(this.textSize, r) });
        }, e.havingCrampedStyle = function () {
          return this.havingStyle(this.style.cramp());
        }, e.havingSize = function (r) {
          return this.size === r && this.textSize === r ? this : this.extend({ style: this.style.text(), size: r, textSize: r, sizeMultiplier: di[r - 1] });
        }, e.havingBaseStyle = function (r) {
          r = r || this.style.text();
          var i = gi(o.BASESIZE, r);
          return this.size === i && this.textSize === o.BASESIZE && this.style === r ? this : this.extend({ style: r, size: i });
        }, e.havingBaseSizing = function () {
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
        }, e.withColor = function (r) {
          return this.extend({ color: r });
        }, e.withPhantom = function () {
          return this.extend({ phantom: true });
        }, e.withFont = function (r) {
          return this.extend({ font: r });
        }, e.withTextFontFamily = function (r) {
          return this.extend({ fontFamily: r, font: "" });
        }, e.withTextFontWeight = function (r) {
          return this.extend({ fontWeight: r, font: "" });
        }, e.withTextFontShape = function (r) {
          return this.extend({ fontShape: r, font: "" });
        }, e.sizingClasses = function (r) {
          return r.size !== this.size ? ["sizing", "reset-size" + r.size, "size" + this.size] : [];
        }, e.baseSizingClasses = function () {
          return this.size !== o.BASESIZE ? ["sizing", "reset-size" + this.size, "size" + o.BASESIZE] : [];
        }, e.fontMetrics = function () {
          return this._fontMetrics || (this._fontMetrics = Cr(this.size)), this._fontMetrics;
        }, e.getColor = function () {
          return this.phantom ? "transparent" : this.color;
        }, o;
      }();
      vi.BASESIZE = 6;
      var qu = vi, Ir = { pt: 1, mm: 7227 / 2540, cm: 7227 / 254, in: 72.27, bp: 803 / 800, pc: 12, dd: 1238 / 1157, cc: 14856 / 1157, nd: 685 / 642, nc: 1370 / 107, sp: 1 / 65536, px: 803 / 800 }, Ou = { ex: true, em: true, mu: true }, xi = function (e) {
        return typeof e != "string" && (e = e.unit), e in Ir || e in Ou || e === "ex";
      }, Le = function (e, t) {
        var r;
        if (e.unit in Ir)
          r = Ir[e.unit] / t.fontMetrics().ptPerEm / t.sizeMultiplier;
        else if (e.unit === "mu")
          r = t.fontMetrics().cssEmPerMu;
        else {
          var i;
          if (t.style.isTight() ? i = t.havingStyle(t.style.text()) : i = t, e.unit === "ex")
            r = i.fontMetrics().xHeight;
          else if (e.unit === "em")
            r = i.fontMetrics().quad;
          else
            throw new m("Invalid unit: '" + e.unit + "'");
          i !== t && (r *= i.sizeMultiplier / t.sizeMultiplier);
        }
        return Math.min(e.number * r, t.maxSize);
      }, V0 = function (e, t, r) {
        return Ne[r][e] && Ne[r][e].replace && (e = Ne[r][e].replace), { value: e, metrics: v0(e, t, r) };
      }, ct = function (e, t, r, i, a) {
        var u = V0(e, t, r), p = u.metrics;
        e = u.value;
        var x;
        if (p) {
          var k = p.italic;
          (r === "text" || i && i.font === "mathit") && (k = 0), x = new _e(e, p.height, p.depth, k, p.skew, p.width, a);
        } else
          typeof console != "undefined" && console.warn("No character metrics " + ("for '" + e + "' in style '" + t + "' and mode '" + r + "'")), x = new _e(e, 0, 0, 0, 0, 0, a);
        if (i) {
          x.maxFontSize = i.sizeMultiplier, i.style.isTight() && x.classes.push("mtight");
          var C = i.getColor();
          C && (x.style.color = C);
        }
        return x;
      }, Ru = function (e, t, r, i) {
        return i === void 0 && (i = []), r.font === "boldsymbol" && V0(e, "Main-Bold", t).metrics ? ct(e, "Main-Bold", t, r, i.concat(["mathbf"])) : e === "\\" || Ne[t][e].font === "main" ? ct(e, "Main-Regular", t, r, i) : ct(e, "AMS-Regular", t, r, i.concat(["amsrm"]));
      }, Hu = function (e, t, r, i, a) {
        return a !== "textord" && V0(e, "Math-BoldItalic", t).metrics ? { fontName: "Math-BoldItalic", fontClass: "boldsymbol" } : { fontName: "Main-Bold", fontClass: "mathbf" };
      }, Pu = function (e, t, r) {
        var i = e.mode, a = e.text, u = ["mord"], p = i === "math" || i === "text" && t.font, x = p ? t.font : t.fontFamily;
        if (a.charCodeAt(0) === 55349) {
          var k = Iu(a, i), C = k[0], I = k[1];
          return ct(a, C, i, t, u.concat(I));
        } else if (x) {
          var R, V;
          if (x === "boldsymbol") {
            var G = Hu(a, i, t, u, r);
            R = G.fontName, V = [G.fontClass];
          } else
            p ? (R = ki[x].fontName, V = [x]) : (R = U0(x, t.fontWeight, t.fontShape), V = [x, t.fontWeight, t.fontShape]);
          if (V0(a, R, i).metrics)
            return ct(a, R, i, t, u.concat(V));
          if (si.hasOwnProperty(a) && R.substr(0, 10) === "Typewriter") {
            for (var Q = [], K = 0; K < a.length; K++)
              Q.push(ct(a[K], R, i, t, u.concat(V)));
            return yi(Q);
          }
        }
        if (r === "mathord")
          return ct(a, "Math-Italic", i, t, u.concat(["mathnormal"]));
        if (r === "textord") {
          var ae = Ne[i][a] && Ne[i][a].font;
          if (ae === "ams") {
            var ue = U0("amsrm", t.fontWeight, t.fontShape);
            return ct(a, ue, i, t, u.concat("amsrm", t.fontWeight, t.fontShape));
          } else if (ae === "main" || !ae) {
            var se = U0("textrm", t.fontWeight, t.fontShape);
            return ct(a, se, i, t, u.concat(t.fontWeight, t.fontShape));
          } else {
            var ye = U0(ae, t.fontWeight, t.fontShape);
            return ct(a, ye, i, t, u.concat(ye, t.fontWeight, t.fontShape));
          }
        } else
          throw new Error("unexpected type: " + r + " in makeOrd");
      }, ju = function (e, t) {
        if (ft(e.classes) !== ft(t.classes) || e.skew !== t.skew || e.maxFontSize !== t.maxFontSize)
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
      }, Vu = function (e) {
        for (var t = 0; t < e.length - 1; t++) {
          var r = e[t], i = e[t + 1];
          r instanceof _e && i instanceof _e && ju(r, i) && (r.text += i.text, r.height = Math.max(r.height, i.height), r.depth = Math.max(r.depth, i.depth), r.italic = i.italic, e.splice(t + 1, 1), t--);
        }
        return e;
      }, Lr = function (e) {
        for (var t = 0, r = 0, i = 0, a = 0; a < e.children.length; a++) {
          var u = e.children[a];
          u.height > t && (t = u.height), u.depth > r && (r = u.depth), u.maxFontSize > i && (i = u.maxFontSize);
        }
        e.height = t, e.depth = r, e.maxFontSize = i;
      }, tt = function (e, t, r, i) {
        var a = new $t(e, t, r, i);
        return Lr(a), a;
      }, bi = function (e, t, r, i) {
        return new $t(e, t, r, i);
      }, Uu = function (e, t, r) {
        var i = tt([e], [], t);
        return i.height = Math.max(r || t.fontMetrics().defaultRuleThickness, t.minRuleThickness), i.style.borderBottomWidth = i.height + "em", i.maxFontSize = 1, i;
      }, Gu = function (e, t, r, i) {
        var a = new d0(e, t, r, i);
        return Lr(a), a;
      }, yi = function (e) {
        var t = new Ct(e);
        return Lr(t), t;
      }, Wu = function (e, t) {
        return e instanceof Ct ? tt([], [e], t) : e;
      }, Yu = function (e) {
        if (e.positionType === "individualShift") {
          for (var t = e.children, r = [t[0]], i = -t[0].shift - t[0].elem.depth, a = i, u = 1; u < t.length; u++) {
            var p = -t[u].shift - a - t[u].elem.depth, x = p - (t[u - 1].elem.height + t[u - 1].elem.depth);
            a = a + p, r.push({ type: "kern", size: x }), r.push(t[u]);
          }
          return { children: r, depth: i };
        }
        var k;
        if (e.positionType === "top") {
          for (var C = e.positionData, I = 0; I < e.children.length; I++) {
            var R = e.children[I];
            C -= R.type === "kern" ? R.size : R.elem.height + R.elem.depth;
          }
          k = C;
        } else if (e.positionType === "bottom")
          k = -e.positionData;
        else {
          var V = e.children[0];
          if (V.type !== "elem")
            throw new Error('First child must have type "elem".');
          if (e.positionType === "shift")
            k = -V.elem.depth - e.positionData;
          else if (e.positionType === "firstBaseline")
            k = -V.elem.depth;
          else
            throw new Error("Invalid positionType " + e.positionType + ".");
        }
        return { children: e.children, depth: k };
      }, Xu = function (e, t) {
        for (var r = Yu(e), i = r.children, a = r.depth, u = 0, p = 0; p < i.length; p++) {
          var x = i[p];
          if (x.type === "elem") {
            var k = x.elem;
            u = Math.max(u, k.maxFontSize, k.height);
          }
        }
        u += 2;
        var C = tt(["pstrut"], []);
        C.style.height = u + "em";
        for (var I = [], R = a, V = a, G = a, Q = 0; Q < i.length; Q++) {
          var K = i[Q];
          if (K.type === "kern")
            G += K.size;
          else {
            var ae = K.elem, ue = K.wrapperClasses || [], se = K.wrapperStyle || {}, ye = tt(ue, [C, ae], void 0, se);
            ye.style.top = -u - G - ae.depth + "em", K.marginLeft && (ye.style.marginLeft = K.marginLeft), K.marginRight && (ye.style.marginRight = K.marginRight), I.push(ye), G += ae.height + ae.depth;
          }
          R = Math.min(R, G), V = Math.max(V, G);
        }
        var Ce = tt(["vlist"], I);
        Ce.style.height = V + "em";
        var Ie;
        if (R < 0) {
          var Se = tt([], []), Be = tt(["vlist"], [Se]);
          Be.style.height = -R + "em";
          var Re = tt(["vlist-s"], [new _e("\u200B")]);
          Ie = [tt(["vlist-r"], [Ce, Re]), tt(["vlist-r"], [Be])];
        } else
          Ie = [tt(["vlist-r"], [Ce])];
        var De = tt(["vlist-t"], Ie);
        return Ie.length === 2 && De.classes.push("vlist-t2"), De.height = V, De.depth = -R, De;
      }, $u = function (e, t) {
        var r = tt(["mspace"], [], t), i = Le(e, t);
        return r.style.marginRight = i + "em", r;
      }, U0 = function (e, t, r) {
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
      }, ki = { mathbf: { variant: "bold", fontName: "Main-Bold" }, mathrm: { variant: "normal", fontName: "Main-Regular" }, textit: { variant: "italic", fontName: "Main-Italic" }, mathit: { variant: "italic", fontName: "Main-Italic" }, mathnormal: { variant: "italic", fontName: "Math-Italic" }, mathbb: { variant: "double-struck", fontName: "AMS-Regular" }, mathcal: { variant: "script", fontName: "Caligraphic-Regular" }, mathfrak: { variant: "fraktur", fontName: "Fraktur-Regular" }, mathscr: { variant: "script", fontName: "Script-Regular" }, mathsf: { variant: "sans-serif", fontName: "SansSerif-Regular" }, mathtt: { variant: "monospace", fontName: "Typewriter-Regular" } }, wi = { vec: ["vec", 0.471, 0.714], oiintSize1: ["oiintSize1", 0.957, 0.499], oiintSize2: ["oiintSize2", 1.472, 0.659], oiiintSize1: ["oiiintSize1", 1.304, 0.499], oiiintSize2: ["oiiintSize2", 1.98, 0.659] }, Zu = function (e, t) {
        var r = wi[e], i = r[0], a = r[1], u = r[2], p = new Bt(i), x = new dt([p], { width: a + "em", height: u + "em", style: "width:" + a + "em", viewBox: "0 0 " + 1e3 * a + " " + 1e3 * u, preserveAspectRatio: "xMinYMin" }), k = bi(["overlay"], [x], t);
        return k.height = u, k.style.height = u + "em", k.style.width = a + "em", k;
      }, L = { fontMap: ki, makeSymbol: ct, mathsym: Ru, makeSpan: tt, makeSvgSpan: bi, makeLineSpan: Uu, makeAnchor: Gu, makeFragment: yi, wrapFragment: Wu, makeVList: Xu, makeOrd: Pu, makeGlue: $u, staticSvg: Zu, svgData: wi, tryCombineChars: Vu }, qe = { number: 3, unit: "mu" }, Qt = { number: 4, unit: "mu" }, Et = { number: 5, unit: "mu" }, Qu = { mord: { mop: qe, mbin: Qt, mrel: Et, minner: qe }, mop: { mord: qe, mop: qe, mrel: Et, minner: qe }, mbin: { mord: Qt, mop: Qt, mopen: Qt, minner: Qt }, mrel: { mord: Et, mop: Et, mopen: Et, minner: Et }, mopen: {}, mclose: { mop: qe, mbin: Qt, mrel: Et, minner: qe }, mpunct: { mord: qe, mop: qe, mrel: Et, mopen: qe, mclose: qe, mpunct: qe, minner: qe }, minner: { mord: qe, mop: qe, mbin: Qt, mrel: Et, mopen: qe, mpunct: qe, minner: qe } }, Ku = { mord: { mop: qe }, mop: { mord: qe, mop: qe }, mbin: {}, mrel: {}, mopen: {}, mclose: { mop: qe }, mpunct: {}, minner: { mop: qe } }, Si = {}, G0 = {}, W0 = {};
      function ee(o) {
        for (var e = o.type, t = o.names, r = o.props, i = o.handler, a = o.htmlBuilder, u = o.mathmlBuilder, p = { type: e, numArgs: r.numArgs, argTypes: r.argTypes, allowedInArgument: !!r.allowedInArgument, allowedInText: !!r.allowedInText, allowedInMath: r.allowedInMath === void 0 ? true : r.allowedInMath, numOptionalArgs: r.numOptionalArgs || 0, infix: !!r.infix, primitive: !!r.primitive, handler: i }, x = 0; x < t.length; ++x)
          Si[t[x]] = p;
        e && (a && (G0[e] = a), u && (W0[e] = u));
      }
      function Kt(o) {
        var e = o.type, t = o.htmlBuilder, r = o.mathmlBuilder;
        ee({
          type: e, names: [], props: { numArgs: 0 }, handler: function () {
            throw new Error("Should never be called.");
          }, htmlBuilder: t, mathmlBuilder: r
        });
      }
      var Y0 = function (e) {
        return e.type === "ordgroup" && e.body.length === 1 ? e.body[0] : e;
      }, Ue = function (e) {
        return e.type === "ordgroup" ? e.body : [e];
      }, Dt = L.makeSpan, Ju = ["leftmost", "mbin", "mopen", "mrel", "mop", "mpunct"], _u = ["rightmost", "mrel", "mclose", "mpunct"], e1 = { display: ne.DISPLAY, text: ne.TEXT, script: ne.SCRIPT, scriptscript: ne.SCRIPTSCRIPT }, t1 = { mord: "mord", mop: "mop", mbin: "mbin", mrel: "mrel", mopen: "mopen", mclose: "mclose", mpunct: "mpunct", minner: "minner" }, Ze = function (e, t, r, i) {
        i === void 0 && (i = [null, null]);
        for (var a = [], u = 0; u < e.length; u++) {
          var p = be(e[u], t);
          if (p instanceof Ct) {
            var x = p.children;
            a.push.apply(a, x);
          } else
            a.push(p);
        }
        if (L.tryCombineChars(a), !r)
          return a;
        var k = t;
        if (e.length === 1) {
          var C = e[0];
          C.type === "sizing" ? k = t.havingSize(C.size) : C.type === "styling" && (k = t.havingStyle(e1[C.style]));
        }
        var I = Dt([i[0] || "leftmost"], [], t), R = Dt([i[1] || "rightmost"], [], t), V = r === "root";
        return Ai(a, function (G, Q) {
          var K = Q.classes[0], ae = G.classes[0];
          K === "mbin" && H.contains(_u, ae) ? Q.classes[0] = "mord" : ae === "mbin" && H.contains(Ju, K) && (G.classes[0] = "mord");
        }, { node: I }, R, V), Ai(a, function (G, Q) {
          var K = qr(Q), ae = qr(G), ue = K && ae ? G.hasClass("mtight") ? Ku[K][ae] : Qu[K][ae] : null;
          if (ue)
            return L.makeGlue(ue, k);
        }, { node: I }, R, V), a;
      }, Ai = function o(e, t, r, i, a) {
        i && e.push(i);
        for (var u = 0; u < e.length; u++) {
          var p = e[u], x = zi(p);
          if (x) {
            o(x.children, t, r, null, a);
            continue;
          }
          var k = !p.hasClass("mspace");
          if (k) {
            var C = t(p, r.node);
            C && (r.insertAfter ? r.insertAfter(C) : (e.unshift(C), u++));
          }
          k ? r.node = p : a && p.hasClass("newline") && (r.node = Dt(["leftmost"])), r.insertAfter = function (I) {
            return function (R) {
              e.splice(I + 1, 0, R), u++;
            };
          }(u);
        }
        i && e.pop();
      }, zi = function (e) {
        return e instanceof Ct || e instanceof d0 || e instanceof $t && e.hasClass("enclosing") ? e : null;
      }, r1 = function o(e, t) {
        var r = zi(e);
        if (r) {
          var i = r.children;
          if (i.length) {
            if (t === "right")
              return o(i[i.length - 1], "right");
            if (t === "left")
              return o(i[0], "left");
          }
        }
        return e;
      }, qr = function (e, t) {
        return e ? (t && (e = r1(e, t)), t1[e.classes[0]] || null) : null;
      }, b0 = function (e, t) {
        var r = ["nulldelimiter"].concat(e.baseSizingClasses());
        return Dt(t.concat(r));
      }, be = function (e, t, r) {
        if (!e)
          return Dt();
        if (G0[e.type]) {
          var i = G0[e.type](e, t);
          if (r && t.size !== r.size) {
            i = Dt(t.sizingClasses(r), [i], t);
            var a = t.sizeMultiplier / r.sizeMultiplier;
            i.height *= a, i.depth *= a;
          }
          return i;
        } else
          throw new m("Got group of unknown type: '" + e.type + "'");
      };
      function X0(o, e) {
        var t = Dt(["base"], o, e), r = Dt(["strut"]);
        return r.style.height = t.height + t.depth + "em", r.style.verticalAlign = -t.depth + "em", t.children.unshift(r), t;
      }
      function Or(o, e) {
        var t = null;
        o.length === 1 && o[0].type === "tag" && (t = o[0].tag, o = o[0].body);
        var r = Ze(o, e, "root"), i;
        r.length === 2 && r[1].hasClass("tag") && (i = r.pop());
        for (var a = [], u = [], p = 0; p < r.length; p++)
          if (u.push(r[p]), r[p].hasClass("mbin") || r[p].hasClass("mrel") || r[p].hasClass("allowbreak")) {
            for (var x = false; p < r.length - 1 && r[p + 1].hasClass("mspace") && !r[p + 1].hasClass("newline");)
              p++, u.push(r[p]), r[p].hasClass("nobreak") && (x = true);
            x || (a.push(X0(u, e)), u = []);
          } else
            r[p].hasClass("newline") && (u.pop(), u.length > 0 && (a.push(X0(u, e)), u = []), a.push(r[p]));
        u.length > 0 && a.push(X0(u, e));
        var k;
        t ? (k = X0(Ze(t, e, true)), k.classes = ["tag"], a.push(k)) : i && a.push(i);
        var C = Dt(["katex-html"], a);
        if (C.setAttribute("aria-hidden", "true"), k) {
          var I = k.children[0];
          I.style.height = C.height + C.depth + "em", I.style.verticalAlign = -C.depth + "em";
        }
        return C;
      }
      function Ci(o) {
        return new Ct(o);
      }
      var ot = function () {
        function o(t, r, i) {
          this.type = void 0, this.attributes = void 0, this.children = void 0, this.classes = void 0, this.type = t, this.attributes = {}, this.children = r || [], this.classes = i || [];
        }
        var e = o.prototype;
        return e.setAttribute = function (r, i) {
          this.attributes[r] = i;
        }, e.getAttribute = function (r) {
          return this.attributes[r];
        }, e.toNode = function () {
          var r = document.createElementNS("http://www.w3.org/1998/Math/MathML", this.type);
          for (var i in this.attributes)
            Object.prototype.hasOwnProperty.call(this.attributes, i) && r.setAttribute(i, this.attributes[i]);
          this.classes.length > 0 && (r.className = ft(this.classes));
          for (var a = 0; a < this.children.length; a++)
            r.appendChild(this.children[a].toNode());
          return r;
        }, e.toMarkup = function () {
          var r = "<" + this.type;
          for (var i in this.attributes)
            Object.prototype.hasOwnProperty.call(this.attributes, i) && (r += " " + i + '="', r += H.escape(this.attributes[i]), r += '"');
          this.classes.length > 0 && (r += ' class ="' + H.escape(ft(this.classes)) + '"'), r += ">";
          for (var a = 0; a < this.children.length; a++)
            r += this.children[a].toMarkup();
          return r += "</" + this.type + ">", r;
        }, e.toText = function () {
          return this.children.map(function (r) {
            return r.toText();
          }).join("");
        }, o;
      }(), y0 = function () {
        function o(t) {
          this.text = void 0, this.text = t;
        }
        var e = o.prototype;
        return e.toNode = function () {
          return document.createTextNode(this.text);
        }, e.toMarkup = function () {
          return H.escape(this.toText());
        }, e.toText = function () {
          return this.text;
        }, o;
      }(), n1 = function () {
        function o(t) {
          this.width = void 0, this.character = void 0, this.width = t, t >= 0.05555 && t <= 0.05556 ? this.character = "\u200A" : t >= 0.1666 && t <= 0.1667 ? this.character = "\u2009" : t >= 0.2222 && t <= 0.2223 ? this.character = "\u2005" : t >= 0.2777 && t <= 0.2778 ? this.character = "\u2005\u200A" : t >= -0.05556 && t <= -0.05555 ? this.character = "\u200A\u2063" : t >= -0.1667 && t <= -0.1666 ? this.character = "\u2009\u2063" : t >= -0.2223 && t <= -0.2222 ? this.character = "\u205F\u2063" : t >= -0.2778 && t <= -0.2777 ? this.character = "\u2005\u2063" : this.character = null;
        }
        var e = o.prototype;
        return e.toNode = function () {
          if (this.character)
            return document.createTextNode(this.character);
          var r = document.createElementNS("http://www.w3.org/1998/Math/MathML", "mspace");
          return r.setAttribute("width", this.width + "em"), r;
        }, e.toMarkup = function () {
          return this.character ? "<mtext>" + this.character + "</mtext>" : '<mspace width="' + this.width + 'em"/>';
        }, e.toText = function () {
          return this.character ? this.character : " ";
        }, o;
      }(), W = { MathNode: ot, TextNode: y0, SpaceNode: n1, newDocumentFragment: Ci }, st = function (e, t, r) {
        return Ne[t][e] && Ne[t][e].replace && e.charCodeAt(0) !== 55349 && !(si.hasOwnProperty(e) && r && (r.fontFamily && r.fontFamily.substr(4, 2) === "tt" || r.font && r.font.substr(4, 2) === "tt")) && (e = Ne[t][e].replace), new W.TextNode(e);
      }, Rr = function (e) {
        return e.length === 1 ? e[0] : new W.MathNode("mrow", e);
      }, Hr = function (e, t) {
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
        Ne[i][a] && Ne[i][a].replace && (a = Ne[i][a].replace);
        var u = L.fontMap[r].fontName;
        return v0(a, u, i) ? L.fontMap[r].variant : null;
      }, nt = function (e, t, r) {
        if (e.length === 1) {
          var i = Ee(e[0], t);
          return r && i instanceof ot && i.type === "mo" && (i.setAttribute("lspace", "0em"), i.setAttribute("rspace", "0em")), [i];
        }
        for (var a = [], u, p = 0; p < e.length; p++) {
          var x = Ee(e[p], t);
          if (x instanceof ot && u instanceof ot) {
            if (x.type === "mtext" && u.type === "mtext" && x.getAttribute("mathvariant") === u.getAttribute("mathvariant")) {
              var k;
              (k = u.children).push.apply(k, x.children);
              continue;
            } else if (x.type === "mn" && u.type === "mn") {
              var C;
              (C = u.children).push.apply(C, x.children);
              continue;
            } else if (x.type === "mi" && x.children.length === 1 && u.type === "mn") {
              var I = x.children[0];
              if (I instanceof y0 && I.text === ".") {
                var R;
                (R = u.children).push.apply(R, x.children);
                continue;
              }
            } else if (u.type === "mi" && u.children.length === 1) {
              var V = u.children[0];
              if (V instanceof y0 && V.text === "\u0338" && (x.type === "mo" || x.type === "mi" || x.type === "mn")) {
                var G = x.children[0];
                G instanceof y0 && G.text.length > 0 && (G.text = G.text.slice(0, 1) + "\u0338" + G.text.slice(1), a.pop());
              }
            }
          }
          a.push(x), u = x;
        }
        return a;
      }, Ot = function (e, t, r) {
        return Rr(nt(e, t, r));
      }, Ee = function (e, t) {
        if (!e)
          return new W.MathNode("mrow");
        if (W0[e.type]) {
          var r = W0[e.type](e, t);
          return r;
        } else
          throw new m("Got group of unknown type: '" + e.type + "'");
      };
      function Bi(o, e, t, r, i) {
        var a = nt(o, t), u;
        a.length === 1 && a[0] instanceof ot && H.contains(["mrow", "mtable"], a[0].type) ? u = a[0] : u = new W.MathNode("mrow", a);
        var p = new W.MathNode("annotation", [new W.TextNode(e)]);
        p.setAttribute("encoding", "application/x-tex");
        var x = new W.MathNode("semantics", [u, p]), k = new W.MathNode("math", [x]);
        k.setAttribute("xmlns", "http://www.w3.org/1998/Math/MathML"), r && k.setAttribute("display", "block");
        var C = i ? "katex" : "katex-mathml";
        return L.makeSpan([C], [k]);
      }
      var Ti = function (e) {
        return new qu({ style: e.displayMode ? ne.DISPLAY : ne.TEXT, maxSize: e.maxSize, minRuleThickness: e.minRuleThickness });
      }, Mi = function (e, t) {
        if (t.displayMode) {
          var r = ["katex-display"];
          t.leqno && r.push("leqno"), t.fleqn && r.push("fleqn"), e = L.makeSpan(r, [e]);
        }
        return e;
      }, i1 = function (e, t, r) {
        var i = Ti(r), a;
        if (r.output === "mathml")
          return Bi(e, t, i, r.displayMode, true);
        if (r.output === "html") {
          var u = Or(e, i);
          a = L.makeSpan(["katex"], [u]);
        } else {
          var p = Bi(e, t, i, r.displayMode, false), x = Or(e, i);
          a = L.makeSpan(["katex"], [p, x]);
        }
        return Mi(a, r);
      }, a1 = function (e, t, r) {
        var i = Ti(r), a = Or(e, i), u = L.makeSpan(["katex"], [a]);
        return Mi(u, r);
      }, f4 = null, l1 = { widehat: "^", widecheck: "\u02C7", widetilde: "~", utilde: "~", overleftarrow: "\u2190", underleftarrow: "\u2190", xleftarrow: "\u2190", overrightarrow: "\u2192", underrightarrow: "\u2192", xrightarrow: "\u2192", underbrace: "\u23DF", overbrace: "\u23DE", overgroup: "\u23E0", undergroup: "\u23E1", overleftrightarrow: "\u2194", underleftrightarrow: "\u2194", xleftrightarrow: "\u2194", Overrightarrow: "\u21D2", xRightarrow: "\u21D2", overleftharpoon: "\u21BC", xleftharpoonup: "\u21BC", overrightharpoon: "\u21C0", xrightharpoonup: "\u21C0", xLeftarrow: "\u21D0", xLeftrightarrow: "\u21D4", xhookleftarrow: "\u21A9", xhookrightarrow: "\u21AA", xmapsto: "\u21A6", xrightharpoondown: "\u21C1", xleftharpoondown: "\u21BD", xrightleftharpoons: "\u21CC", xleftrightharpoons: "\u21CB", xtwoheadleftarrow: "\u219E", xtwoheadrightarrow: "\u21A0", xlongequal: "=", xtofrom: "\u21C4", xrightleftarrows: "\u21C4", xrightequilibrium: "\u21CC", xleftequilibrium: "\u21CB", "\\cdrightarrow": "\u2192", "\\cdleftarrow": "\u2190", "\\cdlongequal": "=" }, u1 = function (e) {
        var t = new W.MathNode("mo", [new W.TextNode(l1[e.replace(/^\\/, "")])]);
        return t.setAttribute("stretchy", "true"), t;
      }, o1 = { overrightarrow: [["rightarrow"], 0.888, 522, "xMaxYMin"], overleftarrow: [["leftarrow"], 0.888, 522, "xMinYMin"], underrightarrow: [["rightarrow"], 0.888, 522, "xMaxYMin"], underleftarrow: [["leftarrow"], 0.888, 522, "xMinYMin"], xrightarrow: [["rightarrow"], 1.469, 522, "xMaxYMin"], "\\cdrightarrow": [["rightarrow"], 3, 522, "xMaxYMin"], xleftarrow: [["leftarrow"], 1.469, 522, "xMinYMin"], "\\cdleftarrow": [["leftarrow"], 3, 522, "xMinYMin"], Overrightarrow: [["doublerightarrow"], 0.888, 560, "xMaxYMin"], xRightarrow: [["doublerightarrow"], 1.526, 560, "xMaxYMin"], xLeftarrow: [["doubleleftarrow"], 1.526, 560, "xMinYMin"], overleftharpoon: [["leftharpoon"], 0.888, 522, "xMinYMin"], xleftharpoonup: [["leftharpoon"], 0.888, 522, "xMinYMin"], xleftharpoondown: [["leftharpoondown"], 0.888, 522, "xMinYMin"], overrightharpoon: [["rightharpoon"], 0.888, 522, "xMaxYMin"], xrightharpoonup: [["rightharpoon"], 0.888, 522, "xMaxYMin"], xrightharpoondown: [["rightharpoondown"], 0.888, 522, "xMaxYMin"], xlongequal: [["longequal"], 0.888, 334, "xMinYMin"], "\\cdlongequal": [["longequal"], 3, 334, "xMinYMin"], xtwoheadleftarrow: [["twoheadleftarrow"], 0.888, 334, "xMinYMin"], xtwoheadrightarrow: [["twoheadrightarrow"], 0.888, 334, "xMaxYMin"], overleftrightarrow: [["leftarrow", "rightarrow"], 0.888, 522], overbrace: [["leftbrace", "midbrace", "rightbrace"], 1.6, 548], underbrace: [["leftbraceunder", "midbraceunder", "rightbraceunder"], 1.6, 548], underleftrightarrow: [["leftarrow", "rightarrow"], 0.888, 522], xleftrightarrow: [["leftarrow", "rightarrow"], 1.75, 522], xLeftrightarrow: [["doubleleftarrow", "doublerightarrow"], 1.75, 560], xrightleftharpoons: [["leftharpoondownplus", "rightharpoonplus"], 1.75, 716], xleftrightharpoons: [["leftharpoonplus", "rightharpoondownplus"], 1.75, 716], xhookleftarrow: [["leftarrow", "righthook"], 1.08, 522], xhookrightarrow: [["lefthook", "rightarrow"], 1.08, 522], overlinesegment: [["leftlinesegment", "rightlinesegment"], 0.888, 522], underlinesegment: [["leftlinesegment", "rightlinesegment"], 0.888, 522], overgroup: [["leftgroup", "rightgroup"], 0.888, 342], undergroup: [["leftgroupunder", "rightgroupunder"], 0.888, 342], xmapsto: [["leftmapsto", "rightarrow"], 1.5, 522], xtofrom: [["leftToFrom", "rightToFrom"], 1.75, 528], xrightleftarrows: [["baraboveleftarrow", "rightarrowabovebar"], 1.75, 901], xrightequilibrium: [["baraboveshortleftharpoon", "rightharpoonaboveshortbar"], 1.75, 716], xleftequilibrium: [["shortbaraboveleftharpoon", "shortrightharpoonabovebar"], 1.75, 716] }, s1 = function (e) {
        return e.type === "ordgroup" ? e.body.length : 1;
      }, m1 = function (e, t) {
        function r() {
          var x = 4e5, k = e.label.substr(1);
          if (H.contains(["widehat", "widecheck", "widetilde", "utilde"], k)) {
            var C = e, I = s1(C.base), R, V, G;
            if (I > 5)
              k === "widehat" || k === "widecheck" ? (R = 420, x = 2364, G = 0.42, V = k + "4") : (R = 312, x = 2340, G = 0.34, V = "tilde4");
            else {
              var Q = [1, 1, 2, 2, 3, 3][I];
              k === "widehat" || k === "widecheck" ? (x = [0, 1062, 2364, 2364, 2364][Q], R = [0, 239, 300, 360, 420][Q], G = [0, 0.24, 0.3, 0.3, 0.36, 0.42][Q], V = k + Q) : (x = [0, 600, 1033, 2339, 2340][Q], R = [0, 260, 286, 306, 312][Q], G = [0, 0.26, 0.286, 0.3, 0.306, 0.34][Q], V = "tilde" + Q);
            }
            var K = new Bt(V), ae = new dt([K], { width: "100%", height: G + "em", viewBox: "0 0 " + x + " " + R, preserveAspectRatio: "none" });
            return { span: L.makeSvgSpan([], [ae], t), minWidth: 0, height: G };
          } else {
            var ue = [], se = o1[k], ye = se[0], Ce = se[1], Ie = se[2], Se = Ie / 1e3, Be = ye.length, Re, De;
            if (Be === 1) {
              var it = se[3];
              Re = ["hide-tail"], De = [it];
            } else if (Be === 2)
              Re = ["halfarrow-left", "halfarrow-right"], De = ["xMinYMin", "xMaxYMin"];
            else if (Be === 3)
              Re = ["brace-left", "brace-center", "brace-right"], De = ["xMinYMin", "xMidYMin", "xMaxYMin"];
            else
              throw new Error(`Correct katexImagesData or update code here to support
                    ` + Be + " children.");
            for (var at = 0; at < Be; at++) {
              var Pt = new Bt(ye[at]), yt = new dt([Pt], { width: "400em", height: Se + "em", viewBox: "0 0 " + x + " " + Ie, preserveAspectRatio: De[at] + " slice" }), lt = L.makeSvgSpan([Re[at]], [yt], t);
              if (Be === 1)
                return { span: lt, minWidth: Ce, height: Se };
              lt.style.height = Se + "em", ue.push(lt);
            }
            return { span: L.makeSpan(["stretchy"], ue, t), minWidth: Ce, height: Se };
          }
        }
        var i = r(), a = i.span, u = i.minWidth, p = i.height;
        return a.height = p, a.style.height = p + "em", u > 0 && (a.style.minWidth = u + "em"), a;
      }, h1 = function (e, t, r, i, a) {
        var u, p = e.height + e.depth + r + i;
        if (/fbox|color|angl/.test(t)) {
          if (u = L.makeSpan(["stretchy", t], [], a), t === "fbox") {
            var x = a.color && a.getColor();
            x && (u.style.borderColor = x);
          }
        } else {
          var k = [];
          /^[bx]cancel$/.test(t) && k.push(new Tt({ x1: "0", y1: "0", x2: "100%", y2: "100%", "stroke-width": "0.046em" })), /^x?cancel$/.test(t) && k.push(new Tt({ x1: "0", y1: "100%", x2: "100%", y2: "0", "stroke-width": "0.046em" }));
          var C = new dt(k, { width: "100%", height: p + "em" });
          u = L.makeSvgSpan([], [C], a);
        }
        return u.height = p, u.style.height = p + "em", u;
      }, Ft = { encloseSpan: h1, mathMLnode: u1, svgSpan: m1 };
      function de(o, e) {
        if (!o || o.type !== e)
          throw new Error("Expected node of type " + e + ", but got " + (o ? "node of type " + o.type : String(o)));
        return o;
      }
      function Pr(o) {
        var e = $0(o);
        if (!e)
          throw new Error("Expected node of symbol group type, but got " + (o ? "node of type " + o.type : String(o)));
        return e;
      }
      function $0(o) {
        return o && (o.type === "atom" || Tr.hasOwnProperty(o.type)) ? o : null;
      }
      var jr = function (e, t) {
        var r, i, a;
        e && e.type === "supsub" ? (i = de(e.base, "accent"), r = i.base, e.base = r, a = zr(be(e, t)), e.base = i) : (i = de(e, "accent"), r = i.base);
        var u = be(r, t.havingCrampedStyle()), p = i.isShifty && H.isCharacterBox(r), x = 0;
        if (p) {
          var k = H.getBaseElem(r), C = be(k, t.havingCrampedStyle());
          x = L0(C).skew;
        }
        var I = Math.min(u.height, t.fontMetrics().xHeight), R;
        if (i.isStretchy)
          R = Ft.svgSpan(i, t), R = L.makeVList({ positionType: "firstBaseline", children: [{ type: "elem", elem: u }, { type: "elem", elem: R, wrapperClasses: ["svg-align"], wrapperStyle: x > 0 ? { width: "calc(100% - " + 2 * x + "em)", marginLeft: 2 * x + "em" } : void 0 }] }, t);
        else {
          var V, G;
          i.label === "\\vec" ? (V = L.staticSvg("vec", t), G = L.svgData.vec[1]) : (V = L.makeOrd({ mode: i.mode, text: i.label }, t, "textord"), V = L0(V), V.italic = 0, G = V.width), R = L.makeSpan(["accent-body"], [V]);
          var Q = i.label === "\\textcircled";
          Q && (R.classes.push("accent-full"), I = u.height);
          var K = x;
          Q || (K -= G / 2), R.style.left = K + "em", i.label === "\\textcircled" && (R.style.top = ".2em"), R = L.makeVList({ positionType: "firstBaseline", children: [{ type: "elem", elem: u }, { type: "kern", size: -I }, { type: "elem", elem: R }] }, t);
        }
        var ae = L.makeSpan(["mord", "accent"], [R], t);
        return a ? (a.children[0] = ae, a.height = Math.max(ae.height, a.height), a.classes[0] = "mord", a) : ae;
      }, Ei = function (e, t) {
        var r = e.isStretchy ? Ft.mathMLnode(e.label) : new W.MathNode("mo", [st(e.label, e.mode)]), i = new W.MathNode("mover", [Ee(e.base, t), r]);
        return i.setAttribute("accent", "true"), i;
      }, c1 = new RegExp(["\\acute", "\\grave", "\\ddot", "\\tilde", "\\bar", "\\breve", "\\check", "\\hat", "\\vec", "\\dot", "\\mathring"].map(function (o) {
        return "\\" + o;
      }).join("|"));
      ee({
        type: "accent", names: ["\\acute", "\\grave", "\\ddot", "\\tilde", "\\bar", "\\breve", "\\check", "\\hat", "\\vec", "\\dot", "\\mathring", "\\widecheck", "\\widehat", "\\widetilde", "\\overrightarrow", "\\overleftarrow", "\\Overrightarrow", "\\overleftrightarrow", "\\overgroup", "\\overlinesegment", "\\overleftharpoon", "\\overrightharpoon"], props: { numArgs: 1 }, handler: function (e, t) {
          var r = Y0(t[0]), i = !c1.test(e.funcName), a = !i || e.funcName === "\\widehat" || e.funcName === "\\widetilde" || e.funcName === "\\widecheck";
          return { type: "accent", mode: e.parser.mode, label: e.funcName, isStretchy: i, isShifty: a, base: r };
        }, htmlBuilder: jr, mathmlBuilder: Ei
      }), ee({
        type: "accent", names: ["\\'", "\\`", "\\^", "\\~", "\\=", "\\u", "\\.", '\\"', "\\r", "\\H", "\\v", "\\textcircled"], props: { numArgs: 1, allowedInText: true, allowedInMath: true, argTypes: ["primitive"] }, handler: function (e, t) {
          var r = t[0], i = e.parser.mode;
          return i === "math" && (e.parser.settings.reportNonstrict("mathVsTextAccents", "LaTeX's accent " + e.funcName + " works only in text mode"), i = "text"), { type: "accent", mode: i, label: e.funcName, isStretchy: false, isShifty: true, base: r };
        }, htmlBuilder: jr, mathmlBuilder: Ei
      }), ee({
        type: "accentUnder", names: ["\\underleftarrow", "\\underrightarrow", "\\underleftrightarrow", "\\undergroup", "\\underlinesegment", "\\utilde"], props: { numArgs: 1 }, handler: function (e, t) {
          var r = e.parser, i = e.funcName, a = t[0];
          return { type: "accentUnder", mode: r.mode, label: i, base: a };
        }, htmlBuilder: function (e, t) {
          var r = be(e.base, t), i = Ft.svgSpan(e, t), a = e.label === "\\utilde" ? 0.12 : 0, u = L.makeVList({ positionType: "top", positionData: r.height, children: [{ type: "elem", elem: i, wrapperClasses: ["svg-align"] }, { type: "kern", size: a }, { type: "elem", elem: r }] }, t);
          return L.makeSpan(["mord", "accentunder"], [u], t);
        }, mathmlBuilder: function (e, t) {
          var r = Ft.mathMLnode(e.label), i = new W.MathNode("munder", [Ee(e.base, t), r]);
          return i.setAttribute("accentunder", "true"), i;
        }
      });
      var Z0 = function (e) {
        var t = new W.MathNode("mpadded", e ? [e] : []);
        return t.setAttribute("width", "+0.6em"), t.setAttribute("lspace", "0.3em"), t;
      };
      ee({
        type: "xArrow", names: ["\\xleftarrow", "\\xrightarrow", "\\xLeftarrow", "\\xRightarrow", "\\xleftrightarrow", "\\xLeftrightarrow", "\\xhookleftarrow", "\\xhookrightarrow", "\\xmapsto", "\\xrightharpoondown", "\\xrightharpoonup", "\\xleftharpoondown", "\\xleftharpoonup", "\\xrightleftharpoons", "\\xleftrightharpoons", "\\xlongequal", "\\xtwoheadrightarrow", "\\xtwoheadleftarrow", "\\xtofrom", "\\xrightleftarrows", "\\xrightequilibrium", "\\xleftequilibrium", "\\\\cdrightarrow", "\\\\cdleftarrow", "\\\\cdlongequal"], props: { numArgs: 1, numOptionalArgs: 1 }, handler: function (e, t, r) {
          var i = e.parser, a = e.funcName;
          return { type: "xArrow", mode: i.mode, label: a, body: t[0], below: r[0] };
        }, htmlBuilder: function (e, t) {
          var r = t.style, i = t.havingStyle(r.sup()), a = L.wrapFragment(be(e.body, i, t), t), u = e.label.slice(0, 2) === "\\x" ? "x" : "cd";
          a.classes.push(u + "-arrow-pad");
          var p;
          e.below && (i = t.havingStyle(r.sub()), p = L.wrapFragment(be(e.below, i, t), t), p.classes.push(u + "-arrow-pad"));
          var x = Ft.svgSpan(e, t), k = -t.fontMetrics().axisHeight + 0.5 * x.height, C = -t.fontMetrics().axisHeight - 0.5 * x.height - 0.111;
          (a.depth > 0.25 || e.label === "\\xleftequilibrium") && (C -= a.depth);
          var I;
          if (p) {
            var R = -t.fontMetrics().axisHeight + p.height + 0.5 * x.height + 0.111;
            I = L.makeVList({ positionType: "individualShift", children: [{ type: "elem", elem: a, shift: C }, { type: "elem", elem: x, shift: k }, { type: "elem", elem: p, shift: R }] }, t);
          } else
            I = L.makeVList({ positionType: "individualShift", children: [{ type: "elem", elem: a, shift: C }, { type: "elem", elem: x, shift: k }] }, t);
          return I.children[0].children[0].children[1].classes.push("svg-align"), L.makeSpan(["mrel", "x-arrow"], [I], t);
        }, mathmlBuilder: function (e, t) {
          var r = Ft.mathMLnode(e.label);
          r.setAttribute("minsize", e.label.charAt(0) === "x" ? "1.75em" : "3.0em");
          var i;
          if (e.body) {
            var a = Z0(Ee(e.body, t));
            if (e.below) {
              var u = Z0(Ee(e.below, t));
              i = new W.MathNode("munderover", [r, u, a]);
            } else
              i = new W.MathNode("mover", [r, a]);
          } else if (e.below) {
            var p = Z0(Ee(e.below, t));
            i = new W.MathNode("munder", [r, p]);
          } else
            i = Z0(), i = new W.MathNode("mover", [r, i]);
          return i;
        }
      });
      var p1 = { ">": "\\\\cdrightarrow", "<": "\\\\cdleftarrow", "=": "\\\\cdlongequal", A: "\\uparrow", V: "\\downarrow", "|": "\\Vert", ".": "no arrow" }, Di = function () {
        return { type: "styling", body: [], mode: "math", style: "display" };
      }, Fi = function (e) {
        return e.type === "textord" && e.text === "@";
      }, f1 = function (e, t) {
        return (e.type === "mathord" || e.type === "atom") && e.text === t;
      };
      function d1(o, e, t) {
        var r = p1[o];
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
            var k = { type: "textord", text: "\\Vert", mode: "math" };
            return t.callFunction("\\Big", [k], []);
          }
          default:
            return { type: "textord", text: " ", mode: "math" };
        }
      }
      function g1(o) {
        var e = [];
        for (o.gullet.beginGroup(), o.gullet.macros.set("\\cr", "\\\\\\relax"), o.gullet.beginGroup(); ;) {
          e.push(o.parseExpression(false, "\\\\")), o.gullet.endGroup(), o.gullet.beginGroup();
          var t = o.fetch().text;
          if (t === "&" || t === "\\\\")
            o.consume();
          else if (t === "\\end") {
            e[e.length - 1].length === 0 && e.pop();
            break;
          } else
            throw new m("Expected \\\\ or \\cr or \\end", o.nextToken);
        }
        for (var r = [], i = [r], a = 0; a < e.length; a++) {
          for (var u = e[a], p = Di(), x = 0; x < u.length; x++)
            if (!Fi(u[x]))
              p.body.push(u[x]);
            else {
              r.push(p), x += 1;
              var k = Pr(u[x]).text, C = new Array(2);
              if (C[0] = { type: "ordgroup", mode: "math", body: [] }, C[1] = { type: "ordgroup", mode: "math", body: [] }, !("=|.".indexOf(k) > -1))
                if ("<>AV".indexOf(k) > -1)
                  for (var I = 0; I < 2; I++) {
                    for (var R = true, V = x + 1; V < u.length; V++) {
                      if (f1(u[V], k)) {
                        R = false, x = V;
                        break;
                      }
                      if (Fi(u[V]))
                        throw new m("Missing a " + k + " character to complete a CD arrow.", u[V]);
                      C[I].body.push(u[V]);
                    }
                    if (R)
                      throw new m("Missing a " + k + " character to complete a CD arrow.", u[x]);
                  }
                else
                  throw new m('Expected one of "<>AV=|." after @', u[x]);
              var G = d1(k, C, o), Q = { type: "styling", body: [G], mode: "math", style: "display" };
              r.push(Q), p = Di();
            }
          a % 2 == 0 ? r.push(p) : r.shift(), r = [], i.push(r);
        }
        o.gullet.endGroup(), o.gullet.endGroup();
        var K = new Array(i[0].length).fill({ type: "align", align: "c", pregap: 0.25, postgap: 0.25 });
        return { type: "array", mode: "math", body: i, arraystretch: 1, addJot: true, rowGaps: [null], cols: K, colSeparationType: "CD", hLinesBeforeRow: new Array(i.length + 1).fill([]) };
      }
      ee({
        type: "cdlabel", names: ["\\\\cdleft", "\\\\cdright"], props: { numArgs: 1 }, handler: function (e, t) {
          var r = e.parser, i = e.funcName;
          return { type: "cdlabel", mode: r.mode, side: i.slice(4), label: t[0] };
        }, htmlBuilder: function (e, t) {
          var r = t.havingStyle(t.style.sup()), i = L.wrapFragment(be(e.label, r, t), t);
          return i.classes.push("cd-label-" + e.side), i.style.bottom = 0.8 - i.depth + "em", i.height = 0, i.depth = 0, i;
        }, mathmlBuilder: function (e, t) {
          var r = new W.MathNode("mrow", [Ee(e.label, t)]);
          return r = new W.MathNode("mpadded", [r]), r.setAttribute("width", "0"), e.side === "left" && r.setAttribute("lspace", "-1width"), r.setAttribute("voffset", "0.7em"), r = new W.MathNode("mstyle", [r]), r.setAttribute("displaystyle", "false"), r.setAttribute("scriptlevel", "1"), r;
        }
      }), ee({
        type: "cdlabelparent", names: ["\\\\cdparent"], props: { numArgs: 1 }, handler: function (e, t) {
          var r = e.parser;
          return { type: "cdlabelparent", mode: r.mode, fragment: t[0] };
        }, htmlBuilder: function (e, t) {
          var r = L.wrapFragment(be(e.fragment, t), t);
          return r.classes.push("cd-vert-arrow"), r;
        }, mathmlBuilder: function (e, t) {
          return new W.MathNode("mrow", [Ee(e.fragment, t)]);
        }
      }), ee({
        type: "textord", names: ["\\@char"], props: { numArgs: 1, allowedInText: true }, handler: function (e, t) {
          for (var r = e.parser, i = de(t[0], "ordgroup"), a = i.body, u = "", p = 0; p < a.length; p++) {
            var x = de(a[p], "textord");
            u += x.text;
          }
          var k = parseInt(u);
          if (isNaN(k))
            throw new m("\\@char has non-numeric argument " + u);
          return { type: "textord", mode: r.mode, text: String.fromCharCode(k) };
        }
      });
      var Ni = function (e, t) {
        var r = Ze(e.body, t.withColor(e.color), false);
        return L.makeFragment(r);
      }, Ii = function (e, t) {
        var r = nt(e.body, t.withColor(e.color)), i = new W.MathNode("mstyle", r);
        return i.setAttribute("mathcolor", e.color), i;
      };
      ee({
        type: "color", names: ["\\textcolor"], props: { numArgs: 2, allowedInText: true, argTypes: ["color", "original"] }, handler: function (e, t) {
          var r = e.parser, i = de(t[0], "color-token").color, a = t[1];
          return { type: "color", mode: r.mode, color: i, body: Ue(a) };
        }, htmlBuilder: Ni, mathmlBuilder: Ii
      }), ee({
        type: "color", names: ["\\color"], props: { numArgs: 1, allowedInText: true, argTypes: ["color"] }, handler: function (e, t) {
          var r = e.parser, i = e.breakOnTokenText, a = de(t[0], "color-token").color;
          r.gullet.macros.set("\\current@color", a);
          var u = r.parseExpression(true, i);
          return { type: "color", mode: r.mode, color: a, body: u };
        }, htmlBuilder: Ni, mathmlBuilder: Ii
      }), ee({
        type: "cr", names: ["\\\\"], props: { numArgs: 0, numOptionalArgs: 1, argTypes: ["size"], allowedInText: true }, handler: function (e, t, r) {
          var i = e.parser, a = r[0], u = !i.settings.displayMode || !i.settings.useStrictBehavior("newLineInDisplayMode", "In LaTeX, \\\\ or \\newline does nothing in display mode");
          return { type: "cr", mode: i.mode, newLine: u, size: a && de(a, "size").value };
        }, htmlBuilder: function (e, t) {
          var r = L.makeSpan(["mspace"], [], t);
          return e.newLine && (r.classes.push("newline"), e.size && (r.style.marginTop = Le(e.size, t) + "em")), r;
        }, mathmlBuilder: function (e, t) {
          var r = new W.MathNode("mspace");
          return e.newLine && (r.setAttribute("linebreak", "newline"), e.size && r.setAttribute("height", Le(e.size, t) + "em")), r;
        }
      });
      var Vr = { "\\global": "\\global", "\\long": "\\\\globallong", "\\\\globallong": "\\\\globallong", "\\def": "\\gdef", "\\gdef": "\\gdef", "\\edef": "\\xdef", "\\xdef": "\\xdef", "\\let": "\\\\globallet", "\\futurelet": "\\\\globalfuture" }, Li = function (e) {
        var t = e.text;
        if (/^(?:[\\{}$&#^_]|EOF)$/.test(t))
          throw new m("Expected a control sequence", e);
        return t;
      }, v1 = function (e) {
        var t = e.gullet.popToken();
        return t.text === "=" && (t = e.gullet.popToken(), t.text === " " && (t = e.gullet.popToken())), t;
      }, qi = function (e, t, r, i) {
        var a = e.gullet.macros.get(r.text);
        a == null && (r.noexpand = true, a = { tokens: [r], numArgs: 0, unexpandable: !e.gullet.isExpandable(r.text) }), e.gullet.macros.set(t, a, i);
      };
      ee({
        type: "internal", names: ["\\global", "\\long", "\\\\globallong"], props: { numArgs: 0, allowedInText: true }, handler: function (e) {
          var t = e.parser, r = e.funcName;
          t.consumeSpaces();
          var i = t.fetch();
          if (Vr[i.text])
            return (r === "\\global" || r === "\\\\globallong") && (i.text = Vr[i.text]), de(t.parseFunction(), "internal");
          throw new m("Invalid token after macro prefix", i);
        }
      }), ee({
        type: "internal", names: ["\\def", "\\gdef", "\\edef", "\\xdef"], props: { numArgs: 0, allowedInText: true, primitive: true }, handler: function (e) {
          var t = e.parser, r = e.funcName, i = t.gullet.popToken(), a = i.text;
          if (/^(?:[\\{}$&#^_]|EOF)$/.test(a))
            throw new m("Expected a control sequence", i);
          for (var u = 0, p, x = [[]]; t.gullet.future().text !== "{";)
            if (i = t.gullet.popToken(), i.text === "#") {
              if (t.gullet.future().text === "{") {
                p = t.gullet.future(), x[u].push("{");
                break;
              }
              if (i = t.gullet.popToken(), !/^[1-9]$/.test(i.text))
                throw new m('Invalid argument number "' + i.text + '"');
              if (parseInt(i.text) !== u + 1)
                throw new m('Argument number "' + i.text + '" out of order');
              u++, x.push([]);
            } else {
              if (i.text === "EOF")
                throw new m("Expected a macro definition");
              x[u].push(i.text);
            }
          var k = t.gullet.consumeArg(), C = k.tokens;
          return p && C.unshift(p), (r === "\\edef" || r === "\\xdef") && (C = t.gullet.expandTokens(C), C.reverse()), t.gullet.macros.set(a, { tokens: C, numArgs: u, delimiters: x }, r === Vr[r]), { type: "internal", mode: t.mode };
        }
      }), ee({
        type: "internal", names: ["\\let", "\\\\globallet"], props: { numArgs: 0, allowedInText: true, primitive: true }, handler: function (e) {
          var t = e.parser, r = e.funcName, i = Li(t.gullet.popToken());
          t.gullet.consumeSpaces();
          var a = v1(t);
          return qi(t, i, a, r === "\\\\globallet"), { type: "internal", mode: t.mode };
        }
      }), ee({
        type: "internal", names: ["\\futurelet", "\\\\globalfuture"], props: { numArgs: 0, allowedInText: true, primitive: true }, handler: function (e) {
          var t = e.parser, r = e.funcName, i = Li(t.gullet.popToken()), a = t.gullet.popToken(), u = t.gullet.popToken();
          return qi(t, i, u, r === "\\\\globalfuture"), t.gullet.pushToken(u), t.gullet.pushToken(a), { type: "internal", mode: t.mode };
        }
      });
      var k0 = function (e, t, r) {
        var i = Ne.math[e] && Ne.math[e].replace, a = v0(i || e, t, r);
        if (!a)
          throw new Error("Unsupported symbol " + e + " and font size " + t + ".");
        return a;
      }, Ur = function (e, t, r, i) {
        var a = r.havingBaseStyle(t), u = L.makeSpan(i.concat(a.sizingClasses(r)), [e], r), p = a.sizeMultiplier / r.sizeMultiplier;
        return u.height *= p, u.depth *= p, u.maxFontSize = a.sizeMultiplier, u;
      }, Oi = function (e, t, r) {
        var i = t.havingBaseStyle(r), a = (1 - t.sizeMultiplier / i.sizeMultiplier) * t.fontMetrics().axisHeight;
        e.classes.push("delimcenter"), e.style.top = a + "em", e.height -= a, e.depth += a;
      }, x1 = function (e, t, r, i, a, u) {
        var p = L.makeSymbol(e, "Main-Regular", a, i), x = Ur(p, t, i, u);
        return r && Oi(x, i, t), x;
      }, b1 = function (e, t, r, i) {
        return L.makeSymbol(e, "Size" + t + "-Regular", r, i);
      }, Ri = function (e, t, r, i, a, u) {
        var p = b1(e, t, a, i), x = Ur(L.makeSpan(["delimsizing", "size" + t], [p], i), ne.TEXT, i, u);
        return r && Oi(x, i, ne.TEXT), x;
      }, Gr = function (e, t, r) {
        var i;
        t === "Size1-Regular" ? i = "delim-size1" : i = "delim-size4";
        var a = L.makeSpan(["delimsizinginner", i], [L.makeSpan([], [L.makeSymbol(e, t, r)])]);
        return { type: "elem", elem: a };
      }, Wr = function (e, t, r) {
        var i = rt["Size4-Regular"][e.charCodeAt(0)] ? rt["Size4-Regular"][e.charCodeAt(0)][4].toFixed(3) : rt["Size1-Regular"][e.charCodeAt(0)][4].toFixed(3), a = new Bt("inner", At(e, Math.round(1e3 * t))), u = new dt([a], { width: i + "em", height: t + "em", style: "width:" + i + "em", viewBox: "0 0 " + 1e3 * i + " " + Math.round(1e3 * t), preserveAspectRatio: "xMinYMin" }), p = L.makeSvgSpan([], [u], r);
        return p.height = t, p.style.height = t + "em", p.style.width = i + "em", { type: "elem", elem: p };
      }, Yr = 8e-3, Q0 = { type: "kern", size: -1 * Yr }, y1 = ["|", "\\lvert", "\\rvert", "\\vert"], k1 = ["\\|", "\\lVert", "\\rVert", "\\Vert"], Hi = function (e, t, r, i, a, u) {
        var p, x, k, C;
        p = k = C = e, x = null;
        var I = "Size1-Regular";
        e === "\\uparrow" ? k = C = "\u23D0" : e === "\\Uparrow" ? k = C = "\u2016" : e === "\\downarrow" ? p = k = "\u23D0" : e === "\\Downarrow" ? p = k = "\u2016" : e === "\\updownarrow" ? (p = "\\uparrow", k = "\u23D0", C = "\\downarrow") : e === "\\Updownarrow" ? (p = "\\Uparrow", k = "\u2016", C = "\\Downarrow") : H.contains(y1, e) ? k = "\u2223" : H.contains(k1, e) ? k = "\u2225" : e === "[" || e === "\\lbrack" ? (p = "\u23A1", k = "\u23A2", C = "\u23A3", I = "Size4-Regular") : e === "]" || e === "\\rbrack" ? (p = "\u23A4", k = "\u23A5", C = "\u23A6", I = "Size4-Regular") : e === "\\lfloor" || e === "\u230A" ? (k = p = "\u23A2", C = "\u23A3", I = "Size4-Regular") : e === "\\lceil" || e === "\u2308" ? (p = "\u23A1", k = C = "\u23A2", I = "Size4-Regular") : e === "\\rfloor" || e === "\u230B" ? (k = p = "\u23A5", C = "\u23A6", I = "Size4-Regular") : e === "\\rceil" || e === "\u2309" ? (p = "\u23A4", k = C = "\u23A5", I = "Size4-Regular") : e === "(" || e === "\\lparen" ? (p = "\u239B", k = "\u239C", C = "\u239D", I = "Size4-Regular") : e === ")" || e === "\\rparen" ? (p = "\u239E", k = "\u239F", C = "\u23A0", I = "Size4-Regular") : e === "\\{" || e === "\\lbrace" ? (p = "\u23A7", x = "\u23A8", C = "\u23A9", k = "\u23AA", I = "Size4-Regular") : e === "\\}" || e === "\\rbrace" ? (p = "\u23AB", x = "\u23AC", C = "\u23AD", k = "\u23AA", I = "Size4-Regular") : e === "\\lgroup" || e === "\u27EE" ? (p = "\u23A7", C = "\u23A9", k = "\u23AA", I = "Size4-Regular") : e === "\\rgroup" || e === "\u27EF" ? (p = "\u23AB", C = "\u23AD", k = "\u23AA", I = "Size4-Regular") : e === "\\lmoustache" || e === "\u23B0" ? (p = "\u23A7", C = "\u23AD", k = "\u23AA", I = "Size4-Regular") : (e === "\\rmoustache" || e === "\u23B1") && (p = "\u23AB", C = "\u23A9", k = "\u23AA", I = "Size4-Regular");
        var R = k0(p, I, a), V = R.height + R.depth, G = k0(k, I, a), Q = G.height + G.depth, K = k0(C, I, a), ae = K.height + K.depth, ue = 0, se = 1;
        if (x !== null) {
          var ye = k0(x, I, a);
          ue = ye.height + ye.depth, se = 2;
        }
        var Ce = V + ae + ue, Ie = Math.max(0, Math.ceil((t - Ce) / (se * Q))), Se = Ce + Ie * se * Q, Be = i.fontMetrics().axisHeight;
        r && (Be *= i.sizeMultiplier);
        var Re = Se / 2 - Be, De = [];
        if (De.push(Gr(C, I, a)), De.push(Q0), x === null) {
          var it = Se - V - ae + 2 * Yr;
          De.push(Wr(k, it, i));
        } else {
          var at = (Se - V - ae - ue) / 2 + 2 * Yr;
          De.push(Wr(k, at, i)), De.push(Q0), De.push(Gr(x, I, a)), De.push(Q0), De.push(Wr(k, at, i));
        }
        De.push(Q0), De.push(Gr(p, I, a));
        var Pt = i.havingBaseStyle(ne.TEXT), yt = L.makeVList({ positionType: "bottom", positionData: Re, children: De }, Pt);
        return Ur(L.makeSpan(["delimsizing", "mult"], [yt], Pt), ne.TEXT, i, u);
      }, Xr = 80, $r = 0.08, Zr = function (e, t, r, i, a) {
        var u = ht(e, i, r), p = new Bt(e, u), x = new dt([p], { width: "400em", height: t + "em", viewBox: "0 0 400000 " + r, preserveAspectRatio: "xMinYMin slice" });
        return L.makeSvgSpan(["hide-tail"], [x], a);
      }, w1 = function (e, t) {
        var r = t.havingBaseSizing(), i = Ui("\\surd", e * r.sizeMultiplier, Vi, r), a = r.sizeMultiplier, u = Math.max(0, t.minRuleThickness - t.fontMetrics().sqrtRuleThickness), p, x = 0, k = 0, C = 0, I;
        return i.type === "small" ? (C = 1e3 + 1e3 * u + Xr, e < 1 ? a = 1 : e < 1.4 && (a = 0.7), x = (1 + u + $r) / a, k = (1 + u) / a, p = Zr("sqrtMain", x, C, u, t), p.style.minWidth = "0.853em", I = 0.833 / a) : i.type === "large" ? (C = (1e3 + Xr) * w0[i.size], k = (w0[i.size] + u) / a, x = (w0[i.size] + u + $r) / a, p = Zr("sqrtSize" + i.size, x, C, u, t), p.style.minWidth = "1.02em", I = 1 / a) : (x = e + u + $r, k = e + u, C = Math.floor(1e3 * e + u) + Xr, p = Zr("sqrtTall", x, C, u, t), p.style.minWidth = "0.742em", I = 1.056), p.height = k, p.style.height = x + "em", { span: p, advanceWidth: I, ruleWidth: (t.fontMetrics().sqrtRuleThickness + u) * a };
      }, Pi = ["(", "\\lparen", ")", "\\rparen", "[", "\\lbrack", "]", "\\rbrack", "\\{", "\\lbrace", "\\}", "\\rbrace", "\\lfloor", "\\rfloor", "\u230A", "\u230B", "\\lceil", "\\rceil", "\u2308", "\u2309", "\\surd"], S1 = ["\\uparrow", "\\downarrow", "\\updownarrow", "\\Uparrow", "\\Downarrow", "\\Updownarrow", "|", "\\|", "\\vert", "\\Vert", "\\lvert", "\\rvert", "\\lVert", "\\rVert", "\\lgroup", "\\rgroup", "\u27EE", "\u27EF", "\\lmoustache", "\\rmoustache", "\u23B0", "\u23B1"], ji = ["<", ">", "\\langle", "\\rangle", "/", "\\backslash", "\\lt", "\\gt"], w0 = [0, 1.2, 1.8, 2.4, 3], A1 = function (e, t, r, i, a) {
        if (e === "<" || e === "\\lt" || e === "\u27E8" ? e = "\\langle" : (e === ">" || e === "\\gt" || e === "\u27E9") && (e = "\\rangle"), H.contains(Pi, e) || H.contains(ji, e))
          return Ri(e, t, false, r, i, a);
        if (H.contains(S1, e))
          return Hi(e, w0[t], false, r, i, a);
        throw new m("Illegal delimiter: '" + e + "'");
      }, z1 = [{ type: "small", style: ne.SCRIPTSCRIPT }, { type: "small", style: ne.SCRIPT }, { type: "small", style: ne.TEXT }, { type: "large", size: 1 }, { type: "large", size: 2 }, { type: "large", size: 3 }, { type: "large", size: 4 }], C1 = [{ type: "small", style: ne.SCRIPTSCRIPT }, { type: "small", style: ne.SCRIPT }, { type: "small", style: ne.TEXT }, { type: "stack" }], Vi = [{ type: "small", style: ne.SCRIPTSCRIPT }, { type: "small", style: ne.SCRIPT }, { type: "small", style: ne.TEXT }, { type: "large", size: 1 }, { type: "large", size: 2 }, { type: "large", size: 3 }, { type: "large", size: 4 }, { type: "stack" }], B1 = function (e) {
        if (e.type === "small")
          return "Main-Regular";
        if (e.type === "large")
          return "Size" + e.size + "-Regular";
        if (e.type === "stack")
          return "Size4-Regular";
        throw new Error("Add support for delim type '" + e.type + "' here.");
      }, Ui = function (e, t, r, i) {
        for (var a = Math.min(2, 3 - i.style.size), u = a; u < r.length && r[u].type !== "stack"; u++) {
          var p = k0(e, B1(r[u]), "math"), x = p.height + p.depth;
          if (r[u].type === "small") {
            var k = i.havingBaseStyle(r[u].style);
            x *= k.sizeMultiplier;
          }
          if (x > t)
            return r[u];
        }
        return r[r.length - 1];
      }, Gi = function (e, t, r, i, a, u) {
        e === "<" || e === "\\lt" || e === "\u27E8" ? e = "\\langle" : (e === ">" || e === "\\gt" || e === "\u27E9") && (e = "\\rangle");
        var p;
        H.contains(ji, e) ? p = z1 : H.contains(Pi, e) ? p = Vi : p = C1;
        var x = Ui(e, t, p, i);
        return x.type === "small" ? x1(e, x.style, r, i, a, u) : x.type === "large" ? Ri(e, x.size, r, i, a, u) : Hi(e, t, r, i, a, u);
      }, T1 = function (e, t, r, i, a, u) {
        var p = i.fontMetrics().axisHeight * i.sizeMultiplier, x = 901, k = 5 / i.fontMetrics().ptPerEm, C = Math.max(t - p, r + p), I = Math.max(C / 500 * x, 2 * C - k);
        return Gi(e, I, true, i, a, u);
      }, gt = { sqrtImage: w1, sizedDelim: A1, sizeToMaxHeight: w0, customSizedDelim: Gi, leftRightDelim: T1 }, Wi = { "\\bigl": { mclass: "mopen", size: 1 }, "\\Bigl": { mclass: "mopen", size: 2 }, "\\biggl": { mclass: "mopen", size: 3 }, "\\Biggl": { mclass: "mopen", size: 4 }, "\\bigr": { mclass: "mclose", size: 1 }, "\\Bigr": { mclass: "mclose", size: 2 }, "\\biggr": { mclass: "mclose", size: 3 }, "\\Biggr": { mclass: "mclose", size: 4 }, "\\bigm": { mclass: "mrel", size: 1 }, "\\Bigm": { mclass: "mrel", size: 2 }, "\\biggm": { mclass: "mrel", size: 3 }, "\\Biggm": { mclass: "mrel", size: 4 }, "\\big": { mclass: "mord", size: 1 }, "\\Big": { mclass: "mord", size: 2 }, "\\bigg": { mclass: "mord", size: 3 }, "\\Bigg": { mclass: "mord", size: 4 } }, M1 = ["(", "\\lparen", ")", "\\rparen", "[", "\\lbrack", "]", "\\rbrack", "\\{", "\\lbrace", "\\}", "\\rbrace", "\\lfloor", "\\rfloor", "\u230A", "\u230B", "\\lceil", "\\rceil", "\u2308", "\u2309", "<", ">", "\\langle", "\u27E8", "\\rangle", "\u27E9", "\\lt", "\\gt", "\\lvert", "\\rvert", "\\lVert", "\\rVert", "\\lgroup", "\\rgroup", "\u27EE", "\u27EF", "\\lmoustache", "\\rmoustache", "\u23B0", "\u23B1", "/", "\\backslash", "|", "\\vert", "\\|", "\\Vert", "\\uparrow", "\\Uparrow", "\\downarrow", "\\Downarrow", "\\updownarrow", "\\Updownarrow", "."];
      function K0(o, e) {
        var t = $0(o);
        if (t && H.contains(M1, t.text))
          return t;
        throw t ? new m("Invalid delimiter '" + t.text + "' after '" + e.funcName + "'", o) : new m("Invalid delimiter type '" + o.type + "'", o);
      }
      ee({
        type: "delimsizing", names: ["\\bigl", "\\Bigl", "\\biggl", "\\Biggl", "\\bigr", "\\Bigr", "\\biggr", "\\Biggr", "\\bigm", "\\Bigm", "\\biggm", "\\Biggm", "\\big", "\\Big", "\\bigg", "\\Bigg"], props: { numArgs: 1, argTypes: ["primitive"] }, handler: function (e, t) {
          var r = K0(t[0], e);
          return { type: "delimsizing", mode: e.parser.mode, size: Wi[e.funcName].size, mclass: Wi[e.funcName].mclass, delim: r.text };
        }, htmlBuilder: function (e, t) {
          return e.delim === "." ? L.makeSpan([e.mclass]) : gt.sizedDelim(e.delim, e.size, t, e.mode, [e.mclass]);
        }, mathmlBuilder: function (e) {
          var t = [];
          e.delim !== "." && t.push(st(e.delim, e.mode));
          var r = new W.MathNode("mo", t);
          return e.mclass === "mopen" || e.mclass === "mclose" ? r.setAttribute("fence", "true") : r.setAttribute("fence", "false"), r.setAttribute("stretchy", "true"), r.setAttribute("minsize", gt.sizeToMaxHeight[e.size] + "em"), r.setAttribute("maxsize", gt.sizeToMaxHeight[e.size] + "em"), r;
        }
      });
      function Yi(o) {
        if (!o.body)
          throw new Error("Bug: The leftright ParseNode wasn't fully parsed.");
      }
      ee({
        type: "leftright-right", names: ["\\right"], props: { numArgs: 1, primitive: true }, handler: function (e, t) {
          var r = e.parser.gullet.macros.get("\\current@color");
          if (r && typeof r != "string")
            throw new m("\\current@color set to non-string in \\right");
          return { type: "leftright-right", mode: e.parser.mode, delim: K0(t[0], e).text, color: r };
        }
      }), ee({
        type: "leftright", names: ["\\left"], props: { numArgs: 1, primitive: true }, handler: function (e, t) {
          var r = K0(t[0], e), i = e.parser;
          ++i.leftrightDepth;
          var a = i.parseExpression(false);
          --i.leftrightDepth, i.expect("\\right", false);
          var u = de(i.parseFunction(), "leftright-right");
          return { type: "leftright", mode: i.mode, body: a, left: r.text, right: u.delim, rightColor: u.color };
        }, htmlBuilder: function (e, t) {
          Yi(e);
          for (var r = Ze(e.body, t, true, ["mopen", "mclose"]), i = 0, a = 0, u = false, p = 0; p < r.length; p++)
            r[p].isMiddle ? u = true : (i = Math.max(r[p].height, i), a = Math.max(r[p].depth, a));
          i *= t.sizeMultiplier, a *= t.sizeMultiplier;
          var x;
          if (e.left === "." ? x = b0(t, ["mopen"]) : x = gt.leftRightDelim(e.left, i, a, t, e.mode, ["mopen"]), r.unshift(x), u)
            for (var k = 1; k < r.length; k++) {
              var C = r[k], I = C.isMiddle;
              I && (r[k] = gt.leftRightDelim(I.delim, i, a, I.options, e.mode, []));
            }
          var R;
          if (e.right === ".")
            R = b0(t, ["mclose"]);
          else {
            var V = e.rightColor ? t.withColor(e.rightColor) : t;
            R = gt.leftRightDelim(e.right, i, a, V, e.mode, ["mclose"]);
          }
          return r.push(R), L.makeSpan(["minner"], r, t);
        }, mathmlBuilder: function (e, t) {
          Yi(e);
          var r = nt(e.body, t);
          if (e.left !== ".") {
            var i = new W.MathNode("mo", [st(e.left, e.mode)]);
            i.setAttribute("fence", "true"), r.unshift(i);
          }
          if (e.right !== ".") {
            var a = new W.MathNode("mo", [st(e.right, e.mode)]);
            a.setAttribute("fence", "true"), e.rightColor && a.setAttribute("mathcolor", e.rightColor), r.push(a);
          }
          return Rr(r);
        }
      }), ee({
        type: "middle", names: ["\\middle"], props: { numArgs: 1, primitive: true }, handler: function (e, t) {
          var r = K0(t[0], e);
          if (!e.parser.leftrightDepth)
            throw new m("\\middle without preceding \\left", r);
          return { type: "middle", mode: e.parser.mode, delim: r.text };
        }, htmlBuilder: function (e, t) {
          var r;
          if (e.delim === ".")
            r = b0(t, []);
          else {
            r = gt.sizedDelim(e.delim, 1, t, e.mode, []);
            var i = { delim: e.delim, options: t };
            r.isMiddle = i;
          }
          return r;
        }, mathmlBuilder: function (e, t) {
          var r = e.delim === "\\vert" || e.delim === "|" ? st("|", "text") : st(e.delim, e.mode), i = new W.MathNode("mo", [r]);
          return i.setAttribute("fence", "true"), i.setAttribute("lspace", "0.05em"), i.setAttribute("rspace", "0.05em"), i;
        }
      });
      var Qr = function (e, t) {
        var r = L.wrapFragment(be(e.body, t), t), i = e.label.substr(1), a = t.sizeMultiplier, u, p = 0, x = H.isCharacterBox(e.body);
        if (i === "sout")
          u = L.makeSpan(["stretchy", "sout"]), u.height = t.fontMetrics().defaultRuleThickness / a, p = -0.5 * t.fontMetrics().xHeight;
        else if (i === "phase") {
          var k = Le({ number: 0.6, unit: "pt" }, t), C = Le({ number: 0.35, unit: "ex" }, t), I = t.havingBaseSizing();
          a = a / I.sizeMultiplier;
          var R = r.height + r.depth + k + C;
          r.style.paddingLeft = R / 2 + k + "em";
          var V = Math.floor(1e3 * R * a), G = Ye(V), Q = new dt([new Bt("phase", G)], { width: "400em", height: V / 1e3 + "em", viewBox: "0 0 400000 " + V, preserveAspectRatio: "xMinYMin slice" });
          u = L.makeSvgSpan(["hide-tail"], [Q], t), u.style.height = R + "em", p = r.depth + k + C;
        } else {
          /cancel/.test(i) ? x || r.classes.push("cancel-pad") : i === "angl" ? r.classes.push("anglpad") : r.classes.push("boxpad");
          var K = 0, ae = 0, ue = 0;
          /box/.test(i) ? (ue = Math.max(t.fontMetrics().fboxrule, t.minRuleThickness), K = t.fontMetrics().fboxsep + (i === "colorbox" ? 0 : ue), ae = K) : i === "angl" ? (ue = Math.max(t.fontMetrics().defaultRuleThickness, t.minRuleThickness), K = 4 * ue, ae = Math.max(0, 0.25 - r.depth)) : (K = x ? 0.2 : 0, ae = K), u = Ft.encloseSpan(r, i, K, ae, t), /fbox|boxed|fcolorbox/.test(i) ? (u.style.borderStyle = "solid", u.style.borderWidth = ue + "em") : i === "angl" && ue !== 0.049 && (u.style.borderTopWidth = ue + "em", u.style.borderRightWidth = ue + "em"), p = r.depth + ae, e.backgroundColor && (u.style.backgroundColor = e.backgroundColor, e.borderColor && (u.style.borderColor = e.borderColor));
        }
        var se;
        if (e.backgroundColor)
          se = L.makeVList({ positionType: "individualShift", children: [{ type: "elem", elem: u, shift: p }, { type: "elem", elem: r, shift: 0 }] }, t);
        else {
          var ye = /cancel|phase/.test(i) ? ["svg-align"] : [];
          se = L.makeVList({ positionType: "individualShift", children: [{ type: "elem", elem: r, shift: 0 }, { type: "elem", elem: u, shift: p, wrapperClasses: ye }] }, t);
        }
        return /cancel/.test(i) && (se.height = r.height, se.depth = r.depth), /cancel/.test(i) && !x ? L.makeSpan(["mord", "cancel-lap"], [se], t) : L.makeSpan(["mord"], [se], t);
      }, Kr = function (e, t) {
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
      ee({
        type: "enclose", names: ["\\colorbox"], props: { numArgs: 2, allowedInText: true, argTypes: ["color", "text"] }, handler: function (e, t, r) {
          var i = e.parser, a = e.funcName, u = de(t[0], "color-token").color, p = t[1];
          return { type: "enclose", mode: i.mode, label: a, backgroundColor: u, body: p };
        }, htmlBuilder: Qr, mathmlBuilder: Kr
      }), ee({
        type: "enclose", names: ["\\fcolorbox"], props: { numArgs: 3, allowedInText: true, argTypes: ["color", "color", "text"] }, handler: function (e, t, r) {
          var i = e.parser, a = e.funcName, u = de(t[0], "color-token").color, p = de(t[1], "color-token").color, x = t[2];
          return { type: "enclose", mode: i.mode, label: a, backgroundColor: p, borderColor: u, body: x };
        }, htmlBuilder: Qr, mathmlBuilder: Kr
      }), ee({
        type: "enclose", names: ["\\fbox"], props: { numArgs: 1, argTypes: ["hbox"], allowedInText: true }, handler: function (e, t) {
          var r = e.parser;
          return { type: "enclose", mode: r.mode, label: "\\fbox", body: t[0] };
        }
      }), ee({
        type: "enclose", names: ["\\cancel", "\\bcancel", "\\xcancel", "\\sout", "\\phase"], props: { numArgs: 1 }, handler: function (e, t) {
          var r = e.parser, i = e.funcName, a = t[0];
          return { type: "enclose", mode: r.mode, label: i, body: a };
        }, htmlBuilder: Qr, mathmlBuilder: Kr
      }), ee({
        type: "enclose", names: ["\\angl"], props: { numArgs: 1, argTypes: ["hbox"], allowedInText: false }, handler: function (e, t) {
          var r = e.parser;
          return { type: "enclose", mode: r.mode, label: "\\angl", body: t[0] };
        }
      });
      var Xi = {};
      function vt(o) {
        for (var e = o.type, t = o.names, r = o.props, i = o.handler, a = o.htmlBuilder, u = o.mathmlBuilder, p = { type: e, numArgs: r.numArgs || 0, allowedInText: false, numOptionalArgs: 0, handler: i }, x = 0; x < t.length; ++x)
          Xi[t[x]] = p;
        a && (G0[e] = a), u && (W0[e] = u);
      }
      function $i(o) {
        var e = [];
        o.consumeSpaces();
        for (var t = o.fetch().text; t === "\\hline" || t === "\\hdashline";)
          o.consume(), e.push(t === "\\hdashline"), o.consumeSpaces(), t = o.fetch().text;
        return e;
      }
      var J0 = function (e) {
        var t = e.parser.settings;
        if (!t.displayMode)
          throw new m("{" + e.envName + "} can be used only in display mode.");
      };
      function Rt(o, e, t) {
        var r = e.hskipBeforeAndAfter, i = e.addJot, a = e.cols, u = e.arraystretch, p = e.colSeparationType, x = e.addEqnNum, k = e.singleRow, C = e.emptySingleRow, I = e.maxNumCols, R = e.leqno;
        if (o.gullet.beginGroup(), k || o.gullet.macros.set("\\cr", "\\\\\\relax"), !u) {
          var V = o.gullet.expandMacroAsText("\\arraystretch");
          if (V == null)
            u = 1;
          else if (u = parseFloat(V), !u || u < 0)
            throw new m("Invalid \\arraystretch: " + V);
        }
        o.gullet.beginGroup();
        var G = [], Q = [G], K = [], ae = [];
        for (ae.push($i(o)); ;) {
          var ue = o.parseExpression(false, k ? "\\end" : "\\\\");
          o.gullet.endGroup(), o.gullet.beginGroup(), ue = { type: "ordgroup", mode: o.mode, body: ue }, t && (ue = { type: "styling", mode: o.mode, style: t, body: [ue] }), G.push(ue);
          var se = o.fetch().text;
          if (se === "&") {
            if (I && G.length === I) {
              if (k || p)
                throw new m("Too many tab characters: &", o.nextToken);
              o.settings.reportNonstrict("textEnv", "Too few columns specified in the {array} column argument.");
            }
            o.consume();
          } else if (se === "\\end") {
            G.length === 1 && ue.type === "styling" && ue.body[0].body.length === 0 && (Q.length > 1 || !C) && Q.pop(), ae.length < Q.length + 1 && ae.push([]);
            break;
          } else if (se === "\\\\") {
            o.consume();
            var ye = void 0;
            o.gullet.future().text !== " " && (ye = o.parseSizeGroup(true)), K.push(ye ? ye.value : null), ae.push($i(o)), G = [], Q.push(G);
          } else
            throw new m("Expected & or \\\\ or \\cr or \\end", o.nextToken);
        }
        return o.gullet.endGroup(), o.gullet.endGroup(), { type: "array", mode: o.mode, addJot: i, arraystretch: u, body: Q, cols: a, rowGaps: K, hskipBeforeAndAfter: r, hLinesBeforeRow: ae, colSeparationType: p, addEqnNum: x, leqno: R };
      }
      function Jr(o) {
        return o.substr(0, 1) === "d" ? "display" : "text";
      }
      var xt = function (e, t) {
        var r, i, a = e.body.length, u = e.hLinesBeforeRow, p = 0, x = new Array(a), k = [], C = Math.max(t.fontMetrics().arrayRuleWidth, t.minRuleThickness), I = 1 / t.fontMetrics().ptPerEm, R = 5 * I;
        if (e.colSeparationType && e.colSeparationType === "small") {
          var V = t.havingStyle(ne.SCRIPT).sizeMultiplier;
          R = 0.2778 * (V / t.sizeMultiplier);
        }
        var G = e.colSeparationType === "CD" ? Le({ number: 3, unit: "ex" }, t) : 12 * I, Q = 3 * I, K = e.arraystretch * G, ae = 0.7 * K, ue = 0.3 * K, se = 0;
        function ye(La) {
          for (var tr = 0; tr < La.length; ++tr)
            tr > 0 && (se += 0.25), k.push({ pos: se, isDashed: La[tr] });
        }
        for (ye(u[0]), r = 0; r < e.body.length; ++r) {
          var Ce = e.body[r], Ie = ae, Se = ue;
          p < Ce.length && (p = Ce.length);
          var Be = new Array(Ce.length);
          for (i = 0; i < Ce.length; ++i) {
            var Re = be(Ce[i], t);
            Se < Re.depth && (Se = Re.depth), Ie < Re.height && (Ie = Re.height), Be[i] = Re;
          }
          var De = e.rowGaps[r], it = 0;
          De && (it = Le(De, t), it > 0 && (it += ue, Se < it && (Se = it), it = 0)), e.addJot && (Se += Q), Be.height = Ie, Be.depth = Se, se += Ie, Be.pos = se, se += Se + it, x[r] = Be, ye(u[r + 1]);
        }
        var at = se / 2 + t.fontMetrics().axisHeight, Pt = e.cols || [], yt = [], lt, s0, Da = [];
        if (e.addEqnNum)
          for (r = 0; r < a; ++r) {
            var hn = x[r], ro = hn.pos - at, cn = L.makeSpan(["eqn-num"], [], t);
            cn.depth = hn.depth, cn.height = hn.height, Da.push({ type: "elem", elem: cn, shift: ro });
          }
        for (i = 0, s0 = 0; i < p || s0 < Pt.length; ++i, ++s0) {
          for (var Nt = Pt[s0] || {}, Fa = true; Nt.type === "separator";) {
            if (Fa || (lt = L.makeSpan(["arraycolsep"], []), lt.style.width = t.fontMetrics().doubleRuleSep + "em", yt.push(lt)), Nt.separator === "|" || Nt.separator === ":") {
              var no = Nt.separator === "|" ? "solid" : "dashed", m0 = L.makeSpan(["vertical-separator"], [], t);
              m0.style.height = se + "em", m0.style.borderRightWidth = C + "em", m0.style.borderRightStyle = no, m0.style.margin = "0 -" + C / 2 + "em", m0.style.verticalAlign = -(se - at) + "em", yt.push(m0);
            } else
              throw new m("Invalid separator type: " + Nt.separator);
            s0++, Nt = Pt[s0] || {}, Fa = false;
          }
          if (!(i >= p)) {
            var h0 = void 0;
            (i > 0 || e.hskipBeforeAndAfter) && (h0 = H.deflt(Nt.pregap, R), h0 !== 0 && (lt = L.makeSpan(["arraycolsep"], []), lt.style.width = h0 + "em", yt.push(lt)));
            var c0 = [];
            for (r = 0; r < a; ++r) {
              var _0 = x[r], er = _0[i];
              if (!!er) {
                var io = _0.pos - at;
                er.depth = _0.depth, er.height = _0.height, c0.push({ type: "elem", elem: er, shift: io });
              }
            }
            c0 = L.makeVList({ positionType: "individualShift", children: c0 }, t), c0 = L.makeSpan(["col-align-" + (Nt.align || "c")], [c0]), yt.push(c0), (i < p - 1 || e.hskipBeforeAndAfter) && (h0 = H.deflt(Nt.postgap, R), h0 !== 0 && (lt = L.makeSpan(["arraycolsep"], []), lt.style.width = h0 + "em", yt.push(lt)));
          }
        }
        if (x = L.makeSpan(["mtable"], yt), k.length > 0) {
          for (var ao = L.makeLineSpan("hline", t, C), lo = L.makeLineSpan("hdashline", t, C), pn = [{ type: "elem", elem: x, shift: 0 }]; k.length > 0;) {
            var Na = k.pop(), Ia = Na.pos - at;
            Na.isDashed ? pn.push({ type: "elem", elem: lo, shift: Ia }) : pn.push({ type: "elem", elem: ao, shift: Ia });
          }
          x = L.makeVList({ positionType: "individualShift", children: pn }, t);
        }
        if (e.addEqnNum) {
          var fn = L.makeVList({ positionType: "individualShift", children: Da }, t);
          return fn = L.makeSpan(["tag"], [fn], t), L.makeFragment([x, fn]);
        } else
          return L.makeSpan(["mord"], [x], t);
      }, E1 = { c: "center ", l: "left ", r: "right " }, bt = function (e, t) {
        for (var r = [], i = new W.MathNode("mtd", [], ["mtr-glue"]), a = new W.MathNode("mtd", [], ["mml-eqn-num"]), u = 0; u < e.body.length; u++) {
          for (var p = e.body[u], x = [], k = 0; k < p.length; k++)
            x.push(new W.MathNode("mtd", [Ee(p[k], t)]));
          e.addEqnNum && (x.unshift(i), x.push(i), e.leqno ? x.unshift(a) : x.push(a)), r.push(new W.MathNode("mtr", x));
        }
        var C = new W.MathNode("mtable", r), I = e.arraystretch === 0.5 ? 0.1 : 0.16 + e.arraystretch - 1 + (e.addJot ? 0.09 : 0);
        C.setAttribute("rowspacing", I.toFixed(4) + "em");
        var R = "", V = "";
        if (e.cols && e.cols.length > 0) {
          var G = e.cols, Q = "", K = false, ae = 0, ue = G.length;
          G[0].type === "separator" && (R += "top ", ae = 1), G[G.length - 1].type === "separator" && (R += "bottom ", ue -= 1);
          for (var se = ae; se < ue; se++)
            G[se].type === "align" ? (V += E1[G[se].align], K && (Q += "none "), K = true) : G[se].type === "separator" && K && (Q += G[se].separator === "|" ? "solid " : "dashed ", K = false);
          C.setAttribute("columnalign", V.trim()), /[sd]/.test(Q) && C.setAttribute("columnlines", Q.trim());
        }
        if (e.colSeparationType === "align") {
          for (var ye = e.cols || [], Ce = "", Ie = 1; Ie < ye.length; Ie++)
            Ce += Ie % 2 ? "0em " : "1em ";
          C.setAttribute("columnspacing", Ce.trim());
        } else
          e.colSeparationType === "alignat" || e.colSeparationType === "gather" ? C.setAttribute("columnspacing", "0em") : e.colSeparationType === "small" ? C.setAttribute("columnspacing", "0.2778em") : e.colSeparationType === "CD" ? C.setAttribute("columnspacing", "0.5em") : C.setAttribute("columnspacing", "1em");
        var Se = "", Be = e.hLinesBeforeRow;
        R += Be[0].length > 0 ? "left " : "", R += Be[Be.length - 1].length > 0 ? "right " : "";
        for (var Re = 1; Re < Be.length - 1; Re++)
          Se += Be[Re].length === 0 ? "none " : Be[Re][0] ? "dashed " : "solid ";
        return /[sd]/.test(Se) && C.setAttribute("rowlines", Se.trim()), R !== "" && (C = new W.MathNode("menclose", [C]), C.setAttribute("notation", R.trim())), e.arraystretch && e.arraystretch < 1 && (C = new W.MathNode("mstyle", [C]), C.setAttribute("scriptlevel", "1")), C;
      }, Zi = function (e, t) {
        e.envName.indexOf("ed") === -1 && J0(e);
        var r = [], i = e.envName.indexOf("at") > -1 ? "alignat" : "align", a = Rt(e.parser, { cols: r, addJot: true, addEqnNum: e.envName === "align" || e.envName === "alignat", emptySingleRow: true, colSeparationType: i, maxNumCols: e.envName === "split" ? 2 : void 0, leqno: e.parser.settings.leqno }, "display"), u, p = 0, x = { type: "ordgroup", mode: e.mode, body: [] };
        if (t[0] && t[0].type === "ordgroup") {
          for (var k = "", C = 0; C < t[0].body.length; C++) {
            var I = de(t[0].body[C], "textord");
            k += I.text;
          }
          u = Number(k), p = u * 2;
        }
        var R = !p;
        a.body.forEach(function (K) {
          for (var ae = 1; ae < K.length; ae += 2) {
            var ue = de(K[ae], "styling"), se = de(ue.body[0], "ordgroup");
            se.body.unshift(x);
          }
          if (R)
            p < K.length && (p = K.length);
          else {
            var ye = K.length / 2;
            if (u < ye)
              throw new m("Too many math in a row: " + ("expected " + u + ", but got " + ye), K[0]);
          }
        });
        for (var V = 0; V < p; ++V) {
          var G = "r", Q = 0;
          V % 2 == 1 ? G = "l" : V > 0 && R && (Q = 1), r[V] = { type: "align", align: G, pregap: Q, postgap: 0 };
        }
        return a.colSeparationType = R ? "align" : "alignat", a;
      };
      vt({
        type: "array", names: ["array", "darray"], props: { numArgs: 1 }, handler: function (e, t) {
          var r = $0(t[0]), i = r ? [t[0]] : de(t[0], "ordgroup").body, a = i.map(function (p) {
            var x = Pr(p), k = x.text;
            if ("lcr".indexOf(k) !== -1)
              return { type: "align", align: k };
            if (k === "|")
              return { type: "separator", separator: "|" };
            if (k === ":")
              return { type: "separator", separator: ":" };
            throw new m("Unknown column alignment: " + k, p);
          }), u = { cols: a, hskipBeforeAndAfter: true, maxNumCols: a.length };
          return Rt(e.parser, u, Jr(e.envName));
        }, htmlBuilder: xt, mathmlBuilder: bt
      }), vt({
        type: "array", names: ["matrix", "pmatrix", "bmatrix", "Bmatrix", "vmatrix", "Vmatrix", "matrix*", "pmatrix*", "bmatrix*", "Bmatrix*", "vmatrix*", "Vmatrix*"], props: { numArgs: 0 }, handler: function (e) {
          var t = { matrix: null, pmatrix: ["(", ")"], bmatrix: ["[", "]"], Bmatrix: ["\\{", "\\}"], vmatrix: ["|", "|"], Vmatrix: ["\\Vert", "\\Vert"] }[e.envName.replace("*", "")], r = "c", i = { hskipBeforeAndAfter: false, cols: [{ type: "align", align: r }] };
          if (e.envName.charAt(e.envName.length - 1) === "*") {
            var a = e.parser;
            if (a.consumeSpaces(), a.fetch().text === "[") {
              if (a.consume(), a.consumeSpaces(), r = a.fetch().text, "lcr".indexOf(r) === -1)
                throw new m("Expected l or c or r", a.nextToken);
              a.consume(), a.consumeSpaces(), a.expect("]"), a.consume(), i.cols = [{ type: "align", align: r }];
            }
          }
          var u = Rt(e.parser, i, Jr(e.envName)), p = Math.max.apply(Math, [0].concat(u.body.map(function (x) {
            return x.length;
          })));
          return u.cols = new Array(p).fill({ type: "align", align: r }), t ? { type: "leftright", mode: e.mode, body: [u], left: t[0], right: t[1], rightColor: void 0 } : u;
        }, htmlBuilder: xt, mathmlBuilder: bt
      }), vt({
        type: "array", names: ["smallmatrix"], props: { numArgs: 0 }, handler: function (e) {
          var t = { arraystretch: 0.5 }, r = Rt(e.parser, t, "script");
          return r.colSeparationType = "small", r;
        }, htmlBuilder: xt, mathmlBuilder: bt
      }), vt({
        type: "array", names: ["subarray"], props: { numArgs: 1 }, handler: function (e, t) {
          var r = $0(t[0]), i = r ? [t[0]] : de(t[0], "ordgroup").body, a = i.map(function (p) {
            var x = Pr(p), k = x.text;
            if ("lc".indexOf(k) !== -1)
              return { type: "align", align: k };
            throw new m("Unknown column alignment: " + k, p);
          });
          if (a.length > 1)
            throw new m("{subarray} can contain only one column");
          var u = { cols: a, hskipBeforeAndAfter: false, arraystretch: 0.5 };
          if (u = Rt(e.parser, u, "script"), u.body.length > 0 && u.body[0].length > 1)
            throw new m("{subarray} can contain only one column");
          return u;
        }, htmlBuilder: xt, mathmlBuilder: bt
      }), vt({
        type: "array", names: ["cases", "dcases", "rcases", "drcases"], props: { numArgs: 0 }, handler: function (e) {
          var t = { arraystretch: 1.2, cols: [{ type: "align", align: "l", pregap: 0, postgap: 1 }, { type: "align", align: "l", pregap: 0, postgap: 0 }] }, r = Rt(e.parser, t, Jr(e.envName));
          return { type: "leftright", mode: e.mode, body: [r], left: e.envName.indexOf("r") > -1 ? "." : "\\{", right: e.envName.indexOf("r") > -1 ? "\\}" : ".", rightColor: void 0 };
        }, htmlBuilder: xt, mathmlBuilder: bt
      }), vt({ type: "array", names: ["align", "align*", "aligned", "split"], props: { numArgs: 0 }, handler: Zi, htmlBuilder: xt, mathmlBuilder: bt }), vt({
        type: "array", names: ["gathered", "gather", "gather*"], props: { numArgs: 0 }, handler: function (e) {
          H.contains(["gather", "gather*"], e.envName) && J0(e);
          var t = { cols: [{ type: "align", align: "c" }], addJot: true, colSeparationType: "gather", addEqnNum: e.envName === "gather", emptySingleRow: true, leqno: e.parser.settings.leqno };
          return Rt(e.parser, t, "display");
        }, htmlBuilder: xt, mathmlBuilder: bt
      }), vt({ type: "array", names: ["alignat", "alignat*", "alignedat"], props: { numArgs: 1 }, handler: Zi, htmlBuilder: xt, mathmlBuilder: bt }), vt({
        type: "array", names: ["equation", "equation*"], props: { numArgs: 0 }, handler: function (e) {
          J0(e);
          var t = { addEqnNum: e.envName === "equation", emptySingleRow: true, singleRow: true, maxNumCols: 1, leqno: e.parser.settings.leqno };
          return Rt(e.parser, t, "display");
        }, htmlBuilder: xt, mathmlBuilder: bt
      }), vt({
        type: "array", names: ["CD"], props: { numArgs: 0 }, handler: function (e) {
          return J0(e), g1(e.parser);
        }, htmlBuilder: xt, mathmlBuilder: bt
      }), ee({
        type: "text", names: ["\\hline", "\\hdashline"], props: { numArgs: 0, allowedInText: true, allowedInMath: true }, handler: function (e, t) {
          throw new m(e.funcName + " valid only within array environment");
        }
      });
      var D1 = Xi, Qi = D1;
      ee({
        type: "environment", names: ["\\begin", "\\end"], props: { numArgs: 1, argTypes: ["text"] }, handler: function (e, t) {
          var r = e.parser, i = e.funcName, a = t[0];
          if (a.type !== "ordgroup")
            throw new m("Invalid environment name", a);
          for (var u = "", p = 0; p < a.body.length; ++p)
            u += de(a.body[p], "textord").text;
          if (i === "\\begin") {
            if (!Qi.hasOwnProperty(u))
              throw new m("No such environment: " + u, a);
            var x = Qi[u], k = r.parseArguments("\\begin{" + u + "}", x), C = k.args, I = k.optArgs, R = { mode: r.mode, envName: u, parser: r }, V = x.handler(R, C, I);
            r.expect("\\end", false);
            var G = r.nextToken, Q = de(r.parseFunction(), "environment");
            if (Q.name !== u)
              throw new m("Mismatch: \\begin{" + u + "} matched by \\end{" + Q.name + "}", G);
            return V;
          }
          return { type: "environment", mode: r.mode, name: u, nameGroup: a };
        }
      });
      var F1 = L.makeSpan;
      function Ki(o, e) {
        var t = Ze(o.body, e, true);
        return F1([o.mclass], t, e);
      }
      function Ji(o, e) {
        var t, r = nt(o.body, e);
        return o.mclass === "minner" ? W.newDocumentFragment(r) : (o.mclass === "mord" ? o.isCharacterBox ? (t = r[0], t.type = "mi") : t = new W.MathNode("mi", r) : (o.isCharacterBox ? (t = r[0], t.type = "mo") : t = new W.MathNode("mo", r), o.mclass === "mbin" ? (t.attributes.lspace = "0.22em", t.attributes.rspace = "0.22em") : o.mclass === "mpunct" ? (t.attributes.lspace = "0em", t.attributes.rspace = "0.17em") : (o.mclass === "mopen" || o.mclass === "mclose") && (t.attributes.lspace = "0em", t.attributes.rspace = "0em")), t);
      }
      ee({
        type: "mclass", names: ["\\mathord", "\\mathbin", "\\mathrel", "\\mathopen", "\\mathclose", "\\mathpunct", "\\mathinner"], props: { numArgs: 1, primitive: true }, handler: function (e, t) {
          var r = e.parser, i = e.funcName, a = t[0];
          return { type: "mclass", mode: r.mode, mclass: "m" + i.substr(5), body: Ue(a), isCharacterBox: H.isCharacterBox(a) };
        }, htmlBuilder: Ki, mathmlBuilder: Ji
      });
      var _r = function (e) {
        var t = e.type === "ordgroup" && e.body.length ? e.body[0] : e;
        return t.type === "atom" && (t.family === "bin" || t.family === "rel") ? "m" + t.family : "mord";
      };
      ee({
        type: "mclass", names: ["\\@binrel"], props: { numArgs: 2 }, handler: function (e, t) {
          var r = e.parser;
          return { type: "mclass", mode: r.mode, mclass: _r(t[0]), body: Ue(t[1]), isCharacterBox: H.isCharacterBox(t[1]) };
        }
      }), ee({
        type: "mclass", names: ["\\stackrel", "\\overset", "\\underset"], props: { numArgs: 2 }, handler: function (e, t) {
          var r = e.parser, i = e.funcName, a = t[1], u = t[0], p;
          i !== "\\stackrel" ? p = _r(a) : p = "mrel";
          var x = { type: "op", mode: a.mode, limits: true, alwaysHandleSupSub: true, parentIsSupSub: false, symbol: false, suppressBaseShift: i !== "\\stackrel", body: Ue(a) }, k = { type: "supsub", mode: u.mode, base: x, sup: i === "\\underset" ? null : u, sub: i === "\\underset" ? u : null };
          return { type: "mclass", mode: r.mode, mclass: p, body: [k], isCharacterBox: H.isCharacterBox(k) };
        }, htmlBuilder: Ki, mathmlBuilder: Ji
      });
      var _i = function (e, t) {
        var r = e.font, i = t.withFont(r);
        return be(e.body, i);
      }, ea = function (e, t) {
        var r = e.font, i = t.withFont(r);
        return Ee(e.body, i);
      }, ta = { "\\Bbb": "\\mathbb", "\\bold": "\\mathbf", "\\frak": "\\mathfrak", "\\bm": "\\boldsymbol" };
      ee({
        type: "font", names: ["\\mathrm", "\\mathit", "\\mathbf", "\\mathnormal", "\\mathbb", "\\mathcal", "\\mathfrak", "\\mathscr", "\\mathsf", "\\mathtt", "\\Bbb", "\\bold", "\\frak"], props: { numArgs: 1, allowedInArgument: true }, handler: function (e, t) {
          var r = e.parser, i = e.funcName, a = Y0(t[0]), u = i;
          return u in ta && (u = ta[u]), { type: "font", mode: r.mode, font: u.slice(1), body: a };
        }, htmlBuilder: _i, mathmlBuilder: ea
      }), ee({
        type: "mclass", names: ["\\boldsymbol", "\\bm"], props: { numArgs: 1 }, handler: function (e, t) {
          var r = e.parser, i = t[0], a = H.isCharacterBox(i);
          return { type: "mclass", mode: r.mode, mclass: _r(i), body: [{ type: "font", mode: r.mode, font: "boldsymbol", body: i }], isCharacterBox: a };
        }
      }), ee({
        type: "font", names: ["\\rm", "\\sf", "\\tt", "\\bf", "\\it", "\\cal"], props: { numArgs: 0, allowedInText: true }, handler: function (e, t) {
          var r = e.parser, i = e.funcName, a = e.breakOnTokenText, u = r.mode, p = r.parseExpression(true, a), x = "math" + i.slice(1);
          return { type: "font", mode: u, font: x, body: { type: "ordgroup", mode: r.mode, body: p } };
        }, htmlBuilder: _i, mathmlBuilder: ea
      });
      var ra = function (e, t) {
        var r = t;
        return e === "display" ? r = r.id >= ne.SCRIPT.id ? r.text() : ne.DISPLAY : e === "text" && r.size === ne.DISPLAY.size ? r = ne.TEXT : e === "script" ? r = ne.SCRIPT : e === "scriptscript" && (r = ne.SCRIPTSCRIPT), r;
      }, en = function (e, t) {
        var r = ra(e.size, t.style), i = r.fracNum(), a = r.fracDen(), u;
        u = t.havingStyle(i);
        var p = be(e.numer, u, t);
        if (e.continued) {
          var x = 8.5 / t.fontMetrics().ptPerEm, k = 3.5 / t.fontMetrics().ptPerEm;
          p.height = p.height < x ? x : p.height, p.depth = p.depth < k ? k : p.depth;
        }
        u = t.havingStyle(a);
        var C = be(e.denom, u, t), I, R, V;
        e.hasBarLine ? (e.barSize ? (R = Le(e.barSize, t), I = L.makeLineSpan("frac-line", t, R)) : I = L.makeLineSpan("frac-line", t), R = I.height, V = I.height) : (I = null, R = 0, V = t.fontMetrics().defaultRuleThickness);
        var G, Q, K;
        r.size === ne.DISPLAY.size || e.size === "display" ? (G = t.fontMetrics().num1, R > 0 ? Q = 3 * V : Q = 7 * V, K = t.fontMetrics().denom1) : (R > 0 ? (G = t.fontMetrics().num2, Q = V) : (G = t.fontMetrics().num3, Q = 3 * V), K = t.fontMetrics().denom2);
        var ae;
        if (I) {
          var se = t.fontMetrics().axisHeight;
          G - p.depth - (se + 0.5 * R) < Q && (G += Q - (G - p.depth - (se + 0.5 * R))), se - 0.5 * R - (C.height - K) < Q && (K += Q - (se - 0.5 * R - (C.height - K)));
          var ye = -(se - 0.5 * R);
          ae = L.makeVList({ positionType: "individualShift", children: [{ type: "elem", elem: C, shift: K }, { type: "elem", elem: I, shift: ye }, { type: "elem", elem: p, shift: -G }] }, t);
        } else {
          var ue = G - p.depth - (C.height - K);
          ue < Q && (G += 0.5 * (Q - ue), K += 0.5 * (Q - ue)), ae = L.makeVList({ positionType: "individualShift", children: [{ type: "elem", elem: C, shift: K }, { type: "elem", elem: p, shift: -G }] }, t);
        }
        u = t.havingStyle(r), ae.height *= u.sizeMultiplier / t.sizeMultiplier, ae.depth *= u.sizeMultiplier / t.sizeMultiplier;
        var Ce;
        r.size === ne.DISPLAY.size ? Ce = t.fontMetrics().delim1 : r.size === ne.SCRIPTSCRIPT.size ? Ce = t.havingStyle(ne.SCRIPT).fontMetrics().delim2 : Ce = t.fontMetrics().delim2;
        var Ie, Se;
        return e.leftDelim == null ? Ie = b0(t, ["mopen"]) : Ie = gt.customSizedDelim(e.leftDelim, Ce, true, t.havingStyle(r), e.mode, ["mopen"]), e.continued ? Se = L.makeSpan([]) : e.rightDelim == null ? Se = b0(t, ["mclose"]) : Se = gt.customSizedDelim(e.rightDelim, Ce, true, t.havingStyle(r), e.mode, ["mclose"]), L.makeSpan(["mord"].concat(u.sizingClasses(t)), [Ie, L.makeSpan(["mfrac"], [ae]), Se], t);
      }, tn = function (e, t) {
        var r = new W.MathNode("mfrac", [Ee(e.numer, t), Ee(e.denom, t)]);
        if (!e.hasBarLine)
          r.setAttribute("linethickness", "0px");
        else if (e.barSize) {
          var i = Le(e.barSize, t);
          r.setAttribute("linethickness", i + "em");
        }
        var a = ra(e.size, t.style);
        if (a.size !== t.style.size) {
          r = new W.MathNode("mstyle", [r]);
          var u = a.size === ne.DISPLAY.size ? "true" : "false";
          r.setAttribute("displaystyle", u), r.setAttribute("scriptlevel", "0");
        }
        if (e.leftDelim != null || e.rightDelim != null) {
          var p = [];
          if (e.leftDelim != null) {
            var x = new W.MathNode("mo", [new W.TextNode(e.leftDelim.replace("\\", ""))]);
            x.setAttribute("fence", "true"), p.push(x);
          }
          if (p.push(r), e.rightDelim != null) {
            var k = new W.MathNode("mo", [new W.TextNode(e.rightDelim.replace("\\", ""))]);
            k.setAttribute("fence", "true"), p.push(k);
          }
          return Rr(p);
        }
        return r;
      };
      ee({
        type: "genfrac", names: ["\\dfrac", "\\frac", "\\tfrac", "\\dbinom", "\\binom", "\\tbinom", "\\\\atopfrac", "\\\\bracefrac", "\\\\brackfrac"], props: { numArgs: 2, allowedInArgument: true }, handler: function (e, t) {
          var r = e.parser, i = e.funcName, a = t[0], u = t[1], p, x = null, k = null, C = "auto";
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
              p = false, x = "(", k = ")";
              break;
            case "\\\\bracefrac":
              p = false, x = "\\{", k = "\\}";
              break;
            case "\\\\brackfrac":
              p = false, x = "[", k = "]";
              break;
            default:
              throw new Error("Unrecognized genfrac command");
          }
          switch (i) {
            case "\\dfrac":
            case "\\dbinom":
              C = "display";
              break;
            case "\\tfrac":
            case "\\tbinom":
              C = "text";
              break;
          }
          return { type: "genfrac", mode: r.mode, continued: false, numer: a, denom: u, hasBarLine: p, leftDelim: x, rightDelim: k, size: C, barSize: null };
        }, htmlBuilder: en, mathmlBuilder: tn
      }), ee({
        type: "genfrac", names: ["\\cfrac"], props: { numArgs: 2 }, handler: function (e, t) {
          var r = e.parser, i = e.funcName, a = t[0], u = t[1];
          return { type: "genfrac", mode: r.mode, continued: true, numer: a, denom: u, hasBarLine: true, leftDelim: null, rightDelim: null, size: "display", barSize: null };
        }
      }), ee({
        type: "infix", names: ["\\over", "\\choose", "\\atop", "\\brace", "\\brack"], props: { numArgs: 0, infix: true }, handler: function (e) {
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
        }
      });
      var na = ["display", "text", "script", "scriptscript"], ia = function (e) {
        var t = null;
        return e.length > 0 && (t = e, t = t === "." ? null : t), t;
      };
      ee({
        type: "genfrac", names: ["\\genfrac"], props: { numArgs: 6, allowedInArgument: true, argTypes: ["math", "math", "size", "text", "math", "math"] }, handler: function (e, t) {
          var r = e.parser, i = t[4], a = t[5], u = Y0(t[0]), p = u.type === "atom" && u.family === "open" ? ia(u.text) : null, x = Y0(t[1]), k = x.type === "atom" && x.family === "close" ? ia(x.text) : null, C = de(t[2], "size"), I, R = null;
          C.isBlank ? I = true : (R = C.value, I = R.number > 0);
          var V = "auto", G = t[3];
          if (G.type === "ordgroup") {
            if (G.body.length > 0) {
              var Q = de(G.body[0], "textord");
              V = na[Number(Q.text)];
            }
          } else
            G = de(G, "textord"), V = na[Number(G.text)];
          return { type: "genfrac", mode: r.mode, numer: i, denom: a, continued: false, hasBarLine: I, barSize: R, leftDelim: p, rightDelim: k, size: V };
        }, htmlBuilder: en, mathmlBuilder: tn
      }), ee({
        type: "infix", names: ["\\above"], props: { numArgs: 1, argTypes: ["size"], infix: true }, handler: function (e, t) {
          var r = e.parser, i = e.funcName, a = e.token;
          return { type: "infix", mode: r.mode, replaceWith: "\\\\abovefrac", size: de(t[0], "size").value, token: a };
        }
      }), ee({
        type: "genfrac", names: ["\\\\abovefrac"], props: { numArgs: 3, argTypes: ["math", "size", "math"] }, handler: function (e, t) {
          var r = e.parser, i = e.funcName, a = t[0], u = T(de(t[1], "infix").size), p = t[2], x = u.number > 0;
          return { type: "genfrac", mode: r.mode, numer: a, denom: p, continued: false, hasBarLine: x, barSize: u, leftDelim: null, rightDelim: null, size: "auto" };
        }, htmlBuilder: en, mathmlBuilder: tn
      });
      var aa = function (e, t) {
        var r = t.style, i, a;
        e.type === "supsub" ? (i = e.sup ? be(e.sup, t.havingStyle(r.sup()), t) : be(e.sub, t.havingStyle(r.sub()), t), a = de(e.base, "horizBrace")) : a = de(e, "horizBrace");
        var u = be(a.base, t.havingBaseStyle(ne.DISPLAY)), p = Ft.svgSpan(a, t), x;
        if (a.isOver ? (x = L.makeVList({ positionType: "firstBaseline", children: [{ type: "elem", elem: u }, { type: "kern", size: 0.1 }, { type: "elem", elem: p }] }, t), x.children[0].children[0].children[1].classes.push("svg-align")) : (x = L.makeVList({ positionType: "bottom", positionData: u.depth + 0.1 + p.height, children: [{ type: "elem", elem: p }, { type: "kern", size: 0.1 }, { type: "elem", elem: u }] }, t), x.children[0].children[0].children[0].classes.push("svg-align")), i) {
          var k = L.makeSpan(["mord", a.isOver ? "mover" : "munder"], [x], t);
          a.isOver ? x = L.makeVList({ positionType: "firstBaseline", children: [{ type: "elem", elem: k }, { type: "kern", size: 0.2 }, { type: "elem", elem: i }] }, t) : x = L.makeVList({ positionType: "bottom", positionData: k.depth + 0.2 + i.height + i.depth, children: [{ type: "elem", elem: i }, { type: "kern", size: 0.2 }, { type: "elem", elem: k }] }, t);
        }
        return L.makeSpan(["mord", a.isOver ? "mover" : "munder"], [x], t);
      }, N1 = function (e, t) {
        var r = Ft.mathMLnode(e.label);
        return new W.MathNode(e.isOver ? "mover" : "munder", [Ee(e.base, t), r]);
      };
      ee({
        type: "horizBrace", names: ["\\overbrace", "\\underbrace"], props: { numArgs: 1 }, handler: function (e, t) {
          var r = e.parser, i = e.funcName;
          return { type: "horizBrace", mode: r.mode, label: i, isOver: /^\\over/.test(i), base: t[0] };
        }, htmlBuilder: aa, mathmlBuilder: N1
      }), ee({
        type: "href", names: ["\\href"], props: { numArgs: 2, argTypes: ["url", "original"], allowedInText: true }, handler: function (e, t) {
          var r = e.parser, i = t[1], a = de(t[0], "url").url;
          return r.settings.isTrusted({ command: "\\href", url: a }) ? { type: "href", mode: r.mode, href: a, body: Ue(i) } : r.formatUnsupportedCmd("\\href");
        }, htmlBuilder: function (e, t) {
          var r = Ze(e.body, t, false);
          return L.makeAnchor(e.href, [], r, t);
        }, mathmlBuilder: function (e, t) {
          var r = Ot(e.body, t);
          return r instanceof ot || (r = new ot("mrow", [r])), r.setAttribute("href", e.href), r;
        }
      }), ee({
        type: "href", names: ["\\url"], props: { numArgs: 1, argTypes: ["url"], allowedInText: true }, handler: function (e, t) {
          var r = e.parser, i = de(t[0], "url").url;
          if (!r.settings.isTrusted({ command: "\\url", url: i }))
            return r.formatUnsupportedCmd("\\url");
          for (var a = [], u = 0; u < i.length; u++) {
            var p = i[u];
            p === "~" && (p = "\\textasciitilde"), a.push({ type: "textord", mode: "text", text: p });
          }
          var x = { type: "text", mode: r.mode, font: "\\texttt", body: a };
          return { type: "href", mode: r.mode, href: i, body: Ue(x) };
        }
      }), ee({
        type: "hbox", names: ["\\hbox"], props: { numArgs: 1, argTypes: ["text"], allowedInText: true, primitive: true }, handler: function (e, t) {
          var r = e.parser;
          return { type: "hbox", mode: r.mode, body: Ue(t[0]) };
        }, htmlBuilder: function (e, t) {
          var r = Ze(e.body, t, false);
          return L.makeFragment(r);
        }, mathmlBuilder: function (e, t) {
          return new W.MathNode("mrow", nt(e.body, t));
        }
      }), ee({
        type: "html", names: ["\\htmlClass", "\\htmlId", "\\htmlStyle", "\\htmlData"], props: { numArgs: 2, argTypes: ["raw", "original"], allowedInText: true }, handler: function (e, t) {
          var r = e.parser, i = e.funcName, a = e.token, u = de(t[0], "raw").string, p = t[1];
          r.settings.strict && r.settings.reportNonstrict("htmlExtension", "HTML extension is disabled on strict mode");
          var x, k = {};
          switch (i) {
            case "\\htmlClass":
              k.class = u, x = { command: "\\htmlClass", class: u };
              break;
            case "\\htmlId":
              k.id = u, x = { command: "\\htmlId", id: u };
              break;
            case "\\htmlStyle":
              k.style = u, x = { command: "\\htmlStyle", style: u };
              break;
            case "\\htmlData": {
              for (var C = u.split(","), I = 0; I < C.length; I++) {
                var R = C[I].split("=");
                if (R.length !== 2)
                  throw new m("Error parsing key-value for \\htmlData");
                k["data-" + R[0].trim()] = R[1].trim();
              }
              x = { command: "\\htmlData", attributes: k };
              break;
            }
            default:
              throw new Error("Unrecognized html command");
          }
          return r.settings.isTrusted(x) ? { type: "html", mode: r.mode, attributes: k, body: Ue(p) } : r.formatUnsupportedCmd(i);
        }, htmlBuilder: function (e, t) {
          var r = Ze(e.body, t, false), i = ["enclosing"];
          e.attributes.class && i.push.apply(i, e.attributes.class.trim().split(/\s+/));
          var a = L.makeSpan(i, r, t);
          for (var u in e.attributes)
            u !== "class" && e.attributes.hasOwnProperty(u) && a.setAttribute(u, e.attributes[u]);
          return a;
        }, mathmlBuilder: function (e, t) {
          return Ot(e.body, t);
        }
      }), ee({
        type: "htmlmathml", names: ["\\html@mathml"], props: { numArgs: 2, allowedInText: true }, handler: function (e, t) {
          var r = e.parser;
          return { type: "htmlmathml", mode: r.mode, html: Ue(t[0]), mathml: Ue(t[1]) };
        }, htmlBuilder: function (e, t) {
          var r = Ze(e.html, t, false);
          return L.makeFragment(r);
        }, mathmlBuilder: function (e, t) {
          return Ot(e.mathml, t);
        }
      });
      var rn = function (e) {
        if (/^[-+]? *(\d+(\.\d*)?|\.\d+)$/.test(e))
          return { number: +e, unit: "bp" };
        var t = /([-+]?) *(\d+(?:\.\d*)?|\.\d+) *([a-z]{2})/.exec(e);
        if (!t)
          throw new m("Invalid size: '" + e + "' in \\includegraphics");
        var r = { number: +(t[1] + t[2]), unit: t[3] };
        if (!xi(r))
          throw new m("Invalid unit: '" + r.unit + "' in \\includegraphics.");
        return r;
      };
      ee({
        type: "includegraphics", names: ["\\includegraphics"], props: { numArgs: 1, numOptionalArgs: 1, argTypes: ["raw", "url"], allowedInText: false }, handler: function (e, t, r) {
          var i = e.parser, a = { number: 0, unit: "em" }, u = { number: 0.9, unit: "em" }, p = { number: 0, unit: "em" }, x = "";
          if (r[0])
            for (var k = de(r[0], "raw").string, C = k.split(","), I = 0; I < C.length; I++) {
              var R = C[I].split("=");
              if (R.length === 2) {
                var V = R[1].trim();
                switch (R[0].trim()) {
                  case "alt":
                    x = V;
                    break;
                  case "width":
                    a = rn(V);
                    break;
                  case "height":
                    u = rn(V);
                    break;
                  case "totalheight":
                    p = rn(V);
                    break;
                  default:
                    throw new m("Invalid key: '" + R[0] + "' in \\includegraphics.");
                }
              }
            }
          var G = de(t[0], "url").url;
          return x === "" && (x = G, x = x.replace(/^.*[\\/]/, ""), x = x.substring(0, x.lastIndexOf("."))), i.settings.isTrusted({ command: "\\includegraphics", url: G }) ? { type: "includegraphics", mode: i.mode, alt: x, width: a, height: u, totalheight: p, src: G } : i.formatUnsupportedCmd("\\includegraphics");
        }, htmlBuilder: function (e, t) {
          var r = Le(e.height, t), i = 0;
          e.totalheight.number > 0 && (i = Le(e.totalheight, t) - r, i = Number(i.toFixed(2)));
          var a = 0;
          e.width.number > 0 && (a = Le(e.width, t));
          var u = { height: r + i + "em" };
          a > 0 && (u.width = a + "em"), i > 0 && (u.verticalAlign = -i + "em");
          var p = new Sr(e.src, e.alt, u);
          return p.height = r, p.depth = i, p;
        }, mathmlBuilder: function (e, t) {
          var r = new W.MathNode("mglyph", []);
          r.setAttribute("alt", e.alt);
          var i = Le(e.height, t), a = 0;
          if (e.totalheight.number > 0 && (a = Le(e.totalheight, t) - i, a = a.toFixed(2), r.setAttribute("valign", "-" + a + "em")), r.setAttribute("height", i + a + "em"), e.width.number > 0) {
            var u = Le(e.width, t);
            r.setAttribute("width", u + "em");
          }
          return r.setAttribute("src", e.src), r;
        }
      }), ee({
        type: "kern", names: ["\\kern", "\\mkern", "\\hskip", "\\mskip"], props: { numArgs: 1, argTypes: ["size"], primitive: true, allowedInText: true }, handler: function (e, t) {
          var r = e.parser, i = e.funcName, a = de(t[0], "size");
          if (r.settings.strict) {
            var u = i[1] === "m", p = a.value.unit === "mu";
            u ? (p || r.settings.reportNonstrict("mathVsTextUnits", "LaTeX's " + i + " supports only mu units, " + ("not " + a.value.unit + " units")), r.mode !== "math" && r.settings.reportNonstrict("mathVsTextUnits", "LaTeX's " + i + " works only in math mode")) : p && r.settings.reportNonstrict("mathVsTextUnits", "LaTeX's " + i + " doesn't support mu units");
          }
          return { type: "kern", mode: r.mode, dimension: a.value };
        }, htmlBuilder: function (e, t) {
          return L.makeGlue(e.dimension, t);
        }, mathmlBuilder: function (e, t) {
          var r = Le(e.dimension, t);
          return new W.SpaceNode(r);
        }
      }), ee({
        type: "lap", names: ["\\mathllap", "\\mathrlap", "\\mathclap"], props: { numArgs: 1, allowedInText: true }, handler: function (e, t) {
          var r = e.parser, i = e.funcName, a = t[0];
          return { type: "lap", mode: r.mode, alignment: i.slice(5), body: a };
        }, htmlBuilder: function (e, t) {
          var r;
          e.alignment === "clap" ? (r = L.makeSpan([], [be(e.body, t)]), r = L.makeSpan(["inner"], [r], t)) : r = L.makeSpan(["inner"], [be(e.body, t)]);
          var i = L.makeSpan(["fix"], []), a = L.makeSpan([e.alignment], [r, i], t), u = L.makeSpan(["strut"]);
          return u.style.height = a.height + a.depth + "em", u.style.verticalAlign = -a.depth + "em", a.children.unshift(u), a = L.makeSpan(["thinbox"], [a], t), L.makeSpan(["mord", "vbox"], [a], t);
        }, mathmlBuilder: function (e, t) {
          var r = new W.MathNode("mpadded", [Ee(e.body, t)]);
          if (e.alignment !== "rlap") {
            var i = e.alignment === "llap" ? "-1" : "-0.5";
            r.setAttribute("lspace", i + "width");
          }
          return r.setAttribute("width", "0px"), r;
        }
      }), ee({
        type: "styling", names: ["\\(", "$"], props: { numArgs: 0, allowedInText: true, allowedInMath: false }, handler: function (e, t) {
          var r = e.funcName, i = e.parser, a = i.mode;
          i.switchMode("math");
          var u = r === "\\(" ? "\\)" : "$", p = i.parseExpression(false, u);
          return i.expect(u), i.switchMode(a), { type: "styling", mode: i.mode, style: "text", body: p };
        }
      }), ee({
        type: "text", names: ["\\)", "\\]"], props: { numArgs: 0, allowedInText: true, allowedInMath: false }, handler: function (e, t) {
          throw new m("Mismatched " + e.funcName);
        }
      });
      var la = function (e, t) {
        switch (t.style.size) {
          case ne.DISPLAY.size:
            return e.display;
          case ne.TEXT.size:
            return e.text;
          case ne.SCRIPT.size:
            return e.script;
          case ne.SCRIPTSCRIPT.size:
            return e.scriptscript;
          default:
            return e.text;
        }
      };
      ee({
        type: "mathchoice", names: ["\\mathchoice"], props: { numArgs: 4, primitive: true }, handler: function (e, t) {
          var r = e.parser;
          return { type: "mathchoice", mode: r.mode, display: Ue(t[0]), text: Ue(t[1]), script: Ue(t[2]), scriptscript: Ue(t[3]) };
        }, htmlBuilder: function (e, t) {
          var r = la(e, t), i = Ze(r, t, false);
          return L.makeFragment(i);
        }, mathmlBuilder: function (e, t) {
          var r = la(e, t);
          return Ot(r, t);
        }
      });
      var ua = function (e, t, r, i, a, u, p) {
        e = L.makeSpan([], [e]);
        var x = r && H.isCharacterBox(r), k, C;
        if (t) {
          var I = be(t, i.havingStyle(a.sup()), i);
          C = { elem: I, kern: Math.max(i.fontMetrics().bigOpSpacing1, i.fontMetrics().bigOpSpacing3 - I.depth) };
        }
        if (r) {
          var R = be(r, i.havingStyle(a.sub()), i);
          k = { elem: R, kern: Math.max(i.fontMetrics().bigOpSpacing2, i.fontMetrics().bigOpSpacing4 - R.height) };
        }
        var V;
        if (C && k) {
          var G = i.fontMetrics().bigOpSpacing5 + k.elem.height + k.elem.depth + k.kern + e.depth + p;
          V = L.makeVList({ positionType: "bottom", positionData: G, children: [{ type: "kern", size: i.fontMetrics().bigOpSpacing5 }, { type: "elem", elem: k.elem, marginLeft: -u + "em" }, { type: "kern", size: k.kern }, { type: "elem", elem: e }, { type: "kern", size: C.kern }, { type: "elem", elem: C.elem, marginLeft: u + "em" }, { type: "kern", size: i.fontMetrics().bigOpSpacing5 }] }, i);
        } else if (k) {
          var Q = e.height - p;
          V = L.makeVList({ positionType: "top", positionData: Q, children: [{ type: "kern", size: i.fontMetrics().bigOpSpacing5 }, { type: "elem", elem: k.elem, marginLeft: -u + "em" }, { type: "kern", size: k.kern }, { type: "elem", elem: e }] }, i);
        } else if (C) {
          var K = e.depth + p;
          V = L.makeVList({ positionType: "bottom", positionData: K, children: [{ type: "elem", elem: e }, { type: "kern", size: C.kern }, { type: "elem", elem: C.elem, marginLeft: u + "em" }, { type: "kern", size: i.fontMetrics().bigOpSpacing5 }] }, i);
        } else
          return e;
        var ae = [V];
        if (k && u !== 0 && !x) {
          var ue = L.makeSpan(["mspace"], [], i);
          ue.style.marginRight = u + "em", ae.unshift(ue);
        }
        return L.makeSpan(["mop", "op-limits"], ae, i);
      }, oa = ["\\smallint"], o0 = function (e, t) {
        var r, i, a = false, u;
        e.type === "supsub" ? (r = e.sup, i = e.sub, u = de(e.base, "op"), a = true) : u = de(e, "op");
        var p = t.style, x = false;
        p.size === ne.DISPLAY.size && u.symbol && !H.contains(oa, u.name) && (x = true);
        var k;
        if (u.symbol) {
          var C = x ? "Size2-Regular" : "Size1-Regular", I = "";
          if ((u.name === "\\oiint" || u.name === "\\oiiint") && (I = u.name.substr(1), u.name = I === "oiint" ? "\\iint" : "\\iiint"), k = L.makeSymbol(u.name, C, "math", t, ["mop", "op-symbol", x ? "large-op" : "small-op"]), I.length > 0) {
            var R = k.italic, V = L.staticSvg(I + "Size" + (x ? "2" : "1"), t);
            k = L.makeVList({ positionType: "individualShift", children: [{ type: "elem", elem: k, shift: 0 }, { type: "elem", elem: V, shift: x ? 0.08 : 0 }] }, t), u.name = "\\" + I, k.classes.unshift("mop"), k.italic = R;
          }
        } else if (u.body) {
          var G = Ze(u.body, t, true);
          G.length === 1 && G[0] instanceof _e ? (k = G[0], k.classes[0] = "mop") : k = L.makeSpan(["mop"], G, t);
        } else {
          for (var Q = [], K = 1; K < u.name.length; K++)
            Q.push(L.mathsym(u.name[K], u.mode, t));
          k = L.makeSpan(["mop"], Q, t);
        }
        var ae = 0, ue = 0;
        return (k instanceof _e || u.name === "\\oiint" || u.name === "\\oiiint") && !u.suppressBaseShift && (ae = (k.height - k.depth) / 2 - t.fontMetrics().axisHeight, ue = k.italic), a ? ua(k, r, i, t, p, ue, ae) : (ae && (k.style.position = "relative", k.style.top = ae + "em"), k);
      }, S0 = function (e, t) {
        var r;
        if (e.symbol)
          r = new ot("mo", [st(e.name, e.mode)]), H.contains(oa, e.name) && r.setAttribute("largeop", "false");
        else if (e.body)
          r = new ot("mo", nt(e.body, t));
        else {
          r = new ot("mi", [new y0(e.name.slice(1))]);
          var i = new ot("mo", [st("\u2061", "text")]);
          e.parentIsSupSub ? r = new ot("mrow", [r, i]) : r = Ci([r, i]);
        }
        return r;
      }, I1 = { "\u220F": "\\prod", "\u2210": "\\coprod", "\u2211": "\\sum", "\u22C0": "\\bigwedge", "\u22C1": "\\bigvee", "\u22C2": "\\bigcap", "\u22C3": "\\bigcup", "\u2A00": "\\bigodot", "\u2A01": "\\bigoplus", "\u2A02": "\\bigotimes", "\u2A04": "\\biguplus", "\u2A06": "\\bigsqcup" };
      ee({
        type: "op", names: ["\\coprod", "\\bigvee", "\\bigwedge", "\\biguplus", "\\bigcap", "\\bigcup", "\\intop", "\\prod", "\\sum", "\\bigotimes", "\\bigoplus", "\\bigodot", "\\bigsqcup", "\\smallint", "\u220F", "\u2210", "\u2211", "\u22C0", "\u22C1", "\u22C2", "\u22C3", "\u2A00", "\u2A01", "\u2A02", "\u2A04", "\u2A06"], props: { numArgs: 0 }, handler: function (e, t) {
          var r = e.parser, i = e.funcName, a = i;
          return a.length === 1 && (a = I1[a]), { type: "op", mode: r.mode, limits: true, parentIsSupSub: false, symbol: true, name: a };
        }, htmlBuilder: o0, mathmlBuilder: S0
      }), ee({
        type: "op", names: ["\\mathop"], props: { numArgs: 1, primitive: true }, handler: function (e, t) {
          var r = e.parser, i = t[0];
          return { type: "op", mode: r.mode, limits: false, parentIsSupSub: false, symbol: false, body: Ue(i) };
        }, htmlBuilder: o0, mathmlBuilder: S0
      });
      var L1 = { "\u222B": "\\int", "\u222C": "\\iint", "\u222D": "\\iiint", "\u222E": "\\oint", "\u222F": "\\oiint", "\u2230": "\\oiiint" };
      ee({
        type: "op", names: ["\\arcsin", "\\arccos", "\\arctan", "\\arctg", "\\arcctg", "\\arg", "\\ch", "\\cos", "\\cosec", "\\cosh", "\\cot", "\\cotg", "\\coth", "\\csc", "\\ctg", "\\cth", "\\deg", "\\dim", "\\exp", "\\hom", "\\ker", "\\lg", "\\ln", "\\log", "\\sec", "\\sin", "\\sinh", "\\sh", "\\tan", "\\tanh", "\\tg", "\\th"], props: { numArgs: 0 }, handler: function (e) {
          var t = e.parser, r = e.funcName;
          return { type: "op", mode: t.mode, limits: false, parentIsSupSub: false, symbol: false, name: r };
        }, htmlBuilder: o0, mathmlBuilder: S0
      }), ee({
        type: "op", names: ["\\det", "\\gcd", "\\inf", "\\lim", "\\max", "\\min", "\\Pr", "\\sup"], props: { numArgs: 0 }, handler: function (e) {
          var t = e.parser, r = e.funcName;
          return { type: "op", mode: t.mode, limits: true, parentIsSupSub: false, symbol: false, name: r };
        }, htmlBuilder: o0, mathmlBuilder: S0
      }), ee({
        type: "op", names: ["\\int", "\\iint", "\\iiint", "\\oint", "\\oiint", "\\oiiint", "\u222B", "\u222C", "\u222D", "\u222E", "\u222F", "\u2230"], props: { numArgs: 0 }, handler: function (e) {
          var t = e.parser, r = e.funcName, i = r;
          return i.length === 1 && (i = L1[i]), { type: "op", mode: t.mode, limits: false, parentIsSupSub: false, symbol: true, name: i };
        }, htmlBuilder: o0, mathmlBuilder: S0
      });
      var sa = {}, q1 = sa;
      function b(o, e) {
        sa[o] = e;
      }
      b("\\noexpand", function (o) {
        var e = o.popToken();
        return o.isExpandable(e.text) && (e.noexpand = true, e.treatAsRelax = true), { tokens: [e], numArgs: 0 };
      }), b("\\expandafter", function (o) {
        var e = o.popToken();
        return o.expandOnce(true), { tokens: [e], numArgs: 0 };
      }), b("\\@firstoftwo", function (o) {
        var e = o.consumeArgs(2);
        return { tokens: e[0], numArgs: 0 };
      }), b("\\@secondoftwo", function (o) {
        var e = o.consumeArgs(2);
        return { tokens: e[1], numArgs: 0 };
      }), b("\\@ifnextchar", function (o) {
        var e = o.consumeArgs(3);
        o.consumeSpaces();
        var t = o.future();
        return e[0].length === 1 && e[0][0].text === t.text ? { tokens: e[1], numArgs: 0 } : { tokens: e[2], numArgs: 0 };
      }), b("\\@ifstar", "\\@ifnextchar *{\\@firstoftwo{#1}}"), b("\\TextOrMath", function (o) {
        var e = o.consumeArgs(2);
        return o.mode === "text" ? { tokens: e[0], numArgs: 0 } : { tokens: e[1], numArgs: 0 };
      });
      var ma = { "0": 0, "1": 1, "2": 2, "3": 3, "4": 4, "5": 5, "6": 6, "7": 7, "8": 8, "9": 9, a: 10, A: 10, b: 11, B: 11, c: 12, C: 12, d: 13, D: 13, e: 14, E: 14, f: 15, F: 15 };
      b("\\char", function (o) {
        var e = o.popToken(), t, r = "";
        if (e.text === "'")
          t = 8, e = o.popToken();
        else if (e.text === '"')
          t = 16, e = o.popToken();
        else if (e.text === "`")
          if (e = o.popToken(), e.text[0] === "\\")
            r = e.text.charCodeAt(1);
          else {
            if (e.text === "EOF")
              throw new m("\\char` missing argument");
            r = e.text.charCodeAt(0);
          }
        else
          t = 10;
        if (t) {
          if (r = ma[e.text], r == null || r >= t)
            throw new m("Invalid base-" + t + " digit " + e.text);
          for (var i; (i = ma[o.future().text]) != null && i < t;)
            r *= t, r += i, o.popToken();
        }
        return "\\@char{" + r + "}";
      });
      var nn = function (e, t, r) {
        var i = e.consumeArg().tokens;
        if (i.length !== 1)
          throw new m("\\newcommand's first argument must be a macro name");
        var a = i[0].text, u = e.isDefined(a);
        if (u && !t)
          throw new m("\\newcommand{" + a + "} attempting to redefine " + (a + "; use \\renewcommand"));
        if (!u && !r)
          throw new m("\\renewcommand{" + a + "} when command " + a + " does not yet exist; use \\newcommand");
        var p = 0;
        if (i = e.consumeArg().tokens, i.length === 1 && i[0].text === "[") {
          for (var x = "", k = e.expandNextToken(); k.text !== "]" && k.text !== "EOF";)
            x += k.text, k = e.expandNextToken();
          if (!x.match(/^\s*[0-9]+\s*$/))
            throw new m("Invalid number of arguments: " + x);
          p = parseInt(x), i = e.consumeArg().tokens;
        }
        return e.macros.set(a, { tokens: i, numArgs: p }), "";
      };
      b("\\newcommand", function (o) {
        return nn(o, false, true);
      }), b("\\renewcommand", function (o) {
        return nn(o, true, false);
      }), b("\\providecommand", function (o) {
        return nn(o, true, true);
      }), b("\\message", function (o) {
        var e = o.consumeArgs(1)[0];
        return console.log(e.reverse().map(function (t) {
          return t.text;
        }).join("")), "";
      }), b("\\errmessage", function (o) {
        var e = o.consumeArgs(1)[0];
        return console.error(e.reverse().map(function (t) {
          return t.text;
        }).join("")), "";
      }), b("\\show", function (o) {
        var e = o.popToken(), t = e.text;
        return console.log(e, o.macros.get(t), Ht[t], Ne.math[t], Ne.text[t]), "";
      }), b("\\bgroup", "{"), b("\\egroup", "}"), b("~", "\\nobreakspace"), b("\\lq", "`"), b("\\rq", "'"), b("\\aa", "\\r a"), b("\\AA", "\\r A"), b("\\textcopyright", "\\html@mathml{\\textcircled{c}}{\\char`\xA9}"), b("\\copyright", "\\TextOrMath{\\textcopyright}{\\text{\\textcopyright}}"), b("\\textregistered", "\\html@mathml{\\textcircled{\\scriptsize R}}{\\char`\xAE}"), b("\u212C", "\\mathscr{B}"), b("\u2130", "\\mathscr{E}"), b("\u2131", "\\mathscr{F}"), b("\u210B", "\\mathscr{H}"), b("\u2110", "\\mathscr{I}"), b("\u2112", "\\mathscr{L}"), b("\u2133", "\\mathscr{M}"), b("\u211B", "\\mathscr{R}"), b("\u212D", "\\mathfrak{C}"), b("\u210C", "\\mathfrak{H}"), b("\u2128", "\\mathfrak{Z}"), b("\\Bbbk", "\\Bbb{k}"), b("\xB7", "\\cdotp"), b("\\llap", "\\mathllap{\\textrm{#1}}"), b("\\rlap", "\\mathrlap{\\textrm{#1}}"), b("\\clap", "\\mathclap{\\textrm{#1}}"), b("\\mathstrut", "\\vphantom{(}"), b("\\underbar", "\\underline{\\text{#1}}"), b("\\not", '\\html@mathml{\\mathrel{\\mathrlap\\@not}}{\\char"338}'), b("\\neq", "\\html@mathml{\\mathrel{\\not=}}{\\mathrel{\\char`\u2260}}"), b("\\ne", "\\neq"), b("\u2260", "\\neq"), b("\\notin", "\\html@mathml{\\mathrel{{\\in}\\mathllap{/\\mskip1mu}}}{\\mathrel{\\char`\u2209}}"), b("\u2209", "\\notin"), b("\u2258", "\\html@mathml{\\mathrel{=\\kern{-1em}\\raisebox{0.4em}{$\\scriptsize\\frown$}}}{\\mathrel{\\char`\u2258}}"), b("\u2259", "\\html@mathml{\\stackrel{\\tiny\\wedge}{=}}{\\mathrel{\\char`\u2258}}"), b("\u225A", "\\html@mathml{\\stackrel{\\tiny\\vee}{=}}{\\mathrel{\\char`\u225A}}"), b("\u225B", "\\html@mathml{\\stackrel{\\scriptsize\\star}{=}}{\\mathrel{\\char`\u225B}}"), b("\u225D", "\\html@mathml{\\stackrel{\\tiny\\mathrm{def}}{=}}{\\mathrel{\\char`\u225D}}"), b("\u225E", "\\html@mathml{\\stackrel{\\tiny\\mathrm{m}}{=}}{\\mathrel{\\char`\u225E}}"), b("\u225F", "\\html@mathml{\\stackrel{\\tiny?}{=}}{\\mathrel{\\char`\u225F}}"), b("\u27C2", "\\perp"), b("\u203C", "\\mathclose{!\\mkern-0.8mu!}"), b("\u220C", "\\notni"), b("\u231C", "\\ulcorner"), b("\u231D", "\\urcorner"), b("\u231E", "\\llcorner"), b("\u231F", "\\lrcorner"), b("\xA9", "\\copyright"), b("\xAE", "\\textregistered"), b("\uFE0F", "\\textregistered"), b("\\ulcorner", '\\html@mathml{\\@ulcorner}{\\mathop{\\char"231c}}'), b("\\urcorner", '\\html@mathml{\\@urcorner}{\\mathop{\\char"231d}}'), b("\\llcorner", '\\html@mathml{\\@llcorner}{\\mathop{\\char"231e}}'), b("\\lrcorner", '\\html@mathml{\\@lrcorner}{\\mathop{\\char"231f}}'), b("\\vdots", "\\mathord{\\varvdots\\rule{0pt}{15pt}}"), b("\u22EE", "\\vdots"), b("\\varGamma", "\\mathit{\\Gamma}"), b("\\varDelta", "\\mathit{\\Delta}"), b("\\varTheta", "\\mathit{\\Theta}"), b("\\varLambda", "\\mathit{\\Lambda}"), b("\\varXi", "\\mathit{\\Xi}"), b("\\varPi", "\\mathit{\\Pi}"), b("\\varSigma", "\\mathit{\\Sigma}"), b("\\varUpsilon", "\\mathit{\\Upsilon}"), b("\\varPhi", "\\mathit{\\Phi}"), b("\\varPsi", "\\mathit{\\Psi}"), b("\\varOmega", "\\mathit{\\Omega}"), b("\\substack", "\\begin{subarray}{c}#1\\end{subarray}"), b("\\colon", "\\nobreak\\mskip2mu\\mathpunct{}\\mathchoice{\\mkern-3mu}{\\mkern-3mu}{}{}{:}\\mskip6mu"), b("\\boxed", "\\fbox{$\\displaystyle{#1}$}"), b("\\iff", "\\DOTSB\\;\\Longleftrightarrow\\;"), b("\\implies", "\\DOTSB\\;\\Longrightarrow\\;"), b("\\impliedby", "\\DOTSB\\;\\Longleftarrow\\;");
      var ha = { ",": "\\dotsc", "\\not": "\\dotsb", "+": "\\dotsb", "=": "\\dotsb", "<": "\\dotsb", ">": "\\dotsb", "-": "\\dotsb", "*": "\\dotsb", ":": "\\dotsb", "\\DOTSB": "\\dotsb", "\\coprod": "\\dotsb", "\\bigvee": "\\dotsb", "\\bigwedge": "\\dotsb", "\\biguplus": "\\dotsb", "\\bigcap": "\\dotsb", "\\bigcup": "\\dotsb", "\\prod": "\\dotsb", "\\sum": "\\dotsb", "\\bigotimes": "\\dotsb", "\\bigoplus": "\\dotsb", "\\bigodot": "\\dotsb", "\\bigsqcup": "\\dotsb", "\\And": "\\dotsb", "\\longrightarrow": "\\dotsb", "\\Longrightarrow": "\\dotsb", "\\longleftarrow": "\\dotsb", "\\Longleftarrow": "\\dotsb", "\\longleftrightarrow": "\\dotsb", "\\Longleftrightarrow": "\\dotsb", "\\mapsto": "\\dotsb", "\\longmapsto": "\\dotsb", "\\hookrightarrow": "\\dotsb", "\\doteq": "\\dotsb", "\\mathbin": "\\dotsb", "\\mathrel": "\\dotsb", "\\relbar": "\\dotsb", "\\Relbar": "\\dotsb", "\\xrightarrow": "\\dotsb", "\\xleftarrow": "\\dotsb", "\\DOTSI": "\\dotsi", "\\int": "\\dotsi", "\\oint": "\\dotsi", "\\iint": "\\dotsi", "\\iiint": "\\dotsi", "\\iiiint": "\\dotsi", "\\idotsint": "\\dotsi", "\\DOTSX": "\\dotsx" };
      b("\\dots", function (o) {
        var e = "\\dotso", t = o.expandAfterFuture().text;
        return t in ha ? e = ha[t] : (t.substr(0, 4) === "\\not" || t in Ne.math && H.contains(["bin", "rel"], Ne.math[t].group)) && (e = "\\dotsb"), e;
      });
      var an = { ")": true, "]": true, "\\rbrack": true, "\\}": true, "\\rbrace": true, "\\rangle": true, "\\rceil": true, "\\rfloor": true, "\\rgroup": true, "\\rmoustache": true, "\\right": true, "\\bigr": true, "\\biggr": true, "\\Bigr": true, "\\Biggr": true, $: true, ";": true, ".": true, ",": true };
      b("\\dotso", function (o) {
        var e = o.future().text;
        return e in an ? "\\ldots\\," : "\\ldots";
      }), b("\\dotsc", function (o) {
        var e = o.future().text;
        return e in an && e !== "," ? "\\ldots\\," : "\\ldots";
      }), b("\\cdots", function (o) {
        var e = o.future().text;
        return e in an ? "\\@cdots\\," : "\\@cdots";
      }), b("\\dotsb", "\\cdots"), b("\\dotsm", "\\cdots"), b("\\dotsi", "\\!\\cdots"), b("\\dotsx", "\\ldots\\,"), b("\\DOTSI", "\\relax"), b("\\DOTSB", "\\relax"), b("\\DOTSX", "\\relax"), b("\\tmspace", "\\TextOrMath{\\kern#1#3}{\\mskip#1#2}\\relax"), b("\\,", "\\tmspace+{3mu}{.1667em}"), b("\\thinspace", "\\,"), b("\\>", "\\mskip{4mu}"), b("\\:", "\\tmspace+{4mu}{.2222em}"), b("\\medspace", "\\:"), b("\\;", "\\tmspace+{5mu}{.2777em}"), b("\\thickspace", "\\;"), b("\\!", "\\tmspace-{3mu}{.1667em}"), b("\\negthinspace", "\\!"), b("\\negmedspace", "\\tmspace-{4mu}{.2222em}"), b("\\negthickspace", "\\tmspace-{5mu}{.277em}"), b("\\enspace", "\\kern.5em "), b("\\enskip", "\\hskip.5em\\relax"), b("\\quad", "\\hskip1em\\relax"), b("\\qquad", "\\hskip2em\\relax"), b("\\tag", "\\@ifstar\\tag@literal\\tag@paren"), b("\\tag@paren", "\\tag@literal{({#1})}"), b("\\tag@literal", function (o) {
        if (o.macros.get("\\df@tag"))
          throw new m("Multiple \\tag");
        return "\\gdef\\df@tag{\\text{#1}}";
      }), b("\\bmod", "\\mathchoice{\\mskip1mu}{\\mskip1mu}{\\mskip5mu}{\\mskip5mu}\\mathbin{\\rm mod}\\mathchoice{\\mskip1mu}{\\mskip1mu}{\\mskip5mu}{\\mskip5mu}"), b("\\pod", "\\allowbreak\\mathchoice{\\mkern18mu}{\\mkern8mu}{\\mkern8mu}{\\mkern8mu}(#1)"), b("\\pmod", "\\pod{{\\rm mod}\\mkern6mu#1}"), b("\\mod", "\\allowbreak\\mathchoice{\\mkern18mu}{\\mkern12mu}{\\mkern12mu}{\\mkern12mu}{\\rm mod}\\,\\,#1"), b("\\pmb", "\\html@mathml{\\@binrel{#1}{\\mathrlap{#1}\\kern0.5px#1}}{\\mathbf{#1}}"), b("\\newline", "\\\\\\relax"), b("\\TeX", "\\textrm{\\html@mathml{T\\kern-.1667em\\raisebox{-.5ex}{E}\\kern-.125emX}{TeX}}");
      var ca = rt["Main-Regular"]["T".charCodeAt(0)][1] - 0.7 * rt["Main-Regular"]["A".charCodeAt(0)][1] + "em";
      b("\\LaTeX", "\\textrm{\\html@mathml{" + ("L\\kern-.36em\\raisebox{" + ca + "}{\\scriptstyle A}") + "\\kern-.15em\\TeX}{LaTeX}}"), b("\\KaTeX", "\\textrm{\\html@mathml{" + ("K\\kern-.17em\\raisebox{" + ca + "}{\\scriptstyle A}") + "\\kern-.15em\\TeX}{KaTeX}}"), b("\\hspace", "\\@ifstar\\@hspacer\\@hspace"), b("\\@hspace", "\\hskip #1\\relax"), b("\\@hspacer", "\\rule{0pt}{0pt}\\hskip #1\\relax"), b("\\ordinarycolon", ":"), b("\\vcentcolon", "\\mathrel{\\mathop\\ordinarycolon}"), b("\\dblcolon", '\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-.9mu}\\vcentcolon}}{\\mathop{\\char"2237}}'), b("\\coloneqq", '\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-1.2mu}=}}{\\mathop{\\char"2254}}'), b("\\Coloneqq", '\\html@mathml{\\mathrel{\\dblcolon\\mathrel{\\mkern-1.2mu}=}}{\\mathop{\\char"2237\\char"3d}}'), b("\\coloneq", '\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-1.2mu}\\mathrel{-}}}{\\mathop{\\char"3a\\char"2212}}'), b("\\Coloneq", '\\html@mathml{\\mathrel{\\dblcolon\\mathrel{\\mkern-1.2mu}\\mathrel{-}}}{\\mathop{\\char"2237\\char"2212}}'), b("\\eqqcolon", '\\html@mathml{\\mathrel{=\\mathrel{\\mkern-1.2mu}\\vcentcolon}}{\\mathop{\\char"2255}}'), b("\\Eqqcolon", '\\html@mathml{\\mathrel{=\\mathrel{\\mkern-1.2mu}\\dblcolon}}{\\mathop{\\char"3d\\char"2237}}'), b("\\eqcolon", '\\html@mathml{\\mathrel{\\mathrel{-}\\mathrel{\\mkern-1.2mu}\\vcentcolon}}{\\mathop{\\char"2239}}'), b("\\Eqcolon", '\\html@mathml{\\mathrel{\\mathrel{-}\\mathrel{\\mkern-1.2mu}\\dblcolon}}{\\mathop{\\char"2212\\char"2237}}'), b("\\colonapprox", '\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-1.2mu}\\approx}}{\\mathop{\\char"3a\\char"2248}}'), b("\\Colonapprox", '\\html@mathml{\\mathrel{\\dblcolon\\mathrel{\\mkern-1.2mu}\\approx}}{\\mathop{\\char"2237\\char"2248}}'), b("\\colonsim", '\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-1.2mu}\\sim}}{\\mathop{\\char"3a\\char"223c}}'), b("\\Colonsim", '\\html@mathml{\\mathrel{\\dblcolon\\mathrel{\\mkern-1.2mu}\\sim}}{\\mathop{\\char"2237\\char"223c}}'), b("\u2237", "\\dblcolon"), b("\u2239", "\\eqcolon"), b("\u2254", "\\coloneqq"), b("\u2255", "\\eqqcolon"), b("\u2A74", "\\Coloneqq"), b("\\ratio", "\\vcentcolon"), b("\\coloncolon", "\\dblcolon"), b("\\colonequals", "\\coloneqq"), b("\\coloncolonequals", "\\Coloneqq"), b("\\equalscolon", "\\eqqcolon"), b("\\equalscoloncolon", "\\Eqqcolon"), b("\\colonminus", "\\coloneq"), b("\\coloncolonminus", "\\Coloneq"), b("\\minuscolon", "\\eqcolon"), b("\\minuscoloncolon", "\\Eqcolon"), b("\\coloncolonapprox", "\\Colonapprox"), b("\\coloncolonsim", "\\Colonsim"), b("\\simcolon", "\\mathrel{\\sim\\mathrel{\\mkern-1.2mu}\\vcentcolon}"), b("\\simcoloncolon", "\\mathrel{\\sim\\mathrel{\\mkern-1.2mu}\\dblcolon}"), b("\\approxcolon", "\\mathrel{\\approx\\mathrel{\\mkern-1.2mu}\\vcentcolon}"), b("\\approxcoloncolon", "\\mathrel{\\approx\\mathrel{\\mkern-1.2mu}\\dblcolon}"), b("\\notni", "\\html@mathml{\\not\\ni}{\\mathrel{\\char`\u220C}}"), b("\\limsup", "\\DOTSB\\operatorname*{lim\\,sup}"), b("\\liminf", "\\DOTSB\\operatorname*{lim\\,inf}"), b("\\injlim", "\\DOTSB\\operatorname*{inj\\,lim}"), b("\\projlim", "\\DOTSB\\operatorname*{proj\\,lim}"), b("\\varlimsup", "\\DOTSB\\operatorname*{\\overline{lim}}"), b("\\varliminf", "\\DOTSB\\operatorname*{\\underline{lim}}"), b("\\varinjlim", "\\DOTSB\\operatorname*{\\underrightarrow{lim}}"), b("\\varprojlim", "\\DOTSB\\operatorname*{\\underleftarrow{lim}}"), b("\\gvertneqq", "\\html@mathml{\\@gvertneqq}{\u2269}"), b("\\lvertneqq", "\\html@mathml{\\@lvertneqq}{\u2268}"), b("\\ngeqq", "\\html@mathml{\\@ngeqq}{\u2271}"), b("\\ngeqslant", "\\html@mathml{\\@ngeqslant}{\u2271}"), b("\\nleqq", "\\html@mathml{\\@nleqq}{\u2270}"), b("\\nleqslant", "\\html@mathml{\\@nleqslant}{\u2270}"), b("\\nshortmid", "\\html@mathml{\\@nshortmid}{\u2224}"), b("\\nshortparallel", "\\html@mathml{\\@nshortparallel}{\u2226}"), b("\\nsubseteqq", "\\html@mathml{\\@nsubseteqq}{\u2288}"), b("\\nsupseteqq", "\\html@mathml{\\@nsupseteqq}{\u2289}"), b("\\varsubsetneq", "\\html@mathml{\\@varsubsetneq}{\u228A}"), b("\\varsubsetneqq", "\\html@mathml{\\@varsubsetneqq}{\u2ACB}"), b("\\varsupsetneq", "\\html@mathml{\\@varsupsetneq}{\u228B}"), b("\\varsupsetneqq", "\\html@mathml{\\@varsupsetneqq}{\u2ACC}"), b("\\imath", "\\html@mathml{\\@imath}{\u0131}"), b("\\jmath", "\\html@mathml{\\@jmath}{\u0237}"), b("\\llbracket", "\\html@mathml{\\mathopen{[\\mkern-3.2mu[}}{\\mathopen{\\char`\u27E6}}"), b("\\rrbracket", "\\html@mathml{\\mathclose{]\\mkern-3.2mu]}}{\\mathclose{\\char`\u27E7}}"), b("\u27E6", "\\llbracket"), b("\u27E7", "\\rrbracket"), b("\\lBrace", "\\html@mathml{\\mathopen{\\{\\mkern-3.2mu[}}{\\mathopen{\\char`\u2983}}"), b("\\rBrace", "\\html@mathml{\\mathclose{]\\mkern-3.2mu\\}}}{\\mathclose{\\char`\u2984}}"), b("\u2983", "\\lBrace"), b("\u2984", "\\rBrace"), b("\\minuso", "\\mathbin{\\html@mathml{{\\mathrlap{\\mathchoice{\\kern{0.145em}}{\\kern{0.145em}}{\\kern{0.1015em}}{\\kern{0.0725em}}\\circ}{-}}}{\\char`\u29B5}}"), b("\u29B5", "\\minuso"), b("\\darr", "\\downarrow"), b("\\dArr", "\\Downarrow"), b("\\Darr", "\\Downarrow"), b("\\lang", "\\langle"), b("\\rang", "\\rangle"), b("\\uarr", "\\uparrow"), b("\\uArr", "\\Uparrow"), b("\\Uarr", "\\Uparrow"), b("\\N", "\\mathbb{N}"), b("\\R", "\\mathbb{R}"), b("\\Z", "\\mathbb{Z}"), b("\\alef", "\\aleph"), b("\\alefsym", "\\aleph"), b("\\Alpha", "\\mathrm{A}"), b("\\Beta", "\\mathrm{B}"), b("\\bull", "\\bullet"), b("\\Chi", "\\mathrm{X}"), b("\\clubs", "\\clubsuit"), b("\\cnums", "\\mathbb{C}"), b("\\Complex", "\\mathbb{C}"), b("\\Dagger", "\\ddagger"), b("\\diamonds", "\\diamondsuit"), b("\\empty", "\\emptyset"), b("\\Epsilon", "\\mathrm{E}"), b("\\Eta", "\\mathrm{H}"), b("\\exist", "\\exists"), b("\\harr", "\\leftrightarrow"), b("\\hArr", "\\Leftrightarrow"), b("\\Harr", "\\Leftrightarrow"), b("\\hearts", "\\heartsuit"), b("\\image", "\\Im"), b("\\infin", "\\infty"), b("\\Iota", "\\mathrm{I}"), b("\\isin", "\\in"), b("\\Kappa", "\\mathrm{K}"), b("\\larr", "\\leftarrow"), b("\\lArr", "\\Leftarrow"), b("\\Larr", "\\Leftarrow"), b("\\lrarr", "\\leftrightarrow"), b("\\lrArr", "\\Leftrightarrow"), b("\\Lrarr", "\\Leftrightarrow"), b("\\Mu", "\\mathrm{M}"), b("\\natnums", "\\mathbb{N}"), b("\\Nu", "\\mathrm{N}"), b("\\Omicron", "\\mathrm{O}"), b("\\plusmn", "\\pm"), b("\\rarr", "\\rightarrow"), b("\\rArr", "\\Rightarrow"), b("\\Rarr", "\\Rightarrow"), b("\\real", "\\Re"), b("\\reals", "\\mathbb{R}"), b("\\Reals", "\\mathbb{R}"), b("\\Rho", "\\mathrm{P}"), b("\\sdot", "\\cdot"), b("\\sect", "\\S"), b("\\spades", "\\spadesuit"), b("\\sub", "\\subset"), b("\\sube", "\\subseteq"), b("\\supe", "\\supseteq"), b("\\Tau", "\\mathrm{T}"), b("\\thetasym", "\\vartheta"), b("\\weierp", "\\wp"), b("\\Zeta", "\\mathrm{Z}"), b("\\argmin", "\\DOTSB\\operatorname*{arg\\,min}"), b("\\argmax", "\\DOTSB\\operatorname*{arg\\,max}"), b("\\plim", "\\DOTSB\\mathop{\\operatorname{plim}}\\limits"), b("\\bra", "\\mathinner{\\langle{#1}|}"), b("\\ket", "\\mathinner{|{#1}\\rangle}"), b("\\braket", "\\mathinner{\\langle{#1}\\rangle}"), b("\\Bra", "\\left\\langle#1\\right|"), b("\\Ket", "\\left|#1\\right\\rangle"), b("\\angln", "{\\angl n}"), b("\\blue", "\\textcolor{##6495ed}{#1}"), b("\\orange", "\\textcolor{##ffa500}{#1}"), b("\\pink", "\\textcolor{##ff00af}{#1}"), b("\\red", "\\textcolor{##df0030}{#1}"), b("\\green", "\\textcolor{##28ae7b}{#1}"), b("\\gray", "\\textcolor{gray}{#1}"), b("\\purple", "\\textcolor{##9d38bd}{#1}"), b("\\blueA", "\\textcolor{##ccfaff}{#1}"), b("\\blueB", "\\textcolor{##80f6ff}{#1}"), b("\\blueC", "\\textcolor{##63d9ea}{#1}"), b("\\blueD", "\\textcolor{##11accd}{#1}"), b("\\blueE", "\\textcolor{##0c7f99}{#1}"), b("\\tealA", "\\textcolor{##94fff5}{#1}"), b("\\tealB", "\\textcolor{##26edd5}{#1}"), b("\\tealC", "\\textcolor{##01d1c1}{#1}"), b("\\tealD", "\\textcolor{##01a995}{#1}"), b("\\tealE", "\\textcolor{##208170}{#1}"), b("\\greenA", "\\textcolor{##b6ffb0}{#1}"), b("\\greenB", "\\textcolor{##8af281}{#1}"), b("\\greenC", "\\textcolor{##74cf70}{#1}"), b("\\greenD", "\\textcolor{##1fab54}{#1}"), b("\\greenE", "\\textcolor{##0d923f}{#1}"), b("\\goldA", "\\textcolor{##ffd0a9}{#1}"), b("\\goldB", "\\textcolor{##ffbb71}{#1}"), b("\\goldC", "\\textcolor{##ff9c39}{#1}"), b("\\goldD", "\\textcolor{##e07d10}{#1}"), b("\\goldE", "\\textcolor{##a75a05}{#1}"), b("\\redA", "\\textcolor{##fca9a9}{#1}"), b("\\redB", "\\textcolor{##ff8482}{#1}"), b("\\redC", "\\textcolor{##f9685d}{#1}"), b("\\redD", "\\textcolor{##e84d39}{#1}"), b("\\redE", "\\textcolor{##bc2612}{#1}"), b("\\maroonA", "\\textcolor{##ffbde0}{#1}"), b("\\maroonB", "\\textcolor{##ff92c6}{#1}"), b("\\maroonC", "\\textcolor{##ed5fa6}{#1}"), b("\\maroonD", "\\textcolor{##ca337c}{#1}"), b("\\maroonE", "\\textcolor{##9e034e}{#1}"), b("\\purpleA", "\\textcolor{##ddd7ff}{#1}"), b("\\purpleB", "\\textcolor{##c6b9fc}{#1}"), b("\\purpleC", "\\textcolor{##aa87ff}{#1}"), b("\\purpleD", "\\textcolor{##7854ab}{#1}"), b("\\purpleE", "\\textcolor{##543b78}{#1}"), b("\\mintA", "\\textcolor{##f5f9e8}{#1}"), b("\\mintB", "\\textcolor{##edf2df}{#1}"), b("\\mintC", "\\textcolor{##e0e5cc}{#1}"), b("\\grayA", "\\textcolor{##f6f7f7}{#1}"), b("\\grayB", "\\textcolor{##f0f1f2}{#1}"), b("\\grayC", "\\textcolor{##e3e5e6}{#1}"), b("\\grayD", "\\textcolor{##d6d8da}{#1}"), b("\\grayE", "\\textcolor{##babec2}{#1}"), b("\\grayF", "\\textcolor{##888d93}{#1}"), b("\\grayG", "\\textcolor{##626569}{#1}"), b("\\grayH", "\\textcolor{##3b3e40}{#1}"), b("\\grayI", "\\textcolor{##21242c}{#1}"), b("\\kaBlue", "\\textcolor{##314453}{#1}"), b("\\kaGreen", "\\textcolor{##71B307}{#1}");
      var pa = function (e, t) {
        var r, i, a = false, u;
        e.type === "supsub" ? (r = e.sup, i = e.sub, u = de(e.base, "operatorname"), a = true) : u = de(e, "operatorname");
        var p;
        if (u.body.length > 0) {
          for (var x = u.body.map(function (R) {
            var V = R.text;
            return typeof V == "string" ? { type: "textord", mode: R.mode, text: V } : R;
          }), k = Ze(x, t.withFont("mathrm"), true), C = 0; C < k.length; C++) {
            var I = k[C];
            I instanceof _e && (I.text = I.text.replace(/\u2212/, "-").replace(/\u2217/, "*"));
          }
          p = L.makeSpan(["mop"], k, t);
        } else
          p = L.makeSpan(["mop"], [], t);
        return a ? ua(p, r, i, t, t.style, 0, 0) : p;
      }, O1 = function (e, t) {
        for (var r = nt(e.body, t.withFont("mathrm")), i = true, a = 0; a < r.length; a++) {
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
          var x = r.map(function (I) {
            return I.toText();
          }).join("");
          r = [new W.TextNode(x)];
        }
        var k = new W.MathNode("mi", r);
        k.setAttribute("mathvariant", "normal");
        var C = new W.MathNode("mo", [st("\u2061", "text")]);
        return e.parentIsSupSub ? new W.MathNode("mrow", [k, C]) : W.newDocumentFragment([k, C]);
      };
      ee({
        type: "operatorname", names: ["\\operatorname@", "\\operatornamewithlimits"], props: { numArgs: 1 }, handler: function (e, t) {
          var r = e.parser, i = e.funcName, a = t[0];
          return { type: "operatorname", mode: r.mode, body: Ue(a), alwaysHandleSupSub: i === "\\operatornamewithlimits", limits: false, parentIsSupSub: false };
        }, htmlBuilder: pa, mathmlBuilder: O1
      }), b("\\operatorname", "\\@ifstar\\operatornamewithlimits\\operatorname@"), Kt({
        type: "ordgroup", htmlBuilder: function (e, t) {
          return e.semisimple ? L.makeFragment(Ze(e.body, t, false)) : L.makeSpan(["mord"], Ze(e.body, t, true), t);
        }, mathmlBuilder: function (e, t) {
          return Ot(e.body, t, true);
        }
      }), ee({
        type: "overline", names: ["\\overline"], props: { numArgs: 1 }, handler: function (e, t) {
          var r = e.parser, i = t[0];
          return { type: "overline", mode: r.mode, body: i };
        }, htmlBuilder: function (e, t) {
          var r = be(e.body, t.havingCrampedStyle()), i = L.makeLineSpan("overline-line", t), a = t.fontMetrics().defaultRuleThickness, u = L.makeVList({ positionType: "firstBaseline", children: [{ type: "elem", elem: r }, { type: "kern", size: 3 * a }, { type: "elem", elem: i }, { type: "kern", size: a }] }, t);
          return L.makeSpan(["mord", "overline"], [u], t);
        }, mathmlBuilder: function (e, t) {
          var r = new W.MathNode("mo", [new W.TextNode("\u203E")]);
          r.setAttribute("stretchy", "true");
          var i = new W.MathNode("mover", [Ee(e.body, t), r]);
          return i.setAttribute("accent", "true"), i;
        }
      }), ee({
        type: "phantom", names: ["\\phantom"], props: { numArgs: 1, allowedInText: true }, handler: function (e, t) {
          var r = e.parser, i = t[0];
          return { type: "phantom", mode: r.mode, body: Ue(i) };
        }, htmlBuilder: function (e, t) {
          var r = Ze(e.body, t.withPhantom(), false);
          return L.makeFragment(r);
        }, mathmlBuilder: function (e, t) {
          var r = nt(e.body, t);
          return new W.MathNode("mphantom", r);
        }
      }), ee({
        type: "hphantom", names: ["\\hphantom"], props: { numArgs: 1, allowedInText: true }, handler: function (e, t) {
          var r = e.parser, i = t[0];
          return { type: "hphantom", mode: r.mode, body: i };
        }, htmlBuilder: function (e, t) {
          var r = L.makeSpan([], [be(e.body, t.withPhantom())]);
          if (r.height = 0, r.depth = 0, r.children)
            for (var i = 0; i < r.children.length; i++)
              r.children[i].height = 0, r.children[i].depth = 0;
          return r = L.makeVList({ positionType: "firstBaseline", children: [{ type: "elem", elem: r }] }, t), L.makeSpan(["mord"], [r], t);
        }, mathmlBuilder: function (e, t) {
          var r = nt(Ue(e.body), t), i = new W.MathNode("mphantom", r), a = new W.MathNode("mpadded", [i]);
          return a.setAttribute("height", "0px"), a.setAttribute("depth", "0px"), a;
        }
      }), ee({
        type: "vphantom", names: ["\\vphantom"], props: { numArgs: 1, allowedInText: true }, handler: function (e, t) {
          var r = e.parser, i = t[0];
          return { type: "vphantom", mode: r.mode, body: i };
        }, htmlBuilder: function (e, t) {
          var r = L.makeSpan(["inner"], [be(e.body, t.withPhantom())]), i = L.makeSpan(["fix"], []);
          return L.makeSpan(["mord", "rlap"], [r, i], t);
        }, mathmlBuilder: function (e, t) {
          var r = nt(Ue(e.body), t), i = new W.MathNode("mphantom", r), a = new W.MathNode("mpadded", [i]);
          return a.setAttribute("width", "0px"), a;
        }
      }), ee({
        type: "raisebox", names: ["\\raisebox"], props: { numArgs: 2, argTypes: ["size", "hbox"], allowedInText: true }, handler: function (e, t) {
          var r = e.parser, i = de(t[0], "size").value, a = t[1];
          return { type: "raisebox", mode: r.mode, dy: i, body: a };
        }, htmlBuilder: function (e, t) {
          var r = be(e.body, t), i = Le(e.dy, t);
          return L.makeVList({ positionType: "shift", positionData: -i, children: [{ type: "elem", elem: r }] }, t);
        }, mathmlBuilder: function (e, t) {
          var r = new W.MathNode("mpadded", [Ee(e.body, t)]), i = e.dy.number + e.dy.unit;
          return r.setAttribute("voffset", i), r;
        }
      }), ee({
        type: "rule", names: ["\\rule"], props: { numArgs: 2, numOptionalArgs: 1, argTypes: ["size", "size", "size"] }, handler: function (e, t, r) {
          var i = e.parser, a = r[0], u = de(t[0], "size"), p = de(t[1], "size");
          return { type: "rule", mode: i.mode, shift: a && de(a, "size").value, width: u.value, height: p.value };
        }, htmlBuilder: function (e, t) {
          var r = L.makeSpan(["mord", "rule"], [], t), i = Le(e.width, t), a = Le(e.height, t), u = e.shift ? Le(e.shift, t) : 0;
          return r.style.borderRightWidth = i + "em", r.style.borderTopWidth = a + "em", r.style.bottom = u + "em", r.width = i, r.height = a + u, r.depth = -u, r.maxFontSize = a * 1.125 * t.sizeMultiplier, r;
        }, mathmlBuilder: function (e, t) {
          var r = Le(e.width, t), i = Le(e.height, t), a = e.shift ? Le(e.shift, t) : 0, u = t.color && t.getColor() || "black", p = new W.MathNode("mspace");
          p.setAttribute("mathbackground", u), p.setAttribute("width", r + "em"), p.setAttribute("height", i + "em");
          var x = new W.MathNode("mpadded", [p]);
          return a >= 0 ? x.setAttribute("height", "+" + a + "em") : (x.setAttribute("height", a + "em"), x.setAttribute("depth", "+" + -a + "em")), x.setAttribute("voffset", a + "em"), x;
        }
      });
      function fa(o, e, t) {
        for (var r = Ze(o, e, false), i = e.sizeMultiplier / t.sizeMultiplier, a = 0; a < r.length; a++) {
          var u = r[a].classes.indexOf("sizing");
          u < 0 ? Array.prototype.push.apply(r[a].classes, e.sizingClasses(t)) : r[a].classes[u + 1] === "reset-size" + e.size && (r[a].classes[u + 1] = "reset-size" + t.size), r[a].height *= i, r[a].depth *= i;
        }
        return L.makeFragment(r);
      }
      var da = ["\\tiny", "\\sixptsize", "\\scriptsize", "\\footnotesize", "\\small", "\\normalsize", "\\large", "\\Large", "\\LARGE", "\\huge", "\\Huge"], R1 = function (e, t) {
        var r = t.havingSize(e.size);
        return fa(e.body, r, t);
      };
      ee({
        type: "sizing", names: da, props: { numArgs: 0, allowedInText: true }, handler: function (e, t) {
          var r = e.breakOnTokenText, i = e.funcName, a = e.parser, u = a.parseExpression(false, r);
          return { type: "sizing", mode: a.mode, size: da.indexOf(i) + 1, body: u };
        }, htmlBuilder: R1, mathmlBuilder: function (e, t) {
          var r = t.havingSize(e.size), i = nt(e.body, r), a = new W.MathNode("mstyle", i);
          return a.setAttribute("mathsize", r.sizeMultiplier + "em"), a;
        }
      }), ee({
        type: "smash", names: ["\\smash"], props: { numArgs: 1, numOptionalArgs: 1, allowedInText: true }, handler: function (e, t, r) {
          var i = e.parser, a = false, u = false, p = r[0] && de(r[0], "ordgroup");
          if (p)
            for (var x = "", k = 0; k < p.body.length; ++k) {
              var C = p.body[k];
              if (x = C.text, x === "t")
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
        }, htmlBuilder: function (e, t) {
          var r = L.makeSpan([], [be(e.body, t)]);
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
        }, mathmlBuilder: function (e, t) {
          var r = new W.MathNode("mpadded", [Ee(e.body, t)]);
          return e.smashHeight && r.setAttribute("height", "0px"), e.smashDepth && r.setAttribute("depth", "0px"), r;
        }
      }), ee({
        type: "sqrt", names: ["\\sqrt"], props: { numArgs: 1, numOptionalArgs: 1 }, handler: function (e, t, r) {
          var i = e.parser, a = r[0], u = t[0];
          return { type: "sqrt", mode: i.mode, body: u, index: a };
        }, htmlBuilder: function (e, t) {
          var r = be(e.body, t.havingCrampedStyle());
          r.height === 0 && (r.height = t.fontMetrics().xHeight), r = L.wrapFragment(r, t);
          var i = t.fontMetrics(), a = i.defaultRuleThickness, u = a;
          t.style.id < ne.TEXT.id && (u = t.fontMetrics().xHeight);
          var p = a + u / 4, x = r.height + r.depth + p + a, k = gt.sqrtImage(x, t), C = k.span, I = k.ruleWidth, R = k.advanceWidth, V = C.height - I;
          V > r.height + r.depth + p && (p = (p + V - r.height - r.depth) / 2);
          var G = C.height - r.height - p - I;
          r.style.paddingLeft = R + "em";
          var Q = L.makeVList({ positionType: "firstBaseline", children: [{ type: "elem", elem: r, wrapperClasses: ["svg-align"] }, { type: "kern", size: -(r.height + G) }, { type: "elem", elem: C }, { type: "kern", size: I }] }, t);
          if (e.index) {
            var K = t.havingStyle(ne.SCRIPTSCRIPT), ae = be(e.index, K, t), ue = 0.6 * (Q.height - Q.depth), se = L.makeVList({ positionType: "shift", positionData: -ue, children: [{ type: "elem", elem: ae }] }, t), ye = L.makeSpan(["root"], [se]);
            return L.makeSpan(["mord", "sqrt"], [ye, Q], t);
          } else
            return L.makeSpan(["mord", "sqrt"], [Q], t);
        }, mathmlBuilder: function (e, t) {
          var r = e.body, i = e.index;
          return i ? new W.MathNode("mroot", [Ee(r, t), Ee(i, t)]) : new W.MathNode("msqrt", [Ee(r, t)]);
        }
      });
      var ga = { display: ne.DISPLAY, text: ne.TEXT, script: ne.SCRIPT, scriptscript: ne.SCRIPTSCRIPT };
      ee({
        type: "styling", names: ["\\displaystyle", "\\textstyle", "\\scriptstyle", "\\scriptscriptstyle"], props: { numArgs: 0, allowedInText: true, primitive: true }, handler: function (e, t) {
          var r = e.breakOnTokenText, i = e.funcName, a = e.parser, u = a.parseExpression(true, r), p = i.slice(1, i.length - 5);
          return { type: "styling", mode: a.mode, style: p, body: u };
        }, htmlBuilder: function (e, t) {
          var r = ga[e.style], i = t.havingStyle(r).withFont("");
          return fa(e.body, i, t);
        }, mathmlBuilder: function (e, t) {
          var r = ga[e.style], i = t.havingStyle(r), a = nt(e.body, i), u = new W.MathNode("mstyle", a), p = { display: ["0", "true"], text: ["0", "false"], script: ["1", "false"], scriptscript: ["2", "false"] }, x = p[e.style];
          return u.setAttribute("scriptlevel", x[0]), u.setAttribute("displaystyle", x[1]), u;
        }
      });
      var H1 = function (e, t) {
        var r = e.base;
        if (r)
          if (r.type === "op") {
            var i = r.limits && (t.style.size === ne.DISPLAY.size || r.alwaysHandleSupSub);
            return i ? o0 : null;
          } else if (r.type === "operatorname") {
            var a = r.alwaysHandleSupSub && (t.style.size === ne.DISPLAY.size || r.limits);
            return a ? pa : null;
          } else {
            if (r.type === "accent")
              return H.isCharacterBox(r.base) ? jr : null;
            if (r.type === "horizBrace") {
              var u = !e.sub;
              return u === r.isOver ? aa : null;
            } else
              return null;
          }
        else
          return null;
      };
      Kt({
        type: "supsub", htmlBuilder: function (e, t) {
          var r = H1(e, t);
          if (r)
            return r(e, t);
          var i = e.base, a = e.sup, u = e.sub, p = be(i, t), x, k, C = t.fontMetrics(), I = 0, R = 0, V = i && H.isCharacterBox(i);
          if (a) {
            var G = t.havingStyle(t.style.sup());
            x = be(a, G, t), V || (I = p.height - G.fontMetrics().supDrop * G.sizeMultiplier / t.sizeMultiplier);
          }
          if (u) {
            var Q = t.havingStyle(t.style.sub());
            k = be(u, Q, t), V || (R = p.depth + Q.fontMetrics().subDrop * Q.sizeMultiplier / t.sizeMultiplier);
          }
          var K;
          t.style === ne.DISPLAY ? K = C.sup1 : t.style.cramped ? K = C.sup3 : K = C.sup2;
          var ae = t.sizeMultiplier, ue = 0.5 / C.ptPerEm / ae + "em", se = null;
          if (k) {
            var ye = e.base && e.base.type === "op" && e.base.name && (e.base.name === "\\oiint" || e.base.name === "\\oiiint");
            (p instanceof _e || ye) && (se = -p.italic + "em");
          }
          var Ce;
          if (x && k) {
            I = Math.max(I, K, x.depth + 0.25 * C.xHeight), R = Math.max(R, C.sub2);
            var Ie = C.defaultRuleThickness, Se = 4 * Ie;
            if (I - x.depth - (k.height - R) < Se) {
              R = Se - (I - x.depth) + k.height;
              var Be = 0.8 * C.xHeight - (I - x.depth);
              Be > 0 && (I += Be, R -= Be);
            }
            var Re = [{ type: "elem", elem: k, shift: R, marginRight: ue, marginLeft: se }, { type: "elem", elem: x, shift: -I, marginRight: ue }];
            Ce = L.makeVList({ positionType: "individualShift", children: Re }, t);
          } else if (k) {
            R = Math.max(R, C.sub1, k.height - 0.8 * C.xHeight);
            var De = [{ type: "elem", elem: k, marginLeft: se, marginRight: ue }];
            Ce = L.makeVList({ positionType: "shift", positionData: R, children: De }, t);
          } else if (x)
            I = Math.max(I, K, x.depth + 0.25 * C.xHeight), Ce = L.makeVList({ positionType: "shift", positionData: -I, children: [{ type: "elem", elem: x, marginRight: ue }] }, t);
          else
            throw new Error("supsub must have either sup or sub.");
          var it = qr(p, "right") || "mord";
          return L.makeSpan([it], [p, L.makeSpan(["msupsub"], [Ce])], t);
        }, mathmlBuilder: function (e, t) {
          var r = false, i, a;
          e.base && e.base.type === "horizBrace" && (a = !!e.sup, a === e.base.isOver && (r = true, i = e.base.isOver)), e.base && (e.base.type === "op" || e.base.type === "operatorname") && (e.base.parentIsSupSub = true);
          var u = [Ee(e.base, t)];
          e.sub && u.push(Ee(e.sub, t)), e.sup && u.push(Ee(e.sup, t));
          var p;
          if (r)
            p = i ? "mover" : "munder";
          else if (e.sub)
            if (e.sup) {
              var C = e.base;
              C && C.type === "op" && C.limits && t.style === ne.DISPLAY || C && C.type === "operatorname" && C.alwaysHandleSupSub && (t.style === ne.DISPLAY || C.limits) ? p = "munderover" : p = "msubsup";
            } else {
              var k = e.base;
              k && k.type === "op" && k.limits && (t.style === ne.DISPLAY || k.alwaysHandleSupSub) || k && k.type === "operatorname" && k.alwaysHandleSupSub && (k.limits || t.style === ne.DISPLAY) ? p = "munder" : p = "msub";
            }
          else {
            var x = e.base;
            x && x.type === "op" && x.limits && (t.style === ne.DISPLAY || x.alwaysHandleSupSub) || x && x.type === "operatorname" && x.alwaysHandleSupSub && (x.limits || t.style === ne.DISPLAY) ? p = "mover" : p = "msup";
          }
          return new W.MathNode(p, u);
        }
      }), Kt({
        type: "atom", htmlBuilder: function (e, t) {
          return L.mathsym(e.text, e.mode, t, ["m" + e.family]);
        }, mathmlBuilder: function (e, t) {
          var r = new W.MathNode("mo", [st(e.text, e.mode)]);
          if (e.family === "bin") {
            var i = Hr(e, t);
            i === "bold-italic" && r.setAttribute("mathvariant", i);
          } else
            e.family === "punct" ? r.setAttribute("separator", "true") : (e.family === "open" || e.family === "close") && r.setAttribute("stretchy", "false");
          return r;
        }
      });
      var va = { mi: "italic", mn: "normal", mtext: "normal" };
      Kt({
        type: "mathord", htmlBuilder: function (e, t) {
          return L.makeOrd(e, t, "mathord");
        }, mathmlBuilder: function (e, t) {
          var r = new W.MathNode("mi", [st(e.text, e.mode, t)]), i = Hr(e, t) || "italic";
          return i !== va[r.type] && r.setAttribute("mathvariant", i), r;
        }
      }), Kt({
        type: "textord", htmlBuilder: function (e, t) {
          return L.makeOrd(e, t, "textord");
        }, mathmlBuilder: function (e, t) {
          var r = st(e.text, e.mode, t), i = Hr(e, t) || "normal", a;
          return e.mode === "text" ? a = new W.MathNode("mtext", [r]) : /[0-9]/.test(e.text) ? a = new W.MathNode("mn", [r]) : e.text === "\\prime" ? a = new W.MathNode("mo", [r]) : a = new W.MathNode("mi", [r]), i !== va[a.type] && a.setAttribute("mathvariant", i), a;
        }
      });
      var ln = { "\\nobreak": "nobreak", "\\allowbreak": "allowbreak" }, un = { " ": {}, "\\ ": {}, "~": { className: "nobreak" }, "\\space": {}, "\\nobreakspace": { className: "nobreak" } };
      Kt({
        type: "spacing", htmlBuilder: function (e, t) {
          if (un.hasOwnProperty(e.text)) {
            var r = un[e.text].className || "";
            if (e.mode === "text") {
              var i = L.makeOrd(e, t, "textord");
              return i.classes.push(r), i;
            } else
              return L.makeSpan(["mspace", r], [L.mathsym(e.text, e.mode, t)], t);
          } else {
            if (ln.hasOwnProperty(e.text))
              return L.makeSpan(["mspace", ln[e.text]], [], t);
            throw new m('Unknown type of space "' + e.text + '"');
          }
        }, mathmlBuilder: function (e, t) {
          var r;
          if (un.hasOwnProperty(e.text))
            r = new W.MathNode("mtext", [new W.TextNode("\xA0")]);
          else {
            if (ln.hasOwnProperty(e.text))
              return new W.MathNode("mspace");
            throw new m('Unknown type of space "' + e.text + '"');
          }
          return r;
        }
      });
      var xa = function () {
        var e = new W.MathNode("mtd", []);
        return e.setAttribute("width", "50%"), e;
      };
      Kt({
        type: "tag", mathmlBuilder: function (e, t) {
          var r = new W.MathNode("mtable", [new W.MathNode("mtr", [xa(), new W.MathNode("mtd", [Ot(e.body, t)]), xa(), new W.MathNode("mtd", [Ot(e.tag, t)])])]);
          return r.setAttribute("width", "100%"), r;
        }
      });
      var ba = { "\\text": void 0, "\\textrm": "textrm", "\\textsf": "textsf", "\\texttt": "texttt", "\\textnormal": "textrm" }, ya = { "\\textbf": "textbf", "\\textmd": "textmd" }, P1 = { "\\textit": "textit", "\\textup": "textup" }, ka = function (e, t) {
        var r = e.font;
        return r ? ba[r] ? t.withTextFontFamily(ba[r]) : ya[r] ? t.withTextFontWeight(ya[r]) : t.withTextFontShape(P1[r]) : t;
      };
      ee({
        type: "text", names: ["\\text", "\\textrm", "\\textsf", "\\texttt", "\\textnormal", "\\textbf", "\\textmd", "\\textit", "\\textup"], props: { numArgs: 1, argTypes: ["text"], allowedInArgument: true, allowedInText: true }, handler: function (e, t) {
          var r = e.parser, i = e.funcName, a = t[0];
          return { type: "text", mode: r.mode, body: Ue(a), font: i };
        }, htmlBuilder: function (e, t) {
          var r = ka(e, t), i = Ze(e.body, r, true);
          return L.makeSpan(["mord", "text"], i, r);
        }, mathmlBuilder: function (e, t) {
          var r = ka(e, t);
          return Ot(e.body, r);
        }
      }), ee({
        type: "underline", names: ["\\underline"], props: { numArgs: 1, allowedInText: true }, handler: function (e, t) {
          var r = e.parser;
          return { type: "underline", mode: r.mode, body: t[0] };
        }, htmlBuilder: function (e, t) {
          var r = be(e.body, t), i = L.makeLineSpan("underline-line", t), a = t.fontMetrics().defaultRuleThickness, u = L.makeVList({ positionType: "top", positionData: r.height, children: [{ type: "kern", size: a }, { type: "elem", elem: i }, { type: "kern", size: 3 * a }, { type: "elem", elem: r }] }, t);
          return L.makeSpan(["mord", "underline"], [u], t);
        }, mathmlBuilder: function (e, t) {
          var r = new W.MathNode("mo", [new W.TextNode("\u203E")]);
          r.setAttribute("stretchy", "true");
          var i = new W.MathNode("munder", [Ee(e.body, t), r]);
          return i.setAttribute("accentunder", "true"), i;
        }
      }), ee({
        type: "vcenter", names: ["\\vcenter"], props: { numArgs: 1, argTypes: ["original"], allowedInText: false }, handler: function (e, t) {
          var r = e.parser;
          return { type: "vcenter", mode: r.mode, body: t[0] };
        }, htmlBuilder: function (e, t) {
          var r = be(e.body, t), i = t.fontMetrics().axisHeight, a = 0.5 * (r.height - i - (r.depth + i));
          return L.makeVList({ positionType: "shift", positionData: a, children: [{ type: "elem", elem: r }] }, t);
        }, mathmlBuilder: function (e, t) {
          return new W.MathNode("mpadded", [Ee(e.body, t)], ["vcenter"]);
        }
      }), ee({
        type: "verb", names: ["\\verb"], props: { numArgs: 0, allowedInText: true }, handler: function (e, t, r) {
          throw new m("\\verb ended by end of line instead of matching delimiter");
        }, htmlBuilder: function (e, t) {
          for (var r = wa(e), i = [], a = t.havingStyle(t.style.text()), u = 0; u < r.length; u++) {
            var p = r[u];
            p === "~" && (p = "\\textasciitilde"), i.push(L.makeSymbol(p, "Typewriter-Regular", e.mode, a, ["mord", "texttt"]));
          }
          return L.makeSpan(["mord", "text"].concat(a.sizingClasses(t)), L.tryCombineChars(i), a);
        }, mathmlBuilder: function (e, t) {
          var r = new W.TextNode(wa(e)), i = new W.MathNode("mtext", [r]);
          return i.setAttribute("mathvariant", "monospace"), i;
        }
      });
      var wa = function (e) {
        return e.body.replace(/ /g, e.star ? "\u2423" : "\xA0");
      }, j1 = Si, Ht = j1, pt = function () {
        function o(e, t, r) {
          this.lexer = void 0, this.start = void 0, this.end = void 0, this.lexer = e, this.start = t, this.end = r;
        }
        return o.range = function (t, r) {
          return r ? !t || !t.loc || !r.loc || t.loc.lexer !== r.loc.lexer ? null : new o(t.loc.lexer, t.loc.start, r.loc.end) : t && t.loc;
        }, o;
      }(), Jt = function () {
        function o(t, r) {
          this.text = void 0, this.loc = void 0, this.noexpand = void 0, this.treatAsRelax = void 0, this.text = t, this.loc = r;
        }
        var e = o.prototype;
        return e.range = function (r, i) {
          return new o(i, pt.range(this, r));
        }, o;
      }(), Sa = `[ \r
	]`, V1 = "\\\\[a-zA-Z@]+", U1 = "\\\\[^\uD800-\uDFFF]", G1 = "(" + V1 + ")" + Sa + "*", W1 = `\\\\(
|[ \r	]+
?)[ \r	]*`, on = "[\u0300-\u036F]", Y1 = new RegExp(on + "+$"), X1 = "(" + Sa + "+)|" + (W1 + "|") + "([!-\\[\\]-\u2027\u202A-\uD7FF\uF900-\uFFFF]" + (on + "*") + "|[\uD800-\uDBFF][\uDC00-\uDFFF]" + (on + "*") + "|\\\\verb\\*([^]).*?\\4|\\\\verb([^*a-zA-Z]).*?\\5" + ("|" + G1) + ("|" + U1 + ")"), Aa = function () {
          function o(t, r) {
            this.input = void 0, this.settings = void 0, this.tokenRegex = void 0, this.catcodes = void 0, this.input = t, this.settings = r, this.tokenRegex = new RegExp(X1, "g"), this.catcodes = { "%": 14, "~": 13 };
          }
          var e = o.prototype;
          return e.setCatcode = function (r, i) {
            this.catcodes[r] = i;
          }, e.lex = function () {
            var r = this.input, i = this.tokenRegex.lastIndex;
            if (i === r.length)
              return new Jt("EOF", new pt(this, i, i));
            var a = this.tokenRegex.exec(r);
            if (a === null || a.index !== i)
              throw new m("Unexpected character: '" + r[i] + "'", new Jt(r[i], new pt(this, i, i + 1)));
            var u = a[6] || a[3] || (a[2] ? "\\ " : " ");
            if (this.catcodes[u] === 14) {
              var p = r.indexOf(`
`, this.tokenRegex.lastIndex);
              return p === -1 ? (this.tokenRegex.lastIndex = r.length, this.settings.reportNonstrict("commentAtEnd", "% comment has no terminating newline; LaTeX would fail because of commenting the end of math mode (e.g. $)")) : this.tokenRegex.lastIndex = p + 1, this.lex();
            }
            return new Jt(u, new pt(this, i, this.tokenRegex.lastIndex));
          }, o;
        }(), $1 = function () {
          function o(t, r) {
            t === void 0 && (t = {}), r === void 0 && (r = {}), this.current = void 0, this.builtins = void 0, this.undefStack = void 0, this.current = r, this.builtins = t, this.undefStack = [];
          }
          var e = o.prototype;
          return e.beginGroup = function () {
            this.undefStack.push({});
          }, e.endGroup = function () {
            if (this.undefStack.length === 0)
              throw new m("Unbalanced namespace destruction: attempt to pop global namespace; please report this as a bug");
            var r = this.undefStack.pop();
            for (var i in r)
              r.hasOwnProperty(i) && (r[i] === void 0 ? delete this.current[i] : this.current[i] = r[i]);
          }, e.has = function (r) {
            return this.current.hasOwnProperty(r) || this.builtins.hasOwnProperty(r);
          }, e.get = function (r) {
            return this.current.hasOwnProperty(r) ? this.current[r] : this.builtins[r];
          }, e.set = function (r, i, a) {
            if (a === void 0 && (a = false), a) {
              for (var u = 0; u < this.undefStack.length; u++)
                delete this.undefStack[u][r];
              this.undefStack.length > 0 && (this.undefStack[this.undefStack.length - 1][r] = i);
            } else {
              var p = this.undefStack[this.undefStack.length - 1];
              p && !p.hasOwnProperty(r) && (p[r] = this.current[r]);
            }
            this.current[r] = i;
          }, o;
        }(), za = { "\\relax": true, "^": true, _: true, "\\limits": true, "\\nolimits": true }, Z1 = function () {
          function o(t, r, i) {
            this.settings = void 0, this.expansionCount = void 0, this.lexer = void 0, this.macros = void 0, this.stack = void 0, this.mode = void 0, this.settings = r, this.expansionCount = 0, this.feed(t), this.macros = new $1(q1, r.macros), this.mode = i, this.stack = [];
          }
          var e = o.prototype;
          return e.feed = function (r) {
            this.lexer = new Aa(r, this.settings);
          }, e.switchMode = function (r) {
            this.mode = r;
          }, e.beginGroup = function () {
            this.macros.beginGroup();
          }, e.endGroup = function () {
            this.macros.endGroup();
          }, e.future = function () {
            return this.stack.length === 0 && this.pushToken(this.lexer.lex()), this.stack[this.stack.length - 1];
          }, e.popToken = function () {
            return this.future(), this.stack.pop();
          }, e.pushToken = function (r) {
            this.stack.push(r);
          }, e.pushTokens = function (r) {
            var i;
            (i = this.stack).push.apply(i, r);
          }, e.scanArgument = function (r) {
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
            return this.pushToken(new Jt("EOF", a.loc)), this.pushTokens(u), i.range(a, "");
          }, e.consumeSpaces = function () {
            for (; ;) {
              var r = this.future();
              if (r.text === " ")
                this.stack.pop();
              else
                break;
            }
          }, e.consumeArg = function (r) {
            var i = [], a = r && r.length > 0;
            a || this.consumeSpaces();
            var u = this.future(), p, x = 0, k = 0;
            do {
              if (p = this.popToken(), i.push(p), p.text === "{")
                ++x;
              else if (p.text === "}") {
                if (--x, x === -1)
                  throw new m("Extra }", p);
              } else if (p.text === "EOF")
                throw new m("Unexpected end of input in a macro argument, expected '" + (r && a ? r[k] : "}") + "'", p);
              if (r && a)
                if ((x === 0 || x === 1 && r[k] === "{") && p.text === r[k]) {
                  if (++k, k === r.length) {
                    i.splice(-k, k);
                    break;
                  }
                } else
                  k = 0;
            } while (x !== 0 || a);
            return u.text === "{" && i[i.length - 1].text === "}" && (i.pop(), i.shift()), i.reverse(), { tokens: i, start: u, end: p };
          }, e.consumeArgs = function (r, i) {
            if (i) {
              if (i.length !== r + 1)
                throw new m("The length of delimiters doesn't match the number of args!");
              for (var a = i[0], u = 0; u < a.length; u++) {
                var p = this.popToken();
                if (a[u] !== p.text)
                  throw new m("Use of the macro doesn't match its definition", p);
              }
            }
            for (var x = [], k = 0; k < r; k++)
              x.push(this.consumeArg(i && i[k + 1]).tokens);
            return x;
          }, e.expandOnce = function (r) {
            var i = this.popToken(), a = i.text, u = i.noexpand ? null : this._getExpansion(a);
            if (u == null || r && u.unexpandable) {
              if (r && u == null && a[0] === "\\" && !this.isDefined(a))
                throw new m("Undefined control sequence: " + a);
              return this.pushToken(i), i;
            }
            if (this.expansionCount++, this.expansionCount > this.settings.maxExpand)
              throw new m("Too many expansions: infinite loop or need to increase maxExpand setting");
            var p = u.tokens, x = this.consumeArgs(u.numArgs, u.delimiters);
            if (u.numArgs) {
              p = p.slice();
              for (var k = p.length - 1; k >= 0; --k) {
                var C = p[k];
                if (C.text === "#") {
                  if (k === 0)
                    throw new m("Incomplete placeholder at end of macro body", C);
                  if (C = p[--k], C.text === "#")
                    p.splice(k + 1, 1);
                  else if (/^[1-9]$/.test(C.text)) {
                    var I;
                    (I = p).splice.apply(I, [k, 2].concat(x[+C.text - 1]));
                  } else
                    throw new m("Not a valid argument number", C);
                }
              }
            }
            return this.pushTokens(p), p;
          }, e.expandAfterFuture = function () {
            return this.expandOnce(), this.future();
          }, e.expandNextToken = function () {
            for (; ;) {
              var r = this.expandOnce();
              if (r instanceof Jt)
                if (r.text === "\\relax" || r.treatAsRelax)
                  this.stack.pop();
                else
                  return this.stack.pop();
            }
            throw new Error();
          }, e.expandMacro = function (r) {
            return this.macros.has(r) ? this.expandTokens([new Jt(r)]) : void 0;
          }, e.expandTokens = function (r) {
            var i = [], a = this.stack.length;
            for (this.pushTokens(r); this.stack.length > a;) {
              var u = this.expandOnce(true);
              u instanceof Jt && (u.treatAsRelax && (u.noexpand = false, u.treatAsRelax = false), i.push(this.stack.pop()));
            }
            return i;
          }, e.expandMacroAsText = function (r) {
            var i = this.expandMacro(r);
            return i && i.map(function (a) {
              return a.text;
            }).join("");
          }, e._getExpansion = function (r) {
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
                for (var x = u.replace(/##/g, ""); x.indexOf("#" + (p + 1)) !== -1;)
                  ++p;
              for (var k = new Aa(u, this.settings), C = [], I = k.lex(); I.text !== "EOF";)
                C.push(I), I = k.lex();
              C.reverse();
              var R = { tokens: C, numArgs: p };
              return R;
            }
            return u;
          }, e.isDefined = function (r) {
            return this.macros.has(r) || Ht.hasOwnProperty(r) || Ne.math.hasOwnProperty(r) || Ne.text.hasOwnProperty(r) || za.hasOwnProperty(r);
          }, e.isExpandable = function (r) {
            var i = this.macros.get(r);
            return i != null ? typeof i == "string" || typeof i == "function" || !i.unexpandable : Ht.hasOwnProperty(r) && !Ht[r].primitive;
          }, o;
        }(), Ca = { "\u0301": { text: "\\'", math: "\\acute" }, "\u0300": { text: "\\`", math: "\\grave" }, "\u0308": { text: '\\"', math: "\\ddot" }, "\u0303": { text: "\\~", math: "\\tilde" }, "\u0304": { text: "\\=", math: "\\bar" }, "\u0306": { text: "\\u", math: "\\breve" }, "\u030C": { text: "\\v", math: "\\check" }, "\u0302": { text: "\\^", math: "\\hat" }, "\u0307": { text: "\\.", math: "\\dot" }, "\u030A": { text: "\\r", math: "\\mathring" }, "\u030B": { text: "\\H" } }, Ba = { \u00E1: "a\u0301", \u00E0: "a\u0300", \u00E4: "a\u0308", \u01DF: "a\u0308\u0304", \u00E3: "a\u0303", \u0101: "a\u0304", \u0103: "a\u0306", \u1EAF: "a\u0306\u0301", \u1EB1: "a\u0306\u0300", \u1EB5: "a\u0306\u0303", \u01CE: "a\u030C", \u00E2: "a\u0302", \u1EA5: "a\u0302\u0301", \u1EA7: "a\u0302\u0300", \u1EAB: "a\u0302\u0303", \u0227: "a\u0307", \u01E1: "a\u0307\u0304", \u00E5: "a\u030A", \u01FB: "a\u030A\u0301", \u1E03: "b\u0307", \u0107: "c\u0301", \u010D: "c\u030C", \u0109: "c\u0302", \u010B: "c\u0307", \u010F: "d\u030C", \u1E0B: "d\u0307", \u00E9: "e\u0301", \u00E8: "e\u0300", \u00EB: "e\u0308", \u1EBD: "e\u0303", \u0113: "e\u0304", \u1E17: "e\u0304\u0301", \u1E15: "e\u0304\u0300", \u0115: "e\u0306", \u011B: "e\u030C", \u00EA: "e\u0302", \u1EBF: "e\u0302\u0301", \u1EC1: "e\u0302\u0300", \u1EC5: "e\u0302\u0303", \u0117: "e\u0307", \u1E1F: "f\u0307", \u01F5: "g\u0301", \u1E21: "g\u0304", \u011F: "g\u0306", \u01E7: "g\u030C", \u011D: "g\u0302", \u0121: "g\u0307", \u1E27: "h\u0308", \u021F: "h\u030C", \u0125: "h\u0302", \u1E23: "h\u0307", \u00ED: "i\u0301", \u00EC: "i\u0300", \u00EF: "i\u0308", \u1E2F: "i\u0308\u0301", \u0129: "i\u0303", \u012B: "i\u0304", \u012D: "i\u0306", \u01D0: "i\u030C", \u00EE: "i\u0302", \u01F0: "j\u030C", \u0135: "j\u0302", \u1E31: "k\u0301", \u01E9: "k\u030C", \u013A: "l\u0301", \u013E: "l\u030C", \u1E3F: "m\u0301", \u1E41: "m\u0307", \u0144: "n\u0301", \u01F9: "n\u0300", \u00F1: "n\u0303", \u0148: "n\u030C", \u1E45: "n\u0307", \u00F3: "o\u0301", \u00F2: "o\u0300", \u00F6: "o\u0308", \u022B: "o\u0308\u0304", \u00F5: "o\u0303", \u1E4D: "o\u0303\u0301", \u1E4F: "o\u0303\u0308", \u022D: "o\u0303\u0304", \u014D: "o\u0304", \u1E53: "o\u0304\u0301", \u1E51: "o\u0304\u0300", \u014F: "o\u0306", \u01D2: "o\u030C", \u00F4: "o\u0302", \u1ED1: "o\u0302\u0301", \u1ED3: "o\u0302\u0300", \u1ED7: "o\u0302\u0303", \u022F: "o\u0307", \u0231: "o\u0307\u0304", \u0151: "o\u030B", \u1E55: "p\u0301", \u1E57: "p\u0307", \u0155: "r\u0301", \u0159: "r\u030C", \u1E59: "r\u0307", \u015B: "s\u0301", \u1E65: "s\u0301\u0307", \u0161: "s\u030C", \u1E67: "s\u030C\u0307", \u015D: "s\u0302", \u1E61: "s\u0307", \u1E97: "t\u0308", \u0165: "t\u030C", \u1E6B: "t\u0307", \u00FA: "u\u0301", \u00F9: "u\u0300", \u00FC: "u\u0308", \u01D8: "u\u0308\u0301", \u01DC: "u\u0308\u0300", \u01D6: "u\u0308\u0304", \u01DA: "u\u0308\u030C", \u0169: "u\u0303", \u1E79: "u\u0303\u0301", \u016B: "u\u0304", \u1E7B: "u\u0304\u0308", \u016D: "u\u0306", \u01D4: "u\u030C", \u00FB: "u\u0302", \u016F: "u\u030A", \u0171: "u\u030B", \u1E7D: "v\u0303", \u1E83: "w\u0301", \u1E81: "w\u0300", \u1E85: "w\u0308", \u0175: "w\u0302", \u1E87: "w\u0307", \u1E98: "w\u030A", \u1E8D: "x\u0308", \u1E8B: "x\u0307", \u00FD: "y\u0301", \u1EF3: "y\u0300", \u00FF: "y\u0308", \u1EF9: "y\u0303", \u0233: "y\u0304", \u0177: "y\u0302", \u1E8F: "y\u0307", \u1E99: "y\u030A", \u017A: "z\u0301", \u017E: "z\u030C", \u1E91: "z\u0302", \u017C: "z\u0307", \u00C1: "A\u0301", \u00C0: "A\u0300", \u00C4: "A\u0308", \u01DE: "A\u0308\u0304", \u00C3: "A\u0303", \u0100: "A\u0304", \u0102: "A\u0306", \u1EAE: "A\u0306\u0301", \u1EB0: "A\u0306\u0300", \u1EB4: "A\u0306\u0303", \u01CD: "A\u030C", \u00C2: "A\u0302", \u1EA4: "A\u0302\u0301", \u1EA6: "A\u0302\u0300", \u1EAA: "A\u0302\u0303", \u0226: "A\u0307", \u01E0: "A\u0307\u0304", \u00C5: "A\u030A", \u01FA: "A\u030A\u0301", \u1E02: "B\u0307", \u0106: "C\u0301", \u010C: "C\u030C", \u0108: "C\u0302", \u010A: "C\u0307", \u010E: "D\u030C", \u1E0A: "D\u0307", \u00C9: "E\u0301", \u00C8: "E\u0300", \u00CB: "E\u0308", \u1EBC: "E\u0303", \u0112: "E\u0304", \u1E16: "E\u0304\u0301", \u1E14: "E\u0304\u0300", \u0114: "E\u0306", \u011A: "E\u030C", \u00CA: "E\u0302", \u1EBE: "E\u0302\u0301", \u1EC0: "E\u0302\u0300", \u1EC4: "E\u0302\u0303", \u0116: "E\u0307", \u1E1E: "F\u0307", \u01F4: "G\u0301", \u1E20: "G\u0304", \u011E: "G\u0306", \u01E6: "G\u030C", \u011C: "G\u0302", \u0120: "G\u0307", \u1E26: "H\u0308", \u021E: "H\u030C", \u0124: "H\u0302", \u1E22: "H\u0307", \u00CD: "I\u0301", \u00CC: "I\u0300", \u00CF: "I\u0308", \u1E2E: "I\u0308\u0301", \u0128: "I\u0303", \u012A: "I\u0304", \u012C: "I\u0306", \u01CF: "I\u030C", \u00CE: "I\u0302", \u0130: "I\u0307", \u0134: "J\u0302", \u1E30: "K\u0301", \u01E8: "K\u030C", \u0139: "L\u0301", \u013D: "L\u030C", \u1E3E: "M\u0301", \u1E40: "M\u0307", \u0143: "N\u0301", \u01F8: "N\u0300", \u00D1: "N\u0303", \u0147: "N\u030C", \u1E44: "N\u0307", \u00D3: "O\u0301", \u00D2: "O\u0300", \u00D6: "O\u0308", \u022A: "O\u0308\u0304", \u00D5: "O\u0303", \u1E4C: "O\u0303\u0301", \u1E4E: "O\u0303\u0308", \u022C: "O\u0303\u0304", \u014C: "O\u0304", \u1E52: "O\u0304\u0301", \u1E50: "O\u0304\u0300", \u014E: "O\u0306", \u01D1: "O\u030C", \u00D4: "O\u0302", \u1ED0: "O\u0302\u0301", \u1ED2: "O\u0302\u0300", \u1ED6: "O\u0302\u0303", \u022E: "O\u0307", \u0230: "O\u0307\u0304", \u0150: "O\u030B", \u1E54: "P\u0301", \u1E56: "P\u0307", \u0154: "R\u0301", \u0158: "R\u030C", \u1E58: "R\u0307", \u015A: "S\u0301", \u1E64: "S\u0301\u0307", \u0160: "S\u030C", \u1E66: "S\u030C\u0307", \u015C: "S\u0302", \u1E60: "S\u0307", \u0164: "T\u030C", \u1E6A: "T\u0307", \u00DA: "U\u0301", \u00D9: "U\u0300", \u00DC: "U\u0308", \u01D7: "U\u0308\u0301", \u01DB: "U\u0308\u0300", \u01D5: "U\u0308\u0304", \u01D9: "U\u0308\u030C", \u0168: "U\u0303", \u1E78: "U\u0303\u0301", \u016A: "U\u0304", \u1E7A: "U\u0304\u0308", \u016C: "U\u0306", \u01D3: "U\u030C", \u00DB: "U\u0302", \u016E: "U\u030A", \u0170: "U\u030B", \u1E7C: "V\u0303", \u1E82: "W\u0301", \u1E80: "W\u0300", \u1E84: "W\u0308", \u0174: "W\u0302", \u1E86: "W\u0307", \u1E8C: "X\u0308", \u1E8A: "X\u0307", \u00DD: "Y\u0301", \u1EF2: "Y\u0300", \u0178: "Y\u0308", \u1EF8: "Y\u0303", \u0232: "Y\u0304", \u0176: "Y\u0302", \u1E8E: "Y\u0307", \u0179: "Z\u0301", \u017D: "Z\u030C", \u1E90: "Z\u0302", \u017B: "Z\u0307", \u03AC: "\u03B1\u0301", \u1F70: "\u03B1\u0300", \u1FB1: "\u03B1\u0304", \u1FB0: "\u03B1\u0306", \u03AD: "\u03B5\u0301", \u1F72: "\u03B5\u0300", \u03AE: "\u03B7\u0301", \u1F74: "\u03B7\u0300", \u03AF: "\u03B9\u0301", \u1F76: "\u03B9\u0300", \u03CA: "\u03B9\u0308", \u0390: "\u03B9\u0308\u0301", \u1FD2: "\u03B9\u0308\u0300", \u1FD1: "\u03B9\u0304", \u1FD0: "\u03B9\u0306", \u03CC: "\u03BF\u0301", \u1F78: "\u03BF\u0300", \u03CD: "\u03C5\u0301", \u1F7A: "\u03C5\u0300", \u03CB: "\u03C5\u0308", \u03B0: "\u03C5\u0308\u0301", \u1FE2: "\u03C5\u0308\u0300", \u1FE1: "\u03C5\u0304", \u1FE0: "\u03C5\u0306", \u03CE: "\u03C9\u0301", \u1F7C: "\u03C9\u0300", \u038E: "\u03A5\u0301", \u1FEA: "\u03A5\u0300", \u03AB: "\u03A5\u0308", \u1FE9: "\u03A5\u0304", \u1FE8: "\u03A5\u0306", \u038F: "\u03A9\u0301", \u1FFA: "\u03A9\u0300" }, Ta = function () {
          function o(t, r) {
            this.mode = void 0, this.gullet = void 0, this.settings = void 0, this.leftrightDepth = void 0, this.nextToken = void 0, this.mode = "math", this.gullet = new Z1(t, r, this.mode), this.settings = r, this.leftrightDepth = 0;
          }
          var e = o.prototype;
          return e.expect = function (r, i) {
            if (i === void 0 && (i = true), this.fetch().text !== r)
              throw new m("Expected '" + r + "', got '" + this.fetch().text + "'", this.fetch());
            i && this.consume();
          }, e.consume = function () {
            this.nextToken = null;
          }, e.fetch = function () {
            return this.nextToken == null && (this.nextToken = this.gullet.expandNextToken()), this.nextToken;
          }, e.switchMode = function (r) {
            this.mode = r, this.gullet.switchMode(r);
          }, e.parse = function () {
            this.settings.globalGroup || this.gullet.beginGroup(), this.settings.colorIsTextColor && this.gullet.macros.set("\\color", "\\textcolor");
            var r = this.parseExpression(false);
            return this.expect("EOF"), this.settings.globalGroup || this.gullet.endGroup(), r;
          }, e.parseExpression = function (r, i) {
            for (var a = []; ;) {
              this.mode === "math" && this.consumeSpaces();
              var u = this.fetch();
              if (o.endOfExpression.indexOf(u.text) !== -1 || i && u.text === i || r && Ht[u.text] && Ht[u.text].infix)
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
          }, e.handleInfixNodes = function (r) {
            for (var i = -1, a, u = 0; u < r.length; u++)
              if (r[u].type === "infix") {
                if (i !== -1)
                  throw new m("only one infix operator per group", r[u].token);
                i = u, a = r[u].replaceWith;
              }
            if (i !== -1 && a) {
              var p, x, k = r.slice(0, i), C = r.slice(i + 1);
              k.length === 1 && k[0].type === "ordgroup" ? p = k[0] : p = { type: "ordgroup", mode: this.mode, body: k }, C.length === 1 && C[0].type === "ordgroup" ? x = C[0] : x = { type: "ordgroup", mode: this.mode, body: C };
              var I;
              return a === "\\\\abovefrac" ? I = this.callFunction(a, [p, r[i], x], []) : I = this.callFunction(a, [p, x], []), [I];
            } else
              return r;
          }, e.handleSupSubscript = function (r) {
            var i = this.fetch(), a = i.text;
            this.consume(), this.consumeSpaces();
            var u = this.parseGroup(r);
            if (!u)
              throw new m("Expected group after '" + a + "'", i);
            return u;
          }, e.formatUnsupportedCmd = function (r) {
            for (var i = [], a = 0; a < r.length; a++)
              i.push({ type: "textord", mode: "text", text: r[a] });
            var u = { type: "text", mode: this.mode, body: i }, p = { type: "color", mode: this.mode, color: this.settings.errorColor, body: [u] };
            return p;
          }, e.parseAtom = function (r) {
            var i = this.parseGroup("atom", r);
            if (this.mode === "text")
              return i;
            for (var a, u; ;) {
              this.consumeSpaces();
              var p = this.fetch();
              if (p.text === "\\limits" || p.text === "\\nolimits") {
                if (i && i.type === "op") {
                  var x = p.text === "\\limits";
                  i.limits = x, i.alwaysHandleSupSub = true;
                } else if (i && i.type === "operatorname")
                  i.alwaysHandleSupSub && (i.limits = p.text === "\\limits");
                else
                  throw new m("Limit controls must follow a math operator", p);
                this.consume();
              } else if (p.text === "^") {
                if (a)
                  throw new m("Double superscript", p);
                a = this.handleSupSubscript("superscript");
              } else if (p.text === "_") {
                if (u)
                  throw new m("Double subscript", p);
                u = this.handleSupSubscript("subscript");
              } else if (p.text === "'") {
                if (a)
                  throw new m("Double superscript", p);
                var k = { type: "textord", mode: this.mode, text: "\\prime" }, C = [k];
                for (this.consume(); this.fetch().text === "'";)
                  C.push(k), this.consume();
                this.fetch().text === "^" && C.push(this.handleSupSubscript("superscript")), a = { type: "ordgroup", mode: this.mode, body: C };
              } else
                break;
            }
            return a || u ? { type: "supsub", mode: this.mode, base: i, sup: a, sub: u } : i;
          }, e.parseFunction = function (r, i) {
            var a = this.fetch(), u = a.text, p = Ht[u];
            if (!p)
              return null;
            if (this.consume(), i && i !== "atom" && !p.allowedInArgument)
              throw new m("Got function '" + u + "' with no arguments" + (i ? " as " + i : ""), a);
            if (this.mode === "text" && !p.allowedInText)
              throw new m("Can't use function '" + u + "' in text mode", a);
            if (this.mode === "math" && p.allowedInMath === false)
              throw new m("Can't use function '" + u + "' in math mode", a);
            var x = this.parseArguments(u, p), k = x.args, C = x.optArgs;
            return this.callFunction(u, k, C, a, r);
          }, e.callFunction = function (r, i, a, u, p) {
            var x = { funcName: r, parser: this, token: u, breakOnTokenText: p }, k = Ht[r];
            if (k && k.handler)
              return k.handler(x, i, a);
            throw new m("No function handler for " + r);
          }, e.parseArguments = function (r, i) {
            var a = i.numArgs + i.numOptionalArgs;
            if (a === 0)
              return { args: [], optArgs: [] };
            for (var u = [], p = [], x = 0; x < a; x++) {
              var k = i.argTypes && i.argTypes[x], C = x < i.numOptionalArgs;
              (i.primitive && k == null || i.type === "sqrt" && x === 1 && p[0] == null) && (k = "primitive");
              var I = this.parseGroupOfType("argument to '" + r + "'", k, C);
              if (C)
                p.push(I);
              else if (I != null)
                u.push(I);
              else
                throw new m("Null argument, please report this as a bug");
            }
            return { args: u, optArgs: p };
          }, e.parseGroupOfType = function (r, i, a) {
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
                  throw new m("A primitive argument cannot be optional");
                var x = this.parseGroup(r);
                if (x == null)
                  throw new m("Expected group as " + r, this.fetch());
                return x;
              }
              case "original":
              case null:
              case void 0:
                return this.parseArgumentGroup(a);
              default:
                throw new m("Unknown group type as " + r, this.fetch());
            }
          }, e.consumeSpaces = function () {
            for (; this.fetch().text === " ";)
              this.consume();
          }, e.parseStringGroup = function (r, i) {
            var a = this.gullet.scanArgument(i);
            if (a == null)
              return null;
            for (var u = "", p; (p = this.fetch()).text !== "EOF";)
              u += p.text, this.consume();
            return this.consume(), a.text = u, a;
          }, e.parseRegexGroup = function (r, i) {
            for (var a = this.fetch(), u = a, p = "", x; (x = this.fetch()).text !== "EOF" && r.test(p + x.text);)
              u = x, p += u.text, this.consume();
            if (p === "")
              throw new m("Invalid " + i + ": '" + a.text + "'", a);
            return a.range(u, p);
          }, e.parseColorGroup = function (r) {
            var i = this.parseStringGroup("color", r);
            if (i == null)
              return null;
            var a = /^(#[a-f0-9]{3}|#?[a-f0-9]{6}|[a-z]+)$/i.exec(i.text);
            if (!a)
              throw new m("Invalid color: '" + i.text + "'", i);
            var u = a[0];
            return /^[0-9a-f]{6}$/i.test(u) && (u = "#" + u), { type: "color-token", mode: this.mode, color: u };
          }, e.parseSizeGroup = function (r) {
            var i, a = false;
            if (this.gullet.consumeSpaces(), !r && this.gullet.future().text !== "{" ? i = this.parseRegexGroup(/^[-+]? *(?:$|\d+|\d+\.\d*|\.\d*) *[a-z]{0,2} *$/, "size") : i = this.parseStringGroup("size", r), !i)
              return null;
            !r && i.text.length === 0 && (i.text = "0pt", a = true);
            var u = /([-+]?) *(\d+(?:\.\d*)?|\.\d+) *([a-z]{2})/.exec(i.text);
            if (!u)
              throw new m("Invalid size: '" + i.text + "'", i);
            var p = { number: +(u[1] + u[2]), unit: u[3] };
            if (!xi(p))
              throw new m("Invalid unit: '" + p.unit + "'", i);
            return { type: "size", mode: this.mode, value: p, isBlank: a };
          }, e.parseUrlGroup = function (r) {
            this.gullet.lexer.setCatcode("%", 13), this.gullet.lexer.setCatcode("~", 12);
            var i = this.parseStringGroup("url", r);
            if (this.gullet.lexer.setCatcode("%", 14), this.gullet.lexer.setCatcode("~", 13), i == null)
              return null;
            var a = i.text.replace(/\\([#$%&~_^{}])/g, "$1");
            return { type: "url", mode: this.mode, url: a };
          }, e.parseArgumentGroup = function (r, i) {
            var a = this.gullet.scanArgument(r);
            if (a == null)
              return null;
            var u = this.mode;
            i && this.switchMode(i), this.gullet.beginGroup();
            var p = this.parseExpression(false, "EOF");
            this.expect("EOF"), this.gullet.endGroup();
            var x = { type: "ordgroup", mode: this.mode, loc: a.loc, body: p };
            return i && this.switchMode(u), x;
          }, e.parseGroup = function (r, i) {
            var a = this.fetch(), u = a.text, p;
            if (u === "{" || u === "\\begingroup") {
              this.consume();
              var x = u === "{" ? "}" : "\\endgroup";
              this.gullet.beginGroup();
              var k = this.parseExpression(false, x), C = this.fetch();
              this.expect(x), this.gullet.endGroup(), p = { type: "ordgroup", mode: this.mode, loc: pt.range(a, C), body: k, semisimple: u === "\\begingroup" || void 0 };
            } else if (p = this.parseFunction(i, r) || this.parseSymbol(), p == null && u[0] === "\\" && !za.hasOwnProperty(u)) {
              if (this.settings.throwOnError)
                throw new m("Undefined control sequence: " + u, a);
              p = this.formatUnsupportedCmd(u), this.consume();
            }
            return p;
          }, e.formLigatures = function (r) {
            for (var i = r.length - 1, a = 0; a < i; ++a) {
              var u = r[a], p = u.text;
              p === "-" && r[a + 1].text === "-" && (a + 1 < i && r[a + 2].text === "-" ? (r.splice(a, 3, { type: "textord", mode: "text", loc: pt.range(u, r[a + 2]), text: "---" }), i -= 2) : (r.splice(a, 2, { type: "textord", mode: "text", loc: pt.range(u, r[a + 1]), text: "--" }), i -= 1)), (p === "'" || p === "`") && r[a + 1].text === p && (r.splice(a, 2, { type: "textord", mode: "text", loc: pt.range(u, r[a + 1]), text: p + p }), i -= 1);
            }
          }, e.parseSymbol = function () {
            var r = this.fetch(), i = r.text;
            if (/^\\verb[^a-zA-Z]/.test(i)) {
              this.consume();
              var a = i.slice(5), u = a.charAt(0) === "*";
              if (u && (a = a.slice(1)), a.length < 2 || a.charAt(0) !== a.slice(-1))
                throw new m(`\\verb assertion failed --
                    please report what input caused this bug`);
              return a = a.slice(1, -1), { type: "verb", mode: "text", body: a, star: u };
            }
            Ba.hasOwnProperty(i[0]) && !Ne[this.mode][i[0]] && (this.settings.strict && this.mode === "math" && this.settings.reportNonstrict("unicodeTextInMathMode", 'Accented Unicode text character "' + i[0] + '" used in math mode', r), i = Ba[i[0]] + i.substr(1));
            var p = Y1.exec(i);
            p && (i = i.substring(0, p.index), i === "i" ? i = "\u0131" : i === "j" && (i = "\u0237"));
            var x;
            if (Ne[this.mode][i]) {
              this.settings.strict && this.mode === "math" && Fr.indexOf(i) >= 0 && this.settings.reportNonstrict("unicodeTextInMathMode", 'Latin-1/Unicode text character "' + i[0] + '" used in math mode', r);
              var k = Ne[this.mode][i].group, C = pt.range(r), I;
              if (Br.hasOwnProperty(k)) {
                var R = k;
                I = { type: "atom", mode: this.mode, family: R, loc: C, text: i };
              } else
                I = { type: k, mode: this.mode, loc: C, text: i };
              x = I;
            } else if (i.charCodeAt(0) >= 128)
              this.settings.strict && (M(i.charCodeAt(0)) ? this.mode === "math" && this.settings.reportNonstrict("unicodeTextInMathMode", 'Unicode text character "' + i[0] + '" used in math mode', r) : this.settings.reportNonstrict("unknownSymbol", 'Unrecognized Unicode character "' + i[0] + '"' + (" (" + i.charCodeAt(0) + ")"), r)), x = { type: "textord", mode: "text", loc: pt.range(r), text: i };
            else
              return null;
            if (this.consume(), p)
              for (var V = 0; V < p[0].length; V++) {
                var G = p[0][V];
                if (!Ca[G])
                  throw new m("Unknown accent ' " + G + "'", r);
                var Q = Ca[G][this.mode];
                if (!Q)
                  throw new m("Accent " + G + " unsupported in " + this.mode + " mode", r);
                x = { type: "accent", mode: this.mode, loc: pt.range(r), label: Q, isStretchy: false, isShifty: true, base: x };
              }
            return x;
          }, o;
        }();
      Ta.endOfExpression = ["}", "\\endgroup", "\\end", "\\right", "&"];
      var Q1 = function (e, t) {
        if (!(typeof e == "string" || e instanceof String))
          throw new TypeError("KaTeX can only parse string typed expression");
        var r = new Ta(e, t);
        delete r.gullet.macros.current["\\df@tag"];
        var i = r.parse();
        if (delete r.gullet.macros.current["\\current@color"], delete r.gullet.macros.current["\\color"], r.gullet.macros.get("\\df@tag")) {
          if (!t.displayMode)
            throw new m("\\tag works only in display equations");
          r.gullet.feed("\\df@tag"), i = [{ type: "tag", mode: "text", body: i, tag: r.parse() }];
        }
        return i;
      }, sn = Q1, Ma = function (e, t, r) {
        t.textContent = "";
        var i = mn(e, r).toNode();
        t.appendChild(i);
      };
      typeof document != "undefined" && document.compatMode !== "CSS1Compat" && (typeof console != "undefined" && console.warn("Warning: KaTeX doesn't work in quirks mode. Make sure your website has a suitable doctype."), Ma = function () {
        throw new m("KaTeX doesn't work in quirks mode.");
      });
      var K1 = function (e, t) {
        var r = mn(e, t).toMarkup();
        return r;
      }, J1 = function (e, t) {
        var r = new j(t);
        return sn(e, r);
      }, Ea = function (e, t, r) {
        if (r.throwOnError || !(e instanceof m))
          throw e;
        var i = L.makeSpan(["katex-error"], [new _e(t)]);
        return i.setAttribute("title", e.toString()), i.setAttribute("style", "color:" + r.errorColor), i;
      }, mn = function (e, t) {
        var r = new j(t);
        try {
          var i = sn(e, r);
          return i1(i, e, r);
        } catch (a) {
          return Ea(a, e, r);
        }
      }, _1 = function (e, t) {
        var r = new j(t);
        try {
          var i = sn(e, r);
          return a1(i, e, r);
        } catch (a) {
          return Ea(a, e, r);
        }
      }, eo = { version: "0.13.11", render: Ma, renderToString: K1, ParseError: m, __parse: J1, __renderToDomTree: mn, __renderToHTMLTree: _1, __setFontMetrics: q0, __defineSymbol: l, __defineMacro: b, __domTree: { Span: $t, Anchor: d0, SymbolNode: _e, SvgNode: dt, PathNode: Bt, LineNode: Tt } }, to = eo;
      return c = c.default, c;
    }();
  });
});
function oi(n) {
  return {
    enter: {
      mathFlow() {
        this.lineEndingIfNeeded(), this.tag('<div class="math math-display">');
      }, mathFlowFenceMeta() {
        this.buffer();
      }, mathText() {
        this.tag('<span class="math math-inline">'), this.buffer();
      }
    }, exit: {
      mathFlow() {
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
      }
    }
  };
  function c(h, m) {
    return Eu.default.renderToString(h, Object.assign({}, n, { displayMode: m }));
  }
}
var Eu;
var Du = J(() => {
  Eu = Oa(Mu());
});
var Fu = J(() => {
  Tu();
  Du();
});
var p4 = dn((L5, Nu) => {
  Qa();
  $l();
  Su();
  Fu();
  Nu.exports = c4;
  function c4(n) {
    return Xl(n, { allowDangerousHtml: true, extensions: [ku(), yn(), li], htmlExtensions: [wu, xn, oi({ output: "mathml" })] });
  }
});
var build_default = p4();

// src/wc-progress-bar.js
var template = document.createElement("template");
template.innerHTML = `
  <style>
    #wrapper {
      display: flex;
      font: bold 1.1em var(--wc-font-sans-serif, sans-serif);
      margin: 0.3em 0;
      
    }
    #label {
      padding-right: 0.3em;
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
var WCProgressBar = class extends HTMLElement {
  constructor() {
    super();
    this.percent = 0;
    this.attachShadow({ mode: "open" });
  }
  connectedCallback() {
    this.style.display = "block";
    this.shadowRoot.appendChild(template.content.cloneNode(true));
    this.shadowRoot.querySelector("#label").innerHTML = this.label ? this.label : "";
    this.shadowRoot.querySelector("#progress-bar").style.backgroundColor = this.color ? `var(--wc-${this.color}, ${this.color})` : "var(--wc-blue, #0d6efd)";
  }
  static get observedAttributes() {
    return ["percent", "label", "color"];
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
customElements.define("wc-progress-bar", WCProgressBar);

// src/ed-quiz.js
var xmlns = "http://www.w3.org/2000/svg";
var template2 = document.createElement("template");
template2.innerHTML = `
  <style>
    article {
      font-family: var(--wc-font-sans-serif);
      margin-top: 1rem;
      margin-bottom: 1rem;
      border-style: solid;
      border-color: rgb(192, 192, 192);
      border-radius: 2em;
      padding: 0em 1em;
    }
    
    #progress {
      background-color: var(--wc-white);
      position: sticky;
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
      color: var(--wc-green, green);
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
      color: var(--wc-green, green);
      stroke-dashoffset: 0;
    }
    li.bad-answer input:checked + svg .check  {
      color: var(--wc-red, red);
      stroke-dashoffset: 0;
    }
    .cross {
      color: var(--wc-red, red);
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
      <wc-progress-bar id="bar-progress" label="Avanc\xE9e" percent="0" color="blue" style="display: block;"></wc-progress-bar>
      <wc-progress-bar id="bar-results" label="R\xE9ussite" percent="0" color="green" style="display: block;"></wc-progress-bar>
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
var WCQuiz = class extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.goodAnswers = [];
    this.answers = [];
    this.checkAnswer = this.checkAnswer.bind(this);
  }
  async connectedCallback() {
    this.style.display = "block";
    let contents = WCQuiz.dedentText(this.textContent);
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
              throw new Error("md-quizz error there's must be only one valid answer per question");
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
        box.setAttributeNS(null, "d", "M82,89H18c-3.87,0-7-3.13-7-7V18c0-3.87,3.13-7,7-7h64c3.87,0,7,3.13,7,7v64C89,85.87,85.87,89,82,89z");
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
    this.shadowRoot.querySelectorAll(`#quest-${nQue} li`).forEach((li2, i) => {
      const input = li2.querySelector("input");
      input.setAttribute("disabled", "");
      input.removeEventListener("click", this.checkAnswer);
      const goodAnswer = this.goodAnswers[nQue - 1];
      if (i === goodAnswer - 1) {
        li2.setAttribute("class", "answer good-answer");
        if (i !== nAns - 1) {
          const cross = li2.querySelector(".cross");
          cross.setAttribute("stroke-dashoffset", 0);
          el2.parentNode.setAttribute("class", "answer bad-answer");
        }
      }
    });
    if (this.answers.indexOf(-1) < 0) {
      const note = this.shadowRoot.querySelector("#note");
      const result = Math.round(this.shadowRoot.querySelector("#bar-results").percent / 5);
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
    this.shadowRoot.querySelector("#bar-progress").percent = Math.round(100 * answered / nAnswers);
    this.shadowRoot.querySelector("#bar-results").percent = Math.round(100 * score / nAnswers);
  }
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
customElements.define("ed-quiz", WCQuiz);
export {
  WCQuiz
};
