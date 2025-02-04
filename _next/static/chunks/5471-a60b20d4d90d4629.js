"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [5471],
  {
    72040: function (e, t, l) {
      var a = l(57437),
        s = l(2265);
      t.default = (e) => {
        let { children: t, className: l = "", ...r } = e,
          [i, n] = (0, s.useState)(!1),
          c = (0, s.useRef)(null),
          o = (0, s.useRef)(null),
          d = (0, s.useRef)(0),
          u = (0, s.useRef)(null),
          x = (0, s.useRef)(),
          h = (0, s.useRef)(!1),
          f = (0, s.useRef)(null),
          g = (0, s.useRef)(null),
          A = {
            glow: {
              default: { r: 151, g: 34, b: 253 },
              hover: { r: 255, g: 255, b: 255 },
            },
          },
          m = (0, s.useRef)({
            x: 0,
            y: 0,
            glowSize: 30,
            intensity: 1,
            glowCompress: 1,
            glowColor: { ...A.glow.default },
          }),
          p = (e, t, l) => ({
            r: Math.round(e.r + (t.r - e.r) * l),
            g: Math.round(e.g + (t.g - e.g) * l),
            b: Math.round(e.b + (t.b - e.b) * l),
          }),
          w = (e) =>
            "rgb(".concat(e.r, ", ").concat(e.g, ", ").concat(e.b, ")"),
          v = (e, t, l) => e + (t - e) * l,
          j = (e) => {
            u.current || (u.current = e);
            let t = e - u.current;
            u.current = e;
            let l = (d.current * Math.PI) / 180,
              a = {
                x: i ? 50 : 50 + 42.5 * Math.cos(l),
                y: i ? 50 : 50 + 42.5 * Math.sin(l),
                glowSize: i ? 90 : 30,
                intensity: 1,
                glowCompress: i ? 0.7 : 1,
                glowColor: i ? A.glow.hover : A.glow.default,
              };
            if (h.current && f.current && g.current) {
              let t = Math.min((e - f.current) / 600, 1);
              (m.current = {
                x: v(g.current.x, a.x, t),
                y: v(g.current.y, a.y, t),
                glowSize: v(g.current.glowSize, a.glowSize, t),
                intensity: v(g.current.intensity, a.intensity, t),
                glowCompress: v(g.current.glowCompress, a.glowCompress, t),
                glowColor: p(g.current.glowColor, a.glowColor, t),
              }),
                t >= 1 &&
                  ((h.current = !1),
                  (f.current = null),
                  (g.current = null),
                  (m.current = { ...a }));
            } else m.current = { ...a };
            let { current: s } = m,
              r = "radial-gradient("
                .concat(s.glowSize * s.glowCompress, "% ")
                .concat(s.glowSize, "% at ")
                .concat(s.x, "% ")
                .concat(s.y, "%, ")
                .concat(w(s.glowColor), " 0%, rgba(255, 255, 255, 0) 100%)");
            o.current && (o.current.style.background = r),
              i || (d.current = (d.current + (2 * t) / 16) % 360),
              (x.current = requestAnimationFrame(j));
          },
          b = () => {
            (h.current = !0),
              (f.current = performance.now()),
              (g.current = {
                ...m.current,
                glowColor: { ...m.current.glowColor },
              });
          };
        return (
          (0, s.useEffect)(
            () => (
              (x.current = requestAnimationFrame(j)),
              () => {
                x.current && cancelAnimationFrame(x.current);
              }
            ),
            [i]
          ),
          (0, a.jsxs)("button", {
            ref: c,
            onMouseEnter: () => {
              n(!0), b();
            },
            onMouseLeave: () => {
              n(!1), b();
            },
            className:
              "leading-[100%] rounded-full h-12 px-4 relative bg-white/20 text-offWhite font-medium ".concat(
                l
              ),
            ...r,
            children: [
              (0, a.jsx)("div", {
                ref: o,
                className:
                  "absolute inset-0 rounded-[200px] transition-opacity duration-300",
              }),
              (0, a.jsx)("div", {
                className: "absolute inset-[1px] rounded-[200px] bg-darkBlue",
              }),
              (0, a.jsx)("div", {
                className:
                  "relative z-[3] flex items-center justify-center gap-[10px]",
                children: t,
              }),
            ],
          })
        );
      };
    },
    95471: function (e, t, l) {
      l.d(t, {
        default: function () {
          return A;
        },
      });
      var a = l(57437),
        s = l(27648),
        r = l(18088),
        i = l(17238),
        n = l(33145),
        c = l(72040),
        o = l(17427),
        d = l(57019),
        u = {
          src: "/_next/static/media/topbarshadow.e9960e13.png",
          height: 80,
          width: 1918,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAABCAMAAADU3h9xAAAABlBMVEV8Zvx8Z/zAGY3kAAAAAnRSTlM5O8kcqaYAAAAJcEhZcwAACxMAAAsTAQCanBgAAAARSURBVHicY2BgYGBkZGRgAAAAFQAEXBfsxQAAAABJRU5ErkJggg==",
          blurWidth: 8,
          blurHeight: 1,
        },
        x = {
          src: "/_next/static/media/coin2.af432e16.png",
          height: 54,
          width: 52,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAYFBMVEVgYKNAQY5OTaU9PJE1Nnc1PoweFjAoJDwgH0VQTl1GRo9wbrKjoeU3N34zRKoPCx8gJmIiHypsanIjJmBZVWeAgMBOUYl7ecdwcKIoJ1VAPYNyc30wK01EQWR/gIo2Nl0aKPLGAAAAHXRSTlMBdi1DqlP6/f79kqk2aQ/72fr67fnRv7Lx/////jW+SB0AAAAJcEhZcwAACxMAAAsTAQCanBgAAABCSURBVHicBcGHAYAgEACxQ8pT7B0B3X9LE6CLZ+oBvdXa7p5xLrtIu7A+vEHkQPlJyvolbHZuCY8Gk31+FMBgYgc/dcsDBVpmlRcAAAAASUVORK5CYII=",
          blurWidth: 8,
          blurHeight: 8,
        },
        h = l(2265),
        f = l(36498),
        g = {
          src: "/_next/static/media/kvants-arcade-logo.7d8b88a8.svg",
          height: 68,
          width: 170,
          blurWidth: 0,
          blurHeight: 0,
        },
        A = (e) => {
          let {
              topBar: t,
              mainNav: l,
              pixelLogo: A = !1,
              navigationGroups: m,
              socialLinks: p,
            } = e,
            [w, v] = (0, h.useState)({ days: 0, hours: 0, minutes: 0 }),
            [j, b] = (0, h.useState)({ initial: !1, opened: null }),
            N = (0, h.useRef)(null),
            C = (0, h.useRef)(null),
            Z = (0, h.useRef)(null);
          (0, h.useEffect)(() => {
            let e = new Date(t.targetDate),
              l = () => {
                let t = new Date(),
                  l = e.getTime() - t.getTime();
                l > 0 &&
                  v({
                    days: Math.floor(l / 864e5),
                    hours: Math.floor((l / 36e5) % 24),
                    minutes: Math.floor((l / 1e3 / 60) % 60),
                  });
              };
            l();
            let a = setInterval(l, 6e4);
            return () => clearInterval(a);
          }, [t.targetDate]);
          let M = () => {
            !1 === j.initial
              ? b({ initial: null, opened: !0 })
              : b({ ...j, opened: !j.opened });
          };
          (0, h.useEffect)(() => {
            j.opened
              ? (f.ZP.to(N.current, {
                  duration: 0.3,
                  ease: "power4.out",
                  css: { right: "0" },
                }),
                f.ZP.set(document.body, { overflow: "hidden" }),
                f.ZP.to(C.current, {
                  duration: 0.3,
                  rotate: 45,
                  y: 6,
                  width: 28,
                  ease: "power2.inOut",
                }),
                f.ZP.to(Z.current, {
                  duration: 0.3,
                  rotate: -45,
                  y: -4,
                  width: 28,
                  ease: "power2.inOut",
                }))
              : (f.ZP.to(N.current, {
                  duration: 0.3,
                  ease: "power4.out",
                  css: { right: "-100%" },
                }),
                f.ZP.set(document.body, { overflow: "initial" }),
                f.ZP.to(C.current, {
                  duration: 0.3,
                  rotate: 0,
                  y: 0,
                  width: 32,
                  ease: "power2.inOut",
                }),
                f.ZP.to(Z.current, {
                  duration: 0.3,
                  rotate: 0,
                  y: 0,
                  width: 32,
                  ease: "power2.inOut",
                }));
          }, [j]);
          let y = () => {
            b({ ...j, opened: !j.opened });
          };
          return (0, a.jsxs)("div", {
            className: "fixed top-0 w-full left-0 z-[100]",
            children: [
              (0, a.jsxs)("div", {
                className:
                  "h-[98px] lg:h-20 border-b border-white/25 bg-white/5 backdrop-blur-[12px] relative flex items-center z-10",
                children: [
                  (0, a.jsx)(n.default, {
                    className: "absolute top-0 left-0 object-cover w-full",
                    src: u,
                    alt: "",
                  }),
                  (0, a.jsxs)("div", {
                    className:
                      "xl:container gap-2 lg:gap-10 w-full px-5 lg:mx-auto flex flex-col lg:flex-row items-center justify-between relative",
                    children: [
                      (0, a.jsxs)("div", {
                        className:
                          "flex items-center gap-2 justify-between lg:justify-start lg:gap-4 flex-row w-full",
                        children: [
                          (0, a.jsx)("div", {
                            className:
                              "flex flex-col gap-1 justify-center gap-0",
                            children: (0, a.jsxs)("div", {
                              className: "flex items-center gap-1 lg:gap-4",
                              children: [
                                (0, a.jsx)(n.default, {
                                  src: x,
                                  alt: "",
                                  className:
                                    "w-10 h-10 lg:!w-[52px] lg:!h-[52px]",
                                }),
                                (0, a.jsxs)("div", {
                                  className: "flex flex-col gap-[2px]",
                                  children: [
                                    (0, a.jsx)("div", {
                                      className:
                                        "text-[12px] lg:text-base mr-2 font-medium",
                                      children: t.tokenText,
                                    }),
                                    (0, a.jsx)(s.default, {
                                      href: t.whitelistButtonUrl,
                                      className:
                                        "lg:hidden px-2 py-[6px] bg-gradient-to-r w-fit rounded-full from-[#C9C2FA] via-white to-[#C9C2FA] text-[10px] text-darkBlue bg leading-[100%] font-medium",
                                      children: t.whitelistButtonText,
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          }),
                          (0, a.jsxs)("div", {
                            className: "flex gap-4 items-center",
                            children: [
                              (0, a.jsxs)("div", {
                                className: "flex gap-1",
                                children: [
                                  (0, a.jsxs)("div", {
                                    className:
                                      "flex flex-col items-center w-[38px] h-[38px] rounded-[6px] countdown-item",
                                    children: [
                                      (0, a.jsx)("div", {
                                        className: "font-medium",
                                        children: w.days,
                                      }),
                                      (0, a.jsx)("div", {
                                        className: "text-[9px] text-white/60",
                                        children: "DAYS",
                                      }),
                                    ],
                                  }),
                                  (0, a.jsxs)("div", {
                                    className:
                                      "flex flex-col items-center w-[38px] h-[38px] rounded-[6px] countdown-item",
                                    children: [
                                      (0, a.jsx)("div", {
                                        className: "font-medium",
                                        children: w.hours,
                                      }),
                                      (0, a.jsx)("div", {
                                        className: "text-[9px] text-white/60",
                                        children: "HRS",
                                      }),
                                    ],
                                  }),
                                  (0, a.jsxs)("div", {
                                    className:
                                      "flex flex-col items-center w-[38px] h-[38px] rounded-[6px] countdown-item",
                                    children: [
                                      (0, a.jsx)("div", {
                                        className: "font-medium",
                                        children: w.minutes,
                                      }),
                                      (0, a.jsx)("div", {
                                        className: "text-[9px] text-white/60",
                                        children: "MIN",
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              (0, a.jsx)(s.default, {
                                href: t.whitelistButtonUrl,
                                className:
                                  "hidden lg:flex h-9 px-2 xl:px-[14px] flex items-center leading-[100%] backdrop-blur-[12px] bg-white/[0.08] border border-white/[0.04] rounded-full hover:opacity-80 transition-opacity ease-in-out duration-300",
                                children: t.whitelistButtonText,
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, a.jsxs)("div", {
                        className:
                          "text-[14px] lg:text-base items-center gap-0 md:gap-4 flex-row flex whitespace-nowrap justify-between w-full lg:w-fit flex-shrink-0",
                        children: [
                          "Launching on",
                          (0, a.jsx)("div", {
                            className: "flex items-center gap-4",
                            children: t.buyPlatforms.map((e, l) =>
                              (0, a.jsxs)(
                                "div",
                                {
                                  className: "flex items-center gap-[10px]",
                                  children: [
                                    (0, a.jsxs)(s.default, {
                                      href: e.url,
                                      className:
                                        "flex gap-[10px] items-center hover:opacity-80 transition-opacity ease-in-out duration-300 whitespace-nowrap",
                                      children: [
                                        (0, a.jsx)(n.default, {
                                          src: e.logo.url,
                                          alt: e.name,
                                          width: e.logo.dimensions.width,
                                          height: e.logo.dimensions.height,
                                          className: "w-4 object-contain",
                                        }),
                                        e.name,
                                      ],
                                    }),
                                    l < t.buyPlatforms.length - 1 &&
                                      (0, a.jsx)("div", {
                                        className: "h-5 w-[1px] bg-white/20",
                                      }),
                                  ],
                                },
                                e.name
                              )
                            ),
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              (0, a.jsxs)("nav", {
                className:
                  "container mx-auto flex justify-between items-center pt-4 lg:pt-8 px-5 lg:px-4",
                children: [
                  (0, a.jsx)("div", {
                    className: "xl:w-[160px] relative z-10",
                    children: (0, a.jsx)("a", {
                      href: "/",
                      children: A
                        ? (0, a.jsx)(n.default, {
                            src: g,
                            alt: "kvants logo",
                            className:
                              "w-[120px] lg:w-[160px] lg:h-[49px] object-contain",
                          })
                        : (0, a.jsx)(r.Z, {
                            className: "w-[98px] h-6 lg:w-[150px] lg:h-[37px]",
                          }),
                    }),
                  }),
                  (0, a.jsxs)("div", {
                    className: "gap-4 items-center hidden lg:flex",
                    children: [
                      (0, a.jsx)("a", {
                        href: l.buyButton.url,
                        className: "relative z-10",
                        children: (0, a.jsxs)("button", {
                          className:
                            "text-offWhite font-medium h-12 pl-1 pr-4 rounded-full border border-white/10 relative bg-darkBlue overflow-hidden hover:opacity-80 transition-opacity ease-in-out duration-300",
                          children: [
                            (0, a.jsx)(n.default, {
                              src: d.Z,
                              alt: "",
                              className: "absolute inset-0",
                            }),
                            (0, a.jsxs)("div", {
                              className:
                                "flex items-center gap-[5px] relative z-[2]",
                              children: [
                                (0, a.jsx)(n.default, {
                                  src: o.Z,
                                  alt: "",
                                  className: "w-8 h-8 scale-90",
                                }),
                                l.buyButton.text,
                              ],
                            }),
                          ],
                        }),
                      }),
                      (0, a.jsx)(s.default, {
                        href: l.launchButton.url,
                        children: (0, a.jsxs)(c.default, {
                          children: [
                            (0, a.jsx)(i.Z, {}),
                            " ",
                            l.launchButton.text,
                          ],
                        }),
                      }),
                    ],
                  }),
                  (0, a.jsx)("div", {
                    className: "xl:w-[160px] flex justify-end",
                    children: (0, a.jsx)("button", {
                      className:
                        "relative z-50 flex flex-col items-center justify-center w-8 h-8 gap-2 opacity-0",
                      onClick: M,
                      children: (0, a.jsx)("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        width: "24",
                        height: "18",
                        viewBox: "0 0 24 18",
                        fill: "none",
                        children: (0, a.jsx)("path", {
                          d: "M6 1.8001C6 1.13738 6.53728 0.600098 7.2 0.600098H22.8C23.4627 0.600098 24 1.13738 24 1.8001C24 2.46282 23.4627 3.0001 22.8 3.0001H7.2C6.53728 3.0001 6 2.46277 6 1.8001ZM22.8 7.8001H1.2C0.537281 7.8001 0 8.33743 0 9.0001C0 9.66282 0.537281 10.2001 1.2 10.2001H22.8C23.4627 10.2001 24 9.66282 24 9.0001C24 8.33743 23.4627 7.8001 22.8 7.8001ZM22.8 15.0001H12C11.3373 15.0001 10.8 15.5374 10.8 16.2001C10.8 16.8628 11.3373 17.4001 12 17.4001H22.8C23.4627 17.4001 24 16.8628 24 16.2001C24 15.5374 23.4627 15.0001 22.8 15.0001Z",
                          fill: "white",
                        }),
                      }),
                    }),
                  }),
                  (0, a.jsx)("div", {
                    ref: N,
                    className:
                      "fixed top-0 -right-full z-50 w-full h-[100dvh] bg-darkBlue overflow-auto overscroll-y-none",
                    children: (0, a.jsxs)("div", {
                      className:
                        "relative min-h-[100vh] flex flex-col justify-between bg-darkblue",
                      children: [
                        (0, a.jsx)("div", {
                          className: "xl:w-[291px] absolute top-6 left-4",
                          children: (0, a.jsx)("a", {
                            href: "/",
                            children: A
                              ? (0, a.jsx)(n.default, {
                                  src: g,
                                  alt: "kvants logo",
                                  className:
                                    "w-[120px] lg:w-[160px] lg:h-[49px] object-contain",
                                })
                              : (0, a.jsx)(r.Z, {
                                  className:
                                    "w-[98px] h-6 lg:w-[150px] lg:h-[37px]",
                                }),
                          }),
                        }),
                        (0, a.jsxs)("button", {
                          className:
                            "absolute flex flex-col items-center justify-center w-8 h-8 gap-2 top-5 lg:top-7 right-4",
                          onClick: M,
                          children: [
                            (0, a.jsx)("div", {
                              ref: C,
                              className:
                                "relative h-[2px] bg-white transform-gpu origin-center",
                              style: { width: "32px" },
                            }),
                            (0, a.jsx)("div", {
                              ref: Z,
                              className:
                                "relative h-[2px] bg-white transform-gpu origin-center",
                              style: { width: "32px" },
                            }),
                          ],
                        }),
                        (0, a.jsxs)("div", {
                          className:
                            "container flex flex-col items-center gap-12 px-4 mx-auto pt-28 pb-10",
                          children: [
                            (0, a.jsxs)("div", {
                              className: "flex flex-col lg:flex-row gap-4",
                              children: [
                                (0, a.jsx)("a", {
                                  href: l.buyButton.url,
                                  className: "min-w-[180px]",
                                  children: (0, a.jsxs)("button", {
                                    className:
                                      "w-full text-offWhite font-medium h-12 rounded-full border border-white/10 relative bg-darkBlue overflow-hidden",
                                    children: [
                                      (0, a.jsx)(n.default, {
                                        src: d.Z,
                                        alt: "",
                                        className:
                                          "absolute inset-0 w-full h-full",
                                      }),
                                      (0, a.jsxs)("div", {
                                        className:
                                          "flex items-center justify-center gap-[5px] relative z-[2]",
                                        children: [
                                          (0, a.jsx)(n.default, {
                                            src: o.Z,
                                            alt: "",
                                            className: "w-8 h-8",
                                          }),
                                          l.buyButton.text,
                                        ],
                                      }),
                                    ],
                                  }),
                                }),
                                (0, a.jsx)("a", {
                                  href: l.launchButton.url,
                                  className: "min-w-[180px]",
                                  children: (0, a.jsxs)(c.default, {
                                    className: "w-full",
                                    children: [
                                      (0, a.jsx)(i.Z, {}),
                                      " ",
                                      l.launchButton.text,
                                    ],
                                  }),
                                }),
                              ],
                            }),
                            (0, a.jsxs)("div", {
                              className:
                                "w-full flex flex-col lg:flex-row justify-between",
                              children: [
                                (0, a.jsx)("div", {
                                  className:
                                    "grid grid-cols-1 lg:grid-cols-3 gap-x-8 gap-y-10 mb-10",
                                  children:
                                    null == m
                                      ? void 0
                                      : m.map((e) =>
                                          (0, a.jsxs)(
                                            "div",
                                            {
                                              children: [
                                                (0, a.jsx)("div", {
                                                  className:
                                                    "text-white/40 mb-4",
                                                  children: e.title,
                                                }),
                                                (0, a.jsx)("div", {
                                                  className:
                                                    "flex flex-col gap-3 text-lg",
                                                  children: e.links.map((e) =>
                                                    (0, a.jsx)(
                                                      s.default,
                                                      {
                                                        href: e.url,
                                                        className:
                                                          "hover:text-white/70 transition ease",
                                                        onClick: y,
                                                        children: e.title,
                                                      },
                                                      e.title
                                                    )
                                                  ),
                                                }),
                                              ],
                                            },
                                            e.title
                                          )
                                        ),
                                }),
                                (0, a.jsx)("div", {
                                  className: "flex flex-col gap-3 mb-10",
                                  children:
                                    null == p
                                      ? void 0
                                      : p.map((e) =>
                                          (0, a.jsxs)(
                                            s.default,
                                            {
                                              href: e.url,
                                              className:
                                                "group flex text-lg gap-3 items-center justify-between hover:text-white/70 transition ease",
                                              onClick: y,
                                              children: [
                                                e.platform,
                                                (0, a.jsx)(n.default, {
                                                  src: e.icon.url,
                                                  alt: e.platform,
                                                  width:
                                                    e.icon.dimensions.width,
                                                  height:
                                                    e.icon.dimensions.height,
                                                  className:
                                                    "w-8 h-8 group-hover:scale-110 group-hover:brightness-125 transition-transform duration-300",
                                                }),
                                              ],
                                            },
                                            e.platform
                                          )
                                        ),
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                  }),
                ],
              }),
            ],
          });
        };
    },
    18088: function (e, t, l) {
      var a = l(57437);
      l(2265),
        (t.Z = (e) => {
          let { className: t } = e;
          return (0, a.jsxs)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 150 37",
            fill: "none",
            className: t,
            children: [
              (0, a.jsx)("path", {
                fill: "#fff",
                fillRule: "evenodd",
                d: "M19.186.193a.68.68 0 0 0-.95 0L.197 17.943a.653.653 0 0 0 0 .933l18.04 17.75a.68.68 0 0 0 .95 0l18.04-17.75a.653.653 0 0 0 0-.934L19.186.193Zm0 1.635a.68.68 0 0 0-.95 0L1.859 17.942a.653.653 0 0 0 0 .934L18.237 34.99a.68.68 0 0 0 .95 0l16.378-16.114a.653.653 0 0 0 0-.934L19.186 1.828Z",
                clipRule: "evenodd",
              }),
              (0, a.jsx)("path", {
                fill: "#fff",
                d: "m14.248 32.702 18.99-18.683.83.818L15.08 33.52l-.832-.818ZM10.617 29.129l18.99-18.683.83.817-18.99 18.683-.83-.817ZM6.985 25.556l18.99-18.683.83.817L7.817 26.373l-.83-.817ZM3.353 21.983 22.343 3.3l.83.817L4.185 22.8l-.83-.817ZM50.618 24.246l-.703-4.53L62.56 7h5.726L50.618 24.246ZM47 31.587V7h4.566v24.587H47Zm16.122 0-9.308-12.399 3.232-2.775 11.626 15.174h-5.55ZM74.093 31.587l-7.798-18.51h4.707l5.269 13.839-.913.246 5.55-14.085h4.6l-8.183 18.51h-3.232ZM92.686 31.939a7.212 7.212 0 0 1-4.145-1.265c-1.241-.843-2.236-1.99-2.986-3.442-.749-1.452-1.124-3.103-1.124-4.953s.375-3.5 1.124-4.952c.75-1.452 1.768-2.588 3.056-3.407 1.288-.82 2.74-1.23 4.356-1.23.936 0 1.791.14 2.564.422a6.161 6.161 0 0 1 2.037 1.124 6.562 6.562 0 0 1 1.44 1.686c.398.632.668 1.311.808 2.037l-.948-.246v-4.636h4.355v18.51h-4.39v-4.425l1.018-.176c-.164.632-.468 1.253-.913 1.862a6.922 6.922 0 0 1-1.616 1.58 8.773 8.773 0 0 1-2.142 1.09 7.242 7.242 0 0 1-2.494.42Zm1.194-3.829c1.007 0 1.897-.246 2.67-.738.772-.491 1.37-1.17 1.79-2.037.446-.89.668-1.908.668-3.056 0-1.124-.222-2.119-.667-2.985-.422-.867-1.019-1.546-1.791-2.038-.773-.491-1.663-.737-2.67-.737s-1.897.246-2.67.737c-.749.492-1.334 1.171-1.756 2.038-.421.866-.632 1.861-.632 2.985 0 1.148.21 2.166.632 3.056.422.866 1.007 1.546 1.757 2.037.772.492 1.662.738 2.669.738ZM105.773 31.587v-18.51h4.215l.071 3.793-.808.422c.234-.843.69-1.605 1.37-2.284a7.755 7.755 0 0 1 2.423-1.685 6.953 6.953 0 0 1 2.88-.633c1.405 0 2.576.281 3.513.843.96.562 1.674 1.405 2.142 2.53.492 1.123.738 2.528.738 4.214v11.31h-4.32V20.593c0-.936-.129-1.71-.387-2.318-.257-.632-.655-1.089-1.194-1.37-.538-.304-1.194-.445-1.967-.421-.632 0-1.218.105-1.756.316a3.946 3.946 0 0 0-1.37.843 4.305 4.305 0 0 0-.913 1.23 3.719 3.719 0 0 0-.316 1.545v11.17h-4.321ZM126.721 31.587V8.37h4.32v23.217h-4.32Zm-3.653-14.506v-4.004h12.013v4.004h-12.013ZM142.78 31.939c-1.639 0-3.114-.27-4.426-.808-1.288-.562-2.341-1.358-3.161-2.389l2.81-2.423c.702.796 1.487 1.37 2.353 1.72.867.352 1.78.528 2.74.528.398 0 .749-.047 1.054-.14.328-.095.609-.235.843-.422.234-.188.41-.398.527-.633.14-.257.21-.538.21-.843 0-.562-.21-1.006-.632-1.334-.234-.164-.609-.34-1.124-.527-.492-.188-1.135-.375-1.932-.562-1.264-.328-2.318-.703-3.161-1.124-.843-.445-1.499-.937-1.967-1.476a4.747 4.747 0 0 1-.913-1.51 5.752 5.752 0 0 1-.281-1.826c0-.82.176-1.558.527-2.213a5.686 5.686 0 0 1 1.51-1.756 6.8 6.8 0 0 1 2.213-1.124 8.963 8.963 0 0 1 2.634-.387c.937 0 1.839.117 2.705.351.89.235 1.709.574 2.459 1.02a7.212 7.212 0 0 1 1.967 1.545l-2.389 2.634a8.747 8.747 0 0 0-1.475-1.124 7.57 7.57 0 0 0-1.581-.773c-.538-.21-1.042-.316-1.51-.316-.445 0-.843.047-1.194.14-.352.07-.644.188-.878.352a1.815 1.815 0 0 0-.562.632 1.868 1.868 0 0 0-.176.843c.023.281.094.55.211.808.14.234.328.433.562.597.257.164.644.351 1.159.562.515.21 1.182.41 2.002.597 1.147.305 2.107.644 2.88 1.019.773.374 1.382.808 1.827 1.3.445.42.761.913.948 1.475a5.87 5.87 0 0 1 .281 1.861c0 1.1-.316 2.084-.948 2.95-.609.867-1.452 1.546-2.529 2.038-1.054.492-2.248.738-3.583.738Z",
              }),
            ],
          });
        });
    },
    17238: function (e, t, l) {
      var a = l(57437);
      l(2265),
        (t.Z = (e) => {
          let { className: t } = e;
          return (0, a.jsxs)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: 16,
            height: 16,
            fill: "none",
            className: t,
            children: [
              (0, a.jsxs)("g", {
                fill: "#fff",
                clipPath: "url(#a)",
                children: [
                  (0, a.jsx)("path", {
                    d: "M15.98 1.194A1.244 1.244 0 0 0 14.806.02c-1.282-.07-3.792-.002-6.191 1.239-1.224.633-2.518 1.706-3.55 2.943l-.038.046-2.343.181c-.386.03-.729.232-.942.555L.142 7.4a.853.853 0 0 0-.069.819.853.853 0 0 0 .653.5l1.974.306-.02.115c-.066.393.064.797.348 1.08l2.75 2.75a1.246 1.246 0 0 0 1.08.35l.116-.021.306 1.974a.853.853 0 0 0 .847.726.855.855 0 0 0 .472-.143l2.418-1.598c.322-.213.524-.557.554-.943l.181-2.343.046-.037c1.238-1.033 2.31-2.327 2.944-3.55 1.24-2.4 1.309-4.91 1.239-6.192ZM10.5 13.477l-2.313 1.529-.298-1.924a10.5 10.5 0 0 0 2.866-1.364l-.118 1.526a.305.305 0 0 1-.137.233Zm-4.06-1.168-2.75-2.75a.304.304 0 0 1-.086-.264c.082-.489.209-.954.366-1.392l4.126 4.126a8.096 8.096 0 0 1-1.392.367.304.304 0 0 1-.264-.087ZM2.755 5.363l1.527-.118a10.5 10.5 0 0 0-1.365 2.866L.993 7.813 2.523 5.5a.305.305 0 0 1 .232-.137Zm8.443 4.853a10.747 10.747 0 0 1-2.17 1.419L4.365 6.972c.433-.885.961-1.621 1.419-2.17.955-1.146 2.144-2.134 3.26-2.711C11.247.95 13.567.89 14.754.955a.307.307 0 0 1 .29.29c.065 1.188.004 3.508-1.135 5.71-.578 1.117-1.566 2.305-2.711 3.26Z",
                  }),
                  (0, a.jsx)("path", {
                    d: "M10.96 7.382c.6 0 1.2-.228 1.657-.685a2.328 2.328 0 0 0 .687-1.657 2.346 2.346 0 0 0-4-1.657 2.328 2.328 0 0 0-.688 1.657c0 .626.244 1.214.687 1.657a2.336 2.336 0 0 0 1.657.685Zm-.994-3.337c.274-.274.634-.41.994-.41a1.402 1.402 0 0 1 1.406 1.405 1.408 1.408 0 0 1-2.812 0c0-.376.146-.729.412-.995ZM.478 13.186c.12 0 .24-.046.331-.138l1.53-1.53a.469.469 0 1 0-.662-.663l-1.53 1.53a.469.469 0 0 0 .331.8ZM3.743 12.257a.469.469 0 0 0-.663 0L.137 15.2a.469.469 0 1 0 .663.663l2.942-2.943a.469.469 0 0 0 0-.663ZM4.482 13.66l-1.53 1.53a.469.469 0 0 0 .663.663l1.53-1.53a.469.469 0 0 0-.663-.663Z",
                  }),
                ],
              }),
              (0, a.jsx)("defs", {
                children: (0, a.jsx)("clipPath", {
                  id: "a",
                  children: (0, a.jsx)("path", {
                    fill: "#fff",
                    d: "M0 0h16v16H0z",
                  }),
                }),
              }),
            ],
          });
        });
    },
    57019: function (e, t) {
      t.Z = {
        src: "/_next/static/media/buttonglow.1196ed06.png",
        height: 48,
        width: 138,
        blurDataURL:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAADCAMAAACZFr56AAAAJ1BMVEV+NP98Mf90MvN0MfVaJrp/P/+Zded/MP91R81zRctmOcVqOcagfe7/+tTjAAAADXRSTlNEHVhpnxCrKodxw6zbN1caZwAAAAlwSFlzAAALEwAACxMBAJqcGAAAACJJREFUeJwFwYkBACAMArEDqvXbf14T5tuSNFjnGmhcFSd8BgkAYNZ1EXsAAAAASUVORK5CYII=",
        blurWidth: 8,
        blurHeight: 3,
      };
    },
    17427: function (e, t) {
      t.Z = {
        src: "/_next/static/media/coinsmall.8e1220c2.png",
        height: 92,
        width: 82,
        blurDataURL:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAICAMAAAAC2hU0AAAAVFBMVEVlYnJVVV0zNHEXFC9ZU6eVk9kkJ1xMaXEkHjsVECNCQY1DQoA8RpN5ebY8OoVCPoxuaLx3drotMWglLnI0MEd3eKpAPWRISGAkIEYsKVtcWmlsbHY0Gkd5AAAAFnRSTlP+/rf9KjHXAP34mOs/sM3Pmu34qv3TBSsL2AAAAAlwSFlzAAAhOAAAITgBRZYxYAAAAD5JREFUeJwFwQkCgCAIBMBVQcCjO7T6/z+bgXC/Owuo+uU7o0xV8w0ZeDFW5A8hjAVnsmRPQTtUZyVIizmS/FIdAmed1q8wAAAAAElFTkSuQmCC",
        blurWidth: 7,
        blurHeight: 8,
      };
    },
  },
]);
