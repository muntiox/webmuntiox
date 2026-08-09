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
function RccoonProject() {
  const categories = [{
    title: "Brand Identity",
    desc: "Logo design, visual system and brand assets for RCCOON's evolving identity. Building a recognisable presence across every touchpoint.",
    images: ["/photos/rccoon-head.png", "/photos/rccoon-globe.png", "/photos/rccoon-colours.png", "/photos/rccoon-infographic.png"]
  }, {
    title: "Social Media Design",
    desc: "Static and animated post designs, stories and visual templates. Crafted to communicate causes with clarity and emotion across Instagram and TikTok.",
    images: [{
      src: "/photos/social-media/rccoon-new.png",
      type: "image"
    }, {
      src: "/photos/social-media/rccoon-leader.mp4",
      type: "video"
    }, {
      src: "/photos/social-media/rccoon-a.mp4",
      type: "video"
    }, {
      src: "/photos/social-media/rccoon-hands.mp4",
      type: "video"
    }, {
      src: "/photos/social-media/rccoon-mazon2.png",
      type: "image"
    }]
  }, {
    title: "Editorial Planning",
    desc: "Monthly content calendars and publication scheduling through Metricool. Strategic timing, narrative consistency and channel-specific adaptation.",
    images: ["/photos/calendar.png"]
  }, {
    title: "Video Editing",
    desc: "Documentary content, social campaign videos and short-form storytelling — edited in Premiere Pro. Visual stories that move people to act.",
    video: "https://www.youtube.com/embed/u4fbJTcgwU4",
    video2: "https://www.youtube.com/embed/m1akrtforyY",
    video3: "https://www.youtube.com/embed/COU7LSEuiE0"
  }, {
    title: "Social Campaigns",
    desc: "Activist campaigns built to amplify urgent causes. From conceptualisation to execution — combining design, video, copy and timing to generate real impact.",
    images: ["/photos/social-campaigns/ice.png", "/photos/social-campaigns/ilp.png", "/photos/social-campaigns/bous-1.png", "/photos/social-campaigns/bous-3.png", "/photos/social-campaigns/bous-5.png"]
  }, {
    title: "Print & Outdoor",
    desc: "Posters, flyers and street campaign materials. Physical pieces designed to stop people in their tracks and bring digital messages into the real world.",
    images: ["/photos/print-and-outdoor/mazon-poster.png", "/photos/print-and-outdoor/upv-speech.png"]
  }, {
    title: "Community Coordination",
    desc: "Volunteer team management — onboarding new members, assigning roles, organising responsibilities. Online coordination during the DANA emergency in Valencia.",
    images: ["/photos/community-coordination/posting.png"]
  }, {
    title: "Campaign Operations",
    desc: "Signature collection campaigns, citizen mobilisation logistics, on-the-ground coordination. Where digital strategy meets street-level action.",
    pdf: "/docs/rccoon-campaign-ops.pdf",
    pdfNote: "During the DANA emergency in Valencia, we put together this document to help affected people and volunteers self-organise — coordinating resources, needs and actions in real time."
  }];
  const tools = ["Premiere Pro", "Canva", "Metricool", "Adobe Suite"];
  return /* @__PURE__ */ jsxs("div", { style: {
    minHeight: "100vh",
    background: "#070709",
    fontFamily: "'Bebas Neue', sans-serif"
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
      maxWidth: "860px",
      margin: "0 auto",
      padding: "10rem 3.5rem 6rem",
      position: "relative",
      zIndex: 1
    }, children: [
      /* @__PURE__ */ jsxs("header", { style: {
        marginBottom: "5rem"
      }, children: [
        /* @__PURE__ */ jsxs("p", { style: {
          fontSize: "0.65rem",
          fontWeight: 600,
          letterSpacing: "0.35em",
          textTransform: "uppercase",
          color: "#edeae2",
          marginBottom: "1.5rem",
          display: "flex",
          alignItems: "center",
          gap: "1rem"
        }, children: [
          /* @__PURE__ */ jsx("span", { style: {
            display: "inline-block",
            width: 28,
            height: 1,
            background: "#C86A2A"
          } }),
          "Volunteer Project · 2020 — 2026"
        ] }),
        /* @__PURE__ */ jsxs("h1", { style: {
          fontSize: "clamp(2rem, 5vw, 3.8rem)",
          fontWeight: 400,
          color: "#F2EEE7",
          lineHeight: 1.15,
          marginBottom: "2rem",
          display: "flex",
          alignItems: "center",
          gap: "1.5rem"
        }, children: [
          /* @__PURE__ */ jsx("img", { src: "/photos/rccoon-logo.png", alt: "RCCOON logo", style: {
            height: "80px",
            width: "auto"
          } }),
          "RCCOON · Citizen Action"
        ] }),
        /* @__PURE__ */ jsx("p", { style: {
          fontSize: "1.1rem",
          fontWeight: 300,
          color: "#F2EEE7",
          lineHeight: 1.85,
          maxWidth: 720,
          marginBottom: "2rem"
        }, children: "A grassroots movement turning awareness into action — social, environmental and animal justice. I've been building its digital identity from the ground up alongside a friend, as volunteers." }),
        /* @__PURE__ */ jsx("p", { style: {
          fontSize: "18.4px",
          fontWeight: 300,
          fontStyle: "italic",
          color: "rgba(237,234,226,0.9)",
          lineHeight: "34.96px",
          maxWidth: 720,
          marginBottom: "2rem"
        }, children: "This collaboration came to an end in 2026 — we're now focused on bigger things." }),
        /* @__PURE__ */ jsxs("div", { style: {
          marginTop: "3rem",
          padding: "2rem 0 2rem 2rem",
          borderLeft: "2px solid rgba(200,108,46, 0.3)",
          maxWidth: 720
        }, children: [
          /* @__PURE__ */ jsx("p", { style: {
            fontSize: "0.65rem",
            fontWeight: 600,
            letterSpacing: "0.3em",
            textTransform: "uppercase",
            color: "#edeae2",
            marginBottom: "1.2rem"
          }, children: "The story" }),
          /* @__PURE__ */ jsxs("p", { style: {
            fontSize: "18.4px",
            fontWeight: 300,
            color: "rgba(237,234,226,0.9)",
            lineHeight: "34.96px",
            marginBottom: "1rem"
          }, children: [
            "It started in 2020 as ",
            /* @__PURE__ */ jsx("strong", { style: {
              fontWeight: 500,
              color: "#F2EEE7"
            }, children: "Joves i Solidaris" }),
            " — a volunteer portal focused purely on connecting people with local causes. Just volunteering. No campaigns, no activism."
          ] }),
          /* @__PURE__ */ jsxs("p", { style: {
            fontSize: "18.4px",
            fontWeight: 300,
            color: "rgba(237,234,226,0.9)",
            lineHeight: "34.96px"
          }, children: [
            "Over time we realised something was missing. Volunteering wasn't enough — citizens needed to take real action, step into the streets, and demand change. That's how ",
            /* @__PURE__ */ jsx("strong", { style: {
              fontWeight: 500,
              color: "#F2EEE7"
            }, children: "RCCOON" }),
            " was born: a natural evolution from quiet support into active, citizen-led movement."
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("section", { children: [
        /* @__PURE__ */ jsxs("p", { style: {
          fontSize: "0.65rem",
          fontWeight: 600,
          letterSpacing: "0.35em",
          textTransform: "uppercase",
          color: "#edeae2",
          marginBottom: "3rem",
          display: "flex",
          alignItems: "center",
          gap: "1rem"
        }, children: [
          /* @__PURE__ */ jsx("span", { style: {
            display: "inline-block",
            width: 28,
            height: 1,
            background: "#C86A2A"
          } }),
          "What I do"
        ] }),
        /* @__PURE__ */ jsx("div", { style: {
          display: "flex",
          flexDirection: "column",
          gap: "1.5rem"
        }, children: categories.map((cat, i) => /* @__PURE__ */ jsxs("div", { style: {
          background: "rgba(20,5,5,0.6)",
          border: "none",
          padding: "2rem",
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          position: "relative",
          transition: "transform 0.25s, box-shadow 0.25s, border-color 0.25s"
        }, onMouseEnter: (e) => {
          e.currentTarget.style.transform = "translateY(-3px)";
          e.currentTarget.style.boxShadow = "0 8px 24px rgba(26,37,32,0.10)";
          e.currentTarget.style.borderColor = "rgba(200,108,46,0.4)";
        }, onMouseLeave: (e) => {
          e.currentTarget.style.transform = "translateY(0)";
          e.currentTarget.style.boxShadow = "none";
          e.currentTarget.style.borderColor = "rgba(200,108,46,0.18)";
        }, children: [
          /* @__PURE__ */ jsxs("div", { style: {
            display: "flex",
            alignItems: "baseline",
            gap: "1rem"
          }, children: [
            /* @__PURE__ */ jsx("span", { style: {
              fontSize: "0.75rem",
              fontWeight: 500,
              color: "#edeae2",
              letterSpacing: "0.1em"
            }, children: String(i + 1).padStart(2, "0") }),
            /* @__PURE__ */ jsx("h3", { style: {
              fontSize: "1.15rem",
              fontWeight: 500,
              color: "#F2EEE7",
              lineHeight: 1.3
            }, children: cat.title })
          ] }),
          /* @__PURE__ */ jsx("p", { style: {
            fontSize: "18.4px",
            fontWeight: 300,
            color: "rgba(237,234,226,0.9)",
            lineHeight: "34.96px"
          }, children: cat.desc }),
          "pdf" in cat && cat.pdf && /* @__PURE__ */ jsxs("div", { style: {
            marginTop: "1rem"
          }, children: [
            "pdfNote" in cat && cat.pdfNote && /* @__PURE__ */ jsx("p", { style: {
              fontFamily: "'Outfit', sans-serif",
              fontSize: "18.4px",
              fontWeight: 300,
              color: "rgba(237,234,226,0.9)",
              lineHeight: "34.96px",
              marginBottom: "1rem"
            }, children: cat.pdfNote }),
            /* @__PURE__ */ jsx("a", { href: cat.pdf, download: true, style: {
              fontFamily: "'Outfit', sans-serif",
              fontSize: "0.7rem",
              fontWeight: 500,
              letterSpacing: "0.25em",
              textTransform: "uppercase",
              color: "#F2EEE7",
              background: "#C86A2A",
              padding: "0.8rem 2rem",
              textDecoration: "none",
              display: "inline-block"
            }, children: "Download PDF →" })
          ] }),
          "video" in cat && cat.video && /* @__PURE__ */ jsxs("div", { style: {
            display: "flex",
            gap: "1rem",
            marginTop: "1rem",
            alignItems: "flex-start"
          }, children: [
            /* @__PURE__ */ jsx("iframe", { src: cat.video, style: {
              height: "220px",
              aspectRatio: "16/9",
              border: "none",
              flexShrink: 0
            }, allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture", allowFullScreen: true }),
            "video2" in cat && cat.video2 && /* @__PURE__ */ jsx("iframe", { src: cat.video2, style: {
              height: "220px",
              aspectRatio: "9/16",
              border: "none",
              flexShrink: 0
            }, allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture", allowFullScreen: true }),
            "video3" in cat && cat.video3 && /* @__PURE__ */ jsx("iframe", { src: cat.video3, style: {
              height: "220px",
              aspectRatio: "9/16",
              border: "none",
              flexShrink: 0
            }, allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture", allowFullScreen: true })
          ] }),
          "images" in cat && cat.images && /* @__PURE__ */ jsx("div", { style: {
            display: "flex",
            gap: "1rem",
            marginTop: "1rem",
            overflowX: "auto",
            paddingBottom: "0.5rem"
          }, children: cat.images.map((item, j) => {
            const src = typeof item === "string" ? item : item.src;
            const type = typeof item === "string" ? "image" : item.type;
            return type === "video" ? /* @__PURE__ */ jsx("video", { autoPlay: true, muted: true, loop: true, playsInline: true, style: {
              height: "420px",
              width: "auto",
              minWidth: "280px",
              objectFit: "cover",
              flexShrink: 0
            }, children: /* @__PURE__ */ jsx("source", { src, type: "video/mp4" }) }, j) : /* @__PURE__ */ jsx("img", { src, alt: "", style: {
              height: "420px",
              width: "auto",
              minWidth: "364px",
              objectFit: "contain",
              background: "rgba(255,255,255,0.06)",
              padding: "1rem",
              flexShrink: 0
            } }, j);
          }) })
        ] }, cat.title)) })
      ] }),
      /* @__PURE__ */ jsxs("section", { style: {
        marginTop: "5rem",
        paddingTop: "4rem",
        borderTop: "1px solid rgba(26,37,32,0.10)"
      }, children: [
        /* @__PURE__ */ jsxs("p", { style: {
          fontSize: "0.65rem",
          fontWeight: 600,
          letterSpacing: "0.35em",
          textTransform: "uppercase",
          color: "#edeae2",
          marginBottom: "2.5rem",
          display: "flex",
          alignItems: "center",
          gap: "1rem"
        }, children: [
          /* @__PURE__ */ jsx("span", { style: {
            display: "inline-block",
            width: 28,
            height: 1,
            background: "#C86A2A"
          } }),
          "Tools & Production"
        ] }),
        /* @__PURE__ */ jsx("div", { style: {
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "0.75rem"
        }, children: tools.map((t) => /* @__PURE__ */ jsx("div", { style: {
          background: "#c86c2e",
          color: "#fafaf7",
          padding: "0.8rem 0.8rem",
          fontSize: "0.65rem",
          fontWeight: 500,
          letterSpacing: "0.15em",
          textTransform: "uppercase",
          textAlign: "center",
          boxShadow: "0 2px 8px rgba(200,108,46,0.15)"
        }, children: t }, t)) })
      ] }),
      /* @__PURE__ */ jsx("blockquote", { style: {
        background: "rgba(20,5,5,0.5)",
        border: "1px solid rgba(200,108,46,0.2)",
        borderLeft: "3px solid #C86A2A",
        padding: "2.5rem 2.5rem",
        fontSize: "1.35rem",
        fontStyle: "italic",
        fontWeight: 300,
        color: "#F2EEE7",
        lineHeight: 1.5,
        margin: "5rem 0 4rem",
        maxWidth: 720
      }, children: "Turn empathy into responsibility, and responsibility into action." }),
      /* @__PURE__ */ jsxs("div", { style: {
        marginTop: "4rem",
        paddingTop: "3rem",
        borderTop: "1px solid rgba(26,37,32,0.10)",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "wrap",
        gap: "1rem"
      }, children: [
        /* @__PURE__ */ jsxs("p", { style: {
          fontSize: "18.4px",
          fontWeight: 300,
          color: "rgba(237,234,226,0.9)"
        }, children: [
          "Learn more about the project at",
          " ",
          /* @__PURE__ */ jsx("a", { href: "https://rccoon.org", target: "_blank", rel: "noopener noreferrer", style: {
            color: "#edeae2",
            textDecoration: "none",
            borderBottom: "1px solid #5b2dd1"
          }, children: "rccoon.org" })
        ] }),
        /* @__PURE__ */ jsx(Link, { to: "/projects", style: {
          fontSize: "0.7rem",
          fontWeight: 500,
          letterSpacing: "0.2em",
          textTransform: "uppercase",
          color: "#F2EEE7",
          textDecoration: "none"
        }, children: "← Back to projects" })
      ] })
    ] })
  ] });
}
export {
  RccoonProject as component
};
