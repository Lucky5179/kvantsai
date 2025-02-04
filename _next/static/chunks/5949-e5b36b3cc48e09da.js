(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [5949],
  {
    59196: function (e, t) {
      "use strict";
      (t.byteLength = function (e) {
        var t = u(e),
          r = t[0],
          n = t[1];
        return ((r + n) * 3) / 4 - n;
      }),
        (t.toByteArray = function (e) {
          var t,
            r,
            i = u(e),
            s = i[0],
            a = i[1],
            c = new o(((s + a) * 3) / 4 - a),
            l = 0,
            f = a > 0 ? s - 4 : s;
          for (r = 0; r < f; r += 4)
            (t =
              (n[e.charCodeAt(r)] << 18) |
              (n[e.charCodeAt(r + 1)] << 12) |
              (n[e.charCodeAt(r + 2)] << 6) |
              n[e.charCodeAt(r + 3)]),
              (c[l++] = (t >> 16) & 255),
              (c[l++] = (t >> 8) & 255),
              (c[l++] = 255 & t);
          return (
            2 === a &&
              ((t = (n[e.charCodeAt(r)] << 2) | (n[e.charCodeAt(r + 1)] >> 4)),
              (c[l++] = 255 & t)),
            1 === a &&
              ((t =
                (n[e.charCodeAt(r)] << 10) |
                (n[e.charCodeAt(r + 1)] << 4) |
                (n[e.charCodeAt(r + 2)] >> 2)),
              (c[l++] = (t >> 8) & 255),
              (c[l++] = 255 & t)),
            c
          );
        }),
        (t.fromByteArray = function (e) {
          for (
            var t, n = e.length, o = n % 3, i = [], s = 0, a = n - o;
            s < a;
            s += 16383
          )
            i.push(
              (function (e, t, n) {
                for (var o, i = [], s = t; s < n; s += 3)
                  i.push(
                    r[
                      ((o =
                        ((e[s] << 16) & 16711680) +
                        ((e[s + 1] << 8) & 65280) +
                        (255 & e[s + 2])) >>
                        18) &
                        63
                    ] +
                      r[(o >> 12) & 63] +
                      r[(o >> 6) & 63] +
                      r[63 & o]
                  );
                return i.join("");
              })(e, s, s + 16383 > a ? a : s + 16383)
            );
          return (
            1 === o
              ? i.push(r[(t = e[n - 1]) >> 2] + r[(t << 4) & 63] + "==")
              : 2 === o &&
                i.push(
                  r[(t = (e[n - 2] << 8) + e[n - 1]) >> 10] +
                    r[(t >> 4) & 63] +
                    r[(t << 2) & 63] +
                    "="
                ),
            i.join("")
          );
        });
      for (
        var r = [],
          n = [],
          o = "undefined" != typeof Uint8Array ? Uint8Array : Array,
          i =
            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
          s = 0,
          a = i.length;
        s < a;
        ++s
      )
        (r[s] = i[s]), (n[i.charCodeAt(s)] = s);
      function u(e) {
        var t = e.length;
        if (t % 4 > 0)
          throw Error("Invalid string. Length must be a multiple of 4");
        var r = e.indexOf("=");
        -1 === r && (r = t);
        var n = r === t ? 0 : 4 - (r % 4);
        return [r, n];
      }
      (n["-".charCodeAt(0)] = 62), (n["_".charCodeAt(0)] = 63);
    },
    82957: function (e, t, r) {
      "use strict";
      var n = r(59196),
        o = r(68848),
        i =
          "function" == typeof Symbol && "function" == typeof Symbol.for
            ? Symbol.for("nodejs.util.inspect.custom")
            : null;
      function s(e) {
        if (e > 2147483647)
          throw RangeError(
            'The value "' + e + '" is invalid for option "size"'
          );
        var t = new Uint8Array(e);
        return Object.setPrototypeOf(t, a.prototype), t;
      }
      function a(e, t, r) {
        if ("number" == typeof e) {
          if ("string" == typeof t)
            throw TypeError(
              'The "string" argument must be of type string. Received type number'
            );
          return l(e);
        }
        return u(e, t, r);
      }
      function u(e, t, r) {
        if ("string" == typeof e)
          return (function (e, t) {
            if (
              (("string" != typeof t || "" === t) && (t = "utf8"),
              !a.isEncoding(t))
            )
              throw TypeError("Unknown encoding: " + t);
            var r = 0 | d(e, t),
              n = s(r),
              o = n.write(e, t);
            return o !== r && (n = n.slice(0, o)), n;
          })(e, t);
        if (ArrayBuffer.isView(e))
          return (function (e) {
            if (R(e, Uint8Array)) {
              var t = new Uint8Array(e);
              return h(t.buffer, t.byteOffset, t.byteLength);
            }
            return f(e);
          })(e);
        if (null == e)
          throw TypeError(
            "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " +
              typeof e
          );
        if (
          R(e, ArrayBuffer) ||
          (e && R(e.buffer, ArrayBuffer)) ||
          ("undefined" != typeof SharedArrayBuffer &&
            (R(e, SharedArrayBuffer) || (e && R(e.buffer, SharedArrayBuffer))))
        )
          return h(e, t, r);
        if ("number" == typeof e)
          throw TypeError(
            'The "value" argument must not be of type number. Received type number'
          );
        var n = e.valueOf && e.valueOf();
        if (null != n && n !== e) return a.from(n, t, r);
        var o = (function (e) {
          if (a.isBuffer(e)) {
            var t,
              r = 0 | p(e.length),
              n = s(r);
            return 0 === n.length || e.copy(n, 0, 0, r), n;
          }
          return void 0 !== e.length
            ? "number" != typeof e.length || (t = e.length) != t
              ? s(0)
              : f(e)
            : "Buffer" === e.type && Array.isArray(e.data)
            ? f(e.data)
            : void 0;
        })(e);
        if (o) return o;
        if (
          "undefined" != typeof Symbol &&
          null != Symbol.toPrimitive &&
          "function" == typeof e[Symbol.toPrimitive]
        )
          return a.from(e[Symbol.toPrimitive]("string"), t, r);
        throw TypeError(
          "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " +
            typeof e
        );
      }
      function c(e) {
        if ("number" != typeof e)
          throw TypeError('"size" argument must be of type number');
        if (e < 0)
          throw RangeError(
            'The value "' + e + '" is invalid for option "size"'
          );
      }
      function l(e) {
        return c(e), s(e < 0 ? 0 : 0 | p(e));
      }
      function f(e) {
        for (
          var t = e.length < 0 ? 0 : 0 | p(e.length), r = s(t), n = 0;
          n < t;
          n += 1
        )
          r[n] = 255 & e[n];
        return r;
      }
      function h(e, t, r) {
        var n;
        if (t < 0 || e.byteLength < t)
          throw RangeError('"offset" is outside of buffer bounds');
        if (e.byteLength < t + (r || 0))
          throw RangeError('"length" is outside of buffer bounds');
        return (
          Object.setPrototypeOf(
            (n =
              void 0 === t && void 0 === r
                ? new Uint8Array(e)
                : void 0 === r
                ? new Uint8Array(e, t)
                : new Uint8Array(e, t, r)),
            a.prototype
          ),
          n
        );
      }
      function p(e) {
        if (e >= 2147483647)
          throw RangeError(
            "Attempt to allocate Buffer larger than maximum size: 0x7fffffff bytes"
          );
        return 0 | e;
      }
      function d(e, t) {
        if (a.isBuffer(e)) return e.length;
        if (ArrayBuffer.isView(e) || R(e, ArrayBuffer)) return e.byteLength;
        if ("string" != typeof e)
          throw TypeError(
            'The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' +
              typeof e
          );
        var r = e.length,
          n = arguments.length > 2 && !0 === arguments[2];
        if (!n && 0 === r) return 0;
        for (var o = !1; ; )
          switch (t) {
            case "ascii":
            case "latin1":
            case "binary":
              return r;
            case "utf8":
            case "utf-8":
              return P(e).length;
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
              return 2 * r;
            case "hex":
              return r >>> 1;
            case "base64":
              return j(e).length;
            default:
              if (o) return n ? -1 : P(e).length;
              (t = ("" + t).toLowerCase()), (o = !0);
          }
      }
      function y(e, t, r) {
        var o,
          i,
          s = !1;
        if (
          ((void 0 === t || t < 0) && (t = 0),
          t > this.length ||
            ((void 0 === r || r > this.length) && (r = this.length),
            r <= 0 || (r >>>= 0) <= (t >>>= 0)))
        )
          return "";
        for (e || (e = "utf8"); ; )
          switch (e) {
            case "hex":
              return (function (e, t, r) {
                var n = e.length;
                (!t || t < 0) && (t = 0), (!r || r < 0 || r > n) && (r = n);
                for (var o = "", i = t; i < r; ++i) o += A[e[i]];
                return o;
              })(this, t, r);
            case "utf8":
            case "utf-8":
              return v(this, t, r);
            case "ascii":
              return (function (e, t, r) {
                var n = "";
                r = Math.min(e.length, r);
                for (var o = t; o < r; ++o)
                  n += String.fromCharCode(127 & e[o]);
                return n;
              })(this, t, r);
            case "latin1":
            case "binary":
              return (function (e, t, r) {
                var n = "";
                r = Math.min(e.length, r);
                for (var o = t; o < r; ++o) n += String.fromCharCode(e[o]);
                return n;
              })(this, t, r);
            case "base64":
              return (
                (o = t),
                (i = r),
                0 === o && i === this.length
                  ? n.fromByteArray(this)
                  : n.fromByteArray(this.slice(o, i))
              );
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
              return (function (e, t, r) {
                for (
                  var n = e.slice(t, r), o = "", i = 0;
                  i < n.length - 1;
                  i += 2
                )
                  o += String.fromCharCode(n[i] + 256 * n[i + 1]);
                return o;
              })(this, t, r);
            default:
              if (s) throw TypeError("Unknown encoding: " + e);
              (e = (e + "").toLowerCase()), (s = !0);
          }
      }
      function g(e, t, r) {
        var n = e[t];
        (e[t] = e[r]), (e[r] = n);
      }
      function m(e, t, r, n, o) {
        var i;
        if (0 === e.length) return -1;
        if (
          ("string" == typeof r
            ? ((n = r), (r = 0))
            : r > 2147483647
            ? (r = 2147483647)
            : r < -2147483648 && (r = -2147483648),
          (i = r = +r) != i && (r = o ? 0 : e.length - 1),
          r < 0 && (r = e.length + r),
          r >= e.length)
        ) {
          if (o) return -1;
          r = e.length - 1;
        } else if (r < 0) {
          if (!o) return -1;
          r = 0;
        }
        if (("string" == typeof t && (t = a.from(t, n)), a.isBuffer(t)))
          return 0 === t.length ? -1 : b(e, t, r, n, o);
        if ("number" == typeof t)
          return ((t &= 255), "function" == typeof Uint8Array.prototype.indexOf)
            ? o
              ? Uint8Array.prototype.indexOf.call(e, t, r)
              : Uint8Array.prototype.lastIndexOf.call(e, t, r)
            : b(e, [t], r, n, o);
        throw TypeError("val must be string, number or Buffer");
      }
      function b(e, t, r, n, o) {
        var i,
          s = 1,
          a = e.length,
          u = t.length;
        if (
          void 0 !== n &&
          ("ucs2" === (n = String(n).toLowerCase()) ||
            "ucs-2" === n ||
            "utf16le" === n ||
            "utf-16le" === n)
        ) {
          if (e.length < 2 || t.length < 2) return -1;
          (s = 2), (a /= 2), (u /= 2), (r /= 2);
        }
        function c(e, t) {
          return 1 === s ? e[t] : e.readUInt16BE(t * s);
        }
        if (o) {
          var l = -1;
          for (i = r; i < a; i++)
            if (c(e, i) === c(t, -1 === l ? 0 : i - l)) {
              if ((-1 === l && (l = i), i - l + 1 === u)) return l * s;
            } else -1 !== l && (i -= i - l), (l = -1);
        } else
          for (r + u > a && (r = a - u), i = r; i >= 0; i--) {
            for (var f = !0, h = 0; h < u; h++)
              if (c(e, i + h) !== c(t, h)) {
                f = !1;
                break;
              }
            if (f) return i;
          }
        return -1;
      }
      function v(e, t, r) {
        r = Math.min(e.length, r);
        for (var n = [], o = t; o < r; ) {
          var i,
            s,
            a,
            u,
            c = e[o],
            l = null,
            f = c > 239 ? 4 : c > 223 ? 3 : c > 191 ? 2 : 1;
          if (o + f <= r)
            switch (f) {
              case 1:
                c < 128 && (l = c);
                break;
              case 2:
                (192 & (i = e[o + 1])) == 128 &&
                  (u = ((31 & c) << 6) | (63 & i)) > 127 &&
                  (l = u);
                break;
              case 3:
                (i = e[o + 1]),
                  (s = e[o + 2]),
                  (192 & i) == 128 &&
                    (192 & s) == 128 &&
                    (u = ((15 & c) << 12) | ((63 & i) << 6) | (63 & s)) >
                      2047 &&
                    (u < 55296 || u > 57343) &&
                    (l = u);
                break;
              case 4:
                (i = e[o + 1]),
                  (s = e[o + 2]),
                  (a = e[o + 3]),
                  (192 & i) == 128 &&
                    (192 & s) == 128 &&
                    (192 & a) == 128 &&
                    (u =
                      ((15 & c) << 18) |
                      ((63 & i) << 12) |
                      ((63 & s) << 6) |
                      (63 & a)) > 65535 &&
                    u < 1114112 &&
                    (l = u);
            }
          null === l
            ? ((l = 65533), (f = 1))
            : l > 65535 &&
              ((l -= 65536),
              n.push(((l >>> 10) & 1023) | 55296),
              (l = 56320 | (1023 & l))),
            n.push(l),
            (o += f);
        }
        return (function (e) {
          var t = e.length;
          if (t <= 4096) return String.fromCharCode.apply(String, e);
          for (var r = "", n = 0; n < t; )
            r += String.fromCharCode.apply(String, e.slice(n, (n += 4096)));
          return r;
        })(n);
      }
      function w(e, t, r) {
        if (e % 1 != 0 || e < 0) throw RangeError("offset is not uint");
        if (e + t > r)
          throw RangeError("Trying to access beyond buffer length");
      }
      function _(e, t, r, n, o, i) {
        if (!a.isBuffer(e))
          throw TypeError('"buffer" argument must be a Buffer instance');
        if (t > o || t < i)
          throw RangeError('"value" argument is out of bounds');
        if (r + n > e.length) throw RangeError("Index out of range");
      }
      function x(e, t, r, n, o, i) {
        if (r + n > e.length || r < 0) throw RangeError("Index out of range");
      }
      function E(e, t, r, n, i) {
        return (
          (t = +t),
          (r >>>= 0),
          i || x(e, t, r, 4, 34028234663852886e22, -34028234663852886e22),
          o.write(e, t, r, n, 23, 4),
          r + 4
        );
      }
      function O(e, t, r, n, i) {
        return (
          (t = +t),
          (r >>>= 0),
          i || x(e, t, r, 8, 17976931348623157e292, -17976931348623157e292),
          o.write(e, t, r, n, 52, 8),
          r + 8
        );
      }
      (t.Buffer = a),
        (t.SlowBuffer = function (e) {
          return +e != e && (e = 0), a.alloc(+e);
        }),
        (t.INSPECT_MAX_BYTES = 50),
        (t.kMaxLength = 2147483647),
        (a.TYPED_ARRAY_SUPPORT = (function () {
          try {
            var e = new Uint8Array(1),
              t = {
                foo: function () {
                  return 42;
                },
              };
            return (
              Object.setPrototypeOf(t, Uint8Array.prototype),
              Object.setPrototypeOf(e, t),
              42 === e.foo()
            );
          } catch (e) {
            return !1;
          }
        })()),
        a.TYPED_ARRAY_SUPPORT ||
          "undefined" == typeof console ||
          "function" != typeof console.error ||
          console.error(
            "This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."
          ),
        Object.defineProperty(a.prototype, "parent", {
          enumerable: !0,
          get: function () {
            if (a.isBuffer(this)) return this.buffer;
          },
        }),
        Object.defineProperty(a.prototype, "offset", {
          enumerable: !0,
          get: function () {
            if (a.isBuffer(this)) return this.byteOffset;
          },
        }),
        (a.poolSize = 8192),
        (a.from = function (e, t, r) {
          return u(e, t, r);
        }),
        Object.setPrototypeOf(a.prototype, Uint8Array.prototype),
        Object.setPrototypeOf(a, Uint8Array),
        (a.alloc = function (e, t, r) {
          return (c(e), e <= 0)
            ? s(e)
            : void 0 !== t
            ? "string" == typeof r
              ? s(e).fill(t, r)
              : s(e).fill(t)
            : s(e);
        }),
        (a.allocUnsafe = function (e) {
          return l(e);
        }),
        (a.allocUnsafeSlow = function (e) {
          return l(e);
        }),
        (a.isBuffer = function (e) {
          return null != e && !0 === e._isBuffer && e !== a.prototype;
        }),
        (a.compare = function (e, t) {
          if (
            (R(e, Uint8Array) && (e = a.from(e, e.offset, e.byteLength)),
            R(t, Uint8Array) && (t = a.from(t, t.offset, t.byteLength)),
            !a.isBuffer(e) || !a.isBuffer(t))
          )
            throw TypeError(
              'The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array'
            );
          if (e === t) return 0;
          for (
            var r = e.length, n = t.length, o = 0, i = Math.min(r, n);
            o < i;
            ++o
          )
            if (e[o] !== t[o]) {
              (r = e[o]), (n = t[o]);
              break;
            }
          return r < n ? -1 : n < r ? 1 : 0;
        }),
        (a.isEncoding = function (e) {
          switch (String(e).toLowerCase()) {
            case "hex":
            case "utf8":
            case "utf-8":
            case "ascii":
            case "latin1":
            case "binary":
            case "base64":
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
              return !0;
            default:
              return !1;
          }
        }),
        (a.concat = function (e, t) {
          if (!Array.isArray(e))
            throw TypeError('"list" argument must be an Array of Buffers');
          if (0 === e.length) return a.alloc(0);
          if (void 0 === t)
            for (r = 0, t = 0; r < e.length; ++r) t += e[r].length;
          var r,
            n = a.allocUnsafe(t),
            o = 0;
          for (r = 0; r < e.length; ++r) {
            var i = e[r];
            if (R(i, Uint8Array))
              o + i.length > n.length
                ? a.from(i).copy(n, o)
                : Uint8Array.prototype.set.call(n, i, o);
            else if (a.isBuffer(i)) i.copy(n, o);
            else throw TypeError('"list" argument must be an Array of Buffers');
            o += i.length;
          }
          return n;
        }),
        (a.byteLength = d),
        (a.prototype._isBuffer = !0),
        (a.prototype.swap16 = function () {
          var e = this.length;
          if (e % 2 != 0)
            throw RangeError("Buffer size must be a multiple of 16-bits");
          for (var t = 0; t < e; t += 2) g(this, t, t + 1);
          return this;
        }),
        (a.prototype.swap32 = function () {
          var e = this.length;
          if (e % 4 != 0)
            throw RangeError("Buffer size must be a multiple of 32-bits");
          for (var t = 0; t < e; t += 4)
            g(this, t, t + 3), g(this, t + 1, t + 2);
          return this;
        }),
        (a.prototype.swap64 = function () {
          var e = this.length;
          if (e % 8 != 0)
            throw RangeError("Buffer size must be a multiple of 64-bits");
          for (var t = 0; t < e; t += 8)
            g(this, t, t + 7),
              g(this, t + 1, t + 6),
              g(this, t + 2, t + 5),
              g(this, t + 3, t + 4);
          return this;
        }),
        (a.prototype.toString = function () {
          var e = this.length;
          return 0 === e
            ? ""
            : 0 == arguments.length
            ? v(this, 0, e)
            : y.apply(this, arguments);
        }),
        (a.prototype.toLocaleString = a.prototype.toString),
        (a.prototype.equals = function (e) {
          if (!a.isBuffer(e)) throw TypeError("Argument must be a Buffer");
          return this === e || 0 === a.compare(this, e);
        }),
        (a.prototype.inspect = function () {
          var e = "",
            r = t.INSPECT_MAX_BYTES;
          return (
            (e = this.toString("hex", 0, r)
              .replace(/(.{2})/g, "$1 ")
              .trim()),
            this.length > r && (e += " ... "),
            "<Buffer " + e + ">"
          );
        }),
        i && (a.prototype[i] = a.prototype.inspect),
        (a.prototype.compare = function (e, t, r, n, o) {
          if (
            (R(e, Uint8Array) && (e = a.from(e, e.offset, e.byteLength)),
            !a.isBuffer(e))
          )
            throw TypeError(
              'The "target" argument must be one of type Buffer or Uint8Array. Received type ' +
                typeof e
            );
          if (
            (void 0 === t && (t = 0),
            void 0 === r && (r = e ? e.length : 0),
            void 0 === n && (n = 0),
            void 0 === o && (o = this.length),
            t < 0 || r > e.length || n < 0 || o > this.length)
          )
            throw RangeError("out of range index");
          if (n >= o && t >= r) return 0;
          if (n >= o) return -1;
          if (t >= r) return 1;
          if (((t >>>= 0), (r >>>= 0), (n >>>= 0), (o >>>= 0), this === e))
            return 0;
          for (
            var i = o - n,
              s = r - t,
              u = Math.min(i, s),
              c = this.slice(n, o),
              l = e.slice(t, r),
              f = 0;
            f < u;
            ++f
          )
            if (c[f] !== l[f]) {
              (i = c[f]), (s = l[f]);
              break;
            }
          return i < s ? -1 : s < i ? 1 : 0;
        }),
        (a.prototype.includes = function (e, t, r) {
          return -1 !== this.indexOf(e, t, r);
        }),
        (a.prototype.indexOf = function (e, t, r) {
          return m(this, e, t, r, !0);
        }),
        (a.prototype.lastIndexOf = function (e, t, r) {
          return m(this, e, t, r, !1);
        }),
        (a.prototype.write = function (e, t, r, n) {
          if (void 0 === t) (n = "utf8"), (r = this.length), (t = 0);
          else if (void 0 === r && "string" == typeof t)
            (n = t), (r = this.length), (t = 0);
          else if (isFinite(t))
            (t >>>= 0),
              isFinite(r)
                ? ((r >>>= 0), void 0 === n && (n = "utf8"))
                : ((n = r), (r = void 0));
          else
            throw Error(
              "Buffer.write(string, encoding, offset[, length]) is no longer supported"
            );
          var o,
            i,
            s,
            a,
            u,
            c,
            l,
            f,
            h = this.length - t;
          if (
            ((void 0 === r || r > h) && (r = h),
            (e.length > 0 && (r < 0 || t < 0)) || t > this.length)
          )
            throw RangeError("Attempt to write outside buffer bounds");
          n || (n = "utf8");
          for (var p = !1; ; )
            switch (n) {
              case "hex":
                return (function (e, t, r, n) {
                  r = Number(r) || 0;
                  var o = e.length - r;
                  n ? (n = Number(n)) > o && (n = o) : (n = o);
                  var i = t.length;
                  n > i / 2 && (n = i / 2);
                  for (var s = 0; s < n; ++s) {
                    var a = parseInt(t.substr(2 * s, 2), 16);
                    if (a != a) break;
                    e[r + s] = a;
                  }
                  return s;
                })(this, e, t, r);
              case "utf8":
              case "utf-8":
                return (o = t), (i = r), S(P(e, this.length - o), this, o, i);
              case "ascii":
              case "latin1":
              case "binary":
                return (
                  (s = t),
                  (a = r),
                  S(
                    (function (e) {
                      for (var t = [], r = 0; r < e.length; ++r)
                        t.push(255 & e.charCodeAt(r));
                      return t;
                    })(e),
                    this,
                    s,
                    a
                  )
                );
              case "base64":
                return (u = t), (c = r), S(j(e), this, u, c);
              case "ucs2":
              case "ucs-2":
              case "utf16le":
              case "utf-16le":
                return (
                  (l = t),
                  (f = r),
                  S(
                    (function (e, t) {
                      for (
                        var r, n, o = [], i = 0;
                        i < e.length && !((t -= 2) < 0);
                        ++i
                      )
                        (n = (r = e.charCodeAt(i)) >> 8),
                          o.push(r % 256),
                          o.push(n);
                      return o;
                    })(e, this.length - l),
                    this,
                    l,
                    f
                  )
                );
              default:
                if (p) throw TypeError("Unknown encoding: " + n);
                (n = ("" + n).toLowerCase()), (p = !0);
            }
        }),
        (a.prototype.toJSON = function () {
          return {
            type: "Buffer",
            data: Array.prototype.slice.call(this._arr || this, 0),
          };
        }),
        (a.prototype.slice = function (e, t) {
          var r = this.length;
          (e = ~~e),
            (t = void 0 === t ? r : ~~t),
            e < 0 ? (e += r) < 0 && (e = 0) : e > r && (e = r),
            t < 0 ? (t += r) < 0 && (t = 0) : t > r && (t = r),
            t < e && (t = e);
          var n = this.subarray(e, t);
          return Object.setPrototypeOf(n, a.prototype), n;
        }),
        (a.prototype.readUintLE = a.prototype.readUIntLE =
          function (e, t, r) {
            (e >>>= 0), (t >>>= 0), r || w(e, t, this.length);
            for (var n = this[e], o = 1, i = 0; ++i < t && (o *= 256); )
              n += this[e + i] * o;
            return n;
          }),
        (a.prototype.readUintBE = a.prototype.readUIntBE =
          function (e, t, r) {
            (e >>>= 0), (t >>>= 0), r || w(e, t, this.length);
            for (var n = this[e + --t], o = 1; t > 0 && (o *= 256); )
              n += this[e + --t] * o;
            return n;
          }),
        (a.prototype.readUint8 = a.prototype.readUInt8 =
          function (e, t) {
            return (e >>>= 0), t || w(e, 1, this.length), this[e];
          }),
        (a.prototype.readUint16LE = a.prototype.readUInt16LE =
          function (e, t) {
            return (
              (e >>>= 0),
              t || w(e, 2, this.length),
              this[e] | (this[e + 1] << 8)
            );
          }),
        (a.prototype.readUint16BE = a.prototype.readUInt16BE =
          function (e, t) {
            return (
              (e >>>= 0),
              t || w(e, 2, this.length),
              (this[e] << 8) | this[e + 1]
            );
          }),
        (a.prototype.readUint32LE = a.prototype.readUInt32LE =
          function (e, t) {
            return (
              (e >>>= 0),
              t || w(e, 4, this.length),
              (this[e] | (this[e + 1] << 8) | (this[e + 2] << 16)) +
                16777216 * this[e + 3]
            );
          }),
        (a.prototype.readUint32BE = a.prototype.readUInt32BE =
          function (e, t) {
            return (
              (e >>>= 0),
              t || w(e, 4, this.length),
              16777216 * this[e] +
                ((this[e + 1] << 16) | (this[e + 2] << 8) | this[e + 3])
            );
          }),
        (a.prototype.readIntLE = function (e, t, r) {
          (e >>>= 0), (t >>>= 0), r || w(e, t, this.length);
          for (var n = this[e], o = 1, i = 0; ++i < t && (o *= 256); )
            n += this[e + i] * o;
          return n >= (o *= 128) && (n -= Math.pow(2, 8 * t)), n;
        }),
        (a.prototype.readIntBE = function (e, t, r) {
          (e >>>= 0), (t >>>= 0), r || w(e, t, this.length);
          for (var n = t, o = 1, i = this[e + --n]; n > 0 && (o *= 256); )
            i += this[e + --n] * o;
          return i >= (o *= 128) && (i -= Math.pow(2, 8 * t)), i;
        }),
        (a.prototype.readInt8 = function (e, t) {
          return ((e >>>= 0), t || w(e, 1, this.length), 128 & this[e])
            ? -((255 - this[e] + 1) * 1)
            : this[e];
        }),
        (a.prototype.readInt16LE = function (e, t) {
          (e >>>= 0), t || w(e, 2, this.length);
          var r = this[e] | (this[e + 1] << 8);
          return 32768 & r ? 4294901760 | r : r;
        }),
        (a.prototype.readInt16BE = function (e, t) {
          (e >>>= 0), t || w(e, 2, this.length);
          var r = this[e + 1] | (this[e] << 8);
          return 32768 & r ? 4294901760 | r : r;
        }),
        (a.prototype.readInt32LE = function (e, t) {
          return (
            (e >>>= 0),
            t || w(e, 4, this.length),
            this[e] |
              (this[e + 1] << 8) |
              (this[e + 2] << 16) |
              (this[e + 3] << 24)
          );
        }),
        (a.prototype.readInt32BE = function (e, t) {
          return (
            (e >>>= 0),
            t || w(e, 4, this.length),
            (this[e] << 24) |
              (this[e + 1] << 16) |
              (this[e + 2] << 8) |
              this[e + 3]
          );
        }),
        (a.prototype.readFloatLE = function (e, t) {
          return (
            (e >>>= 0), t || w(e, 4, this.length), o.read(this, e, !0, 23, 4)
          );
        }),
        (a.prototype.readFloatBE = function (e, t) {
          return (
            (e >>>= 0), t || w(e, 4, this.length), o.read(this, e, !1, 23, 4)
          );
        }),
        (a.prototype.readDoubleLE = function (e, t) {
          return (
            (e >>>= 0), t || w(e, 8, this.length), o.read(this, e, !0, 52, 8)
          );
        }),
        (a.prototype.readDoubleBE = function (e, t) {
          return (
            (e >>>= 0), t || w(e, 8, this.length), o.read(this, e, !1, 52, 8)
          );
        }),
        (a.prototype.writeUintLE = a.prototype.writeUIntLE =
          function (e, t, r, n) {
            if (((e = +e), (t >>>= 0), (r >>>= 0), !n)) {
              var o = Math.pow(2, 8 * r) - 1;
              _(this, e, t, r, o, 0);
            }
            var i = 1,
              s = 0;
            for (this[t] = 255 & e; ++s < r && (i *= 256); )
              this[t + s] = (e / i) & 255;
            return t + r;
          }),
        (a.prototype.writeUintBE = a.prototype.writeUIntBE =
          function (e, t, r, n) {
            if (((e = +e), (t >>>= 0), (r >>>= 0), !n)) {
              var o = Math.pow(2, 8 * r) - 1;
              _(this, e, t, r, o, 0);
            }
            var i = r - 1,
              s = 1;
            for (this[t + i] = 255 & e; --i >= 0 && (s *= 256); )
              this[t + i] = (e / s) & 255;
            return t + r;
          }),
        (a.prototype.writeUint8 = a.prototype.writeUInt8 =
          function (e, t, r) {
            return (
              (e = +e),
              (t >>>= 0),
              r || _(this, e, t, 1, 255, 0),
              (this[t] = 255 & e),
              t + 1
            );
          }),
        (a.prototype.writeUint16LE = a.prototype.writeUInt16LE =
          function (e, t, r) {
            return (
              (e = +e),
              (t >>>= 0),
              r || _(this, e, t, 2, 65535, 0),
              (this[t] = 255 & e),
              (this[t + 1] = e >>> 8),
              t + 2
            );
          }),
        (a.prototype.writeUint16BE = a.prototype.writeUInt16BE =
          function (e, t, r) {
            return (
              (e = +e),
              (t >>>= 0),
              r || _(this, e, t, 2, 65535, 0),
              (this[t] = e >>> 8),
              (this[t + 1] = 255 & e),
              t + 2
            );
          }),
        (a.prototype.writeUint32LE = a.prototype.writeUInt32LE =
          function (e, t, r) {
            return (
              (e = +e),
              (t >>>= 0),
              r || _(this, e, t, 4, 4294967295, 0),
              (this[t + 3] = e >>> 24),
              (this[t + 2] = e >>> 16),
              (this[t + 1] = e >>> 8),
              (this[t] = 255 & e),
              t + 4
            );
          }),
        (a.prototype.writeUint32BE = a.prototype.writeUInt32BE =
          function (e, t, r) {
            return (
              (e = +e),
              (t >>>= 0),
              r || _(this, e, t, 4, 4294967295, 0),
              (this[t] = e >>> 24),
              (this[t + 1] = e >>> 16),
              (this[t + 2] = e >>> 8),
              (this[t + 3] = 255 & e),
              t + 4
            );
          }),
        (a.prototype.writeIntLE = function (e, t, r, n) {
          if (((e = +e), (t >>>= 0), !n)) {
            var o = Math.pow(2, 8 * r - 1);
            _(this, e, t, r, o - 1, -o);
          }
          var i = 0,
            s = 1,
            a = 0;
          for (this[t] = 255 & e; ++i < r && (s *= 256); )
            e < 0 && 0 === a && 0 !== this[t + i - 1] && (a = 1),
              (this[t + i] = (((e / s) >> 0) - a) & 255);
          return t + r;
        }),
        (a.prototype.writeIntBE = function (e, t, r, n) {
          if (((e = +e), (t >>>= 0), !n)) {
            var o = Math.pow(2, 8 * r - 1);
            _(this, e, t, r, o - 1, -o);
          }
          var i = r - 1,
            s = 1,
            a = 0;
          for (this[t + i] = 255 & e; --i >= 0 && (s *= 256); )
            e < 0 && 0 === a && 0 !== this[t + i + 1] && (a = 1),
              (this[t + i] = (((e / s) >> 0) - a) & 255);
          return t + r;
        }),
        (a.prototype.writeInt8 = function (e, t, r) {
          return (
            (e = +e),
            (t >>>= 0),
            r || _(this, e, t, 1, 127, -128),
            e < 0 && (e = 255 + e + 1),
            (this[t] = 255 & e),
            t + 1
          );
        }),
        (a.prototype.writeInt16LE = function (e, t, r) {
          return (
            (e = +e),
            (t >>>= 0),
            r || _(this, e, t, 2, 32767, -32768),
            (this[t] = 255 & e),
            (this[t + 1] = e >>> 8),
            t + 2
          );
        }),
        (a.prototype.writeInt16BE = function (e, t, r) {
          return (
            (e = +e),
            (t >>>= 0),
            r || _(this, e, t, 2, 32767, -32768),
            (this[t] = e >>> 8),
            (this[t + 1] = 255 & e),
            t + 2
          );
        }),
        (a.prototype.writeInt32LE = function (e, t, r) {
          return (
            (e = +e),
            (t >>>= 0),
            r || _(this, e, t, 4, 2147483647, -2147483648),
            (this[t] = 255 & e),
            (this[t + 1] = e >>> 8),
            (this[t + 2] = e >>> 16),
            (this[t + 3] = e >>> 24),
            t + 4
          );
        }),
        (a.prototype.writeInt32BE = function (e, t, r) {
          return (
            (e = +e),
            (t >>>= 0),
            r || _(this, e, t, 4, 2147483647, -2147483648),
            e < 0 && (e = 4294967295 + e + 1),
            (this[t] = e >>> 24),
            (this[t + 1] = e >>> 16),
            (this[t + 2] = e >>> 8),
            (this[t + 3] = 255 & e),
            t + 4
          );
        }),
        (a.prototype.writeFloatLE = function (e, t, r) {
          return E(this, e, t, !0, r);
        }),
        (a.prototype.writeFloatBE = function (e, t, r) {
          return E(this, e, t, !1, r);
        }),
        (a.prototype.writeDoubleLE = function (e, t, r) {
          return O(this, e, t, !0, r);
        }),
        (a.prototype.writeDoubleBE = function (e, t, r) {
          return O(this, e, t, !1, r);
        }),
        (a.prototype.copy = function (e, t, r, n) {
          if (!a.isBuffer(e)) throw TypeError("argument should be a Buffer");
          if (
            (r || (r = 0),
            n || 0 === n || (n = this.length),
            t >= e.length && (t = e.length),
            t || (t = 0),
            n > 0 && n < r && (n = r),
            n === r || 0 === e.length || 0 === this.length)
          )
            return 0;
          if (t < 0) throw RangeError("targetStart out of bounds");
          if (r < 0 || r >= this.length) throw RangeError("Index out of range");
          if (n < 0) throw RangeError("sourceEnd out of bounds");
          n > this.length && (n = this.length),
            e.length - t < n - r && (n = e.length - t + r);
          var o = n - r;
          return (
            this === e && "function" == typeof Uint8Array.prototype.copyWithin
              ? this.copyWithin(t, r, n)
              : Uint8Array.prototype.set.call(e, this.subarray(r, n), t),
            o
          );
        }),
        (a.prototype.fill = function (e, t, r, n) {
          if ("string" == typeof e) {
            if (
              ("string" == typeof t
                ? ((n = t), (t = 0), (r = this.length))
                : "string" == typeof r && ((n = r), (r = this.length)),
              void 0 !== n && "string" != typeof n)
            )
              throw TypeError("encoding must be a string");
            if ("string" == typeof n && !a.isEncoding(n))
              throw TypeError("Unknown encoding: " + n);
            if (1 === e.length) {
              var o,
                i = e.charCodeAt(0);
              (("utf8" === n && i < 128) || "latin1" === n) && (e = i);
            }
          } else
            "number" == typeof e
              ? (e &= 255)
              : "boolean" == typeof e && (e = Number(e));
          if (t < 0 || this.length < t || this.length < r)
            throw RangeError("Out of range index");
          if (r <= t) return this;
          if (
            ((t >>>= 0),
            (r = void 0 === r ? this.length : r >>> 0),
            e || (e = 0),
            "number" == typeof e)
          )
            for (o = t; o < r; ++o) this[o] = e;
          else {
            var s = a.isBuffer(e) ? e : a.from(e, n),
              u = s.length;
            if (0 === u)
              throw TypeError(
                'The value "' + e + '" is invalid for argument "value"'
              );
            for (o = 0; o < r - t; ++o) this[o + t] = s[o % u];
          }
          return this;
        });
      var C = /[^+/0-9A-Za-z-_]/g;
      function P(e, t) {
        t = t || 1 / 0;
        for (var r, n = e.length, o = null, i = [], s = 0; s < n; ++s) {
          if ((r = e.charCodeAt(s)) > 55295 && r < 57344) {
            if (!o) {
              if (r > 56319 || s + 1 === n) {
                (t -= 3) > -1 && i.push(239, 191, 189);
                continue;
              }
              o = r;
              continue;
            }
            if (r < 56320) {
              (t -= 3) > -1 && i.push(239, 191, 189), (o = r);
              continue;
            }
            r = (((o - 55296) << 10) | (r - 56320)) + 65536;
          } else o && (t -= 3) > -1 && i.push(239, 191, 189);
          if (((o = null), r < 128)) {
            if ((t -= 1) < 0) break;
            i.push(r);
          } else if (r < 2048) {
            if ((t -= 2) < 0) break;
            i.push((r >> 6) | 192, (63 & r) | 128);
          } else if (r < 65536) {
            if ((t -= 3) < 0) break;
            i.push((r >> 12) | 224, ((r >> 6) & 63) | 128, (63 & r) | 128);
          } else if (r < 1114112) {
            if ((t -= 4) < 0) break;
            i.push(
              (r >> 18) | 240,
              ((r >> 12) & 63) | 128,
              ((r >> 6) & 63) | 128,
              (63 & r) | 128
            );
          } else throw Error("Invalid code point");
        }
        return i;
      }
      function j(e) {
        return n.toByteArray(
          (function (e) {
            if ((e = (e = e.split("=")[0]).trim().replace(C, "")).length < 2)
              return "";
            for (; e.length % 4 != 0; ) e += "=";
            return e;
          })(e)
        );
      }
      function S(e, t, r, n) {
        for (var o = 0; o < n && !(o + r >= t.length) && !(o >= e.length); ++o)
          t[o + r] = e[o];
        return o;
      }
      function R(e, t) {
        return (
          e instanceof t ||
          (null != e &&
            null != e.constructor &&
            null != e.constructor.name &&
            e.constructor.name === t.name)
        );
      }
      var A = (function () {
        for (var e = "0123456789abcdef", t = Array(256), r = 0; r < 16; ++r)
          for (var n = 16 * r, o = 0; o < 16; ++o) t[n + o] = e[r] + e[o];
        return t;
      })();
    },
    36498: function (e, t, r) {
      "use strict";
      r.d(t, {
        ZP: function () {
          return eO;
        },
      });
      var n,
        o,
        i,
        s,
        a,
        u,
        c,
        l,
        f,
        h,
        p,
        d = r(53860),
        y = {},
        g = 180 / Math.PI,
        m = Math.PI / 180,
        b = Math.atan2,
        v = /([A-Z])/g,
        w = /(left|right|width|margin|padding|x)/i,
        _ = /[\s,\(]\S/,
        x = {
          autoAlpha: "opacity,visibility",
          scale: "scaleX,scaleY",
          alpha: "opacity",
        },
        E = function (e, t) {
          return t.set(
            t.t,
            t.p,
            Math.round((t.s + t.c * e) * 1e4) / 1e4 + t.u,
            t
          );
        },
        O = function (e, t) {
          return t.set(
            t.t,
            t.p,
            1 === e ? t.e : Math.round((t.s + t.c * e) * 1e4) / 1e4 + t.u,
            t
          );
        },
        C = function (e, t) {
          return t.set(
            t.t,
            t.p,
            e ? Math.round((t.s + t.c * e) * 1e4) / 1e4 + t.u : t.b,
            t
          );
        },
        P = function (e, t) {
          var r = t.s + t.c * e;
          t.set(t.t, t.p, ~~(r + (r < 0 ? -0.5 : 0.5)) + t.u, t);
        },
        j = function (e, t) {
          return t.set(t.t, t.p, e ? t.e : t.b, t);
        },
        S = function (e, t) {
          return t.set(t.t, t.p, 1 !== e ? t.b : t.e, t);
        },
        R = function (e, t, r) {
          return (e.style[t] = r);
        },
        A = function (e, t, r) {
          return e.style.setProperty(t, r);
        },
        T = function (e, t, r) {
          return (e._gsap[t] = r);
        },
        I = function (e, t, r) {
          return (e._gsap.scaleX = e._gsap.scaleY = r);
        },
        M = function (e, t, r, n, o) {
          var i = e._gsap;
          (i.scaleX = i.scaleY = r), i.renderTransform(o, i);
        },
        k = function (e, t, r, n, o) {
          var i = e._gsap;
          (i[t] = r), i.renderTransform(o, i);
        },
        U = "transform",
        L = U + "Origin",
        q = function e(t, r) {
          var n = this,
            o = this.target,
            i = o.style,
            s = o._gsap;
          if (t in y && i) {
            if (((this.tfm = this.tfm || {}), "transform" === t))
              return x.transform.split(",").forEach(function (t) {
                return e.call(n, t, r);
              });
            if (
              (~(t = x[t] || t).indexOf(",")
                ? t.split(",").forEach(function (e) {
                    return (n.tfm[e] = et(o, e));
                  })
                : (this.tfm[t] = s.x ? s[t] : et(o, t)),
              t === L && (this.tfm.zOrigin = s.zOrigin),
              this.props.indexOf(U) >= 0)
            )
              return;
            s.svg &&
              ((this.svgo = o.getAttribute("data-svg-origin")),
              this.props.push(L, r, "")),
              (t = U);
          }
          (i || r) && this.props.push(t, r, i[t]);
        },
        F = function (e) {
          e.translate &&
            (e.removeProperty("translate"),
            e.removeProperty("scale"),
            e.removeProperty("rotate"));
        },
        B = function () {
          var e,
            t,
            r = this.props,
            n = this.target,
            o = n.style,
            i = n._gsap;
          for (e = 0; e < r.length; e += 3)
            r[e + 1]
              ? (n[r[e]] = r[e + 2])
              : r[e + 2]
              ? (o[r[e]] = r[e + 2])
              : o.removeProperty(
                  "--" === r[e].substr(0, 2)
                    ? r[e]
                    : r[e].replace(v, "-$1").toLowerCase()
                );
          if (this.tfm) {
            for (t in this.tfm) i[t] = this.tfm[t];
            i.svg &&
              (i.renderTransform(),
              n.setAttribute("data-svg-origin", this.svgo || "")),
              ((e = h()) && e.isStart) ||
                o[U] ||
                (F(o),
                i.zOrigin &&
                  o[L] &&
                  ((o[L] += " " + i.zOrigin + "px"),
                  (i.zOrigin = 0),
                  i.renderTransform()),
                (i.uncache = 1));
          }
        },
        N = function (e, t) {
          var r = { target: e, props: [], revert: B, save: q };
          return (
            e._gsap || d.p8.core.getCache(e),
            t &&
              t.split(",").forEach(function (e) {
                return r.save(e);
              }),
            r
          );
        },
        $ = function (e, t) {
          var r = a.createElementNS
            ? a.createElementNS(
                (t || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"),
                e
              )
            : a.createElement(e);
          return r && r.style ? r : a.createElement(e);
        },
        D = function e(t, r, n) {
          var o = getComputedStyle(t);
          return (
            o[r] ||
            o.getPropertyValue(r.replace(v, "-$1").toLowerCase()) ||
            o.getPropertyValue(r) ||
            (!n && e(t, W(r) || r, 1)) ||
            ""
          );
        },
        z = "O,Moz,ms,Ms,Webkit".split(","),
        W = function (e, t, r) {
          var n = (t || l).style,
            o = 5;
          if (e in n && !r) return e;
          for (
            e = e.charAt(0).toUpperCase() + e.substr(1);
            o-- && !(z[o] + e in n);

          );
          return o < 0 ? null : (3 === o ? "ms" : o >= 0 ? z[o] : "") + e;
        },
        Y = function () {
          "undefined" != typeof window &&
            window.document &&
            ((u = (a = window.document).documentElement),
            (l = $("div") || { style: {} }),
            $("div"),
            (L = (U = W(U)) + "Origin"),
            (l.style.cssText =
              "border-width:0;line-height:0;position:absolute;padding:0"),
            (p = !!W("perspective")),
            (h = d.p8.core.reverting),
            (c = 1));
        },
        H = function e(t) {
          var r,
            n = $(
              "svg",
              (this.ownerSVGElement &&
                this.ownerSVGElement.getAttribute("xmlns")) ||
                "http://www.w3.org/2000/svg"
            ),
            o = this.parentNode,
            i = this.nextSibling,
            s = this.style.cssText;
          if (
            (u.appendChild(n),
            n.appendChild(this),
            (this.style.display = "block"),
            t)
          )
            try {
              (r = this.getBBox()),
                (this._gsapBBox = this.getBBox),
                (this.getBBox = e);
            } catch (e) {}
          else this._gsapBBox && (r = this._gsapBBox());
          return (
            o && (i ? o.insertBefore(this, i) : o.appendChild(this)),
            u.removeChild(n),
            (this.style.cssText = s),
            r
          );
        },
        G = function (e, t) {
          for (var r = t.length; r--; )
            if (e.hasAttribute(t[r])) return e.getAttribute(t[r]);
        },
        V = function (e) {
          var t;
          try {
            t = e.getBBox();
          } catch (r) {
            t = H.call(e, !0);
          }
          return (
            (t && (t.width || t.height)) ||
              e.getBBox === H ||
              (t = H.call(e, !0)),
            !t || t.width || t.x || t.y
              ? t
              : {
                  x: +G(e, ["x", "cx", "x1"]) || 0,
                  y: +G(e, ["y", "cy", "y1"]) || 0,
                  width: 0,
                  height: 0,
                }
          );
        },
        X = function (e) {
          return !!(e.getCTM && (!e.parentNode || e.ownerSVGElement) && V(e));
        },
        J = function (e, t) {
          if (t) {
            var r,
              n = e.style;
            t in y && t !== L && (t = U),
              n.removeProperty
                ? (("ms" === (r = t.substr(0, 2)) ||
                    "webkit" === t.substr(0, 6)) &&
                    (t = "-" + t),
                  n.removeProperty(
                    "--" === r ? t : t.replace(v, "-$1").toLowerCase()
                  ))
                : n.removeAttribute(t);
          }
        },
        K = function (e, t, r, n, o, i) {
          var s = new d.Fo(e._pt, t, r, 0, 1, i ? S : j);
          return (e._pt = s), (s.b = n), (s.e = o), e._props.push(r), s;
        },
        Q = { deg: 1, rad: 1, turn: 1 },
        Z = { grid: 1, flex: 1 },
        ee = function e(t, r, n, o) {
          var i,
            s,
            u,
            c,
            f = parseFloat(n) || 0,
            h = (n + "").trim().substr((f + "").length) || "px",
            p = l.style,
            g = w.test(r),
            m = "svg" === t.tagName.toLowerCase(),
            b = (m ? "client" : "offset") + (g ? "Width" : "Height"),
            v = "px" === o,
            _ = "%" === o;
          if (o === h || !f || Q[o] || Q[h]) return f;
          if (
            ("px" === h || v || (f = e(t, r, n, "px")),
            (c = t.getCTM && X(t)),
            (_ || "%" === h) && (y[r] || ~r.indexOf("adius")))
          )
            return (
              (i = c ? t.getBBox()[g ? "width" : "height"] : t[b]),
              (0, d.Pr)(_ ? (f / i) * 100 : (f / 100) * i)
            );
          if (
            ((p[g ? "width" : "height"] = 100 + (v ? h : o)),
            (s =
              ~r.indexOf("adius") || ("em" === o && t.appendChild && !m)
                ? t
                : t.parentNode),
            c && (s = (t.ownerSVGElement || {}).parentNode),
            (s && s !== a && s.appendChild) || (s = a.body),
            (u = s._gsap) &&
              _ &&
              u.width &&
              g &&
              u.time === d.xr.time &&
              !u.uncache)
          )
            return (0, d.Pr)((f / u.width) * 100);
          if (_ && ("height" === r || "width" === r)) {
            var x = t.style[r];
            (t.style[r] = 100 + o), (i = t[b]), x ? (t.style[r] = x) : J(t, r);
          } else
            (_ || "%" === h) &&
              !Z[D(s, "display")] &&
              (p.position = D(t, "position")),
              s === t && (p.position = "static"),
              s.appendChild(l),
              (i = l[b]),
              s.removeChild(l),
              (p.position = "absolute");
          return (
            g && _ && (((u = (0, d.DY)(s)).time = d.xr.time), (u.width = s[b])),
            (0, d.Pr)(v ? (i * f) / 100 : i && f ? (100 / i) * f : 0)
          );
        },
        et = function (e, t, r, n) {
          var o;
          return (
            c || Y(),
            t in x &&
              "transform" !== t &&
              ~(t = x[t]).indexOf(",") &&
              (t = t.split(",")[0]),
            y[t] && "transform" !== t
              ? ((o = ep(e, n)),
                (o =
                  "transformOrigin" !== t
                    ? o[t]
                    : o.svg
                    ? o.origin
                    : ed(D(e, L)) + " " + o.zOrigin + "px"))
              : (!(o = e.style[t]) ||
                  "auto" === o ||
                  n ||
                  ~(o + "").indexOf("calc(")) &&
                (o =
                  (es[t] && es[t](e, t, r)) ||
                  D(e, t) ||
                  (0, d.Ok)(e, t) ||
                  ("opacity" === t ? 1 : 0)),
            r && !~(o + "").trim().indexOf(" ") ? ee(e, t, o, r) + r : o
          );
        },
        er = function (e, t, r, n) {
          if (!r || "none" === r) {
            var o = W(t, e, 1),
              i = o && D(e, o, 1);
            i && i !== r
              ? ((t = o), (r = i))
              : "borderColor" === t && (r = D(e, "borderTopColor"));
          }
          var s,
            a,
            u,
            c,
            l,
            f,
            h,
            p,
            y,
            g,
            m,
            b = new d.Fo(this._pt, e.style, t, 0, 1, d.Ks),
            v = 0,
            w = 0;
          if (
            ((b.b = r),
            (b.e = n),
            (r += ""),
            "auto" == (n += "") &&
              ((f = e.style[t]),
              (e.style[t] = n),
              (n = D(e, t) || n),
              f ? (e.style[t] = f) : J(e, t)),
            (s = [r, n]),
            (0, d.kr)(s),
            (r = s[0]),
            (n = s[1]),
            (u = r.match(d.d4) || []),
            (n.match(d.d4) || []).length)
          ) {
            for (; (a = d.d4.exec(n)); )
              (h = a[0]),
                (y = n.substring(v, a.index)),
                l
                  ? (l = (l + 1) % 5)
                  : ("rgba(" === y.substr(-5) || "hsla(" === y.substr(-5)) &&
                    (l = 1),
                h !== (f = u[w++] || "") &&
                  ((c = parseFloat(f) || 0),
                  (m = f.substr((c + "").length)),
                  "=" === h.charAt(1) && (h = (0, d.cy)(c, h) + m),
                  (p = parseFloat(h)),
                  (g = h.substr((p + "").length)),
                  (v = d.d4.lastIndex - g.length),
                  g ||
                    ((g = g || d.Fc.units[t] || m),
                    v !== n.length || ((n += g), (b.e += g))),
                  m !== g && (c = ee(e, t, f, g) || 0),
                  (b._pt = {
                    _next: b._pt,
                    p: y || 1 === w ? y : ",",
                    s: c,
                    c: p - c,
                    m: (l && l < 4) || "zIndex" === t ? Math.round : 0,
                  }));
            b.c = v < n.length ? n.substring(v, n.length) : "";
          } else b.r = "display" === t && "none" === n ? S : j;
          return d.bQ.test(n) && (b.e = 0), (this._pt = b), b;
        },
        en = {
          top: "0%",
          bottom: "100%",
          left: "0%",
          right: "100%",
          center: "50%",
        },
        eo = function (e) {
          var t = e.split(" "),
            r = t[0],
            n = t[1] || "50%";
          return (
            ("top" === r || "bottom" === r || "left" === n || "right" === n) &&
              ((e = r), (r = n), (n = e)),
            (t[0] = en[r] || r),
            (t[1] = en[n] || n),
            t.join(" ")
          );
        },
        ei = function (e, t) {
          if (t.tween && t.tween._time === t.tween._dur) {
            var r,
              n,
              o,
              i = t.t,
              s = i.style,
              a = t.u,
              u = i._gsap;
            if ("all" === a || !0 === a) (s.cssText = ""), (n = 1);
            else
              for (o = (a = a.split(",")).length; --o > -1; )
                y[(r = a[o])] &&
                  ((n = 1), (r = "transformOrigin" === r ? L : U)),
                  J(i, r);
            n &&
              (J(i, U),
              u &&
                (u.svg && i.removeAttribute("transform"),
                ep(i, 1),
                (u.uncache = 1),
                F(s)));
          }
        },
        es = {
          clearProps: function (e, t, r, n, o) {
            if ("isFromStart" !== o.data) {
              var i = (e._pt = new d.Fo(e._pt, t, r, 0, 0, ei));
              return (
                (i.u = n), (i.pr = -10), (i.tween = o), e._props.push(r), 1
              );
            }
          },
        },
        ea = [1, 0, 0, 1, 0, 0],
        eu = {},
        ec = function (e) {
          return "matrix(1, 0, 0, 1, 0, 0)" === e || "none" === e || !e;
        },
        el = function (e) {
          var t = D(e, U);
          return ec(t) ? ea : t.substr(7).match(d.SI).map(d.Pr);
        },
        ef = function (e, t) {
          var r,
            n,
            o,
            i,
            s = e._gsap || (0, d.DY)(e),
            a = e.style,
            c = el(e);
          return s.svg && e.getAttribute("transform")
            ? "1,0,0,1,0,0" ===
              (c = [
                (o = e.transform.baseVal.consolidate().matrix).a,
                o.b,
                o.c,
                o.d,
                o.e,
                o.f,
              ]).join(",")
              ? ea
              : c
            : (c !== ea ||
                e.offsetParent ||
                e === u ||
                s.svg ||
                ((o = a.display),
                (a.display = "block"),
                ((r = e.parentNode) && e.offsetParent) ||
                  ((i = 1), (n = e.nextElementSibling), u.appendChild(e)),
                (c = el(e)),
                o ? (a.display = o) : J(e, "display"),
                i &&
                  (n
                    ? r.insertBefore(e, n)
                    : r
                    ? r.appendChild(e)
                    : u.removeChild(e))),
              t && c.length > 6 ? [c[0], c[1], c[4], c[5], c[12], c[13]] : c);
        },
        eh = function (e, t, r, n, o, i) {
          var s,
            a,
            u,
            c,
            l = e._gsap,
            f = o || ef(e, !0),
            h = l.xOrigin || 0,
            p = l.yOrigin || 0,
            d = l.xOffset || 0,
            y = l.yOffset || 0,
            g = f[0],
            m = f[1],
            b = f[2],
            v = f[3],
            w = f[4],
            _ = f[5],
            x = t.split(" "),
            E = parseFloat(x[0]) || 0,
            O = parseFloat(x[1]) || 0;
          r
            ? f !== ea &&
              (a = g * v - m * b) &&
              ((u = (v / a) * E + (-b / a) * O + (b * _ - v * w) / a),
              (c = (-m / a) * E + (g / a) * O - (g * _ - m * w) / a),
              (E = u),
              (O = c))
            : ((E =
                (s = V(e)).x + (~x[0].indexOf("%") ? (E / 100) * s.width : E)),
              (O =
                s.y +
                (~(x[1] || x[0]).indexOf("%") ? (O / 100) * s.height : O))),
            n || (!1 !== n && l.smooth)
              ? ((w = E - h),
                (_ = O - p),
                (l.xOffset = d + (w * g + _ * b) - w),
                (l.yOffset = y + (w * m + _ * v) - _))
              : (l.xOffset = l.yOffset = 0),
            (l.xOrigin = E),
            (l.yOrigin = O),
            (l.smooth = !!n),
            (l.origin = t),
            (l.originIsAbsolute = !!r),
            (e.style[L] = "0px 0px"),
            i &&
              (K(i, l, "xOrigin", h, E),
              K(i, l, "yOrigin", p, O),
              K(i, l, "xOffset", d, l.xOffset),
              K(i, l, "yOffset", y, l.yOffset)),
            e.setAttribute("data-svg-origin", E + " " + O);
        },
        ep = function (e, t) {
          var r = e._gsap || new d.l1(e);
          if ("x" in r && !t && !r.uncache) return r;
          var n,
            o,
            i,
            s,
            a,
            u,
            c,
            l,
            f,
            h,
            y,
            v,
            w,
            _,
            x,
            E,
            O,
            C,
            P,
            j,
            S,
            R,
            A,
            T,
            I,
            M,
            k,
            q,
            F,
            B,
            N,
            $,
            z = e.style,
            W = r.scaleX < 0,
            Y = getComputedStyle(e),
            H = D(e, L) || "0";
          return (
            (n = o = i = u = c = l = f = h = y = 0),
            (s = a = 1),
            (r.svg = !!(e.getCTM && X(e))),
            Y.translate &&
              (("none" !== Y.translate ||
                "none" !== Y.scale ||
                "none" !== Y.rotate) &&
                (z[U] =
                  ("none" !== Y.translate
                    ? "translate3d(" +
                      (Y.translate + " 0 0").split(" ").slice(0, 3).join(", ") +
                      ") "
                    : "") +
                  ("none" !== Y.rotate ? "rotate(" + Y.rotate + ") " : "") +
                  ("none" !== Y.scale
                    ? "scale(" + Y.scale.split(" ").join(",") + ") "
                    : "") +
                  ("none" !== Y[U] ? Y[U] : "")),
              (z.scale = z.rotate = z.translate = "none")),
            (_ = ef(e, r.svg)),
            r.svg &&
              (r.uncache
                ? ((I = e.getBBox()),
                  (H = r.xOrigin - I.x + "px " + (r.yOrigin - I.y) + "px"),
                  (T = ""))
                : (T = !t && e.getAttribute("data-svg-origin")),
              eh(e, T || H, !!T || r.originIsAbsolute, !1 !== r.smooth, _)),
            (v = r.xOrigin || 0),
            (w = r.yOrigin || 0),
            _ !== ea &&
              ((C = _[0]),
              (P = _[1]),
              (j = _[2]),
              (S = _[3]),
              (n = R = _[4]),
              (o = A = _[5]),
              6 === _.length
                ? ((s = Math.sqrt(C * C + P * P)),
                  (a = Math.sqrt(S * S + j * j)),
                  (u = C || P ? b(P, C) * g : 0),
                  (f = j || S ? b(j, S) * g + u : 0) &&
                    (a *= Math.abs(Math.cos(f * m))),
                  r.svg &&
                    ((n -= v - (v * C + w * j)), (o -= w - (v * P + w * S))))
                : (($ = _[6]),
                  (B = _[7]),
                  (k = _[8]),
                  (q = _[9]),
                  (F = _[10]),
                  (N = _[11]),
                  (n = _[12]),
                  (o = _[13]),
                  (i = _[14]),
                  (c = (x = b($, F)) * g),
                  x &&
                    ((T = R * (E = Math.cos(-x)) + k * (O = Math.sin(-x))),
                    (I = A * E + q * O),
                    (M = $ * E + F * O),
                    (k = -(R * O) + k * E),
                    (q = -(A * O) + q * E),
                    (F = -($ * O) + F * E),
                    (N = -(B * O) + N * E),
                    (R = T),
                    (A = I),
                    ($ = M)),
                  (l = (x = b(-j, F)) * g),
                  x &&
                    ((T = C * (E = Math.cos(-x)) - k * (O = Math.sin(-x))),
                    (I = P * E - q * O),
                    (M = j * E - F * O),
                    (N = S * O + N * E),
                    (C = T),
                    (P = I),
                    (j = M)),
                  (u = (x = b(P, C)) * g),
                  x &&
                    ((T = C * (E = Math.cos(x)) + P * (O = Math.sin(x))),
                    (I = R * E + A * O),
                    (P = P * E - C * O),
                    (A = A * E - R * O),
                    (C = T),
                    (R = I)),
                  c &&
                    Math.abs(c) + Math.abs(u) > 359.9 &&
                    ((c = u = 0), (l = 180 - l)),
                  (s = (0, d.Pr)(Math.sqrt(C * C + P * P + j * j))),
                  (a = (0, d.Pr)(Math.sqrt(A * A + $ * $))),
                  (f = Math.abs((x = b(R, A))) > 2e-4 ? x * g : 0),
                  (y = N ? 1 / (N < 0 ? -N : N) : 0)),
              r.svg &&
                ((T = e.getAttribute("transform")),
                (r.forceCSS = e.setAttribute("transform", "") || !ec(D(e, U))),
                T && e.setAttribute("transform", T))),
            Math.abs(f) > 90 &&
              270 > Math.abs(f) &&
              (W
                ? ((s *= -1),
                  (f += u <= 0 ? 180 : -180),
                  (u += u <= 0 ? 180 : -180))
                : ((a *= -1), (f += f <= 0 ? 180 : -180))),
            (t = t || r.uncache),
            (r.x =
              n -
              ((r.xPercent =
                n &&
                ((!t && r.xPercent) ||
                  (Math.round(e.offsetWidth / 2) === Math.round(-n) ? -50 : 0)))
                ? (e.offsetWidth * r.xPercent) / 100
                : 0) +
              "px"),
            (r.y =
              o -
              ((r.yPercent =
                o &&
                ((!t && r.yPercent) ||
                  (Math.round(e.offsetHeight / 2) === Math.round(-o)
                    ? -50
                    : 0)))
                ? (e.offsetHeight * r.yPercent) / 100
                : 0) +
              "px"),
            (r.z = i + "px"),
            (r.scaleX = (0, d.Pr)(s)),
            (r.scaleY = (0, d.Pr)(a)),
            (r.rotation = (0, d.Pr)(u) + "deg"),
            (r.rotationX = (0, d.Pr)(c) + "deg"),
            (r.rotationY = (0, d.Pr)(l) + "deg"),
            (r.skewX = f + "deg"),
            (r.skewY = h + "deg"),
            (r.transformPerspective = y + "px"),
            (r.zOrigin =
              parseFloat(H.split(" ")[2]) || (!t && r.zOrigin) || 0) &&
              (z[L] = ed(H)),
            (r.xOffset = r.yOffset = 0),
            (r.force3D = d.Fc.force3D),
            (r.renderTransform = r.svg ? ev : p ? eb : eg),
            (r.uncache = 0),
            r
          );
        },
        ed = function (e) {
          return (e = e.split(" "))[0] + " " + e[1];
        },
        ey = function (e, t, r) {
          var n = (0, d.Wy)(t);
          return (
            (0, d.Pr)(parseFloat(t) + parseFloat(ee(e, "x", r + "px", n))) + n
          );
        },
        eg = function (e, t) {
          (t.z = "0px"),
            (t.rotationY = t.rotationX = "0deg"),
            (t.force3D = 0),
            eb(e, t);
        },
        em = "0deg",
        eb = function (e, t) {
          var r = t || this,
            n = r.xPercent,
            o = r.yPercent,
            i = r.x,
            s = r.y,
            a = r.z,
            u = r.rotation,
            c = r.rotationY,
            l = r.rotationX,
            f = r.skewX,
            h = r.skewY,
            p = r.scaleX,
            d = r.scaleY,
            y = r.transformPerspective,
            g = r.force3D,
            b = r.target,
            v = r.zOrigin,
            w = "",
            _ = ("auto" === g && e && 1 !== e) || !0 === g;
          if (v && (l !== em || c !== em)) {
            var x,
              E = parseFloat(c) * m,
              O = Math.sin(E),
              C = Math.cos(E);
            (i = ey(b, i, -(O * (x = Math.cos((E = parseFloat(l) * m))) * v))),
              (s = ey(b, s, -(-Math.sin(E) * v))),
              (a = ey(b, a, -(C * x * v) + v));
          }
          "0px" !== y && (w += "perspective(" + y + ") "),
            (n || o) && (w += "translate(" + n + "%, " + o + "%) "),
            (_ || "0px" !== i || "0px" !== s || "0px" !== a) &&
              (w +=
                "0px" !== a || _
                  ? "translate3d(" + i + ", " + s + ", " + a + ") "
                  : "translate(" + i + ", " + s + ") "),
            u !== em && (w += "rotate(" + u + ") "),
            c !== em && (w += "rotateY(" + c + ") "),
            l !== em && (w += "rotateX(" + l + ") "),
            (f !== em || h !== em) && (w += "skew(" + f + ", " + h + ") "),
            (1 !== p || 1 !== d) && (w += "scale(" + p + ", " + d + ") "),
            (b.style[U] = w || "translate(0, 0)");
        },
        ev = function (e, t) {
          var r,
            n,
            o,
            i,
            s,
            a = t || this,
            u = a.xPercent,
            c = a.yPercent,
            l = a.x,
            f = a.y,
            h = a.rotation,
            p = a.skewX,
            y = a.skewY,
            g = a.scaleX,
            b = a.scaleY,
            v = a.target,
            w = a.xOrigin,
            _ = a.yOrigin,
            x = a.xOffset,
            E = a.yOffset,
            O = a.forceCSS,
            C = parseFloat(l),
            P = parseFloat(f);
          (h = parseFloat(h)),
            (p = parseFloat(p)),
            (y = parseFloat(y)) && ((p += y = parseFloat(y)), (h += y)),
            h || p
              ? ((h *= m),
                (p *= m),
                (r = Math.cos(h) * g),
                (n = Math.sin(h) * g),
                (o = -(Math.sin(h - p) * b)),
                (i = Math.cos(h - p) * b),
                p &&
                  ((y *= m),
                  (o *= s = Math.sqrt(1 + (s = Math.tan(p - y)) * s)),
                  (i *= s),
                  y &&
                    ((r *= s = Math.sqrt(1 + (s = Math.tan(y)) * s)),
                    (n *= s))),
                (r = (0, d.Pr)(r)),
                (n = (0, d.Pr)(n)),
                (o = (0, d.Pr)(o)),
                (i = (0, d.Pr)(i)))
              : ((r = g), (i = b), (n = o = 0)),
            ((C && !~(l + "").indexOf("px")) ||
              (P && !~(f + "").indexOf("px"))) &&
              ((C = ee(v, "x", l, "px")), (P = ee(v, "y", f, "px"))),
            (w || _ || x || E) &&
              ((C = (0, d.Pr)(C + w - (w * r + _ * o) + x)),
              (P = (0, d.Pr)(P + _ - (w * n + _ * i) + E))),
            (u || c) &&
              ((s = v.getBBox()),
              (C = (0, d.Pr)(C + (u / 100) * s.width)),
              (P = (0, d.Pr)(P + (c / 100) * s.height))),
            (s =
              "matrix(" +
              r +
              "," +
              n +
              "," +
              o +
              "," +
              i +
              "," +
              C +
              "," +
              P +
              ")"),
            v.setAttribute("transform", s),
            O && (v.style[U] = s);
        },
        ew = function (e, t, r, n, o) {
          var i,
            s,
            a = (0, d.r9)(o),
            u = parseFloat(o) * (a && ~o.indexOf("rad") ? g : 1) - n,
            c = n + u + "deg";
          return (
            a &&
              ("short" === (i = o.split("_")[1]) &&
                (u %= 360) != u % 180 &&
                (u += u < 0 ? 360 : -360),
              "cw" === i && u < 0
                ? (u = ((u + 36e9) % 360) - 360 * ~~(u / 360))
                : "ccw" === i &&
                  u > 0 &&
                  (u = ((u - 36e9) % 360) - 360 * ~~(u / 360))),
            (e._pt = s = new d.Fo(e._pt, t, r, n, u, O)),
            (s.e = c),
            (s.u = "deg"),
            e._props.push(r),
            s
          );
        },
        e_ = function (e, t) {
          for (var r in t) e[r] = t[r];
          return e;
        },
        ex = function (e, t, r) {
          var n,
            o,
            i,
            s,
            a,
            u,
            c,
            l = e_({}, r._gsap),
            f = r.style;
          for (o in (l.svg
            ? ((i = r.getAttribute("transform")),
              r.setAttribute("transform", ""),
              (f[U] = t),
              (n = ep(r, 1)),
              J(r, U),
              r.setAttribute("transform", i))
            : ((i = getComputedStyle(r)[U]),
              (f[U] = t),
              (n = ep(r, 1)),
              (f[U] = i)),
          y))
            (i = l[o]) !== (s = n[o]) &&
              0 > "perspective,force3D,transformOrigin,svgOrigin".indexOf(o) &&
              ((a =
                (0, d.Wy)(i) !== (c = (0, d.Wy)(s))
                  ? ee(r, o, i, c)
                  : parseFloat(i)),
              (u = parseFloat(s)),
              (e._pt = new d.Fo(e._pt, n, o, a, u - a, E)),
              (e._pt.u = c || 0),
              e._props.push(o));
          e_(n, l);
        };
      (0, d.fS)("padding,margin,Width,Radius", function (e, t) {
        var r = "Right",
          n = "Bottom",
          o = "Left",
          i = (
            t < 3 ? ["Top", r, n, o] : ["Top" + o, "Top" + r, n + r, n + o]
          ).map(function (r) {
            return t < 2 ? e + r : "border" + r + e;
          });
        es[t > 1 ? "border" + e : e] = function (e, t, r, n, o) {
          var s, a;
          if (arguments.length < 4)
            return 5 ===
              (a = (s = i.map(function (t) {
                return et(e, t, r);
              })).join(" ")).split(s[0]).length
              ? s[0]
              : a;
          (s = (n + "").split(" ")),
            (a = {}),
            i.forEach(function (e, t) {
              return (a[e] = s[t] = s[t] || s[((t - 1) / 2) | 0]);
            }),
            e.init(t, a, o);
        };
      });
      var eE = {
        name: "css",
        register: Y,
        targetTest: function (e) {
          return e.style && e.nodeType;
        },
        init: function (e, t, r, n, o) {
          var i,
            s,
            a,
            u,
            l,
            f,
            h,
            p,
            g,
            m,
            b,
            v,
            w,
            O,
            j,
            S,
            R = this._props,
            A = e.style,
            T = r.vars.startAt;
          for (h in (c || Y(),
          (this.styles = this.styles || N(e)),
          (S = this.styles.props),
          (this.tween = r),
          t))
            if (
              "autoRound" !== h &&
              ((s = t[h]), !(d.$i[h] && (0, d.if)(h, t, r, n, e, o)))
            ) {
              if (
                ((l = typeof s),
                (f = es[h]),
                "function" === l && (l = typeof (s = s.call(r, n, e, o))),
                "string" === l && ~s.indexOf("random(") && (s = (0, d.UI)(s)),
                f)
              )
                f(this, e, h, s, r) && (j = 1);
              else if ("--" === h.substr(0, 2))
                (i = (getComputedStyle(e).getPropertyValue(h) + "").trim()),
                  (s += ""),
                  (d.GN.lastIndex = 0),
                  d.GN.test(i) || ((p = (0, d.Wy)(i)), (g = (0, d.Wy)(s))),
                  g ? p !== g && (i = ee(e, h, i, g) + g) : p && (s += p),
                  this.add(A, "setProperty", i, s, n, o, 0, 0, h),
                  R.push(h),
                  S.push(h, 0, A[h]);
              else if ("undefined" !== l) {
                if (
                  (T && h in T
                    ? ((i =
                        "function" == typeof T[h]
                          ? T[h].call(r, n, e, o)
                          : T[h]),
                      (0, d.r9)(i) &&
                        ~i.indexOf("random(") &&
                        (i = (0, d.UI)(i)),
                      (0, d.Wy)(i + "") ||
                        "auto" === i ||
                        (i += d.Fc.units[h] || (0, d.Wy)(et(e, h)) || ""),
                      "=" === (i + "").charAt(1) && (i = et(e, h)))
                    : (i = et(e, h)),
                  (u = parseFloat(i)),
                  (m =
                    "string" === l && "=" === s.charAt(1) && s.substr(0, 2)) &&
                    (s = s.substr(2)),
                  (a = parseFloat(s)),
                  h in x &&
                    ("autoAlpha" === h &&
                      (1 === u &&
                        "hidden" === et(e, "visibility") &&
                        a &&
                        (u = 0),
                      S.push("visibility", 0, A.visibility),
                      K(
                        this,
                        A,
                        "visibility",
                        u ? "inherit" : "hidden",
                        a ? "inherit" : "hidden",
                        !a
                      )),
                    "scale" !== h &&
                      "transform" !== h &&
                      ~(h = x[h]).indexOf(",") &&
                      (h = h.split(",")[0])),
                  (b = h in y))
                ) {
                  if (
                    (this.styles.save(h),
                    v ||
                      (((w = e._gsap).renderTransform && !t.parseTransform) ||
                        ep(e, t.parseTransform),
                      (O = !1 !== t.smoothOrigin && w.smooth),
                      ((v = this._pt =
                        new d.Fo(
                          this._pt,
                          A,
                          U,
                          0,
                          1,
                          w.renderTransform,
                          w,
                          0,
                          -1
                        )).dep = 1)),
                    "scale" === h)
                  )
                    (this._pt = new d.Fo(
                      this._pt,
                      w,
                      "scaleY",
                      w.scaleY,
                      (m ? (0, d.cy)(w.scaleY, m + a) : a) - w.scaleY || 0,
                      E
                    )),
                      (this._pt.u = 0),
                      R.push("scaleY", h),
                      (h += "X");
                  else if ("transformOrigin" === h) {
                    S.push(L, 0, A[L]),
                      (s = eo(s)),
                      w.svg
                        ? eh(e, s, 0, O, 0, this)
                        : ((g = parseFloat(s.split(" ")[2]) || 0) !==
                            w.zOrigin && K(this, w, "zOrigin", w.zOrigin, g),
                          K(this, A, h, ed(i), ed(s)));
                    continue;
                  } else if ("svgOrigin" === h) {
                    eh(e, s, 1, O, 0, this);
                    continue;
                  } else if (h in eu) {
                    ew(this, w, h, u, m ? (0, d.cy)(u, m + s) : s);
                    continue;
                  } else if ("smoothOrigin" === h) {
                    K(this, w, "smooth", w.smooth, s);
                    continue;
                  } else if ("force3D" === h) {
                    w[h] = s;
                    continue;
                  } else if ("transform" === h) {
                    ex(this, s, e);
                    continue;
                  }
                } else h in A || (h = W(h) || h);
                if (
                  b ||
                  ((a || 0 === a) && (u || 0 === u) && !_.test(s) && h in A)
                )
                  (p = (i + "").substr((u + "").length)),
                    a || (a = 0),
                    (g = (0, d.Wy)(s) || (h in d.Fc.units ? d.Fc.units[h] : p)),
                    p !== g && (u = ee(e, h, i, g)),
                    (this._pt = new d.Fo(
                      this._pt,
                      b ? w : A,
                      h,
                      u,
                      (m ? (0, d.cy)(u, m + a) : a) - u,
                      b || ("px" !== g && "zIndex" !== h) || !1 === t.autoRound
                        ? E
                        : P
                    )),
                    (this._pt.u = g || 0),
                    p !== g &&
                      "%" !== g &&
                      ((this._pt.b = i), (this._pt.r = C));
                else if (h in A) er.call(this, e, h, i, m ? m + s : s);
                else if (h in e) this.add(e, h, i || e[h], m ? m + s : s, n, o);
                else if ("parseTransform" !== h) {
                  (0, d.lC)(h, s);
                  continue;
                }
                b || (h in A ? S.push(h, 0, A[h]) : S.push(h, 1, i || e[h])),
                  R.push(h);
              }
            }
          j && (0, d.JV)(this);
        },
        render: function (e, t) {
          if (t.tween._time || !h())
            for (var r = t._pt; r; ) r.r(e, r.d), (r = r._next);
          else t.styles.revert();
        },
        get: et,
        aliases: x,
        getSetter: function (e, t, r) {
          var n = x[t];
          return (
            n && 0 > n.indexOf(",") && (t = n),
            t in y && t !== L && (e._gsap.x || et(e, "x"))
              ? r && f === r
                ? "scale" === t
                  ? I
                  : T
                : ((f = r || {}), "scale" === t ? M : k)
              : e.style && !(0, d.m2)(e.style[t])
              ? R
              : ~t.indexOf("-")
              ? A
              : (0, d.S5)(e, t)
          );
        },
        core: { _removeProperty: J, _getMatrix: ef },
      };
      (d.p8.utils.checkPrefix = W),
        (d.p8.core.getStyleSaver = N),
        (n = "x,y,z,scale,scaleX,scaleY,xPercent,yPercent"),
        (o = "rotation,rotationX,rotationY,skewX,skewY"),
        (i =
          "0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY"),
        (s = (0, d.fS)(
          n +
            "," +
            o +
            ",transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective",
          function (e) {
            y[e] = 1;
          }
        )),
        (0, d.fS)(o, function (e) {
          (d.Fc.units[e] = "deg"), (eu[e] = 1);
        }),
        (x[s[13]] = n + "," + o),
        (0, d.fS)(i, function (e) {
          var t = e.split(":");
          x[t[1]] = s[t[0]];
        }),
        (0, d.fS)(
          "x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",
          function (e) {
            d.Fc.units[e] = "px";
          }
        ),
        d.p8.registerPlugin(eE);
      var eO = d.p8.registerPlugin(eE) || d.p8;
      eO.core.Tween;
    },
    68848: function (e, t) {
      (t.read = function (e, t, r, n, o) {
        var i,
          s,
          a = 8 * o - n - 1,
          u = (1 << a) - 1,
          c = u >> 1,
          l = -7,
          f = r ? o - 1 : 0,
          h = r ? -1 : 1,
          p = e[t + f];
        for (
          f += h, i = p & ((1 << -l) - 1), p >>= -l, l += a;
          l > 0;
          i = 256 * i + e[t + f], f += h, l -= 8
        );
        for (
          s = i & ((1 << -l) - 1), i >>= -l, l += n;
          l > 0;
          s = 256 * s + e[t + f], f += h, l -= 8
        );
        if (0 === i) i = 1 - c;
        else {
          if (i === u) return s ? NaN : (1 / 0) * (p ? -1 : 1);
          (s += Math.pow(2, n)), (i -= c);
        }
        return (p ? -1 : 1) * s * Math.pow(2, i - n);
      }),
        (t.write = function (e, t, r, n, o, i) {
          var s,
            a,
            u,
            c = 8 * i - o - 1,
            l = (1 << c) - 1,
            f = l >> 1,
            h = 23 === o ? 5960464477539062e-23 : 0,
            p = n ? 0 : i - 1,
            d = n ? 1 : -1,
            y = t < 0 || (0 === t && 1 / t < 0) ? 1 : 0;
          for (
            isNaN((t = Math.abs(t))) || t === 1 / 0
              ? ((a = isNaN(t) ? 1 : 0), (s = l))
              : ((s = Math.floor(Math.log(t) / Math.LN2)),
                t * (u = Math.pow(2, -s)) < 1 && (s--, (u *= 2)),
                s + f >= 1 ? (t += h / u) : (t += h * Math.pow(2, 1 - f)),
                t * u >= 2 && (s++, (u /= 2)),
                s + f >= l
                  ? ((a = 0), (s = l))
                  : s + f >= 1
                  ? ((a = (t * u - 1) * Math.pow(2, o)), (s += f))
                  : ((a = t * Math.pow(2, f - 1) * Math.pow(2, o)), (s = 0)));
            o >= 8;
            e[r + p] = 255 & a, p += d, a /= 256, o -= 8
          );
          for (
            s = (s << o) | a, c += o;
            c > 0;
            e[r + p] = 255 & s, p += d, s /= 256, c -= 8
          );
          e[r + p - d] |= 128 * y;
        });
    },
    30166: function (e, t, r) {
      "use strict";
      r.d(t, {
        default: function () {
          return o.a;
        },
      });
      var n = r(55775),
        o = r.n(n);
    },
    33145: function (e, t, r) {
      "use strict";
      r.d(t, {
        default: function () {
          return o.a;
        },
      });
      var n = r(48461),
        o = r.n(n);
    },
    27648: function (e, t, r) {
      "use strict";
      r.d(t, {
        default: function () {
          return o.a;
        },
      });
      var n = r(72972),
        o = r.n(n);
    },
    99376: function (e, t, r) {
      "use strict";
      var n = r(35475);
      r.o(n, "usePathname") &&
        r.d(t, {
          usePathname: function () {
            return n.usePathname;
          },
        }),
        r.o(n, "useRouter") &&
          r.d(t, {
            useRouter: function () {
              return n.useRouter;
            },
          }),
        r.o(n, "useSearchParams") &&
          r.d(t, {
            useSearchParams: function () {
              return n.useSearchParams;
            },
          });
    },
    12119: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "$", {
        enumerable: !0,
        get: function () {
          return o;
        },
      });
      let n = r(83079);
      function o(e) {
        let { createServerReference: t } = r(6671);
        return t(e, n.callServer);
      }
    },
    55449: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "addLocale", {
          enumerable: !0,
          get: function () {
            return n;
          },
        }),
        r(33068);
      let n = function (e) {
        for (
          var t = arguments.length, r = Array(t > 1 ? t - 1 : 0), n = 1;
          n < t;
          n++
        )
          r[n - 1] = arguments[n];
        return e;
      };
      ("function" == typeof t.default ||
        ("object" == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, "__esModule", { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    56958: function (e, t, r) {
      "use strict";
      function n(e, t, r, n) {
        return !1;
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "getDomainLocale", {
          enumerable: !0,
          get: function () {
            return n;
          },
        }),
        r(33068),
        ("function" == typeof t.default ||
          ("object" == typeof t.default && null !== t.default)) &&
          void 0 === t.default.__esModule &&
          (Object.defineProperty(t.default, "__esModule", { value: !0 }),
          Object.assign(t.default, t),
          (e.exports = t.default));
    },
    65878: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "Image", {
          enumerable: !0,
          get: function () {
            return v;
          },
        });
      let n = r(47043),
        o = r(53099),
        i = r(57437),
        s = o._(r(2265)),
        a = n._(r(54887)),
        u = n._(r(38293)),
        c = r(55346),
        l = r(90128),
        f = r(62589);
      r(31765);
      let h = r(25523),
        p = n._(r(5084)),
        d = {
          deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
          imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
          path: "/_next/image",
          loader: "default",
          dangerouslyAllowSVG: !1,
          unoptimized: !1,
        };
      function y(e, t, r, n, o, i, s) {
        let a = null == e ? void 0 : e.src;
        e &&
          e["data-loaded-src"] !== a &&
          ((e["data-loaded-src"] = a),
          ("decode" in e ? e.decode() : Promise.resolve())
            .catch(() => {})
            .then(() => {
              if (e.parentElement && e.isConnected) {
                if (("empty" !== t && o(!0), null == r ? void 0 : r.current)) {
                  let t = new Event("load");
                  Object.defineProperty(t, "target", {
                    writable: !1,
                    value: e,
                  });
                  let n = !1,
                    o = !1;
                  r.current({
                    ...t,
                    nativeEvent: t,
                    currentTarget: e,
                    target: e,
                    isDefaultPrevented: () => n,
                    isPropagationStopped: () => o,
                    persist: () => {},
                    preventDefault: () => {
                      (n = !0), t.preventDefault();
                    },
                    stopPropagation: () => {
                      (o = !0), t.stopPropagation();
                    },
                  });
                }
                (null == n ? void 0 : n.current) && n.current(e);
              }
            }));
      }
      function g(e) {
        return s.use ? { fetchPriority: e } : { fetchpriority: e };
      }
      "undefined" == typeof window && (globalThis.__NEXT_IMAGE_IMPORTED = !0);
      let m = (0, s.forwardRef)((e, t) => {
        let {
          src: r,
          srcSet: n,
          sizes: o,
          height: a,
          width: u,
          decoding: c,
          className: l,
          style: f,
          fetchPriority: h,
          placeholder: p,
          loading: d,
          unoptimized: m,
          fill: b,
          onLoadRef: v,
          onLoadingCompleteRef: w,
          setBlurComplete: _,
          setShowAltText: x,
          sizesInput: E,
          onLoad: O,
          onError: C,
          ...P
        } = e;
        return (0, i.jsx)("img", {
          ...P,
          ...g(h),
          loading: d,
          width: u,
          height: a,
          decoding: c,
          "data-nimg": b ? "fill" : "1",
          className: l,
          style: f,
          sizes: o,
          srcSet: n,
          src: r,
          ref: (0, s.useCallback)(
            (e) => {
              t &&
                ("function" == typeof t
                  ? t(e)
                  : "object" == typeof t && (t.current = e)),
                e &&
                  (C && (e.src = e.src), e.complete && y(e, p, v, w, _, m, E));
            },
            [r, p, v, w, _, C, m, E, t]
          ),
          onLoad: (e) => {
            y(e.currentTarget, p, v, w, _, m, E);
          },
          onError: (e) => {
            x(!0), "empty" !== p && _(!0), C && C(e);
          },
        });
      });
      function b(e) {
        let { isAppRouter: t, imgAttributes: r } = e,
          n = {
            as: "image",
            imageSrcSet: r.srcSet,
            imageSizes: r.sizes,
            crossOrigin: r.crossOrigin,
            referrerPolicy: r.referrerPolicy,
            ...g(r.fetchPriority),
          };
        return t && a.default.preload
          ? (a.default.preload(r.src, n), null)
          : (0, i.jsx)(u.default, {
              children: (0, i.jsx)(
                "link",
                { rel: "preload", href: r.srcSet ? void 0 : r.src, ...n },
                "__nimg-" + r.src + r.srcSet + r.sizes
              ),
            });
      }
      let v = (0, s.forwardRef)((e, t) => {
        let r = (0, s.useContext)(h.RouterContext),
          n = (0, s.useContext)(f.ImageConfigContext),
          o = (0, s.useMemo)(() => {
            let e = d || n || l.imageConfigDefault,
              t = [...e.deviceSizes, ...e.imageSizes].sort((e, t) => e - t),
              r = e.deviceSizes.sort((e, t) => e - t);
            return { ...e, allSizes: t, deviceSizes: r };
          }, [n]),
          { onLoad: a, onLoadingComplete: u } = e,
          y = (0, s.useRef)(a);
        (0, s.useEffect)(() => {
          y.current = a;
        }, [a]);
        let g = (0, s.useRef)(u);
        (0, s.useEffect)(() => {
          g.current = u;
        }, [u]);
        let [v, w] = (0, s.useState)(!1),
          [_, x] = (0, s.useState)(!1),
          { props: E, meta: O } = (0, c.getImgProps)(e, {
            defaultLoader: p.default,
            imgConf: o,
            blurComplete: v,
            showAltText: _,
          });
        return (0, i.jsxs)(i.Fragment, {
          children: [
            (0, i.jsx)(m, {
              ...E,
              unoptimized: O.unoptimized,
              placeholder: O.placeholder,
              fill: O.fill,
              onLoadRef: y,
              onLoadingCompleteRef: g,
              setBlurComplete: w,
              setShowAltText: x,
              sizesInput: e.sizes,
              ref: t,
            }),
            O.priority
              ? (0, i.jsx)(b, { isAppRouter: !r, imgAttributes: E })
              : null,
          ],
        });
      });
      ("function" == typeof t.default ||
        ("object" == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, "__esModule", { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    72972: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "default", {
          enumerable: !0,
          get: function () {
            return w;
          },
        });
      let n = r(47043),
        o = r(57437),
        i = n._(r(2265)),
        s = r(25246),
        a = r(53552),
        u = r(57497),
        c = r(3987),
        l = r(55449),
        f = r(25523),
        h = r(61956),
        p = r(16081),
        d = r(56958),
        y = r(1634),
        g = r(24673),
        m = new Set();
      function b(e, t, r, n, o, i) {
        if ("undefined" != typeof window && (i || (0, a.isLocalURL)(t))) {
          if (!n.bypassPrefetchedCheck) {
            let o =
              t +
              "%" +
              r +
              "%" +
              (void 0 !== n.locale
                ? n.locale
                : "locale" in e
                ? e.locale
                : void 0);
            if (m.has(o)) return;
            m.add(o);
          }
          (async () => (i ? e.prefetch(t, o) : e.prefetch(t, r, n)))().catch(
            (e) => {}
          );
        }
      }
      function v(e) {
        return "string" == typeof e ? e : (0, u.formatUrl)(e);
      }
      let w = i.default.forwardRef(function (e, t) {
        let r, n;
        let {
          href: u,
          as: m,
          children: w,
          prefetch: _ = null,
          passHref: x,
          replace: E,
          shallow: O,
          scroll: C,
          locale: P,
          onClick: j,
          onMouseEnter: S,
          onTouchStart: R,
          legacyBehavior: A = !1,
          ...T
        } = e;
        (r = w),
          A &&
            ("string" == typeof r || "number" == typeof r) &&
            (r = (0, o.jsx)("a", { children: r }));
        let I = i.default.useContext(f.RouterContext),
          M = i.default.useContext(h.AppRouterContext),
          k = null != I ? I : M,
          U = !I,
          L = !1 !== _,
          q = null === _ ? g.PrefetchKind.AUTO : g.PrefetchKind.FULL,
          { href: F, as: B } = i.default.useMemo(() => {
            if (!I) {
              let e = v(u);
              return { href: e, as: m ? v(m) : e };
            }
            let [e, t] = (0, s.resolveHref)(I, u, !0);
            return { href: e, as: m ? (0, s.resolveHref)(I, m) : t || e };
          }, [I, u, m]),
          N = i.default.useRef(F),
          $ = i.default.useRef(B);
        A && (n = i.default.Children.only(r));
        let D = A ? n && "object" == typeof n && n.ref : t,
          [z, W, Y] = (0, p.useIntersection)({ rootMargin: "200px" }),
          H = i.default.useCallback(
            (e) => {
              ($.current !== B || N.current !== F) &&
                (Y(), ($.current = B), (N.current = F)),
                z(e),
                D &&
                  ("function" == typeof D
                    ? D(e)
                    : "object" == typeof D && (D.current = e));
            },
            [B, D, F, Y, z]
          );
        i.default.useEffect(() => {
          k && W && L && b(k, F, B, { locale: P }, { kind: q }, U);
        }, [B, F, W, P, L, null == I ? void 0 : I.locale, k, U, q]);
        let G = {
          ref: H,
          onClick(e) {
            A || "function" != typeof j || j(e),
              A &&
                n.props &&
                "function" == typeof n.props.onClick &&
                n.props.onClick(e),
              k &&
                !e.defaultPrevented &&
                (function (e, t, r, n, o, s, u, c, l) {
                  let { nodeName: f } = e.currentTarget;
                  if (
                    "A" === f.toUpperCase() &&
                    ((function (e) {
                      let t = e.currentTarget.getAttribute("target");
                      return (
                        (t && "_self" !== t) ||
                        e.metaKey ||
                        e.ctrlKey ||
                        e.shiftKey ||
                        e.altKey ||
                        (e.nativeEvent && 2 === e.nativeEvent.which)
                      );
                    })(e) ||
                      (!l && !(0, a.isLocalURL)(r)))
                  )
                    return;
                  e.preventDefault();
                  let h = () => {
                    let e = null == u || u;
                    "beforePopState" in t
                      ? t[o ? "replace" : "push"](r, n, {
                          shallow: s,
                          locale: c,
                          scroll: e,
                        })
                      : t[o ? "replace" : "push"](n || r, { scroll: e });
                  };
                  l ? i.default.startTransition(h) : h();
                })(e, k, F, B, E, O, C, P, U);
          },
          onMouseEnter(e) {
            A || "function" != typeof S || S(e),
              A &&
                n.props &&
                "function" == typeof n.props.onMouseEnter &&
                n.props.onMouseEnter(e),
              k &&
                (L || !U) &&
                b(
                  k,
                  F,
                  B,
                  { locale: P, priority: !0, bypassPrefetchedCheck: !0 },
                  { kind: q },
                  U
                );
          },
          onTouchStart: function (e) {
            A || "function" != typeof R || R(e),
              A &&
                n.props &&
                "function" == typeof n.props.onTouchStart &&
                n.props.onTouchStart(e),
              k &&
                (L || !U) &&
                b(
                  k,
                  F,
                  B,
                  { locale: P, priority: !0, bypassPrefetchedCheck: !0 },
                  { kind: q },
                  U
                );
          },
        };
        if ((0, c.isAbsoluteUrl)(B)) G.href = B;
        else if (!A || x || ("a" === n.type && !("href" in n.props))) {
          let e = void 0 !== P ? P : null == I ? void 0 : I.locale,
            t =
              (null == I ? void 0 : I.isLocaleDomain) &&
              (0, d.getDomainLocale)(
                B,
                e,
                null == I ? void 0 : I.locales,
                null == I ? void 0 : I.domainLocales
              );
          G.href =
            t ||
            (0, y.addBasePath)(
              (0, l.addLocale)(B, e, null == I ? void 0 : I.defaultLocale)
            );
        }
        return A
          ? i.default.cloneElement(n, G)
          : (0, o.jsx)("a", { ...T, ...G, children: r });
      });
      ("function" == typeof t.default ||
        ("object" == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, "__esModule", { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    63515: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (function (e, t) {
          for (var r in t)
            Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
        })(t, {
          cancelIdleCallback: function () {
            return n;
          },
          requestIdleCallback: function () {
            return r;
          },
        });
      let r =
          ("undefined" != typeof self &&
            self.requestIdleCallback &&
            self.requestIdleCallback.bind(window)) ||
          function (e) {
            let t = Date.now();
            return self.setTimeout(function () {
              e({
                didTimeout: !1,
                timeRemaining: function () {
                  return Math.max(0, 50 - (Date.now() - t));
                },
              });
            }, 1);
          },
        n =
          ("undefined" != typeof self &&
            self.cancelIdleCallback &&
            self.cancelIdleCallback.bind(window)) ||
          function (e) {
            return clearTimeout(e);
          };
      ("function" == typeof t.default ||
        ("object" == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, "__esModule", { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    25246: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "resolveHref", {
          enumerable: !0,
          get: function () {
            return f;
          },
        });
      let n = r(48637),
        o = r(57497),
        i = r(17053),
        s = r(3987),
        a = r(33068),
        u = r(53552),
        c = r(86279),
        l = r(37205);
      function f(e, t, r) {
        let f;
        let h = "string" == typeof t ? t : (0, o.formatWithValidation)(t),
          p = h.match(/^[a-zA-Z]{1,}:\/\//),
          d = p ? h.slice(p[0].length) : h;
        if ((d.split("?", 1)[0] || "").match(/(\/\/|\\)/)) {
          console.error(
            "Invalid href '" +
              h +
              "' passed to next/router in page: '" +
              e.pathname +
              "'. Repeated forward-slashes (//) or backslashes \\ are not valid in the href."
          );
          let t = (0, s.normalizeRepeatedSlashes)(d);
          h = (p ? p[0] : "") + t;
        }
        if (!(0, u.isLocalURL)(h)) return r ? [h] : h;
        try {
          f = new URL(h.startsWith("#") ? e.asPath : e.pathname, "http://n");
        } catch (e) {
          f = new URL("/", "http://n");
        }
        try {
          let e = new URL(h, f);
          e.pathname = (0, a.normalizePathTrailingSlash)(e.pathname);
          let t = "";
          if ((0, c.isDynamicRoute)(e.pathname) && e.searchParams && r) {
            let r = (0, n.searchParamsToUrlQuery)(e.searchParams),
              { result: s, params: a } = (0, l.interpolateAs)(
                e.pathname,
                e.pathname,
                r
              );
            s &&
              (t = (0, o.formatWithValidation)({
                pathname: s,
                hash: e.hash,
                query: (0, i.omit)(r, a),
              }));
          }
          let s =
            e.origin === f.origin ? e.href.slice(e.origin.length) : e.href;
          return r ? [s, t || s] : s;
        } catch (e) {
          return r ? [h] : h;
        }
      }
      ("function" == typeof t.default ||
        ("object" == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, "__esModule", { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    16081: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "useIntersection", {
          enumerable: !0,
          get: function () {
            return u;
          },
        });
      let n = r(2265),
        o = r(63515),
        i = "function" == typeof IntersectionObserver,
        s = new Map(),
        a = [];
      function u(e) {
        let { rootRef: t, rootMargin: r, disabled: u } = e,
          c = u || !i,
          [l, f] = (0, n.useState)(!1),
          h = (0, n.useRef)(null),
          p = (0, n.useCallback)((e) => {
            h.current = e;
          }, []);
        return (
          (0, n.useEffect)(() => {
            if (i) {
              if (c || l) return;
              let e = h.current;
              if (e && e.tagName)
                return (function (e, t, r) {
                  let {
                    id: n,
                    observer: o,
                    elements: i,
                  } = (function (e) {
                    let t;
                    let r = {
                        root: e.root || null,
                        margin: e.rootMargin || "",
                      },
                      n = a.find(
                        (e) => e.root === r.root && e.margin === r.margin
                      );
                    if (n && (t = s.get(n))) return t;
                    let o = new Map();
                    return (
                      (t = {
                        id: r,
                        observer: new IntersectionObserver((e) => {
                          e.forEach((e) => {
                            let t = o.get(e.target),
                              r = e.isIntersecting || e.intersectionRatio > 0;
                            t && r && t(r);
                          });
                        }, e),
                        elements: o,
                      }),
                      a.push(r),
                      s.set(r, t),
                      t
                    );
                  })(r);
                  return (
                    i.set(e, t),
                    o.observe(e),
                    function () {
                      if ((i.delete(e), o.unobserve(e), 0 === i.size)) {
                        o.disconnect(), s.delete(n);
                        let e = a.findIndex(
                          (e) => e.root === n.root && e.margin === n.margin
                        );
                        e > -1 && a.splice(e, 1);
                      }
                    }
                  );
                })(e, (e) => e && f(e), {
                  root: null == t ? void 0 : t.current,
                  rootMargin: r,
                });
            } else if (!l) {
              let e = (0, o.requestIdleCallback)(() => f(!0));
              return () => (0, o.cancelIdleCallback)(e);
            }
          }, [c, r, t, l, h.current]),
          [
            p,
            l,
            (0, n.useCallback)(() => {
              f(!1);
            }, []),
          ]
        );
      }
      ("function" == typeof t.default ||
        ("object" == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, "__esModule", { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    91436: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "AmpStateContext", {
          enumerable: !0,
          get: function () {
            return n;
          },
        });
      let n = r(47043)._(r(2265)).default.createContext({});
    },
    23964: function (e, t) {
      "use strict";
      function r(e) {
        let {
          ampFirst: t = !1,
          hybrid: r = !1,
          hasQuery: n = !1,
        } = void 0 === e ? {} : e;
        return t || (r && n);
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "isInAmpMode", {
          enumerable: !0,
          get: function () {
            return r;
          },
        });
    },
    55775: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "default", {
          enumerable: !0,
          get: function () {
            return i;
          },
        });
      let n = r(47043);
      r(57437), r(2265);
      let o = n._(r(15602));
      function i(e, t) {
        var r;
        let n = {
          loading: (e) => {
            let { error: t, isLoading: r, pastDelay: n } = e;
            return null;
          },
        };
        "function" == typeof e && (n.loader = e);
        let i = { ...n, ...t };
        return (0, o.default)({
          ...i,
          modules: null == (r = i.loadableGenerated) ? void 0 : r.modules,
        });
      }
      ("function" == typeof t.default ||
        ("object" == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, "__esModule", { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    90042: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "escapeStringRegexp", {
          enumerable: !0,
          get: function () {
            return o;
          },
        });
      let r = /[|\\{}()[\]^$+*?.-]/,
        n = /[|\\{}()[\]^$+*?.-]/g;
      function o(e) {
        return r.test(e) ? e.replace(n, "\\$&") : e;
      }
    },
    55346: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "getImgProps", {
          enumerable: !0,
          get: function () {
            return a;
          },
        }),
        r(31765);
      let n = r(96496),
        o = r(90128);
      function i(e) {
        return void 0 !== e.default;
      }
      function s(e) {
        return void 0 === e
          ? e
          : "number" == typeof e
          ? Number.isFinite(e)
            ? e
            : NaN
          : "string" == typeof e && /^[0-9]+$/.test(e)
          ? parseInt(e, 10)
          : NaN;
      }
      function a(e, t) {
        var r;
        let a,
          u,
          c,
          {
            src: l,
            sizes: f,
            unoptimized: h = !1,
            priority: p = !1,
            loading: d,
            className: y,
            quality: g,
            width: m,
            height: b,
            fill: v = !1,
            style: w,
            overrideSrc: _,
            onLoad: x,
            onLoadingComplete: E,
            placeholder: O = "empty",
            blurDataURL: C,
            fetchPriority: P,
            decoding: j = "async",
            layout: S,
            objectFit: R,
            objectPosition: A,
            lazyBoundary: T,
            lazyRoot: I,
            ...M
          } = e,
          { imgConf: k, showAltText: U, blurComplete: L, defaultLoader: q } = t,
          F = k || o.imageConfigDefault;
        if ("allSizes" in F) a = F;
        else {
          let e = [...F.deviceSizes, ...F.imageSizes].sort((e, t) => e - t),
            t = F.deviceSizes.sort((e, t) => e - t);
          a = { ...F, allSizes: e, deviceSizes: t };
        }
        if (void 0 === q)
          throw Error(
            "images.loaderFile detected but the file is missing default export.\nRead more: https://nextjs.org/docs/messages/invalid-images-config"
          );
        let B = M.loader || q;
        delete M.loader, delete M.srcSet;
        let N = "__next_img_default" in B;
        if (N) {
          if ("custom" === a.loader)
            throw Error(
              'Image with src "' +
                l +
                '" is missing "loader" prop.\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader'
            );
        } else {
          let e = B;
          B = (t) => {
            let { config: r, ...n } = t;
            return e(n);
          };
        }
        if (S) {
          "fill" === S && (v = !0);
          let e = {
            intrinsic: { maxWidth: "100%", height: "auto" },
            responsive: { width: "100%", height: "auto" },
          }[S];
          e && (w = { ...w, ...e });
          let t = { responsive: "100vw", fill: "100vw" }[S];
          t && !f && (f = t);
        }
        let $ = "",
          D = s(m),
          z = s(b);
        if ("object" == typeof (r = l) && (i(r) || void 0 !== r.src)) {
          let e = i(l) ? l.default : l;
          if (!e.src)
            throw Error(
              "An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received " +
                JSON.stringify(e)
            );
          if (!e.height || !e.width)
            throw Error(
              "An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received " +
                JSON.stringify(e)
            );
          if (
            ((u = e.blurWidth),
            (c = e.blurHeight),
            (C = C || e.blurDataURL),
            ($ = e.src),
            !v)
          ) {
            if (D || z) {
              if (D && !z) {
                let t = D / e.width;
                z = Math.round(e.height * t);
              } else if (!D && z) {
                let t = z / e.height;
                D = Math.round(e.width * t);
              }
            } else (D = e.width), (z = e.height);
          }
        }
        let W = !p && ("lazy" === d || void 0 === d);
        (!(l = "string" == typeof l ? l : $) ||
          l.startsWith("data:") ||
          l.startsWith("blob:")) &&
          ((h = !0), (W = !1)),
          a.unoptimized && (h = !0),
          N && l.endsWith(".svg") && !a.dangerouslyAllowSVG && (h = !0),
          p && (P = "high");
        let Y = s(g),
          H = Object.assign(
            v
              ? {
                  position: "absolute",
                  height: "100%",
                  width: "100%",
                  left: 0,
                  top: 0,
                  right: 0,
                  bottom: 0,
                  objectFit: R,
                  objectPosition: A,
                }
              : {},
            U ? {} : { color: "transparent" },
            w
          ),
          G =
            L || "empty" === O
              ? null
              : "blur" === O
              ? 'url("data:image/svg+xml;charset=utf-8,' +
                (0, n.getImageBlurSvg)({
                  widthInt: D,
                  heightInt: z,
                  blurWidth: u,
                  blurHeight: c,
                  blurDataURL: C || "",
                  objectFit: H.objectFit,
                }) +
                '")'
              : 'url("' + O + '")',
          V = G
            ? {
                backgroundSize: H.objectFit || "cover",
                backgroundPosition: H.objectPosition || "50% 50%",
                backgroundRepeat: "no-repeat",
                backgroundImage: G,
              }
            : {},
          X = (function (e) {
            let {
              config: t,
              src: r,
              unoptimized: n,
              width: o,
              quality: i,
              sizes: s,
              loader: a,
            } = e;
            if (n) return { src: r, srcSet: void 0, sizes: void 0 };
            let { widths: u, kind: c } = (function (e, t, r) {
                let { deviceSizes: n, allSizes: o } = e;
                if (r) {
                  let e = /(^|\s)(1?\d?\d)vw/g,
                    t = [];
                  for (let n; (n = e.exec(r)); n) t.push(parseInt(n[2]));
                  if (t.length) {
                    let e = 0.01 * Math.min(...t);
                    return {
                      widths: o.filter((t) => t >= n[0] * e),
                      kind: "w",
                    };
                  }
                  return { widths: o, kind: "w" };
                }
                return "number" != typeof t
                  ? { widths: n, kind: "w" }
                  : {
                      widths: [
                        ...new Set(
                          [t, 2 * t].map(
                            (e) => o.find((t) => t >= e) || o[o.length - 1]
                          )
                        ),
                      ],
                      kind: "x",
                    };
              })(t, o, s),
              l = u.length - 1;
            return {
              sizes: s || "w" !== c ? s : "100vw",
              srcSet: u
                .map(
                  (e, n) =>
                    a({ config: t, src: r, quality: i, width: e }) +
                    " " +
                    ("w" === c ? e : n + 1) +
                    c
                )
                .join(", "),
              src: a({ config: t, src: r, quality: i, width: u[l] }),
            };
          })({
            config: a,
            src: l,
            unoptimized: h,
            width: D,
            quality: Y,
            sizes: f,
            loader: B,
          });
        return {
          props: {
            ...M,
            loading: W ? "lazy" : d,
            fetchPriority: P,
            width: D,
            height: z,
            decoding: j,
            className: y,
            style: { ...H, ...V },
            sizes: X.sizes,
            srcSet: X.srcSet,
            src: _ || X.src,
          },
          meta: { unoptimized: h, priority: p, placeholder: O, fill: v },
        };
      }
    },
    38293: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (function (e, t) {
          for (var r in t)
            Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
        })(t, {
          default: function () {
            return y;
          },
          defaultHead: function () {
            return f;
          },
        });
      let n = r(47043),
        o = r(53099),
        i = r(57437),
        s = o._(r(2265)),
        a = n._(r(17421)),
        u = r(91436),
        c = r(48701),
        l = r(23964);
      function f(e) {
        void 0 === e && (e = !1);
        let t = [(0, i.jsx)("meta", { charSet: "utf-8" })];
        return (
          e ||
            t.push(
              (0, i.jsx)("meta", {
                name: "viewport",
                content: "width=device-width",
              })
            ),
          t
        );
      }
      function h(e, t) {
        return "string" == typeof t || "number" == typeof t
          ? e
          : t.type === s.default.Fragment
          ? e.concat(
              s.default.Children.toArray(t.props.children).reduce(
                (e, t) =>
                  "string" == typeof t || "number" == typeof t
                    ? e
                    : e.concat(t),
                []
              )
            )
          : e.concat(t);
      }
      r(31765);
      let p = ["name", "httpEquiv", "charSet", "itemProp"];
      function d(e, t) {
        let { inAmpMode: r } = t;
        return e
          .reduce(h, [])
          .reverse()
          .concat(f(r).reverse())
          .filter(
            (function () {
              let e = new Set(),
                t = new Set(),
                r = new Set(),
                n = {};
              return (o) => {
                let i = !0,
                  s = !1;
                if (
                  o.key &&
                  "number" != typeof o.key &&
                  o.key.indexOf("$") > 0
                ) {
                  s = !0;
                  let t = o.key.slice(o.key.indexOf("$") + 1);
                  e.has(t) ? (i = !1) : e.add(t);
                }
                switch (o.type) {
                  case "title":
                  case "base":
                    t.has(o.type) ? (i = !1) : t.add(o.type);
                    break;
                  case "meta":
                    for (let e = 0, t = p.length; e < t; e++) {
                      let t = p[e];
                      if (o.props.hasOwnProperty(t)) {
                        if ("charSet" === t) r.has(t) ? (i = !1) : r.add(t);
                        else {
                          let e = o.props[t],
                            r = n[t] || new Set();
                          ("name" !== t || !s) && r.has(e)
                            ? (i = !1)
                            : (r.add(e), (n[t] = r));
                        }
                      }
                    }
                }
                return i;
              };
            })()
          )
          .reverse()
          .map((e, t) => {
            let n = e.key || t;
            if (
              !r &&
              "link" === e.type &&
              e.props.href &&
              [
                "https://fonts.googleapis.com/css",
                "https://use.typekit.net/",
              ].some((t) => e.props.href.startsWith(t))
            ) {
              let t = { ...(e.props || {}) };
              return (
                (t["data-href"] = t.href),
                (t.href = void 0),
                (t["data-optimized-fonts"] = !0),
                s.default.cloneElement(e, t)
              );
            }
            return s.default.cloneElement(e, { key: n });
          });
      }
      let y = function (e) {
        let { children: t } = e,
          r = (0, s.useContext)(u.AmpStateContext),
          n = (0, s.useContext)(c.HeadManagerContext);
        return (0, i.jsx)(a.default, {
          reduceComponentsToState: d,
          headManager: n,
          inAmpMode: (0, l.isInAmpMode)(r),
          children: t,
        });
      };
      ("function" == typeof t.default ||
        ("object" == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, "__esModule", { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    96496: function (e, t) {
      "use strict";
      function r(e) {
        let {
            widthInt: t,
            heightInt: r,
            blurWidth: n,
            blurHeight: o,
            blurDataURL: i,
            objectFit: s,
          } = e,
          a = n ? 40 * n : t,
          u = o ? 40 * o : r,
          c = a && u ? "viewBox='0 0 " + a + " " + u + "'" : "";
        return (
          "%3Csvg xmlns='http://www.w3.org/2000/svg' " +
          c +
          "%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='" +
          (c
            ? "none"
            : "contain" === s
            ? "xMidYMid"
            : "cover" === s
            ? "xMidYMid slice"
            : "none") +
          "' style='filter: url(%23b);' href='" +
          i +
          "'/%3E%3C/svg%3E"
        );
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "getImageBlurSvg", {
          enumerable: !0,
          get: function () {
            return r;
          },
        });
    },
    62589: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "ImageConfigContext", {
          enumerable: !0,
          get: function () {
            return i;
          },
        });
      let n = r(47043)._(r(2265)),
        o = r(90128),
        i = n.default.createContext(o.imageConfigDefault);
    },
    90128: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (function (e, t) {
          for (var r in t)
            Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
        })(t, {
          VALID_LOADERS: function () {
            return r;
          },
          imageConfigDefault: function () {
            return n;
          },
        });
      let r = ["default", "imgix", "cloudinary", "akamai", "custom"],
        n = {
          deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
          imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
          path: "/_next/image",
          loader: "default",
          loaderFile: "",
          domains: [],
          disableStaticImages: !1,
          minimumCacheTTL: 60,
          formats: ["image/webp"],
          dangerouslyAllowSVG: !1,
          contentSecurityPolicy:
            "script-src 'none'; frame-src 'none'; sandbox;",
          contentDispositionType: "inline",
          localPatterns: void 0,
          remotePatterns: [],
          unoptimized: !1,
        };
    },
    48461: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (function (e, t) {
          for (var r in t)
            Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
        })(t, {
          default: function () {
            return u;
          },
          getImageProps: function () {
            return a;
          },
        });
      let n = r(47043),
        o = r(55346),
        i = r(65878),
        s = n._(r(5084));
      function a(e) {
        let { props: t } = (0, o.getImgProps)(e, {
          defaultLoader: s.default,
          imgConf: {
            deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
            imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
            path: "/_next/image",
            loader: "default",
            dangerouslyAllowSVG: !1,
            unoptimized: !1,
          },
        });
        for (let [e, r] of Object.entries(t)) void 0 === r && delete t[e];
        return { props: t };
      }
      let u = i.Image;
    },
    5084: function (e, t) {
      "use strict";
      function r(e) {
        let { config: t, src: r, width: n, quality: o } = e;
        return r;
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "default", {
          enumerable: !0,
          get: function () {
            return n;
          },
        }),
        (r.__next_img_default = !0);
      let n = r;
    },
    81523: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "BailoutToCSR", {
          enumerable: !0,
          get: function () {
            return o;
          },
        });
      let n = r(18993);
      function o(e) {
        let { reason: t, children: r } = e;
        if ("undefined" == typeof window) throw new n.BailoutToCSRError(t);
        return r;
      }
    },
    15602: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "default", {
          enumerable: !0,
          get: function () {
            return c;
          },
        });
      let n = r(57437),
        o = r(2265),
        i = r(81523),
        s = r(70049);
      function a(e) {
        return { default: e && "default" in e ? e.default : e };
      }
      let u = {
          loader: () => Promise.resolve(a(() => null)),
          loading: null,
          ssr: !0,
        },
        c = function (e) {
          let t = { ...u, ...e },
            r = (0, o.lazy)(() => t.loader().then(a)),
            c = t.loading;
          function l(e) {
            let a = c
                ? (0, n.jsx)(c, { isLoading: !0, pastDelay: !0, error: null })
                : null,
              u = t.ssr
                ? (0, n.jsxs)(n.Fragment, {
                    children: [
                      "undefined" == typeof window
                        ? (0, n.jsx)(s.PreloadCss, { moduleIds: t.modules })
                        : null,
                      (0, n.jsx)(r, { ...e }),
                    ],
                  })
                : (0, n.jsx)(i.BailoutToCSR, {
                    reason: "next/dynamic",
                    children: (0, n.jsx)(r, { ...e }),
                  });
            return (0, n.jsx)(o.Suspense, { fallback: a, children: u });
          }
          return (l.displayName = "LoadableComponent"), l;
        };
    },
    70049: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "PreloadCss", {
          enumerable: !0,
          get: function () {
            return i;
          },
        });
      let n = r(57437),
        o = r(20544);
      function i(e) {
        let { moduleIds: t } = e;
        if ("undefined" != typeof window) return null;
        let r = (0, o.getExpectedRequestStore)("next/dynamic css"),
          i = [];
        if (r.reactLoadableManifest && t) {
          let e = r.reactLoadableManifest;
          for (let r of t) {
            if (!e[r]) continue;
            let t = e[r].files.filter((e) => e.endsWith(".css"));
            i.push(...t);
          }
        }
        return 0 === i.length
          ? null
          : (0, n.jsx)(n.Fragment, {
              children: i.map((e) =>
                (0, n.jsx)(
                  "link",
                  {
                    precedence: "dynamic",
                    rel: "stylesheet",
                    href: r.assetPrefix + "/_next/" + encodeURI(e),
                    as: "style",
                  },
                  e
                )
              ),
            });
      }
    },
    25523: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "RouterContext", {
          enumerable: !0,
          get: function () {
            return n;
          },
        });
      let n = r(47043)._(r(2265)).default.createContext(null);
    },
    57497: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (function (e, t) {
          for (var r in t)
            Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
        })(t, {
          formatUrl: function () {
            return i;
          },
          formatWithValidation: function () {
            return a;
          },
          urlObjectKeys: function () {
            return s;
          },
        });
      let n = r(53099)._(r(48637)),
        o = /https?|ftp|gopher|file/;
      function i(e) {
        let { auth: t, hostname: r } = e,
          i = e.protocol || "",
          s = e.pathname || "",
          a = e.hash || "",
          u = e.query || "",
          c = !1;
        (t = t ? encodeURIComponent(t).replace(/%3A/i, ":") + "@" : ""),
          e.host
            ? (c = t + e.host)
            : r &&
              ((c = t + (~r.indexOf(":") ? "[" + r + "]" : r)),
              e.port && (c += ":" + e.port)),
          u &&
            "object" == typeof u &&
            (u = String(n.urlQueryToSearchParams(u)));
        let l = e.search || (u && "?" + u) || "";
        return (
          i && !i.endsWith(":") && (i += ":"),
          e.slashes || ((!i || o.test(i)) && !1 !== c)
            ? ((c = "//" + (c || "")), s && "/" !== s[0] && (s = "/" + s))
            : c || (c = ""),
          a && "#" !== a[0] && (a = "#" + a),
          l && "?" !== l[0] && (l = "?" + l),
          "" +
            i +
            c +
            (s = s.replace(/[?#]/g, encodeURIComponent)) +
            (l = l.replace("#", "%23")) +
            a
        );
      }
      let s = [
        "auth",
        "hash",
        "host",
        "hostname",
        "href",
        "path",
        "pathname",
        "port",
        "protocol",
        "query",
        "search",
        "slashes",
      ];
      function a(e) {
        return i(e);
      }
    },
    86279: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (function (e, t) {
          for (var r in t)
            Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
        })(t, {
          getSortedRoutes: function () {
            return n.getSortedRoutes;
          },
          isDynamicRoute: function () {
            return o.isDynamicRoute;
          },
        });
      let n = r(14777),
        o = r(38104);
    },
    37205: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "interpolateAs", {
          enumerable: !0,
          get: function () {
            return i;
          },
        });
      let n = r(4199),
        o = r(9964);
      function i(e, t, r) {
        let i = "",
          s = (0, o.getRouteRegex)(e),
          a = s.groups,
          u = (t !== e ? (0, n.getRouteMatcher)(s)(t) : "") || r;
        i = e;
        let c = Object.keys(a);
        return (
          c.every((e) => {
            let t = u[e] || "",
              { repeat: r, optional: n } = a[e],
              o = "[" + (r ? "..." : "") + e + "]";
            return (
              n && (o = (t ? "" : "/") + "[" + o + "]"),
              r && !Array.isArray(t) && (t = [t]),
              (n || e in u) &&
                (i =
                  i.replace(
                    o,
                    r
                      ? t.map((e) => encodeURIComponent(e)).join("/")
                      : encodeURIComponent(t)
                  ) || "/")
            );
          }) || (i = ""),
          { params: c, result: i }
        );
      }
    },
    38104: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "isDynamicRoute", {
          enumerable: !0,
          get: function () {
            return i;
          },
        });
      let n = r(91182),
        o = /\/\[[^/]+?\](?=\/|$)/;
      function i(e) {
        return (
          (0, n.isInterceptionRouteAppPath)(e) &&
            (e = (0, n.extractInterceptionRouteInformation)(
              e
            ).interceptedRoute),
          o.test(e)
        );
      }
    },
    53552: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "isLocalURL", {
          enumerable: !0,
          get: function () {
            return i;
          },
        });
      let n = r(3987),
        o = r(11283);
      function i(e) {
        if (!(0, n.isAbsoluteUrl)(e)) return !0;
        try {
          let t = (0, n.getLocationOrigin)(),
            r = new URL(e, t);
          return r.origin === t && (0, o.hasBasePath)(r.pathname);
        } catch (e) {
          return !1;
        }
      }
    },
    17053: function (e, t) {
      "use strict";
      function r(e, t) {
        let r = {};
        return (
          Object.keys(e).forEach((n) => {
            t.includes(n) || (r[n] = e[n]);
          }),
          r
        );
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "omit", {
          enumerable: !0,
          get: function () {
            return r;
          },
        });
    },
    48637: function (e, t) {
      "use strict";
      function r(e) {
        let t = {};
        return (
          e.forEach((e, r) => {
            void 0 === t[r]
              ? (t[r] = e)
              : Array.isArray(t[r])
              ? t[r].push(e)
              : (t[r] = [t[r], e]);
          }),
          t
        );
      }
      function n(e) {
        return "string" != typeof e &&
          ("number" != typeof e || isNaN(e)) &&
          "boolean" != typeof e
          ? ""
          : String(e);
      }
      function o(e) {
        let t = new URLSearchParams();
        return (
          Object.entries(e).forEach((e) => {
            let [r, o] = e;
            Array.isArray(o)
              ? o.forEach((e) => t.append(r, n(e)))
              : t.set(r, n(o));
          }),
          t
        );
      }
      function i(e) {
        for (
          var t = arguments.length, r = Array(t > 1 ? t - 1 : 0), n = 1;
          n < t;
          n++
        )
          r[n - 1] = arguments[n];
        return (
          r.forEach((t) => {
            Array.from(t.keys()).forEach((t) => e.delete(t)),
              t.forEach((t, r) => e.append(r, t));
          }),
          e
        );
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (function (e, t) {
          for (var r in t)
            Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
        })(t, {
          assign: function () {
            return i;
          },
          searchParamsToUrlQuery: function () {
            return r;
          },
          urlQueryToSearchParams: function () {
            return o;
          },
        });
    },
    4199: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "getRouteMatcher", {
          enumerable: !0,
          get: function () {
            return o;
          },
        });
      let n = r(3987);
      function o(e) {
        let { re: t, groups: r } = e;
        return (e) => {
          let o = t.exec(e);
          if (!o) return !1;
          let i = (e) => {
              try {
                return decodeURIComponent(e);
              } catch (e) {
                throw new n.DecodeError("failed to decode param");
              }
            },
            s = {};
          return (
            Object.keys(r).forEach((e) => {
              let t = r[e],
                n = o[t.pos];
              void 0 !== n &&
                (s[e] = ~n.indexOf("/")
                  ? n.split("/").map((e) => i(e))
                  : t.repeat
                  ? [i(n)]
                  : i(n));
            }),
            s
          );
        };
      }
    },
    9964: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (function (e, t) {
          for (var r in t)
            Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
        })(t, {
          getNamedMiddlewareRegex: function () {
            return h;
          },
          getNamedRouteRegex: function () {
            return f;
          },
          getRouteRegex: function () {
            return u;
          },
          parseParameter: function () {
            return s;
          },
        });
      let n = r(91182),
        o = r(90042),
        i = r(26674);
      function s(e) {
        let t = e.startsWith("[") && e.endsWith("]");
        t && (e = e.slice(1, -1));
        let r = e.startsWith("...");
        return r && (e = e.slice(3)), { key: e, repeat: r, optional: t };
      }
      function a(e) {
        let t = (0, i.removeTrailingSlash)(e).slice(1).split("/"),
          r = {},
          a = 1;
        return {
          parameterizedRoute: t
            .map((e) => {
              let t = n.INTERCEPTION_ROUTE_MARKERS.find((t) => e.startsWith(t)),
                i = e.match(/\[((?:\[.*\])|.+)\]/);
              if (t && i) {
                let { key: e, optional: n, repeat: u } = s(i[1]);
                return (
                  (r[e] = { pos: a++, repeat: u, optional: n }),
                  "/" + (0, o.escapeStringRegexp)(t) + "([^/]+?)"
                );
              }
              if (!i) return "/" + (0, o.escapeStringRegexp)(e);
              {
                let { key: e, repeat: t, optional: n } = s(i[1]);
                return (
                  (r[e] = { pos: a++, repeat: t, optional: n }),
                  t ? (n ? "(?:/(.+?))?" : "/(.+?)") : "/([^/]+?)"
                );
              }
            })
            .join(""),
          groups: r,
        };
      }
      function u(e) {
        let { parameterizedRoute: t, groups: r } = a(e);
        return { re: RegExp("^" + t + "(?:/)?$"), groups: r };
      }
      function c(e) {
        let {
            interceptionMarker: t,
            getSafeRouteKey: r,
            segment: n,
            routeKeys: i,
            keyPrefix: a,
          } = e,
          { key: u, optional: c, repeat: l } = s(n),
          f = u.replace(/\W/g, "");
        a && (f = "" + a + f);
        let h = !1;
        (0 === f.length || f.length > 30) && (h = !0),
          isNaN(parseInt(f.slice(0, 1))) || (h = !0),
          h && (f = r()),
          a ? (i[f] = "" + a + u) : (i[f] = u);
        let p = t ? (0, o.escapeStringRegexp)(t) : "";
        return l
          ? c
            ? "(?:/" + p + "(?<" + f + ">.+?))?"
            : "/" + p + "(?<" + f + ">.+?)"
          : "/" + p + "(?<" + f + ">[^/]+?)";
      }
      function l(e, t) {
        let r;
        let s = (0, i.removeTrailingSlash)(e).slice(1).split("/"),
          a =
            ((r = 0),
            () => {
              let e = "",
                t = ++r;
              for (; t > 0; )
                (e += String.fromCharCode(97 + ((t - 1) % 26))),
                  (t = Math.floor((t - 1) / 26));
              return e;
            }),
          u = {};
        return {
          namedParameterizedRoute: s
            .map((e) => {
              let r = n.INTERCEPTION_ROUTE_MARKERS.some((t) => e.startsWith(t)),
                i = e.match(/\[((?:\[.*\])|.+)\]/);
              if (r && i) {
                let [r] = e.split(i[0]);
                return c({
                  getSafeRouteKey: a,
                  interceptionMarker: r,
                  segment: i[1],
                  routeKeys: u,
                  keyPrefix: t ? "nxtI" : void 0,
                });
              }
              return i
                ? c({
                    getSafeRouteKey: a,
                    segment: i[1],
                    routeKeys: u,
                    keyPrefix: t ? "nxtP" : void 0,
                  })
                : "/" + (0, o.escapeStringRegexp)(e);
            })
            .join(""),
          routeKeys: u,
        };
      }
      function f(e, t) {
        let r = l(e, t);
        return {
          ...u(e),
          namedRegex: "^" + r.namedParameterizedRoute + "(?:/)?$",
          routeKeys: r.routeKeys,
        };
      }
      function h(e, t) {
        let { parameterizedRoute: r } = a(e),
          { catchAll: n = !0 } = t;
        if ("/" === r) return { namedRegex: "^/" + (n ? ".*" : "") + "$" };
        let { namedParameterizedRoute: o } = l(e, !1);
        return { namedRegex: "^" + o + (n ? "(?:(/.*)?)" : "") + "$" };
      }
    },
    14777: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "getSortedRoutes", {
          enumerable: !0,
          get: function () {
            return n;
          },
        });
      class r {
        insert(e) {
          this._insert(e.split("/").filter(Boolean), [], !1);
        }
        smoosh() {
          return this._smoosh();
        }
        _smoosh(e) {
          void 0 === e && (e = "/");
          let t = [...this.children.keys()].sort();
          null !== this.slugName && t.splice(t.indexOf("[]"), 1),
            null !== this.restSlugName && t.splice(t.indexOf("[...]"), 1),
            null !== this.optionalRestSlugName &&
              t.splice(t.indexOf("[[...]]"), 1);
          let r = t
            .map((t) => this.children.get(t)._smoosh("" + e + t + "/"))
            .reduce((e, t) => [...e, ...t], []);
          if (
            (null !== this.slugName &&
              r.push(
                ...this.children
                  .get("[]")
                  ._smoosh(e + "[" + this.slugName + "]/")
              ),
            !this.placeholder)
          ) {
            let t = "/" === e ? "/" : e.slice(0, -1);
            if (null != this.optionalRestSlugName)
              throw Error(
                'You cannot define a route with the same specificity as a optional catch-all route ("' +
                  t +
                  '" and "' +
                  t +
                  "[[..." +
                  this.optionalRestSlugName +
                  ']]").'
              );
            r.unshift(t);
          }
          return (
            null !== this.restSlugName &&
              r.push(
                ...this.children
                  .get("[...]")
                  ._smoosh(e + "[..." + this.restSlugName + "]/")
              ),
            null !== this.optionalRestSlugName &&
              r.push(
                ...this.children
                  .get("[[...]]")
                  ._smoosh(e + "[[..." + this.optionalRestSlugName + "]]/")
              ),
            r
          );
        }
        _insert(e, t, n) {
          if (0 === e.length) {
            this.placeholder = !1;
            return;
          }
          if (n) throw Error("Catch-all must be the last part of the URL.");
          let o = e[0];
          if (o.startsWith("[") && o.endsWith("]")) {
            let r = o.slice(1, -1),
              s = !1;
            if (
              (r.startsWith("[") &&
                r.endsWith("]") &&
                ((r = r.slice(1, -1)), (s = !0)),
              r.startsWith("...") && ((r = r.substring(3)), (n = !0)),
              r.startsWith("[") || r.endsWith("]"))
            )
              throw Error(
                "Segment names may not start or end with extra brackets ('" +
                  r +
                  "')."
              );
            if (r.startsWith("."))
              throw Error(
                "Segment names may not start with erroneous periods ('" +
                  r +
                  "')."
              );
            function i(e, r) {
              if (null !== e && e !== r)
                throw Error(
                  "You cannot use different slug names for the same dynamic path ('" +
                    e +
                    "' !== '" +
                    r +
                    "')."
                );
              t.forEach((e) => {
                if (e === r)
                  throw Error(
                    'You cannot have the same slug name "' +
                      r +
                      '" repeat within a single dynamic path'
                  );
                if (e.replace(/\W/g, "") === o.replace(/\W/g, ""))
                  throw Error(
                    'You cannot have the slug names "' +
                      e +
                      '" and "' +
                      r +
                      '" differ only by non-word symbols within a single dynamic path'
                  );
              }),
                t.push(r);
            }
            if (n) {
              if (s) {
                if (null != this.restSlugName)
                  throw Error(
                    'You cannot use both an required and optional catch-all route at the same level ("[...' +
                      this.restSlugName +
                      ']" and "' +
                      e[0] +
                      '" ).'
                  );
                i(this.optionalRestSlugName, r),
                  (this.optionalRestSlugName = r),
                  (o = "[[...]]");
              } else {
                if (null != this.optionalRestSlugName)
                  throw Error(
                    'You cannot use both an optional and required catch-all route at the same level ("[[...' +
                      this.optionalRestSlugName +
                      ']]" and "' +
                      e[0] +
                      '").'
                  );
                i(this.restSlugName, r), (this.restSlugName = r), (o = "[...]");
              }
            } else {
              if (s)
                throw Error(
                  'Optional route parameters are not yet supported ("' +
                    e[0] +
                    '").'
                );
              i(this.slugName, r), (this.slugName = r), (o = "[]");
            }
          }
          this.children.has(o) || this.children.set(o, new r()),
            this.children.get(o)._insert(e.slice(1), t, n);
        }
        constructor() {
          (this.placeholder = !0),
            (this.children = new Map()),
            (this.slugName = null),
            (this.restSlugName = null),
            (this.optionalRestSlugName = null);
        }
      }
      function n(e) {
        let t = new r();
        return e.forEach((e) => t.insert(e)), t.smoosh();
      }
    },
    17421: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "default", {
          enumerable: !0,
          get: function () {
            return a;
          },
        });
      let n = r(2265),
        o = "undefined" == typeof window,
        i = o ? () => {} : n.useLayoutEffect,
        s = o ? () => {} : n.useEffect;
      function a(e) {
        let { headManager: t, reduceComponentsToState: r } = e;
        function a() {
          if (t && t.mountedInstances) {
            let o = n.Children.toArray(
              Array.from(t.mountedInstances).filter(Boolean)
            );
            t.updateHead(r(o, e));
          }
        }
        if (o) {
          var u;
          null == t || null == (u = t.mountedInstances) || u.add(e.children),
            a();
        }
        return (
          i(() => {
            var r;
            return (
              null == t ||
                null == (r = t.mountedInstances) ||
                r.add(e.children),
              () => {
                var r;
                null == t ||
                  null == (r = t.mountedInstances) ||
                  r.delete(e.children);
              }
            );
          }),
          i(
            () => (
              t && (t._pendingUpdate = a),
              () => {
                t && (t._pendingUpdate = a);
              }
            )
          ),
          s(
            () => (
              t &&
                t._pendingUpdate &&
                (t._pendingUpdate(), (t._pendingUpdate = null)),
              () => {
                t &&
                  t._pendingUpdate &&
                  (t._pendingUpdate(), (t._pendingUpdate = null));
              }
            )
          ),
          null
        );
      }
    },
    3987: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (function (e, t) {
          for (var r in t)
            Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
        })(t, {
          DecodeError: function () {
            return d;
          },
          MiddlewareNotFoundError: function () {
            return b;
          },
          MissingStaticPage: function () {
            return m;
          },
          NormalizeError: function () {
            return y;
          },
          PageNotFoundError: function () {
            return g;
          },
          SP: function () {
            return h;
          },
          ST: function () {
            return p;
          },
          WEB_VITALS: function () {
            return r;
          },
          execOnce: function () {
            return n;
          },
          getDisplayName: function () {
            return u;
          },
          getLocationOrigin: function () {
            return s;
          },
          getURL: function () {
            return a;
          },
          isAbsoluteUrl: function () {
            return i;
          },
          isResSent: function () {
            return c;
          },
          loadGetInitialProps: function () {
            return f;
          },
          normalizeRepeatedSlashes: function () {
            return l;
          },
          stringifyError: function () {
            return v;
          },
        });
      let r = ["CLS", "FCP", "FID", "INP", "LCP", "TTFB"];
      function n(e) {
        let t,
          r = !1;
        return function () {
          for (var n = arguments.length, o = Array(n), i = 0; i < n; i++)
            o[i] = arguments[i];
          return r || ((r = !0), (t = e(...o))), t;
        };
      }
      let o = /^[a-zA-Z][a-zA-Z\d+\-.]*?:/,
        i = (e) => o.test(e);
      function s() {
        let { protocol: e, hostname: t, port: r } = window.location;
        return e + "//" + t + (r ? ":" + r : "");
      }
      function a() {
        let { href: e } = window.location,
          t = s();
        return e.substring(t.length);
      }
      function u(e) {
        return "string" == typeof e ? e : e.displayName || e.name || "Unknown";
      }
      function c(e) {
        return e.finished || e.headersSent;
      }
      function l(e) {
        let t = e.split("?");
        return (
          t[0].replace(/\\/g, "/").replace(/\/\/+/g, "/") +
          (t[1] ? "?" + t.slice(1).join("?") : "")
        );
      }
      async function f(e, t) {
        let r = t.res || (t.ctx && t.ctx.res);
        if (!e.getInitialProps)
          return t.ctx && t.Component
            ? { pageProps: await f(t.Component, t.ctx) }
            : {};
        let n = await e.getInitialProps(t);
        if (r && c(r)) return n;
        if (!n)
          throw Error(
            '"' +
              u(e) +
              '.getInitialProps()" should resolve to an object. But found "' +
              n +
              '" instead.'
          );
        return n;
      }
      let h = "undefined" != typeof performance,
        p =
          h &&
          ["mark", "measure", "getEntriesByName"].every(
            (e) => "function" == typeof performance[e]
          );
      class d extends Error {}
      class y extends Error {}
      class g extends Error {
        constructor(e) {
          super(),
            (this.code = "ENOENT"),
            (this.name = "PageNotFoundError"),
            (this.message = "Cannot find module for page: " + e);
        }
      }
      class m extends Error {
        constructor(e, t) {
          super(),
            (this.message =
              "Failed to load static file for page: " + e + " " + t);
        }
      }
      class b extends Error {
        constructor() {
          super(),
            (this.code = "ENOENT"),
            (this.message = "Cannot find the middleware module");
        }
      }
      function v(e) {
        return JSON.stringify({ message: e.message, stack: e.stack });
      }
    },
    78743: function (e, t, r) {
      "use strict";
      r.d(t, {
        y: function () {
          return l;
        },
      });
      var n = r(19142),
        o = r(37219),
        i = r(27723),
        s = r(95767),
        a = r(80124),
        u = r(2070),
        c = r(99287),
        l = (function () {
          function e(e) {
            e && (this._subscribe = e);
          }
          return (
            (e.prototype.lift = function (t) {
              var r = new e();
              return (r.source = this), (r.operator = t), r;
            }),
            (e.prototype.subscribe = function (e, t, r) {
              var i,
                s = this,
                a =
                  ((i = e) && i instanceof n.Lv) ||
                  (i &&
                    (0, u.m)(i.next) &&
                    (0, u.m)(i.error) &&
                    (0, u.m)(i.complete) &&
                    (0, o.Nn)(i))
                    ? e
                    : new n.Hp(e, t, r);
              return (
                (0, c.x)(function () {
                  var e = s.operator,
                    t = s.source;
                  a.add(
                    e ? e.call(a, t) : t ? s._subscribe(a) : s._trySubscribe(a)
                  );
                }),
                a
              );
            }),
            (e.prototype._trySubscribe = function (e) {
              try {
                return this._subscribe(e);
              } catch (t) {
                e.error(t);
              }
            }),
            (e.prototype.forEach = function (e, t) {
              var r = this;
              return new (t = f(t))(function (t, o) {
                var i = new n.Hp({
                  next: function (t) {
                    try {
                      e(t);
                    } catch (e) {
                      o(e), i.unsubscribe();
                    }
                  },
                  error: o,
                  complete: t,
                });
                r.subscribe(i);
              });
            }),
            (e.prototype._subscribe = function (e) {
              var t;
              return null === (t = this.source) || void 0 === t
                ? void 0
                : t.subscribe(e);
            }),
            (e.prototype[i.L] = function () {
              return this;
            }),
            (e.prototype.pipe = function () {
              for (var e = [], t = 0; t < arguments.length; t++)
                e[t] = arguments[t];
              return (0, s.U)(e)(this);
            }),
            (e.prototype.toPromise = function (e) {
              var t = this;
              return new (e = f(e))(function (e, r) {
                var n;
                t.subscribe(
                  function (e) {
                    return (n = e);
                  },
                  function (e) {
                    return r(e);
                  },
                  function () {
                    return e(n);
                  }
                );
              });
            }),
            (e.create = function (t) {
              return new e(t);
            }),
            e
          );
        })();
      function f(e) {
        var t;
        return null !== (t = null != e ? e : a.v.Promise) && void 0 !== t
          ? t
          : Promise;
      }
    },
    19142: function (e, t, r) {
      "use strict";
      r.d(t, {
        Hp: function () {
          return m;
        },
        Lv: function () {
          return p;
        },
      });
      var n = r(5853),
        o = r(2070),
        i = r(37219),
        s = r(80124),
        a = r(67444),
        u = r(8365),
        c = l("C", void 0, void 0);
      function l(e, t, r) {
        return { kind: e, value: t, error: r };
      }
      var f = r(94814),
        h = r(99287),
        p = (function (e) {
          function t(t) {
            var r = e.call(this) || this;
            return (
              (r.isStopped = !1),
              t
                ? ((r.destination = t), (0, i.Nn)(t) && t.add(r))
                : (r.destination = w),
              r
            );
          }
          return (
            (0, n.__extends)(t, e),
            (t.create = function (e, t, r) {
              return new m(e, t, r);
            }),
            (t.prototype.next = function (e) {
              this.isStopped ? v(l("N", e, void 0), this) : this._next(e);
            }),
            (t.prototype.error = function (e) {
              this.isStopped
                ? v(l("E", void 0, e), this)
                : ((this.isStopped = !0), this._error(e));
            }),
            (t.prototype.complete = function () {
              this.isStopped
                ? v(c, this)
                : ((this.isStopped = !0), this._complete());
            }),
            (t.prototype.unsubscribe = function () {
              this.closed ||
                ((this.isStopped = !0),
                e.prototype.unsubscribe.call(this),
                (this.destination = null));
            }),
            (t.prototype._next = function (e) {
              this.destination.next(e);
            }),
            (t.prototype._error = function (e) {
              try {
                this.destination.error(e);
              } finally {
                this.unsubscribe();
              }
            }),
            (t.prototype._complete = function () {
              try {
                this.destination.complete();
              } finally {
                this.unsubscribe();
              }
            }),
            t
          );
        })(i.w0),
        d = Function.prototype.bind;
      function y(e, t) {
        return d.call(e, t);
      }
      var g = (function () {
          function e(e) {
            this.partialObserver = e;
          }
          return (
            (e.prototype.next = function (e) {
              var t = this.partialObserver;
              if (t.next)
                try {
                  t.next(e);
                } catch (e) {
                  b(e);
                }
            }),
            (e.prototype.error = function (e) {
              var t = this.partialObserver;
              if (t.error)
                try {
                  t.error(e);
                } catch (e) {
                  b(e);
                }
              else b(e);
            }),
            (e.prototype.complete = function () {
              var e = this.partialObserver;
              if (e.complete)
                try {
                  e.complete();
                } catch (e) {
                  b(e);
                }
            }),
            e
          );
        })(),
        m = (function (e) {
          function t(t, r, n) {
            var i,
              a,
              u = e.call(this) || this;
            return (
              (0, o.m)(t) || !t
                ? (i = {
                    next: null != t ? t : void 0,
                    error: null != r ? r : void 0,
                    complete: null != n ? n : void 0,
                  })
                : u && s.v.useDeprecatedNextContext
                ? (((a = Object.create(t)).unsubscribe = function () {
                    return u.unsubscribe();
                  }),
                  (i = {
                    next: t.next && y(t.next, a),
                    error: t.error && y(t.error, a),
                    complete: t.complete && y(t.complete, a),
                  }))
                : (i = t),
              (u.destination = new g(i)),
              u
            );
          }
          return (0, n.__extends)(t, e), t;
        })(p);
      function b(e) {
        s.v.useDeprecatedSynchronousErrorHandling ? (0, h.O)(e) : (0, a.h)(e);
      }
      function v(e, t) {
        var r = s.v.onStoppedNotification;
        r &&
          f.z.setTimeout(function () {
            return r(e, t);
          });
      }
      var w = {
        closed: !0,
        next: u.Z,
        error: function (e) {
          throw e;
        },
        complete: u.Z,
      };
    },
    37219: function (e, t, r) {
      "use strict";
      r.d(t, {
        Lc: function () {
          return u;
        },
        w0: function () {
          return a;
        },
        Nn: function () {
          return c;
        },
      });
      var n = r(5853),
        o = r(2070),
        i = (0, r(37169).d)(function (e) {
          return function (t) {
            e(this),
              (this.message = t
                ? t.length +
                  " errors occurred during unsubscription:\n" +
                  t
                    .map(function (e, t) {
                      return t + 1 + ") " + e.toString();
                    })
                    .join("\n  ")
                : ""),
              (this.name = "UnsubscriptionError"),
              (this.errors = t);
          };
        }),
        s = r(30325),
        a = (function () {
          var e;
          function t(e) {
            (this.initialTeardown = e),
              (this.closed = !1),
              (this._parentage = null),
              (this._finalizers = null);
          }
          return (
            (t.prototype.unsubscribe = function () {
              if (!this.closed) {
                this.closed = !0;
                var e,
                  t,
                  r,
                  s,
                  a,
                  u = this._parentage;
                if (u) {
                  if (((this._parentage = null), Array.isArray(u)))
                    try {
                      for (
                        var c = (0, n.__values)(u), f = c.next();
                        !f.done;
                        f = c.next()
                      )
                        f.value.remove(this);
                    } catch (t) {
                      e = { error: t };
                    } finally {
                      try {
                        f && !f.done && (t = c.return) && t.call(c);
                      } finally {
                        if (e) throw e.error;
                      }
                    }
                  else u.remove(this);
                }
                var h = this.initialTeardown;
                if ((0, o.m)(h))
                  try {
                    h();
                  } catch (e) {
                    a = e instanceof i ? e.errors : [e];
                  }
                var p = this._finalizers;
                if (p) {
                  this._finalizers = null;
                  try {
                    for (
                      var d = (0, n.__values)(p), y = d.next();
                      !y.done;
                      y = d.next()
                    ) {
                      var g = y.value;
                      try {
                        l(g);
                      } catch (e) {
                        (a = null != a ? a : []),
                          e instanceof i
                            ? (a = (0, n.__spreadArray)(
                                (0, n.__spreadArray)([], (0, n.__read)(a)),
                                (0, n.__read)(e.errors)
                              ))
                            : a.push(e);
                      }
                    }
                  } catch (e) {
                    r = { error: e };
                  } finally {
                    try {
                      y && !y.done && (s = d.return) && s.call(d);
                    } finally {
                      if (r) throw r.error;
                    }
                  }
                }
                if (a) throw new i(a);
              }
            }),
            (t.prototype.add = function (e) {
              var r;
              if (e && e !== this) {
                if (this.closed) l(e);
                else {
                  if (e instanceof t) {
                    if (e.closed || e._hasParent(this)) return;
                    e._addParent(this);
                  }
                  (this._finalizers =
                    null !== (r = this._finalizers) && void 0 !== r
                      ? r
                      : []).push(e);
                }
              }
            }),
            (t.prototype._hasParent = function (e) {
              var t = this._parentage;
              return t === e || (Array.isArray(t) && t.includes(e));
            }),
            (t.prototype._addParent = function (e) {
              var t = this._parentage;
              this._parentage = Array.isArray(t)
                ? (t.push(e), t)
                : t
                ? [t, e]
                : e;
            }),
            (t.prototype._removeParent = function (e) {
              var t = this._parentage;
              t === e
                ? (this._parentage = null)
                : Array.isArray(t) && (0, s.P)(t, e);
            }),
            (t.prototype.remove = function (e) {
              var r = this._finalizers;
              r && (0, s.P)(r, e), e instanceof t && e._removeParent(this);
            }),
            (t.EMPTY = (((e = new t()).closed = !0), e)),
            t
          );
        })(),
        u = a.EMPTY;
      function c(e) {
        return (
          e instanceof a ||
          (e &&
            "closed" in e &&
            (0, o.m)(e.remove) &&
            (0, o.m)(e.add) &&
            (0, o.m)(e.unsubscribe))
        );
      }
      function l(e) {
        (0, o.m)(e) ? e() : e.unsubscribe();
      }
    },
    80124: function (e, t, r) {
      "use strict";
      r.d(t, {
        v: function () {
          return n;
        },
      });
      var n = {
        onUnhandledError: null,
        onStoppedNotification: null,
        Promise: void 0,
        useDeprecatedSynchronousErrorHandling: !1,
        useDeprecatedNextContext: !1,
      };
    },
    48522: function (e, t, r) {
      "use strict";
      r.d(t, {
        D: function () {
          return v;
        },
      });
      var n = r(96750),
        o = r(96987),
        i = r(17753);
      function s(e, t) {
        return (
          void 0 === t && (t = 0),
          (0, i.e)(function (r, n) {
            n.add(
              e.schedule(function () {
                return r.subscribe(n);
              }, t)
            );
          })
        );
      }
      var a = r(78743),
        u = r(53073),
        c = r(2070),
        l = r(42903);
      function f(e, t) {
        if (!e) throw Error("Iterable cannot be null");
        return new a.y(function (r) {
          (0, l.f)(r, t, function () {
            var n = e[Symbol.asyncIterator]();
            (0, l.f)(
              r,
              t,
              function () {
                n.next().then(function (e) {
                  e.done ? r.complete() : r.next(e.value);
                });
              },
              0,
              !0
            );
          });
        });
      }
      var h = r(87229),
        p = r(84223),
        d = r(76613),
        y = r(96090),
        g = r(67555),
        m = r(46345),
        b = r(32450);
      function v(e, t) {
        return t
          ? (function (e, t) {
              if (null != e) {
                if ((0, h.c)(e)) return (0, n.Xf)(e).pipe(s(t), (0, o.Q)(t));
                if ((0, d.z)(e))
                  return new a.y(function (r) {
                    var n = 0;
                    return t.schedule(function () {
                      n === e.length
                        ? r.complete()
                        : (r.next(e[n++]), r.closed || this.schedule());
                    });
                  });
                if ((0, p.t)(e)) return (0, n.Xf)(e).pipe(s(t), (0, o.Q)(t));
                if ((0, g.D)(e)) return f(e, t);
                if ((0, y.T)(e))
                  return new a.y(function (r) {
                    var n;
                    return (
                      (0, l.f)(r, t, function () {
                        (n = e[u.h]()),
                          (0, l.f)(
                            r,
                            t,
                            function () {
                              var e, t, o;
                              try {
                                (t = (e = n.next()).value), (o = e.done);
                              } catch (e) {
                                r.error(e);
                                return;
                              }
                              o ? r.complete() : r.next(t);
                            },
                            0,
                            !0
                          );
                      }),
                      function () {
                        return (
                          (0, c.m)(null == n ? void 0 : n.return) && n.return()
                        );
                      }
                    );
                  });
                if ((0, b.L)(e)) return f((0, b.Q)(e), t);
              }
              throw (0, m.z)(e);
            })(e, t)
          : (0, n.Xf)(e);
      }
    },
    96750: function (e, t, r) {
      "use strict";
      r.d(t, {
        Xf: function () {
          return y;
        },
      });
      var n = r(5853),
        o = r(76613),
        i = r(84223),
        s = r(78743),
        a = r(87229),
        u = r(67555),
        c = r(46345),
        l = r(96090),
        f = r(32450),
        h = r(2070),
        p = r(67444),
        d = r(27723);
      function y(e) {
        if (e instanceof s.y) return e;
        if (null != e) {
          if ((0, a.c)(e))
            return new s.y(function (t) {
              var r = e[d.L]();
              if ((0, h.m)(r.subscribe)) return r.subscribe(t);
              throw TypeError(
                "Provided object does not correctly implement Symbol.observable"
              );
            });
          if ((0, o.z)(e))
            return new s.y(function (t) {
              for (var r = 0; r < e.length && !t.closed; r++) t.next(e[r]);
              t.complete();
            });
          if ((0, i.t)(e))
            return new s.y(function (t) {
              e.then(
                function (e) {
                  t.closed || (t.next(e), t.complete());
                },
                function (e) {
                  return t.error(e);
                }
              ).then(null, p.h);
            });
          if ((0, u.D)(e)) return g(e);
          if ((0, l.T)(e))
            return new s.y(function (t) {
              var r, o;
              try {
                for (
                  var i = (0, n.__values)(e), s = i.next();
                  !s.done;
                  s = i.next()
                ) {
                  var a = s.value;
                  if ((t.next(a), t.closed)) return;
                }
              } catch (e) {
                r = { error: e };
              } finally {
                try {
                  s && !s.done && (o = i.return) && o.call(i);
                } finally {
                  if (r) throw r.error;
                }
              }
              t.complete();
            });
          if ((0, f.L)(e)) return g((0, f.Q)(e));
        }
        throw (0, c.z)(e);
      }
      function g(e) {
        return new s.y(function (t) {
          (function (e, t) {
            var r, o, i, s;
            return (0, n.__awaiter)(this, void 0, void 0, function () {
              var a;
              return (0, n.__generator)(this, function (u) {
                switch (u.label) {
                  case 0:
                    u.trys.push([0, 5, 6, 11]),
                      (r = (0, n.__asyncValues)(e)),
                      (u.label = 1);
                  case 1:
                    return [4, r.next()];
                  case 2:
                    if ((o = u.sent()).done) return [3, 4];
                    if (((a = o.value), t.next(a), t.closed)) return [2];
                    u.label = 3;
                  case 3:
                    return [3, 1];
                  case 4:
                    return [3, 11];
                  case 5:
                    return (i = { error: u.sent() }), [3, 11];
                  case 6:
                    if (
                      (u.trys.push([6, , 9, 10]),
                      !(o && !o.done && (s = r.return)))
                    )
                      return [3, 8];
                    return [4, s.call(r)];
                  case 7:
                    u.sent(), (u.label = 8);
                  case 8:
                    return [3, 10];
                  case 9:
                    if (i) throw i.error;
                    return [7];
                  case 10:
                    return [7];
                  case 11:
                    return t.complete(), [2];
                }
              });
            });
          })(e, t).catch(function (e) {
            return t.error(e);
          });
        });
      }
    },
    4382: function (e, t, r) {
      "use strict";
      r.d(t, {
        x: function () {
          return o;
        },
      });
      var n = r(5853);
      function o(e, t, r, n, o) {
        return new i(e, t, r, n, o);
      }
      var i = (function (e) {
        function t(t, r, n, o, i, s) {
          var a = e.call(this, t) || this;
          return (
            (a.onFinalize = i),
            (a.shouldUnsubscribe = s),
            (a._next = r
              ? function (e) {
                  try {
                    r(e);
                  } catch (e) {
                    t.error(e);
                  }
                }
              : e.prototype._next),
            (a._error = o
              ? function (e) {
                  try {
                    o(e);
                  } catch (e) {
                    t.error(e);
                  } finally {
                    this.unsubscribe();
                  }
                }
              : e.prototype._error),
            (a._complete = n
              ? function () {
                  try {
                    n();
                  } catch (e) {
                    t.error(e);
                  } finally {
                    this.unsubscribe();
                  }
                }
              : e.prototype._complete),
            a
          );
        }
        return (
          (0, n.__extends)(t, e),
          (t.prototype.unsubscribe = function () {
            var t;
            if (!this.shouldUnsubscribe || this.shouldUnsubscribe()) {
              var r = this.closed;
              e.prototype.unsubscribe.call(this),
                r ||
                  null === (t = this.onFinalize) ||
                  void 0 === t ||
                  t.call(this);
            }
          }),
          t
        );
      })(r(19142).Lv);
    },
    44465: function (e, t, r) {
      "use strict";
      r.d(t, {
        h: function () {
          return i;
        },
      });
      var n = r(17753),
        o = r(4382);
      function i(e, t) {
        return (0, n.e)(function (r, n) {
          var i = 0;
          r.subscribe(
            (0, o.x)(n, function (r) {
              return e.call(t, r, i++) && n.next(r);
            })
          );
        });
      }
    },
    7449: function (e, t, r) {
      "use strict";
      r.d(t, {
        U: function () {
          return i;
        },
      });
      var n = r(17753),
        o = r(4382);
      function i(e, t) {
        return (0, n.e)(function (r, n) {
          var i = 0;
          r.subscribe(
            (0, o.x)(n, function (r) {
              n.next(e.call(t, r, i++));
            })
          );
        });
      }
    },
    96987: function (e, t, r) {
      "use strict";
      r.d(t, {
        Q: function () {
          return s;
        },
      });
      var n = r(42903),
        o = r(17753),
        i = r(4382);
      function s(e, t) {
        return (
          void 0 === t && (t = 0),
          (0, o.e)(function (r, o) {
            r.subscribe(
              (0, i.x)(
                o,
                function (r) {
                  return (0, n.f)(
                    o,
                    e,
                    function () {
                      return o.next(r);
                    },
                    t
                  );
                },
                function () {
                  return (0, n.f)(
                    o,
                    e,
                    function () {
                      return o.complete();
                    },
                    t
                  );
                },
                function (r) {
                  return (0, n.f)(
                    o,
                    e,
                    function () {
                      return o.error(r);
                    },
                    t
                  );
                }
              )
            );
          })
        );
      }
    },
    94814: function (e, t, r) {
      "use strict";
      r.d(t, {
        z: function () {
          return o;
        },
      });
      var n = r(5853),
        o = {
          setTimeout: function (e, t) {
            for (var r = [], i = 2; i < arguments.length; i++)
              r[i - 2] = arguments[i];
            var s = o.delegate;
            return (null == s ? void 0 : s.setTimeout)
              ? s.setTimeout.apply(
                  s,
                  (0, n.__spreadArray)([e, t], (0, n.__read)(r))
                )
              : setTimeout.apply(
                  void 0,
                  (0, n.__spreadArray)([e, t], (0, n.__read)(r))
                );
          },
          clearTimeout: function (e) {
            var t = o.delegate;
            return ((null == t ? void 0 : t.clearTimeout) || clearTimeout)(e);
          },
          delegate: void 0,
        };
    },
    53073: function (e, t, r) {
      "use strict";
      r.d(t, {
        h: function () {
          return n;
        },
      });
      var n =
        "function" == typeof Symbol && Symbol.iterator
          ? Symbol.iterator
          : "@@iterator";
    },
    27723: function (e, t, r) {
      "use strict";
      r.d(t, {
        L: function () {
          return n;
        },
      });
      var n =
        ("function" == typeof Symbol && Symbol.observable) || "@@observable";
    },
    94146: function (e, t, r) {
      "use strict";
      r.d(t, {
        _6: function () {
          return a;
        },
        jO: function () {
          return i;
        },
        yG: function () {
          return s;
        },
      });
      var n = r(2070);
      function o(e) {
        return e[e.length - 1];
      }
      function i(e) {
        return (0, n.m)(o(e)) ? e.pop() : void 0;
      }
      function s(e) {
        var t;
        return (t = o(e)) && (0, n.m)(t.schedule) ? e.pop() : void 0;
      }
      function a(e, t) {
        return "number" == typeof o(e) ? e.pop() : t;
      }
    },
    30325: function (e, t, r) {
      "use strict";
      function n(e, t) {
        if (e) {
          var r = e.indexOf(t);
          0 <= r && e.splice(r, 1);
        }
      }
      r.d(t, {
        P: function () {
          return n;
        },
      });
    },
    37169: function (e, t, r) {
      "use strict";
      function n(e) {
        var t = e(function (e) {
          Error.call(e), (e.stack = Error().stack);
        });
        return (
          (t.prototype = Object.create(Error.prototype)),
          (t.prototype.constructor = t),
          t
        );
      }
      r.d(t, {
        d: function () {
          return n;
        },
      });
    },
    99287: function (e, t, r) {
      "use strict";
      r.d(t, {
        O: function () {
          return s;
        },
        x: function () {
          return i;
        },
      });
      var n = r(80124),
        o = null;
      function i(e) {
        if (n.v.useDeprecatedSynchronousErrorHandling) {
          var t = !o;
          if ((t && (o = { errorThrown: !1, error: null }), e(), t)) {
            var r = o,
              i = r.errorThrown,
              s = r.error;
            if (((o = null), i)) throw s;
          }
        } else e();
      }
      function s(e) {
        n.v.useDeprecatedSynchronousErrorHandling &&
          o &&
          ((o.errorThrown = !0), (o.error = e));
      }
    },
    42903: function (e, t, r) {
      "use strict";
      function n(e, t, r, n, o) {
        void 0 === n && (n = 0), void 0 === o && (o = !1);
        var i = t.schedule(function () {
          r(), o ? e.add(this.schedule(null, n)) : this.unsubscribe();
        }, n);
        if ((e.add(i), !o)) return i;
      }
      r.d(t, {
        f: function () {
          return n;
        },
      });
    },
    15531: function (e, t, r) {
      "use strict";
      function n(e) {
        return e;
      }
      r.d(t, {
        y: function () {
          return n;
        },
      });
    },
    76613: function (e, t, r) {
      "use strict";
      r.d(t, {
        z: function () {
          return n;
        },
      });
      var n = function (e) {
        return e && "number" == typeof e.length && "function" != typeof e;
      };
    },
    67555: function (e, t, r) {
      "use strict";
      r.d(t, {
        D: function () {
          return o;
        },
      });
      var n = r(2070);
      function o(e) {
        return (
          Symbol.asyncIterator &&
          (0, n.m)(null == e ? void 0 : e[Symbol.asyncIterator])
        );
      }
    },
    2070: function (e, t, r) {
      "use strict";
      function n(e) {
        return "function" == typeof e;
      }
      r.d(t, {
        m: function () {
          return n;
        },
      });
    },
    87229: function (e, t, r) {
      "use strict";
      r.d(t, {
        c: function () {
          return i;
        },
      });
      var n = r(27723),
        o = r(2070);
      function i(e) {
        return (0, o.m)(e[n.L]);
      }
    },
    96090: function (e, t, r) {
      "use strict";
      r.d(t, {
        T: function () {
          return i;
        },
      });
      var n = r(53073),
        o = r(2070);
      function i(e) {
        return (0, o.m)(null == e ? void 0 : e[n.h]);
      }
    },
    84223: function (e, t, r) {
      "use strict";
      r.d(t, {
        t: function () {
          return o;
        },
      });
      var n = r(2070);
      function o(e) {
        return (0, n.m)(null == e ? void 0 : e.then);
      }
    },
    32450: function (e, t, r) {
      "use strict";
      r.d(t, {
        L: function () {
          return s;
        },
        Q: function () {
          return i;
        },
      });
      var n = r(5853),
        o = r(2070);
      function i(e) {
        return (0, n.__asyncGenerator)(this, arguments, function () {
          var t, r, o;
          return (0, n.__generator)(this, function (i) {
            switch (i.label) {
              case 0:
                (t = e.getReader()), (i.label = 1);
              case 1:
                i.trys.push([1, , 9, 10]), (i.label = 2);
              case 2:
                return [4, (0, n.__await)(t.read())];
              case 3:
                if (((o = (r = i.sent()).value), !r.done)) return [3, 5];
                return [4, (0, n.__await)(void 0)];
              case 4:
                return [2, i.sent()];
              case 5:
                return [4, (0, n.__await)(o)];
              case 6:
                return [4, i.sent()];
              case 7:
                return i.sent(), [3, 2];
              case 8:
                return [3, 10];
              case 9:
                return t.releaseLock(), [7];
              case 10:
                return [2];
            }
          });
        });
      }
      function s(e) {
        return (0, o.m)(null == e ? void 0 : e.getReader);
      }
    },
    17753: function (e, t, r) {
      "use strict";
      r.d(t, {
        e: function () {
          return o;
        },
      });
      var n = r(2070);
      function o(e) {
        return function (t) {
          if ((0, n.m)(null == t ? void 0 : t.lift))
            return t.lift(function (t) {
              try {
                return e(t, this);
              } catch (e) {
                this.error(e);
              }
            });
          throw TypeError("Unable to lift unknown Observable type");
        };
      }
    },
    59326: function (e, t, r) {
      "use strict";
      r.d(t, {
        Z: function () {
          return s;
        },
      });
      var n = r(5853),
        o = r(7449),
        i = Array.isArray;
      function s(e) {
        return (0, o.U)(function (t) {
          return i(t)
            ? e.apply(void 0, (0, n.__spreadArray)([], (0, n.__read)(t)))
            : e(t);
        });
      }
    },
    8365: function (e, t, r) {
      "use strict";
      function n() {}
      r.d(t, {
        Z: function () {
          return n;
        },
      });
    },
    95767: function (e, t, r) {
      "use strict";
      r.d(t, {
        U: function () {
          return i;
        },
        z: function () {
          return o;
        },
      });
      var n = r(15531);
      function o() {
        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
        return i(e);
      }
      function i(e) {
        return 0 === e.length
          ? n.y
          : 1 === e.length
          ? e[0]
          : function (t) {
              return e.reduce(function (e, t) {
                return t(e);
              }, t);
            };
      }
    },
    67444: function (e, t, r) {
      "use strict";
      r.d(t, {
        h: function () {
          return i;
        },
      });
      var n = r(80124),
        o = r(94814);
      function i(e) {
        o.z.setTimeout(function () {
          var t = n.v.onUnhandledError;
          if (t) t(e);
          else throw e;
        });
      }
    },
    46345: function (e, t, r) {
      "use strict";
      function n(e) {
        return TypeError(
          "You provided " +
            (null !== e && "object" == typeof e
              ? "an invalid object"
              : "'" + e + "'") +
            " where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable."
        );
      }
      r.d(t, {
        z: function () {
          return n;
        },
      });
    },
    25566: function (e) {
      var t,
        r,
        n,
        o = (e.exports = {});
      function i() {
        throw Error("setTimeout has not been defined");
      }
      function s() {
        throw Error("clearTimeout has not been defined");
      }
      function a(e) {
        if (t === setTimeout) return setTimeout(e, 0);
        if ((t === i || !t) && setTimeout)
          return (t = setTimeout), setTimeout(e, 0);
        try {
          return t(e, 0);
        } catch (r) {
          try {
            return t.call(null, e, 0);
          } catch (r) {
            return t.call(this, e, 0);
          }
        }
      }
      !(function () {
        try {
          t = "function" == typeof setTimeout ? setTimeout : i;
        } catch (e) {
          t = i;
        }
        try {
          r = "function" == typeof clearTimeout ? clearTimeout : s;
        } catch (e) {
          r = s;
        }
      })();
      var u = [],
        c = !1,
        l = -1;
      function f() {
        c &&
          n &&
          ((c = !1), n.length ? (u = n.concat(u)) : (l = -1), u.length && h());
      }
      function h() {
        if (!c) {
          var e = a(f);
          c = !0;
          for (var t = u.length; t; ) {
            for (n = u, u = []; ++l < t; ) n && n[l].run();
            (l = -1), (t = u.length);
          }
          (n = null),
            (c = !1),
            (function (e) {
              if (r === clearTimeout) return clearTimeout(e);
              if ((r === s || !r) && clearTimeout)
                return (r = clearTimeout), clearTimeout(e);
              try {
                r(e);
              } catch (t) {
                try {
                  return r.call(null, e);
                } catch (t) {
                  return r.call(this, e);
                }
              }
            })(e);
        }
      }
      function p(e, t) {
        (this.fun = e), (this.array = t);
      }
      function d() {}
      (o.nextTick = function (e) {
        var t = Array(arguments.length - 1);
        if (arguments.length > 1)
          for (var r = 1; r < arguments.length; r++) t[r - 1] = arguments[r];
        u.push(new p(e, t)), 1 !== u.length || c || a(h);
      }),
        (p.prototype.run = function () {
          this.fun.apply(null, this.array);
        }),
        (o.title = "browser"),
        (o.browser = !0),
        (o.env = {}),
        (o.argv = []),
        (o.version = ""),
        (o.versions = {}),
        (o.on = d),
        (o.addListener = d),
        (o.once = d),
        (o.off = d),
        (o.removeListener = d),
        (o.removeAllListeners = d),
        (o.emit = d),
        (o.prependListener = d),
        (o.prependOnceListener = d),
        (o.listeners = function (e) {
          return [];
        }),
        (o.binding = function (e) {
          throw Error("process.binding is not supported");
        }),
        (o.cwd = function () {
          return "/";
        }),
        (o.chdir = function (e) {
          throw Error("process.chdir is not supported");
        }),
        (o.umask = function () {
          return 0;
        });
    },
    3607: function (e, t, r) {
      "use strict";
      r.d(t, {
        C: function () {
          return s;
        },
        N: function () {
          return c;
        },
      });
      var n = {
          0: 8203,
          1: 8204,
          2: 8205,
          3: 8290,
          4: 8291,
          5: 8288,
          6: 65279,
          7: 8289,
          8: 119155,
          9: 119156,
          a: 119157,
          b: 119158,
          c: 119159,
          d: 119160,
          e: 119161,
          f: 119162,
        },
        o = { 0: 8203, 1: 8204, 2: 8205, 3: 65279 },
        i = [, , , ,].fill(String.fromCodePoint(o[0])).join("");
      function s(e, t, r = "auto") {
        let n;
        return !0 === r ||
          ("auto" === r &&
            ((!(
              !Number.isNaN(Number(e)) ||
              (/[a-z]/i.test(e) &&
                !/\d+(?:[-:\/]\d+){2}(?:T\d+(?:[-:\/]\d+){1,2}(\.\d+)?Z?)?/.test(
                  e
                ))
            ) &&
              Date.parse(e)) ||
              (function (e) {
                try {
                  new URL(e, e.startsWith("/") ? "https://acme.com" : void 0);
                } catch {
                  return !1;
                }
                return !0;
              })(e)))
          ? e
          : `${e}${
              ((n = JSON.stringify(t)),
              `${i}${Array.from(n)
                .map((e) => {
                  let t = e.charCodeAt(0);
                  if (t > 255)
                    throw Error(
                      `Only ASCII edit info can be encoded. Error attempting to encode ${n} on character ${e} (${t})`
                    );
                  return Array.from(t.toString(4).padStart(4, "0"))
                    .map((e) => String.fromCodePoint(o[e]))
                    .join("");
                })
                .join("")}`)
            }`;
      }
      Object.fromEntries(Object.entries(o).map((e) => e.reverse())),
        Object.fromEntries(Object.entries(n).map((e) => e.reverse()));
      var a = `${Object.values(n)
          .map((e) => `\\u{${e.toString(16)}}`)
          .join("")}`,
        u = RegExp(`[${a}]{4,}`, "gu");
      function c(e) {
        var t, r;
        return (
          e &&
          JSON.parse(
            {
              cleaned: (t = JSON.stringify(e)).replace(u, ""),
              encoded: (null == (r = t.match(u)) ? void 0 : r[0]) || "",
            }.cleaned
          )
        );
      }
    },
    35992: function (e, t, r) {
      "use strict";
      r.d(t, {
        Bk: function () {
          return i;
        },
        Uw: function () {
          return a;
        },
        Y5: function () {
          return u;
        },
        id: function () {
          return c;
        },
        re: function () {
          return l;
        },
      });
      let n = new Set(),
        o = "checking";
      function i(e) {
        if (o !== e) for (let t of ((o = e), n)) t();
      }
      let s = new Set();
      function a(e) {
        for (let e of s) e();
      }
      let u = new Set(),
        c = null;
      function l(e) {
        for (let t of ((c = e), u)) t();
      }
    },
    78848: function (e, t, r) {
      "use strict";
      r.d(t, {
        default: function () {
          return i;
        },
      });
      var n = r(57437);
      let o = (0, r(30166).default)(() => r.e(2343).then(r.bind(r, 52343)), {
        loadableGenerated: {
          webpack: () => [
            require.resolveWeak("../_chunks-es/SanityLiveStream.js"),
          ],
        },
        ssr: !1,
      });
      function i(e) {
        return (0, n.jsx)(o, { ...e });
      }
    },
    38652: function (e, t, r) {
      "use strict";
      r.d(t, {
        default: function () {
          return tk;
        },
      });
      var n = r(57437);
      let o = !(typeof navigator > "u") && "ReactNative" === navigator.product,
        i = { timeout: o ? 6e4 : 12e4 },
        s = function (e) {
          let t = { ...i, ...("string" == typeof e ? { url: e } : e) };
          if (
            ((t.timeout = (function e(t) {
              if (!1 === t || 0 === t) return !1;
              if (t.connect || t.socket) return t;
              let r = Number(t);
              return isNaN(r) ? e(i.timeout) : { connect: r, socket: r };
            })(t.timeout)),
            t.query)
          ) {
            let { url: e, searchParams: r } = (function (e) {
              let t = e.indexOf("?");
              if (-1 === t)
                return { url: e, searchParams: new URLSearchParams() };
              let r = e.slice(0, t),
                n = e.slice(t + 1);
              if (!o) return { url: r, searchParams: new URLSearchParams(n) };
              if ("function" != typeof decodeURIComponent)
                throw Error(
                  "Broken `URLSearchParams` implementation, and `decodeURIComponent` is not defined"
                );
              let i = new URLSearchParams();
              for (let e of n.split("&")) {
                let [t, r] = e.split("=");
                t && i.append(a(t), a(r || ""));
              }
              return { url: r, searchParams: i };
            })(t.url);
            for (let [n, o] of Object.entries(t.query)) {
              if (void 0 !== o) {
                if (Array.isArray(o)) for (let e of o) r.append(n, e);
                else r.append(n, o);
              }
              let i = r.toString();
              i && (t.url = `${e}?${i}`);
            }
          }
          return (
            (t.method =
              t.body && !t.method ? "POST" : (t.method || "GET").toUpperCase()),
            t
          );
        };
      function a(e) {
        return decodeURIComponent(e.replace(/\+/g, " "));
      }
      let u = /^https?:\/\//i,
        c = function (e) {
          if (!u.test(e.url)) throw Error(`"${e.url}" is not a valid URL`);
        };
      function l(e) {
        return e &&
          e.__esModule &&
          Object.prototype.hasOwnProperty.call(e, "default")
          ? e.default
          : e;
      }
      let f = ["request", "response", "progress", "error", "abort"],
        h = [
          "processOptions",
          "validateOptions",
          "interceptRequest",
          "finalizeOptions",
          "onRequest",
          "onResponse",
          "onError",
          "onReturn",
          "onHeaders",
        ];
      var p = function (e) {
          return e.replace(/^\s+|\s+$/g, "");
        },
        d = l(function (e) {
          if (!e) return {};
          for (var t, r = {}, n = p(e).split("\n"), o = 0; o < n.length; o++) {
            var i = n[o],
              s = i.indexOf(":"),
              a = p(i.slice(0, s)).toLowerCase(),
              u = p(i.slice(s + 1));
            typeof r[a] > "u"
              ? (r[a] = u)
              : ((t = r[a]),
                "[object Array]" === Object.prototype.toString.call(t)
                  ? r[a].push(u)
                  : (r[a] = [r[a], u]));
          }
          return r;
        });
      class y {
        onabort;
        onerror;
        onreadystatechange;
        ontimeout;
        readyState = 0;
        response;
        responseText = "";
        responseType = "";
        status;
        statusText;
        withCredentials;
        #e;
        #t;
        #r;
        #n = {};
        #o;
        #i = {};
        #s;
        open(e, t, r) {
          (this.#e = e),
            (this.#t = t),
            (this.#r = ""),
            (this.readyState = 1),
            this.onreadystatechange?.(),
            (this.#o = void 0);
        }
        abort() {
          this.#o && this.#o.abort();
        }
        getAllResponseHeaders() {
          return this.#r;
        }
        setRequestHeader(e, t) {
          this.#n[e] = t;
        }
        setInit(e, t = !0) {
          (this.#i = e), (this.#s = t);
        }
        send(e) {
          let t = "arraybuffer" !== this.responseType,
            r = { ...this.#i, method: this.#e, headers: this.#n, body: e };
          "function" == typeof AbortController &&
            this.#s &&
            ((this.#o = new AbortController()),
            "u" > typeof EventTarget &&
              this.#o.signal instanceof EventTarget &&
              (r.signal = this.#o.signal)),
            "u" > typeof document &&
              (r.credentials = this.withCredentials ? "include" : "omit"),
            fetch(this.#t, r)
              .then(
                (e) => (
                  e.headers.forEach((e, t) => {
                    this.#r += `${t}: ${e}\r
`;
                  }),
                  (this.status = e.status),
                  (this.statusText = e.statusText),
                  (this.readyState = 3),
                  this.onreadystatechange?.(),
                  t ? e.text() : e.arrayBuffer()
                )
              )
              .then((e) => {
                "string" == typeof e
                  ? (this.responseText = e)
                  : (this.response = e),
                  (this.readyState = 4),
                  this.onreadystatechange?.();
              })
              .catch((e) => {
                "AbortError" !== e.name ? this.onerror?.(e) : this.onabort?.();
              });
        }
      }
      let g = "function" == typeof XMLHttpRequest ? "xhr" : "fetch",
        m = "xhr" === g ? XMLHttpRequest : y,
        b = (e, t) => {
          let r = e.options,
            n = e.applyMiddleware("finalizeOptions", r),
            o = {},
            i = e.applyMiddleware("interceptRequest", void 0, {
              adapter: g,
              context: e,
            });
          if (i) {
            let e = setTimeout(t, 0, null, i);
            return { abort: () => clearTimeout(e) };
          }
          let s = new m();
          s instanceof y &&
            "object" == typeof n.fetch &&
            s.setInit(n.fetch, n.useAbortSignal ?? !0);
          let a = n.headers,
            u = n.timeout,
            c = !1,
            l = !1,
            f = !1;
          if (
            ((s.onerror = (e) => {
              b(
                s instanceof y
                  ? e instanceof Error
                    ? e
                    : Error(
                        `Request error while attempting to reach is ${n.url}`,
                        { cause: e }
                      )
                  : Error(
                      `Request error while attempting to reach is ${n.url}${
                        e.lengthComputable
                          ? `(${e.loaded} of ${e.total} bytes transferred)`
                          : ""
                      }`
                    )
              );
            }),
            (s.ontimeout = (e) => {
              b(
                Error(
                  `Request timeout while attempting to reach ${n.url}${
                    e.lengthComputable
                      ? `(${e.loaded} of ${e.total} bytes transferred)`
                      : ""
                  }`
                )
              );
            }),
            (s.onabort = () => {
              p(!0), (c = !0);
            }),
            (s.onreadystatechange = () => {
              u &&
                (p(),
                (o.socket = setTimeout(() => h("ESOCKETTIMEDOUT"), u.socket))),
                c ||
                  4 !== s.readyState ||
                  0 === s.status ||
                  (function () {
                    if (!(c || l || f)) {
                      if (0 === s.status)
                        return void b(Error("Unknown XHR error"));
                      p(),
                        (l = !0),
                        t(null, {
                          body:
                            s.response ||
                            ("" === s.responseType || "text" === s.responseType
                              ? s.responseText
                              : ""),
                          url: n.url,
                          method: n.method,
                          headers: d(s.getAllResponseHeaders()),
                          statusCode: s.status,
                          statusMessage: s.statusText,
                        });
                    }
                  })();
            }),
            s.open(n.method, n.url, !0),
            (s.withCredentials = !!n.withCredentials),
            a && s.setRequestHeader)
          )
            for (let e in a) a.hasOwnProperty(e) && s.setRequestHeader(e, a[e]);
          return (
            n.rawBody && (s.responseType = "arraybuffer"),
            e.applyMiddleware("onRequest", {
              options: n,
              adapter: g,
              request: s,
              context: e,
            }),
            s.send(n.body || null),
            u && (o.connect = setTimeout(() => h("ETIMEDOUT"), u.connect)),
            {
              abort: function () {
                (c = !0), s && s.abort();
              },
            }
          );
          function h(t) {
            (f = !0), s.abort();
            let r = Error(
              "ESOCKETTIMEDOUT" === t
                ? `Socket timed out on request to ${n.url}`
                : `Connection timed out on request to ${n.url}`
            );
            (r.code = t), e.channels.error.publish(r);
          }
          function p(e) {
            (e || c || (s.readyState >= 2 && o.connect)) &&
              clearTimeout(o.connect),
              o.socket && clearTimeout(o.socket);
          }
          function b(e) {
            if (l) return;
            p(!0), (l = !0), (s = null);
            let r =
              e || Error(`Network error while attempting to reach ${n.url}`);
            (r.isNetworkError = !0), (r.request = n), t(r);
          }
        },
        v = (e = [], t = b) =>
          (function e(t, r) {
            let n = [],
              o = h.reduce((e, t) => ((e[t] = e[t] || []), e), {
                processOptions: [s],
                validateOptions: [c],
              });
            function i(e) {
              let t;
              let n = f.reduce(
                  (e, t) => (
                    (e[t] = (function () {
                      let e = Object.create(null),
                        t = 0;
                      return {
                        publish: function (t) {
                          for (let r in e) e[r](t);
                        },
                        subscribe: function (r) {
                          let n = t++;
                          return (
                            (e[n] = r),
                            function () {
                              delete e[n];
                            }
                          );
                        },
                      };
                    })()),
                    e
                  ),
                  {}
                ),
                i = function (e, t, ...r) {
                  let n = "onError" === e,
                    i = t;
                  for (
                    let t = 0;
                    t < o[e].length && ((i = (0, o[e][t])(i, ...r)), !n || i);
                    t++
                  );
                  return i;
                },
                s = i("processOptions", e);
              i("validateOptions", s);
              let a = { options: s, channels: n, applyMiddleware: i },
                u = n.request.subscribe((e) => {
                  t = r(e, (t, r) =>
                    ((e, t, r) => {
                      let o = e,
                        s = t;
                      if (!o)
                        try {
                          s = i("onResponse", t, r);
                        } catch (e) {
                          (s = null), (o = e);
                        }
                      (o = o && i("onError", o, r))
                        ? n.error.publish(o)
                        : s && n.response.publish(s);
                    })(t, r, e)
                  );
                });
              n.abort.subscribe(() => {
                u(), t && t.abort();
              });
              let c = i("onReturn", n, a);
              return c === n && n.request.publish(a), c;
            }
            return (
              (i.use = function (e) {
                if (!e)
                  throw Error(
                    "Tried to add middleware that resolved to falsey value"
                  );
                if ("function" == typeof e)
                  throw Error(
                    "Tried to add middleware that was a function. It probably expects you to pass options to it."
                  );
                if (e.onReturn && o.onReturn.length > 0)
                  throw Error(
                    "Tried to add new middleware with `onReturn` handler, but another handler has already been registered for this event"
                  );
                return (
                  h.forEach((t) => {
                    e[t] && o[t].push(e[t]);
                  }),
                  n.push(e),
                  i
                );
              }),
              (i.clone = () => e(n, r)),
              t.forEach(i.use),
              i
            );
          })(e, t);
      var w,
        _,
        x = r(25566),
        E = r(82957).Buffer,
        O = { exports: {} },
        C = function (e) {
          function t(e) {
            let n,
              o,
              i,
              s = null;
            function a(...e) {
              if (!a.enabled) return;
              let r = Number(new Date()),
                o = r - (n || r);
              (a.diff = o),
                (a.prev = n),
                (a.curr = r),
                (n = r),
                (e[0] = t.coerce(e[0])),
                "string" != typeof e[0] && e.unshift("%O");
              let i = 0;
              (e[0] = e[0].replace(/%([a-zA-Z%])/g, (r, n) => {
                if ("%%" === r) return "%";
                i++;
                let o = t.formatters[n];
                if ("function" == typeof o) {
                  let t = e[i];
                  (r = o.call(a, t)), e.splice(i, 1), i--;
                }
                return r;
              })),
                t.formatArgs.call(a, e),
                (a.log || t.log).apply(a, e);
            }
            return (
              (a.namespace = e),
              (a.useColors = t.useColors()),
              (a.color = t.selectColor(e)),
              (a.extend = r),
              (a.destroy = t.destroy),
              Object.defineProperty(a, "enabled", {
                enumerable: !0,
                configurable: !1,
                get: () =>
                  null !== s
                    ? s
                    : (o !== t.namespaces &&
                        ((o = t.namespaces), (i = t.enabled(e))),
                      i),
                set: (e) => {
                  s = e;
                },
              }),
              "function" == typeof t.init && t.init(a),
              a
            );
          }
          function r(e, r) {
            let n = t(this.namespace + (typeof r > "u" ? ":" : r) + e);
            return (n.log = this.log), n;
          }
          function n(e) {
            return e
              .toString()
              .substring(2, e.toString().length - 2)
              .replace(/\.\*\?$/, "*");
          }
          return (
            (t.debug = t),
            (t.default = t),
            (t.coerce = function (e) {
              return e instanceof Error ? e.stack || e.message : e;
            }),
            (t.disable = function () {
              let e = [
                ...t.names.map(n),
                ...t.skips.map(n).map((e) => "-" + e),
              ].join(",");
              return t.enable(""), e;
            }),
            (t.enable = function (e) {
              let r;
              t.save(e), (t.namespaces = e), (t.names = []), (t.skips = []);
              let n = ("string" == typeof e ? e : "").split(/[\s,]+/),
                o = n.length;
              for (r = 0; r < o; r++)
                n[r] &&
                  ("-" === (e = n[r].replace(/\*/g, ".*?"))[0]
                    ? t.skips.push(RegExp("^" + e.slice(1) + "$"))
                    : t.names.push(RegExp("^" + e + "$")));
            }),
            (t.enabled = function (e) {
              let r, n;
              if ("*" === e[e.length - 1]) return !0;
              for (r = 0, n = t.skips.length; r < n; r++)
                if (t.skips[r].test(e)) return !1;
              for (r = 0, n = t.names.length; r < n; r++)
                if (t.names[r].test(e)) return !0;
              return !1;
            }),
            (t.humanize = (function () {
              if (_) return w;
              function e(e, t, r, n) {
                return Math.round(e / r) + " " + n + (t >= 1.5 * r ? "s" : "");
              }
              return (
                (_ = 1),
                (w = function (t, r) {
                  r = r || {};
                  var n,
                    o,
                    i = typeof t;
                  if ("string" === i && t.length > 0)
                    return (function (e) {
                      if (!((e = String(e)).length > 100)) {
                        var t =
                          /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(
                            e
                          );
                        if (t) {
                          var r = parseFloat(t[1]);
                          switch ((t[2] || "ms").toLowerCase()) {
                            case "years":
                            case "year":
                            case "yrs":
                            case "yr":
                            case "y":
                              return 315576e5 * r;
                            case "weeks":
                            case "week":
                            case "w":
                              return 6048e5 * r;
                            case "days":
                            case "day":
                            case "d":
                              return 864e5 * r;
                            case "hours":
                            case "hour":
                            case "hrs":
                            case "hr":
                            case "h":
                              return 36e5 * r;
                            case "minutes":
                            case "minute":
                            case "mins":
                            case "min":
                            case "m":
                              return 6e4 * r;
                            case "seconds":
                            case "second":
                            case "secs":
                            case "sec":
                            case "s":
                              return 1e3 * r;
                            case "milliseconds":
                            case "millisecond":
                            case "msecs":
                            case "msec":
                            case "ms":
                              return r;
                            default:
                              return;
                          }
                        }
                      }
                    })(t);
                  if ("number" === i && isFinite(t))
                    return r.long
                      ? (o = Math.abs(t)) >= 864e5
                        ? e(t, o, 864e5, "day")
                        : o >= 36e5
                        ? e(t, o, 36e5, "hour")
                        : o >= 6e4
                        ? e(t, o, 6e4, "minute")
                        : o >= 1e3
                        ? e(t, o, 1e3, "second")
                        : t + " ms"
                      : (n = Math.abs(t)) >= 864e5
                      ? Math.round(t / 864e5) + "d"
                      : n >= 36e5
                      ? Math.round(t / 36e5) + "h"
                      : n >= 6e4
                      ? Math.round(t / 6e4) + "m"
                      : n >= 1e3
                      ? Math.round(t / 1e3) + "s"
                      : t + "ms";
                  throw Error(
                    "val is not a non-empty string or a valid number. val=" +
                      JSON.stringify(t)
                  );
                })
              );
            })()),
            (t.destroy = function () {
              console.warn(
                "Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`."
              );
            }),
            Object.keys(e).forEach((r) => {
              t[r] = e[r];
            }),
            (t.names = []),
            (t.skips = []),
            (t.formatters = {}),
            (t.selectColor = function (e) {
              let r = 0;
              for (let t = 0; t < e.length; t++)
                r = ((r << 5) - r + e.charCodeAt(t)) | 0;
              return t.colors[Math.abs(r) % t.colors.length];
            }),
            t.enable(t.load()),
            t
          );
        };
      !(function (e, t) {
        let r;
        (t.formatArgs = function (t) {
          if (
            ((t[0] =
              (this.useColors ? "%c" : "") +
              this.namespace +
              (this.useColors ? " %c" : " ") +
              t[0] +
              (this.useColors ? "%c " : " ") +
              "+" +
              e.exports.humanize(this.diff)),
            !this.useColors)
          )
            return;
          let r = "color: " + this.color;
          t.splice(1, 0, r, "color: inherit");
          let n = 0,
            o = 0;
          t[0].replace(/%[a-zA-Z%]/g, (e) => {
            "%%" !== e && (n++, "%c" === e && (o = n));
          }),
            t.splice(o, 0, r);
        }),
          (t.save = function (e) {
            try {
              e ? t.storage.setItem("debug", e) : t.storage.removeItem("debug");
            } catch {}
          }),
          (t.load = function () {
            let e;
            try {
              e = t.storage.getItem("debug");
            } catch {}
            return !e && "u" > typeof x && "env" in x && (e = x.env.DEBUG), e;
          }),
          (t.useColors = function () {
            return (
              !(
                !("u" > typeof window && window.process) ||
                ("renderer" !== window.process.type && !window.process.__nwjs)
              ) ||
              (!(
                "u" > typeof navigator &&
                navigator.userAgent &&
                navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)
              ) &&
                (("u" > typeof document &&
                  document.documentElement &&
                  document.documentElement.style &&
                  document.documentElement.style.WebkitAppearance) ||
                  ("u" > typeof window &&
                    window.console &&
                    (window.console.firebug ||
                      (window.console.exception && window.console.table))) ||
                  ("u" > typeof navigator &&
                    navigator.userAgent &&
                    navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) &&
                    parseInt(RegExp.$1, 10) >= 31) ||
                  ("u" > typeof navigator &&
                    navigator.userAgent &&
                    navigator.userAgent
                      .toLowerCase()
                      .match(/applewebkit\/(\d+)/))))
            );
          }),
          (t.storage = (function () {
            try {
              return localStorage;
            } catch {}
          })()),
          (t.destroy =
            ((r = !1),
            () => {
              r ||
                ((r = !0),
                console.warn(
                  "Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`."
                ));
            })),
          (t.colors = [
            "#0000CC",
            "#0000FF",
            "#0033CC",
            "#0033FF",
            "#0066CC",
            "#0066FF",
            "#0099CC",
            "#0099FF",
            "#00CC00",
            "#00CC33",
            "#00CC66",
            "#00CC99",
            "#00CCCC",
            "#00CCFF",
            "#3300CC",
            "#3300FF",
            "#3333CC",
            "#3333FF",
            "#3366CC",
            "#3366FF",
            "#3399CC",
            "#3399FF",
            "#33CC00",
            "#33CC33",
            "#33CC66",
            "#33CC99",
            "#33CCCC",
            "#33CCFF",
            "#6600CC",
            "#6600FF",
            "#6633CC",
            "#6633FF",
            "#66CC00",
            "#66CC33",
            "#9900CC",
            "#9900FF",
            "#9933CC",
            "#9933FF",
            "#99CC00",
            "#99CC33",
            "#CC0000",
            "#CC0033",
            "#CC0066",
            "#CC0099",
            "#CC00CC",
            "#CC00FF",
            "#CC3300",
            "#CC3333",
            "#CC3366",
            "#CC3399",
            "#CC33CC",
            "#CC33FF",
            "#CC6600",
            "#CC6633",
            "#CC9900",
            "#CC9933",
            "#CCCC00",
            "#CCCC33",
            "#FF0000",
            "#FF0033",
            "#FF0066",
            "#FF0099",
            "#FF00CC",
            "#FF00FF",
            "#FF3300",
            "#FF3333",
            "#FF3366",
            "#FF3399",
            "#FF33CC",
            "#FF33FF",
            "#FF6600",
            "#FF6633",
            "#FF9900",
            "#FF9933",
            "#FFCC00",
            "#FFCC33",
          ]),
          (t.log = console.debug || console.log || (() => {})),
          (e.exports = C(t));
        let { formatters: n } = e.exports;
        n.j = function (e) {
          try {
            return JSON.stringify(e);
          } catch (e) {
            return "[UnexpectedJSONParseError]: " + e.message;
          }
        };
      })(O, O.exports),
        l(O.exports),
        Object.prototype.hasOwnProperty;
      let P = typeof E > "u" ? () => !1 : (e) => E.isBuffer(e);
      function j(e) {
        return "[object Object]" === Object.prototype.toString.call(e);
      }
      let S = ["boolean", "string", "number"],
        R = {};
      "u" > typeof globalThis
        ? (R = globalThis)
        : "u" > typeof window
        ? (R = window)
        : "u" > typeof global
        ? (R = global)
        : "u" > typeof self && (R = self);
      var A = R;
      let T = (e = {}) => {
        let t = e.implementation || Promise;
        if (!t)
          throw Error(
            "`Promise` is not available in global scope, and no implementation was passed"
          );
        return {
          onReturn: (r, n) =>
            new t((t, o) => {
              let i = n.options.cancelToken;
              i &&
                i.promise.then((e) => {
                  r.abort.publish(e), o(e);
                }),
                r.error.subscribe(o),
                r.response.subscribe((r) => {
                  t(e.onlyBody ? r.body : r);
                }),
                setTimeout(() => {
                  try {
                    r.request.publish(n);
                  } catch (e) {
                    o(e);
                  }
                }, 0);
            }),
        };
      };
      class I {
        __CANCEL__ = !0;
        message;
        constructor(e) {
          this.message = e;
        }
        toString() {
          return "Cancel" + (this.message ? `: ${this.message}` : "");
        }
      }
      class M {
        promise;
        reason;
        constructor(e) {
          if ("function" != typeof e)
            throw TypeError("executor must be a function.");
          let t = null;
          (this.promise = new Promise((e) => {
            t = e;
          })),
            e((e) => {
              this.reason || ((this.reason = new I(e)), t(this.reason));
            });
        }
        static source = () => {
          let e;
          return {
            token: new M((t) => {
              e = t;
            }),
            cancel: e,
          };
        };
      }
      (T.Cancel = I),
        (T.CancelToken = M),
        (T.isCancel = (e) => !(!e || !e?.__CANCEL__));
      var k = (e, t, r) =>
        ("GET" === r.method || "HEAD" === r.method) && (e.isNetworkError || !1);
      function U(e) {
        return 100 * Math.pow(2, e) + 100 * Math.random();
      }
      let L = (e = {}) =>
        ((e) => {
          let t = e.maxRetries || 5,
            r = e.retryDelay || U,
            n = e.shouldRetry;
          return {
            onError: (e, o) => {
              var i;
              let s = o.options,
                a = s.maxRetries || t,
                u = s.retryDelay || r,
                c = s.shouldRetry || n,
                l = s.attemptNumber || 0;
              if (
                (null !== (i = s.body) &&
                  "object" == typeof i &&
                  "function" == typeof i.pipe) ||
                !c(e, l, s) ||
                l >= a
              )
                return e;
              let f = Object.assign({}, o, {
                options: Object.assign({}, s, { attemptNumber: l + 1 }),
              });
              return (
                setTimeout(() => o.channels.request.publish(f), u(l)), null
              );
            },
          };
        })({ shouldRetry: k, ...e });
      L.shouldRetry = k;
      var q = r(78743),
        F = r(48522),
        B = (0, r(37169).d)(function (e) {
          return function () {
            e(this),
              (this.name = "EmptyError"),
              (this.message = "no elements in sequence");
          };
        });
      function N(e, t) {
        var r = "object" == typeof t;
        return new Promise(function (n, o) {
          var i,
            s = !1;
          e.subscribe({
            next: function (e) {
              (i = e), (s = !0);
            },
            error: o,
            complete: function () {
              s ? n(i) : r ? n(t.defaultValue) : o(new B());
            },
          });
        });
      }
      var $ = r(3607),
        D = r(5853),
        z = r(15531),
        W = r(4382),
        Y = r(42903);
      function H(e, t, r) {
        e ? (0, Y.f)(r, e, t) : t();
      }
      var G = r(17753),
        V = Array.isArray,
        X = r(59326),
        J = r(95767),
        K = r(94146);
      function Q() {
        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
        var r = (0, K.jO)(e);
        return r
          ? (0, J.z)(
              Q.apply(void 0, (0, D.__spreadArray)([], (0, D.__read)(e))),
              (0, X.Z)(r)
            )
          : (0, G.e)(function (t, r) {
              var n, o, i;
              ((n = (0, D.__spreadArray)(
                [t],
                (0, D.__read)(1 === e.length && V(e[0]) ? e[0] : e)
              )),
              void 0 === i && (i = z.y),
              function (e) {
                H(
                  void 0,
                  function () {
                    for (
                      var t = n.length,
                        r = Array(t),
                        s = t,
                        a = t,
                        u = function (t) {
                          H(
                            o,
                            function () {
                              var u = (0, F.D)(n[t], o),
                                c = !1;
                              u.subscribe(
                                (0, W.x)(
                                  e,
                                  function (n) {
                                    (r[t] = n),
                                      !c && ((c = !0), a--),
                                      a || e.next(i(r.slice()));
                                  },
                                  function () {
                                    --s || e.complete();
                                  }
                                )
                              );
                            },
                            e
                          );
                        },
                        c = 0;
                      c < t;
                      c++
                    )
                      u(c);
                  },
                  e
                );
              })(r);
            });
      }
      var Z = r(7449),
        ee = r(44465);
      class et extends Error {
        response;
        statusCode = 400;
        responseBody;
        details;
        constructor(e) {
          let t = en(e);
          super(t.message), Object.assign(this, t);
        }
      }
      class er extends Error {
        response;
        statusCode = 500;
        responseBody;
        details;
        constructor(e) {
          let t = en(e);
          super(t.message), Object.assign(this, t);
        }
      }
      function en(e) {
        let t = e.body,
          r = {
            response: e,
            statusCode: e.statusCode,
            responseBody:
              -1 !==
              (e.headers["content-type"] || "")
                .toLowerCase()
                .indexOf("application/json")
                ? JSON.stringify(t, null, 2)
                : t,
            message: "",
            details: void 0,
          };
        if (t.error && t.message)
          return (r.message = `${t.error} - ${t.message}`), r;
        if (
          (eo(t) &&
            eo(t.error) &&
            "mutationError" === t.error.type &&
            "string" == typeof t.error.description) ||
          (eo(t) &&
            eo(t.error) &&
            "actionError" === t.error.type &&
            "string" == typeof t.error.description)
        ) {
          let e = t.error.items || [],
            n = e
              .slice(0, 5)
              .map((e) => e.error?.description)
              .filter(Boolean),
            o = n.length
              ? `:
- ${n.join(`
- `)}`
              : "";
          return (
            e.length > 5 &&
              (o += `
...and ${e.length - 5} more`),
            (r.message = `${t.error.description}${o}`),
            (r.details = t.error),
            r
          );
        }
        return (
          t.error && t.error.description
            ? ((r.message = t.error.description), (r.details = t.error))
            : (r.message =
                t.error ||
                t.message ||
                (function (e) {
                  let t = e.statusMessage ? ` ${e.statusMessage}` : "";
                  return `${e.method}-request to ${e.url} resulted in HTTP ${e.statusCode}${t}`;
                })(e)),
          r
        );
      }
      function eo(e) {
        return "object" == typeof e && null !== e && !Array.isArray(e);
      }
      class ei extends Error {
        projectId;
        addOriginUrl;
        constructor({ projectId: e }) {
          super("CorsOriginError"),
            (this.name = "CorsOriginError"),
            (this.projectId = e);
          let t = new URL(`https://sanity.io/manage/project/${e}/api`);
          if ("u" > typeof location) {
            let { origin: e } = location;
            t.searchParams.set("cors", "add"),
              t.searchParams.set("origin", e),
              (this.addOriginUrl = t),
              (this.message = `The current origin is not allowed to connect to the Live Content API. Add it here: ${t}`);
          } else
            this.message = `The current origin is not allowed to connect to the Live Content API. Change your configuration here: ${t}`;
        }
      }
      let es = {
          onResponse: (e) => {
            if (e.statusCode >= 500) throw new er(e);
            if (e.statusCode >= 400) throw new et(e);
            return e;
          },
        },
        ea = {
          onResponse: (e) => {
            let t = e.headers["x-sanity-warning"];
            return (
              (Array.isArray(t) ? t : [t])
                .filter(Boolean)
                .forEach((e) => console.warn(e)),
              e
            );
          },
        };
      function eu(e, t, r) {
        if (0 === r.maxRetries) return !1;
        let n = "GET" === r.method || "HEAD" === r.method,
          o = (r.uri || r.url).startsWith("/data/query"),
          i =
            e.response &&
            (429 === e.response.statusCode ||
              502 === e.response.statusCode ||
              503 === e.response.statusCode);
        return ((!!n || !!o) && !!i) || L.shouldRetry(e, t, r);
      }
      function ec(e) {
        if ("string" == typeof e) return { id: e };
        if (Array.isArray(e))
          return { query: "*[_id in $ids]", params: { ids: e } };
        if (
          "object" == typeof e &&
          null !== e &&
          "query" in e &&
          "string" == typeof e.query
        )
          return "params" in e &&
            "object" == typeof e.params &&
            null !== e.params
            ? { query: e.query, params: e.params }
            : { query: e.query };
        let t = [
          "* Document ID (<docId>)",
          "* Array of document IDs",
          "* Object containing `query`",
        ].join(`
`);
        throw Error(`Unknown selection - must be one of:

${t}`);
      }
      let el = ["image", "file"],
        ef = ["before", "after", "replace"],
        eh = (e) => {
          if (!/^(~[a-z0-9]{1}[-\w]{0,63}|[a-z0-9]{1}[-\w]{0,63})$/.test(e))
            throw Error(
              "Datasets can only contain lowercase characters, numbers, underscores and dashes, and start with tilde, and be maximum 64 characters"
            );
        },
        ep = (e) => {
          if (!/^[-a-z0-9]+$/i.test(e))
            throw Error(
              "`projectId` can only contain only a-z, 0-9 and dashes"
            );
        },
        ed = (e) => {
          if (-1 === el.indexOf(e))
            throw Error(
              `Invalid asset type: ${e}. Must be one of ${el.join(", ")}`
            );
        },
        ey = (e, t) => {
          if (null === t || "object" != typeof t || Array.isArray(t))
            throw Error(`${e}() takes an object of properties`);
        },
        eg = (e, t) => {
          if (
            "string" != typeof t ||
            !/^[a-z0-9_][a-z0-9_.-]{0,127}$/i.test(t) ||
            t.includes("..")
          )
            throw Error(`${e}(): "${t}" is not a valid document ID`);
        },
        em = (e, t) => {
          if (!t._id)
            throw Error(
              `${e}() requires that the document contains an ID ("_id" property)`
            );
          eg(e, t._id);
        },
        eb = (e, t, r) => {
          let n = "insert(at, selector, items)";
          if (-1 === ef.indexOf(e)) {
            let e = ef.map((e) => `"${e}"`).join(", ");
            throw Error(`${n} takes an "at"-argument which is one of: ${e}`);
          }
          if ("string" != typeof t)
            throw Error(
              `${n} takes a "selector"-argument which must be a string`
            );
          if (!Array.isArray(r))
            throw Error(
              `${n} takes an "items"-argument which must be an array`
            );
        },
        ev = (e) => {
          if (!e.dataset)
            throw Error("`dataset` must be provided to perform queries");
          return e.dataset || "";
        },
        ew = (e) => {
          if ("string" != typeof e || !/^[a-z0-9._-]{1,75}$/i.test(e))
            throw Error(
              "Tag can only contain alphanumeric characters, underscores, dashes and dots, and be between one and 75 characters long."
            );
          return e;
        };
      class e_ {
        selection;
        operations;
        constructor(e, t = {}) {
          (this.selection = e), (this.operations = t);
        }
        set(e) {
          return this._assign("set", e);
        }
        setIfMissing(e) {
          return this._assign("setIfMissing", e);
        }
        diffMatchPatch(e) {
          return ey("diffMatchPatch", e), this._assign("diffMatchPatch", e);
        }
        unset(e) {
          if (!Array.isArray(e))
            throw Error(
              "unset(attrs) takes an array of attributes to unset, non-array given"
            );
          return (
            (this.operations = Object.assign({}, this.operations, {
              unset: e,
            })),
            this
          );
        }
        inc(e) {
          return this._assign("inc", e);
        }
        dec(e) {
          return this._assign("dec", e);
        }
        insert(e, t, r) {
          return eb(e, t, r), this._assign("insert", { [e]: t, items: r });
        }
        append(e, t) {
          return this.insert("after", `${e}[-1]`, t);
        }
        prepend(e, t) {
          return this.insert("before", `${e}[0]`, t);
        }
        splice(e, t, r, n) {
          let o = t < 0 ? t - 1 : t,
            i = typeof r > "u" || -1 === r ? -1 : Math.max(0, t + r),
            s = `${e}[${o}:${o < 0 && i >= 0 ? "" : i}]`;
          return this.insert("replace", s, n || []);
        }
        ifRevisionId(e) {
          return (this.operations.ifRevisionID = e), this;
        }
        serialize() {
          return { ...ec(this.selection), ...this.operations };
        }
        toJSON() {
          return this.serialize();
        }
        reset() {
          return (this.operations = {}), this;
        }
        _assign(e, t, r = !0) {
          return (
            ey(e, t),
            (this.operations = Object.assign({}, this.operations, {
              [e]: Object.assign({}, (r && this.operations[e]) || {}, t),
            })),
            this
          );
        }
        _set(e, t) {
          return this._assign(e, t, !1);
        }
      }
      class ex extends e_ {
        #a;
        constructor(e, t, r) {
          super(e, t), (this.#a = r);
        }
        clone() {
          return new ex(this.selection, { ...this.operations }, this.#a);
        }
        commit(e) {
          if (!this.#a)
            throw Error(
              "No `client` passed to patch, either provide one or pass the patch to a clients `mutate()` method"
            );
          let t = Object.assign(
            {
              returnFirst: "string" == typeof this.selection,
              returnDocuments: !0,
            },
            e
          );
          return this.#a.mutate({ patch: this.serialize() }, t);
        }
      }
      class eE extends e_ {
        #a;
        constructor(e, t, r) {
          super(e, t), (this.#a = r);
        }
        clone() {
          return new eE(this.selection, { ...this.operations }, this.#a);
        }
        commit(e) {
          if (!this.#a)
            throw Error(
              "No `client` passed to patch, either provide one or pass the patch to a clients `mutate()` method"
            );
          let t = Object.assign(
            {
              returnFirst: "string" == typeof this.selection,
              returnDocuments: !0,
            },
            e
          );
          return this.#a.mutate({ patch: this.serialize() }, t);
        }
      }
      let eO = { returnDocuments: !1 };
      class eC {
        operations;
        trxId;
        constructor(e = [], t) {
          (this.operations = e), (this.trxId = t);
        }
        create(e) {
          return ey("create", e), this._add({ create: e });
        }
        createIfNotExists(e) {
          let t = "createIfNotExists";
          return ey(t, e), em(t, e), this._add({ [t]: e });
        }
        createOrReplace(e) {
          let t = "createOrReplace";
          return ey(t, e), em(t, e), this._add({ [t]: e });
        }
        delete(e) {
          return eg("delete", e), this._add({ delete: { id: e } });
        }
        transactionId(e) {
          return e ? ((this.trxId = e), this) : this.trxId;
        }
        serialize() {
          return [...this.operations];
        }
        toJSON() {
          return this.serialize();
        }
        reset() {
          return (this.operations = []), this;
        }
        _add(e) {
          return this.operations.push(e), this;
        }
      }
      class eP extends eC {
        #a;
        constructor(e, t, r) {
          super(e, r), (this.#a = t);
        }
        clone() {
          return new eP([...this.operations], this.#a, this.trxId);
        }
        commit(e) {
          if (!this.#a)
            throw Error(
              "No `client` passed to transaction, either provide one or pass the transaction to a clients `mutate()` method"
            );
          return this.#a.mutate(
            this.serialize(),
            Object.assign({ transactionId: this.trxId }, eO, e || {})
          );
        }
        patch(e, t) {
          let r = "function" == typeof t;
          if ("string" != typeof e && e instanceof eE)
            return this._add({ patch: e.serialize() });
          if (r) {
            let r = t(new eE(e, {}, this.#a));
            if (!(r instanceof eE))
              throw Error("function passed to `patch()` must return the patch");
            return this._add({ patch: r.serialize() });
          }
          return this._add({ patch: { id: e, ...t } });
        }
      }
      class ej extends eC {
        #a;
        constructor(e, t, r) {
          super(e, r), (this.#a = t);
        }
        clone() {
          return new ej([...this.operations], this.#a, this.trxId);
        }
        commit(e) {
          if (!this.#a)
            throw Error(
              "No `client` passed to transaction, either provide one or pass the transaction to a clients `mutate()` method"
            );
          return this.#a.mutate(
            this.serialize(),
            Object.assign({ transactionId: this.trxId }, eO, e || {})
          );
        }
        patch(e, t) {
          let r = "function" == typeof t;
          if ("string" != typeof e && e instanceof ex)
            return this._add({ patch: e.serialize() });
          if (r) {
            let r = t(new ex(e, {}, this.#a));
            if (!(r instanceof ex))
              throw Error("function passed to `patch()` must return the patch");
            return this._add({ patch: r.serialize() });
          }
          return this._add({ patch: { id: e, ...t } });
        }
      }
      function eS(e) {
        return "https://www.sanity.io/help/" + e;
      }
      let eR = (e) => {
          var t;
          let r, n;
          return (
            (t = (...t) => console.warn(e.join(" "), ...t)),
            (r = !1),
            (...e) => (r || ((n = t(...e)), (r = !0)), n)
          );
        },
        eA = eR([
          "Because you set `withCredentials` to true, we will override your `useCdn`",
          "setting to be false since (cookie-based) credentials are never set on the CDN",
        ]),
        eT = eR([
          "Since you haven't set a value for `useCdn`, we will deliver content using our",
          "global, edge-cached API-CDN. If you wish to have content delivered faster, set",
          "`useCdn: false` to use the Live API. Note: You may incur higher costs using the live API.",
        ]),
        eI = eR([
          "The Sanity client is configured with the `perspective` set to `previewDrafts`, which doesn't support the API-CDN.",
          "The Live API will be used instead. Set `useCdn: false` in your configuration to hide this warning.",
        ]),
        eM = eR([
          "You have configured Sanity client to use a token in the browser. This may cause unintentional security issues.",
          `See ${eS(
            "js-client-browser-token"
          )} for more information and how to hide this warning.`,
        ]),
        ek = eR([
          "Using the Sanity client without specifying an API version is deprecated.",
          `See ${eS("js-client-api-version")}`,
        ]),
        eU =
          (eR([
            "The default export of @sanity/client has been deprecated. Use the named export `createClient` instead.",
          ]),
          {
            apiHost: "https://api.sanity.io",
            apiVersion: "1",
            useProjectHostname: !0,
            stega: { enabled: !1 },
          }),
        eL = ["localhost", "127.0.0.1", "0.0.0.0"],
        eq = (e) => -1 !== eL.indexOf(e),
        eF = function (e) {
          switch (e) {
            case "previewDrafts":
            case "published":
            case "raw":
              return;
            default:
              throw TypeError(
                "Invalid API perspective string, expected `published`, `previewDrafts` or `raw`"
              );
          }
        },
        eB = (e, t) => {
          let r = {
            ...t,
            ...e,
            stega: {
              ...("boolean" == typeof t.stega
                ? { enabled: t.stega }
                : t.stega || eU.stega),
              ...("boolean" == typeof e.stega
                ? { enabled: e.stega }
                : e.stega || {}),
            },
          };
          r.apiVersion || ek();
          let n = { ...eU, ...r },
            o = n.useProjectHostname;
          if (typeof Promise > "u") {
            let e = eS("js-client-promise-polyfill");
            throw Error(
              `No native Promise-implementation found, polyfill needed - see ${e}`
            );
          }
          if (o && !n.projectId)
            throw Error("Configuration must contain `projectId`");
          if (
            ("string" == typeof n.perspective && eF(n.perspective),
            "encodeSourceMap" in n)
          )
            throw Error(
              "It looks like you're using options meant for '@sanity/preview-kit/client'. 'encodeSourceMap' is not supported in '@sanity/client'. Did you mean 'stega.enabled'?"
            );
          if ("encodeSourceMapAtPath" in n)
            throw Error(
              "It looks like you're using options meant for '@sanity/preview-kit/client'. 'encodeSourceMapAtPath' is not supported in '@sanity/client'. Did you mean 'stega.filter'?"
            );
          if ("boolean" != typeof n.stega.enabled)
            throw Error(
              `stega.enabled must be a boolean, received ${n.stega.enabled}`
            );
          if (n.stega.enabled && void 0 === n.stega.studioUrl)
            throw Error(
              "stega.studioUrl must be defined when stega.enabled is true"
            );
          if (
            n.stega.enabled &&
            "string" != typeof n.stega.studioUrl &&
            "function" != typeof n.stega.studioUrl
          )
            throw Error(
              `stega.studioUrl must be a string or a function, received ${n.stega.studioUrl}`
            );
          let i =
              "u" > typeof window &&
              window.location &&
              window.location.hostname,
            s = i && eq(window.location.hostname);
          i && s && n.token && !0 !== n.ignoreBrowserTokenWarning
            ? eM()
            : typeof n.useCdn > "u" && eT(),
            o && ep(n.projectId),
            n.dataset && eh(n.dataset),
            "requestTagPrefix" in n &&
              (n.requestTagPrefix = n.requestTagPrefix
                ? ew(n.requestTagPrefix).replace(/\.+$/, "")
                : void 0),
            (n.apiVersion = `${n.apiVersion}`.replace(/^v/, "")),
            (n.isDefaultApi = n.apiHost === eU.apiHost),
            !0 === n.useCdn && n.withCredentials && eA(),
            (n.useCdn = !1 !== n.useCdn && !n.withCredentials),
            (function (e) {
              if ("1" === e || "X" === e) return;
              let t = new Date(e);
              if (
                !(
                  /^\d{4}-\d{2}-\d{2}$/.test(e) &&
                  t instanceof Date &&
                  t.getTime() > 0
                )
              )
                throw Error(
                  "Invalid API version string, expected `1` or date in format `YYYY-MM-DD`"
                );
            })(n.apiVersion);
          let a = n.apiHost.split("://", 2),
            u = a[0],
            c = a[1],
            l = n.isDefaultApi ? "apicdn.sanity.io" : c;
          return (
            n.useProjectHostname
              ? ((n.url = `${u}://${n.projectId}.${c}/v${n.apiVersion}`),
                (n.cdnUrl = `${u}://${n.projectId}.${l}/v${n.apiVersion}`))
              : ((n.url = `${n.apiHost}/v${n.apiVersion}`), (n.cdnUrl = n.url)),
            n
          );
        },
        eN = ({ query: e, params: t = {}, options: r = {} }) => {
          let n = new URLSearchParams(),
            { tag: o, includeMutations: i, returnQuery: s, ...a } = r;
          for (let [r, i] of (o && n.append("tag", o),
          n.append("query", e),
          Object.entries(t)))
            n.append(`$${r}`, JSON.stringify(i));
          for (let [e, t] of Object.entries(a)) t && n.append(e, `${t}`);
          return (
            !1 === s && n.append("returnQuery", "false"),
            !1 === i && n.append("includeMutations", "false"),
            `?${n}`
          );
        },
        e$ = (e, t) => (!1 === e ? void 0 : typeof e > "u" ? t : e),
        eD = (e = {}) => ({
          dryRun: e.dryRun,
          returnIds: !0,
          returnDocuments: e$(e.returnDocuments, !0),
          visibility: e.visibility || "sync",
          autoGenerateArrayKeys: e.autoGenerateArrayKeys,
          skipCrossDatasetReferenceValidation:
            e.skipCrossDatasetReferenceValidation,
        }),
        ez = (e) => "response" === e.type,
        eW = (e) => e.body,
        eY = (e, t) =>
          e.reduce((e, r) => ((e[t(r)] = r), e), Object.create(null));
      function eH(e, t, n, o, i = {}, s = {}) {
        let a =
            "stega" in s
              ? {
                  ...(n || {}),
                  ...("boolean" == typeof s.stega
                    ? { enabled: s.stega }
                    : s.stega || {}),
                }
              : n,
          u = a.enabled ? (0, $.N)(i) : i,
          c = !1 === s.filterResponse ? (e) => e : (e) => e.result,
          {
            cache: l,
            next: f,
            ...h
          } = {
            useAbortSignal: "u" > typeof s.signal,
            resultSourceMap: a.enabled
              ? "withKeyArraySelector"
              : s.resultSourceMap,
            ...s,
            returnQuery: !1 === s.filterResponse && !1 !== s.returnQuery,
          },
          p = e0(
            e,
            t,
            "query",
            { query: o, params: u },
            "u" > typeof l || "u" > typeof f
              ? { ...h, fetch: { cache: l, next: f } }
              : h
          );
        return a.enabled
          ? p.pipe(
              (function () {
                for (var e = [], t = 0; t < arguments.length; t++)
                  e[t] = arguments[t];
                return Q.apply(
                  void 0,
                  (0, D.__spreadArray)([], (0, D.__read)(e))
                );
              })(
                (0, F.D)(
                  r
                    .e(3139)
                    .then(r.bind(r, 13139))
                    .then(function (e) {
                      return e.stegaEncodeSourceMap$1;
                    })
                    .then(({ stegaEncodeSourceMap: e }) => e)
                )
              ),
              (0, Z.U)(([e, t]) => {
                let r = t(e.result, e.resultSourceMap, a);
                return c({ ...e, result: r });
              })
            )
          : p.pipe((0, Z.U)(c));
      }
      function eG(e, t, r, n = {}) {
        let o = {
          uri: e6(e, "doc", r),
          json: !0,
          tag: n.tag,
          signal: n.signal,
        };
        return e2(e, t, o).pipe(
          (0, ee.h)(ez),
          (0, Z.U)((e) => e.body.documents && e.body.documents[0])
        );
      }
      function eV(e, t, r, n = {}) {
        let o = {
          uri: e6(e, "doc", r.join(",")),
          json: !0,
          tag: n.tag,
          signal: n.signal,
        };
        return e2(e, t, o).pipe(
          (0, ee.h)(ez),
          (0, Z.U)((e) => {
            let t = eY(e.body.documents || [], (e) => e._id);
            return r.map((e) => t[e] || null);
          })
        );
      }
      function eX(e, t, r, n) {
        return em("createIfNotExists", r), e1(e, t, r, "createIfNotExists", n);
      }
      function eJ(e, t, r, n) {
        return em("createOrReplace", r), e1(e, t, r, "createOrReplace", n);
      }
      function eK(e, t, r, n) {
        return e0(e, t, "mutate", { mutations: [{ delete: ec(r) }] }, n);
      }
      function eQ(e, t, r, n) {
        let o;
        return e0(
          e,
          t,
          "mutate",
          {
            mutations: Array.isArray(
              (o =
                r instanceof eE || r instanceof ex
                  ? { patch: r.serialize() }
                  : r instanceof eP || r instanceof ej
                  ? r.serialize()
                  : r)
            )
              ? o
              : [o],
            transactionId: (n && n.transactionId) || void 0,
          },
          n
        );
      }
      function eZ(e, t, r, n) {
        let o = Array.isArray(r) ? r : [r];
        return e0(
          e,
          t,
          "actions",
          {
            actions: o,
            transactionId: (n && n.transactionId) || void 0,
            skipCrossDatasetReferenceValidation:
              (n && n.skipCrossDatasetReferenceValidation) || void 0,
            dryRun: (n && n.dryRun) || void 0,
          },
          n
        );
      }
      function e0(e, t, r, n, o = {}) {
        let i = "mutate" === r,
          s = "actions" === r,
          a = i || s ? "" : eN(n),
          u = !i && !s && a.length < 11264,
          c = o.returnFirst,
          {
            timeout: l,
            token: f,
            tag: h,
            headers: p,
            returnQuery: d,
            lastLiveEventId: y,
          } = o,
          g = e6(e, r, u ? a : "");
        return e2(e, t, {
          method: u ? "GET" : "POST",
          uri: g,
          json: !0,
          body: u ? void 0 : n,
          query: i && eD(o),
          timeout: l,
          headers: p,
          token: f,
          tag: h,
          returnQuery: d,
          perspective: o.perspective,
          resultSourceMap: o.resultSourceMap,
          lastLiveEventId: Array.isArray(y) ? y[0] : y,
          canUseCdn: "query" === r,
          signal: o.signal,
          fetch: o.fetch,
          useAbortSignal: o.useAbortSignal,
          useCdn: o.useCdn,
        }).pipe(
          (0, ee.h)(ez),
          (0, Z.U)(eW),
          (0, Z.U)((e) => {
            if (!i) return e;
            let t = e.results || [];
            if (o.returnDocuments)
              return c ? t[0] && t[0].document : t.map((e) => e.document);
            let r = c ? t[0] && t[0].id : t.map((e) => e.id);
            return {
              transactionId: e.transactionId,
              results: t,
              [c ? "documentId" : "documentIds"]: r,
            };
          })
        );
      }
      function e1(e, t, r, n, o = {}) {
        return e0(
          e,
          t,
          "mutate",
          { mutations: [{ [n]: r }] },
          Object.assign({ returnFirst: !0, returnDocuments: !0 }, o)
        );
      }
      function e2(e, t, r) {
        var n;
        let o = r.url || r.uri,
          i = e.config(),
          s =
            typeof r.canUseCdn > "u"
              ? ["GET", "HEAD"].indexOf(r.method || "GET") >= 0 &&
                0 === o.indexOf("/data/")
              : r.canUseCdn,
          a = (r.useCdn ?? i.useCdn) && s,
          u =
            r.tag && i.requestTagPrefix
              ? [i.requestTagPrefix, r.tag].join(".")
              : r.tag || i.requestTagPrefix;
        if (
          (u && null !== r.tag && (r.query = { tag: ew(u), ...r.query }),
          ["GET", "HEAD", "POST"].indexOf(r.method || "GET") >= 0 &&
            0 === o.indexOf("/data/query/"))
        ) {
          let e = r.resultSourceMap ?? i.resultSourceMap;
          void 0 !== e &&
            !1 !== e &&
            (r.query = { resultSourceMap: e, ...r.query });
          let t = r.perspective || i.perspective;
          "string" == typeof t &&
            "raw" !== t &&
            (eF(t),
            (r.query = { perspective: t, ...r.query }),
            "previewDrafts" === t && a && ((a = !1), eI())),
            r.lastLiveEventId &&
              (r.query = { ...r.query, lastLiveEventId: r.lastLiveEventId }),
            !1 === r.returnQuery &&
              (r.query = { returnQuery: "false", ...r.query });
        }
        let c = (function (e, t = {}) {
            let r = {},
              n = t.token || e.token;
            n && (r.Authorization = `Bearer ${n}`),
              t.useGlobalApi ||
                e.useProjectHostname ||
                !e.projectId ||
                (r["X-Sanity-Project-ID"] = e.projectId);
            let o = !!(typeof t.withCredentials > "u"
                ? e.token || e.withCredentials
                : t.withCredentials),
              i = typeof t.timeout > "u" ? e.timeout : t.timeout;
            return Object.assign({}, t, {
              headers: Object.assign({}, r, t.headers || {}),
              timeout: typeof i > "u" ? 3e5 : i,
              proxy: t.proxy || e.proxy,
              json: !0,
              withCredentials: o,
              fetch:
                "object" == typeof t.fetch && "object" == typeof e.fetch
                  ? { ...e.fetch, ...t.fetch }
                  : t.fetch || e.fetch,
            });
          })(i, Object.assign({}, r, { url: e5(e, o, a) })),
          l = new q.y((e) => t(c, i.requester).subscribe(e));
        return r.signal
          ? l.pipe(
              ((n = r.signal),
              (e) =>
                new q.y((t) => {
                  let r = () =>
                    t.error(
                      (function (e) {
                        if (e4)
                          return new DOMException(
                            e?.reason ?? "The operation was aborted.",
                            "AbortError"
                          );
                        let t = Error(
                          e?.reason ?? "The operation was aborted."
                        );
                        return (t.name = "AbortError"), t;
                      })(n)
                    );
                  if (n && n.aborted) {
                    r();
                    return;
                  }
                  let o = e.subscribe(t);
                  return (
                    n.addEventListener("abort", r),
                    () => {
                      n.removeEventListener("abort", r), o.unsubscribe();
                    }
                  );
                }))
            )
          : l;
      }
      function e3(e, t, r) {
        return e2(e, t, r).pipe(
          (0, ee.h)((e) => "response" === e.type),
          (0, Z.U)((e) => e.body)
        );
      }
      function e6(e, t, r) {
        let n = ev(e.config()),
          o = `/${t}/${n}`;
        return `/data${r ? `${o}/${r}` : o}`.replace(/\/($|\?)/, "$1");
      }
      function e5(e, t, r = !1) {
        let { url: n, cdnUrl: o } = e.config();
        return `${r ? o : n}/${t.replace(/^\//, "")}`;
      }
      let e4 = !!globalThis.DOMException;
      class e8 {
        #a;
        #u;
        constructor(e, t) {
          (this.#a = e), (this.#u = t);
        }
        upload(e, t, r) {
          return e7(this.#a, this.#u, e, t, r);
        }
      }
      class e9 {
        #a;
        #u;
        constructor(e, t) {
          (this.#a = e), (this.#u = t);
        }
        upload(e, t, r) {
          return N(
            e7(this.#a, this.#u, e, t, r).pipe(
              (0, ee.h)((e) => "response" === e.type),
              (0, Z.U)((e) => e.body.document)
            )
          );
        }
      }
      function e7(e, t, r, n, o = {}) {
        ed(r);
        let i = o.extract || void 0;
        i && !i.length && (i = ["none"]);
        let s = ev(e.config()),
          a = "image" === r ? "images" : "files",
          u =
            !(typeof File > "u") && n instanceof File
              ? Object.assign(
                  {
                    filename: !1 === o.preserveFilename ? void 0 : n.name,
                    contentType: n.type,
                  },
                  o
                )
              : o,
          {
            tag: c,
            label: l,
            title: f,
            description: h,
            creditLine: p,
            filename: d,
            source: y,
          } = u,
          g = {
            label: l,
            title: f,
            description: h,
            filename: d,
            meta: i,
            creditLine: p,
          };
        return (
          y &&
            ((g.sourceId = y.id),
            (g.sourceName = y.name),
            (g.sourceUrl = y.url)),
          e2(e, t, {
            tag: c,
            method: "POST",
            timeout: u.timeout || 0,
            uri: `/assets/${a}/${s}`,
            headers: u.contentType ? { "Content-Type": u.contentType } : {},
            query: g,
            body: n,
          })
        );
      }
      var te = (e, t) =>
        Object.keys(t)
          .concat(Object.keys(e))
          .reduce((r, n) => ((r[n] = typeof e[n] > "u" ? t[n] : e[n]), r), {});
      let tt = (e, t) =>
          t.reduce((t, r) => (typeof e[r] > "u" || (t[r] = e[r]), t), {}),
        tr = [
          "includePreviousRevision",
          "includeResult",
          "includeMutations",
          "visibility",
          "effectFormat",
          "tag",
        ],
        tn = { includeResult: !0 };
      function to(e, t, n = {}) {
        let {
            url: o,
            token: i,
            withCredentials: s,
            requestTagPrefix: a,
          } = this.config(),
          u = n.tag && a ? [a, n.tag].join(".") : n.tag,
          c = { ...te(n, tn), tag: u },
          l = eN({ query: e, params: t, options: { tag: u, ...tt(c, tr) } }),
          f = `${o}${e6(this, "listen", l)}`;
        if (f.length > 14800)
          return new q.y((e) => e.error(Error("Query too large for listener")));
        let h = c.events ? c.events : ["mutation"],
          p = -1 !== h.indexOf("reconnect"),
          d = {};
        return (
          (i || s) && (d.withCredentials = !0),
          i && (d.headers = { Authorization: `Bearer ${i}` }),
          new q.y((e) => {
            let t,
              n,
              o = !1,
              i = !1;
            function s() {
              o ||
                (p && e.next({ type: "reconnect" }),
                o ||
                  t.readyState !== t.CLOSED ||
                  (l(), clearTimeout(n), (n = setTimeout(g, 100))));
            }
            function a(t) {
              e.error(
                (function (e) {
                  if (e instanceof Error) return e;
                  let t = ti(e);
                  return t instanceof Error
                    ? t
                    : Error(
                        t.error
                          ? t.error.description
                            ? t.error.description
                            : "string" == typeof t.error
                            ? t.error
                            : JSON.stringify(t.error, null, 2)
                          : t.message || "Unknown listener error"
                      );
                })(t)
              );
            }
            function u(t) {
              let r = ti(t);
              return r instanceof Error ? e.error(r) : e.next(r);
            }
            function c() {
              (o = !0), l(), e.complete();
            }
            function l() {
              t &&
                (t.removeEventListener("error", s),
                t.removeEventListener("channelError", a),
                t.removeEventListener("disconnect", c),
                h.forEach((e) => t.removeEventListener(e, u)),
                t.close());
            }
            async function y() {
              let { default: e } = await r.e(6247).then(r.t.bind(r, 46247, 19));
              if (i) return;
              let t = new e(f, d);
              return (
                t.addEventListener("error", s),
                t.addEventListener("channelError", a),
                t.addEventListener("disconnect", c),
                h.forEach((e) => t.addEventListener(e, u)),
                t
              );
            }
            function g() {
              y()
                .then((e) => {
                  e && ((t = e), i && l());
                })
                .catch((t) => {
                  e.error(t), m();
                });
            }
            function m() {
              (o = !0), l(), (i = !0);
            }
            return g(), m;
          })
        );
      }
      function ti(e) {
        try {
          let t = (e.data && JSON.parse(e.data)) || {};
          return Object.assign({ type: e.type }, t);
        } catch (e) {
          return e;
        }
      }
      let ts = "2021-03-26";
      class ta {
        #a;
        constructor(e) {
          this.#a = e;
        }
        events({ includeDrafts: e = !1, tag: t } = {}) {
          let {
              projectId: n,
              apiVersion: o,
              token: i,
              withCredentials: s,
              requestTagPrefix: a,
            } = this.#a.config(),
            u = o.replace(/^v/, "");
          if ("X" !== u && u < ts)
            throw Error(
              `The live events API requires API version ${ts} or later. The current API version is ${u}. Please update your API version to use this feature.`
            );
          if (e && !i && !s)
            throw Error(
              "The live events API requires a token or withCredentials when 'includeDrafts: true'. Please update your client configuration. The token should have the lowest possible access role."
            );
          if (e && "X" !== u)
            throw Error(
              "The live events API requires API version X when 'includeDrafts: true'. This API is experimental and may change or even be removed."
            );
          let c = e6(this.#a, "live/events"),
            l = new URL(this.#a.getUrl(c, !1)),
            f = t && a ? [a, t].join(".") : t;
          f && l.searchParams.set("tag", f),
            e && l.searchParams.set("includeDrafts", "true");
          let h = ["restart", "message", "welcome", "reconnect"],
            p = {};
          return (
            e && i && (p.headers = { Authorization: `Bearer ${i}` }),
            e && s && (p.withCredentials = !0),
            new q.y((e) => {
              let t,
                o,
                i = !1,
                s = !1;
              function a(r) {
                if (!i) {
                  if ("data" in r) {
                    let t = tu(r);
                    e.error(Error(t.message, { cause: t }));
                  }
                  t.readyState === t.CLOSED &&
                    (c(), clearTimeout(o), (o = setTimeout(d, 100)));
                }
              }
              function u(t) {
                let r = tu(t);
                return r instanceof Error ? e.error(r) : e.next(r);
              }
              function c() {
                if (t) {
                  for (let e of (t.removeEventListener("error", a), h))
                    t.removeEventListener(e, u);
                  t.close();
                }
              }
              async function f() {
                let e =
                  typeof EventSource > "u" || p.headers || p.withCredentials
                    ? (await r.e(6247).then(r.t.bind(r, 46247, 19))).default
                    : EventSource;
                if (s) return;
                try {
                  if (
                    (await fetch(l, {
                      method: "OPTIONS",
                      mode: "cors",
                      credentials: p.withCredentials ? "include" : "omit",
                      headers: p.headers,
                    }),
                    s)
                  )
                    return;
                } catch {
                  throw new ei({ projectId: n });
                }
                let t = new e(l.toString(), p);
                for (let e of (t.addEventListener("error", a), h))
                  t.addEventListener(e, u);
                return t;
              }
              function d() {
                f()
                  .then((e) => {
                    e && ((t = e), s && c());
                  })
                  .catch((t) => {
                    e.error(t), y();
                  });
              }
              function y() {
                (i = !0), c(), (s = !0);
              }
              return d(), y;
            })
          );
        }
      }
      function tu(e) {
        try {
          let t = (e.data && JSON.parse(e.data)) || {};
          return { type: e.type, id: e.lastEventId, ...t };
        } catch (e) {
          return e;
        }
      }
      class tc {
        #a;
        #u;
        constructor(e, t) {
          (this.#a = e), (this.#u = t);
        }
        create(e, t) {
          return tf(this.#a, this.#u, "PUT", e, t);
        }
        edit(e, t) {
          return tf(this.#a, this.#u, "PATCH", e, t);
        }
        delete(e) {
          return tf(this.#a, this.#u, "DELETE", e);
        }
        list() {
          return e3(this.#a, this.#u, { uri: "/datasets", tag: null });
        }
      }
      class tl {
        #a;
        #u;
        constructor(e, t) {
          (this.#a = e), (this.#u = t);
        }
        create(e, t) {
          return N(tf(this.#a, this.#u, "PUT", e, t));
        }
        edit(e, t) {
          return N(tf(this.#a, this.#u, "PATCH", e, t));
        }
        delete(e) {
          return N(tf(this.#a, this.#u, "DELETE", e));
        }
        list() {
          return N(e3(this.#a, this.#u, { uri: "/datasets", tag: null }));
        }
      }
      function tf(e, t, r, n, o) {
        return (
          eh(n),
          e3(e, t, { method: r, uri: `/datasets/${n}`, body: o, tag: null })
        );
      }
      class th {
        #a;
        #u;
        constructor(e, t) {
          (this.#a = e), (this.#u = t);
        }
        list(e) {
          let t =
            e?.includeMembers === !1
              ? "/projects?includeMembers=false"
              : "/projects";
          return e3(this.#a, this.#u, { uri: t });
        }
        getById(e) {
          return e3(this.#a, this.#u, { uri: `/projects/${e}` });
        }
      }
      class tp {
        #a;
        #u;
        constructor(e, t) {
          (this.#a = e), (this.#u = t);
        }
        list(e) {
          let t =
            e?.includeMembers === !1
              ? "/projects?includeMembers=false"
              : "/projects";
          return N(e3(this.#a, this.#u, { uri: t }));
        }
        getById(e) {
          return N(e3(this.#a, this.#u, { uri: `/projects/${e}` }));
        }
      }
      class td {
        #a;
        #u;
        constructor(e, t) {
          (this.#a = e), (this.#u = t);
        }
        getById(e) {
          return e3(this.#a, this.#u, { uri: `/users/${e}` });
        }
      }
      class ty {
        #a;
        #u;
        constructor(e, t) {
          (this.#a = e), (this.#u = t);
        }
        getById(e) {
          return N(e3(this.#a, this.#u, { uri: `/users/${e}` }));
        }
      }
      class tg {
        assets;
        datasets;
        live;
        projects;
        users;
        #c;
        #u;
        listen = to;
        constructor(e, t = eU) {
          this.config(t),
            (this.#u = e),
            (this.assets = new e8(this, this.#u)),
            (this.datasets = new tc(this, this.#u)),
            (this.live = new ta(this)),
            (this.projects = new th(this, this.#u)),
            (this.users = new td(this, this.#u));
        }
        clone() {
          return new tg(this.#u, this.config());
        }
        config(e) {
          if (void 0 === e) return { ...this.#c };
          if (this.#c && !1 === this.#c.allowReconfigure)
            throw Error(
              "Existing client instance cannot be reconfigured - use `withConfig(newConfig)` to return a new client"
            );
          return (this.#c = eB(e, this.#c || {})), this;
        }
        withConfig(e) {
          let t = this.config();
          return new tg(this.#u, {
            ...t,
            ...e,
            stega: {
              ...(t.stega || {}),
              ...("boolean" == typeof e?.stega
                ? { enabled: e.stega }
                : e?.stega || {}),
            },
          });
        }
        fetch(e, t, r) {
          return eH(this, this.#u, this.#c.stega, e, t, r);
        }
        getDocument(e, t) {
          return eG(this, this.#u, e, t);
        }
        getDocuments(e, t) {
          return eV(this, this.#u, e, t);
        }
        create(e, t) {
          return e1(this, this.#u, e, "create", t);
        }
        createIfNotExists(e, t) {
          return eX(this, this.#u, e, t);
        }
        createOrReplace(e, t) {
          return eJ(this, this.#u, e, t);
        }
        delete(e, t) {
          return eK(this, this.#u, e, t);
        }
        mutate(e, t) {
          return eQ(this, this.#u, e, t);
        }
        patch(e, t) {
          return new ex(e, t, this);
        }
        transaction(e) {
          return new ej(e, this);
        }
        action(e, t) {
          return eZ(this, this.#u, e, t);
        }
        request(e) {
          return e3(this, this.#u, e);
        }
        getUrl(e, t) {
          return e5(this, e, t);
        }
        getDataUrl(e, t) {
          return e6(this, e, t);
        }
      }
      class tm {
        assets;
        datasets;
        live;
        projects;
        users;
        observable;
        #c;
        #u;
        listen = to;
        constructor(e, t = eU) {
          this.config(t),
            (this.#u = e),
            (this.assets = new e9(this, this.#u)),
            (this.datasets = new tl(this, this.#u)),
            (this.live = new ta(this)),
            (this.projects = new tp(this, this.#u)),
            (this.users = new ty(this, this.#u)),
            (this.observable = new tg(e, t));
        }
        clone() {
          return new tm(this.#u, this.config());
        }
        config(e) {
          if (void 0 === e) return { ...this.#c };
          if (this.#c && !1 === this.#c.allowReconfigure)
            throw Error(
              "Existing client instance cannot be reconfigured - use `withConfig(newConfig)` to return a new client"
            );
          return (
            this.observable && this.observable.config(e),
            (this.#c = eB(e, this.#c || {})),
            this
          );
        }
        withConfig(e) {
          let t = this.config();
          return new tm(this.#u, {
            ...t,
            ...e,
            stega: {
              ...(t.stega || {}),
              ...("boolean" == typeof e?.stega
                ? { enabled: e.stega }
                : e?.stega || {}),
            },
          });
        }
        fetch(e, t, r) {
          return N(eH(this, this.#u, this.#c.stega, e, t, r));
        }
        getDocument(e, t) {
          return N(eG(this, this.#u, e, t));
        }
        getDocuments(e, t) {
          return N(eV(this, this.#u, e, t));
        }
        create(e, t) {
          return N(e1(this, this.#u, e, "create", t));
        }
        createIfNotExists(e, t) {
          return N(eX(this, this.#u, e, t));
        }
        createOrReplace(e, t) {
          return N(eJ(this, this.#u, e, t));
        }
        delete(e, t) {
          return N(eK(this, this.#u, e, t));
        }
        mutate(e, t) {
          return N(eQ(this, this.#u, e, t));
        }
        patch(e, t) {
          return new eE(e, t, this);
        }
        transaction(e) {
          return new eP(e, this);
        }
        action(e, t) {
          return N(eZ(this, this.#u, e, t));
        }
        request(e) {
          return N(e3(this, this.#u, e));
        }
        dataRequest(e, t, r) {
          return N(e0(this, this.#u, e, t, r));
        }
        getUrl(e, t) {
          return e5(this, e, t);
        }
        getDataUrl(e, t) {
          return e6(this, e, t);
        }
      }
      let tb = (function (e, t) {
          let r = v([
            L({ shouldRetry: eu }),
            ...e,
            ea,
            {
              processOptions: (e) => {
                let t = e.body;
                return !t ||
                  "function" == typeof t.pipe ||
                  P(t) ||
                  (-1 === S.indexOf(typeof t) &&
                    !Array.isArray(t) &&
                    !(function (e) {
                      if (!1 === j(e)) return !1;
                      let t = e.constructor;
                      if (void 0 === t) return !0;
                      let r = t.prototype;
                      return !(
                        !1 === j(r) || !1 === r.hasOwnProperty("isPrototypeOf")
                      );
                    })(t))
                  ? e
                  : Object.assign({}, e, {
                      body: JSON.stringify(e.body),
                      headers: Object.assign({}, e.headers, {
                        "Content-Type": "application/json",
                      }),
                    });
              },
            },
            {
              onResponse: (e) => {
                let t = e.headers["content-type"] || "",
                  r = -1 !== t.indexOf("application/json");
                return e.body && t && r
                  ? Object.assign({}, e, {
                      body: (function (e) {
                        try {
                          return JSON.parse(e);
                        } catch (e) {
                          throw (
                            ((e.message = `Failed to parsed response body as JSON: ${e.message}`),
                            e)
                          );
                        }
                      })(e.body),
                    })
                  : e;
              },
              processOptions: (e) =>
                Object.assign({}, e, {
                  headers: Object.assign(
                    { Accept: "application/json" },
                    e.headers
                  ),
                }),
            },
            {
              onRequest: (e) => {
                if ("xhr" !== e.adapter) return;
                let t = e.request,
                  r = e.context;
                function n(e) {
                  return (t) => {
                    let n = t.lengthComputable
                      ? (t.loaded / t.total) * 100
                      : -1;
                    r.channels.progress.publish({
                      stage: e,
                      percent: n,
                      total: t.total,
                      loaded: t.loaded,
                      lengthComputable: t.lengthComputable,
                    });
                  };
                }
                "upload" in t &&
                  "onprogress" in t.upload &&
                  (t.upload.onprogress = n("upload")),
                  "onprogress" in t && (t.onprogress = n("download"));
              },
            },
            es,
            (function (e = {}) {
              let t = e.implementation || A.Observable;
              if (!t)
                throw Error(
                  "`Observable` is not available in global scope, and no implementation was passed"
                );
              return {
                onReturn: (e, r) =>
                  new t(
                    (t) => (
                      e.error.subscribe((e) => t.error(e)),
                      e.progress.subscribe((e) =>
                        t.next(Object.assign({ type: "progress" }, e))
                      ),
                      e.response.subscribe((e) => {
                        t.next(Object.assign({ type: "response" }, e)),
                          t.complete();
                      }),
                      e.request.publish(r),
                      () => e.abort.publish()
                    )
                  ),
              };
            })({ implementation: q.y }),
          ]);
          return {
            requester: r,
            createClient: (e) =>
              new t(
                (t, n) =>
                  (n || r)({
                    maxRedirects: 0,
                    maxRetries: e.maxRetries,
                    retryDelay: e.retryDelay,
                    ...t,
                  }),
                e
              ),
          };
        })([], tm),
        tv = (tb.requester, tb.createClient);
      var tw = r(25096),
        t_ = r(30166),
        tx = r(99376),
        tE = r(2265),
        tO = r(52141),
        tC = r(35992);
      let tP = (0, t_.default)(
          () => Promise.all([r.e(9301), r.e(1803)]).then(r.bind(r, 11803)),
          {
            loadableGenerated: {
              webpack: () => [
                require.resolveWeak("../_chunks-es/PresentationComlink.js"),
              ],
            },
            ssr: !1,
          }
        ),
        tj = (0, t_.default)(() => r.e(8122).then(r.bind(r, 98122)), {
          loadableGenerated: {
            webpack: () => [
              require.resolveWeak("../_chunks-es/RefreshOnMount.js"),
            ],
          },
          ssr: !1,
        }),
        tS = (0, t_.default)(() => r.e(1313).then(r.bind(r, 21313)), {
          loadableGenerated: {
            webpack: () => [
              require.resolveWeak("../_chunks-es/RefreshOnFocus.js"),
            ],
          },
          ssr: !1,
        }),
        tR = (0, t_.default)(() => r.e(153).then(r.bind(r, 10153)), {
          loadableGenerated: {
            webpack: () => [
              require.resolveWeak("../_chunks-es/RefreshOnReconnect.js"),
            ],
          },
          ssr: !1,
        }),
        tA = () => window !== window.parent,
        tT = () => !!window.opener,
        tI = () => tA() || tT(),
        tM = (e) => {
          var t;
          e instanceof ei
            ? console.warn(
                "Sanity Live is unable to connect to the Sanity API as the current origin - ".concat(
                  window.origin,
                  " - is not in the list of allowed CORS origins for this Sanity Project."
                ),
                e.addOriginUrl && "Add it here:",
                null === (t = e.addOriginUrl) || void 0 === t
                  ? void 0
                  : t.toString()
              )
            : console.error(e);
        };
      function tk(e) {
        let {
            projectId: t,
            dataset: r,
            apiHost: o,
            apiVersion: i,
            useProjectHostname: s,
            token: a,
            requestTagPrefix: u,
            draftModeEnabled: c,
            draftModePerspective: l,
            refreshOnMount: f = !1,
            refreshOnFocus: h = typeof window > "u" ||
              window.self === window.top,
            refreshOnReconnect: p = !0,
            tag: d,
            onError: y = tM,
          } = e,
          g = (0, tE.useMemo)(
            () =>
              tv({
                projectId: t,
                dataset: r,
                apiHost: o,
                apiVersion: i,
                useProjectHostname: s,
                ignoreBrowserTokenWarning: !0,
                token: a,
                useCdn: !1,
                requestTagPrefix: u,
              }),
            [o, i, r, t, u, a, s]
          ),
          m = (0, tx.useRouter)(),
          b = (0, tO.i)((e) => {
            "message" === e.type
              ? (0, tw.n)(e.tags)
              : "restart" === e.type && m.refresh();
          });
        (0, tE.useEffect)(() => {
          let e = g.live.events({ includeDrafts: !!a, tag: d }).subscribe({
            next: (e) => {
              ("message" === e.type ||
                "restart" === e.type ||
                "welcome" === e.type) &&
                b(e);
            },
            error: (e) => {
              y(e);
            },
          });
          return () => e.unsubscribe();
        }, [g.live, b, y, d, a]),
          (0, tE.useEffect)(() => {
            c && l ? (0, tC.Bk)(l) : (0, tC.Bk)("unknown");
          }, [c, l]);
        let [v, w] = (0, tE.useState)(!1);
        (0, tE.useEffect)(() => {
          if (!tI()) {
            if (c && a) {
              (0, tC.Uw)("live");
              return;
            }
            if (c) {
              (0, tC.Uw)("static");
              return;
            }
            (0, tC.Uw)("unknown");
          }
        }, [c, a]),
          (0, tE.useEffect)(() => {
            if (!tI()) return;
            let e = new AbortController(),
              t = setTimeout(() => (0, tC.Uw)("live"), 3e3);
            return (
              window.addEventListener(
                "message",
                (r) => {
                  let { data: n } = r;
                  n &&
                    "object" == typeof n &&
                    "domain" in n &&
                    "sanity/channels" === n.domain &&
                    "from" in n &&
                    "presentation" === n.from &&
                    (clearTimeout(t),
                    (0, tC.Uw)(
                      tT() ? "presentation-window" : "presentation-iframe"
                    ),
                    w(!0),
                    e.abort());
                },
                { signal: e.signal }
              ),
              () => {
                clearTimeout(t), e.abort();
              }
            );
          }, []);
        let _ = (0, tE.useRef)(void 0);
        return (
          (0, tE.useEffect)(() => {
            if (c)
              return (
                clearTimeout(_.current),
                () => {
                  _.current = setTimeout(() => {
                    console.warn(
                      "Sanity Live: Draft mode was enabled, but is now being disabled"
                    );
                  });
                }
              );
          }, [c]),
          (0, n.jsxs)(n.Fragment, {
            children: [
              c &&
                v &&
                (0, n.jsx)(tP, {
                  draftModeEnabled: c,
                  draftModePerspective: l,
                }),
              !c && f && (0, n.jsx)(tj, {}),
              !c && h && (0, n.jsx)(tS, {}),
              !c && p && (0, n.jsx)(tR, {}),
            ],
          })
        );
      }
      tk.displayName = "SanityLive";
    },
    25096: function (e, t, r) {
      "use strict";
      r.d(t, {
        N: function () {
          return o;
        },
        n: function () {
          return i;
        },
      }),
        r(83079);
      var n = r(12119),
        o = (0, n.$)("9f3a6ff7d3912f65193221b89e19f00ab59dfda6"),
        i = (0, n.$)("2a7abaf314b01016b91de186fb440ecc10f635f2");
    },
    76939: function (e, t, r) {
      "use strict";
      r.d(t, {
        default: function () {
          return s;
        },
      });
      var n = r(57437),
        o = r(2265);
      let i = (0, o.lazy)(() =>
        Promise.all([r.e(32), r.e(9301), r.e(9331)]).then(r.bind(r, 99331))
      );
      function s(e) {
        return (0, n.jsx)(o.Suspense, {
          fallback: null,
          children: (0, n.jsx)(i, { ...e }),
        });
      }
    },
    5853: function (e, t, r) {
      "use strict";
      r.r(t),
        r.d(t, {
          __addDisposableResource: function () {
            return U;
          },
          __assign: function () {
            return i;
          },
          __asyncDelegator: function () {
            return C;
          },
          __asyncGenerator: function () {
            return O;
          },
          __asyncValues: function () {
            return P;
          },
          __await: function () {
            return E;
          },
          __awaiter: function () {
            return d;
          },
          __classPrivateFieldGet: function () {
            return I;
          },
          __classPrivateFieldIn: function () {
            return k;
          },
          __classPrivateFieldSet: function () {
            return M;
          },
          __createBinding: function () {
            return g;
          },
          __decorate: function () {
            return a;
          },
          __disposeResources: function () {
            return q;
          },
          __esDecorate: function () {
            return c;
          },
          __exportStar: function () {
            return m;
          },
          __extends: function () {
            return o;
          },
          __generator: function () {
            return y;
          },
          __importDefault: function () {
            return T;
          },
          __importStar: function () {
            return A;
          },
          __makeTemplateObject: function () {
            return j;
          },
          __metadata: function () {
            return p;
          },
          __param: function () {
            return u;
          },
          __propKey: function () {
            return f;
          },
          __read: function () {
            return v;
          },
          __rest: function () {
            return s;
          },
          __rewriteRelativeImportExtension: function () {
            return F;
          },
          __runInitializers: function () {
            return l;
          },
          __setFunctionName: function () {
            return h;
          },
          __spread: function () {
            return w;
          },
          __spreadArray: function () {
            return x;
          },
          __spreadArrays: function () {
            return _;
          },
          __values: function () {
            return b;
          },
        });
      var n = function (e, t) {
        return (n =
          Object.setPrototypeOf ||
          ({ __proto__: [] } instanceof Array &&
            function (e, t) {
              e.__proto__ = t;
            }) ||
          function (e, t) {
            for (var r in t)
              Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
          })(e, t);
      };
      function o(e, t) {
        if ("function" != typeof t && null !== t)
          throw TypeError(
            "Class extends value " + String(t) + " is not a constructor or null"
          );
        function r() {
          this.constructor = e;
        }
        n(e, t),
          (e.prototype =
            null === t
              ? Object.create(t)
              : ((r.prototype = t.prototype), new r()));
      }
      var i = function () {
        return (i =
          Object.assign ||
          function (e) {
            for (var t, r = 1, n = arguments.length; r < n; r++)
              for (var o in (t = arguments[r]))
                Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
            return e;
          }).apply(this, arguments);
      };
      function s(e, t) {
        var r = {};
        for (var n in e)
          Object.prototype.hasOwnProperty.call(e, n) &&
            0 > t.indexOf(n) &&
            (r[n] = e[n]);
        if (null != e && "function" == typeof Object.getOwnPropertySymbols)
          for (
            var o = 0, n = Object.getOwnPropertySymbols(e);
            o < n.length;
            o++
          )
            0 > t.indexOf(n[o]) &&
              Object.prototype.propertyIsEnumerable.call(e, n[o]) &&
              (r[n[o]] = e[n[o]]);
        return r;
      }
      function a(e, t, r, n) {
        var o,
          i = arguments.length,
          s =
            i < 3
              ? t
              : null === n
              ? (n = Object.getOwnPropertyDescriptor(t, r))
              : n;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
          s = Reflect.decorate(e, t, r, n);
        else
          for (var a = e.length - 1; a >= 0; a--)
            (o = e[a]) &&
              (s = (i < 3 ? o(s) : i > 3 ? o(t, r, s) : o(t, r)) || s);
        return i > 3 && s && Object.defineProperty(t, r, s), s;
      }
      function u(e, t) {
        return function (r, n) {
          t(r, n, e);
        };
      }
      function c(e, t, r, n, o, i) {
        function s(e) {
          if (void 0 !== e && "function" != typeof e)
            throw TypeError("Function expected");
          return e;
        }
        for (
          var a,
            u = n.kind,
            c = "getter" === u ? "get" : "setter" === u ? "set" : "value",
            l = !t && e ? (n.static ? e : e.prototype) : null,
            f = t || (l ? Object.getOwnPropertyDescriptor(l, n.name) : {}),
            h = !1,
            p = r.length - 1;
          p >= 0;
          p--
        ) {
          var d = {};
          for (var y in n) d[y] = "access" === y ? {} : n[y];
          for (var y in n.access) d.access[y] = n.access[y];
          d.addInitializer = function (e) {
            if (h)
              throw TypeError(
                "Cannot add initializers after decoration has completed"
              );
            i.push(s(e || null));
          };
          var g = (0, r[p])(
            "accessor" === u ? { get: f.get, set: f.set } : f[c],
            d
          );
          if ("accessor" === u) {
            if (void 0 === g) continue;
            if (null === g || "object" != typeof g)
              throw TypeError("Object expected");
            (a = s(g.get)) && (f.get = a),
              (a = s(g.set)) && (f.set = a),
              (a = s(g.init)) && o.unshift(a);
          } else (a = s(g)) && ("field" === u ? o.unshift(a) : (f[c] = a));
        }
        l && Object.defineProperty(l, n.name, f), (h = !0);
      }
      function l(e, t, r) {
        for (var n = arguments.length > 2, o = 0; o < t.length; o++)
          r = n ? t[o].call(e, r) : t[o].call(e);
        return n ? r : void 0;
      }
      function f(e) {
        return "symbol" == typeof e ? e : "".concat(e);
      }
      function h(e, t, r) {
        return (
          "symbol" == typeof t &&
            (t = t.description ? "[".concat(t.description, "]") : ""),
          Object.defineProperty(e, "name", {
            configurable: !0,
            value: r ? "".concat(r, " ", t) : t,
          })
        );
      }
      function p(e, t) {
        if ("object" == typeof Reflect && "function" == typeof Reflect.metadata)
          return Reflect.metadata(e, t);
      }
      function d(e, t, r, n) {
        return new (r || (r = Promise))(function (o, i) {
          function s(e) {
            try {
              u(n.next(e));
            } catch (e) {
              i(e);
            }
          }
          function a(e) {
            try {
              u(n.throw(e));
            } catch (e) {
              i(e);
            }
          }
          function u(e) {
            var t;
            e.done
              ? o(e.value)
              : ((t = e.value) instanceof r
                  ? t
                  : new r(function (e) {
                      e(t);
                    })
                ).then(s, a);
          }
          u((n = n.apply(e, t || [])).next());
        });
      }
      function y(e, t) {
        var r,
          n,
          o,
          i = {
            label: 0,
            sent: function () {
              if (1 & o[0]) throw o[1];
              return o[1];
            },
            trys: [],
            ops: [],
          },
          s = Object.create(
            ("function" == typeof Iterator ? Iterator : Object).prototype
          );
        return (
          (s.next = a(0)),
          (s.throw = a(1)),
          (s.return = a(2)),
          "function" == typeof Symbol &&
            (s[Symbol.iterator] = function () {
              return this;
            }),
          s
        );
        function a(a) {
          return function (u) {
            return (function (a) {
              if (r) throw TypeError("Generator is already executing.");
              for (; s && ((s = 0), a[0] && (i = 0)), i; )
                try {
                  if (
                    ((r = 1),
                    n &&
                      (o =
                        2 & a[0]
                          ? n.return
                          : a[0]
                          ? n.throw || ((o = n.return) && o.call(n), 0)
                          : n.next) &&
                      !(o = o.call(n, a[1])).done)
                  )
                    return o;
                  switch (((n = 0), o && (a = [2 & a[0], o.value]), a[0])) {
                    case 0:
                    case 1:
                      o = a;
                      break;
                    case 4:
                      return i.label++, { value: a[1], done: !1 };
                    case 5:
                      i.label++, (n = a[1]), (a = [0]);
                      continue;
                    case 7:
                      (a = i.ops.pop()), i.trys.pop();
                      continue;
                    default:
                      if (
                        !(o = (o = i.trys).length > 0 && o[o.length - 1]) &&
                        (6 === a[0] || 2 === a[0])
                      ) {
                        i = 0;
                        continue;
                      }
                      if (3 === a[0] && (!o || (a[1] > o[0] && a[1] < o[3]))) {
                        i.label = a[1];
                        break;
                      }
                      if (6 === a[0] && i.label < o[1]) {
                        (i.label = o[1]), (o = a);
                        break;
                      }
                      if (o && i.label < o[2]) {
                        (i.label = o[2]), i.ops.push(a);
                        break;
                      }
                      o[2] && i.ops.pop(), i.trys.pop();
                      continue;
                  }
                  a = t.call(e, i);
                } catch (e) {
                  (a = [6, e]), (n = 0);
                } finally {
                  r = o = 0;
                }
              if (5 & a[0]) throw a[1];
              return { value: a[0] ? a[1] : void 0, done: !0 };
            })([a, u]);
          };
        }
      }
      var g = Object.create
        ? function (e, t, r, n) {
            void 0 === n && (n = r);
            var o = Object.getOwnPropertyDescriptor(t, r);
            (!o ||
              ("get" in o ? !t.__esModule : o.writable || o.configurable)) &&
              (o = {
                enumerable: !0,
                get: function () {
                  return t[r];
                },
              }),
              Object.defineProperty(e, n, o);
          }
        : function (e, t, r, n) {
            void 0 === n && (n = r), (e[n] = t[r]);
          };
      function m(e, t) {
        for (var r in e)
          "default" === r ||
            Object.prototype.hasOwnProperty.call(t, r) ||
            g(t, e, r);
      }
      function b(e) {
        var t = "function" == typeof Symbol && Symbol.iterator,
          r = t && e[t],
          n = 0;
        if (r) return r.call(e);
        if (e && "number" == typeof e.length)
          return {
            next: function () {
              return (
                e && n >= e.length && (e = void 0),
                { value: e && e[n++], done: !e }
              );
            },
          };
        throw TypeError(
          t ? "Object is not iterable." : "Symbol.iterator is not defined."
        );
      }
      function v(e, t) {
        var r = "function" == typeof Symbol && e[Symbol.iterator];
        if (!r) return e;
        var n,
          o,
          i = r.call(e),
          s = [];
        try {
          for (; (void 0 === t || t-- > 0) && !(n = i.next()).done; )
            s.push(n.value);
        } catch (e) {
          o = { error: e };
        } finally {
          try {
            n && !n.done && (r = i.return) && r.call(i);
          } finally {
            if (o) throw o.error;
          }
        }
        return s;
      }
      function w() {
        for (var e = [], t = 0; t < arguments.length; t++)
          e = e.concat(v(arguments[t]));
        return e;
      }
      function _() {
        for (var e = 0, t = 0, r = arguments.length; t < r; t++)
          e += arguments[t].length;
        for (var n = Array(e), o = 0, t = 0; t < r; t++)
          for (var i = arguments[t], s = 0, a = i.length; s < a; s++, o++)
            n[o] = i[s];
        return n;
      }
      function x(e, t, r) {
        if (r || 2 == arguments.length)
          for (var n, o = 0, i = t.length; o < i; o++)
            (!n && o in t) ||
              (n || (n = Array.prototype.slice.call(t, 0, o)), (n[o] = t[o]));
        return e.concat(n || Array.prototype.slice.call(t));
      }
      function E(e) {
        return this instanceof E ? ((this.v = e), this) : new E(e);
      }
      function O(e, t, r) {
        if (!Symbol.asyncIterator)
          throw TypeError("Symbol.asyncIterator is not defined.");
        var n,
          o = r.apply(e, t || []),
          i = [];
        return (
          (n = Object.create(
            ("function" == typeof AsyncIterator ? AsyncIterator : Object)
              .prototype
          )),
          s("next"),
          s("throw"),
          s("return", function (e) {
            return function (t) {
              return Promise.resolve(t).then(e, c);
            };
          }),
          (n[Symbol.asyncIterator] = function () {
            return this;
          }),
          n
        );
        function s(e, t) {
          o[e] &&
            ((n[e] = function (t) {
              return new Promise(function (r, n) {
                i.push([e, t, r, n]) > 1 || a(e, t);
              });
            }),
            t && (n[e] = t(n[e])));
        }
        function a(e, t) {
          try {
            var r;
            (r = o[e](t)).value instanceof E
              ? Promise.resolve(r.value.v).then(u, c)
              : l(i[0][2], r);
          } catch (e) {
            l(i[0][3], e);
          }
        }
        function u(e) {
          a("next", e);
        }
        function c(e) {
          a("throw", e);
        }
        function l(e, t) {
          e(t), i.shift(), i.length && a(i[0][0], i[0][1]);
        }
      }
      function C(e) {
        var t, r;
        return (
          (t = {}),
          n("next"),
          n("throw", function (e) {
            throw e;
          }),
          n("return"),
          (t[Symbol.iterator] = function () {
            return this;
          }),
          t
        );
        function n(n, o) {
          t[n] = e[n]
            ? function (t) {
                return (r = !r)
                  ? { value: E(e[n](t)), done: !1 }
                  : o
                  ? o(t)
                  : t;
              }
            : o;
        }
      }
      function P(e) {
        if (!Symbol.asyncIterator)
          throw TypeError("Symbol.asyncIterator is not defined.");
        var t,
          r = e[Symbol.asyncIterator];
        return r
          ? r.call(e)
          : ((e = b(e)),
            (t = {}),
            n("next"),
            n("throw"),
            n("return"),
            (t[Symbol.asyncIterator] = function () {
              return this;
            }),
            t);
        function n(r) {
          t[r] =
            e[r] &&
            function (t) {
              return new Promise(function (n, o) {
                !(function (e, t, r, n) {
                  Promise.resolve(n).then(function (t) {
                    e({ value: t, done: r });
                  }, t);
                })(n, o, (t = e[r](t)).done, t.value);
              });
            };
        }
      }
      function j(e, t) {
        return (
          Object.defineProperty
            ? Object.defineProperty(e, "raw", { value: t })
            : (e.raw = t),
          e
        );
      }
      var S = Object.create
          ? function (e, t) {
              Object.defineProperty(e, "default", { enumerable: !0, value: t });
            }
          : function (e, t) {
              e.default = t;
            },
        R = function (e) {
          return (R =
            Object.getOwnPropertyNames ||
            function (e) {
              var t = [];
              for (var r in e)
                Object.prototype.hasOwnProperty.call(e, r) && (t[t.length] = r);
              return t;
            })(e);
        };
      function A(e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (null != e)
          for (var r = R(e), n = 0; n < r.length; n++)
            "default" !== r[n] && g(t, e, r[n]);
        return S(t, e), t;
      }
      function T(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function I(e, t, r, n) {
        if ("a" === r && !n)
          throw TypeError("Private accessor was defined without a getter");
        if ("function" == typeof t ? e !== t || !n : !t.has(e))
          throw TypeError(
            "Cannot read private member from an object whose class did not declare it"
          );
        return "m" === r ? n : "a" === r ? n.call(e) : n ? n.value : t.get(e);
      }
      function M(e, t, r, n, o) {
        if ("m" === n) throw TypeError("Private method is not writable");
        if ("a" === n && !o)
          throw TypeError("Private accessor was defined without a setter");
        if ("function" == typeof t ? e !== t || !o : !t.has(e))
          throw TypeError(
            "Cannot write private member to an object whose class did not declare it"
          );
        return "a" === n ? o.call(e, r) : o ? (o.value = r) : t.set(e, r), r;
      }
      function k(e, t) {
        if (null === t || ("object" != typeof t && "function" != typeof t))
          throw TypeError("Cannot use 'in' operator on non-object");
        return "function" == typeof e ? t === e : e.has(t);
      }
      function U(e, t, r) {
        if (null != t) {
          var n, o;
          if ("object" != typeof t && "function" != typeof t)
            throw TypeError("Object expected.");
          if (r) {
            if (!Symbol.asyncDispose)
              throw TypeError("Symbol.asyncDispose is not defined.");
            n = t[Symbol.asyncDispose];
          }
          if (void 0 === n) {
            if (!Symbol.dispose)
              throw TypeError("Symbol.dispose is not defined.");
            (n = t[Symbol.dispose]), r && (o = n);
          }
          if ("function" != typeof n) throw TypeError("Object not disposable.");
          o &&
            (n = function () {
              try {
                o.call(this);
              } catch (e) {
                return Promise.reject(e);
              }
            }),
            e.stack.push({ value: t, dispose: n, async: r });
        } else r && e.stack.push({ async: !0 });
        return t;
      }
      var L =
        "function" == typeof SuppressedError
          ? SuppressedError
          : function (e, t, r) {
              var n = Error(r);
              return (
                (n.name = "SuppressedError"),
                (n.error = e),
                (n.suppressed = t),
                n
              );
            };
      function q(e) {
        function t(t) {
          (e.error = e.hasError
            ? new L(t, e.error, "An error was suppressed during disposal.")
            : t),
            (e.hasError = !0);
        }
        var r,
          n = 0;
        return (function o() {
          for (; (r = e.stack.pop()); )
            try {
              if (!r.async && 1 === n)
                return (n = 0), e.stack.push(r), Promise.resolve().then(o);
              if (r.dispose) {
                var i = r.dispose.call(r.value);
                if (r.async)
                  return (
                    (n |= 2),
                    Promise.resolve(i).then(o, function (e) {
                      return t(e), o();
                    })
                  );
              } else n |= 1;
            } catch (e) {
              t(e);
            }
          if (1 === n)
            return e.hasError ? Promise.reject(e.error) : Promise.resolve();
          if (e.hasError) throw e.error;
        })();
      }
      function F(e, t) {
        return "string" == typeof e && /^\.\.?\//.test(e)
          ? e.replace(
              /\.(tsx)$|((?:\.d)?)((?:\.[^./]+?)?)\.([cm]?)ts$/i,
              function (e, r, n, o, i) {
                return r
                  ? t
                    ? ".jsx"
                    : ".js"
                  : !n || (o && i)
                  ? n + o + "." + i.toLowerCase() + "js"
                  : e;
              }
            )
          : e;
      }
      t.default = {
        __extends: o,
        __assign: i,
        __rest: s,
        __decorate: a,
        __param: u,
        __esDecorate: c,
        __runInitializers: l,
        __propKey: f,
        __setFunctionName: h,
        __metadata: p,
        __awaiter: d,
        __generator: y,
        __createBinding: g,
        __exportStar: m,
        __values: b,
        __read: v,
        __spread: w,
        __spreadArrays: _,
        __spreadArray: x,
        __await: E,
        __asyncGenerator: O,
        __asyncDelegator: C,
        __asyncValues: P,
        __makeTemplateObject: j,
        __importStar: A,
        __importDefault: T,
        __classPrivateFieldGet: I,
        __classPrivateFieldSet: M,
        __classPrivateFieldIn: k,
        __addDisposableResource: U,
        __disposeResources: q,
        __rewriteRelativeImportExtension: F,
      };
    },
    52141: function (e, t, r) {
      "use strict";
      r.d(t, {
        i: function () {
          return o;
        },
      });
      var n = r(2265);
      function o(e) {
        let t = (0, n.useRef)(null);
        return (
          (0, n.useInsertionEffect)(() => {
            t.current = e;
          }, [e]),
          (0, n.useCallback)((...e) => (0, t.current)(...e), [])
        );
      }
    },
  },
]);
