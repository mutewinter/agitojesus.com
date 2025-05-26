import tailwindcss from "@tailwindcss/vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import { defineConfig } from "vite";
import tsConfigPaths from "vite-tsconfig-paths";
import { build } from "vite";
import path from "node:path";
import fs from "node:fs";
import { cloudflare } from "@cloudflare/vite-plugin";
import type { ViteDevServer } from "vite";

const BOOKMARKLET_PATH = "src/bookmarklet.ts";

// Function to compile bookmarklet
async function compileBookmarklet(): Promise<string> {
  const tempDir = path.join(process.cwd(), ".temp-bookmarklet");
  const tempFile = path.join(tempDir, "bookmarklet.js");

  try {
    // Ensure temp directory exists
    if (!fs.existsSync(tempDir)) {
      fs.mkdirSync(tempDir, { recursive: true });
    }

    // Build the bookmarklet
    await build({
      configFile: false,
      build: {
        lib: {
          entry: BOOKMARKLET_PATH,
          formats: ["iife"],
          name: "bookmarklet",
          fileName: () => "bookmarklet.js",
        },
        outDir: tempDir,
        minify: true,
        copyPublicDir: false,
        rollupOptions: {
          output: {
            inlineDynamicImports: true,
          },
        },
        write: true,
      },
      esbuild: {
        target: "es2015",
      },
    });

    // Read the compiled bookmarklet
    const compiledCode = fs.readFileSync(tempFile, "utf-8");

    // Clean up temp directory
    fs.rmSync(tempDir, { recursive: true, force: true });

    // Return as a bookmarklet URL
    return `javascript:${encodeURIComponent(compiledCode)}`;
  } catch (error) {
    console.error("Failed to compile bookmarklet:", error);
    // Fallback: read the source file and wrap it
    const sourceCode = fs.readFileSync(BOOKMARKLET_PATH, "utf-8");
    return `javascript:${encodeURIComponent(`(function(){${sourceCode}})();`)}`;
  }
}

export default defineConfig(async () => {
  // Compile the bookmarklet
  const bookmarkletCode = await compileBookmarklet();

  return {
    server: {
      port: 3116,
    },
    define: {
      __BOOKMARKLET_CODE__: JSON.stringify(bookmarkletCode),
    },
    plugins: [
      process.env.NODE_ENV === "development" && {
        name: "watch-bookmarklet",
        configureServer(server: ViteDevServer) {
          server.watcher.add(BOOKMARKLET_PATH);
          server.watcher.on("change", async (filePath: string) => {
            if (filePath === BOOKMARKLET_PATH) {
              // Wacky hack to force a full reload and not break browser
              // Will still show a broken page for a second
              setTimeout(() => {
                server.restart(false);
              }, 100);
            }
          });
        },
      },
      tsConfigPaths({
        projects: ["./tsconfig.json"],
      }),
      tanstackStart({
        target: "cloudflare-module",
      }),
      tailwindcss(),
      cloudflare(),
    ],
  };
});
