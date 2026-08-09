import { jsxs, jsx } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
function Post1Page() {
  return /* @__PURE__ */ jsxs("div", { style: {
    minHeight: "100vh",
    background: "#070709",
    color: "#edeae2",
    position: "relative"
  }, children: [
    /* @__PURE__ */ jsx("video", { autoPlay: true, muted: true, loop: true, playsInline: true, preload: "none", style: {
      position: "fixed",
      inset: 0,
      width: "100%",
      height: "100%",
      objectFit: "cover",
      mixBlendMode: "normal",
      opacity: 0.55,
      filter: "brightness(0.75)",
      zIndex: 0,
      pointerEvents: "none"
    }, children: /* @__PURE__ */ jsx("source", { src: "/videos/blog.mp4", type: "video/mp4" }) }),
    /* @__PURE__ */ jsx("div", { style: {
      position: "fixed",
      top: "1.4rem",
      right: "1.8rem",
      zIndex: 100
    }, children: /* @__PURE__ */ jsx(Link, { to: "/blog", style: {
      fontFamily: "'Outfit', sans-serif",
      fontSize: "0.65rem",
      fontWeight: 500,
      letterSpacing: "0.2em",
      textTransform: "uppercase",
      color: "#ffffff",
      textDecoration: "none",
      background: "#c86c2e",
      padding: "0.6rem 1.2rem"
    }, children: "← Back" }) }),
    /* @__PURE__ */ jsxs("article", { style: {
      maxWidth: "720px",
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
        color: "#c86c2e",
        marginBottom: "2rem"
      }, children: "Essay · 2025" }),
      /* @__PURE__ */ jsxs("h1", { style: {
        fontFamily: "'Bebas Neue', sans-serif",
        fontSize: "64px",
        fontWeight: 400,
        color: "#edeae2",
        lineHeight: "64px",
        letterSpacing: "0.02em",
        marginBottom: "3rem"
      }, children: [
        "The permission",
        /* @__PURE__ */ jsx("br", {}),
        "you never needed"
      ] }),
      [`There's a particular kind of exhaustion that comes not from doing too much, but from constantly performing for an audience that never asked for the show.`, `We grew up being told, in a thousand different ways, that the goal was to be chosen. By a company. By a recruiter. By an algorithm. By someone with the power to validate that yes, you are enough, you can come in, you have a place here.`, `And so we learned to curate ourselves outward. To build CVs instead of lives. To ask "what do they want?" before "what do I want?" We got very good at adapting — so good, in fact, that many of us forgot what we actually looked like before we started performing.`].map((p, i) => /* @__PURE__ */ jsx("p", { style: {
        fontFamily: "'Outfit', sans-serif",
        fontSize: "18.4px",
        fontWeight: 300,
        lineHeight: "34.96px",
        color: "rgba(237,234,226,0.72)",
        marginBottom: "1.8rem"
      }, children: p }, i)),
      /* @__PURE__ */ jsx("blockquote", { style: {
        borderLeft: "3px solid #c86c2e",
        padding: "1.2rem 0 1.2rem 2rem",
        margin: "3rem 0",
        fontFamily: "'Bebas Neue', sans-serif",
        fontSize: "1.6rem",
        color: "#edeae2",
        lineHeight: 1.3,
        letterSpacing: "0.02em"
      }, children: "The fear underneath all of this has a name: economic insecurity. And it's real." }),
      [`But there's something worth examining in how that fear gets used — not to protect us, but to keep us moving in directions that serve other people's interests more than our own.`, `Our parents genuinely worry. They lived through a time when loyalty to a company meant a pension, when a mortgage meant stability, when following the rules meant security. They're not wrong to want that for us. They just don't realise those rules don't apply anymore. The contract changed while nobody was watching.`, `Nothing is guaranteed. Not the job, not the company, not the market, not the pension, not the housing. Nothing.`, `Which means we have two options. We can keep chasing the illusion of stability — burning out in pursuit of something that keeps moving further away. Or we can learn to build something different: a life that can hold uncertainty without collapsing. One that's oriented inward enough to know what actually matters, and flexible enough to survive everything else.`, `That's not recklessness. That's probably the sanest response to the world we actually live in.`].map((p, i) => /* @__PURE__ */ jsx("p", { style: {
        fontFamily: "'Outfit', sans-serif",
        fontSize: "18.4px",
        fontWeight: 300,
        lineHeight: "34.96px",
        color: "rgba(237,234,226,0.72)",
        marginBottom: "1.8rem"
      }, children: p }, i)),
      /* @__PURE__ */ jsxs("div", { style: {
        margin: "3rem 0"
      }, children: [
        /* @__PURE__ */ jsx("p", { style: {
          fontFamily: "'Outfit', sans-serif",
          fontSize: "0.62rem",
          fontWeight: 600,
          letterSpacing: "0.38em",
          textTransform: "uppercase",
          color: "rgba(237,234,226,0.4)",
          marginBottom: "1rem"
        }, children: "Worth watching" }),
        /* @__PURE__ */ jsx("p", { style: {
          fontFamily: "'Outfit', sans-serif",
          fontSize: "0.75rem",
          fontWeight: 300,
          color: "rgba(237,234,226,0.4)",
          marginBottom: "1rem",
          fontStyle: "italic"
        }, children: "Simon Sinek — How great leaders inspire action" }),
        /* @__PURE__ */ jsx("iframe", { src: "https://www.youtube.com/embed/qp0HIF3SfI4", style: {
          width: "100%",
          aspectRatio: "16/9",
          border: "none"
        }, allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture", allowFullScreen: true })
      ] }),
      /* @__PURE__ */ jsx("p", { style: {
        fontFamily: "'Outfit', sans-serif",
        fontSize: "18.4px",
        fontWeight: 700,
        lineHeight: "34.96px",
        color: "#edeae2",
        marginBottom: "1.8rem"
      }, children: "The question was never whether you'd be chosen. It was always whether you'd choose yourself first." }),
      /* @__PURE__ */ jsxs("div", { style: {
        marginTop: "5rem",
        paddingTop: "3rem",
        borderTop: "1px solid rgba(237,234,226,0.08)",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center"
      }, children: [
        /* @__PURE__ */ jsx(Link, { to: "/blog", style: {
          fontFamily: "'Outfit', sans-serif",
          fontSize: "18.4px",
          fontWeight: 300,
          color: "rgba(237,234,226,0.5)",
          textDecoration: "none"
        }, children: "← All posts" }),
        /* @__PURE__ */ jsx(Link, { to: "/purpose", style: {
          fontFamily: "'Outfit', sans-serif",
          fontSize: "18.4px",
          fontWeight: 300,
          color: "#c86c2e",
          textDecoration: "none"
        }, children: "This is also why I do what I do →" })
      ] })
    ] })
  ] });
}
export {
  Post1Page as component
};
