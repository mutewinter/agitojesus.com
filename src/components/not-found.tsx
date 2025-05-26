import { Link } from "@tanstack/react-router";

const JESUS_STYLES =
  "bg-gradient-to-r from-[#B8860B] via-[#DAA520] to-[#FFD700] bg-clip-text text-transparent font-black";

export function NotFound() {
  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center">
      <main className="w-full max-w-4xl mx-auto px-4 flex flex-col items-center justify-center gap-8">
        {/* Movie Poster Style 404 */}
        <div className="text-center flex flex-col gap-6">
          {/* Genre Tag */}
          <div className="flex flex-col gap-1">
            <p className="text-xs text-neutral-500 tracking-[0.3em] uppercase">
              A Digital Tragedy
            </p>
          </div>

          {/* Main Title */}
          <div className="flex flex-col gap-4">
            <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-[8rem] leading-none font-black tracking-tight">
              4<span className="text-red-500">0</span>4
            </h1>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-wide">
              PAGE NOT <span className={JESUS_STYLES}>FOUND</span>
            </h2>
          </div>

          {/* Tagline */}
          <div className="flex flex-col gap-2 max-w-lg mx-auto">
            <p className="text-lg sm:text-xl italic tracking-wide text-neutral-300">
              Your salvation awaits on another page.
            </p>
          </div>
        </div>

        {/* Movie Poster Style CTA */}
        <div className="border border-neutral-800 bg-neutral-950/30 p-8 max-w-md w-full">
          <div className="flex flex-col items-center gap-4">
            <div className="text-center">
              <p className="text-xs tracking-[0.3em] uppercase text-neutral-500 mb-3">
                Return to Safety
              </p>
              <Link
                to="/"
                className="inline-block px-8 py-3 bg-neutral-900 text-neutral-300 hover:bg-neutral-800 transition-all duration-200 tracking-wide border border-neutral-700 hover:border-neutral-600 font-semibold"
              >
                Back to <span className={JESUS_STYLES}>Salvation</span>
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
