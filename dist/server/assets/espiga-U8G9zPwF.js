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
function EspigaPage() {
  const [selected, setSelected] = useState(null);
  const total = 24;
  const photos = [1, 2, 3, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25];
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
    }, children: /* @__PURE__ */ jsx("source", { src: "/videos/projects.mp4", type: "video/mp4" }) }),
    /* @__PURE__ */ jsx(FloatingNav, {}),
    /* @__PURE__ */ jsxs("div", { style: {
      maxWidth: 1200,
      margin: "0 auto",
      padding: "8rem 3.5rem 6rem",
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
          marginBottom: "1rem"
        }, children: "2023 · Freelance" }),
        /* @__PURE__ */ jsxs("div", { style: {
          display: "flex",
          alignItems: "center",
          gap: "1.5rem",
          marginBottom: "1.2rem"
        }, children: [
          /* @__PURE__ */ jsx("img", { src: "/photos/laespiga-logo.png", alt: "Casa l'Espiga", style: {
            height: "80px",
            width: "auto",
            objectFit: "contain"
          } }),
          /* @__PURE__ */ jsx("h1", { style: {
            fontFamily: "'Bebas Neue', sans-serif",
            fontSize: "64px",
            fontWeight: 400,
            color: "#F2EEE7",
            lineHeight: 1,
            letterSpacing: "0.02em",
            margin: 0
          }, children: "Casa l'Espiga" })
        ] }),
        /* @__PURE__ */ jsx("p", { style: {
          fontFamily: "'Outfit', sans-serif",
          fontSize: "18.4px",
          fontWeight: 300,
          lineHeight: "34.96px",
          color: "rgba(237,234,226,0.9)",
          maxWidth: 620
        }, children: "A full weekend in a rural retreat in the Delta del Ebro — just me and a camera. Photo & video content for a place that deserved to be seen." })
      ] }),
      /* @__PURE__ */ jsx("div", { style: {
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
        gap: "0.75rem"
      }, children: photos.map((n) => /* @__PURE__ */ jsx("img", { src: `/photos/espiga/espiga-photo-${n}.jpg`, alt: "", onClick: () => setSelected(n), style: {
        width: "100%",
        aspectRatio: "3/4",
        objectFit: "cover",
        cursor: "pointer",
        display: "block",
        transition: "opacity 0.2s"
      }, onMouseEnter: (e) => e.currentTarget.style.opacity = "0.75", onMouseLeave: (e) => e.currentTarget.style.opacity = "1" }, n)) })
    ] }),
    selected !== null && /* @__PURE__ */ jsxs("div", { onClick: () => setSelected(null), style: {
      position: "fixed",
      inset: 0,
      background: "rgba(0,0,0,0.92)",
      zIndex: 999,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      cursor: "pointer"
    }, children: [
      /* @__PURE__ */ jsx("button", { onClick: (e) => {
        e.stopPropagation();
        setSelected((s) => s > 1 ? s - 1 : total);
      }, style: {
        position: "absolute",
        left: "2rem",
        background: "none",
        border: "none",
        color: "#fff",
        fontSize: "2rem",
        cursor: "pointer",
        opacity: 0.6
      }, children: "‹" }),
      /* @__PURE__ */ jsx("img", { src: `/photos/espiga/espiga-photo-${selected}.jpg`, alt: "", style: {
        maxHeight: "90vh",
        maxWidth: "90vw",
        objectFit: "contain"
      }, onClick: (e) => e.stopPropagation() }),
      /* @__PURE__ */ jsx("button", { onClick: (e) => {
        e.stopPropagation();
        setSelected((s) => s < total ? s + 1 : 1);
      }, style: {
        position: "absolute",
        right: "2rem",
        background: "none",
        border: "none",
        color: "#fff",
        fontSize: "2rem",
        cursor: "pointer",
        opacity: 0.6
      }, children: "›" }),
      /* @__PURE__ */ jsx("button", { onClick: () => setSelected(null), style: {
        position: "absolute",
        top: "1.5rem",
        right: "2rem",
        background: "none",
        border: "none",
        color: "#fff",
        fontSize: "1.5rem",
        cursor: "pointer",
        opacity: 0.6
      }, children: "✕" }),
      /* @__PURE__ */ jsxs("p", { style: {
        position: "absolute",
        bottom: "1.5rem",
        fontFamily: "'Outfit', sans-serif",
        fontSize: "0.65rem",
        letterSpacing: "0.2em",
        color: "rgba(255,255,255,0.4)"
      }, children: [
        selected,
        " / ",
        total
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { style: {
      position: "relative",
      zIndex: 2,
      maxWidth: 1200,
      margin: "0 auto",
      padding: "0 3.5rem 6rem"
    }, children: /* @__PURE__ */ jsxs("div", { style: {
      paddingTop: "3rem",
      borderTop: "1px solid rgba(242,238,231,0.08)",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center"
    }, children: [
      /* @__PURE__ */ jsx(Link, { to: "/projects", style: {
        fontFamily: "'Outfit', sans-serif",
        fontSize: "18.4px",
        fontWeight: 300,
        color: "#edeae2",
        lineHeight: "34.96px",
        textDecoration: "none"
      }, children: "← Back to projects" }),
      /* @__PURE__ */ jsx("a", { href: "https://www.instagram.com/casalespiga/", target: "_blank", rel: "noopener noreferrer", style: {
        fontFamily: "'Outfit', sans-serif",
        fontSize: "18.4px",
        fontWeight: 300,
        color: "#edeae2",
        lineHeight: "34.96px",
        textDecoration: "none"
      }, children: "@casalespiga →" })
    ] }) })
  ] });
}
export {
  EspigaPage as component
};
