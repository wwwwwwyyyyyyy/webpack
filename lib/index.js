(() => {
  "use strict";
  var e = {
      705: (e) => {
        e.exports = function (e) {
          var t = [];
          return (
            (t.toString = function () {
              return this.map(function (t) {
                var n = "",
                  r = void 0 !== t[5];
                return (
                  t[4] && (n += "@supports (".concat(t[4], ") {")),
                  t[2] && (n += "@media ".concat(t[2], " {")),
                  r &&
                    (n += "@layer".concat(
                      t[5].length > 0 ? " ".concat(t[5]) : "",
                      " {"
                    )),
                  (n += e(t)),
                  r && (n += "}"),
                  t[2] && (n += "}"),
                  t[4] && (n += "}"),
                  n
                );
              }).join("");
            }),
            (t.i = function (e, n, r, o, a) {
              "string" == typeof e && (e = [[null, e, void 0]]);
              var i = {};
              if (r)
                for (var s = 0; s < this.length; s++) {
                  var c = this[s][0];
                  null != c && (i[c] = !0);
                }
              for (var l = 0; l < e.length; l++) {
                var u = [].concat(e[l]);
                (r && i[u[0]]) ||
                  (void 0 !== a &&
                    (void 0 === u[5] ||
                      (u[1] = "@layer"
                        .concat(u[5].length > 0 ? " ".concat(u[5]) : "", " {")
                        .concat(u[1], "}")),
                    (u[5] = a)),
                  n &&
                    (u[2]
                      ? ((u[1] = "@media "
                          .concat(u[2], " {")
                          .concat(u[1], "}")),
                        (u[2] = n))
                      : (u[2] = n)),
                  o &&
                    (u[4]
                      ? ((u[1] = "@supports ("
                          .concat(u[4], ") {")
                          .concat(u[1], "}")),
                        (u[4] = o))
                      : (u[4] = "".concat(o))),
                  t.push(u));
              }
            }),
            t
          );
        };
      },
      742: (e) => {
        e.exports = function (e, t) {
          return (
            t || (t = {}),
            e
              ? ((e = String(e.__esModule ? e.default : e)),
                /^['"].*['"]$/.test(e) && (e = e.slice(1, -1)),
                t.hash && (e += t.hash),
                /["'() \t\n]|(%20)/.test(e) || t.needQuotes
                  ? '"'.concat(
                      e.replace(/"/g, '\\"').replace(/\n/g, "\\n"),
                      '"'
                    )
                  : e)
              : e
          );
        };
      },
      738: (e) => {
        e.exports = function (e) {
          return e[1];
        };
      },
      575: (e, t, n) => {
        n.d(t, { Z: () => s });
        var r = n(738),
          o = n.n(r),
          a = n(705),
          i = n.n(a)()(o());
        i.push([
          e.id,
          "body .two {\n  width: 100px;\n  height: 100px;\n  color: red;\n}\n",
          "",
        ]);
        const s = i;
      },
      734: (e, t, n) => {
        n.d(t, { Z: () => x });
        var r = n(738),
          o = n.n(r),
          a = n(705),
          i = n.n(a),
          s = n(742),
          c = n.n(s),
          l = new URL(n(899), n.b),
          u = new URL(n(692), n.b),
          f = new URL(n(503), n.b),
          p = new URL(n(288), n.b),
          d = new URL(n(765), n.b),
          h = i()(o()),
          A = c()(l),
          m = c()(l, { hash: "#iefix" }),
          v = c()(u),
          g = c()(f),
          b = c()(p),
          y = c()(d, { hash: "#iconfont" });
        h.push([
          e.id,
          '@font-face {font-family: "iconfont";\r\n  src: url(' +
            A +
            "); /* IE9 */\r\n  src: url(" +
            m +
            ") format('embedded-opentype'), /* IE6-IE8 */\r\n  url(" +
            v +
            ") format('woff2'),\r\n  url(" +
            g +
            ") format('woff'),\r\n  url(" +
            b +
            ") format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */\r\n  url(" +
            y +
            ') format(\'svg\'); /* iOS 4.1- */\r\n}\r\n\r\n.iconfont {\r\n  font-family: "iconfont" !important;\r\n  font-size: 16px;\r\n  font-style: normal;\r\n  -webkit-font-smoothing: antialiased;\r\n  -moz-osx-font-smoothing: grayscale;\r\n}\r\n\r\n.icon-qq:before {\r\n  content: "\\e64e";\r\n}\r\n\r\n.icon-weixin:before {\r\n  content: "\\e615";\r\n}\r\n\r\n',
          "",
        ]);
        const x = h;
      },
      771: (e, t, n) => {
        n.d(t, { Z: () => s });
        var r = n(738),
          o = n.n(r),
          a = n(705),
          i = n.n(a)()(o());
        i.push([
          e.id,
          ".tab{\r\n    width: 200px;\r\n    height: 200px;\r\n    background-color: aqua;\r\n}",
          "",
        ]);
        const s = i;
      },
      379: (e) => {
        var t = [];
        function n(e) {
          for (var n = -1, r = 0; r < t.length; r++)
            if (t[r].identifier === e) {
              n = r;
              break;
            }
          return n;
        }
        function r(e, r) {
          for (var a = {}, i = [], s = 0; s < e.length; s++) {
            var c = e[s],
              l = r.base ? c[0] + r.base : c[0],
              u = a[l] || 0,
              f = "".concat(l, " ").concat(u);
            a[l] = u + 1;
            var p = n(f),
              d = {
                css: c[1],
                media: c[2],
                sourceMap: c[3],
                supports: c[4],
                layer: c[5],
              };
            if (-1 !== p) t[p].references++, t[p].updater(d);
            else {
              var h = o(d, r);
              (r.byIndex = s),
                t.splice(s, 0, { identifier: f, updater: h, references: 1 });
            }
            i.push(f);
          }
          return i;
        }
        function o(e, t) {
          var n = t.domAPI(t);
          return (
            n.update(e),
            function (t) {
              if (t) {
                if (
                  t.css === e.css &&
                  t.media === e.media &&
                  t.sourceMap === e.sourceMap &&
                  t.supports === e.supports &&
                  t.layer === e.layer
                )
                  return;
                n.update((e = t));
              } else n.remove();
            }
          );
        }
        e.exports = function (e, o) {
          var a = r((e = e || []), (o = o || {}));
          return function (e) {
            e = e || [];
            for (var i = 0; i < a.length; i++) {
              var s = n(a[i]);
              t[s].references--;
            }
            for (var c = r(e, o), l = 0; l < a.length; l++) {
              var u = n(a[l]);
              0 === t[u].references && (t[u].updater(), t.splice(u, 1));
            }
            a = c;
          };
        };
      },
      569: (e) => {
        var t = {};
        e.exports = function (e, n) {
          var r = (function (e) {
            if (void 0 === t[e]) {
              var n = document.querySelector(e);
              if (
                window.HTMLIFrameElement &&
                n instanceof window.HTMLIFrameElement
              )
                try {
                  n = n.contentDocument.head;
                } catch (e) {
                  n = null;
                }
              t[e] = n;
            }
            return t[e];
          })(e);
          if (!r)
            throw new Error(
              "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid."
            );
          r.appendChild(n);
        };
      },
      216: (e) => {
        e.exports = function (e) {
          var t = document.createElement("style");
          return e.setAttributes(t, e.attributes), e.insert(t, e.options), t;
        };
      },
      565: (e, t, n) => {
        e.exports = function (e) {
          var t = n.nc;
          t && e.setAttribute("nonce", t);
        };
      },
      795: (e) => {
        e.exports = function (e) {
          var t = e.insertStyleElement(e);
          return {
            update: function (n) {
              !(function (e, t, n) {
                var r = "";
                n.supports && (r += "@supports (".concat(n.supports, ") {")),
                  n.media && (r += "@media ".concat(n.media, " {"));
                var o = void 0 !== n.layer;
                o &&
                  (r += "@layer".concat(
                    n.layer.length > 0 ? " ".concat(n.layer) : "",
                    " {"
                  )),
                  (r += n.css),
                  o && (r += "}"),
                  n.media && (r += "}"),
                  n.supports && (r += "}");
                var a = n.sourceMap;
                a &&
                  "undefined" != typeof btoa &&
                  (r +=
                    "\n/*# sourceMappingURL=data:application/json;base64,".concat(
                      btoa(unescape(encodeURIComponent(JSON.stringify(a)))),
                      " */"
                    )),
                  t.styleTagTransform(r, e, t.options);
              })(t, e, n);
            },
            remove: function () {
              !(function (e) {
                if (null === e.parentNode) return !1;
                e.parentNode.removeChild(e);
              })(t);
            },
          };
        };
      },
      589: (e) => {
        e.exports = function (e, t) {
          if (t.styleSheet) t.styleSheet.cssText = e;
          else {
            for (; t.firstChild; ) t.removeChild(t.firstChild);
            t.appendChild(document.createTextNode(e));
          }
        };
      },
      692: (e) => {
        e.exports =
          "data:application/x-font-woff2;charset=utf-8;base64,d09GMgABAAAAAARIAAsAAAAACEQAAAP7AAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHEIGVgCDBgqELINlATYCJAMMCwgABCAFhG0HNRsqBxEVnAnJvoScbC4Rd3BOtcW542W9hTVrUov1/2X4oxQkQAQkAAAAAEA8/Df27b6ZWdUmZs1PF00LdK8QypIgFEL25qV7MmnQ/tFa2+MOEV+SuKf39D57ZnsvDe1kQiHSCZ1K+4+4DOphOli4SGcdfuGCdXLfNbnFR0ggzDizXLLcreCttiB4SijRR4wTCZInbn47iDCptQYl92UkJ/HB5fRX4vOAcpl7YIBxQIGNMTmhtEAC1Jgbxi5oiecJ1OvVh9nVMbICBQpzWiCu+vu6g4KMRmnID7VCdcXaIu4DW226y13AveDz8QMsRgFJVWbO3SPaXmDphvraMPc/jZOnQ/N0JrBNZExDCnFeaTlDbBSZxqpXJVxzerUipKn8/5+Ao4mqrT88kiCqmZJGRBqPJj5Xh5NIDfKumvtwk6tRi4cA+CspOoe+WvXMGC1+YVtR0R140bCEGoii1qNJq+Xb251lp1GeU9aXo7Pdw7SlszLTqL/8bLH6yo/ED2HtKWoLexhrutLg9NRk+Sp6AP3aEK2vmN4+ez7CWtNWRU9fhvoq0IWaS9/paSOSLOQ+Y/SAB0Kvle3YWnFh1iMo6ivsSuss6E7vsXKXbSjC25R1bHRa2xyg0ToVbZuiIIx+M3tL2kfnbdZSKbw99ohlyXIOd1aE+adPp6M2w1dmv3/3Ch4cuBtvG5hvBXNIYXIQB6bXJytOPymNHklQGZnHWDEM+4Trx//rHCg2SKfVVtjqrvbeUB2fqkK/z9w/f5O5c0agSXrQSwJ/ky8jQDIUV8XhBwLPuCiQJm2r6AKp5G5vzoTBTryWKGdQiirOpSleW7ow0r1NKl7UcfyxAu/8/28w8/YQuODPfRvM+lBJcjxi72KEWkzIxPs2jnt0Bvt4bf/ygOxlsjpUi2KKHiYGiNbCLKZs4IYQKkGugt0PYlkO5MF//R3r3+6qK+ncN14U8E4vH+R3z1Irwbh/toFDVN44cb6pzUXhOBzDm11Bf8+UgCxuUEGOdtnhiq63Fwu1uhJIavRAVmsYLaRpqNJgGarV2gBovSmbmxt0sLCiFCImnQAIrS4gafYaslZXaCFloEq3Z6jWGizUO4nqPRuMhli0akGEQhxH01iM6Rqx9bQozHcB7ygRK80PyD6wbNGPhweG8vFN0MCaYoGd4EcoJZhYuoo3wGWgKDo2LF2CGB0QKDVmBgdJ1ZMGYrqKiuywgAgKxGFRaZgoRqchXneqqPB+F8BzKCKshrYqow+w2MT+sWEDhjqgmxKtU9utDLYl8EZQFMGTCItOhW1AE1CsiA4zqkdJQAw1QBgQMswYRJ1IV8nA8jL1/fZAPfOoHDkMy3Ao3TLzkiCmRA0hAA==";
      },
      899: (e, t, n) => {
        e.exports = n.p + "fonts/9471c4.eot";
      },
      765: (e, t, n) => {
        e.exports = n.p + "fonts/631a47.svg";
      },
      288: (e, t, n) => {
        e.exports = n.p + "fonts/c4226d.ttf";
      },
      503: (e, t, n) => {
        e.exports = n.p + "fonts/9cb43d.woff";
      },
    },
    t = {};
  function n(r) {
    var o = t[r];
    if (void 0 !== o) return o.exports;
    var a = (t[r] = { id: r, exports: {} });
    return e[r](a, a.exports, n), a.exports;
  }
  (n.m = e),
    (n.n = (e) => {
      var t = e && e.__esModule ? () => e.default : () => e;
      return n.d(t, { a: t }), t;
    }),
    (n.d = (e, t) => {
      for (var r in t)
        n.o(t, r) &&
          !n.o(e, r) &&
          Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
    }),
    (n.g = (function () {
      if ("object" == typeof globalThis) return globalThis;
      try {
        return this || new Function("return this")();
      } catch (e) {
        if ("object" == typeof window) return window;
      }
    })()),
    (n.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
    (() => {
      var e;
      n.g.importScripts && (e = n.g.location + "");
      var t = n.g.document;
      if (!e && t && (t.currentScript && (e = t.currentScript.src), !e)) {
        var r = t.getElementsByTagName("script");
        r.length && (e = r[r.length - 1].src);
      }
      if (!e)
        throw new Error(
          "Automatic publicPath is not supported in this browser"
        );
      (e = e
        .replace(/#.*$/, "")
        .replace(/\?.*$/, "")
        .replace(/\/[^\/]+$/, "/")),
        (n.p = e);
    })(),
    (n.b = document.baseURI || self.location.href),
    (n.nc = void 0),
    (() => {
      var e = n(379),
        t = n.n(e),
        r = n(795),
        o = n.n(r),
        a = n(569),
        i = n.n(a),
        s = n(565),
        c = n.n(s),
        l = n(216),
        u = n.n(l),
        f = n(589),
        p = n.n(f),
        d = n(771),
        h = {};
      (h.styleTagTransform = p()),
        (h.setAttributes = c()),
        (h.insert = i().bind(null, "head")),
        (h.domAPI = o()),
        (h.insertStyleElement = u()),
        t()(d.Z, h),
        d.Z && d.Z.locals && d.Z.locals;
      var A = n(575),
        m = {};
      (m.styleTagTransform = p()),
        (m.setAttributes = c()),
        (m.insert = i().bind(null, "head")),
        (m.domAPI = o()),
        (m.insertStyleElement = u()),
        t()(A.Z, m),
        A.Z && A.Z.locals && A.Z.locals;
      const v = n.p + "images/37ece4.gif";
      var g = n(734),
        b = {};
      (b.styleTagTransform = p()),
        (b.setAttributes = c()),
        (b.insert = i().bind(null, "head")),
        (b.domAPI = o()),
        (b.insertStyleElement = u()),
        t()(g.Z, b),
        g.Z && g.Z.locals && g.Z.locals,
        console.log("tab逻辑执行"),
        console.log("marquee逻辑执行"),
        console.log(function () {
          console.log("你好");
        });
      var y = document.createElement("img");
      (y.src = v), document.body.appendChild(y);
    })();
})();
