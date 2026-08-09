import { createRootRoute, HeadContent, Outlet, Scripts, createFileRoute, lazyRouteComponent, createRouter } from "@tanstack/react-router";
import { jsxs, jsx } from "react/jsx-runtime";
import { useEffect } from "react";
const Route$b = createRootRoute({
  notFoundComponent: () => /* @__PURE__ */ jsxs("div", { style: { minHeight: "100vh", background: "#070709", display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", gap: "2rem" }, children: [
    /* @__PURE__ */ jsx("p", { style: { fontFamily: "'Bebas Neue', sans-serif", fontSize: "6rem", color: "#edeae2", lineHeight: 1 }, children: "404" }),
    /* @__PURE__ */ jsx("p", { style: { fontFamily: "'Outfit', sans-serif", fontSize: "18.4px", fontWeight: 300, color: "rgba(237,234,226,0.72)" }, children: "This page doesn't exist." }),
    /* @__PURE__ */ jsx("a", { href: "/", style: { fontFamily: "'Outfit', sans-serif", fontSize: "0.7rem", fontWeight: 500, letterSpacing: "0.25em", textTransform: "uppercase", color: "#ffffff", background: "#c86c2e", padding: "1rem 2.5rem", textDecoration: "none" }, children: "← Home" })
  ] }),
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "MUNTIÓN — Content Creator & Digital Strategist" },
      {
        name: "description",
        content: "MUNTIÓN — Content Creator & Digital Strategist. Where creativity meets conscious digital strategy."
      }
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Outfit:wght@300;400;500;600;700&display=swap"
      },
      { rel: "icon", type: "image/png", href: "/favicon-new.png" }
    ]
  }),
  shellComponent: RootDocument
});
function RootDocument({ children }) {
  useEffect(() => {
    document.body.classList.add("flash-triggered");
    document.body.classList.add("nav-lit");
  }, []);
  return /* @__PURE__ */ jsxs("html", { lang: "en", children: [
    /* @__PURE__ */ jsx("head", { children: /* @__PURE__ */ jsx(HeadContent, {}) }),
    /* @__PURE__ */ jsxs("body", { children: [
      /* @__PURE__ */ jsx(Outlet, {}),
      /* @__PURE__ */ jsx(Scripts, {})
    ] })
  ] });
}
const $$splitComponentImporter$a = () => import("./resume-ip--4VfH.js");
const Route$a = createFileRoute("/resume")({
  component: lazyRouteComponent($$splitComponentImporter$a, "component")
});
const $$splitComponentImporter$9 = () => import("./purpose-BMVW0ggU.js");
const Route$9 = createFileRoute("/purpose")({
  component: lazyRouteComponent($$splitComponentImporter$9, "component")
});
const $$splitComponentImporter$8 = () => import("./projects-D4Cg1jKC.js");
const Route$8 = createFileRoute("/projects")({
  component: lazyRouteComponent($$splitComponentImporter$8, "component")
});
const $$splitComponentImporter$7 = () => import("./contact-535LsFWL.js");
const Route$7 = createFileRoute("/contact")({
  component: lazyRouteComponent($$splitComponentImporter$7, "component")
});
const $$splitComponentImporter$6 = () => import("./blog-BREWPnYQ.js");
const Route$6 = createFileRoute("/blog")({
  component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
const $$splitComponentImporter$5 = () => import("./index-7KgT0JMc.js");
const Route$5 = createFileRoute("/")({
  component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
const $$splitComponentImporter$4 = () => import("./rccoon-BwKx1nEo.js");
const Route$4 = createFileRoute("/work/rccoon")({
  component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
const $$splitComponentImporter$3 = () => import("./espiga-U8G9zPwF.js");
const Route$3 = createFileRoute("/work/espiga")({
  component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
const $$splitComponentImporter$2 = () => import("./commo2-BivT-Plj.js");
const Route$2 = createFileRoute("/work/commo2")({
  component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
const $$splitComponentImporter$1 = () => import("./post-2-BQoa96YC.js");
const Route$1 = createFileRoute("/blog/post-2")({
  component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
const $$splitComponentImporter = () => import("./post-1-DwfKVuDu.js");
const Route = createFileRoute("/blog/post-1")({
  component: lazyRouteComponent($$splitComponentImporter, "component")
});
const ResumeRoute = Route$a.update({
  id: "/resume",
  path: "/resume",
  getParentRoute: () => Route$b
});
const PurposeRoute = Route$9.update({
  id: "/purpose",
  path: "/purpose",
  getParentRoute: () => Route$b
});
const ProjectsRoute = Route$8.update({
  id: "/projects",
  path: "/projects",
  getParentRoute: () => Route$b
});
const ContactRoute = Route$7.update({
  id: "/contact",
  path: "/contact",
  getParentRoute: () => Route$b
});
const BlogRoute = Route$6.update({
  id: "/blog",
  path: "/blog",
  getParentRoute: () => Route$b
});
const IndexRoute = Route$5.update({
  id: "/",
  path: "/",
  getParentRoute: () => Route$b
});
const WorkRccoonRoute = Route$4.update({
  id: "/work/rccoon",
  path: "/work/rccoon",
  getParentRoute: () => Route$b
});
const WorkEspigaRoute = Route$3.update({
  id: "/work/espiga",
  path: "/work/espiga",
  getParentRoute: () => Route$b
});
const WorkCommo2Route = Route$2.update({
  id: "/work/commo2",
  path: "/work/commo2",
  getParentRoute: () => Route$b
});
const BlogPost2Route = Route$1.update({
  id: "/post-2",
  path: "/post-2",
  getParentRoute: () => BlogRoute
});
const BlogPost1Route = Route.update({
  id: "/post-1",
  path: "/post-1",
  getParentRoute: () => BlogRoute
});
const BlogRouteChildren = {
  BlogPost1Route,
  BlogPost2Route
};
const BlogRouteWithChildren = BlogRoute._addFileChildren(BlogRouteChildren);
const rootRouteChildren = {
  IndexRoute,
  BlogRoute: BlogRouteWithChildren,
  ContactRoute,
  ProjectsRoute,
  PurposeRoute,
  ResumeRoute,
  WorkCommo2Route,
  WorkEspigaRoute,
  WorkRccoonRoute
};
const routeTree = Route$b._addFileChildren(rootRouteChildren)._addFileTypes();
const getRouter = () => {
  const router = createRouter({
    routeTree,
    scrollRestoration: true,
    defaultPreloadStaleTime: 0
  });
  return router;
};
export {
  getRouter
};
