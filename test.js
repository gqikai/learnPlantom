!function () {
    var requirejs, require, define;
    !function (a) {
        function b(a, b) {
            return r.call(a, b)
        }

        function c(a, b) {
            var c, d, e, f, g, h, i, j, k, l, m, n = b && b.split("/"), o = p.map, q = o && o["*"] || {};
            if (a && "." === a.charAt(0))if (b) {
                for (n = n.slice(0, n.length - 1), a = a.split("/"), g = a.length - 1, p.nodeIdCompat && t.test(a[g]) && (a[g] = a[g].replace(t, "")), a = n.concat(a), k = 0; k < a.length; k += 1)if (m = a[k], "." === m)a.splice(k, 1), k -= 1; else if (".." === m) {
                    if (1 === k && (".." === a[2] || ".." === a[0]))break;
                    k > 0 && (a.splice(k - 1, 2), k -= 2)
                }
                a = a.join("/")
            } else 0 === a.indexOf("./") && (a = a.substring(2));
            if ((n || q) && o) {
                for (c = a.split("/"), k = c.length; k > 0; k -= 1) {
                    if (d = c.slice(0, k).join("/"), n)for (l = n.length; l > 0; l -= 1)if (e = o[n.slice(0, l).join("/")], e && (e = e[d])) {
                        f = e, h = k;
                        break
                    }
                    if (f)break;
                    !i && q && q[d] && (i = q[d], j = k)
                }
                !f && i && (f = i, h = j), f && (c.splice(0, h, f), a = c.join("/"))
            }
            return a
        }

        function d(b, c) {
            return function () {
                return k.apply(a, s.call(arguments, 0).concat([b, c]))
            }
        }

        function e(a) {
            return function (b) {
                return c(b, a)
            }
        }

        function f(a) {
            return function (b) {
                n[a] = b
            }
        }

        function g(c) {
            if (b(o, c)) {
                var d = o[c];
                delete o[c], q[c] = !0, j.apply(a, d)
            }
            if (!b(n, c) && !b(q, c))throw new Error("No " + c);
            return n[c]
        }

        function h(a) {
            var b, c = a ? a.indexOf("!") : -1;
            return c > -1 && (b = a.substring(0, c), a = a.substring(c + 1, a.length)), [b, a]
        }

        function i(a) {
            return function () {
                return p && p.config && p.config[a] || {}
            }
        }

        var j, k, l, m, n = {}, o = {}, p = {}, q = {}, r = Object.prototype.hasOwnProperty, s = [].slice, t = /\.js$/;
        l = function (a, b) {
            var d, f = h(a), i = f[0];
            return a = f[1], i && (i = c(i, b), d = g(i)), i ? a = d && d.normalize ? d.normalize(a, e(b)) : c(a, b) : (a = c(a, b), f = h(a), i = f[0], a = f[1], i && (d = g(i))), {
                f: i ? i + "!" + a : a,
                n: a,
                pr: i,
                p: d
            }
        }, m = {
            require: function (a) {
                return d(a)
            }, exports: function (a) {
                var b = n[a];
                return "undefined" != typeof b ? b : n[a] = {}
            }, module: function (a) {
                return {id: a, uri: "", exports: n[a], config: i(a)}
            }
        }, j = function (c, e, h, i) {
            var j, k, p, r, s, t, u = [], v = typeof h;
            if (i = i || c, "undefined" === v || "function" === v) {
                for (e = !e.length && h.length ? ["require", "exports", "module"] : e, s = 0; s < e.length; s += 1)if (r = l(e[s], i), k = r.f, "require" === k)u[s] = m.require(c); else if ("exports" === k)u[s] = m.exports(c), t = !0; else if ("module" === k)j = u[s] = m.module(c); else if (b(n, k) || b(o, k) || b(q, k))u[s] = g(k); else {
                    if (!r.p)throw new Error(c + " missing " + k);
                    r.p.load(r.n, d(i, !0), f(k), {}), u[s] = n[k]
                }
                p = h ? h.apply(n[c], u) : void 0, c && (j && j.exports !== a && j.exports !== n[c] ? n[c] = j.exports : p === a && t || (n[c] = p))
            } else c && (n[c] = h)
        }, requirejs = require = k = function (b, c, d, e, f) {
            if ("string" == typeof b)return m[b] ? m[b](c) : g(l(b, c).f);
            if (!b.splice) {
                if (p = b, p.deps && k(p.deps, p.callback), !c)return;
                c.splice ? (b = c, c = d, d = null) : b = a
            }
            return c = c || function () {
                }, "function" == typeof d && (d = e, e = f), e ? j(a, b, c, d) : setTimeout(function () {
                j(a, b, c, d)
            }, 4), k
        }, k.config = function (a) {
            return k(a)
        }, requirejs._defined = n, define = function (a, c, d) {
            c.splice || (d = c, c = []), b(n, a) || b(o, a) || (o[a] = [a, c, d])
        }, define.amd = {jQuery: !0}
    }(), define("almond/almond", function () {
    }), define("config", [], function () {
        return {
            CODE_TYPE: "deploy",
            CONFIG_VERSION: "0.3",
            CODE_VERSION: "20140519-0250",
            PLANTFORM_NAME: "山东省教师教育网",
            COOKIE_AUTH_NAME: "userInfo",
            APP: {
                ACCOUNTCENTER: "//id.qlteacher.com/",
                BLOG: "//blog.qlteacher.com/",
                COURSE: "//course.qlteacher.com/",
                EMOTION: "//emotion.qlteacher.com/",
                HISTORY: "//history.qlteacher.com/",
                PORTAL: "//portal.qlteacher.com/",
                PROJECT: "//project.qlteacher.com/",
                QA: "//qa.qlteacher.com/",
                RESOURCE: "//resource.qlteacher.com/",
                SURVEY: "//survey.qlteacher.com/",
                TEACHER: "//teacher.qlteacher.com/",
                ZONE: "//zone.qlteacher.com/"
            },
            SITE_NAME: "帐号中心",
            SITE_DOMAIN: "//id.qlteacher.com/",
            DATA_PREFIX: "dapi",
            TEST_DATA_DOMAIN: "//127.0.0.1:14422/"
        }
    }), function (a, b) {
        "object" == typeof module && "object" == typeof module.exports ? module.exports = a.document ? b(a, !0) : function (a) {
            if (!a.document)throw new Error("jQuery requires a window with a document");
            return b(a)
        } : b(a)
    }("undefined" != typeof window ? window : this, function (a, b) {
        function c(a) {
            var b = a.length, c = fa.type(a);
            return "function" === c || fa.isWindow(a) ? !1 : 1 === a.nodeType && b ? !0 : "array" === c || 0 === b || "number" == typeof b && b > 0 && b - 1 in a
        }

        function d(a, b, c) {
            if (fa.isFunction(b))return fa.grep(a, function (a, d) {
                return !!b.call(a, d, a) !== c
            });
            if (b.nodeType)return fa.grep(a, function (a) {
                return a === b !== c
            });
            if ("string" == typeof b) {
                if (na.test(b))return fa.filter(b, a, c);
                b = fa.filter(b, a)
            }
            return fa.grep(a, function (a) {
                return fa.inArray(a, b) >= 0 !== c
            })
        }

        function e(a, b) {
            do a = a[b]; while (a && 1 !== a.nodeType);
            return a
        }

        function f(a) {
            var b = va[a] = {};
            return fa.each(a.match(ua) || [], function (a, c) {
                b[c] = !0
            }), b
        }

        function g() {
            pa.addEventListener ? (pa.removeEventListener("DOMContentLoaded", h, !1), a.removeEventListener("load", h, !1)) : (pa.detachEvent("onreadystatechange", h), a.detachEvent("onload", h))
        }

        function h() {
            (pa.addEventListener || "load" === event.type || "complete" === pa.readyState) && (g(), fa.ready())
        }

        function i(a, b, c) {
            if (void 0 === c && 1 === a.nodeType) {
                var d = "data-" + b.replace(Aa, "-$1").toLowerCase();
                if (c = a.getAttribute(d), "string" == typeof c) {
                    try {
                        c = "true" === c ? !0 : "false" === c ? !1 : "null" === c ? null : +c + "" === c ? +c : za.test(c) ? fa.parseJSON(c) : c
                    } catch (e) {
                    }
                    fa.data(a, b, c)
                } else c = void 0
            }
            return c
        }

        function j(a) {
            var b;
            for (b in a)if (("data" !== b || !fa.isEmptyObject(a[b])) && "toJSON" !== b)return !1;
            return !0
        }

        function k(a, b, c, d) {
            if (fa.acceptData(a)) {
                var e, f, g = fa.expando, h = a.nodeType, i = h ? fa.cache : a, j = h ? a[g] : a[g] && g;
                if (j && i[j] && (d || i[j].data) || void 0 !== c || "string" != typeof b)return j || (j = h ? a[g] = W.pop() || fa.guid++ : g), i[j] || (i[j] = h ? {} : {toJSON: fa.noop}), ("object" == typeof b || "function" == typeof b) && (d ? i[j] = fa.extend(i[j], b) : i[j].data = fa.extend(i[j].data, b)), f = i[j], d || (f.data || (f.data = {}), f = f.data), void 0 !== c && (f[fa.camelCase(b)] = c), "string" == typeof b ? (e = f[b], null == e && (e = f[fa.camelCase(b)])) : e = f, e
            }
        }

        function l(a, b, c) {
            if (fa.acceptData(a)) {
                var d, e, f = a.nodeType, g = f ? fa.cache : a, h = f ? a[fa.expando] : fa.expando;
                if (g[h]) {
                    if (b && (d = c ? g[h] : g[h].data)) {
                        fa.isArray(b) ? b = b.concat(fa.map(b, fa.camelCase)) : b in d ? b = [b] : (b = fa.camelCase(b), b = b in d ? [b] : b.split(" ")), e = b.length;
                        for (; e--;)delete d[b[e]];
                        if (c ? !j(d) : !fa.isEmptyObject(d))return
                    }
                    (c || (delete g[h].data, j(g[h]))) && (f ? fa.cleanData([a], !0) : da.deleteExpando || g != g.window ? delete g[h] : g[h] = null)
                }
            }
        }

        function m() {
            return !0
        }

        function n() {
            return !1
        }

        function o() {
            try {
                return pa.activeElement
            } catch (a) {
            }
        }

        function p(a) {
            var b = La.split("|"), c = a.createDocumentFragment();
            if (c.createElement)for (; b.length;)c.createElement(b.pop());
            return c
        }

        function q(a, b) {
            var c, d, e = 0, f = typeof a.getElementsByTagName !== ya ? a.getElementsByTagName(b || "*") : typeof a.querySelectorAll !== ya ? a.querySelectorAll(b || "*") : void 0;
            if (!f)for (f = [], c = a.childNodes || a; null != (d = c[e]); e++)!b || fa.nodeName(d, b) ? f.push(d) : fa.merge(f, q(d, b));
            return void 0 === b || b && fa.nodeName(a, b) ? fa.merge([a], f) : f
        }

        function r(a) {
            Fa.test(a.type) && (a.defaultChecked = a.checked)
        }

        function s(a, b) {
            return fa.nodeName(a, "table") && fa.nodeName(11 !== b.nodeType ? b : b.firstChild, "tr") ? a.getElementsByTagName("tbody")[0] || a.appendChild(a.ownerDocument.createElement("tbody")) : a
        }

        function t(a) {
            return a.type = (null !== fa.find.attr(a, "type")) + "/" + a.type, a
        }

        function u(a) {
            var b = Wa.exec(a.type);
            return b ? a.type = b[1] : a.removeAttribute("type"), a
        }

        function v(a, b) {
            for (var c, d = 0; null != (c = a[d]); d++)fa._data(c, "globalEval", !b || fa._data(b[d], "globalEval"))
        }

        function w(a, b) {
            if (1 === b.nodeType && fa.hasData(a)) {
                var c, d, e, f = fa._data(a), g = fa._data(b, f), h = f.events;
                if (h) {
                    delete g.handle, g.events = {};
                    for (c in h)for (d = 0, e = h[c].length; e > d; d++)fa.event.add(b, c, h[c][d])
                }
                g.data && (g.data = fa.extend({}, g.data))
            }
        }

        function x(a, b) {
            var c, d, e;
            if (1 === b.nodeType) {
                if (c = b.nodeName.toLowerCase(), !da.noCloneEvent && b[fa.expando]) {
                    e = fa._data(b);
                    for (d in e.events)fa.removeEvent(b, d, e.handle);
                    b.removeAttribute(fa.expando)
                }
                "script" === c && b.text !== a.text ? (t(b).text = a.text, u(b)) : "object" === c ? (b.parentNode && (b.outerHTML = a.outerHTML), da.html5Clone && a.innerHTML && !fa.trim(b.innerHTML) && (b.innerHTML = a.innerHTML)) : "input" === c && Fa.test(a.type) ? (b.defaultChecked = b.checked = a.checked, b.value !== a.value && (b.value = a.value)) : "option" === c ? b.defaultSelected = b.selected = a.defaultSelected : ("input" === c || "textarea" === c) && (b.defaultValue = a.defaultValue)
            }
        }

        function y(b, c) {
            var d = fa(c.createElement(b)).appendTo(c.body), e = a.getDefaultComputedStyle ? a.getDefaultComputedStyle(d[0]).display : fa.css(d[0], "display");
            return d.detach(), e
        }

        function z(a) {
            var b = pa, c = ab[a];
            return c || (c = y(a, b), "none" !== c && c || (_a = (_a || fa("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement), b = (_a[0].contentWindow || _a[0].contentDocument).document, b.write(), b.close(), c = y(a, b), _a.detach()), ab[a] = c), c
        }

        function A(a, b) {
            return {
                get: function () {
                    var c = a();
                    if (null != c)return c ? void delete this.get : (this.get = b).apply(this, arguments)
                }
            }
        }

        function B(a, b) {
            if (b in a)return b;
            for (var c = b.charAt(0).toUpperCase() + b.slice(1), d = b, e = nb.length; e--;)if (b = nb[e] + c, b in a)return b;
            return d
        }

        function C(a, b) {
            for (var c, d, e, f = [], g = 0, h = a.length; h > g; g++)d = a[g], d.style && (f[g] = fa._data(d, "olddisplay"), c = d.style.display, b ? (f[g] || "none" !== c || (d.style.display = ""), "" === d.style.display && Da(d) && (f[g] = fa._data(d, "olddisplay", z(d.nodeName)))) : f[g] || (e = Da(d), (c && "none" !== c || !e) && fa._data(d, "olddisplay", e ? c : fa.css(d, "display"))));
            for (g = 0; h > g; g++)d = a[g], d.style && (b && "none" !== d.style.display && "" !== d.style.display || (d.style.display = b ? f[g] || "" : "none"));
            return a
        }

        function D(a, b, c) {
            var d = jb.exec(b);
            return d ? Math.max(0, d[1] - (c || 0)) + (d[2] || "px") : b
        }

        function E(a, b, c, d, e) {
            for (var f = c === (d ? "border" : "content") ? 4 : "width" === b ? 1 : 0, g = 0; 4 > f; f += 2)"margin" === c && (g += fa.css(a, c + Ca[f], !0, e)), d ? ("content" === c && (g -= fa.css(a, "padding" + Ca[f], !0, e)), "margin" !== c && (g -= fa.css(a, "border" + Ca[f] + "Width", !0, e))) : (g += fa.css(a, "padding" + Ca[f], !0, e), "padding" !== c && (g += fa.css(a, "border" + Ca[f] + "Width", !0, e)));
            return g
        }

        function F(a, b, c) {
            var d = !0, e = "width" === b ? a.offsetWidth : a.offsetHeight, f = bb(a), g = da.boxSizing() && "border-box" === fa.css(a, "boxSizing", !1, f);
            if (0 >= e || null == e) {
                if (e = cb(a, b, f), (0 > e || null == e) && (e = a.style[b]), eb.test(e))return e;
                d = g && (da.boxSizingReliable() || e === a.style[b]), e = parseFloat(e) || 0
            }
            return e + E(a, b, c || (g ? "border" : "content"), d, f) + "px"
        }

        function G(a, b, c, d, e) {
            return new G.prototype.init(a, b, c, d, e)
        }

        function H() {
            return setTimeout(function () {
                ob = void 0
            }), ob = fa.now()
        }

        function I(a, b) {
            var c, d = {height: a}, e = 0;
            for (b = b ? 1 : 0; 4 > e; e += 2 - b)c = Ca[e], d["margin" + c] = d["padding" + c] = a;
            return b && (d.opacity = d.width = a), d
        }

        function J(a, b, c) {
            for (var d, e = (ub[b] || []).concat(ub["*"]), f = 0, g = e.length; g > f; f++)if (d = e[f].call(c, b, a))return d
        }

        function K(a, b, c) {
            var d, e, f, g, h, i, j, k, l = this, m = {}, n = a.style, o = a.nodeType && Da(a), p = fa._data(a, "fxshow");
            c.queue || (h = fa._queueHooks(a, "fx"), null == h.unqueued && (h.unqueued = 0, i = h.empty.fire, h.empty.fire = function () {
                h.unqueued || i()
            }), h.unqueued++, l.always(function () {
                l.always(function () {
                    h.unqueued--, fa.queue(a, "fx").length || h.empty.fire()
                })
            })), 1 === a.nodeType && ("height" in b || "width" in b) && (c.overflow = [n.overflow, n.overflowX, n.overflowY], j = fa.css(a, "display"), k = z(a.nodeName), "none" === j && (j = k), "inline" === j && "none" === fa.css(a, "float") && (da.inlineBlockNeedsLayout && "inline" !== k ? n.zoom = 1 : n.display = "inline-block")), c.overflow && (n.overflow = "hidden", da.shrinkWrapBlocks() || l.always(function () {
                n.overflow = c.overflow[0], n.overflowX = c.overflow[1], n.overflowY = c.overflow[2]
            }));
            for (d in b)if (e = b[d], qb.exec(e)) {
                if (delete b[d], f = f || "toggle" === e, e === (o ? "hide" : "show")) {
                    if ("show" !== e || !p || void 0 === p[d])continue;
                    o = !0
                }
                m[d] = p && p[d] || fa.style(a, d)
            }
            if (!fa.isEmptyObject(m)) {
                p ? "hidden" in p && (o = p.hidden) : p = fa._data(a, "fxshow", {}), f && (p.hidden = !o), o ? fa(a).show() : l.done(function () {
                    fa(a).hide()
                }), l.done(function () {
                    var b;
                    fa._removeData(a, "fxshow");
                    for (b in m)fa.style(a, b, m[b])
                });
                for (d in m)g = J(o ? p[d] : 0, d, l), d in p || (p[d] = g.start, o && (g.end = g.start, g.start = "width" === d || "height" === d ? 1 : 0))
            }
        }

        function L(a, b) {
            var c, d, e, f, g;
            for (c in a)if (d = fa.camelCase(c), e = b[d], f = a[c], fa.isArray(f) && (e = f[1], f = a[c] = f[0]), c !== d && (a[d] = f, delete a[c]), g = fa.cssHooks[d], g && "expand" in g) {
                f = g.expand(f), delete a[d];
                for (c in f)c in a || (a[c] = f[c], b[c] = e)
            } else b[d] = e
        }

        function M(a, b, c) {
            var d, e, f = 0, g = tb.length, h = fa.Deferred().always(function () {
                delete i.elem
            }), i = function () {
                if (e)return !1;
                for (var b = ob || H(), c = Math.max(0, j.startTime + j.duration - b), d = c / j.duration || 0, f = 1 - d, g = 0, i = j.tweens.length; i > g; g++)j.tweens[g].run(f);
                return h.notifyWith(a, [j, f, c]), 1 > f && i ? c : (h.resolveWith(a, [j]), !1)
            }, j = h.promise({
                elem: a,
                props: fa.extend({}, b),
                opts: fa.extend(!0, {specialEasing: {}}, c),
                originalProperties: b,
                originalOptions: c,
                startTime: ob || H(),
                duration: c.duration,
                tweens: [],
                createTween: function (b, c) {
                    var d = fa.Tween(a, j.opts, b, c, j.opts.specialEasing[b] || j.opts.easing);
                    return j.tweens.push(d), d
                },
                stop: function (b) {
                    var c = 0, d = b ? j.tweens.length : 0;
                    if (e)return this;
                    for (e = !0; d > c; c++)j.tweens[c].run(1);
                    return b ? h.resolveWith(a, [j, b]) : h.rejectWith(a, [j, b]), this
                }
            }), k = j.props;
            for (L(k, j.opts.specialEasing); g > f; f++)if (d = tb[f].call(j, a, k, j.opts))return d;
            return fa.map(k, J, j), fa.isFunction(j.opts.start) && j.opts.start.call(a, j), fa.fx.timer(fa.extend(i, {
                elem: a,
                anim: j,
                queue: j.opts.queue
            })), j.progress(j.opts.progress).done(j.opts.done, j.opts.complete).fail(j.opts.fail).always(j.opts.always)
        }

        function N(a) {
            return function (b, c) {
                "string" != typeof b && (c = b, b = "*");
                var d, e = 0, f = b.toLowerCase().match(ua) || [];
                if (fa.isFunction(c))for (; d = f[e++];)"+" === d.charAt(0) ? (d = d.slice(1) || "*", (a[d] = a[d] || []).unshift(c)) : (a[d] = a[d] || []).push(c)
            }
        }

        function O(a, b, c, d) {
            function e(h) {
                var i;
                return f[h] = !0, fa.each(a[h] || [], function (a, h) {
                    var j = h(b, c, d);
                    return "string" != typeof j || g || f[j] ? g ? !(i = j) : void 0 : (b.dataTypes.unshift(j), e(j), !1)
                }), i
            }

            var f = {}, g = a === Sb;
            return e(b.dataTypes[0]) || !f["*"] && e("*")
        }

        function P(a, b) {
            var c, d, e = fa.ajaxSettings.flatOptions || {};
            for (d in b)void 0 !== b[d] && ((e[d] ? a : c || (c = {}))[d] = b[d]);
            return c && fa.extend(!0, a, c), a
        }

        function Q(a, b, c) {
            for (var d, e, f, g, h = a.contents, i = a.dataTypes; "*" === i[0];)i.shift(), void 0 === e && (e = a.mimeType || b.getResponseHeader("Content-Type"));
            if (e)for (g in h)if (h[g] && h[g].test(e)) {
                i.unshift(g);
                break
            }
            if (i[0] in c)f = i[0]; else {
                for (g in c) {
                    if (!i[0] || a.converters[g + " " + i[0]]) {
                        f = g;
                        break
                    }
                    d || (d = g)
                }
                f = f || d
            }
            return f ? (f !== i[0] && i.unshift(f), c[f]) : void 0
        }

        function R(a, b, c, d) {
            var e, f, g, h, i, j = {}, k = a.dataTypes.slice();
            if (k[1])for (g in a.converters)j[g.toLowerCase()] = a.converters[g];
            for (f = k.shift(); f;)if (a.responseFields[f] && (c[a.responseFields[f]] = b), !i && d && a.dataFilter && (b = a.dataFilter(b, a.dataType)), i = f, f = k.shift())if ("*" === f)f = i; else if ("*" !== i && i !== f) {
                if (g = j[i + " " + f] || j["* " + f], !g)for (e in j)if (h = e.split(" "), h[1] === f && (g = j[i + " " + h[0]] || j["* " + h[0]])) {
                    g === !0 ? g = j[e] : j[e] !== !0 && (f = h[0], k.unshift(h[1]));
                    break
                }
                if (g !== !0)if (g && a["throws"])b = g(b); else try {
                    b = g(b)
                } catch (l) {
                    return {state: "parsererror", error: g ? l : "No conversion from " + i + " to " + f}
                }
            }
            return {state: "success", data: b}
        }

        function S(a, b, c, d) {
            var e;
            if (fa.isArray(b))fa.each(b, function (b, e) {
                c || Wb.test(a) ? d(a, e) : S(a + "[" + ("object" == typeof e ? b : "") + "]", e, c, d)
            }); else if (c || "object" !== fa.type(b))d(a, b); else for (e in b)S(a + "[" + e + "]", b[e], c, d)
        }

        function T() {
            try {
                return new a.XMLHttpRequest
            } catch (b) {
            }
        }

        function U() {
            try {
                return new a.ActiveXObject("Microsoft.XMLHTTP")
            } catch (b) {
            }
        }

        function V(a) {
            return fa.isWindow(a) ? a : 9 === a.nodeType ? a.defaultView || a.parentWindow : !1
        }

        var W = [], X = W.slice, Y = W.concat, Z = W.push, $ = W.indexOf, _ = {}, aa = _.toString, ba = _.hasOwnProperty, ca = "".trim, da = {}, ea = "1.11.0", fa = function (a, b) {
            return new fa.fn.init(a, b)
        }, ga = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, ha = /^-ms-/, ia = /-([\da-z])/gi, ja = function (a, b) {
            return b.toUpperCase()
        };
        fa.fn = fa.prototype = {
            jquery: ea, constructor: fa, selector: "", length: 0, toArray: function () {
                return X.call(this)
            }, get: function (a) {
                return null != a ? 0 > a ? this[a + this.length] : this[a] : X.call(this)
            }, pushStack: function (a) {
                var b = fa.merge(this.constructor(), a);
                return b.prevObject = this, b.context = this.context, b
            }, each: function (a, b) {
                return fa.each(this, a, b)
            }, map: function (a) {
                return this.pushStack(fa.map(this, function (b, c) {
                    return a.call(b, c, b)
                }))
            }, slice: function () {
                return this.pushStack(X.apply(this, arguments))
            }, first: function () {
                return this.eq(0)
            }, last: function () {
                return this.eq(-1)
            }, eq: function (a) {
                var b = this.length, c = +a + (0 > a ? b : 0);
                return this.pushStack(c >= 0 && b > c ? [this[c]] : [])
            }, end: function () {
                return this.prevObject || this.constructor(null)
            }, push: Z, sort: W.sort, splice: W.splice
        }, fa.extend = fa.fn.extend = function () {
            var a, b, c, d, e, f, g = arguments[0] || {}, h = 1, i = arguments.length, j = !1;
            for ("boolean" == typeof g && (j = g, g = arguments[h] || {}, h++), "object" == typeof g || fa.isFunction(g) || (g = {}), h === i && (g = this, h--); i > h; h++)if (null != (e = arguments[h]))for (d in e)a = g[d], c = e[d], g !== c && (j && c && (fa.isPlainObject(c) || (b = fa.isArray(c))) ? (b ? (b = !1, f = a && fa.isArray(a) ? a : []) : f = a && fa.isPlainObject(a) ? a : {}, g[d] = fa.extend(j, f, c)) : void 0 !== c && (g[d] = c));
            return g
        }, fa.extend({
            expando: "jQuery" + (ea + Math.random()).replace(/\D/g, ""), isReady: !0, error: function (a) {
                throw new Error(a)
            }, noop: function () {
            }, isFunction: function (a) {
                return "function" === fa.type(a)
            }, isArray: Array.isArray || function (a) {
                return "array" === fa.type(a)
            }, isWindow: function (a) {
                return null != a && a == a.window
            }, isNumeric: function (a) {
                return a - parseFloat(a) >= 0
            }, isEmptyObject: function (a) {
                var b;
                for (b in a)return !1;
                return !0
            }, isPlainObject: function (a) {
                var b;
                if (!a || "object" !== fa.type(a) || a.nodeType || fa.isWindow(a))return !1;
                try {
                    if (a.constructor && !ba.call(a, "constructor") && !ba.call(a.constructor.prototype, "isPrototypeOf"))return !1
                } catch (c) {
                    return !1
                }
                if (da.ownLast)for (b in a)return ba.call(a, b);
                for (b in a);
                return void 0 === b || ba.call(a, b)
            }, type: function (a) {
                return null == a ? a + "" : "object" == typeof a || "function" == typeof a ? _[aa.call(a)] || "object" : typeof a
            }, globalEval: function (b) {
                b && fa.trim(b) && (a.execScript || function (b) {
                    a.eval.call(a, b)
                })(b)
            }, camelCase: function (a) {
                return a.replace(ha, "ms-").replace(ia, ja)
            }, nodeName: function (a, b) {
                return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase()
            }, each: function (a, b, d) {
                var e, f = 0, g = a.length, h = c(a);
                if (d) {
                    if (h)for (; g > f && (e = b.apply(a[f], d), e !== !1); f++); else for (f in a)if (e = b.apply(a[f], d), e === !1)break
                } else if (h)for (; g > f && (e = b.call(a[f], f, a[f]), e !== !1); f++); else for (f in a)if (e = b.call(a[f], f, a[f]), e === !1)break;
                return a
            }, trim: ca && !ca.call("\ufeff ") ? function (a) {
                return null == a ? "" : ca.call(a)
            } : function (a) {
                return null == a ? "" : (a + "").replace(ga, "")
            }, makeArray: function (a, b) {
                var d = b || [];
                return null != a && (c(Object(a)) ? fa.merge(d, "string" == typeof a ? [a] : a) : Z.call(d, a)), d
            }, inArray: function (a, b, c) {
                var d;
                if (b) {
                    if ($)return $.call(b, a, c);
                    for (d = b.length, c = c ? 0 > c ? Math.max(0, d + c) : c : 0; d > c; c++)if (c in b && b[c] === a)return c
                }
                return -1
            }, merge: function (a, b) {
                for (var c = +b.length, d = 0, e = a.length; c > d;)a[e++] = b[d++];
                if (c !== c)for (; void 0 !== b[d];)a[e++] = b[d++];
                return a.length = e, a
            }, grep: function (a, b, c) {
                for (var d, e = [], f = 0, g = a.length, h = !c; g > f; f++)d = !b(a[f], f), d !== h && e.push(a[f]);
                return e
            }, map: function (a, b, d) {
                var e, f = 0, g = a.length, h = c(a), i = [];
                if (h)for (; g > f; f++)e = b(a[f], f, d), null != e && i.push(e); else for (f in a)e = b(a[f], f, d), null != e && i.push(e);
                return Y.apply([], i)
            }, guid: 1, proxy: function (a, b) {
                var c, d, e;
                return "string" == typeof b && (e = a[b], b = a, a = e), fa.isFunction(a) ? (c = X.call(arguments, 2), d = function () {
                    return a.apply(b || this, c.concat(X.call(arguments)))
                }, d.guid = a.guid = a.guid || fa.guid++, d) : void 0
            }, now: function () {
                return +new Date
            }, support: da
        }), fa.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function (a, b) {
            _["[object " + b + "]"] = b.toLowerCase()
        });
        var ka = function (a) {
            function b(a, b, c, d) {
                var e, f, g, h, i, j, l, o, p, q;
                if ((b ? b.ownerDocument || b : O) !== G && F(b), b = b || G, c = c || [], !a || "string" != typeof a)return c;
                if (1 !== (h = b.nodeType) && 9 !== h)return [];
                if (I && !d) {
                    if (e = sa.exec(a))if (g = e[1]) {
                        if (9 === h) {
                            if (f = b.getElementById(g), !f || !f.parentNode)return c;
                            if (f.id === g)return c.push(f), c
                        } else if (b.ownerDocument && (f = b.ownerDocument.getElementById(g)) && M(b, f) && f.id === g)return c.push(f), c
                    } else {
                        if (e[2])return _.apply(c, b.getElementsByTagName(a)), c;
                        if ((g = e[3]) && x.getElementsByClassName && b.getElementsByClassName)return _.apply(c, b.getElementsByClassName(g)), c
                    }
                    if (x.qsa && (!J || !J.test(a))) {
                        if (o = l = N, p = b, q = 9 === h && a, 1 === h && "object" !== b.nodeName.toLowerCase()) {
                            for (j = m(a), (l = b.getAttribute("id")) ? o = l.replace(ua, "\\$&") : b.setAttribute("id", o), o = "[id='" + o + "'] ", i = j.length; i--;)j[i] = o + n(j[i]);
                            p = ta.test(a) && k(b.parentNode) || b, q = j.join(",")
                        }
                        if (q)try {
                            return _.apply(c, p.querySelectorAll(q)), c
                        } catch (r) {
                        } finally {
                            l || b.removeAttribute("id")
                        }
                    }
                }
                return v(a.replace(ia, "$1"), b, c, d)
            }

            function c() {
                function a(c, d) {
                    return b.push(c + " ") > y.cacheLength && delete a[b.shift()], a[c + " "] = d
                }

                var b = [];
                return a
            }

            function d(a) {
                return a[N] = !0, a
            }

            function e(a) {
                var b = G.createElement("div");
                try {
                    return !!a(b)
                } catch (c) {
                    return !1
                } finally {
                    b.parentNode && b.parentNode.removeChild(b), b = null
                }
            }

            function f(a, b) {
                for (var c = a.split("|"), d = a.length; d--;)y.attrHandle[c[d]] = b
            }

            function g(a, b) {
                var c = b && a, d = c && 1 === a.nodeType && 1 === b.nodeType && (~b.sourceIndex || W) - (~a.sourceIndex || W);
                if (d)return d;
                if (c)for (; c = c.nextSibling;)if (c === b)return -1;
                return a ? 1 : -1
            }

            function h(a) {
                return function (b) {
                    var c = b.nodeName.toLowerCase();
                    return "input" === c && b.type === a
                }
            }

            function i(a) {
                return function (b) {
                    var c = b.nodeName.toLowerCase();
                    return ("input" === c || "button" === c) && b.type === a
                }
            }

            function j(a) {
                return d(function (b) {
                    return b = +b, d(function (c, d) {
                        for (var e, f = a([], c.length, b), g = f.length; g--;)c[e = f[g]] && (c[e] = !(d[e] = c[e]))
                    })
                })
            }

            function k(a) {
                return a && typeof a.getElementsByTagName !== V && a
            }

            function l() {
            }

            function m(a, c) {
                var d, e, f, g, h, i, j, k = S[a + " "];
                if (k)return c ? 0 : k.slice(0);
                for (h = a, i = [], j = y.preFilter; h;) {
                    (!d || (e = ja.exec(h))) && (e && (h = h.slice(e[0].length) || h), i.push(f = [])), d = !1, (e = ka.exec(h)) && (d = e.shift(), f.push({
                        value: d,
                        type: e[0].replace(ia, " ")
                    }), h = h.slice(d.length));
                    for (g in y.filter)!(e = oa[g].exec(h)) || j[g] && !(e = j[g](e)) || (d = e.shift(), f.push({
                        value: d,
                        type: g,
                        matches: e
                    }), h = h.slice(d.length));
                    if (!d)break
                }
                return c ? h.length : h ? b.error(a) : S(a, i).slice(0)
            }

            function n(a) {
                for (var b = 0, c = a.length, d = ""; c > b; b++)d += a[b].value;
                return d
            }

            function o(a, b, c) {
                var d = b.dir, e = c && "parentNode" === d, f = Q++;
                return b.first ? function (b, c, f) {
                    for (; b = b[d];)if (1 === b.nodeType || e)return a(b, c, f)
                } : function (b, c, g) {
                    var h, i, j = [P, f];
                    if (g) {
                        for (; b = b[d];)if ((1 === b.nodeType || e) && a(b, c, g))return !0
                    } else for (; b = b[d];)if (1 === b.nodeType || e) {
                        if (i = b[N] || (b[N] = {}), (h = i[d]) && h[0] === P && h[1] === f)return j[2] = h[2];
                        if (i[d] = j, j[2] = a(b, c, g))return !0
                    }
                }
            }

            function p(a) {
                return a.length > 1 ? function (b, c, d) {
                    for (var e = a.length; e--;)if (!a[e](b, c, d))return !1;
                    return !0
                } : a[0]
            }

            function q(a, b, c, d, e) {
                for (var f, g = [], h = 0, i = a.length, j = null != b; i > h; h++)(f = a[h]) && (!c || c(f, d, e)) && (g.push(f), j && b.push(h));
                return g
            }

            function r(a, b, c, e, f, g) {
                return e && !e[N] && (e = r(e)), f && !f[N] && (f = r(f, g)), d(function (d, g, h, i) {
                    var j, k, l, m = [], n = [], o = g.length, p = d || u(b || "*", h.nodeType ? [h] : h, []), r = !a || !d && b ? p : q(p, m, a, h, i), s = c ? f || (d ? a : o || e) ? [] : g : r;
                    if (c && c(r, s, h, i), e)for (j = q(s, n), e(j, [], h, i), k = j.length; k--;)(l = j[k]) && (s[n[k]] = !(r[n[k]] = l));
                    if (d) {
                        if (f || a) {
                            if (f) {
                                for (j = [], k = s.length; k--;)(l = s[k]) && j.push(r[k] = l);
                                f(null, s = [], j, i)
                            }
                            for (k = s.length; k--;)(l = s[k]) && (j = f ? ba.call(d, l) : m[k]) > -1 && (d[j] = !(g[j] = l))
                        }
                    } else s = q(s === g ? s.splice(o, s.length) : s), f ? f(null, g, s, i) : _.apply(g, s)
                })
            }

            function s(a) {
                for (var b, c, d, e = a.length, f = y.relative[a[0].type], g = f || y.relative[" "], h = f ? 1 : 0, i = o(function (a) {
                    return a === b
                }, g, !0), j = o(function (a) {
                    return ba.call(b, a) > -1
                }, g, !0), k = [function (a, c, d) {
                    return !f && (d || c !== C) || ((b = c).nodeType ? i(a, c, d) : j(a, c, d))
                }]; e > h; h++)if (c = y.relative[a[h].type])k = [o(p(k), c)]; else {
                    if (c = y.filter[a[h].type].apply(null, a[h].matches), c[N]) {
                        for (d = ++h; e > d && !y.relative[a[d].type]; d++);
                        return r(h > 1 && p(k), h > 1 && n(a.slice(0, h - 1).concat({value: " " === a[h - 2].type ? "*" : ""})).replace(ia, "$1"), c, d > h && s(a.slice(h, d)), e > d && s(a = a.slice(d)), e > d && n(a))
                    }
                    k.push(c)
                }
                return p(k)
            }

            function t(a, c) {
                var e = c.length > 0, f = a.length > 0, g = function (d, g, h, i, j) {
                    var k, l, m, n = 0, o = "0", p = d && [], r = [], s = C, t = d || f && y.find.TAG("*", j), u = P += null == s ? 1 : Math.random() || .1, v = t.length;
                    for (j && (C = g !== G && g); o !== v && null != (k = t[o]); o++) {
                        if (f && k) {
                            for (l = 0; m = a[l++];)if (m(k, g, h)) {
                                i.push(k);
                                break
                            }
                            j && (P = u)
                        }
                        e && ((k = !m && k) && n--, d && p.push(k))
                    }
                    if (n += o, e && o !== n) {
                        for (l = 0; m = c[l++];)m(p, r, g, h);
                        if (d) {
                            if (n > 0)for (; o--;)p[o] || r[o] || (r[o] = Z.call(i));
                            r = q(r)
                        }
                        _.apply(i, r), j && !d && r.length > 0 && n + c.length > 1 && b.uniqueSort(i)
                    }
                    return j && (P = u, C = s), p
                };
                return e ? d(g) : g
            }

            function u(a, c, d) {
                for (var e = 0, f = c.length; f > e; e++)b(a, c[e], d);
                return d
            }

            function v(a, b, c, d) {
                var e, f, g, h, i, j = m(a);
                if (!d && 1 === j.length) {
                    if (f = j[0] = j[0].slice(0), f.length > 2 && "ID" === (g = f[0]).type && x.getById && 9 === b.nodeType && I && y.relative[f[1].type]) {
                        if (b = (y.find.ID(g.matches[0].replace(va, wa), b) || [])[0], !b)return c;
                        a = a.slice(f.shift().value.length)
                    }
                    for (e = oa.needsContext.test(a) ? 0 : f.length; e-- && (g = f[e], !y.relative[h = g.type]);)if ((i = y.find[h]) && (d = i(g.matches[0].replace(va, wa), ta.test(f[0].type) && k(b.parentNode) || b))) {
                        if (f.splice(e, 1), a = d.length && n(f), !a)return _.apply(c, d), c;
                        break
                    }
                }
                return B(a, j)(d, b, !I, c, ta.test(a) && k(b.parentNode) || b), c
            }

            var w, x, y, z, A, B, C, D, E, F, G, H, I, J, K, L, M, N = "sizzle" + -new Date, O = a.document, P = 0, Q = 0, R = c(), S = c(), T = c(), U = function (a, b) {
                return a === b && (E = !0), 0
            }, V = "undefined", W = 1 << 31, X = {}.hasOwnProperty, Y = [], Z = Y.pop, $ = Y.push, _ = Y.push, aa = Y.slice, ba = Y.indexOf || function (a) {
                    for (var b = 0, c = this.length; c > b; b++)if (this[b] === a)return b;
                    return -1
                }, ca = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", da = "[\\x20\\t\\r\\n\\f]", ea = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+", fa = ea.replace("w", "w#"), ga = "\\[" + da + "*(" + ea + ")" + da + "*(?:([*^$|!~]?=)" + da + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + fa + ")|)|)" + da + "*\\]", ha = ":(" + ea + ")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" + ga.replace(3, 8) + ")*)|.*)\\)|)", ia = new RegExp("^" + da + "+|((?:^|[^\\\\])(?:\\\\.)*)" + da + "+$", "g"), ja = new RegExp("^" + da + "*," + da + "*"), ka = new RegExp("^" + da + "*([>+~]|" + da + ")" + da + "*"), la = new RegExp("=" + da + "*([^\\]'\"]*?)" + da + "*\\]", "g"), ma = new RegExp(ha), na = new RegExp("^" + fa + "$"), oa = {
                ID: new RegExp("^#(" + ea + ")"),
                CLASS: new RegExp("^\\.(" + ea + ")"),
                TAG: new RegExp("^(" + ea.replace("w", "w*") + ")"),
                ATTR: new RegExp("^" + ga),
                PSEUDO: new RegExp("^" + ha),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + da + "*(even|odd|(([+-]|)(\\d*)n|)" + da + "*(?:([+-]|)" + da + "*(\\d+)|))" + da + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + ca + ")$", "i"),
                needsContext: new RegExp("^" + da + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + da + "*((?:-\\d)?\\d*)" + da + "*\\)|)(?=[^-]|$)", "i")
            }, pa = /^(?:input|select|textarea|button)$/i, qa = /^h\d$/i, ra = /^[^{]+\{\s*\[native \w/, sa = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, ta = /[+~]/, ua = /'|\\/g, va = new RegExp("\\\\([\\da-f]{1,6}" + da + "?|(" + da + ")|.)", "ig"), wa = function (a, b, c) {
                var d = "0x" + b - 65536;
                return d !== d || c ? b : 0 > d ? String.fromCharCode(d + 65536) : String.fromCharCode(d >> 10 | 55296, 1023 & d | 56320)
            };
            try {
                _.apply(Y = aa.call(O.childNodes), O.childNodes), Y[O.childNodes.length].nodeType
            } catch (xa) {
                _ = {
                    apply: Y.length ? function (a, b) {
                        $.apply(a, aa.call(b))
                    } : function (a, b) {
                        for (var c = a.length, d = 0; a[c++] = b[d++];);
                        a.length = c - 1
                    }
                }
            }
            x = b.support = {}, A = b.isXML = function (a) {
                var b = a && (a.ownerDocument || a).documentElement;
                return b ? "HTML" !== b.nodeName : !1
            }, F = b.setDocument = function (a) {
                var b, c = a ? a.ownerDocument || a : O, d = c.defaultView;
                return c !== G && 9 === c.nodeType && c.documentElement ? (G = c, H = c.documentElement, I = !A(c), d && d !== d.top && (d.addEventListener ? d.addEventListener("unload", function () {
                    F()
                }, !1) : d.attachEvent && d.attachEvent("onunload", function () {
                    F()
                })), x.attributes = e(function (a) {
                    return a.className = "i", !a.getAttribute("className")
                }), x.getElementsByTagName = e(function (a) {
                    return a.appendChild(c.createComment("")), !a.getElementsByTagName("*").length
                }), x.getElementsByClassName = ra.test(c.getElementsByClassName) && e(function (a) {
                        return a.innerHTML = "<div class='a'></div><div class='a i'></div>", a.firstChild.className = "i", 2 === a.getElementsByClassName("i").length
                    }), x.getById = e(function (a) {
                    return H.appendChild(a).id = N, !c.getElementsByName || !c.getElementsByName(N).length
                }), x.getById ? (y.find.ID = function (a, b) {
                    if (typeof b.getElementById !== V && I) {
                        var c = b.getElementById(a);
                        return c && c.parentNode ? [c] : []
                    }
                }, y.filter.ID = function (a) {
                    var b = a.replace(va, wa);
                    return function (a) {
                        return a.getAttribute("id") === b
                    }
                }) : (delete y.find.ID, y.filter.ID = function (a) {
                    var b = a.replace(va, wa);
                    return function (a) {
                        var c = typeof a.getAttributeNode !== V && a.getAttributeNode("id");
                        return c && c.value === b
                    }
                }), y.find.TAG = x.getElementsByTagName ? function (a, b) {
                    return typeof b.getElementsByTagName !== V ? b.getElementsByTagName(a) : void 0
                } : function (a, b) {
                    var c, d = [], e = 0, f = b.getElementsByTagName(a);
                    if ("*" === a) {
                        for (; c = f[e++];)1 === c.nodeType && d.push(c);
                        return d
                    }
                    return f
                }, y.find.CLASS = x.getElementsByClassName && function (a, b) {
                        return typeof b.getElementsByClassName !== V && I ? b.getElementsByClassName(a) : void 0
                    }, K = [], J = [], (x.qsa = ra.test(c.querySelectorAll)) && (e(function (a) {
                    a.innerHTML = "<select t=''><option selected=''></option></select>", a.querySelectorAll("[t^='']").length && J.push("[*^$]=" + da + "*(?:''|\"\")"), a.querySelectorAll("[selected]").length || J.push("\\[" + da + "*(?:value|" + ca + ")"), a.querySelectorAll(":checked").length || J.push(":checked")
                }), e(function (a) {
                    var b = c.createElement("input");
                    b.setAttribute("type", "hidden"), a.appendChild(b).setAttribute("name", "D"), a.querySelectorAll("[name=d]").length && J.push("name" + da + "*[*^$|!~]?="), a.querySelectorAll(":enabled").length || J.push(":enabled", ":disabled"), a.querySelectorAll("*,:x"), J.push(",.*:")
                })), (x.matchesSelector = ra.test(L = H.webkitMatchesSelector || H.mozMatchesSelector || H.oMatchesSelector || H.msMatchesSelector)) && e(function (a) {
                    x.disconnectedMatch = L.call(a, "div"), L.call(a, "[s!='']:x"), K.push("!=", ha)
                }), J = J.length && new RegExp(J.join("|")), K = K.length && new RegExp(K.join("|")), b = ra.test(H.compareDocumentPosition), M = b || ra.test(H.contains) ? function (a, b) {
                    var c = 9 === a.nodeType ? a.documentElement : a, d = b && b.parentNode;
                    return a === d || !(!d || 1 !== d.nodeType || !(c.contains ? c.contains(d) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(d)))
                } : function (a, b) {
                    if (b)for (; b = b.parentNode;)if (b === a)return !0;
                    return !1
                }, U = b ? function (a, b) {
                    if (a === b)return E = !0, 0;
                    var d = !a.compareDocumentPosition - !b.compareDocumentPosition;
                    return d ? d : (d = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1, 1 & d || !x.sortDetached && b.compareDocumentPosition(a) === d ? a === c || a.ownerDocument === O && M(O, a) ? -1 : b === c || b.ownerDocument === O && M(O, b) ? 1 : D ? ba.call(D, a) - ba.call(D, b) : 0 : 4 & d ? -1 : 1)
                } : function (a, b) {
                    if (a === b)return E = !0, 0;
                    var d, e = 0, f = a.parentNode, h = b.parentNode, i = [a], j = [b];
                    if (!f || !h)return a === c ? -1 : b === c ? 1 : f ? -1 : h ? 1 : D ? ba.call(D, a) - ba.call(D, b) : 0;
                    if (f === h)return g(a, b);
                    for (d = a; d = d.parentNode;)i.unshift(d);
                    for (d = b; d = d.parentNode;)j.unshift(d);
                    for (; i[e] === j[e];)e++;
                    return e ? g(i[e], j[e]) : i[e] === O ? -1 : j[e] === O ? 1 : 0
                }, c) : G
            }, b.matches = function (a, c) {
                return b(a, null, null, c)
            }, b.matchesSelector = function (a, c) {
                if ((a.ownerDocument || a) !== G && F(a), c = c.replace(la, "='$1']"), x.matchesSelector && I && (!K || !K.test(c)) && (!J || !J.test(c)))try {
                    var d = L.call(a, c);
                    if (d || x.disconnectedMatch || a.document && 11 !== a.document.nodeType)return d
                } catch (e) {
                }
                return b(c, G, null, [a]).length > 0
            }, b.contains = function (a, b) {
                return (a.ownerDocument || a) !== G && F(a), M(a, b)
            }, b.attr = function (a, b) {
                (a.ownerDocument || a) !== G && F(a);
                var c = y.attrHandle[b.toLowerCase()], d = c && X.call(y.attrHandle, b.toLowerCase()) ? c(a, b, !I) : void 0;
                return void 0 !== d ? d : x.attributes || !I ? a.getAttribute(b) : (d = a.getAttributeNode(b)) && d.specified ? d.value : null
            }, b.error = function (a) {
                throw new Error("Syntax error, unrecognized expression: " + a)
            }, b.uniqueSort = function (a) {
                var b, c = [], d = 0, e = 0;
                if (E = !x.detectDuplicates, D = !x.sortStable && a.slice(0), a.sort(U), E) {
                    for (; b = a[e++];)b === a[e] && (d = c.push(e));
                    for (; d--;)a.splice(c[d], 1)
                }
                return D = null, a
            }, z = b.getText = function (a) {
                var b, c = "", d = 0, e = a.nodeType;
                if (e) {
                    if (1 === e || 9 === e || 11 === e) {
                        if ("string" == typeof a.textContent)return a.textContent;
                        for (a = a.firstChild; a; a = a.nextSibling)c += z(a)
                    } else if (3 === e || 4 === e)return a.nodeValue
                } else for (; b = a[d++];)c += z(b);
                return c
            }, y = b.selectors = {
                cacheLength: 50,
                createPseudo: d,
                match: oa,
                attrHandle: {},
                find: {},
                relative: {
                    ">": {dir: "parentNode", first: !0},
                    " ": {dir: "parentNode"},
                    "+": {dir: "previousSibling", first: !0},
                    "~": {dir: "previousSibling"}
                },
                preFilter: {
                    ATTR: function (a) {
                        return a[1] = a[1].replace(va, wa), a[3] = (a[4] || a[5] || "").replace(va, wa), "~=" === a[2] && (a[3] = " " + a[3] + " "), a.slice(0, 4)
                    }, CHILD: function (a) {
                        return a[1] = a[1].toLowerCase(), "nth" === a[1].slice(0, 3) ? (a[3] || b.error(a[0]), a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3])), a[5] = +(a[7] + a[8] || "odd" === a[3])) : a[3] && b.error(a[0]), a
                    }, PSEUDO: function (a) {
                        var b, c = !a[5] && a[2];
                        return oa.CHILD.test(a[0]) ? null : (a[3] && void 0 !== a[4] ? a[2] = a[4] : c && ma.test(c) && (b = m(c, !0)) && (b = c.indexOf(")", c.length - b) - c.length) && (a[0] = a[0].slice(0, b), a[2] = c.slice(0, b)), a.slice(0, 3))
                    }
                },
                filter: {
                    TAG: function (a) {
                        var b = a.replace(va, wa).toLowerCase();
                        return "*" === a ? function () {
                            return !0
                        } : function (a) {
                            return a.nodeName && a.nodeName.toLowerCase() === b;
                        }
                    }, CLASS: function (a) {
                        var b = R[a + " "];
                        return b || (b = new RegExp("(^|" + da + ")" + a + "(" + da + "|$)")) && R(a, function (a) {
                                return b.test("string" == typeof a.className && a.className || typeof a.getAttribute !== V && a.getAttribute("class") || "")
                            })
                    }, ATTR: function (a, c, d) {
                        return function (e) {
                            var f = b.attr(e, a);
                            return null == f ? "!=" === c : c ? (f += "", "=" === c ? f === d : "!=" === c ? f !== d : "^=" === c ? d && 0 === f.indexOf(d) : "*=" === c ? d && f.indexOf(d) > -1 : "$=" === c ? d && f.slice(-d.length) === d : "~=" === c ? (" " + f + " ").indexOf(d) > -1 : "|=" === c ? f === d || f.slice(0, d.length + 1) === d + "-" : !1) : !0
                        }
                    }, CHILD: function (a, b, c, d, e) {
                        var f = "nth" !== a.slice(0, 3), g = "last" !== a.slice(-4), h = "of-type" === b;
                        return 1 === d && 0 === e ? function (a) {
                            return !!a.parentNode
                        } : function (b, c, i) {
                            var j, k, l, m, n, o, p = f !== g ? "nextSibling" : "previousSibling", q = b.parentNode, r = h && b.nodeName.toLowerCase(), s = !i && !h;
                            if (q) {
                                if (f) {
                                    for (; p;) {
                                        for (l = b; l = l[p];)if (h ? l.nodeName.toLowerCase() === r : 1 === l.nodeType)return !1;
                                        o = p = "only" === a && !o && "nextSibling"
                                    }
                                    return !0
                                }
                                if (o = [g ? q.firstChild : q.lastChild], g && s) {
                                    for (k = q[N] || (q[N] = {}), j = k[a] || [], n = j[0] === P && j[1], m = j[0] === P && j[2], l = n && q.childNodes[n]; l = ++n && l && l[p] || (m = n = 0) || o.pop();)if (1 === l.nodeType && ++m && l === b) {
                                        k[a] = [P, n, m];
                                        break
                                    }
                                } else if (s && (j = (b[N] || (b[N] = {}))[a]) && j[0] === P)m = j[1]; else for (; (l = ++n && l && l[p] || (m = n = 0) || o.pop()) && ((h ? l.nodeName.toLowerCase() !== r : 1 !== l.nodeType) || !++m || (s && ((l[N] || (l[N] = {}))[a] = [P, m]), l !== b)););
                                return m -= e, m === d || m % d === 0 && m / d >= 0
                            }
                        }
                    }, PSEUDO: function (a, c) {
                        var e, f = y.pseudos[a] || y.setFilters[a.toLowerCase()] || b.error("unsupported pseudo: " + a);
                        return f[N] ? f(c) : f.length > 1 ? (e = [a, a, "", c], y.setFilters.hasOwnProperty(a.toLowerCase()) ? d(function (a, b) {
                            for (var d, e = f(a, c), g = e.length; g--;)d = ba.call(a, e[g]), a[d] = !(b[d] = e[g])
                        }) : function (a) {
                            return f(a, 0, e)
                        }) : f
                    }
                },
                pseudos: {
                    not: d(function (a) {
                        var b = [], c = [], e = B(a.replace(ia, "$1"));
                        return e[N] ? d(function (a, b, c, d) {
                            for (var f, g = e(a, null, d, []), h = a.length; h--;)(f = g[h]) && (a[h] = !(b[h] = f))
                        }) : function (a, d, f) {
                            return b[0] = a, e(b, null, f, c), !c.pop()
                        }
                    }), has: d(function (a) {
                        return function (c) {
                            return b(a, c).length > 0
                        }
                    }), contains: d(function (a) {
                        return function (b) {
                            return (b.textContent || b.innerText || z(b)).indexOf(a) > -1
                        }
                    }), lang: d(function (a) {
                        return na.test(a || "") || b.error("unsupported lang: " + a), a = a.replace(va, wa).toLowerCase(), function (b) {
                            var c;
                            do if (c = I ? b.lang : b.getAttribute("xml:lang") || b.getAttribute("lang"))return c = c.toLowerCase(), c === a || 0 === c.indexOf(a + "-"); while ((b = b.parentNode) && 1 === b.nodeType);
                            return !1
                        }
                    }), target: function (b) {
                        var c = a.location && a.location.hash;
                        return c && c.slice(1) === b.id
                    }, root: function (a) {
                        return a === H
                    }, focus: function (a) {
                        return a === G.activeElement && (!G.hasFocus || G.hasFocus()) && !!(a.type || a.href || ~a.tabIndex)
                    }, enabled: function (a) {
                        return a.disabled === !1
                    }, disabled: function (a) {
                        return a.disabled === !0
                    }, checked: function (a) {
                        var b = a.nodeName.toLowerCase();
                        return "input" === b && !!a.checked || "option" === b && !!a.selected
                    }, selected: function (a) {
                        return a.parentNode && a.parentNode.selectedIndex, a.selected === !0
                    }, empty: function (a) {
                        for (a = a.firstChild; a; a = a.nextSibling)if (a.nodeType < 6)return !1;
                        return !0
                    }, parent: function (a) {
                        return !y.pseudos.empty(a)
                    }, header: function (a) {
                        return qa.test(a.nodeName)
                    }, input: function (a) {
                        return pa.test(a.nodeName)
                    }, button: function (a) {
                        var b = a.nodeName.toLowerCase();
                        return "input" === b && "button" === a.type || "button" === b
                    }, text: function (a) {
                        var b;
                        return "input" === a.nodeName.toLowerCase() && "text" === a.type && (null == (b = a.getAttribute("type")) || "text" === b.toLowerCase())
                    }, first: j(function () {
                        return [0]
                    }), last: j(function (a, b) {
                        return [b - 1]
                    }), eq: j(function (a, b, c) {
                        return [0 > c ? c + b : c]
                    }), even: j(function (a, b) {
                        for (var c = 0; b > c; c += 2)a.push(c);
                        return a
                    }), odd: j(function (a, b) {
                        for (var c = 1; b > c; c += 2)a.push(c);
                        return a
                    }), lt: j(function (a, b, c) {
                        for (var d = 0 > c ? c + b : c; --d >= 0;)a.push(d);
                        return a
                    }), gt: j(function (a, b, c) {
                        for (var d = 0 > c ? c + b : c; ++d < b;)a.push(d);
                        return a
                    })
                }
            }, y.pseudos.nth = y.pseudos.eq;
            for (w in{radio: !0, checkbox: !0, file: !0, password: !0, image: !0})y.pseudos[w] = h(w);
            for (w in{submit: !0, reset: !0})y.pseudos[w] = i(w);
            return l.prototype = y.filters = y.pseudos, y.setFilters = new l, B = b.compile = function (a, b) {
                var c, d = [], e = [], f = T[a + " "];
                if (!f) {
                    for (b || (b = m(a)), c = b.length; c--;)f = s(b[c]), f[N] ? d.push(f) : e.push(f);
                    f = T(a, t(e, d))
                }
                return f
            }, x.sortStable = N.split("").sort(U).join("") === N, x.detectDuplicates = !!E, F(), x.sortDetached = e(function (a) {
                return 1 & a.compareDocumentPosition(G.createElement("div"))
            }), e(function (a) {
                return a.innerHTML = "<a href='#'></a>", "#" === a.firstChild.getAttribute("href")
            }) || f("type|href|height|width", function (a, b, c) {
                return c ? void 0 : a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2)
            }), x.attributes && e(function (a) {
                return a.innerHTML = "<input/>", a.firstChild.setAttribute("value", ""), "" === a.firstChild.getAttribute("value")
            }) || f("value", function (a, b, c) {
                return c || "input" !== a.nodeName.toLowerCase() ? void 0 : a.defaultValue
            }), e(function (a) {
                return null == a.getAttribute("disabled")
            }) || f(ca, function (a, b, c) {
                var d;
                return c ? void 0 : a[b] === !0 ? b.toLowerCase() : (d = a.getAttributeNode(b)) && d.specified ? d.value : null
            }), b
        }(a);
        fa.find = ka, fa.expr = ka.selectors, fa.expr[":"] = fa.expr.pseudos, fa.unique = ka.uniqueSort, fa.text = ka.getText, fa.isXMLDoc = ka.isXML, fa.contains = ka.contains;
        var la = fa.expr.match.needsContext, ma = /^<(\w+)\s*\/?>(?:<\/\1>|)$/, na = /^.[^:#\[\.,]*$/;
        fa.filter = function (a, b, c) {
            var d = b[0];
            return c && (a = ":not(" + a + ")"), 1 === b.length && 1 === d.nodeType ? fa.find.matchesSelector(d, a) ? [d] : [] : fa.find.matches(a, fa.grep(b, function (a) {
                return 1 === a.nodeType
            }))
        }, fa.fn.extend({
            find: function (a) {
                var b, c = [], d = this, e = d.length;
                if ("string" != typeof a)return this.pushStack(fa(a).filter(function () {
                    for (b = 0; e > b; b++)if (fa.contains(d[b], this))return !0
                }));
                for (b = 0; e > b; b++)fa.find(a, d[b], c);
                return c = this.pushStack(e > 1 ? fa.unique(c) : c), c.selector = this.selector ? this.selector + " " + a : a, c
            }, filter: function (a) {
                return this.pushStack(d(this, a || [], !1))
            }, not: function (a) {
                return this.pushStack(d(this, a || [], !0))
            }, is: function (a) {
                return !!d(this, "string" == typeof a && la.test(a) ? fa(a) : a || [], !1).length
            }
        });
        var oa, pa = a.document, qa = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/, ra = fa.fn.init = function (a, b) {
            var c, d;
            if (!a)return this;
            if ("string" == typeof a) {
                if (c = "<" === a.charAt(0) && ">" === a.charAt(a.length - 1) && a.length >= 3 ? [null, a, null] : qa.exec(a), !c || !c[1] && b)return !b || b.jquery ? (b || oa).find(a) : this.constructor(b).find(a);
                if (c[1]) {
                    if (b = b instanceof fa ? b[0] : b, fa.merge(this, fa.parseHTML(c[1], b && b.nodeType ? b.ownerDocument || b : pa, !0)), ma.test(c[1]) && fa.isPlainObject(b))for (c in b)fa.isFunction(this[c]) ? this[c](b[c]) : this.attr(c, b[c]);
                    return this
                }
                if (d = pa.getElementById(c[2]), d && d.parentNode) {
                    if (d.id !== c[2])return oa.find(a);
                    this.length = 1, this[0] = d
                }
                return this.context = pa, this.selector = a, this
            }
            return a.nodeType ? (this.context = this[0] = a, this.length = 1, this) : fa.isFunction(a) ? "undefined" != typeof oa.ready ? oa.ready(a) : a(fa) : (void 0 !== a.selector && (this.selector = a.selector, this.context = a.context), fa.makeArray(a, this))
        };
        ra.prototype = fa.fn, oa = fa(pa);
        var sa = /^(?:parents|prev(?:Until|All))/, ta = {children: !0, contents: !0, next: !0, prev: !0};
        fa.extend({
            dir: function (a, b, c) {
                for (var d = [], e = a[b]; e && 9 !== e.nodeType && (void 0 === c || 1 !== e.nodeType || !fa(e).is(c));)1 === e.nodeType && d.push(e), e = e[b];
                return d
            }, sibling: function (a, b) {
                for (var c = []; a; a = a.nextSibling)1 === a.nodeType && a !== b && c.push(a);
                return c
            }
        }), fa.fn.extend({
            has: function (a) {
                var b, c = fa(a, this), d = c.length;
                return this.filter(function () {
                    for (b = 0; d > b; b++)if (fa.contains(this, c[b]))return !0
                })
            }, closest: function (a, b) {
                for (var c, d = 0, e = this.length, f = [], g = la.test(a) || "string" != typeof a ? fa(a, b || this.context) : 0; e > d; d++)for (c = this[d]; c && c !== b; c = c.parentNode)if (c.nodeType < 11 && (g ? g.index(c) > -1 : 1 === c.nodeType && fa.find.matchesSelector(c, a))) {
                    f.push(c);
                    break
                }
                return this.pushStack(f.length > 1 ? fa.unique(f) : f)
            }, index: function (a) {
                return a ? "string" == typeof a ? fa.inArray(this[0], fa(a)) : fa.inArray(a.jquery ? a[0] : a, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
            }, add: function (a, b) {
                return this.pushStack(fa.unique(fa.merge(this.get(), fa(a, b))))
            }, addBack: function (a) {
                return this.add(null == a ? this.prevObject : this.prevObject.filter(a))
            }
        }), fa.each({
            parent: function (a) {
                var b = a.parentNode;
                return b && 11 !== b.nodeType ? b : null
            }, parents: function (a) {
                return fa.dir(a, "parentNode")
            }, parentsUntil: function (a, b, c) {
                return fa.dir(a, "parentNode", c)
            }, next: function (a) {
                return e(a, "nextSibling")
            }, prev: function (a) {
                return e(a, "previousSibling")
            }, nextAll: function (a) {
                return fa.dir(a, "nextSibling")
            }, prevAll: function (a) {
                return fa.dir(a, "previousSibling")
            }, nextUntil: function (a, b, c) {
                return fa.dir(a, "nextSibling", c)
            }, prevUntil: function (a, b, c) {
                return fa.dir(a, "previousSibling", c)
            }, siblings: function (a) {
                return fa.sibling((a.parentNode || {}).firstChild, a)
            }, children: function (a) {
                return fa.sibling(a.firstChild)
            }, contents: function (a) {
                return fa.nodeName(a, "iframe") ? a.contentDocument || a.contentWindow.document : fa.merge([], a.childNodes)
            }
        }, function (a, b) {
            fa.fn[a] = function (c, d) {
                var e = fa.map(this, b, c);
                return "Until" !== a.slice(-5) && (d = c), d && "string" == typeof d && (e = fa.filter(d, e)), this.length > 1 && (ta[a] || (e = fa.unique(e)), sa.test(a) && (e = e.reverse())), this.pushStack(e)
            }
        });
        var ua = /\S+/g, va = {};
        fa.Callbacks = function (a) {
            a = "string" == typeof a ? va[a] || f(a) : fa.extend({}, a);
            var b, c, d, e, g, h, i = [], j = !a.once && [], k = function (f) {
                for (c = a.memory && f, d = !0, g = h || 0, h = 0, e = i.length, b = !0; i && e > g; g++)if (i[g].apply(f[0], f[1]) === !1 && a.stopOnFalse) {
                    c = !1;
                    break
                }
                b = !1, i && (j ? j.length && k(j.shift()) : c ? i = [] : l.disable())
            }, l = {
                add: function () {
                    if (i) {
                        var d = i.length;
                        !function f(b) {
                            fa.each(b, function (b, c) {
                                var d = fa.type(c);
                                "function" === d ? a.unique && l.has(c) || i.push(c) : c && c.length && "string" !== d && f(c)
                            })
                        }(arguments), b ? e = i.length : c && (h = d, k(c))
                    }
                    return this
                }, remove: function () {
                    return i && fa.each(arguments, function (a, c) {
                        for (var d; (d = fa.inArray(c, i, d)) > -1;)i.splice(d, 1), b && (e >= d && e--, g >= d && g--)
                    }), this
                }, has: function (a) {
                    return a ? fa.inArray(a, i) > -1 : !(!i || !i.length)
                }, empty: function () {
                    return i = [], e = 0, this
                }, disable: function () {
                    return i = j = c = void 0, this
                }, disabled: function () {
                    return !i
                }, lock: function () {
                    return j = void 0, c || l.disable(), this
                }, locked: function () {
                    return !j
                }, fireWith: function (a, c) {
                    return !i || d && !j || (c = c || [], c = [a, c.slice ? c.slice() : c], b ? j.push(c) : k(c)), this
                }, fire: function () {
                    return l.fireWith(this, arguments), this
                }, fired: function () {
                    return !!d
                }
            };
            return l
        }, fa.extend({
            Deferred: function (a) {
                var b = [["resolve", "done", fa.Callbacks("once memory"), "resolved"], ["reject", "fail", fa.Callbacks("once memory"), "rejected"], ["notify", "progress", fa.Callbacks("memory")]], c = "pending", d = {
                    state: function () {
                        return c
                    }, always: function () {
                        return e.done(arguments).fail(arguments), this
                    }, then: function () {
                        var a = arguments;
                        return fa.Deferred(function (c) {
                            fa.each(b, function (b, f) {
                                var g = fa.isFunction(a[b]) && a[b];
                                e[f[1]](function () {
                                    var a = g && g.apply(this, arguments);
                                    a && fa.isFunction(a.promise) ? a.promise().done(c.resolve).fail(c.reject).progress(c.notify) : c[f[0] + "With"](this === d ? c.promise() : this, g ? [a] : arguments)
                                })
                            }), a = null
                        }).promise()
                    }, promise: function (a) {
                        return null != a ? fa.extend(a, d) : d
                    }
                }, e = {};
                return d.pipe = d.then, fa.each(b, function (a, f) {
                    var g = f[2], h = f[3];
                    d[f[1]] = g.add, h && g.add(function () {
                        c = h
                    }, b[1 ^ a][2].disable, b[2][2].lock), e[f[0]] = function () {
                        return e[f[0] + "With"](this === e ? d : this, arguments), this
                    }, e[f[0] + "With"] = g.fireWith
                }), d.promise(e), a && a.call(e, e), e
            }, when: function (a) {
                var b, c, d, e = 0, f = X.call(arguments), g = f.length, h = 1 !== g || a && fa.isFunction(a.promise) ? g : 0, i = 1 === h ? a : fa.Deferred(), j = function (a, c, d) {
                    return function (e) {
                        c[a] = this, d[a] = arguments.length > 1 ? X.call(arguments) : e, d === b ? i.notifyWith(c, d) : --h || i.resolveWith(c, d)
                    }
                };
                if (g > 1)for (b = new Array(g), c = new Array(g), d = new Array(g); g > e; e++)f[e] && fa.isFunction(f[e].promise) ? f[e].promise().done(j(e, d, f)).fail(i.reject).progress(j(e, c, b)) : --h;
                return h || i.resolveWith(d, f), i.promise()
            }
        });
        var wa;
        fa.fn.ready = function (a) {
            return fa.ready.promise().done(a), this
        }, fa.extend({
            isReady: !1, readyWait: 1, holdReady: function (a) {
                a ? fa.readyWait++ : fa.ready(!0)
            }, ready: function (a) {
                if (a === !0 ? !--fa.readyWait : !fa.isReady) {
                    if (!pa.body)return setTimeout(fa.ready);
                    fa.isReady = !0, a !== !0 && --fa.readyWait > 0 || (wa.resolveWith(pa, [fa]), fa.fn.trigger && fa(pa).trigger("ready").off("ready"))
                }
            }
        }), fa.ready.promise = function (b) {
            if (!wa)if (wa = fa.Deferred(), "complete" === pa.readyState)setTimeout(fa.ready); else if (pa.addEventListener)pa.addEventListener("DOMContentLoaded", h, !1), a.addEventListener("load", h, !1); else {
                pa.attachEvent("onreadystatechange", h), a.attachEvent("onload", h);
                var c = !1;
                try {
                    c = null == a.frameElement && pa.documentElement
                } catch (d) {
                }
                c && c.doScroll && !function e() {
                    if (!fa.isReady) {
                        try {
                            c.doScroll("left")
                        } catch (a) {
                            return setTimeout(e, 50)
                        }
                        g(), fa.ready()
                    }
                }()
            }
            return wa.promise(b)
        };
        var xa, ya = "undefined";
        for (xa in fa(da))break;
        da.ownLast = "0" !== xa, da.inlineBlockNeedsLayout = !1, fa(function () {
            var a, b, c = pa.getElementsByTagName("body")[0];
            c && (a = pa.createElement("div"), a.style.cssText = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px", b = pa.createElement("div"), c.appendChild(a).appendChild(b), typeof b.style.zoom !== ya && (b.style.cssText = "border:0;margin:0;width:1px;padding:1px;display:inline;zoom:1", (da.inlineBlockNeedsLayout = 3 === b.offsetWidth) && (c.style.zoom = 1)), c.removeChild(a), a = b = null)
        }), function () {
            var a = pa.createElement("div");
            if (null == da.deleteExpando) {
                da.deleteExpando = !0;
                try {
                    delete a.test
                } catch (b) {
                    da.deleteExpando = !1
                }
            }
            a = null
        }(), fa.acceptData = function (a) {
            var b = fa.noData[(a.nodeName + " ").toLowerCase()], c = +a.nodeType || 1;
            return 1 !== c && 9 !== c ? !1 : !b || b !== !0 && a.getAttribute("classid") === b
        };
        var za = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, Aa = /([A-Z])/g;
        fa.extend({
            cache: {},
            noData: {"applet ": !0, "embed ": !0, "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"},
            hasData: function (a) {
                return a = a.nodeType ? fa.cache[a[fa.expando]] : a[fa.expando], !!a && !j(a)
            },
            data: function (a, b, c) {
                return k(a, b, c)
            },
            removeData: function (a, b) {
                return l(a, b)
            },
            _data: function (a, b, c) {
                return k(a, b, c, !0)
            },
            _removeData: function (a, b) {
                return l(a, b, !0)
            }
        }), fa.fn.extend({
            data: function (a, b) {
                var c, d, e, f = this[0], g = f && f.attributes;
                if (void 0 === a) {
                    if (this.length && (e = fa.data(f), 1 === f.nodeType && !fa._data(f, "parsedAttrs"))) {
                        for (c = g.length; c--;)d = g[c].name, 0 === d.indexOf("data-") && (d = fa.camelCase(d.slice(5)), i(f, d, e[d]));
                        fa._data(f, "parsedAttrs", !0)
                    }
                    return e
                }
                return "object" == typeof a ? this.each(function () {
                    fa.data(this, a)
                }) : arguments.length > 1 ? this.each(function () {
                    fa.data(this, a, b)
                }) : f ? i(f, a, fa.data(f, a)) : void 0
            }, removeData: function (a) {
                return this.each(function () {
                    fa.removeData(this, a)
                })
            }
        }), fa.extend({
            queue: function (a, b, c) {
                var d;
                return a ? (b = (b || "fx") + "queue", d = fa._data(a, b), c && (!d || fa.isArray(c) ? d = fa._data(a, b, fa.makeArray(c)) : d.push(c)), d || []) : void 0
            }, dequeue: function (a, b) {
                b = b || "fx";
                var c = fa.queue(a, b), d = c.length, e = c.shift(), f = fa._queueHooks(a, b), g = function () {
                    fa.dequeue(a, b)
                };
                "inprogress" === e && (e = c.shift(), d--), e && ("fx" === b && c.unshift("inprogress"), delete f.stop, e.call(a, g, f)), !d && f && f.empty.fire()
            }, _queueHooks: function (a, b) {
                var c = b + "queueHooks";
                return fa._data(a, c) || fa._data(a, c, {
                        empty: fa.Callbacks("once memory").add(function () {
                            fa._removeData(a, b + "queue"), fa._removeData(a, c)
                        })
                    })
            }
        }), fa.fn.extend({
            queue: function (a, b) {
                var c = 2;
                return "string" != typeof a && (b = a, a = "fx", c--), arguments.length < c ? fa.queue(this[0], a) : void 0 === b ? this : this.each(function () {
                    var c = fa.queue(this, a, b);
                    fa._queueHooks(this, a), "fx" === a && "inprogress" !== c[0] && fa.dequeue(this, a)
                })
            }, dequeue: function (a) {
                return this.each(function () {
                    fa.dequeue(this, a)
                })
            }, clearQueue: function (a) {
                return this.queue(a || "fx", [])
            }, promise: function (a, b) {
                var c, d = 1, e = fa.Deferred(), f = this, g = this.length, h = function () {
                    --d || e.resolveWith(f, [f])
                };
                for ("string" != typeof a && (b = a, a = void 0), a = a || "fx"; g--;)c = fa._data(f[g], a + "queueHooks"), c && c.empty && (d++, c.empty.add(h));
                return h(), e.promise(b)
            }
        });
        var Ba = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, Ca = ["Top", "Right", "Bottom", "Left"], Da = function (a, b) {
            return a = b || a, "none" === fa.css(a, "display") || !fa.contains(a.ownerDocument, a)
        }, Ea = fa.access = function (a, b, c, d, e, f, g) {
            var h = 0, i = a.length, j = null == c;
            if ("object" === fa.type(c)) {
                e = !0;
                for (h in c)fa.access(a, b, h, c[h], !0, f, g)
            } else if (void 0 !== d && (e = !0, fa.isFunction(d) || (g = !0), j && (g ? (b.call(a, d), b = null) : (j = b, b = function (a, b, c) {
                    return j.call(fa(a), c)
                })), b))for (; i > h; h++)b(a[h], c, g ? d : d.call(a[h], h, b(a[h], c)));
            return e ? a : j ? b.call(a) : i ? b(a[0], c) : f
        }, Fa = /^(?:checkbox|radio)$/i;
        !function () {
            var a = pa.createDocumentFragment(), b = pa.createElement("div"), c = pa.createElement("input");
            if (b.setAttribute("className", "t"), b.innerHTML = "  <link/><table></table><a href='/a'>a</a>", da.leadingWhitespace = 3 === b.firstChild.nodeType, da.tbody = !b.getElementsByTagName("tbody").length, da.htmlSerialize = !!b.getElementsByTagName("link").length, da.html5Clone = "<:nav></:nav>" !== pa.createElement("nav").cloneNode(!0).outerHTML, c.type = "checkbox", c.checked = !0, a.appendChild(c), da.appendChecked = c.checked, b.innerHTML = "<textarea>x</textarea>", da.noCloneChecked = !!b.cloneNode(!0).lastChild.defaultValue, a.appendChild(b), b.innerHTML = "<input type='radio' checked='checked' name='t'/>", da.checkClone = b.cloneNode(!0).cloneNode(!0).lastChild.checked, da.noCloneEvent = !0, b.attachEvent && (b.attachEvent("onclick", function () {
                    da.noCloneEvent = !1
                }), b.cloneNode(!0).click()), null == da.deleteExpando) {
                da.deleteExpando = !0;
                try {
                    delete b.test
                } catch (d) {
                    da.deleteExpando = !1
                }
            }
            a = b = c = null
        }(), function () {
            var b, c, d = pa.createElement("div");
            for (b in{
                submit: !0,
                change: !0,
                focusin: !0
            })c = "on" + b, (da[b + "Bubbles"] = c in a) || (d.setAttribute(c, "t"), da[b + "Bubbles"] = d.attributes[c].expando === !1);
            d = null
        }();
        var Ga = /^(?:input|select|textarea)$/i, Ha = /^key/, Ia = /^(?:mouse|contextmenu)|click/, Ja = /^(?:focusinfocus|focusoutblur)$/, Ka = /^([^.]*)(?:\.(.+)|)$/;
        fa.event = {
            global: {},
            add: function (a, b, c, d, e) {
                var f, g, h, i, j, k, l, m, n, o, p, q = fa._data(a);
                if (q) {
                    for (c.handler && (i = c, c = i.handler, e = i.selector), c.guid || (c.guid = fa.guid++), (g = q.events) || (g = q.events = {}), (k = q.handle) || (k = q.handle = function (a) {
                        return typeof fa === ya || a && fa.event.triggered === a.type ? void 0 : fa.event.dispatch.apply(k.elem, arguments)
                    }, k.elem = a), b = (b || "").match(ua) || [""], h = b.length; h--;)f = Ka.exec(b[h]) || [], n = p = f[1], o = (f[2] || "").split(".").sort(), n && (j = fa.event.special[n] || {}, n = (e ? j.delegateType : j.bindType) || n, j = fa.event.special[n] || {}, l = fa.extend({
                        type: n,
                        origType: p,
                        data: d,
                        handler: c,
                        guid: c.guid,
                        selector: e,
                        needsContext: e && fa.expr.match.needsContext.test(e),
                        namespace: o.join(".")
                    }, i), (m = g[n]) || (m = g[n] = [], m.delegateCount = 0, j.setup && j.setup.call(a, d, o, k) !== !1 || (a.addEventListener ? a.addEventListener(n, k, !1) : a.attachEvent && a.attachEvent("on" + n, k))), j.add && (j.add.call(a, l), l.handler.guid || (l.handler.guid = c.guid)), e ? m.splice(m.delegateCount++, 0, l) : m.push(l), fa.event.global[n] = !0);
                    a = null
                }
            },
            remove: function (a, b, c, d, e) {
                var f, g, h, i, j, k, l, m, n, o, p, q = fa.hasData(a) && fa._data(a);
                if (q && (k = q.events)) {
                    for (b = (b || "").match(ua) || [""], j = b.length; j--;)if (h = Ka.exec(b[j]) || [], n = p = h[1], o = (h[2] || "").split(".").sort(), n) {
                        for (l = fa.event.special[n] || {}, n = (d ? l.delegateType : l.bindType) || n, m = k[n] || [], h = h[2] && new RegExp("(^|\\.)" + o.join("\\.(?:.*\\.|)") + "(\\.|$)"), i = f = m.length; f--;)g = m[f], !e && p !== g.origType || c && c.guid !== g.guid || h && !h.test(g.namespace) || d && d !== g.selector && ("**" !== d || !g.selector) || (m.splice(f, 1), g.selector && m.delegateCount--, l.remove && l.remove.call(a, g));
                        i && !m.length && (l.teardown && l.teardown.call(a, o, q.handle) !== !1 || fa.removeEvent(a, n, q.handle), delete k[n])
                    } else for (n in k)fa.event.remove(a, n + b[j], c, d, !0);
                    fa.isEmptyObject(k) && (delete q.handle, fa._removeData(a, "events"))
                }
            },
            trigger: function (b, c, d, e) {
                var f, g, h, i, j, k, l, m = [d || pa], n = ba.call(b, "type") ? b.type : b, o = ba.call(b, "namespace") ? b.namespace.split(".") : [];
                if (h = k = d = d || pa, 3 !== d.nodeType && 8 !== d.nodeType && !Ja.test(n + fa.event.triggered) && (n.indexOf(".") >= 0 && (o = n.split("."), n = o.shift(), o.sort()), g = n.indexOf(":") < 0 && "on" + n, b = b[fa.expando] ? b : new fa.Event(n, "object" == typeof b && b), b.isTrigger = e ? 2 : 3, b.namespace = o.join("."), b.namespace_re = b.namespace ? new RegExp("(^|\\.)" + o.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, b.result = void 0, b.target || (b.target = d), c = null == c ? [b] : fa.makeArray(c, [b]), j = fa.event.special[n] || {}, e || !j.trigger || j.trigger.apply(d, c) !== !1)) {
                    if (!e && !j.noBubble && !fa.isWindow(d)) {
                        for (i = j.delegateType || n, Ja.test(i + n) || (h = h.parentNode); h; h = h.parentNode)m.push(h), k = h;
                        k === (d.ownerDocument || pa) && m.push(k.defaultView || k.parentWindow || a)
                    }
                    for (l = 0; (h = m[l++]) && !b.isPropagationStopped();)b.type = l > 1 ? i : j.bindType || n, f = (fa._data(h, "events") || {})[b.type] && fa._data(h, "handle"), f && f.apply(h, c), f = g && h[g], f && f.apply && fa.acceptData(h) && (b.result = f.apply(h, c), b.result === !1 && b.preventDefault());
                    if (b.type = n, !e && !b.isDefaultPrevented() && (!j._default || j._default.apply(m.pop(), c) === !1) && fa.acceptData(d) && g && d[n] && !fa.isWindow(d)) {
                        k = d[g], k && (d[g] = null), fa.event.triggered = n;
                        try {
                            d[n]()
                        } catch (p) {
                        }
                        fa.event.triggered = void 0, k && (d[g] = k)
                    }
                    return b.result
                }
            },
            dispatch: function (a) {
                a = fa.event.fix(a);
                var b, c, d, e, f, g = [], h = X.call(arguments), i = (fa._data(this, "events") || {})[a.type] || [], j = fa.event.special[a.type] || {};
                if (h[0] = a, a.delegateTarget = this, !j.preDispatch || j.preDispatch.call(this, a) !== !1) {
                    for (g = fa.event.handlers.call(this, a, i), b = 0; (e = g[b++]) && !a.isPropagationStopped();)for (a.currentTarget = e.elem, f = 0; (d = e.handlers[f++]) && !a.isImmediatePropagationStopped();)(!a.namespace_re || a.namespace_re.test(d.namespace)) && (a.handleObj = d, a.data = d.data, c = ((fa.event.special[d.origType] || {}).handle || d.handler).apply(e.elem, h), void 0 !== c && (a.result = c) === !1 && (a.preventDefault(), a.stopPropagation()));
                    return j.postDispatch && j.postDispatch.call(this, a), a.result
                }
            },
            handlers: function (a, b) {
                var c, d, e, f, g = [], h = b.delegateCount, i = a.target;
                if (h && i.nodeType && (!a.button || "click" !== a.type))for (; i != this; i = i.parentNode || this)if (1 === i.nodeType && (i.disabled !== !0 || "click" !== a.type)) {
                    for (e = [], f = 0; h > f; f++)d = b[f], c = d.selector + " ", void 0 === e[c] && (e[c] = d.needsContext ? fa(c, this).index(i) >= 0 : fa.find(c, this, null, [i]).length), e[c] && e.push(d);
                    e.length && g.push({elem: i, handlers: e})
                }
                return h < b.length && g.push({elem: this, handlers: b.slice(h)}), g
            },
            fix: function (a) {
                if (a[fa.expando])return a;
                var b, c, d, e = a.type, f = a, g = this.fixHooks[e];
                for (g || (this.fixHooks[e] = g = Ia.test(e) ? this.mouseHooks : Ha.test(e) ? this.keyHooks : {}), d = g.props ? this.props.concat(g.props) : this.props, a = new fa.Event(f), b = d.length; b--;)c = d[b], a[c] = f[c];
                return a.target || (a.target = f.srcElement || pa), 3 === a.target.nodeType && (a.target = a.target.parentNode), a.metaKey = !!a.metaKey, g.filter ? g.filter(a, f) : a
            },
            props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
            fixHooks: {},
            keyHooks: {
                props: "char charCode key keyCode".split(" "), filter: function (a, b) {
                    return null == a.which && (a.which = null != b.charCode ? b.charCode : b.keyCode), a
                }
            },
            mouseHooks: {
                props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
                filter: function (a, b) {
                    var c, d, e, f = b.button, g = b.fromElement;
                    return null == a.pageX && null != b.clientX && (d = a.target.ownerDocument || pa, e = d.documentElement, c = d.body, a.pageX = b.clientX + (e && e.scrollLeft || c && c.scrollLeft || 0) - (e && e.clientLeft || c && c.clientLeft || 0), a.pageY = b.clientY + (e && e.scrollTop || c && c.scrollTop || 0) - (e && e.clientTop || c && c.clientTop || 0)), !a.relatedTarget && g && (a.relatedTarget = g === a.target ? b.toElement : g), a.which || void 0 === f || (a.which = 1 & f ? 1 : 2 & f ? 3 : 4 & f ? 2 : 0), a
                }
            },
            special: {
                load: {noBubble: !0}, focus: {
                    trigger: function () {
                        if (this !== o() && this.focus)try {
                            return this.focus(), !1
                        } catch (a) {
                        }
                    }, delegateType: "focusin"
                }, blur: {
                    trigger: function () {
                        return this === o() && this.blur ? (this.blur(), !1) : void 0
                    }, delegateType: "focusout"
                }, click: {
                    trigger: function () {
                        return fa.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : void 0
                    }, _default: function (a) {
                        return fa.nodeName(a.target, "a")
                    }
                }, beforeunload: {
                    postDispatch: function (a) {
                        void 0 !== a.result && (a.originalEvent.returnValue = a.result)
                    }
                }
            },
            simulate: function (a, b, c, d) {
                var e = fa.extend(new fa.Event, c, {type: a, isSimulated: !0, originalEvent: {}});
                d ? fa.event.trigger(e, null, b) : fa.event.dispatch.call(b, e), e.isDefaultPrevented() && c.preventDefault()
            }
        }, fa.removeEvent = pa.removeEventListener ? function (a, b, c) {
            a.removeEventListener && a.removeEventListener(b, c, !1)
        } : function (a, b, c) {
            var d = "on" + b;
            a.detachEvent && (typeof a[d] === ya && (a[d] = null), a.detachEvent(d, c))
        }, fa.Event = function (a, b) {
            return this instanceof fa.Event ? (a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || void 0 === a.defaultPrevented && (a.returnValue === !1 || a.getPreventDefault && a.getPreventDefault()) ? m : n) : this.type = a, b && fa.extend(this, b), this.timeStamp = a && a.timeStamp || fa.now(), void(this[fa.expando] = !0)) : new fa.Event(a, b)
        }, fa.Event.prototype = {
            isDefaultPrevented: n,
            isPropagationStopped: n,
            isImmediatePropagationStopped: n,
            preventDefault: function () {
                var a = this.originalEvent;
                this.isDefaultPrevented = m, a && (a.preventDefault ? a.preventDefault() : a.returnValue = !1)
            },
            stopPropagation: function () {
                var a = this.originalEvent;
                this.isPropagationStopped = m, a && (a.stopPropagation && a.stopPropagation(), a.cancelBubble = !0)
            },
            stopImmediatePropagation: function () {
                this.isImmediatePropagationStopped = m, this.stopPropagation()
            }
        }, fa.each({mouseenter: "mouseover", mouseleave: "mouseout"}, function (a, b) {
            fa.event.special[a] = {
                delegateType: b, bindType: b, handle: function (a) {
                    var c, d = this, e = a.relatedTarget, f = a.handleObj;
                    return (!e || e !== d && !fa.contains(d, e)) && (a.type = f.origType, c = f.handler.apply(this, arguments), a.type = b), c
                }
            }
        }), da.submitBubbles || (fa.event.special.submit = {
            setup: function () {
                return fa.nodeName(this, "form") ? !1 : void fa.event.add(this, "click._submit keypress._submit", function (a) {
                    var b = a.target, c = fa.nodeName(b, "input") || fa.nodeName(b, "button") ? b.form : void 0;
                    c && !fa._data(c, "submitBubbles") && (fa.event.add(c, "submit._submit", function (a) {
                        a._submit_bubble = !0
                    }), fa._data(c, "submitBubbles", !0))
                })
            }, postDispatch: function (a) {
                a._submit_bubble && (delete a._submit_bubble, this.parentNode && !a.isTrigger && fa.event.simulate("submit", this.parentNode, a, !0))
            }, teardown: function () {
                return fa.nodeName(this, "form") ? !1 : void fa.event.remove(this, "._submit")
            }
        }), da.changeBubbles || (fa.event.special.change = {
            setup: function () {
                return Ga.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (fa.event.add(this, "propertychange._change", function (a) {
                    "checked" === a.originalEvent.propertyName && (this._just_changed = !0)
                }), fa.event.add(this, "click._change", function (a) {
                    this._just_changed && !a.isTrigger && (this._just_changed = !1), fa.event.simulate("change", this, a, !0)
                })), !1) : void fa.event.add(this, "beforeactivate._change", function (a) {
                    var b = a.target;
                    Ga.test(b.nodeName) && !fa._data(b, "changeBubbles") && (fa.event.add(b, "change._change", function (a) {
                        !this.parentNode || a.isSimulated || a.isTrigger || fa.event.simulate("change", this.parentNode, a, !0)
                    }), fa._data(b, "changeBubbles", !0))
                })
            }, handle: function (a) {
                var b = a.target;
                return this !== b || a.isSimulated || a.isTrigger || "radio" !== b.type && "checkbox" !== b.type ? a.handleObj.handler.apply(this, arguments) : void 0
            }, teardown: function () {
                return fa.event.remove(this, "._change"), !Ga.test(this.nodeName)
            }
        }), da.focusinBubbles || fa.each({focus: "focusin", blur: "focusout"}, function (a, b) {
            var c = function (a) {
                fa.event.simulate(b, a.target, fa.event.fix(a), !0)
            };
            fa.event.special[b] = {
                setup: function () {
                    var d = this.ownerDocument || this, e = fa._data(d, b);
                    e || d.addEventListener(a, c, !0), fa._data(d, b, (e || 0) + 1)
                }, teardown: function () {
                    var d = this.ownerDocument || this, e = fa._data(d, b) - 1;
                    e ? fa._data(d, b, e) : (d.removeEventListener(a, c, !0), fa._removeData(d, b))
                }
            }
        }), fa.fn.extend({
            on: function (a, b, c, d, e) {
                var f, g;
                if ("object" == typeof a) {
                    "string" != typeof b && (c = c || b, b = void 0);
                    for (f in a)this.on(f, b, c, a[f], e);
                    return this
                }
                if (null == c && null == d ? (d = b, c = b = void 0) : null == d && ("string" == typeof b ? (d = c, c = void 0) : (d = c, c = b, b = void 0)), d === !1)d = n; else if (!d)return this;
                return 1 === e && (g = d, d = function (a) {
                    return fa().off(a), g.apply(this, arguments)
                }, d.guid = g.guid || (g.guid = fa.guid++)), this.each(function () {
                    fa.event.add(this, a, d, c, b)
                })
            }, one: function (a, b, c, d) {
                return this.on(a, b, c, d, 1)
            }, off: function (a, b, c) {
                var d, e;
                if (a && a.preventDefault && a.handleObj)return d = a.handleObj, fa(a.delegateTarget).off(d.namespace ? d.origType + "." + d.namespace : d.origType, d.selector, d.handler), this;
                if ("object" == typeof a) {
                    for (e in a)this.off(e, b, a[e]);
                    return this
                }
                return (b === !1 || "function" == typeof b) && (c = b, b = void 0), c === !1 && (c = n), this.each(function () {
                    fa.event.remove(this, a, c, b)
                })
            }, trigger: function (a, b) {
                return this.each(function () {
                    fa.event.trigger(a, b, this)
                })
            }, triggerHandler: function (a, b) {
                var c = this[0];
                return c ? fa.event.trigger(a, b, c, !0) : void 0
            }
        });
        var La = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video", Ma = / jQuery\d+="(?:null|\d+)"/g, Na = new RegExp("<(?:" + La + ")[\\s/>]", "i"), Oa = /^\s+/, Pa = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi, Qa = /<([\w:]+)/, Ra = /<tbody/i, Sa = /<|&#?\w+;/, Ta = /<(?:script|style|link)/i, Ua = /checked\s*(?:[^=]|=\s*.checked.)/i, Va = /^$|\/(?:java|ecma)script/i, Wa = /^true\/(.*)/, Xa = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g, Ya = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            legend: [1, "<fieldset>", "</fieldset>"],
            area: [1, "<map>", "</map>"],
            param: [1, "<object>", "</object>"],
            thead: [1, "<table>", "</table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: da.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
        }, Za = p(pa), $a = Za.appendChild(pa.createElement("div"));
        Ya.optgroup = Ya.option, Ya.tbody = Ya.tfoot = Ya.colgroup = Ya.caption = Ya.thead, Ya.th = Ya.td, fa.extend({
            clone: function (a, b, c) {
                var d, e, f, g, h, i = fa.contains(a.ownerDocument, a);
                if (da.html5Clone || fa.isXMLDoc(a) || !Na.test("<" + a.nodeName + ">") ? f = a.cloneNode(!0) : ($a.innerHTML = a.outerHTML, $a.removeChild(f = $a.firstChild)), !(da.noCloneEvent && da.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || fa.isXMLDoc(a)))for (d = q(f), h = q(a), g = 0; null != (e = h[g]); ++g)d[g] && x(e, d[g]);
                if (b)if (c)for (h = h || q(a), d = d || q(f), g = 0; null != (e = h[g]); g++)w(e, d[g]); else w(a, f);
                return d = q(f, "script"), d.length > 0 && v(d, !i && q(a, "script")), d = h = e = null, f
            }, buildFragment: function (a, b, c, d) {
                for (var e, f, g, h, i, j, k, l = a.length, m = p(b), n = [], o = 0; l > o; o++)if (f = a[o], f || 0 === f)if ("object" === fa.type(f))fa.merge(n, f.nodeType ? [f] : f); else if (Sa.test(f)) {
                    for (h = h || m.appendChild(b.createElement("div")), i = (Qa.exec(f) || ["", ""])[1].toLowerCase(), k = Ya[i] || Ya._default, h.innerHTML = k[1] + f.replace(Pa, "<$1></$2>") + k[2], e = k[0]; e--;)h = h.lastChild;
                    if (!da.leadingWhitespace && Oa.test(f) && n.push(b.createTextNode(Oa.exec(f)[0])), !da.tbody)for (f = "table" !== i || Ra.test(f) ? "<table>" !== k[1] || Ra.test(f) ? 0 : h : h.firstChild, e = f && f.childNodes.length; e--;)fa.nodeName(j = f.childNodes[e], "tbody") && !j.childNodes.length && f.removeChild(j);
                    for (fa.merge(n, h.childNodes), h.textContent = ""; h.firstChild;)h.removeChild(h.firstChild);
                    h = m.lastChild
                } else n.push(b.createTextNode(f));
                for (h && m.removeChild(h), da.appendChecked || fa.grep(q(n, "input"), r), o = 0; f = n[o++];)if ((!d || -1 === fa.inArray(f, d)) && (g = fa.contains(f.ownerDocument, f), h = q(m.appendChild(f), "script"), g && v(h), c))for (e = 0; f = h[e++];)Va.test(f.type || "") && c.push(f);
                return h = null, m
            }, cleanData: function (a, b) {
                for (var c, d, e, f, g = 0, h = fa.expando, i = fa.cache, j = da.deleteExpando, k = fa.event.special; null != (c = a[g]); g++)if ((b || fa.acceptData(c)) && (e = c[h], f = e && i[e])) {
                    if (f.events)for (d in f.events)k[d] ? fa.event.remove(c, d) : fa.removeEvent(c, d, f.handle);
                    i[e] && (delete i[e], j ? delete c[h] : typeof c.removeAttribute !== ya ? c.removeAttribute(h) : c[h] = null, W.push(e))
                }
            }
        }), fa.fn.extend({
            text: function (a) {
                return Ea(this, function (a) {
                    return void 0 === a ? fa.text(this) : this.empty().append((this[0] && this[0].ownerDocument || pa).createTextNode(a))
                }, null, a, arguments.length)
            }, append: function () {
                return this.domManip(arguments, function (a) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var b = s(this, a);
                        b.appendChild(a)
                    }
                })
            }, prepend: function () {
                return this.domManip(arguments, function (a) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var b = s(this, a);
                        b.insertBefore(a, b.firstChild)
                    }
                })
            }, before: function () {
                return this.domManip(arguments, function (a) {
                    this.parentNode && this.parentNode.insertBefore(a, this)
                })
            }, after: function () {
                return this.domManip(arguments, function (a) {
                    this.parentNode && this.parentNode.insertBefore(a, this.nextSibling)
                })
            }, remove: function (a, b) {
                for (var c, d = a ? fa.filter(a, this) : this, e = 0; null != (c = d[e]); e++)b || 1 !== c.nodeType || fa.cleanData(q(c)), c.parentNode && (b && fa.contains(c.ownerDocument, c) && v(q(c, "script")), c.parentNode.removeChild(c));
                return this
            }, empty: function () {
                for (var a, b = 0; null != (a = this[b]); b++) {
                    for (1 === a.nodeType && fa.cleanData(q(a, !1)); a.firstChild;)a.removeChild(a.firstChild);
                    a.options && fa.nodeName(a, "select") && (a.options.length = 0)
                }
                return this
            }, clone: function (a, b) {
                return a = null == a ? !1 : a, b = null == b ? a : b, this.map(function () {
                    return fa.clone(this, a, b)
                })
            }, html: function (a) {
                return Ea(this, function (a) {
                    var b = this[0] || {}, c = 0, d = this.length;
                    if (void 0 === a)return 1 === b.nodeType ? b.innerHTML.replace(Ma, "") : void 0;
                    if ("string" == typeof a && !Ta.test(a) && (da.htmlSerialize || !Na.test(a)) && (da.leadingWhitespace || !Oa.test(a)) && !Ya[(Qa.exec(a) || ["", ""])[1].toLowerCase()]) {
                        a = a.replace(Pa, "<$1></$2>");
                        try {
                            for (; d > c; c++)b = this[c] || {}, 1 === b.nodeType && (fa.cleanData(q(b, !1)), b.innerHTML = a);
                            b = 0
                        } catch (e) {
                        }
                    }
                    b && this.empty().append(a)
                }, null, a, arguments.length)
            }, replaceWith: function () {
                var a = arguments[0];
                return this.domManip(arguments, function (b) {
                    a = this.parentNode, fa.cleanData(q(this)), a && a.replaceChild(b, this)
                }), a && (a.length || a.nodeType) ? this : this.remove()
            }, detach: function (a) {
                return this.remove(a, !0)
            }, domManip: function (a, b) {
                a = Y.apply([], a);
                var c, d, e, f, g, h, i = 0, j = this.length, k = this, l = j - 1, m = a[0], n = fa.isFunction(m);
                if (n || j > 1 && "string" == typeof m && !da.checkClone && Ua.test(m))return this.each(function (c) {
                    var d = k.eq(c);
                    n && (a[0] = m.call(this, c, d.html())), d.domManip(a, b)
                });
                if (j && (h = fa.buildFragment(a, this[0].ownerDocument, !1, this), c = h.firstChild, 1 === h.childNodes.length && (h = c), c)) {
                    for (f = fa.map(q(h, "script"), t), e = f.length; j > i; i++)d = h, i !== l && (d = fa.clone(d, !0, !0), e && fa.merge(f, q(d, "script"))), b.call(this[i], d, i);
                    if (e)for (g = f[f.length - 1].ownerDocument, fa.map(f, u), i = 0; e > i; i++)d = f[i], Va.test(d.type || "") && !fa._data(d, "globalEval") && fa.contains(g, d) && (d.src ? fa._evalUrl && fa._evalUrl(d.src) : fa.globalEval((d.text || d.textContent || d.innerHTML || "").replace(Xa, "")));
                    h = c = null
                }
                return this
            }
        }), fa.each({
            appendTo: "append",
            prependTo: "prepend",
            insertBefore: "before",
            insertAfter: "after",
            replaceAll: "replaceWith"
        }, function (a, b) {
            fa.fn[a] = function (a) {
                for (var c, d = 0, e = [], f = fa(a), g = f.length - 1; g >= d; d++)c = d === g ? this : this.clone(!0), fa(f[d])[b](c), Z.apply(e, c.get());
                return this.pushStack(e)
            }
        });
        var _a, ab = {};
        !function () {
            var a, b, c = pa.createElement("div"), d = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;padding:0;margin:0;border:0";
            c.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", a = c.getElementsByTagName("a")[0], a.style.cssText = "float:left;opacity:.5", da.opacity = /^0.5/.test(a.style.opacity), da.cssFloat = !!a.style.cssFloat, c.style.backgroundClip = "content-box", c.cloneNode(!0).style.backgroundClip = "", da.clearCloneStyle = "content-box" === c.style.backgroundClip, a = c = null, da.shrinkWrapBlocks = function () {
                var a, c, e, f;
                if (null == b) {
                    if (a = pa.getElementsByTagName("body")[0], !a)return;
                    f = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px", c = pa.createElement("div"), e = pa.createElement("div"), a.appendChild(c).appendChild(e), b = !1, typeof e.style.zoom !== ya && (e.style.cssText = d + ";width:1px;padding:1px;zoom:1", e.innerHTML = "<div></div>", e.firstChild.style.width = "5px", b = 3 !== e.offsetWidth), a.removeChild(c), a = c = e = null
                }
                return b
            }
        }();
        var bb, cb, db = /^margin/, eb = new RegExp("^(" + Ba + ")(?!px)[a-z%]+$", "i"), fb = /^(top|right|bottom|left)$/;
        a.getComputedStyle ? (bb = function (a) {
            return a.ownerDocument.defaultView.getComputedStyle(a, null)
        }, cb = function (a, b, c) {
            var d, e, f, g, h = a.style;
            return c = c || bb(a), g = c ? c.getPropertyValue(b) || c[b] : void 0, c && ("" !== g || fa.contains(a.ownerDocument, a) || (g = fa.style(a, b)), eb.test(g) && db.test(b) && (d = h.width, e = h.minWidth, f = h.maxWidth, h.minWidth = h.maxWidth = h.width = g, g = c.width, h.width = d, h.minWidth = e, h.maxWidth = f)), void 0 === g ? g : g + ""
        }) : pa.documentElement.currentStyle && (bb = function (a) {
            return a.currentStyle
        }, cb = function (a, b, c) {
            var d, e, f, g, h = a.style;
            return c = c || bb(a), g = c ? c[b] : void 0, null == g && h && h[b] && (g = h[b]), eb.test(g) && !fb.test(b) && (d = h.left, e = a.runtimeStyle, f = e && e.left, f && (e.left = a.currentStyle.left), h.left = "fontSize" === b ? "1em" : g, g = h.pixelLeft + "px", h.left = d, f && (e.left = f)), void 0 === g ? g : g + "" || "auto"
        }), function () {
            function b() {
                var b, c, d = pa.getElementsByTagName("body")[0];
                d && (b = pa.createElement("div"), c = pa.createElement("div"), b.style.cssText = j, d.appendChild(b).appendChild(c), c.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:absolute;display:block;padding:1px;border:1px;width:4px;margin-top:1%;top:1%", fa.swap(d, null != d.style.zoom ? {zoom: 1} : {}, function () {
                    e = 4 === c.offsetWidth
                }), f = !0, g = !1, h = !0, a.getComputedStyle && (g = "1%" !== (a.getComputedStyle(c, null) || {}).top, f = "4px" === (a.getComputedStyle(c, null) || {width: "4px"}).width), d.removeChild(b), c = d = null)
            }

            var c, d, e, f, g, h, i = pa.createElement("div"), j = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px", k = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;padding:0;margin:0;border:0";
            i.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", c = i.getElementsByTagName("a")[0], c.style.cssText = "float:left;opacity:.5", da.opacity = /^0.5/.test(c.style.opacity), da.cssFloat = !!c.style.cssFloat, i.style.backgroundClip = "content-box", i.cloneNode(!0).style.backgroundClip = "", da.clearCloneStyle = "content-box" === i.style.backgroundClip, c = i = null, fa.extend(da, {
                reliableHiddenOffsets: function () {
                    if (null != d)return d;
                    var a, b, c, e = pa.createElement("div"), f = pa.getElementsByTagName("body")[0];
                    if (f)return e.setAttribute("className", "t"), e.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", a = pa.createElement("div"), a.style.cssText = j, f.appendChild(a).appendChild(e), e.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", b = e.getElementsByTagName("td"), b[0].style.cssText = "padding:0;margin:0;border:0;display:none", c = 0 === b[0].offsetHeight, b[0].style.display = "", b[1].style.display = "none", d = c && 0 === b[0].offsetHeight, f.removeChild(a), e = f = null, d
                }, boxSizing: function () {
                    return null == e && b(), e
                }, boxSizingReliable: function () {
                    return null == f && b(), f
                }, pixelPosition: function () {
                    return null == g && b(), g
                }, reliableMarginRight: function () {
                    var b, c, d, e;
                    if (null == h && a.getComputedStyle) {
                        if (b = pa.getElementsByTagName("body")[0], !b)return;
                        c = pa.createElement("div"), d = pa.createElement("div"), c.style.cssText = j, b.appendChild(c).appendChild(d), e = d.appendChild(pa.createElement("div")), e.style.cssText = d.style.cssText = k, e.style.marginRight = e.style.width = "0", d.style.width = "1px", h = !parseFloat((a.getComputedStyle(e, null) || {}).marginRight), b.removeChild(c)
                    }
                    return h
                }
            })
        }(), fa.swap = function (a, b, c, d) {
            var e, f, g = {};
            for (f in b)g[f] = a.style[f], a.style[f] = b[f];
            e = c.apply(a, d || []);
            for (f in b)a.style[f] = g[f];
            return e
        };
        var gb = /alpha\([^)]*\)/i, hb = /opacity\s*=\s*([^)]*)/, ib = /^(none|table(?!-c[ea]).+)/, jb = new RegExp("^(" + Ba + ")(.*)$", "i"), kb = new RegExp("^([+-])=(" + Ba + ")", "i"), lb = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        }, mb = {letterSpacing: 0, fontWeight: 400}, nb = ["Webkit", "O", "Moz", "ms"];
        fa.extend({
            cssHooks: {
                opacity: {
                    get: function (a, b) {
                        if (b) {
                            var c = cb(a, "opacity");
                            return "" === c ? "1" : c
                        }
                    }
                }
            },
            cssNumber: {
                columnCount: !0,
                fillOpacity: !0,
                fontWeight: !0,
                lineHeight: !0,
                opacity: !0,
                order: !0,
                orphans: !0,
                widows: !0,
                zIndex: !0,
                zoom: !0
            },
            cssProps: {"float": da.cssFloat ? "cssFloat" : "styleFloat"},
            style: function (a, b, c, d) {
                if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
                    var e, f, g, h = fa.camelCase(b), i = a.style;
                    if (b = fa.cssProps[h] || (fa.cssProps[h] = B(i, h)), g = fa.cssHooks[b] || fa.cssHooks[h], void 0 === c)return g && "get" in g && void 0 !== (e = g.get(a, !1, d)) ? e : i[b];
                    if (f = typeof c, "string" === f && (e = kb.exec(c)) && (c = (e[1] + 1) * e[2] + parseFloat(fa.css(a, b)), f = "number"), null != c && c === c && ("number" !== f || fa.cssNumber[h] || (c += "px"), da.clearCloneStyle || "" !== c || 0 !== b.indexOf("background") || (i[b] = "inherit"), !(g && "set" in g && void 0 === (c = g.set(a, c, d)))))try {
                        i[b] = "", i[b] = c
                    } catch (j) {
                    }
                }
            },
            css: function (a, b, c, d) {
                var e, f, g, h = fa.camelCase(b);
                return b = fa.cssProps[h] || (fa.cssProps[h] = B(a.style, h)), g = fa.cssHooks[b] || fa.cssHooks[h], g && "get" in g && (f = g.get(a, !0, c)), void 0 === f && (f = cb(a, b, d)), "normal" === f && b in mb && (f = mb[b]), "" === c || c ? (e = parseFloat(f), c === !0 || fa.isNumeric(e) ? e || 0 : f) : f
            }
        }), fa.each(["height", "width"], function (a, b) {
            fa.cssHooks[b] = {
                get: function (a, c, d) {
                    return c ? 0 === a.offsetWidth && ib.test(fa.css(a, "display")) ? fa.swap(a, lb, function () {
                        return F(a, b, d)
                    }) : F(a, b, d) : void 0
                }, set: function (a, c, d) {
                    var e = d && bb(a);
                    return D(a, c, d ? E(a, b, d, da.boxSizing() && "border-box" === fa.css(a, "boxSizing", !1, e), e) : 0)
                }
            }
        }), da.opacity || (fa.cssHooks.opacity = {
            get: function (a, b) {
                return hb.test((b && a.currentStyle ? a.currentStyle.filter : a.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : b ? "1" : ""
            }, set: function (a, b) {
                var c = a.style, d = a.currentStyle, e = fa.isNumeric(b) ? "alpha(opacity=" + 100 * b + ")" : "", f = d && d.filter || c.filter || "";
                c.zoom = 1, (b >= 1 || "" === b) && "" === fa.trim(f.replace(gb, "")) && c.removeAttribute && (c.removeAttribute("filter"), "" === b || d && !d.filter) || (c.filter = gb.test(f) ? f.replace(gb, e) : f + " " + e)
            }
        }), fa.cssHooks.marginRight = A(da.reliableMarginRight, function (a, b) {
            return b ? fa.swap(a, {display: "inline-block"}, cb, [a, "marginRight"]) : void 0
        }), fa.each({margin: "", padding: "", border: "Width"}, function (a, b) {
            fa.cssHooks[a + b] = {
                expand: function (c) {
                    for (var d = 0, e = {}, f = "string" == typeof c ? c.split(" ") : [c]; 4 > d; d++)e[a + Ca[d] + b] = f[d] || f[d - 2] || f[0];
                    return e
                }
            }, db.test(a) || (fa.cssHooks[a + b].set = D)
        }), fa.fn.extend({
            css: function (a, b) {
                return Ea(this, function (a, b, c) {
                    var d, e, f = {}, g = 0;
                    if (fa.isArray(b)) {
                        for (d = bb(a), e = b.length; e > g; g++)f[b[g]] = fa.css(a, b[g], !1, d);
                        return f
                    }
                    return void 0 !== c ? fa.style(a, b, c) : fa.css(a, b)
                }, a, b, arguments.length > 1)
            }, show: function () {
                return C(this, !0)
            }, hide: function () {
                return C(this)
            }, toggle: function (a) {
                return "boolean" == typeof a ? a ? this.show() : this.hide() : this.each(function () {
                    Da(this) ? fa(this).show() : fa(this).hide()
                })
            }
        }), fa.Tween = G, G.prototype = {
            constructor: G, init: function (a, b, c, d, e, f) {
                this.elem = a, this.prop = c, this.easing = e || "swing", this.options = b, this.start = this.now = this.cur(), this.end = d, this.unit = f || (fa.cssNumber[c] ? "" : "px")
            }, cur: function () {
                var a = G.propHooks[this.prop];
                return a && a.get ? a.get(this) : G.propHooks._default.get(this)
            }, run: function (a) {
                var b, c = G.propHooks[this.prop];
                return this.options.duration ? this.pos = b = fa.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : this.pos = b = a, this.now = (this.end - this.start) * b + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), c && c.set ? c.set(this) : G.propHooks._default.set(this), this
            }
        }, G.prototype.init.prototype = G.prototype, G.propHooks = {
            _default: {
                get: function (a) {
                    var b;
                    return null == a.elem[a.prop] || a.elem.style && null != a.elem.style[a.prop] ? (b = fa.css(a.elem, a.prop, ""), b && "auto" !== b ? b : 0) : a.elem[a.prop]
                }, set: function (a) {
                    fa.fx.step[a.prop] ? fa.fx.step[a.prop](a) : a.elem.style && (null != a.elem.style[fa.cssProps[a.prop]] || fa.cssHooks[a.prop]) ? fa.style(a.elem, a.prop, a.now + a.unit) : a.elem[a.prop] = a.now
                }
            }
        }, G.propHooks.scrollTop = G.propHooks.scrollLeft = {
            set: function (a) {
                a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now)
            }
        }, fa.easing = {
            linear: function (a) {
                return a
            }, swing: function (a) {
                return .5 - Math.cos(a * Math.PI) / 2
            }
        }, fa.fx = G.prototype.init, fa.fx.step = {};
        var ob, pb, qb = /^(?:toggle|show|hide)$/, rb = new RegExp("^(?:([+-])=|)(" + Ba + ")([a-z%]*)$", "i"), sb = /queueHooks$/, tb = [K], ub = {
            "*": [function (a, b) {
                var c = this.createTween(a, b), d = c.cur(), e = rb.exec(b), f = e && e[3] || (fa.cssNumber[a] ? "" : "px"), g = (fa.cssNumber[a] || "px" !== f && +d) && rb.exec(fa.css(c.elem, a)), h = 1, i = 20;
                if (g && g[3] !== f) {
                    f = f || g[3], e = e || [], g = +d || 1;
                    do h = h || ".5", g /= h, fa.style(c.elem, a, g + f); while (h !== (h = c.cur() / d) && 1 !== h && --i)
                }
                return e && (g = c.start = +g || +d || 0, c.unit = f, c.end = e[1] ? g + (e[1] + 1) * e[2] : +e[2]), c
            }]
        };
        fa.Animation = fa.extend(M, {
            tweener: function (a, b) {
                fa.isFunction(a) ? (b = a, a = ["*"]) : a = a.split(" ");
                for (var c, d = 0, e = a.length; e > d; d++)c = a[d], ub[c] = ub[c] || [], ub[c].unshift(b)
            }, prefilter: function (a, b) {
                b ? tb.unshift(a) : tb.push(a)
            }
        }), fa.speed = function (a, b, c) {
            var d = a && "object" == typeof a ? fa.extend({}, a) : {
                complete: c || !c && b || fa.isFunction(a) && a,
                duration: a,
                easing: c && b || b && !fa.isFunction(b) && b
            };
            return d.duration = fa.fx.off ? 0 : "number" == typeof d.duration ? d.duration : d.duration in fa.fx.speeds ? fa.fx.speeds[d.duration] : fa.fx.speeds._default, (null == d.queue || d.queue === !0) && (d.queue = "fx"), d.old = d.complete, d.complete = function () {
                fa.isFunction(d.old) && d.old.call(this), d.queue && fa.dequeue(this, d.queue)
            }, d
        }, fa.fn.extend({
            fadeTo: function (a, b, c, d) {
                return this.filter(Da).css("opacity", 0).show().end().animate({opacity: b}, a, c, d)
            }, animate: function (a, b, c, d) {
                var e = fa.isEmptyObject(a), f = fa.speed(b, c, d), g = function () {
                    var b = M(this, fa.extend({}, a), f);
                    (e || fa._data(this, "finish")) && b.stop(!0)
                };
                return g.finish = g, e || f.queue === !1 ? this.each(g) : this.queue(f.queue, g)
            }, stop: function (a, b, c) {
                var d = function (a) {
                    var b = a.stop;
                    delete a.stop, b(c)
                };
                return "string" != typeof a && (c = b, b = a, a = void 0), b && a !== !1 && this.queue(a || "fx", []), this.each(function () {
                    var b = !0, e = null != a && a + "queueHooks", f = fa.timers, g = fa._data(this);
                    if (e)g[e] && g[e].stop && d(g[e]); else for (e in g)g[e] && g[e].stop && sb.test(e) && d(g[e]);
                    for (e = f.length; e--;)f[e].elem !== this || null != a && f[e].queue !== a || (f[e].anim.stop(c), b = !1, f.splice(e, 1));
                    (b || !c) && fa.dequeue(this, a)
                })
            }, finish: function (a) {
                return a !== !1 && (a = a || "fx"), this.each(function () {
                    var b, c = fa._data(this), d = c[a + "queue"], e = c[a + "queueHooks"], f = fa.timers, g = d ? d.length : 0;
                    for (c.finish = !0, fa.queue(this, a, []), e && e.stop && e.stop.call(this, !0), b = f.length; b--;)f[b].elem === this && f[b].queue === a && (f[b].anim.stop(!0), f.splice(b, 1));
                    for (b = 0; g > b; b++)d[b] && d[b].finish && d[b].finish.call(this);
                    delete c.finish
                })
            }
        }), fa.each(["toggle", "show", "hide"], function (a, b) {
            var c = fa.fn[b];
            fa.fn[b] = function (a, d, e) {
                return null == a || "boolean" == typeof a ? c.apply(this, arguments) : this.animate(I(b, !0), a, d, e)
            }
        }), fa.each({
            slideDown: I("show"),
            slideUp: I("hide"),
            slideToggle: I("toggle"),
            fadeIn: {opacity: "show"},
            fadeOut: {opacity: "hide"},
            fadeToggle: {opacity: "toggle"}
        }, function (a, b) {
            fa.fn[a] = function (a, c, d) {
                return this.animate(b, a, c, d)
            }
        }), fa.timers = [], fa.fx.tick = function () {
            var a, b = fa.timers, c = 0;
            for (ob = fa.now(); c < b.length; c++)a = b[c], a() || b[c] !== a || b.splice(c--, 1);
            b.length || fa.fx.stop(), ob = void 0
        }, fa.fx.timer = function (a) {
            fa.timers.push(a), a() ? fa.fx.start() : fa.timers.pop()
        }, fa.fx.interval = 13, fa.fx.start = function () {
            pb || (pb = setInterval(fa.fx.tick, fa.fx.interval))
        }, fa.fx.stop = function () {
            clearInterval(pb), pb = null
        }, fa.fx.speeds = {slow: 600, fast: 200, _default: 400}, fa.fn.delay = function (a, b) {
            return a = fa.fx ? fa.fx.speeds[a] || a : a, b = b || "fx", this.queue(b, function (b, c) {
                var d = setTimeout(b, a);
                c.stop = function () {
                    clearTimeout(d)
                }
            })
        }, function () {
            var a, b, c, d, e = pa.createElement("div");
            e.setAttribute("className", "t"), e.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", a = e.getElementsByTagName("a")[0], c = pa.createElement("select"), d = c.appendChild(pa.createElement("option")), b = e.getElementsByTagName("input")[0], a.style.cssText = "top:1px", da.getSetAttribute = "t" !== e.className, da.style = /top/.test(a.getAttribute("style")), da.hrefNormalized = "/a" === a.getAttribute("href"), da.checkOn = !!b.value, da.optSelected = d.selected, da.enctype = !!pa.createElement("form").enctype, c.disabled = !0, da.optDisabled = !d.disabled, b = pa.createElement("input"), b.setAttribute("value", ""), da.input = "" === b.getAttribute("value"), b.value = "t", b.setAttribute("type", "radio"), da.radioValue = "t" === b.value, a = b = c = d = e = null
        }();
        var vb = /\r/g;
        fa.fn.extend({
            val: function (a) {
                var b, c, d, e = this[0];
                {
                    if (arguments.length)return d = fa.isFunction(a), this.each(function (c) {
                        var e;
                        1 === this.nodeType && (e = d ? a.call(this, c, fa(this).val()) : a, null == e ? e = "" : "number" == typeof e ? e += "" : fa.isArray(e) && (e = fa.map(e, function (a) {
                            return null == a ? "" : a + ""
                        })), b = fa.valHooks[this.type] || fa.valHooks[this.nodeName.toLowerCase()], b && "set" in b && void 0 !== b.set(this, e, "value") || (this.value = e))
                    });
                    if (e)return b = fa.valHooks[e.type] || fa.valHooks[e.nodeName.toLowerCase()], b && "get" in b && void 0 !== (c = b.get(e, "value")) ? c : (c = e.value, "string" == typeof c ? c.replace(vb, "") : null == c ? "" : c)
                }
            }
        }), fa.extend({
            valHooks: {
                option: {
                    get: function (a) {
                        var b = fa.find.attr(a, "value");
                        return null != b ? b : fa.text(a)
                    }
                }, select: {
                    get: function (a) {
                        for (var b, c, d = a.options, e = a.selectedIndex, f = "select-one" === a.type || 0 > e, g = f ? null : [], h = f ? e + 1 : d.length, i = 0 > e ? h : f ? e : 0; h > i; i++)if (c = d[i], (c.selected || i === e) && (da.optDisabled ? !c.disabled : null === c.getAttribute("disabled")) && (!c.parentNode.disabled || !fa.nodeName(c.parentNode, "optgroup"))) {
                            if (b = fa(c).val(), f)return b;
                            g.push(b)
                        }
                        return g
                    }, set: function (a, b) {
                        for (var c, d, e = a.options, f = fa.makeArray(b), g = e.length; g--;)if (d = e[g], fa.inArray(fa.valHooks.option.get(d), f) >= 0)try {
                            d.selected = c = !0
                        } catch (h) {
                            d.scrollHeight
                        } else d.selected = !1;
                        return c || (a.selectedIndex = -1), e
                    }
                }
            }
        }), fa.each(["radio", "checkbox"], function () {
            fa.valHooks[this] = {
                set: function (a, b) {
                    return fa.isArray(b) ? a.checked = fa.inArray(fa(a).val(), b) >= 0 : void 0
                }
            }, da.checkOn || (fa.valHooks[this].get = function (a) {
                return null === a.getAttribute("value") ? "on" : a.value
            })
        });
        var wb, xb, yb = fa.expr.attrHandle, zb = /^(?:checked|selected)$/i, Ab = da.getSetAttribute, Bb = da.input;
        fa.fn.extend({
            attr: function (a, b) {
                return Ea(this, fa.attr, a, b, arguments.length > 1)
            }, removeAttr: function (a) {
                return this.each(function () {
                    fa.removeAttr(this, a)
                })
            }
        }), fa.extend({
            attr: function (a, b, c) {
                var d, e, f = a.nodeType;
                if (a && 3 !== f && 8 !== f && 2 !== f)return typeof a.getAttribute === ya ? fa.prop(a, b, c) : (1 === f && fa.isXMLDoc(a) || (b = b.toLowerCase(), d = fa.attrHooks[b] || (fa.expr.match.bool.test(b) ? xb : wb)), void 0 === c ? d && "get" in d && null !== (e = d.get(a, b)) ? e : (e = fa.find.attr(a, b), null == e ? void 0 : e) : null !== c ? d && "set" in d && void 0 !== (e = d.set(a, c, b)) ? e : (a.setAttribute(b, c + ""), c) : void fa.removeAttr(a, b))
            }, removeAttr: function (a, b) {
                var c, d, e = 0, f = b && b.match(ua);
                if (f && 1 === a.nodeType)for (; c = f[e++];)d = fa.propFix[c] || c, fa.expr.match.bool.test(c) ? Bb && Ab || !zb.test(c) ? a[d] = !1 : a[fa.camelCase("default-" + c)] = a[d] = !1 : fa.attr(a, c, ""), a.removeAttribute(Ab ? c : d)
            }, attrHooks: {
                type: {
                    set: function (a, b) {
                        if (!da.radioValue && "radio" === b && fa.nodeName(a, "input")) {
                            var c = a.value;
                            return a.setAttribute("type", b), c && (a.value = c), b
                        }
                    }
                }
            }
        }), xb = {
            set: function (a, b, c) {
                return b === !1 ? fa.removeAttr(a, c) : Bb && Ab || !zb.test(c) ? a.setAttribute(!Ab && fa.propFix[c] || c, c) : a[fa.camelCase("default-" + c)] = a[c] = !0, c
            }
        }, fa.each(fa.expr.match.bool.source.match(/\w+/g), function (a, b) {
            var c = yb[b] || fa.find.attr;
            yb[b] = Bb && Ab || !zb.test(b) ? function (a, b, d) {
                var e, f;
                return d || (f = yb[b], yb[b] = e, e = null != c(a, b, d) ? b.toLowerCase() : null, yb[b] = f), e
            } : function (a, b, c) {
                return c ? void 0 : a[fa.camelCase("default-" + b)] ? b.toLowerCase() : null
            }
        }), Bb && Ab || (fa.attrHooks.value = {
            set: function (a, b, c) {
                return fa.nodeName(a, "input") ? void(a.defaultValue = b) : wb && wb.set(a, b, c)
            }
        }), Ab || (wb = {
            set: function (a, b, c) {
                var d = a.getAttributeNode(c);
                return d || a.setAttributeNode(d = a.ownerDocument.createAttribute(c)), d.value = b += "", "value" === c || b === a.getAttribute(c) ? b : void 0
            }
        }, yb.id = yb.name = yb.coords = function (a, b, c) {
            var d;
            return c ? void 0 : (d = a.getAttributeNode(b)) && "" !== d.value ? d.value : null
        }, fa.valHooks.button = {
            get: function (a, b) {
                var c = a.getAttributeNode(b);
                return c && c.specified ? c.value : void 0
            }, set: wb.set
        }, fa.attrHooks.contenteditable = {
            set: function (a, b, c) {
                wb.set(a, "" === b ? !1 : b, c)
            }
        }, fa.each(["width", "height"], function (a, b) {
            fa.attrHooks[b] = {
                set: function (a, c) {
                    return "" === c ? (a.setAttribute(b, "auto"), c) : void 0
                }
            }
        })), da.style || (fa.attrHooks.style = {
            get: function (a) {
                return a.style.cssText || void 0
            }, set: function (a, b) {
                return a.style.cssText = b + ""
            }
        });
        var Cb = /^(?:input|select|textarea|button|object)$/i, Db = /^(?:a|area)$/i;
        fa.fn.extend({
            prop: function (a, b) {
                return Ea(this, fa.prop, a, b, arguments.length > 1)
            }, removeProp: function (a) {
                return a = fa.propFix[a] || a, this.each(function () {
                    try {
                        this[a] = void 0, delete this[a]
                    } catch (b) {
                    }
                })
            }
        }), fa.extend({
            propFix: {"for": "htmlFor", "class": "className"}, prop: function (a, b, c) {
                var d, e, f, g = a.nodeType;
                if (a && 3 !== g && 8 !== g && 2 !== g)return f = 1 !== g || !fa.isXMLDoc(a), f && (b = fa.propFix[b] || b, e = fa.propHooks[b]), void 0 !== c ? e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : a[b] = c : e && "get" in e && null !== (d = e.get(a, b)) ? d : a[b]
            }, propHooks: {
                tabIndex: {
                    get: function (a) {
                        var b = fa.find.attr(a, "tabindex");
                        return b ? parseInt(b, 10) : Cb.test(a.nodeName) || Db.test(a.nodeName) && a.href ? 0 : -1
                    }
                }
            }
        }), da.hrefNormalized || fa.each(["href", "src"], function (a, b) {
            fa.propHooks[b] = {
                get: function (a) {
                    return a.getAttribute(b, 4)
                }
            }
        }), da.optSelected || (fa.propHooks.selected = {
            get: function (a) {
                var b = a.parentNode;
                return b && (b.selectedIndex, b.parentNode && b.parentNode.selectedIndex), null
            }
        }), fa.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
            fa.propFix[this.toLowerCase()] = this
        }), da.enctype || (fa.propFix.enctype = "encoding");
        var Eb = /[\t\r\n\f]/g;
        fa.fn.extend({
            addClass: function (a) {
                var b, c, d, e, f, g, h = 0, i = this.length, j = "string" == typeof a && a;
                if (fa.isFunction(a))return this.each(function (b) {
                    fa(this).addClass(a.call(this, b, this.className))
                });
                if (j)for (b = (a || "").match(ua) || []; i > h; h++)if (c = this[h], d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(Eb, " ") : " ")) {
                    for (f = 0; e = b[f++];)d.indexOf(" " + e + " ") < 0 && (d += e + " ");
                    g = fa.trim(d), c.className !== g && (c.className = g)
                }
                return this
            }, removeClass: function (a) {
                var b, c, d, e, f, g, h = 0, i = this.length, j = 0 === arguments.length || "string" == typeof a && a;
                if (fa.isFunction(a))return this.each(function (b) {
                    fa(this).removeClass(a.call(this, b, this.className))
                });
                if (j)for (b = (a || "").match(ua) || []; i > h; h++)if (c = this[h], d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(Eb, " ") : "")) {
                    for (f = 0; e = b[f++];)for (; d.indexOf(" " + e + " ") >= 0;)d = d.replace(" " + e + " ", " ");
                    g = a ? fa.trim(d) : "", c.className !== g && (c.className = g)
                }
                return this
            }, toggleClass: function (a, b) {
                var c = typeof a;
                return "boolean" == typeof b && "string" === c ? b ? this.addClass(a) : this.removeClass(a) : fa.isFunction(a) ? this.each(function (c) {
                    fa(this).toggleClass(a.call(this, c, this.className, b), b)
                }) : this.each(function () {
                    if ("string" === c)for (var b, d = 0, e = fa(this), f = a.match(ua) || []; b = f[d++];)e.hasClass(b) ? e.removeClass(b) : e.addClass(b); else(c === ya || "boolean" === c) && (this.className && fa._data(this, "__className__", this.className), this.className = this.className || a === !1 ? "" : fa._data(this, "__className__") || "")
                })
            }, hasClass: function (a) {
                for (var b = " " + a + " ", c = 0, d = this.length; d > c; c++)if (1 === this[c].nodeType && (" " + this[c].className + " ").replace(Eb, " ").indexOf(b) >= 0)return !0;
                return !1
            }
        }), fa.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (a, b) {
            fa.fn[b] = function (a, c) {
                return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b)
            }
        }), fa.fn.extend({
            hover: function (a, b) {
                return this.mouseenter(a).mouseleave(b || a)
            }, bind: function (a, b, c) {
                return this.on(a, null, b, c)
            }, unbind: function (a, b) {
                return this.off(a, null, b)
            }, delegate: function (a, b, c, d) {
                return this.on(b, a, c, d)
            }, undelegate: function (a, b, c) {
                return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", c)
            }
        });
        var Fb = fa.now(), Gb = /\?/, Hb = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
        fa.parseJSON = function (b) {
            if (a.JSON && a.JSON.parse)return a.JSON.parse(b + "");
            var c, d = null, e = fa.trim(b + "");
            return e && !fa.trim(e.replace(Hb, function (a, b, e, f) {
                return c && b && (d = 0), 0 === d ? a : (c = e || b, d += !f - !e, "")
            })) ? Function("return " + e)() : fa.error("Invalid JSON: " + b)
        }, fa.parseXML = function (b) {
            var c, d;
            if (!b || "string" != typeof b)return null;
            try {
                a.DOMParser ? (d = new DOMParser, c = d.parseFromString(b, "text/xml")) : (c = new ActiveXObject("Microsoft.XMLDOM"), c.async = "false", c.loadXML(b))
            } catch (e) {
                c = void 0
            }
            return c && c.documentElement && !c.getElementsByTagName("parsererror").length || fa.error("Invalid XML: " + b), c
        };
        var Ib, Jb, Kb = /#.*$/, Lb = /([?&])_=[^&]*/, Mb = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm, Nb = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, Ob = /^(?:GET|HEAD)$/, Pb = /^\/\//, Qb = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/, Rb = {}, Sb = {}, Tb = "*/".concat("*");
        try {
            Jb = location.href
        } catch (Ub) {
            Jb = pa.createElement("a"), Jb.href = "", Jb = Jb.href
        }
        Ib = Qb.exec(Jb.toLowerCase()) || [], fa.extend({
            active: 0,
            lastModified: {},
            etag: {},
            ajaxSettings: {
                url: Jb,
                type: "GET",
                isLocal: Nb.test(Ib[1]),
                global: !0,
                processData: !0,
                async: !0,
                contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                accepts: {
                    "*": Tb,
                    text: "text/plain",
                    html: "text/html",
                    xml: "application/xml, text/xml",
                    json: "application/json, text/javascript"
                },
                contents: {xml: /xml/, html: /html/, json: /json/},
                responseFields: {xml: "responseXML", text: "responseText", json: "responseJSON"},
                converters: {"* text": String, "text html": !0, "text json": fa.parseJSON, "text xml": fa.parseXML},
                flatOptions: {url: !0, context: !0}
            },
            ajaxSetup: function (a, b) {
                return b ? P(P(a, fa.ajaxSettings), b) : P(fa.ajaxSettings, a)
            },
            ajaxPrefilter: N(Rb),
            ajaxTransport: N(Sb),
            ajax: function (a, b) {
                function c(a, b, c, d) {
                    var e, k, r, s, u, w = b;
                    2 !== t && (t = 2, h && clearTimeout(h), j = void 0, g = d || "", v.readyState = a > 0 ? 4 : 0, e = a >= 200 && 300 > a || 304 === a, c && (s = Q(l, v, c)), s = R(l, s, v, e), e ? (l.ifModified && (u = v.getResponseHeader("Last-Modified"), u && (fa.lastModified[f] = u), u = v.getResponseHeader("etag"), u && (fa.etag[f] = u)), 204 === a || "HEAD" === l.type ? w = "nocontent" : 304 === a ? w = "notmodified" : (w = s.state, k = s.data, r = s.error, e = !r)) : (r = w, (a || !w) && (w = "error", 0 > a && (a = 0))), v.status = a, v.statusText = (b || w) + "", e ? o.resolveWith(m, [k, w, v]) : o.rejectWith(m, [v, w, r]), v.statusCode(q), q = void 0, i && n.trigger(e ? "ajaxSuccess" : "ajaxError", [v, l, e ? k : r]), p.fireWith(m, [v, w]), i && (n.trigger("ajaxComplete", [v, l]), --fa.active || fa.event.trigger("ajaxStop")))
                }

                "object" == typeof a && (b = a, a = void 0), b = b || {};
                var d, e, f, g, h, i, j, k, l = fa.ajaxSetup({}, b), m = l.context || l, n = l.context && (m.nodeType || m.jquery) ? fa(m) : fa.event, o = fa.Deferred(), p = fa.Callbacks("once memory"), q = l.statusCode || {}, r = {}, s = {}, t = 0, u = "canceled", v = {
                    readyState: 0,
                    getResponseHeader: function (a) {
                        var b;
                        if (2 === t) {
                            if (!k)for (k = {}; b = Mb.exec(g);)k[b[1].toLowerCase()] = b[2];
                            b = k[a.toLowerCase()]
                        }
                        return null == b ? null : b
                    },
                    getAllResponseHeaders: function () {
                        return 2 === t ? g : null
                    },
                    setRequestHeader: function (a, b) {
                        var c = a.toLowerCase();
                        return t || (a = s[c] = s[c] || a, r[a] = b), this
                    },
                    overrideMimeType: function (a) {
                        return t || (l.mimeType = a), this
                    },
                    statusCode: function (a) {
                        var b;
                        if (a)if (2 > t)for (b in a)q[b] = [q[b], a[b]]; else v.always(a[v.status]);
                        return this
                    },
                    abort: function (a) {
                        var b = a || u;
                        return j && j.abort(b), c(0, b), this
                    }
                };
                if (o.promise(v).complete = p.add, v.success = v.done, v.error = v.fail, l.url = ((a || l.url || Jb) + "").replace(Kb, "").replace(Pb, Ib[1] + "//"), l.type = b.method || b.type || l.method || l.type, l.dataTypes = fa.trim(l.dataType || "*").toLowerCase().match(ua) || [""], null == l.crossDomain && (d = Qb.exec(l.url.toLowerCase()), l.crossDomain = !(!d || d[1] === Ib[1] && d[2] === Ib[2] && (d[3] || ("http:" === d[1] ? "80" : "443")) === (Ib[3] || ("http:" === Ib[1] ? "80" : "443")))), l.data && l.processData && "string" != typeof l.data && (l.data = fa.param(l.data, l.traditional)), O(Rb, l, b, v), 2 === t)return v;
                i = l.global, i && 0 === fa.active++ && fa.event.trigger("ajaxStart"), l.type = l.type.toUpperCase(), l.hasContent = !Ob.test(l.type), f = l.url, l.hasContent || (l.data && (f = l.url += (Gb.test(f) ? "&" : "?") + l.data, delete l.data), l.cache === !1 && (l.url = Lb.test(f) ? f.replace(Lb, "$1_=" + Fb++) : f + (Gb.test(f) ? "&" : "?") + "_=" + Fb++)), l.ifModified && (fa.lastModified[f] && v.setRequestHeader("If-Modified-Since", fa.lastModified[f]), fa.etag[f] && v.setRequestHeader("If-None-Match", fa.etag[f])), (l.data && l.hasContent && l.contentType !== !1 || b.contentType) && v.setRequestHeader("Content-Type", l.contentType), v.setRequestHeader("Accept", l.dataTypes[0] && l.accepts[l.dataTypes[0]] ? l.accepts[l.dataTypes[0]] + ("*" !== l.dataTypes[0] ? ", " + Tb + "; q=0.01" : "") : l.accepts["*"]);
                for (e in l.headers)v.setRequestHeader(e, l.headers[e]);
                if (l.beforeSend && (l.beforeSend.call(m, v, l) === !1 || 2 === t))return v.abort();
                u = "abort";
                for (e in{success: 1, error: 1, complete: 1})v[e](l[e]);
                if (j = O(Sb, l, b, v)) {
                    v.readyState = 1, i && n.trigger("ajaxSend", [v, l]), l.async && l.timeout > 0 && (h = setTimeout(function () {
                        v.abort("timeout")
                    }, l.timeout));
                    try {
                        t = 1, j.send(r, c)
                    } catch (w) {
                        if (!(2 > t))throw w;
                        c(-1, w)
                    }
                } else c(-1, "No Transport");
                return v
            },
            getJSON: function (a, b, c) {
                return fa.get(a, b, c, "json")
            },
            getScript: function (a, b) {
                return fa.get(a, void 0, b, "script")
            }
        }), fa.each(["get", "post"], function (a, b) {
            fa[b] = function (a, c, d, e) {
                return fa.isFunction(c) && (e = e || d, d = c, c = void 0), fa.ajax({
                    url: a,
                    type: b,
                    dataType: e,
                    data: c,
                    success: d
                })
            }
        }), fa.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (a, b) {
            fa.fn[b] = function (a) {
                return this.on(b, a)
            }
        }), fa._evalUrl = function (a) {
            return fa.ajax({url: a, type: "GET", dataType: "script", async: !1, global: !1, "throws": !0})
        }, fa.fn.extend({
            wrapAll: function (a) {
                if (fa.isFunction(a))return this.each(function (b) {
                    fa(this).wrapAll(a.call(this, b))
                });
                if (this[0]) {
                    var b = fa(a, this[0].ownerDocument).eq(0).clone(!0);
                    this[0].parentNode && b.insertBefore(this[0]), b.map(function () {
                        for (var a = this; a.firstChild && 1 === a.firstChild.nodeType;)a = a.firstChild;
                        return a
                    }).append(this)
                }
                return this
            }, wrapInner: function (a) {
                return fa.isFunction(a) ? this.each(function (b) {
                    fa(this).wrapInner(a.call(this, b))
                }) : this.each(function () {
                    var b = fa(this), c = b.contents();
                    c.length ? c.wrapAll(a) : b.append(a)
                })
            }, wrap: function (a) {
                var b = fa.isFunction(a);
                return this.each(function (c) {
                    fa(this).wrapAll(b ? a.call(this, c) : a)
                })
            }, unwrap: function () {
                return this.parent().each(function () {
                    fa.nodeName(this, "body") || fa(this).replaceWith(this.childNodes)
                }).end()
            }
        }), fa.expr.filters.hidden = function (a) {
            return a.offsetWidth <= 0 && a.offsetHeight <= 0 || !da.reliableHiddenOffsets() && "none" === (a.style && a.style.display || fa.css(a, "display"))
        }, fa.expr.filters.visible = function (a) {
            return !fa.expr.filters.hidden(a)
        };
        var Vb = /%20/g, Wb = /\[\]$/, Xb = /\r?\n/g, Yb = /^(?:submit|button|image|reset|file)$/i, Zb = /^(?:input|select|textarea|keygen)/i;
        fa.param = function (a, b) {
            var c, d = [], e = function (a, b) {
                b = fa.isFunction(b) ? b() : null == b ? "" : b, d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b)
            };
            if (void 0 === b && (b = fa.ajaxSettings && fa.ajaxSettings.traditional), fa.isArray(a) || a.jquery && !fa.isPlainObject(a))fa.each(a, function () {
                e(this.name, this.value)
            }); else for (c in a)S(c, a[c], b, e);
            return d.join("&").replace(Vb, "+")
        }, fa.fn.extend({
            serialize: function () {
                return fa.param(this.serializeArray())
            }, serializeArray: function () {
                return this.map(function () {
                    var a = fa.prop(this, "elements");
                    return a ? fa.makeArray(a) : this
                }).filter(function () {
                    var a = this.type;
                    return this.name && !fa(this).is(":disabled") && Zb.test(this.nodeName) && !Yb.test(a) && (this.checked || !Fa.test(a))
                }).map(function (a, b) {
                    var c = fa(this).val();
                    return null == c ? null : fa.isArray(c) ? fa.map(c, function (a) {
                        return {name: b.name, value: a.replace(Xb, "\r\n")}
                    }) : {name: b.name, value: c.replace(Xb, "\r\n")}
                }).get()
            }
        }), fa.ajaxSettings.xhr = void 0 !== a.ActiveXObject ? function () {
            return !this.isLocal && /^(get|post|head|put|delete|options)$/i.test(this.type) && T() || U()
        } : T;
        var $b = 0, _b = {}, ac = fa.ajaxSettings.xhr();
        a.ActiveXObject && fa(a).on("unload", function () {
            for (var a in _b)_b[a](void 0, !0)
        }), da.cors = !!ac && "withCredentials" in ac, ac = da.ajax = !!ac, ac && fa.ajaxTransport(function (a) {
            if (!a.crossDomain || da.cors) {
                var b;
                return {
                    send: function (c, d) {
                        var e, f = a.xhr(), g = ++$b;
                        if (f.open(a.type, a.url, a.async, a.username, a.password), a.xhrFields)for (e in a.xhrFields)f[e] = a.xhrFields[e];
                        a.mimeType && f.overrideMimeType && f.overrideMimeType(a.mimeType), a.crossDomain || c["X-Requested-With"] || (c["X-Requested-With"] = "XMLHttpRequest");
                        for (e in c)void 0 !== c[e] && f.setRequestHeader(e, c[e] + "");
                        f.send(a.hasContent && a.data || null), b = function (c, e) {
                            var h, i, j;
                            if (b && (e || 4 === f.readyState))if (delete _b[g], b = void 0, f.onreadystatechange = fa.noop, e)4 !== f.readyState && f.abort(); else {
                                j = {}, h = f.status, "string" == typeof f.responseText && (j.text = f.responseText);
                                try {
                                    i = f.statusText
                                } catch (k) {
                                    i = ""
                                }
                                h || !a.isLocal || a.crossDomain ? 1223 === h && (h = 204) : h = j.text ? 200 : 404
                            }
                            j && d(h, i, j, f.getAllResponseHeaders())
                        }, a.async ? 4 === f.readyState ? setTimeout(b) : f.onreadystatechange = _b[g] = b : b()
                    }, abort: function () {
                        b && b(void 0, !0)
                    }
                }
            }
        }), fa.ajaxSetup({
            accepts: {script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},
            contents: {script: /(?:java|ecma)script/},
            converters: {
                "text script": function (a) {
                    return fa.globalEval(a), a
                }
            }
        }), fa.ajaxPrefilter("script", function (a) {
            void 0 === a.cache && (a.cache = !1), a.crossDomain && (a.type = "GET", a.global = !1)
        }), fa.ajaxTransport("script", function (a) {
            if (a.crossDomain) {
                var b, c = pa.head || fa("head")[0] || pa.documentElement;
                return {
                    send: function (d, e) {
                        b = pa.createElement("script"), b.async = !0, a.scriptCharset && (b.charset = a.scriptCharset), b.src = a.url, b.onload = b.onreadystatechange = function (a, c) {
                            (c || !b.readyState || /loaded|complete/.test(b.readyState)) && (b.onload = b.onreadystatechange = null, b.parentNode && b.parentNode.removeChild(b), b = null, c || e(200, "success"))
                        }, c.insertBefore(b, c.firstChild)
                    }, abort: function () {
                        b && b.onload(void 0, !0)
                    }
                }
            }
        });
        var bc = [], cc = /(=)\?(?=&|$)|\?\?/;
        fa.ajaxSetup({
            jsonp: "callback", jsonpCallback: function () {
                var a = bc.pop() || fa.expando + "_" + Fb++;
                return this[a] = !0, a
            }
        }), fa.ajaxPrefilter("json jsonp", function (b, c, d) {
            var e, f, g, h = b.jsonp !== !1 && (cc.test(b.url) ? "url" : "string" == typeof b.data && !(b.contentType || "").indexOf("application/x-www-form-urlencoded") && cc.test(b.data) && "data");
            return h || "jsonp" === b.dataTypes[0] ? (e = b.jsonpCallback = fa.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback, h ? b[h] = b[h].replace(cc, "$1" + e) : b.jsonp !== !1 && (b.url += (Gb.test(b.url) ? "&" : "?") + b.jsonp + "=" + e), b.converters["script json"] = function () {
                return g || fa.error(e + " was not called"), g[0]
            }, b.dataTypes[0] = "json", f = a[e], a[e] = function () {
                g = arguments
            }, d.always(function () {
                a[e] = f, b[e] && (b.jsonpCallback = c.jsonpCallback, bc.push(e)), g && fa.isFunction(f) && f(g[0]), g = f = void 0
            }), "script") : void 0
        }), fa.parseHTML = function (a, b, c) {
            if (!a || "string" != typeof a)return null;
            "boolean" == typeof b && (c = b, b = !1), b = b || pa;
            var d = ma.exec(a), e = !c && [];
            return d ? [b.createElement(d[1])] : (d = fa.buildFragment([a], b, e), e && e.length && fa(e).remove(), fa.merge([], d.childNodes))
        };
        var dc = fa.fn.load;
        fa.fn.load = function (a, b, c) {
            if ("string" != typeof a && dc)return dc.apply(this, arguments);
            var d, e, f, g = this, h = a.indexOf(" ");
            return h >= 0 && (d = a.slice(h, a.length), a = a.slice(0, h)), fa.isFunction(b) ? (c = b, b = void 0) : b && "object" == typeof b && (f = "POST"), g.length > 0 && fa.ajax({
                url: a,
                type: f,
                dataType: "html",
                data: b
            }).done(function (a) {
                e = arguments, g.html(d ? fa("<div>").append(fa.parseHTML(a)).find(d) : a)
            }).complete(c && function (a, b) {
                    g.each(c, e || [a.responseText, b, a])
                }), this
        }, fa.expr.filters.animated = function (a) {
            return fa.grep(fa.timers, function (b) {
                return a === b.elem
            }).length
        };
        var ec = a.document.documentElement;
        fa.offset = {
            setOffset: function (a, b, c) {
                var d, e, f, g, h, i, j, k = fa.css(a, "position"), l = fa(a), m = {};
                "static" === k && (a.style.position = "relative"), h = l.offset(), f = fa.css(a, "top"), i = fa.css(a, "left"), j = ("absolute" === k || "fixed" === k) && fa.inArray("auto", [f, i]) > -1, j ? (d = l.position(), g = d.top, e = d.left) : (g = parseFloat(f) || 0, e = parseFloat(i) || 0), fa.isFunction(b) && (b = b.call(a, c, h)), null != b.top && (m.top = b.top - h.top + g), null != b.left && (m.left = b.left - h.left + e), "using" in b ? b.using.call(a, m) : l.css(m)
            }
        }, fa.fn.extend({
            offset: function (a) {
                if (arguments.length)return void 0 === a ? this : this.each(function (b) {
                    fa.offset.setOffset(this, a, b)
                });
                var b, c, d = {top: 0, left: 0}, e = this[0], f = e && e.ownerDocument;
                if (f)return b = f.documentElement, fa.contains(b, e) ? (typeof e.getBoundingClientRect !== ya && (d = e.getBoundingClientRect()), c = V(f), {
                    top: d.top + (c.pageYOffset || b.scrollTop) - (b.clientTop || 0),
                    left: d.left + (c.pageXOffset || b.scrollLeft) - (b.clientLeft || 0)
                }) : d
            }, position: function () {
                if (this[0]) {
                    var a, b, c = {top: 0, left: 0}, d = this[0];
                    return "fixed" === fa.css(d, "position") ? b = d.getBoundingClientRect() : (a = this.offsetParent(), b = this.offset(), fa.nodeName(a[0], "html") || (c = a.offset()), c.top += fa.css(a[0], "borderTopWidth", !0), c.left += fa.css(a[0], "borderLeftWidth", !0)), {
                        top: b.top - c.top - fa.css(d, "marginTop", !0),
                        left: b.left - c.left - fa.css(d, "marginLeft", !0)
                    }
                }
            }, offsetParent: function () {
                return this.map(function () {
                    for (var a = this.offsetParent || ec; a && !fa.nodeName(a, "html") && "static" === fa.css(a, "position");)a = a.offsetParent;
                    return a || ec
                })
            }
        }), fa.each({scrollLeft: "pageXOffset", scrollTop: "pageYOffset"}, function (a, b) {
            var c = /Y/.test(b);
            fa.fn[a] = function (d) {
                return Ea(this, function (a, d, e) {
                    var f = V(a);
                    return void 0 === e ? f ? b in f ? f[b] : f.document.documentElement[d] : a[d] : void(f ? f.scrollTo(c ? fa(f).scrollLeft() : e, c ? e : fa(f).scrollTop()) : a[d] = e)
                }, a, d, arguments.length, null)
            }
        }), fa.each(["top", "left"], function (a, b) {
            fa.cssHooks[b] = A(da.pixelPosition, function (a, c) {
                return c ? (c = cb(a, b), eb.test(c) ? fa(a).position()[b] + "px" : c) : void 0
            })
        }), fa.each({Height: "height", Width: "width"}, function (a, b) {
            fa.each({padding: "inner" + a, content: b, "": "outer" + a}, function (c, d) {
                fa.fn[d] = function (d, e) {
                    var f = arguments.length && (c || "boolean" != typeof d), g = c || (d === !0 || e === !0 ? "margin" : "border");
                    return Ea(this, function (b, c, d) {
                        var e;
                        return fa.isWindow(b) ? b.document.documentElement["client" + a] : 9 === b.nodeType ? (e = b.documentElement, Math.max(b.body["scroll" + a], e["scroll" + a], b.body["offset" + a], e["offset" + a], e["client" + a])) : void 0 === d ? fa.css(b, c, g) : fa.style(b, c, d, g)
                    }, b, f ? d : void 0, f, null)
                }
            })
        }), fa.fn.size = function () {
            return this.length
        }, fa.fn.andSelf = fa.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function () {
            return fa
        });
        var fc = a.jQuery, gc = a.$;
        return fa.noConflict = function (b) {
            return a.$ === fa && (a.$ = gc), b && a.jQuery === fa && (a.jQuery = fc), fa
        }, typeof b === ya && (a.jQuery = a.$ = fa), fa
    }), define("base", ["config", "jquery"], function (a, b) {
        function c(a) {
            var b = 0;
            if (!d(a))for (var c = 0; c < a.length; c++)b = 31 * b + a.charCodeAt(c), b = e(b);
            return b
        }

        function d(a) {
            return null == a || "" == a.value
        }

        function e(a) {
            var b = 2147483647, c = -2147483648;
            return a > b || c > a ? a &= 4294967295 : a
        }

        b.ajaxSetup({cache: !1});
        var f = {
            Get: function (a) {
                if (document.cookie.length > 0) {
                    var b = document.cookie.indexOf(a + "=");
                    if (-1 != b) {
                        b = b + a.length + 1;
                        var c = document.cookie.indexOf(";", b);
                        return -1 == c && (c = document.cookie.length), decodeURI(document.cookie.substring(b, c))
                    }
                }
                return null
            }, Set: function (a, b, c) {
                var d = new Date;
                d.setDate(d.getDate() + c), document.cookie = a + "=" + escape(b) + (null == c ? "" : ";expires=" + d.toGMTString()) + ";path=/;domain=.qlteacher.com"
            }
        }, g = {
            GetURLParameter: function (a) {
                for (var b = window.location.search.substring(1), c = b.split("&"), d = 0; d < c.length; d++) {
                    var e = c[d].split("=");
                    if (e[0] == a)return e[1]
                }
                return null
            }
        };
        a.CODE_TYPE = a.CODE_TYPE || "deploy", a.TEST_DATA_PREFIX = a.TEST_DATA_PREFIX || "dapi";
        var h = "dev" == a.CODE_TYPE.toString().toLowerCase() ? a.TEST_DATA_DOMAIN + a.TEST_DATA_PREFIX : a.SITE_DOMAIN + a.TEST_DATA_PREFIX;
        return {
            platform: {name: a.PLANTFORM_NAME},
            site: {name: a.SITE_NAME, domain: a.SITE_DOMAIN},
            app: {
                user: a.APP.ACCOUNTCENTER,
                zone: a.APP.ZONE,
                teacher: a.APP.TEACHER,
                project: a.APP.PROJECT,
                blog: a.APP.BLOG,
                course: a.APP.COURSE
            },
            dataUri: {
                app: h + "/app/",
                course: h + "/course/",
                hotspot: h + "/hotspot/",
                navigation: h + "/navigation/",
                news: h + "/news/",
                user: h + "/user/",
                zone: h + "/zone/"
            },
            avatar: function (b) {
                var d = 10, e = Math.abs(c(b) % d), f = Math.abs(parseInt(c(b) / d) % 1e3), g = a.APP.AVATAR || "//avatar.qlteacher.com/", h = g + e + "/" + f + "/" + b + "/";
                return {large: h + "big.jpg", middle: h + "middle.jpg", small: h + "small.jpg"}
            },
            authCookieName: a.COOKIE_AUTH_NAME,
            isLogin: function () {
                var b = f.Get(a.COOKIE_AUTH_NAME);
                try {
                    return "1" == b.charAt(0)
                } catch (c) {
                    return !1
                }
            },
            logout: function () {
                f.Set("userInfo", "", -1)
            },
            urlParam: g.GetURLParameter
        }
    }), function (a, b) {
        function c(b, c) {
            var e, f, g, h = b.nodeName.toLowerCase();
            return "area" === h ? (e = b.parentNode, f = e.name, b.href && f && "map" === e.nodeName.toLowerCase() ? (g = a("img[usemap=#" + f + "]")[0], !!g && d(g)) : !1) : (/input|select|textarea|button|object/.test(h) ? !b.disabled : "a" === h ? b.href || c : c) && d(b)
        }

        function d(b) {
            return a.expr.filters.visible(b) && !a(b).parents().andSelf().filter(function () {
                    return "hidden" === a.css(this, "visibility")
                }).length
        }

        var e = 0, f = /^ui-id-\d+$/;
        a.ui = a.ui || {}, a.ui.version || (a.extend(a.ui, {
            version: "1.9.2",
            keyCode: {
                BACKSPACE: 8,
                COMMA: 188,
                DELETE: 46,
                DOWN: 40,
                END: 35,
                ENTER: 13,
                ESCAPE: 27,
                HOME: 36,
                LEFT: 37,
                NUMPAD_ADD: 107,
                NUMPAD_DECIMAL: 110,
                NUMPAD_DIVIDE: 111,
                NUMPAD_ENTER: 108,
                NUMPAD_MULTIPLY: 106,
                NUMPAD_SUBTRACT: 109,
                PAGE_DOWN: 34,
                PAGE_UP: 33,
                PERIOD: 190,
                RIGHT: 39,
                SPACE: 32,
                TAB: 9,
                UP: 38
            }
        }), a.fn.extend({
            _focus: a.fn.focus, focus: function (b, c) {
                return "number" == typeof b ? this.each(function () {
                    var d = this;
                    setTimeout(function () {
                        a(d).focus(), c && c.call(d)
                    }, b)
                }) : this._focus.apply(this, arguments)
            }, scrollParent: function () {
                var b;
                return b = a.ui.ie && /(static|relative)/.test(this.css("position")) || /absolute/.test(this.css("position")) ? this.parents().filter(function () {
                    return /(relative|absolute|fixed)/.test(a.css(this, "position")) && /(auto|scroll)/.test(a.css(this, "overflow") + a.css(this, "overflow-y") + a.css(this, "overflow-x"))
                }).eq(0) : this.parents().filter(function () {
                    return /(auto|scroll)/.test(a.css(this, "overflow") + a.css(this, "overflow-y") + a.css(this, "overflow-x"))
                }).eq(0), /fixed/.test(this.css("position")) || !b.length ? a(document) : b
            }, zIndex: function (c) {
                if (c !== b)return this.css("zIndex", c);
                if (this.length)for (var d, e, f = a(this[0]); f.length && f[0] !== document;) {
                    if (d = f.css("position"), ("absolute" === d || "relative" === d || "fixed" === d) && (e = parseInt(f.css("zIndex"), 10), !isNaN(e) && 0 !== e))return e;
                    f = f.parent()
                }
                return 0
            }, uniqueId: function () {
                return this.each(function () {
                    this.id || (this.id = "ui-id-" + ++e)
                })
            }, removeUniqueId: function () {
                return this.each(function () {
                    f.test(this.id) && a(this).removeAttr("id")
                })
            }
        }), a.extend(a.expr[":"], {
            data: a.expr.createPseudo ? a.expr.createPseudo(function (b) {
                return function (c) {
                    return !!a.data(c, b)
                }
            }) : function (b, c, d) {
                return !!a.data(b, d[3])
            }, focusable: function (b) {
                return c(b, !isNaN(a.attr(b, "tabindex")))
            }, tabbable: function (b) {
                var d = a.attr(b, "tabindex"), e = isNaN(d);
                return (e || d >= 0) && c(b, !e)
            }
        }), a(function () {
            var b = document.body, c = b.appendChild(c = document.createElement("div"));
            c.offsetHeight, a.extend(c.style, {
                minHeight: "100px",
                height: "auto",
                padding: 0,
                borderWidth: 0
            }), a.support.minHeight = 100 === c.offsetHeight, a.support.selectstart = "onselectstart" in c, b.removeChild(c).style.display = "none"
        }), a("<a>").outerWidth(1).jquery || a.each(["Width", "Height"], function (c, d) {
            function e(b, c, d, e) {
                return a.each(f, function () {
                    c -= parseFloat(a.css(b, "padding" + this)) || 0, d && (c -= parseFloat(a.css(b, "border" + this + "Width")) || 0), e && (c -= parseFloat(a.css(b, "margin" + this)) || 0)
                }), c
            }

            var f = "Width" === d ? ["Left", "Right"] : ["Top", "Bottom"], g = d.toLowerCase(), h = {
                innerWidth: a.fn.innerWidth,
                innerHeight: a.fn.innerHeight,
                outerWidth: a.fn.outerWidth,
                outerHeight: a.fn.outerHeight
            };
            a.fn["inner" + d] = function (c) {
                return c === b ? h["inner" + d].call(this) : this.each(function () {
                    a(this).css(g, e(this, c) + "px")
                })
            }, a.fn["outer" + d] = function (b, c) {
                return "number" != typeof b ? h["outer" + d].call(this, b) : this.each(function () {
                    a(this).css(g, e(this, b, !0, c) + "px")
                })
            }
        }), a("<a>").data("a-b", "a").removeData("a-b").data("a-b") && (a.fn.removeData = function (b) {
            return function (c) {
                return arguments.length ? b.call(this, a.camelCase(c)) : b.call(this)
            }
        }(a.fn.removeData)), function () {
            var b = /msie ([\w.]+)/.exec(navigator.userAgent.toLowerCase()) || [];
            a.ui.ie = b.length ? !0 : !1, a.ui.ie6 = 6 === parseFloat(b[1], 10)
        }(), a.fn.extend({
            disableSelection: function () {
                return this.bind((a.support.selectstart ? "selectstart" : "mousedown") + ".ui-disableSelection", function (a) {
                    a.preventDefault()
                })
            }, enableSelection: function () {
                return this.unbind(".ui-disableSelection")
            }
        }), a.extend(a.ui, {
            plugin: {
                add: function (b, c, d) {
                    var e, f = a.ui[b].prototype;
                    for (e in d)f.plugins[e] = f.plugins[e] || [], f.plugins[e].push([c, d[e]])
                }, call: function (a, b, c) {
                    var d, e = a.plugins[b];
                    if (e && a.element[0].parentNode && 11 !== a.element[0].parentNode.nodeType)for (d = 0; d < e.length; d++)a.options[e[d][0]] && e[d][1].apply(a.element, c)
                }
            }, contains: a.contains, hasScroll: function (b, c) {
                if ("hidden" === a(b).css("overflow"))return !1;
                var d = c && "left" === c ? "scrollLeft" : "scrollTop", e = !1;
                return b[d] > 0 ? !0 : (b[d] = 1, e = b[d] > 0, b[d] = 0, e)
            }, isOverAxis: function (a, b, c) {
                return a > b && b + c > a
            }, isOver: function (b, c, d, e, f, g) {
                return a.ui.isOverAxis(b, d, f) && a.ui.isOverAxis(c, e, g)
            }
        }))
    }(jQuery), function (a, b) {
        var c = 0, d = Array.prototype.slice, e = a.cleanData;
        a.cleanData = function (b) {
            for (var c, d = 0; null != (c = b[d]); d++)try {
                a(c).triggerHandler("remove")
            } catch (f) {
            }
            e(b)
        }, a.widget = function (b, c, d) {
            var e, f, g, h, i = b.split(".")[0];
            b = b.split(".")[1], e = i + "-" + b, d || (d = c, c = a.Widget), a.expr[":"][e.toLowerCase()] = function (b) {
                return !!a.data(b, e)
            }, a[i] = a[i] || {}, f = a[i][b], g = a[i][b] = function (a, b) {
                return this._createWidget ? void(arguments.length && this._createWidget(a, b)) : new g(a, b)
            }, a.extend(g, f, {
                version: d.version,
                _proto: a.extend({}, d),
                _childConstructors: []
            }), h = new c, h.options = a.widget.extend({}, h.options), a.each(d, function (b, e) {
                a.isFunction(e) && (d[b] = function () {
                    var a = function () {
                        return c.prototype[b].apply(this, arguments)
                    }, d = function (a) {
                        return c.prototype[b].apply(this, a)
                    };
                    return function () {
                        var b, c = this._super, f = this._superApply;
                        return this._super = a, this._superApply = d, b = e.apply(this, arguments), this._super = c, this._superApply = f, b
                    }
                }())
            }), g.prototype = a.widget.extend(h, {widgetEventPrefix: f ? h.widgetEventPrefix : b}, d, {
                constructor: g,
                namespace: i,
                widgetName: b,
                widgetBaseClass: e,
                widgetFullName: e
            }), f ? (a.each(f._childConstructors, function (b, c) {
                var d = c.prototype;
                a.widget(d.namespace + "." + d.widgetName, g, c._proto)
            }), delete f._childConstructors) : c._childConstructors.push(g), a.widget.bridge(b, g)
        }, a.widget.extend = function (c) {
            for (var e, f, g = d.call(arguments, 1), h = 0, i = g.length; i > h; h++)for (e in g[h])f = g[h][e], g[h].hasOwnProperty(e) && f !== b && (a.isPlainObject(f) ? c[e] = a.isPlainObject(c[e]) ? a.widget.extend({}, c[e], f) : a.widget.extend({}, f) : c[e] = f);
            return c
        }, a.widget.bridge = function (c, e) {
            var f = e.prototype.widgetFullName || c;
            a.fn[c] = function (g) {
                var h = "string" == typeof g, i = d.call(arguments, 1), j = this;
                return g = !h && i.length ? a.widget.extend.apply(null, [g].concat(i)) : g, h ? this.each(function () {
                    var d, e = a.data(this, f);
                    return e ? a.isFunction(e[g]) && "_" !== g.charAt(0) ? (d = e[g].apply(e, i), d !== e && d !== b ? (j = d && d.jquery ? j.pushStack(d.get()) : d, !1) : void 0) : a.error("no such method '" + g + "' for " + c + " widget instance") : a.error("cannot call methods on " + c + " prior to initialization; attempted to call method '" + g + "'")
                }) : this.each(function () {
                    var b = a.data(this, f);
                    b ? b.option(g || {})._init() : a.data(this, f, new e(g, this))
                }), j
            }
        }, a.Widget = function () {
        }, a.Widget._childConstructors = [], a.Widget.prototype = {
            widgetName: "widget",
            widgetEventPrefix: "",
            defaultElement: "<div>",
            options: {disabled: !1, create: null},
            _createWidget: function (b, d) {
                d = a(d || this.defaultElement || this)[0], this.element = a(d), this.uuid = c++, this.eventNamespace = "." + this.widgetName + this.uuid, this.options = a.widget.extend({}, this.options, this._getCreateOptions(), b), this.bindings = a(), this.hoverable = a(), this.focusable = a(), d !== this && (a.data(d, this.widgetName, this), a.data(d, this.widgetFullName, this), this._on(!0, this.element, {
                    remove: function (a) {
                        a.target === d && this.destroy()
                    }
                }), this.document = a(d.style ? d.ownerDocument : d.document || d), this.window = a(this.document[0].defaultView || this.document[0].parentWindow)), this._create(), this._trigger("create", null, this._getCreateEventData()), this._init()
            },
            _getCreateOptions: a.noop,
            _getCreateEventData: a.noop,
            _create: a.noop,
            _init: a.noop,
            destroy: function () {
                this._destroy(), this.element.unbind(this.eventNamespace).removeData(this.widgetName).removeData(this.widgetFullName).removeData(a.camelCase(this.widgetFullName)), this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName + "-disabled ui-state-disabled"), this.bindings.unbind(this.eventNamespace), this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus")
            },
            _destroy: a.noop,
            widget: function () {
                return this.element
            },
            option: function (c, d) {
                var e, f, g, h = c;
                if (0 === arguments.length)return a.widget.extend({}, this.options);
                if ("string" == typeof c)if (h = {}, e = c.split("."), c = e.shift(), e.length) {
                    for (f = h[c] = a.widget.extend({}, this.options[c]), g = 0; g < e.length - 1; g++)f[e[g]] = f[e[g]] || {}, f = f[e[g]];
                    if (c = e.pop(), d === b)return f[c] === b ? null : f[c];
                    f[c] = d
                } else {
                    if (d === b)return this.options[c] === b ? null : this.options[c];
                    h[c] = d
                }
                return this._setOptions(h), this
            },
            _setOptions: function (a) {
                var b;
                for (b in a)this._setOption(b, a[b]);
                return this
            },
            _setOption: function (a, b) {
                return this.options[a] = b, "disabled" === a && (this.widget().toggleClass(this.widgetFullName + "-disabled ui-state-disabled", !!b).attr("aria-disabled", b), this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus")), this
            },
            enable: function () {
                return this._setOption("disabled", !1)
            },
            disable: function () {
                return this._setOption("disabled", !0)
            },
            _on: function (b, c, d) {
                var e, f = this;
                "boolean" != typeof b && (d = c, c = b, b = !1), d ? (c = e = a(c), this.bindings = this.bindings.add(c)) : (d = c, c = this.element, e = this.widget()), a.each(d, function (d, g) {
                    function h() {
                        return b || f.options.disabled !== !0 && !a(this).hasClass("ui-state-disabled") ? ("string" == typeof g ? f[g] : g).apply(f, arguments) : void 0
                    }

                    "string" != typeof g && (h.guid = g.guid = g.guid || h.guid || a.guid++);
                    var i = d.match(/^(\w+)\s*(.*)$/), j = i[1] + f.eventNamespace, k = i[2];
                    k ? e.delegate(k, j, h) : c.bind(j, h)
                })
            },
            _off: function (a, b) {
                b = (b || "").split(" ").join(this.eventNamespace + " ") + this.eventNamespace, a.unbind(b).undelegate(b)
            },
            _delay: function (a, b) {
                function c() {
                    return ("string" == typeof a ? d[a] : a).apply(d, arguments)
                }

                var d = this;
                return setTimeout(c, b || 0)
            },
            _hoverable: function (b) {
                this.hoverable = this.hoverable.add(b), this._on(b, {
                    mouseenter: function (b) {
                        a(b.currentTarget).addClass("ui-state-hover")
                    }, mouseleave: function (b) {
                        a(b.currentTarget).removeClass("ui-state-hover")
                    }
                })
            },
            _focusable: function (b) {
                this.focusable = this.focusable.add(b), this._on(b, {
                    focusin: function (b) {
                        a(b.currentTarget).addClass("ui-state-focus")
                    }, focusout: function (b) {
                        a(b.currentTarget).removeClass("ui-state-focus")
                    }
                })
            },
            _trigger: function (b, c, d) {
                var e, f, g = this.options[b];
                if (d = d || {}, c = a.Event(c), c.type = (b === this.widgetEventPrefix ? b : this.widgetEventPrefix + b).toLowerCase(), c.target = this.element[0], f = c.originalEvent)for (e in f)e in c || (c[e] = f[e]);
                return this.element.trigger(c, d), !(a.isFunction(g) && g.apply(this.element[0], [c].concat(d)) === !1 || c.isDefaultPrevented())
            }
        }, a.each({show: "fadeIn", hide: "fadeOut"}, function (b, c) {
            a.Widget.prototype["_" + b] = function (d, e, f) {
                "string" == typeof e && (e = {effect: e});
                var g, h = e ? e === !0 || "number" == typeof e ? c : e.effect || c : b;
                e = e || {}, "number" == typeof e && (e = {duration: e}), g = !a.isEmptyObject(e), e.complete = f, e.delay && d.delay(e.delay), g && a.effects && (a.effects.effect[h] || a.uiBackCompat !== !1 && a.effects[h]) ? d[b](e) : h !== b && d[h] ? d[h](e.duration, e.easing, f) : d.queue(function (c) {
                    a(this)[b](), f && f.call(d[0]), c()
                })
            }
        }), a.uiBackCompat !== !1 && (a.Widget.prototype._getCreateOptions = function () {
            return a.metadata && a.metadata.get(this.element[0])[this.widgetName]
        })
    }(jQuery), function (a, b) {
        var c = !1;
        a(document).mouseup(function (a) {
            c = !1
        }), a.widget("ui.mouse", {
            version: "1.9.2",
            options: {cancel: "input,textarea,button,select,option", distance: 1, delay: 0},
            _mouseInit: function () {
                var b = this;
                this.element.bind("mousedown." + this.widgetName, function (a) {
                    return b._mouseDown(a)
                }).bind("click." + this.widgetName, function (c) {
                    return !0 === a.data(c.target, b.widgetName + ".preventClickEvent") ? (a.removeData(c.target, b.widgetName + ".preventClickEvent"), c.stopImmediatePropagation(), !1) : void 0
                }), this.started = !1
            },
            _mouseDestroy: function () {
                this.element.unbind("." + this.widgetName), this._mouseMoveDelegate && a(document).unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate)
            },
            _mouseDown: function (b) {
                if (!c) {
                    this._mouseStarted && this._mouseUp(b), this._mouseDownEvent = b;
                    var d = this, e = 1 === b.which, f = "string" == typeof this.options.cancel && b.target.nodeName ? a(b.target).closest(this.options.cancel).length : !1;
                    return e && !f && this._mouseCapture(b) ? (this.mouseDelayMet = !this.options.delay, this.mouseDelayMet || (this._mouseDelayTimer = setTimeout(function () {
                        d.mouseDelayMet = !0
                    }, this.options.delay)), this._mouseDistanceMet(b) && this._mouseDelayMet(b) && (this._mouseStarted = this._mouseStart(b) !== !1, !this._mouseStarted) ? (b.preventDefault(), !0) : (!0 === a.data(b.target, this.widgetName + ".preventClickEvent") && a.removeData(b.target, this.widgetName + ".preventClickEvent"), this._mouseMoveDelegate = function (a) {
                        return d._mouseMove(a)
                    }, this._mouseUpDelegate = function (a) {
                        return d._mouseUp(a)
                    }, a(document).bind("mousemove." + this.widgetName, this._mouseMoveDelegate).bind("mouseup." + this.widgetName, this._mouseUpDelegate), b.preventDefault(), c = !0, !0)) : !0
                }
            },
            _mouseMove: function (b) {
                return !a.ui.ie || document.documentMode >= 9 || b.button ? this._mouseStarted ? (this._mouseDrag(b), b.preventDefault()) : (this._mouseDistanceMet(b) && this._mouseDelayMet(b) && (this._mouseStarted = this._mouseStart(this._mouseDownEvent, b) !== !1, this._mouseStarted ? this._mouseDrag(b) : this._mouseUp(b)), !this._mouseStarted) : this._mouseUp(b)
            },
            _mouseUp: function (b) {
                return a(document).unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate), this._mouseStarted && (this._mouseStarted = !1, b.target === this._mouseDownEvent.target && a.data(b.target, this.widgetName + ".preventClickEvent", !0), this._mouseStop(b)), !1
            },
            _mouseDistanceMet: function (a) {
                return Math.max(Math.abs(this._mouseDownEvent.pageX - a.pageX), Math.abs(this._mouseDownEvent.pageY - a.pageY)) >= this.options.distance
            },
            _mouseDelayMet: function (a) {
                return this.mouseDelayMet
            },
            _mouseStart: function (a) {
            },
            _mouseDrag: function (a) {
            },
            _mouseStop: function (a) {
            },
            _mouseCapture: function (a) {
                return !0
            }
        })
    }(jQuery), function (a, b) {
        a.widget("ui.draggable", a.ui.mouse, {
            version: "1.9.2",
            widgetEventPrefix: "drag",
            options: {
                addClasses: !0,
                appendTo: "parent",
                axis: !1,
                connectToSortable: !1,
                containment: !1,
                cursor: "auto",
                cursorAt: !1,
                grid: !1,
                handle: !1,
                helper: "original",
                iframeFix: !1,
                opacity: !1,
                refreshPositions: !1,
                revert: !1,
                revertDuration: 500,
                scope: "default",
                scroll: !0,
                scrollSensitivity: 20,
                scrollSpeed: 20,
                snap: !1,
                snapMode: "both",
                snapTolerance: 20,
                stack: !1,
                zIndex: !1
            },
            _create: function () {
                "original" != this.options.helper || /^(?:r|a|f)/.test(this.element.css("position")) || (this.element[0].style.position = "relative"), this.options.addClasses && this.element.addClass("ui-draggable"), this.options.disabled && this.element.addClass("ui-draggable-disabled"), this._mouseInit()
            },
            _destroy: function () {
                this.element.removeClass("ui-draggable ui-draggable-dragging ui-draggable-disabled"), this._mouseDestroy()
            },
            _mouseCapture: function (b) {
                var c = this.options;
                return this.helper || c.disabled || a(b.target).is(".ui-resizable-handle") ? !1 : (this.handle = this._getHandle(b), this.handle ? (a(c.iframeFix === !0 ? "iframe" : c.iframeFix).each(function () {
                    a('<div class="ui-draggable-iframeFix" style="background: #fff;"></div>').css({
                        width: this.offsetWidth + "px",
                        height: this.offsetHeight + "px",
                        position: "absolute",
                        opacity: "0.001",
                        zIndex: 1e3
                    }).css(a(this).offset()).appendTo("body")
                }), !0) : !1)
            },
            _mouseStart: function (b) {
                var c = this.options;
                return this.helper = this._createHelper(b), this.helper.addClass("ui-draggable-dragging"), this._cacheHelperProportions(), a.ui.ddmanager && (a.ui.ddmanager.current = this), this._cacheMargins(), this.cssPosition = this.helper.css("position"), this.scrollParent = this.helper.scrollParent(), this.offset = this.positionAbs = this.element.offset(), this.offset = {
                    top: this.offset.top - this.margins.top,
                    left: this.offset.left - this.margins.left
                }, a.extend(this.offset, {
                    click: {left: b.pageX - this.offset.left, top: b.pageY - this.offset.top},
                    parent: this._getParentOffset(),
                    relative: this._getRelativeOffset()
                }), this.originalPosition = this.position = this._generatePosition(b), this.originalPageX = b.pageX, this.originalPageY = b.pageY, c.cursorAt && this._adjustOffsetFromHelper(c.cursorAt), c.containment && this._setContainment(), this._trigger("start", b) === !1 ? (this._clear(), !1) : (this._cacheHelperProportions(), a.ui.ddmanager && !c.dropBehaviour && a.ui.ddmanager.prepareOffsets(this, b), this._mouseDrag(b, !0), a.ui.ddmanager && a.ui.ddmanager.dragStart(this, b), !0)
            },
            _mouseDrag: function (b, c) {
                if (this.position = this._generatePosition(b), this.positionAbs = this._convertPositionTo("absolute"), !c) {
                    var d = this._uiHash();
                    if (this._trigger("drag", b, d) === !1)return this._mouseUp({}), !1;
                    this.position = d.position
                }
                return this.options.axis && "y" == this.options.axis || (this.helper[0].style.left = this.position.left + "px"), this.options.axis && "x" == this.options.axis || (this.helper[0].style.top = this.position.top + "px"), a.ui.ddmanager && a.ui.ddmanager.drag(this, b), !1
            },
            _mouseStop: function (b) {
                var c = !1;
                a.ui.ddmanager && !this.options.dropBehaviour && (c = a.ui.ddmanager.drop(this, b)), this.dropped && (c = this.dropped, this.dropped = !1);
                for (var d = this.element[0], e = !1; d && (d = d.parentNode);)d == document && (e = !0);
                if (!e && "original" === this.options.helper)return !1;
                if ("invalid" == this.options.revert && !c || "valid" == this.options.revert && c || this.options.revert === !0 || a.isFunction(this.options.revert) && this.options.revert.call(this.element, c)) {
                    var f = this;
                    a(this.helper).animate(this.originalPosition, parseInt(this.options.revertDuration, 10), function () {
                        f._trigger("stop", b) !== !1 && f._clear()
                    })
                } else this._trigger("stop", b) !== !1 && this._clear();
                return !1
            },
            _mouseUp: function (b) {
                return a("div.ui-draggable-iframeFix").each(function () {
                    this.parentNode.removeChild(this)
                }), a.ui.ddmanager && a.ui.ddmanager.dragStop(this, b), a.ui.mouse.prototype._mouseUp.call(this, b)
            },
            cancel: function () {
                return this.helper.is(".ui-draggable-dragging") ? this._mouseUp({}) : this._clear(), this
            },
            _getHandle: function (b) {
                var c = this.options.handle && a(this.options.handle, this.element).length ? !1 : !0;
                return a(this.options.handle, this.element).find("*").andSelf().each(function () {
                    this == b.target && (c = !0)
                }), c
            },
            _createHelper: function (b) {
                var c = this.options, d = a.isFunction(c.helper) ? a(c.helper.apply(this.element[0], [b])) : "clone" == c.helper ? this.element.clone().removeAttr("id") : this.element;
                return d.parents("body").length || d.appendTo("parent" == c.appendTo ? this.element[0].parentNode : c.appendTo), d[0] == this.element[0] || /(fixed|absolute)/.test(d.css("position")) || d.css("position", "absolute"), d
            },
            _adjustOffsetFromHelper: function (b) {
                "string" == typeof b && (b = b.split(" ")), a.isArray(b) && (b = {
                    left: +b[0],
                    top: +b[1] || 0
                }), "left" in b && (this.offset.click.left = b.left + this.margins.left), "right" in b && (this.offset.click.left = this.helperProportions.width - b.right + this.margins.left), "top" in b && (this.offset.click.top = b.top + this.margins.top), "bottom" in b && (this.offset.click.top = this.helperProportions.height - b.bottom + this.margins.top)
            },
            _getParentOffset: function () {
                this.offsetParent = this.helper.offsetParent();
                var b = this.offsetParent.offset();
                return "absolute" == this.cssPosition && this.scrollParent[0] != document && a.contains(this.scrollParent[0], this.offsetParent[0]) && (b.left += this.scrollParent.scrollLeft(), b.top += this.scrollParent.scrollTop()), (this.offsetParent[0] == document.body || this.offsetParent[0].tagName && "html" == this.offsetParent[0].tagName.toLowerCase() && a.ui.ie) && (b = {
                    top: 0,
                    left: 0
                }), {
                    top: b.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
                    left: b.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)
                }
            },
            _getRelativeOffset: function () {
                if ("relative" == this.cssPosition) {
                    var a = this.element.position();
                    return {
                        top: a.top - (parseInt(this.helper.css("top"), 10) || 0) + this.scrollParent.scrollTop(),
                        left: a.left - (parseInt(this.helper.css("left"), 10) || 0) + this.scrollParent.scrollLeft()
                    }
                }
                return {top: 0, left: 0}
            },
            _cacheMargins: function () {
                this.margins = {
                    left: parseInt(this.element.css("marginLeft"), 10) || 0,
                    top: parseInt(this.element.css("marginTop"), 10) || 0,
                    right: parseInt(this.element.css("marginRight"), 10) || 0,
                    bottom: parseInt(this.element.css("marginBottom"), 10) || 0
                }
            },
            _cacheHelperProportions: function () {
                this.helperProportions = {width: this.helper.outerWidth(), height: this.helper.outerHeight()}
            },
            _setContainment: function () {
                var b = this.options;
                if ("parent" == b.containment && (b.containment = this.helper[0].parentNode), ("document" == b.containment || "window" == b.containment) && (this.containment = ["document" == b.containment ? 0 : a(window).scrollLeft() - this.offset.relative.left - this.offset.parent.left, "document" == b.containment ? 0 : a(window).scrollTop() - this.offset.relative.top - this.offset.parent.top, ("document" == b.containment ? 0 : a(window).scrollLeft()) + a("document" == b.containment ? document : window).width() - this.helperProportions.width - this.margins.left, ("document" == b.containment ? 0 : a(window).scrollTop()) + (a("document" == b.containment ? document : window).height() || document.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top]), /^(document|window|parent)$/.test(b.containment) || b.containment.constructor == Array)b.containment.constructor == Array && (this.containment = b.containment); else {
                    var c = a(b.containment), d = c[0];
                    if (!d)return;
                    var e = (c.offset(), "hidden" != a(d).css("overflow"));
                    this.containment = [(parseInt(a(d).css("borderLeftWidth"), 10) || 0) + (parseInt(a(d).css("paddingLeft"), 10) || 0), (parseInt(a(d).css("borderTopWidth"), 10) || 0) + (parseInt(a(d).css("paddingTop"), 10) || 0), (e ? Math.max(d.scrollWidth, d.offsetWidth) : d.offsetWidth) - (parseInt(a(d).css("borderLeftWidth"), 10) || 0) - (parseInt(a(d).css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left - this.margins.right, (e ? Math.max(d.scrollHeight, d.offsetHeight) : d.offsetHeight) - (parseInt(a(d).css("borderTopWidth"), 10) || 0) - (parseInt(a(d).css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top - this.margins.bottom], this.relative_container = c
                }
            },
            _convertPositionTo: function (b, c) {
                c || (c = this.position);
                var d = "absolute" == b ? 1 : -1, e = (this.options, "absolute" != this.cssPosition || this.scrollParent[0] != document && a.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent), f = /(html|body)/i.test(e[0].tagName);
                return {
                    top: c.top + this.offset.relative.top * d + this.offset.parent.top * d - ("fixed" == this.cssPosition ? -this.scrollParent.scrollTop() : f ? 0 : e.scrollTop()) * d,
                    left: c.left + this.offset.relative.left * d + this.offset.parent.left * d - ("fixed" == this.cssPosition ? -this.scrollParent.scrollLeft() : f ? 0 : e.scrollLeft()) * d
                }
            },
            _generatePosition: function (b) {
                var c = this.options, d = "absolute" != this.cssPosition || this.scrollParent[0] != document && a.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent, e = /(html|body)/i.test(d[0].tagName), f = b.pageX, g = b.pageY;
                if (this.originalPosition) {
                    var h;
                    if (this.containment) {
                        if (this.relative_container) {
                            var i = this.relative_container.offset();
                            h = [this.containment[0] + i.left, this.containment[1] + i.top, this.containment[2] + i.left, this.containment[3] + i.top]
                        } else h = this.containment;
                        b.pageX - this.offset.click.left < h[0] && (f = h[0] + this.offset.click.left), b.pageY - this.offset.click.top < h[1] && (g = h[1] + this.offset.click.top), b.pageX - this.offset.click.left > h[2] && (f = h[2] + this.offset.click.left), b.pageY - this.offset.click.top > h[3] && (g = h[3] + this.offset.click.top)
                    }
                    if (c.grid) {
                        var j = c.grid[1] ? this.originalPageY + Math.round((g - this.originalPageY) / c.grid[1]) * c.grid[1] : this.originalPageY;
                        g = h && (j - this.offset.click.top < h[1] || j - this.offset.click.top > h[3]) ? j - this.offset.click.top < h[1] ? j + c.grid[1] : j - c.grid[1] : j;
                        var k = c.grid[0] ? this.originalPageX + Math.round((f - this.originalPageX) / c.grid[0]) * c.grid[0] : this.originalPageX;
                        f = h && (k - this.offset.click.left < h[0] || k - this.offset.click.left > h[2]) ? k - this.offset.click.left < h[0] ? k + c.grid[0] : k - c.grid[0] : k
                    }
                }
                return {
                    top: g - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + ("fixed" == this.cssPosition ? -this.scrollParent.scrollTop() : e ? 0 : d.scrollTop()),
                    left: f - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + ("fixed" == this.cssPosition ? -this.scrollParent.scrollLeft() : e ? 0 : d.scrollLeft())
                }
            },
            _clear: function () {
                this.helper.removeClass("ui-draggable-dragging"), this.helper[0] == this.element[0] || this.cancelHelperRemoval || this.helper.remove(), this.helper = null, this.cancelHelperRemoval = !1
            },
            _trigger: function (b, c, d) {
                return d = d || this._uiHash(), a.ui.plugin.call(this, b, [c, d]), "drag" == b && (this.positionAbs = this._convertPositionTo("absolute")), a.Widget.prototype._trigger.call(this, b, c, d)
            },
            plugins: {},
            _uiHash: function (a) {
                return {
                    helper: this.helper,
                    position: this.position,
                    originalPosition: this.originalPosition,
                    offset: this.positionAbs
                }
            }
        }), a.ui.plugin.add("draggable", "connectToSortable", {
            start: function (b, c) {
                var d = a(this).data("draggable"), e = d.options, f = a.extend({}, c, {item: d.element});
                d.sortables = [], a(e.connectToSortable).each(function () {
                    var c = a.data(this, "sortable");
                    c && !c.options.disabled && (d.sortables.push({
                        instance: c,
                        shouldRevert: c.options.revert
                    }), c.refreshPositions(), c._trigger("activate", b, f))
                })
            }, stop: function (b, c) {
                var d = a(this).data("draggable"), e = a.extend({}, c, {item: d.element});
                a.each(d.sortables, function () {
                    this.instance.isOver ? (this.instance.isOver = 0, d.cancelHelperRemoval = !0, this.instance.cancelHelperRemoval = !1, this.shouldRevert && (this.instance.options.revert = !0), this.instance._mouseStop(b), this.instance.options.helper = this.instance.options._helper, "original" == d.options.helper && this.instance.currentItem.css({
                        top: "auto",
                        left: "auto"
                    })) : (this.instance.cancelHelperRemoval = !1, this.instance._trigger("deactivate", b, e))
                })
            }, drag: function (b, c) {
                var d = a(this).data("draggable"), e = this;
                a.each(d.sortables, function (f) {
                    var g = !1, h = this;
                    this.instance.positionAbs = d.positionAbs, this.instance.helperProportions = d.helperProportions, this.instance.offset.click = d.offset.click, this.instance._intersectsWith(this.instance.containerCache) && (g = !0, a.each(d.sortables, function () {
                        return this.instance.positionAbs = d.positionAbs, this.instance.helperProportions = d.helperProportions, this.instance.offset.click = d.offset.click, this != h && this.instance._intersectsWith(this.instance.containerCache) && a.ui.contains(h.instance.element[0], this.instance.element[0]) && (g = !1),
                            g
                    })), g ? (this.instance.isOver || (this.instance.isOver = 1, this.instance.currentItem = a(e).clone().removeAttr("id").appendTo(this.instance.element).data("sortable-item", !0), this.instance.options._helper = this.instance.options.helper, this.instance.options.helper = function () {
                        return c.helper[0]
                    }, b.target = this.instance.currentItem[0], this.instance._mouseCapture(b, !0), this.instance._mouseStart(b, !0, !0), this.instance.offset.click.top = d.offset.click.top, this.instance.offset.click.left = d.offset.click.left, this.instance.offset.parent.left -= d.offset.parent.left - this.instance.offset.parent.left, this.instance.offset.parent.top -= d.offset.parent.top - this.instance.offset.parent.top, d._trigger("toSortable", b), d.dropped = this.instance.element, d.currentItem = d.element, this.instance.fromOutside = d), this.instance.currentItem && this.instance._mouseDrag(b)) : this.instance.isOver && (this.instance.isOver = 0, this.instance.cancelHelperRemoval = !0, this.instance.options.revert = !1, this.instance._trigger("out", b, this.instance._uiHash(this.instance)), this.instance._mouseStop(b, !0), this.instance.options.helper = this.instance.options._helper, this.instance.currentItem.remove(), this.instance.placeholder && this.instance.placeholder.remove(), d._trigger("fromSortable", b), d.dropped = !1)
                })
            }
        }), a.ui.plugin.add("draggable", "cursor", {
            start: function (b, c) {
                var d = a("body"), e = a(this).data("draggable").options;
                d.css("cursor") && (e._cursor = d.css("cursor")), d.css("cursor", e.cursor)
            }, stop: function (b, c) {
                var d = a(this).data("draggable").options;
                d._cursor && a("body").css("cursor", d._cursor)
            }
        }), a.ui.plugin.add("draggable", "opacity", {
            start: function (b, c) {
                var d = a(c.helper), e = a(this).data("draggable").options;
                d.css("opacity") && (e._opacity = d.css("opacity")), d.css("opacity", e.opacity)
            }, stop: function (b, c) {
                var d = a(this).data("draggable").options;
                d._opacity && a(c.helper).css("opacity", d._opacity)
            }
        }), a.ui.plugin.add("draggable", "scroll", {
            start: function (b, c) {
                var d = a(this).data("draggable");
                d.scrollParent[0] != document && "HTML" != d.scrollParent[0].tagName && (d.overflowOffset = d.scrollParent.offset())
            }, drag: function (b, c) {
                var d = a(this).data("draggable"), e = d.options, f = !1;
                d.scrollParent[0] != document && "HTML" != d.scrollParent[0].tagName ? (e.axis && "x" == e.axis || (d.overflowOffset.top + d.scrollParent[0].offsetHeight - b.pageY < e.scrollSensitivity ? d.scrollParent[0].scrollTop = f = d.scrollParent[0].scrollTop + e.scrollSpeed : b.pageY - d.overflowOffset.top < e.scrollSensitivity && (d.scrollParent[0].scrollTop = f = d.scrollParent[0].scrollTop - e.scrollSpeed)), e.axis && "y" == e.axis || (d.overflowOffset.left + d.scrollParent[0].offsetWidth - b.pageX < e.scrollSensitivity ? d.scrollParent[0].scrollLeft = f = d.scrollParent[0].scrollLeft + e.scrollSpeed : b.pageX - d.overflowOffset.left < e.scrollSensitivity && (d.scrollParent[0].scrollLeft = f = d.scrollParent[0].scrollLeft - e.scrollSpeed))) : (e.axis && "x" == e.axis || (b.pageY - a(document).scrollTop() < e.scrollSensitivity ? f = a(document).scrollTop(a(document).scrollTop() - e.scrollSpeed) : a(window).height() - (b.pageY - a(document).scrollTop()) < e.scrollSensitivity && (f = a(document).scrollTop(a(document).scrollTop() + e.scrollSpeed))), e.axis && "y" == e.axis || (b.pageX - a(document).scrollLeft() < e.scrollSensitivity ? f = a(document).scrollLeft(a(document).scrollLeft() - e.scrollSpeed) : a(window).width() - (b.pageX - a(document).scrollLeft()) < e.scrollSensitivity && (f = a(document).scrollLeft(a(document).scrollLeft() + e.scrollSpeed)))), f !== !1 && a.ui.ddmanager && !e.dropBehaviour && a.ui.ddmanager.prepareOffsets(d, b)
            }
        }), a.ui.plugin.add("draggable", "snap", {
            start: function (b, c) {
                var d = a(this).data("draggable"), e = d.options;
                d.snapElements = [], a(e.snap.constructor != String ? e.snap.items || ":data(draggable)" : e.snap).each(function () {
                    var b = a(this), c = b.offset();
                    this != d.element[0] && d.snapElements.push({
                        item: this,
                        width: b.outerWidth(),
                        height: b.outerHeight(),
                        top: c.top,
                        left: c.left
                    })
                })
            }, drag: function (b, c) {
                for (var d = a(this).data("draggable"), e = d.options, f = e.snapTolerance, g = c.offset.left, h = g + d.helperProportions.width, i = c.offset.top, j = i + d.helperProportions.height, k = d.snapElements.length - 1; k >= 0; k--) {
                    var l = d.snapElements[k].left, m = l + d.snapElements[k].width, n = d.snapElements[k].top, o = n + d.snapElements[k].height;
                    if (g > l - f && m + f > g && i > n - f && o + f > i || g > l - f && m + f > g && j > n - f && o + f > j || h > l - f && m + f > h && i > n - f && o + f > i || h > l - f && m + f > h && j > n - f && o + f > j) {
                        if ("inner" != e.snapMode) {
                            var p = Math.abs(n - j) <= f, q = Math.abs(o - i) <= f, r = Math.abs(l - h) <= f, s = Math.abs(m - g) <= f;
                            p && (c.position.top = d._convertPositionTo("relative", {
                                    top: n - d.helperProportions.height,
                                    left: 0
                                }).top - d.margins.top), q && (c.position.top = d._convertPositionTo("relative", {
                                    top: o,
                                    left: 0
                                }).top - d.margins.top), r && (c.position.left = d._convertPositionTo("relative", {
                                    top: 0,
                                    left: l - d.helperProportions.width
                                }).left - d.margins.left), s && (c.position.left = d._convertPositionTo("relative", {
                                    top: 0,
                                    left: m
                                }).left - d.margins.left)
                        }
                        var t = p || q || r || s;
                        if ("outer" != e.snapMode) {
                            var p = Math.abs(n - i) <= f, q = Math.abs(o - j) <= f, r = Math.abs(l - g) <= f, s = Math.abs(m - h) <= f;
                            p && (c.position.top = d._convertPositionTo("relative", {
                                    top: n,
                                    left: 0
                                }).top - d.margins.top), q && (c.position.top = d._convertPositionTo("relative", {
                                    top: o - d.helperProportions.height,
                                    left: 0
                                }).top - d.margins.top), r && (c.position.left = d._convertPositionTo("relative", {
                                    top: 0,
                                    left: l
                                }).left - d.margins.left), s && (c.position.left = d._convertPositionTo("relative", {
                                    top: 0,
                                    left: m - d.helperProportions.width
                                }).left - d.margins.left)
                        }
                        !d.snapElements[k].snapping && (p || q || r || s || t) && d.options.snap.snap && d.options.snap.snap.call(d.element, b, a.extend(d._uiHash(), {snapItem: d.snapElements[k].item})), d.snapElements[k].snapping = p || q || r || s || t
                    } else d.snapElements[k].snapping && d.options.snap.release && d.options.snap.release.call(d.element, b, a.extend(d._uiHash(), {snapItem: d.snapElements[k].item})), d.snapElements[k].snapping = !1
                }
            }
        }), a.ui.plugin.add("draggable", "stack", {
            start: function (b, c) {
                var d = a(this).data("draggable").options, e = a.makeArray(a(d.stack)).sort(function (b, c) {
                    return (parseInt(a(b).css("zIndex"), 10) || 0) - (parseInt(a(c).css("zIndex"), 10) || 0)
                });
                if (e.length) {
                    var f = parseInt(e[0].style.zIndex) || 0;
                    a(e).each(function (a) {
                        this.style.zIndex = f + a
                    }), this[0].style.zIndex = f + e.length
                }
            }
        }), a.ui.plugin.add("draggable", "zIndex", {
            start: function (b, c) {
                var d = a(c.helper), e = a(this).data("draggable").options;
                d.css("zIndex") && (e._zIndex = d.css("zIndex")), d.css("zIndex", e.zIndex)
            }, stop: function (b, c) {
                var d = a(this).data("draggable").options;
                d._zIndex && a(c.helper).css("zIndex", d._zIndex)
            }
        })
    }(jQuery), function (a, b) {
        a.widget("ui.droppable", {
            version: "1.9.2",
            widgetEventPrefix: "drop",
            options: {
                accept: "*",
                activeClass: !1,
                addClasses: !0,
                greedy: !1,
                hoverClass: !1,
                scope: "default",
                tolerance: "intersect"
            },
            _create: function () {
                var b = this.options, c = b.accept;
                this.isover = 0, this.isout = 1, this.accept = a.isFunction(c) ? c : function (a) {
                    return a.is(c)
                }, this.proportions = {
                    width: this.element[0].offsetWidth,
                    height: this.element[0].offsetHeight
                }, a.ui.ddmanager.droppables[b.scope] = a.ui.ddmanager.droppables[b.scope] || [], a.ui.ddmanager.droppables[b.scope].push(this), b.addClasses && this.element.addClass("ui-droppable")
            },
            _destroy: function () {
                for (var b = a.ui.ddmanager.droppables[this.options.scope], c = 0; c < b.length; c++)b[c] == this && b.splice(c, 1);
                this.element.removeClass("ui-droppable ui-droppable-disabled")
            },
            _setOption: function (b, c) {
                "accept" == b && (this.accept = a.isFunction(c) ? c : function (a) {
                    return a.is(c)
                }), a.Widget.prototype._setOption.apply(this, arguments)
            },
            _activate: function (b) {
                var c = a.ui.ddmanager.current;
                this.options.activeClass && this.element.addClass(this.options.activeClass), c && this._trigger("activate", b, this.ui(c))
            },
            _deactivate: function (b) {
                var c = a.ui.ddmanager.current;
                this.options.activeClass && this.element.removeClass(this.options.activeClass), c && this._trigger("deactivate", b, this.ui(c))
            },
            _over: function (b) {
                var c = a.ui.ddmanager.current;
                c && (c.currentItem || c.element)[0] != this.element[0] && this.accept.call(this.element[0], c.currentItem || c.element) && (this.options.hoverClass && this.element.addClass(this.options.hoverClass), this._trigger("over", b, this.ui(c)))
            },
            _out: function (b) {
                var c = a.ui.ddmanager.current;
                c && (c.currentItem || c.element)[0] != this.element[0] && this.accept.call(this.element[0], c.currentItem || c.element) && (this.options.hoverClass && this.element.removeClass(this.options.hoverClass), this._trigger("out", b, this.ui(c)))
            },
            _drop: function (b, c) {
                var d = c || a.ui.ddmanager.current;
                if (!d || (d.currentItem || d.element)[0] == this.element[0])return !1;
                var e = !1;
                return this.element.find(":data(droppable)").not(".ui-draggable-dragging").each(function () {
                    var b = a.data(this, "droppable");
                    return b.options.greedy && !b.options.disabled && b.options.scope == d.options.scope && b.accept.call(b.element[0], d.currentItem || d.element) && a.ui.intersect(d, a.extend(b, {offset: b.element.offset()}), b.options.tolerance) ? (e = !0, !1) : void 0
                }), e ? !1 : this.accept.call(this.element[0], d.currentItem || d.element) ? (this.options.activeClass && this.element.removeClass(this.options.activeClass), this.options.hoverClass && this.element.removeClass(this.options.hoverClass), this._trigger("drop", b, this.ui(d)), this.element) : !1
            },
            ui: function (a) {
                return {
                    draggable: a.currentItem || a.element,
                    helper: a.helper,
                    position: a.position,
                    offset: a.positionAbs
                }
            }
        }), a.ui.intersect = function (b, c, d) {
            if (!c.offset)return !1;
            var e = (b.positionAbs || b.position.absolute).left, f = e + b.helperProportions.width, g = (b.positionAbs || b.position.absolute).top, h = g + b.helperProportions.height, i = c.offset.left, j = i + c.proportions.width, k = c.offset.top, l = k + c.proportions.height;
            switch (d) {
                case"fit":
                    return e >= i && j >= f && g >= k && l >= h;
                case"intersect":
                    return i < e + b.helperProportions.width / 2 && f - b.helperProportions.width / 2 < j && k < g + b.helperProportions.height / 2 && h - b.helperProportions.height / 2 < l;
                case"pointer":
                    var m = (b.positionAbs || b.position.absolute).left + (b.clickOffset || b.offset.click).left, n = (b.positionAbs || b.position.absolute).top + (b.clickOffset || b.offset.click).top, o = a.ui.isOver(n, m, k, i, c.proportions.height, c.proportions.width);
                    return o;
                case"touch":
                    return (g >= k && l >= g || h >= k && l >= h || k > g && h > l) && (e >= i && j >= e || f >= i && j >= f || i > e && f > j);
                default:
                    return !1
            }
        }, a.ui.ddmanager = {
            current: null, droppables: {"default": []}, prepareOffsets: function (b, c) {
                var d = a.ui.ddmanager.droppables[b.options.scope] || [], e = c ? c.type : null, f = (b.currentItem || b.element).find(":data(droppable)").andSelf();
                a:for (var g = 0; g < d.length; g++)if (!(d[g].options.disabled || b && !d[g].accept.call(d[g].element[0], b.currentItem || b.element))) {
                    for (var h = 0; h < f.length; h++)if (f[h] == d[g].element[0]) {
                        d[g].proportions.height = 0;
                        continue a
                    }
                    d[g].visible = "none" != d[g].element.css("display"), d[g].visible && ("mousedown" == e && d[g]._activate.call(d[g], c), d[g].offset = d[g].element.offset(), d[g].proportions = {
                        width: d[g].element[0].offsetWidth,
                        height: d[g].element[0].offsetHeight
                    })
                }
            }, drop: function (b, c) {
                var d = !1;
                return a.each(a.ui.ddmanager.droppables[b.options.scope] || [], function () {
                    this.options && (!this.options.disabled && this.visible && a.ui.intersect(b, this, this.options.tolerance) && (d = this._drop.call(this, c) || d), !this.options.disabled && this.visible && this.accept.call(this.element[0], b.currentItem || b.element) && (this.isout = 1, this.isover = 0, this._deactivate.call(this, c)))
                }), d
            }, dragStart: function (b, c) {
                b.element.parentsUntil("body").bind("scroll.droppable", function () {
                    b.options.refreshPositions || a.ui.ddmanager.prepareOffsets(b, c)
                })
            }, drag: function (b, c) {
                b.options.refreshPositions && a.ui.ddmanager.prepareOffsets(b, c), a.each(a.ui.ddmanager.droppables[b.options.scope] || [], function () {
                    if (!this.options.disabled && !this.greedyChild && this.visible) {
                        var d = a.ui.intersect(b, this, this.options.tolerance), e = d || 1 != this.isover ? d && 0 == this.isover ? "isover" : null : "isout";
                        if (e) {
                            var f;
                            if (this.options.greedy) {
                                var g = this.options.scope, h = this.element.parents(":data(droppable)").filter(function () {
                                    return a.data(this, "droppable").options.scope === g
                                });
                                h.length && (f = a.data(h[0], "droppable"), f.greedyChild = "isover" == e ? 1 : 0)
                            }
                            f && "isover" == e && (f.isover = 0, f.isout = 1, f._out.call(f, c)), this[e] = 1, this["isout" == e ? "isover" : "isout"] = 0, this["isover" == e ? "_over" : "_out"].call(this, c), f && "isout" == e && (f.isout = 0, f.isover = 1, f._over.call(f, c))
                        }
                    }
                })
            }, dragStop: function (b, c) {
                b.element.parentsUntil("body").unbind("scroll.droppable"), b.options.refreshPositions || a.ui.ddmanager.prepareOffsets(b, c)
            }
        }
    }(jQuery), function (a, b) {
        a.widget("ui.resizable", a.ui.mouse, {
            version: "1.9.2",
            widgetEventPrefix: "resize",
            options: {
                alsoResize: !1,
                animate: !1,
                animateDuration: "slow",
                animateEasing: "swing",
                aspectRatio: !1,
                autoHide: !1,
                containment: !1,
                ghost: !1,
                grid: !1,
                handles: "e,s,se",
                helper: !1,
                maxHeight: null,
                maxWidth: null,
                minHeight: 10,
                minWidth: 10,
                zIndex: 1e3
            },
            _create: function () {
                var b = this, c = this.options;
                if (this.element.addClass("ui-resizable"), a.extend(this, {
                        _aspectRatio: !!c.aspectRatio,
                        aspectRatio: c.aspectRatio,
                        originalElement: this.element,
                        _proportionallyResizeElements: [],
                        _helper: c.helper || c.ghost || c.animate ? c.helper || "ui-resizable-helper" : null
                    }), this.element[0].nodeName.match(/canvas|textarea|input|select|button|img/i) && (this.element.wrap(a('<div class="ui-wrapper" style="overflow: hidden;"></div>').css({
                        position: this.element.css("position"),
                        width: this.element.outerWidth(),
                        height: this.element.outerHeight(),
                        top: this.element.css("top"),
                        left: this.element.css("left")
                    })), this.element = this.element.parent().data("resizable", this.element.data("resizable")), this.elementIsWrapper = !0, this.element.css({
                        marginLeft: this.originalElement.css("marginLeft"),
                        marginTop: this.originalElement.css("marginTop"),
                        marginRight: this.originalElement.css("marginRight"),
                        marginBottom: this.originalElement.css("marginBottom")
                    }), this.originalElement.css({
                        marginLeft: 0,
                        marginTop: 0,
                        marginRight: 0,
                        marginBottom: 0
                    }), this.originalResizeStyle = this.originalElement.css("resize"), this.originalElement.css("resize", "none"), this._proportionallyResizeElements.push(this.originalElement.css({
                        position: "static",
                        zoom: 1,
                        display: "block"
                    })), this.originalElement.css({margin: this.originalElement.css("margin")}), this._proportionallyResize()), this.handles = c.handles || (a(".ui-resizable-handle", this.element).length ? {
                            n: ".ui-resizable-n",
                            e: ".ui-resizable-e",
                            s: ".ui-resizable-s",
                            w: ".ui-resizable-w",
                            se: ".ui-resizable-se",
                            sw: ".ui-resizable-sw",
                            ne: ".ui-resizable-ne",
                            nw: ".ui-resizable-nw"
                        } : "e,s,se"), this.handles.constructor == String) {
                    "all" == this.handles && (this.handles = "n,e,s,w,se,sw,ne,nw");
                    var d = this.handles.split(",");
                    this.handles = {};
                    for (var e = 0; e < d.length; e++) {
                        var f = a.trim(d[e]), g = "ui-resizable-" + f, h = a('<div class="ui-resizable-handle ' + g + '"></div>');
                        h.css({zIndex: c.zIndex}), "se" == f && h.addClass("ui-icon ui-icon-gripsmall-diagonal-se"), this.handles[f] = ".ui-resizable-" + f, this.element.append(h)
                    }
                }
                this._renderAxis = function (b) {
                    b = b || this.element;
                    for (var c in this.handles) {
                        if (this.handles[c].constructor == String && (this.handles[c] = a(this.handles[c], this.element).show()), this.elementIsWrapper && this.originalElement[0].nodeName.match(/textarea|input|select|button/i)) {
                            var d = a(this.handles[c], this.element), e = 0;
                            e = /sw|ne|nw|se|n|s/.test(c) ? d.outerHeight() : d.outerWidth();
                            var f = ["padding", /ne|nw|n/.test(c) ? "Top" : /se|sw|s/.test(c) ? "Bottom" : /^e$/.test(c) ? "Right" : "Left"].join("");
                            b.css(f, e), this._proportionallyResize()
                        }
                        a(this.handles[c]).length
                    }
                }, this._renderAxis(this.element), this._handles = a(".ui-resizable-handle", this.element).disableSelection(), this._handles.mouseover(function () {
                    if (!b.resizing) {
                        if (this.className)var a = this.className.match(/ui-resizable-(se|sw|ne|nw|n|e|s|w)/i);
                        b.axis = a && a[1] ? a[1] : "se"
                    }
                }), c.autoHide && (this._handles.hide(), a(this.element).addClass("ui-resizable-autohide").mouseenter(function () {
                    c.disabled || (a(this).removeClass("ui-resizable-autohide"), b._handles.show())
                }).mouseleave(function () {
                    c.disabled || b.resizing || (a(this).addClass("ui-resizable-autohide"), b._handles.hide())
                })), this._mouseInit()
            },
            _destroy: function () {
                this._mouseDestroy();
                var b = function (b) {
                    a(b).removeClass("ui-resizable ui-resizable-disabled ui-resizable-resizing").removeData("resizable").removeData("ui-resizable").unbind(".resizable").find(".ui-resizable-handle").remove()
                };
                if (this.elementIsWrapper) {
                    b(this.element);
                    var c = this.element;
                    this.originalElement.css({
                        position: c.css("position"),
                        width: c.outerWidth(),
                        height: c.outerHeight(),
                        top: c.css("top"),
                        left: c.css("left")
                    }).insertAfter(c), c.remove()
                }
                return this.originalElement.css("resize", this.originalResizeStyle), b(this.originalElement), this
            },
            _mouseCapture: function (b) {
                var c = !1;
                for (var d in this.handles)a(this.handles[d])[0] == b.target && (c = !0);
                return !this.options.disabled && c
            },
            _mouseStart: function (b) {
                var d = this.options, e = this.element.position(), f = this.element;
                this.resizing = !0, this.documentScroll = {
                    top: a(document).scrollTop(),
                    left: a(document).scrollLeft()
                }, (f.is(".ui-draggable") || /absolute/.test(f.css("position"))) && f.css({
                    position: "absolute",
                    top: e.top,
                    left: e.left
                }), this._renderProxy();
                var g = c(this.helper.css("left")), h = c(this.helper.css("top"));
                d.containment && (g += a(d.containment).scrollLeft() || 0, h += a(d.containment).scrollTop() || 0), this.offset = this.helper.offset(), this.position = {
                    left: g,
                    top: h
                }, this.size = this._helper ? {width: f.outerWidth(), height: f.outerHeight()} : {
                    width: f.width(),
                    height: f.height()
                }, this.originalSize = this._helper ? {
                    width: f.outerWidth(),
                    height: f.outerHeight()
                } : {width: f.width(), height: f.height()}, this.originalPosition = {
                    left: g,
                    top: h
                }, this.sizeDiff = {
                    width: f.outerWidth() - f.width(),
                    height: f.outerHeight() - f.height()
                }, this.originalMousePosition = {
                    left: b.pageX,
                    top: b.pageY
                }, this.aspectRatio = "number" == typeof d.aspectRatio ? d.aspectRatio : this.originalSize.width / this.originalSize.height || 1;
                var i = a(".ui-resizable-" + this.axis).css("cursor");
                return a("body").css("cursor", "auto" == i ? this.axis + "-resize" : i), f.addClass("ui-resizable-resizing"), this._propagate("start", b), !0
            },
            _mouseDrag: function (a) {
                var b = this.helper, c = (this.options, this.originalMousePosition), d = this.axis, e = a.pageX - c.left || 0, f = a.pageY - c.top || 0, g = this._change[d];
                if (!g)return !1;
                var h = g.apply(this, [a, e, f]);
                return this._updateVirtualBoundaries(a.shiftKey), (this._aspectRatio || a.shiftKey) && (h = this._updateRatio(h, a)), h = this._respectSize(h, a), this._propagate("resize", a), b.css({
                    top: this.position.top + "px",
                    left: this.position.left + "px",
                    width: this.size.width + "px",
                    height: this.size.height + "px"
                }), !this._helper && this._proportionallyResizeElements.length && this._proportionallyResize(), this._updateCache(h), this._trigger("resize", a, this.ui()), !1
            },
            _mouseStop: function (b) {
                this.resizing = !1;
                var c = this.options, d = this;
                if (this._helper) {
                    var e = this._proportionallyResizeElements, f = e.length && /textarea/i.test(e[0].nodeName), g = f && a.ui.hasScroll(e[0], "left") ? 0 : d.sizeDiff.height, h = f ? 0 : d.sizeDiff.width, i = {
                        width: d.helper.width() - h,
                        height: d.helper.height() - g
                    }, j = parseInt(d.element.css("left"), 10) + (d.position.left - d.originalPosition.left) || null, k = parseInt(d.element.css("top"), 10) + (d.position.top - d.originalPosition.top) || null;
                    c.animate || this.element.css(a.extend(i, {
                        top: k,
                        left: j
                    })), d.helper.height(d.size.height), d.helper.width(d.size.width), this._helper && !c.animate && this._proportionallyResize()
                }
                return a("body").css("cursor", "auto"), this.element.removeClass("ui-resizable-resizing"), this._propagate("stop", b), this._helper && this.helper.remove(), !1
            },
            _updateVirtualBoundaries: function (a) {
                var b, c, e, f, g, h = this.options;
                g = {
                    minWidth: d(h.minWidth) ? h.minWidth : 0,
                    maxWidth: d(h.maxWidth) ? h.maxWidth : 1 / 0,
                    minHeight: d(h.minHeight) ? h.minHeight : 0,
                    maxHeight: d(h.maxHeight) ? h.maxHeight : 1 / 0
                }, (this._aspectRatio || a) && (b = g.minHeight * this.aspectRatio, e = g.minWidth / this.aspectRatio, c = g.maxHeight * this.aspectRatio, f = g.maxWidth / this.aspectRatio, b > g.minWidth && (g.minWidth = b), e > g.minHeight && (g.minHeight = e), c < g.maxWidth && (g.maxWidth = c), f < g.maxHeight && (g.maxHeight = f)), this._vBoundaries = g
            },
            _updateCache: function (a) {
                this.options;
                this.offset = this.helper.offset(), d(a.left) && (this.position.left = a.left), d(a.top) && (this.position.top = a.top), d(a.height) && (this.size.height = a.height), d(a.width) && (this.size.width = a.width)
            },
            _updateRatio: function (a, b) {
                var c = (this.options, this.position), e = this.size, f = this.axis;
                return d(a.height) ? a.width = a.height * this.aspectRatio : d(a.width) && (a.height = a.width / this.aspectRatio), "sw" == f && (a.left = c.left + (e.width - a.width), a.top = null), "nw" == f && (a.top = c.top + (e.height - a.height), a.left = c.left + (e.width - a.width)), a
            },
            _respectSize: function (a, b) {
                var c = (this.helper, this._vBoundaries), e = (this._aspectRatio || b.shiftKey, this.axis), f = d(a.width) && c.maxWidth && c.maxWidth < a.width, g = d(a.height) && c.maxHeight && c.maxHeight < a.height, h = d(a.width) && c.minWidth && c.minWidth > a.width, i = d(a.height) && c.minHeight && c.minHeight > a.height;
                h && (a.width = c.minWidth), i && (a.height = c.minHeight), f && (a.width = c.maxWidth), g && (a.height = c.maxHeight);
                var j = this.originalPosition.left + this.originalSize.width, k = this.position.top + this.size.height, l = /sw|nw|w/.test(e), m = /nw|ne|n/.test(e);
                h && l && (a.left = j - c.minWidth), f && l && (a.left = j - c.maxWidth), i && m && (a.top = k - c.minHeight), g && m && (a.top = k - c.maxHeight);
                var n = !a.width && !a.height;
                return n && !a.left && a.top ? a.top = null : n && !a.top && a.left && (a.left = null), a
            },
            _proportionallyResize: function () {
                this.options;
                if (this._proportionallyResizeElements.length)for (var b = this.helper || this.element, c = 0; c < this._proportionallyResizeElements.length; c++) {
                    var d = this._proportionallyResizeElements[c];
                    if (!this.borderDif) {
                        var e = [d.css("borderTopWidth"), d.css("borderRightWidth"), d.css("borderBottomWidth"), d.css("borderLeftWidth")], f = [d.css("paddingTop"), d.css("paddingRight"), d.css("paddingBottom"), d.css("paddingLeft")];
                        this.borderDif = a.map(e, function (a, b) {
                            var c = parseInt(a, 10) || 0, d = parseInt(f[b], 10) || 0;
                            return c + d
                        })
                    }
                    d.css({
                        height: b.height() - this.borderDif[0] - this.borderDif[2] || 0,
                        width: b.width() - this.borderDif[1] - this.borderDif[3] || 0
                    })
                }
            },
            _renderProxy: function () {
                var b = this.element, c = this.options;
                if (this.elementOffset = b.offset(), this._helper) {
                    this.helper = this.helper || a('<div style="overflow:hidden;"></div>');
                    var d = a.ui.ie6 ? 1 : 0, e = a.ui.ie6 ? 2 : -1;
                    this.helper.addClass(this._helper).css({
                        width: this.element.outerWidth() + e,
                        height: this.element.outerHeight() + e,
                        position: "absolute",
                        left: this.elementOffset.left - d + "px",
                        top: this.elementOffset.top - d + "px",
                        zIndex: ++c.zIndex
                    }), this.helper.appendTo("body").disableSelection()
                } else this.helper = this.element
            },
            _change: {
                e: function (a, b, c) {
                    return {width: this.originalSize.width + b}
                }, w: function (a, b, c) {
                    var d = (this.options, this.originalSize), e = this.originalPosition;
                    return {left: e.left + b, width: d.width - b}
                }, n: function (a, b, c) {
                    var d = (this.options, this.originalSize), e = this.originalPosition;
                    return {top: e.top + c, height: d.height - c}
                }, s: function (a, b, c) {
                    return {height: this.originalSize.height + c}
                }, se: function (b, c, d) {
                    return a.extend(this._change.s.apply(this, arguments), this._change.e.apply(this, [b, c, d]))
                }, sw: function (b, c, d) {
                    return a.extend(this._change.s.apply(this, arguments), this._change.w.apply(this, [b, c, d]))
                }, ne: function (b, c, d) {
                    return a.extend(this._change.n.apply(this, arguments), this._change.e.apply(this, [b, c, d]))
                }, nw: function (b, c, d) {
                    return a.extend(this._change.n.apply(this, arguments), this._change.w.apply(this, [b, c, d]))
                }
            },
            _propagate: function (b, c) {
                a.ui.plugin.call(this, b, [c, this.ui()]), "resize" != b && this._trigger(b, c, this.ui())
            },
            plugins: {},
            ui: function () {
                return {
                    originalElement: this.originalElement,
                    element: this.element,
                    helper: this.helper,
                    position: this.position,
                    size: this.size,
                    originalSize: this.originalSize,
                    originalPosition: this.originalPosition
                }
            }
        }), a.ui.plugin.add("resizable", "alsoResize", {
            start: function (b, c) {
                var d = a(this).data("resizable"), e = d.options, f = function (b) {
                    a(b).each(function () {
                        var b = a(this);
                        b.data("resizable-alsoresize", {
                            width: parseInt(b.width(), 10),
                            height: parseInt(b.height(), 10),
                            left: parseInt(b.css("left"), 10),
                            top: parseInt(b.css("top"), 10)
                        })
                    })
                };
                "object" != typeof e.alsoResize || e.alsoResize.parentNode ? f(e.alsoResize) : e.alsoResize.length ? (e.alsoResize = e.alsoResize[0], f(e.alsoResize)) : a.each(e.alsoResize, function (a) {
                    f(a)
                })
            }, resize: function (b, c) {
                var d = a(this).data("resizable"), e = d.options, f = d.originalSize, g = d.originalPosition, h = {
                    height: d.size.height - f.height || 0,
                    width: d.size.width - f.width || 0,
                    top: d.position.top - g.top || 0,
                    left: d.position.left - g.left || 0
                }, i = function (b, d) {
                    a(b).each(function () {
                        var b = a(this), e = a(this).data("resizable-alsoresize"), f = {}, g = d && d.length ? d : b.parents(c.originalElement[0]).length ? ["width", "height"] : ["width", "height", "top", "left"];
                        a.each(g, function (a, b) {
                            var c = (e[b] || 0) + (h[b] || 0);
                            c && c >= 0 && (f[b] = c || null)
                        }), b.css(f)
                    })
                };
                "object" != typeof e.alsoResize || e.alsoResize.nodeType ? i(e.alsoResize) : a.each(e.alsoResize, function (a, b) {
                    i(a, b)
                })
            }, stop: function (b, c) {
                a(this).removeData("resizable-alsoresize")
            }
        }), a.ui.plugin.add("resizable", "animate", {
            stop: function (b, c) {
                var d = a(this).data("resizable"), e = d.options, f = d._proportionallyResizeElements, g = f.length && /textarea/i.test(f[0].nodeName), h = g && a.ui.hasScroll(f[0], "left") ? 0 : d.sizeDiff.height, i = g ? 0 : d.sizeDiff.width, j = {
                    width: d.size.width - i,
                    height: d.size.height - h
                }, k = parseInt(d.element.css("left"), 10) + (d.position.left - d.originalPosition.left) || null, l = parseInt(d.element.css("top"), 10) + (d.position.top - d.originalPosition.top) || null;
                d.element.animate(a.extend(j, l && k ? {top: l, left: k} : {}), {
                    duration: e.animateDuration,
                    easing: e.animateEasing,
                    step: function () {
                        var c = {
                            width: parseInt(d.element.css("width"), 10),
                            height: parseInt(d.element.css("height"), 10),
                            top: parseInt(d.element.css("top"), 10),
                            left: parseInt(d.element.css("left"), 10)
                        };
                        f && f.length && a(f[0]).css({
                            width: c.width,
                            height: c.height
                        }), d._updateCache(c), d._propagate("resize", b)
                    }
                })
            }
        }), a.ui.plugin.add("resizable", "containment", {
            start: function (b, d) {
                var e = a(this).data("resizable"), f = e.options, g = e.element, h = f.containment, i = h instanceof a ? h.get(0) : /parent/.test(h) ? g.parent().get(0) : h;
                if (i)if (e.containerElement = a(i), /document/.test(h) || h == document)e.containerOffset = {
                    left: 0,
                    top: 0
                }, e.containerPosition = {left: 0, top: 0}, e.parentData = {
                    element: a(document),
                    left: 0,
                    top: 0,
                    width: a(document).width(),
                    height: a(document).height() || document.body.parentNode.scrollHeight
                }; else {
                    var j = a(i), k = [];
                    a(["Top", "Right", "Left", "Bottom"]).each(function (a, b) {
                        k[a] = c(j.css("padding" + b))
                    }), e.containerOffset = j.offset(), e.containerPosition = j.position(), e.containerSize = {
                        height: j.innerHeight() - k[3],
                        width: j.innerWidth() - k[1]
                    };
                    var l = e.containerOffset, m = e.containerSize.height, n = e.containerSize.width, o = a.ui.hasScroll(i, "left") ? i.scrollWidth : n, p = a.ui.hasScroll(i) ? i.scrollHeight : m;
                    e.parentData = {element: i, left: l.left, top: l.top, width: o, height: p}
                }
            }, resize: function (b, c) {
                var d = a(this).data("resizable"), e = d.options, f = (d.containerSize, d.containerOffset), g = (d.size, d.position), h = d._aspectRatio || b.shiftKey, i = {
                    top: 0,
                    left: 0
                }, j = d.containerElement;
                j[0] != document && /static/.test(j.css("position")) && (i = f), g.left < (d._helper ? f.left : 0) && (d.size.width = d.size.width + (d._helper ? d.position.left - f.left : d.position.left - i.left), h && (d.size.height = d.size.width / d.aspectRatio), d.position.left = e.helper ? f.left : 0), g.top < (d._helper ? f.top : 0) && (d.size.height = d.size.height + (d._helper ? d.position.top - f.top : d.position.top), h && (d.size.width = d.size.height * d.aspectRatio), d.position.top = d._helper ? f.top : 0), d.offset.left = d.parentData.left + d.position.left, d.offset.top = d.parentData.top + d.position.top;
                var k = Math.abs((d._helper ? d.offset.left - i.left : d.offset.left - i.left) + d.sizeDiff.width), l = Math.abs((d._helper ? d.offset.top - i.top : d.offset.top - f.top) + d.sizeDiff.height), m = d.containerElement.get(0) == d.element.parent().get(0), n = /relative|absolute/.test(d.containerElement.css("position"));
                m && n && (k -= d.parentData.left), k + d.size.width >= d.parentData.width && (d.size.width = d.parentData.width - k, h && (d.size.height = d.size.width / d.aspectRatio)), l + d.size.height >= d.parentData.height && (d.size.height = d.parentData.height - l, h && (d.size.width = d.size.height * d.aspectRatio))
            }, stop: function (b, c) {
                var d = a(this).data("resizable"), e = d.options, f = (d.position, d.containerOffset), g = d.containerPosition, h = d.containerElement, i = a(d.helper), j = i.offset(), k = i.outerWidth() - d.sizeDiff.width, l = i.outerHeight() - d.sizeDiff.height;
                d._helper && !e.animate && /relative/.test(h.css("position")) && a(this).css({
                    left: j.left - g.left - f.left,
                    width: k,
                    height: l
                }), d._helper && !e.animate && /static/.test(h.css("position")) && a(this).css({
                    left: j.left - g.left - f.left,
                    width: k,
                    height: l
                })
            }
        }), a.ui.plugin.add("resizable", "ghost", {
            start: function (b, c) {
                var d = a(this).data("resizable"), e = d.options, f = d.size;
                d.ghost = d.originalElement.clone(), d.ghost.css({
                    opacity: .25,
                    display: "block",
                    position: "relative",
                    height: f.height,
                    width: f.width,
                    margin: 0,
                    left: 0,
                    top: 0
                }).addClass("ui-resizable-ghost").addClass("string" == typeof e.ghost ? e.ghost : ""), d.ghost.appendTo(d.helper)
            }, resize: function (b, c) {
                var d = a(this).data("resizable");
                d.options;
                d.ghost && d.ghost.css({position: "relative", height: d.size.height, width: d.size.width})
            }, stop: function (b, c) {
                var d = a(this).data("resizable");
                d.options;
                d.ghost && d.helper && d.helper.get(0).removeChild(d.ghost.get(0))
            }
        }), a.ui.plugin.add("resizable", "grid", {
            resize: function (b, c) {
                var d = a(this).data("resizable"), e = d.options, f = d.size, g = d.originalSize, h = d.originalPosition, i = d.axis;
                e._aspectRatio || b.shiftKey;
                e.grid = "number" == typeof e.grid ? [e.grid, e.grid] : e.grid;
                var j = Math.round((f.width - g.width) / (e.grid[0] || 1)) * (e.grid[0] || 1), k = Math.round((f.height - g.height) / (e.grid[1] || 1)) * (e.grid[1] || 1);
                /^(se|s|e)$/.test(i) ? (d.size.width = g.width + j, d.size.height = g.height + k) : /^(ne)$/.test(i) ? (d.size.width = g.width + j, d.size.height = g.height + k, d.position.top = h.top - k) : /^(sw)$/.test(i) ? (d.size.width = g.width + j, d.size.height = g.height + k, d.position.left = h.left - j) : (d.size.width = g.width + j, d.size.height = g.height + k, d.position.top = h.top - k, d.position.left = h.left - j)
            }
        });
        var c = function (a) {
            return parseInt(a, 10) || 0
        }, d = function (a) {
            return !isNaN(parseInt(a, 10))
        }
    }(jQuery), function (a, b) {
        a.widget("ui.selectable", a.ui.mouse, {
            version: "1.9.2",
            options: {appendTo: "body", autoRefresh: !0, distance: 0, filter: "*", tolerance: "touch"},
            _create: function () {
                var b = this;
                this.element.addClass("ui-selectable"), this.dragged = !1;
                var c;
                this.refresh = function () {
                    c = a(b.options.filter, b.element[0]), c.addClass("ui-selectee"), c.each(function () {
                        var b = a(this), c = b.offset();
                        a.data(this, "selectable-item", {
                            element: this,
                            $element: b,
                            left: c.left,
                            top: c.top,
                            right: c.left + b.outerWidth(),
                            bottom: c.top + b.outerHeight(),
                            startselected: !1,
                            selected: b.hasClass("ui-selected"),
                            selecting: b.hasClass("ui-selecting"),
                            unselecting: b.hasClass("ui-unselecting")
                        })
                    })
                }, this.refresh(), this.selectees = c.addClass("ui-selectee"), this._mouseInit(), this.helper = a("<div class='ui-selectable-helper'></div>")
            },
            _destroy: function () {
                this.selectees.removeClass("ui-selectee").removeData("selectable-item"), this.element.removeClass("ui-selectable ui-selectable-disabled"), this._mouseDestroy()
            },
            _mouseStart: function (b) {
                var c = this;
                if (this.opos = [b.pageX, b.pageY], !this.options.disabled) {
                    var d = this.options;
                    this.selectees = a(d.filter, this.element[0]), this._trigger("start", b), a(d.appendTo).append(this.helper), this.helper.css({
                        left: b.clientX,
                        top: b.clientY,
                        width: 0,
                        height: 0
                    }), d.autoRefresh && this.refresh(), this.selectees.filter(".ui-selected").each(function () {
                        var d = a.data(this, "selectable-item");
                        d.startselected = !0, b.metaKey || b.ctrlKey || (d.$element.removeClass("ui-selected"), d.selected = !1, d.$element.addClass("ui-unselecting"), d.unselecting = !0, c._trigger("unselecting", b, {unselecting: d.element}))
                    }), a(b.target).parents().andSelf().each(function () {
                        var d = a.data(this, "selectable-item");
                        if (d) {
                            var e = !b.metaKey && !b.ctrlKey || !d.$element.hasClass("ui-selected");
                            return d.$element.removeClass(e ? "ui-unselecting" : "ui-selected").addClass(e ? "ui-selecting" : "ui-unselecting"), d.unselecting = !e, d.selecting = e, d.selected = e, e ? c._trigger("selecting", b, {selecting: d.element}) : c._trigger("unselecting", b, {unselecting: d.element}), !1
                        }
                    })
                }
            },
            _mouseDrag: function (b) {
                var c = this;
                if (this.dragged = !0, !this.options.disabled) {
                    var d = this.options, e = this.opos[0], f = this.opos[1], g = b.pageX, h = b.pageY;
                    if (e > g) {
                        var i = g;
                        g = e, e = i
                    }
                    if (f > h) {
                        var i = h;
                        h = f, f = i
                    }
                    return this.helper.css({
                        left: e,
                        top: f,
                        width: g - e,
                        height: h - f
                    }), this.selectees.each(function () {
                        var i = a.data(this, "selectable-item");
                        if (i && i.element != c.element[0]) {
                            var j = !1;
                            "touch" == d.tolerance ? j = !(i.left > g || i.right < e || i.top > h || i.bottom < f) : "fit" == d.tolerance && (j = i.left > e && i.right < g && i.top > f && i.bottom < h), j ? (i.selected && (i.$element.removeClass("ui-selected"), i.selected = !1), i.unselecting && (i.$element.removeClass("ui-unselecting"), i.unselecting = !1), i.selecting || (i.$element.addClass("ui-selecting"), i.selecting = !0, c._trigger("selecting", b, {selecting: i.element}))) : (i.selecting && ((b.metaKey || b.ctrlKey) && i.startselected ? (i.$element.removeClass("ui-selecting"), i.selecting = !1, i.$element.addClass("ui-selected"), i.selected = !0) : (i.$element.removeClass("ui-selecting"), i.selecting = !1, i.startselected && (i.$element.addClass("ui-unselecting"),
                                i.unselecting = !0), c._trigger("unselecting", b, {unselecting: i.element}))), i.selected && (b.metaKey || b.ctrlKey || i.startselected || (i.$element.removeClass("ui-selected"), i.selected = !1, i.$element.addClass("ui-unselecting"), i.unselecting = !0, c._trigger("unselecting", b, {unselecting: i.element}))))
                        }
                    }), !1
                }
            },
            _mouseStop: function (b) {
                var c = this;
                this.dragged = !1;
                this.options;
                return a(".ui-unselecting", this.element[0]).each(function () {
                    var d = a.data(this, "selectable-item");
                    d.$element.removeClass("ui-unselecting"), d.unselecting = !1, d.startselected = !1, c._trigger("unselected", b, {unselected: d.element})
                }), a(".ui-selecting", this.element[0]).each(function () {
                    var d = a.data(this, "selectable-item");
                    d.$element.removeClass("ui-selecting").addClass("ui-selected"), d.selecting = !1, d.selected = !0, d.startselected = !0, c._trigger("selected", b, {selected: d.element})
                }), this._trigger("stop", b), this.helper.remove(), !1
            }
        })
    }(jQuery), function (a, b) {
        a.widget("ui.sortable", a.ui.mouse, {
            version: "1.9.2",
            widgetEventPrefix: "sort",
            ready: !1,
            options: {
                appendTo: "parent",
                axis: !1,
                connectWith: !1,
                containment: !1,
                cursor: "auto",
                cursorAt: !1,
                dropOnEmpty: !0,
                forcePlaceholderSize: !1,
                forceHelperSize: !1,
                grid: !1,
                handle: !1,
                helper: "original",
                items: "> *",
                opacity: !1,
                placeholder: !1,
                revert: !1,
                scroll: !0,
                scrollSensitivity: 20,
                scrollSpeed: 20,
                scope: "default",
                tolerance: "intersect",
                zIndex: 1e3
            },
            _create: function () {
                var a = this.options;
                this.containerCache = {}, this.element.addClass("ui-sortable"), this.refresh(), this.floating = this.items.length ? "x" === a.axis || /left|right/.test(this.items[0].item.css("float")) || /inline|table-cell/.test(this.items[0].item.css("display")) : !1, this.offset = this.element.offset(), this._mouseInit(), this.ready = !0
            },
            _destroy: function () {
                this.element.removeClass("ui-sortable ui-sortable-disabled"), this._mouseDestroy();
                for (var a = this.items.length - 1; a >= 0; a--)this.items[a].item.removeData(this.widgetName + "-item");
                return this
            },
            _setOption: function (b, c) {
                "disabled" === b ? (this.options[b] = c, this.widget().toggleClass("ui-sortable-disabled", !!c)) : a.Widget.prototype._setOption.apply(this, arguments)
            },
            _mouseCapture: function (b, c) {
                var d = this;
                if (this.reverting)return !1;
                if (this.options.disabled || "static" == this.options.type)return !1;
                this._refreshItems(b);
                var e = null;
                a(b.target).parents().each(function () {
                    return a.data(this, d.widgetName + "-item") == d ? (e = a(this), !1) : void 0
                });
                if (a.data(b.target, d.widgetName + "-item") == d && (e = a(b.target)), !e)return !1;
                if (this.options.handle && !c) {
                    var f = !1;
                    if (a(this.options.handle, e).find("*").andSelf().each(function () {
                            this == b.target && (f = !0)
                        }), !f)return !1
                }
                return this.currentItem = e, this._removeCurrentsFromItems(), !0
            },
            _mouseStart: function (b, c, d) {
                var e = this.options;
                if (this.currentContainer = this, this.refreshPositions(), this.helper = this._createHelper(b), this._cacheHelperProportions(), this._cacheMargins(), this.scrollParent = this.helper.scrollParent(), this.offset = this.currentItem.offset(), this.offset = {
                        top: this.offset.top - this.margins.top,
                        left: this.offset.left - this.margins.left
                    }, a.extend(this.offset, {
                        click: {left: b.pageX - this.offset.left, top: b.pageY - this.offset.top},
                        parent: this._getParentOffset(),
                        relative: this._getRelativeOffset()
                    }), this.helper.css("position", "absolute"), this.cssPosition = this.helper.css("position"), this.originalPosition = this._generatePosition(b), this.originalPageX = b.pageX, this.originalPageY = b.pageY, e.cursorAt && this._adjustOffsetFromHelper(e.cursorAt), this.domPosition = {
                        prev: this.currentItem.prev()[0],
                        parent: this.currentItem.parent()[0]
                    }, this.helper[0] != this.currentItem[0] && this.currentItem.hide(), this._createPlaceholder(), e.containment && this._setContainment(), e.cursor && (a("body").css("cursor") && (this._storedCursor = a("body").css("cursor")), a("body").css("cursor", e.cursor)), e.opacity && (this.helper.css("opacity") && (this._storedOpacity = this.helper.css("opacity")), this.helper.css("opacity", e.opacity)), e.zIndex && (this.helper.css("zIndex") && (this._storedZIndex = this.helper.css("zIndex")), this.helper.css("zIndex", e.zIndex)), this.scrollParent[0] != document && "HTML" != this.scrollParent[0].tagName && (this.overflowOffset = this.scrollParent.offset()), this._trigger("start", b, this._uiHash()), this._preserveHelperProportions || this._cacheHelperProportions(), !d)for (var f = this.containers.length - 1; f >= 0; f--)this.containers[f]._trigger("activate", b, this._uiHash(this));
                return a.ui.ddmanager && (a.ui.ddmanager.current = this), a.ui.ddmanager && !e.dropBehaviour && a.ui.ddmanager.prepareOffsets(this, b), this.dragging = !0, this.helper.addClass("ui-sortable-helper"), this._mouseDrag(b), !0
            },
            _mouseDrag: function (b) {
                if (this.position = this._generatePosition(b), this.positionAbs = this._convertPositionTo("absolute"), this.lastPositionAbs || (this.lastPositionAbs = this.positionAbs), this.options.scroll) {
                    var c = this.options, d = !1;
                    this.scrollParent[0] != document && "HTML" != this.scrollParent[0].tagName ? (this.overflowOffset.top + this.scrollParent[0].offsetHeight - b.pageY < c.scrollSensitivity ? this.scrollParent[0].scrollTop = d = this.scrollParent[0].scrollTop + c.scrollSpeed : b.pageY - this.overflowOffset.top < c.scrollSensitivity && (this.scrollParent[0].scrollTop = d = this.scrollParent[0].scrollTop - c.scrollSpeed), this.overflowOffset.left + this.scrollParent[0].offsetWidth - b.pageX < c.scrollSensitivity ? this.scrollParent[0].scrollLeft = d = this.scrollParent[0].scrollLeft + c.scrollSpeed : b.pageX - this.overflowOffset.left < c.scrollSensitivity && (this.scrollParent[0].scrollLeft = d = this.scrollParent[0].scrollLeft - c.scrollSpeed)) : (b.pageY - a(document).scrollTop() < c.scrollSensitivity ? d = a(document).scrollTop(a(document).scrollTop() - c.scrollSpeed) : a(window).height() - (b.pageY - a(document).scrollTop()) < c.scrollSensitivity && (d = a(document).scrollTop(a(document).scrollTop() + c.scrollSpeed)), b.pageX - a(document).scrollLeft() < c.scrollSensitivity ? d = a(document).scrollLeft(a(document).scrollLeft() - c.scrollSpeed) : a(window).width() - (b.pageX - a(document).scrollLeft()) < c.scrollSensitivity && (d = a(document).scrollLeft(a(document).scrollLeft() + c.scrollSpeed))), d !== !1 && a.ui.ddmanager && !c.dropBehaviour && a.ui.ddmanager.prepareOffsets(this, b)
                }
                this.positionAbs = this._convertPositionTo("absolute"), this.options.axis && "y" == this.options.axis || (this.helper[0].style.left = this.position.left + "px"), this.options.axis && "x" == this.options.axis || (this.helper[0].style.top = this.position.top + "px");
                for (var e = this.items.length - 1; e >= 0; e--) {
                    var f = this.items[e], g = f.item[0], h = this._intersectsWithPointer(f);
                    if (h && f.instance === this.currentContainer && g != this.currentItem[0] && this.placeholder[1 == h ? "next" : "prev"]()[0] != g && !a.contains(this.placeholder[0], g) && ("semi-dynamic" == this.options.type ? !a.contains(this.element[0], g) : !0)) {
                        if (this.direction = 1 == h ? "down" : "up", "pointer" != this.options.tolerance && !this._intersectsWithSides(f))break;
                        this._rearrange(b, f), this._trigger("change", b, this._uiHash());
                        break
                    }
                }
                return this._contactContainers(b), a.ui.ddmanager && a.ui.ddmanager.drag(this, b), this._trigger("sort", b, this._uiHash()), this.lastPositionAbs = this.positionAbs, !1
            },
            _mouseStop: function (b, c) {
                if (b) {
                    if (a.ui.ddmanager && !this.options.dropBehaviour && a.ui.ddmanager.drop(this, b), this.options.revert) {
                        var d = this, e = this.placeholder.offset();
                        this.reverting = !0, a(this.helper).animate({
                            left: e.left - this.offset.parent.left - this.margins.left + (this.offsetParent[0] == document.body ? 0 : this.offsetParent[0].scrollLeft),
                            top: e.top - this.offset.parent.top - this.margins.top + (this.offsetParent[0] == document.body ? 0 : this.offsetParent[0].scrollTop)
                        }, parseInt(this.options.revert, 10) || 500, function () {
                            d._clear(b)
                        })
                    } else this._clear(b, c);
                    return !1
                }
            },
            cancel: function () {
                if (this.dragging) {
                    this._mouseUp({target: null}), "original" == this.options.helper ? this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper") : this.currentItem.show();
                    for (var b = this.containers.length - 1; b >= 0; b--)this.containers[b]._trigger("deactivate", null, this._uiHash(this)), this.containers[b].containerCache.over && (this.containers[b]._trigger("out", null, this._uiHash(this)), this.containers[b].containerCache.over = 0)
                }
                return this.placeholder && (this.placeholder[0].parentNode && this.placeholder[0].parentNode.removeChild(this.placeholder[0]), "original" != this.options.helper && this.helper && this.helper[0].parentNode && this.helper.remove(), a.extend(this, {
                    helper: null,
                    dragging: !1,
                    reverting: !1,
                    _noFinalSort: null
                }), this.domPosition.prev ? a(this.domPosition.prev).after(this.currentItem) : a(this.domPosition.parent).prepend(this.currentItem)), this
            },
            serialize: function (b) {
                var c = this._getItemsAsjQuery(b && b.connected), d = [];
                return b = b || {}, a(c).each(function () {
                    var c = (a(b.item || this).attr(b.attribute || "id") || "").match(b.expression || /(.+)[-=_](.+)/);
                    c && d.push((b.key || c[1] + "[]") + "=" + (b.key && b.expression ? c[1] : c[2]))
                }), !d.length && b.key && d.push(b.key + "="), d.join("&")
            },
            toArray: function (b) {
                var c = this._getItemsAsjQuery(b && b.connected), d = [];
                return b = b || {}, c.each(function () {
                    d.push(a(b.item || this).attr(b.attribute || "id") || "")
                }), d
            },
            _intersectsWith: function (a) {
                var b = this.positionAbs.left, c = b + this.helperProportions.width, d = this.positionAbs.top, e = d + this.helperProportions.height, f = a.left, g = f + a.width, h = a.top, i = h + a.height, j = this.offset.click.top, k = this.offset.click.left, l = d + j > h && i > d + j && b + k > f && g > b + k;
                return "pointer" == this.options.tolerance || this.options.forcePointerForContainers || "pointer" != this.options.tolerance && this.helperProportions[this.floating ? "width" : "height"] > a[this.floating ? "width" : "height"] ? l : f < b + this.helperProportions.width / 2 && c - this.helperProportions.width / 2 < g && h < d + this.helperProportions.height / 2 && e - this.helperProportions.height / 2 < i
            },
            _intersectsWithPointer: function (b) {
                var c = "x" === this.options.axis || a.ui.isOverAxis(this.positionAbs.top + this.offset.click.top, b.top, b.height), d = "y" === this.options.axis || a.ui.isOverAxis(this.positionAbs.left + this.offset.click.left, b.left, b.width), e = c && d, f = this._getDragVerticalDirection(), g = this._getDragHorizontalDirection();
                return e ? this.floating ? g && "right" == g || "down" == f ? 2 : 1 : f && ("down" == f ? 2 : 1) : !1
            },
            _intersectsWithSides: function (b) {
                var c = a.ui.isOverAxis(this.positionAbs.top + this.offset.click.top, b.top + b.height / 2, b.height), d = a.ui.isOverAxis(this.positionAbs.left + this.offset.click.left, b.left + b.width / 2, b.width), e = this._getDragVerticalDirection(), f = this._getDragHorizontalDirection();
                return this.floating && f ? "right" == f && d || "left" == f && !d : e && ("down" == e && c || "up" == e && !c)
            },
            _getDragVerticalDirection: function () {
                var a = this.positionAbs.top - this.lastPositionAbs.top;
                return 0 != a && (a > 0 ? "down" : "up")
            },
            _getDragHorizontalDirection: function () {
                var a = this.positionAbs.left - this.lastPositionAbs.left;
                return 0 != a && (a > 0 ? "right" : "left")
            },
            refresh: function (a) {
                return this._refreshItems(a), this.refreshPositions(), this
            },
            _connectWith: function () {
                var a = this.options;
                return a.connectWith.constructor == String ? [a.connectWith] : a.connectWith
            },
            _getItemsAsjQuery: function (b) {
                var c = [], d = [], e = this._connectWith();
                if (e && b)for (var f = e.length - 1; f >= 0; f--)for (var g = a(e[f]), h = g.length - 1; h >= 0; h--) {
                    var i = a.data(g[h], this.widgetName);
                    i && i != this && !i.options.disabled && d.push([a.isFunction(i.options.items) ? i.options.items.call(i.element) : a(i.options.items, i.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), i])
                }
                d.push([a.isFunction(this.options.items) ? this.options.items.call(this.element, null, {
                    options: this.options,
                    item: this.currentItem
                }) : a(this.options.items, this.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), this]);
                for (var f = d.length - 1; f >= 0; f--)d[f][0].each(function () {
                    c.push(this)
                });
                return a(c)
            },
            _removeCurrentsFromItems: function () {
                var b = this.currentItem.find(":data(" + this.widgetName + "-item)");
                this.items = a.grep(this.items, function (a) {
                    for (var c = 0; c < b.length; c++)if (b[c] == a.item[0])return !1;
                    return !0
                })
            },
            _refreshItems: function (b) {
                this.items = [], this.containers = [this];
                var c = this.items, d = [[a.isFunction(this.options.items) ? this.options.items.call(this.element[0], b, {item: this.currentItem}) : a(this.options.items, this.element), this]], e = this._connectWith();
                if (e && this.ready)for (var f = e.length - 1; f >= 0; f--)for (var g = a(e[f]), h = g.length - 1; h >= 0; h--) {
                    var i = a.data(g[h], this.widgetName);
                    i && i != this && !i.options.disabled && (d.push([a.isFunction(i.options.items) ? i.options.items.call(i.element[0], b, {item: this.currentItem}) : a(i.options.items, i.element), i]), this.containers.push(i))
                }
                for (var f = d.length - 1; f >= 0; f--)for (var j = d[f][1], k = d[f][0], h = 0, l = k.length; l > h; h++) {
                    var m = a(k[h]);
                    m.data(this.widgetName + "-item", j), c.push({
                        item: m,
                        instance: j,
                        width: 0,
                        height: 0,
                        left: 0,
                        top: 0
                    })
                }
            },
            refreshPositions: function (b) {
                this.offsetParent && this.helper && (this.offset.parent = this._getParentOffset());
                for (var c = this.items.length - 1; c >= 0; c--) {
                    var d = this.items[c];
                    if (d.instance == this.currentContainer || !this.currentContainer || d.item[0] == this.currentItem[0]) {
                        var e = this.options.toleranceElement ? a(this.options.toleranceElement, d.item) : d.item;
                        b || (d.width = e.outerWidth(), d.height = e.outerHeight());
                        var f = e.offset();
                        d.left = f.left, d.top = f.top
                    }
                }
                if (this.options.custom && this.options.custom.refreshContainers)this.options.custom.refreshContainers.call(this); else for (var c = this.containers.length - 1; c >= 0; c--) {
                    var f = this.containers[c].element.offset();
                    this.containers[c].containerCache.left = f.left, this.containers[c].containerCache.top = f.top, this.containers[c].containerCache.width = this.containers[c].element.outerWidth(), this.containers[c].containerCache.height = this.containers[c].element.outerHeight()
                }
                return this
            },
            _createPlaceholder: function (b) {
                b = b || this;
                var c = b.options;
                if (!c.placeholder || c.placeholder.constructor == String) {
                    var d = c.placeholder;
                    c.placeholder = {
                        element: function () {
                            var c = a(document.createElement(b.currentItem[0].nodeName)).addClass(d || b.currentItem[0].className + " ui-sortable-placeholder").removeClass("ui-sortable-helper")[0];
                            return d || (c.style.visibility = "hidden"), c
                        }, update: function (a, e) {
                            (!d || c.forcePlaceholderSize) && (e.height() || e.height(b.currentItem.innerHeight() - parseInt(b.currentItem.css("paddingTop") || 0, 10) - parseInt(b.currentItem.css("paddingBottom") || 0, 10)), e.width() || e.width(b.currentItem.innerWidth() - parseInt(b.currentItem.css("paddingLeft") || 0, 10) - parseInt(b.currentItem.css("paddingRight") || 0, 10)))
                        }
                    }
                }
                b.placeholder = a(c.placeholder.element.call(b.element, b.currentItem)), b.currentItem.after(b.placeholder), c.placeholder.update(b, b.placeholder)
            },
            _contactContainers: function (b) {
                for (var c = null, d = null, e = this.containers.length - 1; e >= 0; e--)if (!a.contains(this.currentItem[0], this.containers[e].element[0]))if (this._intersectsWith(this.containers[e].containerCache)) {
                    if (c && a.contains(this.containers[e].element[0], c.element[0]))continue;
                    c = this.containers[e], d = e
                } else this.containers[e].containerCache.over && (this.containers[e]._trigger("out", b, this._uiHash(this)), this.containers[e].containerCache.over = 0);
                if (c)if (1 === this.containers.length)this.containers[d]._trigger("over", b, this._uiHash(this)), this.containers[d].containerCache.over = 1; else {
                    for (var f = 1e4, g = null, h = this.containers[d].floating ? "left" : "top", i = this.containers[d].floating ? "width" : "height", j = this.positionAbs[h] + this.offset.click[h], k = this.items.length - 1; k >= 0; k--)if (a.contains(this.containers[d].element[0], this.items[k].item[0]) && this.items[k].item[0] != this.currentItem[0]) {
                        var l = this.items[k].item.offset()[h], m = !1;
                        Math.abs(l - j) > Math.abs(l + this.items[k][i] - j) && (m = !0, l += this.items[k][i]), Math.abs(l - j) < f && (f = Math.abs(l - j), g = this.items[k], this.direction = m ? "up" : "down")
                    }
                    if (!g && !this.options.dropOnEmpty)return;
                    this.currentContainer = this.containers[d], g ? this._rearrange(b, g, null, !0) : this._rearrange(b, null, this.containers[d].element, !0), this._trigger("change", b, this._uiHash()), this.containers[d]._trigger("change", b, this._uiHash(this)), this.options.placeholder.update(this.currentContainer, this.placeholder), this.containers[d]._trigger("over", b, this._uiHash(this)), this.containers[d].containerCache.over = 1
                }
            },
            _createHelper: function (b) {
                var c = this.options, d = a.isFunction(c.helper) ? a(c.helper.apply(this.element[0], [b, this.currentItem])) : "clone" == c.helper ? this.currentItem.clone() : this.currentItem;
                return d.parents("body").length || a("parent" != c.appendTo ? c.appendTo : this.currentItem[0].parentNode)[0].appendChild(d[0]), d[0] == this.currentItem[0] && (this._storedCSS = {
                    width: this.currentItem[0].style.width,
                    height: this.currentItem[0].style.height,
                    position: this.currentItem.css("position"),
                    top: this.currentItem.css("top"),
                    left: this.currentItem.css("left")
                }), ("" == d[0].style.width || c.forceHelperSize) && d.width(this.currentItem.width()), ("" == d[0].style.height || c.forceHelperSize) && d.height(this.currentItem.height()), d
            },
            _adjustOffsetFromHelper: function (b) {
                "string" == typeof b && (b = b.split(" ")), a.isArray(b) && (b = {
                    left: +b[0],
                    top: +b[1] || 0
                }), "left" in b && (this.offset.click.left = b.left + this.margins.left), "right" in b && (this.offset.click.left = this.helperProportions.width - b.right + this.margins.left), "top" in b && (this.offset.click.top = b.top + this.margins.top), "bottom" in b && (this.offset.click.top = this.helperProportions.height - b.bottom + this.margins.top)
            },
            _getParentOffset: function () {
                this.offsetParent = this.helper.offsetParent();
                var b = this.offsetParent.offset();
                return "absolute" == this.cssPosition && this.scrollParent[0] != document && a.contains(this.scrollParent[0], this.offsetParent[0]) && (b.left += this.scrollParent.scrollLeft(), b.top += this.scrollParent.scrollTop()), (this.offsetParent[0] == document.body || this.offsetParent[0].tagName && "html" == this.offsetParent[0].tagName.toLowerCase() && a.ui.ie) && (b = {
                    top: 0,
                    left: 0
                }), {
                    top: b.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
                    left: b.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)
                }
            },
            _getRelativeOffset: function () {
                if ("relative" == this.cssPosition) {
                    var a = this.currentItem.position();
                    return {
                        top: a.top - (parseInt(this.helper.css("top"), 10) || 0) + this.scrollParent.scrollTop(),
                        left: a.left - (parseInt(this.helper.css("left"), 10) || 0) + this.scrollParent.scrollLeft()
                    }
                }
                return {top: 0, left: 0}
            },
            _cacheMargins: function () {
                this.margins = {
                    left: parseInt(this.currentItem.css("marginLeft"), 10) || 0,
                    top: parseInt(this.currentItem.css("marginTop"), 10) || 0
                }
            },
            _cacheHelperProportions: function () {
                this.helperProportions = {width: this.helper.outerWidth(), height: this.helper.outerHeight()}
            },
            _setContainment: function () {
                var b = this.options;
                if ("parent" == b.containment && (b.containment = this.helper[0].parentNode), ("document" == b.containment || "window" == b.containment) && (this.containment = [0 - this.offset.relative.left - this.offset.parent.left, 0 - this.offset.relative.top - this.offset.parent.top, a("document" == b.containment ? document : window).width() - this.helperProportions.width - this.margins.left, (a("document" == b.containment ? document : window).height() || document.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top]), !/^(document|window|parent)$/.test(b.containment)) {
                    var c = a(b.containment)[0], d = a(b.containment).offset(), e = "hidden" != a(c).css("overflow");
                    this.containment = [d.left + (parseInt(a(c).css("borderLeftWidth"), 10) || 0) + (parseInt(a(c).css("paddingLeft"), 10) || 0) - this.margins.left, d.top + (parseInt(a(c).css("borderTopWidth"), 10) || 0) + (parseInt(a(c).css("paddingTop"), 10) || 0) - this.margins.top, d.left + (e ? Math.max(c.scrollWidth, c.offsetWidth) : c.offsetWidth) - (parseInt(a(c).css("borderLeftWidth"), 10) || 0) - (parseInt(a(c).css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left, d.top + (e ? Math.max(c.scrollHeight, c.offsetHeight) : c.offsetHeight) - (parseInt(a(c).css("borderTopWidth"), 10) || 0) - (parseInt(a(c).css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top]
                }
            },
            _convertPositionTo: function (b, c) {
                c || (c = this.position);
                var d = "absolute" == b ? 1 : -1, e = (this.options, "absolute" != this.cssPosition || this.scrollParent[0] != document && a.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent), f = /(html|body)/i.test(e[0].tagName);
                return {
                    top: c.top + this.offset.relative.top * d + this.offset.parent.top * d - ("fixed" == this.cssPosition ? -this.scrollParent.scrollTop() : f ? 0 : e.scrollTop()) * d,
                    left: c.left + this.offset.relative.left * d + this.offset.parent.left * d - ("fixed" == this.cssPosition ? -this.scrollParent.scrollLeft() : f ? 0 : e.scrollLeft()) * d
                }
            },
            _generatePosition: function (b) {
                var c = this.options, d = "absolute" != this.cssPosition || this.scrollParent[0] != document && a.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent, e = /(html|body)/i.test(d[0].tagName);
                "relative" != this.cssPosition || this.scrollParent[0] != document && this.scrollParent[0] != this.offsetParent[0] || (this.offset.relative = this._getRelativeOffset());
                var f = b.pageX, g = b.pageY;
                if (this.originalPosition && (this.containment && (b.pageX - this.offset.click.left < this.containment[0] && (f = this.containment[0] + this.offset.click.left), b.pageY - this.offset.click.top < this.containment[1] && (g = this.containment[1] + this.offset.click.top), b.pageX - this.offset.click.left > this.containment[2] && (f = this.containment[2] + this.offset.click.left), b.pageY - this.offset.click.top > this.containment[3] && (g = this.containment[3] + this.offset.click.top)), c.grid)) {
                    var h = this.originalPageY + Math.round((g - this.originalPageY) / c.grid[1]) * c.grid[1];
                    g = this.containment && (h - this.offset.click.top < this.containment[1] || h - this.offset.click.top > this.containment[3]) ? h - this.offset.click.top < this.containment[1] ? h + c.grid[1] : h - c.grid[1] : h;
                    var i = this.originalPageX + Math.round((f - this.originalPageX) / c.grid[0]) * c.grid[0];
                    f = this.containment && (i - this.offset.click.left < this.containment[0] || i - this.offset.click.left > this.containment[2]) ? i - this.offset.click.left < this.containment[0] ? i + c.grid[0] : i - c.grid[0] : i
                }
                return {
                    top: g - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + ("fixed" == this.cssPosition ? -this.scrollParent.scrollTop() : e ? 0 : d.scrollTop()),
                    left: f - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + ("fixed" == this.cssPosition ? -this.scrollParent.scrollLeft() : e ? 0 : d.scrollLeft())
                }
            },
            _rearrange: function (a, b, c, d) {
                c ? c[0].appendChild(this.placeholder[0]) : b.item[0].parentNode.insertBefore(this.placeholder[0], "down" == this.direction ? b.item[0] : b.item[0].nextSibling), this.counter = this.counter ? ++this.counter : 1;
                var e = this.counter;
                this._delay(function () {
                    e == this.counter && this.refreshPositions(!d)
                })
            },
            _clear: function (b, c) {
                this.reverting = !1;
                var d = [];
                if (!this._noFinalSort && this.currentItem.parent().length && this.placeholder.before(this.currentItem), this._noFinalSort = null, this.helper[0] == this.currentItem[0]) {
                    for (var e in this._storedCSS)("auto" == this._storedCSS[e] || "static" == this._storedCSS[e]) && (this._storedCSS[e] = "");
                    this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper")
                } else this.currentItem.show();
                this.fromOutside && !c && d.push(function (a) {
                    this._trigger("receive", a, this._uiHash(this.fromOutside))
                }), !this.fromOutside && this.domPosition.prev == this.currentItem.prev().not(".ui-sortable-helper")[0] && this.domPosition.parent == this.currentItem.parent()[0] || c || d.push(function (a) {
                    this._trigger("update", a, this._uiHash())
                }), this !== this.currentContainer && (c || (d.push(function (a) {
                    this._trigger("remove", a, this._uiHash())
                }), d.push(function (a) {
                    return function (b) {
                        a._trigger("receive", b, this._uiHash(this))
                    }
                }.call(this, this.currentContainer)), d.push(function (a) {
                    return function (b) {
                        a._trigger("update", b, this._uiHash(this))
                    }
                }.call(this, this.currentContainer))));
                for (var e = this.containers.length - 1; e >= 0; e--)c || d.push(function (a) {
                    return function (b) {
                        a._trigger("deactivate", b, this._uiHash(this))
                    }
                }.call(this, this.containers[e])), this.containers[e].containerCache.over && (d.push(function (a) {
                    return function (b) {
                        a._trigger("out", b, this._uiHash(this))
                    }
                }.call(this, this.containers[e])), this.containers[e].containerCache.over = 0);
                if (this._storedCursor && a("body").css("cursor", this._storedCursor), this._storedOpacity && this.helper.css("opacity", this._storedOpacity), this._storedZIndex && this.helper.css("zIndex", "auto" == this._storedZIndex ? "" : this._storedZIndex), this.dragging = !1, this.cancelHelperRemoval) {
                    if (!c) {
                        this._trigger("beforeStop", b, this._uiHash());
                        for (var e = 0; e < d.length; e++)d[e].call(this, b);
                        this._trigger("stop", b, this._uiHash())
                    }
                    return this.fromOutside = !1, !1
                }
                if (c || this._trigger("beforeStop", b, this._uiHash()), this.placeholder[0].parentNode.removeChild(this.placeholder[0]), this.helper[0] != this.currentItem[0] && this.helper.remove(), this.helper = null, !c) {
                    for (var e = 0; e < d.length; e++)d[e].call(this, b);
                    this._trigger("stop", b, this._uiHash())
                }
                return this.fromOutside = !1, !0
            },
            _trigger: function () {
                a.Widget.prototype._trigger.apply(this, arguments) === !1 && this.cancel()
            },
            _uiHash: function (b) {
                var c = b || this;
                return {
                    helper: c.helper,
                    placeholder: c.placeholder || a([]),
                    position: c.position,
                    originalPosition: c.originalPosition,
                    offset: c.positionAbs,
                    item: c.currentItem,
                    sender: b ? b.element : null
                }
            }
        })
    }(jQuery), jQuery.effects || function (a, b) {
        var c = a.uiBackCompat !== !1, d = "ui-effects-";
        a.effects = {effect: {}}, function (b, c) {
            function d(a, b, c) {
                var d = m[b.type] || {};
                return null == a ? c || !b.def ? null : b.def : (a = d.floor ? ~~a : parseFloat(a), isNaN(a) ? b.def : d.mod ? (a + d.mod) % d.mod : 0 > a ? 0 : d.max < a ? d.max : a)
            }

            function e(a) {
                var c = k(), d = c._rgba = [];
                return a = a.toLowerCase(), p(j, function (b, e) {
                    var f, g = e.re.exec(a), h = g && e.parse(g), i = e.space || "rgba";
                    return h ? (f = c[i](h), c[l[i].cache] = f[l[i].cache], d = c._rgba = f._rgba, !1) : void 0
                }), d.length ? ("0,0,0,0" === d.join() && b.extend(d, g.transparent), c) : g[a]
            }

            function f(a, b, c) {
                return c = (c + 1) % 1, 1 > 6 * c ? a + (b - a) * c * 6 : 1 > 2 * c ? b : 2 > 3 * c ? a + (b - a) * (2 / 3 - c) * 6 : a
            }

            var g, h = "backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor".split(" "), i = /^([\-+])=\s*(\d+\.?\d*)/, j = [{
                re: /rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d+(?:\.\d+)?)\s*)?\)/,
                parse: function (a) {
                    return [a[1], a[2], a[3], a[4]]
                }
            }, {
                re: /rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d+(?:\.\d+)?)\s*)?\)/,
                parse: function (a) {
                    return [2.55 * a[1], 2.55 * a[2], 2.55 * a[3], a[4]]
                }
            }, {
                re: /#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/, parse: function (a) {
                    return [parseInt(a[1], 16), parseInt(a[2], 16), parseInt(a[3], 16)]
                }
            }, {
                re: /#([a-f0-9])([a-f0-9])([a-f0-9])/, parse: function (a) {
                    return [parseInt(a[1] + a[1], 16), parseInt(a[2] + a[2], 16), parseInt(a[3] + a[3], 16)]
                }
            }, {
                re: /hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d+(?:\.\d+)?)\s*)?\)/,
                space: "hsla",
                parse: function (a) {
                    return [a[1], a[2] / 100, a[3] / 100, a[4]]
                }
            }], k = b.Color = function (a, c, d, e) {
                return new b.Color.fn.parse(a, c, d, e)
            }, l = {
                rgba: {
                    props: {
                        red: {idx: 0, type: "byte"},
                        green: {idx: 1, type: "byte"},
                        blue: {idx: 2, type: "byte"}
                    }
                },
                hsla: {
                    props: {
                        hue: {idx: 0, type: "degrees"},
                        saturation: {idx: 1, type: "percent"},
                        lightness: {idx: 2, type: "percent"}
                    }
                }
            }, m = {
                "byte": {floor: !0, max: 255},
                percent: {max: 1},
                degrees: {mod: 360, floor: !0}
            }, n = k.support = {}, o = b("<p>")[0], p = b.each;
            o.style.cssText = "background-color:rgba(1,1,1,.5)", n.rgba = o.style.backgroundColor.indexOf("rgba") > -1, p(l, function (a, b) {
                b.cache = "_" + a, b.props.alpha = {idx: 3, type: "percent", def: 1}
            }), k.fn = b.extend(k.prototype, {
                parse: function (f, h, i, j) {
                    if (f === c)return this._rgba = [null, null, null, null], this;
                    (f.jquery || f.nodeType) && (f = b(f).css(h), h = c);
                    var m = this, n = b.type(f), o = this._rgba = [];
                    return h !== c && (f = [f, h, i, j], n = "array"), "string" === n ? this.parse(e(f) || g._default) : "array" === n ? (p(l.rgba.props, function (a, b) {
                        o[b.idx] = d(f[b.idx], b)
                    }), this) : "object" === n ? (f instanceof k ? p(l, function (a, b) {
                        f[b.cache] && (m[b.cache] = f[b.cache].slice())
                    }) : p(l, function (b, c) {
                        var e = c.cache;
                        p(c.props, function (a, b) {
                            if (!m[e] && c.to) {
                                if ("alpha" === a || null == f[a])return;
                                m[e] = c.to(m._rgba)
                            }
                            m[e][b.idx] = d(f[a], b, !0)
                        }), m[e] && a.inArray(null, m[e].slice(0, 3)) < 0 && (m[e][3] = 1, c.from && (m._rgba = c.from(m[e])))
                    }), this) : void 0
                }, is: function (a) {
                    var b = k(a), c = !0, d = this;
                    return p(l, function (a, e) {
                        var f, g = b[e.cache];
                        return g && (f = d[e.cache] || e.to && e.to(d._rgba) || [], p(e.props, function (a, b) {
                            return null != g[b.idx] ? c = g[b.idx] === f[b.idx] : void 0
                        })), c
                    }), c
                }, _space: function () {
                    var a = [], b = this;
                    return p(l, function (c, d) {
                        b[d.cache] && a.push(c)
                    }), a.pop()
                }, transition: function (a, b) {
                    var c = k(a), e = c._space(), f = l[e], g = 0 === this.alpha() ? k("transparent") : this, h = g[f.cache] || f.to(g._rgba), i = h.slice();
                    return c = c[f.cache], p(f.props, function (a, e) {
                        var f = e.idx, g = h[f], j = c[f], k = m[e.type] || {};
                        null !== j && (null === g ? i[f] = j : (k.mod && (j - g > k.mod / 2 ? g += k.mod : g - j > k.mod / 2 && (g -= k.mod)), i[f] = d((j - g) * b + g, e)))
                    }), this[e](i)
                }, blend: function (a) {
                    if (1 === this._rgba[3])return this;
                    var c = this._rgba.slice(), d = c.pop(), e = k(a)._rgba;
                    return k(b.map(c, function (a, b) {
                        return (1 - d) * e[b] + d * a
                    }))
                }, toRgbaString: function () {
                    var a = "rgba(", c = b.map(this._rgba, function (a, b) {
                        return null == a ? b > 2 ? 1 : 0 : a
                    });
                    return 1 === c[3] && (c.pop(), a = "rgb("), a + c.join() + ")"
                }, toHslaString: function () {
                    var a = "hsla(", c = b.map(this.hsla(), function (a, b) {
                        return null == a && (a = b > 2 ? 1 : 0), b && 3 > b && (a = Math.round(100 * a) + "%"), a
                    });
                    return 1 === c[3] && (c.pop(), a = "hsl("), a + c.join() + ")"
                }, toHexString: function (a) {
                    var c = this._rgba.slice(), d = c.pop();
                    return a && c.push(~~(255 * d)), "#" + b.map(c, function (a) {
                        return a = (a || 0).toString(16), 1 === a.length ? "0" + a : a
                    }).join("")
                }, toString: function () {
                    return 0 === this._rgba[3] ? "transparent" : this.toRgbaString()
                }
            }), k.fn.parse.prototype = k.fn, l.hsla.to = function (a) {
                if (null == a[0] || null == a[1] || null == a[2])return [null, null, null, a[3]];
                var b, c, d = a[0] / 255, e = a[1] / 255, f = a[2] / 255, g = a[3], h = Math.max(d, e, f), i = Math.min(d, e, f), j = h - i, k = h + i, l = .5 * k;
                return b = i === h ? 0 : d === h ? 60 * (e - f) / j + 360 : e === h ? 60 * (f - d) / j + 120 : 60 * (d - e) / j + 240, c = 0 === l || 1 === l ? l : .5 >= l ? j / k : j / (2 - k), [Math.round(b) % 360, c, l, null == g ? 1 : g]
            }, l.hsla.from = function (a) {
                if (null == a[0] || null == a[1] || null == a[2])return [null, null, null, a[3]];
                var b = a[0] / 360, c = a[1], d = a[2], e = a[3], g = .5 >= d ? d * (1 + c) : d + c - d * c, h = 2 * d - g;
                return [Math.round(255 * f(h, g, b + 1 / 3)), Math.round(255 * f(h, g, b)), Math.round(255 * f(h, g, b - 1 / 3)), e]
            }, p(l, function (a, e) {
                var f = e.props, g = e.cache, h = e.to, j = e.from;
                k.fn[a] = function (a) {
                    if (h && !this[g] && (this[g] = h(this._rgba)), a === c)return this[g].slice();
                    var e, i = b.type(a), l = "array" === i || "object" === i ? a : arguments, m = this[g].slice();
                    return p(f, function (a, b) {
                        var c = l["object" === i ? a : b.idx];
                        null == c && (c = m[b.idx]), m[b.idx] = d(c, b)
                    }), j ? (e = k(j(m)), e[g] = m, e) : k(m)
                }, p(f, function (c, d) {
                    k.fn[c] || (k.fn[c] = function (e) {
                        var f, g = b.type(e), h = "alpha" === c ? this._hsla ? "hsla" : "rgba" : a, j = this[h](), k = j[d.idx];
                        return "undefined" === g ? k : ("function" === g && (e = e.call(this, k), g = b.type(e)), null == e && d.empty ? this : ("string" === g && (f = i.exec(e), f && (e = k + parseFloat(f[2]) * ("+" === f[1] ? 1 : -1))), j[d.idx] = e, this[h](j)))
                    })
                })
            }), p(h, function (a, c) {
                b.cssHooks[c] = {
                    set: function (a, d) {
                        var f, g, h = "";
                        if ("string" !== b.type(d) || (f = e(d))) {
                            if (d = k(f || d), !n.rgba && 1 !== d._rgba[3]) {
                                for (g = "backgroundColor" === c ? a.parentNode : a; ("" === h || "transparent" === h) && g && g.style;)try {
                                    h = b.css(g, "backgroundColor"), g = g.parentNode
                                } catch (i) {
                                }
                                d = d.blend(h && "transparent" !== h ? h : "_default")
                            }
                            d = d.toRgbaString()
                        }
                        try {
                            a.style[c] = d
                        } catch (j) {
                        }
                    }
                }, b.fx.step[c] = function (a) {
                    a.colorInit || (a.start = k(a.elem, c), a.end = k(a.end), a.colorInit = !0), b.cssHooks[c].set(a.elem, a.start.transition(a.end, a.pos))
                }
            }), b.cssHooks.borderColor = {
                expand: function (a) {
                    var b = {};
                    return p(["Top", "Right", "Bottom", "Left"], function (c, d) {
                        b["border" + d + "Color"] = a
                    }), b
                }
            }, g = b.Color.names = {
                aqua: "#00ffff",
                black: "#000000",
                blue: "#0000ff",
                fuchsia: "#ff00ff",
                gray: "#808080",
                green: "#008000",
                lime: "#00ff00",
                maroon: "#800000",
                navy: "#000080",
                olive: "#808000",
                purple: "#800080",
                red: "#ff0000",
                silver: "#c0c0c0",
                teal: "#008080",
                white: "#ffffff",
                yellow: "#ffff00",
                transparent: [null, null, null, 0],
                _default: "#ffffff"
            }
        }(jQuery), function () {
            function c() {
                var b, c, d = this.ownerDocument.defaultView ? this.ownerDocument.defaultView.getComputedStyle(this, null) : this.currentStyle, e = {};
                if (d && d.length && d[0] && d[d[0]])for (c = d.length; c--;)b = d[c], "string" == typeof d[b] && (e[a.camelCase(b)] = d[b]); else for (b in d)"string" == typeof d[b] && (e[b] = d[b]);
                return e
            }

            function d(b, c) {
                var d, e, g = {};
                for (d in c)e = c[d], b[d] !== e && (f[d] || (a.fx.step[d] || !isNaN(parseFloat(e))) && (g[d] = e));
                return g
            }

            var e = ["add", "remove", "toggle"], f = {
                border: 1,
                borderBottom: 1,
                borderColor: 1,
                borderLeft: 1,
                borderRight: 1,
                borderTop: 1,
                borderWidth: 1,
                margin: 1,
                padding: 1
            };
            a.each(["borderLeftStyle", "borderRightStyle", "borderBottomStyle", "borderTopStyle"], function (b, c) {
                a.fx.step[c] = function (a) {
                    ("none" !== a.end && !a.setAttr || 1 === a.pos && !a.setAttr) && (jQuery.style(a.elem, c, a.end), a.setAttr = !0)
                }
            }), a.effects.animateClass = function (b, f, g, h) {
                var i = a.speed(f, g, h);
                return this.queue(function () {
                    var f, g = a(this), h = g.attr("class") || "", j = i.children ? g.find("*").andSelf() : g;
                    j = j.map(function () {
                        var b = a(this);
                        return {el: b, start: c.call(this)}
                    }), f = function () {
                        a.each(e, function (a, c) {
                            b[c] && g[c + "Class"](b[c])
                        })
                    }, f(), j = j.map(function () {
                        return this.end = c.call(this.el[0]), this.diff = d(this.start, this.end), this
                    }), g.attr("class", h), j = j.map(function () {
                        var b = this, c = a.Deferred(), d = jQuery.extend({}, i, {
                            queue: !1, complete: function () {
                                c.resolve(b)
                            }
                        });
                        return this.el.animate(this.diff, d), c.promise()
                    }), a.when.apply(a, j.get()).done(function () {
                        f(), a.each(arguments, function () {
                            var b = this.el;
                            a.each(this.diff, function (a) {
                                b.css(a, "")
                            })
                        }), i.complete.call(g[0])
                    })
                })
            }, a.fn.extend({
                _addClass: a.fn.addClass, addClass: function (b, c, d, e) {
                    return c ? a.effects.animateClass.call(this, {add: b}, c, d, e) : this._addClass(b)
                }, _removeClass: a.fn.removeClass, removeClass: function (b, c, d, e) {
                    return c ? a.effects.animateClass.call(this, {remove: b}, c, d, e) : this._removeClass(b)
                }, _toggleClass: a.fn.toggleClass, toggleClass: function (c, d, e, f, g) {
                    return "boolean" == typeof d || d === b ? e ? a.effects.animateClass.call(this, d ? {add: c} : {remove: c}, e, f, g) : this._toggleClass(c, d) : a.effects.animateClass.call(this, {toggle: c}, d, e, f)
                }, switchClass: function (b, c, d, e, f) {
                    return a.effects.animateClass.call(this, {add: c, remove: b}, d, e, f)
                }
            })
        }(), function () {
            function e(b, c, d, e) {
                return a.isPlainObject(b) && (c = b, b = b.effect), b = {effect: b}, null == c && (c = {}), a.isFunction(c) && (e = c, d = null, c = {}), ("number" == typeof c || a.fx.speeds[c]) && (e = d, d = c, c = {}), a.isFunction(d) && (e = d, d = null), c && a.extend(b, c), d = d || c.duration, b.duration = a.fx.off ? 0 : "number" == typeof d ? d : d in a.fx.speeds ? a.fx.speeds[d] : a.fx.speeds._default, b.complete = e || c.complete, b
            }

            function f(b) {
                return !b || "number" == typeof b || a.fx.speeds[b] ? !0 : "string" != typeof b || a.effects.effect[b] ? !1 : c && a.effects[b] ? !1 : !0
            }

            a.extend(a.effects, {
                version: "1.9.2", save: function (a, b) {
                    for (var c = 0; c < b.length; c++)null !== b[c] && a.data(d + b[c], a[0].style[b[c]])
                }, restore: function (a, c) {
                    var e, f;
                    for (f = 0; f < c.length; f++)null !== c[f] && (e = a.data(d + c[f]), e === b && (e = ""), a.css(c[f], e))
                }, setMode: function (a, b) {
                    return "toggle" === b && (b = a.is(":hidden") ? "show" : "hide"), b
                }, getBaseline: function (a, b) {
                    var c, d;
                    switch (a[0]) {
                        case"top":
                            c = 0;
                            break;
                        case"middle":
                            c = .5;
                            break;
                        case"bottom":
                            c = 1;
                            break;
                        default:
                            c = a[0] / b.height
                    }
                    switch (a[1]) {
                        case"left":
                            d = 0;
                            break;
                        case"center":
                            d = .5;
                            break;
                        case"right":
                            d = 1;
                            break;
                        default:
                            d = a[1] / b.width
                    }
                    return {x: d, y: c}
                }, createWrapper: function (b) {
                    if (b.parent().is(".ui-effects-wrapper"))return b.parent();
                    var c = {
                        width: b.outerWidth(!0),
                        height: b.outerHeight(!0),
                        "float": b.css("float")
                    }, d = a("<div></div>").addClass("ui-effects-wrapper").css({
                        fontSize: "100%",
                        background: "transparent",
                        border: "none",
                        margin: 0,
                        padding: 0
                    }), e = {width: b.width(), height: b.height()}, f = document.activeElement;
                    try {
                        f.id
                    } catch (g) {
                        f = document.body
                    }
                    return b.wrap(d), (b[0] === f || a.contains(b[0], f)) && a(f).focus(), d = b.parent(), "static" === b.css("position") ? (d.css({position: "relative"}), b.css({position: "relative"})) : (a.extend(c, {
                        position: b.css("position"),
                        zIndex: b.css("z-index")
                    }), a.each(["top", "left", "bottom", "right"], function (a, d) {
                        c[d] = b.css(d), isNaN(parseInt(c[d], 10)) && (c[d] = "auto")
                    }), b.css({
                        position: "relative",
                        top: 0,
                        left: 0,
                        right: "auto",
                        bottom: "auto"
                    })), b.css(e), d.css(c).show()
                }, removeWrapper: function (b) {
                    var c = document.activeElement;
                    return b.parent().is(".ui-effects-wrapper") && (b.parent().replaceWith(b), (b[0] === c || a.contains(b[0], c)) && a(c).focus()), b
                }, setTransition: function (b, c, d, e) {
                    return e = e || {}, a.each(c, function (a, c) {
                        var f = b.cssUnit(c);
                        f[0] > 0 && (e[c] = f[0] * d + f[1])
                    }), e
                }
            }), a.fn.extend({
                effect: function () {
                    function b(b) {
                        function c() {
                            a.isFunction(f) && f.call(e[0]), a.isFunction(b) && b()
                        }

                        var e = a(this), f = d.complete, g = d.mode;
                        (e.is(":hidden") ? "hide" === g : "show" === g) ? c() : h.call(e[0], d, c)
                    }

                    var d = e.apply(this, arguments), f = d.mode, g = d.queue, h = a.effects.effect[d.effect], i = !h && c && a.effects[d.effect];
                    return a.fx.off || !h && !i ? f ? this[f](d.duration, d.complete) : this.each(function () {
                        d.complete && d.complete.call(this)
                    }) : h ? g === !1 ? this.each(b) : this.queue(g || "fx", b) : i.call(this, {
                        options: d,
                        duration: d.duration,
                        callback: d.complete,
                        mode: d.mode
                    })
                }, _show: a.fn.show, show: function (a) {
                    if (f(a))return this._show.apply(this, arguments);
                    var b = e.apply(this, arguments);
                    return b.mode = "show", this.effect.call(this, b)
                }, _hide: a.fn.hide, hide: function (a) {
                    if (f(a))return this._hide.apply(this, arguments);
                    var b = e.apply(this, arguments);
                    return b.mode = "hide", this.effect.call(this, b)
                }, __toggle: a.fn.toggle, toggle: function (b) {
                    if (f(b) || "boolean" == typeof b || a.isFunction(b))return this.__toggle.apply(this, arguments);
                    var c = e.apply(this, arguments);
                    return c.mode = "toggle", this.effect.call(this, c)
                }, cssUnit: function (b) {
                    var c = this.css(b), d = [];
                    return a.each(["em", "px", "%", "pt"], function (a, b) {
                        c.indexOf(b) > 0 && (d = [parseFloat(c), b])
                    }), d
                }
            })
        }(), function () {
            var b = {};
            a.each(["Quad", "Cubic", "Quart", "Quint", "Expo"], function (a, c) {
                b[c] = function (b) {
                    return Math.pow(b, a + 2)
                }
            }), a.extend(b, {
                Sine: function (a) {
                    return 1 - Math.cos(a * Math.PI / 2)
                }, Circ: function (a) {
                    return 1 - Math.sqrt(1 - a * a)
                }, Elastic: function (a) {
                    return 0 === a || 1 === a ? a : -Math.pow(2, 8 * (a - 1)) * Math.sin((80 * (a - 1) - 7.5) * Math.PI / 15)
                }, Back: function (a) {
                    return a * a * (3 * a - 2)
                }, Bounce: function (a) {
                    for (var b, c = 4; a < ((b = Math.pow(2, --c)) - 1) / 11;);
                    return 1 / Math.pow(4, 3 - c) - 7.5625 * Math.pow((3 * b - 2) / 22 - a, 2)
                }
            }), a.each(b, function (b, c) {
                a.easing["easeIn" + b] = c, a.easing["easeOut" + b] = function (a) {
                    return 1 - c(1 - a)
                }, a.easing["easeInOut" + b] = function (a) {
                    return .5 > a ? c(2 * a) / 2 : 1 - c(-2 * a + 2) / 2
                }
            })
        }()
    }(jQuery), function (a, b) {
        var c = 0, d = {}, e = {};
        d.height = d.paddingTop = d.paddingBottom = d.borderTopWidth = d.borderBottomWidth = "hide", e.height = e.paddingTop = e.paddingBottom = e.borderTopWidth = e.borderBottomWidth = "show", a.widget("ui.accordion", {
            version: "1.9.2",
            options: {
                active: 0,
                animate: {},
                collapsible: !1,
                event: "click",
                header: "> li > :first-child,> :not(li):even",
                heightStyle: "auto",
                icons: {activeHeader: "ui-icon-triangle-1-s", header: "ui-icon-triangle-1-e"},
                activate: null,
                beforeActivate: null
            },
            _create: function () {
                var b = this.accordionId = "ui-accordion-" + (this.element.attr("id") || ++c), d = this.options;
                this.prevShow = this.prevHide = a(), this.element.addClass("ui-accordion ui-widget ui-helper-reset"), this.headers = this.element.find(d.header).addClass("ui-accordion-header ui-helper-reset ui-state-default ui-corner-all"), this._hoverable(this.headers), this._focusable(this.headers), this.headers.next().addClass("ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom").hide(), d.collapsible || d.active !== !1 && null != d.active || (d.active = 0), d.active < 0 && (d.active += this.headers.length), this.active = this._findActive(d.active).addClass("ui-accordion-header-active ui-state-active").toggleClass("ui-corner-all ui-corner-top"), this.active.next().addClass("ui-accordion-content-active").show(), this._createIcons(), this.refresh(), this.element.attr("role", "tablist"), this.headers.attr("role", "tab").each(function (c) {
                    var d = a(this), e = d.attr("id"), f = d.next(), g = f.attr("id");
                    e || (e = b + "-header-" + c, d.attr("id", e)), g || (g = b + "-panel-" + c, f.attr("id", g)), d.attr("aria-controls", g), f.attr("aria-labelledby", e)
                }).next().attr("role", "tabpanel"), this.headers.not(this.active).attr({
                    "aria-selected": "false",
                    tabIndex: -1
                }).next().attr({
                    "aria-expanded": "false",
                    "aria-hidden": "true"
                }).hide(), this.active.length ? this.active.attr({
                    "aria-selected": "true",
                    tabIndex: 0
                }).next().attr({
                    "aria-expanded": "true",
                    "aria-hidden": "false"
                }) : this.headers.eq(0).attr("tabIndex", 0), this._on(this.headers, {keydown: "_keydown"}), this._on(this.headers.next(), {keydown: "_panelKeyDown"}), this._setupEvents(d.event)
            },
            _getCreateEventData: function () {
                return {header: this.active, content: this.active.length ? this.active.next() : a()}
            },
            _createIcons: function () {
                var b = this.options.icons;
                b && (a("<span>").addClass("ui-accordion-header-icon ui-icon " + b.header).prependTo(this.headers), this.active.children(".ui-accordion-header-icon").removeClass(b.header).addClass(b.activeHeader), this.headers.addClass("ui-accordion-icons"))
            },
            _destroyIcons: function () {
                this.headers.removeClass("ui-accordion-icons").children(".ui-accordion-header-icon").remove()
            },
            _destroy: function () {
                var a;
                this.element.removeClass("ui-accordion ui-widget ui-helper-reset").removeAttr("role"), this.headers.removeClass("ui-accordion-header ui-accordion-header-active ui-helper-reset ui-state-default ui-corner-all ui-state-active ui-state-disabled ui-corner-top").removeAttr("role").removeAttr("aria-selected").removeAttr("aria-controls").removeAttr("tabIndex").each(function () {
                    /^ui-accordion/.test(this.id) && this.removeAttribute("id")
                }), this._destroyIcons(), a = this.headers.next().css("display", "").removeAttr("role").removeAttr("aria-expanded").removeAttr("aria-hidden").removeAttr("aria-labelledby").removeClass("ui-helper-reset ui-widget-content ui-corner-bottom ui-accordion-content ui-accordion-content-active ui-state-disabled").each(function () {
                    /^ui-accordion/.test(this.id) && this.removeAttribute("id")
                }), "content" !== this.options.heightStyle && a.css("height", "")
            },
            _setOption: function (a, b) {
                return "active" === a ? void this._activate(b) : ("event" === a && (this.options.event && this._off(this.headers, this.options.event), this._setupEvents(b)), this._super(a, b), "collapsible" !== a || b || this.options.active !== !1 || this._activate(0), "icons" === a && (this._destroyIcons(), b && this._createIcons()), void("disabled" === a && this.headers.add(this.headers.next()).toggleClass("ui-state-disabled", !!b)))
            },
            _keydown: function (b) {
                if (!b.altKey && !b.ctrlKey) {
                    var c = a.ui.keyCode, d = this.headers.length, e = this.headers.index(b.target), f = !1;
                    switch (b.keyCode) {
                        case c.RIGHT:
                        case c.DOWN:
                            f = this.headers[(e + 1) % d];
                            break;
                        case c.LEFT:
                        case c.UP:
                            f = this.headers[(e - 1 + d) % d];
                            break;
                        case c.SPACE:
                        case c.ENTER:
                            this._eventHandler(b);
                            break;
                        case c.HOME:
                            f = this.headers[0];
                            break;
                        case c.END:
                            f = this.headers[d - 1]
                    }
                    f && (a(b.target).attr("tabIndex", -1), a(f).attr("tabIndex", 0), f.focus(), b.preventDefault())
                }
            },
            _panelKeyDown: function (b) {
                b.keyCode === a.ui.keyCode.UP && b.ctrlKey && a(b.currentTarget).prev().focus()
            },
            refresh: function () {
                var b, c, d = this.options.heightStyle, e = this.element.parent();
                "fill" === d ? (a.support.minHeight || (c = e.css("overflow"), e.css("overflow", "hidden")), b = e.height(), this.element.siblings(":visible").each(function () {
                    var c = a(this), d = c.css("position");
                    "absolute" !== d && "fixed" !== d && (b -= c.outerHeight(!0))
                }), c && e.css("overflow", c), this.headers.each(function () {
                    b -= a(this).outerHeight(!0)
                }), this.headers.next().each(function () {
                    a(this).height(Math.max(0, b - a(this).innerHeight() + a(this).height()))
                }).css("overflow", "auto")) : "auto" === d && (b = 0, this.headers.next().each(function () {
                    b = Math.max(b, a(this).css("height", "").height())
                }).height(b))
            },
            _activate: function (b) {
                var c = this._findActive(b)[0];
                c !== this.active[0] && (c = c || this.active[0], this._eventHandler({
                    target: c,
                    currentTarget: c,
                    preventDefault: a.noop
                }))
            },
            _findActive: function (b) {
                return "number" == typeof b ? this.headers.eq(b) : a()
            },
            _setupEvents: function (b) {
                var c = {};
                b && (a.each(b.split(" "), function (a, b) {
                    c[b] = "_eventHandler"
                }), this._on(this.headers, c))
            },
            _eventHandler: function (b) {
                var c = this.options, d = this.active, e = a(b.currentTarget), f = e[0] === d[0], g = f && c.collapsible, h = g ? a() : e.next(), i = d.next(), j = {
                    oldHeader: d,
                    oldPanel: i,
                    newHeader: g ? a() : e,
                    newPanel: h
                };
                b.preventDefault(), f && !c.collapsible || this._trigger("beforeActivate", b, j) === !1 || (c.active = g ? !1 : this.headers.index(e), this.active = f ? a() : e, this._toggle(j), d.removeClass("ui-accordion-header-active ui-state-active"), c.icons && d.children(".ui-accordion-header-icon").removeClass(c.icons.activeHeader).addClass(c.icons.header), f || (e.removeClass("ui-corner-all").addClass("ui-accordion-header-active ui-state-active ui-corner-top"), c.icons && e.children(".ui-accordion-header-icon").removeClass(c.icons.header).addClass(c.icons.activeHeader), e.next().addClass("ui-accordion-content-active")))
            },
            _toggle: function (b) {
                var c = b.newPanel, d = this.prevShow.length ? this.prevShow : b.oldPanel;
                this.prevShow.add(this.prevHide).stop(!0, !0), this.prevShow = c, this.prevHide = d, this.options.animate ? this._animate(c, d, b) : (d.hide(), c.show(), this._toggleComplete(b)), d.attr({
                    "aria-expanded": "false",
                    "aria-hidden": "true"
                }), d.prev().attr("aria-selected", "false"), c.length && d.length ? d.prev().attr("tabIndex", -1) : c.length && this.headers.filter(function () {
                    return 0 === a(this).attr("tabIndex")
                }).attr("tabIndex", -1), c.attr({
                    "aria-expanded": "true",
                    "aria-hidden": "false"
                }).prev().attr({"aria-selected": "true", tabIndex: 0})
            },
            _animate: function (a, b, c) {
                var f, g, h, i = this, j = 0, k = a.length && (!b.length || a.index() < b.index()), l = this.options.animate || {}, m = k && l.down || l, n = function () {
                    i._toggleComplete(c)
                };
                return "number" == typeof m && (h = m), "string" == typeof m && (g = m), g = g || m.easing || l.easing, h = h || m.duration || l.duration, b.length ? a.length ? (f = a.show().outerHeight(), b.animate(d, {
                    duration: h,
                    easing: g,
                    step: function (a, b) {
                        b.now = Math.round(a)
                    }
                }), void a.hide().animate(e, {
                    duration: h, easing: g, complete: n, step: function (a, c) {
                        c.now = Math.round(a), "height" !== c.prop ? j += c.now : "content" !== i.options.heightStyle && (c.now = Math.round(f - b.outerHeight() - j), j = 0)
                    }
                })) : b.animate(d, h, g, n) : a.animate(e, h, g, n)
            },
            _toggleComplete: function (a) {
                var b = a.oldPanel;
                b.removeClass("ui-accordion-content-active").prev().removeClass("ui-corner-top").addClass("ui-corner-all"), b.length && (b.parent()[0].className = b.parent()[0].className), this._trigger("activate", null, a)
            }
        }), a.uiBackCompat !== !1 && (!function (a, b) {
            a.extend(b.options, {
                navigation: !1, navigationFilter: function () {
                    return this.href.toLowerCase() === location.href.toLowerCase()
                }
            });
            var c = b._create;
            b._create = function () {
                if (this.options.navigation) {
                    var b = this, d = this.element.find(this.options.header), e = d.next(), f = d.add(e).find("a").filter(this.options.navigationFilter)[0];
                    f && d.add(e).each(function (c) {
                        return a.contains(this, f) ? (b.options.active = Math.floor(c / 2), !1) : void 0
                    })
                }
                c.call(this)
            }
        }(jQuery, jQuery.ui.accordion.prototype), function (a, b) {
            a.extend(b.options, {heightStyle: null, autoHeight: !0, clearStyle: !1, fillSpace: !1});
            var c = b._create, d = b._setOption;
            a.extend(b, {
                _create: function () {
                    this.options.heightStyle = this.options.heightStyle || this._mergeHeightStyle(), c.call(this)
                }, _setOption: function (a) {
                    ("autoHeight" === a || "clearStyle" === a || "fillSpace" === a) && (this.options.heightStyle = this._mergeHeightStyle()), d.apply(this, arguments)
                }, _mergeHeightStyle: function () {
                    var a = this.options;
                    return a.fillSpace ? "fill" : a.clearStyle ? "content" : a.autoHeight ? "auto" : void 0
                }
            })
        }(jQuery, jQuery.ui.accordion.prototype), function (a, b) {
            a.extend(b.options.icons, {activeHeader: null, headerSelected: "ui-icon-triangle-1-s"});
            var c = b._createIcons;
            b._createIcons = function () {
                this.options.icons && (this.options.icons.activeHeader = this.options.icons.activeHeader || this.options.icons.headerSelected), c.call(this)
            }
        }(jQuery, jQuery.ui.accordion.prototype), function (a, b) {
            b.activate = b._activate;
            var c = b._findActive;
            b._findActive = function (a) {
                return -1 === a && (a = !1), a && "number" != typeof a && (a = this.headers.index(this.headers.filter(a)), -1 === a && (a = !1)), c.call(this, a)
            }
        }(jQuery, jQuery.ui.accordion.prototype), jQuery.ui.accordion.prototype.resize = jQuery.ui.accordion.prototype.refresh, function (a, b) {
            a.extend(b.options, {change: null, changestart: null});
            var c = b._trigger;
            b._trigger = function (a, b, d) {
                var e = c.apply(this, arguments);
                return e ? ("beforeActivate" === a ? e = c.call(this, "changestart", b, {
                    oldHeader: d.oldHeader,
                    oldContent: d.oldPanel,
                    newHeader: d.newHeader,
                    newContent: d.newPanel
                }) : "activate" === a && (e = c.call(this, "change", b, {
                    oldHeader: d.oldHeader,
                    oldContent: d.oldPanel,
                    newHeader: d.newHeader,
                    newContent: d.newPanel
                })), e) : !1
            }
        }(jQuery, jQuery.ui.accordion.prototype), function (a, b) {
            a.extend(b.options, {animate: null, animated: "slide"});
            var c = b._create;
            b._create = function () {
                var a = this.options;
                null === a.animate && (a.animated ? "slide" === a.animated ? a.animate = 300 : "bounceslide" === a.animated ? a.animate = {
                    duration: 200,
                    down: {easing: "easeOutBounce", duration: 1e3}
                } : a.animate = a.animated : a.animate = !1), c.call(this)
            }
        }(jQuery, jQuery.ui.accordion.prototype))
    }(jQuery), function (a, b) {
        var c = 0;
        a.widget("ui.autocomplete", {
            version: "1.9.2",
            defaultElement: "<input>",
            options: {
                appendTo: "body",
                autoFocus: !1,
                delay: 300,
                minLength: 1,
                position: {my: "left top", at: "left bottom", collision: "none"},
                source: null,
                change: null,
                close: null,
                focus: null,
                open: null,
                response: null,
                search: null,
                select: null
            },
            pending: 0,
            _create: function () {
                var b, c, d;
                this.isMultiLine = this._isMultiLine(), this.valueMethod = this.element[this.element.is("input,textarea") ? "val" : "text"], this.isNewMenu = !0, this.element.addClass("ui-autocomplete-input").attr("autocomplete", "off"), this._on(this.element, {
                    keydown: function (e) {
                        if (this.element.prop("readOnly"))return b = !0, d = !0, void(c = !0);
                        b = !1, d = !1, c = !1;
                        var f = a.ui.keyCode;
                        switch (e.keyCode) {
                            case f.PAGE_UP:
                                b = !0, this._move("previousPage", e);
                                break;
                            case f.PAGE_DOWN:
                                b = !0, this._move("nextPage", e);
                                break;
                            case f.UP:
                                b = !0, this._keyEvent("previous", e);
                                break;
                            case f.DOWN:
                                b = !0, this._keyEvent("next", e);
                                break;
                            case f.ENTER:
                            case f.NUMPAD_ENTER:
                                this.menu.active && (b = !0, e.preventDefault(), this.menu.select(e));
                                break;
                            case f.TAB:
                                this.menu.active && this.menu.select(e);
                                break;
                            case f.ESCAPE:
                                this.menu.element.is(":visible") && (this._value(this.term), this.close(e), e.preventDefault());
                                break;
                            default:
                                c = !0, this._searchTimeout(e)
                        }
                    }, keypress: function (d) {
                        if (b)return b = !1, void d.preventDefault();
                        if (!c) {
                            var e = a.ui.keyCode;
                            switch (d.keyCode) {
                                case e.PAGE_UP:
                                    this._move("previousPage", d);
                                    break;
                                case e.PAGE_DOWN:
                                    this._move("nextPage", d);
                                    break;
                                case e.UP:
                                    this._keyEvent("previous", d);
                                    break;
                                case e.DOWN:
                                    this._keyEvent("next", d)
                            }
                        }
                    }, input: function (a) {
                        return d ? (d = !1, void a.preventDefault()) : void this._searchTimeout(a)
                    }, focus: function () {
                        this.selectedItem = null, this.previous = this._value()
                    }, blur: function (a) {
                        return this.cancelBlur ? void delete this.cancelBlur : (clearTimeout(this.searching), this.close(a), void this._change(a))
                    }
                }), this._initSource(), this.menu = a("<ul>").addClass("ui-autocomplete").appendTo(this.document.find(this.options.appendTo || "body")[0]).menu({
                    input: a(),
                    role: null
                }).zIndex(this.element.zIndex() + 1).hide().data("menu"), this._on(this.menu.element, {
                    mousedown: function (b) {
                        b.preventDefault(), this.cancelBlur = !0, this._delay(function () {
                            delete this.cancelBlur
                        });
                        var c = this.menu.element[0];
                        a(b.target).closest(".ui-menu-item").length || this._delay(function () {
                            var b = this;
                            this.document.one("mousedown", function (d) {
                                d.target === b.element[0] || d.target === c || a.contains(c, d.target) || b.close()
                            })
                        })
                    }, menufocus: function (b, c) {
                        if (this.isNewMenu && (this.isNewMenu = !1, b.originalEvent && /^mouse/.test(b.originalEvent.type)))return this.menu.blur(), void this.document.one("mousemove", function () {
                            a(b.target).trigger(b.originalEvent)
                        });
                        var d = c.item.data("ui-autocomplete-item") || c.item.data("item.autocomplete");
                        !1 !== this._trigger("focus", b, {item: d}) ? b.originalEvent && /^key/.test(b.originalEvent.type) && this._value(d.value) : this.liveRegion.text(d.value)
                    }, menuselect: function (a, b) {
                        var c = b.item.data("ui-autocomplete-item") || b.item.data("item.autocomplete"), d = this.previous;
                        this.element[0] !== this.document[0].activeElement && (this.element.focus(), this.previous = d, this._delay(function () {
                            this.previous = d, this.selectedItem = c
                        })), !1 !== this._trigger("select", a, {item: c}) && this._value(c.value), this.term = this._value(), this.close(a), this.selectedItem = c
                    }
                }), this.liveRegion = a("<span>", {
                    role: "status",
                    "aria-live": "polite"
                }).addClass("ui-helper-hidden-accessible").insertAfter(this.element), a.fn.bgiframe && this.menu.element.bgiframe(), this._on(this.window, {
                    beforeunload: function () {
                        this.element.removeAttr("autocomplete")
                    }
                })
            },
            _destroy: function () {
                clearTimeout(this.searching), this.element.removeClass("ui-autocomplete-input").removeAttr("autocomplete"), this.menu.element.remove(), this.liveRegion.remove()
            },
            _setOption: function (a, b) {
                this._super(a, b), "source" === a && this._initSource(), "appendTo" === a && this.menu.element.appendTo(this.document.find(b || "body")[0]), "disabled" === a && b && this.xhr && this.xhr.abort()
            },
            _isMultiLine: function () {
                return this.element.is("textarea") ? !0 : this.element.is("input") ? !1 : this.element.prop("isContentEditable")
            },
            _initSource: function () {
                var b, c, d = this;
                a.isArray(this.options.source) ? (b = this.options.source, this.source = function (c, d) {
                    d(a.ui.autocomplete.filter(b, c.term))
                }) : "string" == typeof this.options.source ? (c = this.options.source, this.source = function (b, e) {
                    d.xhr && d.xhr.abort(), d.xhr = a.ajax({
                        url: c, data: b, dataType: "json", success: function (a) {
                            e(a)
                        }, error: function () {
                            e([])
                        }
                    })
                }) : this.source = this.options.source
            },
            _searchTimeout: function (a) {
                clearTimeout(this.searching), this.searching = this._delay(function () {
                    this.term !== this._value() && (this.selectedItem = null, this.search(null, a))
                }, this.options.delay)
            },
            search: function (a, b) {
                return a = null != a ? a : this._value(), this.term = this._value(), a.length < this.options.minLength ? this.close(b) : this._trigger("search", b) !== !1 ? this._search(a) : void 0
            },
            _search: function (a) {
                this.pending++, this.element.addClass("ui-autocomplete-loading"), this.cancelSearch = !1, this.source({term: a}, this._response())
            },
            _response: function () {
                var a = this, b = ++c;
                return function (d) {
                    b === c && a.__response(d), a.pending--, a.pending || a.element.removeClass("ui-autocomplete-loading")
                }
            },
            __response: function (a) {
                a && (a = this._normalize(a)), this._trigger("response", null, {content: a}), !this.options.disabled && a && a.length && !this.cancelSearch ? (this._suggest(a), this._trigger("open")) : this._close()
            },
            close: function (a) {
                this.cancelSearch = !0, this._close(a)
            },
            _close: function (a) {
                this.menu.element.is(":visible") && (this.menu.element.hide(), this.menu.blur(), this.isNewMenu = !0, this._trigger("close", a))
            },
            _change: function (a) {
                this.previous !== this._value() && this._trigger("change", a, {item: this.selectedItem})
            },
            _normalize: function (b) {
                return b.length && b[0].label && b[0].value ? b : a.map(b, function (b) {
                    return "string" == typeof b ? {label: b, value: b} : a.extend({
                        label: b.label || b.value,
                        value: b.value || b.label
                    }, b)
                })
            },
            _suggest: function (b) {
                var c = this.menu.element.empty().zIndex(this.element.zIndex() + 1);
                this._renderMenu(c, b), this.menu.refresh(), c.show(), this._resizeMenu(), c.position(a.extend({of: this.element}, this.options.position)), this.options.autoFocus && this.menu.next()
            },
            _resizeMenu: function () {
                var a = this.menu.element;
                a.outerWidth(Math.max(a.width("").outerWidth() + 1, this.element.outerWidth()))
            },
            _renderMenu: function (b, c) {
                var d = this;
                a.each(c, function (a, c) {
                    d._renderItemData(b, c)
                })
            },
            _renderItemData: function (a, b) {
                return this._renderItem(a, b).data("ui-autocomplete-item", b)
            },
            _renderItem: function (b, c) {
                return a("<li>").append(a("<a>").text(c.label)).appendTo(b)
            },
            _move: function (a, b) {
                return this.menu.element.is(":visible") ? this.menu.isFirstItem() && /^previous/.test(a) || this.menu.isLastItem() && /^next/.test(a) ? (this._value(this.term), void this.menu.blur()) : void this.menu[a](b) : void this.search(null, b)
            },
            widget: function () {
                return this.menu.element
            },
            _value: function () {
                return this.valueMethod.apply(this.element, arguments)
            },
            _keyEvent: function (a, b) {
                (!this.isMultiLine || this.menu.element.is(":visible")) && (this._move(a, b), b.preventDefault())
            }
        }), a.extend(a.ui.autocomplete, {
            escapeRegex: function (a) {
                return a.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&")
            }, filter: function (b, c) {
                var d = new RegExp(a.ui.autocomplete.escapeRegex(c), "i");
                return a.grep(b, function (a) {
                    return d.test(a.label || a.value || a)
                })
            }
        }), a.widget("ui.autocomplete", a.ui.autocomplete, {
            options: {
                messages: {
                    noResults: "No search results.",
                    results: function (a) {
                        return a + (a > 1 ? " results are" : " result is") + " available, use up and down arrow keys to navigate."
                    }
                }
            }, __response: function (a) {
                var b;
                this._superApply(arguments), this.options.disabled || this.cancelSearch || (b = a && a.length ? this.options.messages.results(a.length) : this.options.messages.noResults, this.liveRegion.text(b))
            }
        })
    }(jQuery), function (a, b) {
        var c, d, e, f, g = "ui-button ui-widget ui-state-default ui-corner-all", h = "ui-state-hover ui-state-active ", i = "ui-button-icons-only ui-button-icon-only ui-button-text-icons ui-button-text-icon-primary ui-button-text-icon-secondary ui-button-text-only", j = function () {
            var b = a(this).find(":ui-button");
            setTimeout(function () {
                b.button("refresh")
            }, 1)
        }, k = function (b) {
            var c = b.name, d = b.form, e = a([]);
            return c && (e = d ? a(d).find("[name='" + c + "']") : a("[name='" + c + "']", b.ownerDocument).filter(function () {
                return !this.form
            })), e
        };
        a.widget("ui.button", {
            version: "1.9.2",
            defaultElement: "<button>",
            options: {disabled: null, text: !0, label: null, icons: {primary: null, secondary: null}},
            _create: function () {
                this.element.closest("form").unbind("reset" + this.eventNamespace).bind("reset" + this.eventNamespace, j), "boolean" != typeof this.options.disabled ? this.options.disabled = !!this.element.prop("disabled") : this.element.prop("disabled", this.options.disabled), this._determineButtonType(), this.hasTitle = !!this.buttonElement.attr("title");
                var b = this, h = this.options, i = "checkbox" === this.type || "radio" === this.type, l = i ? "" : "ui-state-active", m = "ui-state-focus";
                null === h.label && (h.label = "input" === this.type ? this.buttonElement.val() : this.buttonElement.html()), this._hoverable(this.buttonElement), this.buttonElement.addClass(g).attr("role", "button").bind("mouseenter" + this.eventNamespace, function () {
                    h.disabled || this === c && a(this).addClass("ui-state-active")
                }).bind("mouseleave" + this.eventNamespace, function () {
                    h.disabled || a(this).removeClass(l)
                }).bind("click" + this.eventNamespace, function (a) {
                    h.disabled && (a.preventDefault(), a.stopImmediatePropagation())
                }), this.element.bind("focus" + this.eventNamespace, function () {
                    b.buttonElement.addClass(m)
                }).bind("blur" + this.eventNamespace, function () {
                    b.buttonElement.removeClass(m)
                }), i && (this.element.bind("change" + this.eventNamespace, function () {
                    f || b.refresh()
                }), this.buttonElement.bind("mousedown" + this.eventNamespace, function (a) {
                    h.disabled || (f = !1, d = a.pageX, e = a.pageY)
                }).bind("mouseup" + this.eventNamespace, function (a) {
                    h.disabled || (d !== a.pageX || e !== a.pageY) && (f = !0)
                })), "checkbox" === this.type ? this.buttonElement.bind("click" + this.eventNamespace, function () {
                    return h.disabled || f ? !1 : (a(this).toggleClass("ui-state-active"), void b.buttonElement.attr("aria-pressed", b.element[0].checked))
                }) : "radio" === this.type ? this.buttonElement.bind("click" + this.eventNamespace, function () {
                    if (h.disabled || f)return !1;
                    a(this).addClass("ui-state-active"), b.buttonElement.attr("aria-pressed", "true");
                    var c = b.element[0];
                    k(c).not(c).map(function () {
                        return a(this).button("widget")[0]
                    }).removeClass("ui-state-active").attr("aria-pressed", "false")
                }) : (this.buttonElement.bind("mousedown" + this.eventNamespace, function () {
                    return h.disabled ? !1 : (a(this).addClass("ui-state-active"), c = this, void b.document.one("mouseup", function () {
                        c = null
                    }))
                }).bind("mouseup" + this.eventNamespace, function () {
                    return h.disabled ? !1 : void a(this).removeClass("ui-state-active")
                }).bind("keydown" + this.eventNamespace, function (b) {
                    return h.disabled ? !1 : void((b.keyCode === a.ui.keyCode.SPACE || b.keyCode === a.ui.keyCode.ENTER) && a(this).addClass("ui-state-active"))
                }).bind("keyup" + this.eventNamespace, function () {
                    a(this).removeClass("ui-state-active")
                }), this.buttonElement.is("a") && this.buttonElement.keyup(function (b) {
                    b.keyCode === a.ui.keyCode.SPACE && a(this).click()
                })), this._setOption("disabled", h.disabled), this._resetButton()
            },
            _determineButtonType: function () {
                var a, b, c;
                this.element.is("[type=checkbox]") ? this.type = "checkbox" : this.element.is("[type=radio]") ? this.type = "radio" : this.element.is("input") ? this.type = "input" : this.type = "button", "checkbox" === this.type || "radio" === this.type ? (a = this.element.parents().last(), b = "label[for='" + this.element.attr("id") + "']", this.buttonElement = a.find(b), this.buttonElement.length || (a = a.length ? a.siblings() : this.element.siblings(), this.buttonElement = a.filter(b), this.buttonElement.length || (this.buttonElement = a.find(b))), this.element.addClass("ui-helper-hidden-accessible"), c = this.element.is(":checked"), c && this.buttonElement.addClass("ui-state-active"), this.buttonElement.prop("aria-pressed", c)) : this.buttonElement = this.element
            },
            widget: function () {
                return this.buttonElement
            },
            _destroy: function () {
                this.element.removeClass("ui-helper-hidden-accessible"), this.buttonElement.removeClass(g + " " + h + " " + i).removeAttr("role").removeAttr("aria-pressed").html(this.buttonElement.find(".ui-button-text").html()), this.hasTitle || this.buttonElement.removeAttr("title")
            },
            _setOption: function (a, b) {
                return this._super(a, b), "disabled" === a ? void(b ? this.element.prop("disabled", !0) : this.element.prop("disabled", !1)) : void this._resetButton()
            },
            refresh: function () {
                var b = this.element.is("input, button") ? this.element.is(":disabled") : this.element.hasClass("ui-button-disabled");
                b !== this.options.disabled && this._setOption("disabled", b), "radio" === this.type ? k(this.element[0]).each(function () {
                    a(this).is(":checked") ? a(this).button("widget").addClass("ui-state-active").attr("aria-pressed", "true") : a(this).button("widget").removeClass("ui-state-active").attr("aria-pressed", "false")
                }) : "checkbox" === this.type && (this.element.is(":checked") ? this.buttonElement.addClass("ui-state-active").attr("aria-pressed", "true") : this.buttonElement.removeClass("ui-state-active").attr("aria-pressed", "false"))
            },
            _resetButton: function () {
                if ("input" === this.type)return void(this.options.label && this.element.val(this.options.label));
                var b = this.buttonElement.removeClass(i), c = a("<span></span>", this.document[0]).addClass("ui-button-text").html(this.options.label).appendTo(b.empty()).text(), d = this.options.icons, e = d.primary && d.secondary, f = [];
                d.primary || d.secondary ? (this.options.text && f.push("ui-button-text-icon" + (e ? "s" : d.primary ? "-primary" : "-secondary")), d.primary && b.prepend("<span class='ui-button-icon-primary ui-icon " + d.primary + "'></span>"), d.secondary && b.append("<span class='ui-button-icon-secondary ui-icon " + d.secondary + "'></span>"), this.options.text || (f.push(e ? "ui-button-icons-only" : "ui-button-icon-only"), this.hasTitle || b.attr("title", a.trim(c)))) : f.push("ui-button-text-only"), b.addClass(f.join(" "))
            }
        }), a.widget("ui.buttonset", {
            version: "1.9.2",
            options: {items: "button, input[type=button], input[type=submit], input[type=reset], input[type=checkbox], input[type=radio], a, :data(button)"},
            _create: function () {
                this.element.addClass("ui-buttonset")
            },
            _init: function () {
                this.refresh()
            },
            _setOption: function (a, b) {
                "disabled" === a && this.buttons.button("option", a, b), this._super(a, b)
            },
            refresh: function () {
                var b = "rtl" === this.element.css("direction");
                this.buttons = this.element.find(this.options.items).filter(":ui-button").button("refresh").end().not(":ui-button").button().end().map(function () {
                    return a(this).button("widget")[0]
                }).removeClass("ui-corner-all ui-corner-left ui-corner-right").filter(":first").addClass(b ? "ui-corner-right" : "ui-corner-left").end().filter(":last").addClass(b ? "ui-corner-left" : "ui-corner-right").end().end()
            },
            _destroy: function () {
                this.element.removeClass("ui-buttonset"), this.buttons.map(function () {
                    return a(this).button("widget")[0]
                }).removeClass("ui-corner-left ui-corner-right").end().button("destroy")
            }
        })
    }(jQuery), function ($, undefined) {
        function Datepicker() {
            this.debug = !1, this._curInst = null, this._keyEvent = !1, this._disabledInputs = [], this._datepickerShowing = !1, this._inDialog = !1, this._mainDivId = "ui-datepicker-div", this._inlineClass = "ui-datepicker-inline", this._appendClass = "ui-datepicker-append", this._triggerClass = "ui-datepicker-trigger", this._dialogClass = "ui-datepicker-dialog", this._disableClass = "ui-datepicker-disabled", this._unselectableClass = "ui-datepicker-unselectable", this._currentClass = "ui-datepicker-current-day", this._dayOverClass = "ui-datepicker-days-cell-over", this.regional = [], this.regional[""] = {
                closeText: "Done",
                prevText: "Prev",
                nextText: "Next",
                currentText: "Today",
                monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
                monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                dayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
                dayNamesMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
                weekHeader: "Wk",
                dateFormat: "mm/dd/yy",
                firstDay: 0,
                isRTL: !1,
                showMonthAfterYear: !1,
                yearSuffix: ""
            }, this._defaults = {
                showOn: "focus",
                showAnim: "fadeIn",
                showOptions: {},
                defaultDate: null,
                appendText: "",
                buttonText: "...",
                buttonImage: "",
                buttonImageOnly: !1,
                hideIfNoPrevNext: !1,
                navigationAsDateFormat: !1,
                gotoCurrent: !1,
                changeMonth: !1,
                changeYear: !1,
                yearRange: "c-10:c+10",
                showOtherMonths: !1,
                selectOtherMonths: !1,
                showWeek: !1,
                calculateWeek: this.iso8601Week,
                shortYearCutoff: "+10",
                minDate: null,
                maxDate: null,
                duration: "fast",
                beforeShowDay: null,
                beforeShow: null,
                onSelect: null,
                onChangeMonthYear: null,
                onClose: null,
                numberOfMonths: 1,
                showCurrentAtPos: 0,
                stepMonths: 1,
                stepBigMonths: 12,
                altField: "",
                altFormat: "",
                constrainInput: !0,
                showButtonPanel: !1,
                autoSize: !1,
                disabled: !1
            }, $.extend(this._defaults, this.regional[""]), this.dpDiv = bindHover($('<div id="' + this._mainDivId + '" class="ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all"></div>'))
        }

        function bindHover(a) {
            var b = "button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a";
            return a.delegate(b, "mouseout", function () {
                $(this).removeClass("ui-state-hover"), -1 != this.className.indexOf("ui-datepicker-prev") && $(this).removeClass("ui-datepicker-prev-hover"),
                -1 != this.className.indexOf("ui-datepicker-next") && $(this).removeClass("ui-datepicker-next-hover")
            }).delegate(b, "mouseover", function () {
                $.datepicker._isDisabledDatepicker(instActive.inline ? a.parent()[0] : instActive.input[0]) || ($(this).parents(".ui-datepicker-calendar").find("a").removeClass("ui-state-hover"), $(this).addClass("ui-state-hover"), -1 != this.className.indexOf("ui-datepicker-prev") && $(this).addClass("ui-datepicker-prev-hover"), -1 != this.className.indexOf("ui-datepicker-next") && $(this).addClass("ui-datepicker-next-hover"))
            })
        }

        function extendRemove(a, b) {
            $.extend(a, b);
            for (var c in b)(null == b[c] || b[c] == undefined) && (a[c] = b[c]);
            return a
        }

        $.extend($.ui, {datepicker: {version: "1.9.2"}});
        var PROP_NAME = "datepicker", dpuuid = (new Date).getTime(), instActive;
        $.extend(Datepicker.prototype, {
            markerClassName: "hasDatepicker",
            maxRows: 4,
            log: function () {
                this.debug && console.log.apply("", arguments)
            },
            _widgetDatepicker: function () {
                return this.dpDiv
            },
            setDefaults: function (a) {
                return extendRemove(this._defaults, a || {}), this
            },
            _attachDatepicker: function (target, settings) {
                var inlineSettings = null;
                for (var attrName in this._defaults) {
                    var attrValue = target.getAttribute("date:" + attrName);
                    if (attrValue) {
                        inlineSettings = inlineSettings || {};
                        try {
                            inlineSettings[attrName] = eval(attrValue)
                        } catch (err) {
                            inlineSettings[attrName] = attrValue
                        }
                    }
                }
                var nodeName = target.nodeName.toLowerCase(), inline = "div" == nodeName || "span" == nodeName;
                target.id || (this.uuid += 1, target.id = "dp" + this.uuid);
                var inst = this._newInst($(target), inline);
                inst.settings = $.extend({}, settings || {}, inlineSettings || {}), "input" == nodeName ? this._connectDatepicker(target, inst) : inline && this._inlineDatepicker(target, inst)
            },
            _newInst: function (a, b) {
                var c = a[0].id.replace(/([^A-Za-z0-9_-])/g, "\\\\$1");
                return {
                    id: c,
                    input: a,
                    selectedDay: 0,
                    selectedMonth: 0,
                    selectedYear: 0,
                    drawMonth: 0,
                    drawYear: 0,
                    inline: b,
                    dpDiv: b ? bindHover($('<div class="' + this._inlineClass + ' ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all"></div>')) : this.dpDiv
                }
            },
            _connectDatepicker: function (a, b) {
                var c = $(a);
                b.append = $([]), b.trigger = $([]), c.hasClass(this.markerClassName) || (this._attachments(c, b), c.addClass(this.markerClassName).keydown(this._doKeyDown).keypress(this._doKeyPress).keyup(this._doKeyUp).bind("setData.datepicker", function (a, c, d) {
                    b.settings[c] = d
                }).bind("getData.datepicker", function (a, c) {
                    return this._get(b, c)
                }), this._autoSize(b), $.data(a, PROP_NAME, b), b.settings.disabled && this._disableDatepicker(a))
            },
            _attachments: function (a, b) {
                var c = this._get(b, "appendText"), d = this._get(b, "isRTL");
                b.append && b.append.remove(), c && (b.append = $('<span class="' + this._appendClass + '">' + c + "</span>"), a[d ? "before" : "after"](b.append)), a.unbind("focus", this._showDatepicker), b.trigger && b.trigger.remove();
                var e = this._get(b, "showOn");
                if (("focus" == e || "both" == e) && a.focus(this._showDatepicker), "button" == e || "both" == e) {
                    var f = this._get(b, "buttonText"), g = this._get(b, "buttonImage");
                    b.trigger = $(this._get(b, "buttonImageOnly") ? $("<img/>").addClass(this._triggerClass).attr({
                        src: g,
                        alt: f,
                        title: f
                    }) : $('<button type="button"></button>').addClass(this._triggerClass).html("" == g ? f : $("<img/>").attr({
                        src: g,
                        alt: f,
                        title: f
                    }))), a[d ? "before" : "after"](b.trigger), b.trigger.click(function () {
                        return $.datepicker._datepickerShowing && $.datepicker._lastInput == a[0] ? $.datepicker._hideDatepicker() : $.datepicker._datepickerShowing && $.datepicker._lastInput != a[0] ? ($.datepicker._hideDatepicker(), $.datepicker._showDatepicker(a[0])) : $.datepicker._showDatepicker(a[0]), !1
                    })
                }
            },
            _autoSize: function (a) {
                if (this._get(a, "autoSize") && !a.inline) {
                    var b = new Date(2009, 11, 20), c = this._get(a, "dateFormat");
                    if (c.match(/[DM]/)) {
                        var d = function (a) {
                            for (var b = 0, c = 0, d = 0; d < a.length; d++)a[d].length > b && (b = a[d].length, c = d);
                            return c
                        };
                        b.setMonth(d(this._get(a, c.match(/MM/) ? "monthNames" : "monthNamesShort"))), b.setDate(d(this._get(a, c.match(/DD/) ? "dayNames" : "dayNamesShort")) + 20 - b.getDay())
                    }
                    a.input.attr("size", this._formatDate(a, b).length)
                }
            },
            _inlineDatepicker: function (a, b) {
                var c = $(a);
                c.hasClass(this.markerClassName) || (c.addClass(this.markerClassName).append(b.dpDiv).bind("setData.datepicker", function (a, c, d) {
                    b.settings[c] = d
                }).bind("getData.datepicker", function (a, c) {
                    return this._get(b, c)
                }), $.data(a, PROP_NAME, b), this._setDate(b, this._getDefaultDate(b), !0), this._updateDatepicker(b), this._updateAlternate(b), b.settings.disabled && this._disableDatepicker(a), b.dpDiv.css("display", "block"))
            },
            _dialogDatepicker: function (a, b, c, d, e) {
                var f = this._dialogInst;
                if (!f) {
                    this.uuid += 1;
                    var g = "dp" + this.uuid;
                    this._dialogInput = $('<input type="text" id="' + g + '" style="position: absolute; top: -100px; width: 0px;"/>'), this._dialogInput.keydown(this._doKeyDown), $("body").append(this._dialogInput), f = this._dialogInst = this._newInst(this._dialogInput, !1), f.settings = {}, $.data(this._dialogInput[0], PROP_NAME, f)
                }
                if (extendRemove(f.settings, d || {}), b = b && b.constructor == Date ? this._formatDate(f, b) : b, this._dialogInput.val(b), this._pos = e ? e.length ? e : [e.pageX, e.pageY] : null, !this._pos) {
                    var h = document.documentElement.clientWidth, i = document.documentElement.clientHeight, j = document.documentElement.scrollLeft || document.body.scrollLeft, k = document.documentElement.scrollTop || document.body.scrollTop;
                    this._pos = [h / 2 - 100 + j, i / 2 - 150 + k]
                }
                return this._dialogInput.css("left", this._pos[0] + 20 + "px").css("top", this._pos[1] + "px"), f.settings.onSelect = c, this._inDialog = !0, this.dpDiv.addClass(this._dialogClass), this._showDatepicker(this._dialogInput[0]), $.blockUI && $.blockUI(this.dpDiv), $.data(this._dialogInput[0], PROP_NAME, f), this
            },
            _destroyDatepicker: function (a) {
                var b = $(a), c = $.data(a, PROP_NAME);
                if (b.hasClass(this.markerClassName)) {
                    var d = a.nodeName.toLowerCase();
                    $.removeData(a, PROP_NAME), "input" == d ? (c.append.remove(), c.trigger.remove(), b.removeClass(this.markerClassName).unbind("focus", this._showDatepicker).unbind("keydown", this._doKeyDown).unbind("keypress", this._doKeyPress).unbind("keyup", this._doKeyUp)) : ("div" == d || "span" == d) && b.removeClass(this.markerClassName).empty()
                }
            },
            _enableDatepicker: function (a) {
                var b = $(a), c = $.data(a, PROP_NAME);
                if (b.hasClass(this.markerClassName)) {
                    var d = a.nodeName.toLowerCase();
                    if ("input" == d)a.disabled = !1, c.trigger.filter("button").each(function () {
                        this.disabled = !1
                    }).end().filter("img").css({opacity: "1.0", cursor: ""}); else if ("div" == d || "span" == d) {
                        var e = b.children("." + this._inlineClass);
                        e.children().removeClass("ui-state-disabled"), e.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled", !1)
                    }
                    this._disabledInputs = $.map(this._disabledInputs, function (b) {
                        return b == a ? null : b
                    })
                }
            },
            _disableDatepicker: function (a) {
                var b = $(a), c = $.data(a, PROP_NAME);
                if (b.hasClass(this.markerClassName)) {
                    var d = a.nodeName.toLowerCase();
                    if ("input" == d)a.disabled = !0, c.trigger.filter("button").each(function () {
                        this.disabled = !0
                    }).end().filter("img").css({
                        opacity: "0.5",
                        cursor: "default"
                    }); else if ("div" == d || "span" == d) {
                        var e = b.children("." + this._inlineClass);
                        e.children().addClass("ui-state-disabled"), e.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled", !0)
                    }
                    this._disabledInputs = $.map(this._disabledInputs, function (b) {
                        return b == a ? null : b
                    }), this._disabledInputs[this._disabledInputs.length] = a
                }
            },
            _isDisabledDatepicker: function (a) {
                if (!a)return !1;
                for (var b = 0; b < this._disabledInputs.length; b++)if (this._disabledInputs[b] == a)return !0;
                return !1
            },
            _getInst: function (a) {
                try {
                    return $.data(a, PROP_NAME)
                } catch (b) {
                    throw"Missing instance data for this datepicker"
                }
            },
            _optionDatepicker: function (a, b, c) {
                var d = this._getInst(a);
                if (2 == arguments.length && "string" == typeof b)return "defaults" == b ? $.extend({}, $.datepicker._defaults) : d ? "all" == b ? $.extend({}, d.settings) : this._get(d, b) : null;
                var e = b || {};
                if ("string" == typeof b && (e = {}, e[b] = c), d) {
                    this._curInst == d && this._hideDatepicker();
                    var f = this._getDateDatepicker(a, !0), g = this._getMinMaxDate(d, "min"), h = this._getMinMaxDate(d, "max");
                    extendRemove(d.settings, e), null !== g && e.dateFormat !== undefined && e.minDate === undefined && (d.settings.minDate = this._formatDate(d, g)), null !== h && e.dateFormat !== undefined && e.maxDate === undefined && (d.settings.maxDate = this._formatDate(d, h)), this._attachments($(a), d), this._autoSize(d), this._setDate(d, f), this._updateAlternate(d), this._updateDatepicker(d)
                }
            },
            _changeDatepicker: function (a, b, c) {
                this._optionDatepicker(a, b, c)
            },
            _refreshDatepicker: function (a) {
                var b = this._getInst(a);
                b && this._updateDatepicker(b)
            },
            _setDateDatepicker: function (a, b) {
                var c = this._getInst(a);
                c && (this._setDate(c, b), this._updateDatepicker(c), this._updateAlternate(c))
            },
            _getDateDatepicker: function (a, b) {
                var c = this._getInst(a);
                return c && !c.inline && this._setDateFromField(c, b), c ? this._getDate(c) : null
            },
            _doKeyDown: function (a) {
                var b = $.datepicker._getInst(a.target), c = !0, d = b.dpDiv.is(".ui-datepicker-rtl");
                if (b._keyEvent = !0, $.datepicker._datepickerShowing)switch (a.keyCode) {
                    case 9:
                        $.datepicker._hideDatepicker(), c = !1;
                        break;
                    case 13:
                        var e = $("td." + $.datepicker._dayOverClass + ":not(." + $.datepicker._currentClass + ")", b.dpDiv);
                        e[0] && $.datepicker._selectDay(a.target, b.selectedMonth, b.selectedYear, e[0]);
                        var f = $.datepicker._get(b, "onSelect");
                        if (f) {
                            var g = $.datepicker._formatDate(b);
                            f.apply(b.input ? b.input[0] : null, [g, b])
                        } else $.datepicker._hideDatepicker();
                        return !1;
                    case 27:
                        $.datepicker._hideDatepicker();
                        break;
                    case 33:
                        $.datepicker._adjustDate(a.target, a.ctrlKey ? -$.datepicker._get(b, "stepBigMonths") : -$.datepicker._get(b, "stepMonths"), "M");
                        break;
                    case 34:
                        $.datepicker._adjustDate(a.target, a.ctrlKey ? +$.datepicker._get(b, "stepBigMonths") : +$.datepicker._get(b, "stepMonths"), "M");
                        break;
                    case 35:
                        (a.ctrlKey || a.metaKey) && $.datepicker._clearDate(a.target), c = a.ctrlKey || a.metaKey;
                        break;
                    case 36:
                        (a.ctrlKey || a.metaKey) && $.datepicker._gotoToday(a.target), c = a.ctrlKey || a.metaKey;
                        break;
                    case 37:
                        (a.ctrlKey || a.metaKey) && $.datepicker._adjustDate(a.target, d ? 1 : -1, "D"), c = a.ctrlKey || a.metaKey, a.originalEvent.altKey && $.datepicker._adjustDate(a.target, a.ctrlKey ? -$.datepicker._get(b, "stepBigMonths") : -$.datepicker._get(b, "stepMonths"), "M");
                        break;
                    case 38:
                        (a.ctrlKey || a.metaKey) && $.datepicker._adjustDate(a.target, -7, "D"), c = a.ctrlKey || a.metaKey;
                        break;
                    case 39:
                        (a.ctrlKey || a.metaKey) && $.datepicker._adjustDate(a.target, d ? -1 : 1, "D"), c = a.ctrlKey || a.metaKey, a.originalEvent.altKey && $.datepicker._adjustDate(a.target, a.ctrlKey ? +$.datepicker._get(b, "stepBigMonths") : +$.datepicker._get(b, "stepMonths"), "M");
                        break;
                    case 40:
                        (a.ctrlKey || a.metaKey) && $.datepicker._adjustDate(a.target, 7, "D"), c = a.ctrlKey || a.metaKey;
                        break;
                    default:
                        c = !1
                } else 36 == a.keyCode && a.ctrlKey ? $.datepicker._showDatepicker(this) : c = !1;
                c && (a.preventDefault(), a.stopPropagation())
            },
            _doKeyPress: function (a) {
                var b = $.datepicker._getInst(a.target);
                if ($.datepicker._get(b, "constrainInput")) {
                    var c = $.datepicker._possibleChars($.datepicker._get(b, "dateFormat")), d = String.fromCharCode(a.charCode == undefined ? a.keyCode : a.charCode);
                    return a.ctrlKey || a.metaKey || " " > d || !c || c.indexOf(d) > -1
                }
            },
            _doKeyUp: function (a) {
                var b = $.datepicker._getInst(a.target);
                if (b.input.val() != b.lastVal)try {
                    var c = $.datepicker.parseDate($.datepicker._get(b, "dateFormat"), b.input ? b.input.val() : null, $.datepicker._getFormatConfig(b));
                    c && ($.datepicker._setDateFromField(b), $.datepicker._updateAlternate(b), $.datepicker._updateDatepicker(b))
                } catch (d) {
                    $.datepicker.log(d)
                }
                return !0
            },
            _showDatepicker: function (a) {
                if (a = a.target || a, "input" != a.nodeName.toLowerCase() && (a = $("input", a.parentNode)[0]), !$.datepicker._isDisabledDatepicker(a) && $.datepicker._lastInput != a) {
                    var b = $.datepicker._getInst(a);
                    $.datepicker._curInst && $.datepicker._curInst != b && ($.datepicker._curInst.dpDiv.stop(!0, !0), b && $.datepicker._datepickerShowing && $.datepicker._hideDatepicker($.datepicker._curInst.input[0]));
                    var c = $.datepicker._get(b, "beforeShow"), d = c ? c.apply(a, [a, b]) : {};
                    if (d !== !1) {
                        extendRemove(b.settings, d), b.lastVal = null, $.datepicker._lastInput = a, $.datepicker._setDateFromField(b), $.datepicker._inDialog && (a.value = ""), $.datepicker._pos || ($.datepicker._pos = $.datepicker._findPos(a), $.datepicker._pos[1] += a.offsetHeight);
                        var e = !1;
                        $(a).parents().each(function () {
                            return e |= "fixed" == $(this).css("position"), !e
                        });
                        var f = {left: $.datepicker._pos[0], top: $.datepicker._pos[1]};
                        if ($.datepicker._pos = null, b.dpDiv.empty(), b.dpDiv.css({
                                position: "absolute",
                                display: "block",
                                top: "-1000px"
                            }), $.datepicker._updateDatepicker(b), f = $.datepicker._checkOffset(b, f, e), b.dpDiv.css({
                                position: $.datepicker._inDialog && $.blockUI ? "static" : e ? "fixed" : "absolute",
                                display: "none",
                                left: f.left + "px",
                                top: f.top + "px"
                            }), !b.inline) {
                            var g = $.datepicker._get(b, "showAnim"), h = $.datepicker._get(b, "duration"), i = function () {
                                var a = b.dpDiv.find("iframe.ui-datepicker-cover");
                                if (a.length) {
                                    var c = $.datepicker._getBorders(b.dpDiv);
                                    a.css({
                                        left: -c[0],
                                        top: -c[1],
                                        width: b.dpDiv.outerWidth(),
                                        height: b.dpDiv.outerHeight()
                                    })
                                }
                            };
                            b.dpDiv.zIndex($(a).zIndex() + 1), $.datepicker._datepickerShowing = !0, $.effects && ($.effects.effect[g] || $.effects[g]) ? b.dpDiv.show(g, $.datepicker._get(b, "showOptions"), h, i) : b.dpDiv[g || "show"](g ? h : null, i), g && h || i(), b.input.is(":visible") && !b.input.is(":disabled") && b.input.focus(), $.datepicker._curInst = b
                        }
                    }
                }
            },
            _updateDatepicker: function (a) {
                this.maxRows = 4;
                var b = $.datepicker._getBorders(a.dpDiv);
                instActive = a, a.dpDiv.empty().append(this._generateHTML(a)), this._attachHandlers(a);
                var c = a.dpDiv.find("iframe.ui-datepicker-cover");
                c.length && c.css({
                    left: -b[0],
                    top: -b[1],
                    width: a.dpDiv.outerWidth(),
                    height: a.dpDiv.outerHeight()
                }), a.dpDiv.find("." + this._dayOverClass + " a").mouseover();
                var d = this._getNumberOfMonths(a), e = d[1], f = 17;
                if (a.dpDiv.removeClass("ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4").width(""), e > 1 && a.dpDiv.addClass("ui-datepicker-multi-" + e).css("width", f * e + "em"), a.dpDiv[(1 != d[0] || 1 != d[1] ? "add" : "remove") + "Class"]("ui-datepicker-multi"), a.dpDiv[(this._get(a, "isRTL") ? "add" : "remove") + "Class"]("ui-datepicker-rtl"), a == $.datepicker._curInst && $.datepicker._datepickerShowing && a.input && a.input.is(":visible") && !a.input.is(":disabled") && a.input[0] != document.activeElement && a.input.focus(), a.yearshtml) {
                    var g = a.yearshtml;
                    setTimeout(function () {
                        g === a.yearshtml && a.yearshtml && a.dpDiv.find("select.ui-datepicker-year:first").replaceWith(a.yearshtml), g = a.yearshtml = null
                    }, 0)
                }
            },
            _getBorders: function (a) {
                var b = function (a) {
                    return {thin: 1, medium: 2, thick: 3}[a] || a
                };
                return [parseFloat(b(a.css("border-left-width"))), parseFloat(b(a.css("border-top-width")))]
            },
            _checkOffset: function (a, b, c) {
                var d = a.dpDiv.outerWidth(), e = a.dpDiv.outerHeight(), f = a.input ? a.input.outerWidth() : 0, g = a.input ? a.input.outerHeight() : 0, h = document.documentElement.clientWidth + (c ? 0 : $(document).scrollLeft()), i = document.documentElement.clientHeight + (c ? 0 : $(document).scrollTop());
                return b.left -= this._get(a, "isRTL") ? d - f : 0, b.left -= c && b.left == a.input.offset().left ? $(document).scrollLeft() : 0, b.top -= c && b.top == a.input.offset().top + g ? $(document).scrollTop() : 0, b.left -= Math.min(b.left, b.left + d > h && h > d ? Math.abs(b.left + d - h) : 0), b.top -= Math.min(b.top, b.top + e > i && i > e ? Math.abs(e + g) : 0), b
            },
            _findPos: function (a) {
                for (var b = this._getInst(a), c = this._get(b, "isRTL"); a && ("hidden" == a.type || 1 != a.nodeType || $.expr.filters.hidden(a));)a = a[c ? "previousSibling" : "nextSibling"];
                var d = $(a).offset();
                return [d.left, d.top]
            },
            _hideDatepicker: function (a) {
                var b = this._curInst;
                if (b && (!a || b == $.data(a, PROP_NAME)) && this._datepickerShowing) {
                    var c = this._get(b, "showAnim"), d = this._get(b, "duration"), e = function () {
                        $.datepicker._tidyDialog(b)
                    };
                    $.effects && ($.effects.effect[c] || $.effects[c]) ? b.dpDiv.hide(c, $.datepicker._get(b, "showOptions"), d, e) : b.dpDiv["slideDown" == c ? "slideUp" : "fadeIn" == c ? "fadeOut" : "hide"](c ? d : null, e), c || e(), this._datepickerShowing = !1;
                    var f = this._get(b, "onClose");
                    f && f.apply(b.input ? b.input[0] : null, [b.input ? b.input.val() : "", b]), this._lastInput = null, this._inDialog && (this._dialogInput.css({
                        position: "absolute",
                        left: "0",
                        top: "-100px"
                    }), $.blockUI && ($.unblockUI(), $("body").append(this.dpDiv))), this._inDialog = !1
                }
            },
            _tidyDialog: function (a) {
                a.dpDiv.removeClass(this._dialogClass).unbind(".ui-datepicker-calendar")
            },
            _checkExternalClick: function (a) {
                if ($.datepicker._curInst) {
                    var b = $(a.target), c = $.datepicker._getInst(b[0]);
                    (b[0].id != $.datepicker._mainDivId && 0 == b.parents("#" + $.datepicker._mainDivId).length && !b.hasClass($.datepicker.markerClassName) && !b.closest("." + $.datepicker._triggerClass).length && $.datepicker._datepickerShowing && (!$.datepicker._inDialog || !$.blockUI) || b.hasClass($.datepicker.markerClassName) && $.datepicker._curInst != c) && $.datepicker._hideDatepicker()
                }
            },
            _adjustDate: function (a, b, c) {
                var d = $(a), e = this._getInst(d[0]);
                this._isDisabledDatepicker(d[0]) || (this._adjustInstDate(e, b + ("M" == c ? this._get(e, "showCurrentAtPos") : 0), c), this._updateDatepicker(e))
            },
            _gotoToday: function (a) {
                var b = $(a), c = this._getInst(b[0]);
                if (this._get(c, "gotoCurrent") && c.currentDay)c.selectedDay = c.currentDay, c.drawMonth = c.selectedMonth = c.currentMonth, c.drawYear = c.selectedYear = c.currentYear; else {
                    var d = new Date;
                    c.selectedDay = d.getDate(), c.drawMonth = c.selectedMonth = d.getMonth(), c.drawYear = c.selectedYear = d.getFullYear()
                }
                this._notifyChange(c), this._adjustDate(b)
            },
            _selectMonthYear: function (a, b, c) {
                var d = $(a), e = this._getInst(d[0]);
                e["selected" + ("M" == c ? "Month" : "Year")] = e["draw" + ("M" == c ? "Month" : "Year")] = parseInt(b.options[b.selectedIndex].value, 10), this._notifyChange(e), this._adjustDate(d)
            },
            _selectDay: function (a, b, c, d) {
                var e = $(a);
                if (!$(d).hasClass(this._unselectableClass) && !this._isDisabledDatepicker(e[0])) {
                    var f = this._getInst(e[0]);
                    f.selectedDay = f.currentDay = $("a", d).html(), f.selectedMonth = f.currentMonth = b, f.selectedYear = f.currentYear = c, this._selectDate(a, this._formatDate(f, f.currentDay, f.currentMonth, f.currentYear))
                }
            },
            _clearDate: function (a) {
                var b = $(a);
                this._getInst(b[0]);
                this._selectDate(b, "")
            },
            _selectDate: function (a, b) {
                var c = $(a), d = this._getInst(c[0]);
                b = null != b ? b : this._formatDate(d), d.input && d.input.val(b), this._updateAlternate(d);
                var e = this._get(d, "onSelect");
                e ? e.apply(d.input ? d.input[0] : null, [b, d]) : d.input && d.input.trigger("change"), d.inline ? this._updateDatepicker(d) : (this._hideDatepicker(), this._lastInput = d.input[0], "object" != typeof d.input[0] && d.input.focus(), this._lastInput = null)
            },
            _updateAlternate: function (a) {
                var b = this._get(a, "altField");
                if (b) {
                    var c = this._get(a, "altFormat") || this._get(a, "dateFormat"), d = this._getDate(a), e = this.formatDate(c, d, this._getFormatConfig(a));
                    $(b).each(function () {
                        $(this).val(e)
                    })
                }
            },
            noWeekends: function (a) {
                var b = a.getDay();
                return [b > 0 && 6 > b, ""]
            },
            iso8601Week: function (a) {
                var b = new Date(a.getTime());
                b.setDate(b.getDate() + 4 - (b.getDay() || 7));
                var c = b.getTime();
                return b.setMonth(0), b.setDate(1), Math.floor(Math.round((c - b) / 864e5) / 7) + 1
            },
            parseDate: function (a, b, c) {
                if (null == a || null == b)throw"Invalid arguments";
                if (b = "object" == typeof b ? b.toString() : b + "", "" == b)return null;
                var d = (c ? c.shortYearCutoff : null) || this._defaults.shortYearCutoff;
                d = "string" != typeof d ? d : (new Date).getFullYear() % 100 + parseInt(d, 10);
                for (var e = (c ? c.dayNamesShort : null) || this._defaults.dayNamesShort, f = (c ? c.dayNames : null) || this._defaults.dayNames, g = (c ? c.monthNamesShort : null) || this._defaults.monthNamesShort, h = (c ? c.monthNames : null) || this._defaults.monthNames, i = -1, j = -1, k = -1, l = -1, m = !1, n = function (b) {
                    var c = s + 1 < a.length && a.charAt(s + 1) == b;
                    return c && s++, c
                }, o = function (a) {
                    var c = n(a), d = "@" == a ? 14 : "!" == a ? 20 : "y" == a && c ? 4 : "o" == a ? 3 : 2, e = new RegExp("^\\d{1," + d + "}"), f = b.substring(r).match(e);
                    if (!f)throw"Missing number at position " + r;
                    return r += f[0].length, parseInt(f[0], 10)
                }, p = function (a, c, d) {
                    var e = $.map(n(a) ? d : c, function (a, b) {
                        return [[b, a]]
                    }).sort(function (a, b) {
                        return -(a[1].length - b[1].length)
                    }), f = -1;
                    if ($.each(e, function (a, c) {
                            var d = c[1];
                            return b.substr(r, d.length).toLowerCase() == d.toLowerCase() ? (f = c[0], r += d.length, !1) : void 0
                        }), -1 != f)return f + 1;
                    throw"Unknown name at position " + r
                }, q = function () {
                    if (b.charAt(r) != a.charAt(s))throw"Unexpected literal at position " + r;
                    r++
                }, r = 0, s = 0; s < a.length; s++)if (m)"'" != a.charAt(s) || n("'") ? q() : m = !1; else switch (a.charAt(s)) {
                    case"d":
                        k = o("d");
                        break;
                    case"D":
                        p("D", e, f);
                        break;
                    case"o":
                        l = o("o");
                        break;
                    case"m":
                        j = o("m");
                        break;
                    case"M":
                        j = p("M", g, h);
                        break;
                    case"y":
                        i = o("y");
                        break;
                    case"@":
                        var t = new Date(o("@"));
                        i = t.getFullYear(), j = t.getMonth() + 1, k = t.getDate();
                        break;
                    case"!":
                        var t = new Date((o("!") - this._ticksTo1970) / 1e4);
                        i = t.getFullYear(), j = t.getMonth() + 1, k = t.getDate();
                        break;
                    case"'":
                        n("'") ? q() : m = !0;
                        break;
                    default:
                        q()
                }
                if (r < b.length) {
                    var u = b.substr(r);
                    if (!/^\s+/.test(u))throw"Extra/unparsed characters found in date: " + u
                }
                if (-1 == i ? i = (new Date).getFullYear() : 100 > i && (i += (new Date).getFullYear() - (new Date).getFullYear() % 100 + (d >= i ? 0 : -100)), l > -1)for (j = 1, k = l; ;) {
                    var v = this._getDaysInMonth(i, j - 1);
                    if (v >= k)break;
                    j++, k -= v
                }
                var t = this._daylightSavingAdjust(new Date(i, j - 1, k));
                if (t.getFullYear() != i || t.getMonth() + 1 != j || t.getDate() != k)throw"Invalid date";
                return t
            },
            ATOM: "yy-mm-dd",
            COOKIE: "D, dd M yy",
            ISO_8601: "yy-mm-dd",
            RFC_822: "D, d M y",
            RFC_850: "DD, dd-M-y",
            RFC_1036: "D, d M y",
            RFC_1123: "D, d M yy",
            RFC_2822: "D, d M yy",
            RSS: "D, d M y",
            TICKS: "!",
            TIMESTAMP: "@",
            W3C: "yy-mm-dd",
            _ticksTo1970: 24 * (718685 + Math.floor(492.5) - Math.floor(19.7) + Math.floor(4.925)) * 60 * 60 * 1e7,
            formatDate: function (a, b, c) {
                if (!b)return "";
                var d = (c ? c.dayNamesShort : null) || this._defaults.dayNamesShort, e = (c ? c.dayNames : null) || this._defaults.dayNames, f = (c ? c.monthNamesShort : null) || this._defaults.monthNamesShort, g = (c ? c.monthNames : null) || this._defaults.monthNames, h = function (b) {
                    var c = m + 1 < a.length && a.charAt(m + 1) == b;
                    return c && m++, c
                }, i = function (a, b, c) {
                    var d = "" + b;
                    if (h(a))for (; d.length < c;)d = "0" + d;
                    return d
                }, j = function (a, b, c, d) {
                    return h(a) ? d[b] : c[b]
                }, k = "", l = !1;
                if (b)for (var m = 0; m < a.length; m++)if (l)"'" != a.charAt(m) || h("'") ? k += a.charAt(m) : l = !1; else switch (a.charAt(m)) {
                    case"d":
                        k += i("d", b.getDate(), 2);
                        break;
                    case"D":
                        k += j("D", b.getDay(), d, e);
                        break;
                    case"o":
                        k += i("o", Math.round((new Date(b.getFullYear(), b.getMonth(), b.getDate()).getTime() - new Date(b.getFullYear(), 0, 0).getTime()) / 864e5), 3);
                        break;
                    case"m":
                        k += i("m", b.getMonth() + 1, 2);
                        break;
                    case"M":
                        k += j("M", b.getMonth(), f, g);
                        break;
                    case"y":
                        k += h("y") ? b.getFullYear() : (b.getYear() % 100 < 10 ? "0" : "") + b.getYear() % 100;
                        break;
                    case"@":
                        k += b.getTime();
                        break;
                    case"!":
                        k += 1e4 * b.getTime() + this._ticksTo1970;
                        break;
                    case"'":
                        h("'") ? k += "'" : l = !0;
                        break;
                    default:
                        k += a.charAt(m)
                }
                return k
            },
            _possibleChars: function (a) {
                for (var b = "", c = !1, d = function (b) {
                    var c = e + 1 < a.length && a.charAt(e + 1) == b;
                    return c && e++, c
                }, e = 0; e < a.length; e++)if (c)"'" != a.charAt(e) || d("'") ? b += a.charAt(e) : c = !1; else switch (a.charAt(e)) {
                    case"d":
                    case"m":
                    case"y":
                    case"@":
                        b += "0123456789";
                        break;
                    case"D":
                    case"M":
                        return null;
                    case"'":
                        d("'") ? b += "'" : c = !0;
                        break;
                    default:
                        b += a.charAt(e)
                }
                return b
            },
            _get: function (a, b) {
                return a.settings[b] !== undefined ? a.settings[b] : this._defaults[b]
            },
            _setDateFromField: function (a, b) {
                if (a.input.val() != a.lastVal) {
                    var c, d, e = this._get(a, "dateFormat"), f = a.lastVal = a.input ? a.input.val() : null;
                    c = d = this._getDefaultDate(a);
                    var g = this._getFormatConfig(a);
                    try {
                        c = this.parseDate(e, f, g) || d
                    } catch (h) {
                        this.log(h), f = b ? "" : f
                    }
                    a.selectedDay = c.getDate(), a.drawMonth = a.selectedMonth = c.getMonth(), a.drawYear = a.selectedYear = c.getFullYear(), a.currentDay = f ? c.getDate() : 0, a.currentMonth = f ? c.getMonth() : 0, a.currentYear = f ? c.getFullYear() : 0, this._adjustInstDate(a)
                }
            },
            _getDefaultDate: function (a) {
                return this._restrictMinMax(a, this._determineDate(a, this._get(a, "defaultDate"), new Date))
            },
            _determineDate: function (a, b, c) {
                var d = function (a) {
                    var b = new Date;
                    return b.setDate(b.getDate() + a), b
                }, e = function (b) {
                    try {
                        return $.datepicker.parseDate($.datepicker._get(a, "dateFormat"), b, $.datepicker._getFormatConfig(a))
                    } catch (c) {
                    }
                    for (var d = (b.toLowerCase().match(/^c/) ? $.datepicker._getDate(a) : null) || new Date, e = d.getFullYear(), f = d.getMonth(), g = d.getDate(), h = /([+-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g, i = h.exec(b); i;) {
                        switch (i[2] || "d") {
                            case"d":
                            case"D":
                                g += parseInt(i[1], 10);
                                break;
                            case"w":
                            case"W":
                                g += 7 * parseInt(i[1], 10);
                                break;
                            case"m":
                            case"M":
                                f += parseInt(i[1], 10), g = Math.min(g, $.datepicker._getDaysInMonth(e, f));
                                break;
                            case"y":
                            case"Y":
                                e += parseInt(i[1], 10), g = Math.min(g, $.datepicker._getDaysInMonth(e, f))
                        }
                        i = h.exec(b)
                    }
                    return new Date(e, f, g)
                }, f = null == b || "" === b ? c : "string" == typeof b ? e(b) : "number" == typeof b ? isNaN(b) ? c : d(b) : new Date(b.getTime());
                return f = f && "Invalid Date" == f.toString() ? c : f, f && (f.setHours(0), f.setMinutes(0), f.setSeconds(0), f.setMilliseconds(0)), this._daylightSavingAdjust(f)
            },
            _daylightSavingAdjust: function (a) {
                return a ? (a.setHours(a.getHours() > 12 ? a.getHours() + 2 : 0), a) : null
            },
            _setDate: function (a, b, c) {
                var d = !b, e = a.selectedMonth, f = a.selectedYear, g = this._restrictMinMax(a, this._determineDate(a, b, new Date));
                a.selectedDay = a.currentDay = g.getDate(), a.drawMonth = a.selectedMonth = a.currentMonth = g.getMonth(), a.drawYear = a.selectedYear = a.currentYear = g.getFullYear(), e == a.selectedMonth && f == a.selectedYear || c || this._notifyChange(a), this._adjustInstDate(a), a.input && a.input.val(d ? "" : this._formatDate(a))
            },
            _getDate: function (a) {
                var b = !a.currentYear || a.input && "" == a.input.val() ? null : this._daylightSavingAdjust(new Date(a.currentYear, a.currentMonth, a.currentDay));
                return b
            },
            _attachHandlers: function (a) {
                var b = this._get(a, "stepMonths"), c = "#" + a.id.replace(/\\\\/g, "\\");
                a.dpDiv.find("[data-handler]").map(function () {
                    var a = {
                        prev: function () {
                            window["DP_jQuery_" + dpuuid].datepicker._adjustDate(c, -b, "M")
                        }, next: function () {
                            window["DP_jQuery_" + dpuuid].datepicker._adjustDate(c, +b, "M")
                        }, hide: function () {
                            window["DP_jQuery_" + dpuuid].datepicker._hideDatepicker()
                        }, today: function () {
                            window["DP_jQuery_" + dpuuid].datepicker._gotoToday(c)
                        }, selectDay: function () {
                            return window["DP_jQuery_" + dpuuid].datepicker._selectDay(c, +this.getAttribute("data-month"), +this.getAttribute("data-year"), this), !1
                        }, selectMonth: function () {
                            return window["DP_jQuery_" + dpuuid].datepicker._selectMonthYear(c, this, "M"), !1
                        }, selectYear: function () {
                            return window["DP_jQuery_" + dpuuid].datepicker._selectMonthYear(c, this, "Y"), !1
                        }
                    };
                    $(this).bind(this.getAttribute("data-event"), a[this.getAttribute("data-handler")])
                })
            },
            _generateHTML: function (a) {
                var b = new Date;
                b = this._daylightSavingAdjust(new Date(b.getFullYear(), b.getMonth(), b.getDate()));
                var c = this._get(a, "isRTL"), d = this._get(a, "showButtonPanel"), e = this._get(a, "hideIfNoPrevNext"), f = this._get(a, "navigationAsDateFormat"), g = this._getNumberOfMonths(a), h = this._get(a, "showCurrentAtPos"), i = this._get(a, "stepMonths"), j = 1 != g[0] || 1 != g[1], k = this._daylightSavingAdjust(a.currentDay ? new Date(a.currentYear, a.currentMonth, a.currentDay) : new Date(9999, 9, 9)), l = this._getMinMaxDate(a, "min"), m = this._getMinMaxDate(a, "max"), n = a.drawMonth - h, o = a.drawYear;
                if (0 > n && (n += 12, o--), m) {
                    var p = this._daylightSavingAdjust(new Date(m.getFullYear(), m.getMonth() - g[0] * g[1] + 1, m.getDate()));
                    for (p = l && l > p ? l : p; this._daylightSavingAdjust(new Date(o, n, 1)) > p;)n--, 0 > n && (n = 11, o--)
                }
                a.drawMonth = n, a.drawYear = o;
                var q = this._get(a, "prevText");
                q = f ? this.formatDate(q, this._daylightSavingAdjust(new Date(o, n - i, 1)), this._getFormatConfig(a)) : q;
                var r = this._canAdjustMonth(a, -1, o, n) ? '<a class="ui-datepicker-prev ui-corner-all" data-handler="prev" data-event="click" title="' + q + '"><span class="ui-icon ui-icon-circle-triangle-' + (c ? "e" : "w") + '">' + q + "</span></a>" : e ? "" : '<a class="ui-datepicker-prev ui-corner-all ui-state-disabled" title="' + q + '"><span class="ui-icon ui-icon-circle-triangle-' + (c ? "e" : "w") + '">' + q + "</span></a>", s = this._get(a, "nextText");
                s = f ? this.formatDate(s, this._daylightSavingAdjust(new Date(o, n + i, 1)), this._getFormatConfig(a)) : s;
                var t = this._canAdjustMonth(a, 1, o, n) ? '<a class="ui-datepicker-next ui-corner-all" data-handler="next" data-event="click" title="' + s + '"><span class="ui-icon ui-icon-circle-triangle-' + (c ? "w" : "e") + '">' + s + "</span></a>" : e ? "" : '<a class="ui-datepicker-next ui-corner-all ui-state-disabled" title="' + s + '"><span class="ui-icon ui-icon-circle-triangle-' + (c ? "w" : "e") + '">' + s + "</span></a>", u = this._get(a, "currentText"), v = this._get(a, "gotoCurrent") && a.currentDay ? k : b;
                u = f ? this.formatDate(u, v, this._getFormatConfig(a)) : u;
                var w = a.inline ? "" : '<button type="button" class="ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all" data-handler="hide" data-event="click">' + this._get(a, "closeText") + "</button>", x = d ? '<div class="ui-datepicker-buttonpane ui-widget-content">' + (c ? w : "") + (this._isInRange(a, v) ? '<button type="button" class="ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all" data-handler="today" data-event="click">' + u + "</button>" : "") + (c ? "" : w) + "</div>" : "", y = parseInt(this._get(a, "firstDay"), 10);
                y = isNaN(y) ? 0 : y;
                for (var z = this._get(a, "showWeek"), A = this._get(a, "dayNames"), B = (this._get(a, "dayNamesShort"), this._get(a, "dayNamesMin")), C = this._get(a, "monthNames"), D = this._get(a, "monthNamesShort"), E = this._get(a, "beforeShowDay"), F = this._get(a, "showOtherMonths"), G = this._get(a, "selectOtherMonths"), H = (this._get(a, "calculateWeek") || this.iso8601Week, this._getDefaultDate(a)), I = "", J = 0; J < g[0]; J++) {
                    var K = "";
                    this.maxRows = 4;
                    for (var L = 0; L < g[1]; L++) {
                        var M = this._daylightSavingAdjust(new Date(o, n, a.selectedDay)), N = " ui-corner-all", O = "";
                        if (j) {
                            if (O += '<div class="ui-datepicker-group', g[1] > 1)switch (L) {
                                case 0:
                                    O += " ui-datepicker-group-first", N = " ui-corner-" + (c ? "right" : "left");
                                    break;
                                case g[1] - 1:
                                    O += " ui-datepicker-group-last", N = " ui-corner-" + (c ? "left" : "right");
                                    break;
                                default:
                                    O += " ui-datepicker-group-middle", N = ""
                            }
                            O += '">'
                        }
                        O += '<div class="ui-datepicker-header ui-widget-header ui-helper-clearfix' + N + '">' + (/all|left/.test(N) && 0 == J ? c ? t : r : "") + (/all|right/.test(N) && 0 == J ? c ? r : t : "") + this._generateMonthYearHeader(a, n, o, l, m, J > 0 || L > 0, C, D) + '</div><table class="ui-datepicker-calendar"><thead><tr>';
                        for (var P = z ? '<th class="ui-datepicker-week-col">' + this._get(a, "weekHeader") + "</th>" : "", Q = 0; 7 > Q; Q++) {
                            var R = (Q + y) % 7;
                            P += "<th" + ((Q + y + 6) % 7 >= 5 ? ' class="ui-datepicker-week-end"' : "") + '><span title="' + A[R] + '">' + B[R] + "</span></th>"
                        }
                        O += P + "</tr></thead><tbody>";
                        var S = this._getDaysInMonth(o, n);
                        o == a.selectedYear && n == a.selectedMonth && (a.selectedDay = Math.min(a.selectedDay, S));
                        var T = (this._getFirstDayOfMonth(o, n) - y + 7) % 7, U = Math.ceil((T + S) / 7), V = j && this.maxRows > U ? this.maxRows : U;
                        this.maxRows = V;
                        for (var W = this._daylightSavingAdjust(new Date(o, n, 1 - T)), X = 0; V > X; X++) {
                            O += "<tr>";
                            for (var Y = z ? '<td class="ui-datepicker-week-col">' + this._get(a, "calculateWeek")(W) + "</td>" : "", Q = 0; 7 > Q; Q++) {
                                var Z = E ? E.apply(a.input ? a.input[0] : null, [W]) : [!0, ""], _ = W.getMonth() != n, aa = _ && !G || !Z[0] || l && l > W || m && W > m;
                                Y += '<td class="' + ((Q + y + 6) % 7 >= 5 ? " ui-datepicker-week-end" : "") + (_ ? " ui-datepicker-other-month" : "") + (W.getTime() == M.getTime() && n == a.selectedMonth && a._keyEvent || H.getTime() == W.getTime() && H.getTime() == M.getTime() ? " " + this._dayOverClass : "") + (aa ? " " + this._unselectableClass + " ui-state-disabled" : "") + (_ && !F ? "" : " " + Z[1] + (W.getTime() == k.getTime() ? " " + this._currentClass : "") + (W.getTime() == b.getTime() ? " ui-datepicker-today" : "")) + '"' + (_ && !F || !Z[2] ? "" : ' title="' + Z[2] + '"') + (aa ? "" : ' data-handler="selectDay" data-event="click" data-month="' + W.getMonth() + '" data-year="' + W.getFullYear() + '"') + ">" + (_ && !F ? "&#xa0;" : aa ? '<span class="ui-state-default">' + W.getDate() + "</span>" : '<a class="ui-state-default' + (W.getTime() == b.getTime() ? " ui-state-highlight" : "") + (W.getTime() == k.getTime() ? " ui-state-active" : "") + (_ ? " ui-priority-secondary" : "") + '" href="#">' + W.getDate() + "</a>") + "</td>", W.setDate(W.getDate() + 1), W = this._daylightSavingAdjust(W)
                            }
                            O += Y + "</tr>"
                        }
                        n++, n > 11 && (n = 0, o++), O += "</tbody></table>" + (j ? "</div>" + (g[0] > 0 && L == g[1] - 1 ? '<div class="ui-datepicker-row-break"></div>' : "") : ""), K += O
                    }
                    I += K
                }
                return I += x + ($.ui.ie6 && !a.inline ? '<iframe src="javascript:false;" class="ui-datepicker-cover" frameborder="0"></iframe>' : ""), a._keyEvent = !1, I
            },
            _generateMonthYearHeader: function (a, b, c, d, e, f, g, h) {
                var i = this._get(a, "changeMonth"), j = this._get(a, "changeYear"), k = this._get(a, "showMonthAfterYear"), l = '<div class="ui-datepicker-title">', m = "";
                if (f || !i)m += '<span class="ui-datepicker-month">' + g[b] + "</span>"; else {
                    var n = d && d.getFullYear() == c, o = e && e.getFullYear() == c;
                    m += '<select class="ui-datepicker-month" data-handler="selectMonth" data-event="change">';
                    for (var p = 0; 12 > p; p++)(!n || p >= d.getMonth()) && (!o || p <= e.getMonth()) && (m += '<option value="' + p + '"' + (p == b ? ' selected="selected"' : "") + ">" + h[p] + "</option>");
                    m += "</select>"
                }
                if (k || (l += m + (!f && i && j ? "" : "&#xa0;")), !a.yearshtml)if (a.yearshtml = "", f || !j)l += '<span class="ui-datepicker-year">' + c + "</span>"; else {
                    var q = this._get(a, "yearRange").split(":"), r = (new Date).getFullYear(), s = function (a) {
                        var b = a.match(/c[+-].*/) ? c + parseInt(a.substring(1), 10) : a.match(/[+-].*/) ? r + parseInt(a, 10) : parseInt(a, 10);
                        return isNaN(b) ? r : b
                    }, t = s(q[0]), u = Math.max(t, s(q[1] || ""));
                    for (t = d ? Math.max(t, d.getFullYear()) : t, u = e ? Math.min(u, e.getFullYear()) : u, a.yearshtml += '<select class="ui-datepicker-year" data-handler="selectYear" data-event="change">'; u >= t; t++)a.yearshtml += '<option value="' + t + '"' + (t == c ? ' selected="selected"' : "") + ">" + t + "</option>";
                    a.yearshtml += "</select>", l += a.yearshtml, a.yearshtml = null;
                }
                return l += this._get(a, "yearSuffix"), k && (l += (!f && i && j ? "" : "&#xa0;") + m), l += "</div>"
            },
            _adjustInstDate: function (a, b, c) {
                var d = a.drawYear + ("Y" == c ? b : 0), e = a.drawMonth + ("M" == c ? b : 0), f = Math.min(a.selectedDay, this._getDaysInMonth(d, e)) + ("D" == c ? b : 0), g = this._restrictMinMax(a, this._daylightSavingAdjust(new Date(d, e, f)));
                a.selectedDay = g.getDate(), a.drawMonth = a.selectedMonth = g.getMonth(), a.drawYear = a.selectedYear = g.getFullYear(), ("M" == c || "Y" == c) && this._notifyChange(a)
            },
            _restrictMinMax: function (a, b) {
                var c = this._getMinMaxDate(a, "min"), d = this._getMinMaxDate(a, "max"), e = c && c > b ? c : b;
                return e = d && e > d ? d : e
            },
            _notifyChange: function (a) {
                var b = this._get(a, "onChangeMonthYear");
                b && b.apply(a.input ? a.input[0] : null, [a.selectedYear, a.selectedMonth + 1, a])
            },
            _getNumberOfMonths: function (a) {
                var b = this._get(a, "numberOfMonths");
                return null == b ? [1, 1] : "number" == typeof b ? [1, b] : b
            },
            _getMinMaxDate: function (a, b) {
                return this._determineDate(a, this._get(a, b + "Date"), null)
            },
            _getDaysInMonth: function (a, b) {
                return 32 - this._daylightSavingAdjust(new Date(a, b, 32)).getDate()
            },
            _getFirstDayOfMonth: function (a, b) {
                return new Date(a, b, 1).getDay()
            },
            _canAdjustMonth: function (a, b, c, d) {
                var e = this._getNumberOfMonths(a), f = this._daylightSavingAdjust(new Date(c, d + (0 > b ? b : e[0] * e[1]), 1));
                return 0 > b && f.setDate(this._getDaysInMonth(f.getFullYear(), f.getMonth())), this._isInRange(a, f)
            },
            _isInRange: function (a, b) {
                var c = this._getMinMaxDate(a, "min"), d = this._getMinMaxDate(a, "max");
                return (!c || b.getTime() >= c.getTime()) && (!d || b.getTime() <= d.getTime())
            },
            _getFormatConfig: function (a) {
                var b = this._get(a, "shortYearCutoff");
                return b = "string" != typeof b ? b : (new Date).getFullYear() % 100 + parseInt(b, 10), {
                    shortYearCutoff: b,
                    dayNamesShort: this._get(a, "dayNamesShort"),
                    dayNames: this._get(a, "dayNames"),
                    monthNamesShort: this._get(a, "monthNamesShort"),
                    monthNames: this._get(a, "monthNames")
                }
            },
            _formatDate: function (a, b, c, d) {
                b || (a.currentDay = a.selectedDay, a.currentMonth = a.selectedMonth, a.currentYear = a.selectedYear);
                var e = b ? "object" == typeof b ? b : this._daylightSavingAdjust(new Date(d, c, b)) : this._daylightSavingAdjust(new Date(a.currentYear, a.currentMonth, a.currentDay));
                return this.formatDate(this._get(a, "dateFormat"), e, this._getFormatConfig(a))
            }
        }), $.fn.datepicker = function (a) {
            if (!this.length)return this;
            $.datepicker.initialized || ($(document).mousedown($.datepicker._checkExternalClick).find(document.body).append($.datepicker.dpDiv), $.datepicker.initialized = !0);
            var b = Array.prototype.slice.call(arguments, 1);
            return "string" != typeof a || "isDisabled" != a && "getDate" != a && "widget" != a ? "option" == a && 2 == arguments.length && "string" == typeof arguments[1] ? $.datepicker["_" + a + "Datepicker"].apply($.datepicker, [this[0]].concat(b)) : this.each(function () {
                "string" == typeof a ? $.datepicker["_" + a + "Datepicker"].apply($.datepicker, [this].concat(b)) : $.datepicker._attachDatepicker(this, a)
            }) : $.datepicker["_" + a + "Datepicker"].apply($.datepicker, [this[0]].concat(b))
        }, $.datepicker = new Datepicker, $.datepicker.initialized = !1, $.datepicker.uuid = (new Date).getTime(), $.datepicker.version = "1.9.2", window["DP_jQuery_" + dpuuid] = $
    }(jQuery), function (a, b) {
        var c = "ui-dialog ui-widget ui-widget-content ui-corner-all ", d = {
            buttons: !0,
            height: !0,
            maxHeight: !0,
            maxWidth: !0,
            minHeight: !0,
            minWidth: !0,
            width: !0
        }, e = {maxHeight: !0, maxWidth: !0, minHeight: !0, minWidth: !0};
        a.widget("ui.dialog", {
            version: "1.9.2",
            options: {
                autoOpen: !0,
                buttons: {},
                closeOnEscape: !0,
                closeText: "close",
                dialogClass: "",
                draggable: !0,
                hide: null,
                height: "auto",
                maxHeight: !1,
                maxWidth: !1,
                minHeight: 150,
                minWidth: 150,
                modal: !1,
                position: {
                    my: "center", at: "center", of: window, collision: "fit", using: function (b) {
                        var c = a(this).css(b).offset().top;
                        0 > c && a(this).css("top", b.top - c)
                    }
                },
                resizable: !0,
                show: null,
                stack: !0,
                title: "",
                width: 300,
                zIndex: 1e3
            },
            _create: function () {
                this.originalTitle = this.element.attr("title"), "string" != typeof this.originalTitle && (this.originalTitle = ""), this.oldPosition = {
                    parent: this.element.parent(),
                    index: this.element.parent().children().index(this.element)
                }, this.options.title = this.options.title || this.originalTitle;
                var b, d, e, f, g, h = this, i = this.options, j = i.title || "&#160;";
                b = (this.uiDialog = a("<div>")).addClass(c + i.dialogClass).css({
                    display: "none",
                    outline: 0,
                    zIndex: i.zIndex
                }).attr("tabIndex", -1).keydown(function (b) {
                    i.closeOnEscape && !b.isDefaultPrevented() && b.keyCode && b.keyCode === a.ui.keyCode.ESCAPE && (h.close(b), b.preventDefault())
                }).mousedown(function (a) {
                    h.moveToTop(!1, a)
                }).appendTo("body"), this.element.show().removeAttr("title").addClass("ui-dialog-content ui-widget-content").appendTo(b), d = (this.uiDialogTitlebar = a("<div>")).addClass("ui-dialog-titlebar  ui-widget-header  ui-corner-all  ui-helper-clearfix").bind("mousedown", function () {
                    b.focus()
                }).prependTo(b), e = a("<a href='#'></a>").addClass("ui-dialog-titlebar-close  ui-corner-all").attr("role", "button").click(function (a) {
                    a.preventDefault(), h.close(a)
                }).appendTo(d), (this.uiDialogTitlebarCloseText = a("<span>")).addClass("ui-icon ui-icon-closethick").text(i.closeText).appendTo(e), f = a("<span>").uniqueId().addClass("ui-dialog-title").html(j).prependTo(d), g = (this.uiDialogButtonPane = a("<div>")).addClass("ui-dialog-buttonpane ui-widget-content ui-helper-clearfix"), (this.uiButtonSet = a("<div>")).addClass("ui-dialog-buttonset").appendTo(g), b.attr({
                    role: "dialog",
                    "aria-labelledby": f.attr("id")
                }), d.find("*").add(d).disableSelection(), this._hoverable(e), this._focusable(e), i.draggable && a.fn.draggable && this._makeDraggable(), i.resizable && a.fn.resizable && this._makeResizable(), this._createButtons(i.buttons), this._isOpen = !1, a.fn.bgiframe && b.bgiframe(), this._on(b, {
                    keydown: function (c) {
                        if (i.modal && c.keyCode === a.ui.keyCode.TAB) {
                            var d = a(":tabbable", b), e = d.filter(":first"), f = d.filter(":last");
                            return c.target !== f[0] || c.shiftKey ? c.target === e[0] && c.shiftKey ? (f.focus(1), !1) : void 0 : (e.focus(1), !1)
                        }
                    }
                })
            },
            _init: function () {
                this.options.autoOpen && this.open()
            },
            _destroy: function () {
                var a, b = this.oldPosition;
                this.overlay && this.overlay.destroy(), this.uiDialog.hide(), this.element.removeClass("ui-dialog-content ui-widget-content").hide().appendTo("body"), this.uiDialog.remove(), this.originalTitle && this.element.attr("title", this.originalTitle), a = b.parent.children().eq(b.index), a.length && a[0] !== this.element[0] ? a.before(this.element) : b.parent.append(this.element)
            },
            widget: function () {
                return this.uiDialog
            },
            close: function (b) {
                var c, d, e = this;
                if (this._isOpen && !1 !== this._trigger("beforeClose", b))return this._isOpen = !1, this.overlay && this.overlay.destroy(), this.options.hide ? this._hide(this.uiDialog, this.options.hide, function () {
                    e._trigger("close", b)
                }) : (this.uiDialog.hide(), this._trigger("close", b)), a.ui.dialog.overlay.resize(), this.options.modal && (c = 0, a(".ui-dialog").each(function () {
                    this !== e.uiDialog[0] && (d = a(this).css("z-index"), isNaN(d) || (c = Math.max(c, d)))
                }), a.ui.dialog.maxZ = c), this
            },
            isOpen: function () {
                return this._isOpen
            },
            moveToTop: function (b, c) {
                var d, e = this.options;
                return e.modal && !b || !e.stack && !e.modal ? this._trigger("focus", c) : (e.zIndex > a.ui.dialog.maxZ && (a.ui.dialog.maxZ = e.zIndex), this.overlay && (a.ui.dialog.maxZ += 1, a.ui.dialog.overlay.maxZ = a.ui.dialog.maxZ, this.overlay.$el.css("z-index", a.ui.dialog.overlay.maxZ)), d = {
                    scrollTop: this.element.scrollTop(),
                    scrollLeft: this.element.scrollLeft()
                }, a.ui.dialog.maxZ += 1, this.uiDialog.css("z-index", a.ui.dialog.maxZ), this.element.attr(d), this._trigger("focus", c), this)
            },
            open: function () {
                if (!this._isOpen) {
                    var b, c = this.options, d = this.uiDialog;
                    return this._size(), this._position(c.position), d.show(c.show), this.overlay = c.modal ? new a.ui.dialog.overlay(this) : null, this.moveToTop(!0), b = this.element.find(":tabbable"), b.length || (b = this.uiDialogButtonPane.find(":tabbable"), b.length || (b = d)), b.eq(0).focus(), this._isOpen = !0, this._trigger("open"), this
                }
            },
            _createButtons: function (b) {
                var c = this, d = !1;
                this.uiDialogButtonPane.remove(), this.uiButtonSet.empty(), "object" == typeof b && null !== b && a.each(b, function () {
                    return !(d = !0)
                }), d ? (a.each(b, function (b, d) {
                    var e, f;
                    d = a.isFunction(d) ? {
                        click: d,
                        text: b
                    } : d, d = a.extend({type: "button"}, d), f = d.click, d.click = function () {
                        f.apply(c.element[0], arguments)
                    }, e = a("<button></button>", d).appendTo(c.uiButtonSet), a.fn.button && e.button()
                }), this.uiDialog.addClass("ui-dialog-buttons"), this.uiDialogButtonPane.appendTo(this.uiDialog)) : this.uiDialog.removeClass("ui-dialog-buttons")
            },
            _makeDraggable: function () {
                function b(a) {
                    return {position: a.position, offset: a.offset}
                }

                var c = this, d = this.options;
                this.uiDialog.draggable({
                    cancel: ".ui-dialog-content, .ui-dialog-titlebar-close",
                    handle: ".ui-dialog-titlebar",
                    containment: "document",
                    start: function (d, e) {
                        a(this).addClass("ui-dialog-dragging"), c._trigger("dragStart", d, b(e))
                    },
                    drag: function (a, d) {
                        c._trigger("drag", a, b(d))
                    },
                    stop: function (e, f) {
                        d.position = [f.position.left - c.document.scrollLeft(), f.position.top - c.document.scrollTop()], a(this).removeClass("ui-dialog-dragging"), c._trigger("dragStop", e, b(f)), a.ui.dialog.overlay.resize()
                    }
                })
            },
            _makeResizable: function (c) {
                function d(a) {
                    return {
                        originalPosition: a.originalPosition,
                        originalSize: a.originalSize,
                        position: a.position,
                        size: a.size
                    }
                }

                c = c === b ? this.options.resizable : c;
                var e = this, f = this.options, g = this.uiDialog.css("position"), h = "string" == typeof c ? c : "n,e,s,w,se,sw,ne,nw";
                this.uiDialog.resizable({
                    cancel: ".ui-dialog-content",
                    containment: "document",
                    alsoResize: this.element,
                    maxWidth: f.maxWidth,
                    maxHeight: f.maxHeight,
                    minWidth: f.minWidth,
                    minHeight: this._minHeight(),
                    handles: h,
                    start: function (b, c) {
                        a(this).addClass("ui-dialog-resizing"), e._trigger("resizeStart", b, d(c))
                    },
                    resize: function (a, b) {
                        e._trigger("resize", a, d(b))
                    },
                    stop: function (b, c) {
                        a(this).removeClass("ui-dialog-resizing"), f.height = a(this).height(), f.width = a(this).width(), e._trigger("resizeStop", b, d(c)), a.ui.dialog.overlay.resize()
                    }
                }).css("position", g).find(".ui-resizable-se").addClass("ui-icon ui-icon-grip-diagonal-se")
            },
            _minHeight: function () {
                var a = this.options;
                return "auto" === a.height ? a.minHeight : Math.min(a.minHeight, a.height)
            },
            _position: function (b) {
                var c, d = [], e = [0, 0];
                b ? (("string" == typeof b || "object" == typeof b && "0" in b) && (d = b.split ? b.split(" ") : [b[0], b[1]], 1 === d.length && (d[1] = d[0]), a.each(["left", "top"], function (a, b) {
                    +d[a] === d[a] && (e[a] = d[a], d[a] = b)
                }), b = {
                    my: d[0] + (e[0] < 0 ? e[0] : "+" + e[0]) + " " + d[1] + (e[1] < 0 ? e[1] : "+" + e[1]),
                    at: d.join(" ")
                }), b = a.extend({}, a.ui.dialog.prototype.options.position, b)) : b = a.ui.dialog.prototype.options.position, c = this.uiDialog.is(":visible"), c || this.uiDialog.show(), this.uiDialog.position(b), c || this.uiDialog.hide()
            },
            _setOptions: function (b) {
                var c = this, f = {}, g = !1;
                a.each(b, function (a, b) {
                    c._setOption(a, b), a in d && (g = !0), a in e && (f[a] = b)
                }), g && this._size(), this.uiDialog.is(":data(resizable)") && this.uiDialog.resizable("option", f)
            },
            _setOption: function (b, d) {
                var e, f, g = this.uiDialog;
                switch (b) {
                    case"buttons":
                        this._createButtons(d);
                        break;
                    case"closeText":
                        this.uiDialogTitlebarCloseText.text("" + d);
                        break;
                    case"dialogClass":
                        g.removeClass(this.options.dialogClass).addClass(c + d);
                        break;
                    case"disabled":
                        d ? g.addClass("ui-dialog-disabled") : g.removeClass("ui-dialog-disabled");
                        break;
                    case"draggable":
                        e = g.is(":data(draggable)"), e && !d && g.draggable("destroy"), !e && d && this._makeDraggable();
                        break;
                    case"position":
                        this._position(d);
                        break;
                    case"resizable":
                        f = g.is(":data(resizable)"), f && !d && g.resizable("destroy"), f && "string" == typeof d && g.resizable("option", "handles", d), f || d === !1 || this._makeResizable(d);
                        break;
                    case"title":
                        a(".ui-dialog-title", this.uiDialogTitlebar).html("" + (d || "&#160;"))
                }
                this._super(b, d)
            },
            _size: function () {
                var b, c, d, e = this.options, f = this.uiDialog.is(":visible");
                this.element.show().css({
                    width: "auto",
                    minHeight: 0,
                    height: 0
                }), e.minWidth > e.width && (e.width = e.minWidth), b = this.uiDialog.css({
                    height: "auto",
                    width: e.width
                }).outerHeight(), c = Math.max(0, e.minHeight - b), "auto" === e.height ? a.support.minHeight ? this.element.css({
                    minHeight: c,
                    height: "auto"
                }) : (this.uiDialog.show(), d = this.element.css("height", "auto").height(), f || this.uiDialog.hide(), this.element.height(Math.max(d, c))) : this.element.height(Math.max(e.height - b, 0)), this.uiDialog.is(":data(resizable)") && this.uiDialog.resizable("option", "minHeight", this._minHeight())
            }
        }), a.extend(a.ui.dialog, {
            uuid: 0, maxZ: 0, getTitleId: function (a) {
                var b = a.attr("id");
                return b || (this.uuid += 1, b = this.uuid), "ui-dialog-title-" + b
            }, overlay: function (b) {
                this.$el = a.ui.dialog.overlay.create(b)
            }
        }), a.extend(a.ui.dialog.overlay, {
            instances: [],
            oldInstances: [],
            maxZ: 0,
            events: a.map("focus,mousedown,mouseup,keydown,keypress,click".split(","), function (a) {
                return a + ".dialog-overlay"
            }).join(" "),
            create: function (b) {
                0 === this.instances.length && (setTimeout(function () {
                    a.ui.dialog.overlay.instances.length && a(document).bind(a.ui.dialog.overlay.events, function (b) {
                        return a(b.target).zIndex() < a.ui.dialog.overlay.maxZ ? !1 : void 0
                    })
                }, 1), a(window).bind("resize.dialog-overlay", a.ui.dialog.overlay.resize));
                var c = this.oldInstances.pop() || a("<div>").addClass("ui-widget-overlay");
                return a(document).bind("keydown.dialog-overlay", function (d) {
                    var e = a.ui.dialog.overlay.instances;
                    0 !== e.length && e[e.length - 1] === c && b.options.closeOnEscape && !d.isDefaultPrevented() && d.keyCode && d.keyCode === a.ui.keyCode.ESCAPE && (b.close(d), d.preventDefault())
                }), c.appendTo(document.body).css({
                    width: this.width(),
                    height: this.height()
                }), a.fn.bgiframe && c.bgiframe(), this.instances.push(c), c
            },
            destroy: function (b) {
                var c = a.inArray(b, this.instances), d = 0;
                -1 !== c && this.oldInstances.push(this.instances.splice(c, 1)[0]), 0 === this.instances.length && a([document, window]).unbind(".dialog-overlay"), b.height(0).width(0).remove(), a.each(this.instances, function () {
                    d = Math.max(d, this.css("z-index"))
                }), this.maxZ = d
            },
            height: function () {
                var b, c;
                return a.ui.ie ? (b = Math.max(document.documentElement.scrollHeight, document.body.scrollHeight), c = Math.max(document.documentElement.offsetHeight, document.body.offsetHeight), c > b ? a(window).height() + "px" : b + "px") : a(document).height() + "px"
            },
            width: function () {
                var b, c;
                return a.ui.ie ? (b = Math.max(document.documentElement.scrollWidth, document.body.scrollWidth), c = Math.max(document.documentElement.offsetWidth, document.body.offsetWidth), c > b ? a(window).width() + "px" : b + "px") : a(document).width() + "px"
            },
            resize: function () {
                var b = a([]);
                a.each(a.ui.dialog.overlay.instances, function () {
                    b = b.add(this)
                }), b.css({width: 0, height: 0}).css({
                    width: a.ui.dialog.overlay.width(),
                    height: a.ui.dialog.overlay.height()
                })
            }
        }), a.extend(a.ui.dialog.overlay.prototype, {
            destroy: function () {
                a.ui.dialog.overlay.destroy(this.$el)
            }
        })
    }(jQuery), function (a, b) {
        var c = /up|down|vertical/, d = /up|left|vertical|horizontal/;
        a.effects.effect.blind = function (b, e) {
            var f, g, h, i = a(this), j = ["position", "top", "bottom", "left", "right", "height", "width"], k = a.effects.setMode(i, b.mode || "hide"), l = b.direction || "up", m = c.test(l), n = m ? "height" : "width", o = m ? "top" : "left", p = d.test(l), q = {}, r = "show" === k;
            i.parent().is(".ui-effects-wrapper") ? a.effects.save(i.parent(), j) : a.effects.save(i, j), i.show(), f = a.effects.createWrapper(i).css({overflow: "hidden"}), g = f[n](), h = parseFloat(f.css(o)) || 0, q[n] = r ? g : 0, p || (i.css(m ? "bottom" : "right", 0).css(m ? "top" : "left", "auto").css({position: "absolute"}), q[o] = r ? h : g + h), r && (f.css(n, 0), p || f.css(o, h + g)), f.animate(q, {
                duration: b.duration,
                easing: b.easing,
                queue: !1,
                complete: function () {
                    "hide" === k && i.hide(), a.effects.restore(i, j), a.effects.removeWrapper(i), e()
                }
            })
        }
    }(jQuery), function (a, b) {
        a.effects.effect.bounce = function (b, c) {
            var d, e, f, g = a(this), h = ["position", "top", "bottom", "left", "right", "height", "width"], i = a.effects.setMode(g, b.mode || "effect"), j = "hide" === i, k = "show" === i, l = b.direction || "up", m = b.distance, n = b.times || 5, o = 2 * n + (k || j ? 1 : 0), p = b.duration / o, q = b.easing, r = "up" === l || "down" === l ? "top" : "left", s = "up" === l || "left" === l, t = g.queue(), u = t.length;
            for ((k || j) && h.push("opacity"), a.effects.save(g, h), g.show(), a.effects.createWrapper(g), m || (m = g["top" === r ? "outerHeight" : "outerWidth"]() / 3), k && (f = {opacity: 1}, f[r] = 0, g.css("opacity", 0).css(r, s ? 2 * -m : 2 * m).animate(f, p, q)), j && (m /= Math.pow(2, n - 1)), f = {}, f[r] = 0, d = 0; n > d; d++)e = {}, e[r] = (s ? "-=" : "+=") + m, g.animate(e, p, q).animate(f, p, q), m = j ? 2 * m : m / 2;
            j && (e = {opacity: 0}, e[r] = (s ? "-=" : "+=") + m, g.animate(e, p, q)), g.queue(function () {
                j && g.hide(), a.effects.restore(g, h), a.effects.removeWrapper(g), c()
            }), u > 1 && t.splice.apply(t, [1, 0].concat(t.splice(u, o + 1))), g.dequeue()
        }
    }(jQuery), function (a, b) {
        a.effects.effect.clip = function (b, c) {
            var d, e, f, g = a(this), h = ["position", "top", "bottom", "left", "right", "height", "width"], i = a.effects.setMode(g, b.mode || "hide"), j = "show" === i, k = b.direction || "vertical", l = "vertical" === k, m = l ? "height" : "width", n = l ? "top" : "left", o = {};
            a.effects.save(g, h), g.show(), d = a.effects.createWrapper(g).css({overflow: "hidden"}), e = "IMG" === g[0].tagName ? d : g, f = e[m](), j && (e.css(m, 0), e.css(n, f / 2)), o[m] = j ? f : 0, o[n] = j ? 0 : f / 2, e.animate(o, {
                queue: !1,
                duration: b.duration,
                easing: b.easing,
                complete: function () {
                    j || g.hide(), a.effects.restore(g, h), a.effects.removeWrapper(g), c()
                }
            })
        }
    }(jQuery), function (a, b) {
        a.effects.effect.drop = function (b, c) {
            var d, e = a(this), f = ["position", "top", "bottom", "left", "right", "opacity", "height", "width"], g = a.effects.setMode(e, b.mode || "hide"), h = "show" === g, i = b.direction || "left", j = "up" === i || "down" === i ? "top" : "left", k = "up" === i || "left" === i ? "pos" : "neg", l = {opacity: h ? 1 : 0};
            a.effects.save(e, f), e.show(), a.effects.createWrapper(e), d = b.distance || e["top" === j ? "outerHeight" : "outerWidth"](!0) / 2, h && e.css("opacity", 0).css(j, "pos" === k ? -d : d), l[j] = (h ? "pos" === k ? "+=" : "-=" : "pos" === k ? "-=" : "+=") + d, e.animate(l, {
                queue: !1,
                duration: b.duration,
                easing: b.easing,
                complete: function () {
                    "hide" === g && e.hide(), a.effects.restore(e, f), a.effects.removeWrapper(e), c()
                }
            })
        }
    }(jQuery), function (a, b) {
        a.effects.effect.explode = function (b, c) {
            function d() {
                t.push(this), t.length === l * m && e()
            }

            function e() {
                n.css({visibility: "visible"}), a(t).remove(), p || n.hide(), c()
            }

            var f, g, h, i, j, k, l = b.pieces ? Math.round(Math.sqrt(b.pieces)) : 3, m = l, n = a(this), o = a.effects.setMode(n, b.mode || "hide"), p = "show" === o, q = n.show().css("visibility", "hidden").offset(), r = Math.ceil(n.outerWidth() / m), s = Math.ceil(n.outerHeight() / l), t = [];
            for (f = 0; l > f; f++)for (i = q.top + f * s, k = f - (l - 1) / 2, g = 0; m > g; g++)h = q.left + g * r, j = g - (m - 1) / 2, n.clone().appendTo("body").wrap("<div></div>").css({
                position: "absolute",
                visibility: "visible",
                left: -g * r,
                top: -f * s
            }).parent().addClass("ui-effects-explode").css({
                position: "absolute",
                overflow: "hidden",
                width: r,
                height: s,
                left: h + (p ? j * r : 0),
                top: i + (p ? k * s : 0),
                opacity: p ? 0 : 1
            }).animate({
                left: h + (p ? 0 : j * r),
                top: i + (p ? 0 : k * s),
                opacity: p ? 1 : 0
            }, b.duration || 500, b.easing, d)
        }
    }(jQuery), function (a, b) {
        a.effects.effect.fade = function (b, c) {
            var d = a(this), e = a.effects.setMode(d, b.mode || "toggle");
            d.animate({opacity: e}, {queue: !1, duration: b.duration, easing: b.easing, complete: c})
        }
    }(jQuery), function (a, b) {
        a.effects.effect.fold = function (b, c) {
            var d, e, f = a(this), g = ["position", "top", "bottom", "left", "right", "height", "width"], h = a.effects.setMode(f, b.mode || "hide"), i = "show" === h, j = "hide" === h, k = b.size || 15, l = /([0-9]+)%/.exec(k), m = !!b.horizFirst, n = i !== m, o = n ? ["width", "height"] : ["height", "width"], p = b.duration / 2, q = {}, r = {};
            a.effects.save(f, g), f.show(), d = a.effects.createWrapper(f).css({overflow: "hidden"}), e = n ? [d.width(), d.height()] : [d.height(), d.width()], l && (k = parseInt(l[1], 10) / 100 * e[j ? 0 : 1]), i && d.css(m ? {
                height: 0,
                width: k
            } : {
                height: k,
                width: 0
            }), q[o[0]] = i ? e[0] : k, r[o[1]] = i ? e[1] : 0, d.animate(q, p, b.easing).animate(r, p, b.easing, function () {
                j && f.hide(), a.effects.restore(f, g), a.effects.removeWrapper(f), c()
            })
        }
    }(jQuery), function (a, b) {
        a.effects.effect.highlight = function (b, c) {
            var d = a(this), e = ["backgroundImage", "backgroundColor", "opacity"], f = a.effects.setMode(d, b.mode || "show"), g = {backgroundColor: d.css("backgroundColor")};
            "hide" === f && (g.opacity = 0), a.effects.save(d, e), d.show().css({
                backgroundImage: "none",
                backgroundColor: b.color || "#ffff99"
            }).animate(g, {
                queue: !1, duration: b.duration, easing: b.easing, complete: function () {
                    "hide" === f && d.hide(), a.effects.restore(d, e), c()
                }
            })
        }
    }(jQuery), function (a, b) {
        a.effects.effect.pulsate = function (b, c) {
            var d, e = a(this), f = a.effects.setMode(e, b.mode || "show"), g = "show" === f, h = "hide" === f, i = g || "hide" === f, j = 2 * (b.times || 5) + (i ? 1 : 0), k = b.duration / j, l = 0, m = e.queue(), n = m.length;
            for ((g || !e.is(":visible")) && (e.css("opacity", 0).show(), l = 1), d = 1; j > d; d++)e.animate({opacity: l}, k, b.easing), l = 1 - l;
            e.animate({opacity: l}, k, b.easing), e.queue(function () {
                h && e.hide(), c()
            }), n > 1 && m.splice.apply(m, [1, 0].concat(m.splice(n, j + 1))), e.dequeue()
        }
    }(jQuery), function (a, b) {
        a.effects.effect.puff = function (b, c) {
            var d = a(this), e = a.effects.setMode(d, b.mode || "hide"), f = "hide" === e, g = parseInt(b.percent, 10) || 150, h = g / 100, i = {
                height: d.height(),
                width: d.width(),
                outerHeight: d.outerHeight(),
                outerWidth: d.outerWidth()
            };
            a.extend(b, {
                effect: "scale",
                queue: !1,
                fade: !0,
                mode: e,
                complete: c,
                percent: f ? g : 100,
                from: f ? i : {
                    height: i.height * h,
                    width: i.width * h,
                    outerHeight: i.outerHeight * h,
                    outerWidth: i.outerWidth * h
                }
            }), d.effect(b)
        }, a.effects.effect.scale = function (b, c) {
            var d = a(this), e = a.extend(!0, {}, b), f = a.effects.setMode(d, b.mode || "effect"), g = parseInt(b.percent, 10) || (0 === parseInt(b.percent, 10) ? 0 : "hide" === f ? 0 : 100), h = b.direction || "both", i = b.origin, j = {
                height: d.height(),
                width: d.width(),
                outerHeight: d.outerHeight(),
                outerWidth: d.outerWidth()
            }, k = {y: "horizontal" !== h ? g / 100 : 1, x: "vertical" !== h ? g / 100 : 1};
            e.effect = "size", e.queue = !1, e.complete = c, "effect" !== f && (e.origin = i || ["middle", "center"], e.restore = !0), e.from = b.from || ("show" === f ? {
                    height: 0,
                    width: 0,
                    outerHeight: 0,
                    outerWidth: 0
                } : j), e.to = {
                height: j.height * k.y,
                width: j.width * k.x,
                outerHeight: j.outerHeight * k.y,
                outerWidth: j.outerWidth * k.x
            }, e.fade && ("show" === f && (e.from.opacity = 0, e.to.opacity = 1), "hide" === f && (e.from.opacity = 1, e.to.opacity = 0)), d.effect(e)
        }, a.effects.effect.size = function (b, c) {
            var d, e, f, g = a(this), h = ["position", "top", "bottom", "left", "right", "width", "height", "overflow", "opacity"], i = ["position", "top", "bottom", "left", "right", "overflow", "opacity"], j = ["width", "height", "overflow"], k = ["fontSize"], l = ["borderTopWidth", "borderBottomWidth", "paddingTop", "paddingBottom"], m = ["borderLeftWidth", "borderRightWidth", "paddingLeft", "paddingRight"], n = a.effects.setMode(g, b.mode || "effect"), o = b.restore || "effect" !== n, p = b.scale || "both", q = b.origin || ["middle", "center"], r = g.css("position"), s = o ? h : i, t = {
                height: 0,
                width: 0,
                outerHeight: 0,
                outerWidth: 0
            };
            "show" === n && g.show(), d = {
                height: g.height(),
                width: g.width(),
                outerHeight: g.outerHeight(),
                outerWidth: g.outerWidth()
            }, "toggle" === b.mode && "show" === n ? (g.from = b.to || t, g.to = b.from || d) : (g.from = b.from || ("show" === n ? t : d), g.to = b.to || ("hide" === n ? t : d)), f = {
                from: {
                    y: g.from.height / d.height,
                    x: g.from.width / d.width
                }, to: {y: g.to.height / d.height, x: g.to.width / d.width}
            }, ("box" === p || "both" === p) && (f.from.y !== f.to.y && (s = s.concat(l), g.from = a.effects.setTransition(g, l, f.from.y, g.from), g.to = a.effects.setTransition(g, l, f.to.y, g.to)), f.from.x !== f.to.x && (s = s.concat(m), g.from = a.effects.setTransition(g, m, f.from.x, g.from), g.to = a.effects.setTransition(g, m, f.to.x, g.to))), ("content" === p || "both" === p) && f.from.y !== f.to.y && (s = s.concat(k).concat(j), g.from = a.effects.setTransition(g, k, f.from.y, g.from), g.to = a.effects.setTransition(g, k, f.to.y, g.to)), a.effects.save(g, s), g.show(), a.effects.createWrapper(g), g.css("overflow", "hidden").css(g.from), q && (e = a.effects.getBaseline(q, d), g.from.top = (d.outerHeight - g.outerHeight()) * e.y, g.from.left = (d.outerWidth - g.outerWidth()) * e.x, g.to.top = (d.outerHeight - g.to.outerHeight) * e.y, g.to.left = (d.outerWidth - g.to.outerWidth) * e.x), g.css(g.from), ("content" === p || "both" === p) && (l = l.concat(["marginTop", "marginBottom"]).concat(k), m = m.concat(["marginLeft", "marginRight"]), j = h.concat(l).concat(m), g.find("*[width]").each(function () {
                var c = a(this), d = {
                    height: c.height(),
                    width: c.width(),
                    outerHeight: c.outerHeight(),
                    outerWidth: c.outerWidth()
                };
                o && a.effects.save(c, j), c.from = {
                    height: d.height * f.from.y,
                    width: d.width * f.from.x,
                    outerHeight: d.outerHeight * f.from.y,
                    outerWidth: d.outerWidth * f.from.x
                }, c.to = {
                    height: d.height * f.to.y,
                    width: d.width * f.to.x,
                    outerHeight: d.height * f.to.y,
                    outerWidth: d.width * f.to.x
                }, f.from.y !== f.to.y && (c.from = a.effects.setTransition(c, l, f.from.y, c.from), c.to = a.effects.setTransition(c, l, f.to.y, c.to)), f.from.x !== f.to.x && (c.from = a.effects.setTransition(c, m, f.from.x, c.from), c.to = a.effects.setTransition(c, m, f.to.x, c.to)), c.css(c.from), c.animate(c.to, b.duration, b.easing, function () {
                    o && a.effects.restore(c, j)
                })
            })), g.animate(g.to, {
                queue: !1, duration: b.duration, easing: b.easing, complete: function () {
                    0 === g.to.opacity && g.css("opacity", g.from.opacity), "hide" === n && g.hide(), a.effects.restore(g, s), o || ("static" === r ? g.css({
                        position: "relative",
                        top: g.to.top,
                        left: g.to.left
                    }) : a.each(["top", "left"], function (a, b) {
                        g.css(b, function (b, c) {
                            var d = parseInt(c, 10), e = a ? g.to.left : g.to.top;
                            return "auto" === c ? e + "px" : d + e + "px"
                        })
                    })), a.effects.removeWrapper(g), c()
                }
            })
        }
    }(jQuery), function (a, b) {
        a.effects.effect.shake = function (b, c) {
            var d, e = a(this), f = ["position", "top", "bottom", "left", "right", "height", "width"], g = a.effects.setMode(e, b.mode || "effect"), h = b.direction || "left", i = b.distance || 20, j = b.times || 3, k = 2 * j + 1, l = Math.round(b.duration / k), m = "up" === h || "down" === h ? "top" : "left", n = "up" === h || "left" === h, o = {}, p = {}, q = {}, r = e.queue(), s = r.length;
            for (a.effects.save(e, f), e.show(), a.effects.createWrapper(e), o[m] = (n ? "-=" : "+=") + i, p[m] = (n ? "+=" : "-=") + 2 * i, q[m] = (n ? "-=" : "+=") + 2 * i, e.animate(o, l, b.easing), d = 1; j > d; d++)e.animate(p, l, b.easing).animate(q, l, b.easing);
            e.animate(p, l, b.easing).animate(o, l / 2, b.easing).queue(function () {
                "hide" === g && e.hide(), a.effects.restore(e, f), a.effects.removeWrapper(e), c()
            }), s > 1 && r.splice.apply(r, [1, 0].concat(r.splice(s, k + 1))), e.dequeue()
        }
    }(jQuery), function (a, b) {
        a.effects.effect.slide = function (b, c) {
            var d, e = a(this), f = ["position", "top", "bottom", "left", "right", "width", "height"], g = a.effects.setMode(e, b.mode || "show"), h = "show" === g, i = b.direction || "left", j = "up" === i || "down" === i ? "top" : "left", k = "up" === i || "left" === i, l = {};
            a.effects.save(e, f), e.show(), d = b.distance || e["top" === j ? "outerHeight" : "outerWidth"](!0), a.effects.createWrapper(e).css({overflow: "hidden"}), h && e.css(j, k ? isNaN(d) ? "-" + d : -d : d), l[j] = (h ? k ? "+=" : "-=" : k ? "-=" : "+=") + d, e.animate(l, {
                queue: !1,
                duration: b.duration,
                easing: b.easing,
                complete: function () {
                    "hide" === g && e.hide(), a.effects.restore(e, f), a.effects.removeWrapper(e), c()
                }
            })
        }
    }(jQuery), function (a, b) {
        a.effects.effect.transfer = function (b, c) {
            var d = a(this), e = a(b.to), f = "fixed" === e.css("position"), g = a("body"), h = f ? g.scrollTop() : 0, i = f ? g.scrollLeft() : 0, j = e.offset(), k = {
                top: j.top - h,
                left: j.left - i,
                height: e.innerHeight(),
                width: e.innerWidth()
            }, l = d.offset(), m = a('<div class="ui-effects-transfer"></div>').appendTo(document.body).addClass(b.className).css({
                top: l.top - h,
                left: l.left - i,
                height: d.innerHeight(),
                width: d.innerWidth(),
                position: f ? "fixed" : "absolute"
            }).animate(k, b.duration, b.easing, function () {
                m.remove(), c()
            })
        }
    }(jQuery), function (a, b) {
        var c = !1;
        a.widget("ui.menu", {
            version: "1.9.2",
            defaultElement: "<ul>",
            delay: 300,
            options: {
                icons: {submenu: "ui-icon-carat-1-e"},
                menus: "ul",
                position: {my: "left top", at: "right top"},
                role: "menu",
                blur: null,
                focus: null,
                select: null
            },
            _create: function () {
                this.activeMenu = this.element, this.element.uniqueId().addClass("ui-menu ui-widget ui-widget-content ui-corner-all").toggleClass("ui-menu-icons", !!this.element.find(".ui-icon").length).attr({
                    role: this.options.role,
                    tabIndex: 0
                }).bind("click" + this.eventNamespace, a.proxy(function (a) {
                    this.options.disabled && a.preventDefault()
                }, this)), this.options.disabled && this.element.addClass("ui-state-disabled").attr("aria-disabled", "true"), this._on({
                    "mousedown .ui-menu-item > a": function (a) {
                        a.preventDefault()
                    }, "click .ui-state-disabled > a": function (a) {
                        a.preventDefault()
                    }, "click .ui-menu-item:has(a)": function (b) {
                        var d = a(b.target).closest(".ui-menu-item");
                        !c && d.not(".ui-state-disabled").length && (c = !0, this.select(b), d.has(".ui-menu").length ? this.expand(b) : this.element.is(":focus") || (this.element.trigger("focus", [!0]), this.active && 1 === this.active.parents(".ui-menu").length && clearTimeout(this.timer)))
                    }, "mouseenter .ui-menu-item": function (b) {
                        var c = a(b.currentTarget);
                        c.siblings().children(".ui-state-active").removeClass("ui-state-active"), this.focus(b, c)
                    }, mouseleave: "collapseAll", "mouseleave .ui-menu": "collapseAll", focus: function (a, b) {
                        var c = this.active || this.element.children(".ui-menu-item").eq(0);
                        b || this.focus(a, c)
                    }, blur: function (b) {
                        this._delay(function () {
                            a.contains(this.element[0], this.document[0].activeElement) || this.collapseAll(b)
                        })
                    }, keydown: "_keydown"
                }), this.refresh(), this._on(this.document, {
                    click: function (b) {
                        a(b.target).closest(".ui-menu").length || this.collapseAll(b), c = !1
                    }
                })
            },
            _destroy: function () {
                this.element.removeAttr("aria-activedescendant").find(".ui-menu").andSelf().removeClass("ui-menu ui-widget ui-widget-content ui-corner-all ui-menu-icons").removeAttr("role").removeAttr("tabIndex").removeAttr("aria-labelledby").removeAttr("aria-expanded").removeAttr("aria-hidden").removeAttr("aria-disabled").removeUniqueId().show(), this.element.find(".ui-menu-item").removeClass("ui-menu-item").removeAttr("role").removeAttr("aria-disabled").children("a").removeUniqueId().removeClass("ui-corner-all ui-state-hover").removeAttr("tabIndex").removeAttr("role").removeAttr("aria-haspopup").children().each(function () {
                    var b = a(this);
                    b.data("ui-menu-submenu-carat") && b.remove()
                }), this.element.find(".ui-menu-divider").removeClass("ui-menu-divider ui-widget-content")
            },
            _keydown: function (b) {
                function c(a) {
                    return a.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&")
                }

                var d, e, f, g, h, i = !0;
                switch (b.keyCode) {
                    case a.ui.keyCode.PAGE_UP:
                        this.previousPage(b);
                        break;
                    case a.ui.keyCode.PAGE_DOWN:
                        this.nextPage(b);
                        break;
                    case a.ui.keyCode.HOME:
                        this._move("first", "first", b);
                        break;
                    case a.ui.keyCode.END:
                        this._move("last", "last", b);
                        break;
                    case a.ui.keyCode.UP:
                        this.previous(b);
                        break;
                    case a.ui.keyCode.DOWN:
                        this.next(b);
                        break;
                    case a.ui.keyCode.LEFT:
                        this.collapse(b);
                        break;
                    case a.ui.keyCode.RIGHT:
                        this.active && !this.active.is(".ui-state-disabled") && this.expand(b);
                        break;
                    case a.ui.keyCode.ENTER:
                    case a.ui.keyCode.SPACE:
                        this._activate(b);
                        break;
                    case a.ui.keyCode.ESCAPE:
                        this.collapse(b);
                        break;
                    default:
                        i = !1, e = this.previousFilter || "", f = String.fromCharCode(b.keyCode), g = !1, clearTimeout(this.filterTimer), f === e ? g = !0 : f = e + f, h = new RegExp("^" + c(f), "i"), d = this.activeMenu.children(".ui-menu-item").filter(function () {
                            return h.test(a(this).children("a").text())
                        }), d = g && -1 !== d.index(this.active.next()) ? this.active.nextAll(".ui-menu-item") : d, d.length || (f = String.fromCharCode(b.keyCode), h = new RegExp("^" + c(f), "i"), d = this.activeMenu.children(".ui-menu-item").filter(function () {
                            return h.test(a(this).children("a").text())
                        })), d.length ? (this.focus(b, d), d.length > 1 ? (this.previousFilter = f, this.filterTimer = this._delay(function () {
                            delete this.previousFilter
                        }, 1e3)) : delete this.previousFilter) : delete this.previousFilter
                }
                i && b.preventDefault()
            },
            _activate: function (a) {
                this.active.is(".ui-state-disabled") || (this.active.children("a[aria-haspopup='true']").length ? this.expand(a) : this.select(a))
            },
            refresh: function () {
                var b, c = this.options.icons.submenu, d = this.element.find(this.options.menus);
                d.filter(":not(.ui-menu)").addClass("ui-menu ui-widget ui-widget-content ui-corner-all").hide().attr({
                    role: this.options.role,
                    "aria-hidden": "true",
                    "aria-expanded": "false"
                }).each(function () {
                    var b = a(this), d = b.prev("a"), e = a("<span>").addClass("ui-menu-icon ui-icon " + c).data("ui-menu-submenu-carat", !0);
                    d.attr("aria-haspopup", "true").prepend(e), b.attr("aria-labelledby", d.attr("id"))
                }), b = d.add(this.element), b.children(":not(.ui-menu-item):has(a)").addClass("ui-menu-item").attr("role", "presentation").children("a").uniqueId().addClass("ui-corner-all").attr({
                    tabIndex: -1,
                    role: this._itemRole()
                }), b.children(":not(.ui-menu-item)").each(function () {
                    var b = a(this);
                    /[^\-—–\s]/.test(b.text()) || b.addClass("ui-widget-content ui-menu-divider")
                }), b.children(".ui-state-disabled").attr("aria-disabled", "true"), this.active && !a.contains(this.element[0], this.active[0]) && this.blur()
            },
            _itemRole: function () {
                return {menu: "menuitem", listbox: "option"}[this.options.role]
            },
            focus: function (a, b) {
                var c, d;
                this.blur(a, a && "focus" === a.type), this._scrollIntoView(b), this.active = b.first(), d = this.active.children("a").addClass("ui-state-focus"), this.options.role && this.element.attr("aria-activedescendant", d.attr("id")), this.active.parent().closest(".ui-menu-item").children("a:first").addClass("ui-state-active"), a && "keydown" === a.type ? this._close() : this.timer = this._delay(function () {
                    this._close()
                }, this.delay), c = b.children(".ui-menu"), c.length && /^mouse/.test(a.type) && this._startOpening(c), this.activeMenu = b.parent(), this._trigger("focus", a, {item: b})
            },
            _scrollIntoView: function (b) {
                var c, d, e, f, g, h;
                this._hasScroll() && (c = parseFloat(a.css(this.activeMenu[0], "borderTopWidth")) || 0, d = parseFloat(a.css(this.activeMenu[0], "paddingTop")) || 0, e = b.offset().top - this.activeMenu.offset().top - c - d, f = this.activeMenu.scrollTop(), g = this.activeMenu.height(), h = b.height(), 0 > e ? this.activeMenu.scrollTop(f + e) : e + h > g && this.activeMenu.scrollTop(f + e - g + h));
            },
            blur: function (a, b) {
                b || clearTimeout(this.timer), this.active && (this.active.children("a").removeClass("ui-state-focus"), this.active = null, this._trigger("blur", a, {item: this.active}))
            },
            _startOpening: function (a) {
                clearTimeout(this.timer), "true" === a.attr("aria-hidden") && (this.timer = this._delay(function () {
                    this._close(), this._open(a)
                }, this.delay))
            },
            _open: function (b) {
                var c = a.extend({of: this.active}, this.options.position);
                clearTimeout(this.timer), this.element.find(".ui-menu").not(b.parents(".ui-menu")).hide().attr("aria-hidden", "true"), b.show().removeAttr("aria-hidden").attr("aria-expanded", "true").position(c)
            },
            collapseAll: function (b, c) {
                clearTimeout(this.timer), this.timer = this._delay(function () {
                    var d = c ? this.element : a(b && b.target).closest(this.element.find(".ui-menu"));
                    d.length || (d = this.element), this._close(d), this.blur(b), this.activeMenu = d
                }, this.delay)
            },
            _close: function (a) {
                a || (a = this.active ? this.active.parent() : this.element), a.find(".ui-menu").hide().attr("aria-hidden", "true").attr("aria-expanded", "false").end().find("a.ui-state-active").removeClass("ui-state-active")
            },
            collapse: function (a) {
                var b = this.active && this.active.parent().closest(".ui-menu-item", this.element);
                b && b.length && (this._close(), this.focus(a, b))
            },
            expand: function (a) {
                var b = this.active && this.active.children(".ui-menu ").children(".ui-menu-item").first();
                b && b.length && (this._open(b.parent()), this._delay(function () {
                    this.focus(a, b)
                }))
            },
            next: function (a) {
                this._move("next", "first", a)
            },
            previous: function (a) {
                this._move("prev", "last", a)
            },
            isFirstItem: function () {
                return this.active && !this.active.prevAll(".ui-menu-item").length
            },
            isLastItem: function () {
                return this.active && !this.active.nextAll(".ui-menu-item").length
            },
            _move: function (a, b, c) {
                var d;
                this.active && (d = "first" === a || "last" === a ? this.active["first" === a ? "prevAll" : "nextAll"](".ui-menu-item").eq(-1) : this.active[a + "All"](".ui-menu-item").eq(0)), d && d.length && this.active || (d = this.activeMenu.children(".ui-menu-item")[b]()), this.focus(c, d)
            },
            nextPage: function (b) {
                var c, d, e;
                return this.active ? void(this.isLastItem() || (this._hasScroll() ? (d = this.active.offset().top, e = this.element.height(), this.active.nextAll(".ui-menu-item").each(function () {
                    return c = a(this), c.offset().top - d - e < 0
                }), this.focus(b, c)) : this.focus(b, this.activeMenu.children(".ui-menu-item")[this.active ? "last" : "first"]()))) : void this.next(b)
            },
            previousPage: function (b) {
                var c, d, e;
                return this.active ? void(this.isFirstItem() || (this._hasScroll() ? (d = this.active.offset().top, e = this.element.height(), this.active.prevAll(".ui-menu-item").each(function () {
                    return c = a(this), c.offset().top - d + e > 0
                }), this.focus(b, c)) : this.focus(b, this.activeMenu.children(".ui-menu-item").first()))) : void this.next(b)
            },
            _hasScroll: function () {
                return this.element.outerHeight() < this.element.prop("scrollHeight")
            },
            select: function (b) {
                this.active = this.active || a(b.target).closest(".ui-menu-item");
                var c = {item: this.active};
                this.active.has(".ui-menu").length || this.collapseAll(b, !0), this._trigger("select", b, c)
            }
        })
    }(jQuery), function (a, b) {
        function c(a, b, c) {
            return [parseInt(a[0], 10) * (m.test(a[0]) ? b / 100 : 1), parseInt(a[1], 10) * (m.test(a[1]) ? c / 100 : 1)]
        }

        function d(b, c) {
            return parseInt(a.css(b, c), 10) || 0
        }

        a.ui = a.ui || {};
        var e, f = Math.max, g = Math.abs, h = Math.round, i = /left|center|right/, j = /top|center|bottom/, k = /[\+\-]\d+%?/, l = /^\w+/, m = /%$/, n = a.fn.position;
        a.position = {
            scrollbarWidth: function () {
                if (e !== b)return e;
                var c, d, f = a("<div style='display:block;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"), g = f.children()[0];
                return a("body").append(f), c = g.offsetWidth, f.css("overflow", "scroll"), d = g.offsetWidth, c === d && (d = f[0].clientWidth), f.remove(), e = c - d
            }, getScrollInfo: function (b) {
                var c = b.isWindow ? "" : b.element.css("overflow-x"), d = b.isWindow ? "" : b.element.css("overflow-y"), e = "scroll" === c || "auto" === c && b.width < b.element[0].scrollWidth, f = "scroll" === d || "auto" === d && b.height < b.element[0].scrollHeight;
                return {width: e ? a.position.scrollbarWidth() : 0, height: f ? a.position.scrollbarWidth() : 0}
            }, getWithinInfo: function (b) {
                var c = a(b || window), d = a.isWindow(c[0]);
                return {
                    element: c,
                    isWindow: d,
                    offset: c.offset() || {left: 0, top: 0},
                    scrollLeft: c.scrollLeft(),
                    scrollTop: c.scrollTop(),
                    width: d ? c.width() : c.outerWidth(),
                    height: d ? c.height() : c.outerHeight()
                }
            }
        }, a.fn.position = function (b) {
            if (!b || !b.of)return n.apply(this, arguments);
            b = a.extend({}, b);
            var e, m, o, p, q, r = a(b.of), s = a.position.getWithinInfo(b.within), t = a.position.getScrollInfo(s), u = r[0], v = (b.collision || "flip").split(" "), w = {};
            return 9 === u.nodeType ? (m = r.width(), o = r.height(), p = {
                top: 0,
                left: 0
            }) : a.isWindow(u) ? (m = r.width(), o = r.height(), p = {
                top: r.scrollTop(),
                left: r.scrollLeft()
            }) : u.preventDefault ? (b.at = "left top", m = o = 0, p = {
                top: u.pageY,
                left: u.pageX
            }) : (m = r.outerWidth(), o = r.outerHeight(), p = r.offset()), q = a.extend({}, p), a.each(["my", "at"], function () {
                var a, c, d = (b[this] || "").split(" ");
                1 === d.length && (d = i.test(d[0]) ? d.concat(["center"]) : j.test(d[0]) ? ["center"].concat(d) : ["center", "center"]), d[0] = i.test(d[0]) ? d[0] : "center", d[1] = j.test(d[1]) ? d[1] : "center", a = k.exec(d[0]), c = k.exec(d[1]), w[this] = [a ? a[0] : 0, c ? c[0] : 0], b[this] = [l.exec(d[0])[0], l.exec(d[1])[0]]
            }), 1 === v.length && (v[1] = v[0]), "right" === b.at[0] ? q.left += m : "center" === b.at[0] && (q.left += m / 2), "bottom" === b.at[1] ? q.top += o : "center" === b.at[1] && (q.top += o / 2), e = c(w.at, m, o), q.left += e[0], q.top += e[1], this.each(function () {
                var i, j, k = a(this), l = k.outerWidth(), n = k.outerHeight(), u = d(this, "marginLeft"), x = d(this, "marginTop"), y = l + u + d(this, "marginRight") + t.width, z = n + x + d(this, "marginBottom") + t.height, A = a.extend({}, q), B = c(w.my, k.outerWidth(), k.outerHeight());
                "right" === b.my[0] ? A.left -= l : "center" === b.my[0] && (A.left -= l / 2), "bottom" === b.my[1] ? A.top -= n : "center" === b.my[1] && (A.top -= n / 2), A.left += B[0], A.top += B[1], a.support.offsetFractions || (A.left = h(A.left), A.top = h(A.top)), i = {
                    marginLeft: u,
                    marginTop: x
                }, a.each(["left", "top"], function (c, d) {
                    a.ui.position[v[c]] && a.ui.position[v[c]][d](A, {
                        targetWidth: m,
                        targetHeight: o,
                        elemWidth: l,
                        elemHeight: n,
                        collisionPosition: i,
                        collisionWidth: y,
                        collisionHeight: z,
                        offset: [e[0] + B[0], e[1] + B[1]],
                        my: b.my,
                        at: b.at,
                        within: s,
                        elem: k
                    })
                }), a.fn.bgiframe && k.bgiframe(), b.using && (j = function (a) {
                    var c = p.left - A.left, d = c + m - l, e = p.top - A.top, h = e + o - n, i = {
                        target: {
                            element: r,
                            left: p.left,
                            top: p.top,
                            width: m,
                            height: o
                        },
                        element: {element: k, left: A.left, top: A.top, width: l, height: n},
                        horizontal: 0 > d ? "left" : c > 0 ? "right" : "center",
                        vertical: 0 > h ? "top" : e > 0 ? "bottom" : "middle"
                    };
                    l > m && g(c + d) < m && (i.horizontal = "center"), n > o && g(e + h) < o && (i.vertical = "middle"), f(g(c), g(d)) > f(g(e), g(h)) ? i.important = "horizontal" : i.important = "vertical", b.using.call(this, a, i)
                }), k.offset(a.extend(A, {using: j}))
            })
        }, a.ui.position = {
            fit: {
                left: function (a, b) {
                    var c, d = b.within, e = d.isWindow ? d.scrollLeft : d.offset.left, g = d.width, h = a.left - b.collisionPosition.marginLeft, i = e - h, j = h + b.collisionWidth - g - e;
                    b.collisionWidth > g ? i > 0 && 0 >= j ? (c = a.left + i + b.collisionWidth - g - e, a.left += i - c) : j > 0 && 0 >= i ? a.left = e : i > j ? a.left = e + g - b.collisionWidth : a.left = e : i > 0 ? a.left += i : j > 0 ? a.left -= j : a.left = f(a.left - h, a.left)
                }, top: function (a, b) {
                    var c, d = b.within, e = d.isWindow ? d.scrollTop : d.offset.top, g = b.within.height, h = a.top - b.collisionPosition.marginTop, i = e - h, j = h + b.collisionHeight - g - e;
                    b.collisionHeight > g ? i > 0 && 0 >= j ? (c = a.top + i + b.collisionHeight - g - e, a.top += i - c) : j > 0 && 0 >= i ? a.top = e : i > j ? a.top = e + g - b.collisionHeight : a.top = e : i > 0 ? a.top += i : j > 0 ? a.top -= j : a.top = f(a.top - h, a.top)
                }
            }, flip: {
                left: function (a, b) {
                    var c, d, e = b.within, f = e.offset.left + e.scrollLeft, h = e.width, i = e.isWindow ? e.scrollLeft : e.offset.left, j = a.left - b.collisionPosition.marginLeft, k = j - i, l = j + b.collisionWidth - h - i, m = "left" === b.my[0] ? -b.elemWidth : "right" === b.my[0] ? b.elemWidth : 0, n = "left" === b.at[0] ? b.targetWidth : "right" === b.at[0] ? -b.targetWidth : 0, o = -2 * b.offset[0];
                    0 > k ? (c = a.left + m + n + o + b.collisionWidth - h - f, (0 > c || c < g(k)) && (a.left += m + n + o)) : l > 0 && (d = a.left - b.collisionPosition.marginLeft + m + n + o - i, (d > 0 || g(d) < l) && (a.left += m + n + o))
                }, top: function (a, b) {
                    var c, d, e = b.within, f = e.offset.top + e.scrollTop, h = e.height, i = e.isWindow ? e.scrollTop : e.offset.top, j = a.top - b.collisionPosition.marginTop, k = j - i, l = j + b.collisionHeight - h - i, m = "top" === b.my[1], n = m ? -b.elemHeight : "bottom" === b.my[1] ? b.elemHeight : 0, o = "top" === b.at[1] ? b.targetHeight : "bottom" === b.at[1] ? -b.targetHeight : 0, p = -2 * b.offset[1];
                    0 > k ? (d = a.top + n + o + p + b.collisionHeight - h - f, a.top + n + o + p > k && (0 > d || d < g(k)) && (a.top += n + o + p)) : l > 0 && (c = a.top - b.collisionPosition.marginTop + n + o + p - i, a.top + n + o + p > l && (c > 0 || g(c) < l) && (a.top += n + o + p))
                }
            }, flipfit: {
                left: function () {
                    a.ui.position.flip.left.apply(this, arguments), a.ui.position.fit.left.apply(this, arguments)
                }, top: function () {
                    a.ui.position.flip.top.apply(this, arguments), a.ui.position.fit.top.apply(this, arguments)
                }
            }
        }, function () {
            var b, c, d, e, f, g = document.getElementsByTagName("body")[0], h = document.createElement("div");
            b = document.createElement(g ? "div" : "body"), d = {
                visibility: "hidden",
                width: 0,
                height: 0,
                border: 0,
                margin: 0,
                background: "none"
            }, g && a.extend(d, {position: "absolute", left: "-1000px", top: "-1000px"});
            for (f in d)b.style[f] = d[f];
            b.appendChild(h), c = g || document.documentElement, c.insertBefore(b, c.firstChild), h.style.cssText = "position: absolute; left: 10.7432222px;", e = a(h).offset().left, a.support.offsetFractions = e > 10 && 11 > e, b.innerHTML = "", c.removeChild(b)
        }(), a.uiBackCompat !== !1 && !function (a) {
            var c = a.fn.position;
            a.fn.position = function (d) {
                if (!d || !d.offset)return c.call(this, d);
                var e = d.offset.split(" "), f = d.at.split(" ");
                return 1 === e.length && (e[1] = e[0]), /^\d/.test(e[0]) && (e[0] = "+" + e[0]), /^\d/.test(e[1]) && (e[1] = "+" + e[1]), 1 === f.length && (/left|center|right/.test(f[0]) ? f[1] = "center" : (f[1] = f[0], f[0] = "center")), c.call(this, a.extend(d, {
                    at: f[0] + e[0] + " " + f[1] + e[1],
                    offset: b
                }))
            }
        }(jQuery)
    }(jQuery), function (a, b) {
        a.widget("ui.progressbar", {
            version: "1.9.2", options: {value: 0, max: 100}, min: 0, _create: function () {
                this.element.addClass("ui-progressbar ui-widget ui-widget-content ui-corner-all").attr({
                    role: "progressbar",
                    "aria-valuemin": this.min,
                    "aria-valuemax": this.options.max,
                    "aria-valuenow": this._value()
                }), this.valueDiv = a("<div class='ui-progressbar-value ui-widget-header ui-corner-left'></div>").appendTo(this.element), this.oldValue = this._value(), this._refreshValue()
            }, _destroy: function () {
                this.element.removeClass("ui-progressbar ui-widget ui-widget-content ui-corner-all").removeAttr("role").removeAttr("aria-valuemin").removeAttr("aria-valuemax").removeAttr("aria-valuenow"), this.valueDiv.remove()
            }, value: function (a) {
                return a === b ? this._value() : (this._setOption("value", a), this)
            }, _setOption: function (a, b) {
                "value" === a && (this.options.value = b, this._refreshValue(), this._value() === this.options.max && this._trigger("complete")), this._super(a, b)
            }, _value: function () {
                var a = this.options.value;
                return "number" != typeof a && (a = 0), Math.min(this.options.max, Math.max(this.min, a))
            }, _percentage: function () {
                return 100 * this._value() / this.options.max
            }, _refreshValue: function () {
                var a = this.value(), b = this._percentage();
                this.oldValue !== a && (this.oldValue = a, this._trigger("change")), this.valueDiv.toggle(a > this.min).toggleClass("ui-corner-right", a === this.options.max).width(b.toFixed(0) + "%"), this.element.attr("aria-valuenow", a)
            }
        })
    }(jQuery), function (a, b) {
        var c = 5;
        a.widget("ui.slider", a.ui.mouse, {
            version: "1.9.2",
            widgetEventPrefix: "slide",
            options: {
                animate: !1,
                distance: 0,
                max: 100,
                min: 0,
                orientation: "horizontal",
                range: !1,
                step: 1,
                value: 0,
                values: null
            },
            _create: function () {
                var b, d, e = this.options, f = this.element.find(".ui-slider-handle").addClass("ui-state-default ui-corner-all"), g = "<a class='ui-slider-handle ui-state-default ui-corner-all' href='#'></a>", h = [];
                for (this._keySliding = !1, this._mouseSliding = !1, this._animateOff = !0, this._handleIndex = null, this._detectOrientation(), this._mouseInit(), this.element.addClass("ui-slider ui-slider-" + this.orientation + " ui-widget ui-widget-content ui-corner-all" + (e.disabled ? " ui-slider-disabled ui-disabled" : "")), this.range = a([]), e.range && (e.range === !0 && (e.values || (e.values = [this._valueMin(), this._valueMin()]), e.values.length && 2 !== e.values.length && (e.values = [e.values[0], e.values[0]])), this.range = a("<div></div>").appendTo(this.element).addClass("ui-slider-range ui-widget-header" + ("min" === e.range || "max" === e.range ? " ui-slider-range-" + e.range : ""))), d = e.values && e.values.length || 1, b = f.length; d > b; b++)h.push(g);
                this.handles = f.add(a(h.join("")).appendTo(this.element)), this.handle = this.handles.eq(0), this.handles.add(this.range).filter("a").click(function (a) {
                    a.preventDefault()
                }).mouseenter(function () {
                    e.disabled || a(this).addClass("ui-state-hover")
                }).mouseleave(function () {
                    a(this).removeClass("ui-state-hover")
                }).focus(function () {
                    e.disabled ? a(this).blur() : (a(".ui-slider .ui-state-focus").removeClass("ui-state-focus"), a(this).addClass("ui-state-focus"))
                }).blur(function () {
                    a(this).removeClass("ui-state-focus")
                }), this.handles.each(function (b) {
                    a(this).data("ui-slider-handle-index", b)
                }), this._on(this.handles, {
                    keydown: function (b) {
                        var d, e, f, g, h = a(b.target).data("ui-slider-handle-index");
                        switch (b.keyCode) {
                            case a.ui.keyCode.HOME:
                            case a.ui.keyCode.END:
                            case a.ui.keyCode.PAGE_UP:
                            case a.ui.keyCode.PAGE_DOWN:
                            case a.ui.keyCode.UP:
                            case a.ui.keyCode.RIGHT:
                            case a.ui.keyCode.DOWN:
                            case a.ui.keyCode.LEFT:
                                if (b.preventDefault(), !this._keySliding && (this._keySliding = !0, a(b.target).addClass("ui-state-active"), d = this._start(b, h), d === !1))return
                        }
                        switch (g = this.options.step, e = f = this.options.values && this.options.values.length ? this.values(h) : this.value(), b.keyCode) {
                            case a.ui.keyCode.HOME:
                                f = this._valueMin();
                                break;
                            case a.ui.keyCode.END:
                                f = this._valueMax();
                                break;
                            case a.ui.keyCode.PAGE_UP:
                                f = this._trimAlignValue(e + (this._valueMax() - this._valueMin()) / c);
                                break;
                            case a.ui.keyCode.PAGE_DOWN:
                                f = this._trimAlignValue(e - (this._valueMax() - this._valueMin()) / c);
                                break;
                            case a.ui.keyCode.UP:
                            case a.ui.keyCode.RIGHT:
                                if (e === this._valueMax())return;
                                f = this._trimAlignValue(e + g);
                                break;
                            case a.ui.keyCode.DOWN:
                            case a.ui.keyCode.LEFT:
                                if (e === this._valueMin())return;
                                f = this._trimAlignValue(e - g)
                        }
                        this._slide(b, h, f)
                    }, keyup: function (b) {
                        var c = a(b.target).data("ui-slider-handle-index");
                        this._keySliding && (this._keySliding = !1, this._stop(b, c), this._change(b, c), a(b.target).removeClass("ui-state-active"))
                    }
                }), this._refreshValue(), this._animateOff = !1
            },
            _destroy: function () {
                this.handles.remove(), this.range.remove(), this.element.removeClass("ui-slider ui-slider-horizontal ui-slider-vertical ui-slider-disabled ui-widget ui-widget-content ui-corner-all"), this._mouseDestroy()
            },
            _mouseCapture: function (b) {
                var c, d, e, f, g, h, i, j, k = this, l = this.options;
                return l.disabled ? !1 : (this.elementSize = {
                    width: this.element.outerWidth(),
                    height: this.element.outerHeight()
                }, this.elementOffset = this.element.offset(), c = {
                    x: b.pageX,
                    y: b.pageY
                }, d = this._normValueFromMouse(c), e = this._valueMax() - this._valueMin() + 1, this.handles.each(function (b) {
                    var c = Math.abs(d - k.values(b));
                    e > c && (e = c, f = a(this), g = b)
                }), l.range === !0 && this.values(1) === l.min && (g += 1, f = a(this.handles[g])), h = this._start(b, g), h === !1 ? !1 : (this._mouseSliding = !0, this._handleIndex = g, f.addClass("ui-state-active").focus(), i = f.offset(), j = !a(b.target).parents().andSelf().is(".ui-slider-handle"), this._clickOffset = j ? {
                    left: 0,
                    top: 0
                } : {
                    left: b.pageX - i.left - f.width() / 2,
                    top: b.pageY - i.top - f.height() / 2 - (parseInt(f.css("borderTopWidth"), 10) || 0) - (parseInt(f.css("borderBottomWidth"), 10) || 0) + (parseInt(f.css("marginTop"), 10) || 0)
                }, this.handles.hasClass("ui-state-hover") || this._slide(b, g, d), this._animateOff = !0, !0))
            },
            _mouseStart: function () {
                return !0
            },
            _mouseDrag: function (a) {
                var b = {x: a.pageX, y: a.pageY}, c = this._normValueFromMouse(b);
                return this._slide(a, this._handleIndex, c), !1
            },
            _mouseStop: function (a) {
                return this.handles.removeClass("ui-state-active"), this._mouseSliding = !1, this._stop(a, this._handleIndex), this._change(a, this._handleIndex), this._handleIndex = null, this._clickOffset = null, this._animateOff = !1, !1
            },
            _detectOrientation: function () {
                this.orientation = "vertical" === this.options.orientation ? "vertical" : "horizontal"
            },
            _normValueFromMouse: function (a) {
                var b, c, d, e, f;
                return "horizontal" === this.orientation ? (b = this.elementSize.width, c = a.x - this.elementOffset.left - (this._clickOffset ? this._clickOffset.left : 0)) : (b = this.elementSize.height, c = a.y - this.elementOffset.top - (this._clickOffset ? this._clickOffset.top : 0)), d = c / b, d > 1 && (d = 1), 0 > d && (d = 0), "vertical" === this.orientation && (d = 1 - d), e = this._valueMax() - this._valueMin(), f = this._valueMin() + d * e, this._trimAlignValue(f)
            },
            _start: function (a, b) {
                var c = {handle: this.handles[b], value: this.value()};
                return this.options.values && this.options.values.length && (c.value = this.values(b), c.values = this.values()), this._trigger("start", a, c)
            },
            _slide: function (a, b, c) {
                var d, e, f;
                this.options.values && this.options.values.length ? (d = this.values(b ? 0 : 1), 2 === this.options.values.length && this.options.range === !0 && (0 === b && c > d || 1 === b && d > c) && (c = d), c !== this.values(b) && (e = this.values(), e[b] = c, f = this._trigger("slide", a, {
                    handle: this.handles[b],
                    value: c,
                    values: e
                }), d = this.values(b ? 0 : 1), f !== !1 && this.values(b, c, !0))) : c !== this.value() && (f = this._trigger("slide", a, {
                    handle: this.handles[b],
                    value: c
                }), f !== !1 && this.value(c))
            },
            _stop: function (a, b) {
                var c = {handle: this.handles[b], value: this.value()};
                this.options.values && this.options.values.length && (c.value = this.values(b), c.values = this.values()), this._trigger("stop", a, c)
            },
            _change: function (a, b) {
                if (!this._keySliding && !this._mouseSliding) {
                    var c = {handle: this.handles[b], value: this.value()};
                    this.options.values && this.options.values.length && (c.value = this.values(b), c.values = this.values()), this._trigger("change", a, c)
                }
            },
            value: function (a) {
                return arguments.length ? (this.options.value = this._trimAlignValue(a), this._refreshValue(), void this._change(null, 0)) : this._value()
            },
            values: function (b, c) {
                var d, e, f;
                if (arguments.length > 1)return this.options.values[b] = this._trimAlignValue(c), this._refreshValue(), void this._change(null, b);
                if (!arguments.length)return this._values();
                if (!a.isArray(arguments[0]))return this.options.values && this.options.values.length ? this._values(b) : this.value();
                for (d = this.options.values, e = arguments[0], f = 0; f < d.length; f += 1)d[f] = this._trimAlignValue(e[f]), this._change(null, f);
                this._refreshValue()
            },
            _setOption: function (b, c) {
                var d, e = 0;
                switch (a.isArray(this.options.values) && (e = this.options.values.length), a.Widget.prototype._setOption.apply(this, arguments), b) {
                    case"disabled":
                        c ? (this.handles.filter(".ui-state-focus").blur(), this.handles.removeClass("ui-state-hover"), this.handles.prop("disabled", !0), this.element.addClass("ui-disabled")) : (this.handles.prop("disabled", !1), this.element.removeClass("ui-disabled"));
                        break;
                    case"orientation":
                        this._detectOrientation(), this.element.removeClass("ui-slider-horizontal ui-slider-vertical").addClass("ui-slider-" + this.orientation), this._refreshValue();
                        break;
                    case"value":
                        this._animateOff = !0, this._refreshValue(), this._change(null, 0), this._animateOff = !1;
                        break;
                    case"values":
                        for (this._animateOff = !0, this._refreshValue(), d = 0; e > d; d += 1)this._change(null, d);
                        this._animateOff = !1;
                        break;
                    case"min":
                    case"max":
                        this._animateOff = !0, this._refreshValue(), this._animateOff = !1
                }
            },
            _value: function () {
                var a = this.options.value;
                return a = this._trimAlignValue(a)
            },
            _values: function (a) {
                var b, c, d;
                if (arguments.length)return b = this.options.values[a], b = this._trimAlignValue(b);
                for (c = this.options.values.slice(), d = 0; d < c.length; d += 1)c[d] = this._trimAlignValue(c[d]);
                return c
            },
            _trimAlignValue: function (a) {
                if (a <= this._valueMin())return this._valueMin();
                if (a >= this._valueMax())return this._valueMax();
                var b = this.options.step > 0 ? this.options.step : 1, c = (a - this._valueMin()) % b, d = a - c;
                return 2 * Math.abs(c) >= b && (d += c > 0 ? b : -b), parseFloat(d.toFixed(5))
            },
            _valueMin: function () {
                return this.options.min
            },
            _valueMax: function () {
                return this.options.max
            },
            _refreshValue: function () {
                var b, c, d, e, f, g = this.options.range, h = this.options, i = this, j = this._animateOff ? !1 : h.animate, k = {};
                this.options.values && this.options.values.length ? this.handles.each(function (d) {
                    c = (i.values(d) - i._valueMin()) / (i._valueMax() - i._valueMin()) * 100, k["horizontal" === i.orientation ? "left" : "bottom"] = c + "%", a(this).stop(1, 1)[j ? "animate" : "css"](k, h.animate), i.options.range === !0 && ("horizontal" === i.orientation ? (0 === d && i.range.stop(1, 1)[j ? "animate" : "css"]({left: c + "%"}, h.animate), 1 === d && i.range[j ? "animate" : "css"]({width: c - b + "%"}, {
                        queue: !1,
                        duration: h.animate
                    })) : (0 === d && i.range.stop(1, 1)[j ? "animate" : "css"]({bottom: c + "%"}, h.animate), 1 === d && i.range[j ? "animate" : "css"]({height: c - b + "%"}, {
                        queue: !1,
                        duration: h.animate
                    }))), b = c
                }) : (d = this.value(), e = this._valueMin(), f = this._valueMax(), c = f !== e ? (d - e) / (f - e) * 100 : 0, k["horizontal" === this.orientation ? "left" : "bottom"] = c + "%", this.handle.stop(1, 1)[j ? "animate" : "css"](k, h.animate), "min" === g && "horizontal" === this.orientation && this.range.stop(1, 1)[j ? "animate" : "css"]({width: c + "%"}, h.animate), "max" === g && "horizontal" === this.orientation && this.range[j ? "animate" : "css"]({width: 100 - c + "%"}, {
                    queue: !1,
                    duration: h.animate
                }), "min" === g && "vertical" === this.orientation && this.range.stop(1, 1)[j ? "animate" : "css"]({height: c + "%"}, h.animate), "max" === g && "vertical" === this.orientation && this.range[j ? "animate" : "css"]({height: 100 - c + "%"}, {
                    queue: !1,
                    duration: h.animate
                }))
            }
        })
    }(jQuery), function (a) {
        function b(a) {
            return function () {
                var b = this.element.val();
                a.apply(this, arguments), this._refresh(), b !== this.element.val() && this._trigger("change")
            }
        }

        a.widget("ui.spinner", {
            version: "1.9.2",
            defaultElement: "<input>",
            widgetEventPrefix: "spin",
            options: {
                culture: null,
                icons: {down: "ui-icon-triangle-1-s", up: "ui-icon-triangle-1-n"},
                incremental: !0,
                max: null,
                min: null,
                numberFormat: null,
                page: 10,
                step: 1,
                change: null,
                spin: null,
                start: null,
                stop: null
            },
            _create: function () {
                this._setOption("max", this.options.max), this._setOption("min", this.options.min), this._setOption("step", this.options.step), this._value(this.element.val(), !0), this._draw(), this._on(this._events), this._refresh(), this._on(this.window, {
                    beforeunload: function () {
                        this.element.removeAttr("autocomplete")
                    }
                })
            },
            _getCreateOptions: function () {
                var b = {}, c = this.element;
                return a.each(["min", "max", "step"], function (a, d) {
                    var e = c.attr(d);
                    void 0 !== e && e.length && (b[d] = e)
                }), b
            },
            _events: {
                keydown: function (a) {
                    this._start(a) && this._keydown(a) && a.preventDefault()
                }, keyup: "_stop", focus: function () {
                    this.previous = this.element.val()
                }, blur: function (a) {
                    return this.cancelBlur ? void delete this.cancelBlur : (this._refresh(), void(this.previous !== this.element.val() && this._trigger("change", a)))
                }, mousewheel: function (a, b) {
                    if (b) {
                        if (!this.spinning && !this._start(a))return !1;
                        this._spin((b > 0 ? 1 : -1) * this.options.step, a), clearTimeout(this.mousewheelTimer), this.mousewheelTimer = this._delay(function () {
                            this.spinning && this._stop(a)
                        }, 100), a.preventDefault()
                    }
                }, "mousedown .ui-spinner-button": function (b) {
                    function c() {
                        var a = this.element[0] === this.document[0].activeElement;
                        a || (this.element.focus(), this.previous = d, this._delay(function () {
                            this.previous = d
                        }))
                    }

                    var d;
                    d = this.element[0] === this.document[0].activeElement ? this.previous : this.element.val(), b.preventDefault(), c.call(this), this.cancelBlur = !0, this._delay(function () {
                        delete this.cancelBlur, c.call(this)
                    }), this._start(b) !== !1 && this._repeat(null, a(b.currentTarget).hasClass("ui-spinner-up") ? 1 : -1, b)
                }, "mouseup .ui-spinner-button": "_stop", "mouseenter .ui-spinner-button": function (b) {
                    return a(b.currentTarget).hasClass("ui-state-active") ? this._start(b) === !1 ? !1 : void this._repeat(null, a(b.currentTarget).hasClass("ui-spinner-up") ? 1 : -1, b) : void 0
                }, "mouseleave .ui-spinner-button": "_stop"
            },
            _draw: function () {
                var a = this.uiSpinner = this.element.addClass("ui-spinner-input").attr("autocomplete", "off").wrap(this._uiSpinnerHtml()).parent().append(this._buttonHtml());
                this.element.attr("role", "spinbutton"), this.buttons = a.find(".ui-spinner-button").attr("tabIndex", -1).button().removeClass("ui-corner-all"), this.buttons.height() > Math.ceil(.5 * a.height()) && a.height() > 0 && a.height(a.height()), this.options.disabled && this.disable()
            },
            _keydown: function (b) {
                var c = this.options, d = a.ui.keyCode;
                switch (b.keyCode) {
                    case d.UP:
                        return this._repeat(null, 1, b), !0;
                    case d.DOWN:
                        return this._repeat(null, -1, b), !0;
                    case d.PAGE_UP:
                        return this._repeat(null, c.page, b), !0;
                    case d.PAGE_DOWN:
                        return this._repeat(null, -c.page, b), !0
                }
                return !1
            },
            _uiSpinnerHtml: function () {
                return "<span class='ui-spinner ui-widget ui-widget-content ui-corner-all'></span>"
            },
            _buttonHtml: function () {
                return "<a class='ui-spinner-button ui-spinner-up ui-corner-tr'><span class='ui-icon " + this.options.icons.up + "'>&#9650;</span></a><a class='ui-spinner-button ui-spinner-down ui-corner-br'><span class='ui-icon " + this.options.icons.down + "'>&#9660;</span></a>"
            },
            _start: function (a) {
                return this.spinning || this._trigger("start", a) !== !1 ? (this.counter || (this.counter = 1), this.spinning = !0, !0) : !1
            },
            _repeat: function (a, b, c) {
                a = a || 500, clearTimeout(this.timer), this.timer = this._delay(function () {
                    this._repeat(40, b, c)
                }, a), this._spin(b * this.options.step, c)
            },
            _spin: function (a, b) {
                var c = this.value() || 0;
                this.counter || (this.counter = 1), c = this._adjustValue(c + a * this._increment(this.counter)), this.spinning && this._trigger("spin", b, {value: c}) === !1 || (this._value(c), this.counter++)
            },
            _increment: function (b) {
                var c = this.options.incremental;
                return c ? a.isFunction(c) ? c(b) : Math.floor(b * b * b / 5e4 - b * b / 500 + 17 * b / 200 + 1) : 1
            },
            _precision: function () {
                var a = this._precisionOf(this.options.step);
                return null !== this.options.min && (a = Math.max(a, this._precisionOf(this.options.min))), a
            },
            _precisionOf: function (a) {
                var b = a.toString(), c = b.indexOf(".");
                return -1 === c ? 0 : b.length - c - 1
            },
            _adjustValue: function (a) {
                var b, c, d = this.options;
                return b = null !== d.min ? d.min : 0, c = a - b, c = Math.round(c / d.step) * d.step, a = b + c, a = parseFloat(a.toFixed(this._precision())), null !== d.max && a > d.max ? d.max : null !== d.min && a < d.min ? d.min : a
            },
            _stop: function (a) {
                this.spinning && (clearTimeout(this.timer), clearTimeout(this.mousewheelTimer), this.counter = 0, this.spinning = !1, this._trigger("stop", a))
            },
            _setOption: function (a, b) {
                if ("culture" === a || "numberFormat" === a) {
                    var c = this._parse(this.element.val());
                    return this.options[a] = b, void this.element.val(this._format(c))
                }
                ("max" === a || "min" === a || "step" === a) && "string" == typeof b && (b = this._parse(b)), this._super(a, b), "disabled" === a && (b ? (this.element.prop("disabled", !0), this.buttons.button("disable")) : (this.element.prop("disabled", !1), this.buttons.button("enable")))
            },
            _setOptions: b(function (a) {
                this._super(a), this._value(this.element.val())
            }),
            _parse: function (a) {
                return "string" == typeof a && "" !== a && (a = window.Globalize && this.options.numberFormat ? Globalize.parseFloat(a, 10, this.options.culture) : +a), "" === a || isNaN(a) ? null : a
            },
            _format: function (a) {
                return "" === a ? "" : window.Globalize && this.options.numberFormat ? Globalize.format(a, this.options.numberFormat, this.options.culture) : a
            },
            _refresh: function () {
                this.element.attr({
                    "aria-valuemin": this.options.min,
                    "aria-valuemax": this.options.max,
                    "aria-valuenow": this._parse(this.element.val())
                })
            },
            _value: function (a, b) {
                var c;
                "" !== a && (c = this._parse(a), null !== c && (b || (c = this._adjustValue(c)), a = this._format(c))), this.element.val(a), this._refresh()
            },
            _destroy: function () {
                this.element.removeClass("ui-spinner-input").prop("disabled", !1).removeAttr("autocomplete").removeAttr("role").removeAttr("aria-valuemin").removeAttr("aria-valuemax").removeAttr("aria-valuenow"), this.uiSpinner.replaceWith(this.element)
            },
            stepUp: b(function (a) {
                this._stepUp(a)
            }),
            _stepUp: function (a) {
                this._spin((a || 1) * this.options.step)
            },
            stepDown: b(function (a) {
                this._stepDown(a)
            }),
            _stepDown: function (a) {
                this._spin((a || 1) * -this.options.step)
            },
            pageUp: b(function (a) {
                this._stepUp((a || 1) * this.options.page)
            }),
            pageDown: b(function (a) {
                this._stepDown((a || 1) * this.options.page)
            }),
            value: function (a) {
                return arguments.length ? void b(this._value).call(this, a) : this._parse(this.element.val())
            },
            widget: function () {
                return this.uiSpinner
            }
        })
    }(jQuery), function (a, b) {
        function c() {
            return ++e
        }

        function d(a) {
            return a.hash.length > 1 && a.href.replace(f, "") === location.href.replace(f, "").replace(/\s/g, "%20")
        }

        var e = 0, f = /#.*$/;
        a.widget("ui.tabs", {
            version: "1.9.2",
            delay: 300,
            options: {
                active: null,
                collapsible: !1,
                event: "click",
                heightStyle: "content",
                hide: null,
                show: null,
                activate: null,
                beforeActivate: null,
                beforeLoad: null,
                load: null
            },
            _create: function () {
                var b = this, c = this.options, d = c.active, e = location.hash.substring(1);
                this.running = !1, this.element.addClass("ui-tabs ui-widget ui-widget-content ui-corner-all").toggleClass("ui-tabs-collapsible", c.collapsible).delegate(".ui-tabs-nav > li", "mousedown" + this.eventNamespace, function (b) {
                    a(this).is(".ui-state-disabled") && b.preventDefault()
                }).delegate(".ui-tabs-anchor", "focus" + this.eventNamespace, function () {
                    a(this).closest("li").is(".ui-state-disabled") && this.blur()
                }), this._processTabs(), null === d && (e && this.tabs.each(function (b, c) {
                    return a(c).attr("aria-controls") === e ? (d = b, !1) : void 0
                }), null === d && (d = this.tabs.index(this.tabs.filter(".ui-tabs-active"))), (null === d || -1 === d) && (d = this.tabs.length ? 0 : !1)), d !== !1 && (d = this.tabs.index(this.tabs.eq(d)), -1 === d && (d = c.collapsible ? !1 : 0)), c.active = d, !c.collapsible && c.active === !1 && this.anchors.length && (c.active = 0), a.isArray(c.disabled) && (c.disabled = a.unique(c.disabled.concat(a.map(this.tabs.filter(".ui-state-disabled"), function (a) {
                    return b.tabs.index(a)
                }))).sort()), this.options.active !== !1 && this.anchors.length ? this.active = this._findActive(this.options.active) : this.active = a(), this._refresh(), this.active.length && this.load(c.active)
            },
            _getCreateEventData: function () {
                return {tab: this.active, panel: this.active.length ? this._getPanelForTab(this.active) : a()}
            },
            _tabKeydown: function (b) {
                var c = a(this.document[0].activeElement).closest("li"), d = this.tabs.index(c), e = !0;
                if (!this._handlePageNav(b)) {
                    switch (b.keyCode) {
                        case a.ui.keyCode.RIGHT:
                        case a.ui.keyCode.DOWN:
                            d++;
                            break;
                        case a.ui.keyCode.UP:
                        case a.ui.keyCode.LEFT:
                            e = !1, d--;
                            break;
                        case a.ui.keyCode.END:
                            d = this.anchors.length - 1;
                            break;
                        case a.ui.keyCode.HOME:
                            d = 0;
                            break;
                        case a.ui.keyCode.SPACE:
                            return b.preventDefault(), clearTimeout(this.activating), void this._activate(d);
                        case a.ui.keyCode.ENTER:
                            return b.preventDefault(), clearTimeout(this.activating), void this._activate(d === this.options.active ? !1 : d);
                        default:
                            return
                    }
                    b.preventDefault(), clearTimeout(this.activating), d = this._focusNextTab(d, e), b.ctrlKey || (c.attr("aria-selected", "false"), this.tabs.eq(d).attr("aria-selected", "true"), this.activating = this._delay(function () {
                        this.option("active", d)
                    }, this.delay))
                }
            },
            _panelKeydown: function (b) {
                this._handlePageNav(b) || b.ctrlKey && b.keyCode === a.ui.keyCode.UP && (b.preventDefault(), this.active.focus())
            },
            _handlePageNav: function (b) {
                return b.altKey && b.keyCode === a.ui.keyCode.PAGE_UP ? (this._activate(this._focusNextTab(this.options.active - 1, !1)), !0) : b.altKey && b.keyCode === a.ui.keyCode.PAGE_DOWN ? (this._activate(this._focusNextTab(this.options.active + 1, !0)), !0) : void 0
            },
            _findNextTab: function (b, c) {
                function d() {
                    return b > e && (b = 0), 0 > b && (b = e), b
                }

                for (var e = this.tabs.length - 1; -1 !== a.inArray(d(), this.options.disabled);)b = c ? b + 1 : b - 1;
                return b
            },
            _focusNextTab: function (a, b) {
                return a = this._findNextTab(a, b), this.tabs.eq(a).focus(), a
            },
            _setOption: function (a, b) {
                return "active" === a ? void this._activate(b) : "disabled" === a ? void this._setupDisabled(b) : (this._super(a, b), "collapsible" === a && (this.element.toggleClass("ui-tabs-collapsible", b), b || this.options.active !== !1 || this._activate(0)), "event" === a && this._setupEvents(b), void("heightStyle" === a && this._setupHeightStyle(b)))
            },
            _tabId: function (a) {
                return a.attr("aria-controls") || "ui-tabs-" + c()
            },
            _sanitizeSelector: function (a) {
                return a ? a.replace(/[!"$%&'()*+,.\/:;<=>?@\[\]\^`{|}~]/g, "\\$&") : ""
            },
            refresh: function () {
                var b = this.options, c = this.tablist.children(":has(a[href])");
                b.disabled = a.map(c.filter(".ui-state-disabled"), function (a) {
                    return c.index(a)
                }), this._processTabs(), b.active !== !1 && this.anchors.length ? this.active.length && !a.contains(this.tablist[0], this.active[0]) ? this.tabs.length === b.disabled.length ? (b.active = !1, this.active = a()) : this._activate(this._findNextTab(Math.max(0, b.active - 1), !1)) : b.active = this.tabs.index(this.active) : (b.active = !1, this.active = a()), this._refresh()
            },
            _refresh: function () {
                this._setupDisabled(this.options.disabled), this._setupEvents(this.options.event), this._setupHeightStyle(this.options.heightStyle), this.tabs.not(this.active).attr({
                    "aria-selected": "false",
                    tabIndex: -1
                }), this.panels.not(this._getPanelForTab(this.active)).hide().attr({
                    "aria-expanded": "false",
                    "aria-hidden": "true"
                }), this.active.length ? (this.active.addClass("ui-tabs-active ui-state-active").attr({
                    "aria-selected": "true",
                    tabIndex: 0
                }), this._getPanelForTab(this.active).show().attr({
                    "aria-expanded": "true",
                    "aria-hidden": "false"
                })) : this.tabs.eq(0).attr("tabIndex", 0)
            },
            _processTabs: function () {
                var b = this;
                this.tablist = this._getList().addClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all").attr("role", "tablist"), this.tabs = this.tablist.find("> li:has(a[href])").addClass("ui-state-default ui-corner-top").attr({
                    role: "tab", tabIndex: -1
                }), this.anchors = this.tabs.map(function () {
                    return a("a", this)[0]
                }).addClass("ui-tabs-anchor").attr({
                    role: "presentation",
                    tabIndex: -1
                }), this.panels = a(), this.anchors.each(function (c, e) {
                    var f, g, h, i = a(e).uniqueId().attr("id"), j = a(e).closest("li"), k = j.attr("aria-controls");
                    d(e) ? (f = e.hash, g = b.element.find(b._sanitizeSelector(f))) : (h = b._tabId(j), f = "#" + h, g = b.element.find(f), g.length || (g = b._createPanel(h), g.insertAfter(b.panels[c - 1] || b.tablist)), g.attr("aria-live", "polite")), g.length && (b.panels = b.panels.add(g)), k && j.data("ui-tabs-aria-controls", k), j.attr({
                        "aria-controls": f.substring(1),
                        "aria-labelledby": i
                    }), g.attr("aria-labelledby", i)
                }), this.panels.addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").attr("role", "tabpanel")
            },
            _getList: function () {
                return this.element.find("ol,ul").eq(0)
            },
            _createPanel: function (b) {
                return a("<div>").attr("id", b).addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").data("ui-tabs-destroy", !0)
            },
            _setupDisabled: function (b) {
                a.isArray(b) && (b.length ? b.length === this.anchors.length && (b = !0) : b = !1);
                for (var c, d = 0; c = this.tabs[d]; d++)b === !0 || -1 !== a.inArray(d, b) ? a(c).addClass("ui-state-disabled").attr("aria-disabled", "true") : a(c).removeClass("ui-state-disabled").removeAttr("aria-disabled");
                this.options.disabled = b
            },
            _setupEvents: function (b) {
                var c = {
                    click: function (a) {
                        a.preventDefault()
                    }
                };
                b && a.each(b.split(" "), function (a, b) {
                    c[b] = "_eventHandler"
                }), this._off(this.anchors.add(this.tabs).add(this.panels)), this._on(this.anchors, c), this._on(this.tabs, {keydown: "_tabKeydown"}), this._on(this.panels, {keydown: "_panelKeydown"}), this._focusable(this.tabs), this._hoverable(this.tabs)
            },
            _setupHeightStyle: function (b) {
                var c, d, e = this.element.parent();
                "fill" === b ? (a.support.minHeight || (d = e.css("overflow"), e.css("overflow", "hidden")), c = e.height(), this.element.siblings(":visible").each(function () {
                    var b = a(this), d = b.css("position");
                    "absolute" !== d && "fixed" !== d && (c -= b.outerHeight(!0))
                }), d && e.css("overflow", d), this.element.children().not(this.panels).each(function () {
                    c -= a(this).outerHeight(!0)
                }), this.panels.each(function () {
                    a(this).height(Math.max(0, c - a(this).innerHeight() + a(this).height()))
                }).css("overflow", "auto")) : "auto" === b && (c = 0, this.panels.each(function () {
                    c = Math.max(c, a(this).height("").height())
                }).height(c))
            },
            _eventHandler: function (b) {
                var c = this.options, d = this.active, e = a(b.currentTarget), f = e.closest("li"), g = f[0] === d[0], h = g && c.collapsible, i = h ? a() : this._getPanelForTab(f), j = d.length ? this._getPanelForTab(d) : a(), k = {
                    oldTab: d,
                    oldPanel: j,
                    newTab: h ? a() : f,
                    newPanel: i
                };
                b.preventDefault(), f.hasClass("ui-state-disabled") || f.hasClass("ui-tabs-loading") || this.running || g && !c.collapsible || this._trigger("beforeActivate", b, k) === !1 || (c.active = h ? !1 : this.tabs.index(f), this.active = g ? a() : f, this.xhr && this.xhr.abort(), j.length || i.length || a.error("jQuery UI Tabs: Mismatching fragment identifier."), i.length && this.load(this.tabs.index(f), b), this._toggle(b, k))
            },
            _toggle: function (b, c) {
                function d() {
                    f.running = !1, f._trigger("activate", b, c)
                }

                function e() {
                    c.newTab.closest("li").addClass("ui-tabs-active ui-state-active"), g.length && f.options.show ? f._show(g, f.options.show, d) : (g.show(), d())
                }

                var f = this, g = c.newPanel, h = c.oldPanel;
                this.running = !0, h.length && this.options.hide ? this._hide(h, this.options.hide, function () {
                    c.oldTab.closest("li").removeClass("ui-tabs-active ui-state-active"), e()
                }) : (c.oldTab.closest("li").removeClass("ui-tabs-active ui-state-active"), h.hide(), e()), h.attr({
                    "aria-expanded": "false",
                    "aria-hidden": "true"
                }), c.oldTab.attr("aria-selected", "false"), g.length && h.length ? c.oldTab.attr("tabIndex", -1) : g.length && this.tabs.filter(function () {
                    return 0 === a(this).attr("tabIndex")
                }).attr("tabIndex", -1), g.attr({
                    "aria-expanded": "true",
                    "aria-hidden": "false"
                }), c.newTab.attr({"aria-selected": "true", tabIndex: 0})
            },
            _activate: function (b) {
                var c, d = this._findActive(b);
                d[0] !== this.active[0] && (d.length || (d = this.active), c = d.find(".ui-tabs-anchor")[0], this._eventHandler({
                    target: c,
                    currentTarget: c,
                    preventDefault: a.noop
                }))
            },
            _findActive: function (b) {
                return b === !1 ? a() : this.tabs.eq(b)
            },
            _getIndex: function (a) {
                return "string" == typeof a && (a = this.anchors.index(this.anchors.filter("[href$='" + a + "']"))), a
            },
            _destroy: function () {
                this.xhr && this.xhr.abort(), this.element.removeClass("ui-tabs ui-widget ui-widget-content ui-corner-all ui-tabs-collapsible"), this.tablist.removeClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all").removeAttr("role"), this.anchors.removeClass("ui-tabs-anchor").removeAttr("role").removeAttr("tabIndex").removeData("href.tabs").removeData("load.tabs").removeUniqueId(), this.tabs.add(this.panels).each(function () {
                    a.data(this, "ui-tabs-destroy") ? a(this).remove() : a(this).removeClass("ui-state-default ui-state-active ui-state-disabled ui-corner-top ui-corner-bottom ui-widget-content ui-tabs-active ui-tabs-panel").removeAttr("tabIndex").removeAttr("aria-live").removeAttr("aria-busy").removeAttr("aria-selected").removeAttr("aria-labelledby").removeAttr("aria-hidden").removeAttr("aria-expanded").removeAttr("role")
                }), this.tabs.each(function () {
                    var b = a(this), c = b.data("ui-tabs-aria-controls");
                    c ? b.attr("aria-controls", c) : b.removeAttr("aria-controls")
                }), this.panels.show(), "content" !== this.options.heightStyle && this.panels.css("height", "")
            },
            enable: function (c) {
                var d = this.options.disabled;
                d !== !1 && (c === b ? d = !1 : (c = this._getIndex(c), d = a.isArray(d) ? a.map(d, function (a) {
                    return a !== c ? a : null
                }) : a.map(this.tabs, function (a, b) {
                    return b !== c ? b : null
                })), this._setupDisabled(d))
            },
            disable: function (c) {
                var d = this.options.disabled;
                if (d !== !0) {
                    if (c === b)d = !0; else {
                        if (c = this._getIndex(c), -1 !== a.inArray(c, d))return;
                        d = a.isArray(d) ? a.merge([c], d).sort() : [c]
                    }
                    this._setupDisabled(d)
                }
            },
            load: function (b, c) {
                b = this._getIndex(b);
                var e = this, f = this.tabs.eq(b), g = f.find(".ui-tabs-anchor"), h = this._getPanelForTab(f), i = {
                    tab: f,
                    panel: h
                };
                d(g[0]) || (this.xhr = a.ajax(this._ajaxSettings(g, c, i)), this.xhr && "canceled" !== this.xhr.statusText && (f.addClass("ui-tabs-loading"), h.attr("aria-busy", "true"), this.xhr.success(function (a) {
                    setTimeout(function () {
                        h.html(a), e._trigger("load", c, i)
                    }, 1)
                }).complete(function (a, b) {
                    setTimeout(function () {
                        "abort" === b && e.panels.stop(!1, !0), f.removeClass("ui-tabs-loading"), h.removeAttr("aria-busy"), a === e.xhr && delete e.xhr
                    }, 1)
                })))
            },
            _ajaxSettings: function (b, c, d) {
                var e = this;
                return {
                    url: b.attr("href"), beforeSend: function (b, f) {
                        return e._trigger("beforeLoad", c, a.extend({jqXHR: b, ajaxSettings: f}, d))
                    }
                }
            },
            _getPanelForTab: function (b) {
                var c = a(b).attr("aria-controls");
                return this.element.find(this._sanitizeSelector("#" + c))
            }
        }), a.uiBackCompat !== !1 && (a.ui.tabs.prototype._ui = function (a, b) {
            return {tab: a, panel: b, index: this.anchors.index(a)}
        }, a.widget("ui.tabs", a.ui.tabs, {
            url: function (a, b) {
                this.anchors.eq(a).attr("href", b)
            }
        }), a.widget("ui.tabs", a.ui.tabs, {
            options: {ajaxOptions: null, cache: !1}, _create: function () {
                this._super();
                var b = this;
                this._on({
                    tabsbeforeload: function (c, d) {
                        return a.data(d.tab[0], "cache.tabs") ? void c.preventDefault() : void d.jqXHR.success(function () {
                            b.options.cache && a.data(d.tab[0], "cache.tabs", !0)
                        })
                    }
                })
            }, _ajaxSettings: function (b, c, d) {
                var e = this.options.ajaxOptions;
                return a.extend({}, e, {
                    error: function (a, b) {
                        try {
                            e.error(a, b, d.tab.closest("li").index(), d.tab[0])
                        } catch (c) {
                        }
                    }
                }, this._superApply(arguments))
            }, _setOption: function (a, b) {
                "cache" === a && b === !1 && this.anchors.removeData("cache.tabs"), this._super(a, b)
            }, _destroy: function () {
                this.anchors.removeData("cache.tabs"), this._super()
            }, url: function (a) {
                this.anchors.eq(a).removeData("cache.tabs"), this._superApply(arguments)
            }
        }), a.widget("ui.tabs", a.ui.tabs, {
            abort: function () {
                this.xhr && this.xhr.abort()
            }
        }), a.widget("ui.tabs", a.ui.tabs, {
            options: {spinner: "<em>Loading&#8230;</em>"}, _create: function () {
                this._super(), this._on({
                    tabsbeforeload: function (a, b) {
                        if (a.target === this.element[0] && this.options.spinner) {
                            var c = b.tab.find("span"), d = c.html();
                            c.html(this.options.spinner), b.jqXHR.complete(function () {
                                c.html(d)
                            })
                        }
                    }
                })
            }
        }), a.widget("ui.tabs", a.ui.tabs, {
            options: {enable: null, disable: null}, enable: function (b) {
                var c, d = this.options;
                (b && d.disabled === !0 || a.isArray(d.disabled) && -1 !== a.inArray(b, d.disabled)) && (c = !0), this._superApply(arguments), c && this._trigger("enable", null, this._ui(this.anchors[b], this.panels[b]))
            }, disable: function (b) {
                var c, d = this.options;
                (b && d.disabled === !1 || a.isArray(d.disabled) && -1 === a.inArray(b, d.disabled)) && (c = !0), this._superApply(arguments), c && this._trigger("disable", null, this._ui(this.anchors[b], this.panels[b]))
            }
        }), a.widget("ui.tabs", a.ui.tabs, {
            options: {
                add: null,
                remove: null,
                tabTemplate: "<li><a href='#{href}'><span>#{label}</span></a></li>"
            }, add: function (c, d, e) {
                e === b && (e = this.anchors.length);
                var f, g, h = this.options, i = a(h.tabTemplate.replace(/#\{href\}/g, c).replace(/#\{label\}/g, d)), j = c.indexOf("#") ? this._tabId(i) : c.replace("#", "");
                return i.addClass("ui-state-default ui-corner-top").data("ui-tabs-destroy", !0), i.attr("aria-controls", j), f = e >= this.tabs.length, g = this.element.find("#" + j), g.length || (g = this._createPanel(j), f ? e > 0 ? g.insertAfter(this.panels.eq(-1)) : g.appendTo(this.element) : g.insertBefore(this.panels[e])), g.addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").hide(), f ? i.appendTo(this.tablist) : i.insertBefore(this.tabs[e]), h.disabled = a.map(h.disabled, function (a) {
                    return a >= e ? ++a : a
                }), this.refresh(), 1 === this.tabs.length && h.active === !1 && this.option("active", 0), this._trigger("add", null, this._ui(this.anchors[e], this.panels[e])), this
            }, remove: function (b) {
                b = this._getIndex(b);
                var c = this.options, d = this.tabs.eq(b).remove(), e = this._getPanelForTab(d).remove();
                return d.hasClass("ui-tabs-active") && this.anchors.length > 2 && this._activate(b + (b + 1 < this.anchors.length ? 1 : -1)), c.disabled = a.map(a.grep(c.disabled, function (a) {
                    return a !== b
                }), function (a) {
                    return a >= b ? --a : a
                }), this.refresh(), this._trigger("remove", null, this._ui(d.find("a")[0], e[0])), this
            }
        }), a.widget("ui.tabs", a.ui.tabs, {
            length: function () {
                return this.anchors.length
            }
        }), a.widget("ui.tabs", a.ui.tabs, {
            options: {idPrefix: "ui-tabs-"}, _tabId: function (b) {
                var d = b.is("li") ? b.find("a[href]") : b;
                return d = d[0], a(d).closest("li").attr("aria-controls") || d.title && d.title.replace(/\s/g, "_").replace(/[^\w\u00c0-\uFFFF\-]/g, "") || this.options.idPrefix + c()
            }
        }), a.widget("ui.tabs", a.ui.tabs, {
            options: {panelTemplate: "<div></div>"}, _createPanel: function (b) {
                return a(this.options.panelTemplate).attr("id", b).addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").data("ui-tabs-destroy", !0)
            }
        }), a.widget("ui.tabs", a.ui.tabs, {
            _create: function () {
                var a = this.options;
                null === a.active && a.selected !== b && (a.active = -1 === a.selected ? !1 : a.selected), this._super(), a.selected = a.active, a.selected === !1 && (a.selected = -1)
            }, _setOption: function (a, b) {
                if ("selected" !== a)return this._super(a, b);
                var c = this.options;
                this._super("active", -1 === b ? !1 : b), c.selected = c.active, c.selected === !1 && (c.selected = -1)
            }, _eventHandler: function () {
                this._superApply(arguments), this.options.selected = this.options.active, this.options.selected === !1 && (this.options.selected = -1)
            }
        }), a.widget("ui.tabs", a.ui.tabs, {
            options: {show: null, select: null}, _create: function () {
                this._super(), this.options.active !== !1 && this._trigger("show", null, this._ui(this.active.find(".ui-tabs-anchor")[0], this._getPanelForTab(this.active)[0]))
            }, _trigger: function (a, b, c) {
                var d, e, f = this._superApply(arguments);
                return f ? ("beforeActivate" === a ? (d = c.newTab.length ? c.newTab : c.oldTab, e = c.newPanel.length ? c.newPanel : c.oldPanel, f = this._super("select", b, {
                    tab: d.find(".ui-tabs-anchor")[0],
                    panel: e[0],
                    index: d.closest("li").index()
                })) : "activate" === a && c.newTab.length && (f = this._super("show", b, {
                    tab: c.newTab.find(".ui-tabs-anchor")[0],
                    panel: c.newPanel[0],
                    index: c.newTab.closest("li").index()
                })), f) : !1
            }
        }), a.widget("ui.tabs", a.ui.tabs, {
            select: function (a) {
                if (a = this._getIndex(a), -1 === a) {
                    if (!this.options.collapsible || -1 === this.options.selected)return;
                    a = this.options.selected
                }
                this.anchors.eq(a).trigger(this.options.event + this.eventNamespace)
            }
        }), function () {
            var b = 0;
            a.widget("ui.tabs", a.ui.tabs, {
                options: {cookie: null}, _create: function () {
                    var a, b = this.options;
                    null == b.active && b.cookie && (a = parseInt(this._cookie(), 10), -1 === a && (a = !1), b.active = a), this._super()
                }, _cookie: function (c) {
                    var d = [this.cookie || (this.cookie = this.options.cookie.name || "ui-tabs-" + ++b)];
                    return arguments.length && (d.push(c === !1 ? -1 : c), d.push(this.options.cookie)), a.cookie.apply(null, d)
                }, _refresh: function () {
                    this._super(), this.options.cookie && this._cookie(this.options.active, this.options.cookie)
                }, _eventHandler: function () {
                    this._superApply(arguments), this.options.cookie && this._cookie(this.options.active, this.options.cookie)
                }, _destroy: function () {
                    this._super(), this.options.cookie && this._cookie(null, this.options.cookie)
                }
            })
        }(), a.widget("ui.tabs", a.ui.tabs, {
            _trigger: function (b, c, d) {
                var e = a.extend({}, d);
                return "load" === b && (e.panel = e.panel[0], e.tab = e.tab.find(".ui-tabs-anchor")[0]), this._super(b, c, e)
            }
        }), a.widget("ui.tabs", a.ui.tabs, {
            options: {fx: null}, _getFx: function () {
                var b, c, d = this.options.fx;
                return d && (a.isArray(d) ? (b = d[0], c = d[1]) : b = c = d), d ? {show: c, hide: b} : null
            }, _toggle: function (a, b) {
                function c() {
                    e.running = !1, e._trigger("activate", a, b)
                }

                function d() {
                    b.newTab.closest("li").addClass("ui-tabs-active ui-state-active"), f.length && h.show ? f.animate(h.show, h.show.duration, function () {
                        c()
                    }) : (f.show(), c())
                }

                var e = this, f = b.newPanel, g = b.oldPanel, h = this._getFx();
                return h ? (e.running = !0, void(g.length && h.hide ? g.animate(h.hide, h.hide.duration, function () {
                    b.oldTab.closest("li").removeClass("ui-tabs-active ui-state-active"), d()
                }) : (b.oldTab.closest("li").removeClass("ui-tabs-active ui-state-active"), g.hide(), d()))) : this._super(a, b)
            }
        }))
    }(jQuery), function (a) {
        function b(b, c) {
            var d = (b.attr("aria-describedby") || "").split(/\s+/);
            d.push(c), b.data("ui-tooltip-id", c).attr("aria-describedby", a.trim(d.join(" ")))
        }

        function c(b) {
            var c = b.data("ui-tooltip-id"), d = (b.attr("aria-describedby") || "").split(/\s+/), e = a.inArray(c, d);
            -1 !== e && d.splice(e, 1), b.removeData("ui-tooltip-id"), d = a.trim(d.join(" ")), d ? b.attr("aria-describedby", d) : b.removeAttr("aria-describedby")
        }

        var d = 0;
        a.widget("ui.tooltip", {
            version: "1.9.2", options: {
                content: function () {
                    return a(this).attr("title")
                },
                hide: !0,
                items: "[title]:not([disabled])",
                position: {my: "left top+15", at: "left bottom", collision: "flipfit flip"},
                show: !0,
                tooltipClass: null,
                track: !1,
                close: null,
                open: null
            }, _create: function () {
                this._on({
                    mouseover: "open",
                    focusin: "open"
                }), this.tooltips = {}, this.parents = {}, this.options.disabled && this._disable()
            }, _setOption: function (b, c) {
                var d = this;
                return "disabled" === b ? (this[c ? "_disable" : "_enable"](), void(this.options[b] = c)) : (this._super(b, c), void("content" === b && a.each(this.tooltips, function (a, b) {
                    d._updateContent(b)
                })))
            }, _disable: function () {
                var b = this;
                a.each(this.tooltips, function (c, d) {
                    var e = a.Event("blur");
                    e.target = e.currentTarget = d[0], b.close(e, !0)
                }), this.element.find(this.options.items).andSelf().each(function () {
                    var b = a(this);
                    b.is("[title]") && b.data("ui-tooltip-title", b.attr("title")).attr("title", "")
                })
            }, _enable: function () {
                this.element.find(this.options.items).andSelf().each(function () {
                    var b = a(this);
                    b.data("ui-tooltip-title") && b.attr("title", b.data("ui-tooltip-title"))
                })
            }, open: function (b) {
                var c = this, d = a(b ? b.target : this.element).closest(this.options.items);
                d.length && !d.data("ui-tooltip-id") && (d.attr("title") && d.data("ui-tooltip-title", d.attr("title")), d.data("ui-tooltip-open", !0), b && "mouseover" === b.type && d.parents().each(function () {
                    var b, d = a(this);
                    d.data("ui-tooltip-open") && (b = a.Event("blur"), b.target = b.currentTarget = this, c.close(b, !0)), d.attr("title") && (d.uniqueId(), c.parents[this.id] = {
                        element: this,
                        title: d.attr("title")
                    }, d.attr("title", ""))
                }), this._updateContent(d, b))
            }, _updateContent: function (a, b) {
                var c, d = this.options.content, e = this, f = b ? b.type : null;
                return "string" == typeof d ? this._open(b, a, d) : (c = d.call(a[0], function (c) {
                    a.data("ui-tooltip-open") && e._delay(function () {
                        b && (b.type = f), this._open(b, a, c)
                    })
                }), void(c && this._open(b, a, c)))
            }, _open: function (c, d, e) {
                function f(a) {
                    j.of = a, g.is(":hidden") || g.position(j)
                }

                var g, h, i, j = a.extend({}, this.options.position);
                if (e) {
                    if (g = this._find(d), g.length)return void g.find(".ui-tooltip-content").html(e);
                    d.is("[title]") && (c && "mouseover" === c.type ? d.attr("title", "") : d.removeAttr("title")), g = this._tooltip(d), b(d, g.attr("id")), g.find(".ui-tooltip-content").html(e), this.options.track && c && /^mouse/.test(c.type) ? (this._on(this.document, {mousemove: f}), f(c)) : g.position(a.extend({of: d}, this.options.position)), g.hide(), this._show(g, this.options.show), this.options.show && this.options.show.delay && (i = setInterval(function () {
                        g.is(":visible") && (f(j.of), clearInterval(i))
                    }, a.fx.interval)), this._trigger("open", c, {tooltip: g}), h = {
                        keyup: function (b) {
                            if (b.keyCode === a.ui.keyCode.ESCAPE) {
                                var c = a.Event(b);
                                c.currentTarget = d[0], this.close(c, !0)
                            }
                        }, remove: function () {
                            this._removeTooltip(g)
                        }
                    }, c && "mouseover" !== c.type || (h.mouseleave = "close"), c && "focusin" !== c.type || (h.focusout = "close"), this._on(!0, d, h)
                }
            }, close: function (b) {
                var d = this, e = a(b ? b.currentTarget : this.element), f = this._find(e);
                this.closing || (e.data("ui-tooltip-title") && e.attr("title", e.data("ui-tooltip-title")), c(e), f.stop(!0), this._hide(f, this.options.hide, function () {
                    d._removeTooltip(a(this))
                }), e.removeData("ui-tooltip-open"), this._off(e, "mouseleave focusout keyup"), e[0] !== this.element[0] && this._off(e, "remove"), this._off(this.document, "mousemove"), b && "mouseleave" === b.type && a.each(this.parents, function (b, c) {
                    a(c.element).attr("title", c.title), delete d.parents[b]
                }), this.closing = !0, this._trigger("close", b, {tooltip: f}), this.closing = !1)
            }, _tooltip: function (b) {
                var c = "ui-tooltip-" + d++, e = a("<div>").attr({
                    id: c,
                    role: "tooltip"
                }).addClass("ui-tooltip ui-widget ui-corner-all ui-widget-content " + (this.options.tooltipClass || ""));
                return a("<div>").addClass("ui-tooltip-content").appendTo(e), e.appendTo(this.document[0].body), a.fn.bgiframe && e.bgiframe(), this.tooltips[c] = b, e
            }, _find: function (b) {
                var c = b.data("ui-tooltip-id");
                return c ? a("#" + c) : a()
            }, _removeTooltip: function (a) {
                a.remove(), delete this.tooltips[a.attr("id")]
            }, _destroy: function () {
                var b = this;
                a.each(this.tooltips, function (c, d) {
                    var e = a.Event("blur");
                    e.target = e.currentTarget = d[0], b.close(e, !0), a("#" + c).remove(), d.data("ui-tooltip-title") && (d.attr("title", d.data("ui-tooltip-title")), d.removeData("ui-tooltip-title"))
                })
            }
        })
    }(jQuery), define("jqueryui", ["jquery"], function () {
    }), require.config({
        urlArgs: "bust=fes0720a",
        baseUrl: "static/scripts/bower_components",
        paths: {
            base: "../base",
            config: "../config",
            jquery: "jquery/dist/jquery",
            jqueryui: "jqueryui/ui/jquery-ui",
            underscore: "underscore/underscore",
            backbone: "backbone/backbone",
            handlebars: "handlebars/handlebars",
            htmlTemplate: "../template"
        },
        shim: {
            jquery: {exports: "$"},
            base: {deps: ["config", "jquery"], exports: "Base"},
            jqueryui: {deps: ["jquery"]},
            underscore: {exports: "_"},
            backbone: {deps: ["underscore"], exports: "Backbone"},
            htmlTemplate: {deps: ["handlebars"]}
        }
    }), define("../index/app", ["base", "config", "jquery", "jqueryui"], function (a, b, c) {
        function d() {
            return g.GetValue(), g.ValidateInput() ? void c.ajax({
                type: "POST",
                url: a.dataUri.user + "login",
                dataType: "json",
                data: g.userInput,
                success: function (d) {
                    null != a.urlParam("ref") ? window.location.href = decodeURIComponent(a.urlParam("ref")) : c.ajax({
                        type: "GET",
                        url: a.dataUri.user + "user/cu",
                        dataType: "json",
                        success: function (a) {
                            window.location.href = b.APP.ZONE
                        },
                        error: function (a, b, c) {
                        }
                    })
                },
                error: function (a, b, c) {
                    504 === a.status ? g.ShowMessage(!0, "登录失败，请稍候再试") : 500 === a.status ? g.ShowMessage(!0, "用户名或密码错误") : g.ShowMessage(!0, "服务器异常，请稍候")
                }
            }) : !1
        }

        function e() {
            c.ajax({
                type: "POST", url: a.dataUri.user + "user/logout", success: function (b) {
                    a.logout(), c("#logout-panel").dialog({
                        modal: !0,
                        buttons: [{
                            id: "logout-msg", text: "关闭(3)", click: function () {
                                c(this).dialog("close")
                            }, dialogClass: "no-close", draggable: !1
                        }],
                        open: function (a, b) {
                            var d = this, e = 2, f = setInterval(function () {
                                c("#logout-msg").text("关闭(" + e-- + ")"), 0 > e && (clearInterval(f), c(d).dialog("close"))
                            }, 1e3)
                        }
                    })
                }, error: function (a, b, c) {
                    504 === a.status || 500 === a.status
                }
            })
        }

        function f() {
            var b = c.trim(c("#user-truename").val()), d = c.trim(c("#user-idno").val());
            if (!b || !d)return void alert("请输入姓名和身份证号");
            c.ajax({
                type: "POST",
                url: a.dataUri.user + "nolog/findaccount",
                data: {truename: b, idno: d},
                success: function (a) {
                    alert("请牢记您的用户名：" + a), c("#username").val(a), c("#find-loginid-panel").dialog("close"), c("#username").animate({
                        "border-color": "#ff0000",
                        "background-color": "#fefea4"
                    }).animate({
                        "border-color": "#c1c1c1",
                        "background-color": "#fff"
                    }, 3e3), c("#userpd").val("").focus()
                },
                error: function (a) {
                    a && alert("未能找到相关的用户登录名，请核对信息后重试")
                }
            })
        }

        var g = {
            userInput: {loginid: "", password: ""}, GetValue: function () {
                this.userInput.loginid = c.trim(c("#username").val()).toLowerCase(), this.userInput.password = c("#userpd").val()
            }, ValidateInput: function () {
                return null == this.userInput.loginid || "" == this.userInput.loginid ? (this.ShowMessage(!0, "登录名不能为空！"), c("#username").focus(), !1) : null == this.userInput.password || "" == this.userInput.password ? (this.ShowMessage(!0, "密码不能为空！"), c("#userpd").focus(), !1) : (this.ShowMessage(!1, "！"), !0)
            }, ShowMessage: function (a, b) {
                a ? (c("#errmsg span").html(b), c(".mybox #errmsg").show()) : (c("#errmsg span").html(""), c(".mybox .lgtitle").show())
            }
        };
        c("#btn-login").on("click", d), c("#btn_1s1k").mouseover(function (a) {
            c(a.currentTarget).find(".popdiv").show()
        }), c("#btn_1s1k").mouseout(function (a) {
            c(a.currentTarget).find(".popdiv").hide()
        }), c("#username").on("keydown", function (a) {
            return 13 == a.keyCode ? (d(), !1) : void 0
        }), c("#userpd").on("keydown", function (a) {
            return 13 == a.keyCode ? (d(), !1) : void 0
        }), c("#user-truename").on("keydown", function (a) {
            return 13 == a.keyCode ? (f(), !1) : void 0
        }), c("#user-idno").on("keydown", function (a) {
            return 13 == a.keyCode ? (f(), !1) : void 0
        }), c("#btn-find-loginid").click(function () {
            c("#find-loginid-panel").dialog({
                modal: !0, buttons: [{
                    text: "查询", click: function () {
                        f()
                    }, draggable: !1, open: function () {
                        c("#user-truename").val(""), c("#user-idno").val("")
                    }
                }]
            })
        }), c("#modify-loginid").on("click", function (b) {
            c("#change-loginid-panel").dialog({
                modal: !0, buttons: [{
                    text: "确认修改", click: function () {
                        var b = c.trim(c("#new-loginid").val()), d = c.trim(c("#new-loginid-r").val());
                        return b = c.trim(b), b && d ? /^[a-zA-Z]{1}[a-zA-Z0-9]{4,19}$/.test(b) ? b != d ? void alert("两次输入的帐户名不一致") : void c.ajax({
                            type: "GET",
                            async: !1,
                            url: a.dataUri.user + "user/cu?full=true",
                            dataType: "json",
                            success: function (d) {
                                window.user = d, c.ajax({
                                    type: "POST",
                                    url: a.dataUri.user + "user/updateusername",
                                    data: {username: window.user.loginName, newusername: b},
                                    dataType: "json",
                                    success: function (a) {
                                        alert("修改帐户名成功，您需要进行重新登录。"), window.location.href = "//id.qlteacher.com?do=logout"
                                    },
                                    error: function (a) {
                                        alert(a.responseJSON.message)
                                    }
                                })
                            },
                            error: function (a, b, c) {
                                alert("加载用户完整数据异常！请联系管理员")
                            }
                        }) : void alert("必须是以字母开头，不区分大小写的任意字母数字组合，长度在5-20位") : void alert("请输入两遍您要修改成的帐户名")
                    }, dialogClass: "no-close", draggable: !1, open: function () {
                        c("#new-loginid").val("")
                    }
                }]
            })
        }), c("#modify-password").on("click", function (b) {
            c("#change-password-panel").dialog({
                modal: !0, buttons: [{
                    text: "确认修改", click: function () {
                        var b = c.trim(c("#o-password").val()), d = c.trim(c("#n-password").val()), e = c.trim(c("#r-password").val());
                        return b && d && e ? void(d.length < 3 || d.length > 20 ? alert("新密码的长度介于3-20字符之间") : d != e ? alert("两次输入的新密码必须相同") : c.ajax({
                            type: "POST",
                            url: a.dataUri.user + "user/updatepwd",
                            data: {userid: window.user.id, newpwd: d, oldpwd: b},
                            dataType: "json",
                            success: function (a) {
                                alert("修改密码成功，您需要进行重新登录。"), window.location.href = "//id.qlteacher.com?do=logout"
                            },
                            error: function (a) {
                                alert(a.responseJSON.message)
                            }
                        })) : void alert("所有字段不能为空")
                    }, dialogClass: "no-close", draggable: !1, open: function () {
                        c("#o-password").val(), c("#n-password").val(), c("#r-password").val()
                    }
                }]
            })
        }), c(function () {
            return c("#current-year").html((new Date).getFullYear()), "logout" == a.urlParam("do") ? (e(), c("#unlogin").show(), c("#loggedin").hide(), c("#logining").hide(), null) : (a.isLogin() ? (c.ajax({
                type: "GET",
                url: a.dataUri.user + "user/cu",
                dataType: "json",
                success: function (b) {
                    c("#cu-name").html(b.name), window.user = b, c("#user-avatar").attr("src", a.avatar(b.id).small)
                },
                error: function (a, b, c) {
                }
            }), c("#unlogin").hide(), c("#loggedin").show(), c("#logining").hide()) : (c("#unlogin").show(), c("#loggedin").hide(), c("#logining").hide()), g.ShowMessage(!1, ""), void c("#username").focus())
        })
    }), require(["../index/app"])
}();