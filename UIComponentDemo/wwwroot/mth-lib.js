function M() {
}
function z(e, t) {
  for (const i in t)
    e[i] = t[i];
  return (
    /** @type {T & S} */
    e
  );
}
function At(e) {
  return e();
}
function pt() {
  return /* @__PURE__ */ Object.create(null);
}
function B(e) {
  e.forEach(At);
}
function Pt(e) {
  return typeof e == "function";
}
function nt(e, t) {
  return e != e ? t == t : e !== t || e && typeof e == "object" || typeof e == "function";
}
function Yt(e) {
  return Object.keys(e).length === 0;
}
function at(e, t, i, n) {
  if (e) {
    const s = xt(e, t, i, n);
    return e[0](s);
  }
}
function xt(e, t, i, n) {
  return e[1] && n ? z(i.ctx.slice(), e[1](n(t))) : i.ctx;
}
function dt(e, t, i, n) {
  if (e[2] && n) {
    const s = e[2](n(i));
    if (t.dirty === void 0)
      return s;
    if (typeof s == "object") {
      const o = [], r = Math.max(t.dirty.length, s.length);
      for (let l = 0; l < r; l += 1)
        o[l] = t.dirty[l] | s[l];
      return o;
    }
    return t.dirty | s;
  }
  return t.dirty;
}
function ht(e, t, i, n, s, o) {
  if (s) {
    const r = xt(t, i, n, o);
    e.p(r, s);
  }
}
function _t(e) {
  if (e.ctx.length > 32) {
    const t = [], i = e.ctx.length / 32;
    for (let n = 0; n < i; n++)
      t[n] = -1;
    return t;
  }
  return -1;
}
function zt(e) {
  const t = {};
  for (const i in e)
    i[0] !== "$" && (t[i] = e[i]);
  return t;
}
function Y(e, t) {
  const i = {};
  t = new Set(t);
  for (const n in e)
    !t.has(n) && n[0] !== "$" && (i[n] = e[n]);
  return i;
}
function Zt(e) {
  const t = {};
  for (const i in e)
    t[i] = !0;
  return t;
}
function T(e, t) {
  e.appendChild(t);
}
function A(e, t, i) {
  e.insertBefore(t, i || null);
}
function E(e) {
  e.parentNode && e.parentNode.removeChild(e);
}
function w(e) {
  return document.createElement(e);
}
function O(e) {
  return document.createTextNode(e);
}
function Z() {
  return O(" ");
}
function Ot() {
  return O("");
}
function $(e, t, i, n) {
  return e.addEventListener(t, i, n), () => e.removeEventListener(t, i, n);
}
function St(e, t, i) {
  i == null ? e.removeAttribute(t) : e.getAttribute(t) !== i && e.setAttribute(t, i);
}
const te = ["width", "height"];
function N(e, t) {
  const i = Object.getOwnPropertyDescriptors(e.__proto__);
  for (const n in t)
    t[n] == null ? e.removeAttribute(n) : n === "style" ? e.style.cssText = t[n] : n === "__value" ? e.value = e[n] = t[n] : i[n] && i[n].set && te.indexOf(n) === -1 ? e[n] = t[n] : St(e, n, t[n]);
}
function ee(e) {
  return Array.from(e.childNodes);
}
function bt(e, t) {
  t = "" + t, e.data !== t && (e.data = /** @type {string} */
  t);
}
function m(e, t, i) {
  e.classList.toggle(t, !!i);
}
function ne(e) {
  const t = {};
  return e.childNodes.forEach(
    /** @param {Element} node */
    (i) => {
      t[i.slot || "default"] = !0;
    }
  ), t;
}
function tt(e, t) {
  return new e(t);
}
let q;
function U(e) {
  q = e;
}
function ie() {
  if (!q)
    throw new Error("Function called outside component initialization");
  return q;
}
function se(e) {
  return ie().$$.context.get(e);
}
function b(e, t) {
  const i = e.$$.callbacks[t.type];
  i && i.slice().forEach((n) => n.call(this, t));
}
const H = [], et = [];
let J = [];
const kt = [], le = /* @__PURE__ */ Promise.resolve();
let ft = !1;
function oe() {
  ft || (ft = !0, le.then(v));
}
function ct(e) {
  J.push(e);
}
const ut = /* @__PURE__ */ new Set();
let R = 0;
function v() {
  if (R !== 0)
    return;
  const e = q;
  do {
    try {
      for (; R < H.length; ) {
        const t = H[R];
        R++, U(t), re(t.$$);
      }
    } catch (t) {
      throw H.length = 0, R = 0, t;
    }
    for (U(null), H.length = 0, R = 0; et.length; )
      et.pop()();
    for (let t = 0; t < J.length; t += 1) {
      const i = J[t];
      ut.has(i) || (ut.add(i), i());
    }
    J.length = 0;
  } while (H.length);
  for (; kt.length; )
    kt.pop()();
  ft = !1, ut.clear(), U(e);
}
function re(e) {
  if (e.fragment !== null) {
    e.update(), B(e.before_update);
    const t = e.dirty;
    e.dirty = [-1], e.fragment && e.fragment.p(e.ctx, t), e.after_update.forEach(ct);
  }
}
function ue(e) {
  const t = [], i = [];
  J.forEach((n) => e.indexOf(n) === -1 ? t.push(n) : i.push(n)), i.forEach((n) => n()), J = t;
}
const Q = /* @__PURE__ */ new Set();
let D;
function mt() {
  D = {
    r: 0,
    c: [],
    p: D
    // parent group
  };
}
function gt() {
  D.r || B(D.c), D = D.p;
}
function P(e, t) {
  e && e.i && (Q.delete(e), e.i(t));
}
function x(e, t, i, n) {
  if (e && e.o) {
    if (Q.has(e))
      return;
    Q.add(e), D.c.push(() => {
      Q.delete(e), n && (i && e.d(1), n());
    }), e.o(t);
  } else
    n && n();
}
function G(e, t) {
  const i = {}, n = {}, s = { $$scope: 1 };
  let o = e.length;
  for (; o--; ) {
    const r = e[o], l = t[o];
    if (l) {
      for (const f in r)
        f in l || (n[f] = 1);
      for (const f in l)
        s[f] || (i[f] = l[f], s[f] = 1);
      e[o] = l;
    } else
      for (const f in r)
        s[f] = 1;
  }
  for (const r in n)
    r in i || (i[r] = void 0);
  return i;
}
function fe(e) {
  return typeof e == "object" && e !== null ? e : {};
}
function L(e) {
  e && e.c();
}
function S(e, t, i) {
  const { fragment: n, after_update: s } = e.$$;
  n && n.m(t, i), ct(() => {
    const o = e.$$.on_mount.map(At).filter(Pt);
    e.$$.on_destroy ? e.$$.on_destroy.push(...o) : B(o), e.$$.on_mount = [];
  }), s.forEach(ct);
}
function j(e, t) {
  const i = e.$$;
  i.fragment !== null && (ue(i.after_update), B(i.on_destroy), i.fragment && i.fragment.d(t), i.on_destroy = i.fragment = null, i.ctx = []);
}
function ce(e, t) {
  e.$$.dirty[0] === -1 && (H.push(e), oe(), e.$$.dirty.fill(0)), e.$$.dirty[t / 31 | 0] |= 1 << t % 31;
}
function it(e, t, i, n, s, o, r = null, l = [-1]) {
  const f = q;
  U(e);
  const c = e.$$ = {
    fragment: null,
    ctx: [],
    // state
    props: o,
    update: M,
    not_equal: s,
    bound: pt(),
    // lifecycle
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(t.context || (f ? f.$$.context : [])),
    // everything else
    callbacks: pt(),
    dirty: l,
    skip_bound: !1,
    root: t.target || f.$$.root
  };
  r && r(c.root);
  let d = !1;
  if (c.ctx = i ? i(e, t.props || {}, (_, p, ...k) => {
    const a = k.length ? k[0] : p;
    return c.ctx && s(c.ctx[_], c.ctx[_] = a) && (!c.skip_bound && c.bound[_] && c.bound[_](a), d && ce(e, _)), p;
  }) : [], c.update(), d = !0, B(c.before_update), c.fragment = n ? n(c.ctx) : !1, t.target) {
    if (t.hydrate) {
      const _ = ee(t.target);
      c.fragment && c.fragment.l(_), _.forEach(E);
    } else
      c.fragment && c.fragment.c();
    t.intro && P(e.$$.fragment), S(e, t.target, t.anchor), v();
  }
  U(f);
}
let jt;
typeof HTMLElement == "function" && (jt = class extends HTMLElement {
  /** The Svelte component constructor */
  $$ctor;
  /** Slots */
  $$s;
  /** The Svelte component instance */
  $$c;
  /** Whether or not the custom element is connected */
  $$cn = !1;
  /** Component props data */
  $$d = {};
  /** `true` if currently in the process of reflecting component props back to attributes */
  $$r = !1;
  /** @type {Record<string, CustomElementPropDefinition>} Props definition (name, reflected, type etc) */
  $$p_d = {};
  /** @type {Record<string, Function[]>} Event listeners */
  $$l = {};
  /** @type {Map<Function, Function>} Event listener unsubscribe functions */
  $$l_u = /* @__PURE__ */ new Map();
  constructor(e, t, i) {
    super(), this.$$ctor = e, this.$$s = t, i && this.attachShadow({ mode: "open" });
  }
  addEventListener(e, t, i) {
    if (this.$$l[e] = this.$$l[e] || [], this.$$l[e].push(t), this.$$c) {
      const n = this.$$c.$on(e, t);
      this.$$l_u.set(t, n);
    }
    super.addEventListener(e, t, i);
  }
  removeEventListener(e, t, i) {
    if (super.removeEventListener(e, t, i), this.$$c) {
      const n = this.$$l_u.get(t);
      n && (n(), this.$$l_u.delete(t));
    }
  }
  async connectedCallback() {
    if (this.$$cn = !0, !this.$$c) {
      let e = function(s) {
        return () => {
          let o;
          return {
            c: function() {
              o = w("slot"), s !== "default" && St(o, "name", s);
            },
            /**
             * @param {HTMLElement} target
             * @param {HTMLElement} [anchor]
             */
            m: function(f, c) {
              A(f, o, c);
            },
            d: function(f) {
              f && E(o);
            }
          };
        };
      };
      if (await Promise.resolve(), !this.$$cn)
        return;
      const t = {}, i = ne(this);
      for (const s of this.$$s)
        s in i && (t[s] = [e(s)]);
      for (const s of this.attributes) {
        const o = this.$$g_p(s.name);
        o in this.$$d || (this.$$d[o] = W(o, s.value, this.$$p_d, "toProp"));
      }
      for (const s in this.$$p_d)
        !(s in this.$$d) && this[s] !== void 0 && (this.$$d[s] = this[s], delete this[s]);
      this.$$c = new this.$$ctor({
        target: this.shadowRoot || this,
        props: {
          ...this.$$d,
          $$slots: t,
          $$scope: {
            ctx: []
          }
        }
      });
      const n = () => {
        this.$$r = !0;
        for (const s in this.$$p_d)
          if (this.$$d[s] = this.$$c.$$.ctx[this.$$c.$$.props[s]], this.$$p_d[s].reflect) {
            const o = W(
              s,
              this.$$d[s],
              this.$$p_d,
              "toAttribute"
            );
            o == null ? this.removeAttribute(this.$$p_d[s].attribute || s) : this.setAttribute(this.$$p_d[s].attribute || s, o);
          }
        this.$$r = !1;
      };
      this.$$c.$$.after_update.push(n), n();
      for (const s in this.$$l)
        for (const o of this.$$l[s]) {
          const r = this.$$c.$on(s, o);
          this.$$l_u.set(o, r);
        }
      this.$$l = {};
    }
  }
  // We don't need this when working within Svelte code, but for compatibility of people using this outside of Svelte
  // and setting attributes through setAttribute etc, this is helpful
  attributeChangedCallback(e, t, i) {
    this.$$r || (e = this.$$g_p(e), this.$$d[e] = W(e, i, this.$$p_d, "toProp"), this.$$c?.$set({ [e]: this.$$d[e] }));
  }
  disconnectedCallback() {
    this.$$cn = !1, Promise.resolve().then(() => {
      this.$$cn || (this.$$c.$destroy(), this.$$c = void 0);
    });
  }
  $$g_p(e) {
    return Object.keys(this.$$p_d).find(
      (t) => this.$$p_d[t].attribute === e || !this.$$p_d[t].attribute && t.toLowerCase() === e
    ) || e;
  }
});
function W(e, t, i, n) {
  const s = i[e]?.type;
  if (t = s === "Boolean" && typeof t != "boolean" ? t != null : t, !n || !i[e])
    return t;
  if (n === "toAttribute")
    switch (s) {
      case "Object":
      case "Array":
        return t == null ? null : JSON.stringify(t);
      case "Boolean":
        return t ? "" : null;
      case "Number":
        return t ?? null;
      default:
        return t;
    }
  else
    switch (s) {
      case "Object":
      case "Array":
        return t && JSON.parse(t);
      case "Boolean":
        return t;
      case "Number":
        return t != null ? +t : t;
      default:
        return t;
    }
}
function st(e, t, i, n, s, o) {
  let r = class extends jt {
    constructor() {
      super(e, i, s), this.$$p_d = t;
    }
    static get observedAttributes() {
      return Object.keys(t).map(
        (l) => (t[l].attribute || l).toLowerCase()
      );
    }
  };
  return Object.keys(t).forEach((l) => {
    Object.defineProperty(r.prototype, l, {
      get() {
        return this.$$c && l in this.$$c ? this.$$c[l] : this.$$d[l];
      },
      set(f) {
        f = W(l, f, t), this.$$d[l] = f, this.$$c?.$set({ [l]: f });
      }
    });
  }), n.forEach((l) => {
    Object.defineProperty(r.prototype, l, {
      get() {
        return this.$$c?.[l];
      }
    });
  }), o && (r = o(r)), e.element = /** @type {any} */
  r, r;
}
class lt {
  /**
   * ### PRIVATE API
   *
   * Do not use, may change at any time
   *
   * @type {any}
   */
  $$ = void 0;
  /**
   * ### PRIVATE API
   *
   * Do not use, may change at any time
   *
   * @type {any}
   */
  $$set = void 0;
  /** @returns {void} */
  $destroy() {
    j(this, 1), this.$destroy = M;
  }
  /**
   * @template {Extract<keyof Events, string>} K
   * @param {K} type
   * @param {((e: Events[K]) => void) | null | undefined} callback
   * @returns {() => void}
   */
  $on(t, i) {
    if (!Pt(i))
      return M;
    const n = this.$$.callbacks[t] || (this.$$.callbacks[t] = []);
    return n.push(i), () => {
      const s = n.indexOf(i);
      s !== -1 && n.splice(s, 1);
    };
  }
  /**
   * @param {Partial<Props>} props
   * @returns {void}
   */
  $set(t) {
    this.$$set && !Yt(t) && (this.$$.skip_bound = !0, this.$$set(t), this.$$.skip_bound = !1);
  }
}
const ae = "4";
typeof window < "u" && (window.__svelte || (window.__svelte = { v: /* @__PURE__ */ new Set() })).v.add(ae);
function de(e) {
  let t, i, n, s = [
    /*$$restProps*/
    e[2]
  ], o = {};
  for (let r = 0; r < s.length; r += 1)
    o = z(o, s[r]);
  return {
    c() {
      t = w("div"), N(t, o), m(t, "bx--skeleton", !0), m(t, "bx--btn", !0), m(
        t,
        "bx--btn--field",
        /*size*/
        e[1] === "field"
      ), m(
        t,
        "bx--btn--sm",
        /*size*/
        e[1] === "small"
      ), m(
        t,
        "bx--btn--lg",
        /*size*/
        e[1] === "lg"
      ), m(
        t,
        "bx--btn--xl",
        /*size*/
        e[1] === "xl"
      );
    },
    m(r, l) {
      A(r, t, l), i || (n = [
        $(
          t,
          "click",
          /*click_handler_1*/
          e[9]
        ),
        $(
          t,
          "focus",
          /*focus_handler_1*/
          e[10]
        ),
        $(
          t,
          "blur",
          /*blur_handler_1*/
          e[11]
        ),
        $(
          t,
          "mouseover",
          /*mouseover_handler_1*/
          e[12]
        ),
        $(
          t,
          "mouseenter",
          /*mouseenter_handler_1*/
          e[13]
        ),
        $(
          t,
          "mouseleave",
          /*mouseleave_handler_1*/
          e[14]
        )
      ], i = !0);
    },
    p(r, l) {
      N(t, o = G(s, [l & /*$$restProps*/
      4 && /*$$restProps*/
      r[2]])), m(t, "bx--skeleton", !0), m(t, "bx--btn", !0), m(
        t,
        "bx--btn--field",
        /*size*/
        r[1] === "field"
      ), m(
        t,
        "bx--btn--sm",
        /*size*/
        r[1] === "small"
      ), m(
        t,
        "bx--btn--lg",
        /*size*/
        r[1] === "lg"
      ), m(
        t,
        "bx--btn--xl",
        /*size*/
        r[1] === "xl"
      );
    },
    d(r) {
      r && E(t), i = !1, B(n);
    }
  };
}
function he(e) {
  let t, i = "", n, s, o, r, l = [
    { href: (
      /*href*/
      e[0]
    ) },
    {
      rel: s = /*$$restProps*/
      e[2].target === "_blank" ? "noopener noreferrer" : void 0
    },
    { role: "button" },
    /*$$restProps*/
    e[2]
  ], f = {};
  for (let c = 0; c < l.length; c += 1)
    f = z(f, l[c]);
  return {
    c() {
      t = w("a"), n = O(i), N(t, f), m(t, "bx--skeleton", !0), m(t, "bx--btn", !0), m(
        t,
        "bx--btn--field",
        /*size*/
        e[1] === "field"
      ), m(
        t,
        "bx--btn--sm",
        /*size*/
        e[1] === "small"
      ), m(
        t,
        "bx--btn--lg",
        /*size*/
        e[1] === "lg"
      ), m(
        t,
        "bx--btn--xl",
        /*size*/
        e[1] === "xl"
      );
    },
    m(c, d) {
      A(c, t, d), T(t, n), o || (r = [
        $(
          t,
          "click",
          /*click_handler*/
          e[3]
        ),
        $(
          t,
          "focus",
          /*focus_handler*/
          e[4]
        ),
        $(
          t,
          "blur",
          /*blur_handler*/
          e[5]
        ),
        $(
          t,
          "mouseover",
          /*mouseover_handler*/
          e[6]
        ),
        $(
          t,
          "mouseenter",
          /*mouseenter_handler*/
          e[7]
        ),
        $(
          t,
          "mouseleave",
          /*mouseleave_handler*/
          e[8]
        )
      ], o = !0);
    },
    p(c, d) {
      N(t, f = G(l, [
        d & /*href*/
        1 && { href: (
          /*href*/
          c[0]
        ) },
        d & /*$$restProps*/
        4 && s !== (s = /*$$restProps*/
        c[2].target === "_blank" ? "noopener noreferrer" : void 0) && { rel: s },
        { role: "button" },
        d & /*$$restProps*/
        4 && /*$$restProps*/
        c[2]
      ])), m(t, "bx--skeleton", !0), m(t, "bx--btn", !0), m(
        t,
        "bx--btn--field",
        /*size*/
        c[1] === "field"
      ), m(
        t,
        "bx--btn--sm",
        /*size*/
        c[1] === "small"
      ), m(
        t,
        "bx--btn--lg",
        /*size*/
        c[1] === "lg"
      ), m(
        t,
        "bx--btn--xl",
        /*size*/
        c[1] === "xl"
      );
    },
    d(c) {
      c && E(t), o = !1, B(r);
    }
  };
}
function _e(e) {
  let t;
  function i(o, r) {
    return (
      /*href*/
      o[0] ? he : de
    );
  }
  let n = i(e), s = n(e);
  return {
    c() {
      s.c(), t = Ot();
    },
    m(o, r) {
      s.m(o, r), A(o, t, r);
    },
    p(o, [r]) {
      n === (n = i(o)) && s ? s.p(o, r) : (s.d(1), s = n(o), s && (s.c(), s.m(t.parentNode, t)));
    },
    i: M,
    o: M,
    d(o) {
      o && E(t), s.d(o);
    }
  };
}
function be(e, t, i) {
  const n = ["href", "size"];
  let s = Y(t, n), { href: o = void 0 } = t, { size: r = "default" } = t;
  function l(h) {
    b.call(this, e, h);
  }
  function f(h) {
    b.call(this, e, h);
  }
  function c(h) {
    b.call(this, e, h);
  }
  function d(h) {
    b.call(this, e, h);
  }
  function _(h) {
    b.call(this, e, h);
  }
  function p(h) {
    b.call(this, e, h);
  }
  function k(h) {
    b.call(this, e, h);
  }
  function a(h) {
    b.call(this, e, h);
  }
  function g(h) {
    b.call(this, e, h);
  }
  function y(h) {
    b.call(this, e, h);
  }
  function I(h) {
    b.call(this, e, h);
  }
  function K(h) {
    b.call(this, e, h);
  }
  return e.$$set = (h) => {
    t = z(z({}, t), zt(h)), i(2, s = Y(t, n)), "href" in h && i(0, o = h.href), "size" in h && i(1, r = h.size);
  }, [
    o,
    r,
    s,
    l,
    f,
    c,
    d,
    _,
    p,
    k,
    a,
    g,
    y,
    I,
    K
  ];
}
class Bt extends lt {
  constructor(t) {
    super(), it(this, t, be, _e, nt, { href: 0, size: 1 });
  }
  get href() {
    return this.$$.ctx[0];
  }
  set href(t) {
    this.$$set({ href: t }), v();
  }
  get size() {
    return this.$$.ctx[1];
  }
  set size(t) {
    this.$$set({ size: t }), v();
  }
}
st(Bt, { href: {}, size: {} }, [], [], !0);
const me = (e) => ({ props: e[0] & /*buttonProps*/
512 }), yt = (e) => ({ props: (
  /*buttonProps*/
  e[9]
) });
function ge(e) {
  let t, i, n, s, o, r, l = (
    /*hasIconOnly*/
    e[8] && vt(e)
  );
  const f = (
    /*#slots*/
    e[19].default
  ), c = at(
    f,
    e,
    /*$$scope*/
    e[18],
    null
  );
  var d = (
    /*icon*/
    e[2]
  );
  function _(a, g) {
    return {
      props: {
        "aria-hidden": "true",
        class: "bx--btn__icon",
        style: (
          /*hasIconOnly*/
          a[8] ? "margin-left: 0" : void 0
        ),
        "aria-label": (
          /*iconDescription*/
          a[3]
        )
      }
    };
  }
  d && (n = tt(d, _(e)));
  let p = [
    /*buttonProps*/
    e[9]
  ], k = {};
  for (let a = 0; a < p.length; a += 1)
    k = z(k, p[a]);
  return {
    c() {
      t = w("button"), l && l.c(), i = Z(), c && c.c(), n && L(n.$$.fragment), N(t, k);
    },
    m(a, g) {
      A(a, t, g), l && l.m(t, null), T(t, i), c && c.m(t, null), n && S(n, t, null), t.autofocus && t.focus(), e[39](t), s = !0, o || (r = [
        $(
          t,
          "click",
          /*click_handler_2*/
          e[26]
        ),
        $(
          t,
          "focus",
          /*focus_handler_2*/
          e[27]
        ),
        $(
          t,
          "blur",
          /*blur_handler_2*/
          e[28]
        ),
        $(
          t,
          "mouseover",
          /*mouseover_handler_2*/
          e[29]
        ),
        $(
          t,
          "mouseenter",
          /*mouseenter_handler_2*/
          e[30]
        ),
        $(
          t,
          "mouseleave",
          /*mouseleave_handler_2*/
          e[31]
        )
      ], o = !0);
    },
    p(a, g) {
      if (/*hasIconOnly*/
      a[8] ? l ? l.p(a, g) : (l = vt(a), l.c(), l.m(t, i)) : l && (l.d(1), l = null), c && c.p && (!s || g[0] & /*$$scope*/
      262144) && ht(
        c,
        f,
        a,
        /*$$scope*/
        a[18],
        s ? dt(
          f,
          /*$$scope*/
          a[18],
          g,
          null
        ) : _t(
          /*$$scope*/
          a[18]
        ),
        null
      ), g[0] & /*icon*/
      4 && d !== (d = /*icon*/
      a[2])) {
        if (n) {
          mt();
          const y = n;
          x(y.$$.fragment, 1, 0, () => {
            j(y, 1);
          }), gt();
        }
        d ? (n = tt(d, _(a)), L(n.$$.fragment), P(n.$$.fragment, 1), S(n, t, null)) : n = null;
      } else if (d) {
        const y = {};
        g[0] & /*hasIconOnly*/
        256 && (y.style = /*hasIconOnly*/
        a[8] ? "margin-left: 0" : void 0), g[0] & /*iconDescription*/
        8 && (y["aria-label"] = /*iconDescription*/
        a[3]), n.$set(y);
      }
      N(t, k = G(p, [g[0] & /*buttonProps*/
      512 && /*buttonProps*/
      a[9]]));
    },
    i(a) {
      s || (P(c, a), n && P(n.$$.fragment, a), s = !0);
    },
    o(a) {
      x(c, a), n && x(n.$$.fragment, a), s = !1;
    },
    d(a) {
      a && E(t), l && l.d(), c && c.d(a), n && j(n), e[39](null), o = !1, B(r);
    }
  };
}
function $e(e) {
  let t, i, n, s, o, r, l = (
    /*hasIconOnly*/
    e[8] && Et(e)
  );
  const f = (
    /*#slots*/
    e[19].default
  ), c = at(
    f,
    e,
    /*$$scope*/
    e[18],
    null
  );
  var d = (
    /*icon*/
    e[2]
  );
  function _(a, g) {
    return {
      props: {
        "aria-hidden": "true",
        class: "bx--btn__icon",
        "aria-label": (
          /*iconDescription*/
          a[3]
        )
      }
    };
  }
  d && (n = tt(d, _(e)));
  let p = [
    /*buttonProps*/
    e[9]
  ], k = {};
  for (let a = 0; a < p.length; a += 1)
    k = z(k, p[a]);
  return {
    c() {
      t = w("a"), l && l.c(), i = Z(), c && c.c(), n && L(n.$$.fragment), N(t, k);
    },
    m(a, g) {
      A(a, t, g), l && l.m(t, null), T(t, i), c && c.m(t, null), n && S(n, t, null), e[38](t), s = !0, o || (r = [
        $(
          t,
          "click",
          /*click_handler_1*/
          e[20]
        ),
        $(
          t,
          "focus",
          /*focus_handler_1*/
          e[21]
        ),
        $(
          t,
          "blur",
          /*blur_handler_1*/
          e[22]
        ),
        $(
          t,
          "mouseover",
          /*mouseover_handler_1*/
          e[23]
        ),
        $(
          t,
          "mouseenter",
          /*mouseenter_handler_1*/
          e[24]
        ),
        $(
          t,
          "mouseleave",
          /*mouseleave_handler_1*/
          e[25]
        )
      ], o = !0);
    },
    p(a, g) {
      if (/*hasIconOnly*/
      a[8] ? l ? l.p(a, g) : (l = Et(a), l.c(), l.m(t, i)) : l && (l.d(1), l = null), c && c.p && (!s || g[0] & /*$$scope*/
      262144) && ht(
        c,
        f,
        a,
        /*$$scope*/
        a[18],
        s ? dt(
          f,
          /*$$scope*/
          a[18],
          g,
          null
        ) : _t(
          /*$$scope*/
          a[18]
        ),
        null
      ), g[0] & /*icon*/
      4 && d !== (d = /*icon*/
      a[2])) {
        if (n) {
          mt();
          const y = n;
          x(y.$$.fragment, 1, 0, () => {
            j(y, 1);
          }), gt();
        }
        d ? (n = tt(d, _(a)), L(n.$$.fragment), P(n.$$.fragment, 1), S(n, t, null)) : n = null;
      } else if (d) {
        const y = {};
        g[0] & /*iconDescription*/
        8 && (y["aria-label"] = /*iconDescription*/
        a[3]), n.$set(y);
      }
      N(t, k = G(p, [g[0] & /*buttonProps*/
      512 && /*buttonProps*/
      a[9]]));
    },
    i(a) {
      s || (P(c, a), n && P(n.$$.fragment, a), s = !0);
    },
    o(a) {
      x(c, a), n && x(n.$$.fragment, a), s = !1;
    },
    d(a) {
      a && E(t), l && l.d(), c && c.d(a), n && j(n), e[38](null), o = !1, B(r);
    }
  };
}
function pe(e) {
  let t;
  const i = (
    /*#slots*/
    e[19].default
  ), n = at(
    i,
    e,
    /*$$scope*/
    e[18],
    yt
  );
  return {
    c() {
      n && n.c();
    },
    m(s, o) {
      n && n.m(s, o), t = !0;
    },
    p(s, o) {
      n && n.p && (!t || o[0] & /*$$scope, buttonProps*/
      262656) && ht(
        n,
        i,
        s,
        /*$$scope*/
        s[18],
        t ? dt(
          i,
          /*$$scope*/
          s[18],
          o,
          me
        ) : _t(
          /*$$scope*/
          s[18]
        ),
        yt
      );
    },
    i(s) {
      t || (P(n, s), t = !0);
    },
    o(s) {
      x(n, s), t = !1;
    },
    d(s) {
      n && n.d(s);
    }
  };
}
function ke(e) {
  let t, i;
  const n = [
    { href: (
      /*href*/
      e[7]
    ) },
    { size: (
      /*size*/
      e[1]
    ) },
    /*$$restProps*/
    e[10],
    {
      style: (
        /*hasIconOnly*/
        e[8] && "width: 3rem;"
      )
    }
  ];
  let s = {};
  for (let o = 0; o < n.length; o += 1)
    s = z(s, n[o]);
  return t = new Bt({ props: s }), t.$on(
    "click",
    /*click_handler*/
    e[32]
  ), t.$on(
    "focus",
    /*focus_handler*/
    e[33]
  ), t.$on(
    "blur",
    /*blur_handler*/
    e[34]
  ), t.$on(
    "mouseover",
    /*mouseover_handler*/
    e[35]
  ), t.$on(
    "mouseenter",
    /*mouseenter_handler*/
    e[36]
  ), t.$on(
    "mouseleave",
    /*mouseleave_handler*/
    e[37]
  ), {
    c() {
      L(t.$$.fragment);
    },
    m(o, r) {
      S(t, o, r), i = !0;
    },
    p(o, r) {
      const l = r[0] & /*href, size, $$restProps, hasIconOnly*/
      1410 ? G(n, [
        r[0] & /*href*/
        128 && { href: (
          /*href*/
          o[7]
        ) },
        r[0] & /*size*/
        2 && { size: (
          /*size*/
          o[1]
        ) },
        r[0] & /*$$restProps*/
        1024 && fe(
          /*$$restProps*/
          o[10]
        ),
        r[0] & /*hasIconOnly*/
        256 && {
          style: (
            /*hasIconOnly*/
            o[8] && "width: 3rem;"
          )
        }
      ]) : {};
      t.$set(l);
    },
    i(o) {
      i || (P(t.$$.fragment, o), i = !0);
    },
    o(o) {
      x(t.$$.fragment, o), i = !1;
    },
    d(o) {
      j(t, o);
    }
  };
}
function vt(e) {
  let t, i;
  return {
    c() {
      t = w("span"), i = O(
        /*iconDescription*/
        e[3]
      ), m(t, "bx--assistive-text", !0);
    },
    m(n, s) {
      A(n, t, s), T(t, i);
    },
    p(n, s) {
      s[0] & /*iconDescription*/
      8 && bt(
        i,
        /*iconDescription*/
        n[3]
      );
    },
    d(n) {
      n && E(t);
    }
  };
}
function Et(e) {
  let t, i;
  return {
    c() {
      t = w("span"), i = O(
        /*iconDescription*/
        e[3]
      ), m(t, "bx--assistive-text", !0);
    },
    m(n, s) {
      A(n, t, s), T(t, i);
    },
    p(n, s) {
      s[0] & /*iconDescription*/
      8 && bt(
        i,
        /*iconDescription*/
        n[3]
      );
    },
    d(n) {
      n && E(t);
    }
  };
}
function ye(e) {
  let t, i, n, s;
  const o = [ke, pe, $e, ge], r = [];
  function l(f, c) {
    return (
      /*skeleton*/
      f[5] ? 0 : (
        /*as*/
        f[4] ? 1 : (
          /*href*/
          f[7] && !/*disabled*/
          f[6] ? 2 : 3
        )
      )
    );
  }
  return t = l(e), i = r[t] = o[t](e), {
    c() {
      i.c(), n = Ot();
    },
    m(f, c) {
      r[t].m(f, c), A(f, n, c), s = !0;
    },
    p(f, c) {
      let d = t;
      t = l(f), t === d ? r[t].p(f, c) : (mt(), x(r[d], 1, 1, () => {
        r[d] = null;
      }), gt(), i = r[t], i ? i.p(f, c) : (i = r[t] = o[t](f), i.c()), P(i, 1), i.m(n.parentNode, n));
    },
    i(f) {
      s || (P(i), s = !0);
    },
    o(f) {
      x(i), s = !1;
    },
    d(f) {
      f && E(n), r[t].d(f);
    }
  };
}
function ve(e, t, i) {
  let n, s;
  const o = [
    "kind",
    "size",
    "expressive",
    "isSelected",
    "icon",
    "iconDescription",
    "tooltipAlignment",
    "tooltipPosition",
    "as",
    "skeleton",
    "disabled",
    "href",
    "tabindex",
    "type",
    "ref"
  ];
  let r = Y(t, o), { $$slots: l = {}, $$scope: f } = t;
  const c = Zt(l);
  let { kind: d = "primary" } = t, { size: _ = "default" } = t, { expressive: p = !1 } = t, { isSelected: k = !1 } = t, { icon: a = void 0 } = t, { iconDescription: g = void 0 } = t, { tooltipAlignment: y = "center" } = t, { tooltipPosition: I = "bottom" } = t, { as: K = !1 } = t, { skeleton: h = !1 } = t, { disabled: V = !1 } = t, { href: F = void 0 } = t, { tabindex: ot = "0" } = t, { type: rt = "button" } = t, { ref: C = null } = t;
  const $t = se("ComposedModal");
  function Ct(u) {
    b.call(this, e, u);
  }
  function Lt(u) {
    b.call(this, e, u);
  }
  function Nt(u) {
    b.call(this, e, u);
  }
  function wt(u) {
    b.call(this, e, u);
  }
  function Dt(u) {
    b.call(this, e, u);
  }
  function Mt(u) {
    b.call(this, e, u);
  }
  function Tt(u) {
    b.call(this, e, u);
  }
  function It(u) {
    b.call(this, e, u);
  }
  function Rt(u) {
    b.call(this, e, u);
  }
  function Ht(u) {
    b.call(this, e, u);
  }
  function Jt(u) {
    b.call(this, e, u);
  }
  function Vt(u) {
    b.call(this, e, u);
  }
  function Ft(u) {
    b.call(this, e, u);
  }
  function Ut(u) {
    b.call(this, e, u);
  }
  function qt(u) {
    b.call(this, e, u);
  }
  function Gt(u) {
    b.call(this, e, u);
  }
  function Kt(u) {
    b.call(this, e, u);
  }
  function Qt(u) {
    b.call(this, e, u);
  }
  function Wt(u) {
    et[u ? "unshift" : "push"](() => {
      C = u, i(0, C);
    });
  }
  function Xt(u) {
    et[u ? "unshift" : "push"](() => {
      C = u, i(0, C);
    });
  }
  return e.$$set = (u) => {
    t = z(z({}, t), zt(u)), i(10, r = Y(t, o)), "kind" in u && i(11, d = u.kind), "size" in u && i(1, _ = u.size), "expressive" in u && i(12, p = u.expressive), "isSelected" in u && i(13, k = u.isSelected), "icon" in u && i(2, a = u.icon), "iconDescription" in u && i(3, g = u.iconDescription), "tooltipAlignment" in u && i(14, y = u.tooltipAlignment), "tooltipPosition" in u && i(15, I = u.tooltipPosition), "as" in u && i(4, K = u.as), "skeleton" in u && i(5, h = u.skeleton), "disabled" in u && i(6, V = u.disabled), "href" in u && i(7, F = u.href), "tabindex" in u && i(16, ot = u.tabindex), "type" in u && i(17, rt = u.type), "ref" in u && i(0, C = u.ref), "$$scope" in u && i(18, f = u.$$scope);
  }, e.$$.update = () => {
    e.$$.dirty[0] & /*ref*/
    1 && $t && C && $t.declareRef(C), e.$$.dirty[0] & /*icon*/
    4 && i(8, n = a && !c.default), i(9, s = {
      type: F && !V ? void 0 : rt,
      tabindex: ot,
      disabled: V === !0 ? !0 : void 0,
      href: F,
      "aria-pressed": n && d === "ghost" && !F ? k : void 0,
      ...r,
      class: [
        "bx--btn",
        p && "bx--btn--expressive",
        (_ === "small" && !p || _ === "sm" && !p || _ === "small" && !p) && "bx--btn--sm",
        _ === "field" && !p || _ === "md" && !p && "bx--btn--md",
        _ === "field" && "bx--btn--field",
        _ === "small" && "bx--btn--sm",
        _ === "lg" && "bx--btn--lg",
        _ === "xl" && "bx--btn--xl",
        d && `bx--btn--${d}`,
        V && "bx--btn--disabled",
        n && "bx--btn--icon-only",
        n && "bx--tooltip__trigger",
        n && "bx--tooltip--a11y",
        n && I && `bx--btn--icon-only--${I}`,
        n && y && `bx--tooltip--align-${y}`,
        n && k && d === "ghost" && "bx--btn--selected",
        r.class
      ].filter(Boolean).join(" ")
    });
  }, [
    C,
    _,
    a,
    g,
    K,
    h,
    V,
    F,
    n,
    s,
    r,
    d,
    p,
    k,
    y,
    I,
    ot,
    rt,
    f,
    l,
    Ct,
    Lt,
    Nt,
    wt,
    Dt,
    Mt,
    Tt,
    It,
    Rt,
    Ht,
    Jt,
    Vt,
    Ft,
    Ut,
    qt,
    Gt,
    Kt,
    Qt,
    Wt,
    Xt
  ];
}
class X extends lt {
  constructor(t) {
    super(), it(
      this,
      t,
      ve,
      ye,
      nt,
      {
        kind: 11,
        size: 1,
        expressive: 12,
        isSelected: 13,
        icon: 2,
        iconDescription: 3,
        tooltipAlignment: 14,
        tooltipPosition: 15,
        as: 4,
        skeleton: 5,
        disabled: 6,
        href: 7,
        tabindex: 16,
        type: 17,
        ref: 0
      },
      null,
      [-1, -1]
    );
  }
  get kind() {
    return this.$$.ctx[11];
  }
  set kind(t) {
    this.$$set({ kind: t }), v();
  }
  get size() {
    return this.$$.ctx[1];
  }
  set size(t) {
    this.$$set({ size: t }), v();
  }
  get expressive() {
    return this.$$.ctx[12];
  }
  set expressive(t) {
    this.$$set({ expressive: t }), v();
  }
  get isSelected() {
    return this.$$.ctx[13];
  }
  set isSelected(t) {
    this.$$set({ isSelected: t }), v();
  }
  get icon() {
    return this.$$.ctx[2];
  }
  set icon(t) {
    this.$$set({ icon: t }), v();
  }
  get iconDescription() {
    return this.$$.ctx[3];
  }
  set iconDescription(t) {
    this.$$set({ iconDescription: t }), v();
  }
  get tooltipAlignment() {
    return this.$$.ctx[14];
  }
  set tooltipAlignment(t) {
    this.$$set({ tooltipAlignment: t }), v();
  }
  get tooltipPosition() {
    return this.$$.ctx[15];
  }
  set tooltipPosition(t) {
    this.$$set({ tooltipPosition: t }), v();
  }
  get as() {
    return this.$$.ctx[4];
  }
  set as(t) {
    this.$$set({ as: t }), v();
  }
  get skeleton() {
    return this.$$.ctx[5];
  }
  set skeleton(t) {
    this.$$set({ skeleton: t }), v();
  }
  get disabled() {
    return this.$$.ctx[6];
  }
  set disabled(t) {
    this.$$set({ disabled: t }), v();
  }
  get href() {
    return this.$$.ctx[7];
  }
  set href(t) {
    this.$$set({ href: t }), v();
  }
  get tabindex() {
    return this.$$.ctx[16];
  }
  set tabindex(t) {
    this.$$set({ tabindex: t }), v();
  }
  get type() {
    return this.$$.ctx[17];
  }
  set type(t) {
    this.$$set({ type: t }), v();
  }
  get ref() {
    return this.$$.ctx[0];
  }
  set ref(t) {
    this.$$set({ ref: t }), v();
  }
}
st(X, { kind: {}, size: {}, expressive: { type: "Boolean" }, isSelected: { type: "Boolean" }, icon: {}, iconDescription: {}, tooltipAlignment: {}, tooltipPosition: {}, as: { type: "Boolean" }, skeleton: { type: "Boolean" }, disabled: { type: "Boolean" }, href: {}, tabindex: {}, type: {}, ref: {} }, ["default"], [], !0);
function Ee(e) {
  let t;
  return {
    c() {
      t = O("A");
    },
    m(i, n) {
      A(i, t, n);
    },
    d(i) {
      i && E(t);
    }
  };
}
function Ae(e) {
  let t;
  return {
    c() {
      t = O("B");
    },
    m(i, n) {
      A(i, t, n);
    },
    d(i) {
      i && E(t);
    }
  };
}
function Pe(e) {
  let t;
  return {
    c() {
      t = O("C");
    },
    m(i, n) {
      A(i, t, n);
    },
    d(i) {
      i && E(t);
    }
  };
}
function xe(e) {
  let t, i, n, s, o, r;
  return t = new X({
    props: {
      $$slots: { default: [Ee] },
      $$scope: { ctx: e }
    }
  }), n = new X({
    props: {
      $$slots: { default: [Ae] },
      $$scope: { ctx: e }
    }
  }), o = new X({
    props: {
      $$slots: { default: [Pe] },
      $$scope: { ctx: e }
    }
  }), {
    c() {
      L(t.$$.fragment), i = Z(), L(n.$$.fragment), s = Z(), L(o.$$.fragment);
    },
    m(l, f) {
      S(t, l, f), A(l, i, f), S(n, l, f), A(l, s, f), S(o, l, f), r = !0;
    },
    p(l, [f]) {
      const c = {};
      f & /*$$scope*/
      1 && (c.$$scope = { dirty: f, ctx: l }), t.$set(c);
      const d = {};
      f & /*$$scope*/
      1 && (d.$$scope = { dirty: f, ctx: l }), n.$set(d);
      const _ = {};
      f & /*$$scope*/
      1 && (_.$$scope = { dirty: f, ctx: l }), o.$set(_);
    },
    i(l) {
      r || (P(t.$$.fragment, l), P(n.$$.fragment, l), P(o.$$.fragment, l), r = !0);
    },
    o(l) {
      x(t.$$.fragment, l), x(n.$$.fragment, l), x(o.$$.fragment, l), r = !1;
    },
    d(l) {
      l && (E(i), E(s)), j(t, l), j(n, l), j(o, l);
    }
  };
}
class ze extends lt {
  constructor(t) {
    super(), it(this, t, null, xe, nt, {});
  }
}
customElements.define("mth-option-buttons", st(ze, {}, [], [], !0));
function Oe(e) {
  let t, i, n, s, o;
  return {
    c() {
      t = w("button"), i = O("count is "), n = O(
        /*count*/
        e[0]
      );
    },
    m(r, l) {
      A(r, t, l), T(t, i), T(t, n), s || (o = $(
        t,
        "click",
        /*increment*/
        e[1]
      ), s = !0);
    },
    p(r, [l]) {
      l & /*count*/
      1 && bt(
        n,
        /*count*/
        r[0]
      );
    },
    i: M,
    o: M,
    d(r) {
      r && E(t), s = !1, o();
    }
  };
}
function Se(e, t, i) {
  let n = 0;
  return [n, () => {
    i(0, n += 1);
  }];
}
class je extends lt {
  constructor(t) {
    super(), it(this, t, Se, Oe, nt, {});
  }
}
customElements.define("mth-counter", st(je, {}, [], [], !0));
export {
  je as Counter,
  ze as OptionButtons
};
