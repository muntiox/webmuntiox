import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { useRef, useEffect, useState } from "react";
function CorrectionOnly() {
  const [phase, setPhase] = useState("idle");
  const [wrongText, setWrongText] = useState("");
  const [onlyText, setOnlyText] = useState("");
  const wrong = "for brands";
  const only = "only for brands";
  useEffect(() => {
    const start = () => setTimeout(() => setPhase("typing-wrong"), 600);
    if (document.body.classList.contains("flash-triggered")) {
      start();
      return;
    }
    const obs = new MutationObserver(() => {
      if (document.body.classList.contains("flash-triggered")) {
        obs.disconnect();
        start();
      }
    });
    obs.observe(document.body, {
      attributes: true,
      attributeFilter: ["class"]
    });
    return () => obs.disconnect();
  }, []);
  useEffect(() => {
    if (phase === "typing-wrong") {
      let i = 0;
      const iv = setInterval(() => {
        i++;
        setWrongText(wrong.slice(0, i));
        if (i >= wrong.length) {
          clearInterval(iv);
          setTimeout(() => setPhase("striking"), 500);
        }
      }, 75);
      return () => clearInterval(iv);
    }
    if (phase === "striking") {
      setTimeout(() => setPhase("erasing"), 800);
    }
    if (phase === "erasing") {
      let i = wrong.length;
      const iv = setInterval(() => {
        i--;
        setWrongText(wrong.slice(0, i));
        if (i <= 0) {
          clearInterval(iv);
          setWrongText("");
          setTimeout(() => setPhase("typing-only"), 150);
        }
      }, 40);
      return () => clearInterval(iv);
    }
    if (phase === "typing-only") {
      let i = 0;
      const iv = setInterval(() => {
        i++;
        setOnlyText(only.slice(0, i));
        if (i >= only.length) {
          clearInterval(iv);
          setTimeout(() => setPhase("done"), 200);
        }
      }, 70);
      return () => clearInterval(iv);
    }
  }, [phase]);
  const showCursor = phase !== "idle" && phase !== "done";
  return /* @__PURE__ */ jsx("span", { className: "correction-wrapper", children: phase !== "idle" && /* @__PURE__ */ jsxs(Fragment, { children: [
    phase !== "typing-only" && phase !== "done" && wrongText && /* @__PURE__ */ jsx("span", { className: phase === "striking" ? "correction-strike" : "", children: wrongText }),
    (phase === "typing-only" || phase === "done") && onlyText && /* @__PURE__ */ jsx("span", { children: onlyText }),
    showCursor && /* @__PURE__ */ jsx("span", { className: "correction-cursor" })
  ] }) });
}
function Grain() {
  return /* @__PURE__ */ jsxs("svg", { className: "mxo-grain", "aria-hidden": "true", xmlns: "http://www.w3.org/2000/svg", children: [
    /* @__PURE__ */ jsxs("filter", { id: "grain-f", children: [
      /* @__PURE__ */ jsx("feTurbulence", { type: "fractalNoise", baseFrequency: "0.68", numOctaves: "4", stitchTiles: "stitch" }),
      /* @__PURE__ */ jsx("feColorMatrix", { type: "saturate", values: "0" })
    ] }),
    /* @__PURE__ */ jsx("rect", { width: "100%", height: "100%", filter: "url(#grain-f)" })
  ] });
}
function ElectricCursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  useEffect(() => {
    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;
    let raf;
    let mx = -100, my = -100, rx = -100, ry = -100;
    const lerp = (a, b, t) => a + (b - a) * t;
    const onMove = (e) => {
      mx = e.clientX;
      my = e.clientY;
      dot.style.left = mx + "px";
      dot.style.top = my + "px";
      const t = e.target;
      ring.classList.toggle("mxo-cursor-ring--hover", !!(t.closest("a") || t.closest("button") || t.closest("[data-hover]")));
    };
    const animate = () => {
      rx = lerp(rx, mx, 0.1);
      ry = lerp(ry, my, 0.1);
      ring.style.left = rx + "px";
      ring.style.top = ry + "px";
      raf = requestAnimationFrame(animate);
    };
    document.addEventListener("mousemove", onMove);
    raf = requestAnimationFrame(animate);
    return () => {
      document.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("div", { ref: dotRef, className: "mxo-cursor-dot" }),
    /* @__PURE__ */ jsx("div", { ref: ringRef, className: "mxo-cursor-ring" })
  ] });
}
function Nav() {
  const [open, setOpen] = useState(false);
  const links = [{
    href: "/purpose",
    label: "Purpose"
  }, {
    href: "/projects",
    label: "Projects"
  }, {
    href: "/blog",
    label: "Blog"
  }, {
    href: "/contact",
    label: "Contact"
  }];
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs("button", { onClick: () => setOpen(true), "aria-label": "Open menu", style: {
      position: "fixed",
      top: "1.4rem",
      right: "1.8rem",
      zIndex: 100,
      background: "none",
      border: "none",
      cursor: "pointer",
      display: "flex",
      flexDirection: "column",
      gap: "5px",
      padding: "8px"
    }, children: [
      /* @__PURE__ */ jsx("span", { style: {
        display: "block",
        width: "24px",
        height: "1.5px",
        background: "#F2EEE7"
      } }),
      /* @__PURE__ */ jsx("span", { style: {
        display: "block",
        width: "24px",
        height: "1.5px",
        background: "#F2EEE7"
      } }),
      /* @__PURE__ */ jsx("span", { style: {
        display: "block",
        width: "24px",
        height: "1.5px",
        background: "#F2EEE7"
      } })
    ] }),
    open && /* @__PURE__ */ jsxs("div", { className: "mxo-fullnav", onClick: () => setOpen(false), children: [
      /* @__PURE__ */ jsx("button", { className: "mxo-fullnav-close", onClick: () => setOpen(false), "aria-label": "Close", children: "✕" }),
      /* @__PURE__ */ jsx("div", { className: "mxo-fullnav-links", onClick: (e) => e.stopPropagation(), children: links.map((l, i) => /* @__PURE__ */ jsxs("a", { href: l.href, className: "mxo-fullnav-link", onClick: () => setOpen(false), style: {
        animationDelay: `${i * 0.08}s`
      }, children: [
        /* @__PURE__ */ jsxs("span", { className: "mxo-fullnav-num", children: [
          "0",
          i + 1
        ] }),
        l.label
      ] }, l.href)) }),
      /* @__PURE__ */ jsx("p", { className: "mxo-fullnav-bottom", children: "Itxaso Muntión — Content Creator & Digital Strategist" })
    ] })
  ] });
}
function Hero() {
  const [phase, setPhase] = useState("muntiox");
  useEffect(() => {
    if (phase === "muntiox" || phase === "flash") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [phase]);
  const audioRef = useRef(null);
  useEffect(() => {
    const a = new Audio("/music/photo-sound.mp3");
    a.volume = 0.6;
    a.preload = "auto";
    a.load();
    audioRef.current = a;
  }, []);
  const triggerFlash = () => {
    if (phase !== "muntiox") return;
    const a = audioRef.current;
    if (a) {
      a.currentTime = 0;
      a.play().catch(() => {
      });
    }
    setPhase("flash");
    setTimeout(() => setPhase("content"), 500);
  };
  useEffect(() => {
    if (phase !== "muntiox") return;
    window.addEventListener("click", triggerFlash);
    window.addEventListener("keydown", triggerFlash);
    return () => {
      window.removeEventListener("click", triggerFlash);
      window.removeEventListener("keydown", triggerFlash);
    };
  }, [phase]);
  return /* @__PURE__ */ jsxs("section", { className: "mxo-hero", children: [
    /* @__PURE__ */ jsx("video", { className: "mxo-hero-video", autoPlay: true, muted: true, loop: true, playsInline: true, preload: "none", children: /* @__PURE__ */ jsx("source", { src: "/videos/hero.mp4", type: "video/mp4" }) }),
    /* @__PURE__ */ jsx("video", { className: "mxo-hero-clouds", autoPlay: true, muted: true, loop: true, playsInline: true, preload: "none", children: /* @__PURE__ */ jsx("source", { src: "/videos/index.mp4", type: "video/mp4" }) }),
    /* @__PURE__ */ jsx("div", { className: "mxo-hero-glow" }),
    phase === "content" && /* @__PURE__ */ jsx("div", { style: {} }),
    phase === "flash" && /* @__PURE__ */ jsx("div", { style: {
      position: "fixed",
      inset: 0,
      background: "#ffffff",
      zIndex: 9e3,
      pointerEvents: "none",
      animation: "heroFlash 0.5s ease forwards"
    } }),
    phase === "muntiox" && /* @__PURE__ */ jsxs("div", { style: {
      position: "absolute",
      inset: 0,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      zIndex: 3
    }, children: [
      /* @__PURE__ */ jsx("div", { style: {
        position: "absolute",
        inset: 0,
        background: "radial-gradient(ellipse at center, rgba(200,108,46,0.18) 0%, transparent 70%)",
        animation: "mxoGlow 1.6s ease forwards",
        pointerEvents: "none"
      } }),
      /* @__PURE__ */ jsx("div", { style: {
        animation: "mxoFadeIn 0.8s ease forwards",
        textAlign: "center"
      }, children: /* @__PURE__ */ jsx("p", { className: "mxo-statement", style: {
        margin: 0
      }, children: "MUNTIOX" }) })
    ] }),
    phase === "content" && /* @__PURE__ */ jsxs("div", { className: "mxo-hero-content pre-flash-hide", style: {
      animation: "mxoFadeIn 0.6s ease forwards"
    }, children: [
      /* @__PURE__ */ jsx("p", { style: {
        fontFamily: "'Outfit', sans-serif",
        fontSize: "0.95rem",
        fontWeight: 300,
        letterSpacing: "0.2em",
        color: "rgba(237,234,226,0.45)",
        marginBottom: "1.2rem"
      }, children: "MUNTIOX — Itxaso Muntión" }),
      /* @__PURE__ */ jsxs("p", { className: "mxo-statement", children: [
        "Creative strategy",
        /* @__PURE__ */ jsx("br", {}),
        /* @__PURE__ */ jsx(CorrectionOnly, {}),
        /* @__PURE__ */ jsx("br", {}),
        "that want to make",
        /* @__PURE__ */ jsx("br", {}),
        "a difference"
      ] }),
      /* @__PURE__ */ jsx("p", { className: "mxo-tagline", children: /* @__PURE__ */ jsx("span", { className: "highlighter", children: /* @__PURE__ */ jsx("span", { className: "highlighter__text", children: "Until 'responsible brand' becomes redundant." }) }) }),
      /* @__PURE__ */ jsxs("div", { style: {
        display: "flex",
        gap: "1rem",
        marginTop: "2.5rem",
        flexWrap: "wrap"
      }, children: [
        /* @__PURE__ */ jsx("a", { href: "/projects", style: {
          fontFamily: "'Outfit', sans-serif",
          fontSize: "0.7rem",
          fontWeight: 500,
          letterSpacing: "0.25em",
          textTransform: "uppercase",
          color: "#F2EEE7",
          background: "#C86A2A",
          padding: "1rem 2.5rem",
          textDecoration: "none"
        }, children: "Projects" }),
        /* @__PURE__ */ jsx("a", { href: "/contact", style: {
          fontFamily: "'Outfit', sans-serif",
          fontSize: "0.7rem",
          fontWeight: 500,
          letterSpacing: "0.25em",
          textTransform: "uppercase",
          color: "#ffffff",
          background: "#c86c2e",
          padding: "1rem 2.5rem",
          textDecoration: "none"
        }, children: "Let's talk" })
      ] })
    ] }),
    /* @__PURE__ */ jsx("style", { children: `
        @keyframes heroFlash { 0%{opacity:0} 20%{opacity:1} 100%{opacity:0} }
        @keyframes hintPulse { 0%,100%{opacity:0.4} 50%{opacity:0.15} }
        @keyframes mxoFadeIn { from{opacity:0} to{opacity:1} }
        @keyframes mxoGlow {
          0%   { opacity: 0; transform: scale(0.8); }
          100% { opacity: 1; transform: scale(1.4); }
        }
      ` })
  ] });
}
function Reveal({
  children,
  delay = 0
}) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setVisible(true);
        obs.disconnect();
      }
    }, {
      threshold: 0.15
    });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return /* @__PURE__ */ jsx("div", { ref, style: {
    opacity: visible ? 1 : 0,
    transform: visible ? "translateY(0)" : "translateY(40px)",
    transition: `opacity 0.9s ease ${delay}s, transform 0.9s ease ${delay}s`
  }, children });
}
function Portfolio() {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(ElectricCursor, {}),
    /* @__PURE__ */ jsx(Grain, {}),
    /* @__PURE__ */ jsx(Nav, {}),
    /* @__PURE__ */ jsxs("main", { children: [
      /* @__PURE__ */ jsx(Hero, {}),
      /* @__PURE__ */ jsx("div", { style: {
        position: "relative",
        zIndex: 2,
        borderTop: "1px solid rgba(242,238,231,0.08)",
        borderBottom: "1px solid rgba(242,238,231,0.08)",
        overflow: "hidden",
        padding: "1rem 0"
      }, children: /* @__PURE__ */ jsx("div", { style: {
        display: "flex",
        width: "max-content",
        animation: "ticker 18s linear infinite"
      }, children: Array.from({
        length: 6
      }).map((_, i) => /* @__PURE__ */ jsx("span", { style: {
        fontFamily: "'Outfit', sans-serif",
        fontSize: "0.62rem",
        fontWeight: 600,
        letterSpacing: "0.38em",
        textTransform: "uppercase",
        color: "rgba(242,238,231,0.35)",
        padding: "0 4rem",
        whiteSpace: "nowrap"
      }, children: "Open to what's next" }, i)) }) }),
      /* @__PURE__ */ jsx(Reveal, { children: /* @__PURE__ */ jsxs("div", { className: "mxo-manifesto pre-flash-hide", children: [
        /* @__PURE__ */ jsxs("h2", { className: "mxo-manifesto-title", children: [
          "This is a Portfolio...",
          /* @__PURE__ */ jsx("br", {}),
          "but I'm not looking to be chosen"
        ] }),
        /* @__PURE__ */ jsx("p", { style: {
          fontFamily: "'Outfit', sans-serif",
          fontSize: "18.4px",
          fontWeight: 300,
          lineHeight: "34.96px",
          color: "rgba(237,234,226,0.9)"
        }, children: "The main purpose of this website is simple: to showcase my work and convince people to choose me. But I also want to choose my next job. Does that sound unusual?" }),
        /* @__PURE__ */ jsx("p", { className: "mxo-manifesto-body", children: "I don't believe in working with everyone. I believe in working with the right people. The projects we choose become part of who we are. They shape our perspective, influence our decisions, and define the impact we leave behind." }),
        /* @__PURE__ */ jsx("p", { className: "mxo-manifesto-body", children: "That's why I choose to collaborate with brands and organisations whose values align with my own, or with those that genuinely want to make a more positive impact. Not because they're perfect, but because meaningful work starts with the willingness to grow." }),
        /* @__PURE__ */ jsx("p", { className: "mxo-manifesto-body", children: "Every project is an opportunity to leave the world a little better than we found it. That's the kind of work I want to be part of." }),
        /* @__PURE__ */ jsx("p", { style: {
          fontFamily: "'Outfit', sans-serif",
          fontSize: "18.4px",
          fontWeight: 300,
          lineHeight: "34.96px",
          color: "#edeae2"
        }, children: "And that's why I want to choose you, too." })
      ] }) }),
      /* @__PURE__ */ jsx(Reveal, { children: /* @__PURE__ */ jsxs("div", { className: "mxo-skills pre-flash-hide", children: [
        /* @__PURE__ */ jsx("p", { className: "mxo-eyebrow", children: "What I do" }),
        /* @__PURE__ */ jsxs("div", { style: {
          display: "flex",
          alignItems: "stretch",
          gap: "1.5rem",
          marginBottom: "3rem",
          flexWrap: "wrap"
        }, children: [
          /* @__PURE__ */ jsx("span", { style: {
            fontFamily: "'Bebas Neue', sans-serif",
            fontSize: "clamp(3.5rem, 8vw, 6rem)",
            fontWeight: 400,
            color: "#edeae2",
            lineHeight: 0.85,
            letterSpacing: "0.02em"
          }, children: "6+" }),
          /* @__PURE__ */ jsxs("span", { style: {
            fontFamily: "'Bebas Neue', sans-serif",
            fontSize: "clamp(1.7rem, 3.4vw, 2.7rem)",
            fontWeight: 400,
            color: "#edeae2",
            lineHeight: 0.92,
            letterSpacing: "0.03em",
            display: "block"
          }, children: [
            "years across audiovisual content",
            /* @__PURE__ */ jsx("br", {}),
            "& digital strategy"
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "mxo-skills-groups", children: [
          /* @__PURE__ */ jsx("div", { className: "mxo-skills-group", children: ["Content Strategy", "Brand Identity", "Digital Communities", "Social Campaigns"].map((s) => /* @__PURE__ */ jsx("span", { className: "mxo-skill-tag", children: s }, s)) }),
          /* @__PURE__ */ jsx("div", { className: "mxo-skills-group", children: ["Creative Direction", "Storytelling", "Photo & Video Content", "Content Creation"].map((s) => /* @__PURE__ */ jsx("span", { className: "mxo-skill-tag", children: s }, s)) })
        ] })
      ] }) }),
      /* @__PURE__ */ jsx(Reveal, { children: /* @__PURE__ */ jsxs("div", { className: "mxo-featured pre-flash-hide", children: [
        /* @__PURE__ */ jsx("p", { className: "mxo-eyebrow", children: "Featured" }),
        /* @__PURE__ */ jsxs("div", { className: "mxo-featured-grid", children: [
          /* @__PURE__ */ jsxs("a", { href: "/work/rccoon", className: "mxo-featured-item", children: [
            /* @__PURE__ */ jsx("img", { src: "/photos/rccoon-logo.png", alt: "RCCOON", style: {
              width: "80px",
              height: "80px",
              objectFit: "contain",
              display: "block",
              marginBottom: "1.2rem"
            } }),
            /* @__PURE__ */ jsx("h3", { className: "mxo-featured-title", children: "RCCOON" }),
            /* @__PURE__ */ jsx("p", { className: "mxo-featured-sub", children: "Citizen Action · Digital Strategy · Community · 2020—2026" }),
            /* @__PURE__ */ jsx("span", { className: "mxo-featured-cta", children: "Come snoop around →" })
          ] }),
          /* @__PURE__ */ jsxs("a", { href: "/work/commo2", onClick: (e) => {
            e.preventDefault();
            window.location.href = "/work/commo2";
          }, className: "mxo-featured-item", children: [
            /* @__PURE__ */ jsx("img", { src: "/photos/commo2-logo.png", alt: "Commo2", style: {
              width: "80px",
              height: "80px",
              objectFit: "contain",
              display: "block",
              marginBottom: "1.2rem"
            } }),
            /* @__PURE__ */ jsx("h3", { className: "mxo-featured-title", children: "Commo2" }),
            /* @__PURE__ */ jsx("p", { className: "mxo-featured-sub", children: "Strategy · Branding · Digital Ecosystem · 2024—2025" }),
            /* @__PURE__ */ jsx("span", { className: "mxo-featured-cta", children: "Move in →" })
          ] })
        ] })
      ] }) })
    ] }),
    /* @__PURE__ */ jsx("footer", { className: "mxo-footer pre-flash-hide", children: /* @__PURE__ */ jsxs("p", { className: "mxo-footer-copy", children: [
      "© ",
      (/* @__PURE__ */ new Date()).getFullYear(),
      " MUNTIOX — Itxaso Muntión"
    ] }) })
  ] });
}
export {
  Portfolio as component
};
