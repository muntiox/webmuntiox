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
function ContactPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    fetch("/contact.html", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      body: new URLSearchParams(formData).toString()
    }).then(() => setSubmitted(true)).catch(() => setSubmitted(true));
  };
  return /* @__PURE__ */ jsxs("div", { style: {
    minHeight: "100vh",
    background: "#070709",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "6rem 2rem",
    position: "relative"
  }, children: [
    /* @__PURE__ */ jsx(FloatingNav, {}),
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
    }, children: /* @__PURE__ */ jsx("source", { src: "/videos/contact.mp4", type: "video/mp4" }) }),
    /* @__PURE__ */ jsxs("div", { style: {
      maxWidth: "600px",
      width: "100%",
      position: "relative",
      zIndex: 2
    }, children: [
      menuOpen && /* @__PURE__ */ jsxs("div", { style: {
        position: "fixed",
        inset: 0,
        background: "rgba(4,2,10,0.97)",
        zIndex: 999,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer"
      }, onClick: () => setMenuOpen(false), children: [
        /* @__PURE__ */ jsx("button", { onClick: () => setMenuOpen(false), style: {
          position: "absolute",
          top: "2rem",
          right: "2.5rem",
          background: "none",
          border: "none",
          color: "rgba(242,238,231,0.5)",
          fontSize: "1.5rem",
          cursor: "pointer"
        }, children: "✕" }),
        /* @__PURE__ */ jsx("div", { style: {
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "0.5rem"
        }, onClick: (e) => e.stopPropagation(), children: [["Purpose", "/purpose"], ["Projects", "/projects"], ["Blog", "/blog"], ["Contact", "/contact"]].map(([label, href], i) => /* @__PURE__ */ jsxs(Link, { to: href, className: "mxo-fullnav-link", style: {
          fontFamily: "'Bebas Neue', sans-serif",
          fontSize: "clamp(3.5rem, 10vw, 9rem)",
          letterSpacing: "0.06em",
          color: "#ffffff",
          textDecoration: "none",
          lineHeight: 1,
          animationDelay: `${i * 0.08}s`
        }, children: [
          /* @__PURE__ */ jsxs("span", { style: {
            fontSize: "0.55em",
            color: "#c86c2e",
            marginRight: "1.5rem"
          }, children: [
            "0",
            i + 1
          ] }),
          label
        ] }, href)) }),
        /* @__PURE__ */ jsx("p", { style: {
          position: "absolute",
          bottom: "2.5rem",
          fontFamily: "'Outfit', sans-serif",
          fontSize: "0.6rem",
          letterSpacing: "0.3em",
          textTransform: "uppercase",
          color: "rgba(242,238,231,0.2)"
        }, children: "Itxaso Muntión — Content Creator & Digital Strategist" })
      ] }),
      /* @__PURE__ */ jsxs("h1", { style: {
        fontFamily: "'Bebas Neue', sans-serif",
        fontSize: "clamp(2.5rem, 5vw, 4rem)",
        fontWeight: 300,
        color: "#ffffff",
        lineHeight: 1.1,
        marginBottom: "1.5rem"
      }, children: [
        "Let's make something",
        /* @__PURE__ */ jsx("br", {}),
        /* @__PURE__ */ jsx("span", { style: {
          color: "#c86c2e"
        }, children: "worth making" })
      ] }),
      /* @__PURE__ */ jsx("p", { style: {
        fontFamily: "'Bebas Neue', sans-serif",
        fontSize: "0.95rem",
        fontWeight: 300,
        color: "rgba(242,238,231,0.9)",
        lineHeight: 1.8,
        marginBottom: "3rem"
      }, children: "If your project seeks to connect authentically and generate real impact, I'd love to hear from you." }),
      submitted ? /* @__PURE__ */ jsxs("div", { className: "success-message", children: [
        /* @__PURE__ */ jsx("div", { className: "success-icon", children: /* @__PURE__ */ jsx("svg", { width: "20", height: "20", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.5", children: /* @__PURE__ */ jsx("polyline", { points: "20 6 9 17 4 12" }) }) }),
        /* @__PURE__ */ jsx("p", { className: "success-title", children: "Message received." }),
        /* @__PURE__ */ jsx("p", { className: "success-text", children: "Thank you for writing. I'll be in touch soon." })
      ] }) : /* @__PURE__ */ jsxs("form", { name: "contact", method: "POST", "data-netlify": "true", "netlify-honeypot": "bot-field", onSubmit: handleSubmit, className: "contact-form", children: [
        /* @__PURE__ */ jsx("input", { type: "hidden", name: "form-name", value: "contact" }),
        /* @__PURE__ */ jsx("p", { hidden: true, children: /* @__PURE__ */ jsxs("label", { children: [
          "No rellenar: ",
          /* @__PURE__ */ jsx("input", { name: "bot-field" })
        ] }) }),
        /* @__PURE__ */ jsxs("div", { className: "form-group", children: [
          /* @__PURE__ */ jsx("label", { htmlFor: "name", className: "form-label", children: "Name" }),
          /* @__PURE__ */ jsx("input", { id: "name", name: "name", type: "text", required: true, placeholder: "Your name", className: "form-input" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "form-group", children: [
          /* @__PURE__ */ jsx("label", { htmlFor: "email", className: "form-label", children: "Email" }),
          /* @__PURE__ */ jsx("input", { id: "email", name: "email", type: "email", required: true, placeholder: "you@email.com", className: "form-input" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "form-group", children: [
          /* @__PURE__ */ jsx("label", { htmlFor: "message", className: "form-label", children: "Message" }),
          /* @__PURE__ */ jsx("textarea", { id: "message", name: "message", required: true, placeholder: "Tell me about your project, your vision, your world...", className: "form-textarea" })
        ] }),
        /* @__PURE__ */ jsx("button", { type: "submit", className: "form-submit", "data-hover": true, children: "Send message" })
      ] })
    ] })
  ] });
}
export {
  ContactPage as component
};
