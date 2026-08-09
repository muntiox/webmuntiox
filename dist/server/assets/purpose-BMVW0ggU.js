import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import { useState, useRef, useEffect } from "react";
function FloatingNav() {
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
    /* @__PURE__ */ jsx("a", { href: "/", style: {
      position: "fixed",
      top: "1.4rem",
      left: "1.8rem",
      zIndex: 100,
      fontFamily: "'Outfit', sans-serif",
      fontSize: "0.65rem",
      fontWeight: 500,
      letterSpacing: "0.2em",
      textTransform: "uppercase",
      color: "rgba(237,234,226,0.6)",
      textDecoration: "none"
    }, children: "← Home" }),
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
        background: "#edeae2"
      } }),
      /* @__PURE__ */ jsx("span", { style: {
        display: "block",
        width: "24px",
        height: "1.5px",
        background: "#edeae2"
      } }),
      /* @__PURE__ */ jsx("span", { style: {
        display: "block",
        width: "24px",
        height: "1.5px",
        background: "#edeae2"
      } })
    ] }),
    open && /* @__PURE__ */ jsxs("div", { style: {
      position: "fixed",
      inset: 0,
      background: "#04020a",
      zIndex: 999,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      cursor: "pointer"
    }, onClick: () => setOpen(false), children: [
      /* @__PURE__ */ jsx("button", { style: {
        position: "absolute",
        top: "2rem",
        right: "2.5rem",
        background: "none",
        border: "none",
        color: "rgba(237,234,226,0.5)",
        fontSize: "1.5rem",
        cursor: "pointer",
        zIndex: 2
      }, onClick: () => setOpen(false), children: "✕" }),
      /* @__PURE__ */ jsx("div", { style: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "0.5rem",
        zIndex: 2
      }, onClick: (e) => e.stopPropagation(), children: links.map((l, i) => /* @__PURE__ */ jsxs("a", { href: l.href, className: "mxo-fullnav-link", style: {
        fontFamily: "'Bebas Neue', sans-serif",
        fontSize: "144px",
        fontWeight: 300,
        lineHeight: "144px",
        color: "rgb(237, 234, 226)",
        textDecoration: "none",
        display: "flex",
        alignItems: "baseline",
        gap: "1.5rem",
        transition: "color 0.15s"
      }, onMouseEnter: (e) => e.currentTarget.style.color = "#c86c2e", onMouseLeave: (e) => e.currentTarget.style.color = "#edeae2", children: [
        /* @__PURE__ */ jsxs("span", { style: {
          fontSize: "0.55em",
          color: "rgba(200,108,46,0.7)",
          letterSpacing: "0.2em"
        }, children: [
          "0",
          i + 1
        ] }),
        l.label
      ] }, l.href)) }),
      /* @__PURE__ */ jsx("p", { style: {
        position: "absolute",
        bottom: "2.5rem",
        fontSize: "0.6rem",
        letterSpacing: "0.3em",
        textTransform: "uppercase",
        color: "rgba(237,234,226,0.2)",
        zIndex: 2
      }, children: "Itxaso Muntión — Content Creator & Digital Strategist" })
    ] })
  ] });
}
function Pull({
  children
}) {
  return /* @__PURE__ */ jsx("p", { style: {
    fontFamily: "'Bebas Neue', sans-serif",
    fontSize: "18.4px",
    color: "#edeae2",
    lineHeight: "34.96px",
    letterSpacing: "0.04em",
    margin: "0 0 1.2rem"
  }, children });
}
function Body({
  children
}) {
  return /* @__PURE__ */ jsx("p", { style: {
    fontFamily: "'Outfit', sans-serif",
    fontSize: "18.4px",
    fontWeight: 300,
    lineHeight: "34.96px",
    color: "rgba(237,234,226,0.9)",
    marginBottom: "1.2rem"
  }, children });
}
function Accent({
  children
}) {
  return /* @__PURE__ */ jsx("p", { style: {
    fontFamily: "'Outfit', sans-serif",
    fontSize: "18.4px",
    fontWeight: 700,
    lineHeight: "34.96px",
    color: "rgba(237,234,226,0.9)",
    marginBottom: "1.2rem"
  }, children });
}
function Divider() {
  return /* @__PURE__ */ jsx("div", { style: {
    width: "40px",
    height: "1px",
    background: "#c86c2e",
    margin: "4rem 0"
  } });
}
function PolaroidCollage({
  slides
}) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  const [active, setActive] = useState(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        setVisible(true);
        obs.disconnect();
      }
    }, {
      threshold: 0.05
    });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  const positions = [{
    top: "0%",
    left: "1%",
    rotate: "-3deg",
    delay: "0s"
  }, {
    top: "2%",
    left: "26%",
    rotate: "2deg",
    delay: "0.07s"
  }, {
    top: "0%",
    left: "51%",
    rotate: "-1.5deg",
    delay: "0.14s"
  }, {
    top: "1%",
    left: "76%",
    rotate: "3deg",
    delay: "0.21s"
  }, {
    top: "52%",
    left: "4%",
    rotate: "2.5deg",
    delay: "0.1s"
  }, {
    top: "50%",
    left: "29%",
    rotate: "-2.5deg",
    delay: "0.17s"
  }, {
    top: "52%",
    left: "54%",
    rotate: "1.5deg",
    delay: "0.24s"
  }, {
    top: "51%",
    left: "78%",
    rotate: "-3deg",
    delay: "0.31s"
  }];
  const prev = () => setActive((v) => v !== null ? (v - 1 + slides.length) % slides.length : null);
  const next = () => setActive((v) => v !== null ? (v + 1) % slides.length : null);
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    active !== null && /* @__PURE__ */ jsx("div", { onClick: () => setActive(null), style: {
      position: "fixed",
      inset: 0,
      zIndex: 500,
      background: "rgba(7,7,9,0.88)",
      backdropFilter: "blur(20px)",
      WebkitBackdropFilter: "blur(20px)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "2rem"
    }, children: /* @__PURE__ */ jsxs("div", { onClick: (e) => e.stopPropagation(), style: {
      display: "flex",
      gap: "4rem",
      alignItems: "center",
      maxWidth: "900px",
      width: "100%"
    }, children: [
      /* @__PURE__ */ jsx("div", { style: {
        flexShrink: 0,
        background: "#ffffff",
        padding: "8px 8px 48px",
        boxShadow: "0 24px 60px rgba(0,0,0,0.6)"
      }, children: /* @__PURE__ */ jsx("img", { src: slides[active].src, alt: "", style: {
        width: "320px",
        height: "400px",
        objectFit: "cover",
        display: "block"
      } }) }),
      /* @__PURE__ */ jsxs("div", { style: {
        flex: 1
      }, children: [
        /* @__PURE__ */ jsx(Body, { children: slides[active].body }),
        slides[active].pull && /* @__PURE__ */ jsx(Pull, { children: slides[active].pull }),
        slides[active].accent && /* @__PURE__ */ jsx(Accent, { children: slides[active].accent }),
        /* @__PURE__ */ jsxs("div", { style: {
          display: "flex",
          gap: "1rem",
          alignItems: "center",
          marginTop: "2.5rem"
        }, children: [
          /* @__PURE__ */ jsx("button", { onClick: prev, style: {
            background: "none",
            border: "1px solid rgba(237,234,226,0.25)",
            color: "rgba(237,234,226,0.6)",
            fontFamily: "'Outfit', sans-serif",
            fontSize: "0.62rem",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            padding: "0.6rem 1.2rem",
            cursor: "pointer",
            transition: "border-color 0.2s, color 0.2s"
          }, children: "← Prev" }),
          /* @__PURE__ */ jsx("button", { onClick: next, style: {
            background: "none",
            border: "1px solid rgba(237,234,226,0.25)",
            color: "rgba(237,234,226,0.6)",
            fontFamily: "'Outfit', sans-serif",
            fontSize: "0.62rem",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            padding: "0.6rem 1.2rem",
            cursor: "pointer",
            transition: "border-color 0.2s, color 0.2s"
          }, children: "Next →" }),
          /* @__PURE__ */ jsx("button", { onClick: () => setActive(null), style: {
            background: "none",
            border: "none",
            color: "rgba(237,234,226,0.35)",
            fontFamily: "'Outfit', sans-serif",
            fontSize: "0.62rem",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            cursor: "pointer",
            marginLeft: "auto"
          }, children: "Close ✕" })
        ] }),
        /* @__PURE__ */ jsxs("p", { style: {
          fontFamily: "'Outfit', sans-serif",
          fontSize: "0.52rem",
          letterSpacing: "0.2em",
          color: "rgba(237,234,226,0.2)",
          marginTop: "1rem"
        }, children: [
          active + 1,
          " / ",
          slides.length
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx("div", { ref, style: {
      position: "relative",
      width: "100%",
      height: "480px",
      marginBottom: "0",
      opacity: visible ? 1 : 0,
      transition: "opacity 1s ease"
    }, children: slides.map((slide, i) => {
      const pos = positions[i % positions.length];
      return /* @__PURE__ */ jsx("div", { onClick: () => setActive(i), style: {
        position: "absolute",
        top: pos.top,
        left: pos.left,
        width: "185px",
        background: "#ffffff",
        padding: "7px 7px 32px",
        boxShadow: "0 6px 20px rgba(0,0,0,0.4)",
        transform: `rotate(${pos.rotate})`,
        transition: `opacity 0.8s ease ${pos.delay}, transform 0.3s ease, box-shadow 0.3s ease`,
        cursor: "pointer",
        opacity: visible ? 1 : 0,
        zIndex: 1
      }, onMouseEnter: (e) => {
        e.currentTarget.style.transform = "rotate(0deg) scale(1.08)";
        e.currentTarget.style.boxShadow = "0 16px 40px rgba(0,0,0,0.6)";
        e.currentTarget.style.zIndex = "10";
      }, onMouseLeave: (e) => {
        e.currentTarget.style.transform = `rotate(${pos.rotate})`;
        e.currentTarget.style.boxShadow = "0 6px 20px rgba(0,0,0,0.4)";
        e.currentTarget.style.zIndex = "1";
      }, children: /* @__PURE__ */ jsx("img", { src: slide.src, alt: "", style: {
        width: "100%",
        height: "130px",
        objectFit: "cover",
        display: "block"
      } }) }, i);
    }) })
  ] });
}
function PurposePage() {
  return /* @__PURE__ */ jsxs("div", { style: {
    minHeight: "100vh",
    background: "#070709",
    color: "#F2EEE7",
    position: "relative"
  }, children: [
    /* @__PURE__ */ jsx("video", { autoPlay: true, muted: true, loop: true, playsInline: true, preload: "none", style: {
      position: "fixed",
      inset: 0,
      width: "100%",
      height: "100%",
      objectFit: "cover",
      mixBlendMode: "normal",
      opacity: 0.5,
      filter: "brightness(1)",
      zIndex: 0,
      pointerEvents: "none"
    }, children: /* @__PURE__ */ jsx("source", { src: "/videos/other-one.mp4", type: "video/mp4" }) }),
    /* @__PURE__ */ jsx(FloatingNav, {}),
    /* @__PURE__ */ jsxs("div", { style: {
      maxWidth: 1e3,
      margin: "0 auto",
      padding: "10rem 3.5rem 8rem",
      position: "relative",
      zIndex: 2
    }, children: [
      /* @__PURE__ */ jsx("p", { style: {
        fontFamily: "'Outfit', sans-serif",
        fontSize: "0.62rem",
        fontWeight: 600,
        letterSpacing: "0.38em",
        textTransform: "uppercase",
        color: "#edeae2",
        marginBottom: "1.5rem"
      }, children: "Purpose" }),
      /* @__PURE__ */ jsx("h1", { style: {
        fontFamily: "'Bebas Neue', sans-serif",
        fontSize: "64px",
        fontWeight: "normal",
        color: "#F2EEE7",
        lineHeight: "64px",
        letterSpacing: "0.02em",
        marginBottom: "4rem",
        maxWidth: 700
      }, children: "When creativity and strategy align with a higher purpose" }),
      /* @__PURE__ */ jsxs("div", { style: {
        maxWidth: 640,
        marginBottom: "8rem"
      }, children: [
        /* @__PURE__ */ jsx(Body, { children: "When digital strategy meets creative content, the result is communication capable of connecting at deeper levels, inspiring and generating real impact." }),
        /* @__PURE__ */ jsx(Body, { children: "A commitment to a more ethical planet is not just a personal value — it is the principle behind every project. My experience was born managing digital communities within an association driven by essential values, where I learned that authentic communication doesn't just reach people, it moves them." }),
        /* @__PURE__ */ jsx(Accent, { children: "Today I work with brands and organisations that share the vision of a more conscious world, using creativity and digital strategy to craft messages that inspire, transform and connect." })
      ] }),
      /* @__PURE__ */ jsx(Divider, {}),
      /* @__PURE__ */ jsx("p", { style: {
        fontFamily: "'Outfit', sans-serif",
        fontSize: "0.62rem",
        fontWeight: 600,
        letterSpacing: "0.38em",
        textTransform: "uppercase",
        color: "#edeae2",
        margin: "4rem 0 6rem"
      }, children: "The person behind it" }),
      /* @__PURE__ */ jsxs("div", { style: {
        borderLeft: "3px solid #C86A2A",
        paddingLeft: "3rem",
        marginBottom: "6rem",
        maxWidth: 640
      }, children: [
        /* @__PURE__ */ jsx(Body, { children: "I've always had an almost irrational urge to build things, projects, ideas, communities. Things that didn't exist yesterday." }),
        /* @__PURE__ */ jsx(Body, { children: "Watching an idea slowly become something real, something that helps, inspires or moves someone, still feels like magic to me, not because I dream of building companies, but because I love building possibilities." })
      ] }),
      /* @__PURE__ */ jsx(PolaroidCollage, { slides: [{
        src: "/photos/who-am-i/little-me.jpg",
        body: "Some of my earliest memories involve headphones far too big for my head. I only remember disappearing into whatever was playing — completely gone. That never really stopped.",
        pull: "The medium changes. The intention never does."
      }, {
        src: "/photos/who-am-i/me.jpg",
        body: "I've often been told I'm too sensitive. For a long time, I believed it was a flaw. Now I think it's the whole point.",
        accent: "Attention is the purest form of love I know. Everything I create begins there."
      }, {
        src: "/photos/who-am-i/guitarra.jpg",
        body: "There's always been this almost irrational urge to build things that don't exist yet. Projects, ideas, communities. And the more I built, the more I started to understand where I actually wanted to go — and for whom. Paying attention changes you. Once you start seeing, you can't just sit with it.",
        accent: "That's why I don't want to work for just anyone. I believe the most ethical path is the only one worth taking."
      }, {
        src: "/photos/who-am-i/animalshelter-me.jpg",
        body: "At some point I realised that compassion stops making sense the moment we start deciding who deserves it.",
        accent: "Suffering doesn't become acceptable just because we learn to look away from it."
      }, {
        src: "/photos/who-am-i/animalshelter-2.jpg",
        body: "The more I understand about what's wrong with the world, the more fiercely I want to protect what's still good in it. That's not contradiction — that's survival.",
        accent: "There's something quietly revolutionary about choosing joy anyway."
      }, {
        src: "/photos/who-am-i/activist-me.jpg",
        body: "People assume activism comes from anger. Mine comes from love — for animals, for people, for this complicated planet we all share.",
        accent: "I don't fight because I hate what is. I fight because I can see what could be."
      }, {
        src: "/photos/who-am-i/joves-me.jpg",
        body: "I've spent years building alongside people who believed, like I do, that another world is actually possible. None of those projects were ever really about content or strategy.",
        accent: "They were always about helping someone understand, feel, or care about something. Helping someone."
      }, {
        src: "/photos/who-am-i/barro-dana.jpg",
        body: "Sometimes the most important thing you can do is show up. Not with a plan. Not with the right words. Just — there.",
        accent: "Presence is its own kind of message."
      }] }),
      /* @__PURE__ */ jsxs("div", { style: {
        maxWidth: 640,
        marginTop: "2rem"
      }, children: [
        /* @__PURE__ */ jsx(Body, { children: "The older I get, the more I learn about the world's injustices, and strangely... the more determined I become to protect my joy." }),
        /* @__PURE__ */ jsx(Body, { children: "I've met people who know everything that's wrong with the world, but somewhere along the way, they forgot how to laugh. I never want that to happen to me." }),
        /* @__PURE__ */ jsx(Accent, { children: "I think there's something quietly revolutionary about choosing to remain joyful. Not despite everything we know, but because of it." }),
        /* @__PURE__ */ jsx(Body, { children: "People often ask me what I do. I edit videos, I write, I design, I tell stories... but those are just tools." }),
        /* @__PURE__ */ jsx(Accent, { children: "What I really do is pay attention. Then I try to transform that attention into something another can feel." }),
        /* @__PURE__ */ jsx(Body, { children: "I don't believe content changes the world. I believe people do. If stories have any power at all, it's because they remind us why it's worth caring in the first place." })
      ] })
    ] })
  ] });
}
export {
  PurposePage as component
};
