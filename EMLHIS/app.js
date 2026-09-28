// contador y aparicion de galeria: IntersectionObserver + rAF, sin libreria
(function () {
  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  document.querySelectorAll(".figs b[data-to]").forEach(function (el) {
    if (reduce) return;
    var target = parseInt(el.dataset.to, 10), pre = el.dataset.pre || "";
    el.textContent = pre + "0";
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (!e.isIntersecting) return;
        io.unobserve(el);
        var t0 = null;
        function step(t) {
          if (t0 === null) t0 = t;
          var p = Math.min(1, (t - t0) / 1100);
          el.textContent = pre + Math.round(target * (1 - Math.pow(1 - p, 3)));
          if (p < 1) requestAnimationFrame(step);
        }
        requestAnimationFrame(step);
      });
    }, { threshold: 0.4 });
    io.observe(el);
  });

  var imgs = document.querySelectorAll(".grid img");
  if (!imgs.length) return;
  var gio = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (!e.isIntersecting) return;
      e.target.classList.add("in");
      gio.unobserve(e.target);
    });
  }, { threshold: 0.15 });
  imgs.forEach(function (img, i) {
    img.style.transitionDelay = (i * 85) + "ms";
    if (reduce) { img.classList.add("in"); return; }
    gio.observe(img);
  });
})();
