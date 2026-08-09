import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import { useState } from "react";
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
    /* @__PURE__ */ jsx("a", { href: "/projects", style: {
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
    }, children: "← Back to projects" }),
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
function Commo2Page() {
  const tags = ["Home Optimisation", "Sustainability", "Emotional Wellbeing", "Affiliate Marketing", "Content Strategy", "SEO", "Brand Positioning", "Shared Living"];
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
      opacity: 0.5,
      filter: "brightness(1)",
      zIndex: 0,
      pointerEvents: "none"
    }, children: /* @__PURE__ */ jsx("source", { src: "/videos/projects.mp4", type: "video/mp4" }) }),
    /* @__PURE__ */ jsx(FloatingNav, {}),
    /* @__PURE__ */ jsxs("article", { style: {
      maxWidth: 860,
      margin: "0 auto",
      padding: "10rem 3.5rem 8rem",
      position: "relative",
      zIndex: 2
    }, children: [
      /* @__PURE__ */ jsxs("div", { style: {
        marginBottom: "4rem"
      }, children: [
        /* @__PURE__ */ jsx("p", { style: {
          fontFamily: "'Outfit', sans-serif",
          fontSize: "0.62rem",
          fontWeight: 600,
          letterSpacing: "0.38em",
          textTransform: "uppercase",
          color: "#edeae2",
          marginBottom: "2rem"
        }, children: "Master's Final Project · 2024—2025" }),
        /* @__PURE__ */ jsxs("div", { style: {
          display: "flex",
          alignItems: "center",
          gap: "2rem",
          marginBottom: "2.5rem"
        }, children: [
          /* @__PURE__ */ jsx("img", { src: "/photos/commo2/commo2-main-logo.png", alt: "Commo2", style: {
            height: "80px",
            width: "auto",
            objectFit: "contain"
          } }),
          /* @__PURE__ */ jsx("h1", { style: {
            fontFamily: "'Bebas Neue', sans-serif",
            fontSize: "64px",
            fontWeight: 400,
            color: "#edeae2",
            lineHeight: 1,
            letterSpacing: "0.02em",
            margin: 0
          }, children: "Commo2" })
        ] }),
        /* @__PURE__ */ jsx("p", { style: {
          fontFamily: "'Outfit', sans-serif",
          fontSize: "18.4px",
          fontWeight: 300,
          lineHeight: "34.96px",
          color: "rgba(237,234,226,0.9)"
        }, children: "A content brand for people who share flats and deserve to feel at home." })
      ] }),
      /* @__PURE__ */ jsx("div", { style: {
        display: "flex",
        flexWrap: "wrap",
        gap: "0.6rem",
        marginBottom: "5rem"
      }, children: tags.map((tag, i) => /* @__PURE__ */ jsx("span", { style: {
        fontFamily: "'Outfit', sans-serif",
        fontSize: "0.62rem",
        fontWeight: 500,
        letterSpacing: "0.15em",
        textTransform: "uppercase",
        color: "rgba(237,234,226,0.6)",
        border: "1px solid rgba(237,234,226,0.15)",
        padding: "0.5rem 1rem"
      }, children: tag }, i)) }),
      /* @__PURE__ */ jsxs("div", { style: {
        marginBottom: "5rem",
        paddingBottom: "5rem",
        borderBottom: "1px solid rgba(237,234,226,0.08)"
      }, children: [
        /* @__PURE__ */ jsx("p", { style: {
          fontFamily: "'Outfit', sans-serif",
          fontSize: "0.62rem",
          fontWeight: 600,
          letterSpacing: "0.38em",
          textTransform: "uppercase",
          color: "#edeae2",
          marginBottom: "2rem"
        }, children: "What it is" }),
        /* @__PURE__ */ jsx("p", { style: {
          fontFamily: "'Outfit', sans-serif",
          fontSize: "18.4px",
          fontWeight: 300,
          lineHeight: "34.96px",
          color: "rgba(237,234,226,0.9)",
          marginBottom: "1.6rem"
        }, children: "Commo2 is a digital content brand centred on home optimisation, sustainability and emotional wellbeing — built specifically for young people living in shared rental flats. Part blog, part community, part affiliate strategy." }),
        /* @__PURE__ */ jsx("p", { style: {
          fontFamily: "'Outfit', sans-serif",
          fontSize: "18.4px",
          fontWeight: 300,
          lineHeight: "34.96px",
          color: "rgba(237,234,226,0.9)"
        }, children: "The model is built around affiliate marketing in year one, growing into brand collaborations and original content in year two — with a community philosophy at the centre of everything." })
      ] }),
      /* @__PURE__ */ jsxs("div", { style: {
        marginBottom: "5rem",
        paddingBottom: "5rem",
        borderBottom: "1px solid rgba(237,234,226,0.08)"
      }, children: [
        /* @__PURE__ */ jsx("p", { style: {
          fontFamily: "'Outfit', sans-serif",
          fontSize: "0.62rem",
          fontWeight: 600,
          letterSpacing: "0.38em",
          textTransform: "uppercase",
          color: "#edeae2",
          marginBottom: "2rem"
        }, children: "Why it's necessary" }),
        /* @__PURE__ */ jsx("p", { style: {
          fontFamily: "'Outfit', sans-serif",
          fontSize: "18.4px",
          fontWeight: 300,
          lineHeight: "34.96px",
          color: "rgba(237,234,226,0.9)",
          marginBottom: "1.6rem"
        }, children: "Most home content is aspirational to the point of being useless. It assumes you own the place, have budget to renovate and live alone. The reality for a huge part of a generation is the opposite: shared kitchens, landlords who won't let you drill a single hole, and the constant feeling of adapting to someone else's rules." }),
        /* @__PURE__ */ jsx("p", { style: {
          fontFamily: "'Outfit', sans-serif",
          fontSize: "18.4px",
          fontWeight: 300,
          lineHeight: "34.96px",
          color: "rgba(237,234,226,0.9)"
        }, children: "Nobody was talking about this seriously. Commo2 does." })
      ] }),
      /* @__PURE__ */ jsx("blockquote", { style: {
        borderLeft: "3px solid #c86c2e",
        padding: "1.2rem 0 1.2rem 2rem",
        margin: "0 0 5rem",
        fontFamily: "'Outfit', sans-serif",
        fontSize: "18.4px",
        fontWeight: 300,
        color: "rgba(237,234,226,0.55)",
        lineHeight: "34.96px"
      }, children: "“A life that feels comfortable, even just within your own home, means more peace, fewer distractions and greater happiness.”" }),
      /* @__PURE__ */ jsx("div", { style: {
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: "0.75rem"
      }, children: [{
        num: "3",
        label: "Competitors analysed"
      }, {
        num: "2yr",
        label: "Business roadmap"
      }, {
        num: "8",
        label: "Final score"
      }].map(({
        num,
        label
      }, i) => /* @__PURE__ */ jsxs("div", { style: {
        border: "1px solid rgba(237,234,226,0.1)",
        padding: "2rem 1.5rem"
      }, children: [
        /* @__PURE__ */ jsx("p", { style: {
          fontFamily: "'Bebas Neue', sans-serif",
          fontSize: "3rem",
          color: "#edeae2",
          margin: "0 0 0.3rem",
          lineHeight: 1
        }, children: num }),
        /* @__PURE__ */ jsx("p", { style: {
          fontFamily: "'Outfit', sans-serif",
          fontSize: "0.65rem",
          fontWeight: 400,
          letterSpacing: "0.15em",
          textTransform: "uppercase",
          color: "rgba(237,234,226,0.45)",
          margin: 0
        }, children: label })
      ] }, i)) }),
      /* @__PURE__ */ jsx("div", { style: {
        marginTop: "5rem",
        paddingTop: "3rem",
        borderTop: "1px solid rgba(237,234,226,0.08)"
      }, children: /* @__PURE__ */ jsx(Link, { to: "/projects", style: {
        fontFamily: "'Outfit', sans-serif",
        fontSize: "0.7rem",
        fontWeight: 500,
        letterSpacing: "0.2em",
        textTransform: "uppercase",
        color: "#edeae2",
        textDecoration: "none"
      }, children: "← Back to projects" }) })
    ] })
  ] });
}
export {
  Commo2Page as component
};
