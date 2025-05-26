interface Window {
  __agiToJesus:
    | {
        initialized?: boolean;
        enabled?: boolean;
        cleanup?: () => void;
      }
    | undefined;
}

// Wrap everything in an IIFE to avoid global scope pollution
(() => {
  // Initialize the global object
  const state = window.__agiToJesus || {};
  window.__agiToJesus = state;

  // Check if already enabled (user clicked Save Me before)
  if (state.enabled) {
    showToast("🙏 You have already been saved", true);
    return;
  }

  // Ensure we don't double-initialize the script
  if (state.initialized) {
    return;
  }

  state.initialized = true;

  // Define the pattern and replacement style
  const pattern = /\b(AGI|ASI|SSI|superintelligence)\b/gi;
  const replacementClass = `agi-to-jesus-${Math.random().toString(36).slice(2, 5)}`;
  const ANIMATION_DURATIONS = {
    slideIn: 500,
    slideOut: 2500,
    fadeIn: 1500,
    lightCone: 2000,
    lightConeFade: 5000,
  };

  // Create and inject styles
  function createStyles(): HTMLStyleElement {
    const styleSheet = document.createElement("style");
    document.head.appendChild(styleSheet);

    styleSheet.textContent = `
      .${replacementClass} {
        display: inline-flex;
        background: conic-gradient(from 0deg at center, #B8860B, #DAA520, #FFD700, #DAA520, #B8860B);
        -webkit-background-clip: text;
        background-clip: text;
        color: transparent;
        font-weight: 900;
        border-radius: 3px;
        position: relative;
        overflow: hidden;
        vertical-align: baseline;
        animation: agi-to-jesus-fade-in 1500ms cubic-bezier(0.4, 0, 0.2, 1) forwards;
      }

      @keyframes agi-to-jesus-fade-in {
        0% {
          opacity: 0;
          transform: translateY(100%);
        }
        100% {
          opacity: 1;
          transform: translateY(0);
        }
      }

      @keyframes agi-to-jesus-shimmer {
        from {
          background-position: 0% 50%;
        }
        to {
          background-position: 100% 50%;
        }
      }

      .agi-to-jesus-toast {
        position: fixed;
        top: 20px;
        left: 50%;
        transform: translateX(-50%);
        padding: 20px 32px;
        background: linear-gradient(135deg, #B8860B, #DAA520, #FFD700);
        border: 2px solid #DAA520;
        color: #000;
        font-family: system-ui, -apple-system, sans-serif;
        z-index: 999999;
        transform-origin: top center;
        animation: agi-to-jesus-toast-slide-in ${ANIMATION_DURATIONS.slideIn}ms cubic-bezier(0.4, 0, 0.2, 1) forwards;
        cursor: pointer;
        transition: all 200ms ease;
        font-weight: 900;
        font-size: 16px;
        letter-spacing: 0.2em;
        text-transform: uppercase;
        box-shadow: 0 4px 20px rgba(218, 165, 32, 0.4);
      }

      @keyframes agi-to-jesus-toast-slide-in {
        0% { 
          opacity: 0; 
          transform: translateX(-50%) translateY(-100%) scale(0.95);
        }
        100% { 
          opacity: 1; 
          transform: translateX(-50%) translateY(0) scale(1);
        }
      }

      @keyframes agi-to-jesus-toast-slide-out {
        0% { 
          opacity: 1; 
          transform: translateX(-50%) translateY(0) scale(1);
          filter: blur(0px);
        }
        100% { 
          opacity: 0; 
          transform: translateX(-50%) translateY(-300%) scale(1.8);
          filter: blur(15px);
        }
      }

      @keyframes agi-to-jesus-toast-fade-out {
        0% { 
          opacity: 1; 
          transform: translateX(-50%) translateY(0) scale(1);
        }
        100% { 
          opacity: 0; 
          transform: translateX(-50%) translateY(0) scale(0.95);
        }
      }

      .agi-to-jesus-toast.dismissing {
        animation: agi-to-jesus-toast-slide-out ${ANIMATION_DURATIONS.slideOut}ms cubic-bezier(0.4, 0, 0.2, 1) forwards;
      }

      .agi-to-jesus-toast.dismissing-outside {
        animation: agi-to-jesus-toast-fade-out 200ms ease-out forwards;
      }

      .agi-to-jesus-toast:hover {
        background: linear-gradient(135deg, #DAA520, #FFD700, #FFF8DC);
        transform: translateY(-2px);
        box-shadow: 0 6px 25px rgba(218, 165, 32, 0.6);
      }

      .agi-to-jesus-toast:active {
        transform: translateY(0);
        box-shadow: 0 2px 15px rgba(218, 165, 32, 0.4);
      }

      .agi-to-jesus-toast > span {
        animation: none;
      }

      .agi-to-jesus-toast-subtle {
        position: fixed;
        top: 20px;
        left: 50%;
        transform: translateX(-50%);
        padding: 8px 16px;
        background: rgba(0, 0, 0, 0.85);
        border: 2px solid rgba(218, 165, 32, 0.4);
        border-radius: 12px;
        color: rgba(218, 165, 32, 0.9);
        font-family: system-ui, -apple-system, sans-serif;
        z-index: 999999;
        animation: agi-to-jesus-toast-subtle-slide-in 300ms ease-out forwards;
        font-weight: 500;
        font-size: 13px;
        letter-spacing: 0;
        box-shadow: 0 1px 8px rgba(218, 165, 32, 0.15);
        backdrop-filter: blur(8px);
      }

      @keyframes agi-to-jesus-toast-subtle-slide-in {
        0% { 
          opacity: 0; 
          transform: translateX(-50%) translateY(-10px);
        }
        100% { 
          opacity: 1; 
          transform: translateX(-50%) translateY(0);
        }
      }

      @keyframes agi-to-jesus-toast-subtle-slide-out {
        0% { 
          opacity: 1; 
          transform: translateX(-50%) translateY(0);
        }
        100% { 
          opacity: 0; 
          transform: translateX(-50%) translateY(-10px);
        }
      }

      .agi-to-jesus-toast-subtle.dismissing {
        animation: agi-to-jesus-toast-subtle-slide-out 200ms ease-in forwards;
      }

      .agi-to-jesus-light-cone {
        position: fixed;
        top: 0;
        left: 50%;
        width: 100vw;
        height: 100vh;
        background: radial-gradient(ellipse 80vw 60vh at 50% 0%, 
          rgba(255, 215, 0, 0.3) 0%,
          rgba(218, 165, 32, 0.2) 30%,
          rgba(184, 134, 11, 0.1) 50%,
          transparent 70%);
        transform: translateX(-50%);
        transform-origin: top center;
        z-index: 999998;
        pointer-events: none;
        opacity: 0;
        animation: agi-to-jesus-light-cone 2000ms ease-out forwards;
      }

      @keyframes agi-to-jesus-light-cone {
        0% { 
          opacity: 0;
          transform: translateX(-50%) scaleY(0);
          transform-origin: top center;
        }
        15% { 
          opacity: 1;
          transform: translateX(-50%) scaleY(1);
          transform-origin: top center;
        }
        100% { 
          opacity: 0.8;
          transform: translateX(-50%) scaleY(1);
          transform-origin: top center;
        }
      }

      @keyframes agi-to-jesus-light-cone-fade-out {
        0% { 
          opacity: 0.8;
          transform: translateX(-50%) scaleY(1);
        }
        100% { 
          opacity: 0;
          transform: translateX(-50%) scaleY(1);
        }
      }
    `;

    return styleSheet;
  }

  // Function to show light cone effect
  function showLightCone(): HTMLElement {
    const lightCone = document.createElement("div");
    lightCone.className = "agi-to-jesus-light-cone";
    document.body.appendChild(lightCone);
    return lightCone;
  }

  // Function to fade out light cone
  function fadeOutLightCone(lightCone: HTMLElement): void {
    lightCone.style.animation =
      "agi-to-jesus-light-cone-fade-out 5000ms cubic-bezier(0.25, 0.1, 0.25, 1) forwards";
    setTimeout(() => {
      lightCone.remove();
    }, 5000);
  }

  // Function to show toast notification as a big button
  function showToast(text = "Save Me", autoDismiss = false): Promise<boolean> {
    return new Promise((resolve) => {
      const toast = document.createElement("div");
      toast.className = autoDismiss
        ? "agi-to-jesus-toast-subtle"
        : "agi-to-jesus-toast";
      toast.textContent = text;
      document.body.appendChild(toast);

      const lightCone = autoDismiss ? null : showLightCone();

      if (autoDismiss) {
        setTimeout(() => {
          toast.classList.add("dismissing");
          setTimeout(() => {
            toast.remove();
            resolve(false);
          }, ANIMATION_DURATIONS.slideOut);
        }, 2000);
        return;
      }

      const handleClick = () => {
        toast.classList.add("dismissing");
        if (lightCone) fadeOutLightCone(lightCone);
        resolve(true);
        setTimeout(() => toast.remove(), ANIMATION_DURATIONS.slideOut);
      };

      const handleOutsideClick = (e: MouseEvent) => {
        if (!toast.contains(e.target as Node)) {
          toast.classList.add("dismissing-outside");
          if (lightCone) fadeOutLightCone(lightCone);
          setTimeout(() => {
            toast.remove();
            resolve(false);
          }, 200);
          document.removeEventListener("click", handleOutsideClick);
        }
      };

      toast.addEventListener("click", handleClick);
      document.addEventListener("click", handleOutsideClick);
    });
  }

  // Function to replace text in a text node
  function replaceTextInNode(textNode: Text): void {
    const content = textNode.textContent;
    if (!content) return;

    if (pattern.test(content)) {
      const newContent = content.replace(pattern, () => {
        return `<span class="${replacementClass}"><span>Jesus</span></span>`;
      });

      const span = document.createElement("span");
      span.innerHTML = newContent;
      textNode.parentNode?.replaceChild(span, textNode);
    }
  }

  // Function to walk through DOM nodes
  function walkDOM(node: Node): void {
    if (node.nodeType === Node.TEXT_NODE) {
      replaceTextInNode(node as Text);
      return;
    }

    // Skip script and style tags
    if (node instanceof HTMLScriptElement || node instanceof HTMLStyleElement) {
      return;
    }

    // Recursively process child nodes
    const children = Array.from(node.childNodes);
    children.forEach(walkDOM);
  }

  // Initialize styles and show the toast
  const styleSheet = createStyles();

  // Show toast and wait for user interaction
  showToast().then((enabled) => {
    if (enabled) {
      // User clicked enable - mark as enabled and start the replacement process
      state.enabled = true;
      walkDOM(document.body);

      // Monitor DOM changes to handle dynamically added content
      const observer = new MutationObserver((mutations) => {
        for (const mutation of mutations) {
          for (const node of mutation.addedNodes) {
            walkDOM(node);
          }
        }
      });

      observer.observe(document.body, {
        childList: true,
        subtree: true,
      });

      // Update cleanup method to include observer
      state.cleanup = () => {
        styleSheet.remove();
        observer.disconnect();
        window.__agiToJesus = undefined;
      };
    } else {
      // User dismissed without enabling - clean up
      styleSheet.remove();
      window.__agiToJesus = undefined;
    }
  });
})();
