(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const o of document.querySelectorAll('link[rel="modulepreload"]')) n(o);
  new MutationObserver((o) => {
    for (const r of o)
      if (r.type === "childList")
        for (const l of r.addedNodes)
          l.tagName === "LINK" && l.rel === "modulepreload" && n(l);
  }).observe(document, { childList: !0, subtree: !0 });
  function i(o) {
    const r = {};
    return (
      o.integrity && (r.integrity = o.integrity),
      o.referrerPolicy && (r.referrerPolicy = o.referrerPolicy),
      o.crossOrigin === "use-credentials"
        ? (r.credentials = "include")
        : o.crossOrigin === "anonymous"
        ? (r.credentials = "omit")
        : (r.credentials = "same-origin"),
      r
    );
  }
  function n(o) {
    if (o.ep) return;
    o.ep = !0;
    const r = i(o);
    fetch(o.href, r);
  }
})();
function tp(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var lu = { exports: {} },
  ur = {},
  au = { exports: {} },
  O = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Vn = Symbol.for("react.element"),
  ip = Symbol.for("react.portal"),
  np = Symbol.for("react.fragment"),
  op = Symbol.for("react.strict_mode"),
  rp = Symbol.for("react.profiler"),
  sp = Symbol.for("react.provider"),
  lp = Symbol.for("react.context"),
  ap = Symbol.for("react.forward_ref"),
  cp = Symbol.for("react.suspense"),
  up = Symbol.for("react.memo"),
  mp = Symbol.for("react.lazy"),
  Na = Symbol.iterator;
function dp(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Na && e[Na]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var cu = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  uu = Object.assign,
  mu = {};
function Li(e, t, i) {
  (this.props = e),
    (this.context = t),
    (this.refs = mu),
    (this.updater = i || cu);
}
Li.prototype.isReactComponent = {};
Li.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
Li.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function du() {}
du.prototype = Li.prototype;
function bl(e, t, i) {
  (this.props = e),
    (this.context = t),
    (this.refs = mu),
    (this.updater = i || cu);
}
var vl = (bl.prototype = new du());
vl.constructor = bl;
uu(vl, Li.prototype);
vl.isPureReactComponent = !0;
var Aa = Array.isArray,
  pu = Object.prototype.hasOwnProperty,
  wl = { current: null },
  hu = { key: !0, ref: !0, __self: !0, __source: !0 };
function gu(e, t, i) {
  var n,
    o = {},
    r = null,
    l = null;
  if (t != null)
    for (n in (t.ref !== void 0 && (l = t.ref),
    t.key !== void 0 && (r = "" + t.key),
    t))
      pu.call(t, n) && !hu.hasOwnProperty(n) && (o[n] = t[n]);
  var a = arguments.length - 2;
  if (a === 1) o.children = i;
  else if (1 < a) {
    for (var c = Array(a), u = 0; u < a; u++) c[u] = arguments[u + 2];
    o.children = c;
  }
  if (e && e.defaultProps)
    for (n in ((a = e.defaultProps), a)) o[n] === void 0 && (o[n] = a[n]);
  return {
    $$typeof: Vn,
    type: e,
    key: r,
    ref: l,
    props: o,
    _owner: wl.current,
  };
}
function pp(e, t) {
  return {
    $$typeof: Vn,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function xl(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Vn;
}
function hp(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (i) {
      return t[i];
    })
  );
}
var Ea = /\/+/g;
function Or(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? hp("" + e.key)
    : t.toString(36);
}
function wo(e, t, i, n, o) {
  var r = typeof e;
  (r === "undefined" || r === "boolean") && (e = null);
  var l = !1;
  if (e === null) l = !0;
  else
    switch (r) {
      case "string":
      case "number":
        l = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case Vn:
          case ip:
            l = !0;
        }
    }
  if (l)
    return (
      (l = e),
      (o = o(l)),
      (e = n === "" ? "." + Or(l, 0) : n),
      Aa(o)
        ? ((i = ""),
          e != null && (i = e.replace(Ea, "$&/") + "/"),
          wo(o, t, i, "", function (u) {
            return u;
          }))
        : o != null &&
          (xl(o) &&
            (o = pp(
              o,
              i +
                (!o.key || (l && l.key === o.key)
                  ? ""
                  : ("" + o.key).replace(Ea, "$&/") + "/") +
                e
            )),
          t.push(o)),
      1
    );
  if (((l = 0), (n = n === "" ? "." : n + ":"), Aa(e)))
    for (var a = 0; a < e.length; a++) {
      r = e[a];
      var c = n + Or(r, a);
      l += wo(r, t, i, c, o);
    }
  else if (((c = dp(e)), typeof c == "function"))
    for (e = c.call(e), a = 0; !(r = e.next()).done; )
      (r = r.value), (c = n + Or(r, a++)), (l += wo(r, t, i, c, o));
  else if (r === "object")
    throw (
      ((t = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
          (t === "[object Object]"
            ? "object with keys {" + Object.keys(e).join(", ") + "}"
            : t) +
          "). If you meant to render a collection of children, use an array instead."
      ))
    );
  return l;
}
function Jn(e, t, i) {
  if (e == null) return e;
  var n = [],
    o = 0;
  return (
    wo(e, n, "", "", function (r) {
      return t.call(i, r, o++);
    }),
    n
  );
}
function gp(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      t.then(
        function (i) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = i));
        },
        function (i) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = i));
        }
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var he = { current: null },
  xo = { transition: null },
  fp = {
    ReactCurrentDispatcher: he,
    ReactCurrentBatchConfig: xo,
    ReactCurrentOwner: wl,
  };
O.Children = {
  map: Jn,
  forEach: function (e, t, i) {
    Jn(
      e,
      function () {
        t.apply(this, arguments);
      },
      i
    );
  },
  count: function (e) {
    var t = 0;
    return (
      Jn(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      Jn(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!xl(e))
      throw Error(
        "React.Children.only expected to receive a single React element child."
      );
    return e;
  },
};
O.Component = Li;
O.Fragment = np;
O.Profiler = rp;
O.PureComponent = bl;
O.StrictMode = op;
O.Suspense = cp;
O.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = fp;
O.cloneElement = function (e, t, i) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        "."
    );
  var n = uu({}, e.props),
    o = e.key,
    r = e.ref,
    l = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((r = t.ref), (l = wl.current)),
      t.key !== void 0 && (o = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var a = e.type.defaultProps;
    for (c in t)
      pu.call(t, c) &&
        !hu.hasOwnProperty(c) &&
        (n[c] = t[c] === void 0 && a !== void 0 ? a[c] : t[c]);
  }
  var c = arguments.length - 2;
  if (c === 1) n.children = i;
  else if (1 < c) {
    a = Array(c);
    for (var u = 0; u < c; u++) a[u] = arguments[u + 2];
    n.children = a;
  }
  return { $$typeof: Vn, type: e.type, key: o, ref: r, props: n, _owner: l };
};
O.createContext = function (e) {
  return (
    (e = {
      $$typeof: lp,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: sp, _context: e }),
    (e.Consumer = e)
  );
};
O.createElement = gu;
O.createFactory = function (e) {
  var t = gu.bind(null, e);
  return (t.type = e), t;
};
O.createRef = function () {
  return { current: null };
};
O.forwardRef = function (e) {
  return { $$typeof: ap, render: e };
};
O.isValidElement = xl;
O.lazy = function (e) {
  return { $$typeof: mp, _payload: { _status: -1, _result: e }, _init: gp };
};
O.memo = function (e, t) {
  return { $$typeof: up, type: e, compare: t === void 0 ? null : t };
};
O.startTransition = function (e) {
  var t = xo.transition;
  xo.transition = {};
  try {
    e();
  } finally {
    xo.transition = t;
  }
};
O.unstable_act = function () {
  throw Error("act(...) is not supported in production builds of React.");
};
O.useCallback = function (e, t) {
  return he.current.useCallback(e, t);
};
O.useContext = function (e) {
  return he.current.useContext(e);
};
O.useDebugValue = function () {};
O.useDeferredValue = function (e) {
  return he.current.useDeferredValue(e);
};
O.useEffect = function (e, t) {
  return he.current.useEffect(e, t);
};
O.useId = function () {
  return he.current.useId();
};
O.useImperativeHandle = function (e, t, i) {
  return he.current.useImperativeHandle(e, t, i);
};
O.useInsertionEffect = function (e, t) {
  return he.current.useInsertionEffect(e, t);
};
O.useLayoutEffect = function (e, t) {
  return he.current.useLayoutEffect(e, t);
};
O.useMemo = function (e, t) {
  return he.current.useMemo(e, t);
};
O.useReducer = function (e, t, i) {
  return he.current.useReducer(e, t, i);
};
O.useRef = function (e) {
  return he.current.useRef(e);
};
O.useState = function (e) {
  return he.current.useState(e);
};
O.useSyncExternalStore = function (e, t, i) {
  return he.current.useSyncExternalStore(e, t, i);
};
O.useTransition = function () {
  return he.current.useTransition();
};
O.version = "18.2.0";
au.exports = O;
var P = au.exports;
const yp = tp(P);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var _p = P,
  bp = Symbol.for("react.element"),
  vp = Symbol.for("react.fragment"),
  wp = Object.prototype.hasOwnProperty,
  xp = _p.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  kp = { key: !0, ref: !0, __self: !0, __source: !0 };
function fu(e, t, i) {
  var n,
    o = {},
    r = null,
    l = null;
  i !== void 0 && (r = "" + i),
    t.key !== void 0 && (r = "" + t.key),
    t.ref !== void 0 && (l = t.ref);
  for (n in t) wp.call(t, n) && !kp.hasOwnProperty(n) && (o[n] = t[n]);
  if (e && e.defaultProps)
    for (n in ((t = e.defaultProps), t)) o[n] === void 0 && (o[n] = t[n]);
  return {
    $$typeof: bp,
    type: e,
    key: r,
    ref: l,
    props: o,
    _owner: xp.current,
  };
}
ur.Fragment = vp;
ur.jsx = fu;
ur.jsxs = fu;
lu.exports = ur;
var s = lu.exports,
  fs = {},
  yu = { exports: {} },
  Ae = {},
  _u = { exports: {} },
  bu = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(E, z) {
    var R = E.length;
    E.push(z);
    e: for (; 0 < R; ) {
      var Z = (R - 1) >>> 1,
        te = E[Z];
      if (0 < o(te, z)) (E[Z] = z), (E[R] = te), (R = Z);
      else break e;
    }
  }
  function i(E) {
    return E.length === 0 ? null : E[0];
  }
  function n(E) {
    if (E.length === 0) return null;
    var z = E[0],
      R = E.pop();
    if (R !== z) {
      E[0] = R;
      e: for (var Z = 0, te = E.length, Kn = te >>> 1; Z < Kn; ) {
        var Ot = 2 * (Z + 1) - 1,
          Mr = E[Ot],
          Bt = Ot + 1,
          Zn = E[Bt];
        if (0 > o(Mr, R))
          Bt < te && 0 > o(Zn, Mr)
            ? ((E[Z] = Zn), (E[Bt] = R), (Z = Bt))
            : ((E[Z] = Mr), (E[Ot] = R), (Z = Ot));
        else if (Bt < te && 0 > o(Zn, R)) (E[Z] = Zn), (E[Bt] = R), (Z = Bt);
        else break e;
      }
    }
    return z;
  }
  function o(E, z) {
    var R = E.sortIndex - z.sortIndex;
    return R !== 0 ? R : E.id - z.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var r = performance;
    e.unstable_now = function () {
      return r.now();
    };
  } else {
    var l = Date,
      a = l.now();
    e.unstable_now = function () {
      return l.now() - a;
    };
  }
  var c = [],
    u = [],
    f = 1,
    g = null,
    h = 3,
    b = !1,
    v = !1,
    w = !1,
    S = typeof setTimeout == "function" ? setTimeout : null,
    d = typeof clearTimeout == "function" ? clearTimeout : null,
    m = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function p(E) {
    for (var z = i(u); z !== null; ) {
      if (z.callback === null) n(u);
      else if (z.startTime <= E)
        n(u), (z.sortIndex = z.expirationTime), t(c, z);
      else break;
      z = i(u);
    }
  }
  function _(E) {
    if (((w = !1), p(E), !v))
      if (i(c) !== null) (v = !0), zr(C);
      else {
        var z = i(u);
        z !== null && Rr(_, z.startTime - E);
      }
  }
  function C(E, z) {
    (v = !1), w && ((w = !1), d(I), (I = -1)), (b = !0);
    var R = h;
    try {
      for (
        p(z), g = i(c);
        g !== null && (!(g.expirationTime > z) || (E && !H()));

      ) {
        var Z = g.callback;
        if (typeof Z == "function") {
          (g.callback = null), (h = g.priorityLevel);
          var te = Z(g.expirationTime <= z);
          (z = e.unstable_now()),
            typeof te == "function" ? (g.callback = te) : g === i(c) && n(c),
            p(z);
        } else n(c);
        g = i(c);
      }
      if (g !== null) var Kn = !0;
      else {
        var Ot = i(u);
        Ot !== null && Rr(_, Ot.startTime - z), (Kn = !1);
      }
      return Kn;
    } finally {
      (g = null), (h = R), (b = !1);
    }
  }
  var N = !1,
    j = null,
    I = -1,
    M = 5,
    T = -1;
  function H() {
    return !(e.unstable_now() - T < M);
  }
  function fe() {
    if (j !== null) {
      var E = e.unstable_now();
      T = E;
      var z = !0;
      try {
        z = j(!0, E);
      } finally {
        z ? me() : ((N = !1), (j = null));
      }
    } else N = !1;
  }
  var me;
  if (typeof m == "function")
    me = function () {
      m(fe);
    };
  else if (typeof MessageChannel < "u") {
    var Bi = new MessageChannel(),
      ep = Bi.port2;
    (Bi.port1.onmessage = fe),
      (me = function () {
        ep.postMessage(null);
      });
  } else
    me = function () {
      S(fe, 0);
    };
  function zr(E) {
    (j = E), N || ((N = !0), me());
  }
  function Rr(E, z) {
    I = S(function () {
      E(e.unstable_now());
    }, z);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (E) {
      E.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      v || b || ((v = !0), zr(C));
    }),
    (e.unstable_forceFrameRate = function (E) {
      0 > E || 125 < E
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
          )
        : (M = 0 < E ? Math.floor(1e3 / E) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return h;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return i(c);
    }),
    (e.unstable_next = function (E) {
      switch (h) {
        case 1:
        case 2:
        case 3:
          var z = 3;
          break;
        default:
          z = h;
      }
      var R = h;
      h = z;
      try {
        return E();
      } finally {
        h = R;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (E, z) {
      switch (E) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          E = 3;
      }
      var R = h;
      h = E;
      try {
        return z();
      } finally {
        h = R;
      }
    }),
    (e.unstable_scheduleCallback = function (E, z, R) {
      var Z = e.unstable_now();
      switch (
        (typeof R == "object" && R !== null
          ? ((R = R.delay), (R = typeof R == "number" && 0 < R ? Z + R : Z))
          : (R = Z),
        E)
      ) {
        case 1:
          var te = -1;
          break;
        case 2:
          te = 250;
          break;
        case 5:
          te = 1073741823;
          break;
        case 4:
          te = 1e4;
          break;
        default:
          te = 5e3;
      }
      return (
        (te = R + te),
        (E = {
          id: f++,
          callback: z,
          priorityLevel: E,
          startTime: R,
          expirationTime: te,
          sortIndex: -1,
        }),
        R > Z
          ? ((E.sortIndex = R),
            t(u, E),
            i(c) === null &&
              E === i(u) &&
              (w ? (d(I), (I = -1)) : (w = !0), Rr(_, R - Z)))
          : ((E.sortIndex = te), t(c, E), v || b || ((v = !0), zr(C))),
        E
      );
    }),
    (e.unstable_shouldYield = H),
    (e.unstable_wrapCallback = function (E) {
      var z = h;
      return function () {
        var R = h;
        h = z;
        try {
          return E.apply(this, arguments);
        } finally {
          h = R;
        }
      };
    });
})(bu);
_u.exports = bu;
var Cp = _u.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var vu = P,
  Ne = Cp;
function x(e) {
  for (
    var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, i = 1;
    i < arguments.length;
    i++
  )
    t += "&args[]=" + encodeURIComponent(arguments[i]);
  return (
    "Minified React error #" +
    e +
    "; visit " +
    t +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var wu = new Set(),
  gn = {};
function ti(e, t) {
  ji(e, t), ji(e + "Capture", t);
}
function ji(e, t) {
  for (gn[e] = t, e = 0; e < t.length; e++) wu.add(t[e]);
}
var at = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  ys = Object.prototype.hasOwnProperty,
  jp =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  Pa = {},
  Ia = {};
function Sp(e) {
  return ys.call(Ia, e)
    ? !0
    : ys.call(Pa, e)
    ? !1
    : jp.test(e)
    ? (Ia[e] = !0)
    : ((Pa[e] = !0), !1);
}
function Np(e, t, i, n) {
  if (i !== null && i.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return n
        ? !1
        : i !== null
        ? !i.acceptsBooleans
        : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function Ap(e, t, i, n) {
  if (t === null || typeof t > "u" || Np(e, t, i, n)) return !0;
  if (n) return !1;
  if (i !== null)
    switch (i.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function ge(e, t, i, n, o, r, l) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = n),
    (this.attributeNamespace = o),
    (this.mustUseProperty = i),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = r),
    (this.removeEmptyString = l);
}
var se = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    se[e] = new ge(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  se[t] = new ge(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  se[e] = new ge(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  se[e] = new ge(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    se[e] = new ge(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  se[e] = new ge(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  se[e] = new ge(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  se[e] = new ge(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  se[e] = new ge(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var kl = /[\-:]([a-z])/g;
function Cl(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(kl, Cl);
    se[t] = new ge(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(kl, Cl);
    se[t] = new ge(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(kl, Cl);
  se[t] = new ge(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  se[e] = new ge(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
se.xlinkHref = new ge(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1
);
["src", "href", "action", "formAction"].forEach(function (e) {
  se[e] = new ge(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function jl(e, t, i, n) {
  var o = se.hasOwnProperty(t) ? se[t] : null;
  (o !== null
    ? o.type !== 0
    : n ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (Ap(t, i, o, n) && (i = null),
    n || o === null
      ? Sp(t) && (i === null ? e.removeAttribute(t) : e.setAttribute(t, "" + i))
      : o.mustUseProperty
      ? (e[o.propertyName] = i === null ? (o.type === 3 ? !1 : "") : i)
      : ((t = o.attributeName),
        (n = o.attributeNamespace),
        i === null
          ? e.removeAttribute(t)
          : ((o = o.type),
            (i = o === 3 || (o === 4 && i === !0) ? "" : "" + i),
            n ? e.setAttributeNS(n, t, i) : e.setAttribute(t, i))));
}
var dt = vu.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  qn = Symbol.for("react.element"),
  ri = Symbol.for("react.portal"),
  si = Symbol.for("react.fragment"),
  Sl = Symbol.for("react.strict_mode"),
  _s = Symbol.for("react.profiler"),
  xu = Symbol.for("react.provider"),
  ku = Symbol.for("react.context"),
  Nl = Symbol.for("react.forward_ref"),
  bs = Symbol.for("react.suspense"),
  vs = Symbol.for("react.suspense_list"),
  Al = Symbol.for("react.memo"),
  gt = Symbol.for("react.lazy"),
  Cu = Symbol.for("react.offscreen"),
  Ta = Symbol.iterator;
function Fi(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Ta && e[Ta]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var Q = Object.assign,
  Br;
function Zi(e) {
  if (Br === void 0)
    try {
      throw Error();
    } catch (i) {
      var t = i.stack.trim().match(/\n( *(at )?)/);
      Br = (t && t[1]) || "";
    }
  return (
    `
` +
    Br +
    e
  );
}
var Fr = !1;
function Dr(e, t) {
  if (!e || Fr) return "";
  Fr = !0;
  var i = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (u) {
          var n = u;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (u) {
          n = u;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (u) {
        n = u;
      }
      e();
    }
  } catch (u) {
    if (u && n && typeof u.stack == "string") {
      for (
        var o = u.stack.split(`
`),
          r = n.stack.split(`
`),
          l = o.length - 1,
          a = r.length - 1;
        1 <= l && 0 <= a && o[l] !== r[a];

      )
        a--;
      for (; 1 <= l && 0 <= a; l--, a--)
        if (o[l] !== r[a]) {
          if (l !== 1 || a !== 1)
            do
              if ((l--, a--, 0 > a || o[l] !== r[a])) {
                var c =
                  `
` + o[l].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    c.includes("<anonymous>") &&
                    (c = c.replace("<anonymous>", e.displayName)),
                  c
                );
              }
            while (1 <= l && 0 <= a);
          break;
        }
    }
  } finally {
    (Fr = !1), (Error.prepareStackTrace = i);
  }
  return (e = e ? e.displayName || e.name : "") ? Zi(e) : "";
}
function Ep(e) {
  switch (e.tag) {
    case 5:
      return Zi(e.type);
    case 16:
      return Zi("Lazy");
    case 13:
      return Zi("Suspense");
    case 19:
      return Zi("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = Dr(e.type, !1)), e;
    case 11:
      return (e = Dr(e.type.render, !1)), e;
    case 1:
      return (e = Dr(e.type, !0)), e;
    default:
      return "";
  }
}
function ws(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case si:
      return "Fragment";
    case ri:
      return "Portal";
    case _s:
      return "Profiler";
    case Sl:
      return "StrictMode";
    case bs:
      return "Suspense";
    case vs:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case ku:
        return (e.displayName || "Context") + ".Consumer";
      case xu:
        return (e._context.displayName || "Context") + ".Provider";
      case Nl:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case Al:
        return (
          (t = e.displayName || null), t !== null ? t : ws(e.type) || "Memo"
        );
      case gt:
        (t = e._payload), (e = e._init);
        try {
          return ws(e(t));
        } catch {}
    }
  return null;
}
function Pp(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ""),
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
      );
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return ws(t);
    case 8:
      return t === Sl ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == "function") return t.displayName || t.name || null;
      if (typeof t == "string") return t;
  }
  return null;
}
function Tt(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function ju(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function Ip(e) {
  var t = ju(e) ? "checked" : "value",
    i = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    n = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof i < "u" &&
    typeof i.get == "function" &&
    typeof i.set == "function"
  ) {
    var o = i.get,
      r = i.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return o.call(this);
        },
        set: function (l) {
          (n = "" + l), r.call(this, l);
        },
      }),
      Object.defineProperty(e, t, { enumerable: i.enumerable }),
      {
        getValue: function () {
          return n;
        },
        setValue: function (l) {
          n = "" + l;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function Xn(e) {
  e._valueTracker || (e._valueTracker = Ip(e));
}
function Su(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var i = t.getValue(),
    n = "";
  return (
    e && (n = ju(e) ? (e.checked ? "true" : "false") : e.value),
    (e = n),
    e !== i ? (t.setValue(e), !0) : !1
  );
}
function Ro(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function xs(e, t) {
  var i = t.checked;
  return Q({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: i ?? e._wrapperState.initialChecked,
  });
}
function La(e, t) {
  var i = t.defaultValue == null ? "" : t.defaultValue,
    n = t.checked != null ? t.checked : t.defaultChecked;
  (i = Tt(t.value != null ? t.value : i)),
    (e._wrapperState = {
      initialChecked: n,
      initialValue: i,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    });
}
function Nu(e, t) {
  (t = t.checked), t != null && jl(e, "checked", t, !1);
}
function ks(e, t) {
  Nu(e, t);
  var i = Tt(t.value),
    n = t.type;
  if (i != null)
    n === "number"
      ? ((i === 0 && e.value === "") || e.value != i) && (e.value = "" + i)
      : e.value !== "" + i && (e.value = "" + i);
  else if (n === "submit" || n === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value")
    ? Cs(e, t.type, i)
    : t.hasOwnProperty("defaultValue") && Cs(e, t.type, Tt(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function za(e, t, i) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var n = t.type;
    if (
      !(
        (n !== "submit" && n !== "reset") ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    (t = "" + e._wrapperState.initialValue),
      i || t === e.value || (e.value = t),
      (e.defaultValue = t);
  }
  (i = e.name),
    i !== "" && (e.name = ""),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    i !== "" && (e.name = i);
}
function Cs(e, t, i) {
  (t !== "number" || Ro(e.ownerDocument) !== e) &&
    (i == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + i && (e.defaultValue = "" + i));
}
var Ji = Array.isArray;
function yi(e, t, i, n) {
  if (((e = e.options), t)) {
    t = {};
    for (var o = 0; o < i.length; o++) t["$" + i[o]] = !0;
    for (i = 0; i < e.length; i++)
      (o = t.hasOwnProperty("$" + e[i].value)),
        e[i].selected !== o && (e[i].selected = o),
        o && n && (e[i].defaultSelected = !0);
  } else {
    for (i = "" + Tt(i), t = null, o = 0; o < e.length; o++) {
      if (e[o].value === i) {
        (e[o].selected = !0), n && (e[o].defaultSelected = !0);
        return;
      }
      t !== null || e[o].disabled || (t = e[o]);
    }
    t !== null && (t.selected = !0);
  }
}
function js(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(x(91));
  return Q({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function Ra(e, t) {
  var i = t.value;
  if (i == null) {
    if (((i = t.children), (t = t.defaultValue), i != null)) {
      if (t != null) throw Error(x(92));
      if (Ji(i)) {
        if (1 < i.length) throw Error(x(93));
        i = i[0];
      }
      t = i;
    }
    t == null && (t = ""), (i = t);
  }
  e._wrapperState = { initialValue: Tt(i) };
}
function Au(e, t) {
  var i = Tt(t.value),
    n = Tt(t.defaultValue);
  i != null &&
    ((i = "" + i),
    i !== e.value && (e.value = i),
    t.defaultValue == null && e.defaultValue !== i && (e.defaultValue = i)),
    n != null && (e.defaultValue = "" + n);
}
function Ma(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function Eu(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function Ss(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? Eu(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : e;
}
var eo,
  Pu = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, i, n, o) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, i, n, o);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = t;
    else {
      for (
        eo = eo || document.createElement("div"),
          eo.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = eo.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function fn(e, t) {
  if (t) {
    var i = e.firstChild;
    if (i && i === e.lastChild && i.nodeType === 3) {
      i.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var tn = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  Tp = ["Webkit", "ms", "Moz", "O"];
Object.keys(tn).forEach(function (e) {
  Tp.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (tn[t] = tn[e]);
  });
});
function Iu(e, t, i) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : i || typeof t != "number" || t === 0 || (tn.hasOwnProperty(e) && tn[e])
    ? ("" + t).trim()
    : t + "px";
}
function Tu(e, t) {
  e = e.style;
  for (var i in t)
    if (t.hasOwnProperty(i)) {
      var n = i.indexOf("--") === 0,
        o = Iu(i, t[i], n);
      i === "float" && (i = "cssFloat"), n ? e.setProperty(i, o) : (e[i] = o);
    }
}
var Lp = Q(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  }
);
function Ns(e, t) {
  if (t) {
    if (Lp[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(x(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(x(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(x(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(x(62));
  }
}
function As(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string";
  switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var Es = null;
function El(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var Ps = null,
  _i = null,
  bi = null;
function Oa(e) {
  if ((e = Wn(e))) {
    if (typeof Ps != "function") throw Error(x(280));
    var t = e.stateNode;
    t && ((t = gr(t)), Ps(e.stateNode, e.type, t));
  }
}
function Lu(e) {
  _i ? (bi ? bi.push(e) : (bi = [e])) : (_i = e);
}
function zu() {
  if (_i) {
    var e = _i,
      t = bi;
    if (((bi = _i = null), Oa(e), t)) for (e = 0; e < t.length; e++) Oa(t[e]);
  }
}
function Ru(e, t) {
  return e(t);
}
function Mu() {}
var Vr = !1;
function Ou(e, t, i) {
  if (Vr) return e(t, i);
  Vr = !0;
  try {
    return Ru(e, t, i);
  } finally {
    (Vr = !1), (_i !== null || bi !== null) && (Mu(), zu());
  }
}
function yn(e, t) {
  var i = e.stateNode;
  if (i === null) return null;
  var n = gr(i);
  if (n === null) return null;
  i = n[t];
  e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      (n = !n.disabled) ||
        ((e = e.type),
        (n = !(
          e === "button" ||
          e === "input" ||
          e === "select" ||
          e === "textarea"
        ))),
        (e = !n);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (i && typeof i != "function") throw Error(x(231, t, typeof i));
  return i;
}
var Is = !1;
if (at)
  try {
    var Di = {};
    Object.defineProperty(Di, "passive", {
      get: function () {
        Is = !0;
      },
    }),
      window.addEventListener("test", Di, Di),
      window.removeEventListener("test", Di, Di);
  } catch {
    Is = !1;
  }
function zp(e, t, i, n, o, r, l, a, c) {
  var u = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(i, u);
  } catch (f) {
    this.onError(f);
  }
}
var nn = !1,
  Mo = null,
  Oo = !1,
  Ts = null,
  Rp = {
    onError: function (e) {
      (nn = !0), (Mo = e);
    },
  };
function Mp(e, t, i, n, o, r, l, a, c) {
  (nn = !1), (Mo = null), zp.apply(Rp, arguments);
}
function Op(e, t, i, n, o, r, l, a, c) {
  if ((Mp.apply(this, arguments), nn)) {
    if (nn) {
      var u = Mo;
      (nn = !1), (Mo = null);
    } else throw Error(x(198));
    Oo || ((Oo = !0), (Ts = u));
  }
}
function ii(e) {
  var t = e,
    i = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do (t = e), t.flags & 4098 && (i = t.return), (e = t.return);
    while (e);
  }
  return t.tag === 3 ? i : null;
}
function Bu(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated;
  }
  return null;
}
function Ba(e) {
  if (ii(e) !== e) throw Error(x(188));
}
function Bp(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = ii(e)), t === null)) throw Error(x(188));
    return t !== e ? null : e;
  }
  for (var i = e, n = t; ; ) {
    var o = i.return;
    if (o === null) break;
    var r = o.alternate;
    if (r === null) {
      if (((n = o.return), n !== null)) {
        i = n;
        continue;
      }
      break;
    }
    if (o.child === r.child) {
      for (r = o.child; r; ) {
        if (r === i) return Ba(o), e;
        if (r === n) return Ba(o), t;
        r = r.sibling;
      }
      throw Error(x(188));
    }
    if (i.return !== n.return) (i = o), (n = r);
    else {
      for (var l = !1, a = o.child; a; ) {
        if (a === i) {
          (l = !0), (i = o), (n = r);
          break;
        }
        if (a === n) {
          (l = !0), (n = o), (i = r);
          break;
        }
        a = a.sibling;
      }
      if (!l) {
        for (a = r.child; a; ) {
          if (a === i) {
            (l = !0), (i = r), (n = o);
            break;
          }
          if (a === n) {
            (l = !0), (n = r), (i = o);
            break;
          }
          a = a.sibling;
        }
        if (!l) throw Error(x(189));
      }
    }
    if (i.alternate !== n) throw Error(x(190));
  }
  if (i.tag !== 3) throw Error(x(188));
  return i.stateNode.current === i ? e : t;
}
function Fu(e) {
  return (e = Bp(e)), e !== null ? Du(e) : null;
}
function Du(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = Du(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var Vu = Ne.unstable_scheduleCallback,
  Fa = Ne.unstable_cancelCallback,
  Fp = Ne.unstable_shouldYield,
  Dp = Ne.unstable_requestPaint,
  J = Ne.unstable_now,
  Vp = Ne.unstable_getCurrentPriorityLevel,
  Pl = Ne.unstable_ImmediatePriority,
  Hu = Ne.unstable_UserBlockingPriority,
  Bo = Ne.unstable_NormalPriority,
  Hp = Ne.unstable_LowPriority,
  Uu = Ne.unstable_IdlePriority,
  mr = null,
  qe = null;
function Up(e) {
  if (qe && typeof qe.onCommitFiberRoot == "function")
    try {
      qe.onCommitFiberRoot(mr, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var We = Math.clz32 ? Math.clz32 : Gp,
  Wp = Math.log,
  $p = Math.LN2;
function Gp(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((Wp(e) / $p) | 0)) | 0;
}
var to = 64,
  io = 4194304;
function qi(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function Fo(e, t) {
  var i = e.pendingLanes;
  if (i === 0) return 0;
  var n = 0,
    o = e.suspendedLanes,
    r = e.pingedLanes,
    l = i & 268435455;
  if (l !== 0) {
    var a = l & ~o;
    a !== 0 ? (n = qi(a)) : ((r &= l), r !== 0 && (n = qi(r)));
  } else (l = i & ~o), l !== 0 ? (n = qi(l)) : r !== 0 && (n = qi(r));
  if (n === 0) return 0;
  if (
    t !== 0 &&
    t !== n &&
    !(t & o) &&
    ((o = n & -n), (r = t & -t), o >= r || (o === 16 && (r & 4194240) !== 0))
  )
    return t;
  if ((n & 4 && (n |= i & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= n; 0 < t; )
      (i = 31 - We(t)), (o = 1 << i), (n |= e[i]), (t &= ~o);
  return n;
}
function Yp(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function Qp(e, t) {
  for (
    var i = e.suspendedLanes,
      n = e.pingedLanes,
      o = e.expirationTimes,
      r = e.pendingLanes;
    0 < r;

  ) {
    var l = 31 - We(r),
      a = 1 << l,
      c = o[l];
    c === -1
      ? (!(a & i) || a & n) && (o[l] = Yp(a, t))
      : c <= t && (e.expiredLanes |= a),
      (r &= ~a);
  }
}
function Ls(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function Wu() {
  var e = to;
  return (to <<= 1), !(to & 4194240) && (to = 64), e;
}
function Hr(e) {
  for (var t = [], i = 0; 31 > i; i++) t.push(e);
  return t;
}
function Hn(e, t, i) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - We(t)),
    (e[t] = i);
}
function Kp(e, t) {
  var i = e.pendingLanes & ~t;
  (e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements);
  var n = e.eventTimes;
  for (e = e.expirationTimes; 0 < i; ) {
    var o = 31 - We(i),
      r = 1 << o;
    (t[o] = 0), (n[o] = -1), (e[o] = -1), (i &= ~r);
  }
}
function Il(e, t) {
  var i = (e.entangledLanes |= t);
  for (e = e.entanglements; i; ) {
    var n = 31 - We(i),
      o = 1 << n;
    (o & t) | (e[n] & t) && (e[n] |= t), (i &= ~o);
  }
}
var D = 0;
function $u(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var Gu,
  Tl,
  Yu,
  Qu,
  Ku,
  zs = !1,
  no = [],
  kt = null,
  Ct = null,
  jt = null,
  _n = new Map(),
  bn = new Map(),
  yt = [],
  Zp =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function Da(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      kt = null;
      break;
    case "dragenter":
    case "dragleave":
      Ct = null;
      break;
    case "mouseover":
    case "mouseout":
      jt = null;
      break;
    case "pointerover":
    case "pointerout":
      _n.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      bn.delete(t.pointerId);
  }
}
function Vi(e, t, i, n, o, r) {
  return e === null || e.nativeEvent !== r
    ? ((e = {
        blockedOn: t,
        domEventName: i,
        eventSystemFlags: n,
        nativeEvent: r,
        targetContainers: [o],
      }),
      t !== null && ((t = Wn(t)), t !== null && Tl(t)),
      e)
    : ((e.eventSystemFlags |= n),
      (t = e.targetContainers),
      o !== null && t.indexOf(o) === -1 && t.push(o),
      e);
}
function Jp(e, t, i, n, o) {
  switch (t) {
    case "focusin":
      return (kt = Vi(kt, e, t, i, n, o)), !0;
    case "dragenter":
      return (Ct = Vi(Ct, e, t, i, n, o)), !0;
    case "mouseover":
      return (jt = Vi(jt, e, t, i, n, o)), !0;
    case "pointerover":
      var r = o.pointerId;
      return _n.set(r, Vi(_n.get(r) || null, e, t, i, n, o)), !0;
    case "gotpointercapture":
      return (
        (r = o.pointerId), bn.set(r, Vi(bn.get(r) || null, e, t, i, n, o)), !0
      );
  }
  return !1;
}
function Zu(e) {
  var t = Wt(e.target);
  if (t !== null) {
    var i = ii(t);
    if (i !== null) {
      if (((t = i.tag), t === 13)) {
        if (((t = Bu(i)), t !== null)) {
          (e.blockedOn = t),
            Ku(e.priority, function () {
              Yu(i);
            });
          return;
        }
      } else if (t === 3 && i.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = i.tag === 3 ? i.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function ko(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var i = Rs(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (i === null) {
      i = e.nativeEvent;
      var n = new i.constructor(i.type, i);
      (Es = n), i.target.dispatchEvent(n), (Es = null);
    } else return (t = Wn(i)), t !== null && Tl(t), (e.blockedOn = i), !1;
    t.shift();
  }
  return !0;
}
function Va(e, t, i) {
  ko(e) && i.delete(t);
}
function qp() {
  (zs = !1),
    kt !== null && ko(kt) && (kt = null),
    Ct !== null && ko(Ct) && (Ct = null),
    jt !== null && ko(jt) && (jt = null),
    _n.forEach(Va),
    bn.forEach(Va);
}
function Hi(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    zs ||
      ((zs = !0),
      Ne.unstable_scheduleCallback(Ne.unstable_NormalPriority, qp)));
}
function vn(e) {
  function t(o) {
    return Hi(o, e);
  }
  if (0 < no.length) {
    Hi(no[0], e);
    for (var i = 1; i < no.length; i++) {
      var n = no[i];
      n.blockedOn === e && (n.blockedOn = null);
    }
  }
  for (
    kt !== null && Hi(kt, e),
      Ct !== null && Hi(Ct, e),
      jt !== null && Hi(jt, e),
      _n.forEach(t),
      bn.forEach(t),
      i = 0;
    i < yt.length;
    i++
  )
    (n = yt[i]), n.blockedOn === e && (n.blockedOn = null);
  for (; 0 < yt.length && ((i = yt[0]), i.blockedOn === null); )
    Zu(i), i.blockedOn === null && yt.shift();
}
var vi = dt.ReactCurrentBatchConfig,
  Do = !0;
function Xp(e, t, i, n) {
  var o = D,
    r = vi.transition;
  vi.transition = null;
  try {
    (D = 1), Ll(e, t, i, n);
  } finally {
    (D = o), (vi.transition = r);
  }
}
function eh(e, t, i, n) {
  var o = D,
    r = vi.transition;
  vi.transition = null;
  try {
    (D = 4), Ll(e, t, i, n);
  } finally {
    (D = o), (vi.transition = r);
  }
}
function Ll(e, t, i, n) {
  if (Do) {
    var o = Rs(e, t, i, n);
    if (o === null) qr(e, t, n, Vo, i), Da(e, n);
    else if (Jp(o, e, t, i, n)) n.stopPropagation();
    else if ((Da(e, n), t & 4 && -1 < Zp.indexOf(e))) {
      for (; o !== null; ) {
        var r = Wn(o);
        if (
          (r !== null && Gu(r),
          (r = Rs(e, t, i, n)),
          r === null && qr(e, t, n, Vo, i),
          r === o)
        )
          break;
        o = r;
      }
      o !== null && n.stopPropagation();
    } else qr(e, t, n, null, i);
  }
}
var Vo = null;
function Rs(e, t, i, n) {
  if (((Vo = null), (e = El(n)), (e = Wt(e)), e !== null))
    if (((t = ii(e)), t === null)) e = null;
    else if (((i = t.tag), i === 13)) {
      if (((e = Bu(t)), e !== null)) return e;
      e = null;
    } else if (i === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (Vo = e), null;
}
function Ju(e) {
  switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (Vp()) {
        case Pl:
          return 1;
        case Hu:
          return 4;
        case Bo:
        case Hp:
          return 16;
        case Uu:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var bt = null,
  zl = null,
  Co = null;
function qu() {
  if (Co) return Co;
  var e,
    t = zl,
    i = t.length,
    n,
    o = "value" in bt ? bt.value : bt.textContent,
    r = o.length;
  for (e = 0; e < i && t[e] === o[e]; e++);
  var l = i - e;
  for (n = 1; n <= l && t[i - n] === o[r - n]; n++);
  return (Co = o.slice(e, 1 < n ? 1 - n : void 0));
}
function jo(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function oo() {
  return !0;
}
function Ha() {
  return !1;
}
function Ee(e) {
  function t(i, n, o, r, l) {
    (this._reactName = i),
      (this._targetInst = o),
      (this.type = n),
      (this.nativeEvent = r),
      (this.target = l),
      (this.currentTarget = null);
    for (var a in e)
      e.hasOwnProperty(a) && ((i = e[a]), (this[a] = i ? i(r) : r[a]));
    return (
      (this.isDefaultPrevented = (
        r.defaultPrevented != null ? r.defaultPrevented : r.returnValue === !1
      )
        ? oo
        : Ha),
      (this.isPropagationStopped = Ha),
      this
    );
  }
  return (
    Q(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var i = this.nativeEvent;
        i &&
          (i.preventDefault
            ? i.preventDefault()
            : typeof i.returnValue != "unknown" && (i.returnValue = !1),
          (this.isDefaultPrevented = oo));
      },
      stopPropagation: function () {
        var i = this.nativeEvent;
        i &&
          (i.stopPropagation
            ? i.stopPropagation()
            : typeof i.cancelBubble != "unknown" && (i.cancelBubble = !0),
          (this.isPropagationStopped = oo));
      },
      persist: function () {},
      isPersistent: oo,
    }),
    t
  );
}
var zi = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  Rl = Ee(zi),
  Un = Q({}, zi, { view: 0, detail: 0 }),
  th = Ee(Un),
  Ur,
  Wr,
  Ui,
  dr = Q({}, Un, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: Ml,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return "movementX" in e
        ? e.movementX
        : (e !== Ui &&
            (Ui && e.type === "mousemove"
              ? ((Ur = e.screenX - Ui.screenX), (Wr = e.screenY - Ui.screenY))
              : (Wr = Ur = 0),
            (Ui = e)),
          Ur);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : Wr;
    },
  }),
  Ua = Ee(dr),
  ih = Q({}, dr, { dataTransfer: 0 }),
  nh = Ee(ih),
  oh = Q({}, Un, { relatedTarget: 0 }),
  $r = Ee(oh),
  rh = Q({}, zi, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  sh = Ee(rh),
  lh = Q({}, zi, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  ah = Ee(lh),
  ch = Q({}, zi, { data: 0 }),
  Wa = Ee(ch),
  uh = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified",
  },
  mh = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta",
  },
  dh = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function ph(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = dh[e]) ? !!t[e] : !1;
}
function Ml() {
  return ph;
}
var hh = Q({}, Un, {
    key: function (e) {
      if (e.key) {
        var t = uh[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = jo(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
        ? mh[e.keyCode] || "Unidentified"
        : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Ml,
    charCode: function (e) {
      return e.type === "keypress" ? jo(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? jo(e)
        : e.type === "keydown" || e.type === "keyup"
        ? e.keyCode
        : 0;
    },
  }),
  gh = Ee(hh),
  fh = Q({}, dr, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  $a = Ee(fh),
  yh = Q({}, Un, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Ml,
  }),
  _h = Ee(yh),
  bh = Q({}, zi, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  vh = Ee(bh),
  wh = Q({}, dr, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return "deltaY" in e
        ? e.deltaY
        : "wheelDeltaY" in e
        ? -e.wheelDeltaY
        : "wheelDelta" in e
        ? -e.wheelDelta
        : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  xh = Ee(wh),
  kh = [9, 13, 27, 32],
  Ol = at && "CompositionEvent" in window,
  on = null;
at && "documentMode" in document && (on = document.documentMode);
var Ch = at && "TextEvent" in window && !on,
  Xu = at && (!Ol || (on && 8 < on && 11 >= on)),
  Ga = String.fromCharCode(32),
  Ya = !1;
function em(e, t) {
  switch (e) {
    case "keyup":
      return kh.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function tm(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var li = !1;
function jh(e, t) {
  switch (e) {
    case "compositionend":
      return tm(t);
    case "keypress":
      return t.which !== 32 ? null : ((Ya = !0), Ga);
    case "textInput":
      return (e = t.data), e === Ga && Ya ? null : e;
    default:
      return null;
  }
}
function Sh(e, t) {
  if (li)
    return e === "compositionend" || (!Ol && em(e, t))
      ? ((e = qu()), (Co = zl = bt = null), (li = !1), e)
      : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return Xu && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var Nh = {
  color: !0,
  date: !0,
  datetime: !0,
  "datetime-local": !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
};
function Qa(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!Nh[e.type] : t === "textarea";
}
function im(e, t, i, n) {
  Lu(n),
    (t = Ho(t, "onChange")),
    0 < t.length &&
      ((i = new Rl("onChange", "change", null, i, n)),
      e.push({ event: i, listeners: t }));
}
var rn = null,
  wn = null;
function Ah(e) {
  pm(e, 0);
}
function pr(e) {
  var t = ui(e);
  if (Su(t)) return e;
}
function Eh(e, t) {
  if (e === "change") return t;
}
var nm = !1;
if (at) {
  var Gr;
  if (at) {
    var Yr = "oninput" in document;
    if (!Yr) {
      var Ka = document.createElement("div");
      Ka.setAttribute("oninput", "return;"),
        (Yr = typeof Ka.oninput == "function");
    }
    Gr = Yr;
  } else Gr = !1;
  nm = Gr && (!document.documentMode || 9 < document.documentMode);
}
function Za() {
  rn && (rn.detachEvent("onpropertychange", om), (wn = rn = null));
}
function om(e) {
  if (e.propertyName === "value" && pr(wn)) {
    var t = [];
    im(t, wn, e, El(e)), Ou(Ah, t);
  }
}
function Ph(e, t, i) {
  e === "focusin"
    ? (Za(), (rn = t), (wn = i), rn.attachEvent("onpropertychange", om))
    : e === "focusout" && Za();
}
function Ih(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return pr(wn);
}
function Th(e, t) {
  if (e === "click") return pr(t);
}
function Lh(e, t) {
  if (e === "input" || e === "change") return pr(t);
}
function zh(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var Ge = typeof Object.is == "function" ? Object.is : zh;
function xn(e, t) {
  if (Ge(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var i = Object.keys(e),
    n = Object.keys(t);
  if (i.length !== n.length) return !1;
  for (n = 0; n < i.length; n++) {
    var o = i[n];
    if (!ys.call(t, o) || !Ge(e[o], t[o])) return !1;
  }
  return !0;
}
function Ja(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function qa(e, t) {
  var i = Ja(e);
  e = 0;
  for (var n; i; ) {
    if (i.nodeType === 3) {
      if (((n = e + i.textContent.length), e <= t && n >= t))
        return { node: i, offset: t - e };
      e = n;
    }
    e: {
      for (; i; ) {
        if (i.nextSibling) {
          i = i.nextSibling;
          break e;
        }
        i = i.parentNode;
      }
      i = void 0;
    }
    i = Ja(i);
  }
}
function rm(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? rm(e, t.parentNode)
      : "contains" in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function sm() {
  for (var e = window, t = Ro(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var i = typeof t.contentWindow.location.href == "string";
    } catch {
      i = !1;
    }
    if (i) e = t.contentWindow;
    else break;
    t = Ro(e.document);
  }
  return t;
}
function Bl(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === "input" &&
      (e.type === "text" ||
        e.type === "search" ||
        e.type === "tel" ||
        e.type === "url" ||
        e.type === "password")) ||
      t === "textarea" ||
      e.contentEditable === "true")
  );
}
function Rh(e) {
  var t = sm(),
    i = e.focusedElem,
    n = e.selectionRange;
  if (
    t !== i &&
    i &&
    i.ownerDocument &&
    rm(i.ownerDocument.documentElement, i)
  ) {
    if (n !== null && Bl(i)) {
      if (
        ((t = n.start),
        (e = n.end),
        e === void 0 && (e = t),
        "selectionStart" in i)
      )
        (i.selectionStart = t), (i.selectionEnd = Math.min(e, i.value.length));
      else if (
        ((e = ((t = i.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var o = i.textContent.length,
          r = Math.min(n.start, o);
        (n = n.end === void 0 ? r : Math.min(n.end, o)),
          !e.extend && r > n && ((o = n), (n = r), (r = o)),
          (o = qa(i, r));
        var l = qa(i, n);
        o &&
          l &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== o.node ||
            e.anchorOffset !== o.offset ||
            e.focusNode !== l.node ||
            e.focusOffset !== l.offset) &&
          ((t = t.createRange()),
          t.setStart(o.node, o.offset),
          e.removeAllRanges(),
          r > n
            ? (e.addRange(t), e.extend(l.node, l.offset))
            : (t.setEnd(l.node, l.offset), e.addRange(t)));
      }
    }
    for (t = [], e = i; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof i.focus == "function" && i.focus(), i = 0; i < t.length; i++)
      (e = t[i]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top);
  }
}
var Mh = at && "documentMode" in document && 11 >= document.documentMode,
  ai = null,
  Ms = null,
  sn = null,
  Os = !1;
function Xa(e, t, i) {
  var n = i.window === i ? i.document : i.nodeType === 9 ? i : i.ownerDocument;
  Os ||
    ai == null ||
    ai !== Ro(n) ||
    ((n = ai),
    "selectionStart" in n && Bl(n)
      ? (n = { start: n.selectionStart, end: n.selectionEnd })
      : ((n = (
          (n.ownerDocument && n.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (n = {
          anchorNode: n.anchorNode,
          anchorOffset: n.anchorOffset,
          focusNode: n.focusNode,
          focusOffset: n.focusOffset,
        })),
    (sn && xn(sn, n)) ||
      ((sn = n),
      (n = Ho(Ms, "onSelect")),
      0 < n.length &&
        ((t = new Rl("onSelect", "select", null, t, i)),
        e.push({ event: t, listeners: n }),
        (t.target = ai))));
}
function ro(e, t) {
  var i = {};
  return (
    (i[e.toLowerCase()] = t.toLowerCase()),
    (i["Webkit" + e] = "webkit" + t),
    (i["Moz" + e] = "moz" + t),
    i
  );
}
var ci = {
    animationend: ro("Animation", "AnimationEnd"),
    animationiteration: ro("Animation", "AnimationIteration"),
    animationstart: ro("Animation", "AnimationStart"),
    transitionend: ro("Transition", "TransitionEnd"),
  },
  Qr = {},
  lm = {};
at &&
  ((lm = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete ci.animationend.animation,
    delete ci.animationiteration.animation,
    delete ci.animationstart.animation),
  "TransitionEvent" in window || delete ci.transitionend.transition);
function hr(e) {
  if (Qr[e]) return Qr[e];
  if (!ci[e]) return e;
  var t = ci[e],
    i;
  for (i in t) if (t.hasOwnProperty(i) && i in lm) return (Qr[e] = t[i]);
  return e;
}
var am = hr("animationend"),
  cm = hr("animationiteration"),
  um = hr("animationstart"),
  mm = hr("transitionend"),
  dm = new Map(),
  ec =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
function zt(e, t) {
  dm.set(e, t), ti(t, [e]);
}
for (var Kr = 0; Kr < ec.length; Kr++) {
  var Zr = ec[Kr],
    Oh = Zr.toLowerCase(),
    Bh = Zr[0].toUpperCase() + Zr.slice(1);
  zt(Oh, "on" + Bh);
}
zt(am, "onAnimationEnd");
zt(cm, "onAnimationIteration");
zt(um, "onAnimationStart");
zt("dblclick", "onDoubleClick");
zt("focusin", "onFocus");
zt("focusout", "onBlur");
zt(mm, "onTransitionEnd");
ji("onMouseEnter", ["mouseout", "mouseover"]);
ji("onMouseLeave", ["mouseout", "mouseover"]);
ji("onPointerEnter", ["pointerout", "pointerover"]);
ji("onPointerLeave", ["pointerout", "pointerover"]);
ti(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(" ")
);
ti(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " "
  )
);
ti("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
ti(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
ti(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
ti(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var Xi =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  Fh = new Set("cancel close invalid load scroll toggle".split(" ").concat(Xi));
function tc(e, t, i) {
  var n = e.type || "unknown-event";
  (e.currentTarget = i), Op(n, t, void 0, e), (e.currentTarget = null);
}
function pm(e, t) {
  t = (t & 4) !== 0;
  for (var i = 0; i < e.length; i++) {
    var n = e[i],
      o = n.event;
    n = n.listeners;
    e: {
      var r = void 0;
      if (t)
        for (var l = n.length - 1; 0 <= l; l--) {
          var a = n[l],
            c = a.instance,
            u = a.currentTarget;
          if (((a = a.listener), c !== r && o.isPropagationStopped())) break e;
          tc(o, a, u), (r = c);
        }
      else
        for (l = 0; l < n.length; l++) {
          if (
            ((a = n[l]),
            (c = a.instance),
            (u = a.currentTarget),
            (a = a.listener),
            c !== r && o.isPropagationStopped())
          )
            break e;
          tc(o, a, u), (r = c);
        }
    }
  }
  if (Oo) throw ((e = Ts), (Oo = !1), (Ts = null), e);
}
function U(e, t) {
  var i = t[Hs];
  i === void 0 && (i = t[Hs] = new Set());
  var n = e + "__bubble";
  i.has(n) || (hm(t, e, 2, !1), i.add(n));
}
function Jr(e, t, i) {
  var n = 0;
  t && (n |= 4), hm(i, e, n, t);
}
var so = "_reactListening" + Math.random().toString(36).slice(2);
function kn(e) {
  if (!e[so]) {
    (e[so] = !0),
      wu.forEach(function (i) {
        i !== "selectionchange" && (Fh.has(i) || Jr(i, !1, e), Jr(i, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[so] || ((t[so] = !0), Jr("selectionchange", !1, t));
  }
}
function hm(e, t, i, n) {
  switch (Ju(t)) {
    case 1:
      var o = Xp;
      break;
    case 4:
      o = eh;
      break;
    default:
      o = Ll;
  }
  (i = o.bind(null, t, i, e)),
    (o = void 0),
    !Is ||
      (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
      (o = !0),
    n
      ? o !== void 0
        ? e.addEventListener(t, i, { capture: !0, passive: o })
        : e.addEventListener(t, i, !0)
      : o !== void 0
      ? e.addEventListener(t, i, { passive: o })
      : e.addEventListener(t, i, !1);
}
function qr(e, t, i, n, o) {
  var r = n;
  if (!(t & 1) && !(t & 2) && n !== null)
    e: for (;;) {
      if (n === null) return;
      var l = n.tag;
      if (l === 3 || l === 4) {
        var a = n.stateNode.containerInfo;
        if (a === o || (a.nodeType === 8 && a.parentNode === o)) break;
        if (l === 4)
          for (l = n.return; l !== null; ) {
            var c = l.tag;
            if (
              (c === 3 || c === 4) &&
              ((c = l.stateNode.containerInfo),
              c === o || (c.nodeType === 8 && c.parentNode === o))
            )
              return;
            l = l.return;
          }
        for (; a !== null; ) {
          if (((l = Wt(a)), l === null)) return;
          if (((c = l.tag), c === 5 || c === 6)) {
            n = r = l;
            continue e;
          }
          a = a.parentNode;
        }
      }
      n = n.return;
    }
  Ou(function () {
    var u = r,
      f = El(i),
      g = [];
    e: {
      var h = dm.get(e);
      if (h !== void 0) {
        var b = Rl,
          v = e;
        switch (e) {
          case "keypress":
            if (jo(i) === 0) break e;
          case "keydown":
          case "keyup":
            b = gh;
            break;
          case "focusin":
            (v = "focus"), (b = $r);
            break;
          case "focusout":
            (v = "blur"), (b = $r);
            break;
          case "beforeblur":
          case "afterblur":
            b = $r;
            break;
          case "click":
            if (i.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            b = Ua;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            b = nh;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            b = _h;
            break;
          case am:
          case cm:
          case um:
            b = sh;
            break;
          case mm:
            b = vh;
            break;
          case "scroll":
            b = th;
            break;
          case "wheel":
            b = xh;
            break;
          case "copy":
          case "cut":
          case "paste":
            b = ah;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            b = $a;
        }
        var w = (t & 4) !== 0,
          S = !w && e === "scroll",
          d = w ? (h !== null ? h + "Capture" : null) : h;
        w = [];
        for (var m = u, p; m !== null; ) {
          p = m;
          var _ = p.stateNode;
          if (
            (p.tag === 5 &&
              _ !== null &&
              ((p = _),
              d !== null && ((_ = yn(m, d)), _ != null && w.push(Cn(m, _, p)))),
            S)
          )
            break;
          m = m.return;
        }
        0 < w.length &&
          ((h = new b(h, v, null, i, f)), g.push({ event: h, listeners: w }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((h = e === "mouseover" || e === "pointerover"),
          (b = e === "mouseout" || e === "pointerout"),
          h &&
            i !== Es &&
            (v = i.relatedTarget || i.fromElement) &&
            (Wt(v) || v[ct]))
        )
          break e;
        if (
          (b || h) &&
          ((h =
            f.window === f
              ? f
              : (h = f.ownerDocument)
              ? h.defaultView || h.parentWindow
              : window),
          b
            ? ((v = i.relatedTarget || i.toElement),
              (b = u),
              (v = v ? Wt(v) : null),
              v !== null &&
                ((S = ii(v)), v !== S || (v.tag !== 5 && v.tag !== 6)) &&
                (v = null))
            : ((b = null), (v = u)),
          b !== v)
        ) {
          if (
            ((w = Ua),
            (_ = "onMouseLeave"),
            (d = "onMouseEnter"),
            (m = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((w = $a),
              (_ = "onPointerLeave"),
              (d = "onPointerEnter"),
              (m = "pointer")),
            (S = b == null ? h : ui(b)),
            (p = v == null ? h : ui(v)),
            (h = new w(_, m + "leave", b, i, f)),
            (h.target = S),
            (h.relatedTarget = p),
            (_ = null),
            Wt(f) === u &&
              ((w = new w(d, m + "enter", v, i, f)),
              (w.target = p),
              (w.relatedTarget = S),
              (_ = w)),
            (S = _),
            b && v)
          )
            t: {
              for (w = b, d = v, m = 0, p = w; p; p = ni(p)) m++;
              for (p = 0, _ = d; _; _ = ni(_)) p++;
              for (; 0 < m - p; ) (w = ni(w)), m--;
              for (; 0 < p - m; ) (d = ni(d)), p--;
              for (; m--; ) {
                if (w === d || (d !== null && w === d.alternate)) break t;
                (w = ni(w)), (d = ni(d));
              }
              w = null;
            }
          else w = null;
          b !== null && ic(g, h, b, w, !1),
            v !== null && S !== null && ic(g, S, v, w, !0);
        }
      }
      e: {
        if (
          ((h = u ? ui(u) : window),
          (b = h.nodeName && h.nodeName.toLowerCase()),
          b === "select" || (b === "input" && h.type === "file"))
        )
          var C = Eh;
        else if (Qa(h))
          if (nm) C = Lh;
          else {
            C = Ih;
            var N = Ph;
          }
        else
          (b = h.nodeName) &&
            b.toLowerCase() === "input" &&
            (h.type === "checkbox" || h.type === "radio") &&
            (C = Th);
        if (C && (C = C(e, u))) {
          im(g, C, i, f);
          break e;
        }
        N && N(e, h, u),
          e === "focusout" &&
            (N = h._wrapperState) &&
            N.controlled &&
            h.type === "number" &&
            Cs(h, "number", h.value);
      }
      switch (((N = u ? ui(u) : window), e)) {
        case "focusin":
          (Qa(N) || N.contentEditable === "true") &&
            ((ai = N), (Ms = u), (sn = null));
          break;
        case "focusout":
          sn = Ms = ai = null;
          break;
        case "mousedown":
          Os = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (Os = !1), Xa(g, i, f);
          break;
        case "selectionchange":
          if (Mh) break;
        case "keydown":
        case "keyup":
          Xa(g, i, f);
      }
      var j;
      if (Ol)
        e: {
          switch (e) {
            case "compositionstart":
              var I = "onCompositionStart";
              break e;
            case "compositionend":
              I = "onCompositionEnd";
              break e;
            case "compositionupdate":
              I = "onCompositionUpdate";
              break e;
          }
          I = void 0;
        }
      else
        li
          ? em(e, i) && (I = "onCompositionEnd")
          : e === "keydown" && i.keyCode === 229 && (I = "onCompositionStart");
      I &&
        (Xu &&
          i.locale !== "ko" &&
          (li || I !== "onCompositionStart"
            ? I === "onCompositionEnd" && li && (j = qu())
            : ((bt = f),
              (zl = "value" in bt ? bt.value : bt.textContent),
              (li = !0))),
        (N = Ho(u, I)),
        0 < N.length &&
          ((I = new Wa(I, e, null, i, f)),
          g.push({ event: I, listeners: N }),
          j ? (I.data = j) : ((j = tm(i)), j !== null && (I.data = j)))),
        (j = Ch ? jh(e, i) : Sh(e, i)) &&
          ((u = Ho(u, "onBeforeInput")),
          0 < u.length &&
            ((f = new Wa("onBeforeInput", "beforeinput", null, i, f)),
            g.push({ event: f, listeners: u }),
            (f.data = j)));
    }
    pm(g, t);
  });
}
function Cn(e, t, i) {
  return { instance: e, listener: t, currentTarget: i };
}
function Ho(e, t) {
  for (var i = t + "Capture", n = []; e !== null; ) {
    var o = e,
      r = o.stateNode;
    o.tag === 5 &&
      r !== null &&
      ((o = r),
      (r = yn(e, i)),
      r != null && n.unshift(Cn(e, r, o)),
      (r = yn(e, t)),
      r != null && n.push(Cn(e, r, o))),
      (e = e.return);
  }
  return n;
}
function ni(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function ic(e, t, i, n, o) {
  for (var r = t._reactName, l = []; i !== null && i !== n; ) {
    var a = i,
      c = a.alternate,
      u = a.stateNode;
    if (c !== null && c === n) break;
    a.tag === 5 &&
      u !== null &&
      ((a = u),
      o
        ? ((c = yn(i, r)), c != null && l.unshift(Cn(i, c, a)))
        : o || ((c = yn(i, r)), c != null && l.push(Cn(i, c, a)))),
      (i = i.return);
  }
  l.length !== 0 && e.push({ event: t, listeners: l });
}
var Dh = /\r\n?/g,
  Vh = /\u0000|\uFFFD/g;
function nc(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      Dh,
      `
`
    )
    .replace(Vh, "");
}
function lo(e, t, i) {
  if (((t = nc(t)), nc(e) !== t && i)) throw Error(x(425));
}
function Uo() {}
var Bs = null,
  Fs = null;
function Ds(e, t) {
  return (
    e === "textarea" ||
    e === "noscript" ||
    typeof t.children == "string" ||
    typeof t.children == "number" ||
    (typeof t.dangerouslySetInnerHTML == "object" &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var Vs = typeof setTimeout == "function" ? setTimeout : void 0,
  Hh = typeof clearTimeout == "function" ? clearTimeout : void 0,
  oc = typeof Promise == "function" ? Promise : void 0,
  Uh =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof oc < "u"
      ? function (e) {
          return oc.resolve(null).then(e).catch(Wh);
        }
      : Vs;
function Wh(e) {
  setTimeout(function () {
    throw e;
  });
}
function Xr(e, t) {
  var i = t,
    n = 0;
  do {
    var o = i.nextSibling;
    if ((e.removeChild(i), o && o.nodeType === 8))
      if (((i = o.data), i === "/$")) {
        if (n === 0) {
          e.removeChild(o), vn(t);
          return;
        }
        n--;
      } else (i !== "$" && i !== "$?" && i !== "$!") || n++;
    i = o;
  } while (i);
  vn(t);
}
function St(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
      if (t === "/$") return null;
    }
  }
  return e;
}
function rc(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var i = e.data;
      if (i === "$" || i === "$!" || i === "$?") {
        if (t === 0) return e;
        t--;
      } else i === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var Ri = Math.random().toString(36).slice(2),
  Je = "__reactFiber$" + Ri,
  jn = "__reactProps$" + Ri,
  ct = "__reactContainer$" + Ri,
  Hs = "__reactEvents$" + Ri,
  $h = "__reactListeners$" + Ri,
  Gh = "__reactHandles$" + Ri;
function Wt(e) {
  var t = e[Je];
  if (t) return t;
  for (var i = e.parentNode; i; ) {
    if ((t = i[ct] || i[Je])) {
      if (
        ((i = t.alternate),
        t.child !== null || (i !== null && i.child !== null))
      )
        for (e = rc(e); e !== null; ) {
          if ((i = e[Je])) return i;
          e = rc(e);
        }
      return t;
    }
    (e = i), (i = e.parentNode);
  }
  return null;
}
function Wn(e) {
  return (
    (e = e[Je] || e[ct]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function ui(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(x(33));
}
function gr(e) {
  return e[jn] || null;
}
var Us = [],
  mi = -1;
function Rt(e) {
  return { current: e };
}
function W(e) {
  0 > mi || ((e.current = Us[mi]), (Us[mi] = null), mi--);
}
function V(e, t) {
  mi++, (Us[mi] = e.current), (e.current = t);
}
var Lt = {},
  ue = Rt(Lt),
  ve = Rt(!1),
  Kt = Lt;
function Si(e, t) {
  var i = e.type.contextTypes;
  if (!i) return Lt;
  var n = e.stateNode;
  if (n && n.__reactInternalMemoizedUnmaskedChildContext === t)
    return n.__reactInternalMemoizedMaskedChildContext;
  var o = {},
    r;
  for (r in i) o[r] = t[r];
  return (
    n &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = o)),
    o
  );
}
function we(e) {
  return (e = e.childContextTypes), e != null;
}
function Wo() {
  W(ve), W(ue);
}
function sc(e, t, i) {
  if (ue.current !== Lt) throw Error(x(168));
  V(ue, t), V(ve, i);
}
function gm(e, t, i) {
  var n = e.stateNode;
  if (((t = t.childContextTypes), typeof n.getChildContext != "function"))
    return i;
  n = n.getChildContext();
  for (var o in n) if (!(o in t)) throw Error(x(108, Pp(e) || "Unknown", o));
  return Q({}, i, n);
}
function $o(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || Lt),
    (Kt = ue.current),
    V(ue, e),
    V(ve, ve.current),
    !0
  );
}
function lc(e, t, i) {
  var n = e.stateNode;
  if (!n) throw Error(x(169));
  i
    ? ((e = gm(e, t, Kt)),
      (n.__reactInternalMemoizedMergedChildContext = e),
      W(ve),
      W(ue),
      V(ue, e))
    : W(ve),
    V(ve, i);
}
var ot = null,
  fr = !1,
  es = !1;
function fm(e) {
  ot === null ? (ot = [e]) : ot.push(e);
}
function Yh(e) {
  (fr = !0), fm(e);
}
function Mt() {
  if (!es && ot !== null) {
    es = !0;
    var e = 0,
      t = D;
    try {
      var i = ot;
      for (D = 1; e < i.length; e++) {
        var n = i[e];
        do n = n(!0);
        while (n !== null);
      }
      (ot = null), (fr = !1);
    } catch (o) {
      throw (ot !== null && (ot = ot.slice(e + 1)), Vu(Pl, Mt), o);
    } finally {
      (D = t), (es = !1);
    }
  }
  return null;
}
var di = [],
  pi = 0,
  Go = null,
  Yo = 0,
  Pe = [],
  Ie = 0,
  Zt = null,
  rt = 1,
  st = "";
function Dt(e, t) {
  (di[pi++] = Yo), (di[pi++] = Go), (Go = e), (Yo = t);
}
function ym(e, t, i) {
  (Pe[Ie++] = rt), (Pe[Ie++] = st), (Pe[Ie++] = Zt), (Zt = e);
  var n = rt;
  e = st;
  var o = 32 - We(n) - 1;
  (n &= ~(1 << o)), (i += 1);
  var r = 32 - We(t) + o;
  if (30 < r) {
    var l = o - (o % 5);
    (r = (n & ((1 << l) - 1)).toString(32)),
      (n >>= l),
      (o -= l),
      (rt = (1 << (32 - We(t) + o)) | (i << o) | n),
      (st = r + e);
  } else (rt = (1 << r) | (i << o) | n), (st = e);
}
function Fl(e) {
  e.return !== null && (Dt(e, 1), ym(e, 1, 0));
}
function Dl(e) {
  for (; e === Go; )
    (Go = di[--pi]), (di[pi] = null), (Yo = di[--pi]), (di[pi] = null);
  for (; e === Zt; )
    (Zt = Pe[--Ie]),
      (Pe[Ie] = null),
      (st = Pe[--Ie]),
      (Pe[Ie] = null),
      (rt = Pe[--Ie]),
      (Pe[Ie] = null);
}
var Se = null,
  Ce = null,
  $ = !1,
  Ve = null;
function _m(e, t) {
  var i = ze(5, null, null, 0);
  (i.elementType = "DELETED"),
    (i.stateNode = t),
    (i.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [i]), (e.flags |= 16)) : t.push(i);
}
function ac(e, t) {
  switch (e.tag) {
    case 5:
      var i = e.type;
      return (
        (t =
          t.nodeType !== 1 || i.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (Se = e), (Ce = St(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (Se = e), (Ce = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((i = Zt !== null ? { id: rt, overflow: st } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: i,
              retryLane: 1073741824,
            }),
            (i = ze(18, null, null, 0)),
            (i.stateNode = t),
            (i.return = e),
            (e.child = i),
            (Se = e),
            (Ce = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function Ws(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function $s(e) {
  if ($) {
    var t = Ce;
    if (t) {
      var i = t;
      if (!ac(e, t)) {
        if (Ws(e)) throw Error(x(418));
        t = St(i.nextSibling);
        var n = Se;
        t && ac(e, t)
          ? _m(n, i)
          : ((e.flags = (e.flags & -4097) | 2), ($ = !1), (Se = e));
      }
    } else {
      if (Ws(e)) throw Error(x(418));
      (e.flags = (e.flags & -4097) | 2), ($ = !1), (Se = e);
    }
  }
}
function cc(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  Se = e;
}
function ao(e) {
  if (e !== Se) return !1;
  if (!$) return cc(e), ($ = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !Ds(e.type, e.memoizedProps))),
    t && (t = Ce))
  ) {
    if (Ws(e)) throw (bm(), Error(x(418)));
    for (; t; ) _m(e, t), (t = St(t.nextSibling));
  }
  if ((cc(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(x(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var i = e.data;
          if (i === "/$") {
            if (t === 0) {
              Ce = St(e.nextSibling);
              break e;
            }
            t--;
          } else (i !== "$" && i !== "$!" && i !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      Ce = null;
    }
  } else Ce = Se ? St(e.stateNode.nextSibling) : null;
  return !0;
}
function bm() {
  for (var e = Ce; e; ) e = St(e.nextSibling);
}
function Ni() {
  (Ce = Se = null), ($ = !1);
}
function Vl(e) {
  Ve === null ? (Ve = [e]) : Ve.push(e);
}
var Qh = dt.ReactCurrentBatchConfig;
function Fe(e, t) {
  if (e && e.defaultProps) {
    (t = Q({}, t)), (e = e.defaultProps);
    for (var i in e) t[i] === void 0 && (t[i] = e[i]);
    return t;
  }
  return t;
}
var Qo = Rt(null),
  Ko = null,
  hi = null,
  Hl = null;
function Ul() {
  Hl = hi = Ko = null;
}
function Wl(e) {
  var t = Qo.current;
  W(Qo), (e._currentValue = t);
}
function Gs(e, t, i) {
  for (; e !== null; ) {
    var n = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), n !== null && (n.childLanes |= t))
        : n !== null && (n.childLanes & t) !== t && (n.childLanes |= t),
      e === i)
    )
      break;
    e = e.return;
  }
}
function wi(e, t) {
  (Ko = e),
    (Hl = hi = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (be = !0), (e.firstContext = null));
}
function Me(e) {
  var t = e._currentValue;
  if (Hl !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), hi === null)) {
      if (Ko === null) throw Error(x(308));
      (hi = e), (Ko.dependencies = { lanes: 0, firstContext: e });
    } else hi = hi.next = e;
  return t;
}
var $t = null;
function $l(e) {
  $t === null ? ($t = [e]) : $t.push(e);
}
function vm(e, t, i, n) {
  var o = t.interleaved;
  return (
    o === null ? ((i.next = i), $l(t)) : ((i.next = o.next), (o.next = i)),
    (t.interleaved = i),
    ut(e, n)
  );
}
function ut(e, t) {
  e.lanes |= t;
  var i = e.alternate;
  for (i !== null && (i.lanes |= t), i = e, e = e.return; e !== null; )
    (e.childLanes |= t),
      (i = e.alternate),
      i !== null && (i.childLanes |= t),
      (i = e),
      (e = e.return);
  return i.tag === 3 ? i.stateNode : null;
}
var ft = !1;
function Gl(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function wm(e, t) {
  (e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      });
}
function lt(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function Nt(e, t, i) {
  var n = e.updateQueue;
  if (n === null) return null;
  if (((n = n.shared), F & 2)) {
    var o = n.pending;
    return (
      o === null ? (t.next = t) : ((t.next = o.next), (o.next = t)),
      (n.pending = t),
      ut(e, i)
    );
  }
  return (
    (o = n.interleaved),
    o === null ? ((t.next = t), $l(n)) : ((t.next = o.next), (o.next = t)),
    (n.interleaved = t),
    ut(e, i)
  );
}
function So(e, t, i) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (i & 4194240) !== 0))
  ) {
    var n = t.lanes;
    (n &= e.pendingLanes), (i |= n), (t.lanes = i), Il(e, i);
  }
}
function uc(e, t) {
  var i = e.updateQueue,
    n = e.alternate;
  if (n !== null && ((n = n.updateQueue), i === n)) {
    var o = null,
      r = null;
    if (((i = i.firstBaseUpdate), i !== null)) {
      do {
        var l = {
          eventTime: i.eventTime,
          lane: i.lane,
          tag: i.tag,
          payload: i.payload,
          callback: i.callback,
          next: null,
        };
        r === null ? (o = r = l) : (r = r.next = l), (i = i.next);
      } while (i !== null);
      r === null ? (o = r = t) : (r = r.next = t);
    } else o = r = t;
    (i = {
      baseState: n.baseState,
      firstBaseUpdate: o,
      lastBaseUpdate: r,
      shared: n.shared,
      effects: n.effects,
    }),
      (e.updateQueue = i);
    return;
  }
  (e = i.lastBaseUpdate),
    e === null ? (i.firstBaseUpdate = t) : (e.next = t),
    (i.lastBaseUpdate = t);
}
function Zo(e, t, i, n) {
  var o = e.updateQueue;
  ft = !1;
  var r = o.firstBaseUpdate,
    l = o.lastBaseUpdate,
    a = o.shared.pending;
  if (a !== null) {
    o.shared.pending = null;
    var c = a,
      u = c.next;
    (c.next = null), l === null ? (r = u) : (l.next = u), (l = c);
    var f = e.alternate;
    f !== null &&
      ((f = f.updateQueue),
      (a = f.lastBaseUpdate),
      a !== l &&
        (a === null ? (f.firstBaseUpdate = u) : (a.next = u),
        (f.lastBaseUpdate = c)));
  }
  if (r !== null) {
    var g = o.baseState;
    (l = 0), (f = u = c = null), (a = r);
    do {
      var h = a.lane,
        b = a.eventTime;
      if ((n & h) === h) {
        f !== null &&
          (f = f.next =
            {
              eventTime: b,
              lane: 0,
              tag: a.tag,
              payload: a.payload,
              callback: a.callback,
              next: null,
            });
        e: {
          var v = e,
            w = a;
          switch (((h = t), (b = i), w.tag)) {
            case 1:
              if (((v = w.payload), typeof v == "function")) {
                g = v.call(b, g, h);
                break e;
              }
              g = v;
              break e;
            case 3:
              v.flags = (v.flags & -65537) | 128;
            case 0:
              if (
                ((v = w.payload),
                (h = typeof v == "function" ? v.call(b, g, h) : v),
                h == null)
              )
                break e;
              g = Q({}, g, h);
              break e;
            case 2:
              ft = !0;
          }
        }
        a.callback !== null &&
          a.lane !== 0 &&
          ((e.flags |= 64),
          (h = o.effects),
          h === null ? (o.effects = [a]) : h.push(a));
      } else
        (b = {
          eventTime: b,
          lane: h,
          tag: a.tag,
          payload: a.payload,
          callback: a.callback,
          next: null,
        }),
          f === null ? ((u = f = b), (c = g)) : (f = f.next = b),
          (l |= h);
      if (((a = a.next), a === null)) {
        if (((a = o.shared.pending), a === null)) break;
        (h = a),
          (a = h.next),
          (h.next = null),
          (o.lastBaseUpdate = h),
          (o.shared.pending = null);
      }
    } while (1);
    if (
      (f === null && (c = g),
      (o.baseState = c),
      (o.firstBaseUpdate = u),
      (o.lastBaseUpdate = f),
      (t = o.shared.interleaved),
      t !== null)
    ) {
      o = t;
      do (l |= o.lane), (o = o.next);
      while (o !== t);
    } else r === null && (o.shared.lanes = 0);
    (qt |= l), (e.lanes = l), (e.memoizedState = g);
  }
}
function mc(e, t, i) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var n = e[t],
        o = n.callback;
      if (o !== null) {
        if (((n.callback = null), (n = i), typeof o != "function"))
          throw Error(x(191, o));
        o.call(n);
      }
    }
}
var xm = new vu.Component().refs;
function Ys(e, t, i, n) {
  (t = e.memoizedState),
    (i = i(n, t)),
    (i = i == null ? t : Q({}, t, i)),
    (e.memoizedState = i),
    e.lanes === 0 && (e.updateQueue.baseState = i);
}
var yr = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? ii(e) === e : !1;
  },
  enqueueSetState: function (e, t, i) {
    e = e._reactInternals;
    var n = pe(),
      o = Et(e),
      r = lt(n, o);
    (r.payload = t),
      i != null && (r.callback = i),
      (t = Nt(e, r, o)),
      t !== null && ($e(t, e, o, n), So(t, e, o));
  },
  enqueueReplaceState: function (e, t, i) {
    e = e._reactInternals;
    var n = pe(),
      o = Et(e),
      r = lt(n, o);
    (r.tag = 1),
      (r.payload = t),
      i != null && (r.callback = i),
      (t = Nt(e, r, o)),
      t !== null && ($e(t, e, o, n), So(t, e, o));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var i = pe(),
      n = Et(e),
      o = lt(i, n);
    (o.tag = 2),
      t != null && (o.callback = t),
      (t = Nt(e, o, n)),
      t !== null && ($e(t, e, n, i), So(t, e, n));
  },
};
function dc(e, t, i, n, o, r, l) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(n, r, l)
      : t.prototype && t.prototype.isPureReactComponent
      ? !xn(i, n) || !xn(o, r)
      : !0
  );
}
function km(e, t, i) {
  var n = !1,
    o = Lt,
    r = t.contextType;
  return (
    typeof r == "object" && r !== null
      ? (r = Me(r))
      : ((o = we(t) ? Kt : ue.current),
        (n = t.contextTypes),
        (r = (n = n != null) ? Si(e, o) : Lt)),
    (t = new t(i, r)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = yr),
    (e.stateNode = t),
    (t._reactInternals = e),
    n &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = o),
      (e.__reactInternalMemoizedMaskedChildContext = r)),
    t
  );
}
function pc(e, t, i, n) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(i, n),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(i, n),
    t.state !== e && yr.enqueueReplaceState(t, t.state, null);
}
function Qs(e, t, i, n) {
  var o = e.stateNode;
  (o.props = i), (o.state = e.memoizedState), (o.refs = xm), Gl(e);
  var r = t.contextType;
  typeof r == "object" && r !== null
    ? (o.context = Me(r))
    : ((r = we(t) ? Kt : ue.current), (o.context = Si(e, r))),
    (o.state = e.memoizedState),
    (r = t.getDerivedStateFromProps),
    typeof r == "function" && (Ys(e, t, r, i), (o.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof o.getSnapshotBeforeUpdate == "function" ||
      (typeof o.UNSAFE_componentWillMount != "function" &&
        typeof o.componentWillMount != "function") ||
      ((t = o.state),
      typeof o.componentWillMount == "function" && o.componentWillMount(),
      typeof o.UNSAFE_componentWillMount == "function" &&
        o.UNSAFE_componentWillMount(),
      t !== o.state && yr.enqueueReplaceState(o, o.state, null),
      Zo(e, i, o, n),
      (o.state = e.memoizedState)),
    typeof o.componentDidMount == "function" && (e.flags |= 4194308);
}
function Wi(e, t, i) {
  if (
    ((e = i.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (i._owner) {
      if (((i = i._owner), i)) {
        if (i.tag !== 1) throw Error(x(309));
        var n = i.stateNode;
      }
      if (!n) throw Error(x(147, e));
      var o = n,
        r = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === r
        ? t.ref
        : ((t = function (l) {
            var a = o.refs;
            a === xm && (a = o.refs = {}),
              l === null ? delete a[r] : (a[r] = l);
          }),
          (t._stringRef = r),
          t);
    }
    if (typeof e != "string") throw Error(x(284));
    if (!i._owner) throw Error(x(290, e));
  }
  return e;
}
function co(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      x(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e
      )
    ))
  );
}
function hc(e) {
  var t = e._init;
  return t(e._payload);
}
function Cm(e) {
  function t(d, m) {
    if (e) {
      var p = d.deletions;
      p === null ? ((d.deletions = [m]), (d.flags |= 16)) : p.push(m);
    }
  }
  function i(d, m) {
    if (!e) return null;
    for (; m !== null; ) t(d, m), (m = m.sibling);
    return null;
  }
  function n(d, m) {
    for (d = new Map(); m !== null; )
      m.key !== null ? d.set(m.key, m) : d.set(m.index, m), (m = m.sibling);
    return d;
  }
  function o(d, m) {
    return (d = Pt(d, m)), (d.index = 0), (d.sibling = null), d;
  }
  function r(d, m, p) {
    return (
      (d.index = p),
      e
        ? ((p = d.alternate),
          p !== null
            ? ((p = p.index), p < m ? ((d.flags |= 2), m) : p)
            : ((d.flags |= 2), m))
        : ((d.flags |= 1048576), m)
    );
  }
  function l(d) {
    return e && d.alternate === null && (d.flags |= 2), d;
  }
  function a(d, m, p, _) {
    return m === null || m.tag !== 6
      ? ((m = ls(p, d.mode, _)), (m.return = d), m)
      : ((m = o(m, p)), (m.return = d), m);
  }
  function c(d, m, p, _) {
    var C = p.type;
    return C === si
      ? f(d, m, p.props.children, _, p.key)
      : m !== null &&
        (m.elementType === C ||
          (typeof C == "object" &&
            C !== null &&
            C.$$typeof === gt &&
            hc(C) === m.type))
      ? ((_ = o(m, p.props)), (_.ref = Wi(d, m, p)), (_.return = d), _)
      : ((_ = To(p.type, p.key, p.props, null, d.mode, _)),
        (_.ref = Wi(d, m, p)),
        (_.return = d),
        _);
  }
  function u(d, m, p, _) {
    return m === null ||
      m.tag !== 4 ||
      m.stateNode.containerInfo !== p.containerInfo ||
      m.stateNode.implementation !== p.implementation
      ? ((m = as(p, d.mode, _)), (m.return = d), m)
      : ((m = o(m, p.children || [])), (m.return = d), m);
  }
  function f(d, m, p, _, C) {
    return m === null || m.tag !== 7
      ? ((m = Qt(p, d.mode, _, C)), (m.return = d), m)
      : ((m = o(m, p)), (m.return = d), m);
  }
  function g(d, m, p) {
    if ((typeof m == "string" && m !== "") || typeof m == "number")
      return (m = ls("" + m, d.mode, p)), (m.return = d), m;
    if (typeof m == "object" && m !== null) {
      switch (m.$$typeof) {
        case qn:
          return (
            (p = To(m.type, m.key, m.props, null, d.mode, p)),
            (p.ref = Wi(d, null, m)),
            (p.return = d),
            p
          );
        case ri:
          return (m = as(m, d.mode, p)), (m.return = d), m;
        case gt:
          var _ = m._init;
          return g(d, _(m._payload), p);
      }
      if (Ji(m) || Fi(m))
        return (m = Qt(m, d.mode, p, null)), (m.return = d), m;
      co(d, m);
    }
    return null;
  }
  function h(d, m, p, _) {
    var C = m !== null ? m.key : null;
    if ((typeof p == "string" && p !== "") || typeof p == "number")
      return C !== null ? null : a(d, m, "" + p, _);
    if (typeof p == "object" && p !== null) {
      switch (p.$$typeof) {
        case qn:
          return p.key === C ? c(d, m, p, _) : null;
        case ri:
          return p.key === C ? u(d, m, p, _) : null;
        case gt:
          return (C = p._init), h(d, m, C(p._payload), _);
      }
      if (Ji(p) || Fi(p)) return C !== null ? null : f(d, m, p, _, null);
      co(d, p);
    }
    return null;
  }
  function b(d, m, p, _, C) {
    if ((typeof _ == "string" && _ !== "") || typeof _ == "number")
      return (d = d.get(p) || null), a(m, d, "" + _, C);
    if (typeof _ == "object" && _ !== null) {
      switch (_.$$typeof) {
        case qn:
          return (d = d.get(_.key === null ? p : _.key) || null), c(m, d, _, C);
        case ri:
          return (d = d.get(_.key === null ? p : _.key) || null), u(m, d, _, C);
        case gt:
          var N = _._init;
          return b(d, m, p, N(_._payload), C);
      }
      if (Ji(_) || Fi(_)) return (d = d.get(p) || null), f(m, d, _, C, null);
      co(m, _);
    }
    return null;
  }
  function v(d, m, p, _) {
    for (
      var C = null, N = null, j = m, I = (m = 0), M = null;
      j !== null && I < p.length;
      I++
    ) {
      j.index > I ? ((M = j), (j = null)) : (M = j.sibling);
      var T = h(d, j, p[I], _);
      if (T === null) {
        j === null && (j = M);
        break;
      }
      e && j && T.alternate === null && t(d, j),
        (m = r(T, m, I)),
        N === null ? (C = T) : (N.sibling = T),
        (N = T),
        (j = M);
    }
    if (I === p.length) return i(d, j), $ && Dt(d, I), C;
    if (j === null) {
      for (; I < p.length; I++)
        (j = g(d, p[I], _)),
          j !== null &&
            ((m = r(j, m, I)), N === null ? (C = j) : (N.sibling = j), (N = j));
      return $ && Dt(d, I), C;
    }
    for (j = n(d, j); I < p.length; I++)
      (M = b(j, d, I, p[I], _)),
        M !== null &&
          (e && M.alternate !== null && j.delete(M.key === null ? I : M.key),
          (m = r(M, m, I)),
          N === null ? (C = M) : (N.sibling = M),
          (N = M));
    return (
      e &&
        j.forEach(function (H) {
          return t(d, H);
        }),
      $ && Dt(d, I),
      C
    );
  }
  function w(d, m, p, _) {
    var C = Fi(p);
    if (typeof C != "function") throw Error(x(150));
    if (((p = C.call(p)), p == null)) throw Error(x(151));
    for (
      var N = (C = null), j = m, I = (m = 0), M = null, T = p.next();
      j !== null && !T.done;
      I++, T = p.next()
    ) {
      j.index > I ? ((M = j), (j = null)) : (M = j.sibling);
      var H = h(d, j, T.value, _);
      if (H === null) {
        j === null && (j = M);
        break;
      }
      e && j && H.alternate === null && t(d, j),
        (m = r(H, m, I)),
        N === null ? (C = H) : (N.sibling = H),
        (N = H),
        (j = M);
    }
    if (T.done) return i(d, j), $ && Dt(d, I), C;
    if (j === null) {
      for (; !T.done; I++, T = p.next())
        (T = g(d, T.value, _)),
          T !== null &&
            ((m = r(T, m, I)), N === null ? (C = T) : (N.sibling = T), (N = T));
      return $ && Dt(d, I), C;
    }
    for (j = n(d, j); !T.done; I++, T = p.next())
      (T = b(j, d, I, T.value, _)),
        T !== null &&
          (e && T.alternate !== null && j.delete(T.key === null ? I : T.key),
          (m = r(T, m, I)),
          N === null ? (C = T) : (N.sibling = T),
          (N = T));
    return (
      e &&
        j.forEach(function (fe) {
          return t(d, fe);
        }),
      $ && Dt(d, I),
      C
    );
  }
  function S(d, m, p, _) {
    if (
      (typeof p == "object" &&
        p !== null &&
        p.type === si &&
        p.key === null &&
        (p = p.props.children),
      typeof p == "object" && p !== null)
    ) {
      switch (p.$$typeof) {
        case qn:
          e: {
            for (var C = p.key, N = m; N !== null; ) {
              if (N.key === C) {
                if (((C = p.type), C === si)) {
                  if (N.tag === 7) {
                    i(d, N.sibling),
                      (m = o(N, p.props.children)),
                      (m.return = d),
                      (d = m);
                    break e;
                  }
                } else if (
                  N.elementType === C ||
                  (typeof C == "object" &&
                    C !== null &&
                    C.$$typeof === gt &&
                    hc(C) === N.type)
                ) {
                  i(d, N.sibling),
                    (m = o(N, p.props)),
                    (m.ref = Wi(d, N, p)),
                    (m.return = d),
                    (d = m);
                  break e;
                }
                i(d, N);
                break;
              } else t(d, N);
              N = N.sibling;
            }
            p.type === si
              ? ((m = Qt(p.props.children, d.mode, _, p.key)),
                (m.return = d),
                (d = m))
              : ((_ = To(p.type, p.key, p.props, null, d.mode, _)),
                (_.ref = Wi(d, m, p)),
                (_.return = d),
                (d = _));
          }
          return l(d);
        case ri:
          e: {
            for (N = p.key; m !== null; ) {
              if (m.key === N)
                if (
                  m.tag === 4 &&
                  m.stateNode.containerInfo === p.containerInfo &&
                  m.stateNode.implementation === p.implementation
                ) {
                  i(d, m.sibling),
                    (m = o(m, p.children || [])),
                    (m.return = d),
                    (d = m);
                  break e;
                } else {
                  i(d, m);
                  break;
                }
              else t(d, m);
              m = m.sibling;
            }
            (m = as(p, d.mode, _)), (m.return = d), (d = m);
          }
          return l(d);
        case gt:
          return (N = p._init), S(d, m, N(p._payload), _);
      }
      if (Ji(p)) return v(d, m, p, _);
      if (Fi(p)) return w(d, m, p, _);
      co(d, p);
    }
    return (typeof p == "string" && p !== "") || typeof p == "number"
      ? ((p = "" + p),
        m !== null && m.tag === 6
          ? (i(d, m.sibling), (m = o(m, p)), (m.return = d), (d = m))
          : (i(d, m), (m = ls(p, d.mode, _)), (m.return = d), (d = m)),
        l(d))
      : i(d, m);
  }
  return S;
}
var Ai = Cm(!0),
  jm = Cm(!1),
  $n = {},
  Xe = Rt($n),
  Sn = Rt($n),
  Nn = Rt($n);
function Gt(e) {
  if (e === $n) throw Error(x(174));
  return e;
}
function Yl(e, t) {
  switch ((V(Nn, t), V(Sn, e), V(Xe, $n), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Ss(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = Ss(t, e));
  }
  W(Xe), V(Xe, t);
}
function Ei() {
  W(Xe), W(Sn), W(Nn);
}
function Sm(e) {
  Gt(Nn.current);
  var t = Gt(Xe.current),
    i = Ss(t, e.type);
  t !== i && (V(Sn, e), V(Xe, i));
}
function Ql(e) {
  Sn.current === e && (W(Xe), W(Sn));
}
var G = Rt(0);
function Jo(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var i = t.memoizedState;
      if (
        i !== null &&
        ((i = i.dehydrated), i === null || i.data === "$?" || i.data === "$!")
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
  return null;
}
var ts = [];
function Kl() {
  for (var e = 0; e < ts.length; e++)
    ts[e]._workInProgressVersionPrimary = null;
  ts.length = 0;
}
var No = dt.ReactCurrentDispatcher,
  is = dt.ReactCurrentBatchConfig,
  Jt = 0,
  Y = null,
  X = null,
  ie = null,
  qo = !1,
  ln = !1,
  An = 0,
  Kh = 0;
function le() {
  throw Error(x(321));
}
function Zl(e, t) {
  if (t === null) return !1;
  for (var i = 0; i < t.length && i < e.length; i++)
    if (!Ge(e[i], t[i])) return !1;
  return !0;
}
function Jl(e, t, i, n, o, r) {
  if (
    ((Jt = r),
    (Y = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (No.current = e === null || e.memoizedState === null ? Xh : eg),
    (e = i(n, o)),
    ln)
  ) {
    r = 0;
    do {
      if (((ln = !1), (An = 0), 25 <= r)) throw Error(x(301));
      (r += 1),
        (ie = X = null),
        (t.updateQueue = null),
        (No.current = tg),
        (e = i(n, o));
    } while (ln);
  }
  if (
    ((No.current = Xo),
    (t = X !== null && X.next !== null),
    (Jt = 0),
    (ie = X = Y = null),
    (qo = !1),
    t)
  )
    throw Error(x(300));
  return e;
}
function ql() {
  var e = An !== 0;
  return (An = 0), e;
}
function Ke() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return ie === null ? (Y.memoizedState = ie = e) : (ie = ie.next = e), ie;
}
function Oe() {
  if (X === null) {
    var e = Y.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = X.next;
  var t = ie === null ? Y.memoizedState : ie.next;
  if (t !== null) (ie = t), (X = e);
  else {
    if (e === null) throw Error(x(310));
    (X = e),
      (e = {
        memoizedState: X.memoizedState,
        baseState: X.baseState,
        baseQueue: X.baseQueue,
        queue: X.queue,
        next: null,
      }),
      ie === null ? (Y.memoizedState = ie = e) : (ie = ie.next = e);
  }
  return ie;
}
function En(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function ns(e) {
  var t = Oe(),
    i = t.queue;
  if (i === null) throw Error(x(311));
  i.lastRenderedReducer = e;
  var n = X,
    o = n.baseQueue,
    r = i.pending;
  if (r !== null) {
    if (o !== null) {
      var l = o.next;
      (o.next = r.next), (r.next = l);
    }
    (n.baseQueue = o = r), (i.pending = null);
  }
  if (o !== null) {
    (r = o.next), (n = n.baseState);
    var a = (l = null),
      c = null,
      u = r;
    do {
      var f = u.lane;
      if ((Jt & f) === f)
        c !== null &&
          (c = c.next =
            {
              lane: 0,
              action: u.action,
              hasEagerState: u.hasEagerState,
              eagerState: u.eagerState,
              next: null,
            }),
          (n = u.hasEagerState ? u.eagerState : e(n, u.action));
      else {
        var g = {
          lane: f,
          action: u.action,
          hasEagerState: u.hasEagerState,
          eagerState: u.eagerState,
          next: null,
        };
        c === null ? ((a = c = g), (l = n)) : (c = c.next = g),
          (Y.lanes |= f),
          (qt |= f);
      }
      u = u.next;
    } while (u !== null && u !== r);
    c === null ? (l = n) : (c.next = a),
      Ge(n, t.memoizedState) || (be = !0),
      (t.memoizedState = n),
      (t.baseState = l),
      (t.baseQueue = c),
      (i.lastRenderedState = n);
  }
  if (((e = i.interleaved), e !== null)) {
    o = e;
    do (r = o.lane), (Y.lanes |= r), (qt |= r), (o = o.next);
    while (o !== e);
  } else o === null && (i.lanes = 0);
  return [t.memoizedState, i.dispatch];
}
function os(e) {
  var t = Oe(),
    i = t.queue;
  if (i === null) throw Error(x(311));
  i.lastRenderedReducer = e;
  var n = i.dispatch,
    o = i.pending,
    r = t.memoizedState;
  if (o !== null) {
    i.pending = null;
    var l = (o = o.next);
    do (r = e(r, l.action)), (l = l.next);
    while (l !== o);
    Ge(r, t.memoizedState) || (be = !0),
      (t.memoizedState = r),
      t.baseQueue === null && (t.baseState = r),
      (i.lastRenderedState = r);
  }
  return [r, n];
}
function Nm() {}
function Am(e, t) {
  var i = Y,
    n = Oe(),
    o = t(),
    r = !Ge(n.memoizedState, o);
  if (
    (r && ((n.memoizedState = o), (be = !0)),
    (n = n.queue),
    Xl(Im.bind(null, i, n, e), [e]),
    n.getSnapshot !== t || r || (ie !== null && ie.memoizedState.tag & 1))
  ) {
    if (
      ((i.flags |= 2048),
      Pn(9, Pm.bind(null, i, n, o, t), void 0, null),
      ne === null)
    )
      throw Error(x(349));
    Jt & 30 || Em(i, t, o);
  }
  return o;
}
function Em(e, t, i) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: i }),
    (t = Y.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (Y.updateQueue = t),
        (t.stores = [e]))
      : ((i = t.stores), i === null ? (t.stores = [e]) : i.push(e));
}
function Pm(e, t, i, n) {
  (t.value = i), (t.getSnapshot = n), Tm(t) && Lm(e);
}
function Im(e, t, i) {
  return i(function () {
    Tm(t) && Lm(e);
  });
}
function Tm(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var i = t();
    return !Ge(e, i);
  } catch {
    return !0;
  }
}
function Lm(e) {
  var t = ut(e, 1);
  t !== null && $e(t, e, 1, -1);
}
function gc(e) {
  var t = Ke();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: En,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = qh.bind(null, Y, e)),
    [t.memoizedState, e]
  );
}
function Pn(e, t, i, n) {
  return (
    (e = { tag: e, create: t, destroy: i, deps: n, next: null }),
    (t = Y.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (Y.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((i = t.lastEffect),
        i === null
          ? (t.lastEffect = e.next = e)
          : ((n = i.next), (i.next = e), (e.next = n), (t.lastEffect = e))),
    e
  );
}
function zm() {
  return Oe().memoizedState;
}
function Ao(e, t, i, n) {
  var o = Ke();
  (Y.flags |= e),
    (o.memoizedState = Pn(1 | t, i, void 0, n === void 0 ? null : n));
}
function _r(e, t, i, n) {
  var o = Oe();
  n = n === void 0 ? null : n;
  var r = void 0;
  if (X !== null) {
    var l = X.memoizedState;
    if (((r = l.destroy), n !== null && Zl(n, l.deps))) {
      o.memoizedState = Pn(t, i, r, n);
      return;
    }
  }
  (Y.flags |= e), (o.memoizedState = Pn(1 | t, i, r, n));
}
function fc(e, t) {
  return Ao(8390656, 8, e, t);
}
function Xl(e, t) {
  return _r(2048, 8, e, t);
}
function Rm(e, t) {
  return _r(4, 2, e, t);
}
function Mm(e, t) {
  return _r(4, 4, e, t);
}
function Om(e, t) {
  if (typeof t == "function")
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function Bm(e, t, i) {
  return (
    (i = i != null ? i.concat([e]) : null), _r(4, 4, Om.bind(null, t, e), i)
  );
}
function ea() {}
function Fm(e, t) {
  var i = Oe();
  t = t === void 0 ? null : t;
  var n = i.memoizedState;
  return n !== null && t !== null && Zl(t, n[1])
    ? n[0]
    : ((i.memoizedState = [e, t]), e);
}
function Dm(e, t) {
  var i = Oe();
  t = t === void 0 ? null : t;
  var n = i.memoizedState;
  return n !== null && t !== null && Zl(t, n[1])
    ? n[0]
    : ((e = e()), (i.memoizedState = [e, t]), e);
}
function Vm(e, t, i) {
  return Jt & 21
    ? (Ge(i, t) || ((i = Wu()), (Y.lanes |= i), (qt |= i), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (be = !0)), (e.memoizedState = i));
}
function Zh(e, t) {
  var i = D;
  (D = i !== 0 && 4 > i ? i : 4), e(!0);
  var n = is.transition;
  is.transition = {};
  try {
    e(!1), t();
  } finally {
    (D = i), (is.transition = n);
  }
}
function Hm() {
  return Oe().memoizedState;
}
function Jh(e, t, i) {
  var n = Et(e);
  if (
    ((i = {
      lane: n,
      action: i,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    Um(e))
  )
    Wm(t, i);
  else if (((i = vm(e, t, i, n)), i !== null)) {
    var o = pe();
    $e(i, e, n, o), $m(i, t, n);
  }
}
function qh(e, t, i) {
  var n = Et(e),
    o = { lane: n, action: i, hasEagerState: !1, eagerState: null, next: null };
  if (Um(e)) Wm(t, o);
  else {
    var r = e.alternate;
    if (
      e.lanes === 0 &&
      (r === null || r.lanes === 0) &&
      ((r = t.lastRenderedReducer), r !== null)
    )
      try {
        var l = t.lastRenderedState,
          a = r(l, i);
        if (((o.hasEagerState = !0), (o.eagerState = a), Ge(a, l))) {
          var c = t.interleaved;
          c === null
            ? ((o.next = o), $l(t))
            : ((o.next = c.next), (c.next = o)),
            (t.interleaved = o);
          return;
        }
      } catch {
      } finally {
      }
    (i = vm(e, t, o, n)),
      i !== null && ((o = pe()), $e(i, e, n, o), $m(i, t, n));
  }
}
function Um(e) {
  var t = e.alternate;
  return e === Y || (t !== null && t === Y);
}
function Wm(e, t) {
  ln = qo = !0;
  var i = e.pending;
  i === null ? (t.next = t) : ((t.next = i.next), (i.next = t)),
    (e.pending = t);
}
function $m(e, t, i) {
  if (i & 4194240) {
    var n = t.lanes;
    (n &= e.pendingLanes), (i |= n), (t.lanes = i), Il(e, i);
  }
}
var Xo = {
    readContext: Me,
    useCallback: le,
    useContext: le,
    useEffect: le,
    useImperativeHandle: le,
    useInsertionEffect: le,
    useLayoutEffect: le,
    useMemo: le,
    useReducer: le,
    useRef: le,
    useState: le,
    useDebugValue: le,
    useDeferredValue: le,
    useTransition: le,
    useMutableSource: le,
    useSyncExternalStore: le,
    useId: le,
    unstable_isNewReconciler: !1,
  },
  Xh = {
    readContext: Me,
    useCallback: function (e, t) {
      return (Ke().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: Me,
    useEffect: fc,
    useImperativeHandle: function (e, t, i) {
      return (
        (i = i != null ? i.concat([e]) : null),
        Ao(4194308, 4, Om.bind(null, t, e), i)
      );
    },
    useLayoutEffect: function (e, t) {
      return Ao(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return Ao(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var i = Ke();
      return (
        (t = t === void 0 ? null : t), (e = e()), (i.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, i) {
      var n = Ke();
      return (
        (t = i !== void 0 ? i(t) : t),
        (n.memoizedState = n.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (n.queue = e),
        (e = e.dispatch = Jh.bind(null, Y, e)),
        [n.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = Ke();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: gc,
    useDebugValue: ea,
    useDeferredValue: function (e) {
      return (Ke().memoizedState = e);
    },
    useTransition: function () {
      var e = gc(!1),
        t = e[0];
      return (e = Zh.bind(null, e[1])), (Ke().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, i) {
      var n = Y,
        o = Ke();
      if ($) {
        if (i === void 0) throw Error(x(407));
        i = i();
      } else {
        if (((i = t()), ne === null)) throw Error(x(349));
        Jt & 30 || Em(n, t, i);
      }
      o.memoizedState = i;
      var r = { value: i, getSnapshot: t };
      return (
        (o.queue = r),
        fc(Im.bind(null, n, r, e), [e]),
        (n.flags |= 2048),
        Pn(9, Pm.bind(null, n, r, i, t), void 0, null),
        i
      );
    },
    useId: function () {
      var e = Ke(),
        t = ne.identifierPrefix;
      if ($) {
        var i = st,
          n = rt;
        (i = (n & ~(1 << (32 - We(n) - 1))).toString(32) + i),
          (t = ":" + t + "R" + i),
          (i = An++),
          0 < i && (t += "H" + i.toString(32)),
          (t += ":");
      } else (i = Kh++), (t = ":" + t + "r" + i.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  eg = {
    readContext: Me,
    useCallback: Fm,
    useContext: Me,
    useEffect: Xl,
    useImperativeHandle: Bm,
    useInsertionEffect: Rm,
    useLayoutEffect: Mm,
    useMemo: Dm,
    useReducer: ns,
    useRef: zm,
    useState: function () {
      return ns(En);
    },
    useDebugValue: ea,
    useDeferredValue: function (e) {
      var t = Oe();
      return Vm(t, X.memoizedState, e);
    },
    useTransition: function () {
      var e = ns(En)[0],
        t = Oe().memoizedState;
      return [e, t];
    },
    useMutableSource: Nm,
    useSyncExternalStore: Am,
    useId: Hm,
    unstable_isNewReconciler: !1,
  },
  tg = {
    readContext: Me,
    useCallback: Fm,
    useContext: Me,
    useEffect: Xl,
    useImperativeHandle: Bm,
    useInsertionEffect: Rm,
    useLayoutEffect: Mm,
    useMemo: Dm,
    useReducer: os,
    useRef: zm,
    useState: function () {
      return os(En);
    },
    useDebugValue: ea,
    useDeferredValue: function (e) {
      var t = Oe();
      return X === null ? (t.memoizedState = e) : Vm(t, X.memoizedState, e);
    },
    useTransition: function () {
      var e = os(En)[0],
        t = Oe().memoizedState;
      return [e, t];
    },
    useMutableSource: Nm,
    useSyncExternalStore: Am,
    useId: Hm,
    unstable_isNewReconciler: !1,
  };
function Pi(e, t) {
  try {
    var i = "",
      n = t;
    do (i += Ep(n)), (n = n.return);
    while (n);
    var o = i;
  } catch (r) {
    o =
      `
Error generating stack: ` +
      r.message +
      `
` +
      r.stack;
  }
  return { value: e, source: t, stack: o, digest: null };
}
function rs(e, t, i) {
  return { value: e, source: null, stack: i ?? null, digest: t ?? null };
}
function Ks(e, t) {
  try {
    console.error(t.value);
  } catch (i) {
    setTimeout(function () {
      throw i;
    });
  }
}
var ig = typeof WeakMap == "function" ? WeakMap : Map;
function Gm(e, t, i) {
  (i = lt(-1, i)), (i.tag = 3), (i.payload = { element: null });
  var n = t.value;
  return (
    (i.callback = function () {
      tr || ((tr = !0), (rl = n)), Ks(e, t);
    }),
    i
  );
}
function Ym(e, t, i) {
  (i = lt(-1, i)), (i.tag = 3);
  var n = e.type.getDerivedStateFromError;
  if (typeof n == "function") {
    var o = t.value;
    (i.payload = function () {
      return n(o);
    }),
      (i.callback = function () {
        Ks(e, t);
      });
  }
  var r = e.stateNode;
  return (
    r !== null &&
      typeof r.componentDidCatch == "function" &&
      (i.callback = function () {
        Ks(e, t),
          typeof n != "function" &&
            (At === null ? (At = new Set([this])) : At.add(this));
        var l = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: l !== null ? l : "",
        });
      }),
    i
  );
}
function yc(e, t, i) {
  var n = e.pingCache;
  if (n === null) {
    n = e.pingCache = new ig();
    var o = new Set();
    n.set(t, o);
  } else (o = n.get(t)), o === void 0 && ((o = new Set()), n.set(t, o));
  o.has(i) || (o.add(i), (e = fg.bind(null, e, t, i)), t.then(e, e));
}
function _c(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function bc(e, t, i, n, o) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = o), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (i.flags |= 131072),
          (i.flags &= -52805),
          i.tag === 1 &&
            (i.alternate === null
              ? (i.tag = 17)
              : ((t = lt(-1, 1)), (t.tag = 2), Nt(i, t, 1))),
          (i.lanes |= 1)),
      e);
}
var ng = dt.ReactCurrentOwner,
  be = !1;
function de(e, t, i, n) {
  t.child = e === null ? jm(t, null, i, n) : Ai(t, e.child, i, n);
}
function vc(e, t, i, n, o) {
  i = i.render;
  var r = t.ref;
  return (
    wi(t, o),
    (n = Jl(e, t, i, n, r, o)),
    (i = ql()),
    e !== null && !be
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~o),
        mt(e, t, o))
      : ($ && i && Fl(t), (t.flags |= 1), de(e, t, n, o), t.child)
  );
}
function wc(e, t, i, n, o) {
  if (e === null) {
    var r = i.type;
    return typeof r == "function" &&
      !aa(r) &&
      r.defaultProps === void 0 &&
      i.compare === null &&
      i.defaultProps === void 0
      ? ((t.tag = 15), (t.type = r), Qm(e, t, r, n, o))
      : ((e = To(i.type, null, n, t, t.mode, o)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((r = e.child), !(e.lanes & o))) {
    var l = r.memoizedProps;
    if (
      ((i = i.compare), (i = i !== null ? i : xn), i(l, n) && e.ref === t.ref)
    )
      return mt(e, t, o);
  }
  return (
    (t.flags |= 1),
    (e = Pt(r, n)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function Qm(e, t, i, n, o) {
  if (e !== null) {
    var r = e.memoizedProps;
    if (xn(r, n) && e.ref === t.ref)
      if (((be = !1), (t.pendingProps = n = r), (e.lanes & o) !== 0))
        e.flags & 131072 && (be = !0);
      else return (t.lanes = e.lanes), mt(e, t, o);
  }
  return Zs(e, t, i, n, o);
}
function Km(e, t, i) {
  var n = t.pendingProps,
    o = n.children,
    r = e !== null ? e.memoizedState : null;
  if (n.mode === "hidden")
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        V(fi, ke),
        (ke |= i);
    else {
      if (!(i & 1073741824))
        return (
          (e = r !== null ? r.baseLanes | i : i),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          V(fi, ke),
          (ke |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (n = r !== null ? r.baseLanes : i),
        V(fi, ke),
        (ke |= n);
    }
  else
    r !== null ? ((n = r.baseLanes | i), (t.memoizedState = null)) : (n = i),
      V(fi, ke),
      (ke |= n);
  return de(e, t, o, i), t.child;
}
function Zm(e, t) {
  var i = t.ref;
  ((e === null && i !== null) || (e !== null && e.ref !== i)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function Zs(e, t, i, n, o) {
  var r = we(i) ? Kt : ue.current;
  return (
    (r = Si(t, r)),
    wi(t, o),
    (i = Jl(e, t, i, n, r, o)),
    (n = ql()),
    e !== null && !be
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~o),
        mt(e, t, o))
      : ($ && n && Fl(t), (t.flags |= 1), de(e, t, i, o), t.child)
  );
}
function xc(e, t, i, n, o) {
  if (we(i)) {
    var r = !0;
    $o(t);
  } else r = !1;
  if ((wi(t, o), t.stateNode === null))
    Eo(e, t), km(t, i, n), Qs(t, i, n, o), (n = !0);
  else if (e === null) {
    var l = t.stateNode,
      a = t.memoizedProps;
    l.props = a;
    var c = l.context,
      u = i.contextType;
    typeof u == "object" && u !== null
      ? (u = Me(u))
      : ((u = we(i) ? Kt : ue.current), (u = Si(t, u)));
    var f = i.getDerivedStateFromProps,
      g =
        typeof f == "function" ||
        typeof l.getSnapshotBeforeUpdate == "function";
    g ||
      (typeof l.UNSAFE_componentWillReceiveProps != "function" &&
        typeof l.componentWillReceiveProps != "function") ||
      ((a !== n || c !== u) && pc(t, l, n, u)),
      (ft = !1);
    var h = t.memoizedState;
    (l.state = h),
      Zo(t, n, l, o),
      (c = t.memoizedState),
      a !== n || h !== c || ve.current || ft
        ? (typeof f == "function" && (Ys(t, i, f, n), (c = t.memoizedState)),
          (a = ft || dc(t, i, a, n, h, c, u))
            ? (g ||
                (typeof l.UNSAFE_componentWillMount != "function" &&
                  typeof l.componentWillMount != "function") ||
                (typeof l.componentWillMount == "function" &&
                  l.componentWillMount(),
                typeof l.UNSAFE_componentWillMount == "function" &&
                  l.UNSAFE_componentWillMount()),
              typeof l.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof l.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = n),
              (t.memoizedState = c)),
          (l.props = n),
          (l.state = c),
          (l.context = u),
          (n = a))
        : (typeof l.componentDidMount == "function" && (t.flags |= 4194308),
          (n = !1));
  } else {
    (l = t.stateNode),
      wm(e, t),
      (a = t.memoizedProps),
      (u = t.type === t.elementType ? a : Fe(t.type, a)),
      (l.props = u),
      (g = t.pendingProps),
      (h = l.context),
      (c = i.contextType),
      typeof c == "object" && c !== null
        ? (c = Me(c))
        : ((c = we(i) ? Kt : ue.current), (c = Si(t, c)));
    var b = i.getDerivedStateFromProps;
    (f =
      typeof b == "function" ||
      typeof l.getSnapshotBeforeUpdate == "function") ||
      (typeof l.UNSAFE_componentWillReceiveProps != "function" &&
        typeof l.componentWillReceiveProps != "function") ||
      ((a !== g || h !== c) && pc(t, l, n, c)),
      (ft = !1),
      (h = t.memoizedState),
      (l.state = h),
      Zo(t, n, l, o);
    var v = t.memoizedState;
    a !== g || h !== v || ve.current || ft
      ? (typeof b == "function" && (Ys(t, i, b, n), (v = t.memoizedState)),
        (u = ft || dc(t, i, u, n, h, v, c) || !1)
          ? (f ||
              (typeof l.UNSAFE_componentWillUpdate != "function" &&
                typeof l.componentWillUpdate != "function") ||
              (typeof l.componentWillUpdate == "function" &&
                l.componentWillUpdate(n, v, c),
              typeof l.UNSAFE_componentWillUpdate == "function" &&
                l.UNSAFE_componentWillUpdate(n, v, c)),
            typeof l.componentDidUpdate == "function" && (t.flags |= 4),
            typeof l.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof l.componentDidUpdate != "function" ||
              (a === e.memoizedProps && h === e.memoizedState) ||
              (t.flags |= 4),
            typeof l.getSnapshotBeforeUpdate != "function" ||
              (a === e.memoizedProps && h === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = n),
            (t.memoizedState = v)),
        (l.props = n),
        (l.state = v),
        (l.context = c),
        (n = u))
      : (typeof l.componentDidUpdate != "function" ||
          (a === e.memoizedProps && h === e.memoizedState) ||
          (t.flags |= 4),
        typeof l.getSnapshotBeforeUpdate != "function" ||
          (a === e.memoizedProps && h === e.memoizedState) ||
          (t.flags |= 1024),
        (n = !1));
  }
  return Js(e, t, i, n, r, o);
}
function Js(e, t, i, n, o, r) {
  Zm(e, t);
  var l = (t.flags & 128) !== 0;
  if (!n && !l) return o && lc(t, i, !1), mt(e, t, r);
  (n = t.stateNode), (ng.current = t);
  var a =
    l && typeof i.getDerivedStateFromError != "function" ? null : n.render();
  return (
    (t.flags |= 1),
    e !== null && l
      ? ((t.child = Ai(t, e.child, null, r)), (t.child = Ai(t, null, a, r)))
      : de(e, t, a, r),
    (t.memoizedState = n.state),
    o && lc(t, i, !0),
    t.child
  );
}
function Jm(e) {
  var t = e.stateNode;
  t.pendingContext
    ? sc(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && sc(e, t.context, !1),
    Yl(e, t.containerInfo);
}
function kc(e, t, i, n, o) {
  return Ni(), Vl(o), (t.flags |= 256), de(e, t, i, n), t.child;
}
var qs = { dehydrated: null, treeContext: null, retryLane: 0 };
function Xs(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function qm(e, t, i) {
  var n = t.pendingProps,
    o = G.current,
    r = !1,
    l = (t.flags & 128) !== 0,
    a;
  if (
    ((a = l) ||
      (a = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0),
    a
      ? ((r = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (o |= 1),
    V(G, o & 1),
    e === null)
  )
    return (
      $s(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === "$!"
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((l = n.children),
          (e = n.fallback),
          r
            ? ((n = t.mode),
              (r = t.child),
              (l = { mode: "hidden", children: l }),
              !(n & 1) && r !== null
                ? ((r.childLanes = 0), (r.pendingProps = l))
                : (r = wr(l, n, 0, null)),
              (e = Qt(e, n, i, null)),
              (r.return = t),
              (e.return = t),
              (r.sibling = e),
              (t.child = r),
              (t.child.memoizedState = Xs(i)),
              (t.memoizedState = qs),
              e)
            : ta(t, l))
    );
  if (((o = e.memoizedState), o !== null && ((a = o.dehydrated), a !== null)))
    return og(e, t, l, n, a, o, i);
  if (r) {
    (r = n.fallback), (l = t.mode), (o = e.child), (a = o.sibling);
    var c = { mode: "hidden", children: n.children };
    return (
      !(l & 1) && t.child !== o
        ? ((n = t.child),
          (n.childLanes = 0),
          (n.pendingProps = c),
          (t.deletions = null))
        : ((n = Pt(o, c)), (n.subtreeFlags = o.subtreeFlags & 14680064)),
      a !== null ? (r = Pt(a, r)) : ((r = Qt(r, l, i, null)), (r.flags |= 2)),
      (r.return = t),
      (n.return = t),
      (n.sibling = r),
      (t.child = n),
      (n = r),
      (r = t.child),
      (l = e.child.memoizedState),
      (l =
        l === null
          ? Xs(i)
          : {
              baseLanes: l.baseLanes | i,
              cachePool: null,
              transitions: l.transitions,
            }),
      (r.memoizedState = l),
      (r.childLanes = e.childLanes & ~i),
      (t.memoizedState = qs),
      n
    );
  }
  return (
    (r = e.child),
    (e = r.sibling),
    (n = Pt(r, { mode: "visible", children: n.children })),
    !(t.mode & 1) && (n.lanes = i),
    (n.return = t),
    (n.sibling = null),
    e !== null &&
      ((i = t.deletions),
      i === null ? ((t.deletions = [e]), (t.flags |= 16)) : i.push(e)),
    (t.child = n),
    (t.memoizedState = null),
    n
  );
}
function ta(e, t) {
  return (
    (t = wr({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function uo(e, t, i, n) {
  return (
    n !== null && Vl(n),
    Ai(t, e.child, null, i),
    (e = ta(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function og(e, t, i, n, o, r, l) {
  if (i)
    return t.flags & 256
      ? ((t.flags &= -257), (n = rs(Error(x(422)))), uo(e, t, l, n))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((r = n.fallback),
        (o = t.mode),
        (n = wr({ mode: "visible", children: n.children }, o, 0, null)),
        (r = Qt(r, o, l, null)),
        (r.flags |= 2),
        (n.return = t),
        (r.return = t),
        (n.sibling = r),
        (t.child = n),
        t.mode & 1 && Ai(t, e.child, null, l),
        (t.child.memoizedState = Xs(l)),
        (t.memoizedState = qs),
        r);
  if (!(t.mode & 1)) return uo(e, t, l, null);
  if (o.data === "$!") {
    if (((n = o.nextSibling && o.nextSibling.dataset), n)) var a = n.dgst;
    return (n = a), (r = Error(x(419))), (n = rs(r, n, void 0)), uo(e, t, l, n);
  }
  if (((a = (l & e.childLanes) !== 0), be || a)) {
    if (((n = ne), n !== null)) {
      switch (l & -l) {
        case 4:
          o = 2;
          break;
        case 16:
          o = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          o = 32;
          break;
        case 536870912:
          o = 268435456;
          break;
        default:
          o = 0;
      }
      (o = o & (n.suspendedLanes | l) ? 0 : o),
        o !== 0 &&
          o !== r.retryLane &&
          ((r.retryLane = o), ut(e, o), $e(n, e, o, -1));
    }
    return la(), (n = rs(Error(x(421)))), uo(e, t, l, n);
  }
  return o.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = yg.bind(null, e)),
      (o._reactRetry = t),
      null)
    : ((e = r.treeContext),
      (Ce = St(o.nextSibling)),
      (Se = t),
      ($ = !0),
      (Ve = null),
      e !== null &&
        ((Pe[Ie++] = rt),
        (Pe[Ie++] = st),
        (Pe[Ie++] = Zt),
        (rt = e.id),
        (st = e.overflow),
        (Zt = t)),
      (t = ta(t, n.children)),
      (t.flags |= 4096),
      t);
}
function Cc(e, t, i) {
  e.lanes |= t;
  var n = e.alternate;
  n !== null && (n.lanes |= t), Gs(e.return, t, i);
}
function ss(e, t, i, n, o) {
  var r = e.memoizedState;
  r === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: n,
        tail: i,
        tailMode: o,
      })
    : ((r.isBackwards = t),
      (r.rendering = null),
      (r.renderingStartTime = 0),
      (r.last = n),
      (r.tail = i),
      (r.tailMode = o));
}
function Xm(e, t, i) {
  var n = t.pendingProps,
    o = n.revealOrder,
    r = n.tail;
  if ((de(e, t, n.children, i), (n = G.current), n & 2))
    (n = (n & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && Cc(e, i, t);
        else if (e.tag === 19) Cc(e, i, t);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    n &= 1;
  }
  if ((V(G, n), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (o) {
      case "forwards":
        for (i = t.child, o = null; i !== null; )
          (e = i.alternate),
            e !== null && Jo(e) === null && (o = i),
            (i = i.sibling);
        (i = o),
          i === null
            ? ((o = t.child), (t.child = null))
            : ((o = i.sibling), (i.sibling = null)),
          ss(t, !1, o, i, r);
        break;
      case "backwards":
        for (i = null, o = t.child, t.child = null; o !== null; ) {
          if (((e = o.alternate), e !== null && Jo(e) === null)) {
            t.child = o;
            break;
          }
          (e = o.sibling), (o.sibling = i), (i = o), (o = e);
        }
        ss(t, !0, i, null, r);
        break;
      case "together":
        ss(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function Eo(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function mt(e, t, i) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (qt |= t.lanes),
    !(i & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(x(153));
  if (t.child !== null) {
    for (
      e = t.child, i = Pt(e, e.pendingProps), t.child = i, i.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (i = i.sibling = Pt(e, e.pendingProps)), (i.return = t);
    i.sibling = null;
  }
  return t.child;
}
function rg(e, t, i) {
  switch (t.tag) {
    case 3:
      Jm(t), Ni();
      break;
    case 5:
      Sm(t);
      break;
    case 1:
      we(t.type) && $o(t);
      break;
    case 4:
      Yl(t, t.stateNode.containerInfo);
      break;
    case 10:
      var n = t.type._context,
        o = t.memoizedProps.value;
      V(Qo, n._currentValue), (n._currentValue = o);
      break;
    case 13:
      if (((n = t.memoizedState), n !== null))
        return n.dehydrated !== null
          ? (V(G, G.current & 1), (t.flags |= 128), null)
          : i & t.child.childLanes
          ? qm(e, t, i)
          : (V(G, G.current & 1),
            (e = mt(e, t, i)),
            e !== null ? e.sibling : null);
      V(G, G.current & 1);
      break;
    case 19:
      if (((n = (i & t.childLanes) !== 0), e.flags & 128)) {
        if (n) return Xm(e, t, i);
        t.flags |= 128;
      }
      if (
        ((o = t.memoizedState),
        o !== null &&
          ((o.rendering = null), (o.tail = null), (o.lastEffect = null)),
        V(G, G.current),
        n)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), Km(e, t, i);
  }
  return mt(e, t, i);
}
var ed, el, td, id;
ed = function (e, t) {
  for (var i = t.child; i !== null; ) {
    if (i.tag === 5 || i.tag === 6) e.appendChild(i.stateNode);
    else if (i.tag !== 4 && i.child !== null) {
      (i.child.return = i), (i = i.child);
      continue;
    }
    if (i === t) break;
    for (; i.sibling === null; ) {
      if (i.return === null || i.return === t) return;
      i = i.return;
    }
    (i.sibling.return = i.return), (i = i.sibling);
  }
};
el = function () {};
td = function (e, t, i, n) {
  var o = e.memoizedProps;
  if (o !== n) {
    (e = t.stateNode), Gt(Xe.current);
    var r = null;
    switch (i) {
      case "input":
        (o = xs(e, o)), (n = xs(e, n)), (r = []);
        break;
      case "select":
        (o = Q({}, o, { value: void 0 })),
          (n = Q({}, n, { value: void 0 })),
          (r = []);
        break;
      case "textarea":
        (o = js(e, o)), (n = js(e, n)), (r = []);
        break;
      default:
        typeof o.onClick != "function" &&
          typeof n.onClick == "function" &&
          (e.onclick = Uo);
    }
    Ns(i, n);
    var l;
    i = null;
    for (u in o)
      if (!n.hasOwnProperty(u) && o.hasOwnProperty(u) && o[u] != null)
        if (u === "style") {
          var a = o[u];
          for (l in a) a.hasOwnProperty(l) && (i || (i = {}), (i[l] = ""));
        } else
          u !== "dangerouslySetInnerHTML" &&
            u !== "children" &&
            u !== "suppressContentEditableWarning" &&
            u !== "suppressHydrationWarning" &&
            u !== "autoFocus" &&
            (gn.hasOwnProperty(u)
              ? r || (r = [])
              : (r = r || []).push(u, null));
    for (u in n) {
      var c = n[u];
      if (
        ((a = o != null ? o[u] : void 0),
        n.hasOwnProperty(u) && c !== a && (c != null || a != null))
      )
        if (u === "style")
          if (a) {
            for (l in a)
              !a.hasOwnProperty(l) ||
                (c && c.hasOwnProperty(l)) ||
                (i || (i = {}), (i[l] = ""));
            for (l in c)
              c.hasOwnProperty(l) &&
                a[l] !== c[l] &&
                (i || (i = {}), (i[l] = c[l]));
          } else i || (r || (r = []), r.push(u, i)), (i = c);
        else
          u === "dangerouslySetInnerHTML"
            ? ((c = c ? c.__html : void 0),
              (a = a ? a.__html : void 0),
              c != null && a !== c && (r = r || []).push(u, c))
            : u === "children"
            ? (typeof c != "string" && typeof c != "number") ||
              (r = r || []).push(u, "" + c)
            : u !== "suppressContentEditableWarning" &&
              u !== "suppressHydrationWarning" &&
              (gn.hasOwnProperty(u)
                ? (c != null && u === "onScroll" && U("scroll", e),
                  r || a === c || (r = []))
                : (r = r || []).push(u, c));
    }
    i && (r = r || []).push("style", i);
    var u = r;
    (t.updateQueue = u) && (t.flags |= 4);
  }
};
id = function (e, t, i, n) {
  i !== n && (t.flags |= 4);
};
function $i(e, t) {
  if (!$)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var i = null; t !== null; )
          t.alternate !== null && (i = t), (t = t.sibling);
        i === null ? (e.tail = null) : (i.sibling = null);
        break;
      case "collapsed":
        i = e.tail;
        for (var n = null; i !== null; )
          i.alternate !== null && (n = i), (i = i.sibling);
        n === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (n.sibling = null);
    }
}
function ae(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    i = 0,
    n = 0;
  if (t)
    for (var o = e.child; o !== null; )
      (i |= o.lanes | o.childLanes),
        (n |= o.subtreeFlags & 14680064),
        (n |= o.flags & 14680064),
        (o.return = e),
        (o = o.sibling);
  else
    for (o = e.child; o !== null; )
      (i |= o.lanes | o.childLanes),
        (n |= o.subtreeFlags),
        (n |= o.flags),
        (o.return = e),
        (o = o.sibling);
  return (e.subtreeFlags |= n), (e.childLanes = i), t;
}
function sg(e, t, i) {
  var n = t.pendingProps;
  switch ((Dl(t), t.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return ae(t), null;
    case 1:
      return we(t.type) && Wo(), ae(t), null;
    case 3:
      return (
        (n = t.stateNode),
        Ei(),
        W(ve),
        W(ue),
        Kl(),
        n.pendingContext &&
          ((n.context = n.pendingContext), (n.pendingContext = null)),
        (e === null || e.child === null) &&
          (ao(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), Ve !== null && (al(Ve), (Ve = null)))),
        el(e, t),
        ae(t),
        null
      );
    case 5:
      Ql(t);
      var o = Gt(Nn.current);
      if (((i = t.type), e !== null && t.stateNode != null))
        td(e, t, i, n, o),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!n) {
          if (t.stateNode === null) throw Error(x(166));
          return ae(t), null;
        }
        if (((e = Gt(Xe.current)), ao(t))) {
          (n = t.stateNode), (i = t.type);
          var r = t.memoizedProps;
          switch (((n[Je] = t), (n[jn] = r), (e = (t.mode & 1) !== 0), i)) {
            case "dialog":
              U("cancel", n), U("close", n);
              break;
            case "iframe":
            case "object":
            case "embed":
              U("load", n);
              break;
            case "video":
            case "audio":
              for (o = 0; o < Xi.length; o++) U(Xi[o], n);
              break;
            case "source":
              U("error", n);
              break;
            case "img":
            case "image":
            case "link":
              U("error", n), U("load", n);
              break;
            case "details":
              U("toggle", n);
              break;
            case "input":
              La(n, r), U("invalid", n);
              break;
            case "select":
              (n._wrapperState = { wasMultiple: !!r.multiple }),
                U("invalid", n);
              break;
            case "textarea":
              Ra(n, r), U("invalid", n);
          }
          Ns(i, r), (o = null);
          for (var l in r)
            if (r.hasOwnProperty(l)) {
              var a = r[l];
              l === "children"
                ? typeof a == "string"
                  ? n.textContent !== a &&
                    (r.suppressHydrationWarning !== !0 &&
                      lo(n.textContent, a, e),
                    (o = ["children", a]))
                  : typeof a == "number" &&
                    n.textContent !== "" + a &&
                    (r.suppressHydrationWarning !== !0 &&
                      lo(n.textContent, a, e),
                    (o = ["children", "" + a]))
                : gn.hasOwnProperty(l) &&
                  a != null &&
                  l === "onScroll" &&
                  U("scroll", n);
            }
          switch (i) {
            case "input":
              Xn(n), za(n, r, !0);
              break;
            case "textarea":
              Xn(n), Ma(n);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof r.onClick == "function" && (n.onclick = Uo);
          }
          (n = o), (t.updateQueue = n), n !== null && (t.flags |= 4);
        } else {
          (l = o.nodeType === 9 ? o : o.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = Eu(i)),
            e === "http://www.w3.org/1999/xhtml"
              ? i === "script"
                ? ((e = l.createElement("div")),
                  (e.innerHTML = "<script></script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof n.is == "string"
                ? (e = l.createElement(i, { is: n.is }))
                : ((e = l.createElement(i)),
                  i === "select" &&
                    ((l = e),
                    n.multiple
                      ? (l.multiple = !0)
                      : n.size && (l.size = n.size)))
              : (e = l.createElementNS(e, i)),
            (e[Je] = t),
            (e[jn] = n),
            ed(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((l = As(i, n)), i)) {
              case "dialog":
                U("cancel", e), U("close", e), (o = n);
                break;
              case "iframe":
              case "object":
              case "embed":
                U("load", e), (o = n);
                break;
              case "video":
              case "audio":
                for (o = 0; o < Xi.length; o++) U(Xi[o], e);
                o = n;
                break;
              case "source":
                U("error", e), (o = n);
                break;
              case "img":
              case "image":
              case "link":
                U("error", e), U("load", e), (o = n);
                break;
              case "details":
                U("toggle", e), (o = n);
                break;
              case "input":
                La(e, n), (o = xs(e, n)), U("invalid", e);
                break;
              case "option":
                o = n;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!n.multiple }),
                  (o = Q({}, n, { value: void 0 })),
                  U("invalid", e);
                break;
              case "textarea":
                Ra(e, n), (o = js(e, n)), U("invalid", e);
                break;
              default:
                o = n;
            }
            Ns(i, o), (a = o);
            for (r in a)
              if (a.hasOwnProperty(r)) {
                var c = a[r];
                r === "style"
                  ? Tu(e, c)
                  : r === "dangerouslySetInnerHTML"
                  ? ((c = c ? c.__html : void 0), c != null && Pu(e, c))
                  : r === "children"
                  ? typeof c == "string"
                    ? (i !== "textarea" || c !== "") && fn(e, c)
                    : typeof c == "number" && fn(e, "" + c)
                  : r !== "suppressContentEditableWarning" &&
                    r !== "suppressHydrationWarning" &&
                    r !== "autoFocus" &&
                    (gn.hasOwnProperty(r)
                      ? c != null && r === "onScroll" && U("scroll", e)
                      : c != null && jl(e, r, c, l));
              }
            switch (i) {
              case "input":
                Xn(e), za(e, n, !1);
                break;
              case "textarea":
                Xn(e), Ma(e);
                break;
              case "option":
                n.value != null && e.setAttribute("value", "" + Tt(n.value));
                break;
              case "select":
                (e.multiple = !!n.multiple),
                  (r = n.value),
                  r != null
                    ? yi(e, !!n.multiple, r, !1)
                    : n.defaultValue != null &&
                      yi(e, !!n.multiple, n.defaultValue, !0);
                break;
              default:
                typeof o.onClick == "function" && (e.onclick = Uo);
            }
            switch (i) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                n = !!n.autoFocus;
                break e;
              case "img":
                n = !0;
                break e;
              default:
                n = !1;
            }
          }
          n && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return ae(t), null;
    case 6:
      if (e && t.stateNode != null) id(e, t, e.memoizedProps, n);
      else {
        if (typeof n != "string" && t.stateNode === null) throw Error(x(166));
        if (((i = Gt(Nn.current)), Gt(Xe.current), ao(t))) {
          if (
            ((n = t.stateNode),
            (i = t.memoizedProps),
            (n[Je] = t),
            (r = n.nodeValue !== i) && ((e = Se), e !== null))
          )
            switch (e.tag) {
              case 3:
                lo(n.nodeValue, i, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  lo(n.nodeValue, i, (e.mode & 1) !== 0);
            }
          r && (t.flags |= 4);
        } else
          (n = (i.nodeType === 9 ? i : i.ownerDocument).createTextNode(n)),
            (n[Je] = t),
            (t.stateNode = n);
      }
      return ae(t), null;
    case 13:
      if (
        (W(G),
        (n = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if ($ && Ce !== null && t.mode & 1 && !(t.flags & 128))
          bm(), Ni(), (t.flags |= 98560), (r = !1);
        else if (((r = ao(t)), n !== null && n.dehydrated !== null)) {
          if (e === null) {
            if (!r) throw Error(x(318));
            if (
              ((r = t.memoizedState),
              (r = r !== null ? r.dehydrated : null),
              !r)
            )
              throw Error(x(317));
            r[Je] = t;
          } else
            Ni(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          ae(t), (r = !1);
        } else Ve !== null && (al(Ve), (Ve = null)), (r = !0);
        if (!r) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = i), t)
        : ((n = n !== null),
          n !== (e !== null && e.memoizedState !== null) &&
            n &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || G.current & 1 ? ee === 0 && (ee = 3) : la())),
          t.updateQueue !== null && (t.flags |= 4),
          ae(t),
          null);
    case 4:
      return (
        Ei(), el(e, t), e === null && kn(t.stateNode.containerInfo), ae(t), null
      );
    case 10:
      return Wl(t.type._context), ae(t), null;
    case 17:
      return we(t.type) && Wo(), ae(t), null;
    case 19:
      if ((W(G), (r = t.memoizedState), r === null)) return ae(t), null;
      if (((n = (t.flags & 128) !== 0), (l = r.rendering), l === null))
        if (n) $i(r, !1);
        else {
          if (ee !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((l = Jo(e)), l !== null)) {
                for (
                  t.flags |= 128,
                    $i(r, !1),
                    n = l.updateQueue,
                    n !== null && ((t.updateQueue = n), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    n = i,
                    i = t.child;
                  i !== null;

                )
                  (r = i),
                    (e = n),
                    (r.flags &= 14680066),
                    (l = r.alternate),
                    l === null
                      ? ((r.childLanes = 0),
                        (r.lanes = e),
                        (r.child = null),
                        (r.subtreeFlags = 0),
                        (r.memoizedProps = null),
                        (r.memoizedState = null),
                        (r.updateQueue = null),
                        (r.dependencies = null),
                        (r.stateNode = null))
                      : ((r.childLanes = l.childLanes),
                        (r.lanes = l.lanes),
                        (r.child = l.child),
                        (r.subtreeFlags = 0),
                        (r.deletions = null),
                        (r.memoizedProps = l.memoizedProps),
                        (r.memoizedState = l.memoizedState),
                        (r.updateQueue = l.updateQueue),
                        (r.type = l.type),
                        (e = l.dependencies),
                        (r.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (i = i.sibling);
                return V(G, (G.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          r.tail !== null &&
            J() > Ii &&
            ((t.flags |= 128), (n = !0), $i(r, !1), (t.lanes = 4194304));
        }
      else {
        if (!n)
          if (((e = Jo(l)), e !== null)) {
            if (
              ((t.flags |= 128),
              (n = !0),
              (i = e.updateQueue),
              i !== null && ((t.updateQueue = i), (t.flags |= 4)),
              $i(r, !0),
              r.tail === null && r.tailMode === "hidden" && !l.alternate && !$)
            )
              return ae(t), null;
          } else
            2 * J() - r.renderingStartTime > Ii &&
              i !== 1073741824 &&
              ((t.flags |= 128), (n = !0), $i(r, !1), (t.lanes = 4194304));
        r.isBackwards
          ? ((l.sibling = t.child), (t.child = l))
          : ((i = r.last),
            i !== null ? (i.sibling = l) : (t.child = l),
            (r.last = l));
      }
      return r.tail !== null
        ? ((t = r.tail),
          (r.rendering = t),
          (r.tail = t.sibling),
          (r.renderingStartTime = J()),
          (t.sibling = null),
          (i = G.current),
          V(G, n ? (i & 1) | 2 : i & 1),
          t)
        : (ae(t), null);
    case 22:
    case 23:
      return (
        sa(),
        (n = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== n && (t.flags |= 8192),
        n && t.mode & 1
          ? ke & 1073741824 && (ae(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : ae(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(x(156, t.tag));
}
function lg(e, t) {
  switch ((Dl(t), t.tag)) {
    case 1:
      return (
        we(t.type) && Wo(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        Ei(),
        W(ve),
        W(ue),
        Kl(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return Ql(t), null;
    case 13:
      if ((W(G), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
        if (t.alternate === null) throw Error(x(340));
        Ni();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return W(G), null;
    case 4:
      return Ei(), null;
    case 10:
      return Wl(t.type._context), null;
    case 22:
    case 23:
      return sa(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var mo = !1,
  ce = !1,
  ag = typeof WeakSet == "function" ? WeakSet : Set,
  A = null;
function gi(e, t) {
  var i = e.ref;
  if (i !== null)
    if (typeof i == "function")
      try {
        i(null);
      } catch (n) {
        K(e, t, n);
      }
    else i.current = null;
}
function tl(e, t, i) {
  try {
    i();
  } catch (n) {
    K(e, t, n);
  }
}
var jc = !1;
function cg(e, t) {
  if (((Bs = Do), (e = sm()), Bl(e))) {
    if ("selectionStart" in e)
      var i = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        i = ((i = e.ownerDocument) && i.defaultView) || window;
        var n = i.getSelection && i.getSelection();
        if (n && n.rangeCount !== 0) {
          i = n.anchorNode;
          var o = n.anchorOffset,
            r = n.focusNode;
          n = n.focusOffset;
          try {
            i.nodeType, r.nodeType;
          } catch {
            i = null;
            break e;
          }
          var l = 0,
            a = -1,
            c = -1,
            u = 0,
            f = 0,
            g = e,
            h = null;
          t: for (;;) {
            for (
              var b;
              g !== i || (o !== 0 && g.nodeType !== 3) || (a = l + o),
                g !== r || (n !== 0 && g.nodeType !== 3) || (c = l + n),
                g.nodeType === 3 && (l += g.nodeValue.length),
                (b = g.firstChild) !== null;

            )
              (h = g), (g = b);
            for (;;) {
              if (g === e) break t;
              if (
                (h === i && ++u === o && (a = l),
                h === r && ++f === n && (c = l),
                (b = g.nextSibling) !== null)
              )
                break;
              (g = h), (h = g.parentNode);
            }
            g = b;
          }
          i = a === -1 || c === -1 ? null : { start: a, end: c };
        } else i = null;
      }
    i = i || { start: 0, end: 0 };
  } else i = null;
  for (Fs = { focusedElem: e, selectionRange: i }, Do = !1, A = t; A !== null; )
    if (((t = A), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (A = e);
    else
      for (; A !== null; ) {
        t = A;
        try {
          var v = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (v !== null) {
                  var w = v.memoizedProps,
                    S = v.memoizedState,
                    d = t.stateNode,
                    m = d.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? w : Fe(t.type, w),
                      S
                    );
                  d.__reactInternalSnapshotBeforeUpdate = m;
                }
                break;
              case 3:
                var p = t.stateNode.containerInfo;
                p.nodeType === 1
                  ? (p.textContent = "")
                  : p.nodeType === 9 &&
                    p.documentElement &&
                    p.removeChild(p.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(x(163));
            }
        } catch (_) {
          K(t, t.return, _);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (A = e);
          break;
        }
        A = t.return;
      }
  return (v = jc), (jc = !1), v;
}
function an(e, t, i) {
  var n = t.updateQueue;
  if (((n = n !== null ? n.lastEffect : null), n !== null)) {
    var o = (n = n.next);
    do {
      if ((o.tag & e) === e) {
        var r = o.destroy;
        (o.destroy = void 0), r !== void 0 && tl(t, i, r);
      }
      o = o.next;
    } while (o !== n);
  }
}
function br(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var i = (t = t.next);
    do {
      if ((i.tag & e) === e) {
        var n = i.create;
        i.destroy = n();
      }
      i = i.next;
    } while (i !== t);
  }
}
function il(e) {
  var t = e.ref;
  if (t !== null) {
    var i = e.stateNode;
    switch (e.tag) {
      case 5:
        e = i;
        break;
      default:
        e = i;
    }
    typeof t == "function" ? t(e) : (t.current = e);
  }
}
function nd(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), nd(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[Je], delete t[jn], delete t[Hs], delete t[$h], delete t[Gh])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function od(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Sc(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || od(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function nl(e, t, i) {
  var n = e.tag;
  if (n === 5 || n === 6)
    (e = e.stateNode),
      t
        ? i.nodeType === 8
          ? i.parentNode.insertBefore(e, t)
          : i.insertBefore(e, t)
        : (i.nodeType === 8
            ? ((t = i.parentNode), t.insertBefore(e, i))
            : ((t = i), t.appendChild(e)),
          (i = i._reactRootContainer),
          i != null || t.onclick !== null || (t.onclick = Uo));
  else if (n !== 4 && ((e = e.child), e !== null))
    for (nl(e, t, i), e = e.sibling; e !== null; ) nl(e, t, i), (e = e.sibling);
}
function ol(e, t, i) {
  var n = e.tag;
  if (n === 5 || n === 6)
    (e = e.stateNode), t ? i.insertBefore(e, t) : i.appendChild(e);
  else if (n !== 4 && ((e = e.child), e !== null))
    for (ol(e, t, i), e = e.sibling; e !== null; ) ol(e, t, i), (e = e.sibling);
}
var oe = null,
  De = !1;
function pt(e, t, i) {
  for (i = i.child; i !== null; ) rd(e, t, i), (i = i.sibling);
}
function rd(e, t, i) {
  if (qe && typeof qe.onCommitFiberUnmount == "function")
    try {
      qe.onCommitFiberUnmount(mr, i);
    } catch {}
  switch (i.tag) {
    case 5:
      ce || gi(i, t);
    case 6:
      var n = oe,
        o = De;
      (oe = null),
        pt(e, t, i),
        (oe = n),
        (De = o),
        oe !== null &&
          (De
            ? ((e = oe),
              (i = i.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(i) : e.removeChild(i))
            : oe.removeChild(i.stateNode));
      break;
    case 18:
      oe !== null &&
        (De
          ? ((e = oe),
            (i = i.stateNode),
            e.nodeType === 8
              ? Xr(e.parentNode, i)
              : e.nodeType === 1 && Xr(e, i),
            vn(e))
          : Xr(oe, i.stateNode));
      break;
    case 4:
      (n = oe),
        (o = De),
        (oe = i.stateNode.containerInfo),
        (De = !0),
        pt(e, t, i),
        (oe = n),
        (De = o);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !ce &&
        ((n = i.updateQueue), n !== null && ((n = n.lastEffect), n !== null))
      ) {
        o = n = n.next;
        do {
          var r = o,
            l = r.destroy;
          (r = r.tag),
            l !== void 0 && (r & 2 || r & 4) && tl(i, t, l),
            (o = o.next);
        } while (o !== n);
      }
      pt(e, t, i);
      break;
    case 1:
      if (
        !ce &&
        (gi(i, t),
        (n = i.stateNode),
        typeof n.componentWillUnmount == "function")
      )
        try {
          (n.props = i.memoizedProps),
            (n.state = i.memoizedState),
            n.componentWillUnmount();
        } catch (a) {
          K(i, t, a);
        }
      pt(e, t, i);
      break;
    case 21:
      pt(e, t, i);
      break;
    case 22:
      i.mode & 1
        ? ((ce = (n = ce) || i.memoizedState !== null), pt(e, t, i), (ce = n))
        : pt(e, t, i);
      break;
    default:
      pt(e, t, i);
  }
}
function Nc(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var i = e.stateNode;
    i === null && (i = e.stateNode = new ag()),
      t.forEach(function (n) {
        var o = _g.bind(null, e, n);
        i.has(n) || (i.add(n), n.then(o, o));
      });
  }
}
function Be(e, t) {
  var i = t.deletions;
  if (i !== null)
    for (var n = 0; n < i.length; n++) {
      var o = i[n];
      try {
        var r = e,
          l = t,
          a = l;
        e: for (; a !== null; ) {
          switch (a.tag) {
            case 5:
              (oe = a.stateNode), (De = !1);
              break e;
            case 3:
              (oe = a.stateNode.containerInfo), (De = !0);
              break e;
            case 4:
              (oe = a.stateNode.containerInfo), (De = !0);
              break e;
          }
          a = a.return;
        }
        if (oe === null) throw Error(x(160));
        rd(r, l, o), (oe = null), (De = !1);
        var c = o.alternate;
        c !== null && (c.return = null), (o.return = null);
      } catch (u) {
        K(o, t, u);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) sd(t, e), (t = t.sibling);
}
function sd(e, t) {
  var i = e.alternate,
    n = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((Be(t, e), Qe(e), n & 4)) {
        try {
          an(3, e, e.return), br(3, e);
        } catch (w) {
          K(e, e.return, w);
        }
        try {
          an(5, e, e.return);
        } catch (w) {
          K(e, e.return, w);
        }
      }
      break;
    case 1:
      Be(t, e), Qe(e), n & 512 && i !== null && gi(i, i.return);
      break;
    case 5:
      if (
        (Be(t, e),
        Qe(e),
        n & 512 && i !== null && gi(i, i.return),
        e.flags & 32)
      ) {
        var o = e.stateNode;
        try {
          fn(o, "");
        } catch (w) {
          K(e, e.return, w);
        }
      }
      if (n & 4 && ((o = e.stateNode), o != null)) {
        var r = e.memoizedProps,
          l = i !== null ? i.memoizedProps : r,
          a = e.type,
          c = e.updateQueue;
        if (((e.updateQueue = null), c !== null))
          try {
            a === "input" && r.type === "radio" && r.name != null && Nu(o, r),
              As(a, l);
            var u = As(a, r);
            for (l = 0; l < c.length; l += 2) {
              var f = c[l],
                g = c[l + 1];
              f === "style"
                ? Tu(o, g)
                : f === "dangerouslySetInnerHTML"
                ? Pu(o, g)
                : f === "children"
                ? fn(o, g)
                : jl(o, f, g, u);
            }
            switch (a) {
              case "input":
                ks(o, r);
                break;
              case "textarea":
                Au(o, r);
                break;
              case "select":
                var h = o._wrapperState.wasMultiple;
                o._wrapperState.wasMultiple = !!r.multiple;
                var b = r.value;
                b != null
                  ? yi(o, !!r.multiple, b, !1)
                  : h !== !!r.multiple &&
                    (r.defaultValue != null
                      ? yi(o, !!r.multiple, r.defaultValue, !0)
                      : yi(o, !!r.multiple, r.multiple ? [] : "", !1));
            }
            o[jn] = r;
          } catch (w) {
            K(e, e.return, w);
          }
      }
      break;
    case 6:
      if ((Be(t, e), Qe(e), n & 4)) {
        if (e.stateNode === null) throw Error(x(162));
        (o = e.stateNode), (r = e.memoizedProps);
        try {
          o.nodeValue = r;
        } catch (w) {
          K(e, e.return, w);
        }
      }
      break;
    case 3:
      if (
        (Be(t, e), Qe(e), n & 4 && i !== null && i.memoizedState.isDehydrated)
      )
        try {
          vn(t.containerInfo);
        } catch (w) {
          K(e, e.return, w);
        }
      break;
    case 4:
      Be(t, e), Qe(e);
      break;
    case 13:
      Be(t, e),
        Qe(e),
        (o = e.child),
        o.flags & 8192 &&
          ((r = o.memoizedState !== null),
          (o.stateNode.isHidden = r),
          !r ||
            (o.alternate !== null && o.alternate.memoizedState !== null) ||
            (oa = J())),
        n & 4 && Nc(e);
      break;
    case 22:
      if (
        ((f = i !== null && i.memoizedState !== null),
        e.mode & 1 ? ((ce = (u = ce) || f), Be(t, e), (ce = u)) : Be(t, e),
        Qe(e),
        n & 8192)
      ) {
        if (
          ((u = e.memoizedState !== null),
          (e.stateNode.isHidden = u) && !f && e.mode & 1)
        )
          for (A = e, f = e.child; f !== null; ) {
            for (g = A = f; A !== null; ) {
              switch (((h = A), (b = h.child), h.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  an(4, h, h.return);
                  break;
                case 1:
                  gi(h, h.return);
                  var v = h.stateNode;
                  if (typeof v.componentWillUnmount == "function") {
                    (n = h), (i = h.return);
                    try {
                      (t = n),
                        (v.props = t.memoizedProps),
                        (v.state = t.memoizedState),
                        v.componentWillUnmount();
                    } catch (w) {
                      K(n, i, w);
                    }
                  }
                  break;
                case 5:
                  gi(h, h.return);
                  break;
                case 22:
                  if (h.memoizedState !== null) {
                    Ec(g);
                    continue;
                  }
              }
              b !== null ? ((b.return = h), (A = b)) : Ec(g);
            }
            f = f.sibling;
          }
        e: for (f = null, g = e; ; ) {
          if (g.tag === 5) {
            if (f === null) {
              f = g;
              try {
                (o = g.stateNode),
                  u
                    ? ((r = o.style),
                      typeof r.setProperty == "function"
                        ? r.setProperty("display", "none", "important")
                        : (r.display = "none"))
                    : ((a = g.stateNode),
                      (c = g.memoizedProps.style),
                      (l =
                        c != null && c.hasOwnProperty("display")
                          ? c.display
                          : null),
                      (a.style.display = Iu("display", l)));
              } catch (w) {
                K(e, e.return, w);
              }
            }
          } else if (g.tag === 6) {
            if (f === null)
              try {
                g.stateNode.nodeValue = u ? "" : g.memoizedProps;
              } catch (w) {
                K(e, e.return, w);
              }
          } else if (
            ((g.tag !== 22 && g.tag !== 23) ||
              g.memoizedState === null ||
              g === e) &&
            g.child !== null
          ) {
            (g.child.return = g), (g = g.child);
            continue;
          }
          if (g === e) break e;
          for (; g.sibling === null; ) {
            if (g.return === null || g.return === e) break e;
            f === g && (f = null), (g = g.return);
          }
          f === g && (f = null), (g.sibling.return = g.return), (g = g.sibling);
        }
      }
      break;
    case 19:
      Be(t, e), Qe(e), n & 4 && Nc(e);
      break;
    case 21:
      break;
    default:
      Be(t, e), Qe(e);
  }
}
function Qe(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var i = e.return; i !== null; ) {
          if (od(i)) {
            var n = i;
            break e;
          }
          i = i.return;
        }
        throw Error(x(160));
      }
      switch (n.tag) {
        case 5:
          var o = n.stateNode;
          n.flags & 32 && (fn(o, ""), (n.flags &= -33));
          var r = Sc(e);
          ol(e, r, o);
          break;
        case 3:
        case 4:
          var l = n.stateNode.containerInfo,
            a = Sc(e);
          nl(e, a, l);
          break;
        default:
          throw Error(x(161));
      }
    } catch (c) {
      K(e, e.return, c);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function ug(e, t, i) {
  (A = e), ld(e);
}
function ld(e, t, i) {
  for (var n = (e.mode & 1) !== 0; A !== null; ) {
    var o = A,
      r = o.child;
    if (o.tag === 22 && n) {
      var l = o.memoizedState !== null || mo;
      if (!l) {
        var a = o.alternate,
          c = (a !== null && a.memoizedState !== null) || ce;
        a = mo;
        var u = ce;
        if (((mo = l), (ce = c) && !u))
          for (A = o; A !== null; )
            (l = A),
              (c = l.child),
              l.tag === 22 && l.memoizedState !== null
                ? Pc(o)
                : c !== null
                ? ((c.return = l), (A = c))
                : Pc(o);
        for (; r !== null; ) (A = r), ld(r), (r = r.sibling);
        (A = o), (mo = a), (ce = u);
      }
      Ac(e);
    } else
      o.subtreeFlags & 8772 && r !== null ? ((r.return = o), (A = r)) : Ac(e);
  }
}
function Ac(e) {
  for (; A !== null; ) {
    var t = A;
    if (t.flags & 8772) {
      var i = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              ce || br(5, t);
              break;
            case 1:
              var n = t.stateNode;
              if (t.flags & 4 && !ce)
                if (i === null) n.componentDidMount();
                else {
                  var o =
                    t.elementType === t.type
                      ? i.memoizedProps
                      : Fe(t.type, i.memoizedProps);
                  n.componentDidUpdate(
                    o,
                    i.memoizedState,
                    n.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var r = t.updateQueue;
              r !== null && mc(t, r, n);
              break;
            case 3:
              var l = t.updateQueue;
              if (l !== null) {
                if (((i = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      i = t.child.stateNode;
                      break;
                    case 1:
                      i = t.child.stateNode;
                  }
                mc(t, l, i);
              }
              break;
            case 5:
              var a = t.stateNode;
              if (i === null && t.flags & 4) {
                i = a;
                var c = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    c.autoFocus && i.focus();
                    break;
                  case "img":
                    c.src && (i.src = c.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var u = t.alternate;
                if (u !== null) {
                  var f = u.memoizedState;
                  if (f !== null) {
                    var g = f.dehydrated;
                    g !== null && vn(g);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(x(163));
          }
        ce || (t.flags & 512 && il(t));
      } catch (h) {
        K(t, t.return, h);
      }
    }
    if (t === e) {
      A = null;
      break;
    }
    if (((i = t.sibling), i !== null)) {
      (i.return = t.return), (A = i);
      break;
    }
    A = t.return;
  }
}
function Ec(e) {
  for (; A !== null; ) {
    var t = A;
    if (t === e) {
      A = null;
      break;
    }
    var i = t.sibling;
    if (i !== null) {
      (i.return = t.return), (A = i);
      break;
    }
    A = t.return;
  }
}
function Pc(e) {
  for (; A !== null; ) {
    var t = A;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var i = t.return;
          try {
            br(4, t);
          } catch (c) {
            K(t, i, c);
          }
          break;
        case 1:
          var n = t.stateNode;
          if (typeof n.componentDidMount == "function") {
            var o = t.return;
            try {
              n.componentDidMount();
            } catch (c) {
              K(t, o, c);
            }
          }
          var r = t.return;
          try {
            il(t);
          } catch (c) {
            K(t, r, c);
          }
          break;
        case 5:
          var l = t.return;
          try {
            il(t);
          } catch (c) {
            K(t, l, c);
          }
      }
    } catch (c) {
      K(t, t.return, c);
    }
    if (t === e) {
      A = null;
      break;
    }
    var a = t.sibling;
    if (a !== null) {
      (a.return = t.return), (A = a);
      break;
    }
    A = t.return;
  }
}
var mg = Math.ceil,
  er = dt.ReactCurrentDispatcher,
  ia = dt.ReactCurrentOwner,
  Re = dt.ReactCurrentBatchConfig,
  F = 0,
  ne = null,
  q = null,
  re = 0,
  ke = 0,
  fi = Rt(0),
  ee = 0,
  In = null,
  qt = 0,
  vr = 0,
  na = 0,
  cn = null,
  _e = null,
  oa = 0,
  Ii = 1 / 0,
  it = null,
  tr = !1,
  rl = null,
  At = null,
  po = !1,
  vt = null,
  ir = 0,
  un = 0,
  sl = null,
  Po = -1,
  Io = 0;
function pe() {
  return F & 6 ? J() : Po !== -1 ? Po : (Po = J());
}
function Et(e) {
  return e.mode & 1
    ? F & 2 && re !== 0
      ? re & -re
      : Qh.transition !== null
      ? (Io === 0 && (Io = Wu()), Io)
      : ((e = D),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : Ju(e.type))),
        e)
    : 1;
}
function $e(e, t, i, n) {
  if (50 < un) throw ((un = 0), (sl = null), Error(x(185)));
  Hn(e, i, n),
    (!(F & 2) || e !== ne) &&
      (e === ne && (!(F & 2) && (vr |= i), ee === 4 && _t(e, re)),
      xe(e, n),
      i === 1 && F === 0 && !(t.mode & 1) && ((Ii = J() + 500), fr && Mt()));
}
function xe(e, t) {
  var i = e.callbackNode;
  Qp(e, t);
  var n = Fo(e, e === ne ? re : 0);
  if (n === 0)
    i !== null && Fa(i), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = n & -n), e.callbackPriority !== t)) {
    if ((i != null && Fa(i), t === 1))
      e.tag === 0 ? Yh(Ic.bind(null, e)) : fm(Ic.bind(null, e)),
        Uh(function () {
          !(F & 6) && Mt();
        }),
        (i = null);
    else {
      switch ($u(n)) {
        case 1:
          i = Pl;
          break;
        case 4:
          i = Hu;
          break;
        case 16:
          i = Bo;
          break;
        case 536870912:
          i = Uu;
          break;
        default:
          i = Bo;
      }
      i = gd(i, ad.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = i);
  }
}
function ad(e, t) {
  if (((Po = -1), (Io = 0), F & 6)) throw Error(x(327));
  var i = e.callbackNode;
  if (xi() && e.callbackNode !== i) return null;
  var n = Fo(e, e === ne ? re : 0);
  if (n === 0) return null;
  if (n & 30 || n & e.expiredLanes || t) t = nr(e, n);
  else {
    t = n;
    var o = F;
    F |= 2;
    var r = ud();
    (ne !== e || re !== t) && ((it = null), (Ii = J() + 500), Yt(e, t));
    do
      try {
        hg();
        break;
      } catch (a) {
        cd(e, a);
      }
    while (1);
    Ul(),
      (er.current = r),
      (F = o),
      q !== null ? (t = 0) : ((ne = null), (re = 0), (t = ee));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((o = Ls(e)), o !== 0 && ((n = o), (t = ll(e, o)))), t === 1)
    )
      throw ((i = In), Yt(e, 0), _t(e, n), xe(e, J()), i);
    if (t === 6) _t(e, n);
    else {
      if (
        ((o = e.current.alternate),
        !(n & 30) &&
          !dg(o) &&
          ((t = nr(e, n)),
          t === 2 && ((r = Ls(e)), r !== 0 && ((n = r), (t = ll(e, r)))),
          t === 1))
      )
        throw ((i = In), Yt(e, 0), _t(e, n), xe(e, J()), i);
      switch (((e.finishedWork = o), (e.finishedLanes = n), t)) {
        case 0:
        case 1:
          throw Error(x(345));
        case 2:
          Vt(e, _e, it);
          break;
        case 3:
          if (
            (_t(e, n), (n & 130023424) === n && ((t = oa + 500 - J()), 10 < t))
          ) {
            if (Fo(e, 0) !== 0) break;
            if (((o = e.suspendedLanes), (o & n) !== n)) {
              pe(), (e.pingedLanes |= e.suspendedLanes & o);
              break;
            }
            e.timeoutHandle = Vs(Vt.bind(null, e, _e, it), t);
            break;
          }
          Vt(e, _e, it);
          break;
        case 4:
          if ((_t(e, n), (n & 4194240) === n)) break;
          for (t = e.eventTimes, o = -1; 0 < n; ) {
            var l = 31 - We(n);
            (r = 1 << l), (l = t[l]), l > o && (o = l), (n &= ~r);
          }
          if (
            ((n = o),
            (n = J() - n),
            (n =
              (120 > n
                ? 120
                : 480 > n
                ? 480
                : 1080 > n
                ? 1080
                : 1920 > n
                ? 1920
                : 3e3 > n
                ? 3e3
                : 4320 > n
                ? 4320
                : 1960 * mg(n / 1960)) - n),
            10 < n)
          ) {
            e.timeoutHandle = Vs(Vt.bind(null, e, _e, it), n);
            break;
          }
          Vt(e, _e, it);
          break;
        case 5:
          Vt(e, _e, it);
          break;
        default:
          throw Error(x(329));
      }
    }
  }
  return xe(e, J()), e.callbackNode === i ? ad.bind(null, e) : null;
}
function ll(e, t) {
  var i = cn;
  return (
    e.current.memoizedState.isDehydrated && (Yt(e, t).flags |= 256),
    (e = nr(e, t)),
    e !== 2 && ((t = _e), (_e = i), t !== null && al(t)),
    e
  );
}
function al(e) {
  _e === null ? (_e = e) : _e.push.apply(_e, e);
}
function dg(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var i = t.updateQueue;
      if (i !== null && ((i = i.stores), i !== null))
        for (var n = 0; n < i.length; n++) {
          var o = i[n],
            r = o.getSnapshot;
          o = o.value;
          try {
            if (!Ge(r(), o)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((i = t.child), t.subtreeFlags & 16384 && i !== null))
      (i.return = t), (t = i);
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
  }
  return !0;
}
function _t(e, t) {
  for (
    t &= ~na,
      t &= ~vr,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var i = 31 - We(t),
      n = 1 << i;
    (e[i] = -1), (t &= ~n);
  }
}
function Ic(e) {
  if (F & 6) throw Error(x(327));
  xi();
  var t = Fo(e, 0);
  if (!(t & 1)) return xe(e, J()), null;
  var i = nr(e, t);
  if (e.tag !== 0 && i === 2) {
    var n = Ls(e);
    n !== 0 && ((t = n), (i = ll(e, n)));
  }
  if (i === 1) throw ((i = In), Yt(e, 0), _t(e, t), xe(e, J()), i);
  if (i === 6) throw Error(x(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    Vt(e, _e, it),
    xe(e, J()),
    null
  );
}
function ra(e, t) {
  var i = F;
  F |= 1;
  try {
    return e(t);
  } finally {
    (F = i), F === 0 && ((Ii = J() + 500), fr && Mt());
  }
}
function Xt(e) {
  vt !== null && vt.tag === 0 && !(F & 6) && xi();
  var t = F;
  F |= 1;
  var i = Re.transition,
    n = D;
  try {
    if (((Re.transition = null), (D = 1), e)) return e();
  } finally {
    (D = n), (Re.transition = i), (F = t), !(F & 6) && Mt();
  }
}
function sa() {
  (ke = fi.current), W(fi);
}
function Yt(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var i = e.timeoutHandle;
  if ((i !== -1 && ((e.timeoutHandle = -1), Hh(i)), q !== null))
    for (i = q.return; i !== null; ) {
      var n = i;
      switch ((Dl(n), n.tag)) {
        case 1:
          (n = n.type.childContextTypes), n != null && Wo();
          break;
        case 3:
          Ei(), W(ve), W(ue), Kl();
          break;
        case 5:
          Ql(n);
          break;
        case 4:
          Ei();
          break;
        case 13:
          W(G);
          break;
        case 19:
          W(G);
          break;
        case 10:
          Wl(n.type._context);
          break;
        case 22:
        case 23:
          sa();
      }
      i = i.return;
    }
  if (
    ((ne = e),
    (q = e = Pt(e.current, null)),
    (re = ke = t),
    (ee = 0),
    (In = null),
    (na = vr = qt = 0),
    (_e = cn = null),
    $t !== null)
  ) {
    for (t = 0; t < $t.length; t++)
      if (((i = $t[t]), (n = i.interleaved), n !== null)) {
        i.interleaved = null;
        var o = n.next,
          r = i.pending;
        if (r !== null) {
          var l = r.next;
          (r.next = o), (n.next = l);
        }
        i.pending = n;
      }
    $t = null;
  }
  return e;
}
function cd(e, t) {
  do {
    var i = q;
    try {
      if ((Ul(), (No.current = Xo), qo)) {
        for (var n = Y.memoizedState; n !== null; ) {
          var o = n.queue;
          o !== null && (o.pending = null), (n = n.next);
        }
        qo = !1;
      }
      if (
        ((Jt = 0),
        (ie = X = Y = null),
        (ln = !1),
        (An = 0),
        (ia.current = null),
        i === null || i.return === null)
      ) {
        (ee = 1), (In = t), (q = null);
        break;
      }
      e: {
        var r = e,
          l = i.return,
          a = i,
          c = t;
        if (
          ((t = re),
          (a.flags |= 32768),
          c !== null && typeof c == "object" && typeof c.then == "function")
        ) {
          var u = c,
            f = a,
            g = f.tag;
          if (!(f.mode & 1) && (g === 0 || g === 11 || g === 15)) {
            var h = f.alternate;
            h
              ? ((f.updateQueue = h.updateQueue),
                (f.memoizedState = h.memoizedState),
                (f.lanes = h.lanes))
              : ((f.updateQueue = null), (f.memoizedState = null));
          }
          var b = _c(l);
          if (b !== null) {
            (b.flags &= -257),
              bc(b, l, a, r, t),
              b.mode & 1 && yc(r, u, t),
              (t = b),
              (c = u);
            var v = t.updateQueue;
            if (v === null) {
              var w = new Set();
              w.add(c), (t.updateQueue = w);
            } else v.add(c);
            break e;
          } else {
            if (!(t & 1)) {
              yc(r, u, t), la();
              break e;
            }
            c = Error(x(426));
          }
        } else if ($ && a.mode & 1) {
          var S = _c(l);
          if (S !== null) {
            !(S.flags & 65536) && (S.flags |= 256),
              bc(S, l, a, r, t),
              Vl(Pi(c, a));
            break e;
          }
        }
        (r = c = Pi(c, a)),
          ee !== 4 && (ee = 2),
          cn === null ? (cn = [r]) : cn.push(r),
          (r = l);
        do {
          switch (r.tag) {
            case 3:
              (r.flags |= 65536), (t &= -t), (r.lanes |= t);
              var d = Gm(r, c, t);
              uc(r, d);
              break e;
            case 1:
              a = c;
              var m = r.type,
                p = r.stateNode;
              if (
                !(r.flags & 128) &&
                (typeof m.getDerivedStateFromError == "function" ||
                  (p !== null &&
                    typeof p.componentDidCatch == "function" &&
                    (At === null || !At.has(p))))
              ) {
                (r.flags |= 65536), (t &= -t), (r.lanes |= t);
                var _ = Ym(r, a, t);
                uc(r, _);
                break e;
              }
          }
          r = r.return;
        } while (r !== null);
      }
      dd(i);
    } catch (C) {
      (t = C), q === i && i !== null && (q = i = i.return);
      continue;
    }
    break;
  } while (1);
}
function ud() {
  var e = er.current;
  return (er.current = Xo), e === null ? Xo : e;
}
function la() {
  (ee === 0 || ee === 3 || ee === 2) && (ee = 4),
    ne === null || (!(qt & 268435455) && !(vr & 268435455)) || _t(ne, re);
}
function nr(e, t) {
  var i = F;
  F |= 2;
  var n = ud();
  (ne !== e || re !== t) && ((it = null), Yt(e, t));
  do
    try {
      pg();
      break;
    } catch (o) {
      cd(e, o);
    }
  while (1);
  if ((Ul(), (F = i), (er.current = n), q !== null)) throw Error(x(261));
  return (ne = null), (re = 0), ee;
}
function pg() {
  for (; q !== null; ) md(q);
}
function hg() {
  for (; q !== null && !Fp(); ) md(q);
}
function md(e) {
  var t = hd(e.alternate, e, ke);
  (e.memoizedProps = e.pendingProps),
    t === null ? dd(e) : (q = t),
    (ia.current = null);
}
function dd(e) {
  var t = e;
  do {
    var i = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((i = lg(i, t)), i !== null)) {
        (i.flags &= 32767), (q = i);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (ee = 6), (q = null);
        return;
      }
    } else if (((i = sg(i, t, ke)), i !== null)) {
      q = i;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      q = t;
      return;
    }
    q = t = e;
  } while (t !== null);
  ee === 0 && (ee = 5);
}
function Vt(e, t, i) {
  var n = D,
    o = Re.transition;
  try {
    (Re.transition = null), (D = 1), gg(e, t, i, n);
  } finally {
    (Re.transition = o), (D = n);
  }
  return null;
}
function gg(e, t, i, n) {
  do xi();
  while (vt !== null);
  if (F & 6) throw Error(x(327));
  i = e.finishedWork;
  var o = e.finishedLanes;
  if (i === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), i === e.current))
    throw Error(x(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var r = i.lanes | i.childLanes;
  if (
    (Kp(e, r),
    e === ne && ((q = ne = null), (re = 0)),
    (!(i.subtreeFlags & 2064) && !(i.flags & 2064)) ||
      po ||
      ((po = !0),
      gd(Bo, function () {
        return xi(), null;
      })),
    (r = (i.flags & 15990) !== 0),
    i.subtreeFlags & 15990 || r)
  ) {
    (r = Re.transition), (Re.transition = null);
    var l = D;
    D = 1;
    var a = F;
    (F |= 4),
      (ia.current = null),
      cg(e, i),
      sd(i, e),
      Rh(Fs),
      (Do = !!Bs),
      (Fs = Bs = null),
      (e.current = i),
      ug(i),
      Dp(),
      (F = a),
      (D = l),
      (Re.transition = r);
  } else e.current = i;
  if (
    (po && ((po = !1), (vt = e), (ir = o)),
    (r = e.pendingLanes),
    r === 0 && (At = null),
    Up(i.stateNode),
    xe(e, J()),
    t !== null)
  )
    for (n = e.onRecoverableError, i = 0; i < t.length; i++)
      (o = t[i]), n(o.value, { componentStack: o.stack, digest: o.digest });
  if (tr) throw ((tr = !1), (e = rl), (rl = null), e);
  return (
    ir & 1 && e.tag !== 0 && xi(),
    (r = e.pendingLanes),
    r & 1 ? (e === sl ? un++ : ((un = 0), (sl = e))) : (un = 0),
    Mt(),
    null
  );
}
function xi() {
  if (vt !== null) {
    var e = $u(ir),
      t = Re.transition,
      i = D;
    try {
      if (((Re.transition = null), (D = 16 > e ? 16 : e), vt === null))
        var n = !1;
      else {
        if (((e = vt), (vt = null), (ir = 0), F & 6)) throw Error(x(331));
        var o = F;
        for (F |= 4, A = e.current; A !== null; ) {
          var r = A,
            l = r.child;
          if (A.flags & 16) {
            var a = r.deletions;
            if (a !== null) {
              for (var c = 0; c < a.length; c++) {
                var u = a[c];
                for (A = u; A !== null; ) {
                  var f = A;
                  switch (f.tag) {
                    case 0:
                    case 11:
                    case 15:
                      an(8, f, r);
                  }
                  var g = f.child;
                  if (g !== null) (g.return = f), (A = g);
                  else
                    for (; A !== null; ) {
                      f = A;
                      var h = f.sibling,
                        b = f.return;
                      if ((nd(f), f === u)) {
                        A = null;
                        break;
                      }
                      if (h !== null) {
                        (h.return = b), (A = h);
                        break;
                      }
                      A = b;
                    }
                }
              }
              var v = r.alternate;
              if (v !== null) {
                var w = v.child;
                if (w !== null) {
                  v.child = null;
                  do {
                    var S = w.sibling;
                    (w.sibling = null), (w = S);
                  } while (w !== null);
                }
              }
              A = r;
            }
          }
          if (r.subtreeFlags & 2064 && l !== null) (l.return = r), (A = l);
          else
            e: for (; A !== null; ) {
              if (((r = A), r.flags & 2048))
                switch (r.tag) {
                  case 0:
                  case 11:
                  case 15:
                    an(9, r, r.return);
                }
              var d = r.sibling;
              if (d !== null) {
                (d.return = r.return), (A = d);
                break e;
              }
              A = r.return;
            }
        }
        var m = e.current;
        for (A = m; A !== null; ) {
          l = A;
          var p = l.child;
          if (l.subtreeFlags & 2064 && p !== null) (p.return = l), (A = p);
          else
            e: for (l = m; A !== null; ) {
              if (((a = A), a.flags & 2048))
                try {
                  switch (a.tag) {
                    case 0:
                    case 11:
                    case 15:
                      br(9, a);
                  }
                } catch (C) {
                  K(a, a.return, C);
                }
              if (a === l) {
                A = null;
                break e;
              }
              var _ = a.sibling;
              if (_ !== null) {
                (_.return = a.return), (A = _);
                break e;
              }
              A = a.return;
            }
        }
        if (
          ((F = o), Mt(), qe && typeof qe.onPostCommitFiberRoot == "function")
        )
          try {
            qe.onPostCommitFiberRoot(mr, e);
          } catch {}
        n = !0;
      }
      return n;
    } finally {
      (D = i), (Re.transition = t);
    }
  }
  return !1;
}
function Tc(e, t, i) {
  (t = Pi(i, t)),
    (t = Gm(e, t, 1)),
    (e = Nt(e, t, 1)),
    (t = pe()),
    e !== null && (Hn(e, 1, t), xe(e, t));
}
function K(e, t, i) {
  if (e.tag === 3) Tc(e, e, i);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        Tc(t, e, i);
        break;
      } else if (t.tag === 1) {
        var n = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof n.componentDidCatch == "function" &&
            (At === null || !At.has(n)))
        ) {
          (e = Pi(i, e)),
            (e = Ym(t, e, 1)),
            (t = Nt(t, e, 1)),
            (e = pe()),
            t !== null && (Hn(t, 1, e), xe(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function fg(e, t, i) {
  var n = e.pingCache;
  n !== null && n.delete(t),
    (t = pe()),
    (e.pingedLanes |= e.suspendedLanes & i),
    ne === e &&
      (re & i) === i &&
      (ee === 4 || (ee === 3 && (re & 130023424) === re && 500 > J() - oa)
        ? Yt(e, 0)
        : (na |= i)),
    xe(e, t);
}
function pd(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = io), (io <<= 1), !(io & 130023424) && (io = 4194304))
      : (t = 1));
  var i = pe();
  (e = ut(e, t)), e !== null && (Hn(e, t, i), xe(e, i));
}
function yg(e) {
  var t = e.memoizedState,
    i = 0;
  t !== null && (i = t.retryLane), pd(e, i);
}
function _g(e, t) {
  var i = 0;
  switch (e.tag) {
    case 13:
      var n = e.stateNode,
        o = e.memoizedState;
      o !== null && (i = o.retryLane);
      break;
    case 19:
      n = e.stateNode;
      break;
    default:
      throw Error(x(314));
  }
  n !== null && n.delete(t), pd(e, i);
}
var hd;
hd = function (e, t, i) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || ve.current) be = !0;
    else {
      if (!(e.lanes & i) && !(t.flags & 128)) return (be = !1), rg(e, t, i);
      be = !!(e.flags & 131072);
    }
  else (be = !1), $ && t.flags & 1048576 && ym(t, Yo, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var n = t.type;
      Eo(e, t), (e = t.pendingProps);
      var o = Si(t, ue.current);
      wi(t, i), (o = Jl(null, t, n, e, o, i));
      var r = ql();
      return (
        (t.flags |= 1),
        typeof o == "object" &&
        o !== null &&
        typeof o.render == "function" &&
        o.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            we(n) ? ((r = !0), $o(t)) : (r = !1),
            (t.memoizedState =
              o.state !== null && o.state !== void 0 ? o.state : null),
            Gl(t),
            (o.updater = yr),
            (t.stateNode = o),
            (o._reactInternals = t),
            Qs(t, n, e, i),
            (t = Js(null, t, n, !0, r, i)))
          : ((t.tag = 0), $ && r && Fl(t), de(null, t, o, i), (t = t.child)),
        t
      );
    case 16:
      n = t.elementType;
      e: {
        switch (
          (Eo(e, t),
          (e = t.pendingProps),
          (o = n._init),
          (n = o(n._payload)),
          (t.type = n),
          (o = t.tag = vg(n)),
          (e = Fe(n, e)),
          o)
        ) {
          case 0:
            t = Zs(null, t, n, e, i);
            break e;
          case 1:
            t = xc(null, t, n, e, i);
            break e;
          case 11:
            t = vc(null, t, n, e, i);
            break e;
          case 14:
            t = wc(null, t, n, Fe(n.type, e), i);
            break e;
        }
        throw Error(x(306, n, ""));
      }
      return t;
    case 0:
      return (
        (n = t.type),
        (o = t.pendingProps),
        (o = t.elementType === n ? o : Fe(n, o)),
        Zs(e, t, n, o, i)
      );
    case 1:
      return (
        (n = t.type),
        (o = t.pendingProps),
        (o = t.elementType === n ? o : Fe(n, o)),
        xc(e, t, n, o, i)
      );
    case 3:
      e: {
        if ((Jm(t), e === null)) throw Error(x(387));
        (n = t.pendingProps),
          (r = t.memoizedState),
          (o = r.element),
          wm(e, t),
          Zo(t, n, null, i);
        var l = t.memoizedState;
        if (((n = l.element), r.isDehydrated))
          if (
            ((r = {
              element: n,
              isDehydrated: !1,
              cache: l.cache,
              pendingSuspenseBoundaries: l.pendingSuspenseBoundaries,
              transitions: l.transitions,
            }),
            (t.updateQueue.baseState = r),
            (t.memoizedState = r),
            t.flags & 256)
          ) {
            (o = Pi(Error(x(423)), t)), (t = kc(e, t, n, i, o));
            break e;
          } else if (n !== o) {
            (o = Pi(Error(x(424)), t)), (t = kc(e, t, n, i, o));
            break e;
          } else
            for (
              Ce = St(t.stateNode.containerInfo.firstChild),
                Se = t,
                $ = !0,
                Ve = null,
                i = jm(t, null, n, i),
                t.child = i;
              i;

            )
              (i.flags = (i.flags & -3) | 4096), (i = i.sibling);
        else {
          if ((Ni(), n === o)) {
            t = mt(e, t, i);
            break e;
          }
          de(e, t, n, i);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        Sm(t),
        e === null && $s(t),
        (n = t.type),
        (o = t.pendingProps),
        (r = e !== null ? e.memoizedProps : null),
        (l = o.children),
        Ds(n, o) ? (l = null) : r !== null && Ds(n, r) && (t.flags |= 32),
        Zm(e, t),
        de(e, t, l, i),
        t.child
      );
    case 6:
      return e === null && $s(t), null;
    case 13:
      return qm(e, t, i);
    case 4:
      return (
        Yl(t, t.stateNode.containerInfo),
        (n = t.pendingProps),
        e === null ? (t.child = Ai(t, null, n, i)) : de(e, t, n, i),
        t.child
      );
    case 11:
      return (
        (n = t.type),
        (o = t.pendingProps),
        (o = t.elementType === n ? o : Fe(n, o)),
        vc(e, t, n, o, i)
      );
    case 7:
      return de(e, t, t.pendingProps, i), t.child;
    case 8:
      return de(e, t, t.pendingProps.children, i), t.child;
    case 12:
      return de(e, t, t.pendingProps.children, i), t.child;
    case 10:
      e: {
        if (
          ((n = t.type._context),
          (o = t.pendingProps),
          (r = t.memoizedProps),
          (l = o.value),
          V(Qo, n._currentValue),
          (n._currentValue = l),
          r !== null)
        )
          if (Ge(r.value, l)) {
            if (r.children === o.children && !ve.current) {
              t = mt(e, t, i);
              break e;
            }
          } else
            for (r = t.child, r !== null && (r.return = t); r !== null; ) {
              var a = r.dependencies;
              if (a !== null) {
                l = r.child;
                for (var c = a.firstContext; c !== null; ) {
                  if (c.context === n) {
                    if (r.tag === 1) {
                      (c = lt(-1, i & -i)), (c.tag = 2);
                      var u = r.updateQueue;
                      if (u !== null) {
                        u = u.shared;
                        var f = u.pending;
                        f === null
                          ? (c.next = c)
                          : ((c.next = f.next), (f.next = c)),
                          (u.pending = c);
                      }
                    }
                    (r.lanes |= i),
                      (c = r.alternate),
                      c !== null && (c.lanes |= i),
                      Gs(r.return, i, t),
                      (a.lanes |= i);
                    break;
                  }
                  c = c.next;
                }
              } else if (r.tag === 10) l = r.type === t.type ? null : r.child;
              else if (r.tag === 18) {
                if (((l = r.return), l === null)) throw Error(x(341));
                (l.lanes |= i),
                  (a = l.alternate),
                  a !== null && (a.lanes |= i),
                  Gs(l, i, t),
                  (l = r.sibling);
              } else l = r.child;
              if (l !== null) l.return = r;
              else
                for (l = r; l !== null; ) {
                  if (l === t) {
                    l = null;
                    break;
                  }
                  if (((r = l.sibling), r !== null)) {
                    (r.return = l.return), (l = r);
                    break;
                  }
                  l = l.return;
                }
              r = l;
            }
        de(e, t, o.children, i), (t = t.child);
      }
      return t;
    case 9:
      return (
        (o = t.type),
        (n = t.pendingProps.children),
        wi(t, i),
        (o = Me(o)),
        (n = n(o)),
        (t.flags |= 1),
        de(e, t, n, i),
        t.child
      );
    case 14:
      return (
        (n = t.type),
        (o = Fe(n, t.pendingProps)),
        (o = Fe(n.type, o)),
        wc(e, t, n, o, i)
      );
    case 15:
      return Qm(e, t, t.type, t.pendingProps, i);
    case 17:
      return (
        (n = t.type),
        (o = t.pendingProps),
        (o = t.elementType === n ? o : Fe(n, o)),
        Eo(e, t),
        (t.tag = 1),
        we(n) ? ((e = !0), $o(t)) : (e = !1),
        wi(t, i),
        km(t, n, o),
        Qs(t, n, o, i),
        Js(null, t, n, !0, e, i)
      );
    case 19:
      return Xm(e, t, i);
    case 22:
      return Km(e, t, i);
  }
  throw Error(x(156, t.tag));
};
function gd(e, t) {
  return Vu(e, t);
}
function bg(e, t, i, n) {
  (this.tag = e),
    (this.key = i),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = n),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function ze(e, t, i, n) {
  return new bg(e, t, i, n);
}
function aa(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function vg(e) {
  if (typeof e == "function") return aa(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === Nl)) return 11;
    if (e === Al) return 14;
  }
  return 2;
}
function Pt(e, t) {
  var i = e.alternate;
  return (
    i === null
      ? ((i = ze(e.tag, t, e.key, e.mode)),
        (i.elementType = e.elementType),
        (i.type = e.type),
        (i.stateNode = e.stateNode),
        (i.alternate = e),
        (e.alternate = i))
      : ((i.pendingProps = t),
        (i.type = e.type),
        (i.flags = 0),
        (i.subtreeFlags = 0),
        (i.deletions = null)),
    (i.flags = e.flags & 14680064),
    (i.childLanes = e.childLanes),
    (i.lanes = e.lanes),
    (i.child = e.child),
    (i.memoizedProps = e.memoizedProps),
    (i.memoizedState = e.memoizedState),
    (i.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (i.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (i.sibling = e.sibling),
    (i.index = e.index),
    (i.ref = e.ref),
    i
  );
}
function To(e, t, i, n, o, r) {
  var l = 2;
  if (((n = e), typeof e == "function")) aa(e) && (l = 1);
  else if (typeof e == "string") l = 5;
  else
    e: switch (e) {
      case si:
        return Qt(i.children, o, r, t);
      case Sl:
        (l = 8), (o |= 8);
        break;
      case _s:
        return (
          (e = ze(12, i, t, o | 2)), (e.elementType = _s), (e.lanes = r), e
        );
      case bs:
        return (e = ze(13, i, t, o)), (e.elementType = bs), (e.lanes = r), e;
      case vs:
        return (e = ze(19, i, t, o)), (e.elementType = vs), (e.lanes = r), e;
      case Cu:
        return wr(i, o, r, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case xu:
              l = 10;
              break e;
            case ku:
              l = 9;
              break e;
            case Nl:
              l = 11;
              break e;
            case Al:
              l = 14;
              break e;
            case gt:
              (l = 16), (n = null);
              break e;
          }
        throw Error(x(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = ze(l, i, t, o)), (t.elementType = e), (t.type = n), (t.lanes = r), t
  );
}
function Qt(e, t, i, n) {
  return (e = ze(7, e, n, t)), (e.lanes = i), e;
}
function wr(e, t, i, n) {
  return (
    (e = ze(22, e, n, t)),
    (e.elementType = Cu),
    (e.lanes = i),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function ls(e, t, i) {
  return (e = ze(6, e, null, t)), (e.lanes = i), e;
}
function as(e, t, i) {
  return (
    (t = ze(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = i),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function wg(e, t, i, n, o) {
  (this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = Hr(0)),
    (this.expirationTimes = Hr(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = Hr(0)),
    (this.identifierPrefix = n),
    (this.onRecoverableError = o),
    (this.mutableSourceEagerHydrationData = null);
}
function ca(e, t, i, n, o, r, l, a, c) {
  return (
    (e = new wg(e, t, i, a, c)),
    t === 1 ? ((t = 1), r === !0 && (t |= 8)) : (t = 0),
    (r = ze(3, null, null, t)),
    (e.current = r),
    (r.stateNode = e),
    (r.memoizedState = {
      element: n,
      isDehydrated: i,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    Gl(r),
    e
  );
}
function xg(e, t, i) {
  var n = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: ri,
    key: n == null ? null : "" + n,
    children: e,
    containerInfo: t,
    implementation: i,
  };
}
function fd(e) {
  if (!e) return Lt;
  e = e._reactInternals;
  e: {
    if (ii(e) !== e || e.tag !== 1) throw Error(x(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (we(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(x(171));
  }
  if (e.tag === 1) {
    var i = e.type;
    if (we(i)) return gm(e, i, t);
  }
  return t;
}
function yd(e, t, i, n, o, r, l, a, c) {
  return (
    (e = ca(i, n, !0, e, o, r, l, a, c)),
    (e.context = fd(null)),
    (i = e.current),
    (n = pe()),
    (o = Et(i)),
    (r = lt(n, o)),
    (r.callback = t ?? null),
    Nt(i, r, o),
    (e.current.lanes = o),
    Hn(e, o, n),
    xe(e, n),
    e
  );
}
function xr(e, t, i, n) {
  var o = t.current,
    r = pe(),
    l = Et(o);
  return (
    (i = fd(i)),
    t.context === null ? (t.context = i) : (t.pendingContext = i),
    (t = lt(r, l)),
    (t.payload = { element: e }),
    (n = n === void 0 ? null : n),
    n !== null && (t.callback = n),
    (e = Nt(o, t, l)),
    e !== null && ($e(e, o, l, r), So(e, o, l)),
    l
  );
}
function or(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function Lc(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var i = e.retryLane;
    e.retryLane = i !== 0 && i < t ? i : t;
  }
}
function ua(e, t) {
  Lc(e, t), (e = e.alternate) && Lc(e, t);
}
function kg() {
  return null;
}
var _d =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function ma(e) {
  this._internalRoot = e;
}
kr.prototype.render = ma.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(x(409));
  xr(e, t, null, null);
};
kr.prototype.unmount = ma.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    Xt(function () {
      xr(null, e, null, null);
    }),
      (t[ct] = null);
  }
};
function kr(e) {
  this._internalRoot = e;
}
kr.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = Qu();
    e = { blockedOn: null, target: e, priority: t };
    for (var i = 0; i < yt.length && t !== 0 && t < yt[i].priority; i++);
    yt.splice(i, 0, e), i === 0 && Zu(e);
  }
};
function da(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function Cr(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function zc() {}
function Cg(e, t, i, n, o) {
  if (o) {
    if (typeof n == "function") {
      var r = n;
      n = function () {
        var u = or(l);
        r.call(u);
      };
    }
    var l = yd(t, n, e, 0, null, !1, !1, "", zc);
    return (
      (e._reactRootContainer = l),
      (e[ct] = l.current),
      kn(e.nodeType === 8 ? e.parentNode : e),
      Xt(),
      l
    );
  }
  for (; (o = e.lastChild); ) e.removeChild(o);
  if (typeof n == "function") {
    var a = n;
    n = function () {
      var u = or(c);
      a.call(u);
    };
  }
  var c = ca(e, 0, !1, null, null, !1, !1, "", zc);
  return (
    (e._reactRootContainer = c),
    (e[ct] = c.current),
    kn(e.nodeType === 8 ? e.parentNode : e),
    Xt(function () {
      xr(t, c, i, n);
    }),
    c
  );
}
function jr(e, t, i, n, o) {
  var r = i._reactRootContainer;
  if (r) {
    var l = r;
    if (typeof o == "function") {
      var a = o;
      o = function () {
        var c = or(l);
        a.call(c);
      };
    }
    xr(t, l, e, o);
  } else l = Cg(i, t, e, o, n);
  return or(l);
}
Gu = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var i = qi(t.pendingLanes);
        i !== 0 &&
          (Il(t, i | 1), xe(t, J()), !(F & 6) && ((Ii = J() + 500), Mt()));
      }
      break;
    case 13:
      Xt(function () {
        var n = ut(e, 1);
        if (n !== null) {
          var o = pe();
          $e(n, e, 1, o);
        }
      }),
        ua(e, 1);
  }
};
Tl = function (e) {
  if (e.tag === 13) {
    var t = ut(e, 134217728);
    if (t !== null) {
      var i = pe();
      $e(t, e, 134217728, i);
    }
    ua(e, 134217728);
  }
};
Yu = function (e) {
  if (e.tag === 13) {
    var t = Et(e),
      i = ut(e, t);
    if (i !== null) {
      var n = pe();
      $e(i, e, t, n);
    }
    ua(e, t);
  }
};
Qu = function () {
  return D;
};
Ku = function (e, t) {
  var i = D;
  try {
    return (D = e), t();
  } finally {
    D = i;
  }
};
Ps = function (e, t, i) {
  switch (t) {
    case "input":
      if ((ks(e, i), (t = i.name), i.type === "radio" && t != null)) {
        for (i = e; i.parentNode; ) i = i.parentNode;
        for (
          i = i.querySelectorAll(
            "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
          ),
            t = 0;
          t < i.length;
          t++
        ) {
          var n = i[t];
          if (n !== e && n.form === e.form) {
            var o = gr(n);
            if (!o) throw Error(x(90));
            Su(n), ks(n, o);
          }
        }
      }
      break;
    case "textarea":
      Au(e, i);
      break;
    case "select":
      (t = i.value), t != null && yi(e, !!i.multiple, t, !1);
  }
};
Ru = ra;
Mu = Xt;
var jg = { usingClientEntryPoint: !1, Events: [Wn, ui, gr, Lu, zu, ra] },
  Gi = {
    findFiberByHostInstance: Wt,
    bundleType: 0,
    version: "18.2.0",
    rendererPackageName: "react-dom",
  },
  Sg = {
    bundleType: Gi.bundleType,
    version: Gi.version,
    rendererPackageName: Gi.rendererPackageName,
    rendererConfig: Gi.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: dt.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = Fu(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: Gi.findFiberByHostInstance || kg,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.2.0-next-9e3b772b8-20220608",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var ho = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!ho.isDisabled && ho.supportsFiber)
    try {
      (mr = ho.inject(Sg)), (qe = ho);
    } catch {}
}
Ae.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = jg;
Ae.createPortal = function (e, t) {
  var i = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!da(t)) throw Error(x(200));
  return xg(e, t, null, i);
};
Ae.createRoot = function (e, t) {
  if (!da(e)) throw Error(x(299));
  var i = !1,
    n = "",
    o = _d;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (i = !0),
      t.identifierPrefix !== void 0 && (n = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (o = t.onRecoverableError)),
    (t = ca(e, 1, !1, null, null, i, !1, n, o)),
    (e[ct] = t.current),
    kn(e.nodeType === 8 ? e.parentNode : e),
    new ma(t)
  );
};
Ae.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(x(188))
      : ((e = Object.keys(e).join(",")), Error(x(268, e)));
  return (e = Fu(t)), (e = e === null ? null : e.stateNode), e;
};
Ae.flushSync = function (e) {
  return Xt(e);
};
Ae.hydrate = function (e, t, i) {
  if (!Cr(t)) throw Error(x(200));
  return jr(null, e, t, !0, i);
};
Ae.hydrateRoot = function (e, t, i) {
  if (!da(e)) throw Error(x(405));
  var n = (i != null && i.hydratedSources) || null,
    o = !1,
    r = "",
    l = _d;
  if (
    (i != null &&
      (i.unstable_strictMode === !0 && (o = !0),
      i.identifierPrefix !== void 0 && (r = i.identifierPrefix),
      i.onRecoverableError !== void 0 && (l = i.onRecoverableError)),
    (t = yd(t, null, e, 1, i ?? null, o, !1, r, l)),
    (e[ct] = t.current),
    kn(e),
    n)
  )
    for (e = 0; e < n.length; e++)
      (i = n[e]),
        (o = i._getVersion),
        (o = o(i._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [i, o])
          : t.mutableSourceEagerHydrationData.push(i, o);
  return new kr(t);
};
Ae.render = function (e, t, i) {
  if (!Cr(t)) throw Error(x(200));
  return jr(null, e, t, !1, i);
};
Ae.unmountComponentAtNode = function (e) {
  if (!Cr(e)) throw Error(x(40));
  return e._reactRootContainer
    ? (Xt(function () {
        jr(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[ct] = null);
        });
      }),
      !0)
    : !1;
};
Ae.unstable_batchedUpdates = ra;
Ae.unstable_renderSubtreeIntoContainer = function (e, t, i, n) {
  if (!Cr(i)) throw Error(x(200));
  if (e == null || e._reactInternals === void 0) throw Error(x(38));
  return jr(e, t, i, !1, n);
};
Ae.version = "18.2.0-next-9e3b772b8-20220608";
function bd() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(bd);
    } catch (e) {
      console.error(e);
    }
}
bd(), (yu.exports = Ae);
var vd = yu.exports,
  Rc = vd;
(fs.createRoot = Rc.createRoot), (fs.hydrateRoot = Rc.hydrateRoot);
function y({ elementData: e, series: t, from: i }) {
  const n = P.useContext(wd),
    [o, r] = P.useState(!1),
    l = P.useContext(Oi);
  let a = l ? "#1e293b" : "white";
  e && e.category === "alkaline earth metal" && (a = "#f7941d"),
    e && e.category === "alkali metal" && (a = "#ed1c24"),
    e && e.category === "transition metal" && (a = "#f0ce02"),
    e && e.category === "post-transition metal" && (a = "#39b54a"),
    e && e.category === "polyatomic nonmetal" && (a = "#ea2d59"),
    e && e.category === "noble gas" && (a = "#8b58ad"),
    e && e.category === "diatomic nonmetal" && (a = "#6566ae"),
    e && e.category === "metalloid" && (a = "#25aae1"),
    e &&
      e.category === "unknown, probably post-transition metal" &&
      (a = "#f542da"),
    e && e.category === "unknown, probably transition metal" && (a = "#2685c1"),
    e && e.category === "unknown, probably metalloid" && (a = "#ffd4f7"),
    e && e.category === "unknown, predicted to be noble gas" && (a = "#d5a6bd"),
    e && e.category === "lanthanide" && (a = "#a7d48c"),
    e && e.category === "actinide" && (a = "#cdcc64"),
    i && t === "Lanthanides" && (a = "#a7d48c"),
    i && t === "Actinides" && (a = "#cdcc64");
  const c = { backgroundColor: a },
    u = { backgroundColor: "#504A4B" };
  let f = l ? "border-white" : "border-black";
  return s.jsxs("div", {
    onClick: () => (e ? n(e) : console.log("no modal will be shown")),
    onMouseEnter: () => r(!0),
    onMouseLeave: () => r(!1),
    className: e
      ? ` bg-${a}-900 cursor-pointer hover:bg-gray-100 m-0 rounded-2xl cat font-outline-2 font-extrabold`
      : "",
    style: o && e ? u : c,
    children: [
      i &&
        s.jsxs("div", {
          className: `cat ${f} py-6 m-0 rounded-2xl border-black`,
          children: [
            s.jsxs("h1", {
              className: "font-black text-white font-outline-2",
              children: [i, " "],
            }),
            s.jsx("p", {
              className:
                "text-xs tracking-tighter text-white font-outline-2 font-extrabold",
              children: t,
            }),
          ],
        }),
      e &&
        s.jsxs("div", {
          className: `cat  ${f} py-4 m-0 rounded-2xl font-outline-2 font-extrabold`,
          children: [
            s.jsx("p", {
              className: "text-xs text-white font-extrabold",
              children: e.number,
            }),
            s.jsxs("h1", {
              className: "font-black text-white",
              children: [e.symbol, " "],
            }),
            s.jsx("p", {
              className: "text-xs tracking-tighter text-white font-extrabold",
              children: e.name,
            }),
          ],
        }),
    ],
  });
}
function Ng({ data: e }) {
  return s.jsx("div", {
    className: "",
    children: s.jsxs("div", {
      className: "flex",
      children: [
        s.jsxs("div", {
          className: "md:w-1/2 w-full md:grid md:grid-cols-9",
          children: [
            s.jsx(y, { elementData: e[0] }),
            s.jsx("div", { className: "", children: "  " }),
            s.jsx("div", { className: "", children: " " }),
            s.jsx("div", { className: "", children: " " }),
            s.jsx("div", { className: "", children: " " }),
            s.jsx("div", { className: "", children: "  " }),
            s.jsx("div", { className: "", children: "  " }),
            s.jsx("div", { className: "", children: " " }),
            s.jsx("div", { className: "", children: "  " }),
          ],
        }),
        s.jsxs("div", {
          className: "md:w-1/2 w-full md:grid md:grid-cols-9",
          children: [
            s.jsx("div", { className: "", children: "  " }),
            s.jsx("div", { className: "", children: "  " }),
            s.jsx("div", { className: "", children: "  " }),
            s.jsx("div", { className: "", children: " " }),
            s.jsx("div", { className: "", children: "  " }),
            s.jsx("div", { className: "", children: "  " }),
            s.jsx("div", { className: "", children: " " }),
            s.jsx("div", { className: "", children: "  " }),
            s.jsx(y, { elementData: e[1] }),
          ],
        }),
      ],
    }),
  });
}
function Ag({ data: e }) {
  return s.jsx("div", {
    className: "",
    children: s.jsxs("div", {
      className: "flex",
      children: [
        s.jsxs("div", {
          className: "md:w-1/2 w-full md:grid md:grid-cols-9",
          children: [
            s.jsx(y, { elementData: e[2] }),
            s.jsx(y, { elementData: e[3] }),
            s.jsx("div", { className: "", children: " " }),
            s.jsx("div", { className: "", children: " " }),
            s.jsx("div", { className: "", children: " " }),
            s.jsx("div", { className: "", children: "  " }),
            s.jsx("div", { className: "", children: "  " }),
            s.jsx("div", { className: "", children: " " }),
            s.jsx("div", { className: "", children: "  " }),
          ],
        }),
        s.jsxs("div", {
          className: "md:w-1/2 w-full md:grid md:grid-cols-9",
          children: [
            s.jsx("div", { className: "", children: "  " }),
            s.jsx("div", { className: "", children: "  " }),
            s.jsx("div", { className: "", children: "  " }),
            s.jsx(y, { elementData: e[4] }),
            s.jsx(y, { elementData: e[5] }),
            s.jsx(y, { elementData: e[6] }),
            s.jsx(y, { elementData: e[7] }),
            s.jsx(y, { elementData: e[8] }),
            s.jsx(y, { elementData: e[9] }),
          ],
        }),
      ],
    }),
  });
}
const Eg = [
    {
      name: "Hydrogen",
      appearance: "colorless gas",
      atomic_mass: 1.008,
      boil: 20.271,
      category: "diatomic nonmetal",
      density: 0.08988,
      discovered_by: "Henry Cavendish",
      melt: 13.99,
      molar_heat: 28.836,
      named_by: "Antoine Lavoisier",
      number: 1,
      period: 1,
      group: 1,
      phase: "Gas",
      source: "https://pubchem.ncbi.nlm.nih.gov/compound/Hydrogen",
      bohr_model_image:
        "https://storage.googleapis.com/search-ar-edu/periodic-table/element_001_hydrogen/element_001_hydrogen_srp_th.png",
      bohr_model_3d:
        "https://storage.googleapis.com/search-ar-edu/periodic-table/element_001_hydrogen/element_001_hydrogen.glb",
      spectral_img: "https://en.wikipedia.org/wiki/File:Hydrogen_Spectra.jpg",
      summary:
        "Hydrogen is a chemical element with chemical symbol H and atomic number 1. With an atomic weight of 1.00794 u, hydrogen is the lightest element on the periodic table. Its monatomic form (H) is the most abundant chemical substance in the Universe, constituting roughly 75% of all baryonic mass.",
      symbol: "H",
      xpos: 1,
      ypos: 1,
      wxpos: 1,
      wypos: 1,
      shells: [1],
      electron_configuration: "1s1",
      electron_configuration_semantic: "1s1",
      electron_affinity: 72.769,
      electronegativity_pauling: 2.2,
      ionization_energies: [1312],
      cpk_hex: "ffffff",
      image: {
        title:
          "Vial of glowing ultrapure hydrogen, H2. Original size in cm: 1 x 5",
        url: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Hydrogenglow.jpg",
        attribution:
          "User:Jurii, CC BY 3.0 <https://creativecommons.org/licenses/by/3.0>, via Wikimedia Commons, source: https://images-of-elements.com/hydrogen.php",
      },
      block: "s",
    },
    {
      name: "Helium",
      appearance:
        "colorless gas, exhibiting a red-orange glow when placed in a high-voltage electric field",
      atomic_mass: 4.0026022,
      boil: 4.222,
      category: "noble gas",
      density: 0.1786,
      discovered_by: "Pierre Janssen",
      melt: 0.95,
      molar_heat: null,
      named_by: null,
      number: 2,
      period: 1,
      group: 18,
      phase: "Gas",
      source:
        "https://www.blm.gov/programs/energy-and-minerals/helium/about-helium",
      bohr_model_image:
        "https://storage.googleapis.com/search-ar-edu/periodic-table/element_002_helium/element_002_helium_srp_th.png",
      bohr_model_3d:
        "https://storage.googleapis.com/search-ar-edu/periodic-table/element_002_helium/element_002_helium.glb",
      spectral_img: "https://en.wikipedia.org/wiki/File:Helium_spectrum.jpg",
      summary:
        "Helium is a chemical element with symbol He and atomic number 2. It is a colorless, odorless, tasteless, non-toxic, inert, monatomic gas that heads the noble gas group in the periodic table. Its boiling and melting points are the lowest among all the elements.",
      symbol: "He",
      xpos: 18,
      ypos: 1,
      wxpos: 32,
      wypos: 1,
      shells: [2],
      electron_configuration: "1s2",
      electron_configuration_semantic: "1s2",
      electron_affinity: -48,
      electronegativity_pauling: null,
      ionization_energies: [2372.3, 5250.5],
      cpk_hex: "d9ffff",
      image: {
        title: "Vial of glowing ultrapure helium. Original size in cm: 1 x 5",
        url: "https://upload.wikimedia.org/wikipedia/commons/0/00/Helium-glow.jpg",
        attribution:
          "Jurii, CC BY 3.0 <https://creativecommons.org/licenses/by/3.0>, via Wikimedia Commons, source: https://images-of-elements.com/helium.php",
      },
      block: "s",
    },
    {
      name: "Lithium",
      appearance: "silvery-white",
      atomic_mass: 6.94,
      boil: 1603,
      category: "alkali metal",
      density: 0.534,
      discovered_by: "Johan August Arfwedson",
      melt: 453.65,
      molar_heat: 24.86,
      named_by: null,
      number: 3,
      period: 2,
      group: 1,
      phase: "Solid",
      source: "https://pubchem.ncbi.nlm.nih.gov/compound/3028194",
      bohr_model_image:
        "https://storage.googleapis.com/search-ar-edu/periodic-table/element_003_lithium/element_003_lithium_srp_th.png",
      bohr_model_3d:
        "https://storage.googleapis.com/search-ar-edu/periodic-table/element_003_lithium/element_003_lithium.glb",
      spectral_img: null,
      summary:
        'Lithium (from Greek:λίθος lithos, "stone") is a chemical element with the symbol Li and atomic number 3. It is a soft, silver-white metal belonging to the alkali metal group of chemical elements. Under standard conditions it is the lightest metal and the least dense solid element.',
      symbol: "Li",
      xpos: 1,
      ypos: 2,
      wxpos: 1,
      wypos: 2,
      shells: [2, 1],
      electron_configuration: "1s2 2s1",
      electron_configuration_semantic: "[He] 2s1",
      electron_affinity: 59.6326,
      electronegativity_pauling: 0.98,
      ionization_energies: [520.2, 7298.1, 11815],
      cpk_hex: "cc80ff",
      image: {
        title:
          "0.5 Grams Lithium under Argon. Original size of the largest piece in cm: 0.3 x 4",
        url: "https://upload.wikimedia.org/wikipedia/commons/e/e2/0.5_grams_lithium_under_argon.jpg",
        attribution:
          "Hi-Res Images ofChemical Elements, CC BY 3.0 <https://creativecommons.org/licenses/by/3.0>, via Wikimedia Commons, source: https://images-of-elements.com/lithium.php",
      },
      block: "s",
    },
    {
      name: "Beryllium",
      appearance: "white-gray metallic",
      atomic_mass: 9.01218315,
      boil: 2742,
      category: "alkaline earth metal",
      density: 1.85,
      discovered_by: "Louis Nicolas Vauquelin",
      melt: 1560,
      molar_heat: 16.443,
      named_by: null,
      number: 4,
      period: 2,
      group: 2,
      phase: "Solid",
      source: "https://pubchem.ncbi.nlm.nih.gov/compound/5460467",
      bohr_model_image:
        "https://storage.googleapis.com/search-ar-edu/periodic-table/element_004_beryllium/element_004_beryllium_srp_th.png",
      bohr_model_3d:
        "https://storage.googleapis.com/search-ar-edu/periodic-table/element_004_beryllium/element_004_beryllium.glb",
      spectral_img: null,
      summary:
        "Beryllium is a chemical element with symbol Be and atomic number 4. It is created through stellar nucleosynthesis and is a relatively rare element in the universe. It is a divalent element which occurs naturally only in combination with other elements in minerals.",
      symbol: "Be",
      xpos: 2,
      ypos: 2,
      wxpos: 2,
      wypos: 2,
      shells: [2, 2],
      electron_configuration: "1s2 2s2",
      electron_configuration_semantic: "[He] 2s2",
      electron_affinity: -48,
      electronegativity_pauling: 1.57,
      ionization_energies: [899.5, 1757.1, 14848.7, 21006.6],
      cpk_hex: "c2ff00",
      image: {
        title: "Pure Beryllium bead, 2.5 grams. Original size in cm: 1 x 1.5",
        url: "https://upload.wikimedia.org/wikipedia/commons/e/e2/Beryllium_%28Be%29.jpg",
        attribution:
          "Hi-Res Images ofChemical Elements, CC BY 3.0 <https://creativecommons.org/licenses/by/3.0>, via Wikimedia Commons, source: https://images-of-elements.com/beryllium.php",
      },
      block: "s",
    },
    {
      name: "Boron",
      appearance: "black-brown",
      atomic_mass: 10.81,
      boil: 4200,
      category: "metalloid",
      density: 2.08,
      discovered_by: "Joseph Louis Gay-Lussac",
      melt: 2349,
      molar_heat: 11.087,
      named_by: null,
      number: 5,
      period: 2,
      group: 13,
      phase: "Solid",
      source: "https://pubchem.ncbi.nlm.nih.gov/compound/5462311",
      bohr_model_image:
        "https://storage.googleapis.com/search-ar-edu/periodic-table/element_005_boron/element_005_boron_srp_th.png",
      bohr_model_3d:
        "https://storage.googleapis.com/search-ar-edu/periodic-table/element_005_boron/element_005_boron.glb",
      spectral_img: null,
      summary:
        "Boron is a metalloid chemical element with symbol B and atomic number 5. Produced entirely by cosmic ray spallation and supernovae and not by stellar nucleosynthesis, it is a low-abundance element in both the Solar system and the Earth's crust. Boron is concentrated on Earth by the water-solubility of its more common naturally occurring compounds, the borate minerals.",
      symbol: "B",
      xpos: 13,
      ypos: 2,
      wxpos: 27,
      wypos: 2,
      shells: [2, 3],
      electron_configuration: "1s2 2s2 2p1",
      electron_configuration_semantic: "[He] 2s2 2p1",
      electron_affinity: 26.989,
      electronegativity_pauling: 2.04,
      ionization_energies: [800.6, 2427.1, 3659.7, 25025.8, 32826.7],
      cpk_hex: "ffb5b5",
      image: {
        title:
          "Pure Crystalline Boron, front and back side. Original size in cm: 2 x 3",
        url: "https://upload.wikimedia.org/wikipedia/commons/a/a2/Boron.jpg",
        attribution:
          "Jurii, CC BY 3.0 <https://creativecommons.org/licenses/by/3.0>, via Wikimedia Commons, source: https://images-of-elements.com/boron.php",
      },
      block: "p",
    },
    {
      name: "Carbon",
      appearance: null,
      atomic_mass: 12.011,
      boil: null,
      category: "polyatomic nonmetal",
      density: 1.821,
      discovered_by: "Ancient Egypt",
      melt: null,
      molar_heat: 8.517,
      named_by: null,
      number: 6,
      period: 2,
      group: 14,
      phase: "Solid",
      source: "https://pubchem.ncbi.nlm.nih.gov/element/Carbon",
      bohr_model_image:
        "https://storage.googleapis.com/search-ar-edu/periodic-table/element_006_carbon/element_006_carbon_srp_th.png",
      bohr_model_3d:
        "https://storage.googleapis.com/search-ar-edu/periodic-table/element_006_carbon/element_006_carbon.glb",
      spectral_img: "https://en.wikipedia.org/wiki/File:Carbon_Spectra.jpg",
      summary:
        'Carbon (from Latin:carbo "coal") is a chemical element with symbol C and atomic number 6. On the periodic table, it is the first (row 2) of six elements in column (group) 14, which have in common the composition of their outer electron shell. It is nonmetallic and tetravalent—making four electrons available to form covalent chemical bonds.',
      symbol: "C",
      xpos: 14,
      ypos: 2,
      wxpos: 28,
      wypos: 2,
      shells: [2, 4],
      electron_configuration: "1s2 2s2 2p2",
      electron_configuration_semantic: "[He] 2s2 2p2",
      electron_affinity: 121.7763,
      electronegativity_pauling: 2.55,
      ionization_energies: [1086.5, 2352.6, 4620.5, 6222.7, 37831, 47277],
      cpk_hex: "909090",
      image: {
        title: "Element 6 - Carbon",
        url: "https://upload.wikimedia.org/wikipedia/commons/6/68/Pure_Carbon.png",
        attribution:
          "Texas Lane, CC BY-SA 4.0 <https://creativecommons.org/licenses/by-sa/4.0>, via Wikimedia Commons",
      },
      block: "p",
    },
    {
      name: "Nitrogen",
      appearance: "colorless gas, liquid or solid",
      atomic_mass: 14.007,
      boil: 77.355,
      category: "polyatomic nonmetal",
      density: 1.251,
      discovered_by: "Daniel Rutherford",
      melt: 63.15,
      molar_heat: null,
      named_by: "Jean-Antoine Chaptal",
      number: 7,
      period: 2,
      group: 15,
      phase: "Gas",
      source: "https://pubchem.ncbi.nlm.nih.gov/compound/947",
      bohr_model_image:
        "https://storage.googleapis.com/search-ar-edu/periodic-table/element_007_nitrogen/element_007_nitrogen_srp_th.png",
      bohr_model_3d:
        "https://storage.googleapis.com/search-ar-edu/periodic-table/element_007_nitrogen/element_007_nitrogen.glb",
      spectral_img: "https://en.wikipedia.org/wiki/File:Nitrogen_Spectra.jpg",
      summary:
        "Nitrogen is a chemical element with symbol N and atomic number 7. It is the lightest pnictogen and at room temperature, it is a transparent, odorless diatomic gas. Nitrogen is a common element in the universe, estimated at about seventh in total abundance in the Milky Way and the Solar System.",
      symbol: "N",
      xpos: 15,
      ypos: 2,
      wxpos: 29,
      wypos: 2,
      shells: [2, 5],
      electron_configuration: "1s2 2s2 2p3",
      electron_configuration_semantic: "[He] 2s2 2p3",
      electron_affinity: -6.8,
      electronegativity_pauling: 3.04,
      ionization_energies: [1402.3, 2856, 4578.1, 7475, 9444.9, 53266.6, 64360],
      cpk_hex: "3050f8",
      image: {
        title:
          "Vial of Glowing Ultrapure Nitrogen, N2. Original size in cm: 1 x 5",
        url: "https://upload.wikimedia.org/wikipedia/commons/2/2d/Nitrogen-glow.jpg",
        attribution:
          "Jurii, CC BY 3.0 <https://creativecommons.org/licenses/by/3.0>, via Wikimedia Commons, source: https://images-of-elements.com/nitrogen.php",
      },
      block: "p",
    },
    {
      name: "Oxygen",
      appearance: null,
      atomic_mass: 15.999,
      boil: 90.188,
      category: "polyatomic nonmetal",
      density: 1.429,
      discovered_by: "Carl Wilhelm Scheele",
      melt: 54.36,
      molar_heat: null,
      named_by: "Antoine Lavoisier",
      number: 8,
      period: 2,
      group: 16,
      phase: "Gas",
      source: "https://pubchem.ncbi.nlm.nih.gov/element/Oxygen",
      bohr_model_image:
        "https://storage.googleapis.com/search-ar-edu/periodic-table/element_008_oxygen/element_008_oxygen_srp_th.png",
      bohr_model_3d:
        "https://storage.googleapis.com/search-ar-edu/periodic-table/element_008_oxygen/element_008_oxygen.glb",
      spectral_img: "https://en.wikipedia.org/wiki/File:Oxygen_spectre.jpg",
      summary:
        "Oxygen is a chemical element with symbol O and atomic number 8. It is a member of the chalcogen group on the periodic table and is a highly reactive nonmetal and oxidizing agent that readily forms compounds (notably oxides) with most elements. By mass, oxygen is the third-most abundant element in the universe, after hydrogen and helium.",
      symbol: "O",
      xpos: 16,
      ypos: 2,
      wxpos: 30,
      wypos: 2,
      shells: [2, 6],
      electron_configuration: "1s2 2s2 2p4",
      electron_configuration_semantic: "[He] 2s2 2p4",
      electron_affinity: 140.976,
      electronegativity_pauling: 3.44,
      ionization_energies: [
        1313.9, 3388.3, 5300.5, 7469.2, 10989.5, 13326.5, 71330, 84078,
      ],
      cpk_hex: "ff0d0d",
      image: {
        title: "Liquid Oxygen in a Beaker",
        url: "https://upload.wikimedia.org/wikipedia/commons/a/a0/Liquid_oxygen_in_a_beaker_%28cropped_and_retouched%29.jpg",
        attribution:
          "Staff Sgt. Nika Glover, U.S. Air Force, Public domain, via Wikimedia Commons",
      },
      block: "p",
    },
    {
      name: "Fluorine",
      appearance: null,
      atomic_mass: 18.9984031636,
      boil: 85.03,
      category: "diatomic nonmetal",
      density: 1.696,
      discovered_by: "André-Marie Ampère",
      melt: 53.48,
      molar_heat: null,
      named_by: "Humphry Davy",
      number: 9,
      period: 2,
      group: 17,
      phase: "Gas",
      source: "https://pubchem.ncbi.nlm.nih.gov/element/Fluorine",
      bohr_model_image:
        "https://storage.googleapis.com/search-ar-edu/periodic-table/element_009_fluorine/element_009_fluorine_srp_th.png",
      bohr_model_3d:
        "https://storage.googleapis.com/search-ar-edu/periodic-table/element_009_fluorine/element_009_fluorine.glb",
      spectral_img: null,
      summary:
        "Fluorine is a chemical element with symbol F and atomic number 9. It is the lightest halogen and exists as a highly toxic pale yellow diatomic gas at standard conditions. As the most electronegative element, it is extremely reactive:almost all other elements, including some noble gases, form compounds with fluorine.",
      symbol: "F",
      xpos: 17,
      ypos: 2,
      wxpos: 31,
      wypos: 2,
      shells: [2, 7],
      electron_configuration: "1s2 2s2 2p5",
      electron_configuration_semantic: "[He] 2s2 2p5",
      electron_affinity: 328.1649,
      electronegativity_pauling: 3.98,
      ionization_energies: [
        1681, 3374.2, 6050.4, 8407.7, 11022.7, 15164.1, 17868, 92038.1,
        106434.3,
      ],
      cpk_hex: "90e050",
      image: {
        title: "Liquid Fluorine at -196°C",
        url: "https://upload.wikimedia.org/wikipedia/commons/2/2c/Fluoro_liquido_a_-196%C2%B0C_1.jpg",
        attribution:
          "Fulvio314, CC BY-SA 3.0 <https://creativecommons.org/licenses/by-sa/3.0>, via Wikimedia Commons",
      },
      block: "p",
    },
    {
      name: "Neon",
      appearance:
        "colorless gas exhibiting an orange-red glow when placed in a high voltage electric field",
      atomic_mass: 20.17976,
      boil: 27.104,
      category: "noble gas",
      density: 0.9002,
      discovered_by: "Morris Travers",
      melt: 24.56,
      molar_heat: null,
      named_by: null,
      number: 10,
      period: 2,
      group: 18,
      phase: "Gas",
      source: "https://pubchem.ncbi.nlm.nih.gov/element/Neon",
      bohr_model_image:
        "https://storage.googleapis.com/search-ar-edu/periodic-table/element_010_neon/element_010_neon_srp_th.png",
      bohr_model_3d:
        "https://storage.googleapis.com/search-ar-edu/periodic-table/element_010_neon/element_010_neon.glb",
      spectral_img: "https://en.wikipedia.org/wiki/File:Neon_spectra.jpg",
      summary:
        "Neon is a chemical element with symbol Ne and atomic number 10. It is in group 18 (noble gases) of the periodic table. Neon is a colorless, odorless, inert monatomic gas under standard conditions, with about two-thirds the density of air.",
      symbol: "Ne",
      xpos: 18,
      ypos: 2,
      wxpos: 32,
      wypos: 2,
      shells: [2, 8],
      electron_configuration: "1s2 2s2 2p6",
      electron_configuration_semantic: "[He] 2s2 2p6",
      electron_affinity: -116,
      electronegativity_pauling: null,
      ionization_energies: [
        2080.7, 3952.3, 6122, 9371, 12177, 15238, 19999, 23069.5, 115379.5,
        131432,
      ],
      cpk_hex: "b3e3f5",
      image: {
        title: "Vial of Glowing Ultrapure neon. Original size in cm: 1 x 5",
        url: "https://upload.wikimedia.org/wikipedia/commons/f/f8/Neon-glow.jpg",
        attribution:
          "Jurii, CC BY 3.0 <https://creativecommons.org/licenses/by/3.0>, via Wikimedia Commons, source: https://images-of-elements.com/neon.php",
      },
      block: "p",
    },
    {
      name: "Sodium",
      appearance: "silvery white metallic",
      atomic_mass: 22.989769282,
      boil: 1156.09,
      category: "alkali metal",
      density: 0.968,
      discovered_by: "Humphry Davy",
      melt: 370.944,
      molar_heat: 28.23,
      named_by: null,
      number: 11,
      period: 3,
      group: 1,
      phase: "Solid",
      source: "https://pubchem.ncbi.nlm.nih.gov/element/Sodium",
      bohr_model_image:
        "https://storage.googleapis.com/search-ar-edu/periodic-table/element_011_sodium/element_011_sodium_srp_th.png",
      bohr_model_3d:
        "https://storage.googleapis.com/search-ar-edu/periodic-table/element_011_sodium/element_011_sodium.glb",
      spectral_img: "https://en.wikipedia.org/wiki/File:Sodium_Spectra.jpg",
      summary:
        "Sodium /ˈsoʊdiəm/ is a chemical element with symbol Na (from Ancient Greek Νάτριο) and atomic number 11. It is a soft, silver-white, highly reactive metal. In the Periodic table it is in column 1 (alkali metals), and shares with the other six elements in that column that it has a single electron in its outer shell, which it readily donates, creating a positively charged atom - a cation.",
      symbol: "Na",
      xpos: 1,
      ypos: 3,
      wxpos: 1,
      wypos: 3,
      shells: [2, 8, 1],
      electron_configuration: "1s2 2s2 2p6 3s1",
      electron_configuration_semantic: "[Ne] 3s1",
      electron_affinity: 52.867,
      electronegativity_pauling: 0.93,
      ionization_energies: [
        495.8, 4562, 6910.3, 9543, 13354, 16613, 20117, 25496, 28932, 141362,
        159076,
      ],
      cpk_hex: "ab5cf2",
      image: {
        title: "Na (Sodium) Metal",
        url: "https://upload.wikimedia.org/wikipedia/commons/2/27/Na_%28Sodium%29.jpg",
        attribution:
          "The original uploader was Dnn87 at English Wikipedia., CC BY-SA 3.0 <https://creativecommons.org/licenses/by-sa/3.0>, via Wikimedia Commons",
      },
      block: "s",
    },
    {
      name: "Magnesium",
      appearance: "shiny grey solid",
      atomic_mass: 24.305,
      boil: 1363,
      category: "alkaline earth metal",
      density: 1.738,
      discovered_by: "Joseph Black",
      melt: 923,
      molar_heat: 24.869,
      named_by: null,
      number: 12,
      period: 3,
      group: 2,
      phase: "Solid",
      source: "https://pubchem.ncbi.nlm.nih.gov/element/Magnesium",
      bohr_model_image:
        "https://storage.googleapis.com/search-ar-edu/periodic-table/element_012_magnesium/element_012_magnesium_srp_th.png",
      bohr_model_3d:
        "https://storage.googleapis.com/search-ar-edu/periodic-table/element_012_magnesium/element_012_magnesium.glb",
      spectral_img: "https://en.wikipedia.org/wiki/File:Magnesium_Spectra.jpg",
      summary:
        "Magnesium is a chemical element with symbol Mg and atomic number 12. It is a shiny gray solid which bears a close physical resemblance to the other five elements in the second column (Group 2, or alkaline earth metals) of the periodic table:they each have the same electron configuration in their outer electron shell producing a similar crystal structure. Magnesium is the ninth most abundant element in the universe.",
      symbol: "Mg",
      xpos: 2,
      ypos: 3,
      wxpos: 2,
      wypos: 3,
      shells: [2, 8, 2],
      electron_configuration: "1s2 2s2 2p6 3s2",
      electron_configuration_semantic: "[Ne] 3s2",
      electron_affinity: -40,
      electronegativity_pauling: 1.31,
      ionization_energies: [
        737.7, 1450.7, 7732.7, 10542.5, 13630, 18020, 21711, 25661, 31653,
        35458, 169988, 189368,
      ],
      cpk_hex: "8aff00",
      image: {
        title: "Magnesium crystals",
        url: "https://upload.wikimedia.org/wikipedia/commons/3/3f/Magnesium_crystals.jpg",
        attribution:
          "Warut Roonguthai, CC BY-SA 3.0 <https://creativecommons.org/licenses/by-sa/3.0>, via Wikimedia Commons",
      },
      block: "s",
    },
    {
      name: "Aluminium",
      appearance: "silvery gray metallic",
      atomic_mass: 26.98153857,
      boil: 2743,
      category: "post-transition metal",
      density: 2.7,
      discovered_by: null,
      melt: 933.47,
      molar_heat: 24.2,
      named_by: "Humphry Davy",
      number: 13,
      period: 3,
      group: 13,
      phase: "Solid",
      source: "https://pubchem.ncbi.nlm.nih.gov/element/Aluminium",
      bohr_model_image:
        "https://storage.googleapis.com/search-ar-edu/periodic-table/element_013_aluminum/element_013_aluminum_srp_th.png",
      bohr_model_3d:
        "https://storage.googleapis.com/search-ar-edu/periodic-table/element_013_aluminum/element_013_aluminum.glb",
      spectral_img: null,
      summary:
        "Aluminium (or aluminum; see different endings) is a chemical element in the boron group with symbol Al and atomic number 13. It is a silvery-white, soft, nonmagnetic, ductile metal. Aluminium is the third most abundant element (after oxygen and silicon), and the most abundant metal, in the Earth's crust.",
      symbol: "Al",
      xpos: 13,
      ypos: 3,
      wxpos: 27,
      wypos: 3,
      shells: [2, 8, 3],
      electron_configuration: "1s2 2s2 2p6 3s2 3p1",
      electron_configuration_semantic: "[Ne] 3s2 3p1",
      electron_affinity: 41.762,
      electronegativity_pauling: 1.61,
      ionization_energies: [
        577.5, 1816.7, 2744.8, 11577, 14842, 18379, 23326, 27465, 31853, 38473,
        42647, 201266, 222316,
      ],
      cpk_hex: "bfa6a6",
      image: {
        title: "Pure aluminium foil. Original size in cm: 5 x 5",
        url: "https://upload.wikimedia.org/wikipedia/commons/3/3e/Aluminium.jpg",
        attribution:
          "Jurii, CC BY 3.0 <https://creativecommons.org/licenses/by/3.0>, via Wikimedia Commons, source: https://images-of-elements.com/aluminium.php ",
      },
      block: "p",
    },
    {
      name: "Silicon",
      appearance: "crystalline, reflective with bluish-tinged faces",
      atomic_mass: 28.085,
      boil: 3538,
      category: "metalloid",
      density: 2.329,
      discovered_by: "Jöns Jacob Berzelius",
      melt: 1687,
      molar_heat: 19.789,
      named_by: "Thomas Thomson (chemist)",
      number: 14,
      period: 3,
      group: 14,
      phase: "Solid",
      source: "https://pubchem.ncbi.nlm.nih.gov/element/Silicon",
      bohr_model_image:
        "https://storage.googleapis.com/search-ar-edu/periodic-table/element_014_silicon/element_014_silicon_srp_th.png",
      bohr_model_3d:
        "https://storage.googleapis.com/search-ar-edu/periodic-table/element_014_silicon/element_014_silicon.glb",
      spectral_img: "https://en.wikipedia.org/wiki/File:Silicon_Spectra.jpg",
      summary:
        "Silicon is a chemical element with symbol Si and atomic number 14. It is a tetravalent metalloid, more reactive than germanium, the metalloid directly below it in the table. Controversy about silicon's character dates to its discovery.",
      symbol: "Si",
      xpos: 14,
      ypos: 3,
      wxpos: 28,
      wypos: 3,
      shells: [2, 8, 4],
      electron_configuration: "1s2 2s2 2p6 3s2 3p2",
      electron_configuration_semantic: "[Ne] 3s2 3p2",
      electron_affinity: 134.0684,
      electronegativity_pauling: 1.9,
      ionization_energies: [
        786.5, 1577.1, 3231.6, 4355.5, 16091, 19805, 23780, 29287, 33878, 38726,
        45962, 50502, 235196, 257923,
      ],
      cpk_hex: "f0c8a0",
      image: {
        title: "Chunk of Ultrapure Silicon, 2 x 2 cm",
        url: "https://upload.wikimedia.org/wikipedia/commons/2/2c/Silicon.jpg",
        attribution:
          "Jurii, CC BY 3.0 <https://creativecommons.org/licenses/by/3.0>, via Wikimedia Commons, source: https://images-of-elements.com/silicon.php",
      },
      block: "p",
    },
    {
      name: "Phosphorus",
      appearance: "colourless, waxy white, yellow, scarlet, red, violet, black",
      atomic_mass: 30.9737619985,
      boil: null,
      category: "polyatomic nonmetal",
      density: 1.823,
      discovered_by: "Hennig Brand",
      melt: null,
      molar_heat: 23.824,
      named_by: null,
      number: 15,
      period: 3,
      group: 15,
      phase: "Solid",
      source: "https://pubchem.ncbi.nlm.nih.gov/element/Phosphorus",
      bohr_model_image:
        "https://storage.googleapis.com/search-ar-edu/periodic-table/element_015_phosphorus/element_015_phosphorus_srp_th.png",
      bohr_model_3d:
        "https://storage.googleapis.com/search-ar-edu/periodic-table/element_015_phosphorus/element_015_phosphorus.glb",
      spectral_img: null,
      summary:
        "Phosphorus is a chemical element with symbol P and atomic number 15. As an element, phosphorus exists in two major forms—white phosphorus and red phosphorus—but due to its high reactivity, phosphorus is never found as a free element on Earth. Instead phosphorus-containing minerals are almost always present in their maximally oxidised state, as inorganic phosphate rocks.",
      symbol: "P",
      xpos: 15,
      ypos: 3,
      wxpos: 29,
      wypos: 3,
      shells: [2, 8, 5],
      electron_configuration: "1s2 2s2 2p6 3s2 3p3",
      electron_configuration_semantic: "[Ne] 3s2 3p3",
      electron_affinity: 72.037,
      electronegativity_pauling: 2.19,
      ionization_energies: [
        1011.8, 1907, 2914.1, 4963.6, 6273.9, 21267, 25431, 29872, 35905, 40950,
        46261, 54110, 59024, 271791, 296195,
      ],
      cpk_hex: "ff8000",
      image: {
        title: "Purple Phosphorus",
        url: "https://upload.wikimedia.org/wikipedia/commons/6/6d/Phosphorus-purple.jpg",
        attribution:
          "Jurii, CC BY 3.0 <https://creativecommons.org/licenses/by/3.0>, via Wikimedia Commons, source: https://images-of-elements.com/phosphorus.php",
      },
      block: "p",
    },
    {
      name: "Sulfur",
      appearance: "lemon yellow sintered microcrystals",
      atomic_mass: 32.06,
      boil: 717.8,
      category: "polyatomic nonmetal",
      density: 2.07,
      discovered_by: "Ancient china",
      melt: 388.36,
      molar_heat: 22.75,
      named_by: null,
      number: 16,
      period: 3,
      group: 16,
      phase: "Solid",
      source: "https://pubchem.ncbi.nlm.nih.gov/element/Sulfur",
      bohr_model_image:
        "https://storage.googleapis.com/search-ar-edu/periodic-table/element_016_sulfur/element_016_sulfur_srp_th.png",
      bohr_model_3d:
        "https://storage.googleapis.com/search-ar-edu/periodic-table/element_016_sulfur/element_016_sulfur.glb",
      spectral_img: "https://en.wikipedia.org/wiki/File:Sulfur_Spectrum.jpg",
      summary:
        "Sulfur or sulphur (see spelling differences) is a chemical element with symbol S and atomic number 16. It is an abundant, multivalent non-metal. Under normal conditions, sulfur atoms form cyclic octatomic molecules with chemical formula S8.",
      symbol: "S",
      xpos: 16,
      ypos: 3,
      wxpos: 30,
      wypos: 3,
      shells: [2, 8, 6],
      electron_configuration: "1s2 2s2 2p6 3s2 3p4",
      electron_configuration_semantic: "[Ne] 3s2 3p4",
      electron_affinity: 200.4101,
      electronegativity_pauling: 2.58,
      ionization_energies: [
        999.6, 2252, 3357, 4556, 7004.3, 8495.8, 27107, 31719, 36621, 43177,
        48710, 54460, 62930, 68216, 311048, 337138,
      ],
      cpk_hex: "ffff30",
      image: {
        title: "Native Sulfur From Russia",
        url: "https://upload.wikimedia.org/wikipedia/commons/2/23/Native_sulfur_%28Vodinskoe_Deposit%3B_quarry_near_Samara%2C_Russia%29_9.jpg",
        attribution:
          "James St. John, CC BY 2.0 <https://creativecommons.org/licenses/by/2.0>, via Wikimedia Commons",
      },
      block: "p",
    },
    {
      name: "Chlorine",
      appearance: "pale yellow-green gas",
      atomic_mass: 35.45,
      boil: 239.11,
      category: "diatomic nonmetal",
      density: 3.2,
      discovered_by: "Carl Wilhelm Scheele",
      melt: 171.6,
      molar_heat: null,
      named_by: null,
      number: 17,
      period: 3,
      group: 17,
      phase: "Gas",
      source: "https://pubchem.ncbi.nlm.nih.gov/element/Chlorine",
      bohr_model_image:
        "https://storage.googleapis.com/search-ar-edu/periodic-table/element_017_chlorine/element_017_chlorine_srp_th.png",
      bohr_model_3d:
        "https://storage.googleapis.com/search-ar-edu/periodic-table/element_017_chlorine/element_017_chlorine.glb",
      spectral_img:
        "https://en.wikipedia.org/wiki/File:Chlorine_spectrum_visible.png",
      summary:
        "Chlorine is a chemical element with symbol Cl and atomic number 17. It also has a relative atomic mass of 35.5. Chlorine is in the halogen group (17) and is the second lightest halogen following fluorine.",
      symbol: "Cl",
      xpos: 17,
      ypos: 3,
      wxpos: 31,
      wypos: 3,
      shells: [2, 8, 7],
      electron_configuration: "1s2 2s2 2p6 3s2 3p5",
      electron_configuration_semantic: "[Ne] 3s2 3p5",
      electron_affinity: 348.575,
      electronegativity_pauling: 3.16,
      ionization_energies: [
        1251.2, 2298, 3822, 5158.6, 6542, 9362, 11018, 33604, 38600, 43961,
        51068, 57119, 63363, 72341, 78095, 352994, 380760,
      ],
      cpk_hex: "1ff01f",
      image: {
        title: "A Sample of Chlorine",
        url: "https://upload.wikimedia.org/wikipedia/commons/9/9a/Chlorine-sample-flip.jpg",
        attribution: "Benjah-bmm27, Public domain, via Wikimedia Commons",
      },
      block: "p",
    },
    {
      name: "Argon",
      appearance:
        "colorless gas exhibiting a lilac/violet glow when placed in a high voltage electric field",
      atomic_mass: 39.9481,
      boil: 87.302,
      category: "noble gas",
      density: 1.784,
      discovered_by: "Lord Rayleigh",
      melt: 83.81,
      molar_heat: null,
      named_by: null,
      number: 18,
      period: 3,
      group: 18,
      phase: "Gas",
      source: "https://pubchem.ncbi.nlm.nih.gov/element/Argon",
      bohr_model_image:
        "https://storage.googleapis.com/search-ar-edu/periodic-table/element_018_argon/element_018_argon_srp_th.png",
      bohr_model_3d:
        "https://storage.googleapis.com/search-ar-edu/periodic-table/element_018_argon/element_018_argon.glb",
      spectral_img: "https://en.wikipedia.org/wiki/File:Argon_Spectrum.png",
      summary:
        "Argon is a chemical element with symbol Ar and atomic number 18. It is in group 18 of the periodic table and is a noble gas. Argon is the third most common gas in the Earth's atmosphere, at 0.934% (9,340 ppmv), making it over twice as abundant as the next most common atmospheric gas, water vapor (which averages about 4000 ppmv, but varies greatly), and 23 times as abundant as the next most common non-condensing atmospheric gas, carbon dioxide (400 ppmv), and more than 500 times as abundant as the next most common noble gas, neon (18 ppmv).",
      symbol: "Ar",
      xpos: 18,
      ypos: 3,
      wxpos: 32,
      wypos: 3,
      shells: [2, 8, 8],
      electron_configuration: "1s2 2s2 2p6 3s2 3p6",
      electron_configuration_semantic: "[Ne] 3s2 3p6",
      electron_affinity: -96,
      electronegativity_pauling: null,
      ionization_energies: [
        1520.6, 2665.8, 3931, 5771, 7238, 8781, 11995, 13842, 40760, 46186,
        52002, 59653, 66199, 72918, 82473, 88576, 397605, 427066,
      ],
      cpk_hex: "80d1e3",
      image: {
        title: "Vial of glowing ultrapure argon. Original size in cm: 1 x 5",
        url: "https://upload.wikimedia.org/wikipedia/commons/5/53/Argon-glow.jpg",
        attribution:
          "Jurii, CC BY 3.0 <https://creativecommons.org/licenses/by/3.0>, via Wikimedia Commons, source: https://images-of-elements.com/argon.php",
      },
      block: "p",
    },
    {
      name: "Potassium",
      appearance: "silvery gray",
      atomic_mass: 39.09831,
      boil: 1032,
      category: "alkali metal",
      density: 0.862,
      discovered_by: "Humphry Davy",
      melt: 336.7,
      molar_heat: 29.6,
      named_by: null,
      number: 19,
      period: 4,
      group: 1,
      phase: "Solid",
      source: "https://pubchem.ncbi.nlm.nih.gov/element/Potassium",
      bohr_model_image:
        "https://storage.googleapis.com/search-ar-edu/periodic-table/element_019_potassium/element_019_potassium_srp_th.png",
      bohr_model_3d:
        "https://storage.googleapis.com/search-ar-edu/periodic-table/element_019_potassium/element_019_potassium.glb",
      spectral_img: "https://en.wikipedia.org/wiki/File:Potassium_Spectrum.jpg",
      summary:
        "Potassium is a chemical element with symbol K (derived from Neo-Latin, kalium) and atomic number 19. It was first isolated from potash, the ashes of plants, from which its name is derived. In the Periodic table, potassium is one of seven elements in column (group) 1 (alkali metals):they all have a single valence electron in their outer electron shell, which they readily give up to create an atom with a positive charge - a cation, and combine with anions to form salts.",
      symbol: "K",
      xpos: 1,
      ypos: 4,
      wxpos: 1,
      wypos: 4,
      shells: [2, 8, 8, 1],
      electron_configuration: "1s2 2s2 2p6 3s2 3p6 4s1",
      electron_configuration_semantic: "[Ar] 4s1",
      electron_affinity: 48.383,
      electronegativity_pauling: 0.82,
      ionization_energies: [
        418.8, 3052, 4420, 5877, 7975, 9590, 11343, 14944, 16963.7, 48610,
        54490, 60730, 68950, 75900, 83080, 93400, 99710, 444880, 476063,
      ],
      cpk_hex: "8f40d4",
      image: {
        title: "Potassium Pieces",
        url: "https://upload.wikimedia.org/wikipedia/commons/b/b3/Potassium.JPG",
        attribution:
          "Dnn87, CC BY 3.0 <https://creativecommons.org/licenses/by/3.0>, via Wikimedia Commons",
      },
      block: "s",
    },
    {
      name: "Calcium",
      appearance: null,
      atomic_mass: 40.0784,
      boil: 1757,
      category: "alkaline earth metal",
      density: 1.55,
      discovered_by: "Humphry Davy",
      melt: 1115,
      molar_heat: 25.929,
      named_by: null,
      number: 20,
      period: 4,
      group: 2,
      phase: "Solid",
      source: "https://pubchem.ncbi.nlm.nih.gov/element/Calcium",
      bohr_model_image:
        "https://storage.googleapis.com/search-ar-edu/periodic-table/element_020_calcium/element_020_calcium_srp_th.png",
      bohr_model_3d:
        "https://storage.googleapis.com/search-ar-edu/periodic-table/element_020_calcium/element_020_calcium.glb",
      spectral_img: "https://en.wikipedia.org/wiki/File:Calcium_Spectrum.png",
      summary:
        "Calcium is a chemical element with symbol Ca and atomic number 20. Calcium is a soft gray alkaline earth metal, fifth-most-abundant element by mass in the Earth's crust. The ion Ca2+ is also the fifth-most-abundant dissolved ion in seawater by both molarity and mass, after sodium, chloride, magnesium, and sulfate.",
      symbol: "Ca",
      xpos: 2,
      ypos: 4,
      wxpos: 2,
      wypos: 4,
      shells: [2, 8, 8, 2],
      electron_configuration: "1s2 2s2 2p6 3s2 3p6 4s2",
      electron_configuration_semantic: "[Ar] 4s2",
      electron_affinity: 2.37,
      electronegativity_pauling: 1,
      ionization_energies: [
        589.8, 1145.4, 4912.4, 6491, 8153, 10496, 12270, 14206, 18191, 20385,
        57110, 63410, 70110, 78890, 86310, 94e3, 104900, 111711, 494850, 527762,
      ],
      cpk_hex: "3dff00",
      image: {
        title: "Calcium Grains, grain size about 1 mm",
        url: "https://upload.wikimedia.org/wikipedia/commons/7/72/Calcium.jpg",
        attribution:
          "Jurii, CC BY 3.0 <https://creativecommons.org/licenses/by/3.0>, via Wikimedia Commons, source: https://images-of-elements.com/calcium.php",
      },
      block: "s",
    },
    {
      name: "Scandium",
      appearance: "silvery white",
      atomic_mass: 44.9559085,
      boil: 3109,
      category: "transition metal",
      density: 2.985,
      discovered_by: "Lars Fredrik Nilson",
      melt: 1814,
      molar_heat: 25.52,
      named_by: null,
      number: 21,
      period: 4,
      group: 3,
      phase: "Solid",
      source: "https://pubchem.ncbi.nlm.nih.gov/element/Scandium",
      bohr_model_image:
        "https://storage.googleapis.com/search-ar-edu/periodic-table/element_021_scandium/element_021_scandium_srp_th.png",
      bohr_model_3d:
        "https://storage.googleapis.com/search-ar-edu/periodic-table/element_021_scandium/element_021_scandium.glb",
      spectral_img: null,
      summary:
        "Scandium is a chemical element with symbol Sc and atomic number 21. A silvery-white metallic d-block element, it has historically been sometimes classified as a rare earth element, together with yttrium and the lanthanoids. It was discovered in 1879 by spectral analysis of the minerals euxenite and gadolinite from Scandinavia.",
      symbol: "Sc",
      xpos: 3,
      ypos: 4,
      wxpos: 17,
      wypos: 4,
      shells: [2, 8, 9, 2],
      electron_configuration: "1s2 2s2 2p6 3s2 3p6 4s2 3d1",
      electron_configuration_semantic: "[Ar] 3d1 4s2",
      electron_affinity: 18,
      electronegativity_pauling: 1.36,
      ionization_energies: [
        633.1, 1235, 2388.6, 7090.6, 8843, 10679, 13310, 15250, 17370, 21726,
        24102, 66320, 73010, 80160, 89490, 97400, 105600, 117e3, 124270, 547530,
        582163,
      ],
      cpk_hex: "e6e6e6",
      image: {
        title: "Crystal of Scandium. About 1g",
        url: "https://upload.wikimedia.org/wikipedia/commons/f/f5/Scandium%2C_Sc.jpg",
        attribution:
          "JanDerChemiker, CC BY-SA 3.0 <https://creativecommons.org/licenses/by-sa/3.0>, via Wikimedia Commons",
      },
      block: "d",
    },
    {
      name: "Titanium",
      appearance: "silvery grey-white metallic",
      atomic_mass: 47.8671,
      boil: 3560,
      category: "transition metal",
      density: 4.506,
      discovered_by: "William Gregor",
      melt: 1941,
      molar_heat: 25.06,
      named_by: "Martin Heinrich Klaproth",
      number: 22,
      period: 4,
      group: 4,
      phase: "Solid",
      source: "https://pubchem.ncbi.nlm.nih.gov/element/Titanium",
      bohr_model_image:
        "https://storage.googleapis.com/search-ar-edu/periodic-table/element_022_titanium/element_022_titanium_srp_th.png",
      bohr_model_3d:
        "https://storage.googleapis.com/search-ar-edu/periodic-table/element_022_titanium/element_022_titanium.glb",
      spectral_img: null,
      summary:
        "Titanium is a chemical element with symbol Ti and atomic number 22. It is a lustrous transition metal with a silver color, low density and high strength. It is highly resistant to corrosion in sea water, aqua regia and chlorine.",
      symbol: "Ti",
      xpos: 4,
      ypos: 4,
      wxpos: 18,
      wypos: 4,
      shells: [2, 8, 10, 2],
      electron_configuration: "1s2 2s2 2p6 3s2 3p6 4s2 3d2",
      electron_configuration_semantic: "[Ar] 3d2 4s2",
      electron_affinity: 7.289,
      electronegativity_pauling: 1.54,
      ionization_energies: [
        658.8, 1309.8, 2652.5, 4174.6, 9581, 11533, 13590, 16440, 18530, 20833,
        25575, 28125, 76015, 83280, 90880, 100700, 109100, 117800, 129900,
        137530, 602930, 639294,
      ],
      cpk_hex: "bfc2c7",
      image: {
        title:
          "Titanium Crystal made with the van Arkel-de Booer Process. 87 grams, Orginial size in cm: 2.5 x 4",
        url: "https://upload.wikimedia.org/wikipedia/commons/e/ec/Titanium.jpg",
        attribution:
          "Hi-Res Images ofChemical Elements, CC BY 3.0 <https://creativecommons.org/licenses/by/3.0>, via Wikimedia Commons, source: https://images-of-elements.com/titanium.php",
      },
      block: "d",
    },
    {
      name: "Vanadium",
      appearance: "blue-silver-grey metal",
      atomic_mass: 50.94151,
      boil: 3680,
      category: "transition metal",
      density: 6,
      discovered_by: "Andrés Manuel del Río",
      melt: 2183,
      molar_heat: 24.89,
      named_by: "Isotopes of vanadium",
      number: 23,
      period: 4,
      group: 5,
      phase: "Solid",
      source: "https://pubchem.ncbi.nlm.nih.gov/element/Vanadium",
      bohr_model_image:
        "https://storage.googleapis.com/search-ar-edu/periodic-table/element_023_vanadium/element_023_vanadium_srp_th.png",
      bohr_model_3d:
        "https://storage.googleapis.com/search-ar-edu/periodic-table/element_023_vanadium/element_023_vanadium.glb",
      spectral_img: null,
      summary:
        "Vanadium is a chemical element with symbol V and atomic number 23. It is a hard, silvery grey, ductile and malleable transition metal. The element is found only in chemically combined form in nature, but once isolated artificially, the formation of an oxide layer stabilizes the free metal somewhat against further oxidation.",
      symbol: "V",
      xpos: 5,
      ypos: 4,
      wxpos: 19,
      wypos: 4,
      shells: [2, 8, 11, 2],
      electron_configuration: "1s2 2s2 2p6 3s2 3p6 4s2 3d3",
      electron_configuration_semantic: "[Ar] 3d3 4s2",
      electron_affinity: 50.911,
      electronegativity_pauling: 1.63,
      ionization_energies: [
        650.9, 1414, 2830, 4507, 6298.7, 12363, 14530, 16730, 19860, 22240,
        24670, 29730, 32446, 86450, 94170, 102300, 112700, 121600, 130700,
        143400, 151440, 661050, 699144,
      ],
      cpk_hex: "a6a6ab",
      image: {
        title: "Pieces of Pure Vanadium with Oxide Layer",
        url: "https://upload.wikimedia.org/wikipedia/commons/0/0a/Vanadium-pieces.jpg",
        attribution:
          "Jurii, CC BY 3.0 <https://creativecommons.org/licenses/by/3.0>, via Wikimedia Commons, source: https://images-of-elements.com/vanadium.php",
      },
      block: "d",
    },
    {
      name: "Chromium",
      appearance: "silvery metallic",
      atomic_mass: 51.99616,
      boil: 2944,
      category: "transition metal",
      density: 7.19,
      discovered_by: "Louis Nicolas Vauquelin",
      melt: 2180,
      molar_heat: 23.35,
      named_by: null,
      number: 24,
      period: 4,
      group: 6,
      phase: "Solid",
      source: "https://pubchem.ncbi.nlm.nih.gov/element/Chromium",
      bohr_model_image:
        "https://storage.googleapis.com/search-ar-edu/periodic-table/element_024_chromium/element_024_chromium_srp_th.png",
      bohr_model_3d:
        "https://storage.googleapis.com/search-ar-edu/periodic-table/element_024_chromium/element_024_chromium.glb",
      spectral_img: null,
      summary:
        "Chromium is a chemical element with symbol Cr and atomic number 24. It is the first element in Group 6. It is a steely-gray, lustrous, hard and brittle metal which takes a high polish, resists tarnishing, and has a high melting point.",
      symbol: "Cr",
      xpos: 6,
      ypos: 4,
      wxpos: 20,
      wypos: 4,
      shells: [2, 8, 13, 1],
      electron_configuration: "1s2 2s2 2p6 3s2 3p6 4s1 3d5",
      electron_configuration_semantic: "[Ar] 3d5 4s1",
      electron_affinity: 65.21,
      electronegativity_pauling: 1.66,
      ionization_energies: [
        652.9, 1590.6, 2987, 4743, 6702, 8744.9, 15455, 17820, 20190, 23580,
        26130, 28750, 34230, 37066, 97510, 105800, 114300, 125300, 134700,
        144300, 157700, 166090, 721870, 761733,
      ],
      cpk_hex: "8a99c7",
      image: {
        title: "Piece of Chromium Metal",
        url: "https://upload.wikimedia.org/wikipedia/commons/a/a1/Chromium.jpg",
        attribution:
          "Jurii, CC BY 3.0 <https://creativecommons.org/licenses/by/3.0>, via Wikimedia Commons, source: https://images-of-elements.com/chromium.php",
      },
      block: "d",
    },
    {
      name: "Manganese",
      appearance: "silvery metallic",
      atomic_mass: 54.9380443,
      boil: 2334,
      category: "transition metal",
      density: 7.21,
      discovered_by: "Torbern Olof Bergman",
      melt: 1519,
      molar_heat: 26.32,
      named_by: null,
      number: 25,
      period: 4,
      group: 7,
      phase: "Solid",
      source: "https://pubchem.ncbi.nlm.nih.gov/element/Manganese",
      bohr_model_image:
        "https://storage.googleapis.com/search-ar-edu/periodic-table/element_025_manganese/element_025_manganese_srp_th.png",
      bohr_model_3d:
        "https://storage.googleapis.com/search-ar-edu/periodic-table/element_025_manganese/element_025_manganese.glb",
      spectral_img: null,
      summary:
        "Manganese is a chemical element with symbol Mn and atomic number 25. It is not found as a free element in nature; it is often found in combination with iron, and in many minerals. Manganese is a metal with important industrial metal alloy uses, particularly in stainless steels.",
      symbol: "Mn",
      xpos: 7,
      ypos: 4,
      wxpos: 21,
      wypos: 4,
      shells: [2, 8, 13, 2],
      electron_configuration: "1s2 2s2 2p6 3s2 3p6 4s2 3d5",
      electron_configuration_semantic: "[Ar] 3d5 4s2",
      electron_affinity: -50,
      electronegativity_pauling: 1.55,
      ionization_energies: [
        717.3, 1509, 3248, 4940, 6990, 9220, 11500, 18770, 21400, 23960, 27590,
        30330, 33150, 38880, 41987, 109480, 118100, 127100, 138600, 148500,
        158600, 172500, 181380, 785450, 827067,
      ],
      cpk_hex: "9c7ac7",
      image: {
        title: "Two Oieces of Manganese Metal",
        url: "https://upload.wikimedia.org/wikipedia/commons/6/64/Manganese_element.jpg",
        attribution:
          "W. Oelen, CC BY-SA 3.0 <https://creativecommons.org/licenses/by-sa/3.0>, via Wikimedia Commons",
      },
      block: "d",
    },
    {
      name: "Iron",
      appearance: "lustrous metallic with a grayish tinge",
      atomic_mass: 55.8452,
      boil: 3134,
      category: "transition metal",
      density: 7.874,
      discovered_by: "5000 BC",
      melt: 1811,
      molar_heat: 25.1,
      named_by: null,
      number: 26,
      period: 4,
      group: 8,
      phase: "Solid",
      source: "https://pubchem.ncbi.nlm.nih.gov/element/Iron",
      bohr_model_image:
        "https://storage.googleapis.com/search-ar-edu/periodic-table/element_026_iron/element_026_iron_srp_th.png",
      bohr_model_3d:
        "https://storage.googleapis.com/search-ar-edu/periodic-table/element_026_iron/element_026_iron.glb",
      spectral_img: "https://en.wikipedia.org/wiki/File:Iron_Spectrum.jpg",
      summary:
        "Iron is a chemical element with symbol Fe (from Latin:ferrum) and atomic number 26. It is a metal in the first transition series. It is by mass the most common element on Earth, forming much of Earth's outer and inner core.",
      symbol: "Fe",
      xpos: 8,
      ypos: 4,
      wxpos: 22,
      wypos: 4,
      shells: [2, 8, 14, 2],
      electron_configuration: "1s2 2s2 2p6 3s2 3p6 4s2 3d6",
      electron_configuration_semantic: "[Ar] 3d6 4s2",
      electron_affinity: 14.785,
      electronegativity_pauling: 1.83,
      ionization_energies: [
        762.5, 1561.9, 2957, 5290, 7240, 9560, 12060, 14580, 22540, 25290, 28e3,
        31920, 34830, 37840, 44100, 47206, 122200, 131e3, 140500, 152600, 163e3,
        173600, 188100, 195200, 851800, 895161,
      ],
      cpk_hex: "e06633",
      image: {
        title:
          "Fragments of an iron meteorite, about 92% iron. Original size of the single pieces in cm: 0.4 - 0.8",
        url: "https://images-of-elements.com/iron-2.jpg",
        attribution:
          "Chemical ELements A Virtual Museum, CC BY 3.0 <https://creativecommons.org/licenses/by/3.0> source: https://images-of-elements.com/iron.php",
      },
      block: "d",
    },
    {
      name: "Cobalt",
      appearance: "hard lustrous gray metal",
      atomic_mass: 58.9331944,
      boil: 3200,
      category: "transition metal",
      density: 8.9,
      discovered_by: "Georg Brandt",
      melt: 1768,
      molar_heat: 24.81,
      named_by: null,
      number: 27,
      period: 4,
      group: 9,
      phase: "Solid",
      source: "https://pubchem.ncbi.nlm.nih.gov/element/Cobalt",
      bohr_model_image:
        "https://storage.googleapis.com/search-ar-edu/periodic-table/element_027_cobalt/element_027_cobalt_srp_th.png",
      bohr_model_3d:
        "https://storage.googleapis.com/search-ar-edu/periodic-table/element_027_cobalt/element_027_cobalt.glb",
      spectral_img: null,
      summary:
        "Cobalt is a chemical element with symbol Co and atomic number 27. Like nickel, cobalt in the Earth's crust is found only in chemically combined form, save for small deposits found in alloys of natural meteoric iron. The free element, produced by reductive smelting, is a hard, lustrous, silver-gray metal.",
      symbol: "Co",
      xpos: 9,
      ypos: 4,
      wxpos: 23,
      wypos: 4,
      shells: [2, 8, 15, 2],
      electron_configuration: "1s2 2s2 2p6 3s2 3p6 4s2 3d7",
      electron_configuration_semantic: "[Ar] 3d7 4s2",
      electron_affinity: 63.898,
      electronegativity_pauling: 1.88,
      ionization_energies: [
        760.4, 1648, 3232, 4950, 7670, 9840, 12440, 15230, 17959, 26570, 29400,
        32400, 36600, 39700, 42800, 49396, 52737, 134810, 145170, 154700,
        167400, 178100, 189300, 204500, 214100, 920870, 966023,
      ],
      cpk_hex: "f090a0",
      image: {
        title:
          "Fractions from a cobalt, 7 and 4 grams. Original size in cm: 2 x 2",
        url: "https://upload.wikimedia.org/wikipedia/commons/6/62/Cobalt_ore_2.jpg",
        attribution:
          "Hi-Res Images ofChemical Elements, CC BY 3.0 <https://creativecommons.org/licenses/by/3.0>, via Wikimedia Commons, source: https://images-of-elements.com/cobalt.php",
      },
      block: "d",
    },
    {
      name: "Nickel",
      appearance: "lustrous, metallic, and silver with a gold tinge",
      atomic_mass: 58.69344,
      boil: 3003,
      category: "transition metal",
      density: 8.908,
      discovered_by: "Axel Fredrik Cronstedt",
      melt: 1728,
      molar_heat: 26.07,
      named_by: null,
      number: 28,
      period: 4,
      group: 10,
      phase: "Solid",
      source: "https://pubchem.ncbi.nlm.nih.gov/element/Nickel",
      bohr_model_image:
        "https://storage.googleapis.com/search-ar-edu/periodic-table/element_028_nickel/element_028_nickel_srp_th.png",
      bohr_model_3d:
        "https://storage.googleapis.com/search-ar-edu/periodic-table/element_028_nickel/element_028_nickel.glb",
      spectral_img: null,
      summary:
        "Nickel is a chemical element with symbol Ni and atomic number 28. It is a silvery-white lustrous metal with a slight golden tinge. Nickel belongs to the transition metals and is hard and ductile.",
      symbol: "Ni",
      xpos: 10,
      ypos: 4,
      wxpos: 24,
      wypos: 4,
      shells: [2, 8, 16, 2],
      electron_configuration: "1s2 2s2 2p6 3s2 3p6 4s2 3d8",
      electron_configuration_semantic: "[Ar] 3d8 4s2",
      electron_affinity: 111.65,
      electronegativity_pauling: 1.91,
      ionization_energies: [
        737.1, 1753, 3395, 5300, 7339, 10400, 12800, 15600, 18600, 21670, 30970,
        34e3, 37100, 41500, 44800, 48100, 55101, 58570, 148700, 159e3, 169400,
        182700, 194e3, 205600, 221400, 231490, 992718, 1039668,
      ],
      cpk_hex: "50d050",
      image: {
        title: "Nickel Chunk",
        url: "https://upload.wikimedia.org/wikipedia/commons/5/57/Nickel_chunk.jpg",
        attribution:
          "Materialscientist at English Wikipedia, CC BY-SA 3.0 <https://creativecommons.org/licenses/by-sa/3.0>, via Wikimedia Commons",
      },
      block: "d",
    },
    {
      name: "Copper",
      appearance: "red-orange metallic luster",
      atomic_mass: 63.5463,
      boil: 2835,
      category: "transition metal",
      density: 8.96,
      discovered_by: "Middle East",
      melt: 1357.77,
      molar_heat: 24.44,
      named_by: null,
      number: 29,
      period: 4,
      group: 11,
      phase: "Solid",
      source: "https://pubchem.ncbi.nlm.nih.gov/element/Copper",
      bohr_model_image:
        "https://storage.googleapis.com/search-ar-edu/periodic-table/element_029_copper/element_029_copper_srp_th.png",
      bohr_model_3d:
        "https://storage.googleapis.com/search-ar-edu/periodic-table/element_029_copper/element_029_copper.glb",
      spectral_img: null,
      summary:
        "Copper is a chemical element with symbol Cu (from Latin:cuprum) and atomic number 29. It is a soft, malleable and ductile metal with very high thermal and electrical conductivity. A freshly exposed surface of pure copper has a reddish-orange color.",
      symbol: "Cu",
      xpos: 11,
      ypos: 4,
      wxpos: 25,
      wypos: 4,
      shells: [2, 8, 18, 1],
      electron_configuration: "1s2 2s2 2p6 3s2 3p6 4s1 3d10",
      electron_configuration_semantic: "[Ar] 3d10 4s1",
      electron_affinity: 119.235,
      electronegativity_pauling: 1.9,
      ionization_energies: [
        745.5, 1957.9, 3555, 5536, 7700, 9900, 13400, 16e3, 19200, 22400, 25600,
        35600, 38700, 42e3, 46700, 50200, 53700, 61100, 64702, 163700, 174100,
        184900, 198800, 210500, 222700, 239100, 249660, 1067358, 1116105,
      ],
      cpk_hex: "c88033",
      image: {
        title: "Macro of Native Copper about 1 ½ inches (4 cm) in size",
        url: "https://upload.wikimedia.org/wikipedia/commons/f/f0/NatCopper.jpg",
        attribution:
          "Native_Copper_Macro_Digon3.jpg: 'Jonathan Zander (Digon3)' derivative work: Materialscientist, CC BY-SA 2.5 <https://creativecommons.org/licenses/by-sa/2.5>, via Wikimedia Commons",
      },
      block: "d",
    },
    {
      name: "Zinc",
      appearance: "silver-gray",
      atomic_mass: 65.382,
      boil: 1180,
      category: "transition metal",
      density: 7.14,
      discovered_by: "India",
      melt: 692.68,
      molar_heat: 25.47,
      named_by: null,
      number: 30,
      period: 4,
      group: 12,
      phase: "Solid",
      source: "https://pubchem.ncbi.nlm.nih.gov/element/zinc",
      bohr_model_image:
        "https://storage.googleapis.com/search-ar-edu/periodic-table/element_030_zinc/element_030_zinc_srp_th.png",
      bohr_model_3d:
        "https://storage.googleapis.com/search-ar-edu/periodic-table/element_030_zinc/element_030_zinc.glb",
      spectral_img: null,
      summary:
        "Zinc, in commerce also spelter, is a chemical element with symbol Zn and atomic number 30. It is the first element of group 12 of the periodic table. In some respects zinc is chemically similar to magnesium:its ion is of similar size and its only common oxidation state is +2.",
      symbol: "Zn",
      xpos: 12,
      ypos: 4,
      wxpos: 26,
      wypos: 4,
      shells: [2, 8, 18, 2],
      electron_configuration: "1s2 2s2 2p6 3s2 3p6 4s2 3d10",
      electron_configuration_semantic: "[Ar] 3d10 4s2",
      electron_affinity: -58,
      electronegativity_pauling: 1.65,
      ionization_energies: [
        906.4, 1733.3, 3833, 5731, 7970, 10400, 12900, 16800, 19600, 23e3,
        26400, 29990, 40490, 43800, 47300, 52300, 55900, 59700, 67300, 71200,
        179100,
      ],
      cpk_hex: "7d80b0",
      image: {
        title: "30 grams Zinc, front and back side. Original size in cm: 3",
        url: "https://upload.wikimedia.org/wikipedia/commons/b/ba/Zinc_%2830_Zn%29.jpg",
        attribution:
          "Hi-Res Images ofChemical Elements, CC BY 3.0 <https://creativecommons.org/licenses/by/3.0>, via Wikimedia Commons, source: https://images-of-elements.com/zinc.php",
      },
      block: "d",
    },
    {
      name: "Gallium",
      appearance: "silver-white",
      atomic_mass: 69.7231,
      boil: 2673,
      category: "post-transition metal",
      density: 5.91,
      discovered_by: "Lecoq de Boisbaudran",
      melt: 302.9146,
      molar_heat: 25.86,
      named_by: null,
      number: 31,
      period: 4,
      group: 13,
      phase: "Solid",
      source: "https://pubchem.ncbi.nlm.nih.gov/element/Gallium",
      bohr_model_image:
        "https://storage.googleapis.com/search-ar-edu/periodic-table/element_031_gallium/element_031_gallium_srp_th.png",
      bohr_model_3d:
        "https://storage.googleapis.com/search-ar-edu/periodic-table/element_031_gallium/element_031_gallium.glb",
      spectral_img: null,
      summary:
        "Gallium is a chemical element with symbol Ga and atomic number 31. Elemental gallium does not occur in free form in nature, but as the gallium(III) compounds that are in trace amounts in zinc ores and in bauxite. Gallium is a soft, silvery metal, and elemental gallium is a brittle solid at low temperatures, and melts at 29.76 °C (85.57 °F) (slightly above room temperature).",
      symbol: "Ga",
      xpos: 13,
      ypos: 4,
      wxpos: 27,
      wypos: 4,
      shells: [2, 8, 18, 3],
      electron_configuration: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p1",
      electron_configuration_semantic: "[Ar] 3d10 4s2 4p1",
      electron_affinity: 41,
      electronegativity_pauling: 1.81,
      ionization_energies: [578.8, 1979.3, 2963, 6180],
      cpk_hex: "c28f8f",
      image: {
        title:
          "Solid gallium, fresh and after some time (2 months) at room temperature",
        url: "https://upload.wikimedia.org/wikipedia/commons/b/b1/Solid_gallium_%28Ga%29.jpg",
        attribution:
          "Hi-Res Images ofChemical Elements, CC BY 3.0 <https://creativecommons.org/licenses/by/3.0>, via Wikimedia Commons, source: https://images-of-elements.com/gallium.php",
      },
      block: "p",
    },
    {
      name: "Germanium",
      appearance: "grayish-white",
      atomic_mass: 72.6308,
      boil: 3106,
      category: "metalloid",
      density: 5.323,
      discovered_by: "Clemens Winkler",
      melt: 1211.4,
      molar_heat: 23.222,
      named_by: null,
      number: 32,
      period: 4,
      group: 14,
      phase: "Solid",
      source: "https://pubchem.ncbi.nlm.nih.gov/element/Germanium",
      bohr_model_image:
        "https://storage.googleapis.com/search-ar-edu/periodic-table/element_032_germanium/element_032_germanium_srp_th.png",
      bohr_model_3d:
        "https://storage.googleapis.com/search-ar-edu/periodic-table/element_032_germanium/element_032_germanium.glb",
      spectral_img: null,
      summary:
        "Germanium is a chemical element with symbol Ge and atomic number 32. It is a lustrous, hard, grayish-white metalloid in the carbon group, chemically similar to its group neighbors tin and silicon. Purified germanium is a semiconductor, with an appearance most similar to elemental silicon.",
      symbol: "Ge",
      xpos: 14,
      ypos: 4,
      wxpos: 28,
      wypos: 4,
      shells: [2, 8, 18, 4],
      electron_configuration: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p2",
      electron_configuration_semantic: "[Ar] 3d10 4s2 4p2",
      electron_affinity: 118.9352,
      electronegativity_pauling: 2.01,
      ionization_energies: [762, 1537.5, 3302.1, 4411, 9020],
      cpk_hex: "668f8f",
      image: {
        title: "12 Grams Polycrystalline Germanium, 2*3 cm",
        url: "https://upload.wikimedia.org/wikipedia/commons/0/08/Polycrystalline-germanium.jpg",
        attribution:
          "Jurii, CC BY 3.0 <https://creativecommons.org/licenses/by/3.0>, via Wikimedia Commons, source: https://images-of-elements.com/germanium.php",
      },
      block: "p",
    },
    {
      name: "Arsenic",
      appearance: "metallic grey",
      atomic_mass: 74.9215956,
      boil: null,
      category: "metalloid",
      density: 5.727,
      discovered_by: "Bronze Age",
      melt: null,
      molar_heat: 24.64,
      named_by: null,
      number: 33,
      period: 4,
      group: 15,
      phase: "Solid",
      source: "https://pubchem.ncbi.nlm.nih.gov/element/Arsenic",
      bohr_model_image:
        "https://storage.googleapis.com/search-ar-edu/periodic-table/element_033_arsenic/element_033_arsenic_srp_th.png",
      bohr_model_3d:
        "https://storage.googleapis.com/search-ar-edu/periodic-table/element_033_arsenic/element_033_arsenic.glb",
      spectral_img: null,
      summary:
        "Arsenic is a chemical element with symbol As and atomic number 33. Arsenic occurs in many minerals, usually in conjunction with sulfur and metals, and also as a pure elemental crystal. Arsenic is a metalloid.",
      symbol: "As",
      xpos: 15,
      ypos: 4,
      wxpos: 29,
      wypos: 4,
      shells: [2, 8, 18, 5],
      electron_configuration: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p3",
      electron_configuration_semantic: "[Ar] 3d10 4s2 4p3",
      electron_affinity: 77.65,
      electronegativity_pauling: 2.18,
      ionization_energies: [947, 1798, 2735, 4837, 6043, 12310],
      cpk_hex: "bd80e3",
      image: {
        title:
          "Ultrapure Metallic Arsenic under Argon, 1 - 2 grams. Original size of each piece in cm: 0.5 x 1",
        url: "https://upload.wikimedia.org/wikipedia/commons/3/3b/Arsenic_%2833_As%29.jpg",
        attribution:
          "Hi-Res Images ofChemical Elements, CC BY 3.0 <https://creativecommons.org/licenses/by/3.0>, via Wikimedia Commons, source: https://images-of-elements.com/arsenic.php",
      },
      block: "p",
    },
    {
      name: "Selenium",
      appearance: "black, red, and gray (not pictured) allotropes",
      atomic_mass: 78.9718,
      boil: 958,
      category: "polyatomic nonmetal",
      density: 4.81,
      discovered_by: "Jöns Jakob Berzelius",
      melt: 494,
      molar_heat: 25.363,
      named_by: null,
      number: 34,
      period: 4,
      group: 16,
      phase: "Solid",
      source: "https://pubchem.ncbi.nlm.nih.gov/element/Selenium",
      bohr_model_image:
        "https://storage.googleapis.com/search-ar-edu/periodic-table/element_034_selenium/element_034_selenium_srp_th.png",
      bohr_model_3d:
        "https://storage.googleapis.com/search-ar-edu/periodic-table/element_034_selenium/element_034_selenium.glb",
      spectral_img: null,
      summary:
        "Selenium is a chemical element with symbol Se and atomic number 34. It is a nonmetal with properties that are intermediate between those of its periodic table column-adjacent chalcogen elements sulfur and tellurium. It rarely occurs in its elemental state in nature, or as pure ore compounds.",
      symbol: "Se",
      xpos: 16,
      ypos: 4,
      wxpos: 30,
      wypos: 4,
      shells: [2, 8, 18, 6],
      electron_configuration: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p4",
      electron_configuration_semantic: "[Ar] 3d10 4s2 4p4",
      electron_affinity: 194.9587,
      electronegativity_pauling: 2.55,
      ionization_energies: [941, 2045, 2973.7, 4144, 6590, 7880, 14990],
      cpk_hex: "ffa100",
      image: {
        title:
          "Ultrapure Black, Amorphous Selenium, 3 - 4 grams. Original size in cm: 2",
        url: "https://upload.wikimedia.org/wikipedia/commons/7/7f/Selenium.jpg",
        attribution:
          "Hi-Res Images ofChemical Elements, CC BY 3.0 <https://creativecommons.org/licenses/by/3.0>, via Wikimedia Commons, source: https://images-of-elements.com/selenium.php",
      },
      block: "p",
    },
    {
      name: "Bromine",
      appearance: null,
      atomic_mass: 79.904,
      boil: 332,
      category: "diatomic nonmetal",
      density: 3.1028,
      discovered_by: "Antoine Jérôme Balard",
      melt: 265.8,
      molar_heat: null,
      named_by: null,
      number: 35,
      period: 4,
      group: 17,
      phase: "Liquid",
      source: "https://pubchem.ncbi.nlm.nih.gov/element/Bromine",
      bohr_model_image:
        "https://storage.googleapis.com/search-ar-edu/periodic-table/element_035_bromine/element_035_bromine_srp_th.png",
      bohr_model_3d:
        "https://storage.googleapis.com/search-ar-edu/periodic-table/element_035_bromine/element_035_bromine.glb",
      spectral_img: null,
      summary:
        'Bromine (from Ancient Greek:βρῶμος, brómos, meaning "stench") is a chemical element with symbol Br, and atomic number 35. It is a halogen. The element was isolated independently by two chemists, Carl Jacob Löwig and Antoine Jerome Balard, in 1825–1826.',
      symbol: "Br",
      xpos: 17,
      ypos: 4,
      wxpos: 31,
      wypos: 4,
      shells: [2, 8, 18, 7],
      electron_configuration: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p5",
      electron_configuration_semantic: "[Ar] 3d10 4s2 4p5",
      electron_affinity: 324.537,
      electronegativity_pauling: 2.96,
      ionization_energies: [1139.9, 2103, 3470, 4560, 5760, 8550, 9940, 18600],
      cpk_hex: "a62929",
      image: {
        title:
          "99.5 % pure liquid Bromine in a 4 x 1 cm big glass ampoule, cast in acrylic",
        url: "https://upload.wikimedia.org/wikipedia/commons/8/87/Bromine-ampoule.jpg",
        attribution:
          "Jurii, CC BY 3.0 <https://creativecommons.org/licenses/by/3.0>, via Wikimedia Commons, source: https://images-of-elements.com/bromine.php",
      },
      block: "p",
    },
    {
      name: "Krypton",
      appearance:
        "colorless gas, exhibiting a whitish glow in a high electric field",
      atomic_mass: 83.7982,
      boil: 119.93,
      category: "noble gas",
      density: 3.749,
      discovered_by: "William Ramsay",
      melt: 115.78,
      molar_heat: null,
      named_by: null,
      number: 36,
      period: 4,
      group: 18,
      phase: "Gas",
      source: "https://pubchem.ncbi.nlm.nih.gov/element/Krypton",
      bohr_model_image:
        "https://storage.googleapis.com/search-ar-edu/periodic-table/element_036_krypton/element_036_krypton_srp_th.png",
      bohr_model_3d:
        "https://storage.googleapis.com/search-ar-edu/periodic-table/element_036_krypton/element_036_krypton.glb",
      spectral_img: "https://en.wikipedia.org/wiki/File:Krypton_Spectrum.jpg",
      summary:
        'Krypton (from Greek:κρυπτός kryptos "the hidden one") is a chemical element with symbol Kr and atomic number 36. It is a member of group 18 (noble gases) elements. A colorless, odorless, tasteless noble gas, krypton occurs in trace amounts in the atmosphere, is isolated by fractionally distilling liquefied air, and is often used with other rare gases in fluorescent lamps.',
      symbol: "Kr",
      xpos: 18,
      ypos: 4,
      wxpos: 32,
      wypos: 4,
      shells: [2, 8, 18, 8],
      electron_configuration: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6",
      electron_configuration_semantic: "[Ar] 3d10 4s2 4p6",
      electron_affinity: -96,
      electronegativity_pauling: 3,
      ionization_energies: [
        1350.8, 2350.4, 3565, 5070, 6240, 7570, 10710, 12138, 22274, 25880,
        29700, 33800, 37700, 43100, 47500, 52200, 57100, 61800, 75800, 80400,
        85300, 90400, 96300, 101400, 111100, 116290, 282500, 296200, 311400,
        326200,
      ],
      cpk_hex: "5cb8d1",
      image: {
        title: "Vial of Glowing Ultrapure Krypton. Original size in cm: 1 x 5.",
        url: "https://upload.wikimedia.org/wikipedia/commons/9/9c/Krypton-glow.jpg",
        attribution:
          "Jurii, CC BY 3.0 <https://creativecommons.org/licenses/by/3.0>, via Wikimedia Commons, source: https://images-of-elements.com/krypton.php",
      },
      block: "p",
    },
    {
      name: "Rubidium",
      appearance: "grey white",
      atomic_mass: 85.46783,
      boil: 961,
      category: "alkali metal",
      density: 1.532,
      discovered_by: "Robert Bunsen",
      melt: 312.45,
      molar_heat: 31.06,
      named_by: null,
      number: 37,
      period: 5,
      group: 1,
      phase: "Solid",
      source: "https://pubchem.ncbi.nlm.nih.gov/element/Rubidium",
      bohr_model_image:
        "https://storage.googleapis.com/search-ar-edu/periodic-table/element_037_rubidium/element_037_rubidium_srp_th.png",
      bohr_model_3d:
        "https://storage.googleapis.com/search-ar-edu/periodic-table/element_037_rubidium/element_037_rubidium.glb",
      spectral_img: null,
      summary:
        "Rubidium is a chemical element with symbol Rb and atomic number 37. Rubidium is a soft, silvery-white metallic element of the alkali metal group, with an atomic mass of 85.4678. Elemental rubidium is highly reactive, with properties similar to those of other alkali metals, such as very rapid oxidation in air.",
      symbol: "Rb",
      xpos: 1,
      ypos: 5,
      wxpos: 1,
      wypos: 5,
      shells: [2, 8, 18, 8, 1],
      electron_configuration: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s1",
      electron_configuration_semantic: "[Kr] 5s1",
      electron_affinity: 46.884,
      electronegativity_pauling: 0.82,
      ionization_energies: [
        403, 2633, 3860, 5080, 6850, 8140, 9570, 13120, 14500, 26740,
      ],
      cpk_hex: "702eb0",
      image: {
        title: "Rubidium Metal Sample",
        url: "https://upload.wikimedia.org/wikipedia/commons/c/c9/Rb5.JPG",
        attribution:
          "Dnn87, CC BY 3.0 <https://creativecommons.org/licenses/by/3.0>, via Wikimedia Commons",
      },
      block: "s",
    },
    {
      name: "Strontium",
      appearance: null,
      atomic_mass: 87.621,
      boil: 1650,
      category: "alkaline earth metal",
      density: 2.64,
      discovered_by: "William Cruickshank (chemist)",
      melt: 1050,
      molar_heat: 26.4,
      named_by: null,
      number: 38,
      period: 5,
      group: 2,
      phase: "Solid",
      source: "https://pubchem.ncbi.nlm.nih.gov/element/Strontium",
      bohr_model_image:
        "https://storage.googleapis.com/search-ar-edu/periodic-table/element_038_strontium/element_038_strontium_srp_th.png",
      bohr_model_3d:
        "https://storage.googleapis.com/search-ar-edu/periodic-table/element_038_strontium/element_038_strontium.glb",
      spectral_img: null,
      summary:
        "Strontium is a chemical element with symbol Sr and atomic number 38. An alkaline earth metal, strontium is a soft silver-white or yellowish metallic element that is highly reactive chemically. The metal turns yellow when it is exposed to air.",
      symbol: "Sr",
      xpos: 2,
      ypos: 5,
      wxpos: 2,
      wypos: 5,
      shells: [2, 8, 18, 8, 2],
      electron_configuration: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2",
      electron_configuration_semantic: "[Kr] 5s2",
      electron_affinity: 5.023,
      electronegativity_pauling: 0.95,
      ionization_energies: [
        549.5, 1064.2, 4138, 5500, 6910, 8760, 10230, 11800, 15600, 17100,
        31270,
      ],
      cpk_hex: "00ff00",
      image: {
        title: "Strontium Pieces under Paraffin Oil.",
        url: "https://upload.wikimedia.org/wikipedia/commons/8/84/Strontium-1.jpg",
        attribution:
          "Jurii, CC BY 3.0 <https://creativecommons.org/licenses/by/3.0>, via Wikimedia Commons, source: https://images-of-elements.com/strontium.php",
      },
      block: "s",
    },
    {
      name: "Yttrium",
      appearance: "silvery white",
      atomic_mass: 88.905842,
      boil: 3203,
      category: "transition metal",
      density: 4.472,
      discovered_by: "Johan Gadolin",
      melt: 1799,
      molar_heat: 26.53,
      named_by: null,
      number: 39,
      period: 5,
      group: 3,
      phase: "Solid",
      source: "https://pubchem.ncbi.nlm.nih.gov/element/Yttrium",
      bohr_model_image:
        "https://storage.googleapis.com/search-ar-edu/periodic-table/element_039_yttrium/element_039_yttrium_srp_th.png",
      bohr_model_3d:
        "https://storage.googleapis.com/search-ar-edu/periodic-table/element_039_yttrium/element_039_yttrium.glb",
      spectral_img: null,
      summary:
        'Yttrium is a chemical element with symbol Y and atomic number 39. It is a silvery-metallic transition metal chemically similar to the lanthanides and it has often been classified as a "rare earth element". Yttrium is almost always found combined with the lanthanides in rare earth minerals and is never found in nature as a free element.',
      symbol: "Y",
      xpos: 3,
      ypos: 5,
      wxpos: 17,
      wypos: 5,
      shells: [2, 8, 18, 9, 2],
      electron_configuration: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d1",
      electron_configuration_semantic: "[Kr] 4d1 5s2",
      electron_affinity: 29.6,
      electronegativity_pauling: 1.22,
      ionization_energies: [
        600, 1180, 1980, 5847, 7430, 8970, 11190, 12450, 14110, 18400, 19900,
        36090,
      ],
      cpk_hex: "94ffff",
      image: {
        title: "6,21g Yttrium, Reinheit mindestens 99%.",
        url: "https://upload.wikimedia.org/wikipedia/commons/9/90/Piece_of_Yttrium.jpg",
        attribution:
          "Jan Anskeit, CC BY-SA 4.0 <https://creativecommons.org/licenses/by-sa/4.0>, via Wikimedia Commons",
      },
      block: "d",
    },
    {
      name: "Zirconium",
      appearance: "silvery white",
      atomic_mass: 91.2242,
      boil: 4650,
      category: "transition metal",
      density: 6.52,
      discovered_by: "Martin Heinrich Klaproth",
      melt: 2128,
      molar_heat: 25.36,
      named_by: null,
      number: 40,
      period: 5,
      group: 4,
      phase: "Solid",
      source: "https://pubchem.ncbi.nlm.nih.gov/element/Zirconium",
      bohr_model_image:
        "https://storage.googleapis.com/search-ar-edu/periodic-table/element_040_zirconium/element_040_zirconium_srp_th.png",
      bohr_model_3d:
        "https://storage.googleapis.com/search-ar-edu/periodic-table/element_040_zirconium/element_040_zirconium.glb",
      spectral_img: null,
      summary:
        'Zirconium is a chemical element with symbol Zr and atomic number 40. The name of zirconium is taken from the name of the mineral zircon, the most important source of zirconium. The word zircon comes from the Persian word zargun زرگون, meaning "gold-colored".',
      symbol: "Zr",
      xpos: 4,
      ypos: 5,
      wxpos: 18,
      wypos: 5,
      shells: [2, 8, 18, 10, 2],
      electron_configuration: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d2",
      electron_configuration_semantic: "[Kr] 4d2 5s2",
      electron_affinity: 41.806,
      electronegativity_pauling: 1.33,
      ionization_energies: [640.1, 1270, 2218, 3313, 7752, 9500],
      cpk_hex: "94e0e0",
      image: {
        title: "Two pieces of Zirconium, 1 cm each.",
        url: "https://upload.wikimedia.org/wikipedia/commons/1/1d/Zirconium-pieces.jpg",
        attribution:
          "Jurii, CC BY 3.0 <https://creativecommons.org/licenses/by/3.0>, via Wikimedia Commons, source: https://images-of-elements.com/zirconium.php",
      },
      block: "d",
    },
    {
      name: "Niobium",
      appearance: "gray metallic, bluish when oxidized",
      atomic_mass: 92.906372,
      boil: 5017,
      category: "transition metal",
      density: 8.57,
      discovered_by: "Charles Hatchett",
      melt: 2750,
      molar_heat: 24.6,
      named_by: null,
      number: 41,
      period: 5,
      group: 5,
      phase: "Solid",
      source: "https://pubchem.ncbi.nlm.nih.gov/element/Niobium",
      bohr_model_image:
        "https://storage.googleapis.com/search-ar-edu/periodic-table/element_041_niobium/element_041_niobium_srp_th.png",
      bohr_model_3d:
        "https://storage.googleapis.com/search-ar-edu/periodic-table/element_041_niobium/element_041_niobium.glb",
      spectral_img: null,
      summary:
        "Niobium, formerly columbium, is a chemical element with symbol Nb (formerly Cb) and atomic number 41. It is a soft, grey, ductile transition metal, which is often found in the pyrochlore mineral, the main commercial source for niobium, and columbite. The name comes from Greek mythology:Niobe, daughter of Tantalus since it is so similar to tantalum.",
      symbol: "Nb",
      xpos: 5,
      ypos: 5,
      wxpos: 19,
      wypos: 5,
      shells: [2, 8, 18, 12, 1],
      electron_configuration: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s1 4d4",
      electron_configuration_semantic: "[Kr] 4d4 5s1",
      electron_affinity: 88.516,
      electronegativity_pauling: 1.6,
      ionization_energies: [652.1, 1380, 2416, 3700, 4877, 9847, 12100],
      cpk_hex: "73c2c9",
      image: {
        title: "Niobium strips",
        url: "https://upload.wikimedia.org/wikipedia/commons/c/c2/Niobium_strips.JPG",
        attribution:
          "Mauro Cateb, CC BY-SA 3.0 <https://creativecommons.org/licenses/by-sa/3.0>, via Wikimedia Commons",
      },
      block: "d",
    },
    {
      name: "Molybdenum",
      appearance: "gray metallic",
      atomic_mass: 95.951,
      boil: 4912,
      category: "transition metal",
      density: 10.28,
      discovered_by: "Carl Wilhelm Scheele",
      melt: 2896,
      molar_heat: 24.06,
      named_by: null,
      number: 42,
      period: 5,
      group: 6,
      phase: "Solid",
      source: "https://pubchem.ncbi.nlm.nih.gov/element/Molybdenum",
      bohr_model_image:
        "https://storage.googleapis.com/search-ar-edu/periodic-table/element_042_molybdenum/element_042_molybdenum_srp_th.png",
      bohr_model_3d:
        "https://storage.googleapis.com/search-ar-edu/periodic-table/element_042_molybdenum/element_042_molybdenum.glb",
      spectral_img: null,
      summary:
        "Molybdenum is a chemical element with symbol Mo and atomic number 42. The name is from Neo-Latin molybdaenum, from Ancient Greek Μόλυβδος molybdos, meaning lead, since its ores were confused with lead ores. Molybdenum minerals have been known throughout history, but the element was discovered (in the sense of differentiating it as a new entity from the mineral salts of other metals) in 1778 by Carl Wilhelm Scheele.",
      symbol: "Mo",
      xpos: 6,
      ypos: 5,
      wxpos: 20,
      wypos: 5,
      shells: [2, 8, 18, 13, 1],
      electron_configuration: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s1 4d5",
      electron_configuration_semantic: "[Kr] 4d5 5s1",
      electron_affinity: 72.1,
      electronegativity_pauling: 2.16,
      ionization_energies: [
        684.3, 1560, 2618, 4480, 5257, 6640.8, 12125, 13860, 15835, 17980,
        20190, 22219, 26930, 29196, 52490, 55e3, 61400, 67700, 74e3, 80400,
        87e3, 93400, 98420, 104400, 121900, 127700, 133800, 139800, 148100,
        154500,
      ],
      cpk_hex: "54b5b5",
      image: {
        title:
          "99.9 Pure Molybdenum Crystal, about 2 x 3 cm, with anodisation color",
        url: "https://upload.wikimedia.org/wikipedia/commons/f/f0/Molybdenum.jpg",
        attribution:
          "Jurii, CC BY 3.0 <https://creativecommons.org/licenses/by/3.0>, via Wikimedia Commons, source: https://images-of-elements.com/molybdenum.php",
      },
      block: "d",
    },
    {
      name: "Technetium",
      appearance: "shiny gray metal",
      atomic_mass: 98,
      boil: 4538,
      category: "transition metal",
      density: 11,
      discovered_by: "Emilio Segrè",
      melt: 2430,
      molar_heat: 24.27,
      named_by: null,
      number: 43,
      period: 5,
      group: 7,
      phase: "Solid",
      source: "https://pubchem.ncbi.nlm.nih.gov/element/Technetium",
      bohr_model_image:
        "https://storage.googleapis.com/search-ar-edu/periodic-table/element_043_technetium/element_043_technetium_srp_th.png",
      bohr_model_3d:
        "https://storage.googleapis.com/search-ar-edu/periodic-table/element_043_technetium/element_043_technetium.glb",
      spectral_img: null,
      summary:
        "Technetium (/tɛkˈniːʃiəm/) is a chemical element with symbol Tc and atomic number 43. It is the element with the lowest atomic number in the periodic table that has no stable isotopes:every form of it is radioactive. Nearly all technetium is produced synthetically, and only minute amounts are found in nature.",
      symbol: "Tc",
      xpos: 7,
      ypos: 5,
      wxpos: 21,
      wypos: 5,
      shells: [2, 8, 18, 13, 2],
      electron_configuration: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d5",
      electron_configuration_semantic: "[Kr] 4d5 5s2",
      electron_affinity: 53,
      electronegativity_pauling: 1.9,
      ionization_energies: [702, 1470, 2850],
      cpk_hex: "3b9e9e",
      image: {
        title:
          "Technetium Sample inside a sealed glass ampoule, filled with argon gas. 6x1 mm goldfoil covered with 99Tc powder (electroplated).",
        url: "https://upload.wikimedia.org/wikipedia/commons/a/ab/Technetium-sample-cropped.jpg",
        attribution:
          "GFDL, CC BY-SA 4.0 <https://creativecommons.org/licenses/by-sa/4.0>, via Wikimedia Commons",
      },
      block: "d",
    },
    {
      name: "Ruthenium",
      appearance: "silvery white metallic",
      atomic_mass: 101.072,
      boil: 4423,
      category: "transition metal",
      density: 12.45,
      discovered_by: "Karl Ernst Claus",
      melt: 2607,
      molar_heat: 24.06,
      named_by: null,
      number: 44,
      period: 5,
      group: 8,
      phase: "Solid",
      source: "https://pubchem.ncbi.nlm.nih.gov/element/Ruthenium",
      bohr_model_image:
        "https://storage.googleapis.com/search-ar-edu/periodic-table/element_044_ruthenium/element_044_ruthenium_srp_th.png",
      bohr_model_3d:
        "https://storage.googleapis.com/search-ar-edu/periodic-table/element_044_ruthenium/element_044_ruthenium.glb",
      spectral_img: null,
      summary:
        "Ruthenium is a chemical element with symbol Ru and atomic number 44. It is a rare transition metal belonging to the platinum group of the periodic table. Like the other metals of the platinum group, ruthenium is inert to most other chemicals.",
      symbol: "Ru",
      xpos: 8,
      ypos: 5,
      wxpos: 22,
      wypos: 5,
      shells: [2, 8, 18, 15, 1],
      electron_configuration: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s1 4d7",
      electron_configuration_semantic: "[Kr] 4d7 5s1",
      electron_affinity: 100.96,
      electronegativity_pauling: 2.2,
      ionization_energies: [710.2, 1620, 2747],
      cpk_hex: "248f8f",
      image: {
        title: "Ruthenium Crystal, 0.6 grams, 0.6 x 1.3 cm size",
        url: "https://upload.wikimedia.org/wikipedia/commons/a/a8/Ruthenium_crystal.jpg",
        attribution:
          "Hi-Res Images ofChemical Elements, CC BY 3.0 <https://creativecommons.org/licenses/by/3.0>, via Wikimedia Commons, source: https://images-of-elements.com/ruthenium.php",
      },
      block: "d",
    },
    {
      name: "Rhodium",
      appearance: "silvery white metallic",
      atomic_mass: 102.905502,
      boil: 3968,
      category: "transition metal",
      density: 12.41,
      discovered_by: "William Hyde Wollaston",
      melt: 2237,
      molar_heat: 24.98,
      named_by: null,
      number: 45,
      period: 5,
      group: 9,
      phase: "Solid",
      source: "https://pubchem.ncbi.nlm.nih.gov/element/Rhodium",
      bohr_model_image:
        "https://storage.googleapis.com/search-ar-edu/periodic-table/element_045_rhodium/element_045_rhodium_srp_th.png",
      bohr_model_3d:
        "https://storage.googleapis.com/search-ar-edu/periodic-table/element_045_rhodium/element_045_rhodium.glb",
      spectral_img: null,
      summary:
        "Rhodium is a chemical element with symbol Rh and atomic number 45. It is a rare, silvery-white, hard, and chemically inert transition metal. It is a member of the platinum group.",
      symbol: "Rh",
      xpos: 9,
      ypos: 5,
      wxpos: 23,
      wypos: 5,
      shells: [2, 8, 18, 16, 1],
      electron_configuration: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s1 4d8",
      electron_configuration_semantic: "[Kr] 4d8 5s1",
      electron_affinity: 110.27,
      electronegativity_pauling: 2.28,
      ionization_energies: [719.7, 1740, 2997],
      cpk_hex: "0a7d8c",
      image: {
        title: "Pure Rhodium Bead, 1 gram. Original size in cm: 0.5",
        url: "https://upload.wikimedia.org/wikipedia/commons/5/54/Rhodium_%28Rh%29.jpg",
        attribution:
          "Hi-Res Images ofChemical Elements, CC BY 3.0 <https://creativecommons.org/licenses/by/3.0>, via Wikimedia Commons, source: https://images-of-elements.com/rhodium.php",
      },
      block: "d",
    },
    {
      name: "Palladium",
      appearance: "silvery white",
      atomic_mass: 106.421,
      boil: 3236,
      category: "transition metal",
      density: 12.023,
      discovered_by: "William Hyde Wollaston",
      melt: 1828.05,
      molar_heat: 25.98,
      named_by: null,
      number: 46,
      period: 5,
      group: 10,
      phase: "Solid",
      source: "https://pubchem.ncbi.nlm.nih.gov/element/Palladium",
      bohr_model_image:
        "https://storage.googleapis.com/search-ar-edu/periodic-table/element_046_palladium/element_046_palladium_srp_th.png",
      bohr_model_3d:
        "https://storage.googleapis.com/search-ar-edu/periodic-table/element_046_palladium/element_046_palladium.glb",
      spectral_img: null,
      summary:
        "Palladium is a chemical element with symbol Pd and atomic number 46. It is a rare and lustrous silvery-white metal discovered in 1803 by William Hyde Wollaston. He named it after the asteroid Pallas, which was itself named after the epithet of the Greek goddess Athena, acquired by her when she slew Pallas.",
      symbol: "Pd",
      xpos: 10,
      ypos: 5,
      wxpos: 24,
      wypos: 5,
      shells: [2, 8, 18, 18],
      electron_configuration: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 4d10",
      electron_configuration_semantic: "[Kr] 4d10",
      electron_affinity: 54.24,
      electronegativity_pauling: 2.2,
      ionization_energies: [804.4, 1870, 3177],
      cpk_hex: "006985",
      image: {
        title: "Palladium Crystal, about 1 gram. Original size in cm: 0.5 x 1",
        url: "https://upload.wikimedia.org/wikipedia/commons/d/d7/Palladium_%2846_Pd%29.jpg",
        attribution:
          "Hi-Res Images ofChemical Elements, CC BY 3.0 <https://creativecommons.org/licenses/by/3.0>, via Wikimedia Commons, source: https://images-of-elements.com/palladium.php",
      },
      block: "d",
    },
    {
      name: "Silver",
      appearance: "lustrous white metal",
      atomic_mass: 107.86822,
      boil: 2435,
      category: "transition metal",
      density: 10.49,
      discovered_by: "unknown, before 5000 BC",
      melt: 1234.93,
      molar_heat: 25.35,
      named_by: null,
      number: 47,
      period: 5,
      group: 11,
      phase: "Solid",
      source: "https://pubchem.ncbi.nlm.nih.gov/element/Silver",
      bohr_model_image:
        "https://storage.googleapis.com/search-ar-edu/periodic-table/element_047_silver/element_047_silver_srp_th.png",
      bohr_model_3d:
        "https://storage.googleapis.com/search-ar-edu/periodic-table/element_047_silver/element_047_silver.glb",
      spectral_img: null,
      summary:
        'Silver is a chemical element with symbol Ag (Greek:άργυρος árguros, Latin:argentum, both from the Indo-European root *h₂erǵ- for "grey" or "shining") and atomic number 47. A soft, white, lustrous transition metal, it possesses the highest electrical conductivity, thermal conductivity and reflectivity of any metal. The metal occurs naturally in its pure, free form (native silver), as an alloy with gold and other metals, and in minerals such as argentite and chlorargyrite.',
      symbol: "Ag",
      xpos: 11,
      ypos: 5,
      wxpos: 25,
      wypos: 5,
      shells: [2, 8, 18, 18, 1],
      electron_configuration: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s1 4d10",
      electron_configuration_semantic: "[Kr] 4d10 5s1",
      electron_affinity: 125.862,
      electronegativity_pauling: 1.93,
      ionization_energies: [731, 2070, 3361],
      cpk_hex: "c0c0c0",
      image: {
        title: "Natural silver nugget, 1 cm long.",
        url: "https://upload.wikimedia.org/wikipedia/commons/e/e4/Silver-nugget.jpg",
        attribution:
          "Jurii, CC BY 3.0 <https://creativecommons.org/licenses/by/3.0>, via Wikimedia Commons, source: http://images-of-elements.com/silver.php",
      },
      block: "d",
    },
    {
      name: "Cadmium",
      appearance: "silvery bluish-gray metallic",
      atomic_mass: 112.4144,
      boil: 1040,
      category: "transition metal",
      density: 8.65,
      discovered_by: "Karl Samuel Leberecht Hermann",
      melt: 594.22,
      molar_heat: 26.02,
      named_by: "Isotopes of cadmium",
      number: 48,
      period: 5,
      group: 12,
      phase: "Solid",
      source: "https://pubchem.ncbi.nlm.nih.gov/element/Cadmium",
      bohr_model_image:
        "https://storage.googleapis.com/search-ar-edu/periodic-table/element_048_cadmium/element_048_cadmium_srp_th.png",
      bohr_model_3d:
        "https://storage.googleapis.com/search-ar-edu/periodic-table/element_048_cadmium/element_048_cadmium.glb",
      spectral_img: null,
      summary:
        "Cadmium is a chemical element with symbol Cd and atomic number 48. This soft, bluish-white metal is chemically similar to the two other stable metals in group 12, zinc and mercury. Like zinc, it prefers oxidation state +2 in most of its compounds and like mercury it shows a low melting point compared to transition metals.",
      symbol: "Cd",
      xpos: 12,
      ypos: 5,
      wxpos: 26,
      wypos: 5,
      shells: [2, 8, 18, 18, 2],
      electron_configuration: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10",
      electron_configuration_semantic: "[Kr] 4d10 5s2",
      electron_affinity: -68,
      electronegativity_pauling: 1.69,
      ionization_energies: [867.8, 1631.4, 3616],
      cpk_hex: "ffd98f",
      image: {
        title: "48 Cd Cadmium",
        url: "https://images-of-elements.com/cadmium-4.jpg",
        attribution:
          "Chemical Elments A Virtual Museum under a Creative Commons Attribution 3.0 Unported License, source: https://images-of-elements.com/cadmium.php",
      },
      block: "d",
    },
    {
      name: "Indium",
      appearance: "silvery lustrous gray",
      atomic_mass: 114.8181,
      boil: 2345,
      category: "post-transition metal",
      density: 7.31,
      discovered_by: "Ferdinand Reich",
      melt: 429.7485,
      molar_heat: 26.74,
      named_by: null,
      number: 49,
      period: 5,
      group: 13,
      phase: "Solid",
      source: "https://pubchem.ncbi.nlm.nih.gov/element/Indium",
      bohr_model_image:
        "https://storage.googleapis.com/search-ar-edu/periodic-table/element_049_indium/element_049_indium_srp_th.png",
      bohr_model_3d:
        "https://storage.googleapis.com/search-ar-edu/periodic-table/element_049_indium/element_049_indium.glb",
      spectral_img: null,
      summary:
        "Indium is a chemical element with symbol In and atomic number 49. It is a post-transition metallic element that is rare in Earth's crust. The metal is very soft, malleable and easily fusible, with a melting point higher than sodium, but lower than lithium or tin.",
      symbol: "In",
      xpos: 13,
      ypos: 5,
      wxpos: 27,
      wypos: 5,
      shells: [2, 8, 18, 18, 3],
      electron_configuration: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p1",
      electron_configuration_semantic: "[Kr] 4d10 5s2 5p1",
      electron_affinity: 37.043,
      electronegativity_pauling: 1.78,
      ionization_energies: [558.3, 1820.7, 2704, 5210],
      cpk_hex: "a67573",
      image: {
        title: "1.5 x 1.5 cm liquid indium",
        url: "https://images-of-elements.com/indium-2.jpg",
        attribution:
          "Jurii, CC BY 3.0 <https://creativecommons.org/licenses/by/3.0>, via Wikimedia Commons, source: http://images-of-elements.com/indium.php",
      },
      block: "p",
    },
    {
      name: "Tin",
      appearance: "silvery-white (beta, β) or gray (alpha, α)",
      atomic_mass: 118.7107,
      boil: 2875,
      category: "post-transition metal",
      density: 7.365,
      discovered_by: "unknown, before 3500 BC",
      melt: 505.08,
      molar_heat: 27.112,
      named_by: null,
      number: 50,
      period: 5,
      group: 14,
      phase: "Solid",
      source: "https://pubchem.ncbi.nlm.nih.gov/element/Tin",
      bohr_model_image:
        "https://storage.googleapis.com/search-ar-edu/periodic-table/element_050_tin/element_050_tin_srp_th.png",
      bohr_model_3d:
        "https://storage.googleapis.com/search-ar-edu/periodic-table/element_050_tin/element_050_tin.glb",
      spectral_img: null,
      summary:
        "Tin is a chemical element with the symbol Sn (for Latin:stannum) and atomic number 50. It is a main group metal in group 14 of the periodic table. Tin shows a chemical similarity to both neighboring group-14 elements, germanium and lead, and has two possible oxidation states, +2 and the slightly more stable +4.",
      symbol: "Sn",
      xpos: 14,
      ypos: 5,
      wxpos: 28,
      wypos: 5,
      shells: [2, 8, 18, 18, 4],
      electron_configuration: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p2",
      electron_configuration_semantic: "[Kr] 4d10 5s2 5p2",
      electron_affinity: 107.2984,
      electronegativity_pauling: 1.96,
      ionization_energies: [708.6, 1411.8, 2943, 3930.3, 7456],
      cpk_hex: "668080",
      image: {
        title: "Tin blob",
        url: "https://upload.wikimedia.org/wikipedia/commons/6/6a/Tin-2.jpg",
        attribution:
          "Jurii, CC BY 3.0 <https://creativecommons.org/licenses/by/3.0>, via Wikimedia Commons, source: http://images-of-elements.com/tin.php",
      },
      block: "p",
    },
    {
      name: "Antimony",
      appearance: "silvery lustrous gray",
      atomic_mass: 121.7601,
      boil: 1908,
      category: "metalloid",
      density: 6.697,
      discovered_by: "unknown, before 3000 BC",
      melt: 903.78,
      molar_heat: 25.23,
      named_by: null,
      number: 51,
      period: 5,
      group: 15,
      phase: "Solid",
      source: "https://pubchem.ncbi.nlm.nih.gov/element/Antimony",
      bohr_model_image:
        "https://storage.googleapis.com/search-ar-edu/periodic-table/element_051_antimony/element_051_antimony_srp_th.png",
      bohr_model_3d:
        "https://storage.googleapis.com/search-ar-edu/periodic-table/element_051_antimony/element_051_antimony.glb",
      spectral_img: null,
      summary:
        "Antimony is a chemical element with symbol Sb (from Latin:stibium) and atomic number 51. A lustrous gray metalloid, it is found in nature mainly as the sulfide mineral stibnite (Sb2S3). Antimony compounds have been known since ancient times and were used for cosmetics; metallic antimony was also known, but it was erroneously identified as lead upon its discovery.",
      symbol: "Sb",
      xpos: 15,
      ypos: 5,
      wxpos: 29,
      wypos: 5,
      shells: [2, 8, 18, 18, 5],
      electron_configuration: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p3",
      electron_configuration_semantic: "[Kr] 4d10 5s2 5p3",
      electron_affinity: 101.059,
      electronegativity_pauling: 2.05,
      ionization_energies: [834, 1594.9, 2440, 4260, 5400, 10400],
      cpk_hex: "9e63b5",
      image: {
        title: "Antimony crystal, 2 grams, 1 cm",
        url: "https://upload.wikimedia.org/wikipedia/commons/5/5c/Antimony-4.jpg",
        attribution:
          "Unknown authorUnknown author, CC BY 3.0 <https://creativecommons.org/licenses/by/3.0>, via Wikimedia Commons, source: https://images-of-elements.com/antimony.php",
      },
      block: "p",
    },
    {
      name: "Tellurium",
      appearance: null,
      atomic_mass: 127.603,
      boil: 1261,
      category: "metalloid",
      density: 6.24,
      discovered_by: "Franz-Joseph Müller von Reichenstein",
      melt: 722.66,
      molar_heat: 25.73,
      named_by: null,
      number: 52,
      period: 5,
      group: 16,
      phase: "Solid",
      source: "https://pubchem.ncbi.nlm.nih.gov/element/Tellurium",
      bohr_model_image:
        "https://storage.googleapis.com/search-ar-edu/periodic-table/element_052_tellurium/element_052_tellurium_srp_th.png",
      bohr_model_3d:
        "https://storage.googleapis.com/search-ar-edu/periodic-table/element_052_tellurium/element_052_tellurium.glb",
      spectral_img: null,
      summary:
        "Tellurium is a chemical element with symbol Te and atomic number 52. It is a brittle, mildly toxic, rare, silver-white metalloid. Tellurium is chemically related to selenium and sulfur.",
      symbol: "Te",
      xpos: 16,
      ypos: 5,
      wxpos: 30,
      wypos: 5,
      shells: [2, 8, 18, 18, 6],
      electron_configuration: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p4",
      electron_configuration_semantic: "[Kr] 4d10 5s2 5p4",
      electron_affinity: 190.161,
      electronegativity_pauling: 2.1,
      ionization_energies: [869.3, 1790, 2698, 3610, 5668, 6820, 13200],
      cpk_hex: "d47a00",
      image: {
        title: "Metallic tellurium, diameter 3.5 cm",
        url: "https://upload.wikimedia.org/wikipedia/commons/c/c1/Tellurium2.jpg",
        attribution:
          "Unknown authorUnknown author, CC BY 3.0 <https://creativecommons.org/licenses/by/3.0>, via Wikimedia Commons, source: https://images-of-elements.com/tellurium.php",
      },
      block: "p",
    },
    {
      name: "Iodine",
      appearance: "lustrous metallic gray, violet as a gas",
      atomic_mass: 126.904473,
      boil: 457.4,
      category: "diatomic nonmetal",
      density: 4.933,
      discovered_by: "Bernard Courtois",
      melt: 386.85,
      molar_heat: null,
      named_by: null,
      number: 53,
      period: 5,
      group: 17,
      phase: "Solid",
      source: "https://pubchem.ncbi.nlm.nih.gov/element/Iodine",
      bohr_model_image:
        "https://storage.googleapis.com/search-ar-edu/periodic-table/element_053_iodine/element_053_iodine_srp_th.png",
      bohr_model_3d:
        "https://storage.googleapis.com/search-ar-edu/periodic-table/element_053_iodine/element_053_iodine.glb",
      spectral_img: null,
      summary:
        "Iodine is a chemical element with symbol I and atomic number 53. The name is from Greek ἰοειδής ioeidēs, meaning violet or purple, due to the color of iodine vapor. Iodine and its compounds are primarily used in nutrition, and industrially in the production of acetic acid and certain polymers.",
      symbol: "I",
      xpos: 17,
      ypos: 5,
      wxpos: 31,
      wypos: 5,
      shells: [2, 8, 18, 18, 7],
      electron_configuration: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p5",
      electron_configuration_semantic: "[Kr] 4d10 5s2 5p5",
      electron_affinity: 295.1531,
      electronegativity_pauling: 2.66,
      ionization_energies: [1008.4, 1845.9, 3180],
      cpk_hex: "940094",
      image: {
        title: "Iodine Sample",
        url: "https://upload.wikimedia.org/wikipedia/commons/c/c2/Iodine-sample.jpg",
        attribution: "Benjah-bmm27, Public domain, via Wikimedia Commons",
      },
      block: "p",
    },
    {
      name: "Xenon",
      appearance:
        "colorless gas, exhibiting a blue glow when placed in a high voltage electric field",
      atomic_mass: 131.2936,
      boil: 165.051,
      category: "noble gas",
      density: 5.894,
      discovered_by: "William Ramsay",
      melt: 161.4,
      molar_heat: null,
      named_by: null,
      number: 54,
      period: 5,
      group: 18,
      phase: "Gas",
      source: "https://pubchem.ncbi.nlm.nih.gov/element/Xenon",
      bohr_model_image:
        "https://storage.googleapis.com/search-ar-edu/periodic-table/element_054_xenon/element_054_xenon_srp_th.png",
      bohr_model_3d:
        "https://storage.googleapis.com/search-ar-edu/periodic-table/element_054_xenon/element_054_xenon.glb",
      spectral_img: "https://en.wikipedia.org/wiki/File:Xenon_Spectrum.jpg",
      summary:
        "Xenon is a chemical element with symbol Xe and atomic number 54. It is a colorless, dense, odorless noble gas, that occurs in the Earth's atmosphere in trace amounts. Although generally unreactive, xenon can undergo a few chemical reactions such as the formation of xenon hexafluoroplatinate, the first noble gas compound to be synthesized.",
      symbol: "Xe",
      xpos: 18,
      ypos: 5,
      wxpos: 32,
      wypos: 5,
      shells: [2, 8, 18, 18, 8],
      electron_configuration: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6",
      electron_configuration_semantic: "[Kr] 4d10 5s2 5p6",
      electron_affinity: -77,
      electronegativity_pauling: 2.6,
      ionization_energies: [1170.4, 2046.4, 3099.4],
      cpk_hex: "429eb0",
      image: {
        title: "Vial of glowing ultrapure xenon. Original size in cm: 1 x 5",
        url: "https://upload.wikimedia.org/wikipedia/commons/5/5d/Xenon-glow.jpg",
        attribution:
          "Jurii, CC BY 3.0 <https://creativecommons.org/licenses/by/3.0>, via Wikimedia Commons, source: https://images-of-elements.com/xenon.php",
      },
      block: "p",
    },
    {
      name: "Cesium",
      appearance: "silvery gold",
      atomic_mass: 132.905451966,
      boil: 944,
      category: "alkali metal",
      density: 1.93,
      discovered_by: "Robert Bunsen",
      melt: 301.7,
      molar_heat: 32.21,
      named_by: null,
      number: 55,
      period: 6,
      group: 1,
      phase: "Solid",
      source: "https://pubchem.ncbi.nlm.nih.gov/element/Cesium",
      bohr_model_image:
        "https://storage.googleapis.com/search-ar-edu/periodic-table/element_055_cesium/element_055_cesium_srp_th.png",
      bohr_model_3d:
        "https://storage.googleapis.com/search-ar-edu/periodic-table/element_055_cesium/element_055_cesium.glb",
      spectral_img: null,
      summary:
        "Caesium or cesium is a chemical element with symbol Cs and atomic number 55. It is a soft, silvery-gold alkali metal with a melting point of 28 °C (82 °F), which makes it one of only five elemental metals that are liquid at or near room temperature. Caesium is an alkali metal and has physical and chemical properties similar to those of rubidium and potassium.",
      symbol: "Cs",
      xpos: 1,
      ypos: 6,
      wxpos: 1,
      wypos: 6,
      shells: [2, 8, 18, 18, 8, 1],
      electron_configuration:
        "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s1",
      electron_configuration_semantic: "[Xe] 6s1",
      electron_affinity: 45.505,
      electronegativity_pauling: 0.79,
      ionization_energies: [375.7, 2234.3, 3400],
      cpk_hex: "57178f",
      image: {
        title: "Cesium/Caesium metal",
        url: "https://upload.wikimedia.org/wikipedia/commons/3/3d/Cesium.jpg",
        attribution:
          "Dnn87 Contact email: Dnn87yahoo.dk, CC BY-SA 3.0 <https://creativecommons.org/licenses/by-sa/3.0>, via Wikimedia Commons",
      },
      block: "s",
    },
    {
      name: "Barium",
      appearance: null,
      atomic_mass: 137.3277,
      boil: 2118,
      category: "alkaline earth metal",
      density: 3.51,
      discovered_by: "Carl Wilhelm Scheele",
      melt: 1e3,
      molar_heat: 28.07,
      named_by: null,
      number: 56,
      period: 6,
      group: 2,
      phase: "Solid",
      source: "https://pubchem.ncbi.nlm.nih.gov/element/Barium",
      bohr_model_image:
        "https://storage.googleapis.com/search-ar-edu/periodic-table/element_056_barium/element_056_barium_srp_th.png",
      bohr_model_3d:
        "https://storage.googleapis.com/search-ar-edu/periodic-table/element_056_barium/element_056_barium.glb",
      spectral_img: null,
      summary:
        "Barium is a chemical element with symbol Ba and atomic number 56. It is the fifth element in Group 2, a soft silvery metallic alkaline earth metal. Because of its high chemical reactivity barium is never found in nature as a free element.",
      symbol: "Ba",
      xpos: 2,
      ypos: 6,
      wxpos: 2,
      wypos: 6,
      shells: [2, 8, 18, 18, 8, 2],
      electron_configuration:
        "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2",
      electron_configuration_semantic: "[Xe] 6s2",
      electron_affinity: 13.954,
      electronegativity_pauling: 0.89,
      ionization_energies: [502.9, 965.2, 3600],
      cpk_hex: "00c900",
      image: {
        title:
          "1.5 Grams Barium with a Grey Oxide Layer under Argon. Original size in cm: 0.7 x 1",
        url: "https://upload.wikimedia.org/wikipedia/commons/f/f5/Barium_%2856_Ba%29.jpg",
        attribution:
          "Hi-Res Images ofChemical Elements, CC BY 3.0 <https://creativecommons.org/licenses/by/3.0>, via Wikimedia Commons, source: https://images-of-elements.com/barium.php",
      },
      block: "s",
    },
    {
      name: "Lanthanum",
      appearance: "silvery white",
      atomic_mass: 138.905477,
      boil: 3737,
      category: "lanthanide",
      density: 6.162,
      discovered_by: "Carl Gustaf Mosander",
      melt: 1193,
      molar_heat: 27.11,
      named_by: null,
      number: 57,
      period: 6,
      group: 3,
      phase: "Solid",
      source: "https://pubchem.ncbi.nlm.nih.gov/element/Lanthanum",
      bohr_model_image:
        "https://storage.googleapis.com/search-ar-edu/periodic-table/element_057_lanthanum/element_057_lanthanum_srp_th.png",
      bohr_model_3d:
        "https://storage.googleapis.com/search-ar-edu/periodic-table/element_057_lanthanum/element_057_lanthanum.glb",
      spectral_img: null,
      summary:
        "Lanthanum is a soft, ductile, silvery-white metallic chemical element with symbol La and atomic number 57. It tarnishes rapidly when exposed to air and is soft enough to be cut with a knife. It gave its name to the lanthanide series, a group of 15 similar elements between lanthanum and lutetium in the periodic table:it is also sometimes considered the first element of the 6th-period transition metals.",
      symbol: "La",
      xpos: 3,
      ypos: 9,
      wxpos: 3,
      wypos: 6,
      shells: [2, 8, 18, 18, 9, 2],
      electron_configuration:
        "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 5d1",
      electron_configuration_semantic: "[Xe] 5d16s2",
      electron_affinity: 53,
      electronegativity_pauling: 1.1,
      ionization_energies: [538.1, 1067, 1850.3, 4819, 5940],
      cpk_hex: "70d4ff",
      image: {
        title: "1 cm Big Piece of Pure Lanthanum",
        url: "https://upload.wikimedia.org/wikipedia/commons/f/f7/Lanthanum.jpg",
        attribution:
          "Jurii, CC BY 3.0 <https://creativecommons.org/licenses/by/3.0>, via Wikimedia Commons, source: https://images-of-elements.com/lanthanum.php",
      },
      block: "f",
    },
    {
      name: "Cerium",
      appearance: "silvery white",
      atomic_mass: 140.1161,
      boil: 3716,
      category: "lanthanide",
      density: 6.77,
      discovered_by: "Martin Heinrich Klaproth",
      melt: 1068,
      molar_heat: 26.94,
      named_by: null,
      number: 58,
      period: 6,
      group: 3,
      phase: "Solid",
      source: "https://pubchem.ncbi.nlm.nih.gov/element/Cerium",
      bohr_model_image:
        "https://storage.googleapis.com/search-ar-edu/periodic-table/element_058_cerium/element_058_cerium_srp_th.png",
      bohr_model_3d:
        "https://storage.googleapis.com/search-ar-edu/periodic-table/element_058_cerium/element_058_cerium.glb",
      spectral_img: null,
      summary:
        "Cerium is a chemical element with symbol Ce and atomic number 58. It is a soft, silvery, ductile metal which easily oxidizes in air. Cerium was named after the dwarf planet Ceres (itself named after the Roman goddess of agriculture).",
      symbol: "Ce",
      xpos: 4,
      ypos: 9,
      wxpos: 4,
      wypos: 6,
      shells: [2, 8, 18, 19, 9, 2],
      electron_configuration:
        "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 5d1 4f1",
      electron_configuration_semantic: "[Xe] 4f1 5d1 6s2",
      electron_affinity: 55,
      electronegativity_pauling: 1.12,
      ionization_energies: [534.4, 1050, 1949, 3547, 6325, 7490],
      cpk_hex: "ffffc7",
      image: {
        title:
          "Ultrapure Cerium under Argon, 1.5 grams. Original size in cm: 1 x 1",
        url: "https://upload.wikimedia.org/wikipedia/commons/0/0d/Cerium2.jpg",
        attribution:
          "Jurii, CC BY 1.0 <https://creativecommons.org/licenses/by/1.0>, via Wikimedia Commons, source: https://images-of-elements.com/cerium.php",
      },
      block: "f",
    },
    {
      name: "Praseodymium",
      appearance: "grayish white",
      atomic_mass: 140.907662,
      boil: 3403,
      category: "lanthanide",
      density: 6.77,
      discovered_by: "Carl Auer von Welsbach",
      melt: 1208,
      molar_heat: 27.2,
      named_by: null,
      number: 59,
      period: 6,
      group: 3,
      phase: "Solid",
      source: "https://pubchem.ncbi.nlm.nih.gov/element/Praseodymium",
      bohr_model_image:
        "https://storage.googleapis.com/search-ar-edu/periodic-table/element_059_praseodymium/element_059_praseodymium_srp_th.png",
      bohr_model_3d:
        "https://storage.googleapis.com/search-ar-edu/periodic-table/element_059_praseodymium/element_059_praseodymium.glb",
      spectral_img: null,
      summary:
        "Praseodymium is a chemical element with symbol Pr and atomic number 59. Praseodymium is a soft, silvery, malleable and ductile metal in the lanthanide group. It is valued for its magnetic, electrical, chemical, and optical properties.",
      symbol: "Pr",
      xpos: 5,
      ypos: 9,
      wxpos: 5,
      wypos: 6,
      shells: [2, 8, 18, 21, 8, 2],
      electron_configuration:
        "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f3",
      electron_configuration_semantic: "[Xe] 4f3 6s2",
      electron_affinity: 93,
      electronegativity_pauling: 1.13,
      ionization_energies: [527, 1020, 2086, 3761, 5551],
      cpk_hex: "d9ffc7",
      image: {
        title: "1.5 Grams Praseodymium under Argon, 0.5 cm big pieces",
        url: "https://upload.wikimedia.org/wikipedia/commons/c/c7/Praseodymium.jpg",
        attribution:
          "Jurii, CC BY 3.0 <https://creativecommons.org/licenses/by/3.0>, via Wikimedia Commons, source: https://images-of-elements.com/praseodymium.php",
      },
      block: "f",
    },
    {
      name: "Neodymium",
      appearance: "silvery white",
      atomic_mass: 144.2423,
      boil: 3347,
      category: "lanthanide",
      density: 7.01,
      discovered_by: "Carl Auer von Welsbach",
      melt: 1297,
      molar_heat: 27.45,
      named_by: null,
      number: 60,
      period: 6,
      group: 3,
      phase: "Solid",
      source: "https://pubchem.ncbi.nlm.nih.gov/element/Neodymium",
      bohr_model_image:
        "https://storage.googleapis.com/search-ar-edu/periodic-table/element_060_neodymium/element_060_neodymium_srp_th.png",
      bohr_model_3d:
        "https://storage.googleapis.com/search-ar-edu/periodic-table/element_060_neodymium/element_060_neodymium.glb",
      spectral_img: null,
      summary:
        "Neodymium is a chemical element with symbol Nd and atomic number 60. It is a soft silvery metal that tarnishes in air. Neodymium was discovered in 1885 by the Austrian chemist Carl Auer von Welsbach.",
      symbol: "Nd",
      xpos: 6,
      ypos: 9,
      wxpos: 6,
      wypos: 6,
      shells: [2, 8, 18, 22, 8, 2],
      electron_configuration:
        "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f4",
      electron_configuration_semantic: "[Xe] 4f4 6s2",
      electron_affinity: 184.87,
      electronegativity_pauling: 1.14,
      ionization_energies: [533.1, 1040, 2130, 3900],
      cpk_hex: "c7ffc7",
      image: {
        title:
          "Ultrapure Neodymium under Argon, 5 grams. Original length of the large piece in cm: 1",
        url: "https://upload.wikimedia.org/wikipedia/commons/c/c9/Neodymium_%2860_Nd%29.jpg",
        attribution:
          "Hi-Res Images ofChemical Elements, CC BY 3.0 <https://creativecommons.org/licenses/by/3.0>, via Wikimedia Commons, source: https://images-of-elements.com/neodymium.php",
      },
      block: "f",
    },
    {
      name: "Promethium",
      appearance: "metallic",
      atomic_mass: 145,
      boil: 3273,
      category: "lanthanide",
      density: 7.26,
      discovered_by: "Chien Shiung Wu",
      melt: 1315,
      molar_heat: null,
      named_by: "Isotopes of promethium",
      number: 61,
      period: 6,
      group: 3,
      phase: "Solid",
      source: "https://pubchem.ncbi.nlm.nih.gov/element/Promethium",
      bohr_model_image:
        "https://storage.googleapis.com/search-ar-edu/periodic-table/element_061_promethium/element_061_promethium_srp_th.png",
      bohr_model_3d:
        "https://storage.googleapis.com/search-ar-edu/periodic-table/element_061_promethium/element_061_promethium.glb",
      spectral_img: null,
      summary:
        "Promethium, originally prometheum, is a chemical element with the symbol Pm and atomic number 61. All of its isotopes are radioactive; it is one of only two such elements that are followed in the periodic table by elements with stable forms, a distinction shared with technetium. Chemically, promethium is a lanthanide, which forms salts when combined with other elements.",
      symbol: "Pm",
      xpos: 7,
      ypos: 9,
      wxpos: 7,
      wypos: 6,
      shells: [2, 8, 18, 23, 8, 2],
      electron_configuration:
        "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f5",
      electron_configuration_semantic: "[Xe] 4f5 6s2",
      electron_affinity: 12.45,
      electronegativity_pauling: 1.13,
      ionization_energies: [540, 1050, 2150, 3970],
      cpk_hex: "a3ffc7",
      image: {
        title:
          "Photomontage of what promethium metal might look like (it is too radioactive and real images are not available)",
        url: "https://upload.wikimedia.org/wikipedia/commons/5/5b/Promethium.jpg",
        attribution:
          "Unknown authorUnknown author, CC BY 3.0 <https://creativecommons.org/licenses/by/3.0>, via Wikimedia Commons, source: https://images-of-elements.com/promethium.php",
      },
      block: "f",
    },
    {
      name: "Samarium",
      appearance: "silvery white",
      atomic_mass: 150.362,
      boil: 2173,
      category: "lanthanide",
      density: 7.52,
      discovered_by: "Lecoq de Boisbaudran",
      melt: 1345,
      molar_heat: 29.54,
      named_by: null,
      number: 62,
      period: 6,
      group: 3,
      phase: "Solid",
      source: "https://pubchem.ncbi.nlm.nih.gov/element/Samarium",
      bohr_model_image:
        "https://storage.googleapis.com/search-ar-edu/periodic-table/element_062_samarium/element_062_samarium_srp_th.png",
      bohr_model_3d:
        "https://storage.googleapis.com/search-ar-edu/periodic-table/element_062_samarium/element_062_samarium.glb",
      spectral_img: null,
      summary:
        "Samarium is a chemical element with symbol Sm and atomic number 62. It is a moderately hard silvery metal that readily oxidizes in air. Being a typical member of the lanthanide series, samarium usually assumes the oxidation state +3.",
      symbol: "Sm",
      xpos: 8,
      ypos: 9,
      wxpos: 8,
      wypos: 6,
      shells: [2, 8, 18, 24, 8, 2],
      electron_configuration:
        "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f6",
      electron_configuration_semantic: "[Xe] 4f6 6s2",
      electron_affinity: 15.63,
      electronegativity_pauling: 1.17,
      ionization_energies: [544.5, 1070, 2260, 3990],
      cpk_hex: "8fffc7",
      image: {
        title:
          "Ultrapure Sublimated Samarium, 2 grams. Original size in cm: 0.8 x 1.5",
        url: "https://upload.wikimedia.org/wikipedia/commons/8/88/Samarium-2.jpg",
        attribution:
          "Unknown authorUnknown author, CC BY 1.0 <https://creativecommons.org/licenses/by/1.0>, via Wikimedia Commons, source: https://images-of-elements.com/samarium.php",
      },
      block: "f",
    },
    {
      name: "Europium",
      appearance: null,
      atomic_mass: 151.9641,
      boil: 1802,
      category: "lanthanide",
      density: 5.264,
      discovered_by: "Eugène-Anatole Demarçay",
      melt: 1099,
      molar_heat: 27.66,
      named_by: null,
      number: 63,
      period: 6,
      group: 3,
      phase: "Solid",
      source: "https://pubchem.ncbi.nlm.nih.gov/element/Europium",
      bohr_model_image:
        "https://storage.googleapis.com/search-ar-edu/periodic-table/element_063_europium/element_063_europium_srp_th.png",
      bohr_model_3d:
        "https://storage.googleapis.com/search-ar-edu/periodic-table/element_063_europium/element_063_europium.glb",
      spectral_img: null,
      summary:
        "Europium is a chemical element with symbol Eu and atomic number 63. It was isolated in 1901 and is named after the continent of Europe. It is a moderately hard, silvery metal which readily oxidizes in air and water.",
      symbol: "Eu",
      xpos: 9,
      ypos: 9,
      wxpos: 9,
      wypos: 6,
      shells: [2, 8, 18, 25, 8, 2],
      electron_configuration:
        "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f7",
      electron_configuration_semantic: "[Xe] 4f7 6s2",
      electron_affinity: 11.2,
      electronegativity_pauling: 1.2,
      ionization_energies: [547.1, 1085, 2404, 4120],
      cpk_hex: "61ffc7",
      image: {
        title:
          "Weakly Oxidized Europium, hence slightly yellowish. 1.5 grams, large piece 0.6 x 1.6 cm.",
        url: "https://upload.wikimedia.org/wikipedia/commons/6/6a/Europium.jpg",
        attribution:
          "Jurii, CC BY 3.0 <https://creativecommons.org/licenses/by/3.0>, via Wikimedia Commons, source: https://images-of-elements.com/europium.php",
      },
      block: "f",
    },
    {
      name: "Gadolinium",
      appearance: "silvery white",
      atomic_mass: 157.253,
      boil: 3273,
      category: "lanthanide",
      density: 7.9,
      discovered_by: "Jean Charles Galissard de Marignac",
      melt: 1585,
      molar_heat: 37.03,
      named_by: null,
      number: 64,
      period: 6,
      group: 3,
      phase: "Solid",
      source: "https://pubchem.ncbi.nlm.nih.gov/element/Gadolinium",
      bohr_model_image:
        "https://storage.googleapis.com/search-ar-edu/periodic-table/element_064_gadolinium/element_064_gadolinium_srp_th.png",
      bohr_model_3d:
        "https://storage.googleapis.com/search-ar-edu/periodic-table/element_064_gadolinium/element_064_gadolinium.glb",
      spectral_img: null,
      summary:
        "Gadolinium is a chemical element with symbol Gd and atomic number 64. It is a silvery-white, malleable and ductile rare-earth metal. It is found in nature only in combined (salt) form.",
      symbol: "Gd",
      xpos: 10,
      ypos: 9,
      wxpos: 10,
      wypos: 6,
      shells: [2, 8, 18, 25, 9, 2],
      electron_configuration:
        "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f7 5d1",
      electron_configuration_semantic: "[Xe] 4f7 5d1 6s2",
      electron_affinity: 13.22,
      electronegativity_pauling: 1.2,
      ionization_energies: [593.4, 1170, 1990, 4250],
      cpk_hex: "45ffc7",
      image: {
        title:
          "Pure (99.95%) Amorphous Gadolinium, about 12 grams, 2 × 1.5 × 0.5 cm, cast in acrylic glass",
        url: "https://upload.wikimedia.org/wikipedia/commons/c/c2/Gadolinium-2.jpg",
        attribution:
          "Jurii, CC BY 3.0 <https://creativecommons.org/licenses/by/3.0>, via Wikimedia Commons, source: https://images-of-elements.com/gadolinium.php",
      },
      block: "f",
    },
    {
      name: "Terbium",
      appearance: "silvery white",
      atomic_mass: 158.925352,
      boil: 3396,
      category: "lanthanide",
      density: 8.23,
      discovered_by: "Carl Gustaf Mosander",
      melt: 1629,
      molar_heat: 28.91,
      named_by: null,
      number: 65,
      period: 6,
      group: 3,
      phase: "Solid",
      source: "https://pubchem.ncbi.nlm.nih.gov/element/Terbium",
      bohr_model_image:
        "https://storage.googleapis.com/search-ar-edu/periodic-table/element_065_terbium/element_065_terbium_srp_th.png",
      bohr_model_3d:
        "https://storage.googleapis.com/search-ar-edu/periodic-table/element_065_terbium/element_065_terbium.glb",
      spectral_img: null,
      summary:
        "Terbium is a chemical element with symbol Tb and atomic number 65. It is a silvery-white rare earth metal that is malleable, ductile and soft enough to be cut with a knife. Terbium is never found in nature as a free element, but it is contained in many minerals, including cerite, gadolinite, monazite, xenotime and euxenite.",
      symbol: "Tb",
      xpos: 11,
      ypos: 9,
      wxpos: 11,
      wypos: 6,
      shells: [2, 8, 18, 27, 8, 2],
      electron_configuration:
        "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f9",
      electron_configuration_semantic: "[Xe] 4f9 6s2",
      electron_affinity: 112.4,
      electronegativity_pauling: 1.1,
      ionization_energies: [565.8, 1110, 2114, 3839],
      cpk_hex: "30ffc7",
      image: {
        title: "Pure Terbium, 3 grams. Original size: 1 cm",
        url: "https://upload.wikimedia.org/wikipedia/commons/9/9a/Terbium-2.jpg",
        attribution:
          "Unknown authorUnknown author, CC BY 1.0 <https://creativecommons.org/licenses/by/1.0>, via Wikimedia Commons, source: https://images-of-elements.com/terbium.php",
      },
      block: "f",
    },
    {
      name: "Dysprosium",
      appearance: "silvery white",
      atomic_mass: 162.5001,
      boil: 2840,
      category: "lanthanide",
      density: 8.54,
      discovered_by: "Lecoq de Boisbaudran",
      melt: 1680,
      molar_heat: 27.7,
      named_by: null,
      number: 66,
      period: 6,
      group: 3,
      phase: "Solid",
      source: "https://pubchem.ncbi.nlm.nih.gov/element/Dysprosium",
      bohr_model_image:
        "https://storage.googleapis.com/search-ar-edu/periodic-table/element_066_dysprosium/element_066_dysprosium_srp_th.png",
      bohr_model_3d:
        "https://storage.googleapis.com/search-ar-edu/periodic-table/element_066_dysprosium/element_066_dysprosium.glb",
      spectral_img: null,
      summary:
        "Dysprosium is a chemical element with the symbol Dy and atomic number 66. It is a rare earth element with a metallic silver luster. Dysprosium is never found in nature as a free element, though it is found in various minerals, such as xenotime.",
      symbol: "Dy",
      xpos: 12,
      ypos: 9,
      wxpos: 12,
      wypos: 6,
      shells: [2, 8, 18, 28, 8, 2],
      electron_configuration:
        "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f10",
      electron_configuration_semantic: "[Xe] 4f10 6s2",
      electron_affinity: 33.96,
      electronegativity_pauling: 1.22,
      ionization_energies: [573, 1130, 2200, 3990],
      cpk_hex: "1fffc7",
      image: {
        title: "Pure Dysprosium Dendrites",
        url: "https://upload.wikimedia.org/wikipedia/commons/5/55/Dysprosium-2.jpg",
        attribution:
          "Jurii, CC BY 3.0 <https://creativecommons.org/licenses/by/3.0>, via Wikimedia Commons, source: https://images-of-elements.com/dysprosium.php",
      },
      block: "f",
    },
    {
      name: "Holmium",
      appearance: "silvery white",
      atomic_mass: 164.930332,
      boil: 2873,
      category: "lanthanide",
      density: 8.79,
      discovered_by: "Marc Delafontaine",
      melt: 1734,
      molar_heat: 27.15,
      named_by: null,
      number: 67,
      period: 6,
      group: 3,
      phase: "Solid",
      source: "https://pubchem.ncbi.nlm.nih.gov/element/Holmium",
      bohr_model_image:
        "https://storage.googleapis.com/search-ar-edu/periodic-table/element_067_holmium/element_067_holmium_srp_th.png",
      bohr_model_3d:
        "https://storage.googleapis.com/search-ar-edu/periodic-table/element_067_holmium/element_067_holmium.glb",
      spectral_img: null,
      summary:
        "Holmium is a chemical element with symbol Ho and atomic number 67. Part of the lanthanide series, holmium is a rare earth element. Holmium was discovered by Swedish chemist Per Theodor Cleve.",
      symbol: "Ho",
      xpos: 13,
      ypos: 9,
      wxpos: 13,
      wypos: 6,
      shells: [2, 8, 18, 29, 8, 2],
      electron_configuration:
        "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f11",
      electron_configuration_semantic: "[Xe] 4f11 6s2",
      electron_affinity: 32.61,
      electronegativity_pauling: 1.23,
      ionization_energies: [581, 1140, 2204, 4100],
      cpk_hex: "00ff9c",
      image: {
        title: "Ultrapure Holmium, 17 grams. Original size in cm: 1.5 x 2.5",
        url: "https://upload.wikimedia.org/wikipedia/commons/0/0a/Holmium2.jpg",
        attribution:
          "Unknown authorUnknown author, CC BY 1.0 <https://creativecommons.org/licenses/by/1.0>, via Wikimedia Commons, source: https://images-of-elements.com/holmium.php",
      },
      block: "f",
    },
    {
      name: "Erbium",
      appearance: "silvery white",
      atomic_mass: 167.2593,
      boil: 3141,
      category: "lanthanide",
      density: 9.066,
      discovered_by: "Carl Gustaf Mosander",
      melt: 1802,
      molar_heat: 28.12,
      named_by: null,
      number: 68,
      period: 6,
      group: 3,
      phase: "Solid",
      source: "https://pubchem.ncbi.nlm.nih.gov/element/Erbium",
      bohr_model_image:
        "https://storage.googleapis.com/search-ar-edu/periodic-table/element_068_erbium/element_068_erbium_srp_th.png",
      bohr_model_3d:
        "https://storage.googleapis.com/search-ar-edu/periodic-table/element_068_erbium/element_068_erbium.glb",
      spectral_img: null,
      summary:
        "Erbium is a chemical element in the lanthanide series, with symbol Er and atomic number 68. A silvery-white solid metal when artificially isolated, natural erbium is always found in chemical combination with other elements on Earth. As such, it is a rare earth element which is associated with several other rare elements in the mineral gadolinite from Ytterby in Sweden, where yttrium, ytterbium, and terbium were discovered.",
      symbol: "Er",
      xpos: 14,
      ypos: 9,
      wxpos: 14,
      wypos: 6,
      shells: [2, 8, 18, 30, 8, 2],
      electron_configuration:
        "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f12",
      electron_configuration_semantic: "[Xe] 4f12 6s2",
      electron_affinity: 30.1,
      electronegativity_pauling: 1.24,
      ionization_energies: [589.3, 1150, 2194, 4120],
      cpk_hex: "00e675",
      image: {
        title: "9.5 Gramms Pure Erbium, 2 x 2 cm",
        url: "https://upload.wikimedia.org/wikipedia/commons/2/2a/Erbium-2.jpg",
        attribution:
          "Jurii, CC BY 3.0 <https://creativecommons.org/licenses/by/3.0>, via Wikimedia Commons, source: https://images-of-elements.com/erbium.php",
      },
      block: "f",
    },
    {
      name: "Thulium",
      appearance: "silvery gray",
      atomic_mass: 168.934222,
      boil: 2223,
      category: "lanthanide",
      density: 9.32,
      discovered_by: "Per Teodor Cleve",
      melt: 1818,
      molar_heat: 27.03,
      named_by: null,
      number: 69,
      period: 6,
      group: 3,
      phase: "Solid",
      source: "https://pubchem.ncbi.nlm.nih.gov/element/Thulium",
      bohr_model_image:
        "https://storage.googleapis.com/search-ar-edu/periodic-table/element_069_thulium/element_069_thulium_srp_th.png",
      bohr_model_3d:
        "https://storage.googleapis.com/search-ar-edu/periodic-table/element_069_thulium/element_069_thulium.glb",
      spectral_img: null,
      summary:
        "Thulium is a chemical element with symbol Tm and atomic number 69. It is the thirteenth and antepenultimate (third-last) element in the lanthanide series. Like the other lanthanides, the most common oxidation state is +3, seen in its oxide, halides and other compounds.",
      symbol: "Tm",
      xpos: 15,
      ypos: 9,
      wxpos: 15,
      wypos: 6,
      shells: [2, 8, 18, 31, 8, 2],
      electron_configuration:
        "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f13",
      electron_configuration_semantic: "[Xe] 4f13 6s2",
      electron_affinity: 99,
      electronegativity_pauling: 1.25,
      ionization_energies: [596.7, 1160, 2285, 4120],
      cpk_hex: "00d452",
      image: {
        title:
          "Ultrapure (99.997%) Crystalline Thulium, 22.3 grams, 3 × 3 × 2 cm in size",
        url: "https://upload.wikimedia.org/wikipedia/commons/6/6b/Thulium-2.jpg",
        attribution:
          "Jurii, CC BY 3.0 <https://creativecommons.org/licenses/by/3.0>, via Wikimedia Commons, source: https://images-of-elements.com/thulium.php",
      },
      block: "f",
    },
    {
      name: "Ytterbium",
      appearance: null,
      atomic_mass: 173.0451,
      boil: 1469,
      category: "lanthanide",
      density: 6.9,
      discovered_by: "Jean Charles Galissard de Marignac",
      melt: 1097,
      molar_heat: 26.74,
      named_by: null,
      number: 70,
      period: 6,
      group: 3,
      phase: "Solid",
      source: "https://pubchem.ncbi.nlm.nih.gov/element/Ytterbium",
      bohr_model_image:
        "https://storage.googleapis.com/search-ar-edu/periodic-table/element_070_ytterbium/element_070_ytterbium_srp_th.png",
      bohr_model_3d:
        "https://storage.googleapis.com/search-ar-edu/periodic-table/element_070_ytterbium/element_070_ytterbium.glb",
      spectral_img: null,
      summary:
        "Ytterbium is a chemical element with symbol Yb and atomic number 70. It is the fourteenth and penultimate element in the lanthanide series, which is the basis of the relative stability of its +2 oxidation state. However, like the other lanthanides, its most common oxidation state is +3, seen in its oxide, halides and other compounds.",
      symbol: "Yb",
      xpos: 16,
      ypos: 9,
      wxpos: 16,
      wypos: 6,
      shells: [2, 8, 18, 32, 8, 2],
      electron_configuration:
        "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14",
      electron_configuration_semantic: "[Xe] 4f14 6s2",
      electron_affinity: -1.93,
      electronegativity_pauling: 1.1,
      ionization_energies: [603.4, 1174.8, 2417, 4203],
      cpk_hex: "00bf38",
      image: {
        title: "Ytterbium, 0.5 x 1 cm",
        url: "https://upload.wikimedia.org/wikipedia/commons/c/ce/Ytterbium-3.jpg",
        attribution:
          "Jurii, CC BY 1.0 <https://creativecommons.org/licenses/by/1.0>, via Wikimedia Commons, source: https://images-of-elements.com/ytterbium.php",
      },
      block: "f",
    },
    {
      name: "Lutetium",
      appearance: "silvery white",
      atomic_mass: 174.96681,
      boil: 3675,
      category: "lanthanide",
      density: 9.841,
      discovered_by: "Georges Urbain",
      melt: 1925,
      molar_heat: 26.86,
      named_by: null,
      number: 71,
      period: 6,
      group: 3,
      phase: "Solid",
      source: "https://pubchem.ncbi.nlm.nih.gov/element/Lutetium",
      bohr_model_image:
        "https://storage.googleapis.com/search-ar-edu/periodic-table/element_071_lutetium/element_071_lutetium_srp_th.png",
      bohr_model_3d:
        "https://storage.googleapis.com/search-ar-edu/periodic-table/element_071_lutetium/element_071_lutetium.glb",
      spectral_img: null,
      summary:
        "Lutetium is a chemical element with symbol Lu and atomic number 71. It is a silvery white metal, which resists corrosion in dry, but not in moist air. It is considered the first element of the 6th-period transition metals and the last element in the lanthanide series, and is traditionally counted among the rare earths.",
      symbol: "Lu",
      xpos: 17,
      ypos: 9,
      wxpos: 17,
      wypos: 6,
      shells: [2, 8, 18, 32, 9, 2],
      electron_configuration:
        "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d1",
      electron_configuration_semantic: "[Xe] 4f14 5d1 6s2",
      electron_affinity: 33.4,
      electronegativity_pauling: 1.27,
      ionization_energies: [523.5, 1340, 2022.3, 4370, 6445],
      cpk_hex: "00ab24",
      image: {
        title: "1 cm Big Piece of Pure Lutetium",
        url: "https://upload.wikimedia.org/wikipedia/commons/e/e8/Lutetium.jpg",
        attribution:
          "Jurii, CC BY 3.0 <https://creativecommons.org/licenses/by/3.0>, via Wikimedia Commons, source: https://images-of-elements.com/lutetium.php",
      },
      block: "d",
    },
    {
      name: "Hafnium",
      appearance: "steel gray",
      atomic_mass: 178.492,
      boil: 4876,
      category: "transition metal",
      density: 13.31,
      discovered_by: "Dirk Coster",
      melt: 2506,
      molar_heat: 25.73,
      named_by: null,
      number: 72,
      period: 6,
      group: 4,
      phase: "Solid",
      source: "https://pubchem.ncbi.nlm.nih.gov/element/Hafnium",
      bohr_model_image:
        "https://storage.googleapis.com/search-ar-edu/periodic-table/element_072_hafnium/element_072_hafnium_srp_th.png",
      bohr_model_3d:
        "https://storage.googleapis.com/search-ar-edu/periodic-table/element_072_hafnium/element_072_hafnium.glb",
      spectral_img:
        "https://en.wikipedia.org/wiki/File:Hafnium_spectrum_visible.png",
      summary:
        "Hafnium is a chemical element with symbol Hf and atomic number 72. A lustrous, silvery gray, tetravalent transition metal, hafnium chemically resembles zirconium and is found in zirconium minerals. Its existence was predicted by Dmitri Mendeleev in 1869, though it was not identified until 1923, making it the penultimate stable element to be discovered (rhenium was identified two years later).",
      symbol: "Hf",
      xpos: 4,
      ypos: 6,
      wxpos: 18,
      wypos: 6,
      shells: [2, 8, 18, 32, 10, 2],
      electron_configuration:
        "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d2",
      electron_configuration_semantic: "[Xe] 4f14 5d2 6s2",
      electron_affinity: 17.18,
      electronegativity_pauling: 1.3,
      ionization_energies: [658.5, 1440, 2250, 3216],
      cpk_hex: "4dc2ff",
      image: {
        title: "Electrolytic Hafnium, 22 grams. Original size in cm: 1 x 2 x 3",
        url: "https://upload.wikimedia.org/wikipedia/commons/1/17/Hafnium_%2872_Hf%29.jpg",
        attribution:
          "Hi-Res Images ofChemical Elements, CC BY 3.0 <https://creativecommons.org/licenses/by/3.0>, via Wikimedia Commons, source: https://images-of-elements.com/hafnium.php",
      },
      block: "d",
    },
    {
      name: "Tantalum",
      appearance: "gray blue",
      atomic_mass: 180.947882,
      boil: 5731,
      category: "transition metal",
      density: 16.69,
      discovered_by: "Anders Gustaf Ekeberg",
      melt: 3290,
      molar_heat: 25.36,
      named_by: null,
      number: 73,
      period: 6,
      group: 5,
      phase: "Solid",
      source: "https://pubchem.ncbi.nlm.nih.gov/element/Tantalum",
      bohr_model_image:
        "https://storage.googleapis.com/search-ar-edu/periodic-table/element_073_tantalum/element_073_tantalum_srp_th.png",
      bohr_model_3d:
        "https://storage.googleapis.com/search-ar-edu/periodic-table/element_073_tantalum/element_073_tantalum.glb",
      spectral_img:
        "https://en.wikipedia.org/wiki/File:Tantalum_spectrum_visible.png",
      summary:
        "Tantalum is a chemical element with symbol Ta and atomic number 73. Previously known as tantalium, its name comes from Tantalus, an antihero from Greek mythology. Tantalum is a rare, hard, blue-gray, lustrous transition metal that is highly corrosion-resistant.",
      symbol: "Ta",
      xpos: 5,
      ypos: 6,
      wxpos: 19,
      wypos: 6,
      shells: [2, 8, 18, 32, 11, 2],
      electron_configuration:
        "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d3",
      electron_configuration_semantic: "[Xe] 4f14 5d3 6s2",
      electron_affinity: 31,
      electronegativity_pauling: 1.5,
      ionization_energies: [761, 1500],
      cpk_hex: "4da6ff",
      image: {
        title: "Piece of tantalum, 1 cm in size",
        url: "https://upload.wikimedia.org/wikipedia/commons/6/61/Tantalum.jpg",
        attribution:
          "Jurii, CC BY 3.0 <https://creativecommons.org/licenses/by/3.0>, via Wikimedia Commons, source: https://images-of-elements.com/tantalum.php",
      },
      block: "d",
    },
    {
      name: "Tungsten",
      appearance: "grayish white, lustrous",
      atomic_mass: 183.841,
      boil: 6203,
      category: "transition metal",
      density: 19.25,
      discovered_by: "Carl Wilhelm Scheele",
      melt: 3695,
      molar_heat: 24.27,
      named_by: null,
      number: 74,
      period: 6,
      group: 6,
      phase: "Solid",
      source: "https://pubchem.ncbi.nlm.nih.gov/element/Tungsten",
      bohr_model_image:
        "https://storage.googleapis.com/search-ar-edu/periodic-table/element_074_tungsten/element_074_tungsten_srp_th.png",
      bohr_model_3d:
        "https://storage.googleapis.com/search-ar-edu/periodic-table/element_074_tungsten/element_074_tungsten.glb",
      spectral_img: null,
      summary:
        "Tungsten, also known as wolfram, is a chemical element with symbol W and atomic number 74. The word tungsten comes from the Swedish language tung sten, which directly translates to heavy stone. Its name in Swedish is volfram, however, in order to distinguish it from scheelite, which in Swedish is alternatively named tungsten.",
      symbol: "W",
      xpos: 6,
      ypos: 6,
      wxpos: 20,
      wypos: 6,
      shells: [2, 8, 18, 32, 12, 2],
      electron_configuration:
        "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d4",
      electron_configuration_semantic: "[Xe] 4f14 5d4 6s2",
      electron_affinity: 78.76,
      electronegativity_pauling: 2.36,
      ionization_energies: [770, 1700],
      cpk_hex: "2194d6",
      image: {
        title:
          "Tungsten rod with oxidised surface, 80 grams. Original size in cm: 1.3 x 3",
        url: "https://upload.wikimedia.org/wikipedia/commons/c/c8/Tungsten_rod_with_oxidised_surface.jpg",
        attribution:
          "Jurii, CC BY 1.0 <https://creativecommons.org/licenses/by/1.0>, via Wikimedia Commons, source: https://images-of-elements.com/tungsten.php",
      },
      block: "d",
    },
    {
      name: "Rhenium",
      appearance: "silvery-grayish",
      atomic_mass: 186.2071,
      boil: 5869,
      category: "transition metal",
      density: 21.02,
      discovered_by: "Masataka Ogawa",
      melt: 3459,
      molar_heat: 25.48,
      named_by: "Walter Noddack",
      number: 75,
      period: 6,
      group: 7,
      phase: "Solid",
      source: "https://pubchem.ncbi.nlm.nih.gov/element/Rhenium",
      bohr_model_image:
        "https://storage.googleapis.com/search-ar-edu/periodic-table/element_075_rhenium/element_075_rhenium_srp_th.png",
      bohr_model_3d:
        "https://storage.googleapis.com/search-ar-edu/periodic-table/element_075_rhenium/element_075_rhenium.glb",
      spectral_img: null,
      summary:
        "Rhenium is a chemical element with symbol Re and atomic number 75. It is a silvery-white, heavy, third-row transition metal in group 7 of the periodic table. With an estimated average concentration of 1 part per billion (ppb), rhenium is one of the rarest elements in the Earth's crust.",
      symbol: "Re",
      xpos: 7,
      ypos: 6,
      wxpos: 21,
      wypos: 6,
      shells: [2, 8, 18, 32, 13, 2],
      electron_configuration:
        "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d5",
      electron_configuration_semantic: "[Xe] 4f14 5d5 6s2",
      electron_affinity: 5.8273,
      electronegativity_pauling: 1.9,
      ionization_energies: [760, 1260, 2510, 3640],
      cpk_hex: "267dab",
      image: {
        title:
          "Pure Rhenium Bead, arc melted, 21 grams. Original size in cm: 1.5 x 1.7. Measured radiation dose <0.05 μS/h.",
        url: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Pure_rhenium_bead%2C_arc_melted%2C_21_grams._Original_size_in_cm_-_1.5_x_1.7.jpg",
        attribution:
          "Hi-Res Images ofChemical Elements, CC BY 3.0 <https://creativecommons.org/licenses/by/3.0>, via Wikimedia Commons, source: https://images-of-elements.com/rhenium.php",
      },
      block: "d",
    },
    {
      name: "Osmium",
      appearance: "silvery, blue cast",
      atomic_mass: 190.233,
      boil: 5285,
      category: "transition metal",
      density: 22.59,
      discovered_by: "Smithson Tennant",
      melt: 3306,
      molar_heat: 24.7,
      named_by: null,
      number: 76,
      period: 6,
      group: 8,
      phase: "Solid",
      source: "https://pubchem.ncbi.nlm.nih.gov/element/Osmium",
      bohr_model_image:
        "https://storage.googleapis.com/search-ar-edu/periodic-table/element_076_osmium/element_076_osmium_srp_th.png",
      bohr_model_3d:
        "https://storage.googleapis.com/search-ar-edu/periodic-table/element_076_osmium/element_076_osmium.glb",
      spectral_img: null,
      summary:
        'Osmium (from Greek osme (ὀσμή) meaning "smell") is a chemical element with symbol Os and atomic number 76. It is a hard, brittle, bluish-white transition metal in the platinum group that is found as a trace element in alloys, mostly in platinum ores. Osmium is the densest naturally occurring element, with a density of 22.59 g/cm3.',
      symbol: "Os",
      xpos: 8,
      ypos: 6,
      wxpos: 22,
      wypos: 6,
      shells: [2, 8, 18, 32, 14, 2],
      electron_configuration:
        "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d6",
      electron_configuration_semantic: "[Xe] 4f14 5d6 6s2",
      electron_affinity: 103.99,
      electronegativity_pauling: 2.2,
      ionization_energies: [840, 1600],
      cpk_hex: "266696",
      image: {
        title: "Pure Osmium Bead",
        url: "https://upload.wikimedia.org/wikipedia/commons/3/3c/Osmium-bead.jpg",
        attribution:
          "Jurii, CC BY 3.0 <https://creativecommons.org/licenses/by/3.0>, via Wikimedia Commons, source: https://images-of-elements.com/osmium.php",
      },
      block: "d",
    },
    {
      name: "Iridium",
      appearance: "silvery white",
      atomic_mass: 192.2173,
      boil: 4403,
      category: "transition metal",
      density: 22.56,
      discovered_by: "Smithson Tennant",
      melt: 2719,
      molar_heat: 25.1,
      named_by: null,
      number: 77,
      period: 6,
      group: 9,
      phase: "Solid",
      source: "https://pubchem.ncbi.nlm.nih.gov/element/Iridium",
      bohr_model_image:
        "https://storage.googleapis.com/search-ar-edu/periodic-table/element_077_iridium/element_077_iridium_srp_th.png",
      bohr_model_3d:
        "https://storage.googleapis.com/search-ar-edu/periodic-table/element_077_iridium/element_077_iridium.glb",
      spectral_img: null,
      summary:
        "Iridium is a chemical element with symbol Ir and atomic number 77. A very hard, brittle, silvery-white transition metal of the platinum group, iridium is generally credited with being the second densest element (after osmium) based on measured density, although calculations involving the space lattices of the elements show that iridium is denser. It is also the most corrosion-resistant metal, even at temperatures as high as 2000 °C. Although only certain molten salts and halogens are corrosive to solid iridium, finely divided iridium dust is much more reactive and can be flammable.",
      symbol: "Ir",
      xpos: 9,
      ypos: 6,
      wxpos: 23,
      wypos: 6,
      shells: [2, 8, 18, 32, 15, 2],
      electron_configuration:
        "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d7",
      electron_configuration_semantic: "[Xe] 4f14 5d7 6s2",
      electron_affinity: 150.94,
      electronegativity_pauling: 2.2,
      ionization_energies: [880, 1600],
      cpk_hex: "175487",
      image: {
        title:
          "Pieces of Pure Iridium, 1 gram. Original size: 0.1 - 0.3 cm each",
        url: "https://upload.wikimedia.org/wikipedia/commons/a/a8/Iridium-2.jpg",
        attribution:
          "Unknown authorUnknown author, CC BY 1.0 <https://creativecommons.org/licenses/by/1.0>, via Wikimedia Commons, source: https://images-of-elements.com/iridium.php",
      },
      block: "d",
    },
    {
      name: "Platinum",
      appearance: "silvery white",
      atomic_mass: 195.0849,
      boil: 4098,
      category: "transition metal",
      density: 21.45,
      discovered_by: "Antonio de Ulloa",
      melt: 2041.4,
      molar_heat: 25.86,
      named_by: null,
      number: 78,
      period: 6,
      group: 10,
      phase: "Solid",
      source: "https://pubchem.ncbi.nlm.nih.gov/element/Platinum",
      bohr_model_image:
        "https://storage.googleapis.com/search-ar-edu/periodic-table/element_078_platinum/element_078_platinum_srp_th.png",
      bohr_model_3d:
        "https://storage.googleapis.com/search-ar-edu/periodic-table/element_078_platinum/element_078_platinum.glb",
      spectral_img: null,
      summary:
        'Platinum is a chemical element with symbol Pt and atomic number 78. It is a dense, malleable, ductile, highly unreactive, precious, gray-white transition metal. Its name is derived from the Spanish term platina, which is literally translated into "little silver".',
      symbol: "Pt",
      xpos: 10,
      ypos: 6,
      wxpos: 24,
      wypos: 6,
      shells: [2, 8, 18, 32, 17, 1],
      electron_configuration:
        "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s1 4f14 5d9",
      electron_configuration_semantic: "[Xe] 4f14 5d9 6s1",
      electron_affinity: 205.041,
      electronegativity_pauling: 2.28,
      ionization_energies: [870, 1791],
      cpk_hex: "d0d0e0",
      image: {
        title: "Crystals of Pure Platinum grown by gas phase transport",
        url: "https://upload.wikimedia.org/wikipedia/commons/6/68/Platinum_crystals.jpg",
        attribution:
          "Periodictableru, CC BY 3.0 <https://creativecommons.org/licenses/by/3.0>, via Wikimedia Commons",
      },
      block: "d",
    },
    {
      name: "Gold",
      appearance: "metallic yellow",
      atomic_mass: 196.9665695,
      boil: 3243,
      category: "transition metal",
      density: 19.3,
      discovered_by: "Middle East",
      melt: 1337.33,
      molar_heat: 25.418,
      named_by: null,
      number: 79,
      period: 6,
      group: 11,
      phase: "Solid",
      source: "https://pubchem.ncbi.nlm.nih.gov/element/Gold",
      bohr_model_image:
        "https://storage.googleapis.com/search-ar-edu/periodic-table/element_079_gold/element_079_gold_srp_th.png",
      bohr_model_3d:
        "https://storage.googleapis.com/search-ar-edu/periodic-table/element_079_gold/element_079_gold.glb",
      spectral_img: null,
      summary:
        "Gold is a chemical element with symbol Au (from Latin:aurum) and atomic number 79. In its purest form, it is a bright, slightly reddish yellow, dense, soft, malleable and ductile metal. Chemically, gold is a transition metal and a group 11 element.",
      symbol: "Au",
      xpos: 11,
      ypos: 6,
      wxpos: 25,
      wypos: 6,
      shells: [2, 8, 18, 32, 18, 1],
      electron_configuration:
        "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s1 4f14 5d10",
      electron_configuration_semantic: "[Xe] 4f14 5d10 6s1",
      electron_affinity: 222.747,
      electronegativity_pauling: 2.54,
      ionization_energies: [890.1, 1980],
      cpk_hex: "ffd123",
      image: {
        title: "Ultrapure Gold Leaf",
        url: "https://upload.wikimedia.org/wikipedia/commons/8/8a/Gold_%2879_Au%29.jpg",
        attribution:
          "Hi-Res Images ofChemical Elements, CC BY 3.0 <https://creativecommons.org/licenses/by/3.0>, via Wikimedia Commons, source: https://images-of-elements.com/gold.php",
      },
      block: "d",
    },
    {
      name: "Mercury",
      appearance: "silvery",
      atomic_mass: 200.5923,
      boil: 629.88,
      category: "transition metal",
      density: 13.534,
      discovered_by: "unknown, before 2000 BCE",
      melt: 234.321,
      molar_heat: 27.983,
      named_by: null,
      number: 80,
      period: 6,
      group: 12,
      phase: "Liquid",
      source: "https://pubchem.ncbi.nlm.nih.gov/element/Mercury (Element)",
      bohr_model_image:
        "https://storage.googleapis.com/search-ar-edu/periodic-table/element_080_mercury/element_080_mercury_srp_th.png",
      bohr_model_3d:
        "https://storage.googleapis.com/search-ar-edu/periodic-table/element_080_mercury/element_080_mercury.glb",
      spectral_img: null,
      summary:
        "Mercury is a chemical element with symbol Hg and atomic number 80. It is commonly known as quicksilver and was formerly named hydrargyrum (/haɪˈdrɑːrdʒərəm/). A heavy, silvery d-block element, mercury is the only metallic element that is liquid at standard conditions for temperature and pressure; the only other element that is liquid under these conditions is bromine, though metals such as caesium, gallium, and rubidium melt just above room temperature.",
      symbol: "Hg",
      xpos: 12,
      ypos: 6,
      wxpos: 26,
      wypos: 6,
      shells: [2, 8, 18, 32, 18, 2],
      electron_configuration:
        "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10",
      electron_configuration_semantic: "[Xe] 4f14 5d10 6s2",
      electron_affinity: -48,
      electronegativity_pauling: 2,
      ionization_energies: [1007.1, 1810, 3300],
      cpk_hex: "b8b8d0",
      image: {
        title: "6 grams pure mercury. Diameter of the inner disc: 2 cm",
        url: "https://upload.wikimedia.org/wikipedia/commons/b/be/Hydrargyrum_%2880_Hg%29.jpg",
        attribution:
          "Hi-Res Images of Chemical Elements, CC BY 3.0 <https://creativecommons.org/licenses/by/3.0>, via Wikimedia Commons, source: https://images-of-elements.com/mercury.php",
      },
      block: "d",
    },
    {
      name: "Thallium",
      appearance: "silvery white",
      atomic_mass: 204.38,
      boil: 1746,
      category: "post-transition metal",
      density: 11.85,
      discovered_by: "William Crookes",
      melt: 577,
      molar_heat: 26.32,
      named_by: null,
      number: 81,
      period: 6,
      group: 13,
      phase: "Solid",
      source: "https://pubchem.ncbi.nlm.nih.gov/element/Thallium",
      bohr_model_image:
        "https://storage.googleapis.com/search-ar-edu/periodic-table/element_081_thallium/element_081_thallium_srp_th.png",
      bohr_model_3d:
        "https://storage.googleapis.com/search-ar-edu/periodic-table/element_081_thallium/element_081_thallium.glb",
      spectral_img: null,
      summary:
        "Thallium is a chemical element with symbol Tl and atomic number 81. This soft gray post-transition metal is not found free in nature. When isolated, it resembles tin, but discolors when exposed to air.",
      symbol: "Tl",
      xpos: 13,
      ypos: 6,
      wxpos: 27,
      wypos: 6,
      shells: [2, 8, 18, 32, 18, 3],
      electron_configuration:
        "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p1",
      electron_configuration_semantic: "[Xe] 4f14 5d10 6s2 6p1",
      electron_affinity: 36.4,
      electronegativity_pauling: 1.62,
      ionization_energies: [589.4, 1971, 2878],
      cpk_hex: "a6544d",
      image: {
        title:
          "8 grams pure thallium under argon. Original size in cm: 0.7 x 1.5",
        url: "https://upload.wikimedia.org/wikipedia/commons/5/55/Thallium_%2881_Tl%29.jpg",
        attribution:
          "Hi-Res Images ofChemical Elements, CC BY 3.0 <https://creativecommons.org/licenses/by/3.0>, via Wikimedia Commons, source: https://images-of-elements.com/thallium.php",
      },
      block: "p",
    },
    {
      name: "Lead",
      appearance: "metallic gray",
      atomic_mass: 207.21,
      boil: 2022,
      category: "post-transition metal",
      density: 11.34,
      discovered_by: "Middle East",
      melt: 600.61,
      molar_heat: 26.65,
      named_by: null,
      number: 82,
      period: 6,
      group: 14,
      phase: "Solid",
      source: "https://pubchem.ncbi.nlm.nih.gov/element/Lead",
      bohr_model_image:
        "https://storage.googleapis.com/search-ar-edu/periodic-table/element_082_lead/element_082_lead_srp_th.png",
      bohr_model_3d:
        "https://storage.googleapis.com/search-ar-edu/periodic-table/element_082_lead/element_082_lead.glb",
      spectral_img: null,
      summary:
        "Lead (/lɛd/) is a chemical element in the carbon group with symbol Pb (from Latin:plumbum) and atomic number 82. Lead is a soft, malleable and heavy post-transition metal. Metallic lead has a bluish-white color after being freshly cut, but it soon tarnishes to a dull grayish color when exposed to air.",
      symbol: "Pb",
      xpos: 14,
      ypos: 6,
      wxpos: 28,
      wypos: 6,
      shells: [2, 8, 18, 32, 18, 4],
      electron_configuration:
        "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p2",
      electron_configuration_semantic: "[Xe] 4f14 5d10 6s2 6p2",
      electron_affinity: 34.4204,
      electronegativity_pauling: 1.87,
      ionization_energies: [715.6, 1450.5, 3081.5, 4083, 6640],
      cpk_hex: "575961",
      image: {
        title:
          "Ultrapure Lead Bead from two sides. Original size in cm: 1.5 x 2",
        url: "https://upload.wikimedia.org/wikipedia/commons/6/63/Lead-2.jpg",
        attribution:
          "Chemical Elements, CC BY 3.0 <https://creativecommons.org/licenses/by/3.0>, via Wikimedia Commons, source: https://images-of-elements.com/lead.php",
      },
      block: "p",
    },
    {
      name: "Bismuth",
      appearance: "lustrous silver",
      atomic_mass: 208.980401,
      boil: 1837,
      category: "post-transition metal",
      density: 9.78,
      discovered_by: "Claude François Geoffroy",
      melt: 544.7,
      molar_heat: 25.52,
      named_by: null,
      number: 83,
      period: 6,
      group: 15,
      phase: "Solid",
      source: "https://pubchem.ncbi.nlm.nih.gov/element/Bismuth",
      bohr_model_image:
        "https://storage.googleapis.com/search-ar-edu/periodic-table/element_083_bismuth/element_083_bismuth_srp_th.png",
      bohr_model_3d:
        "https://storage.googleapis.com/search-ar-edu/periodic-table/element_083_bismuth/element_083_bismuth.glb",
      spectral_img: null,
      summary:
        "Bismuth is a chemical element with symbol Bi and atomic number 83. Bismuth, a pentavalent post-transition metal, chemically resembles arsenic and antimony. Elemental bismuth may occur naturally, although its sulfide and oxide form important commercial ores.",
      symbol: "Bi",
      xpos: 15,
      ypos: 6,
      wxpos: 29,
      wypos: 6,
      shells: [2, 8, 18, 32, 18, 5],
      electron_configuration:
        "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p3",
      electron_configuration_semantic: "[Xe] 4f14 5d10 6s2 6p3",
      electron_affinity: 90.924,
      electronegativity_pauling: 2.02,
      ionization_energies: [703, 1610, 2466, 4370, 5400, 8520],
      cpk_hex: "9e4fb5",
      image: {
        title: "Bismuth Crystal",
        url: "https://upload.wikimedia.org/wikipedia/commons/a/a5/Bismuth-2.jpg",
        attribution:
          "Jurii, CC BY 3.0 <https://creativecommons.org/licenses/by/3.0>, via Wikimedia Commons, source: https://images-of-elements.com/bismuth.php",
      },
      block: "p",
    },
    {
      name: "Polonium",
      appearance: "silvery",
      atomic_mass: 209,
      boil: 1235,
      category: "metalloid",
      density: 9.196,
      discovered_by: "Pierre Curie",
      melt: 527,
      molar_heat: 26.4,
      named_by: null,
      number: 84,
      period: 6,
      group: 16,
      phase: "Solid",
      source: "https://pubchem.ncbi.nlm.nih.gov/element/Polonium",
      bohr_model_image:
        "https://storage.googleapis.com/search-ar-edu/periodic-table/element_084_polonium/element_084_polonium_srp_th.png",
      bohr_model_3d:
        "https://storage.googleapis.com/search-ar-edu/periodic-table/element_084_polonium/element_084_polonium.glb",
      spectral_img: null,
      summary:
        "Polonium is a chemical element with symbol Po and atomic number 84, discovered in 1898 by Marie Curie and Pierre Curie. A rare and highly radioactive element with no stable isotopes, polonium is chemically similar to bismuth and tellurium, and it occurs in uranium ores. Applications of polonium are few.",
      symbol: "Po",
      xpos: 16,
      ypos: 6,
      wxpos: 30,
      wypos: 6,
      shells: [2, 8, 18, 32, 18, 6],
      electron_configuration:
        "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p4",
      electron_configuration_semantic: "[Xe] 4f14 5d10 6s2 6p4",
      electron_affinity: 136,
      electronegativity_pauling: 2,
      ionization_energies: [812.1],
      cpk_hex: "ab5c00",
      image: {
        title:
          "This is only an illustration, not polonium itself. A silvery, radioactive metal, producing so much heat that it gets liquid and ionizes the surrounding air",
        url: "https://images-of-elements.com/polonium.jpg",
        attribution:
          "Chemical ELements A Virtual Museum, CC BY 3.0 <https://creativecommons.org/licenses/by/3.0> source: https://images-of-elements.com/polonium.php",
      },
      block: "p",
    },
    {
      name: "Astatine",
      appearance: "unknown, probably metallic",
      atomic_mass: 210,
      boil: 610,
      category: "diatomic nonmetal",
      density: 6.35,
      discovered_by: "Dale R. Corson",
      melt: 575,
      molar_heat: null,
      named_by: null,
      number: 85,
      period: 6,
      group: 17,
      phase: "Solid",
      source: "https://pubchem.ncbi.nlm.nih.gov/element/Astatine",
      bohr_model_image:
        "https://storage.googleapis.com/search-ar-edu/periodic-table/element_085_astatine/element_085_astatine_srp_th.png",
      bohr_model_3d:
        "https://storage.googleapis.com/search-ar-edu/periodic-table/element_085_astatine/element_085_astatine.glb",
      spectral_img: null,
      summary:
        "Astatine is a very rare radioactive chemical element with the chemical symbol At and atomic number 85. It occurs on Earth as the decay product of various heavier elements. All its isotopes are short-lived; the most stable is astatine-210, with a half-life of 8.1 hours.",
      symbol: "At",
      xpos: 17,
      ypos: 6,
      wxpos: 31,
      wypos: 6,
      shells: [2, 8, 18, 32, 18, 7],
      electron_configuration:
        "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p5",
      electron_configuration_semantic: "[Xe] 4f14 5d10 6s2 6p5",
      electron_affinity: 233,
      electronegativity_pauling: 2.2,
      ionization_energies: [899.003],
      cpk_hex: "754f45",
      image: {
        title:
          "This is only an illustration, not astatine itself. Crystals similar to iodine, but darker in color than these, which due to the extreme radioactivity glow blue and evaporate to dark purple gas",
        url: "https://images-of-elements.com/astatine.jpg",
        attribution:
          "Chemical ELements A Virtual Museum, CC BY 3.0 <https://creativecommons.org/licenses/by/3.0> source: https://images-of-elements.com/astatine.php",
      },
      block: "p",
    },
    {
      name: "Radon",
      appearance:
        "colorless gas, occasionally glows green or red in discharge tubes",
      atomic_mass: 222,
      boil: 211.5,
      category: "noble gas",
      density: 9.73,
      discovered_by: "Friedrich Ernst Dorn",
      melt: 202,
      molar_heat: null,
      named_by: null,
      number: 86,
      period: 6,
      group: 18,
      phase: "Gas",
      source: "https://pubchem.ncbi.nlm.nih.gov/element/Radon",
      bohr_model_image:
        "https://storage.googleapis.com/search-ar-edu/periodic-table/element_086_radon/element_086_radon_srp_th.png",
      bohr_model_3d:
        "https://storage.googleapis.com/search-ar-edu/periodic-table/element_086_radon/element_086_radon.glb",
      spectral_img: "https://en.wikipedia.org/wiki/File:Radon_spectrum.png",
      summary:
        "Radon is a chemical element with symbol Rn and atomic number 86. It is a radioactive, colorless, odorless, tasteless noble gas, occurring naturally as a decay product of radium. Its most stable isotope, 222Rn, has a half-life of 3.8 days.",
      symbol: "Rn",
      xpos: 18,
      ypos: 6,
      wxpos: 32,
      wypos: 6,
      shells: [2, 8, 18, 32, 18, 8],
      electron_configuration:
        "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6",
      electron_configuration_semantic: "[Xe] 4f14 5d10 6s2 6p6",
      electron_affinity: -68,
      electronegativity_pauling: 2.2,
      ionization_energies: [1037],
      cpk_hex: "428296",
      image: {
        title:
          "This is only an illustration, not radon itself. Radon is said to glow red in discharge tubes, although it practically is never used for this, due to its strong radioactivity.",
        url: "https://images-of-elements.com/radon.jpg",
        attribution:
          "Chemical ELements A Virtual Museum, CC BY 3.0 <https://creativecommons.org/licenses/by/3.0> source: https://images-of-elements.com/radon.php",
      },
      block: "p",
    },
    {
      name: "Francium",
      appearance: null,
      atomic_mass: 223,
      boil: 950,
      category: "alkali metal",
      density: 1.87,
      discovered_by: "Marguerite Perey",
      melt: 300,
      molar_heat: null,
      named_by: null,
      number: 87,
      period: 7,
      group: 1,
      phase: "Solid",
      source: "https://pubchem.ncbi.nlm.nih.gov/element/Francium",
      bohr_model_image:
        "https://storage.googleapis.com/search-ar-edu/periodic-table/element_087_francium/element_087_francium_srp_th.png",
      bohr_model_3d:
        "https://storage.googleapis.com/search-ar-edu/periodic-table/element_087_francium/element_087_francium.glb",
      spectral_img: null,
      summary:
        "Francium is a chemical element with symbol Fr and atomic number 87. It used to be known as eka-caesium and actinium K. It is the second-least electronegative element, behind only caesium. Francium is a highly radioactive metal that decays into astatine, radium, and radon.",
      symbol: "Fr",
      xpos: 1,
      ypos: 7,
      wxpos: 1,
      wypos: 7,
      shells: [2, 8, 18, 32, 18, 8, 1],
      electron_configuration:
        "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s1",
      electron_configuration_semantic: "[Rn] 7s1",
      electron_affinity: 46.89,
      electronegativity_pauling: 0.79,
      ionization_energies: [380],
      cpk_hex: "420066",
      image: {
        title: "This is only an illustration, not francium itself.",
        url: "https://images-of-elements.com/francium.jpg",
        attribution:
          "Chemical ELements A Virtual Museum, CC BY 3.0 <https://creativecommons.org/licenses/by/3.0> source: https://images-of-elements.com/francium.jpg",
      },
      block: "s",
    },
    {
      name: "Radium",
      appearance: "silvery white metallic",
      atomic_mass: 226,
      boil: 2010,
      category: "alkaline earth metal",
      density: 5.5,
      discovered_by: "Pierre Curie",
      melt: 1233,
      molar_heat: null,
      named_by: null,
      number: 88,
      period: 7,
      group: 2,
      phase: "Solid",
      source: "https://pubchem.ncbi.nlm.nih.gov/element/Radium",
      bohr_model_image:
        "https://storage.googleapis.com/search-ar-edu/periodic-table/element_088_radium/element_088_radium_srp_th.png",
      bohr_model_3d:
        "https://storage.googleapis.com/search-ar-edu/periodic-table/element_088_radium/element_088_radium.glb",
      spectral_img: null,
      summary:
        "Radium is a chemical element with symbol Ra and atomic number 88. It is the sixth element in group 2 of the periodic table, also known as the alkaline earth metals. Pure radium is almost colorless, but it readily combines with nitrogen (rather than oxygen) on exposure to air, forming a black surface layer of radium nitride (Ra3N2).",
      symbol: "Ra",
      xpos: 2,
      ypos: 7,
      wxpos: 2,
      wypos: 7,
      shells: [2, 8, 18, 32, 18, 8, 2],
      electron_configuration:
        "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2",
      electron_configuration_semantic: "[Rn] 7s2",
      electron_affinity: 9.6485,
      electronegativity_pauling: 0.9,
      ionization_energies: [509.3, 979],
      cpk_hex: "007d00",
      image: {
        title:
          "Radium electroplated on a very small sample of copper foil and covered with polyurethane to prevent reaction with the air",
        url: "https://upload.wikimedia.org/wikipedia/commons/b/bb/Radium226.jpg",
        attribution:
          "grenadier, CC BY 3.0 <https://creativecommons.org/licenses/by/3.0>, via Wikimedia Commons",
      },
      block: "s",
    },
    {
      name: "Actinium",
      appearance: null,
      atomic_mass: 227,
      boil: 3500,
      category: "actinide",
      density: 10,
      discovered_by: "Friedrich Oskar Giesel",
      melt: 1500,
      molar_heat: 27.2,
      named_by: null,
      number: 89,
      period: 7,
      group: 3,
      phase: "Solid",
      source: "https://pubchem.ncbi.nlm.nih.gov/element/Actinium",
      bohr_model_image:
        "https://storage.googleapis.com/search-ar-edu/periodic-table/element_089_actinium/element_089_actinium_srp_th.png",
      bohr_model_3d:
        "https://storage.googleapis.com/search-ar-edu/periodic-table/element_089_actinium/element_089_actinium.glb",
      spectral_img: null,
      summary:
        "Actinium is a radioactive chemical element with symbol Ac (not to be confused with the abbreviation for an acetyl group) and atomic number 89, which was discovered in 1899. It was the first non-primordial radioactive element to be isolated. Polonium, radium and radon were observed before actinium, but they were not isolated until 1902.",
      symbol: "Ac",
      xpos: 3,
      ypos: 10,
      wxpos: 3,
      wypos: 7,
      shells: [2, 8, 18, 32, 18, 9, 2],
      electron_configuration:
        "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2 6d1",
      electron_configuration_semantic: "[Rn] 6d1 7s2",
      electron_affinity: 33.77,
      electronegativity_pauling: 1.1,
      ionization_energies: [499, 1170],
      cpk_hex: "70abfa",
      image: {
        title:
          "Actinium-225 medical radioisotope held in a v-vial at ORNL. The blue glow comes from the ionization of surrounding air by alpha particles",
        url: "https://upload.wikimedia.org/wikipedia/commons/2/27/Actinium_sample_%2831481701837%29.png",
        attribution:
          "Oak Ridge National Laboratory, CC BY 2.0 <https://creativecommons.org/licenses/by/2.0>, via Wikimedia Commons, source: https://www.flickr.com/photos/oakridgelab/31481701837/",
      },
      block: "f",
    },
    {
      name: "Thorium",
      appearance: "silvery, often with black tarnish",
      atomic_mass: 232.03774,
      boil: 5061,
      category: "actinide",
      density: 11.724,
      discovered_by: "Jöns Jakob Berzelius",
      melt: 2023,
      molar_heat: 26.23,
      named_by: null,
      number: 90,
      period: 7,
      group: 3,
      phase: "Solid",
      source: "https://pubchem.ncbi.nlm.nih.gov/element/Thorium",
      bohr_model_image:
        "https://storage.googleapis.com/search-ar-edu/periodic-table/element_090_thorium/element_090_thorium_srp_th.png",
      bohr_model_3d:
        "https://storage.googleapis.com/search-ar-edu/periodic-table/element_090_thorium/element_090_thorium.glb",
      spectral_img: null,
      summary:
        "Thorium is a chemical element with symbol Th and atomic number 90. A radioactive actinide metal, thorium is one of only two significantly radioactive elements that still occur naturally in large quantities as a primordial element (the other being uranium). It was discovered in 1828 by the Norwegian Reverend and amateur mineralogist Morten Thrane Esmark and identified by the Swedish chemist Jöns Jakob Berzelius, who named it after Thor, the Norse god of thunder.",
      symbol: "Th",
      xpos: 4,
      ypos: 10,
      wxpos: 4,
      wypos: 7,
      shells: [2, 8, 18, 32, 18, 10, 2],
      electron_configuration:
        "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2 6d2",
      electron_configuration_semantic: "[Rn] 6d2 7s2",
      electron_affinity: 112.72,
      electronegativity_pauling: 1.3,
      ionization_energies: [587, 1110, 1930, 2780],
      cpk_hex: "00baff",
      image: {
        title: "Thorium Metal in Ampoule, corroded",
        url: "https://upload.wikimedia.org/wikipedia/commons/f/f7/Thorium-1.jpg",
        attribution:
          "W. Oelen, CC BY-SA 3.0 <https://creativecommons.org/licenses/by-sa/3.0>, via Wikimedia Commons",
      },
      block: "f",
    },
    {
      name: "Protactinium",
      appearance: "bright, silvery metallic luster",
      atomic_mass: 231.035882,
      boil: 4300,
      category: "actinide",
      density: 15.37,
      discovered_by: "William Crookes",
      melt: 1841,
      molar_heat: null,
      named_by: "Otto Hahn",
      number: 91,
      period: 7,
      group: 3,
      phase: "Solid",
      source: "https://pubchem.ncbi.nlm.nih.gov/element/Protactinium",
      bohr_model_image:
        "https://storage.googleapis.com/search-ar-edu/periodic-table/element_091_protactinium/element_091_protactinium_srp_th.png",
      bohr_model_3d:
        "https://storage.googleapis.com/search-ar-edu/periodic-table/element_091_protactinium/element_091_protactinium.glb",
      spectral_img: null,
      summary:
        "Protactinium is a chemical element with symbol Pa and atomic number 91. It is a dense, silvery-gray metal which readily reacts with oxygen, water vapor and inorganic acids. It forms various chemical compounds where protactinium is usually present in the oxidation state +5, but can also assume +4 and even +2 or +3 states.",
      symbol: "Pa",
      xpos: 5,
      ypos: 10,
      wxpos: 5,
      wypos: 7,
      shells: [2, 8, 18, 32, 20, 9, 2],
      electron_configuration:
        "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2 5f2 6d1",
      electron_configuration_semantic: "[Rn] 5f2 6d1 7s2",
      electron_affinity: 53.03,
      electronegativity_pauling: 1.5,
      ionization_energies: [568],
      cpk_hex: "00a1ff",
      image: {
        title:
          "This sample of Protactinium-233 (dark circular area in the photo) was photographed in the light from its own radioactive emission (the lighter area) at the National Reactor Testing Station in Idaho.",
        url: "https://upload.wikimedia.org/wikipedia/commons/a/af/Protactinium-233.jpg",
        attribution: "ENERGY.GOV, Public domain, via Wikimedia Commons",
      },
      block: "f",
    },
    {
      name: "Uranium",
      appearance: null,
      atomic_mass: 238.028913,
      boil: 4404,
      category: "actinide",
      density: 19.1,
      discovered_by: "Martin Heinrich Klaproth",
      melt: 1405.3,
      molar_heat: 27.665,
      named_by: null,
      number: 92,
      period: 7,
      group: 3,
      phase: "Solid",
      source: "https://pubchem.ncbi.nlm.nih.gov/element/Uranium",
      bohr_model_image:
        "https://storage.googleapis.com/search-ar-edu/periodic-table/element_092_uranium/element_092_uranium_srp_th.png",
      bohr_model_3d:
        "https://storage.googleapis.com/search-ar-edu/periodic-table/element_092_uranium/element_092_uranium.glb",
      spectral_img: null,
      summary:
        "Uranium is a chemical element with symbol U and atomic number 92. It is a silvery-white metal in the actinide series of the periodic table. A uranium atom has 92 protons and 92 electrons, of which 6 are valence electrons.",
      symbol: "U",
      xpos: 6,
      ypos: 10,
      wxpos: 6,
      wypos: 7,
      shells: [2, 8, 18, 32, 21, 9, 2],
      electron_configuration:
        "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2 5f3 6d1",
      electron_configuration_semantic: "[Rn] 5f3 6d1 7s2",
      electron_affinity: 50.94,
      electronegativity_pauling: 1.38,
      ionization_energies: [597.6, 1420],
      cpk_hex: "008fff",
      image: {
        title:
          "A biscuit of uranium metal after reduction via the Ames Process. c.1943.",
        url: "https://upload.wikimedia.org/wikipedia/commons/b/b2/Ames_Process_uranium_biscuit.jpg",
        attribution:
          "Unknown authorUnknown author, Public domain, via Wikimedia Commons",
      },
      block: "f",
    },
    {
      name: "Neptunium",
      appearance: "silvery metallic",
      atomic_mass: 237,
      boil: 4447,
      category: "actinide",
      density: 20.45,
      discovered_by: "Edwin McMillan",
      melt: 912,
      molar_heat: 29.46,
      named_by: null,
      number: 93,
      period: 7,
      group: 3,
      phase: "Solid",
      source: "https://pubchem.ncbi.nlm.nih.gov/element/Neptunium",
      bohr_model_image:
        "https://storage.googleapis.com/search-ar-edu/periodic-table/element_093_neptunium/element_093_neptunium_srp_th.png",
      bohr_model_3d:
        "https://storage.googleapis.com/search-ar-edu/periodic-table/element_093_neptunium/element_093_neptunium.glb",
      spectral_img: null,
      summary:
        "Neptunium is a chemical element with symbol Np and atomic number 93. A radioactive actinide metal, neptunium is the first transuranic element. Its position in the periodic table just after uranium, named after the planet Uranus, led to it being named after Neptune, the next planet beyond Uranus.",
      symbol: "Np",
      xpos: 7,
      ypos: 10,
      wxpos: 7,
      wypos: 7,
      shells: [2, 8, 18, 32, 22, 9, 2],
      electron_configuration:
        "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2 5f4 6d1",
      electron_configuration_semantic: "[Rn] 5f4 6d1 7s2",
      electron_affinity: 45.85,
      electronegativity_pauling: 1.36,
      ionization_energies: [604.5],
      cpk_hex: "0080ff",
      image: {
        title: "Neptunium 237 sphere (6 kg)",
        url: "https://upload.wikimedia.org/wikipedia/commons/e/e5/Neptunium2.jpg",
        attribution:
          "Los Alamos National Laboratory,, Public domain, via Wikimedia Commons",
      },
      block: "f",
    },
    {
      name: "Plutonium",
      appearance: "silvery white, tarnishing to dark gray in air",
      atomic_mass: 244,
      boil: 3505,
      category: "actinide",
      density: 19.816,
      discovered_by: "Glenn T. Seaborg",
      melt: 912.5,
      molar_heat: 35.5,
      named_by: null,
      number: 94,
      period: 7,
      group: 3,
      phase: "Solid",
      source: "https://pubchem.ncbi.nlm.nih.gov/element/Plutonium",
      bohr_model_image:
        "https://storage.googleapis.com/search-ar-edu/periodic-table/element_094_plutonium/element_094_plutonium_srp_th.png",
      bohr_model_3d:
        "https://storage.googleapis.com/search-ar-edu/periodic-table/element_094_plutonium/element_094_plutonium.glb",
      spectral_img: null,
      summary:
        "Plutonium is a transuranic radioactive chemical element with symbol Pu and atomic number 94. It is an actinide metal of silvery-gray appearance that tarnishes when exposed to air, and forms a dull coating when oxidized. The element normally exhibits six allotropes and four oxidation states.",
      symbol: "Pu",
      xpos: 8,
      ypos: 10,
      wxpos: 8,
      wypos: 7,
      shells: [2, 8, 18, 32, 24, 8, 2],
      electron_configuration:
        "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2 5f6",
      electron_configuration_semantic: "[Rn] 5f6 7s2",
      electron_affinity: -48.33,
      electronegativity_pauling: 1.28,
      ionization_energies: [584.7],
      cpk_hex: "006bff",
      image: {
        title: "Plutonium Ring",
        url: "https://upload.wikimedia.org/wikipedia/commons/0/0f/Plutonium_ring.jpg",
        attribution:
          "Los Alamos National Laboratory, Attribution, via Wikimedia Commons",
      },
      block: "f",
    },
    {
      name: "Americium",
      appearance: "silvery white",
      atomic_mass: 243,
      boil: 2880,
      category: "actinide",
      density: 12,
      discovered_by: "Glenn T. Seaborg",
      melt: 1449,
      molar_heat: 62.7,
      named_by: null,
      number: 95,
      period: 7,
      group: 3,
      phase: "Solid",
      source: "https://pubchem.ncbi.nlm.nih.gov/element/Americium",
      bohr_model_image:
        "https://storage.googleapis.com/search-ar-edu/periodic-table/element_095_americium/element_095_americium_srp_th.png",
      bohr_model_3d:
        "https://storage.googleapis.com/search-ar-edu/periodic-table/element_095_americium/element_095_americium.glb",
      spectral_img:
        "https://en.wikipedia.org/wiki/File:Americium_spectrum_visible.png",
      summary:
        "Americium is a radioactive transuranic chemical element with symbol Am and atomic number 95. This member of the actinide series is located in the periodic table under the lanthanide element europium, and thus by analogy was named after the Americas. Americium was first produced in 1944 by the group of Glenn T.Seaborg from Berkeley, California, at the metallurgical laboratory of University of Chicago.",
      symbol: "Am",
      xpos: 9,
      ypos: 10,
      wxpos: 9,
      wypos: 7,
      shells: [2, 8, 18, 32, 25, 8, 2],
      electron_configuration:
        "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2 5f7",
      electron_configuration_semantic: "[Rn] 5f7 7s2",
      electron_affinity: 9.93,
      electronegativity_pauling: 1.13,
      ionization_energies: [578],
      cpk_hex: "545cf2",
      image: {
        title: "A small disc of Am-241 under the microscope.",
        url: "https://upload.wikimedia.org/wikipedia/commons/e/ee/Americium_microscope.jpg",
        attribution:
          "Bionerd, CC BY 3.0 <https://creativecommons.org/licenses/by/3.0>, via Wikimedia Commons",
      },
      block: "f",
    },
    {
      name: "Curium",
      appearance: "silvery metallic, glows purple in the dark",
      atomic_mass: 247,
      boil: 3383,
      category: "actinide",
      density: 13.51,
      discovered_by: "Glenn T. Seaborg",
      melt: 1613,
      molar_heat: null,
      named_by: null,
      number: 96,
      period: 7,
      group: 3,
      phase: "Solid",
      source: "https://pubchem.ncbi.nlm.nih.gov/element/Curium",
      bohr_model_image:
        "https://storage.googleapis.com/search-ar-edu/periodic-table/element_096_curium/element_096_curium_srp_th.png",
      bohr_model_3d:
        "https://storage.googleapis.com/search-ar-edu/periodic-table/element_096_curium/element_096_curium.glb",
      spectral_img: null,
      summary:
        "Curium is a transuranic radioactive chemical element with symbol Cm and atomic number 96. This element of the actinide series was named after Marie and Pierre Curie – both were known for their research on radioactivity. Curium was first intentionally produced and identified in July 1944 by the group of Glenn T. Seaborg at the University of California, Berkeley.",
      symbol: "Cm",
      xpos: 10,
      ypos: 10,
      wxpos: 10,
      wypos: 7,
      shells: [2, 8, 18, 32, 25, 9, 2],
      electron_configuration:
        "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2 5f7 6d1",
      electron_configuration_semantic: "[Rn] 5f7 6d1 7s2",
      electron_affinity: 27.17,
      electronegativity_pauling: 1.28,
      ionization_energies: [581],
      cpk_hex: "785ce3",
      image: {
        title:
          "A piece of curium, which emitts strong radiation that makes it glow",
        url: "https://images-of-elements.com/s/curium-glow.jpg",
        attribution:
          "European Union, The Actinide Group, Institute for Transuranium Elements (JRC-ITU), source: https://images-of-elements.com/curium.php",
      },
      block: "f",
    },
    {
      name: "Berkelium",
      appearance: "silvery",
      atomic_mass: 247,
      boil: 2900,
      category: "actinide",
      density: 14.78,
      discovered_by: "Lawrence Berkeley National Laboratory",
      melt: 1259,
      molar_heat: null,
      named_by: null,
      number: 97,
      period: 7,
      group: 3,
      phase: "Solid",
      source: "https://pubchem.ncbi.nlm.nih.gov/element/Berkelium",
      bohr_model_image:
        "https://storage.googleapis.com/search-ar-edu/periodic-table/element_097_berkelium/element_097_berkelium_srp_th.png",
      bohr_model_3d:
        "https://storage.googleapis.com/search-ar-edu/periodic-table/element_097_berkelium/element_097_berkelium.glb",
      spectral_img: null,
      summary:
        "Berkelium is a transuranic radioactive chemical element with symbol Bk and atomic number 97. It is a member of the actinide and transuranium element series. It is named after the city of Berkeley, California, the location of the University of California Radiation Laboratory where it was discovered in December 1949.",
      symbol: "Bk",
      xpos: 11,
      ypos: 10,
      wxpos: 11,
      wypos: 7,
      shells: [2, 8, 18, 32, 27, 8, 2],
      electron_configuration:
        "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2 5f9",
      electron_configuration_semantic: "[Rn] 5f9 7s2",
      electron_affinity: -165.24,
      electronegativity_pauling: 1.3,
      ionization_energies: [601],
      cpk_hex: "8a4fe3",
      image: {
        title:
          "It took 250 days to make enough berkelium, shown here (in dissolved state), to synthesize element 117",
        url: "https://upload.wikimedia.org/wikipedia/commons/f/fc/Berkelium.jpg",
        attribution:
          "ORNL, Department of Energy, Public domain, via Wikimedia Commons",
      },
      block: "f",
    },
    {
      name: "Californium",
      appearance: "silvery",
      atomic_mass: 251,
      boil: 1743,
      category: "actinide",
      density: 15.1,
      discovered_by: "Lawrence Berkeley National Laboratory",
      melt: 1173,
      molar_heat: null,
      named_by: null,
      number: 98,
      period: 7,
      group: 3,
      phase: "Solid",
      source: "https://pubchem.ncbi.nlm.nih.gov/element/Californium",
      bohr_model_image:
        "https://storage.googleapis.com/search-ar-edu/periodic-table/element_098_californium/element_098_californium_srp_th.png",
      bohr_model_3d:
        "https://storage.googleapis.com/search-ar-edu/periodic-table/element_098_californium/element_098_californium.glb",
      spectral_img: null,
      summary:
        "Californium is a radioactive metallic chemical element with symbol Cf and atomic number 98. The element was first made in 1950 at the University of California Radiation Laboratory in Berkeley, by bombarding curium with alpha particles (helium-4 ions). It is an actinide element, the sixth transuranium element to be synthesized, and has the second-highest atomic mass of all the elements that have been produced in amounts large enough to see with the unaided eye (after einsteinium).",
      symbol: "Cf",
      xpos: 12,
      ypos: 10,
      wxpos: 12,
      wypos: 7,
      shells: [2, 8, 18, 32, 28, 8, 2],
      electron_configuration:
        "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2 5f10",
      electron_configuration_semantic: "[Rn] 5f10 7s2",
      electron_affinity: -97.31,
      electronegativity_pauling: 1.3,
      ionization_energies: [608],
      cpk_hex: "a136d4",
      image: {
        title:
          "A disc of californium metal (249Cf, 10 mg). The source implies that the disc has a diameter about twice the thickness of a typical pin, or on the order of 1 mm",
        url: "https://upload.wikimedia.org/wikipedia/commons/9/93/Californium.jpg",
        attribution:
          "United States Department of Energy (see File:Einsteinium.jpg), Public domain, via Wikimedia Commons",
      },
      block: "f",
    },
    {
      name: "Einsteinium",
      appearance: "silver-colored",
      atomic_mass: 252,
      boil: 1269,
      category: "actinide",
      density: 8.84,
      discovered_by: "Lawrence Berkeley National Laboratory",
      melt: 1133,
      molar_heat: null,
      named_by: null,
      number: 99,
      period: 7,
      group: 3,
      phase: "Solid",
      source: "https://pubchem.ncbi.nlm.nih.gov/element/Einsteinium",
      bohr_model_image:
        "https://storage.googleapis.com/search-ar-edu/periodic-table/element_099_einsteinium/element_099_einsteinium_srp_th.png",
      bohr_model_3d:
        "https://storage.googleapis.com/search-ar-edu/periodic-table/element_099_einsteinium/element_099_einsteinium.glb",
      spectral_img: null,
      summary:
        "Einsteinium is a synthetic element with symbol Es and atomic number 99. It is the seventh transuranic element, and an actinide. Einsteinium was discovered as a component of the debris of the first hydrogen bomb explosion in 1952, and named after Albert Einstein.",
      symbol: "Es",
      xpos: 13,
      ypos: 10,
      wxpos: 13,
      wypos: 7,
      shells: [2, 8, 18, 32, 29, 8, 2],
      electron_configuration:
        "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2 5f11",
      electron_configuration_semantic: "[Rn] 5f11 7s2",
      electron_affinity: -28.6,
      electronegativity_pauling: 1.3,
      ionization_energies: [619],
      cpk_hex: "b31fd4",
      image: {
        title:
          "300 micrograms of Einsteinium 253, which has a half-life of 20 days.",
        url: "https://upload.wikimedia.org/wikipedia/commons/5/55/Einsteinium.jpg",
        attribution:
          "Haire, R. G., US Department of Energy.Touched up by Materialscientist at en.wikipedia., Public domain, via Wikimedia Commons",
      },
      block: "f",
    },
    {
      name: "Fermium",
      appearance: null,
      atomic_mass: 257,
      boil: null,
      category: "actinide",
      density: null,
      discovered_by: "Lawrence Berkeley National Laboratory",
      melt: 1800,
      molar_heat: null,
      named_by: null,
      number: 100,
      period: 7,
      group: 3,
      phase: "Solid",
      source: "https://pubchem.ncbi.nlm.nih.gov/element/Fermium",
      bohr_model_image:
        "https://storage.googleapis.com/search-ar-edu/periodic-table/element_100_fermium/element_100_fermium_srp_th.png",
      bohr_model_3d:
        "https://storage.googleapis.com/search-ar-edu/periodic-table/element_100_fermium/element_100_fermium.glb",
      spectral_img: null,
      summary:
        "Fermium is a synthetic element with symbol Fm and atomic number 100. It is a member of the actinide series. It is the heaviest element that can be formed by neutron bombardment of lighter elements, and hence the last element that can be prepared in macroscopic quantities, although pure fermium metal has not yet been prepared.",
      symbol: "Fm",
      xpos: 14,
      ypos: 10,
      wxpos: 14,
      wypos: 7,
      shells: [2, 8, 18, 32, 30, 8, 2],
      electron_configuration:
        "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2 5f12",
      electron_configuration_semantic: "[Rn] 5f12 7s2",
      electron_affinity: 33.96,
      electronegativity_pauling: 1.3,
      ionization_energies: [627],
      cpk_hex: "b31fba",
      image: {
        title:
          "Fermium was first observed in the fallout from the Ivy Mike nuclear test.",
        url: "https://upload.wikimedia.org/wikipedia/commons/5/58/Ivy_Mike_-_mushroom_cloud.jpg",
        attribution:
          "U.S. Department of Energy, Public domain, via Wikimedia Commons",
      },
      block: "f",
    },
    {
      name: "Mendelevium",
      appearance: null,
      atomic_mass: 258,
      boil: null,
      category: "actinide",
      density: null,
      discovered_by: "Lawrence Berkeley National Laboratory",
      melt: 1100,
      molar_heat: null,
      named_by: null,
      number: 101,
      period: 7,
      group: 3,
      phase: "Solid",
      source: "https://pubchem.ncbi.nlm.nih.gov/element/Mendelevium",
      bohr_model_image:
        "https://storage.googleapis.com/search-ar-edu/periodic-table/element_101_mendelevium/element_101_mendelevium_srp_th.png",
      bohr_model_3d:
        "https://storage.googleapis.com/search-ar-edu/periodic-table/element_101_mendelevium/element_101_mendelevium.glb",
      spectral_img: null,
      summary:
        "Mendelevium is a synthetic element with chemical symbol Md (formerly Mv) and atomic number 101. A metallic radioactive transuranic element in the actinide series, it is the first element that currently cannot be produced in macroscopic quantities through neutron bombardment of lighter elements. It is the antepenultimate actinide and the ninth transuranic element.",
      symbol: "Md",
      xpos: 15,
      ypos: 10,
      wxpos: 15,
      wypos: 7,
      shells: [2, 8, 18, 32, 31, 8, 2],
      electron_configuration:
        "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2 5f13",
      electron_configuration_semantic: "[Rn] 5f13 7s2",
      electron_affinity: 93.91,
      electronegativity_pauling: 1.3,
      ionization_energies: [635],
      cpk_hex: "b30da6",
      image: {
        title:
          "This is only an illustration, not mendelevium itself. Chemically similar to Thulium, the highly radioactive heavy metal emits very energetic α-radiation.",
        url: "https://images-of-elements.com/s/mendelevium.jpg",
        attribution:
          "Chemical Elments A Virtual Museum under a Creative Commons Attribution 3.0 Unported License, source: https://images-of-elements.com/mendelevium.php",
      },
      block: "f",
    },
    {
      name: "Nobelium",
      appearance: null,
      atomic_mass: 259,
      boil: null,
      category: "actinide",
      density: null,
      discovered_by: "Joint Institute for Nuclear Research",
      melt: 1100,
      molar_heat: null,
      named_by: null,
      number: 102,
      period: 7,
      group: 3,
      phase: "Solid",
      source: "https://pubchem.ncbi.nlm.nih.gov/element/Nobelium",
      bohr_model_image:
        "https://storage.googleapis.com/search-ar-edu/periodic-table/element_102_nobelium/element_102_nobelium_srp_th.png",
      bohr_model_3d:
        "https://storage.googleapis.com/search-ar-edu/periodic-table/element_102_nobelium/element_102_nobelium.glb",
      spectral_img: null,
      summary:
        "Nobelium is a synthetic chemical element with symbol No and atomic number 102. It is named in honor of Alfred Nobel, the inventor of dynamite and benefactor of science. A radioactive metal, it is the tenth transuranic element and is the penultimate member of the actinide series.",
      symbol: "No",
      xpos: 16,
      ypos: 10,
      wxpos: 16,
      wypos: 7,
      shells: [2, 8, 18, 32, 32, 8, 2],
      electron_configuration:
        "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2 5f14",
      electron_configuration_semantic: "[Rn] 5f14 7s2",
      electron_affinity: -223.22,
      electronegativity_pauling: 1.3,
      ionization_energies: [642],
      cpk_hex: "bd0d87",
      image: {
        title:
          "This is only an illustration, not nobelium itself. Nobelium can only be made in very small amounts and emits strong radiation of various kinds.",
        url: "https://images-of-elements.com/nobelium.jpg",
        attribution:
          "Chemical Elments A Virtual Museum under a Creative Commons Attribution 3.0 Unported License, source: https://images-of-elements.com/nobelium.php",
      },
      block: "f",
    },
    {
      name: "Lawrencium",
      appearance: null,
      atomic_mass: 266,
      boil: null,
      category: "actinide",
      density: null,
      discovered_by: "Lawrence Berkeley National Laboratory",
      melt: 1900,
      molar_heat: null,
      named_by: null,
      number: 103,
      period: 7,
      group: 3,
      phase: "Solid",
      source: "https://pubchem.ncbi.nlm.nih.gov/element/Lawrencium",
      bohr_model_image:
        "https://storage.googleapis.com/search-ar-edu/periodic-table/element_103_lawrencium/element_103_lawrencium_srp_th.png",
      bohr_model_3d:
        "https://storage.googleapis.com/search-ar-edu/periodic-table/element_103_lawrencium/element_103_lawrencium.glb",
      spectral_img: null,
      summary:
        "Lawrencium is a synthetic chemical element with chemical symbol Lr (formerly Lw) and atomic number 103. It is named in honor of Ernest Lawrence, inventor of the cyclotron, a device that was used to discover many artificial radioactive elements. A radioactive metal, lawrencium is the eleventh transuranic element and is also the final member of the actinide series.",
      symbol: "Lr",
      xpos: 17,
      ypos: 10,
      wxpos: 17,
      wypos: 7,
      shells: [2, 8, 18, 32, 32, 8, 3],
      electron_configuration:
        "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2 5f14 7p1",
      electron_configuration_semantic: "[Rn] 5f14 7s2 7p1",
      electron_affinity: -30.04,
      electronegativity_pauling: 1.3,
      ionization_energies: [470],
      cpk_hex: "c70066",
      image: {
        title:
          "This is only an illustration, not lawrencium itself. Lawrencium can only be made in very small amounts and emits strong radiation",
        url: "https://images-of-elements.com/lawrencium.jpg",
        attribution:
          "Chemical Elments A Virtual Museum under a Creative Commons Attribution 3.0 Unported License, source: https://images-of-elements.com/lawrencium.php",
      },
      block: "d",
    },
    {
      name: "Rutherfordium",
      appearance: null,
      atomic_mass: 267,
      boil: 5800,
      category: "transition metal",
      density: 23.2,
      discovered_by: "Joint Institute for Nuclear Research",
      melt: 2400,
      molar_heat: null,
      named_by: null,
      number: 104,
      period: 7,
      group: 4,
      phase: "Solid",
      source: "https://pubchem.ncbi.nlm.nih.gov/element/Rutherfordium",
      bohr_model_image:
        "https://storage.googleapis.com/search-ar-edu/periodic-table/element_104_rutherfordium/element_104_rutherfordium_srp_th.png",
      bohr_model_3d:
        "https://storage.googleapis.com/search-ar-edu/periodic-table/element_104_rutherfordium/element_104_rutherfordium.glb",
      spectral_img: null,
      summary:
        "Rutherfordium is a chemical element with symbol Rf and atomic number 104, named in honor of physicist Ernest Rutherford. It is a synthetic element (an element that can be created in a laboratory but is not found in nature) and radioactive; the most stable known isotope, 267Rf, has a half-life of approximately 1.3 hours. In the periodic table of the elements, it is a d - block element and the second of the fourth - row transition elements.",
      symbol: "Rf",
      xpos: 4,
      ypos: 7,
      wxpos: 18,
      wypos: 7,
      shells: [2, 8, 18, 32, 32, 10, 2],
      electron_configuration:
        "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2 5f14 6d2",
      electron_configuration_semantic: "[Rn] 5f14 6d2 7s2",
      electron_affinity: null,
      electronegativity_pauling: null,
      ionization_energies: [580],
      cpk_hex: "cc0059",
      image: {
        title:
          "Decay traces in a spark chamber, not of rutherfordium, but of a pion. This is a completely different, unrelated particle, but the decay of rutherfordium would make streaks there, too.",
        url: "https://images-of-elements.com/s/rutherfordium.jpg",
        attribution:
          "Image © CERN, Chemical Elments A Virtual Museum under a Creative Commons Attribution 3.0 Unported License, source: https://images-of-elements.com/rutherfordium.php",
      },
      block: "d",
    },
    {
      name: "Dubnium",
      appearance: null,
      atomic_mass: 268,
      boil: null,
      category: "transition metal",
      density: 29.3,
      discovered_by: "Joint Institute for Nuclear Research",
      melt: null,
      molar_heat: null,
      named_by: null,
      number: 105,
      period: 7,
      group: 5,
      phase: "Solid",
      source: "https://pubchem.ncbi.nlm.nih.gov/element/Dubnium",
      bohr_model_image:
        "https://storage.googleapis.com/search-ar-edu/periodic-table/element_105_dubnium/element_105_dubnium_srp_th.png",
      bohr_model_3d:
        "https://storage.googleapis.com/search-ar-edu/periodic-table/element_105_dubnium/element_105_dubnium.glb",
      spectral_img: null,
      summary:
        "Dubnium is a chemical element with symbol Db and atomic number 105. It is named after the town of Dubna in Russia (north of Moscow), where it was first produced. It is a synthetic element (an element that can be created in a laboratory but is not found in nature) and radioactive; the most stable known isotope, dubnium-268, has a half-life of approximately 28 hours.",
      symbol: "Db",
      xpos: 5,
      ypos: 7,
      wxpos: 19,
      wypos: 7,
      shells: [2, 8, 18, 32, 32, 11, 2],
      electron_configuration:
        "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2 5f14 6d3",
      electron_configuration_semantic: "*[Rn] 5f14 6d3 7s2",
      electron_affinity: null,
      electronegativity_pauling: null,
      ionization_energies: [],
      cpk_hex: "d1004f",
      image: {
        title: "No Image Found",
        url: "https://images-of-elements.com/s/transactinoid.png",
        attribution:
          "Chemical Elments A Virtual Museum under a Creative Commons Attribution 3.0 Unported License, source: https://images-of-elements.com/dubnium.php",
      },
      block: "d",
    },
    {
      name: "Seaborgium",
      appearance: null,
      atomic_mass: 269,
      boil: null,
      category: "transition metal",
      density: 35,
      discovered_by: "Lawrence Berkeley National Laboratory",
      melt: null,
      molar_heat: null,
      named_by: null,
      number: 106,
      period: 7,
      group: 6,
      phase: "Solid",
      source: "https://pubchem.ncbi.nlm.nih.gov/element/Seaborgium",
      bohr_model_image:
        "https://storage.googleapis.com/search-ar-edu/periodic-table/element_106_seaborgium/element_106_seaborgium_srp_th.png",
      bohr_model_3d:
        "https://storage.googleapis.com/search-ar-edu/periodic-table/element_106_seaborgium/element_106_seaborgium.glb",
      spectral_img: null,
      summary:
        "Seaborgium is a synthetic element with symbol Sg and atomic number 106. Its most stable isotope 271Sg has a half-life of 1.9 minutes. A more recently discovered isotope 269Sg has a potentially slightly longer half-life (ca.",
      symbol: "Sg",
      xpos: 6,
      ypos: 7,
      wxpos: 20,
      wypos: 7,
      shells: [2, 8, 18, 32, 32, 12, 2],
      electron_configuration:
        "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2 5f14 6d4",
      electron_configuration_semantic: "*[Rn] 5f14 6d4 7s2",
      electron_affinity: null,
      electronegativity_pauling: null,
      ionization_energies: [],
      cpk_hex: "d90045",
      image: {
        title: "No Image Found",
        url: "https://images-of-elements.com/s/transactinoid.png",
        attribution:
          "Chemical Elments A Virtual Museum under a Creative Commons Attribution 3.0 Unported License, source: https://images-of-elements.com/seaborgium.php",
      },
      block: "d",
    },
    {
      name: "Bohrium",
      appearance: null,
      atomic_mass: 270,
      boil: null,
      category: "transition metal",
      density: 37.1,
      discovered_by: "Gesellschaft für Schwerionenforschung",
      melt: null,
      molar_heat: null,
      named_by: null,
      number: 107,
      period: 7,
      group: 7,
      phase: "Solid",
      source: "https://pubchem.ncbi.nlm.nih.gov/element/Bohrium",
      bohr_model_image:
        "https://storage.googleapis.com/search-ar-edu/periodic-table/element_107_bohrium/element_107_bohrium_srp_th.png",
      bohr_model_3d:
        "https://storage.googleapis.com/search-ar-edu/periodic-table/element_107_bohrium/element_107_bohrium.glb",
      spectral_img: null,
      summary:
        "Bohrium is a chemical element with symbol Bh and atomic number 107. It is named after Danish physicist Niels Bohr. It is a synthetic element (an element that can be created in a laboratory but is not found in nature) and radioactive; the most stable known isotope, 270Bh, has a half-life of approximately 61 seconds.",
      symbol: "Bh",
      xpos: 7,
      ypos: 7,
      wxpos: 21,
      wypos: 7,
      shells: [2, 8, 18, 32, 32, 13, 2],
      electron_configuration:
        "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2 5f14 6d5",
      electron_configuration_semantic: "*[Rn] 5f14 6d5 7s2",
      electron_affinity: null,
      electronegativity_pauling: null,
      ionization_energies: [],
      cpk_hex: "e00038",
      image: {
        title: "No Image Found",
        url: "https://images-of-elements.com/s/transactinoid.png",
        attribution:
          "Chemical Elments A Virtual Museum under a Creative Commons Attribution 3.0 Unported License, source: https://images-of-elements.com/bohrium.php",
      },
      block: "d",
    },
    {
      name: "Hassium",
      appearance: null,
      atomic_mass: 269,
      boil: null,
      category: "transition metal",
      density: 40.7,
      discovered_by: "Gesellschaft für Schwerionenforschung",
      melt: 126,
      molar_heat: null,
      named_by: null,
      number: 108,
      period: 7,
      group: 8,
      phase: "Solid",
      source: "https://pubchem.ncbi.nlm.nih.gov/element/Hassium",
      bohr_model_image:
        "https://storage.googleapis.com/search-ar-edu/periodic-table/element_108_hassium/element_108_hassium_srp_th.png",
      bohr_model_3d:
        "https://storage.googleapis.com/search-ar-edu/periodic-table/element_108_hassium/element_108_hassium.glb",
      spectral_img: null,
      summary:
        "Hassium is a chemical element with symbol Hs and atomic number 108, named after the German state of Hesse. It is a synthetic element (an element that can be created in a laboratory but is not found in nature) and radioactive; the most stable known isotope, 269Hs, has a half-life of approximately 9.7 seconds, although an unconfirmed metastable state, 277mHs, may have a longer half-life of about 130 seconds. More than 100 atoms of hassium have been synthesized to date.",
      symbol: "Hs",
      xpos: 8,
      ypos: 7,
      wxpos: 22,
      wypos: 7,
      shells: [2, 8, 18, 32, 32, 14, 2],
      electron_configuration:
        "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2 5f14 6d6",
      electron_configuration_semantic: "*[Rn] 5f14 6d6 7s2",
      electron_affinity: null,
      electronegativity_pauling: null,
      ionization_energies: [],
      cpk_hex: "e6002e",
      image: {
        title: "No Image Found",
        url: "https://images-of-elements.com/s/transactinoid.png",
        attribution:
          "Chemical Elments A Virtual Museum under a Creative Commons Attribution 3.0 Unported License, source: https://images-of-elements.com/hassium.php",
      },
      block: "d",
    },
    {
      name: "Meitnerium",
      appearance: null,
      atomic_mass: 278,
      boil: null,
      category: "transition metal",
      density: 37.4,
      discovered_by: "Gesellschaft für Schwerionenforschung",
      melt: null,
      molar_heat: null,
      named_by: null,
      number: 109,
      period: 7,
      group: 9,
      phase: "Solid",
      source: "https://pubchem.ncbi.nlm.nih.gov/element/Meitnerium",
      bohr_model_image:
        "https://storage.googleapis.com/search-ar-edu/periodic-table/element_109_meitnerium/element_109_meitnerium_srp_th.png",
      bohr_model_3d:
        "https://storage.googleapis.com/search-ar-edu/periodic-table/element_109_meitnerium/element_109_meitnerium.glb",
      spectral_img: null,
      summary:
        "Meitnerium is a chemical element with symbol Mt and atomic number 109. It is an extremely radioactive synthetic element (an element not found in nature that can be created in a laboratory). The most stable known isotope, meitnerium-278, has a half-life of 7.6 seconds.",
      symbol: "Mt",
      xpos: 9,
      ypos: 7,
      wxpos: 23,
      wypos: 7,
      shells: [2, 8, 18, 32, 32, 15, 2],
      electron_configuration:
        "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2 5f14 6d7",
      electron_configuration_semantic: "*[Rn] 5f14 6d7 7s2",
      electron_affinity: null,
      electronegativity_pauling: null,
      ionization_energies: [],
      cpk_hex: "eb0026",
      image: {
        title: "No Image Found",
        url: "https://images-of-elements.com/s/transactinoid.png",
        attribution:
          "Chemical Elments A Virtual Museum under a Creative Commons Attribution 3.0 Unported License, source: https://images-of-elements.com/meitnerium.php",
      },
      block: "d",
    },
    {
      name: "Darmstadtium",
      appearance: null,
      atomic_mass: 281,
      boil: null,
      category: "transition metal",
      density: 34.8,
      discovered_by: "Gesellschaft für Schwerionenforschung",
      melt: null,
      molar_heat: null,
      named_by: null,
      number: 110,
      period: 7,
      group: 10,
      phase: "Solid",
      source: "https://pubchem.ncbi.nlm.nih.gov/element/Darmstadtium",
      bohr_model_image:
        "https://storage.googleapis.com/search-ar-edu/periodic-table/element_110_darmstadtium/element_110_darmstadtium_srp_th.png",
      bohr_model_3d:
        "https://storage.googleapis.com/search-ar-edu/periodic-table/element_110_darmstadtium/element_110_darmstadtium.glb",
      spectral_img: null,
      summary:
        "Darmstadtium is a chemical element with symbol Ds and atomic number 110. It is an extremely radioactive synthetic element. The most stable known isotope, darmstadtium-281, has a half-life of approximately 10 seconds.",
      symbol: "Ds",
      xpos: 10,
      ypos: 7,
      wxpos: 24,
      wypos: 7,
      shells: [2, 8, 18, 32, 32, 16, 2],
      electron_configuration:
        "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2 5f14 6d8",
      electron_configuration_semantic: "*[Rn] 5f14 6d9 7s1",
      electron_affinity: null,
      electronegativity_pauling: null,
      ionization_energies: [],
      cpk_hex: null,
      image: {
        title: "No Image Found",
        url: "https://images-of-elements.com/s/transactinoid.png",
        attribution:
          "Chemical Elments A Virtual Museum under a Creative Commons Attribution 3.0 Unported License, source: https://images-of-elements.com/darmstadtium.php",
      },
      block: "d",
    },
    {
      name: "Roentgenium",
      appearance: null,
      atomic_mass: 282,
      boil: null,
      category: "transition metal",
      density: 28.7,
      discovered_by: "Gesellschaft für Schwerionenforschung",
      melt: null,
      molar_heat: null,
      named_by: null,
      number: 111,
      period: 7,
      group: 11,
      phase: "Solid",
      source: "https://pubchem.ncbi.nlm.nih.gov/element/Roentgenium",
      bohr_model_image:
        "https://storage.googleapis.com/search-ar-edu/periodic-table/element_111_roentgenium/element_111_roentgenium_srp_th.png",
      bohr_model_3d:
        "https://storage.googleapis.com/search-ar-edu/periodic-table/element_111_roentgenium/element_111_roentgenium.glb",
      spectral_img: null,
      summary:
        "Roentgenium is a chemical element with symbol Rg and atomic number 111. It is an extremely radioactive synthetic element (an element that can be created in a laboratory but is not found in nature); the most stable known isotope, roentgenium-282, has a half-life of 2.1 minutes. Roentgenium was first created in 1994 by the GSI Helmholtz Centre for Heavy Ion Research near Darmstadt, Germany.",
      symbol: "Rg",
      xpos: 11,
      ypos: 7,
      wxpos: 25,
      wypos: 7,
      shells: [2, 8, 18, 32, 32, 17, 2],
      electron_configuration:
        "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2 5f14 6d9",
      electron_configuration_semantic: "*[Rn] 5f14 6d10 7s1",
      electron_affinity: 151,
      electronegativity_pauling: null,
      ionization_energies: [],
      cpk_hex: null,
      image: {
        title: "No Image Found",
        url: "https://images-of-elements.com/s/transactinoid.png",
        attribution:
          "Chemical Elments A Virtual Museum under a Creative Commons Attribution 3.0 Unported License, source: https://images-of-elements.com/roentgenium.php",
      },
      block: "d",
    },
    {
      name: "Copernicium",
      appearance: null,
      atomic_mass: 285,
      boil: 3570,
      category: "transition metal",
      density: 14,
      discovered_by: "Gesellschaft für Schwerionenforschung",
      melt: null,
      molar_heat: null,
      named_by: null,
      number: 112,
      period: 7,
      group: 12,
      phase: "Liquid",
      source: "https://pubchem.ncbi.nlm.nih.gov/element/Copernicium",
      bohr_model_image:
        "https://storage.googleapis.com/search-ar-edu/periodic-table/element_112_copernicium/element_112_copernicium_srp_th.png",
      bohr_model_3d:
        "https://storage.googleapis.com/search-ar-edu/periodic-table/element_112_copernicium/element_112_copernicium.glb",
      spectral_img: null,
      summary:
        "Copernicium is a chemical element with symbol Cn and atomic number 112. It is an extremely radioactive synthetic element that can only be created in a laboratory. The most stable known isotope, copernicium-285, has a half-life of approximately 29 seconds, but it is possible that this copernicium isotope may have a nuclear isomer with a longer half-life, 8.9 min.",
      symbol: "Cn",
      xpos: 12,
      ypos: 7,
      wxpos: 26,
      wypos: 7,
      shells: [2, 8, 18, 32, 32, 18, 2],
      electron_configuration:
        "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2 5f14 6d10",
      electron_configuration_semantic: "*[Rn] 5f14 6d10 7s2",
      electron_affinity: null,
      electronegativity_pauling: null,
      ionization_energies: [],
      cpk_hex: null,
      image: {
        title: "No Image Found",
        url: "https://images-of-elements.com/s/transactinoid.png",
        attribution:
          "Chemical Elments A Virtual Museum under a Creative Commons Attribution 3.0 Unported License, source: https://images-of-elements.com/copernicium.php",
      },
      block: "d",
    },
    {
      name: "Nihonium",
      appearance: null,
      atomic_mass: 286,
      boil: 1430,
      category: "post-transition metal",
      density: 16,
      discovered_by: "RIKEN",
      melt: 700,
      molar_heat: null,
      named_by: null,
      number: 113,
      period: 7,
      group: 13,
      phase: "Solid",
      source: "https://pubchem.ncbi.nlm.nih.gov/element/Ununtrium",
      bohr_model_image:
        "https://storage.googleapis.com/search-ar-edu/periodic-table/element_113_nihonium/element_113_nihonium_srp_th.png",
      bohr_model_3d:
        "https://storage.googleapis.com/search-ar-edu/periodic-table/element_113_nihonium/element_113_nihonium.glb",
      spectral_img: null,
      summary:
        "Nihonium is a chemical element with atomic number 113. It has a symbol Nh. It is a synthetic element (an element that can be created in a laboratory but is not found in nature) and is extremely radioactive; its most stable known isotope, nihonium-286, has a half-life of 20 seconds.",
      symbol: "Nh",
      xpos: 13,
      ypos: 7,
      wxpos: 27,
      wypos: 7,
      shells: [2, 8, 18, 32, 32, 18, 3],
      electron_configuration:
        "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2 5f14 6d10 7p1",
      electron_configuration_semantic: "*[Rn] 5f14 6d10 7s2 7p1",
      electron_affinity: 66.6,
      electronegativity_pauling: null,
      ionization_energies: [],
      cpk_hex: null,
      image: {
        title: "No Image Found",
        url: "https://images-of-elements.com/s/transactinoid.png",
        attribution:
          "Chemical Elments A Virtual Museum under a Creative Commons Attribution 3.0 Unported License, source: https://images-of-elements.com/nihonium.php",
      },
      block: "p",
    },
    {
      name: "Flerovium",
      appearance: null,
      atomic_mass: 289,
      boil: 420,
      category: "post-transition metal",
      density: 14,
      discovered_by: "Joint Institute for Nuclear Research",
      melt: 340,
      molar_heat: null,
      named_by: null,
      number: 114,
      period: 7,
      group: 14,
      phase: "Solid",
      source: "https://pubchem.ncbi.nlm.nih.gov/element/Flerovium",
      bohr_model_image:
        "https://storage.googleapis.com/search-ar-edu/periodic-table/element_114_flerovium/element_114_flerovium_srp_th.png",
      bohr_model_3d:
        "https://storage.googleapis.com/search-ar-edu/periodic-table/element_114_flerovium/element_114_flerovium.glb",
      spectral_img: null,
      summary:
        "Flerovium is a superheavy artificial chemical element with symbol Fl and atomic number 114. It is an extremely radioactive synthetic element. The element is named after the Flerov Laboratory of Nuclear Reactions of the Joint Institute for Nuclear Research in Dubna, Russia, where the element was discovered in 1998.",
      symbol: "Fl",
      xpos: 14,
      ypos: 7,
      wxpos: 28,
      wypos: 7,
      shells: [2, 8, 18, 32, 32, 18, 4],
      electron_configuration:
        "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2 5f14 6d10 7p2",
      electron_configuration_semantic: "*[Rn] 5f14 6d10 7s2 7p2",
      electron_affinity: null,
      electronegativity_pauling: null,
      ionization_energies: [],
      cpk_hex: null,
      image: {
        title: "No Image Found",
        url: "https://images-of-elements.com/s/transactinoid.png",
        attribution:
          "Chemical Elments A Virtual Museum under a Creative Commons Attribution 3.0 Unported License, source: https://images-of-elements.com/flerovium.php",
      },
      block: "p",
    },
    {
      name: "Moscovium",
      appearance: null,
      atomic_mass: 289,
      boil: 1400,
      category: "post-transition metal",
      density: 13.5,
      discovered_by: "Joint Institute for Nuclear Research",
      melt: 670,
      molar_heat: null,
      named_by: null,
      number: 115,
      period: 7,
      group: 15,
      phase: "Solid",
      source: "https://pubchem.ncbi.nlm.nih.gov/element/Ununpentium",
      bohr_model_image:
        "https://storage.googleapis.com/search-ar-edu/periodic-table/element_115_moscovium/element_115_moscovium_srp_th.png",
      bohr_model_3d:
        "https://storage.googleapis.com/search-ar-edu/periodic-table/element_115_moscovium/element_115_moscovium.glb",
      spectral_img: null,
      summary:
        "Moscovium is the name of a synthetic superheavy element in the periodic table that has the symbol Mc and has the atomic number 115. It is an extremely radioactive element; its most stable known isotope, moscovium-289, has a half-life of only 220 milliseconds. It is also known as eka-bismuth or simply element 115.",
      symbol: "Mc",
      xpos: 15,
      ypos: 7,
      wxpos: 29,
      wypos: 7,
      shells: [2, 8, 18, 32, 32, 18, 5],
      electron_configuration:
        "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2 5f14 6d10 7p3",
      electron_configuration_semantic: "*[Rn] 5f14 6d10 7s2 7p3",
      electron_affinity: 35.3,
      electronegativity_pauling: null,
      ionization_energies: [],
      cpk_hex: null,
      image: {
        title: "No Image Found",
        url: "https://images-of-elements.com/s/transactinoid.png",
        attribution:
          "Chemical Elments A Virtual Museum under a Creative Commons Attribution 3.0 Unported License, source: https://images-of-elements.com/moscovium.php",
      },
      block: "p",
    },
    {
      name: "Livermorium",
      appearance: null,
      atomic_mass: 293,
      boil: 1085,
      category: "post-transition metal",
      density: 12.9,
      discovered_by: "Joint Institute for Nuclear Research",
      melt: 709,
      molar_heat: null,
      named_by: null,
      number: 116,
      period: 7,
      group: 16,
      phase: "Solid",
      source: "https://pubchem.ncbi.nlm.nih.gov/element/Livermorium",
      bohr_model_image:
        "https://storage.googleapis.com/search-ar-edu/periodic-table/element_116_livermorium/element_116_livermorium_srp_th.png",
      bohr_model_3d:
        "https://storage.googleapis.com/search-ar-edu/periodic-table/element_116_livermorium/element_116_livermorium.glb",
      spectral_img: null,
      summary:
        "Livermorium is a synthetic superheavy element with symbol Lv and atomic number 116. It is an extremely radioactive element that has only been created in the laboratory and has not been observed in nature. The element is named after the Lawrence Livermore National Laboratory in the United States, which collaborated with the Joint Institute for Nuclear Research in Dubna, Russia to discover livermorium in 2000.",
      symbol: "Lv",
      xpos: 16,
      ypos: 7,
      wxpos: 30,
      wypos: 7,
      shells: [2, 8, 18, 32, 32, 18, 6],
      electron_configuration:
        "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2 5f14 6d10 7p4",
      electron_configuration_semantic: "*[Rn] 5f14 6d10 7s2 7p4",
      electron_affinity: 74.9,
      electronegativity_pauling: null,
      ionization_energies: [],
      cpk_hex: null,
      image: {
        title: "No Image Found",
        url: "https://images-of-elements.com/s/transactinoid.png",
        attribution:
          "Chemical Elments A Virtual Museum under a Creative Commons Attribution 3.0 Unported License, source: https://images-of-elements.com/livermorium.php",
      },
      block: "p",
    },
    {
      name: "Tennessine",
      appearance: null,
      atomic_mass: 294,
      boil: 883,
      category: "diatomic nonmetal",
      density: 7.17,
      discovered_by: "Joint Institute for Nuclear Research",
      melt: 723,
      molar_heat: null,
      named_by: null,
      number: 117,
      period: 7,
      group: 17,
      phase: "Solid",
      source: "https://pubchem.ncbi.nlm.nih.gov/element/Tennessine",
      bohr_model_image:
        "https://storage.googleapis.com/search-ar-edu/periodic-table/element_117_tennessine/element_117_tennessine_srp_th.png",
      bohr_model_3d:
        "https://storage.googleapis.com/search-ar-edu/periodic-table/element_117_tennessine/element_117_tennessine.glb",
      spectral_img: null,
      summary:
        "Tennessine is a superheavy artificial chemical element with an atomic number of 117 and a symbol of Ts. Also known as eka-astatine or element 117, it is the second-heaviest known element and penultimate element of the 7th period of the periodic table. As of 2016, fifteen tennessine atoms have been observed: six when it was first synthesized in 2010, seven in 2012, and two in 2014.",
      symbol: "Ts",
      xpos: 17,
      ypos: 7,
      wxpos: 31,
      wypos: 7,
      shells: [2, 8, 18, 32, 32, 18, 7],
      electron_configuration:
        "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2 5f14 6d10 7p5",
      electron_configuration_semantic: "*[Rn] 5f14 6d10 7s2 7p5",
      electron_affinity: 165.9,
      electronegativity_pauling: null,
      ionization_energies: [],
      cpk_hex: null,
      image: {
        title: "No Image Found",
        url: "https://images-of-elements.com/s/transactinoid.png",
        attribution:
          "Chemical Elments A Virtual Museum under a Creative Commons Attribution 3.0 Unported License, source: https://images-of-elements.com/tenessine.php",
      },
      block: "p",
    },
    {
      name: "Oganesson",
      appearance: null,
      atomic_mass: 294,
      boil: 350,
      category: "noble gas",
      density: 4.95,
      discovered_by: "Joint Institute for Nuclear Research",
      melt: null,
      molar_heat: null,
      named_by: null,
      number: 118,
      period: 7,
      group: 18,
      phase: "Solid",
      source: "https://pubchem.ncbi.nlm.nih.gov/element/Oganesson",
      bohr_model_image:
        "https://storage.googleapis.com/search-ar-edu/periodic-table/element_118_oganesson/element_118_oganesson_srp_th.png",
      bohr_model_3d:
        "https://storage.googleapis.com/search-ar-edu/periodic-table/element_118_oganesson/element_118_oganesson.glb",
      spectral_img: null,
      summary:
        "Oganesson is IUPAC's name for the transactinide element with the atomic number 118 and element symbol Og. It is also known as eka-radon or element 118, and on the periodic table of the elements it is a p-block element and the last one of the 7th period. Oganesson is currently the only synthetic member of group 18.",
      symbol: "Og",
      xpos: 18,
      ypos: 7,
      wxpos: 32,
      wypos: 7,
      shells: [2, 8, 18, 32, 32, 18, 8],
      electron_configuration:
        "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2 5f14 6d10 7p6",
      electron_configuration_semantic: "*[Rn] 5f14 6d10 7s2 7p6",
      electron_affinity: 5.40318,
      electronegativity_pauling: null,
      ionization_energies: [],
      cpk_hex: null,
      image: {
        title: "No Image Found",
        url: "https://images-of-elements.com/s/transactinoid.png",
        attribution:
          "Chemical Elments A Virtual Museum under a Creative Commons Attribution 3.0 Unported License, source: https://images-of-elements.com/oganesson.php",
      },
      block: "p",
    },
    {
      name: "Ununennium",
      appearance: null,
      atomic_mass: 315,
      boil: 630,
      category: "unknown, but predicted to be an alkali metal",
      density: 3,
      discovered_by: "GSI Helmholtz Centre for Heavy Ion Research",
      melt: null,
      molar_heat: null,
      named_by: null,
      number: 119,
      period: 8,
      group: 1,
      phase: "Solid",
      source: "https://pubchem.ncbi.nlm.nih.gov/element/Ununennium",
      bohr_model_image: null,
      bohr_model_3d: null,
      spectral_img: null,
      summary:
        "Ununennium, also known as eka-francium or simply element 119, is the hypothetical chemical element with symbol Uue and atomic number 119. Ununennium and Uue are the temporary systematic IUPAC name and symbol respectively, until a permanent name is decided upon. In the periodic table of the elements, it is expected to be an s-block element, an alkali metal, and the first element in the eighth period.",
      symbol: "Uue",
      xpos: 1,
      ypos: 8,
      wxpos: 1,
      wypos: 8,
      shells: [2, 8, 18, 32, 32, 18, 8, 1],
      electron_configuration:
        "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2 5f14 6d10 7p6 8s1",
      electron_configuration_semantic: "*[Uuo] 8s1",
      electron_affinity: 63.87,
      electronegativity_pauling: null,
      ionization_energies: [],
      cpk_hex: null,
      image: {
        title: "No Image Found",
        url: "https://images-of-elements.com/s/transactinoid.png",
        attribution:
          "Chemical Elments A Virtual Museum under a Creative Commons Attribution 3.0 Unported License, source: https://images-of-elements.com",
      },
      block: "s",
    },
  ],
  tt = { elements: Eg };
function Pg({ data: e }) {
  return s.jsx("div", {
    className: "",
    children: s.jsxs("div", {
      className: "flex",
      children: [
        s.jsxs("div", {
          className: "md:w-1/2 w-full md:grid md:grid-cols-9",
          children: [
            s.jsx(y, { elementData: e[10] }),
            s.jsx(y, { elementData: e[11] }),
            s.jsx("div", { className: "", children: " " }),
            s.jsx("div", { className: "", children: " " }),
            s.jsx("div", { className: "", children: " " }),
            s.jsx("div", { className: "", children: "  " }),
            s.jsx("div", { className: "", children: "  " }),
            s.jsx("div", { className: "", children: " " }),
            s.jsx("div", { className: "", children: "  " }),
          ],
        }),
        s.jsxs("div", {
          className: "md:w-1/2 w-full md:grid md:grid-cols-9",
          children: [
            s.jsx("div", { className: "", children: "  " }),
            s.jsx("div", { className: "", children: "  " }),
            s.jsx("div", { className: "", children: " " }),
            s.jsx(y, { elementData: e[12] }),
            s.jsx(y, { elementData: e[13] }),
            s.jsx(y, { elementData: e[14] }),
            s.jsx(y, { elementData: e[15] }),
            s.jsx(y, { elementData: e[16] }),
            s.jsx(y, { elementData: e[17] }),
          ],
        }),
      ],
    }),
  });
}
function Ig({ data: e }) {
  return s.jsx("div", {
    className: "",
    children: s.jsxs("div", {
      className: "flex",
      children: [
        s.jsxs("div", {
          className: "md:w-1/2 w-full md:grid md:grid-cols-9",
          children: [
            s.jsx(y, { elementData: e[18] }),
            s.jsx(y, { elementData: e[19] }),
            s.jsx(y, { elementData: e[20] }),
            s.jsx(y, { elementData: e[21] }),
            s.jsx(y, { elementData: e[22] }),
            s.jsx(y, { elementData: e[23] }),
            s.jsx(y, { elementData: e[24] }),
            s.jsx(y, { elementData: e[25] }),
            s.jsx(y, { elementData: e[26] }),
          ],
        }),
        s.jsxs("div", {
          className: "md:w-1/2 w-full md:grid md:grid-cols-9",
          children: [
            s.jsx(y, { elementData: e[27] }),
            s.jsx(y, { elementData: e[28] }),
            s.jsx(y, { elementData: e[29] }),
            s.jsx(y, { elementData: e[30] }),
            s.jsx(y, { elementData: e[31] }),
            s.jsx(y, { elementData: e[32] }),
            s.jsx(y, { elementData: e[33] }),
            s.jsx(y, { elementData: e[34] }),
            s.jsx(y, { elementData: e[35] }),
          ],
        }),
      ],
    }),
  });
}
function Tg({ data: e }) {
  return s.jsx("div", {
    className: "",
    children: s.jsxs("div", {
      className: "flex",
      children: [
        s.jsxs("div", {
          className: "md:w-1/2 w-full md:grid md:grid-cols-9",
          children: [
            s.jsx(y, { elementData: e[36] }),
            s.jsx(y, { elementData: e[37] }),
            s.jsx(y, { elementData: e[38] }),
            s.jsx(y, { elementData: e[39] }),
            s.jsx(y, { elementData: e[40] }),
            s.jsx(y, { elementData: e[41] }),
            s.jsx(y, { elementData: e[42] }),
            s.jsx(y, { elementData: e[43] }),
            s.jsx(y, { elementData: e[44] }),
          ],
        }),
        s.jsxs("div", {
          className: "md:w-1/2 w-full md:grid md:grid-cols-9",
          children: [
            s.jsx(y, { elementData: e[45] }),
            s.jsx(y, { elementData: e[46] }),
            s.jsx(y, { elementData: e[47] }),
            s.jsx(y, { elementData: e[48] }),
            s.jsx(y, { elementData: e[49] }),
            s.jsx(y, { elementData: e[50] }),
            s.jsx(y, { elementData: e[51] }),
            s.jsx(y, { elementData: e[52] }),
            s.jsx(y, { elementData: e[53] }),
          ],
        }),
      ],
    }),
  });
}
function go({ children: e }) {
  return s.jsx("div", {
    children: s.jsx("p", {
      className: "bg-gray-500 rounded-full  px-6 py-2 ml-6 text-gray-50",
      children: e,
    }),
  });
}
function Lg({ open: e, toggleModal: t, modalData: i }) {
  const n = e ? "" : "hidden",
    {
      name: o,
      symbol: r,
      appearance: l,
      summary: a,
      bohr_model_3d: c,
      atomic_mass: u,
      source: f,
      category: g,
      group: h,
      image: b,
    } = i,
    v = P.useContext(Oi),
    w = v ? "bg-slate-700" : "bg-white",
    S = v ? "text-white" : "text-gray-900";
  return s.jsx(s.Fragment, {
    children: s.jsx("div", {
      id: "defaultModal",
      tabIndex: "-1",
      "aria-hidden": e,
      className: `fixed flex items-center justify-center ${n}  z-50  w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0  max-h-full`,
      style: {
        backdropFilter: "brightness(0.7)",
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        height: "100vh",
      },
      children: s.jsx("div", {
        className: "relative w-full max-w-2xl max-h-full",
        children: s.jsxs("div", {
          className: `relative ${w} rounded-lg shadow`,
          children: [
            s.jsxs("div", {
              className:
                "flex items-start justify-between p-4 border-b border-gray-200 dark:border-gray-600",
              children: [
                s.jsxs("h3", {
                  className: `text-xl font-semibold pl-4 ${S}`,
                  children: [o, " (", r, ")"],
                }),
                s.jsxs("button", {
                  onClick: t,
                  type: "button",
                  className:
                    "text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white",
                  children: [
                    s.jsx("svg", {
                      className: "w-3 h-3",
                      "aria-hidden": "true",
                      xmlns: "http://www.w3.org/2000/svg",
                      fill: "none",
                      viewBox: "0 0 14 14",
                      children: s.jsx("path", {
                        stroke: "currentColor",
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        strokeWidth: "2",
                        d: "m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6",
                      }),
                    }),
                    s.jsx("span", {
                      className: "sr-only",
                      children: "Close modal",
                    }),
                  ],
                }),
              ],
            }),
            s.jsxs("div", {
              className: "p-6 space-y-6",
              children: [
                s.jsx("img", {
                  src: (b == null ? void 0 : b.url) || "",
                  alt: "",
                  className: "mx-auto my-8 w-2/4 rounded-xl",
                }),
                s.jsx("p", {
                  className: `text-base leading-relaxed ${S}`,
                  children: a,
                }),
                s.jsxs("div", {
                  className: "flex",
                  children: [
                    s.jsxs(go, { children: ["Atomic Mass: ", u] }),
                    s.jsxs(go, { children: ["Appearance: ", l || "N/A"] }),
                  ],
                }),
                s.jsxs("div", {
                  className: "flex",
                  children: [
                    s.jsxs(go, { children: ["Category: ", g || "N/A"] }),
                    s.jsxs(go, { children: ["Group: ", h || "N/A"] }),
                  ],
                }),
              ],
            }),
            s.jsxs("div", {
              className: `flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600 ${S} `,
              children: [
                "Source:",
                " ",
                s.jsx("a", {
                  href: f,
                  className: "pl-2 underline",
                  target: "_blank",
                  rel: "noopener noreferrer",
                  children: f,
                }),
              ],
            }),
          ],
        }),
      }),
    }),
  });
}
function zg({ data: e }) {
  return s.jsx("div", {
    className: "",
    children: s.jsxs("div", {
      className: "flex",
      children: [
        s.jsxs("div", {
          className: "md:w-1/2 w-full md:grid md:grid-cols-9",
          children: [
            s.jsx(y, { elementData: e[54] }),
            s.jsx(y, { elementData: e[55] }),
            s.jsx(y, { series: "Lanthanides", from: "57-71" }),
            s.jsx(y, { elementData: e[71] }),
            s.jsx(y, { elementData: e[72] }),
            s.jsx(y, { elementData: e[73] }),
            s.jsx(y, { elementData: e[74] }),
            s.jsx(y, { elementData: e[75] }),
            s.jsx(y, { elementData: e[76] }),
          ],
        }),
        s.jsxs("div", {
          className: "md:w-1/2 w-full md:grid md:grid-cols-9",
          children: [
            s.jsx(y, { elementData: e[77] }),
            s.jsx(y, { elementData: e[78] }),
            s.jsx(y, { elementData: e[79] }),
            s.jsx(y, { elementData: e[80] }),
            s.jsx(y, { elementData: e[81] }),
            s.jsx(y, { elementData: e[82] }),
            s.jsx(y, { elementData: e[83] }),
            s.jsx(y, { elementData: e[84] }),
            s.jsx(y, { elementData: e[85] }),
          ],
        }),
      ],
    }),
  });
}
function Rg({ data: e }) {
  return s.jsx("div", {
    className: "",
    children: s.jsxs("div", {
      className: "flex",
      children: [
        s.jsxs("div", {
          className: "md:w-1/2 w-full md:grid md:grid-cols-9",
          children: [
            s.jsx(y, { elementData: e[86] }),
            s.jsx(y, { elementData: e[87] }),
            s.jsx(y, { series: "Actinides", from: "57-71" }),
            s.jsx(y, { elementData: e[103] }),
            s.jsx(y, { elementData: e[104] }),
            s.jsx(y, { elementData: e[105] }),
            s.jsx(y, { elementData: e[106] }),
            s.jsx(y, { elementData: e[107] }),
            s.jsx(y, { elementData: e[108] }),
          ],
        }),
        s.jsxs("div", {
          className: "md:w-1/2 w-full md:grid md:grid-cols-9",
          children: [
            s.jsx(y, { elementData: e[109] }),
            s.jsx(y, { elementData: e[110] }),
            s.jsx(y, { elementData: e[111] }),
            s.jsx(y, { elementData: e[112] }),
            s.jsx(y, { elementData: e[113] }),
            s.jsx(y, { elementData: e[114] }),
            s.jsx(y, { elementData: e[115] }),
            s.jsx(y, { elementData: e[116] }),
            s.jsx(y, { elementData: e[117] }),
          ],
        }),
      ],
    }),
  });
}
function Mg({ data: e }) {
  return s.jsx("div", {
    className: "",
    children: s.jsxs("div", {
      className: "flex",
      children: [
        s.jsxs("div", {
          className: "md:w-1/2 w-full md:grid md:grid-cols-9",
          children: [
            s.jsx(y, {}),
            s.jsx(y, {}),
            s.jsx(y, { elementData: e[88] }),
            s.jsx(y, { elementData: e[89] }),
            s.jsx(y, { elementData: e[90] }),
            s.jsx(y, { elementData: e[91] }),
            s.jsx(y, { elementData: e[92] }),
            s.jsx(y, { elementData: e[93] }),
            s.jsx(y, { elementData: e[94] }),
          ],
        }),
        s.jsxs("div", {
          className: "md:w-1/2 w-full md:grid md:grid-cols-9",
          children: [
            s.jsx(y, { elementData: e[95] }),
            s.jsx(y, { elementData: e[96] }),
            s.jsx(y, { elementData: e[97] }),
            s.jsx(y, { elementData: e[98] }),
            s.jsx(y, { elementData: e[99] }),
            s.jsx(y, { elementData: e[100] }),
            s.jsx(y, { elementData: e[101] }),
            s.jsx(y, { elementData: e[102] }),
            s.jsx(y, {}),
          ],
        }),
      ],
    }),
  });
}
function Og({ data: e }) {
  return s.jsx("div", {
    className: "",
    children: s.jsxs("div", {
      className: "flex mt-4",
      children: [
        s.jsxs("div", {
          className: "md:w-1/2 w-full md:grid md:grid-cols-9",
          children: [
            s.jsx(y, {}),
            s.jsx(y, {}),
            s.jsx(y, { elementData: e[56] }),
            s.jsx(y, { elementData: e[57] }),
            s.jsx(y, { elementData: e[58] }),
            s.jsx(y, { elementData: e[59] }),
            s.jsx(y, { elementData: e[60] }),
            s.jsx(y, { elementData: e[61] }),
            s.jsx(y, { elementData: e[62] }),
          ],
        }),
        s.jsxs("div", {
          className: "w-full md:w-1/2  md:grid md:grid-cols-9",
          children: [
            s.jsx(y, { elementData: e[63] }),
            s.jsx(y, { elementData: e[64] }),
            s.jsx(y, { elementData: e[65] }),
            s.jsx(y, { elementData: e[66] }),
            s.jsx(y, { elementData: e[67] }),
            s.jsx(y, { elementData: e[68] }),
            s.jsx(y, { elementData: e[69] }),
            s.jsx(y, { elementData: e[70] }),
            s.jsx(y, {}),
          ],
        }),
      ],
    }),
  });
}
const wd = P.createContext();
function Bg() {
  const [e, t] = P.useState(!1),
    [i, n] = P.useState("");
  let r = P.useContext(Oi) ? "white" : "#1e293b";
  function l(a) {
    n(a), t((c) => !c);
  }
  return s.jsx(wd.Provider, {
    value: l,
    children: s.jsxs("div", {
      className: "py-4 px-4",
      children: [
        s.jsx(Lg, { open: e, toggleModal: l, modalData: i }),
        s.jsx("h2", {
          className: `md:hidden py-2 text-${r} font-semibold`,
          children: "Group One",
        }),
        s.jsx(Ng, { data: tt.elements }),
        s.jsx("h2", {
          className: `md:hidden py-2 text-${r} font-semibold`,
          children: "Group Two",
        }),
        s.jsx(Ag, { data: tt.elements }),
        s.jsx("h2", {
          className: `md:hidden py-2 text-${r} font-semibold`,
          children: "Group Three",
        }),
        s.jsx(Pg, { data: tt.elements }),
        s.jsx("h2", {
          className: `md:hidden py-2 text-${r} font-semibold`,
          children: "Group Four",
        }),
        s.jsx(Ig, { data: tt.elements }),
        s.jsx("h2", {
          className: `md:hidden py-2 text-${r} font-semibold`,
          children: "Group Five",
        }),
        s.jsx(Tg, { data: tt.elements }),
        s.jsx("h2", {
          className: `md:hidden py-2 text-${r} font-semibold`,
          children: "Group Six",
        }),
        s.jsx(zg, { data: tt.elements }),
        s.jsx("h2", {
          className: `md:hidden py-2 text-${r} font-semibold`,
          children: "Group Seven",
        }),
        s.jsx(Rg, { data: tt.elements }),
        s.jsx("h2", {
          className: `md:hidden py-2 text-${r} font-semibold`,
          children: "Lanthanides",
        }),
        s.jsx(Og, { data: tt.elements }),
        s.jsx("h2", {
          className: `md:hidden py-2 text-${r} font-semibold`,
          children: "Actinides",
        }),
        s.jsx(Mg, { data: tt.elements }),
      ],
    }),
  });
}
var Fg = Object.defineProperty,
  Dg = (e, t) => {
    for (var i in t) Fg(e, i, { get: t[i], enumerable: !0 });
  },
  Ye = {};
Dg(Ye, {
  assign: () => Ug,
  colors: () => It,
  createStringInterpolator: () => ba,
  skipAnimation: () => Ad,
  to: () => Nd,
  willAdvance: () => va,
});
var pa = Yn(),
  L = (e) => Gn(e, pa),
  ha = Yn();
L.write = (e) => Gn(e, ha);
var Sr = Yn();
L.onStart = (e) => Gn(e, Sr);
var ga = Yn();
L.onFrame = (e) => Gn(e, ga);
var fa = Yn();
L.onFinish = (e) => Gn(e, fa);
var ki = [];
L.setTimeout = (e, t) => {
  const i = L.now() + t,
    n = () => {
      const r = ki.findIndex((l) => l.cancel == n);
      ~r && ki.splice(r, 1), (xt -= ~r ? 1 : 0);
    },
    o = { time: i, handler: e, cancel: n };
  return ki.splice(xd(i), 0, o), (xt += 1), kd(), o;
};
var xd = (e) => ~(~ki.findIndex((t) => t.time > e) || ~ki.length);
L.cancel = (e) => {
  Sr.delete(e), ga.delete(e), fa.delete(e), pa.delete(e), ha.delete(e);
};
L.sync = (e) => {
  (cl = !0), L.batchedUpdates(e), (cl = !1);
};
L.throttle = (e) => {
  let t;
  function i() {
    try {
      e(...t);
    } finally {
      t = null;
    }
  }
  function n(...o) {
    (t = o), L.onStart(i);
  }
  return (
    (n.handler = e),
    (n.cancel = () => {
      Sr.delete(i), (t = null);
    }),
    n
  );
};
var ya = typeof window < "u" ? window.requestAnimationFrame : () => {};
L.use = (e) => (ya = e);
L.now = typeof performance < "u" ? () => performance.now() : Date.now;
L.batchedUpdates = (e) => e();
L.catch = console.error;
L.frameLoop = "always";
L.advance = () => {
  L.frameLoop !== "demand"
    ? console.warn(
        "Cannot call the manual advancement of rafz whilst frameLoop is not set as demand"
      )
    : jd();
};
var wt = -1,
  xt = 0,
  cl = !1;
function Gn(e, t) {
  cl ? (t.delete(e), e(0)) : (t.add(e), kd());
}
function kd() {
  wt < 0 && ((wt = 0), L.frameLoop !== "demand" && ya(Cd));
}
function Vg() {
  wt = -1;
}
function Cd() {
  ~wt && (ya(Cd), L.batchedUpdates(jd));
}
function jd() {
  const e = wt;
  wt = L.now();
  const t = xd(wt);
  if ((t && (Sd(ki.splice(0, t), (i) => i.handler()), (xt -= t)), !xt)) {
    Vg();
    return;
  }
  Sr.flush(),
    pa.flush(e ? Math.min(64, wt - e) : 16.667),
    ga.flush(),
    ha.flush(),
    fa.flush();
}
function Yn() {
  let e = new Set(),
    t = e;
  return {
    add(i) {
      (xt += t == e && !e.has(i) ? 1 : 0), e.add(i);
    },
    delete(i) {
      return (xt -= t == e && e.has(i) ? 1 : 0), e.delete(i);
    },
    flush(i) {
      t.size &&
        ((e = new Set()),
        (xt -= t.size),
        Sd(t, (n) => n(i) && e.add(n)),
        (xt += e.size),
        (t = e));
    },
  };
}
function Sd(e, t) {
  e.forEach((i) => {
    try {
      t(i);
    } catch (n) {
      L.catch(n);
    }
  });
}
function ul() {}
var Hg = (e, t, i) =>
    Object.defineProperty(e, t, { value: i, writable: !0, configurable: !0 }),
  k = {
    arr: Array.isArray,
    obj: (e) => !!e && e.constructor.name === "Object",
    fun: (e) => typeof e == "function",
    str: (e) => typeof e == "string",
    num: (e) => typeof e == "number",
    und: (e) => e === void 0,
  };
function nt(e, t) {
  if (k.arr(e)) {
    if (!k.arr(t) || e.length !== t.length) return !1;
    for (let i = 0; i < e.length; i++) if (e[i] !== t[i]) return !1;
    return !0;
  }
  return e === t;
}
var B = (e, t) => e.forEach(t);
function et(e, t, i) {
  if (k.arr(e)) {
    for (let n = 0; n < e.length; n++) t.call(i, e[n], `${n}`);
    return;
  }
  for (const n in e) e.hasOwnProperty(n) && t.call(i, e[n], n);
}
var je = (e) => (k.und(e) ? [] : k.arr(e) ? e : [e]);
function mn(e, t) {
  if (e.size) {
    const i = Array.from(e);
    e.clear(), B(i, t);
  }
}
var en = (e, ...t) => mn(e, (i) => i(...t)),
  _a = () =>
    typeof window > "u" ||
    !window.navigator ||
    /ServerSideRendering|^Deno\//.test(window.navigator.userAgent),
  ba,
  Nd,
  It = null,
  Ad = !1,
  va = ul,
  Ug = (e) => {
    e.to && (Nd = e.to),
      e.now && (L.now = e.now),
      e.colors !== void 0 && (It = e.colors),
      e.skipAnimation != null && (Ad = e.skipAnimation),
      e.createStringInterpolator && (ba = e.createStringInterpolator),
      e.requestAnimationFrame && L.use(e.requestAnimationFrame),
      e.batchedUpdates && (L.batchedUpdates = e.batchedUpdates),
      e.willAdvance && (va = e.willAdvance),
      e.frameLoop && (L.frameLoop = e.frameLoop);
  },
  dn = new Set(),
  Le = [],
  cs = [],
  rr = 0,
  Nr = {
    get idle() {
      return !dn.size && !Le.length;
    },
    start(e) {
      rr > e.priority ? (dn.add(e), L.onStart(Wg)) : (Ed(e), L(ml));
    },
    advance: ml,
    sort(e) {
      if (rr) L.onFrame(() => Nr.sort(e));
      else {
        const t = Le.indexOf(e);
        ~t && (Le.splice(t, 1), Pd(e));
      }
    },
    clear() {
      (Le = []), dn.clear();
    },
  };
function Wg() {
  dn.forEach(Ed), dn.clear(), L(ml);
}
function Ed(e) {
  Le.includes(e) || Pd(e);
}
function Pd(e) {
  Le.splice(
    $g(Le, (t) => t.priority > e.priority),
    0,
    e
  );
}
function ml(e) {
  const t = cs;
  for (let i = 0; i < Le.length; i++) {
    const n = Le[i];
    (rr = n.priority), n.idle || (va(n), n.advance(e), n.idle || t.push(n));
  }
  return (rr = 0), (cs = Le), (cs.length = 0), (Le = t), Le.length > 0;
}
function $g(e, t) {
  const i = e.findIndex(t);
  return i < 0 ? e.length : i;
}
var Gg = (e, t, i) => Math.min(Math.max(i, e), t),
  Yg = {
    transparent: 0,
    aliceblue: 4042850303,
    antiquewhite: 4209760255,
    aqua: 16777215,
    aquamarine: 2147472639,
    azure: 4043309055,
    beige: 4126530815,
    bisque: 4293182719,
    black: 255,
    blanchedalmond: 4293643775,
    blue: 65535,
    blueviolet: 2318131967,
    brown: 2771004159,
    burlywood: 3736635391,
    burntsienna: 3934150143,
    cadetblue: 1604231423,
    chartreuse: 2147418367,
    chocolate: 3530104575,
    coral: 4286533887,
    cornflowerblue: 1687547391,
    cornsilk: 4294499583,
    crimson: 3692313855,
    cyan: 16777215,
    darkblue: 35839,
    darkcyan: 9145343,
    darkgoldenrod: 3095792639,
    darkgray: 2846468607,
    darkgreen: 6553855,
    darkgrey: 2846468607,
    darkkhaki: 3182914559,
    darkmagenta: 2332068863,
    darkolivegreen: 1433087999,
    darkorange: 4287365375,
    darkorchid: 2570243327,
    darkred: 2332033279,
    darksalmon: 3918953215,
    darkseagreen: 2411499519,
    darkslateblue: 1211993087,
    darkslategray: 793726975,
    darkslategrey: 793726975,
    darkturquoise: 13554175,
    darkviolet: 2483082239,
    deeppink: 4279538687,
    deepskyblue: 12582911,
    dimgray: 1768516095,
    dimgrey: 1768516095,
    dodgerblue: 512819199,
    firebrick: 2988581631,
    floralwhite: 4294635775,
    forestgreen: 579543807,
    fuchsia: 4278255615,
    gainsboro: 3705462015,
    ghostwhite: 4177068031,
    gold: 4292280575,
    goldenrod: 3668254975,
    gray: 2155905279,
    green: 8388863,
    greenyellow: 2919182335,
    grey: 2155905279,
    honeydew: 4043305215,
    hotpink: 4285117695,
    indianred: 3445382399,
    indigo: 1258324735,
    ivory: 4294963455,
    khaki: 4041641215,
    lavender: 3873897215,
    lavenderblush: 4293981695,
    lawngreen: 2096890111,
    lemonchiffon: 4294626815,
    lightblue: 2916673279,
    lightcoral: 4034953471,
    lightcyan: 3774873599,
    lightgoldenrodyellow: 4210742015,
    lightgray: 3553874943,
    lightgreen: 2431553791,
    lightgrey: 3553874943,
    lightpink: 4290167295,
    lightsalmon: 4288707327,
    lightseagreen: 548580095,
    lightskyblue: 2278488831,
    lightslategray: 2005441023,
    lightslategrey: 2005441023,
    lightsteelblue: 2965692159,
    lightyellow: 4294959359,
    lime: 16711935,
    limegreen: 852308735,
    linen: 4210091775,
    magenta: 4278255615,
    maroon: 2147483903,
    mediumaquamarine: 1724754687,
    mediumblue: 52735,
    mediumorchid: 3126187007,
    mediumpurple: 2473647103,
    mediumseagreen: 1018393087,
    mediumslateblue: 2070474495,
    mediumspringgreen: 16423679,
    mediumturquoise: 1221709055,
    mediumvioletred: 3340076543,
    midnightblue: 421097727,
    mintcream: 4127193855,
    mistyrose: 4293190143,
    moccasin: 4293178879,
    navajowhite: 4292783615,
    navy: 33023,
    oldlace: 4260751103,
    olive: 2155872511,
    olivedrab: 1804477439,
    orange: 4289003775,
    orangered: 4282712319,
    orchid: 3664828159,
    palegoldenrod: 4008225535,
    palegreen: 2566625535,
    paleturquoise: 2951671551,
    palevioletred: 3681588223,
    papayawhip: 4293907967,
    peachpuff: 4292524543,
    peru: 3448061951,
    pink: 4290825215,
    plum: 3718307327,
    powderblue: 2967529215,
    purple: 2147516671,
    rebeccapurple: 1714657791,
    red: 4278190335,
    rosybrown: 3163525119,
    royalblue: 1097458175,
    saddlebrown: 2336560127,
    salmon: 4202722047,
    sandybrown: 4104413439,
    seagreen: 780883967,
    seashell: 4294307583,
    sienna: 2689740287,
    silver: 3233857791,
    skyblue: 2278484991,
    slateblue: 1784335871,
    slategray: 1887473919,
    slategrey: 1887473919,
    snow: 4294638335,
    springgreen: 16744447,
    steelblue: 1182971135,
    tan: 3535047935,
    teal: 8421631,
    thistle: 3636451583,
    tomato: 4284696575,
    turquoise: 1088475391,
    violet: 4001558271,
    wheat: 4125012991,
    white: 4294967295,
    whitesmoke: 4126537215,
    yellow: 4294902015,
    yellowgreen: 2597139199,
  },
  Ue = "[-+]?\\d*\\.?\\d+",
  sr = Ue + "%";
function Ar(...e) {
  return "\\(\\s*(" + e.join(")\\s*,\\s*(") + ")\\s*\\)";
}
var Qg = new RegExp("rgb" + Ar(Ue, Ue, Ue)),
  Kg = new RegExp("rgba" + Ar(Ue, Ue, Ue, Ue)),
  Zg = new RegExp("hsl" + Ar(Ue, sr, sr)),
  Jg = new RegExp("hsla" + Ar(Ue, sr, sr, Ue)),
  qg = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
  Xg = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
  ef = /^#([0-9a-fA-F]{6})$/,
  tf = /^#([0-9a-fA-F]{8})$/;
function nf(e) {
  let t;
  return typeof e == "number"
    ? e >>> 0 === e && e >= 0 && e <= 4294967295
      ? e
      : null
    : (t = ef.exec(e))
    ? parseInt(t[1] + "ff", 16) >>> 0
    : It && It[e] !== void 0
    ? It[e]
    : (t = Qg.exec(e))
    ? ((oi(t[1]) << 24) | (oi(t[2]) << 16) | (oi(t[3]) << 8) | 255) >>> 0
    : (t = Kg.exec(e))
    ? ((oi(t[1]) << 24) | (oi(t[2]) << 16) | (oi(t[3]) << 8) | Bc(t[4])) >>> 0
    : (t = qg.exec(e))
    ? parseInt(t[1] + t[1] + t[2] + t[2] + t[3] + t[3] + "ff", 16) >>> 0
    : (t = tf.exec(e))
    ? parseInt(t[1], 16) >>> 0
    : (t = Xg.exec(e))
    ? parseInt(t[1] + t[1] + t[2] + t[2] + t[3] + t[3] + t[4] + t[4], 16) >>> 0
    : (t = Zg.exec(e))
    ? (Mc(Oc(t[1]), fo(t[2]), fo(t[3])) | 255) >>> 0
    : (t = Jg.exec(e))
    ? (Mc(Oc(t[1]), fo(t[2]), fo(t[3])) | Bc(t[4])) >>> 0
    : null;
}
function us(e, t, i) {
  return (
    i < 0 && (i += 1),
    i > 1 && (i -= 1),
    i < 1 / 6
      ? e + (t - e) * 6 * i
      : i < 1 / 2
      ? t
      : i < 2 / 3
      ? e + (t - e) * (2 / 3 - i) * 6
      : e
  );
}
function Mc(e, t, i) {
  const n = i < 0.5 ? i * (1 + t) : i + t - i * t,
    o = 2 * i - n,
    r = us(o, n, e + 1 / 3),
    l = us(o, n, e),
    a = us(o, n, e - 1 / 3);
  return (
    (Math.round(r * 255) << 24) |
    (Math.round(l * 255) << 16) |
    (Math.round(a * 255) << 8)
  );
}
function oi(e) {
  const t = parseInt(e, 10);
  return t < 0 ? 0 : t > 255 ? 255 : t;
}
function Oc(e) {
  return (((parseFloat(e) % 360) + 360) % 360) / 360;
}
function Bc(e) {
  const t = parseFloat(e);
  return t < 0 ? 0 : t > 1 ? 255 : Math.round(t * 255);
}
function fo(e) {
  const t = parseFloat(e);
  return t < 0 ? 0 : t > 100 ? 1 : t / 100;
}
function Fc(e) {
  let t = nf(e);
  if (t === null) return e;
  t = t || 0;
  const i = (t & 4278190080) >>> 24,
    n = (t & 16711680) >>> 16,
    o = (t & 65280) >>> 8,
    r = (t & 255) / 255;
  return `rgba(${i}, ${n}, ${o}, ${r})`;
}
var Tn = (e, t, i) => {
  if (k.fun(e)) return e;
  if (k.arr(e)) return Tn({ range: e, output: t, extrapolate: i });
  if (k.str(e.output[0])) return ba(e);
  const n = e,
    o = n.output,
    r = n.range || [0, 1],
    l = n.extrapolateLeft || n.extrapolate || "extend",
    a = n.extrapolateRight || n.extrapolate || "extend",
    c = n.easing || ((u) => u);
  return (u) => {
    const f = rf(u, r);
    return of(u, r[f], r[f + 1], o[f], o[f + 1], c, l, a, n.map);
  };
};
function of(e, t, i, n, o, r, l, a, c) {
  let u = c ? c(e) : e;
  if (u < t) {
    if (l === "identity") return u;
    l === "clamp" && (u = t);
  }
  if (u > i) {
    if (a === "identity") return u;
    a === "clamp" && (u = i);
  }
  return n === o
    ? n
    : t === i
    ? e <= t
      ? n
      : o
    : (t === -1 / 0
        ? (u = -u)
        : i === 1 / 0
        ? (u = u - t)
        : (u = (u - t) / (i - t)),
      (u = r(u)),
      n === -1 / 0
        ? (u = -u)
        : o === 1 / 0
        ? (u = u + n)
        : (u = u * (o - n) + n),
      u);
}
function rf(e, t) {
  for (var i = 1; i < t.length - 1 && !(t[i] >= e); ++i);
  return i - 1;
}
var sf =
    (e, t = "end") =>
    (i) => {
      i = t === "end" ? Math.min(i, 0.999) : Math.max(i, 0.001);
      const n = i * e,
        o = t === "end" ? Math.floor(n) : Math.ceil(n);
      return Gg(0, 1, o / e);
    },
  lr = 1.70158,
  yo = lr * 1.525,
  Dc = lr + 1,
  Vc = (2 * Math.PI) / 3,
  Hc = (2 * Math.PI) / 4.5,
  _o = (e) =>
    e < 1 / 2.75
      ? 7.5625 * e * e
      : e < 2 / 2.75
      ? 7.5625 * (e -= 1.5 / 2.75) * e + 0.75
      : e < 2.5 / 2.75
      ? 7.5625 * (e -= 2.25 / 2.75) * e + 0.9375
      : 7.5625 * (e -= 2.625 / 2.75) * e + 0.984375,
  lf = {
    linear: (e) => e,
    easeInQuad: (e) => e * e,
    easeOutQuad: (e) => 1 - (1 - e) * (1 - e),
    easeInOutQuad: (e) =>
      e < 0.5 ? 2 * e * e : 1 - Math.pow(-2 * e + 2, 2) / 2,
    easeInCubic: (e) => e * e * e,
    easeOutCubic: (e) => 1 - Math.pow(1 - e, 3),
    easeInOutCubic: (e) =>
      e < 0.5 ? 4 * e * e * e : 1 - Math.pow(-2 * e + 2, 3) / 2,
    easeInQuart: (e) => e * e * e * e,
    easeOutQuart: (e) => 1 - Math.pow(1 - e, 4),
    easeInOutQuart: (e) =>
      e < 0.5 ? 8 * e * e * e * e : 1 - Math.pow(-2 * e + 2, 4) / 2,
    easeInQuint: (e) => e * e * e * e * e,
    easeOutQuint: (e) => 1 - Math.pow(1 - e, 5),
    easeInOutQuint: (e) =>
      e < 0.5 ? 16 * e * e * e * e * e : 1 - Math.pow(-2 * e + 2, 5) / 2,
    easeInSine: (e) => 1 - Math.cos((e * Math.PI) / 2),
    easeOutSine: (e) => Math.sin((e * Math.PI) / 2),
    easeInOutSine: (e) => -(Math.cos(Math.PI * e) - 1) / 2,
    easeInExpo: (e) => (e === 0 ? 0 : Math.pow(2, 10 * e - 10)),
    easeOutExpo: (e) => (e === 1 ? 1 : 1 - Math.pow(2, -10 * e)),
    easeInOutExpo: (e) =>
      e === 0
        ? 0
        : e === 1
        ? 1
        : e < 0.5
        ? Math.pow(2, 20 * e - 10) / 2
        : (2 - Math.pow(2, -20 * e + 10)) / 2,
    easeInCirc: (e) => 1 - Math.sqrt(1 - Math.pow(e, 2)),
    easeOutCirc: (e) => Math.sqrt(1 - Math.pow(e - 1, 2)),
    easeInOutCirc: (e) =>
      e < 0.5
        ? (1 - Math.sqrt(1 - Math.pow(2 * e, 2))) / 2
        : (Math.sqrt(1 - Math.pow(-2 * e + 2, 2)) + 1) / 2,
    easeInBack: (e) => Dc * e * e * e - lr * e * e,
    easeOutBack: (e) => 1 + Dc * Math.pow(e - 1, 3) + lr * Math.pow(e - 1, 2),
    easeInOutBack: (e) =>
      e < 0.5
        ? (Math.pow(2 * e, 2) * ((yo + 1) * 2 * e - yo)) / 2
        : (Math.pow(2 * e - 2, 2) * ((yo + 1) * (e * 2 - 2) + yo) + 2) / 2,
    easeInElastic: (e) =>
      e === 0
        ? 0
        : e === 1
        ? 1
        : -Math.pow(2, 10 * e - 10) * Math.sin((e * 10 - 10.75) * Vc),
    easeOutElastic: (e) =>
      e === 0
        ? 0
        : e === 1
        ? 1
        : Math.pow(2, -10 * e) * Math.sin((e * 10 - 0.75) * Vc) + 1,
    easeInOutElastic: (e) =>
      e === 0
        ? 0
        : e === 1
        ? 1
        : e < 0.5
        ? -(Math.pow(2, 20 * e - 10) * Math.sin((20 * e - 11.125) * Hc)) / 2
        : (Math.pow(2, -20 * e + 10) * Math.sin((20 * e - 11.125) * Hc)) / 2 +
          1,
    easeInBounce: (e) => 1 - _o(1 - e),
    easeOutBounce: _o,
    easeInOutBounce: (e) =>
      e < 0.5 ? (1 - _o(1 - 2 * e)) / 2 : (1 + _o(2 * e - 1)) / 2,
    steps: sf,
  },
  Ln = Symbol.for("FluidValue.get"),
  Ti = Symbol.for("FluidValue.observers"),
  Te = (e) => !!(e && e[Ln]),
  ye = (e) => (e && e[Ln] ? e[Ln]() : e),
  Uc = (e) => e[Ti] || null;
function af(e, t) {
  e.eventObserved ? e.eventObserved(t) : e(t);
}
function zn(e, t) {
  const i = e[Ti];
  i &&
    i.forEach((n) => {
      af(n, t);
    });
}
var Id = class {
    constructor(e) {
      if (!e && !(e = this.get)) throw Error("Unknown getter");
      cf(this, e);
    }
  },
  cf = (e, t) => Td(e, Ln, t);
function Mi(e, t) {
  if (e[Ln]) {
    let i = e[Ti];
    i || Td(e, Ti, (i = new Set())),
      i.has(t) || (i.add(t), e.observerAdded && e.observerAdded(i.size, t));
  }
  return t;
}
function Rn(e, t) {
  const i = e[Ti];
  if (i && i.has(t)) {
    const n = i.size - 1;
    n ? i.delete(t) : (e[Ti] = null),
      e.observerRemoved && e.observerRemoved(n, t);
  }
}
var Td = (e, t, i) =>
    Object.defineProperty(e, t, { value: i, writable: !0, configurable: !0 }),
  Lo = /[+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
  uf =
    /(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))/gi,
  Wc = new RegExp(`(${Lo.source})(%|[a-z]+)`, "i"),
  mf = /rgba\(([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+)\)/gi,
  Er = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/,
  Ld = (e) => {
    const [t, i] = df(e);
    if (!t || _a()) return e;
    const n = window
      .getComputedStyle(document.documentElement)
      .getPropertyValue(t);
    if (n) return n.trim();
    if (i && i.startsWith("--")) {
      const o = window
        .getComputedStyle(document.documentElement)
        .getPropertyValue(i);
      return o || e;
    } else {
      if (i && Er.test(i)) return Ld(i);
      if (i) return i;
    }
    return e;
  },
  df = (e) => {
    const t = Er.exec(e);
    if (!t) return [,];
    const [, i, n] = t;
    return [i, n];
  },
  ms,
  pf = (e, t, i, n, o) =>
    `rgba(${Math.round(t)}, ${Math.round(i)}, ${Math.round(n)}, ${o})`,
  zd = (e) => {
    ms ||
      (ms = It
        ? new RegExp(`(${Object.keys(It).join("|")})(?!\\w)`, "g")
        : /^\b$/);
    const t = e.output.map((r) =>
        ye(r).replace(Er, Ld).replace(uf, Fc).replace(ms, Fc)
      ),
      i = t.map((r) => r.match(Lo).map(Number)),
      o = i[0]
        .map((r, l) =>
          i.map((a) => {
            if (!(l in a))
              throw Error('The arity of each "output" value must be equal');
            return a[l];
          })
        )
        .map((r) => Tn({ ...e, output: r }));
    return (r) => {
      var c;
      const l =
        !Wc.test(t[0]) &&
        ((c = t.find((u) => Wc.test(u))) == null ? void 0 : c.replace(Lo, ""));
      let a = 0;
      return t[0].replace(Lo, () => `${o[a++](r)}${l || ""}`).replace(mf, pf);
    };
  },
  wa = "react-spring: ",
  Rd = (e) => {
    const t = e;
    let i = !1;
    if (typeof t != "function")
      throw new TypeError(`${wa}once requires a function parameter`);
    return (...n) => {
      i || (t(...n), (i = !0));
    };
  },
  hf = Rd(console.warn);
function gf() {
  hf(`${wa}The "interpolate" function is deprecated in v9 (use "to" instead)`);
}
var ff = Rd(console.warn);
function yf() {
  ff(
    `${wa}Directly calling start instead of using the api object is deprecated in v9 (use ".start" instead), this will be removed in later 0.X.0 versions`
  );
}
function Pr(e) {
  return (
    k.str(e) &&
    (e[0] == "#" || /\d/.test(e) || (!_a() && Er.test(e)) || e in (It || {}))
  );
}
var xa = _a() ? P.useEffect : P.useLayoutEffect,
  _f = () => {
    const e = P.useRef(!1);
    return (
      xa(
        () => (
          (e.current = !0),
          () => {
            e.current = !1;
          }
        ),
        []
      ),
      e
    );
  };
function Md() {
  const e = P.useState()[1],
    t = _f();
  return () => {
    t.current && e(Math.random());
  };
}
function bf(e, t) {
  const [i] = P.useState(() => ({ inputs: t, result: e() })),
    n = P.useRef(),
    o = n.current;
  let r = o;
  return (
    r
      ? (t && r.inputs && vf(t, r.inputs)) || (r = { inputs: t, result: e() })
      : (r = i),
    P.useEffect(() => {
      (n.current = r), o == i && (i.inputs = i.result = void 0);
    }, [r]),
    r.result
  );
}
function vf(e, t) {
  if (e.length !== t.length) return !1;
  for (let i = 0; i < e.length; i++) if (e[i] !== t[i]) return !1;
  return !0;
}
var Od = (e) => P.useEffect(e, wf),
  wf = [];
function $c(e) {
  const t = P.useRef();
  return (
    P.useEffect(() => {
      t.current = e;
    }),
    t.current
  );
}
var Mn = Symbol.for("Animated:node"),
  xf = (e) => !!e && e[Mn] === e,
  Ze = (e) => e && e[Mn],
  ka = (e, t) => Hg(e, Mn, t),
  Ir = (e) => e && e[Mn] && e[Mn].getPayload(),
  Bd = class {
    constructor() {
      ka(this, this);
    }
    getPayload() {
      return this.payload || [];
    }
  },
  Qn = class extends Bd {
    constructor(e) {
      super(),
        (this._value = e),
        (this.done = !0),
        (this.durationProgress = 0),
        k.num(this._value) && (this.lastPosition = this._value);
    }
    static create(e) {
      return new Qn(e);
    }
    getPayload() {
      return [this];
    }
    getValue() {
      return this._value;
    }
    setValue(e, t) {
      return (
        k.num(e) &&
          ((this.lastPosition = e),
          t &&
            ((e = Math.round(e / t) * t),
            this.done && (this.lastPosition = e))),
        this._value === e ? !1 : ((this._value = e), !0)
      );
    }
    reset() {
      const { done: e } = this;
      (this.done = !1),
        k.num(this._value) &&
          ((this.elapsedTime = 0),
          (this.durationProgress = 0),
          (this.lastPosition = this._value),
          e && (this.lastVelocity = null),
          (this.v0 = null));
    }
  },
  On = class extends Qn {
    constructor(e) {
      super(0),
        (this._string = null),
        (this._toString = Tn({ output: [e, e] }));
    }
    static create(e) {
      return new On(e);
    }
    getValue() {
      const e = this._string;
      return e ?? (this._string = this._toString(this._value));
    }
    setValue(e) {
      if (k.str(e)) {
        if (e == this._string) return !1;
        (this._string = e), (this._value = 1);
      } else if (super.setValue(e)) this._string = null;
      else return !1;
      return !0;
    }
    reset(e) {
      e && (this._toString = Tn({ output: [this.getValue(), e] })),
        (this._value = 0),
        super.reset();
    }
  },
  ar = { dependencies: null },
  Tr = class extends Bd {
    constructor(e) {
      super(), (this.source = e), this.setValue(e);
    }
    getValue(e) {
      const t = {};
      return (
        et(this.source, (i, n) => {
          xf(i)
            ? (t[n] = i.getValue(e))
            : Te(i)
            ? (t[n] = ye(i))
            : e || (t[n] = i);
        }),
        t
      );
    }
    setValue(e) {
      (this.source = e), (this.payload = this._makePayload(e));
    }
    reset() {
      this.payload && B(this.payload, (e) => e.reset());
    }
    _makePayload(e) {
      if (e) {
        const t = new Set();
        return et(e, this._addToPayload, t), Array.from(t);
      }
    }
    _addToPayload(e) {
      ar.dependencies && Te(e) && ar.dependencies.add(e);
      const t = Ir(e);
      t && B(t, (i) => this.add(i));
    }
  },
  Fd = class extends Tr {
    constructor(e) {
      super(e);
    }
    static create(e) {
      return new Fd(e);
    }
    getValue() {
      return this.source.map((e) => e.getValue());
    }
    setValue(e) {
      const t = this.getPayload();
      return e.length == t.length
        ? t.map((i, n) => i.setValue(e[n])).some(Boolean)
        : (super.setValue(e.map(kf)), !0);
    }
  };
function kf(e) {
  return (Pr(e) ? On : Qn).create(e);
}
function dl(e) {
  const t = Ze(e);
  return t ? t.constructor : k.arr(e) ? Fd : Pr(e) ? On : Qn;
}
var Gc = (e, t) => {
    const i = !k.fun(e) || (e.prototype && e.prototype.isReactComponent);
    return P.forwardRef((n, o) => {
      const r = P.useRef(null),
        l =
          i &&
          P.useCallback(
            (v) => {
              r.current = Sf(o, v);
            },
            [o]
          ),
        [a, c] = jf(n, t),
        u = Md(),
        f = () => {
          const v = r.current;
          if (i && !v) return;
          (v ? t.applyAnimatedValues(v, a.getValue(!0)) : !1) === !1 && u();
        },
        g = new Cf(f, c),
        h = P.useRef();
      xa(
        () => (
          (h.current = g),
          B(c, (v) => Mi(v, g)),
          () => {
            h.current &&
              (B(h.current.deps, (v) => Rn(v, h.current)),
              L.cancel(h.current.update));
          }
        )
      ),
        P.useEffect(f, []),
        Od(() => () => {
          const v = h.current;
          B(v.deps, (w) => Rn(w, v));
        });
      const b = t.getComponentProps(a.getValue());
      return P.createElement(e, { ...b, ref: l });
    });
  },
  Cf = class {
    constructor(e, t) {
      (this.update = e), (this.deps = t);
    }
    eventObserved(e) {
      e.type == "change" && L.write(this.update);
    }
  };
function jf(e, t) {
  const i = new Set();
  return (
    (ar.dependencies = i),
    e.style && (e = { ...e, style: t.createAnimatedStyle(e.style) }),
    (e = new Tr(e)),
    (ar.dependencies = null),
    [e, i]
  );
}
function Sf(e, t) {
  return e && (k.fun(e) ? e(t) : (e.current = t)), t;
}
var Yc = Symbol.for("AnimatedComponent"),
  Nf = (
    e,
    {
      applyAnimatedValues: t = () => !1,
      createAnimatedStyle: i = (o) => new Tr(o),
      getComponentProps: n = (o) => o,
    } = {}
  ) => {
    const o = {
        applyAnimatedValues: t,
        createAnimatedStyle: i,
        getComponentProps: n,
      },
      r = (l) => {
        const a = Qc(l) || "Anonymous";
        return (
          k.str(l)
            ? (l = r[l] || (r[l] = Gc(l, o)))
            : (l = l[Yc] || (l[Yc] = Gc(l, o))),
          (l.displayName = `Animated(${a})`),
          l
        );
      };
    return (
      et(e, (l, a) => {
        k.arr(e) && (a = Qc(l)), (r[a] = r(l));
      }),
      { animated: r }
    );
  },
  Qc = (e) =>
    k.str(e)
      ? e
      : e && k.str(e.displayName)
      ? e.displayName
      : (k.fun(e) && e.name) || null;
function Ht(e, ...t) {
  return k.fun(e) ? e(...t) : e;
}
var pn = (e, t) =>
    e === !0 || !!(t && e && (k.fun(e) ? e(t) : je(e).includes(t))),
  Dd = (e, t) => (k.obj(e) ? t && e[t] : e),
  Vd = (e, t) => (e.default === !0 ? e[t] : e.default ? e.default[t] : void 0),
  Af = (e) => e,
  Ca = (e, t = Af) => {
    let i = Ef;
    e.default && e.default !== !0 && ((e = e.default), (i = Object.keys(e)));
    const n = {};
    for (const o of i) {
      const r = t(e[o], o);
      k.und(r) || (n[o] = r);
    }
    return n;
  },
  Ef = [
    "config",
    "onProps",
    "onStart",
    "onChange",
    "onPause",
    "onResume",
    "onRest",
  ],
  Pf = {
    config: 1,
    from: 1,
    to: 1,
    ref: 1,
    loop: 1,
    reset: 1,
    pause: 1,
    cancel: 1,
    reverse: 1,
    immediate: 1,
    default: 1,
    delay: 1,
    onProps: 1,
    onStart: 1,
    onChange: 1,
    onPause: 1,
    onResume: 1,
    onRest: 1,
    onResolve: 1,
    items: 1,
    trail: 1,
    sort: 1,
    expires: 1,
    initial: 1,
    enter: 1,
    update: 1,
    leave: 1,
    children: 1,
    onDestroyed: 1,
    keys: 1,
    callId: 1,
    parentId: 1,
  };
function If(e) {
  const t = {};
  let i = 0;
  if (
    (et(e, (n, o) => {
      Pf[o] || ((t[o] = n), i++);
    }),
    i)
  )
    return t;
}
function Hd(e) {
  const t = If(e);
  if (t) {
    const i = { to: t };
    return et(e, (n, o) => o in t || (i[o] = n)), i;
  }
  return { ...e };
}
function Bn(e) {
  return (
    (e = ye(e)),
    k.arr(e)
      ? e.map(Bn)
      : Pr(e)
      ? Ye.createStringInterpolator({ range: [0, 1], output: [e, e] })(1)
      : e
  );
}
function Tf(e) {
  for (const t in e) return !0;
  return !1;
}
function pl(e) {
  return k.fun(e) || (k.arr(e) && k.obj(e[0]));
}
function Lf(e, t) {
  var i;
  (i = e.ref) == null || i.delete(e), t == null || t.delete(e);
}
function zf(e, t) {
  var i;
  t &&
    e.ref !== t &&
    ((i = e.ref) == null || i.delete(e), t.add(e), (e.ref = t));
}
var Rf = {
    default: { tension: 170, friction: 26 },
    gentle: { tension: 120, friction: 14 },
    wobbly: { tension: 180, friction: 12 },
    stiff: { tension: 210, friction: 20 },
    slow: { tension: 280, friction: 60 },
    molasses: { tension: 280, friction: 120 },
  },
  hl = { ...Rf.default, mass: 1, damping: 1, easing: lf.linear, clamp: !1 },
  Mf = class {
    constructor() {
      (this.velocity = 0), Object.assign(this, hl);
    }
  };
function Of(e, t, i) {
  i && ((i = { ...i }), Kc(i, t), (t = { ...i, ...t })),
    Kc(e, t),
    Object.assign(e, t);
  for (const l in hl) e[l] == null && (e[l] = hl[l]);
  let { frequency: n, damping: o } = e;
  const { mass: r } = e;
  return (
    k.und(n) ||
      (n < 0.01 && (n = 0.01),
      o < 0 && (o = 0),
      (e.tension = Math.pow((2 * Math.PI) / n, 2) * r),
      (e.friction = (4 * Math.PI * o * r) / n)),
    e
  );
}
function Kc(e, t) {
  if (!k.und(t.decay)) e.duration = void 0;
  else {
    const i = !k.und(t.tension) || !k.und(t.friction);
    (i || !k.und(t.frequency) || !k.und(t.damping) || !k.und(t.mass)) &&
      ((e.duration = void 0), (e.decay = void 0)),
      i && (e.frequency = void 0);
  }
}
var Zc = [],
  Bf = class {
    constructor() {
      (this.changed = !1),
        (this.values = Zc),
        (this.toValues = null),
        (this.fromValues = Zc),
        (this.config = new Mf()),
        (this.immediate = !1);
    }
  };
function Ud(e, { key: t, props: i, defaultProps: n, state: o, actions: r }) {
  return new Promise((l, a) => {
    let c,
      u,
      f = pn(i.cancel ?? (n == null ? void 0 : n.cancel), t);
    if (f) b();
    else {
      k.und(i.pause) || (o.paused = pn(i.pause, t));
      let v = n == null ? void 0 : n.pause;
      v !== !0 && (v = o.paused || pn(v, t)),
        (c = Ht(i.delay || 0, t)),
        v ? (o.resumeQueue.add(h), r.pause()) : (r.resume(), h());
    }
    function g() {
      o.resumeQueue.add(h),
        o.timeouts.delete(u),
        u.cancel(),
        (c = u.time - L.now());
    }
    function h() {
      c > 0 && !Ye.skipAnimation
        ? ((o.delayed = !0),
          (u = L.setTimeout(b, c)),
          o.pauseQueue.add(g),
          o.timeouts.add(u))
        : b();
    }
    function b() {
      o.delayed && (o.delayed = !1),
        o.pauseQueue.delete(g),
        o.timeouts.delete(u),
        e <= (o.cancelId || 0) && (f = !0);
      try {
        r.start({ ...i, callId: e, cancel: f }, l);
      } catch (v) {
        a(v);
      }
    }
  });
}
var ja = (e, t) =>
    t.length == 1
      ? t[0]
      : t.some((i) => i.cancelled)
      ? Ci(e.get())
      : t.every((i) => i.noop)
      ? Wd(e.get())
      : He(
          e.get(),
          t.every((i) => i.finished)
        ),
  Wd = (e) => ({ value: e, noop: !0, finished: !0, cancelled: !1 }),
  He = (e, t, i = !1) => ({ value: e, finished: t, cancelled: i }),
  Ci = (e) => ({ value: e, cancelled: !0, finished: !1 });
function $d(e, t, i, n) {
  const { callId: o, parentId: r, onRest: l } = t,
    { asyncTo: a, promise: c } = i;
  return !r && e === a && !t.reset
    ? c
    : (i.promise = (async () => {
        (i.asyncId = o), (i.asyncTo = e);
        const u = Ca(t, (S, d) => (d === "onRest" ? void 0 : S));
        let f, g;
        const h = new Promise((S, d) => ((f = S), (g = d))),
          b = (S) => {
            const d =
              (o <= (i.cancelId || 0) && Ci(n)) ||
              (o !== i.asyncId && He(n, !1));
            if (d) throw ((S.result = d), g(S), S);
          },
          v = (S, d) => {
            const m = new Jc(),
              p = new qc();
            return (async () => {
              if (Ye.skipAnimation)
                throw (Fn(i), (p.result = He(n, !1)), g(p), p);
              b(m);
              const _ = k.obj(S) ? { ...S } : { ...d, to: S };
              (_.parentId = o),
                et(u, (N, j) => {
                  k.und(_[j]) && (_[j] = N);
                });
              const C = await n.start(_);
              return (
                b(m),
                i.paused &&
                  (await new Promise((N) => {
                    i.resumeQueue.add(N);
                  })),
                C
              );
            })();
          };
        let w;
        if (Ye.skipAnimation) return Fn(i), He(n, !1);
        try {
          let S;
          k.arr(e)
            ? (S = (async (d) => {
                for (const m of d) await v(m);
              })(e))
            : (S = Promise.resolve(e(v, n.stop.bind(n)))),
            await Promise.all([S.then(f), h]),
            (w = He(n.get(), !0, !1));
        } catch (S) {
          if (S instanceof Jc) w = S.result;
          else if (S instanceof qc) w = S.result;
          else throw S;
        } finally {
          o == i.asyncId &&
            ((i.asyncId = r),
            (i.asyncTo = r ? a : void 0),
            (i.promise = r ? c : void 0));
        }
        return (
          k.fun(l) &&
            L.batchedUpdates(() => {
              l(w, n, n.item);
            }),
          w
        );
      })());
}
function Fn(e, t) {
  mn(e.timeouts, (i) => i.cancel()),
    e.pauseQueue.clear(),
    e.resumeQueue.clear(),
    (e.asyncId = e.asyncTo = e.promise = void 0),
    t && (e.cancelId = t);
}
var Jc = class extends Error {
    constructor() {
      super(
        "An async animation has been interrupted. You see this error because you forgot to use `await` or `.catch(...)` on its returned promise."
      );
    }
  },
  qc = class extends Error {
    constructor() {
      super("SkipAnimationSignal");
    }
  },
  gl = (e) => e instanceof Sa,
  Ff = 1,
  Sa = class extends Id {
    constructor() {
      super(...arguments), (this.id = Ff++), (this._priority = 0);
    }
    get priority() {
      return this._priority;
    }
    set priority(e) {
      this._priority != e && ((this._priority = e), this._onPriorityChange(e));
    }
    get() {
      const e = Ze(this);
      return e && e.getValue();
    }
    to(...e) {
      return Ye.to(this, e);
    }
    interpolate(...e) {
      return gf(), Ye.to(this, e);
    }
    toJSON() {
      return this.get();
    }
    observerAdded(e) {
      e == 1 && this._attach();
    }
    observerRemoved(e) {
      e == 0 && this._detach();
    }
    _attach() {}
    _detach() {}
    _onChange(e, t = !1) {
      zn(this, { type: "change", parent: this, value: e, idle: t });
    }
    _onPriorityChange(e) {
      this.idle || Nr.sort(this),
        zn(this, { type: "priority", parent: this, priority: e });
    }
  },
  ei = Symbol.for("SpringPhase"),
  Gd = 1,
  fl = 2,
  yl = 4,
  ds = (e) => (e[ei] & Gd) > 0,
  ht = (e) => (e[ei] & fl) > 0,
  Yi = (e) => (e[ei] & yl) > 0,
  Xc = (e, t) => (t ? (e[ei] |= fl | Gd) : (e[ei] &= ~fl)),
  eu = (e, t) => (t ? (e[ei] |= yl) : (e[ei] &= ~yl)),
  Df = class extends Sa {
    constructor(e, t) {
      if (
        (super(),
        (this.animation = new Bf()),
        (this.defaultProps = {}),
        (this._state = {
          paused: !1,
          delayed: !1,
          pauseQueue: new Set(),
          resumeQueue: new Set(),
          timeouts: new Set(),
        }),
        (this._pendingCalls = new Set()),
        (this._lastCallId = 0),
        (this._lastToId = 0),
        (this._memoizedDuration = 0),
        !k.und(e) || !k.und(t))
      ) {
        const i = k.obj(e) ? { ...e } : { ...t, from: e };
        k.und(i.default) && (i.default = !0), this.start(i);
      }
    }
    get idle() {
      return !(ht(this) || this._state.asyncTo) || Yi(this);
    }
    get goal() {
      return ye(this.animation.to);
    }
    get velocity() {
      const e = Ze(this);
      return e instanceof Qn
        ? e.lastVelocity || 0
        : e.getPayload().map((t) => t.lastVelocity || 0);
    }
    get hasAnimated() {
      return ds(this);
    }
    get isAnimating() {
      return ht(this);
    }
    get isPaused() {
      return Yi(this);
    }
    get isDelayed() {
      return this._state.delayed;
    }
    advance(e) {
      let t = !0,
        i = !1;
      const n = this.animation;
      let { toValues: o } = n;
      const { config: r } = n,
        l = Ir(n.to);
      !l && Te(n.to) && (o = je(ye(n.to))),
        n.values.forEach((u, f) => {
          if (u.done) return;
          const g = u.constructor == On ? 1 : l ? l[f].lastPosition : o[f];
          let h = n.immediate,
            b = g;
          if (!h) {
            if (((b = u.lastPosition), r.tension <= 0)) {
              u.done = !0;
              return;
            }
            let v = (u.elapsedTime += e);
            const w = n.fromValues[f],
              S =
                u.v0 != null
                  ? u.v0
                  : (u.v0 = k.arr(r.velocity) ? r.velocity[f] : r.velocity);
            let d;
            const m =
              r.precision ||
              (w == g ? 0.005 : Math.min(1, Math.abs(g - w) * 0.001));
            if (k.und(r.duration))
              if (r.decay) {
                const p = r.decay === !0 ? 0.998 : r.decay,
                  _ = Math.exp(-(1 - p) * v);
                (b = w + (S / (1 - p)) * (1 - _)),
                  (h = Math.abs(u.lastPosition - b) <= m),
                  (d = S * _);
              } else {
                d = u.lastVelocity == null ? S : u.lastVelocity;
                const p = r.restVelocity || m / 10,
                  _ = r.clamp ? 0 : r.bounce,
                  C = !k.und(_),
                  N = w == g ? u.v0 > 0 : w < g;
                let j,
                  I = !1;
                const M = 1,
                  T = Math.ceil(e / M);
                for (
                  let H = 0;
                  H < T &&
                  ((j = Math.abs(d) > p),
                  !(!j && ((h = Math.abs(g - b) <= m), h)));
                  ++H
                ) {
                  C &&
                    ((I = b == g || b > g == N), I && ((d = -d * _), (b = g)));
                  const fe = -r.tension * 1e-6 * (b - g),
                    me = -r.friction * 0.001 * d,
                    Bi = (fe + me) / r.mass;
                  (d = d + Bi * M), (b = b + d * M);
                }
              }
            else {
              let p = 1;
              r.duration > 0 &&
                (this._memoizedDuration !== r.duration &&
                  ((this._memoizedDuration = r.duration),
                  u.durationProgress > 0 &&
                    ((u.elapsedTime = r.duration * u.durationProgress),
                    (v = u.elapsedTime += e))),
                (p = (r.progress || 0) + v / this._memoizedDuration),
                (p = p > 1 ? 1 : p < 0 ? 0 : p),
                (u.durationProgress = p)),
                (b = w + r.easing(p) * (g - w)),
                (d = (b - u.lastPosition) / e),
                (h = p == 1);
            }
            (u.lastVelocity = d),
              Number.isNaN(b) &&
                (console.warn("Got NaN while animating:", this), (h = !0));
          }
          l && !l[f].done && (h = !1),
            h ? (u.done = !0) : (t = !1),
            u.setValue(b, r.round) && (i = !0);
        });
      const a = Ze(this),
        c = a.getValue();
      if (t) {
        const u = ye(n.to);
        (c !== u || i) && !r.decay
          ? (a.setValue(u), this._onChange(u))
          : i && r.decay && this._onChange(c),
          this._stop();
      } else i && this._onChange(c);
    }
    set(e) {
      return (
        L.batchedUpdates(() => {
          this._stop(), this._focus(e), this._set(e);
        }),
        this
      );
    }
    pause() {
      this._update({ pause: !0 });
    }
    resume() {
      this._update({ pause: !1 });
    }
    finish() {
      if (ht(this)) {
        const { to: e, config: t } = this.animation;
        L.batchedUpdates(() => {
          this._onStart(), t.decay || this._set(e, !1), this._stop();
        });
      }
      return this;
    }
    update(e) {
      return (this.queue || (this.queue = [])).push(e), this;
    }
    start(e, t) {
      let i;
      return (
        k.und(e)
          ? ((i = this.queue || []), (this.queue = []))
          : (i = [k.obj(e) ? e : { ...t, to: e }]),
        Promise.all(i.map((n) => this._update(n))).then((n) => ja(this, n))
      );
    }
    stop(e) {
      const { to: t } = this.animation;
      return (
        this._focus(this.get()),
        Fn(this._state, e && this._lastCallId),
        L.batchedUpdates(() => this._stop(t, e)),
        this
      );
    }
    reset() {
      this._update({ reset: !0 });
    }
    eventObserved(e) {
      e.type == "change"
        ? this._start()
        : e.type == "priority" && (this.priority = e.priority + 1);
    }
    _prepareNode(e) {
      const t = this.key || "";
      let { to: i, from: n } = e;
      (i = k.obj(i) ? i[t] : i),
        (i == null || pl(i)) && (i = void 0),
        (n = k.obj(n) ? n[t] : n),
        n == null && (n = void 0);
      const o = { to: i, from: n };
      return (
        ds(this) ||
          (e.reverse && ([i, n] = [n, i]),
          (n = ye(n)),
          k.und(n) ? Ze(this) || this._set(i) : this._set(n)),
        o
      );
    }
    _update({ ...e }, t) {
      const { key: i, defaultProps: n } = this;
      e.default &&
        Object.assign(
          n,
          Ca(e, (l, a) => (/^on/.test(a) ? Dd(l, i) : l))
        ),
        iu(this, e, "onProps"),
        Ki(this, "onProps", e, this);
      const o = this._prepareNode(e);
      if (Object.isFrozen(this))
        throw Error(
          "Cannot animate a `SpringValue` object that is frozen. Did you forget to pass your component to `animated(...)` before animating its props?"
        );
      const r = this._state;
      return Ud(++this._lastCallId, {
        key: i,
        props: e,
        defaultProps: n,
        state: r,
        actions: {
          pause: () => {
            Yi(this) ||
              (eu(this, !0),
              en(r.pauseQueue),
              Ki(this, "onPause", He(this, Qi(this, this.animation.to)), this));
          },
          resume: () => {
            Yi(this) &&
              (eu(this, !1),
              ht(this) && this._resume(),
              en(r.resumeQueue),
              Ki(
                this,
                "onResume",
                He(this, Qi(this, this.animation.to)),
                this
              ));
          },
          start: this._merge.bind(this, o),
        },
      }).then((l) => {
        if (e.loop && l.finished && !(t && l.noop)) {
          const a = Yd(e);
          if (a) return this._update(a, !0);
        }
        return l;
      });
    }
    _merge(e, t, i) {
      if (t.cancel) return this.stop(!0), i(Ci(this));
      const n = !k.und(e.to),
        o = !k.und(e.from);
      if (n || o)
        if (t.callId > this._lastToId) this._lastToId = t.callId;
        else return i(Ci(this));
      const { key: r, defaultProps: l, animation: a } = this,
        { to: c, from: u } = a;
      let { to: f = c, from: g = u } = e;
      o && !n && (!t.default || k.und(f)) && (f = g),
        t.reverse && ([f, g] = [g, f]);
      const h = !nt(g, u);
      h && (a.from = g), (g = ye(g));
      const b = !nt(f, c);
      b && this._focus(f);
      const v = pl(t.to),
        { config: w } = a,
        { decay: S, velocity: d } = w;
      (n || o) && (w.velocity = 0),
        t.config &&
          !v &&
          Of(
            w,
            Ht(t.config, r),
            t.config !== l.config ? Ht(l.config, r) : void 0
          );
      let m = Ze(this);
      if (!m || k.und(f)) return i(He(this, !0));
      const p = k.und(t.reset) ? o && !t.default : !k.und(g) && pn(t.reset, r),
        _ = p ? g : this.get(),
        C = Bn(f),
        N = k.num(C) || k.arr(C) || Pr(C),
        j = !v && (!N || pn(l.immediate || t.immediate, r));
      if (b) {
        const H = dl(f);
        if (H !== m.constructor)
          if (j) m = this._set(C);
          else
            throw Error(
              `Cannot animate between ${m.constructor.name} and ${H.name}, as the "to" prop suggests`
            );
      }
      const I = m.constructor;
      let M = Te(f),
        T = !1;
      if (!M) {
        const H = p || (!ds(this) && h);
        (b || H) && ((T = nt(Bn(_), C)), (M = !T)),
          ((!nt(a.immediate, j) && !j) ||
            !nt(w.decay, S) ||
            !nt(w.velocity, d)) &&
            (M = !0);
      }
      if (
        (T && ht(this) && (a.changed && !p ? (M = !0) : M || this._stop(c)),
        !v &&
          ((M || Te(c)) &&
            ((a.values = m.getPayload()),
            (a.toValues = Te(f) ? null : I == On ? [1] : je(C))),
          a.immediate != j && ((a.immediate = j), !j && !p && this._set(c)),
          M))
      ) {
        const { onRest: H } = a;
        B(Hf, (me) => iu(this, t, me));
        const fe = He(this, Qi(this, c));
        en(this._pendingCalls, fe),
          this._pendingCalls.add(i),
          a.changed &&
            L.batchedUpdates(() => {
              var me;
              (a.changed = !p),
                H == null || H(fe, this),
                p
                  ? Ht(l.onRest, fe)
                  : (me = a.onStart) == null || me.call(a, fe, this);
            });
      }
      p && this._set(_),
        v
          ? i($d(t.to, t, this._state, this))
          : M
          ? this._start()
          : ht(this) && !b
          ? this._pendingCalls.add(i)
          : i(Wd(_));
    }
    _focus(e) {
      const t = this.animation;
      e !== t.to &&
        (Uc(this) && this._detach(), (t.to = e), Uc(this) && this._attach());
    }
    _attach() {
      let e = 0;
      const { to: t } = this.animation;
      Te(t) && (Mi(t, this), gl(t) && (e = t.priority + 1)),
        (this.priority = e);
    }
    _detach() {
      const { to: e } = this.animation;
      Te(e) && Rn(e, this);
    }
    _set(e, t = !0) {
      const i = ye(e);
      if (!k.und(i)) {
        const n = Ze(this);
        if (!n || !nt(i, n.getValue())) {
          const o = dl(i);
          !n || n.constructor != o ? ka(this, o.create(i)) : n.setValue(i),
            n &&
              L.batchedUpdates(() => {
                this._onChange(i, t);
              });
        }
      }
      return Ze(this);
    }
    _onStart() {
      const e = this.animation;
      e.changed ||
        ((e.changed = !0), Ki(this, "onStart", He(this, Qi(this, e.to)), this));
    }
    _onChange(e, t) {
      t || (this._onStart(), Ht(this.animation.onChange, e, this)),
        Ht(this.defaultProps.onChange, e, this),
        super._onChange(e, t);
    }
    _start() {
      const e = this.animation;
      Ze(this).reset(ye(e.to)),
        e.immediate || (e.fromValues = e.values.map((t) => t.lastPosition)),
        ht(this) || (Xc(this, !0), Yi(this) || this._resume());
    }
    _resume() {
      Ye.skipAnimation ? this.finish() : Nr.start(this);
    }
    _stop(e, t) {
      if (ht(this)) {
        Xc(this, !1);
        const i = this.animation;
        B(i.values, (o) => {
          o.done = !0;
        }),
          i.toValues && (i.onChange = i.onPause = i.onResume = void 0),
          zn(this, { type: "idle", parent: this });
        const n = t ? Ci(this.get()) : He(this.get(), Qi(this, e ?? i.to));
        en(this._pendingCalls, n),
          i.changed && ((i.changed = !1), Ki(this, "onRest", n, this));
      }
    }
  };
function Qi(e, t) {
  const i = Bn(t),
    n = Bn(e.get());
  return nt(n, i);
}
function Yd(e, t = e.loop, i = e.to) {
  const n = Ht(t);
  if (n) {
    const o = n !== !0 && Hd(n),
      r = (o || e).reverse,
      l = !o || o.reset;
    return Dn({
      ...e,
      loop: t,
      default: !1,
      pause: void 0,
      to: !r || pl(i) ? i : void 0,
      from: l ? e.from : void 0,
      reset: l,
      ...o,
    });
  }
}
function Dn(e) {
  const { to: t, from: i } = (e = Hd(e)),
    n = new Set();
  return (
    k.obj(t) && tu(t, n),
    k.obj(i) && tu(i, n),
    (e.keys = n.size ? Array.from(n) : null),
    e
  );
}
function Vf(e) {
  const t = Dn(e);
  return k.und(t.default) && (t.default = Ca(t)), t;
}
function tu(e, t) {
  et(e, (i, n) => i != null && t.add(n));
}
var Hf = ["onStart", "onRest", "onChange", "onPause", "onResume"];
function iu(e, t, i) {
  e.animation[i] = t[i] !== Vd(t, i) ? Dd(t[i], e.key) : void 0;
}
function Ki(e, t, ...i) {
  var n, o, r, l;
  (o = (n = e.animation)[t]) == null || o.call(n, ...i),
    (l = (r = e.defaultProps)[t]) == null || l.call(r, ...i);
}
var Uf = ["onStart", "onChange", "onRest"],
  Wf = 1,
  $f = class {
    constructor(e, t) {
      (this.id = Wf++),
        (this.springs = {}),
        (this.queue = []),
        (this._lastAsyncId = 0),
        (this._active = new Set()),
        (this._changed = new Set()),
        (this._started = !1),
        (this._state = {
          paused: !1,
          pauseQueue: new Set(),
          resumeQueue: new Set(),
          timeouts: new Set(),
        }),
        (this._events = {
          onStart: new Map(),
          onChange: new Map(),
          onRest: new Map(),
        }),
        (this._onFrame = this._onFrame.bind(this)),
        t && (this._flush = t),
        e && this.start({ default: !0, ...e });
    }
    get idle() {
      return (
        !this._state.asyncTo &&
        Object.values(this.springs).every(
          (e) => e.idle && !e.isDelayed && !e.isPaused
        )
      );
    }
    get item() {
      return this._item;
    }
    set item(e) {
      this._item = e;
    }
    get() {
      const e = {};
      return this.each((t, i) => (e[i] = t.get())), e;
    }
    set(e) {
      for (const t in e) {
        const i = e[t];
        k.und(i) || this.springs[t].set(i);
      }
    }
    update(e) {
      return e && this.queue.push(Dn(e)), this;
    }
    start(e) {
      let { queue: t } = this;
      return (
        e ? (t = je(e).map(Dn)) : (this.queue = []),
        this._flush ? this._flush(this, t) : (qd(this, t), _l(this, t))
      );
    }
    stop(e, t) {
      if ((e !== !!e && (t = e), t)) {
        const i = this.springs;
        B(je(t), (n) => i[n].stop(!!e));
      } else Fn(this._state, this._lastAsyncId), this.each((i) => i.stop(!!e));
      return this;
    }
    pause(e) {
      if (k.und(e)) this.start({ pause: !0 });
      else {
        const t = this.springs;
        B(je(e), (i) => t[i].pause());
      }
      return this;
    }
    resume(e) {
      if (k.und(e)) this.start({ pause: !1 });
      else {
        const t = this.springs;
        B(je(e), (i) => t[i].resume());
      }
      return this;
    }
    each(e) {
      et(this.springs, e);
    }
    _onFrame() {
      const { onStart: e, onChange: t, onRest: i } = this._events,
        n = this._active.size > 0,
        o = this._changed.size > 0;
      ((n && !this._started) || (o && !this._started)) &&
        ((this._started = !0),
        mn(e, ([a, c]) => {
          (c.value = this.get()), a(c, this, this._item);
        }));
      const r = !n && this._started,
        l = o || (r && i.size) ? this.get() : null;
      o &&
        t.size &&
        mn(t, ([a, c]) => {
          (c.value = l), a(c, this, this._item);
        }),
        r &&
          ((this._started = !1),
          mn(i, ([a, c]) => {
            (c.value = l), a(c, this, this._item);
          }));
    }
    eventObserved(e) {
      if (e.type == "change")
        this._changed.add(e.parent), e.idle || this._active.add(e.parent);
      else if (e.type == "idle") this._active.delete(e.parent);
      else return;
      L.onFrame(this._onFrame);
    }
  };
function _l(e, t) {
  return Promise.all(t.map((i) => Qd(e, i))).then((i) => ja(e, i));
}
async function Qd(e, t, i) {
  const { keys: n, to: o, from: r, loop: l, onRest: a, onResolve: c } = t,
    u = k.obj(t.default) && t.default;
  l && (t.loop = !1), o === !1 && (t.to = null), r === !1 && (t.from = null);
  const f = k.arr(o) || k.fun(o) ? o : void 0;
  f
    ? ((t.to = void 0), (t.onRest = void 0), u && (u.onRest = void 0))
    : B(Uf, (w) => {
        const S = t[w];
        if (k.fun(S)) {
          const d = e._events[w];
          (t[w] = ({ finished: m, cancelled: p }) => {
            const _ = d.get(S);
            _
              ? (m || (_.finished = !1), p && (_.cancelled = !0))
              : d.set(S, {
                  value: null,
                  finished: m || !1,
                  cancelled: p || !1,
                });
          }),
            u && (u[w] = t[w]);
        }
      });
  const g = e._state;
  t.pause === !g.paused
    ? ((g.paused = t.pause), en(t.pause ? g.pauseQueue : g.resumeQueue))
    : g.paused && (t.pause = !0);
  const h = (n || Object.keys(e.springs)).map((w) => e.springs[w].start(t)),
    b = t.cancel === !0 || Vd(t, "cancel") === !0;
  (f || (b && g.asyncId)) &&
    h.push(
      Ud(++e._lastAsyncId, {
        props: t,
        state: g,
        actions: {
          pause: ul,
          resume: ul,
          start(w, S) {
            b
              ? (Fn(g, e._lastAsyncId), S(Ci(e)))
              : ((w.onRest = a), S($d(f, w, g, e)));
          },
        },
      })
    ),
    g.paused &&
      (await new Promise((w) => {
        g.resumeQueue.add(w);
      }));
  const v = ja(e, await Promise.all(h));
  if (l && v.finished && !(i && v.noop)) {
    const w = Yd(t, l, o);
    if (w) return qd(e, [w]), Qd(e, w, !0);
  }
  return c && L.batchedUpdates(() => c(v, e, e.item)), v;
}
function nu(e, t) {
  const i = { ...e.springs };
  return (
    t &&
      B(je(t), (n) => {
        k.und(n.keys) && (n = Dn(n)),
          k.obj(n.to) || (n = { ...n, to: void 0 }),
          Jd(i, n, (o) => Zd(o));
      }),
    Kd(e, i),
    i
  );
}
function Kd(e, t) {
  et(t, (i, n) => {
    e.springs[n] || ((e.springs[n] = i), Mi(i, e));
  });
}
function Zd(e, t) {
  const i = new Df();
  return (i.key = e), t && Mi(i, t), i;
}
function Jd(e, t, i) {
  t.keys &&
    B(t.keys, (n) => {
      (e[n] || (e[n] = i(n)))._prepareNode(t);
    });
}
function qd(e, t) {
  B(t, (i) => {
    Jd(e.springs, i, (n) => Zd(n, e));
  });
}
var Lr = ({ children: e, ...t }) => {
    const i = P.useContext(cr),
      n = t.pause || !!i.pause,
      o = t.immediate || !!i.immediate;
    t = bf(() => ({ pause: n, immediate: o }), [n, o]);
    const { Provider: r } = cr;
    return P.createElement(r, { value: t }, e);
  },
  cr = Gf(Lr, {});
Lr.Provider = cr.Provider;
Lr.Consumer = cr.Consumer;
function Gf(e, t) {
  return (
    Object.assign(e, P.createContext(t)),
    (e.Provider._context = e),
    (e.Consumer._context = e),
    e
  );
}
var Yf = () => {
  const e = [],
    t = function (n) {
      yf();
      const o = [];
      return (
        B(e, (r, l) => {
          if (k.und(n)) o.push(r.start());
          else {
            const a = i(n, r, l);
            a && o.push(r.start(a));
          }
        }),
        o
      );
    };
  (t.current = e),
    (t.add = function (n) {
      e.includes(n) || e.push(n);
    }),
    (t.delete = function (n) {
      const o = e.indexOf(n);
      ~o && e.splice(o, 1);
    }),
    (t.pause = function () {
      return B(e, (n) => n.pause(...arguments)), this;
    }),
    (t.resume = function () {
      return B(e, (n) => n.resume(...arguments)), this;
    }),
    (t.set = function (n) {
      B(e, (o, r) => {
        const l = k.fun(n) ? n(r, o) : n;
        l && o.set(l);
      });
    }),
    (t.start = function (n) {
      const o = [];
      return (
        B(e, (r, l) => {
          if (k.und(n)) o.push(r.start());
          else {
            const a = this._getProps(n, r, l);
            a && o.push(r.start(a));
          }
        }),
        o
      );
    }),
    (t.stop = function () {
      return B(e, (n) => n.stop(...arguments)), this;
    }),
    (t.update = function (n) {
      return B(e, (o, r) => o.update(this._getProps(n, o, r))), this;
    });
  const i = function (n, o, r) {
    return k.fun(n) ? n(r, o) : n;
  };
  return (t._getProps = i), t;
};
function Qf(e, t, i) {
  const n = k.fun(t) && t;
  n && !i && (i = []);
  const o = P.useMemo(() => (n || arguments.length == 3 ? Yf() : void 0), []),
    r = P.useRef(0),
    l = Md(),
    a = P.useMemo(
      () => ({
        ctrls: [],
        queue: [],
        flush(d, m) {
          const p = nu(d, m);
          return r.current > 0 &&
            !a.queue.length &&
            !Object.keys(p).some((C) => !d.springs[C])
            ? _l(d, m)
            : new Promise((C) => {
                Kd(d, p),
                  a.queue.push(() => {
                    C(_l(d, m));
                  }),
                  l();
              });
        },
      }),
      []
    ),
    c = P.useRef([...a.ctrls]),
    u = [],
    f = $c(e) || 0;
  P.useMemo(() => {
    B(c.current.slice(e, f), (d) => {
      Lf(d, o), d.stop(!0);
    }),
      (c.current.length = e),
      g(f, e);
  }, [e]),
    P.useMemo(() => {
      g(0, Math.min(f, e));
    }, i);
  function g(d, m) {
    for (let p = d; p < m; p++) {
      const _ = c.current[p] || (c.current[p] = new $f(null, a.flush)),
        C = n ? n(p, _) : t[p];
      C && (u[p] = Vf(C));
    }
  }
  const h = c.current.map((d, m) => nu(d, u[m])),
    b = P.useContext(Lr),
    v = $c(b),
    w = b !== v && Tf(b);
  xa(() => {
    r.current++, (a.ctrls = c.current);
    const { queue: d } = a;
    d.length && ((a.queue = []), B(d, (m) => m())),
      B(c.current, (m, p) => {
        o == null || o.add(m), w && m.start({ default: b });
        const _ = u[p];
        _ && (zf(m, _.ref), m.ref ? m.queue.push(_) : m.start(_));
      });
  }),
    Od(() => () => {
      B(a.ctrls, (d) => d.stop(!0));
    });
  const S = h.map((d) => ({ ...d }));
  return o ? [S, o] : S;
}
function bo(e, t) {
  const i = k.fun(e),
    [[n], o] = Qf(1, i ? e : [e], i ? t || [] : t);
  return i || arguments.length == 2 ? [n, o] : n;
}
var Kf = class extends Sa {
  constructor(e, t) {
    super(),
      (this.source = e),
      (this.idle = !0),
      (this._active = new Set()),
      (this.calc = Tn(...t));
    const i = this._get(),
      n = dl(i);
    ka(this, n.create(i));
  }
  advance(e) {
    const t = this._get(),
      i = this.get();
    nt(t, i) || (Ze(this).setValue(t), this._onChange(t, this.idle)),
      !this.idle && ou(this._active) && ps(this);
  }
  _get() {
    const e = k.arr(this.source) ? this.source.map(ye) : je(ye(this.source));
    return this.calc(...e);
  }
  _start() {
    this.idle &&
      !ou(this._active) &&
      ((this.idle = !1),
      B(Ir(this), (e) => {
        e.done = !1;
      }),
      Ye.skipAnimation
        ? (L.batchedUpdates(() => this.advance()), ps(this))
        : Nr.start(this));
  }
  _attach() {
    let e = 1;
    B(je(this.source), (t) => {
      Te(t) && Mi(t, this),
        gl(t) &&
          (t.idle || this._active.add(t), (e = Math.max(e, t.priority + 1)));
    }),
      (this.priority = e),
      this._start();
  }
  _detach() {
    B(je(this.source), (e) => {
      Te(e) && Rn(e, this);
    }),
      this._active.clear(),
      ps(this);
  }
  eventObserved(e) {
    e.type == "change"
      ? e.idle
        ? this.advance()
        : (this._active.add(e.parent), this._start())
      : e.type == "idle"
      ? this._active.delete(e.parent)
      : e.type == "priority" &&
        (this.priority = je(this.source).reduce(
          (t, i) => Math.max(t, (gl(i) ? i.priority : 0) + 1),
          0
        ));
  }
};
function Zf(e) {
  return e.idle !== !1;
}
function ou(e) {
  return !e.size || Array.from(e).every(Zf);
}
function ps(e) {
  e.idle ||
    ((e.idle = !0),
    B(Ir(e), (t) => {
      t.done = !0;
    }),
    zn(e, { type: "idle", parent: e }));
}
Ye.assign({ createStringInterpolator: zd, to: (e, t) => new Kf(e, t) });
var Xd = /^--/;
function Jf(e, t) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : typeof t == "number" &&
      t !== 0 &&
      !Xd.test(e) &&
      !(hn.hasOwnProperty(e) && hn[e])
    ? t + "px"
    : ("" + t).trim();
}
var ru = {};
function qf(e, t) {
  if (!e.nodeType || !e.setAttribute) return !1;
  const i =
      e.nodeName === "filter" ||
      (e.parentNode && e.parentNode.nodeName === "filter"),
    {
      style: n,
      children: o,
      scrollTop: r,
      scrollLeft: l,
      viewBox: a,
      ...c
    } = t,
    u = Object.values(c),
    f = Object.keys(c).map((g) =>
      i || e.hasAttribute(g)
        ? g
        : ru[g] || (ru[g] = g.replace(/([A-Z])/g, (h) => "-" + h.toLowerCase()))
    );
  o !== void 0 && (e.textContent = o);
  for (const g in n)
    if (n.hasOwnProperty(g)) {
      const h = Jf(g, n[g]);
      Xd.test(g) ? e.style.setProperty(g, h) : (e.style[g] = h);
    }
  f.forEach((g, h) => {
    e.setAttribute(g, u[h]);
  }),
    r !== void 0 && (e.scrollTop = r),
    l !== void 0 && (e.scrollLeft = l),
    a !== void 0 && e.setAttribute("viewBox", a);
}
var hn = {
    animationIterationCount: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  Xf = (e, t) => e + t.charAt(0).toUpperCase() + t.substring(1),
  ey = ["Webkit", "Ms", "Moz", "O"];
hn = Object.keys(hn).reduce(
  (e, t) => (ey.forEach((i) => (e[Xf(i, t)] = e[t])), e),
  hn
);
var ty = /^(matrix|translate|scale|rotate|skew)/,
  iy = /^(translate)/,
  ny = /^(rotate|skew)/,
  hs = (e, t) => (k.num(e) && e !== 0 ? e + t : e),
  zo = (e, t) =>
    k.arr(e)
      ? e.every((i) => zo(i, t))
      : k.num(e)
      ? e === t
      : parseFloat(e) === t,
  oy = class extends Tr {
    constructor({ x: e, y: t, z: i, ...n }) {
      const o = [],
        r = [];
      (e || t || i) &&
        (o.push([e || 0, t || 0, i || 0]),
        r.push((l) => [
          `translate3d(${l.map((a) => hs(a, "px")).join(",")})`,
          zo(l, 0),
        ])),
        et(n, (l, a) => {
          if (a === "transform")
            o.push([l || ""]), r.push((c) => [c, c === ""]);
          else if (ty.test(a)) {
            if ((delete n[a], k.und(l))) return;
            const c = iy.test(a) ? "px" : ny.test(a) ? "deg" : "";
            o.push(je(l)),
              r.push(
                a === "rotate3d"
                  ? ([u, f, g, h]) => [
                      `rotate3d(${u},${f},${g},${hs(h, c)})`,
                      zo(h, 0),
                    ]
                  : (u) => [
                      `${a}(${u.map((f) => hs(f, c)).join(",")})`,
                      zo(u, a.startsWith("scale") ? 1 : 0),
                    ]
              );
          }
        }),
        o.length && (n.transform = new ry(o, r)),
        super(n);
    }
  },
  ry = class extends Id {
    constructor(e, t) {
      super(), (this.inputs = e), (this.transforms = t), (this._value = null);
    }
    get() {
      return this._value || (this._value = this._get());
    }
    _get() {
      let e = "",
        t = !0;
      return (
        B(this.inputs, (i, n) => {
          const o = ye(i[0]),
            [r, l] = this.transforms[n](k.arr(o) ? o : i.map(ye));
          (e += " " + r), (t = t && l);
        }),
        t ? "none" : e
      );
    }
    observerAdded(e) {
      e == 1 && B(this.inputs, (t) => B(t, (i) => Te(i) && Mi(i, this)));
    }
    observerRemoved(e) {
      e == 0 && B(this.inputs, (t) => B(t, (i) => Te(i) && Rn(i, this)));
    }
    eventObserved(e) {
      e.type == "change" && (this._value = null), zn(this, e);
    }
  },
  sy = [
    "a",
    "abbr",
    "address",
    "area",
    "article",
    "aside",
    "audio",
    "b",
    "base",
    "bdi",
    "bdo",
    "big",
    "blockquote",
    "body",
    "br",
    "button",
    "canvas",
    "caption",
    "cite",
    "code",
    "col",
    "colgroup",
    "data",
    "datalist",
    "dd",
    "del",
    "details",
    "dfn",
    "dialog",
    "div",
    "dl",
    "dt",
    "em",
    "embed",
    "fieldset",
    "figcaption",
    "figure",
    "footer",
    "form",
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "head",
    "header",
    "hgroup",
    "hr",
    "html",
    "i",
    "iframe",
    "img",
    "input",
    "ins",
    "kbd",
    "keygen",
    "label",
    "legend",
    "li",
    "link",
    "main",
    "map",
    "mark",
    "menu",
    "menuitem",
    "meta",
    "meter",
    "nav",
    "noscript",
    "object",
    "ol",
    "optgroup",
    "option",
    "output",
    "p",
    "param",
    "picture",
    "pre",
    "progress",
    "q",
    "rp",
    "rt",
    "ruby",
    "s",
    "samp",
    "script",
    "section",
    "select",
    "small",
    "source",
    "span",
    "strong",
    "style",
    "sub",
    "summary",
    "sup",
    "table",
    "tbody",
    "td",
    "textarea",
    "tfoot",
    "th",
    "thead",
    "time",
    "title",
    "tr",
    "track",
    "u",
    "ul",
    "var",
    "video",
    "wbr",
    "circle",
    "clipPath",
    "defs",
    "ellipse",
    "foreignObject",
    "g",
    "image",
    "line",
    "linearGradient",
    "mask",
    "path",
    "pattern",
    "polygon",
    "polyline",
    "radialGradient",
    "rect",
    "stop",
    "svg",
    "text",
    "tspan",
  ];
Ye.assign({
  batchedUpdates: vd.unstable_batchedUpdates,
  createStringInterpolator: zd,
  colors: Yg,
});
var ly = Nf(sy, {
    applyAnimatedValues: qf,
    createAnimatedStyle: (e) => new oy(e),
    getComponentProps: ({ scrollTop: e, scrollLeft: t, ...i }) => i,
  }),
  vo = ly.animated;
function Ut() {
  return (
    (Ut =
      Object.assign ||
      function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var i = arguments[t];
          for (var n in i)
            Object.prototype.hasOwnProperty.call(i, n) && (e[n] = i[n]);
        }
        return e;
      }),
    Ut.apply(this, arguments)
  );
}
function ay(e, t) {
  if (e == null) return {};
  var i = {},
    n = Object.keys(e),
    o,
    r;
  for (r = 0; r < n.length; r++)
    (o = n[r]), !(t.indexOf(o) >= 0) && (i[o] = e[o]);
  return i;
}
var gs = {
    dark: {
      circle: { r: 9 },
      mask: { cx: "50%", cy: "23%" },
      svg: { transform: "rotate(40deg)" },
      lines: { opacity: 0 },
    },
    light: {
      circle: { r: 5 },
      mask: { cx: "100%", cy: "0%" },
      svg: { transform: "rotate(90deg)" },
      lines: { opacity: 1 },
    },
    springConfig: { mass: 4, tension: 250, friction: 35 },
  },
  su = 0,
  cy = function (t) {
    var i = t.onChange,
      n = t.checked,
      o = n === void 0 ? !1 : n,
      r = t.size,
      l = r === void 0 ? 24 : r,
      a = t.animationProperties,
      c = a === void 0 ? gs : a,
      u = t.moonColor,
      f = u === void 0 ? "white" : u,
      g = t.sunColor,
      h = g === void 0 ? "black" : g,
      b = t.style,
      v = ay(t, [
        "onChange",
        "children",
        "checked",
        "size",
        "animationProperties",
        "moonColor",
        "sunColor",
        "style",
      ]),
      w = P.useState(0),
      S = w[0],
      d = w[1];
    P.useEffect(
      function () {
        (su += 1), d(su);
      },
      [d]
    );
    var m = P.useMemo(
        function () {
          return c !== gs ? Object.assign(gs, c) : c;
        },
        [c]
      ),
      p = m[o ? "dark" : "light"],
      _ = p.circle,
      C = p.svg,
      N = p.lines,
      j = p.mask,
      I = bo(Ut({}, C, { config: c.springConfig })),
      M = bo(Ut({}, _, { config: c.springConfig })),
      T = bo(Ut({}, j, { config: c.springConfig })),
      H = bo(Ut({}, N, { config: c.springConfig })),
      fe = function () {
        return i(!o);
      },
      me = "circle-mask-" + S;
    return P.createElement(
      vo.svg,
      Object.assign(
        {
          xmlns: "http://www.w3.org/2000/svg",
          width: l,
          height: l,
          viewBox: "0 0 24 24",
          color: o ? f : h,
          fill: "none",
          strokeWidth: "2",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          stroke: "currentColor",
          onClick: fe,
          style: Ut({ cursor: "pointer" }, I, b),
        },
        v
      ),
      P.createElement(
        "mask",
        { id: me },
        P.createElement("rect", {
          x: "0",
          y: "0",
          width: "100%",
          height: "100%",
          fill: "white",
        }),
        P.createElement(vo.circle, { style: T, r: "9", fill: "black" })
      ),
      P.createElement(vo.circle, {
        cx: "12",
        cy: "12",
        fill: o ? f : h,
        style: M,
        mask: "url(#" + me + ")",
      }),
      P.createElement(
        vo.g,
        { stroke: "currentColor", style: H },
        P.createElement("line", { x1: "12", y1: "1", x2: "12", y2: "3" }),
        P.createElement("line", { x1: "12", y1: "21", x2: "12", y2: "23" }),
        P.createElement("line", {
          x1: "4.22",
          y1: "4.22",
          x2: "5.64",
          y2: "5.64",
        }),
        P.createElement("line", {
          x1: "18.36",
          y1: "18.36",
          x2: "19.78",
          y2: "19.78",
        }),
        P.createElement("line", { x1: "1", y1: "12", x2: "3", y2: "12" }),
        P.createElement("line", { x1: "21", y1: "12", x2: "23", y2: "12" }),
        P.createElement("line", {
          x1: "4.22",
          y1: "19.78",
          x2: "5.64",
          y2: "18.36",
        }),
        P.createElement("line", {
          x1: "18.36",
          y1: "5.64",
          x2: "19.78",
          y2: "4.22",
        })
      )
    );
  };
function uy({ toggleDarkMode: e }) {
  const t = P.useContext(Oi);
  return s.jsx("div", {
    className: t
      ? "bg-gray-900 border-b border-gray-700"
      : "bg-gray-100 border-b border-gray-300",
    children: s.jsxs("div", {
      className: "flex justify-between items-center py-4 px-6",
      children: [
        s.jsx("h1", {
          className: `text-xl font-bold ${t ? "text-white" : "text-gray-700"}`,
          children: "ELEMENTALS",
        }),
        s.jsx("span", {
          className: "cursor-pointer",
          children: s.jsx(cy, {
            checked: t,
            onChange: e,
            size: 30,
            "aria-label": "Switch to Dark Mode",
            "aria-checked": t,
          }),
        }),
      ],
    }),
  });
}
const Ft = [
    {
      name: "Actinium",
      symbol: "Ac",
      description: "A highly radioactive, silvery-white metal",
    },
    {
      name: "Aluminum",
      symbol: "Al",
      description: "A silvery-white, ductile metallic element",
    },
    {
      name: "Americium",
      symbol: "Am",
      description: "A synthetic metallic element",
    },
    {
      name: "Antimony",
      symbol: "Sb",
      description: "A lustrous gray metalloid",
    },
    {
      name: "Argon",
      symbol: "Ar",
      description: "A colorless, odorless, tasteless, and non-toxic gas",
    },
    {
      name: "Arsenic",
      symbol: "As",
      description: "A gray, metallic-looking metalloid",
    },
    {
      name: "Astatine",
      symbol: "At",
      description: "A highly radioactive halogen",
    },
    {
      name: "Barium",
      symbol: "Ba",
      description: "A soft, silvery alkaline earth metal",
    },
    {
      name: "Berkelium",
      symbol: "Bk",
      description: "A radioactive metallic element",
    },
    {
      name: "Beryllium",
      symbol: "Be",
      description: "A steel-gray, lightweight metal that is highly toxic",
    },
    {
      name: "Bismuth",
      symbol: "Bi",
      description: "A brittle, pinkish-white metallic element",
    },
    {
      name: "Bohrium",
      symbol: "Bh",
      description: "A synthetic radioactive metallic element",
    },
    {
      name: "Boron",
      symbol: "B",
      description:
        "A metalloid element that is essential for the growth of many plants",
    },
    {
      name: "Bromine",
      symbol: "Br",
      description: "A red-brown liquid halogen",
    },
    {
      name: "Cadmium",
      symbol: "Cd",
      description: "A soft, bluish-white metal",
    },
    {
      name: "Calcium",
      symbol: "Ca",
      description: "A soft gray alkaline earth metal",
    },
    {
      name: "Californium",
      symbol: "Cf",
      description: "A radioactive metallic element",
    },
    {
      name: "Carbon",
      symbol: "C",
      description: "A non-metallic element with a black, lustrous appearance",
    },
    {
      name: "Cerium",
      symbol: "Ce",
      description: "A soft, ductile, silvery-white metallic element",
    },
    {
      name: "Cesium",
      symbol: "Cs",
      description: "A soft, silvery-gold alkali metal",
    },
    {
      name: "Chlorine",
      symbol: "Cl",
      description: "A yellow-green gas with a pungent, irritating odor",
    },
    {
      name: "Chromium",
      symbol: "Cr",
      description:
        "A hard, bluish-gray transition metal known for its high polish",
    },
    {
      name: "Cobalt",
      symbol: "Co",
      description:
        "A hard, lustrous, silver-gray metal used in alloys and magnets",
    },
    {
      name: "Copernicium",
      symbol: "Cn",
      description: "A synthetic radioactive metallic element",
    },
    {
      name: "Copper",
      symbol: "Cu",
      description:
        "A ductile, reddish-brown metal with excellent electrical conductivity",
    },
    {
      name: "Curium",
      symbol: "Cm",
      description: "A radioactive metallic element",
    },
    {
      name: "Darmstadtium",
      symbol: "Ds",
      description: "A synthetic radioactive metallic element",
    },
    {
      name: "Dubnium",
      symbol: "Db",
      description: "A synthetic radioactive metallic element",
    },
    {
      name: "Dysprosium",
      symbol: "Dy",
      description: "A rare-earth element with a metallic silver luster",
    },
    {
      name: "Einsteinium",
      symbol: "Es",
      description: "A radioactive metallic element",
    },
    {
      name: "Erbium",
      symbol: "Er",
      description: "A silvery-white metallic element",
    },
    {
      name: "Europium",
      symbol: "Eu",
      description: "A moderately hard silvery metal",
    },
    {
      name: "Fermium",
      symbol: "Fm",
      description: "A synthetic radioactive metallic element",
    },
    {
      name: "Flerovium",
      symbol: "Fl",
      description: "A synthetic radioactive metallic element",
    },
    {
      name: "Fluorine",
      symbol: "F",
      description: "A pale yellow-green gas, highly reactive and corrosive",
    },
    {
      name: "Francium",
      symbol: "Fr",
      description: "A highly radioactive alkali metal",
    },
    {
      name: "Gadolinium",
      symbol: "Gd",
      description: "A silvery-white, malleable, and ductile rare-earth metal",
    },
    {
      name: "Gallium",
      symbol: "Ga",
      description: "A soft, silvery-blue metallic element",
    },
    {
      name: "Germanium",
      symbol: "Ge",
      description: "A lustrous, hard, grayish-white metalloid",
    },
    {
      name: "Gold",
      symbol: "Au",
      description: "A dense, soft, shiny, malleable, and ductile metal",
    },
    {
      name: "Hafnium",
      symbol: "Hf",
      description: "A shiny, silvery, ductile metal",
    },
    {
      name: "Hassium",
      symbol: "Hs",
      description: "A synthetic radioactive metallic element",
    },
    {
      name: "Helium",
      symbol: "He",
      description:
        "A colorless, odorless, and inert gas, known for its low density and non-reactive nature",
    },
    {
      name: "Holmium",
      symbol: "Ho",
      description:
        "A relatively soft and malleable silvery-white metallic element",
    },
    {
      name: "Hydrogen",
      symbol: "H",
      description: "A colorless, odorless, non-toxic gas",
    },
    {
      name: "Indium",
      symbol: "In",
      description: "A soft, silvery-white metallic element",
    },
    {
      name: "Iodine",
      symbol: "I",
      description: "A lustrous black solid halogen",
    },
    {
      name: "Iridium",
      symbol: "Ir",
      description: "A very hard, brittle, silvery-white transition metal",
    },
    {
      name: "Iron",
      symbol: "Fe",
      description: "A lustrous, silvery metal that is highly reactive",
    },
    {
      name: "Krypton",
      symbol: "Kr",
      description: "A colorless, odorless noble gas",
    },
    {
      name: "Lanthanum",
      symbol: "La",
      description: "A silvery-white metallic element",
    },
    {
      name: "Lawrencium",
      symbol: "Lr",
      description: "A synthetic radioactive metallic element",
    },
    {
      name: "Lead",
      symbol: "Pb",
      description: "A soft, heavy, bluish-gray metallic element",
    },
    {
      name: "Lithium",
      symbol: "Li",
      description:
        "A soft, silver-white metal that is highly reactive and flammable",
    },
    {
      name: "Livermorium",
      symbol: "Lv",
      description: "A synthetic radioactive metallic element",
    },
    { name: "Lutetium", symbol: "Lu", description: "A silvery-white metal" },
    {
      name: "Magnesium",
      symbol: "Mg",
      description: "A shiny gray metal that is lightweight and malleable",
    },
    {
      name: "Manganese",
      symbol: "Mn",
      description: "A gray-white transition metal used in steelmaking",
    },
    {
      name: "Meitnerium",
      symbol: "Mt",
      description: "A synthetic radioactive metallic element",
    },
    {
      name: "Mendelevium",
      symbol: "Md",
      description: "A synthetic metallic element",
    },
    {
      name: "Mercury",
      symbol: "Hg",
      description: "A heavy, silvery d-block element",
    },
    {
      name: "Molybdenum",
      symbol: "Mo",
      description: "A silvery-white, hard, transition metal",
    },
    {
      name: "Moscovium",
      symbol: "Mc",
      description: "A synthetic radioactive metallic element",
    },
    {
      name: "Neodymium",
      symbol: "Nd",
      description: "A soft silvery metal that tarnishes in air",
    },
    {
      name: "Neon",
      symbol: "Ne",
      description: "A colorless, odorless noble gas with a low boiling point",
    },
    {
      name: "Neptunium",
      symbol: "Np",
      description: "A radioactive metallic element",
    },
    {
      name: "Nickel",
      symbol: "Ni",
      description: "A silvery-white lustrous metal used in alloys and plating",
    },
    {
      name: "Nihonium",
      symbol: "Nh",
      description: "A synthetic radioactive metallic element",
    },
    {
      name: "Niobium",
      symbol: "Nb",
      description: "A soft, gray, ductile transition metal",
    },
    {
      name: "Nitrogen",
      symbol: "N",
      description: "A colorless, odorless, tasteless gas",
    },
    {
      name: "Nobelium",
      symbol: "No",
      description: "A synthetic radioactive metallic element",
    },
    {
      name: "Oganesson",
      symbol: "Og",
      description: "A synthetic radioactive metallic element",
    },
    {
      name: "Osmium",
      symbol: "Os",
      description: "A hard, brittle, bluish-white transition metal",
    },
    {
      name: "Oxygen",
      symbol: "O",
      description: "A colorless, odorless, tasteless gas",
    },
    {
      name: "Palladium",
      symbol: "Pd",
      description: "A rare, silvery-white metal",
    },
    {
      name: "Phosphorus",
      symbol: "P",
      description: "A highly reactive nonmetallic element",
    },
    {
      name: "Platinum",
      symbol: "Pt",
      description:
        "A dense, malleable, ductile, precious, gray-white transition metal",
    },
    {
      name: "Plutonium",
      symbol: "Pu",
      description: "A radioactive metallic element",
    },
    {
      name: "Polonium",
      symbol: "Po",
      description: "A highly radioactive metallic element",
    },
    {
      name: "Potassium",
      symbol: "K",
      description: "A soft, silvery-white alkali metal",
    },
    {
      name: "Praseodymium",
      symbol: "Pr",
      description: "A soft, silvery, malleable, and ductile metal",
    },
    {
      name: "Promethium",
      symbol: "Pm",
      description: "A rare radioactive metallic element",
    },
    {
      name: "Protactinium",
      symbol: "Pa",
      description: "A highly radioactive, metallic element",
    },
    {
      name: "Radium",
      symbol: "Ra",
      description: "A highly radioactive metallic element",
    },
    {
      name: "Radon",
      symbol: "Rn",
      description: "A colorless, odorless, and tasteless noble gas",
    },
    {
      name: "Rhenium",
      symbol: "Re",
      description: "A silvery-gray, heavy, third-row transition metal",
    },
    {
      name: "Rhodium",
      symbol: "Rh",
      description: "A rare, silvery-white, hard, corrosion-resistant metal",
    },
    {
      name: "Roentgenium",
      symbol: "Rg",
      description: "A synthetic radioactive metallic element",
    },
    {
      name: "Rubidium",
      symbol: "Rb",
      description: "A soft, silvery-white metallic element",
    },
    { name: "Ruthenium", symbol: "Ru", description: "A rare transition metal" },
    {
      name: "Rutherfordium",
      symbol: "Rf",
      description: "A synthetic radioactive metallic element",
    },
    {
      name: "Samarium",
      symbol: "Sm",
      description: "A moderately hard silvery metal",
    },
    {
      name: "Scandium",
      symbol: "Sc",
      description: "A silvery-white metallic transition metal",
    },
    {
      name: "Seaborgium",
      symbol: "Sg",
      description: "A synthetic radioactive metallic element",
    },
    {
      name: "Selenium",
      symbol: "Se",
      description:
        "A nonmetal with properties that are intermediate between those of sulfur and tellurium",
    },
    {
      name: "Silicon",
      symbol: "Si",
      description:
        "A hard, brittle crystalline solid with a blue-grey metallic lustre",
    },
    {
      name: "Silver",
      symbol: "Ag",
      description: "A soft, white, lustrous transition metal",
    },
    {
      name: "Sodium",
      symbol: "Na",
      description: "A soft, silvery-white, highly reactive metal",
    },
    {
      name: "Strontium",
      symbol: "Sr",
      description: "A bright, silvery metal that is softer than calcium",
    },
    {
      name: "Sulfur",
      symbol: "S",
      description: "A nonmetallic element, pale yellow in color",
    },
    {
      name: "Tantalum",
      symbol: "Ta",
      description: "A rare, hard, blue-gray, lustrous transition metal",
    },
    { name: "Technetium", symbol: "Tc", description: "A silvery-gray metal" },
    {
      name: "Tellurium",
      symbol: "Te",
      description: "A brittle, mildly toxic, rare, silver-white metalloid",
    },
    {
      name: "Tennessine",
      symbol: "Ts",
      description: "A synthetic radioactive metallic element",
    },
    {
      name: "Terbium",
      symbol: "Tb",
      description: "A silvery-white rare-earth metal",
    },
    {
      name: "Thallium",
      symbol: "Tl",
      description: "A soft, gray post-transition metal",
    },
    {
      name: "Thorium",
      symbol: "Th",
      description: "A weakly radioactive metallic element",
    },
    {
      name: "Thulium",
      symbol: "Tm",
      description: "A silvery-gray, lustrous, and ductile rare-earth metal",
    },
    { name: "Tin", symbol: "Sn", description: "A soft, silvery-white metal" },
    {
      name: "Titanium",
      symbol: "Ti",
      description: "A silver-colored, low-density metal",
    },
    {
      name: "Tungsten",
      symbol: "W",
      description: "A hard, rare metal under standard conditions",
    },
    {
      name: "Uranium",
      symbol: "U",
      description:
        "A silvery-grey metal in the actinide series of the periodic table",
    },
    {
      name: "Vanadium",
      symbol: "V",
      description:
        "A hard, silvery-grey, ductile, and malleable transition metal",
    },
    {
      name: "Xenon",
      symbol: "Xe",
      description:
        "A colorless, dense, odorless noble gas found in the Earth's atmosphere",
    },
    {
      name: "Ytterbium",
      symbol: "Yb",
      description: "A soft, malleable, and ductile rare-earth metal",
    },
    {
      name: "Yttrium",
      symbol: "Y",
      description: "A silvery-metallic transition metal",
    },
    {
      name: "Zinc",
      symbol: "Zn",
      description: "A bluish-white, lustrous, diamagnetic metal",
    },
    {
      name: "Zirconium",
      symbol: "Zr",
      description: "A lustrous, grey-white, strong transition metal",
    },
  ],
  my = () => {
    let t = P.useContext(Oi) ? "text-white" : "text-gray-900";
    const [i, n] = P.useState(Ft[0]),
      [o, r] = P.useState(Ft[0]),
      [l, a] = P.useState(""),
      [c, u] = P.useState(!1),
      f = (h, b) => {
        b(Ft.find((v) => v.name === h.target.value));
      },
      g = () => {
        u(!0);
        const h = i.name + o.name,
          v = {
            HydrogenOxygen: "Water",
            SodiumChlorine: "Sodium Chloride",
            NitrogenOxygen: "Nitrous Oxide",
            LithiumBeryllium: "Lithium Beryllide",
            LithiumOxygen: "Lithium Oxide",
            HydrogenBeryllium: "Hydrogen Beryllide",
            AluminumHydroxideSulfur: "Aluminum Sulfide",
            PotassiumChlorine: "Potassium Chloride",
            SulfurOxygen: "Sulfur Dioxide",
            IronOxygen: "Iron Oxide",
            CalciumCarbon: "Calcium Carbide",
            PhosphorusOxygen: "Phosphorus Pentoxide",
            CopperOxygen: "Copper Oxide",
            SilverSulfur: "Silver Sulfide",
            LithiumHydrogen: "Lithium Hydride",
            LithiumNitrogen: "Lithium Nitride",
            LithiumCarbon: "Lithium Carbide",
            LithiumChlorine: "Lithium Chloride",
            LithiumSodium: "Lithium Sodium Alloy",
            LithiumArgon: "Lithium Argonide",
            LithiumNitricAcid: "Lithium Nitrate",
            LithiumNeon: "Lithium Neonide",
            LithiumFluorine: "Lithium Fluoride",
            LithiumSilicon: "Lithium Silicide",
            LithiumTitanium: "Lithium Titanium Alloy",
            LithiumVanadium: "Lithium Vanadate",
            LithiumChromium: "Lithium Chromate",
            LithiumManganese: "Lithium Manganate",
            LithiumCobalt: "Lithium Cobalt Oxide",
            LithiumNickel: "Lithium Nickel Oxide",
            LithiumCopper: "Lithium Copper Alloy",
            LithiumZinc: "Lithium Zinc Alloy",
            LithiumHelium: "Lithium Helide",
            BerylliumHydrogen: "Beryllium Hydride",
            BerylliumOxygen: "Beryllium Oxide (Beryllia)",
            BerylliumNitrogen: "Beryllium Nitride",
            BerylliumCarbon: "Beryllium Carbide",
            BerylliumChlorine: "Beryllium Chloride",
            BerylliumSodium: "Beryllium Sodium Alloy",
            BerylliumArgon: "Beryllium Argon Compound",
            BerylliumNitricAcid: "Beryllium Nitrate",
            BerylliumFluorine: "Beryllium Fluoride",
            BerylliumSilicon: "Beryllium Silicon Alloy",
            BerylliumTitanium: "Beryllium Titanium Alloy",
            BerylliumVanadium: "Beryllium Vanadium Compound",
            BerylliumChromium: "Beryllium Chromium Alloy",
            BerylliumManganese: "Beryllium Manganese Compound",
            BerylliumCobalt: "Beryllium Cobalt Alloy",
            BerylliumNickel: "Beryllium Nickel Alloy",
            HydrogenNitrogen: "Ammonia",
            HydrogenCarbon: "Methane",
            HydrogenChlorine: "Hydrochloric Acid",
            HydrogenSodium: "Sodium Hydride",
            HydrogenFluorine: "Hydrogen Fluoride (Hydrofluoric Acid)",
            OxygenNitrogen: "Nitrogen Oxide",
            OxygenCarbon: "Carbon Dioxide",
            OxygenChlorine: "Chlorine Oxide",
            OxygenSodium: "Sodium Oxide",
            OxygenArgon: "Argon Oxide",
            OxygenNitricAcid: "Nitric Acid",
            OxygenNeon: "Neon Oxide",
            OxygenFluorine: "Fluorine Oxide",
            OxygenSilicon: "Silicon Oxide",
            OxygenTitanium: "Titanium Oxide",
            OxygenVanadium: "Vanadium Oxide",
            OxygenChromium: "Chromium Oxide",
            OxygenManganese: "Manganese Oxide",
            OxygenCobalt: "Cobalt Oxide",
            OxygenNickel: "Nickel Oxide",
            OxygenCopper: "Copper Oxide",
            OxygenZinc: "Zinc Oxide",
            OxygenHelium: "Helium Oxide",
            NitrogenCarbon: "Cyanogen",
            NitrogenChlorine: "Nitrogen Trichloride",
            NitrogenSodium: "Sodium Azide",
            NitrogenFluorine: "Nitrogen Trifluoride",
            CarbonChlorine: "Carbon Tetrachloride",
            CarbonSodium: "Sodium Carbide",
            CarbonArgon: "Carbon Monoxide",
            CarbonNitricAcid: "Carbon Dioxide",
            CarbonFluorine: "Carbon Tetrafluoride",
            CarbonSilicon: "Silicon Carbide",
            CarbonTitanium: "Titanium Carbide",
            CarbonVanadium: "Vanadium Carbide",
            CarbonChromium: "Chromium Carbide",
            CarbonManganese: "Manganese Carbide",
            CarbonCobalt: "Cobalt Carbide",
            CarbonNickel: "Nickel Carbide",
            ChlorineSodium: "Sodium Chloride",
            ChlorineNitricAcid: "Chlorine Nitrate",
            ChlorineFluorine: "Chlorine Fluoride",
            ChlorineSilicon: "Silicon Chloride",
            ChlorineTitanium: "Titanium Chloride",
            ChlorineVanadium: "Vanadium Chloride",
            ChlorineChromium: "Chromium Chloride",
            ChlorineManganese: "Manganese Chloride",
            ChlorineCobalt: "Cobalt Chloride",
            ChlorineNickel: "Nickel Chloride",
            ChlorineCopper: "Copper Chloride",
            ChlorineZinc: "Zinc Chloride",
            SodiumNitricAcid: "Sodium Nitrate",
            SodiumFluorine: "Sodium Fluoride",
            SodiumZinc: "Sodium Zincate",
            NitricAcidFluorine: "Nitric Acid Fluoride",
            NitricAcidTitanium: "Nitric Acid Titanium(IV) Oxide",
            FluorineSilicon: "Silicon Tetrafluoride",
            FluorineTitanium: "Titanium Tetrafluoride",
            FluorineVanadium: "Vanadium Pentafluoride",
            FluorineChromium: "Chromium Trifluoride",
            FluorineManganese: "Manganese Tetrafluoride",
            FluorineCobalt: "Cobalt Trifluoride",
            FluorineNickel: "Nickel(II) Fluoride",
            FluorineCopper: "Copper(II) Fluoride",
            FluorineZinc: "Zinc Fluoride",
            SiliconTitanium: "Titanium Silicide",
            SiliconVanadium: "Vanadium Silicide",
            SiliconChromium: "Chromium Silicide",
            SiliconManganese: "Manganese Silicide",
            SiliconCobalt: "Cobalt Silicide",
            SiliconNickel: "Nickel Silicide",
            SiliconCopper: "Copper Silicide",
            SiliconZinc: "Zinc Silicide",
            TitaniumVanadium: "Titanium-Vanadium Alloy",
            TitaniumChromium: "Titanium-Chromium Alloy",
            TitaniumManganese: "Titanium-Manganese Alloy",
            TitaniumCobalt: "Titanium-Cobalt Alloy",
            TitaniumNickel: "Titanium-Nickel Alloy",
            TitaniumCopper: "Titanium-Copper Alloy",
            TitaniumZinc: "Titanium-Zinc Alloy",
            TitaniumHelium: "Titanium-Helium Composite",
            VanadiumChromium: "Vanadium Chromium Alloy",
            VanadiumManganese: "Vanadium Manganese Alloy",
            VanadiumCobalt: "Vanadium Cobalt Alloy",
            VanadiumNickel: "Vanadium Nickel Alloy",
            VanadiumCopper: "Vanadium Copper Alloy",
            VanadiumZinc: "Vanadium Zinc Alloy",
            ChromiumManganese: "Chromium Manganate",
            ChromiumCobalt: "Chromium Cobaltate",
            ChromiumNickel: "Chromium Nickelate",
            ChromiumCopper: "Chromium Cuprate",
            ChromiumZinc: "Chromium Zincate",
            ManganeseCobalt: "Manganese-Cobalt Alloy",
            ManganeseNickel: "Manganese-Nickel Alloy",
            ManganeseCopper: "Manganese-Copper Alloy",
            ManganeseZinc: "Manganese-Zinc Alloy",
            CobaltNickel: "Cobalt-Nickel Alloy",
            CobaltCopper: "Cobalt-Copper Alloy",
            CobaltZinc: "Cobalt-Zinc Alloy",
            NickelCopper: "Cupronickel Alloy",
            NickelZinc: "Nickel-Zinc Alloy",
            CopperZinc: "Brass",
          }[h];
        a(v || "Invalid combination. These elements cannot be mixed."), u(!1);
      };
    return s.jsxs("div", {
      className: "p-4",
      children: [
        s.jsx("h1", {
          className: `text-2xl font-bold mb-4 text-center  ${t}`,
          children: "Periodic Table Mixing",
        }),
        s.jsxs("div", {
          className: "flex justify-center",
          children: [
            s.jsxs("div", {
              className: "bg-gray-200 p-4 rounded-lg mr-4 w-1/3",
              children: [
                s.jsx("h2", {
                  className: "text-xl font-bold mb-2 text-center",
                  children: "Element 1",
                }),
                s.jsx("select", {
                  className:
                    "w-full bg-white text-gray-800 py-2 px-4 rounded-lg shadow-md hover:bg-gray-100",
                  value: i.name,
                  onChange: (h) => f(h, n),
                  children: Ft.map((h) =>
                    s.jsx("option", { value: h.name, children: h.name }, h.name)
                  ),
                }),
                s.jsx("p", {
                  className: "text-gray-600 mt-2",
                  children: i.description,
                }),
              ],
            }),
            s.jsxs("div", {
              className: "bg-gray-200 p-4 rounded-lg w-1/3",
              children: [
                s.jsx("h2", {
                  className: "text-xl font-bold mb-2 text-center",
                  children: "Element 2",
                }),
                s.jsx("select", {
                  className:
                    "w-full bg-white text-gray-800 py-2 px-4 rounded-lg shadow-md hover:bg-gray-100",
                  value: o.name,
                  onChange: (h) => f(h, r),
                  children: Ft.map((h) =>
                    s.jsx("option", { value: h.name, children: h.name }, h.name)
                  ),
                }),
                s.jsx("p", {
                  className: "text-gray-600 mt-2",
                  children: o.description,
                }),
              ],
            }),
          ],
        }),
        s.jsxs("div", {
          className: "text-center mt-4",
          children: [
            s.jsx("button", {
              className:
                "bg-blue-500 text-white py-2 px-4 rounded-lg shadow-md hover:bg-blue-600",
              onClick: g,
              disabled: c,
              children: "Mix",
            }),
            s.jsx("button", {
              className:
                "bg-gray-500 text-white py-2 px-4 rounded-lg shadow-md hover:bg-gray-600 ml-4",
              onClick: () => {
                n(Ft[0]), r(Ft[0]), a("");
              },
              children: "Reset",
            }),
            c && s.jsx("p", { children: "Calculating..." }),
          ],
        }),
        l &&
          s.jsxs("div", {
            className: "resu mt-4",
            children: [
              s.jsxs("p", {
                className: "text-green-500 text-xl",
                children: ["You have created ", l, "!"],
              }),
              s.jsxs("p", {
                className: `text-base leading-relaxed ${t}`,
                children: [
                  l === "Water" &&
                    s.jsxs("div", {
                      className: "flex flex-col justify-center items-center",
                      children: [
                        s.jsx("img", {
                          className: "w-96 rounded-xl my-5",
                          src: "https://www.eatingwell.com/thmb/qtP5zJfjZjS_6lkAGjOoH2XDNEc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/mineral-water-8cc11cec12c7471bac9378fa9757c83f.jpg",
                        }),
                        s.jsx("p", { children: "H2O" }),
                        "Water is a transparent, tasteless, odorless, and nearly colorless chemical compound. It is the chemical substance with the chemical formula H2O.",
                      ],
                    }),
                  l === "Water and Oxygen" &&
                    s.jsxs("div", {
                      className: "flex flex-col justify-center items-center",
                      children: [
                        s.jsx("img", {
                          className: "w-96 rounded-xl my-5",
                          src: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Potassium-iodide-2D.png/1200px-Potassium-iodide-2D.png",
                        }),
                        s.jsx("p", { children: "H2O2KI" }),
                        "Water and Oxygen are essential for various biological and chemical processes. They form a crucial part of many reactions and compounds.",
                      ],
                    }),
                  l === "Sodium Chloride" &&
                    s.jsxs("div", {
                      className: "flex flex-col justify-center items-center",
                      children: [
                        s.jsx("img", {
                          className: "w-96 rounded-xl my-5",
                          src: "https://5.imimg.com/data5/QF/ZY/JV/SELLER-23466807/sodium-chloride.jpg",
                        }),
                        s.jsx("p", { children: "NaCl" }),
                        "Sodium Chloride is commonly known as table salt. It is essential for human health and is used in various industrial processes.",
                      ],
                    }),
                  l === "Zinc Silicide" &&
                    s.jsxs("div", {
                      className: "flex flex-col justify-center items-center",
                      children: [
                        s.jsx("img", {
                          className: "w-96 rounded-xl my-5",
                          src: "https://iqrorwxhoilrmr5q.ldycdn.com/cloud/lpBqiKrpRmmSkmmjknqp/danhuafan.jpg",
                        }),
                        s.jsx("p", { children: "ZnSi" }),
                        "Zinc Silicide is a compound formed by the reaction of silicon and zinc, known for its semiconducting properties and potential applications in optoelectronics.",
                      ],
                    }),
                  l === "Titanium-Vanadium Alloy" &&
                    s.jsxs("div", {
                      className: "flex flex-col justify-center items-center",
                      children: [
                        s.jsx("img", {
                          className: "w-96 rounded-xl my-5",
                          src: "https://7cad390533514c32acc8-75d23ce06fcfaf780446d85d50c33f7b.ssl.cf6.rackcdn.com/sc/1671687016-normal-titanium-chromium-vanadium-alloy-lump.png",
                        }),
                        s.jsx("p", { children: "Ti-6Al-4V" }),
                        "Titanium-Vanadium Alloy is typically metallic, can vary depending on the specific composition, and is used in various industries.",
                      ],
                    }),
                  l === "Titanium-Chromium Alloy" &&
                    s.jsxs("div", {
                      className: "flex flex-col justify-center items-center",
                      children: [
                        s.jsx("img", {
                          className: "w-96 rounded-xl my-5",
                          src: "https://www.edge-techind.com/uploadfile/products/Sputtering%20Target/Alloy%20Target.jpg",
                        }),
                        s.jsx("p", { children: "Ti-3Cr" }),
                        "Titanium-Chromium Alloy is metallic, typically with varying hues depending on composition, and is used in aerospace and other high-performance applications.",
                      ],
                    }),
                  l === "Titanium-Manganese Alloy" &&
                    s.jsxs("div", {
                      className: "flex flex-col justify-center items-center",
                      children: [
                        s.jsx("img", {
                          className: "w-96 rounded-xl my-5",
                          src: "https://5.imimg.com/data5/TI/II/UQ/SELLER-8639599/titanium-manganese-alloy-powder.jpg",
                        }),
                        s.jsx("p", { children: "Ti-13V-11Cr-3Al" }),
                        "Titanium-Manganese Alloy is metallic, with properties varying depending on the specific alloy composition, and is used in aerospace applications.",
                      ],
                    }),
                  l === "Titanium-Cobalt Alloy" &&
                    s.jsxs("div", {
                      className: "flex flex-col justify-center items-center",
                      children: [
                        s.jsx("img", {
                          className: "w-96 rounded-xl my-5",
                          src: "https://iqrorwxhoilrmr5q.ldycdn.com/cloud/qkBpiKrpRmiSrrjkiolli/lvfan.jpg",
                        }),
                        s.jsx("p", { children: "Ti-35Nb-7Zr-5Ta-0.75Mo" }),
                        "Titanium-Cobalt Alloy is typically metallic, with properties influenced by the specific alloy composition, and is utilized in biomedical implants and other specialized applications.",
                      ],
                    }),
                  l === "Titanium-Nickel Alloy" &&
                    s.jsxs("div", {
                      className: "flex flex-col justify-center items-center",
                      children: [
                        s.jsx("img", {
                          className: "w-96 rounded-xl my-5",
                          src: "https://upload.wikimedia.org/wikipedia/commons/2/2d/Nitinol_draht.jpg",
                        }),
                        s.jsx("p", { children: "Ti-Ni" }),
                        "Titanium-Nickel Alloy is metallic and employed in aerospace, marine, and chemical processing industries.",
                      ],
                    }),
                  l === "Titanium-Copper Alloy" &&
                    s.jsxs("div", {
                      className: "flex flex-col justify-center items-center",
                      children: [
                        s.jsx("img", {
                          className: "w-96 rounded-xl my-5",
                          src: "https://d12oja0ew7x0i8.cloudfront.net/images/Article_Thumbs/ThumbForArticle_11898.jpg",
                        }),
                        s.jsx("p", { children: "Ti-Cu-Mo" }),
                        " Titanium-Copper Alloy is metallic, with properties determined by the composition, and used in various industries including aerospace, electronics, and marine applications.",
                      ],
                    }),
                  l === "Titanium-Zinc Alloy" &&
                    s.jsxs("div", {
                      className: "flex flex-col justify-center items-center",
                      children: [
                        s.jsx("img", {
                          className: "w-96 rounded-xl my-5",
                          src: "https://www.belmontmetals.com/wp-content/uploads/2020/03/metals2.jpg",
                        }),
                        s.jsx("p", { children: "Ti-Zn" }),
                        "Titanium-Zinc Alloy is metallic and utilized in industries such as automotive, aerospace, and electronics.",
                      ],
                    }),
                  l === "Titanium-Helium Composite" &&
                    s.jsxs("div", {
                      className: "flex flex-col justify-center items-center",
                      children: [
                        s.jsx("img", {
                          className: "w-96 rounded-xl my-5",
                          src: "https://ilrorwxhqjprlo5p-static.micyjz.com/cloud/loBprKjmlrSRjjklilkjin/DSC_1212.jpg",
                        }),
                        "Titanium-Helium Composite is a composite material rather than a true alloy, used in aerospace applications for lightweight structural components.",
                      ],
                    }),
                  l === "Vanadium Chromium Alloy" &&
                    s.jsxs("div", {
                      className: "flex flex-col justify-center items-center",
                      children: [
                        s.jsx("img", {
                          className: "w-96 rounded-xl my-5",
                          src: "https://www.stmarysspring.com/wp-content/uploads/2015/08/Chromium-Vanadium-Springs3.jpg",
                        }),
                        s.jsx("p", { children: "Ferrovanadium" }),
                        "Vanadium Chromium Alloy varies in appearance but is often metallic and silver-gray, commonly used as an additive to steel to increase its strength and wear resistance.",
                      ],
                    }),
                  l === "Vanadium Manganese Alloy" &&
                    s.jsxs("div", {
                      className: "flex flex-col justify-center items-center",
                      children: [
                        s.jsx("img", {
                          className: "w-96 rounded-xl my-5",
                          src: "https://www.samaterials.com/img/p/2/8/9/2/2892.jpg",
                        }),
                        s.jsx("p", { children: "VMn" }),
                        "Vanadium Manganese Alloy is typically metallic and silvery-gray, used in high-strength applications such as pipelines and structural components.",
                      ],
                    }),
                  l === "Vanadium Cobalt Alloy" &&
                    s.jsxs("div", {
                      className: "flex flex-col justify-center items-center",
                      children: [
                        s.jsx("img", {
                          className: "w-96 rounded-xl my-5",
                          src: "https://s.alicdn.com/@sc04/kf/Hacd9246dbbbd4c2893c3217e54ade66av.jpg_300x300.jpg",
                        }),
                        s.jsx("p", { children: "VCo" }),
                        "Vanadium Cobalt Alloy is metallic, often with a silvery-gray color, and used in high-temperature applications such as jet engines and gas turbines.",
                      ],
                    }),
                  l === "Vanadium Nickel Alloy" &&
                    s.jsxs("div", {
                      className: "flex flex-col justify-center items-center",
                      children: [
                        s.jsx("img", {
                          className: "w-96 rounded-xl my-5",
                          src: "hhttps://s.alicdn.com/@sc04/kf/Hacd9246dbbbd4c2893c3217e54ade66av.jpg_300x300.jpg",
                        }),
                        s.jsx("p", { children: "VNi" }),
                        "Vanadium Nickel Alloy is typically metallic, with a silvery-white color, and researched for potential energy storage applications due to its high energy density.",
                      ],
                    }),
                  l === "Vanadium Copper Alloy" &&
                    s.jsxs("div", {
                      className: "flex flex-col justify-center items-center",
                      children: [
                        s.jsx("img", {
                          className: "w-96 rounded-xl my-5",
                          src: "https://heegermaterials.com/7631/copper-vanadium-master-alloy.jpg",
                        }),
                        s.jsx("p", { children: "VCu" }),
                        "Vanadium Copper Alloy is metallic, often with a reddish-brown hue, used in applications requiring high strength and corrosion resistance, such as marine components.",
                      ],
                    }),
                  l === "Vanadium Zinc Alloy" &&
                    s.jsxs("div", {
                      className: "flex flex-col justify-center items-center",
                      children: [
                        s.jsx("img", {
                          className: "w-96 rounded-xl my-5",
                          src: "https://5.imimg.com/data5/SELLER/Default/2021/7/CJ/PY/IL/102993455/6631-500x500.png",
                        }),
                        s.jsx("p", { children: "VZn" }),
                        "Vanadium Zinc Alloy is metallic, typically with a bluish-white color, and explored for grid-scale energy storage due to its high energy density and long cycle life.",
                      ],
                    }),
                  l === "Chromium Manganate" &&
                    s.jsxs("div", {
                      className: "flex flex-col justify-center items-center",
                      children: [
                        s.jsx("img", {
                          className: "w-96 rounded-xl my-5",
                          src: "https://s3-us-west-2.amazonaws.com/courses-images/wp-content/uploads/sites/752/2016/09/26195645/chrom-1.jpeg",
                        }),
                        s.jsx("p", { children: "CrMnO₄" }),
                        "Chromium Manganate typically appears as a green crystalline solid and is used in various applications.",
                      ],
                    }),
                  l === "Chromium Cobaltate" &&
                    s.jsxs("div", {
                      className: "flex flex-col justify-center items-center",
                      children: [
                        s.jsx("img", {
                          className: "w-96 rounded-xl my-5",
                          src: "https://www.upmet.com/sites/default/files/styles/max_325x325/public/product-images/Round%20Bar%20resized%20for%20web_1.jpg?itok=7eJT9AAb",
                        }),
                        s.jsx("p", { children: "CrCoO₃" }),
                        "Chromium Cobaltate can appear as various colors depending on the oxidation state and is utilized in diverse applications.",
                      ],
                    }),
                  l === "Chromium Nickelate" &&
                    s.jsxs("div", {
                      className: "flex flex-col justify-center items-center",
                      children: [
                        s.jsx("img", {
                          className: "w-96 rounded-xl my-5",
                          src: "https://www.aemdeposition.com/fup/200825/1-200R51H340Y6.jpg",
                        }),
                        s.jsx("p", { children: "CrNiO₃" }),
                        "Chromium Nickelate typically appears as a dark gray solid and has various applications.",
                      ],
                    }),
                  l === "Chromium Cuprate" &&
                    s.jsxs("div", {
                      className: "flex flex-col justify-center items-center",
                      children: [
                        s.jsx("img", {
                          className: "w-96 rounded-xl my-5",
                          src: "https://upload.wikimedia.org/wikipedia/commons/0/08/Chromium_crystals_and_1cm3_cube.jpg",
                        }),
                        s.jsx("p", { children: "CrCu₂O₄" }),
                        "Chromium Cuprate usually appears as a blue-green solid and finds applications in different industries.",
                      ],
                    }),
                  l === "Chromium Zincate" &&
                    s.jsxs("div", {
                      className: "flex flex-col justify-center items-center",
                      children: [
                        s.jsx("img", {
                          className: "w-96 rounded-xl my-5",
                          src: "https://www.gattoplaters.com/Yellow-Zinc-I_11zon.jpg",
                        }),
                        s.jsx("p", { children: "CrZnO₂" }),
                        "Chromium Zincate varies in appearance depending on the specific compound formed and has diverse applications.",
                      ],
                    }),
                  l === "Manganese-Cobalt Alloy" &&
                    s.jsxs("div", {
                      className: "flex flex-col justify-center items-center",
                      children: [
                        s.jsx("img", {
                          className: "w-96 rounded-xl my-5",
                          src: "https://metals.co/wp-content/uploads/2019/10/DSC01149-scaled.jpg",
                        }),
                        s.jsx("p", { children: "(Mn,Co)x" }),
                        "Manganese-Cobalt Alloy appears as a metallic gray solid and is used in the production of high-strength magnets and various industrial applications.",
                      ],
                    }),
                  l === "Manganese-Nickel Alloy" &&
                    s.jsxs("div", {
                      className: "flex flex-col justify-center items-center",
                      children: [
                        s.jsx("img", {
                          className: "w-96 rounded-xl my-5",
                          src: "https://3.imimg.com/data3/CA/VI/MY-5714066/nickel-manganese-alloys-500x500.jpg",
                        }),
                        s.jsx("p", { children: "(Mn,Ni)x" }),
                        "Manganese-Nickel Alloy appears as metallic and gray in color, known for its excellent corrosion resistance and high strength.",
                      ],
                    }),
                  l === "Manganese-Copper Alloy" &&
                    s.jsxs("div", {
                      className: "flex flex-col justify-center items-center",
                      children: [
                        s.jsx("img", {
                          className: "w-96 rounded-xl my-5",
                          src: "https://lh3.googleusercontent.com/proxy/0jKShlQzbZIylSyuNbUCkaDDrZDxrRSZQ-phqNpzxAn-iB4ErxokIz4QI8oTdxKlHKu2SFA_aQp2L8iMCjPTnBr68y0zy7zOyPn0x64Fg4DXsXutE6p8FH6qz6Q",
                        }),
                        s.jsx("p", { children: "(Mn,Cu)x" }),
                        "Manganese-Copper Alloy appears as metallic and reddish-brown in color, known for its high strength, corrosion resistance, and electrical conductivity.",
                      ],
                    }),
                  l === "Manganese-Zinc Alloy" &&
                    s.jsxs("div", {
                      className: "flex flex-col justify-center items-center",
                      children: [
                        s.jsx("img", {
                          className: "w-96 rounded-xl my-5",
                          src: "https://www.hbnewmaterial.com/photo/pc32625308-zinc_manganese_znmn10_master_alloy_add_into_aluminum_zinc_furnace_to_improve_the_alloy_properties.jpg",
                        }),
                        s.jsx("p", { children: "(Mn,Zn)x" }),
                        "Manganese-Zinc Alloy appears as metallic and grayish-white in color, used in various applications such as die casting, galvanizing, and battery manufacturing.",
                      ],
                    }),
                  l === "Cobalt-Nickel Alloy" &&
                    s.jsxs("div", {
                      className: "flex flex-col justify-center items-center",
                      children: [
                        s.jsx("img", {
                          className: "w-96 rounded-xl my-5",
                          src: "https://www.americanelements.com/ingot.jpg",
                        }),
                        s.jsx("p", { children: "Co-Ni" }),
                        "Cobalt-Nickel Alloy ranges from silvery-white to gray in appearance and is known for its low coefficient of thermal expansion.",
                      ],
                    }),
                  l === "Cobalt-Copper Alloy" &&
                    s.jsxs("div", {
                      className: "flex flex-col justify-center items-center",
                      children: [
                        s.jsx("img", {
                          className: "w-96 rounded-xl my-5",
                          src: "https://d12oja0ew7x0i8.cloudfront.net/images/Article_Thumbs/ThumbForArticle_11902.jpg",
                        }),
                        s.jsx("p", { children: "Co-Cu" }),
                        "Cobalt-Copper Alloy appears as a reddish metal and is used in various applications such as coins and marine engineering.",
                      ],
                    }),
                  l === "Cobalt-Zinc Alloy" &&
                    s.jsxs("div", {
                      className: "flex flex-col justify-center items-center",
                      children: [
                        s.jsx("img", {
                          className: "w-96 rounded-xl my-5",
                          src: "https://www.delsplating.com/assets/images/content/zinc-cobalt-clear.jpg",
                        }),
                        s.jsx("p", { children: "Co-Zn" }),
                        "Cobalt-Zinc Alloy has a bluish-white color and is used in applications such as jet engines and gas turbines.",
                      ],
                    }),
                  l === "Cupronickel Alloy" &&
                    s.jsxs("div", {
                      className: "flex flex-col justify-center items-center",
                      children: [
                        s.jsx("img", {
                          className: "w-96 rounded-xl my-5",
                          src: "https://d12oja0ew7x0i8.cloudfront.net/images/Article_Images/ImageForArticle_6298_16626312672082582.jpg",
                        }),
                        s.jsx("p", { children: "Ni-Cu" }),
                        "Cupronickel Alloy appears as a silver-white metal and is used in marine engineering.",
                      ],
                    }),
                  l === "Nickel-Zinc Alloy" &&
                    s.jsxs("div", {
                      className: "flex flex-col justify-center items-center",
                      children: [
                        s.jsx("img", {
                          className: "w-96 rounded-xl my-5",
                          src: "https://s.alicdn.com/@sc04/kf/HTB1vplUau6sK1RjSsrbq6xbDXXap.jpg_300x300.jpg",
                        }),
                        s.jsx("p", { children: "Ni-Zn" }),
                        "Nickel-Zinc Alloy can have various shades ranging from silver to bluish-white and is used in various applications.",
                      ],
                    }),
                  l === "Brass" &&
                    s.jsxs("div", {
                      className: "flex flex-col justify-center items-center",
                      children: [
                        s.jsx("img", {
                          className: "w-96 rounded-xl my-5",
                          src: "https://www.3erp.com/wp-content/uploads/2023/04/3.jpg",
                        }),
                        s.jsx("p", { children: "Cu-Zn" }),
                        "Brass has a yellow-gold color and is commonly used in musical instruments and decorative items.",
                      ],
                    }),
                  l === "Nitrous Oxide" &&
                    s.jsxs("div", {
                      className: "flex flex-col justify-center items-center",
                      children: [
                        s.jsx("img", {
                          className: "w-96 rounded-xl my-5",
                          src: "https://static.summitracing.com/global/images/prod/xlarge/nos-14745nos_xl.jpg",
                        }),
                        "Nitrous Oxide is a colorless gas with a slightly sweet odor and taste. It is used in medical procedures as an anesthetic and analgesic and in food as a propellant.",
                      ],
                    }),
                  l === "Carbonic Acid" &&
                    s.jsxs("div", {
                      className: "flex flex-col justify-center items-center",
                      children: [
                        s.jsx("img", {
                          className: "w-96 rounded-xl my-5",
                          src: "https://www.frm2.tum.de/fileadmin/w00bnv/www/_my_direct_uploads/water-glass-gee42185f7_1920.jpg",
                        }),
                        "Carbonic Acid is a weak acid that forms when Carbon Dioxide dissolves in water. It is used in food and beverage industries for carbonation.",
                      ],
                    }),
                  l === "Lithium Beryllide" &&
                    s.jsxs("div", {
                      className: "flex flex-col justify-center items-center",
                      children: [
                        s.jsx("img", {
                          className: "w-96 rounded-xl my-5",
                          src: "https://qsstudy.com/wp-content/uploads/2023/04/Lithium-beryllide.webp",
                        }),
                        "Lithium Beryllide is a gray, crystalline solid with a high melting point. It is an intermetallic compound of Lithium and Beryllium.",
                      ],
                    }),
                  l === "Lithium Chromate" &&
                    s.jsxs("div", {
                      className: "flex flex-col justify-center items-center",
                      children: [
                        s.jsx("img", {
                          className: "w-96 rounded-xl my-5",
                          src: "https://static.summitracing.com/global/images/prod/xlarge/nos-14745nos_xl.jpg",
                        }),
                        s.jsx("p", { children: "Li2CrO4" }),
                        "Lithium chromate is an inorganic compound used as a corrosion inhibitor, in the production of pigments, and in certain types of batteries",
                      ],
                    }),
                  l === "Lithium Oxide" &&
                    s.jsxs("div", {
                      className: "flex flex-col justify-center items-center",
                      children: [
                        s.jsx("img", {
                          className: "w-96 rounded-xl my-5",
                          src: "https://www.samaterials.com/img/p/4/7/0/6/4706.jpg",
                        }),
                        s.jsx("p", { children: "Li2O" }),
                        "Lithium oxide is a white crystalline solid used in ceramics, glass manufacturing, lithium-ion batteries, and as a neutron absorber in nuclear reactors.",
                      ],
                    }),
                  l === "Hydrogen Beryllide" &&
                    s.jsxs("div", {
                      className: "flex flex-col justify-center items-center",
                      children: [
                        s.jsx("img", {
                          className: "w-96 rounded-xl my-5",
                          src: "https://www.chemtube3d.com/images/gallery/inorganicsjpgs/BeH2.jpg",
                        }),
                        s.jsx("p", { children: "Li2Be" }),
                        "Beryllium hydride is a white crystalline solid that is used as a source of hydrogen and as a precursor to other beryllium compounds.",
                      ],
                    }),
                  l === "Lithium Hydride" &&
                    s.jsxs("div", {
                      className: "flex flex-col justify-center items-center",
                      children: [
                        s.jsx("img", {
                          className: "w-96 rounded-xl my-5",
                          src: "https://www.sciencemadness.org/smwiki/images/thumb/3/3a/Lithium_hydride_crystal_by_ChemicalForce.jpg/300px-Lithium_hydride_crystal_by_ChemicalForce.jpg",
                        }),
                        s.jsx("p", { children: "LiH" }),
                        s.jsx("p", {
                          children:
                            "Lithium hydride is a white, crystalline, alkali metal hydride used in nuclear reactors as a moderator and in hydrogen storage applications.",
                        }),
                      ],
                    }),
                  l === "Lithium Nitride" &&
                    s.jsxs("div", {
                      className: "flex flex-col justify-center items-center",
                      children: [
                        s.jsx("img", {
                          className: "w-96 rounded-xl my-5",
                          src: "https://upload.wikimedia.org/wikipedia/commons/a/a8/Lithium-nitride-xtal-CM-3D-polyhedra.png",
                        }),
                        s.jsx("p", { children: "Li3N" }),
                        s.jsx("p", {
                          children:
                            "Lithium nitride is an inorganic compound used as a precursor for the synthesis of other nitrogen-containing lithium compounds and as a component in lithium-ion battery electrolytes.",
                        }),
                      ],
                    }),
                  l === "Lithium Carbide" &&
                    s.jsxs("div", {
                      className: "flex flex-col justify-center items-center",
                      children: [
                        s.jsx("img", {
                          className: "w-96 rounded-xl my-5",
                          src: "https://www.nanochemazone.com/wp-content/uploads/2021/06/Lithium-Carbide-Powder.jpg",
                        }),
                        s.jsx("p", { children: "Li2C2" }),
                        s.jsx("p", {
                          children:
                            "Lithium carbide is a binary compound formed between lithium and carbon. It has been investigated for its potential use in hydrogen storage and as a precursor for the synthesis of other lithium compounds.",
                        }),
                      ],
                    }),
                  l === "Lithium Chloride" &&
                    s.jsxs("div", {
                      className: "flex flex-col justify-center items-center",
                      children: [
                        s.jsx("img", {
                          className: "w-96 rounded-xl my-5",
                          src: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Lithium_chloride.jpg/220px-Lithium_chloride.jpg",
                        }),
                        s.jsx("p", { children: "LiCl" }),
                        s.jsx("p", {
                          children:
                            "Lithium chloride is a salt used in various applications, including as a desiccant, in the synthesis of organic compounds, and as a component in lithium-ion battery electrolytes.",
                        }),
                      ],
                    }),
                  l === "Lithium Sodium Alloy" &&
                    s.jsxs("div", {
                      className: "flex flex-col justify-center items-center",
                      children: [
                        s.jsx("img", {
                          className: "w-96 rounded-xl my-5",
                          src: "https://media.springernature.com/m685/springer-static/image/art%3A10.1038%2Fs41557-018-0166-9/MediaObjects/41557_2018_166_Figa_HTML.png",
                        }),
                        s.jsx("p", { children: "Li-Na" }),
                        s.jsx("p", {
                          children:
                            "Lithium-sodium alloys are used in some advanced battery technologies and as a heat transfer fluid due to their low melting point and high thermal conductivity.",
                        }),
                      ],
                    }),
                  l === "Lithium Argonide" &&
                    s.jsxs("div", {
                      className: "flex flex-col justify-center items-center",
                      children: [
                        s.jsx("img", {
                          className: "w-96 rounded-xl my-5",
                          src: "https://images.twinkl.co.uk/tw1n/image/private/t_630/u/ux/question-mark_ver_1.jpg",
                        }),
                        s.jsx("p", { children: "LiAr" }),
                        s.jsx("p", {
                          children:
                            "Lithium argonide is a hypothetical compound formed between lithium and argon. It has not been observed experimentally but is predicted to exist under certain conditions.",
                        }),
                      ],
                    }),
                  l === "Lithium Nitrate" &&
                    s.jsxs("div", {
                      className: "flex flex-col justify-center items-center",
                      children: [
                        s.jsx("img", {
                          className: "w-96 rounded-xl my-5",
                          src: "https://www.chemicalbook.com/NewsImg/2020-01-04/20201412341720317.jpg",
                        }),
                        s.jsx("p", { children: "LiNO3" }),
                        s.jsx("p", {
                          children:
                            "Lithium nitrate is an inorganic salt used in various industrial applications, including as a component in ceramics, glass, and as a catalyst in certain chemical reactions.",
                        }),
                      ],
                    }),
                  l === "Lithium Neonide" &&
                    s.jsxs("div", {
                      className: "flex flex-col justify-center items-center",
                      children: [
                        s.jsx("img", {
                          className: "w-96 rounded-xl my-5",
                          src: "https://images.twinkl.co.uk/tw1n/image/private/t_630/u/ux/question-mark_ver_1.jpg",
                        }),
                        s.jsx("p", { children: "LiNe" }),
                        s.jsx("p", {
                          children:
                            "Lithium neonide is a hypothetical compound formed between lithium and neon. It has not been observed experimentally but is predicted to exist under certain conditions.",
                        }),
                      ],
                    }),
                  l === "Lithium Fluoride" &&
                    s.jsxs("div", {
                      className: "flex flex-col justify-center items-center",
                      children: [
                        s.jsx("img", {
                          className: "w-96 rounded-xl my-5",
                          src: "https://heegermaterials.com/6632/lithium-fluoride-evaporation-material.jpg",
                        }),
                        s.jsx("p", { children: "LiF" }),
                        s.jsx("p", {
                          children:
                            "Lithium fluoride is an inorganic compound used in various applications, including as a component in molten salt nuclear reactors, in the production of ceramics, and in dental applications.",
                        }),
                      ],
                    }),
                  l === "Lithium Silicide" &&
                    s.jsxs("div", {
                      className: "flex flex-col justify-center items-center",
                      children: [
                        s.jsx("img", {
                          className: "w-96 rounded-xl my-5",
                          src: "https://pubchem.ncbi.nlm.nih.gov/image/imgsrv.fcgi?cid=72720455&t=l",
                        }),
                        s.jsx("p", { children: "Li2Si" }),
                        s.jsx("p", {
                          children:
                            "Lithium silicide is a binary compound formed between lithium and silicon. It has been investigated for its potential use in hydrogen storage and as a precursor for the synthesis of other lithium compounds.",
                        }),
                      ],
                    }),
                  l === "Lithium Titanium Alloy" &&
                    s.jsxs("div", {
                      className: "flex flex-col justify-center items-center",
                      children: [
                        s.jsx("img", {
                          className: "w-96 rounded-xl my-5",
                          src: "https://www.smithmetal.com/images/landing/aluminium-lithium-alloys.jpg",
                        }),
                        s.jsx("p", { children: "Li-Ti" }),
                        s.jsx("p", {
                          children:
                            "Lithium-titanium alloys are used in aerospace applications and as a component in certain advanced battery technologies due to their high strength-to-weight ratio and corrosion resistance.",
                        }),
                      ],
                    }),
                  l === "Lithium Vanadate" &&
                    s.jsxs("div", {
                      className: "flex flex-col justify-center items-center",
                      children: [
                        s.jsx("img", {
                          className: "w-96 rounded-xl my-5",
                          src: "https://iqrorwxhoilrmr5q.ldycdn.com/cloud/qmBpiKrpRmiSmpkqknlqk/Lithium-Vanadate-LiV3O6-Powder-460-460.jpg",
                        }),
                        s.jsx("p", { children: "LiVO3" }),
                        s.jsx("p", {
                          children:
                            "Lithium vanadate is an inorganic compound used as a catalyst in certain chemical reactions and in the production of ceramics and glass.",
                        }),
                      ],
                    }),
                  l === "Lithium Chromate" &&
                    s.jsxs("div", {
                      className: "flex flex-col justify-center items-center",
                      children: [
                        s.jsx("img", {
                          className: "w-96 rounded-xl my-5",
                          src: "https://static.summitracing.com/global/images/prod/xlarge/nos-14745nos_xl.jpg",
                        }),
                        s.jsx("p", { children: "Li2CrO4" }),
                        s.jsx("p", {
                          children:
                            "Lithium chromate is an inorganic compound used as a corrosion inhibitor, in the production of pigments, and in certain types of batteries.",
                        }),
                      ],
                    }),
                  l === "Lithium Manganate" &&
                    s.jsxs("div", {
                      className: "flex flex-col justify-center items-center",
                      children: [
                        s.jsx("img", {
                          className: "w-96 rounded-xl my-5",
                          src: "https://electrodesandmore.com/cdn/shop/products/black-powder_68152c94-5dfd-4e8a-915b-b941686e112a_large@2x.jpg?v=1477774719",
                        }),
                        s.jsx("p", { children: "LiMnO4" }),
                        s.jsx("p", {
                          children:
                            "Lithium manganate is a chemical compound used as a cathode material in lithium-ion batteries due to its high specific capacity and stability.",
                        }),
                      ],
                    }),
                  l === "Lithium Cobalt Oxide" &&
                    s.jsxs("div", {
                      className: "flex flex-col justify-center items-center",
                      children: [
                        s.jsx("img", {
                          className: "w-96 rounded-xl my-5",
                          src: "https://elcanindustries.com/wp-content/uploads/2022/05/Lithium-Cobalt-Oxide-Elcan-Industries1-1-1.jpg",
                        }),
                        s.jsx("p", { children: "LiCoO2" }),
                        s.jsx("p", {
                          children:
                            "Lithium cobalt oxide is a cathode material used in lithium-ion batteries due to its high energy density and stability.",
                        }),
                      ],
                    }),
                  l === "Lithium Nickel Oxide" &&
                    s.jsxs("div", {
                      className: "flex flex-col justify-center items-center",
                      children: [
                        s.jsx("img", {
                          className: "w-96 rounded-xl my-5",
                          src: "https://iqrorwxhoilrmr5q.ldycdn.com/cloud/lkBqiKrpRmmSompkloqm/B4Cfen.jpg",
                        }),
                        s.jsx("p", { children: "LiNiO2" }),
                        s.jsx("p", {
                          children:
                            "Lithium nickel oxide is a cathode material used in lithium-ion batteries, offering high energy density and stability.",
                        }),
                      ],
                    }),
                  l === "Lithium Copper Alloy" &&
                    s.jsxs("div", {
                      className: "flex flex-col justify-center items-center",
                      children: [
                        s.jsx("img", {
                          className: "w-96 rounded-xl my-5",
                          src: "https://www.belmontmetals.com/wp-content/uploads/2017/09/4981J-Lithium-Copper-Polished-Cubes.jpg",
                        }),
                        s.jsx("p", { children: "Li-Cu" }),
                        s.jsx("p", {
                          children:
                            "Lithium-copper alloys are used in various applications, including as structural materials in aerospace and automotive industries due to their high strength-to-weight ratio and corrosion resistance.",
                        }),
                      ],
                    }),
                  l === "Lithium Zinc Alloy" &&
                    s.jsxs("div", {
                      className: "flex flex-col justify-center items-center",
                      children: [
                        s.jsx("img", {
                          className: "w-96 rounded-xl my-5",
                          src: "https://www.refractorymetal.org/wp-content/uploads/2020/01/aluminum-lithium-alloy-VL30.jpg",
                        }),
                        s.jsx("p", { children: "Li-Zn" }),
                        s.jsx("p", {
                          children:
                            "Lithium-zinc alloys are used in battery technologies and as structural materials in certain engineering applications due to their low density and high corrosion resistance.",
                        }),
                      ],
                    }),
                  l === "Lithium Helide" &&
                    s.jsxs("div", {
                      className: "flex flex-col justify-center items-center",
                      children: [
                        s.jsx("img", {
                          className: "w-96 rounded-xl my-5",
                          src: "https://ars.els-cdn.com/content/image/1-s2.0-S1386947716300224-fx1.jpg",
                        }),
                        s.jsx("p", { children: "Li-He" }),
                        s.jsx("p", {
                          children:
                            "Lithium helide is a hypothetical compound formed between lithium and helium. It has not been observed experimentally but is predicted to exist under certain conditions.",
                        }),
                      ],
                    }),
                  l === "Beryllium Hydride" &&
                    s.jsxs("div", {
                      className: "flex flex-col justify-center items-center",
                      children: [
                        s.jsx("img", {
                          className: "w-96 rounded-xl my-5",
                          src: "https://upload.wikimedia.org/wikipedia/commons/9/9b/Beryllium-hydride-molecule-IR-3D-balls.png",
                        }),
                        s.jsx("p", { children: "BeH2" }),
                        s.jsx("p", {
                          children:
                            "Beryllium hydride is a compound formed between beryllium and hydrogen. It is used as a source of hydrogen gas and as a precursor in organic synthesis.",
                        }),
                      ],
                    }),
                  l === "Beryllium Oxide (Beryllia)" &&
                    s.jsxs("div", {
                      className: "flex flex-col justify-center items-center",
                      children: [
                        s.jsx("img", {
                          className: "w-96 rounded-xl my-5",
                          src: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/BeO_sample.jpg/220px-BeO_sample.jpg",
                        }),
                        s.jsx("p", { children: "BeO" }),
                        s.jsx("p", {
                          children:
                            "Beryllium oxide, also known as beryllia, is an inorganic compound used as a high-temperature refractory material, in nuclear reactors, and in certain electronic applications.",
                        }),
                      ],
                    }),
                  l === "Beryllium Nitride" &&
                    s.jsxs("div", {
                      className: "flex flex-col justify-center items-center",
                      children: [
                        s.jsx("img", {
                          className: "w-96 rounded-xl my-5",
                          src: "https://7cad390533514c32acc8-75d23ce06fcfaf780446d85d50c33f7b.ssl.cf6.rackcdn.com/sc/1700732107-normal-beryllium-nitride-powder.jpg",
                        }),
                        s.jsx("p", { children: "Be3N2" }),
                        s.jsx("p", {
                          children:
                            "Beryllium nitride is a binary compound formed between beryllium and nitrogen. It has been studied for its potential use in electronic and optoelectronic devices.",
                        }),
                      ],
                    }),
                  l === "Beryllium Carbide" &&
                    s.jsxs("div", {
                      className: "flex flex-col justify-center items-center",
                      children: [
                        s.jsx("img", {
                          className: "w-96 rounded-xl my-5",
                          src: "https://cdn.britannica.com/61/7361-004-7E972259/CaC-2-calcium-carbide.jpg",
                        }),
                        s.jsx("p", { children: "Be2C" }),
                        s.jsx("p", {
                          children:
                            "Beryllium carbide is a binary compound formed between beryllium and carbon. It has been investigated for its potential use as a semiconductor material.",
                        }),
                      ],
                    }),
                  l === "Beryllium Chloride" &&
                    s.jsxs("div", {
                      className: "flex flex-col justify-center items-center",
                      children: [
                        s.jsx("img", {
                          className: "w-96 rounded-xl my-5",
                          src: "https://techiescientist.com/wp-content/uploads/2020/05/Beryllium_Chloride.png",
                        }),
                        s.jsx("p", { children: "BeCl2" }),
                        s.jsx("p", {
                          children:
                            "Beryllium chloride is a compound used as a precursor in the production of beryllium metal and in organic synthesis.",
                        }),
                      ],
                    }),
                  l === "Beryllium Sodium Alloy" &&
                    s.jsxs("div", {
                      className: "flex flex-col justify-center items-center",
                      children: [
                        s.jsx("img", {
                          className: "w-96 rounded-xl my-5",
                          src: "https://www.nanochemazone.com/wp-content/uploads/2021/10/Beryllium-Sodium-Fluoride-Powder.jpg",
                        }),
                        s.jsx("p", { children: "Be-Na" }),
                        s.jsx("p", {
                          children:
                            "Beryllium-sodium alloys are used in some advanced battery technologies and as a heat transfer fluid due to their low melting point and high thermal conductivity.",
                        }),
                      ],
                    }),
                  l === "Beryllium Argon Compound" &&
                    s.jsxs("div", {
                      className: "flex flex-col justify-center items-center",
                      children: [
                        s.jsx("img", {
                          className: "w-96 rounded-xl my-5",
                          src: "https://pubchem.ncbi.nlm.nih.gov/image/imgsrv.fcgi?cid=57459949&t=l",
                        }),
                        s.jsx("p", { children: "Be-Ar" }),
                        s.jsx("p", {
                          children:
                            "Beryllium argon compounds are hypothetical compounds formed between beryllium and argon. They have not been observed experimentally but are predicted to exist under certain conditions.",
                        }),
                      ],
                    }),
                  l === "Beryllium Nitrate" &&
                    s.jsxs("div", {
                      className: "flex flex-col justify-center items-center",
                      children: [
                        s.jsx("img", {
                          className: "w-96 rounded-xl my-5",
                          src: "https://upload.wikimedia.org/wikipedia/commons/0/06/Be4O%28NO3%296_ICD_Code59272.png",
                        }),
                        s.jsx("p", { children: "Be(NO3)2" }),
                        s.jsx("p", {
                          children:
                            "Beryllium nitrate is an inorganic compound used in various industrial applications, including as a component in ceramics, glass, and as a catalyst in certain chemical reactions.",
                        }),
                      ],
                    }),
                  l === "Beryllium Fluoride" &&
                    s.jsxs("div", {
                      className: "flex flex-col justify-center items-center",
                      children: [
                        s.jsx("img", {
                          className: "w-96 rounded-xl my-5",
                          src: "https://upload.wikimedia.org/wikipedia/commons/f/f3/BeF2str.PNG",
                        }),
                        s.jsx("p", { children: "BeF2" }),
                        s.jsx("p", {
                          children:
                            "Beryllium fluoride is an inorganic compound used in various applications, including as a component in molten salt nuclear reactors, in the production of ceramics, and in dental applications.",
                        }),
                      ],
                    }),
                  l === "Beryllium Silicon Alloy" &&
                    s.jsxs("div", {
                      className: "flex flex-col justify-center items-center",
                      children: [
                        s.jsx("img", {
                          className: "w-96 rounded-xl my-5",
                          src: "https://www.belmontmetals.com/wp-content/uploads/2017/09/19516-Beryllium-Aluminum.jpg",
                        }),
                        s.jsx("p", { children: "Be-Si" }),
                        s.jsx("p", {
                          children:
                            "Beryllium-silicon alloys are used in aerospace applications and as a component in certain advanced battery technologies due to their high strength-to-weight ratio and corrosion resistance.",
                        }),
                      ],
                    }),
                  l === "Beryllium Titanium Alloy" &&
                    s.jsxs("div", {
                      className: "flex flex-col justify-center items-center",
                      children: [
                        s.jsx("img", {
                          className: "w-96 rounded-xl my-5",
                          src: "https://procure-net.com/image/product/3287515/LARGE/0/415592/?t=1697743349",
                        }),
                        s.jsx("p", { children: "Be-Ti" }),
                        s.jsx("p", {
                          children:
                            "Beryllium-titanium alloys are used in aerospace applications and as a component in certain advanced battery technologies due to their high strength-to-weight ratio and corrosion resistance.",
                        }),
                      ],
                    }),
                  l === "Beryllium Vanadium Compound" &&
                    s.jsxs("div", {
                      className: "flex flex-col justify-center items-center",
                      children: [
                        s.jsx("img", {
                          className: "w-96 rounded-xl my-5",
                          src: "https://pubchem.ncbi.nlm.nih.gov/image/imgsrv.fcgi?cid=20317245&t=l",
                        }),
                        s.jsx("p", { children: "Be-V" }),
                        s.jsx("p", {
                          children:
                            "Beryllium vanadium compounds are hypothetical compounds formed between beryllium and vanadium. They have not been observed experimentally but are predicted to exist under certain conditions.",
                        }),
                      ],
                    }),
                  l === "Beryllium Chromium Alloy" &&
                    s.jsxs("div", {
                      className: "flex flex-col justify-center items-center",
                      children: [
                        s.jsx("img", {
                          className: "w-96 rounded-xl my-5",
                          src: "https://5.imimg.com/data5/AE/SM/MY-4968556/beryllium-bronze-500x500.jpg",
                        }),
                        s.jsx("p", { children: "Be-Cr" }),
                        s.jsx("p", {
                          children:
                            "Beryllium-chromium alloys are used in various applications, including as structural materials in aerospace and automotive industries due to their high strength-to-weight ratio and corrosion resistance.",
                        }),
                      ],
                    }),
                  l === "Beryllium Manganese Compound" &&
                    s.jsxs("div", {
                      className: "flex flex-col justify-center items-center",
                      children: [
                        s.jsx("img", {
                          className: "w-96 rounded-xl my-5",
                          src: "https://pubchem.ncbi.nlm.nih.gov/image/imgsrv.fcgi?cid=71382241&t=l",
                        }),
                        s.jsx("p", { children: "Be-Mn" }),
                        s.jsx("p", {
                          children:
                            "Beryllium manganese compounds are hypothetical compounds formed between beryllium and manganese. They have not been observed experimentally but are predicted to exist under certain conditions.",
                        }),
                      ],
                    }),
                  l === "Beryllium Cobalt Alloy" &&
                    s.jsxs("div", {
                      className: "flex flex-col justify-center items-center",
                      children: [
                        s.jsx("img", {
                          className: "w-96 rounded-xl my-5",
                          src: "https://www.orangesteelindia.com/assets/img/nickel-cobalt-beryllium-copper-alloys.jpg",
                        }),
                        s.jsx("p", { children: "Be-Co" }),
                        s.jsx("p", {
                          children:
                            "Beryllium-cobalt alloys are used in various applications, including as structural materials in aerospace and automotive industries due to their high strength-to-weight ratio and corrosion resistance.",
                        }),
                      ],
                    }),
                  l === "Beryllium Nickel Alloy" &&
                    s.jsxs("div", {
                      className: "flex flex-col justify-center items-center",
                      children: [
                        s.jsx("img", {
                          className: "w-96 rounded-xl my-5",
                          src: "https://www.mill-max.com/sites/default/files/2018-12/pr548.jpg",
                        }),
                        s.jsx("p", { children: "Be-Ni" }),
                        s.jsx("p", {
                          children:
                            "Beryllium-nickel alloys are used in various applications, including as structural materials in aerospace and automotive industries due to their high strength-to-weight ratio and corrosion resistance.",
                        }),
                      ],
                    }),
                  l === "Aluminum Sulfide" &&
                    s.jsxs("div", {
                      className: "flex flex-col justify-center items-center",
                      children: [
                        s.jsx("img", {
                          className: "w-96 rounded-xl my-5",
                          src: "https://www.samaterials.com/img/p/4/8/9/4/4894.jpg",
                        }),
                        s.jsx("p", { children: "Al₂S₃" }),
                        "Aluminum Sulfide is a compound formed from the reaction between Aluminum Hydroxide and Sulfur. It is a gray solid used in various industrial applications.",
                      ],
                    }),
                  l === "Potassium Chloride" &&
                    s.jsxs("div", {
                      className: "flex flex-col justify-center items-center",
                      children: [
                        s.jsx("img", {
                          className: "w-96 rounded-xl my-5",
                          src: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Potassium_chloride.jpg",
                        }),
                        s.jsx("p", { children: "KCl" }),
                        "Potassium Chloride is a compound formed from the reaction between Potassium and Chlorine. It is commonly used as a fertilizer and in the treatment of hypokalemia.",
                      ],
                    }),
                  l === "Sulfur Dioxide" &&
                    s.jsxs("div", {
                      className: "flex flex-col justify-center items-center",
                      children: [
                        s.jsx("img", {
                          className: "w-96 rounded-xl my-5",
                          src: "https://assets.rbl.ms/25572096/origin.jpg",
                        }),
                        s.jsx("p", { children: "SO₂" }),
                        "Sulfur Dioxide is a compound formed from the combustion of Sulfur with Oxygen. It is a toxic gas with a pungent odor, commonly used as a preservative in winemaking and as a precursor to sulfuric acid.",
                      ],
                    }),
                  l === "Iron Oxide" &&
                    s.jsxs("div", {
                      className: "flex flex-col justify-center items-center",
                      children: [
                        s.jsx("img", {
                          className: "w-96 rounded-xl my-5",
                          src: "https://pestell.com/wp-content/uploads/2015/05/feed-additives-red-iron-oxide-synthetic.jpg",
                        }),
                        s.jsx("p", { children: "Fe2O3" }),
                        "Iron Oxide, commonly known as rust, is a compound formed from the oxidation of Iron. It is a reddish-brown solid that forms when Iron reacts with Oxygen and moisture.",
                      ],
                    }),
                  l === "Calcium Carbide" &&
                    s.jsxs("div", {
                      className: "flex flex-col justify-center items-center",
                      children: [
                        s.jsx("img", {
                          className: "w-96 rounded-xl my-5",
                          src: "https://camachem.com/pub/media/catalog/product/c/a/calcium_carbide_img_01_1.jpg",
                        }),
                        s.jsx("p", { children: "CaC2" }),
                        "Calcium Carbide is a compound formed from the reaction between Calcium and Carbon. It is used in the production of acetylene gas for welding and cutting metals.",
                      ],
                    }),
                  l === "Phosphorus Pentoxide" &&
                    s.jsxs("div", {
                      className: "flex flex-col justify-center items-center",
                      children: [
                        s.jsx("img", {
                          className: "w-96 rounded-xl my-5",
                          src: "https://5.imimg.com/data5/GE/WL/NU/SELLER-3358913/phosphorus-pentoxide.jpeg",
                        }),
                        s.jsx("p", { children: "P₄O₁₀" }),
                        "Phosphorus Pentoxide is a compound formed from the reaction between Phosphorus and Oxygen. It is a white crystalline solid used as a desiccant and as a reagent in organic synthesis.",
                      ],
                    }),
                  l === "Copper Oxide" &&
                    s.jsxs("div", {
                      className: "flex flex-col justify-center items-center",
                      children: [
                        s.jsx("img", {
                          className: "w-96 rounded-xl my-5",
                          src: "https://d1ymz67w5raq8g.cloudfront.net/Pictures/1024x536/6/6/2/510662_copperiioxidesamplecloseup_629494.jpg",
                        }),
                        s.jsx("p", { children: "CuO" }),
                        "Copper Oxide is a compound formed from the reaction between Copper and Oxygen. It is a black solid used in pigments, as a catalyst, and in the manufacture of batteries.",
                      ],
                    }),
                  l === "Silver Sulfide" &&
                    s.jsxs("div", {
                      className: "flex flex-col justify-center items-center",
                      children: [
                        s.jsx("img", {
                          className: "w-96 rounded-xl my-5",
                          src: "https://www.aemdeposition.com/fup/img/1-1P40115440Cb.jpg",
                        }),
                        "Silver Sulfide is a compound formed from the reaction between Silver and Sulfur. It is a black solid commonly known as tarnish, which forms on silverware and jewelry over time.",
                      ],
                    }),
                  l === "Ammonia" &&
                    s.jsxs("div", {
                      className: "flex flex-col justify-center items-center",
                      children: [
                        s.jsx("img", {
                          className: "w-96 rounded-xl my-5",
                          src: "https://philusa.com.ph/wp-content/uploads/2020/05/Apollo-Strong-Ammonia-Solution-120mL.png",
                        }),
                        s.jsx("p", { children: "NH3" }),
                        s.jsx("p", {
                          children:
                            "Ammonia is a compound of nitrogen and hydrogen with the formula NH3. It is a colorless gas with a characteristic pungent smell. Ammonia contributes significantly to the nutritional needs of terrestrial organisms by serving as a precursor to food and fertilizers.",
                        }),
                      ],
                    }),
                  l === "Methane" &&
                    s.jsxs("div", {
                      className: "flex flex-col justify-center items-center",
                      children: [
                        s.jsx("img", {
                          className: "w-96 rounded-xl my-5",
                          src: "https://encyclopedia.airliquide.com/sites/gas_encyclopedia/files/003-methane_formula.png",
                        }),
                        s.jsx("p", { children: "CH4" }),
                        s.jsx("p", {
                          children:
                            "Methane is a chemical compound with the chemical formula CH4. It is a colorless, odorless gas that is the primary component of natural gas. Methane is important for electricity generation by burning it as a fuel in a gas turbine or steam generator.",
                        }),
                      ],
                    }),
                  l === "Hydrochloric Acid" &&
                    s.jsxs("div", {
                      className: "flex flex-col justify-center items-center",
                      children: [
                        s.jsx("img", {
                          className: "w-96 rounded-xl my-5",
                          src: "https://camachem.com/pub/media/catalog/product/h/y/hydrochloric_acid_33_img_01.jpg",
                        }),
                        s.jsx("p", { children: "HCl" }),
                        s.jsx("p", {
                          children:
                            "Hydrochloric acid is a colorless inorganic chemical system with the formula HCl. It is classified as a strong acid and is one of the simplest forms of chlorine. Hydrochloric acid is a common laboratory reagent and industrial chemical.",
                        }),
                      ],
                    }),
                  l === "Sodium Hydride" &&
                    s.jsxs("div", {
                      className: "flex flex-col justify-center items-center",
                      children: [
                        s.jsx("img", {
                          className: "w-96 rounded-xl my-5",
                          src: "https://upload.wikimedia.org/wikipedia/commons/7/7a/NaH.jpg",
                        }),
                        s.jsx("p", { children: "NaH" }),
                        s.jsx("p", {
                          children:
                            "Sodium hydride is the chemical compound with the formula NaH. It is used as a strong base in organic synthesis and as a reducing agent in inorganic synthesis. Sodium hydride is a colorless solid that is highly reactive, especially toward water.",
                        }),
                      ],
                    }),
                  l === "Hydrogen Fluoride (Hydrofluoric Acid)" &&
                    s.jsxs("div", {
                      className: "flex flex-col justify-center items-center",
                      children: [
                        s.jsx("img", {
                          className: "w-96 rounded-xl my-5",
                          src: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Hydrogen_fluoride.JPG/1200px-Hydrogen_fluoride.JPG",
                        }),
                        s.jsx("p", { children: "HF" }),
                        s.jsx("p", {
                          children:
                            "Hydrofluoric acid is a solution of hydrogen fluoride (HF) in water. It is a precursor to almost all fluorine compounds, including pharmaceuticals such as fluoxetine (Prozac), diverse materials such as PTFE (Teflon), and elemental fluorine itself.",
                        }),
                      ],
                    }),
                  l === "Nitrogen Oxide" &&
                    s.jsxs("div", {
                      className: "flex flex-col justify-center items-center",
                      children: [
                        s.jsx("img", {
                          className: "w-96 rounded-xl my-5",
                          src: "https://scied.ucar.edu/sites/default/files/styles/extra_large/public/media/images/nitrogen_dioxide_no2_720x400.png.webp?itok=Jk5pivpd",
                        }),
                        s.jsx("p", { children: "NO" }),
                        s.jsx("p", {
                          children:
                            "Nitrogen oxide is a colorless gas with the formula NO. It is one of the principal oxides of nitrogen. Nitrogen oxide is an intermediate in the industrial synthesis of nitric acid, millions of tons of which are produced each year for use primarily in the production of fertilizers.",
                        }),
                      ],
                    }),
                  l === "Carbon Dioxide" &&
                    s.jsxs("div", {
                      className: "flex flex-col justify-center items-center",
                      children: [
                        s.jsx("img", {
                          className: "w-96 rounded-xl my-5",
                          src: "https://edinburghsensors.com/wp-content/uploads/2020/04/co2-vs-co.jpg",
                        }),
                        s.jsxs("p", {
                          children: ["CO", s.jsx("sub", { children: "2" })],
                        }),
                        s.jsx("p", {
                          children:
                            "Carbon dioxide is a colorless gas with a density about 60% higher than that of dry air. Carbon dioxide consists of a carbon atom covalently double bonded to two oxygen atoms. It occurs naturally in Earth's atmosphere as a trace gas.",
                        }),
                      ],
                    }),
                  l === "Chlorine Oxide" &&
                    s.jsxs("div", {
                      className: "flex flex-col justify-center items-center",
                      children: [
                        s.jsx("img", {
                          className: "w-96 rounded-xl my-5",
                          src: "https://upload.wikimedia.org/wikipedia/commons/c/cd/Dichlorine-heptoxide-3D-balls.png",
                        }),
                        s.jsxs("p", {
                          children: [
                            "Cl",
                            s.jsx("sub", { children: "2" }),
                            "O",
                          ],
                        }),
                        s.jsxs("p", {
                          children: [
                            "Chlorine oxide is the chemical compound with the formula Cl",
                            s.jsx("sub", { children: "2" }),
                            'O. It is a yellowish-green gas that crystallizes to bright orange crystals at -59 degrees Celsius. As predicted by VSEPR theory, the molecule adopts a "bent" molecular geometry similar to that of water.',
                          ],
                        }),
                      ],
                    }),
                  l === "Cyanogen" &&
                    s.jsxs("div", {
                      className: "flex flex-col justify-center items-center",
                      children: [
                        s.jsx("img", {
                          className: "w-96 rounded-xl my-5",
                          src: "https://pubchem.ncbi.nlm.nih.gov/image/imgsrv.fcgi?cid=9999&t=l",
                        }),
                        s.jsxs("p", {
                          children: ["(CN)", s.jsx("sub", { children: "2" })],
                        }),
                        s.jsxs("p", {
                          children: [
                            "Cyanogen is the chemical compound with the formula (CN)",
                            s.jsx("sub", { children: "2" }),
                            ". It is a colorless, toxic gas with a pungent odor. It is an important building block for a wide range of chemical compounds, particularly those used in synthetic fibers and plastics.",
                          ],
                        }),
                      ],
                    }),
                  l === "Nitrogen Trichloride" &&
                    s.jsxs("div", {
                      className: "flex flex-col justify-center items-center",
                      children: [
                        s.jsx("img", {
                          className: "w-96 rounded-xl my-5",
                          src: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Nitrogen_trichloride.JPG/220px-Nitrogen_trichloride.JPG",
                        }),
                        s.jsxs("p", {
                          children: ["NCl", s.jsx("sub", { children: "3" })],
                        }),
                        s.jsxs("p", {
                          children: [
                            "Nitrogen trichloride is the chemical compound with the formula NCl",
                            s.jsx("sub", { children: "3" }),
                            ". It is a yellowish liquid that is explosive even at low temperatures. Nitrogen trichloride is mainly used in the laboratory for its explosive properties.",
                          ],
                        }),
                      ],
                    }),
                  l === "Carbon Tetrachloride" &&
                    s.jsxs("div", {
                      className: "flex flex-col justify-center items-center",
                      children: [
                        s.jsx("img", {
                          className: "w-96 rounded-xl my-5",
                          src: "https://d2cbg94ubxgsnp.cloudfront.net/Pictures/480xAny/6/2/9/144629_shutterstock_1080461387.jpg",
                        }),
                        s.jsxs("p", {
                          children: ["CCl", s.jsx("sub", { children: "4" })],
                        }),
                        s.jsx("p", {
                          children:
                            "Carbon tetrachloride is a solvent for oils and fats and is also used in the manufacture of carbon tetrachloride-based extinguishers, as a precursor to refrigerants, and as a dry-cleaning solvent.",
                        }),
                      ],
                    }),
                  l ===
                    "https://www.ngnir.com/images/articles/sodiumCarbonate-118/image1.jpg" &&
                    s.jsxs("div", {
                      className: "flex flex-col justify-center items-center",
                      children: [
                        s.jsx("img", {
                          className: "w-96 rounded-xl my-5",
                          src: "https://example.com/sodium_carbide.jpg",
                        }),
                        s.jsxs("p", {
                          children: [
                            "Na",
                            s.jsx("sub", { children: "2" }),
                            "CCl",
                            s.jsx("sub", { children: "2" }),
                          ],
                        }),
                        s.jsxs("p", {
                          children: [
                            "Sodium carbide is the chemical compound with the formula Na",
                            s.jsx("sub", { children: "2" }),
                            "CCl",
                            s.jsx("sub", { children: "2" }),
                            ". It is a gray powder that reacts violently with water to produce acetylene gas.",
                          ],
                        }),
                      ],
                    }),
                  l ===
                    "https://www.physicsforums.com/attachments/1689816061495-png.329439/" &&
                    s.jsxs("div", {
                      className: "flex flex-col justify-center items-center",
                      children: [
                        s.jsx("img", {
                          className: "w-96 rounded-xl my-5",
                          src: "https://www.chemspider.com/ImagesHandler.ashx?id=102875&w=250&h=250",
                        }),
                        s.jsxs("p", {
                          children: ["ClNO", s.jsx("sub", { children: "3" })],
                        }),
                        s.jsxs("p", {
                          children: [
                            "Chlorine nitrate is a chemical compound with the formula ClNO",
                            s.jsx("sub", { children: "3" }),
                            ". It is an explosive, yellow, crystalline solid.",
                          ],
                        }),
                      ],
                    }),
                  l === "Sodium Nitrate" &&
                    s.jsxs("div", {
                      className: "flex flex-col justify-center items-center",
                      children: [
                        s.jsx("img", {
                          className: "w-96 rounded-xl my-5",
                          src: "https://lh3.googleusercontent.com/proxy/wTTtcKqppqTYtDzalaFPiPoEd3VY9yZiI1mqjzK2ml0IdkGGx5M-Xyu5fNty8qwHSoN8L3N0cBhoT-xqm8Q4pdA-1krhzjfbWjzNlhdaA47ItDPYe_DDOjxrvuWMMfUMtyEP55pxMww6qw",
                        }),
                        s.jsxs("p", {
                          children: ["NaNO", s.jsx("sub", { children: "3" })],
                        }),
                        s.jsxs("p", {
                          children: [
                            "Sodium nitrate is the chemical compound with the formula NaNO",
                            s.jsx("sub", { children: "3" }),
                            ". It is a white, odorless solid that is used as an oxidizing agent and in pyrotechnics.",
                          ],
                        }),
                      ],
                    }),
                  l === "Sodium Fluoride" &&
                    s.jsxs("div", {
                      className: "flex flex-col justify-center items-center",
                      children: [
                        s.jsx("img", {
                          className: "w-96 rounded-xl my-5",
                          src: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Sodium_fluoride.jpg/220px-Sodium_fluoride.jpg",
                        }),
                        s.jsx("p", { children: "NaF" }),
                        s.jsx("p", {
                          children:
                            "Sodium fluoride is an inorganic compound with the formula NaF. It is a colorless or white solid that is readily soluble in water. Sodium fluoride is used in dental products and for water fluoridation.",
                        }),
                      ],
                    }),
                  l === "Nitric Acid Fluoride" &&
                    s.jsxs("div", {
                      className: "flex flex-col justify-center items-center",
                      children: [
                        s.jsx("img", {
                          className: "w-96 rounded-xl my-5",
                          src: "https://upload.wikimedia.org/wikipedia/commons/1/14/White_Fuming_Nitric_Acid.png",
                        }),
                        s.jsxs("p", {
                          children: [
                            "HNO",
                            s.jsx("sub", { children: "3" }),
                            "F",
                          ],
                        }),
                        s.jsx("p", {
                          children:
                            "Nitric acid fluoride is a colorless, fuming liquid with a pungent odor. It is highly corrosive and reacts violently with water.",
                        }),
                      ],
                    }),
                  l === "Nitric Acid Titanium(IV) Oxide" &&
                    s.jsxs("div", {
                      className: "flex flex-col justify-center items-center",
                      children: [
                        s.jsx("img", {
                          className: "w-96 rounded-xl my-5",
                          src: "https://www.sigmaaldrich.cn/deepweb/assets/sigmaaldrich/product/images/275/278/ded77f88-201c-42e6-9eb5-3a10ab99a0dc/800/ded77f88-201c-42e6-9eb5-3a10ab99a0dc.jpg",
                        }),
                        s.jsxs("p", {
                          children: ["TiO", s.jsx("sub", { children: "2" })],
                        }),
                        s.jsx("p", {
                          children:
                            "Nitric acid titanium(IV) oxide is a white, crystalline solid that is insoluble in water. It is commonly used as a pigment and in sunscreen formulations.",
                        }),
                      ],
                    }),
                  l ===
                    "https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Silicon_tetrafluoride.svg/1200px-Silicon_tetrafluoride.svg.png" &&
                    s.jsxs("div", {
                      className: "flex flex-col justify-center items-center",
                      children: [
                        s.jsx("img", {
                          className: "w-96 rounded-xl my-5",
                          src: "https://example.com/silicon_tetrafluoride.jpg",
                        }),
                        s.jsxs("p", {
                          children: ["SiF", s.jsx("sub", { children: "4" })],
                        }),
                        s.jsxs("p", {
                          children: [
                            "Silicon tetrafluoride is a chemical compound with the formula SiF",
                            s.jsx("sub", { children: "4" }),
                            ". It is a colorless, volatile liquid with a pungent odor. Silicon tetrafluoride is used as an intermediate in the production of silicon compounds.",
                          ],
                        }),
                      ],
                    }),
                  l === "Titanium Tetrafluoride" &&
                    s.jsxs("div", {
                      className: "flex flex-col justify-center items-center",
                      children: [
                        s.jsx("img", {
                          className: "w-96 rounded-xl my-5",
                          src: "https://winter.group.shef.ac.uk/webelements/_media/compounds/Ti/F4Ti1-7783633.jpg",
                        }),
                        s.jsxs("p", {
                          children: ["TiF", s.jsx("sub", { children: "4" })],
                        }),
                        s.jsx("p", {
                          children:
                            "Titanium tetrafluoride is a white, crystalline solid that is highly soluble in water. It is used as a catalyst in organic synthesis and as a fluorinating agent in the production of organofluorine compounds.",
                        }),
                      ],
                    }),
                  l === "Titanium Silicide" &&
                    s.jsxs("div", {
                      className: "flex flex-col justify-center items-center",
                      children: [
                        s.jsx("img", {
                          className: "w-96 rounded-xl my-5",
                          src: "https://7cad390533514c32acc8-75d23ce06fcfaf780446d85d50c33f7b.ssl.cf6.rackcdn.com/sc/1638240607-normal-titanium-disilicide-tisi2-powder.jpg",
                        }),
                        s.jsxs("p", {
                          children: [
                            "Si",
                            s.jsx("sub", { children: "2" }),
                            "TI",
                            s.jsx("sub", { children: "3" }),
                          ],
                        }),
                        s.jsx("p", {
                          children:
                            "Titanium silicide is a gray powder that is insoluble in water. It is used as a semiconductor material in electronics and as a coating in some applications due to its high thermal conductivity.",
                        }),
                      ],
                    }),
                  l === "Vanadium Silicide" &&
                    s.jsxs("div", {
                      className: "flex flex-col justify-center items-center",
                      children: [
                        s.jsx("img", {
                          className: "w-96 rounded-xl my-5",
                          src: "https://chemcraft.su/sites/chemcraft.su/files/field/image/vsi2_-1.jpg",
                        }),
                        s.jsxs("p", {
                          children: ["VS", s.jsx("sub", { children: "2" })],
                        }),
                        s.jsx("p", {
                          children:
                            "Vanadium silicide is a black, crystalline solid that is insoluble in water. It is used in the production of high-strength, lightweight materials for aerospace and automotive applications.",
                        }),
                      ],
                    }),
                  l ===
                    "Invalid combination. These elements cannot be mixed." &&
                    s.jsx(s.Fragment, {
                      children: "Sorry, the selected elements cannot be mixed.",
                    }),
                ],
              }),
            ],
          }),
        s.jsx("div", { className: "blank my-52" }),
      ],
    });
  },
  Oi = P.createContext();
function dy() {
  const [e, t] = P.useState(!1);
  function i() {
    t((o) => !o);
  }
  let n = e ? "bg-slate-800" : "bg-white";
  return s.jsx(Oi.Provider, {
    value: e,
    children: s.jsxs("div", {
      className: `${n} `,
      children: [
        s.jsx(uy, { toggleDarkMode: i }),
        s.jsx(Bg, {}),
        s.jsx(my, {}),
      ],
    }),
  });
}
fs.createRoot(document.getElementById("root")).render(
  s.jsx(yp.StrictMode, { children: s.jsx(dy, {}) })
);
