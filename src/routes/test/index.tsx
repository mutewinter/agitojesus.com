const BOOKMARKLET_CODE = __BOOKMARKLET_CODE__;

export const Route = createFileRoute({
  component: RouteComponent,
});

function RouteComponent() {
  const isDevelopment = process.env.NODE_ENV === "development";

  const handleRunBookmarklet = () => {
    // Execute the bookmarklet code directly - only in development
    if (!isDevelopment) {
      console.warn(
        "Bookmarklet execution is only available in development mode",
      );
      return;
    }

    try {
      // Create a temporary anchor element with the bookmarklet code
      const tempLink = document.createElement("a");
      tempLink.href = BOOKMARKLET_CODE;
      tempLink.style.display = "none";
      document.body.appendChild(tempLink);

      // Click the link to execute the bookmarklet
      tempLink.click();

      // Clean up
      document.body.removeChild(tempLink);
    } catch (error) {
      console.error("Error running bookmarklet:", error);
    }
  };

  if (isDevelopment && typeof window !== "undefined") {
    handleRunBookmarklet();
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-neutral-950">
      <div className="max-w-2xl w-full mx-auto p-8">
        <h1 className="text-3xl font-bold mb-8 text-center text-neutral-100">
          Test Page
        </h1>

        <div className="space-y-6 text-neutral-300">
          <p className="text-lg text-center leading-relaxed">
            AGI is going to change everything! The development of AGI will be a
            watershed moment in human history.
          </p>

          <p className="text-lg text-center leading-relaxed">
            Some researchers are concerned about ASI and its potential
            implications. The development of superintelligence could pose
            existential risks.
          </p>

          <p className="text-lg text-center leading-relaxed">
            SSI represents a major milestone on the path to AGI. Once we achieve
            superintelligence, there's no going back.
          </p>
        </div>
      </div>
    </div>
  );
}
