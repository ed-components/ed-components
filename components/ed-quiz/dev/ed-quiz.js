// src/lib/build.js
var xo = Object.create;
var Sn = Object.defineProperty;
var bo = Object.getOwnPropertyDescriptor;
var yo = Object.getOwnPropertyNames;
var wo = Object.getPrototypeOf;
var ko = Object.prototype.hasOwnProperty;
var K = (n, c) => () => (n && (c = n(n = 0)), c);
var An = (n, c) => () => (c || n((c = { exports: {} }).exports, c), c.exports);
var So = (n, c) => {
  for (var s in c)
    Sn(n, s, { get: c[s], enumerable: true });
};
var Ao = (n, c, s, u) => {
  if (c && typeof c == "object" || typeof c == "function")
    for (let f of yo(c))
      !ko.call(n, f) && f !== s && Sn(n, f, { get: () => c[f], enumerable: !(u = bo(c, f)) || u.enumerable });
  return n;
};
var Ha = (n, c, s) => (s = n != null ? xo(wo(n)) : {}, Ao(c || !n || !n.__esModule ? Sn(s, "default", { value: n, enumerable: true }) : s, n));
var Pa = An((B4, zn) => {
  (function() {
    var n;
    typeof zn < "u" ? n = zn.exports = u : n = function() {
      return this || (0, eval)("this");
    }(), n.format = u, n.vsprintf = s, typeof console < "u" && typeof console.log == "function" && (n.printf = c);
    function c() {
      console.log(u.apply(null, arguments));
    }
    function s(f, v) {
      return u.apply(null, [f].concat(v));
    }
    function u(f) {
      for (var v = 1, d = [].slice.call(arguments), y = 0, D = f.length, B = "", z, T = false, M, k, W = false, H, V = function() {
        return d[v++];
      }, q = function() {
        for (var _ = ""; /\d/.test(f[y]); )
          _ += f[y++], z = f[y];
        return _.length > 0 ? parseInt(_) : null;
      }; y < D; ++y)
        if (z = f[y], T)
          switch (T = false, z == "." ? (W = false, z = f[++y]) : z == "0" && f[y + 1] == "." ? (W = true, y += 2, z = f[y]) : W = true, H = q(), z) {
            case "b":
              B += parseInt(V(), 10).toString(2);
              break;
            case "c":
              M = V(), typeof M == "string" || M instanceof String ? B += M : B += String.fromCharCode(parseInt(M, 10));
              break;
            case "d":
              B += parseInt(V(), 10);
              break;
            case "f":
              k = String(parseFloat(V()).toFixed(H || 6)), B += W ? k : k.replace(/^0/, "");
              break;
            case "j":
              B += JSON.stringify(V());
              break;
            case "o":
              B += "0" + parseInt(V(), 10).toString(8);
              break;
            case "s":
              B += V();
              break;
            case "x":
              B += "0x" + parseInt(V(), 10).toString(16);
              break;
            case "X":
              B += "0x" + parseInt(V(), 10).toString(16).toUpperCase();
              break;
            default:
              B += z;
              break;
          }
        else
          z === "%" ? T = true : B += z;
      return B;
    }
  })();
});
function r0(n) {
  return c.displayName = n.displayName || n.name, c;
  function c(s, ...u) {
    let f = s && (0, Ga.default)(s, ...u);
    return new n(f);
  }
}
var Ga;
var D0;
var Va = K(() => {
  Ga = Ha(Pa(), 1), D0 = Object.assign(r0(Error), { eval: r0(EvalError), range: r0(RangeError), reference: r0(ReferenceError), syntax: r0(SyntaxError), type: r0(TypeError), uri: r0(URIError) });
});
function cr(n = "yaml") {
  let c = [], s = -1;
  for (Array.isArray(n) || (n = [n]); ++s < n.length; )
    c[s] = zo(n[s]);
  return c;
}
function zo(n) {
  let c = n;
  if (typeof c == "string") {
    if (!mr.call(Ua, c))
      throw D0("Missing matter definition for `%s`", c);
    c = { type: c, marker: Ua[c] };
  } else if (typeof c != "object")
    throw D0("Expected matter to be an object, not `%j`", c);
  if (!mr.call(c, "type"))
    throw D0("Missing `type` in matter `%j`", c);
  if (!mr.call(c, "fence") && !mr.call(c, "marker"))
    throw D0("Missing `marker` or `fence` in matter `%j`", c);
  return c;
}
var mr;
var Ua;
var Cn = K(() => {
  Va();
  mr = {}.hasOwnProperty, Ua = { yaml: "-", toml: "+" };
});
function Bn(n) {
  let c = cr(n), s = {}, u = {}, f = -1;
  for (; ++f < c.length; ) {
    let y = c[f].type;
    s[y] = v, u[y] = d;
  }
  return { enter: s, exit: u };
  function v() {
    this.buffer();
  }
  function d() {
    this.resume(), this.setData("slurpOneLineEnding", true);
  }
}
var ja = K(() => {
  Cn();
});
var Wa;
var Ya = K(() => {
  Wa = /[!-\/:-@\[-`\{-~\xA1\xA7\xAB\xB6\xB7\xBB\xBF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061D-\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u09FD\u0A76\u0AF0\u0C77\u0C84\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1B7D\u1B7E\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E4F\u2E52-\u2E5D\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]/;
});
function n0(n) {
  return n !== null && (n < 32 || n === 127);
}
function $(n) {
  return n !== null && n < -2;
}
function ze(n) {
  return n !== null && (n < 0 || n === 32);
}
function he(n) {
  return n === -2 || n === -1 || n === 32;
}
function Wt(n) {
  return c;
  function c(s) {
    return s !== null && n.test(String.fromCharCode(s));
  }
}
var Xe;
var Oe;
var Xa;
var F0;
var $a;
var Za;
var N0;
var jt;
var ye = K(() => {
  Ya();
  Xe = Wt(/[A-Za-z]/), Oe = Wt(/[\dA-Za-z]/), Xa = Wt(/[#-'*+\--9=?A-Z^-~]/);
  F0 = Wt(/\d/), $a = Wt(/[\dA-Fa-f]/), Za = Wt(/[!-/:-@[-`{-~]/);
  N0 = Wt(Wa), jt = Wt(/\s/);
});
function Tn(n) {
  let c = cr(n), s = {}, u = -1, f, v;
  for (; ++u < c.length; )
    f = c[u], v = Mn(f, "open").charCodeAt(0), v in s ? s[v].push(Qa(f)) : s[v] = [Qa(f)];
  return { flow: s };
}
function Qa(n) {
  let c = n.type, s = n.anywhere, u = c + "Value", f = c + "Fence", v = f + "Sequence", d = { tokenize: B, partial: true }, y;
  return { tokenize: D, concrete: true };
  function D(z, T, M) {
    let k = this;
    return W;
    function W(ne) {
      let fe = k.now();
      return fe.column !== 1 || !s && fe.line !== 1 ? M(ne) : (z.enter(c), y = Mn(n, "open"), z.attempt(d, H, M)(ne));
    }
    function H(ne) {
      return y = Mn(n, "close"), _(ne);
    }
    function V(ne) {
      return ne === null || $(ne) ? _(ne) : (z.enter(u), q(ne));
    }
    function q(ne) {
      return ne === null || $(ne) ? (z.exit(u), _(ne)) : (z.consume(ne), q);
    }
    function _(ne) {
      return ne === null ? M(ne) : (z.enter("lineEnding"), z.consume(ne), z.exit("lineEnding"), z.attempt(d, ee, V));
    }
    function ee(ne) {
      return z.exit(c), T(ne);
    }
  }
  function B(z, T, M) {
    let k = 0;
    return W;
    function W(_) {
      return _ === y.charCodeAt(k) ? (z.enter(f), z.enter(v), H(_)) : M(_);
    }
    function H(_) {
      return k === y.length ? (z.exit(v), he(_) ? (z.enter("whitespace"), V(_)) : q(_)) : _ === y.charCodeAt(k++) ? (z.consume(_), H) : M(_);
    }
    function V(_) {
      return he(_) ? (z.consume(_), V) : (z.exit("whitespace"), q(_));
    }
    function q(_) {
      return _ === null || $(_) ? (z.exit(f), T(_)) : M(_);
    }
  }
}
function Mn(n, c) {
  return n.marker ? Ka(n.marker, c).repeat(3) : Ka(n.fence, c);
}
function Ka(n, c) {
  return typeof n == "string" ? n : n[c];
}
var Ja = K(() => {
  ye();
  Cn();
});
var _a = K(() => {
  ja();
  Ja();
});
function En(n) {
  let c = "&" + n + ";";
  el.innerHTML = c;
  let s = el.textContent;
  return s.charCodeAt(s.length - 1) === 59 && n !== "semi" || s === c ? false : s;
}
var el;
var tl = K(() => {
  el = document.createElement("i");
});
var rl = K(() => {
  tl();
});
function je(n, c, s, u) {
  let f = n.length, v = 0, d;
  if (c < 0 ? c = -c > f ? 0 : f + c : c = c > f ? f : c, s = s > 0 ? s : 0, u.length < 1e4)
    d = Array.from(u), d.unshift(c, s), n.splice(...d);
  else
    for (s && n.splice(c, s); v < u.length; )
      d = u.slice(v, v + 1e4), d.unshift(c, 0), n.splice(...d), v += 1e4, c += 1e4;
}
function We(n, c) {
  return n.length > 0 ? (je(n, n.length, 0, c), n) : c;
}
var zt = K(() => {
});
function pr(n) {
  let c = {}, s = -1;
  for (; ++s < n.length; )
    Co(c, n[s]);
  return c;
}
function Co(n, c) {
  let s;
  for (s in c) {
    let f = (Dn.call(n, s) ? n[s] : void 0) || (n[s] = {}), v = c[s], d;
    if (v)
      for (d in v) {
        Dn.call(f, d) || (f[d] = []);
        let y = v[d];
        Bo(f[d], Array.isArray(y) ? y : y ? [y] : []);
      }
  }
}
function Bo(n, c) {
  let s = -1, u = [];
  for (; ++s < c.length; )
    (c[s].add === "after" ? n : u).push(c[s]);
  je(n, 0, 0, u);
}
function fr(n) {
  let c = {}, s = -1;
  for (; ++s < n.length; )
    Mo(c, n[s]);
  return c;
}
function Mo(n, c) {
  let s;
  for (s in c) {
    let f = (Dn.call(n, s) ? n[s] : void 0) || (n[s] = {}), v = c[s], d;
    if (v)
      for (d in v)
        f[d] = v[d];
  }
}
var Dn;
var dr = K(() => {
  zt();
  Dn = {}.hasOwnProperty;
});
function nl(n, c) {
  let s = Number.parseInt(n, c);
  return s < 9 || s === 11 || s > 13 && s < 32 || s > 126 && s < 160 || s > 55295 && s < 57344 || s > 64975 && s < 65008 || (s & 65535) === 65535 || (s & 65535) === 65534 || s > 1114111 ? "\uFFFD" : String.fromCharCode(s);
}
var il = K(() => {
});
function gr(n) {
  return n.replace(/["&<>]/g, c);
  function c(s) {
    return "&" + To[s] + ";";
  }
}
var To;
var Fn = K(() => {
  To = { '"': "quot", "&": "amp", "<": "lt", ">": "gt" };
});
function Yt(n) {
  return n.replace(/[\t\n\r ]+/g, " ").replace(/^ | $/g, "").toLowerCase().toUpperCase();
}
var vr = K(() => {
});
function i0(n, c) {
  let s = gr(Eo(n || ""));
  if (!c)
    return s;
  let u = s.indexOf(":"), f = s.indexOf("?"), v = s.indexOf("#"), d = s.indexOf("/");
  return u < 0 || d > -1 && u > d || f > -1 && u > f || v > -1 && u > v || c.test(s.slice(0, u)) ? s : "";
}
function Eo(n) {
  let c = [], s = -1, u = 0, f = 0;
  for (; ++s < n.length; ) {
    let v = n.charCodeAt(s), d = "";
    if (v === 37 && Oe(n.charCodeAt(s + 1)) && Oe(n.charCodeAt(s + 2)))
      f = 2;
    else if (v < 128)
      /[!#$&-;=?-Z_a-z~]/.test(String.fromCharCode(v)) || (d = String.fromCharCode(v));
    else if (v > 55295 && v < 57344) {
      let y = n.charCodeAt(s + 1);
      v < 56320 && y > 56319 && y < 57344 ? (d = String.fromCharCode(v, y), f = 1) : d = "\uFFFD";
    } else
      d = String.fromCharCode(v);
    d && (c.push(n.slice(u, s), encodeURIComponent(d)), u = s + f + 1, d = ""), f && (s += f, f = 0);
  }
  return c.join("") + n.slice(u);
}
var Nn = K(() => {
  ye();
  Fn();
});
function ul(n = {}) {
  let c = true, s = {}, u = [[]], f = [], v = [], y = fr([{ enter: { blockQuote: se, codeFenced: te, codeFencedFenceInfo: H, codeFencedFenceMeta: H, codeIndented: E, codeText: W0, content: y0, definition: Mt, definitionDestinationString: pt, definitionLabelString: H, definitionTitleString: H, emphasis: U0, htmlFlow: Fe, htmlText: vt, image: Qe, label: H, link: F, listItemMarker: be, listItemValue: Ce, listOrdered: U, listUnordered: ce, paragraph: xe, reference: H, resource: s0, resourceDestinationString: Ye, resourceTitleString: H, setextHeading: Fr, strong: j0 }, exit: { atxHeading: P0, atxHeadingSequence: w0, autolinkEmail: z0, autolinkProtocol: Et, blockQuote: ve, characterEscapeValue: Qt, characterReferenceMarkerHexadecimal: tt, characterReferenceMarkerNumeric: tt, characterReferenceValue: yt, codeFenced: Ze, codeFencedFence: ct, codeFencedFenceInfo: _e, codeFencedFenceMeta: V, codeFlowValue: Ir, codeIndented: Ze, codeText: Kt, codeTextData: Qt, data: Qt, definition: Dr, definitionDestinationString: h0, definitionLabelString: Tt, definitionTitleString: H0, emphasis: A0, hardBreakEscape: S0, hardBreakTrailing: S0, htmlFlow: X, htmlFlowData: Qt, htmlText: X, htmlTextData: Qt, image: Bt, label: Rt, labelText: et, lineEnding: k0, link: Bt, listOrdered: O, listUnordered: Pe, paragraph: qe, reference: V, referenceString: b0, resource: V, resourceDestinationString: Zt, resourceTitleString: gt, setextHeading: V0, setextHeadingLineSequence: G0, setextHeadingText: Nr, strong: Lr, thematicBreak: qr } }].concat(n.htmlExtensions || [])), D = { tightStack: v }, B = { lineEndingIfNeeded: ne, options: n, encode: fe, raw: _, tag: q, buffer: H, resume: V, setData: k, getData: W }, z = n.defaultLineEnding;
  return T;
  function T(Z) {
    let le = -1, Ke = 0, lt = [], rt = [], ke = [];
    for (; ++le < Z.length; )
      !z && (Z[le][1].type === "lineEnding" || Z[le][1].type === "lineEndingBlank") && (z = Z[le][2].sliceSerialize(Z[le][1])), (Z[le][1].type === "listOrdered" || Z[le][1].type === "listUnordered") && (Z[le][0] === "enter" ? lt.push(le) : M(Z.slice(lt.pop(), le))), Z[le][1].type === "definition" && (Z[le][0] === "enter" ? (ke = We(ke, Z.slice(Ke, le)), Ke = le) : (rt = We(rt, Z.slice(Ke, le + 1)), Ke = le + 1));
    rt = We(rt, ke), rt = We(rt, Z.slice(Ke)), le = -1;
    let l = rt;
    for (y.enter.null && y.enter.null.call(B); ++le < Z.length; ) {
      let m = y[l[le][0]];
      al.call(m, l[le][1].type) && m[l[le][1].type].call(Object.assign({ sliceSerialize: l[le][2].sliceSerialize }, B), l[le][1]);
    }
    return y.exit.null && y.exit.null.call(B), u[0].join("");
  }
  function M(Z) {
    let le = Z.length, Ke = 0, lt = 0, rt = false, ke;
    for (; ++Ke < le; ) {
      let l = Z[Ke];
      if (l[1]._container)
        ke = void 0, l[0] === "enter" ? lt++ : lt--;
      else
        switch (l[1].type) {
          case "listItemPrefix": {
            l[0] === "exit" && (ke = true);
            break;
          }
          case "linePrefix":
            break;
          case "lineEndingBlank": {
            l[0] === "enter" && !lt && (ke ? ke = void 0 : rt = true);
            break;
          }
          default:
            ke = void 0;
        }
    }
    Z[0][1]._loose = rt;
  }
  function k(Z, le) {
    D[Z] = le;
  }
  function W(Z) {
    return D[Z];
  }
  function H() {
    u.push([]);
  }
  function V() {
    return u.pop().join("");
  }
  function q(Z) {
    c && (k("lastWasTag", true), u[u.length - 1].push(Z));
  }
  function _(Z) {
    k("lastWasTag"), u[u.length - 1].push(Z);
  }
  function ee() {
    _(z || `
`);
  }
  function ne() {
    let Z = u[u.length - 1], le = Z[Z.length - 1], Ke = le ? le.charCodeAt(le.length - 1) : null;
    Ke === 10 || Ke === 13 || Ke === null || ee();
  }
  function fe(Z) {
    return W("ignoreEncode") ? Z : gr(Z);
  }
  function U(Z) {
    v.push(!Z._loose), ne(), q("<ol"), k("expectFirstItem", true);
  }
  function ce(Z) {
    v.push(!Z._loose), ne(), q("<ul"), k("expectFirstItem", true);
  }
  function Ce(Z) {
    if (W("expectFirstItem")) {
      let le = Number.parseInt(this.sliceSerialize(Z), 10);
      le !== 1 && q(' start="' + fe(String(le)) + '"');
    }
  }
  function be() {
    W("expectFirstItem") ? q(">") : we(), ne(), q("<li>"), k("expectFirstItem"), k("lastWasTag");
  }
  function O() {
    we(), v.pop(), ee(), q("</ol>");
  }
  function Pe() {
    we(), v.pop(), ee(), q("</ul>");
  }
  function we() {
    W("lastWasTag") && !W("slurpAllLineEndings") && ne(), q("</li>"), k("slurpAllLineEndings");
  }
  function se() {
    v.push(false), ne(), q("<blockquote>");
  }
  function ve() {
    v.pop(), ne(), q("</blockquote>"), k("slurpAllLineEndings");
  }
  function xe() {
    v[v.length - 1] || (ne(), q("<p>")), k("slurpAllLineEndings");
  }
  function qe() {
    v[v.length - 1] ? k("slurpAllLineEndings", true) : q("</p>");
  }
  function te() {
    ne(), q("<pre><code"), k("fencesCount", 0);
  }
  function _e() {
    let Z = V();
    q(' class="language-' + Z + '"');
  }
  function ct() {
    let Z = W("fencesCount") || 0;
    Z || (q(">"), k("slurpOneLineEnding", true)), k("fencesCount", Z + 1);
  }
  function E() {
    ne(), q("<pre><code>");
  }
  function Ze() {
    let Z = W("fencesCount");
    Z !== void 0 && Z < 2 && D.tightStack.length > 0 && !W("lastWasTag") && ee(), W("flowCodeSeenData") && ne(), q("</code></pre>"), Z !== void 0 && Z < 2 && ne(), k("flowCodeSeenData"), k("fencesCount"), k("slurpOneLineEnding");
  }
  function Qe() {
    f.push({ image: true }), c = void 0;
  }
  function F() {
    f.push({});
  }
  function et(Z) {
    f[f.length - 1].labelId = this.sliceSerialize(Z);
  }
  function Rt() {
    f[f.length - 1].label = V();
  }
  function b0(Z) {
    f[f.length - 1].referenceId = this.sliceSerialize(Z);
  }
  function s0() {
    H(), f[f.length - 1].destination = "";
  }
  function Ye() {
    H(), k("ignoreEncode", true);
  }
  function Zt() {
    f[f.length - 1].destination = V(), k("ignoreEncode");
  }
  function gt() {
    f[f.length - 1].title = V();
  }
  function Bt() {
    let Z = f.length - 1, le = f[Z], Ke = le.referenceId || le.labelId, lt = le.destination === void 0 ? s[Yt(Ke)] : le;
    for (c = true; Z--; )
      if (f[Z].image) {
        c = void 0;
        break;
      }
    le.image ? (q('<img src="' + i0(lt.destination, n.allowDangerousProtocol ? void 0 : Do) + '" alt="'), _(le.label), q('"')) : q('<a href="' + i0(lt.destination, n.allowDangerousProtocol ? void 0 : ll) + '"'), q(lt.title ? ' title="' + lt.title + '"' : ""), le.image ? q(" />") : (q(">"), _(le.label), q("</a>")), f.pop();
  }
  function Mt() {
    H(), f.push({});
  }
  function Tt(Z) {
    V(), f[f.length - 1].labelId = this.sliceSerialize(Z);
  }
  function pt() {
    H(), k("ignoreEncode", true);
  }
  function h0() {
    f[f.length - 1].destination = V(), k("ignoreEncode");
  }
  function H0() {
    f[f.length - 1].title = V();
  }
  function Dr() {
    let Z = f[f.length - 1], le = Yt(Z.labelId);
    V(), al.call(s, le) || (s[le] = f[f.length - 1]), f.pop();
  }
  function y0() {
    k("slurpAllLineEndings", true);
  }
  function w0(Z) {
    W("headingRank") || (k("headingRank", this.sliceSerialize(Z).length), ne(), q("<h" + W("headingRank") + ">"));
  }
  function Fr() {
    H(), k("slurpAllLineEndings");
  }
  function Nr() {
    k("slurpAllLineEndings", true);
  }
  function P0() {
    q("</h" + W("headingRank") + ">"), k("headingRank");
  }
  function G0(Z) {
    k("headingRank", this.sliceSerialize(Z).charCodeAt(0) === 61 ? 1 : 2);
  }
  function V0() {
    let Z = V();
    ne(), q("<h" + W("headingRank") + ">"), _(Z), q("</h" + W("headingRank") + ">"), k("slurpAllLineEndings"), k("headingRank");
  }
  function Qt(Z) {
    _(fe(this.sliceSerialize(Z)));
  }
  function k0(Z) {
    if (!W("slurpAllLineEndings")) {
      if (W("slurpOneLineEnding")) {
        k("slurpOneLineEnding");
        return;
      }
      if (W("inCodeText")) {
        _(" ");
        return;
      }
      _(fe(this.sliceSerialize(Z)));
    }
  }
  function Ir(Z) {
    _(fe(this.sliceSerialize(Z))), k("flowCodeSeenData", true);
  }
  function S0() {
    q("<br />");
  }
  function Fe() {
    ne(), vt();
  }
  function X() {
    k("ignoreEncode");
  }
  function vt() {
    n.allowDangerousHtml && k("ignoreEncode", true);
  }
  function U0() {
    q("<em>");
  }
  function j0() {
    q("<strong>");
  }
  function W0() {
    k("inCodeText", true), q("<code>");
  }
  function Kt() {
    k("inCodeText"), q("</code>");
  }
  function A0() {
    q("</em>");
  }
  function Lr() {
    q("</strong>");
  }
  function qr() {
    ne(), q("<hr />");
  }
  function tt(Z) {
    k("characterReferenceType", Z.type);
  }
  function yt(Z) {
    let le = this.sliceSerialize(Z);
    le = W("characterReferenceType") ? nl(le, W("characterReferenceType") === "characterReferenceMarkerNumeric" ? 10 : 16) : En(le), _(fe(le)), k("characterReferenceType");
  }
  function Et(Z) {
    let le = this.sliceSerialize(Z);
    q('<a href="' + i0(le, n.allowDangerousProtocol ? void 0 : ll) + '">'), _(fe(le)), q("</a>");
  }
  function z0(Z) {
    let le = this.sliceSerialize(Z);
    q('<a href="' + i0("mailto:" + le) + '">'), _(fe(le)), q("</a>");
  }
}
var al;
var ll;
var Do;
var ol = K(() => {
  rl();
  dr();
  zt();
  il();
  Fn();
  vr();
  Nn();
  al = {}.hasOwnProperty, ll = /^(https?|ircs?|mailto|xmpp)$/i, Do = /^https?$/i;
});
function oe(n, c, s, u) {
  let f = u ? u - 1 : Number.POSITIVE_INFINITY, v = 0;
  return d;
  function d(D) {
    return he(D) ? (n.enter(s), y(D)) : c(D);
  }
  function y(D) {
    return he(D) && v++ < f ? (n.consume(D), y) : (n.exit(s), c(D));
  }
}
var He = K(() => {
  ye();
});
function Fo(n) {
  let c = n.attempt(this.parser.constructs.contentInitial, u, f), s;
  return c;
  function u(y) {
    if (y === null) {
      n.consume(y);
      return;
    }
    return n.enter("lineEnding"), n.consume(y), n.exit("lineEnding"), oe(n, c, "linePrefix");
  }
  function f(y) {
    return n.enter("paragraph"), v(y);
  }
  function v(y) {
    let D = n.enter("chunkText", { contentType: "text", previous: s });
    return s && (s.next = D), s = D, d(y);
  }
  function d(y) {
    if (y === null) {
      n.exit("chunkText"), n.exit("paragraph"), n.consume(y);
      return;
    }
    return $(y) ? (n.consume(y), n.exit("chunkText"), v) : (n.consume(y), d);
  }
}
var sl;
var hl = K(() => {
  He();
  ye();
  sl = { tokenize: Fo };
});
function No(n) {
  let c = this, s = [], u = 0, f, v, d;
  return y;
  function y(ee) {
    if (u < s.length) {
      let ne = s[u];
      return c.containerState = ne[1], n.attempt(ne[0].continuation, D, B)(ee);
    }
    return B(ee);
  }
  function D(ee) {
    return c.containerState._closeFlow && _(), u++, y(ee);
  }
  function B(ee) {
    if (u === s.length) {
      if (!f)
        return M(ee);
      if (f.currentConstruct && f.currentConstruct.concrete)
        return W(ee);
      c.interrupt = true;
    }
    return c.containerState = {}, n.check(ml, z, T)(ee);
  }
  function z(ee) {
    return f && _(), q(u), M(ee);
  }
  function T(ee) {
    return c.parser.lazy[c.now().line] = u !== s.length, d = c.now().offset, W(ee);
  }
  function M(ee) {
    return c.containerState = {}, n.attempt(ml, k, W)(ee);
  }
  function k(ee) {
    return u++, s.push([c.currentConstruct, c.containerState]), M(ee);
  }
  function W(ee) {
    if (ee === null) {
      f && _(), q(0), n.consume(ee);
      return;
    }
    return f = f || c.parser.flow(c.now()), n.enter("chunkFlow", { contentType: "flow", previous: v, _tokenizer: f }), H(ee);
  }
  function H(ee) {
    if (ee === null) {
      V(n.exit("chunkFlow"), true), q(0), n.consume(ee);
      return;
    }
    return $(ee) ? (n.consume(ee), V(n.exit("chunkFlow")), u = 0, c.interrupt = void 0, y) : (n.consume(ee), H);
  }
  function V(ee, ne) {
    let fe = c.sliceStream(ee);
    if (ne && fe.push(null), ee.previous = v, v && (v.next = ee), v = ee, f.defineSkip(ee.start), f.write(fe), c.parser.lazy[ee.start.line]) {
      let U = f.events.length;
      for (; U--; )
        if (f.events[U][1].start.offset < d && (!f.events[U][1].end || f.events[U][1].end.offset > d))
          return;
      let ce = c.events.length, Ce = ce, be, O;
      for (; Ce--; )
        if (c.events[Ce][0] === "exit" && c.events[Ce][1].type === "chunkFlow") {
          if (be) {
            O = c.events[Ce][1].end;
            break;
          }
          be = true;
        }
      for (q(u), U = ce; U < c.events.length; )
        c.events[U][1].end = Object.assign({}, O), U++;
      je(c.events, Ce + 1, 0, c.events.slice(ce)), c.events.length = U;
    }
  }
  function q(ee) {
    let ne = s.length;
    for (; ne-- > ee; ) {
      let fe = s[ne];
      c.containerState = fe[1], fe[0].exit.call(c, n);
    }
    s.length = ee;
  }
  function _() {
    f.write([null]), v = void 0, f = void 0, c.containerState._closeFlow = void 0;
  }
}
function Io(n, c, s) {
  return oe(n, n.attempt(this.parser.constructs.document, c, s), "linePrefix", this.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4);
}
var cl;
var ml;
var pl = K(() => {
  He();
  ye();
  zt();
  cl = { tokenize: No }, ml = { tokenize: Io };
});
function v0(n) {
  if (n === null || ze(n) || jt(n))
    return 1;
  if (N0(n))
    return 2;
}
var In = K(() => {
  ye();
});
function Xt(n, c, s) {
  let u = [], f = -1;
  for (; ++f < n.length; ) {
    let v = n[f].resolveAll;
    v && !u.includes(v) && (c = v(c, s), u.push(v));
  }
  return c;
}
var I0 = K(() => {
});
function Lo(n, c) {
  let s = -1, u, f, v, d, y, D, B, z;
  for (; ++s < n.length; )
    if (n[s][0] === "enter" && n[s][1].type === "attentionSequence" && n[s][1]._close) {
      for (u = s; u--; )
        if (n[u][0] === "exit" && n[u][1].type === "attentionSequence" && n[u][1]._open && c.sliceSerialize(n[u][1]).charCodeAt(0) === c.sliceSerialize(n[s][1]).charCodeAt(0)) {
          if ((n[u][1]._close || n[s][1]._open) && (n[s][1].end.offset - n[s][1].start.offset) % 3 && !((n[u][1].end.offset - n[u][1].start.offset + n[s][1].end.offset - n[s][1].start.offset) % 3))
            continue;
          D = n[u][1].end.offset - n[u][1].start.offset > 1 && n[s][1].end.offset - n[s][1].start.offset > 1 ? 2 : 1;
          let T = Object.assign({}, n[u][1].end), M = Object.assign({}, n[s][1].start);
          fl(T, -D), fl(M, D), d = { type: D > 1 ? "strongSequence" : "emphasisSequence", start: T, end: Object.assign({}, n[u][1].end) }, y = { type: D > 1 ? "strongSequence" : "emphasisSequence", start: Object.assign({}, n[s][1].start), end: M }, v = { type: D > 1 ? "strongText" : "emphasisText", start: Object.assign({}, n[u][1].end), end: Object.assign({}, n[s][1].start) }, f = { type: D > 1 ? "strong" : "emphasis", start: Object.assign({}, d.start), end: Object.assign({}, y.end) }, n[u][1].end = Object.assign({}, d.start), n[s][1].start = Object.assign({}, y.end), B = [], n[u][1].end.offset - n[u][1].start.offset && (B = We(B, [["enter", n[u][1], c], ["exit", n[u][1], c]])), B = We(B, [["enter", f, c], ["enter", d, c], ["exit", d, c], ["enter", v, c]]), B = We(B, Xt(c.parser.constructs.insideSpan.null, n.slice(u + 1, s), c)), B = We(B, [["exit", v, c], ["enter", y, c], ["exit", y, c], ["exit", f, c]]), n[s][1].end.offset - n[s][1].start.offset ? (z = 2, B = We(B, [["enter", n[s][1], c], ["exit", n[s][1], c]])) : z = 0, je(n, u - 1, s - u + 3, B), s = u + B.length - z - 2;
          break;
        }
    }
  for (s = -1; ++s < n.length; )
    n[s][1].type === "attentionSequence" && (n[s][1].type = "data");
  return n;
}
function qo(n, c) {
  let s = this.parser.constructs.attentionMarkers.null, u = this.previous, f = v0(u), v;
  return d;
  function d(D) {
    return v = D, n.enter("attentionSequence"), y(D);
  }
  function y(D) {
    if (D === v)
      return n.consume(D), y;
    let B = n.exit("attentionSequence"), z = v0(D), T = !z || z === 2 && f || s.includes(D), M = !f || f === 2 && z || s.includes(u);
    return B._open = !!(v === 42 ? T : T && (f || !M)), B._close = !!(v === 42 ? M : M && (z || !T)), c(D);
  }
}
function fl(n, c) {
  n.column += c, n.offset += c, n._bufferIndex += c;
}
var L0;
var dl = K(() => {
  zt();
  In();
  I0();
  L0 = { name: "attention", tokenize: qo, resolveAll: Lo };
});
function Oo(n, c, s) {
  let u = 0;
  return f;
  function f(k) {
    return n.enter("autolink"), n.enter("autolinkMarker"), n.consume(k), n.exit("autolinkMarker"), n.enter("autolinkProtocol"), v;
  }
  function v(k) {
    return Xe(k) ? (n.consume(k), d) : B(k);
  }
  function d(k) {
    return k === 43 || k === 45 || k === 46 || Oe(k) ? (u = 1, y(k)) : B(k);
  }
  function y(k) {
    return k === 58 ? (n.consume(k), u = 0, D) : (k === 43 || k === 45 || k === 46 || Oe(k)) && u++ < 32 ? (n.consume(k), y) : (u = 0, B(k));
  }
  function D(k) {
    return k === 62 ? (n.exit("autolinkProtocol"), n.enter("autolinkMarker"), n.consume(k), n.exit("autolinkMarker"), n.exit("autolink"), c) : k === null || k === 32 || k === 60 || n0(k) ? s(k) : (n.consume(k), D);
  }
  function B(k) {
    return k === 64 ? (n.consume(k), z) : Xa(k) ? (n.consume(k), B) : s(k);
  }
  function z(k) {
    return Oe(k) ? T(k) : s(k);
  }
  function T(k) {
    return k === 46 ? (n.consume(k), u = 0, z) : k === 62 ? (n.exit("autolinkProtocol").type = "autolinkEmail", n.enter("autolinkMarker"), n.consume(k), n.exit("autolinkMarker"), n.exit("autolink"), c) : M(k);
  }
  function M(k) {
    if ((k === 45 || Oe(k)) && u++ < 63) {
      let W = k === 45 ? M : T;
      return n.consume(k), W;
    }
    return s(k);
  }
}
var Ln;
var gl = K(() => {
  ye();
  Ln = { name: "autolink", tokenize: Oo };
});
function Ro(n, c, s) {
  return u;
  function u(v) {
    return he(v) ? oe(n, f, "linePrefix")(v) : f(v);
  }
  function f(v) {
    return v === null || $(v) ? c(v) : s(v);
  }
}
var $t;
var xr = K(() => {
  He();
  ye();
  $t = { tokenize: Ro, partial: true };
});
function Ho(n, c, s) {
  let u = this;
  return f;
  function f(d) {
    if (d === 62) {
      let y = u.containerState;
      return y.open || (n.enter("blockQuote", { _container: true }), y.open = true), n.enter("blockQuotePrefix"), n.enter("blockQuoteMarker"), n.consume(d), n.exit("blockQuoteMarker"), v;
    }
    return s(d);
  }
  function v(d) {
    return he(d) ? (n.enter("blockQuotePrefixWhitespace"), n.consume(d), n.exit("blockQuotePrefixWhitespace"), n.exit("blockQuotePrefix"), c) : (n.exit("blockQuotePrefix"), c(d));
  }
}
function Po(n, c, s) {
  let u = this;
  return f;
  function f(d) {
    return he(d) ? oe(n, v, "linePrefix", u.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(d) : v(d);
  }
  function v(d) {
    return n.attempt(br, c, s)(d);
  }
}
function Go(n) {
  n.exit("blockQuote");
}
var br;
var vl = K(() => {
  He();
  ye();
  br = { name: "blockQuote", tokenize: Ho, continuation: { tokenize: Po }, exit: Go };
});
function Vo(n, c, s) {
  return u;
  function u(v) {
    return n.enter("characterEscape"), n.enter("escapeMarker"), n.consume(v), n.exit("escapeMarker"), f;
  }
  function f(v) {
    return Za(v) ? (n.enter("characterEscapeValue"), n.consume(v), n.exit("characterEscapeValue"), n.exit("characterEscape"), c) : s(v);
  }
}
var yr;
var xl = K(() => {
  ye();
  yr = { name: "characterEscape", tokenize: Vo };
});
function yl(n) {
  let c = "&" + n + ";";
  bl.innerHTML = c;
  let s = bl.textContent;
  return s.charCodeAt(s.length - 1) === 59 && n !== "semi" || s === c ? false : s;
}
var bl;
var wl = K(() => {
  bl = document.createElement("i");
});
function Uo(n, c, s) {
  let u = this, f = 0, v, d;
  return y;
  function y(T) {
    return n.enter("characterReference"), n.enter("characterReferenceMarker"), n.consume(T), n.exit("characterReferenceMarker"), D;
  }
  function D(T) {
    return T === 35 ? (n.enter("characterReferenceMarkerNumeric"), n.consume(T), n.exit("characterReferenceMarkerNumeric"), B) : (n.enter("characterReferenceValue"), v = 31, d = Oe, z(T));
  }
  function B(T) {
    return T === 88 || T === 120 ? (n.enter("characterReferenceMarkerHexadecimal"), n.consume(T), n.exit("characterReferenceMarkerHexadecimal"), n.enter("characterReferenceValue"), v = 6, d = $a, z) : (n.enter("characterReferenceValue"), v = 7, d = F0, z(T));
  }
  function z(T) {
    if (T === 59 && f) {
      let M = n.exit("characterReferenceValue");
      return d === Oe && !yl(u.sliceSerialize(M)) ? s(T) : (n.enter("characterReferenceMarker"), n.consume(T), n.exit("characterReferenceMarker"), n.exit("characterReference"), c);
    }
    return d(T) && f++ < v ? (n.consume(T), z) : s(T);
  }
}
var wr;
var kl = K(() => {
  wl();
  ye();
  wr = { name: "characterReference", tokenize: Uo };
});
function jo(n, c, s) {
  let u = this, f = { tokenize: fe, partial: true }, v = 0, d = 0, y;
  return D;
  function D(U) {
    return B(U);
  }
  function B(U) {
    let ce = u.events[u.events.length - 1];
    return v = ce && ce[1].type === "linePrefix" ? ce[2].sliceSerialize(ce[1], true).length : 0, y = U, n.enter("codeFenced"), n.enter("codeFencedFence"), n.enter("codeFencedFenceSequence"), z(U);
  }
  function z(U) {
    return U === y ? (d++, n.consume(U), z) : d < 3 ? s(U) : (n.exit("codeFencedFenceSequence"), he(U) ? oe(n, T, "whitespace")(U) : T(U));
  }
  function T(U) {
    return U === null || $(U) ? (n.exit("codeFencedFence"), u.interrupt ? c(U) : n.check(Sl, H, ne)(U)) : (n.enter("codeFencedFenceInfo"), n.enter("chunkString", { contentType: "string" }), M(U));
  }
  function M(U) {
    return U === null || $(U) ? (n.exit("chunkString"), n.exit("codeFencedFenceInfo"), T(U)) : he(U) ? (n.exit("chunkString"), n.exit("codeFencedFenceInfo"), oe(n, k, "whitespace")(U)) : U === 96 && U === y ? s(U) : (n.consume(U), M);
  }
  function k(U) {
    return U === null || $(U) ? T(U) : (n.enter("codeFencedFenceMeta"), n.enter("chunkString", { contentType: "string" }), W(U));
  }
  function W(U) {
    return U === null || $(U) ? (n.exit("chunkString"), n.exit("codeFencedFenceMeta"), T(U)) : U === 96 && U === y ? s(U) : (n.consume(U), W);
  }
  function H(U) {
    return n.attempt(f, ne, V)(U);
  }
  function V(U) {
    return n.enter("lineEnding"), n.consume(U), n.exit("lineEnding"), q;
  }
  function q(U) {
    return v > 0 && he(U) ? oe(n, _, "linePrefix", v + 1)(U) : _(U);
  }
  function _(U) {
    return U === null || $(U) ? n.check(Sl, H, ne)(U) : (n.enter("codeFlowValue"), ee(U));
  }
  function ee(U) {
    return U === null || $(U) ? (n.exit("codeFlowValue"), _(U)) : (n.consume(U), ee);
  }
  function ne(U) {
    return n.exit("codeFenced"), c(U);
  }
  function fe(U, ce, Ce) {
    let be = 0;
    return O;
    function O(xe) {
      return U.enter("lineEnding"), U.consume(xe), U.exit("lineEnding"), Pe;
    }
    function Pe(xe) {
      return U.enter("codeFencedFence"), he(xe) ? oe(U, we, "linePrefix", u.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(xe) : we(xe);
    }
    function we(xe) {
      return xe === y ? (U.enter("codeFencedFenceSequence"), se(xe)) : Ce(xe);
    }
    function se(xe) {
      return xe === y ? (be++, U.consume(xe), se) : be >= d ? (U.exit("codeFencedFenceSequence"), he(xe) ? oe(U, ve, "whitespace")(xe) : ve(xe)) : Ce(xe);
    }
    function ve(xe) {
      return xe === null || $(xe) ? (U.exit("codeFencedFence"), ce(xe)) : Ce(xe);
    }
  }
}
function Wo(n, c, s) {
  let u = this;
  return f;
  function f(d) {
    return d === null ? s(d) : (n.enter("lineEnding"), n.consume(d), n.exit("lineEnding"), v);
  }
  function v(d) {
    return u.parser.lazy[u.now().line] ? s(d) : c(d);
  }
}
var Sl;
var kr;
var Al = K(() => {
  He();
  ye();
  Sl = { tokenize: Wo, partial: true }, kr = { name: "codeFenced", tokenize: jo, concrete: true };
});
function Xo(n, c, s) {
  let u = this;
  return f;
  function f(B) {
    return n.enter("codeIndented"), oe(n, v, "linePrefix", 4 + 1)(B);
  }
  function v(B) {
    let z = u.events[u.events.length - 1];
    return z && z[1].type === "linePrefix" && z[2].sliceSerialize(z[1], true).length >= 4 ? d(B) : s(B);
  }
  function d(B) {
    return B === null ? D(B) : $(B) ? n.attempt(Yo, d, D)(B) : (n.enter("codeFlowValue"), y(B));
  }
  function y(B) {
    return B === null || $(B) ? (n.exit("codeFlowValue"), d(B)) : (n.consume(B), y);
  }
  function D(B) {
    return n.exit("codeIndented"), c(B);
  }
}
function $o(n, c, s) {
  let u = this;
  return f;
  function f(d) {
    return u.parser.lazy[u.now().line] ? s(d) : $(d) ? (n.enter("lineEnding"), n.consume(d), n.exit("lineEnding"), f) : oe(n, v, "linePrefix", 4 + 1)(d);
  }
  function v(d) {
    let y = u.events[u.events.length - 1];
    return y && y[1].type === "linePrefix" && y[2].sliceSerialize(y[1], true).length >= 4 ? c(d) : $(d) ? f(d) : s(d);
  }
}
var q0;
var Yo;
var zl = K(() => {
  He();
  ye();
  q0 = { name: "codeIndented", tokenize: Xo }, Yo = { tokenize: $o, partial: true };
});
function Zo(n) {
  let c = n.length - 4, s = 3, u, f;
  if ((n[s][1].type === "lineEnding" || n[s][1].type === "space") && (n[c][1].type === "lineEnding" || n[c][1].type === "space")) {
    for (u = s; ++u < c; )
      if (n[u][1].type === "codeTextData") {
        n[s][1].type = "codeTextPadding", n[c][1].type = "codeTextPadding", s += 2, c -= 2;
        break;
      }
  }
  for (u = s - 1, c++; ++u <= c; )
    f === void 0 ? u !== c && n[u][1].type !== "lineEnding" && (f = u) : (u === c || n[u][1].type === "lineEnding") && (n[f][1].type = "codeTextData", u !== f + 2 && (n[f][1].end = n[u - 1][1].end, n.splice(f + 2, u - f - 2), c -= u - f - 2, u = f + 2), f = void 0);
  return n;
}
function Qo(n) {
  return n !== 96 || this.events[this.events.length - 1][1].type === "characterEscape";
}
function Ko(n, c, s) {
  let u = this, f = 0, v, d;
  return y;
  function y(M) {
    return n.enter("codeText"), n.enter("codeTextSequence"), D(M);
  }
  function D(M) {
    return M === 96 ? (n.consume(M), f++, D) : (n.exit("codeTextSequence"), B(M));
  }
  function B(M) {
    return M === null ? s(M) : M === 32 ? (n.enter("space"), n.consume(M), n.exit("space"), B) : M === 96 ? (d = n.enter("codeTextSequence"), v = 0, T(M)) : $(M) ? (n.enter("lineEnding"), n.consume(M), n.exit("lineEnding"), B) : (n.enter("codeTextData"), z(M));
  }
  function z(M) {
    return M === null || M === 32 || M === 96 || $(M) ? (n.exit("codeTextData"), B(M)) : (n.consume(M), z);
  }
  function T(M) {
    return M === 96 ? (n.consume(M), v++, T) : v === f ? (n.exit("codeTextSequence"), n.exit("codeText"), c(M)) : (d.type = "codeTextData", z(M));
  }
}
var qn;
var Cl = K(() => {
  ye();
  qn = { name: "codeText", tokenize: Ko, resolve: Zo, previous: Qo };
});
function Sr(n) {
  let c = {}, s = -1, u, f, v, d, y, D, B;
  for (; ++s < n.length; ) {
    for (; s in c; )
      s = c[s];
    if (u = n[s], s && u[1].type === "chunkFlow" && n[s - 1][1].type === "listItemPrefix" && (D = u[1]._tokenizer.events, v = 0, v < D.length && D[v][1].type === "lineEndingBlank" && (v += 2), v < D.length && D[v][1].type === "content"))
      for (; ++v < D.length && D[v][1].type !== "content"; )
        D[v][1].type === "chunkText" && (D[v][1]._isInFirstContentOfListItem = true, v++);
    if (u[0] === "enter")
      u[1].contentType && (Object.assign(c, Jo(n, s)), s = c[s], B = true);
    else if (u[1]._container) {
      for (v = s, f = void 0; v-- && (d = n[v], d[1].type === "lineEnding" || d[1].type === "lineEndingBlank"); )
        d[0] === "enter" && (f && (n[f][1].type = "lineEndingBlank"), d[1].type = "lineEnding", f = v);
      f && (u[1].end = Object.assign({}, n[f][1].start), y = n.slice(f, s), y.unshift(u), je(n, f, s - f + 1, y));
    }
  }
  return !B;
}
function Jo(n, c) {
  let s = n[c][1], u = n[c][2], f = c - 1, v = [], d = s._tokenizer || u.parser[s.contentType](s.start), y = d.events, D = [], B = {}, z, T, M = -1, k = s, W = 0, H = 0, V = [H];
  for (; k; ) {
    for (; n[++f][1] !== k; )
      ;
    v.push(f), k._tokenizer || (z = u.sliceStream(k), k.next || z.push(null), T && d.defineSkip(k.start), k._isInFirstContentOfListItem && (d._gfmTasklistFirstContentOfListItem = true), d.write(z), k._isInFirstContentOfListItem && (d._gfmTasklistFirstContentOfListItem = void 0)), T = k, k = k.next;
  }
  for (k = s; ++M < y.length; )
    y[M][0] === "exit" && y[M - 1][0] === "enter" && y[M][1].type === y[M - 1][1].type && y[M][1].start.line !== y[M][1].end.line && (H = M + 1, V.push(H), k._tokenizer = void 0, k.previous = void 0, k = k.next);
  for (d.events = [], k ? (k._tokenizer = void 0, k.previous = void 0) : V.pop(), M = V.length; M--; ) {
    let q = y.slice(V[M], V[M + 1]), _ = v.pop();
    D.unshift([_, _ + q.length - 1]), je(n, _, 2, q);
  }
  for (M = -1; ++M < D.length; )
    B[W + D[M][0]] = W + D[M][1], W += D[M][1] - D[M][0] - 1;
  return B;
}
var On = K(() => {
  zt();
});
function es(n) {
  return Sr(n), n;
}
function ts(n, c) {
  let s;
  return u;
  function u(y) {
    return n.enter("content"), s = n.enter("chunkContent", { contentType: "content" }), f(y);
  }
  function f(y) {
    return y === null ? v(y) : $(y) ? n.check(_o, d, v)(y) : (n.consume(y), f);
  }
  function v(y) {
    return n.exit("chunkContent"), n.exit("content"), c(y);
  }
  function d(y) {
    return n.consume(y), n.exit("chunkContent"), s.next = n.enter("chunkContent", { contentType: "content", previous: s }), s = s.next, f;
  }
}
function rs(n, c, s) {
  let u = this;
  return f;
  function f(d) {
    return n.exit("chunkContent"), n.enter("lineEnding"), n.consume(d), n.exit("lineEnding"), oe(n, v, "linePrefix");
  }
  function v(d) {
    if (d === null || $(d))
      return s(d);
    let y = u.events[u.events.length - 1];
    return !u.parser.constructs.disable.null.includes("codeIndented") && y && y[1].type === "linePrefix" && y[2].sliceSerialize(y[1], true).length >= 4 ? c(d) : n.interrupt(u.parser.constructs.flow, s, c)(d);
  }
}
var Rn;
var _o;
var Bl = K(() => {
  He();
  ye();
  On();
  Rn = { tokenize: ts, resolve: es }, _o = { tokenize: rs, partial: true };
});
function Ar(n, c, s, u, f, v, d, y, D) {
  let B = D || Number.POSITIVE_INFINITY, z = 0;
  return T;
  function T(q) {
    return q === 60 ? (n.enter(u), n.enter(f), n.enter(v), n.consume(q), n.exit(v), M) : q === null || q === 32 || q === 41 || n0(q) ? s(q) : (n.enter(u), n.enter(d), n.enter(y), n.enter("chunkString", { contentType: "string" }), H(q));
  }
  function M(q) {
    return q === 62 ? (n.enter(v), n.consume(q), n.exit(v), n.exit(f), n.exit(u), c) : (n.enter(y), n.enter("chunkString", { contentType: "string" }), k(q));
  }
  function k(q) {
    return q === 62 ? (n.exit("chunkString"), n.exit(y), M(q)) : q === null || q === 60 || $(q) ? s(q) : (n.consume(q), q === 92 ? W : k);
  }
  function W(q) {
    return q === 60 || q === 62 || q === 92 ? (n.consume(q), k) : k(q);
  }
  function H(q) {
    return !z && (q === null || q === 41 || ze(q)) ? (n.exit("chunkString"), n.exit(y), n.exit(d), n.exit(u), c(q)) : z < B && q === 40 ? (n.consume(q), z++, H) : q === 41 ? (n.consume(q), z--, H) : q === null || q === 32 || q === 40 || n0(q) ? s(q) : (n.consume(q), q === 92 ? V : H);
  }
  function V(q) {
    return q === 40 || q === 41 || q === 92 ? (n.consume(q), H) : H(q);
  }
}
var Hn = K(() => {
  ye();
});
function zr(n, c, s, u, f, v) {
  let d = this, y = 0, D;
  return B;
  function B(k) {
    return n.enter(u), n.enter(f), n.consume(k), n.exit(f), n.enter(v), z;
  }
  function z(k) {
    return y > 999 || k === null || k === 91 || k === 93 && !D || k === 94 && !y && "_hiddenFootnoteSupport" in d.parser.constructs ? s(k) : k === 93 ? (n.exit(v), n.enter(f), n.consume(k), n.exit(f), n.exit(u), c) : $(k) ? (n.enter("lineEnding"), n.consume(k), n.exit("lineEnding"), z) : (n.enter("chunkString", { contentType: "string" }), T(k));
  }
  function T(k) {
    return k === null || k === 91 || k === 93 || $(k) || y++ > 999 ? (n.exit("chunkString"), z(k)) : (n.consume(k), D || (D = !he(k)), k === 92 ? M : T);
  }
  function M(k) {
    return k === 91 || k === 92 || k === 93 ? (n.consume(k), y++, T) : T(k);
  }
}
var Pn = K(() => {
  ye();
});
function Cr(n, c, s, u, f, v) {
  let d;
  return y;
  function y(M) {
    return M === 34 || M === 39 || M === 40 ? (n.enter(u), n.enter(f), n.consume(M), n.exit(f), d = M === 40 ? 41 : M, D) : s(M);
  }
  function D(M) {
    return M === d ? (n.enter(f), n.consume(M), n.exit(f), n.exit(u), c) : (n.enter(v), B(M));
  }
  function B(M) {
    return M === d ? (n.exit(v), D(d)) : M === null ? s(M) : $(M) ? (n.enter("lineEnding"), n.consume(M), n.exit("lineEnding"), oe(n, B, "linePrefix")) : (n.enter("chunkString", { contentType: "string" }), z(M));
  }
  function z(M) {
    return M === d || M === null || $(M) ? (n.exit("chunkString"), B(M)) : (n.consume(M), M === 92 ? T : z);
  }
  function T(M) {
    return M === d || M === 92 ? (n.consume(M), z) : z(M);
  }
}
var Gn = K(() => {
  He();
  ye();
});
function a0(n, c) {
  let s;
  return u;
  function u(f) {
    return $(f) ? (n.enter("lineEnding"), n.consume(f), n.exit("lineEnding"), s = true, u) : he(f) ? oe(n, u, s ? "linePrefix" : "lineSuffix")(f) : c(f);
  }
}
var Vn = K(() => {
  He();
  ye();
});
function is(n, c, s) {
  let u = this, f;
  return v;
  function v(k) {
    return n.enter("definition"), d(k);
  }
  function d(k) {
    return zr.call(u, n, y, s, "definitionLabel", "definitionLabelMarker", "definitionLabelString")(k);
  }
  function y(k) {
    return f = Yt(u.sliceSerialize(u.events[u.events.length - 1][1]).slice(1, -1)), k === 58 ? (n.enter("definitionMarker"), n.consume(k), n.exit("definitionMarker"), D) : s(k);
  }
  function D(k) {
    return ze(k) ? a0(n, B)(k) : B(k);
  }
  function B(k) {
    return Ar(n, z, s, "definitionDestination", "definitionDestinationLiteral", "definitionDestinationLiteralMarker", "definitionDestinationRaw", "definitionDestinationString")(k);
  }
  function z(k) {
    return n.attempt(ns, T, T)(k);
  }
  function T(k) {
    return he(k) ? oe(n, M, "whitespace")(k) : M(k);
  }
  function M(k) {
    return k === null || $(k) ? (n.exit("definition"), u.parser.defined.push(f), c(k)) : s(k);
  }
}
function as(n, c, s) {
  return u;
  function u(y) {
    return ze(y) ? a0(n, f)(y) : s(y);
  }
  function f(y) {
    return Cr(n, v, s, "definitionTitle", "definitionTitleMarker", "definitionTitleString")(y);
  }
  function v(y) {
    return he(y) ? oe(n, d, "whitespace")(y) : d(y);
  }
  function d(y) {
    return y === null || $(y) ? c(y) : s(y);
  }
}
var Un;
var ns;
var Ml = K(() => {
  Hn();
  Pn();
  He();
  Gn();
  Vn();
  ye();
  vr();
  Un = { name: "definition", tokenize: is }, ns = { tokenize: as, partial: true };
});
function ls(n, c, s) {
  return u;
  function u(v) {
    return n.enter("hardBreakEscape"), n.consume(v), f;
  }
  function f(v) {
    return $(v) ? (n.exit("hardBreakEscape"), c(v)) : s(v);
  }
}
var jn;
var Tl = K(() => {
  ye();
  jn = { name: "hardBreakEscape", tokenize: ls };
});
function us(n, c) {
  let s = n.length - 2, u = 3, f, v;
  return n[u][1].type === "whitespace" && (u += 2), s - 2 > u && n[s][1].type === "whitespace" && (s -= 2), n[s][1].type === "atxHeadingSequence" && (u === s - 1 || s - 4 > u && n[s - 2][1].type === "whitespace") && (s -= u + 1 === s ? 2 : 4), s > u && (f = { type: "atxHeadingText", start: n[u][1].start, end: n[s][1].end }, v = { type: "chunkText", start: n[u][1].start, end: n[s][1].end, contentType: "text" }, je(n, u, s - u + 1, [["enter", f, c], ["enter", v, c], ["exit", v, c], ["exit", f, c]])), n;
}
function os(n, c, s) {
  let u = 0;
  return f;
  function f(z) {
    return n.enter("atxHeading"), v(z);
  }
  function v(z) {
    return n.enter("atxHeadingSequence"), d(z);
  }
  function d(z) {
    return z === 35 && u++ < 6 ? (n.consume(z), d) : z === null || ze(z) ? (n.exit("atxHeadingSequence"), y(z)) : s(z);
  }
  function y(z) {
    return z === 35 ? (n.enter("atxHeadingSequence"), D(z)) : z === null || $(z) ? (n.exit("atxHeading"), c(z)) : he(z) ? oe(n, y, "whitespace")(z) : (n.enter("atxHeadingText"), B(z));
  }
  function D(z) {
    return z === 35 ? (n.consume(z), D) : (n.exit("atxHeadingSequence"), y(z));
  }
  function B(z) {
    return z === null || z === 35 || ze(z) ? (n.exit("atxHeadingText"), y(z)) : (n.consume(z), B);
  }
}
var Wn;
var El = K(() => {
  He();
  ye();
  zt();
  Wn = { name: "headingAtx", tokenize: os, resolve: us };
});
var Dl;
var Yn;
var Fl = K(() => {
  Dl = ["address", "article", "aside", "base", "basefont", "blockquote", "body", "caption", "center", "col", "colgroup", "dd", "details", "dialog", "dir", "div", "dl", "dt", "fieldset", "figcaption", "figure", "footer", "form", "frame", "frameset", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hr", "html", "iframe", "legend", "li", "link", "main", "menu", "menuitem", "nav", "noframes", "ol", "optgroup", "option", "p", "param", "search", "section", "summary", "table", "tbody", "td", "tfoot", "th", "thead", "title", "tr", "track", "ul"], Yn = ["pre", "script", "style", "textarea"];
});
function ms(n) {
  let c = n.length;
  for (; c-- && !(n[c][0] === "enter" && n[c][1].type === "htmlFlow"); )
    ;
  return c > 1 && n[c - 2][1].type === "linePrefix" && (n[c][1].start = n[c - 2][1].start, n[c + 1][1].start = n[c - 2][1].start, n.splice(c - 2, 2)), n;
}
function cs(n, c, s) {
  let u = this, f, v, d, y, D;
  return B;
  function B(F) {
    return z(F);
  }
  function z(F) {
    return n.enter("htmlFlow"), n.enter("htmlFlowData"), n.consume(F), T;
  }
  function T(F) {
    return F === 33 ? (n.consume(F), M) : F === 47 ? (n.consume(F), v = true, H) : F === 63 ? (n.consume(F), f = 3, u.interrupt ? c : E) : Xe(F) ? (n.consume(F), d = String.fromCharCode(F), V) : s(F);
  }
  function M(F) {
    return F === 45 ? (n.consume(F), f = 2, k) : F === 91 ? (n.consume(F), f = 5, y = 0, W) : Xe(F) ? (n.consume(F), f = 4, u.interrupt ? c : E) : s(F);
  }
  function k(F) {
    return F === 45 ? (n.consume(F), u.interrupt ? c : E) : s(F);
  }
  function W(F) {
    let et = "CDATA[";
    return F === et.charCodeAt(y++) ? (n.consume(F), y === et.length ? u.interrupt ? c : we : W) : s(F);
  }
  function H(F) {
    return Xe(F) ? (n.consume(F), d = String.fromCharCode(F), V) : s(F);
  }
  function V(F) {
    if (F === null || F === 47 || F === 62 || ze(F)) {
      let et = F === 47, Rt = d.toLowerCase();
      return !et && !v && Yn.includes(Rt) ? (f = 1, u.interrupt ? c(F) : we(F)) : Dl.includes(d.toLowerCase()) ? (f = 6, et ? (n.consume(F), q) : u.interrupt ? c(F) : we(F)) : (f = 7, u.interrupt && !u.parser.lazy[u.now().line] ? s(F) : v ? _(F) : ee(F));
    }
    return F === 45 || Oe(F) ? (n.consume(F), d += String.fromCharCode(F), V) : s(F);
  }
  function q(F) {
    return F === 62 ? (n.consume(F), u.interrupt ? c : we) : s(F);
  }
  function _(F) {
    return he(F) ? (n.consume(F), _) : O(F);
  }
  function ee(F) {
    return F === 47 ? (n.consume(F), O) : F === 58 || F === 95 || Xe(F) ? (n.consume(F), ne) : he(F) ? (n.consume(F), ee) : O(F);
  }
  function ne(F) {
    return F === 45 || F === 46 || F === 58 || F === 95 || Oe(F) ? (n.consume(F), ne) : fe(F);
  }
  function fe(F) {
    return F === 61 ? (n.consume(F), U) : he(F) ? (n.consume(F), fe) : ee(F);
  }
  function U(F) {
    return F === null || F === 60 || F === 61 || F === 62 || F === 96 ? s(F) : F === 34 || F === 39 ? (n.consume(F), D = F, ce) : he(F) ? (n.consume(F), U) : Ce(F);
  }
  function ce(F) {
    return F === D ? (n.consume(F), D = null, be) : F === null || $(F) ? s(F) : (n.consume(F), ce);
  }
  function Ce(F) {
    return F === null || F === 34 || F === 39 || F === 47 || F === 60 || F === 61 || F === 62 || F === 96 || ze(F) ? fe(F) : (n.consume(F), Ce);
  }
  function be(F) {
    return F === 47 || F === 62 || he(F) ? ee(F) : s(F);
  }
  function O(F) {
    return F === 62 ? (n.consume(F), Pe) : s(F);
  }
  function Pe(F) {
    return F === null || $(F) ? we(F) : he(F) ? (n.consume(F), Pe) : s(F);
  }
  function we(F) {
    return F === 45 && f === 2 ? (n.consume(F), qe) : F === 60 && f === 1 ? (n.consume(F), te) : F === 62 && f === 4 ? (n.consume(F), Ze) : F === 63 && f === 3 ? (n.consume(F), E) : F === 93 && f === 5 ? (n.consume(F), ct) : $(F) && (f === 6 || f === 7) ? (n.exit("htmlFlowData"), n.check(ss, Qe, se)(F)) : F === null || $(F) ? (n.exit("htmlFlowData"), se(F)) : (n.consume(F), we);
  }
  function se(F) {
    return n.check(hs, ve, Qe)(F);
  }
  function ve(F) {
    return n.enter("lineEnding"), n.consume(F), n.exit("lineEnding"), xe;
  }
  function xe(F) {
    return F === null || $(F) ? se(F) : (n.enter("htmlFlowData"), we(F));
  }
  function qe(F) {
    return F === 45 ? (n.consume(F), E) : we(F);
  }
  function te(F) {
    return F === 47 ? (n.consume(F), d = "", _e) : we(F);
  }
  function _e(F) {
    if (F === 62) {
      let et = d.toLowerCase();
      return Yn.includes(et) ? (n.consume(F), Ze) : we(F);
    }
    return Xe(F) && d.length < 8 ? (n.consume(F), d += String.fromCharCode(F), _e) : we(F);
  }
  function ct(F) {
    return F === 93 ? (n.consume(F), E) : we(F);
  }
  function E(F) {
    return F === 62 ? (n.consume(F), Ze) : F === 45 && f === 2 ? (n.consume(F), E) : we(F);
  }
  function Ze(F) {
    return F === null || $(F) ? (n.exit("htmlFlowData"), Qe(F)) : (n.consume(F), Ze);
  }
  function Qe(F) {
    return n.exit("htmlFlow"), c(F);
  }
}
function ps(n, c, s) {
  let u = this;
  return f;
  function f(d) {
    return $(d) ? (n.enter("lineEnding"), n.consume(d), n.exit("lineEnding"), v) : s(d);
  }
  function v(d) {
    return u.parser.lazy[u.now().line] ? s(d) : c(d);
  }
}
function fs(n, c, s) {
  return u;
  function u(f) {
    return n.enter("lineEnding"), n.consume(f), n.exit("lineEnding"), n.attempt($t, c, s);
  }
}
var Xn;
var ss;
var hs;
var Nl = K(() => {
  ye();
  Fl();
  xr();
  Xn = { name: "htmlFlow", tokenize: cs, resolveTo: ms, concrete: true }, ss = { tokenize: fs, partial: true }, hs = { tokenize: ps, partial: true };
});
function ds(n, c, s) {
  let u = this, f, v, d;
  return y;
  function y(E) {
    return n.enter("htmlText"), n.enter("htmlTextData"), n.consume(E), D;
  }
  function D(E) {
    return E === 33 ? (n.consume(E), B) : E === 47 ? (n.consume(E), fe) : E === 63 ? (n.consume(E), ee) : Xe(E) ? (n.consume(E), Ce) : s(E);
  }
  function B(E) {
    return E === 45 ? (n.consume(E), z) : E === 91 ? (n.consume(E), v = 0, W) : Xe(E) ? (n.consume(E), _) : s(E);
  }
  function z(E) {
    return E === 45 ? (n.consume(E), k) : s(E);
  }
  function T(E) {
    return E === null ? s(E) : E === 45 ? (n.consume(E), M) : $(E) ? (d = T, te(E)) : (n.consume(E), T);
  }
  function M(E) {
    return E === 45 ? (n.consume(E), k) : T(E);
  }
  function k(E) {
    return E === 62 ? qe(E) : E === 45 ? M(E) : T(E);
  }
  function W(E) {
    let Ze = "CDATA[";
    return E === Ze.charCodeAt(v++) ? (n.consume(E), v === Ze.length ? H : W) : s(E);
  }
  function H(E) {
    return E === null ? s(E) : E === 93 ? (n.consume(E), V) : $(E) ? (d = H, te(E)) : (n.consume(E), H);
  }
  function V(E) {
    return E === 93 ? (n.consume(E), q) : H(E);
  }
  function q(E) {
    return E === 62 ? qe(E) : E === 93 ? (n.consume(E), q) : H(E);
  }
  function _(E) {
    return E === null || E === 62 ? qe(E) : $(E) ? (d = _, te(E)) : (n.consume(E), _);
  }
  function ee(E) {
    return E === null ? s(E) : E === 63 ? (n.consume(E), ne) : $(E) ? (d = ee, te(E)) : (n.consume(E), ee);
  }
  function ne(E) {
    return E === 62 ? qe(E) : ee(E);
  }
  function fe(E) {
    return Xe(E) ? (n.consume(E), U) : s(E);
  }
  function U(E) {
    return E === 45 || Oe(E) ? (n.consume(E), U) : ce(E);
  }
  function ce(E) {
    return $(E) ? (d = ce, te(E)) : he(E) ? (n.consume(E), ce) : qe(E);
  }
  function Ce(E) {
    return E === 45 || Oe(E) ? (n.consume(E), Ce) : E === 47 || E === 62 || ze(E) ? be(E) : s(E);
  }
  function be(E) {
    return E === 47 ? (n.consume(E), qe) : E === 58 || E === 95 || Xe(E) ? (n.consume(E), O) : $(E) ? (d = be, te(E)) : he(E) ? (n.consume(E), be) : qe(E);
  }
  function O(E) {
    return E === 45 || E === 46 || E === 58 || E === 95 || Oe(E) ? (n.consume(E), O) : Pe(E);
  }
  function Pe(E) {
    return E === 61 ? (n.consume(E), we) : $(E) ? (d = Pe, te(E)) : he(E) ? (n.consume(E), Pe) : be(E);
  }
  function we(E) {
    return E === null || E === 60 || E === 61 || E === 62 || E === 96 ? s(E) : E === 34 || E === 39 ? (n.consume(E), f = E, se) : $(E) ? (d = we, te(E)) : he(E) ? (n.consume(E), we) : (n.consume(E), ve);
  }
  function se(E) {
    return E === f ? (n.consume(E), f = void 0, xe) : E === null ? s(E) : $(E) ? (d = se, te(E)) : (n.consume(E), se);
  }
  function ve(E) {
    return E === null || E === 34 || E === 39 || E === 60 || E === 61 || E === 96 ? s(E) : E === 47 || E === 62 || ze(E) ? be(E) : (n.consume(E), ve);
  }
  function xe(E) {
    return E === 47 || E === 62 || ze(E) ? be(E) : s(E);
  }
  function qe(E) {
    return E === 62 ? (n.consume(E), n.exit("htmlTextData"), n.exit("htmlText"), c) : s(E);
  }
  function te(E) {
    return n.exit("htmlTextData"), n.enter("lineEnding"), n.consume(E), n.exit("lineEnding"), _e;
  }
  function _e(E) {
    return he(E) ? oe(n, ct, "linePrefix", u.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(E) : ct(E);
  }
  function ct(E) {
    return n.enter("htmlTextData"), d(E);
  }
}
var $n;
var Il = K(() => {
  He();
  ye();
  $n = { name: "htmlText", tokenize: ds };
});
function bs(n) {
  let c = -1;
  for (; ++c < n.length; ) {
    let s = n[c][1];
    (s.type === "labelImage" || s.type === "labelLink" || s.type === "labelEnd") && (n.splice(c + 1, s.type === "labelImage" ? 4 : 2), s.type = "data", c++);
  }
  return n;
}
function ys(n, c) {
  let s = n.length, u = 0, f, v, d, y;
  for (; s--; )
    if (f = n[s][1], v) {
      if (f.type === "link" || f.type === "labelLink" && f._inactive)
        break;
      n[s][0] === "enter" && f.type === "labelLink" && (f._inactive = true);
    } else if (d) {
      if (n[s][0] === "enter" && (f.type === "labelImage" || f.type === "labelLink") && !f._balanced && (v = s, f.type !== "labelLink")) {
        u = 2;
        break;
      }
    } else
      f.type === "labelEnd" && (d = s);
  let D = { type: n[v][1].type === "labelLink" ? "link" : "image", start: Object.assign({}, n[v][1].start), end: Object.assign({}, n[n.length - 1][1].end) }, B = { type: "label", start: Object.assign({}, n[v][1].start), end: Object.assign({}, n[d][1].end) }, z = { type: "labelText", start: Object.assign({}, n[v + u + 2][1].end), end: Object.assign({}, n[d - 2][1].start) };
  return y = [["enter", D, c], ["enter", B, c]], y = We(y, n.slice(v + 1, v + u + 3)), y = We(y, [["enter", z, c]]), y = We(y, Xt(c.parser.constructs.insideSpan.null, n.slice(v + u + 4, d - 3), c)), y = We(y, [["exit", z, c], n[d - 2], n[d - 1], ["exit", B, c]]), y = We(y, n.slice(d + 1)), y = We(y, [["exit", D, c]]), je(n, v, n.length, y), n;
}
function ws(n, c, s) {
  let u = this, f = u.events.length, v, d;
  for (; f--; )
    if ((u.events[f][1].type === "labelImage" || u.events[f][1].type === "labelLink") && !u.events[f][1]._balanced) {
      v = u.events[f][1];
      break;
    }
  return y;
  function y(M) {
    return v ? v._inactive ? T(M) : (d = u.parser.defined.includes(Yt(u.sliceSerialize({ start: v.end, end: u.now() }))), n.enter("labelEnd"), n.enter("labelMarker"), n.consume(M), n.exit("labelMarker"), n.exit("labelEnd"), D) : s(M);
  }
  function D(M) {
    return M === 40 ? n.attempt(gs, z, d ? z : T)(M) : M === 91 ? n.attempt(vs, z, d ? B : T)(M) : d ? z(M) : T(M);
  }
  function B(M) {
    return n.attempt(xs, z, T)(M);
  }
  function z(M) {
    return c(M);
  }
  function T(M) {
    return v._balanced = true, s(M);
  }
}
function ks(n, c, s) {
  return u;
  function u(T) {
    return n.enter("resource"), n.enter("resourceMarker"), n.consume(T), n.exit("resourceMarker"), f;
  }
  function f(T) {
    return ze(T) ? a0(n, v)(T) : v(T);
  }
  function v(T) {
    return T === 41 ? z(T) : Ar(n, d, y, "resourceDestination", "resourceDestinationLiteral", "resourceDestinationLiteralMarker", "resourceDestinationRaw", "resourceDestinationString", 32)(T);
  }
  function d(T) {
    return ze(T) ? a0(n, D)(T) : z(T);
  }
  function y(T) {
    return s(T);
  }
  function D(T) {
    return T === 34 || T === 39 || T === 40 ? Cr(n, B, s, "resourceTitle", "resourceTitleMarker", "resourceTitleString")(T) : z(T);
  }
  function B(T) {
    return ze(T) ? a0(n, z)(T) : z(T);
  }
  function z(T) {
    return T === 41 ? (n.enter("resourceMarker"), n.consume(T), n.exit("resourceMarker"), n.exit("resource"), c) : s(T);
  }
}
function Ss(n, c, s) {
  let u = this;
  return f;
  function f(y) {
    return zr.call(u, n, v, d, "reference", "referenceMarker", "referenceString")(y);
  }
  function v(y) {
    return u.parser.defined.includes(Yt(u.sliceSerialize(u.events[u.events.length - 1][1]).slice(1, -1))) ? c(y) : s(y);
  }
  function d(y) {
    return s(y);
  }
}
function As(n, c, s) {
  return u;
  function u(v) {
    return n.enter("reference"), n.enter("referenceMarker"), n.consume(v), n.exit("referenceMarker"), f;
  }
  function f(v) {
    return v === 93 ? (n.enter("referenceMarker"), n.consume(v), n.exit("referenceMarker"), n.exit("reference"), c) : s(v);
  }
}
var l0;
var gs;
var vs;
var xs;
var Br = K(() => {
  Hn();
  Pn();
  Gn();
  Vn();
  ye();
  zt();
  vr();
  I0();
  l0 = { name: "labelEnd", tokenize: ws, resolveTo: ys, resolveAll: bs }, gs = { tokenize: ks }, vs = { tokenize: Ss }, xs = { tokenize: As };
});
function zs(n, c, s) {
  let u = this;
  return f;
  function f(y) {
    return n.enter("labelImage"), n.enter("labelImageMarker"), n.consume(y), n.exit("labelImageMarker"), v;
  }
  function v(y) {
    return y === 91 ? (n.enter("labelMarker"), n.consume(y), n.exit("labelMarker"), n.exit("labelImage"), d) : s(y);
  }
  function d(y) {
    return y === 94 && "_hiddenFootnoteSupport" in u.parser.constructs ? s(y) : c(y);
  }
}
var Zn;
var Ll = K(() => {
  Br();
  Zn = { name: "labelStartImage", tokenize: zs, resolveAll: l0.resolveAll };
});
function Cs(n, c, s) {
  let u = this;
  return f;
  function f(d) {
    return n.enter("labelLink"), n.enter("labelMarker"), n.consume(d), n.exit("labelMarker"), n.exit("labelLink"), v;
  }
  function v(d) {
    return d === 94 && "_hiddenFootnoteSupport" in u.parser.constructs ? s(d) : c(d);
  }
}
var Qn;
var ql = K(() => {
  Br();
  Qn = { name: "labelStartLink", tokenize: Cs, resolveAll: l0.resolveAll };
});
function Bs(n, c) {
  return s;
  function s(u) {
    return n.enter("lineEnding"), n.consume(u), n.exit("lineEnding"), oe(n, c, "linePrefix");
  }
}
var O0;
var Ol = K(() => {
  He();
  O0 = { name: "lineEnding", tokenize: Bs };
});
function Ms(n, c, s) {
  let u = 0, f;
  return v;
  function v(B) {
    return n.enter("thematicBreak"), d(B);
  }
  function d(B) {
    return f = B, y(B);
  }
  function y(B) {
    return B === f ? (n.enter("thematicBreakSequence"), D(B)) : u >= 3 && (B === null || $(B)) ? (n.exit("thematicBreak"), c(B)) : s(B);
  }
  function D(B) {
    return B === f ? (n.consume(B), u++, D) : (n.exit("thematicBreakSequence"), he(B) ? oe(n, y, "whitespace")(B) : y(B));
  }
}
var u0;
var Kn = K(() => {
  He();
  ye();
  u0 = { name: "thematicBreak", tokenize: Ms };
});
function Ds(n, c, s) {
  let u = this, f = u.events[u.events.length - 1], v = f && f[1].type === "linePrefix" ? f[2].sliceSerialize(f[1], true).length : 0, d = 0;
  return y;
  function y(k) {
    let W = u.containerState.type || (k === 42 || k === 43 || k === 45 ? "listUnordered" : "listOrdered");
    if (W === "listUnordered" ? !u.containerState.marker || k === u.containerState.marker : F0(k)) {
      if (u.containerState.type || (u.containerState.type = W, n.enter(W, { _container: true })), W === "listUnordered")
        return n.enter("listItemPrefix"), k === 42 || k === 45 ? n.check(u0, s, B)(k) : B(k);
      if (!u.interrupt || k === 49)
        return n.enter("listItemPrefix"), n.enter("listItemValue"), D(k);
    }
    return s(k);
  }
  function D(k) {
    return F0(k) && ++d < 10 ? (n.consume(k), D) : (!u.interrupt || d < 2) && (u.containerState.marker ? k === u.containerState.marker : k === 41 || k === 46) ? (n.exit("listItemValue"), B(k)) : s(k);
  }
  function B(k) {
    return n.enter("listItemMarker"), n.consume(k), n.exit("listItemMarker"), u.containerState.marker = u.containerState.marker || k, n.check($t, u.interrupt ? s : z, n.attempt(Ts, M, T));
  }
  function z(k) {
    return u.containerState.initialBlankLine = true, v++, M(k);
  }
  function T(k) {
    return he(k) ? (n.enter("listItemPrefixWhitespace"), n.consume(k), n.exit("listItemPrefixWhitespace"), M) : s(k);
  }
  function M(k) {
    return u.containerState.size = v + u.sliceSerialize(n.exit("listItemPrefix"), true).length, c(k);
  }
}
function Fs(n, c, s) {
  let u = this;
  return u.containerState._closeFlow = void 0, n.check($t, f, v);
  function f(y) {
    return u.containerState.furtherBlankLines = u.containerState.furtherBlankLines || u.containerState.initialBlankLine, oe(n, c, "listItemIndent", u.containerState.size + 1)(y);
  }
  function v(y) {
    return u.containerState.furtherBlankLines || !he(y) ? (u.containerState.furtherBlankLines = void 0, u.containerState.initialBlankLine = void 0, d(y)) : (u.containerState.furtherBlankLines = void 0, u.containerState.initialBlankLine = void 0, n.attempt(Es, c, d)(y));
  }
  function d(y) {
    return u.containerState._closeFlow = true, u.interrupt = void 0, oe(n, n.attempt(Je, c, s), "linePrefix", u.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(y);
  }
}
function Ns(n, c, s) {
  let u = this;
  return oe(n, f, "listItemIndent", u.containerState.size + 1);
  function f(v) {
    let d = u.events[u.events.length - 1];
    return d && d[1].type === "listItemIndent" && d[2].sliceSerialize(d[1], true).length === u.containerState.size ? c(v) : s(v);
  }
}
function Is(n) {
  n.exit(this.containerState.type);
}
function Ls(n, c, s) {
  let u = this;
  return oe(n, f, "listItemPrefixWhitespace", u.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4 + 1);
  function f(v) {
    let d = u.events[u.events.length - 1];
    return !he(v) && d && d[1].type === "listItemPrefixWhitespace" ? c(v) : s(v);
  }
}
var Je;
var Ts;
var Es;
var Rl = K(() => {
  He();
  ye();
  xr();
  Kn();
  Je = { name: "list", tokenize: Ds, continuation: { tokenize: Fs }, exit: Is }, Ts = { tokenize: Ls, partial: true }, Es = { tokenize: Ns, partial: true };
});
function qs(n, c) {
  let s = n.length, u, f, v;
  for (; s--; )
    if (n[s][0] === "enter") {
      if (n[s][1].type === "content") {
        u = s;
        break;
      }
      n[s][1].type === "paragraph" && (f = s);
    } else
      n[s][1].type === "content" && n.splice(s, 1), !v && n[s][1].type === "definition" && (v = s);
  let d = { type: "setextHeading", start: Object.assign({}, n[f][1].start), end: Object.assign({}, n[n.length - 1][1].end) };
  return n[f][1].type = "setextHeadingText", v ? (n.splice(f, 0, ["enter", d, c]), n.splice(v + 1, 0, ["exit", n[u][1], c]), n[u][1].end = Object.assign({}, n[v][1].end)) : n[u][1] = d, n.push(["exit", d, c]), n;
}
function Os(n, c, s) {
  let u = this, f;
  return v;
  function v(B) {
    let z = u.events.length, T;
    for (; z--; )
      if (u.events[z][1].type !== "lineEnding" && u.events[z][1].type !== "linePrefix" && u.events[z][1].type !== "content") {
        T = u.events[z][1].type === "paragraph";
        break;
      }
    return !u.parser.lazy[u.now().line] && (u.interrupt || T) ? (n.enter("setextHeadingLine"), f = B, d(B)) : s(B);
  }
  function d(B) {
    return n.enter("setextHeadingLineSequence"), y(B);
  }
  function y(B) {
    return B === f ? (n.consume(B), y) : (n.exit("setextHeadingLineSequence"), he(B) ? oe(n, D, "lineSuffix")(B) : D(B));
  }
  function D(B) {
    return B === null || $(B) ? (n.exit("setextHeadingLine"), c(B)) : s(B);
  }
}
var Mr;
var Hl = K(() => {
  He();
  ye();
  Mr = { name: "setextUnderline", tokenize: Os, resolveTo: qs };
});
var Jn = K(() => {
  dl();
  gl();
  xr();
  vl();
  xl();
  kl();
  Al();
  zl();
  Cl();
  Bl();
  Ml();
  Tl();
  El();
  Nl();
  Il();
  Br();
  Ll();
  ql();
  Ol();
  Rl();
  Hl();
  Kn();
});
function Rs(n) {
  let c = this, s = n.attempt($t, u, n.attempt(this.parser.constructs.flowInitial, f, oe(n, n.attempt(this.parser.constructs.flow, f, n.attempt(Rn, f)), "linePrefix")));
  return s;
  function u(v) {
    if (v === null) {
      n.consume(v);
      return;
    }
    return n.enter("lineEndingBlank"), n.consume(v), n.exit("lineEndingBlank"), c.currentConstruct = void 0, s;
  }
  function f(v) {
    if (v === null) {
      n.consume(v);
      return;
    }
    return n.enter("lineEnding"), n.consume(v), n.exit("lineEnding"), c.currentConstruct = void 0, s;
  }
}
var Pl;
var Gl = K(() => {
  Jn();
  He();
  Pl = { tokenize: Rs };
});
function Wl(n) {
  return { tokenize: c, resolveAll: Yl(n === "text" ? Hs : void 0) };
  function c(s) {
    let u = this, f = this.parser.constructs[n], v = s.attempt(f, d, y);
    return d;
    function d(z) {
      return B(z) ? v(z) : y(z);
    }
    function y(z) {
      if (z === null) {
        s.consume(z);
        return;
      }
      return s.enter("data"), s.consume(z), D;
    }
    function D(z) {
      return B(z) ? (s.exit("data"), v(z)) : (s.consume(z), D);
    }
    function B(z) {
      if (z === null)
        return true;
      let T = f[z], M = -1;
      if (T)
        for (; ++M < T.length; ) {
          let k = T[M];
          if (!k.previous || k.previous.call(u, u.previous))
            return true;
        }
      return false;
    }
  }
}
function Yl(n) {
  return c;
  function c(s, u) {
    let f = -1, v;
    for (; ++f <= s.length; )
      v === void 0 ? s[f] && s[f][1].type === "data" && (v = f, f++) : (!s[f] || s[f][1].type !== "data") && (f !== v + 2 && (s[v][1].end = s[f - 1][1].end, s.splice(v + 2, f - v - 2), f = v + 2), v = void 0);
    return n ? n(s, u) : s;
  }
}
function Hs(n, c) {
  let s = -1;
  for (; ++s <= n.length; )
    if ((s === n.length || n[s][1].type === "lineEnding") && n[s - 1][1].type === "data") {
      let u = n[s - 1][1], f = c.sliceStream(u), v = f.length, d = -1, y = 0, D;
      for (; v--; ) {
        let B = f[v];
        if (typeof B == "string") {
          for (d = B.length; B.charCodeAt(d - 1) === 32; )
            y++, d--;
          if (d)
            break;
          d = -1;
        } else if (B === -2)
          D = true, y++;
        else if (B !== -1) {
          v++;
          break;
        }
      }
      if (y) {
        let B = { type: s === n.length || D || y < 2 ? "lineSuffix" : "hardBreakTrailing", start: { line: u.end.line, column: u.end.column - y, offset: u.end.offset - y, _index: u.start._index + v, _bufferIndex: v ? d : u.start._bufferIndex + d }, end: Object.assign({}, u.end) };
        u.end = Object.assign({}, B.start), u.start.offset === u.end.offset ? Object.assign(u, B) : (n.splice(s, 0, ["enter", B, c], ["exit", B, c]), s += 2);
      }
      s++;
    }
  return n;
}
var Vl;
var Ul;
var jl;
var _n = K(() => {
  Vl = { resolveAll: Yl() }, Ul = Wl("string"), jl = Wl("text");
});
function Xl(n, c, s) {
  let u = Object.assign(s ? Object.assign({}, s) : { line: 1, column: 1, offset: 0 }, { _index: 0, _bufferIndex: -1 }), f = {}, v = [], d = [], y = [], D = true, B = { consume: ne, enter: fe, exit: U, attempt: be(ce), check: be(Ce), interrupt: be(Ce, { interrupt: true }) }, z = { previous: null, code: null, containerState: {}, events: [], parser: n, sliceStream: H, sliceSerialize: W, now: V, defineSkip: q, write: k }, T = c.tokenize.call(z, B), M;
  return c.resolveAll && v.push(c), z;
  function k(se) {
    return d = We(d, se), _(), d[d.length - 1] !== null ? [] : (O(c, 0), z.events = Xt(v, z.events, z), z.events);
  }
  function W(se, ve) {
    return Gs(H(se), ve);
  }
  function H(se) {
    return Ps(d, se);
  }
  function V() {
    return Object.assign({}, u);
  }
  function q(se) {
    f[se.line] = se.column, we();
  }
  function _() {
    let se;
    for (; u._index < d.length; ) {
      let ve = d[u._index];
      if (typeof ve == "string")
        for (se = u._index, u._bufferIndex < 0 && (u._bufferIndex = 0); u._index === se && u._bufferIndex < ve.length; )
          ee(ve.charCodeAt(u._bufferIndex));
      else
        ee(ve);
    }
  }
  function ee(se) {
    D = void 0, M = se, T = T(se);
  }
  function ne(se) {
    $(se) ? (u.line++, u.column = 1, u.offset += se === -3 ? 2 : 1, we()) : se !== -1 && (u.column++, u.offset++), u._bufferIndex < 0 ? u._index++ : (u._bufferIndex++, u._bufferIndex === d[u._index].length && (u._bufferIndex = -1, u._index++)), z.previous = se, D = true;
  }
  function fe(se, ve) {
    let xe = ve || {};
    return xe.type = se, xe.start = V(), z.events.push(["enter", xe, z]), y.push(xe), xe;
  }
  function U(se) {
    let ve = y.pop();
    return ve.end = V(), z.events.push(["exit", ve, z]), ve;
  }
  function ce(se, ve) {
    O(se, ve.from);
  }
  function Ce(se, ve) {
    ve.restore();
  }
  function be(se, ve) {
    return xe;
    function xe(qe, te, _e) {
      let ct, E, Ze, Qe;
      return Array.isArray(qe) ? et(qe) : "tokenize" in qe ? et([qe]) : F(qe);
      function F(Ye) {
        return Zt;
        function Zt(gt) {
          let Bt = gt !== null && Ye[gt], Mt = gt !== null && Ye.null, Tt = [...Array.isArray(Bt) ? Bt : Bt ? [Bt] : [], ...Array.isArray(Mt) ? Mt : Mt ? [Mt] : []];
          return et(Tt)(gt);
        }
      }
      function et(Ye) {
        return ct = Ye, E = 0, Ye.length === 0 ? _e : Rt(Ye[E]);
      }
      function Rt(Ye) {
        return Zt;
        function Zt(gt) {
          return Qe = Pe(), Ze = Ye, Ye.partial || (z.currentConstruct = Ye), Ye.name && z.parser.constructs.disable.null.includes(Ye.name) ? s0(gt) : Ye.tokenize.call(ve ? Object.assign(Object.create(z), ve) : z, B, b0, s0)(gt);
        }
      }
      function b0(Ye) {
        return D = true, se(Ze, Qe), te;
      }
      function s0(Ye) {
        return D = true, Qe.restore(), ++E < ct.length ? Rt(ct[E]) : _e;
      }
    }
  }
  function O(se, ve) {
    se.resolveAll && !v.includes(se) && v.push(se), se.resolve && je(z.events, ve, z.events.length - ve, se.resolve(z.events.slice(ve), z)), se.resolveTo && (z.events = se.resolveTo(z.events, z));
  }
  function Pe() {
    let se = V(), ve = z.previous, xe = z.currentConstruct, qe = z.events.length, te = Array.from(y);
    return { restore: _e, from: qe };
    function _e() {
      u = se, z.previous = ve, z.currentConstruct = xe, z.events.length = qe, y = te, we();
    }
  }
  function we() {
    u.line in f && u.column < 2 && (u.column = f[u.line], u.offset += f[u.line] - 1);
  }
}
function Ps(n, c) {
  let s = c.start._index, u = c.start._bufferIndex, f = c.end._index, v = c.end._bufferIndex, d;
  return s === f ? d = [n[s].slice(u, v)] : (d = n.slice(s, f), u > -1 && (d[0] = d[0].slice(u)), v > 0 && d.push(n[f].slice(0, v))), d;
}
function Gs(n, c) {
  let s = -1, u = [], f;
  for (; ++s < n.length; ) {
    let v = n[s], d;
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
          if (!c && f)
            continue;
          d = " ";
          break;
        }
        default:
          d = String.fromCharCode(v);
      }
    f = v === -2, u.push(d);
  }
  return u.join("");
}
var $l = K(() => {
  ye();
  zt();
  I0();
});
var ei = {};
So(ei, { contentInitial: () => Us, disable: () => Zs, document: () => Vs, flow: () => Ws, flowInitial: () => js, insideSpan: () => $s, string: () => Ys, text: () => Xs });
var Vs;
var Us;
var js;
var Ws;
var Ys;
var Xs;
var $s;
var Zs;
var Zl = K(() => {
  Jn();
  _n();
  Vs = { 42: Je, 43: Je, 45: Je, 48: Je, 49: Je, 50: Je, 51: Je, 52: Je, 53: Je, 54: Je, 55: Je, 56: Je, 57: Je, 62: br }, Us = { 91: Un }, js = { [-2]: q0, [-1]: q0, 32: q0 }, Ws = { 35: Wn, 42: u0, 45: [Mr, u0], 60: Xn, 61: Mr, 95: u0, 96: kr, 126: kr }, Ys = { 38: wr, 92: yr }, Xs = { [-5]: O0, [-4]: O0, [-3]: O0, 33: Zn, 38: wr, 42: L0, 60: [Ln, $n], 91: Qn, 92: [jn, yr], 93: l0, 95: L0, 96: qn }, $s = { null: [L0, Vl] }, Zs = { null: [] };
});
function Ql(n = {}) {
  let c = pr([ei].concat(n.extensions || [])), s = { defined: [], lazy: {}, constructs: c, content: u(sl), document: u(cl), flow: u(Pl), string: u(Ul), text: u(jl) };
  return s;
  function u(f) {
    return v;
    function v(d) {
      return Xl(s, f, d);
    }
  }
}
var Kl = K(() => {
  dr();
  hl();
  pl();
  Gl();
  _n();
  $l();
  Zl();
});
function Jl(n) {
  for (; !Sr(n); )
    ;
  return n;
}
var _l = K(() => {
  On();
});
function tu() {
  let n = 1, c = "", s = true, u;
  return f;
  function f(v, d, y) {
    let D = [], B, z, T, M, k;
    for (v = c + v.toString(d), T = 0, c = "", s && (v.charCodeAt(0) === 65279 && T++, s = void 0); T < v.length; ) {
      if (eu.lastIndex = T, B = eu.exec(v), M = B && B.index !== void 0 ? B.index : v.length, k = v.charCodeAt(M), !B) {
        c = v.slice(T);
        break;
      }
      if (k === 10 && T === M && u)
        D.push(-3), u = void 0;
      else
        switch (u && (D.push(-5), u = void 0), T < M && (D.push(v.slice(T, M)), n += M - T), k) {
          case 0: {
            D.push(65533), n++;
            break;
          }
          case 9: {
            for (z = Math.ceil(n / 4) * 4, D.push(-2); n++ < z; )
              D.push(-1);
            break;
          }
          case 10: {
            D.push(-4), n = 1;
            break;
          }
          default:
            u = true, n = 1;
        }
      T = M + 1;
    }
    return y && (u && D.push(-5), c && D.push(c), D.push(null)), D;
  }
}
var eu;
var ru = K(() => {
  eu = /[\0\t\n\r]/g;
});
var nu;
var iu = K(() => {
  ol();
  Kl();
  _l();
  ru();
  nu = function(n, c, s) {
    return typeof c != "string" && (s = c, c = void 0), ul(s)(Jl(Ql(s).document().write(tu()(n, c, true))));
  };
});
function Js(n, c, s) {
  let u = this, f, v;
  return d;
  function d(T) {
    return !ti(T) || !cu.call(u, u.previous) || ni(u.events) ? s(T) : (n.enter("literalAutolink"), n.enter("literalAutolinkEmail"), y(T));
  }
  function y(T) {
    return ti(T) ? (n.consume(T), y) : T === 64 ? (n.consume(T), D) : s(T);
  }
  function D(T) {
    return T === 46 ? n.check(Ks, z, B)(T) : T === 45 || T === 95 || Oe(T) ? (v = true, n.consume(T), D) : z(T);
  }
  function B(T) {
    return n.consume(T), f = true, D;
  }
  function z(T) {
    return v && f && Xe(u.previous) ? (n.exit("literalAutolinkEmail"), n.exit("literalAutolink"), c(T)) : s(T);
  }
}
function _s(n, c, s) {
  let u = this;
  return f;
  function f(d) {
    return d !== 87 && d !== 119 || !hu.call(u, u.previous) || ni(u.events) ? s(d) : (n.enter("literalAutolink"), n.enter("literalAutolinkWww"), n.check(Qs, n.attempt(au, n.attempt(lu, v), s), s)(d));
  }
  function v(d) {
    return n.exit("literalAutolinkWww"), n.exit("literalAutolink"), c(d);
  }
}
function e4(n, c, s) {
  let u = this, f = "", v = false;
  return d;
  function d(T) {
    return (T === 72 || T === 104) && mu.call(u, u.previous) && !ni(u.events) ? (n.enter("literalAutolink"), n.enter("literalAutolinkHttp"), f += String.fromCodePoint(T), n.consume(T), y) : s(T);
  }
  function y(T) {
    if (Xe(T) && f.length < 5)
      return f += String.fromCodePoint(T), n.consume(T), y;
    if (T === 58) {
      let M = f.toLowerCase();
      if (M === "http" || M === "https")
        return n.consume(T), D;
    }
    return s(T);
  }
  function D(T) {
    return T === 47 ? (n.consume(T), v ? B : (v = true, D)) : s(T);
  }
  function B(T) {
    return T === null || n0(T) || ze(T) || jt(T) || N0(T) ? s(T) : n.attempt(au, n.attempt(lu, z), s)(T);
  }
  function z(T) {
    return n.exit("literalAutolinkHttp"), n.exit("literalAutolink"), c(T);
  }
}
function t4(n, c, s) {
  let u = 0;
  return f;
  function f(d) {
    return (d === 87 || d === 119) && u < 3 ? (u++, n.consume(d), f) : d === 46 && u === 3 ? (n.consume(d), v) : s(d);
  }
  function v(d) {
    return d === null ? s(d) : c(d);
  }
}
function r4(n, c, s) {
  let u, f, v;
  return d;
  function d(B) {
    return B === 46 || B === 95 ? n.check(uu, D, y)(B) : B === null || ze(B) || jt(B) || B !== 45 && N0(B) ? D(B) : (v = true, n.consume(B), d);
  }
  function y(B) {
    return B === 95 ? u = true : (f = u, u = void 0), n.consume(B), d;
  }
  function D(B) {
    return f || u || !v ? s(B) : c(B);
  }
}
function n4(n, c) {
  let s = 0, u = 0;
  return f;
  function f(d) {
    return d === 40 ? (s++, n.consume(d), f) : d === 41 && u < s ? v(d) : d === 33 || d === 34 || d === 38 || d === 39 || d === 41 || d === 42 || d === 44 || d === 46 || d === 58 || d === 59 || d === 60 || d === 63 || d === 93 || d === 95 || d === 126 ? n.check(uu, c, v)(d) : d === null || ze(d) || jt(d) ? c(d) : (n.consume(d), f);
  }
  function v(d) {
    return d === 41 && u++, n.consume(d), f;
  }
}
function i4(n, c, s) {
  return u;
  function u(y) {
    return y === 33 || y === 34 || y === 39 || y === 41 || y === 42 || y === 44 || y === 46 || y === 58 || y === 59 || y === 63 || y === 95 || y === 126 ? (n.consume(y), u) : y === 38 ? (n.consume(y), v) : y === 93 ? (n.consume(y), f) : y === 60 || y === null || ze(y) || jt(y) ? c(y) : s(y);
  }
  function f(y) {
    return y === null || y === 40 || y === 91 || ze(y) || jt(y) ? c(y) : u(y);
  }
  function v(y) {
    return Xe(y) ? d(y) : s(y);
  }
  function d(y) {
    return y === 59 ? (n.consume(y), u) : Xe(y) ? (n.consume(y), d) : s(y);
  }
}
function a4(n, c, s) {
  return u;
  function u(v) {
    return n.consume(v), f;
  }
  function f(v) {
    return Oe(v) ? s(v) : c(v);
  }
}
function hu(n) {
  return n === null || n === 40 || n === 42 || n === 95 || n === 91 || n === 93 || n === 126 || ze(n);
}
function mu(n) {
  return !Xe(n);
}
function cu(n) {
  return !(n === 47 || ti(n));
}
function ti(n) {
  return n === 43 || n === 45 || n === 46 || n === 95 || Oe(n);
}
function ni(n) {
  let c = n.length, s = false;
  for (; c--; ) {
    let u = n[c][1];
    if ((u.type === "labelLink" || u.type === "labelImage") && !u._balanced) {
      s = true;
      break;
    }
    if (u._gfmAutolinkLiteralWalkedInto) {
      s = false;
      break;
    }
  }
  return n.length > 0 && !s && (n[n.length - 1][1]._gfmAutolinkLiteralWalkedInto = true), s;
}
var Qs;
var au;
var lu;
var uu;
var Ks;
var ou;
var su;
var Ot;
var Ct;
var ri;
var o0;
var pu = K(() => {
  ye();
  Qs = { tokenize: t4, partial: true }, au = { tokenize: r4, partial: true }, lu = { tokenize: n4, partial: true }, uu = { tokenize: i4, partial: true }, Ks = { tokenize: a4, partial: true }, ou = { tokenize: _s, previous: hu }, su = { tokenize: e4, previous: mu }, Ot = { tokenize: Js, previous: cu }, Ct = {}, ri = { text: Ct }, o0 = 48;
  for (; o0 < 123; )
    Ct[o0] = Ot, o0++, o0 === 58 ? o0 = 65 : o0 === 91 && (o0 = 97);
  Ct[43] = Ot;
  Ct[45] = Ot;
  Ct[46] = Ot;
  Ct[95] = Ot;
  Ct[72] = [Ot, su];
  Ct[104] = [Ot, su];
  Ct[87] = [Ot, ou];
  Ct[119] = [Ot, ou];
});
function l4(n) {
  ai.call(this, n, "http://");
}
function u4(n) {
  ai.call(this, n, "mailto:");
}
function o4(n) {
  ai.call(this, n);
}
function ai(n, c) {
  let s = this.sliceSerialize(n);
  this.tag('<a href="' + i0((c || "") + s) + '">'), this.raw(this.encode(s)), this.tag("</a>");
}
var ii;
var fu = K(() => {
  Nn();
  ii = { exit: { literalAutolinkEmail: u4, literalAutolinkHttp: o4, literalAutolinkWww: l4 } };
});
var du = K(() => {
  pu();
  fu();
});
var li;
var gu = K(() => {
  li = { enter: { strikethrough() {
    this.tag("<del>");
  } }, exit: { strikethrough() {
    this.tag("</del>");
  } } };
});
function ui(n) {
  let s = (n || {}).singleTilde, u = { tokenize: v, resolveAll: f };
  return s == null && (s = true), { text: { 126: u }, insideSpan: { null: [u] }, attentionMarkers: { null: [126] } };
  function f(d, y) {
    let D = -1;
    for (; ++D < d.length; )
      if (d[D][0] === "enter" && d[D][1].type === "strikethroughSequenceTemporary" && d[D][1]._close) {
        let B = D;
        for (; B--; )
          if (d[B][0] === "exit" && d[B][1].type === "strikethroughSequenceTemporary" && d[B][1]._open && d[D][1].end.offset - d[D][1].start.offset === d[B][1].end.offset - d[B][1].start.offset) {
            d[D][1].type = "strikethroughSequence", d[B][1].type = "strikethroughSequence";
            let z = { type: "strikethrough", start: Object.assign({}, d[B][1].start), end: Object.assign({}, d[D][1].end) }, T = { type: "strikethroughText", start: Object.assign({}, d[B][1].end), end: Object.assign({}, d[D][1].start) }, M = [["enter", z, y], ["enter", d[B][1], y], ["exit", d[B][1], y], ["enter", T, y]], k = y.parser.constructs.insideSpan.null;
            k && je(M, M.length, 0, Xt(k, d.slice(B + 1, D), y)), je(M, M.length, 0, [["exit", T, y], ["enter", d[D][1], y], ["exit", d[D][1], y], ["exit", z, y]]), je(d, B - 1, D - B + 3, M), D = B + M.length - 2;
            break;
          }
      }
    for (D = -1; ++D < d.length; )
      d[D][1].type === "strikethroughSequenceTemporary" && (d[D][1].type = "data");
    return d;
  }
  function v(d, y, D) {
    let B = this.previous, z = this.events, T = 0;
    return M;
    function M(W) {
      return B === 126 && z[z.length - 1][1].type !== "characterEscape" ? D(W) : (d.enter("strikethroughSequenceTemporary"), k(W));
    }
    function k(W) {
      let H = v0(B);
      if (W === 126)
        return T > 1 ? D(W) : (d.consume(W), T++, k);
      if (T < 2 && !s)
        return D(W);
      let V = d.exit("strikethroughSequenceTemporary"), q = v0(W);
      return V._open = !q || q === 2 && !!H, V._close = !H || H === 2 && !!q, y(W);
    }
  }
}
var vu = K(() => {
  zt();
  In();
  I0();
});
var xu = K(() => {
  gu();
  vu();
});
function s4(n, c) {
  return c === "|" ? c : n;
}
var oi;
var si;
var bu = K(() => {
  oi = { none: "", left: ' align="left"', right: ' align="right"', center: ' align="center"' }, si = { enter: { table(n) {
    let c = n._align;
    this.lineEndingIfNeeded(), this.tag("<table>"), this.setData("tableAlign", c);
  }, tableBody() {
    this.tag("<tbody>");
  }, tableData() {
    let n = this.getData("tableAlign"), c = this.getData("tableColumn"), s = oi[n[c]];
    s === void 0 ? this.buffer() : (this.lineEndingIfNeeded(), this.tag("<td" + s + ">"));
  }, tableHead() {
    this.lineEndingIfNeeded(), this.tag("<thead>");
  }, tableHeader() {
    let n = this.getData("tableAlign"), c = this.getData("tableColumn"), s = oi[n[c]];
    this.lineEndingIfNeeded(), this.tag("<th" + s + ">");
  }, tableRow() {
    this.setData("tableColumn", 0), this.lineEndingIfNeeded(), this.tag("<tr>");
  } }, exit: { codeTextData(n) {
    let c = this.sliceSerialize(n);
    this.getData("tableAlign") && (c = c.replace(/\\([\\|])/g, s4)), this.raw(this.encode(c));
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
      this.lineEndingIfNeeded(), this.tag("<td" + oi[n[c]] + "></td>"), c++;
    this.setData("tableColumn", c), this.lineEndingIfNeeded(), this.tag("</tr>");
  } } };
});
function h4(n, c, s, u) {
  let f = 0;
  if (!(s === 0 && u.length === 0)) {
    for (; f < n.map.length; ) {
      if (n.map[f][0] === c) {
        n.map[f][1] += s, n.map[f][2].push(...u);
        return;
      }
      f += 1;
    }
    n.map.push([c, s, u]);
  }
}
var Tr;
var yu = K(() => {
  Tr = class {
    constructor() {
      this.map = [];
    }
    add(c, s, u) {
      h4(this, c, s, u);
    }
    consume(c) {
      if (this.map.sort((v, d) => v[0] - d[0]), this.map.length === 0)
        return;
      let s = this.map.length, u = [];
      for (; s > 0; )
        s -= 1, u.push(c.slice(this.map[s][0] + this.map[s][1])), u.push(this.map[s][2]), c.length = this.map[s][0];
      u.push([...c]), c.length = 0;
      let f = u.pop();
      for (; f; )
        c.push(...f), f = u.pop();
      this.map.length = 0;
    }
  };
});
function wu(n, c) {
  let s = false, u = [];
  for (; c < n.length; ) {
    let f = n[c];
    if (s) {
      if (f[0] === "enter")
        f[1].type === "tableContent" && u.push(n[c + 1][1].type === "tableDelimiterMarker" ? "left" : "none");
      else if (f[1].type === "tableContent") {
        if (n[c - 1][1].type === "tableDelimiterMarker") {
          let v = u.length - 1;
          u[v] = u[v] === "left" ? "center" : "right";
        }
      } else if (f[1].type === "tableDelimiterRow")
        break;
    } else
      f[0] === "enter" && f[1].type === "tableDelimiterRow" && (s = true);
    c += 1;
  }
  return u;
}
var ku = K(() => {
});
function m4(n, c, s) {
  let u = this, f = 0, v = 0, d;
  return y;
  function y(O) {
    let Pe = u.events.length - 1;
    for (; Pe > -1; ) {
      let ve = u.events[Pe][1].type;
      if (ve === "lineEnding" || ve === "linePrefix")
        Pe--;
      else
        break;
    }
    let we = Pe > -1 ? u.events[Pe][1].type : null, se = we === "tableHead" || we === "tableRow" ? U : D;
    return se === U && u.parser.lazy[u.now().line] ? s(O) : se(O);
  }
  function D(O) {
    return n.enter("tableHead"), n.enter("tableRow"), B(O);
  }
  function B(O) {
    return O === 124 || (d = true, v += 1), z(O);
  }
  function z(O) {
    return O === null ? s(O) : $(O) ? v > 1 ? (v = 0, u.interrupt = true, n.exit("tableRow"), n.enter("lineEnding"), n.consume(O), n.exit("lineEnding"), k) : s(O) : he(O) ? oe(n, z, "whitespace")(O) : (v += 1, d && (d = false, f += 1), O === 124 ? (n.enter("tableCellDivider"), n.consume(O), n.exit("tableCellDivider"), d = true, z) : (n.enter("data"), T(O)));
  }
  function T(O) {
    return O === null || O === 124 || ze(O) ? (n.exit("data"), z(O)) : (n.consume(O), O === 92 ? M : T);
  }
  function M(O) {
    return O === 92 || O === 124 ? (n.consume(O), T) : T(O);
  }
  function k(O) {
    return u.interrupt = false, u.parser.lazy[u.now().line] ? s(O) : (n.enter("tableDelimiterRow"), d = false, he(O) ? oe(n, W, "linePrefix", u.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(O) : W(O));
  }
  function W(O) {
    return O === 45 || O === 58 ? V(O) : O === 124 ? (d = true, n.enter("tableCellDivider"), n.consume(O), n.exit("tableCellDivider"), H) : fe(O);
  }
  function H(O) {
    return he(O) ? oe(n, V, "whitespace")(O) : V(O);
  }
  function V(O) {
    return O === 58 ? (v += 1, d = true, n.enter("tableDelimiterMarker"), n.consume(O), n.exit("tableDelimiterMarker"), q) : O === 45 ? (v += 1, q(O)) : O === null || $(O) ? ne(O) : fe(O);
  }
  function q(O) {
    return O === 45 ? (n.enter("tableDelimiterFiller"), _(O)) : fe(O);
  }
  function _(O) {
    return O === 45 ? (n.consume(O), _) : O === 58 ? (d = true, n.exit("tableDelimiterFiller"), n.enter("tableDelimiterMarker"), n.consume(O), n.exit("tableDelimiterMarker"), ee) : (n.exit("tableDelimiterFiller"), ee(O));
  }
  function ee(O) {
    return he(O) ? oe(n, ne, "whitespace")(O) : ne(O);
  }
  function ne(O) {
    return O === 124 ? W(O) : O === null || $(O) ? !d || f !== v ? fe(O) : (n.exit("tableDelimiterRow"), n.exit("tableHead"), c(O)) : fe(O);
  }
  function fe(O) {
    return s(O);
  }
  function U(O) {
    return n.enter("tableRow"), ce(O);
  }
  function ce(O) {
    return O === 124 ? (n.enter("tableCellDivider"), n.consume(O), n.exit("tableCellDivider"), ce) : O === null || $(O) ? (n.exit("tableRow"), c(O)) : he(O) ? oe(n, ce, "whitespace")(O) : (n.enter("data"), Ce(O));
  }
  function Ce(O) {
    return O === null || O === 124 || ze(O) ? (n.exit("data"), ce(O)) : (n.consume(O), O === 92 ? be : Ce);
  }
  function be(O) {
    return O === 92 || O === 124 ? (n.consume(O), Ce) : Ce(O);
  }
}
function c4(n, c) {
  let s = -1, u = true, f = 0, v = [0, 0, 0, 0], d = [0, 0, 0, 0], y = false, D = 0, B, z, T, M = new Tr();
  for (; ++s < n.length; ) {
    let k = n[s], W = k[1];
    k[0] === "enter" ? W.type === "tableHead" ? (y = false, D !== 0 && (Su(M, c, D, B, z), z = void 0, D = 0), B = { type: "table", start: Object.assign({}, W.start), end: Object.assign({}, W.end) }, M.add(s, 0, [["enter", B, c]])) : W.type === "tableRow" || W.type === "tableDelimiterRow" ? (u = true, T = void 0, v = [0, 0, 0, 0], d = [0, s + 1, 0, 0], y && (y = false, z = { type: "tableBody", start: Object.assign({}, W.start), end: Object.assign({}, W.end) }, M.add(s, 0, [["enter", z, c]])), f = W.type === "tableDelimiterRow" ? 2 : z ? 3 : 1) : f && (W.type === "data" || W.type === "tableDelimiterMarker" || W.type === "tableDelimiterFiller") ? (u = false, d[2] === 0 && (v[1] !== 0 && (d[0] = d[1], T = Er(M, c, v, f, void 0, T), v = [0, 0, 0, 0]), d[2] = s)) : W.type === "tableCellDivider" && (u ? u = false : (v[1] !== 0 && (d[0] = d[1], T = Er(M, c, v, f, void 0, T)), v = d, d = [v[1], s, 0, 0])) : W.type === "tableHead" ? (y = true, D = s) : W.type === "tableRow" || W.type === "tableDelimiterRow" ? (D = s, v[1] !== 0 ? (d[0] = d[1], T = Er(M, c, v, f, s, T)) : d[1] !== 0 && (T = Er(M, c, d, f, s, T)), f = 0) : f && (W.type === "data" || W.type === "tableDelimiterMarker" || W.type === "tableDelimiterFiller") && (d[3] = s);
  }
  for (D !== 0 && Su(M, c, D, B, z), M.consume(c.events), s = -1; ++s < c.events.length; ) {
    let k = c.events[s];
    k[0] === "enter" && k[1].type === "table" && (k[1]._align = wu(c.events, s));
  }
  return n;
}
function Er(n, c, s, u, f, v) {
  let d = u === 1 ? "tableHeader" : u === 2 ? "tableDelimiter" : "tableData", y = "tableContent";
  s[0] !== 0 && (v.end = Object.assign({}, x0(c.events, s[0])), n.add(s[0], 0, [["exit", v, c]]));
  let D = x0(c.events, s[1]);
  if (v = { type: d, start: Object.assign({}, D), end: Object.assign({}, D) }, n.add(s[1], 0, [["enter", v, c]]), s[2] !== 0) {
    let B = x0(c.events, s[2]), z = x0(c.events, s[3]), T = { type: y, start: Object.assign({}, B), end: Object.assign({}, z) };
    if (n.add(s[2], 0, [["enter", T, c]]), u !== 2) {
      let M = c.events[s[2]], k = c.events[s[3]];
      if (M[1].end = Object.assign({}, k[1].end), M[1].type = "chunkText", M[1].contentType = "text", s[3] > s[2] + 1) {
        let W = s[2] + 1, H = s[3] - s[2] - 1;
        n.add(W, H, []);
      }
    }
    n.add(s[3] + 1, 0, [["exit", T, c]]);
  }
  return f !== void 0 && (v.end = Object.assign({}, x0(c.events, f)), n.add(f, 0, [["exit", v, c]]), v = void 0), v;
}
function Su(n, c, s, u, f) {
  let v = [], d = x0(c.events, s);
  f && (f.end = Object.assign({}, d), v.push(["exit", f, c])), u.end = Object.assign({}, d), v.push(["exit", u, c]), n.add(s + 1, 0, v);
}
function x0(n, c) {
  let s = n[c], u = s[0] === "enter" ? "start" : "end";
  return s[1][u];
}
var hi;
var Au = K(() => {
  He();
  ye();
  yu();
  ku();
  hi = { flow: { null: { tokenize: m4, resolveAll: c4 } } };
});
var zu = K(() => {
  bu();
  Au();
});
function Cu(n, c) {
  let s = this.sliceSerialize(n);
  this.options.allowDangerousHtml && (s = s.replace(c, "&lt;$1$2")), this.raw(this.encode(s));
}
var Bu;
var p4;
var Mu;
var Tu = K(() => {
  Bu = /<(\/?)(iframe|noembed|noframes|plaintext|script|style|title|textarea|xmp)(?=[\t\n\f\r />])/gi, p4 = new RegExp("^" + Bu.source, "i"), Mu = { exit: { htmlFlowData(n) {
    Cu.call(this, n, Bu);
  }, htmlTextData(n) {
    Cu.call(this, n, p4);
  } } };
});
var mi;
var Eu = K(() => {
  mi = { enter: { taskListCheck() {
    this.tag('<input type="checkbox" disabled="" ');
  } }, exit: { taskListCheck() {
    this.tag("/>");
  }, taskListCheckValueChecked() {
    this.tag('checked="" ');
  } } };
});
function d4(n, c, s) {
  let u = this;
  return f;
  function f(D) {
    return u.previous !== null || !u._gfmTasklistFirstContentOfListItem ? s(D) : (n.enter("taskListCheck"), n.enter("taskListCheckMarker"), n.consume(D), n.exit("taskListCheckMarker"), v);
  }
  function v(D) {
    return ze(D) ? (n.enter("taskListCheckValueUnchecked"), n.consume(D), n.exit("taskListCheckValueUnchecked"), d) : D === 88 || D === 120 ? (n.enter("taskListCheckValueChecked"), n.consume(D), n.exit("taskListCheckValueChecked"), d) : s(D);
  }
  function d(D) {
    return D === 93 ? (n.enter("taskListCheckMarker"), n.consume(D), n.exit("taskListCheckMarker"), n.exit("taskListCheck"), y) : s(D);
  }
  function y(D) {
    return $(D) ? c(D) : he(D) ? n.check({ tokenize: g4 }, c, s)(D) : s(D);
  }
}
function g4(n, c, s) {
  return oe(n, u, "whitespace");
  function u(f) {
    return f === null ? s(f) : c(f);
  }
}
var f4;
var ci;
var Du = K(() => {
  He();
  ye();
  f4 = { tokenize: d4 }, ci = { text: { 91: f4 } };
});
var Fu = K(() => {
  Eu();
  Du();
});
function Nu(n) {
  return pr([ri, ui(n), hi, ci]);
}
var Iu;
var Lu = K(() => {
  dr();
  du();
  xu();
  zu();
  Tu();
  Fu();
  Iu = fr([ii, li, si, Mu, mi]);
});
function x4(n, c, s) {
  let u = this, f = u.events[u.events.length - 1], v = f && f[1].type === "linePrefix" ? f[2].sliceSerialize(f[1], true).length : 0, d = 0;
  return y;
  function y(V) {
    return n.enter("mathFlow"), n.enter("mathFlowFence"), n.enter("mathFlowFenceSequence"), D(V);
  }
  function D(V) {
    return V === 36 ? (n.consume(V), d++, D) : (n.exit("mathFlowFenceSequence"), d < 2 ? s(V) : oe(n, B, "whitespace")(V));
  }
  function B(V) {
    return V === null || $(V) ? T(V) : (n.enter("mathFlowFenceMeta"), n.enter("chunkString", { contentType: "string" }), z(V));
  }
  function z(V) {
    return V === null || $(V) ? (n.exit("chunkString"), n.exit("mathFlowFenceMeta"), T(V)) : V === 36 ? s(V) : (n.consume(V), z);
  }
  function T(V) {
    return n.exit("mathFlowFence"), u.interrupt ? c(V) : M(V);
  }
  function M(V) {
    return V === null ? W(V) : $(V) ? n.attempt(v4, n.attempt({ tokenize: H, partial: true }, W, v ? oe(n, M, "linePrefix", v + 1) : M), W)(V) : (n.enter("mathFlowValue"), k(V));
  }
  function k(V) {
    return V === null || $(V) ? (n.exit("mathFlowValue"), M(V)) : (n.consume(V), k);
  }
  function W(V) {
    return n.exit("mathFlow"), c(V);
  }
  function H(V, q, _) {
    let ee = 0;
    return oe(V, ne, "linePrefix", 4);
    function ne(ce) {
      return V.enter("mathFlowFence"), V.enter("mathFlowFenceSequence"), fe(ce);
    }
    function fe(ce) {
      return ce === 36 ? (V.consume(ce), ee++, fe) : ee < d ? _(ce) : (V.exit("mathFlowFenceSequence"), oe(V, U, "whitespace")(ce));
    }
    function U(ce) {
      return ce === null || $(ce) ? (V.exit("mathFlowFence"), q(ce)) : _(ce);
    }
  }
}
function b4(n, c, s) {
  let u = this;
  return f;
  function f(d) {
    return n.enter("lineEnding"), n.consume(d), n.exit("lineEnding"), v;
  }
  function v(d) {
    return u.parser.lazy[u.now().line] ? s(d) : c(d);
  }
}
var qu;
var v4;
var Ou = K(() => {
  He();
  ye();
  qu = { tokenize: x4, concrete: true }, v4 = { tokenize: b4, partial: true };
});
function y4(n) {
  let c = n.length - 4, s = 3, u, f;
  if ((n[s][1].type === "lineEnding" || n[s][1].type === "space") && (n[c][1].type === "lineEnding" || n[c][1].type === "space")) {
    for (u = s; ++u < c; )
      if (n[u][1].type === "mathTextData") {
        n[c][1].type = "mathTextPadding", n[s][1].type = "mathTextPadding", s += 2, c -= 2;
        break;
      }
  }
  for (u = s - 1, c++; ++u <= c; )
    f === void 0 ? u !== c && n[u][1].type !== "lineEnding" && (f = u) : (u === c || n[u][1].type === "lineEnding") && (n[f][1].type = "mathTextData", u !== f + 2 && (n[f][1].end = n[u - 1][1].end, n.splice(f + 2, u - f - 2), c -= u - f - 2, u = f + 2), f = void 0);
  return n;
}
function w4(n) {
  return n !== 36 || this.events[this.events.length - 1][1].type === "characterEscape";
}
function k4(n, c, s) {
  let u = this, f = 0, v, d;
  return y;
  function y(M) {
    return n.enter("mathText"), n.enter("mathTextSequence"), D(M);
  }
  function D(M) {
    return M === 36 ? (n.consume(M), f++, D) : (n.exit("mathTextSequence"), B(M));
  }
  function B(M) {
    return M === null ? s(M) : M === 36 ? (d = n.enter("mathTextSequence"), v = 0, T(M)) : M === 32 ? (n.enter("space"), n.consume(M), n.exit("space"), B) : $(M) ? (n.enter("lineEnding"), n.consume(M), n.exit("lineEnding"), B) : (n.enter("mathTextData"), z(M));
  }
  function z(M) {
    return M === null || M === 32 || M === 36 || $(M) ? (n.exit("mathTextData"), B(M)) : (n.consume(M), z);
  }
  function T(M) {
    return M === 36 ? (n.consume(M), v++, T) : v === f ? (n.exit("mathTextSequence"), n.exit("mathText"), c(M)) : (d.type = "mathTextData", z(M));
  }
}
var Ru;
var Hu = K(() => {
  ye();
  Ru = { tokenize: k4, resolve: y4, previous: w4 };
});
var pi;
var Pu = K(() => {
  Ou();
  Hu();
  pi = { flow: { 36: qu }, text: { 36: Ru } };
});
var Gu = An((R0, fi) => {
  (function(c, s) {
    typeof R0 == "object" && typeof fi == "object" ? fi.exports = s() : typeof define == "function" && define.amd ? define([], s) : typeof R0 == "object" ? R0.katex = s() : c.katex = s();
  })(typeof self < "u" ? self : R0, function() {
    return function() {
      "use strict";
      var n = {};
      (function() {
        n.d = function(h, e) {
          for (var t in e)
            n.o(e, t) && !n.o(h, t) && Object.defineProperty(h, t, { enumerable: true, get: e[t] });
        };
      })(), function() {
        n.o = function(h, e) {
          return Object.prototype.hasOwnProperty.call(h, e);
        };
      }();
      var c = {};
      n.d(c, { default: function() {
        return mo;
      } });
      var s = function h(e, t) {
        this.position = void 0;
        var r = "KaTeX parse error: " + e, i, a = t && t.loc;
        if (a && a.start <= a.end) {
          var o = a.lexer.input;
          i = a.start;
          var p = a.end;
          i === o.length ? r += " at end of input: " : r += " at position " + (i + 1) + ": ";
          var x = o.slice(i, p).replace(/[^]/g, "$&\u0332"), w;
          i > 15 ? w = "\u2026" + o.slice(i - 15, i) : w = o.slice(0, i);
          var C;
          p + 15 < o.length ? C = o.slice(p, p + 15) + "\u2026" : C = o.slice(p), r += w + x + C;
        }
        var I = new Error(r);
        return I.name = "ParseError", I.__proto__ = h.prototype, I.position = i, I;
      };
      s.prototype.__proto__ = Error.prototype;
      var u = s, f = function(e, t) {
        return e.indexOf(t) !== -1;
      }, v = function(e, t) {
        return e === void 0 ? t : e;
      }, d = /([A-Z])/g, y = function(e) {
        return e.replace(d, "-$1").toLowerCase();
      }, D = { "&": "&amp;", ">": "&gt;", "<": "&lt;", '"': "&quot;", "'": "&#x27;" }, B = /[&><"']/g;
      function z(h) {
        return String(h).replace(B, function(e) {
          return D[e];
        });
      }
      var T = function h(e) {
        return e.type === "ordgroup" || e.type === "color" ? e.body.length === 1 ? h(e.body[0]) : e : e.type === "font" ? h(e.body) : e;
      }, M = function(e) {
        var t = T(e);
        return t.type === "mathord" || t.type === "textord" || t.type === "atom";
      }, k = function(e) {
        if (!e)
          throw new Error("Expected non-null, but got " + String(e));
        return e;
      }, W = function(e) {
        var t = /^\s*([^\\/#]*?)(?::|&#0*58|&#x0*3a)/i.exec(e);
        return t != null ? t[1] : "_relative";
      }, H = { contains: f, deflt: v, escape: z, hyphenate: y, getBaseElem: T, isCharacterBox: M, protocolFromUrl: W }, V = function() {
        function h(t) {
          this.displayMode = void 0, this.output = void 0, this.leqno = void 0, this.fleqn = void 0, this.throwOnError = void 0, this.errorColor = void 0, this.macros = void 0, this.minRuleThickness = void 0, this.colorIsTextColor = void 0, this.strict = void 0, this.trust = void 0, this.maxSize = void 0, this.maxExpand = void 0, this.globalGroup = void 0, t = t || {}, this.displayMode = H.deflt(t.displayMode, false), this.output = H.deflt(t.output, "htmlAndMathml"), this.leqno = H.deflt(t.leqno, false), this.fleqn = H.deflt(t.fleqn, false), this.throwOnError = H.deflt(t.throwOnError, true), this.errorColor = H.deflt(t.errorColor, "#cc0000"), this.macros = t.macros || {}, this.minRuleThickness = Math.max(0, H.deflt(t.minRuleThickness, 0)), this.colorIsTextColor = H.deflt(t.colorIsTextColor, false), this.strict = H.deflt(t.strict, "warn"), this.trust = H.deflt(t.trust, false), this.maxSize = Math.max(0, H.deflt(t.maxSize, 1 / 0)), this.maxExpand = Math.max(0, H.deflt(t.maxExpand, 1e3)), this.globalGroup = H.deflt(t.globalGroup, false);
        }
        var e = h.prototype;
        return e.reportNonstrict = function(r, i, a) {
          var o = this.strict;
          if (typeof o == "function" && (o = o(r, i, a)), !(!o || o === "ignore")) {
            if (o === true || o === "error")
              throw new u("LaTeX-incompatible input and strict mode is set to 'error': " + (i + " [" + r + "]"), a);
            o === "warn" ? typeof console < "u" && console.warn("LaTeX-incompatible input and strict mode is set to 'warn': " + (i + " [" + r + "]")) : typeof console < "u" && console.warn("LaTeX-incompatible input and strict mode is set to " + ("unrecognized '" + o + "': " + i + " [" + r + "]"));
          }
        }, e.useStrictBehavior = function(r, i, a) {
          var o = this.strict;
          if (typeof o == "function")
            try {
              o = o(r, i, a);
            } catch {
              o = "error";
            }
          return !o || o === "ignore" ? false : o === true || o === "error" ? true : o === "warn" ? (typeof console < "u" && console.warn("LaTeX-incompatible input and strict mode is set to 'warn': " + (i + " [" + r + "]")), false) : (typeof console < "u" && console.warn("LaTeX-incompatible input and strict mode is set to " + ("unrecognized '" + o + "': " + i + " [" + r + "]")), false);
        }, e.isTrusted = function(r) {
          r.url && !r.protocol && (r.protocol = H.protocolFromUrl(r.url));
          var i = typeof this.trust == "function" ? this.trust(r) : this.trust;
          return !!i;
        }, h;
      }(), q = function() {
        function h(t, r, i) {
          this.id = void 0, this.size = void 0, this.cramped = void 0, this.id = t, this.size = r, this.cramped = i;
        }
        var e = h.prototype;
        return e.sup = function() {
          return O[Pe[this.id]];
        }, e.sub = function() {
          return O[we[this.id]];
        }, e.fracNum = function() {
          return O[se[this.id]];
        }, e.fracDen = function() {
          return O[ve[this.id]];
        }, e.cramp = function() {
          return O[xe[this.id]];
        }, e.text = function() {
          return O[qe[this.id]];
        }, e.isTight = function() {
          return this.size >= 2;
        }, h;
      }(), _ = 0, ee = 1, ne = 2, fe = 3, U = 4, ce = 5, Ce = 6, be = 7, O = [new q(_, 0, false), new q(ee, 0, true), new q(ne, 1, false), new q(fe, 1, true), new q(U, 2, false), new q(ce, 2, true), new q(Ce, 3, false), new q(be, 3, true)], Pe = [U, ce, U, ce, Ce, be, Ce, be], we = [ce, ce, ce, ce, be, be, be, be], se = [ne, fe, U, ce, Ce, be, Ce, be], ve = [fe, fe, ce, ce, be, be, be, be], xe = [ee, ee, fe, fe, ce, ce, be, be], qe = [_, ee, ne, fe, ne, fe, ne, fe], te = { DISPLAY: O[_], TEXT: O[ne], SCRIPT: O[U], SCRIPTSCRIPT: O[Ce] }, _e = [{ name: "latin", blocks: [[256, 591], [768, 879]] }, { name: "cyrillic", blocks: [[1024, 1279]] }, { name: "armenian", blocks: [[1328, 1423]] }, { name: "brahmic", blocks: [[2304, 4255]] }, { name: "georgian", blocks: [[4256, 4351]] }, { name: "cjk", blocks: [[12288, 12543], [19968, 40879], [65280, 65376]] }, { name: "hangul", blocks: [[44032, 55215]] }];
      function ct(h) {
        for (var e = 0; e < _e.length; e++)
          for (var t = _e[e], r = 0; r < t.blocks.length; r++) {
            var i = t.blocks[r];
            if (h >= i[0] && h <= i[1])
              return t.name;
          }
        return null;
      }
      var E = [];
      _e.forEach(function(h) {
        return h.blocks.forEach(function(e) {
          return E.push.apply(E, e);
        });
      });
      function Ze(h) {
        for (var e = 0; e < E.length; e += 2)
          if (h >= E[e] && h <= E[e + 1])
            return true;
        return false;
      }
      var Qe = 80, F = function(e, t) {
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
      }, et = function(e, t) {
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
      }, Rt = function(e, t) {
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
      }, b0 = function(e, t) {
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
      }, s0 = function(e, t) {
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
      }, Zt = function(e, t, r) {
        var i = r - 54 - t - e;
        return "M702 " + (e + t) + "H400000" + (40 + e) + `
H742v` + i + `l-4 4-4 4c-.667.7 -2 1.5-4 2.5s-4.167 1.833-6.5 2.5-5.5 1-9.5 1
h-12l-28-84c-16.667-52-96.667 -294.333-240-727l-212 -643 -85 170
c-4-3.333-8.333-7.667-13 -13l-13-13l77-155 77-156c66 199.333 139 419.667
219 661 l218 661zM702 ` + t + "H400000v" + (40 + e) + "H742z";
      }, gt = function(e, t, r) {
        t = 1e3 * t;
        var i = "";
        switch (e) {
          case "sqrtMain":
            i = F(t, Qe);
            break;
          case "sqrtSize1":
            i = et(t, Qe);
            break;
          case "sqrtSize2":
            i = Rt(t, Qe);
            break;
          case "sqrtSize3":
            i = b0(t, Qe);
            break;
          case "sqrtSize4":
            i = s0(t, Qe);
            break;
          case "sqrtTall":
            i = Zt(t, Qe, r);
        }
        return i;
      }, Bt = function(e, t) {
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
      }, Mt = { doubleleftarrow: `M262 157
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
M500 241 v40 H399408 v-40z M500 435 v40 H400000 v-40z` }, Tt = function() {
        function h(t) {
          this.children = void 0, this.classes = void 0, this.height = void 0, this.depth = void 0, this.maxFontSize = void 0, this.style = void 0, this.children = t, this.classes = [], this.height = 0, this.depth = 0, this.maxFontSize = 0, this.style = {};
        }
        var e = h.prototype;
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
        }, h;
      }(), pt = { "AMS-Regular": { 32: [0, 0, 0, 0, 0.25], 65: [0, 0.68889, 0, 0, 0.72222], 66: [0, 0.68889, 0, 0, 0.66667], 67: [0, 0.68889, 0, 0, 0.72222], 68: [0, 0.68889, 0, 0, 0.72222], 69: [0, 0.68889, 0, 0, 0.66667], 70: [0, 0.68889, 0, 0, 0.61111], 71: [0, 0.68889, 0, 0, 0.77778], 72: [0, 0.68889, 0, 0, 0.77778], 73: [0, 0.68889, 0, 0, 0.38889], 74: [0.16667, 0.68889, 0, 0, 0.5], 75: [0, 0.68889, 0, 0, 0.77778], 76: [0, 0.68889, 0, 0, 0.66667], 77: [0, 0.68889, 0, 0, 0.94445], 78: [0, 0.68889, 0, 0, 0.72222], 79: [0.16667, 0.68889, 0, 0, 0.77778], 80: [0, 0.68889, 0, 0, 0.61111], 81: [0.16667, 0.68889, 0, 0, 0.77778], 82: [0, 0.68889, 0, 0, 0.72222], 83: [0, 0.68889, 0, 0, 0.55556], 84: [0, 0.68889, 0, 0, 0.66667], 85: [0, 0.68889, 0, 0, 0.72222], 86: [0, 0.68889, 0, 0, 0.72222], 87: [0, 0.68889, 0, 0, 1], 88: [0, 0.68889, 0, 0, 0.72222], 89: [0, 0.68889, 0, 0, 0.72222], 90: [0, 0.68889, 0, 0, 0.66667], 107: [0, 0.68889, 0, 0, 0.55556], 160: [0, 0, 0, 0, 0.25], 165: [0, 0.675, 0.025, 0, 0.75], 174: [0.15559, 0.69224, 0, 0, 0.94666], 240: [0, 0.68889, 0, 0, 0.55556], 295: [0, 0.68889, 0, 0, 0.54028], 710: [0, 0.825, 0, 0, 2.33334], 732: [0, 0.9, 0, 0, 2.33334], 770: [0, 0.825, 0, 0, 2.33334], 771: [0, 0.9, 0, 0, 2.33334], 989: [0.08167, 0.58167, 0, 0, 0.77778], 1008: [0, 0.43056, 0.04028, 0, 0.66667], 8245: [0, 0.54986, 0, 0, 0.275], 8463: [0, 0.68889, 0, 0, 0.54028], 8487: [0, 0.68889, 0, 0, 0.72222], 8498: [0, 0.68889, 0, 0, 0.55556], 8502: [0, 0.68889, 0, 0, 0.66667], 8503: [0, 0.68889, 0, 0, 0.44445], 8504: [0, 0.68889, 0, 0, 0.66667], 8513: [0, 0.68889, 0, 0, 0.63889], 8592: [-0.03598, 0.46402, 0, 0, 0.5], 8594: [-0.03598, 0.46402, 0, 0, 0.5], 8602: [-0.13313, 0.36687, 0, 0, 1], 8603: [-0.13313, 0.36687, 0, 0, 1], 8606: [0.01354, 0.52239, 0, 0, 1], 8608: [0.01354, 0.52239, 0, 0, 1], 8610: [0.01354, 0.52239, 0, 0, 1.11111], 8611: [0.01354, 0.52239, 0, 0, 1.11111], 8619: [0, 0.54986, 0, 0, 1], 8620: [0, 0.54986, 0, 0, 1], 8621: [-0.13313, 0.37788, 0, 0, 1.38889], 8622: [-0.13313, 0.36687, 0, 0, 1], 8624: [0, 0.69224, 0, 0, 0.5], 8625: [0, 0.69224, 0, 0, 0.5], 8630: [0, 0.43056, 0, 0, 1], 8631: [0, 0.43056, 0, 0, 1], 8634: [0.08198, 0.58198, 0, 0, 0.77778], 8635: [0.08198, 0.58198, 0, 0, 0.77778], 8638: [0.19444, 0.69224, 0, 0, 0.41667], 8639: [0.19444, 0.69224, 0, 0, 0.41667], 8642: [0.19444, 0.69224, 0, 0, 0.41667], 8643: [0.19444, 0.69224, 0, 0, 0.41667], 8644: [0.1808, 0.675, 0, 0, 1], 8646: [0.1808, 0.675, 0, 0, 1], 8647: [0.1808, 0.675, 0, 0, 1], 8648: [0.19444, 0.69224, 0, 0, 0.83334], 8649: [0.1808, 0.675, 0, 0, 1], 8650: [0.19444, 0.69224, 0, 0, 0.83334], 8651: [0.01354, 0.52239, 0, 0, 1], 8652: [0.01354, 0.52239, 0, 0, 1], 8653: [-0.13313, 0.36687, 0, 0, 1], 8654: [-0.13313, 0.36687, 0, 0, 1], 8655: [-0.13313, 0.36687, 0, 0, 1], 8666: [0.13667, 0.63667, 0, 0, 1], 8667: [0.13667, 0.63667, 0, 0, 1], 8669: [-0.13313, 0.37788, 0, 0, 1], 8672: [-0.064, 0.437, 0, 0, 1.334], 8674: [-0.064, 0.437, 0, 0, 1.334], 8705: [0, 0.825, 0, 0, 0.5], 8708: [0, 0.68889, 0, 0, 0.55556], 8709: [0.08167, 0.58167, 0, 0, 0.77778], 8717: [0, 0.43056, 0, 0, 0.42917], 8722: [-0.03598, 0.46402, 0, 0, 0.5], 8724: [0.08198, 0.69224, 0, 0, 0.77778], 8726: [0.08167, 0.58167, 0, 0, 0.77778], 8733: [0, 0.69224, 0, 0, 0.77778], 8736: [0, 0.69224, 0, 0, 0.72222], 8737: [0, 0.69224, 0, 0, 0.72222], 8738: [0.03517, 0.52239, 0, 0, 0.72222], 8739: [0.08167, 0.58167, 0, 0, 0.22222], 8740: [0.25142, 0.74111, 0, 0, 0.27778], 8741: [0.08167, 0.58167, 0, 0, 0.38889], 8742: [0.25142, 0.74111, 0, 0, 0.5], 8756: [0, 0.69224, 0, 0, 0.66667], 8757: [0, 0.69224, 0, 0, 0.66667], 8764: [-0.13313, 0.36687, 0, 0, 0.77778], 8765: [-0.13313, 0.37788, 0, 0, 0.77778], 8769: [-0.13313, 0.36687, 0, 0, 0.77778], 8770: [-0.03625, 0.46375, 0, 0, 0.77778], 8774: [0.30274, 0.79383, 0, 0, 0.77778], 8776: [-0.01688, 0.48312, 0, 0, 0.77778], 8778: [0.08167, 0.58167, 0, 0, 0.77778], 8782: [0.06062, 0.54986, 0, 0, 0.77778], 8783: [0.06062, 0.54986, 0, 0, 0.77778], 8785: [0.08198, 0.58198, 0, 0, 0.77778], 8786: [0.08198, 0.58198, 0, 0, 0.77778], 8787: [0.08198, 0.58198, 0, 0, 0.77778], 8790: [0, 0.69224, 0, 0, 0.77778], 8791: [0.22958, 0.72958, 0, 0, 0.77778], 8796: [0.08198, 0.91667, 0, 0, 0.77778], 8806: [0.25583, 0.75583, 0, 0, 0.77778], 8807: [0.25583, 0.75583, 0, 0, 0.77778], 8808: [0.25142, 0.75726, 0, 0, 0.77778], 8809: [0.25142, 0.75726, 0, 0, 0.77778], 8812: [0.25583, 0.75583, 0, 0, 0.5], 8814: [0.20576, 0.70576, 0, 0, 0.77778], 8815: [0.20576, 0.70576, 0, 0, 0.77778], 8816: [0.30274, 0.79383, 0, 0, 0.77778], 8817: [0.30274, 0.79383, 0, 0, 0.77778], 8818: [0.22958, 0.72958, 0, 0, 0.77778], 8819: [0.22958, 0.72958, 0, 0, 0.77778], 8822: [0.1808, 0.675, 0, 0, 0.77778], 8823: [0.1808, 0.675, 0, 0, 0.77778], 8828: [0.13667, 0.63667, 0, 0, 0.77778], 8829: [0.13667, 0.63667, 0, 0, 0.77778], 8830: [0.22958, 0.72958, 0, 0, 0.77778], 8831: [0.22958, 0.72958, 0, 0, 0.77778], 8832: [0.20576, 0.70576, 0, 0, 0.77778], 8833: [0.20576, 0.70576, 0, 0, 0.77778], 8840: [0.30274, 0.79383, 0, 0, 0.77778], 8841: [0.30274, 0.79383, 0, 0, 0.77778], 8842: [0.13597, 0.63597, 0, 0, 0.77778], 8843: [0.13597, 0.63597, 0, 0, 0.77778], 8847: [0.03517, 0.54986, 0, 0, 0.77778], 8848: [0.03517, 0.54986, 0, 0, 0.77778], 8858: [0.08198, 0.58198, 0, 0, 0.77778], 8859: [0.08198, 0.58198, 0, 0, 0.77778], 8861: [0.08198, 0.58198, 0, 0, 0.77778], 8862: [0, 0.675, 0, 0, 0.77778], 8863: [0, 0.675, 0, 0, 0.77778], 8864: [0, 0.675, 0, 0, 0.77778], 8865: [0, 0.675, 0, 0, 0.77778], 8872: [0, 0.69224, 0, 0, 0.61111], 8873: [0, 0.69224, 0, 0, 0.72222], 8874: [0, 0.69224, 0, 0, 0.88889], 8876: [0, 0.68889, 0, 0, 0.61111], 8877: [0, 0.68889, 0, 0, 0.61111], 8878: [0, 0.68889, 0, 0, 0.72222], 8879: [0, 0.68889, 0, 0, 0.72222], 8882: [0.03517, 0.54986, 0, 0, 0.77778], 8883: [0.03517, 0.54986, 0, 0, 0.77778], 8884: [0.13667, 0.63667, 0, 0, 0.77778], 8885: [0.13667, 0.63667, 0, 0, 0.77778], 8888: [0, 0.54986, 0, 0, 1.11111], 8890: [0.19444, 0.43056, 0, 0, 0.55556], 8891: [0.19444, 0.69224, 0, 0, 0.61111], 8892: [0.19444, 0.69224, 0, 0, 0.61111], 8901: [0, 0.54986, 0, 0, 0.27778], 8903: [0.08167, 0.58167, 0, 0, 0.77778], 8905: [0.08167, 0.58167, 0, 0, 0.77778], 8906: [0.08167, 0.58167, 0, 0, 0.77778], 8907: [0, 0.69224, 0, 0, 0.77778], 8908: [0, 0.69224, 0, 0, 0.77778], 8909: [-0.03598, 0.46402, 0, 0, 0.77778], 8910: [0, 0.54986, 0, 0, 0.76042], 8911: [0, 0.54986, 0, 0, 0.76042], 8912: [0.03517, 0.54986, 0, 0, 0.77778], 8913: [0.03517, 0.54986, 0, 0, 0.77778], 8914: [0, 0.54986, 0, 0, 0.66667], 8915: [0, 0.54986, 0, 0, 0.66667], 8916: [0, 0.69224, 0, 0, 0.66667], 8918: [0.0391, 0.5391, 0, 0, 0.77778], 8919: [0.0391, 0.5391, 0, 0, 0.77778], 8920: [0.03517, 0.54986, 0, 0, 1.33334], 8921: [0.03517, 0.54986, 0, 0, 1.33334], 8922: [0.38569, 0.88569, 0, 0, 0.77778], 8923: [0.38569, 0.88569, 0, 0, 0.77778], 8926: [0.13667, 0.63667, 0, 0, 0.77778], 8927: [0.13667, 0.63667, 0, 0, 0.77778], 8928: [0.30274, 0.79383, 0, 0, 0.77778], 8929: [0.30274, 0.79383, 0, 0, 0.77778], 8934: [0.23222, 0.74111, 0, 0, 0.77778], 8935: [0.23222, 0.74111, 0, 0, 0.77778], 8936: [0.23222, 0.74111, 0, 0, 0.77778], 8937: [0.23222, 0.74111, 0, 0, 0.77778], 8938: [0.20576, 0.70576, 0, 0, 0.77778], 8939: [0.20576, 0.70576, 0, 0, 0.77778], 8940: [0.30274, 0.79383, 0, 0, 0.77778], 8941: [0.30274, 0.79383, 0, 0, 0.77778], 8994: [0.19444, 0.69224, 0, 0, 0.77778], 8995: [0.19444, 0.69224, 0, 0, 0.77778], 9416: [0.15559, 0.69224, 0, 0, 0.90222], 9484: [0, 0.69224, 0, 0, 0.5], 9488: [0, 0.69224, 0, 0, 0.5], 9492: [0, 0.37788, 0, 0, 0.5], 9496: [0, 0.37788, 0, 0, 0.5], 9585: [0.19444, 0.68889, 0, 0, 0.88889], 9586: [0.19444, 0.74111, 0, 0, 0.88889], 9632: [0, 0.675, 0, 0, 0.77778], 9633: [0, 0.675, 0, 0, 0.77778], 9650: [0, 0.54986, 0, 0, 0.72222], 9651: [0, 0.54986, 0, 0, 0.72222], 9654: [0.03517, 0.54986, 0, 0, 0.77778], 9660: [0, 0.54986, 0, 0, 0.72222], 9661: [0, 0.54986, 0, 0, 0.72222], 9664: [0.03517, 0.54986, 0, 0, 0.77778], 9674: [0.11111, 0.69224, 0, 0, 0.66667], 9733: [0.19444, 0.69224, 0, 0, 0.94445], 10003: [0, 0.69224, 0, 0, 0.83334], 10016: [0, 0.69224, 0, 0, 0.83334], 10731: [0.11111, 0.69224, 0, 0, 0.66667], 10846: [0.19444, 0.75583, 0, 0, 0.61111], 10877: [0.13667, 0.63667, 0, 0, 0.77778], 10878: [0.13667, 0.63667, 0, 0, 0.77778], 10885: [0.25583, 0.75583, 0, 0, 0.77778], 10886: [0.25583, 0.75583, 0, 0, 0.77778], 10887: [0.13597, 0.63597, 0, 0, 0.77778], 10888: [0.13597, 0.63597, 0, 0, 0.77778], 10889: [0.26167, 0.75726, 0, 0, 0.77778], 10890: [0.26167, 0.75726, 0, 0, 0.77778], 10891: [0.48256, 0.98256, 0, 0, 0.77778], 10892: [0.48256, 0.98256, 0, 0, 0.77778], 10901: [0.13667, 0.63667, 0, 0, 0.77778], 10902: [0.13667, 0.63667, 0, 0, 0.77778], 10933: [0.25142, 0.75726, 0, 0, 0.77778], 10934: [0.25142, 0.75726, 0, 0, 0.77778], 10935: [0.26167, 0.75726, 0, 0, 0.77778], 10936: [0.26167, 0.75726, 0, 0, 0.77778], 10937: [0.26167, 0.75726, 0, 0, 0.77778], 10938: [0.26167, 0.75726, 0, 0, 0.77778], 10949: [0.25583, 0.75583, 0, 0, 0.77778], 10950: [0.25583, 0.75583, 0, 0, 0.77778], 10955: [0.28481, 0.79383, 0, 0, 0.77778], 10956: [0.28481, 0.79383, 0, 0, 0.77778], 57350: [0.08167, 0.58167, 0, 0, 0.22222], 57351: [0.08167, 0.58167, 0, 0, 0.38889], 57352: [0.08167, 0.58167, 0, 0, 0.77778], 57353: [0, 0.43056, 0.04028, 0, 0.66667], 57356: [0.25142, 0.75726, 0, 0, 0.77778], 57357: [0.25142, 0.75726, 0, 0, 0.77778], 57358: [0.41951, 0.91951, 0, 0, 0.77778], 57359: [0.30274, 0.79383, 0, 0, 0.77778], 57360: [0.30274, 0.79383, 0, 0, 0.77778], 57361: [0.41951, 0.91951, 0, 0, 0.77778], 57366: [0.25142, 0.75726, 0, 0, 0.77778], 57367: [0.25142, 0.75726, 0, 0, 0.77778], 57368: [0.25142, 0.75726, 0, 0, 0.77778], 57369: [0.25142, 0.75726, 0, 0, 0.77778], 57370: [0.13597, 0.63597, 0, 0, 0.77778], 57371: [0.13597, 0.63597, 0, 0, 0.77778] }, "Caligraphic-Regular": { 32: [0, 0, 0, 0, 0.25], 65: [0, 0.68333, 0, 0.19445, 0.79847], 66: [0, 0.68333, 0.03041, 0.13889, 0.65681], 67: [0, 0.68333, 0.05834, 0.13889, 0.52653], 68: [0, 0.68333, 0.02778, 0.08334, 0.77139], 69: [0, 0.68333, 0.08944, 0.11111, 0.52778], 70: [0, 0.68333, 0.09931, 0.11111, 0.71875], 71: [0.09722, 0.68333, 0.0593, 0.11111, 0.59487], 72: [0, 0.68333, 965e-5, 0.11111, 0.84452], 73: [0, 0.68333, 0.07382, 0, 0.54452], 74: [0.09722, 0.68333, 0.18472, 0.16667, 0.67778], 75: [0, 0.68333, 0.01445, 0.05556, 0.76195], 76: [0, 0.68333, 0, 0.13889, 0.68972], 77: [0, 0.68333, 0, 0.13889, 1.2009], 78: [0, 0.68333, 0.14736, 0.08334, 0.82049], 79: [0, 0.68333, 0.02778, 0.11111, 0.79611], 80: [0, 0.68333, 0.08222, 0.08334, 0.69556], 81: [0.09722, 0.68333, 0, 0.11111, 0.81667], 82: [0, 0.68333, 0, 0.08334, 0.8475], 83: [0, 0.68333, 0.075, 0.13889, 0.60556], 84: [0, 0.68333, 0.25417, 0, 0.54464], 85: [0, 0.68333, 0.09931, 0.08334, 0.62583], 86: [0, 0.68333, 0.08222, 0, 0.61278], 87: [0, 0.68333, 0.08222, 0.08334, 0.98778], 88: [0, 0.68333, 0.14643, 0.13889, 0.7133], 89: [0.09722, 0.68333, 0.08222, 0.08334, 0.66834], 90: [0, 0.68333, 0.07944, 0.13889, 0.72473], 160: [0, 0, 0, 0, 0.25] }, "Fraktur-Regular": { 32: [0, 0, 0, 0, 0.25], 33: [0, 0.69141, 0, 0, 0.29574], 34: [0, 0.69141, 0, 0, 0.21471], 38: [0, 0.69141, 0, 0, 0.73786], 39: [0, 0.69141, 0, 0, 0.21201], 40: [0.24982, 0.74947, 0, 0, 0.38865], 41: [0.24982, 0.74947, 0, 0, 0.38865], 42: [0, 0.62119, 0, 0, 0.27764], 43: [0.08319, 0.58283, 0, 0, 0.75623], 44: [0, 0.10803, 0, 0, 0.27764], 45: [0.08319, 0.58283, 0, 0, 0.75623], 46: [0, 0.10803, 0, 0, 0.27764], 47: [0.24982, 0.74947, 0, 0, 0.50181], 48: [0, 0.47534, 0, 0, 0.50181], 49: [0, 0.47534, 0, 0, 0.50181], 50: [0, 0.47534, 0, 0, 0.50181], 51: [0.18906, 0.47534, 0, 0, 0.50181], 52: [0.18906, 0.47534, 0, 0, 0.50181], 53: [0.18906, 0.47534, 0, 0, 0.50181], 54: [0, 0.69141, 0, 0, 0.50181], 55: [0.18906, 0.47534, 0, 0, 0.50181], 56: [0, 0.69141, 0, 0, 0.50181], 57: [0.18906, 0.47534, 0, 0, 0.50181], 58: [0, 0.47534, 0, 0, 0.21606], 59: [0.12604, 0.47534, 0, 0, 0.21606], 61: [-0.13099, 0.36866, 0, 0, 0.75623], 63: [0, 0.69141, 0, 0, 0.36245], 65: [0, 0.69141, 0, 0, 0.7176], 66: [0, 0.69141, 0, 0, 0.88397], 67: [0, 0.69141, 0, 0, 0.61254], 68: [0, 0.69141, 0, 0, 0.83158], 69: [0, 0.69141, 0, 0, 0.66278], 70: [0.12604, 0.69141, 0, 0, 0.61119], 71: [0, 0.69141, 0, 0, 0.78539], 72: [0.06302, 0.69141, 0, 0, 0.7203], 73: [0, 0.69141, 0, 0, 0.55448], 74: [0.12604, 0.69141, 0, 0, 0.55231], 75: [0, 0.69141, 0, 0, 0.66845], 76: [0, 0.69141, 0, 0, 0.66602], 77: [0, 0.69141, 0, 0, 1.04953], 78: [0, 0.69141, 0, 0, 0.83212], 79: [0, 0.69141, 0, 0, 0.82699], 80: [0.18906, 0.69141, 0, 0, 0.82753], 81: [0.03781, 0.69141, 0, 0, 0.82699], 82: [0, 0.69141, 0, 0, 0.82807], 83: [0, 0.69141, 0, 0, 0.82861], 84: [0, 0.69141, 0, 0, 0.66899], 85: [0, 0.69141, 0, 0, 0.64576], 86: [0, 0.69141, 0, 0, 0.83131], 87: [0, 0.69141, 0, 0, 1.04602], 88: [0, 0.69141, 0, 0, 0.71922], 89: [0.18906, 0.69141, 0, 0, 0.83293], 90: [0.12604, 0.69141, 0, 0, 0.60201], 91: [0.24982, 0.74947, 0, 0, 0.27764], 93: [0.24982, 0.74947, 0, 0, 0.27764], 94: [0, 0.69141, 0, 0, 0.49965], 97: [0, 0.47534, 0, 0, 0.50046], 98: [0, 0.69141, 0, 0, 0.51315], 99: [0, 0.47534, 0, 0, 0.38946], 100: [0, 0.62119, 0, 0, 0.49857], 101: [0, 0.47534, 0, 0, 0.40053], 102: [0.18906, 0.69141, 0, 0, 0.32626], 103: [0.18906, 0.47534, 0, 0, 0.5037], 104: [0.18906, 0.69141, 0, 0, 0.52126], 105: [0, 0.69141, 0, 0, 0.27899], 106: [0, 0.69141, 0, 0, 0.28088], 107: [0, 0.69141, 0, 0, 0.38946], 108: [0, 0.69141, 0, 0, 0.27953], 109: [0, 0.47534, 0, 0, 0.76676], 110: [0, 0.47534, 0, 0, 0.52666], 111: [0, 0.47534, 0, 0, 0.48885], 112: [0.18906, 0.52396, 0, 0, 0.50046], 113: [0.18906, 0.47534, 0, 0, 0.48912], 114: [0, 0.47534, 0, 0, 0.38919], 115: [0, 0.47534, 0, 0, 0.44266], 116: [0, 0.62119, 0, 0, 0.33301], 117: [0, 0.47534, 0, 0, 0.5172], 118: [0, 0.52396, 0, 0, 0.5118], 119: [0, 0.52396, 0, 0, 0.77351], 120: [0.18906, 0.47534, 0, 0, 0.38865], 121: [0.18906, 0.47534, 0, 0, 0.49884], 122: [0.18906, 0.47534, 0, 0, 0.39054], 160: [0, 0, 0, 0, 0.25], 8216: [0, 0.69141, 0, 0, 0.21471], 8217: [0, 0.69141, 0, 0, 0.21471], 58112: [0, 0.62119, 0, 0, 0.49749], 58113: [0, 0.62119, 0, 0, 0.4983], 58114: [0.18906, 0.69141, 0, 0, 0.33328], 58115: [0.18906, 0.69141, 0, 0, 0.32923], 58116: [0.18906, 0.47534, 0, 0, 0.50343], 58117: [0, 0.69141, 0, 0, 0.33301], 58118: [0, 0.62119, 0, 0, 0.33409], 58119: [0, 0.47534, 0, 0, 0.50073] }, "Main-Bold": { 32: [0, 0, 0, 0, 0.25], 33: [0, 0.69444, 0, 0, 0.35], 34: [0, 0.69444, 0, 0, 0.60278], 35: [0.19444, 0.69444, 0, 0, 0.95833], 36: [0.05556, 0.75, 0, 0, 0.575], 37: [0.05556, 0.75, 0, 0, 0.95833], 38: [0, 0.69444, 0, 0, 0.89444], 39: [0, 0.69444, 0, 0, 0.31944], 40: [0.25, 0.75, 0, 0, 0.44722], 41: [0.25, 0.75, 0, 0, 0.44722], 42: [0, 0.75, 0, 0, 0.575], 43: [0.13333, 0.63333, 0, 0, 0.89444], 44: [0.19444, 0.15556, 0, 0, 0.31944], 45: [0, 0.44444, 0, 0, 0.38333], 46: [0, 0.15556, 0, 0, 0.31944], 47: [0.25, 0.75, 0, 0, 0.575], 48: [0, 0.64444, 0, 0, 0.575], 49: [0, 0.64444, 0, 0, 0.575], 50: [0, 0.64444, 0, 0, 0.575], 51: [0, 0.64444, 0, 0, 0.575], 52: [0, 0.64444, 0, 0, 0.575], 53: [0, 0.64444, 0, 0, 0.575], 54: [0, 0.64444, 0, 0, 0.575], 55: [0, 0.64444, 0, 0, 0.575], 56: [0, 0.64444, 0, 0, 0.575], 57: [0, 0.64444, 0, 0, 0.575], 58: [0, 0.44444, 0, 0, 0.31944], 59: [0.19444, 0.44444, 0, 0, 0.31944], 60: [0.08556, 0.58556, 0, 0, 0.89444], 61: [-0.10889, 0.39111, 0, 0, 0.89444], 62: [0.08556, 0.58556, 0, 0, 0.89444], 63: [0, 0.69444, 0, 0, 0.54305], 64: [0, 0.69444, 0, 0, 0.89444], 65: [0, 0.68611, 0, 0, 0.86944], 66: [0, 0.68611, 0, 0, 0.81805], 67: [0, 0.68611, 0, 0, 0.83055], 68: [0, 0.68611, 0, 0, 0.88194], 69: [0, 0.68611, 0, 0, 0.75555], 70: [0, 0.68611, 0, 0, 0.72361], 71: [0, 0.68611, 0, 0, 0.90416], 72: [0, 0.68611, 0, 0, 0.9], 73: [0, 0.68611, 0, 0, 0.43611], 74: [0, 0.68611, 0, 0, 0.59444], 75: [0, 0.68611, 0, 0, 0.90138], 76: [0, 0.68611, 0, 0, 0.69166], 77: [0, 0.68611, 0, 0, 1.09166], 78: [0, 0.68611, 0, 0, 0.9], 79: [0, 0.68611, 0, 0, 0.86388], 80: [0, 0.68611, 0, 0, 0.78611], 81: [0.19444, 0.68611, 0, 0, 0.86388], 82: [0, 0.68611, 0, 0, 0.8625], 83: [0, 0.68611, 0, 0, 0.63889], 84: [0, 0.68611, 0, 0, 0.8], 85: [0, 0.68611, 0, 0, 0.88472], 86: [0, 0.68611, 0.01597, 0, 0.86944], 87: [0, 0.68611, 0.01597, 0, 1.18888], 88: [0, 0.68611, 0, 0, 0.86944], 89: [0, 0.68611, 0.02875, 0, 0.86944], 90: [0, 0.68611, 0, 0, 0.70277], 91: [0.25, 0.75, 0, 0, 0.31944], 92: [0.25, 0.75, 0, 0, 0.575], 93: [0.25, 0.75, 0, 0, 0.31944], 94: [0, 0.69444, 0, 0, 0.575], 95: [0.31, 0.13444, 0.03194, 0, 0.575], 97: [0, 0.44444, 0, 0, 0.55902], 98: [0, 0.69444, 0, 0, 0.63889], 99: [0, 0.44444, 0, 0, 0.51111], 100: [0, 0.69444, 0, 0, 0.63889], 101: [0, 0.44444, 0, 0, 0.52708], 102: [0, 0.69444, 0.10903, 0, 0.35139], 103: [0.19444, 0.44444, 0.01597, 0, 0.575], 104: [0, 0.69444, 0, 0, 0.63889], 105: [0, 0.69444, 0, 0, 0.31944], 106: [0.19444, 0.69444, 0, 0, 0.35139], 107: [0, 0.69444, 0, 0, 0.60694], 108: [0, 0.69444, 0, 0, 0.31944], 109: [0, 0.44444, 0, 0, 0.95833], 110: [0, 0.44444, 0, 0, 0.63889], 111: [0, 0.44444, 0, 0, 0.575], 112: [0.19444, 0.44444, 0, 0, 0.63889], 113: [0.19444, 0.44444, 0, 0, 0.60694], 114: [0, 0.44444, 0, 0, 0.47361], 115: [0, 0.44444, 0, 0, 0.45361], 116: [0, 0.63492, 0, 0, 0.44722], 117: [0, 0.44444, 0, 0, 0.63889], 118: [0, 0.44444, 0.01597, 0, 0.60694], 119: [0, 0.44444, 0.01597, 0, 0.83055], 120: [0, 0.44444, 0, 0, 0.60694], 121: [0.19444, 0.44444, 0.01597, 0, 0.60694], 122: [0, 0.44444, 0, 0, 0.51111], 123: [0.25, 0.75, 0, 0, 0.575], 124: [0.25, 0.75, 0, 0, 0.31944], 125: [0.25, 0.75, 0, 0, 0.575], 126: [0.35, 0.34444, 0, 0, 0.575], 160: [0, 0, 0, 0, 0.25], 163: [0, 0.69444, 0, 0, 0.86853], 168: [0, 0.69444, 0, 0, 0.575], 172: [0, 0.44444, 0, 0, 0.76666], 176: [0, 0.69444, 0, 0, 0.86944], 177: [0.13333, 0.63333, 0, 0, 0.89444], 184: [0.17014, 0, 0, 0, 0.51111], 198: [0, 0.68611, 0, 0, 1.04166], 215: [0.13333, 0.63333, 0, 0, 0.89444], 216: [0.04861, 0.73472, 0, 0, 0.89444], 223: [0, 0.69444, 0, 0, 0.59722], 230: [0, 0.44444, 0, 0, 0.83055], 247: [0.13333, 0.63333, 0, 0, 0.89444], 248: [0.09722, 0.54167, 0, 0, 0.575], 305: [0, 0.44444, 0, 0, 0.31944], 338: [0, 0.68611, 0, 0, 1.16944], 339: [0, 0.44444, 0, 0, 0.89444], 567: [0.19444, 0.44444, 0, 0, 0.35139], 710: [0, 0.69444, 0, 0, 0.575], 711: [0, 0.63194, 0, 0, 0.575], 713: [0, 0.59611, 0, 0, 0.575], 714: [0, 0.69444, 0, 0, 0.575], 715: [0, 0.69444, 0, 0, 0.575], 728: [0, 0.69444, 0, 0, 0.575], 729: [0, 0.69444, 0, 0, 0.31944], 730: [0, 0.69444, 0, 0, 0.86944], 732: [0, 0.69444, 0, 0, 0.575], 733: [0, 0.69444, 0, 0, 0.575], 915: [0, 0.68611, 0, 0, 0.69166], 916: [0, 0.68611, 0, 0, 0.95833], 920: [0, 0.68611, 0, 0, 0.89444], 923: [0, 0.68611, 0, 0, 0.80555], 926: [0, 0.68611, 0, 0, 0.76666], 928: [0, 0.68611, 0, 0, 0.9], 931: [0, 0.68611, 0, 0, 0.83055], 933: [0, 0.68611, 0, 0, 0.89444], 934: [0, 0.68611, 0, 0, 0.83055], 936: [0, 0.68611, 0, 0, 0.89444], 937: [0, 0.68611, 0, 0, 0.83055], 8211: [0, 0.44444, 0.03194, 0, 0.575], 8212: [0, 0.44444, 0.03194, 0, 1.14999], 8216: [0, 0.69444, 0, 0, 0.31944], 8217: [0, 0.69444, 0, 0, 0.31944], 8220: [0, 0.69444, 0, 0, 0.60278], 8221: [0, 0.69444, 0, 0, 0.60278], 8224: [0.19444, 0.69444, 0, 0, 0.51111], 8225: [0.19444, 0.69444, 0, 0, 0.51111], 8242: [0, 0.55556, 0, 0, 0.34444], 8407: [0, 0.72444, 0.15486, 0, 0.575], 8463: [0, 0.69444, 0, 0, 0.66759], 8465: [0, 0.69444, 0, 0, 0.83055], 8467: [0, 0.69444, 0, 0, 0.47361], 8472: [0.19444, 0.44444, 0, 0, 0.74027], 8476: [0, 0.69444, 0, 0, 0.83055], 8501: [0, 0.69444, 0, 0, 0.70277], 8592: [-0.10889, 0.39111, 0, 0, 1.14999], 8593: [0.19444, 0.69444, 0, 0, 0.575], 8594: [-0.10889, 0.39111, 0, 0, 1.14999], 8595: [0.19444, 0.69444, 0, 0, 0.575], 8596: [-0.10889, 0.39111, 0, 0, 1.14999], 8597: [0.25, 0.75, 0, 0, 0.575], 8598: [0.19444, 0.69444, 0, 0, 1.14999], 8599: [0.19444, 0.69444, 0, 0, 1.14999], 8600: [0.19444, 0.69444, 0, 0, 1.14999], 8601: [0.19444, 0.69444, 0, 0, 1.14999], 8636: [-0.10889, 0.39111, 0, 0, 1.14999], 8637: [-0.10889, 0.39111, 0, 0, 1.14999], 8640: [-0.10889, 0.39111, 0, 0, 1.14999], 8641: [-0.10889, 0.39111, 0, 0, 1.14999], 8656: [-0.10889, 0.39111, 0, 0, 1.14999], 8657: [0.19444, 0.69444, 0, 0, 0.70277], 8658: [-0.10889, 0.39111, 0, 0, 1.14999], 8659: [0.19444, 0.69444, 0, 0, 0.70277], 8660: [-0.10889, 0.39111, 0, 0, 1.14999], 8661: [0.25, 0.75, 0, 0, 0.70277], 8704: [0, 0.69444, 0, 0, 0.63889], 8706: [0, 0.69444, 0.06389, 0, 0.62847], 8707: [0, 0.69444, 0, 0, 0.63889], 8709: [0.05556, 0.75, 0, 0, 0.575], 8711: [0, 0.68611, 0, 0, 0.95833], 8712: [0.08556, 0.58556, 0, 0, 0.76666], 8715: [0.08556, 0.58556, 0, 0, 0.76666], 8722: [0.13333, 0.63333, 0, 0, 0.89444], 8723: [0.13333, 0.63333, 0, 0, 0.89444], 8725: [0.25, 0.75, 0, 0, 0.575], 8726: [0.25, 0.75, 0, 0, 0.575], 8727: [-0.02778, 0.47222, 0, 0, 0.575], 8728: [-0.02639, 0.47361, 0, 0, 0.575], 8729: [-0.02639, 0.47361, 0, 0, 0.575], 8730: [0.18, 0.82, 0, 0, 0.95833], 8733: [0, 0.44444, 0, 0, 0.89444], 8734: [0, 0.44444, 0, 0, 1.14999], 8736: [0, 0.69224, 0, 0, 0.72222], 8739: [0.25, 0.75, 0, 0, 0.31944], 8741: [0.25, 0.75, 0, 0, 0.575], 8743: [0, 0.55556, 0, 0, 0.76666], 8744: [0, 0.55556, 0, 0, 0.76666], 8745: [0, 0.55556, 0, 0, 0.76666], 8746: [0, 0.55556, 0, 0, 0.76666], 8747: [0.19444, 0.69444, 0.12778, 0, 0.56875], 8764: [-0.10889, 0.39111, 0, 0, 0.89444], 8768: [0.19444, 0.69444, 0, 0, 0.31944], 8771: [222e-5, 0.50222, 0, 0, 0.89444], 8773: [0.027, 0.638, 0, 0, 0.894], 8776: [0.02444, 0.52444, 0, 0, 0.89444], 8781: [222e-5, 0.50222, 0, 0, 0.89444], 8801: [222e-5, 0.50222, 0, 0, 0.89444], 8804: [0.19667, 0.69667, 0, 0, 0.89444], 8805: [0.19667, 0.69667, 0, 0, 0.89444], 8810: [0.08556, 0.58556, 0, 0, 1.14999], 8811: [0.08556, 0.58556, 0, 0, 1.14999], 8826: [0.08556, 0.58556, 0, 0, 0.89444], 8827: [0.08556, 0.58556, 0, 0, 0.89444], 8834: [0.08556, 0.58556, 0, 0, 0.89444], 8835: [0.08556, 0.58556, 0, 0, 0.89444], 8838: [0.19667, 0.69667, 0, 0, 0.89444], 8839: [0.19667, 0.69667, 0, 0, 0.89444], 8846: [0, 0.55556, 0, 0, 0.76666], 8849: [0.19667, 0.69667, 0, 0, 0.89444], 8850: [0.19667, 0.69667, 0, 0, 0.89444], 8851: [0, 0.55556, 0, 0, 0.76666], 8852: [0, 0.55556, 0, 0, 0.76666], 8853: [0.13333, 0.63333, 0, 0, 0.89444], 8854: [0.13333, 0.63333, 0, 0, 0.89444], 8855: [0.13333, 0.63333, 0, 0, 0.89444], 8856: [0.13333, 0.63333, 0, 0, 0.89444], 8857: [0.13333, 0.63333, 0, 0, 0.89444], 8866: [0, 0.69444, 0, 0, 0.70277], 8867: [0, 0.69444, 0, 0, 0.70277], 8868: [0, 0.69444, 0, 0, 0.89444], 8869: [0, 0.69444, 0, 0, 0.89444], 8900: [-0.02639, 0.47361, 0, 0, 0.575], 8901: [-0.02639, 0.47361, 0, 0, 0.31944], 8902: [-0.02778, 0.47222, 0, 0, 0.575], 8968: [0.25, 0.75, 0, 0, 0.51111], 8969: [0.25, 0.75, 0, 0, 0.51111], 8970: [0.25, 0.75, 0, 0, 0.51111], 8971: [0.25, 0.75, 0, 0, 0.51111], 8994: [-0.13889, 0.36111, 0, 0, 1.14999], 8995: [-0.13889, 0.36111, 0, 0, 1.14999], 9651: [0.19444, 0.69444, 0, 0, 1.02222], 9657: [-0.02778, 0.47222, 0, 0, 0.575], 9661: [0.19444, 0.69444, 0, 0, 1.02222], 9667: [-0.02778, 0.47222, 0, 0, 0.575], 9711: [0.19444, 0.69444, 0, 0, 1.14999], 9824: [0.12963, 0.69444, 0, 0, 0.89444], 9825: [0.12963, 0.69444, 0, 0, 0.89444], 9826: [0.12963, 0.69444, 0, 0, 0.89444], 9827: [0.12963, 0.69444, 0, 0, 0.89444], 9837: [0, 0.75, 0, 0, 0.44722], 9838: [0.19444, 0.69444, 0, 0, 0.44722], 9839: [0.19444, 0.69444, 0, 0, 0.44722], 10216: [0.25, 0.75, 0, 0, 0.44722], 10217: [0.25, 0.75, 0, 0, 0.44722], 10815: [0, 0.68611, 0, 0, 0.9], 10927: [0.19667, 0.69667, 0, 0, 0.89444], 10928: [0.19667, 0.69667, 0, 0, 0.89444], 57376: [0.19444, 0.69444, 0, 0, 0] }, "Main-BoldItalic": { 32: [0, 0, 0, 0, 0.25], 33: [0, 0.69444, 0.11417, 0, 0.38611], 34: [0, 0.69444, 0.07939, 0, 0.62055], 35: [0.19444, 0.69444, 0.06833, 0, 0.94444], 37: [0.05556, 0.75, 0.12861, 0, 0.94444], 38: [0, 0.69444, 0.08528, 0, 0.88555], 39: [0, 0.69444, 0.12945, 0, 0.35555], 40: [0.25, 0.75, 0.15806, 0, 0.47333], 41: [0.25, 0.75, 0.03306, 0, 0.47333], 42: [0, 0.75, 0.14333, 0, 0.59111], 43: [0.10333, 0.60333, 0.03306, 0, 0.88555], 44: [0.19444, 0.14722, 0, 0, 0.35555], 45: [0, 0.44444, 0.02611, 0, 0.41444], 46: [0, 0.14722, 0, 0, 0.35555], 47: [0.25, 0.75, 0.15806, 0, 0.59111], 48: [0, 0.64444, 0.13167, 0, 0.59111], 49: [0, 0.64444, 0.13167, 0, 0.59111], 50: [0, 0.64444, 0.13167, 0, 0.59111], 51: [0, 0.64444, 0.13167, 0, 0.59111], 52: [0.19444, 0.64444, 0.13167, 0, 0.59111], 53: [0, 0.64444, 0.13167, 0, 0.59111], 54: [0, 0.64444, 0.13167, 0, 0.59111], 55: [0.19444, 0.64444, 0.13167, 0, 0.59111], 56: [0, 0.64444, 0.13167, 0, 0.59111], 57: [0, 0.64444, 0.13167, 0, 0.59111], 58: [0, 0.44444, 0.06695, 0, 0.35555], 59: [0.19444, 0.44444, 0.06695, 0, 0.35555], 61: [-0.10889, 0.39111, 0.06833, 0, 0.88555], 63: [0, 0.69444, 0.11472, 0, 0.59111], 64: [0, 0.69444, 0.09208, 0, 0.88555], 65: [0, 0.68611, 0, 0, 0.86555], 66: [0, 0.68611, 0.0992, 0, 0.81666], 67: [0, 0.68611, 0.14208, 0, 0.82666], 68: [0, 0.68611, 0.09062, 0, 0.87555], 69: [0, 0.68611, 0.11431, 0, 0.75666], 70: [0, 0.68611, 0.12903, 0, 0.72722], 71: [0, 0.68611, 0.07347, 0, 0.89527], 72: [0, 0.68611, 0.17208, 0, 0.8961], 73: [0, 0.68611, 0.15681, 0, 0.47166], 74: [0, 0.68611, 0.145, 0, 0.61055], 75: [0, 0.68611, 0.14208, 0, 0.89499], 76: [0, 0.68611, 0, 0, 0.69777], 77: [0, 0.68611, 0.17208, 0, 1.07277], 78: [0, 0.68611, 0.17208, 0, 0.8961], 79: [0, 0.68611, 0.09062, 0, 0.85499], 80: [0, 0.68611, 0.0992, 0, 0.78721], 81: [0.19444, 0.68611, 0.09062, 0, 0.85499], 82: [0, 0.68611, 0.02559, 0, 0.85944], 83: [0, 0.68611, 0.11264, 0, 0.64999], 84: [0, 0.68611, 0.12903, 0, 0.7961], 85: [0, 0.68611, 0.17208, 0, 0.88083], 86: [0, 0.68611, 0.18625, 0, 0.86555], 87: [0, 0.68611, 0.18625, 0, 1.15999], 88: [0, 0.68611, 0.15681, 0, 0.86555], 89: [0, 0.68611, 0.19803, 0, 0.86555], 90: [0, 0.68611, 0.14208, 0, 0.70888], 91: [0.25, 0.75, 0.1875, 0, 0.35611], 93: [0.25, 0.75, 0.09972, 0, 0.35611], 94: [0, 0.69444, 0.06709, 0, 0.59111], 95: [0.31, 0.13444, 0.09811, 0, 0.59111], 97: [0, 0.44444, 0.09426, 0, 0.59111], 98: [0, 0.69444, 0.07861, 0, 0.53222], 99: [0, 0.44444, 0.05222, 0, 0.53222], 100: [0, 0.69444, 0.10861, 0, 0.59111], 101: [0, 0.44444, 0.085, 0, 0.53222], 102: [0.19444, 0.69444, 0.21778, 0, 0.4], 103: [0.19444, 0.44444, 0.105, 0, 0.53222], 104: [0, 0.69444, 0.09426, 0, 0.59111], 105: [0, 0.69326, 0.11387, 0, 0.35555], 106: [0.19444, 0.69326, 0.1672, 0, 0.35555], 107: [0, 0.69444, 0.11111, 0, 0.53222], 108: [0, 0.69444, 0.10861, 0, 0.29666], 109: [0, 0.44444, 0.09426, 0, 0.94444], 110: [0, 0.44444, 0.09426, 0, 0.64999], 111: [0, 0.44444, 0.07861, 0, 0.59111], 112: [0.19444, 0.44444, 0.07861, 0, 0.59111], 113: [0.19444, 0.44444, 0.105, 0, 0.53222], 114: [0, 0.44444, 0.11111, 0, 0.50167], 115: [0, 0.44444, 0.08167, 0, 0.48694], 116: [0, 0.63492, 0.09639, 0, 0.385], 117: [0, 0.44444, 0.09426, 0, 0.62055], 118: [0, 0.44444, 0.11111, 0, 0.53222], 119: [0, 0.44444, 0.11111, 0, 0.76777], 120: [0, 0.44444, 0.12583, 0, 0.56055], 121: [0.19444, 0.44444, 0.105, 0, 0.56166], 122: [0, 0.44444, 0.13889, 0, 0.49055], 126: [0.35, 0.34444, 0.11472, 0, 0.59111], 160: [0, 0, 0, 0, 0.25], 168: [0, 0.69444, 0.11473, 0, 0.59111], 176: [0, 0.69444, 0, 0, 0.94888], 184: [0.17014, 0, 0, 0, 0.53222], 198: [0, 0.68611, 0.11431, 0, 1.02277], 216: [0.04861, 0.73472, 0.09062, 0, 0.88555], 223: [0.19444, 0.69444, 0.09736, 0, 0.665], 230: [0, 0.44444, 0.085, 0, 0.82666], 248: [0.09722, 0.54167, 0.09458, 0, 0.59111], 305: [0, 0.44444, 0.09426, 0, 0.35555], 338: [0, 0.68611, 0.11431, 0, 1.14054], 339: [0, 0.44444, 0.085, 0, 0.82666], 567: [0.19444, 0.44444, 0.04611, 0, 0.385], 710: [0, 0.69444, 0.06709, 0, 0.59111], 711: [0, 0.63194, 0.08271, 0, 0.59111], 713: [0, 0.59444, 0.10444, 0, 0.59111], 714: [0, 0.69444, 0.08528, 0, 0.59111], 715: [0, 0.69444, 0, 0, 0.59111], 728: [0, 0.69444, 0.10333, 0, 0.59111], 729: [0, 0.69444, 0.12945, 0, 0.35555], 730: [0, 0.69444, 0, 0, 0.94888], 732: [0, 0.69444, 0.11472, 0, 0.59111], 733: [0, 0.69444, 0.11472, 0, 0.59111], 915: [0, 0.68611, 0.12903, 0, 0.69777], 916: [0, 0.68611, 0, 0, 0.94444], 920: [0, 0.68611, 0.09062, 0, 0.88555], 923: [0, 0.68611, 0, 0, 0.80666], 926: [0, 0.68611, 0.15092, 0, 0.76777], 928: [0, 0.68611, 0.17208, 0, 0.8961], 931: [0, 0.68611, 0.11431, 0, 0.82666], 933: [0, 0.68611, 0.10778, 0, 0.88555], 934: [0, 0.68611, 0.05632, 0, 0.82666], 936: [0, 0.68611, 0.10778, 0, 0.88555], 937: [0, 0.68611, 0.0992, 0, 0.82666], 8211: [0, 0.44444, 0.09811, 0, 0.59111], 8212: [0, 0.44444, 0.09811, 0, 1.18221], 8216: [0, 0.69444, 0.12945, 0, 0.35555], 8217: [0, 0.69444, 0.12945, 0, 0.35555], 8220: [0, 0.69444, 0.16772, 0, 0.62055], 8221: [0, 0.69444, 0.07939, 0, 0.62055] }, "Main-Italic": { 32: [0, 0, 0, 0, 0.25], 33: [0, 0.69444, 0.12417, 0, 0.30667], 34: [0, 0.69444, 0.06961, 0, 0.51444], 35: [0.19444, 0.69444, 0.06616, 0, 0.81777], 37: [0.05556, 0.75, 0.13639, 0, 0.81777], 38: [0, 0.69444, 0.09694, 0, 0.76666], 39: [0, 0.69444, 0.12417, 0, 0.30667], 40: [0.25, 0.75, 0.16194, 0, 0.40889], 41: [0.25, 0.75, 0.03694, 0, 0.40889], 42: [0, 0.75, 0.14917, 0, 0.51111], 43: [0.05667, 0.56167, 0.03694, 0, 0.76666], 44: [0.19444, 0.10556, 0, 0, 0.30667], 45: [0, 0.43056, 0.02826, 0, 0.35778], 46: [0, 0.10556, 0, 0, 0.30667], 47: [0.25, 0.75, 0.16194, 0, 0.51111], 48: [0, 0.64444, 0.13556, 0, 0.51111], 49: [0, 0.64444, 0.13556, 0, 0.51111], 50: [0, 0.64444, 0.13556, 0, 0.51111], 51: [0, 0.64444, 0.13556, 0, 0.51111], 52: [0.19444, 0.64444, 0.13556, 0, 0.51111], 53: [0, 0.64444, 0.13556, 0, 0.51111], 54: [0, 0.64444, 0.13556, 0, 0.51111], 55: [0.19444, 0.64444, 0.13556, 0, 0.51111], 56: [0, 0.64444, 0.13556, 0, 0.51111], 57: [0, 0.64444, 0.13556, 0, 0.51111], 58: [0, 0.43056, 0.0582, 0, 0.30667], 59: [0.19444, 0.43056, 0.0582, 0, 0.30667], 61: [-0.13313, 0.36687, 0.06616, 0, 0.76666], 63: [0, 0.69444, 0.1225, 0, 0.51111], 64: [0, 0.69444, 0.09597, 0, 0.76666], 65: [0, 0.68333, 0, 0, 0.74333], 66: [0, 0.68333, 0.10257, 0, 0.70389], 67: [0, 0.68333, 0.14528, 0, 0.71555], 68: [0, 0.68333, 0.09403, 0, 0.755], 69: [0, 0.68333, 0.12028, 0, 0.67833], 70: [0, 0.68333, 0.13305, 0, 0.65277], 71: [0, 0.68333, 0.08722, 0, 0.77361], 72: [0, 0.68333, 0.16389, 0, 0.74333], 73: [0, 0.68333, 0.15806, 0, 0.38555], 74: [0, 0.68333, 0.14028, 0, 0.525], 75: [0, 0.68333, 0.14528, 0, 0.76888], 76: [0, 0.68333, 0, 0, 0.62722], 77: [0, 0.68333, 0.16389, 0, 0.89666], 78: [0, 0.68333, 0.16389, 0, 0.74333], 79: [0, 0.68333, 0.09403, 0, 0.76666], 80: [0, 0.68333, 0.10257, 0, 0.67833], 81: [0.19444, 0.68333, 0.09403, 0, 0.76666], 82: [0, 0.68333, 0.03868, 0, 0.72944], 83: [0, 0.68333, 0.11972, 0, 0.56222], 84: [0, 0.68333, 0.13305, 0, 0.71555], 85: [0, 0.68333, 0.16389, 0, 0.74333], 86: [0, 0.68333, 0.18361, 0, 0.74333], 87: [0, 0.68333, 0.18361, 0, 0.99888], 88: [0, 0.68333, 0.15806, 0, 0.74333], 89: [0, 0.68333, 0.19383, 0, 0.74333], 90: [0, 0.68333, 0.14528, 0, 0.61333], 91: [0.25, 0.75, 0.1875, 0, 0.30667], 93: [0.25, 0.75, 0.10528, 0, 0.30667], 94: [0, 0.69444, 0.06646, 0, 0.51111], 95: [0.31, 0.12056, 0.09208, 0, 0.51111], 97: [0, 0.43056, 0.07671, 0, 0.51111], 98: [0, 0.69444, 0.06312, 0, 0.46], 99: [0, 0.43056, 0.05653, 0, 0.46], 100: [0, 0.69444, 0.10333, 0, 0.51111], 101: [0, 0.43056, 0.07514, 0, 0.46], 102: [0.19444, 0.69444, 0.21194, 0, 0.30667], 103: [0.19444, 0.43056, 0.08847, 0, 0.46], 104: [0, 0.69444, 0.07671, 0, 0.51111], 105: [0, 0.65536, 0.1019, 0, 0.30667], 106: [0.19444, 0.65536, 0.14467, 0, 0.30667], 107: [0, 0.69444, 0.10764, 0, 0.46], 108: [0, 0.69444, 0.10333, 0, 0.25555], 109: [0, 0.43056, 0.07671, 0, 0.81777], 110: [0, 0.43056, 0.07671, 0, 0.56222], 111: [0, 0.43056, 0.06312, 0, 0.51111], 112: [0.19444, 0.43056, 0.06312, 0, 0.51111], 113: [0.19444, 0.43056, 0.08847, 0, 0.46], 114: [0, 0.43056, 0.10764, 0, 0.42166], 115: [0, 0.43056, 0.08208, 0, 0.40889], 116: [0, 0.61508, 0.09486, 0, 0.33222], 117: [0, 0.43056, 0.07671, 0, 0.53666], 118: [0, 0.43056, 0.10764, 0, 0.46], 119: [0, 0.43056, 0.10764, 0, 0.66444], 120: [0, 0.43056, 0.12042, 0, 0.46389], 121: [0.19444, 0.43056, 0.08847, 0, 0.48555], 122: [0, 0.43056, 0.12292, 0, 0.40889], 126: [0.35, 0.31786, 0.11585, 0, 0.51111], 160: [0, 0, 0, 0, 0.25], 168: [0, 0.66786, 0.10474, 0, 0.51111], 176: [0, 0.69444, 0, 0, 0.83129], 184: [0.17014, 0, 0, 0, 0.46], 198: [0, 0.68333, 0.12028, 0, 0.88277], 216: [0.04861, 0.73194, 0.09403, 0, 0.76666], 223: [0.19444, 0.69444, 0.10514, 0, 0.53666], 230: [0, 0.43056, 0.07514, 0, 0.71555], 248: [0.09722, 0.52778, 0.09194, 0, 0.51111], 338: [0, 0.68333, 0.12028, 0, 0.98499], 339: [0, 0.43056, 0.07514, 0, 0.71555], 710: [0, 0.69444, 0.06646, 0, 0.51111], 711: [0, 0.62847, 0.08295, 0, 0.51111], 713: [0, 0.56167, 0.10333, 0, 0.51111], 714: [0, 0.69444, 0.09694, 0, 0.51111], 715: [0, 0.69444, 0, 0, 0.51111], 728: [0, 0.69444, 0.10806, 0, 0.51111], 729: [0, 0.66786, 0.11752, 0, 0.30667], 730: [0, 0.69444, 0, 0, 0.83129], 732: [0, 0.66786, 0.11585, 0, 0.51111], 733: [0, 0.69444, 0.1225, 0, 0.51111], 915: [0, 0.68333, 0.13305, 0, 0.62722], 916: [0, 0.68333, 0, 0, 0.81777], 920: [0, 0.68333, 0.09403, 0, 0.76666], 923: [0, 0.68333, 0, 0, 0.69222], 926: [0, 0.68333, 0.15294, 0, 0.66444], 928: [0, 0.68333, 0.16389, 0, 0.74333], 931: [0, 0.68333, 0.12028, 0, 0.71555], 933: [0, 0.68333, 0.11111, 0, 0.76666], 934: [0, 0.68333, 0.05986, 0, 0.71555], 936: [0, 0.68333, 0.11111, 0, 0.76666], 937: [0, 0.68333, 0.10257, 0, 0.71555], 8211: [0, 0.43056, 0.09208, 0, 0.51111], 8212: [0, 0.43056, 0.09208, 0, 1.02222], 8216: [0, 0.69444, 0.12417, 0, 0.30667], 8217: [0, 0.69444, 0.12417, 0, 0.30667], 8220: [0, 0.69444, 0.1685, 0, 0.51444], 8221: [0, 0.69444, 0.06961, 0, 0.51444], 8463: [0, 0.68889, 0, 0, 0.54028] }, "Main-Regular": { 32: [0, 0, 0, 0, 0.25], 33: [0, 0.69444, 0, 0, 0.27778], 34: [0, 0.69444, 0, 0, 0.5], 35: [0.19444, 0.69444, 0, 0, 0.83334], 36: [0.05556, 0.75, 0, 0, 0.5], 37: [0.05556, 0.75, 0, 0, 0.83334], 38: [0, 0.69444, 0, 0, 0.77778], 39: [0, 0.69444, 0, 0, 0.27778], 40: [0.25, 0.75, 0, 0, 0.38889], 41: [0.25, 0.75, 0, 0, 0.38889], 42: [0, 0.75, 0, 0, 0.5], 43: [0.08333, 0.58333, 0, 0, 0.77778], 44: [0.19444, 0.10556, 0, 0, 0.27778], 45: [0, 0.43056, 0, 0, 0.33333], 46: [0, 0.10556, 0, 0, 0.27778], 47: [0.25, 0.75, 0, 0, 0.5], 48: [0, 0.64444, 0, 0, 0.5], 49: [0, 0.64444, 0, 0, 0.5], 50: [0, 0.64444, 0, 0, 0.5], 51: [0, 0.64444, 0, 0, 0.5], 52: [0, 0.64444, 0, 0, 0.5], 53: [0, 0.64444, 0, 0, 0.5], 54: [0, 0.64444, 0, 0, 0.5], 55: [0, 0.64444, 0, 0, 0.5], 56: [0, 0.64444, 0, 0, 0.5], 57: [0, 0.64444, 0, 0, 0.5], 58: [0, 0.43056, 0, 0, 0.27778], 59: [0.19444, 0.43056, 0, 0, 0.27778], 60: [0.0391, 0.5391, 0, 0, 0.77778], 61: [-0.13313, 0.36687, 0, 0, 0.77778], 62: [0.0391, 0.5391, 0, 0, 0.77778], 63: [0, 0.69444, 0, 0, 0.47222], 64: [0, 0.69444, 0, 0, 0.77778], 65: [0, 0.68333, 0, 0, 0.75], 66: [0, 0.68333, 0, 0, 0.70834], 67: [0, 0.68333, 0, 0, 0.72222], 68: [0, 0.68333, 0, 0, 0.76389], 69: [0, 0.68333, 0, 0, 0.68056], 70: [0, 0.68333, 0, 0, 0.65278], 71: [0, 0.68333, 0, 0, 0.78472], 72: [0, 0.68333, 0, 0, 0.75], 73: [0, 0.68333, 0, 0, 0.36111], 74: [0, 0.68333, 0, 0, 0.51389], 75: [0, 0.68333, 0, 0, 0.77778], 76: [0, 0.68333, 0, 0, 0.625], 77: [0, 0.68333, 0, 0, 0.91667], 78: [0, 0.68333, 0, 0, 0.75], 79: [0, 0.68333, 0, 0, 0.77778], 80: [0, 0.68333, 0, 0, 0.68056], 81: [0.19444, 0.68333, 0, 0, 0.77778], 82: [0, 0.68333, 0, 0, 0.73611], 83: [0, 0.68333, 0, 0, 0.55556], 84: [0, 0.68333, 0, 0, 0.72222], 85: [0, 0.68333, 0, 0, 0.75], 86: [0, 0.68333, 0.01389, 0, 0.75], 87: [0, 0.68333, 0.01389, 0, 1.02778], 88: [0, 0.68333, 0, 0, 0.75], 89: [0, 0.68333, 0.025, 0, 0.75], 90: [0, 0.68333, 0, 0, 0.61111], 91: [0.25, 0.75, 0, 0, 0.27778], 92: [0.25, 0.75, 0, 0, 0.5], 93: [0.25, 0.75, 0, 0, 0.27778], 94: [0, 0.69444, 0, 0, 0.5], 95: [0.31, 0.12056, 0.02778, 0, 0.5], 97: [0, 0.43056, 0, 0, 0.5], 98: [0, 0.69444, 0, 0, 0.55556], 99: [0, 0.43056, 0, 0, 0.44445], 100: [0, 0.69444, 0, 0, 0.55556], 101: [0, 0.43056, 0, 0, 0.44445], 102: [0, 0.69444, 0.07778, 0, 0.30556], 103: [0.19444, 0.43056, 0.01389, 0, 0.5], 104: [0, 0.69444, 0, 0, 0.55556], 105: [0, 0.66786, 0, 0, 0.27778], 106: [0.19444, 0.66786, 0, 0, 0.30556], 107: [0, 0.69444, 0, 0, 0.52778], 108: [0, 0.69444, 0, 0, 0.27778], 109: [0, 0.43056, 0, 0, 0.83334], 110: [0, 0.43056, 0, 0, 0.55556], 111: [0, 0.43056, 0, 0, 0.5], 112: [0.19444, 0.43056, 0, 0, 0.55556], 113: [0.19444, 0.43056, 0, 0, 0.52778], 114: [0, 0.43056, 0, 0, 0.39167], 115: [0, 0.43056, 0, 0, 0.39445], 116: [0, 0.61508, 0, 0, 0.38889], 117: [0, 0.43056, 0, 0, 0.55556], 118: [0, 0.43056, 0.01389, 0, 0.52778], 119: [0, 0.43056, 0.01389, 0, 0.72222], 120: [0, 0.43056, 0, 0, 0.52778], 121: [0.19444, 0.43056, 0.01389, 0, 0.52778], 122: [0, 0.43056, 0, 0, 0.44445], 123: [0.25, 0.75, 0, 0, 0.5], 124: [0.25, 0.75, 0, 0, 0.27778], 125: [0.25, 0.75, 0, 0, 0.5], 126: [0.35, 0.31786, 0, 0, 0.5], 160: [0, 0, 0, 0, 0.25], 163: [0, 0.69444, 0, 0, 0.76909], 167: [0.19444, 0.69444, 0, 0, 0.44445], 168: [0, 0.66786, 0, 0, 0.5], 172: [0, 0.43056, 0, 0, 0.66667], 176: [0, 0.69444, 0, 0, 0.75], 177: [0.08333, 0.58333, 0, 0, 0.77778], 182: [0.19444, 0.69444, 0, 0, 0.61111], 184: [0.17014, 0, 0, 0, 0.44445], 198: [0, 0.68333, 0, 0, 0.90278], 215: [0.08333, 0.58333, 0, 0, 0.77778], 216: [0.04861, 0.73194, 0, 0, 0.77778], 223: [0, 0.69444, 0, 0, 0.5], 230: [0, 0.43056, 0, 0, 0.72222], 247: [0.08333, 0.58333, 0, 0, 0.77778], 248: [0.09722, 0.52778, 0, 0, 0.5], 305: [0, 0.43056, 0, 0, 0.27778], 338: [0, 0.68333, 0, 0, 1.01389], 339: [0, 0.43056, 0, 0, 0.77778], 567: [0.19444, 0.43056, 0, 0, 0.30556], 710: [0, 0.69444, 0, 0, 0.5], 711: [0, 0.62847, 0, 0, 0.5], 713: [0, 0.56778, 0, 0, 0.5], 714: [0, 0.69444, 0, 0, 0.5], 715: [0, 0.69444, 0, 0, 0.5], 728: [0, 0.69444, 0, 0, 0.5], 729: [0, 0.66786, 0, 0, 0.27778], 730: [0, 0.69444, 0, 0, 0.75], 732: [0, 0.66786, 0, 0, 0.5], 733: [0, 0.69444, 0, 0, 0.5], 915: [0, 0.68333, 0, 0, 0.625], 916: [0, 0.68333, 0, 0, 0.83334], 920: [0, 0.68333, 0, 0, 0.77778], 923: [0, 0.68333, 0, 0, 0.69445], 926: [0, 0.68333, 0, 0, 0.66667], 928: [0, 0.68333, 0, 0, 0.75], 931: [0, 0.68333, 0, 0, 0.72222], 933: [0, 0.68333, 0, 0, 0.77778], 934: [0, 0.68333, 0, 0, 0.72222], 936: [0, 0.68333, 0, 0, 0.77778], 937: [0, 0.68333, 0, 0, 0.72222], 8211: [0, 0.43056, 0.02778, 0, 0.5], 8212: [0, 0.43056, 0.02778, 0, 1], 8216: [0, 0.69444, 0, 0, 0.27778], 8217: [0, 0.69444, 0, 0, 0.27778], 8220: [0, 0.69444, 0, 0, 0.5], 8221: [0, 0.69444, 0, 0, 0.5], 8224: [0.19444, 0.69444, 0, 0, 0.44445], 8225: [0.19444, 0.69444, 0, 0, 0.44445], 8230: [0, 0.123, 0, 0, 1.172], 8242: [0, 0.55556, 0, 0, 0.275], 8407: [0, 0.71444, 0.15382, 0, 0.5], 8463: [0, 0.68889, 0, 0, 0.54028], 8465: [0, 0.69444, 0, 0, 0.72222], 8467: [0, 0.69444, 0, 0.11111, 0.41667], 8472: [0.19444, 0.43056, 0, 0.11111, 0.63646], 8476: [0, 0.69444, 0, 0, 0.72222], 8501: [0, 0.69444, 0, 0, 0.61111], 8592: [-0.13313, 0.36687, 0, 0, 1], 8593: [0.19444, 0.69444, 0, 0, 0.5], 8594: [-0.13313, 0.36687, 0, 0, 1], 8595: [0.19444, 0.69444, 0, 0, 0.5], 8596: [-0.13313, 0.36687, 0, 0, 1], 8597: [0.25, 0.75, 0, 0, 0.5], 8598: [0.19444, 0.69444, 0, 0, 1], 8599: [0.19444, 0.69444, 0, 0, 1], 8600: [0.19444, 0.69444, 0, 0, 1], 8601: [0.19444, 0.69444, 0, 0, 1], 8614: [0.011, 0.511, 0, 0, 1], 8617: [0.011, 0.511, 0, 0, 1.126], 8618: [0.011, 0.511, 0, 0, 1.126], 8636: [-0.13313, 0.36687, 0, 0, 1], 8637: [-0.13313, 0.36687, 0, 0, 1], 8640: [-0.13313, 0.36687, 0, 0, 1], 8641: [-0.13313, 0.36687, 0, 0, 1], 8652: [0.011, 0.671, 0, 0, 1], 8656: [-0.13313, 0.36687, 0, 0, 1], 8657: [0.19444, 0.69444, 0, 0, 0.61111], 8658: [-0.13313, 0.36687, 0, 0, 1], 8659: [0.19444, 0.69444, 0, 0, 0.61111], 8660: [-0.13313, 0.36687, 0, 0, 1], 8661: [0.25, 0.75, 0, 0, 0.61111], 8704: [0, 0.69444, 0, 0, 0.55556], 8706: [0, 0.69444, 0.05556, 0.08334, 0.5309], 8707: [0, 0.69444, 0, 0, 0.55556], 8709: [0.05556, 0.75, 0, 0, 0.5], 8711: [0, 0.68333, 0, 0, 0.83334], 8712: [0.0391, 0.5391, 0, 0, 0.66667], 8715: [0.0391, 0.5391, 0, 0, 0.66667], 8722: [0.08333, 0.58333, 0, 0, 0.77778], 8723: [0.08333, 0.58333, 0, 0, 0.77778], 8725: [0.25, 0.75, 0, 0, 0.5], 8726: [0.25, 0.75, 0, 0, 0.5], 8727: [-0.03472, 0.46528, 0, 0, 0.5], 8728: [-0.05555, 0.44445, 0, 0, 0.5], 8729: [-0.05555, 0.44445, 0, 0, 0.5], 8730: [0.2, 0.8, 0, 0, 0.83334], 8733: [0, 0.43056, 0, 0, 0.77778], 8734: [0, 0.43056, 0, 0, 1], 8736: [0, 0.69224, 0, 0, 0.72222], 8739: [0.25, 0.75, 0, 0, 0.27778], 8741: [0.25, 0.75, 0, 0, 0.5], 8743: [0, 0.55556, 0, 0, 0.66667], 8744: [0, 0.55556, 0, 0, 0.66667], 8745: [0, 0.55556, 0, 0, 0.66667], 8746: [0, 0.55556, 0, 0, 0.66667], 8747: [0.19444, 0.69444, 0.11111, 0, 0.41667], 8764: [-0.13313, 0.36687, 0, 0, 0.77778], 8768: [0.19444, 0.69444, 0, 0, 0.27778], 8771: [-0.03625, 0.46375, 0, 0, 0.77778], 8773: [-0.022, 0.589, 0, 0, 0.778], 8776: [-0.01688, 0.48312, 0, 0, 0.77778], 8781: [-0.03625, 0.46375, 0, 0, 0.77778], 8784: [-0.133, 0.673, 0, 0, 0.778], 8801: [-0.03625, 0.46375, 0, 0, 0.77778], 8804: [0.13597, 0.63597, 0, 0, 0.77778], 8805: [0.13597, 0.63597, 0, 0, 0.77778], 8810: [0.0391, 0.5391, 0, 0, 1], 8811: [0.0391, 0.5391, 0, 0, 1], 8826: [0.0391, 0.5391, 0, 0, 0.77778], 8827: [0.0391, 0.5391, 0, 0, 0.77778], 8834: [0.0391, 0.5391, 0, 0, 0.77778], 8835: [0.0391, 0.5391, 0, 0, 0.77778], 8838: [0.13597, 0.63597, 0, 0, 0.77778], 8839: [0.13597, 0.63597, 0, 0, 0.77778], 8846: [0, 0.55556, 0, 0, 0.66667], 8849: [0.13597, 0.63597, 0, 0, 0.77778], 8850: [0.13597, 0.63597, 0, 0, 0.77778], 8851: [0, 0.55556, 0, 0, 0.66667], 8852: [0, 0.55556, 0, 0, 0.66667], 8853: [0.08333, 0.58333, 0, 0, 0.77778], 8854: [0.08333, 0.58333, 0, 0, 0.77778], 8855: [0.08333, 0.58333, 0, 0, 0.77778], 8856: [0.08333, 0.58333, 0, 0, 0.77778], 8857: [0.08333, 0.58333, 0, 0, 0.77778], 8866: [0, 0.69444, 0, 0, 0.61111], 8867: [0, 0.69444, 0, 0, 0.61111], 8868: [0, 0.69444, 0, 0, 0.77778], 8869: [0, 0.69444, 0, 0, 0.77778], 8872: [0.249, 0.75, 0, 0, 0.867], 8900: [-0.05555, 0.44445, 0, 0, 0.5], 8901: [-0.05555, 0.44445, 0, 0, 0.27778], 8902: [-0.03472, 0.46528, 0, 0, 0.5], 8904: [5e-3, 0.505, 0, 0, 0.9], 8942: [0.03, 0.903, 0, 0, 0.278], 8943: [-0.19, 0.313, 0, 0, 1.172], 8945: [-0.1, 0.823, 0, 0, 1.282], 8968: [0.25, 0.75, 0, 0, 0.44445], 8969: [0.25, 0.75, 0, 0, 0.44445], 8970: [0.25, 0.75, 0, 0, 0.44445], 8971: [0.25, 0.75, 0, 0, 0.44445], 8994: [-0.14236, 0.35764, 0, 0, 1], 8995: [-0.14236, 0.35764, 0, 0, 1], 9136: [0.244, 0.744, 0, 0, 0.412], 9137: [0.244, 0.745, 0, 0, 0.412], 9651: [0.19444, 0.69444, 0, 0, 0.88889], 9657: [-0.03472, 0.46528, 0, 0, 0.5], 9661: [0.19444, 0.69444, 0, 0, 0.88889], 9667: [-0.03472, 0.46528, 0, 0, 0.5], 9711: [0.19444, 0.69444, 0, 0, 1], 9824: [0.12963, 0.69444, 0, 0, 0.77778], 9825: [0.12963, 0.69444, 0, 0, 0.77778], 9826: [0.12963, 0.69444, 0, 0, 0.77778], 9827: [0.12963, 0.69444, 0, 0, 0.77778], 9837: [0, 0.75, 0, 0, 0.38889], 9838: [0.19444, 0.69444, 0, 0, 0.38889], 9839: [0.19444, 0.69444, 0, 0, 0.38889], 10216: [0.25, 0.75, 0, 0, 0.38889], 10217: [0.25, 0.75, 0, 0, 0.38889], 10222: [0.244, 0.744, 0, 0, 0.412], 10223: [0.244, 0.745, 0, 0, 0.412], 10229: [0.011, 0.511, 0, 0, 1.609], 10230: [0.011, 0.511, 0, 0, 1.638], 10231: [0.011, 0.511, 0, 0, 1.859], 10232: [0.024, 0.525, 0, 0, 1.609], 10233: [0.024, 0.525, 0, 0, 1.638], 10234: [0.024, 0.525, 0, 0, 1.858], 10236: [0.011, 0.511, 0, 0, 1.638], 10815: [0, 0.68333, 0, 0, 0.75], 10927: [0.13597, 0.63597, 0, 0, 0.77778], 10928: [0.13597, 0.63597, 0, 0, 0.77778], 57376: [0.19444, 0.69444, 0, 0, 0] }, "Math-BoldItalic": { 32: [0, 0, 0, 0, 0.25], 48: [0, 0.44444, 0, 0, 0.575], 49: [0, 0.44444, 0, 0, 0.575], 50: [0, 0.44444, 0, 0, 0.575], 51: [0.19444, 0.44444, 0, 0, 0.575], 52: [0.19444, 0.44444, 0, 0, 0.575], 53: [0.19444, 0.44444, 0, 0, 0.575], 54: [0, 0.64444, 0, 0, 0.575], 55: [0.19444, 0.44444, 0, 0, 0.575], 56: [0, 0.64444, 0, 0, 0.575], 57: [0.19444, 0.44444, 0, 0, 0.575], 65: [0, 0.68611, 0, 0, 0.86944], 66: [0, 0.68611, 0.04835, 0, 0.8664], 67: [0, 0.68611, 0.06979, 0, 0.81694], 68: [0, 0.68611, 0.03194, 0, 0.93812], 69: [0, 0.68611, 0.05451, 0, 0.81007], 70: [0, 0.68611, 0.15972, 0, 0.68889], 71: [0, 0.68611, 0, 0, 0.88673], 72: [0, 0.68611, 0.08229, 0, 0.98229], 73: [0, 0.68611, 0.07778, 0, 0.51111], 74: [0, 0.68611, 0.10069, 0, 0.63125], 75: [0, 0.68611, 0.06979, 0, 0.97118], 76: [0, 0.68611, 0, 0, 0.75555], 77: [0, 0.68611, 0.11424, 0, 1.14201], 78: [0, 0.68611, 0.11424, 0, 0.95034], 79: [0, 0.68611, 0.03194, 0, 0.83666], 80: [0, 0.68611, 0.15972, 0, 0.72309], 81: [0.19444, 0.68611, 0, 0, 0.86861], 82: [0, 0.68611, 421e-5, 0, 0.87235], 83: [0, 0.68611, 0.05382, 0, 0.69271], 84: [0, 0.68611, 0.15972, 0, 0.63663], 85: [0, 0.68611, 0.11424, 0, 0.80027], 86: [0, 0.68611, 0.25555, 0, 0.67778], 87: [0, 0.68611, 0.15972, 0, 1.09305], 88: [0, 0.68611, 0.07778, 0, 0.94722], 89: [0, 0.68611, 0.25555, 0, 0.67458], 90: [0, 0.68611, 0.06979, 0, 0.77257], 97: [0, 0.44444, 0, 0, 0.63287], 98: [0, 0.69444, 0, 0, 0.52083], 99: [0, 0.44444, 0, 0, 0.51342], 100: [0, 0.69444, 0, 0, 0.60972], 101: [0, 0.44444, 0, 0, 0.55361], 102: [0.19444, 0.69444, 0.11042, 0, 0.56806], 103: [0.19444, 0.44444, 0.03704, 0, 0.5449], 104: [0, 0.69444, 0, 0, 0.66759], 105: [0, 0.69326, 0, 0, 0.4048], 106: [0.19444, 0.69326, 0.0622, 0, 0.47083], 107: [0, 0.69444, 0.01852, 0, 0.6037], 108: [0, 0.69444, 88e-4, 0, 0.34815], 109: [0, 0.44444, 0, 0, 1.0324], 110: [0, 0.44444, 0, 0, 0.71296], 111: [0, 0.44444, 0, 0, 0.58472], 112: [0.19444, 0.44444, 0, 0, 0.60092], 113: [0.19444, 0.44444, 0.03704, 0, 0.54213], 114: [0, 0.44444, 0.03194, 0, 0.5287], 115: [0, 0.44444, 0, 0, 0.53125], 116: [0, 0.63492, 0, 0, 0.41528], 117: [0, 0.44444, 0, 0, 0.68102], 118: [0, 0.44444, 0.03704, 0, 0.56666], 119: [0, 0.44444, 0.02778, 0, 0.83148], 120: [0, 0.44444, 0, 0, 0.65903], 121: [0.19444, 0.44444, 0.03704, 0, 0.59028], 122: [0, 0.44444, 0.04213, 0, 0.55509], 160: [0, 0, 0, 0, 0.25], 915: [0, 0.68611, 0.15972, 0, 0.65694], 916: [0, 0.68611, 0, 0, 0.95833], 920: [0, 0.68611, 0.03194, 0, 0.86722], 923: [0, 0.68611, 0, 0, 0.80555], 926: [0, 0.68611, 0.07458, 0, 0.84125], 928: [0, 0.68611, 0.08229, 0, 0.98229], 931: [0, 0.68611, 0.05451, 0, 0.88507], 933: [0, 0.68611, 0.15972, 0, 0.67083], 934: [0, 0.68611, 0, 0, 0.76666], 936: [0, 0.68611, 0.11653, 0, 0.71402], 937: [0, 0.68611, 0.04835, 0, 0.8789], 945: [0, 0.44444, 0, 0, 0.76064], 946: [0.19444, 0.69444, 0.03403, 0, 0.65972], 947: [0.19444, 0.44444, 0.06389, 0, 0.59003], 948: [0, 0.69444, 0.03819, 0, 0.52222], 949: [0, 0.44444, 0, 0, 0.52882], 950: [0.19444, 0.69444, 0.06215, 0, 0.50833], 951: [0.19444, 0.44444, 0.03704, 0, 0.6], 952: [0, 0.69444, 0.03194, 0, 0.5618], 953: [0, 0.44444, 0, 0, 0.41204], 954: [0, 0.44444, 0, 0, 0.66759], 955: [0, 0.69444, 0, 0, 0.67083], 956: [0.19444, 0.44444, 0, 0, 0.70787], 957: [0, 0.44444, 0.06898, 0, 0.57685], 958: [0.19444, 0.69444, 0.03021, 0, 0.50833], 959: [0, 0.44444, 0, 0, 0.58472], 960: [0, 0.44444, 0.03704, 0, 0.68241], 961: [0.19444, 0.44444, 0, 0, 0.6118], 962: [0.09722, 0.44444, 0.07917, 0, 0.42361], 963: [0, 0.44444, 0.03704, 0, 0.68588], 964: [0, 0.44444, 0.13472, 0, 0.52083], 965: [0, 0.44444, 0.03704, 0, 0.63055], 966: [0.19444, 0.44444, 0, 0, 0.74722], 967: [0.19444, 0.44444, 0, 0, 0.71805], 968: [0.19444, 0.69444, 0.03704, 0, 0.75833], 969: [0, 0.44444, 0.03704, 0, 0.71782], 977: [0, 0.69444, 0, 0, 0.69155], 981: [0.19444, 0.69444, 0, 0, 0.7125], 982: [0, 0.44444, 0.03194, 0, 0.975], 1009: [0.19444, 0.44444, 0, 0, 0.6118], 1013: [0, 0.44444, 0, 0, 0.48333], 57649: [0, 0.44444, 0, 0, 0.39352], 57911: [0.19444, 0.44444, 0, 0, 0.43889] }, "Math-Italic": { 32: [0, 0, 0, 0, 0.25], 48: [0, 0.43056, 0, 0, 0.5], 49: [0, 0.43056, 0, 0, 0.5], 50: [0, 0.43056, 0, 0, 0.5], 51: [0.19444, 0.43056, 0, 0, 0.5], 52: [0.19444, 0.43056, 0, 0, 0.5], 53: [0.19444, 0.43056, 0, 0, 0.5], 54: [0, 0.64444, 0, 0, 0.5], 55: [0.19444, 0.43056, 0, 0, 0.5], 56: [0, 0.64444, 0, 0, 0.5], 57: [0.19444, 0.43056, 0, 0, 0.5], 65: [0, 0.68333, 0, 0.13889, 0.75], 66: [0, 0.68333, 0.05017, 0.08334, 0.75851], 67: [0, 0.68333, 0.07153, 0.08334, 0.71472], 68: [0, 0.68333, 0.02778, 0.05556, 0.82792], 69: [0, 0.68333, 0.05764, 0.08334, 0.7382], 70: [0, 0.68333, 0.13889, 0.08334, 0.64306], 71: [0, 0.68333, 0, 0.08334, 0.78625], 72: [0, 0.68333, 0.08125, 0.05556, 0.83125], 73: [0, 0.68333, 0.07847, 0.11111, 0.43958], 74: [0, 0.68333, 0.09618, 0.16667, 0.55451], 75: [0, 0.68333, 0.07153, 0.05556, 0.84931], 76: [0, 0.68333, 0, 0.02778, 0.68056], 77: [0, 0.68333, 0.10903, 0.08334, 0.97014], 78: [0, 0.68333, 0.10903, 0.08334, 0.80347], 79: [0, 0.68333, 0.02778, 0.08334, 0.76278], 80: [0, 0.68333, 0.13889, 0.08334, 0.64201], 81: [0.19444, 0.68333, 0, 0.08334, 0.79056], 82: [0, 0.68333, 773e-5, 0.08334, 0.75929], 83: [0, 0.68333, 0.05764, 0.08334, 0.6132], 84: [0, 0.68333, 0.13889, 0.08334, 0.58438], 85: [0, 0.68333, 0.10903, 0.02778, 0.68278], 86: [0, 0.68333, 0.22222, 0, 0.58333], 87: [0, 0.68333, 0.13889, 0, 0.94445], 88: [0, 0.68333, 0.07847, 0.08334, 0.82847], 89: [0, 0.68333, 0.22222, 0, 0.58056], 90: [0, 0.68333, 0.07153, 0.08334, 0.68264], 97: [0, 0.43056, 0, 0, 0.52859], 98: [0, 0.69444, 0, 0, 0.42917], 99: [0, 0.43056, 0, 0.05556, 0.43276], 100: [0, 0.69444, 0, 0.16667, 0.52049], 101: [0, 0.43056, 0, 0.05556, 0.46563], 102: [0.19444, 0.69444, 0.10764, 0.16667, 0.48959], 103: [0.19444, 0.43056, 0.03588, 0.02778, 0.47697], 104: [0, 0.69444, 0, 0, 0.57616], 105: [0, 0.65952, 0, 0, 0.34451], 106: [0.19444, 0.65952, 0.05724, 0, 0.41181], 107: [0, 0.69444, 0.03148, 0, 0.5206], 108: [0, 0.69444, 0.01968, 0.08334, 0.29838], 109: [0, 0.43056, 0, 0, 0.87801], 110: [0, 0.43056, 0, 0, 0.60023], 111: [0, 0.43056, 0, 0.05556, 0.48472], 112: [0.19444, 0.43056, 0, 0.08334, 0.50313], 113: [0.19444, 0.43056, 0.03588, 0.08334, 0.44641], 114: [0, 0.43056, 0.02778, 0.05556, 0.45116], 115: [0, 0.43056, 0, 0.05556, 0.46875], 116: [0, 0.61508, 0, 0.08334, 0.36111], 117: [0, 0.43056, 0, 0.02778, 0.57246], 118: [0, 0.43056, 0.03588, 0.02778, 0.48472], 119: [0, 0.43056, 0.02691, 0.08334, 0.71592], 120: [0, 0.43056, 0, 0.02778, 0.57153], 121: [0.19444, 0.43056, 0.03588, 0.05556, 0.49028], 122: [0, 0.43056, 0.04398, 0.05556, 0.46505], 160: [0, 0, 0, 0, 0.25], 915: [0, 0.68333, 0.13889, 0.08334, 0.61528], 916: [0, 0.68333, 0, 0.16667, 0.83334], 920: [0, 0.68333, 0.02778, 0.08334, 0.76278], 923: [0, 0.68333, 0, 0.16667, 0.69445], 926: [0, 0.68333, 0.07569, 0.08334, 0.74236], 928: [0, 0.68333, 0.08125, 0.05556, 0.83125], 931: [0, 0.68333, 0.05764, 0.08334, 0.77986], 933: [0, 0.68333, 0.13889, 0.05556, 0.58333], 934: [0, 0.68333, 0, 0.08334, 0.66667], 936: [0, 0.68333, 0.11, 0.05556, 0.61222], 937: [0, 0.68333, 0.05017, 0.08334, 0.7724], 945: [0, 0.43056, 37e-4, 0.02778, 0.6397], 946: [0.19444, 0.69444, 0.05278, 0.08334, 0.56563], 947: [0.19444, 0.43056, 0.05556, 0, 0.51773], 948: [0, 0.69444, 0.03785, 0.05556, 0.44444], 949: [0, 0.43056, 0, 0.08334, 0.46632], 950: [0.19444, 0.69444, 0.07378, 0.08334, 0.4375], 951: [0.19444, 0.43056, 0.03588, 0.05556, 0.49653], 952: [0, 0.69444, 0.02778, 0.08334, 0.46944], 953: [0, 0.43056, 0, 0.05556, 0.35394], 954: [0, 0.43056, 0, 0, 0.57616], 955: [0, 0.69444, 0, 0, 0.58334], 956: [0.19444, 0.43056, 0, 0.02778, 0.60255], 957: [0, 0.43056, 0.06366, 0.02778, 0.49398], 958: [0.19444, 0.69444, 0.04601, 0.11111, 0.4375], 959: [0, 0.43056, 0, 0.05556, 0.48472], 960: [0, 0.43056, 0.03588, 0, 0.57003], 961: [0.19444, 0.43056, 0, 0.08334, 0.51702], 962: [0.09722, 0.43056, 0.07986, 0.08334, 0.36285], 963: [0, 0.43056, 0.03588, 0, 0.57141], 964: [0, 0.43056, 0.1132, 0.02778, 0.43715], 965: [0, 0.43056, 0.03588, 0.02778, 0.54028], 966: [0.19444, 0.43056, 0, 0.08334, 0.65417], 967: [0.19444, 0.43056, 0, 0.05556, 0.62569], 968: [0.19444, 0.69444, 0.03588, 0.11111, 0.65139], 969: [0, 0.43056, 0.03588, 0, 0.62245], 977: [0, 0.69444, 0, 0.08334, 0.59144], 981: [0.19444, 0.69444, 0, 0.08334, 0.59583], 982: [0, 0.43056, 0.02778, 0, 0.82813], 1009: [0.19444, 0.43056, 0, 0.08334, 0.51702], 1013: [0, 0.43056, 0, 0.05556, 0.4059], 57649: [0, 0.43056, 0, 0.02778, 0.32246], 57911: [0.19444, 0.43056, 0, 0.08334, 0.38403] }, "SansSerif-Bold": { 32: [0, 0, 0, 0, 0.25], 33: [0, 0.69444, 0, 0, 0.36667], 34: [0, 0.69444, 0, 0, 0.55834], 35: [0.19444, 0.69444, 0, 0, 0.91667], 36: [0.05556, 0.75, 0, 0, 0.55], 37: [0.05556, 0.75, 0, 0, 1.02912], 38: [0, 0.69444, 0, 0, 0.83056], 39: [0, 0.69444, 0, 0, 0.30556], 40: [0.25, 0.75, 0, 0, 0.42778], 41: [0.25, 0.75, 0, 0, 0.42778], 42: [0, 0.75, 0, 0, 0.55], 43: [0.11667, 0.61667, 0, 0, 0.85556], 44: [0.10556, 0.13056, 0, 0, 0.30556], 45: [0, 0.45833, 0, 0, 0.36667], 46: [0, 0.13056, 0, 0, 0.30556], 47: [0.25, 0.75, 0, 0, 0.55], 48: [0, 0.69444, 0, 0, 0.55], 49: [0, 0.69444, 0, 0, 0.55], 50: [0, 0.69444, 0, 0, 0.55], 51: [0, 0.69444, 0, 0, 0.55], 52: [0, 0.69444, 0, 0, 0.55], 53: [0, 0.69444, 0, 0, 0.55], 54: [0, 0.69444, 0, 0, 0.55], 55: [0, 0.69444, 0, 0, 0.55], 56: [0, 0.69444, 0, 0, 0.55], 57: [0, 0.69444, 0, 0, 0.55], 58: [0, 0.45833, 0, 0, 0.30556], 59: [0.10556, 0.45833, 0, 0, 0.30556], 61: [-0.09375, 0.40625, 0, 0, 0.85556], 63: [0, 0.69444, 0, 0, 0.51945], 64: [0, 0.69444, 0, 0, 0.73334], 65: [0, 0.69444, 0, 0, 0.73334], 66: [0, 0.69444, 0, 0, 0.73334], 67: [0, 0.69444, 0, 0, 0.70278], 68: [0, 0.69444, 0, 0, 0.79445], 69: [0, 0.69444, 0, 0, 0.64167], 70: [0, 0.69444, 0, 0, 0.61111], 71: [0, 0.69444, 0, 0, 0.73334], 72: [0, 0.69444, 0, 0, 0.79445], 73: [0, 0.69444, 0, 0, 0.33056], 74: [0, 0.69444, 0, 0, 0.51945], 75: [0, 0.69444, 0, 0, 0.76389], 76: [0, 0.69444, 0, 0, 0.58056], 77: [0, 0.69444, 0, 0, 0.97778], 78: [0, 0.69444, 0, 0, 0.79445], 79: [0, 0.69444, 0, 0, 0.79445], 80: [0, 0.69444, 0, 0, 0.70278], 81: [0.10556, 0.69444, 0, 0, 0.79445], 82: [0, 0.69444, 0, 0, 0.70278], 83: [0, 0.69444, 0, 0, 0.61111], 84: [0, 0.69444, 0, 0, 0.73334], 85: [0, 0.69444, 0, 0, 0.76389], 86: [0, 0.69444, 0.01528, 0, 0.73334], 87: [0, 0.69444, 0.01528, 0, 1.03889], 88: [0, 0.69444, 0, 0, 0.73334], 89: [0, 0.69444, 0.0275, 0, 0.73334], 90: [0, 0.69444, 0, 0, 0.67223], 91: [0.25, 0.75, 0, 0, 0.34306], 93: [0.25, 0.75, 0, 0, 0.34306], 94: [0, 0.69444, 0, 0, 0.55], 95: [0.35, 0.10833, 0.03056, 0, 0.55], 97: [0, 0.45833, 0, 0, 0.525], 98: [0, 0.69444, 0, 0, 0.56111], 99: [0, 0.45833, 0, 0, 0.48889], 100: [0, 0.69444, 0, 0, 0.56111], 101: [0, 0.45833, 0, 0, 0.51111], 102: [0, 0.69444, 0.07639, 0, 0.33611], 103: [0.19444, 0.45833, 0.01528, 0, 0.55], 104: [0, 0.69444, 0, 0, 0.56111], 105: [0, 0.69444, 0, 0, 0.25556], 106: [0.19444, 0.69444, 0, 0, 0.28611], 107: [0, 0.69444, 0, 0, 0.53056], 108: [0, 0.69444, 0, 0, 0.25556], 109: [0, 0.45833, 0, 0, 0.86667], 110: [0, 0.45833, 0, 0, 0.56111], 111: [0, 0.45833, 0, 0, 0.55], 112: [0.19444, 0.45833, 0, 0, 0.56111], 113: [0.19444, 0.45833, 0, 0, 0.56111], 114: [0, 0.45833, 0.01528, 0, 0.37222], 115: [0, 0.45833, 0, 0, 0.42167], 116: [0, 0.58929, 0, 0, 0.40417], 117: [0, 0.45833, 0, 0, 0.56111], 118: [0, 0.45833, 0.01528, 0, 0.5], 119: [0, 0.45833, 0.01528, 0, 0.74445], 120: [0, 0.45833, 0, 0, 0.5], 121: [0.19444, 0.45833, 0.01528, 0, 0.5], 122: [0, 0.45833, 0, 0, 0.47639], 126: [0.35, 0.34444, 0, 0, 0.55], 160: [0, 0, 0, 0, 0.25], 168: [0, 0.69444, 0, 0, 0.55], 176: [0, 0.69444, 0, 0, 0.73334], 180: [0, 0.69444, 0, 0, 0.55], 184: [0.17014, 0, 0, 0, 0.48889], 305: [0, 0.45833, 0, 0, 0.25556], 567: [0.19444, 0.45833, 0, 0, 0.28611], 710: [0, 0.69444, 0, 0, 0.55], 711: [0, 0.63542, 0, 0, 0.55], 713: [0, 0.63778, 0, 0, 0.55], 728: [0, 0.69444, 0, 0, 0.55], 729: [0, 0.69444, 0, 0, 0.30556], 730: [0, 0.69444, 0, 0, 0.73334], 732: [0, 0.69444, 0, 0, 0.55], 733: [0, 0.69444, 0, 0, 0.55], 915: [0, 0.69444, 0, 0, 0.58056], 916: [0, 0.69444, 0, 0, 0.91667], 920: [0, 0.69444, 0, 0, 0.85556], 923: [0, 0.69444, 0, 0, 0.67223], 926: [0, 0.69444, 0, 0, 0.73334], 928: [0, 0.69444, 0, 0, 0.79445], 931: [0, 0.69444, 0, 0, 0.79445], 933: [0, 0.69444, 0, 0, 0.85556], 934: [0, 0.69444, 0, 0, 0.79445], 936: [0, 0.69444, 0, 0, 0.85556], 937: [0, 0.69444, 0, 0, 0.79445], 8211: [0, 0.45833, 0.03056, 0, 0.55], 8212: [0, 0.45833, 0.03056, 0, 1.10001], 8216: [0, 0.69444, 0, 0, 0.30556], 8217: [0, 0.69444, 0, 0, 0.30556], 8220: [0, 0.69444, 0, 0, 0.55834], 8221: [0, 0.69444, 0, 0, 0.55834] }, "SansSerif-Italic": { 32: [0, 0, 0, 0, 0.25], 33: [0, 0.69444, 0.05733, 0, 0.31945], 34: [0, 0.69444, 316e-5, 0, 0.5], 35: [0.19444, 0.69444, 0.05087, 0, 0.83334], 36: [0.05556, 0.75, 0.11156, 0, 0.5], 37: [0.05556, 0.75, 0.03126, 0, 0.83334], 38: [0, 0.69444, 0.03058, 0, 0.75834], 39: [0, 0.69444, 0.07816, 0, 0.27778], 40: [0.25, 0.75, 0.13164, 0, 0.38889], 41: [0.25, 0.75, 0.02536, 0, 0.38889], 42: [0, 0.75, 0.11775, 0, 0.5], 43: [0.08333, 0.58333, 0.02536, 0, 0.77778], 44: [0.125, 0.08333, 0, 0, 0.27778], 45: [0, 0.44444, 0.01946, 0, 0.33333], 46: [0, 0.08333, 0, 0, 0.27778], 47: [0.25, 0.75, 0.13164, 0, 0.5], 48: [0, 0.65556, 0.11156, 0, 0.5], 49: [0, 0.65556, 0.11156, 0, 0.5], 50: [0, 0.65556, 0.11156, 0, 0.5], 51: [0, 0.65556, 0.11156, 0, 0.5], 52: [0, 0.65556, 0.11156, 0, 0.5], 53: [0, 0.65556, 0.11156, 0, 0.5], 54: [0, 0.65556, 0.11156, 0, 0.5], 55: [0, 0.65556, 0.11156, 0, 0.5], 56: [0, 0.65556, 0.11156, 0, 0.5], 57: [0, 0.65556, 0.11156, 0, 0.5], 58: [0, 0.44444, 0.02502, 0, 0.27778], 59: [0.125, 0.44444, 0.02502, 0, 0.27778], 61: [-0.13, 0.37, 0.05087, 0, 0.77778], 63: [0, 0.69444, 0.11809, 0, 0.47222], 64: [0, 0.69444, 0.07555, 0, 0.66667], 65: [0, 0.69444, 0, 0, 0.66667], 66: [0, 0.69444, 0.08293, 0, 0.66667], 67: [0, 0.69444, 0.11983, 0, 0.63889], 68: [0, 0.69444, 0.07555, 0, 0.72223], 69: [0, 0.69444, 0.11983, 0, 0.59722], 70: [0, 0.69444, 0.13372, 0, 0.56945], 71: [0, 0.69444, 0.11983, 0, 0.66667], 72: [0, 0.69444, 0.08094, 0, 0.70834], 73: [0, 0.69444, 0.13372, 0, 0.27778], 74: [0, 0.69444, 0.08094, 0, 0.47222], 75: [0, 0.69444, 0.11983, 0, 0.69445], 76: [0, 0.69444, 0, 0, 0.54167], 77: [0, 0.69444, 0.08094, 0, 0.875], 78: [0, 0.69444, 0.08094, 0, 0.70834], 79: [0, 0.69444, 0.07555, 0, 0.73611], 80: [0, 0.69444, 0.08293, 0, 0.63889], 81: [0.125, 0.69444, 0.07555, 0, 0.73611], 82: [0, 0.69444, 0.08293, 0, 0.64584], 83: [0, 0.69444, 0.09205, 0, 0.55556], 84: [0, 0.69444, 0.13372, 0, 0.68056], 85: [0, 0.69444, 0.08094, 0, 0.6875], 86: [0, 0.69444, 0.1615, 0, 0.66667], 87: [0, 0.69444, 0.1615, 0, 0.94445], 88: [0, 0.69444, 0.13372, 0, 0.66667], 89: [0, 0.69444, 0.17261, 0, 0.66667], 90: [0, 0.69444, 0.11983, 0, 0.61111], 91: [0.25, 0.75, 0.15942, 0, 0.28889], 93: [0.25, 0.75, 0.08719, 0, 0.28889], 94: [0, 0.69444, 0.0799, 0, 0.5], 95: [0.35, 0.09444, 0.08616, 0, 0.5], 97: [0, 0.44444, 981e-5, 0, 0.48056], 98: [0, 0.69444, 0.03057, 0, 0.51667], 99: [0, 0.44444, 0.08336, 0, 0.44445], 100: [0, 0.69444, 0.09483, 0, 0.51667], 101: [0, 0.44444, 0.06778, 0, 0.44445], 102: [0, 0.69444, 0.21705, 0, 0.30556], 103: [0.19444, 0.44444, 0.10836, 0, 0.5], 104: [0, 0.69444, 0.01778, 0, 0.51667], 105: [0, 0.67937, 0.09718, 0, 0.23889], 106: [0.19444, 0.67937, 0.09162, 0, 0.26667], 107: [0, 0.69444, 0.08336, 0, 0.48889], 108: [0, 0.69444, 0.09483, 0, 0.23889], 109: [0, 0.44444, 0.01778, 0, 0.79445], 110: [0, 0.44444, 0.01778, 0, 0.51667], 111: [0, 0.44444, 0.06613, 0, 0.5], 112: [0.19444, 0.44444, 0.0389, 0, 0.51667], 113: [0.19444, 0.44444, 0.04169, 0, 0.51667], 114: [0, 0.44444, 0.10836, 0, 0.34167], 115: [0, 0.44444, 0.0778, 0, 0.38333], 116: [0, 0.57143, 0.07225, 0, 0.36111], 117: [0, 0.44444, 0.04169, 0, 0.51667], 118: [0, 0.44444, 0.10836, 0, 0.46111], 119: [0, 0.44444, 0.10836, 0, 0.68334], 120: [0, 0.44444, 0.09169, 0, 0.46111], 121: [0.19444, 0.44444, 0.10836, 0, 0.46111], 122: [0, 0.44444, 0.08752, 0, 0.43472], 126: [0.35, 0.32659, 0.08826, 0, 0.5], 160: [0, 0, 0, 0, 0.25], 168: [0, 0.67937, 0.06385, 0, 0.5], 176: [0, 0.69444, 0, 0, 0.73752], 184: [0.17014, 0, 0, 0, 0.44445], 305: [0, 0.44444, 0.04169, 0, 0.23889], 567: [0.19444, 0.44444, 0.04169, 0, 0.26667], 710: [0, 0.69444, 0.0799, 0, 0.5], 711: [0, 0.63194, 0.08432, 0, 0.5], 713: [0, 0.60889, 0.08776, 0, 0.5], 714: [0, 0.69444, 0.09205, 0, 0.5], 715: [0, 0.69444, 0, 0, 0.5], 728: [0, 0.69444, 0.09483, 0, 0.5], 729: [0, 0.67937, 0.07774, 0, 0.27778], 730: [0, 0.69444, 0, 0, 0.73752], 732: [0, 0.67659, 0.08826, 0, 0.5], 733: [0, 0.69444, 0.09205, 0, 0.5], 915: [0, 0.69444, 0.13372, 0, 0.54167], 916: [0, 0.69444, 0, 0, 0.83334], 920: [0, 0.69444, 0.07555, 0, 0.77778], 923: [0, 0.69444, 0, 0, 0.61111], 926: [0, 0.69444, 0.12816, 0, 0.66667], 928: [0, 0.69444, 0.08094, 0, 0.70834], 931: [0, 0.69444, 0.11983, 0, 0.72222], 933: [0, 0.69444, 0.09031, 0, 0.77778], 934: [0, 0.69444, 0.04603, 0, 0.72222], 936: [0, 0.69444, 0.09031, 0, 0.77778], 937: [0, 0.69444, 0.08293, 0, 0.72222], 8211: [0, 0.44444, 0.08616, 0, 0.5], 8212: [0, 0.44444, 0.08616, 0, 1], 8216: [0, 0.69444, 0.07816, 0, 0.27778], 8217: [0, 0.69444, 0.07816, 0, 0.27778], 8220: [0, 0.69444, 0.14205, 0, 0.5], 8221: [0, 0.69444, 316e-5, 0, 0.5] }, "SansSerif-Regular": { 32: [0, 0, 0, 0, 0.25], 33: [0, 0.69444, 0, 0, 0.31945], 34: [0, 0.69444, 0, 0, 0.5], 35: [0.19444, 0.69444, 0, 0, 0.83334], 36: [0.05556, 0.75, 0, 0, 0.5], 37: [0.05556, 0.75, 0, 0, 0.83334], 38: [0, 0.69444, 0, 0, 0.75834], 39: [0, 0.69444, 0, 0, 0.27778], 40: [0.25, 0.75, 0, 0, 0.38889], 41: [0.25, 0.75, 0, 0, 0.38889], 42: [0, 0.75, 0, 0, 0.5], 43: [0.08333, 0.58333, 0, 0, 0.77778], 44: [0.125, 0.08333, 0, 0, 0.27778], 45: [0, 0.44444, 0, 0, 0.33333], 46: [0, 0.08333, 0, 0, 0.27778], 47: [0.25, 0.75, 0, 0, 0.5], 48: [0, 0.65556, 0, 0, 0.5], 49: [0, 0.65556, 0, 0, 0.5], 50: [0, 0.65556, 0, 0, 0.5], 51: [0, 0.65556, 0, 0, 0.5], 52: [0, 0.65556, 0, 0, 0.5], 53: [0, 0.65556, 0, 0, 0.5], 54: [0, 0.65556, 0, 0, 0.5], 55: [0, 0.65556, 0, 0, 0.5], 56: [0, 0.65556, 0, 0, 0.5], 57: [0, 0.65556, 0, 0, 0.5], 58: [0, 0.44444, 0, 0, 0.27778], 59: [0.125, 0.44444, 0, 0, 0.27778], 61: [-0.13, 0.37, 0, 0, 0.77778], 63: [0, 0.69444, 0, 0, 0.47222], 64: [0, 0.69444, 0, 0, 0.66667], 65: [0, 0.69444, 0, 0, 0.66667], 66: [0, 0.69444, 0, 0, 0.66667], 67: [0, 0.69444, 0, 0, 0.63889], 68: [0, 0.69444, 0, 0, 0.72223], 69: [0, 0.69444, 0, 0, 0.59722], 70: [0, 0.69444, 0, 0, 0.56945], 71: [0, 0.69444, 0, 0, 0.66667], 72: [0, 0.69444, 0, 0, 0.70834], 73: [0, 0.69444, 0, 0, 0.27778], 74: [0, 0.69444, 0, 0, 0.47222], 75: [0, 0.69444, 0, 0, 0.69445], 76: [0, 0.69444, 0, 0, 0.54167], 77: [0, 0.69444, 0, 0, 0.875], 78: [0, 0.69444, 0, 0, 0.70834], 79: [0, 0.69444, 0, 0, 0.73611], 80: [0, 0.69444, 0, 0, 0.63889], 81: [0.125, 0.69444, 0, 0, 0.73611], 82: [0, 0.69444, 0, 0, 0.64584], 83: [0, 0.69444, 0, 0, 0.55556], 84: [0, 0.69444, 0, 0, 0.68056], 85: [0, 0.69444, 0, 0, 0.6875], 86: [0, 0.69444, 0.01389, 0, 0.66667], 87: [0, 0.69444, 0.01389, 0, 0.94445], 88: [0, 0.69444, 0, 0, 0.66667], 89: [0, 0.69444, 0.025, 0, 0.66667], 90: [0, 0.69444, 0, 0, 0.61111], 91: [0.25, 0.75, 0, 0, 0.28889], 93: [0.25, 0.75, 0, 0, 0.28889], 94: [0, 0.69444, 0, 0, 0.5], 95: [0.35, 0.09444, 0.02778, 0, 0.5], 97: [0, 0.44444, 0, 0, 0.48056], 98: [0, 0.69444, 0, 0, 0.51667], 99: [0, 0.44444, 0, 0, 0.44445], 100: [0, 0.69444, 0, 0, 0.51667], 101: [0, 0.44444, 0, 0, 0.44445], 102: [0, 0.69444, 0.06944, 0, 0.30556], 103: [0.19444, 0.44444, 0.01389, 0, 0.5], 104: [0, 0.69444, 0, 0, 0.51667], 105: [0, 0.67937, 0, 0, 0.23889], 106: [0.19444, 0.67937, 0, 0, 0.26667], 107: [0, 0.69444, 0, 0, 0.48889], 108: [0, 0.69444, 0, 0, 0.23889], 109: [0, 0.44444, 0, 0, 0.79445], 110: [0, 0.44444, 0, 0, 0.51667], 111: [0, 0.44444, 0, 0, 0.5], 112: [0.19444, 0.44444, 0, 0, 0.51667], 113: [0.19444, 0.44444, 0, 0, 0.51667], 114: [0, 0.44444, 0.01389, 0, 0.34167], 115: [0, 0.44444, 0, 0, 0.38333], 116: [0, 0.57143, 0, 0, 0.36111], 117: [0, 0.44444, 0, 0, 0.51667], 118: [0, 0.44444, 0.01389, 0, 0.46111], 119: [0, 0.44444, 0.01389, 0, 0.68334], 120: [0, 0.44444, 0, 0, 0.46111], 121: [0.19444, 0.44444, 0.01389, 0, 0.46111], 122: [0, 0.44444, 0, 0, 0.43472], 126: [0.35, 0.32659, 0, 0, 0.5], 160: [0, 0, 0, 0, 0.25], 168: [0, 0.67937, 0, 0, 0.5], 176: [0, 0.69444, 0, 0, 0.66667], 184: [0.17014, 0, 0, 0, 0.44445], 305: [0, 0.44444, 0, 0, 0.23889], 567: [0.19444, 0.44444, 0, 0, 0.26667], 710: [0, 0.69444, 0, 0, 0.5], 711: [0, 0.63194, 0, 0, 0.5], 713: [0, 0.60889, 0, 0, 0.5], 714: [0, 0.69444, 0, 0, 0.5], 715: [0, 0.69444, 0, 0, 0.5], 728: [0, 0.69444, 0, 0, 0.5], 729: [0, 0.67937, 0, 0, 0.27778], 730: [0, 0.69444, 0, 0, 0.66667], 732: [0, 0.67659, 0, 0, 0.5], 733: [0, 0.69444, 0, 0, 0.5], 915: [0, 0.69444, 0, 0, 0.54167], 916: [0, 0.69444, 0, 0, 0.83334], 920: [0, 0.69444, 0, 0, 0.77778], 923: [0, 0.69444, 0, 0, 0.61111], 926: [0, 0.69444, 0, 0, 0.66667], 928: [0, 0.69444, 0, 0, 0.70834], 931: [0, 0.69444, 0, 0, 0.72222], 933: [0, 0.69444, 0, 0, 0.77778], 934: [0, 0.69444, 0, 0, 0.72222], 936: [0, 0.69444, 0, 0, 0.77778], 937: [0, 0.69444, 0, 0, 0.72222], 8211: [0, 0.44444, 0.02778, 0, 0.5], 8212: [0, 0.44444, 0.02778, 0, 1], 8216: [0, 0.69444, 0, 0, 0.27778], 8217: [0, 0.69444, 0, 0, 0.27778], 8220: [0, 0.69444, 0, 0, 0.5], 8221: [0, 0.69444, 0, 0, 0.5] }, "Script-Regular": { 32: [0, 0, 0, 0, 0.25], 65: [0, 0.7, 0.22925, 0, 0.80253], 66: [0, 0.7, 0.04087, 0, 0.90757], 67: [0, 0.7, 0.1689, 0, 0.66619], 68: [0, 0.7, 0.09371, 0, 0.77443], 69: [0, 0.7, 0.18583, 0, 0.56162], 70: [0, 0.7, 0.13634, 0, 0.89544], 71: [0, 0.7, 0.17322, 0, 0.60961], 72: [0, 0.7, 0.29694, 0, 0.96919], 73: [0, 0.7, 0.19189, 0, 0.80907], 74: [0.27778, 0.7, 0.19189, 0, 1.05159], 75: [0, 0.7, 0.31259, 0, 0.91364], 76: [0, 0.7, 0.19189, 0, 0.87373], 77: [0, 0.7, 0.15981, 0, 1.08031], 78: [0, 0.7, 0.3525, 0, 0.9015], 79: [0, 0.7, 0.08078, 0, 0.73787], 80: [0, 0.7, 0.08078, 0, 1.01262], 81: [0, 0.7, 0.03305, 0, 0.88282], 82: [0, 0.7, 0.06259, 0, 0.85], 83: [0, 0.7, 0.19189, 0, 0.86767], 84: [0, 0.7, 0.29087, 0, 0.74697], 85: [0, 0.7, 0.25815, 0, 0.79996], 86: [0, 0.7, 0.27523, 0, 0.62204], 87: [0, 0.7, 0.27523, 0, 0.80532], 88: [0, 0.7, 0.26006, 0, 0.94445], 89: [0, 0.7, 0.2939, 0, 0.70961], 90: [0, 0.7, 0.24037, 0, 0.8212], 160: [0, 0, 0, 0, 0.25] }, "Size1-Regular": { 32: [0, 0, 0, 0, 0.25], 40: [0.35001, 0.85, 0, 0, 0.45834], 41: [0.35001, 0.85, 0, 0, 0.45834], 47: [0.35001, 0.85, 0, 0, 0.57778], 91: [0.35001, 0.85, 0, 0, 0.41667], 92: [0.35001, 0.85, 0, 0, 0.57778], 93: [0.35001, 0.85, 0, 0, 0.41667], 123: [0.35001, 0.85, 0, 0, 0.58334], 125: [0.35001, 0.85, 0, 0, 0.58334], 160: [0, 0, 0, 0, 0.25], 710: [0, 0.72222, 0, 0, 0.55556], 732: [0, 0.72222, 0, 0, 0.55556], 770: [0, 0.72222, 0, 0, 0.55556], 771: [0, 0.72222, 0, 0, 0.55556], 8214: [-99e-5, 0.601, 0, 0, 0.77778], 8593: [1e-5, 0.6, 0, 0, 0.66667], 8595: [1e-5, 0.6, 0, 0, 0.66667], 8657: [1e-5, 0.6, 0, 0, 0.77778], 8659: [1e-5, 0.6, 0, 0, 0.77778], 8719: [0.25001, 0.75, 0, 0, 0.94445], 8720: [0.25001, 0.75, 0, 0, 0.94445], 8721: [0.25001, 0.75, 0, 0, 1.05556], 8730: [0.35001, 0.85, 0, 0, 1], 8739: [-599e-5, 0.606, 0, 0, 0.33333], 8741: [-599e-5, 0.606, 0, 0, 0.55556], 8747: [0.30612, 0.805, 0.19445, 0, 0.47222], 8748: [0.306, 0.805, 0.19445, 0, 0.47222], 8749: [0.306, 0.805, 0.19445, 0, 0.47222], 8750: [0.30612, 0.805, 0.19445, 0, 0.47222], 8896: [0.25001, 0.75, 0, 0, 0.83334], 8897: [0.25001, 0.75, 0, 0, 0.83334], 8898: [0.25001, 0.75, 0, 0, 0.83334], 8899: [0.25001, 0.75, 0, 0, 0.83334], 8968: [0.35001, 0.85, 0, 0, 0.47222], 8969: [0.35001, 0.85, 0, 0, 0.47222], 8970: [0.35001, 0.85, 0, 0, 0.47222], 8971: [0.35001, 0.85, 0, 0, 0.47222], 9168: [-99e-5, 0.601, 0, 0, 0.66667], 10216: [0.35001, 0.85, 0, 0, 0.47222], 10217: [0.35001, 0.85, 0, 0, 0.47222], 10752: [0.25001, 0.75, 0, 0, 1.11111], 10753: [0.25001, 0.75, 0, 0, 1.11111], 10754: [0.25001, 0.75, 0, 0, 1.11111], 10756: [0.25001, 0.75, 0, 0, 0.83334], 10758: [0.25001, 0.75, 0, 0, 0.83334] }, "Size2-Regular": { 32: [0, 0, 0, 0, 0.25], 40: [0.65002, 1.15, 0, 0, 0.59722], 41: [0.65002, 1.15, 0, 0, 0.59722], 47: [0.65002, 1.15, 0, 0, 0.81111], 91: [0.65002, 1.15, 0, 0, 0.47222], 92: [0.65002, 1.15, 0, 0, 0.81111], 93: [0.65002, 1.15, 0, 0, 0.47222], 123: [0.65002, 1.15, 0, 0, 0.66667], 125: [0.65002, 1.15, 0, 0, 0.66667], 160: [0, 0, 0, 0, 0.25], 710: [0, 0.75, 0, 0, 1], 732: [0, 0.75, 0, 0, 1], 770: [0, 0.75, 0, 0, 1], 771: [0, 0.75, 0, 0, 1], 8719: [0.55001, 1.05, 0, 0, 1.27778], 8720: [0.55001, 1.05, 0, 0, 1.27778], 8721: [0.55001, 1.05, 0, 0, 1.44445], 8730: [0.65002, 1.15, 0, 0, 1], 8747: [0.86225, 1.36, 0.44445, 0, 0.55556], 8748: [0.862, 1.36, 0.44445, 0, 0.55556], 8749: [0.862, 1.36, 0.44445, 0, 0.55556], 8750: [0.86225, 1.36, 0.44445, 0, 0.55556], 8896: [0.55001, 1.05, 0, 0, 1.11111], 8897: [0.55001, 1.05, 0, 0, 1.11111], 8898: [0.55001, 1.05, 0, 0, 1.11111], 8899: [0.55001, 1.05, 0, 0, 1.11111], 8968: [0.65002, 1.15, 0, 0, 0.52778], 8969: [0.65002, 1.15, 0, 0, 0.52778], 8970: [0.65002, 1.15, 0, 0, 0.52778], 8971: [0.65002, 1.15, 0, 0, 0.52778], 10216: [0.65002, 1.15, 0, 0, 0.61111], 10217: [0.65002, 1.15, 0, 0, 0.61111], 10752: [0.55001, 1.05, 0, 0, 1.51112], 10753: [0.55001, 1.05, 0, 0, 1.51112], 10754: [0.55001, 1.05, 0, 0, 1.51112], 10756: [0.55001, 1.05, 0, 0, 1.11111], 10758: [0.55001, 1.05, 0, 0, 1.11111] }, "Size3-Regular": { 32: [0, 0, 0, 0, 0.25], 40: [0.95003, 1.45, 0, 0, 0.73611], 41: [0.95003, 1.45, 0, 0, 0.73611], 47: [0.95003, 1.45, 0, 0, 1.04445], 91: [0.95003, 1.45, 0, 0, 0.52778], 92: [0.95003, 1.45, 0, 0, 1.04445], 93: [0.95003, 1.45, 0, 0, 0.52778], 123: [0.95003, 1.45, 0, 0, 0.75], 125: [0.95003, 1.45, 0, 0, 0.75], 160: [0, 0, 0, 0, 0.25], 710: [0, 0.75, 0, 0, 1.44445], 732: [0, 0.75, 0, 0, 1.44445], 770: [0, 0.75, 0, 0, 1.44445], 771: [0, 0.75, 0, 0, 1.44445], 8730: [0.95003, 1.45, 0, 0, 1], 8968: [0.95003, 1.45, 0, 0, 0.58334], 8969: [0.95003, 1.45, 0, 0, 0.58334], 8970: [0.95003, 1.45, 0, 0, 0.58334], 8971: [0.95003, 1.45, 0, 0, 0.58334], 10216: [0.95003, 1.45, 0, 0, 0.75], 10217: [0.95003, 1.45, 0, 0, 0.75] }, "Size4-Regular": { 32: [0, 0, 0, 0, 0.25], 40: [1.25003, 1.75, 0, 0, 0.79167], 41: [1.25003, 1.75, 0, 0, 0.79167], 47: [1.25003, 1.75, 0, 0, 1.27778], 91: [1.25003, 1.75, 0, 0, 0.58334], 92: [1.25003, 1.75, 0, 0, 1.27778], 93: [1.25003, 1.75, 0, 0, 0.58334], 123: [1.25003, 1.75, 0, 0, 0.80556], 125: [1.25003, 1.75, 0, 0, 0.80556], 160: [0, 0, 0, 0, 0.25], 710: [0, 0.825, 0, 0, 1.8889], 732: [0, 0.825, 0, 0, 1.8889], 770: [0, 0.825, 0, 0, 1.8889], 771: [0, 0.825, 0, 0, 1.8889], 8730: [1.25003, 1.75, 0, 0, 1], 8968: [1.25003, 1.75, 0, 0, 0.63889], 8969: [1.25003, 1.75, 0, 0, 0.63889], 8970: [1.25003, 1.75, 0, 0, 0.63889], 8971: [1.25003, 1.75, 0, 0, 0.63889], 9115: [0.64502, 1.155, 0, 0, 0.875], 9116: [1e-5, 0.6, 0, 0, 0.875], 9117: [0.64502, 1.155, 0, 0, 0.875], 9118: [0.64502, 1.155, 0, 0, 0.875], 9119: [1e-5, 0.6, 0, 0, 0.875], 9120: [0.64502, 1.155, 0, 0, 0.875], 9121: [0.64502, 1.155, 0, 0, 0.66667], 9122: [-99e-5, 0.601, 0, 0, 0.66667], 9123: [0.64502, 1.155, 0, 0, 0.66667], 9124: [0.64502, 1.155, 0, 0, 0.66667], 9125: [-99e-5, 0.601, 0, 0, 0.66667], 9126: [0.64502, 1.155, 0, 0, 0.66667], 9127: [1e-5, 0.9, 0, 0, 0.88889], 9128: [0.65002, 1.15, 0, 0, 0.88889], 9129: [0.90001, 0, 0, 0, 0.88889], 9130: [0, 0.3, 0, 0, 0.88889], 9131: [1e-5, 0.9, 0, 0, 0.88889], 9132: [0.65002, 1.15, 0, 0, 0.88889], 9133: [0.90001, 0, 0, 0, 0.88889], 9143: [0.88502, 0.915, 0, 0, 1.05556], 10216: [1.25003, 1.75, 0, 0, 0.80556], 10217: [1.25003, 1.75, 0, 0, 0.80556], 57344: [-499e-5, 0.605, 0, 0, 1.05556], 57345: [-499e-5, 0.605, 0, 0, 1.05556], 57680: [0, 0.12, 0, 0, 0.45], 57681: [0, 0.12, 0, 0, 0.45], 57682: [0, 0.12, 0, 0, 0.45], 57683: [0, 0.12, 0, 0, 0.45] }, "Typewriter-Regular": { 32: [0, 0, 0, 0, 0.525], 33: [0, 0.61111, 0, 0, 0.525], 34: [0, 0.61111, 0, 0, 0.525], 35: [0, 0.61111, 0, 0, 0.525], 36: [0.08333, 0.69444, 0, 0, 0.525], 37: [0.08333, 0.69444, 0, 0, 0.525], 38: [0, 0.61111, 0, 0, 0.525], 39: [0, 0.61111, 0, 0, 0.525], 40: [0.08333, 0.69444, 0, 0, 0.525], 41: [0.08333, 0.69444, 0, 0, 0.525], 42: [0, 0.52083, 0, 0, 0.525], 43: [-0.08056, 0.53055, 0, 0, 0.525], 44: [0.13889, 0.125, 0, 0, 0.525], 45: [-0.08056, 0.53055, 0, 0, 0.525], 46: [0, 0.125, 0, 0, 0.525], 47: [0.08333, 0.69444, 0, 0, 0.525], 48: [0, 0.61111, 0, 0, 0.525], 49: [0, 0.61111, 0, 0, 0.525], 50: [0, 0.61111, 0, 0, 0.525], 51: [0, 0.61111, 0, 0, 0.525], 52: [0, 0.61111, 0, 0, 0.525], 53: [0, 0.61111, 0, 0, 0.525], 54: [0, 0.61111, 0, 0, 0.525], 55: [0, 0.61111, 0, 0, 0.525], 56: [0, 0.61111, 0, 0, 0.525], 57: [0, 0.61111, 0, 0, 0.525], 58: [0, 0.43056, 0, 0, 0.525], 59: [0.13889, 0.43056, 0, 0, 0.525], 60: [-0.05556, 0.55556, 0, 0, 0.525], 61: [-0.19549, 0.41562, 0, 0, 0.525], 62: [-0.05556, 0.55556, 0, 0, 0.525], 63: [0, 0.61111, 0, 0, 0.525], 64: [0, 0.61111, 0, 0, 0.525], 65: [0, 0.61111, 0, 0, 0.525], 66: [0, 0.61111, 0, 0, 0.525], 67: [0, 0.61111, 0, 0, 0.525], 68: [0, 0.61111, 0, 0, 0.525], 69: [0, 0.61111, 0, 0, 0.525], 70: [0, 0.61111, 0, 0, 0.525], 71: [0, 0.61111, 0, 0, 0.525], 72: [0, 0.61111, 0, 0, 0.525], 73: [0, 0.61111, 0, 0, 0.525], 74: [0, 0.61111, 0, 0, 0.525], 75: [0, 0.61111, 0, 0, 0.525], 76: [0, 0.61111, 0, 0, 0.525], 77: [0, 0.61111, 0, 0, 0.525], 78: [0, 0.61111, 0, 0, 0.525], 79: [0, 0.61111, 0, 0, 0.525], 80: [0, 0.61111, 0, 0, 0.525], 81: [0.13889, 0.61111, 0, 0, 0.525], 82: [0, 0.61111, 0, 0, 0.525], 83: [0, 0.61111, 0, 0, 0.525], 84: [0, 0.61111, 0, 0, 0.525], 85: [0, 0.61111, 0, 0, 0.525], 86: [0, 0.61111, 0, 0, 0.525], 87: [0, 0.61111, 0, 0, 0.525], 88: [0, 0.61111, 0, 0, 0.525], 89: [0, 0.61111, 0, 0, 0.525], 90: [0, 0.61111, 0, 0, 0.525], 91: [0.08333, 0.69444, 0, 0, 0.525], 92: [0.08333, 0.69444, 0, 0, 0.525], 93: [0.08333, 0.69444, 0, 0, 0.525], 94: [0, 0.61111, 0, 0, 0.525], 95: [0.09514, 0, 0, 0, 0.525], 96: [0, 0.61111, 0, 0, 0.525], 97: [0, 0.43056, 0, 0, 0.525], 98: [0, 0.61111, 0, 0, 0.525], 99: [0, 0.43056, 0, 0, 0.525], 100: [0, 0.61111, 0, 0, 0.525], 101: [0, 0.43056, 0, 0, 0.525], 102: [0, 0.61111, 0, 0, 0.525], 103: [0.22222, 0.43056, 0, 0, 0.525], 104: [0, 0.61111, 0, 0, 0.525], 105: [0, 0.61111, 0, 0, 0.525], 106: [0.22222, 0.61111, 0, 0, 0.525], 107: [0, 0.61111, 0, 0, 0.525], 108: [0, 0.61111, 0, 0, 0.525], 109: [0, 0.43056, 0, 0, 0.525], 110: [0, 0.43056, 0, 0, 0.525], 111: [0, 0.43056, 0, 0, 0.525], 112: [0.22222, 0.43056, 0, 0, 0.525], 113: [0.22222, 0.43056, 0, 0, 0.525], 114: [0, 0.43056, 0, 0, 0.525], 115: [0, 0.43056, 0, 0, 0.525], 116: [0, 0.55358, 0, 0, 0.525], 117: [0, 0.43056, 0, 0, 0.525], 118: [0, 0.43056, 0, 0, 0.525], 119: [0, 0.43056, 0, 0, 0.525], 120: [0, 0.43056, 0, 0, 0.525], 121: [0.22222, 0.43056, 0, 0, 0.525], 122: [0, 0.43056, 0, 0, 0.525], 123: [0.08333, 0.69444, 0, 0, 0.525], 124: [0.08333, 0.69444, 0, 0, 0.525], 125: [0.08333, 0.69444, 0, 0, 0.525], 126: [0, 0.61111, 0, 0, 0.525], 127: [0, 0.61111, 0, 0, 0.525], 160: [0, 0, 0, 0, 0.525], 176: [0, 0.61111, 0, 0, 0.525], 184: [0.19445, 0, 0, 0, 0.525], 305: [0, 0.43056, 0, 0, 0.525], 567: [0.22222, 0.43056, 0, 0, 0.525], 711: [0, 0.56597, 0, 0, 0.525], 713: [0, 0.56555, 0, 0, 0.525], 714: [0, 0.61111, 0, 0, 0.525], 715: [0, 0.61111, 0, 0, 0.525], 728: [0, 0.61111, 0, 0, 0.525], 730: [0, 0.61111, 0, 0, 0.525], 770: [0, 0.61111, 0, 0, 0.525], 771: [0, 0.61111, 0, 0, 0.525], 776: [0, 0.61111, 0, 0, 0.525], 915: [0, 0.61111, 0, 0, 0.525], 916: [0, 0.61111, 0, 0, 0.525], 920: [0, 0.61111, 0, 0, 0.525], 923: [0, 0.61111, 0, 0, 0.525], 926: [0, 0.61111, 0, 0, 0.525], 928: [0, 0.61111, 0, 0, 0.525], 931: [0, 0.61111, 0, 0, 0.525], 933: [0, 0.61111, 0, 0, 0.525], 934: [0, 0.61111, 0, 0, 0.525], 936: [0, 0.61111, 0, 0, 0.525], 937: [0, 0.61111, 0, 0, 0.525], 8216: [0, 0.61111, 0, 0, 0.525], 8217: [0, 0.61111, 0, 0, 0.525], 8242: [0, 0.61111, 0, 0, 0.525], 9251: [0.11111, 0.21944, 0, 0, 0.525] } }, h0 = { slant: [0.25, 0.25, 0.25], space: [0, 0, 0], stretch: [0, 0, 0], shrink: [0, 0, 0], xHeight: [0.431, 0.431, 0.431], quad: [1, 1.171, 1.472], extraSpace: [0, 0, 0], num1: [0.677, 0.732, 0.925], num2: [0.394, 0.384, 0.387], num3: [0.444, 0.471, 0.504], denom1: [0.686, 0.752, 1.025], denom2: [0.345, 0.344, 0.532], sup1: [0.413, 0.503, 0.504], sup2: [0.363, 0.431, 0.404], sup3: [0.289, 0.286, 0.294], sub1: [0.15, 0.143, 0.2], sub2: [0.247, 0.286, 0.4], supDrop: [0.386, 0.353, 0.494], subDrop: [0.05, 0.071, 0.1], delim1: [2.39, 1.7, 1.98], delim2: [1.01, 1.157, 1.42], axisHeight: [0.25, 0.25, 0.25], defaultRuleThickness: [0.04, 0.049, 0.049], bigOpSpacing1: [0.111, 0.111, 0.111], bigOpSpacing2: [0.166, 0.166, 0.166], bigOpSpacing3: [0.2, 0.2, 0.2], bigOpSpacing4: [0.6, 0.611, 0.611], bigOpSpacing5: [0.1, 0.143, 0.143], sqrtRuleThickness: [0.04, 0.04, 0.04], ptPerEm: [10, 10, 10], doubleRuleSep: [0.2, 0.2, 0.2], arrayRuleWidth: [0.04, 0.04, 0.04], fboxsep: [0.3, 0.3, 0.3], fboxrule: [0.04, 0.04, 0.04] }, H0 = { \u00C5: "A", \u00D0: "D", \u00DE: "o", \u00E5: "a", \u00F0: "d", \u00FE: "o", \u0410: "A", \u0411: "B", \u0412: "B", \u0413: "F", \u0414: "A", \u0415: "E", \u0416: "K", \u0417: "3", \u0418: "N", \u0419: "N", \u041A: "K", \u041B: "N", \u041C: "M", \u041D: "H", \u041E: "O", \u041F: "N", \u0420: "P", \u0421: "C", \u0422: "T", \u0423: "y", \u0424: "O", \u0425: "X", \u0426: "U", \u0427: "h", \u0428: "W", \u0429: "W", \u042A: "B", \u042B: "X", \u042C: "B", \u042D: "3", \u042E: "X", \u042F: "R", \u0430: "a", \u0431: "b", \u0432: "a", \u0433: "r", \u0434: "y", \u0435: "e", \u0436: "m", \u0437: "e", \u0438: "n", \u0439: "n", \u043A: "n", \u043B: "n", \u043C: "m", \u043D: "n", \u043E: "o", \u043F: "n", \u0440: "p", \u0441: "c", \u0442: "o", \u0443: "y", \u0444: "b", \u0445: "x", \u0446: "n", \u0447: "n", \u0448: "w", \u0449: "w", \u044A: "a", \u044B: "m", \u044C: "a", \u044D: "e", \u044E: "m", \u044F: "r" };
      function Dr(h, e) {
        pt[h] = e;
      }
      function y0(h, e, t) {
        if (!pt[e])
          throw new Error("Font metrics not found for font: " + e + ".");
        var r = h.charCodeAt(0), i = pt[e][r];
        if (!i && h[0] in H0 && (r = H0[h[0]].charCodeAt(0), i = pt[e][r]), !i && t === "text" && Ze(r) && (i = pt[e][77]), i)
          return { depth: i[0], height: i[1], italic: i[2], skew: i[3], width: i[4] };
      }
      var w0 = {};
      function Fr(h) {
        var e;
        if (h >= 5 ? e = 0 : h >= 3 ? e = 1 : e = 2, !w0[e]) {
          var t = w0[e] = { cssEmPerMu: h0.quad[e] / 18 };
          for (var r in h0)
            h0.hasOwnProperty(r) && (t[r] = h0[r][e]);
        }
        return w0[e];
      }
      var Nr = [[1, 1, 1], [2, 1, 1], [3, 1, 1], [4, 2, 1], [5, 2, 1], [6, 3, 1], [7, 4, 2], [8, 6, 3], [9, 7, 6], [10, 8, 7], [11, 10, 9]], P0 = [0.5, 0.6, 0.7, 0.8, 0.9, 1, 1.2, 1.44, 1.728, 2.074, 2.488], G0 = function(e, t) {
        return t.size < 2 ? e : Nr[e - 1][t.size - 1];
      }, V0 = function() {
        function h(t) {
          this.style = void 0, this.color = void 0, this.size = void 0, this.textSize = void 0, this.phantom = void 0, this.font = void 0, this.fontFamily = void 0, this.fontWeight = void 0, this.fontShape = void 0, this.sizeMultiplier = void 0, this.maxSize = void 0, this.minRuleThickness = void 0, this._fontMetrics = void 0, this.style = t.style, this.color = t.color, this.size = t.size || h.BASESIZE, this.textSize = t.textSize || this.size, this.phantom = !!t.phantom, this.font = t.font || "", this.fontFamily = t.fontFamily || "", this.fontWeight = t.fontWeight || "", this.fontShape = t.fontShape || "", this.sizeMultiplier = P0[this.size - 1], this.maxSize = t.maxSize, this.minRuleThickness = t.minRuleThickness, this._fontMetrics = void 0;
        }
        var e = h.prototype;
        return e.extend = function(r) {
          var i = { style: this.style, size: this.size, textSize: this.textSize, color: this.color, phantom: this.phantom, font: this.font, fontFamily: this.fontFamily, fontWeight: this.fontWeight, fontShape: this.fontShape, maxSize: this.maxSize, minRuleThickness: this.minRuleThickness };
          for (var a in r)
            r.hasOwnProperty(a) && (i[a] = r[a]);
          return new h(i);
        }, e.havingStyle = function(r) {
          return this.style === r ? this : this.extend({ style: r, size: G0(this.textSize, r) });
        }, e.havingCrampedStyle = function() {
          return this.havingStyle(this.style.cramp());
        }, e.havingSize = function(r) {
          return this.size === r && this.textSize === r ? this : this.extend({ style: this.style.text(), size: r, textSize: r, sizeMultiplier: P0[r - 1] });
        }, e.havingBaseStyle = function(r) {
          r = r || this.style.text();
          var i = G0(h.BASESIZE, r);
          return this.size === i && this.textSize === h.BASESIZE && this.style === r ? this : this.extend({ style: r, size: i });
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
          return this.size !== h.BASESIZE ? ["sizing", "reset-size" + this.size, "size" + h.BASESIZE] : [];
        }, e.fontMetrics = function() {
          return this._fontMetrics || (this._fontMetrics = Fr(this.size)), this._fontMetrics;
        }, e.getColor = function() {
          return this.phantom ? "transparent" : this.color;
        }, h;
      }();
      V0.BASESIZE = 6;
      var Qt = V0, k0 = { pt: 1, mm: 7227 / 2540, cm: 7227 / 254, in: 72.27, bp: 803 / 800, pc: 12, dd: 1238 / 1157, cc: 14856 / 1157, nd: 685 / 642, nc: 1370 / 107, sp: 1 / 65536, px: 803 / 800 }, Ir = { ex: true, em: true, mu: true }, S0 = function(e) {
        return typeof e != "string" && (e = e.unit), e in k0 || e in Ir || e === "ex";
      }, Fe = function(e, t) {
        var r;
        if (e.unit in k0)
          r = k0[e.unit] / t.fontMetrics().ptPerEm / t.sizeMultiplier;
        else if (e.unit === "mu")
          r = t.fontMetrics().cssEmPerMu;
        else {
          var i;
          if (t.style.isTight() ? i = t.havingStyle(t.style.text()) : i = t, e.unit === "ex")
            r = i.fontMetrics().xHeight;
          else if (e.unit === "em")
            r = i.fontMetrics().quad;
          else
            throw new u("Invalid unit: '" + e.unit + "'");
          i !== t && (r *= i.sizeMultiplier / t.sizeMultiplier);
        }
        return Math.min(e.number * r, t.maxSize);
      }, X = function(e) {
        return +e.toFixed(4) + "em";
      }, vt = function(e) {
        return e.filter(function(t) {
          return t;
        }).join(" ");
      }, U0 = function(e, t, r) {
        if (this.classes = e || [], this.attributes = {}, this.height = 0, this.depth = 0, this.maxFontSize = 0, this.style = r || {}, t) {
          t.style.isTight() && this.classes.push("mtight");
          var i = t.getColor();
          i && (this.style.color = i);
        }
      }, j0 = function(e) {
        var t = document.createElement(e);
        t.className = vt(this.classes);
        for (var r in this.style)
          this.style.hasOwnProperty(r) && (t.style[r] = this.style[r]);
        for (var i in this.attributes)
          this.attributes.hasOwnProperty(i) && t.setAttribute(i, this.attributes[i]);
        for (var a = 0; a < this.children.length; a++)
          t.appendChild(this.children[a].toNode());
        return t;
      }, W0 = function(e) {
        var t = "<" + e;
        this.classes.length && (t += ' class="' + H.escape(vt(this.classes)) + '"');
        var r = "";
        for (var i in this.style)
          this.style.hasOwnProperty(i) && (r += H.hyphenate(i) + ":" + this.style[i] + ";");
        r && (t += ' style="' + H.escape(r) + '"');
        for (var a in this.attributes)
          this.attributes.hasOwnProperty(a) && (t += " " + a + '="' + H.escape(this.attributes[a]) + '"');
        t += ">";
        for (var o = 0; o < this.children.length; o++)
          t += this.children[o].toMarkup();
        return t += "</" + e + ">", t;
      }, Kt = function() {
        function h(t, r, i, a) {
          this.children = void 0, this.attributes = void 0, this.classes = void 0, this.height = void 0, this.depth = void 0, this.width = void 0, this.maxFontSize = void 0, this.style = void 0, U0.call(this, t, i, a), this.children = r || [];
        }
        var e = h.prototype;
        return e.setAttribute = function(r, i) {
          this.attributes[r] = i;
        }, e.hasClass = function(r) {
          return H.contains(this.classes, r);
        }, e.toNode = function() {
          return j0.call(this, "span");
        }, e.toMarkup = function() {
          return W0.call(this, "span");
        }, h;
      }(), A0 = function() {
        function h(t, r, i, a) {
          this.children = void 0, this.attributes = void 0, this.classes = void 0, this.height = void 0, this.depth = void 0, this.maxFontSize = void 0, this.style = void 0, U0.call(this, r, a), this.children = i || [], this.setAttribute("href", t);
        }
        var e = h.prototype;
        return e.setAttribute = function(r, i) {
          this.attributes[r] = i;
        }, e.hasClass = function(r) {
          return H.contains(this.classes, r);
        }, e.toNode = function() {
          return j0.call(this, "a");
        }, e.toMarkup = function() {
          return W0.call(this, "a");
        }, h;
      }(), Lr = function() {
        function h(t, r, i) {
          this.src = void 0, this.alt = void 0, this.classes = void 0, this.height = void 0, this.depth = void 0, this.maxFontSize = void 0, this.style = void 0, this.alt = r, this.src = t, this.classes = ["mord"], this.style = i;
        }
        var e = h.prototype;
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
        }, h;
      }(), qr = { \u00EE: "\u0131\u0302", \u00EF: "\u0131\u0308", \u00ED: "\u0131\u0301", \u00EC: "\u0131\u0300" }, tt = function() {
        function h(t, r, i, a, o, p, x, w) {
          this.text = void 0, this.height = void 0, this.depth = void 0, this.italic = void 0, this.skew = void 0, this.width = void 0, this.maxFontSize = void 0, this.classes = void 0, this.style = void 0, this.text = t, this.height = r || 0, this.depth = i || 0, this.italic = a || 0, this.skew = o || 0, this.width = p || 0, this.classes = x || [], this.style = w || {}, this.maxFontSize = 0;
          var C = ct(this.text.charCodeAt(0));
          C && this.classes.push(C + "_fallback"), /[îïíì]/.test(this.text) && (this.text = qr[this.text]);
        }
        var e = h.prototype;
        return e.hasClass = function(r) {
          return H.contains(this.classes, r);
        }, e.toNode = function() {
          var r = document.createTextNode(this.text), i = null;
          this.italic > 0 && (i = document.createElement("span"), i.style.marginRight = X(this.italic)), this.classes.length > 0 && (i = i || document.createElement("span"), i.className = vt(this.classes));
          for (var a in this.style)
            this.style.hasOwnProperty(a) && (i = i || document.createElement("span"), i.style[a] = this.style[a]);
          return i ? (i.appendChild(r), i) : r;
        }, e.toMarkup = function() {
          var r = false, i = "<span";
          this.classes.length && (r = true, i += ' class="', i += H.escape(vt(this.classes)), i += '"');
          var a = "";
          this.italic > 0 && (a += "margin-right:" + this.italic + "em;");
          for (var o in this.style)
            this.style.hasOwnProperty(o) && (a += H.hyphenate(o) + ":" + this.style[o] + ";");
          a && (r = true, i += ' style="' + H.escape(a) + '"');
          var p = H.escape(this.text);
          return r ? (i += ">", i += p, i += "</span>", i) : p;
        }, h;
      }(), yt = function() {
        function h(t, r) {
          this.children = void 0, this.attributes = void 0, this.children = t || [], this.attributes = r || {};
        }
        var e = h.prototype;
        return e.toNode = function() {
          var r = "http://www.w3.org/2000/svg", i = document.createElementNS(r, "svg");
          for (var a in this.attributes)
            Object.prototype.hasOwnProperty.call(this.attributes, a) && i.setAttribute(a, this.attributes[a]);
          for (var o = 0; o < this.children.length; o++)
            i.appendChild(this.children[o].toNode());
          return i;
        }, e.toMarkup = function() {
          var r = '<svg xmlns="http://www.w3.org/2000/svg"';
          for (var i in this.attributes)
            Object.prototype.hasOwnProperty.call(this.attributes, i) && (r += " " + i + "='" + this.attributes[i] + "'");
          r += ">";
          for (var a = 0; a < this.children.length; a++)
            r += this.children[a].toMarkup();
          return r += "</svg>", r;
        }, h;
      }(), Et = function() {
        function h(t, r) {
          this.pathName = void 0, this.alternate = void 0, this.pathName = t, this.alternate = r;
        }
        var e = h.prototype;
        return e.toNode = function() {
          var r = "http://www.w3.org/2000/svg", i = document.createElementNS(r, "path");
          return this.alternate ? i.setAttribute("d", this.alternate) : i.setAttribute("d", Mt[this.pathName]), i;
        }, e.toMarkup = function() {
          return this.alternate ? "<path d='" + this.alternate + "'/>" : "<path d='" + Mt[this.pathName] + "'/>";
        }, h;
      }(), z0 = function() {
        function h(t) {
          this.attributes = void 0, this.attributes = t || {};
        }
        var e = h.prototype;
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
        }, h;
      }();
      function Z(h) {
        if (h instanceof tt)
          return h;
        throw new Error("Expected symbolNode but got " + String(h) + ".");
      }
      function le(h) {
        if (h instanceof Kt)
          return h;
        throw new Error("Expected span<HtmlDomNode> but got " + String(h) + ".");
      }
      var Ke = { bin: 1, close: 1, inner: 1, open: 1, punct: 1, rel: 1 }, lt = { "accent-token": 1, mathord: 1, "op-token": 1, spacing: 1, textord: 1 }, rt = { math: {}, text: {} }, ke = rt;
      function l(h, e, t, r, i, a) {
        rt[h][i] = { font: e, group: t, replace: r }, a && r && (rt[h][r] = rt[h][i]);
      }
      var m = "math", j = "text", g = "main", S = "ams", Ne = "accent-token", ie = "bin", nt = "close", m0 = "inner", pe = "mathord", Ge = "op-token", ut = "open", Y0 = "punct", A = "rel", Dt = "spacing", N = "textord";
      l(m, g, A, "\u2261", "\\equiv", true), l(m, g, A, "\u227A", "\\prec", true), l(m, g, A, "\u227B", "\\succ", true), l(m, g, A, "\u223C", "\\sim", true), l(m, g, A, "\u22A5", "\\perp"), l(m, g, A, "\u2AAF", "\\preceq", true), l(m, g, A, "\u2AB0", "\\succeq", true), l(m, g, A, "\u2243", "\\simeq", true), l(m, g, A, "\u2223", "\\mid", true), l(m, g, A, "\u226A", "\\ll", true), l(m, g, A, "\u226B", "\\gg", true), l(m, g, A, "\u224D", "\\asymp", true), l(m, g, A, "\u2225", "\\parallel"), l(m, g, A, "\u22C8", "\\bowtie", true), l(m, g, A, "\u2323", "\\smile", true), l(m, g, A, "\u2291", "\\sqsubseteq", true), l(m, g, A, "\u2292", "\\sqsupseteq", true), l(m, g, A, "\u2250", "\\doteq", true), l(m, g, A, "\u2322", "\\frown", true), l(m, g, A, "\u220B", "\\ni", true), l(m, g, A, "\u221D", "\\propto", true), l(m, g, A, "\u22A2", "\\vdash", true), l(m, g, A, "\u22A3", "\\dashv", true), l(m, g, A, "\u220B", "\\owns"), l(m, g, Y0, ".", "\\ldotp"), l(m, g, Y0, "\u22C5", "\\cdotp"), l(m, g, N, "#", "\\#"), l(j, g, N, "#", "\\#"), l(m, g, N, "&", "\\&"), l(j, g, N, "&", "\\&"), l(m, g, N, "\u2135", "\\aleph", true), l(m, g, N, "\u2200", "\\forall", true), l(m, g, N, "\u210F", "\\hbar", true), l(m, g, N, "\u2203", "\\exists", true), l(m, g, N, "\u2207", "\\nabla", true), l(m, g, N, "\u266D", "\\flat", true), l(m, g, N, "\u2113", "\\ell", true), l(m, g, N, "\u266E", "\\natural", true), l(m, g, N, "\u2663", "\\clubsuit", true), l(m, g, N, "\u2118", "\\wp", true), l(m, g, N, "\u266F", "\\sharp", true), l(m, g, N, "\u2662", "\\diamondsuit", true), l(m, g, N, "\u211C", "\\Re", true), l(m, g, N, "\u2661", "\\heartsuit", true), l(m, g, N, "\u2111", "\\Im", true), l(m, g, N, "\u2660", "\\spadesuit", true), l(m, g, N, "\xA7", "\\S", true), l(j, g, N, "\xA7", "\\S"), l(m, g, N, "\xB6", "\\P", true), l(j, g, N, "\xB6", "\\P"), l(m, g, N, "\u2020", "\\dag"), l(j, g, N, "\u2020", "\\dag"), l(j, g, N, "\u2020", "\\textdagger"), l(m, g, N, "\u2021", "\\ddag"), l(j, g, N, "\u2021", "\\ddag"), l(j, g, N, "\u2021", "\\textdaggerdbl"), l(m, g, nt, "\u23B1", "\\rmoustache", true), l(m, g, ut, "\u23B0", "\\lmoustache", true), l(m, g, nt, "\u27EF", "\\rgroup", true), l(m, g, ut, "\u27EE", "\\lgroup", true), l(m, g, ie, "\u2213", "\\mp", true), l(m, g, ie, "\u2296", "\\ominus", true), l(m, g, ie, "\u228E", "\\uplus", true), l(m, g, ie, "\u2293", "\\sqcap", true), l(m, g, ie, "\u2217", "\\ast"), l(m, g, ie, "\u2294", "\\sqcup", true), l(m, g, ie, "\u25EF", "\\bigcirc", true), l(m, g, ie, "\u2219", "\\bullet"), l(m, g, ie, "\u2021", "\\ddagger"), l(m, g, ie, "\u2240", "\\wr", true), l(m, g, ie, "\u2A3F", "\\amalg"), l(m, g, ie, "&", "\\And"), l(m, g, A, "\u27F5", "\\longleftarrow", true), l(m, g, A, "\u21D0", "\\Leftarrow", true), l(m, g, A, "\u27F8", "\\Longleftarrow", true), l(m, g, A, "\u27F6", "\\longrightarrow", true), l(m, g, A, "\u21D2", "\\Rightarrow", true), l(m, g, A, "\u27F9", "\\Longrightarrow", true), l(m, g, A, "\u2194", "\\leftrightarrow", true), l(m, g, A, "\u27F7", "\\longleftrightarrow", true), l(m, g, A, "\u21D4", "\\Leftrightarrow", true), l(m, g, A, "\u27FA", "\\Longleftrightarrow", true), l(m, g, A, "\u21A6", "\\mapsto", true), l(m, g, A, "\u27FC", "\\longmapsto", true), l(m, g, A, "\u2197", "\\nearrow", true), l(m, g, A, "\u21A9", "\\hookleftarrow", true), l(m, g, A, "\u21AA", "\\hookrightarrow", true), l(m, g, A, "\u2198", "\\searrow", true), l(m, g, A, "\u21BC", "\\leftharpoonup", true), l(m, g, A, "\u21C0", "\\rightharpoonup", true), l(m, g, A, "\u2199", "\\swarrow", true), l(m, g, A, "\u21BD", "\\leftharpoondown", true), l(m, g, A, "\u21C1", "\\rightharpoondown", true), l(m, g, A, "\u2196", "\\nwarrow", true), l(m, g, A, "\u21CC", "\\rightleftharpoons", true), l(m, S, A, "\u226E", "\\nless", true), l(m, S, A, "\uE010", "\\@nleqslant"), l(m, S, A, "\uE011", "\\@nleqq"), l(m, S, A, "\u2A87", "\\lneq", true), l(m, S, A, "\u2268", "\\lneqq", true), l(m, S, A, "\uE00C", "\\@lvertneqq"), l(m, S, A, "\u22E6", "\\lnsim", true), l(m, S, A, "\u2A89", "\\lnapprox", true), l(m, S, A, "\u2280", "\\nprec", true), l(m, S, A, "\u22E0", "\\npreceq", true), l(m, S, A, "\u22E8", "\\precnsim", true), l(m, S, A, "\u2AB9", "\\precnapprox", true), l(m, S, A, "\u2241", "\\nsim", true), l(m, S, A, "\uE006", "\\@nshortmid"), l(m, S, A, "\u2224", "\\nmid", true), l(m, S, A, "\u22AC", "\\nvdash", true), l(m, S, A, "\u22AD", "\\nvDash", true), l(m, S, A, "\u22EA", "\\ntriangleleft"), l(m, S, A, "\u22EC", "\\ntrianglelefteq", true), l(m, S, A, "\u228A", "\\subsetneq", true), l(m, S, A, "\uE01A", "\\@varsubsetneq"), l(m, S, A, "\u2ACB", "\\subsetneqq", true), l(m, S, A, "\uE017", "\\@varsubsetneqq"), l(m, S, A, "\u226F", "\\ngtr", true), l(m, S, A, "\uE00F", "\\@ngeqslant"), l(m, S, A, "\uE00E", "\\@ngeqq"), l(m, S, A, "\u2A88", "\\gneq", true), l(m, S, A, "\u2269", "\\gneqq", true), l(m, S, A, "\uE00D", "\\@gvertneqq"), l(m, S, A, "\u22E7", "\\gnsim", true), l(m, S, A, "\u2A8A", "\\gnapprox", true), l(m, S, A, "\u2281", "\\nsucc", true), l(m, S, A, "\u22E1", "\\nsucceq", true), l(m, S, A, "\u22E9", "\\succnsim", true), l(m, S, A, "\u2ABA", "\\succnapprox", true), l(m, S, A, "\u2246", "\\ncong", true), l(m, S, A, "\uE007", "\\@nshortparallel"), l(m, S, A, "\u2226", "\\nparallel", true), l(m, S, A, "\u22AF", "\\nVDash", true), l(m, S, A, "\u22EB", "\\ntriangleright"), l(m, S, A, "\u22ED", "\\ntrianglerighteq", true), l(m, S, A, "\uE018", "\\@nsupseteqq"), l(m, S, A, "\u228B", "\\supsetneq", true), l(m, S, A, "\uE01B", "\\@varsupsetneq"), l(m, S, A, "\u2ACC", "\\supsetneqq", true), l(m, S, A, "\uE019", "\\@varsupsetneqq"), l(m, S, A, "\u22AE", "\\nVdash", true), l(m, S, A, "\u2AB5", "\\precneqq", true), l(m, S, A, "\u2AB6", "\\succneqq", true), l(m, S, A, "\uE016", "\\@nsubseteqq"), l(m, S, ie, "\u22B4", "\\unlhd"), l(m, S, ie, "\u22B5", "\\unrhd"), l(m, S, A, "\u219A", "\\nleftarrow", true), l(m, S, A, "\u219B", "\\nrightarrow", true), l(m, S, A, "\u21CD", "\\nLeftarrow", true), l(m, S, A, "\u21CF", "\\nRightarrow", true), l(m, S, A, "\u21AE", "\\nleftrightarrow", true), l(m, S, A, "\u21CE", "\\nLeftrightarrow", true), l(m, S, A, "\u25B3", "\\vartriangle"), l(m, S, N, "\u210F", "\\hslash"), l(m, S, N, "\u25BD", "\\triangledown"), l(m, S, N, "\u25CA", "\\lozenge"), l(m, S, N, "\u24C8", "\\circledS"), l(m, S, N, "\xAE", "\\circledR"), l(j, S, N, "\xAE", "\\circledR"), l(m, S, N, "\u2221", "\\measuredangle", true), l(m, S, N, "\u2204", "\\nexists"), l(m, S, N, "\u2127", "\\mho"), l(m, S, N, "\u2132", "\\Finv", true), l(m, S, N, "\u2141", "\\Game", true), l(m, S, N, "\u2035", "\\backprime"), l(m, S, N, "\u25B2", "\\blacktriangle"), l(m, S, N, "\u25BC", "\\blacktriangledown"), l(m, S, N, "\u25A0", "\\blacksquare"), l(m, S, N, "\u29EB", "\\blacklozenge"), l(m, S, N, "\u2605", "\\bigstar"), l(m, S, N, "\u2222", "\\sphericalangle", true), l(m, S, N, "\u2201", "\\complement", true), l(m, S, N, "\xF0", "\\eth", true), l(j, g, N, "\xF0", "\xF0"), l(m, S, N, "\u2571", "\\diagup"), l(m, S, N, "\u2572", "\\diagdown"), l(m, S, N, "\u25A1", "\\square"), l(m, S, N, "\u25A1", "\\Box"), l(m, S, N, "\u25CA", "\\Diamond"), l(m, S, N, "\xA5", "\\yen", true), l(j, S, N, "\xA5", "\\yen", true), l(m, S, N, "\u2713", "\\checkmark", true), l(j, S, N, "\u2713", "\\checkmark"), l(m, S, N, "\u2136", "\\beth", true), l(m, S, N, "\u2138", "\\daleth", true), l(m, S, N, "\u2137", "\\gimel", true), l(m, S, N, "\u03DD", "\\digamma", true), l(m, S, N, "\u03F0", "\\varkappa"), l(m, S, ut, "\u250C", "\\@ulcorner", true), l(m, S, nt, "\u2510", "\\@urcorner", true), l(m, S, ut, "\u2514", "\\@llcorner", true), l(m, S, nt, "\u2518", "\\@lrcorner", true), l(m, S, A, "\u2266", "\\leqq", true), l(m, S, A, "\u2A7D", "\\leqslant", true), l(m, S, A, "\u2A95", "\\eqslantless", true), l(m, S, A, "\u2272", "\\lesssim", true), l(m, S, A, "\u2A85", "\\lessapprox", true), l(m, S, A, "\u224A", "\\approxeq", true), l(m, S, ie, "\u22D6", "\\lessdot"), l(m, S, A, "\u22D8", "\\lll", true), l(m, S, A, "\u2276", "\\lessgtr", true), l(m, S, A, "\u22DA", "\\lesseqgtr", true), l(m, S, A, "\u2A8B", "\\lesseqqgtr", true), l(m, S, A, "\u2251", "\\doteqdot"), l(m, S, A, "\u2253", "\\risingdotseq", true), l(m, S, A, "\u2252", "\\fallingdotseq", true), l(m, S, A, "\u223D", "\\backsim", true), l(m, S, A, "\u22CD", "\\backsimeq", true), l(m, S, A, "\u2AC5", "\\subseteqq", true), l(m, S, A, "\u22D0", "\\Subset", true), l(m, S, A, "\u228F", "\\sqsubset", true), l(m, S, A, "\u227C", "\\preccurlyeq", true), l(m, S, A, "\u22DE", "\\curlyeqprec", true), l(m, S, A, "\u227E", "\\precsim", true), l(m, S, A, "\u2AB7", "\\precapprox", true), l(m, S, A, "\u22B2", "\\vartriangleleft"), l(m, S, A, "\u22B4", "\\trianglelefteq"), l(m, S, A, "\u22A8", "\\vDash", true), l(m, S, A, "\u22AA", "\\Vvdash", true), l(m, S, A, "\u2323", "\\smallsmile"), l(m, S, A, "\u2322", "\\smallfrown"), l(m, S, A, "\u224F", "\\bumpeq", true), l(m, S, A, "\u224E", "\\Bumpeq", true), l(m, S, A, "\u2267", "\\geqq", true), l(m, S, A, "\u2A7E", "\\geqslant", true), l(m, S, A, "\u2A96", "\\eqslantgtr", true), l(m, S, A, "\u2273", "\\gtrsim", true), l(m, S, A, "\u2A86", "\\gtrapprox", true), l(m, S, ie, "\u22D7", "\\gtrdot"), l(m, S, A, "\u22D9", "\\ggg", true), l(m, S, A, "\u2277", "\\gtrless", true), l(m, S, A, "\u22DB", "\\gtreqless", true), l(m, S, A, "\u2A8C", "\\gtreqqless", true), l(m, S, A, "\u2256", "\\eqcirc", true), l(m, S, A, "\u2257", "\\circeq", true), l(m, S, A, "\u225C", "\\triangleq", true), l(m, S, A, "\u223C", "\\thicksim"), l(m, S, A, "\u2248", "\\thickapprox"), l(m, S, A, "\u2AC6", "\\supseteqq", true), l(m, S, A, "\u22D1", "\\Supset", true), l(m, S, A, "\u2290", "\\sqsupset", true), l(m, S, A, "\u227D", "\\succcurlyeq", true), l(m, S, A, "\u22DF", "\\curlyeqsucc", true), l(m, S, A, "\u227F", "\\succsim", true), l(m, S, A, "\u2AB8", "\\succapprox", true), l(m, S, A, "\u22B3", "\\vartriangleright"), l(m, S, A, "\u22B5", "\\trianglerighteq"), l(m, S, A, "\u22A9", "\\Vdash", true), l(m, S, A, "\u2223", "\\shortmid"), l(m, S, A, "\u2225", "\\shortparallel"), l(m, S, A, "\u226C", "\\between", true), l(m, S, A, "\u22D4", "\\pitchfork", true), l(m, S, A, "\u221D", "\\varpropto"), l(m, S, A, "\u25C0", "\\blacktriangleleft"), l(m, S, A, "\u2234", "\\therefore", true), l(m, S, A, "\u220D", "\\backepsilon"), l(m, S, A, "\u25B6", "\\blacktriangleright"), l(m, S, A, "\u2235", "\\because", true), l(m, S, A, "\u22D8", "\\llless"), l(m, S, A, "\u22D9", "\\gggtr"), l(m, S, ie, "\u22B2", "\\lhd"), l(m, S, ie, "\u22B3", "\\rhd"), l(m, S, A, "\u2242", "\\eqsim", true), l(m, g, A, "\u22C8", "\\Join"), l(m, S, A, "\u2251", "\\Doteq", true), l(m, S, ie, "\u2214", "\\dotplus", true), l(m, S, ie, "\u2216", "\\smallsetminus"), l(m, S, ie, "\u22D2", "\\Cap", true), l(m, S, ie, "\u22D3", "\\Cup", true), l(m, S, ie, "\u2A5E", "\\doublebarwedge", true), l(m, S, ie, "\u229F", "\\boxminus", true), l(m, S, ie, "\u229E", "\\boxplus", true), l(m, S, ie, "\u22C7", "\\divideontimes", true), l(m, S, ie, "\u22C9", "\\ltimes", true), l(m, S, ie, "\u22CA", "\\rtimes", true), l(m, S, ie, "\u22CB", "\\leftthreetimes", true), l(m, S, ie, "\u22CC", "\\rightthreetimes", true), l(m, S, ie, "\u22CF", "\\curlywedge", true), l(m, S, ie, "\u22CE", "\\curlyvee", true), l(m, S, ie, "\u229D", "\\circleddash", true), l(m, S, ie, "\u229B", "\\circledast", true), l(m, S, ie, "\u22C5", "\\centerdot"), l(m, S, ie, "\u22BA", "\\intercal", true), l(m, S, ie, "\u22D2", "\\doublecap"), l(m, S, ie, "\u22D3", "\\doublecup"), l(m, S, ie, "\u22A0", "\\boxtimes", true), l(m, S, A, "\u21E2", "\\dashrightarrow", true), l(m, S, A, "\u21E0", "\\dashleftarrow", true), l(m, S, A, "\u21C7", "\\leftleftarrows", true), l(m, S, A, "\u21C6", "\\leftrightarrows", true), l(m, S, A, "\u21DA", "\\Lleftarrow", true), l(m, S, A, "\u219E", "\\twoheadleftarrow", true), l(m, S, A, "\u21A2", "\\leftarrowtail", true), l(m, S, A, "\u21AB", "\\looparrowleft", true), l(m, S, A, "\u21CB", "\\leftrightharpoons", true), l(m, S, A, "\u21B6", "\\curvearrowleft", true), l(m, S, A, "\u21BA", "\\circlearrowleft", true), l(m, S, A, "\u21B0", "\\Lsh", true), l(m, S, A, "\u21C8", "\\upuparrows", true), l(m, S, A, "\u21BF", "\\upharpoonleft", true), l(m, S, A, "\u21C3", "\\downharpoonleft", true), l(m, g, A, "\u22B6", "\\origof", true), l(m, g, A, "\u22B7", "\\imageof", true), l(m, S, A, "\u22B8", "\\multimap", true), l(m, S, A, "\u21AD", "\\leftrightsquigarrow", true), l(m, S, A, "\u21C9", "\\rightrightarrows", true), l(m, S, A, "\u21C4", "\\rightleftarrows", true), l(m, S, A, "\u21A0", "\\twoheadrightarrow", true), l(m, S, A, "\u21A3", "\\rightarrowtail", true), l(m, S, A, "\u21AC", "\\looparrowright", true), l(m, S, A, "\u21B7", "\\curvearrowright", true), l(m, S, A, "\u21BB", "\\circlearrowright", true), l(m, S, A, "\u21B1", "\\Rsh", true), l(m, S, A, "\u21CA", "\\downdownarrows", true), l(m, S, A, "\u21BE", "\\upharpoonright", true), l(m, S, A, "\u21C2", "\\downharpoonright", true), l(m, S, A, "\u21DD", "\\rightsquigarrow", true), l(m, S, A, "\u21DD", "\\leadsto"), l(m, S, A, "\u21DB", "\\Rrightarrow", true), l(m, S, A, "\u21BE", "\\restriction"), l(m, g, N, "\u2018", "`"), l(m, g, N, "$", "\\$"), l(j, g, N, "$", "\\$"), l(j, g, N, "$", "\\textdollar"), l(m, g, N, "%", "\\%"), l(j, g, N, "%", "\\%"), l(m, g, N, "_", "\\_"), l(j, g, N, "_", "\\_"), l(j, g, N, "_", "\\textunderscore"), l(m, g, N, "\u2220", "\\angle", true), l(m, g, N, "\u221E", "\\infty", true), l(m, g, N, "\u2032", "\\prime"), l(m, g, N, "\u25B3", "\\triangle"), l(m, g, N, "\u0393", "\\Gamma", true), l(m, g, N, "\u0394", "\\Delta", true), l(m, g, N, "\u0398", "\\Theta", true), l(m, g, N, "\u039B", "\\Lambda", true), l(m, g, N, "\u039E", "\\Xi", true), l(m, g, N, "\u03A0", "\\Pi", true), l(m, g, N, "\u03A3", "\\Sigma", true), l(m, g, N, "\u03A5", "\\Upsilon", true), l(m, g, N, "\u03A6", "\\Phi", true), l(m, g, N, "\u03A8", "\\Psi", true), l(m, g, N, "\u03A9", "\\Omega", true), l(m, g, N, "A", "\u0391"), l(m, g, N, "B", "\u0392"), l(m, g, N, "E", "\u0395"), l(m, g, N, "Z", "\u0396"), l(m, g, N, "H", "\u0397"), l(m, g, N, "I", "\u0399"), l(m, g, N, "K", "\u039A"), l(m, g, N, "M", "\u039C"), l(m, g, N, "N", "\u039D"), l(m, g, N, "O", "\u039F"), l(m, g, N, "P", "\u03A1"), l(m, g, N, "T", "\u03A4"), l(m, g, N, "X", "\u03A7"), l(m, g, N, "\xAC", "\\neg", true), l(m, g, N, "\xAC", "\\lnot"), l(m, g, N, "\u22A4", "\\top"), l(m, g, N, "\u22A5", "\\bot"), l(m, g, N, "\u2205", "\\emptyset"), l(m, S, N, "\u2205", "\\varnothing"), l(m, g, pe, "\u03B1", "\\alpha", true), l(m, g, pe, "\u03B2", "\\beta", true), l(m, g, pe, "\u03B3", "\\gamma", true), l(m, g, pe, "\u03B4", "\\delta", true), l(m, g, pe, "\u03F5", "\\epsilon", true), l(m, g, pe, "\u03B6", "\\zeta", true), l(m, g, pe, "\u03B7", "\\eta", true), l(m, g, pe, "\u03B8", "\\theta", true), l(m, g, pe, "\u03B9", "\\iota", true), l(m, g, pe, "\u03BA", "\\kappa", true), l(m, g, pe, "\u03BB", "\\lambda", true), l(m, g, pe, "\u03BC", "\\mu", true), l(m, g, pe, "\u03BD", "\\nu", true), l(m, g, pe, "\u03BE", "\\xi", true), l(m, g, pe, "\u03BF", "\\omicron", true), l(m, g, pe, "\u03C0", "\\pi", true), l(m, g, pe, "\u03C1", "\\rho", true), l(m, g, pe, "\u03C3", "\\sigma", true), l(m, g, pe, "\u03C4", "\\tau", true), l(m, g, pe, "\u03C5", "\\upsilon", true), l(m, g, pe, "\u03D5", "\\phi", true), l(m, g, pe, "\u03C7", "\\chi", true), l(m, g, pe, "\u03C8", "\\psi", true), l(m, g, pe, "\u03C9", "\\omega", true), l(m, g, pe, "\u03B5", "\\varepsilon", true), l(m, g, pe, "\u03D1", "\\vartheta", true), l(m, g, pe, "\u03D6", "\\varpi", true), l(m, g, pe, "\u03F1", "\\varrho", true), l(m, g, pe, "\u03C2", "\\varsigma", true), l(m, g, pe, "\u03C6", "\\varphi", true), l(m, g, ie, "\u2217", "*", true), l(m, g, ie, "+", "+"), l(m, g, ie, "\u2212", "-", true), l(m, g, ie, "\u22C5", "\\cdot", true), l(m, g, ie, "\u2218", "\\circ"), l(m, g, ie, "\xF7", "\\div", true), l(m, g, ie, "\xB1", "\\pm", true), l(m, g, ie, "\xD7", "\\times", true), l(m, g, ie, "\u2229", "\\cap", true), l(m, g, ie, "\u222A", "\\cup", true), l(m, g, ie, "\u2216", "\\setminus"), l(m, g, ie, "\u2227", "\\land"), l(m, g, ie, "\u2228", "\\lor"), l(m, g, ie, "\u2227", "\\wedge", true), l(m, g, ie, "\u2228", "\\vee", true), l(m, g, N, "\u221A", "\\surd"), l(m, g, ut, "\u27E8", "\\langle", true), l(m, g, ut, "\u2223", "\\lvert"), l(m, g, ut, "\u2225", "\\lVert"), l(m, g, nt, "?", "?"), l(m, g, nt, "!", "!"), l(m, g, nt, "\u27E9", "\\rangle", true), l(m, g, nt, "\u2223", "\\rvert"), l(m, g, nt, "\u2225", "\\rVert"), l(m, g, A, "=", "="), l(m, g, A, ":", ":"), l(m, g, A, "\u2248", "\\approx", true), l(m, g, A, "\u2245", "\\cong", true), l(m, g, A, "\u2265", "\\ge"), l(m, g, A, "\u2265", "\\geq", true), l(m, g, A, "\u2190", "\\gets"), l(m, g, A, ">", "\\gt", true), l(m, g, A, "\u2208", "\\in", true), l(m, g, A, "\uE020", "\\@not"), l(m, g, A, "\u2282", "\\subset", true), l(m, g, A, "\u2283", "\\supset", true), l(m, g, A, "\u2286", "\\subseteq", true), l(m, g, A, "\u2287", "\\supseteq", true), l(m, S, A, "\u2288", "\\nsubseteq", true), l(m, S, A, "\u2289", "\\nsupseteq", true), l(m, g, A, "\u22A8", "\\models"), l(m, g, A, "\u2190", "\\leftarrow", true), l(m, g, A, "\u2264", "\\le"), l(m, g, A, "\u2264", "\\leq", true), l(m, g, A, "<", "\\lt", true), l(m, g, A, "\u2192", "\\rightarrow", true), l(m, g, A, "\u2192", "\\to"), l(m, S, A, "\u2271", "\\ngeq", true), l(m, S, A, "\u2270", "\\nleq", true), l(m, g, Dt, "\xA0", "\\ "), l(m, g, Dt, "\xA0", "\\space"), l(m, g, Dt, "\xA0", "\\nobreakspace"), l(j, g, Dt, "\xA0", "\\ "), l(j, g, Dt, "\xA0", " "), l(j, g, Dt, "\xA0", "\\space"), l(j, g, Dt, "\xA0", "\\nobreakspace"), l(m, g, Dt, null, "\\nobreak"), l(m, g, Dt, null, "\\allowbreak"), l(m, g, Y0, ",", ","), l(m, g, Y0, ";", ";"), l(m, S, ie, "\u22BC", "\\barwedge", true), l(m, S, ie, "\u22BB", "\\veebar", true), l(m, g, ie, "\u2299", "\\odot", true), l(m, g, ie, "\u2295", "\\oplus", true), l(m, g, ie, "\u2297", "\\otimes", true), l(m, g, N, "\u2202", "\\partial", true), l(m, g, ie, "\u2298", "\\oslash", true), l(m, S, ie, "\u229A", "\\circledcirc", true), l(m, S, ie, "\u22A1", "\\boxdot", true), l(m, g, ie, "\u25B3", "\\bigtriangleup"), l(m, g, ie, "\u25BD", "\\bigtriangledown"), l(m, g, ie, "\u2020", "\\dagger"), l(m, g, ie, "\u22C4", "\\diamond"), l(m, g, ie, "\u22C6", "\\star"), l(m, g, ie, "\u25C3", "\\triangleleft"), l(m, g, ie, "\u25B9", "\\triangleright"), l(m, g, ut, "{", "\\{"), l(j, g, N, "{", "\\{"), l(j, g, N, "{", "\\textbraceleft"), l(m, g, nt, "}", "\\}"), l(j, g, N, "}", "\\}"), l(j, g, N, "}", "\\textbraceright"), l(m, g, ut, "{", "\\lbrace"), l(m, g, nt, "}", "\\rbrace"), l(m, g, ut, "[", "\\lbrack", true), l(j, g, N, "[", "\\lbrack", true), l(m, g, nt, "]", "\\rbrack", true), l(j, g, N, "]", "\\rbrack", true), l(m, g, ut, "(", "\\lparen", true), l(m, g, nt, ")", "\\rparen", true), l(j, g, N, "<", "\\textless", true), l(j, g, N, ">", "\\textgreater", true), l(m, g, ut, "\u230A", "\\lfloor", true), l(m, g, nt, "\u230B", "\\rfloor", true), l(m, g, ut, "\u2308", "\\lceil", true), l(m, g, nt, "\u2309", "\\rceil", true), l(m, g, N, "\\", "\\backslash"), l(m, g, N, "\u2223", "|"), l(m, g, N, "\u2223", "\\vert"), l(j, g, N, "|", "\\textbar", true), l(m, g, N, "\u2225", "\\|"), l(m, g, N, "\u2225", "\\Vert"), l(j, g, N, "\u2225", "\\textbardbl"), l(j, g, N, "~", "\\textasciitilde"), l(j, g, N, "\\", "\\textbackslash"), l(j, g, N, "^", "\\textasciicircum"), l(m, g, A, "\u2191", "\\uparrow", true), l(m, g, A, "\u21D1", "\\Uparrow", true), l(m, g, A, "\u2193", "\\downarrow", true), l(m, g, A, "\u21D3", "\\Downarrow", true), l(m, g, A, "\u2195", "\\updownarrow", true), l(m, g, A, "\u21D5", "\\Updownarrow", true), l(m, g, Ge, "\u2210", "\\coprod"), l(m, g, Ge, "\u22C1", "\\bigvee"), l(m, g, Ge, "\u22C0", "\\bigwedge"), l(m, g, Ge, "\u2A04", "\\biguplus"), l(m, g, Ge, "\u22C2", "\\bigcap"), l(m, g, Ge, "\u22C3", "\\bigcup"), l(m, g, Ge, "\u222B", "\\int"), l(m, g, Ge, "\u222B", "\\intop"), l(m, g, Ge, "\u222C", "\\iint"), l(m, g, Ge, "\u222D", "\\iiint"), l(m, g, Ge, "\u220F", "\\prod"), l(m, g, Ge, "\u2211", "\\sum"), l(m, g, Ge, "\u2A02", "\\bigotimes"), l(m, g, Ge, "\u2A01", "\\bigoplus"), l(m, g, Ge, "\u2A00", "\\bigodot"), l(m, g, Ge, "\u222E", "\\oint"), l(m, g, Ge, "\u222F", "\\oiint"), l(m, g, Ge, "\u2230", "\\oiiint"), l(m, g, Ge, "\u2A06", "\\bigsqcup"), l(m, g, Ge, "\u222B", "\\smallint"), l(j, g, m0, "\u2026", "\\textellipsis"), l(m, g, m0, "\u2026", "\\mathellipsis"), l(j, g, m0, "\u2026", "\\ldots", true), l(m, g, m0, "\u2026", "\\ldots", true), l(m, g, m0, "\u22EF", "\\@cdots", true), l(m, g, m0, "\u22F1", "\\ddots", true), l(m, g, N, "\u22EE", "\\varvdots"), l(m, g, Ne, "\u02CA", "\\acute"), l(m, g, Ne, "\u02CB", "\\grave"), l(m, g, Ne, "\xA8", "\\ddot"), l(m, g, Ne, "~", "\\tilde"), l(m, g, Ne, "\u02C9", "\\bar"), l(m, g, Ne, "\u02D8", "\\breve"), l(m, g, Ne, "\u02C7", "\\check"), l(m, g, Ne, "^", "\\hat"), l(m, g, Ne, "\u20D7", "\\vec"), l(m, g, Ne, "\u02D9", "\\dot"), l(m, g, Ne, "\u02DA", "\\mathring"), l(m, g, pe, "\uE131", "\\@imath"), l(m, g, pe, "\uE237", "\\@jmath"), l(m, g, N, "\u0131", "\u0131"), l(m, g, N, "\u0237", "\u0237"), l(j, g, N, "\u0131", "\\i", true), l(j, g, N, "\u0237", "\\j", true), l(j, g, N, "\xDF", "\\ss", true), l(j, g, N, "\xE6", "\\ae", true), l(j, g, N, "\u0153", "\\oe", true), l(j, g, N, "\xF8", "\\o", true), l(j, g, N, "\xC6", "\\AE", true), l(j, g, N, "\u0152", "\\OE", true), l(j, g, N, "\xD8", "\\O", true), l(j, g, Ne, "\u02CA", "\\'"), l(j, g, Ne, "\u02CB", "\\`"), l(j, g, Ne, "\u02C6", "\\^"), l(j, g, Ne, "\u02DC", "\\~"), l(j, g, Ne, "\u02C9", "\\="), l(j, g, Ne, "\u02D8", "\\u"), l(j, g, Ne, "\u02D9", "\\."), l(j, g, Ne, "\xB8", "\\c"), l(j, g, Ne, "\u02DA", "\\r"), l(j, g, Ne, "\u02C7", "\\v"), l(j, g, Ne, "\xA8", '\\"'), l(j, g, Ne, "\u02DD", "\\H"), l(j, g, Ne, "\u25EF", "\\textcircled");
      var gi = { "--": true, "---": true, "``": true, "''": true };
      l(j, g, N, "\u2013", "--", true), l(j, g, N, "\u2013", "\\textendash"), l(j, g, N, "\u2014", "---", true), l(j, g, N, "\u2014", "\\textemdash"), l(j, g, N, "\u2018", "`", true), l(j, g, N, "\u2018", "\\textquoteleft"), l(j, g, N, "\u2019", "'", true), l(j, g, N, "\u2019", "\\textquoteright"), l(j, g, N, "\u201C", "``", true), l(j, g, N, "\u201C", "\\textquotedblleft"), l(j, g, N, "\u201D", "''", true), l(j, g, N, "\u201D", "\\textquotedblright"), l(m, g, N, "\xB0", "\\degree", true), l(j, g, N, "\xB0", "\\degree"), l(j, g, N, "\xB0", "\\textdegree", true), l(m, g, N, "\xA3", "\\pounds"), l(m, g, N, "\xA3", "\\mathsterling", true), l(j, g, N, "\xA3", "\\pounds"), l(j, g, N, "\xA3", "\\textsterling", true), l(m, S, N, "\u2720", "\\maltese"), l(j, S, N, "\u2720", "\\maltese");
      for (var vi = '0123456789/@."', Or = 0; Or < vi.length; Or++) {
        var xi = vi.charAt(Or);
        l(m, g, N, xi, xi);
      }
      for (var bi = '0123456789!@*()-=+";:?/.,', Rr = 0; Rr < bi.length; Rr++) {
        var yi = bi.charAt(Rr);
        l(j, g, N, yi, yi);
      }
      for (var X0 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz", Hr = 0; Hr < X0.length; Hr++) {
        var $0 = X0.charAt(Hr);
        l(m, g, pe, $0, $0), l(j, g, N, $0, $0);
      }
      l(m, S, N, "C", "\u2102"), l(j, S, N, "C", "\u2102"), l(m, S, N, "H", "\u210D"), l(j, S, N, "H", "\u210D"), l(m, S, N, "N", "\u2115"), l(j, S, N, "N", "\u2115"), l(m, S, N, "P", "\u2119"), l(j, S, N, "P", "\u2119"), l(m, S, N, "Q", "\u211A"), l(j, S, N, "Q", "\u211A"), l(m, S, N, "R", "\u211D"), l(j, S, N, "R", "\u211D"), l(m, S, N, "Z", "\u2124"), l(j, S, N, "Z", "\u2124"), l(m, g, pe, "h", "\u210E"), l(j, g, pe, "h", "\u210E");
      for (var de = "", it = 0; it < X0.length; it++) {
        var Ve = X0.charAt(it);
        de = String.fromCharCode(55349, 56320 + it), l(m, g, pe, Ve, de), l(j, g, N, Ve, de), de = String.fromCharCode(55349, 56372 + it), l(m, g, pe, Ve, de), l(j, g, N, Ve, de), de = String.fromCharCode(55349, 56424 + it), l(m, g, pe, Ve, de), l(j, g, N, Ve, de), de = String.fromCharCode(55349, 56580 + it), l(m, g, pe, Ve, de), l(j, g, N, Ve, de), de = String.fromCharCode(55349, 56736 + it), l(m, g, pe, Ve, de), l(j, g, N, Ve, de), de = String.fromCharCode(55349, 56788 + it), l(m, g, pe, Ve, de), l(j, g, N, Ve, de), de = String.fromCharCode(55349, 56840 + it), l(m, g, pe, Ve, de), l(j, g, N, Ve, de), de = String.fromCharCode(55349, 56944 + it), l(m, g, pe, Ve, de), l(j, g, N, Ve, de), it < 26 && (de = String.fromCharCode(55349, 56632 + it), l(m, g, pe, Ve, de), l(j, g, N, Ve, de), de = String.fromCharCode(55349, 56476 + it), l(m, g, pe, Ve, de), l(j, g, N, Ve, de));
      }
      de = String.fromCharCode(55349, 56668), l(m, g, pe, "k", de), l(j, g, N, "k", de);
      for (var Jt = 0; Jt < 10; Jt++) {
        var Ht = Jt.toString();
        de = String.fromCharCode(55349, 57294 + Jt), l(m, g, pe, Ht, de), l(j, g, N, Ht, de), de = String.fromCharCode(55349, 57314 + Jt), l(m, g, pe, Ht, de), l(j, g, N, Ht, de), de = String.fromCharCode(55349, 57324 + Jt), l(m, g, pe, Ht, de), l(j, g, N, Ht, de), de = String.fromCharCode(55349, 57334 + Jt), l(m, g, pe, Ht, de), l(j, g, N, Ht, de);
      }
      for (var Pr = "\xD0\xDE\xFE", Gr = 0; Gr < Pr.length; Gr++) {
        var Z0 = Pr.charAt(Gr);
        l(m, g, pe, Z0, Z0), l(j, g, N, Z0, Z0);
      }
      var Q0 = [["mathbf", "textbf", "Main-Bold"], ["mathbf", "textbf", "Main-Bold"], ["mathnormal", "textit", "Math-Italic"], ["mathnormal", "textit", "Math-Italic"], ["boldsymbol", "boldsymbol", "Main-BoldItalic"], ["boldsymbol", "boldsymbol", "Main-BoldItalic"], ["mathscr", "textscr", "Script-Regular"], ["", "", ""], ["", "", ""], ["", "", ""], ["mathfrak", "textfrak", "Fraktur-Regular"], ["mathfrak", "textfrak", "Fraktur-Regular"], ["mathbb", "textbb", "AMS-Regular"], ["mathbb", "textbb", "AMS-Regular"], ["", "", ""], ["", "", ""], ["mathsf", "textsf", "SansSerif-Regular"], ["mathsf", "textsf", "SansSerif-Regular"], ["mathboldsf", "textboldsf", "SansSerif-Bold"], ["mathboldsf", "textboldsf", "SansSerif-Bold"], ["mathitsf", "textitsf", "SansSerif-Italic"], ["mathitsf", "textitsf", "SansSerif-Italic"], ["", "", ""], ["", "", ""], ["mathtt", "texttt", "Typewriter-Regular"], ["mathtt", "texttt", "Typewriter-Regular"]], wi = [["mathbf", "textbf", "Main-Bold"], ["", "", ""], ["mathsf", "textsf", "SansSerif-Regular"], ["mathboldsf", "textboldsf", "SansSerif-Bold"], ["mathtt", "texttt", "Typewriter-Regular"]], Yu = function(e, t) {
        var r = e.charCodeAt(0), i = e.charCodeAt(1), a = (r - 55296) * 1024 + (i - 56320) + 65536, o = t === "math" ? 0 : 1;
        if (119808 <= a && a < 120484) {
          var p = Math.floor((a - 119808) / 26);
          return [Q0[p][2], Q0[p][o]];
        } else if (120782 <= a && a <= 120831) {
          var x = Math.floor((a - 120782) / 10);
          return [wi[x][2], wi[x][o]];
        } else {
          if (a === 120485 || a === 120486)
            return [Q0[0][2], Q0[0][o]];
          if (120486 < a && a < 120782)
            return ["", ""];
          throw new u("Unsupported character: " + e);
        }
      }, K0 = function(e, t, r) {
        return ke[r][e] && ke[r][e].replace && (e = ke[r][e].replace), { value: e, metrics: y0(e, t, r) };
      }, xt = function(e, t, r, i, a) {
        var o = K0(e, t, r), p = o.metrics;
        e = o.value;
        var x;
        if (p) {
          var w = p.italic;
          (r === "text" || i && i.font === "mathit") && (w = 0), x = new tt(e, p.height, p.depth, w, p.skew, p.width, a);
        } else
          typeof console < "u" && console.warn("No character metrics " + ("for '" + e + "' in style '" + t + "' and mode '" + r + "'")), x = new tt(e, 0, 0, 0, 0, 0, a);
        if (i) {
          x.maxFontSize = i.sizeMultiplier, i.style.isTight() && x.classes.push("mtight");
          var C = i.getColor();
          C && (x.style.color = C);
        }
        return x;
      }, Xu = function(e, t, r, i) {
        return i === void 0 && (i = []), r.font === "boldsymbol" && K0(e, "Main-Bold", t).metrics ? xt(e, "Main-Bold", t, r, i.concat(["mathbf"])) : e === "\\" || ke[t][e].font === "main" ? xt(e, "Main-Regular", t, r, i) : xt(e, "AMS-Regular", t, r, i.concat(["amsrm"]));
      }, $u = function(e, t, r, i, a) {
        return a !== "textord" && K0(e, "Math-BoldItalic", t).metrics ? { fontName: "Math-BoldItalic", fontClass: "boldsymbol" } : { fontName: "Main-Bold", fontClass: "mathbf" };
      }, Zu = function(e, t, r) {
        var i = e.mode, a = e.text, o = ["mord"], p = i === "math" || i === "text" && t.font, x = p ? t.font : t.fontFamily;
        if (a.charCodeAt(0) === 55349) {
          var w = Yu(a, i), C = w[0], I = w[1];
          return xt(a, C, i, t, o.concat(I));
        } else if (x) {
          var R, P;
          if (x === "boldsymbol") {
            var G = $u(a, i, t, o, r);
            R = G.fontName, P = [G.fontClass];
          } else
            p ? (R = Ai[x].fontName, P = [x]) : (R = J0(x, t.fontWeight, t.fontShape), P = [x, t.fontWeight, t.fontShape]);
          if (K0(a, R, i).metrics)
            return xt(a, R, i, t, o.concat(P));
          if (gi.hasOwnProperty(a) && R.substr(0, 10) === "Typewriter") {
            for (var Q = [], J = 0; J < a.length; J++)
              Q.push(xt(a[J], R, i, t, o.concat(P)));
            return Si(Q);
          }
        }
        if (r === "mathord")
          return xt(a, "Math-Italic", i, t, o.concat(["mathnormal"]));
        if (r === "textord") {
          var ae = ke[i][a] && ke[i][a].font;
          if (ae === "ams") {
            var ue = J0("amsrm", t.fontWeight, t.fontShape);
            return xt(a, ue, i, t, o.concat("amsrm", t.fontWeight, t.fontShape));
          } else if (ae === "main" || !ae) {
            var me = J0("textrm", t.fontWeight, t.fontShape);
            return xt(a, me, i, t, o.concat(t.fontWeight, t.fontShape));
          } else {
            var Ae = J0(ae, t.fontWeight, t.fontShape);
            return xt(a, Ae, i, t, o.concat(Ae, t.fontWeight, t.fontShape));
          }
        } else
          throw new Error("unexpected type: " + r + " in makeOrd");
      }, Qu = function(e, t) {
        if (vt(e.classes) !== vt(t.classes) || e.skew !== t.skew || e.maxFontSize !== t.maxFontSize)
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
      }, Ku = function(e) {
        for (var t = 0; t < e.length - 1; t++) {
          var r = e[t], i = e[t + 1];
          r instanceof tt && i instanceof tt && Qu(r, i) && (r.text += i.text, r.height = Math.max(r.height, i.height), r.depth = Math.max(r.depth, i.depth), r.italic = i.italic, e.splice(t + 1, 1), t--);
        }
        return e;
      }, Vr = function(e) {
        for (var t = 0, r = 0, i = 0, a = 0; a < e.children.length; a++) {
          var o = e.children[a];
          o.height > t && (t = o.height), o.depth > r && (r = o.depth), o.maxFontSize > i && (i = o.maxFontSize);
        }
        e.height = t, e.depth = r, e.maxFontSize = i;
      }, at = function(e, t, r, i) {
        var a = new Kt(e, t, r, i);
        return Vr(a), a;
      }, ki = function(e, t, r, i) {
        return new Kt(e, t, r, i);
      }, Ju = function(e, t, r) {
        var i = at([e], [], t);
        return i.height = Math.max(r || t.fontMetrics().defaultRuleThickness, t.minRuleThickness), i.style.borderBottomWidth = X(i.height), i.maxFontSize = 1, i;
      }, _u = function(e, t, r, i) {
        var a = new A0(e, t, r, i);
        return Vr(a), a;
      }, Si = function(e) {
        var t = new Tt(e);
        return Vr(t), t;
      }, e1 = function(e, t) {
        return e instanceof Tt ? at([], [e], t) : e;
      }, t1 = function(e) {
        if (e.positionType === "individualShift") {
          for (var t = e.children, r = [t[0]], i = -t[0].shift - t[0].elem.depth, a = i, o = 1; o < t.length; o++) {
            var p = -t[o].shift - a - t[o].elem.depth, x = p - (t[o - 1].elem.height + t[o - 1].elem.depth);
            a = a + p, r.push({ type: "kern", size: x }), r.push(t[o]);
          }
          return { children: r, depth: i };
        }
        var w;
        if (e.positionType === "top") {
          for (var C = e.positionData, I = 0; I < e.children.length; I++) {
            var R = e.children[I];
            C -= R.type === "kern" ? R.size : R.elem.height + R.elem.depth;
          }
          w = C;
        } else if (e.positionType === "bottom")
          w = -e.positionData;
        else {
          var P = e.children[0];
          if (P.type !== "elem")
            throw new Error('First child must have type "elem".');
          if (e.positionType === "shift")
            w = -P.elem.depth - e.positionData;
          else if (e.positionType === "firstBaseline")
            w = -P.elem.depth;
          else
            throw new Error("Invalid positionType " + e.positionType + ".");
        }
        return { children: e.children, depth: w };
      }, r1 = function(e, t) {
        for (var r = t1(e), i = r.children, a = r.depth, o = 0, p = 0; p < i.length; p++) {
          var x = i[p];
          if (x.type === "elem") {
            var w = x.elem;
            o = Math.max(o, w.maxFontSize, w.height);
          }
        }
        o += 2;
        var C = at(["pstrut"], []);
        C.style.height = X(o);
        for (var I = [], R = a, P = a, G = a, Q = 0; Q < i.length; Q++) {
          var J = i[Q];
          if (J.type === "kern")
            G += J.size;
          else {
            var ae = J.elem, ue = J.wrapperClasses || [], me = J.wrapperStyle || {}, Ae = at(ue, [C, ae], void 0, me);
            Ae.style.top = X(-o - G - ae.depth), J.marginLeft && (Ae.style.marginLeft = J.marginLeft), J.marginRight && (Ae.style.marginRight = J.marginRight), I.push(Ae), G += ae.height + ae.depth;
          }
          R = Math.min(R, G), P = Math.max(P, G);
        }
        var Me = at(["vlist"], I);
        Me.style.height = X(P);
        var Ie;
        if (R < 0) {
          var Be = at([], []), Te = at(["vlist"], [Be]);
          Te.style.height = X(-R);
          var Re = at(["vlist-s"], [new tt("\u200B")]);
          Ie = [at(["vlist-r"], [Me, Re]), at(["vlist-r"], [Te])];
        } else
          Ie = [at(["vlist-r"], [Me])];
        var De = at(["vlist-t"], Ie);
        return Ie.length === 2 && De.classes.push("vlist-t2"), De.height = P, De.depth = -R, De;
      }, n1 = function(e, t) {
        var r = at(["mspace"], [], t), i = Fe(e, t);
        return r.style.marginRight = X(i), r;
      }, J0 = function(e, t, r) {
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
      }, Ai = { mathbf: { variant: "bold", fontName: "Main-Bold" }, mathrm: { variant: "normal", fontName: "Main-Regular" }, textit: { variant: "italic", fontName: "Main-Italic" }, mathit: { variant: "italic", fontName: "Main-Italic" }, mathnormal: { variant: "italic", fontName: "Math-Italic" }, mathbb: { variant: "double-struck", fontName: "AMS-Regular" }, mathcal: { variant: "script", fontName: "Caligraphic-Regular" }, mathfrak: { variant: "fraktur", fontName: "Fraktur-Regular" }, mathscr: { variant: "script", fontName: "Script-Regular" }, mathsf: { variant: "sans-serif", fontName: "SansSerif-Regular" }, mathtt: { variant: "monospace", fontName: "Typewriter-Regular" } }, zi = { vec: ["vec", 0.471, 0.714], oiintSize1: ["oiintSize1", 0.957, 0.499], oiintSize2: ["oiintSize2", 1.472, 0.659], oiiintSize1: ["oiiintSize1", 1.304, 0.499], oiiintSize2: ["oiiintSize2", 1.98, 0.659] }, i1 = function(e, t) {
        var r = zi[e], i = r[0], a = r[1], o = r[2], p = new Et(i), x = new yt([p], { width: X(a), height: X(o), style: "width:" + X(a), viewBox: "0 0 " + 1e3 * a + " " + 1e3 * o, preserveAspectRatio: "xMinYMin" }), w = ki(["overlay"], [x], t);
        return w.height = o, w.style.height = X(o), w.style.width = X(a), w;
      }, L = { fontMap: Ai, makeSymbol: xt, mathsym: Xu, makeSpan: at, makeSvgSpan: ki, makeLineSpan: Ju, makeAnchor: _u, makeFragment: Si, wrapFragment: e1, makeVList: r1, makeOrd: Zu, makeGlue: n1, staticSvg: i1, svgData: zi, tryCombineChars: Ku }, Le = { number: 3, unit: "mu" }, _t = { number: 4, unit: "mu" }, Ft = { number: 5, unit: "mu" }, a1 = { mord: { mop: Le, mbin: _t, mrel: Ft, minner: Le }, mop: { mord: Le, mop: Le, mrel: Ft, minner: Le }, mbin: { mord: _t, mop: _t, mopen: _t, minner: _t }, mrel: { mord: Ft, mop: Ft, mopen: Ft, minner: Ft }, mopen: {}, mclose: { mop: Le, mbin: _t, mrel: Ft, minner: Le }, mpunct: { mord: Le, mop: Le, mrel: Ft, mopen: Le, mclose: Le, mpunct: Le, minner: Le }, minner: { mord: Le, mop: Le, mbin: _t, mrel: Ft, mopen: Le, mpunct: Le, minner: Le } }, l1 = { mord: { mop: Le }, mop: { mord: Le, mop: Le }, mbin: {}, mrel: {}, mopen: {}, mclose: { mop: Le }, mpunct: {}, minner: { mop: Le } }, Ci = {}, _0 = {}, er = {};
      function re(h) {
        for (var e = h.type, t = h.names, r = h.props, i = h.handler, a = h.htmlBuilder, o = h.mathmlBuilder, p = { type: e, numArgs: r.numArgs, argTypes: r.argTypes, allowedInArgument: !!r.allowedInArgument, allowedInText: !!r.allowedInText, allowedInMath: r.allowedInMath === void 0 ? true : r.allowedInMath, numOptionalArgs: r.numOptionalArgs || 0, infix: !!r.infix, primitive: !!r.primitive, handler: i }, x = 0; x < t.length; ++x)
          Ci[t[x]] = p;
        e && (a && (_0[e] = a), o && (er[e] = o));
      }
      function e0(h) {
        var e = h.type, t = h.htmlBuilder, r = h.mathmlBuilder;
        re({ type: e, names: [], props: { numArgs: 0 }, handler: function() {
          throw new Error("Should never be called.");
        }, htmlBuilder: t, mathmlBuilder: r });
      }
      var tr = function(e) {
        return e.type === "ordgroup" && e.body.length === 1 ? e.body[0] : e;
      }, Ue = function(e) {
        return e.type === "ordgroup" ? e.body : [e];
      }, Nt = L.makeSpan, u1 = ["leftmost", "mbin", "mopen", "mrel", "mop", "mpunct"], o1 = ["rightmost", "mrel", "mclose", "mpunct"], s1 = { display: te.DISPLAY, text: te.TEXT, script: te.SCRIPT, scriptscript: te.SCRIPTSCRIPT }, h1 = { mord: "mord", mop: "mop", mbin: "mbin", mrel: "mrel", mopen: "mopen", mclose: "mclose", mpunct: "mpunct", minner: "minner" }, $e = function(e, t, r, i) {
        i === void 0 && (i = [null, null]);
        for (var a = [], o = 0; o < e.length; o++) {
          var p = Se(e[o], t);
          if (p instanceof Tt) {
            var x = p.children;
            a.push.apply(a, x);
          } else
            a.push(p);
        }
        if (L.tryCombineChars(a), !r)
          return a;
        var w = t;
        if (e.length === 1) {
          var C = e[0];
          C.type === "sizing" ? w = t.havingSize(C.size) : C.type === "styling" && (w = t.havingStyle(s1[C.style]));
        }
        var I = Nt([i[0] || "leftmost"], [], t), R = Nt([i[1] || "rightmost"], [], t), P = r === "root";
        return Bi(a, function(G, Q) {
          var J = Q.classes[0], ae = G.classes[0];
          J === "mbin" && H.contains(o1, ae) ? Q.classes[0] = "mord" : ae === "mbin" && H.contains(u1, J) && (G.classes[0] = "mord");
        }, { node: I }, R, P), Bi(a, function(G, Q) {
          var J = Ur(Q), ae = Ur(G), ue = J && ae ? G.hasClass("mtight") ? l1[J][ae] : a1[J][ae] : null;
          if (ue)
            return L.makeGlue(ue, w);
        }, { node: I }, R, P), a;
      }, Bi = function h(e, t, r, i, a) {
        i && e.push(i);
        for (var o = 0; o < e.length; o++) {
          var p = e[o], x = Mi(p);
          if (x) {
            h(x.children, t, r, null, a);
            continue;
          }
          var w = !p.hasClass("mspace");
          if (w) {
            var C = t(p, r.node);
            C && (r.insertAfter ? r.insertAfter(C) : (e.unshift(C), o++));
          }
          w ? r.node = p : a && p.hasClass("newline") && (r.node = Nt(["leftmost"])), r.insertAfter = function(I) {
            return function(R) {
              e.splice(I + 1, 0, R), o++;
            };
          }(o);
        }
        i && e.pop();
      }, Mi = function(e) {
        return e instanceof Tt || e instanceof A0 || e instanceof Kt && e.hasClass("enclosing") ? e : null;
      }, m1 = function h(e, t) {
        var r = Mi(e);
        if (r) {
          var i = r.children;
          if (i.length) {
            if (t === "right")
              return h(i[i.length - 1], "right");
            if (t === "left")
              return h(i[0], "left");
          }
        }
        return e;
      }, Ur = function(e, t) {
        return e ? (t && (e = m1(e, t)), h1[e.classes[0]] || null) : null;
      }, C0 = function(e, t) {
        var r = ["nulldelimiter"].concat(e.baseSizingClasses());
        return Nt(t.concat(r));
      }, Se = function(e, t, r) {
        if (!e)
          return Nt();
        if (_0[e.type]) {
          var i = _0[e.type](e, t);
          if (r && t.size !== r.size) {
            i = Nt(t.sizingClasses(r), [i], t);
            var a = t.sizeMultiplier / r.sizeMultiplier;
            i.height *= a, i.depth *= a;
          }
          return i;
        } else
          throw new u("Got group of unknown type: '" + e.type + "'");
      };
      function rr(h, e) {
        var t = Nt(["base"], h, e), r = Nt(["strut"]);
        return r.style.height = X(t.height + t.depth), t.depth && (r.style.verticalAlign = X(-t.depth)), t.children.unshift(r), t;
      }
      function jr(h, e) {
        var t = null;
        h.length === 1 && h[0].type === "tag" && (t = h[0].tag, h = h[0].body);
        var r = $e(h, e, "root"), i;
        r.length === 2 && r[1].hasClass("tag") && (i = r.pop());
        for (var a = [], o = [], p = 0; p < r.length; p++)
          if (o.push(r[p]), r[p].hasClass("mbin") || r[p].hasClass("mrel") || r[p].hasClass("allowbreak")) {
            for (var x = false; p < r.length - 1 && r[p + 1].hasClass("mspace") && !r[p + 1].hasClass("newline"); )
              p++, o.push(r[p]), r[p].hasClass("nobreak") && (x = true);
            x || (a.push(rr(o, e)), o = []);
          } else
            r[p].hasClass("newline") && (o.pop(), o.length > 0 && (a.push(rr(o, e)), o = []), a.push(r[p]));
        o.length > 0 && a.push(rr(o, e));
        var w;
        t ? (w = rr($e(t, e, true)), w.classes = ["tag"], a.push(w)) : i && a.push(i);
        var C = Nt(["katex-html"], a);
        if (C.setAttribute("aria-hidden", "true"), w) {
          var I = w.children[0];
          I.style.height = X(C.height + C.depth), C.depth && (I.style.verticalAlign = X(-C.depth));
        }
        return C;
      }
      function Ti(h) {
        return new Tt(h);
      }
      var ft = function() {
        function h(t, r, i) {
          this.type = void 0, this.attributes = void 0, this.children = void 0, this.classes = void 0, this.type = t, this.attributes = {}, this.children = r || [], this.classes = i || [];
        }
        var e = h.prototype;
        return e.setAttribute = function(r, i) {
          this.attributes[r] = i;
        }, e.getAttribute = function(r) {
          return this.attributes[r];
        }, e.toNode = function() {
          var r = document.createElementNS("http://www.w3.org/1998/Math/MathML", this.type);
          for (var i in this.attributes)
            Object.prototype.hasOwnProperty.call(this.attributes, i) && r.setAttribute(i, this.attributes[i]);
          this.classes.length > 0 && (r.className = vt(this.classes));
          for (var a = 0; a < this.children.length; a++)
            r.appendChild(this.children[a].toNode());
          return r;
        }, e.toMarkup = function() {
          var r = "<" + this.type;
          for (var i in this.attributes)
            Object.prototype.hasOwnProperty.call(this.attributes, i) && (r += " " + i + '="', r += H.escape(this.attributes[i]), r += '"');
          this.classes.length > 0 && (r += ' class ="' + H.escape(vt(this.classes)) + '"'), r += ">";
          for (var a = 0; a < this.children.length; a++)
            r += this.children[a].toMarkup();
          return r += "</" + this.type + ">", r;
        }, e.toText = function() {
          return this.children.map(function(r) {
            return r.toText();
          }).join("");
        }, h;
      }(), B0 = function() {
        function h(t) {
          this.text = void 0, this.text = t;
        }
        var e = h.prototype;
        return e.toNode = function() {
          return document.createTextNode(this.text);
        }, e.toMarkup = function() {
          return H.escape(this.toText());
        }, e.toText = function() {
          return this.text;
        }, h;
      }(), c1 = function() {
        function h(t) {
          this.width = void 0, this.character = void 0, this.width = t, t >= 0.05555 && t <= 0.05556 ? this.character = "\u200A" : t >= 0.1666 && t <= 0.1667 ? this.character = "\u2009" : t >= 0.2222 && t <= 0.2223 ? this.character = "\u2005" : t >= 0.2777 && t <= 0.2778 ? this.character = "\u2005\u200A" : t >= -0.05556 && t <= -0.05555 ? this.character = "\u200A\u2063" : t >= -0.1667 && t <= -0.1666 ? this.character = "\u2009\u2063" : t >= -0.2223 && t <= -0.2222 ? this.character = "\u205F\u2063" : t >= -0.2778 && t <= -0.2777 ? this.character = "\u2005\u2063" : this.character = null;
        }
        var e = h.prototype;
        return e.toNode = function() {
          if (this.character)
            return document.createTextNode(this.character);
          var r = document.createElementNS("http://www.w3.org/1998/Math/MathML", "mspace");
          return r.setAttribute("width", X(this.width)), r;
        }, e.toMarkup = function() {
          return this.character ? "<mtext>" + this.character + "</mtext>" : '<mspace width="' + X(this.width) + '"/>';
        }, e.toText = function() {
          return this.character ? this.character : " ";
        }, h;
      }(), Y = { MathNode: ft, TextNode: B0, SpaceNode: c1, newDocumentFragment: Ti }, dt = function(e, t, r) {
        return ke[t][e] && ke[t][e].replace && e.charCodeAt(0) !== 55349 && !(gi.hasOwnProperty(e) && r && (r.fontFamily && r.fontFamily.substr(4, 2) === "tt" || r.font && r.font.substr(4, 2) === "tt")) && (e = ke[t][e].replace), new Y.TextNode(e);
      }, Wr = function(e) {
        return e.length === 1 ? e[0] : new Y.MathNode("mrow", e);
      }, Yr = function(e, t) {
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
        var o = L.fontMap[r].fontName;
        return y0(a, o, i) ? L.fontMap[r].variant : null;
      }, ot = function(e, t, r) {
        if (e.length === 1) {
          var i = Ee(e[0], t);
          return r && i instanceof ft && i.type === "mo" && (i.setAttribute("lspace", "0em"), i.setAttribute("rspace", "0em")), [i];
        }
        for (var a = [], o, p = 0; p < e.length; p++) {
          var x = Ee(e[p], t);
          if (x instanceof ft && o instanceof ft) {
            if (x.type === "mtext" && o.type === "mtext" && x.getAttribute("mathvariant") === o.getAttribute("mathvariant")) {
              var w;
              (w = o.children).push.apply(w, x.children);
              continue;
            } else if (x.type === "mn" && o.type === "mn") {
              var C;
              (C = o.children).push.apply(C, x.children);
              continue;
            } else if (x.type === "mi" && x.children.length === 1 && o.type === "mn") {
              var I = x.children[0];
              if (I instanceof B0 && I.text === ".") {
                var R;
                (R = o.children).push.apply(R, x.children);
                continue;
              }
            } else if (o.type === "mi" && o.children.length === 1) {
              var P = o.children[0];
              if (P instanceof B0 && P.text === "\u0338" && (x.type === "mo" || x.type === "mi" || x.type === "mn")) {
                var G = x.children[0];
                G instanceof B0 && G.text.length > 0 && (G.text = G.text.slice(0, 1) + "\u0338" + G.text.slice(1), a.pop());
              }
            }
          }
          a.push(x), o = x;
        }
        return a;
      }, Pt = function(e, t, r) {
        return Wr(ot(e, t, r));
      }, Ee = function(e, t) {
        if (!e)
          return new Y.MathNode("mrow");
        if (er[e.type]) {
          var r = er[e.type](e, t);
          return r;
        } else
          throw new u("Got group of unknown type: '" + e.type + "'");
      };
      function Ei(h, e, t, r, i) {
        var a = ot(h, t), o;
        a.length === 1 && a[0] instanceof ft && H.contains(["mrow", "mtable"], a[0].type) ? o = a[0] : o = new Y.MathNode("mrow", a);
        var p = new Y.MathNode("annotation", [new Y.TextNode(e)]);
        p.setAttribute("encoding", "application/x-tex");
        var x = new Y.MathNode("semantics", [o, p]), w = new Y.MathNode("math", [x]);
        w.setAttribute("xmlns", "http://www.w3.org/1998/Math/MathML"), r && w.setAttribute("display", "block");
        var C = i ? "katex" : "katex-mathml";
        return L.makeSpan([C], [w]);
      }
      var Di = function(e) {
        return new Qt({ style: e.displayMode ? te.DISPLAY : te.TEXT, maxSize: e.maxSize, minRuleThickness: e.minRuleThickness });
      }, Fi = function(e, t) {
        if (t.displayMode) {
          var r = ["katex-display"];
          t.leqno && r.push("leqno"), t.fleqn && r.push("fleqn"), e = L.makeSpan(r, [e]);
        }
        return e;
      }, p1 = function(e, t, r) {
        var i = Di(r), a;
        if (r.output === "mathml")
          return Ei(e, t, i, r.displayMode, true);
        if (r.output === "html") {
          var o = jr(e, i);
          a = L.makeSpan(["katex"], [o]);
        } else {
          var p = Ei(e, t, i, r.displayMode, false), x = jr(e, i);
          a = L.makeSpan(["katex"], [p, x]);
        }
        return Fi(a, r);
      }, f1 = function(e, t, r) {
        var i = Di(r), a = jr(e, i), o = L.makeSpan(["katex"], [a]);
        return Fi(o, r);
      }, z4 = null, d1 = { widehat: "^", widecheck: "\u02C7", widetilde: "~", utilde: "~", overleftarrow: "\u2190", underleftarrow: "\u2190", xleftarrow: "\u2190", overrightarrow: "\u2192", underrightarrow: "\u2192", xrightarrow: "\u2192", underbrace: "\u23DF", overbrace: "\u23DE", overgroup: "\u23E0", undergroup: "\u23E1", overleftrightarrow: "\u2194", underleftrightarrow: "\u2194", xleftrightarrow: "\u2194", Overrightarrow: "\u21D2", xRightarrow: "\u21D2", overleftharpoon: "\u21BC", xleftharpoonup: "\u21BC", overrightharpoon: "\u21C0", xrightharpoonup: "\u21C0", xLeftarrow: "\u21D0", xLeftrightarrow: "\u21D4", xhookleftarrow: "\u21A9", xhookrightarrow: "\u21AA", xmapsto: "\u21A6", xrightharpoondown: "\u21C1", xleftharpoondown: "\u21BD", xrightleftharpoons: "\u21CC", xleftrightharpoons: "\u21CB", xtwoheadleftarrow: "\u219E", xtwoheadrightarrow: "\u21A0", xlongequal: "=", xtofrom: "\u21C4", xrightleftarrows: "\u21C4", xrightequilibrium: "\u21CC", xleftequilibrium: "\u21CB", "\\cdrightarrow": "\u2192", "\\cdleftarrow": "\u2190", "\\cdlongequal": "=" }, g1 = function(e) {
        var t = new Y.MathNode("mo", [new Y.TextNode(d1[e.replace(/^\\/, "")])]);
        return t.setAttribute("stretchy", "true"), t;
      }, v1 = { overrightarrow: [["rightarrow"], 0.888, 522, "xMaxYMin"], overleftarrow: [["leftarrow"], 0.888, 522, "xMinYMin"], underrightarrow: [["rightarrow"], 0.888, 522, "xMaxYMin"], underleftarrow: [["leftarrow"], 0.888, 522, "xMinYMin"], xrightarrow: [["rightarrow"], 1.469, 522, "xMaxYMin"], "\\cdrightarrow": [["rightarrow"], 3, 522, "xMaxYMin"], xleftarrow: [["leftarrow"], 1.469, 522, "xMinYMin"], "\\cdleftarrow": [["leftarrow"], 3, 522, "xMinYMin"], Overrightarrow: [["doublerightarrow"], 0.888, 560, "xMaxYMin"], xRightarrow: [["doublerightarrow"], 1.526, 560, "xMaxYMin"], xLeftarrow: [["doubleleftarrow"], 1.526, 560, "xMinYMin"], overleftharpoon: [["leftharpoon"], 0.888, 522, "xMinYMin"], xleftharpoonup: [["leftharpoon"], 0.888, 522, "xMinYMin"], xleftharpoondown: [["leftharpoondown"], 0.888, 522, "xMinYMin"], overrightharpoon: [["rightharpoon"], 0.888, 522, "xMaxYMin"], xrightharpoonup: [["rightharpoon"], 0.888, 522, "xMaxYMin"], xrightharpoondown: [["rightharpoondown"], 0.888, 522, "xMaxYMin"], xlongequal: [["longequal"], 0.888, 334, "xMinYMin"], "\\cdlongequal": [["longequal"], 3, 334, "xMinYMin"], xtwoheadleftarrow: [["twoheadleftarrow"], 0.888, 334, "xMinYMin"], xtwoheadrightarrow: [["twoheadrightarrow"], 0.888, 334, "xMaxYMin"], overleftrightarrow: [["leftarrow", "rightarrow"], 0.888, 522], overbrace: [["leftbrace", "midbrace", "rightbrace"], 1.6, 548], underbrace: [["leftbraceunder", "midbraceunder", "rightbraceunder"], 1.6, 548], underleftrightarrow: [["leftarrow", "rightarrow"], 0.888, 522], xleftrightarrow: [["leftarrow", "rightarrow"], 1.75, 522], xLeftrightarrow: [["doubleleftarrow", "doublerightarrow"], 1.75, 560], xrightleftharpoons: [["leftharpoondownplus", "rightharpoonplus"], 1.75, 716], xleftrightharpoons: [["leftharpoonplus", "rightharpoondownplus"], 1.75, 716], xhookleftarrow: [["leftarrow", "righthook"], 1.08, 522], xhookrightarrow: [["lefthook", "rightarrow"], 1.08, 522], overlinesegment: [["leftlinesegment", "rightlinesegment"], 0.888, 522], underlinesegment: [["leftlinesegment", "rightlinesegment"], 0.888, 522], overgroup: [["leftgroup", "rightgroup"], 0.888, 342], undergroup: [["leftgroupunder", "rightgroupunder"], 0.888, 342], xmapsto: [["leftmapsto", "rightarrow"], 1.5, 522], xtofrom: [["leftToFrom", "rightToFrom"], 1.75, 528], xrightleftarrows: [["baraboveleftarrow", "rightarrowabovebar"], 1.75, 901], xrightequilibrium: [["baraboveshortleftharpoon", "rightharpoonaboveshortbar"], 1.75, 716], xleftequilibrium: [["shortbaraboveleftharpoon", "shortrightharpoonabovebar"], 1.75, 716] }, x1 = function(e) {
        return e.type === "ordgroup" ? e.body.length : 1;
      }, b1 = function(e, t) {
        function r() {
          var x = 4e5, w = e.label.substr(1);
          if (H.contains(["widehat", "widecheck", "widetilde", "utilde"], w)) {
            var C = e, I = x1(C.base), R, P, G;
            if (I > 5)
              w === "widehat" || w === "widecheck" ? (R = 420, x = 2364, G = 0.42, P = w + "4") : (R = 312, x = 2340, G = 0.34, P = "tilde4");
            else {
              var Q = [1, 1, 2, 2, 3, 3][I];
              w === "widehat" || w === "widecheck" ? (x = [0, 1062, 2364, 2364, 2364][Q], R = [0, 239, 300, 360, 420][Q], G = [0, 0.24, 0.3, 0.3, 0.36, 0.42][Q], P = w + Q) : (x = [0, 600, 1033, 2339, 2340][Q], R = [0, 260, 286, 306, 312][Q], G = [0, 0.26, 0.286, 0.3, 0.306, 0.34][Q], P = "tilde" + Q);
            }
            var J = new Et(P), ae = new yt([J], { width: "100%", height: X(G), viewBox: "0 0 " + x + " " + R, preserveAspectRatio: "none" });
            return { span: L.makeSvgSpan([], [ae], t), minWidth: 0, height: G };
          } else {
            var ue = [], me = v1[w], Ae = me[0], Me = me[1], Ie = me[2], Be = Ie / 1e3, Te = Ae.length, Re, De;
            if (Te === 1) {
              var st = me[3];
              Re = ["hide-tail"], De = [st];
            } else if (Te === 2)
              Re = ["halfarrow-left", "halfarrow-right"], De = ["xMinYMin", "xMaxYMin"];
            else if (Te === 3)
              Re = ["brace-left", "brace-center", "brace-right"], De = ["xMinYMin", "xMidYMin", "xMaxYMin"];
            else
              throw new Error(`Correct katexImagesData or update code here to support
                    ` + Te + " children.");
            for (var ht = 0; ht < Te; ht++) {
              var Ut = new Et(Ae[ht]), At = new yt([Ut], { width: "400em", height: X(Be), viewBox: "0 0 " + x + " " + Ie, preserveAspectRatio: De[ht] + " slice" }), mt = L.makeSvgSpan([Re[ht]], [At], t);
              if (Te === 1)
                return { span: mt, minWidth: Me, height: Be };
              mt.style.height = X(Be), ue.push(mt);
            }
            return { span: L.makeSpan(["stretchy"], ue, t), minWidth: Me, height: Be };
          }
        }
        var i = r(), a = i.span, o = i.minWidth, p = i.height;
        return a.height = p, a.style.height = X(p), o > 0 && (a.style.minWidth = X(o)), a;
      }, y1 = function(e, t, r, i, a) {
        var o, p = e.height + e.depth + r + i;
        if (/fbox|color|angl/.test(t)) {
          if (o = L.makeSpan(["stretchy", t], [], a), t === "fbox") {
            var x = a.color && a.getColor();
            x && (o.style.borderColor = x);
          }
        } else {
          var w = [];
          /^[bx]cancel$/.test(t) && w.push(new z0({ x1: "0", y1: "0", x2: "100%", y2: "100%", "stroke-width": "0.046em" })), /^x?cancel$/.test(t) && w.push(new z0({ x1: "0", y1: "100%", x2: "100%", y2: "0", "stroke-width": "0.046em" }));
          var C = new yt(w, { width: "100%", height: X(p) });
          o = L.makeSvgSpan([], [C], a);
        }
        return o.height = p, o.style.height = X(p), o;
      }, It = { encloseSpan: y1, mathMLnode: g1, svgSpan: b1 };
      function ge(h, e) {
        if (!h || h.type !== e)
          throw new Error("Expected node of type " + e + ", but got " + (h ? "node of type " + h.type : String(h)));
        return h;
      }
      function Xr(h) {
        var e = nr(h);
        if (!e)
          throw new Error("Expected node of symbol group type, but got " + (h ? "node of type " + h.type : String(h)));
        return e;
      }
      function nr(h) {
        return h && (h.type === "atom" || lt.hasOwnProperty(h.type)) ? h : null;
      }
      var $r = function(e, t) {
        var r, i, a;
        e && e.type === "supsub" ? (i = ge(e.base, "accent"), r = i.base, e.base = r, a = le(Se(e, t)), e.base = i) : (i = ge(e, "accent"), r = i.base);
        var o = Se(r, t.havingCrampedStyle()), p = i.isShifty && H.isCharacterBox(r), x = 0;
        if (p) {
          var w = H.getBaseElem(r), C = Se(w, t.havingCrampedStyle());
          x = Z(C).skew;
        }
        var I = i.label === "\\c", R = I ? o.height + o.depth : Math.min(o.height, t.fontMetrics().xHeight), P;
        if (i.isStretchy)
          P = It.svgSpan(i, t), P = L.makeVList({ positionType: "firstBaseline", children: [{ type: "elem", elem: o }, { type: "elem", elem: P, wrapperClasses: ["svg-align"], wrapperStyle: x > 0 ? { width: "calc(100% - " + X(2 * x) + ")", marginLeft: X(2 * x) } : void 0 }] }, t);
        else {
          var G, Q;
          i.label === "\\vec" ? (G = L.staticSvg("vec", t), Q = L.svgData.vec[1]) : (G = L.makeOrd({ mode: i.mode, text: i.label }, t, "textord"), G = Z(G), G.italic = 0, Q = G.width, I && (R += G.depth)), P = L.makeSpan(["accent-body"], [G]);
          var J = i.label === "\\textcircled";
          J && (P.classes.push("accent-full"), R = o.height);
          var ae = x;
          J || (ae -= Q / 2), P.style.left = X(ae), i.label === "\\textcircled" && (P.style.top = ".2em"), P = L.makeVList({ positionType: "firstBaseline", children: [{ type: "elem", elem: o }, { type: "kern", size: -R }, { type: "elem", elem: P }] }, t);
        }
        var ue = L.makeSpan(["mord", "accent"], [P], t);
        return a ? (a.children[0] = ue, a.height = Math.max(ue.height, a.height), a.classes[0] = "mord", a) : ue;
      }, Ni = function(e, t) {
        var r = e.isStretchy ? It.mathMLnode(e.label) : new Y.MathNode("mo", [dt(e.label, e.mode)]), i = new Y.MathNode("mover", [Ee(e.base, t), r]);
        return i.setAttribute("accent", "true"), i;
      }, w1 = new RegExp(["\\acute", "\\grave", "\\ddot", "\\tilde", "\\bar", "\\breve", "\\check", "\\hat", "\\vec", "\\dot", "\\mathring"].map(function(h) {
        return "\\" + h;
      }).join("|"));
      re({ type: "accent", names: ["\\acute", "\\grave", "\\ddot", "\\tilde", "\\bar", "\\breve", "\\check", "\\hat", "\\vec", "\\dot", "\\mathring", "\\widecheck", "\\widehat", "\\widetilde", "\\overrightarrow", "\\overleftarrow", "\\Overrightarrow", "\\overleftrightarrow", "\\overgroup", "\\overlinesegment", "\\overleftharpoon", "\\overrightharpoon"], props: { numArgs: 1 }, handler: function(e, t) {
        var r = tr(t[0]), i = !w1.test(e.funcName), a = !i || e.funcName === "\\widehat" || e.funcName === "\\widetilde" || e.funcName === "\\widecheck";
        return { type: "accent", mode: e.parser.mode, label: e.funcName, isStretchy: i, isShifty: a, base: r };
      }, htmlBuilder: $r, mathmlBuilder: Ni }), re({ type: "accent", names: ["\\'", "\\`", "\\^", "\\~", "\\=", "\\u", "\\.", '\\"', "\\c", "\\r", "\\H", "\\v", "\\textcircled"], props: { numArgs: 1, allowedInText: true, allowedInMath: true, argTypes: ["primitive"] }, handler: function(e, t) {
        var r = t[0], i = e.parser.mode;
        return i === "math" && (e.parser.settings.reportNonstrict("mathVsTextAccents", "LaTeX's accent " + e.funcName + " works only in text mode"), i = "text"), { type: "accent", mode: i, label: e.funcName, isStretchy: false, isShifty: true, base: r };
      }, htmlBuilder: $r, mathmlBuilder: Ni }), re({ type: "accentUnder", names: ["\\underleftarrow", "\\underrightarrow", "\\underleftrightarrow", "\\undergroup", "\\underlinesegment", "\\utilde"], props: { numArgs: 1 }, handler: function(e, t) {
        var r = e.parser, i = e.funcName, a = t[0];
        return { type: "accentUnder", mode: r.mode, label: i, base: a };
      }, htmlBuilder: function(e, t) {
        var r = Se(e.base, t), i = It.svgSpan(e, t), a = e.label === "\\utilde" ? 0.12 : 0, o = L.makeVList({ positionType: "top", positionData: r.height, children: [{ type: "elem", elem: i, wrapperClasses: ["svg-align"] }, { type: "kern", size: a }, { type: "elem", elem: r }] }, t);
        return L.makeSpan(["mord", "accentunder"], [o], t);
      }, mathmlBuilder: function(e, t) {
        var r = It.mathMLnode(e.label), i = new Y.MathNode("munder", [Ee(e.base, t), r]);
        return i.setAttribute("accentunder", "true"), i;
      } });
      var ir = function(e) {
        var t = new Y.MathNode("mpadded", e ? [e] : []);
        return t.setAttribute("width", "+0.6em"), t.setAttribute("lspace", "0.3em"), t;
      };
      re({ type: "xArrow", names: ["\\xleftarrow", "\\xrightarrow", "\\xLeftarrow", "\\xRightarrow", "\\xleftrightarrow", "\\xLeftrightarrow", "\\xhookleftarrow", "\\xhookrightarrow", "\\xmapsto", "\\xrightharpoondown", "\\xrightharpoonup", "\\xleftharpoondown", "\\xleftharpoonup", "\\xrightleftharpoons", "\\xleftrightharpoons", "\\xlongequal", "\\xtwoheadrightarrow", "\\xtwoheadleftarrow", "\\xtofrom", "\\xrightleftarrows", "\\xrightequilibrium", "\\xleftequilibrium", "\\\\cdrightarrow", "\\\\cdleftarrow", "\\\\cdlongequal"], props: { numArgs: 1, numOptionalArgs: 1 }, handler: function(e, t, r) {
        var i = e.parser, a = e.funcName;
        return { type: "xArrow", mode: i.mode, label: a, body: t[0], below: r[0] };
      }, htmlBuilder: function(e, t) {
        var r = t.style, i = t.havingStyle(r.sup()), a = L.wrapFragment(Se(e.body, i, t), t), o = e.label.slice(0, 2) === "\\x" ? "x" : "cd";
        a.classes.push(o + "-arrow-pad");
        var p;
        e.below && (i = t.havingStyle(r.sub()), p = L.wrapFragment(Se(e.below, i, t), t), p.classes.push(o + "-arrow-pad"));
        var x = It.svgSpan(e, t), w = -t.fontMetrics().axisHeight + 0.5 * x.height, C = -t.fontMetrics().axisHeight - 0.5 * x.height - 0.111;
        (a.depth > 0.25 || e.label === "\\xleftequilibrium") && (C -= a.depth);
        var I;
        if (p) {
          var R = -t.fontMetrics().axisHeight + p.height + 0.5 * x.height + 0.111;
          I = L.makeVList({ positionType: "individualShift", children: [{ type: "elem", elem: a, shift: C }, { type: "elem", elem: x, shift: w }, { type: "elem", elem: p, shift: R }] }, t);
        } else
          I = L.makeVList({ positionType: "individualShift", children: [{ type: "elem", elem: a, shift: C }, { type: "elem", elem: x, shift: w }] }, t);
        return I.children[0].children[0].children[1].classes.push("svg-align"), L.makeSpan(["mrel", "x-arrow"], [I], t);
      }, mathmlBuilder: function(e, t) {
        var r = It.mathMLnode(e.label);
        r.setAttribute("minsize", e.label.charAt(0) === "x" ? "1.75em" : "3.0em");
        var i;
        if (e.body) {
          var a = ir(Ee(e.body, t));
          if (e.below) {
            var o = ir(Ee(e.below, t));
            i = new Y.MathNode("munderover", [r, o, a]);
          } else
            i = new Y.MathNode("mover", [r, a]);
        } else if (e.below) {
          var p = ir(Ee(e.below, t));
          i = new Y.MathNode("munder", [r, p]);
        } else
          i = ir(), i = new Y.MathNode("mover", [r, i]);
        return i;
      } });
      var k1 = { ">": "\\\\cdrightarrow", "<": "\\\\cdleftarrow", "=": "\\\\cdlongequal", A: "\\uparrow", V: "\\downarrow", "|": "\\Vert", ".": "no arrow" }, Ii = function() {
        return { type: "styling", body: [], mode: "math", style: "display" };
      }, Li = function(e) {
        return e.type === "textord" && e.text === "@";
      }, S1 = function(e, t) {
        return (e.type === "mathord" || e.type === "atom") && e.text === t;
      };
      function A1(h, e, t) {
        var r = k1[h];
        switch (r) {
          case "\\\\cdrightarrow":
          case "\\\\cdleftarrow":
            return t.callFunction(r, [e[0]], [e[1]]);
          case "\\uparrow":
          case "\\downarrow": {
            var i = t.callFunction("\\\\cdleft", [e[0]], []), a = { type: "atom", text: r, mode: "math", family: "rel" }, o = t.callFunction("\\Big", [a], []), p = t.callFunction("\\\\cdright", [e[1]], []), x = { type: "ordgroup", mode: "math", body: [i, o, p] };
            return t.callFunction("\\\\cdparent", [x], []);
          }
          case "\\\\cdlongequal":
            return t.callFunction("\\\\cdlongequal", [], []);
          case "\\Vert": {
            var w = { type: "textord", text: "\\Vert", mode: "math" };
            return t.callFunction("\\Big", [w], []);
          }
          default:
            return { type: "textord", text: " ", mode: "math" };
        }
      }
      function z1(h) {
        var e = [];
        for (h.gullet.beginGroup(), h.gullet.macros.set("\\cr", "\\\\\\relax"), h.gullet.beginGroup(); ; ) {
          e.push(h.parseExpression(false, "\\\\")), h.gullet.endGroup(), h.gullet.beginGroup();
          var t = h.fetch().text;
          if (t === "&" || t === "\\\\")
            h.consume();
          else if (t === "\\end") {
            e[e.length - 1].length === 0 && e.pop();
            break;
          } else
            throw new u("Expected \\\\ or \\cr or \\end", h.nextToken);
        }
        for (var r = [], i = [r], a = 0; a < e.length; a++) {
          for (var o = e[a], p = Ii(), x = 0; x < o.length; x++)
            if (!Li(o[x]))
              p.body.push(o[x]);
            else {
              r.push(p), x += 1;
              var w = Xr(o[x]).text, C = new Array(2);
              if (C[0] = { type: "ordgroup", mode: "math", body: [] }, C[1] = { type: "ordgroup", mode: "math", body: [] }, !("=|.".indexOf(w) > -1))
                if ("<>AV".indexOf(w) > -1)
                  for (var I = 0; I < 2; I++) {
                    for (var R = true, P = x + 1; P < o.length; P++) {
                      if (S1(o[P], w)) {
                        R = false, x = P;
                        break;
                      }
                      if (Li(o[P]))
                        throw new u("Missing a " + w + " character to complete a CD arrow.", o[P]);
                      C[I].body.push(o[P]);
                    }
                    if (R)
                      throw new u("Missing a " + w + " character to complete a CD arrow.", o[x]);
                  }
                else
                  throw new u('Expected one of "<>AV=|." after @', o[x]);
              var G = A1(w, C, h), Q = { type: "styling", body: [G], mode: "math", style: "display" };
              r.push(Q), p = Ii();
            }
          a % 2 === 0 ? r.push(p) : r.shift(), r = [], i.push(r);
        }
        h.gullet.endGroup(), h.gullet.endGroup();
        var J = new Array(i[0].length).fill({ type: "align", align: "c", pregap: 0.25, postgap: 0.25 });
        return { type: "array", mode: "math", body: i, arraystretch: 1, addJot: true, rowGaps: [null], cols: J, colSeparationType: "CD", hLinesBeforeRow: new Array(i.length + 1).fill([]) };
      }
      re({ type: "cdlabel", names: ["\\\\cdleft", "\\\\cdright"], props: { numArgs: 1 }, handler: function(e, t) {
        var r = e.parser, i = e.funcName;
        return { type: "cdlabel", mode: r.mode, side: i.slice(4), label: t[0] };
      }, htmlBuilder: function(e, t) {
        var r = t.havingStyle(t.style.sup()), i = L.wrapFragment(Se(e.label, r, t), t);
        return i.classes.push("cd-label-" + e.side), i.style.bottom = X(0.8 - i.depth), i.height = 0, i.depth = 0, i;
      }, mathmlBuilder: function(e, t) {
        var r = new Y.MathNode("mrow", [Ee(e.label, t)]);
        return r = new Y.MathNode("mpadded", [r]), r.setAttribute("width", "0"), e.side === "left" && r.setAttribute("lspace", "-1width"), r.setAttribute("voffset", "0.7em"), r = new Y.MathNode("mstyle", [r]), r.setAttribute("displaystyle", "false"), r.setAttribute("scriptlevel", "1"), r;
      } }), re({ type: "cdlabelparent", names: ["\\\\cdparent"], props: { numArgs: 1 }, handler: function(e, t) {
        var r = e.parser;
        return { type: "cdlabelparent", mode: r.mode, fragment: t[0] };
      }, htmlBuilder: function(e, t) {
        var r = L.wrapFragment(Se(e.fragment, t), t);
        return r.classes.push("cd-vert-arrow"), r;
      }, mathmlBuilder: function(e, t) {
        return new Y.MathNode("mrow", [Ee(e.fragment, t)]);
      } }), re({ type: "textord", names: ["\\@char"], props: { numArgs: 1, allowedInText: true }, handler: function(e, t) {
        for (var r = e.parser, i = ge(t[0], "ordgroup"), a = i.body, o = "", p = 0; p < a.length; p++) {
          var x = ge(a[p], "textord");
          o += x.text;
        }
        var w = parseInt(o), C;
        if (isNaN(w))
          throw new u("\\@char has non-numeric argument " + o);
        if (w < 0 || w >= 1114111)
          throw new u("\\@char with invalid code point " + o);
        return w <= 65535 ? C = String.fromCharCode(w) : (w -= 65536, C = String.fromCharCode((w >> 10) + 55296, (w & 1023) + 56320)), { type: "textord", mode: r.mode, text: C };
      } });
      var qi = function(e, t) {
        var r = $e(e.body, t.withColor(e.color), false);
        return L.makeFragment(r);
      }, Oi = function(e, t) {
        var r = ot(e.body, t.withColor(e.color)), i = new Y.MathNode("mstyle", r);
        return i.setAttribute("mathcolor", e.color), i;
      };
      re({ type: "color", names: ["\\textcolor"], props: { numArgs: 2, allowedInText: true, argTypes: ["color", "original"] }, handler: function(e, t) {
        var r = e.parser, i = ge(t[0], "color-token").color, a = t[1];
        return { type: "color", mode: r.mode, color: i, body: Ue(a) };
      }, htmlBuilder: qi, mathmlBuilder: Oi }), re({ type: "color", names: ["\\color"], props: { numArgs: 1, allowedInText: true, argTypes: ["color"] }, handler: function(e, t) {
        var r = e.parser, i = e.breakOnTokenText, a = ge(t[0], "color-token").color;
        r.gullet.macros.set("\\current@color", a);
        var o = r.parseExpression(true, i);
        return { type: "color", mode: r.mode, color: a, body: o };
      }, htmlBuilder: qi, mathmlBuilder: Oi }), re({ type: "cr", names: ["\\\\"], props: { numArgs: 0, numOptionalArgs: 1, argTypes: ["size"], allowedInText: true }, handler: function(e, t, r) {
        var i = e.parser, a = r[0], o = !i.settings.displayMode || !i.settings.useStrictBehavior("newLineInDisplayMode", "In LaTeX, \\\\ or \\newline does nothing in display mode");
        return { type: "cr", mode: i.mode, newLine: o, size: a && ge(a, "size").value };
      }, htmlBuilder: function(e, t) {
        var r = L.makeSpan(["mspace"], [], t);
        return e.newLine && (r.classes.push("newline"), e.size && (r.style.marginTop = X(Fe(e.size, t)))), r;
      }, mathmlBuilder: function(e, t) {
        var r = new Y.MathNode("mspace");
        return e.newLine && (r.setAttribute("linebreak", "newline"), e.size && r.setAttribute("height", X(Fe(e.size, t)))), r;
      } });
      var Zr = { "\\global": "\\global", "\\long": "\\\\globallong", "\\\\globallong": "\\\\globallong", "\\def": "\\gdef", "\\gdef": "\\gdef", "\\edef": "\\xdef", "\\xdef": "\\xdef", "\\let": "\\\\globallet", "\\futurelet": "\\\\globalfuture" }, Ri = function(e) {
        var t = e.text;
        if (/^(?:[\\{}$&#^_]|EOF)$/.test(t))
          throw new u("Expected a control sequence", e);
        return t;
      }, C1 = function(e) {
        var t = e.gullet.popToken();
        return t.text === "=" && (t = e.gullet.popToken(), t.text === " " && (t = e.gullet.popToken())), t;
      }, Hi = function(e, t, r, i) {
        var a = e.gullet.macros.get(r.text);
        a == null && (r.noexpand = true, a = { tokens: [r], numArgs: 0, unexpandable: !e.gullet.isExpandable(r.text) }), e.gullet.macros.set(t, a, i);
      };
      re({ type: "internal", names: ["\\global", "\\long", "\\\\globallong"], props: { numArgs: 0, allowedInText: true }, handler: function(e) {
        var t = e.parser, r = e.funcName;
        t.consumeSpaces();
        var i = t.fetch();
        if (Zr[i.text])
          return (r === "\\global" || r === "\\\\globallong") && (i.text = Zr[i.text]), ge(t.parseFunction(), "internal");
        throw new u("Invalid token after macro prefix", i);
      } }), re({ type: "internal", names: ["\\def", "\\gdef", "\\edef", "\\xdef"], props: { numArgs: 0, allowedInText: true, primitive: true }, handler: function(e) {
        var t = e.parser, r = e.funcName, i = t.gullet.popToken(), a = i.text;
        if (/^(?:[\\{}$&#^_]|EOF)$/.test(a))
          throw new u("Expected a control sequence", i);
        for (var o = 0, p, x = [[]]; t.gullet.future().text !== "{"; )
          if (i = t.gullet.popToken(), i.text === "#") {
            if (t.gullet.future().text === "{") {
              p = t.gullet.future(), x[o].push("{");
              break;
            }
            if (i = t.gullet.popToken(), !/^[1-9]$/.test(i.text))
              throw new u('Invalid argument number "' + i.text + '"');
            if (parseInt(i.text) !== o + 1)
              throw new u('Argument number "' + i.text + '" out of order');
            o++, x.push([]);
          } else {
            if (i.text === "EOF")
              throw new u("Expected a macro definition");
            x[o].push(i.text);
          }
        var w = t.gullet.consumeArg(), C = w.tokens;
        return p && C.unshift(p), (r === "\\edef" || r === "\\xdef") && (C = t.gullet.expandTokens(C), C.reverse()), t.gullet.macros.set(a, { tokens: C, numArgs: o, delimiters: x }, r === Zr[r]), { type: "internal", mode: t.mode };
      } }), re({ type: "internal", names: ["\\let", "\\\\globallet"], props: { numArgs: 0, allowedInText: true, primitive: true }, handler: function(e) {
        var t = e.parser, r = e.funcName, i = Ri(t.gullet.popToken());
        t.gullet.consumeSpaces();
        var a = C1(t);
        return Hi(t, i, a, r === "\\\\globallet"), { type: "internal", mode: t.mode };
      } }), re({ type: "internal", names: ["\\futurelet", "\\\\globalfuture"], props: { numArgs: 0, allowedInText: true, primitive: true }, handler: function(e) {
        var t = e.parser, r = e.funcName, i = Ri(t.gullet.popToken()), a = t.gullet.popToken(), o = t.gullet.popToken();
        return Hi(t, i, o, r === "\\\\globalfuture"), t.gullet.pushToken(o), t.gullet.pushToken(a), { type: "internal", mode: t.mode };
      } });
      var M0 = function(e, t, r) {
        var i = ke.math[e] && ke.math[e].replace, a = y0(i || e, t, r);
        if (!a)
          throw new Error("Unsupported symbol " + e + " and font size " + t + ".");
        return a;
      }, Qr = function(e, t, r, i) {
        var a = r.havingBaseStyle(t), o = L.makeSpan(i.concat(a.sizingClasses(r)), [e], r), p = a.sizeMultiplier / r.sizeMultiplier;
        return o.height *= p, o.depth *= p, o.maxFontSize = a.sizeMultiplier, o;
      }, Pi = function(e, t, r) {
        var i = t.havingBaseStyle(r), a = (1 - t.sizeMultiplier / i.sizeMultiplier) * t.fontMetrics().axisHeight;
        e.classes.push("delimcenter"), e.style.top = X(a), e.height -= a, e.depth += a;
      }, B1 = function(e, t, r, i, a, o) {
        var p = L.makeSymbol(e, "Main-Regular", a, i), x = Qr(p, t, i, o);
        return r && Pi(x, i, t), x;
      }, M1 = function(e, t, r, i) {
        return L.makeSymbol(e, "Size" + t + "-Regular", r, i);
      }, Gi = function(e, t, r, i, a, o) {
        var p = M1(e, t, a, i), x = Qr(L.makeSpan(["delimsizing", "size" + t], [p], i), te.TEXT, i, o);
        return r && Pi(x, i, te.TEXT), x;
      }, Kr = function(e, t, r) {
        var i;
        t === "Size1-Regular" ? i = "delim-size1" : i = "delim-size4";
        var a = L.makeSpan(["delimsizinginner", i], [L.makeSpan([], [L.makeSymbol(e, t, r)])]);
        return { type: "elem", elem: a };
      }, Jr = function(e, t, r) {
        var i = pt["Size4-Regular"][e.charCodeAt(0)] ? pt["Size4-Regular"][e.charCodeAt(0)][4] : pt["Size1-Regular"][e.charCodeAt(0)][4], a = new Et("inner", Bt(e, Math.round(1e3 * t))), o = new yt([a], { width: X(i), height: X(t), style: "width:" + X(i), viewBox: "0 0 " + 1e3 * i + " " + Math.round(1e3 * t), preserveAspectRatio: "xMinYMin" }), p = L.makeSvgSpan([], [o], r);
        return p.height = t, p.style.height = X(t), p.style.width = X(i), { type: "elem", elem: p };
      }, _r = 8e-3, ar = { type: "kern", size: -1 * _r }, T1 = ["|", "\\lvert", "\\rvert", "\\vert"], E1 = ["\\|", "\\lVert", "\\rVert", "\\Vert"], Vi = function(e, t, r, i, a, o) {
        var p, x, w, C;
        p = w = C = e, x = null;
        var I = "Size1-Regular";
        e === "\\uparrow" ? w = C = "\u23D0" : e === "\\Uparrow" ? w = C = "\u2016" : e === "\\downarrow" ? p = w = "\u23D0" : e === "\\Downarrow" ? p = w = "\u2016" : e === "\\updownarrow" ? (p = "\\uparrow", w = "\u23D0", C = "\\downarrow") : e === "\\Updownarrow" ? (p = "\\Uparrow", w = "\u2016", C = "\\Downarrow") : H.contains(T1, e) ? w = "\u2223" : H.contains(E1, e) ? w = "\u2225" : e === "[" || e === "\\lbrack" ? (p = "\u23A1", w = "\u23A2", C = "\u23A3", I = "Size4-Regular") : e === "]" || e === "\\rbrack" ? (p = "\u23A4", w = "\u23A5", C = "\u23A6", I = "Size4-Regular") : e === "\\lfloor" || e === "\u230A" ? (w = p = "\u23A2", C = "\u23A3", I = "Size4-Regular") : e === "\\lceil" || e === "\u2308" ? (p = "\u23A1", w = C = "\u23A2", I = "Size4-Regular") : e === "\\rfloor" || e === "\u230B" ? (w = p = "\u23A5", C = "\u23A6", I = "Size4-Regular") : e === "\\rceil" || e === "\u2309" ? (p = "\u23A4", w = C = "\u23A5", I = "Size4-Regular") : e === "(" || e === "\\lparen" ? (p = "\u239B", w = "\u239C", C = "\u239D", I = "Size4-Regular") : e === ")" || e === "\\rparen" ? (p = "\u239E", w = "\u239F", C = "\u23A0", I = "Size4-Regular") : e === "\\{" || e === "\\lbrace" ? (p = "\u23A7", x = "\u23A8", C = "\u23A9", w = "\u23AA", I = "Size4-Regular") : e === "\\}" || e === "\\rbrace" ? (p = "\u23AB", x = "\u23AC", C = "\u23AD", w = "\u23AA", I = "Size4-Regular") : e === "\\lgroup" || e === "\u27EE" ? (p = "\u23A7", C = "\u23A9", w = "\u23AA", I = "Size4-Regular") : e === "\\rgroup" || e === "\u27EF" ? (p = "\u23AB", C = "\u23AD", w = "\u23AA", I = "Size4-Regular") : e === "\\lmoustache" || e === "\u23B0" ? (p = "\u23A7", C = "\u23AD", w = "\u23AA", I = "Size4-Regular") : (e === "\\rmoustache" || e === "\u23B1") && (p = "\u23AB", C = "\u23A9", w = "\u23AA", I = "Size4-Regular");
        var R = M0(p, I, a), P = R.height + R.depth, G = M0(w, I, a), Q = G.height + G.depth, J = M0(C, I, a), ae = J.height + J.depth, ue = 0, me = 1;
        if (x !== null) {
          var Ae = M0(x, I, a);
          ue = Ae.height + Ae.depth, me = 2;
        }
        var Me = P + ae + ue, Ie = Math.max(0, Math.ceil((t - Me) / (me * Q))), Be = Me + Ie * me * Q, Te = i.fontMetrics().axisHeight;
        r && (Te *= i.sizeMultiplier);
        var Re = Be / 2 - Te, De = [];
        if (De.push(Kr(C, I, a)), De.push(ar), x === null) {
          var st = Be - P - ae + 2 * _r;
          De.push(Jr(w, st, i));
        } else {
          var ht = (Be - P - ae - ue) / 2 + 2 * _r;
          De.push(Jr(w, ht, i)), De.push(ar), De.push(Kr(x, I, a)), De.push(ar), De.push(Jr(w, ht, i));
        }
        De.push(ar), De.push(Kr(p, I, a));
        var Ut = i.havingBaseStyle(te.TEXT), At = L.makeVList({ positionType: "bottom", positionData: Re, children: De }, Ut);
        return Qr(L.makeSpan(["delimsizing", "mult"], [At], Ut), te.TEXT, i, o);
      }, en = 80, tn = 0.08, rn = function(e, t, r, i, a) {
        var o = gt(e, i, r), p = new Et(e, o), x = new yt([p], { width: "400em", height: X(t), viewBox: "0 0 400000 " + r, preserveAspectRatio: "xMinYMin slice" });
        return L.makeSvgSpan(["hide-tail"], [x], a);
      }, D1 = function(e, t) {
        var r = t.havingBaseSizing(), i = Yi("\\surd", e * r.sizeMultiplier, Wi, r), a = r.sizeMultiplier, o = Math.max(0, t.minRuleThickness - t.fontMetrics().sqrtRuleThickness), p, x = 0, w = 0, C = 0, I;
        return i.type === "small" ? (C = 1e3 + 1e3 * o + en, e < 1 ? a = 1 : e < 1.4 && (a = 0.7), x = (1 + o + tn) / a, w = (1 + o) / a, p = rn("sqrtMain", x, C, o, t), p.style.minWidth = "0.853em", I = 0.833 / a) : i.type === "large" ? (C = (1e3 + en) * T0[i.size], w = (T0[i.size] + o) / a, x = (T0[i.size] + o + tn) / a, p = rn("sqrtSize" + i.size, x, C, o, t), p.style.minWidth = "1.02em", I = 1 / a) : (x = e + o + tn, w = e + o, C = Math.floor(1e3 * e + o) + en, p = rn("sqrtTall", x, C, o, t), p.style.minWidth = "0.742em", I = 1.056), p.height = w, p.style.height = X(x), { span: p, advanceWidth: I, ruleWidth: (t.fontMetrics().sqrtRuleThickness + o) * a };
      }, Ui = ["(", "\\lparen", ")", "\\rparen", "[", "\\lbrack", "]", "\\rbrack", "\\{", "\\lbrace", "\\}", "\\rbrace", "\\lfloor", "\\rfloor", "\u230A", "\u230B", "\\lceil", "\\rceil", "\u2308", "\u2309", "\\surd"], F1 = ["\\uparrow", "\\downarrow", "\\updownarrow", "\\Uparrow", "\\Downarrow", "\\Updownarrow", "|", "\\|", "\\vert", "\\Vert", "\\lvert", "\\rvert", "\\lVert", "\\rVert", "\\lgroup", "\\rgroup", "\u27EE", "\u27EF", "\\lmoustache", "\\rmoustache", "\u23B0", "\u23B1"], ji = ["<", ">", "\\langle", "\\rangle", "/", "\\backslash", "\\lt", "\\gt"], T0 = [0, 1.2, 1.8, 2.4, 3], N1 = function(e, t, r, i, a) {
        if (e === "<" || e === "\\lt" || e === "\u27E8" ? e = "\\langle" : (e === ">" || e === "\\gt" || e === "\u27E9") && (e = "\\rangle"), H.contains(Ui, e) || H.contains(ji, e))
          return Gi(e, t, false, r, i, a);
        if (H.contains(F1, e))
          return Vi(e, T0[t], false, r, i, a);
        throw new u("Illegal delimiter: '" + e + "'");
      }, I1 = [{ type: "small", style: te.SCRIPTSCRIPT }, { type: "small", style: te.SCRIPT }, { type: "small", style: te.TEXT }, { type: "large", size: 1 }, { type: "large", size: 2 }, { type: "large", size: 3 }, { type: "large", size: 4 }], L1 = [{ type: "small", style: te.SCRIPTSCRIPT }, { type: "small", style: te.SCRIPT }, { type: "small", style: te.TEXT }, { type: "stack" }], Wi = [{ type: "small", style: te.SCRIPTSCRIPT }, { type: "small", style: te.SCRIPT }, { type: "small", style: te.TEXT }, { type: "large", size: 1 }, { type: "large", size: 2 }, { type: "large", size: 3 }, { type: "large", size: 4 }, { type: "stack" }], q1 = function(e) {
        if (e.type === "small")
          return "Main-Regular";
        if (e.type === "large")
          return "Size" + e.size + "-Regular";
        if (e.type === "stack")
          return "Size4-Regular";
        throw new Error("Add support for delim type '" + e.type + "' here.");
      }, Yi = function(e, t, r, i) {
        for (var a = Math.min(2, 3 - i.style.size), o = a; o < r.length && r[o].type !== "stack"; o++) {
          var p = M0(e, q1(r[o]), "math"), x = p.height + p.depth;
          if (r[o].type === "small") {
            var w = i.havingBaseStyle(r[o].style);
            x *= w.sizeMultiplier;
          }
          if (x > t)
            return r[o];
        }
        return r[r.length - 1];
      }, Xi = function(e, t, r, i, a, o) {
        e === "<" || e === "\\lt" || e === "\u27E8" ? e = "\\langle" : (e === ">" || e === "\\gt" || e === "\u27E9") && (e = "\\rangle");
        var p;
        H.contains(ji, e) ? p = I1 : H.contains(Ui, e) ? p = Wi : p = L1;
        var x = Yi(e, t, p, i);
        return x.type === "small" ? B1(e, x.style, r, i, a, o) : x.type === "large" ? Gi(e, x.size, r, i, a, o) : Vi(e, t, r, i, a, o);
      }, O1 = function(e, t, r, i, a, o) {
        var p = i.fontMetrics().axisHeight * i.sizeMultiplier, x = 901, w = 5 / i.fontMetrics().ptPerEm, C = Math.max(t - p, r + p), I = Math.max(C / 500 * x, 2 * C - w);
        return Xi(e, I, true, i, a, o);
      }, Lt = { sqrtImage: D1, sizedDelim: N1, sizeToMaxHeight: T0, customSizedDelim: Xi, leftRightDelim: O1 }, $i = { "\\bigl": { mclass: "mopen", size: 1 }, "\\Bigl": { mclass: "mopen", size: 2 }, "\\biggl": { mclass: "mopen", size: 3 }, "\\Biggl": { mclass: "mopen", size: 4 }, "\\bigr": { mclass: "mclose", size: 1 }, "\\Bigr": { mclass: "mclose", size: 2 }, "\\biggr": { mclass: "mclose", size: 3 }, "\\Biggr": { mclass: "mclose", size: 4 }, "\\bigm": { mclass: "mrel", size: 1 }, "\\Bigm": { mclass: "mrel", size: 2 }, "\\biggm": { mclass: "mrel", size: 3 }, "\\Biggm": { mclass: "mrel", size: 4 }, "\\big": { mclass: "mord", size: 1 }, "\\Big": { mclass: "mord", size: 2 }, "\\bigg": { mclass: "mord", size: 3 }, "\\Bigg": { mclass: "mord", size: 4 } }, R1 = ["(", "\\lparen", ")", "\\rparen", "[", "\\lbrack", "]", "\\rbrack", "\\{", "\\lbrace", "\\}", "\\rbrace", "\\lfloor", "\\rfloor", "\u230A", "\u230B", "\\lceil", "\\rceil", "\u2308", "\u2309", "<", ">", "\\langle", "\u27E8", "\\rangle", "\u27E9", "\\lt", "\\gt", "\\lvert", "\\rvert", "\\lVert", "\\rVert", "\\lgroup", "\\rgroup", "\u27EE", "\u27EF", "\\lmoustache", "\\rmoustache", "\u23B0", "\u23B1", "/", "\\backslash", "|", "\\vert", "\\|", "\\Vert", "\\uparrow", "\\Uparrow", "\\downarrow", "\\Downarrow", "\\updownarrow", "\\Updownarrow", "."];
      function lr(h, e) {
        var t = nr(h);
        if (t && H.contains(R1, t.text))
          return t;
        throw t ? new u("Invalid delimiter '" + t.text + "' after '" + e.funcName + "'", h) : new u("Invalid delimiter type '" + h.type + "'", h);
      }
      re({ type: "delimsizing", names: ["\\bigl", "\\Bigl", "\\biggl", "\\Biggl", "\\bigr", "\\Bigr", "\\biggr", "\\Biggr", "\\bigm", "\\Bigm", "\\biggm", "\\Biggm", "\\big", "\\Big", "\\bigg", "\\Bigg"], props: { numArgs: 1, argTypes: ["primitive"] }, handler: function(e, t) {
        var r = lr(t[0], e);
        return { type: "delimsizing", mode: e.parser.mode, size: $i[e.funcName].size, mclass: $i[e.funcName].mclass, delim: r.text };
      }, htmlBuilder: function(e, t) {
        return e.delim === "." ? L.makeSpan([e.mclass]) : Lt.sizedDelim(e.delim, e.size, t, e.mode, [e.mclass]);
      }, mathmlBuilder: function(e) {
        var t = [];
        e.delim !== "." && t.push(dt(e.delim, e.mode));
        var r = new Y.MathNode("mo", t);
        e.mclass === "mopen" || e.mclass === "mclose" ? r.setAttribute("fence", "true") : r.setAttribute("fence", "false"), r.setAttribute("stretchy", "true");
        var i = X(Lt.sizeToMaxHeight[e.size]);
        return r.setAttribute("minsize", i), r.setAttribute("maxsize", i), r;
      } });
      function Zi(h) {
        if (!h.body)
          throw new Error("Bug: The leftright ParseNode wasn't fully parsed.");
      }
      re({ type: "leftright-right", names: ["\\right"], props: { numArgs: 1, primitive: true }, handler: function(e, t) {
        var r = e.parser.gullet.macros.get("\\current@color");
        if (r && typeof r != "string")
          throw new u("\\current@color set to non-string in \\right");
        return { type: "leftright-right", mode: e.parser.mode, delim: lr(t[0], e).text, color: r };
      } }), re({ type: "leftright", names: ["\\left"], props: { numArgs: 1, primitive: true }, handler: function(e, t) {
        var r = lr(t[0], e), i = e.parser;
        ++i.leftrightDepth;
        var a = i.parseExpression(false);
        --i.leftrightDepth, i.expect("\\right", false);
        var o = ge(i.parseFunction(), "leftright-right");
        return { type: "leftright", mode: i.mode, body: a, left: r.text, right: o.delim, rightColor: o.color };
      }, htmlBuilder: function(e, t) {
        Zi(e);
        for (var r = $e(e.body, t, true, ["mopen", "mclose"]), i = 0, a = 0, o = false, p = 0; p < r.length; p++)
          r[p].isMiddle ? o = true : (i = Math.max(r[p].height, i), a = Math.max(r[p].depth, a));
        i *= t.sizeMultiplier, a *= t.sizeMultiplier;
        var x;
        if (e.left === "." ? x = C0(t, ["mopen"]) : x = Lt.leftRightDelim(e.left, i, a, t, e.mode, ["mopen"]), r.unshift(x), o)
          for (var w = 1; w < r.length; w++) {
            var C = r[w], I = C.isMiddle;
            I && (r[w] = Lt.leftRightDelim(I.delim, i, a, I.options, e.mode, []));
          }
        var R;
        if (e.right === ".")
          R = C0(t, ["mclose"]);
        else {
          var P = e.rightColor ? t.withColor(e.rightColor) : t;
          R = Lt.leftRightDelim(e.right, i, a, P, e.mode, ["mclose"]);
        }
        return r.push(R), L.makeSpan(["minner"], r, t);
      }, mathmlBuilder: function(e, t) {
        Zi(e);
        var r = ot(e.body, t);
        if (e.left !== ".") {
          var i = new Y.MathNode("mo", [dt(e.left, e.mode)]);
          i.setAttribute("fence", "true"), r.unshift(i);
        }
        if (e.right !== ".") {
          var a = new Y.MathNode("mo", [dt(e.right, e.mode)]);
          a.setAttribute("fence", "true"), e.rightColor && a.setAttribute("mathcolor", e.rightColor), r.push(a);
        }
        return Wr(r);
      } }), re({ type: "middle", names: ["\\middle"], props: { numArgs: 1, primitive: true }, handler: function(e, t) {
        var r = lr(t[0], e);
        if (!e.parser.leftrightDepth)
          throw new u("\\middle without preceding \\left", r);
        return { type: "middle", mode: e.parser.mode, delim: r.text };
      }, htmlBuilder: function(e, t) {
        var r;
        if (e.delim === ".")
          r = C0(t, []);
        else {
          r = Lt.sizedDelim(e.delim, 1, t, e.mode, []);
          var i = { delim: e.delim, options: t };
          r.isMiddle = i;
        }
        return r;
      }, mathmlBuilder: function(e, t) {
        var r = e.delim === "\\vert" || e.delim === "|" ? dt("|", "text") : dt(e.delim, e.mode), i = new Y.MathNode("mo", [r]);
        return i.setAttribute("fence", "true"), i.setAttribute("lspace", "0.05em"), i.setAttribute("rspace", "0.05em"), i;
      } });
      var nn = function(e, t) {
        var r = L.wrapFragment(Se(e.body, t), t), i = e.label.substr(1), a = t.sizeMultiplier, o, p = 0, x = H.isCharacterBox(e.body);
        if (i === "sout")
          o = L.makeSpan(["stretchy", "sout"]), o.height = t.fontMetrics().defaultRuleThickness / a, p = -0.5 * t.fontMetrics().xHeight;
        else if (i === "phase") {
          var w = Fe({ number: 0.6, unit: "pt" }, t), C = Fe({ number: 0.35, unit: "ex" }, t), I = t.havingBaseSizing();
          a = a / I.sizeMultiplier;
          var R = r.height + r.depth + w + C;
          r.style.paddingLeft = X(R / 2 + w);
          var P = Math.floor(1e3 * R * a), G = Ye(P), Q = new yt([new Et("phase", G)], { width: "400em", height: X(P / 1e3), viewBox: "0 0 400000 " + P, preserveAspectRatio: "xMinYMin slice" });
          o = L.makeSvgSpan(["hide-tail"], [Q], t), o.style.height = X(R), p = r.depth + w + C;
        } else {
          /cancel/.test(i) ? x || r.classes.push("cancel-pad") : i === "angl" ? r.classes.push("anglpad") : r.classes.push("boxpad");
          var J = 0, ae = 0, ue = 0;
          /box/.test(i) ? (ue = Math.max(t.fontMetrics().fboxrule, t.minRuleThickness), J = t.fontMetrics().fboxsep + (i === "colorbox" ? 0 : ue), ae = J) : i === "angl" ? (ue = Math.max(t.fontMetrics().defaultRuleThickness, t.minRuleThickness), J = 4 * ue, ae = Math.max(0, 0.25 - r.depth)) : (J = x ? 0.2 : 0, ae = J), o = It.encloseSpan(r, i, J, ae, t), /fbox|boxed|fcolorbox/.test(i) ? (o.style.borderStyle = "solid", o.style.borderWidth = X(ue)) : i === "angl" && ue !== 0.049 && (o.style.borderTopWidth = X(ue), o.style.borderRightWidth = X(ue)), p = r.depth + ae, e.backgroundColor && (o.style.backgroundColor = e.backgroundColor, e.borderColor && (o.style.borderColor = e.borderColor));
        }
        var me;
        if (e.backgroundColor)
          me = L.makeVList({ positionType: "individualShift", children: [{ type: "elem", elem: o, shift: p }, { type: "elem", elem: r, shift: 0 }] }, t);
        else {
          var Ae = /cancel|phase/.test(i) ? ["svg-align"] : [];
          me = L.makeVList({ positionType: "individualShift", children: [{ type: "elem", elem: r, shift: 0 }, { type: "elem", elem: o, shift: p, wrapperClasses: Ae }] }, t);
        }
        return /cancel/.test(i) && (me.height = r.height, me.depth = r.depth), /cancel/.test(i) && !x ? L.makeSpan(["mord", "cancel-lap"], [me], t) : L.makeSpan(["mord"], [me], t);
      }, an = function(e, t) {
        var r = 0, i = new Y.MathNode(e.label.indexOf("colorbox") > -1 ? "mpadded" : "menclose", [Ee(e.body, t)]);
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
      re({ type: "enclose", names: ["\\colorbox"], props: { numArgs: 2, allowedInText: true, argTypes: ["color", "text"] }, handler: function(e, t, r) {
        var i = e.parser, a = e.funcName, o = ge(t[0], "color-token").color, p = t[1];
        return { type: "enclose", mode: i.mode, label: a, backgroundColor: o, body: p };
      }, htmlBuilder: nn, mathmlBuilder: an }), re({ type: "enclose", names: ["\\fcolorbox"], props: { numArgs: 3, allowedInText: true, argTypes: ["color", "color", "text"] }, handler: function(e, t, r) {
        var i = e.parser, a = e.funcName, o = ge(t[0], "color-token").color, p = ge(t[1], "color-token").color, x = t[2];
        return { type: "enclose", mode: i.mode, label: a, backgroundColor: p, borderColor: o, body: x };
      }, htmlBuilder: nn, mathmlBuilder: an }), re({ type: "enclose", names: ["\\fbox"], props: { numArgs: 1, argTypes: ["hbox"], allowedInText: true }, handler: function(e, t) {
        var r = e.parser;
        return { type: "enclose", mode: r.mode, label: "\\fbox", body: t[0] };
      } }), re({ type: "enclose", names: ["\\cancel", "\\bcancel", "\\xcancel", "\\sout", "\\phase"], props: { numArgs: 1 }, handler: function(e, t) {
        var r = e.parser, i = e.funcName, a = t[0];
        return { type: "enclose", mode: r.mode, label: i, body: a };
      }, htmlBuilder: nn, mathmlBuilder: an }), re({ type: "enclose", names: ["\\angl"], props: { numArgs: 1, argTypes: ["hbox"], allowedInText: false }, handler: function(e, t) {
        var r = e.parser;
        return { type: "enclose", mode: r.mode, label: "\\angl", body: t[0] };
      } });
      var Qi = {};
      function wt(h) {
        for (var e = h.type, t = h.names, r = h.props, i = h.handler, a = h.htmlBuilder, o = h.mathmlBuilder, p = { type: e, numArgs: r.numArgs || 0, allowedInText: false, numOptionalArgs: 0, handler: i }, x = 0; x < t.length; ++x)
          Qi[t[x]] = p;
        a && (_0[e] = a), o && (er[e] = o);
      }
      function Ki(h) {
        var e = [];
        h.consumeSpaces();
        for (var t = h.fetch().text; t === "\\hline" || t === "\\hdashline"; )
          h.consume(), e.push(t === "\\hdashline"), h.consumeSpaces(), t = h.fetch().text;
        return e;
      }
      var ur = function(e) {
        var t = e.parser.settings;
        if (!t.displayMode)
          throw new u("{" + e.envName + "} can be used only in display mode.");
      };
      function Gt(h, e, t) {
        var r = e.hskipBeforeAndAfter, i = e.addJot, a = e.cols, o = e.arraystretch, p = e.colSeparationType, x = e.addEqnNum, w = e.singleRow, C = e.emptySingleRow, I = e.maxNumCols, R = e.leqno;
        if (h.gullet.beginGroup(), w || h.gullet.macros.set("\\cr", "\\\\\\relax"), !o) {
          var P = h.gullet.expandMacroAsText("\\arraystretch");
          if (P == null)
            o = 1;
          else if (o = parseFloat(P), !o || o < 0)
            throw new u("Invalid \\arraystretch: " + P);
        }
        h.gullet.beginGroup();
        var G = [], Q = [G], J = [], ae = [];
        for (ae.push(Ki(h)); ; ) {
          var ue = h.parseExpression(false, w ? "\\end" : "\\\\");
          h.gullet.endGroup(), h.gullet.beginGroup(), ue = { type: "ordgroup", mode: h.mode, body: ue }, t && (ue = { type: "styling", mode: h.mode, style: t, body: [ue] }), G.push(ue);
          var me = h.fetch().text;
          if (me === "&") {
            if (I && G.length === I) {
              if (w || p)
                throw new u("Too many tab characters: &", h.nextToken);
              h.settings.reportNonstrict("textEnv", "Too few columns specified in the {array} column argument.");
            }
            h.consume();
          } else if (me === "\\end") {
            G.length === 1 && ue.type === "styling" && ue.body[0].body.length === 0 && (Q.length > 1 || !C) && Q.pop(), ae.length < Q.length + 1 && ae.push([]);
            break;
          } else if (me === "\\\\") {
            h.consume();
            var Ae = void 0;
            h.gullet.future().text !== " " && (Ae = h.parseSizeGroup(true)), J.push(Ae ? Ae.value : null), ae.push(Ki(h)), G = [], Q.push(G);
          } else
            throw new u("Expected & or \\\\ or \\cr or \\end", h.nextToken);
        }
        return h.gullet.endGroup(), h.gullet.endGroup(), { type: "array", mode: h.mode, addJot: i, arraystretch: o, body: Q, cols: a, rowGaps: J, hskipBeforeAndAfter: r, hLinesBeforeRow: ae, colSeparationType: p, addEqnNum: x, leqno: R };
      }
      function ln(h) {
        return h.substr(0, 1) === "d" ? "display" : "text";
      }
      var kt = function(e, t) {
        var r, i, a = e.body.length, o = e.hLinesBeforeRow, p = 0, x = new Array(a), w = [], C = Math.max(t.fontMetrics().arrayRuleWidth, t.minRuleThickness), I = 1 / t.fontMetrics().ptPerEm, R = 5 * I;
        if (e.colSeparationType && e.colSeparationType === "small") {
          var P = t.havingStyle(te.SCRIPT).sizeMultiplier;
          R = 0.2778 * (P / t.sizeMultiplier);
        }
        var G = e.colSeparationType === "CD" ? Fe({ number: 3, unit: "ex" }, t) : 12 * I, Q = 3 * I, J = e.arraystretch * G, ae = 0.7 * J, ue = 0.3 * J, me = 0;
        function Ae(Ra) {
          for (var hr = 0; hr < Ra.length; ++hr)
            hr > 0 && (me += 0.25), w.push({ pos: me, isDashed: Ra[hr] });
        }
        for (Ae(o[0]), r = 0; r < e.body.length; ++r) {
          var Me = e.body[r], Ie = ae, Be = ue;
          p < Me.length && (p = Me.length);
          var Te = new Array(Me.length);
          for (i = 0; i < Me.length; ++i) {
            var Re = Se(Me[i], t);
            Be < Re.depth && (Be = Re.depth), Ie < Re.height && (Ie = Re.height), Te[i] = Re;
          }
          var De = e.rowGaps[r], st = 0;
          De && (st = Fe(De, t), st > 0 && (st += ue, Be < st && (Be = st), st = 0)), e.addJot && (Be += Q), Te.height = Ie, Te.depth = Be, me += Ie, Te.pos = me, me += Be + st, x[r] = Te, Ae(o[r + 1]);
        }
        var ht = me / 2 + t.fontMetrics().axisHeight, Ut = e.cols || [], At = [], mt, p0, Na = [];
        if (e.addEqnNum)
          for (r = 0; r < a; ++r) {
            var bn = x[r], co = bn.pos - ht, yn = L.makeSpan(["eqn-num"], [], t);
            yn.depth = bn.depth, yn.height = bn.height, Na.push({ type: "elem", elem: yn, shift: co });
          }
        for (i = 0, p0 = 0; i < p || p0 < Ut.length; ++i, ++p0) {
          for (var qt = Ut[p0] || {}, Ia = true; qt.type === "separator"; ) {
            if (Ia || (mt = L.makeSpan(["arraycolsep"], []), mt.style.width = X(t.fontMetrics().doubleRuleSep), At.push(mt)), qt.separator === "|" || qt.separator === ":") {
              var po = qt.separator === "|" ? "solid" : "dashed", f0 = L.makeSpan(["vertical-separator"], [], t);
              f0.style.height = X(me), f0.style.borderRightWidth = X(C), f0.style.borderRightStyle = po, f0.style.margin = "0 " + X(-C / 2);
              var La = me - ht;
              La && (f0.style.verticalAlign = X(-La)), At.push(f0);
            } else
              throw new u("Invalid separator type: " + qt.separator);
            p0++, qt = Ut[p0] || {}, Ia = false;
          }
          if (!(i >= p)) {
            var d0 = void 0;
            (i > 0 || e.hskipBeforeAndAfter) && (d0 = H.deflt(qt.pregap, R), d0 !== 0 && (mt = L.makeSpan(["arraycolsep"], []), mt.style.width = X(d0), At.push(mt)));
            var g0 = [];
            for (r = 0; r < a; ++r) {
              var or = x[r], sr = or[i];
              if (sr) {
                var fo = or.pos - ht;
                sr.depth = or.depth, sr.height = or.height, g0.push({ type: "elem", elem: sr, shift: fo });
              }
            }
            g0 = L.makeVList({ positionType: "individualShift", children: g0 }, t), g0 = L.makeSpan(["col-align-" + (qt.align || "c")], [g0]), At.push(g0), (i < p - 1 || e.hskipBeforeAndAfter) && (d0 = H.deflt(qt.postgap, R), d0 !== 0 && (mt = L.makeSpan(["arraycolsep"], []), mt.style.width = X(d0), At.push(mt)));
          }
        }
        if (x = L.makeSpan(["mtable"], At), w.length > 0) {
          for (var go = L.makeLineSpan("hline", t, C), vo = L.makeLineSpan("hdashline", t, C), wn = [{ type: "elem", elem: x, shift: 0 }]; w.length > 0; ) {
            var qa = w.pop(), Oa = qa.pos - ht;
            qa.isDashed ? wn.push({ type: "elem", elem: vo, shift: Oa }) : wn.push({ type: "elem", elem: go, shift: Oa });
          }
          x = L.makeVList({ positionType: "individualShift", children: wn }, t);
        }
        if (e.addEqnNum) {
          var kn = L.makeVList({ positionType: "individualShift", children: Na }, t);
          return kn = L.makeSpan(["tag"], [kn], t), L.makeFragment([x, kn]);
        } else
          return L.makeSpan(["mord"], [x], t);
      }, H1 = { c: "center ", l: "left ", r: "right " }, St = function(e, t) {
        for (var r = [], i = new Y.MathNode("mtd", [], ["mtr-glue"]), a = new Y.MathNode("mtd", [], ["mml-eqn-num"]), o = 0; o < e.body.length; o++) {
          for (var p = e.body[o], x = [], w = 0; w < p.length; w++)
            x.push(new Y.MathNode("mtd", [Ee(p[w], t)]));
          e.addEqnNum && (x.unshift(i), x.push(i), e.leqno ? x.unshift(a) : x.push(a)), r.push(new Y.MathNode("mtr", x));
        }
        var C = new Y.MathNode("mtable", r), I = e.arraystretch === 0.5 ? 0.1 : 0.16 + e.arraystretch - 1 + (e.addJot ? 0.09 : 0);
        C.setAttribute("rowspacing", X(I));
        var R = "", P = "";
        if (e.cols && e.cols.length > 0) {
          var G = e.cols, Q = "", J = false, ae = 0, ue = G.length;
          G[0].type === "separator" && (R += "top ", ae = 1), G[G.length - 1].type === "separator" && (R += "bottom ", ue -= 1);
          for (var me = ae; me < ue; me++)
            G[me].type === "align" ? (P += H1[G[me].align], J && (Q += "none "), J = true) : G[me].type === "separator" && J && (Q += G[me].separator === "|" ? "solid " : "dashed ", J = false);
          C.setAttribute("columnalign", P.trim()), /[sd]/.test(Q) && C.setAttribute("columnlines", Q.trim());
        }
        if (e.colSeparationType === "align") {
          for (var Ae = e.cols || [], Me = "", Ie = 1; Ie < Ae.length; Ie++)
            Me += Ie % 2 ? "0em " : "1em ";
          C.setAttribute("columnspacing", Me.trim());
        } else
          e.colSeparationType === "alignat" || e.colSeparationType === "gather" ? C.setAttribute("columnspacing", "0em") : e.colSeparationType === "small" ? C.setAttribute("columnspacing", "0.2778em") : e.colSeparationType === "CD" ? C.setAttribute("columnspacing", "0.5em") : C.setAttribute("columnspacing", "1em");
        var Be = "", Te = e.hLinesBeforeRow;
        R += Te[0].length > 0 ? "left " : "", R += Te[Te.length - 1].length > 0 ? "right " : "";
        for (var Re = 1; Re < Te.length - 1; Re++)
          Be += Te[Re].length === 0 ? "none " : Te[Re][0] ? "dashed " : "solid ";
        return /[sd]/.test(Be) && C.setAttribute("rowlines", Be.trim()), R !== "" && (C = new Y.MathNode("menclose", [C]), C.setAttribute("notation", R.trim())), e.arraystretch && e.arraystretch < 1 && (C = new Y.MathNode("mstyle", [C]), C.setAttribute("scriptlevel", "1")), C;
      }, Ji = function(e, t) {
        e.envName.indexOf("ed") === -1 && ur(e);
        var r = [], i = e.envName.indexOf("at") > -1 ? "alignat" : "align", a = Gt(e.parser, { cols: r, addJot: true, addEqnNum: e.envName === "align" || e.envName === "alignat", emptySingleRow: true, colSeparationType: i, maxNumCols: e.envName === "split" ? 2 : void 0, leqno: e.parser.settings.leqno }, "display"), o, p = 0, x = { type: "ordgroup", mode: e.mode, body: [] };
        if (t[0] && t[0].type === "ordgroup") {
          for (var w = "", C = 0; C < t[0].body.length; C++) {
            var I = ge(t[0].body[C], "textord");
            w += I.text;
          }
          o = Number(w), p = o * 2;
        }
        var R = !p;
        a.body.forEach(function(J) {
          for (var ae = 1; ae < J.length; ae += 2) {
            var ue = ge(J[ae], "styling"), me = ge(ue.body[0], "ordgroup");
            me.body.unshift(x);
          }
          if (R)
            p < J.length && (p = J.length);
          else {
            var Ae = J.length / 2;
            if (o < Ae)
              throw new u("Too many math in a row: " + ("expected " + o + ", but got " + Ae), J[0]);
          }
        });
        for (var P = 0; P < p; ++P) {
          var G = "r", Q = 0;
          P % 2 === 1 ? G = "l" : P > 0 && R && (Q = 1), r[P] = { type: "align", align: G, pregap: Q, postgap: 0 };
        }
        return a.colSeparationType = R ? "align" : "alignat", a;
      };
      wt({ type: "array", names: ["array", "darray"], props: { numArgs: 1 }, handler: function(e, t) {
        var r = nr(t[0]), i = r ? [t[0]] : ge(t[0], "ordgroup").body, a = i.map(function(p) {
          var x = Xr(p), w = x.text;
          if ("lcr".indexOf(w) !== -1)
            return { type: "align", align: w };
          if (w === "|")
            return { type: "separator", separator: "|" };
          if (w === ":")
            return { type: "separator", separator: ":" };
          throw new u("Unknown column alignment: " + w, p);
        }), o = { cols: a, hskipBeforeAndAfter: true, maxNumCols: a.length };
        return Gt(e.parser, o, ln(e.envName));
      }, htmlBuilder: kt, mathmlBuilder: St }), wt({ type: "array", names: ["matrix", "pmatrix", "bmatrix", "Bmatrix", "vmatrix", "Vmatrix", "matrix*", "pmatrix*", "bmatrix*", "Bmatrix*", "vmatrix*", "Vmatrix*"], props: { numArgs: 0 }, handler: function(e) {
        var t = { matrix: null, pmatrix: ["(", ")"], bmatrix: ["[", "]"], Bmatrix: ["\\{", "\\}"], vmatrix: ["|", "|"], Vmatrix: ["\\Vert", "\\Vert"] }[e.envName.replace("*", "")], r = "c", i = { hskipBeforeAndAfter: false, cols: [{ type: "align", align: r }] };
        if (e.envName.charAt(e.envName.length - 1) === "*") {
          var a = e.parser;
          if (a.consumeSpaces(), a.fetch().text === "[") {
            if (a.consume(), a.consumeSpaces(), r = a.fetch().text, "lcr".indexOf(r) === -1)
              throw new u("Expected l or c or r", a.nextToken);
            a.consume(), a.consumeSpaces(), a.expect("]"), a.consume(), i.cols = [{ type: "align", align: r }];
          }
        }
        var o = Gt(e.parser, i, ln(e.envName)), p = Math.max.apply(Math, [0].concat(o.body.map(function(x) {
          return x.length;
        })));
        return o.cols = new Array(p).fill({ type: "align", align: r }), t ? { type: "leftright", mode: e.mode, body: [o], left: t[0], right: t[1], rightColor: void 0 } : o;
      }, htmlBuilder: kt, mathmlBuilder: St }), wt({ type: "array", names: ["smallmatrix"], props: { numArgs: 0 }, handler: function(e) {
        var t = { arraystretch: 0.5 }, r = Gt(e.parser, t, "script");
        return r.colSeparationType = "small", r;
      }, htmlBuilder: kt, mathmlBuilder: St }), wt({ type: "array", names: ["subarray"], props: { numArgs: 1 }, handler: function(e, t) {
        var r = nr(t[0]), i = r ? [t[0]] : ge(t[0], "ordgroup").body, a = i.map(function(p) {
          var x = Xr(p), w = x.text;
          if ("lc".indexOf(w) !== -1)
            return { type: "align", align: w };
          throw new u("Unknown column alignment: " + w, p);
        });
        if (a.length > 1)
          throw new u("{subarray} can contain only one column");
        var o = { cols: a, hskipBeforeAndAfter: false, arraystretch: 0.5 };
        if (o = Gt(e.parser, o, "script"), o.body.length > 0 && o.body[0].length > 1)
          throw new u("{subarray} can contain only one column");
        return o;
      }, htmlBuilder: kt, mathmlBuilder: St }), wt({ type: "array", names: ["cases", "dcases", "rcases", "drcases"], props: { numArgs: 0 }, handler: function(e) {
        var t = { arraystretch: 1.2, cols: [{ type: "align", align: "l", pregap: 0, postgap: 1 }, { type: "align", align: "l", pregap: 0, postgap: 0 }] }, r = Gt(e.parser, t, ln(e.envName));
        return { type: "leftright", mode: e.mode, body: [r], left: e.envName.indexOf("r") > -1 ? "." : "\\{", right: e.envName.indexOf("r") > -1 ? "\\}" : ".", rightColor: void 0 };
      }, htmlBuilder: kt, mathmlBuilder: St }), wt({ type: "array", names: ["align", "align*", "aligned", "split"], props: { numArgs: 0 }, handler: Ji, htmlBuilder: kt, mathmlBuilder: St }), wt({ type: "array", names: ["gathered", "gather", "gather*"], props: { numArgs: 0 }, handler: function(e) {
        H.contains(["gather", "gather*"], e.envName) && ur(e);
        var t = { cols: [{ type: "align", align: "c" }], addJot: true, colSeparationType: "gather", addEqnNum: e.envName === "gather", emptySingleRow: true, leqno: e.parser.settings.leqno };
        return Gt(e.parser, t, "display");
      }, htmlBuilder: kt, mathmlBuilder: St }), wt({ type: "array", names: ["alignat", "alignat*", "alignedat"], props: { numArgs: 1 }, handler: Ji, htmlBuilder: kt, mathmlBuilder: St }), wt({ type: "array", names: ["equation", "equation*"], props: { numArgs: 0 }, handler: function(e) {
        ur(e);
        var t = { addEqnNum: e.envName === "equation", emptySingleRow: true, singleRow: true, maxNumCols: 1, leqno: e.parser.settings.leqno };
        return Gt(e.parser, t, "display");
      }, htmlBuilder: kt, mathmlBuilder: St }), wt({ type: "array", names: ["CD"], props: { numArgs: 0 }, handler: function(e) {
        return ur(e), z1(e.parser);
      }, htmlBuilder: kt, mathmlBuilder: St }), re({ type: "text", names: ["\\hline", "\\hdashline"], props: { numArgs: 0, allowedInText: true, allowedInMath: true }, handler: function(e, t) {
        throw new u(e.funcName + " valid only within array environment");
      } });
      var P1 = Qi, _i = P1;
      re({ type: "environment", names: ["\\begin", "\\end"], props: { numArgs: 1, argTypes: ["text"] }, handler: function(e, t) {
        var r = e.parser, i = e.funcName, a = t[0];
        if (a.type !== "ordgroup")
          throw new u("Invalid environment name", a);
        for (var o = "", p = 0; p < a.body.length; ++p)
          o += ge(a.body[p], "textord").text;
        if (i === "\\begin") {
          if (!_i.hasOwnProperty(o))
            throw new u("No such environment: " + o, a);
          var x = _i[o], w = r.parseArguments("\\begin{" + o + "}", x), C = w.args, I = w.optArgs, R = { mode: r.mode, envName: o, parser: r }, P = x.handler(R, C, I);
          r.expect("\\end", false);
          var G = r.nextToken, Q = ge(r.parseFunction(), "environment");
          if (Q.name !== o)
            throw new u("Mismatch: \\begin{" + o + "} matched by \\end{" + Q.name + "}", G);
          return P;
        }
        return { type: "environment", mode: r.mode, name: o, nameGroup: a };
      } });
      var G1 = L.makeSpan;
      function ea(h, e) {
        var t = $e(h.body, e, true);
        return G1([h.mclass], t, e);
      }
      function ta(h, e) {
        var t, r = ot(h.body, e);
        return h.mclass === "minner" ? Y.newDocumentFragment(r) : (h.mclass === "mord" ? h.isCharacterBox ? (t = r[0], t.type = "mi") : t = new Y.MathNode("mi", r) : (h.isCharacterBox ? (t = r[0], t.type = "mo") : t = new Y.MathNode("mo", r), h.mclass === "mbin" ? (t.attributes.lspace = "0.22em", t.attributes.rspace = "0.22em") : h.mclass === "mpunct" ? (t.attributes.lspace = "0em", t.attributes.rspace = "0.17em") : (h.mclass === "mopen" || h.mclass === "mclose") && (t.attributes.lspace = "0em", t.attributes.rspace = "0em")), t);
      }
      re({ type: "mclass", names: ["\\mathord", "\\mathbin", "\\mathrel", "\\mathopen", "\\mathclose", "\\mathpunct", "\\mathinner"], props: { numArgs: 1, primitive: true }, handler: function(e, t) {
        var r = e.parser, i = e.funcName, a = t[0];
        return { type: "mclass", mode: r.mode, mclass: "m" + i.substr(5), body: Ue(a), isCharacterBox: H.isCharacterBox(a) };
      }, htmlBuilder: ea, mathmlBuilder: ta });
      var un = function(e) {
        var t = e.type === "ordgroup" && e.body.length ? e.body[0] : e;
        return t.type === "atom" && (t.family === "bin" || t.family === "rel") ? "m" + t.family : "mord";
      };
      re({ type: "mclass", names: ["\\@binrel"], props: { numArgs: 2 }, handler: function(e, t) {
        var r = e.parser;
        return { type: "mclass", mode: r.mode, mclass: un(t[0]), body: Ue(t[1]), isCharacterBox: H.isCharacterBox(t[1]) };
      } }), re({ type: "mclass", names: ["\\stackrel", "\\overset", "\\underset"], props: { numArgs: 2 }, handler: function(e, t) {
        var r = e.parser, i = e.funcName, a = t[1], o = t[0], p;
        i !== "\\stackrel" ? p = un(a) : p = "mrel";
        var x = { type: "op", mode: a.mode, limits: true, alwaysHandleSupSub: true, parentIsSupSub: false, symbol: false, suppressBaseShift: i !== "\\stackrel", body: Ue(a) }, w = { type: "supsub", mode: o.mode, base: x, sup: i === "\\underset" ? null : o, sub: i === "\\underset" ? o : null };
        return { type: "mclass", mode: r.mode, mclass: p, body: [w], isCharacterBox: H.isCharacterBox(w) };
      }, htmlBuilder: ea, mathmlBuilder: ta });
      var ra = function(e, t) {
        var r = e.font, i = t.withFont(r);
        return Se(e.body, i);
      }, na = function(e, t) {
        var r = e.font, i = t.withFont(r);
        return Ee(e.body, i);
      }, ia = { "\\Bbb": "\\mathbb", "\\bold": "\\mathbf", "\\frak": "\\mathfrak", "\\bm": "\\boldsymbol" };
      re({ type: "font", names: ["\\mathrm", "\\mathit", "\\mathbf", "\\mathnormal", "\\mathbb", "\\mathcal", "\\mathfrak", "\\mathscr", "\\mathsf", "\\mathtt", "\\Bbb", "\\bold", "\\frak"], props: { numArgs: 1, allowedInArgument: true }, handler: function(e, t) {
        var r = e.parser, i = e.funcName, a = tr(t[0]), o = i;
        return o in ia && (o = ia[o]), { type: "font", mode: r.mode, font: o.slice(1), body: a };
      }, htmlBuilder: ra, mathmlBuilder: na }), re({ type: "mclass", names: ["\\boldsymbol", "\\bm"], props: { numArgs: 1 }, handler: function(e, t) {
        var r = e.parser, i = t[0], a = H.isCharacterBox(i);
        return { type: "mclass", mode: r.mode, mclass: un(i), body: [{ type: "font", mode: r.mode, font: "boldsymbol", body: i }], isCharacterBox: a };
      } }), re({ type: "font", names: ["\\rm", "\\sf", "\\tt", "\\bf", "\\it", "\\cal"], props: { numArgs: 0, allowedInText: true }, handler: function(e, t) {
        var r = e.parser, i = e.funcName, a = e.breakOnTokenText, o = r.mode, p = r.parseExpression(true, a), x = "math" + i.slice(1);
        return { type: "font", mode: o, font: x, body: { type: "ordgroup", mode: r.mode, body: p } };
      }, htmlBuilder: ra, mathmlBuilder: na });
      var aa = function(e, t) {
        var r = t;
        return e === "display" ? r = r.id >= te.SCRIPT.id ? r.text() : te.DISPLAY : e === "text" && r.size === te.DISPLAY.size ? r = te.TEXT : e === "script" ? r = te.SCRIPT : e === "scriptscript" && (r = te.SCRIPTSCRIPT), r;
      }, on = function(e, t) {
        var r = aa(e.size, t.style), i = r.fracNum(), a = r.fracDen(), o;
        o = t.havingStyle(i);
        var p = Se(e.numer, o, t);
        if (e.continued) {
          var x = 8.5 / t.fontMetrics().ptPerEm, w = 3.5 / t.fontMetrics().ptPerEm;
          p.height = p.height < x ? x : p.height, p.depth = p.depth < w ? w : p.depth;
        }
        o = t.havingStyle(a);
        var C = Se(e.denom, o, t), I, R, P;
        e.hasBarLine ? (e.barSize ? (R = Fe(e.barSize, t), I = L.makeLineSpan("frac-line", t, R)) : I = L.makeLineSpan("frac-line", t), R = I.height, P = I.height) : (I = null, R = 0, P = t.fontMetrics().defaultRuleThickness);
        var G, Q, J;
        r.size === te.DISPLAY.size || e.size === "display" ? (G = t.fontMetrics().num1, R > 0 ? Q = 3 * P : Q = 7 * P, J = t.fontMetrics().denom1) : (R > 0 ? (G = t.fontMetrics().num2, Q = P) : (G = t.fontMetrics().num3, Q = 3 * P), J = t.fontMetrics().denom2);
        var ae;
        if (I) {
          var me = t.fontMetrics().axisHeight;
          G - p.depth - (me + 0.5 * R) < Q && (G += Q - (G - p.depth - (me + 0.5 * R))), me - 0.5 * R - (C.height - J) < Q && (J += Q - (me - 0.5 * R - (C.height - J)));
          var Ae = -(me - 0.5 * R);
          ae = L.makeVList({ positionType: "individualShift", children: [{ type: "elem", elem: C, shift: J }, { type: "elem", elem: I, shift: Ae }, { type: "elem", elem: p, shift: -G }] }, t);
        } else {
          var ue = G - p.depth - (C.height - J);
          ue < Q && (G += 0.5 * (Q - ue), J += 0.5 * (Q - ue)), ae = L.makeVList({ positionType: "individualShift", children: [{ type: "elem", elem: C, shift: J }, { type: "elem", elem: p, shift: -G }] }, t);
        }
        o = t.havingStyle(r), ae.height *= o.sizeMultiplier / t.sizeMultiplier, ae.depth *= o.sizeMultiplier / t.sizeMultiplier;
        var Me;
        r.size === te.DISPLAY.size ? Me = t.fontMetrics().delim1 : r.size === te.SCRIPTSCRIPT.size ? Me = t.havingStyle(te.SCRIPT).fontMetrics().delim2 : Me = t.fontMetrics().delim2;
        var Ie, Be;
        return e.leftDelim == null ? Ie = C0(t, ["mopen"]) : Ie = Lt.customSizedDelim(e.leftDelim, Me, true, t.havingStyle(r), e.mode, ["mopen"]), e.continued ? Be = L.makeSpan([]) : e.rightDelim == null ? Be = C0(t, ["mclose"]) : Be = Lt.customSizedDelim(e.rightDelim, Me, true, t.havingStyle(r), e.mode, ["mclose"]), L.makeSpan(["mord"].concat(o.sizingClasses(t)), [Ie, L.makeSpan(["mfrac"], [ae]), Be], t);
      }, sn = function(e, t) {
        var r = new Y.MathNode("mfrac", [Ee(e.numer, t), Ee(e.denom, t)]);
        if (!e.hasBarLine)
          r.setAttribute("linethickness", "0px");
        else if (e.barSize) {
          var i = Fe(e.barSize, t);
          r.setAttribute("linethickness", X(i));
        }
        var a = aa(e.size, t.style);
        if (a.size !== t.style.size) {
          r = new Y.MathNode("mstyle", [r]);
          var o = a.size === te.DISPLAY.size ? "true" : "false";
          r.setAttribute("displaystyle", o), r.setAttribute("scriptlevel", "0");
        }
        if (e.leftDelim != null || e.rightDelim != null) {
          var p = [];
          if (e.leftDelim != null) {
            var x = new Y.MathNode("mo", [new Y.TextNode(e.leftDelim.replace("\\", ""))]);
            x.setAttribute("fence", "true"), p.push(x);
          }
          if (p.push(r), e.rightDelim != null) {
            var w = new Y.MathNode("mo", [new Y.TextNode(e.rightDelim.replace("\\", ""))]);
            w.setAttribute("fence", "true"), p.push(w);
          }
          return Wr(p);
        }
        return r;
      };
      re({ type: "genfrac", names: ["\\dfrac", "\\frac", "\\tfrac", "\\dbinom", "\\binom", "\\tbinom", "\\\\atopfrac", "\\\\bracefrac", "\\\\brackfrac"], props: { numArgs: 2, allowedInArgument: true }, handler: function(e, t) {
        var r = e.parser, i = e.funcName, a = t[0], o = t[1], p, x = null, w = null, C = "auto";
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
            p = false, x = "(", w = ")";
            break;
          case "\\\\bracefrac":
            p = false, x = "\\{", w = "\\}";
            break;
          case "\\\\brackfrac":
            p = false, x = "[", w = "]";
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
        return { type: "genfrac", mode: r.mode, continued: false, numer: a, denom: o, hasBarLine: p, leftDelim: x, rightDelim: w, size: C, barSize: null };
      }, htmlBuilder: on, mathmlBuilder: sn }), re({ type: "genfrac", names: ["\\cfrac"], props: { numArgs: 2 }, handler: function(e, t) {
        var r = e.parser, i = e.funcName, a = t[0], o = t[1];
        return { type: "genfrac", mode: r.mode, continued: true, numer: a, denom: o, hasBarLine: true, leftDelim: null, rightDelim: null, size: "display", barSize: null };
      } }), re({ type: "infix", names: ["\\over", "\\choose", "\\atop", "\\brace", "\\brack"], props: { numArgs: 0, infix: true }, handler: function(e) {
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
      var la = ["display", "text", "script", "scriptscript"], ua = function(e) {
        var t = null;
        return e.length > 0 && (t = e, t = t === "." ? null : t), t;
      };
      re({ type: "genfrac", names: ["\\genfrac"], props: { numArgs: 6, allowedInArgument: true, argTypes: ["math", "math", "size", "text", "math", "math"] }, handler: function(e, t) {
        var r = e.parser, i = t[4], a = t[5], o = tr(t[0]), p = o.type === "atom" && o.family === "open" ? ua(o.text) : null, x = tr(t[1]), w = x.type === "atom" && x.family === "close" ? ua(x.text) : null, C = ge(t[2], "size"), I, R = null;
        C.isBlank ? I = true : (R = C.value, I = R.number > 0);
        var P = "auto", G = t[3];
        if (G.type === "ordgroup") {
          if (G.body.length > 0) {
            var Q = ge(G.body[0], "textord");
            P = la[Number(Q.text)];
          }
        } else
          G = ge(G, "textord"), P = la[Number(G.text)];
        return { type: "genfrac", mode: r.mode, numer: i, denom: a, continued: false, hasBarLine: I, barSize: R, leftDelim: p, rightDelim: w, size: P };
      }, htmlBuilder: on, mathmlBuilder: sn }), re({ type: "infix", names: ["\\above"], props: { numArgs: 1, argTypes: ["size"], infix: true }, handler: function(e, t) {
        var r = e.parser, i = e.funcName, a = e.token;
        return { type: "infix", mode: r.mode, replaceWith: "\\\\abovefrac", size: ge(t[0], "size").value, token: a };
      } }), re({ type: "genfrac", names: ["\\\\abovefrac"], props: { numArgs: 3, argTypes: ["math", "size", "math"] }, handler: function(e, t) {
        var r = e.parser, i = e.funcName, a = t[0], o = k(ge(t[1], "infix").size), p = t[2], x = o.number > 0;
        return { type: "genfrac", mode: r.mode, numer: a, denom: p, continued: false, hasBarLine: x, barSize: o, leftDelim: null, rightDelim: null, size: "auto" };
      }, htmlBuilder: on, mathmlBuilder: sn });
      var oa = function(e, t) {
        var r = t.style, i, a;
        e.type === "supsub" ? (i = e.sup ? Se(e.sup, t.havingStyle(r.sup()), t) : Se(e.sub, t.havingStyle(r.sub()), t), a = ge(e.base, "horizBrace")) : a = ge(e, "horizBrace");
        var o = Se(a.base, t.havingBaseStyle(te.DISPLAY)), p = It.svgSpan(a, t), x;
        if (a.isOver ? (x = L.makeVList({ positionType: "firstBaseline", children: [{ type: "elem", elem: o }, { type: "kern", size: 0.1 }, { type: "elem", elem: p }] }, t), x.children[0].children[0].children[1].classes.push("svg-align")) : (x = L.makeVList({ positionType: "bottom", positionData: o.depth + 0.1 + p.height, children: [{ type: "elem", elem: p }, { type: "kern", size: 0.1 }, { type: "elem", elem: o }] }, t), x.children[0].children[0].children[0].classes.push("svg-align")), i) {
          var w = L.makeSpan(["mord", a.isOver ? "mover" : "munder"], [x], t);
          a.isOver ? x = L.makeVList({ positionType: "firstBaseline", children: [{ type: "elem", elem: w }, { type: "kern", size: 0.2 }, { type: "elem", elem: i }] }, t) : x = L.makeVList({ positionType: "bottom", positionData: w.depth + 0.2 + i.height + i.depth, children: [{ type: "elem", elem: i }, { type: "kern", size: 0.2 }, { type: "elem", elem: w }] }, t);
        }
        return L.makeSpan(["mord", a.isOver ? "mover" : "munder"], [x], t);
      }, V1 = function(e, t) {
        var r = It.mathMLnode(e.label);
        return new Y.MathNode(e.isOver ? "mover" : "munder", [Ee(e.base, t), r]);
      };
      re({ type: "horizBrace", names: ["\\overbrace", "\\underbrace"], props: { numArgs: 1 }, handler: function(e, t) {
        var r = e.parser, i = e.funcName;
        return { type: "horizBrace", mode: r.mode, label: i, isOver: /^\\over/.test(i), base: t[0] };
      }, htmlBuilder: oa, mathmlBuilder: V1 }), re({ type: "href", names: ["\\href"], props: { numArgs: 2, argTypes: ["url", "original"], allowedInText: true }, handler: function(e, t) {
        var r = e.parser, i = t[1], a = ge(t[0], "url").url;
        return r.settings.isTrusted({ command: "\\href", url: a }) ? { type: "href", mode: r.mode, href: a, body: Ue(i) } : r.formatUnsupportedCmd("\\href");
      }, htmlBuilder: function(e, t) {
        var r = $e(e.body, t, false);
        return L.makeAnchor(e.href, [], r, t);
      }, mathmlBuilder: function(e, t) {
        var r = Pt(e.body, t);
        return r instanceof ft || (r = new ft("mrow", [r])), r.setAttribute("href", e.href), r;
      } }), re({ type: "href", names: ["\\url"], props: { numArgs: 1, argTypes: ["url"], allowedInText: true }, handler: function(e, t) {
        var r = e.parser, i = ge(t[0], "url").url;
        if (!r.settings.isTrusted({ command: "\\url", url: i }))
          return r.formatUnsupportedCmd("\\url");
        for (var a = [], o = 0; o < i.length; o++) {
          var p = i[o];
          p === "~" && (p = "\\textasciitilde"), a.push({ type: "textord", mode: "text", text: p });
        }
        var x = { type: "text", mode: r.mode, font: "\\texttt", body: a };
        return { type: "href", mode: r.mode, href: i, body: Ue(x) };
      } }), re({ type: "hbox", names: ["\\hbox"], props: { numArgs: 1, argTypes: ["text"], allowedInText: true, primitive: true }, handler: function(e, t) {
        var r = e.parser;
        return { type: "hbox", mode: r.mode, body: Ue(t[0]) };
      }, htmlBuilder: function(e, t) {
        var r = $e(e.body, t, false);
        return L.makeFragment(r);
      }, mathmlBuilder: function(e, t) {
        return new Y.MathNode("mrow", ot(e.body, t));
      } }), re({ type: "html", names: ["\\htmlClass", "\\htmlId", "\\htmlStyle", "\\htmlData"], props: { numArgs: 2, argTypes: ["raw", "original"], allowedInText: true }, handler: function(e, t) {
        var r = e.parser, i = e.funcName, a = e.token, o = ge(t[0], "raw").string, p = t[1];
        r.settings.strict && r.settings.reportNonstrict("htmlExtension", "HTML extension is disabled on strict mode");
        var x, w = {};
        switch (i) {
          case "\\htmlClass":
            w.class = o, x = { command: "\\htmlClass", class: o };
            break;
          case "\\htmlId":
            w.id = o, x = { command: "\\htmlId", id: o };
            break;
          case "\\htmlStyle":
            w.style = o, x = { command: "\\htmlStyle", style: o };
            break;
          case "\\htmlData": {
            for (var C = o.split(","), I = 0; I < C.length; I++) {
              var R = C[I].split("=");
              if (R.length !== 2)
                throw new u("Error parsing key-value for \\htmlData");
              w["data-" + R[0].trim()] = R[1].trim();
            }
            x = { command: "\\htmlData", attributes: w };
            break;
          }
          default:
            throw new Error("Unrecognized html command");
        }
        return r.settings.isTrusted(x) ? { type: "html", mode: r.mode, attributes: w, body: Ue(p) } : r.formatUnsupportedCmd(i);
      }, htmlBuilder: function(e, t) {
        var r = $e(e.body, t, false), i = ["enclosing"];
        e.attributes.class && i.push.apply(i, e.attributes.class.trim().split(/\s+/));
        var a = L.makeSpan(i, r, t);
        for (var o in e.attributes)
          o !== "class" && e.attributes.hasOwnProperty(o) && a.setAttribute(o, e.attributes[o]);
        return a;
      }, mathmlBuilder: function(e, t) {
        return Pt(e.body, t);
      } }), re({ type: "htmlmathml", names: ["\\html@mathml"], props: { numArgs: 2, allowedInText: true }, handler: function(e, t) {
        var r = e.parser;
        return { type: "htmlmathml", mode: r.mode, html: Ue(t[0]), mathml: Ue(t[1]) };
      }, htmlBuilder: function(e, t) {
        var r = $e(e.html, t, false);
        return L.makeFragment(r);
      }, mathmlBuilder: function(e, t) {
        return Pt(e.mathml, t);
      } });
      var hn = function(e) {
        if (/^[-+]? *(\d+(\.\d*)?|\.\d+)$/.test(e))
          return { number: +e, unit: "bp" };
        var t = /([-+]?) *(\d+(?:\.\d*)?|\.\d+) *([a-z]{2})/.exec(e);
        if (!t)
          throw new u("Invalid size: '" + e + "' in \\includegraphics");
        var r = { number: +(t[1] + t[2]), unit: t[3] };
        if (!S0(r))
          throw new u("Invalid unit: '" + r.unit + "' in \\includegraphics.");
        return r;
      };
      re({ type: "includegraphics", names: ["\\includegraphics"], props: { numArgs: 1, numOptionalArgs: 1, argTypes: ["raw", "url"], allowedInText: false }, handler: function(e, t, r) {
        var i = e.parser, a = { number: 0, unit: "em" }, o = { number: 0.9, unit: "em" }, p = { number: 0, unit: "em" }, x = "";
        if (r[0])
          for (var w = ge(r[0], "raw").string, C = w.split(","), I = 0; I < C.length; I++) {
            var R = C[I].split("=");
            if (R.length === 2) {
              var P = R[1].trim();
              switch (R[0].trim()) {
                case "alt":
                  x = P;
                  break;
                case "width":
                  a = hn(P);
                  break;
                case "height":
                  o = hn(P);
                  break;
                case "totalheight":
                  p = hn(P);
                  break;
                default:
                  throw new u("Invalid key: '" + R[0] + "' in \\includegraphics.");
              }
            }
          }
        var G = ge(t[0], "url").url;
        return x === "" && (x = G, x = x.replace(/^.*[\\/]/, ""), x = x.substring(0, x.lastIndexOf("."))), i.settings.isTrusted({ command: "\\includegraphics", url: G }) ? { type: "includegraphics", mode: i.mode, alt: x, width: a, height: o, totalheight: p, src: G } : i.formatUnsupportedCmd("\\includegraphics");
      }, htmlBuilder: function(e, t) {
        var r = Fe(e.height, t), i = 0;
        e.totalheight.number > 0 && (i = Fe(e.totalheight, t) - r);
        var a = 0;
        e.width.number > 0 && (a = Fe(e.width, t));
        var o = { height: X(r + i) };
        a > 0 && (o.width = X(a)), i > 0 && (o.verticalAlign = X(-i));
        var p = new Lr(e.src, e.alt, o);
        return p.height = r, p.depth = i, p;
      }, mathmlBuilder: function(e, t) {
        var r = new Y.MathNode("mglyph", []);
        r.setAttribute("alt", e.alt);
        var i = Fe(e.height, t), a = 0;
        if (e.totalheight.number > 0 && (a = Fe(e.totalheight, t) - i, r.setAttribute("valign", X(-a))), r.setAttribute("height", X(i + a)), e.width.number > 0) {
          var o = Fe(e.width, t);
          r.setAttribute("width", X(o));
        }
        return r.setAttribute("src", e.src), r;
      } }), re({ type: "kern", names: ["\\kern", "\\mkern", "\\hskip", "\\mskip"], props: { numArgs: 1, argTypes: ["size"], primitive: true, allowedInText: true }, handler: function(e, t) {
        var r = e.parser, i = e.funcName, a = ge(t[0], "size");
        if (r.settings.strict) {
          var o = i[1] === "m", p = a.value.unit === "mu";
          o ? (p || r.settings.reportNonstrict("mathVsTextUnits", "LaTeX's " + i + " supports only mu units, " + ("not " + a.value.unit + " units")), r.mode !== "math" && r.settings.reportNonstrict("mathVsTextUnits", "LaTeX's " + i + " works only in math mode")) : p && r.settings.reportNonstrict("mathVsTextUnits", "LaTeX's " + i + " doesn't support mu units");
        }
        return { type: "kern", mode: r.mode, dimension: a.value };
      }, htmlBuilder: function(e, t) {
        return L.makeGlue(e.dimension, t);
      }, mathmlBuilder: function(e, t) {
        var r = Fe(e.dimension, t);
        return new Y.SpaceNode(r);
      } }), re({ type: "lap", names: ["\\mathllap", "\\mathrlap", "\\mathclap"], props: { numArgs: 1, allowedInText: true }, handler: function(e, t) {
        var r = e.parser, i = e.funcName, a = t[0];
        return { type: "lap", mode: r.mode, alignment: i.slice(5), body: a };
      }, htmlBuilder: function(e, t) {
        var r;
        e.alignment === "clap" ? (r = L.makeSpan([], [Se(e.body, t)]), r = L.makeSpan(["inner"], [r], t)) : r = L.makeSpan(["inner"], [Se(e.body, t)]);
        var i = L.makeSpan(["fix"], []), a = L.makeSpan([e.alignment], [r, i], t), o = L.makeSpan(["strut"]);
        return o.style.height = X(a.height + a.depth), a.depth && (o.style.verticalAlign = X(-a.depth)), a.children.unshift(o), a = L.makeSpan(["thinbox"], [a], t), L.makeSpan(["mord", "vbox"], [a], t);
      }, mathmlBuilder: function(e, t) {
        var r = new Y.MathNode("mpadded", [Ee(e.body, t)]);
        if (e.alignment !== "rlap") {
          var i = e.alignment === "llap" ? "-1" : "-0.5";
          r.setAttribute("lspace", i + "width");
        }
        return r.setAttribute("width", "0px"), r;
      } }), re({ type: "styling", names: ["\\(", "$"], props: { numArgs: 0, allowedInText: true, allowedInMath: false }, handler: function(e, t) {
        var r = e.funcName, i = e.parser, a = i.mode;
        i.switchMode("math");
        var o = r === "\\(" ? "\\)" : "$", p = i.parseExpression(false, o);
        return i.expect(o), i.switchMode(a), { type: "styling", mode: i.mode, style: "text", body: p };
      } }), re({ type: "text", names: ["\\)", "\\]"], props: { numArgs: 0, allowedInText: true, allowedInMath: false }, handler: function(e, t) {
        throw new u("Mismatched " + e.funcName);
      } });
      var sa = function(e, t) {
        switch (t.style.size) {
          case te.DISPLAY.size:
            return e.display;
          case te.TEXT.size:
            return e.text;
          case te.SCRIPT.size:
            return e.script;
          case te.SCRIPTSCRIPT.size:
            return e.scriptscript;
          default:
            return e.text;
        }
      };
      re({ type: "mathchoice", names: ["\\mathchoice"], props: { numArgs: 4, primitive: true }, handler: function(e, t) {
        var r = e.parser;
        return { type: "mathchoice", mode: r.mode, display: Ue(t[0]), text: Ue(t[1]), script: Ue(t[2]), scriptscript: Ue(t[3]) };
      }, htmlBuilder: function(e, t) {
        var r = sa(e, t), i = $e(r, t, false);
        return L.makeFragment(i);
      }, mathmlBuilder: function(e, t) {
        var r = sa(e, t);
        return Pt(r, t);
      } });
      var ha = function(e, t, r, i, a, o, p) {
        e = L.makeSpan([], [e]);
        var x = r && H.isCharacterBox(r), w, C;
        if (t) {
          var I = Se(t, i.havingStyle(a.sup()), i);
          C = { elem: I, kern: Math.max(i.fontMetrics().bigOpSpacing1, i.fontMetrics().bigOpSpacing3 - I.depth) };
        }
        if (r) {
          var R = Se(r, i.havingStyle(a.sub()), i);
          w = { elem: R, kern: Math.max(i.fontMetrics().bigOpSpacing2, i.fontMetrics().bigOpSpacing4 - R.height) };
        }
        var P;
        if (C && w) {
          var G = i.fontMetrics().bigOpSpacing5 + w.elem.height + w.elem.depth + w.kern + e.depth + p;
          P = L.makeVList({ positionType: "bottom", positionData: G, children: [{ type: "kern", size: i.fontMetrics().bigOpSpacing5 }, { type: "elem", elem: w.elem, marginLeft: X(-o) }, { type: "kern", size: w.kern }, { type: "elem", elem: e }, { type: "kern", size: C.kern }, { type: "elem", elem: C.elem, marginLeft: X(o) }, { type: "kern", size: i.fontMetrics().bigOpSpacing5 }] }, i);
        } else if (w) {
          var Q = e.height - p;
          P = L.makeVList({ positionType: "top", positionData: Q, children: [{ type: "kern", size: i.fontMetrics().bigOpSpacing5 }, { type: "elem", elem: w.elem, marginLeft: X(-o) }, { type: "kern", size: w.kern }, { type: "elem", elem: e }] }, i);
        } else if (C) {
          var J = e.depth + p;
          P = L.makeVList({ positionType: "bottom", positionData: J, children: [{ type: "elem", elem: e }, { type: "kern", size: C.kern }, { type: "elem", elem: C.elem, marginLeft: X(o) }, { type: "kern", size: i.fontMetrics().bigOpSpacing5 }] }, i);
        } else
          return e;
        var ae = [P];
        if (w && o !== 0 && !x) {
          var ue = L.makeSpan(["mspace"], [], i);
          ue.style.marginRight = X(o), ae.unshift(ue);
        }
        return L.makeSpan(["mop", "op-limits"], ae, i);
      }, ma = ["\\smallint"], c0 = function(e, t) {
        var r, i, a = false, o;
        e.type === "supsub" ? (r = e.sup, i = e.sub, o = ge(e.base, "op"), a = true) : o = ge(e, "op");
        var p = t.style, x = false;
        p.size === te.DISPLAY.size && o.symbol && !H.contains(ma, o.name) && (x = true);
        var w;
        if (o.symbol) {
          var C = x ? "Size2-Regular" : "Size1-Regular", I = "";
          if ((o.name === "\\oiint" || o.name === "\\oiiint") && (I = o.name.substr(1), o.name = I === "oiint" ? "\\iint" : "\\iiint"), w = L.makeSymbol(o.name, C, "math", t, ["mop", "op-symbol", x ? "large-op" : "small-op"]), I.length > 0) {
            var R = w.italic, P = L.staticSvg(I + "Size" + (x ? "2" : "1"), t);
            w = L.makeVList({ positionType: "individualShift", children: [{ type: "elem", elem: w, shift: 0 }, { type: "elem", elem: P, shift: x ? 0.08 : 0 }] }, t), o.name = "\\" + I, w.classes.unshift("mop"), w.italic = R;
          }
        } else if (o.body) {
          var G = $e(o.body, t, true);
          G.length === 1 && G[0] instanceof tt ? (w = G[0], w.classes[0] = "mop") : w = L.makeSpan(["mop"], G, t);
        } else {
          for (var Q = [], J = 1; J < o.name.length; J++)
            Q.push(L.mathsym(o.name[J], o.mode, t));
          w = L.makeSpan(["mop"], Q, t);
        }
        var ae = 0, ue = 0;
        return (w instanceof tt || o.name === "\\oiint" || o.name === "\\oiiint") && !o.suppressBaseShift && (ae = (w.height - w.depth) / 2 - t.fontMetrics().axisHeight, ue = w.italic), a ? ha(w, r, i, t, p, ue, ae) : (ae && (w.style.position = "relative", w.style.top = X(ae)), w);
      }, E0 = function(e, t) {
        var r;
        if (e.symbol)
          r = new ft("mo", [dt(e.name, e.mode)]), H.contains(ma, e.name) && r.setAttribute("largeop", "false");
        else if (e.body)
          r = new ft("mo", ot(e.body, t));
        else {
          r = new ft("mi", [new B0(e.name.slice(1))]);
          var i = new ft("mo", [dt("\u2061", "text")]);
          e.parentIsSupSub ? r = new ft("mrow", [r, i]) : r = Ti([r, i]);
        }
        return r;
      }, U1 = { "\u220F": "\\prod", "\u2210": "\\coprod", "\u2211": "\\sum", "\u22C0": "\\bigwedge", "\u22C1": "\\bigvee", "\u22C2": "\\bigcap", "\u22C3": "\\bigcup", "\u2A00": "\\bigodot", "\u2A01": "\\bigoplus", "\u2A02": "\\bigotimes", "\u2A04": "\\biguplus", "\u2A06": "\\bigsqcup" };
      re({ type: "op", names: ["\\coprod", "\\bigvee", "\\bigwedge", "\\biguplus", "\\bigcap", "\\bigcup", "\\intop", "\\prod", "\\sum", "\\bigotimes", "\\bigoplus", "\\bigodot", "\\bigsqcup", "\\smallint", "\u220F", "\u2210", "\u2211", "\u22C0", "\u22C1", "\u22C2", "\u22C3", "\u2A00", "\u2A01", "\u2A02", "\u2A04", "\u2A06"], props: { numArgs: 0 }, handler: function(e, t) {
        var r = e.parser, i = e.funcName, a = i;
        return a.length === 1 && (a = U1[a]), { type: "op", mode: r.mode, limits: true, parentIsSupSub: false, symbol: true, name: a };
      }, htmlBuilder: c0, mathmlBuilder: E0 }), re({ type: "op", names: ["\\mathop"], props: { numArgs: 1, primitive: true }, handler: function(e, t) {
        var r = e.parser, i = t[0];
        return { type: "op", mode: r.mode, limits: false, parentIsSupSub: false, symbol: false, body: Ue(i) };
      }, htmlBuilder: c0, mathmlBuilder: E0 });
      var j1 = { "\u222B": "\\int", "\u222C": "\\iint", "\u222D": "\\iiint", "\u222E": "\\oint", "\u222F": "\\oiint", "\u2230": "\\oiiint" };
      re({ type: "op", names: ["\\arcsin", "\\arccos", "\\arctan", "\\arctg", "\\arcctg", "\\arg", "\\ch", "\\cos", "\\cosec", "\\cosh", "\\cot", "\\cotg", "\\coth", "\\csc", "\\ctg", "\\cth", "\\deg", "\\dim", "\\exp", "\\hom", "\\ker", "\\lg", "\\ln", "\\log", "\\sec", "\\sin", "\\sinh", "\\sh", "\\tan", "\\tanh", "\\tg", "\\th"], props: { numArgs: 0 }, handler: function(e) {
        var t = e.parser, r = e.funcName;
        return { type: "op", mode: t.mode, limits: false, parentIsSupSub: false, symbol: false, name: r };
      }, htmlBuilder: c0, mathmlBuilder: E0 }), re({ type: "op", names: ["\\det", "\\gcd", "\\inf", "\\lim", "\\max", "\\min", "\\Pr", "\\sup"], props: { numArgs: 0 }, handler: function(e) {
        var t = e.parser, r = e.funcName;
        return { type: "op", mode: t.mode, limits: true, parentIsSupSub: false, symbol: false, name: r };
      }, htmlBuilder: c0, mathmlBuilder: E0 }), re({ type: "op", names: ["\\int", "\\iint", "\\iiint", "\\oint", "\\oiint", "\\oiiint", "\u222B", "\u222C", "\u222D", "\u222E", "\u222F", "\u2230"], props: { numArgs: 0 }, handler: function(e) {
        var t = e.parser, r = e.funcName, i = r;
        return i.length === 1 && (i = j1[i]), { type: "op", mode: t.mode, limits: false, parentIsSupSub: false, symbol: true, name: i };
      }, htmlBuilder: c0, mathmlBuilder: E0 });
      var ca = {};
      function b(h, e) {
        ca[h] = e;
      }
      var pa = function(e, t) {
        var r, i, a = false, o;
        e.type === "supsub" ? (r = e.sup, i = e.sub, o = ge(e.base, "operatorname"), a = true) : o = ge(e, "operatorname");
        var p;
        if (o.body.length > 0) {
          for (var x = o.body.map(function(R) {
            var P = R.text;
            return typeof P == "string" ? { type: "textord", mode: R.mode, text: P } : R;
          }), w = $e(x, t.withFont("mathrm"), true), C = 0; C < w.length; C++) {
            var I = w[C];
            I instanceof tt && (I.text = I.text.replace(/\u2212/, "-").replace(/\u2217/, "*"));
          }
          p = L.makeSpan(["mop"], w, t);
        } else
          p = L.makeSpan(["mop"], [], t);
        return a ? ha(p, r, i, t, t.style, 0, 0) : p;
      }, W1 = function(e, t) {
        for (var r = ot(e.body, t.withFont("mathrm")), i = true, a = 0; a < r.length; a++) {
          var o = r[a];
          if (!(o instanceof Y.SpaceNode))
            if (o instanceof Y.MathNode)
              switch (o.type) {
                case "mi":
                case "mn":
                case "ms":
                case "mspace":
                case "mtext":
                  break;
                case "mo": {
                  var p = o.children[0];
                  o.children.length === 1 && p instanceof Y.TextNode ? p.text = p.text.replace(/\u2212/, "-").replace(/\u2217/, "*") : i = false;
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
          r = [new Y.TextNode(x)];
        }
        var w = new Y.MathNode("mi", r);
        w.setAttribute("mathvariant", "normal");
        var C = new Y.MathNode("mo", [dt("\u2061", "text")]);
        return e.parentIsSupSub ? new Y.MathNode("mrow", [w, C]) : Y.newDocumentFragment([w, C]);
      };
      re({ type: "operatorname", names: ["\\operatorname@", "\\operatornamewithlimits"], props: { numArgs: 1 }, handler: function(e, t) {
        var r = e.parser, i = e.funcName, a = t[0];
        return { type: "operatorname", mode: r.mode, body: Ue(a), alwaysHandleSupSub: i === "\\operatornamewithlimits", limits: false, parentIsSupSub: false };
      }, htmlBuilder: pa, mathmlBuilder: W1 }), b("\\operatorname", "\\@ifstar\\operatornamewithlimits\\operatorname@"), e0({ type: "ordgroup", htmlBuilder: function(e, t) {
        return e.semisimple ? L.makeFragment($e(e.body, t, false)) : L.makeSpan(["mord"], $e(e.body, t, true), t);
      }, mathmlBuilder: function(e, t) {
        return Pt(e.body, t, true);
      } }), re({ type: "overline", names: ["\\overline"], props: { numArgs: 1 }, handler: function(e, t) {
        var r = e.parser, i = t[0];
        return { type: "overline", mode: r.mode, body: i };
      }, htmlBuilder: function(e, t) {
        var r = Se(e.body, t.havingCrampedStyle()), i = L.makeLineSpan("overline-line", t), a = t.fontMetrics().defaultRuleThickness, o = L.makeVList({ positionType: "firstBaseline", children: [{ type: "elem", elem: r }, { type: "kern", size: 3 * a }, { type: "elem", elem: i }, { type: "kern", size: a }] }, t);
        return L.makeSpan(["mord", "overline"], [o], t);
      }, mathmlBuilder: function(e, t) {
        var r = new Y.MathNode("mo", [new Y.TextNode("\u203E")]);
        r.setAttribute("stretchy", "true");
        var i = new Y.MathNode("mover", [Ee(e.body, t), r]);
        return i.setAttribute("accent", "true"), i;
      } }), re({ type: "phantom", names: ["\\phantom"], props: { numArgs: 1, allowedInText: true }, handler: function(e, t) {
        var r = e.parser, i = t[0];
        return { type: "phantom", mode: r.mode, body: Ue(i) };
      }, htmlBuilder: function(e, t) {
        var r = $e(e.body, t.withPhantom(), false);
        return L.makeFragment(r);
      }, mathmlBuilder: function(e, t) {
        var r = ot(e.body, t);
        return new Y.MathNode("mphantom", r);
      } }), re({ type: "hphantom", names: ["\\hphantom"], props: { numArgs: 1, allowedInText: true }, handler: function(e, t) {
        var r = e.parser, i = t[0];
        return { type: "hphantom", mode: r.mode, body: i };
      }, htmlBuilder: function(e, t) {
        var r = L.makeSpan([], [Se(e.body, t.withPhantom())]);
        if (r.height = 0, r.depth = 0, r.children)
          for (var i = 0; i < r.children.length; i++)
            r.children[i].height = 0, r.children[i].depth = 0;
        return r = L.makeVList({ positionType: "firstBaseline", children: [{ type: "elem", elem: r }] }, t), L.makeSpan(["mord"], [r], t);
      }, mathmlBuilder: function(e, t) {
        var r = ot(Ue(e.body), t), i = new Y.MathNode("mphantom", r), a = new Y.MathNode("mpadded", [i]);
        return a.setAttribute("height", "0px"), a.setAttribute("depth", "0px"), a;
      } }), re({ type: "vphantom", names: ["\\vphantom"], props: { numArgs: 1, allowedInText: true }, handler: function(e, t) {
        var r = e.parser, i = t[0];
        return { type: "vphantom", mode: r.mode, body: i };
      }, htmlBuilder: function(e, t) {
        var r = L.makeSpan(["inner"], [Se(e.body, t.withPhantom())]), i = L.makeSpan(["fix"], []);
        return L.makeSpan(["mord", "rlap"], [r, i], t);
      }, mathmlBuilder: function(e, t) {
        var r = ot(Ue(e.body), t), i = new Y.MathNode("mphantom", r), a = new Y.MathNode("mpadded", [i]);
        return a.setAttribute("width", "0px"), a;
      } }), re({ type: "raisebox", names: ["\\raisebox"], props: { numArgs: 2, argTypes: ["size", "hbox"], allowedInText: true }, handler: function(e, t) {
        var r = e.parser, i = ge(t[0], "size").value, a = t[1];
        return { type: "raisebox", mode: r.mode, dy: i, body: a };
      }, htmlBuilder: function(e, t) {
        var r = Se(e.body, t), i = Fe(e.dy, t);
        return L.makeVList({ positionType: "shift", positionData: -i, children: [{ type: "elem", elem: r }] }, t);
      }, mathmlBuilder: function(e, t) {
        var r = new Y.MathNode("mpadded", [Ee(e.body, t)]), i = e.dy.number + e.dy.unit;
        return r.setAttribute("voffset", i), r;
      } }), re({ type: "rule", names: ["\\rule"], props: { numArgs: 2, numOptionalArgs: 1, argTypes: ["size", "size", "size"] }, handler: function(e, t, r) {
        var i = e.parser, a = r[0], o = ge(t[0], "size"), p = ge(t[1], "size");
        return { type: "rule", mode: i.mode, shift: a && ge(a, "size").value, width: o.value, height: p.value };
      }, htmlBuilder: function(e, t) {
        var r = L.makeSpan(["mord", "rule"], [], t), i = Fe(e.width, t), a = Fe(e.height, t), o = e.shift ? Fe(e.shift, t) : 0;
        return r.style.borderRightWidth = X(i), r.style.borderTopWidth = X(a), r.style.bottom = X(o), r.width = i, r.height = a + o, r.depth = -o, r.maxFontSize = a * 1.125 * t.sizeMultiplier, r;
      }, mathmlBuilder: function(e, t) {
        var r = Fe(e.width, t), i = Fe(e.height, t), a = e.shift ? Fe(e.shift, t) : 0, o = t.color && t.getColor() || "black", p = new Y.MathNode("mspace");
        p.setAttribute("mathbackground", o), p.setAttribute("width", X(r)), p.setAttribute("height", X(i));
        var x = new Y.MathNode("mpadded", [p]);
        return a >= 0 ? x.setAttribute("height", X(a)) : (x.setAttribute("height", X(a)), x.setAttribute("depth", X(-a))), x.setAttribute("voffset", X(a)), x;
      } });
      function fa(h, e, t) {
        for (var r = $e(h, e, false), i = e.sizeMultiplier / t.sizeMultiplier, a = 0; a < r.length; a++) {
          var o = r[a].classes.indexOf("sizing");
          o < 0 ? Array.prototype.push.apply(r[a].classes, e.sizingClasses(t)) : r[a].classes[o + 1] === "reset-size" + e.size && (r[a].classes[o + 1] = "reset-size" + t.size), r[a].height *= i, r[a].depth *= i;
        }
        return L.makeFragment(r);
      }
      var da = ["\\tiny", "\\sixptsize", "\\scriptsize", "\\footnotesize", "\\small", "\\normalsize", "\\large", "\\Large", "\\LARGE", "\\huge", "\\Huge"], Y1 = function(e, t) {
        var r = t.havingSize(e.size);
        return fa(e.body, r, t);
      };
      re({ type: "sizing", names: da, props: { numArgs: 0, allowedInText: true }, handler: function(e, t) {
        var r = e.breakOnTokenText, i = e.funcName, a = e.parser, o = a.parseExpression(false, r);
        return { type: "sizing", mode: a.mode, size: da.indexOf(i) + 1, body: o };
      }, htmlBuilder: Y1, mathmlBuilder: function(e, t) {
        var r = t.havingSize(e.size), i = ot(e.body, r), a = new Y.MathNode("mstyle", i);
        return a.setAttribute("mathsize", X(r.sizeMultiplier)), a;
      } }), re({ type: "smash", names: ["\\smash"], props: { numArgs: 1, numOptionalArgs: 1, allowedInText: true }, handler: function(e, t, r) {
        var i = e.parser, a = false, o = false, p = r[0] && ge(r[0], "ordgroup");
        if (p)
          for (var x = "", w = 0; w < p.body.length; ++w) {
            var C = p.body[w];
            if (x = C.text, x === "t")
              a = true;
            else if (x === "b")
              o = true;
            else {
              a = false, o = false;
              break;
            }
          }
        else
          a = true, o = true;
        var I = t[0];
        return { type: "smash", mode: i.mode, body: I, smashHeight: a, smashDepth: o };
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
        var o = L.makeVList({ positionType: "firstBaseline", children: [{ type: "elem", elem: r }] }, t);
        return L.makeSpan(["mord"], [o], t);
      }, mathmlBuilder: function(e, t) {
        var r = new Y.MathNode("mpadded", [Ee(e.body, t)]);
        return e.smashHeight && r.setAttribute("height", "0px"), e.smashDepth && r.setAttribute("depth", "0px"), r;
      } }), re({ type: "sqrt", names: ["\\sqrt"], props: { numArgs: 1, numOptionalArgs: 1 }, handler: function(e, t, r) {
        var i = e.parser, a = r[0], o = t[0];
        return { type: "sqrt", mode: i.mode, body: o, index: a };
      }, htmlBuilder: function(e, t) {
        var r = Se(e.body, t.havingCrampedStyle());
        r.height === 0 && (r.height = t.fontMetrics().xHeight), r = L.wrapFragment(r, t);
        var i = t.fontMetrics(), a = i.defaultRuleThickness, o = a;
        t.style.id < te.TEXT.id && (o = t.fontMetrics().xHeight);
        var p = a + o / 4, x = r.height + r.depth + p + a, w = Lt.sqrtImage(x, t), C = w.span, I = w.ruleWidth, R = w.advanceWidth, P = C.height - I;
        P > r.height + r.depth + p && (p = (p + P - r.height - r.depth) / 2);
        var G = C.height - r.height - p - I;
        r.style.paddingLeft = X(R);
        var Q = L.makeVList({ positionType: "firstBaseline", children: [{ type: "elem", elem: r, wrapperClasses: ["svg-align"] }, { type: "kern", size: -(r.height + G) }, { type: "elem", elem: C }, { type: "kern", size: I }] }, t);
        if (e.index) {
          var J = t.havingStyle(te.SCRIPTSCRIPT), ae = Se(e.index, J, t), ue = 0.6 * (Q.height - Q.depth), me = L.makeVList({ positionType: "shift", positionData: -ue, children: [{ type: "elem", elem: ae }] }, t), Ae = L.makeSpan(["root"], [me]);
          return L.makeSpan(["mord", "sqrt"], [Ae, Q], t);
        } else
          return L.makeSpan(["mord", "sqrt"], [Q], t);
      }, mathmlBuilder: function(e, t) {
        var r = e.body, i = e.index;
        return i ? new Y.MathNode("mroot", [Ee(r, t), Ee(i, t)]) : new Y.MathNode("msqrt", [Ee(r, t)]);
      } });
      var ga = { display: te.DISPLAY, text: te.TEXT, script: te.SCRIPT, scriptscript: te.SCRIPTSCRIPT };
      re({ type: "styling", names: ["\\displaystyle", "\\textstyle", "\\scriptstyle", "\\scriptscriptstyle"], props: { numArgs: 0, allowedInText: true, primitive: true }, handler: function(e, t) {
        var r = e.breakOnTokenText, i = e.funcName, a = e.parser, o = a.parseExpression(true, r), p = i.slice(1, i.length - 5);
        return { type: "styling", mode: a.mode, style: p, body: o };
      }, htmlBuilder: function(e, t) {
        var r = ga[e.style], i = t.havingStyle(r).withFont("");
        return fa(e.body, i, t);
      }, mathmlBuilder: function(e, t) {
        var r = ga[e.style], i = t.havingStyle(r), a = ot(e.body, i), o = new Y.MathNode("mstyle", a), p = { display: ["0", "true"], text: ["0", "false"], script: ["1", "false"], scriptscript: ["2", "false"] }, x = p[e.style];
        return o.setAttribute("scriptlevel", x[0]), o.setAttribute("displaystyle", x[1]), o;
      } });
      var X1 = function(e, t) {
        var r = e.base;
        if (r)
          if (r.type === "op") {
            var i = r.limits && (t.style.size === te.DISPLAY.size || r.alwaysHandleSupSub);
            return i ? c0 : null;
          } else if (r.type === "operatorname") {
            var a = r.alwaysHandleSupSub && (t.style.size === te.DISPLAY.size || r.limits);
            return a ? pa : null;
          } else {
            if (r.type === "accent")
              return H.isCharacterBox(r.base) ? $r : null;
            if (r.type === "horizBrace") {
              var o = !e.sub;
              return o === r.isOver ? oa : null;
            } else
              return null;
          }
        else
          return null;
      };
      e0({ type: "supsub", htmlBuilder: function(e, t) {
        var r = X1(e, t);
        if (r)
          return r(e, t);
        var i = e.base, a = e.sup, o = e.sub, p = Se(i, t), x, w, C = t.fontMetrics(), I = 0, R = 0, P = i && H.isCharacterBox(i);
        if (a) {
          var G = t.havingStyle(t.style.sup());
          x = Se(a, G, t), P || (I = p.height - G.fontMetrics().supDrop * G.sizeMultiplier / t.sizeMultiplier);
        }
        if (o) {
          var Q = t.havingStyle(t.style.sub());
          w = Se(o, Q, t), P || (R = p.depth + Q.fontMetrics().subDrop * Q.sizeMultiplier / t.sizeMultiplier);
        }
        var J;
        t.style === te.DISPLAY ? J = C.sup1 : t.style.cramped ? J = C.sup3 : J = C.sup2;
        var ae = t.sizeMultiplier, ue = X(0.5 / C.ptPerEm / ae), me = null;
        if (w) {
          var Ae = e.base && e.base.type === "op" && e.base.name && (e.base.name === "\\oiint" || e.base.name === "\\oiiint");
          (p instanceof tt || Ae) && (me = X(-p.italic));
        }
        var Me;
        if (x && w) {
          I = Math.max(I, J, x.depth + 0.25 * C.xHeight), R = Math.max(R, C.sub2);
          var Ie = C.defaultRuleThickness, Be = 4 * Ie;
          if (I - x.depth - (w.height - R) < Be) {
            R = Be - (I - x.depth) + w.height;
            var Te = 0.8 * C.xHeight - (I - x.depth);
            Te > 0 && (I += Te, R -= Te);
          }
          var Re = [{ type: "elem", elem: w, shift: R, marginRight: ue, marginLeft: me }, { type: "elem", elem: x, shift: -I, marginRight: ue }];
          Me = L.makeVList({ positionType: "individualShift", children: Re }, t);
        } else if (w) {
          R = Math.max(R, C.sub1, w.height - 0.8 * C.xHeight);
          var De = [{ type: "elem", elem: w, marginLeft: me, marginRight: ue }];
          Me = L.makeVList({ positionType: "shift", positionData: R, children: De }, t);
        } else if (x)
          I = Math.max(I, J, x.depth + 0.25 * C.xHeight), Me = L.makeVList({ positionType: "shift", positionData: -I, children: [{ type: "elem", elem: x, marginRight: ue }] }, t);
        else
          throw new Error("supsub must have either sup or sub.");
        var st = Ur(p, "right") || "mord";
        return L.makeSpan([st], [p, L.makeSpan(["msupsub"], [Me])], t);
      }, mathmlBuilder: function(e, t) {
        var r = false, i, a;
        e.base && e.base.type === "horizBrace" && (a = !!e.sup, a === e.base.isOver && (r = true, i = e.base.isOver)), e.base && (e.base.type === "op" || e.base.type === "operatorname") && (e.base.parentIsSupSub = true);
        var o = [Ee(e.base, t)];
        e.sub && o.push(Ee(e.sub, t)), e.sup && o.push(Ee(e.sup, t));
        var p;
        if (r)
          p = i ? "mover" : "munder";
        else if (e.sub)
          if (e.sup) {
            var C = e.base;
            C && C.type === "op" && C.limits && t.style === te.DISPLAY || C && C.type === "operatorname" && C.alwaysHandleSupSub && (t.style === te.DISPLAY || C.limits) ? p = "munderover" : p = "msubsup";
          } else {
            var w = e.base;
            w && w.type === "op" && w.limits && (t.style === te.DISPLAY || w.alwaysHandleSupSub) || w && w.type === "operatorname" && w.alwaysHandleSupSub && (w.limits || t.style === te.DISPLAY) ? p = "munder" : p = "msub";
          }
        else {
          var x = e.base;
          x && x.type === "op" && x.limits && (t.style === te.DISPLAY || x.alwaysHandleSupSub) || x && x.type === "operatorname" && x.alwaysHandleSupSub && (x.limits || t.style === te.DISPLAY) ? p = "mover" : p = "msup";
        }
        return new Y.MathNode(p, o);
      } }), e0({ type: "atom", htmlBuilder: function(e, t) {
        return L.mathsym(e.text, e.mode, t, ["m" + e.family]);
      }, mathmlBuilder: function(e, t) {
        var r = new Y.MathNode("mo", [dt(e.text, e.mode)]);
        if (e.family === "bin") {
          var i = Yr(e, t);
          i === "bold-italic" && r.setAttribute("mathvariant", i);
        } else
          e.family === "punct" ? r.setAttribute("separator", "true") : (e.family === "open" || e.family === "close") && r.setAttribute("stretchy", "false");
        return r;
      } });
      var va = { mi: "italic", mn: "normal", mtext: "normal" };
      e0({ type: "mathord", htmlBuilder: function(e, t) {
        return L.makeOrd(e, t, "mathord");
      }, mathmlBuilder: function(e, t) {
        var r = new Y.MathNode("mi", [dt(e.text, e.mode, t)]), i = Yr(e, t) || "italic";
        return i !== va[r.type] && r.setAttribute("mathvariant", i), r;
      } }), e0({ type: "textord", htmlBuilder: function(e, t) {
        return L.makeOrd(e, t, "textord");
      }, mathmlBuilder: function(e, t) {
        var r = dt(e.text, e.mode, t), i = Yr(e, t) || "normal", a;
        return e.mode === "text" ? a = new Y.MathNode("mtext", [r]) : /[0-9]/.test(e.text) ? a = new Y.MathNode("mn", [r]) : e.text === "\\prime" ? a = new Y.MathNode("mo", [r]) : a = new Y.MathNode("mi", [r]), i !== va[a.type] && a.setAttribute("mathvariant", i), a;
      } });
      var mn = { "\\nobreak": "nobreak", "\\allowbreak": "allowbreak" }, cn = { " ": {}, "\\ ": {}, "~": { className: "nobreak" }, "\\space": {}, "\\nobreakspace": { className: "nobreak" } };
      e0({ type: "spacing", htmlBuilder: function(e, t) {
        if (cn.hasOwnProperty(e.text)) {
          var r = cn[e.text].className || "";
          if (e.mode === "text") {
            var i = L.makeOrd(e, t, "textord");
            return i.classes.push(r), i;
          } else
            return L.makeSpan(["mspace", r], [L.mathsym(e.text, e.mode, t)], t);
        } else {
          if (mn.hasOwnProperty(e.text))
            return L.makeSpan(["mspace", mn[e.text]], [], t);
          throw new u('Unknown type of space "' + e.text + '"');
        }
      }, mathmlBuilder: function(e, t) {
        var r;
        if (cn.hasOwnProperty(e.text))
          r = new Y.MathNode("mtext", [new Y.TextNode("\xA0")]);
        else {
          if (mn.hasOwnProperty(e.text))
            return new Y.MathNode("mspace");
          throw new u('Unknown type of space "' + e.text + '"');
        }
        return r;
      } });
      var xa = function() {
        var e = new Y.MathNode("mtd", []);
        return e.setAttribute("width", "50%"), e;
      };
      e0({ type: "tag", mathmlBuilder: function(e, t) {
        var r = new Y.MathNode("mtable", [new Y.MathNode("mtr", [xa(), new Y.MathNode("mtd", [Pt(e.body, t)]), xa(), new Y.MathNode("mtd", [Pt(e.tag, t)])])]);
        return r.setAttribute("width", "100%"), r;
      } });
      var ba = { "\\text": void 0, "\\textrm": "textrm", "\\textsf": "textsf", "\\texttt": "texttt", "\\textnormal": "textrm" }, ya = { "\\textbf": "textbf", "\\textmd": "textmd" }, $1 = { "\\textit": "textit", "\\textup": "textup" }, wa = function(e, t) {
        var r = e.font;
        return r ? ba[r] ? t.withTextFontFamily(ba[r]) : ya[r] ? t.withTextFontWeight(ya[r]) : t.withTextFontShape($1[r]) : t;
      };
      re({ type: "text", names: ["\\text", "\\textrm", "\\textsf", "\\texttt", "\\textnormal", "\\textbf", "\\textmd", "\\textit", "\\textup"], props: { numArgs: 1, argTypes: ["text"], allowedInArgument: true, allowedInText: true }, handler: function(e, t) {
        var r = e.parser, i = e.funcName, a = t[0];
        return { type: "text", mode: r.mode, body: Ue(a), font: i };
      }, htmlBuilder: function(e, t) {
        var r = wa(e, t), i = $e(e.body, r, true);
        return L.makeSpan(["mord", "text"], i, r);
      }, mathmlBuilder: function(e, t) {
        var r = wa(e, t);
        return Pt(e.body, r);
      } }), re({ type: "underline", names: ["\\underline"], props: { numArgs: 1, allowedInText: true }, handler: function(e, t) {
        var r = e.parser;
        return { type: "underline", mode: r.mode, body: t[0] };
      }, htmlBuilder: function(e, t) {
        var r = Se(e.body, t), i = L.makeLineSpan("underline-line", t), a = t.fontMetrics().defaultRuleThickness, o = L.makeVList({ positionType: "top", positionData: r.height, children: [{ type: "kern", size: a }, { type: "elem", elem: i }, { type: "kern", size: 3 * a }, { type: "elem", elem: r }] }, t);
        return L.makeSpan(["mord", "underline"], [o], t);
      }, mathmlBuilder: function(e, t) {
        var r = new Y.MathNode("mo", [new Y.TextNode("\u203E")]);
        r.setAttribute("stretchy", "true");
        var i = new Y.MathNode("munder", [Ee(e.body, t), r]);
        return i.setAttribute("accentunder", "true"), i;
      } }), re({ type: "vcenter", names: ["\\vcenter"], props: { numArgs: 1, argTypes: ["original"], allowedInText: false }, handler: function(e, t) {
        var r = e.parser;
        return { type: "vcenter", mode: r.mode, body: t[0] };
      }, htmlBuilder: function(e, t) {
        var r = Se(e.body, t), i = t.fontMetrics().axisHeight, a = 0.5 * (r.height - i - (r.depth + i));
        return L.makeVList({ positionType: "shift", positionData: a, children: [{ type: "elem", elem: r }] }, t);
      }, mathmlBuilder: function(e, t) {
        return new Y.MathNode("mpadded", [Ee(e.body, t)], ["vcenter"]);
      } }), re({ type: "verb", names: ["\\verb"], props: { numArgs: 0, allowedInText: true }, handler: function(e, t, r) {
        throw new u("\\verb ended by end of line instead of matching delimiter");
      }, htmlBuilder: function(e, t) {
        for (var r = ka(e), i = [], a = t.havingStyle(t.style.text()), o = 0; o < r.length; o++) {
          var p = r[o];
          p === "~" && (p = "\\textasciitilde"), i.push(L.makeSymbol(p, "Typewriter-Regular", e.mode, a, ["mord", "texttt"]));
        }
        return L.makeSpan(["mord", "text"].concat(a.sizingClasses(t)), L.tryCombineChars(i), a);
      }, mathmlBuilder: function(e, t) {
        var r = new Y.TextNode(ka(e)), i = new Y.MathNode("mtext", [r]);
        return i.setAttribute("mathvariant", "monospace"), i;
      } });
      var ka = function(e) {
        return e.body.replace(/ /g, e.star ? "\u2423" : "\xA0");
      }, Z1 = Ci, Vt = Z1, bt = function() {
        function h(e, t, r) {
          this.lexer = void 0, this.start = void 0, this.end = void 0, this.lexer = e, this.start = t, this.end = r;
        }
        return h.range = function(t, r) {
          return r ? !t || !t.loc || !r.loc || t.loc.lexer !== r.loc.lexer ? null : new h(t.loc.lexer, t.loc.start, r.loc.end) : t && t.loc;
        }, h;
      }(), t0 = function() {
        function h(t, r) {
          this.text = void 0, this.loc = void 0, this.noexpand = void 0, this.treatAsRelax = void 0, this.text = t, this.loc = r;
        }
        var e = h.prototype;
        return e.range = function(r, i) {
          return new h(i, bt.range(this, r));
        }, h;
      }(), Sa = `[ \r
	]`, Q1 = "\\\\[a-zA-Z@]+", K1 = "\\\\[^\uD800-\uDFFF]", J1 = "(" + Q1 + ")" + Sa + "*", _1 = `\\\\(
|[ \r	]+
?)[ \r	]*`, pn = "[\u0300-\u036F]", eo = new RegExp(pn + "+$"), to = "(" + Sa + "+)|" + (_1 + "|") + "([!-\\[\\]-\u2027\u202A-\uD7FF\uF900-\uFFFF]" + (pn + "*") + "|[\uD800-\uDBFF][\uDC00-\uDFFF]" + (pn + "*") + "|\\\\verb\\*([^]).*?\\4|\\\\verb([^*a-zA-Z]).*?\\5" + ("|" + J1) + ("|" + K1 + ")"), Aa = function() {
        function h(t, r) {
          this.input = void 0, this.settings = void 0, this.tokenRegex = void 0, this.catcodes = void 0, this.input = t, this.settings = r, this.tokenRegex = new RegExp(to, "g"), this.catcodes = { "%": 14, "~": 13 };
        }
        var e = h.prototype;
        return e.setCatcode = function(r, i) {
          this.catcodes[r] = i;
        }, e.lex = function() {
          var r = this.input, i = this.tokenRegex.lastIndex;
          if (i === r.length)
            return new t0("EOF", new bt(this, i, i));
          var a = this.tokenRegex.exec(r);
          if (a === null || a.index !== i)
            throw new u("Unexpected character: '" + r[i] + "'", new t0(r[i], new bt(this, i, i + 1)));
          var o = a[6] || a[3] || (a[2] ? "\\ " : " ");
          if (this.catcodes[o] === 14) {
            var p = r.indexOf(`
`, this.tokenRegex.lastIndex);
            return p === -1 ? (this.tokenRegex.lastIndex = r.length, this.settings.reportNonstrict("commentAtEnd", "% comment has no terminating newline; LaTeX would fail because of commenting the end of math mode (e.g. $)")) : this.tokenRegex.lastIndex = p + 1, this.lex();
          }
          return new t0(o, new bt(this, i, this.tokenRegex.lastIndex));
        }, h;
      }(), ro = function() {
        function h(t, r) {
          t === void 0 && (t = {}), r === void 0 && (r = {}), this.current = void 0, this.builtins = void 0, this.undefStack = void 0, this.current = r, this.builtins = t, this.undefStack = [];
        }
        var e = h.prototype;
        return e.beginGroup = function() {
          this.undefStack.push({});
        }, e.endGroup = function() {
          if (this.undefStack.length === 0)
            throw new u("Unbalanced namespace destruction: attempt to pop global namespace; please report this as a bug");
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
            for (var o = 0; o < this.undefStack.length; o++)
              delete this.undefStack[o][r];
            this.undefStack.length > 0 && (this.undefStack[this.undefStack.length - 1][r] = i);
          } else {
            var p = this.undefStack[this.undefStack.length - 1];
            p && !p.hasOwnProperty(r) && (p[r] = this.current[r]);
          }
          this.current[r] = i;
        }, h;
      }(), no = ca, io = no;
      b("\\noexpand", function(h) {
        var e = h.popToken();
        return h.isExpandable(e.text) && (e.noexpand = true, e.treatAsRelax = true), { tokens: [e], numArgs: 0 };
      }), b("\\expandafter", function(h) {
        var e = h.popToken();
        return h.expandOnce(true), { tokens: [e], numArgs: 0 };
      }), b("\\@firstoftwo", function(h) {
        var e = h.consumeArgs(2);
        return { tokens: e[0], numArgs: 0 };
      }), b("\\@secondoftwo", function(h) {
        var e = h.consumeArgs(2);
        return { tokens: e[1], numArgs: 0 };
      }), b("\\@ifnextchar", function(h) {
        var e = h.consumeArgs(3);
        h.consumeSpaces();
        var t = h.future();
        return e[0].length === 1 && e[0][0].text === t.text ? { tokens: e[1], numArgs: 0 } : { tokens: e[2], numArgs: 0 };
      }), b("\\@ifstar", "\\@ifnextchar *{\\@firstoftwo{#1}}"), b("\\TextOrMath", function(h) {
        var e = h.consumeArgs(2);
        return h.mode === "text" ? { tokens: e[0], numArgs: 0 } : { tokens: e[1], numArgs: 0 };
      });
      var za = { 0: 0, 1: 1, 2: 2, 3: 3, 4: 4, 5: 5, 6: 6, 7: 7, 8: 8, 9: 9, a: 10, A: 10, b: 11, B: 11, c: 12, C: 12, d: 13, D: 13, e: 14, E: 14, f: 15, F: 15 };
      b("\\char", function(h) {
        var e = h.popToken(), t, r = "";
        if (e.text === "'")
          t = 8, e = h.popToken();
        else if (e.text === '"')
          t = 16, e = h.popToken();
        else if (e.text === "`")
          if (e = h.popToken(), e.text[0] === "\\")
            r = e.text.charCodeAt(1);
          else {
            if (e.text === "EOF")
              throw new u("\\char` missing argument");
            r = e.text.charCodeAt(0);
          }
        else
          t = 10;
        if (t) {
          if (r = za[e.text], r == null || r >= t)
            throw new u("Invalid base-" + t + " digit " + e.text);
          for (var i; (i = za[h.future().text]) != null && i < t; )
            r *= t, r += i, h.popToken();
        }
        return "\\@char{" + r + "}";
      });
      var fn = function(e, t, r) {
        var i = e.consumeArg().tokens;
        if (i.length !== 1)
          throw new u("\\newcommand's first argument must be a macro name");
        var a = i[0].text, o = e.isDefined(a);
        if (o && !t)
          throw new u("\\newcommand{" + a + "} attempting to redefine " + (a + "; use \\renewcommand"));
        if (!o && !r)
          throw new u("\\renewcommand{" + a + "} when command " + a + " does not yet exist; use \\newcommand");
        var p = 0;
        if (i = e.consumeArg().tokens, i.length === 1 && i[0].text === "[") {
          for (var x = "", w = e.expandNextToken(); w.text !== "]" && w.text !== "EOF"; )
            x += w.text, w = e.expandNextToken();
          if (!x.match(/^\s*[0-9]+\s*$/))
            throw new u("Invalid number of arguments: " + x);
          p = parseInt(x), i = e.consumeArg().tokens;
        }
        return e.macros.set(a, { tokens: i, numArgs: p }), "";
      };
      b("\\newcommand", function(h) {
        return fn(h, false, true);
      }), b("\\renewcommand", function(h) {
        return fn(h, true, false);
      }), b("\\providecommand", function(h) {
        return fn(h, true, true);
      }), b("\\message", function(h) {
        var e = h.consumeArgs(1)[0];
        return console.log(e.reverse().map(function(t) {
          return t.text;
        }).join("")), "";
      }), b("\\errmessage", function(h) {
        var e = h.consumeArgs(1)[0];
        return console.error(e.reverse().map(function(t) {
          return t.text;
        }).join("")), "";
      }), b("\\show", function(h) {
        var e = h.popToken(), t = e.text;
        return console.log(e, h.macros.get(t), Vt[t], ke.math[t], ke.text[t]), "";
      }), b("\\bgroup", "{"), b("\\egroup", "}"), b("~", "\\nobreakspace"), b("\\lq", "`"), b("\\rq", "'"), b("\\aa", "\\r a"), b("\\AA", "\\r A"), b("\\textcopyright", "\\html@mathml{\\textcircled{c}}{\\char`\xA9}"), b("\\copyright", "\\TextOrMath{\\textcopyright}{\\text{\\textcopyright}}"), b("\\textregistered", "\\html@mathml{\\textcircled{\\scriptsize R}}{\\char`\xAE}"), b("\u212C", "\\mathscr{B}"), b("\u2130", "\\mathscr{E}"), b("\u2131", "\\mathscr{F}"), b("\u210B", "\\mathscr{H}"), b("\u2110", "\\mathscr{I}"), b("\u2112", "\\mathscr{L}"), b("\u2133", "\\mathscr{M}"), b("\u211B", "\\mathscr{R}"), b("\u212D", "\\mathfrak{C}"), b("\u210C", "\\mathfrak{H}"), b("\u2128", "\\mathfrak{Z}"), b("\\Bbbk", "\\Bbb{k}"), b("\xB7", "\\cdotp"), b("\\llap", "\\mathllap{\\textrm{#1}}"), b("\\rlap", "\\mathrlap{\\textrm{#1}}"), b("\\clap", "\\mathclap{\\textrm{#1}}"), b("\\mathstrut", "\\vphantom{(}"), b("\\underbar", "\\underline{\\text{#1}}"), b("\\not", '\\html@mathml{\\mathrel{\\mathrlap\\@not}}{\\char"338}'), b("\\neq", "\\html@mathml{\\mathrel{\\not=}}{\\mathrel{\\char`\u2260}}"), b("\\ne", "\\neq"), b("\u2260", "\\neq"), b("\\notin", "\\html@mathml{\\mathrel{{\\in}\\mathllap{/\\mskip1mu}}}{\\mathrel{\\char`\u2209}}"), b("\u2209", "\\notin"), b("\u2258", "\\html@mathml{\\mathrel{=\\kern{-1em}\\raisebox{0.4em}{$\\scriptsize\\frown$}}}{\\mathrel{\\char`\u2258}}"), b("\u2259", "\\html@mathml{\\stackrel{\\tiny\\wedge}{=}}{\\mathrel{\\char`\u2258}}"), b("\u225A", "\\html@mathml{\\stackrel{\\tiny\\vee}{=}}{\\mathrel{\\char`\u225A}}"), b("\u225B", "\\html@mathml{\\stackrel{\\scriptsize\\star}{=}}{\\mathrel{\\char`\u225B}}"), b("\u225D", "\\html@mathml{\\stackrel{\\tiny\\mathrm{def}}{=}}{\\mathrel{\\char`\u225D}}"), b("\u225E", "\\html@mathml{\\stackrel{\\tiny\\mathrm{m}}{=}}{\\mathrel{\\char`\u225E}}"), b("\u225F", "\\html@mathml{\\stackrel{\\tiny?}{=}}{\\mathrel{\\char`\u225F}}"), b("\u27C2", "\\perp"), b("\u203C", "\\mathclose{!\\mkern-0.8mu!}"), b("\u220C", "\\notni"), b("\u231C", "\\ulcorner"), b("\u231D", "\\urcorner"), b("\u231E", "\\llcorner"), b("\u231F", "\\lrcorner"), b("\xA9", "\\copyright"), b("\xAE", "\\textregistered"), b("\uFE0F", "\\textregistered"), b("\\ulcorner", '\\html@mathml{\\@ulcorner}{\\mathop{\\char"231c}}'), b("\\urcorner", '\\html@mathml{\\@urcorner}{\\mathop{\\char"231d}}'), b("\\llcorner", '\\html@mathml{\\@llcorner}{\\mathop{\\char"231e}}'), b("\\lrcorner", '\\html@mathml{\\@lrcorner}{\\mathop{\\char"231f}}'), b("\\vdots", "\\mathord{\\varvdots\\rule{0pt}{15pt}}"), b("\u22EE", "\\vdots"), b("\\varGamma", "\\mathit{\\Gamma}"), b("\\varDelta", "\\mathit{\\Delta}"), b("\\varTheta", "\\mathit{\\Theta}"), b("\\varLambda", "\\mathit{\\Lambda}"), b("\\varXi", "\\mathit{\\Xi}"), b("\\varPi", "\\mathit{\\Pi}"), b("\\varSigma", "\\mathit{\\Sigma}"), b("\\varUpsilon", "\\mathit{\\Upsilon}"), b("\\varPhi", "\\mathit{\\Phi}"), b("\\varPsi", "\\mathit{\\Psi}"), b("\\varOmega", "\\mathit{\\Omega}"), b("\\substack", "\\begin{subarray}{c}#1\\end{subarray}"), b("\\colon", "\\nobreak\\mskip2mu\\mathpunct{}\\mathchoice{\\mkern-3mu}{\\mkern-3mu}{}{}{:}\\mskip6mu"), b("\\boxed", "\\fbox{$\\displaystyle{#1}$}"), b("\\iff", "\\DOTSB\\;\\Longleftrightarrow\\;"), b("\\implies", "\\DOTSB\\;\\Longrightarrow\\;"), b("\\impliedby", "\\DOTSB\\;\\Longleftarrow\\;");
      var Ca = { ",": "\\dotsc", "\\not": "\\dotsb", "+": "\\dotsb", "=": "\\dotsb", "<": "\\dotsb", ">": "\\dotsb", "-": "\\dotsb", "*": "\\dotsb", ":": "\\dotsb", "\\DOTSB": "\\dotsb", "\\coprod": "\\dotsb", "\\bigvee": "\\dotsb", "\\bigwedge": "\\dotsb", "\\biguplus": "\\dotsb", "\\bigcap": "\\dotsb", "\\bigcup": "\\dotsb", "\\prod": "\\dotsb", "\\sum": "\\dotsb", "\\bigotimes": "\\dotsb", "\\bigoplus": "\\dotsb", "\\bigodot": "\\dotsb", "\\bigsqcup": "\\dotsb", "\\And": "\\dotsb", "\\longrightarrow": "\\dotsb", "\\Longrightarrow": "\\dotsb", "\\longleftarrow": "\\dotsb", "\\Longleftarrow": "\\dotsb", "\\longleftrightarrow": "\\dotsb", "\\Longleftrightarrow": "\\dotsb", "\\mapsto": "\\dotsb", "\\longmapsto": "\\dotsb", "\\hookrightarrow": "\\dotsb", "\\doteq": "\\dotsb", "\\mathbin": "\\dotsb", "\\mathrel": "\\dotsb", "\\relbar": "\\dotsb", "\\Relbar": "\\dotsb", "\\xrightarrow": "\\dotsb", "\\xleftarrow": "\\dotsb", "\\DOTSI": "\\dotsi", "\\int": "\\dotsi", "\\oint": "\\dotsi", "\\iint": "\\dotsi", "\\iiint": "\\dotsi", "\\iiiint": "\\dotsi", "\\idotsint": "\\dotsi", "\\DOTSX": "\\dotsx" };
      b("\\dots", function(h) {
        var e = "\\dotso", t = h.expandAfterFuture().text;
        return t in Ca ? e = Ca[t] : (t.substr(0, 4) === "\\not" || t in ke.math && H.contains(["bin", "rel"], ke.math[t].group)) && (e = "\\dotsb"), e;
      });
      var dn = { ")": true, "]": true, "\\rbrack": true, "\\}": true, "\\rbrace": true, "\\rangle": true, "\\rceil": true, "\\rfloor": true, "\\rgroup": true, "\\rmoustache": true, "\\right": true, "\\bigr": true, "\\biggr": true, "\\Bigr": true, "\\Biggr": true, $: true, ";": true, ".": true, ",": true };
      b("\\dotso", function(h) {
        var e = h.future().text;
        return e in dn ? "\\ldots\\," : "\\ldots";
      }), b("\\dotsc", function(h) {
        var e = h.future().text;
        return e in dn && e !== "," ? "\\ldots\\," : "\\ldots";
      }), b("\\cdots", function(h) {
        var e = h.future().text;
        return e in dn ? "\\@cdots\\," : "\\@cdots";
      }), b("\\dotsb", "\\cdots"), b("\\dotsm", "\\cdots"), b("\\dotsi", "\\!\\cdots"), b("\\dotsx", "\\ldots\\,"), b("\\DOTSI", "\\relax"), b("\\DOTSB", "\\relax"), b("\\DOTSX", "\\relax"), b("\\tmspace", "\\TextOrMath{\\kern#1#3}{\\mskip#1#2}\\relax"), b("\\,", "\\tmspace+{3mu}{.1667em}"), b("\\thinspace", "\\,"), b("\\>", "\\mskip{4mu}"), b("\\:", "\\tmspace+{4mu}{.2222em}"), b("\\medspace", "\\:"), b("\\;", "\\tmspace+{5mu}{.2777em}"), b("\\thickspace", "\\;"), b("\\!", "\\tmspace-{3mu}{.1667em}"), b("\\negthinspace", "\\!"), b("\\negmedspace", "\\tmspace-{4mu}{.2222em}"), b("\\negthickspace", "\\tmspace-{5mu}{.277em}"), b("\\enspace", "\\kern.5em "), b("\\enskip", "\\hskip.5em\\relax"), b("\\quad", "\\hskip1em\\relax"), b("\\qquad", "\\hskip2em\\relax"), b("\\tag", "\\@ifstar\\tag@literal\\tag@paren"), b("\\tag@paren", "\\tag@literal{({#1})}"), b("\\tag@literal", function(h) {
        if (h.macros.get("\\df@tag"))
          throw new u("Multiple \\tag");
        return "\\gdef\\df@tag{\\text{#1}}";
      }), b("\\bmod", "\\mathchoice{\\mskip1mu}{\\mskip1mu}{\\mskip5mu}{\\mskip5mu}\\mathbin{\\rm mod}\\mathchoice{\\mskip1mu}{\\mskip1mu}{\\mskip5mu}{\\mskip5mu}"), b("\\pod", "\\allowbreak\\mathchoice{\\mkern18mu}{\\mkern8mu}{\\mkern8mu}{\\mkern8mu}(#1)"), b("\\pmod", "\\pod{{\\rm mod}\\mkern6mu#1}"), b("\\mod", "\\allowbreak\\mathchoice{\\mkern18mu}{\\mkern12mu}{\\mkern12mu}{\\mkern12mu}{\\rm mod}\\,\\,#1"), b("\\pmb", "\\html@mathml{\\@binrel{#1}{\\mathrlap{#1}\\kern0.5px#1}}{\\mathbf{#1}}"), b("\\newline", "\\\\\\relax"), b("\\TeX", "\\textrm{\\html@mathml{T\\kern-.1667em\\raisebox{-.5ex}{E}\\kern-.125emX}{TeX}}");
      var Ba = X(pt["Main-Regular"]["T".charCodeAt(0)][1] - 0.7 * pt["Main-Regular"]["A".charCodeAt(0)][1]);
      b("\\LaTeX", "\\textrm{\\html@mathml{" + ("L\\kern-.36em\\raisebox{" + Ba + "}{\\scriptstyle A}") + "\\kern-.15em\\TeX}{LaTeX}}"), b("\\KaTeX", "\\textrm{\\html@mathml{" + ("K\\kern-.17em\\raisebox{" + Ba + "}{\\scriptstyle A}") + "\\kern-.15em\\TeX}{KaTeX}}"), b("\\hspace", "\\@ifstar\\@hspacer\\@hspace"), b("\\@hspace", "\\hskip #1\\relax"), b("\\@hspacer", "\\rule{0pt}{0pt}\\hskip #1\\relax"), b("\\ordinarycolon", ":"), b("\\vcentcolon", "\\mathrel{\\mathop\\ordinarycolon}"), b("\\dblcolon", '\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-.9mu}\\vcentcolon}}{\\mathop{\\char"2237}}'), b("\\coloneqq", '\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-1.2mu}=}}{\\mathop{\\char"2254}}'), b("\\Coloneqq", '\\html@mathml{\\mathrel{\\dblcolon\\mathrel{\\mkern-1.2mu}=}}{\\mathop{\\char"2237\\char"3d}}'), b("\\coloneq", '\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-1.2mu}\\mathrel{-}}}{\\mathop{\\char"3a\\char"2212}}'), b("\\Coloneq", '\\html@mathml{\\mathrel{\\dblcolon\\mathrel{\\mkern-1.2mu}\\mathrel{-}}}{\\mathop{\\char"2237\\char"2212}}'), b("\\eqqcolon", '\\html@mathml{\\mathrel{=\\mathrel{\\mkern-1.2mu}\\vcentcolon}}{\\mathop{\\char"2255}}'), b("\\Eqqcolon", '\\html@mathml{\\mathrel{=\\mathrel{\\mkern-1.2mu}\\dblcolon}}{\\mathop{\\char"3d\\char"2237}}'), b("\\eqcolon", '\\html@mathml{\\mathrel{\\mathrel{-}\\mathrel{\\mkern-1.2mu}\\vcentcolon}}{\\mathop{\\char"2239}}'), b("\\Eqcolon", '\\html@mathml{\\mathrel{\\mathrel{-}\\mathrel{\\mkern-1.2mu}\\dblcolon}}{\\mathop{\\char"2212\\char"2237}}'), b("\\colonapprox", '\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-1.2mu}\\approx}}{\\mathop{\\char"3a\\char"2248}}'), b("\\Colonapprox", '\\html@mathml{\\mathrel{\\dblcolon\\mathrel{\\mkern-1.2mu}\\approx}}{\\mathop{\\char"2237\\char"2248}}'), b("\\colonsim", '\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-1.2mu}\\sim}}{\\mathop{\\char"3a\\char"223c}}'), b("\\Colonsim", '\\html@mathml{\\mathrel{\\dblcolon\\mathrel{\\mkern-1.2mu}\\sim}}{\\mathop{\\char"2237\\char"223c}}'), b("\u2237", "\\dblcolon"), b("\u2239", "\\eqcolon"), b("\u2254", "\\coloneqq"), b("\u2255", "\\eqqcolon"), b("\u2A74", "\\Coloneqq"), b("\\ratio", "\\vcentcolon"), b("\\coloncolon", "\\dblcolon"), b("\\colonequals", "\\coloneqq"), b("\\coloncolonequals", "\\Coloneqq"), b("\\equalscolon", "\\eqqcolon"), b("\\equalscoloncolon", "\\Eqqcolon"), b("\\colonminus", "\\coloneq"), b("\\coloncolonminus", "\\Coloneq"), b("\\minuscolon", "\\eqcolon"), b("\\minuscoloncolon", "\\Eqcolon"), b("\\coloncolonapprox", "\\Colonapprox"), b("\\coloncolonsim", "\\Colonsim"), b("\\simcolon", "\\mathrel{\\sim\\mathrel{\\mkern-1.2mu}\\vcentcolon}"), b("\\simcoloncolon", "\\mathrel{\\sim\\mathrel{\\mkern-1.2mu}\\dblcolon}"), b("\\approxcolon", "\\mathrel{\\approx\\mathrel{\\mkern-1.2mu}\\vcentcolon}"), b("\\approxcoloncolon", "\\mathrel{\\approx\\mathrel{\\mkern-1.2mu}\\dblcolon}"), b("\\notni", "\\html@mathml{\\not\\ni}{\\mathrel{\\char`\u220C}}"), b("\\limsup", "\\DOTSB\\operatorname*{lim\\,sup}"), b("\\liminf", "\\DOTSB\\operatorname*{lim\\,inf}"), b("\\injlim", "\\DOTSB\\operatorname*{inj\\,lim}"), b("\\projlim", "\\DOTSB\\operatorname*{proj\\,lim}"), b("\\varlimsup", "\\DOTSB\\operatorname*{\\overline{lim}}"), b("\\varliminf", "\\DOTSB\\operatorname*{\\underline{lim}}"), b("\\varinjlim", "\\DOTSB\\operatorname*{\\underrightarrow{lim}}"), b("\\varprojlim", "\\DOTSB\\operatorname*{\\underleftarrow{lim}}"), b("\\gvertneqq", "\\html@mathml{\\@gvertneqq}{\u2269}"), b("\\lvertneqq", "\\html@mathml{\\@lvertneqq}{\u2268}"), b("\\ngeqq", "\\html@mathml{\\@ngeqq}{\u2271}"), b("\\ngeqslant", "\\html@mathml{\\@ngeqslant}{\u2271}"), b("\\nleqq", "\\html@mathml{\\@nleqq}{\u2270}"), b("\\nleqslant", "\\html@mathml{\\@nleqslant}{\u2270}"), b("\\nshortmid", "\\html@mathml{\\@nshortmid}{\u2224}"), b("\\nshortparallel", "\\html@mathml{\\@nshortparallel}{\u2226}"), b("\\nsubseteqq", "\\html@mathml{\\@nsubseteqq}{\u2288}"), b("\\nsupseteqq", "\\html@mathml{\\@nsupseteqq}{\u2289}"), b("\\varsubsetneq", "\\html@mathml{\\@varsubsetneq}{\u228A}"), b("\\varsubsetneqq", "\\html@mathml{\\@varsubsetneqq}{\u2ACB}"), b("\\varsupsetneq", "\\html@mathml{\\@varsupsetneq}{\u228B}"), b("\\varsupsetneqq", "\\html@mathml{\\@varsupsetneqq}{\u2ACC}"), b("\\imath", "\\html@mathml{\\@imath}{\u0131}"), b("\\jmath", "\\html@mathml{\\@jmath}{\u0237}"), b("\\llbracket", "\\html@mathml{\\mathopen{[\\mkern-3.2mu[}}{\\mathopen{\\char`\u27E6}}"), b("\\rrbracket", "\\html@mathml{\\mathclose{]\\mkern-3.2mu]}}{\\mathclose{\\char`\u27E7}}"), b("\u27E6", "\\llbracket"), b("\u27E7", "\\rrbracket"), b("\\lBrace", "\\html@mathml{\\mathopen{\\{\\mkern-3.2mu[}}{\\mathopen{\\char`\u2983}}"), b("\\rBrace", "\\html@mathml{\\mathclose{]\\mkern-3.2mu\\}}}{\\mathclose{\\char`\u2984}}"), b("\u2983", "\\lBrace"), b("\u2984", "\\rBrace"), b("\\minuso", "\\mathbin{\\html@mathml{{\\mathrlap{\\mathchoice{\\kern{0.145em}}{\\kern{0.145em}}{\\kern{0.1015em}}{\\kern{0.0725em}}\\circ}{-}}}{\\char`\u29B5}}"), b("\u29B5", "\\minuso"), b("\\darr", "\\downarrow"), b("\\dArr", "\\Downarrow"), b("\\Darr", "\\Downarrow"), b("\\lang", "\\langle"), b("\\rang", "\\rangle"), b("\\uarr", "\\uparrow"), b("\\uArr", "\\Uparrow"), b("\\Uarr", "\\Uparrow"), b("\\N", "\\mathbb{N}"), b("\\R", "\\mathbb{R}"), b("\\Z", "\\mathbb{Z}"), b("\\alef", "\\aleph"), b("\\alefsym", "\\aleph"), b("\\Alpha", "\\mathrm{A}"), b("\\Beta", "\\mathrm{B}"), b("\\bull", "\\bullet"), b("\\Chi", "\\mathrm{X}"), b("\\clubs", "\\clubsuit"), b("\\cnums", "\\mathbb{C}"), b("\\Complex", "\\mathbb{C}"), b("\\Dagger", "\\ddagger"), b("\\diamonds", "\\diamondsuit"), b("\\empty", "\\emptyset"), b("\\Epsilon", "\\mathrm{E}"), b("\\Eta", "\\mathrm{H}"), b("\\exist", "\\exists"), b("\\harr", "\\leftrightarrow"), b("\\hArr", "\\Leftrightarrow"), b("\\Harr", "\\Leftrightarrow"), b("\\hearts", "\\heartsuit"), b("\\image", "\\Im"), b("\\infin", "\\infty"), b("\\Iota", "\\mathrm{I}"), b("\\isin", "\\in"), b("\\Kappa", "\\mathrm{K}"), b("\\larr", "\\leftarrow"), b("\\lArr", "\\Leftarrow"), b("\\Larr", "\\Leftarrow"), b("\\lrarr", "\\leftrightarrow"), b("\\lrArr", "\\Leftrightarrow"), b("\\Lrarr", "\\Leftrightarrow"), b("\\Mu", "\\mathrm{M}"), b("\\natnums", "\\mathbb{N}"), b("\\Nu", "\\mathrm{N}"), b("\\Omicron", "\\mathrm{O}"), b("\\plusmn", "\\pm"), b("\\rarr", "\\rightarrow"), b("\\rArr", "\\Rightarrow"), b("\\Rarr", "\\Rightarrow"), b("\\real", "\\Re"), b("\\reals", "\\mathbb{R}"), b("\\Reals", "\\mathbb{R}"), b("\\Rho", "\\mathrm{P}"), b("\\sdot", "\\cdot"), b("\\sect", "\\S"), b("\\spades", "\\spadesuit"), b("\\sub", "\\subset"), b("\\sube", "\\subseteq"), b("\\supe", "\\supseteq"), b("\\Tau", "\\mathrm{T}"), b("\\thetasym", "\\vartheta"), b("\\weierp", "\\wp"), b("\\Zeta", "\\mathrm{Z}"), b("\\argmin", "\\DOTSB\\operatorname*{arg\\,min}"), b("\\argmax", "\\DOTSB\\operatorname*{arg\\,max}"), b("\\plim", "\\DOTSB\\mathop{\\operatorname{plim}}\\limits"), b("\\bra", "\\mathinner{\\langle{#1}|}"), b("\\ket", "\\mathinner{|{#1}\\rangle}"), b("\\braket", "\\mathinner{\\langle{#1}\\rangle}"), b("\\Bra", "\\left\\langle#1\\right|"), b("\\Ket", "\\left|#1\\right\\rangle"), b("\\angln", "{\\angl n}"), b("\\blue", "\\textcolor{##6495ed}{#1}"), b("\\orange", "\\textcolor{##ffa500}{#1}"), b("\\pink", "\\textcolor{##ff00af}{#1}"), b("\\red", "\\textcolor{##df0030}{#1}"), b("\\green", "\\textcolor{##28ae7b}{#1}"), b("\\gray", "\\textcolor{gray}{#1}"), b("\\purple", "\\textcolor{##9d38bd}{#1}"), b("\\blueA", "\\textcolor{##ccfaff}{#1}"), b("\\blueB", "\\textcolor{##80f6ff}{#1}"), b("\\blueC", "\\textcolor{##63d9ea}{#1}"), b("\\blueD", "\\textcolor{##11accd}{#1}"), b("\\blueE", "\\textcolor{##0c7f99}{#1}"), b("\\tealA", "\\textcolor{##94fff5}{#1}"), b("\\tealB", "\\textcolor{##26edd5}{#1}"), b("\\tealC", "\\textcolor{##01d1c1}{#1}"), b("\\tealD", "\\textcolor{##01a995}{#1}"), b("\\tealE", "\\textcolor{##208170}{#1}"), b("\\greenA", "\\textcolor{##b6ffb0}{#1}"), b("\\greenB", "\\textcolor{##8af281}{#1}"), b("\\greenC", "\\textcolor{##74cf70}{#1}"), b("\\greenD", "\\textcolor{##1fab54}{#1}"), b("\\greenE", "\\textcolor{##0d923f}{#1}"), b("\\goldA", "\\textcolor{##ffd0a9}{#1}"), b("\\goldB", "\\textcolor{##ffbb71}{#1}"), b("\\goldC", "\\textcolor{##ff9c39}{#1}"), b("\\goldD", "\\textcolor{##e07d10}{#1}"), b("\\goldE", "\\textcolor{##a75a05}{#1}"), b("\\redA", "\\textcolor{##fca9a9}{#1}"), b("\\redB", "\\textcolor{##ff8482}{#1}"), b("\\redC", "\\textcolor{##f9685d}{#1}"), b("\\redD", "\\textcolor{##e84d39}{#1}"), b("\\redE", "\\textcolor{##bc2612}{#1}"), b("\\maroonA", "\\textcolor{##ffbde0}{#1}"), b("\\maroonB", "\\textcolor{##ff92c6}{#1}"), b("\\maroonC", "\\textcolor{##ed5fa6}{#1}"), b("\\maroonD", "\\textcolor{##ca337c}{#1}"), b("\\maroonE", "\\textcolor{##9e034e}{#1}"), b("\\purpleA", "\\textcolor{##ddd7ff}{#1}"), b("\\purpleB", "\\textcolor{##c6b9fc}{#1}"), b("\\purpleC", "\\textcolor{##aa87ff}{#1}"), b("\\purpleD", "\\textcolor{##7854ab}{#1}"), b("\\purpleE", "\\textcolor{##543b78}{#1}"), b("\\mintA", "\\textcolor{##f5f9e8}{#1}"), b("\\mintB", "\\textcolor{##edf2df}{#1}"), b("\\mintC", "\\textcolor{##e0e5cc}{#1}"), b("\\grayA", "\\textcolor{##f6f7f7}{#1}"), b("\\grayB", "\\textcolor{##f0f1f2}{#1}"), b("\\grayC", "\\textcolor{##e3e5e6}{#1}"), b("\\grayD", "\\textcolor{##d6d8da}{#1}"), b("\\grayE", "\\textcolor{##babec2}{#1}"), b("\\grayF", "\\textcolor{##888d93}{#1}"), b("\\grayG", "\\textcolor{##626569}{#1}"), b("\\grayH", "\\textcolor{##3b3e40}{#1}"), b("\\grayI", "\\textcolor{##21242c}{#1}"), b("\\kaBlue", "\\textcolor{##314453}{#1}"), b("\\kaGreen", "\\textcolor{##71B307}{#1}");
      var Ma = { "\\relax": true, "^": true, _: true, "\\limits": true, "\\nolimits": true }, ao = function() {
        function h(t, r, i) {
          this.settings = void 0, this.expansionCount = void 0, this.lexer = void 0, this.macros = void 0, this.stack = void 0, this.mode = void 0, this.settings = r, this.expansionCount = 0, this.feed(t), this.macros = new ro(io, r.macros), this.mode = i, this.stack = [];
        }
        var e = h.prototype;
        return e.feed = function(r) {
          this.lexer = new Aa(r, this.settings);
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
          var i, a, o;
          if (r) {
            if (this.consumeSpaces(), this.future().text !== "[")
              return null;
            i = this.popToken();
            var p = this.consumeArg(["]"]);
            o = p.tokens, a = p.end;
          } else {
            var x = this.consumeArg();
            o = x.tokens, i = x.start, a = x.end;
          }
          return this.pushToken(new t0("EOF", a.loc)), this.pushTokens(o), i.range(a, "");
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
          var o = this.future(), p, x = 0, w = 0;
          do {
            if (p = this.popToken(), i.push(p), p.text === "{")
              ++x;
            else if (p.text === "}") {
              if (--x, x === -1)
                throw new u("Extra }", p);
            } else if (p.text === "EOF")
              throw new u("Unexpected end of input in a macro argument, expected '" + (r && a ? r[w] : "}") + "'", p);
            if (r && a)
              if ((x === 0 || x === 1 && r[w] === "{") && p.text === r[w]) {
                if (++w, w === r.length) {
                  i.splice(-w, w);
                  break;
                }
              } else
                w = 0;
          } while (x !== 0 || a);
          return o.text === "{" && i[i.length - 1].text === "}" && (i.pop(), i.shift()), i.reverse(), { tokens: i, start: o, end: p };
        }, e.consumeArgs = function(r, i) {
          if (i) {
            if (i.length !== r + 1)
              throw new u("The length of delimiters doesn't match the number of args!");
            for (var a = i[0], o = 0; o < a.length; o++) {
              var p = this.popToken();
              if (a[o] !== p.text)
                throw new u("Use of the macro doesn't match its definition", p);
            }
          }
          for (var x = [], w = 0; w < r; w++)
            x.push(this.consumeArg(i && i[w + 1]).tokens);
          return x;
        }, e.expandOnce = function(r) {
          var i = this.popToken(), a = i.text, o = i.noexpand ? null : this._getExpansion(a);
          if (o == null || r && o.unexpandable) {
            if (r && o == null && a[0] === "\\" && !this.isDefined(a))
              throw new u("Undefined control sequence: " + a);
            return this.pushToken(i), i;
          }
          if (this.expansionCount++, this.expansionCount > this.settings.maxExpand)
            throw new u("Too many expansions: infinite loop or need to increase maxExpand setting");
          var p = o.tokens, x = this.consumeArgs(o.numArgs, o.delimiters);
          if (o.numArgs) {
            p = p.slice();
            for (var w = p.length - 1; w >= 0; --w) {
              var C = p[w];
              if (C.text === "#") {
                if (w === 0)
                  throw new u("Incomplete placeholder at end of macro body", C);
                if (C = p[--w], C.text === "#")
                  p.splice(w + 1, 1);
                else if (/^[1-9]$/.test(C.text)) {
                  var I;
                  (I = p).splice.apply(I, [w, 2].concat(x[+C.text - 1]));
                } else
                  throw new u("Not a valid argument number", C);
              }
            }
          }
          return this.pushTokens(p), p;
        }, e.expandAfterFuture = function() {
          return this.expandOnce(), this.future();
        }, e.expandNextToken = function() {
          for (; ; ) {
            var r = this.expandOnce();
            if (r instanceof t0)
              if (r.text === "\\relax" || r.treatAsRelax)
                this.stack.pop();
              else
                return this.stack.pop();
          }
          throw new Error();
        }, e.expandMacro = function(r) {
          return this.macros.has(r) ? this.expandTokens([new t0(r)]) : void 0;
        }, e.expandTokens = function(r) {
          var i = [], a = this.stack.length;
          for (this.pushTokens(r); this.stack.length > a; ) {
            var o = this.expandOnce(true);
            o instanceof t0 && (o.treatAsRelax && (o.noexpand = false, o.treatAsRelax = false), i.push(this.stack.pop()));
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
          var o = typeof i == "function" ? i(this) : i;
          if (typeof o == "string") {
            var p = 0;
            if (o.indexOf("#") !== -1)
              for (var x = o.replace(/##/g, ""); x.indexOf("#" + (p + 1)) !== -1; )
                ++p;
            for (var w = new Aa(o, this.settings), C = [], I = w.lex(); I.text !== "EOF"; )
              C.push(I), I = w.lex();
            C.reverse();
            var R = { tokens: C, numArgs: p };
            return R;
          }
          return o;
        }, e.isDefined = function(r) {
          return this.macros.has(r) || Vt.hasOwnProperty(r) || ke.math.hasOwnProperty(r) || ke.text.hasOwnProperty(r) || Ma.hasOwnProperty(r);
        }, e.isExpandable = function(r) {
          var i = this.macros.get(r);
          return i != null ? typeof i == "string" || typeof i == "function" || !i.unexpandable : Vt.hasOwnProperty(r) && !Vt[r].primitive;
        }, h;
      }(), gn = { "\u0301": { text: "\\'", math: "\\acute" }, "\u0300": { text: "\\`", math: "\\grave" }, "\u0308": { text: '\\"', math: "\\ddot" }, "\u0303": { text: "\\~", math: "\\tilde" }, "\u0304": { text: "\\=", math: "\\bar" }, "\u0306": { text: "\\u", math: "\\breve" }, "\u030C": { text: "\\v", math: "\\check" }, "\u0302": { text: "\\^", math: "\\hat" }, "\u0307": { text: "\\.", math: "\\dot" }, "\u030A": { text: "\\r", math: "\\mathring" }, "\u030B": { text: "\\H" }, "\u0327": { text: "\\c" } }, Ta = { \u00E1: "a\u0301", \u00E0: "a\u0300", \u00E4: "a\u0308", \u01DF: "a\u0308\u0304", \u00E3: "a\u0303", \u0101: "a\u0304", \u0103: "a\u0306", \u1EAF: "a\u0306\u0301", \u1EB1: "a\u0306\u0300", \u1EB5: "a\u0306\u0303", \u01CE: "a\u030C", \u00E2: "a\u0302", \u1EA5: "a\u0302\u0301", \u1EA7: "a\u0302\u0300", \u1EAB: "a\u0302\u0303", \u0227: "a\u0307", \u01E1: "a\u0307\u0304", \u00E5: "a\u030A", \u01FB: "a\u030A\u0301", \u1E03: "b\u0307", \u0107: "c\u0301", \u1E09: "c\u0327\u0301", \u010D: "c\u030C", \u0109: "c\u0302", \u010B: "c\u0307", \u00E7: "c\u0327", \u010F: "d\u030C", \u1E0B: "d\u0307", \u1E11: "d\u0327", \u00E9: "e\u0301", \u00E8: "e\u0300", \u00EB: "e\u0308", \u1EBD: "e\u0303", \u0113: "e\u0304", \u1E17: "e\u0304\u0301", \u1E15: "e\u0304\u0300", \u0115: "e\u0306", \u1E1D: "e\u0327\u0306", \u011B: "e\u030C", \u00EA: "e\u0302", \u1EBF: "e\u0302\u0301", \u1EC1: "e\u0302\u0300", \u1EC5: "e\u0302\u0303", \u0117: "e\u0307", \u0229: "e\u0327", \u1E1F: "f\u0307", \u01F5: "g\u0301", \u1E21: "g\u0304", \u011F: "g\u0306", \u01E7: "g\u030C", \u011D: "g\u0302", \u0121: "g\u0307", \u0123: "g\u0327", \u1E27: "h\u0308", \u021F: "h\u030C", \u0125: "h\u0302", \u1E23: "h\u0307", \u1E29: "h\u0327", \u00ED: "i\u0301", \u00EC: "i\u0300", \u00EF: "i\u0308", \u1E2F: "i\u0308\u0301", \u0129: "i\u0303", \u012B: "i\u0304", \u012D: "i\u0306", \u01D0: "i\u030C", \u00EE: "i\u0302", \u01F0: "j\u030C", \u0135: "j\u0302", \u1E31: "k\u0301", \u01E9: "k\u030C", \u0137: "k\u0327", \u013A: "l\u0301", \u013E: "l\u030C", \u013C: "l\u0327", \u1E3F: "m\u0301", \u1E41: "m\u0307", \u0144: "n\u0301", \u01F9: "n\u0300", \u00F1: "n\u0303", \u0148: "n\u030C", \u1E45: "n\u0307", \u0146: "n\u0327", \u00F3: "o\u0301", \u00F2: "o\u0300", \u00F6: "o\u0308", \u022B: "o\u0308\u0304", \u00F5: "o\u0303", \u1E4D: "o\u0303\u0301", \u1E4F: "o\u0303\u0308", \u022D: "o\u0303\u0304", \u014D: "o\u0304", \u1E53: "o\u0304\u0301", \u1E51: "o\u0304\u0300", \u014F: "o\u0306", \u01D2: "o\u030C", \u00F4: "o\u0302", \u1ED1: "o\u0302\u0301", \u1ED3: "o\u0302\u0300", \u1ED7: "o\u0302\u0303", \u022F: "o\u0307", \u0231: "o\u0307\u0304", \u0151: "o\u030B", \u1E55: "p\u0301", \u1E57: "p\u0307", \u0155: "r\u0301", \u0159: "r\u030C", \u1E59: "r\u0307", \u0157: "r\u0327", \u015B: "s\u0301", \u1E65: "s\u0301\u0307", \u0161: "s\u030C", \u1E67: "s\u030C\u0307", \u015D: "s\u0302", \u1E61: "s\u0307", \u015F: "s\u0327", \u1E97: "t\u0308", \u0165: "t\u030C", \u1E6B: "t\u0307", \u0163: "t\u0327", \u00FA: "u\u0301", \u00F9: "u\u0300", \u00FC: "u\u0308", \u01D8: "u\u0308\u0301", \u01DC: "u\u0308\u0300", \u01D6: "u\u0308\u0304", \u01DA: "u\u0308\u030C", \u0169: "u\u0303", \u1E79: "u\u0303\u0301", \u016B: "u\u0304", \u1E7B: "u\u0304\u0308", \u016D: "u\u0306", \u01D4: "u\u030C", \u00FB: "u\u0302", \u016F: "u\u030A", \u0171: "u\u030B", \u1E7D: "v\u0303", \u1E83: "w\u0301", \u1E81: "w\u0300", \u1E85: "w\u0308", \u0175: "w\u0302", \u1E87: "w\u0307", \u1E98: "w\u030A", \u1E8D: "x\u0308", \u1E8B: "x\u0307", \u00FD: "y\u0301", \u1EF3: "y\u0300", \u00FF: "y\u0308", \u1EF9: "y\u0303", \u0233: "y\u0304", \u0177: "y\u0302", \u1E8F: "y\u0307", \u1E99: "y\u030A", \u017A: "z\u0301", \u017E: "z\u030C", \u1E91: "z\u0302", \u017C: "z\u0307", \u00C1: "A\u0301", \u00C0: "A\u0300", \u00C4: "A\u0308", \u01DE: "A\u0308\u0304", \u00C3: "A\u0303", \u0100: "A\u0304", \u0102: "A\u0306", \u1EAE: "A\u0306\u0301", \u1EB0: "A\u0306\u0300", \u1EB4: "A\u0306\u0303", \u01CD: "A\u030C", \u00C2: "A\u0302", \u1EA4: "A\u0302\u0301", \u1EA6: "A\u0302\u0300", \u1EAA: "A\u0302\u0303", \u0226: "A\u0307", \u01E0: "A\u0307\u0304", \u00C5: "A\u030A", \u01FA: "A\u030A\u0301", \u1E02: "B\u0307", \u0106: "C\u0301", \u1E08: "C\u0327\u0301", \u010C: "C\u030C", \u0108: "C\u0302", \u010A: "C\u0307", \u00C7: "C\u0327", \u010E: "D\u030C", \u1E0A: "D\u0307", \u1E10: "D\u0327", \u00C9: "E\u0301", \u00C8: "E\u0300", \u00CB: "E\u0308", \u1EBC: "E\u0303", \u0112: "E\u0304", \u1E16: "E\u0304\u0301", \u1E14: "E\u0304\u0300", \u0114: "E\u0306", \u1E1C: "E\u0327\u0306", \u011A: "E\u030C", \u00CA: "E\u0302", \u1EBE: "E\u0302\u0301", \u1EC0: "E\u0302\u0300", \u1EC4: "E\u0302\u0303", \u0116: "E\u0307", \u0228: "E\u0327", \u1E1E: "F\u0307", \u01F4: "G\u0301", \u1E20: "G\u0304", \u011E: "G\u0306", \u01E6: "G\u030C", \u011C: "G\u0302", \u0120: "G\u0307", \u0122: "G\u0327", \u1E26: "H\u0308", \u021E: "H\u030C", \u0124: "H\u0302", \u1E22: "H\u0307", \u1E28: "H\u0327", \u00CD: "I\u0301", \u00CC: "I\u0300", \u00CF: "I\u0308", \u1E2E: "I\u0308\u0301", \u0128: "I\u0303", \u012A: "I\u0304", \u012C: "I\u0306", \u01CF: "I\u030C", \u00CE: "I\u0302", \u0130: "I\u0307", \u0134: "J\u0302", \u1E30: "K\u0301", \u01E8: "K\u030C", \u0136: "K\u0327", \u0139: "L\u0301", \u013D: "L\u030C", \u013B: "L\u0327", \u1E3E: "M\u0301", \u1E40: "M\u0307", \u0143: "N\u0301", \u01F8: "N\u0300", \u00D1: "N\u0303", \u0147: "N\u030C", \u1E44: "N\u0307", \u0145: "N\u0327", \u00D3: "O\u0301", \u00D2: "O\u0300", \u00D6: "O\u0308", \u022A: "O\u0308\u0304", \u00D5: "O\u0303", \u1E4C: "O\u0303\u0301", \u1E4E: "O\u0303\u0308", \u022C: "O\u0303\u0304", \u014C: "O\u0304", \u1E52: "O\u0304\u0301", \u1E50: "O\u0304\u0300", \u014E: "O\u0306", \u01D1: "O\u030C", \u00D4: "O\u0302", \u1ED0: "O\u0302\u0301", \u1ED2: "O\u0302\u0300", \u1ED6: "O\u0302\u0303", \u022E: "O\u0307", \u0230: "O\u0307\u0304", \u0150: "O\u030B", \u1E54: "P\u0301", \u1E56: "P\u0307", \u0154: "R\u0301", \u0158: "R\u030C", \u1E58: "R\u0307", \u0156: "R\u0327", \u015A: "S\u0301", \u1E64: "S\u0301\u0307", \u0160: "S\u030C", \u1E66: "S\u030C\u0307", \u015C: "S\u0302", \u1E60: "S\u0307", \u015E: "S\u0327", \u0164: "T\u030C", \u1E6A: "T\u0307", \u0162: "T\u0327", \u00DA: "U\u0301", \u00D9: "U\u0300", \u00DC: "U\u0308", \u01D7: "U\u0308\u0301", \u01DB: "U\u0308\u0300", \u01D5: "U\u0308\u0304", \u01D9: "U\u0308\u030C", \u0168: "U\u0303", \u1E78: "U\u0303\u0301", \u016A: "U\u0304", \u1E7A: "U\u0304\u0308", \u016C: "U\u0306", \u01D3: "U\u030C", \u00DB: "U\u0302", \u016E: "U\u030A", \u0170: "U\u030B", \u1E7C: "V\u0303", \u1E82: "W\u0301", \u1E80: "W\u0300", \u1E84: "W\u0308", \u0174: "W\u0302", \u1E86: "W\u0307", \u1E8C: "X\u0308", \u1E8A: "X\u0307", \u00DD: "Y\u0301", \u1EF2: "Y\u0300", \u0178: "Y\u0308", \u1EF8: "Y\u0303", \u0232: "Y\u0304", \u0176: "Y\u0302", \u1E8E: "Y\u0307", \u0179: "Z\u0301", \u017D: "Z\u030C", \u1E90: "Z\u0302", \u017B: "Z\u0307", \u03AC: "\u03B1\u0301", \u1F70: "\u03B1\u0300", \u1FB1: "\u03B1\u0304", \u1FB0: "\u03B1\u0306", \u03AD: "\u03B5\u0301", \u1F72: "\u03B5\u0300", \u03AE: "\u03B7\u0301", \u1F74: "\u03B7\u0300", \u03AF: "\u03B9\u0301", \u1F76: "\u03B9\u0300", \u03CA: "\u03B9\u0308", \u0390: "\u03B9\u0308\u0301", \u1FD2: "\u03B9\u0308\u0300", \u1FD1: "\u03B9\u0304", \u1FD0: "\u03B9\u0306", \u03CC: "\u03BF\u0301", \u1F78: "\u03BF\u0300", \u03CD: "\u03C5\u0301", \u1F7A: "\u03C5\u0300", \u03CB: "\u03C5\u0308", \u03B0: "\u03C5\u0308\u0301", \u1FE2: "\u03C5\u0308\u0300", \u1FE1: "\u03C5\u0304", \u1FE0: "\u03C5\u0306", \u03CE: "\u03C9\u0301", \u1F7C: "\u03C9\u0300", \u038E: "\u03A5\u0301", \u1FEA: "\u03A5\u0300", \u03AB: "\u03A5\u0308", \u1FE9: "\u03A5\u0304", \u1FE8: "\u03A5\u0306", \u038F: "\u03A9\u0301", \u1FFA: "\u03A9\u0300" }, Ea = function() {
        function h(t, r) {
          this.mode = void 0, this.gullet = void 0, this.settings = void 0, this.leftrightDepth = void 0, this.nextToken = void 0, this.mode = "math", this.gullet = new ao(t, r, this.mode), this.settings = r, this.leftrightDepth = 0;
        }
        var e = h.prototype;
        return e.expect = function(r, i) {
          if (i === void 0 && (i = true), this.fetch().text !== r)
            throw new u("Expected '" + r + "', got '" + this.fetch().text + "'", this.fetch());
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
            var o = this.fetch();
            if (h.endOfExpression.indexOf(o.text) !== -1 || i && o.text === i || r && Vt[o.text] && Vt[o.text].infix)
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
          for (var i = -1, a, o = 0; o < r.length; o++)
            if (r[o].type === "infix") {
              if (i !== -1)
                throw new u("only one infix operator per group", r[o].token);
              i = o, a = r[o].replaceWith;
            }
          if (i !== -1 && a) {
            var p, x, w = r.slice(0, i), C = r.slice(i + 1);
            w.length === 1 && w[0].type === "ordgroup" ? p = w[0] : p = { type: "ordgroup", mode: this.mode, body: w }, C.length === 1 && C[0].type === "ordgroup" ? x = C[0] : x = { type: "ordgroup", mode: this.mode, body: C };
            var I;
            return a === "\\\\abovefrac" ? I = this.callFunction(a, [p, r[i], x], []) : I = this.callFunction(a, [p, x], []), [I];
          } else
            return r;
        }, e.handleSupSubscript = function(r) {
          var i = this.fetch(), a = i.text;
          this.consume(), this.consumeSpaces();
          var o = this.parseGroup(r);
          if (!o)
            throw new u("Expected group after '" + a + "'", i);
          return o;
        }, e.formatUnsupportedCmd = function(r) {
          for (var i = [], a = 0; a < r.length; a++)
            i.push({ type: "textord", mode: "text", text: r[a] });
          var o = { type: "text", mode: this.mode, body: i }, p = { type: "color", mode: this.mode, color: this.settings.errorColor, body: [o] };
          return p;
        }, e.parseAtom = function(r) {
          var i = this.parseGroup("atom", r);
          if (this.mode === "text")
            return i;
          for (var a, o; ; ) {
            this.consumeSpaces();
            var p = this.fetch();
            if (p.text === "\\limits" || p.text === "\\nolimits") {
              if (i && i.type === "op") {
                var x = p.text === "\\limits";
                i.limits = x, i.alwaysHandleSupSub = true;
              } else if (i && i.type === "operatorname")
                i.alwaysHandleSupSub && (i.limits = p.text === "\\limits");
              else
                throw new u("Limit controls must follow a math operator", p);
              this.consume();
            } else if (p.text === "^") {
              if (a)
                throw new u("Double superscript", p);
              a = this.handleSupSubscript("superscript");
            } else if (p.text === "_") {
              if (o)
                throw new u("Double subscript", p);
              o = this.handleSupSubscript("subscript");
            } else if (p.text === "'") {
              if (a)
                throw new u("Double superscript", p);
              var w = { type: "textord", mode: this.mode, text: "\\prime" }, C = [w];
              for (this.consume(); this.fetch().text === "'"; )
                C.push(w), this.consume();
              this.fetch().text === "^" && C.push(this.handleSupSubscript("superscript")), a = { type: "ordgroup", mode: this.mode, body: C };
            } else
              break;
          }
          return a || o ? { type: "supsub", mode: this.mode, base: i, sup: a, sub: o } : i;
        }, e.parseFunction = function(r, i) {
          var a = this.fetch(), o = a.text, p = Vt[o];
          if (!p)
            return null;
          if (this.consume(), i && i !== "atom" && !p.allowedInArgument)
            throw new u("Got function '" + o + "' with no arguments" + (i ? " as " + i : ""), a);
          if (this.mode === "text" && !p.allowedInText)
            throw new u("Can't use function '" + o + "' in text mode", a);
          if (this.mode === "math" && p.allowedInMath === false)
            throw new u("Can't use function '" + o + "' in math mode", a);
          var x = this.parseArguments(o, p), w = x.args, C = x.optArgs;
          return this.callFunction(o, w, C, a, r);
        }, e.callFunction = function(r, i, a, o, p) {
          var x = { funcName: r, parser: this, token: o, breakOnTokenText: p }, w = Vt[r];
          if (w && w.handler)
            return w.handler(x, i, a);
          throw new u("No function handler for " + r);
        }, e.parseArguments = function(r, i) {
          var a = i.numArgs + i.numOptionalArgs;
          if (a === 0)
            return { args: [], optArgs: [] };
          for (var o = [], p = [], x = 0; x < a; x++) {
            var w = i.argTypes && i.argTypes[x], C = x < i.numOptionalArgs;
            (i.primitive && w == null || i.type === "sqrt" && x === 1 && p[0] == null) && (w = "primitive");
            var I = this.parseGroupOfType("argument to '" + r + "'", w, C);
            if (C)
              p.push(I);
            else if (I != null)
              o.push(I);
            else
              throw new u("Null argument, please report this as a bug");
          }
          return { args: o, optArgs: p };
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
              var o = this.parseArgumentGroup(a, "text");
              return o != null ? { type: "styling", mode: o.mode, body: [o], style: "text" } : null;
            }
            case "raw": {
              var p = this.parseStringGroup("raw", a);
              return p != null ? { type: "raw", mode: "text", string: p.text } : null;
            }
            case "primitive": {
              if (a)
                throw new u("A primitive argument cannot be optional");
              var x = this.parseGroup(r);
              if (x == null)
                throw new u("Expected group as " + r, this.fetch());
              return x;
            }
            case "original":
            case null:
            case void 0:
              return this.parseArgumentGroup(a);
            default:
              throw new u("Unknown group type as " + r, this.fetch());
          }
        }, e.consumeSpaces = function() {
          for (; this.fetch().text === " "; )
            this.consume();
        }, e.parseStringGroup = function(r, i) {
          var a = this.gullet.scanArgument(i);
          if (a == null)
            return null;
          for (var o = "", p; (p = this.fetch()).text !== "EOF"; )
            o += p.text, this.consume();
          return this.consume(), a.text = o, a;
        }, e.parseRegexGroup = function(r, i) {
          for (var a = this.fetch(), o = a, p = "", x; (x = this.fetch()).text !== "EOF" && r.test(p + x.text); )
            o = x, p += o.text, this.consume();
          if (p === "")
            throw new u("Invalid " + i + ": '" + a.text + "'", a);
          return a.range(o, p);
        }, e.parseColorGroup = function(r) {
          var i = this.parseStringGroup("color", r);
          if (i == null)
            return null;
          var a = /^(#[a-f0-9]{3}|#?[a-f0-9]{6}|[a-z]+)$/i.exec(i.text);
          if (!a)
            throw new u("Invalid color: '" + i.text + "'", i);
          var o = a[0];
          return /^[0-9a-f]{6}$/i.test(o) && (o = "#" + o), { type: "color-token", mode: this.mode, color: o };
        }, e.parseSizeGroup = function(r) {
          var i, a = false;
          if (this.gullet.consumeSpaces(), !r && this.gullet.future().text !== "{" ? i = this.parseRegexGroup(/^[-+]? *(?:$|\d+|\d+\.\d*|\.\d*) *[a-z]{0,2} *$/, "size") : i = this.parseStringGroup("size", r), !i)
            return null;
          !r && i.text.length === 0 && (i.text = "0pt", a = true);
          var o = /([-+]?) *(\d+(?:\.\d*)?|\.\d+) *([a-z]{2})/.exec(i.text);
          if (!o)
            throw new u("Invalid size: '" + i.text + "'", i);
          var p = { number: +(o[1] + o[2]), unit: o[3] };
          if (!S0(p))
            throw new u("Invalid unit: '" + p.unit + "'", i);
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
          var o = this.mode;
          i && this.switchMode(i), this.gullet.beginGroup();
          var p = this.parseExpression(false, "EOF");
          this.expect("EOF"), this.gullet.endGroup();
          var x = { type: "ordgroup", mode: this.mode, loc: a.loc, body: p };
          return i && this.switchMode(o), x;
        }, e.parseGroup = function(r, i) {
          var a = this.fetch(), o = a.text, p;
          if (o === "{" || o === "\\begingroup") {
            this.consume();
            var x = o === "{" ? "}" : "\\endgroup";
            this.gullet.beginGroup();
            var w = this.parseExpression(false, x), C = this.fetch();
            this.expect(x), this.gullet.endGroup(), p = { type: "ordgroup", mode: this.mode, loc: bt.range(a, C), body: w, semisimple: o === "\\begingroup" || void 0 };
          } else if (p = this.parseFunction(i, r) || this.parseSymbol(), p == null && o[0] === "\\" && !Ma.hasOwnProperty(o)) {
            if (this.settings.throwOnError)
              throw new u("Undefined control sequence: " + o, a);
            p = this.formatUnsupportedCmd(o), this.consume();
          }
          return p;
        }, e.formLigatures = function(r) {
          for (var i = r.length - 1, a = 0; a < i; ++a) {
            var o = r[a], p = o.text;
            p === "-" && r[a + 1].text === "-" && (a + 1 < i && r[a + 2].text === "-" ? (r.splice(a, 3, { type: "textord", mode: "text", loc: bt.range(o, r[a + 2]), text: "---" }), i -= 2) : (r.splice(a, 2, { type: "textord", mode: "text", loc: bt.range(o, r[a + 1]), text: "--" }), i -= 1)), (p === "'" || p === "`") && r[a + 1].text === p && (r.splice(a, 2, { type: "textord", mode: "text", loc: bt.range(o, r[a + 1]), text: p + p }), i -= 1);
          }
        }, e.parseSymbol = function() {
          var r = this.fetch(), i = r.text;
          if (/^\\verb[^a-zA-Z]/.test(i)) {
            this.consume();
            var a = i.slice(5), o = a.charAt(0) === "*";
            if (o && (a = a.slice(1)), a.length < 2 || a.charAt(0) !== a.slice(-1))
              throw new u(`\\verb assertion failed --
                    please report what input caused this bug`);
            return a = a.slice(1, -1), { type: "verb", mode: "text", body: a, star: o };
          }
          Ta.hasOwnProperty(i[0]) && !ke[this.mode][i[0]] && (this.settings.strict && this.mode === "math" && this.settings.reportNonstrict("unicodeTextInMathMode", 'Accented Unicode text character "' + i[0] + '" used in math mode', r), i = Ta[i[0]] + i.substr(1));
          var p = eo.exec(i);
          p && (i = i.substring(0, p.index), i === "i" ? i = "\u0131" : i === "j" && (i = "\u0237"));
          var x;
          if (ke[this.mode][i]) {
            this.settings.strict && this.mode === "math" && Pr.indexOf(i) >= 0 && this.settings.reportNonstrict("unicodeTextInMathMode", 'Latin-1/Unicode text character "' + i[0] + '" used in math mode', r);
            var w = ke[this.mode][i].group, C = bt.range(r), I;
            if (Ke.hasOwnProperty(w)) {
              var R = w;
              I = { type: "atom", mode: this.mode, family: R, loc: C, text: i };
            } else
              I = { type: w, mode: this.mode, loc: C, text: i };
            x = I;
          } else if (i.charCodeAt(0) >= 128)
            this.settings.strict && (Ze(i.charCodeAt(0)) ? this.mode === "math" && this.settings.reportNonstrict("unicodeTextInMathMode", 'Unicode text character "' + i[0] + '" used in math mode', r) : this.settings.reportNonstrict("unknownSymbol", 'Unrecognized Unicode character "' + i[0] + '"' + (" (" + i.charCodeAt(0) + ")"), r)), x = { type: "textord", mode: "text", loc: bt.range(r), text: i };
          else
            return null;
          if (this.consume(), p)
            for (var P = 0; P < p[0].length; P++) {
              var G = p[0][P];
              if (!gn[G])
                throw new u("Unknown accent ' " + G + "'", r);
              var Q = gn[G][this.mode] || gn[G].text;
              if (!Q)
                throw new u("Accent " + G + " unsupported in " + this.mode + " mode", r);
              x = { type: "accent", mode: this.mode, loc: bt.range(r), label: Q, isStretchy: false, isShifty: true, base: x };
            }
          return x;
        }, h;
      }();
      Ea.endOfExpression = ["}", "\\endgroup", "\\end", "\\right", "&"];
      var lo = function(e, t) {
        if (!(typeof e == "string" || e instanceof String))
          throw new TypeError("KaTeX can only parse string typed expression");
        var r = new Ea(e, t);
        delete r.gullet.macros.current["\\df@tag"];
        var i = r.parse();
        if (delete r.gullet.macros.current["\\current@color"], delete r.gullet.macros.current["\\color"], r.gullet.macros.get("\\df@tag")) {
          if (!t.displayMode)
            throw new u("\\tag works only in display equations");
          r.gullet.feed("\\df@tag"), i = [{ type: "tag", mode: "text", body: i, tag: r.parse() }];
        }
        return i;
      }, vn = lo, Da = function(e, t, r) {
        t.textContent = "";
        var i = xn(e, r).toNode();
        t.appendChild(i);
      };
      typeof document < "u" && document.compatMode !== "CSS1Compat" && (typeof console < "u" && console.warn("Warning: KaTeX doesn't work in quirks mode. Make sure your website has a suitable doctype."), Da = function() {
        throw new u("KaTeX doesn't work in quirks mode.");
      });
      var uo = function(e, t) {
        var r = xn(e, t).toMarkup();
        return r;
      }, oo = function(e, t) {
        var r = new V(t);
        return vn(e, r);
      }, Fa = function(e, t, r) {
        if (r.throwOnError || !(e instanceof u))
          throw e;
        var i = L.makeSpan(["katex-error"], [new tt(t)]);
        return i.setAttribute("title", e.toString()), i.setAttribute("style", "color:" + r.errorColor), i;
      }, xn = function(e, t) {
        var r = new V(t);
        try {
          var i = vn(e, r);
          return p1(i, e, r);
        } catch (a) {
          return Fa(a, e, r);
        }
      }, so = function(e, t) {
        var r = new V(t);
        try {
          var i = vn(e, r);
          return f1(i, e, r);
        } catch (a) {
          return Fa(a, e, r);
        }
      }, ho = { version: "0.13.24", render: Da, renderToString: uo, ParseError: u, __parse: oo, __renderToDomTree: xn, __renderToHTMLTree: so, __setFontMetrics: Dr, __defineSymbol: l, __defineMacro: b, __domTree: { Span: Kt, Anchor: A0, SymbolNode: tt, SvgNode: yt, PathNode: Et, LineNode: z0 } }, mo = ho;
      return c = c.default, c;
    }();
  });
});
function di(n) {
  return { enter: { mathFlow() {
    this.lineEndingIfNeeded(), this.tag('<div class="math math-display">');
  }, mathFlowFenceMeta() {
    this.buffer();
  }, mathText() {
    this.tag('<span class="math math-inline">'), this.buffer();
  } }, exit: { mathFlow() {
    let s = this.resume();
    this.tag(c(s.replace(/(?:\r?\n|\r)$/, ""), true)), this.tag("</div>"), this.setData("mathFlowOpen"), this.setData("slurpOneLineEnding");
  }, mathFlowFence() {
    this.getData("mathFlowOpen") || (this.setData("mathFlowOpen", true), this.setData("slurpOneLineEnding", true), this.buffer());
  }, mathFlowFenceMeta() {
    this.resume();
  }, mathFlowValue(s) {
    this.raw(this.sliceSerialize(s));
  }, mathText() {
    let s = this.resume();
    this.tag(c(s, false)), this.tag("</span>");
  }, mathTextData(s) {
    this.raw(this.sliceSerialize(s));
  } } };
  function c(s, u) {
    return Vu.default.renderToString(s, Object.assign({}, n, { displayMode: u }));
  }
}
var Vu;
var Uu = K(() => {
  Vu = Ha(Gu(), 1);
});
var ju = K(() => {
  Pu();
  Uu();
});
var A4 = An((e3, Wu) => {
  _a();
  iu();
  Lu();
  ju();
  Wu.exports = S4;
  function S4(n) {
    return nu(n, { allowDangerousHtml: true, extensions: [Nu(), Tn(), pi], htmlExtensions: [Iu, Bn, di({ output: "mathml" })] });
  }
});
var build_default = A4();

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
