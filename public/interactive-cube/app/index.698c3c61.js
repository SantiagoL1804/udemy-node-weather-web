import { S as e, E as o } from "./vendor.63c1c579.js";
((r) => {
  const s = r.querySelectorAll(".swiper"),
    t = [];
  s.forEach((r, c) => {
    const n = new e(r, {
      modules: [o],
      effect: "cube",
      grabCursor: !0,
      allowTouchMove: 0 === c,
      touchEventsTarget: "container",
      cubeEffect: { shadow: c === s.length - 1 },
    });
    t.push(n);
  });
  const c = t[0],
    n = t.filter((e) => e !== c),
    a = 1 / 3;
  c.on("progress", (e, o) => {
    n.forEach((e, r) => {
      const s = Math.floor(o / a) * a,
        t = s + ((o - s) / a) ** (1.5 * (1 + r)) * a;
      e.setProgress(t);
    });
  }),
    c.on("setTransition", (e, o) => {
      n.forEach((e) => {
        e.setTransition(o);
      });
    });
})(document.querySelector(".swiper-ratio-slicer")),
  ((r) => {
    const s = r.querySelectorAll(".swiper"),
      t = [];
    s.forEach((r, c) => {
      const n = new e(r, {
        modules: [o],
        effect: "cube",
        grabCursor: !0,
        allowTouchMove: 0 === c,
        touchEventsTarget: "container",
        cubeEffect: { shadow: c === s.length - 1 },
      });
      t.push(n);
    });
    const c = t[0],
      n = t.filter((e) => e !== c);
    c.on("progress", (e, o) => {
      n.forEach((e, r) => {
        setTimeout(() => {
          e.setProgress(o);
        }, 50 * (r + 1));
      });
    }),
      c.on("setTransition", (e, o) => {
        n.forEach((e, r) => {
          setTimeout(() => {
            e.setTransition(o);
          }, 50 * (r + 1));
        });
      });
  })(document.querySelector(".swiper-delay-slicer"));
