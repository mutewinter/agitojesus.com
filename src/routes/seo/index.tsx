import { GripVertical } from "lucide-react";
import { useRef } from "react";

export const Route = createFileRoute({
  component: OGImageComponent,
});

const JESUS_STYLES =
  "font-serif bg-gradient-to-r from-[#B8860B] via-[#DAA520] to-[#FFD700] bg-clip-text text-transparent";

function OGImageComponent() {
  const ogImageRef = useRef<HTMLDivElement>(null);
  const faviconRef = useRef<HTMLDivElement>(null);

  const downloadImage = () => {
    if (ogImageRef.current) {
      // Create a canvas element
      const canvas = document.createElement("canvas");
      canvas.width = 1200;
      canvas.height = 630;
      const ctx = canvas.getContext("2d");

      if (!ctx) return;

      // Fill with black background
      ctx.fillStyle = "#000000";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw the light cone effect
      const gradient = ctx.createRadialGradient(
        canvas.width / 2,
        canvas.height / 2,
        0,
        canvas.width / 2,
        canvas.height / 2,
        canvas.width / 1.5,
      );
      gradient.addColorStop(0, "rgba(38, 38, 38, 0.2)");
      gradient.addColorStop(0.5, "rgba(38, 38, 38, 0.1)");
      gradient.addColorStop(1, "rgba(0, 0, 0, 0)");

      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw the text
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";

      // Draw "AGI to"
      ctx.font = "bold 120px sans-serif";
      ctx.fillStyle = "#ffffff";
      ctx.fillText("AGI to", canvas.width / 2, canvas.height / 2 - 40);

      // Draw "Jesus" with gradient
      const jesusGradient = ctx.createLinearGradient(
        canvas.width / 2 - 150,
        canvas.height / 2 + 40,
        canvas.width / 2 + 150,
        canvas.height / 2 + 40,
      );
      jesusGradient.addColorStop(0, "#B8860B");
      jesusGradient.addColorStop(0.5, "#DAA520");
      jesusGradient.addColorStop(1, "#FFD700");

      ctx.font = "bold 120px serif";
      ctx.fillStyle = jesusGradient;
      ctx.fillText("Jesus", canvas.width / 2, canvas.height / 2 + 80);

      // Draw subtitle
      ctx.font = "40px sans-serif";
      ctx.fillStyle = "#d4d4d4";
      ctx.fillText(
        "Not feeling the AGI? You will be saved.",
        canvas.width / 2,
        canvas.height / 2 + 180,
      );

      // Convert to PNG and download
      const link = document.createElement("a");
      link.download = "agi-to-jesus-og-image.png";
      link.href = canvas.toDataURL("image/png");
      link.click();
    }
  };

  const downloadFavicon = () => {
    if (faviconRef.current) {
      // Create a canvas element
      const canvas = document.createElement("canvas");
      canvas.width = 512;
      canvas.height = 512;
      const ctx = canvas.getContext("2d");

      if (!ctx) return;

      // Fill with black background
      ctx.fillStyle = "#000000";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw the light cone effect
      const gradient = ctx.createRadialGradient(
        canvas.width / 2,
        canvas.height / 2,
        0,
        canvas.width / 2,
        canvas.height / 2,
        canvas.width / 1.5,
      );
      gradient.addColorStop(0, "rgba(38, 38, 38, 0.2)");
      gradient.addColorStop(0.5, "rgba(38, 38, 38, 0.1)");
      gradient.addColorStop(1, "rgba(0, 0, 0, 0)");

      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw the "J" with gradient
      const jGradient = ctx.createLinearGradient(
        canvas.width / 2 - 100,
        canvas.height / 2,
        canvas.width / 2 + 100,
        canvas.height / 2,
      );
      jGradient.addColorStop(0, "#B8860B");
      jGradient.addColorStop(0.5, "#DAA520");
      jGradient.addColorStop(1, "#FFD700");

      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.font = "bold 400px serif";
      ctx.fillStyle = jGradient;
      ctx.fillText("J", canvas.width / 2, canvas.height / 2);

      // Convert to PNG and download
      const link = document.createElement("a");
      link.download = "favicon.png";
      link.href = canvas.toDataURL("image/png");
      link.click();
    }
  };

  return (
    <div className="min-h-screen bg-neutral-900 flex flex-col items-center justify-center gap-8 p-8">
      {/* OG Image Container */}
      <div
        ref={ogImageRef}
        className="bg-black flex flex-col items-center justify-center relative overflow-hidden"
        style={{ width: "1200px", height: "630px" }}
      >
        {/* Enhanced light cone effect */}
        <div className="light-cone" />

        <div className="relative flex flex-col items-center gap-16">
          <div className="relative text-center flex flex-col gap-6 z-10">
            <div className="flex flex-col gap-4">
              <h1 className="text-7xl leading-none tracking-tight font-bold">
                AGI to <span className={`${JESUS_STYLES} pr-px`}>Jesus</span>
              </h1>
              <p className="text-2xl tracking-wide text-neutral-300">
                Not feeling the AGI? You will be saved.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Download Button */}
      <button
        type="button"
        onClick={downloadImage}
        className="px-6 py-3 bg-neutral-800 text-white hover:bg-neutral-700 transition-colors rounded-lg border border-neutral-600 hover:border-neutral-500"
      >
        Download OG Image (PNG)
      </button>

      {/* Favicon Container */}
      <div
        ref={faviconRef}
        className="bg-black flex flex-col items-center justify-center relative overflow-hidden mt-16"
        style={{ width: "512px", height: "512px" }}
      >
        {/* Enhanced light cone effect */}
        <div className="light-cone" />

        <div className="relative flex flex-col items-center justify-center text-center">
          <h1 className="text-[28rem] leading-none tracking-tight font-bold">
            <span className={`${JESUS_STYLES}`}>J</span>
          </h1>
        </div>
      </div>

      {/* Favicon Download Button */}
      <button
        type="button"
        onClick={downloadFavicon}
        className="px-6 py-3 bg-neutral-800 text-white hover:bg-neutral-700 transition-colors rounded-lg border border-neutral-600 hover:border-neutral-500"
      >
        Download Favicon (PNG)
      </button>

      {/* Instructions */}
      <div className="text-center text-neutral-400 text-sm max-w-md">
        <p>
          This component renders the header content in Open Graph image
          dimensions (1200x630px) and a favicon (512x512px).
        </p>
        <p className="mt-2">
          Click the buttons above to download PNG versions for your OG image and
          favicon.
        </p>
      </div>
    </div>
  );
}
