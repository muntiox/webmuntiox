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
function ProjectsPage() {
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
    }, children: /* @__PURE__ */ jsx("source", { src: "/videos/work.mp4", type: "video/mp4" }) }),
    /* @__PURE__ */ jsx(FloatingNav, {}),
    /* @__PURE__ */ jsxs("div", { style: {
      maxWidth: 980,
      margin: "0 auto",
      padding: "10rem 3.5rem 6rem",
      position: "relative",
      zIndex: 2
    }, children: [
      /* @__PURE__ */ jsxs("div", { style: {
        marginBottom: "5rem"
      }, children: [
        /* @__PURE__ */ jsx("p", { style: {
          fontFamily: "'Outfit', sans-serif",
          fontSize: "0.62rem",
          fontWeight: 600,
          letterSpacing: "0.38em",
          textTransform: "uppercase",
          color: "#edeae2",
          marginBottom: "2rem"
        }, children: "Projects" }),
        /* @__PURE__ */ jsx("h1", { style: {
          fontFamily: "'Bebas Neue', sans-serif",
          fontSize: "64px",
          fontWeight: 400,
          color: "#F2EEE7",
          lineHeight: 1,
          letterSpacing: "0.02em",
          marginBottom: "1.2rem"
        }, children: "Selected Work" }),
        /* @__PURE__ */ jsx("p", { style: {
          fontFamily: "'Outfit', sans-serif",
          fontSize: "18.4px",
          fontWeight: 300,
          lineHeight: "34.96px",
          color: "rgba(237,234,226,0.9)",
          marginBottom: "0.5rem"
        }, children: "This is who I am and where I come from." })
      ] }),
      /* @__PURE__ */ jsxs("div", { style: {
        display: "flex",
        flexDirection: "column"
      }, children: [
        /* @__PURE__ */ jsxs("div", { style: {
          textDecoration: "none",
          color: "inherit",
          display: "block",
          padding: "3.5rem 0",
          borderTop: "1px solid rgba(242,238,231,0.1)"
        }, children: [
          /* @__PURE__ */ jsxs("div", { style: {
            display: "flex",
            alignItems: "center",
            gap: "1.5rem",
            marginBottom: "1rem"
          }, children: [
            /* @__PURE__ */ jsx("span", { style: {
              fontFamily: "'Outfit', sans-serif",
              fontSize: "0.62rem",
              letterSpacing: "0.15em",
              color: "rgba(242,238,231,0.35)",
              textTransform: "uppercase"
            }, children: "2020 — 2026" }),
            /* @__PURE__ */ jsx("span", { style: {
              fontFamily: "'Outfit', sans-serif",
              fontSize: "0.55rem",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "#edeae2",
              border: "1px solid rgba(237,234,226,0.35)",
              padding: "0.15rem 0.5rem"
            }, children: "Non-profit" })
          ] }),
          /* @__PURE__ */ jsxs("div", { style: {
            display: "flex",
            alignItems: "center",
            gap: "1rem",
            marginBottom: "0.6rem"
          }, children: [
            /* @__PURE__ */ jsx("img", { src: "/photos/rccoon-logo.png", alt: "RCCOON", style: {
              height: "50px",
              width: "auto",
              objectFit: "contain"
            } }),
            /* @__PURE__ */ jsx("h3", { style: {
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: "40px",
              fontWeight: 300,
              lineHeight: "44px",
              color: "#F2EEE7",
              margin: 0
            }, children: "RCCOON" })
          ] }),
          /* @__PURE__ */ jsx("p", { style: {
            fontFamily: "'Outfit', sans-serif",
            fontSize: "18.4px",
            fontWeight: 300,
            color: "rgba(237,234,226,0.9)",
            lineHeight: "34.96px",
            marginBottom: "1.2rem"
          }, children: "Citizen Action · Digital Strategy · Community" }),
          /* @__PURE__ */ jsx("p", { style: {
            fontFamily: "'Outfit', sans-serif",
            fontSize: "18.4px",
            fontWeight: 300,
            color: "rgba(237,234,226,0.9)",
            lineHeight: "34.96px",
            maxWidth: 680,
            marginBottom: "1rem"
          }, children: "A grassroots movement turning awareness into action — social, environmental and animal justice. Brand identity, content, editorial planning, volunteer coordination and campaign visibility from the ground up." }),
          /* @__PURE__ */ jsx("p", { style: {
            fontFamily: "'Outfit', sans-serif",
            fontStyle: "italic",
            fontSize: "18.4px",
            fontWeight: 300,
            color: "rgba(237,234,226,0.9)",
            lineHeight: "34.96px",
            marginBottom: "1.5rem"
          }, children: '"Turn empathy into responsibility, and responsibility into action."' }),
          /* @__PURE__ */ jsx(Link, { to: "/work/rccoon", style: {
            fontFamily: "'Outfit', sans-serif",
            fontSize: "18.4px",
            fontWeight: 700,
            color: "#edeae2",
            textDecoration: "none"
          }, children: "Come snoop around →" })
        ] }),
        /* @__PURE__ */ jsxs("div", { style: {
          padding: "3.5rem 0",
          borderTop: "1px solid rgba(242,238,231,0.1)"
        }, children: [
          /* @__PURE__ */ jsxs("div", { style: {
            display: "flex",
            alignItems: "center",
            gap: "1.5rem",
            marginBottom: "1rem"
          }, children: [
            /* @__PURE__ */ jsx("span", { style: {
              fontFamily: "'Outfit', sans-serif",
              fontSize: "0.62rem",
              letterSpacing: "0.15em",
              color: "rgba(242,238,231,0.35)",
              textTransform: "uppercase"
            }, children: "May 2021 — Jan 2022" }),
            /* @__PURE__ */ jsx("span", { style: {
              fontFamily: "'Outfit', sans-serif",
              fontSize: "0.55rem",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "#edeae2",
              border: "1px solid rgba(237,234,226,0.35)",
              padding: "0.15rem 0.5rem"
            }, children: "Freelance" })
          ] }),
          /* @__PURE__ */ jsxs("div", { style: {
            display: "flex",
            alignItems: "center",
            gap: "1rem",
            marginBottom: "0.6rem"
          }, children: [
            /* @__PURE__ */ jsx("img", { src: "/photos/sopelazabalik-logo.jpg", alt: "@sopelazabalik", style: {
              height: "50px",
              width: "auto",
              objectFit: "contain"
            } }),
            /* @__PURE__ */ jsx("h3", { style: {
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: "40px",
              fontWeight: 300,
              lineHeight: "44px",
              color: "#F2EEE7",
              margin: 0
            }, children: "@sopelazabalik" })
          ] }),
          /* @__PURE__ */ jsx("p", { style: {
            fontFamily: "'Outfit', sans-serif",
            fontSize: "18.4px",
            fontWeight: 300,
            color: "rgba(237,234,226,0.9)",
            lineHeight: "34.96px",
            marginBottom: "1rem"
          }, children: "Community Manager · Creative Content · Local Promotion" }),
          /* @__PURE__ */ jsx("p", { style: {
            fontFamily: "'Outfit', sans-serif",
            fontSize: "18.4px",
            fontWeight: 300,
            color: "rgba(237,234,226,0.9)",
            lineHeight: "34.96px",
            maxWidth: 680,
            marginBottom: "1rem"
          }, children: "A community account for Sopelana — a small town in the Basque Country. The idea was to give the place a bit of life online: promoting local businesses in a creative way, dropping hints, building curiosity around what was already there but nobody was talking about." }),
          /* @__PURE__ */ jsx("p", { style: {
            fontFamily: "'Outfit', sans-serif",
            fontSize: "18.4px",
            fontWeight: 300,
            color: "rgba(237,234,226,0.9)",
            lineHeight: "34.96px",
            maxWidth: 680
          }, children: "A local account that someone trusted me with. I managed it for eight months, learned what it means to build an audience from zero, and left it in better shape than I found it." }),
          /* @__PURE__ */ jsx("a", { href: "https://www.instagram.com/sopelazabalik/", target: "_blank", rel: "noopener noreferrer", style: {
            fontFamily: "'Outfit', sans-serif",
            fontSize: "18.4px",
            fontWeight: 700,
            color: "#edeae2",
            lineHeight: "34.96px",
            textDecoration: "none",
            display: "inline-block",
            marginTop: "1rem"
          }, children: "@sopelazabalik →" })
        ] }),
        /* @__PURE__ */ jsxs("div", { style: {
          padding: "3.5rem 0",
          borderTop: "1px solid rgba(242,238,231,0.1)"
        }, children: [
          /* @__PURE__ */ jsxs("div", { style: {
            display: "flex",
            alignItems: "center",
            gap: "1.5rem",
            marginBottom: "1rem"
          }, children: [
            /* @__PURE__ */ jsx("span", { style: {
              fontFamily: "'Outfit', sans-serif",
              fontSize: "0.62rem",
              letterSpacing: "0.15em",
              color: "rgba(242,238,231,0.35)",
              textTransform: "uppercase"
            }, children: "2023" }),
            /* @__PURE__ */ jsx("span", { style: {
              fontFamily: "'Outfit', sans-serif",
              fontSize: "0.55rem",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "#edeae2",
              border: "1px solid rgba(237,234,226,0.35)",
              padding: "0.15rem 0.5rem"
            }, children: "Freelance" })
          ] }),
          /* @__PURE__ */ jsxs("div", { style: {
            display: "flex",
            alignItems: "center",
            gap: "1rem",
            marginBottom: "0.6rem"
          }, children: [
            /* @__PURE__ */ jsx("img", { src: "/photos/laespiga-logo.png", alt: "Casa l'Espiga", style: {
              height: "50px",
              width: "auto",
              objectFit: "contain"
            } }),
            /* @__PURE__ */ jsx("h3", { style: {
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: "40px",
              fontWeight: 300,
              lineHeight: "44px",
              color: "#F2EEE7",
              margin: 0
            }, children: "Casa l'Espiga" })
          ] }),
          /* @__PURE__ */ jsx("p", { style: {
            fontFamily: "'Outfit', sans-serif",
            fontSize: "18.4px",
            fontWeight: 300,
            color: "rgba(237,234,226,0.9)",
            lineHeight: "34.96px",
            marginBottom: "1rem"
          }, children: "Photo & Video Content · Rural Tourism · Delta del Ebro" }),
          /* @__PURE__ */ jsx("p", { style: {
            fontFamily: "'Outfit', sans-serif",
            fontSize: "18.4px",
            fontWeight: 300,
            color: "rgba(237,234,226,0.9)",
            lineHeight: "34.96px",
            maxWidth: 680,
            marginBottom: "1rem"
          }, children: "They gave me the house for a whole weekend — just me, a camera, and a rural retreat in the Delta del Ebro. My first job like this. I shot photos and videos across two days, and I loved every second of it. It confirmed something I already suspected: travelling to work is my thing." }),
          /* @__PURE__ */ jsx(Link, { to: "/work/espiga", style: {
            fontFamily: "'Outfit', sans-serif",
            fontSize: "18.4px",
            fontWeight: 700,
            color: "#edeae2",
            lineHeight: "34.96px",
            textDecoration: "none",
            display: "inline-block",
            marginTop: "1.5rem"
          }, children: "Check in(side the project) →" })
        ] }),
        /* @__PURE__ */ jsxs("div", { style: {
          padding: "3.5rem 0",
          borderTop: "1px solid rgba(242,238,231,0.1)"
        }, children: [
          /* @__PURE__ */ jsxs("div", { style: {
            display: "flex",
            alignItems: "center",
            gap: "1.5rem",
            marginBottom: "1rem"
          }, children: [
            /* @__PURE__ */ jsx("span", { style: {
              fontFamily: "'Outfit', sans-serif",
              fontSize: "0.62rem",
              letterSpacing: "0.15em",
              color: "rgba(242,238,231,0.35)",
              textTransform: "uppercase"
            }, children: "2024 — 2025" }),
            /* @__PURE__ */ jsx("span", { style: {
              fontFamily: "'Outfit', sans-serif",
              fontSize: "0.55rem",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "#edeae2",
              border: "1px solid rgba(237,234,226,0.35)",
              padding: "0.15rem 0.5rem"
            }, children: "Academic" })
          ] }),
          /* @__PURE__ */ jsxs("div", { style: {
            display: "flex",
            alignItems: "center",
            gap: "1rem",
            marginBottom: "0.6rem"
          }, children: [
            /* @__PURE__ */ jsx("img", { src: "/photos/commo2-logo.png", alt: "Commo2", style: {
              height: "50px",
              width: "auto",
              objectFit: "contain"
            } }),
            /* @__PURE__ */ jsx("h3", { style: {
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: "40px",
              fontWeight: 300,
              lineHeight: "44px",
              color: "#F2EEE7",
              margin: 0
            }, children: "Commo2" })
          ] }),
          /* @__PURE__ */ jsx("p", { style: {
            fontFamily: "'Outfit', sans-serif",
            fontSize: "18.4px",
            fontWeight: 300,
            color: "rgba(237,234,226,0.9)",
            lineHeight: "34.96px",
            marginBottom: "1.2rem"
          }, children: "Strategy · Branding · Digital Ecosystem" }),
          /* @__PURE__ */ jsx("p", { style: {
            fontFamily: "'Outfit', sans-serif",
            fontSize: "18.4px",
            fontWeight: 300,
            color: "rgba(237,234,226,0.9)",
            lineHeight: "34.96px",
            maxWidth: 680,
            marginBottom: "1rem"
          }, children: "A full brand concept for an ethical home label built around sustainability, emotional wellbeing and affiliate-driven content — making shared living affordable, conscious, and feel like home." }),
          /* @__PURE__ */ jsx("p", { style: {
            fontFamily: "'Outfit', sans-serif",
            fontStyle: "italic",
            fontSize: "18.4px",
            fontWeight: 300,
            color: "rgba(237,234,226,0.9)",
            lineHeight: "34.96px",
            marginBottom: "1.5rem"
          }, children: '"Conscious living, made accessible."' }),
          /* @__PURE__ */ jsx("span", { style: {
            fontFamily: "'Outfit', sans-serif",
            fontSize: "18.4px",
            fontWeight: 300,
            color: "rgba(237,234,226,0.9)",
            display: "block",
            marginBottom: "1rem"
          }, children: "Master's Final Project · 2025" }),
          /* @__PURE__ */ jsx("a", { href: "/work/commo2", style: {
            fontFamily: "'Outfit', sans-serif",
            fontSize: "18.4px",
            fontWeight: 700,
            color: "#edeae2",
            textDecoration: "none"
          }, children: "Move in →" })
        ] }),
        /* @__PURE__ */ jsxs("div", { style: {
          padding: "3.5rem 0",
          borderTop: "1px solid rgba(242,238,231,0.1)"
        }, children: [
          /* @__PURE__ */ jsxs("div", { style: {
            display: "flex",
            alignItems: "center",
            gap: "1.5rem",
            marginBottom: "1rem"
          }, children: [
            /* @__PURE__ */ jsx("span", { style: {
              fontFamily: "'Outfit', sans-serif",
              fontSize: "0.62rem",
              letterSpacing: "0.15em",
              color: "rgba(242,238,231,0.35)",
              textTransform: "uppercase"
            }, children: "Dec 2025 — Jun 2026" }),
            /* @__PURE__ */ jsx("span", { style: {
              fontFamily: "'Outfit', sans-serif",
              fontSize: "0.55rem",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "#edeae2",
              border: "1px solid rgba(237,234,226,0.35)",
              padding: "0.15rem 0.5rem"
            }, children: "Content & Production" })
          ] }),
          /* @__PURE__ */ jsxs("div", { style: {
            display: "flex",
            alignItems: "center",
            gap: "1rem",
            marginBottom: "0.6rem"
          }, children: [
            /* @__PURE__ */ jsx("img", { src: "/photos/open-logo.png", alt: "Club Open Minded", style: {
              height: "40px",
              width: "auto",
              objectFit: "contain"
            } }),
            /* @__PURE__ */ jsx("h3", { style: {
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: "40px",
              fontWeight: 300,
              lineHeight: "44px",
              color: "#F2EEE7",
              margin: 0
            }, children: "Club Open Minded" })
          ] }),
          /* @__PURE__ */ jsx("p", { style: {
            fontFamily: "'Outfit', sans-serif",
            fontSize: "18.4px",
            fontWeight: 300,
            color: "rgba(237,234,226,0.9)",
            lineHeight: "34.96px",
            marginBottom: "0.5rem"
          }, children: "Content Director" }),
          /* @__PURE__ */ jsx("p", { style: {
            fontFamily: "'Outfit', sans-serif",
            fontSize: "18.4px",
            fontWeight: 300,
            color: "rgba(237,234,226,0.9)",
            lineHeight: "34.96px",
            maxWidth: 680,
            marginBottom: "1rem"
          }, children: "Podcast editing, social media content and full ownership of the venue's visual screens — deciding what played, when and how. At the same time, responsible for developing entertainment ideas and programming concepts for the space." }),
          /* @__PURE__ */ jsx("p", { style: {
            fontFamily: "'Outfit', sans-serif",
            fontSize: "18.4px",
            fontWeight: 300,
            color: "rgba(237,234,226,0.9)",
            lineHeight: "34.96px",
            maxWidth: 680
          }, children: "A place where I pushed my editing skills further and learned to think about content not just for screens, but for rooms full of people." })
        ] }),
        /* @__PURE__ */ jsxs("div", { style: {
          padding: "3.5rem 0",
          borderTop: "1px solid rgba(237,234,226,0.1)"
        }, children: [
          /* @__PURE__ */ jsxs("div", { style: {
            display: "flex",
            gap: "1rem",
            marginBottom: "0.8rem",
            flexWrap: "wrap"
          }, children: [
            /* @__PURE__ */ jsx("span", { style: {
              fontFamily: "'Outfit', sans-serif",
              fontSize: "0.62rem",
              letterSpacing: "0.15em",
              color: "rgba(237,234,226,0.35)",
              textTransform: "uppercase"
            }, children: "2026" }),
            /* @__PURE__ */ jsx("span", { style: {
              fontFamily: "'Outfit', sans-serif",
              fontSize: "0.55rem",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "#edeae2",
              border: "1px solid rgba(237,234,226,0.35)",
              padding: "0.15rem 0.5rem"
            }, children: "Video & Editing" })
          ] }),
          /* @__PURE__ */ jsxs("div", { style: {
            display: "flex",
            alignItems: "center",
            gap: "1rem",
            marginBottom: "0.4rem"
          }, children: [
            /* @__PURE__ */ jsx("img", { src: "/photos/rawena-logo.png", alt: "Rawena", style: {
              height: "40px",
              width: "auto",
              objectFit: "contain"
            } }),
            /* @__PURE__ */ jsx("h3", { style: {
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: "40px",
              fontWeight: 300,
              lineHeight: "44px",
              color: "#edeae2",
              margin: 0
            }, children: "Rawena" })
          ] }),
          /* @__PURE__ */ jsx("p", { style: {
            fontFamily: "'Outfit', sans-serif",
            fontSize: "18.4px",
            fontWeight: 300,
            color: "rgba(237,234,226,0.9)",
            lineHeight: "34.96px",
            marginBottom: "0.8rem"
          }, children: "Presentation video for an upcoming software product — currently in development. Full video production and editing." }),
          /* @__PURE__ */ jsx("a", { href: "https://rawenatech.com/", target: "_blank", rel: "noopener noreferrer", style: {
            fontFamily: "'Outfit', sans-serif",
            fontSize: "18.4px",
            fontWeight: 700,
            color: "#edeae2",
            textDecoration: "none",
            lineHeight: "34.96px"
          }, children: "rawenatech.com →" })
        ] }),
        /* @__PURE__ */ jsxs("div", { style: {
          padding: "3.5rem 0",
          borderTop: "1px solid rgba(237,234,226,0.1)"
        }, children: [
          /* @__PURE__ */ jsxs("div", { style: {
            display: "flex",
            gap: "1rem",
            marginBottom: "0.8rem",
            flexWrap: "wrap"
          }, children: [
            /* @__PURE__ */ jsx("span", { style: {
              fontFamily: "'Outfit', sans-serif",
              fontSize: "0.62rem",
              letterSpacing: "0.15em",
              color: "rgba(237,234,226,0.35)",
              textTransform: "uppercase"
            }, children: "2019 — 2020" }),
            /* @__PURE__ */ jsx("span", { style: {
              fontFamily: "'Outfit', sans-serif",
              fontSize: "0.55rem",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "#edeae2",
              border: "1px solid rgba(237,234,226,0.35)",
              padding: "0.15rem 0.5rem"
            }, children: "Television" })
          ] }),
          /* @__PURE__ */ jsxs("div", { style: {
            display: "flex",
            alignItems: "center",
            gap: "1rem",
            marginBottom: "0.4rem"
          }, children: [
            /* @__PURE__ */ jsx("img", { src: "/photos/cienycia-logo.jpg", alt: "Cien&Cia", style: {
              height: "40px",
              width: "auto",
              objectFit: "contain"
            } }),
            /* @__PURE__ */ jsx("h3", { style: {
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: "40px",
              fontWeight: 300,
              lineHeight: "44px",
              color: "#edeae2",
              margin: 0
            }, children: "Video Editor & Audiovisual Producer" })
          ] }),
          /* @__PURE__ */ jsx("p", { style: {
            fontFamily: "'Outfit', sans-serif",
            fontSize: "0.7rem",
            fontWeight: 400,
            letterSpacing: "0.1em",
            color: "rgba(237,234,226,0.45)",
            textTransform: "uppercase",
            marginBottom: "1rem"
          }, children: "CIBA / I+D+i · Universidad de Burgos · Burgos" }),
          /* @__PURE__ */ jsxs("p", { style: {
            fontFamily: "'Outfit', sans-serif",
            fontSize: "18.4px",
            fontWeight: 300,
            color: "rgba(237,234,226,0.9)",
            lineHeight: "34.96px",
            marginBottom: "1rem"
          }, children: [
            "Full post-production of ",
            /* @__PURE__ */ jsx("em", { children: "Cien&Cia" }),
            " (CyL7, RTVCyL, La 8 Burgos) and multicamera editing for @UBUInvestiga."
          ] }),
          /* @__PURE__ */ jsx("a", { href: "https://www.youtube.com/watch?v=ZIrBI3mqTxI", target: "_blank", rel: "noopener noreferrer", style: {
            fontFamily: "'Outfit', sans-serif",
            fontSize: "18.4px",
            fontWeight: 700,
            color: "#edeae2",
            textDecoration: "none",
            lineHeight: "34.96px"
          }, children: "Watch the Season 4 recap →" })
        ] }),
        /* @__PURE__ */ jsxs("div", { style: {
          padding: "3.5rem 0",
          borderTop: "1px solid rgba(237,234,226,0.1)"
        }, children: [
          /* @__PURE__ */ jsxs("div", { style: {
            display: "flex",
            alignItems: "center",
            gap: "1.5rem",
            marginBottom: "1rem"
          }, children: [
            /* @__PURE__ */ jsx("span", { style: {
              fontFamily: "'Outfit', sans-serif",
              fontSize: "0.62rem",
              letterSpacing: "0.15em",
              color: "rgba(242,238,231,0.35)",
              textTransform: "uppercase"
            }, children: "2015 — 2026" }),
            /* @__PURE__ */ jsx("span", { style: {
              fontFamily: "'Outfit', sans-serif",
              fontSize: "0.55rem",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "#edeae2",
              border: "1px solid rgba(237,234,226,0.35)",
              padding: "0.15rem 0.5rem"
            }, children: "Hospitality" })
          ] }),
          /* @__PURE__ */ jsx("h3", { style: {
            fontFamily: "'Bebas Neue', sans-serif",
            fontSize: "40px",
            fontWeight: 300,
            lineHeight: "44px",
            color: "#F2EEE7",
            margin: "0 0 0.6rem"
          }, children: "Lessons from unexpected places" }),
          /* @__PURE__ */ jsxs("p", { style: {
            fontFamily: "'Outfit', sans-serif",
            fontSize: "18.4px",
            fontWeight: 300,
            color: "rgba(237,234,226,0.9)",
            lineHeight: "34.96px",
            maxWidth: 680,
            marginBottom: "1.2rem"
          }, children: [
            "From the hospitality industry, I've learnt to find my calm again, not to give up when I'm tired, to be resilient, to work under pressure, to understand what people want, to work as part of a team, to be genuinely happy for my colleagues' achievements, not to compare myself to others, to enjoy myself even when I didn't feel like working, to accept constructive criticism, and above all, how to show up every day asking: ",
            /* @__PURE__ */ jsx("em", { children: '"How can I make this place a little better because I was here?"' })
          ] }),
          /* @__PURE__ */ jsx("p", { style: {
            fontFamily: "'Outfit', sans-serif",
            fontSize: "18.4px",
            fontWeight: 300,
            color: "rgba(237,234,226,0.9)",
            lineHeight: "34.96px",
            maxWidth: 680
          }, children: "Those lessons have shaped the way I approach every creative project today — and I think they deserve to be here." })
        ] }),
        /* @__PURE__ */ jsxs("div", { style: {
          padding: "3.5rem 0",
          borderTop: "1px solid rgba(237,234,226,0.1)"
        }, children: [
          /* @__PURE__ */ jsx("p", { style: {
            fontFamily: "'Outfit', sans-serif",
            fontSize: "0.62rem",
            fontWeight: 700,
            letterSpacing: "0.38em",
            textTransform: "uppercase",
            color: "#edeae2",
            marginBottom: "2rem"
          }, children: "Courses & Other Info" }),
          /* @__PURE__ */ jsxs("div", { style: {
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: "1rem"
          }, children: [
            /* @__PURE__ */ jsxs("div", { style: {
              border: "2px solid rgba(237,234,226,0.12)",
              padding: "1.5rem"
            }, children: [
              /* @__PURE__ */ jsx("p", { style: {
                fontFamily: "'Bebas Neue', sans-serif",
                fontSize: "1.2rem",
                color: "#edeae2",
                letterSpacing: "0.05em",
                marginBottom: "0.5rem"
              }, children: "Neuromarketing" }),
              /* @__PURE__ */ jsx("p", { style: {
                fontFamily: "'Outfit', sans-serif",
                fontSize: "0.65rem",
                fontWeight: 400,
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                color: "rgba(237,234,226,0.4)",
                marginBottom: "0.5rem"
              }, children: "2021" })
            ] }),
            /* @__PURE__ */ jsxs("div", { style: {
              border: "2px solid rgba(237,234,226,0.12)",
              padding: "1.5rem"
            }, children: [
              /* @__PURE__ */ jsx("p", { style: {
                fontFamily: "'Bebas Neue', sans-serif",
                fontSize: "1.2rem",
                color: "#edeae2",
                letterSpacing: "0.05em",
                marginBottom: "0.5rem"
              }, children: "After Effects" }),
              /* @__PURE__ */ jsx("p", { style: {
                fontFamily: "'Outfit', sans-serif",
                fontSize: "0.65rem",
                fontWeight: 400,
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                color: "rgba(237,234,226,0.4)",
                marginBottom: "0.5rem"
              }, children: "2022" })
            ] }),
            /* @__PURE__ */ jsxs("div", { style: {
              border: "2px solid rgba(237,234,226,0.12)",
              padding: "1.5rem"
            }, children: [
              /* @__PURE__ */ jsx("p", { style: {
                fontFamily: "'Bebas Neue', sans-serif",
                fontSize: "1.2rem",
                color: "#edeae2",
                letterSpacing: "0.05em",
                marginBottom: "0.5rem"
              }, children: "Final Project" }),
              /* @__PURE__ */ jsx("p", { style: {
                fontFamily: "'Outfit', sans-serif",
                fontSize: "0.65rem",
                fontWeight: 400,
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                color: "rgba(237,234,226,0.4)",
                marginBottom: "0.8rem"
              }, children: "Narrative music video · 8/10" }),
              /* @__PURE__ */ jsx("a", { href: "https://www.youtube.com/watch?v=qFEYbfOfNpI", target: "_blank", rel: "noopener noreferrer", style: {
                fontFamily: "'Outfit', sans-serif",
                fontSize: "0.65rem",
                fontWeight: 700,
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                color: "#edeae2",
                textDecoration: "none"
              }, children: "Watch →" })
            ] }),
            /* @__PURE__ */ jsxs("div", { style: {
              border: "2px solid rgba(237,234,226,0.12)",
              padding: "1.5rem"
            }, children: [
              /* @__PURE__ */ jsx("p", { style: {
                fontFamily: "'Bebas Neue', sans-serif",
                fontSize: "1.2rem",
                color: "#edeae2",
                letterSpacing: "0.05em",
                marginBottom: "0.5rem"
              }, children: "Stock Video Edits" }),
              /* @__PURE__ */ jsx("p", { style: {
                fontFamily: "'Outfit', sans-serif",
                fontSize: "0.65rem",
                fontWeight: 400,
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                color: "rgba(237,234,226,0.4)",
                marginBottom: "0.8rem"
              }, children: "Cinematic edits with stock footage & music" }),
              /* @__PURE__ */ jsx("a", { href: "https://www.youtube.com/watch?v=3OZsmRnIIUk&list=PLrDfvnUUMDRpwRBky-0hveo-pVJwWDbmO&index=4", target: "_blank", rel: "noopener noreferrer", style: {
                fontFamily: "'Outfit', sans-serif",
                fontSize: "0.65rem",
                fontWeight: 700,
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                color: "#edeae2",
                textDecoration: "none"
              }, children: "Watch playlist →" })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { style: {
          marginTop: "3rem"
        }, children: [
          /* @__PURE__ */ jsx("a", { href: "/docs/IMG_CV_ENG.pdf", download: true, style: {
            fontFamily: "'Outfit', sans-serif",
            fontSize: "0.7rem",
            fontWeight: 500,
            letterSpacing: "0.25em",
            textTransform: "uppercase",
            color: "#ffffff",
            background: "#c86c2e",
            padding: "1rem 2.5rem",
            textDecoration: "none",
            display: "inline-block",
            marginRight: "1rem"
          }, children: "Download CV — EN →" }),
          /* @__PURE__ */ jsx("a", { href: "/docs/IMG_CV_ES.pdf", download: true, style: {
            fontFamily: "'Outfit', sans-serif",
            fontSize: "0.7rem",
            fontWeight: 500,
            letterSpacing: "0.25em",
            textTransform: "uppercase",
            color: "#ffffff",
            background: "#c86c2e",
            padding: "1rem 2.5rem",
            textDecoration: "none",
            display: "inline-block"
          }, children: "Download CV — ES →" })
        ] })
      ] })
    ] })
  ] });
}
export {
  ProjectsPage as component
};
