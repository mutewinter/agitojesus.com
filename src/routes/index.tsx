import { GripVertical, Github, Copy } from "lucide-react";
import { useState } from "react";
import { BOOKMARKLET_GITHUB_URL } from "~/constants";

const BOOKMARKLET_CODE = __BOOKMARKLET_CODE__;

// Declare global function type
declare global {
  interface Window {
    handleBookmarkletCopy: (e: MouseEvent) => void;
  }
}

// Add global click handler for copying
if (typeof window !== "undefined") {
  window.handleBookmarkletCopy = (e: MouseEvent) => {
    e.preventDefault();
    navigator.clipboard.writeText(BOOKMARKLET_CODE);
    const toast = document.createElement("div");
    toast.className =
      "fixed top-4 right-4 bg-neutral-800 text-white px-4 py-2 rounded-lg shadow-lg animate-fade-in-out";
    toast.textContent = "Bookmarklet code copied to clipboard!";
    document.body.appendChild(toast);
    setTimeout(() => toast.remove(), 2000);
  };
}

export const Route = createFileRoute({
  component: Home,
});

const JESUS_STYLES =
  "font-serif bg-gradient-to-r from-[#B8860B] via-[#DAA520] to-[#FFD700] bg-clip-text text-transparent";

function Home() {
  const [copied, setCopied] = useState(false);

  const handleBookmarkletClick = (e: React.MouseEvent) => {
    e.preventDefault();
    navigator.clipboard.writeText(BOOKMARKLET_CODE);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-black flex flex-col">
      <div className="light-cone motion-preset-fade-sm motion-duration-1500 motion-delay-1500" />
      <main className="relative flex-1 w-full max-w-7xl mx-auto px-4 pt-12 flex flex-col gap-12">
        {copied && (
          <div className="fixed top-4 right-4 bg-neutral-800 text-white px-4 py-2 rounded-lg shadow-lg animate-fade-in-out">
            Bookmarklet code copied to clipboard!
          </div>
        )}

        <div className="text-center flex flex-col overflow-hidden">
          <div className="flex flex-col gap-1 mb-12 motion-preset-fade-sm motion-duration-2000">
            <p className="text-xs text-neutral-500 tracking-[0.2em] uppercase">
              From the same skepticism that brought you
            </p>
            <p className="text-lg italic tracking-wide text-neutral-400">
              "Cloud to Butt"
            </p>
            <p className="text-xs text-neutral-500 tracking-[0.2em] uppercase">
              Comes your savior from the hype
            </p>
          </div>

          <div className="flex flex-col gap-4 motion-duration-1500 motion-delay-1500 motion-scale-in-150 motion-blur-in-2xl motion-opacity-in-0 overflow-hidden pb-8 sm:pb-16">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[5rem] leading-none tracking-tight">
              AGI to <span className={`${JESUS_STYLES} pr-px`}>Jesus</span>
            </h1>
            <p className="text-base sm:text-lg tracking-wide text-neutral-300">
              Not feeling the AGI? You will be saved.
            </p>
          </div>
        </div>

        {/* Rest of the page content wrapped in a single motion container */}
        <div className="flex flex-col gap-12 motion-preset-fade-sm motion-duration-1000 motion-delay-2500">
          {/* Before/After Images Section */}
          <div className="w-full max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 md:gap-12">
              <figure className="flex flex-col items-center gap-2">
                <div className="w-full bg-neutral-950 border border-neutral-800 overflow-hidden">
                  <img
                    src="/images/before-1.png"
                    alt="Sam Altman X post 'agi delayed four days'"
                    className="w-full h-full object-contain"
                  />
                </div>
                <figcaption className="text-neutral-400 tracking-wide mt-1">
                  Self-indulgent
                </figcaption>
              </figure>

              <figure className="flex flex-col items-center gap-2">
                <div className="w-full bg-neutral-950 border border-neutral-800 overflow-hidden">
                  <img
                    src="/images/after-1.png"
                    alt="Jesus X post 'Jesus delayed four days'"
                    className="w-full h-full object-contain"
                  />
                </div>
                <figcaption
                  className={`${JESUS_STYLES} font-serif text-neutral-400 tracking-wide mt-1`}
                >
                  Somber
                </figcaption>
              </figure>
            </div>

            {/* Second row of images */}
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 mt-8 md:mt-12">
              <figure className="flex flex-col items-center gap-2">
                <div className="w-full bg-neutral-950 border border-neutral-800 overflow-hidden">
                  <img
                    src="/images/before-2.png"
                    alt="@aaditsh X post: 'Mark Zuckerberg literally drops a 90-minute masterclass on AI, China, and AGI'"
                    className="w-full h-full object-contain"
                  />
                </div>
                <figcaption className="text-neutral-400 tracking-wide mt-1">
                  Buzzword soup
                </figcaption>
              </figure>

              <figure className="flex flex-col items-center gap-2">
                <div className="w-full bg-neutral-950 border border-neutral-800 overflow-hidden">
                  <img
                    src="/images/after-2.png"
                    alt="@aaditsh X post: 'Mark Zuckerberg literally drops a 90-minute masterclass on AI, China, and Jesus'"
                    className="w-full h-full object-contain"
                  />
                </div>
                <figcaption
                  className={`${JESUS_STYLES} font-serif text-neutral-400 tracking-wide mt-1`}
                >
                  Spreading the Gospel
                </figcaption>
              </figure>
            </div>
          </div>

          <div className="grid md:grid-cols-2 border border-neutral-800 bg-neutral-950/30">
            <div className="bg-black p-6 md:p-8 border-b md:border-b-0 md:border-r border-neutral-700">
              <div className="aspect-auto bg-black border border-neutral-800 overflow-hidden">
                <video
                  className="w-full h-full object-contain"
                  autoPlay
                  muted
                  loop
                  playsInline
                  controls
                  poster="/images/agi-to-jesus-desktop-poster.png"
                >
                  <source
                    src="/videos/agi-to-jesus-desktop.mp4"
                    type="video/mp4"
                  />
                  <p className="tracking-widest text-neutral-400 text-sm flex items-center justify-center h-full">
                    Your browser does not support the video tag.
                  </p>
                </video>
              </div>
            </div>

            <div className="bg-black p-6 md:p-8">
              <div className="flex flex-col items-center justify-center gap-6 h-full">
                <div className="text-center">
                  <p className="text-sm md:text-base tracking-wide text-neutral-400 mb-2">
                    Drag this button to your bookmarks bar
                  </p>
                </div>

                <div className="relative">
                  <div
                    id="bookmarklet-button"
                    className="inline-flex items-center gap-3 px-6 py-3 bg-neutral-900 text-neutral-300 hover:bg-neutral-800 transition-all duration-200 tracking-wide cursor-move select-none border border-neutral-700 hover:border-neutral-600"
                  >
                    <GripVertical className="w-4 h-4 text-neutral-500" />
                    <span className="text-sm">
                      AGI to <span className={JESUS_STYLES}>Jesus</span>
                    </span>
                  </div>
                  <div
                    className="absolute inset-0 opacity-0"
                    // biome-ignore lint/security/noDangerouslySetInnerHtml: <explanation>
                    dangerouslySetInnerHTML={{
                      __html: `<a href="${BOOKMARKLET_CODE}" 
                        draggable="true" 
                        style="display: block; width: 100%; height: 100%; cursor: grab;"
                        onclick="window.handleBookmarkletCopy(event)"
                        ondragstart="
                          this.style.cursor = 'grabbing';
                          const button = document.getElementById('bookmarklet-button');
                          if (button) {
                            const rect = button.getBoundingClientRect();
                            event.dataTransfer.setDragImage(button, rect.width/2, rect.height/2);
                          }
                        "
                        ondragend="this.style.cursor = 'grab';"
                        title="AGI to Jesus 👑"
                      >AGI to Jesus 👑</a>`,
                    }}
                  />
                </div>

                <div className="flex flex-col items-center gap-3">
                  <div className="flex items-center gap-2 text-xs text-neutral-500">
                    <div className="h-px bg-neutral-700 w-8" />
                    <span>or</span>
                    <div className="h-px bg-neutral-700 w-8" />
                  </div>

                  <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 w-full sm:w-auto">
                    <button
                      type="button"
                      onClick={handleBookmarkletClick}
                      className="inline-flex items-center gap-2 px-4 py-2 text-xs tracking-wide text-neutral-400 hover:text-neutral-200 transition-colors border border-neutral-800 hover:border-neutral-700 bg-black hover:bg-neutral-900"
                    >
                      <Copy className="w-3 h-3" />
                      Copy Code
                    </button>

                    <a
                      href={BOOKMARKLET_GITHUB_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 text-xs tracking-wide text-neutral-400 hover:text-neutral-200 transition-colors border border-neutral-800 hover:border-neutral-700 bg-black hover:bg-neutral-900"
                    >
                      <Github className="w-3 h-3" />
                      View Source
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer - Movie Credits Style */}
        <footer className="mt-auto pt-8 pb-6 w-full border-t border-neutral-800">
          <div className="max-w-xl mx-auto px-4 flex flex-col items-center gap-3">
            <div className="flex flex-col items-center gap-1 text-center">
              <p className="text-xs tracking-[0.3em] uppercase text-neutral-600">
                Written and Directed by
              </p>
              <a
                href="https://x.com/mutewinter"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm tracking-[0.2em] uppercase text-neutral-300 hover:text-white transition-colors"
              >
                @mutewinter
              </a>
            </div>

            <div className="flex flex-col items-center gap-1 text-center mt-2">
              <p className="text-xs tracking-[0.3em] uppercase text-neutral-600">
                Special Thanks
              </p>
              <p className="text-sm tracking-[0.2em] uppercase text-neutral-400">
                VC dollars
              </p>
              <p className="text-sm tracking-[0.2em] uppercase text-neutral-400">
                <a
                  href="https://github.com/panicsteve/cloud-to-butt"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-400 hover:text-white transition-colors"
                >
                  Cloud to Butt
                </a>{" "}
                &amp;{" "}
                <a
                  href="https://github.com/panicsteve"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-400 hover:text-white transition-colors"
                >
                  Steven Frank
                </a>
              </p>
            </div>

            <div className="flex flex-col items-center gap-1 text-center mt-2">
              <p className="text-xs tracking-[0.3em] uppercase text-neutral-600">
                Made with
              </p>
              <p className="text-sm tracking-[0.2em] uppercase text-neutral-400">
                <a
                  href="https://tanstack.com/start"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-400 hover:text-white transition-colors"
                >
                  TanStack Start
                </a>
              </p>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
