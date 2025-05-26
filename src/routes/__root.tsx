import {
  HeadContent,
  Outlet,
  Scripts,
  createRootRoute,
} from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import type * as React from "react";
import { NotFound } from "~/components/not-found";
import appCss from "~/styles/app.css?url";

const SITE_URL = "https://agitojesus.com";
const SITE_TITLE = "AGI to Jesus";
const SITE_DESCRIPTION = "Not feeling the AGI? You will be saved.";
const OG_IMAGE_URL = `${SITE_URL}/og-image.png`;

const FONT_URL =
  "https://fonts.googleapis.com/css2?family=Poppins:wght@400;500&display=swap";

export const Route = createRootRoute({
  head: () => ({
    links: [
      { rel: "stylesheet", href: appCss },
      {
        rel: "apple-touch-icon",
        sizes: "180x180",
        href: "/apple-touch-icon.png",
      },
      { rel: "icon", href: "/favicon.ico" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "" },
      {
        rel: "preload",
        href: FONT_URL,
        as: "style",
      },
      {
        rel: "stylesheet",
        href: FONT_URL,
      },
      { rel: "stylesheet", href: appCss },
    ],
    meta: [
      {
        title: SITE_TITLE,
      },
      {
        name: "og:title",
        content: SITE_TITLE,
      },
      {
        name: "og:description",
        content: SITE_DESCRIPTION,
      },
      {
        name: "description",
        content: SITE_DESCRIPTION,
      },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1.0",
      },
      {
        name: "og:image",
        content: OG_IMAGE_URL,
      },
    ],
  }),
  component: RootComponent,
  notFoundComponent: NotFound,
});

function RootComponent() {
  return (
    <RootDocument>
      <Outlet />
    </RootDocument>
  );
}

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <TanStackRouterDevtools position="bottom-right" />
        <Scripts />
      </body>
    </html>
  );
}
